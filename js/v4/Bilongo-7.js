// @@ Bilongo (Mandinga) p 8/16  by Rodriguez/Palmieri/Newman
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
const fmtsmo26609463 = new VF.Formatter();
//
// voices and notes for stave 0 63
const smo266094v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266094v0ar = [];
const smo266069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo266069.setAttribute('id', 'smo266069');
smo266094v0ar.push(smo266069);
const smo266070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo266070.setAttribute('id', 'smo266070');
smo266094v0ar.push(smo266070);
const smo266071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo266071.setAttribute('id', 'smo266071');
const smo266072 = new VF.Annotation('Ki');
smo266072.setAttribute('id', 'smo266072');
smo266072.setFont('times', 12, 'normal');
smo266072.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266071.addModifier(smo266072);
smo266072.addClass('lyric lyric-0 lyric-hyphen');
smo266094v0ar.push(smo266071);
const smo266073 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo266073.setAttribute('id', 'smo266073');
smo266094v0ar.push(smo266073);
const smo266074 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo266074.setAttribute('id', 'smo266074');
const smo266075 = new VF.Annotation('ki');
smo266075.setAttribute('id', 'smo266075');
smo266075.setFont('times', 12, 'normal');
smo266075.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266074.addModifier(smo266075);
smo266075.addClass('lyric lyric-0 lyric-hyphen');
smo266094v0ar.push(smo266074);
const smo266076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo266076.setAttribute('id', 'smo266076');
const smo266077 = new VF.Annotation('ri');
smo266077.setAttribute('id', 'smo266077');
smo266077.setFont('times', 12, 'normal');
smo266077.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266076.addModifier(smo266077);
smo266077.addClass('lyric lyric-0');
smo266094v0ar.push(smo266076);
smo266094v0.addTickables(smo266094v0ar)
fmtsmo26609463.joinVoices([smo266094v0]);
const fmtsmo26908863 = new VF.Formatter();
//
// voices and notes for stave 1 63
const smo269088v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269088v0ar = [];
const smo269063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo269063.setAttribute('id', 'smo269063');
smo269088v0ar.push(smo269063);
const smo269064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo269064.setAttribute('id', 'smo269064');
smo269088v0ar.push(smo269064);
const smo269065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo269065.setAttribute('id', 'smo269065');
const smo269066 = new VF.Annotation('Ki');
smo269066.setAttribute('id', 'smo269066');
smo269066.setFont('times', 12, 'normal');
smo269066.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269065.addModifier(smo269066);
smo269066.addClass('lyric lyric-0 lyric-hyphen');
smo269088v0ar.push(smo269065);
const smo269067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo269067.setAttribute('id', 'smo269067');
smo269088v0ar.push(smo269067);
const smo269068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo269068.setAttribute('id', 'smo269068');
const smo269069 = new VF.Annotation('ki');
smo269069.setAttribute('id', 'smo269069');
smo269069.setFont('times', 12, 'normal');
smo269069.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269068.addModifier(smo269069);
smo269069.addClass('lyric lyric-0 lyric-hyphen');
smo269088v0ar.push(smo269068);
const smo269070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo269070.setAttribute('id', 'smo269070');
const smo269071 = new VF.Annotation('ri');
smo269071.setAttribute('id', 'smo269071');
smo269071.setFont('times', 12, 'normal');
smo269071.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269070.addModifier(smo269071);
smo269071.addClass('lyric lyric-0');
smo269088v0ar.push(smo269070);
smo269088v0.addTickables(smo269088v0ar)
fmtsmo26908863.joinVoices([smo269088v0]);
const fmtsmo27223163 = new VF.Formatter();
//
// voices and notes for stave 2 63
const smo272231v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272231v0ar = [];
const smo272206 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo272206.setAttribute('id', 'smo272206');
smo272231v0ar.push(smo272206);
const smo272207 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo272207.setAttribute('id', 'smo272207');
smo272231v0ar.push(smo272207);
const smo272208 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo272208.setAttribute('id', 'smo272208');
const smo272209 = new VF.Annotation('Ki');
smo272209.setAttribute('id', 'smo272209');
smo272209.setFont('times', 12, 'normal');
smo272209.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272208.addModifier(smo272209);
smo272209.addClass('lyric lyric-0 lyric-hyphen');
smo272231v0ar.push(smo272208);
const smo272210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo272210.setAttribute('id', 'smo272210');
smo272231v0ar.push(smo272210);
const smo272211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo272211.setAttribute('id', 'smo272211');
const smo272212 = new VF.Annotation('ki');
smo272212.setAttribute('id', 'smo272212');
smo272212.setFont('times', 12, 'normal');
smo272212.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272211.addModifier(smo272212);
smo272212.addClass('lyric lyric-0 lyric-hyphen');
smo272231v0ar.push(smo272211);
const smo272213 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo272213.setAttribute('id', 'smo272213');
const smo272214 = new VF.Annotation('ri');
smo272214.setAttribute('id', 'smo272214');
smo272214.setFont('times', 12, 'normal');
smo272214.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272213.addModifier(smo272214);
smo272214.addClass('lyric lyric-0');
smo272231v0ar.push(smo272213);
smo272231v0.addTickables(smo272231v0ar)
fmtsmo27223163.joinVoices([smo272231v0]);
const fmtsmo27534763 = new VF.Formatter();
//
// voices and notes for stave 3 63
const smo275347v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo275347v0ar = [];
const smo275322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo275322.setAttribute('id', 'smo275322');
smo275347v0ar.push(smo275322);
const smo275323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo275323.setAttribute('id', 'smo275323');
smo275347v0ar.push(smo275323);
const smo275324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo275324.setAttribute('id', 'smo275324');
const smo275325 = new VF.Annotation('Ki');
smo275325.setAttribute('id', 'smo275325');
smo275325.setFont('times', 12, 'normal');
smo275325.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275324.addModifier(smo275325);
smo275325.addClass('lyric lyric-0 lyric-hyphen');
smo275347v0ar.push(smo275324);
const smo275326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo275326.setAttribute('id', 'smo275326');
smo275347v0ar.push(smo275326);
const smo275327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo275327.setAttribute('id', 'smo275327');
const smo275328 = new VF.Annotation('ki');
smo275328.setAttribute('id', 'smo275328');
smo275328.setFont('times', 12, 'normal');
smo275328.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275327.addModifier(smo275328);
smo275328.addClass('lyric lyric-0 lyric-hyphen');
smo275347v0ar.push(smo275327);
const smo275329 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo275329.setAttribute('id', 'smo275329');
const smo275330 = new VF.Annotation('ri');
smo275330.setAttribute('id', 'smo275330');
smo275330.setFont('times', 12, 'normal');
smo275330.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275329.addModifier(smo275330);
smo275330.addClass('lyric lyric-0');
smo275347v0ar.push(smo275329);
smo275347v0.addTickables(smo275347v0ar)
fmtsmo27534763.joinVoices([smo275347v0]);
const fmtsmo27836663 = new VF.Formatter();
//
// voices and notes for stave 4 63
const smo278366v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278366v0ar = [];
const smo278341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo278341.setAttribute('id', 'smo278341');
smo278366v0ar.push(smo278341);
const smo278342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo278342.setAttribute('id', 'smo278342');
smo278366v0ar.push(smo278342);
const smo278343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo278343.setAttribute('id', 'smo278343');
const smo278344 = new VF.Annotation('Ki');
smo278344.setAttribute('id', 'smo278344');
smo278344.setFont('times', 12, 'normal');
smo278344.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278343.addModifier(smo278344);
smo278344.addClass('lyric lyric-0 lyric-hyphen');
smo278366v0ar.push(smo278343);
const smo278345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo278345.setAttribute('id', 'smo278345');
smo278366v0ar.push(smo278345);
const smo278346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo278346.setAttribute('id', 'smo278346');
const smo278347 = new VF.Annotation('ki');
smo278347.setAttribute('id', 'smo278347');
smo278347.setFont('times', 12, 'normal');
smo278347.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278346.addModifier(smo278347);
smo278347.addClass('lyric lyric-0 lyric-hyphen');
smo278366v0ar.push(smo278346);
const smo278348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo278348.setAttribute('id', 'smo278348');
const smo278349 = new VF.Annotation('ri');
smo278349.setAttribute('id', 'smo278349');
smo278349.setFont('times', 12, 'normal');
smo278349.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278348.addModifier(smo278349);
smo278349.addClass('lyric lyric-0');
smo278366v0ar.push(smo278348);
smo278366v0.addTickables(smo278366v0ar)
fmtsmo27836663.joinVoices([smo278366v0]);
const fmtsmo28147363 = new VF.Formatter();
//
// voices and notes for stave 5 63
const smo281473v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo281473v0ar = [];
const smo281447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo281447.setAttribute('id', 'smo281447');
smo281473v0ar.push(smo281447);
const smo281448 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo281448.setAttribute('id', 'smo281448');
smo281473v0ar.push(smo281448);
const smo281449 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo281449.setAttribute('id', 'smo281449');
smo281473v0ar.push(smo281449);
const smo281450 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo281450.setAttribute('id', 'smo281450');
const smo281451 = new VF.Annotation('Ki');
smo281451.setAttribute('id', 'smo281451');
smo281451.setFont('times', 12, 'normal');
smo281451.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281450.addModifier(smo281451);
smo281451.addClass('lyric lyric-0 lyric-hyphen');
smo281473v0ar.push(smo281450);
const smo281452 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo281452.setAttribute('id', 'smo281452');
smo281473v0ar.push(smo281452);
const smo281453 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo281453.setAttribute('id', 'smo281453');
const smo281454 = new VF.Annotation('ki');
smo281454.setAttribute('id', 'smo281454');
smo281454.setFont('times', 12, 'normal');
smo281454.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281453.addModifier(smo281454);
smo281454.addClass('lyric lyric-0 lyric-hyphen');
smo281473v0ar.push(smo281453);
const smo281455 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo281455.setAttribute('id', 'smo281455');
const smo281456 = new VF.Annotation('ri');
smo281456.setAttribute('id', 'smo281456');
smo281456.setFont('times', 12, 'normal');
smo281456.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281455.addModifier(smo281456);
smo281456.addClass('lyric lyric-0');
smo281473v0ar.push(smo281455);
smo281473v0.addTickables(smo281473v0ar)
fmtsmo28147363.joinVoices([smo281473v0]);
const fmtsmo28458563 = new VF.Formatter();
//
// voices and notes for stave 6 63
const smo284585v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo284585v0ar = [];
const smo284560 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo284560.setAttribute('id', 'smo284560');
smo284585v0ar.push(smo284560);
const smo284561 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo284561.setAttribute('id', 'smo284561');
smo284585v0ar.push(smo284561);
const smo284562 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo284562.setAttribute('id', 'smo284562');
const smo284563 = new VF.Annotation('Ki');
smo284563.setAttribute('id', 'smo284563');
smo284563.setFont('times', 12, 'normal');
smo284563.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284562.addModifier(smo284563);
smo284563.addClass('lyric lyric-0 lyric-hyphen');
smo284585v0ar.push(smo284562);
const smo284564 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo284564.setAttribute('id', 'smo284564');
smo284585v0ar.push(smo284564);
const smo284565 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo284565.setAttribute('id', 'smo284565');
const smo284566 = new VF.Annotation('ki');
smo284566.setAttribute('id', 'smo284566');
smo284566.setFont('times', 12, 'normal');
smo284566.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284565.addModifier(smo284566);
smo284566.addClass('lyric lyric-0 lyric-hyphen');
smo284585v0ar.push(smo284565);
const smo284567 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo284567.setAttribute('id', 'smo284567');
const smo284568 = new VF.Annotation('ri');
smo284568.setAttribute('id', 'smo284568');
smo284568.setFont('times', 12, 'normal');
smo284568.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284567.addModifier(smo284568);
smo284568.addClass('lyric lyric-0');
smo284585v0ar.push(smo284567);
smo284585v0.addTickables(smo284585v0ar)
fmtsmo28458563.joinVoices([smo284585v0]);
const fmtsmo28769463 = new VF.Formatter();
//
// voices and notes for stave 7 63
const smo287694v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287694v0ar = [];
const smo287669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo287669.setAttribute('id', 'smo287669');
smo287694v0ar.push(smo287669);
const smo287670 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo287670.setAttribute('id', 'smo287670');
smo287694v0ar.push(smo287670);
const smo287671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo287671.setAttribute('id', 'smo287671');
const smo287672 = new VF.Annotation('Ki');
smo287672.setAttribute('id', 'smo287672');
smo287672.setFont('times', 12, 'normal');
smo287672.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287671.addModifier(smo287672);
smo287672.addClass('lyric lyric-0 lyric-hyphen');
smo287694v0ar.push(smo287671);
const smo287673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo287673.setAttribute('id', 'smo287673');
smo287694v0ar.push(smo287673);
const smo287674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo287674.setAttribute('id', 'smo287674');
const smo287675 = new VF.Annotation('ki');
smo287675.setAttribute('id', 'smo287675');
smo287675.setFont('times', 12, 'normal');
smo287675.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287674.addModifier(smo287675);
smo287675.addClass('lyric lyric-0 lyric-hyphen');
smo287694v0ar.push(smo287674);
const smo287676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo287676.setAttribute('id', 'smo287676');
const smo287677 = new VF.Annotation('ri');
smo287677.setAttribute('id', 'smo287677');
smo287677.setFont('times', 12, 'normal');
smo287677.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287676.addModifier(smo287677);
smo287677.addClass('lyric lyric-0');
smo287694v0ar.push(smo287676);
smo287694v0.addTickables(smo287694v0ar)
fmtsmo28769463.joinVoices([smo287694v0]);
const fmtsmo29078063 = new VF.Formatter();
//
// voices and notes for stave 8 63
const smo290780v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290780v0ar = [];
const smo290755 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo290755.setAttribute('id', 'smo290755');
smo290780v0ar.push(smo290755);
const smo290756 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo290756.setAttribute('id', 'smo290756');
smo290780v0ar.push(smo290756);
const smo290757 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo290757.setAttribute('id', 'smo290757');
const smo290758 = new VF.Annotation('Ki');
smo290758.setAttribute('id', 'smo290758');
smo290758.setFont('times', 12, 'normal');
smo290758.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290757.addModifier(smo290758);
smo290758.addClass('lyric lyric-0 lyric-hyphen');
smo290780v0ar.push(smo290757);
const smo290759 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo290759.setAttribute('id', 'smo290759');
smo290780v0ar.push(smo290759);
const smo290760 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo290760.setAttribute('id', 'smo290760');
const smo290761 = new VF.Annotation('ki');
smo290761.setAttribute('id', 'smo290761');
smo290761.setFont('times', 12, 'normal');
smo290761.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290760.addModifier(smo290761);
smo290761.addClass('lyric lyric-0 lyric-hyphen');
smo290780v0ar.push(smo290760);
const smo290762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo290762.setAttribute('id', 'smo290762');
const smo290763 = new VF.Annotation('ri');
smo290763.setAttribute('id', 'smo290763');
smo290763.setFont('times', 12, 'normal');
smo290763.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290762.addModifier(smo290763);
smo290763.addClass('lyric lyric-0');
smo290780v0ar.push(smo290762);
smo290780v0.addTickables(smo290780v0ar)
fmtsmo29078063.joinVoices([smo290780v0]);
const fmtsmo29386963 = new VF.Formatter();
//
// voices and notes for stave 9 63
const smo293869v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo293869v0ar = [];
const smo293844 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo293844.setAttribute('id', 'smo293844');
smo293869v0ar.push(smo293844);
const smo293845 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo293845.setAttribute('id', 'smo293845');
smo293869v0ar.push(smo293845);
const smo293846 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo293846.setAttribute('id', 'smo293846');
const smo293847 = new VF.Annotation('Ki');
smo293847.setAttribute('id', 'smo293847');
smo293847.setFont('times', 12, 'normal');
smo293847.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293846.addModifier(smo293847);
smo293847.addClass('lyric lyric-0 lyric-hyphen');
smo293869v0ar.push(smo293846);
const smo293848 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo293848.setAttribute('id', 'smo293848');
smo293869v0ar.push(smo293848);
const smo293849 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo293849.setAttribute('id', 'smo293849');
const smo293850 = new VF.Annotation('ki');
smo293850.setAttribute('id', 'smo293850');
smo293850.setFont('times', 12, 'normal');
smo293850.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293849.addModifier(smo293850);
smo293850.addClass('lyric lyric-0 lyric-hyphen');
smo293869v0ar.push(smo293849);
const smo293851 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo293851.setAttribute('id', 'smo293851');
const smo293852 = new VF.Annotation('ri');
smo293852.setAttribute('id', 'smo293852');
smo293852.setFont('times', 12, 'normal');
smo293852.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293851.addModifier(smo293852);
smo293852.addClass('lyric lyric-0');
smo293869v0ar.push(smo293851);
smo293869v0.addTickables(smo293869v0ar)
fmtsmo29386963.joinVoices([smo293869v0]);
const fmtsmo29690963 = new VF.Formatter();
//
// voices and notes for stave 10 63
const smo296909v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo296909v0ar = [];
const smo296884 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo296884.setAttribute('id', 'smo296884');
smo296909v0ar.push(smo296884);
const smo296885 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo296885.setAttribute('id', 'smo296885');
smo296909v0ar.push(smo296885);
const smo296886 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo296886.setAttribute('id', 'smo296886');
const smo296887 = new VF.Annotation('Ki');
smo296887.setAttribute('id', 'smo296887');
smo296887.setFont('times', 12, 'normal');
smo296887.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296886.addModifier(smo296887);
smo296887.addClass('lyric lyric-0 lyric-hyphen');
smo296909v0ar.push(smo296886);
const smo296888 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo296888.setAttribute('id', 'smo296888');
smo296909v0ar.push(smo296888);
const smo296889 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo296889.setAttribute('id', 'smo296889');
const smo296890 = new VF.Annotation('ki');
smo296890.setAttribute('id', 'smo296890');
smo296890.setFont('times', 12, 'normal');
smo296890.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296889.addModifier(smo296890);
smo296890.addClass('lyric lyric-0 lyric-hyphen');
smo296909v0ar.push(smo296889);
const smo296891 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo296891.setAttribute('id', 'smo296891');
const smo296892 = new VF.Annotation('ri');
smo296892.setAttribute('id', 'smo296892');
smo296892.setFont('times', 12, 'normal');
smo296892.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296891.addModifier(smo296892);
smo296892.addClass('lyric lyric-0');
smo296909v0ar.push(smo296891);
smo296909v0.addTickables(smo296909v0ar)
fmtsmo29690963.joinVoices([smo296909v0]);
const fmtsmo29996363 = new VF.Formatter();
//
// voices and notes for stave 11 63
const smo299963v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo299963v0ar = [];
const smo299938 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo299938.setAttribute('id', 'smo299938');
smo299963v0ar.push(smo299938);
const smo299939 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo299939.setAttribute('id', 'smo299939');
smo299963v0ar.push(smo299939);
const smo299940 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo299940.setAttribute('id', 'smo299940');
const smo299941 = new VF.Annotation('Ki');
smo299941.setAttribute('id', 'smo299941');
smo299941.setFont('times', 12, 'normal');
smo299941.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo299940.addModifier(smo299941);
smo299941.addClass('lyric lyric-0 lyric-hyphen');
smo299963v0ar.push(smo299940);
const smo299942 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo299942.setAttribute('id', 'smo299942');
smo299963v0ar.push(smo299942);
const smo299943 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo299943.setAttribute('id', 'smo299943');
const smo299944 = new VF.Annotation('ki');
smo299944.setAttribute('id', 'smo299944');
smo299944.setFont('times', 12, 'normal');
smo299944.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo299943.addModifier(smo299944);
smo299944.addClass('lyric lyric-0 lyric-hyphen');
smo299963v0ar.push(smo299943);
const smo299945 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo299945.setAttribute('id', 'smo299945');
const smo299946 = new VF.Annotation('ri');
smo299946.setAttribute('id', 'smo299946');
smo299946.setFont('times', 12, 'normal');
smo299946.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo299945.addModifier(smo299946);
smo299946.addClass('lyric lyric-0');
smo299963v0ar.push(smo299945);
smo299963v0.addTickables(smo299963v0ar)
fmtsmo29996363.joinVoices([smo299963v0]);
const fmtsmo30300663 = new VF.Formatter();
//
// voices and notes for stave 12 63
const smo303006v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo303006v0ar = [];
const smo302981 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo302981.setAttribute('id', 'smo302981');
smo303006v0ar.push(smo302981);
const smo302982 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo302982.setAttribute('id', 'smo302982');
smo303006v0ar.push(smo302982);
const smo302983 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo302983.setAttribute('id', 'smo302983');
const smo302984 = new VF.Annotation('Ki');
smo302984.setAttribute('id', 'smo302984');
smo302984.setFont('times', 12, 'normal');
smo302984.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo302983.addModifier(smo302984);
smo302984.addClass('lyric lyric-0 lyric-hyphen');
smo303006v0ar.push(smo302983);
const smo302985 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo302985.setAttribute('id', 'smo302985');
smo303006v0ar.push(smo302985);
const smo302986 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo302986.setAttribute('id', 'smo302986');
const smo302987 = new VF.Annotation('ki');
smo302987.setAttribute('id', 'smo302987');
smo302987.setFont('times', 12, 'normal');
smo302987.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo302986.addModifier(smo302987);
smo302987.addClass('lyric lyric-0 lyric-hyphen');
smo303006v0ar.push(smo302986);
const smo302988 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo302988.setAttribute('id', 'smo302988');
const smo302989 = new VF.Annotation('ri');
smo302989.setAttribute('id', 'smo302989');
smo302989.setFont('times', 12, 'normal');
smo302989.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo302988.addModifier(smo302989);
smo302989.addClass('lyric lyric-0');
smo303006v0ar.push(smo302988);
smo303006v0.addTickables(smo303006v0ar)
fmtsmo30300663.joinVoices([smo303006v0]);
const fmtsmo30622263 = new VF.Formatter();
//
// voices and notes for stave 13 63
const smo306222v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo306222v0ar = [];
const smo306199 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo306199.setAttribute('id', 'smo306199');
smo306222v0ar.push(smo306199);
const smo306200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo306200.setAttribute('id', 'smo306200');
smo306222v0ar.push(smo306200);
const smo306201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo306201.setAttribute('id', 'smo306201');
smo306222v0ar.push(smo306201);
const smo306202 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo306202.setAttribute('id', 'smo306202');
const smo3062020acc = new VF.Accidental('#');
smo306202.addModifier(smo3062020acc, 0);
smo306222v0ar.push(smo306202);
const smo306203 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo306203.setAttribute('id', 'smo306203');
smo306222v0ar.push(smo306203);
const smo306204 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo306204.setAttribute('id', 'smo306204');
smo306222v0ar.push(smo306204);
const smo306205 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo306205.setAttribute('id', 'smo306205');
smo306222v0ar.push(smo306205);
smo306222v0.addTickables(smo306222v0ar)
fmtsmo30622263.joinVoices([smo306222v0]);
const fmtsmo30943563 = new VF.Formatter();
//
// voices and notes for stave 14 63
const smo309435v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309435v0ar = [];
const smo309412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","ab/4/n","bb/4/n","dn/5/n"]}'))
smo309412.setAttribute('id', 'smo309412');
const smo3094121acc = new VF.Accidental('b');
smo309412.addModifier(smo3094121acc, 1);
smo309435v0ar.push(smo309412);
const smo309413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo309413.setAttribute('id', 'smo309413');
smo309435v0ar.push(smo309413);
const smo309414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo309414.setAttribute('id', 'smo309414');
smo309435v0ar.push(smo309414);
const smo309415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo309415.setAttribute('id', 'smo309415');
const smo3094150acc = new VF.Accidental('#');
smo309415.addModifier(smo3094150acc, 0);
const smo3094151acc = new VF.Accidental('n');
smo309415.addModifier(smo3094151acc, 1);
smo309435v0ar.push(smo309415);
const smo309416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo309416.setAttribute('id', 'smo309416');
smo309435v0ar.push(smo309416);
const smo309417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo309417.setAttribute('id', 'smo309417');
smo309435v0ar.push(smo309417);
const smo309418 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo309418.setAttribute('id', 'smo309418');
smo309435v0ar.push(smo309418);
smo309435v0.addTickables(smo309435v0ar)
fmtsmo30943563.joinVoices([smo309435v0]);
const fmtsmo31263063 = new VF.Formatter();
//
// voices and notes for stave 15 63
const smo312630v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo312630v0ar = [];
const smo312607 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo312607.setAttribute('id', 'smo312607');
smo312630v0ar.push(smo312607);
const smo312608 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo312608.setAttribute('id', 'smo312608');
smo312630v0ar.push(smo312608);
const smo312609 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo312609.setAttribute('id', 'smo312609');
smo312630v0ar.push(smo312609);
const smo312610 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo312610.setAttribute('id', 'smo312610');
smo312630v0ar.push(smo312610);
const smo312611 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo312611.setAttribute('id', 'smo312611');
smo312630v0ar.push(smo312611);
const smo312612 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo312612.setAttribute('id', 'smo312612');
smo312630v0ar.push(smo312612);
const smo312613 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo312613.setAttribute('id', 'smo312613');
smo312630v0ar.push(smo312613);
smo312630v0.addTickables(smo312630v0ar)
fmtsmo31263063.joinVoices([smo312630v0]);
const fmtsmo31574963 = new VF.Formatter();
//
// voices and notes for stave 16 63
const smo315749v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo315749v0ar = [];
const smo315730 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo315730.setAttribute('id', 'smo315730');
smo315749v0ar.push(smo315730);
const smo315731 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo315731.setAttribute('id', 'smo315731');
smo315749v0ar.push(smo315731);
const smo315732 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo315732.setAttribute('id', 'smo315732');
smo315749v0ar.push(smo315732);
smo315749v0.addTickables(smo315749v0ar)
fmtsmo31574963.joinVoices([smo315749v0]);
const fmtsmo31893063 = new VF.Formatter();
//
// voices and notes for stave 17 63
const smo318930v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo318930v0ar = [];
const smo318910 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo318910.setAttribute('id', 'smo318910');
const smo3189100acc = new VF.Accidental('n');
smo318910.addModifier(smo3189100acc, 0);
smo318910.addModifier(new VF.Dot(), 0);
smo318930v0ar.push(smo318910);
const smo318911 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo318911.setAttribute('id', 'smo318911');
smo318930v0ar.push(smo318911);
const smo318912 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo318912.setAttribute('id', 'smo318912');
smo318930v0ar.push(smo318912);
const smo318913 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo318913.setAttribute('id', 'smo318913');
smo318930v0ar.push(smo318913);
smo318930v0.addTickables(smo318930v0ar)
fmtsmo31893063.joinVoices([smo318930v0]);
// create beam groups and tuplets for format grp smo320731 before formatting
const dirsmo412002 = smo266071.getStemDirection();
smo266071.setStemDirection(dirsmo412002);
smo266073.setStemDirection(dirsmo412002);
const smo412002 = new VF.Beam([smo266071,smo266073]);
const dirsmo412005 = smo269065.getStemDirection();
smo269065.setStemDirection(dirsmo412005);
smo269067.setStemDirection(dirsmo412005);
const smo412005 = new VF.Beam([smo269065,smo269067]);
const dirsmo412008 = smo272208.getStemDirection();
smo272208.setStemDirection(dirsmo412008);
smo272210.setStemDirection(dirsmo412008);
const smo412008 = new VF.Beam([smo272208,smo272210]);
const dirsmo412011 = smo275324.getStemDirection();
smo275324.setStemDirection(dirsmo412011);
smo275326.setStemDirection(dirsmo412011);
const smo412011 = new VF.Beam([smo275324,smo275326]);
const dirsmo412014 = smo278343.getStemDirection();
smo278343.setStemDirection(dirsmo412014);
smo278345.setStemDirection(dirsmo412014);
const smo412014 = new VF.Beam([smo278343,smo278345]);
 
// formatting measures in staff group smo320731
fmtsmo26609463.format([smo266094v0,smo269088v0,smo272231v0,smo275347v0,smo278366v0], 261);
const stavesmo266094 = new VF.Stave(159, 210, 347);
stavesmo266094.setAttribute('id', 'stavesmo266094');
stavesmo266094.setBegBarType(1);
stavesmo266094.setSection('D', 0);
stavesmo266094.addClef('treble');
const keysmo266094 = new VF.KeySignature('D');
keysmo266094.addToStave(stavesmo266094);
stavesmo266094.setContext(context);
stavesmo266094.draw();
smo266094v0.draw(context, stavesmo266094);
smo412002.setContext(context);
smo412002.draw();
const stavesmo269088 = new VF.Stave(159, 316, 347);
stavesmo269088.setAttribute('id', 'stavesmo269088');
stavesmo269088.setBegBarType(1);
stavesmo269088.addClef('treble');
const keysmo269088 = new VF.KeySignature('D');
keysmo269088.addToStave(stavesmo269088);
stavesmo269088.setContext(context);
stavesmo269088.draw();
smo269088v0.draw(context, stavesmo269088);
smo412005.setContext(context);
smo412005.draw();
const stavesmo272231 = new VF.Stave(159, 437, 347);
stavesmo272231.setAttribute('id', 'stavesmo272231');
stavesmo272231.setBegBarType(1);
stavesmo272231.addClef('treble');
const keysmo272231 = new VF.KeySignature('G');
keysmo272231.addToStave(stavesmo272231);
stavesmo272231.setContext(context);
stavesmo272231.draw();
smo272231v0.draw(context, stavesmo272231);
smo412008.setContext(context);
smo412008.draw();
const stavesmo275347 = new VF.Stave(159, 553, 347);
stavesmo275347.setAttribute('id', 'stavesmo275347');
stavesmo275347.setBegBarType(1);
stavesmo275347.addClef('treble');
const keysmo275347 = new VF.KeySignature('G');
keysmo275347.addToStave(stavesmo275347);
stavesmo275347.setContext(context);
stavesmo275347.draw();
smo275347v0.draw(context, stavesmo275347);
smo412011.setContext(context);
smo412011.draw();
const stavesmo278366 = new VF.Stave(159, 659, 347);
stavesmo278366.setAttribute('id', 'stavesmo278366');
stavesmo278366.setBegBarType(1);
stavesmo278366.addClef('treble');
const keysmo278366 = new VF.KeySignature('D');
keysmo278366.addToStave(stavesmo278366);
stavesmo278366.setContext(context);
stavesmo278366.draw();
smo278366v0.draw(context, stavesmo278366);
smo412014.setContext(context);
smo412014.draw();
// create beam groups and tuplets for format grp smo320733 before formatting
const dirsmo412017 = smo281447.getStemDirection();
smo281447.setStemDirection(dirsmo412017);
smo281448.setStemDirection(dirsmo412017);
const smo412017 = new VF.Beam([smo281447,smo281448]);
const dirsmo412018 = smo281450.getStemDirection();
smo281450.setStemDirection(dirsmo412018);
smo281452.setStemDirection(dirsmo412018);
const smo412018 = new VF.Beam([smo281450,smo281452]);
const dirsmo412021 = smo284562.getStemDirection();
smo284562.setStemDirection(dirsmo412021);
smo284564.setStemDirection(dirsmo412021);
const smo412021 = new VF.Beam([smo284562,smo284564]);
const dirsmo412024 = smo287671.getStemDirection();
smo287671.setStemDirection(dirsmo412024);
smo287673.setStemDirection(dirsmo412024);
const smo412024 = new VF.Beam([smo287671,smo287673]);
const dirsmo412027 = smo290757.getStemDirection();
smo290757.setStemDirection(dirsmo412027);
smo290759.setStemDirection(dirsmo412027);
const smo412027 = new VF.Beam([smo290757,smo290759]);
 
// formatting measures in staff group smo320733
fmtsmo28147363.format([smo281473v0,smo284585v0,smo287694v0,smo290780v0], 274);
const stavesmo281473 = new VF.Stave(159, 780, 347);
stavesmo281473.setAttribute('id', 'stavesmo281473');
stavesmo281473.setBegBarType(1);
stavesmo281473.addClef('treble');
const keysmo281473 = new VF.KeySignature('G');
keysmo281473.addToStave(stavesmo281473);
stavesmo281473.setContext(context);
stavesmo281473.draw();
smo281473v0.draw(context, stavesmo281473);
smo412017.setContext(context);
smo412017.draw();
smo412018.setContext(context);
smo412018.draw();
const stavesmo284585 = new VF.Stave(159, 896, 347);
stavesmo284585.setAttribute('id', 'stavesmo284585');
stavesmo284585.setBegBarType(1);
stavesmo284585.addClef('treble');
const keysmo284585 = new VF.KeySignature('G');
keysmo284585.addToStave(stavesmo284585);
stavesmo284585.setContext(context);
stavesmo284585.draw();
smo284585v0.draw(context, stavesmo284585);
smo412021.setContext(context);
smo412021.draw();
const stavesmo287694 = new VF.Stave(159, 1012, 347);
stavesmo287694.setAttribute('id', 'stavesmo287694');
stavesmo287694.setBegBarType(1);
stavesmo287694.addClef('treble');
const keysmo287694 = new VF.KeySignature('G');
keysmo287694.addToStave(stavesmo287694);
stavesmo287694.setContext(context);
stavesmo287694.draw();
smo287694v0.draw(context, stavesmo287694);
smo412024.setContext(context);
smo412024.draw();
const stavesmo290780 = new VF.Stave(159, 1128, 347);
stavesmo290780.setAttribute('id', 'stavesmo290780');
stavesmo290780.setBegBarType(1);
stavesmo290780.addClef('treble');
const keysmo290780 = new VF.KeySignature('G');
keysmo290780.addToStave(stavesmo290780);
stavesmo290780.setContext(context);
stavesmo290780.draw();
smo290780v0.draw(context, stavesmo290780);
smo412027.setContext(context);
smo412027.draw();
// create beam groups and tuplets for format grp smo320735 before formatting
const dirsmo412030 = smo293846.getStemDirection();
smo293846.setStemDirection(dirsmo412030);
smo293848.setStemDirection(dirsmo412030);
const smo412030 = new VF.Beam([smo293846,smo293848]);
const dirsmo412033 = smo296886.getStemDirection();
smo296886.setStemDirection(dirsmo412033);
smo296888.setStemDirection(dirsmo412033);
const smo412033 = new VF.Beam([smo296886,smo296888]);
const dirsmo412036 = smo299940.getStemDirection();
smo299940.setStemDirection(dirsmo412036);
smo299942.setStemDirection(dirsmo412036);
const smo412036 = new VF.Beam([smo299940,smo299942]);
const dirsmo412039 = smo302983.getStemDirection();
smo302983.setStemDirection(dirsmo412039);
smo302985.setStemDirection(dirsmo412039);
const smo412039 = new VF.Beam([smo302983,smo302985]);
 
// formatting measures in staff group smo320735
fmtsmo29386963.format([smo293869v0,smo296909v0,smo299963v0,smo303006v0], 274);
const stavesmo293869 = new VF.Stave(159, 1264, 347);
stavesmo293869.setAttribute('id', 'stavesmo293869');
stavesmo293869.setBegBarType(1);
stavesmo293869.addClef('bass');
const keysmo293869 = new VF.KeySignature('F');
keysmo293869.addToStave(stavesmo293869);
stavesmo293869.setContext(context);
stavesmo293869.draw();
smo293869v0.draw(context, stavesmo293869);
smo412030.setContext(context);
smo412030.draw();
const stavesmo296909 = new VF.Stave(159, 1400, 347);
stavesmo296909.setAttribute('id', 'stavesmo296909');
stavesmo296909.setBegBarType(1);
stavesmo296909.addClef('bass');
const keysmo296909 = new VF.KeySignature('F');
keysmo296909.addToStave(stavesmo296909);
stavesmo296909.setContext(context);
stavesmo296909.draw();
smo296909v0.draw(context, stavesmo296909);
smo412033.setContext(context);
smo412033.draw();
const stavesmo299963 = new VF.Stave(159, 1536, 347);
stavesmo299963.setAttribute('id', 'stavesmo299963');
stavesmo299963.setBegBarType(1);
stavesmo299963.addClef('bass');
const keysmo299963 = new VF.KeySignature('F');
keysmo299963.addToStave(stavesmo299963);
stavesmo299963.setContext(context);
stavesmo299963.draw();
smo299963v0.draw(context, stavesmo299963);
smo412036.setContext(context);
smo412036.draw();
const stavesmo303006 = new VF.Stave(159, 1672, 347);
stavesmo303006.setAttribute('id', 'stavesmo303006');
stavesmo303006.setBegBarType(1);
stavesmo303006.addClef('bass');
const keysmo303006 = new VF.KeySignature('F');
keysmo303006.addToStave(stavesmo303006);
stavesmo303006.setContext(context);
stavesmo303006.draw();
smo303006v0.draw(context, stavesmo303006);
smo412039.setContext(context);
smo412039.draw();
// create beam groups and tuplets for format grp smo308054 before formatting
const dirsmo412042 = smo306202.getStemDirection();
smo306202.setStemDirection(dirsmo412042);
smo306203.setStemDirection(dirsmo412042);
const smo412042 = new VF.Beam([smo306202,smo306203]);
 
// formatting measures in staff group smo308054
fmtsmo30622263.format([smo306222v0], 276);
const stavesmo306222 = new VF.Stave(159, 1818, 347);
stavesmo306222.setAttribute('id', 'stavesmo306222');
stavesmo306222.setBegBarType(1);
stavesmo306222.addClef('treble');
const keysmo306222 = new VF.KeySignature('F');
keysmo306222.addToStave(stavesmo306222);
stavesmo306222.setContext(context);
stavesmo306222.draw();
smo306222v0.draw(context, stavesmo306222);
smo412042.setContext(context);
smo412042.draw();
// create beam groups and tuplets for format grp smo320729 before formatting
const dirsmo412045 = smo309415.getStemDirection();
smo309415.setStemDirection(dirsmo412045);
smo309416.setStemDirection(dirsmo412045);
const smo412045 = new VF.Beam([smo309415,smo309416]);
const dirsmo412048 = smo312610.getStemDirection();
smo312610.setStemDirection(dirsmo412048);
smo312611.setStemDirection(dirsmo412048);
const smo412048 = new VF.Beam([smo312610,smo312611]);
 
// formatting measures in staff group smo320729
fmtsmo30943563.format([smo309435v0,smo312630v0], 276);
const stavesmo309435 = new VF.Stave(159, 1924, 347);
stavesmo309435.setAttribute('id', 'stavesmo309435');
stavesmo309435.setBegBarType(1);
stavesmo309435.addClef('treble');
const keysmo309435 = new VF.KeySignature('F');
keysmo309435.addToStave(stavesmo309435);
stavesmo309435.setContext(context);
stavesmo309435.draw();
smo309435v0.draw(context, stavesmo309435);
smo412045.setContext(context);
smo412045.draw();
const stavesmo312630 = new VF.Stave(159, 2010, 347);
stavesmo312630.setAttribute('id', 'stavesmo312630');
stavesmo312630.setBegBarType(1);
stavesmo312630.addClef('bass');
const keysmo312630 = new VF.KeySignature('F');
keysmo312630.addToStave(stavesmo312630);
stavesmo312630.setContext(context);
stavesmo312630.draw();
smo312630v0.draw(context, stavesmo312630);
smo412048.setContext(context);
smo412048.draw();
// create beam groups and tuplets for format grp smo317567 before formatting
 
// formatting measures in staff group smo317567
fmtsmo31574963.format([smo315749v0], 274);
const stavesmo315749 = new VF.Stave(159, 2081, 347);
stavesmo315749.setAttribute('id', 'stavesmo315749');
stavesmo315749.setBegBarType(1);
stavesmo315749.addClef('bass');
const keysmo315749 = new VF.KeySignature('F');
keysmo315749.addToStave(stavesmo315749);
stavesmo315749.setContext(context);
stavesmo315749.draw();
smo315749v0.draw(context, stavesmo315749);
// create beam groups and tuplets for format grp smo320723 before formatting
 
// formatting measures in staff group smo320723
fmtsmo31893063.format([smo318930v0], 282);
const stavesmo318930 = new VF.Stave(159, 2152, 347);
stavesmo318930.setAttribute('id', 'stavesmo318930');
stavesmo318930.setBegBarType(1);
stavesmo318930.addClef('percussion');
const keysmo318930 = new VF.KeySignature('F');
keysmo318930.addToStave(stavesmo318930);
stavesmo318930.setContext(context);
stavesmo318930.draw();
smo318930v0.draw(context, stavesmo318930);
const leftsmo320723stavesmo26609417 = new VF.StaveConnector(stavesmo266094, stavesmo278366).setType(3);
leftsmo320723stavesmo26609417.setContext(context).draw();
const leftsmo320723stavesmo28147317 = new VF.StaveConnector(stavesmo281473, stavesmo290780).setType(3);
leftsmo320723stavesmo28147317.setContext(context).draw();
const leftsmo320723stavesmo29386917 = new VF.StaveConnector(stavesmo293869, stavesmo303006).setType(1);
leftsmo320723stavesmo29386917.setContext(context).draw();
const leftsmo320723stavesmo30943517 = new VF.StaveConnector(stavesmo309435, stavesmo312630).setType(3);
leftsmo320723stavesmo30943517.setContext(context).draw();
const fmtsmo26611964 = new VF.Formatter();
//
// voices and notes for stave 0 64
const smo266119v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266119v0ar = [];
const smo266095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo266095.setAttribute('id', 'smo266095');
const smo266096 = new VF.Annotation('bun');
smo266096.setAttribute('id', 'smo266096');
smo266096.setFont('times', 12, 'normal');
smo266096.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266095.addModifier(smo266096);
smo266096.addClass('lyric lyric-0');
smo266119v0ar.push(smo266095);
const smo266097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo266097.setAttribute('id', 'smo266097');
smo266119v0ar.push(smo266097);
const smo266098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo266098.setAttribute('id', 'smo266098');
smo266119v0ar.push(smo266098);
const smo266099 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo266099.setAttribute('id', 'smo266099');
const smo266100 = new VF.Annotation('Man');
smo266100.setAttribute('id', 'smo266100');
smo266100.setFont('times', 12, 'normal');
smo266100.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266099.addModifier(smo266100);
smo266100.addClass('lyric lyric-0 lyric-hyphen');
smo266119v0ar.push(smo266099);
const smo266101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo266101.setAttribute('id', 'smo266101');
smo266119v0ar.push(smo266101);
const smo266102 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo266102.setAttribute('id', 'smo266102');
const smo2661020acc = new VF.Accidental('n');
smo266102.addModifier(smo2661020acc, 0);
const smo266103 = new VF.Annotation('ding');
smo266103.setAttribute('id', 'smo266103');
smo266103.setFont('times', 12, 'normal');
smo266103.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266102.addModifier(smo266103);
smo266103.addClass('lyric lyric-0 lyric-hyphen');
smo266119v0ar.push(smo266102);
smo266119v0.addTickables(smo266119v0ar)
fmtsmo26611964.joinVoices([smo266119v0]);
const fmtsmo26911364 = new VF.Formatter();
//
// voices and notes for stave 1 64
const smo269113v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269113v0ar = [];
const smo269089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo269089.setAttribute('id', 'smo269089');
const smo269090 = new VF.Annotation('bun');
smo269090.setAttribute('id', 'smo269090');
smo269090.setFont('times', 12, 'normal');
smo269090.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269089.addModifier(smo269090);
smo269090.addClass('lyric lyric-0');
smo269113v0ar.push(smo269089);
const smo269091 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo269091.setAttribute('id', 'smo269091');
smo269113v0ar.push(smo269091);
const smo269092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo269092.setAttribute('id', 'smo269092');
smo269113v0ar.push(smo269092);
const smo269093 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo269093.setAttribute('id', 'smo269093');
const smo269094 = new VF.Annotation('Man');
smo269094.setAttribute('id', 'smo269094');
smo269094.setFont('times', 12, 'normal');
smo269094.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269093.addModifier(smo269094);
smo269094.addClass('lyric lyric-0 lyric-hyphen');
smo269113v0ar.push(smo269093);
const smo269095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo269095.setAttribute('id', 'smo269095');
smo269113v0ar.push(smo269095);
const smo269096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo269096.setAttribute('id', 'smo269096');
const smo2690960acc = new VF.Accidental('n');
smo269096.addModifier(smo2690960acc, 0);
const smo269097 = new VF.Annotation('ding');
smo269097.setAttribute('id', 'smo269097');
smo269097.setFont('times', 12, 'normal');
smo269097.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269096.addModifier(smo269097);
smo269097.addClass('lyric lyric-0 lyric-hyphen');
smo269113v0ar.push(smo269096);
smo269113v0.addTickables(smo269113v0ar)
fmtsmo26911364.joinVoices([smo269113v0]);
const fmtsmo27225664 = new VF.Formatter();
//
// voices and notes for stave 2 64
const smo272256v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272256v0ar = [];
const smo272232 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo272232.setAttribute('id', 'smo272232');
const smo272233 = new VF.Annotation('bun');
smo272233.setAttribute('id', 'smo272233');
smo272233.setFont('times', 12, 'normal');
smo272233.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272232.addModifier(smo272233);
smo272233.addClass('lyric lyric-0');
smo272256v0ar.push(smo272232);
const smo272234 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo272234.setAttribute('id', 'smo272234');
smo272256v0ar.push(smo272234);
const smo272235 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo272235.setAttribute('id', 'smo272235');
smo272256v0ar.push(smo272235);
const smo272236 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo272236.setAttribute('id', 'smo272236');
const smo272237 = new VF.Annotation('Man');
smo272237.setAttribute('id', 'smo272237');
smo272237.setFont('times', 12, 'normal');
smo272237.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272236.addModifier(smo272237);
smo272237.addClass('lyric lyric-0 lyric-hyphen');
smo272256v0ar.push(smo272236);
const smo272238 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo272238.setAttribute('id', 'smo272238');
smo272256v0ar.push(smo272238);
const smo272239 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo272239.setAttribute('id', 'smo272239');
const smo2722390acc = new VF.Accidental('n');
smo272239.addModifier(smo2722390acc, 0);
const smo272240 = new VF.Annotation('ding');
smo272240.setAttribute('id', 'smo272240');
smo272240.setFont('times', 12, 'normal');
smo272240.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272239.addModifier(smo272240);
smo272240.addClass('lyric lyric-0 lyric-hyphen');
smo272256v0ar.push(smo272239);
smo272256v0.addTickables(smo272256v0ar)
fmtsmo27225664.joinVoices([smo272256v0]);
const fmtsmo27537264 = new VF.Formatter();
//
// voices and notes for stave 3 64
const smo275372v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo275372v0ar = [];
const smo275348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo275348.setAttribute('id', 'smo275348');
const smo275349 = new VF.Annotation('bun');
smo275349.setAttribute('id', 'smo275349');
smo275349.setFont('times', 12, 'normal');
smo275349.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275348.addModifier(smo275349);
smo275349.addClass('lyric lyric-0');
smo275372v0ar.push(smo275348);
const smo275350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo275350.setAttribute('id', 'smo275350');
smo275372v0ar.push(smo275350);
const smo275351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo275351.setAttribute('id', 'smo275351');
smo275372v0ar.push(smo275351);
const smo275352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo275352.setAttribute('id', 'smo275352');
const smo275353 = new VF.Annotation('Man');
smo275353.setAttribute('id', 'smo275353');
smo275353.setFont('times', 12, 'normal');
smo275353.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275352.addModifier(smo275353);
smo275353.addClass('lyric lyric-0 lyric-hyphen');
smo275372v0ar.push(smo275352);
const smo275354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo275354.setAttribute('id', 'smo275354');
smo275372v0ar.push(smo275354);
const smo275355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo275355.setAttribute('id', 'smo275355');
const smo2753550acc = new VF.Accidental('n');
smo275355.addModifier(smo2753550acc, 0);
const smo275356 = new VF.Annotation('ding');
smo275356.setAttribute('id', 'smo275356');
smo275356.setFont('times', 12, 'normal');
smo275356.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275355.addModifier(smo275356);
smo275356.addClass('lyric lyric-0 lyric-hyphen');
smo275372v0ar.push(smo275355);
smo275372v0.addTickables(smo275372v0ar)
fmtsmo27537264.joinVoices([smo275372v0]);
const fmtsmo27839164 = new VF.Formatter();
//
// voices and notes for stave 4 64
const smo278391v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278391v0ar = [];
const smo278367 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo278367.setAttribute('id', 'smo278367');
const smo278368 = new VF.Annotation('bun');
smo278368.setAttribute('id', 'smo278368');
smo278368.setFont('times', 12, 'normal');
smo278368.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278367.addModifier(smo278368);
smo278368.addClass('lyric lyric-0');
smo278391v0ar.push(smo278367);
const smo278369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo278369.setAttribute('id', 'smo278369');
smo278391v0ar.push(smo278369);
const smo278370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo278370.setAttribute('id', 'smo278370');
smo278391v0ar.push(smo278370);
const smo278371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo278371.setAttribute('id', 'smo278371');
const smo278372 = new VF.Annotation('Man');
smo278372.setAttribute('id', 'smo278372');
smo278372.setFont('times', 12, 'normal');
smo278372.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278371.addModifier(smo278372);
smo278372.addClass('lyric lyric-0 lyric-hyphen');
smo278391v0ar.push(smo278371);
const smo278373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo278373.setAttribute('id', 'smo278373');
smo278391v0ar.push(smo278373);
const smo278374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo278374.setAttribute('id', 'smo278374');
const smo2783740acc = new VF.Accidental('n');
smo278374.addModifier(smo2783740acc, 0);
const smo278375 = new VF.Annotation('ding');
smo278375.setAttribute('id', 'smo278375');
smo278375.setFont('times', 12, 'normal');
smo278375.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278374.addModifier(smo278375);
smo278375.addClass('lyric lyric-0 lyric-hyphen');
smo278391v0ar.push(smo278374);
smo278391v0.addTickables(smo278391v0ar)
fmtsmo27839164.joinVoices([smo278391v0]);
const fmtsmo28149864 = new VF.Formatter();
//
// voices and notes for stave 5 64
const smo281498v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo281498v0ar = [];
const smo281474 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo281474.setAttribute('id', 'smo281474');
const smo281475 = new VF.Annotation('bun');
smo281475.setAttribute('id', 'smo281475');
smo281475.setFont('times', 12, 'normal');
smo281475.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281474.addModifier(smo281475);
smo281475.addClass('lyric lyric-0');
smo281498v0ar.push(smo281474);
const smo281476 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo281476.setAttribute('id', 'smo281476');
smo281498v0ar.push(smo281476);
const smo281477 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo281477.setAttribute('id', 'smo281477');
smo281498v0ar.push(smo281477);
const smo281478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo281478.setAttribute('id', 'smo281478');
const smo281479 = new VF.Annotation('Man');
smo281479.setAttribute('id', 'smo281479');
smo281479.setFont('times', 12, 'normal');
smo281479.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281478.addModifier(smo281479);
smo281479.addClass('lyric lyric-0 lyric-hyphen');
smo281498v0ar.push(smo281478);
const smo281480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo281480.setAttribute('id', 'smo281480');
smo281498v0ar.push(smo281480);
const smo281481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo281481.setAttribute('id', 'smo281481');
const smo2814810acc = new VF.Accidental('n');
smo281481.addModifier(smo2814810acc, 0);
const smo281482 = new VF.Annotation('ding');
smo281482.setAttribute('id', 'smo281482');
smo281482.setFont('times', 12, 'normal');
smo281482.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281481.addModifier(smo281482);
smo281482.addClass('lyric lyric-0 lyric-hyphen');
smo281498v0ar.push(smo281481);
smo281498v0.addTickables(smo281498v0ar)
fmtsmo28149864.joinVoices([smo281498v0]);
const fmtsmo28461064 = new VF.Formatter();
//
// voices and notes for stave 6 64
const smo284610v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo284610v0ar = [];
const smo284586 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo284586.setAttribute('id', 'smo284586');
const smo284587 = new VF.Annotation('bun');
smo284587.setAttribute('id', 'smo284587');
smo284587.setFont('times', 12, 'normal');
smo284587.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284586.addModifier(smo284587);
smo284587.addClass('lyric lyric-0');
smo284610v0ar.push(smo284586);
const smo284588 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo284588.setAttribute('id', 'smo284588');
smo284610v0ar.push(smo284588);
const smo284589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo284589.setAttribute('id', 'smo284589');
smo284610v0ar.push(smo284589);
const smo284590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo284590.setAttribute('id', 'smo284590');
const smo284591 = new VF.Annotation('Man');
smo284591.setAttribute('id', 'smo284591');
smo284591.setFont('times', 12, 'normal');
smo284591.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284590.addModifier(smo284591);
smo284591.addClass('lyric lyric-0 lyric-hyphen');
smo284610v0ar.push(smo284590);
const smo284592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo284592.setAttribute('id', 'smo284592');
smo284610v0ar.push(smo284592);
const smo284593 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo284593.setAttribute('id', 'smo284593');
const smo2845930acc = new VF.Accidental('n');
smo284593.addModifier(smo2845930acc, 0);
const smo284594 = new VF.Annotation('ding');
smo284594.setAttribute('id', 'smo284594');
smo284594.setFont('times', 12, 'normal');
smo284594.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284593.addModifier(smo284594);
smo284594.addClass('lyric lyric-0 lyric-hyphen');
smo284610v0ar.push(smo284593);
smo284610v0.addTickables(smo284610v0ar)
fmtsmo28461064.joinVoices([smo284610v0]);
const fmtsmo28771964 = new VF.Formatter();
//
// voices and notes for stave 7 64
const smo287719v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287719v0ar = [];
const smo287695 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo287695.setAttribute('id', 'smo287695');
const smo287696 = new VF.Annotation('bun');
smo287696.setAttribute('id', 'smo287696');
smo287696.setFont('times', 12, 'normal');
smo287696.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287695.addModifier(smo287696);
smo287696.addClass('lyric lyric-0');
smo287719v0ar.push(smo287695);
const smo287697 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo287697.setAttribute('id', 'smo287697');
smo287719v0ar.push(smo287697);
const smo287698 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo287698.setAttribute('id', 'smo287698');
smo287719v0ar.push(smo287698);
const smo287699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo287699.setAttribute('id', 'smo287699');
const smo287700 = new VF.Annotation('Man');
smo287700.setAttribute('id', 'smo287700');
smo287700.setFont('times', 12, 'normal');
smo287700.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287699.addModifier(smo287700);
smo287700.addClass('lyric lyric-0 lyric-hyphen');
smo287719v0ar.push(smo287699);
const smo287701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo287701.setAttribute('id', 'smo287701');
smo287719v0ar.push(smo287701);
const smo287702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo287702.setAttribute('id', 'smo287702');
const smo2877020acc = new VF.Accidental('n');
smo287702.addModifier(smo2877020acc, 0);
const smo287703 = new VF.Annotation('ding');
smo287703.setAttribute('id', 'smo287703');
smo287703.setFont('times', 12, 'normal');
smo287703.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287702.addModifier(smo287703);
smo287703.addClass('lyric lyric-0 lyric-hyphen');
smo287719v0ar.push(smo287702);
smo287719v0.addTickables(smo287719v0ar)
fmtsmo28771964.joinVoices([smo287719v0]);
const fmtsmo29080564 = new VF.Formatter();
//
// voices and notes for stave 8 64
const smo290805v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290805v0ar = [];
const smo290781 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo290781.setAttribute('id', 'smo290781');
const smo290782 = new VF.Annotation('bun');
smo290782.setAttribute('id', 'smo290782');
smo290782.setFont('times', 12, 'normal');
smo290782.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290781.addModifier(smo290782);
smo290782.addClass('lyric lyric-0');
smo290805v0ar.push(smo290781);
const smo290783 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo290783.setAttribute('id', 'smo290783');
smo290805v0ar.push(smo290783);
const smo290784 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo290784.setAttribute('id', 'smo290784');
smo290805v0ar.push(smo290784);
const smo290785 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo290785.setAttribute('id', 'smo290785');
const smo290786 = new VF.Annotation('Man');
smo290786.setAttribute('id', 'smo290786');
smo290786.setFont('times', 12, 'normal');
smo290786.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290785.addModifier(smo290786);
smo290786.addClass('lyric lyric-0 lyric-hyphen');
smo290805v0ar.push(smo290785);
const smo290787 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo290787.setAttribute('id', 'smo290787');
smo290805v0ar.push(smo290787);
const smo290788 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo290788.setAttribute('id', 'smo290788');
const smo2907880acc = new VF.Accidental('n');
smo290788.addModifier(smo2907880acc, 0);
const smo290789 = new VF.Annotation('ding');
smo290789.setAttribute('id', 'smo290789');
smo290789.setFont('times', 12, 'normal');
smo290789.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290788.addModifier(smo290789);
smo290789.addClass('lyric lyric-0 lyric-hyphen');
smo290805v0ar.push(smo290788);
smo290805v0.addTickables(smo290805v0ar)
fmtsmo29080564.joinVoices([smo290805v0]);
const fmtsmo29389464 = new VF.Formatter();
//
// voices and notes for stave 9 64
const smo293894v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo293894v0ar = [];
const smo293870 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo293870.setAttribute('id', 'smo293870');
const smo293871 = new VF.Annotation('bun');
smo293871.setAttribute('id', 'smo293871');
smo293871.setFont('times', 12, 'normal');
smo293871.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293870.addModifier(smo293871);
smo293871.addClass('lyric lyric-0');
smo293894v0ar.push(smo293870);
const smo293872 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo293872.setAttribute('id', 'smo293872');
smo293894v0ar.push(smo293872);
const smo293873 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo293873.setAttribute('id', 'smo293873');
smo293894v0ar.push(smo293873);
const smo293874 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo293874.setAttribute('id', 'smo293874');
const smo293875 = new VF.Annotation('Man');
smo293875.setAttribute('id', 'smo293875');
smo293875.setFont('times', 12, 'normal');
smo293875.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293874.addModifier(smo293875);
smo293875.addClass('lyric lyric-0 lyric-hyphen');
smo293894v0ar.push(smo293874);
const smo293876 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo293876.setAttribute('id', 'smo293876');
smo293894v0ar.push(smo293876);
const smo293877 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo293877.setAttribute('id', 'smo293877');
const smo2938770acc = new VF.Accidental('b');
smo293877.addModifier(smo2938770acc, 0);
const smo293878 = new VF.Annotation('ding');
smo293878.setAttribute('id', 'smo293878');
smo293878.setFont('times', 12, 'normal');
smo293878.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293877.addModifier(smo293878);
smo293878.addClass('lyric lyric-0 lyric-hyphen');
smo293894v0ar.push(smo293877);
smo293894v0.addTickables(smo293894v0ar)
fmtsmo29389464.joinVoices([smo293894v0]);
const fmtsmo29693464 = new VF.Formatter();
//
// voices and notes for stave 10 64
const smo296934v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo296934v0ar = [];
const smo296910 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo296910.setAttribute('id', 'smo296910');
const smo296911 = new VF.Annotation('bun');
smo296911.setAttribute('id', 'smo296911');
smo296911.setFont('times', 12, 'normal');
smo296911.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296910.addModifier(smo296911);
smo296911.addClass('lyric lyric-0');
smo296934v0ar.push(smo296910);
const smo296912 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo296912.setAttribute('id', 'smo296912');
smo296934v0ar.push(smo296912);
const smo296913 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo296913.setAttribute('id', 'smo296913');
smo296934v0ar.push(smo296913);
const smo296914 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo296914.setAttribute('id', 'smo296914');
const smo296915 = new VF.Annotation('Man');
smo296915.setAttribute('id', 'smo296915');
smo296915.setFont('times', 12, 'normal');
smo296915.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296914.addModifier(smo296915);
smo296915.addClass('lyric lyric-0 lyric-hyphen');
smo296934v0ar.push(smo296914);
const smo296916 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo296916.setAttribute('id', 'smo296916');
smo296934v0ar.push(smo296916);
const smo296917 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo296917.setAttribute('id', 'smo296917');
const smo2969170acc = new VF.Accidental('b');
smo296917.addModifier(smo2969170acc, 0);
const smo296918 = new VF.Annotation('ding');
smo296918.setAttribute('id', 'smo296918');
smo296918.setFont('times', 12, 'normal');
smo296918.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296917.addModifier(smo296918);
smo296918.addClass('lyric lyric-0 lyric-hyphen');
smo296934v0ar.push(smo296917);
smo296934v0.addTickables(smo296934v0ar)
fmtsmo29693464.joinVoices([smo296934v0]);
const fmtsmo29998864 = new VF.Formatter();
//
// voices and notes for stave 11 64
const smo299988v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo299988v0ar = [];
const smo299964 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo299964.setAttribute('id', 'smo299964');
const smo299965 = new VF.Annotation('bun');
smo299965.setAttribute('id', 'smo299965');
smo299965.setFont('times', 12, 'normal');
smo299965.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo299964.addModifier(smo299965);
smo299965.addClass('lyric lyric-0');
smo299988v0ar.push(smo299964);
const smo299966 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo299966.setAttribute('id', 'smo299966');
smo299988v0ar.push(smo299966);
const smo299967 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo299967.setAttribute('id', 'smo299967');
smo299988v0ar.push(smo299967);
const smo299968 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo299968.setAttribute('id', 'smo299968');
const smo299969 = new VF.Annotation('Man');
smo299969.setAttribute('id', 'smo299969');
smo299969.setFont('times', 12, 'normal');
smo299969.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo299968.addModifier(smo299969);
smo299969.addClass('lyric lyric-0 lyric-hyphen');
smo299988v0ar.push(smo299968);
const smo299970 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo299970.setAttribute('id', 'smo299970');
smo299988v0ar.push(smo299970);
const smo299971 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo299971.setAttribute('id', 'smo299971');
const smo2999710acc = new VF.Accidental('b');
smo299971.addModifier(smo2999710acc, 0);
const smo299972 = new VF.Annotation('ding');
smo299972.setAttribute('id', 'smo299972');
smo299972.setFont('times', 12, 'normal');
smo299972.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo299971.addModifier(smo299972);
smo299972.addClass('lyric lyric-0 lyric-hyphen');
smo299988v0ar.push(smo299971);
smo299988v0.addTickables(smo299988v0ar)
fmtsmo29998864.joinVoices([smo299988v0]);
const fmtsmo30303164 = new VF.Formatter();
//
// voices and notes for stave 12 64
const smo303031v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo303031v0ar = [];
const smo303007 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo303007.setAttribute('id', 'smo303007');
const smo303008 = new VF.Annotation('bun');
smo303008.setAttribute('id', 'smo303008');
smo303008.setFont('times', 12, 'normal');
smo303008.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo303007.addModifier(smo303008);
smo303008.addClass('lyric lyric-0');
smo303031v0ar.push(smo303007);
const smo303009 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo303009.setAttribute('id', 'smo303009');
smo303031v0ar.push(smo303009);
const smo303010 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo303010.setAttribute('id', 'smo303010');
smo303031v0ar.push(smo303010);
const smo303011 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo303011.setAttribute('id', 'smo303011');
const smo303012 = new VF.Annotation('Man');
smo303012.setAttribute('id', 'smo303012');
smo303012.setFont('times', 12, 'normal');
smo303012.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo303011.addModifier(smo303012);
smo303012.addClass('lyric lyric-0 lyric-hyphen');
smo303031v0ar.push(smo303011);
const smo303013 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo303013.setAttribute('id', 'smo303013');
smo303031v0ar.push(smo303013);
const smo303014 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo303014.setAttribute('id', 'smo303014');
const smo3030140acc = new VF.Accidental('b');
smo303014.addModifier(smo3030140acc, 0);
const smo303015 = new VF.Annotation('ding');
smo303015.setAttribute('id', 'smo303015');
smo303015.setFont('times', 12, 'normal');
smo303015.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo303014.addModifier(smo303015);
smo303015.addClass('lyric lyric-0 lyric-hyphen');
smo303031v0ar.push(smo303014);
smo303031v0.addTickables(smo303031v0ar)
fmtsmo30303164.joinVoices([smo303031v0]);
const fmtsmo30624364 = new VF.Formatter();
//
// voices and notes for stave 13 64
const smo306243v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo306243v0ar = [];
const smo306223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
smo306223.setAttribute('id', 'smo306223');
smo306223.addModifier(new VF.Dot(), 0);
smo306223.addModifier(new VF.Dot(), 1);
smo306223.addModifier(new VF.Dot(), 2);
smo306243v0ar.push(smo306223);
const smo306224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo306224.setAttribute('id', 'smo306224');
smo306243v0ar.push(smo306224);
const smo306225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo306225.setAttribute('id', 'smo306225');
smo306243v0ar.push(smo306225);
const smo306226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo306226.setAttribute('id', 'smo306226');
const smo3062262acc = new VF.Accidental('b');
smo306226.addModifier(smo3062262acc, 2);
smo306243v0ar.push(smo306226);
const smo306227 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo306227.setAttribute('id', 'smo306227');
smo306243v0ar.push(smo306227);
smo306243v0.addTickables(smo306243v0ar)
fmtsmo30624364.joinVoices([smo306243v0]);
const fmtsmo30945664 = new VF.Formatter();
//
// voices and notes for stave 14 64
const smo309456v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309456v0ar = [];
const smo309436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
smo309436.setAttribute('id', 'smo309436');
smo309436.addModifier(new VF.Dot(), 0);
smo309436.addModifier(new VF.Dot(), 1);
smo309436.addModifier(new VF.Dot(), 2);
smo309456v0ar.push(smo309436);
const smo309437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo309437.setAttribute('id', 'smo309437');
smo309456v0ar.push(smo309437);
const smo309438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo309438.setAttribute('id', 'smo309438');
smo309456v0ar.push(smo309438);
const smo309439 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo309439.setAttribute('id', 'smo309439');
const smo3094392acc = new VF.Accidental('b');
smo309439.addModifier(smo3094392acc, 2);
smo309456v0ar.push(smo309439);
const smo309440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo309440.setAttribute('id', 'smo309440');
smo309456v0ar.push(smo309440);
smo309456v0.addTickables(smo309456v0ar)
fmtsmo30945664.joinVoices([smo309456v0]);
const fmtsmo31265164 = new VF.Formatter();
//
// voices and notes for stave 15 64
const smo312651v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo312651v0ar = [];
const smo312631 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo312631.setAttribute('id', 'smo312631');
smo312631.addModifier(new VF.Dot(), 0);
smo312651v0ar.push(smo312631);
const smo312632 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo312632.setAttribute('id', 'smo312632');
smo312651v0ar.push(smo312632);
const smo312633 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo312633.setAttribute('id', 'smo312633');
smo312651v0ar.push(smo312633);
const smo312634 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo312634.setAttribute('id', 'smo312634');
smo312651v0ar.push(smo312634);
const smo312635 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo312635.setAttribute('id', 'smo312635');
smo312651v0ar.push(smo312635);
smo312651v0.addTickables(smo312651v0ar)
fmtsmo31265164.joinVoices([smo312651v0]);
const fmtsmo31576964 = new VF.Formatter();
//
// voices and notes for stave 16 64
const smo315769v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo315769v0ar = [];
const smo315750 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo315750.setAttribute('id', 'smo315750');
smo315750.addModifier(new VF.Dot(), 0);
smo315769v0ar.push(smo315750);
const smo315751 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo315751.setAttribute('id', 'smo315751');
smo315769v0ar.push(smo315751);
const smo315752 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo315752.setAttribute('id', 'smo315752');
smo315769v0ar.push(smo315752);
const smo315753 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo315753.setAttribute('id', 'smo315753');
smo315769v0ar.push(smo315753);
smo315769v0.addTickables(smo315769v0ar)
fmtsmo31576964.joinVoices([smo315769v0]);
const fmtsmo31895864 = new VF.Formatter();
//
// voices and notes for stave 17 64
const smo318958v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo318958v0ar = [];
const smo318931 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo318931.setAttribute('id', 'smo318931');
const smo318932 = new VF.Annotation('bun');
smo318932.setAttribute('id', 'smo318932');
smo318932.setFont('times', 12, 'normal');
smo318932.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo318931.addModifier(smo318932);
smo318932.addClass('lyric lyric-0');
smo318958v0ar.push(smo318931);
const smo318933 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo318933.setAttribute('id', 'smo318933');
smo318958v0ar.push(smo318933);
const smo318934 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo318934.setAttribute('id', 'smo318934');
smo318958v0ar.push(smo318934);
const smo318935 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo318935.setAttribute('id', 'smo318935');
smo318958v0ar.push(smo318935);
smo318958v0.addTickables(smo318958v0ar)
fmtsmo31895864.joinVoices([smo318958v0]);
const smo318958v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo318958v1ar = [];
const smo318936 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo318936.setAttribute('id', 'smo318936');
smo318936.setStyle({ fillStyle: '#aaaaaa7f' });
smo318958v1ar.push(smo318936);
const smo318937 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo318937.setAttribute('id', 'smo318937');
smo318937.setStyle({ fillStyle: '#aaaaaa7f' });
smo318958v1ar.push(smo318937);
const smo318938 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo318938.setAttribute('id', 'smo318938');
smo318938.setStyle({ fillStyle: '#aaaaaa7f' });
smo318958v1ar.push(smo318938);
const smo318939 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo318939.setAttribute('id', 'smo318939');
smo318939.setStyle({ fillStyle: '#aaaaaa7f' });
smo318958v1ar.push(smo318939);
smo318958v1.addTickables(smo318958v1ar)
fmtsmo31895864.joinVoices([smo318958v1]);
const smo318958v2 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo318958v2ar = [];
const smo318940 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo318940.setAttribute('id', 'smo318940');
smo318940.setStyle({ fillStyle: '#aaaaaa7f' });
const smo3189400acc = new VF.Accidental('n');
smo318940.addModifier(smo3189400acc, 0);
smo318958v2ar.push(smo318940);
const smo318941 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo318941.setAttribute('id', 'smo318941');
smo318941.setStyle({ fillStyle: '#aaaaaa7f' });
smo318958v2ar.push(smo318941);
const smo318942 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo318942.setAttribute('id', 'smo318942');
smo318942.setStyle({ fillStyle: '#aaaaaa7f' });
smo318958v2ar.push(smo318942);
smo318958v2.addTickables(smo318958v2ar)
fmtsmo31895864.joinVoices([smo318958v2]);
// create beam groups and tuplets for format grp smo320731 before formatting
const dirsmo412055 = smo266099.getStemDirection();
smo266099.setStemDirection(dirsmo412055);
smo266101.setStemDirection(dirsmo412055);
const smo412055 = new VF.Beam([smo266099,smo266101]);
const dirsmo412058 = smo269093.getStemDirection();
smo269093.setStemDirection(dirsmo412058);
smo269095.setStemDirection(dirsmo412058);
const smo412058 = new VF.Beam([smo269093,smo269095]);
const dirsmo412061 = smo272236.getStemDirection();
smo272236.setStemDirection(dirsmo412061);
smo272238.setStemDirection(dirsmo412061);
const smo412061 = new VF.Beam([smo272236,smo272238]);
const dirsmo412064 = smo275352.getStemDirection();
smo275352.setStemDirection(dirsmo412064);
smo275354.setStemDirection(dirsmo412064);
const smo412064 = new VF.Beam([smo275352,smo275354]);
const dirsmo412067 = smo278371.getStemDirection();
smo278371.setStemDirection(dirsmo412067);
smo278373.setStemDirection(dirsmo412067);
const smo412067 = new VF.Beam([smo278371,smo278373]);
 
// formatting measures in staff group smo320731
fmtsmo26611964.format([smo266119v0,smo269113v0,smo272256v0,smo275372v0,smo278391v0], 288);
const stavesmo266119 = new VF.Stave(506, 210, 302);
stavesmo266119.setAttribute('id', 'stavesmo266119');
stavesmo266119.setBegBarType(VF.Barline.type.NONE);
stavesmo266119.setContext(context);
stavesmo266119.draw();
smo266119v0.draw(context, stavesmo266119);
smo412055.setContext(context);
smo412055.draw();
const stavesmo269113 = new VF.Stave(506, 316, 302);
stavesmo269113.setAttribute('id', 'stavesmo269113');
stavesmo269113.setBegBarType(VF.Barline.type.NONE);
stavesmo269113.setContext(context);
stavesmo269113.draw();
smo269113v0.draw(context, stavesmo269113);
smo412058.setContext(context);
smo412058.draw();
const stavesmo272256 = new VF.Stave(506, 437, 302);
stavesmo272256.setAttribute('id', 'stavesmo272256');
stavesmo272256.setBegBarType(VF.Barline.type.NONE);
stavesmo272256.setContext(context);
stavesmo272256.draw();
smo272256v0.draw(context, stavesmo272256);
smo412061.setContext(context);
smo412061.draw();
const stavesmo275372 = new VF.Stave(506, 553, 302);
stavesmo275372.setAttribute('id', 'stavesmo275372');
stavesmo275372.setBegBarType(VF.Barline.type.NONE);
stavesmo275372.setContext(context);
stavesmo275372.draw();
smo275372v0.draw(context, stavesmo275372);
smo412064.setContext(context);
smo412064.draw();
const stavesmo278391 = new VF.Stave(506, 659, 302);
stavesmo278391.setAttribute('id', 'stavesmo278391');
stavesmo278391.setBegBarType(VF.Barline.type.NONE);
stavesmo278391.setContext(context);
stavesmo278391.draw();
smo278391v0.draw(context, stavesmo278391);
smo412067.setContext(context);
smo412067.draw();
// create beam groups and tuplets for format grp smo320733 before formatting
const dirsmo412070 = smo281478.getStemDirection();
smo281478.setStemDirection(dirsmo412070);
smo281480.setStemDirection(dirsmo412070);
const smo412070 = new VF.Beam([smo281478,smo281480]);
const dirsmo412073 = smo284590.getStemDirection();
smo284590.setStemDirection(dirsmo412073);
smo284592.setStemDirection(dirsmo412073);
const smo412073 = new VF.Beam([smo284590,smo284592]);
const dirsmo412076 = smo287699.getStemDirection();
smo287699.setStemDirection(dirsmo412076);
smo287701.setStemDirection(dirsmo412076);
const smo412076 = new VF.Beam([smo287699,smo287701]);
const dirsmo412079 = smo290785.getStemDirection();
smo290785.setStemDirection(dirsmo412079);
smo290787.setStemDirection(dirsmo412079);
const smo412079 = new VF.Beam([smo290785,smo290787]);
 
// formatting measures in staff group smo320733
fmtsmo28149864.format([smo281498v0,smo284610v0,smo287719v0,smo290805v0], 288);
const stavesmo281498 = new VF.Stave(506, 780, 302);
stavesmo281498.setAttribute('id', 'stavesmo281498');
stavesmo281498.setBegBarType(VF.Barline.type.NONE);
stavesmo281498.setContext(context);
stavesmo281498.draw();
smo281498v0.draw(context, stavesmo281498);
smo412070.setContext(context);
smo412070.draw();
const stavesmo284610 = new VF.Stave(506, 896, 302);
stavesmo284610.setAttribute('id', 'stavesmo284610');
stavesmo284610.setBegBarType(VF.Barline.type.NONE);
stavesmo284610.setContext(context);
stavesmo284610.draw();
smo284610v0.draw(context, stavesmo284610);
smo412073.setContext(context);
smo412073.draw();
const stavesmo287719 = new VF.Stave(506, 1012, 302);
stavesmo287719.setAttribute('id', 'stavesmo287719');
stavesmo287719.setBegBarType(VF.Barline.type.NONE);
stavesmo287719.setContext(context);
stavesmo287719.draw();
smo287719v0.draw(context, stavesmo287719);
smo412076.setContext(context);
smo412076.draw();
const stavesmo290805 = new VF.Stave(506, 1128, 302);
stavesmo290805.setAttribute('id', 'stavesmo290805');
stavesmo290805.setBegBarType(VF.Barline.type.NONE);
stavesmo290805.setContext(context);
stavesmo290805.draw();
smo290805v0.draw(context, stavesmo290805);
smo412079.setContext(context);
smo412079.draw();
// create beam groups and tuplets for format grp smo320735 before formatting
const dirsmo412082 = smo293874.getStemDirection();
smo293874.setStemDirection(dirsmo412082);
smo293876.setStemDirection(dirsmo412082);
const smo412082 = new VF.Beam([smo293874,smo293876]);
const dirsmo412085 = smo296914.getStemDirection();
smo296914.setStemDirection(dirsmo412085);
smo296916.setStemDirection(dirsmo412085);
const smo412085 = new VF.Beam([smo296914,smo296916]);
const dirsmo412088 = smo299968.getStemDirection();
smo299968.setStemDirection(dirsmo412088);
smo299970.setStemDirection(dirsmo412088);
const smo412088 = new VF.Beam([smo299968,smo299970]);
const dirsmo412091 = smo303011.getStemDirection();
smo303011.setStemDirection(dirsmo412091);
smo303013.setStemDirection(dirsmo412091);
const smo412091 = new VF.Beam([smo303011,smo303013]);
 
// formatting measures in staff group smo320735
fmtsmo29389464.format([smo293894v0,smo296934v0,smo299988v0,smo303031v0], 288);
const stavesmo293894 = new VF.Stave(506, 1264, 302);
stavesmo293894.setAttribute('id', 'stavesmo293894');
stavesmo293894.setBegBarType(VF.Barline.type.NONE);
stavesmo293894.setContext(context);
stavesmo293894.draw();
smo293894v0.draw(context, stavesmo293894);
smo412082.setContext(context);
smo412082.draw();
const stavesmo296934 = new VF.Stave(506, 1400, 302);
stavesmo296934.setAttribute('id', 'stavesmo296934');
stavesmo296934.setBegBarType(VF.Barline.type.NONE);
stavesmo296934.setContext(context);
stavesmo296934.draw();
smo296934v0.draw(context, stavesmo296934);
smo412085.setContext(context);
smo412085.draw();
const stavesmo299988 = new VF.Stave(506, 1536, 302);
stavesmo299988.setAttribute('id', 'stavesmo299988');
stavesmo299988.setBegBarType(VF.Barline.type.NONE);
stavesmo299988.setContext(context);
stavesmo299988.draw();
smo299988v0.draw(context, stavesmo299988);
smo412088.setContext(context);
smo412088.draw();
const stavesmo303031 = new VF.Stave(506, 1672, 302);
stavesmo303031.setAttribute('id', 'stavesmo303031');
stavesmo303031.setBegBarType(VF.Barline.type.NONE);
stavesmo303031.setContext(context);
stavesmo303031.draw();
smo303031v0.draw(context, stavesmo303031);
smo412091.setContext(context);
smo412091.draw();
// create beam groups and tuplets for format grp smo308054 before formatting
const dirsmo412094 = smo306224.getStemDirection();
smo306224.setStemDirection(dirsmo412094);
smo306225.setStemDirection(dirsmo412094);
const smo412094 = new VF.Beam([smo306224,smo306225]);
 
// formatting measures in staff group smo308054
fmtsmo30624364.format([smo306243v0], 288);
const stavesmo306243 = new VF.Stave(506, 1818, 302);
stavesmo306243.setAttribute('id', 'stavesmo306243');
stavesmo306243.setBegBarType(VF.Barline.type.NONE);
stavesmo306243.setContext(context);
stavesmo306243.draw();
smo306243v0.draw(context, stavesmo306243);
smo412094.setContext(context);
smo412094.draw();
// create beam groups and tuplets for format grp smo320729 before formatting
const dirsmo412097 = smo309437.getStemDirection();
smo309437.setStemDirection(dirsmo412097);
smo309438.setStemDirection(dirsmo412097);
const smo412097 = new VF.Beam([smo309437,smo309438]);
const dirsmo412100 = smo312632.getStemDirection();
smo312632.setStemDirection(dirsmo412100);
smo312633.setStemDirection(dirsmo412100);
const smo412100 = new VF.Beam([smo312632,smo312633]);
 
// formatting measures in staff group smo320729
fmtsmo30945664.format([smo309456v0,smo312651v0], 288);
const stavesmo309456 = new VF.Stave(506, 1924, 302);
stavesmo309456.setAttribute('id', 'stavesmo309456');
stavesmo309456.setBegBarType(VF.Barline.type.NONE);
stavesmo309456.setContext(context);
stavesmo309456.draw();
smo309456v0.draw(context, stavesmo309456);
smo412097.setContext(context);
smo412097.draw();
const stavesmo312651 = new VF.Stave(506, 2010, 302);
stavesmo312651.setAttribute('id', 'stavesmo312651');
stavesmo312651.setBegBarType(VF.Barline.type.NONE);
stavesmo312651.setContext(context);
stavesmo312651.draw();
smo312651v0.draw(context, stavesmo312651);
smo412100.setContext(context);
smo412100.draw();
// create beam groups and tuplets for format grp smo317567 before formatting
 
// formatting measures in staff group smo317567
fmtsmo31576964.format([smo315769v0], 288);
const stavesmo315769 = new VF.Stave(506, 2081, 302);
stavesmo315769.setAttribute('id', 'stavesmo315769');
stavesmo315769.setBegBarType(VF.Barline.type.NONE);
stavesmo315769.setContext(context);
stavesmo315769.draw();
smo315769v0.draw(context, stavesmo315769);
// create beam groups and tuplets for format grp smo320723 before formatting
 
// formatting measures in staff group smo320723
fmtsmo31895864.format([smo318958v0,smo318958v1,smo318958v2], 288);
const stavesmo318958 = new VF.Stave(506, 2152, 302);
stavesmo318958.setAttribute('id', 'stavesmo318958');
stavesmo318958.setBegBarType(VF.Barline.type.NONE);
stavesmo318958.setContext(context);
stavesmo318958.draw();
smo318958v0.draw(context, stavesmo318958);
smo318958v1.draw(context, stavesmo318958);
smo318958v2.draw(context, stavesmo318958);
const fmtsmo26614665 = new VF.Formatter();
//
// voices and notes for stave 0 65
const smo266146v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266146v0ar = [];
const smo266120 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo266120.setAttribute('id', 'smo266120');
const smo2661200acc = new VF.Accidental('n');
smo266120.addModifier(smo2661200acc, 0);
smo266146v0ar.push(smo266120);
const smo266121 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo266121.setAttribute('id', 'smo266121');
const smo266122 = new VF.Annotation('a');
smo266122.setAttribute('id', 'smo266122');
smo266122.setFont('times', 12, 'normal');
smo266122.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266121.addModifier(smo266122);
smo266122.addClass('lyric lyric-0');
smo266146v0ar.push(smo266121);
const smo266123 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo266123.setAttribute('id', 'smo266123');
smo266146v0ar.push(smo266123);
const smo266124 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo266124.setAttribute('id', 'smo266124');
const smo266125 = new VF.Annotation('Ki');
smo266125.setAttribute('id', 'smo266125');
smo266125.setFont('times', 12, 'normal');
smo266125.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266124.addModifier(smo266125);
smo266125.addClass('lyric lyric-0 lyric-hyphen');
smo266146v0ar.push(smo266124);
const smo266126 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo266126.setAttribute('id', 'smo266126');
smo266146v0ar.push(smo266126);
const smo266127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo266127.setAttribute('id', 'smo266127');
const smo266128 = new VF.Annotation('ki');
smo266128.setAttribute('id', 'smo266128');
smo266128.setFont('times', 12, 'normal');
smo266128.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266127.addModifier(smo266128);
smo266128.addClass('lyric lyric-0');
smo266146v0ar.push(smo266127);
const smo266129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo266129.setAttribute('id', 'smo266129');
const smo266130 = new VF.Annotation('ri');
smo266130.setAttribute('id', 'smo266130');
smo266130.setFont('times', 12, 'normal');
smo266130.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266129.addModifier(smo266130);
smo266130.addClass('lyric lyric-0');
smo266146v0ar.push(smo266129);
smo266146v0.addTickables(smo266146v0ar)
fmtsmo26614665.joinVoices([smo266146v0]);
const fmtsmo26914065 = new VF.Formatter();
//
// voices and notes for stave 1 65
const smo269140v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269140v0ar = [];
const smo269114 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo269114.setAttribute('id', 'smo269114');
const smo2691140acc = new VF.Accidental('n');
smo269114.addModifier(smo2691140acc, 0);
smo269140v0ar.push(smo269114);
const smo269115 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo269115.setAttribute('id', 'smo269115');
const smo269116 = new VF.Annotation('a');
smo269116.setAttribute('id', 'smo269116');
smo269116.setFont('times', 12, 'normal');
smo269116.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269115.addModifier(smo269116);
smo269116.addClass('lyric lyric-0');
smo269140v0ar.push(smo269115);
const smo269117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo269117.setAttribute('id', 'smo269117');
smo269140v0ar.push(smo269117);
const smo269118 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo269118.setAttribute('id', 'smo269118');
const smo269119 = new VF.Annotation('Ki');
smo269119.setAttribute('id', 'smo269119');
smo269119.setFont('times', 12, 'normal');
smo269119.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269118.addModifier(smo269119);
smo269119.addClass('lyric lyric-0 lyric-hyphen');
smo269140v0ar.push(smo269118);
const smo269120 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo269120.setAttribute('id', 'smo269120');
smo269140v0ar.push(smo269120);
const smo269121 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo269121.setAttribute('id', 'smo269121');
const smo269122 = new VF.Annotation('ki');
smo269122.setAttribute('id', 'smo269122');
smo269122.setFont('times', 12, 'normal');
smo269122.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269121.addModifier(smo269122);
smo269122.addClass('lyric lyric-0');
smo269140v0ar.push(smo269121);
const smo269123 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo269123.setAttribute('id', 'smo269123');
const smo269124 = new VF.Annotation('ri');
smo269124.setAttribute('id', 'smo269124');
smo269124.setFont('times', 12, 'normal');
smo269124.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269123.addModifier(smo269124);
smo269124.addClass('lyric lyric-0');
smo269140v0ar.push(smo269123);
smo269140v0.addTickables(smo269140v0ar)
fmtsmo26914065.joinVoices([smo269140v0]);
const fmtsmo27228365 = new VF.Formatter();
//
// voices and notes for stave 2 65
const smo272283v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272283v0ar = [];
const smo272257 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo272257.setAttribute('id', 'smo272257');
const smo2722570acc = new VF.Accidental('n');
smo272257.addModifier(smo2722570acc, 0);
smo272283v0ar.push(smo272257);
const smo272258 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo272258.setAttribute('id', 'smo272258');
const smo272259 = new VF.Annotation('a');
smo272259.setAttribute('id', 'smo272259');
smo272259.setFont('times', 12, 'normal');
smo272259.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272258.addModifier(smo272259);
smo272259.addClass('lyric lyric-0');
smo272283v0ar.push(smo272258);
const smo272260 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo272260.setAttribute('id', 'smo272260');
smo272283v0ar.push(smo272260);
const smo272261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo272261.setAttribute('id', 'smo272261');
const smo272262 = new VF.Annotation('Ki');
smo272262.setAttribute('id', 'smo272262');
smo272262.setFont('times', 12, 'normal');
smo272262.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272261.addModifier(smo272262);
smo272262.addClass('lyric lyric-0 lyric-hyphen');
smo272283v0ar.push(smo272261);
const smo272263 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo272263.setAttribute('id', 'smo272263');
smo272283v0ar.push(smo272263);
const smo272264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo272264.setAttribute('id', 'smo272264');
const smo272265 = new VF.Annotation('ki');
smo272265.setAttribute('id', 'smo272265');
smo272265.setFont('times', 12, 'normal');
smo272265.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272264.addModifier(smo272265);
smo272265.addClass('lyric lyric-0');
smo272283v0ar.push(smo272264);
const smo272266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo272266.setAttribute('id', 'smo272266');
const smo272267 = new VF.Annotation('ri');
smo272267.setAttribute('id', 'smo272267');
smo272267.setFont('times', 12, 'normal');
smo272267.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272266.addModifier(smo272267);
smo272267.addClass('lyric lyric-0');
smo272283v0ar.push(smo272266);
smo272283v0.addTickables(smo272283v0ar)
fmtsmo27228365.joinVoices([smo272283v0]);
const fmtsmo27539965 = new VF.Formatter();
//
// voices and notes for stave 3 65
const smo275399v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo275399v0ar = [];
const smo275373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo275373.setAttribute('id', 'smo275373');
const smo2753730acc = new VF.Accidental('n');
smo275373.addModifier(smo2753730acc, 0);
smo275399v0ar.push(smo275373);
const smo275374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo275374.setAttribute('id', 'smo275374');
const smo275375 = new VF.Annotation('a');
smo275375.setAttribute('id', 'smo275375');
smo275375.setFont('times', 12, 'normal');
smo275375.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275374.addModifier(smo275375);
smo275375.addClass('lyric lyric-0');
smo275399v0ar.push(smo275374);
const smo275376 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo275376.setAttribute('id', 'smo275376');
smo275399v0ar.push(smo275376);
const smo275377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo275377.setAttribute('id', 'smo275377');
const smo275378 = new VF.Annotation('Ki');
smo275378.setAttribute('id', 'smo275378');
smo275378.setFont('times', 12, 'normal');
smo275378.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275377.addModifier(smo275378);
smo275378.addClass('lyric lyric-0 lyric-hyphen');
smo275399v0ar.push(smo275377);
const smo275379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo275379.setAttribute('id', 'smo275379');
smo275399v0ar.push(smo275379);
const smo275380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo275380.setAttribute('id', 'smo275380');
const smo275381 = new VF.Annotation('ki');
smo275381.setAttribute('id', 'smo275381');
smo275381.setFont('times', 12, 'normal');
smo275381.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275380.addModifier(smo275381);
smo275381.addClass('lyric lyric-0');
smo275399v0ar.push(smo275380);
const smo275382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo275382.setAttribute('id', 'smo275382');
const smo275383 = new VF.Annotation('ri');
smo275383.setAttribute('id', 'smo275383');
smo275383.setFont('times', 12, 'normal');
smo275383.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275382.addModifier(smo275383);
smo275383.addClass('lyric lyric-0');
smo275399v0ar.push(smo275382);
smo275399v0.addTickables(smo275399v0ar)
fmtsmo27539965.joinVoices([smo275399v0]);
const fmtsmo27841865 = new VF.Formatter();
//
// voices and notes for stave 4 65
const smo278418v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278418v0ar = [];
const smo278392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo278392.setAttribute('id', 'smo278392');
const smo2783920acc = new VF.Accidental('n');
smo278392.addModifier(smo2783920acc, 0);
smo278418v0ar.push(smo278392);
const smo278393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo278393.setAttribute('id', 'smo278393');
const smo278394 = new VF.Annotation('a');
smo278394.setAttribute('id', 'smo278394');
smo278394.setFont('times', 12, 'normal');
smo278394.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278393.addModifier(smo278394);
smo278394.addClass('lyric lyric-0');
smo278418v0ar.push(smo278393);
const smo278395 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo278395.setAttribute('id', 'smo278395');
smo278418v0ar.push(smo278395);
const smo278396 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo278396.setAttribute('id', 'smo278396');
const smo278397 = new VF.Annotation('Ki');
smo278397.setAttribute('id', 'smo278397');
smo278397.setFont('times', 12, 'normal');
smo278397.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278396.addModifier(smo278397);
smo278397.addClass('lyric lyric-0 lyric-hyphen');
smo278418v0ar.push(smo278396);
const smo278398 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo278398.setAttribute('id', 'smo278398');
smo278418v0ar.push(smo278398);
const smo278399 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo278399.setAttribute('id', 'smo278399');
const smo278400 = new VF.Annotation('ki');
smo278400.setAttribute('id', 'smo278400');
smo278400.setFont('times', 12, 'normal');
smo278400.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278399.addModifier(smo278400);
smo278400.addClass('lyric lyric-0');
smo278418v0ar.push(smo278399);
const smo278401 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo278401.setAttribute('id', 'smo278401');
const smo278402 = new VF.Annotation('ri');
smo278402.setAttribute('id', 'smo278402');
smo278402.setFont('times', 12, 'normal');
smo278402.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278401.addModifier(smo278402);
smo278402.addClass('lyric lyric-0');
smo278418v0ar.push(smo278401);
smo278418v0.addTickables(smo278418v0ar)
fmtsmo27841865.joinVoices([smo278418v0]);
const fmtsmo28152565 = new VF.Formatter();
//
// voices and notes for stave 5 65
const smo281525v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo281525v0ar = [];
const smo281499 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo281499.setAttribute('id', 'smo281499');
const smo2814990acc = new VF.Accidental('n');
smo281499.addModifier(smo2814990acc, 0);
smo281525v0ar.push(smo281499);
const smo281500 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo281500.setAttribute('id', 'smo281500');
const smo281501 = new VF.Annotation('a');
smo281501.setAttribute('id', 'smo281501');
smo281501.setFont('times', 12, 'normal');
smo281501.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281500.addModifier(smo281501);
smo281501.addClass('lyric lyric-0');
smo281525v0ar.push(smo281500);
const smo281502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo281502.setAttribute('id', 'smo281502');
smo281525v0ar.push(smo281502);
const smo281503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo281503.setAttribute('id', 'smo281503');
const smo281504 = new VF.Annotation('Ki');
smo281504.setAttribute('id', 'smo281504');
smo281504.setFont('times', 12, 'normal');
smo281504.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281503.addModifier(smo281504);
smo281504.addClass('lyric lyric-0 lyric-hyphen');
smo281525v0ar.push(smo281503);
const smo281505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo281505.setAttribute('id', 'smo281505');
smo281525v0ar.push(smo281505);
const smo281506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo281506.setAttribute('id', 'smo281506');
const smo281507 = new VF.Annotation('ki');
smo281507.setAttribute('id', 'smo281507');
smo281507.setFont('times', 12, 'normal');
smo281507.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281506.addModifier(smo281507);
smo281507.addClass('lyric lyric-0');
smo281525v0ar.push(smo281506);
const smo281508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo281508.setAttribute('id', 'smo281508');
const smo281509 = new VF.Annotation('ri');
smo281509.setAttribute('id', 'smo281509');
smo281509.setFont('times', 12, 'normal');
smo281509.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281508.addModifier(smo281509);
smo281509.addClass('lyric lyric-0');
smo281525v0ar.push(smo281508);
smo281525v0.addTickables(smo281525v0ar)
fmtsmo28152565.joinVoices([smo281525v0]);
const fmtsmo28463765 = new VF.Formatter();
//
// voices and notes for stave 6 65
const smo284637v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo284637v0ar = [];
const smo284611 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo284611.setAttribute('id', 'smo284611');
const smo2846110acc = new VF.Accidental('n');
smo284611.addModifier(smo2846110acc, 0);
smo284637v0ar.push(smo284611);
const smo284612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo284612.setAttribute('id', 'smo284612');
const smo284613 = new VF.Annotation('a');
smo284613.setAttribute('id', 'smo284613');
smo284613.setFont('times', 12, 'normal');
smo284613.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284612.addModifier(smo284613);
smo284613.addClass('lyric lyric-0');
smo284637v0ar.push(smo284612);
const smo284614 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo284614.setAttribute('id', 'smo284614');
smo284637v0ar.push(smo284614);
const smo284615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo284615.setAttribute('id', 'smo284615');
const smo284616 = new VF.Annotation('Ki');
smo284616.setAttribute('id', 'smo284616');
smo284616.setFont('times', 12, 'normal');
smo284616.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284615.addModifier(smo284616);
smo284616.addClass('lyric lyric-0 lyric-hyphen');
smo284637v0ar.push(smo284615);
const smo284617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo284617.setAttribute('id', 'smo284617');
smo284637v0ar.push(smo284617);
const smo284618 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo284618.setAttribute('id', 'smo284618');
const smo284619 = new VF.Annotation('ki');
smo284619.setAttribute('id', 'smo284619');
smo284619.setFont('times', 12, 'normal');
smo284619.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284618.addModifier(smo284619);
smo284619.addClass('lyric lyric-0');
smo284637v0ar.push(smo284618);
const smo284620 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo284620.setAttribute('id', 'smo284620');
const smo284621 = new VF.Annotation('ri');
smo284621.setAttribute('id', 'smo284621');
smo284621.setFont('times', 12, 'normal');
smo284621.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284620.addModifier(smo284621);
smo284621.addClass('lyric lyric-0');
smo284637v0ar.push(smo284620);
smo284637v0.addTickables(smo284637v0ar)
fmtsmo28463765.joinVoices([smo284637v0]);
const fmtsmo28774665 = new VF.Formatter();
//
// voices and notes for stave 7 65
const smo287746v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287746v0ar = [];
const smo287720 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo287720.setAttribute('id', 'smo287720');
const smo2877200acc = new VF.Accidental('n');
smo287720.addModifier(smo2877200acc, 0);
smo287746v0ar.push(smo287720);
const smo287721 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo287721.setAttribute('id', 'smo287721');
const smo287722 = new VF.Annotation('a');
smo287722.setAttribute('id', 'smo287722');
smo287722.setFont('times', 12, 'normal');
smo287722.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287721.addModifier(smo287722);
smo287722.addClass('lyric lyric-0');
smo287746v0ar.push(smo287721);
const smo287723 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo287723.setAttribute('id', 'smo287723');
smo287746v0ar.push(smo287723);
const smo287724 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo287724.setAttribute('id', 'smo287724');
const smo287725 = new VF.Annotation('Ki');
smo287725.setAttribute('id', 'smo287725');
smo287725.setFont('times', 12, 'normal');
smo287725.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287724.addModifier(smo287725);
smo287725.addClass('lyric lyric-0 lyric-hyphen');
smo287746v0ar.push(smo287724);
const smo287726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo287726.setAttribute('id', 'smo287726');
smo287746v0ar.push(smo287726);
const smo287727 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo287727.setAttribute('id', 'smo287727');
const smo287728 = new VF.Annotation('ki');
smo287728.setAttribute('id', 'smo287728');
smo287728.setFont('times', 12, 'normal');
smo287728.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287727.addModifier(smo287728);
smo287728.addClass('lyric lyric-0');
smo287746v0ar.push(smo287727);
const smo287729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo287729.setAttribute('id', 'smo287729');
const smo287730 = new VF.Annotation('ri');
smo287730.setAttribute('id', 'smo287730');
smo287730.setFont('times', 12, 'normal');
smo287730.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287729.addModifier(smo287730);
smo287730.addClass('lyric lyric-0');
smo287746v0ar.push(smo287729);
smo287746v0.addTickables(smo287746v0ar)
fmtsmo28774665.joinVoices([smo287746v0]);
const fmtsmo29083265 = new VF.Formatter();
//
// voices and notes for stave 8 65
const smo290832v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290832v0ar = [];
const smo290806 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo290806.setAttribute('id', 'smo290806');
const smo2908060acc = new VF.Accidental('n');
smo290806.addModifier(smo2908060acc, 0);
smo290832v0ar.push(smo290806);
const smo290807 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo290807.setAttribute('id', 'smo290807');
const smo290808 = new VF.Annotation('a');
smo290808.setAttribute('id', 'smo290808');
smo290808.setFont('times', 12, 'normal');
smo290808.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290807.addModifier(smo290808);
smo290808.addClass('lyric lyric-0');
smo290832v0ar.push(smo290807);
const smo290809 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo290809.setAttribute('id', 'smo290809');
smo290832v0ar.push(smo290809);
const smo290810 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo290810.setAttribute('id', 'smo290810');
const smo290811 = new VF.Annotation('Ki');
smo290811.setAttribute('id', 'smo290811');
smo290811.setFont('times', 12, 'normal');
smo290811.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290810.addModifier(smo290811);
smo290811.addClass('lyric lyric-0 lyric-hyphen');
smo290832v0ar.push(smo290810);
const smo290812 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo290812.setAttribute('id', 'smo290812');
smo290832v0ar.push(smo290812);
const smo290813 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo290813.setAttribute('id', 'smo290813');
const smo290814 = new VF.Annotation('ki');
smo290814.setAttribute('id', 'smo290814');
smo290814.setFont('times', 12, 'normal');
smo290814.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290813.addModifier(smo290814);
smo290814.addClass('lyric lyric-0');
smo290832v0ar.push(smo290813);
const smo290815 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo290815.setAttribute('id', 'smo290815');
const smo290816 = new VF.Annotation('ri');
smo290816.setAttribute('id', 'smo290816');
smo290816.setFont('times', 12, 'normal');
smo290816.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290815.addModifier(smo290816);
smo290816.addClass('lyric lyric-0');
smo290832v0ar.push(smo290815);
smo290832v0.addTickables(smo290832v0ar)
fmtsmo29083265.joinVoices([smo290832v0]);
const fmtsmo29392165 = new VF.Formatter();
//
// voices and notes for stave 9 65
const smo293921v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo293921v0ar = [];
const smo293895 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo293895.setAttribute('id', 'smo293895');
const smo2938950acc = new VF.Accidental('b');
smo293895.addModifier(smo2938950acc, 0);
smo293921v0ar.push(smo293895);
const smo293896 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo293896.setAttribute('id', 'smo293896');
const smo293897 = new VF.Annotation('a');
smo293897.setAttribute('id', 'smo293897');
smo293897.setFont('times', 12, 'normal');
smo293897.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293896.addModifier(smo293897);
smo293897.addClass('lyric lyric-0');
smo293921v0ar.push(smo293896);
const smo293898 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo293898.setAttribute('id', 'smo293898');
smo293921v0ar.push(smo293898);
const smo293899 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo293899.setAttribute('id', 'smo293899');
const smo293900 = new VF.Annotation('Ki');
smo293900.setAttribute('id', 'smo293900');
smo293900.setFont('times', 12, 'normal');
smo293900.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293899.addModifier(smo293900);
smo293900.addClass('lyric lyric-0 lyric-hyphen');
smo293921v0ar.push(smo293899);
const smo293901 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo293901.setAttribute('id', 'smo293901');
smo293921v0ar.push(smo293901);
const smo293902 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo293902.setAttribute('id', 'smo293902');
const smo293903 = new VF.Annotation('ki');
smo293903.setAttribute('id', 'smo293903');
smo293903.setFont('times', 12, 'normal');
smo293903.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293902.addModifier(smo293903);
smo293903.addClass('lyric lyric-0');
smo293921v0ar.push(smo293902);
const smo293904 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo293904.setAttribute('id', 'smo293904');
const smo293905 = new VF.Annotation('ri');
smo293905.setAttribute('id', 'smo293905');
smo293905.setFont('times', 12, 'normal');
smo293905.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293904.addModifier(smo293905);
smo293905.addClass('lyric lyric-0');
smo293921v0ar.push(smo293904);
smo293921v0.addTickables(smo293921v0ar)
fmtsmo29392165.joinVoices([smo293921v0]);
const fmtsmo29696165 = new VF.Formatter();
//
// voices and notes for stave 10 65
const smo296961v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo296961v0ar = [];
const smo296935 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo296935.setAttribute('id', 'smo296935');
const smo2969350acc = new VF.Accidental('b');
smo296935.addModifier(smo2969350acc, 0);
smo296961v0ar.push(smo296935);
const smo296936 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo296936.setAttribute('id', 'smo296936');
const smo296937 = new VF.Annotation('a');
smo296937.setAttribute('id', 'smo296937');
smo296937.setFont('times', 12, 'normal');
smo296937.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296936.addModifier(smo296937);
smo296937.addClass('lyric lyric-0');
smo296961v0ar.push(smo296936);
const smo296938 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo296938.setAttribute('id', 'smo296938');
smo296961v0ar.push(smo296938);
const smo296939 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo296939.setAttribute('id', 'smo296939');
const smo296940 = new VF.Annotation('Ki');
smo296940.setAttribute('id', 'smo296940');
smo296940.setFont('times', 12, 'normal');
smo296940.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296939.addModifier(smo296940);
smo296940.addClass('lyric lyric-0 lyric-hyphen');
smo296961v0ar.push(smo296939);
const smo296941 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo296941.setAttribute('id', 'smo296941');
smo296961v0ar.push(smo296941);
const smo296942 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo296942.setAttribute('id', 'smo296942');
const smo296943 = new VF.Annotation('ki');
smo296943.setAttribute('id', 'smo296943');
smo296943.setFont('times', 12, 'normal');
smo296943.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296942.addModifier(smo296943);
smo296943.addClass('lyric lyric-0');
smo296961v0ar.push(smo296942);
const smo296944 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo296944.setAttribute('id', 'smo296944');
const smo296945 = new VF.Annotation('ri');
smo296945.setAttribute('id', 'smo296945');
smo296945.setFont('times', 12, 'normal');
smo296945.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296944.addModifier(smo296945);
smo296945.addClass('lyric lyric-0');
smo296961v0ar.push(smo296944);
smo296961v0.addTickables(smo296961v0ar)
fmtsmo29696165.joinVoices([smo296961v0]);
const fmtsmo30001565 = new VF.Formatter();
//
// voices and notes for stave 11 65
const smo300015v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300015v0ar = [];
const smo299989 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo299989.setAttribute('id', 'smo299989');
const smo2999890acc = new VF.Accidental('b');
smo299989.addModifier(smo2999890acc, 0);
smo300015v0ar.push(smo299989);
const smo299990 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo299990.setAttribute('id', 'smo299990');
const smo299991 = new VF.Annotation('a');
smo299991.setAttribute('id', 'smo299991');
smo299991.setFont('times', 12, 'normal');
smo299991.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo299990.addModifier(smo299991);
smo299991.addClass('lyric lyric-0');
smo300015v0ar.push(smo299990);
const smo299992 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo299992.setAttribute('id', 'smo299992');
smo300015v0ar.push(smo299992);
const smo299993 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo299993.setAttribute('id', 'smo299993');
const smo299994 = new VF.Annotation('Ki');
smo299994.setAttribute('id', 'smo299994');
smo299994.setFont('times', 12, 'normal');
smo299994.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo299993.addModifier(smo299994);
smo299994.addClass('lyric lyric-0 lyric-hyphen');
smo300015v0ar.push(smo299993);
const smo299995 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo299995.setAttribute('id', 'smo299995');
smo300015v0ar.push(smo299995);
const smo299996 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo299996.setAttribute('id', 'smo299996');
const smo299997 = new VF.Annotation('ki');
smo299997.setAttribute('id', 'smo299997');
smo299997.setFont('times', 12, 'normal');
smo299997.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo299996.addModifier(smo299997);
smo299997.addClass('lyric lyric-0');
smo300015v0ar.push(smo299996);
const smo299998 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo299998.setAttribute('id', 'smo299998');
const smo299999 = new VF.Annotation('ri');
smo299999.setAttribute('id', 'smo299999');
smo299999.setFont('times', 12, 'normal');
smo299999.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo299998.addModifier(smo299999);
smo299999.addClass('lyric lyric-0');
smo300015v0ar.push(smo299998);
smo300015v0.addTickables(smo300015v0ar)
fmtsmo30001565.joinVoices([smo300015v0]);
const fmtsmo30305865 = new VF.Formatter();
//
// voices and notes for stave 12 65
const smo303058v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo303058v0ar = [];
const smo303032 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo303032.setAttribute('id', 'smo303032');
const smo3030320acc = new VF.Accidental('b');
smo303032.addModifier(smo3030320acc, 0);
smo303058v0ar.push(smo303032);
const smo303033 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo303033.setAttribute('id', 'smo303033');
const smo303034 = new VF.Annotation('a');
smo303034.setAttribute('id', 'smo303034');
smo303034.setFont('times', 12, 'normal');
smo303034.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo303033.addModifier(smo303034);
smo303034.addClass('lyric lyric-0');
smo303058v0ar.push(smo303033);
const smo303035 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo303035.setAttribute('id', 'smo303035');
smo303058v0ar.push(smo303035);
const smo303036 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo303036.setAttribute('id', 'smo303036');
const smo303037 = new VF.Annotation('Ki');
smo303037.setAttribute('id', 'smo303037');
smo303037.setFont('times', 12, 'normal');
smo303037.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo303036.addModifier(smo303037);
smo303037.addClass('lyric lyric-0 lyric-hyphen');
smo303058v0ar.push(smo303036);
const smo303038 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo303038.setAttribute('id', 'smo303038');
smo303058v0ar.push(smo303038);
const smo303039 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo303039.setAttribute('id', 'smo303039');
const smo303040 = new VF.Annotation('ki');
smo303040.setAttribute('id', 'smo303040');
smo303040.setFont('times', 12, 'normal');
smo303040.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo303039.addModifier(smo303040);
smo303040.addClass('lyric lyric-0');
smo303058v0ar.push(smo303039);
const smo303041 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo303041.setAttribute('id', 'smo303041');
const smo303042 = new VF.Annotation('ri');
smo303042.setAttribute('id', 'smo303042');
smo303042.setFont('times', 12, 'normal');
smo303042.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo303041.addModifier(smo303042);
smo303042.addClass('lyric lyric-0');
smo303058v0ar.push(smo303041);
smo303058v0.addTickables(smo303058v0ar)
fmtsmo30305865.joinVoices([smo303058v0]);
const fmtsmo30626465 = new VF.Formatter();
//
// voices and notes for stave 13 65
const smo306264v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo306264v0ar = [];
const smo306244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n","eb/5/n"]}'))
smo306244.setAttribute('id', 'smo306244');
const smo3062442acc = new VF.Accidental('b');
smo306244.addModifier(smo3062442acc, 2);
smo306244.addModifier(new VF.Dot(), 0);
smo306244.addModifier(new VF.Dot(), 1);
smo306244.addModifier(new VF.Dot(), 2);
smo306264v0ar.push(smo306244);
const smo306245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
smo306245.setAttribute('id', 'smo306245');
const smo3062450acc = new VF.Accidental('#');
smo306245.addModifier(smo3062450acc, 0);
smo306264v0ar.push(smo306245);
const smo306246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
smo306246.setAttribute('id', 'smo306246');
smo306264v0ar.push(smo306246);
const smo306247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo306247.setAttribute('id', 'smo306247');
smo306264v0ar.push(smo306247);
const smo306248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo306248.setAttribute('id', 'smo306248');
smo306264v0ar.push(smo306248);
smo306264v0.addTickables(smo306264v0ar)
fmtsmo30626465.joinVoices([smo306264v0]);
const fmtsmo30947765 = new VF.Formatter();
//
// voices and notes for stave 14 65
const smo309477v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309477v0ar = [];
const smo309457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n","eb/5/n"]}'))
smo309457.setAttribute('id', 'smo309457');
const smo3094572acc = new VF.Accidental('b');
smo309457.addModifier(smo3094572acc, 2);
smo309457.addModifier(new VF.Dot(), 0);
smo309457.addModifier(new VF.Dot(), 1);
smo309457.addModifier(new VF.Dot(), 2);
smo309477v0ar.push(smo309457);
const smo309458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
smo309458.setAttribute('id', 'smo309458');
const smo3094580acc = new VF.Accidental('#');
smo309458.addModifier(smo3094580acc, 0);
smo309477v0ar.push(smo309458);
const smo309459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
smo309459.setAttribute('id', 'smo309459');
smo309477v0ar.push(smo309459);
const smo309460 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo309460.setAttribute('id', 'smo309460');
smo309477v0ar.push(smo309460);
const smo309461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo309461.setAttribute('id', 'smo309461');
smo309477v0ar.push(smo309461);
smo309477v0.addTickables(smo309477v0ar)
fmtsmo30947765.joinVoices([smo309477v0]);
const fmtsmo31267265 = new VF.Formatter();
//
// voices and notes for stave 15 65
const smo312672v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo312672v0ar = [];
const smo312652 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo312652.setAttribute('id', 'smo312652');
smo312652.addModifier(new VF.Dot(), 0);
smo312672v0ar.push(smo312652);
const smo312653 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo312653.setAttribute('id', 'smo312653');
const smo3126530acc = new VF.Accidental('#');
smo312653.addModifier(smo3126530acc, 0);
smo312672v0ar.push(smo312653);
const smo312654 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo312654.setAttribute('id', 'smo312654');
smo312672v0ar.push(smo312654);
const smo312655 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo312655.setAttribute('id', 'smo312655');
smo312672v0ar.push(smo312655);
const smo312656 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo312656.setAttribute('id', 'smo312656');
smo312672v0ar.push(smo312656);
smo312672v0.addTickables(smo312672v0ar)
fmtsmo31267265.joinVoices([smo312672v0]);
const fmtsmo31578965 = new VF.Formatter();
//
// voices and notes for stave 16 65
const smo315789v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo315789v0ar = [];
const smo315770 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo315770.setAttribute('id', 'smo315770');
smo315770.addModifier(new VF.Dot(), 0);
smo315789v0ar.push(smo315770);
const smo315771 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo315771.setAttribute('id', 'smo315771');
smo315789v0ar.push(smo315771);
const smo315772 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo315772.setAttribute('id', 'smo315772');
smo315789v0ar.push(smo315772);
const smo315773 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo315773.setAttribute('id', 'smo315773');
smo315789v0ar.push(smo315773);
smo315789v0.addTickables(smo315789v0ar)
fmtsmo31578965.joinVoices([smo315789v0]);
const fmtsmo31897865 = new VF.Formatter();
//
// voices and notes for stave 17 65
const smo318978v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo318978v0ar = [];
const smo318959 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo318959.setAttribute('id', 'smo318959');
const smo3189590acc = new VF.Accidental('n');
smo318959.addModifier(smo3189590acc, 0);
smo318959.addModifier(new VF.Dot(), 0);
smo318978v0ar.push(smo318959);
const smo318960 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo318960.setAttribute('id', 'smo318960');
smo318978v0ar.push(smo318960);
const smo318961 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo318961.setAttribute('id', 'smo318961');
smo318978v0ar.push(smo318961);
const smo318962 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo318962.setAttribute('id', 'smo318962');
smo318978v0ar.push(smo318962);
smo318978v0.addTickables(smo318978v0ar)
fmtsmo31897865.joinVoices([smo318978v0]);
// create beam groups and tuplets for format grp smo320731 before formatting
const dirsmo412107 = smo266120.getStemDirection();
smo266120.setStemDirection(dirsmo412107);
smo266121.setStemDirection(dirsmo412107);
const smo412107 = new VF.Beam([smo266120,smo266121]);
const dirsmo412108 = smo266124.getStemDirection();
smo266124.setStemDirection(dirsmo412108);
smo266126.setStemDirection(dirsmo412108);
const smo412108 = new VF.Beam([smo266124,smo266126]);
const dirsmo412111 = smo269114.getStemDirection();
smo269114.setStemDirection(dirsmo412111);
smo269115.setStemDirection(dirsmo412111);
const smo412111 = new VF.Beam([smo269114,smo269115]);
const dirsmo412112 = smo269118.getStemDirection();
smo269118.setStemDirection(dirsmo412112);
smo269120.setStemDirection(dirsmo412112);
const smo412112 = new VF.Beam([smo269118,smo269120]);
const dirsmo412115 = smo272257.getStemDirection();
smo272257.setStemDirection(dirsmo412115);
smo272258.setStemDirection(dirsmo412115);
const smo412115 = new VF.Beam([smo272257,smo272258]);
const dirsmo412116 = smo272261.getStemDirection();
smo272261.setStemDirection(dirsmo412116);
smo272263.setStemDirection(dirsmo412116);
const smo412116 = new VF.Beam([smo272261,smo272263]);
const dirsmo412119 = smo275373.getStemDirection();
smo275373.setStemDirection(dirsmo412119);
smo275374.setStemDirection(dirsmo412119);
const smo412119 = new VF.Beam([smo275373,smo275374]);
const dirsmo412120 = smo275377.getStemDirection();
smo275377.setStemDirection(dirsmo412120);
smo275379.setStemDirection(dirsmo412120);
const smo412120 = new VF.Beam([smo275377,smo275379]);
const dirsmo412123 = smo278392.getStemDirection();
smo278392.setStemDirection(dirsmo412123);
smo278393.setStemDirection(dirsmo412123);
const smo412123 = new VF.Beam([smo278392,smo278393]);
const dirsmo412124 = smo278396.getStemDirection();
smo278396.setStemDirection(dirsmo412124);
smo278398.setStemDirection(dirsmo412124);
const smo412124 = new VF.Beam([smo278396,smo278398]);
 
// formatting measures in staff group smo320731
fmtsmo26614665.format([smo266146v0,smo269140v0,smo272283v0,smo275399v0,smo278418v0], 288);
const stavesmo266146 = new VF.Stave(808, 210, 302);
stavesmo266146.setAttribute('id', 'stavesmo266146');
stavesmo266146.setBegBarType(VF.Barline.type.NONE);
stavesmo266146.setContext(context);
stavesmo266146.draw();
smo266146v0.draw(context, stavesmo266146);
smo412107.setContext(context);
smo412107.draw();
smo412108.setContext(context);
smo412108.draw();
const stavesmo269140 = new VF.Stave(808, 316, 302);
stavesmo269140.setAttribute('id', 'stavesmo269140');
stavesmo269140.setBegBarType(VF.Barline.type.NONE);
stavesmo269140.setContext(context);
stavesmo269140.draw();
smo269140v0.draw(context, stavesmo269140);
smo412111.setContext(context);
smo412111.draw();
smo412112.setContext(context);
smo412112.draw();
const stavesmo272283 = new VF.Stave(808, 437, 302);
stavesmo272283.setAttribute('id', 'stavesmo272283');
stavesmo272283.setBegBarType(VF.Barline.type.NONE);
stavesmo272283.setContext(context);
stavesmo272283.draw();
smo272283v0.draw(context, stavesmo272283);
smo412115.setContext(context);
smo412115.draw();
smo412116.setContext(context);
smo412116.draw();
const stavesmo275399 = new VF.Stave(808, 553, 302);
stavesmo275399.setAttribute('id', 'stavesmo275399');
stavesmo275399.setBegBarType(VF.Barline.type.NONE);
stavesmo275399.setContext(context);
stavesmo275399.draw();
smo275399v0.draw(context, stavesmo275399);
smo412119.setContext(context);
smo412119.draw();
smo412120.setContext(context);
smo412120.draw();
const stavesmo278418 = new VF.Stave(808, 659, 302);
stavesmo278418.setAttribute('id', 'stavesmo278418');
stavesmo278418.setBegBarType(VF.Barline.type.NONE);
stavesmo278418.setContext(context);
stavesmo278418.draw();
smo278418v0.draw(context, stavesmo278418);
smo412123.setContext(context);
smo412123.draw();
smo412124.setContext(context);
smo412124.draw();
// create beam groups and tuplets for format grp smo320733 before formatting
const dirsmo412127 = smo281499.getStemDirection();
smo281499.setStemDirection(dirsmo412127);
smo281500.setStemDirection(dirsmo412127);
const smo412127 = new VF.Beam([smo281499,smo281500]);
const dirsmo412128 = smo281503.getStemDirection();
smo281503.setStemDirection(dirsmo412128);
smo281505.setStemDirection(dirsmo412128);
const smo412128 = new VF.Beam([smo281503,smo281505]);
const dirsmo412131 = smo284611.getStemDirection();
smo284611.setStemDirection(dirsmo412131);
smo284612.setStemDirection(dirsmo412131);
const smo412131 = new VF.Beam([smo284611,smo284612]);
const dirsmo412132 = smo284615.getStemDirection();
smo284615.setStemDirection(dirsmo412132);
smo284617.setStemDirection(dirsmo412132);
const smo412132 = new VF.Beam([smo284615,smo284617]);
const dirsmo412135 = smo287720.getStemDirection();
smo287720.setStemDirection(dirsmo412135);
smo287721.setStemDirection(dirsmo412135);
const smo412135 = new VF.Beam([smo287720,smo287721]);
const dirsmo412136 = smo287724.getStemDirection();
smo287724.setStemDirection(dirsmo412136);
smo287726.setStemDirection(dirsmo412136);
const smo412136 = new VF.Beam([smo287724,smo287726]);
const dirsmo412139 = smo290806.getStemDirection();
smo290806.setStemDirection(dirsmo412139);
smo290807.setStemDirection(dirsmo412139);
const smo412139 = new VF.Beam([smo290806,smo290807]);
const dirsmo412140 = smo290810.getStemDirection();
smo290810.setStemDirection(dirsmo412140);
smo290812.setStemDirection(dirsmo412140);
const smo412140 = new VF.Beam([smo290810,smo290812]);
 
// formatting measures in staff group smo320733
fmtsmo28152565.format([smo281525v0,smo284637v0,smo287746v0,smo290832v0], 288);
const stavesmo281525 = new VF.Stave(808, 780, 302);
stavesmo281525.setAttribute('id', 'stavesmo281525');
stavesmo281525.setBegBarType(VF.Barline.type.NONE);
stavesmo281525.setContext(context);
stavesmo281525.draw();
smo281525v0.draw(context, stavesmo281525);
smo412127.setContext(context);
smo412127.draw();
smo412128.setContext(context);
smo412128.draw();
const stavesmo284637 = new VF.Stave(808, 896, 302);
stavesmo284637.setAttribute('id', 'stavesmo284637');
stavesmo284637.setBegBarType(VF.Barline.type.NONE);
stavesmo284637.setContext(context);
stavesmo284637.draw();
smo284637v0.draw(context, stavesmo284637);
smo412131.setContext(context);
smo412131.draw();
smo412132.setContext(context);
smo412132.draw();
const stavesmo287746 = new VF.Stave(808, 1012, 302);
stavesmo287746.setAttribute('id', 'stavesmo287746');
stavesmo287746.setBegBarType(VF.Barline.type.NONE);
stavesmo287746.setContext(context);
stavesmo287746.draw();
smo287746v0.draw(context, stavesmo287746);
smo412135.setContext(context);
smo412135.draw();
smo412136.setContext(context);
smo412136.draw();
const stavesmo290832 = new VF.Stave(808, 1128, 302);
stavesmo290832.setAttribute('id', 'stavesmo290832');
stavesmo290832.setBegBarType(VF.Barline.type.NONE);
stavesmo290832.setContext(context);
stavesmo290832.draw();
smo290832v0.draw(context, stavesmo290832);
smo412139.setContext(context);
smo412139.draw();
smo412140.setContext(context);
smo412140.draw();
// create beam groups and tuplets for format grp smo320735 before formatting
const dirsmo412143 = smo293895.getStemDirection();
smo293895.setStemDirection(dirsmo412143);
smo293896.setStemDirection(dirsmo412143);
const smo412143 = new VF.Beam([smo293895,smo293896]);
const dirsmo412144 = smo293899.getStemDirection();
smo293899.setStemDirection(dirsmo412144);
smo293901.setStemDirection(dirsmo412144);
const smo412144 = new VF.Beam([smo293899,smo293901]);
const dirsmo412147 = smo296935.getStemDirection();
smo296935.setStemDirection(dirsmo412147);
smo296936.setStemDirection(dirsmo412147);
const smo412147 = new VF.Beam([smo296935,smo296936]);
const dirsmo412148 = smo296939.getStemDirection();
smo296939.setStemDirection(dirsmo412148);
smo296941.setStemDirection(dirsmo412148);
const smo412148 = new VF.Beam([smo296939,smo296941]);
const dirsmo412151 = smo299989.getStemDirection();
smo299989.setStemDirection(dirsmo412151);
smo299990.setStemDirection(dirsmo412151);
const smo412151 = new VF.Beam([smo299989,smo299990]);
const dirsmo412152 = smo299993.getStemDirection();
smo299993.setStemDirection(dirsmo412152);
smo299995.setStemDirection(dirsmo412152);
const smo412152 = new VF.Beam([smo299993,smo299995]);
const dirsmo412155 = smo303032.getStemDirection();
smo303032.setStemDirection(dirsmo412155);
smo303033.setStemDirection(dirsmo412155);
const smo412155 = new VF.Beam([smo303032,smo303033]);
const dirsmo412156 = smo303036.getStemDirection();
smo303036.setStemDirection(dirsmo412156);
smo303038.setStemDirection(dirsmo412156);
const smo412156 = new VF.Beam([smo303036,smo303038]);
 
// formatting measures in staff group smo320735
fmtsmo29392165.format([smo293921v0,smo296961v0,smo300015v0,smo303058v0], 288);
const stavesmo293921 = new VF.Stave(808, 1264, 302);
stavesmo293921.setAttribute('id', 'stavesmo293921');
stavesmo293921.setBegBarType(VF.Barline.type.NONE);
stavesmo293921.setContext(context);
stavesmo293921.draw();
smo293921v0.draw(context, stavesmo293921);
smo412143.setContext(context);
smo412143.draw();
smo412144.setContext(context);
smo412144.draw();
const stavesmo296961 = new VF.Stave(808, 1400, 302);
stavesmo296961.setAttribute('id', 'stavesmo296961');
stavesmo296961.setBegBarType(VF.Barline.type.NONE);
stavesmo296961.setContext(context);
stavesmo296961.draw();
smo296961v0.draw(context, stavesmo296961);
smo412147.setContext(context);
smo412147.draw();
smo412148.setContext(context);
smo412148.draw();
const stavesmo300015 = new VF.Stave(808, 1536, 302);
stavesmo300015.setAttribute('id', 'stavesmo300015');
stavesmo300015.setBegBarType(VF.Barline.type.NONE);
stavesmo300015.setContext(context);
stavesmo300015.draw();
smo300015v0.draw(context, stavesmo300015);
smo412151.setContext(context);
smo412151.draw();
smo412152.setContext(context);
smo412152.draw();
const stavesmo303058 = new VF.Stave(808, 1672, 302);
stavesmo303058.setAttribute('id', 'stavesmo303058');
stavesmo303058.setBegBarType(VF.Barline.type.NONE);
stavesmo303058.setContext(context);
stavesmo303058.draw();
smo303058v0.draw(context, stavesmo303058);
smo412155.setContext(context);
smo412155.draw();
smo412156.setContext(context);
smo412156.draw();
// create beam groups and tuplets for format grp smo308054 before formatting
const dirsmo412159 = smo306245.getStemDirection();
smo306245.setStemDirection(dirsmo412159);
smo306246.setStemDirection(dirsmo412159);
const smo412159 = new VF.Beam([smo306245,smo306246]);
 
// formatting measures in staff group smo308054
fmtsmo30626465.format([smo306264v0], 288);
const stavesmo306264 = new VF.Stave(808, 1818, 302);
stavesmo306264.setAttribute('id', 'stavesmo306264');
stavesmo306264.setBegBarType(VF.Barline.type.NONE);
stavesmo306264.setContext(context);
stavesmo306264.draw();
smo306264v0.draw(context, stavesmo306264);
smo412159.setContext(context);
smo412159.draw();
// create beam groups and tuplets for format grp smo320729 before formatting
const dirsmo412162 = smo309458.getStemDirection();
smo309458.setStemDirection(dirsmo412162);
smo309459.setStemDirection(dirsmo412162);
const smo412162 = new VF.Beam([smo309458,smo309459]);
const dirsmo412165 = smo312653.getStemDirection();
smo312653.setStemDirection(dirsmo412165);
smo312654.setStemDirection(dirsmo412165);
const smo412165 = new VF.Beam([smo312653,smo312654]);
 
// formatting measures in staff group smo320729
fmtsmo30947765.format([smo309477v0,smo312672v0], 288);
const stavesmo309477 = new VF.Stave(808, 1924, 302);
stavesmo309477.setAttribute('id', 'stavesmo309477');
stavesmo309477.setBegBarType(VF.Barline.type.NONE);
stavesmo309477.setContext(context);
stavesmo309477.draw();
smo309477v0.draw(context, stavesmo309477);
smo412162.setContext(context);
smo412162.draw();
const stavesmo312672 = new VF.Stave(808, 2010, 302);
stavesmo312672.setAttribute('id', 'stavesmo312672');
stavesmo312672.setBegBarType(VF.Barline.type.NONE);
stavesmo312672.setContext(context);
stavesmo312672.draw();
smo312672v0.draw(context, stavesmo312672);
smo412165.setContext(context);
smo412165.draw();
// create beam groups and tuplets for format grp smo317567 before formatting
 
// formatting measures in staff group smo317567
fmtsmo31578965.format([smo315789v0], 288);
const stavesmo315789 = new VF.Stave(808, 2081, 302);
stavesmo315789.setAttribute('id', 'stavesmo315789');
stavesmo315789.setBegBarType(VF.Barline.type.NONE);
stavesmo315789.setContext(context);
stavesmo315789.draw();
smo315789v0.draw(context, stavesmo315789);
// create beam groups and tuplets for format grp smo320723 before formatting
 
// formatting measures in staff group smo320723
fmtsmo31897865.format([smo318978v0], 288);
const stavesmo318978 = new VF.Stave(808, 2152, 302);
stavesmo318978.setAttribute('id', 'stavesmo318978');
stavesmo318978.setBegBarType(VF.Barline.type.NONE);
stavesmo318978.setContext(context);
stavesmo318978.draw();
smo318978v0.draw(context, stavesmo318978);
const fmtsmo26617566 = new VF.Formatter();
//
// voices and notes for stave 0 66
const smo266175v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266175v0ar = [];
const smo266147 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo266147.setAttribute('id', 'smo266147');
const smo266148 = new VF.Annotation('bun');
smo266148.setAttribute('id', 'smo266148');
smo266148.setFont('times', 12, 'normal');
smo266148.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266147.addModifier(smo266148);
smo266148.addClass('lyric lyric-0');
smo266175v0ar.push(smo266147);
const smo266149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo266149.setAttribute('id', 'smo266149');
const smo266150 = new VF.Annotation('yi');
smo266150.setAttribute('id', 'smo266150');
smo266150.setFont('times', 12, 'normal');
smo266150.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266149.addModifier(smo266150);
smo266150.addClass('lyric lyric-0 lyric-hyphen');
smo266175v0ar.push(smo266149);
const smo266151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo266151.setAttribute('id', 'smo266151');
const smo266152 = new VF.Annotation('ri');
smo266152.setAttribute('id', 'smo266152');
smo266152.setFont('times', 12, 'normal');
smo266152.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266151.addModifier(smo266152);
smo266152.addClass('lyric lyric-0');
smo266175v0ar.push(smo266151);
const smo266153 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo266153.setAttribute('id', 'smo266153');
const smo266154 = new VF.Annotation('bun');
smo266154.setAttribute('id', 'smo266154');
smo266154.setFont('times', 12, 'normal');
smo266154.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266153.addModifier(smo266154);
smo266154.addClass('lyric lyric-0');
smo266175v0ar.push(smo266153);
const smo266155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo266155.setAttribute('id', 'smo266155');
const smo266156 = new VF.Annotation('Man');
smo266156.setAttribute('id', 'smo266156');
smo266156.setFont('times', 12, 'normal');
smo266156.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266155.addModifier(smo266156);
smo266156.addClass('lyric lyric-0 lyric-hyphen');
smo266175v0ar.push(smo266155);
const smo266157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo266157.setAttribute('id', 'smo266157');
smo266175v0ar.push(smo266157);
const smo266158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo266158.setAttribute('id', 'smo266158');
const smo266159 = new VF.Annotation('ding');
smo266159.setAttribute('id', 'smo266159');
smo266159.setFont('times', 12, 'normal');
smo266159.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266158.addModifier(smo266159);
smo266159.addClass('lyric lyric-0 lyric-hyphen');
smo266175v0ar.push(smo266158);
smo266175v0.addTickables(smo266175v0ar)
fmtsmo26617566.joinVoices([smo266175v0]);
const fmtsmo26916966 = new VF.Formatter();
//
// voices and notes for stave 1 66
const smo269169v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269169v0ar = [];
const smo269141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo269141.setAttribute('id', 'smo269141');
const smo269142 = new VF.Annotation('bun');
smo269142.setAttribute('id', 'smo269142');
smo269142.setFont('times', 12, 'normal');
smo269142.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269141.addModifier(smo269142);
smo269142.addClass('lyric lyric-0');
smo269169v0ar.push(smo269141);
const smo269143 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo269143.setAttribute('id', 'smo269143');
const smo269144 = new VF.Annotation('yi');
smo269144.setAttribute('id', 'smo269144');
smo269144.setFont('times', 12, 'normal');
smo269144.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269143.addModifier(smo269144);
smo269144.addClass('lyric lyric-0 lyric-hyphen');
smo269169v0ar.push(smo269143);
const smo269145 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo269145.setAttribute('id', 'smo269145');
const smo269146 = new VF.Annotation('ri');
smo269146.setAttribute('id', 'smo269146');
smo269146.setFont('times', 12, 'normal');
smo269146.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269145.addModifier(smo269146);
smo269146.addClass('lyric lyric-0');
smo269169v0ar.push(smo269145);
const smo269147 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo269147.setAttribute('id', 'smo269147');
const smo269148 = new VF.Annotation('bun');
smo269148.setAttribute('id', 'smo269148');
smo269148.setFont('times', 12, 'normal');
smo269148.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269147.addModifier(smo269148);
smo269148.addClass('lyric lyric-0');
smo269169v0ar.push(smo269147);
const smo269149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo269149.setAttribute('id', 'smo269149');
const smo269150 = new VF.Annotation('Man');
smo269150.setAttribute('id', 'smo269150');
smo269150.setFont('times', 12, 'normal');
smo269150.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269149.addModifier(smo269150);
smo269150.addClass('lyric lyric-0 lyric-hyphen');
smo269169v0ar.push(smo269149);
const smo269151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo269151.setAttribute('id', 'smo269151');
smo269169v0ar.push(smo269151);
const smo269152 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo269152.setAttribute('id', 'smo269152');
const smo269153 = new VF.Annotation('ding');
smo269153.setAttribute('id', 'smo269153');
smo269153.setFont('times', 12, 'normal');
smo269153.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269152.addModifier(smo269153);
smo269153.addClass('lyric lyric-0 lyric-hyphen');
smo269169v0ar.push(smo269152);
smo269169v0.addTickables(smo269169v0ar)
fmtsmo26916966.joinVoices([smo269169v0]);
const fmtsmo27231266 = new VF.Formatter();
//
// voices and notes for stave 2 66
const smo272312v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272312v0ar = [];
const smo272284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo272284.setAttribute('id', 'smo272284');
const smo272285 = new VF.Annotation('bun');
smo272285.setAttribute('id', 'smo272285');
smo272285.setFont('times', 12, 'normal');
smo272285.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272284.addModifier(smo272285);
smo272285.addClass('lyric lyric-0');
smo272312v0ar.push(smo272284);
const smo272286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo272286.setAttribute('id', 'smo272286');
const smo272287 = new VF.Annotation('yi');
smo272287.setAttribute('id', 'smo272287');
smo272287.setFont('times', 12, 'normal');
smo272287.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272286.addModifier(smo272287);
smo272287.addClass('lyric lyric-0 lyric-hyphen');
smo272312v0ar.push(smo272286);
const smo272288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo272288.setAttribute('id', 'smo272288');
const smo272289 = new VF.Annotation('ri');
smo272289.setAttribute('id', 'smo272289');
smo272289.setFont('times', 12, 'normal');
smo272289.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272288.addModifier(smo272289);
smo272289.addClass('lyric lyric-0');
smo272312v0ar.push(smo272288);
const smo272290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo272290.setAttribute('id', 'smo272290');
const smo272291 = new VF.Annotation('bun');
smo272291.setAttribute('id', 'smo272291');
smo272291.setFont('times', 12, 'normal');
smo272291.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272290.addModifier(smo272291);
smo272291.addClass('lyric lyric-0');
smo272312v0ar.push(smo272290);
const smo272292 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo272292.setAttribute('id', 'smo272292');
const smo272293 = new VF.Annotation('Man');
smo272293.setAttribute('id', 'smo272293');
smo272293.setFont('times', 12, 'normal');
smo272293.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272292.addModifier(smo272293);
smo272293.addClass('lyric lyric-0 lyric-hyphen');
smo272312v0ar.push(smo272292);
const smo272294 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo272294.setAttribute('id', 'smo272294');
smo272312v0ar.push(smo272294);
const smo272295 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo272295.setAttribute('id', 'smo272295');
const smo272296 = new VF.Annotation('ding');
smo272296.setAttribute('id', 'smo272296');
smo272296.setFont('times', 12, 'normal');
smo272296.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272295.addModifier(smo272296);
smo272296.addClass('lyric lyric-0 lyric-hyphen');
smo272312v0ar.push(smo272295);
smo272312v0.addTickables(smo272312v0ar)
fmtsmo27231266.joinVoices([smo272312v0]);
const fmtsmo27542866 = new VF.Formatter();
//
// voices and notes for stave 3 66
const smo275428v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo275428v0ar = [];
const smo275400 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo275400.setAttribute('id', 'smo275400');
const smo275401 = new VF.Annotation('bun');
smo275401.setAttribute('id', 'smo275401');
smo275401.setFont('times', 12, 'normal');
smo275401.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275400.addModifier(smo275401);
smo275401.addClass('lyric lyric-0');
smo275428v0ar.push(smo275400);
const smo275402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo275402.setAttribute('id', 'smo275402');
const smo275403 = new VF.Annotation('yi');
smo275403.setAttribute('id', 'smo275403');
smo275403.setFont('times', 12, 'normal');
smo275403.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275402.addModifier(smo275403);
smo275403.addClass('lyric lyric-0 lyric-hyphen');
smo275428v0ar.push(smo275402);
const smo275404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo275404.setAttribute('id', 'smo275404');
const smo275405 = new VF.Annotation('ri');
smo275405.setAttribute('id', 'smo275405');
smo275405.setFont('times', 12, 'normal');
smo275405.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275404.addModifier(smo275405);
smo275405.addClass('lyric lyric-0');
smo275428v0ar.push(smo275404);
const smo275406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo275406.setAttribute('id', 'smo275406');
const smo275407 = new VF.Annotation('bun');
smo275407.setAttribute('id', 'smo275407');
smo275407.setFont('times', 12, 'normal');
smo275407.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275406.addModifier(smo275407);
smo275407.addClass('lyric lyric-0');
smo275428v0ar.push(smo275406);
const smo275408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo275408.setAttribute('id', 'smo275408');
const smo275409 = new VF.Annotation('Man');
smo275409.setAttribute('id', 'smo275409');
smo275409.setFont('times', 12, 'normal');
smo275409.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275408.addModifier(smo275409);
smo275409.addClass('lyric lyric-0 lyric-hyphen');
smo275428v0ar.push(smo275408);
const smo275410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo275410.setAttribute('id', 'smo275410');
smo275428v0ar.push(smo275410);
const smo275411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo275411.setAttribute('id', 'smo275411');
const smo275412 = new VF.Annotation('ding');
smo275412.setAttribute('id', 'smo275412');
smo275412.setFont('times', 12, 'normal');
smo275412.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275411.addModifier(smo275412);
smo275412.addClass('lyric lyric-0 lyric-hyphen');
smo275428v0ar.push(smo275411);
smo275428v0.addTickables(smo275428v0ar)
fmtsmo27542866.joinVoices([smo275428v0]);
const fmtsmo27844766 = new VF.Formatter();
//
// voices and notes for stave 4 66
const smo278447v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278447v0ar = [];
const smo278419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo278419.setAttribute('id', 'smo278419');
const smo278420 = new VF.Annotation('bun');
smo278420.setAttribute('id', 'smo278420');
smo278420.setFont('times', 12, 'normal');
smo278420.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278419.addModifier(smo278420);
smo278420.addClass('lyric lyric-0');
smo278447v0ar.push(smo278419);
const smo278421 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo278421.setAttribute('id', 'smo278421');
const smo278422 = new VF.Annotation('yi');
smo278422.setAttribute('id', 'smo278422');
smo278422.setFont('times', 12, 'normal');
smo278422.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278421.addModifier(smo278422);
smo278422.addClass('lyric lyric-0 lyric-hyphen');
smo278447v0ar.push(smo278421);
const smo278423 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo278423.setAttribute('id', 'smo278423');
const smo278424 = new VF.Annotation('ri');
smo278424.setAttribute('id', 'smo278424');
smo278424.setFont('times', 12, 'normal');
smo278424.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278423.addModifier(smo278424);
smo278424.addClass('lyric lyric-0');
smo278447v0ar.push(smo278423);
const smo278425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo278425.setAttribute('id', 'smo278425');
const smo278426 = new VF.Annotation('bun');
smo278426.setAttribute('id', 'smo278426');
smo278426.setFont('times', 12, 'normal');
smo278426.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278425.addModifier(smo278426);
smo278426.addClass('lyric lyric-0');
smo278447v0ar.push(smo278425);
const smo278427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo278427.setAttribute('id', 'smo278427');
const smo278428 = new VF.Annotation('Man');
smo278428.setAttribute('id', 'smo278428');
smo278428.setFont('times', 12, 'normal');
smo278428.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278427.addModifier(smo278428);
smo278428.addClass('lyric lyric-0 lyric-hyphen');
smo278447v0ar.push(smo278427);
const smo278429 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo278429.setAttribute('id', 'smo278429');
smo278447v0ar.push(smo278429);
const smo278430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo278430.setAttribute('id', 'smo278430');
const smo278431 = new VF.Annotation('ding');
smo278431.setAttribute('id', 'smo278431');
smo278431.setFont('times', 12, 'normal');
smo278431.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278430.addModifier(smo278431);
smo278431.addClass('lyric lyric-0 lyric-hyphen');
smo278447v0ar.push(smo278430);
smo278447v0.addTickables(smo278447v0ar)
fmtsmo27844766.joinVoices([smo278447v0]);
const fmtsmo28155466 = new VF.Formatter();
//
// voices and notes for stave 5 66
const smo281554v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo281554v0ar = [];
const smo281526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo281526.setAttribute('id', 'smo281526');
const smo281527 = new VF.Annotation('bun');
smo281527.setAttribute('id', 'smo281527');
smo281527.setFont('times', 12, 'normal');
smo281527.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281526.addModifier(smo281527);
smo281527.addClass('lyric lyric-0');
smo281554v0ar.push(smo281526);
const smo281528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo281528.setAttribute('id', 'smo281528');
const smo281529 = new VF.Annotation('yi');
smo281529.setAttribute('id', 'smo281529');
smo281529.setFont('times', 12, 'normal');
smo281529.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281528.addModifier(smo281529);
smo281529.addClass('lyric lyric-0 lyric-hyphen');
smo281554v0ar.push(smo281528);
const smo281530 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo281530.setAttribute('id', 'smo281530');
const smo281531 = new VF.Annotation('ri');
smo281531.setAttribute('id', 'smo281531');
smo281531.setFont('times', 12, 'normal');
smo281531.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281530.addModifier(smo281531);
smo281531.addClass('lyric lyric-0');
smo281554v0ar.push(smo281530);
const smo281532 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo281532.setAttribute('id', 'smo281532');
const smo281533 = new VF.Annotation('bun');
smo281533.setAttribute('id', 'smo281533');
smo281533.setFont('times', 12, 'normal');
smo281533.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281532.addModifier(smo281533);
smo281533.addClass('lyric lyric-0');
smo281554v0ar.push(smo281532);
const smo281534 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo281534.setAttribute('id', 'smo281534');
const smo281535 = new VF.Annotation('Man');
smo281535.setAttribute('id', 'smo281535');
smo281535.setFont('times', 12, 'normal');
smo281535.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281534.addModifier(smo281535);
smo281535.addClass('lyric lyric-0 lyric-hyphen');
smo281554v0ar.push(smo281534);
const smo281536 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo281536.setAttribute('id', 'smo281536');
smo281554v0ar.push(smo281536);
const smo281537 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo281537.setAttribute('id', 'smo281537');
const smo281538 = new VF.Annotation('ding');
smo281538.setAttribute('id', 'smo281538');
smo281538.setFont('times', 12, 'normal');
smo281538.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281537.addModifier(smo281538);
smo281538.addClass('lyric lyric-0 lyric-hyphen');
smo281554v0ar.push(smo281537);
smo281554v0.addTickables(smo281554v0ar)
fmtsmo28155466.joinVoices([smo281554v0]);
const fmtsmo28466666 = new VF.Formatter();
//
// voices and notes for stave 6 66
const smo284666v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo284666v0ar = [];
const smo284638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo284638.setAttribute('id', 'smo284638');
const smo284639 = new VF.Annotation('bun');
smo284639.setAttribute('id', 'smo284639');
smo284639.setFont('times', 12, 'normal');
smo284639.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284638.addModifier(smo284639);
smo284639.addClass('lyric lyric-0');
smo284666v0ar.push(smo284638);
const smo284640 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo284640.setAttribute('id', 'smo284640');
const smo284641 = new VF.Annotation('yi');
smo284641.setAttribute('id', 'smo284641');
smo284641.setFont('times', 12, 'normal');
smo284641.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284640.addModifier(smo284641);
smo284641.addClass('lyric lyric-0 lyric-hyphen');
smo284666v0ar.push(smo284640);
const smo284642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo284642.setAttribute('id', 'smo284642');
const smo284643 = new VF.Annotation('ri');
smo284643.setAttribute('id', 'smo284643');
smo284643.setFont('times', 12, 'normal');
smo284643.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284642.addModifier(smo284643);
smo284643.addClass('lyric lyric-0');
smo284666v0ar.push(smo284642);
const smo284644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo284644.setAttribute('id', 'smo284644');
const smo284645 = new VF.Annotation('bun');
smo284645.setAttribute('id', 'smo284645');
smo284645.setFont('times', 12, 'normal');
smo284645.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284644.addModifier(smo284645);
smo284645.addClass('lyric lyric-0');
smo284666v0ar.push(smo284644);
const smo284646 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo284646.setAttribute('id', 'smo284646');
const smo284647 = new VF.Annotation('Man');
smo284647.setAttribute('id', 'smo284647');
smo284647.setFont('times', 12, 'normal');
smo284647.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284646.addModifier(smo284647);
smo284647.addClass('lyric lyric-0 lyric-hyphen');
smo284666v0ar.push(smo284646);
const smo284648 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo284648.setAttribute('id', 'smo284648');
smo284666v0ar.push(smo284648);
const smo284649 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo284649.setAttribute('id', 'smo284649');
const smo284650 = new VF.Annotation('ding');
smo284650.setAttribute('id', 'smo284650');
smo284650.setFont('times', 12, 'normal');
smo284650.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284649.addModifier(smo284650);
smo284650.addClass('lyric lyric-0 lyric-hyphen');
smo284666v0ar.push(smo284649);
smo284666v0.addTickables(smo284666v0ar)
fmtsmo28466666.joinVoices([smo284666v0]);
const fmtsmo28777566 = new VF.Formatter();
//
// voices and notes for stave 7 66
const smo287775v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287775v0ar = [];
const smo287747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo287747.setAttribute('id', 'smo287747');
const smo287748 = new VF.Annotation('bun');
smo287748.setAttribute('id', 'smo287748');
smo287748.setFont('times', 12, 'normal');
smo287748.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287747.addModifier(smo287748);
smo287748.addClass('lyric lyric-0');
smo287775v0ar.push(smo287747);
const smo287749 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo287749.setAttribute('id', 'smo287749');
const smo287750 = new VF.Annotation('yi');
smo287750.setAttribute('id', 'smo287750');
smo287750.setFont('times', 12, 'normal');
smo287750.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287749.addModifier(smo287750);
smo287750.addClass('lyric lyric-0 lyric-hyphen');
smo287775v0ar.push(smo287749);
const smo287751 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo287751.setAttribute('id', 'smo287751');
const smo287752 = new VF.Annotation('ri');
smo287752.setAttribute('id', 'smo287752');
smo287752.setFont('times', 12, 'normal');
smo287752.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287751.addModifier(smo287752);
smo287752.addClass('lyric lyric-0');
smo287775v0ar.push(smo287751);
const smo287753 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo287753.setAttribute('id', 'smo287753');
const smo287754 = new VF.Annotation('bun');
smo287754.setAttribute('id', 'smo287754');
smo287754.setFont('times', 12, 'normal');
smo287754.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287753.addModifier(smo287754);
smo287754.addClass('lyric lyric-0');
smo287775v0ar.push(smo287753);
const smo287755 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo287755.setAttribute('id', 'smo287755');
const smo287756 = new VF.Annotation('Man');
smo287756.setAttribute('id', 'smo287756');
smo287756.setFont('times', 12, 'normal');
smo287756.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287755.addModifier(smo287756);
smo287756.addClass('lyric lyric-0 lyric-hyphen');
smo287775v0ar.push(smo287755);
const smo287757 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo287757.setAttribute('id', 'smo287757');
smo287775v0ar.push(smo287757);
const smo287758 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo287758.setAttribute('id', 'smo287758');
const smo287759 = new VF.Annotation('ding');
smo287759.setAttribute('id', 'smo287759');
smo287759.setFont('times', 12, 'normal');
smo287759.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287758.addModifier(smo287759);
smo287759.addClass('lyric lyric-0 lyric-hyphen');
smo287775v0ar.push(smo287758);
smo287775v0.addTickables(smo287775v0ar)
fmtsmo28777566.joinVoices([smo287775v0]);
const fmtsmo29086166 = new VF.Formatter();
//
// voices and notes for stave 8 66
const smo290861v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290861v0ar = [];
const smo290833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo290833.setAttribute('id', 'smo290833');
const smo290834 = new VF.Annotation('bun');
smo290834.setAttribute('id', 'smo290834');
smo290834.setFont('times', 12, 'normal');
smo290834.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290833.addModifier(smo290834);
smo290834.addClass('lyric lyric-0');
smo290861v0ar.push(smo290833);
const smo290835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo290835.setAttribute('id', 'smo290835');
const smo290836 = new VF.Annotation('yi');
smo290836.setAttribute('id', 'smo290836');
smo290836.setFont('times', 12, 'normal');
smo290836.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290835.addModifier(smo290836);
smo290836.addClass('lyric lyric-0 lyric-hyphen');
smo290861v0ar.push(smo290835);
const smo290837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo290837.setAttribute('id', 'smo290837');
const smo290838 = new VF.Annotation('ri');
smo290838.setAttribute('id', 'smo290838');
smo290838.setFont('times', 12, 'normal');
smo290838.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290837.addModifier(smo290838);
smo290838.addClass('lyric lyric-0');
smo290861v0ar.push(smo290837);
const smo290839 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo290839.setAttribute('id', 'smo290839');
const smo290840 = new VF.Annotation('bun');
smo290840.setAttribute('id', 'smo290840');
smo290840.setFont('times', 12, 'normal');
smo290840.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290839.addModifier(smo290840);
smo290840.addClass('lyric lyric-0');
smo290861v0ar.push(smo290839);
const smo290841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo290841.setAttribute('id', 'smo290841');
const smo290842 = new VF.Annotation('Man');
smo290842.setAttribute('id', 'smo290842');
smo290842.setFont('times', 12, 'normal');
smo290842.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290841.addModifier(smo290842);
smo290842.addClass('lyric lyric-0 lyric-hyphen');
smo290861v0ar.push(smo290841);
const smo290843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo290843.setAttribute('id', 'smo290843');
smo290861v0ar.push(smo290843);
const smo290844 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo290844.setAttribute('id', 'smo290844');
const smo290845 = new VF.Annotation('ding');
smo290845.setAttribute('id', 'smo290845');
smo290845.setFont('times', 12, 'normal');
smo290845.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290844.addModifier(smo290845);
smo290845.addClass('lyric lyric-0 lyric-hyphen');
smo290861v0ar.push(smo290844);
smo290861v0.addTickables(smo290861v0ar)
fmtsmo29086166.joinVoices([smo290861v0]);
const fmtsmo29395066 = new VF.Formatter();
//
// voices and notes for stave 9 66
const smo293950v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo293950v0ar = [];
const smo293922 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo293922.setAttribute('id', 'smo293922');
const smo293923 = new VF.Annotation('bun');
smo293923.setAttribute('id', 'smo293923');
smo293923.setFont('times', 12, 'normal');
smo293923.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293922.addModifier(smo293923);
smo293923.addClass('lyric lyric-0');
smo293950v0ar.push(smo293922);
const smo293924 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo293924.setAttribute('id', 'smo293924');
const smo293925 = new VF.Annotation('yi');
smo293925.setAttribute('id', 'smo293925');
smo293925.setFont('times', 12, 'normal');
smo293925.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293924.addModifier(smo293925);
smo293925.addClass('lyric lyric-0 lyric-hyphen');
smo293950v0ar.push(smo293924);
const smo293926 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo293926.setAttribute('id', 'smo293926');
const smo293927 = new VF.Annotation('ri');
smo293927.setAttribute('id', 'smo293927');
smo293927.setFont('times', 12, 'normal');
smo293927.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293926.addModifier(smo293927);
smo293927.addClass('lyric lyric-0');
smo293950v0ar.push(smo293926);
const smo293928 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo293928.setAttribute('id', 'smo293928');
const smo293929 = new VF.Annotation('bun');
smo293929.setAttribute('id', 'smo293929');
smo293929.setFont('times', 12, 'normal');
smo293929.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293928.addModifier(smo293929);
smo293929.addClass('lyric lyric-0');
smo293950v0ar.push(smo293928);
const smo293930 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo293930.setAttribute('id', 'smo293930');
const smo293931 = new VF.Annotation('Man');
smo293931.setAttribute('id', 'smo293931');
smo293931.setFont('times', 12, 'normal');
smo293931.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293930.addModifier(smo293931);
smo293931.addClass('lyric lyric-0 lyric-hyphen');
smo293950v0ar.push(smo293930);
const smo293932 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo293932.setAttribute('id', 'smo293932');
smo293950v0ar.push(smo293932);
const smo293933 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo293933.setAttribute('id', 'smo293933');
const smo293934 = new VF.Annotation('ding');
smo293934.setAttribute('id', 'smo293934');
smo293934.setFont('times', 12, 'normal');
smo293934.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293933.addModifier(smo293934);
smo293934.addClass('lyric lyric-0 lyric-hyphen');
smo293950v0ar.push(smo293933);
smo293950v0.addTickables(smo293950v0ar)
fmtsmo29395066.joinVoices([smo293950v0]);
const fmtsmo29699066 = new VF.Formatter();
//
// voices and notes for stave 10 66
const smo296990v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo296990v0ar = [];
const smo296962 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo296962.setAttribute('id', 'smo296962');
const smo296963 = new VF.Annotation('bun');
smo296963.setAttribute('id', 'smo296963');
smo296963.setFont('times', 12, 'normal');
smo296963.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296962.addModifier(smo296963);
smo296963.addClass('lyric lyric-0');
smo296990v0ar.push(smo296962);
const smo296964 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo296964.setAttribute('id', 'smo296964');
const smo296965 = new VF.Annotation('yi');
smo296965.setAttribute('id', 'smo296965');
smo296965.setFont('times', 12, 'normal');
smo296965.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296964.addModifier(smo296965);
smo296965.addClass('lyric lyric-0 lyric-hyphen');
smo296990v0ar.push(smo296964);
const smo296966 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo296966.setAttribute('id', 'smo296966');
const smo296967 = new VF.Annotation('ri');
smo296967.setAttribute('id', 'smo296967');
smo296967.setFont('times', 12, 'normal');
smo296967.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296966.addModifier(smo296967);
smo296967.addClass('lyric lyric-0');
smo296990v0ar.push(smo296966);
const smo296968 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo296968.setAttribute('id', 'smo296968');
const smo296969 = new VF.Annotation('bun');
smo296969.setAttribute('id', 'smo296969');
smo296969.setFont('times', 12, 'normal');
smo296969.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296968.addModifier(smo296969);
smo296969.addClass('lyric lyric-0');
smo296990v0ar.push(smo296968);
const smo296970 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo296970.setAttribute('id', 'smo296970');
const smo296971 = new VF.Annotation('Man');
smo296971.setAttribute('id', 'smo296971');
smo296971.setFont('times', 12, 'normal');
smo296971.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296970.addModifier(smo296971);
smo296971.addClass('lyric lyric-0 lyric-hyphen');
smo296990v0ar.push(smo296970);
const smo296972 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo296972.setAttribute('id', 'smo296972');
smo296990v0ar.push(smo296972);
const smo296973 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo296973.setAttribute('id', 'smo296973');
const smo296974 = new VF.Annotation('ding');
smo296974.setAttribute('id', 'smo296974');
smo296974.setFont('times', 12, 'normal');
smo296974.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296973.addModifier(smo296974);
smo296974.addClass('lyric lyric-0 lyric-hyphen');
smo296990v0ar.push(smo296973);
smo296990v0.addTickables(smo296990v0ar)
fmtsmo29699066.joinVoices([smo296990v0]);
const fmtsmo30004466 = new VF.Formatter();
//
// voices and notes for stave 11 66
const smo300044v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300044v0ar = [];
const smo300016 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo300016.setAttribute('id', 'smo300016');
const smo300017 = new VF.Annotation('bun');
smo300017.setAttribute('id', 'smo300017');
smo300017.setFont('times', 12, 'normal');
smo300017.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo300016.addModifier(smo300017);
smo300017.addClass('lyric lyric-0');
smo300044v0ar.push(smo300016);
const smo300018 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo300018.setAttribute('id', 'smo300018');
const smo300019 = new VF.Annotation('yi');
smo300019.setAttribute('id', 'smo300019');
smo300019.setFont('times', 12, 'normal');
smo300019.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo300018.addModifier(smo300019);
smo300019.addClass('lyric lyric-0 lyric-hyphen');
smo300044v0ar.push(smo300018);
const smo300020 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo300020.setAttribute('id', 'smo300020');
const smo300021 = new VF.Annotation('ri');
smo300021.setAttribute('id', 'smo300021');
smo300021.setFont('times', 12, 'normal');
smo300021.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo300020.addModifier(smo300021);
smo300021.addClass('lyric lyric-0');
smo300044v0ar.push(smo300020);
const smo300022 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo300022.setAttribute('id', 'smo300022');
const smo300023 = new VF.Annotation('bun');
smo300023.setAttribute('id', 'smo300023');
smo300023.setFont('times', 12, 'normal');
smo300023.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo300022.addModifier(smo300023);
smo300023.addClass('lyric lyric-0');
smo300044v0ar.push(smo300022);
const smo300024 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo300024.setAttribute('id', 'smo300024');
const smo300025 = new VF.Annotation('Man');
smo300025.setAttribute('id', 'smo300025');
smo300025.setFont('times', 12, 'normal');
smo300025.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo300024.addModifier(smo300025);
smo300025.addClass('lyric lyric-0 lyric-hyphen');
smo300044v0ar.push(smo300024);
const smo300026 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo300026.setAttribute('id', 'smo300026');
smo300044v0ar.push(smo300026);
const smo300027 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo300027.setAttribute('id', 'smo300027');
const smo300028 = new VF.Annotation('ding');
smo300028.setAttribute('id', 'smo300028');
smo300028.setFont('times', 12, 'normal');
smo300028.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo300027.addModifier(smo300028);
smo300028.addClass('lyric lyric-0 lyric-hyphen');
smo300044v0ar.push(smo300027);
smo300044v0.addTickables(smo300044v0ar)
fmtsmo30004466.joinVoices([smo300044v0]);
const fmtsmo30308766 = new VF.Formatter();
//
// voices and notes for stave 12 66
const smo303087v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo303087v0ar = [];
const smo303059 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo303059.setAttribute('id', 'smo303059');
const smo303060 = new VF.Annotation('bun');
smo303060.setAttribute('id', 'smo303060');
smo303060.setFont('times', 12, 'normal');
smo303060.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo303059.addModifier(smo303060);
smo303060.addClass('lyric lyric-0');
smo303087v0ar.push(smo303059);
const smo303061 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo303061.setAttribute('id', 'smo303061');
const smo303062 = new VF.Annotation('yi');
smo303062.setAttribute('id', 'smo303062');
smo303062.setFont('times', 12, 'normal');
smo303062.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo303061.addModifier(smo303062);
smo303062.addClass('lyric lyric-0 lyric-hyphen');
smo303087v0ar.push(smo303061);
const smo303063 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo303063.setAttribute('id', 'smo303063');
const smo303064 = new VF.Annotation('ri');
smo303064.setAttribute('id', 'smo303064');
smo303064.setFont('times', 12, 'normal');
smo303064.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo303063.addModifier(smo303064);
smo303064.addClass('lyric lyric-0');
smo303087v0ar.push(smo303063);
const smo303065 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo303065.setAttribute('id', 'smo303065');
const smo303066 = new VF.Annotation('bun');
smo303066.setAttribute('id', 'smo303066');
smo303066.setFont('times', 12, 'normal');
smo303066.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo303065.addModifier(smo303066);
smo303066.addClass('lyric lyric-0');
smo303087v0ar.push(smo303065);
const smo303067 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo303067.setAttribute('id', 'smo303067');
const smo303068 = new VF.Annotation('Man');
smo303068.setAttribute('id', 'smo303068');
smo303068.setFont('times', 12, 'normal');
smo303068.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo303067.addModifier(smo303068);
smo303068.addClass('lyric lyric-0 lyric-hyphen');
smo303087v0ar.push(smo303067);
const smo303069 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo303069.setAttribute('id', 'smo303069');
smo303087v0ar.push(smo303069);
const smo303070 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo303070.setAttribute('id', 'smo303070');
const smo303071 = new VF.Annotation('ding');
smo303071.setAttribute('id', 'smo303071');
smo303071.setFont('times', 12, 'normal');
smo303071.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo303070.addModifier(smo303071);
smo303071.addClass('lyric lyric-0 lyric-hyphen');
smo303087v0ar.push(smo303070);
smo303087v0.addTickables(smo303087v0ar)
fmtsmo30308766.joinVoices([smo303087v0]);
const fmtsmo30628666 = new VF.Formatter();
//
// voices and notes for stave 13 66
const smo306286v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo306286v0ar = [];
const smo306265 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
smo306265.setAttribute('id', 'smo306265');
const smo3062650acc = new VF.Accidental('#');
smo306265.addModifier(smo3062650acc, 0);
smo306265.addModifier(new VF.Dot(), 0);
smo306265.addModifier(new VF.Dot(), 1);
smo306265.addModifier(new VF.Dot(), 2);
smo306286v0ar.push(smo306265);
const smo306266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo306266.setAttribute('id', 'smo306266');
smo306286v0ar.push(smo306266);
const smo306267 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo306267.setAttribute('id', 'smo306267');
smo306286v0ar.push(smo306267);
const smo306268 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo306268.setAttribute('id', 'smo306268');
const smo3062682acc = new VF.Accidental('b');
smo306268.addModifier(smo3062682acc, 2);
smo306286v0ar.push(smo306268);
const smo306269 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo306269.setAttribute('id', 'smo306269');
smo306286v0ar.push(smo306269);
const smo306270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
smo306270.setAttribute('id', 'smo306270');
smo306286v0ar.push(smo306270);
smo306286v0.addTickables(smo306286v0ar)
fmtsmo30628666.joinVoices([smo306286v0]);
const fmtsmo30949966 = new VF.Formatter();
//
// voices and notes for stave 14 66
const smo309499v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309499v0ar = [];
const smo309478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
smo309478.setAttribute('id', 'smo309478');
const smo3094780acc = new VF.Accidental('#');
smo309478.addModifier(smo3094780acc, 0);
smo309478.addModifier(new VF.Dot(), 0);
smo309478.addModifier(new VF.Dot(), 1);
smo309478.addModifier(new VF.Dot(), 2);
smo309499v0ar.push(smo309478);
const smo309479 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo309479.setAttribute('id', 'smo309479');
smo309499v0ar.push(smo309479);
const smo309480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo309480.setAttribute('id', 'smo309480');
smo309499v0ar.push(smo309480);
const smo309481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo309481.setAttribute('id', 'smo309481');
const smo3094812acc = new VF.Accidental('b');
smo309481.addModifier(smo3094812acc, 2);
smo309499v0ar.push(smo309481);
const smo309482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo309482.setAttribute('id', 'smo309482');
smo309499v0ar.push(smo309482);
const smo309483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
smo309483.setAttribute('id', 'smo309483');
smo309499v0ar.push(smo309483);
smo309499v0.addTickables(smo309499v0ar)
fmtsmo30949966.joinVoices([smo309499v0]);
const fmtsmo31269466 = new VF.Formatter();
//
// voices and notes for stave 15 66
const smo312694v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo312694v0ar = [];
const smo312673 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo312673.setAttribute('id', 'smo312673');
const smo3126730acc = new VF.Accidental('#');
smo312673.addModifier(smo3126730acc, 0);
smo312673.addModifier(new VF.Dot(), 0);
smo312694v0ar.push(smo312673);
const smo312674 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo312674.setAttribute('id', 'smo312674');
smo312694v0ar.push(smo312674);
const smo312675 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo312675.setAttribute('id', 'smo312675');
smo312694v0ar.push(smo312675);
const smo312676 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo312676.setAttribute('id', 'smo312676');
smo312694v0ar.push(smo312676);
const smo312677 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo312677.setAttribute('id', 'smo312677');
smo312694v0ar.push(smo312677);
const smo312678 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo312678.setAttribute('id', 'smo312678');
smo312694v0ar.push(smo312678);
smo312694v0.addTickables(smo312694v0ar)
fmtsmo31269466.joinVoices([smo312694v0]);
const fmtsmo31580966 = new VF.Formatter();
//
// voices and notes for stave 16 66
const smo315809v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo315809v0ar = [];
const smo315790 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo315790.setAttribute('id', 'smo315790');
smo315790.addModifier(new VF.Dot(), 0);
smo315809v0ar.push(smo315790);
const smo315791 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n"]}'))
smo315791.setAttribute('id', 'smo315791');
const smo3157910acc = new VF.Accidental('b');
smo315791.addModifier(smo3157910acc, 0);
smo315809v0ar.push(smo315791);
const smo315792 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n"]}'))
smo315792.setAttribute('id', 'smo315792');
smo315809v0ar.push(smo315792);
const smo315793 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo315793.setAttribute('id', 'smo315793');
smo315809v0ar.push(smo315793);
smo315809v0.addTickables(smo315809v0ar)
fmtsmo31580966.joinVoices([smo315809v0]);
const fmtsmo31900866 = new VF.Formatter();
//
// voices and notes for stave 17 66
const smo319008v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo319008v0ar = [];
const smo318979 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo318979.setAttribute('id', 'smo318979');
smo318979.setStyle({ fillStyle: '#aaaaaa7f' });
const smo3189790acc = new VF.Accidental('n');
smo318979.addModifier(smo3189790acc, 0);
const smo318980 = new VF.Annotation('bun');
smo318980.setAttribute('id', 'smo318980');
smo318980.setFont('times', 12, 'normal');
smo318980.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo318979.addModifier(smo318980);
smo318980.addClass('lyric lyric-0');
smo319008v0ar.push(smo318979);
const smo318981 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo318981.setAttribute('id', 'smo318981');
smo318981.setStyle({ fillStyle: '#aaaaaa7f' });
const smo318982 = new VF.Annotation('yi');
smo318982.setAttribute('id', 'smo318982');
smo318982.setFont('times', 12, 'normal');
smo318982.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo318981.addModifier(smo318982);
smo318982.addClass('lyric lyric-0 lyric-hyphen');
smo319008v0ar.push(smo318981);
const smo318983 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo318983.setAttribute('id', 'smo318983');
smo318983.setStyle({ fillStyle: '#aaaaaa7f' });
const smo318984 = new VF.Annotation('ri');
smo318984.setAttribute('id', 'smo318984');
smo318984.setFont('times', 12, 'normal');
smo318984.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo318983.addModifier(smo318984);
smo318984.addClass('lyric lyric-0');
smo319008v0ar.push(smo318983);
const smo318985 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo318985.setAttribute('id', 'smo318985');
smo318985.setStyle({ fillStyle: '#aaaaaa7f' });
const smo318986 = new VF.Annotation('bun');
smo318986.setAttribute('id', 'smo318986');
smo318986.setFont('times', 12, 'normal');
smo318986.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo318985.addModifier(smo318986);
smo318986.addClass('lyric lyric-0');
smo319008v0ar.push(smo318985);
const smo318987 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo318987.setAttribute('id', 'smo318987');
smo318987.setStyle({ fillStyle: '#aaaaaa7f' });
const smo318988 = new VF.Annotation('Man');
smo318988.setAttribute('id', 'smo318988');
smo318988.setFont('times', 12, 'normal');
smo318988.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo318987.addModifier(smo318988);
smo318988.addClass('lyric lyric-0 lyric-hyphen');
smo319008v0ar.push(smo318987);
const smo318989 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo318989.setAttribute('id', 'smo318989');
smo318989.setStyle({ fillStyle: '#aaaaaa7f' });
smo319008v0ar.push(smo318989);
const smo318990 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo318990.setAttribute('id', 'smo318990');
smo318990.setStyle({ fillStyle: '#aaaaaa7f' });
const smo318991 = new VF.Annotation('ding');
smo318991.setAttribute('id', 'smo318991');
smo318991.setFont('times', 12, 'normal');
smo318991.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo318990.addModifier(smo318991);
smo318991.addClass('lyric lyric-0 lyric-hyphen');
smo319008v0ar.push(smo318990);
smo319008v0.addTickables(smo319008v0ar)
fmtsmo31900866.joinVoices([smo319008v0]);
const smo319008v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo319008v1ar = [];
const smo318992 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo318992.setAttribute('id', 'smo318992');
smo318992.setStyle({ fillStyle: "#115511" });
smo319008v1ar.push(smo318992);
smo319008v1.addTickables(smo319008v1ar)
fmtsmo31900866.joinVoices([smo319008v1]);
// create beam groups and tuplets for format grp smo320731 before formatting
const dirsmo412172 = smo266149.getStemDirection();
smo266149.setStemDirection(dirsmo412172);
smo266151.setStemDirection(dirsmo412172);
const smo412172 = new VF.Beam([smo266149,smo266151]);
const dirsmo412173 = smo266153.getStemDirection();
smo266153.setStemDirection(dirsmo412173);
smo266155.setStemDirection(dirsmo412173);
smo266157.setStemDirection(dirsmo412173);
smo266158.setStemDirection(dirsmo412173);
const smo412173 = new VF.Beam([smo266153,smo266155,smo266157,smo266158]);
const dirsmo412176 = smo269143.getStemDirection();
smo269143.setStemDirection(dirsmo412176);
smo269145.setStemDirection(dirsmo412176);
const smo412176 = new VF.Beam([smo269143,smo269145]);
const dirsmo412177 = smo269147.getStemDirection();
smo269147.setStemDirection(dirsmo412177);
smo269149.setStemDirection(dirsmo412177);
smo269151.setStemDirection(dirsmo412177);
smo269152.setStemDirection(dirsmo412177);
const smo412177 = new VF.Beam([smo269147,smo269149,smo269151,smo269152]);
const dirsmo412180 = smo272286.getStemDirection();
smo272286.setStemDirection(dirsmo412180);
smo272288.setStemDirection(dirsmo412180);
const smo412180 = new VF.Beam([smo272286,smo272288]);
const dirsmo412181 = smo272290.getStemDirection();
smo272290.setStemDirection(dirsmo412181);
smo272292.setStemDirection(dirsmo412181);
smo272294.setStemDirection(dirsmo412181);
smo272295.setStemDirection(dirsmo412181);
const smo412181 = new VF.Beam([smo272290,smo272292,smo272294,smo272295]);
const dirsmo412184 = smo275402.getStemDirection();
smo275402.setStemDirection(dirsmo412184);
smo275404.setStemDirection(dirsmo412184);
const smo412184 = new VF.Beam([smo275402,smo275404]);
const dirsmo412185 = smo275406.getStemDirection();
smo275406.setStemDirection(dirsmo412185);
smo275408.setStemDirection(dirsmo412185);
smo275410.setStemDirection(dirsmo412185);
smo275411.setStemDirection(dirsmo412185);
const smo412185 = new VF.Beam([smo275406,smo275408,smo275410,smo275411]);
const dirsmo412188 = smo278421.getStemDirection();
smo278421.setStemDirection(dirsmo412188);
smo278423.setStemDirection(dirsmo412188);
const smo412188 = new VF.Beam([smo278421,smo278423]);
const dirsmo412189 = smo278425.getStemDirection();
smo278425.setStemDirection(dirsmo412189);
smo278427.setStemDirection(dirsmo412189);
smo278429.setStemDirection(dirsmo412189);
smo278430.setStemDirection(dirsmo412189);
const smo412189 = new VF.Beam([smo278425,smo278427,smo278429,smo278430]);
 
// formatting measures in staff group smo320731
fmtsmo26617566.format([smo266175v0,smo269169v0,smo272312v0,smo275428v0,smo278447v0], 311);
const stavesmo266175 = new VF.Stave(1110, 210, 325);
stavesmo266175.setAttribute('id', 'stavesmo266175');
stavesmo266175.setBegBarType(VF.Barline.type.NONE);
stavesmo266175.setContext(context);
stavesmo266175.draw();
smo266175v0.draw(context, stavesmo266175);
smo412172.setContext(context);
smo412172.draw();
smo412173.setContext(context);
smo412173.draw();
const stavesmo269169 = new VF.Stave(1110, 316, 325);
stavesmo269169.setAttribute('id', 'stavesmo269169');
stavesmo269169.setBegBarType(VF.Barline.type.NONE);
stavesmo269169.setContext(context);
stavesmo269169.draw();
smo269169v0.draw(context, stavesmo269169);
smo412176.setContext(context);
smo412176.draw();
smo412177.setContext(context);
smo412177.draw();
const stavesmo272312 = new VF.Stave(1110, 437, 325);
stavesmo272312.setAttribute('id', 'stavesmo272312');
stavesmo272312.setBegBarType(VF.Barline.type.NONE);
stavesmo272312.setContext(context);
stavesmo272312.draw();
smo272312v0.draw(context, stavesmo272312);
smo412180.setContext(context);
smo412180.draw();
smo412181.setContext(context);
smo412181.draw();
const stavesmo275428 = new VF.Stave(1110, 553, 325);
stavesmo275428.setAttribute('id', 'stavesmo275428');
stavesmo275428.setBegBarType(VF.Barline.type.NONE);
stavesmo275428.setContext(context);
stavesmo275428.draw();
smo275428v0.draw(context, stavesmo275428);
smo412184.setContext(context);
smo412184.draw();
smo412185.setContext(context);
smo412185.draw();
const stavesmo278447 = new VF.Stave(1110, 659, 325);
stavesmo278447.setAttribute('id', 'stavesmo278447');
stavesmo278447.setBegBarType(VF.Barline.type.NONE);
stavesmo278447.setContext(context);
stavesmo278447.draw();
smo278447v0.draw(context, stavesmo278447);
smo412188.setContext(context);
smo412188.draw();
smo412189.setContext(context);
smo412189.draw();
// create beam groups and tuplets for format grp smo320733 before formatting
const dirsmo412192 = smo281528.getStemDirection();
smo281528.setStemDirection(dirsmo412192);
smo281530.setStemDirection(dirsmo412192);
const smo412192 = new VF.Beam([smo281528,smo281530]);
const dirsmo412193 = smo281532.getStemDirection();
smo281532.setStemDirection(dirsmo412193);
smo281534.setStemDirection(dirsmo412193);
smo281536.setStemDirection(dirsmo412193);
smo281537.setStemDirection(dirsmo412193);
const smo412193 = new VF.Beam([smo281532,smo281534,smo281536,smo281537]);
const dirsmo412196 = smo284640.getStemDirection();
smo284640.setStemDirection(dirsmo412196);
smo284642.setStemDirection(dirsmo412196);
const smo412196 = new VF.Beam([smo284640,smo284642]);
const dirsmo412197 = smo284644.getStemDirection();
smo284644.setStemDirection(dirsmo412197);
smo284646.setStemDirection(dirsmo412197);
smo284648.setStemDirection(dirsmo412197);
smo284649.setStemDirection(dirsmo412197);
const smo412197 = new VF.Beam([smo284644,smo284646,smo284648,smo284649]);
const dirsmo412200 = smo287749.getStemDirection();
smo287749.setStemDirection(dirsmo412200);
smo287751.setStemDirection(dirsmo412200);
const smo412200 = new VF.Beam([smo287749,smo287751]);
const dirsmo412201 = smo287753.getStemDirection();
smo287753.setStemDirection(dirsmo412201);
smo287755.setStemDirection(dirsmo412201);
smo287757.setStemDirection(dirsmo412201);
smo287758.setStemDirection(dirsmo412201);
const smo412201 = new VF.Beam([smo287753,smo287755,smo287757,smo287758]);
const dirsmo412204 = smo290835.getStemDirection();
smo290835.setStemDirection(dirsmo412204);
smo290837.setStemDirection(dirsmo412204);
const smo412204 = new VF.Beam([smo290835,smo290837]);
const dirsmo412205 = smo290839.getStemDirection();
smo290839.setStemDirection(dirsmo412205);
smo290841.setStemDirection(dirsmo412205);
smo290843.setStemDirection(dirsmo412205);
smo290844.setStemDirection(dirsmo412205);
const smo412205 = new VF.Beam([smo290839,smo290841,smo290843,smo290844]);
 
// formatting measures in staff group smo320733
fmtsmo28155466.format([smo281554v0,smo284666v0,smo287775v0,smo290861v0], 311);
const stavesmo281554 = new VF.Stave(1110, 780, 325);
stavesmo281554.setAttribute('id', 'stavesmo281554');
stavesmo281554.setBegBarType(VF.Barline.type.NONE);
stavesmo281554.setContext(context);
stavesmo281554.draw();
smo281554v0.draw(context, stavesmo281554);
smo412192.setContext(context);
smo412192.draw();
smo412193.setContext(context);
smo412193.draw();
const stavesmo284666 = new VF.Stave(1110, 896, 325);
stavesmo284666.setAttribute('id', 'stavesmo284666');
stavesmo284666.setBegBarType(VF.Barline.type.NONE);
stavesmo284666.setContext(context);
stavesmo284666.draw();
smo284666v0.draw(context, stavesmo284666);
smo412196.setContext(context);
smo412196.draw();
smo412197.setContext(context);
smo412197.draw();
const stavesmo287775 = new VF.Stave(1110, 1012, 325);
stavesmo287775.setAttribute('id', 'stavesmo287775');
stavesmo287775.setBegBarType(VF.Barline.type.NONE);
stavesmo287775.setContext(context);
stavesmo287775.draw();
smo287775v0.draw(context, stavesmo287775);
smo412200.setContext(context);
smo412200.draw();
smo412201.setContext(context);
smo412201.draw();
const stavesmo290861 = new VF.Stave(1110, 1128, 325);
stavesmo290861.setAttribute('id', 'stavesmo290861');
stavesmo290861.setBegBarType(VF.Barline.type.NONE);
stavesmo290861.setContext(context);
stavesmo290861.draw();
smo290861v0.draw(context, stavesmo290861);
smo412204.setContext(context);
smo412204.draw();
smo412205.setContext(context);
smo412205.draw();
// create beam groups and tuplets for format grp smo320735 before formatting
const dirsmo412208 = smo293924.getStemDirection();
smo293924.setStemDirection(dirsmo412208);
smo293926.setStemDirection(dirsmo412208);
const smo412208 = new VF.Beam([smo293924,smo293926]);
const dirsmo412209 = smo293928.getStemDirection();
smo293928.setStemDirection(dirsmo412209);
smo293930.setStemDirection(dirsmo412209);
smo293932.setStemDirection(dirsmo412209);
smo293933.setStemDirection(dirsmo412209);
const smo412209 = new VF.Beam([smo293928,smo293930,smo293932,smo293933]);
const dirsmo412212 = smo296964.getStemDirection();
smo296964.setStemDirection(dirsmo412212);
smo296966.setStemDirection(dirsmo412212);
const smo412212 = new VF.Beam([smo296964,smo296966]);
const dirsmo412213 = smo296968.getStemDirection();
smo296968.setStemDirection(dirsmo412213);
smo296970.setStemDirection(dirsmo412213);
smo296972.setStemDirection(dirsmo412213);
smo296973.setStemDirection(dirsmo412213);
const smo412213 = new VF.Beam([smo296968,smo296970,smo296972,smo296973]);
const dirsmo412216 = smo300018.getStemDirection();
smo300018.setStemDirection(dirsmo412216);
smo300020.setStemDirection(dirsmo412216);
const smo412216 = new VF.Beam([smo300018,smo300020]);
const dirsmo412217 = smo300022.getStemDirection();
smo300022.setStemDirection(dirsmo412217);
smo300024.setStemDirection(dirsmo412217);
smo300026.setStemDirection(dirsmo412217);
smo300027.setStemDirection(dirsmo412217);
const smo412217 = new VF.Beam([smo300022,smo300024,smo300026,smo300027]);
const dirsmo412220 = smo303061.getStemDirection();
smo303061.setStemDirection(dirsmo412220);
smo303063.setStemDirection(dirsmo412220);
const smo412220 = new VF.Beam([smo303061,smo303063]);
const dirsmo412221 = smo303065.getStemDirection();
smo303065.setStemDirection(dirsmo412221);
smo303067.setStemDirection(dirsmo412221);
smo303069.setStemDirection(dirsmo412221);
smo303070.setStemDirection(dirsmo412221);
const smo412221 = new VF.Beam([smo303065,smo303067,smo303069,smo303070]);
 
// formatting measures in staff group smo320735
fmtsmo29395066.format([smo293950v0,smo296990v0,smo300044v0,smo303087v0], 311);
const stavesmo293950 = new VF.Stave(1110, 1264, 325);
stavesmo293950.setAttribute('id', 'stavesmo293950');
stavesmo293950.setBegBarType(VF.Barline.type.NONE);
stavesmo293950.setContext(context);
stavesmo293950.draw();
smo293950v0.draw(context, stavesmo293950);
smo412208.setContext(context);
smo412208.draw();
smo412209.setContext(context);
smo412209.draw();
const stavesmo296990 = new VF.Stave(1110, 1400, 325);
stavesmo296990.setAttribute('id', 'stavesmo296990');
stavesmo296990.setBegBarType(VF.Barline.type.NONE);
stavesmo296990.setContext(context);
stavesmo296990.draw();
smo296990v0.draw(context, stavesmo296990);
smo412212.setContext(context);
smo412212.draw();
smo412213.setContext(context);
smo412213.draw();
const stavesmo300044 = new VF.Stave(1110, 1536, 325);
stavesmo300044.setAttribute('id', 'stavesmo300044');
stavesmo300044.setBegBarType(VF.Barline.type.NONE);
stavesmo300044.setContext(context);
stavesmo300044.draw();
smo300044v0.draw(context, stavesmo300044);
smo412216.setContext(context);
smo412216.draw();
smo412217.setContext(context);
smo412217.draw();
const stavesmo303087 = new VF.Stave(1110, 1672, 325);
stavesmo303087.setAttribute('id', 'stavesmo303087');
stavesmo303087.setBegBarType(VF.Barline.type.NONE);
stavesmo303087.setContext(context);
stavesmo303087.draw();
smo303087v0.draw(context, stavesmo303087);
smo412220.setContext(context);
smo412220.draw();
smo412221.setContext(context);
smo412221.draw();
// create beam groups and tuplets for format grp smo308054 before formatting
const dirsmo412224 = smo306266.getStemDirection();
smo306266.setStemDirection(dirsmo412224);
smo306267.setStemDirection(dirsmo412224);
smo306268.setStemDirection(dirsmo412224);
smo306269.setStemDirection(dirsmo412224);
const smo412224 = new VF.Beam([smo306266,smo306267,smo306268,smo306269]);
 
// formatting measures in staff group smo308054
fmtsmo30628666.format([smo306286v0], 311);
const stavesmo306286 = new VF.Stave(1110, 1818, 325);
stavesmo306286.setAttribute('id', 'stavesmo306286');
stavesmo306286.setBegBarType(VF.Barline.type.NONE);
stavesmo306286.setContext(context);
stavesmo306286.draw();
smo306286v0.draw(context, stavesmo306286);
smo412224.setContext(context);
smo412224.draw();
// create beam groups and tuplets for format grp smo320729 before formatting
const dirsmo412227 = smo309479.getStemDirection();
smo309479.setStemDirection(dirsmo412227);
smo309480.setStemDirection(dirsmo412227);
smo309481.setStemDirection(dirsmo412227);
smo309482.setStemDirection(dirsmo412227);
const smo412227 = new VF.Beam([smo309479,smo309480,smo309481,smo309482]);
const dirsmo412230 = smo312674.getStemDirection();
smo312674.setStemDirection(dirsmo412230);
smo312675.setStemDirection(dirsmo412230);
smo312676.setStemDirection(dirsmo412230);
smo312677.setStemDirection(dirsmo412230);
const smo412230 = new VF.Beam([smo312674,smo312675,smo312676,smo312677]);
 
// formatting measures in staff group smo320729
fmtsmo30949966.format([smo309499v0,smo312694v0], 311);
const stavesmo309499 = new VF.Stave(1110, 1924, 325);
stavesmo309499.setAttribute('id', 'stavesmo309499');
stavesmo309499.setBegBarType(VF.Barline.type.NONE);
stavesmo309499.setContext(context);
stavesmo309499.draw();
smo309499v0.draw(context, stavesmo309499);
smo412227.setContext(context);
smo412227.draw();
const stavesmo312694 = new VF.Stave(1110, 2010, 325);
stavesmo312694.setAttribute('id', 'stavesmo312694');
stavesmo312694.setBegBarType(VF.Barline.type.NONE);
stavesmo312694.setContext(context);
stavesmo312694.draw();
smo312694v0.draw(context, stavesmo312694);
smo412230.setContext(context);
smo412230.draw();
// create beam groups and tuplets for format grp smo317567 before formatting
 
// formatting measures in staff group smo317567
fmtsmo31580966.format([smo315809v0], 311);
const stavesmo315809 = new VF.Stave(1110, 2081, 325);
stavesmo315809.setAttribute('id', 'stavesmo315809');
stavesmo315809.setBegBarType(VF.Barline.type.NONE);
stavesmo315809.setContext(context);
stavesmo315809.draw();
smo315809v0.draw(context, stavesmo315809);
// create beam groups and tuplets for format grp smo320723 before formatting
const dirsmo412235 = smo318981.getStemDirection();
smo318981.setStemDirection(dirsmo412235);
smo318983.setStemDirection(dirsmo412235);
const smo412235 = new VF.Beam([smo318981,smo318983]);
const dirsmo412236 = smo318985.getStemDirection();
smo318985.setStemDirection(dirsmo412236);
smo318987.setStemDirection(dirsmo412236);
smo318989.setStemDirection(dirsmo412236);
smo318990.setStemDirection(dirsmo412236);
const smo412236 = new VF.Beam([smo318985,smo318987,smo318989,smo318990]);
 
// formatting measures in staff group smo320723
fmtsmo31900866.format([smo319008v0,smo319008v1], 311);
const stavesmo319008 = new VF.Stave(1110, 2152, 325);
stavesmo319008.setAttribute('id', 'stavesmo319008');
stavesmo319008.setBegBarType(VF.Barline.type.NONE);
stavesmo319008.setContext(context);
stavesmo319008.draw();
smo319008v0.draw(context, stavesmo319008);
smo319008v1.draw(context, stavesmo319008);
smo412235.setContext(context);
smo412235.draw();
smo412236.setContext(context);
smo412236.draw();
const fmtsmo26619767 = new VF.Formatter();
//
// voices and notes for stave 0 67
const smo266197v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266197v0ar = [];
const smo266176 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo266176.setAttribute('id', 'smo266176');
smo266197v0ar.push(smo266176);
const smo266177 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo266177.setAttribute('id', 'smo266177');
const smo266178 = new VF.Annotation('a');
smo266178.setAttribute('id', 'smo266178');
smo266178.setFont('times', 12, 'normal');
smo266178.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266177.addModifier(smo266178);
smo266178.addClass('lyric lyric-0');
smo266197v0ar.push(smo266177);
const smo266179 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo266179.setAttribute('id', 'smo266179');
smo266197v0ar.push(smo266179);
const smo266180 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo266180.setAttribute('id', 'smo266180');
smo266197v0ar.push(smo266180);
const smo266181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo266181.setAttribute('id', 'smo266181');
smo266197v0ar.push(smo266181);
smo266197v0.addTickables(smo266197v0ar)
fmtsmo26619767.joinVoices([smo266197v0]);
const fmtsmo26919067 = new VF.Formatter();
//
// voices and notes for stave 1 67
const smo269190v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269190v0ar = [];
const smo269170 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo269170.setAttribute('id', 'smo269170');
smo269190v0ar.push(smo269170);
const smo269171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo269171.setAttribute('id', 'smo269171');
const smo269172 = new VF.Annotation('a');
smo269172.setAttribute('id', 'smo269172');
smo269172.setFont('times', 12, 'normal');
smo269172.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269171.addModifier(smo269172);
smo269172.addClass('lyric lyric-0');
smo269190v0ar.push(smo269171);
const smo269173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo269173.setAttribute('id', 'smo269173');
smo269190v0ar.push(smo269173);
const smo269174 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo269174.setAttribute('id', 'smo269174');
smo269190v0ar.push(smo269174);
smo269190v0.addTickables(smo269190v0ar)
fmtsmo26919067.joinVoices([smo269190v0]);
const fmtsmo27233467 = new VF.Formatter();
//
// voices and notes for stave 2 67
const smo272334v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272334v0ar = [];
const smo272313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo272313.setAttribute('id', 'smo272313');
smo272334v0ar.push(smo272313);
const smo272314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo272314.setAttribute('id', 'smo272314');
const smo272315 = new VF.Annotation('a');
smo272315.setAttribute('id', 'smo272315');
smo272315.setFont('times', 12, 'normal');
smo272315.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272314.addModifier(smo272315);
smo272315.addClass('lyric lyric-0');
smo272334v0ar.push(smo272314);
const smo272316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo272316.setAttribute('id', 'smo272316');
smo272334v0ar.push(smo272316);
const smo272317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo272317.setAttribute('id', 'smo272317');
smo272334v0ar.push(smo272317);
const smo272318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo272318.setAttribute('id', 'smo272318');
smo272334v0ar.push(smo272318);
smo272334v0.addTickables(smo272334v0ar)
fmtsmo27233467.joinVoices([smo272334v0]);
const fmtsmo27545067 = new VF.Formatter();
//
// voices and notes for stave 3 67
const smo275450v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo275450v0ar = [];
const smo275429 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo275429.setAttribute('id', 'smo275429');
smo275450v0ar.push(smo275429);
const smo275430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo275430.setAttribute('id', 'smo275430');
const smo275431 = new VF.Annotation('a');
smo275431.setAttribute('id', 'smo275431');
smo275431.setFont('times', 12, 'normal');
smo275431.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275430.addModifier(smo275431);
smo275431.addClass('lyric lyric-0');
smo275450v0ar.push(smo275430);
const smo275432 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo275432.setAttribute('id', 'smo275432');
smo275450v0ar.push(smo275432);
const smo275433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo275433.setAttribute('id', 'smo275433');
smo275450v0ar.push(smo275433);
const smo275434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo275434.setAttribute('id', 'smo275434');
smo275450v0ar.push(smo275434);
smo275450v0.addTickables(smo275450v0ar)
fmtsmo27545067.joinVoices([smo275450v0]);
const fmtsmo27846967 = new VF.Formatter();
//
// voices and notes for stave 4 67
const smo278469v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278469v0ar = [];
const smo278448 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo278448.setAttribute('id', 'smo278448');
smo278469v0ar.push(smo278448);
const smo278449 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo278449.setAttribute('id', 'smo278449');
const smo278450 = new VF.Annotation('a');
smo278450.setAttribute('id', 'smo278450');
smo278450.setFont('times', 12, 'normal');
smo278450.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278449.addModifier(smo278450);
smo278450.addClass('lyric lyric-0');
smo278469v0ar.push(smo278449);
const smo278451 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo278451.setAttribute('id', 'smo278451');
smo278469v0ar.push(smo278451);
const smo278452 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo278452.setAttribute('id', 'smo278452');
smo278469v0ar.push(smo278452);
const smo278453 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo278453.setAttribute('id', 'smo278453');
smo278469v0ar.push(smo278453);
smo278469v0.addTickables(smo278469v0ar)
fmtsmo27846967.joinVoices([smo278469v0]);
const fmtsmo28157667 = new VF.Formatter();
//
// voices and notes for stave 5 67
const smo281576v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo281576v0ar = [];
const smo281555 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo281555.setAttribute('id', 'smo281555');
smo281576v0ar.push(smo281555);
const smo281556 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo281556.setAttribute('id', 'smo281556');
const smo281557 = new VF.Annotation('a');
smo281557.setAttribute('id', 'smo281557');
smo281557.setFont('times', 12, 'normal');
smo281557.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281556.addModifier(smo281557);
smo281557.addClass('lyric lyric-0');
smo281576v0ar.push(smo281556);
const smo281558 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo281558.setAttribute('id', 'smo281558');
smo281576v0ar.push(smo281558);
const smo281559 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo281559.setAttribute('id', 'smo281559');
smo281576v0ar.push(smo281559);
const smo281560 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo281560.setAttribute('id', 'smo281560');
smo281576v0ar.push(smo281560);
smo281576v0.addTickables(smo281576v0ar)
fmtsmo28157667.joinVoices([smo281576v0]);
const fmtsmo28468867 = new VF.Formatter();
//
// voices and notes for stave 6 67
const smo284688v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo284688v0ar = [];
const smo284667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo284667.setAttribute('id', 'smo284667');
smo284688v0ar.push(smo284667);
const smo284668 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo284668.setAttribute('id', 'smo284668');
const smo284669 = new VF.Annotation('a');
smo284669.setAttribute('id', 'smo284669');
smo284669.setFont('times', 12, 'normal');
smo284669.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284668.addModifier(smo284669);
smo284669.addClass('lyric lyric-0');
smo284688v0ar.push(smo284668);
const smo284670 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo284670.setAttribute('id', 'smo284670');
smo284688v0ar.push(smo284670);
const smo284671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo284671.setAttribute('id', 'smo284671');
smo284688v0ar.push(smo284671);
const smo284672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo284672.setAttribute('id', 'smo284672');
smo284688v0ar.push(smo284672);
smo284688v0.addTickables(smo284688v0ar)
fmtsmo28468867.joinVoices([smo284688v0]);
const fmtsmo28779767 = new VF.Formatter();
//
// voices and notes for stave 7 67
const smo287797v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287797v0ar = [];
const smo287776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo287776.setAttribute('id', 'smo287776');
smo287797v0ar.push(smo287776);
const smo287777 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo287777.setAttribute('id', 'smo287777');
const smo287778 = new VF.Annotation('a');
smo287778.setAttribute('id', 'smo287778');
smo287778.setFont('times', 12, 'normal');
smo287778.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287777.addModifier(smo287778);
smo287778.addClass('lyric lyric-0');
smo287797v0ar.push(smo287777);
const smo287779 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo287779.setAttribute('id', 'smo287779');
smo287797v0ar.push(smo287779);
const smo287780 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo287780.setAttribute('id', 'smo287780');
smo287797v0ar.push(smo287780);
const smo287781 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo287781.setAttribute('id', 'smo287781');
smo287797v0ar.push(smo287781);
smo287797v0.addTickables(smo287797v0ar)
fmtsmo28779767.joinVoices([smo287797v0]);
const fmtsmo29088367 = new VF.Formatter();
//
// voices and notes for stave 8 67
const smo290883v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290883v0ar = [];
const smo290862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo290862.setAttribute('id', 'smo290862');
smo290883v0ar.push(smo290862);
const smo290863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo290863.setAttribute('id', 'smo290863');
const smo290864 = new VF.Annotation('a');
smo290864.setAttribute('id', 'smo290864');
smo290864.setFont('times', 12, 'normal');
smo290864.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290863.addModifier(smo290864);
smo290864.addClass('lyric lyric-0');
smo290883v0ar.push(smo290863);
const smo290865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo290865.setAttribute('id', 'smo290865');
smo290883v0ar.push(smo290865);
const smo290866 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo290866.setAttribute('id', 'smo290866');
smo290883v0ar.push(smo290866);
const smo290867 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo290867.setAttribute('id', 'smo290867');
smo290883v0ar.push(smo290867);
smo290883v0.addTickables(smo290883v0ar)
fmtsmo29088367.joinVoices([smo290883v0]);
const fmtsmo29397267 = new VF.Formatter();
//
// voices and notes for stave 9 67
const smo293972v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo293972v0ar = [];
const smo293951 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo293951.setAttribute('id', 'smo293951');
smo293972v0ar.push(smo293951);
const smo293952 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo293952.setAttribute('id', 'smo293952');
const smo293953 = new VF.Annotation('a');
smo293953.setAttribute('id', 'smo293953');
smo293953.setFont('times', 12, 'normal');
smo293953.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo293952.addModifier(smo293953);
smo293953.addClass('lyric lyric-0');
smo293972v0ar.push(smo293952);
const smo293954 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo293954.setAttribute('id', 'smo293954');
smo293972v0ar.push(smo293954);
const smo293955 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo293955.setAttribute('id', 'smo293955');
smo293972v0ar.push(smo293955);
const smo293956 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo293956.setAttribute('id', 'smo293956');
smo293972v0ar.push(smo293956);
smo293972v0.addTickables(smo293972v0ar)
fmtsmo29397267.joinVoices([smo293972v0]);
const fmtsmo29701267 = new VF.Formatter();
//
// voices and notes for stave 10 67
const smo297012v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo297012v0ar = [];
const smo296991 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo296991.setAttribute('id', 'smo296991');
smo297012v0ar.push(smo296991);
const smo296992 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo296992.setAttribute('id', 'smo296992');
const smo296993 = new VF.Annotation('a');
smo296993.setAttribute('id', 'smo296993');
smo296993.setFont('times', 12, 'normal');
smo296993.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo296992.addModifier(smo296993);
smo296993.addClass('lyric lyric-0');
smo297012v0ar.push(smo296992);
const smo296994 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo296994.setAttribute('id', 'smo296994');
smo297012v0ar.push(smo296994);
const smo296995 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo296995.setAttribute('id', 'smo296995');
smo297012v0ar.push(smo296995);
const smo296996 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo296996.setAttribute('id', 'smo296996');
smo297012v0ar.push(smo296996);
smo297012v0.addTickables(smo297012v0ar)
fmtsmo29701267.joinVoices([smo297012v0]);
const fmtsmo30006667 = new VF.Formatter();
//
// voices and notes for stave 11 67
const smo300066v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300066v0ar = [];
const smo300045 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo300045.setAttribute('id', 'smo300045');
smo300066v0ar.push(smo300045);
const smo300046 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo300046.setAttribute('id', 'smo300046');
const smo300047 = new VF.Annotation('a');
smo300047.setAttribute('id', 'smo300047');
smo300047.setFont('times', 12, 'normal');
smo300047.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo300046.addModifier(smo300047);
smo300047.addClass('lyric lyric-0');
smo300066v0ar.push(smo300046);
const smo300048 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo300048.setAttribute('id', 'smo300048');
smo300066v0ar.push(smo300048);
const smo300049 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo300049.setAttribute('id', 'smo300049');
smo300066v0ar.push(smo300049);
const smo300050 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo300050.setAttribute('id', 'smo300050');
smo300066v0ar.push(smo300050);
smo300066v0.addTickables(smo300066v0ar)
fmtsmo30006667.joinVoices([smo300066v0]);
const fmtsmo30310967 = new VF.Formatter();
//
// voices and notes for stave 12 67
const smo303109v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo303109v0ar = [];
const smo303088 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo303088.setAttribute('id', 'smo303088');
smo303109v0ar.push(smo303088);
const smo303089 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo303089.setAttribute('id', 'smo303089');
const smo303090 = new VF.Annotation('a');
smo303090.setAttribute('id', 'smo303090');
smo303090.setFont('times', 12, 'normal');
smo303090.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo303089.addModifier(smo303090);
smo303090.addClass('lyric lyric-0');
smo303109v0ar.push(smo303089);
const smo303091 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo303091.setAttribute('id', 'smo303091');
smo303109v0ar.push(smo303091);
const smo303092 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo303092.setAttribute('id', 'smo303092');
smo303109v0ar.push(smo303092);
const smo303093 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo303093.setAttribute('id', 'smo303093');
smo303109v0ar.push(smo303093);
smo303109v0.addTickables(smo303109v0ar)
fmtsmo30310967.joinVoices([smo303109v0]);
const fmtsmo30630867 = new VF.Formatter();
//
// voices and notes for stave 13 67
const smo306308v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo306308v0ar = [];
const smo306287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
smo306287.setAttribute('id', 'smo306287');
smo306287.addModifier(new VF.Dot(), 0);
smo306287.addModifier(new VF.Dot(), 1);
smo306287.addModifier(new VF.Dot(), 2);
smo306308v0ar.push(smo306287);
const smo306288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","dn/5/n"]}'))
smo306288.setAttribute('id', 'smo306288');
smo306308v0ar.push(smo306288);
const smo306289 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","dn/5/n"]}'))
smo306289.setAttribute('id', 'smo306289');
smo306308v0ar.push(smo306289);
const smo306290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo306290.setAttribute('id', 'smo306290');
smo306308v0ar.push(smo306290);
const smo306291 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo306291.setAttribute('id', 'smo306291');
smo306308v0ar.push(smo306291);
const smo306292 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo306292.setAttribute('id', 'smo306292');
smo306308v0ar.push(smo306292);
smo306308v0.addTickables(smo306308v0ar)
fmtsmo30630867.joinVoices([smo306308v0]);
const fmtsmo30952167 = new VF.Formatter();
//
// voices and notes for stave 14 67
const smo309521v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309521v0ar = [];
const smo309500 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
smo309500.setAttribute('id', 'smo309500');
smo309500.addModifier(new VF.Dot(), 0);
smo309500.addModifier(new VF.Dot(), 1);
smo309500.addModifier(new VF.Dot(), 2);
smo309521v0ar.push(smo309500);
const smo309501 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","dn/5/n"]}'))
smo309501.setAttribute('id', 'smo309501');
smo309521v0ar.push(smo309501);
const smo309502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","dn/5/n"]}'))
smo309502.setAttribute('id', 'smo309502');
smo309521v0ar.push(smo309502);
const smo309503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo309503.setAttribute('id', 'smo309503');
smo309521v0ar.push(smo309503);
const smo309504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo309504.setAttribute('id', 'smo309504');
smo309521v0ar.push(smo309504);
const smo309505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo309505.setAttribute('id', 'smo309505');
smo309521v0ar.push(smo309505);
smo309521v0.addTickables(smo309521v0ar)
fmtsmo30952167.joinVoices([smo309521v0]);
const fmtsmo31271667 = new VF.Formatter();
//
// voices and notes for stave 15 67
const smo312716v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo312716v0ar = [];
const smo312695 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo312695.setAttribute('id', 'smo312695');
smo312695.addModifier(new VF.Dot(), 0);
smo312716v0ar.push(smo312695);
const smo312696 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo312696.setAttribute('id', 'smo312696');
smo312716v0ar.push(smo312696);
const smo312697 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo312697.setAttribute('id', 'smo312697');
smo312716v0ar.push(smo312697);
const smo312698 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo312698.setAttribute('id', 'smo312698');
smo312716v0ar.push(smo312698);
const smo312699 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo312699.setAttribute('id', 'smo312699');
smo312716v0ar.push(smo312699);
const smo312700 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo312700.setAttribute('id', 'smo312700');
smo312716v0ar.push(smo312700);
smo312716v0.addTickables(smo312716v0ar)
fmtsmo31271667.joinVoices([smo312716v0]);
const fmtsmo31582967 = new VF.Formatter();
//
// voices and notes for stave 16 67
const smo315829v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo315829v0ar = [];
const smo315810 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo315810.setAttribute('id', 'smo315810');
smo315829v0ar.push(smo315810);
const smo315811 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo315811.setAttribute('id', 'smo315811');
smo315829v0ar.push(smo315811);
const smo315812 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo315812.setAttribute('id', 'smo315812');
smo315829v0ar.push(smo315812);
const smo315813 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo315813.setAttribute('id', 'smo315813');
smo315829v0ar.push(smo315813);
smo315829v0.addTickables(smo315829v0ar)
fmtsmo31582967.joinVoices([smo315829v0]);
const fmtsmo31902867 = new VF.Formatter();
//
// voices and notes for stave 17 67
const smo319028v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo319028v0ar = [];
const smo319009 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo319009.setAttribute('id', 'smo319009');
smo319028v0ar.push(smo319009);
const smo319010 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo319010.setAttribute('id', 'smo319010');
smo319010.setStyle({ fillStyle: "#ffffff00" });
smo319028v0ar.push(smo319010);
smo319028v0.addTickables(smo319028v0ar)
fmtsmo31902867.joinVoices([smo319028v0]);
const smo319028v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo319028v1ar = [];
const smo319011 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo319011.setAttribute('id', 'smo319011');
smo319011.setStyle({ fillStyle: '#aaaaaa7f' });
smo319028v1ar.push(smo319011);
const smo319012 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo319012.setAttribute('id', 'smo319012');
smo319012.setStyle({ fillStyle: "#115511" });
smo319028v1ar.push(smo319012);
smo319028v1.addTickables(smo319028v1ar)
fmtsmo31902867.joinVoices([smo319028v1]);
// create beam groups and tuplets for format grp smo320731 before formatting
const dirsmo412239 = smo266176.getStemDirection();
smo266176.setStemDirection(dirsmo412239);
smo266177.setStemDirection(dirsmo412239);
const smo412239 = new VF.Beam([smo266176,smo266177]);
const dirsmo412242 = smo269170.getStemDirection();
smo269170.setStemDirection(dirsmo412242);
smo269171.setStemDirection(dirsmo412242);
const smo412242 = new VF.Beam([smo269170,smo269171]);
const dirsmo412245 = smo272313.getStemDirection();
smo272313.setStemDirection(dirsmo412245);
smo272314.setStemDirection(dirsmo412245);
const smo412245 = new VF.Beam([smo272313,smo272314]);
const dirsmo412248 = smo275429.getStemDirection();
smo275429.setStemDirection(dirsmo412248);
smo275430.setStemDirection(dirsmo412248);
const smo412248 = new VF.Beam([smo275429,smo275430]);
const dirsmo412251 = smo278448.getStemDirection();
smo278448.setStemDirection(dirsmo412251);
smo278449.setStemDirection(dirsmo412251);
const smo412251 = new VF.Beam([smo278448,smo278449]);
 
// formatting measures in staff group smo320731
fmtsmo26619767.format([smo266197v0,smo269190v0,smo272334v0,smo275450v0,smo278469v0], 288);
const stavesmo266197 = new VF.Stave(1435, 210, 302);
stavesmo266197.setAttribute('id', 'stavesmo266197');
stavesmo266197.setBegBarType(VF.Barline.type.NONE);
stavesmo266197.setContext(context);
stavesmo266197.draw();
smo266197v0.draw(context, stavesmo266197);
smo412239.setContext(context);
smo412239.draw();
const stavesmo269190 = new VF.Stave(1435, 316, 302);
stavesmo269190.setAttribute('id', 'stavesmo269190');
stavesmo269190.setBegBarType(VF.Barline.type.NONE);
stavesmo269190.setContext(context);
stavesmo269190.draw();
smo269190v0.draw(context, stavesmo269190);
smo412242.setContext(context);
smo412242.draw();
const stavesmo272334 = new VF.Stave(1435, 437, 302);
stavesmo272334.setAttribute('id', 'stavesmo272334');
stavesmo272334.setBegBarType(VF.Barline.type.NONE);
stavesmo272334.setContext(context);
stavesmo272334.draw();
smo272334v0.draw(context, stavesmo272334);
smo412245.setContext(context);
smo412245.draw();
const stavesmo275450 = new VF.Stave(1435, 553, 302);
stavesmo275450.setAttribute('id', 'stavesmo275450');
stavesmo275450.setBegBarType(VF.Barline.type.NONE);
stavesmo275450.setContext(context);
stavesmo275450.draw();
smo275450v0.draw(context, stavesmo275450);
smo412248.setContext(context);
smo412248.draw();
const stavesmo278469 = new VF.Stave(1435, 659, 302);
stavesmo278469.setAttribute('id', 'stavesmo278469');
stavesmo278469.setBegBarType(VF.Barline.type.NONE);
stavesmo278469.setContext(context);
stavesmo278469.draw();
smo278469v0.draw(context, stavesmo278469);
smo412251.setContext(context);
smo412251.draw();
// create beam groups and tuplets for format grp smo320733 before formatting
const dirsmo412254 = smo281555.getStemDirection();
smo281555.setStemDirection(dirsmo412254);
smo281556.setStemDirection(dirsmo412254);
const smo412254 = new VF.Beam([smo281555,smo281556]);
const dirsmo412257 = smo284667.getStemDirection();
smo284667.setStemDirection(dirsmo412257);
smo284668.setStemDirection(dirsmo412257);
const smo412257 = new VF.Beam([smo284667,smo284668]);
const dirsmo412260 = smo287776.getStemDirection();
smo287776.setStemDirection(dirsmo412260);
smo287777.setStemDirection(dirsmo412260);
const smo412260 = new VF.Beam([smo287776,smo287777]);
const dirsmo412263 = smo290862.getStemDirection();
smo290862.setStemDirection(dirsmo412263);
smo290863.setStemDirection(dirsmo412263);
const smo412263 = new VF.Beam([smo290862,smo290863]);
 
// formatting measures in staff group smo320733
fmtsmo28157667.format([smo281576v0,smo284688v0,smo287797v0,smo290883v0], 288);
const stavesmo281576 = new VF.Stave(1435, 780, 302);
stavesmo281576.setAttribute('id', 'stavesmo281576');
stavesmo281576.setBegBarType(VF.Barline.type.NONE);
stavesmo281576.setContext(context);
stavesmo281576.draw();
smo281576v0.draw(context, stavesmo281576);
smo412254.setContext(context);
smo412254.draw();
const stavesmo284688 = new VF.Stave(1435, 896, 302);
stavesmo284688.setAttribute('id', 'stavesmo284688');
stavesmo284688.setBegBarType(VF.Barline.type.NONE);
stavesmo284688.setContext(context);
stavesmo284688.draw();
smo284688v0.draw(context, stavesmo284688);
smo412257.setContext(context);
smo412257.draw();
const stavesmo287797 = new VF.Stave(1435, 1012, 302);
stavesmo287797.setAttribute('id', 'stavesmo287797');
stavesmo287797.setBegBarType(VF.Barline.type.NONE);
stavesmo287797.setContext(context);
stavesmo287797.draw();
smo287797v0.draw(context, stavesmo287797);
smo412260.setContext(context);
smo412260.draw();
const stavesmo290883 = new VF.Stave(1435, 1128, 302);
stavesmo290883.setAttribute('id', 'stavesmo290883');
stavesmo290883.setBegBarType(VF.Barline.type.NONE);
stavesmo290883.setContext(context);
stavesmo290883.draw();
smo290883v0.draw(context, stavesmo290883);
smo412263.setContext(context);
smo412263.draw();
// create beam groups and tuplets for format grp smo320735 before formatting
const dirsmo412266 = smo293951.getStemDirection();
smo293951.setStemDirection(dirsmo412266);
smo293952.setStemDirection(dirsmo412266);
const smo412266 = new VF.Beam([smo293951,smo293952]);
const dirsmo412269 = smo296991.getStemDirection();
smo296991.setStemDirection(dirsmo412269);
smo296992.setStemDirection(dirsmo412269);
const smo412269 = new VF.Beam([smo296991,smo296992]);
const dirsmo412272 = smo300045.getStemDirection();
smo300045.setStemDirection(dirsmo412272);
smo300046.setStemDirection(dirsmo412272);
const smo412272 = new VF.Beam([smo300045,smo300046]);
const dirsmo412275 = smo303088.getStemDirection();
smo303088.setStemDirection(dirsmo412275);
smo303089.setStemDirection(dirsmo412275);
const smo412275 = new VF.Beam([smo303088,smo303089]);
 
// formatting measures in staff group smo320735
fmtsmo29397267.format([smo293972v0,smo297012v0,smo300066v0,smo303109v0], 288);
const stavesmo293972 = new VF.Stave(1435, 1264, 302);
stavesmo293972.setAttribute('id', 'stavesmo293972');
stavesmo293972.setBegBarType(VF.Barline.type.NONE);
stavesmo293972.setContext(context);
stavesmo293972.draw();
smo293972v0.draw(context, stavesmo293972);
smo412266.setContext(context);
smo412266.draw();
const stavesmo297012 = new VF.Stave(1435, 1400, 302);
stavesmo297012.setAttribute('id', 'stavesmo297012');
stavesmo297012.setBegBarType(VF.Barline.type.NONE);
stavesmo297012.setContext(context);
stavesmo297012.draw();
smo297012v0.draw(context, stavesmo297012);
smo412269.setContext(context);
smo412269.draw();
const stavesmo300066 = new VF.Stave(1435, 1536, 302);
stavesmo300066.setAttribute('id', 'stavesmo300066');
stavesmo300066.setBegBarType(VF.Barline.type.NONE);
stavesmo300066.setContext(context);
stavesmo300066.draw();
smo300066v0.draw(context, stavesmo300066);
smo412272.setContext(context);
smo412272.draw();
const stavesmo303109 = new VF.Stave(1435, 1672, 302);
stavesmo303109.setAttribute('id', 'stavesmo303109');
stavesmo303109.setBegBarType(VF.Barline.type.NONE);
stavesmo303109.setContext(context);
stavesmo303109.draw();
smo303109v0.draw(context, stavesmo303109);
smo412275.setContext(context);
smo412275.draw();
// create beam groups and tuplets for format grp smo308054 before formatting
const dirsmo412278 = smo306288.getStemDirection();
smo306288.setStemDirection(dirsmo412278);
smo306289.setStemDirection(dirsmo412278);
smo306290.setStemDirection(dirsmo412278);
smo306291.setStemDirection(dirsmo412278);
const smo412278 = new VF.Beam([smo306288,smo306289,smo306290,smo306291]);
 
// formatting measures in staff group smo308054
fmtsmo30630867.format([smo306308v0], 288);
const stavesmo306308 = new VF.Stave(1435, 1818, 302);
stavesmo306308.setAttribute('id', 'stavesmo306308');
stavesmo306308.setBegBarType(VF.Barline.type.NONE);
stavesmo306308.setContext(context);
stavesmo306308.draw();
smo306308v0.draw(context, stavesmo306308);
smo412278.setContext(context);
smo412278.draw();
// create beam groups and tuplets for format grp smo320729 before formatting
const dirsmo412281 = smo309501.getStemDirection();
smo309501.setStemDirection(dirsmo412281);
smo309502.setStemDirection(dirsmo412281);
smo309503.setStemDirection(dirsmo412281);
smo309504.setStemDirection(dirsmo412281);
const smo412281 = new VF.Beam([smo309501,smo309502,smo309503,smo309504]);
const dirsmo412284 = smo312696.getStemDirection();
smo312696.setStemDirection(dirsmo412284);
smo312697.setStemDirection(dirsmo412284);
smo312698.setStemDirection(dirsmo412284);
smo312699.setStemDirection(dirsmo412284);
const smo412284 = new VF.Beam([smo312696,smo312697,smo312698,smo312699]);
 
// formatting measures in staff group smo320729
fmtsmo30952167.format([smo309521v0,smo312716v0], 288);
const stavesmo309521 = new VF.Stave(1435, 1924, 302);
stavesmo309521.setAttribute('id', 'stavesmo309521');
stavesmo309521.setBegBarType(VF.Barline.type.NONE);
stavesmo309521.setContext(context);
stavesmo309521.draw();
smo309521v0.draw(context, stavesmo309521);
smo412281.setContext(context);
smo412281.draw();
const stavesmo312716 = new VF.Stave(1435, 2010, 302);
stavesmo312716.setAttribute('id', 'stavesmo312716');
stavesmo312716.setBegBarType(VF.Barline.type.NONE);
stavesmo312716.setContext(context);
stavesmo312716.draw();
smo312716v0.draw(context, stavesmo312716);
smo412284.setContext(context);
smo412284.draw();
// create beam groups and tuplets for format grp smo317567 before formatting
 
// formatting measures in staff group smo317567
fmtsmo31582967.format([smo315829v0], 288);
const stavesmo315829 = new VF.Stave(1435, 2081, 302);
stavesmo315829.setAttribute('id', 'stavesmo315829');
stavesmo315829.setBegBarType(VF.Barline.type.NONE);
stavesmo315829.setContext(context);
stavesmo315829.draw();
smo315829v0.draw(context, stavesmo315829);
// create beam groups and tuplets for format grp smo320723 before formatting
 
// formatting measures in staff group smo320723
fmtsmo31902867.format([smo319028v0,smo319028v1], 288);
const stavesmo319028 = new VF.Stave(1435, 2152, 302);
stavesmo319028.setAttribute('id', 'stavesmo319028');
stavesmo319028.setBegBarType(VF.Barline.type.NONE);
stavesmo319028.setContext(context);
stavesmo319028.draw();
smo319028v0.draw(context, stavesmo319028);
smo319028v1.draw(context, stavesmo319028);
const fmtsmo26621468 = new VF.Formatter();
//
// voices and notes for stave 0 68
const smo266214v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266214v0ar = [];
const smo266198 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo266198.setAttribute('id', 'smo266198');
smo266214v0ar.push(smo266198);
smo266214v0.addTickables(smo266214v0ar)
fmtsmo26621468.joinVoices([smo266214v0]);
const fmtsmo26920768 = new VF.Formatter();
//
// voices and notes for stave 1 68
const smo269207v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269207v0ar = [];
const smo269191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo269191.setAttribute('id', 'smo269191');
smo269207v0ar.push(smo269191);
smo269207v0.addTickables(smo269207v0ar)
fmtsmo26920768.joinVoices([smo269207v0]);
const fmtsmo27235168 = new VF.Formatter();
//
// voices and notes for stave 2 68
const smo272351v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272351v0ar = [];
const smo272335 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo272335.setAttribute('id', 'smo272335');
smo272351v0ar.push(smo272335);
smo272351v0.addTickables(smo272351v0ar)
fmtsmo27235168.joinVoices([smo272351v0]);
const fmtsmo27546768 = new VF.Formatter();
//
// voices and notes for stave 3 68
const smo275467v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo275467v0ar = [];
const smo275451 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo275451.setAttribute('id', 'smo275451');
smo275467v0ar.push(smo275451);
smo275467v0.addTickables(smo275467v0ar)
fmtsmo27546768.joinVoices([smo275467v0]);
const fmtsmo27848668 = new VF.Formatter();
//
// voices and notes for stave 4 68
const smo278486v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278486v0ar = [];
const smo278470 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo278470.setAttribute('id', 'smo278470');
smo278486v0ar.push(smo278470);
smo278486v0.addTickables(smo278486v0ar)
fmtsmo27848668.joinVoices([smo278486v0]);
const fmtsmo28159668 = new VF.Formatter();
//
// voices and notes for stave 5 68
const smo281596v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo281596v0ar = [];
const smo281577 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo281577.setAttribute('id', 'smo281577');
smo281596v0ar.push(smo281577);
const smo281578 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo281578.setAttribute('id', 'smo281578');
smo281596v0ar.push(smo281578);
const smo281579 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo281579.setAttribute('id', 'smo281579');
smo281596v0ar.push(smo281579);
const smo281580 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo281580.setAttribute('id', 'smo281580');
smo281596v0ar.push(smo281580);
smo281596v0.addTickables(smo281596v0ar)
fmtsmo28159668.joinVoices([smo281596v0]);
const fmtsmo28470568 = new VF.Formatter();
//
// voices and notes for stave 6 68
const smo284705v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo284705v0ar = [];
const smo284689 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo284689.setAttribute('id', 'smo284689');
smo284705v0ar.push(smo284689);
smo284705v0.addTickables(smo284705v0ar)
fmtsmo28470568.joinVoices([smo284705v0]);
const fmtsmo28781468 = new VF.Formatter();
//
// voices and notes for stave 7 68
const smo287814v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287814v0ar = [];
const smo287798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo287798.setAttribute('id', 'smo287798');
smo287814v0ar.push(smo287798);
smo287814v0.addTickables(smo287814v0ar)
fmtsmo28781468.joinVoices([smo287814v0]);
const fmtsmo29090068 = new VF.Formatter();
//
// voices and notes for stave 8 68
const smo290900v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290900v0ar = [];
const smo290884 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo290884.setAttribute('id', 'smo290884');
smo290900v0ar.push(smo290884);
smo290900v0.addTickables(smo290900v0ar)
fmtsmo29090068.joinVoices([smo290900v0]);
const fmtsmo29398968 = new VF.Formatter();
//
// voices and notes for stave 9 68
const smo293989v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo293989v0ar = [];
const smo293973 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo293973.setAttribute('id', 'smo293973');
smo293989v0ar.push(smo293973);
smo293989v0.addTickables(smo293989v0ar)
fmtsmo29398968.joinVoices([smo293989v0]);
const fmtsmo29702968 = new VF.Formatter();
//
// voices and notes for stave 10 68
const smo297029v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo297029v0ar = [];
const smo297013 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo297013.setAttribute('id', 'smo297013');
smo297029v0ar.push(smo297013);
smo297029v0.addTickables(smo297029v0ar)
fmtsmo29702968.joinVoices([smo297029v0]);
const fmtsmo30008368 = new VF.Formatter();
//
// voices and notes for stave 11 68
const smo300083v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300083v0ar = [];
const smo300067 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo300067.setAttribute('id', 'smo300067');
smo300083v0ar.push(smo300067);
smo300083v0.addTickables(smo300083v0ar)
fmtsmo30008368.joinVoices([smo300083v0]);
const fmtsmo30312668 = new VF.Formatter();
//
// voices and notes for stave 12 68
const smo303126v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo303126v0ar = [];
const smo303110 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo303110.setAttribute('id', 'smo303110');
smo303126v0ar.push(smo303110);
smo303126v0.addTickables(smo303126v0ar)
fmtsmo30312668.joinVoices([smo303126v0]);
const fmtsmo30632568 = new VF.Formatter();
//
// voices and notes for stave 13 68
const smo306325v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo306325v0ar = [];
const smo306309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo306309.setAttribute('id', 'smo306309');
smo306325v0ar.push(smo306309);
smo306325v0.addTickables(smo306325v0ar)
fmtsmo30632568.joinVoices([smo306325v0]);
const fmtsmo30953868 = new VF.Formatter();
//
// voices and notes for stave 14 68
const smo309538v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309538v0ar = [];
const smo309522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo309522.setAttribute('id', 'smo309522');
smo309538v0ar.push(smo309522);
smo309538v0.addTickables(smo309538v0ar)
fmtsmo30953868.joinVoices([smo309538v0]);
const fmtsmo31273368 = new VF.Formatter();
//
// voices and notes for stave 15 68
const smo312733v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo312733v0ar = [];
const smo312717 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo312717.setAttribute('id', 'smo312717');
smo312733v0ar.push(smo312717);
smo312733v0.addTickables(smo312733v0ar)
fmtsmo31273368.joinVoices([smo312733v0]);
const fmtsmo31584968 = new VF.Formatter();
//
// voices and notes for stave 16 68
const smo315849v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo315849v0ar = [];
const smo315830 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo315830.setAttribute('id', 'smo315830');
smo315830.addModifier(new VF.Dot(), 0);
smo315849v0ar.push(smo315830);
const smo315831 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo315831.setAttribute('id', 'smo315831');
smo315849v0ar.push(smo315831);
const smo315832 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo315832.setAttribute('id', 'smo315832');
smo315849v0ar.push(smo315832);
const smo315833 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo315833.setAttribute('id', 'smo315833');
smo315849v0ar.push(smo315833);
smo315849v0.addTickables(smo315849v0ar)
fmtsmo31584968.joinVoices([smo315849v0]);
const fmtsmo31904868 = new VF.Formatter();
//
// voices and notes for stave 17 68
const smo319048v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo319048v0ar = [];
const smo319029 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo319029.setAttribute('id', 'smo319029');
smo319048v0ar.push(smo319029);
const smo319030 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo319030.setAttribute('id', 'smo319030');
smo319030.setStyle({ fillStyle: "#ffffff00" });
smo319048v0ar.push(smo319030);
smo319048v0.addTickables(smo319048v0ar)
fmtsmo31904868.joinVoices([smo319048v0]);
const smo319048v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo319048v1ar = [];
const smo319031 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo319031.setAttribute('id', 'smo319031');
smo319031.setStyle({ fillStyle: '#aaaaaa7f' });
smo319048v1ar.push(smo319031);
const smo319032 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo319032.setAttribute('id', 'smo319032');
smo319032.setStyle({ fillStyle: "#115511" });
smo319048v1ar.push(smo319032);
smo319048v1.addTickables(smo319048v1ar)
fmtsmo31904868.joinVoices([smo319048v1]);
// create beam groups and tuplets for format grp smo320731 before formatting
 
// formatting measures in staff group smo320731
fmtsmo26621468.format([smo266214v0,smo269207v0,smo272351v0,smo275467v0,smo278486v0], 288);
const stavesmo266214 = new VF.Stave(1737, 210, 302);
stavesmo266214.setAttribute('id', 'stavesmo266214');
stavesmo266214.setBegBarType(VF.Barline.type.NONE);
stavesmo266214.setContext(context);
stavesmo266214.draw();
smo266214v0.draw(context, stavesmo266214);
const stavesmo269207 = new VF.Stave(1737, 316, 302);
stavesmo269207.setAttribute('id', 'stavesmo269207');
stavesmo269207.setBegBarType(VF.Barline.type.NONE);
stavesmo269207.setContext(context);
stavesmo269207.draw();
smo269207v0.draw(context, stavesmo269207);
const stavesmo272351 = new VF.Stave(1737, 437, 302);
stavesmo272351.setAttribute('id', 'stavesmo272351');
stavesmo272351.setBegBarType(VF.Barline.type.NONE);
stavesmo272351.setContext(context);
stavesmo272351.draw();
smo272351v0.draw(context, stavesmo272351);
const stavesmo275467 = new VF.Stave(1737, 553, 302);
stavesmo275467.setAttribute('id', 'stavesmo275467');
stavesmo275467.setBegBarType(VF.Barline.type.NONE);
stavesmo275467.setContext(context);
stavesmo275467.draw();
smo275467v0.draw(context, stavesmo275467);
const stavesmo278486 = new VF.Stave(1737, 659, 302);
stavesmo278486.setAttribute('id', 'stavesmo278486');
stavesmo278486.setBegBarType(VF.Barline.type.NONE);
stavesmo278486.setContext(context);
stavesmo278486.draw();
smo278486v0.draw(context, stavesmo278486);
// create beam groups and tuplets for format grp smo320733 before formatting
 
// formatting measures in staff group smo320733
fmtsmo28159668.format([smo281596v0,smo284705v0,smo287814v0,smo290900v0], 288);
const stavesmo281596 = new VF.Stave(1737, 780, 302);
stavesmo281596.setAttribute('id', 'stavesmo281596');
stavesmo281596.setBegBarType(VF.Barline.type.NONE);
stavesmo281596.setContext(context);
stavesmo281596.draw();
smo281596v0.draw(context, stavesmo281596);
const stavesmo284705 = new VF.Stave(1737, 896, 302);
stavesmo284705.setAttribute('id', 'stavesmo284705');
stavesmo284705.setBegBarType(VF.Barline.type.NONE);
stavesmo284705.setContext(context);
stavesmo284705.draw();
smo284705v0.draw(context, stavesmo284705);
const stavesmo287814 = new VF.Stave(1737, 1012, 302);
stavesmo287814.setAttribute('id', 'stavesmo287814');
stavesmo287814.setBegBarType(VF.Barline.type.NONE);
stavesmo287814.setContext(context);
stavesmo287814.draw();
smo287814v0.draw(context, stavesmo287814);
const stavesmo290900 = new VF.Stave(1737, 1128, 302);
stavesmo290900.setAttribute('id', 'stavesmo290900');
stavesmo290900.setBegBarType(VF.Barline.type.NONE);
stavesmo290900.setContext(context);
stavesmo290900.draw();
smo290900v0.draw(context, stavesmo290900);
// create beam groups and tuplets for format grp smo320735 before formatting
 
// formatting measures in staff group smo320735
fmtsmo29398968.format([smo293989v0,smo297029v0,smo300083v0,smo303126v0], 288);
const stavesmo293989 = new VF.Stave(1737, 1264, 302);
stavesmo293989.setAttribute('id', 'stavesmo293989');
stavesmo293989.setBegBarType(VF.Barline.type.NONE);
stavesmo293989.setContext(context);
stavesmo293989.draw();
smo293989v0.draw(context, stavesmo293989);
const stavesmo297029 = new VF.Stave(1737, 1400, 302);
stavesmo297029.setAttribute('id', 'stavesmo297029');
stavesmo297029.setBegBarType(VF.Barline.type.NONE);
stavesmo297029.setContext(context);
stavesmo297029.draw();
smo297029v0.draw(context, stavesmo297029);
const stavesmo300083 = new VF.Stave(1737, 1536, 302);
stavesmo300083.setAttribute('id', 'stavesmo300083');
stavesmo300083.setBegBarType(VF.Barline.type.NONE);
stavesmo300083.setContext(context);
stavesmo300083.draw();
smo300083v0.draw(context, stavesmo300083);
const stavesmo303126 = new VF.Stave(1737, 1672, 302);
stavesmo303126.setAttribute('id', 'stavesmo303126');
stavesmo303126.setBegBarType(VF.Barline.type.NONE);
stavesmo303126.setContext(context);
stavesmo303126.draw();
smo303126v0.draw(context, stavesmo303126);
// create beam groups and tuplets for format grp smo308054 before formatting
 
// formatting measures in staff group smo308054
fmtsmo30632568.format([smo306325v0], 288);
const stavesmo306325 = new VF.Stave(1737, 1818, 302);
stavesmo306325.setAttribute('id', 'stavesmo306325');
stavesmo306325.setBegBarType(VF.Barline.type.NONE);
stavesmo306325.setContext(context);
stavesmo306325.draw();
smo306325v0.draw(context, stavesmo306325);
// create beam groups and tuplets for format grp smo320729 before formatting
 
// formatting measures in staff group smo320729
fmtsmo30953868.format([smo309538v0,smo312733v0], 288);
const stavesmo309538 = new VF.Stave(1737, 1924, 302);
stavesmo309538.setAttribute('id', 'stavesmo309538');
stavesmo309538.setBegBarType(VF.Barline.type.NONE);
stavesmo309538.setContext(context);
stavesmo309538.draw();
smo309538v0.draw(context, stavesmo309538);
const stavesmo312733 = new VF.Stave(1737, 2010, 302);
stavesmo312733.setAttribute('id', 'stavesmo312733');
stavesmo312733.setBegBarType(VF.Barline.type.NONE);
stavesmo312733.setContext(context);
stavesmo312733.draw();
smo312733v0.draw(context, stavesmo312733);
// create beam groups and tuplets for format grp smo317567 before formatting
 
// formatting measures in staff group smo317567
fmtsmo31584968.format([smo315849v0], 288);
const stavesmo315849 = new VF.Stave(1737, 2081, 302);
stavesmo315849.setAttribute('id', 'stavesmo315849');
stavesmo315849.setBegBarType(VF.Barline.type.NONE);
stavesmo315849.setContext(context);
stavesmo315849.draw();
smo315849v0.draw(context, stavesmo315849);
// create beam groups and tuplets for format grp smo320723 before formatting
 
// formatting measures in staff group smo320723
fmtsmo31904868.format([smo319048v0,smo319048v1], 288);
const stavesmo319048 = new VF.Stave(1737, 2152, 302);
stavesmo319048.setAttribute('id', 'stavesmo319048');
stavesmo319048.setBegBarType(VF.Barline.type.NONE);
stavesmo319048.setContext(context);
stavesmo319048.draw();
smo319048v0.draw(context, stavesmo319048);
smo319048v1.draw(context, stavesmo319048);
const fmtsmo26623169 = new VF.Formatter();
//
// voices and notes for stave 0 69
const smo266231v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266231v0ar = [];
const smo266215 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo266215.setAttribute('id', 'smo266215');
smo266231v0ar.push(smo266215);
smo266231v0.addTickables(smo266231v0ar)
fmtsmo26623169.joinVoices([smo266231v0]);
const fmtsmo26922469 = new VF.Formatter();
//
// voices and notes for stave 1 69
const smo269224v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269224v0ar = [];
const smo269208 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo269208.setAttribute('id', 'smo269208');
smo269224v0ar.push(smo269208);
smo269224v0.addTickables(smo269224v0ar)
fmtsmo26922469.joinVoices([smo269224v0]);
const fmtsmo27236869 = new VF.Formatter();
//
// voices and notes for stave 2 69
const smo272368v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272368v0ar = [];
const smo272352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo272352.setAttribute('id', 'smo272352');
smo272368v0ar.push(smo272352);
smo272368v0.addTickables(smo272368v0ar)
fmtsmo27236869.joinVoices([smo272368v0]);
const fmtsmo27548469 = new VF.Formatter();
//
// voices and notes for stave 3 69
const smo275484v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo275484v0ar = [];
const smo275468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo275468.setAttribute('id', 'smo275468');
smo275484v0ar.push(smo275468);
smo275484v0.addTickables(smo275484v0ar)
fmtsmo27548469.joinVoices([smo275484v0]);
const fmtsmo27850369 = new VF.Formatter();
//
// voices and notes for stave 4 69
const smo278503v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278503v0ar = [];
const smo278487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo278487.setAttribute('id', 'smo278487');
smo278503v0ar.push(smo278487);
smo278503v0.addTickables(smo278503v0ar)
fmtsmo27850369.joinVoices([smo278503v0]);
const fmtsmo28161669 = new VF.Formatter();
//
// voices and notes for stave 5 69
const smo281616v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo281616v0ar = [];
const smo281597 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo281597.setAttribute('id', 'smo281597');
smo281616v0ar.push(smo281597);
const smo281598 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo281598.setAttribute('id', 'smo281598');
smo281616v0ar.push(smo281598);
const smo281599 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo281599.setAttribute('id', 'smo281599');
smo281616v0ar.push(smo281599);
const smo281600 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo281600.setAttribute('id', 'smo281600');
smo281616v0ar.push(smo281600);
smo281616v0.addTickables(smo281616v0ar)
fmtsmo28161669.joinVoices([smo281616v0]);
const fmtsmo28472269 = new VF.Formatter();
//
// voices and notes for stave 6 69
const smo284722v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo284722v0ar = [];
const smo284706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo284706.setAttribute('id', 'smo284706');
smo284722v0ar.push(smo284706);
smo284722v0.addTickables(smo284722v0ar)
fmtsmo28472269.joinVoices([smo284722v0]);
const fmtsmo28783169 = new VF.Formatter();
//
// voices and notes for stave 7 69
const smo287831v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287831v0ar = [];
const smo287815 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo287815.setAttribute('id', 'smo287815');
smo287831v0ar.push(smo287815);
smo287831v0.addTickables(smo287831v0ar)
fmtsmo28783169.joinVoices([smo287831v0]);
const fmtsmo29091769 = new VF.Formatter();
//
// voices and notes for stave 8 69
const smo290917v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290917v0ar = [];
const smo290901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo290901.setAttribute('id', 'smo290901');
smo290917v0ar.push(smo290901);
smo290917v0.addTickables(smo290917v0ar)
fmtsmo29091769.joinVoices([smo290917v0]);
const fmtsmo29400669 = new VF.Formatter();
//
// voices and notes for stave 9 69
const smo294006v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo294006v0ar = [];
const smo293990 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo293990.setAttribute('id', 'smo293990');
smo294006v0ar.push(smo293990);
smo294006v0.addTickables(smo294006v0ar)
fmtsmo29400669.joinVoices([smo294006v0]);
const fmtsmo29704669 = new VF.Formatter();
//
// voices and notes for stave 10 69
const smo297046v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo297046v0ar = [];
const smo297030 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo297030.setAttribute('id', 'smo297030');
smo297046v0ar.push(smo297030);
smo297046v0.addTickables(smo297046v0ar)
fmtsmo29704669.joinVoices([smo297046v0]);
const fmtsmo30010069 = new VF.Formatter();
//
// voices and notes for stave 11 69
const smo300100v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300100v0ar = [];
const smo300084 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo300084.setAttribute('id', 'smo300084');
smo300100v0ar.push(smo300084);
smo300100v0.addTickables(smo300100v0ar)
fmtsmo30010069.joinVoices([smo300100v0]);
const fmtsmo30314369 = new VF.Formatter();
//
// voices and notes for stave 12 69
const smo303143v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo303143v0ar = [];
const smo303127 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo303127.setAttribute('id', 'smo303127');
smo303143v0ar.push(smo303127);
smo303143v0.addTickables(smo303143v0ar)
fmtsmo30314369.joinVoices([smo303143v0]);
const fmtsmo30634269 = new VF.Formatter();
//
// voices and notes for stave 13 69
const smo306342v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo306342v0ar = [];
const smo306326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo306326.setAttribute('id', 'smo306326');
smo306342v0ar.push(smo306326);
smo306342v0.addTickables(smo306342v0ar)
fmtsmo30634269.joinVoices([smo306342v0]);
const fmtsmo30955569 = new VF.Formatter();
//
// voices and notes for stave 14 69
const smo309555v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309555v0ar = [];
const smo309539 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo309539.setAttribute('id', 'smo309539');
smo309555v0ar.push(smo309539);
smo309555v0.addTickables(smo309555v0ar)
fmtsmo30955569.joinVoices([smo309555v0]);
const fmtsmo31275069 = new VF.Formatter();
//
// voices and notes for stave 15 69
const smo312750v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo312750v0ar = [];
const smo312734 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo312734.setAttribute('id', 'smo312734');
smo312750v0ar.push(smo312734);
smo312750v0.addTickables(smo312750v0ar)
fmtsmo31275069.joinVoices([smo312750v0]);
const fmtsmo31586969 = new VF.Formatter();
//
// voices and notes for stave 16 69
const smo315869v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo315869v0ar = [];
const smo315850 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo315850.setAttribute('id', 'smo315850');
smo315850.addModifier(new VF.Dot(), 0);
smo315869v0ar.push(smo315850);
const smo315851 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo315851.setAttribute('id', 'smo315851');
smo315869v0ar.push(smo315851);
const smo315852 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo315852.setAttribute('id', 'smo315852');
smo315869v0ar.push(smo315852);
const smo315853 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo315853.setAttribute('id', 'smo315853');
smo315869v0ar.push(smo315853);
smo315869v0.addTickables(smo315869v0ar)
fmtsmo31586969.joinVoices([smo315869v0]);
const fmtsmo31906869 = new VF.Formatter();
//
// voices and notes for stave 17 69
const smo319068v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo319068v0ar = [];
const smo319049 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo319049.setAttribute('id', 'smo319049');
smo319068v0ar.push(smo319049);
const smo319050 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo319050.setAttribute('id', 'smo319050');
smo319050.setStyle({ fillStyle: "#ffffff00" });
smo319068v0ar.push(smo319050);
smo319068v0.addTickables(smo319068v0ar)
fmtsmo31906869.joinVoices([smo319068v0]);
const smo319068v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo319068v1ar = [];
const smo319051 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo319051.setAttribute('id', 'smo319051');
smo319051.setStyle({ fillStyle: '#aaaaaa7f' });
smo319068v1ar.push(smo319051);
const smo319052 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo319052.setAttribute('id', 'smo319052');
smo319052.setStyle({ fillStyle: "#115511" });
smo319068v1ar.push(smo319052);
smo319068v1.addTickables(smo319068v1ar)
fmtsmo31906869.joinVoices([smo319068v1]);
// create beam groups and tuplets for format grp smo320731 before formatting
 
// formatting measures in staff group smo320731
fmtsmo26623169.format([smo266231v0,smo269224v0,smo272368v0,smo275484v0,smo278503v0], 288);
const stavesmo266231 = new VF.Stave(2039, 210, 302);
stavesmo266231.setAttribute('id', 'stavesmo266231');
stavesmo266231.setBegBarType(VF.Barline.type.NONE);
stavesmo266231.setContext(context);
stavesmo266231.draw();
smo266231v0.draw(context, stavesmo266231);
const stavesmo269224 = new VF.Stave(2039, 316, 302);
stavesmo269224.setAttribute('id', 'stavesmo269224');
stavesmo269224.setBegBarType(VF.Barline.type.NONE);
stavesmo269224.setContext(context);
stavesmo269224.draw();
smo269224v0.draw(context, stavesmo269224);
const stavesmo272368 = new VF.Stave(2039, 437, 302);
stavesmo272368.setAttribute('id', 'stavesmo272368');
stavesmo272368.setBegBarType(VF.Barline.type.NONE);
stavesmo272368.setContext(context);
stavesmo272368.draw();
smo272368v0.draw(context, stavesmo272368);
const stavesmo275484 = new VF.Stave(2039, 553, 302);
stavesmo275484.setAttribute('id', 'stavesmo275484');
stavesmo275484.setBegBarType(VF.Barline.type.NONE);
stavesmo275484.setContext(context);
stavesmo275484.draw();
smo275484v0.draw(context, stavesmo275484);
const stavesmo278503 = new VF.Stave(2039, 659, 302);
stavesmo278503.setAttribute('id', 'stavesmo278503');
stavesmo278503.setBegBarType(VF.Barline.type.NONE);
stavesmo278503.setContext(context);
stavesmo278503.draw();
smo278503v0.draw(context, stavesmo278503);
// create beam groups and tuplets for format grp smo320733 before formatting
 
// formatting measures in staff group smo320733
fmtsmo28161669.format([smo281616v0,smo284722v0,smo287831v0,smo290917v0], 288);
const stavesmo281616 = new VF.Stave(2039, 780, 302);
stavesmo281616.setAttribute('id', 'stavesmo281616');
stavesmo281616.setBegBarType(VF.Barline.type.NONE);
stavesmo281616.setContext(context);
stavesmo281616.draw();
smo281616v0.draw(context, stavesmo281616);
const stavesmo284722 = new VF.Stave(2039, 896, 302);
stavesmo284722.setAttribute('id', 'stavesmo284722');
stavesmo284722.setBegBarType(VF.Barline.type.NONE);
stavesmo284722.setContext(context);
stavesmo284722.draw();
smo284722v0.draw(context, stavesmo284722);
const stavesmo287831 = new VF.Stave(2039, 1012, 302);
stavesmo287831.setAttribute('id', 'stavesmo287831');
stavesmo287831.setBegBarType(VF.Barline.type.NONE);
stavesmo287831.setContext(context);
stavesmo287831.draw();
smo287831v0.draw(context, stavesmo287831);
const stavesmo290917 = new VF.Stave(2039, 1128, 302);
stavesmo290917.setAttribute('id', 'stavesmo290917');
stavesmo290917.setBegBarType(VF.Barline.type.NONE);
stavesmo290917.setContext(context);
stavesmo290917.draw();
smo290917v0.draw(context, stavesmo290917);
// create beam groups and tuplets for format grp smo320735 before formatting
 
// formatting measures in staff group smo320735
fmtsmo29400669.format([smo294006v0,smo297046v0,smo300100v0,smo303143v0], 288);
const stavesmo294006 = new VF.Stave(2039, 1264, 302);
stavesmo294006.setAttribute('id', 'stavesmo294006');
stavesmo294006.setBegBarType(VF.Barline.type.NONE);
stavesmo294006.setContext(context);
stavesmo294006.draw();
smo294006v0.draw(context, stavesmo294006);
const stavesmo297046 = new VF.Stave(2039, 1400, 302);
stavesmo297046.setAttribute('id', 'stavesmo297046');
stavesmo297046.setBegBarType(VF.Barline.type.NONE);
stavesmo297046.setContext(context);
stavesmo297046.draw();
smo297046v0.draw(context, stavesmo297046);
const stavesmo300100 = new VF.Stave(2039, 1536, 302);
stavesmo300100.setAttribute('id', 'stavesmo300100');
stavesmo300100.setBegBarType(VF.Barline.type.NONE);
stavesmo300100.setContext(context);
stavesmo300100.draw();
smo300100v0.draw(context, stavesmo300100);
const stavesmo303143 = new VF.Stave(2039, 1672, 302);
stavesmo303143.setAttribute('id', 'stavesmo303143');
stavesmo303143.setBegBarType(VF.Barline.type.NONE);
stavesmo303143.setContext(context);
stavesmo303143.draw();
smo303143v0.draw(context, stavesmo303143);
// create beam groups and tuplets for format grp smo308054 before formatting
 
// formatting measures in staff group smo308054
fmtsmo30634269.format([smo306342v0], 288);
const stavesmo306342 = new VF.Stave(2039, 1818, 302);
stavesmo306342.setAttribute('id', 'stavesmo306342');
stavesmo306342.setBegBarType(VF.Barline.type.NONE);
stavesmo306342.setContext(context);
stavesmo306342.draw();
smo306342v0.draw(context, stavesmo306342);
// create beam groups and tuplets for format grp smo320729 before formatting
 
// formatting measures in staff group smo320729
fmtsmo30955569.format([smo309555v0,smo312750v0], 288);
const stavesmo309555 = new VF.Stave(2039, 1924, 302);
stavesmo309555.setAttribute('id', 'stavesmo309555');
stavesmo309555.setBegBarType(VF.Barline.type.NONE);
stavesmo309555.setContext(context);
stavesmo309555.draw();
smo309555v0.draw(context, stavesmo309555);
const stavesmo312750 = new VF.Stave(2039, 2010, 302);
stavesmo312750.setAttribute('id', 'stavesmo312750');
stavesmo312750.setBegBarType(VF.Barline.type.NONE);
stavesmo312750.setContext(context);
stavesmo312750.draw();
smo312750v0.draw(context, stavesmo312750);
// create beam groups and tuplets for format grp smo317567 before formatting
 
// formatting measures in staff group smo317567
fmtsmo31586969.format([smo315869v0], 288);
const stavesmo315869 = new VF.Stave(2039, 2081, 302);
stavesmo315869.setAttribute('id', 'stavesmo315869');
stavesmo315869.setBegBarType(VF.Barline.type.NONE);
stavesmo315869.setContext(context);
stavesmo315869.draw();
smo315869v0.draw(context, stavesmo315869);
// create beam groups and tuplets for format grp smo320723 before formatting
 
// formatting measures in staff group smo320723
fmtsmo31906869.format([smo319068v0,smo319068v1], 288);
const stavesmo319068 = new VF.Stave(2039, 2152, 302);
stavesmo319068.setAttribute('id', 'stavesmo319068');
stavesmo319068.setBegBarType(VF.Barline.type.NONE);
stavesmo319068.setContext(context);
stavesmo319068.draw();
smo319068v0.draw(context, stavesmo319068);
smo319068v1.draw(context, stavesmo319068);
const fmtsmo26624870 = new VF.Formatter();
//
// voices and notes for stave 0 70
const smo266248v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266248v0ar = [];
const smo266232 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo266232.setAttribute('id', 'smo266232');
smo266248v0ar.push(smo266232);
smo266248v0.addTickables(smo266248v0ar)
fmtsmo26624870.joinVoices([smo266248v0]);
const fmtsmo26924170 = new VF.Formatter();
//
// voices and notes for stave 1 70
const smo269241v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269241v0ar = [];
const smo269225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo269225.setAttribute('id', 'smo269225');
smo269241v0ar.push(smo269225);
smo269241v0.addTickables(smo269241v0ar)
fmtsmo26924170.joinVoices([smo269241v0]);
const fmtsmo27238570 = new VF.Formatter();
//
// voices and notes for stave 2 70
const smo272385v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272385v0ar = [];
const smo272369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo272369.setAttribute('id', 'smo272369');
smo272385v0ar.push(smo272369);
smo272385v0.addTickables(smo272385v0ar)
fmtsmo27238570.joinVoices([smo272385v0]);
const fmtsmo27550170 = new VF.Formatter();
//
// voices and notes for stave 3 70
const smo275501v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo275501v0ar = [];
const smo275485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo275485.setAttribute('id', 'smo275485');
smo275501v0ar.push(smo275485);
smo275501v0.addTickables(smo275501v0ar)
fmtsmo27550170.joinVoices([smo275501v0]);
const fmtsmo27852070 = new VF.Formatter();
//
// voices and notes for stave 4 70
const smo278520v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278520v0ar = [];
const smo278504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo278504.setAttribute('id', 'smo278504');
smo278520v0ar.push(smo278504);
smo278520v0.addTickables(smo278520v0ar)
fmtsmo27852070.joinVoices([smo278520v0]);
const fmtsmo28163670 = new VF.Formatter();
//
// voices and notes for stave 5 70
const smo281636v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo281636v0ar = [];
const smo281617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo281617.setAttribute('id', 'smo281617');
smo281636v0ar.push(smo281617);
const smo281618 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo281618.setAttribute('id', 'smo281618');
smo281636v0ar.push(smo281618);
const smo281619 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo281619.setAttribute('id', 'smo281619');
smo281636v0ar.push(smo281619);
const smo281620 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo281620.setAttribute('id', 'smo281620');
smo281636v0ar.push(smo281620);
smo281636v0.addTickables(smo281636v0ar)
fmtsmo28163670.joinVoices([smo281636v0]);
const fmtsmo28473970 = new VF.Formatter();
//
// voices and notes for stave 6 70
const smo284739v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo284739v0ar = [];
const smo284723 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo284723.setAttribute('id', 'smo284723');
smo284739v0ar.push(smo284723);
smo284739v0.addTickables(smo284739v0ar)
fmtsmo28473970.joinVoices([smo284739v0]);
const fmtsmo28784870 = new VF.Formatter();
//
// voices and notes for stave 7 70
const smo287848v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287848v0ar = [];
const smo287832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo287832.setAttribute('id', 'smo287832');
smo287848v0ar.push(smo287832);
smo287848v0.addTickables(smo287848v0ar)
fmtsmo28784870.joinVoices([smo287848v0]);
const fmtsmo29093470 = new VF.Formatter();
//
// voices and notes for stave 8 70
const smo290934v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290934v0ar = [];
const smo290918 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo290918.setAttribute('id', 'smo290918');
smo290934v0ar.push(smo290918);
smo290934v0.addTickables(smo290934v0ar)
fmtsmo29093470.joinVoices([smo290934v0]);
const fmtsmo29402370 = new VF.Formatter();
//
// voices and notes for stave 9 70
const smo294023v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo294023v0ar = [];
const smo294007 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo294007.setAttribute('id', 'smo294007');
smo294023v0ar.push(smo294007);
smo294023v0.addTickables(smo294023v0ar)
fmtsmo29402370.joinVoices([smo294023v0]);
const fmtsmo29706370 = new VF.Formatter();
//
// voices and notes for stave 10 70
const smo297063v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo297063v0ar = [];
const smo297047 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo297047.setAttribute('id', 'smo297047');
smo297063v0ar.push(smo297047);
smo297063v0.addTickables(smo297063v0ar)
fmtsmo29706370.joinVoices([smo297063v0]);
const fmtsmo30011770 = new VF.Formatter();
//
// voices and notes for stave 11 70
const smo300117v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300117v0ar = [];
const smo300101 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo300101.setAttribute('id', 'smo300101');
smo300117v0ar.push(smo300101);
smo300117v0.addTickables(smo300117v0ar)
fmtsmo30011770.joinVoices([smo300117v0]);
const fmtsmo30316070 = new VF.Formatter();
//
// voices and notes for stave 12 70
const smo303160v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo303160v0ar = [];
const smo303144 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo303144.setAttribute('id', 'smo303144');
smo303160v0ar.push(smo303144);
smo303160v0.addTickables(smo303160v0ar)
fmtsmo30316070.joinVoices([smo303160v0]);
const fmtsmo30635970 = new VF.Formatter();
//
// voices and notes for stave 13 70
const smo306359v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo306359v0ar = [];
const smo306343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo306343.setAttribute('id', 'smo306343');
smo306359v0ar.push(smo306343);
smo306359v0.addTickables(smo306359v0ar)
fmtsmo30635970.joinVoices([smo306359v0]);
const fmtsmo30957270 = new VF.Formatter();
//
// voices and notes for stave 14 70
const smo309572v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309572v0ar = [];
const smo309556 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo309556.setAttribute('id', 'smo309556');
smo309572v0ar.push(smo309556);
smo309572v0.addTickables(smo309572v0ar)
fmtsmo30957270.joinVoices([smo309572v0]);
const fmtsmo31276770 = new VF.Formatter();
//
// voices and notes for stave 15 70
const smo312767v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo312767v0ar = [];
const smo312751 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo312751.setAttribute('id', 'smo312751');
smo312767v0ar.push(smo312751);
smo312767v0.addTickables(smo312767v0ar)
fmtsmo31276770.joinVoices([smo312767v0]);
const fmtsmo31588970 = new VF.Formatter();
//
// voices and notes for stave 16 70
const smo315889v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo315889v0ar = [];
const smo315870 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo315870.setAttribute('id', 'smo315870');
smo315870.addModifier(new VF.Dot(), 0);
smo315889v0ar.push(smo315870);
const smo315871 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n"]}'))
smo315871.setAttribute('id', 'smo315871');
const smo3158710acc = new VF.Accidental('b');
smo315871.addModifier(smo3158710acc, 0);
smo315889v0ar.push(smo315871);
const smo315872 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n"]}'))
smo315872.setAttribute('id', 'smo315872');
smo315889v0ar.push(smo315872);
const smo315873 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo315873.setAttribute('id', 'smo315873');
smo315889v0ar.push(smo315873);
smo315889v0.addTickables(smo315889v0ar)
fmtsmo31588970.joinVoices([smo315889v0]);
const fmtsmo31908870 = new VF.Formatter();
//
// voices and notes for stave 17 70
const smo319088v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo319088v0ar = [];
const smo319069 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo319069.setAttribute('id', 'smo319069');
smo319088v0ar.push(smo319069);
const smo319070 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo319070.setAttribute('id', 'smo319070');
smo319070.setStyle({ fillStyle: "#ffffff00" });
smo319088v0ar.push(smo319070);
smo319088v0.addTickables(smo319088v0ar)
fmtsmo31908870.joinVoices([smo319088v0]);
const smo319088v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo319088v1ar = [];
const smo319071 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo319071.setAttribute('id', 'smo319071');
smo319071.setStyle({ fillStyle: '#aaaaaa7f' });
smo319088v1ar.push(smo319071);
const smo319072 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo319072.setAttribute('id', 'smo319072');
smo319072.setStyle({ fillStyle: "#115511" });
smo319088v1ar.push(smo319072);
smo319088v1.addTickables(smo319088v1ar)
fmtsmo31908870.joinVoices([smo319088v1]);
// create beam groups and tuplets for format grp smo320731 before formatting
 
// formatting measures in staff group smo320731
fmtsmo26624870.format([smo266248v0,smo269241v0,smo272385v0,smo275501v0,smo278520v0], 288);
const stavesmo266248 = new VF.Stave(2341, 210, 302);
stavesmo266248.setAttribute('id', 'stavesmo266248');
stavesmo266248.setBegBarType(VF.Barline.type.NONE);
stavesmo266248.setContext(context);
stavesmo266248.draw();
smo266248v0.draw(context, stavesmo266248);
const stavesmo269241 = new VF.Stave(2341, 316, 302);
stavesmo269241.setAttribute('id', 'stavesmo269241');
stavesmo269241.setBegBarType(VF.Barline.type.NONE);
stavesmo269241.setContext(context);
stavesmo269241.draw();
smo269241v0.draw(context, stavesmo269241);
const stavesmo272385 = new VF.Stave(2341, 437, 302);
stavesmo272385.setAttribute('id', 'stavesmo272385');
stavesmo272385.setBegBarType(VF.Barline.type.NONE);
stavesmo272385.setContext(context);
stavesmo272385.draw();
smo272385v0.draw(context, stavesmo272385);
const stavesmo275501 = new VF.Stave(2341, 553, 302);
stavesmo275501.setAttribute('id', 'stavesmo275501');
stavesmo275501.setBegBarType(VF.Barline.type.NONE);
stavesmo275501.setContext(context);
stavesmo275501.draw();
smo275501v0.draw(context, stavesmo275501);
const stavesmo278520 = new VF.Stave(2341, 659, 302);
stavesmo278520.setAttribute('id', 'stavesmo278520');
stavesmo278520.setBegBarType(VF.Barline.type.NONE);
stavesmo278520.setContext(context);
stavesmo278520.draw();
smo278520v0.draw(context, stavesmo278520);
// create beam groups and tuplets for format grp smo320733 before formatting
 
// formatting measures in staff group smo320733
fmtsmo28163670.format([smo281636v0,smo284739v0,smo287848v0,smo290934v0], 288);
const stavesmo281636 = new VF.Stave(2341, 780, 302);
stavesmo281636.setAttribute('id', 'stavesmo281636');
stavesmo281636.setBegBarType(VF.Barline.type.NONE);
stavesmo281636.setContext(context);
stavesmo281636.draw();
smo281636v0.draw(context, stavesmo281636);
const stavesmo284739 = new VF.Stave(2341, 896, 302);
stavesmo284739.setAttribute('id', 'stavesmo284739');
stavesmo284739.setBegBarType(VF.Barline.type.NONE);
stavesmo284739.setContext(context);
stavesmo284739.draw();
smo284739v0.draw(context, stavesmo284739);
const stavesmo287848 = new VF.Stave(2341, 1012, 302);
stavesmo287848.setAttribute('id', 'stavesmo287848');
stavesmo287848.setBegBarType(VF.Barline.type.NONE);
stavesmo287848.setContext(context);
stavesmo287848.draw();
smo287848v0.draw(context, stavesmo287848);
const stavesmo290934 = new VF.Stave(2341, 1128, 302);
stavesmo290934.setAttribute('id', 'stavesmo290934');
stavesmo290934.setBegBarType(VF.Barline.type.NONE);
stavesmo290934.setContext(context);
stavesmo290934.draw();
smo290934v0.draw(context, stavesmo290934);
// create beam groups and tuplets for format grp smo320735 before formatting
 
// formatting measures in staff group smo320735
fmtsmo29402370.format([smo294023v0,smo297063v0,smo300117v0,smo303160v0], 288);
const stavesmo294023 = new VF.Stave(2341, 1264, 302);
stavesmo294023.setAttribute('id', 'stavesmo294023');
stavesmo294023.setBegBarType(VF.Barline.type.NONE);
stavesmo294023.setContext(context);
stavesmo294023.draw();
smo294023v0.draw(context, stavesmo294023);
const stavesmo297063 = new VF.Stave(2341, 1400, 302);
stavesmo297063.setAttribute('id', 'stavesmo297063');
stavesmo297063.setBegBarType(VF.Barline.type.NONE);
stavesmo297063.setContext(context);
stavesmo297063.draw();
smo297063v0.draw(context, stavesmo297063);
const stavesmo300117 = new VF.Stave(2341, 1536, 302);
stavesmo300117.setAttribute('id', 'stavesmo300117');
stavesmo300117.setBegBarType(VF.Barline.type.NONE);
stavesmo300117.setContext(context);
stavesmo300117.draw();
smo300117v0.draw(context, stavesmo300117);
const stavesmo303160 = new VF.Stave(2341, 1672, 302);
stavesmo303160.setAttribute('id', 'stavesmo303160');
stavesmo303160.setBegBarType(VF.Barline.type.NONE);
stavesmo303160.setContext(context);
stavesmo303160.draw();
smo303160v0.draw(context, stavesmo303160);
// create beam groups and tuplets for format grp smo308054 before formatting
 
// formatting measures in staff group smo308054
fmtsmo30635970.format([smo306359v0], 288);
const stavesmo306359 = new VF.Stave(2341, 1818, 302);
stavesmo306359.setAttribute('id', 'stavesmo306359');
stavesmo306359.setBegBarType(VF.Barline.type.NONE);
stavesmo306359.setContext(context);
stavesmo306359.draw();
smo306359v0.draw(context, stavesmo306359);
// create beam groups and tuplets for format grp smo320729 before formatting
 
// formatting measures in staff group smo320729
fmtsmo30957270.format([smo309572v0,smo312767v0], 288);
const stavesmo309572 = new VF.Stave(2341, 1924, 302);
stavesmo309572.setAttribute('id', 'stavesmo309572');
stavesmo309572.setBegBarType(VF.Barline.type.NONE);
stavesmo309572.setContext(context);
stavesmo309572.draw();
smo309572v0.draw(context, stavesmo309572);
const stavesmo312767 = new VF.Stave(2341, 2010, 302);
stavesmo312767.setAttribute('id', 'stavesmo312767');
stavesmo312767.setBegBarType(VF.Barline.type.NONE);
stavesmo312767.setContext(context);
stavesmo312767.draw();
smo312767v0.draw(context, stavesmo312767);
// create beam groups and tuplets for format grp smo317567 before formatting
 
// formatting measures in staff group smo317567
fmtsmo31588970.format([smo315889v0], 288);
const stavesmo315889 = new VF.Stave(2341, 2081, 302);
stavesmo315889.setAttribute('id', 'stavesmo315889');
stavesmo315889.setBegBarType(VF.Barline.type.NONE);
stavesmo315889.setContext(context);
stavesmo315889.draw();
smo315889v0.draw(context, stavesmo315889);
// create beam groups and tuplets for format grp smo320723 before formatting
 
// formatting measures in staff group smo320723
fmtsmo31908870.format([smo319088v0,smo319088v1], 288);
const stavesmo319088 = new VF.Stave(2341, 2152, 302);
stavesmo319088.setAttribute('id', 'stavesmo319088');
stavesmo319088.setBegBarType(VF.Barline.type.NONE);
stavesmo319088.setContext(context);
stavesmo319088.draw();
smo319088v0.draw(context, stavesmo319088);
smo319088v1.draw(context, stavesmo319088);
const fmtsmo26627371 = new VF.Formatter();
//
// voices and notes for stave 0 71
const smo266273v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266273v0ar = [];
const smo266249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo266249.setAttribute('id', 'smo266249');
smo266273v0ar.push(smo266249);
const smo266250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo266250.setAttribute('id', 'smo266250');
smo266273v0ar.push(smo266250);
const smo266251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo266251.setAttribute('id', 'smo266251');
const smo266252 = new VF.Annotation('Ki');
smo266252.setAttribute('id', 'smo266252');
smo266252.setFont('times', 12, 'normal');
smo266252.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266251.addModifier(smo266252);
smo266252.addClass('lyric lyric-0 lyric-hyphen');
smo266273v0ar.push(smo266251);
const smo266253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo266253.setAttribute('id', 'smo266253');
smo266273v0ar.push(smo266253);
const smo266254 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo266254.setAttribute('id', 'smo266254');
const smo266255 = new VF.Annotation('ki');
smo266255.setAttribute('id', 'smo266255');
smo266255.setFont('times', 12, 'normal');
smo266255.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266254.addModifier(smo266255);
smo266255.addClass('lyric lyric-0 lyric-hyphen');
smo266273v0ar.push(smo266254);
const smo266256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo266256.setAttribute('id', 'smo266256');
const smo266257 = new VF.Annotation('ri');
smo266257.setAttribute('id', 'smo266257');
smo266257.setFont('times', 12, 'normal');
smo266257.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266256.addModifier(smo266257);
smo266257.addClass('lyric lyric-0');
smo266273v0ar.push(smo266256);
smo266273v0.addTickables(smo266273v0ar)
fmtsmo26627371.joinVoices([smo266273v0]);
const fmtsmo26926671 = new VF.Formatter();
//
// voices and notes for stave 1 71
const smo269266v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269266v0ar = [];
const smo269242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo269242.setAttribute('id', 'smo269242');
smo269266v0ar.push(smo269242);
const smo269243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo269243.setAttribute('id', 'smo269243');
smo269266v0ar.push(smo269243);
const smo269244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo269244.setAttribute('id', 'smo269244');
const smo269245 = new VF.Annotation('Ki');
smo269245.setAttribute('id', 'smo269245');
smo269245.setFont('times', 12, 'normal');
smo269245.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269244.addModifier(smo269245);
smo269245.addClass('lyric lyric-0 lyric-hyphen');
smo269266v0ar.push(smo269244);
const smo269246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo269246.setAttribute('id', 'smo269246');
smo269266v0ar.push(smo269246);
const smo269247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo269247.setAttribute('id', 'smo269247');
const smo269248 = new VF.Annotation('ki');
smo269248.setAttribute('id', 'smo269248');
smo269248.setFont('times', 12, 'normal');
smo269248.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269247.addModifier(smo269248);
smo269248.addClass('lyric lyric-0 lyric-hyphen');
smo269266v0ar.push(smo269247);
const smo269249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo269249.setAttribute('id', 'smo269249');
const smo269250 = new VF.Annotation('ri');
smo269250.setAttribute('id', 'smo269250');
smo269250.setFont('times', 12, 'normal');
smo269250.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269249.addModifier(smo269250);
smo269250.addClass('lyric lyric-0');
smo269266v0ar.push(smo269249);
smo269266v0.addTickables(smo269266v0ar)
fmtsmo26926671.joinVoices([smo269266v0]);
const fmtsmo27241071 = new VF.Formatter();
//
// voices and notes for stave 2 71
const smo272410v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272410v0ar = [];
const smo272386 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo272386.setAttribute('id', 'smo272386');
smo272410v0ar.push(smo272386);
const smo272387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo272387.setAttribute('id', 'smo272387');
smo272410v0ar.push(smo272387);
const smo272388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo272388.setAttribute('id', 'smo272388');
const smo272389 = new VF.Annotation('Ki');
smo272389.setAttribute('id', 'smo272389');
smo272389.setFont('times', 12, 'normal');
smo272389.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272388.addModifier(smo272389);
smo272389.addClass('lyric lyric-0 lyric-hyphen');
smo272410v0ar.push(smo272388);
const smo272390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo272390.setAttribute('id', 'smo272390');
smo272410v0ar.push(smo272390);
const smo272391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo272391.setAttribute('id', 'smo272391');
const smo272392 = new VF.Annotation('ki');
smo272392.setAttribute('id', 'smo272392');
smo272392.setFont('times', 12, 'normal');
smo272392.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272391.addModifier(smo272392);
smo272392.addClass('lyric lyric-0 lyric-hyphen');
smo272410v0ar.push(smo272391);
const smo272393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo272393.setAttribute('id', 'smo272393');
const smo272394 = new VF.Annotation('ri');
smo272394.setAttribute('id', 'smo272394');
smo272394.setFont('times', 12, 'normal');
smo272394.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272393.addModifier(smo272394);
smo272394.addClass('lyric lyric-0');
smo272410v0ar.push(smo272393);
smo272410v0.addTickables(smo272410v0ar)
fmtsmo27241071.joinVoices([smo272410v0]);
const fmtsmo27552671 = new VF.Formatter();
//
// voices and notes for stave 3 71
const smo275526v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo275526v0ar = [];
const smo275502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo275502.setAttribute('id', 'smo275502');
smo275526v0ar.push(smo275502);
const smo275503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo275503.setAttribute('id', 'smo275503');
smo275526v0ar.push(smo275503);
const smo275504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo275504.setAttribute('id', 'smo275504');
const smo275505 = new VF.Annotation('Ki');
smo275505.setAttribute('id', 'smo275505');
smo275505.setFont('times', 12, 'normal');
smo275505.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275504.addModifier(smo275505);
smo275505.addClass('lyric lyric-0 lyric-hyphen');
smo275526v0ar.push(smo275504);
const smo275506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo275506.setAttribute('id', 'smo275506');
smo275526v0ar.push(smo275506);
const smo275507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo275507.setAttribute('id', 'smo275507');
const smo275508 = new VF.Annotation('ki');
smo275508.setAttribute('id', 'smo275508');
smo275508.setFont('times', 12, 'normal');
smo275508.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275507.addModifier(smo275508);
smo275508.addClass('lyric lyric-0 lyric-hyphen');
smo275526v0ar.push(smo275507);
const smo275509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo275509.setAttribute('id', 'smo275509');
const smo275510 = new VF.Annotation('ri');
smo275510.setAttribute('id', 'smo275510');
smo275510.setFont('times', 12, 'normal');
smo275510.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275509.addModifier(smo275510);
smo275510.addClass('lyric lyric-0');
smo275526v0ar.push(smo275509);
smo275526v0.addTickables(smo275526v0ar)
fmtsmo27552671.joinVoices([smo275526v0]);
const fmtsmo27854571 = new VF.Formatter();
//
// voices and notes for stave 4 71
const smo278545v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278545v0ar = [];
const smo278521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo278521.setAttribute('id', 'smo278521');
smo278545v0ar.push(smo278521);
const smo278522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo278522.setAttribute('id', 'smo278522');
smo278545v0ar.push(smo278522);
const smo278523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo278523.setAttribute('id', 'smo278523');
const smo278524 = new VF.Annotation('Ki');
smo278524.setAttribute('id', 'smo278524');
smo278524.setFont('times', 12, 'normal');
smo278524.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278523.addModifier(smo278524);
smo278524.addClass('lyric lyric-0 lyric-hyphen');
smo278545v0ar.push(smo278523);
const smo278525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo278525.setAttribute('id', 'smo278525');
smo278545v0ar.push(smo278525);
const smo278526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo278526.setAttribute('id', 'smo278526');
const smo278527 = new VF.Annotation('ki');
smo278527.setAttribute('id', 'smo278527');
smo278527.setFont('times', 12, 'normal');
smo278527.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278526.addModifier(smo278527);
smo278527.addClass('lyric lyric-0 lyric-hyphen');
smo278545v0ar.push(smo278526);
const smo278528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo278528.setAttribute('id', 'smo278528');
const smo278529 = new VF.Annotation('ri');
smo278529.setAttribute('id', 'smo278529');
smo278529.setFont('times', 12, 'normal');
smo278529.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo278528.addModifier(smo278529);
smo278529.addClass('lyric lyric-0');
smo278545v0ar.push(smo278528);
smo278545v0.addTickables(smo278545v0ar)
fmtsmo27854571.joinVoices([smo278545v0]);
const fmtsmo28166171 = new VF.Formatter();
//
// voices and notes for stave 5 71
const smo281661v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo281661v0ar = [];
const smo281637 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo281637.setAttribute('id', 'smo281637');
smo281661v0ar.push(smo281637);
const smo281638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo281638.setAttribute('id', 'smo281638');
smo281661v0ar.push(smo281638);
const smo281639 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo281639.setAttribute('id', 'smo281639');
const smo281640 = new VF.Annotation('Ki');
smo281640.setAttribute('id', 'smo281640');
smo281640.setFont('times', 12, 'normal');
smo281640.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281639.addModifier(smo281640);
smo281640.addClass('lyric lyric-0 lyric-hyphen');
smo281661v0ar.push(smo281639);
const smo281641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo281641.setAttribute('id', 'smo281641');
smo281661v0ar.push(smo281641);
const smo281642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo281642.setAttribute('id', 'smo281642');
const smo281643 = new VF.Annotation('ki');
smo281643.setAttribute('id', 'smo281643');
smo281643.setFont('times', 12, 'normal');
smo281643.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281642.addModifier(smo281643);
smo281643.addClass('lyric lyric-0 lyric-hyphen');
smo281661v0ar.push(smo281642);
const smo281644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo281644.setAttribute('id', 'smo281644');
const smo281645 = new VF.Annotation('ri');
smo281645.setAttribute('id', 'smo281645');
smo281645.setFont('times', 12, 'normal');
smo281645.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo281644.addModifier(smo281645);
smo281645.addClass('lyric lyric-0');
smo281661v0ar.push(smo281644);
smo281661v0.addTickables(smo281661v0ar)
fmtsmo28166171.joinVoices([smo281661v0]);
const fmtsmo28476471 = new VF.Formatter();
//
// voices and notes for stave 6 71
const smo284764v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo284764v0ar = [];
const smo284740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo284740.setAttribute('id', 'smo284740');
smo284764v0ar.push(smo284740);
const smo284741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo284741.setAttribute('id', 'smo284741');
smo284764v0ar.push(smo284741);
const smo284742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo284742.setAttribute('id', 'smo284742');
const smo284743 = new VF.Annotation('Ki');
smo284743.setAttribute('id', 'smo284743');
smo284743.setFont('times', 12, 'normal');
smo284743.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284742.addModifier(smo284743);
smo284743.addClass('lyric lyric-0 lyric-hyphen');
smo284764v0ar.push(smo284742);
const smo284744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo284744.setAttribute('id', 'smo284744');
smo284764v0ar.push(smo284744);
const smo284745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo284745.setAttribute('id', 'smo284745');
const smo284746 = new VF.Annotation('ki');
smo284746.setAttribute('id', 'smo284746');
smo284746.setFont('times', 12, 'normal');
smo284746.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284745.addModifier(smo284746);
smo284746.addClass('lyric lyric-0 lyric-hyphen');
smo284764v0ar.push(smo284745);
const smo284747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo284747.setAttribute('id', 'smo284747');
const smo284748 = new VF.Annotation('ri');
smo284748.setAttribute('id', 'smo284748');
smo284748.setFont('times', 12, 'normal');
smo284748.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo284747.addModifier(smo284748);
smo284748.addClass('lyric lyric-0');
smo284764v0ar.push(smo284747);
smo284764v0.addTickables(smo284764v0ar)
fmtsmo28476471.joinVoices([smo284764v0]);
const fmtsmo28787371 = new VF.Formatter();
//
// voices and notes for stave 7 71
const smo287873v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287873v0ar = [];
const smo287849 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo287849.setAttribute('id', 'smo287849');
smo287873v0ar.push(smo287849);
const smo287850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo287850.setAttribute('id', 'smo287850');
smo287873v0ar.push(smo287850);
const smo287851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo287851.setAttribute('id', 'smo287851');
const smo287852 = new VF.Annotation('Ki');
smo287852.setAttribute('id', 'smo287852');
smo287852.setFont('times', 12, 'normal');
smo287852.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287851.addModifier(smo287852);
smo287852.addClass('lyric lyric-0 lyric-hyphen');
smo287873v0ar.push(smo287851);
const smo287853 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo287853.setAttribute('id', 'smo287853');
smo287873v0ar.push(smo287853);
const smo287854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo287854.setAttribute('id', 'smo287854');
const smo287855 = new VF.Annotation('ki');
smo287855.setAttribute('id', 'smo287855');
smo287855.setFont('times', 12, 'normal');
smo287855.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287854.addModifier(smo287855);
smo287855.addClass('lyric lyric-0 lyric-hyphen');
smo287873v0ar.push(smo287854);
const smo287856 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo287856.setAttribute('id', 'smo287856');
const smo287857 = new VF.Annotation('ri');
smo287857.setAttribute('id', 'smo287857');
smo287857.setFont('times', 12, 'normal');
smo287857.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo287856.addModifier(smo287857);
smo287857.addClass('lyric lyric-0');
smo287873v0ar.push(smo287856);
smo287873v0.addTickables(smo287873v0ar)
fmtsmo28787371.joinVoices([smo287873v0]);
const fmtsmo29095971 = new VF.Formatter();
//
// voices and notes for stave 8 71
const smo290959v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290959v0ar = [];
const smo290935 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo290935.setAttribute('id', 'smo290935');
smo290959v0ar.push(smo290935);
const smo290936 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo290936.setAttribute('id', 'smo290936');
smo290959v0ar.push(smo290936);
const smo290937 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo290937.setAttribute('id', 'smo290937');
const smo290938 = new VF.Annotation('Ki');
smo290938.setAttribute('id', 'smo290938');
smo290938.setFont('times', 12, 'normal');
smo290938.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290937.addModifier(smo290938);
smo290938.addClass('lyric lyric-0 lyric-hyphen');
smo290959v0ar.push(smo290937);
const smo290939 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo290939.setAttribute('id', 'smo290939');
smo290959v0ar.push(smo290939);
const smo290940 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo290940.setAttribute('id', 'smo290940');
const smo290941 = new VF.Annotation('ki');
smo290941.setAttribute('id', 'smo290941');
smo290941.setFont('times', 12, 'normal');
smo290941.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290940.addModifier(smo290941);
smo290941.addClass('lyric lyric-0 lyric-hyphen');
smo290959v0ar.push(smo290940);
const smo290942 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo290942.setAttribute('id', 'smo290942');
const smo290943 = new VF.Annotation('ri');
smo290943.setAttribute('id', 'smo290943');
smo290943.setFont('times', 12, 'normal');
smo290943.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo290942.addModifier(smo290943);
smo290943.addClass('lyric lyric-0');
smo290959v0ar.push(smo290942);
smo290959v0.addTickables(smo290959v0ar)
fmtsmo29095971.joinVoices([smo290959v0]);
const fmtsmo29404871 = new VF.Formatter();
//
// voices and notes for stave 9 71
const smo294048v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo294048v0ar = [];
const smo294024 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo294024.setAttribute('id', 'smo294024');
smo294048v0ar.push(smo294024);
const smo294025 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo294025.setAttribute('id', 'smo294025');
smo294048v0ar.push(smo294025);
const smo294026 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo294026.setAttribute('id', 'smo294026');
const smo294027 = new VF.Annotation('Ki');
smo294027.setAttribute('id', 'smo294027');
smo294027.setFont('times', 12, 'normal');
smo294027.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo294026.addModifier(smo294027);
smo294027.addClass('lyric lyric-0 lyric-hyphen');
smo294048v0ar.push(smo294026);
const smo294028 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo294028.setAttribute('id', 'smo294028');
smo294048v0ar.push(smo294028);
const smo294029 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo294029.setAttribute('id', 'smo294029');
const smo294030 = new VF.Annotation('ki');
smo294030.setAttribute('id', 'smo294030');
smo294030.setFont('times', 12, 'normal');
smo294030.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo294029.addModifier(smo294030);
smo294030.addClass('lyric lyric-0 lyric-hyphen');
smo294048v0ar.push(smo294029);
const smo294031 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo294031.setAttribute('id', 'smo294031');
const smo294032 = new VF.Annotation('ri');
smo294032.setAttribute('id', 'smo294032');
smo294032.setFont('times', 12, 'normal');
smo294032.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo294031.addModifier(smo294032);
smo294032.addClass('lyric lyric-0');
smo294048v0ar.push(smo294031);
smo294048v0.addTickables(smo294048v0ar)
fmtsmo29404871.joinVoices([smo294048v0]);
const fmtsmo29708871 = new VF.Formatter();
//
// voices and notes for stave 10 71
const smo297088v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo297088v0ar = [];
const smo297064 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo297064.setAttribute('id', 'smo297064');
smo297088v0ar.push(smo297064);
const smo297065 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo297065.setAttribute('id', 'smo297065');
smo297088v0ar.push(smo297065);
const smo297066 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo297066.setAttribute('id', 'smo297066');
const smo297067 = new VF.Annotation('Ki');
smo297067.setAttribute('id', 'smo297067');
smo297067.setFont('times', 12, 'normal');
smo297067.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo297066.addModifier(smo297067);
smo297067.addClass('lyric lyric-0 lyric-hyphen');
smo297088v0ar.push(smo297066);
const smo297068 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo297068.setAttribute('id', 'smo297068');
smo297088v0ar.push(smo297068);
const smo297069 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo297069.setAttribute('id', 'smo297069');
const smo297070 = new VF.Annotation('ki');
smo297070.setAttribute('id', 'smo297070');
smo297070.setFont('times', 12, 'normal');
smo297070.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo297069.addModifier(smo297070);
smo297070.addClass('lyric lyric-0 lyric-hyphen');
smo297088v0ar.push(smo297069);
const smo297071 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo297071.setAttribute('id', 'smo297071');
const smo297072 = new VF.Annotation('ri');
smo297072.setAttribute('id', 'smo297072');
smo297072.setFont('times', 12, 'normal');
smo297072.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo297071.addModifier(smo297072);
smo297072.addClass('lyric lyric-0');
smo297088v0ar.push(smo297071);
smo297088v0.addTickables(smo297088v0ar)
fmtsmo29708871.joinVoices([smo297088v0]);
const fmtsmo30014271 = new VF.Formatter();
//
// voices and notes for stave 11 71
const smo300142v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300142v0ar = [];
const smo300118 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo300118.setAttribute('id', 'smo300118');
smo300142v0ar.push(smo300118);
const smo300119 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo300119.setAttribute('id', 'smo300119');
smo300142v0ar.push(smo300119);
const smo300120 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo300120.setAttribute('id', 'smo300120');
const smo300121 = new VF.Annotation('Ki');
smo300121.setAttribute('id', 'smo300121');
smo300121.setFont('times', 12, 'normal');
smo300121.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo300120.addModifier(smo300121);
smo300121.addClass('lyric lyric-0 lyric-hyphen');
smo300142v0ar.push(smo300120);
const smo300122 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo300122.setAttribute('id', 'smo300122');
smo300142v0ar.push(smo300122);
const smo300123 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo300123.setAttribute('id', 'smo300123');
const smo300124 = new VF.Annotation('ki');
smo300124.setAttribute('id', 'smo300124');
smo300124.setFont('times', 12, 'normal');
smo300124.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo300123.addModifier(smo300124);
smo300124.addClass('lyric lyric-0 lyric-hyphen');
smo300142v0ar.push(smo300123);
const smo300125 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo300125.setAttribute('id', 'smo300125');
const smo300126 = new VF.Annotation('ri');
smo300126.setAttribute('id', 'smo300126');
smo300126.setFont('times', 12, 'normal');
smo300126.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo300125.addModifier(smo300126);
smo300126.addClass('lyric lyric-0');
smo300142v0ar.push(smo300125);
smo300142v0.addTickables(smo300142v0ar)
fmtsmo30014271.joinVoices([smo300142v0]);
const fmtsmo30318571 = new VF.Formatter();
//
// voices and notes for stave 12 71
const smo303185v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo303185v0ar = [];
const smo303161 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo303161.setAttribute('id', 'smo303161');
smo303185v0ar.push(smo303161);
const smo303162 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo303162.setAttribute('id', 'smo303162');
smo303185v0ar.push(smo303162);
const smo303163 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo303163.setAttribute('id', 'smo303163');
const smo303164 = new VF.Annotation('Ki');
smo303164.setAttribute('id', 'smo303164');
smo303164.setFont('times', 12, 'normal');
smo303164.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo303163.addModifier(smo303164);
smo303164.addClass('lyric lyric-0 lyric-hyphen');
smo303185v0ar.push(smo303163);
const smo303165 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo303165.setAttribute('id', 'smo303165');
smo303185v0ar.push(smo303165);
const smo303166 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo303166.setAttribute('id', 'smo303166');
const smo303167 = new VF.Annotation('ki');
smo303167.setAttribute('id', 'smo303167');
smo303167.setFont('times', 12, 'normal');
smo303167.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo303166.addModifier(smo303167);
smo303167.addClass('lyric lyric-0 lyric-hyphen');
smo303185v0ar.push(smo303166);
const smo303168 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo303168.setAttribute('id', 'smo303168');
const smo303169 = new VF.Annotation('ri');
smo303169.setAttribute('id', 'smo303169');
smo303169.setFont('times', 12, 'normal');
smo303169.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo303168.addModifier(smo303169);
smo303169.addClass('lyric lyric-0');
smo303185v0ar.push(smo303168);
smo303185v0.addTickables(smo303185v0ar)
fmtsmo30318571.joinVoices([smo303185v0]);
const fmtsmo30637671 = new VF.Formatter();
//
// voices and notes for stave 13 71
const smo306376v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo306376v0ar = [];
const smo306360 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo306360.setAttribute('id', 'smo306360');
smo306376v0ar.push(smo306360);
smo306376v0.addTickables(smo306376v0ar)
fmtsmo30637671.joinVoices([smo306376v0]);
const fmtsmo30958971 = new VF.Formatter();
//
// voices and notes for stave 14 71
const smo309589v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo309589v0ar = [];
const smo309573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo309573.setAttribute('id', 'smo309573');
smo309589v0ar.push(smo309573);
smo309589v0.addTickables(smo309589v0ar)
fmtsmo30958971.joinVoices([smo309589v0]);
const fmtsmo31278471 = new VF.Formatter();
//
// voices and notes for stave 15 71
const smo312784v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo312784v0ar = [];
const smo312768 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo312768.setAttribute('id', 'smo312768');
smo312784v0ar.push(smo312768);
smo312784v0.addTickables(smo312784v0ar)
fmtsmo31278471.joinVoices([smo312784v0]);
const fmtsmo31590971 = new VF.Formatter();
//
// voices and notes for stave 16 71
const smo315909v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo315909v0ar = [];
const smo315890 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo315890.setAttribute('id', 'smo315890');
smo315909v0ar.push(smo315890);
const smo315891 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo315891.setAttribute('id', 'smo315891');
smo315909v0ar.push(smo315891);
const smo315892 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo315892.setAttribute('id', 'smo315892');
smo315909v0ar.push(smo315892);
const smo315893 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo315893.setAttribute('id', 'smo315893');
smo315909v0ar.push(smo315893);
smo315909v0.addTickables(smo315909v0ar)
fmtsmo31590971.joinVoices([smo315909v0]);
const fmtsmo31910871 = new VF.Formatter();
//
// voices and notes for stave 17 71
const smo319108v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo319108v0ar = [];
const smo319089 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo319089.setAttribute('id', 'smo319089');
smo319108v0ar.push(smo319089);
const smo319090 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo319090.setAttribute('id', 'smo319090');
smo319090.setStyle({ fillStyle: "#ffffff00" });
smo319108v0ar.push(smo319090);
smo319108v0.addTickables(smo319108v0ar)
fmtsmo31910871.joinVoices([smo319108v0]);
const smo319108v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo319108v1ar = [];
const smo319091 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo319091.setAttribute('id', 'smo319091');
smo319091.setStyle({ fillStyle: '#aaaaaa7f' });
smo319108v1ar.push(smo319091);
const smo319092 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo319092.setAttribute('id', 'smo319092');
smo319092.setStyle({ fillStyle: "#115511" });
smo319108v1ar.push(smo319092);
smo319108v1.addTickables(smo319108v1ar)
fmtsmo31910871.joinVoices([smo319108v1]);
// create beam groups and tuplets for format grp smo320731 before formatting
const dirsmo412399 = smo266251.getStemDirection();
smo266251.setStemDirection(dirsmo412399);
smo266253.setStemDirection(dirsmo412399);
const smo412399 = new VF.Beam([smo266251,smo266253]);
const dirsmo412402 = smo269244.getStemDirection();
smo269244.setStemDirection(dirsmo412402);
smo269246.setStemDirection(dirsmo412402);
const smo412402 = new VF.Beam([smo269244,smo269246]);
const dirsmo412405 = smo272388.getStemDirection();
smo272388.setStemDirection(dirsmo412405);
smo272390.setStemDirection(dirsmo412405);
const smo412405 = new VF.Beam([smo272388,smo272390]);
const dirsmo412408 = smo275504.getStemDirection();
smo275504.setStemDirection(dirsmo412408);
smo275506.setStemDirection(dirsmo412408);
const smo412408 = new VF.Beam([smo275504,smo275506]);
const dirsmo412411 = smo278523.getStemDirection();
smo278523.setStemDirection(dirsmo412411);
smo278525.setStemDirection(dirsmo412411);
const smo412411 = new VF.Beam([smo278523,smo278525]);
 
// formatting measures in staff group smo320731
fmtsmo26627371.format([smo266273v0,smo269266v0,smo272410v0,smo275526v0,smo278545v0], 288);
const stavesmo266273 = new VF.Stave(2643, 210, 302);
stavesmo266273.setAttribute('id', 'stavesmo266273');
stavesmo266273.setBegBarType(VF.Barline.type.NONE);
stavesmo266273.setContext(context);
stavesmo266273.draw();
smo266273v0.draw(context, stavesmo266273);
smo412399.setContext(context);
smo412399.draw();
const stavesmo269266 = new VF.Stave(2643, 316, 302);
stavesmo269266.setAttribute('id', 'stavesmo269266');
stavesmo269266.setBegBarType(VF.Barline.type.NONE);
stavesmo269266.setContext(context);
stavesmo269266.draw();
smo269266v0.draw(context, stavesmo269266);
smo412402.setContext(context);
smo412402.draw();
const stavesmo272410 = new VF.Stave(2643, 437, 302);
stavesmo272410.setAttribute('id', 'stavesmo272410');
stavesmo272410.setBegBarType(VF.Barline.type.NONE);
stavesmo272410.setContext(context);
stavesmo272410.draw();
smo272410v0.draw(context, stavesmo272410);
smo412405.setContext(context);
smo412405.draw();
const stavesmo275526 = new VF.Stave(2643, 553, 302);
stavesmo275526.setAttribute('id', 'stavesmo275526');
stavesmo275526.setBegBarType(VF.Barline.type.NONE);
stavesmo275526.setContext(context);
stavesmo275526.draw();
smo275526v0.draw(context, stavesmo275526);
smo412408.setContext(context);
smo412408.draw();
const stavesmo278545 = new VF.Stave(2643, 659, 302);
stavesmo278545.setAttribute('id', 'stavesmo278545');
stavesmo278545.setBegBarType(VF.Barline.type.NONE);
stavesmo278545.setContext(context);
stavesmo278545.draw();
smo278545v0.draw(context, stavesmo278545);
smo412411.setContext(context);
smo412411.draw();
// create beam groups and tuplets for format grp smo320733 before formatting
const dirsmo412414 = smo281639.getStemDirection();
smo281639.setStemDirection(dirsmo412414);
smo281641.setStemDirection(dirsmo412414);
const smo412414 = new VF.Beam([smo281639,smo281641]);
const dirsmo412417 = smo284742.getStemDirection();
smo284742.setStemDirection(dirsmo412417);
smo284744.setStemDirection(dirsmo412417);
const smo412417 = new VF.Beam([smo284742,smo284744]);
const dirsmo412420 = smo287851.getStemDirection();
smo287851.setStemDirection(dirsmo412420);
smo287853.setStemDirection(dirsmo412420);
const smo412420 = new VF.Beam([smo287851,smo287853]);
const dirsmo412423 = smo290937.getStemDirection();
smo290937.setStemDirection(dirsmo412423);
smo290939.setStemDirection(dirsmo412423);
const smo412423 = new VF.Beam([smo290937,smo290939]);
 
// formatting measures in staff group smo320733
fmtsmo28166171.format([smo281661v0,smo284764v0,smo287873v0,smo290959v0], 288);
const stavesmo281661 = new VF.Stave(2643, 780, 302);
stavesmo281661.setAttribute('id', 'stavesmo281661');
stavesmo281661.setBegBarType(VF.Barline.type.NONE);
stavesmo281661.setContext(context);
stavesmo281661.draw();
smo281661v0.draw(context, stavesmo281661);
smo412414.setContext(context);
smo412414.draw();
const stavesmo284764 = new VF.Stave(2643, 896, 302);
stavesmo284764.setAttribute('id', 'stavesmo284764');
stavesmo284764.setBegBarType(VF.Barline.type.NONE);
stavesmo284764.setContext(context);
stavesmo284764.draw();
smo284764v0.draw(context, stavesmo284764);
smo412417.setContext(context);
smo412417.draw();
const stavesmo287873 = new VF.Stave(2643, 1012, 302);
stavesmo287873.setAttribute('id', 'stavesmo287873');
stavesmo287873.setBegBarType(VF.Barline.type.NONE);
stavesmo287873.setContext(context);
stavesmo287873.draw();
smo287873v0.draw(context, stavesmo287873);
smo412420.setContext(context);
smo412420.draw();
const stavesmo290959 = new VF.Stave(2643, 1128, 302);
stavesmo290959.setAttribute('id', 'stavesmo290959');
stavesmo290959.setBegBarType(VF.Barline.type.NONE);
stavesmo290959.setContext(context);
stavesmo290959.draw();
smo290959v0.draw(context, stavesmo290959);
smo412423.setContext(context);
smo412423.draw();
// create beam groups and tuplets for format grp smo320735 before formatting
const dirsmo412426 = smo294026.getStemDirection();
smo294026.setStemDirection(dirsmo412426);
smo294028.setStemDirection(dirsmo412426);
const smo412426 = new VF.Beam([smo294026,smo294028]);
const dirsmo412429 = smo297066.getStemDirection();
smo297066.setStemDirection(dirsmo412429);
smo297068.setStemDirection(dirsmo412429);
const smo412429 = new VF.Beam([smo297066,smo297068]);
const dirsmo412432 = smo300120.getStemDirection();
smo300120.setStemDirection(dirsmo412432);
smo300122.setStemDirection(dirsmo412432);
const smo412432 = new VF.Beam([smo300120,smo300122]);
const dirsmo412435 = smo303163.getStemDirection();
smo303163.setStemDirection(dirsmo412435);
smo303165.setStemDirection(dirsmo412435);
const smo412435 = new VF.Beam([smo303163,smo303165]);
 
// formatting measures in staff group smo320735
fmtsmo29404871.format([smo294048v0,smo297088v0,smo300142v0,smo303185v0], 288);
const stavesmo294048 = new VF.Stave(2643, 1264, 302);
stavesmo294048.setAttribute('id', 'stavesmo294048');
stavesmo294048.setBegBarType(VF.Barline.type.NONE);
stavesmo294048.setContext(context);
stavesmo294048.draw();
smo294048v0.draw(context, stavesmo294048);
smo412426.setContext(context);
smo412426.draw();
const stavesmo297088 = new VF.Stave(2643, 1400, 302);
stavesmo297088.setAttribute('id', 'stavesmo297088');
stavesmo297088.setBegBarType(VF.Barline.type.NONE);
stavesmo297088.setContext(context);
stavesmo297088.draw();
smo297088v0.draw(context, stavesmo297088);
smo412429.setContext(context);
smo412429.draw();
const stavesmo300142 = new VF.Stave(2643, 1536, 302);
stavesmo300142.setAttribute('id', 'stavesmo300142');
stavesmo300142.setBegBarType(VF.Barline.type.NONE);
stavesmo300142.setContext(context);
stavesmo300142.draw();
smo300142v0.draw(context, stavesmo300142);
smo412432.setContext(context);
smo412432.draw();
const stavesmo303185 = new VF.Stave(2643, 1672, 302);
stavesmo303185.setAttribute('id', 'stavesmo303185');
stavesmo303185.setBegBarType(VF.Barline.type.NONE);
stavesmo303185.setContext(context);
stavesmo303185.draw();
smo303185v0.draw(context, stavesmo303185);
smo412435.setContext(context);
smo412435.draw();
// create beam groups and tuplets for format grp smo308054 before formatting
 
// formatting measures in staff group smo308054
fmtsmo30637671.format([smo306376v0], 288);
const stavesmo306376 = new VF.Stave(2643, 1818, 302);
stavesmo306376.setAttribute('id', 'stavesmo306376');
stavesmo306376.setBegBarType(VF.Barline.type.NONE);
stavesmo306376.setContext(context);
stavesmo306376.draw();
smo306376v0.draw(context, stavesmo306376);
// create beam groups and tuplets for format grp smo320729 before formatting
 
// formatting measures in staff group smo320729
fmtsmo30958971.format([smo309589v0,smo312784v0], 288);
const stavesmo309589 = new VF.Stave(2643, 1924, 302);
stavesmo309589.setAttribute('id', 'stavesmo309589');
stavesmo309589.setBegBarType(VF.Barline.type.NONE);
stavesmo309589.setContext(context);
stavesmo309589.draw();
smo309589v0.draw(context, stavesmo309589);
const stavesmo312784 = new VF.Stave(2643, 2010, 302);
stavesmo312784.setAttribute('id', 'stavesmo312784');
stavesmo312784.setBegBarType(VF.Barline.type.NONE);
stavesmo312784.setContext(context);
stavesmo312784.draw();
smo312784v0.draw(context, stavesmo312784);
// create beam groups and tuplets for format grp smo317567 before formatting
 
// formatting measures in staff group smo317567
fmtsmo31590971.format([smo315909v0], 288);
const stavesmo315909 = new VF.Stave(2643, 2081, 302);
stavesmo315909.setAttribute('id', 'stavesmo315909');
stavesmo315909.setBegBarType(VF.Barline.type.NONE);
stavesmo315909.setContext(context);
stavesmo315909.draw();
smo315909v0.draw(context, stavesmo315909);
// create beam groups and tuplets for format grp smo320723 before formatting
 
// formatting measures in staff group smo320723
fmtsmo31910871.format([smo319108v0,smo319108v1], 288);
const stavesmo319108 = new VF.Stave(2643, 2152, 302);
stavesmo319108.setAttribute('id', 'stavesmo319108');
stavesmo319108.setBegBarType(VF.Barline.type.NONE);
stavesmo319108.setContext(context);
stavesmo319108.draw();
smo319108v0.draw(context, stavesmo319108);
smo319108v1.draw(context, stavesmo319108);
const rightsmo320723stavesmo26627317 = new VF.StaveConnector(stavesmo266273, stavesmo278545).setType(0);
rightsmo320723stavesmo26627317.setContext(context).draw();
const rightsmo320723stavesmo28166117 = new VF.StaveConnector(stavesmo281661, stavesmo290959).setType(0);
rightsmo320723stavesmo28166117.setContext(context).draw();
const rightsmo320723stavesmo29404817 = new VF.StaveConnector(stavesmo294048, stavesmo303185).setType(0);
rightsmo320723stavesmo29404817.setContext(context).draw();
const rightsmo320723stavesmo30958917 = new VF.StaveConnector(stavesmo309589, stavesmo312784).setType(0);
rightsmo320723stavesmo30958917.setContext(context).draw();
// modifier from 0-63-0-2 to 0-63-0-3
const smo421809 = new VF.StaveTie({ first_note: smo266071, last_note: smo266073, 
          firstNote: smo266071, lastNote: smo266073, first_indices: [0], last_indices: [0]});
smo421809.setContext(context).draw();
// modifier from 0-64-0-3 to 0-64-0-4
const smo421810 = new VF.StaveTie({ first_note: smo266099, last_note: smo266101, 
          firstNote: smo266099, lastNote: smo266101, first_indices: [0], last_indices: [0]});
smo421810.setContext(context).draw();
// modifier from 0-64-0-5 to 0-65-0-0
const smo421811 = new VF.StaveTie({ first_note: smo266102, last_note: smo266120, 
          firstNote: smo266102, lastNote: smo266120, first_indices: [0], last_indices: [0]});
smo421811.setContext(context).draw();
// modifier from 0-65-0-3 to 0-65-0-4
const smo421812 = new VF.StaveTie({ first_note: smo266124, last_note: smo266126, 
          firstNote: smo266124, lastNote: smo266126, first_indices: [0], last_indices: [0]});
smo421812.setContext(context).draw();
// modifier from 0-66-0-4 to 0-66-0-5
const smo421813 = new VF.StaveTie({ first_note: smo266155, last_note: smo266157, 
          firstNote: smo266155, lastNote: smo266157, first_indices: [0], last_indices: [0]});
smo421813.setContext(context).draw();
// modifier from 0-66-0-6 to 0-67-0-0
const smo421814 = new VF.StaveTie({ first_note: smo266158, last_note: smo266176, 
          firstNote: smo266158, lastNote: smo266176, first_indices: [0], last_indices: [0]});
smo421814.setContext(context).draw();
// modifier from 0-71-0-2 to 0-71-0-3
const smo421815 = new VF.StaveTie({ first_note: smo266251, last_note: smo266253, 
          firstNote: smo266251, lastNote: smo266253, first_indices: [0], last_indices: [0]});
smo421815.setContext(context).draw();
// modifier from 1-63-0-2 to 1-63-0-3
const smo421816 = new VF.StaveTie({ first_note: smo269065, last_note: smo269067, 
          firstNote: smo269065, lastNote: smo269067, first_indices: [0], last_indices: [0]});
smo421816.setContext(context).draw();
// modifier from 1-64-0-3 to 1-64-0-4
const smo421817 = new VF.StaveTie({ first_note: smo269093, last_note: smo269095, 
          firstNote: smo269093, lastNote: smo269095, first_indices: [0], last_indices: [0]});
smo421817.setContext(context).draw();
// modifier from 1-64-0-5 to 1-65-0-0
const smo421818 = new VF.StaveTie({ first_note: smo269096, last_note: smo269114, 
          firstNote: smo269096, lastNote: smo269114, first_indices: [0], last_indices: [0]});
smo421818.setContext(context).draw();
// modifier from 1-65-0-3 to 1-65-0-4
const smo421819 = new VF.StaveTie({ first_note: smo269118, last_note: smo269120, 
          firstNote: smo269118, lastNote: smo269120, first_indices: [0], last_indices: [0]});
smo421819.setContext(context).draw();
// modifier from 1-66-0-4 to 1-66-0-5
const smo421820 = new VF.StaveTie({ first_note: smo269149, last_note: smo269151, 
          firstNote: smo269149, lastNote: smo269151, first_indices: [0], last_indices: [0]});
smo421820.setContext(context).draw();
// modifier from 1-66-0-6 to 1-67-0-0
const smo421821 = new VF.StaveTie({ first_note: smo269152, last_note: smo269170, 
          firstNote: smo269152, lastNote: smo269170, first_indices: [0], last_indices: [0]});
smo421821.setContext(context).draw();
// modifier from 1-71-0-2 to 1-71-0-3
const smo421822 = new VF.StaveTie({ first_note: smo269244, last_note: smo269246, 
          firstNote: smo269244, lastNote: smo269246, first_indices: [0], last_indices: [0]});
smo421822.setContext(context).draw();
// modifier from 2-63-0-2 to 2-63-0-3
const smo421823 = new VF.StaveTie({ first_note: smo272208, last_note: smo272210, 
          firstNote: smo272208, lastNote: smo272210, first_indices: [0], last_indices: [0]});
smo421823.setContext(context).draw();
// modifier from 2-64-0-3 to 2-64-0-4
const smo421824 = new VF.StaveTie({ first_note: smo272236, last_note: smo272238, 
          firstNote: smo272236, lastNote: smo272238, first_indices: [0], last_indices: [0]});
smo421824.setContext(context).draw();
// modifier from 2-64-0-5 to 2-65-0-0
const smo421825 = new VF.StaveTie({ first_note: smo272239, last_note: smo272257, 
          firstNote: smo272239, lastNote: smo272257, first_indices: [0], last_indices: [0]});
smo421825.setContext(context).draw();
// modifier from 2-65-0-3 to 2-65-0-4
const smo421826 = new VF.StaveTie({ first_note: smo272261, last_note: smo272263, 
          firstNote: smo272261, lastNote: smo272263, first_indices: [0], last_indices: [0]});
smo421826.setContext(context).draw();
// modifier from 2-66-0-4 to 2-66-0-5
const smo421827 = new VF.StaveTie({ first_note: smo272292, last_note: smo272294, 
          firstNote: smo272292, lastNote: smo272294, first_indices: [0], last_indices: [0]});
smo421827.setContext(context).draw();
// modifier from 2-66-0-6 to 2-67-0-0
const smo421828 = new VF.StaveTie({ first_note: smo272295, last_note: smo272313, 
          firstNote: smo272295, lastNote: smo272313, first_indices: [0], last_indices: [0]});
smo421828.setContext(context).draw();
// modifier from 2-71-0-2 to 2-71-0-3
const smo421829 = new VF.StaveTie({ first_note: smo272388, last_note: smo272390, 
          firstNote: smo272388, lastNote: smo272390, first_indices: [0], last_indices: [0]});
smo421829.setContext(context).draw();
// modifier from 3-63-0-2 to 3-63-0-3
const smo421830 = new VF.StaveTie({ first_note: smo275324, last_note: smo275326, 
          firstNote: smo275324, lastNote: smo275326, first_indices: [0], last_indices: [0]});
smo421830.setContext(context).draw();
// modifier from 3-64-0-3 to 3-64-0-4
const smo421831 = new VF.StaveTie({ first_note: smo275352, last_note: smo275354, 
          firstNote: smo275352, lastNote: smo275354, first_indices: [0], last_indices: [0]});
smo421831.setContext(context).draw();
// modifier from 3-64-0-5 to 3-65-0-0
const smo421832 = new VF.StaveTie({ first_note: smo275355, last_note: smo275373, 
          firstNote: smo275355, lastNote: smo275373, first_indices: [0], last_indices: [0]});
smo421832.setContext(context).draw();
// modifier from 3-65-0-3 to 3-65-0-4
const smo421833 = new VF.StaveTie({ first_note: smo275377, last_note: smo275379, 
          firstNote: smo275377, lastNote: smo275379, first_indices: [0], last_indices: [0]});
smo421833.setContext(context).draw();
// modifier from 3-66-0-4 to 3-66-0-5
const smo421834 = new VF.StaveTie({ first_note: smo275408, last_note: smo275410, 
          firstNote: smo275408, lastNote: smo275410, first_indices: [0], last_indices: [0]});
smo421834.setContext(context).draw();
// modifier from 3-66-0-6 to 3-67-0-0
const smo421835 = new VF.StaveTie({ first_note: smo275411, last_note: smo275429, 
          firstNote: smo275411, lastNote: smo275429, first_indices: [0], last_indices: [0]});
smo421835.setContext(context).draw();
// modifier from 3-71-0-2 to 3-71-0-3
const smo421836 = new VF.StaveTie({ first_note: smo275504, last_note: smo275506, 
          firstNote: smo275504, lastNote: smo275506, first_indices: [0], last_indices: [0]});
smo421836.setContext(context).draw();
// modifier from 4-63-0-2 to 4-63-0-3
const smo421837 = new VF.StaveTie({ first_note: smo278343, last_note: smo278345, 
          firstNote: smo278343, lastNote: smo278345, first_indices: [0], last_indices: [0]});
smo421837.setContext(context).draw();
// modifier from 4-64-0-3 to 4-64-0-4
const smo421838 = new VF.StaveTie({ first_note: smo278371, last_note: smo278373, 
          firstNote: smo278371, lastNote: smo278373, first_indices: [0], last_indices: [0]});
smo421838.setContext(context).draw();
// modifier from 4-64-0-5 to 4-65-0-0
const smo421839 = new VF.StaveTie({ first_note: smo278374, last_note: smo278392, 
          firstNote: smo278374, lastNote: smo278392, first_indices: [0], last_indices: [0]});
smo421839.setContext(context).draw();
// modifier from 4-65-0-3 to 4-65-0-4
const smo421840 = new VF.StaveTie({ first_note: smo278396, last_note: smo278398, 
          firstNote: smo278396, lastNote: smo278398, first_indices: [0], last_indices: [0]});
smo421840.setContext(context).draw();
// modifier from 4-66-0-4 to 4-66-0-5
const smo421841 = new VF.StaveTie({ first_note: smo278427, last_note: smo278429, 
          firstNote: smo278427, lastNote: smo278429, first_indices: [0], last_indices: [0]});
smo421841.setContext(context).draw();
// modifier from 4-66-0-6 to 4-67-0-0
const smo421842 = new VF.StaveTie({ first_note: smo278430, last_note: smo278448, 
          firstNote: smo278430, lastNote: smo278448, first_indices: [0], last_indices: [0]});
smo421842.setContext(context).draw();
// modifier from 4-71-0-2 to 4-71-0-3
const smo421843 = new VF.StaveTie({ first_note: smo278523, last_note: smo278525, 
          firstNote: smo278523, lastNote: smo278525, first_indices: [0], last_indices: [0]});
smo421843.setContext(context).draw();
// modifier from 5-63-0-3 to 5-63-0-4
const smo421844 = new VF.StaveTie({ first_note: smo281450, last_note: smo281452, 
          firstNote: smo281450, lastNote: smo281452, first_indices: [0], last_indices: [0]});
smo421844.setContext(context).draw();
// modifier from 5-64-0-3 to 5-64-0-4
const smo421845 = new VF.StaveTie({ first_note: smo281478, last_note: smo281480, 
          firstNote: smo281478, lastNote: smo281480, first_indices: [0], last_indices: [0]});
smo421845.setContext(context).draw();
// modifier from 5-64-0-5 to 5-65-0-0
const smo421846 = new VF.StaveTie({ first_note: smo281481, last_note: smo281499, 
          firstNote: smo281481, lastNote: smo281499, first_indices: [0], last_indices: [0]});
smo421846.setContext(context).draw();
// modifier from 5-65-0-3 to 5-65-0-4
const smo421847 = new VF.StaveTie({ first_note: smo281503, last_note: smo281505, 
          firstNote: smo281503, lastNote: smo281505, first_indices: [0], last_indices: [0]});
smo421847.setContext(context).draw();
// modifier from 5-66-0-4 to 5-66-0-5
const smo421848 = new VF.StaveTie({ first_note: smo281534, last_note: smo281536, 
          firstNote: smo281534, lastNote: smo281536, first_indices: [0], last_indices: [0]});
smo421848.setContext(context).draw();
// modifier from 5-66-0-6 to 5-67-0-0
const smo421849 = new VF.StaveTie({ first_note: smo281537, last_note: smo281555, 
          firstNote: smo281537, lastNote: smo281555, first_indices: [0], last_indices: [0]});
smo421849.setContext(context).draw();
// modifier from 5-71-0-2 to 5-71-0-3
const smo421850 = new VF.StaveTie({ first_note: smo281639, last_note: smo281641, 
          firstNote: smo281639, lastNote: smo281641, first_indices: [0], last_indices: [0]});
smo421850.setContext(context).draw();
// modifier from 6-63-0-2 to 6-63-0-3
const smo421851 = new VF.StaveTie({ first_note: smo284562, last_note: smo284564, 
          firstNote: smo284562, lastNote: smo284564, first_indices: [0], last_indices: [0]});
smo421851.setContext(context).draw();
// modifier from 6-64-0-3 to 6-64-0-4
const smo421852 = new VF.StaveTie({ first_note: smo284590, last_note: smo284592, 
          firstNote: smo284590, lastNote: smo284592, first_indices: [0], last_indices: [0]});
smo421852.setContext(context).draw();
// modifier from 6-64-0-5 to 6-65-0-0
const smo421853 = new VF.StaveTie({ first_note: smo284593, last_note: smo284611, 
          firstNote: smo284593, lastNote: smo284611, first_indices: [0], last_indices: [0]});
smo421853.setContext(context).draw();
// modifier from 6-65-0-3 to 6-65-0-4
const smo421854 = new VF.StaveTie({ first_note: smo284615, last_note: smo284617, 
          firstNote: smo284615, lastNote: smo284617, first_indices: [0], last_indices: [0]});
smo421854.setContext(context).draw();
// modifier from 6-66-0-4 to 6-66-0-5
const smo421855 = new VF.StaveTie({ first_note: smo284646, last_note: smo284648, 
          firstNote: smo284646, lastNote: smo284648, first_indices: [0], last_indices: [0]});
smo421855.setContext(context).draw();
// modifier from 6-66-0-6 to 6-67-0-0
const smo421856 = new VF.StaveTie({ first_note: smo284649, last_note: smo284667, 
          firstNote: smo284649, lastNote: smo284667, first_indices: [0], last_indices: [0]});
smo421856.setContext(context).draw();
// modifier from 6-71-0-2 to 6-71-0-3
const smo421857 = new VF.StaveTie({ first_note: smo284742, last_note: smo284744, 
          firstNote: smo284742, lastNote: smo284744, first_indices: [0], last_indices: [0]});
smo421857.setContext(context).draw();
// modifier from 7-63-0-2 to 7-63-0-3
const smo421858 = new VF.StaveTie({ first_note: smo287671, last_note: smo287673, 
          firstNote: smo287671, lastNote: smo287673, first_indices: [0], last_indices: [0]});
smo421858.setContext(context).draw();
// modifier from 7-64-0-3 to 7-64-0-4
const smo421859 = new VF.StaveTie({ first_note: smo287699, last_note: smo287701, 
          firstNote: smo287699, lastNote: smo287701, first_indices: [0], last_indices: [0]});
smo421859.setContext(context).draw();
// modifier from 7-64-0-5 to 7-65-0-0
const smo421860 = new VF.StaveTie({ first_note: smo287702, last_note: smo287720, 
          firstNote: smo287702, lastNote: smo287720, first_indices: [0], last_indices: [0]});
smo421860.setContext(context).draw();
// modifier from 7-65-0-3 to 7-65-0-4
const smo421861 = new VF.StaveTie({ first_note: smo287724, last_note: smo287726, 
          firstNote: smo287724, lastNote: smo287726, first_indices: [0], last_indices: [0]});
smo421861.setContext(context).draw();
// modifier from 7-66-0-4 to 7-66-0-5
const smo421862 = new VF.StaveTie({ first_note: smo287755, last_note: smo287757, 
          firstNote: smo287755, lastNote: smo287757, first_indices: [0], last_indices: [0]});
smo421862.setContext(context).draw();
// modifier from 7-66-0-6 to 7-67-0-0
const smo421863 = new VF.StaveTie({ first_note: smo287758, last_note: smo287776, 
          firstNote: smo287758, lastNote: smo287776, first_indices: [0], last_indices: [0]});
smo421863.setContext(context).draw();
// modifier from 7-71-0-2 to 7-71-0-3
const smo421864 = new VF.StaveTie({ first_note: smo287851, last_note: smo287853, 
          firstNote: smo287851, lastNote: smo287853, first_indices: [0], last_indices: [0]});
smo421864.setContext(context).draw();
// modifier from 8-63-0-2 to 8-63-0-3
const smo421865 = new VF.StaveTie({ first_note: smo290757, last_note: smo290759, 
          firstNote: smo290757, lastNote: smo290759, first_indices: [0], last_indices: [0]});
smo421865.setContext(context).draw();
// modifier from 8-64-0-3 to 8-64-0-4
const smo421866 = new VF.StaveTie({ first_note: smo290785, last_note: smo290787, 
          firstNote: smo290785, lastNote: smo290787, first_indices: [0], last_indices: [0]});
smo421866.setContext(context).draw();
// modifier from 8-64-0-5 to 8-65-0-0
const smo421867 = new VF.StaveTie({ first_note: smo290788, last_note: smo290806, 
          firstNote: smo290788, lastNote: smo290806, first_indices: [0], last_indices: [0]});
smo421867.setContext(context).draw();
// modifier from 8-65-0-3 to 8-65-0-4
const smo421868 = new VF.StaveTie({ first_note: smo290810, last_note: smo290812, 
          firstNote: smo290810, lastNote: smo290812, first_indices: [0], last_indices: [0]});
smo421868.setContext(context).draw();
// modifier from 8-66-0-4 to 8-66-0-5
const smo421869 = new VF.StaveTie({ first_note: smo290841, last_note: smo290843, 
          firstNote: smo290841, lastNote: smo290843, first_indices: [0], last_indices: [0]});
smo421869.setContext(context).draw();
// modifier from 8-66-0-6 to 8-67-0-0
const smo421870 = new VF.StaveTie({ first_note: smo290844, last_note: smo290862, 
          firstNote: smo290844, lastNote: smo290862, first_indices: [0], last_indices: [0]});
smo421870.setContext(context).draw();
// modifier from 8-71-0-2 to 8-71-0-3
const smo421871 = new VF.StaveTie({ first_note: smo290937, last_note: smo290939, 
          firstNote: smo290937, lastNote: smo290939, first_indices: [0], last_indices: [0]});
smo421871.setContext(context).draw();
// modifier from 9-63-0-2 to 9-63-0-3
const smo421872 = new VF.StaveTie({ first_note: smo293846, last_note: smo293848, 
          firstNote: smo293846, lastNote: smo293848, first_indices: [0], last_indices: [0]});
smo421872.setContext(context).draw();
// modifier from 9-64-0-3 to 9-64-0-4
const smo421873 = new VF.StaveTie({ first_note: smo293874, last_note: smo293876, 
          firstNote: smo293874, lastNote: smo293876, first_indices: [0], last_indices: [0]});
smo421873.setContext(context).draw();
// modifier from 9-64-0-5 to 9-65-0-0
const smo421874 = new VF.StaveTie({ first_note: smo293877, last_note: smo293895, 
          firstNote: smo293877, lastNote: smo293895, first_indices: [0], last_indices: [0]});
smo421874.setContext(context).draw();
// modifier from 9-65-0-3 to 9-65-0-4
const smo421875 = new VF.StaveTie({ first_note: smo293899, last_note: smo293901, 
          firstNote: smo293899, lastNote: smo293901, first_indices: [0], last_indices: [0]});
smo421875.setContext(context).draw();
// modifier from 9-66-0-4 to 9-66-0-5
const smo421876 = new VF.StaveTie({ first_note: smo293930, last_note: smo293932, 
          firstNote: smo293930, lastNote: smo293932, first_indices: [0], last_indices: [0]});
smo421876.setContext(context).draw();
// modifier from 9-66-0-6 to 9-67-0-0
const smo421877 = new VF.StaveTie({ first_note: smo293933, last_note: smo293951, 
          firstNote: smo293933, lastNote: smo293951, first_indices: [0], last_indices: [0]});
smo421877.setContext(context).draw();
// modifier from 9-71-0-2 to 9-71-0-3
const smo421878 = new VF.StaveTie({ first_note: smo294026, last_note: smo294028, 
          firstNote: smo294026, lastNote: smo294028, first_indices: [0], last_indices: [0]});
smo421878.setContext(context).draw();
// modifier from 10-63-0-2 to 10-63-0-3
const smo421879 = new VF.StaveTie({ first_note: smo296886, last_note: smo296888, 
          firstNote: smo296886, lastNote: smo296888, first_indices: [0], last_indices: [0]});
smo421879.setContext(context).draw();
// modifier from 10-64-0-3 to 10-64-0-4
const smo421880 = new VF.StaveTie({ first_note: smo296914, last_note: smo296916, 
          firstNote: smo296914, lastNote: smo296916, first_indices: [0], last_indices: [0]});
smo421880.setContext(context).draw();
// modifier from 10-64-0-5 to 10-65-0-0
const smo421881 = new VF.StaveTie({ first_note: smo296917, last_note: smo296935, 
          firstNote: smo296917, lastNote: smo296935, first_indices: [0], last_indices: [0]});
smo421881.setContext(context).draw();
// modifier from 10-65-0-3 to 10-65-0-4
const smo421882 = new VF.StaveTie({ first_note: smo296939, last_note: smo296941, 
          firstNote: smo296939, lastNote: smo296941, first_indices: [0], last_indices: [0]});
smo421882.setContext(context).draw();
// modifier from 10-66-0-4 to 10-66-0-5
const smo421883 = new VF.StaveTie({ first_note: smo296970, last_note: smo296972, 
          firstNote: smo296970, lastNote: smo296972, first_indices: [0], last_indices: [0]});
smo421883.setContext(context).draw();
// modifier from 10-66-0-6 to 10-67-0-0
const smo421884 = new VF.StaveTie({ first_note: smo296973, last_note: smo296991, 
          firstNote: smo296973, lastNote: smo296991, first_indices: [0], last_indices: [0]});
smo421884.setContext(context).draw();
// modifier from 10-71-0-2 to 10-71-0-3
const smo421885 = new VF.StaveTie({ first_note: smo297066, last_note: smo297068, 
          firstNote: smo297066, lastNote: smo297068, first_indices: [0], last_indices: [0]});
smo421885.setContext(context).draw();
// modifier from 11-63-0-2 to 11-63-0-3
const smo421886 = new VF.StaveTie({ first_note: smo299940, last_note: smo299942, 
          firstNote: smo299940, lastNote: smo299942, first_indices: [0], last_indices: [0]});
smo421886.setContext(context).draw();
// modifier from 11-64-0-3 to 11-64-0-4
const smo421887 = new VF.StaveTie({ first_note: smo299968, last_note: smo299970, 
          firstNote: smo299968, lastNote: smo299970, first_indices: [0], last_indices: [0]});
smo421887.setContext(context).draw();
// modifier from 11-64-0-5 to 11-65-0-0
const smo421888 = new VF.StaveTie({ first_note: smo299971, last_note: smo299989, 
          firstNote: smo299971, lastNote: smo299989, first_indices: [0], last_indices: [0]});
smo421888.setContext(context).draw();
// modifier from 11-65-0-3 to 11-65-0-4
const smo421889 = new VF.StaveTie({ first_note: smo299993, last_note: smo299995, 
          firstNote: smo299993, lastNote: smo299995, first_indices: [0], last_indices: [0]});
smo421889.setContext(context).draw();
// modifier from 11-66-0-4 to 11-66-0-5
const smo421890 = new VF.StaveTie({ first_note: smo300024, last_note: smo300026, 
          firstNote: smo300024, lastNote: smo300026, first_indices: [0], last_indices: [0]});
smo421890.setContext(context).draw();
// modifier from 11-66-0-6 to 11-67-0-0
const smo421891 = new VF.StaveTie({ first_note: smo300027, last_note: smo300045, 
          firstNote: smo300027, lastNote: smo300045, first_indices: [0], last_indices: [0]});
smo421891.setContext(context).draw();
// modifier from 11-71-0-2 to 11-71-0-3
const smo421892 = new VF.StaveTie({ first_note: smo300120, last_note: smo300122, 
          firstNote: smo300120, lastNote: smo300122, first_indices: [0], last_indices: [0]});
smo421892.setContext(context).draw();
// modifier from 12-63-0-2 to 12-63-0-3
const smo421893 = new VF.StaveTie({ first_note: smo302983, last_note: smo302985, 
          firstNote: smo302983, lastNote: smo302985, first_indices: [0], last_indices: [0]});
smo421893.setContext(context).draw();
// modifier from 12-64-0-3 to 12-64-0-4
const smo421894 = new VF.StaveTie({ first_note: smo303011, last_note: smo303013, 
          firstNote: smo303011, lastNote: smo303013, first_indices: [0], last_indices: [0]});
smo421894.setContext(context).draw();
// modifier from 12-64-0-5 to 12-65-0-0
const smo421895 = new VF.StaveTie({ first_note: smo303014, last_note: smo303032, 
          firstNote: smo303014, lastNote: smo303032, first_indices: [0], last_indices: [0]});
smo421895.setContext(context).draw();
// modifier from 12-65-0-3 to 12-65-0-4
const smo421896 = new VF.StaveTie({ first_note: smo303036, last_note: smo303038, 
          firstNote: smo303036, lastNote: smo303038, first_indices: [0], last_indices: [0]});
smo421896.setContext(context).draw();
// modifier from 12-66-0-4 to 12-66-0-5
const smo421897 = new VF.StaveTie({ first_note: smo303067, last_note: smo303069, 
          firstNote: smo303067, lastNote: smo303069, first_indices: [0], last_indices: [0]});
smo421897.setContext(context).draw();
// modifier from 12-66-0-6 to 12-67-0-0
const smo421898 = new VF.StaveTie({ first_note: smo303070, last_note: smo303088, 
          firstNote: smo303070, lastNote: smo303088, first_indices: [0], last_indices: [0]});
smo421898.setContext(context).draw();
// modifier from 12-71-0-2 to 12-71-0-3
const smo421899 = new VF.StaveTie({ first_note: smo303163, last_note: smo303165, 
          firstNote: smo303163, lastNote: smo303165, first_indices: [0], last_indices: [0]});
smo421899.setContext(context).draw();
// modifier from 13-63-0-3 to 13-63-0-4
const smo421900 = new VF.StaveTie({ first_note: smo306202, last_note: smo306203, 
          firstNote: smo306202, lastNote: smo306203, first_indices: [0,1,2], last_indices: [0,1,2]});
smo421900.setContext(context).draw();
// modifier from 13-64-0-3 to 13-64-0-4
const smo421901 = new VF.StaveTie({ first_note: smo306226, last_note: smo306227, 
          firstNote: smo306226, lastNote: smo306227, first_indices: [0,1,2], last_indices: [0,1,2]});
smo421901.setContext(context).draw();
// modifier from 13-65-0-1 to 13-65-0-2
const smo421902 = new VF.StaveTie({ first_note: smo306245, last_note: smo306246, 
          firstNote: smo306245, lastNote: smo306246, first_indices: [0,1,2], last_indices: [0,1,2]});
smo421902.setContext(context).draw();
// modifier from 13-66-0-3 to 13-66-0-4
const smo421903 = new VF.StaveTie({ first_note: smo306268, last_note: smo306269, 
          firstNote: smo306268, lastNote: smo306269, first_indices: [0,1,2], last_indices: [0,1,2]});
smo421903.setContext(context).draw();
// modifier from 13-66-0-5 to 13-67-0-0
const smo421904 = new VF.StaveTie({ first_note: smo306270, last_note: smo306287, 
          firstNote: smo306270, lastNote: smo306287, first_indices: [0,1,2], last_indices: [0,1,2]});
smo421904.setContext(context).draw();
// modifier from 13-67-0-1 to 13-67-0-2
const smo421905 = new VF.StaveTie({ first_note: smo306288, last_note: smo306289, 
          firstNote: smo306288, lastNote: smo306289, first_indices: [0,1], last_indices: [0,1]});
smo421905.setContext(context).draw();
// modifier from 14-63-0-3 to 14-63-0-4
const smo421906 = new VF.StaveTie({ first_note: smo309415, last_note: smo309416, 
          firstNote: smo309415, lastNote: smo309416, first_indices: [0,1,2], last_indices: [0,1,2]});
smo421906.setContext(context).draw();
// modifier from 14-64-0-3 to 14-64-0-4
const smo421907 = new VF.StaveTie({ first_note: smo309439, last_note: smo309440, 
          firstNote: smo309439, lastNote: smo309440, first_indices: [0,1,2], last_indices: [0,1,2]});
smo421907.setContext(context).draw();
// modifier from 14-65-0-1 to 14-65-0-2
const smo421908 = new VF.StaveTie({ first_note: smo309458, last_note: smo309459, 
          firstNote: smo309458, lastNote: smo309459, first_indices: [0,1,2], last_indices: [0,1,2]});
smo421908.setContext(context).draw();
// modifier from 14-66-0-3 to 14-66-0-4
const smo421909 = new VF.StaveTie({ first_note: smo309481, last_note: smo309482, 
          firstNote: smo309481, lastNote: smo309482, first_indices: [0,1,2], last_indices: [0,1,2]});
smo421909.setContext(context).draw();
// modifier from 14-66-0-5 to 14-67-0-0
const smo421910 = new VF.StaveTie({ first_note: smo309483, last_note: smo309500, 
          firstNote: smo309483, lastNote: smo309500, first_indices: [0,1,2], last_indices: [0,1,2]});
smo421910.setContext(context).draw();
// modifier from 14-67-0-1 to 14-67-0-2
const smo421911 = new VF.StaveTie({ first_note: smo309501, last_note: smo309502, 
          firstNote: smo309501, lastNote: smo309502, first_indices: [0,1], last_indices: [0,1]});
smo421911.setContext(context).draw();
// modifier from 15-63-0-3 to 15-63-0-4
const smo421912 = new VF.StaveTie({ first_note: smo312610, last_note: smo312611, 
          firstNote: smo312610, lastNote: smo312611, first_indices: [0], last_indices: [0]});
smo421912.setContext(context).draw();
// modifier from 15-64-0-3 to 15-64-0-4
const smo421913 = new VF.StaveTie({ first_note: smo312634, last_note: smo312635, 
          firstNote: smo312634, lastNote: smo312635, first_indices: [0], last_indices: [0]});
smo421913.setContext(context).draw();
// modifier from 15-65-0-1 to 15-65-0-2
const smo421914 = new VF.StaveTie({ first_note: smo312653, last_note: smo312654, 
          firstNote: smo312653, lastNote: smo312654, first_indices: [0], last_indices: [0]});
smo421914.setContext(context).draw();
// modifier from 15-66-0-3 to 15-66-0-4
const smo421915 = new VF.StaveTie({ first_note: smo312676, last_note: smo312677, 
          firstNote: smo312676, lastNote: smo312677, first_indices: [0], last_indices: [0]});
smo421915.setContext(context).draw();
// modifier from 15-66-0-5 to 15-67-0-0
const smo421916 = new VF.StaveTie({ first_note: smo312678, last_note: smo312695, 
          firstNote: smo312678, lastNote: smo312695, first_indices: [0], last_indices: [0]});
smo421916.setContext(context).draw();
// modifier from 15-67-0-1 to 15-67-0-2
const smo421917 = new VF.StaveTie({ first_note: smo312696, last_note: smo312697, 
          firstNote: smo312696, lastNote: smo312697, first_indices: [0], last_indices: [0]});
smo421917.setContext(context).draw();
// modifier from 16-64-0-1 to 16-64-0-2
const smo421918 = new VF.StaveTie({ first_note: smo315751, last_note: smo315752, 
          firstNote: smo315751, lastNote: smo315752, first_indices: [0], last_indices: [0]});
smo421918.setContext(context).draw();
// modifier from 16-64-0-3 to 16-65-0-0
const smo421919 = new VF.StaveTie({ first_note: smo315753, last_note: smo315770, 
          firstNote: smo315753, lastNote: smo315770, first_indices: [0], last_indices: [0]});
smo421919.setContext(context).draw();
// modifier from 16-65-0-1 to 16-65-0-2
const smo421920 = new VF.StaveTie({ first_note: smo315771, last_note: smo315772, 
          firstNote: smo315771, lastNote: smo315772, first_indices: [0], last_indices: [0]});
smo421920.setContext(context).draw();
// modifier from 16-65-0-3 to 16-66-0-0
const smo421921 = new VF.StaveTie({ first_note: smo315773, last_note: smo315790, 
          firstNote: smo315773, lastNote: smo315790, first_indices: [0], last_indices: [0]});
smo421921.setContext(context).draw();
// modifier from 16-66-0-1 to 16-66-0-2
const smo421922 = new VF.StaveTie({ first_note: smo315791, last_note: smo315792, 
          firstNote: smo315791, lastNote: smo315792, first_indices: [0], last_indices: [0]});
smo421922.setContext(context).draw();
// modifier from 16-66-0-3 to 16-67-0-0
const smo421923 = new VF.StaveTie({ first_note: smo315793, last_note: smo315810, 
          firstNote: smo315793, lastNote: smo315810, first_indices: [0], last_indices: [0]});
smo421923.setContext(context).draw();
// modifier from 16-68-0-1 to 16-68-0-2
const smo421924 = new VF.StaveTie({ first_note: smo315831, last_note: smo315832, 
          firstNote: smo315831, lastNote: smo315832, first_indices: [0], last_indices: [0]});
smo421924.setContext(context).draw();
// modifier from 16-68-0-3 to 16-69-0-0
const smo421925 = new VF.StaveTie({ first_note: smo315833, last_note: smo315850, 
          firstNote: smo315833, lastNote: smo315850, first_indices: [0], last_indices: [0]});
smo421925.setContext(context).draw();
// modifier from 16-69-0-1 to 16-69-0-2
const smo421926 = new VF.StaveTie({ first_note: smo315851, last_note: smo315852, 
          firstNote: smo315851, lastNote: smo315852, first_indices: [0], last_indices: [0]});
smo421926.setContext(context).draw();
// modifier from 16-69-0-3 to 16-70-0-0
const smo421927 = new VF.StaveTie({ first_note: smo315853, last_note: smo315870, 
          firstNote: smo315853, lastNote: smo315870, first_indices: [0], last_indices: [0]});
smo421927.setContext(context).draw();
// modifier from 16-70-0-1 to 16-70-0-2
const smo421928 = new VF.StaveTie({ first_note: smo315871, last_note: smo315872, 
          firstNote: smo315871, lastNote: smo315872, first_indices: [0], last_indices: [0]});
smo421928.setContext(context).draw();
// modifier from 16-70-0-3 to 16-71-0-0
const smo421929 = new VF.StaveTie({ first_note: smo315873, last_note: smo315890, 
          firstNote: smo315873, lastNote: smo315890, first_indices: [0], last_indices: [0]});
smo421929.setContext(context).draw();
// modifier from 17-63-0-1 to 17-63-0-2
const smo421930 = new VF.StaveTie({ first_note: smo318911, last_note: smo318912, 
          firstNote: smo318911, lastNote: smo318912, first_indices: [0], last_indices: [0]});
smo421930.setContext(context).draw();
// modifier from 17-65-0-1 to 17-65-0-2
const smo421931 = new VF.StaveTie({ first_note: smo318960, last_note: smo318961, 
          firstNote: smo318960, lastNote: smo318961, first_indices: [0], last_indices: [0]});
smo421931.setContext(context).draw();
// modifier from 17-66-0-4 to 17-66-0-5
const smo421932 = new VF.StaveTie({ first_note: smo318987, last_note: smo318989, 
          firstNote: smo318987, lastNote: smo318989, first_indices: [0], last_indices: [0]});
smo421932.setContext(context).draw();
// modifier from 17-66-0-6 to 17-67-0-0
const smo421933 = new VF.StaveTie({ first_note: smo318990, last_note: smo319009, 
          firstNote: smo318990, lastNote: smo319009, first_indices: [0], last_indices: [0]});
smo421933.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo266072').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo266075').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo266077').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269066').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269069').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269071').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo272209').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo272212').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo272214').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo275325').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo275328').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo275330').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo278344').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo278347').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo278349').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo281451').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo281454').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo281456').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo284563').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo284566').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo284568').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo287672').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo287675').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo287677').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo290758').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo290761').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo290763').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo293847').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo293850').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo293852').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo296887').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo296890').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo296892').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo299941').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo299944').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo299946').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo302984').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo302987').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo302989').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo266096').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo266100').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo266103').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo269090').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269094').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo269097').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo272233').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo272237').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo272240').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo275349').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo275353').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo275356').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo278368').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo278372').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo278375').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo281475').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo281479').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo281482').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo284587').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo284591').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo284594').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo287696').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo287700').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo287703').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo290782').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo290786').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo290789').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo293871').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo293875').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo296911').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo296915').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo299965').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo299969').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo303008').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo303012').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo318932').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo266122').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo266125').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo266128').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo266130').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo269116').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo269119').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo269122').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo269124').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo272259').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo272262').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo272265').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo272267').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo275375').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo275378').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo275381').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo275383').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo278394').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo278397').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo278400').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo278402').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo281501').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo281504').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo281507').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo281509').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo284613').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo284616').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo284619').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo284621').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo287722').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo287725').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo287728').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo287730').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo290808').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo290811').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo290814').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo290816').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo293897').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo293900').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo293903').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo293905').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo296937').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo296940').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo296943').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo296945').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo299991').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo299994').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo299997').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo299999').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo303034').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo303037').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo303040').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo303042').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo266148').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo266150').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo266152').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo266154').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo266156').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo266159').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo269142').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo269144').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo269146').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo269148').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo269150').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo269153').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo272285').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo272287').setAttributeNS('', 'transform', 'translate(0 2)');
context.svg.getElementById('vf-smo272289').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo272291').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo272296').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo275401').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo275403').setAttributeNS('', 'transform', 'translate(0 2)');
context.svg.getElementById('vf-smo275405').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo275407').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo275412').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo278420').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo278422').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo278424').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo278426').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo278428').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo278431').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo281527').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo281529').setAttributeNS('', 'transform', 'translate(0 2)');
context.svg.getElementById('vf-smo281531').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo281533').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo281538').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo284639').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo284641').setAttributeNS('', 'transform', 'translate(0 2)');
context.svg.getElementById('vf-smo284643').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo284645').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo284650').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo287748').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo287750').setAttributeNS('', 'transform', 'translate(0 2)');
context.svg.getElementById('vf-smo287752').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo287754').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo287759').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo290834').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo290836').setAttributeNS('', 'transform', 'translate(0 2)');
context.svg.getElementById('vf-smo290838').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo290840').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo290845').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo293923').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo293927').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo293929').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo293931').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo296963').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo296967').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo296969').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo296971').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo300017').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo300021').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo300023').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo300025').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo303060').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo303064').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo303066').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo303068').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo318980').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo318984').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo318986').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo318988').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo293953').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo296993').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo300047').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo303090').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo266252').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo266255').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo266257').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269245').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269248').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269250').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo272389').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo272392').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo272394').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo275505').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo275508').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo275510').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo278524').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo278527').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo278529').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo281640').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo281643').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo281645').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo284743').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo284746').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo284748').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo287852').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo287855').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo287857').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo290938').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo290941').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo290943').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo294027').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo294030').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo294032').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo297067').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo297070').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo297072').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo300121').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo300124').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo300126').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo303164').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo303167').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo303169').setAttributeNS('', 'transform', 'translate(0 3)');
}
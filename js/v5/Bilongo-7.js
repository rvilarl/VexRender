// @@ Bilongo (Mandinga) p 8/17  by Rodriguez/Palmieri/Newman
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = VexFlow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1632.0398513887887');
svg.setAttributeNS('', 'height', '1344');
svg.setAttributeNS('', 'viewBox', '0 0 3264 2688');
//
// create the musical objects
VF.setFonts("Leland","Bravura","Gonville","Custom");
const fmtsmo25748863 = new VF.Formatter();
//
// voices and notes for stave 0 63
const smo257488v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo257488v0ar = [];
const smo257463 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo257463.setAttribute('id', 'smo257463');
smo257488v0ar.push(smo257463);
const smo257464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo257464.setAttribute('id', 'smo257464');
smo257488v0ar.push(smo257464);
const smo257465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo257465.setAttribute('id', 'smo257465');
const smo257466 = new VF.Annotation('Ki');
smo257466.setAttribute('id', 'smo257466');
smo257466.setFont('times', 12, 'normal');
smo257466.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257465.addModifier(smo257466);
smo257466.addClass('lyric lyric-0 lyric-hyphen');
smo257488v0ar.push(smo257465);
const smo257467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo257467.setAttribute('id', 'smo257467');
smo257488v0ar.push(smo257467);
const smo257468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo257468.setAttribute('id', 'smo257468');
const smo257469 = new VF.Annotation('ki');
smo257469.setAttribute('id', 'smo257469');
smo257469.setFont('times', 12, 'normal');
smo257469.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257468.addModifier(smo257469);
smo257469.addClass('lyric lyric-0 lyric-hyphen');
smo257488v0ar.push(smo257468);
const smo257470 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo257470.setAttribute('id', 'smo257470');
const smo257471 = new VF.Annotation('ri');
smo257471.setAttribute('id', 'smo257471');
smo257471.setFont('times', 12, 'normal');
smo257471.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257470.addModifier(smo257471);
smo257471.addClass('lyric lyric-0');
smo257488v0ar.push(smo257470);
smo257488v0.addTickables(smo257488v0ar)
fmtsmo25748863.joinVoices([smo257488v0]);
const fmtsmo26048263 = new VF.Formatter();
//
// voices and notes for stave 1 63
const smo260482v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo260482v0ar = [];
const smo260457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo260457.setAttribute('id', 'smo260457');
smo260482v0ar.push(smo260457);
const smo260458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo260458.setAttribute('id', 'smo260458');
smo260482v0ar.push(smo260458);
const smo260459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo260459.setAttribute('id', 'smo260459');
const smo260460 = new VF.Annotation('Ki');
smo260460.setAttribute('id', 'smo260460');
smo260460.setFont('times', 12, 'normal');
smo260460.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260459.addModifier(smo260460);
smo260460.addClass('lyric lyric-0 lyric-hyphen');
smo260482v0ar.push(smo260459);
const smo260461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo260461.setAttribute('id', 'smo260461');
smo260482v0ar.push(smo260461);
const smo260462 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo260462.setAttribute('id', 'smo260462');
const smo260463 = new VF.Annotation('ki');
smo260463.setAttribute('id', 'smo260463');
smo260463.setFont('times', 12, 'normal');
smo260463.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260462.addModifier(smo260463);
smo260463.addClass('lyric lyric-0 lyric-hyphen');
smo260482v0ar.push(smo260462);
const smo260464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo260464.setAttribute('id', 'smo260464');
const smo260465 = new VF.Annotation('ri');
smo260465.setAttribute('id', 'smo260465');
smo260465.setFont('times', 12, 'normal');
smo260465.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260464.addModifier(smo260465);
smo260465.addClass('lyric lyric-0');
smo260482v0ar.push(smo260464);
smo260482v0.addTickables(smo260482v0ar)
fmtsmo26048263.joinVoices([smo260482v0]);
const fmtsmo26362563 = new VF.Formatter();
//
// voices and notes for stave 2 63
const smo263625v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo263625v0ar = [];
const smo263600 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo263600.setAttribute('id', 'smo263600');
smo263625v0ar.push(smo263600);
const smo263601 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo263601.setAttribute('id', 'smo263601');
smo263625v0ar.push(smo263601);
const smo263602 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo263602.setAttribute('id', 'smo263602');
const smo263603 = new VF.Annotation('Ki');
smo263603.setAttribute('id', 'smo263603');
smo263603.setFont('times', 12, 'normal');
smo263603.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263602.addModifier(smo263603);
smo263603.addClass('lyric lyric-0 lyric-hyphen');
smo263625v0ar.push(smo263602);
const smo263604 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo263604.setAttribute('id', 'smo263604');
smo263625v0ar.push(smo263604);
const smo263605 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo263605.setAttribute('id', 'smo263605');
const smo263606 = new VF.Annotation('ki');
smo263606.setAttribute('id', 'smo263606');
smo263606.setFont('times', 12, 'normal');
smo263606.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263605.addModifier(smo263606);
smo263606.addClass('lyric lyric-0 lyric-hyphen');
smo263625v0ar.push(smo263605);
const smo263607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo263607.setAttribute('id', 'smo263607');
const smo263608 = new VF.Annotation('ri');
smo263608.setAttribute('id', 'smo263608');
smo263608.setFont('times', 12, 'normal');
smo263608.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263607.addModifier(smo263608);
smo263608.addClass('lyric lyric-0');
smo263625v0ar.push(smo263607);
smo263625v0.addTickables(smo263625v0ar)
fmtsmo26362563.joinVoices([smo263625v0]);
const fmtsmo26674163 = new VF.Formatter();
//
// voices and notes for stave 3 63
const smo266741v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266741v0ar = [];
const smo266716 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo266716.setAttribute('id', 'smo266716');
smo266741v0ar.push(smo266716);
const smo266717 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo266717.setAttribute('id', 'smo266717');
smo266741v0ar.push(smo266717);
const smo266718 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo266718.setAttribute('id', 'smo266718');
const smo266719 = new VF.Annotation('Ki');
smo266719.setAttribute('id', 'smo266719');
smo266719.setFont('times', 12, 'normal');
smo266719.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266718.addModifier(smo266719);
smo266719.addClass('lyric lyric-0 lyric-hyphen');
smo266741v0ar.push(smo266718);
const smo266720 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo266720.setAttribute('id', 'smo266720');
smo266741v0ar.push(smo266720);
const smo266721 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo266721.setAttribute('id', 'smo266721');
const smo266722 = new VF.Annotation('ki');
smo266722.setAttribute('id', 'smo266722');
smo266722.setFont('times', 12, 'normal');
smo266722.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266721.addModifier(smo266722);
smo266722.addClass('lyric lyric-0 lyric-hyphen');
smo266741v0ar.push(smo266721);
const smo266723 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo266723.setAttribute('id', 'smo266723');
const smo266724 = new VF.Annotation('ri');
smo266724.setAttribute('id', 'smo266724');
smo266724.setFont('times', 12, 'normal');
smo266724.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266723.addModifier(smo266724);
smo266724.addClass('lyric lyric-0');
smo266741v0ar.push(smo266723);
smo266741v0.addTickables(smo266741v0ar)
fmtsmo26674163.joinVoices([smo266741v0]);
const fmtsmo26976063 = new VF.Formatter();
//
// voices and notes for stave 4 63
const smo269760v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269760v0ar = [];
const smo269735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo269735.setAttribute('id', 'smo269735');
smo269760v0ar.push(smo269735);
const smo269736 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo269736.setAttribute('id', 'smo269736');
smo269760v0ar.push(smo269736);
const smo269737 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo269737.setAttribute('id', 'smo269737');
const smo269738 = new VF.Annotation('Ki');
smo269738.setAttribute('id', 'smo269738');
smo269738.setFont('times', 12, 'normal');
smo269738.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269737.addModifier(smo269738);
smo269738.addClass('lyric lyric-0 lyric-hyphen');
smo269760v0ar.push(smo269737);
const smo269739 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo269739.setAttribute('id', 'smo269739');
smo269760v0ar.push(smo269739);
const smo269740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo269740.setAttribute('id', 'smo269740');
const smo269741 = new VF.Annotation('ki');
smo269741.setAttribute('id', 'smo269741');
smo269741.setFont('times', 12, 'normal');
smo269741.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269740.addModifier(smo269741);
smo269741.addClass('lyric lyric-0 lyric-hyphen');
smo269760v0ar.push(smo269740);
const smo269742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo269742.setAttribute('id', 'smo269742');
const smo269743 = new VF.Annotation('ri');
smo269743.setAttribute('id', 'smo269743');
smo269743.setFont('times', 12, 'normal');
smo269743.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269742.addModifier(smo269743);
smo269743.addClass('lyric lyric-0');
smo269760v0ar.push(smo269742);
smo269760v0.addTickables(smo269760v0ar)
fmtsmo26976063.joinVoices([smo269760v0]);
const fmtsmo27286763 = new VF.Formatter();
//
// voices and notes for stave 5 63
const smo272867v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272867v0ar = [];
const smo272841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo272841.setAttribute('id', 'smo272841');
smo272867v0ar.push(smo272841);
const smo272842 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo272842.setAttribute('id', 'smo272842');
smo272867v0ar.push(smo272842);
const smo272843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo272843.setAttribute('id', 'smo272843');
smo272867v0ar.push(smo272843);
const smo272844 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo272844.setAttribute('id', 'smo272844');
const smo272845 = new VF.Annotation('Ki');
smo272845.setAttribute('id', 'smo272845');
smo272845.setFont('times', 12, 'normal');
smo272845.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272844.addModifier(smo272845);
smo272845.addClass('lyric lyric-0 lyric-hyphen');
smo272867v0ar.push(smo272844);
const smo272846 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo272846.setAttribute('id', 'smo272846');
smo272867v0ar.push(smo272846);
const smo272847 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo272847.setAttribute('id', 'smo272847');
const smo272848 = new VF.Annotation('ki');
smo272848.setAttribute('id', 'smo272848');
smo272848.setFont('times', 12, 'normal');
smo272848.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272847.addModifier(smo272848);
smo272848.addClass('lyric lyric-0 lyric-hyphen');
smo272867v0ar.push(smo272847);
const smo272849 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo272849.setAttribute('id', 'smo272849');
const smo272850 = new VF.Annotation('ri');
smo272850.setAttribute('id', 'smo272850');
smo272850.setFont('times', 12, 'normal');
smo272850.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272849.addModifier(smo272850);
smo272850.addClass('lyric lyric-0');
smo272867v0ar.push(smo272849);
smo272867v0.addTickables(smo272867v0ar)
fmtsmo27286763.joinVoices([smo272867v0]);
const fmtsmo27597963 = new VF.Formatter();
//
// voices and notes for stave 6 63
const smo275979v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo275979v0ar = [];
const smo275954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo275954.setAttribute('id', 'smo275954');
smo275979v0ar.push(smo275954);
const smo275955 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo275955.setAttribute('id', 'smo275955');
smo275979v0ar.push(smo275955);
const smo275956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo275956.setAttribute('id', 'smo275956');
const smo275957 = new VF.Annotation('Ki');
smo275957.setAttribute('id', 'smo275957');
smo275957.setFont('times', 12, 'normal');
smo275957.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275956.addModifier(smo275957);
smo275957.addClass('lyric lyric-0 lyric-hyphen');
smo275979v0ar.push(smo275956);
const smo275958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo275958.setAttribute('id', 'smo275958');
smo275979v0ar.push(smo275958);
const smo275959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo275959.setAttribute('id', 'smo275959');
const smo275960 = new VF.Annotation('ki');
smo275960.setAttribute('id', 'smo275960');
smo275960.setFont('times', 12, 'normal');
smo275960.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275959.addModifier(smo275960);
smo275960.addClass('lyric lyric-0 lyric-hyphen');
smo275979v0ar.push(smo275959);
const smo275961 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo275961.setAttribute('id', 'smo275961');
const smo275962 = new VF.Annotation('ri');
smo275962.setAttribute('id', 'smo275962');
smo275962.setFont('times', 12, 'normal');
smo275962.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275961.addModifier(smo275962);
smo275962.addClass('lyric lyric-0');
smo275979v0ar.push(smo275961);
smo275979v0.addTickables(smo275979v0ar)
fmtsmo27597963.joinVoices([smo275979v0]);
const fmtsmo27908863 = new VF.Formatter();
//
// voices and notes for stave 7 63
const smo279088v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo279088v0ar = [];
const smo279063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo279063.setAttribute('id', 'smo279063');
smo279088v0ar.push(smo279063);
const smo279064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo279064.setAttribute('id', 'smo279064');
smo279088v0ar.push(smo279064);
const smo279065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo279065.setAttribute('id', 'smo279065');
const smo279066 = new VF.Annotation('Ki');
smo279066.setAttribute('id', 'smo279066');
smo279066.setFont('times', 12, 'normal');
smo279066.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo279065.addModifier(smo279066);
smo279066.addClass('lyric lyric-0 lyric-hyphen');
smo279088v0ar.push(smo279065);
const smo279067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo279067.setAttribute('id', 'smo279067');
smo279088v0ar.push(smo279067);
const smo279068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo279068.setAttribute('id', 'smo279068');
const smo279069 = new VF.Annotation('ki');
smo279069.setAttribute('id', 'smo279069');
smo279069.setFont('times', 12, 'normal');
smo279069.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo279068.addModifier(smo279069);
smo279069.addClass('lyric lyric-0 lyric-hyphen');
smo279088v0ar.push(smo279068);
const smo279070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo279070.setAttribute('id', 'smo279070');
const smo279071 = new VF.Annotation('ri');
smo279071.setAttribute('id', 'smo279071');
smo279071.setFont('times', 12, 'normal');
smo279071.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo279070.addModifier(smo279071);
smo279071.addClass('lyric lyric-0');
smo279088v0ar.push(smo279070);
smo279088v0.addTickables(smo279088v0ar)
fmtsmo27908863.joinVoices([smo279088v0]);
const fmtsmo28217463 = new VF.Formatter();
//
// voices and notes for stave 8 63
const smo282174v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo282174v0ar = [];
const smo282149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo282149.setAttribute('id', 'smo282149');
smo282174v0ar.push(smo282149);
const smo282150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo282150.setAttribute('id', 'smo282150');
smo282174v0ar.push(smo282150);
const smo282151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo282151.setAttribute('id', 'smo282151');
const smo282152 = new VF.Annotation('Ki');
smo282152.setAttribute('id', 'smo282152');
smo282152.setFont('times', 12, 'normal');
smo282152.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282151.addModifier(smo282152);
smo282152.addClass('lyric lyric-0 lyric-hyphen');
smo282174v0ar.push(smo282151);
const smo282153 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo282153.setAttribute('id', 'smo282153');
smo282174v0ar.push(smo282153);
const smo282154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo282154.setAttribute('id', 'smo282154');
const smo282155 = new VF.Annotation('ki');
smo282155.setAttribute('id', 'smo282155');
smo282155.setFont('times', 12, 'normal');
smo282155.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282154.addModifier(smo282155);
smo282155.addClass('lyric lyric-0 lyric-hyphen');
smo282174v0ar.push(smo282154);
const smo282156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo282156.setAttribute('id', 'smo282156');
const smo282157 = new VF.Annotation('ri');
smo282157.setAttribute('id', 'smo282157');
smo282157.setFont('times', 12, 'normal');
smo282157.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282156.addModifier(smo282157);
smo282157.addClass('lyric lyric-0');
smo282174v0ar.push(smo282156);
smo282174v0.addTickables(smo282174v0ar)
fmtsmo28217463.joinVoices([smo282174v0]);
const fmtsmo28526363 = new VF.Formatter();
//
// voices and notes for stave 9 63
const smo285263v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo285263v0ar = [];
const smo285238 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo285238.setAttribute('id', 'smo285238');
smo285263v0ar.push(smo285238);
const smo285239 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo285239.setAttribute('id', 'smo285239');
smo285263v0ar.push(smo285239);
const smo285240 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo285240.setAttribute('id', 'smo285240');
const smo285241 = new VF.Annotation('Ki');
smo285241.setAttribute('id', 'smo285241');
smo285241.setFont('times', 12, 'normal');
smo285241.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285240.addModifier(smo285241);
smo285241.addClass('lyric lyric-0 lyric-hyphen');
smo285263v0ar.push(smo285240);
const smo285242 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo285242.setAttribute('id', 'smo285242');
smo285263v0ar.push(smo285242);
const smo285243 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo285243.setAttribute('id', 'smo285243');
const smo285244 = new VF.Annotation('ki');
smo285244.setAttribute('id', 'smo285244');
smo285244.setFont('times', 12, 'normal');
smo285244.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285243.addModifier(smo285244);
smo285244.addClass('lyric lyric-0 lyric-hyphen');
smo285263v0ar.push(smo285243);
const smo285245 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo285245.setAttribute('id', 'smo285245');
const smo285246 = new VF.Annotation('ri');
smo285246.setAttribute('id', 'smo285246');
smo285246.setFont('times', 12, 'normal');
smo285246.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285245.addModifier(smo285246);
smo285246.addClass('lyric lyric-0');
smo285263v0ar.push(smo285245);
smo285263v0.addTickables(smo285263v0ar)
fmtsmo28526363.joinVoices([smo285263v0]);
const fmtsmo28830363 = new VF.Formatter();
//
// voices and notes for stave 10 63
const smo288303v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo288303v0ar = [];
const smo288278 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo288278.setAttribute('id', 'smo288278');
smo288303v0ar.push(smo288278);
const smo288279 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo288279.setAttribute('id', 'smo288279');
smo288303v0ar.push(smo288279);
const smo288280 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo288280.setAttribute('id', 'smo288280');
const smo288281 = new VF.Annotation('Ki');
smo288281.setAttribute('id', 'smo288281');
smo288281.setFont('times', 12, 'normal');
smo288281.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288280.addModifier(smo288281);
smo288281.addClass('lyric lyric-0 lyric-hyphen');
smo288303v0ar.push(smo288280);
const smo288282 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo288282.setAttribute('id', 'smo288282');
smo288303v0ar.push(smo288282);
const smo288283 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo288283.setAttribute('id', 'smo288283');
const smo288284 = new VF.Annotation('ki');
smo288284.setAttribute('id', 'smo288284');
smo288284.setFont('times', 12, 'normal');
smo288284.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288283.addModifier(smo288284);
smo288284.addClass('lyric lyric-0 lyric-hyphen');
smo288303v0ar.push(smo288283);
const smo288285 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo288285.setAttribute('id', 'smo288285');
const smo288286 = new VF.Annotation('ri');
smo288286.setAttribute('id', 'smo288286');
smo288286.setFont('times', 12, 'normal');
smo288286.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288285.addModifier(smo288286);
smo288286.addClass('lyric lyric-0');
smo288303v0ar.push(smo288285);
smo288303v0.addTickables(smo288303v0ar)
fmtsmo28830363.joinVoices([smo288303v0]);
const fmtsmo29135763 = new VF.Formatter();
//
// voices and notes for stave 11 63
const smo291357v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo291357v0ar = [];
const smo291332 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo291332.setAttribute('id', 'smo291332');
smo291357v0ar.push(smo291332);
const smo291333 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo291333.setAttribute('id', 'smo291333');
smo291357v0ar.push(smo291333);
const smo291334 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo291334.setAttribute('id', 'smo291334');
const smo291335 = new VF.Annotation('Ki');
smo291335.setAttribute('id', 'smo291335');
smo291335.setFont('times', 12, 'normal');
smo291335.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291334.addModifier(smo291335);
smo291335.addClass('lyric lyric-0 lyric-hyphen');
smo291357v0ar.push(smo291334);
const smo291336 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo291336.setAttribute('id', 'smo291336');
smo291357v0ar.push(smo291336);
const smo291337 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo291337.setAttribute('id', 'smo291337');
const smo291338 = new VF.Annotation('ki');
smo291338.setAttribute('id', 'smo291338');
smo291338.setFont('times', 12, 'normal');
smo291338.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291337.addModifier(smo291338);
smo291338.addClass('lyric lyric-0 lyric-hyphen');
smo291357v0ar.push(smo291337);
const smo291339 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo291339.setAttribute('id', 'smo291339');
const smo291340 = new VF.Annotation('ri');
smo291340.setAttribute('id', 'smo291340');
smo291340.setFont('times', 12, 'normal');
smo291340.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291339.addModifier(smo291340);
smo291340.addClass('lyric lyric-0');
smo291357v0ar.push(smo291339);
smo291357v0.addTickables(smo291357v0ar)
fmtsmo29135763.joinVoices([smo291357v0]);
const fmtsmo29440063 = new VF.Formatter();
//
// voices and notes for stave 12 63
const smo294400v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo294400v0ar = [];
const smo294375 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo294375.setAttribute('id', 'smo294375');
smo294400v0ar.push(smo294375);
const smo294376 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo294376.setAttribute('id', 'smo294376');
smo294400v0ar.push(smo294376);
const smo294377 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo294377.setAttribute('id', 'smo294377');
const smo294378 = new VF.Annotation('Ki');
smo294378.setAttribute('id', 'smo294378');
smo294378.setFont('times', 12, 'normal');
smo294378.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo294377.addModifier(smo294378);
smo294378.addClass('lyric lyric-0 lyric-hyphen');
smo294400v0ar.push(smo294377);
const smo294379 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo294379.setAttribute('id', 'smo294379');
smo294400v0ar.push(smo294379);
const smo294380 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo294380.setAttribute('id', 'smo294380');
const smo294381 = new VF.Annotation('ki');
smo294381.setAttribute('id', 'smo294381');
smo294381.setFont('times', 12, 'normal');
smo294381.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo294380.addModifier(smo294381);
smo294381.addClass('lyric lyric-0 lyric-hyphen');
smo294400v0ar.push(smo294380);
const smo294382 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo294382.setAttribute('id', 'smo294382');
const smo294383 = new VF.Annotation('ri');
smo294383.setAttribute('id', 'smo294383');
smo294383.setFont('times', 12, 'normal');
smo294383.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo294382.addModifier(smo294383);
smo294383.addClass('lyric lyric-0');
smo294400v0ar.push(smo294382);
smo294400v0.addTickables(smo294400v0ar)
fmtsmo29440063.joinVoices([smo294400v0]);
const fmtsmo29761663 = new VF.Formatter();
//
// voices and notes for stave 13 63
const smo297616v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo297616v0ar = [];
const smo297593 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo297593.setAttribute('id', 'smo297593');
smo297616v0ar.push(smo297593);
const smo297594 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo297594.setAttribute('id', 'smo297594');
smo297616v0ar.push(smo297594);
const smo297595 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo297595.setAttribute('id', 'smo297595');
smo297616v0ar.push(smo297595);
const smo297596 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo297596.setAttribute('id', 'smo297596');
const smo2975960acc = new VF.Accidental('#');
smo297596.addModifier(smo2975960acc, 0);
smo297616v0ar.push(smo297596);
const smo297597 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo297597.setAttribute('id', 'smo297597');
smo297616v0ar.push(smo297597);
const smo297598 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo297598.setAttribute('id', 'smo297598');
smo297616v0ar.push(smo297598);
const smo297599 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo297599.setAttribute('id', 'smo297599');
smo297616v0ar.push(smo297599);
smo297616v0.addTickables(smo297616v0ar)
fmtsmo29761663.joinVoices([smo297616v0]);
const fmtsmo30082963 = new VF.Formatter();
//
// voices and notes for stave 14 63
const smo300829v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300829v0ar = [];
const smo300806 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","ab/4/n","bb/4/n","dn/5/n"]}'))
smo300806.setAttribute('id', 'smo300806');
const smo3008061acc = new VF.Accidental('b');
smo300806.addModifier(smo3008061acc, 1);
smo300829v0ar.push(smo300806);
const smo300807 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo300807.setAttribute('id', 'smo300807');
smo300829v0ar.push(smo300807);
const smo300808 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo300808.setAttribute('id', 'smo300808');
smo300829v0ar.push(smo300808);
const smo300809 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo300809.setAttribute('id', 'smo300809');
const smo3008090acc = new VF.Accidental('#');
smo300809.addModifier(smo3008090acc, 0);
const smo3008091acc = new VF.Accidental('n');
smo300809.addModifier(smo3008091acc, 1);
smo300829v0ar.push(smo300809);
const smo300810 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo300810.setAttribute('id', 'smo300810');
smo300829v0ar.push(smo300810);
const smo300811 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo300811.setAttribute('id', 'smo300811');
smo300829v0ar.push(smo300811);
const smo300812 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
smo300812.setAttribute('id', 'smo300812');
smo300829v0ar.push(smo300812);
smo300829v0.addTickables(smo300829v0ar)
fmtsmo30082963.joinVoices([smo300829v0]);
const fmtsmo30402463 = new VF.Formatter();
//
// voices and notes for stave 15 63
const smo304024v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo304024v0ar = [];
const smo304001 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo304001.setAttribute('id', 'smo304001');
smo304024v0ar.push(smo304001);
const smo304002 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo304002.setAttribute('id', 'smo304002');
smo304024v0ar.push(smo304002);
const smo304003 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo304003.setAttribute('id', 'smo304003');
smo304024v0ar.push(smo304003);
const smo304004 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo304004.setAttribute('id', 'smo304004');
smo304024v0ar.push(smo304004);
const smo304005 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo304005.setAttribute('id', 'smo304005');
smo304024v0ar.push(smo304005);
const smo304006 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo304006.setAttribute('id', 'smo304006');
smo304024v0ar.push(smo304006);
const smo304007 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo304007.setAttribute('id', 'smo304007');
smo304024v0ar.push(smo304007);
smo304024v0.addTickables(smo304024v0ar)
fmtsmo30402463.joinVoices([smo304024v0]);
const fmtsmo30714363 = new VF.Formatter();
//
// voices and notes for stave 16 63
const smo307143v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo307143v0ar = [];
const smo307124 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo307124.setAttribute('id', 'smo307124');
smo307143v0ar.push(smo307124);
const smo307125 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo307125.setAttribute('id', 'smo307125');
smo307143v0ar.push(smo307125);
const smo307126 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo307126.setAttribute('id', 'smo307126');
smo307143v0ar.push(smo307126);
smo307143v0.addTickables(smo307143v0ar)
fmtsmo30714363.joinVoices([smo307143v0]);
const fmtsmo31032463 = new VF.Formatter();
//
// voices and notes for stave 17 63
const smo310324v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo310324v0ar = [];
const smo310304 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo310304.setAttribute('id', 'smo310304');
const smo3103040acc = new VF.Accidental('n');
smo310304.addModifier(smo3103040acc, 0);
smo310304.addModifier(new VF.Dot(), 0);
smo310324v0ar.push(smo310304);
const smo310305 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo310305.setAttribute('id', 'smo310305');
smo310324v0ar.push(smo310305);
const smo310306 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo310306.setAttribute('id', 'smo310306');
smo310324v0ar.push(smo310306);
const smo310307 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo310307.setAttribute('id', 'smo310307');
smo310324v0ar.push(smo310307);
smo310324v0.addTickables(smo310324v0ar)
fmtsmo31032463.joinVoices([smo310324v0]);
// create beam groups and tuplets for format grp smo312125 before formatting
const dirsmo403414 = smo257465.getStemDirection();
smo257465.setStemDirection(dirsmo403414);
smo257467.setStemDirection(dirsmo403414);
const smo403414 = new VF.Beam([smo257465,smo257467]);
const dirsmo403416 = smo260459.getStemDirection();
smo260459.setStemDirection(dirsmo403416);
smo260461.setStemDirection(dirsmo403416);
const smo403416 = new VF.Beam([smo260459,smo260461]);
const dirsmo403418 = smo263602.getStemDirection();
smo263602.setStemDirection(dirsmo403418);
smo263604.setStemDirection(dirsmo403418);
const smo403418 = new VF.Beam([smo263602,smo263604]);
const dirsmo403420 = smo266718.getStemDirection();
smo266718.setStemDirection(dirsmo403420);
smo266720.setStemDirection(dirsmo403420);
const smo403420 = new VF.Beam([smo266718,smo266720]);
const dirsmo403422 = smo269737.getStemDirection();
smo269737.setStemDirection(dirsmo403422);
smo269739.setStemDirection(dirsmo403422);
const smo403422 = new VF.Beam([smo269737,smo269739]);
 
// formatting measures in staff group smo312125
fmtsmo25748863.format([smo257488v0,smo260482v0,smo263625v0,smo266741v0,smo269760v0], 236);
const stavesmo257488 = new VF.Stave(159, 210, 310);
stavesmo257488.setAttribute('id', 'stavesmo257488');
stavesmo257488.setBegBarType(1);
stavesmo257488.setSection('D', 0);
stavesmo257488.addClef('treble');
const keysmo257488 = new VF.KeySignature('D');
keysmo257488.addToStave(stavesmo257488);
stavesmo257488.setContext(context);
stavesmo257488.draw();
smo257488v0.draw(context, stavesmo257488);
smo403414.setContext(context);
smo403414.draw();
const stavesmo260482 = new VF.Stave(159, 309, 310);
stavesmo260482.setAttribute('id', 'stavesmo260482');
stavesmo260482.setBegBarType(1);
stavesmo260482.addClef('treble');
const keysmo260482 = new VF.KeySignature('D');
keysmo260482.addToStave(stavesmo260482);
stavesmo260482.setContext(context);
stavesmo260482.draw();
smo260482v0.draw(context, stavesmo260482);
smo403416.setContext(context);
smo403416.draw();
const stavesmo263625 = new VF.Stave(159, 423, 310);
stavesmo263625.setAttribute('id', 'stavesmo263625');
stavesmo263625.setBegBarType(1);
stavesmo263625.addClef('treble');
const keysmo263625 = new VF.KeySignature('G');
keysmo263625.addToStave(stavesmo263625);
stavesmo263625.setContext(context);
stavesmo263625.draw();
smo263625v0.draw(context, stavesmo263625);
smo403418.setContext(context);
smo403418.draw();
const stavesmo266741 = new VF.Stave(159, 532, 310);
stavesmo266741.setAttribute('id', 'stavesmo266741');
stavesmo266741.setBegBarType(1);
stavesmo266741.addClef('treble');
const keysmo266741 = new VF.KeySignature('G');
keysmo266741.addToStave(stavesmo266741);
stavesmo266741.setContext(context);
stavesmo266741.draw();
smo266741v0.draw(context, stavesmo266741);
smo403420.setContext(context);
smo403420.draw();
const stavesmo269760 = new VF.Stave(159, 631, 310);
stavesmo269760.setAttribute('id', 'stavesmo269760');
stavesmo269760.setBegBarType(1);
stavesmo269760.addClef('treble');
const keysmo269760 = new VF.KeySignature('D');
keysmo269760.addToStave(stavesmo269760);
stavesmo269760.setContext(context);
stavesmo269760.draw();
smo269760v0.draw(context, stavesmo269760);
smo403422.setContext(context);
smo403422.draw();
// create beam groups and tuplets for format grp smo312127 before formatting
const dirsmo403424 = smo272841.getStemDirection();
smo272841.setStemDirection(dirsmo403424);
smo272842.setStemDirection(dirsmo403424);
const smo403424 = new VF.Beam([smo272841,smo272842]);
const dirsmo403425 = smo272844.getStemDirection();
smo272844.setStemDirection(dirsmo403425);
smo272846.setStemDirection(dirsmo403425);
const smo403425 = new VF.Beam([smo272844,smo272846]);
const dirsmo403427 = smo275956.getStemDirection();
smo275956.setStemDirection(dirsmo403427);
smo275958.setStemDirection(dirsmo403427);
const smo403427 = new VF.Beam([smo275956,smo275958]);
const dirsmo403429 = smo279065.getStemDirection();
smo279065.setStemDirection(dirsmo403429);
smo279067.setStemDirection(dirsmo403429);
const smo403429 = new VF.Beam([smo279065,smo279067]);
const dirsmo403431 = smo282151.getStemDirection();
smo282151.setStemDirection(dirsmo403431);
smo282153.setStemDirection(dirsmo403431);
const smo403431 = new VF.Beam([smo282151,smo282153]);
 
// formatting measures in staff group smo312127
fmtsmo27286763.format([smo272867v0,smo275979v0,smo279088v0,smo282174v0], 245);
const stavesmo272867 = new VF.Stave(159, 745, 310);
stavesmo272867.setAttribute('id', 'stavesmo272867');
stavesmo272867.setBegBarType(1);
stavesmo272867.addClef('treble');
const keysmo272867 = new VF.KeySignature('G');
keysmo272867.addToStave(stavesmo272867);
stavesmo272867.setContext(context);
stavesmo272867.draw();
smo272867v0.draw(context, stavesmo272867);
smo403424.setContext(context);
smo403424.draw();
smo403425.setContext(context);
smo403425.draw();
const stavesmo275979 = new VF.Stave(159, 853, 310);
stavesmo275979.setAttribute('id', 'stavesmo275979');
stavesmo275979.setBegBarType(1);
stavesmo275979.addClef('treble');
const keysmo275979 = new VF.KeySignature('G');
keysmo275979.addToStave(stavesmo275979);
stavesmo275979.setContext(context);
stavesmo275979.draw();
smo275979v0.draw(context, stavesmo275979);
smo403427.setContext(context);
smo403427.draw();
const stavesmo279088 = new VF.Stave(159, 962, 310);
stavesmo279088.setAttribute('id', 'stavesmo279088');
stavesmo279088.setBegBarType(1);
stavesmo279088.addClef('treble');
const keysmo279088 = new VF.KeySignature('G');
keysmo279088.addToStave(stavesmo279088);
stavesmo279088.setContext(context);
stavesmo279088.draw();
smo279088v0.draw(context, stavesmo279088);
smo403429.setContext(context);
smo403429.draw();
const stavesmo282174 = new VF.Stave(159, 1071, 310);
stavesmo282174.setAttribute('id', 'stavesmo282174');
stavesmo282174.setBegBarType(1);
stavesmo282174.addClef('treble');
const keysmo282174 = new VF.KeySignature('G');
keysmo282174.addToStave(stavesmo282174);
stavesmo282174.setContext(context);
stavesmo282174.draw();
smo282174v0.draw(context, stavesmo282174);
smo403431.setContext(context);
smo403431.draw();
// create beam groups and tuplets for format grp smo312129 before formatting
const dirsmo403433 = smo285240.getStemDirection();
smo285240.setStemDirection(dirsmo403433);
smo285242.setStemDirection(dirsmo403433);
const smo403433 = new VF.Beam([smo285240,smo285242]);
const dirsmo403435 = smo288280.getStemDirection();
smo288280.setStemDirection(dirsmo403435);
smo288282.setStemDirection(dirsmo403435);
const smo403435 = new VF.Beam([smo288280,smo288282]);
const dirsmo403437 = smo291334.getStemDirection();
smo291334.setStemDirection(dirsmo403437);
smo291336.setStemDirection(dirsmo403437);
const smo403437 = new VF.Beam([smo291334,smo291336]);
const dirsmo403439 = smo294377.getStemDirection();
smo294377.setStemDirection(dirsmo403439);
smo294379.setStemDirection(dirsmo403439);
const smo403439 = new VF.Beam([smo294377,smo294379]);
 
// formatting measures in staff group smo312129
fmtsmo28526363.format([smo285263v0,smo288303v0,smo291357v0,smo294400v0], 246);
const stavesmo285263 = new VF.Stave(159, 1200, 310);
stavesmo285263.setAttribute('id', 'stavesmo285263');
stavesmo285263.setBegBarType(1);
stavesmo285263.addClef('bass');
const keysmo285263 = new VF.KeySignature('F');
keysmo285263.addToStave(stavesmo285263);
stavesmo285263.setContext(context);
stavesmo285263.draw();
smo285263v0.draw(context, stavesmo285263);
smo403433.setContext(context);
smo403433.draw();
const stavesmo288303 = new VF.Stave(159, 1329, 310);
stavesmo288303.setAttribute('id', 'stavesmo288303');
stavesmo288303.setBegBarType(1);
stavesmo288303.addClef('bass');
const keysmo288303 = new VF.KeySignature('F');
keysmo288303.addToStave(stavesmo288303);
stavesmo288303.setContext(context);
stavesmo288303.draw();
smo288303v0.draw(context, stavesmo288303);
smo403435.setContext(context);
smo403435.draw();
const stavesmo291357 = new VF.Stave(159, 1458, 310);
stavesmo291357.setAttribute('id', 'stavesmo291357');
stavesmo291357.setBegBarType(1);
stavesmo291357.addClef('bass');
const keysmo291357 = new VF.KeySignature('F');
keysmo291357.addToStave(stavesmo291357);
stavesmo291357.setContext(context);
stavesmo291357.draw();
smo291357v0.draw(context, stavesmo291357);
smo403437.setContext(context);
smo403437.draw();
const stavesmo294400 = new VF.Stave(159, 1587, 310);
stavesmo294400.setAttribute('id', 'stavesmo294400');
stavesmo294400.setBegBarType(1);
stavesmo294400.addClef('bass');
const keysmo294400 = new VF.KeySignature('F');
keysmo294400.addToStave(stavesmo294400);
stavesmo294400.setContext(context);
stavesmo294400.draw();
smo294400v0.draw(context, stavesmo294400);
smo403439.setContext(context);
smo403439.draw();
// create beam groups and tuplets for format grp smo299448 before formatting
const dirsmo403441 = smo297596.getStemDirection();
smo297596.setStemDirection(dirsmo403441);
smo297597.setStemDirection(dirsmo403441);
const smo403441 = new VF.Beam([smo297596,smo297597]);
 
// formatting measures in staff group smo299448
fmtsmo29761663.format([smo297616v0], 247);
const stavesmo297616 = new VF.Stave(159, 1726, 310);
stavesmo297616.setAttribute('id', 'stavesmo297616');
stavesmo297616.setBegBarType(1);
stavesmo297616.addClef('treble');
const keysmo297616 = new VF.KeySignature('F');
keysmo297616.addToStave(stavesmo297616);
stavesmo297616.setContext(context);
stavesmo297616.draw();
smo297616v0.draw(context, stavesmo297616);
smo403441.setContext(context);
smo403441.draw();
// create beam groups and tuplets for format grp smo312123 before formatting
const dirsmo403443 = smo300809.getStemDirection();
smo300809.setStemDirection(dirsmo403443);
smo300810.setStemDirection(dirsmo403443);
const smo403443 = new VF.Beam([smo300809,smo300810]);
const dirsmo403445 = smo304004.getStemDirection();
smo304004.setStemDirection(dirsmo403445);
smo304005.setStemDirection(dirsmo403445);
const smo403445 = new VF.Beam([smo304004,smo304005]);
 
// formatting measures in staff group smo312123
fmtsmo30082963.format([smo300829v0,smo304024v0], 247);
const stavesmo300829 = new VF.Stave(159, 1831, 310);
stavesmo300829.setAttribute('id', 'stavesmo300829');
stavesmo300829.setBegBarType(1);
stavesmo300829.addClef('treble');
const keysmo300829 = new VF.KeySignature('F');
keysmo300829.addToStave(stavesmo300829);
stavesmo300829.setContext(context);
stavesmo300829.draw();
smo300829v0.draw(context, stavesmo300829);
smo403443.setContext(context);
smo403443.draw();
const stavesmo304024 = new VF.Stave(159, 1917, 310);
stavesmo304024.setAttribute('id', 'stavesmo304024');
stavesmo304024.setBegBarType(1);
stavesmo304024.addClef('bass');
const keysmo304024 = new VF.KeySignature('F');
keysmo304024.addToStave(stavesmo304024);
stavesmo304024.setContext(context);
stavesmo304024.draw();
smo304024v0.draw(context, stavesmo304024);
smo403445.setContext(context);
smo403445.draw();
// create beam groups and tuplets for format grp smo308961 before formatting
 
// formatting measures in staff group smo308961
fmtsmo30714363.format([smo307143v0], 246);
const stavesmo307143 = new VF.Stave(159, 1988, 310);
stavesmo307143.setAttribute('id', 'stavesmo307143');
stavesmo307143.setBegBarType(1);
stavesmo307143.addClef('bass');
const keysmo307143 = new VF.KeySignature('F');
keysmo307143.addToStave(stavesmo307143);
stavesmo307143.setContext(context);
stavesmo307143.draw();
smo307143v0.draw(context, stavesmo307143);
// create beam groups and tuplets for format grp smo312117 before formatting
 
// formatting measures in staff group smo312117
fmtsmo31032463.format([smo310324v0], 246);
const stavesmo310324 = new VF.Stave(159, 2059, 310);
stavesmo310324.setAttribute('id', 'stavesmo310324');
stavesmo310324.setBegBarType(1);
stavesmo310324.addClef('percussion');
const keysmo310324 = new VF.KeySignature('F');
keysmo310324.addToStave(stavesmo310324);
stavesmo310324.setContext(context);
stavesmo310324.draw();
smo310324v0.draw(context, stavesmo310324);
const leftsmo312117stavesmo25748817 = new VF.StaveConnector(stavesmo257488, stavesmo269760).setType(3);
leftsmo312117stavesmo25748817.setContext(context).draw();
const leftsmo312117stavesmo27286717 = new VF.StaveConnector(stavesmo272867, stavesmo282174).setType(3);
leftsmo312117stavesmo27286717.setContext(context).draw();
const leftsmo312117stavesmo28526317 = new VF.StaveConnector(stavesmo285263, stavesmo294400).setType(1);
leftsmo312117stavesmo28526317.setContext(context).draw();
const leftsmo312117stavesmo30082917 = new VF.StaveConnector(stavesmo300829, stavesmo304024).setType(3);
leftsmo312117stavesmo30082917.setContext(context).draw();
const fmtsmo25751364 = new VF.Formatter();
//
// voices and notes for stave 0 64
const smo257513v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo257513v0ar = [];
const smo257489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo257489.setAttribute('id', 'smo257489');
const smo257490 = new VF.Annotation('bun');
smo257490.setAttribute('id', 'smo257490');
smo257490.setFont('times', 12, 'normal');
smo257490.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257489.addModifier(smo257490);
smo257490.addClass('lyric lyric-0');
smo257513v0ar.push(smo257489);
const smo257491 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo257491.setAttribute('id', 'smo257491');
smo257513v0ar.push(smo257491);
const smo257492 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo257492.setAttribute('id', 'smo257492');
smo257513v0ar.push(smo257492);
const smo257493 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo257493.setAttribute('id', 'smo257493');
const smo257494 = new VF.Annotation('Man');
smo257494.setAttribute('id', 'smo257494');
smo257494.setFont('times', 12, 'normal');
smo257494.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257493.addModifier(smo257494);
smo257494.addClass('lyric lyric-0 lyric-hyphen');
smo257513v0ar.push(smo257493);
const smo257495 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo257495.setAttribute('id', 'smo257495');
smo257513v0ar.push(smo257495);
const smo257496 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo257496.setAttribute('id', 'smo257496');
const smo2574960acc = new VF.Accidental('n');
smo257496.addModifier(smo2574960acc, 0);
const smo257497 = new VF.Annotation('ding');
smo257497.setAttribute('id', 'smo257497');
smo257497.setFont('times', 12, 'normal');
smo257497.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257496.addModifier(smo257497);
smo257497.addClass('lyric lyric-0 lyric-hyphen');
smo257513v0ar.push(smo257496);
smo257513v0.addTickables(smo257513v0ar)
fmtsmo25751364.joinVoices([smo257513v0]);
const fmtsmo26050764 = new VF.Formatter();
//
// voices and notes for stave 1 64
const smo260507v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo260507v0ar = [];
const smo260483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo260483.setAttribute('id', 'smo260483');
const smo260484 = new VF.Annotation('bun');
smo260484.setAttribute('id', 'smo260484');
smo260484.setFont('times', 12, 'normal');
smo260484.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260483.addModifier(smo260484);
smo260484.addClass('lyric lyric-0');
smo260507v0ar.push(smo260483);
const smo260485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo260485.setAttribute('id', 'smo260485');
smo260507v0ar.push(smo260485);
const smo260486 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo260486.setAttribute('id', 'smo260486');
smo260507v0ar.push(smo260486);
const smo260487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo260487.setAttribute('id', 'smo260487');
const smo260488 = new VF.Annotation('Man');
smo260488.setAttribute('id', 'smo260488');
smo260488.setFont('times', 12, 'normal');
smo260488.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260487.addModifier(smo260488);
smo260488.addClass('lyric lyric-0 lyric-hyphen');
smo260507v0ar.push(smo260487);
const smo260489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo260489.setAttribute('id', 'smo260489');
smo260507v0ar.push(smo260489);
const smo260490 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo260490.setAttribute('id', 'smo260490');
const smo2604900acc = new VF.Accidental('n');
smo260490.addModifier(smo2604900acc, 0);
const smo260491 = new VF.Annotation('ding');
smo260491.setAttribute('id', 'smo260491');
smo260491.setFont('times', 12, 'normal');
smo260491.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260490.addModifier(smo260491);
smo260491.addClass('lyric lyric-0 lyric-hyphen');
smo260507v0ar.push(smo260490);
smo260507v0.addTickables(smo260507v0ar)
fmtsmo26050764.joinVoices([smo260507v0]);
const fmtsmo26365064 = new VF.Formatter();
//
// voices and notes for stave 2 64
const smo263650v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo263650v0ar = [];
const smo263626 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo263626.setAttribute('id', 'smo263626');
const smo263627 = new VF.Annotation('bun');
smo263627.setAttribute('id', 'smo263627');
smo263627.setFont('times', 12, 'normal');
smo263627.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263626.addModifier(smo263627);
smo263627.addClass('lyric lyric-0');
smo263650v0ar.push(smo263626);
const smo263628 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo263628.setAttribute('id', 'smo263628');
smo263650v0ar.push(smo263628);
const smo263629 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo263629.setAttribute('id', 'smo263629');
smo263650v0ar.push(smo263629);
const smo263630 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo263630.setAttribute('id', 'smo263630');
const smo263631 = new VF.Annotation('Man');
smo263631.setAttribute('id', 'smo263631');
smo263631.setFont('times', 12, 'normal');
smo263631.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263630.addModifier(smo263631);
smo263631.addClass('lyric lyric-0 lyric-hyphen');
smo263650v0ar.push(smo263630);
const smo263632 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo263632.setAttribute('id', 'smo263632');
smo263650v0ar.push(smo263632);
const smo263633 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo263633.setAttribute('id', 'smo263633');
const smo2636330acc = new VF.Accidental('n');
smo263633.addModifier(smo2636330acc, 0);
const smo263634 = new VF.Annotation('ding');
smo263634.setAttribute('id', 'smo263634');
smo263634.setFont('times', 12, 'normal');
smo263634.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263633.addModifier(smo263634);
smo263634.addClass('lyric lyric-0 lyric-hyphen');
smo263650v0ar.push(smo263633);
smo263650v0.addTickables(smo263650v0ar)
fmtsmo26365064.joinVoices([smo263650v0]);
const fmtsmo26676664 = new VF.Formatter();
//
// voices and notes for stave 3 64
const smo266766v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266766v0ar = [];
const smo266742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo266742.setAttribute('id', 'smo266742');
const smo266743 = new VF.Annotation('bun');
smo266743.setAttribute('id', 'smo266743');
smo266743.setFont('times', 12, 'normal');
smo266743.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266742.addModifier(smo266743);
smo266743.addClass('lyric lyric-0');
smo266766v0ar.push(smo266742);
const smo266744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo266744.setAttribute('id', 'smo266744');
smo266766v0ar.push(smo266744);
const smo266745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo266745.setAttribute('id', 'smo266745');
smo266766v0ar.push(smo266745);
const smo266746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo266746.setAttribute('id', 'smo266746');
const smo266747 = new VF.Annotation('Man');
smo266747.setAttribute('id', 'smo266747');
smo266747.setFont('times', 12, 'normal');
smo266747.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266746.addModifier(smo266747);
smo266747.addClass('lyric lyric-0 lyric-hyphen');
smo266766v0ar.push(smo266746);
const smo266748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo266748.setAttribute('id', 'smo266748');
smo266766v0ar.push(smo266748);
const smo266749 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo266749.setAttribute('id', 'smo266749');
const smo2667490acc = new VF.Accidental('n');
smo266749.addModifier(smo2667490acc, 0);
const smo266750 = new VF.Annotation('ding');
smo266750.setAttribute('id', 'smo266750');
smo266750.setFont('times', 12, 'normal');
smo266750.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266749.addModifier(smo266750);
smo266750.addClass('lyric lyric-0 lyric-hyphen');
smo266766v0ar.push(smo266749);
smo266766v0.addTickables(smo266766v0ar)
fmtsmo26676664.joinVoices([smo266766v0]);
const fmtsmo26978564 = new VF.Formatter();
//
// voices and notes for stave 4 64
const smo269785v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269785v0ar = [];
const smo269761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo269761.setAttribute('id', 'smo269761');
const smo269762 = new VF.Annotation('bun');
smo269762.setAttribute('id', 'smo269762');
smo269762.setFont('times', 12, 'normal');
smo269762.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269761.addModifier(smo269762);
smo269762.addClass('lyric lyric-0');
smo269785v0ar.push(smo269761);
const smo269763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo269763.setAttribute('id', 'smo269763');
smo269785v0ar.push(smo269763);
const smo269764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo269764.setAttribute('id', 'smo269764');
smo269785v0ar.push(smo269764);
const smo269765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo269765.setAttribute('id', 'smo269765');
const smo269766 = new VF.Annotation('Man');
smo269766.setAttribute('id', 'smo269766');
smo269766.setFont('times', 12, 'normal');
smo269766.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269765.addModifier(smo269766);
smo269766.addClass('lyric lyric-0 lyric-hyphen');
smo269785v0ar.push(smo269765);
const smo269767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo269767.setAttribute('id', 'smo269767');
smo269785v0ar.push(smo269767);
const smo269768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo269768.setAttribute('id', 'smo269768');
const smo2697680acc = new VF.Accidental('n');
smo269768.addModifier(smo2697680acc, 0);
const smo269769 = new VF.Annotation('ding');
smo269769.setAttribute('id', 'smo269769');
smo269769.setFont('times', 12, 'normal');
smo269769.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269768.addModifier(smo269769);
smo269769.addClass('lyric lyric-0 lyric-hyphen');
smo269785v0ar.push(smo269768);
smo269785v0.addTickables(smo269785v0ar)
fmtsmo26978564.joinVoices([smo269785v0]);
const fmtsmo27289264 = new VF.Formatter();
//
// voices and notes for stave 5 64
const smo272892v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272892v0ar = [];
const smo272868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo272868.setAttribute('id', 'smo272868');
const smo272869 = new VF.Annotation('bun');
smo272869.setAttribute('id', 'smo272869');
smo272869.setFont('times', 12, 'normal');
smo272869.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272868.addModifier(smo272869);
smo272869.addClass('lyric lyric-0');
smo272892v0ar.push(smo272868);
const smo272870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo272870.setAttribute('id', 'smo272870');
smo272892v0ar.push(smo272870);
const smo272871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo272871.setAttribute('id', 'smo272871');
smo272892v0ar.push(smo272871);
const smo272872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo272872.setAttribute('id', 'smo272872');
const smo272873 = new VF.Annotation('Man');
smo272873.setAttribute('id', 'smo272873');
smo272873.setFont('times', 12, 'normal');
smo272873.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272872.addModifier(smo272873);
smo272873.addClass('lyric lyric-0 lyric-hyphen');
smo272892v0ar.push(smo272872);
const smo272874 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo272874.setAttribute('id', 'smo272874');
smo272892v0ar.push(smo272874);
const smo272875 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo272875.setAttribute('id', 'smo272875');
const smo2728750acc = new VF.Accidental('n');
smo272875.addModifier(smo2728750acc, 0);
const smo272876 = new VF.Annotation('ding');
smo272876.setAttribute('id', 'smo272876');
smo272876.setFont('times', 12, 'normal');
smo272876.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272875.addModifier(smo272876);
smo272876.addClass('lyric lyric-0 lyric-hyphen');
smo272892v0ar.push(smo272875);
smo272892v0.addTickables(smo272892v0ar)
fmtsmo27289264.joinVoices([smo272892v0]);
const fmtsmo27600464 = new VF.Formatter();
//
// voices and notes for stave 6 64
const smo276004v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo276004v0ar = [];
const smo275980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo275980.setAttribute('id', 'smo275980');
const smo275981 = new VF.Annotation('bun');
smo275981.setAttribute('id', 'smo275981');
smo275981.setFont('times', 12, 'normal');
smo275981.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275980.addModifier(smo275981);
smo275981.addClass('lyric lyric-0');
smo276004v0ar.push(smo275980);
const smo275982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo275982.setAttribute('id', 'smo275982');
smo276004v0ar.push(smo275982);
const smo275983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo275983.setAttribute('id', 'smo275983');
smo276004v0ar.push(smo275983);
const smo275984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo275984.setAttribute('id', 'smo275984');
const smo275985 = new VF.Annotation('Man');
smo275985.setAttribute('id', 'smo275985');
smo275985.setFont('times', 12, 'normal');
smo275985.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275984.addModifier(smo275985);
smo275985.addClass('lyric lyric-0 lyric-hyphen');
smo276004v0ar.push(smo275984);
const smo275986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo275986.setAttribute('id', 'smo275986');
smo276004v0ar.push(smo275986);
const smo275987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo275987.setAttribute('id', 'smo275987');
const smo2759870acc = new VF.Accidental('n');
smo275987.addModifier(smo2759870acc, 0);
const smo275988 = new VF.Annotation('ding');
smo275988.setAttribute('id', 'smo275988');
smo275988.setFont('times', 12, 'normal');
smo275988.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo275987.addModifier(smo275988);
smo275988.addClass('lyric lyric-0 lyric-hyphen');
smo276004v0ar.push(smo275987);
smo276004v0.addTickables(smo276004v0ar)
fmtsmo27600464.joinVoices([smo276004v0]);
const fmtsmo27911364 = new VF.Formatter();
//
// voices and notes for stave 7 64
const smo279113v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo279113v0ar = [];
const smo279089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo279089.setAttribute('id', 'smo279089');
const smo279090 = new VF.Annotation('bun');
smo279090.setAttribute('id', 'smo279090');
smo279090.setFont('times', 12, 'normal');
smo279090.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo279089.addModifier(smo279090);
smo279090.addClass('lyric lyric-0');
smo279113v0ar.push(smo279089);
const smo279091 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo279091.setAttribute('id', 'smo279091');
smo279113v0ar.push(smo279091);
const smo279092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo279092.setAttribute('id', 'smo279092');
smo279113v0ar.push(smo279092);
const smo279093 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo279093.setAttribute('id', 'smo279093');
const smo279094 = new VF.Annotation('Man');
smo279094.setAttribute('id', 'smo279094');
smo279094.setFont('times', 12, 'normal');
smo279094.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo279093.addModifier(smo279094);
smo279094.addClass('lyric lyric-0 lyric-hyphen');
smo279113v0ar.push(smo279093);
const smo279095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo279095.setAttribute('id', 'smo279095');
smo279113v0ar.push(smo279095);
const smo279096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo279096.setAttribute('id', 'smo279096');
const smo2790960acc = new VF.Accidental('n');
smo279096.addModifier(smo2790960acc, 0);
const smo279097 = new VF.Annotation('ding');
smo279097.setAttribute('id', 'smo279097');
smo279097.setFont('times', 12, 'normal');
smo279097.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo279096.addModifier(smo279097);
smo279097.addClass('lyric lyric-0 lyric-hyphen');
smo279113v0ar.push(smo279096);
smo279113v0.addTickables(smo279113v0ar)
fmtsmo27911364.joinVoices([smo279113v0]);
const fmtsmo28219964 = new VF.Formatter();
//
// voices and notes for stave 8 64
const smo282199v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo282199v0ar = [];
const smo282175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo282175.setAttribute('id', 'smo282175');
const smo282176 = new VF.Annotation('bun');
smo282176.setAttribute('id', 'smo282176');
smo282176.setFont('times', 12, 'normal');
smo282176.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282175.addModifier(smo282176);
smo282176.addClass('lyric lyric-0');
smo282199v0ar.push(smo282175);
const smo282177 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo282177.setAttribute('id', 'smo282177');
smo282199v0ar.push(smo282177);
const smo282178 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo282178.setAttribute('id', 'smo282178');
smo282199v0ar.push(smo282178);
const smo282179 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo282179.setAttribute('id', 'smo282179');
const smo282180 = new VF.Annotation('Man');
smo282180.setAttribute('id', 'smo282180');
smo282180.setFont('times', 12, 'normal');
smo282180.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282179.addModifier(smo282180);
smo282180.addClass('lyric lyric-0 lyric-hyphen');
smo282199v0ar.push(smo282179);
const smo282181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo282181.setAttribute('id', 'smo282181');
smo282199v0ar.push(smo282181);
const smo282182 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo282182.setAttribute('id', 'smo282182');
const smo2821820acc = new VF.Accidental('n');
smo282182.addModifier(smo2821820acc, 0);
const smo282183 = new VF.Annotation('ding');
smo282183.setAttribute('id', 'smo282183');
smo282183.setFont('times', 12, 'normal');
smo282183.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282182.addModifier(smo282183);
smo282183.addClass('lyric lyric-0 lyric-hyphen');
smo282199v0ar.push(smo282182);
smo282199v0.addTickables(smo282199v0ar)
fmtsmo28219964.joinVoices([smo282199v0]);
const fmtsmo28528864 = new VF.Formatter();
//
// voices and notes for stave 9 64
const smo285288v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo285288v0ar = [];
const smo285264 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo285264.setAttribute('id', 'smo285264');
const smo285265 = new VF.Annotation('bun');
smo285265.setAttribute('id', 'smo285265');
smo285265.setFont('times', 12, 'normal');
smo285265.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285264.addModifier(smo285265);
smo285265.addClass('lyric lyric-0');
smo285288v0ar.push(smo285264);
const smo285266 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo285266.setAttribute('id', 'smo285266');
smo285288v0ar.push(smo285266);
const smo285267 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo285267.setAttribute('id', 'smo285267');
smo285288v0ar.push(smo285267);
const smo285268 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo285268.setAttribute('id', 'smo285268');
const smo285269 = new VF.Annotation('Man');
smo285269.setAttribute('id', 'smo285269');
smo285269.setFont('times', 12, 'normal');
smo285269.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285268.addModifier(smo285269);
smo285269.addClass('lyric lyric-0 lyric-hyphen');
smo285288v0ar.push(smo285268);
const smo285270 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo285270.setAttribute('id', 'smo285270');
smo285288v0ar.push(smo285270);
const smo285271 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo285271.setAttribute('id', 'smo285271');
const smo2852710acc = new VF.Accidental('b');
smo285271.addModifier(smo2852710acc, 0);
const smo285272 = new VF.Annotation('ding');
smo285272.setAttribute('id', 'smo285272');
smo285272.setFont('times', 12, 'normal');
smo285272.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285271.addModifier(smo285272);
smo285272.addClass('lyric lyric-0 lyric-hyphen');
smo285288v0ar.push(smo285271);
smo285288v0.addTickables(smo285288v0ar)
fmtsmo28528864.joinVoices([smo285288v0]);
const fmtsmo28832864 = new VF.Formatter();
//
// voices and notes for stave 10 64
const smo288328v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo288328v0ar = [];
const smo288304 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo288304.setAttribute('id', 'smo288304');
const smo288305 = new VF.Annotation('bun');
smo288305.setAttribute('id', 'smo288305');
smo288305.setFont('times', 12, 'normal');
smo288305.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288304.addModifier(smo288305);
smo288305.addClass('lyric lyric-0');
smo288328v0ar.push(smo288304);
const smo288306 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo288306.setAttribute('id', 'smo288306');
smo288328v0ar.push(smo288306);
const smo288307 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo288307.setAttribute('id', 'smo288307');
smo288328v0ar.push(smo288307);
const smo288308 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo288308.setAttribute('id', 'smo288308');
const smo288309 = new VF.Annotation('Man');
smo288309.setAttribute('id', 'smo288309');
smo288309.setFont('times', 12, 'normal');
smo288309.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288308.addModifier(smo288309);
smo288309.addClass('lyric lyric-0 lyric-hyphen');
smo288328v0ar.push(smo288308);
const smo288310 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo288310.setAttribute('id', 'smo288310');
smo288328v0ar.push(smo288310);
const smo288311 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo288311.setAttribute('id', 'smo288311');
const smo2883110acc = new VF.Accidental('b');
smo288311.addModifier(smo2883110acc, 0);
const smo288312 = new VF.Annotation('ding');
smo288312.setAttribute('id', 'smo288312');
smo288312.setFont('times', 12, 'normal');
smo288312.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288311.addModifier(smo288312);
smo288312.addClass('lyric lyric-0 lyric-hyphen');
smo288328v0ar.push(smo288311);
smo288328v0.addTickables(smo288328v0ar)
fmtsmo28832864.joinVoices([smo288328v0]);
const fmtsmo29138264 = new VF.Formatter();
//
// voices and notes for stave 11 64
const smo291382v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo291382v0ar = [];
const smo291358 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo291358.setAttribute('id', 'smo291358');
const smo291359 = new VF.Annotation('bun');
smo291359.setAttribute('id', 'smo291359');
smo291359.setFont('times', 12, 'normal');
smo291359.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291358.addModifier(smo291359);
smo291359.addClass('lyric lyric-0');
smo291382v0ar.push(smo291358);
const smo291360 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo291360.setAttribute('id', 'smo291360');
smo291382v0ar.push(smo291360);
const smo291361 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo291361.setAttribute('id', 'smo291361');
smo291382v0ar.push(smo291361);
const smo291362 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo291362.setAttribute('id', 'smo291362');
const smo291363 = new VF.Annotation('Man');
smo291363.setAttribute('id', 'smo291363');
smo291363.setFont('times', 12, 'normal');
smo291363.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291362.addModifier(smo291363);
smo291363.addClass('lyric lyric-0 lyric-hyphen');
smo291382v0ar.push(smo291362);
const smo291364 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo291364.setAttribute('id', 'smo291364');
smo291382v0ar.push(smo291364);
const smo291365 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo291365.setAttribute('id', 'smo291365');
const smo2913650acc = new VF.Accidental('b');
smo291365.addModifier(smo2913650acc, 0);
const smo291366 = new VF.Annotation('ding');
smo291366.setAttribute('id', 'smo291366');
smo291366.setFont('times', 12, 'normal');
smo291366.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291365.addModifier(smo291366);
smo291366.addClass('lyric lyric-0 lyric-hyphen');
smo291382v0ar.push(smo291365);
smo291382v0.addTickables(smo291382v0ar)
fmtsmo29138264.joinVoices([smo291382v0]);
const fmtsmo29442564 = new VF.Formatter();
//
// voices and notes for stave 12 64
const smo294425v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo294425v0ar = [];
const smo294401 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo294401.setAttribute('id', 'smo294401');
const smo294402 = new VF.Annotation('bun');
smo294402.setAttribute('id', 'smo294402');
smo294402.setFont('times', 12, 'normal');
smo294402.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo294401.addModifier(smo294402);
smo294402.addClass('lyric lyric-0');
smo294425v0ar.push(smo294401);
const smo294403 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo294403.setAttribute('id', 'smo294403');
smo294425v0ar.push(smo294403);
const smo294404 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo294404.setAttribute('id', 'smo294404');
smo294425v0ar.push(smo294404);
const smo294405 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo294405.setAttribute('id', 'smo294405');
const smo294406 = new VF.Annotation('Man');
smo294406.setAttribute('id', 'smo294406');
smo294406.setFont('times', 12, 'normal');
smo294406.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo294405.addModifier(smo294406);
smo294406.addClass('lyric lyric-0 lyric-hyphen');
smo294425v0ar.push(smo294405);
const smo294407 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo294407.setAttribute('id', 'smo294407');
smo294425v0ar.push(smo294407);
const smo294408 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo294408.setAttribute('id', 'smo294408');
const smo2944080acc = new VF.Accidental('b');
smo294408.addModifier(smo2944080acc, 0);
const smo294409 = new VF.Annotation('ding');
smo294409.setAttribute('id', 'smo294409');
smo294409.setFont('times', 12, 'normal');
smo294409.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo294408.addModifier(smo294409);
smo294409.addClass('lyric lyric-0 lyric-hyphen');
smo294425v0ar.push(smo294408);
smo294425v0.addTickables(smo294425v0ar)
fmtsmo29442564.joinVoices([smo294425v0]);
const fmtsmo29763764 = new VF.Formatter();
//
// voices and notes for stave 13 64
const smo297637v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo297637v0ar = [];
const smo297617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
smo297617.setAttribute('id', 'smo297617');
smo297617.addModifier(new VF.Dot(), 0);
smo297617.addModifier(new VF.Dot(), 1);
smo297617.addModifier(new VF.Dot(), 2);
smo297637v0ar.push(smo297617);
const smo297618 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo297618.setAttribute('id', 'smo297618');
smo297637v0ar.push(smo297618);
const smo297619 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo297619.setAttribute('id', 'smo297619');
smo297637v0ar.push(smo297619);
const smo297620 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo297620.setAttribute('id', 'smo297620');
const smo2976202acc = new VF.Accidental('b');
smo297620.addModifier(smo2976202acc, 2);
smo297637v0ar.push(smo297620);
const smo297621 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo297621.setAttribute('id', 'smo297621');
smo297637v0ar.push(smo297621);
smo297637v0.addTickables(smo297637v0ar)
fmtsmo29763764.joinVoices([smo297637v0]);
const fmtsmo30085064 = new VF.Formatter();
//
// voices and notes for stave 14 64
const smo300850v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300850v0ar = [];
const smo300830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
smo300830.setAttribute('id', 'smo300830');
smo300830.addModifier(new VF.Dot(), 0);
smo300830.addModifier(new VF.Dot(), 1);
smo300830.addModifier(new VF.Dot(), 2);
smo300850v0ar.push(smo300830);
const smo300831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo300831.setAttribute('id', 'smo300831');
smo300850v0ar.push(smo300831);
const smo300832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo300832.setAttribute('id', 'smo300832');
smo300850v0ar.push(smo300832);
const smo300833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo300833.setAttribute('id', 'smo300833');
const smo3008332acc = new VF.Accidental('b');
smo300833.addModifier(smo3008332acc, 2);
smo300850v0ar.push(smo300833);
const smo300834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo300834.setAttribute('id', 'smo300834');
smo300850v0ar.push(smo300834);
smo300850v0.addTickables(smo300850v0ar)
fmtsmo30085064.joinVoices([smo300850v0]);
const fmtsmo30404564 = new VF.Formatter();
//
// voices and notes for stave 15 64
const smo304045v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo304045v0ar = [];
const smo304025 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo304025.setAttribute('id', 'smo304025');
smo304025.addModifier(new VF.Dot(), 0);
smo304045v0ar.push(smo304025);
const smo304026 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo304026.setAttribute('id', 'smo304026');
smo304045v0ar.push(smo304026);
const smo304027 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo304027.setAttribute('id', 'smo304027');
smo304045v0ar.push(smo304027);
const smo304028 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo304028.setAttribute('id', 'smo304028');
smo304045v0ar.push(smo304028);
const smo304029 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo304029.setAttribute('id', 'smo304029');
smo304045v0ar.push(smo304029);
smo304045v0.addTickables(smo304045v0ar)
fmtsmo30404564.joinVoices([smo304045v0]);
const fmtsmo30716364 = new VF.Formatter();
//
// voices and notes for stave 16 64
const smo307163v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo307163v0ar = [];
const smo307144 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo307144.setAttribute('id', 'smo307144');
smo307144.addModifier(new VF.Dot(), 0);
smo307163v0ar.push(smo307144);
const smo307145 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo307145.setAttribute('id', 'smo307145');
smo307163v0ar.push(smo307145);
const smo307146 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo307146.setAttribute('id', 'smo307146');
smo307163v0ar.push(smo307146);
const smo307147 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo307147.setAttribute('id', 'smo307147');
smo307163v0ar.push(smo307147);
smo307163v0.addTickables(smo307163v0ar)
fmtsmo30716364.joinVoices([smo307163v0]);
const fmtsmo31035264 = new VF.Formatter();
//
// voices and notes for stave 17 64
const smo310352v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo310352v0ar = [];
const smo310325 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo310325.setAttribute('id', 'smo310325');
const smo310326 = new VF.Annotation('bun');
smo310326.setAttribute('id', 'smo310326');
smo310326.setFont('times', 12, 'normal');
smo310326.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo310325.addModifier(smo310326);
smo310326.addClass('lyric lyric-0');
smo310352v0ar.push(smo310325);
const smo310327 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo310327.setAttribute('id', 'smo310327');
smo310352v0ar.push(smo310327);
const smo310328 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo310328.setAttribute('id', 'smo310328');
smo310352v0ar.push(smo310328);
const smo310329 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo310329.setAttribute('id', 'smo310329');
smo310352v0ar.push(smo310329);
smo310352v0.addTickables(smo310352v0ar)
fmtsmo31035264.joinVoices([smo310352v0]);
const smo310352v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo310352v1ar = [];
const smo310330 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo310330.setAttribute('id', 'smo310330');
smo310330.setStyle({ fillStyle: '#aaaaaa7f' });
smo310352v1ar.push(smo310330);
const smo310331 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo310331.setAttribute('id', 'smo310331');
smo310331.setStyle({ fillStyle: '#aaaaaa7f' });
smo310352v1ar.push(smo310331);
const smo310332 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo310332.setAttribute('id', 'smo310332');
smo310332.setStyle({ fillStyle: '#aaaaaa7f' });
smo310352v1ar.push(smo310332);
const smo310333 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo310333.setAttribute('id', 'smo310333');
smo310333.setStyle({ fillStyle: '#aaaaaa7f' });
smo310352v1ar.push(smo310333);
smo310352v1.addTickables(smo310352v1ar)
fmtsmo31035264.joinVoices([smo310352v1]);
const smo310352v2 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo310352v2ar = [];
const smo310334 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo310334.setAttribute('id', 'smo310334');
smo310334.setStyle({ fillStyle: '#aaaaaa7f' });
const smo3103340acc = new VF.Accidental('n');
smo310334.addModifier(smo3103340acc, 0);
smo310352v2ar.push(smo310334);
const smo310335 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo310335.setAttribute('id', 'smo310335');
smo310335.setStyle({ fillStyle: '#aaaaaa7f' });
smo310352v2ar.push(smo310335);
const smo310336 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo310336.setAttribute('id', 'smo310336');
smo310336.setStyle({ fillStyle: '#aaaaaa7f' });
smo310352v2ar.push(smo310336);
smo310352v2.addTickables(smo310352v2ar)
fmtsmo31035264.joinVoices([smo310352v2]);
// create beam groups and tuplets for format grp smo312125 before formatting
const dirsmo403467 = smo257493.getStemDirection();
smo257493.setStemDirection(dirsmo403467);
smo257495.setStemDirection(dirsmo403467);
const smo403467 = new VF.Beam([smo257493,smo257495]);
const dirsmo403469 = smo260487.getStemDirection();
smo260487.setStemDirection(dirsmo403469);
smo260489.setStemDirection(dirsmo403469);
const smo403469 = new VF.Beam([smo260487,smo260489]);
const dirsmo403471 = smo263630.getStemDirection();
smo263630.setStemDirection(dirsmo403471);
smo263632.setStemDirection(dirsmo403471);
const smo403471 = new VF.Beam([smo263630,smo263632]);
const dirsmo403473 = smo266746.getStemDirection();
smo266746.setStemDirection(dirsmo403473);
smo266748.setStemDirection(dirsmo403473);
const smo403473 = new VF.Beam([smo266746,smo266748]);
const dirsmo403475 = smo269765.getStemDirection();
smo269765.setStemDirection(dirsmo403475);
smo269767.setStemDirection(dirsmo403475);
const smo403475 = new VF.Beam([smo269765,smo269767]);
 
// formatting measures in staff group smo312125
fmtsmo25751364.format([smo257513v0,smo260507v0,smo263650v0,smo266766v0,smo269785v0], 296);
const stavesmo257513 = new VF.Stave(469, 210, 310);
stavesmo257513.setAttribute('id', 'stavesmo257513');
stavesmo257513.setBegBarType(VF.Barline.type.NONE);
stavesmo257513.setContext(context);
stavesmo257513.draw();
smo257513v0.draw(context, stavesmo257513);
smo403467.setContext(context);
smo403467.draw();
const stavesmo260507 = new VF.Stave(469, 309, 310);
stavesmo260507.setAttribute('id', 'stavesmo260507');
stavesmo260507.setBegBarType(VF.Barline.type.NONE);
stavesmo260507.setContext(context);
stavesmo260507.draw();
smo260507v0.draw(context, stavesmo260507);
smo403469.setContext(context);
smo403469.draw();
const stavesmo263650 = new VF.Stave(469, 423, 310);
stavesmo263650.setAttribute('id', 'stavesmo263650');
stavesmo263650.setBegBarType(VF.Barline.type.NONE);
stavesmo263650.setContext(context);
stavesmo263650.draw();
smo263650v0.draw(context, stavesmo263650);
smo403471.setContext(context);
smo403471.draw();
const stavesmo266766 = new VF.Stave(469, 532, 310);
stavesmo266766.setAttribute('id', 'stavesmo266766');
stavesmo266766.setBegBarType(VF.Barline.type.NONE);
stavesmo266766.setContext(context);
stavesmo266766.draw();
smo266766v0.draw(context, stavesmo266766);
smo403473.setContext(context);
smo403473.draw();
const stavesmo269785 = new VF.Stave(469, 631, 310);
stavesmo269785.setAttribute('id', 'stavesmo269785');
stavesmo269785.setBegBarType(VF.Barline.type.NONE);
stavesmo269785.setContext(context);
stavesmo269785.draw();
smo269785v0.draw(context, stavesmo269785);
smo403475.setContext(context);
smo403475.draw();
// create beam groups and tuplets for format grp smo312127 before formatting
const dirsmo403477 = smo272872.getStemDirection();
smo272872.setStemDirection(dirsmo403477);
smo272874.setStemDirection(dirsmo403477);
const smo403477 = new VF.Beam([smo272872,smo272874]);
const dirsmo403479 = smo275984.getStemDirection();
smo275984.setStemDirection(dirsmo403479);
smo275986.setStemDirection(dirsmo403479);
const smo403479 = new VF.Beam([smo275984,smo275986]);
const dirsmo403481 = smo279093.getStemDirection();
smo279093.setStemDirection(dirsmo403481);
smo279095.setStemDirection(dirsmo403481);
const smo403481 = new VF.Beam([smo279093,smo279095]);
const dirsmo403483 = smo282179.getStemDirection();
smo282179.setStemDirection(dirsmo403483);
smo282181.setStemDirection(dirsmo403483);
const smo403483 = new VF.Beam([smo282179,smo282181]);
 
// formatting measures in staff group smo312127
fmtsmo27289264.format([smo272892v0,smo276004v0,smo279113v0,smo282199v0], 296);
const stavesmo272892 = new VF.Stave(469, 745, 310);
stavesmo272892.setAttribute('id', 'stavesmo272892');
stavesmo272892.setBegBarType(VF.Barline.type.NONE);
stavesmo272892.setContext(context);
stavesmo272892.draw();
smo272892v0.draw(context, stavesmo272892);
smo403477.setContext(context);
smo403477.draw();
const stavesmo276004 = new VF.Stave(469, 853, 310);
stavesmo276004.setAttribute('id', 'stavesmo276004');
stavesmo276004.setBegBarType(VF.Barline.type.NONE);
stavesmo276004.setContext(context);
stavesmo276004.draw();
smo276004v0.draw(context, stavesmo276004);
smo403479.setContext(context);
smo403479.draw();
const stavesmo279113 = new VF.Stave(469, 962, 310);
stavesmo279113.setAttribute('id', 'stavesmo279113');
stavesmo279113.setBegBarType(VF.Barline.type.NONE);
stavesmo279113.setContext(context);
stavesmo279113.draw();
smo279113v0.draw(context, stavesmo279113);
smo403481.setContext(context);
smo403481.draw();
const stavesmo282199 = new VF.Stave(469, 1071, 310);
stavesmo282199.setAttribute('id', 'stavesmo282199');
stavesmo282199.setBegBarType(VF.Barline.type.NONE);
stavesmo282199.setContext(context);
stavesmo282199.draw();
smo282199v0.draw(context, stavesmo282199);
smo403483.setContext(context);
smo403483.draw();
// create beam groups and tuplets for format grp smo312129 before formatting
const dirsmo403485 = smo285268.getStemDirection();
smo285268.setStemDirection(dirsmo403485);
smo285270.setStemDirection(dirsmo403485);
const smo403485 = new VF.Beam([smo285268,smo285270]);
const dirsmo403487 = smo288308.getStemDirection();
smo288308.setStemDirection(dirsmo403487);
smo288310.setStemDirection(dirsmo403487);
const smo403487 = new VF.Beam([smo288308,smo288310]);
const dirsmo403489 = smo291362.getStemDirection();
smo291362.setStemDirection(dirsmo403489);
smo291364.setStemDirection(dirsmo403489);
const smo403489 = new VF.Beam([smo291362,smo291364]);
const dirsmo403491 = smo294405.getStemDirection();
smo294405.setStemDirection(dirsmo403491);
smo294407.setStemDirection(dirsmo403491);
const smo403491 = new VF.Beam([smo294405,smo294407]);
 
// formatting measures in staff group smo312129
fmtsmo28528864.format([smo285288v0,smo288328v0,smo291382v0,smo294425v0], 296);
const stavesmo285288 = new VF.Stave(469, 1200, 310);
stavesmo285288.setAttribute('id', 'stavesmo285288');
stavesmo285288.setBegBarType(VF.Barline.type.NONE);
stavesmo285288.setContext(context);
stavesmo285288.draw();
smo285288v0.draw(context, stavesmo285288);
smo403485.setContext(context);
smo403485.draw();
const stavesmo288328 = new VF.Stave(469, 1329, 310);
stavesmo288328.setAttribute('id', 'stavesmo288328');
stavesmo288328.setBegBarType(VF.Barline.type.NONE);
stavesmo288328.setContext(context);
stavesmo288328.draw();
smo288328v0.draw(context, stavesmo288328);
smo403487.setContext(context);
smo403487.draw();
const stavesmo291382 = new VF.Stave(469, 1458, 310);
stavesmo291382.setAttribute('id', 'stavesmo291382');
stavesmo291382.setBegBarType(VF.Barline.type.NONE);
stavesmo291382.setContext(context);
stavesmo291382.draw();
smo291382v0.draw(context, stavesmo291382);
smo403489.setContext(context);
smo403489.draw();
const stavesmo294425 = new VF.Stave(469, 1587, 310);
stavesmo294425.setAttribute('id', 'stavesmo294425');
stavesmo294425.setBegBarType(VF.Barline.type.NONE);
stavesmo294425.setContext(context);
stavesmo294425.draw();
smo294425v0.draw(context, stavesmo294425);
smo403491.setContext(context);
smo403491.draw();
// create beam groups and tuplets for format grp smo299448 before formatting
const dirsmo403493 = smo297618.getStemDirection();
smo297618.setStemDirection(dirsmo403493);
smo297619.setStemDirection(dirsmo403493);
const smo403493 = new VF.Beam([smo297618,smo297619]);
 
// formatting measures in staff group smo299448
fmtsmo29763764.format([smo297637v0], 296);
const stavesmo297637 = new VF.Stave(469, 1726, 310);
stavesmo297637.setAttribute('id', 'stavesmo297637');
stavesmo297637.setBegBarType(VF.Barline.type.NONE);
stavesmo297637.setContext(context);
stavesmo297637.draw();
smo297637v0.draw(context, stavesmo297637);
smo403493.setContext(context);
smo403493.draw();
// create beam groups and tuplets for format grp smo312123 before formatting
const dirsmo403495 = smo300831.getStemDirection();
smo300831.setStemDirection(dirsmo403495);
smo300832.setStemDirection(dirsmo403495);
const smo403495 = new VF.Beam([smo300831,smo300832]);
const dirsmo403497 = smo304026.getStemDirection();
smo304026.setStemDirection(dirsmo403497);
smo304027.setStemDirection(dirsmo403497);
const smo403497 = new VF.Beam([smo304026,smo304027]);
 
// formatting measures in staff group smo312123
fmtsmo30085064.format([smo300850v0,smo304045v0], 296);
const stavesmo300850 = new VF.Stave(469, 1831, 310);
stavesmo300850.setAttribute('id', 'stavesmo300850');
stavesmo300850.setBegBarType(VF.Barline.type.NONE);
stavesmo300850.setContext(context);
stavesmo300850.draw();
smo300850v0.draw(context, stavesmo300850);
smo403495.setContext(context);
smo403495.draw();
const stavesmo304045 = new VF.Stave(469, 1917, 310);
stavesmo304045.setAttribute('id', 'stavesmo304045');
stavesmo304045.setBegBarType(VF.Barline.type.NONE);
stavesmo304045.setContext(context);
stavesmo304045.draw();
smo304045v0.draw(context, stavesmo304045);
smo403497.setContext(context);
smo403497.draw();
// create beam groups and tuplets for format grp smo308961 before formatting
 
// formatting measures in staff group smo308961
fmtsmo30716364.format([smo307163v0], 296);
const stavesmo307163 = new VF.Stave(469, 1988, 310);
stavesmo307163.setAttribute('id', 'stavesmo307163');
stavesmo307163.setBegBarType(VF.Barline.type.NONE);
stavesmo307163.setContext(context);
stavesmo307163.draw();
smo307163v0.draw(context, stavesmo307163);
// create beam groups and tuplets for format grp smo312117 before formatting
 
// formatting measures in staff group smo312117
fmtsmo31035264.format([smo310352v0,smo310352v1,smo310352v2], 296);
const stavesmo310352 = new VF.Stave(469, 2059, 310);
stavesmo310352.setAttribute('id', 'stavesmo310352');
stavesmo310352.setBegBarType(VF.Barline.type.NONE);
stavesmo310352.setContext(context);
stavesmo310352.draw();
smo310352v0.draw(context, stavesmo310352);
smo310352v1.draw(context, stavesmo310352);
smo310352v2.draw(context, stavesmo310352);
const fmtsmo25754065 = new VF.Formatter();
//
// voices and notes for stave 0 65
const smo257540v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo257540v0ar = [];
const smo257514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo257514.setAttribute('id', 'smo257514');
const smo2575140acc = new VF.Accidental('n');
smo257514.addModifier(smo2575140acc, 0);
smo257540v0ar.push(smo257514);
const smo257515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo257515.setAttribute('id', 'smo257515');
const smo257516 = new VF.Annotation('a');
smo257516.setAttribute('id', 'smo257516');
smo257516.setFont('times', 12, 'normal');
smo257516.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257515.addModifier(smo257516);
smo257516.addClass('lyric lyric-0');
smo257540v0ar.push(smo257515);
const smo257517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo257517.setAttribute('id', 'smo257517');
smo257540v0ar.push(smo257517);
const smo257518 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo257518.setAttribute('id', 'smo257518');
const smo257519 = new VF.Annotation('Ki');
smo257519.setAttribute('id', 'smo257519');
smo257519.setFont('times', 12, 'normal');
smo257519.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257518.addModifier(smo257519);
smo257519.addClass('lyric lyric-0 lyric-hyphen');
smo257540v0ar.push(smo257518);
const smo257520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo257520.setAttribute('id', 'smo257520');
smo257540v0ar.push(smo257520);
const smo257521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo257521.setAttribute('id', 'smo257521');
const smo257522 = new VF.Annotation('ki');
smo257522.setAttribute('id', 'smo257522');
smo257522.setFont('times', 12, 'normal');
smo257522.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257521.addModifier(smo257522);
smo257522.addClass('lyric lyric-0');
smo257540v0ar.push(smo257521);
const smo257523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo257523.setAttribute('id', 'smo257523');
const smo257524 = new VF.Annotation('ri');
smo257524.setAttribute('id', 'smo257524');
smo257524.setFont('times', 12, 'normal');
smo257524.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257523.addModifier(smo257524);
smo257524.addClass('lyric lyric-0');
smo257540v0ar.push(smo257523);
smo257540v0.addTickables(smo257540v0ar)
fmtsmo25754065.joinVoices([smo257540v0]);
const fmtsmo26053465 = new VF.Formatter();
//
// voices and notes for stave 1 65
const smo260534v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo260534v0ar = [];
const smo260508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo260508.setAttribute('id', 'smo260508');
const smo2605080acc = new VF.Accidental('n');
smo260508.addModifier(smo2605080acc, 0);
smo260534v0ar.push(smo260508);
const smo260509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo260509.setAttribute('id', 'smo260509');
const smo260510 = new VF.Annotation('a');
smo260510.setAttribute('id', 'smo260510');
smo260510.setFont('times', 12, 'normal');
smo260510.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260509.addModifier(smo260510);
smo260510.addClass('lyric lyric-0');
smo260534v0ar.push(smo260509);
const smo260511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo260511.setAttribute('id', 'smo260511');
smo260534v0ar.push(smo260511);
const smo260512 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo260512.setAttribute('id', 'smo260512');
const smo260513 = new VF.Annotation('Ki');
smo260513.setAttribute('id', 'smo260513');
smo260513.setFont('times', 12, 'normal');
smo260513.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260512.addModifier(smo260513);
smo260513.addClass('lyric lyric-0 lyric-hyphen');
smo260534v0ar.push(smo260512);
const smo260514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo260514.setAttribute('id', 'smo260514');
smo260534v0ar.push(smo260514);
const smo260515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo260515.setAttribute('id', 'smo260515');
const smo260516 = new VF.Annotation('ki');
smo260516.setAttribute('id', 'smo260516');
smo260516.setFont('times', 12, 'normal');
smo260516.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260515.addModifier(smo260516);
smo260516.addClass('lyric lyric-0');
smo260534v0ar.push(smo260515);
const smo260517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo260517.setAttribute('id', 'smo260517');
const smo260518 = new VF.Annotation('ri');
smo260518.setAttribute('id', 'smo260518');
smo260518.setFont('times', 12, 'normal');
smo260518.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260517.addModifier(smo260518);
smo260518.addClass('lyric lyric-0');
smo260534v0ar.push(smo260517);
smo260534v0.addTickables(smo260534v0ar)
fmtsmo26053465.joinVoices([smo260534v0]);
const fmtsmo26367765 = new VF.Formatter();
//
// voices and notes for stave 2 65
const smo263677v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo263677v0ar = [];
const smo263651 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo263651.setAttribute('id', 'smo263651');
const smo2636510acc = new VF.Accidental('n');
smo263651.addModifier(smo2636510acc, 0);
smo263677v0ar.push(smo263651);
const smo263652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo263652.setAttribute('id', 'smo263652');
const smo263653 = new VF.Annotation('a');
smo263653.setAttribute('id', 'smo263653');
smo263653.setFont('times', 12, 'normal');
smo263653.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263652.addModifier(smo263653);
smo263653.addClass('lyric lyric-0');
smo263677v0ar.push(smo263652);
const smo263654 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo263654.setAttribute('id', 'smo263654');
smo263677v0ar.push(smo263654);
const smo263655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo263655.setAttribute('id', 'smo263655');
const smo263656 = new VF.Annotation('Ki');
smo263656.setAttribute('id', 'smo263656');
smo263656.setFont('times', 12, 'normal');
smo263656.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263655.addModifier(smo263656);
smo263656.addClass('lyric lyric-0 lyric-hyphen');
smo263677v0ar.push(smo263655);
const smo263657 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo263657.setAttribute('id', 'smo263657');
smo263677v0ar.push(smo263657);
const smo263658 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo263658.setAttribute('id', 'smo263658');
const smo263659 = new VF.Annotation('ki');
smo263659.setAttribute('id', 'smo263659');
smo263659.setFont('times', 12, 'normal');
smo263659.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263658.addModifier(smo263659);
smo263659.addClass('lyric lyric-0');
smo263677v0ar.push(smo263658);
const smo263660 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo263660.setAttribute('id', 'smo263660');
const smo263661 = new VF.Annotation('ri');
smo263661.setAttribute('id', 'smo263661');
smo263661.setFont('times', 12, 'normal');
smo263661.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263660.addModifier(smo263661);
smo263661.addClass('lyric lyric-0');
smo263677v0ar.push(smo263660);
smo263677v0.addTickables(smo263677v0ar)
fmtsmo26367765.joinVoices([smo263677v0]);
const fmtsmo26679365 = new VF.Formatter();
//
// voices and notes for stave 3 65
const smo266793v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266793v0ar = [];
const smo266767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo266767.setAttribute('id', 'smo266767');
const smo2667670acc = new VF.Accidental('n');
smo266767.addModifier(smo2667670acc, 0);
smo266793v0ar.push(smo266767);
const smo266768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo266768.setAttribute('id', 'smo266768');
const smo266769 = new VF.Annotation('a');
smo266769.setAttribute('id', 'smo266769');
smo266769.setFont('times', 12, 'normal');
smo266769.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266768.addModifier(smo266769);
smo266769.addClass('lyric lyric-0');
smo266793v0ar.push(smo266768);
const smo266770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo266770.setAttribute('id', 'smo266770');
smo266793v0ar.push(smo266770);
const smo266771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo266771.setAttribute('id', 'smo266771');
const smo266772 = new VF.Annotation('Ki');
smo266772.setAttribute('id', 'smo266772');
smo266772.setFont('times', 12, 'normal');
smo266772.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266771.addModifier(smo266772);
smo266772.addClass('lyric lyric-0 lyric-hyphen');
smo266793v0ar.push(smo266771);
const smo266773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo266773.setAttribute('id', 'smo266773');
smo266793v0ar.push(smo266773);
const smo266774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo266774.setAttribute('id', 'smo266774');
const smo266775 = new VF.Annotation('ki');
smo266775.setAttribute('id', 'smo266775');
smo266775.setFont('times', 12, 'normal');
smo266775.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266774.addModifier(smo266775);
smo266775.addClass('lyric lyric-0');
smo266793v0ar.push(smo266774);
const smo266776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo266776.setAttribute('id', 'smo266776');
const smo266777 = new VF.Annotation('ri');
smo266777.setAttribute('id', 'smo266777');
smo266777.setFont('times', 12, 'normal');
smo266777.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266776.addModifier(smo266777);
smo266777.addClass('lyric lyric-0');
smo266793v0ar.push(smo266776);
smo266793v0.addTickables(smo266793v0ar)
fmtsmo26679365.joinVoices([smo266793v0]);
const fmtsmo26981265 = new VF.Formatter();
//
// voices and notes for stave 4 65
const smo269812v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269812v0ar = [];
const smo269786 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo269786.setAttribute('id', 'smo269786');
const smo2697860acc = new VF.Accidental('n');
smo269786.addModifier(smo2697860acc, 0);
smo269812v0ar.push(smo269786);
const smo269787 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo269787.setAttribute('id', 'smo269787');
const smo269788 = new VF.Annotation('a');
smo269788.setAttribute('id', 'smo269788');
smo269788.setFont('times', 12, 'normal');
smo269788.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269787.addModifier(smo269788);
smo269788.addClass('lyric lyric-0');
smo269812v0ar.push(smo269787);
const smo269789 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo269789.setAttribute('id', 'smo269789');
smo269812v0ar.push(smo269789);
const smo269790 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo269790.setAttribute('id', 'smo269790');
const smo269791 = new VF.Annotation('Ki');
smo269791.setAttribute('id', 'smo269791');
smo269791.setFont('times', 12, 'normal');
smo269791.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269790.addModifier(smo269791);
smo269791.addClass('lyric lyric-0 lyric-hyphen');
smo269812v0ar.push(smo269790);
const smo269792 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo269792.setAttribute('id', 'smo269792');
smo269812v0ar.push(smo269792);
const smo269793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo269793.setAttribute('id', 'smo269793');
const smo269794 = new VF.Annotation('ki');
smo269794.setAttribute('id', 'smo269794');
smo269794.setFont('times', 12, 'normal');
smo269794.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269793.addModifier(smo269794);
smo269794.addClass('lyric lyric-0');
smo269812v0ar.push(smo269793);
const smo269795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo269795.setAttribute('id', 'smo269795');
const smo269796 = new VF.Annotation('ri');
smo269796.setAttribute('id', 'smo269796');
smo269796.setFont('times', 12, 'normal');
smo269796.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269795.addModifier(smo269796);
smo269796.addClass('lyric lyric-0');
smo269812v0ar.push(smo269795);
smo269812v0.addTickables(smo269812v0ar)
fmtsmo26981265.joinVoices([smo269812v0]);
const fmtsmo27291965 = new VF.Formatter();
//
// voices and notes for stave 5 65
const smo272919v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272919v0ar = [];
const smo272893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo272893.setAttribute('id', 'smo272893');
const smo2728930acc = new VF.Accidental('n');
smo272893.addModifier(smo2728930acc, 0);
smo272919v0ar.push(smo272893);
const smo272894 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo272894.setAttribute('id', 'smo272894');
const smo272895 = new VF.Annotation('a');
smo272895.setAttribute('id', 'smo272895');
smo272895.setFont('times', 12, 'normal');
smo272895.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272894.addModifier(smo272895);
smo272895.addClass('lyric lyric-0');
smo272919v0ar.push(smo272894);
const smo272896 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo272896.setAttribute('id', 'smo272896');
smo272919v0ar.push(smo272896);
const smo272897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo272897.setAttribute('id', 'smo272897');
const smo272898 = new VF.Annotation('Ki');
smo272898.setAttribute('id', 'smo272898');
smo272898.setFont('times', 12, 'normal');
smo272898.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272897.addModifier(smo272898);
smo272898.addClass('lyric lyric-0 lyric-hyphen');
smo272919v0ar.push(smo272897);
const smo272899 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo272899.setAttribute('id', 'smo272899');
smo272919v0ar.push(smo272899);
const smo272900 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo272900.setAttribute('id', 'smo272900');
const smo272901 = new VF.Annotation('ki');
smo272901.setAttribute('id', 'smo272901');
smo272901.setFont('times', 12, 'normal');
smo272901.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272900.addModifier(smo272901);
smo272901.addClass('lyric lyric-0');
smo272919v0ar.push(smo272900);
const smo272902 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo272902.setAttribute('id', 'smo272902');
const smo272903 = new VF.Annotation('ri');
smo272903.setAttribute('id', 'smo272903');
smo272903.setFont('times', 12, 'normal');
smo272903.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272902.addModifier(smo272903);
smo272903.addClass('lyric lyric-0');
smo272919v0ar.push(smo272902);
smo272919v0.addTickables(smo272919v0ar)
fmtsmo27291965.joinVoices([smo272919v0]);
const fmtsmo27603165 = new VF.Formatter();
//
// voices and notes for stave 6 65
const smo276031v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo276031v0ar = [];
const smo276005 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo276005.setAttribute('id', 'smo276005');
const smo2760050acc = new VF.Accidental('n');
smo276005.addModifier(smo2760050acc, 0);
smo276031v0ar.push(smo276005);
const smo276006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo276006.setAttribute('id', 'smo276006');
const smo276007 = new VF.Annotation('a');
smo276007.setAttribute('id', 'smo276007');
smo276007.setFont('times', 12, 'normal');
smo276007.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo276006.addModifier(smo276007);
smo276007.addClass('lyric lyric-0');
smo276031v0ar.push(smo276006);
const smo276008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo276008.setAttribute('id', 'smo276008');
smo276031v0ar.push(smo276008);
const smo276009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo276009.setAttribute('id', 'smo276009');
const smo276010 = new VF.Annotation('Ki');
smo276010.setAttribute('id', 'smo276010');
smo276010.setFont('times', 12, 'normal');
smo276010.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo276009.addModifier(smo276010);
smo276010.addClass('lyric lyric-0 lyric-hyphen');
smo276031v0ar.push(smo276009);
const smo276011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo276011.setAttribute('id', 'smo276011');
smo276031v0ar.push(smo276011);
const smo276012 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo276012.setAttribute('id', 'smo276012');
const smo276013 = new VF.Annotation('ki');
smo276013.setAttribute('id', 'smo276013');
smo276013.setFont('times', 12, 'normal');
smo276013.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo276012.addModifier(smo276013);
smo276013.addClass('lyric lyric-0');
smo276031v0ar.push(smo276012);
const smo276014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo276014.setAttribute('id', 'smo276014');
const smo276015 = new VF.Annotation('ri');
smo276015.setAttribute('id', 'smo276015');
smo276015.setFont('times', 12, 'normal');
smo276015.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo276014.addModifier(smo276015);
smo276015.addClass('lyric lyric-0');
smo276031v0ar.push(smo276014);
smo276031v0.addTickables(smo276031v0ar)
fmtsmo27603165.joinVoices([smo276031v0]);
const fmtsmo27914065 = new VF.Formatter();
//
// voices and notes for stave 7 65
const smo279140v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo279140v0ar = [];
const smo279114 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo279114.setAttribute('id', 'smo279114');
const smo2791140acc = new VF.Accidental('n');
smo279114.addModifier(smo2791140acc, 0);
smo279140v0ar.push(smo279114);
const smo279115 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo279115.setAttribute('id', 'smo279115');
const smo279116 = new VF.Annotation('a');
smo279116.setAttribute('id', 'smo279116');
smo279116.setFont('times', 12, 'normal');
smo279116.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo279115.addModifier(smo279116);
smo279116.addClass('lyric lyric-0');
smo279140v0ar.push(smo279115);
const smo279117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo279117.setAttribute('id', 'smo279117');
smo279140v0ar.push(smo279117);
const smo279118 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo279118.setAttribute('id', 'smo279118');
const smo279119 = new VF.Annotation('Ki');
smo279119.setAttribute('id', 'smo279119');
smo279119.setFont('times', 12, 'normal');
smo279119.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo279118.addModifier(smo279119);
smo279119.addClass('lyric lyric-0 lyric-hyphen');
smo279140v0ar.push(smo279118);
const smo279120 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo279120.setAttribute('id', 'smo279120');
smo279140v0ar.push(smo279120);
const smo279121 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo279121.setAttribute('id', 'smo279121');
const smo279122 = new VF.Annotation('ki');
smo279122.setAttribute('id', 'smo279122');
smo279122.setFont('times', 12, 'normal');
smo279122.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo279121.addModifier(smo279122);
smo279122.addClass('lyric lyric-0');
smo279140v0ar.push(smo279121);
const smo279123 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo279123.setAttribute('id', 'smo279123');
const smo279124 = new VF.Annotation('ri');
smo279124.setAttribute('id', 'smo279124');
smo279124.setFont('times', 12, 'normal');
smo279124.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo279123.addModifier(smo279124);
smo279124.addClass('lyric lyric-0');
smo279140v0ar.push(smo279123);
smo279140v0.addTickables(smo279140v0ar)
fmtsmo27914065.joinVoices([smo279140v0]);
const fmtsmo28222665 = new VF.Formatter();
//
// voices and notes for stave 8 65
const smo282226v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo282226v0ar = [];
const smo282200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo282200.setAttribute('id', 'smo282200');
const smo2822000acc = new VF.Accidental('n');
smo282200.addModifier(smo2822000acc, 0);
smo282226v0ar.push(smo282200);
const smo282201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo282201.setAttribute('id', 'smo282201');
const smo282202 = new VF.Annotation('a');
smo282202.setAttribute('id', 'smo282202');
smo282202.setFont('times', 12, 'normal');
smo282202.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282201.addModifier(smo282202);
smo282202.addClass('lyric lyric-0');
smo282226v0ar.push(smo282201);
const smo282203 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo282203.setAttribute('id', 'smo282203');
smo282226v0ar.push(smo282203);
const smo282204 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo282204.setAttribute('id', 'smo282204');
const smo282205 = new VF.Annotation('Ki');
smo282205.setAttribute('id', 'smo282205');
smo282205.setFont('times', 12, 'normal');
smo282205.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282204.addModifier(smo282205);
smo282205.addClass('lyric lyric-0 lyric-hyphen');
smo282226v0ar.push(smo282204);
const smo282206 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo282206.setAttribute('id', 'smo282206');
smo282226v0ar.push(smo282206);
const smo282207 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo282207.setAttribute('id', 'smo282207');
const smo282208 = new VF.Annotation('ki');
smo282208.setAttribute('id', 'smo282208');
smo282208.setFont('times', 12, 'normal');
smo282208.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282207.addModifier(smo282208);
smo282208.addClass('lyric lyric-0');
smo282226v0ar.push(smo282207);
const smo282209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo282209.setAttribute('id', 'smo282209');
const smo282210 = new VF.Annotation('ri');
smo282210.setAttribute('id', 'smo282210');
smo282210.setFont('times', 12, 'normal');
smo282210.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282209.addModifier(smo282210);
smo282210.addClass('lyric lyric-0');
smo282226v0ar.push(smo282209);
smo282226v0.addTickables(smo282226v0ar)
fmtsmo28222665.joinVoices([smo282226v0]);
const fmtsmo28531565 = new VF.Formatter();
//
// voices and notes for stave 9 65
const smo285315v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo285315v0ar = [];
const smo285289 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo285289.setAttribute('id', 'smo285289');
const smo2852890acc = new VF.Accidental('b');
smo285289.addModifier(smo2852890acc, 0);
smo285315v0ar.push(smo285289);
const smo285290 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo285290.setAttribute('id', 'smo285290');
const smo285291 = new VF.Annotation('a');
smo285291.setAttribute('id', 'smo285291');
smo285291.setFont('times', 12, 'normal');
smo285291.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285290.addModifier(smo285291);
smo285291.addClass('lyric lyric-0');
smo285315v0ar.push(smo285290);
const smo285292 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo285292.setAttribute('id', 'smo285292');
smo285315v0ar.push(smo285292);
const smo285293 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo285293.setAttribute('id', 'smo285293');
const smo285294 = new VF.Annotation('Ki');
smo285294.setAttribute('id', 'smo285294');
smo285294.setFont('times', 12, 'normal');
smo285294.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285293.addModifier(smo285294);
smo285294.addClass('lyric lyric-0 lyric-hyphen');
smo285315v0ar.push(smo285293);
const smo285295 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo285295.setAttribute('id', 'smo285295');
smo285315v0ar.push(smo285295);
const smo285296 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo285296.setAttribute('id', 'smo285296');
const smo285297 = new VF.Annotation('ki');
smo285297.setAttribute('id', 'smo285297');
smo285297.setFont('times', 12, 'normal');
smo285297.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285296.addModifier(smo285297);
smo285297.addClass('lyric lyric-0');
smo285315v0ar.push(smo285296);
const smo285298 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo285298.setAttribute('id', 'smo285298');
const smo285299 = new VF.Annotation('ri');
smo285299.setAttribute('id', 'smo285299');
smo285299.setFont('times', 12, 'normal');
smo285299.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285298.addModifier(smo285299);
smo285299.addClass('lyric lyric-0');
smo285315v0ar.push(smo285298);
smo285315v0.addTickables(smo285315v0ar)
fmtsmo28531565.joinVoices([smo285315v0]);
const fmtsmo28835565 = new VF.Formatter();
//
// voices and notes for stave 10 65
const smo288355v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo288355v0ar = [];
const smo288329 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo288329.setAttribute('id', 'smo288329');
const smo2883290acc = new VF.Accidental('b');
smo288329.addModifier(smo2883290acc, 0);
smo288355v0ar.push(smo288329);
const smo288330 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo288330.setAttribute('id', 'smo288330');
const smo288331 = new VF.Annotation('a');
smo288331.setAttribute('id', 'smo288331');
smo288331.setFont('times', 12, 'normal');
smo288331.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288330.addModifier(smo288331);
smo288331.addClass('lyric lyric-0');
smo288355v0ar.push(smo288330);
const smo288332 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo288332.setAttribute('id', 'smo288332');
smo288355v0ar.push(smo288332);
const smo288333 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo288333.setAttribute('id', 'smo288333');
const smo288334 = new VF.Annotation('Ki');
smo288334.setAttribute('id', 'smo288334');
smo288334.setFont('times', 12, 'normal');
smo288334.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288333.addModifier(smo288334);
smo288334.addClass('lyric lyric-0 lyric-hyphen');
smo288355v0ar.push(smo288333);
const smo288335 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo288335.setAttribute('id', 'smo288335');
smo288355v0ar.push(smo288335);
const smo288336 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo288336.setAttribute('id', 'smo288336');
const smo288337 = new VF.Annotation('ki');
smo288337.setAttribute('id', 'smo288337');
smo288337.setFont('times', 12, 'normal');
smo288337.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288336.addModifier(smo288337);
smo288337.addClass('lyric lyric-0');
smo288355v0ar.push(smo288336);
const smo288338 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo288338.setAttribute('id', 'smo288338');
const smo288339 = new VF.Annotation('ri');
smo288339.setAttribute('id', 'smo288339');
smo288339.setFont('times', 12, 'normal');
smo288339.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288338.addModifier(smo288339);
smo288339.addClass('lyric lyric-0');
smo288355v0ar.push(smo288338);
smo288355v0.addTickables(smo288355v0ar)
fmtsmo28835565.joinVoices([smo288355v0]);
const fmtsmo29140965 = new VF.Formatter();
//
// voices and notes for stave 11 65
const smo291409v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo291409v0ar = [];
const smo291383 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo291383.setAttribute('id', 'smo291383');
const smo2913830acc = new VF.Accidental('b');
smo291383.addModifier(smo2913830acc, 0);
smo291409v0ar.push(smo291383);
const smo291384 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo291384.setAttribute('id', 'smo291384');
const smo291385 = new VF.Annotation('a');
smo291385.setAttribute('id', 'smo291385');
smo291385.setFont('times', 12, 'normal');
smo291385.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291384.addModifier(smo291385);
smo291385.addClass('lyric lyric-0');
smo291409v0ar.push(smo291384);
const smo291386 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo291386.setAttribute('id', 'smo291386');
smo291409v0ar.push(smo291386);
const smo291387 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo291387.setAttribute('id', 'smo291387');
const smo291388 = new VF.Annotation('Ki');
smo291388.setAttribute('id', 'smo291388');
smo291388.setFont('times', 12, 'normal');
smo291388.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291387.addModifier(smo291388);
smo291388.addClass('lyric lyric-0 lyric-hyphen');
smo291409v0ar.push(smo291387);
const smo291389 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo291389.setAttribute('id', 'smo291389');
smo291409v0ar.push(smo291389);
const smo291390 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo291390.setAttribute('id', 'smo291390');
const smo291391 = new VF.Annotation('ki');
smo291391.setAttribute('id', 'smo291391');
smo291391.setFont('times', 12, 'normal');
smo291391.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291390.addModifier(smo291391);
smo291391.addClass('lyric lyric-0');
smo291409v0ar.push(smo291390);
const smo291392 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo291392.setAttribute('id', 'smo291392');
const smo291393 = new VF.Annotation('ri');
smo291393.setAttribute('id', 'smo291393');
smo291393.setFont('times', 12, 'normal');
smo291393.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291392.addModifier(smo291393);
smo291393.addClass('lyric lyric-0');
smo291409v0ar.push(smo291392);
smo291409v0.addTickables(smo291409v0ar)
fmtsmo29140965.joinVoices([smo291409v0]);
const fmtsmo29445265 = new VF.Formatter();
//
// voices and notes for stave 12 65
const smo294452v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo294452v0ar = [];
const smo294426 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo294426.setAttribute('id', 'smo294426');
const smo2944260acc = new VF.Accidental('b');
smo294426.addModifier(smo2944260acc, 0);
smo294452v0ar.push(smo294426);
const smo294427 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo294427.setAttribute('id', 'smo294427');
const smo294428 = new VF.Annotation('a');
smo294428.setAttribute('id', 'smo294428');
smo294428.setFont('times', 12, 'normal');
smo294428.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo294427.addModifier(smo294428);
smo294428.addClass('lyric lyric-0');
smo294452v0ar.push(smo294427);
const smo294429 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo294429.setAttribute('id', 'smo294429');
smo294452v0ar.push(smo294429);
const smo294430 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo294430.setAttribute('id', 'smo294430');
const smo294431 = new VF.Annotation('Ki');
smo294431.setAttribute('id', 'smo294431');
smo294431.setFont('times', 12, 'normal');
smo294431.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo294430.addModifier(smo294431);
smo294431.addClass('lyric lyric-0 lyric-hyphen');
smo294452v0ar.push(smo294430);
const smo294432 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo294432.setAttribute('id', 'smo294432');
smo294452v0ar.push(smo294432);
const smo294433 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo294433.setAttribute('id', 'smo294433');
const smo294434 = new VF.Annotation('ki');
smo294434.setAttribute('id', 'smo294434');
smo294434.setFont('times', 12, 'normal');
smo294434.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo294433.addModifier(smo294434);
smo294434.addClass('lyric lyric-0');
smo294452v0ar.push(smo294433);
const smo294435 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo294435.setAttribute('id', 'smo294435');
const smo294436 = new VF.Annotation('ri');
smo294436.setAttribute('id', 'smo294436');
smo294436.setFont('times', 12, 'normal');
smo294436.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo294435.addModifier(smo294436);
smo294436.addClass('lyric lyric-0');
smo294452v0ar.push(smo294435);
smo294452v0.addTickables(smo294452v0ar)
fmtsmo29445265.joinVoices([smo294452v0]);
const fmtsmo29765865 = new VF.Formatter();
//
// voices and notes for stave 13 65
const smo297658v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo297658v0ar = [];
const smo297638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n","cn/5/n","eb/5/n"]}'))
smo297638.setAttribute('id', 'smo297638');
const smo2976382acc = new VF.Accidental('b');
smo297638.addModifier(smo2976382acc, 2);
smo297638.addModifier(new VF.Dot(), 0);
smo297638.addModifier(new VF.Dot(), 1);
smo297638.addModifier(new VF.Dot(), 2);
smo297658v0ar.push(smo297638);
const smo297639 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
smo297639.setAttribute('id', 'smo297639');
const smo2976390acc = new VF.Accidental('#');
smo297639.addModifier(smo2976390acc, 0);
smo297658v0ar.push(smo297639);
const smo297640 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
smo297640.setAttribute('id', 'smo297640');
smo297658v0ar.push(smo297640);
const smo297641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo297641.setAttribute('id', 'smo297641');
smo297658v0ar.push(smo297641);
const smo297642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo297642.setAttribute('id', 'smo297642');
smo297658v0ar.push(smo297642);
smo297658v0.addTickables(smo297658v0ar)
fmtsmo29765865.joinVoices([smo297658v0]);
const fmtsmo30087165 = new VF.Formatter();
//
// voices and notes for stave 14 65
const smo300871v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300871v0ar = [];
const smo300851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n","cn/5/n","eb/5/n"]}'))
smo300851.setAttribute('id', 'smo300851');
const smo3008512acc = new VF.Accidental('b');
smo300851.addModifier(smo3008512acc, 2);
smo300851.addModifier(new VF.Dot(), 0);
smo300851.addModifier(new VF.Dot(), 1);
smo300851.addModifier(new VF.Dot(), 2);
smo300871v0ar.push(smo300851);
const smo300852 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
smo300852.setAttribute('id', 'smo300852');
const smo3008520acc = new VF.Accidental('#');
smo300852.addModifier(smo3008520acc, 0);
smo300871v0ar.push(smo300852);
const smo300853 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
smo300853.setAttribute('id', 'smo300853');
smo300871v0ar.push(smo300853);
const smo300854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo300854.setAttribute('id', 'smo300854');
smo300871v0ar.push(smo300854);
const smo300855 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo300855.setAttribute('id', 'smo300855');
smo300871v0ar.push(smo300855);
smo300871v0.addTickables(smo300871v0ar)
fmtsmo30087165.joinVoices([smo300871v0]);
const fmtsmo30406665 = new VF.Formatter();
//
// voices and notes for stave 15 65
const smo304066v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo304066v0ar = [];
const smo304046 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo304046.setAttribute('id', 'smo304046');
smo304046.addModifier(new VF.Dot(), 0);
smo304066v0ar.push(smo304046);
const smo304047 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/3/n"]}'))
smo304047.setAttribute('id', 'smo304047');
const smo3040470acc = new VF.Accidental('#');
smo304047.addModifier(smo3040470acc, 0);
smo304066v0ar.push(smo304047);
const smo304048 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/3/n"]}'))
smo304048.setAttribute('id', 'smo304048');
smo304066v0ar.push(smo304048);
const smo304049 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo304049.setAttribute('id', 'smo304049');
smo304066v0ar.push(smo304049);
const smo304050 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo304050.setAttribute('id', 'smo304050');
smo304066v0ar.push(smo304050);
smo304066v0.addTickables(smo304066v0ar)
fmtsmo30406665.joinVoices([smo304066v0]);
const fmtsmo30718365 = new VF.Formatter();
//
// voices and notes for stave 16 65
const smo307183v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo307183v0ar = [];
const smo307164 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo307164.setAttribute('id', 'smo307164');
smo307164.addModifier(new VF.Dot(), 0);
smo307183v0ar.push(smo307164);
const smo307165 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo307165.setAttribute('id', 'smo307165');
smo307183v0ar.push(smo307165);
const smo307166 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo307166.setAttribute('id', 'smo307166');
smo307183v0ar.push(smo307166);
const smo307167 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo307167.setAttribute('id', 'smo307167');
smo307183v0ar.push(smo307167);
smo307183v0.addTickables(smo307183v0ar)
fmtsmo30718365.joinVoices([smo307183v0]);
const fmtsmo31037265 = new VF.Formatter();
//
// voices and notes for stave 17 65
const smo310372v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo310372v0ar = [];
const smo310353 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo310353.setAttribute('id', 'smo310353');
const smo3103530acc = new VF.Accidental('n');
smo310353.addModifier(smo3103530acc, 0);
smo310353.addModifier(new VF.Dot(), 0);
smo310372v0ar.push(smo310353);
const smo310354 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo310354.setAttribute('id', 'smo310354');
smo310372v0ar.push(smo310354);
const smo310355 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo310355.setAttribute('id', 'smo310355');
smo310372v0ar.push(smo310355);
const smo310356 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo310356.setAttribute('id', 'smo310356');
smo310372v0ar.push(smo310356);
smo310372v0.addTickables(smo310372v0ar)
fmtsmo31037265.joinVoices([smo310372v0]);
// create beam groups and tuplets for format grp smo312125 before formatting
const dirsmo403519 = smo257514.getStemDirection();
smo257514.setStemDirection(dirsmo403519);
smo257515.setStemDirection(dirsmo403519);
const smo403519 = new VF.Beam([smo257514,smo257515]);
const dirsmo403520 = smo257518.getStemDirection();
smo257518.setStemDirection(dirsmo403520);
smo257520.setStemDirection(dirsmo403520);
const smo403520 = new VF.Beam([smo257518,smo257520]);
const dirsmo403522 = smo260508.getStemDirection();
smo260508.setStemDirection(dirsmo403522);
smo260509.setStemDirection(dirsmo403522);
const smo403522 = new VF.Beam([smo260508,smo260509]);
const dirsmo403523 = smo260512.getStemDirection();
smo260512.setStemDirection(dirsmo403523);
smo260514.setStemDirection(dirsmo403523);
const smo403523 = new VF.Beam([smo260512,smo260514]);
const dirsmo403525 = smo263651.getStemDirection();
smo263651.setStemDirection(dirsmo403525);
smo263652.setStemDirection(dirsmo403525);
const smo403525 = new VF.Beam([smo263651,smo263652]);
const dirsmo403526 = smo263655.getStemDirection();
smo263655.setStemDirection(dirsmo403526);
smo263657.setStemDirection(dirsmo403526);
const smo403526 = new VF.Beam([smo263655,smo263657]);
const dirsmo403528 = smo266767.getStemDirection();
smo266767.setStemDirection(dirsmo403528);
smo266768.setStemDirection(dirsmo403528);
const smo403528 = new VF.Beam([smo266767,smo266768]);
const dirsmo403529 = smo266771.getStemDirection();
smo266771.setStemDirection(dirsmo403529);
smo266773.setStemDirection(dirsmo403529);
const smo403529 = new VF.Beam([smo266771,smo266773]);
const dirsmo403531 = smo269786.getStemDirection();
smo269786.setStemDirection(dirsmo403531);
smo269787.setStemDirection(dirsmo403531);
const smo403531 = new VF.Beam([smo269786,smo269787]);
const dirsmo403532 = smo269790.getStemDirection();
smo269790.setStemDirection(dirsmo403532);
smo269792.setStemDirection(dirsmo403532);
const smo403532 = new VF.Beam([smo269790,smo269792]);
 
// formatting measures in staff group smo312125
fmtsmo25754065.format([smo257540v0,smo260534v0,smo263677v0,smo266793v0,smo269812v0], 296);
const stavesmo257540 = new VF.Stave(779, 210, 310);
stavesmo257540.setAttribute('id', 'stavesmo257540');
stavesmo257540.setBegBarType(VF.Barline.type.NONE);
stavesmo257540.setContext(context);
stavesmo257540.draw();
smo257540v0.draw(context, stavesmo257540);
smo403519.setContext(context);
smo403519.draw();
smo403520.setContext(context);
smo403520.draw();
const stavesmo260534 = new VF.Stave(779, 309, 310);
stavesmo260534.setAttribute('id', 'stavesmo260534');
stavesmo260534.setBegBarType(VF.Barline.type.NONE);
stavesmo260534.setContext(context);
stavesmo260534.draw();
smo260534v0.draw(context, stavesmo260534);
smo403522.setContext(context);
smo403522.draw();
smo403523.setContext(context);
smo403523.draw();
const stavesmo263677 = new VF.Stave(779, 423, 310);
stavesmo263677.setAttribute('id', 'stavesmo263677');
stavesmo263677.setBegBarType(VF.Barline.type.NONE);
stavesmo263677.setContext(context);
stavesmo263677.draw();
smo263677v0.draw(context, stavesmo263677);
smo403525.setContext(context);
smo403525.draw();
smo403526.setContext(context);
smo403526.draw();
const stavesmo266793 = new VF.Stave(779, 532, 310);
stavesmo266793.setAttribute('id', 'stavesmo266793');
stavesmo266793.setBegBarType(VF.Barline.type.NONE);
stavesmo266793.setContext(context);
stavesmo266793.draw();
smo266793v0.draw(context, stavesmo266793);
smo403528.setContext(context);
smo403528.draw();
smo403529.setContext(context);
smo403529.draw();
const stavesmo269812 = new VF.Stave(779, 631, 310);
stavesmo269812.setAttribute('id', 'stavesmo269812');
stavesmo269812.setBegBarType(VF.Barline.type.NONE);
stavesmo269812.setContext(context);
stavesmo269812.draw();
smo269812v0.draw(context, stavesmo269812);
smo403531.setContext(context);
smo403531.draw();
smo403532.setContext(context);
smo403532.draw();
// create beam groups and tuplets for format grp smo312127 before formatting
const dirsmo403534 = smo272893.getStemDirection();
smo272893.setStemDirection(dirsmo403534);
smo272894.setStemDirection(dirsmo403534);
const smo403534 = new VF.Beam([smo272893,smo272894]);
const dirsmo403535 = smo272897.getStemDirection();
smo272897.setStemDirection(dirsmo403535);
smo272899.setStemDirection(dirsmo403535);
const smo403535 = new VF.Beam([smo272897,smo272899]);
const dirsmo403537 = smo276005.getStemDirection();
smo276005.setStemDirection(dirsmo403537);
smo276006.setStemDirection(dirsmo403537);
const smo403537 = new VF.Beam([smo276005,smo276006]);
const dirsmo403538 = smo276009.getStemDirection();
smo276009.setStemDirection(dirsmo403538);
smo276011.setStemDirection(dirsmo403538);
const smo403538 = new VF.Beam([smo276009,smo276011]);
const dirsmo403540 = smo279114.getStemDirection();
smo279114.setStemDirection(dirsmo403540);
smo279115.setStemDirection(dirsmo403540);
const smo403540 = new VF.Beam([smo279114,smo279115]);
const dirsmo403541 = smo279118.getStemDirection();
smo279118.setStemDirection(dirsmo403541);
smo279120.setStemDirection(dirsmo403541);
const smo403541 = new VF.Beam([smo279118,smo279120]);
const dirsmo403543 = smo282200.getStemDirection();
smo282200.setStemDirection(dirsmo403543);
smo282201.setStemDirection(dirsmo403543);
const smo403543 = new VF.Beam([smo282200,smo282201]);
const dirsmo403544 = smo282204.getStemDirection();
smo282204.setStemDirection(dirsmo403544);
smo282206.setStemDirection(dirsmo403544);
const smo403544 = new VF.Beam([smo282204,smo282206]);
 
// formatting measures in staff group smo312127
fmtsmo27291965.format([smo272919v0,smo276031v0,smo279140v0,smo282226v0], 296);
const stavesmo272919 = new VF.Stave(779, 745, 310);
stavesmo272919.setAttribute('id', 'stavesmo272919');
stavesmo272919.setBegBarType(VF.Barline.type.NONE);
stavesmo272919.setContext(context);
stavesmo272919.draw();
smo272919v0.draw(context, stavesmo272919);
smo403534.setContext(context);
smo403534.draw();
smo403535.setContext(context);
smo403535.draw();
const stavesmo276031 = new VF.Stave(779, 853, 310);
stavesmo276031.setAttribute('id', 'stavesmo276031');
stavesmo276031.setBegBarType(VF.Barline.type.NONE);
stavesmo276031.setContext(context);
stavesmo276031.draw();
smo276031v0.draw(context, stavesmo276031);
smo403537.setContext(context);
smo403537.draw();
smo403538.setContext(context);
smo403538.draw();
const stavesmo279140 = new VF.Stave(779, 962, 310);
stavesmo279140.setAttribute('id', 'stavesmo279140');
stavesmo279140.setBegBarType(VF.Barline.type.NONE);
stavesmo279140.setContext(context);
stavesmo279140.draw();
smo279140v0.draw(context, stavesmo279140);
smo403540.setContext(context);
smo403540.draw();
smo403541.setContext(context);
smo403541.draw();
const stavesmo282226 = new VF.Stave(779, 1071, 310);
stavesmo282226.setAttribute('id', 'stavesmo282226');
stavesmo282226.setBegBarType(VF.Barline.type.NONE);
stavesmo282226.setContext(context);
stavesmo282226.draw();
smo282226v0.draw(context, stavesmo282226);
smo403543.setContext(context);
smo403543.draw();
smo403544.setContext(context);
smo403544.draw();
// create beam groups and tuplets for format grp smo312129 before formatting
const dirsmo403546 = smo285289.getStemDirection();
smo285289.setStemDirection(dirsmo403546);
smo285290.setStemDirection(dirsmo403546);
const smo403546 = new VF.Beam([smo285289,smo285290]);
const dirsmo403547 = smo285293.getStemDirection();
smo285293.setStemDirection(dirsmo403547);
smo285295.setStemDirection(dirsmo403547);
const smo403547 = new VF.Beam([smo285293,smo285295]);
const dirsmo403549 = smo288329.getStemDirection();
smo288329.setStemDirection(dirsmo403549);
smo288330.setStemDirection(dirsmo403549);
const smo403549 = new VF.Beam([smo288329,smo288330]);
const dirsmo403550 = smo288333.getStemDirection();
smo288333.setStemDirection(dirsmo403550);
smo288335.setStemDirection(dirsmo403550);
const smo403550 = new VF.Beam([smo288333,smo288335]);
const dirsmo403552 = smo291383.getStemDirection();
smo291383.setStemDirection(dirsmo403552);
smo291384.setStemDirection(dirsmo403552);
const smo403552 = new VF.Beam([smo291383,smo291384]);
const dirsmo403553 = smo291387.getStemDirection();
smo291387.setStemDirection(dirsmo403553);
smo291389.setStemDirection(dirsmo403553);
const smo403553 = new VF.Beam([smo291387,smo291389]);
const dirsmo403555 = smo294426.getStemDirection();
smo294426.setStemDirection(dirsmo403555);
smo294427.setStemDirection(dirsmo403555);
const smo403555 = new VF.Beam([smo294426,smo294427]);
const dirsmo403556 = smo294430.getStemDirection();
smo294430.setStemDirection(dirsmo403556);
smo294432.setStemDirection(dirsmo403556);
const smo403556 = new VF.Beam([smo294430,smo294432]);
 
// formatting measures in staff group smo312129
fmtsmo28531565.format([smo285315v0,smo288355v0,smo291409v0,smo294452v0], 296);
const stavesmo285315 = new VF.Stave(779, 1200, 310);
stavesmo285315.setAttribute('id', 'stavesmo285315');
stavesmo285315.setBegBarType(VF.Barline.type.NONE);
stavesmo285315.setContext(context);
stavesmo285315.draw();
smo285315v0.draw(context, stavesmo285315);
smo403546.setContext(context);
smo403546.draw();
smo403547.setContext(context);
smo403547.draw();
const stavesmo288355 = new VF.Stave(779, 1329, 310);
stavesmo288355.setAttribute('id', 'stavesmo288355');
stavesmo288355.setBegBarType(VF.Barline.type.NONE);
stavesmo288355.setContext(context);
stavesmo288355.draw();
smo288355v0.draw(context, stavesmo288355);
smo403549.setContext(context);
smo403549.draw();
smo403550.setContext(context);
smo403550.draw();
const stavesmo291409 = new VF.Stave(779, 1458, 310);
stavesmo291409.setAttribute('id', 'stavesmo291409');
stavesmo291409.setBegBarType(VF.Barline.type.NONE);
stavesmo291409.setContext(context);
stavesmo291409.draw();
smo291409v0.draw(context, stavesmo291409);
smo403552.setContext(context);
smo403552.draw();
smo403553.setContext(context);
smo403553.draw();
const stavesmo294452 = new VF.Stave(779, 1587, 310);
stavesmo294452.setAttribute('id', 'stavesmo294452');
stavesmo294452.setBegBarType(VF.Barline.type.NONE);
stavesmo294452.setContext(context);
stavesmo294452.draw();
smo294452v0.draw(context, stavesmo294452);
smo403555.setContext(context);
smo403555.draw();
smo403556.setContext(context);
smo403556.draw();
// create beam groups and tuplets for format grp smo299448 before formatting
const dirsmo403558 = smo297639.getStemDirection();
smo297639.setStemDirection(dirsmo403558);
smo297640.setStemDirection(dirsmo403558);
const smo403558 = new VF.Beam([smo297639,smo297640]);
 
// formatting measures in staff group smo299448
fmtsmo29765865.format([smo297658v0], 296);
const stavesmo297658 = new VF.Stave(779, 1726, 310);
stavesmo297658.setAttribute('id', 'stavesmo297658');
stavesmo297658.setBegBarType(VF.Barline.type.NONE);
stavesmo297658.setContext(context);
stavesmo297658.draw();
smo297658v0.draw(context, stavesmo297658);
smo403558.setContext(context);
smo403558.draw();
// create beam groups and tuplets for format grp smo312123 before formatting
const dirsmo403560 = smo300852.getStemDirection();
smo300852.setStemDirection(dirsmo403560);
smo300853.setStemDirection(dirsmo403560);
const smo403560 = new VF.Beam([smo300852,smo300853]);
const dirsmo403562 = smo304047.getStemDirection();
smo304047.setStemDirection(dirsmo403562);
smo304048.setStemDirection(dirsmo403562);
const smo403562 = new VF.Beam([smo304047,smo304048]);
 
// formatting measures in staff group smo312123
fmtsmo30087165.format([smo300871v0,smo304066v0], 296);
const stavesmo300871 = new VF.Stave(779, 1831, 310);
stavesmo300871.setAttribute('id', 'stavesmo300871');
stavesmo300871.setBegBarType(VF.Barline.type.NONE);
stavesmo300871.setContext(context);
stavesmo300871.draw();
smo300871v0.draw(context, stavesmo300871);
smo403560.setContext(context);
smo403560.draw();
const stavesmo304066 = new VF.Stave(779, 1917, 310);
stavesmo304066.setAttribute('id', 'stavesmo304066');
stavesmo304066.setBegBarType(VF.Barline.type.NONE);
stavesmo304066.setContext(context);
stavesmo304066.draw();
smo304066v0.draw(context, stavesmo304066);
smo403562.setContext(context);
smo403562.draw();
// create beam groups and tuplets for format grp smo308961 before formatting
 
// formatting measures in staff group smo308961
fmtsmo30718365.format([smo307183v0], 296);
const stavesmo307183 = new VF.Stave(779, 1988, 310);
stavesmo307183.setAttribute('id', 'stavesmo307183');
stavesmo307183.setBegBarType(VF.Barline.type.NONE);
stavesmo307183.setContext(context);
stavesmo307183.draw();
smo307183v0.draw(context, stavesmo307183);
// create beam groups and tuplets for format grp smo312117 before formatting
 
// formatting measures in staff group smo312117
fmtsmo31037265.format([smo310372v0], 296);
const stavesmo310372 = new VF.Stave(779, 2059, 310);
stavesmo310372.setAttribute('id', 'stavesmo310372');
stavesmo310372.setBegBarType(VF.Barline.type.NONE);
stavesmo310372.setContext(context);
stavesmo310372.draw();
smo310372v0.draw(context, stavesmo310372);
const fmtsmo25756966 = new VF.Formatter();
//
// voices and notes for stave 0 66
const smo257569v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo257569v0ar = [];
const smo257541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo257541.setAttribute('id', 'smo257541');
const smo257542 = new VF.Annotation('bun');
smo257542.setAttribute('id', 'smo257542');
smo257542.setFont('times', 12, 'normal');
smo257542.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257541.addModifier(smo257542);
smo257542.addClass('lyric lyric-0');
smo257569v0ar.push(smo257541);
const smo257543 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo257543.setAttribute('id', 'smo257543');
const smo257544 = new VF.Annotation('yi');
smo257544.setAttribute('id', 'smo257544');
smo257544.setFont('times', 12, 'normal');
smo257544.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257543.addModifier(smo257544);
smo257544.addClass('lyric lyric-0 lyric-hyphen');
smo257569v0ar.push(smo257543);
const smo257545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo257545.setAttribute('id', 'smo257545');
const smo257546 = new VF.Annotation('ri');
smo257546.setAttribute('id', 'smo257546');
smo257546.setFont('times', 12, 'normal');
smo257546.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257545.addModifier(smo257546);
smo257546.addClass('lyric lyric-0');
smo257569v0ar.push(smo257545);
const smo257547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo257547.setAttribute('id', 'smo257547');
const smo257548 = new VF.Annotation('bun');
smo257548.setAttribute('id', 'smo257548');
smo257548.setFont('times', 12, 'normal');
smo257548.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257547.addModifier(smo257548);
smo257548.addClass('lyric lyric-0');
smo257569v0ar.push(smo257547);
const smo257549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo257549.setAttribute('id', 'smo257549');
const smo257550 = new VF.Annotation('Man');
smo257550.setAttribute('id', 'smo257550');
smo257550.setFont('times', 12, 'normal');
smo257550.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257549.addModifier(smo257550);
smo257550.addClass('lyric lyric-0 lyric-hyphen');
smo257569v0ar.push(smo257549);
const smo257551 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo257551.setAttribute('id', 'smo257551');
smo257569v0ar.push(smo257551);
const smo257552 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo257552.setAttribute('id', 'smo257552');
const smo257553 = new VF.Annotation('ding');
smo257553.setAttribute('id', 'smo257553');
smo257553.setFont('times', 12, 'normal');
smo257553.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257552.addModifier(smo257553);
smo257553.addClass('lyric lyric-0 lyric-hyphen');
smo257569v0ar.push(smo257552);
smo257569v0.addTickables(smo257569v0ar)
fmtsmo25756966.joinVoices([smo257569v0]);
const fmtsmo26056366 = new VF.Formatter();
//
// voices and notes for stave 1 66
const smo260563v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo260563v0ar = [];
const smo260535 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo260535.setAttribute('id', 'smo260535');
const smo260536 = new VF.Annotation('bun');
smo260536.setAttribute('id', 'smo260536');
smo260536.setFont('times', 12, 'normal');
smo260536.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260535.addModifier(smo260536);
smo260536.addClass('lyric lyric-0');
smo260563v0ar.push(smo260535);
const smo260537 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo260537.setAttribute('id', 'smo260537');
const smo260538 = new VF.Annotation('yi');
smo260538.setAttribute('id', 'smo260538');
smo260538.setFont('times', 12, 'normal');
smo260538.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260537.addModifier(smo260538);
smo260538.addClass('lyric lyric-0 lyric-hyphen');
smo260563v0ar.push(smo260537);
const smo260539 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo260539.setAttribute('id', 'smo260539');
const smo260540 = new VF.Annotation('ri');
smo260540.setAttribute('id', 'smo260540');
smo260540.setFont('times', 12, 'normal');
smo260540.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260539.addModifier(smo260540);
smo260540.addClass('lyric lyric-0');
smo260563v0ar.push(smo260539);
const smo260541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo260541.setAttribute('id', 'smo260541');
const smo260542 = new VF.Annotation('bun');
smo260542.setAttribute('id', 'smo260542');
smo260542.setFont('times', 12, 'normal');
smo260542.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260541.addModifier(smo260542);
smo260542.addClass('lyric lyric-0');
smo260563v0ar.push(smo260541);
const smo260543 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo260543.setAttribute('id', 'smo260543');
const smo260544 = new VF.Annotation('Man');
smo260544.setAttribute('id', 'smo260544');
smo260544.setFont('times', 12, 'normal');
smo260544.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260543.addModifier(smo260544);
smo260544.addClass('lyric lyric-0 lyric-hyphen');
smo260563v0ar.push(smo260543);
const smo260545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo260545.setAttribute('id', 'smo260545');
smo260563v0ar.push(smo260545);
const smo260546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo260546.setAttribute('id', 'smo260546');
const smo260547 = new VF.Annotation('ding');
smo260547.setAttribute('id', 'smo260547');
smo260547.setFont('times', 12, 'normal');
smo260547.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260546.addModifier(smo260547);
smo260547.addClass('lyric lyric-0 lyric-hyphen');
smo260563v0ar.push(smo260546);
smo260563v0.addTickables(smo260563v0ar)
fmtsmo26056366.joinVoices([smo260563v0]);
const fmtsmo26370666 = new VF.Formatter();
//
// voices and notes for stave 2 66
const smo263706v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo263706v0ar = [];
const smo263678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo263678.setAttribute('id', 'smo263678');
const smo263679 = new VF.Annotation('bun');
smo263679.setAttribute('id', 'smo263679');
smo263679.setFont('times', 12, 'normal');
smo263679.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263678.addModifier(smo263679);
smo263679.addClass('lyric lyric-0');
smo263706v0ar.push(smo263678);
const smo263680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo263680.setAttribute('id', 'smo263680');
const smo263681 = new VF.Annotation('yi');
smo263681.setAttribute('id', 'smo263681');
smo263681.setFont('times', 12, 'normal');
smo263681.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263680.addModifier(smo263681);
smo263681.addClass('lyric lyric-0 lyric-hyphen');
smo263706v0ar.push(smo263680);
const smo263682 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo263682.setAttribute('id', 'smo263682');
const smo263683 = new VF.Annotation('ri');
smo263683.setAttribute('id', 'smo263683');
smo263683.setFont('times', 12, 'normal');
smo263683.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263682.addModifier(smo263683);
smo263683.addClass('lyric lyric-0');
smo263706v0ar.push(smo263682);
const smo263684 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo263684.setAttribute('id', 'smo263684');
const smo263685 = new VF.Annotation('bun');
smo263685.setAttribute('id', 'smo263685');
smo263685.setFont('times', 12, 'normal');
smo263685.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263684.addModifier(smo263685);
smo263685.addClass('lyric lyric-0');
smo263706v0ar.push(smo263684);
const smo263686 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo263686.setAttribute('id', 'smo263686');
const smo263687 = new VF.Annotation('Man');
smo263687.setAttribute('id', 'smo263687');
smo263687.setFont('times', 12, 'normal');
smo263687.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263686.addModifier(smo263687);
smo263687.addClass('lyric lyric-0 lyric-hyphen');
smo263706v0ar.push(smo263686);
const smo263688 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo263688.setAttribute('id', 'smo263688');
smo263706v0ar.push(smo263688);
const smo263689 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo263689.setAttribute('id', 'smo263689');
const smo263690 = new VF.Annotation('ding');
smo263690.setAttribute('id', 'smo263690');
smo263690.setFont('times', 12, 'normal');
smo263690.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263689.addModifier(smo263690);
smo263690.addClass('lyric lyric-0 lyric-hyphen');
smo263706v0ar.push(smo263689);
smo263706v0.addTickables(smo263706v0ar)
fmtsmo26370666.joinVoices([smo263706v0]);
const fmtsmo26682266 = new VF.Formatter();
//
// voices and notes for stave 3 66
const smo266822v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266822v0ar = [];
const smo266794 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo266794.setAttribute('id', 'smo266794');
const smo266795 = new VF.Annotation('bun');
smo266795.setAttribute('id', 'smo266795');
smo266795.setFont('times', 12, 'normal');
smo266795.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266794.addModifier(smo266795);
smo266795.addClass('lyric lyric-0');
smo266822v0ar.push(smo266794);
const smo266796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo266796.setAttribute('id', 'smo266796');
const smo266797 = new VF.Annotation('yi');
smo266797.setAttribute('id', 'smo266797');
smo266797.setFont('times', 12, 'normal');
smo266797.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266796.addModifier(smo266797);
smo266797.addClass('lyric lyric-0 lyric-hyphen');
smo266822v0ar.push(smo266796);
const smo266798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo266798.setAttribute('id', 'smo266798');
const smo266799 = new VF.Annotation('ri');
smo266799.setAttribute('id', 'smo266799');
smo266799.setFont('times', 12, 'normal');
smo266799.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266798.addModifier(smo266799);
smo266799.addClass('lyric lyric-0');
smo266822v0ar.push(smo266798);
const smo266800 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo266800.setAttribute('id', 'smo266800');
const smo266801 = new VF.Annotation('bun');
smo266801.setAttribute('id', 'smo266801');
smo266801.setFont('times', 12, 'normal');
smo266801.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266800.addModifier(smo266801);
smo266801.addClass('lyric lyric-0');
smo266822v0ar.push(smo266800);
const smo266802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo266802.setAttribute('id', 'smo266802');
const smo266803 = new VF.Annotation('Man');
smo266803.setAttribute('id', 'smo266803');
smo266803.setFont('times', 12, 'normal');
smo266803.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266802.addModifier(smo266803);
smo266803.addClass('lyric lyric-0 lyric-hyphen');
smo266822v0ar.push(smo266802);
const smo266804 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo266804.setAttribute('id', 'smo266804');
smo266822v0ar.push(smo266804);
const smo266805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo266805.setAttribute('id', 'smo266805');
const smo266806 = new VF.Annotation('ding');
smo266806.setAttribute('id', 'smo266806');
smo266806.setFont('times', 12, 'normal');
smo266806.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266805.addModifier(smo266806);
smo266806.addClass('lyric lyric-0 lyric-hyphen');
smo266822v0ar.push(smo266805);
smo266822v0.addTickables(smo266822v0ar)
fmtsmo26682266.joinVoices([smo266822v0]);
const fmtsmo26984166 = new VF.Formatter();
//
// voices and notes for stave 4 66
const smo269841v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269841v0ar = [];
const smo269813 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo269813.setAttribute('id', 'smo269813');
const smo269814 = new VF.Annotation('bun');
smo269814.setAttribute('id', 'smo269814');
smo269814.setFont('times', 12, 'normal');
smo269814.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269813.addModifier(smo269814);
smo269814.addClass('lyric lyric-0');
smo269841v0ar.push(smo269813);
const smo269815 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo269815.setAttribute('id', 'smo269815');
const smo269816 = new VF.Annotation('yi');
smo269816.setAttribute('id', 'smo269816');
smo269816.setFont('times', 12, 'normal');
smo269816.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269815.addModifier(smo269816);
smo269816.addClass('lyric lyric-0 lyric-hyphen');
smo269841v0ar.push(smo269815);
const smo269817 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo269817.setAttribute('id', 'smo269817');
const smo269818 = new VF.Annotation('ri');
smo269818.setAttribute('id', 'smo269818');
smo269818.setFont('times', 12, 'normal');
smo269818.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269817.addModifier(smo269818);
smo269818.addClass('lyric lyric-0');
smo269841v0ar.push(smo269817);
const smo269819 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo269819.setAttribute('id', 'smo269819');
const smo269820 = new VF.Annotation('bun');
smo269820.setAttribute('id', 'smo269820');
smo269820.setFont('times', 12, 'normal');
smo269820.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269819.addModifier(smo269820);
smo269820.addClass('lyric lyric-0');
smo269841v0ar.push(smo269819);
const smo269821 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo269821.setAttribute('id', 'smo269821');
const smo269822 = new VF.Annotation('Man');
smo269822.setAttribute('id', 'smo269822');
smo269822.setFont('times', 12, 'normal');
smo269822.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269821.addModifier(smo269822);
smo269822.addClass('lyric lyric-0 lyric-hyphen');
smo269841v0ar.push(smo269821);
const smo269823 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo269823.setAttribute('id', 'smo269823');
smo269841v0ar.push(smo269823);
const smo269824 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo269824.setAttribute('id', 'smo269824');
const smo269825 = new VF.Annotation('ding');
smo269825.setAttribute('id', 'smo269825');
smo269825.setFont('times', 12, 'normal');
smo269825.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269824.addModifier(smo269825);
smo269825.addClass('lyric lyric-0 lyric-hyphen');
smo269841v0ar.push(smo269824);
smo269841v0.addTickables(smo269841v0ar)
fmtsmo26984166.joinVoices([smo269841v0]);
const fmtsmo27294866 = new VF.Formatter();
//
// voices and notes for stave 5 66
const smo272948v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272948v0ar = [];
const smo272920 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo272920.setAttribute('id', 'smo272920');
const smo272921 = new VF.Annotation('bun');
smo272921.setAttribute('id', 'smo272921');
smo272921.setFont('times', 12, 'normal');
smo272921.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272920.addModifier(smo272921);
smo272921.addClass('lyric lyric-0');
smo272948v0ar.push(smo272920);
const smo272922 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo272922.setAttribute('id', 'smo272922');
const smo272923 = new VF.Annotation('yi');
smo272923.setAttribute('id', 'smo272923');
smo272923.setFont('times', 12, 'normal');
smo272923.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272922.addModifier(smo272923);
smo272923.addClass('lyric lyric-0 lyric-hyphen');
smo272948v0ar.push(smo272922);
const smo272924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo272924.setAttribute('id', 'smo272924');
const smo272925 = new VF.Annotation('ri');
smo272925.setAttribute('id', 'smo272925');
smo272925.setFont('times', 12, 'normal');
smo272925.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272924.addModifier(smo272925);
smo272925.addClass('lyric lyric-0');
smo272948v0ar.push(smo272924);
const smo272926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo272926.setAttribute('id', 'smo272926');
const smo272927 = new VF.Annotation('bun');
smo272927.setAttribute('id', 'smo272927');
smo272927.setFont('times', 12, 'normal');
smo272927.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272926.addModifier(smo272927);
smo272927.addClass('lyric lyric-0');
smo272948v0ar.push(smo272926);
const smo272928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo272928.setAttribute('id', 'smo272928');
const smo272929 = new VF.Annotation('Man');
smo272929.setAttribute('id', 'smo272929');
smo272929.setFont('times', 12, 'normal');
smo272929.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272928.addModifier(smo272929);
smo272929.addClass('lyric lyric-0 lyric-hyphen');
smo272948v0ar.push(smo272928);
const smo272930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo272930.setAttribute('id', 'smo272930');
smo272948v0ar.push(smo272930);
const smo272931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo272931.setAttribute('id', 'smo272931');
const smo272932 = new VF.Annotation('ding');
smo272932.setAttribute('id', 'smo272932');
smo272932.setFont('times', 12, 'normal');
smo272932.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272931.addModifier(smo272932);
smo272932.addClass('lyric lyric-0 lyric-hyphen');
smo272948v0ar.push(smo272931);
smo272948v0.addTickables(smo272948v0ar)
fmtsmo27294866.joinVoices([smo272948v0]);
const fmtsmo27606066 = new VF.Formatter();
//
// voices and notes for stave 6 66
const smo276060v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo276060v0ar = [];
const smo276032 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo276032.setAttribute('id', 'smo276032');
const smo276033 = new VF.Annotation('bun');
smo276033.setAttribute('id', 'smo276033');
smo276033.setFont('times', 12, 'normal');
smo276033.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo276032.addModifier(smo276033);
smo276033.addClass('lyric lyric-0');
smo276060v0ar.push(smo276032);
const smo276034 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo276034.setAttribute('id', 'smo276034');
const smo276035 = new VF.Annotation('yi');
smo276035.setAttribute('id', 'smo276035');
smo276035.setFont('times', 12, 'normal');
smo276035.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo276034.addModifier(smo276035);
smo276035.addClass('lyric lyric-0 lyric-hyphen');
smo276060v0ar.push(smo276034);
const smo276036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo276036.setAttribute('id', 'smo276036');
const smo276037 = new VF.Annotation('ri');
smo276037.setAttribute('id', 'smo276037');
smo276037.setFont('times', 12, 'normal');
smo276037.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo276036.addModifier(smo276037);
smo276037.addClass('lyric lyric-0');
smo276060v0ar.push(smo276036);
const smo276038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo276038.setAttribute('id', 'smo276038');
const smo276039 = new VF.Annotation('bun');
smo276039.setAttribute('id', 'smo276039');
smo276039.setFont('times', 12, 'normal');
smo276039.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo276038.addModifier(smo276039);
smo276039.addClass('lyric lyric-0');
smo276060v0ar.push(smo276038);
const smo276040 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo276040.setAttribute('id', 'smo276040');
const smo276041 = new VF.Annotation('Man');
smo276041.setAttribute('id', 'smo276041');
smo276041.setFont('times', 12, 'normal');
smo276041.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo276040.addModifier(smo276041);
smo276041.addClass('lyric lyric-0 lyric-hyphen');
smo276060v0ar.push(smo276040);
const smo276042 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo276042.setAttribute('id', 'smo276042');
smo276060v0ar.push(smo276042);
const smo276043 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo276043.setAttribute('id', 'smo276043');
const smo276044 = new VF.Annotation('ding');
smo276044.setAttribute('id', 'smo276044');
smo276044.setFont('times', 12, 'normal');
smo276044.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo276043.addModifier(smo276044);
smo276044.addClass('lyric lyric-0 lyric-hyphen');
smo276060v0ar.push(smo276043);
smo276060v0.addTickables(smo276060v0ar)
fmtsmo27606066.joinVoices([smo276060v0]);
const fmtsmo27916966 = new VF.Formatter();
//
// voices and notes for stave 7 66
const smo279169v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo279169v0ar = [];
const smo279141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo279141.setAttribute('id', 'smo279141');
const smo279142 = new VF.Annotation('bun');
smo279142.setAttribute('id', 'smo279142');
smo279142.setFont('times', 12, 'normal');
smo279142.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo279141.addModifier(smo279142);
smo279142.addClass('lyric lyric-0');
smo279169v0ar.push(smo279141);
const smo279143 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo279143.setAttribute('id', 'smo279143');
const smo279144 = new VF.Annotation('yi');
smo279144.setAttribute('id', 'smo279144');
smo279144.setFont('times', 12, 'normal');
smo279144.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo279143.addModifier(smo279144);
smo279144.addClass('lyric lyric-0 lyric-hyphen');
smo279169v0ar.push(smo279143);
const smo279145 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo279145.setAttribute('id', 'smo279145');
const smo279146 = new VF.Annotation('ri');
smo279146.setAttribute('id', 'smo279146');
smo279146.setFont('times', 12, 'normal');
smo279146.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo279145.addModifier(smo279146);
smo279146.addClass('lyric lyric-0');
smo279169v0ar.push(smo279145);
const smo279147 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo279147.setAttribute('id', 'smo279147');
const smo279148 = new VF.Annotation('bun');
smo279148.setAttribute('id', 'smo279148');
smo279148.setFont('times', 12, 'normal');
smo279148.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo279147.addModifier(smo279148);
smo279148.addClass('lyric lyric-0');
smo279169v0ar.push(smo279147);
const smo279149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo279149.setAttribute('id', 'smo279149');
const smo279150 = new VF.Annotation('Man');
smo279150.setAttribute('id', 'smo279150');
smo279150.setFont('times', 12, 'normal');
smo279150.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo279149.addModifier(smo279150);
smo279150.addClass('lyric lyric-0 lyric-hyphen');
smo279169v0ar.push(smo279149);
const smo279151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo279151.setAttribute('id', 'smo279151');
smo279169v0ar.push(smo279151);
const smo279152 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo279152.setAttribute('id', 'smo279152');
const smo279153 = new VF.Annotation('ding');
smo279153.setAttribute('id', 'smo279153');
smo279153.setFont('times', 12, 'normal');
smo279153.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo279152.addModifier(smo279153);
smo279153.addClass('lyric lyric-0 lyric-hyphen');
smo279169v0ar.push(smo279152);
smo279169v0.addTickables(smo279169v0ar)
fmtsmo27916966.joinVoices([smo279169v0]);
const fmtsmo28225566 = new VF.Formatter();
//
// voices and notes for stave 8 66
const smo282255v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo282255v0ar = [];
const smo282227 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo282227.setAttribute('id', 'smo282227');
const smo282228 = new VF.Annotation('bun');
smo282228.setAttribute('id', 'smo282228');
smo282228.setFont('times', 12, 'normal');
smo282228.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282227.addModifier(smo282228);
smo282228.addClass('lyric lyric-0');
smo282255v0ar.push(smo282227);
const smo282229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo282229.setAttribute('id', 'smo282229');
const smo282230 = new VF.Annotation('yi');
smo282230.setAttribute('id', 'smo282230');
smo282230.setFont('times', 12, 'normal');
smo282230.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282229.addModifier(smo282230);
smo282230.addClass('lyric lyric-0 lyric-hyphen');
smo282255v0ar.push(smo282229);
const smo282231 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo282231.setAttribute('id', 'smo282231');
const smo282232 = new VF.Annotation('ri');
smo282232.setAttribute('id', 'smo282232');
smo282232.setFont('times', 12, 'normal');
smo282232.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282231.addModifier(smo282232);
smo282232.addClass('lyric lyric-0');
smo282255v0ar.push(smo282231);
const smo282233 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo282233.setAttribute('id', 'smo282233');
const smo282234 = new VF.Annotation('bun');
smo282234.setAttribute('id', 'smo282234');
smo282234.setFont('times', 12, 'normal');
smo282234.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282233.addModifier(smo282234);
smo282234.addClass('lyric lyric-0');
smo282255v0ar.push(smo282233);
const smo282235 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo282235.setAttribute('id', 'smo282235');
const smo282236 = new VF.Annotation('Man');
smo282236.setAttribute('id', 'smo282236');
smo282236.setFont('times', 12, 'normal');
smo282236.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282235.addModifier(smo282236);
smo282236.addClass('lyric lyric-0 lyric-hyphen');
smo282255v0ar.push(smo282235);
const smo282237 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo282237.setAttribute('id', 'smo282237');
smo282255v0ar.push(smo282237);
const smo282238 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo282238.setAttribute('id', 'smo282238');
const smo282239 = new VF.Annotation('ding');
smo282239.setAttribute('id', 'smo282239');
smo282239.setFont('times', 12, 'normal');
smo282239.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282238.addModifier(smo282239);
smo282239.addClass('lyric lyric-0 lyric-hyphen');
smo282255v0ar.push(smo282238);
smo282255v0.addTickables(smo282255v0ar)
fmtsmo28225566.joinVoices([smo282255v0]);
const fmtsmo28534466 = new VF.Formatter();
//
// voices and notes for stave 9 66
const smo285344v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo285344v0ar = [];
const smo285316 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo285316.setAttribute('id', 'smo285316');
const smo285317 = new VF.Annotation('bun');
smo285317.setAttribute('id', 'smo285317');
smo285317.setFont('times', 12, 'normal');
smo285317.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285316.addModifier(smo285317);
smo285317.addClass('lyric lyric-0');
smo285344v0ar.push(smo285316);
const smo285318 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo285318.setAttribute('id', 'smo285318');
const smo285319 = new VF.Annotation('yi');
smo285319.setAttribute('id', 'smo285319');
smo285319.setFont('times', 12, 'normal');
smo285319.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285318.addModifier(smo285319);
smo285319.addClass('lyric lyric-0 lyric-hyphen');
smo285344v0ar.push(smo285318);
const smo285320 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo285320.setAttribute('id', 'smo285320');
const smo285321 = new VF.Annotation('ri');
smo285321.setAttribute('id', 'smo285321');
smo285321.setFont('times', 12, 'normal');
smo285321.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285320.addModifier(smo285321);
smo285321.addClass('lyric lyric-0');
smo285344v0ar.push(smo285320);
const smo285322 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo285322.setAttribute('id', 'smo285322');
const smo285323 = new VF.Annotation('bun');
smo285323.setAttribute('id', 'smo285323');
smo285323.setFont('times', 12, 'normal');
smo285323.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285322.addModifier(smo285323);
smo285323.addClass('lyric lyric-0');
smo285344v0ar.push(smo285322);
const smo285324 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo285324.setAttribute('id', 'smo285324');
const smo285325 = new VF.Annotation('Man');
smo285325.setAttribute('id', 'smo285325');
smo285325.setFont('times', 12, 'normal');
smo285325.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285324.addModifier(smo285325);
smo285325.addClass('lyric lyric-0 lyric-hyphen');
smo285344v0ar.push(smo285324);
const smo285326 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo285326.setAttribute('id', 'smo285326');
smo285344v0ar.push(smo285326);
const smo285327 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo285327.setAttribute('id', 'smo285327');
const smo285328 = new VF.Annotation('ding');
smo285328.setAttribute('id', 'smo285328');
smo285328.setFont('times', 12, 'normal');
smo285328.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285327.addModifier(smo285328);
smo285328.addClass('lyric lyric-0 lyric-hyphen');
smo285344v0ar.push(smo285327);
smo285344v0.addTickables(smo285344v0ar)
fmtsmo28534466.joinVoices([smo285344v0]);
const fmtsmo28838466 = new VF.Formatter();
//
// voices and notes for stave 10 66
const smo288384v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo288384v0ar = [];
const smo288356 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo288356.setAttribute('id', 'smo288356');
const smo288357 = new VF.Annotation('bun');
smo288357.setAttribute('id', 'smo288357');
smo288357.setFont('times', 12, 'normal');
smo288357.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288356.addModifier(smo288357);
smo288357.addClass('lyric lyric-0');
smo288384v0ar.push(smo288356);
const smo288358 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo288358.setAttribute('id', 'smo288358');
const smo288359 = new VF.Annotation('yi');
smo288359.setAttribute('id', 'smo288359');
smo288359.setFont('times', 12, 'normal');
smo288359.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288358.addModifier(smo288359);
smo288359.addClass('lyric lyric-0 lyric-hyphen');
smo288384v0ar.push(smo288358);
const smo288360 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo288360.setAttribute('id', 'smo288360');
const smo288361 = new VF.Annotation('ri');
smo288361.setAttribute('id', 'smo288361');
smo288361.setFont('times', 12, 'normal');
smo288361.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288360.addModifier(smo288361);
smo288361.addClass('lyric lyric-0');
smo288384v0ar.push(smo288360);
const smo288362 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo288362.setAttribute('id', 'smo288362');
const smo288363 = new VF.Annotation('bun');
smo288363.setAttribute('id', 'smo288363');
smo288363.setFont('times', 12, 'normal');
smo288363.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288362.addModifier(smo288363);
smo288363.addClass('lyric lyric-0');
smo288384v0ar.push(smo288362);
const smo288364 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo288364.setAttribute('id', 'smo288364');
const smo288365 = new VF.Annotation('Man');
smo288365.setAttribute('id', 'smo288365');
smo288365.setFont('times', 12, 'normal');
smo288365.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288364.addModifier(smo288365);
smo288365.addClass('lyric lyric-0 lyric-hyphen');
smo288384v0ar.push(smo288364);
const smo288366 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo288366.setAttribute('id', 'smo288366');
smo288384v0ar.push(smo288366);
const smo288367 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo288367.setAttribute('id', 'smo288367');
const smo288368 = new VF.Annotation('ding');
smo288368.setAttribute('id', 'smo288368');
smo288368.setFont('times', 12, 'normal');
smo288368.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288367.addModifier(smo288368);
smo288368.addClass('lyric lyric-0 lyric-hyphen');
smo288384v0ar.push(smo288367);
smo288384v0.addTickables(smo288384v0ar)
fmtsmo28838466.joinVoices([smo288384v0]);
const fmtsmo29143866 = new VF.Formatter();
//
// voices and notes for stave 11 66
const smo291438v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo291438v0ar = [];
const smo291410 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo291410.setAttribute('id', 'smo291410');
const smo291411 = new VF.Annotation('bun');
smo291411.setAttribute('id', 'smo291411');
smo291411.setFont('times', 12, 'normal');
smo291411.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291410.addModifier(smo291411);
smo291411.addClass('lyric lyric-0');
smo291438v0ar.push(smo291410);
const smo291412 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo291412.setAttribute('id', 'smo291412');
const smo291413 = new VF.Annotation('yi');
smo291413.setAttribute('id', 'smo291413');
smo291413.setFont('times', 12, 'normal');
smo291413.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291412.addModifier(smo291413);
smo291413.addClass('lyric lyric-0 lyric-hyphen');
smo291438v0ar.push(smo291412);
const smo291414 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo291414.setAttribute('id', 'smo291414');
const smo291415 = new VF.Annotation('ri');
smo291415.setAttribute('id', 'smo291415');
smo291415.setFont('times', 12, 'normal');
smo291415.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291414.addModifier(smo291415);
smo291415.addClass('lyric lyric-0');
smo291438v0ar.push(smo291414);
const smo291416 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo291416.setAttribute('id', 'smo291416');
const smo291417 = new VF.Annotation('bun');
smo291417.setAttribute('id', 'smo291417');
smo291417.setFont('times', 12, 'normal');
smo291417.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291416.addModifier(smo291417);
smo291417.addClass('lyric lyric-0');
smo291438v0ar.push(smo291416);
const smo291418 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo291418.setAttribute('id', 'smo291418');
const smo291419 = new VF.Annotation('Man');
smo291419.setAttribute('id', 'smo291419');
smo291419.setFont('times', 12, 'normal');
smo291419.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291418.addModifier(smo291419);
smo291419.addClass('lyric lyric-0 lyric-hyphen');
smo291438v0ar.push(smo291418);
const smo291420 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo291420.setAttribute('id', 'smo291420');
smo291438v0ar.push(smo291420);
const smo291421 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo291421.setAttribute('id', 'smo291421');
const smo291422 = new VF.Annotation('ding');
smo291422.setAttribute('id', 'smo291422');
smo291422.setFont('times', 12, 'normal');
smo291422.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291421.addModifier(smo291422);
smo291422.addClass('lyric lyric-0 lyric-hyphen');
smo291438v0ar.push(smo291421);
smo291438v0.addTickables(smo291438v0ar)
fmtsmo29143866.joinVoices([smo291438v0]);
const fmtsmo29448166 = new VF.Formatter();
//
// voices and notes for stave 12 66
const smo294481v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo294481v0ar = [];
const smo294453 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo294453.setAttribute('id', 'smo294453');
const smo294454 = new VF.Annotation('bun');
smo294454.setAttribute('id', 'smo294454');
smo294454.setFont('times', 12, 'normal');
smo294454.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo294453.addModifier(smo294454);
smo294454.addClass('lyric lyric-0');
smo294481v0ar.push(smo294453);
const smo294455 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo294455.setAttribute('id', 'smo294455');
const smo294456 = new VF.Annotation('yi');
smo294456.setAttribute('id', 'smo294456');
smo294456.setFont('times', 12, 'normal');
smo294456.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo294455.addModifier(smo294456);
smo294456.addClass('lyric lyric-0 lyric-hyphen');
smo294481v0ar.push(smo294455);
const smo294457 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo294457.setAttribute('id', 'smo294457');
const smo294458 = new VF.Annotation('ri');
smo294458.setAttribute('id', 'smo294458');
smo294458.setFont('times', 12, 'normal');
smo294458.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo294457.addModifier(smo294458);
smo294458.addClass('lyric lyric-0');
smo294481v0ar.push(smo294457);
const smo294459 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo294459.setAttribute('id', 'smo294459');
const smo294460 = new VF.Annotation('bun');
smo294460.setAttribute('id', 'smo294460');
smo294460.setFont('times', 12, 'normal');
smo294460.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo294459.addModifier(smo294460);
smo294460.addClass('lyric lyric-0');
smo294481v0ar.push(smo294459);
const smo294461 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo294461.setAttribute('id', 'smo294461');
const smo294462 = new VF.Annotation('Man');
smo294462.setAttribute('id', 'smo294462');
smo294462.setFont('times', 12, 'normal');
smo294462.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo294461.addModifier(smo294462);
smo294462.addClass('lyric lyric-0 lyric-hyphen');
smo294481v0ar.push(smo294461);
const smo294463 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo294463.setAttribute('id', 'smo294463');
smo294481v0ar.push(smo294463);
const smo294464 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo294464.setAttribute('id', 'smo294464');
const smo294465 = new VF.Annotation('ding');
smo294465.setAttribute('id', 'smo294465');
smo294465.setFont('times', 12, 'normal');
smo294465.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo294464.addModifier(smo294465);
smo294465.addClass('lyric lyric-0 lyric-hyphen');
smo294481v0ar.push(smo294464);
smo294481v0.addTickables(smo294481v0ar)
fmtsmo29448166.joinVoices([smo294481v0]);
const fmtsmo29768066 = new VF.Formatter();
//
// voices and notes for stave 13 66
const smo297680v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo297680v0ar = [];
const smo297659 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
smo297659.setAttribute('id', 'smo297659');
const smo2976590acc = new VF.Accidental('#');
smo297659.addModifier(smo2976590acc, 0);
smo297659.addModifier(new VF.Dot(), 0);
smo297659.addModifier(new VF.Dot(), 1);
smo297659.addModifier(new VF.Dot(), 2);
smo297680v0ar.push(smo297659);
const smo297660 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo297660.setAttribute('id', 'smo297660');
smo297680v0ar.push(smo297660);
const smo297661 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo297661.setAttribute('id', 'smo297661');
smo297680v0ar.push(smo297661);
const smo297662 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo297662.setAttribute('id', 'smo297662');
const smo2976622acc = new VF.Accidental('b');
smo297662.addModifier(smo2976622acc, 2);
smo297680v0ar.push(smo297662);
const smo297663 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo297663.setAttribute('id', 'smo297663');
smo297680v0ar.push(smo297663);
const smo297664 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
smo297664.setAttribute('id', 'smo297664');
smo297680v0ar.push(smo297664);
smo297680v0.addTickables(smo297680v0ar)
fmtsmo29768066.joinVoices([smo297680v0]);
const fmtsmo30089366 = new VF.Formatter();
//
// voices and notes for stave 14 66
const smo300893v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300893v0ar = [];
const smo300872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
smo300872.setAttribute('id', 'smo300872');
const smo3008720acc = new VF.Accidental('#');
smo300872.addModifier(smo3008720acc, 0);
smo300872.addModifier(new VF.Dot(), 0);
smo300872.addModifier(new VF.Dot(), 1);
smo300872.addModifier(new VF.Dot(), 2);
smo300893v0ar.push(smo300872);
const smo300873 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo300873.setAttribute('id', 'smo300873');
smo300893v0ar.push(smo300873);
const smo300874 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo300874.setAttribute('id', 'smo300874');
smo300893v0ar.push(smo300874);
const smo300875 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo300875.setAttribute('id', 'smo300875');
const smo3008752acc = new VF.Accidental('b');
smo300875.addModifier(smo3008752acc, 2);
smo300893v0ar.push(smo300875);
const smo300876 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
smo300876.setAttribute('id', 'smo300876');
smo300893v0ar.push(smo300876);
const smo300877 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
smo300877.setAttribute('id', 'smo300877');
smo300893v0ar.push(smo300877);
smo300893v0.addTickables(smo300893v0ar)
fmtsmo30089366.joinVoices([smo300893v0]);
const fmtsmo30408866 = new VF.Formatter();
//
// voices and notes for stave 15 66
const smo304088v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo304088v0ar = [];
const smo304067 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["f#/3/n"]}'))
smo304067.setAttribute('id', 'smo304067');
const smo3040670acc = new VF.Accidental('#');
smo304067.addModifier(smo3040670acc, 0);
smo304067.addModifier(new VF.Dot(), 0);
smo304088v0ar.push(smo304067);
const smo304068 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo304068.setAttribute('id', 'smo304068');
smo304088v0ar.push(smo304068);
const smo304069 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo304069.setAttribute('id', 'smo304069');
smo304088v0ar.push(smo304069);
const smo304070 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo304070.setAttribute('id', 'smo304070');
smo304088v0ar.push(smo304070);
const smo304071 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo304071.setAttribute('id', 'smo304071');
smo304088v0ar.push(smo304071);
const smo304072 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo304072.setAttribute('id', 'smo304072');
smo304088v0ar.push(smo304072);
smo304088v0.addTickables(smo304088v0ar)
fmtsmo30408866.joinVoices([smo304088v0]);
const fmtsmo30720366 = new VF.Formatter();
//
// voices and notes for stave 16 66
const smo307203v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo307203v0ar = [];
const smo307184 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo307184.setAttribute('id', 'smo307184');
smo307184.addModifier(new VF.Dot(), 0);
smo307203v0ar.push(smo307184);
const smo307185 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/3/n"]}'))
smo307185.setAttribute('id', 'smo307185');
const smo3071850acc = new VF.Accidental('b');
smo307185.addModifier(smo3071850acc, 0);
smo307203v0ar.push(smo307185);
const smo307186 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["eb/3/n"]}'))
smo307186.setAttribute('id', 'smo307186');
smo307203v0ar.push(smo307186);
const smo307187 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo307187.setAttribute('id', 'smo307187');
smo307203v0ar.push(smo307187);
smo307203v0.addTickables(smo307203v0ar)
fmtsmo30720366.joinVoices([smo307203v0]);
const fmtsmo31040266 = new VF.Formatter();
//
// voices and notes for stave 17 66
const smo310402v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo310402v0ar = [];
const smo310373 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo310373.setAttribute('id', 'smo310373');
smo310373.setStyle({ fillStyle: '#aaaaaa7f' });
const smo3103730acc = new VF.Accidental('n');
smo310373.addModifier(smo3103730acc, 0);
const smo310374 = new VF.Annotation('bun');
smo310374.setAttribute('id', 'smo310374');
smo310374.setFont('times', 12, 'normal');
smo310374.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo310373.addModifier(smo310374);
smo310374.addClass('lyric lyric-0');
smo310402v0ar.push(smo310373);
const smo310375 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo310375.setAttribute('id', 'smo310375');
smo310375.setStyle({ fillStyle: '#aaaaaa7f' });
const smo310376 = new VF.Annotation('yi');
smo310376.setAttribute('id', 'smo310376');
smo310376.setFont('times', 12, 'normal');
smo310376.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo310375.addModifier(smo310376);
smo310376.addClass('lyric lyric-0 lyric-hyphen');
smo310402v0ar.push(smo310375);
const smo310377 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo310377.setAttribute('id', 'smo310377');
smo310377.setStyle({ fillStyle: '#aaaaaa7f' });
const smo310378 = new VF.Annotation('ri');
smo310378.setAttribute('id', 'smo310378');
smo310378.setFont('times', 12, 'normal');
smo310378.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo310377.addModifier(smo310378);
smo310378.addClass('lyric lyric-0');
smo310402v0ar.push(smo310377);
const smo310379 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo310379.setAttribute('id', 'smo310379');
smo310379.setStyle({ fillStyle: '#aaaaaa7f' });
const smo310380 = new VF.Annotation('bun');
smo310380.setAttribute('id', 'smo310380');
smo310380.setFont('times', 12, 'normal');
smo310380.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo310379.addModifier(smo310380);
smo310380.addClass('lyric lyric-0');
smo310402v0ar.push(smo310379);
const smo310381 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo310381.setAttribute('id', 'smo310381');
smo310381.setStyle({ fillStyle: '#aaaaaa7f' });
const smo310382 = new VF.Annotation('Man');
smo310382.setAttribute('id', 'smo310382');
smo310382.setFont('times', 12, 'normal');
smo310382.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo310381.addModifier(smo310382);
smo310382.addClass('lyric lyric-0 lyric-hyphen');
smo310402v0ar.push(smo310381);
const smo310383 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo310383.setAttribute('id', 'smo310383');
smo310383.setStyle({ fillStyle: '#aaaaaa7f' });
smo310402v0ar.push(smo310383);
const smo310384 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo310384.setAttribute('id', 'smo310384');
smo310384.setStyle({ fillStyle: '#aaaaaa7f' });
const smo310385 = new VF.Annotation('ding');
smo310385.setAttribute('id', 'smo310385');
smo310385.setFont('times', 12, 'normal');
smo310385.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo310384.addModifier(smo310385);
smo310385.addClass('lyric lyric-0 lyric-hyphen');
smo310402v0ar.push(smo310384);
smo310402v0.addTickables(smo310402v0ar)
fmtsmo31040266.joinVoices([smo310402v0]);
const smo310402v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo310402v1ar = [];
const smo310386 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo310386.setAttribute('id', 'smo310386');
smo310386.setStyle({ fillStyle: "#115511" });
smo310402v1ar.push(smo310386);
smo310402v1.addTickables(smo310402v1ar)
fmtsmo31040266.joinVoices([smo310402v1]);
// create beam groups and tuplets for format grp smo312125 before formatting
const dirsmo403584 = smo257543.getStemDirection();
smo257543.setStemDirection(dirsmo403584);
smo257545.setStemDirection(dirsmo403584);
const smo403584 = new VF.Beam([smo257543,smo257545]);
const dirsmo403585 = smo257547.getStemDirection();
smo257547.setStemDirection(dirsmo403585);
smo257549.setStemDirection(dirsmo403585);
smo257551.setStemDirection(dirsmo403585);
smo257552.setStemDirection(dirsmo403585);
const smo403585 = new VF.Beam([smo257547,smo257549,smo257551,smo257552]);
const dirsmo403587 = smo260537.getStemDirection();
smo260537.setStemDirection(dirsmo403587);
smo260539.setStemDirection(dirsmo403587);
const smo403587 = new VF.Beam([smo260537,smo260539]);
const dirsmo403588 = smo260541.getStemDirection();
smo260541.setStemDirection(dirsmo403588);
smo260543.setStemDirection(dirsmo403588);
smo260545.setStemDirection(dirsmo403588);
smo260546.setStemDirection(dirsmo403588);
const smo403588 = new VF.Beam([smo260541,smo260543,smo260545,smo260546]);
const dirsmo403590 = smo263680.getStemDirection();
smo263680.setStemDirection(dirsmo403590);
smo263682.setStemDirection(dirsmo403590);
const smo403590 = new VF.Beam([smo263680,smo263682]);
const dirsmo403591 = smo263684.getStemDirection();
smo263684.setStemDirection(dirsmo403591);
smo263686.setStemDirection(dirsmo403591);
smo263688.setStemDirection(dirsmo403591);
smo263689.setStemDirection(dirsmo403591);
const smo403591 = new VF.Beam([smo263684,smo263686,smo263688,smo263689]);
const dirsmo403593 = smo266796.getStemDirection();
smo266796.setStemDirection(dirsmo403593);
smo266798.setStemDirection(dirsmo403593);
const smo403593 = new VF.Beam([smo266796,smo266798]);
const dirsmo403594 = smo266800.getStemDirection();
smo266800.setStemDirection(dirsmo403594);
smo266802.setStemDirection(dirsmo403594);
smo266804.setStemDirection(dirsmo403594);
smo266805.setStemDirection(dirsmo403594);
const smo403594 = new VF.Beam([smo266800,smo266802,smo266804,smo266805]);
const dirsmo403596 = smo269815.getStemDirection();
smo269815.setStemDirection(dirsmo403596);
smo269817.setStemDirection(dirsmo403596);
const smo403596 = new VF.Beam([smo269815,smo269817]);
const dirsmo403597 = smo269819.getStemDirection();
smo269819.setStemDirection(dirsmo403597);
smo269821.setStemDirection(dirsmo403597);
smo269823.setStemDirection(dirsmo403597);
smo269824.setStemDirection(dirsmo403597);
const smo403597 = new VF.Beam([smo269819,smo269821,smo269823,smo269824]);
 
// formatting measures in staff group smo312125
fmtsmo25756966.format([smo257569v0,smo260563v0,smo263706v0,smo266822v0,smo269841v0], 297);
const stavesmo257569 = new VF.Stave(1089, 210, 311);
stavesmo257569.setAttribute('id', 'stavesmo257569');
stavesmo257569.setBegBarType(VF.Barline.type.NONE);
stavesmo257569.setContext(context);
stavesmo257569.draw();
smo257569v0.draw(context, stavesmo257569);
smo403584.setContext(context);
smo403584.draw();
smo403585.setContext(context);
smo403585.draw();
const stavesmo260563 = new VF.Stave(1089, 309, 311);
stavesmo260563.setAttribute('id', 'stavesmo260563');
stavesmo260563.setBegBarType(VF.Barline.type.NONE);
stavesmo260563.setContext(context);
stavesmo260563.draw();
smo260563v0.draw(context, stavesmo260563);
smo403587.setContext(context);
smo403587.draw();
smo403588.setContext(context);
smo403588.draw();
const stavesmo263706 = new VF.Stave(1089, 423, 311);
stavesmo263706.setAttribute('id', 'stavesmo263706');
stavesmo263706.setBegBarType(VF.Barline.type.NONE);
stavesmo263706.setContext(context);
stavesmo263706.draw();
smo263706v0.draw(context, stavesmo263706);
smo403590.setContext(context);
smo403590.draw();
smo403591.setContext(context);
smo403591.draw();
const stavesmo266822 = new VF.Stave(1089, 532, 311);
stavesmo266822.setAttribute('id', 'stavesmo266822');
stavesmo266822.setBegBarType(VF.Barline.type.NONE);
stavesmo266822.setContext(context);
stavesmo266822.draw();
smo266822v0.draw(context, stavesmo266822);
smo403593.setContext(context);
smo403593.draw();
smo403594.setContext(context);
smo403594.draw();
const stavesmo269841 = new VF.Stave(1089, 631, 311);
stavesmo269841.setAttribute('id', 'stavesmo269841');
stavesmo269841.setBegBarType(VF.Barline.type.NONE);
stavesmo269841.setContext(context);
stavesmo269841.draw();
smo269841v0.draw(context, stavesmo269841);
smo403596.setContext(context);
smo403596.draw();
smo403597.setContext(context);
smo403597.draw();
// create beam groups and tuplets for format grp smo312127 before formatting
const dirsmo403599 = smo272922.getStemDirection();
smo272922.setStemDirection(dirsmo403599);
smo272924.setStemDirection(dirsmo403599);
const smo403599 = new VF.Beam([smo272922,smo272924]);
const dirsmo403600 = smo272926.getStemDirection();
smo272926.setStemDirection(dirsmo403600);
smo272928.setStemDirection(dirsmo403600);
smo272930.setStemDirection(dirsmo403600);
smo272931.setStemDirection(dirsmo403600);
const smo403600 = new VF.Beam([smo272926,smo272928,smo272930,smo272931]);
const dirsmo403602 = smo276034.getStemDirection();
smo276034.setStemDirection(dirsmo403602);
smo276036.setStemDirection(dirsmo403602);
const smo403602 = new VF.Beam([smo276034,smo276036]);
const dirsmo403603 = smo276038.getStemDirection();
smo276038.setStemDirection(dirsmo403603);
smo276040.setStemDirection(dirsmo403603);
smo276042.setStemDirection(dirsmo403603);
smo276043.setStemDirection(dirsmo403603);
const smo403603 = new VF.Beam([smo276038,smo276040,smo276042,smo276043]);
const dirsmo403605 = smo279143.getStemDirection();
smo279143.setStemDirection(dirsmo403605);
smo279145.setStemDirection(dirsmo403605);
const smo403605 = new VF.Beam([smo279143,smo279145]);
const dirsmo403606 = smo279147.getStemDirection();
smo279147.setStemDirection(dirsmo403606);
smo279149.setStemDirection(dirsmo403606);
smo279151.setStemDirection(dirsmo403606);
smo279152.setStemDirection(dirsmo403606);
const smo403606 = new VF.Beam([smo279147,smo279149,smo279151,smo279152]);
const dirsmo403608 = smo282229.getStemDirection();
smo282229.setStemDirection(dirsmo403608);
smo282231.setStemDirection(dirsmo403608);
const smo403608 = new VF.Beam([smo282229,smo282231]);
const dirsmo403609 = smo282233.getStemDirection();
smo282233.setStemDirection(dirsmo403609);
smo282235.setStemDirection(dirsmo403609);
smo282237.setStemDirection(dirsmo403609);
smo282238.setStemDirection(dirsmo403609);
const smo403609 = new VF.Beam([smo282233,smo282235,smo282237,smo282238]);
 
// formatting measures in staff group smo312127
fmtsmo27294866.format([smo272948v0,smo276060v0,smo279169v0,smo282255v0], 297);
const stavesmo272948 = new VF.Stave(1089, 745, 311);
stavesmo272948.setAttribute('id', 'stavesmo272948');
stavesmo272948.setBegBarType(VF.Barline.type.NONE);
stavesmo272948.setContext(context);
stavesmo272948.draw();
smo272948v0.draw(context, stavesmo272948);
smo403599.setContext(context);
smo403599.draw();
smo403600.setContext(context);
smo403600.draw();
const stavesmo276060 = new VF.Stave(1089, 853, 311);
stavesmo276060.setAttribute('id', 'stavesmo276060');
stavesmo276060.setBegBarType(VF.Barline.type.NONE);
stavesmo276060.setContext(context);
stavesmo276060.draw();
smo276060v0.draw(context, stavesmo276060);
smo403602.setContext(context);
smo403602.draw();
smo403603.setContext(context);
smo403603.draw();
const stavesmo279169 = new VF.Stave(1089, 962, 311);
stavesmo279169.setAttribute('id', 'stavesmo279169');
stavesmo279169.setBegBarType(VF.Barline.type.NONE);
stavesmo279169.setContext(context);
stavesmo279169.draw();
smo279169v0.draw(context, stavesmo279169);
smo403605.setContext(context);
smo403605.draw();
smo403606.setContext(context);
smo403606.draw();
const stavesmo282255 = new VF.Stave(1089, 1071, 311);
stavesmo282255.setAttribute('id', 'stavesmo282255');
stavesmo282255.setBegBarType(VF.Barline.type.NONE);
stavesmo282255.setContext(context);
stavesmo282255.draw();
smo282255v0.draw(context, stavesmo282255);
smo403608.setContext(context);
smo403608.draw();
smo403609.setContext(context);
smo403609.draw();
// create beam groups and tuplets for format grp smo312129 before formatting
const dirsmo403611 = smo285318.getStemDirection();
smo285318.setStemDirection(dirsmo403611);
smo285320.setStemDirection(dirsmo403611);
const smo403611 = new VF.Beam([smo285318,smo285320]);
const dirsmo403612 = smo285322.getStemDirection();
smo285322.setStemDirection(dirsmo403612);
smo285324.setStemDirection(dirsmo403612);
smo285326.setStemDirection(dirsmo403612);
smo285327.setStemDirection(dirsmo403612);
const smo403612 = new VF.Beam([smo285322,smo285324,smo285326,smo285327]);
const dirsmo403614 = smo288358.getStemDirection();
smo288358.setStemDirection(dirsmo403614);
smo288360.setStemDirection(dirsmo403614);
const smo403614 = new VF.Beam([smo288358,smo288360]);
const dirsmo403615 = smo288362.getStemDirection();
smo288362.setStemDirection(dirsmo403615);
smo288364.setStemDirection(dirsmo403615);
smo288366.setStemDirection(dirsmo403615);
smo288367.setStemDirection(dirsmo403615);
const smo403615 = new VF.Beam([smo288362,smo288364,smo288366,smo288367]);
const dirsmo403617 = smo291412.getStemDirection();
smo291412.setStemDirection(dirsmo403617);
smo291414.setStemDirection(dirsmo403617);
const smo403617 = new VF.Beam([smo291412,smo291414]);
const dirsmo403618 = smo291416.getStemDirection();
smo291416.setStemDirection(dirsmo403618);
smo291418.setStemDirection(dirsmo403618);
smo291420.setStemDirection(dirsmo403618);
smo291421.setStemDirection(dirsmo403618);
const smo403618 = new VF.Beam([smo291416,smo291418,smo291420,smo291421]);
const dirsmo403620 = smo294455.getStemDirection();
smo294455.setStemDirection(dirsmo403620);
smo294457.setStemDirection(dirsmo403620);
const smo403620 = new VF.Beam([smo294455,smo294457]);
const dirsmo403621 = smo294459.getStemDirection();
smo294459.setStemDirection(dirsmo403621);
smo294461.setStemDirection(dirsmo403621);
smo294463.setStemDirection(dirsmo403621);
smo294464.setStemDirection(dirsmo403621);
const smo403621 = new VF.Beam([smo294459,smo294461,smo294463,smo294464]);
 
// formatting measures in staff group smo312129
fmtsmo28534466.format([smo285344v0,smo288384v0,smo291438v0,smo294481v0], 297);
const stavesmo285344 = new VF.Stave(1089, 1200, 311);
stavesmo285344.setAttribute('id', 'stavesmo285344');
stavesmo285344.setBegBarType(VF.Barline.type.NONE);
stavesmo285344.setContext(context);
stavesmo285344.draw();
smo285344v0.draw(context, stavesmo285344);
smo403611.setContext(context);
smo403611.draw();
smo403612.setContext(context);
smo403612.draw();
const stavesmo288384 = new VF.Stave(1089, 1329, 311);
stavesmo288384.setAttribute('id', 'stavesmo288384');
stavesmo288384.setBegBarType(VF.Barline.type.NONE);
stavesmo288384.setContext(context);
stavesmo288384.draw();
smo288384v0.draw(context, stavesmo288384);
smo403614.setContext(context);
smo403614.draw();
smo403615.setContext(context);
smo403615.draw();
const stavesmo291438 = new VF.Stave(1089, 1458, 311);
stavesmo291438.setAttribute('id', 'stavesmo291438');
stavesmo291438.setBegBarType(VF.Barline.type.NONE);
stavesmo291438.setContext(context);
stavesmo291438.draw();
smo291438v0.draw(context, stavesmo291438);
smo403617.setContext(context);
smo403617.draw();
smo403618.setContext(context);
smo403618.draw();
const stavesmo294481 = new VF.Stave(1089, 1587, 311);
stavesmo294481.setAttribute('id', 'stavesmo294481');
stavesmo294481.setBegBarType(VF.Barline.type.NONE);
stavesmo294481.setContext(context);
stavesmo294481.draw();
smo294481v0.draw(context, stavesmo294481);
smo403620.setContext(context);
smo403620.draw();
smo403621.setContext(context);
smo403621.draw();
// create beam groups and tuplets for format grp smo299448 before formatting
const dirsmo403623 = smo297660.getStemDirection();
smo297660.setStemDirection(dirsmo403623);
smo297661.setStemDirection(dirsmo403623);
smo297662.setStemDirection(dirsmo403623);
smo297663.setStemDirection(dirsmo403623);
const smo403623 = new VF.Beam([smo297660,smo297661,smo297662,smo297663]);
 
// formatting measures in staff group smo299448
fmtsmo29768066.format([smo297680v0], 297);
const stavesmo297680 = new VF.Stave(1089, 1726, 311);
stavesmo297680.setAttribute('id', 'stavesmo297680');
stavesmo297680.setBegBarType(VF.Barline.type.NONE);
stavesmo297680.setContext(context);
stavesmo297680.draw();
smo297680v0.draw(context, stavesmo297680);
smo403623.setContext(context);
smo403623.draw();
// create beam groups and tuplets for format grp smo312123 before formatting
const dirsmo403625 = smo300873.getStemDirection();
smo300873.setStemDirection(dirsmo403625);
smo300874.setStemDirection(dirsmo403625);
smo300875.setStemDirection(dirsmo403625);
smo300876.setStemDirection(dirsmo403625);
const smo403625 = new VF.Beam([smo300873,smo300874,smo300875,smo300876]);
const dirsmo403627 = smo304068.getStemDirection();
smo304068.setStemDirection(dirsmo403627);
smo304069.setStemDirection(dirsmo403627);
smo304070.setStemDirection(dirsmo403627);
smo304071.setStemDirection(dirsmo403627);
const smo403627 = new VF.Beam([smo304068,smo304069,smo304070,smo304071]);
 
// formatting measures in staff group smo312123
fmtsmo30089366.format([smo300893v0,smo304088v0], 297);
const stavesmo300893 = new VF.Stave(1089, 1831, 311);
stavesmo300893.setAttribute('id', 'stavesmo300893');
stavesmo300893.setBegBarType(VF.Barline.type.NONE);
stavesmo300893.setContext(context);
stavesmo300893.draw();
smo300893v0.draw(context, stavesmo300893);
smo403625.setContext(context);
smo403625.draw();
const stavesmo304088 = new VF.Stave(1089, 1917, 311);
stavesmo304088.setAttribute('id', 'stavesmo304088');
stavesmo304088.setBegBarType(VF.Barline.type.NONE);
stavesmo304088.setContext(context);
stavesmo304088.draw();
smo304088v0.draw(context, stavesmo304088);
smo403627.setContext(context);
smo403627.draw();
// create beam groups and tuplets for format grp smo308961 before formatting
 
// formatting measures in staff group smo308961
fmtsmo30720366.format([smo307203v0], 297);
const stavesmo307203 = new VF.Stave(1089, 1988, 311);
stavesmo307203.setAttribute('id', 'stavesmo307203');
stavesmo307203.setBegBarType(VF.Barline.type.NONE);
stavesmo307203.setContext(context);
stavesmo307203.draw();
smo307203v0.draw(context, stavesmo307203);
// create beam groups and tuplets for format grp smo312117 before formatting
const dirsmo403630 = smo310375.getStemDirection();
smo310375.setStemDirection(dirsmo403630);
smo310377.setStemDirection(dirsmo403630);
const smo403630 = new VF.Beam([smo310375,smo310377]);
const dirsmo403631 = smo310379.getStemDirection();
smo310379.setStemDirection(dirsmo403631);
smo310381.setStemDirection(dirsmo403631);
smo310383.setStemDirection(dirsmo403631);
smo310384.setStemDirection(dirsmo403631);
const smo403631 = new VF.Beam([smo310379,smo310381,smo310383,smo310384]);
 
// formatting measures in staff group smo312117
fmtsmo31040266.format([smo310402v0,smo310402v1], 297);
const stavesmo310402 = new VF.Stave(1089, 2059, 311);
stavesmo310402.setAttribute('id', 'stavesmo310402');
stavesmo310402.setBegBarType(VF.Barline.type.NONE);
stavesmo310402.setContext(context);
stavesmo310402.draw();
smo310402v0.draw(context, stavesmo310402);
smo310402v1.draw(context, stavesmo310402);
smo403630.setContext(context);
smo403630.draw();
smo403631.setContext(context);
smo403631.draw();
const fmtsmo25759167 = new VF.Formatter();
//
// voices and notes for stave 0 67
const smo257591v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo257591v0ar = [];
const smo257570 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo257570.setAttribute('id', 'smo257570');
smo257591v0ar.push(smo257570);
const smo257571 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo257571.setAttribute('id', 'smo257571');
const smo257572 = new VF.Annotation('a');
smo257572.setAttribute('id', 'smo257572');
smo257572.setFont('times', 12, 'normal');
smo257572.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257571.addModifier(smo257572);
smo257572.addClass('lyric lyric-0');
smo257591v0ar.push(smo257571);
const smo257573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo257573.setAttribute('id', 'smo257573');
smo257591v0ar.push(smo257573);
const smo257574 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo257574.setAttribute('id', 'smo257574');
smo257591v0ar.push(smo257574);
const smo257575 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo257575.setAttribute('id', 'smo257575');
smo257591v0ar.push(smo257575);
smo257591v0.addTickables(smo257591v0ar)
fmtsmo25759167.joinVoices([smo257591v0]);
const fmtsmo26058467 = new VF.Formatter();
//
// voices and notes for stave 1 67
const smo260584v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo260584v0ar = [];
const smo260564 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo260564.setAttribute('id', 'smo260564');
smo260584v0ar.push(smo260564);
const smo260565 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo260565.setAttribute('id', 'smo260565');
const smo260566 = new VF.Annotation('a');
smo260566.setAttribute('id', 'smo260566');
smo260566.setFont('times', 12, 'normal');
smo260566.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260565.addModifier(smo260566);
smo260566.addClass('lyric lyric-0');
smo260584v0ar.push(smo260565);
const smo260567 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo260567.setAttribute('id', 'smo260567');
smo260584v0ar.push(smo260567);
const smo260568 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo260568.setAttribute('id', 'smo260568');
smo260584v0ar.push(smo260568);
smo260584v0.addTickables(smo260584v0ar)
fmtsmo26058467.joinVoices([smo260584v0]);
const fmtsmo26372867 = new VF.Formatter();
//
// voices and notes for stave 2 67
const smo263728v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo263728v0ar = [];
const smo263707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo263707.setAttribute('id', 'smo263707');
smo263728v0ar.push(smo263707);
const smo263708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo263708.setAttribute('id', 'smo263708');
const smo263709 = new VF.Annotation('a');
smo263709.setAttribute('id', 'smo263709');
smo263709.setFont('times', 12, 'normal');
smo263709.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263708.addModifier(smo263709);
smo263709.addClass('lyric lyric-0');
smo263728v0ar.push(smo263708);
const smo263710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo263710.setAttribute('id', 'smo263710');
smo263728v0ar.push(smo263710);
const smo263711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo263711.setAttribute('id', 'smo263711');
smo263728v0ar.push(smo263711);
const smo263712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo263712.setAttribute('id', 'smo263712');
smo263728v0ar.push(smo263712);
smo263728v0.addTickables(smo263728v0ar)
fmtsmo26372867.joinVoices([smo263728v0]);
const fmtsmo26684467 = new VF.Formatter();
//
// voices and notes for stave 3 67
const smo266844v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266844v0ar = [];
const smo266823 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo266823.setAttribute('id', 'smo266823');
smo266844v0ar.push(smo266823);
const smo266824 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo266824.setAttribute('id', 'smo266824');
const smo266825 = new VF.Annotation('a');
smo266825.setAttribute('id', 'smo266825');
smo266825.setFont('times', 12, 'normal');
smo266825.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266824.addModifier(smo266825);
smo266825.addClass('lyric lyric-0');
smo266844v0ar.push(smo266824);
const smo266826 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo266826.setAttribute('id', 'smo266826');
smo266844v0ar.push(smo266826);
const smo266827 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo266827.setAttribute('id', 'smo266827');
smo266844v0ar.push(smo266827);
const smo266828 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo266828.setAttribute('id', 'smo266828');
smo266844v0ar.push(smo266828);
smo266844v0.addTickables(smo266844v0ar)
fmtsmo26684467.joinVoices([smo266844v0]);
const fmtsmo26986367 = new VF.Formatter();
//
// voices and notes for stave 4 67
const smo269863v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269863v0ar = [];
const smo269842 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo269842.setAttribute('id', 'smo269842');
smo269863v0ar.push(smo269842);
const smo269843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo269843.setAttribute('id', 'smo269843');
const smo269844 = new VF.Annotation('a');
smo269844.setAttribute('id', 'smo269844');
smo269844.setFont('times', 12, 'normal');
smo269844.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269843.addModifier(smo269844);
smo269844.addClass('lyric lyric-0');
smo269863v0ar.push(smo269843);
const smo269845 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo269845.setAttribute('id', 'smo269845');
smo269863v0ar.push(smo269845);
const smo269846 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo269846.setAttribute('id', 'smo269846');
smo269863v0ar.push(smo269846);
const smo269847 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo269847.setAttribute('id', 'smo269847');
smo269863v0ar.push(smo269847);
smo269863v0.addTickables(smo269863v0ar)
fmtsmo26986367.joinVoices([smo269863v0]);
const fmtsmo27297067 = new VF.Formatter();
//
// voices and notes for stave 5 67
const smo272970v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272970v0ar = [];
const smo272949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo272949.setAttribute('id', 'smo272949');
smo272970v0ar.push(smo272949);
const smo272950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo272950.setAttribute('id', 'smo272950');
const smo272951 = new VF.Annotation('a');
smo272951.setAttribute('id', 'smo272951');
smo272951.setFont('times', 12, 'normal');
smo272951.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo272950.addModifier(smo272951);
smo272951.addClass('lyric lyric-0');
smo272970v0ar.push(smo272950);
const smo272952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo272952.setAttribute('id', 'smo272952');
smo272970v0ar.push(smo272952);
const smo272953 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo272953.setAttribute('id', 'smo272953');
smo272970v0ar.push(smo272953);
const smo272954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo272954.setAttribute('id', 'smo272954');
smo272970v0ar.push(smo272954);
smo272970v0.addTickables(smo272970v0ar)
fmtsmo27297067.joinVoices([smo272970v0]);
const fmtsmo27608267 = new VF.Formatter();
//
// voices and notes for stave 6 67
const smo276082v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo276082v0ar = [];
const smo276061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo276061.setAttribute('id', 'smo276061');
smo276082v0ar.push(smo276061);
const smo276062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo276062.setAttribute('id', 'smo276062');
const smo276063 = new VF.Annotation('a');
smo276063.setAttribute('id', 'smo276063');
smo276063.setFont('times', 12, 'normal');
smo276063.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo276062.addModifier(smo276063);
smo276063.addClass('lyric lyric-0');
smo276082v0ar.push(smo276062);
const smo276064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo276064.setAttribute('id', 'smo276064');
smo276082v0ar.push(smo276064);
const smo276065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo276065.setAttribute('id', 'smo276065');
smo276082v0ar.push(smo276065);
const smo276066 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo276066.setAttribute('id', 'smo276066');
smo276082v0ar.push(smo276066);
smo276082v0.addTickables(smo276082v0ar)
fmtsmo27608267.joinVoices([smo276082v0]);
const fmtsmo27919167 = new VF.Formatter();
//
// voices and notes for stave 7 67
const smo279191v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo279191v0ar = [];
const smo279170 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo279170.setAttribute('id', 'smo279170');
smo279191v0ar.push(smo279170);
const smo279171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo279171.setAttribute('id', 'smo279171');
const smo279172 = new VF.Annotation('a');
smo279172.setAttribute('id', 'smo279172');
smo279172.setFont('times', 12, 'normal');
smo279172.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo279171.addModifier(smo279172);
smo279172.addClass('lyric lyric-0');
smo279191v0ar.push(smo279171);
const smo279173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo279173.setAttribute('id', 'smo279173');
smo279191v0ar.push(smo279173);
const smo279174 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo279174.setAttribute('id', 'smo279174');
smo279191v0ar.push(smo279174);
const smo279175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo279175.setAttribute('id', 'smo279175');
smo279191v0ar.push(smo279175);
smo279191v0.addTickables(smo279191v0ar)
fmtsmo27919167.joinVoices([smo279191v0]);
const fmtsmo28227767 = new VF.Formatter();
//
// voices and notes for stave 8 67
const smo282277v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo282277v0ar = [];
const smo282256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo282256.setAttribute('id', 'smo282256');
smo282277v0ar.push(smo282256);
const smo282257 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo282257.setAttribute('id', 'smo282257');
const smo282258 = new VF.Annotation('a');
smo282258.setAttribute('id', 'smo282258');
smo282258.setFont('times', 12, 'normal');
smo282258.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282257.addModifier(smo282258);
smo282258.addClass('lyric lyric-0');
smo282277v0ar.push(smo282257);
const smo282259 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo282259.setAttribute('id', 'smo282259');
smo282277v0ar.push(smo282259);
const smo282260 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo282260.setAttribute('id', 'smo282260');
smo282277v0ar.push(smo282260);
const smo282261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo282261.setAttribute('id', 'smo282261');
smo282277v0ar.push(smo282261);
smo282277v0.addTickables(smo282277v0ar)
fmtsmo28227767.joinVoices([smo282277v0]);
const fmtsmo28536667 = new VF.Formatter();
//
// voices and notes for stave 9 67
const smo285366v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo285366v0ar = [];
const smo285345 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo285345.setAttribute('id', 'smo285345');
smo285366v0ar.push(smo285345);
const smo285346 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo285346.setAttribute('id', 'smo285346');
const smo285347 = new VF.Annotation('a');
smo285347.setAttribute('id', 'smo285347');
smo285347.setFont('times', 12, 'normal');
smo285347.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285346.addModifier(smo285347);
smo285347.addClass('lyric lyric-0');
smo285366v0ar.push(smo285346);
const smo285348 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo285348.setAttribute('id', 'smo285348');
smo285366v0ar.push(smo285348);
const smo285349 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo285349.setAttribute('id', 'smo285349');
smo285366v0ar.push(smo285349);
const smo285350 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo285350.setAttribute('id', 'smo285350');
smo285366v0ar.push(smo285350);
smo285366v0.addTickables(smo285366v0ar)
fmtsmo28536667.joinVoices([smo285366v0]);
const fmtsmo28840667 = new VF.Formatter();
//
// voices and notes for stave 10 67
const smo288406v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo288406v0ar = [];
const smo288385 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo288385.setAttribute('id', 'smo288385');
smo288406v0ar.push(smo288385);
const smo288386 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo288386.setAttribute('id', 'smo288386');
const smo288387 = new VF.Annotation('a');
smo288387.setAttribute('id', 'smo288387');
smo288387.setFont('times', 12, 'normal');
smo288387.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288386.addModifier(smo288387);
smo288387.addClass('lyric lyric-0');
smo288406v0ar.push(smo288386);
const smo288388 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo288388.setAttribute('id', 'smo288388');
smo288406v0ar.push(smo288388);
const smo288389 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo288389.setAttribute('id', 'smo288389');
smo288406v0ar.push(smo288389);
const smo288390 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo288390.setAttribute('id', 'smo288390');
smo288406v0ar.push(smo288390);
smo288406v0.addTickables(smo288406v0ar)
fmtsmo28840667.joinVoices([smo288406v0]);
const fmtsmo29146067 = new VF.Formatter();
//
// voices and notes for stave 11 67
const smo291460v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo291460v0ar = [];
const smo291439 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo291439.setAttribute('id', 'smo291439');
smo291460v0ar.push(smo291439);
const smo291440 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo291440.setAttribute('id', 'smo291440');
const smo291441 = new VF.Annotation('a');
smo291441.setAttribute('id', 'smo291441');
smo291441.setFont('times', 12, 'normal');
smo291441.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291440.addModifier(smo291441);
smo291441.addClass('lyric lyric-0');
smo291460v0ar.push(smo291440);
const smo291442 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo291442.setAttribute('id', 'smo291442');
smo291460v0ar.push(smo291442);
const smo291443 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo291443.setAttribute('id', 'smo291443');
smo291460v0ar.push(smo291443);
const smo291444 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo291444.setAttribute('id', 'smo291444');
smo291460v0ar.push(smo291444);
smo291460v0.addTickables(smo291460v0ar)
fmtsmo29146067.joinVoices([smo291460v0]);
const fmtsmo29450367 = new VF.Formatter();
//
// voices and notes for stave 12 67
const smo294503v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo294503v0ar = [];
const smo294482 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo294482.setAttribute('id', 'smo294482');
smo294503v0ar.push(smo294482);
const smo294483 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo294483.setAttribute('id', 'smo294483');
const smo294484 = new VF.Annotation('a');
smo294484.setAttribute('id', 'smo294484');
smo294484.setFont('times', 12, 'normal');
smo294484.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo294483.addModifier(smo294484);
smo294484.addClass('lyric lyric-0');
smo294503v0ar.push(smo294483);
const smo294485 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo294485.setAttribute('id', 'smo294485');
smo294503v0ar.push(smo294485);
const smo294486 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo294486.setAttribute('id', 'smo294486');
smo294503v0ar.push(smo294486);
const smo294487 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo294487.setAttribute('id', 'smo294487');
smo294503v0ar.push(smo294487);
smo294503v0.addTickables(smo294503v0ar)
fmtsmo29450367.joinVoices([smo294503v0]);
const fmtsmo29770267 = new VF.Formatter();
//
// voices and notes for stave 13 67
const smo297702v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo297702v0ar = [];
const smo297681 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
smo297681.setAttribute('id', 'smo297681');
smo297681.addModifier(new VF.Dot(), 0);
smo297681.addModifier(new VF.Dot(), 1);
smo297681.addModifier(new VF.Dot(), 2);
smo297702v0ar.push(smo297681);
const smo297682 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n","dn/5/n"]}'))
smo297682.setAttribute('id', 'smo297682');
smo297702v0ar.push(smo297682);
const smo297683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n","dn/5/n"]}'))
smo297683.setAttribute('id', 'smo297683');
smo297702v0ar.push(smo297683);
const smo297684 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo297684.setAttribute('id', 'smo297684');
smo297702v0ar.push(smo297684);
const smo297685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo297685.setAttribute('id', 'smo297685');
smo297702v0ar.push(smo297685);
const smo297686 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo297686.setAttribute('id', 'smo297686');
smo297702v0ar.push(smo297686);
smo297702v0.addTickables(smo297702v0ar)
fmtsmo29770267.joinVoices([smo297702v0]);
const fmtsmo30091567 = new VF.Formatter();
//
// voices and notes for stave 14 67
const smo300915v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300915v0ar = [];
const smo300894 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
smo300894.setAttribute('id', 'smo300894');
smo300894.addModifier(new VF.Dot(), 0);
smo300894.addModifier(new VF.Dot(), 1);
smo300894.addModifier(new VF.Dot(), 2);
smo300915v0ar.push(smo300894);
const smo300895 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n","dn/5/n"]}'))
smo300895.setAttribute('id', 'smo300895');
smo300915v0ar.push(smo300895);
const smo300896 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n","dn/5/n"]}'))
smo300896.setAttribute('id', 'smo300896');
smo300915v0ar.push(smo300896);
const smo300897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo300897.setAttribute('id', 'smo300897');
smo300915v0ar.push(smo300897);
const smo300898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo300898.setAttribute('id', 'smo300898');
smo300915v0ar.push(smo300898);
const smo300899 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo300899.setAttribute('id', 'smo300899');
smo300915v0ar.push(smo300899);
smo300915v0.addTickables(smo300915v0ar)
fmtsmo30091567.joinVoices([smo300915v0]);
const fmtsmo30411067 = new VF.Formatter();
//
// voices and notes for stave 15 67
const smo304110v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo304110v0ar = [];
const smo304089 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo304089.setAttribute('id', 'smo304089');
smo304089.addModifier(new VF.Dot(), 0);
smo304110v0ar.push(smo304089);
const smo304090 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo304090.setAttribute('id', 'smo304090');
smo304110v0ar.push(smo304090);
const smo304091 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo304091.setAttribute('id', 'smo304091');
smo304110v0ar.push(smo304091);
const smo304092 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo304092.setAttribute('id', 'smo304092');
smo304110v0ar.push(smo304092);
const smo304093 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo304093.setAttribute('id', 'smo304093');
smo304110v0ar.push(smo304093);
const smo304094 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo304094.setAttribute('id', 'smo304094');
smo304110v0ar.push(smo304094);
smo304110v0.addTickables(smo304110v0ar)
fmtsmo30411067.joinVoices([smo304110v0]);
const fmtsmo30722367 = new VF.Formatter();
//
// voices and notes for stave 16 67
const smo307223v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo307223v0ar = [];
const smo307204 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo307204.setAttribute('id', 'smo307204');
smo307223v0ar.push(smo307204);
const smo307205 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo307205.setAttribute('id', 'smo307205');
smo307223v0ar.push(smo307205);
const smo307206 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo307206.setAttribute('id', 'smo307206');
smo307223v0ar.push(smo307206);
const smo307207 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo307207.setAttribute('id', 'smo307207');
smo307223v0ar.push(smo307207);
smo307223v0.addTickables(smo307223v0ar)
fmtsmo30722367.joinVoices([smo307223v0]);
const fmtsmo31042267 = new VF.Formatter();
//
// voices and notes for stave 17 67
const smo310422v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo310422v0ar = [];
const smo310403 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo310403.setAttribute('id', 'smo310403');
smo310422v0ar.push(smo310403);
const smo310404 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo310404.setAttribute('id', 'smo310404');
smo310404.setStyle({ fillStyle: "#ffffff00" });
smo310422v0ar.push(smo310404);
smo310422v0.addTickables(smo310422v0ar)
fmtsmo31042267.joinVoices([smo310422v0]);
const smo310422v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo310422v1ar = [];
const smo310405 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo310405.setAttribute('id', 'smo310405');
smo310405.setStyle({ fillStyle: '#aaaaaa7f' });
smo310422v1ar.push(smo310405);
const smo310406 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo310406.setAttribute('id', 'smo310406');
smo310406.setStyle({ fillStyle: "#115511" });
smo310422v1ar.push(smo310406);
smo310422v1.addTickables(smo310422v1ar)
fmtsmo31042267.joinVoices([smo310422v1]);
// create beam groups and tuplets for format grp smo312125 before formatting
const dirsmo403651 = smo257570.getStemDirection();
smo257570.setStemDirection(dirsmo403651);
smo257571.setStemDirection(dirsmo403651);
const smo403651 = new VF.Beam([smo257570,smo257571]);
const dirsmo403653 = smo260564.getStemDirection();
smo260564.setStemDirection(dirsmo403653);
smo260565.setStemDirection(dirsmo403653);
const smo403653 = new VF.Beam([smo260564,smo260565]);
const dirsmo403655 = smo263707.getStemDirection();
smo263707.setStemDirection(dirsmo403655);
smo263708.setStemDirection(dirsmo403655);
const smo403655 = new VF.Beam([smo263707,smo263708]);
const dirsmo403657 = smo266823.getStemDirection();
smo266823.setStemDirection(dirsmo403657);
smo266824.setStemDirection(dirsmo403657);
const smo403657 = new VF.Beam([smo266823,smo266824]);
const dirsmo403659 = smo269842.getStemDirection();
smo269842.setStemDirection(dirsmo403659);
smo269843.setStemDirection(dirsmo403659);
const smo403659 = new VF.Beam([smo269842,smo269843]);
 
// formatting measures in staff group smo312125
fmtsmo25759167.format([smo257591v0,smo260584v0,smo263728v0,smo266844v0,smo269863v0], 296);
const stavesmo257591 = new VF.Stave(1400, 210, 310);
stavesmo257591.setAttribute('id', 'stavesmo257591');
stavesmo257591.setBegBarType(VF.Barline.type.NONE);
stavesmo257591.setContext(context);
stavesmo257591.draw();
smo257591v0.draw(context, stavesmo257591);
smo403651.setContext(context);
smo403651.draw();
const stavesmo260584 = new VF.Stave(1400, 309, 310);
stavesmo260584.setAttribute('id', 'stavesmo260584');
stavesmo260584.setBegBarType(VF.Barline.type.NONE);
stavesmo260584.setContext(context);
stavesmo260584.draw();
smo260584v0.draw(context, stavesmo260584);
smo403653.setContext(context);
smo403653.draw();
const stavesmo263728 = new VF.Stave(1400, 423, 310);
stavesmo263728.setAttribute('id', 'stavesmo263728');
stavesmo263728.setBegBarType(VF.Barline.type.NONE);
stavesmo263728.setContext(context);
stavesmo263728.draw();
smo263728v0.draw(context, stavesmo263728);
smo403655.setContext(context);
smo403655.draw();
const stavesmo266844 = new VF.Stave(1400, 532, 310);
stavesmo266844.setAttribute('id', 'stavesmo266844');
stavesmo266844.setBegBarType(VF.Barline.type.NONE);
stavesmo266844.setContext(context);
stavesmo266844.draw();
smo266844v0.draw(context, stavesmo266844);
smo403657.setContext(context);
smo403657.draw();
const stavesmo269863 = new VF.Stave(1400, 631, 310);
stavesmo269863.setAttribute('id', 'stavesmo269863');
stavesmo269863.setBegBarType(VF.Barline.type.NONE);
stavesmo269863.setContext(context);
stavesmo269863.draw();
smo269863v0.draw(context, stavesmo269863);
smo403659.setContext(context);
smo403659.draw();
// create beam groups and tuplets for format grp smo312127 before formatting
const dirsmo403661 = smo272949.getStemDirection();
smo272949.setStemDirection(dirsmo403661);
smo272950.setStemDirection(dirsmo403661);
const smo403661 = new VF.Beam([smo272949,smo272950]);
const dirsmo403663 = smo276061.getStemDirection();
smo276061.setStemDirection(dirsmo403663);
smo276062.setStemDirection(dirsmo403663);
const smo403663 = new VF.Beam([smo276061,smo276062]);
const dirsmo403665 = smo279170.getStemDirection();
smo279170.setStemDirection(dirsmo403665);
smo279171.setStemDirection(dirsmo403665);
const smo403665 = new VF.Beam([smo279170,smo279171]);
const dirsmo403667 = smo282256.getStemDirection();
smo282256.setStemDirection(dirsmo403667);
smo282257.setStemDirection(dirsmo403667);
const smo403667 = new VF.Beam([smo282256,smo282257]);
 
// formatting measures in staff group smo312127
fmtsmo27297067.format([smo272970v0,smo276082v0,smo279191v0,smo282277v0], 296);
const stavesmo272970 = new VF.Stave(1400, 745, 310);
stavesmo272970.setAttribute('id', 'stavesmo272970');
stavesmo272970.setBegBarType(VF.Barline.type.NONE);
stavesmo272970.setContext(context);
stavesmo272970.draw();
smo272970v0.draw(context, stavesmo272970);
smo403661.setContext(context);
smo403661.draw();
const stavesmo276082 = new VF.Stave(1400, 853, 310);
stavesmo276082.setAttribute('id', 'stavesmo276082');
stavesmo276082.setBegBarType(VF.Barline.type.NONE);
stavesmo276082.setContext(context);
stavesmo276082.draw();
smo276082v0.draw(context, stavesmo276082);
smo403663.setContext(context);
smo403663.draw();
const stavesmo279191 = new VF.Stave(1400, 962, 310);
stavesmo279191.setAttribute('id', 'stavesmo279191');
stavesmo279191.setBegBarType(VF.Barline.type.NONE);
stavesmo279191.setContext(context);
stavesmo279191.draw();
smo279191v0.draw(context, stavesmo279191);
smo403665.setContext(context);
smo403665.draw();
const stavesmo282277 = new VF.Stave(1400, 1071, 310);
stavesmo282277.setAttribute('id', 'stavesmo282277');
stavesmo282277.setBegBarType(VF.Barline.type.NONE);
stavesmo282277.setContext(context);
stavesmo282277.draw();
smo282277v0.draw(context, stavesmo282277);
smo403667.setContext(context);
smo403667.draw();
// create beam groups and tuplets for format grp smo312129 before formatting
const dirsmo403669 = smo285345.getStemDirection();
smo285345.setStemDirection(dirsmo403669);
smo285346.setStemDirection(dirsmo403669);
const smo403669 = new VF.Beam([smo285345,smo285346]);
const dirsmo403671 = smo288385.getStemDirection();
smo288385.setStemDirection(dirsmo403671);
smo288386.setStemDirection(dirsmo403671);
const smo403671 = new VF.Beam([smo288385,smo288386]);
const dirsmo403673 = smo291439.getStemDirection();
smo291439.setStemDirection(dirsmo403673);
smo291440.setStemDirection(dirsmo403673);
const smo403673 = new VF.Beam([smo291439,smo291440]);
const dirsmo403675 = smo294482.getStemDirection();
smo294482.setStemDirection(dirsmo403675);
smo294483.setStemDirection(dirsmo403675);
const smo403675 = new VF.Beam([smo294482,smo294483]);
 
// formatting measures in staff group smo312129
fmtsmo28536667.format([smo285366v0,smo288406v0,smo291460v0,smo294503v0], 296);
const stavesmo285366 = new VF.Stave(1400, 1200, 310);
stavesmo285366.setAttribute('id', 'stavesmo285366');
stavesmo285366.setBegBarType(VF.Barline.type.NONE);
stavesmo285366.setContext(context);
stavesmo285366.draw();
smo285366v0.draw(context, stavesmo285366);
smo403669.setContext(context);
smo403669.draw();
const stavesmo288406 = new VF.Stave(1400, 1329, 310);
stavesmo288406.setAttribute('id', 'stavesmo288406');
stavesmo288406.setBegBarType(VF.Barline.type.NONE);
stavesmo288406.setContext(context);
stavesmo288406.draw();
smo288406v0.draw(context, stavesmo288406);
smo403671.setContext(context);
smo403671.draw();
const stavesmo291460 = new VF.Stave(1400, 1458, 310);
stavesmo291460.setAttribute('id', 'stavesmo291460');
stavesmo291460.setBegBarType(VF.Barline.type.NONE);
stavesmo291460.setContext(context);
stavesmo291460.draw();
smo291460v0.draw(context, stavesmo291460);
smo403673.setContext(context);
smo403673.draw();
const stavesmo294503 = new VF.Stave(1400, 1587, 310);
stavesmo294503.setAttribute('id', 'stavesmo294503');
stavesmo294503.setBegBarType(VF.Barline.type.NONE);
stavesmo294503.setContext(context);
stavesmo294503.draw();
smo294503v0.draw(context, stavesmo294503);
smo403675.setContext(context);
smo403675.draw();
// create beam groups and tuplets for format grp smo299448 before formatting
const dirsmo403677 = smo297682.getStemDirection();
smo297682.setStemDirection(dirsmo403677);
smo297683.setStemDirection(dirsmo403677);
smo297684.setStemDirection(dirsmo403677);
smo297685.setStemDirection(dirsmo403677);
const smo403677 = new VF.Beam([smo297682,smo297683,smo297684,smo297685]);
 
// formatting measures in staff group smo299448
fmtsmo29770267.format([smo297702v0], 296);
const stavesmo297702 = new VF.Stave(1400, 1726, 310);
stavesmo297702.setAttribute('id', 'stavesmo297702');
stavesmo297702.setBegBarType(VF.Barline.type.NONE);
stavesmo297702.setContext(context);
stavesmo297702.draw();
smo297702v0.draw(context, stavesmo297702);
smo403677.setContext(context);
smo403677.draw();
// create beam groups and tuplets for format grp smo312123 before formatting
const dirsmo403679 = smo300895.getStemDirection();
smo300895.setStemDirection(dirsmo403679);
smo300896.setStemDirection(dirsmo403679);
smo300897.setStemDirection(dirsmo403679);
smo300898.setStemDirection(dirsmo403679);
const smo403679 = new VF.Beam([smo300895,smo300896,smo300897,smo300898]);
const dirsmo403681 = smo304090.getStemDirection();
smo304090.setStemDirection(dirsmo403681);
smo304091.setStemDirection(dirsmo403681);
smo304092.setStemDirection(dirsmo403681);
smo304093.setStemDirection(dirsmo403681);
const smo403681 = new VF.Beam([smo304090,smo304091,smo304092,smo304093]);
 
// formatting measures in staff group smo312123
fmtsmo30091567.format([smo300915v0,smo304110v0], 296);
const stavesmo300915 = new VF.Stave(1400, 1831, 310);
stavesmo300915.setAttribute('id', 'stavesmo300915');
stavesmo300915.setBegBarType(VF.Barline.type.NONE);
stavesmo300915.setContext(context);
stavesmo300915.draw();
smo300915v0.draw(context, stavesmo300915);
smo403679.setContext(context);
smo403679.draw();
const stavesmo304110 = new VF.Stave(1400, 1917, 310);
stavesmo304110.setAttribute('id', 'stavesmo304110');
stavesmo304110.setBegBarType(VF.Barline.type.NONE);
stavesmo304110.setContext(context);
stavesmo304110.draw();
smo304110v0.draw(context, stavesmo304110);
smo403681.setContext(context);
smo403681.draw();
// create beam groups and tuplets for format grp smo308961 before formatting
 
// formatting measures in staff group smo308961
fmtsmo30722367.format([smo307223v0], 296);
const stavesmo307223 = new VF.Stave(1400, 1988, 310);
stavesmo307223.setAttribute('id', 'stavesmo307223');
stavesmo307223.setBegBarType(VF.Barline.type.NONE);
stavesmo307223.setContext(context);
stavesmo307223.draw();
smo307223v0.draw(context, stavesmo307223);
// create beam groups and tuplets for format grp smo312117 before formatting
 
// formatting measures in staff group smo312117
fmtsmo31042267.format([smo310422v0,smo310422v1], 296);
const stavesmo310422 = new VF.Stave(1400, 2059, 310);
stavesmo310422.setAttribute('id', 'stavesmo310422');
stavesmo310422.setBegBarType(VF.Barline.type.NONE);
stavesmo310422.setContext(context);
stavesmo310422.draw();
smo310422v0.draw(context, stavesmo310422);
smo310422v1.draw(context, stavesmo310422);
const fmtsmo25760868 = new VF.Formatter();
//
// voices and notes for stave 0 68
const smo257608v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo257608v0ar = [];
const smo257592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo257592.setAttribute('id', 'smo257592');
smo257608v0ar.push(smo257592);
smo257608v0.addTickables(smo257608v0ar)
fmtsmo25760868.joinVoices([smo257608v0]);
const fmtsmo26060168 = new VF.Formatter();
//
// voices and notes for stave 1 68
const smo260601v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo260601v0ar = [];
const smo260585 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo260585.setAttribute('id', 'smo260585');
smo260601v0ar.push(smo260585);
smo260601v0.addTickables(smo260601v0ar)
fmtsmo26060168.joinVoices([smo260601v0]);
const fmtsmo26374568 = new VF.Formatter();
//
// voices and notes for stave 2 68
const smo263745v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo263745v0ar = [];
const smo263729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo263729.setAttribute('id', 'smo263729');
smo263745v0ar.push(smo263729);
smo263745v0.addTickables(smo263745v0ar)
fmtsmo26374568.joinVoices([smo263745v0]);
const fmtsmo26686168 = new VF.Formatter();
//
// voices and notes for stave 3 68
const smo266861v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266861v0ar = [];
const smo266845 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo266845.setAttribute('id', 'smo266845');
smo266861v0ar.push(smo266845);
smo266861v0.addTickables(smo266861v0ar)
fmtsmo26686168.joinVoices([smo266861v0]);
const fmtsmo26988068 = new VF.Formatter();
//
// voices and notes for stave 4 68
const smo269880v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269880v0ar = [];
const smo269864 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo269864.setAttribute('id', 'smo269864');
smo269880v0ar.push(smo269864);
smo269880v0.addTickables(smo269880v0ar)
fmtsmo26988068.joinVoices([smo269880v0]);
const fmtsmo27299068 = new VF.Formatter();
//
// voices and notes for stave 5 68
const smo272990v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo272990v0ar = [];
const smo272971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo272971.setAttribute('id', 'smo272971');
smo272990v0ar.push(smo272971);
const smo272972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo272972.setAttribute('id', 'smo272972');
smo272990v0ar.push(smo272972);
const smo272973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo272973.setAttribute('id', 'smo272973');
smo272990v0ar.push(smo272973);
const smo272974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo272974.setAttribute('id', 'smo272974');
smo272990v0ar.push(smo272974);
smo272990v0.addTickables(smo272990v0ar)
fmtsmo27299068.joinVoices([smo272990v0]);
const fmtsmo27609968 = new VF.Formatter();
//
// voices and notes for stave 6 68
const smo276099v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo276099v0ar = [];
const smo276083 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo276083.setAttribute('id', 'smo276083');
smo276099v0ar.push(smo276083);
smo276099v0.addTickables(smo276099v0ar)
fmtsmo27609968.joinVoices([smo276099v0]);
const fmtsmo27920868 = new VF.Formatter();
//
// voices and notes for stave 7 68
const smo279208v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo279208v0ar = [];
const smo279192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo279192.setAttribute('id', 'smo279192');
smo279208v0ar.push(smo279192);
smo279208v0.addTickables(smo279208v0ar)
fmtsmo27920868.joinVoices([smo279208v0]);
const fmtsmo28229468 = new VF.Formatter();
//
// voices and notes for stave 8 68
const smo282294v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo282294v0ar = [];
const smo282278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo282278.setAttribute('id', 'smo282278');
smo282294v0ar.push(smo282278);
smo282294v0.addTickables(smo282294v0ar)
fmtsmo28229468.joinVoices([smo282294v0]);
const fmtsmo28538368 = new VF.Formatter();
//
// voices and notes for stave 9 68
const smo285383v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo285383v0ar = [];
const smo285367 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo285367.setAttribute('id', 'smo285367');
smo285383v0ar.push(smo285367);
smo285383v0.addTickables(smo285383v0ar)
fmtsmo28538368.joinVoices([smo285383v0]);
const fmtsmo28842368 = new VF.Formatter();
//
// voices and notes for stave 10 68
const smo288423v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo288423v0ar = [];
const smo288407 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo288407.setAttribute('id', 'smo288407');
smo288423v0ar.push(smo288407);
smo288423v0.addTickables(smo288423v0ar)
fmtsmo28842368.joinVoices([smo288423v0]);
const fmtsmo29147768 = new VF.Formatter();
//
// voices and notes for stave 11 68
const smo291477v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo291477v0ar = [];
const smo291461 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo291461.setAttribute('id', 'smo291461');
smo291477v0ar.push(smo291461);
smo291477v0.addTickables(smo291477v0ar)
fmtsmo29147768.joinVoices([smo291477v0]);
const fmtsmo29452068 = new VF.Formatter();
//
// voices and notes for stave 12 68
const smo294520v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo294520v0ar = [];
const smo294504 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo294504.setAttribute('id', 'smo294504');
smo294520v0ar.push(smo294504);
smo294520v0.addTickables(smo294520v0ar)
fmtsmo29452068.joinVoices([smo294520v0]);
const fmtsmo29771968 = new VF.Formatter();
//
// voices and notes for stave 13 68
const smo297719v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo297719v0ar = [];
const smo297703 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo297703.setAttribute('id', 'smo297703');
smo297719v0ar.push(smo297703);
smo297719v0.addTickables(smo297719v0ar)
fmtsmo29771968.joinVoices([smo297719v0]);
const fmtsmo30093268 = new VF.Formatter();
//
// voices and notes for stave 14 68
const smo300932v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300932v0ar = [];
const smo300916 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo300916.setAttribute('id', 'smo300916');
smo300932v0ar.push(smo300916);
smo300932v0.addTickables(smo300932v0ar)
fmtsmo30093268.joinVoices([smo300932v0]);
const fmtsmo30412768 = new VF.Formatter();
//
// voices and notes for stave 15 68
const smo304127v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo304127v0ar = [];
const smo304111 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo304111.setAttribute('id', 'smo304111');
smo304127v0ar.push(smo304111);
smo304127v0.addTickables(smo304127v0ar)
fmtsmo30412768.joinVoices([smo304127v0]);
const fmtsmo30724368 = new VF.Formatter();
//
// voices and notes for stave 16 68
const smo307243v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo307243v0ar = [];
const smo307224 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo307224.setAttribute('id', 'smo307224');
smo307224.addModifier(new VF.Dot(), 0);
smo307243v0ar.push(smo307224);
const smo307225 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo307225.setAttribute('id', 'smo307225');
smo307243v0ar.push(smo307225);
const smo307226 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo307226.setAttribute('id', 'smo307226');
smo307243v0ar.push(smo307226);
const smo307227 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo307227.setAttribute('id', 'smo307227');
smo307243v0ar.push(smo307227);
smo307243v0.addTickables(smo307243v0ar)
fmtsmo30724368.joinVoices([smo307243v0]);
const fmtsmo31044268 = new VF.Formatter();
//
// voices and notes for stave 17 68
const smo310442v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo310442v0ar = [];
const smo310423 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo310423.setAttribute('id', 'smo310423');
smo310442v0ar.push(smo310423);
const smo310424 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo310424.setAttribute('id', 'smo310424');
smo310424.setStyle({ fillStyle: "#ffffff00" });
smo310442v0ar.push(smo310424);
smo310442v0.addTickables(smo310442v0ar)
fmtsmo31044268.joinVoices([smo310442v0]);
const smo310442v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo310442v1ar = [];
const smo310425 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo310425.setAttribute('id', 'smo310425');
smo310425.setStyle({ fillStyle: '#aaaaaa7f' });
smo310442v1ar.push(smo310425);
const smo310426 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo310426.setAttribute('id', 'smo310426');
smo310426.setStyle({ fillStyle: "#115511" });
smo310442v1ar.push(smo310426);
smo310442v1.addTickables(smo310442v1ar)
fmtsmo31044268.joinVoices([smo310442v1]);
// create beam groups and tuplets for format grp smo312125 before formatting
 
// formatting measures in staff group smo312125
fmtsmo25760868.format([smo257608v0,smo260601v0,smo263745v0,smo266861v0,smo269880v0], 296);
const stavesmo257608 = new VF.Stave(1710, 210, 310);
stavesmo257608.setAttribute('id', 'stavesmo257608');
stavesmo257608.setBegBarType(VF.Barline.type.NONE);
stavesmo257608.setContext(context);
stavesmo257608.draw();
smo257608v0.draw(context, stavesmo257608);
const stavesmo260601 = new VF.Stave(1710, 309, 310);
stavesmo260601.setAttribute('id', 'stavesmo260601');
stavesmo260601.setBegBarType(VF.Barline.type.NONE);
stavesmo260601.setContext(context);
stavesmo260601.draw();
smo260601v0.draw(context, stavesmo260601);
const stavesmo263745 = new VF.Stave(1710, 423, 310);
stavesmo263745.setAttribute('id', 'stavesmo263745');
stavesmo263745.setBegBarType(VF.Barline.type.NONE);
stavesmo263745.setContext(context);
stavesmo263745.draw();
smo263745v0.draw(context, stavesmo263745);
const stavesmo266861 = new VF.Stave(1710, 532, 310);
stavesmo266861.setAttribute('id', 'stavesmo266861');
stavesmo266861.setBegBarType(VF.Barline.type.NONE);
stavesmo266861.setContext(context);
stavesmo266861.draw();
smo266861v0.draw(context, stavesmo266861);
const stavesmo269880 = new VF.Stave(1710, 631, 310);
stavesmo269880.setAttribute('id', 'stavesmo269880');
stavesmo269880.setBegBarType(VF.Barline.type.NONE);
stavesmo269880.setContext(context);
stavesmo269880.draw();
smo269880v0.draw(context, stavesmo269880);
// create beam groups and tuplets for format grp smo312127 before formatting
 
// formatting measures in staff group smo312127
fmtsmo27299068.format([smo272990v0,smo276099v0,smo279208v0,smo282294v0], 296);
const stavesmo272990 = new VF.Stave(1710, 745, 310);
stavesmo272990.setAttribute('id', 'stavesmo272990');
stavesmo272990.setBegBarType(VF.Barline.type.NONE);
stavesmo272990.setContext(context);
stavesmo272990.draw();
smo272990v0.draw(context, stavesmo272990);
const stavesmo276099 = new VF.Stave(1710, 853, 310);
stavesmo276099.setAttribute('id', 'stavesmo276099');
stavesmo276099.setBegBarType(VF.Barline.type.NONE);
stavesmo276099.setContext(context);
stavesmo276099.draw();
smo276099v0.draw(context, stavesmo276099);
const stavesmo279208 = new VF.Stave(1710, 962, 310);
stavesmo279208.setAttribute('id', 'stavesmo279208');
stavesmo279208.setBegBarType(VF.Barline.type.NONE);
stavesmo279208.setContext(context);
stavesmo279208.draw();
smo279208v0.draw(context, stavesmo279208);
const stavesmo282294 = new VF.Stave(1710, 1071, 310);
stavesmo282294.setAttribute('id', 'stavesmo282294');
stavesmo282294.setBegBarType(VF.Barline.type.NONE);
stavesmo282294.setContext(context);
stavesmo282294.draw();
smo282294v0.draw(context, stavesmo282294);
// create beam groups and tuplets for format grp smo312129 before formatting
 
// formatting measures in staff group smo312129
fmtsmo28538368.format([smo285383v0,smo288423v0,smo291477v0,smo294520v0], 296);
const stavesmo285383 = new VF.Stave(1710, 1200, 310);
stavesmo285383.setAttribute('id', 'stavesmo285383');
stavesmo285383.setBegBarType(VF.Barline.type.NONE);
stavesmo285383.setContext(context);
stavesmo285383.draw();
smo285383v0.draw(context, stavesmo285383);
const stavesmo288423 = new VF.Stave(1710, 1329, 310);
stavesmo288423.setAttribute('id', 'stavesmo288423');
stavesmo288423.setBegBarType(VF.Barline.type.NONE);
stavesmo288423.setContext(context);
stavesmo288423.draw();
smo288423v0.draw(context, stavesmo288423);
const stavesmo291477 = new VF.Stave(1710, 1458, 310);
stavesmo291477.setAttribute('id', 'stavesmo291477');
stavesmo291477.setBegBarType(VF.Barline.type.NONE);
stavesmo291477.setContext(context);
stavesmo291477.draw();
smo291477v0.draw(context, stavesmo291477);
const stavesmo294520 = new VF.Stave(1710, 1587, 310);
stavesmo294520.setAttribute('id', 'stavesmo294520');
stavesmo294520.setBegBarType(VF.Barline.type.NONE);
stavesmo294520.setContext(context);
stavesmo294520.draw();
smo294520v0.draw(context, stavesmo294520);
// create beam groups and tuplets for format grp smo299448 before formatting
 
// formatting measures in staff group smo299448
fmtsmo29771968.format([smo297719v0], 296);
const stavesmo297719 = new VF.Stave(1710, 1726, 310);
stavesmo297719.setAttribute('id', 'stavesmo297719');
stavesmo297719.setBegBarType(VF.Barline.type.NONE);
stavesmo297719.setContext(context);
stavesmo297719.draw();
smo297719v0.draw(context, stavesmo297719);
// create beam groups and tuplets for format grp smo312123 before formatting
 
// formatting measures in staff group smo312123
fmtsmo30093268.format([smo300932v0,smo304127v0], 296);
const stavesmo300932 = new VF.Stave(1710, 1831, 310);
stavesmo300932.setAttribute('id', 'stavesmo300932');
stavesmo300932.setBegBarType(VF.Barline.type.NONE);
stavesmo300932.setContext(context);
stavesmo300932.draw();
smo300932v0.draw(context, stavesmo300932);
const stavesmo304127 = new VF.Stave(1710, 1917, 310);
stavesmo304127.setAttribute('id', 'stavesmo304127');
stavesmo304127.setBegBarType(VF.Barline.type.NONE);
stavesmo304127.setContext(context);
stavesmo304127.draw();
smo304127v0.draw(context, stavesmo304127);
// create beam groups and tuplets for format grp smo308961 before formatting
 
// formatting measures in staff group smo308961
fmtsmo30724368.format([smo307243v0], 296);
const stavesmo307243 = new VF.Stave(1710, 1988, 310);
stavesmo307243.setAttribute('id', 'stavesmo307243');
stavesmo307243.setBegBarType(VF.Barline.type.NONE);
stavesmo307243.setContext(context);
stavesmo307243.draw();
smo307243v0.draw(context, stavesmo307243);
// create beam groups and tuplets for format grp smo312117 before formatting
 
// formatting measures in staff group smo312117
fmtsmo31044268.format([smo310442v0,smo310442v1], 296);
const stavesmo310442 = new VF.Stave(1710, 2059, 310);
stavesmo310442.setAttribute('id', 'stavesmo310442');
stavesmo310442.setBegBarType(VF.Barline.type.NONE);
stavesmo310442.setContext(context);
stavesmo310442.draw();
smo310442v0.draw(context, stavesmo310442);
smo310442v1.draw(context, stavesmo310442);
const fmtsmo25762569 = new VF.Formatter();
//
// voices and notes for stave 0 69
const smo257625v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo257625v0ar = [];
const smo257609 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo257609.setAttribute('id', 'smo257609');
smo257625v0ar.push(smo257609);
smo257625v0.addTickables(smo257625v0ar)
fmtsmo25762569.joinVoices([smo257625v0]);
const fmtsmo26061869 = new VF.Formatter();
//
// voices and notes for stave 1 69
const smo260618v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo260618v0ar = [];
const smo260602 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo260602.setAttribute('id', 'smo260602');
smo260618v0ar.push(smo260602);
smo260618v0.addTickables(smo260618v0ar)
fmtsmo26061869.joinVoices([smo260618v0]);
const fmtsmo26376269 = new VF.Formatter();
//
// voices and notes for stave 2 69
const smo263762v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo263762v0ar = [];
const smo263746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo263746.setAttribute('id', 'smo263746');
smo263762v0ar.push(smo263746);
smo263762v0.addTickables(smo263762v0ar)
fmtsmo26376269.joinVoices([smo263762v0]);
const fmtsmo26687869 = new VF.Formatter();
//
// voices and notes for stave 3 69
const smo266878v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266878v0ar = [];
const smo266862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo266862.setAttribute('id', 'smo266862');
smo266878v0ar.push(smo266862);
smo266878v0.addTickables(smo266878v0ar)
fmtsmo26687869.joinVoices([smo266878v0]);
const fmtsmo26989769 = new VF.Formatter();
//
// voices and notes for stave 4 69
const smo269897v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269897v0ar = [];
const smo269881 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo269881.setAttribute('id', 'smo269881');
smo269897v0ar.push(smo269881);
smo269897v0.addTickables(smo269897v0ar)
fmtsmo26989769.joinVoices([smo269897v0]);
const fmtsmo27301069 = new VF.Formatter();
//
// voices and notes for stave 5 69
const smo273010v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo273010v0ar = [];
const smo272991 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo272991.setAttribute('id', 'smo272991');
smo273010v0ar.push(smo272991);
const smo272992 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo272992.setAttribute('id', 'smo272992');
smo273010v0ar.push(smo272992);
const smo272993 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo272993.setAttribute('id', 'smo272993');
smo273010v0ar.push(smo272993);
const smo272994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo272994.setAttribute('id', 'smo272994');
smo273010v0ar.push(smo272994);
smo273010v0.addTickables(smo273010v0ar)
fmtsmo27301069.joinVoices([smo273010v0]);
const fmtsmo27611669 = new VF.Formatter();
//
// voices and notes for stave 6 69
const smo276116v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo276116v0ar = [];
const smo276100 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo276100.setAttribute('id', 'smo276100');
smo276116v0ar.push(smo276100);
smo276116v0.addTickables(smo276116v0ar)
fmtsmo27611669.joinVoices([smo276116v0]);
const fmtsmo27922569 = new VF.Formatter();
//
// voices and notes for stave 7 69
const smo279225v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo279225v0ar = [];
const smo279209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo279209.setAttribute('id', 'smo279209');
smo279225v0ar.push(smo279209);
smo279225v0.addTickables(smo279225v0ar)
fmtsmo27922569.joinVoices([smo279225v0]);
const fmtsmo28231169 = new VF.Formatter();
//
// voices and notes for stave 8 69
const smo282311v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo282311v0ar = [];
const smo282295 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo282295.setAttribute('id', 'smo282295');
smo282311v0ar.push(smo282295);
smo282311v0.addTickables(smo282311v0ar)
fmtsmo28231169.joinVoices([smo282311v0]);
const fmtsmo28540069 = new VF.Formatter();
//
// voices and notes for stave 9 69
const smo285400v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo285400v0ar = [];
const smo285384 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo285384.setAttribute('id', 'smo285384');
smo285400v0ar.push(smo285384);
smo285400v0.addTickables(smo285400v0ar)
fmtsmo28540069.joinVoices([smo285400v0]);
const fmtsmo28844069 = new VF.Formatter();
//
// voices and notes for stave 10 69
const smo288440v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo288440v0ar = [];
const smo288424 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo288424.setAttribute('id', 'smo288424');
smo288440v0ar.push(smo288424);
smo288440v0.addTickables(smo288440v0ar)
fmtsmo28844069.joinVoices([smo288440v0]);
const fmtsmo29149469 = new VF.Formatter();
//
// voices and notes for stave 11 69
const smo291494v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo291494v0ar = [];
const smo291478 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo291478.setAttribute('id', 'smo291478');
smo291494v0ar.push(smo291478);
smo291494v0.addTickables(smo291494v0ar)
fmtsmo29149469.joinVoices([smo291494v0]);
const fmtsmo29453769 = new VF.Formatter();
//
// voices and notes for stave 12 69
const smo294537v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo294537v0ar = [];
const smo294521 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo294521.setAttribute('id', 'smo294521');
smo294537v0ar.push(smo294521);
smo294537v0.addTickables(smo294537v0ar)
fmtsmo29453769.joinVoices([smo294537v0]);
const fmtsmo29773669 = new VF.Formatter();
//
// voices and notes for stave 13 69
const smo297736v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo297736v0ar = [];
const smo297720 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo297720.setAttribute('id', 'smo297720');
smo297736v0ar.push(smo297720);
smo297736v0.addTickables(smo297736v0ar)
fmtsmo29773669.joinVoices([smo297736v0]);
const fmtsmo30094969 = new VF.Formatter();
//
// voices and notes for stave 14 69
const smo300949v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300949v0ar = [];
const smo300933 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo300933.setAttribute('id', 'smo300933');
smo300949v0ar.push(smo300933);
smo300949v0.addTickables(smo300949v0ar)
fmtsmo30094969.joinVoices([smo300949v0]);
const fmtsmo30414469 = new VF.Formatter();
//
// voices and notes for stave 15 69
const smo304144v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo304144v0ar = [];
const smo304128 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo304128.setAttribute('id', 'smo304128');
smo304144v0ar.push(smo304128);
smo304144v0.addTickables(smo304144v0ar)
fmtsmo30414469.joinVoices([smo304144v0]);
const fmtsmo30726369 = new VF.Formatter();
//
// voices and notes for stave 16 69
const smo307263v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo307263v0ar = [];
const smo307244 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo307244.setAttribute('id', 'smo307244');
smo307244.addModifier(new VF.Dot(), 0);
smo307263v0ar.push(smo307244);
const smo307245 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo307245.setAttribute('id', 'smo307245');
smo307263v0ar.push(smo307245);
const smo307246 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo307246.setAttribute('id', 'smo307246');
smo307263v0ar.push(smo307246);
const smo307247 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo307247.setAttribute('id', 'smo307247');
smo307263v0ar.push(smo307247);
smo307263v0.addTickables(smo307263v0ar)
fmtsmo30726369.joinVoices([smo307263v0]);
const fmtsmo31046269 = new VF.Formatter();
//
// voices and notes for stave 17 69
const smo310462v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo310462v0ar = [];
const smo310443 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo310443.setAttribute('id', 'smo310443');
smo310462v0ar.push(smo310443);
const smo310444 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo310444.setAttribute('id', 'smo310444');
smo310444.setStyle({ fillStyle: "#ffffff00" });
smo310462v0ar.push(smo310444);
smo310462v0.addTickables(smo310462v0ar)
fmtsmo31046269.joinVoices([smo310462v0]);
const smo310462v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo310462v1ar = [];
const smo310445 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo310445.setAttribute('id', 'smo310445');
smo310445.setStyle({ fillStyle: '#aaaaaa7f' });
smo310462v1ar.push(smo310445);
const smo310446 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo310446.setAttribute('id', 'smo310446');
smo310446.setStyle({ fillStyle: "#115511" });
smo310462v1ar.push(smo310446);
smo310462v1.addTickables(smo310462v1ar)
fmtsmo31046269.joinVoices([smo310462v1]);
// create beam groups and tuplets for format grp smo312125 before formatting
 
// formatting measures in staff group smo312125
fmtsmo25762569.format([smo257625v0,smo260618v0,smo263762v0,smo266878v0,smo269897v0], 296);
const stavesmo257625 = new VF.Stave(2020, 210, 310);
stavesmo257625.setAttribute('id', 'stavesmo257625');
stavesmo257625.setBegBarType(VF.Barline.type.NONE);
stavesmo257625.setContext(context);
stavesmo257625.draw();
smo257625v0.draw(context, stavesmo257625);
const stavesmo260618 = new VF.Stave(2020, 309, 310);
stavesmo260618.setAttribute('id', 'stavesmo260618');
stavesmo260618.setBegBarType(VF.Barline.type.NONE);
stavesmo260618.setContext(context);
stavesmo260618.draw();
smo260618v0.draw(context, stavesmo260618);
const stavesmo263762 = new VF.Stave(2020, 423, 310);
stavesmo263762.setAttribute('id', 'stavesmo263762');
stavesmo263762.setBegBarType(VF.Barline.type.NONE);
stavesmo263762.setContext(context);
stavesmo263762.draw();
smo263762v0.draw(context, stavesmo263762);
const stavesmo266878 = new VF.Stave(2020, 532, 310);
stavesmo266878.setAttribute('id', 'stavesmo266878');
stavesmo266878.setBegBarType(VF.Barline.type.NONE);
stavesmo266878.setContext(context);
stavesmo266878.draw();
smo266878v0.draw(context, stavesmo266878);
const stavesmo269897 = new VF.Stave(2020, 631, 310);
stavesmo269897.setAttribute('id', 'stavesmo269897');
stavesmo269897.setBegBarType(VF.Barline.type.NONE);
stavesmo269897.setContext(context);
stavesmo269897.draw();
smo269897v0.draw(context, stavesmo269897);
// create beam groups and tuplets for format grp smo312127 before formatting
 
// formatting measures in staff group smo312127
fmtsmo27301069.format([smo273010v0,smo276116v0,smo279225v0,smo282311v0], 296);
const stavesmo273010 = new VF.Stave(2020, 745, 310);
stavesmo273010.setAttribute('id', 'stavesmo273010');
stavesmo273010.setBegBarType(VF.Barline.type.NONE);
stavesmo273010.setContext(context);
stavesmo273010.draw();
smo273010v0.draw(context, stavesmo273010);
const stavesmo276116 = new VF.Stave(2020, 853, 310);
stavesmo276116.setAttribute('id', 'stavesmo276116');
stavesmo276116.setBegBarType(VF.Barline.type.NONE);
stavesmo276116.setContext(context);
stavesmo276116.draw();
smo276116v0.draw(context, stavesmo276116);
const stavesmo279225 = new VF.Stave(2020, 962, 310);
stavesmo279225.setAttribute('id', 'stavesmo279225');
stavesmo279225.setBegBarType(VF.Barline.type.NONE);
stavesmo279225.setContext(context);
stavesmo279225.draw();
smo279225v0.draw(context, stavesmo279225);
const stavesmo282311 = new VF.Stave(2020, 1071, 310);
stavesmo282311.setAttribute('id', 'stavesmo282311');
stavesmo282311.setBegBarType(VF.Barline.type.NONE);
stavesmo282311.setContext(context);
stavesmo282311.draw();
smo282311v0.draw(context, stavesmo282311);
// create beam groups and tuplets for format grp smo312129 before formatting
 
// formatting measures in staff group smo312129
fmtsmo28540069.format([smo285400v0,smo288440v0,smo291494v0,smo294537v0], 296);
const stavesmo285400 = new VF.Stave(2020, 1200, 310);
stavesmo285400.setAttribute('id', 'stavesmo285400');
stavesmo285400.setBegBarType(VF.Barline.type.NONE);
stavesmo285400.setContext(context);
stavesmo285400.draw();
smo285400v0.draw(context, stavesmo285400);
const stavesmo288440 = new VF.Stave(2020, 1329, 310);
stavesmo288440.setAttribute('id', 'stavesmo288440');
stavesmo288440.setBegBarType(VF.Barline.type.NONE);
stavesmo288440.setContext(context);
stavesmo288440.draw();
smo288440v0.draw(context, stavesmo288440);
const stavesmo291494 = new VF.Stave(2020, 1458, 310);
stavesmo291494.setAttribute('id', 'stavesmo291494');
stavesmo291494.setBegBarType(VF.Barline.type.NONE);
stavesmo291494.setContext(context);
stavesmo291494.draw();
smo291494v0.draw(context, stavesmo291494);
const stavesmo294537 = new VF.Stave(2020, 1587, 310);
stavesmo294537.setAttribute('id', 'stavesmo294537');
stavesmo294537.setBegBarType(VF.Barline.type.NONE);
stavesmo294537.setContext(context);
stavesmo294537.draw();
smo294537v0.draw(context, stavesmo294537);
// create beam groups and tuplets for format grp smo299448 before formatting
 
// formatting measures in staff group smo299448
fmtsmo29773669.format([smo297736v0], 296);
const stavesmo297736 = new VF.Stave(2020, 1726, 310);
stavesmo297736.setAttribute('id', 'stavesmo297736');
stavesmo297736.setBegBarType(VF.Barline.type.NONE);
stavesmo297736.setContext(context);
stavesmo297736.draw();
smo297736v0.draw(context, stavesmo297736);
// create beam groups and tuplets for format grp smo312123 before formatting
 
// formatting measures in staff group smo312123
fmtsmo30094969.format([smo300949v0,smo304144v0], 296);
const stavesmo300949 = new VF.Stave(2020, 1831, 310);
stavesmo300949.setAttribute('id', 'stavesmo300949');
stavesmo300949.setBegBarType(VF.Barline.type.NONE);
stavesmo300949.setContext(context);
stavesmo300949.draw();
smo300949v0.draw(context, stavesmo300949);
const stavesmo304144 = new VF.Stave(2020, 1917, 310);
stavesmo304144.setAttribute('id', 'stavesmo304144');
stavesmo304144.setBegBarType(VF.Barline.type.NONE);
stavesmo304144.setContext(context);
stavesmo304144.draw();
smo304144v0.draw(context, stavesmo304144);
// create beam groups and tuplets for format grp smo308961 before formatting
 
// formatting measures in staff group smo308961
fmtsmo30726369.format([smo307263v0], 296);
const stavesmo307263 = new VF.Stave(2020, 1988, 310);
stavesmo307263.setAttribute('id', 'stavesmo307263');
stavesmo307263.setBegBarType(VF.Barline.type.NONE);
stavesmo307263.setContext(context);
stavesmo307263.draw();
smo307263v0.draw(context, stavesmo307263);
// create beam groups and tuplets for format grp smo312117 before formatting
 
// formatting measures in staff group smo312117
fmtsmo31046269.format([smo310462v0,smo310462v1], 296);
const stavesmo310462 = new VF.Stave(2020, 2059, 310);
stavesmo310462.setAttribute('id', 'stavesmo310462');
stavesmo310462.setBegBarType(VF.Barline.type.NONE);
stavesmo310462.setContext(context);
stavesmo310462.draw();
smo310462v0.draw(context, stavesmo310462);
smo310462v1.draw(context, stavesmo310462);
const fmtsmo25764270 = new VF.Formatter();
//
// voices and notes for stave 0 70
const smo257642v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo257642v0ar = [];
const smo257626 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo257626.setAttribute('id', 'smo257626');
smo257642v0ar.push(smo257626);
smo257642v0.addTickables(smo257642v0ar)
fmtsmo25764270.joinVoices([smo257642v0]);
const fmtsmo26063570 = new VF.Formatter();
//
// voices and notes for stave 1 70
const smo260635v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo260635v0ar = [];
const smo260619 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo260619.setAttribute('id', 'smo260619');
smo260635v0ar.push(smo260619);
smo260635v0.addTickables(smo260635v0ar)
fmtsmo26063570.joinVoices([smo260635v0]);
const fmtsmo26377970 = new VF.Formatter();
//
// voices and notes for stave 2 70
const smo263779v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo263779v0ar = [];
const smo263763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo263763.setAttribute('id', 'smo263763');
smo263779v0ar.push(smo263763);
smo263779v0.addTickables(smo263779v0ar)
fmtsmo26377970.joinVoices([smo263779v0]);
const fmtsmo26689570 = new VF.Formatter();
//
// voices and notes for stave 3 70
const smo266895v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266895v0ar = [];
const smo266879 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo266879.setAttribute('id', 'smo266879');
smo266895v0ar.push(smo266879);
smo266895v0.addTickables(smo266895v0ar)
fmtsmo26689570.joinVoices([smo266895v0]);
const fmtsmo26991470 = new VF.Formatter();
//
// voices and notes for stave 4 70
const smo269914v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269914v0ar = [];
const smo269898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo269898.setAttribute('id', 'smo269898');
smo269914v0ar.push(smo269898);
smo269914v0.addTickables(smo269914v0ar)
fmtsmo26991470.joinVoices([smo269914v0]);
const fmtsmo27303070 = new VF.Formatter();
//
// voices and notes for stave 5 70
const smo273030v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo273030v0ar = [];
const smo273011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo273011.setAttribute('id', 'smo273011');
smo273030v0ar.push(smo273011);
const smo273012 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo273012.setAttribute('id', 'smo273012');
smo273030v0ar.push(smo273012);
const smo273013 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo273013.setAttribute('id', 'smo273013');
smo273030v0ar.push(smo273013);
const smo273014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo273014.setAttribute('id', 'smo273014');
smo273030v0ar.push(smo273014);
smo273030v0.addTickables(smo273030v0ar)
fmtsmo27303070.joinVoices([smo273030v0]);
const fmtsmo27613370 = new VF.Formatter();
//
// voices and notes for stave 6 70
const smo276133v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo276133v0ar = [];
const smo276117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo276117.setAttribute('id', 'smo276117');
smo276133v0ar.push(smo276117);
smo276133v0.addTickables(smo276133v0ar)
fmtsmo27613370.joinVoices([smo276133v0]);
const fmtsmo27924270 = new VF.Formatter();
//
// voices and notes for stave 7 70
const smo279242v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo279242v0ar = [];
const smo279226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo279226.setAttribute('id', 'smo279226');
smo279242v0ar.push(smo279226);
smo279242v0.addTickables(smo279242v0ar)
fmtsmo27924270.joinVoices([smo279242v0]);
const fmtsmo28232870 = new VF.Formatter();
//
// voices and notes for stave 8 70
const smo282328v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo282328v0ar = [];
const smo282312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo282312.setAttribute('id', 'smo282312');
smo282328v0ar.push(smo282312);
smo282328v0.addTickables(smo282328v0ar)
fmtsmo28232870.joinVoices([smo282328v0]);
const fmtsmo28541770 = new VF.Formatter();
//
// voices and notes for stave 9 70
const smo285417v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo285417v0ar = [];
const smo285401 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo285401.setAttribute('id', 'smo285401');
smo285417v0ar.push(smo285401);
smo285417v0.addTickables(smo285417v0ar)
fmtsmo28541770.joinVoices([smo285417v0]);
const fmtsmo28845770 = new VF.Formatter();
//
// voices and notes for stave 10 70
const smo288457v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo288457v0ar = [];
const smo288441 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo288441.setAttribute('id', 'smo288441');
smo288457v0ar.push(smo288441);
smo288457v0.addTickables(smo288457v0ar)
fmtsmo28845770.joinVoices([smo288457v0]);
const fmtsmo29151170 = new VF.Formatter();
//
// voices and notes for stave 11 70
const smo291511v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo291511v0ar = [];
const smo291495 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo291495.setAttribute('id', 'smo291495');
smo291511v0ar.push(smo291495);
smo291511v0.addTickables(smo291511v0ar)
fmtsmo29151170.joinVoices([smo291511v0]);
const fmtsmo29455470 = new VF.Formatter();
//
// voices and notes for stave 12 70
const smo294554v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo294554v0ar = [];
const smo294538 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo294538.setAttribute('id', 'smo294538');
smo294554v0ar.push(smo294538);
smo294554v0.addTickables(smo294554v0ar)
fmtsmo29455470.joinVoices([smo294554v0]);
const fmtsmo29775370 = new VF.Formatter();
//
// voices and notes for stave 13 70
const smo297753v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo297753v0ar = [];
const smo297737 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo297737.setAttribute('id', 'smo297737');
smo297753v0ar.push(smo297737);
smo297753v0.addTickables(smo297753v0ar)
fmtsmo29775370.joinVoices([smo297753v0]);
const fmtsmo30096670 = new VF.Formatter();
//
// voices and notes for stave 14 70
const smo300966v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300966v0ar = [];
const smo300950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo300950.setAttribute('id', 'smo300950');
smo300966v0ar.push(smo300950);
smo300966v0.addTickables(smo300966v0ar)
fmtsmo30096670.joinVoices([smo300966v0]);
const fmtsmo30416170 = new VF.Formatter();
//
// voices and notes for stave 15 70
const smo304161v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo304161v0ar = [];
const smo304145 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo304145.setAttribute('id', 'smo304145');
smo304161v0ar.push(smo304145);
smo304161v0.addTickables(smo304161v0ar)
fmtsmo30416170.joinVoices([smo304161v0]);
const fmtsmo30728370 = new VF.Formatter();
//
// voices and notes for stave 16 70
const smo307283v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo307283v0ar = [];
const smo307264 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo307264.setAttribute('id', 'smo307264');
smo307264.addModifier(new VF.Dot(), 0);
smo307283v0ar.push(smo307264);
const smo307265 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/3/n"]}'))
smo307265.setAttribute('id', 'smo307265');
const smo3072650acc = new VF.Accidental('b');
smo307265.addModifier(smo3072650acc, 0);
smo307283v0ar.push(smo307265);
const smo307266 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["eb/3/n"]}'))
smo307266.setAttribute('id', 'smo307266');
smo307283v0ar.push(smo307266);
const smo307267 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo307267.setAttribute('id', 'smo307267');
smo307283v0ar.push(smo307267);
smo307283v0.addTickables(smo307283v0ar)
fmtsmo30728370.joinVoices([smo307283v0]);
const fmtsmo31048270 = new VF.Formatter();
//
// voices and notes for stave 17 70
const smo310482v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo310482v0ar = [];
const smo310463 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo310463.setAttribute('id', 'smo310463');
smo310482v0ar.push(smo310463);
const smo310464 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo310464.setAttribute('id', 'smo310464');
smo310464.setStyle({ fillStyle: "#ffffff00" });
smo310482v0ar.push(smo310464);
smo310482v0.addTickables(smo310482v0ar)
fmtsmo31048270.joinVoices([smo310482v0]);
const smo310482v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo310482v1ar = [];
const smo310465 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo310465.setAttribute('id', 'smo310465');
smo310465.setStyle({ fillStyle: '#aaaaaa7f' });
smo310482v1ar.push(smo310465);
const smo310466 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo310466.setAttribute('id', 'smo310466');
smo310466.setStyle({ fillStyle: "#115511" });
smo310482v1ar.push(smo310466);
smo310482v1.addTickables(smo310482v1ar)
fmtsmo31048270.joinVoices([smo310482v1]);
// create beam groups and tuplets for format grp smo312125 before formatting
 
// formatting measures in staff group smo312125
fmtsmo25764270.format([smo257642v0,smo260635v0,smo263779v0,smo266895v0,smo269914v0], 296);
const stavesmo257642 = new VF.Stave(2330, 210, 310);
stavesmo257642.setAttribute('id', 'stavesmo257642');
stavesmo257642.setBegBarType(VF.Barline.type.NONE);
stavesmo257642.setContext(context);
stavesmo257642.draw();
smo257642v0.draw(context, stavesmo257642);
const stavesmo260635 = new VF.Stave(2330, 309, 310);
stavesmo260635.setAttribute('id', 'stavesmo260635');
stavesmo260635.setBegBarType(VF.Barline.type.NONE);
stavesmo260635.setContext(context);
stavesmo260635.draw();
smo260635v0.draw(context, stavesmo260635);
const stavesmo263779 = new VF.Stave(2330, 423, 310);
stavesmo263779.setAttribute('id', 'stavesmo263779');
stavesmo263779.setBegBarType(VF.Barline.type.NONE);
stavesmo263779.setContext(context);
stavesmo263779.draw();
smo263779v0.draw(context, stavesmo263779);
const stavesmo266895 = new VF.Stave(2330, 532, 310);
stavesmo266895.setAttribute('id', 'stavesmo266895');
stavesmo266895.setBegBarType(VF.Barline.type.NONE);
stavesmo266895.setContext(context);
stavesmo266895.draw();
smo266895v0.draw(context, stavesmo266895);
const stavesmo269914 = new VF.Stave(2330, 631, 310);
stavesmo269914.setAttribute('id', 'stavesmo269914');
stavesmo269914.setBegBarType(VF.Barline.type.NONE);
stavesmo269914.setContext(context);
stavesmo269914.draw();
smo269914v0.draw(context, stavesmo269914);
// create beam groups and tuplets for format grp smo312127 before formatting
 
// formatting measures in staff group smo312127
fmtsmo27303070.format([smo273030v0,smo276133v0,smo279242v0,smo282328v0], 296);
const stavesmo273030 = new VF.Stave(2330, 745, 310);
stavesmo273030.setAttribute('id', 'stavesmo273030');
stavesmo273030.setBegBarType(VF.Barline.type.NONE);
stavesmo273030.setContext(context);
stavesmo273030.draw();
smo273030v0.draw(context, stavesmo273030);
const stavesmo276133 = new VF.Stave(2330, 853, 310);
stavesmo276133.setAttribute('id', 'stavesmo276133');
stavesmo276133.setBegBarType(VF.Barline.type.NONE);
stavesmo276133.setContext(context);
stavesmo276133.draw();
smo276133v0.draw(context, stavesmo276133);
const stavesmo279242 = new VF.Stave(2330, 962, 310);
stavesmo279242.setAttribute('id', 'stavesmo279242');
stavesmo279242.setBegBarType(VF.Barline.type.NONE);
stavesmo279242.setContext(context);
stavesmo279242.draw();
smo279242v0.draw(context, stavesmo279242);
const stavesmo282328 = new VF.Stave(2330, 1071, 310);
stavesmo282328.setAttribute('id', 'stavesmo282328');
stavesmo282328.setBegBarType(VF.Barline.type.NONE);
stavesmo282328.setContext(context);
stavesmo282328.draw();
smo282328v0.draw(context, stavesmo282328);
// create beam groups and tuplets for format grp smo312129 before formatting
 
// formatting measures in staff group smo312129
fmtsmo28541770.format([smo285417v0,smo288457v0,smo291511v0,smo294554v0], 296);
const stavesmo285417 = new VF.Stave(2330, 1200, 310);
stavesmo285417.setAttribute('id', 'stavesmo285417');
stavesmo285417.setBegBarType(VF.Barline.type.NONE);
stavesmo285417.setContext(context);
stavesmo285417.draw();
smo285417v0.draw(context, stavesmo285417);
const stavesmo288457 = new VF.Stave(2330, 1329, 310);
stavesmo288457.setAttribute('id', 'stavesmo288457');
stavesmo288457.setBegBarType(VF.Barline.type.NONE);
stavesmo288457.setContext(context);
stavesmo288457.draw();
smo288457v0.draw(context, stavesmo288457);
const stavesmo291511 = new VF.Stave(2330, 1458, 310);
stavesmo291511.setAttribute('id', 'stavesmo291511');
stavesmo291511.setBegBarType(VF.Barline.type.NONE);
stavesmo291511.setContext(context);
stavesmo291511.draw();
smo291511v0.draw(context, stavesmo291511);
const stavesmo294554 = new VF.Stave(2330, 1587, 310);
stavesmo294554.setAttribute('id', 'stavesmo294554');
stavesmo294554.setBegBarType(VF.Barline.type.NONE);
stavesmo294554.setContext(context);
stavesmo294554.draw();
smo294554v0.draw(context, stavesmo294554);
// create beam groups and tuplets for format grp smo299448 before formatting
 
// formatting measures in staff group smo299448
fmtsmo29775370.format([smo297753v0], 296);
const stavesmo297753 = new VF.Stave(2330, 1726, 310);
stavesmo297753.setAttribute('id', 'stavesmo297753');
stavesmo297753.setBegBarType(VF.Barline.type.NONE);
stavesmo297753.setContext(context);
stavesmo297753.draw();
smo297753v0.draw(context, stavesmo297753);
// create beam groups and tuplets for format grp smo312123 before formatting
 
// formatting measures in staff group smo312123
fmtsmo30096670.format([smo300966v0,smo304161v0], 296);
const stavesmo300966 = new VF.Stave(2330, 1831, 310);
stavesmo300966.setAttribute('id', 'stavesmo300966');
stavesmo300966.setBegBarType(VF.Barline.type.NONE);
stavesmo300966.setContext(context);
stavesmo300966.draw();
smo300966v0.draw(context, stavesmo300966);
const stavesmo304161 = new VF.Stave(2330, 1917, 310);
stavesmo304161.setAttribute('id', 'stavesmo304161');
stavesmo304161.setBegBarType(VF.Barline.type.NONE);
stavesmo304161.setContext(context);
stavesmo304161.draw();
smo304161v0.draw(context, stavesmo304161);
// create beam groups and tuplets for format grp smo308961 before formatting
 
// formatting measures in staff group smo308961
fmtsmo30728370.format([smo307283v0], 296);
const stavesmo307283 = new VF.Stave(2330, 1988, 310);
stavesmo307283.setAttribute('id', 'stavesmo307283');
stavesmo307283.setBegBarType(VF.Barline.type.NONE);
stavesmo307283.setContext(context);
stavesmo307283.draw();
smo307283v0.draw(context, stavesmo307283);
// create beam groups and tuplets for format grp smo312117 before formatting
 
// formatting measures in staff group smo312117
fmtsmo31048270.format([smo310482v0,smo310482v1], 296);
const stavesmo310482 = new VF.Stave(2330, 2059, 310);
stavesmo310482.setAttribute('id', 'stavesmo310482');
stavesmo310482.setBegBarType(VF.Barline.type.NONE);
stavesmo310482.setContext(context);
stavesmo310482.draw();
smo310482v0.draw(context, stavesmo310482);
smo310482v1.draw(context, stavesmo310482);
const fmtsmo25766771 = new VF.Formatter();
//
// voices and notes for stave 0 71
const smo257667v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo257667v0ar = [];
const smo257643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo257643.setAttribute('id', 'smo257643');
smo257667v0ar.push(smo257643);
const smo257644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo257644.setAttribute('id', 'smo257644');
smo257667v0ar.push(smo257644);
const smo257645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo257645.setAttribute('id', 'smo257645');
const smo257646 = new VF.Annotation('Ki');
smo257646.setAttribute('id', 'smo257646');
smo257646.setFont('times', 12, 'normal');
smo257646.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257645.addModifier(smo257646);
smo257646.addClass('lyric lyric-0 lyric-hyphen');
smo257667v0ar.push(smo257645);
const smo257647 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo257647.setAttribute('id', 'smo257647');
smo257667v0ar.push(smo257647);
const smo257648 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo257648.setAttribute('id', 'smo257648');
const smo257649 = new VF.Annotation('ki');
smo257649.setAttribute('id', 'smo257649');
smo257649.setFont('times', 12, 'normal');
smo257649.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257648.addModifier(smo257649);
smo257649.addClass('lyric lyric-0 lyric-hyphen');
smo257667v0ar.push(smo257648);
const smo257650 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo257650.setAttribute('id', 'smo257650');
const smo257651 = new VF.Annotation('ri');
smo257651.setAttribute('id', 'smo257651');
smo257651.setFont('times', 12, 'normal');
smo257651.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo257650.addModifier(smo257651);
smo257651.addClass('lyric lyric-0');
smo257667v0ar.push(smo257650);
smo257667v0.addTickables(smo257667v0ar)
fmtsmo25766771.joinVoices([smo257667v0]);
const fmtsmo26066071 = new VF.Formatter();
//
// voices and notes for stave 1 71
const smo260660v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo260660v0ar = [];
const smo260636 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo260636.setAttribute('id', 'smo260636');
smo260660v0ar.push(smo260636);
const smo260637 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo260637.setAttribute('id', 'smo260637');
smo260660v0ar.push(smo260637);
const smo260638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo260638.setAttribute('id', 'smo260638');
const smo260639 = new VF.Annotation('Ki');
smo260639.setAttribute('id', 'smo260639');
smo260639.setFont('times', 12, 'normal');
smo260639.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260638.addModifier(smo260639);
smo260639.addClass('lyric lyric-0 lyric-hyphen');
smo260660v0ar.push(smo260638);
const smo260640 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo260640.setAttribute('id', 'smo260640');
smo260660v0ar.push(smo260640);
const smo260641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo260641.setAttribute('id', 'smo260641');
const smo260642 = new VF.Annotation('ki');
smo260642.setAttribute('id', 'smo260642');
smo260642.setFont('times', 12, 'normal');
smo260642.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260641.addModifier(smo260642);
smo260642.addClass('lyric lyric-0 lyric-hyphen');
smo260660v0ar.push(smo260641);
const smo260643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo260643.setAttribute('id', 'smo260643');
const smo260644 = new VF.Annotation('ri');
smo260644.setAttribute('id', 'smo260644');
smo260644.setFont('times', 12, 'normal');
smo260644.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo260643.addModifier(smo260644);
smo260644.addClass('lyric lyric-0');
smo260660v0ar.push(smo260643);
smo260660v0.addTickables(smo260660v0ar)
fmtsmo26066071.joinVoices([smo260660v0]);
const fmtsmo26380471 = new VF.Formatter();
//
// voices and notes for stave 2 71
const smo263804v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo263804v0ar = [];
const smo263780 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo263780.setAttribute('id', 'smo263780');
smo263804v0ar.push(smo263780);
const smo263781 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo263781.setAttribute('id', 'smo263781');
smo263804v0ar.push(smo263781);
const smo263782 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo263782.setAttribute('id', 'smo263782');
const smo263783 = new VF.Annotation('Ki');
smo263783.setAttribute('id', 'smo263783');
smo263783.setFont('times', 12, 'normal');
smo263783.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263782.addModifier(smo263783);
smo263783.addClass('lyric lyric-0 lyric-hyphen');
smo263804v0ar.push(smo263782);
const smo263784 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo263784.setAttribute('id', 'smo263784');
smo263804v0ar.push(smo263784);
const smo263785 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo263785.setAttribute('id', 'smo263785');
const smo263786 = new VF.Annotation('ki');
smo263786.setAttribute('id', 'smo263786');
smo263786.setFont('times', 12, 'normal');
smo263786.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263785.addModifier(smo263786);
smo263786.addClass('lyric lyric-0 lyric-hyphen');
smo263804v0ar.push(smo263785);
const smo263787 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo263787.setAttribute('id', 'smo263787');
const smo263788 = new VF.Annotation('ri');
smo263788.setAttribute('id', 'smo263788');
smo263788.setFont('times', 12, 'normal');
smo263788.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo263787.addModifier(smo263788);
smo263788.addClass('lyric lyric-0');
smo263804v0ar.push(smo263787);
smo263804v0.addTickables(smo263804v0ar)
fmtsmo26380471.joinVoices([smo263804v0]);
const fmtsmo26692071 = new VF.Formatter();
//
// voices and notes for stave 3 71
const smo266920v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266920v0ar = [];
const smo266896 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo266896.setAttribute('id', 'smo266896');
smo266920v0ar.push(smo266896);
const smo266897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo266897.setAttribute('id', 'smo266897');
smo266920v0ar.push(smo266897);
const smo266898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo266898.setAttribute('id', 'smo266898');
const smo266899 = new VF.Annotation('Ki');
smo266899.setAttribute('id', 'smo266899');
smo266899.setFont('times', 12, 'normal');
smo266899.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266898.addModifier(smo266899);
smo266899.addClass('lyric lyric-0 lyric-hyphen');
smo266920v0ar.push(smo266898);
const smo266900 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo266900.setAttribute('id', 'smo266900');
smo266920v0ar.push(smo266900);
const smo266901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo266901.setAttribute('id', 'smo266901');
const smo266902 = new VF.Annotation('ki');
smo266902.setAttribute('id', 'smo266902');
smo266902.setFont('times', 12, 'normal');
smo266902.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266901.addModifier(smo266902);
smo266902.addClass('lyric lyric-0 lyric-hyphen');
smo266920v0ar.push(smo266901);
const smo266903 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo266903.setAttribute('id', 'smo266903');
const smo266904 = new VF.Annotation('ri');
smo266904.setAttribute('id', 'smo266904');
smo266904.setFont('times', 12, 'normal');
smo266904.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo266903.addModifier(smo266904);
smo266904.addClass('lyric lyric-0');
smo266920v0ar.push(smo266903);
smo266920v0.addTickables(smo266920v0ar)
fmtsmo26692071.joinVoices([smo266920v0]);
const fmtsmo26993971 = new VF.Formatter();
//
// voices and notes for stave 4 71
const smo269939v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269939v0ar = [];
const smo269915 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo269915.setAttribute('id', 'smo269915');
smo269939v0ar.push(smo269915);
const smo269916 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo269916.setAttribute('id', 'smo269916');
smo269939v0ar.push(smo269916);
const smo269917 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo269917.setAttribute('id', 'smo269917');
const smo269918 = new VF.Annotation('Ki');
smo269918.setAttribute('id', 'smo269918');
smo269918.setFont('times', 12, 'normal');
smo269918.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269917.addModifier(smo269918);
smo269918.addClass('lyric lyric-0 lyric-hyphen');
smo269939v0ar.push(smo269917);
const smo269919 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo269919.setAttribute('id', 'smo269919');
smo269939v0ar.push(smo269919);
const smo269920 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo269920.setAttribute('id', 'smo269920');
const smo269921 = new VF.Annotation('ki');
smo269921.setAttribute('id', 'smo269921');
smo269921.setFont('times', 12, 'normal');
smo269921.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269920.addModifier(smo269921);
smo269921.addClass('lyric lyric-0 lyric-hyphen');
smo269939v0ar.push(smo269920);
const smo269922 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo269922.setAttribute('id', 'smo269922');
const smo269923 = new VF.Annotation('ri');
smo269923.setAttribute('id', 'smo269923');
smo269923.setFont('times', 12, 'normal');
smo269923.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo269922.addModifier(smo269923);
smo269923.addClass('lyric lyric-0');
smo269939v0ar.push(smo269922);
smo269939v0.addTickables(smo269939v0ar)
fmtsmo26993971.joinVoices([smo269939v0]);
const fmtsmo27305571 = new VF.Formatter();
//
// voices and notes for stave 5 71
const smo273055v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo273055v0ar = [];
const smo273031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo273031.setAttribute('id', 'smo273031');
smo273055v0ar.push(smo273031);
const smo273032 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo273032.setAttribute('id', 'smo273032');
smo273055v0ar.push(smo273032);
const smo273033 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo273033.setAttribute('id', 'smo273033');
const smo273034 = new VF.Annotation('Ki');
smo273034.setAttribute('id', 'smo273034');
smo273034.setFont('times', 12, 'normal');
smo273034.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo273033.addModifier(smo273034);
smo273034.addClass('lyric lyric-0 lyric-hyphen');
smo273055v0ar.push(smo273033);
const smo273035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo273035.setAttribute('id', 'smo273035');
smo273055v0ar.push(smo273035);
const smo273036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo273036.setAttribute('id', 'smo273036');
const smo273037 = new VF.Annotation('ki');
smo273037.setAttribute('id', 'smo273037');
smo273037.setFont('times', 12, 'normal');
smo273037.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo273036.addModifier(smo273037);
smo273037.addClass('lyric lyric-0 lyric-hyphen');
smo273055v0ar.push(smo273036);
const smo273038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo273038.setAttribute('id', 'smo273038');
const smo273039 = new VF.Annotation('ri');
smo273039.setAttribute('id', 'smo273039');
smo273039.setFont('times', 12, 'normal');
smo273039.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo273038.addModifier(smo273039);
smo273039.addClass('lyric lyric-0');
smo273055v0ar.push(smo273038);
smo273055v0.addTickables(smo273055v0ar)
fmtsmo27305571.joinVoices([smo273055v0]);
const fmtsmo27615871 = new VF.Formatter();
//
// voices and notes for stave 6 71
const smo276158v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo276158v0ar = [];
const smo276134 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo276134.setAttribute('id', 'smo276134');
smo276158v0ar.push(smo276134);
const smo276135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo276135.setAttribute('id', 'smo276135');
smo276158v0ar.push(smo276135);
const smo276136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo276136.setAttribute('id', 'smo276136');
const smo276137 = new VF.Annotation('Ki');
smo276137.setAttribute('id', 'smo276137');
smo276137.setFont('times', 12, 'normal');
smo276137.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo276136.addModifier(smo276137);
smo276137.addClass('lyric lyric-0 lyric-hyphen');
smo276158v0ar.push(smo276136);
const smo276138 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo276138.setAttribute('id', 'smo276138');
smo276158v0ar.push(smo276138);
const smo276139 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo276139.setAttribute('id', 'smo276139');
const smo276140 = new VF.Annotation('ki');
smo276140.setAttribute('id', 'smo276140');
smo276140.setFont('times', 12, 'normal');
smo276140.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo276139.addModifier(smo276140);
smo276140.addClass('lyric lyric-0 lyric-hyphen');
smo276158v0ar.push(smo276139);
const smo276141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo276141.setAttribute('id', 'smo276141');
const smo276142 = new VF.Annotation('ri');
smo276142.setAttribute('id', 'smo276142');
smo276142.setFont('times', 12, 'normal');
smo276142.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo276141.addModifier(smo276142);
smo276142.addClass('lyric lyric-0');
smo276158v0ar.push(smo276141);
smo276158v0.addTickables(smo276158v0ar)
fmtsmo27615871.joinVoices([smo276158v0]);
const fmtsmo27926771 = new VF.Formatter();
//
// voices and notes for stave 7 71
const smo279267v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo279267v0ar = [];
const smo279243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo279243.setAttribute('id', 'smo279243');
smo279267v0ar.push(smo279243);
const smo279244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo279244.setAttribute('id', 'smo279244');
smo279267v0ar.push(smo279244);
const smo279245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo279245.setAttribute('id', 'smo279245');
const smo279246 = new VF.Annotation('Ki');
smo279246.setAttribute('id', 'smo279246');
smo279246.setFont('times', 12, 'normal');
smo279246.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo279245.addModifier(smo279246);
smo279246.addClass('lyric lyric-0 lyric-hyphen');
smo279267v0ar.push(smo279245);
const smo279247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo279247.setAttribute('id', 'smo279247');
smo279267v0ar.push(smo279247);
const smo279248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo279248.setAttribute('id', 'smo279248');
const smo279249 = new VF.Annotation('ki');
smo279249.setAttribute('id', 'smo279249');
smo279249.setFont('times', 12, 'normal');
smo279249.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo279248.addModifier(smo279249);
smo279249.addClass('lyric lyric-0 lyric-hyphen');
smo279267v0ar.push(smo279248);
const smo279250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo279250.setAttribute('id', 'smo279250');
const smo279251 = new VF.Annotation('ri');
smo279251.setAttribute('id', 'smo279251');
smo279251.setFont('times', 12, 'normal');
smo279251.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo279250.addModifier(smo279251);
smo279251.addClass('lyric lyric-0');
smo279267v0ar.push(smo279250);
smo279267v0.addTickables(smo279267v0ar)
fmtsmo27926771.joinVoices([smo279267v0]);
const fmtsmo28235371 = new VF.Formatter();
//
// voices and notes for stave 8 71
const smo282353v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo282353v0ar = [];
const smo282329 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo282329.setAttribute('id', 'smo282329');
smo282353v0ar.push(smo282329);
const smo282330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo282330.setAttribute('id', 'smo282330');
smo282353v0ar.push(smo282330);
const smo282331 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo282331.setAttribute('id', 'smo282331');
const smo282332 = new VF.Annotation('Ki');
smo282332.setAttribute('id', 'smo282332');
smo282332.setFont('times', 12, 'normal');
smo282332.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282331.addModifier(smo282332);
smo282332.addClass('lyric lyric-0 lyric-hyphen');
smo282353v0ar.push(smo282331);
const smo282333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo282333.setAttribute('id', 'smo282333');
smo282353v0ar.push(smo282333);
const smo282334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo282334.setAttribute('id', 'smo282334');
const smo282335 = new VF.Annotation('ki');
smo282335.setAttribute('id', 'smo282335');
smo282335.setFont('times', 12, 'normal');
smo282335.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282334.addModifier(smo282335);
smo282335.addClass('lyric lyric-0 lyric-hyphen');
smo282353v0ar.push(smo282334);
const smo282336 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo282336.setAttribute('id', 'smo282336');
const smo282337 = new VF.Annotation('ri');
smo282337.setAttribute('id', 'smo282337');
smo282337.setFont('times', 12, 'normal');
smo282337.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo282336.addModifier(smo282337);
smo282337.addClass('lyric lyric-0');
smo282353v0ar.push(smo282336);
smo282353v0.addTickables(smo282353v0ar)
fmtsmo28235371.joinVoices([smo282353v0]);
const fmtsmo28544271 = new VF.Formatter();
//
// voices and notes for stave 9 71
const smo285442v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo285442v0ar = [];
const smo285418 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo285418.setAttribute('id', 'smo285418');
smo285442v0ar.push(smo285418);
const smo285419 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo285419.setAttribute('id', 'smo285419');
smo285442v0ar.push(smo285419);
const smo285420 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo285420.setAttribute('id', 'smo285420');
const smo285421 = new VF.Annotation('Ki');
smo285421.setAttribute('id', 'smo285421');
smo285421.setFont('times', 12, 'normal');
smo285421.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285420.addModifier(smo285421);
smo285421.addClass('lyric lyric-0 lyric-hyphen');
smo285442v0ar.push(smo285420);
const smo285422 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo285422.setAttribute('id', 'smo285422');
smo285442v0ar.push(smo285422);
const smo285423 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo285423.setAttribute('id', 'smo285423');
const smo285424 = new VF.Annotation('ki');
smo285424.setAttribute('id', 'smo285424');
smo285424.setFont('times', 12, 'normal');
smo285424.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285423.addModifier(smo285424);
smo285424.addClass('lyric lyric-0 lyric-hyphen');
smo285442v0ar.push(smo285423);
const smo285425 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo285425.setAttribute('id', 'smo285425');
const smo285426 = new VF.Annotation('ri');
smo285426.setAttribute('id', 'smo285426');
smo285426.setFont('times', 12, 'normal');
smo285426.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo285425.addModifier(smo285426);
smo285426.addClass('lyric lyric-0');
smo285442v0ar.push(smo285425);
smo285442v0.addTickables(smo285442v0ar)
fmtsmo28544271.joinVoices([smo285442v0]);
const fmtsmo28848271 = new VF.Formatter();
//
// voices and notes for stave 10 71
const smo288482v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo288482v0ar = [];
const smo288458 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo288458.setAttribute('id', 'smo288458');
smo288482v0ar.push(smo288458);
const smo288459 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo288459.setAttribute('id', 'smo288459');
smo288482v0ar.push(smo288459);
const smo288460 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo288460.setAttribute('id', 'smo288460');
const smo288461 = new VF.Annotation('Ki');
smo288461.setAttribute('id', 'smo288461');
smo288461.setFont('times', 12, 'normal');
smo288461.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288460.addModifier(smo288461);
smo288461.addClass('lyric lyric-0 lyric-hyphen');
smo288482v0ar.push(smo288460);
const smo288462 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo288462.setAttribute('id', 'smo288462');
smo288482v0ar.push(smo288462);
const smo288463 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo288463.setAttribute('id', 'smo288463');
const smo288464 = new VF.Annotation('ki');
smo288464.setAttribute('id', 'smo288464');
smo288464.setFont('times', 12, 'normal');
smo288464.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288463.addModifier(smo288464);
smo288464.addClass('lyric lyric-0 lyric-hyphen');
smo288482v0ar.push(smo288463);
const smo288465 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo288465.setAttribute('id', 'smo288465');
const smo288466 = new VF.Annotation('ri');
smo288466.setAttribute('id', 'smo288466');
smo288466.setFont('times', 12, 'normal');
smo288466.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo288465.addModifier(smo288466);
smo288466.addClass('lyric lyric-0');
smo288482v0ar.push(smo288465);
smo288482v0.addTickables(smo288482v0ar)
fmtsmo28848271.joinVoices([smo288482v0]);
const fmtsmo29153671 = new VF.Formatter();
//
// voices and notes for stave 11 71
const smo291536v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo291536v0ar = [];
const smo291512 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo291512.setAttribute('id', 'smo291512');
smo291536v0ar.push(smo291512);
const smo291513 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo291513.setAttribute('id', 'smo291513');
smo291536v0ar.push(smo291513);
const smo291514 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo291514.setAttribute('id', 'smo291514');
const smo291515 = new VF.Annotation('Ki');
smo291515.setAttribute('id', 'smo291515');
smo291515.setFont('times', 12, 'normal');
smo291515.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291514.addModifier(smo291515);
smo291515.addClass('lyric lyric-0 lyric-hyphen');
smo291536v0ar.push(smo291514);
const smo291516 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo291516.setAttribute('id', 'smo291516');
smo291536v0ar.push(smo291516);
const smo291517 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo291517.setAttribute('id', 'smo291517');
const smo291518 = new VF.Annotation('ki');
smo291518.setAttribute('id', 'smo291518');
smo291518.setFont('times', 12, 'normal');
smo291518.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291517.addModifier(smo291518);
smo291518.addClass('lyric lyric-0 lyric-hyphen');
smo291536v0ar.push(smo291517);
const smo291519 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo291519.setAttribute('id', 'smo291519');
const smo291520 = new VF.Annotation('ri');
smo291520.setAttribute('id', 'smo291520');
smo291520.setFont('times', 12, 'normal');
smo291520.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo291519.addModifier(smo291520);
smo291520.addClass('lyric lyric-0');
smo291536v0ar.push(smo291519);
smo291536v0.addTickables(smo291536v0ar)
fmtsmo29153671.joinVoices([smo291536v0]);
const fmtsmo29457971 = new VF.Formatter();
//
// voices and notes for stave 12 71
const smo294579v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo294579v0ar = [];
const smo294555 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo294555.setAttribute('id', 'smo294555');
smo294579v0ar.push(smo294555);
const smo294556 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo294556.setAttribute('id', 'smo294556');
smo294579v0ar.push(smo294556);
const smo294557 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo294557.setAttribute('id', 'smo294557');
const smo294558 = new VF.Annotation('Ki');
smo294558.setAttribute('id', 'smo294558');
smo294558.setFont('times', 12, 'normal');
smo294558.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo294557.addModifier(smo294558);
smo294558.addClass('lyric lyric-0 lyric-hyphen');
smo294579v0ar.push(smo294557);
const smo294559 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo294559.setAttribute('id', 'smo294559');
smo294579v0ar.push(smo294559);
const smo294560 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo294560.setAttribute('id', 'smo294560');
const smo294561 = new VF.Annotation('ki');
smo294561.setAttribute('id', 'smo294561');
smo294561.setFont('times', 12, 'normal');
smo294561.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo294560.addModifier(smo294561);
smo294561.addClass('lyric lyric-0 lyric-hyphen');
smo294579v0ar.push(smo294560);
const smo294562 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo294562.setAttribute('id', 'smo294562');
const smo294563 = new VF.Annotation('ri');
smo294563.setAttribute('id', 'smo294563');
smo294563.setFont('times', 12, 'normal');
smo294563.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo294562.addModifier(smo294563);
smo294563.addClass('lyric lyric-0');
smo294579v0ar.push(smo294562);
smo294579v0.addTickables(smo294579v0ar)
fmtsmo29457971.joinVoices([smo294579v0]);
const fmtsmo29777071 = new VF.Formatter();
//
// voices and notes for stave 13 71
const smo297770v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo297770v0ar = [];
const smo297754 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo297754.setAttribute('id', 'smo297754');
smo297770v0ar.push(smo297754);
smo297770v0.addTickables(smo297770v0ar)
fmtsmo29777071.joinVoices([smo297770v0]);
const fmtsmo30098371 = new VF.Formatter();
//
// voices and notes for stave 14 71
const smo300983v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo300983v0ar = [];
const smo300967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo300967.setAttribute('id', 'smo300967');
smo300983v0ar.push(smo300967);
smo300983v0.addTickables(smo300983v0ar)
fmtsmo30098371.joinVoices([smo300983v0]);
const fmtsmo30417871 = new VF.Formatter();
//
// voices and notes for stave 15 71
const smo304178v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo304178v0ar = [];
const smo304162 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo304162.setAttribute('id', 'smo304162');
smo304178v0ar.push(smo304162);
smo304178v0.addTickables(smo304178v0ar)
fmtsmo30417871.joinVoices([smo304178v0]);
const fmtsmo30730371 = new VF.Formatter();
//
// voices and notes for stave 16 71
const smo307303v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo307303v0ar = [];
const smo307284 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo307284.setAttribute('id', 'smo307284');
smo307303v0ar.push(smo307284);
const smo307285 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo307285.setAttribute('id', 'smo307285');
smo307303v0ar.push(smo307285);
const smo307286 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo307286.setAttribute('id', 'smo307286');
smo307303v0ar.push(smo307286);
const smo307287 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo307287.setAttribute('id', 'smo307287');
smo307303v0ar.push(smo307287);
smo307303v0.addTickables(smo307303v0ar)
fmtsmo30730371.joinVoices([smo307303v0]);
const fmtsmo31050271 = new VF.Formatter();
//
// voices and notes for stave 17 71
const smo310502v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo310502v0ar = [];
const smo310483 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo310483.setAttribute('id', 'smo310483');
smo310502v0ar.push(smo310483);
const smo310484 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo310484.setAttribute('id', 'smo310484');
smo310484.setStyle({ fillStyle: "#ffffff00" });
smo310502v0ar.push(smo310484);
smo310502v0.addTickables(smo310502v0ar)
fmtsmo31050271.joinVoices([smo310502v0]);
const smo310502v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo310502v1ar = [];
const smo310485 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo310485.setAttribute('id', 'smo310485');
smo310485.setStyle({ fillStyle: '#aaaaaa7f' });
smo310502v1ar.push(smo310485);
const smo310486 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo310486.setAttribute('id', 'smo310486');
smo310486.setStyle({ fillStyle: "#115511" });
smo310502v1ar.push(smo310486);
smo310502v1.addTickables(smo310502v1ar)
fmtsmo31050271.joinVoices([smo310502v1]);
// create beam groups and tuplets for format grp smo312125 before formatting
const dirsmo403811 = smo257645.getStemDirection();
smo257645.setStemDirection(dirsmo403811);
smo257647.setStemDirection(dirsmo403811);
const smo403811 = new VF.Beam([smo257645,smo257647]);
const dirsmo403813 = smo260638.getStemDirection();
smo260638.setStemDirection(dirsmo403813);
smo260640.setStemDirection(dirsmo403813);
const smo403813 = new VF.Beam([smo260638,smo260640]);
const dirsmo403815 = smo263782.getStemDirection();
smo263782.setStemDirection(dirsmo403815);
smo263784.setStemDirection(dirsmo403815);
const smo403815 = new VF.Beam([smo263782,smo263784]);
const dirsmo403817 = smo266898.getStemDirection();
smo266898.setStemDirection(dirsmo403817);
smo266900.setStemDirection(dirsmo403817);
const smo403817 = new VF.Beam([smo266898,smo266900]);
const dirsmo403819 = smo269917.getStemDirection();
smo269917.setStemDirection(dirsmo403819);
smo269919.setStemDirection(dirsmo403819);
const smo403819 = new VF.Beam([smo269917,smo269919]);
 
// formatting measures in staff group smo312125
fmtsmo25766771.format([smo257667v0,smo260660v0,smo263804v0,smo266920v0,smo269939v0], 296);
const stavesmo257667 = new VF.Stave(2640, 210, 310);
stavesmo257667.setAttribute('id', 'stavesmo257667');
stavesmo257667.setBegBarType(VF.Barline.type.NONE);
stavesmo257667.setContext(context);
stavesmo257667.draw();
smo257667v0.draw(context, stavesmo257667);
smo403811.setContext(context);
smo403811.draw();
const stavesmo260660 = new VF.Stave(2640, 309, 310);
stavesmo260660.setAttribute('id', 'stavesmo260660');
stavesmo260660.setBegBarType(VF.Barline.type.NONE);
stavesmo260660.setContext(context);
stavesmo260660.draw();
smo260660v0.draw(context, stavesmo260660);
smo403813.setContext(context);
smo403813.draw();
const stavesmo263804 = new VF.Stave(2640, 423, 310);
stavesmo263804.setAttribute('id', 'stavesmo263804');
stavesmo263804.setBegBarType(VF.Barline.type.NONE);
stavesmo263804.setContext(context);
stavesmo263804.draw();
smo263804v0.draw(context, stavesmo263804);
smo403815.setContext(context);
smo403815.draw();
const stavesmo266920 = new VF.Stave(2640, 532, 310);
stavesmo266920.setAttribute('id', 'stavesmo266920');
stavesmo266920.setBegBarType(VF.Barline.type.NONE);
stavesmo266920.setContext(context);
stavesmo266920.draw();
smo266920v0.draw(context, stavesmo266920);
smo403817.setContext(context);
smo403817.draw();
const stavesmo269939 = new VF.Stave(2640, 631, 310);
stavesmo269939.setAttribute('id', 'stavesmo269939');
stavesmo269939.setBegBarType(VF.Barline.type.NONE);
stavesmo269939.setContext(context);
stavesmo269939.draw();
smo269939v0.draw(context, stavesmo269939);
smo403819.setContext(context);
smo403819.draw();
// create beam groups and tuplets for format grp smo312127 before formatting
const dirsmo403821 = smo273033.getStemDirection();
smo273033.setStemDirection(dirsmo403821);
smo273035.setStemDirection(dirsmo403821);
const smo403821 = new VF.Beam([smo273033,smo273035]);
const dirsmo403823 = smo276136.getStemDirection();
smo276136.setStemDirection(dirsmo403823);
smo276138.setStemDirection(dirsmo403823);
const smo403823 = new VF.Beam([smo276136,smo276138]);
const dirsmo403825 = smo279245.getStemDirection();
smo279245.setStemDirection(dirsmo403825);
smo279247.setStemDirection(dirsmo403825);
const smo403825 = new VF.Beam([smo279245,smo279247]);
const dirsmo403827 = smo282331.getStemDirection();
smo282331.setStemDirection(dirsmo403827);
smo282333.setStemDirection(dirsmo403827);
const smo403827 = new VF.Beam([smo282331,smo282333]);
 
// formatting measures in staff group smo312127
fmtsmo27305571.format([smo273055v0,smo276158v0,smo279267v0,smo282353v0], 296);
const stavesmo273055 = new VF.Stave(2640, 745, 310);
stavesmo273055.setAttribute('id', 'stavesmo273055');
stavesmo273055.setBegBarType(VF.Barline.type.NONE);
stavesmo273055.setContext(context);
stavesmo273055.draw();
smo273055v0.draw(context, stavesmo273055);
smo403821.setContext(context);
smo403821.draw();
const stavesmo276158 = new VF.Stave(2640, 853, 310);
stavesmo276158.setAttribute('id', 'stavesmo276158');
stavesmo276158.setBegBarType(VF.Barline.type.NONE);
stavesmo276158.setContext(context);
stavesmo276158.draw();
smo276158v0.draw(context, stavesmo276158);
smo403823.setContext(context);
smo403823.draw();
const stavesmo279267 = new VF.Stave(2640, 962, 310);
stavesmo279267.setAttribute('id', 'stavesmo279267');
stavesmo279267.setBegBarType(VF.Barline.type.NONE);
stavesmo279267.setContext(context);
stavesmo279267.draw();
smo279267v0.draw(context, stavesmo279267);
smo403825.setContext(context);
smo403825.draw();
const stavesmo282353 = new VF.Stave(2640, 1071, 310);
stavesmo282353.setAttribute('id', 'stavesmo282353');
stavesmo282353.setBegBarType(VF.Barline.type.NONE);
stavesmo282353.setContext(context);
stavesmo282353.draw();
smo282353v0.draw(context, stavesmo282353);
smo403827.setContext(context);
smo403827.draw();
// create beam groups and tuplets for format grp smo312129 before formatting
const dirsmo403829 = smo285420.getStemDirection();
smo285420.setStemDirection(dirsmo403829);
smo285422.setStemDirection(dirsmo403829);
const smo403829 = new VF.Beam([smo285420,smo285422]);
const dirsmo403831 = smo288460.getStemDirection();
smo288460.setStemDirection(dirsmo403831);
smo288462.setStemDirection(dirsmo403831);
const smo403831 = new VF.Beam([smo288460,smo288462]);
const dirsmo403833 = smo291514.getStemDirection();
smo291514.setStemDirection(dirsmo403833);
smo291516.setStemDirection(dirsmo403833);
const smo403833 = new VF.Beam([smo291514,smo291516]);
const dirsmo403835 = smo294557.getStemDirection();
smo294557.setStemDirection(dirsmo403835);
smo294559.setStemDirection(dirsmo403835);
const smo403835 = new VF.Beam([smo294557,smo294559]);
 
// formatting measures in staff group smo312129
fmtsmo28544271.format([smo285442v0,smo288482v0,smo291536v0,smo294579v0], 296);
const stavesmo285442 = new VF.Stave(2640, 1200, 310);
stavesmo285442.setAttribute('id', 'stavesmo285442');
stavesmo285442.setBegBarType(VF.Barline.type.NONE);
stavesmo285442.setContext(context);
stavesmo285442.draw();
smo285442v0.draw(context, stavesmo285442);
smo403829.setContext(context);
smo403829.draw();
const stavesmo288482 = new VF.Stave(2640, 1329, 310);
stavesmo288482.setAttribute('id', 'stavesmo288482');
stavesmo288482.setBegBarType(VF.Barline.type.NONE);
stavesmo288482.setContext(context);
stavesmo288482.draw();
smo288482v0.draw(context, stavesmo288482);
smo403831.setContext(context);
smo403831.draw();
const stavesmo291536 = new VF.Stave(2640, 1458, 310);
stavesmo291536.setAttribute('id', 'stavesmo291536');
stavesmo291536.setBegBarType(VF.Barline.type.NONE);
stavesmo291536.setContext(context);
stavesmo291536.draw();
smo291536v0.draw(context, stavesmo291536);
smo403833.setContext(context);
smo403833.draw();
const stavesmo294579 = new VF.Stave(2640, 1587, 310);
stavesmo294579.setAttribute('id', 'stavesmo294579');
stavesmo294579.setBegBarType(VF.Barline.type.NONE);
stavesmo294579.setContext(context);
stavesmo294579.draw();
smo294579v0.draw(context, stavesmo294579);
smo403835.setContext(context);
smo403835.draw();
// create beam groups and tuplets for format grp smo299448 before formatting
 
// formatting measures in staff group smo299448
fmtsmo29777071.format([smo297770v0], 296);
const stavesmo297770 = new VF.Stave(2640, 1726, 310);
stavesmo297770.setAttribute('id', 'stavesmo297770');
stavesmo297770.setBegBarType(VF.Barline.type.NONE);
stavesmo297770.setContext(context);
stavesmo297770.draw();
smo297770v0.draw(context, stavesmo297770);
// create beam groups and tuplets for format grp smo312123 before formatting
 
// formatting measures in staff group smo312123
fmtsmo30098371.format([smo300983v0,smo304178v0], 296);
const stavesmo300983 = new VF.Stave(2640, 1831, 310);
stavesmo300983.setAttribute('id', 'stavesmo300983');
stavesmo300983.setBegBarType(VF.Barline.type.NONE);
stavesmo300983.setContext(context);
stavesmo300983.draw();
smo300983v0.draw(context, stavesmo300983);
const stavesmo304178 = new VF.Stave(2640, 1917, 310);
stavesmo304178.setAttribute('id', 'stavesmo304178');
stavesmo304178.setBegBarType(VF.Barline.type.NONE);
stavesmo304178.setContext(context);
stavesmo304178.draw();
smo304178v0.draw(context, stavesmo304178);
// create beam groups and tuplets for format grp smo308961 before formatting
 
// formatting measures in staff group smo308961
fmtsmo30730371.format([smo307303v0], 296);
const stavesmo307303 = new VF.Stave(2640, 1988, 310);
stavesmo307303.setAttribute('id', 'stavesmo307303');
stavesmo307303.setBegBarType(VF.Barline.type.NONE);
stavesmo307303.setContext(context);
stavesmo307303.draw();
smo307303v0.draw(context, stavesmo307303);
// create beam groups and tuplets for format grp smo312117 before formatting
 
// formatting measures in staff group smo312117
fmtsmo31050271.format([smo310502v0,smo310502v1], 296);
const stavesmo310502 = new VF.Stave(2640, 2059, 310);
stavesmo310502.setAttribute('id', 'stavesmo310502');
stavesmo310502.setBegBarType(VF.Barline.type.NONE);
stavesmo310502.setContext(context);
stavesmo310502.draw();
smo310502v0.draw(context, stavesmo310502);
smo310502v1.draw(context, stavesmo310502);
const rightsmo312117stavesmo25766717 = new VF.StaveConnector(stavesmo257667, stavesmo269939).setType(0);
rightsmo312117stavesmo25766717.setContext(context).draw();
const rightsmo312117stavesmo27305517 = new VF.StaveConnector(stavesmo273055, stavesmo282353).setType(0);
rightsmo312117stavesmo27305517.setContext(context).draw();
const rightsmo312117stavesmo28544217 = new VF.StaveConnector(stavesmo285442, stavesmo294579).setType(0);
rightsmo312117stavesmo28544217.setContext(context).draw();
const rightsmo312117stavesmo30098317 = new VF.StaveConnector(stavesmo300983, stavesmo304178).setType(0);
rightsmo312117stavesmo30098317.setContext(context).draw();
// modifier from 0-63-0-2 to 0-63-0-3
const smo413203 = new VF.StaveTie({ first_note: smo257465, last_note: smo257467, 
          firstNote: smo257465, lastNote: smo257467, first_indices: [0], last_indices: [0]});
smo413203.setContext(context).draw();
// modifier from 0-64-0-3 to 0-64-0-4
const smo413204 = new VF.StaveTie({ first_note: smo257493, last_note: smo257495, 
          firstNote: smo257493, lastNote: smo257495, first_indices: [0], last_indices: [0]});
smo413204.setContext(context).draw();
// modifier from 0-64-0-5 to 0-65-0-0
const smo413205 = new VF.StaveTie({ first_note: smo257496, last_note: smo257514, 
          firstNote: smo257496, lastNote: smo257514, first_indices: [0], last_indices: [0]});
smo413205.setContext(context).draw();
// modifier from 0-65-0-3 to 0-65-0-4
const smo413206 = new VF.StaveTie({ first_note: smo257518, last_note: smo257520, 
          firstNote: smo257518, lastNote: smo257520, first_indices: [0], last_indices: [0]});
smo413206.setContext(context).draw();
// modifier from 0-66-0-4 to 0-66-0-5
const smo413207 = new VF.StaveTie({ first_note: smo257549, last_note: smo257551, 
          firstNote: smo257549, lastNote: smo257551, first_indices: [0], last_indices: [0]});
smo413207.setContext(context).draw();
// modifier from 0-66-0-6 to 0-67-0-0
const smo413208 = new VF.StaveTie({ first_note: smo257552, last_note: smo257570, 
          firstNote: smo257552, lastNote: smo257570, first_indices: [0], last_indices: [0]});
smo413208.setContext(context).draw();
// modifier from 0-71-0-2 to 0-71-0-3
const smo413209 = new VF.StaveTie({ first_note: smo257645, last_note: smo257647, 
          firstNote: smo257645, lastNote: smo257647, first_indices: [0], last_indices: [0]});
smo413209.setContext(context).draw();
// modifier from 1-63-0-2 to 1-63-0-3
const smo413210 = new VF.StaveTie({ first_note: smo260459, last_note: smo260461, 
          firstNote: smo260459, lastNote: smo260461, first_indices: [0], last_indices: [0]});
smo413210.setContext(context).draw();
// modifier from 1-64-0-3 to 1-64-0-4
const smo413211 = new VF.StaveTie({ first_note: smo260487, last_note: smo260489, 
          firstNote: smo260487, lastNote: smo260489, first_indices: [0], last_indices: [0]});
smo413211.setContext(context).draw();
// modifier from 1-64-0-5 to 1-65-0-0
const smo413212 = new VF.StaveTie({ first_note: smo260490, last_note: smo260508, 
          firstNote: smo260490, lastNote: smo260508, first_indices: [0], last_indices: [0]});
smo413212.setContext(context).draw();
// modifier from 1-65-0-3 to 1-65-0-4
const smo413213 = new VF.StaveTie({ first_note: smo260512, last_note: smo260514, 
          firstNote: smo260512, lastNote: smo260514, first_indices: [0], last_indices: [0]});
smo413213.setContext(context).draw();
// modifier from 1-66-0-4 to 1-66-0-5
const smo413214 = new VF.StaveTie({ first_note: smo260543, last_note: smo260545, 
          firstNote: smo260543, lastNote: smo260545, first_indices: [0], last_indices: [0]});
smo413214.setContext(context).draw();
// modifier from 1-66-0-6 to 1-67-0-0
const smo413215 = new VF.StaveTie({ first_note: smo260546, last_note: smo260564, 
          firstNote: smo260546, lastNote: smo260564, first_indices: [0], last_indices: [0]});
smo413215.setContext(context).draw();
// modifier from 1-71-0-2 to 1-71-0-3
const smo413216 = new VF.StaveTie({ first_note: smo260638, last_note: smo260640, 
          firstNote: smo260638, lastNote: smo260640, first_indices: [0], last_indices: [0]});
smo413216.setContext(context).draw();
// modifier from 2-63-0-2 to 2-63-0-3
const smo413217 = new VF.StaveTie({ first_note: smo263602, last_note: smo263604, 
          firstNote: smo263602, lastNote: smo263604, first_indices: [0], last_indices: [0]});
smo413217.setContext(context).draw();
// modifier from 2-64-0-3 to 2-64-0-4
const smo413218 = new VF.StaveTie({ first_note: smo263630, last_note: smo263632, 
          firstNote: smo263630, lastNote: smo263632, first_indices: [0], last_indices: [0]});
smo413218.setContext(context).draw();
// modifier from 2-64-0-5 to 2-65-0-0
const smo413219 = new VF.StaveTie({ first_note: smo263633, last_note: smo263651, 
          firstNote: smo263633, lastNote: smo263651, first_indices: [0], last_indices: [0]});
smo413219.setContext(context).draw();
// modifier from 2-65-0-3 to 2-65-0-4
const smo413220 = new VF.StaveTie({ first_note: smo263655, last_note: smo263657, 
          firstNote: smo263655, lastNote: smo263657, first_indices: [0], last_indices: [0]});
smo413220.setContext(context).draw();
// modifier from 2-66-0-4 to 2-66-0-5
const smo413221 = new VF.StaveTie({ first_note: smo263686, last_note: smo263688, 
          firstNote: smo263686, lastNote: smo263688, first_indices: [0], last_indices: [0]});
smo413221.setContext(context).draw();
// modifier from 2-66-0-6 to 2-67-0-0
const smo413222 = new VF.StaveTie({ first_note: smo263689, last_note: smo263707, 
          firstNote: smo263689, lastNote: smo263707, first_indices: [0], last_indices: [0]});
smo413222.setContext(context).draw();
// modifier from 2-71-0-2 to 2-71-0-3
const smo413223 = new VF.StaveTie({ first_note: smo263782, last_note: smo263784, 
          firstNote: smo263782, lastNote: smo263784, first_indices: [0], last_indices: [0]});
smo413223.setContext(context).draw();
// modifier from 3-63-0-2 to 3-63-0-3
const smo413224 = new VF.StaveTie({ first_note: smo266718, last_note: smo266720, 
          firstNote: smo266718, lastNote: smo266720, first_indices: [0], last_indices: [0]});
smo413224.setContext(context).draw();
// modifier from 3-64-0-3 to 3-64-0-4
const smo413225 = new VF.StaveTie({ first_note: smo266746, last_note: smo266748, 
          firstNote: smo266746, lastNote: smo266748, first_indices: [0], last_indices: [0]});
smo413225.setContext(context).draw();
// modifier from 3-64-0-5 to 3-65-0-0
const smo413226 = new VF.StaveTie({ first_note: smo266749, last_note: smo266767, 
          firstNote: smo266749, lastNote: smo266767, first_indices: [0], last_indices: [0]});
smo413226.setContext(context).draw();
// modifier from 3-65-0-3 to 3-65-0-4
const smo413227 = new VF.StaveTie({ first_note: smo266771, last_note: smo266773, 
          firstNote: smo266771, lastNote: smo266773, first_indices: [0], last_indices: [0]});
smo413227.setContext(context).draw();
// modifier from 3-66-0-4 to 3-66-0-5
const smo413228 = new VF.StaveTie({ first_note: smo266802, last_note: smo266804, 
          firstNote: smo266802, lastNote: smo266804, first_indices: [0], last_indices: [0]});
smo413228.setContext(context).draw();
// modifier from 3-66-0-6 to 3-67-0-0
const smo413229 = new VF.StaveTie({ first_note: smo266805, last_note: smo266823, 
          firstNote: smo266805, lastNote: smo266823, first_indices: [0], last_indices: [0]});
smo413229.setContext(context).draw();
// modifier from 3-71-0-2 to 3-71-0-3
const smo413230 = new VF.StaveTie({ first_note: smo266898, last_note: smo266900, 
          firstNote: smo266898, lastNote: smo266900, first_indices: [0], last_indices: [0]});
smo413230.setContext(context).draw();
// modifier from 4-63-0-2 to 4-63-0-3
const smo413231 = new VF.StaveTie({ first_note: smo269737, last_note: smo269739, 
          firstNote: smo269737, lastNote: smo269739, first_indices: [0], last_indices: [0]});
smo413231.setContext(context).draw();
// modifier from 4-64-0-3 to 4-64-0-4
const smo413232 = new VF.StaveTie({ first_note: smo269765, last_note: smo269767, 
          firstNote: smo269765, lastNote: smo269767, first_indices: [0], last_indices: [0]});
smo413232.setContext(context).draw();
// modifier from 4-64-0-5 to 4-65-0-0
const smo413233 = new VF.StaveTie({ first_note: smo269768, last_note: smo269786, 
          firstNote: smo269768, lastNote: smo269786, first_indices: [0], last_indices: [0]});
smo413233.setContext(context).draw();
// modifier from 4-65-0-3 to 4-65-0-4
const smo413234 = new VF.StaveTie({ first_note: smo269790, last_note: smo269792, 
          firstNote: smo269790, lastNote: smo269792, first_indices: [0], last_indices: [0]});
smo413234.setContext(context).draw();
// modifier from 4-66-0-4 to 4-66-0-5
const smo413235 = new VF.StaveTie({ first_note: smo269821, last_note: smo269823, 
          firstNote: smo269821, lastNote: smo269823, first_indices: [0], last_indices: [0]});
smo413235.setContext(context).draw();
// modifier from 4-66-0-6 to 4-67-0-0
const smo413236 = new VF.StaveTie({ first_note: smo269824, last_note: smo269842, 
          firstNote: smo269824, lastNote: smo269842, first_indices: [0], last_indices: [0]});
smo413236.setContext(context).draw();
// modifier from 4-71-0-2 to 4-71-0-3
const smo413237 = new VF.StaveTie({ first_note: smo269917, last_note: smo269919, 
          firstNote: smo269917, lastNote: smo269919, first_indices: [0], last_indices: [0]});
smo413237.setContext(context).draw();
// modifier from 5-63-0-3 to 5-63-0-4
const smo413238 = new VF.StaveTie({ first_note: smo272844, last_note: smo272846, 
          firstNote: smo272844, lastNote: smo272846, first_indices: [0], last_indices: [0]});
smo413238.setContext(context).draw();
// modifier from 5-64-0-3 to 5-64-0-4
const smo413239 = new VF.StaveTie({ first_note: smo272872, last_note: smo272874, 
          firstNote: smo272872, lastNote: smo272874, first_indices: [0], last_indices: [0]});
smo413239.setContext(context).draw();
// modifier from 5-64-0-5 to 5-65-0-0
const smo413240 = new VF.StaveTie({ first_note: smo272875, last_note: smo272893, 
          firstNote: smo272875, lastNote: smo272893, first_indices: [0], last_indices: [0]});
smo413240.setContext(context).draw();
// modifier from 5-65-0-3 to 5-65-0-4
const smo413241 = new VF.StaveTie({ first_note: smo272897, last_note: smo272899, 
          firstNote: smo272897, lastNote: smo272899, first_indices: [0], last_indices: [0]});
smo413241.setContext(context).draw();
// modifier from 5-66-0-4 to 5-66-0-5
const smo413242 = new VF.StaveTie({ first_note: smo272928, last_note: smo272930, 
          firstNote: smo272928, lastNote: smo272930, first_indices: [0], last_indices: [0]});
smo413242.setContext(context).draw();
// modifier from 5-66-0-6 to 5-67-0-0
const smo413243 = new VF.StaveTie({ first_note: smo272931, last_note: smo272949, 
          firstNote: smo272931, lastNote: smo272949, first_indices: [0], last_indices: [0]});
smo413243.setContext(context).draw();
// modifier from 5-71-0-2 to 5-71-0-3
const smo413244 = new VF.StaveTie({ first_note: smo273033, last_note: smo273035, 
          firstNote: smo273033, lastNote: smo273035, first_indices: [0], last_indices: [0]});
smo413244.setContext(context).draw();
// modifier from 6-63-0-2 to 6-63-0-3
const smo413245 = new VF.StaveTie({ first_note: smo275956, last_note: smo275958, 
          firstNote: smo275956, lastNote: smo275958, first_indices: [0], last_indices: [0]});
smo413245.setContext(context).draw();
// modifier from 6-64-0-3 to 6-64-0-4
const smo413246 = new VF.StaveTie({ first_note: smo275984, last_note: smo275986, 
          firstNote: smo275984, lastNote: smo275986, first_indices: [0], last_indices: [0]});
smo413246.setContext(context).draw();
// modifier from 6-64-0-5 to 6-65-0-0
const smo413247 = new VF.StaveTie({ first_note: smo275987, last_note: smo276005, 
          firstNote: smo275987, lastNote: smo276005, first_indices: [0], last_indices: [0]});
smo413247.setContext(context).draw();
// modifier from 6-65-0-3 to 6-65-0-4
const smo413248 = new VF.StaveTie({ first_note: smo276009, last_note: smo276011, 
          firstNote: smo276009, lastNote: smo276011, first_indices: [0], last_indices: [0]});
smo413248.setContext(context).draw();
// modifier from 6-66-0-4 to 6-66-0-5
const smo413249 = new VF.StaveTie({ first_note: smo276040, last_note: smo276042, 
          firstNote: smo276040, lastNote: smo276042, first_indices: [0], last_indices: [0]});
smo413249.setContext(context).draw();
// modifier from 6-66-0-6 to 6-67-0-0
const smo413250 = new VF.StaveTie({ first_note: smo276043, last_note: smo276061, 
          firstNote: smo276043, lastNote: smo276061, first_indices: [0], last_indices: [0]});
smo413250.setContext(context).draw();
// modifier from 6-71-0-2 to 6-71-0-3
const smo413251 = new VF.StaveTie({ first_note: smo276136, last_note: smo276138, 
          firstNote: smo276136, lastNote: smo276138, first_indices: [0], last_indices: [0]});
smo413251.setContext(context).draw();
// modifier from 7-63-0-2 to 7-63-0-3
const smo413252 = new VF.StaveTie({ first_note: smo279065, last_note: smo279067, 
          firstNote: smo279065, lastNote: smo279067, first_indices: [0], last_indices: [0]});
smo413252.setContext(context).draw();
// modifier from 7-64-0-3 to 7-64-0-4
const smo413253 = new VF.StaveTie({ first_note: smo279093, last_note: smo279095, 
          firstNote: smo279093, lastNote: smo279095, first_indices: [0], last_indices: [0]});
smo413253.setContext(context).draw();
// modifier from 7-64-0-5 to 7-65-0-0
const smo413254 = new VF.StaveTie({ first_note: smo279096, last_note: smo279114, 
          firstNote: smo279096, lastNote: smo279114, first_indices: [0], last_indices: [0]});
smo413254.setContext(context).draw();
// modifier from 7-65-0-3 to 7-65-0-4
const smo413255 = new VF.StaveTie({ first_note: smo279118, last_note: smo279120, 
          firstNote: smo279118, lastNote: smo279120, first_indices: [0], last_indices: [0]});
smo413255.setContext(context).draw();
// modifier from 7-66-0-4 to 7-66-0-5
const smo413256 = new VF.StaveTie({ first_note: smo279149, last_note: smo279151, 
          firstNote: smo279149, lastNote: smo279151, first_indices: [0], last_indices: [0]});
smo413256.setContext(context).draw();
// modifier from 7-66-0-6 to 7-67-0-0
const smo413257 = new VF.StaveTie({ first_note: smo279152, last_note: smo279170, 
          firstNote: smo279152, lastNote: smo279170, first_indices: [0], last_indices: [0]});
smo413257.setContext(context).draw();
// modifier from 7-71-0-2 to 7-71-0-3
const smo413258 = new VF.StaveTie({ first_note: smo279245, last_note: smo279247, 
          firstNote: smo279245, lastNote: smo279247, first_indices: [0], last_indices: [0]});
smo413258.setContext(context).draw();
// modifier from 8-63-0-2 to 8-63-0-3
const smo413259 = new VF.StaveTie({ first_note: smo282151, last_note: smo282153, 
          firstNote: smo282151, lastNote: smo282153, first_indices: [0], last_indices: [0]});
smo413259.setContext(context).draw();
// modifier from 8-64-0-3 to 8-64-0-4
const smo413260 = new VF.StaveTie({ first_note: smo282179, last_note: smo282181, 
          firstNote: smo282179, lastNote: smo282181, first_indices: [0], last_indices: [0]});
smo413260.setContext(context).draw();
// modifier from 8-64-0-5 to 8-65-0-0
const smo413261 = new VF.StaveTie({ first_note: smo282182, last_note: smo282200, 
          firstNote: smo282182, lastNote: smo282200, first_indices: [0], last_indices: [0]});
smo413261.setContext(context).draw();
// modifier from 8-65-0-3 to 8-65-0-4
const smo413262 = new VF.StaveTie({ first_note: smo282204, last_note: smo282206, 
          firstNote: smo282204, lastNote: smo282206, first_indices: [0], last_indices: [0]});
smo413262.setContext(context).draw();
// modifier from 8-66-0-4 to 8-66-0-5
const smo413263 = new VF.StaveTie({ first_note: smo282235, last_note: smo282237, 
          firstNote: smo282235, lastNote: smo282237, first_indices: [0], last_indices: [0]});
smo413263.setContext(context).draw();
// modifier from 8-66-0-6 to 8-67-0-0
const smo413264 = new VF.StaveTie({ first_note: smo282238, last_note: smo282256, 
          firstNote: smo282238, lastNote: smo282256, first_indices: [0], last_indices: [0]});
smo413264.setContext(context).draw();
// modifier from 8-71-0-2 to 8-71-0-3
const smo413265 = new VF.StaveTie({ first_note: smo282331, last_note: smo282333, 
          firstNote: smo282331, lastNote: smo282333, first_indices: [0], last_indices: [0]});
smo413265.setContext(context).draw();
// modifier from 9-63-0-2 to 9-63-0-3
const smo413266 = new VF.StaveTie({ first_note: smo285240, last_note: smo285242, 
          firstNote: smo285240, lastNote: smo285242, first_indices: [0], last_indices: [0]});
smo413266.setContext(context).draw();
// modifier from 9-64-0-3 to 9-64-0-4
const smo413267 = new VF.StaveTie({ first_note: smo285268, last_note: smo285270, 
          firstNote: smo285268, lastNote: smo285270, first_indices: [0], last_indices: [0]});
smo413267.setContext(context).draw();
// modifier from 9-64-0-5 to 9-65-0-0
const smo413268 = new VF.StaveTie({ first_note: smo285271, last_note: smo285289, 
          firstNote: smo285271, lastNote: smo285289, first_indices: [0], last_indices: [0]});
smo413268.setContext(context).draw();
// modifier from 9-65-0-3 to 9-65-0-4
const smo413269 = new VF.StaveTie({ first_note: smo285293, last_note: smo285295, 
          firstNote: smo285293, lastNote: smo285295, first_indices: [0], last_indices: [0]});
smo413269.setContext(context).draw();
// modifier from 9-66-0-4 to 9-66-0-5
const smo413270 = new VF.StaveTie({ first_note: smo285324, last_note: smo285326, 
          firstNote: smo285324, lastNote: smo285326, first_indices: [0], last_indices: [0]});
smo413270.setContext(context).draw();
// modifier from 9-66-0-6 to 9-67-0-0
const smo413271 = new VF.StaveTie({ first_note: smo285327, last_note: smo285345, 
          firstNote: smo285327, lastNote: smo285345, first_indices: [0], last_indices: [0]});
smo413271.setContext(context).draw();
// modifier from 9-71-0-2 to 9-71-0-3
const smo413272 = new VF.StaveTie({ first_note: smo285420, last_note: smo285422, 
          firstNote: smo285420, lastNote: smo285422, first_indices: [0], last_indices: [0]});
smo413272.setContext(context).draw();
// modifier from 10-63-0-2 to 10-63-0-3
const smo413273 = new VF.StaveTie({ first_note: smo288280, last_note: smo288282, 
          firstNote: smo288280, lastNote: smo288282, first_indices: [0], last_indices: [0]});
smo413273.setContext(context).draw();
// modifier from 10-64-0-3 to 10-64-0-4
const smo413274 = new VF.StaveTie({ first_note: smo288308, last_note: smo288310, 
          firstNote: smo288308, lastNote: smo288310, first_indices: [0], last_indices: [0]});
smo413274.setContext(context).draw();
// modifier from 10-64-0-5 to 10-65-0-0
const smo413275 = new VF.StaveTie({ first_note: smo288311, last_note: smo288329, 
          firstNote: smo288311, lastNote: smo288329, first_indices: [0], last_indices: [0]});
smo413275.setContext(context).draw();
// modifier from 10-65-0-3 to 10-65-0-4
const smo413276 = new VF.StaveTie({ first_note: smo288333, last_note: smo288335, 
          firstNote: smo288333, lastNote: smo288335, first_indices: [0], last_indices: [0]});
smo413276.setContext(context).draw();
// modifier from 10-66-0-4 to 10-66-0-5
const smo413277 = new VF.StaveTie({ first_note: smo288364, last_note: smo288366, 
          firstNote: smo288364, lastNote: smo288366, first_indices: [0], last_indices: [0]});
smo413277.setContext(context).draw();
// modifier from 10-66-0-6 to 10-67-0-0
const smo413278 = new VF.StaveTie({ first_note: smo288367, last_note: smo288385, 
          firstNote: smo288367, lastNote: smo288385, first_indices: [0], last_indices: [0]});
smo413278.setContext(context).draw();
// modifier from 10-71-0-2 to 10-71-0-3
const smo413279 = new VF.StaveTie({ first_note: smo288460, last_note: smo288462, 
          firstNote: smo288460, lastNote: smo288462, first_indices: [0], last_indices: [0]});
smo413279.setContext(context).draw();
// modifier from 11-63-0-2 to 11-63-0-3
const smo413280 = new VF.StaveTie({ first_note: smo291334, last_note: smo291336, 
          firstNote: smo291334, lastNote: smo291336, first_indices: [0], last_indices: [0]});
smo413280.setContext(context).draw();
// modifier from 11-64-0-3 to 11-64-0-4
const smo413281 = new VF.StaveTie({ first_note: smo291362, last_note: smo291364, 
          firstNote: smo291362, lastNote: smo291364, first_indices: [0], last_indices: [0]});
smo413281.setContext(context).draw();
// modifier from 11-64-0-5 to 11-65-0-0
const smo413282 = new VF.StaveTie({ first_note: smo291365, last_note: smo291383, 
          firstNote: smo291365, lastNote: smo291383, first_indices: [0], last_indices: [0]});
smo413282.setContext(context).draw();
// modifier from 11-65-0-3 to 11-65-0-4
const smo413283 = new VF.StaveTie({ first_note: smo291387, last_note: smo291389, 
          firstNote: smo291387, lastNote: smo291389, first_indices: [0], last_indices: [0]});
smo413283.setContext(context).draw();
// modifier from 11-66-0-4 to 11-66-0-5
const smo413284 = new VF.StaveTie({ first_note: smo291418, last_note: smo291420, 
          firstNote: smo291418, lastNote: smo291420, first_indices: [0], last_indices: [0]});
smo413284.setContext(context).draw();
// modifier from 11-66-0-6 to 11-67-0-0
const smo413285 = new VF.StaveTie({ first_note: smo291421, last_note: smo291439, 
          firstNote: smo291421, lastNote: smo291439, first_indices: [0], last_indices: [0]});
smo413285.setContext(context).draw();
// modifier from 11-71-0-2 to 11-71-0-3
const smo413286 = new VF.StaveTie({ first_note: smo291514, last_note: smo291516, 
          firstNote: smo291514, lastNote: smo291516, first_indices: [0], last_indices: [0]});
smo413286.setContext(context).draw();
// modifier from 12-63-0-2 to 12-63-0-3
const smo413287 = new VF.StaveTie({ first_note: smo294377, last_note: smo294379, 
          firstNote: smo294377, lastNote: smo294379, first_indices: [0], last_indices: [0]});
smo413287.setContext(context).draw();
// modifier from 12-64-0-3 to 12-64-0-4
const smo413288 = new VF.StaveTie({ first_note: smo294405, last_note: smo294407, 
          firstNote: smo294405, lastNote: smo294407, first_indices: [0], last_indices: [0]});
smo413288.setContext(context).draw();
// modifier from 12-64-0-5 to 12-65-0-0
const smo413289 = new VF.StaveTie({ first_note: smo294408, last_note: smo294426, 
          firstNote: smo294408, lastNote: smo294426, first_indices: [0], last_indices: [0]});
smo413289.setContext(context).draw();
// modifier from 12-65-0-3 to 12-65-0-4
const smo413290 = new VF.StaveTie({ first_note: smo294430, last_note: smo294432, 
          firstNote: smo294430, lastNote: smo294432, first_indices: [0], last_indices: [0]});
smo413290.setContext(context).draw();
// modifier from 12-66-0-4 to 12-66-0-5
const smo413291 = new VF.StaveTie({ first_note: smo294461, last_note: smo294463, 
          firstNote: smo294461, lastNote: smo294463, first_indices: [0], last_indices: [0]});
smo413291.setContext(context).draw();
// modifier from 12-66-0-6 to 12-67-0-0
const smo413292 = new VF.StaveTie({ first_note: smo294464, last_note: smo294482, 
          firstNote: smo294464, lastNote: smo294482, first_indices: [0], last_indices: [0]});
smo413292.setContext(context).draw();
// modifier from 12-71-0-2 to 12-71-0-3
const smo413293 = new VF.StaveTie({ first_note: smo294557, last_note: smo294559, 
          firstNote: smo294557, lastNote: smo294559, first_indices: [0], last_indices: [0]});
smo413293.setContext(context).draw();
// modifier from 13-63-0-3 to 13-63-0-4
const smo413294 = new VF.StaveTie({ first_note: smo297596, last_note: smo297597, 
          firstNote: smo297596, lastNote: smo297597, first_indices: [0,1,2], last_indices: [0,1,2]});
smo413294.setContext(context).draw();
// modifier from 13-64-0-3 to 13-64-0-4
const smo413295 = new VF.StaveTie({ first_note: smo297620, last_note: smo297621, 
          firstNote: smo297620, lastNote: smo297621, first_indices: [0,1,2], last_indices: [0,1,2]});
smo413295.setContext(context).draw();
// modifier from 13-65-0-1 to 13-65-0-2
const smo413296 = new VF.StaveTie({ first_note: smo297639, last_note: smo297640, 
          firstNote: smo297639, lastNote: smo297640, first_indices: [0,1,2], last_indices: [0,1,2]});
smo413296.setContext(context).draw();
// modifier from 13-66-0-3 to 13-66-0-4
const smo413297 = new VF.StaveTie({ first_note: smo297662, last_note: smo297663, 
          firstNote: smo297662, lastNote: smo297663, first_indices: [0,1,2], last_indices: [0,1,2]});
smo413297.setContext(context).draw();
// modifier from 13-66-0-5 to 13-67-0-0
const smo413298 = new VF.StaveTie({ first_note: smo297664, last_note: smo297681, 
          firstNote: smo297664, lastNote: smo297681, first_indices: [0,1,2], last_indices: [0,1,2]});
smo413298.setContext(context).draw();
// modifier from 13-67-0-1 to 13-67-0-2
const smo413299 = new VF.StaveTie({ first_note: smo297682, last_note: smo297683, 
          firstNote: smo297682, lastNote: smo297683, first_indices: [0,1], last_indices: [0,1]});
smo413299.setContext(context).draw();
// modifier from 14-63-0-3 to 14-63-0-4
const smo413300 = new VF.StaveTie({ first_note: smo300809, last_note: smo300810, 
          firstNote: smo300809, lastNote: smo300810, first_indices: [0,1,2], last_indices: [0,1,2]});
smo413300.setContext(context).draw();
// modifier from 14-64-0-3 to 14-64-0-4
const smo413301 = new VF.StaveTie({ first_note: smo300833, last_note: smo300834, 
          firstNote: smo300833, lastNote: smo300834, first_indices: [0,1,2], last_indices: [0,1,2]});
smo413301.setContext(context).draw();
// modifier from 14-65-0-1 to 14-65-0-2
const smo413302 = new VF.StaveTie({ first_note: smo300852, last_note: smo300853, 
          firstNote: smo300852, lastNote: smo300853, first_indices: [0,1,2], last_indices: [0,1,2]});
smo413302.setContext(context).draw();
// modifier from 14-66-0-3 to 14-66-0-4
const smo413303 = new VF.StaveTie({ first_note: smo300875, last_note: smo300876, 
          firstNote: smo300875, lastNote: smo300876, first_indices: [0,1,2], last_indices: [0,1,2]});
smo413303.setContext(context).draw();
// modifier from 14-66-0-5 to 14-67-0-0
const smo413304 = new VF.StaveTie({ first_note: smo300877, last_note: smo300894, 
          firstNote: smo300877, lastNote: smo300894, first_indices: [0,1,2], last_indices: [0,1,2]});
smo413304.setContext(context).draw();
// modifier from 14-67-0-1 to 14-67-0-2
const smo413305 = new VF.StaveTie({ first_note: smo300895, last_note: smo300896, 
          firstNote: smo300895, lastNote: smo300896, first_indices: [0,1], last_indices: [0,1]});
smo413305.setContext(context).draw();
// modifier from 15-63-0-3 to 15-63-0-4
const smo413306 = new VF.StaveTie({ first_note: smo304004, last_note: smo304005, 
          firstNote: smo304004, lastNote: smo304005, first_indices: [0], last_indices: [0]});
smo413306.setContext(context).draw();
// modifier from 15-64-0-3 to 15-64-0-4
const smo413307 = new VF.StaveTie({ first_note: smo304028, last_note: smo304029, 
          firstNote: smo304028, lastNote: smo304029, first_indices: [0], last_indices: [0]});
smo413307.setContext(context).draw();
// modifier from 15-65-0-1 to 15-65-0-2
const smo413308 = new VF.StaveTie({ first_note: smo304047, last_note: smo304048, 
          firstNote: smo304047, lastNote: smo304048, first_indices: [0], last_indices: [0]});
smo413308.setContext(context).draw();
// modifier from 15-66-0-3 to 15-66-0-4
const smo413309 = new VF.StaveTie({ first_note: smo304070, last_note: smo304071, 
          firstNote: smo304070, lastNote: smo304071, first_indices: [0], last_indices: [0]});
smo413309.setContext(context).draw();
// modifier from 15-66-0-5 to 15-67-0-0
const smo413310 = new VF.StaveTie({ first_note: smo304072, last_note: smo304089, 
          firstNote: smo304072, lastNote: smo304089, first_indices: [0], last_indices: [0]});
smo413310.setContext(context).draw();
// modifier from 15-67-0-1 to 15-67-0-2
const smo413311 = new VF.StaveTie({ first_note: smo304090, last_note: smo304091, 
          firstNote: smo304090, lastNote: smo304091, first_indices: [0], last_indices: [0]});
smo413311.setContext(context).draw();
// modifier from 16-64-0-1 to 16-64-0-2
const smo413312 = new VF.StaveTie({ first_note: smo307145, last_note: smo307146, 
          firstNote: smo307145, lastNote: smo307146, first_indices: [0], last_indices: [0]});
smo413312.setContext(context).draw();
// modifier from 16-64-0-3 to 16-65-0-0
const smo413313 = new VF.StaveTie({ first_note: smo307147, last_note: smo307164, 
          firstNote: smo307147, lastNote: smo307164, first_indices: [0], last_indices: [0]});
smo413313.setContext(context).draw();
// modifier from 16-65-0-1 to 16-65-0-2
const smo413314 = new VF.StaveTie({ first_note: smo307165, last_note: smo307166, 
          firstNote: smo307165, lastNote: smo307166, first_indices: [0], last_indices: [0]});
smo413314.setContext(context).draw();
// modifier from 16-65-0-3 to 16-66-0-0
const smo413315 = new VF.StaveTie({ first_note: smo307167, last_note: smo307184, 
          firstNote: smo307167, lastNote: smo307184, first_indices: [0], last_indices: [0]});
smo413315.setContext(context).draw();
// modifier from 16-66-0-1 to 16-66-0-2
const smo413316 = new VF.StaveTie({ first_note: smo307185, last_note: smo307186, 
          firstNote: smo307185, lastNote: smo307186, first_indices: [0], last_indices: [0]});
smo413316.setContext(context).draw();
// modifier from 16-66-0-3 to 16-67-0-0
const smo413317 = new VF.StaveTie({ first_note: smo307187, last_note: smo307204, 
          firstNote: smo307187, lastNote: smo307204, first_indices: [0], last_indices: [0]});
smo413317.setContext(context).draw();
// modifier from 16-68-0-1 to 16-68-0-2
const smo413318 = new VF.StaveTie({ first_note: smo307225, last_note: smo307226, 
          firstNote: smo307225, lastNote: smo307226, first_indices: [0], last_indices: [0]});
smo413318.setContext(context).draw();
// modifier from 16-68-0-3 to 16-69-0-0
const smo413319 = new VF.StaveTie({ first_note: smo307227, last_note: smo307244, 
          firstNote: smo307227, lastNote: smo307244, first_indices: [0], last_indices: [0]});
smo413319.setContext(context).draw();
// modifier from 16-69-0-1 to 16-69-0-2
const smo413320 = new VF.StaveTie({ first_note: smo307245, last_note: smo307246, 
          firstNote: smo307245, lastNote: smo307246, first_indices: [0], last_indices: [0]});
smo413320.setContext(context).draw();
// modifier from 16-69-0-3 to 16-70-0-0
const smo413321 = new VF.StaveTie({ first_note: smo307247, last_note: smo307264, 
          firstNote: smo307247, lastNote: smo307264, first_indices: [0], last_indices: [0]});
smo413321.setContext(context).draw();
// modifier from 16-70-0-1 to 16-70-0-2
const smo413322 = new VF.StaveTie({ first_note: smo307265, last_note: smo307266, 
          firstNote: smo307265, lastNote: smo307266, first_indices: [0], last_indices: [0]});
smo413322.setContext(context).draw();
// modifier from 16-70-0-3 to 16-71-0-0
const smo413323 = new VF.StaveTie({ first_note: smo307267, last_note: smo307284, 
          firstNote: smo307267, lastNote: smo307284, first_indices: [0], last_indices: [0]});
smo413323.setContext(context).draw();
// modifier from 17-63-0-1 to 17-63-0-2
const smo413324 = new VF.StaveTie({ first_note: smo310305, last_note: smo310306, 
          firstNote: smo310305, lastNote: smo310306, first_indices: [0], last_indices: [0]});
smo413324.setContext(context).draw();
// modifier from 17-65-0-1 to 17-65-0-2
const smo413325 = new VF.StaveTie({ first_note: smo310354, last_note: smo310355, 
          firstNote: smo310354, lastNote: smo310355, first_indices: [0], last_indices: [0]});
smo413325.setContext(context).draw();
// modifier from 17-66-0-4 to 17-66-0-5
const smo413326 = new VF.StaveTie({ first_note: smo310381, last_note: smo310383, 
          firstNote: smo310381, lastNote: smo310383, first_indices: [0], last_indices: [0]});
smo413326.setContext(context).draw();
// modifier from 17-66-0-6 to 17-67-0-0
const smo413327 = new VF.StaveTie({ first_note: smo310384, last_note: smo310403, 
          firstNote: smo310384, lastNote: smo310403, first_indices: [0], last_indices: [0]});
smo413327.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo257466').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo257469').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo257471').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo260460').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo260463').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo260465').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo263603').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo263606').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo263608').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo266719').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo266722').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo266724').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269738').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269741').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269743').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo272845').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo272848').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo272850').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo275957').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo275960').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo275962').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo279066').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo279069').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo279071').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo282152').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo282155').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo282157').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo257490').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo257494').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo257497').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo260484').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo260488').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo260491').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo263627').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo263631').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo263634').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo266743').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo266747').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo266750').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269762').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269766').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo269769').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo272869').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo272873').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo272876').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo275981').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo275985').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo275988').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo279090').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo279094').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo279097').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo282176').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo282180').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo282183').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo257516').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo257519').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo257522').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo257524').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo260510').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo260513').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo260516').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo260518').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo263653').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo263656').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo263659').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo263661').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo266769').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo266772').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo266775').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo266777').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo269788').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo269791').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo269794').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo269796').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo272895').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo272898').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo272901').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo272903').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo276007').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo276010').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo276013').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo276015').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo279116').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo279119').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo279122').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo279124').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo282202').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo282205').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo282208').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo282210').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo257542').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo257544').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo257546').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo257548').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo257550').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo257553').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo260536').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo260538').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo260540').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo260542').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo260544').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo260547').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo263679').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo263681').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo263683').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo263685').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo263690').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo266795').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo266797').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo266799').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo266801').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo266806').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269814').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo269816').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo269818').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo269820').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo269822').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo269825').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo272921').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo272923').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo272925').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo272927').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo272932').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo276033').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo276035').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo276037').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo276039').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo276044').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo279142').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo279144').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo279146').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo279148').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo279153').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo282228').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo282230').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo282232').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo282234').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo282239').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo257646').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo257649').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo257651').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo260639').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo260642').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo260644').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo263783').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo263786').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo263788').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo266899').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo266902').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo266904').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269918').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269921').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo269923').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo273034').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo273037').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo273039').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo276137').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo276140').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo276142').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo279246').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo279249').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo279251').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo282332').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo282335').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo282337').setAttributeNS('', 'transform', 'translate(0 10)');
}
// @@ Precious Lord p 1/1  by Thomas Dorsey
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1421.487603305785');
svg.setAttributeNS('', 'height', '1839.5721925133687');
svg.setAttributeNS('', 'viewBox', '0 0 1166 1509');
//
// create the musical objects
VF.setMusicFont("Bravura","Gonville","Custom");
const fmtsmo386000 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo38600v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo38600v0ar = [];
const smo38581 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo38581.setAttribute('id', 'smo38581');
const smo38582 = new VF.Annotation('Pre');
smo38582.setAttribute('id', 'smo38582');
smo38582.setFont('Merriweather', 11, 'normal');
smo38582.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38581.addModifier(smo38582);
smo38582.addClass('lyric lyric-0 lyric-hyphen');
smo38600v0ar.push(smo38581);
const smo38583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n"]}'))
smo38583.setAttribute('id', 'smo38583');
const smo38584 = new VF.Annotation('cious');
smo38584.setAttribute('id', 'smo38584');
smo38584.setFont('Merriweather', 11, 'normal');
smo38584.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38583.addModifier(smo38584);
smo38584.addClass('lyric lyric-0');
smo38600v0ar.push(smo38583);
smo38600v0.addTickables(smo38600v0ar)
fmtsmo386000.joinVoices([smo38600v0]);
const fmtsmo390420 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo39042v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo39042v0ar = [];
const smo39025 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo39025.setAttribute('id', 'smo39025');
smo39042v0ar.push(smo39025);
const smo39026 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo39026.setAttribute('id', 'smo39026');
smo39042v0ar.push(smo39026);
smo39042v0.addTickables(smo39042v0ar)
fmtsmo390420.joinVoices([smo39042v0]);
// create beam groups and tuplets for format grp smo39361 before formatting
const dirsmo40560 = smo38581.getStemDirection();
smo38581.setStemDirection(dirsmo40560);
smo38583.setStemDirection(dirsmo40560);
const smo40560 = new VF.Beam([smo38581,smo38583]);
const dirsmo40563 = smo39025.getStemDirection();
smo39025.setStemDirection(dirsmo40563);
smo39026.setStemDirection(dirsmo40563);
const smo40563 = new VF.Beam([smo39025,smo39026]);
 
// formatting measures in staff group smo39361
fmtsmo386000.format([smo38600v0,smo39042v0], 117);
const stavesmo38600 = new VF.Stave(43, 178, 215);
stavesmo38600.setAttribute('id', 'stavesmo38600');
stavesmo38600.setBegBarType(1);
stavesmo38600.addClef('treble');
stavesmo38600.addTimeSignature('3/4');
const keysmo38600 = new VF.KeySignature('F');
keysmo38600.addToStave(stavesmo38600);
stavesmo38600.setContext(context);
stavesmo38600.draw();
smo38600v0.draw(context, stavesmo38600);
smo40560.setContext(context);
smo40560.draw();
const stavesmo39042 = new VF.Stave(43, 333, 215);
stavesmo39042.setAttribute('id', 'stavesmo39042');
stavesmo39042.setBegBarType(1);
stavesmo39042.addClef('bass');
stavesmo39042.addTimeSignature('3/4');
const keysmo39042 = new VF.KeySignature('F');
keysmo39042.addToStave(stavesmo39042);
stavesmo39042.setContext(context);
stavesmo39042.draw();
smo39042v0.draw(context, stavesmo39042);
smo40563.setContext(context);
smo40563.draw();
const leftsmo39361stavesmo386001 = new VF.StaveConnector(stavesmo38600, stavesmo39042).setType(3);
leftsmo39361stavesmo386001.setContext(context).draw();
const fmtsmo386271 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo38627v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo38627v0ar = [];
const smo38601 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
smo38601.setAttribute('id', 'smo38601');
const smo38602 = new VF.Annotation('Lord,');
smo38602.setAttribute('id', 'smo38602');
smo38602.setFont('Merriweather', 11, 'normal');
smo38602.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38601.addModifier(smo38602);
smo38602.addClass('lyric lyric-0');
const smo38603 = new VF.Annotation('dark');
smo38603.setAttribute('id', 'smo38603');
smo38603.setFont('Merriweather', 11, 'normal');
smo38603.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38601.addModifier(smo38603);
smo38603.addClass('lyric lyric-1 lyric-hyphen');
const smo38604 = new VF.ChordSymbol();
smo38604.setAttribute('id', 'smo38604');
smo38604.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo38604.setFont('Roboto Slab', 14).setReportWidth(false);
smo38601.addModifier(smo38604, 0);
smo38627v0ar.push(smo38601);
const smo38605 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","cn/4/n"]}'))
smo38605.setAttribute('id', 'smo38605');
const smo38608 = new VF.Annotation('take');
smo38608.setAttribute('id', 'smo38608');
smo38608.setFont('Merriweather', 11, 'normal');
smo38608.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38605.addModifier(smo38608);
smo38608.addClass('lyric lyric-0');
const smo38606 = new VF.Annotation('ness');
smo38606.setAttribute('id', 'smo38606');
smo38606.setFont('Merriweather', 11, 'normal');
smo38606.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38605.addModifier(smo38606);
smo38606.addClass('lyric lyric-1');
const smo38607 = new VF.ChordSymbol();
smo38607.setAttribute('id', 'smo38607');
smo38607.addGlyphOrText('Gm', JSON.parse('{"text":"Gm","symbolModifier":1}'));
smo38607.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo38607.setFont('Roboto Slab', 14).setReportWidth(false);
smo38605.addModifier(smo38607, 0);
smo38627v0ar.push(smo38605);
const smo38609 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","cn/4/n"]}'))
smo38609.setAttribute('id', 'smo38609');
const smo38610 = new VF.Annotation('my');
smo38610.setAttribute('id', 'smo38610');
smo38610.setFont('Merriweather', 11, 'normal');
smo38610.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38609.addModifier(smo38610);
smo38610.addClass('lyric lyric-0');
const smo38611 = new VF.Annotation('a');
smo38611.setAttribute('id', 'smo38611');
smo38611.setFont('Merriweather', 11, 'normal');
smo38611.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38609.addModifier(smo38611);
smo38611.addClass('lyric lyric-1 lyric-hyphen');
smo38627v0ar.push(smo38609);
smo38627v0.addTickables(smo38627v0ar)
fmtsmo386271.joinVoices([smo38627v0]);
const fmtsmo390621 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo39062v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo39062v0ar = [];
const smo39043 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo39043.setAttribute('id', 'smo39043');
smo39062v0ar.push(smo39043);
const smo39044 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","fn/3/n"]}'))
smo39044.setAttribute('id', 'smo39044');
smo39062v0ar.push(smo39044);
const smo39045 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","en/3/n"]}'))
smo39045.setAttribute('id', 'smo39045');
smo39062v0ar.push(smo39045);
smo39062v0.addTickables(smo39062v0ar)
fmtsmo390621.joinVoices([smo39062v0]);
// create beam groups and tuplets for format grp smo39361 before formatting
const dirsmo40566 = smo38605.getStemDirection();
smo38605.setStemDirection(dirsmo40566);
smo38609.setStemDirection(dirsmo40566);
const smo40566 = new VF.Beam([smo38605,smo38609]);
const dirsmo40568 = smo39044.getStemDirection();
smo39044.setStemDirection(dirsmo40568);
smo39045.setStemDirection(dirsmo40568);
const smo40568 = new VF.Beam([smo39044,smo39045]);
 
// formatting measures in staff group smo39361
fmtsmo386271.format([smo38627v0,smo39062v0], 185);
const stavesmo38627 = new VF.Stave(258, 178, 208);
stavesmo38627.setAttribute('id', 'stavesmo38627');
stavesmo38627.setBegBarType(4);
stavesmo38627.setContext(context);
stavesmo38627.draw();
smo38627v0.draw(context, stavesmo38627);
smo40566.setContext(context);
smo40566.draw();
const stavesmo39062 = new VF.Stave(258, 333, 208);
stavesmo39062.setAttribute('id', 'stavesmo39062');
stavesmo39062.setBegBarType(4);
stavesmo39062.setContext(context);
stavesmo39062.draw();
smo39062v0.draw(context, stavesmo39062);
smo40568.setContext(context);
smo40568.draw();
const fmtsmo386542 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo38654v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo38654v0ar = [];
const smo38628 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n","fn/4/n"]}'))
smo38628.setAttribute('id', 'smo38628');
const smo38629 = new VF.Annotation('hand,');
smo38629.setAttribute('id', 'smo38629');
smo38629.setFont('Merriweather', 11, 'normal');
smo38629.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38628.addModifier(smo38629);
smo38629.addClass('lyric lyric-0');
const smo38630 = new VF.Annotation('pears');
smo38630.setAttribute('id', 'smo38630');
smo38630.setFont('Merriweather', 11, 'normal');
smo38630.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38628.addModifier(smo38630);
smo38630.addClass('lyric lyric-1');
const smo38631 = new VF.ChordSymbol();
smo38631.setAttribute('id', 'smo38631');
smo38631.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo38631.setFont('Roboto Slab', 14).setReportWidth(false);
smo38628.addModifier(smo38631, 0);
smo38654v0ar.push(smo38628);
const smo38632 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n","an/4/n"]}'))
smo38632.setAttribute('id', 'smo38632');
const smo38634 = new VF.Annotation('lead');
smo38634.setAttribute('id', 'smo38634');
smo38634.setFont('Merriweather', 11, 'normal');
smo38634.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38632.addModifier(smo38634);
smo38634.addClass('lyric lyric-0');
const smo38633 = new VF.Annotation('and');
smo38633.setAttribute('id', 'smo38633');
smo38633.setFont('Merriweather', 11, 'normal');
smo38633.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38632.addModifier(smo38633);
smo38633.addClass('lyric lyric-1');
smo38654v0ar.push(smo38632);
const smo38635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["c#/4/n","an/4/n"]}'))
smo38635.setAttribute('id', 'smo38635');
const smo386350acc = new VF.Accidental('#');
smo38635.addModifier(smo386350acc, 0);
const smo38636 = new VF.Annotation('me');
smo38636.setAttribute('id', 'smo38636');
smo38636.setFont('Merriweather', 11, 'normal');
smo38636.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38635.addModifier(smo38636);
smo38636.addClass('lyric lyric-0');
const smo38637 = new VF.Annotation('the');
smo38637.setAttribute('id', 'smo38637');
smo38637.setFont('Merriweather', 11, 'normal');
smo38637.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38635.addModifier(smo38637);
smo38637.addClass('lyric lyric-1');
const smo38638 = new VF.ChordSymbol();
smo38638.setAttribute('id', 'smo38638');
smo38638.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo38638.addGlyph('augmented', JSON.parse('{"glyph":"csymAugmented","symbolModifier":3}'));
smo38638.addGlyphOrText('5', JSON.parse('{"text":"5","symbolModifier":3}'));
smo38638.setFont('Roboto Slab', 14).setReportWidth(false);
smo38635.addModifier(smo38638, 0);
smo38654v0ar.push(smo38635);
smo38654v0.addTickables(smo38654v0ar)
fmtsmo386542.joinVoices([smo38654v0]);
const fmtsmo390822 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo39082v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo39082v0ar = [];
const smo39063 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n","fn/3/n"]}'))
smo39063.setAttribute('id', 'smo39063');
smo39082v0ar.push(smo39063);
const smo39065 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo39065.setAttribute('id', 'smo39065');
smo39082v0ar.push(smo39065);
const smo39066 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo39066.setAttribute('id', 'smo39066');
smo39082v0ar.push(smo39066);
smo39082v0.addTickables(smo39082v0ar)
fmtsmo390822.joinVoices([smo39082v0]);
// create beam groups and tuplets for format grp smo39361 before formatting
const dirsmo40570 = smo38632.getStemDirection();
smo38632.setStemDirection(dirsmo40570);
smo38635.setStemDirection(dirsmo40570);
const smo40570 = new VF.Beam([smo38632,smo38635]);
const dirsmo40573 = smo39065.getStemDirection();
smo39065.setStemDirection(dirsmo40573);
smo39066.setStemDirection(dirsmo40573);
const smo40573 = new VF.Beam([smo39065,smo39066]);
 
// formatting measures in staff group smo39361
fmtsmo386542.format([smo38654v0,smo39082v0], 186);
const stavesmo38654 = new VF.Stave(466, 178, 200);
stavesmo38654.setAttribute('id', 'stavesmo38654');
stavesmo38654.setBegBarType(VF.Barline.type.NONE);
stavesmo38654.setContext(context);
stavesmo38654.draw();
smo38654v0.draw(context, stavesmo38654);
smo40570.setContext(context);
smo40570.draw();
const stavesmo39082 = new VF.Stave(466, 333, 200);
stavesmo39082.setAttribute('id', 'stavesmo39082');
stavesmo39082.setBegBarType(VF.Barline.type.NONE);
stavesmo39082.setContext(context);
stavesmo39082.draw();
smo39082v0.draw(context, stavesmo39082);
smo40573.setContext(context);
smo40573.draw();
const fmtsmo386813 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo38681v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo38681v0ar = [];
const smo38655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","gn/4/n"]}'))
smo38655.setAttribute('id', 'smo38655');
const smo38656 = new VF.Annotation('on,');
smo38656.setAttribute('id', 'smo38656');
smo38656.setFont('Merriweather', 11, 'normal');
smo38656.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38655.addModifier(smo38656);
smo38656.addClass('lyric lyric-0');
const smo38657 = new VF.Annotation('night');
smo38657.setAttribute('id', 'smo38657');
smo38657.setFont('Merriweather', 11, 'normal');
smo38657.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38655.addModifier(smo38657);
smo38657.addClass('lyric lyric-1');
const smo38658 = new VF.ChordSymbol();
smo38658.setAttribute('id', 'smo38658');
smo38658.addGlyphOrText('Gm', JSON.parse('{"text":"Gm","symbolModifier":1}'));
smo38658.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo38658.setFont('Roboto Slab', 14).setReportWidth(false);
smo38655.addModifier(smo38658, 0);
smo38681v0ar.push(smo38655);
const smo38659 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","fn/4/n"]}'))
smo38659.setAttribute('id', 'smo38659');
const smo38660 = new VF.Annotation('let');
smo38660.setAttribute('id', 'smo38660');
smo38660.setFont('Merriweather', 11, 'normal');
smo38660.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38659.addModifier(smo38660);
smo38660.addClass('lyric lyric-0');
const smo38661 = new VF.Annotation('dra');
smo38661.setAttribute('id', 'smo38661');
smo38661.setFont('Merriweather', 11, 'normal');
smo38661.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38659.addModifier(smo38661);
smo38661.addClass('lyric lyric-1 lyric-hyphen');
const smo38662 = new VF.ChordSymbol();
smo38662.setAttribute('id', 'smo38662');
smo38662.addGlyphOrText('B', JSON.parse('{"text":"B","symbolModifier":1}'));
smo38662.addGlyph('b', JSON.parse('{"glyph":"accidentalFlat","symbolModifier":1}'));
smo38662.setFont('Roboto Slab', 14).setReportWidth(false);
smo38659.addModifier(smo38662, 0);
smo38681v0ar.push(smo38659);
const smo38663 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","fn/4/n"]}'))
smo38663.setAttribute('id', 'smo38663');
const smo38664 = new VF.Annotation('me');
smo38664.setAttribute('id', 'smo38664');
smo38664.setFont('Merriweather', 11, 'normal');
smo38664.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38663.addModifier(smo38664);
smo38664.addClass('lyric lyric-0');
const smo38665 = new VF.Annotation('ws');
smo38665.setAttribute('id', 'smo38665');
smo38665.setFont('Merriweather', 11, 'normal');
smo38665.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38663.addModifier(smo38665);
smo38665.addClass('lyric lyric-1');
smo38681v0ar.push(smo38663);
smo38681v0.addTickables(smo38681v0ar)
fmtsmo386813.joinVoices([smo38681v0]);
const fmtsmo391013 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo39101v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo39101v0ar = [];
const smo39083 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","fn/3/n"]}'))
smo39083.setAttribute('id', 'smo39083');
smo39101v0ar.push(smo39083);
const smo39084 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","fn/3/n"]}'))
smo39084.setAttribute('id', 'smo39084');
smo39101v0ar.push(smo39084);
const smo39085 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","fn/3/n"]}'))
smo39085.setAttribute('id', 'smo39085');
smo39101v0ar.push(smo39085);
smo39101v0.addTickables(smo39101v0ar)
fmtsmo391013.joinVoices([smo39101v0]);
// create beam groups and tuplets for format grp smo39361 before formatting
const dirsmo40576 = smo38659.getStemDirection();
smo38659.setStemDirection(dirsmo40576);
smo38663.setStemDirection(dirsmo40576);
const smo40576 = new VF.Beam([smo38659,smo38663]);
const dirsmo40579 = smo39084.getStemDirection();
smo39084.setStemDirection(dirsmo40579);
smo39085.setStemDirection(dirsmo40579);
const smo40579 = new VF.Beam([smo39084,smo39085]);
 
// formatting measures in staff group smo39361
fmtsmo386813.format([smo38681v0,smo39101v0], 171);
const stavesmo38681 = new VF.Stave(666, 178, 185);
stavesmo38681.setAttribute('id', 'stavesmo38681');
stavesmo38681.setBegBarType(VF.Barline.type.NONE);
stavesmo38681.setContext(context);
stavesmo38681.draw();
smo38681v0.draw(context, stavesmo38681);
smo40576.setContext(context);
smo40576.draw();
const stavesmo39101 = new VF.Stave(666, 333, 185);
stavesmo39101.setAttribute('id', 'stavesmo39101');
stavesmo39101.setBegBarType(VF.Barline.type.NONE);
stavesmo39101.setContext(context);
stavesmo39101.draw();
smo39101v0.draw(context, stavesmo39101);
smo40579.setContext(context);
smo40579.draw();
const fmtsmo387104 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo38710v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo38710v0ar = [];
const smo38682 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo38682.setAttribute('id', 'smo38682');
const smo38683 = new VF.Annotation('sta');
smo38683.setAttribute('id', 'smo38683');
smo38683.setFont('Merriweather', 11, 'normal');
smo38683.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38682.addModifier(smo38683);
smo38683.addClass('lyric lyric-0 lyric-hyphen');
const smo38684 = new VF.Annotation('ne');
smo38684.setAttribute('id', 'smo38684');
smo38684.setFont('Merriweather', 11, 'normal');
smo38684.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38682.addModifier(smo38684);
smo38684.addClass('lyric lyric-1 lyric-hyphen');
smo38710v0ar.push(smo38682);
const smo38685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo38685.setAttribute('id', 'smo38685');
smo38685.addModifier(new VF.Dot(), 0);
smo38685.addModifier(new VF.Dot(), 1);
const smo38686 = new VF.Annotation('nd');
smo38686.setAttribute('id', 'smo38686');
smo38686.setFont('Merriweather', 11, 'normal');
smo38686.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38685.addModifier(smo38686);
smo38686.addClass('lyric lyric-0');
const smo38687 = new VF.Annotation('ar');
smo38687.setAttribute('id', 'smo38687');
smo38687.setFont('Merriweather', 11, 'normal');
smo38687.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38685.addModifier(smo38687);
smo38687.addClass('lyric lyric-1');
smo38710v0ar.push(smo38685);
const smo38688 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n","dn/4/n"]}'))
smo38688.setAttribute('id', 'smo38688');
const smo386880acc = new VF.Accidental('b');
smo38688.addModifier(smo386880acc, 0);
const smo38689 = new VF.Annotation('I');
smo38689.setAttribute('id', 'smo38689');
smo38689.setFont('Merriweather', 11, 'normal');
smo38689.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38688.addModifier(smo38689);
smo38689.addClass('lyric lyric-0');
const smo38690 = new VF.Annotation('when');
smo38690.setAttribute('id', 'smo38690');
smo38690.setFont('Merriweather', 11, 'normal');
smo38690.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38688.addModifier(smo38690);
smo38690.addClass('lyric lyric-1');
const smo38691 = new VF.ChordSymbol();
smo38691.setAttribute('id', 'smo38691');
smo38691.addGlyphOrText('B', JSON.parse('{"text":"B","symbolModifier":1}'));
smo38691.addGlyph('diminished', JSON.parse('{"glyph":"csymDiminished","symbolModifier":3}'));
smo38691.setFont('Roboto Slab', 14).setReportWidth(false);
smo38688.addModifier(smo38691, 0);
smo38710v0ar.push(smo38688);
const smo38692 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n","dn/4/n"]}'))
smo38692.setAttribute('id', 'smo38692');
const smo38693 = new VF.Annotation('am');
smo38693.setAttribute('id', 'smo38693');
smo38693.setFont('Merriweather', 11, 'normal');
smo38693.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38692.addModifier(smo38693);
smo38693.addClass('lyric lyric-0');
const smo38694 = new VF.Annotation('my');
smo38694.setAttribute('id', 'smo38694');
smo38694.setFont('Merriweather', 11, 'normal');
smo38694.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38692.addModifier(smo38694);
smo38694.addClass('lyric lyric-1');
smo38710v0ar.push(smo38692);
smo38710v0.addTickables(smo38710v0ar)
fmtsmo387104.joinVoices([smo38710v0]);
const fmtsmo391234 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo39123v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo39123v0ar = [];
const smo39102 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","fn/3/n"]}'))
smo39102.setAttribute('id', 'smo39102');
smo39123v0ar.push(smo39102);
const smo39104 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bb/2/n","dn/3/n"]}'))
smo39104.setAttribute('id', 'smo39104');
smo39104.addModifier(new VF.Dot(), 0);
smo39104.addModifier(new VF.Dot(), 1);
smo39123v0ar.push(smo39104);
const smo39106 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo39106.setAttribute('id', 'smo39106');
smo39123v0ar.push(smo39106);
const smo39107 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo39107.setAttribute('id', 'smo39107');
smo39123v0ar.push(smo39107);
smo39123v0.addTickables(smo39123v0ar)
fmtsmo391234.joinVoices([smo39123v0]);
// create beam groups and tuplets for format grp smo39361 before formatting
const dirsmo40582 = smo38688.getStemDirection();
smo38688.setStemDirection(dirsmo40582);
smo38692.setStemDirection(dirsmo40582);
const smo40582 = new VF.Beam([smo38688,smo38692]);
const dirsmo40585 = smo39106.getStemDirection();
smo39106.setStemDirection(dirsmo40585);
smo39107.setStemDirection(dirsmo40585);
const smo40585 = new VF.Beam([smo39106,smo39107]);
 
// formatting measures in staff group smo39361
fmtsmo387104.format([smo38710v0,smo39123v0], 213);
const stavesmo38710 = new VF.Stave(851, 178, 227);
stavesmo38710.setAttribute('id', 'stavesmo38710');
stavesmo38710.setBegBarType(VF.Barline.type.NONE);
stavesmo38710.setContext(context);
stavesmo38710.draw();
smo38710v0.draw(context, stavesmo38710);
smo40582.setContext(context);
smo40582.draw();
const stavesmo39123 = new VF.Stave(851, 333, 227);
stavesmo39123.setAttribute('id', 'stavesmo39123');
stavesmo39123.setBegBarType(VF.Barline.type.NONE);
stavesmo39123.setContext(context);
stavesmo39123.draw();
smo39123v0.draw(context, stavesmo39123);
smo40585.setContext(context);
smo40585.draw();
const rightsmo39361stavesmo387101 = new VF.StaveConnector(stavesmo38710, stavesmo39123).setType(0);
rightsmo39361stavesmo387101.setContext(context).draw();
const fmtsmo387375 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo38737v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo38737v0ar = [];
const smo38711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
smo38711.setAttribute('id', 'smo38711');
const smo38712 = new VF.Annotation('tired');
smo38712.setAttribute('id', 'smo38712');
smo38712.setFont('Merriweather', 11, 'normal');
smo38712.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38711.addModifier(smo38712);
smo38712.addClass('lyric lyric-0');
const smo38713 = new VF.Annotation('life');
smo38713.setAttribute('id', 'smo38713');
smo38713.setFont('Merriweather', 11, 'normal');
smo38713.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38711.addModifier(smo38713);
smo38713.addClass('lyric lyric-1');
const smo38714 = new VF.ChordSymbol();
smo38714.setAttribute('id', 'smo38714');
smo38714.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo38714.setFont('Roboto Slab', 14).setReportWidth(false);
smo38711.addModifier(smo38714, 0);
smo38737v0ar.push(smo38711);
const smo38715 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","cn/4/n"]}'))
smo38715.setAttribute('id', 'smo38715');
const smo38716 = new VF.Annotation('I');
smo38716.setAttribute('id', 'smo38716');
smo38716.setFont('Merriweather', 11, 'normal');
smo38716.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38715.addModifier(smo38716);
smo38716.addClass('lyric lyric-0');
const smo38718 = new VF.ChordSymbol();
smo38718.setAttribute('id', 'smo38718');
smo38718.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo38718.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo38718.setFont('Roboto Slab', 14).setReportWidth(false);
smo38715.addModifier(smo38718, 0);
smo38737v0ar.push(smo38715);
const smo38719 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","cn/4/n"]}'))
smo38719.setAttribute('id', 'smo38719');
const smo38720 = new VF.Annotation('am');
smo38720.setAttribute('id', 'smo38720');
smo38720.setFont('Merriweather', 11, 'normal');
smo38720.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38719.addModifier(smo38720);
smo38720.addClass('lyric lyric-0');
const smo38721 = new VF.Annotation('is');
smo38721.setAttribute('id', 'smo38721');
smo38721.setFont('Merriweather', 11, 'normal');
smo38721.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38719.addModifier(smo38721);
smo38721.addClass('lyric lyric-1 lyric-hyphen');
smo38737v0ar.push(smo38719);
smo38737v0.addTickables(smo38737v0ar)
fmtsmo387375.joinVoices([smo38737v0]);
const fmtsmo391445 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo39144v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo39144v0ar = [];
const smo39124 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","fn/3/n"]}'))
smo39124.setAttribute('id', 'smo39124');
smo39144v0ar.push(smo39124);
const smo39126 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","en/3/n"]}'))
smo39126.setAttribute('id', 'smo39126');
smo39144v0ar.push(smo39126);
const smo39128 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","en/3/n"]}'))
smo39128.setAttribute('id', 'smo39128');
smo39144v0ar.push(smo39128);
smo39144v0.addTickables(smo39144v0ar)
fmtsmo391445.joinVoices([smo39144v0]);
// create beam groups and tuplets for format grp smo39361 before formatting
const dirsmo40594 = smo38715.getStemDirection();
smo38715.setStemDirection(dirsmo40594);
smo38719.setStemDirection(dirsmo40594);
const smo40594 = new VF.Beam([smo38715,smo38719]);
const dirsmo40597 = smo39126.getStemDirection();
smo39126.setStemDirection(dirsmo40597);
smo39128.setStemDirection(dirsmo40597);
const smo40597 = new VF.Beam([smo39126,smo39128]);
 
// formatting measures in staff group smo39361
fmtsmo387375.format([smo38737v0,smo39144v0], 129);
const stavesmo38737 = new VF.Stave(43, 519, 203);
stavesmo38737.setAttribute('id', 'stavesmo38737');
stavesmo38737.setBegBarType(1);
stavesmo38737.addClef('treble');
const keysmo38737 = new VF.KeySignature('F');
keysmo38737.addToStave(stavesmo38737);
stavesmo38737.setContext(context);
stavesmo38737.draw();
smo38737v0.draw(context, stavesmo38737);
smo40594.setContext(context);
smo40594.draw();
const stavesmo39144 = new VF.Stave(43, 705, 203);
stavesmo39144.setAttribute('id', 'stavesmo39144');
stavesmo39144.setBegBarType(1);
stavesmo39144.addClef('bass');
const keysmo39144 = new VF.KeySignature('F');
keysmo39144.addToStave(stavesmo39144);
stavesmo39144.setContext(context);
stavesmo39144.draw();
smo39144v0.draw(context, stavesmo39144);
smo40597.setContext(context);
smo40597.draw();
const leftsmo39361stavesmo387371 = new VF.StaveConnector(stavesmo38737, stavesmo39144).setType(3);
leftsmo39361stavesmo387371.setContext(context).draw();
const fmtsmo387646 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo38764v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo38764v0ar = [];
const smo38738 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","fn/4/n"]}'))
smo38738.setAttribute('id', 'smo38738');
const smo38739 = new VF.Annotation('weak');
smo38739.setAttribute('id', 'smo38739');
smo38739.setFont('Merriweather', 11, 'normal');
smo38739.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38738.addModifier(smo38739);
smo38739.addClass('lyric lyric-0');
const smo38740 = new VF.Annotation('al');
smo38740.setAttribute('id', 'smo38740');
smo38740.setFont('Merriweather', 11, 'normal');
smo38740.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38738.addModifier(smo38740);
smo38740.addClass('lyric lyric-1 lyric-hyphen');
const smo38741 = new VF.ChordSymbol();
smo38741.setAttribute('id', 'smo38741');
smo38741.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo38741.setFont('Roboto Slab', 14).setReportWidth(false);
smo38738.addModifier(smo38741, 0);
smo38764v0ar.push(smo38738);
const smo38742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n","an/4/n"]}'))
smo38742.setAttribute('id', 'smo38742');
const smo387420acc = new VF.Accidental('n');
smo38742.addModifier(smo387420acc, 0);
const smo38743 = new VF.Annotation('I');
smo38743.setAttribute('id', 'smo38743');
smo38743.setFont('Merriweather', 11, 'normal');
smo38743.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38742.addModifier(smo38743);
smo38743.addClass('lyric lyric-0');
const smo38744 = new VF.Annotation('most');
smo38744.setAttribute('id', 'smo38744');
smo38744.setFont('Merriweather', 11, 'normal');
smo38744.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38742.addModifier(smo38744);
smo38744.addClass('lyric lyric-1');
const smo38745 = new VF.ChordSymbol();
smo38745.setAttribute('id', 'smo38745');
smo38745.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo38745.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo38745.setFont('Roboto Slab', 14).setReportWidth(false);
smo38742.addModifier(smo38745, 0);
smo38764v0ar.push(smo38742);
const smo38746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n","an/4/n"]}'))
smo38746.setAttribute('id', 'smo38746');
const smo38747 = new VF.Annotation('am');
smo38747.setAttribute('id', 'smo38747');
smo38747.setFont('Merriweather', 11, 'normal');
smo38747.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38746.addModifier(smo38747);
smo38747.addClass('lyric lyric-0');
smo38764v0ar.push(smo38746);
smo38764v0.addTickables(smo38764v0ar)
fmtsmo387646.joinVoices([smo38764v0]);
const fmtsmo391636 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo39163v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo39163v0ar = [];
const smo39145 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo39145.setAttribute('id', 'smo39145');
smo39163v0ar.push(smo39145);
const smo39146 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","fn/3/n"]}'))
smo39146.setAttribute('id', 'smo39146');
smo39163v0ar.push(smo39146);
const smo39147 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","fn/3/n"]}'))
smo39147.setAttribute('id', 'smo39147');
smo39163v0ar.push(smo39147);
smo39163v0.addTickables(smo39163v0ar)
fmtsmo391636.joinVoices([smo39163v0]);
// create beam groups and tuplets for format grp smo39361 before formatting
const dirsmo40600 = smo38742.getStemDirection();
smo38742.setStemDirection(dirsmo40600);
smo38746.setStemDirection(dirsmo40600);
const smo40600 = new VF.Beam([smo38742,smo38746]);
const dirsmo40603 = smo39146.getStemDirection();
smo39146.setStemDirection(dirsmo40603);
smo39147.setStemDirection(dirsmo40603);
const smo40603 = new VF.Beam([smo39146,smo39147]);
 
// formatting measures in staff group smo39361
fmtsmo387646.format([smo38764v0,smo39163v0], 161);
const stavesmo38764 = new VF.Stave(246, 519, 175);
stavesmo38764.setAttribute('id', 'stavesmo38764');
stavesmo38764.setBegBarType(VF.Barline.type.NONE);
stavesmo38764.setContext(context);
stavesmo38764.draw();
smo38764v0.draw(context, stavesmo38764);
smo40600.setContext(context);
smo40600.draw();
const stavesmo39163 = new VF.Stave(246, 705, 175);
stavesmo39163.setAttribute('id', 'stavesmo39163');
stavesmo39163.setBegBarType(VF.Barline.type.NONE);
stavesmo39163.setContext(context);
stavesmo39163.draw();
smo39163v0.draw(context, stavesmo39163);
smo40603.setContext(context);
smo40603.draw();
const fmtsmo387887 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo38788v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo38788v0ar = [];
const smo38765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n","gn/4/n"]}'))
smo38765.setAttribute('id', 'smo38765');
const smo38766 = new VF.Annotation('worn');
smo38766.setAttribute('id', 'smo38766');
smo38766.setFont('Merriweather', 11, 'normal');
smo38766.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38765.addModifier(smo38766);
smo38766.addClass('lyric lyric-0');
const smo38767 = new VF.Annotation('gone');
smo38767.setAttribute('id', 'smo38767');
smo38767.setFont('Merriweather', 11, 'normal');
smo38767.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38765.addModifier(smo38767);
smo38767.addClass('lyric lyric-1');
const smo38768 = new VF.ChordSymbol();
smo38768.setAttribute('id', 'smo38768');
smo38768.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo38768.setFont('Roboto Slab', 14).setReportWidth(false);
smo38765.addModifier(smo38768, 0);
smo38788v0ar.push(smo38765);
const smo38769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo38769.setAttribute('id', 'smo38769');
const smo387690acc = new VF.Accidental('n');
smo38769.addModifier(smo387690acc, 0);
const smo38770 = new VF.Annotation('-');
smo38770.setAttribute('id', 'smo38770');
smo38770.setFont('Merriweather', 11, 'normal');
smo38770.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38769.addModifier(smo38770);
smo38770.addClass('lyric lyric-0 lyric-hyphen');
const smo38771 = new VF.Annotation('-');
smo38771.setAttribute('id', 'smo38771');
smo38771.setFont('Merriweather', 11, 'normal');
smo38771.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38769.addModifier(smo38771);
smo38771.addClass('lyric lyric-1 lyric-hyphen');
const smo38772 = new VF.ChordSymbol();
smo38772.setAttribute('id', 'smo38772');
smo38772.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo38772.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo38772.setFont('Roboto Slab', 14).setReportWidth(false);
smo38769.addModifier(smo38772, 0);
smo38788v0ar.push(smo38769);
smo38788v0.addTickables(smo38788v0ar)
fmtsmo387887.joinVoices([smo38788v0]);
const fmtsmo391817 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo39181v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo39181v0ar = [];
const smo39164 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","en/3/n"]}'))
smo39164.setAttribute('id', 'smo39164');
smo39181v0ar.push(smo39164);
const smo39165 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","fn/3/n"]}'))
smo39165.setAttribute('id', 'smo39165');
smo39181v0ar.push(smo39165);
smo39181v0.addTickables(smo39181v0ar)
fmtsmo391817.joinVoices([smo39181v0]);
// create beam groups and tuplets for format grp smo39361 before formatting
 
// formatting measures in staff group smo39361
fmtsmo387887.format([smo38788v0,smo39181v0], 79);
const stavesmo38788 = new VF.Stave(421, 519, 93);
stavesmo38788.setAttribute('id', 'stavesmo38788');
stavesmo38788.setBegBarType(VF.Barline.type.NONE);
stavesmo38788.setContext(context);
stavesmo38788.draw();
smo38788v0.draw(context, stavesmo38788);
const stavesmo39181 = new VF.Stave(421, 705, 93);
stavesmo39181.setAttribute('id', 'stavesmo39181');
stavesmo39181.setBegBarType(VF.Barline.type.NONE);
stavesmo39181.setContext(context);
stavesmo39181.draw();
smo39181v0.draw(context, stavesmo39181);
const fmtsmo388158 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo38815v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo38815v0ar = [];
const smo38789 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n","gn/4/n"]}'))
smo38789.setAttribute('id', 'smo38789');
const smo38790 = new VF.Annotation('-');
smo38790.setAttribute('id', 'smo38790');
smo38790.setFont('Merriweather', 11, 'normal');
smo38790.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38789.addModifier(smo38790);
smo38790.addClass('lyric lyric-0 lyric-hyphen');
const smo38791 = new VF.Annotation('-');
smo38791.setAttribute('id', 'smo38791');
smo38791.setFont('Merriweather', 11, 'normal');
smo38791.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38789.addModifier(smo38791);
smo38791.addClass('lyric lyric-1 lyric-hyphen');
const smo38792 = new VF.ChordSymbol();
smo38792.setAttribute('id', 'smo38792');
smo38792.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo38792.setFont('Roboto Slab', 14).setReportWidth(false);
smo38789.addModifier(smo38792, 0);
smo38815v0ar.push(smo38789);
const smo38793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","an/4/n"]}'))
smo38793.setAttribute('id', 'smo38793');
const smo38794 = new VF.Annotation('Through');
smo38794.setAttribute('id', 'smo38794');
smo38794.setFont('Merriweather', 11, 'normal');
smo38794.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38793.addModifier(smo38794);
smo38794.addClass('lyric lyric-0');
const smo38795 = new VF.Annotation('at');
smo38795.setAttribute('id', 'smo38795');
smo38795.setFont('Merriweather', 11, 'normal');
smo38795.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38793.addModifier(smo38795);
smo38795.addClass('lyric lyric-1');
const smo38796 = new VF.ChordSymbol();
smo38796.setAttribute('id', 'smo38796');
smo38796.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo38796.setFont('Roboto Slab', 14).setReportWidth(false);
smo38793.addModifier(smo38796, 0);
smo38815v0ar.push(smo38793);
const smo38797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n"]}'))
smo38797.setAttribute('id', 'smo38797');
const smo38798 = new VF.Annotation('the');
smo38798.setAttribute('id', 'smo38798');
smo38798.setFont('Merriweather', 11, 'normal');
smo38798.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38797.addModifier(smo38798);
smo38798.addClass('lyric lyric-0');
const smo38799 = new VF.Annotation('the');
smo38799.setAttribute('id', 'smo38799');
smo38799.setFont('Merriweather', 11, 'normal');
smo38799.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38797.addModifier(smo38799);
smo38799.addClass('lyric lyric-1');
smo38815v0ar.push(smo38797);
smo38815v0.addTickables(smo38815v0ar)
fmtsmo388158.joinVoices([smo38815v0]);
const fmtsmo392008 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo39200v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo39200v0ar = [];
const smo39182 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n"]}'))
smo39182.setAttribute('id', 'smo39182');
smo39200v0ar.push(smo39182);
const smo39183 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo39183.setAttribute('id', 'smo39183');
smo39200v0ar.push(smo39183);
const smo39184 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo39184.setAttribute('id', 'smo39184');
smo39200v0ar.push(smo39184);
smo39200v0.addTickables(smo39200v0ar)
fmtsmo392008.joinVoices([smo39200v0]);
// create beam groups and tuplets for format grp smo39361 before formatting
const dirsmo40610 = smo38793.getStemDirection();
smo38793.setStemDirection(dirsmo40610);
smo38797.setStemDirection(dirsmo40610);
const smo40610 = new VF.Beam([smo38793,smo38797]);
const dirsmo40613 = smo39183.getStemDirection();
smo39183.setStemDirection(dirsmo40613);
smo39184.setStemDirection(dirsmo40613);
const smo40613 = new VF.Beam([smo39183,smo39184]);
 
// formatting measures in staff group smo39361
fmtsmo388158.format([smo38815v0,smo39200v0], 153);
const stavesmo38815 = new VF.Stave(514, 519, 167);
stavesmo38815.setAttribute('id', 'stavesmo38815');
stavesmo38815.setBegBarType(VF.Barline.type.NONE);
stavesmo38815.setContext(context);
stavesmo38815.draw();
smo38815v0.draw(context, stavesmo38815);
smo40610.setContext(context);
smo40610.draw();
const stavesmo39200 = new VF.Stave(514, 705, 167);
stavesmo39200.setAttribute('id', 'stavesmo39200');
stavesmo39200.setBegBarType(VF.Barline.type.NONE);
stavesmo39200.setContext(context);
stavesmo39200.draw();
smo39200v0.draw(context, stavesmo39200);
smo40613.setContext(context);
smo40613.draw();
const fmtsmo388429 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo38842v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo38842v0ar = [];
const smo38816 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","cn/5/n"]}'))
smo38816.setAttribute('id', 'smo38816');
const smo38817 = new VF.Annotation('storm,');
smo38817.setAttribute('id', 'smo38817');
smo38817.setFont('Merriweather', 11, 'normal');
smo38817.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38816.addModifier(smo38817);
smo38817.addClass('lyric lyric-0');
const smo38818 = new VF.Annotation('riv');
smo38818.setAttribute('id', 'smo38818');
smo38818.setFont('Merriweather', 11, 'normal');
smo38818.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38816.addModifier(smo38818);
smo38818.addClass('lyric lyric-1 lyric-hyphen');
const smo38819 = new VF.ChordSymbol();
smo38819.setAttribute('id', 'smo38819');
smo38819.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo38819.setFont('Roboto Slab', 14).setReportWidth(false);
smo38816.addModifier(smo38819, 0);
smo38842v0ar.push(smo38816);
const smo38820 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
smo38820.setAttribute('id', 'smo38820');
const smo38821 = new VF.Annotation('through');
smo38821.setAttribute('id', 'smo38821');
smo38821.setFont('Merriweather', 11, 'normal');
smo38821.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38820.addModifier(smo38821);
smo38821.addClass('lyric lyric-0');
const smo38822 = new VF.Annotation('er');
smo38822.setAttribute('id', 'smo38822');
smo38822.setFont('Merriweather', 11, 'normal');
smo38822.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38820.addModifier(smo38822);
smo38822.addClass('lyric lyric-1');
const smo38823 = new VF.ChordSymbol();
smo38823.setAttribute('id', 'smo38823');
smo38823.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo38823.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo38823.setFont('Roboto Slab', 14).setReportWidth(false);
smo38820.addModifier(smo38823, 0);
smo38842v0ar.push(smo38820);
const smo38824 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
smo38824.setAttribute('id', 'smo38824');
const smo38825 = new VF.Annotation('the');
smo38825.setAttribute('id', 'smo38825');
smo38825.setFont('Merriweather', 11, 'normal');
smo38825.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38824.addModifier(smo38825);
smo38825.addClass('lyric lyric-0');
const smo38826 = new VF.Annotation('I');
smo38826.setAttribute('id', 'smo38826');
smo38826.setFont('Merriweather', 11, 'normal');
smo38826.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38824.addModifier(smo38826);
smo38826.addClass('lyric lyric-1');
smo38842v0ar.push(smo38824);
smo38842v0.addTickables(smo38842v0ar)
fmtsmo388429.joinVoices([smo38842v0]);
const fmtsmo392199 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo39219v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo39219v0ar = [];
const smo39201 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo39201.setAttribute('id', 'smo39201');
smo39219v0ar.push(smo39201);
const smo39202 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n"]}'))
smo39202.setAttribute('id', 'smo39202');
smo39219v0ar.push(smo39202);
const smo39203 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n"]}'))
smo39203.setAttribute('id', 'smo39203');
smo39219v0ar.push(smo39203);
smo39219v0.addTickables(smo39219v0ar)
fmtsmo392199.joinVoices([smo39219v0]);
// create beam groups and tuplets for format grp smo39361 before formatting
const dirsmo40616 = smo38820.getStemDirection();
smo38820.setStemDirection(dirsmo40616);
smo38824.setStemDirection(dirsmo40616);
const smo40616 = new VF.Beam([smo38820,smo38824]);
const dirsmo40619 = smo39202.getStemDirection();
smo39202.setStemDirection(dirsmo40619);
smo39203.setStemDirection(dirsmo40619);
const smo40619 = new VF.Beam([smo39202,smo39203]);
 
// formatting measures in staff group smo39361
fmtsmo388429.format([smo38842v0,smo39219v0], 196);
const stavesmo38842 = new VF.Stave(681, 519, 210);
stavesmo38842.setAttribute('id', 'stavesmo38842');
stavesmo38842.setBegBarType(VF.Barline.type.NONE);
stavesmo38842.setContext(context);
stavesmo38842.draw();
smo38842v0.draw(context, stavesmo38842);
smo40616.setContext(context);
smo40616.draw();
const stavesmo39219 = new VF.Stave(681, 705, 210);
stavesmo39219.setAttribute('id', 'stavesmo39219');
stavesmo39219.setBegBarType(VF.Barline.type.NONE);
stavesmo39219.setContext(context);
stavesmo39219.draw();
smo39219v0.draw(context, stavesmo39219);
smo40619.setContext(context);
smo40619.draw();
const fmtsmo3886910 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo38869v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo38869v0ar = [];
const smo38843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","an/4/n"]}'))
smo38843.setAttribute('id', 'smo38843');
const smo38844 = new VF.Annotation('night');
smo38844.setAttribute('id', 'smo38844');
smo38844.setFont('Merriweather', 11, 'normal');
smo38844.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38843.addModifier(smo38844);
smo38844.addClass('lyric lyric-0');
const smo38845 = new VF.Annotation('stand,');
smo38845.setAttribute('id', 'smo38845');
smo38845.setFont('Merriweather', 11, 'normal');
smo38845.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38843.addModifier(smo38845);
smo38845.addClass('lyric lyric-1');
const smo38846 = new VF.ChordSymbol();
smo38846.setAttribute('id', 'smo38846');
smo38846.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo38846.setFont('Roboto Slab', 14).setReportWidth(false);
smo38843.addModifier(smo38846, 0);
smo38869v0ar.push(smo38843);
const smo38847 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n","an/4/n"]}'))
smo38847.setAttribute('id', 'smo38847');
const smo388470acc = new VF.Accidental('b');
smo38847.addModifier(smo388470acc, 0);
const smo38848 = new VF.Annotation('lead');
smo38848.setAttribute('id', 'smo38848');
smo38848.setFont('Merriweather', 11, 'normal');
smo38848.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38847.addModifier(smo38848);
smo38848.addClass('lyric lyric-0');
const smo38849 = new VF.Annotation('guide');
smo38849.setAttribute('id', 'smo38849');
smo38849.setFont('Merriweather', 11, 'normal');
smo38849.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38847.addModifier(smo38849);
smo38849.addClass('lyric lyric-1');
const smo38850 = new VF.ChordSymbol();
smo38850.setAttribute('id', 'smo38850');
smo38850.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo38850.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo38850.setFont('Roboto Slab', 14).setReportWidth(false);
smo38847.addModifier(smo38850, 0);
smo38869v0ar.push(smo38847);
const smo38851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n","an/4/n"]}'))
smo38851.setAttribute('id', 'smo38851');
const smo38852 = new VF.Annotation('me');
smo38852.setAttribute('id', 'smo38852');
smo38852.setFont('Merriweather', 11, 'normal');
smo38852.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38851.addModifier(smo38852);
smo38852.addClass('lyric lyric-0');
const smo38853 = new VF.Annotation('me');
smo38853.setAttribute('id', 'smo38853');
smo38853.setFont('Merriweather', 11, 'normal');
smo38853.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38851.addModifier(smo38853);
smo38853.addClass('lyric lyric-1');
smo38869v0ar.push(smo38851);
smo38869v0.addTickables(smo38869v0ar)
fmtsmo3886910.joinVoices([smo38869v0]);
const fmtsmo3923810 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo39238v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo39238v0ar = [];
const smo39220 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","cn/4/n"]}'))
smo39220.setAttribute('id', 'smo39220');
smo39238v0ar.push(smo39220);
const smo39221 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","cn/4/n"]}'))
smo39221.setAttribute('id', 'smo39221');
smo39238v0ar.push(smo39221);
const smo39222 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","cn/4/n"]}'))
smo39222.setAttribute('id', 'smo39222');
smo39238v0ar.push(smo39222);
smo39238v0.addTickables(smo39238v0ar)
fmtsmo3923810.joinVoices([smo39238v0]);
// create beam groups and tuplets for format grp smo39361 before formatting
const dirsmo40622 = smo38847.getStemDirection();
smo38847.setStemDirection(dirsmo40622);
smo38851.setStemDirection(dirsmo40622);
const smo40622 = new VF.Beam([smo38847,smo38851]);
const dirsmo40625 = smo39221.getStemDirection();
smo39221.setStemDirection(dirsmo40625);
smo39222.setStemDirection(dirsmo40625);
const smo40625 = new VF.Beam([smo39221,smo39222]);
 
// formatting measures in staff group smo39361
fmtsmo3886910.format([smo38869v0,smo39238v0], 173);
const stavesmo38869 = new VF.Stave(891, 519, 187);
stavesmo38869.setAttribute('id', 'stavesmo38869');
stavesmo38869.setBegBarType(VF.Barline.type.NONE);
stavesmo38869.setContext(context);
stavesmo38869.draw();
smo38869v0.draw(context, stavesmo38869);
smo40622.setContext(context);
smo40622.draw();
const stavesmo39238 = new VF.Stave(891, 705, 187);
stavesmo39238.setAttribute('id', 'stavesmo39238');
stavesmo39238.setBegBarType(VF.Barline.type.NONE);
stavesmo39238.setContext(context);
stavesmo39238.draw();
smo39238v0.draw(context, stavesmo39238);
smo40625.setContext(context);
smo40625.draw();
const rightsmo39361stavesmo388691 = new VF.StaveConnector(stavesmo38869, stavesmo39238).setType(0);
rightsmo39361stavesmo388691.setContext(context).draw();
const fmtsmo3889611 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo38896v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo38896v0ar = [];
const smo38870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","gn/4/n"]}'))
smo38870.setAttribute('id', 'smo38870');
const smo38871 = new VF.Annotation('on');
smo38871.setAttribute('id', 'smo38871');
smo38871.setFont('Merriweather', 11, 'normal');
smo38871.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38870.addModifier(smo38871);
smo38871.addClass('lyric lyric-0');
const smo38872 = new VF.Annotation('feet,');
smo38872.setAttribute('id', 'smo38872');
smo38872.setFont('Merriweather', 11, 'normal');
smo38872.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38870.addModifier(smo38872);
smo38872.addClass('lyric lyric-1');
const smo38873 = new VF.ChordSymbol();
smo38873.setAttribute('id', 'smo38873');
smo38873.addGlyphOrText('Gm', JSON.parse('{"text":"Gm","symbolModifier":1}'));
smo38873.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo38873.setFont('Roboto Slab', 14).setReportWidth(false);
smo38870.addModifier(smo38873, 0);
smo38896v0ar.push(smo38870);
const smo38874 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo38874.setAttribute('id', 'smo38874');
const smo38875 = new VF.Annotation('to');
smo38875.setAttribute('id', 'smo38875');
smo38875.setFont('Merriweather', 11, 'normal');
smo38875.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38874.addModifier(smo38875);
smo38875.addClass('lyric lyric-0');
const smo38876 = new VF.Annotation('hold');
smo38876.setAttribute('id', 'smo38876');
smo38876.setFont('Merriweather', 11, 'normal');
smo38876.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38874.addModifier(smo38876);
smo38876.addClass('lyric lyric-1');
const smo38877 = new VF.ChordSymbol();
smo38877.setAttribute('id', 'smo38877');
smo38877.addGlyphOrText('B', JSON.parse('{"text":"B","symbolModifier":1}'));
smo38877.addGlyph('b', JSON.parse('{"glyph":"accidentalFlat","symbolModifier":1}'));
smo38877.setFont('Roboto Slab', 14).setReportWidth(false);
smo38874.addModifier(smo38877, 0);
smo38896v0ar.push(smo38874);
const smo38878 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo38878.setAttribute('id', 'smo38878');
const smo38879 = new VF.Annotation('the');
smo38879.setAttribute('id', 'smo38879');
smo38879.setFont('Merriweather', 11, 'normal');
smo38879.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38878.addModifier(smo38879);
smo38879.addClass('lyric lyric-0');
const smo38880 = new VF.Annotation('my');
smo38880.setAttribute('id', 'smo38880');
smo38880.setFont('Merriweather', 11, 'normal');
smo38880.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38878.addModifier(smo38880);
smo38880.addClass('lyric lyric-1');
smo38896v0ar.push(smo38878);
smo38896v0.addTickables(smo38896v0ar)
fmtsmo3889611.joinVoices([smo38896v0]);
const fmtsmo3925711 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo39257v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo39257v0ar = [];
const smo39239 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo39239.setAttribute('id', 'smo39239');
smo39257v0ar.push(smo39239);
const smo39240 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo39240.setAttribute('id', 'smo39240');
smo39257v0ar.push(smo39240);
const smo39241 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo39241.setAttribute('id', 'smo39241');
smo39257v0ar.push(smo39241);
smo39257v0.addTickables(smo39257v0ar)
fmtsmo3925711.joinVoices([smo39257v0]);
// create beam groups and tuplets for format grp smo39361 before formatting
const dirsmo40634 = smo38874.getStemDirection();
smo38874.setStemDirection(dirsmo40634);
smo38878.setStemDirection(dirsmo40634);
const smo40634 = new VF.Beam([smo38874,smo38878]);
const dirsmo40637 = smo39240.getStemDirection();
smo39240.setStemDirection(dirsmo40637);
smo39241.setStemDirection(dirsmo40637);
const smo40637 = new VF.Beam([smo39240,smo39241]);
 
// formatting measures in staff group smo39361
fmtsmo3889611.format([smo38896v0,smo39257v0], 161);
const stavesmo38896 = new VF.Stave(43, 854, 236);
stavesmo38896.setAttribute('id', 'stavesmo38896');
stavesmo38896.setBegBarType(1);
stavesmo38896.addClef('treble');
const keysmo38896 = new VF.KeySignature('F');
keysmo38896.addToStave(stavesmo38896);
stavesmo38896.setContext(context);
stavesmo38896.draw();
smo38896v0.draw(context, stavesmo38896);
smo40634.setContext(context);
smo40634.draw();
const stavesmo39257 = new VF.Stave(43, 1040, 236);
stavesmo39257.setAttribute('id', 'stavesmo39257');
stavesmo39257.setBegBarType(1);
stavesmo39257.addClef('bass');
const keysmo39257 = new VF.KeySignature('F');
keysmo39257.addToStave(stavesmo39257);
stavesmo39257.setContext(context);
stavesmo39257.draw();
smo39257v0.draw(context, stavesmo39257);
smo40637.setContext(context);
smo40637.draw();
const leftsmo39361stavesmo388961 = new VF.StaveConnector(stavesmo38896, stavesmo39257).setType(3);
leftsmo39361stavesmo388961.setContext(context).draw();
const fmtsmo3892412 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo38924v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo38924v0ar = [];
const smo38897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo38897.setAttribute('id', 'smo38897');
const smo38898 = new VF.Annotation('li');
smo38898.setAttribute('id', 'smo38898');
smo38898.setFont('Merriweather', 11, 'normal');
smo38898.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38897.addModifier(smo38898);
smo38898.addClass('lyric lyric-0 lyric-hyphen');
const smo38899 = new VF.Annotation('ha');
smo38899.setAttribute('id', 'smo38899');
smo38899.setFont('Merriweather', 11, 'normal');
smo38899.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38897.addModifier(smo38899);
smo38899.addClass('lyric lyric-1 lyric-hyphen');
smo38924v0ar.push(smo38897);
const smo38900 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo38900.setAttribute('id', 'smo38900');
smo38900.addModifier(new VF.Dot(), 0);
smo38900.addModifier(new VF.Dot(), 1);
const smo38901 = new VF.Annotation('ght');
smo38901.setAttribute('id', 'smo38901');
smo38901.setFont('Merriweather', 11, 'normal');
smo38901.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38900.addModifier(smo38901);
smo38901.addClass('lyric lyric-0');
const smo38902 = new VF.Annotation('nd');
smo38902.setAttribute('id', 'smo38902');
smo38902.setFont('Merriweather', 11, 'normal');
smo38902.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38900.addModifier(smo38902);
smo38902.addClass('lyric lyric-1');
smo38924v0ar.push(smo38900);
const smo38903 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo38903.setAttribute('id', 'smo38903');
const smo38904 = new VF.Annotation('Take');
smo38904.setAttribute('id', 'smo38904');
smo38904.setFont('Merriweather', 11, 'normal');
smo38904.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38903.addModifier(smo38904);
smo38904.addClass('lyric lyric-0');
const smo38906 = new VF.ChordSymbol();
smo38906.setAttribute('id', 'smo38906');
smo38906.addGlyphOrText('B', JSON.parse('{"text":"B","symbolModifier":1}'));
smo38906.addGlyph('diminished', JSON.parse('{"glyph":"csymDiminished","symbolModifier":3}'));
smo38906.setFont('Roboto Slab', 14).setReportWidth(false);
smo38903.addModifier(smo38906, 0);
smo38924v0ar.push(smo38903);
const smo38907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo38907.setAttribute('id', 'smo38907');
const smo38908 = new VF.Annotation('my');
smo38908.setAttribute('id', 'smo38908');
smo38908.setFont('Merriweather', 11, 'normal');
smo38908.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38907.addModifier(smo38908);
smo38908.addClass('lyric lyric-0');
smo38924v0ar.push(smo38907);
smo38924v0.addTickables(smo38924v0ar)
fmtsmo3892412.joinVoices([smo38924v0]);
const fmtsmo3927712 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo39277v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo39277v0ar = [];
const smo39258 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","fn/3/n"]}'))
smo39258.setAttribute('id', 'smo39258');
smo39277v0ar.push(smo39258);
const smo39259 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo39259.setAttribute('id', 'smo39259');
smo39259.addModifier(new VF.Dot(), 0);
smo39259.addModifier(new VF.Dot(), 1);
smo39277v0ar.push(smo39259);
const smo39260 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n","ab/3/n"]}'))
smo39260.setAttribute('id', 'smo39260');
const smo392600acc = new VF.Accidental('n');
smo39260.addModifier(smo392600acc, 0);
const smo392601acc = new VF.Accidental('b');
smo39260.addModifier(smo392601acc, 1);
smo39277v0ar.push(smo39260);
const smo39261 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n","gn/3/n"]}'))
smo39261.setAttribute('id', 'smo39261');
smo39277v0ar.push(smo39261);
smo39277v0.addTickables(smo39277v0ar)
fmtsmo3927712.joinVoices([smo39277v0]);
// create beam groups and tuplets for format grp smo39361 before formatting
const dirsmo40640 = smo38903.getStemDirection();
smo38903.setStemDirection(dirsmo40640);
smo38907.setStemDirection(dirsmo40640);
const smo40640 = new VF.Beam([smo38903,smo38907]);
const dirsmo40643 = smo39260.getStemDirection();
smo39260.setStemDirection(dirsmo40643);
smo39261.setStemDirection(dirsmo40643);
const smo40643 = new VF.Beam([smo39260,smo39261]);
 
// formatting measures in staff group smo39361
fmtsmo3892412.format([smo38924v0,smo39277v0], 191);
const stavesmo38924 = new VF.Stave(279, 854, 205);
stavesmo38924.setAttribute('id', 'stavesmo38924');
stavesmo38924.setBegBarType(VF.Barline.type.NONE);
stavesmo38924.setContext(context);
stavesmo38924.draw();
smo38924v0.draw(context, stavesmo38924);
smo40640.setContext(context);
smo40640.draw();
const stavesmo39277 = new VF.Stave(279, 1040, 205);
stavesmo39277.setAttribute('id', 'stavesmo39277');
stavesmo39277.setBegBarType(VF.Barline.type.NONE);
stavesmo39277.setContext(context);
stavesmo39277.draw();
smo39277v0.draw(context, stavesmo39277);
smo40643.setContext(context);
smo40643.draw();
const fmtsmo3895113 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo38951v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo38951v0ar = [];
const smo38925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo38925.setAttribute('id', 'smo38925');
const smo38926 = new VF.Annotation('ha');
smo38926.setAttribute('id', 'smo38926');
smo38926.setFont('Merriweather', 11, 'normal');
smo38926.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38925.addModifier(smo38926);
smo38926.addClass('lyric lyric-0 lyric-hyphen');
const smo38927 = new VF.ChordSymbol();
smo38927.setAttribute('id', 'smo38927');
smo38927.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo38927.setFont('Roboto Slab', 14).setReportWidth(false);
smo38925.addModifier(smo38927, 0);
smo38951v0ar.push(smo38925);
const smo38928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo38928.setAttribute('id', 'smo38928');
smo38928.addModifier(new VF.Dot(), 0);
const smo38929 = new VF.Annotation('nd');
smo38929.setAttribute('id', 'smo38929');
smo38929.setFont('Merriweather', 11, 'normal');
smo38929.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38928.addModifier(smo38929);
smo38929.addClass('lyric lyric-0');
smo38951v0ar.push(smo38928);
const smo38930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo38930.setAttribute('id', 'smo38930');
const smo38931 = new VF.Annotation('pre');
smo38931.setAttribute('id', 'smo38931');
smo38931.setFont('Merriweather', 11, 'normal');
smo38931.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38930.addModifier(smo38931);
smo38931.addClass('lyric lyric-0 lyric-hyphen');
const smo38932 = new VF.ChordSymbol();
smo38932.setAttribute('id', 'smo38932');
smo38932.addGlyphOrText('Dm', JSON.parse('{"text":"Dm","symbolModifier":1}'));
smo38932.setFont('Roboto Slab', 14).setReportWidth(false);
smo38930.addModifier(smo38932, 0);
smo38951v0ar.push(smo38930);
const smo38933 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","gn/4/n"]}'))
smo38933.setAttribute('id', 'smo38933');
const smo38934 = new VF.Annotation('cious');
smo38934.setAttribute('id', 'smo38934');
smo38934.setFont('Merriweather', 11, 'normal');
smo38934.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38933.addModifier(smo38934);
smo38934.addClass('lyric lyric-0');
const smo38935 = new VF.ChordSymbol();
smo38935.setAttribute('id', 'smo38935');
smo38935.addGlyphOrText('A', JSON.parse('{"text":"A","symbolModifier":1}'));
smo38935.addGlyph('augmented', JSON.parse('{"glyph":"csymAugmented","symbolModifier":3}'));
smo38935.addGlyphOrText('5', JSON.parse('{"text":"5","symbolModifier":3}'));
smo38935.setFont('Roboto Slab', 14).setReportWidth(false);
smo38933.addModifier(smo38935, 0);
smo38951v0ar.push(smo38933);
smo38951v0.addTickables(smo38951v0ar)
fmtsmo3895113.joinVoices([smo38951v0]);
const fmtsmo3929613 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo39296v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo39296v0ar = [];
const smo39278 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","an/3/n"]}'))
smo39278.setAttribute('id', 'smo39278');
smo39296v0ar.push(smo39278);
const smo39279 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","an/3/n"]}'))
smo39279.setAttribute('id', 'smo39279');
smo39296v0ar.push(smo39279);
const smo39280 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["db/3/n","bn/3/n"]}'))
smo39280.setAttribute('id', 'smo39280');
const smo392800acc = new VF.Accidental('b');
smo39280.addModifier(smo392800acc, 0);
const smo392801acc = new VF.Accidental('n');
smo39280.addModifier(smo392801acc, 1);
smo39296v0ar.push(smo39280);
smo39296v0.addTickables(smo39296v0ar)
fmtsmo3929613.joinVoices([smo39296v0]);
// create beam groups and tuplets for format grp smo39361 before formatting
const dirsmo40646 = smo38930.getStemDirection();
smo38930.setStemDirection(dirsmo40646);
smo38933.setStemDirection(dirsmo40646);
const smo40646 = new VF.Beam([smo38930,smo38933]);
const dirsmo40649 = smo39279.getStemDirection();
smo39279.setStemDirection(dirsmo40649);
smo39280.setStemDirection(dirsmo40649);
const smo40649 = new VF.Beam([smo39279,smo39280]);
 
// formatting measures in staff group smo39361
fmtsmo3895113.format([smo38951v0,smo39296v0], 186);
const stavesmo38951 = new VF.Stave(484, 854, 200);
stavesmo38951.setAttribute('id', 'stavesmo38951');
stavesmo38951.setBegBarType(VF.Barline.type.NONE);
stavesmo38951.setContext(context);
stavesmo38951.draw();
smo38951v0.draw(context, stavesmo38951);
smo40646.setContext(context);
smo40646.draw();
const stavesmo39296 = new VF.Stave(484, 1040, 200);
stavesmo39296.setAttribute('id', 'stavesmo39296');
stavesmo39296.setBegBarType(VF.Barline.type.NONE);
stavesmo39296.setContext(context);
stavesmo39296.draw();
smo39296v0.draw(context, stavesmo39296);
smo40649.setContext(context);
smo40649.draw();
const fmtsmo3897514 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo38975v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo38975v0ar = [];
const smo38952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","an/4/n"]}'))
smo38952.setAttribute('id', 'smo38952');
const smo38953 = new VF.Annotation('Lord,');
smo38953.setAttribute('id', 'smo38953');
smo38953.setFont('Merriweather', 11, 'normal');
smo38953.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38952.addModifier(smo38953);
smo38953.addClass('lyric lyric-0');
const smo38954 = new VF.ChordSymbol();
smo38954.setAttribute('id', 'smo38954');
smo38954.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo38954.setFont('Roboto Slab', 14).setReportWidth(false);
smo38952.addModifier(smo38954, 0);
smo38975v0ar.push(smo38952);
const smo38955 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n","gn/4/n"]}'))
smo38955.setAttribute('id', 'smo38955');
smo38955.addModifier(new VF.Dot(), 0);
smo38955.addModifier(new VF.Dot(), 1);
const smo38956 = new VF.Annotation('lead');
smo38956.setAttribute('id', 'smo38956');
smo38956.setFont('Merriweather', 11, 'normal');
smo38956.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38955.addModifier(smo38956);
smo38956.addClass('lyric lyric-0');
const smo38957 = new VF.ChordSymbol();
smo38957.setAttribute('id', 'smo38957');
smo38957.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo38957.addGlyph('leftParen', JSON.parse('{"glyph":"csymParensLeftTall","symbolModifier":3}'));
smo38957.addGlyphOrText('sus4', JSON.parse('{"text":"sus4","symbolModifier":3}'));
smo38957.addGlyph('rightParen', JSON.parse('{"glyph":"csymParensRightTall","symbolModifier":3}'));
smo38957.setFont('Roboto Slab', 14).setReportWidth(false);
smo38955.addModifier(smo38957, 0);
smo38975v0ar.push(smo38955);
const smo38958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n","fn/4/n"]}'))
smo38958.setAttribute('id', 'smo38958');
const smo38959 = new VF.Annotation('me');
smo38959.setAttribute('id', 'smo38959');
smo38959.setFont('Merriweather', 11, 'normal');
smo38959.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38958.addModifier(smo38959);
smo38959.addClass('lyric lyric-0');
smo38975v0ar.push(smo38958);
smo38975v0.addTickables(smo38975v0ar)
fmtsmo3897514.joinVoices([smo38975v0]);
const fmtsmo3931514 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo39315v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo39315v0ar = [];
const smo39297 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo39297.setAttribute('id', 'smo39297');
smo39315v0ar.push(smo39297);
const smo39298 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["cn/3/n","bb/3/n"]}'))
smo39298.setAttribute('id', 'smo39298');
smo39298.addModifier(new VF.Dot(), 0);
smo39298.addModifier(new VF.Dot(), 1);
smo39315v0ar.push(smo39298);
const smo39299 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","bb/3/n"]}'))
smo39299.setAttribute('id', 'smo39299');
smo39315v0ar.push(smo39299);
smo39315v0.addTickables(smo39315v0ar)
fmtsmo3931514.joinVoices([smo39315v0]);
// create beam groups and tuplets for format grp smo39361 before formatting
const dirsmo40652 = smo38955.getStemDirection();
smo38955.setStemDirection(dirsmo40652);
smo38958.setStemDirection(dirsmo40652);
const smo40652 = new VF.Beam([smo38955,smo38958]);
const dirsmo40655 = smo39298.getStemDirection();
smo39298.setStemDirection(dirsmo40655);
smo39299.setStemDirection(dirsmo40655);
const smo40655 = new VF.Beam([smo39298,smo39299]);
 
// formatting measures in staff group smo39361
fmtsmo3897514.format([smo38975v0,smo39315v0], 164);
const stavesmo38975 = new VF.Stave(684, 854, 178);
stavesmo38975.setAttribute('id', 'stavesmo38975');
stavesmo38975.setBegBarType(VF.Barline.type.NONE);
stavesmo38975.setContext(context);
stavesmo38975.draw();
smo38975v0.draw(context, stavesmo38975);
smo40652.setContext(context);
smo40652.draw();
const stavesmo39315 = new VF.Stave(684, 1040, 178);
stavesmo39315.setAttribute('id', 'stavesmo39315');
stavesmo39315.setBegBarType(VF.Barline.type.NONE);
stavesmo39315.setContext(context);
stavesmo39315.draw();
smo39315v0.draw(context, stavesmo39315);
smo40655.setContext(context);
smo40655.draw();
const fmtsmo3899415 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo38994v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo38994v0ar = [];
const smo38976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n","fn/4/n"]}'))
smo38976.setAttribute('id', 'smo38976');
smo38976.addModifier(new VF.Dot(), 0);
smo38976.addModifier(new VF.Dot(), 1);
const smo38977 = new VF.Annotation('home');
smo38977.setAttribute('id', 'smo38977');
smo38977.setFont('Merriweather', 11, 'normal');
smo38977.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38976.addModifier(smo38977);
smo38977.addClass('lyric lyric-0 lyric-hyphen');
const smo38978 = new VF.ChordSymbol();
smo38978.setAttribute('id', 'smo38978');
smo38978.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo38978.setFont('Roboto Slab', 14).setReportWidth(false);
smo38976.addModifier(smo38978, 0);
smo38994v0ar.push(smo38976);
smo38994v0.addTickables(smo38994v0ar)
fmtsmo3899415.joinVoices([smo38994v0]);
const fmtsmo3933215 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo39332v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo39332v0ar = [];
const smo39316 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo39316.setAttribute('id', 'smo39316');
smo39316.addModifier(new VF.Dot(), 0);
smo39316.addModifier(new VF.Dot(), 1);
smo39332v0ar.push(smo39316);
smo39332v0.addTickables(smo39332v0ar)
fmtsmo3933215.joinVoices([smo39332v0]);
// create beam groups and tuplets for format grp smo39361 before formatting
 
// formatting measures in staff group smo39361
fmtsmo3899415.format([smo38994v0,smo39332v0], 50);
const stavesmo38994 = new VF.Stave(862, 854, 65);
stavesmo38994.setAttribute('id', 'stavesmo38994');
stavesmo38994.setBegBarType(VF.Barline.type.NONE);
stavesmo38994.setEndBarType(2);
stavesmo38994.setContext(context);
stavesmo38994.draw();
smo38994v0.draw(context, stavesmo38994);
const stavesmo39332 = new VF.Stave(862, 1040, 65);
stavesmo39332.setAttribute('id', 'stavesmo39332');
stavesmo39332.setBegBarType(VF.Barline.type.NONE);
stavesmo39332.setEndBarType(2);
stavesmo39332.setContext(context);
stavesmo39332.draw();
smo39332v0.draw(context, stavesmo39332);
const fmtsmo3901716 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo39017v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo39017v0ar = [];
const smo38995 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n","fn/4/n"]}'))
smo38995.setAttribute('id', 'smo38995');
smo39017v0ar.push(smo38995);
const smo38997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo38997.setAttribute('id', 'smo38997');
const smo38998 = new VF.Annotation('When');
smo38998.setAttribute('id', 'smo38998');
smo38998.setFont('Merriweather', 11, 'normal');
smo38998.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38997.addModifier(smo38998);
smo38998.addClass('lyric lyric-0');
smo39017v0ar.push(smo38997);
const smo38999 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo38999.setAttribute('id', 'smo38999');
const smo39000 = new VF.Annotation('the');
smo39000.setAttribute('id', 'smo39000');
smo39000.setFont('Merriweather', 11, 'normal');
smo39000.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38999.addModifier(smo39000);
smo39000.addClass('lyric lyric-0');
smo39017v0ar.push(smo38999);
smo39017v0.addTickables(smo39017v0ar)
fmtsmo3901716.joinVoices([smo39017v0]);
const fmtsmo3935216 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo39352v0 = new VF.Voice(JSON.parse('{"num_beats":3,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo39352v0ar = [];
const smo39333 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo39333.setAttribute('id', 'smo39333');
smo39352v0ar.push(smo39333);
const smo39334 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo39334.setAttribute('id', 'smo39334');
smo39352v0ar.push(smo39334);
const smo39335 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n","fn/3/n"]}'))
smo39335.setAttribute('id', 'smo39335');
smo39352v0ar.push(smo39335);
smo39352v0.addTickables(smo39352v0ar)
fmtsmo3935216.joinVoices([smo39352v0]);
// create beam groups and tuplets for format grp smo39361 before formatting
const dirsmo40660 = smo38997.getStemDirection();
smo38997.setStemDirection(dirsmo40660);
smo38999.setStemDirection(dirsmo40660);
const smo40660 = new VF.Beam([smo38997,smo38999]);
const dirsmo40662 = smo39334.getStemDirection();
smo39334.setStemDirection(dirsmo40662);
smo39335.setStemDirection(dirsmo40662);
const smo40662 = new VF.Beam([smo39334,smo39335]);
 
// formatting measures in staff group smo39361
fmtsmo3901716.format([smo39017v0,smo39352v0], 133);
const stavesmo39017 = new VF.Stave(927, 854, 151);
stavesmo39017.setAttribute('id', 'stavesmo39017');
stavesmo39017.setBegBarType(VF.Barline.type.NONE);
stavesmo39017.setEndBarType(5);
stavesmo39017.setContext(context);
stavesmo39017.draw();
smo39017v0.draw(context, stavesmo39017);
smo40660.setContext(context);
smo40660.draw();
const stavesmo39352 = new VF.Stave(927, 1040, 151);
stavesmo39352.setAttribute('id', 'stavesmo39352');
stavesmo39352.setBegBarType(VF.Barline.type.NONE);
stavesmo39352.setEndBarType(5);
stavesmo39352.setContext(context);
stavesmo39352.draw();
smo39352v0.draw(context, stavesmo39352);
smo40662.setContext(context);
smo40662.draw();
// modifier from 0-15-0-0 to 0-16-0-0
const smo40794 = new VF.StaveTie({ first_note: smo38976, last_note: smo38995, 
          firstNote: smo38976, lastNote: smo38995, first_indices: [0,1], last_indices: [0,1]});
smo40794.setContext(context).draw();
// modifier from 1-15-0-0 to 1-16-0-0
const smo40795 = new VF.StaveTie({ first_note: smo39316, last_note: smo39333, 
          firstNote: smo39316, lastNote: smo39333, first_indices: [0,1], last_indices: [0,1]});
smo40795.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo38584').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo38602').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo38603').setAttributeNS('', 'transform', 'translate(0 24)');
context.svg.getElementById('vf-smo38608').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo38606').setAttributeNS('', 'transform', 'translate(0 33)');
context.svg.getElementById('vf-smo38610').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo38611').setAttributeNS('', 'transform', 'translate(0 31)');
context.svg.getElementById('vf-smo38629').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo38630').setAttributeNS('', 'transform', 'translate(0 32)');
context.svg.getElementById('vf-smo38634').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo38633').setAttributeNS('', 'transform', 'translate(0 37)');
context.svg.getElementById('vf-smo38636').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo38637').setAttributeNS('', 'transform', 'translate(0 38)');
context.svg.getElementById('vf-smo38656').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo38657').setAttributeNS('', 'transform', 'translate(0 36)');
context.svg.getElementById('vf-smo38660').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo38661').setAttributeNS('', 'transform', 'translate(0 32)');
context.svg.getElementById('vf-smo38664').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo38665').setAttributeNS('', 'transform', 'translate(0 34)');
context.svg.getElementById('vf-smo38683').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo38684').setAttributeNS('', 'transform', 'translate(0 34)');
context.svg.getElementById('vf-smo38686').setAttributeNS('', 'transform', 'translate(0 24)');
context.svg.getElementById('vf-smo38687').setAttributeNS('', 'transform', 'translate(0 43)');
context.svg.getElementById('vf-smo38689').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo38690').setAttributeNS('', 'transform', 'translate(0 28)');
context.svg.getElementById('vf-smo38693').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo38694').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo38713').setAttributeNS('', 'transform', 'translate(0 21)');
context.svg.getElementById('vf-smo38716').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo38720').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo38721').setAttributeNS('', 'transform', 'translate(0 28)');
context.svg.getElementById('vf-smo38740').setAttributeNS('', 'transform', 'translate(0 21)');
context.svg.getElementById('vf-smo38743').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo38744').setAttributeNS('', 'transform', 'translate(0 29)');
context.svg.getElementById('vf-smo38747').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo38766').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo38767').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo38770').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo38771').setAttributeNS('', 'transform', 'translate(0 29)');
context.svg.getElementById('vf-smo38790').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo38791').setAttributeNS('', 'transform', 'translate(0 34)');
context.svg.getElementById('vf-smo38794').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo38795').setAttributeNS('', 'transform', 'translate(0 39)');
context.svg.getElementById('vf-smo38798').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo38799').setAttributeNS('', 'transform', 'translate(0 41)');
context.svg.getElementById('vf-smo38817').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo38818').setAttributeNS('', 'transform', 'translate(0 40)');
context.svg.getElementById('vf-smo38821').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo38822').setAttributeNS('', 'transform', 'translate(0 39)');
context.svg.getElementById('vf-smo38825').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo38826').setAttributeNS('', 'transform', 'translate(0 43)');
context.svg.getElementById('vf-smo38844').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo38845').setAttributeNS('', 'transform', 'translate(0 34)');
context.svg.getElementById('vf-smo38848').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo38849').setAttributeNS('', 'transform', 'translate(0 37)');
context.svg.getElementById('vf-smo38852').setAttributeNS('', 'transform', 'translate(0 21)');
context.svg.getElementById('vf-smo38853').setAttributeNS('', 'transform', 'translate(0 43)');
context.svg.getElementById('vf-smo38871').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo38872').setAttributeNS('', 'transform', 'translate(0 38)');
context.svg.getElementById('vf-smo38875').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo38876').setAttributeNS('', 'transform', 'translate(0 41)');
context.svg.getElementById('vf-smo38879').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo38880').setAttributeNS('', 'transform', 'translate(0 38)');
context.svg.getElementById('vf-smo38898').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo38899').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo38901').setAttributeNS('', 'transform', 'translate(0 21)');
context.svg.getElementById('vf-smo38902').setAttributeNS('', 'transform', 'translate(0 36)');
context.svg.getElementById('vf-smo38904').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo38908').setAttributeNS('', 'transform', 'translate(0 23)');
context.svg.getElementById('vf-smo38926').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo38929').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo38931').setAttributeNS('', 'transform', 'translate(0 28)');
context.svg.getElementById('vf-smo38934').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo38953').setAttributeNS('', 'transform', 'translate(0 27)');
context.svg.getElementById('vf-smo38956').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo38959').setAttributeNS('', 'transform', 'translate(0 21)');
context.svg.getElementById('vf-smo38977').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo39000').setAttributeNS('', 'transform', 'translate(0 5)');
}
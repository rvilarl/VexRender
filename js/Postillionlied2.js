function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
//
// create the musical objects
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1421.487603305785');
svg.setAttributeNS('', 'height', '1839.5721925133685');
svg.setAttributeNS('', 'viewBox', '0 0 1343 1738');
VF.setMusicFont("Leland","Bravura","Gonville","Custom");
const noteHash = {};
const voiceHash = {}
const fmtsmo3365222 = new VF.Formatter();
//
// voices and notes for stave 0 22
const smo33652v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33652v0ar = [];
const smo33634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo33634'] = smo33634;
smo33634.setAttribute('id', 'smo33634');
smo33634.addModifier(new VF.Dot(), 0);
const smo33635 = new VF.Annotation('bläst');
smo33635.setAttribute('id', 'smo33635');
smo33635.setFont('Merriweather', 12, 'normal');
smo33635.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33634.addModifier(smo33635);
smo33635.addClass('lyric lyric-0 lyric-hyphen');
const smo33636 = new VF.Annotation('Herz');
smo33636.setAttribute('id', 'smo33636');
smo33636.setFont('Merriweather', 12, 'normal');
smo33636.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33634.addModifier(smo33636);
smo33636.addClass('lyric lyric-1');
smo33652v0ar.push(smo33634);
smo33652v0.addTickables(smo33652v0ar)
fmtsmo3365222.joinVoices([smo33652v0]);
const fmtsmo3496122 = new VF.Formatter();
//
// voices and notes for stave 1 22
const smo34961v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34961v0ar = [];
const smo34945 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo34945'] = smo34945;
smo34945.setAttribute('id', 'smo34945');
smo34945.addModifier(new VF.Dot(), 0);
smo34961v0ar.push(smo34945);
smo34961v0.addTickables(smo34961v0ar)
fmtsmo3496122.joinVoices([smo34961v0]);
const fmtsmo3613822 = new VF.Formatter();
//
// voices and notes for stave 2 22
const smo36138v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36138v0ar = [];
const smo36122 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo36122'] = smo36122;
smo36122.setAttribute('id', 'smo36122');
smo36122.addModifier(new VF.Dot(), 0);
smo36138v0ar.push(smo36122);
smo36138v0.addTickables(smo36138v0ar)
fmtsmo3613822.joinVoices([smo36138v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3365222.format([smo33652v0,smo34961v0,smo36138v0], 60);
const stavesmo33652 = new VF.Stave(66, 107.5133013333334, 134);
stavesmo33652.setAttribute('id', 'stavesmo33652');
stavesmo33652.setBegBarType(1);
stavesmo33652.addClef('treble');
const keysmo33652 = new VF.KeySignature('G');
keysmo33652.addToStave(stavesmo33652);
stavesmo33652.setContext(context);
stavesmo33652.draw();
smo33652v0.draw(context, stavesmo33652);
const stavesmo34961 = new VF.Stave(66, 214.5133013333334, 134);
stavesmo34961.setAttribute('id', 'stavesmo34961');
stavesmo34961.setBegBarType(1);
stavesmo34961.addClef('treble');
const keysmo34961 = new VF.KeySignature('G');
keysmo34961.addToStave(stavesmo34961);
stavesmo34961.setContext(context);
stavesmo34961.draw();
smo34961v0.draw(context, stavesmo34961);
const stavesmo36138 = new VF.Stave(66, 285.5133013333334, 134);
stavesmo36138.setAttribute('id', 'stavesmo36138');
stavesmo36138.setBegBarType(1);
stavesmo36138.addClef('bass');
const keysmo36138 = new VF.KeySignature('G');
keysmo36138.addToStave(stavesmo36138);
stavesmo36138.setContext(context);
stavesmo36138.draw();
smo36138v0.draw(context, stavesmo36138);
const leftsmo36899stavesmo336522 = new VF.StaveConnector(stavesmo33652, stavesmo36138).setType(1);
leftsmo36899stavesmo336522.setContext(context).draw();
const fmtsmo3367923 = new VF.Formatter();
//
// voices and notes for stave 0 23
const smo33679v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33679v0ar = [];
const smo33653 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo33653'] = smo33653;
smo33653.setAttribute('id', 'smo33653');
smo33679v0ar.push(smo33653);
const smo33655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo33655'] = smo33655;
smo33655.setAttribute('id', 'smo33655');
const smo33656 = new VF.Annotation('sein');
smo33656.setAttribute('id', 'smo33656');
smo33656.setFont('Merriweather', 12, 'normal');
smo33656.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33655.addModifier(smo33656);
smo33656.addClass('lyric lyric-0');
const smo33657 = new VF.Annotation('be');
smo33657.setAttribute('id', 'smo33657');
smo33657.setFont('Merriweather', 12, 'normal');
smo33657.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33655.addModifier(smo33657);
smo33657.addClass('lyric lyric-1 lyric-hyphen');
smo33679v0ar.push(smo33655);
const smo33658 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo33658'] = smo33658;
smo33658.setAttribute('id', 'smo33658');
const smo33659 = new VF.Annotation('Horn');
smo33659.setAttribute('id', 'smo33659');
smo33659.setFont('Merriweather', 12, 'normal');
smo33659.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33658.addModifier(smo33659);
smo33659.addClass('lyric lyric-0');
const smo33660 = new VF.Annotation('glei');
smo33660.setAttribute('id', 'smo33660');
smo33660.setFont('Merriweather', 12, 'normal');
smo33660.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33658.addModifier(smo33660);
smo33660.addClass('lyric lyric-1 lyric-hyphen');
smo33679v0ar.push(smo33658);
const smo33661 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo33661'] = smo33661;
smo33661.setAttribute('id', 'smo33661');
const smo33662 = new VF.Annotation('mit');
smo33662.setAttribute('id', 'smo33662');
smo33662.setFont('Merriweather', 12, 'normal');
smo33662.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33661.addModifier(smo33662);
smo33662.addClass('lyric lyric-0');
const smo33663 = new VF.Annotation('tet');
smo33663.setAttribute('id', 'smo33663');
smo33663.setFont('Merriweather', 12, 'normal');
smo33663.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33661.addModifier(smo33663);
smo33663.addClass('lyric lyric-1');
smo33679v0ar.push(smo33661);
smo33679v0.addTickables(smo33679v0ar)
fmtsmo3367923.joinVoices([smo33679v0]);
const fmtsmo3497823 = new VF.Formatter();
//
// voices and notes for stave 1 23
const smo34978v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34978v0ar = [];
const smo34962 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["en/4/n","bn/4/n"]}'))
noteHash['smo34962'] = smo34962;
smo34962.setAttribute('id', 'smo34962');
smo34962.addModifier(new VF.Dot(), 0);
smo34962.addModifier(new VF.Dot(), 1);
smo34978v0ar.push(smo34962);
smo34978v0.addTickables(smo34978v0ar)
fmtsmo3497823.joinVoices([smo34978v0]);
const fmtsmo3615523 = new VF.Formatter();
//
// voices and notes for stave 2 23
const smo36155v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36155v0ar = [];
const smo36139 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["g#/2/n"]}'))
noteHash['smo36139'] = smo36139;
smo36139.setAttribute('id', 'smo36139');
const smo361390acc = new VF.Accidental('#');
smo36139.addModifier(smo361390acc, 0);
smo36139.addModifier(new VF.Dot(), 0);
smo36155v0ar.push(smo36139);
smo36155v0.addTickables(smo36155v0ar)
fmtsmo3615523.joinVoices([smo36155v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3367923.format([smo33679v0,smo34978v0,smo36155v0], 239);
const stavesmo33679 = new VF.Stave(200, 107.5133013333334, 253);
stavesmo33679.setAttribute('id', 'stavesmo33679');
stavesmo33679.setBegBarType(VF.Barline.type.NONE);
stavesmo33679.setContext(context);
stavesmo33679.draw();
smo33679v0.draw(context, stavesmo33679);
const stavesmo34978 = new VF.Stave(200, 214.5133013333334, 253);
stavesmo34978.setAttribute('id', 'stavesmo34978');
stavesmo34978.setBegBarType(VF.Barline.type.NONE);
stavesmo34978.setContext(context);
stavesmo34978.draw();
smo34978v0.draw(context, stavesmo34978);
const stavesmo36155 = new VF.Stave(200, 285.5133013333334, 253);
stavesmo36155.setAttribute('id', 'stavesmo36155');
stavesmo36155.setBegBarType(VF.Barline.type.NONE);
stavesmo36155.setContext(context);
stavesmo36155.draw();
smo36155v0.draw(context, stavesmo36155);
const fmtsmo3370124 = new VF.Formatter();
//
// voices and notes for stave 0 24
const smo33701v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33701v0ar = [];
const smo33680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo33680'] = smo33680;
smo33680.setAttribute('id', 'smo33680');
smo33680.addModifier(new VF.Dot(), 0);
const smo33681 = new VF.Annotation('hel');
smo33681.setAttribute('id', 'smo33681');
smo33681.setFont('Merriweather', 12, 'normal');
smo33681.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33680.addModifier(smo33681);
smo33681.addClass('lyric lyric-0 lyric-hyphen');
const smo33682 = new VF.Annotation('ihn');
smo33682.setAttribute('id', 'smo33682');
smo33682.setFont('Merriweather', 12, 'normal');
smo33682.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33680.addModifier(smo33682);
smo33682.addClass('lyric lyric-1');
smo33701v0ar.push(smo33680);
const smo33683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo33683'] = smo33683;
smo33683.setAttribute('id', 'smo33683');
smo33683.addModifier(new VF.Dot(), 0);
const smo33684 = new VF.Annotation('lem');
smo33684.setAttribute('id', 'smo33684');
smo33684.setFont('Merriweather', 12, 'normal');
smo33684.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33683.addModifier(smo33684);
smo33684.addClass('lyric lyric-0');
const smo33685 = new VF.Annotation('hin');
smo33685.setAttribute('id', 'smo33685');
smo33685.setFont('Merriweather', 12, 'normal');
smo33685.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33683.addModifier(smo33685);
smo33685.addClass('lyric lyric-1 lyric-hyphen');
smo33701v0ar.push(smo33683);
smo33701v0.addTickables(smo33701v0ar)
fmtsmo3370124.joinVoices([smo33701v0]);
const fmtsmo3499524 = new VF.Formatter();
//
// voices and notes for stave 1 24
const smo34995v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34995v0ar = [];
const smo34979 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n","an/4/n"]}'))
noteHash['smo34979'] = smo34979;
smo34979.setAttribute('id', 'smo34979');
smo34979.addModifier(new VF.Dot(), 0);
smo34979.addModifier(new VF.Dot(), 1);
smo34995v0ar.push(smo34979);
smo34995v0.addTickables(smo34995v0ar)
fmtsmo3499524.joinVoices([smo34995v0]);
const fmtsmo3617324 = new VF.Formatter();
//
// voices and notes for stave 2 24
const smo36173v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36173v0ar = [];
const smo36156 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo36156'] = smo36156;
smo36156.setAttribute('id', 'smo36156');
smo36156.addModifier(new VF.Dot(), 0);
smo36173v0ar.push(smo36156);
const smo36157 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
noteHash['smo36157'] = smo36157;
smo36157.setAttribute('id', 'smo36157');
smo36157.addModifier(new VF.Dot(), 0);
smo36173v0ar.push(smo36157);
smo36173v0.addTickables(smo36173v0ar)
fmtsmo3617324.joinVoices([smo36173v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3370124.format([smo33701v0,smo34995v0,smo36173v0], 107);
const stavesmo33701 = new VF.Stave(453, 107.5133013333334, 121);
stavesmo33701.setAttribute('id', 'stavesmo33701');
stavesmo33701.setBegBarType(VF.Barline.type.NONE);
stavesmo33701.setContext(context);
stavesmo33701.draw();
smo33701v0.draw(context, stavesmo33701);
const stavesmo34995 = new VF.Stave(453, 214.5133013333334, 121);
stavesmo34995.setAttribute('id', 'stavesmo34995');
stavesmo34995.setBegBarType(VF.Barline.type.NONE);
stavesmo34995.setContext(context);
stavesmo34995.draw();
smo34995v0.draw(context, stavesmo34995);
const stavesmo36173 = new VF.Stave(453, 285.5133013333334, 121);
stavesmo36173.setAttribute('id', 'stavesmo36173');
stavesmo36173.setBegBarType(VF.Barline.type.NONE);
stavesmo36173.setContext(context);
stavesmo36173.draw();
smo36173v0.draw(context, stavesmo36173);
const fmtsmo3372525 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo33725v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33725v0ar = [];
const smo33702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo33702'] = smo33702;
smo33702.setAttribute('id', 'smo33702');
smo33702.addModifier(new VF.Dot(), 0);
const smo33704 = new VF.Annotation('Ton,');
smo33704.setAttribute('id', 'smo33704');
smo33704.setFont('Merriweather', 12, 'normal');
smo33704.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33702.addModifier(smo33704);
smo33704.addClass('lyric lyric-0');
const smo33703 = new VF.Annotation('aus');
smo33703.setAttribute('id', 'smo33703');
smo33703.setFont('Merriweather', 12, 'normal');
smo33703.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33702.addModifier(smo33703);
smo33703.addClass('lyric lyric-1');
smo33725v0ar.push(smo33702);
const smo33705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo33705'] = smo33705;
smo33705.setAttribute('id', 'smo33705');
const smo33706 = new VF.Annotation('-');
smo33706.setAttribute('id', 'smo33706');
smo33706.setFont('Merriweather', 12, 'normal');
smo33706.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33705.addModifier(smo33706);
smo33706.addClass('lyric lyric-0 lyric-hyphen');
smo33725v0ar.push(smo33705);
const smo33707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/5/n"]}'))
noteHash['smo33707'] = smo33707;
smo33707.setAttribute('id', 'smo33707');
const smo337070acc = new VF.Accidental('#');
smo33707.addModifier(smo337070acc, 0);
const smo33708 = new VF.Annotation('so');
smo33708.setAttribute('id', 'smo33708');
smo33708.setFont('Merriweather', 12, 'normal');
smo33708.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33707.addModifier(smo33708);
smo33708.addClass('lyric lyric-0');
const smo33709 = new VF.Annotation('und');
smo33709.setAttribute('id', 'smo33709');
smo33709.setFont('Merriweather', 12, 'normal');
smo33709.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33707.addModifier(smo33709);
smo33709.addClass('lyric lyric-1');
smo33725v0ar.push(smo33707);
smo33725v0.addTickables(smo33725v0ar)
fmtsmo3372525.joinVoices([smo33725v0]);
const fmtsmo3501325 = new VF.Formatter();
//
// voices and notes for stave 1 25
const smo35013v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35013v0ar = [];
const smo34996 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n","an/4/n"]}'))
noteHash['smo34996'] = smo34996;
smo34996.setAttribute('id', 'smo34996');
smo34996.addModifier(new VF.Dot(), 0);
smo34996.addModifier(new VF.Dot(), 1);
smo35013v0ar.push(smo34996);
const smo34997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo34997'] = smo34997;
smo34997.setAttribute('id', 'smo34997');
smo34997.addModifier(new VF.Dot(), 0);
smo35013v0ar.push(smo34997);
smo35013v0.addTickables(smo35013v0ar)
fmtsmo3501325.joinVoices([smo35013v0]);
const fmtsmo3619125 = new VF.Formatter();
//
// voices and notes for stave 2 25
const smo36191v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36191v0ar = [];
const smo36174 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo36174'] = smo36174;
smo36174.setAttribute('id', 'smo36174');
smo36174.addModifier(new VF.Dot(), 0);
smo36191v0ar.push(smo36174);
const smo36175 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["d#/3/n"]}'))
noteHash['smo36175'] = smo36175;
smo36175.setAttribute('id', 'smo36175');
const smo361750acc = new VF.Accidental('#');
smo36175.addModifier(smo361750acc, 0);
smo36175.addModifier(new VF.Dot(), 0);
smo36191v0ar.push(smo36175);
smo36191v0.addTickables(smo36191v0ar)
fmtsmo3619125.joinVoices([smo36191v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3372525.format([smo33725v0,smo35013v0,smo36191v0], 169);
const stavesmo33725 = new VF.Stave(574, 107.5133013333334, 183);
stavesmo33725.setAttribute('id', 'stavesmo33725');
stavesmo33725.setBegBarType(VF.Barline.type.NONE);
stavesmo33725.setContext(context);
stavesmo33725.draw();
smo33725v0.draw(context, stavesmo33725);
const stavesmo35013 = new VF.Stave(574, 214.5133013333334, 183);
stavesmo35013.setAttribute('id', 'stavesmo35013');
stavesmo35013.setBegBarType(VF.Barline.type.NONE);
stavesmo35013.setContext(context);
stavesmo35013.draw();
smo35013v0.draw(context, stavesmo35013);
const stavesmo36191 = new VF.Stave(574, 285.5133013333334, 183);
stavesmo36191.setAttribute('id', 'stavesmo36191');
stavesmo36191.setBegBarType(VF.Barline.type.NONE);
stavesmo36191.setContext(context);
stavesmo36191.draw();
smo36191v0.draw(context, stavesmo36191);
const fmtsmo3374426 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo33744v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33744v0ar = [];
const smo33726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33726'] = smo33726;
smo33726.setAttribute('id', 'smo33726');
smo33726.addModifier(new VF.Dot(), 0);
const smo33727 = new VF.Annotation('schön');
smo33727.setAttribute('id', 'smo33727');
smo33727.setFont('Merriweather', 12, 'normal');
smo33727.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33726.addModifier(smo33727);
smo33727.addClass('lyric lyric-0');
const smo33728 = new VF.Annotation('führt');
smo33728.setAttribute('id', 'smo33728');
smo33728.setFont('Merriweather', 12, 'normal');
smo33728.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33726.addModifier(smo33728);
smo33728.addClass('lyric lyric-1');
smo33744v0ar.push(smo33726);
smo33744v0.addTickables(smo33744v0ar)
fmtsmo3374426.joinVoices([smo33744v0]);
const fmtsmo3503026 = new VF.Formatter();
//
// voices and notes for stave 1 26
const smo35030v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35030v0ar = [];
const smo35014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo35014'] = smo35014;
smo35014.setAttribute('id', 'smo35014');
smo35014.addModifier(new VF.Dot(), 0);
smo35030v0ar.push(smo35014);
smo35030v0.addTickables(smo35030v0ar)
fmtsmo3503026.joinVoices([smo35030v0]);
const fmtsmo3620826 = new VF.Formatter();
//
// voices and notes for stave 2 26
const smo36208v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36208v0ar = [];
const smo36192 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36192'] = smo36192;
smo36192.setAttribute('id', 'smo36192');
smo36192.addModifier(new VF.Dot(), 0);
smo36208v0ar.push(smo36192);
smo36208v0.addTickables(smo36208v0ar)
fmtsmo3620826.joinVoices([smo36208v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3374426.format([smo33744v0,smo35030v0,smo36208v0], 72);
const stavesmo33744 = new VF.Stave(757, 107.5133013333334, 86);
stavesmo33744.setAttribute('id', 'stavesmo33744');
stavesmo33744.setBegBarType(VF.Barline.type.NONE);
stavesmo33744.setContext(context);
stavesmo33744.draw();
smo33744v0.draw(context, stavesmo33744);
const stavesmo35030 = new VF.Stave(757, 214.5133013333334, 86);
stavesmo35030.setAttribute('id', 'stavesmo35030');
stavesmo35030.setBegBarType(VF.Barline.type.NONE);
stavesmo35030.setContext(context);
stavesmo35030.draw();
smo35030v0.draw(context, stavesmo35030);
const stavesmo36208 = new VF.Stave(757, 285.5133013333334, 86);
stavesmo36208.setAttribute('id', 'stavesmo36208');
stavesmo36208.setBegBarType(VF.Barline.type.NONE);
stavesmo36208.setContext(context);
stavesmo36208.draw();
smo36208v0.draw(context, stavesmo36208);
const fmtsmo3377127 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo33771v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33771v0ar = [];
const smo33745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33745'] = smo33745;
smo33745.setAttribute('id', 'smo33745');
const smo33746 = new VF.Annotation('-');
smo33746.setAttribute('id', 'smo33746');
smo33746.setFont('Merriweather', 12, 'normal');
smo33746.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33745.addModifier(smo33746);
smo33746.addClass('lyric lyric-0 lyric-hyphen');
smo33771v0ar.push(smo33745);
const smo33747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33747'] = smo33747;
smo33747.setAttribute('id', 'smo33747');
const smo33748 = new VF.Annotation('wie');
smo33748.setAttribute('id', 'smo33748');
smo33748.setFont('Merriweather', 12, 'normal');
smo33748.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33747.addModifier(smo33748);
smo33748.addClass('lyric lyric-0');
const smo33749 = new VF.Annotation('ihn');
smo33749.setAttribute('id', 'smo33749');
smo33749.setFont('Merriweather', 12, 'normal');
smo33749.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33747.addModifier(smo33749);
smo33749.addClass('lyric lyric-1');
smo33771v0ar.push(smo33747);
const smo33750 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33750'] = smo33750;
smo33750.setAttribute('id', 'smo33750');
const smo33751 = new VF.Annotation('sonst');
smo33751.setAttribute('id', 'smo33751');
smo33751.setFont('Merriweather', 12, 'normal');
smo33751.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33750.addModifier(smo33751);
smo33751.addClass('lyric lyric-0');
const smo33752 = new VF.Annotation('mir');
smo33752.setAttribute('id', 'smo33752');
smo33752.setFont('Merriweather', 12, 'normal');
smo33752.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33750.addModifier(smo33752);
smo33752.addClass('lyric lyric-1');
smo33771v0ar.push(smo33750);
const smo33753 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33753'] = smo33753;
smo33753.setAttribute('id', 'smo33753');
const smo33754 = new VF.Annotation('kein');
smo33754.setAttribute('id', 'smo33754');
smo33754.setFont('Merriweather', 12, 'normal');
smo33754.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33753.addModifier(smo33754);
smo33754.addClass('lyric lyric-0');
const smo33755 = new VF.Annotation('zu');
smo33755.setAttribute('id', 'smo33755');
smo33755.setFont('Merriweather', 12, 'normal');
smo33755.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33753.addModifier(smo33755);
smo33755.addClass('lyric lyric-1 lyric-hyphen');
smo33771v0ar.push(smo33753);
smo33771v0.addTickables(smo33771v0ar)
fmtsmo3377127.joinVoices([smo33771v0]);
const fmtsmo3504727 = new VF.Formatter();
//
// voices and notes for stave 1 27
const smo35047v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35047v0ar = [];
const smo35031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo35031'] = smo35031;
smo35031.setAttribute('id', 'smo35031');
smo35031.addModifier(new VF.Dot(), 0);
smo35047v0ar.push(smo35031);
smo35047v0.addTickables(smo35047v0ar)
fmtsmo3504727.joinVoices([smo35047v0]);
const fmtsmo3622527 = new VF.Formatter();
//
// voices and notes for stave 2 27
const smo36225v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36225v0ar = [];
const smo36209 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36209'] = smo36209;
smo36209.setAttribute('id', 'smo36209');
smo36209.addModifier(new VF.Dot(), 0);
smo36225v0ar.push(smo36209);
smo36225v0.addTickables(smo36225v0ar)
fmtsmo3622527.joinVoices([smo36225v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3377127.format([smo33771v0,smo35047v0,smo36225v0], 230);
const stavesmo33771 = new VF.Stave(843, 107.5133013333334, 244);
stavesmo33771.setAttribute('id', 'stavesmo33771');
stavesmo33771.setBegBarType(VF.Barline.type.NONE);
stavesmo33771.setContext(context);
stavesmo33771.draw();
smo33771v0.draw(context, stavesmo33771);
const stavesmo35047 = new VF.Stave(843, 214.5133013333334, 244);
stavesmo35047.setAttribute('id', 'stavesmo35047');
stavesmo35047.setBegBarType(VF.Barline.type.NONE);
stavesmo35047.setContext(context);
stavesmo35047.draw();
smo35047v0.draw(context, stavesmo35047);
const stavesmo36225 = new VF.Stave(843, 285.5133013333334, 244);
stavesmo36225.setAttribute('id', 'stavesmo36225');
stavesmo36225.setBegBarType(VF.Barline.type.NONE);
stavesmo36225.setContext(context);
stavesmo36225.draw();
smo36225v0.draw(context, stavesmo36225);
const fmtsmo3379328 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo33793v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33793v0ar = [];
const smo33772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33772'] = smo33772;
smo33772.setAttribute('id', 'smo33772');
smo33772.addModifier(new VF.Dot(), 0);
const smo33773 = new VF.Annotation('Po');
smo33773.setAttribute('id', 'smo33773');
smo33773.setFont('Merriweather', 12, 'normal');
smo33773.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33772.addModifier(smo33773);
smo33773.addClass('lyric lyric-0 lyric-hyphen');
const smo33774 = new VF.Annotation('rück');
smo33774.setAttribute('id', 'smo33774');
smo33774.setFont('Merriweather', 12, 'normal');
smo33774.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33772.addModifier(smo33774);
smo33774.addClass('lyric lyric-1');
smo33793v0ar.push(smo33772);
const smo33775 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo33775'] = smo33775;
smo33775.setAttribute('id', 'smo33775');
smo33775.addModifier(new VF.Dot(), 0);
const smo33776 = new VF.Annotation('stil');
smo33776.setAttribute('id', 'smo33776');
smo33776.setFont('Merriweather', 12, 'normal');
smo33776.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33775.addModifier(smo33776);
smo33776.addClass('lyric lyric-0 lyric-hyphen');
const smo33777 = new VF.Annotation('ins');
smo33777.setAttribute('id', 'smo33777');
smo33777.setFont('Merriweather', 12, 'normal');
smo33777.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33775.addModifier(smo33777);
smo33777.addClass('lyric lyric-1');
smo33793v0ar.push(smo33775);
smo33793v0.addTickables(smo33793v0ar)
fmtsmo3379328.joinVoices([smo33793v0]);
const fmtsmo3506428 = new VF.Formatter();
//
// voices and notes for stave 1 28
const smo35064v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35064v0ar = [];
const smo35048 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n","bn/4/n"]}'))
noteHash['smo35048'] = smo35048;
smo35048.setAttribute('id', 'smo35048');
smo35048.addModifier(new VF.Dot(), 0);
smo35048.addModifier(new VF.Dot(), 1);
smo35064v0ar.push(smo35048);
smo35064v0.addTickables(smo35064v0ar)
fmtsmo3506428.joinVoices([smo35064v0]);
const fmtsmo3624228 = new VF.Formatter();
//
// voices and notes for stave 2 28
const smo36242v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36242v0ar = [];
const smo36226 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
noteHash['smo36226'] = smo36226;
smo36226.setAttribute('id', 'smo36226');
smo36226.addModifier(new VF.Dot(), 0);
smo36242v0ar.push(smo36226);
smo36242v0.addTickables(smo36242v0ar)
fmtsmo3624228.joinVoices([smo36242v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3379328.format([smo33793v0,smo35064v0,smo36242v0], 113);
const stavesmo33793 = new VF.Stave(1087, 107.5133013333334, 127);
stavesmo33793.setAttribute('id', 'stavesmo33793');
stavesmo33793.setBegBarType(VF.Barline.type.NONE);
stavesmo33793.setContext(context);
stavesmo33793.draw();
smo33793v0.draw(context, stavesmo33793);
const stavesmo35064 = new VF.Stave(1087, 214.5133013333334, 127);
stavesmo35064.setAttribute('id', 'stavesmo35064');
stavesmo35064.setBegBarType(VF.Barline.type.NONE);
stavesmo35064.setContext(context);
stavesmo35064.draw();
smo35064v0.draw(context, stavesmo35064);
const stavesmo36242 = new VF.Stave(1087, 285.5133013333334, 127);
stavesmo36242.setAttribute('id', 'stavesmo36242');
stavesmo36242.setBegBarType(VF.Barline.type.NONE);
stavesmo36242.setContext(context);
stavesmo36242.draw();
smo36242v0.draw(context, stavesmo36242);
const rightsmo36899stavesmo337932 = new VF.StaveConnector(stavesmo33793, stavesmo36242).setType(0);
rightsmo36899stavesmo337932.setContext(context).draw();
const fmtsmo3381729 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo33817v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33817v0ar = [];
const smo33794 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33794'] = smo33794;
smo33794.setAttribute('id', 'smo33794');
smo33794.addModifier(new VF.Dot(), 0);
const smo33795 = new VF.Annotation('lion');
smo33795.setAttribute('id', 'smo33795');
smo33795.setFont('Merriweather', 12, 'normal');
smo33795.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33794.addModifier(smo33795);
smo33795.addClass('lyric lyric-0');
const smo33796 = new VF.Annotation('Häus,');
smo33796.setAttribute('id', 'smo33796');
smo33796.setFont('Merriweather', 12, 'normal');
smo33796.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33794.addModifier(smo33796);
smo33796.addClass('lyric lyric-1');
smo33817v0ar.push(smo33794);
const smo33797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33797'] = smo33797;
smo33797.setAttribute('id', 'smo33797');
const smo33798 = new VF.Annotation('Häus');
smo33798.setAttribute('id', 'smo33798');
smo33798.setFont('Merriweather', 12, 'normal');
smo33798.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33797.addModifier(smo33798);
smo33798.addClass('lyric lyric-1');
smo33817v0ar.push(smo33797);
const smo33799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo33799'] = smo33799;
smo33799.setAttribute('id', 'smo33799');
const smo33800 = new VF.Annotation('Es');
smo33800.setAttribute('id', 'smo33800');
smo33800.setFont('Merriweather', 12, 'normal');
smo33800.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33799.addModifier(smo33800);
smo33800.addClass('lyric lyric-0');
const smo33801 = new VF.Annotation('es');
smo33801.setAttribute('id', 'smo33801');
smo33801.setFont('Merriweather', 12, 'normal');
smo33801.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33799.addModifier(smo33801);
smo33801.addClass('lyric lyric-1');
smo33817v0ar.push(smo33799);
smo33817v0.addTickables(smo33817v0ar)
fmtsmo3381729.joinVoices([smo33817v0]);
const fmtsmo3508329 = new VF.Formatter();
//
// voices and notes for stave 1 29
const smo35083v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35083v0ar = [];
const smo35065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n","bn/4/n"]}'))
noteHash['smo35065'] = smo35065;
smo35065.setAttribute('id', 'smo35065');
smo35065.addModifier(new VF.Dot(), 0);
smo35065.addModifier(new VF.Dot(), 1);
smo35083v0ar.push(smo35065);
const smo35066 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35066'] = smo35066;
smo35066.setAttribute('id', 'smo35066');
smo35083v0ar.push(smo35066);
const smo35067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35067'] = smo35067;
smo35067.setAttribute('id', 'smo35067');
smo35083v0ar.push(smo35067);
smo35083v0.addTickables(smo35083v0ar)
fmtsmo3508329.joinVoices([smo35083v0]);
const fmtsmo3626129 = new VF.Formatter();
//
// voices and notes for stave 2 29
const smo36261v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36261v0ar = [];
const smo36243 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
noteHash['smo36243'] = smo36243;
smo36243.setAttribute('id', 'smo36243');
smo36243.addModifier(new VF.Dot(), 0);
smo36261v0ar.push(smo36243);
const smo36244 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36244'] = smo36244;
smo36244.setAttribute('id', 'smo36244');
smo36261v0ar.push(smo36244);
const smo36245 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36245'] = smo36245;
smo36245.setAttribute('id', 'smo36245');
smo36261v0ar.push(smo36245);
smo36261v0.addTickables(smo36261v0ar)
fmtsmo3626129.joinVoices([smo36261v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3381729.format([smo33817v0,smo35083v0,smo36261v0], 218);
const stavesmo33817 = new VF.Stave(66, 398.5133013333334, 291);
stavesmo33817.setAttribute('id', 'stavesmo33817');
stavesmo33817.setBegBarType(1);
stavesmo33817.addClef('treble');
const keysmo33817 = new VF.KeySignature('G');
keysmo33817.addToStave(stavesmo33817);
stavesmo33817.setContext(context);
stavesmo33817.draw();
smo33817v0.draw(context, stavesmo33817);
const stavesmo35083 = new VF.Stave(66, 520.5133013333334, 291);
stavesmo35083.setAttribute('id', 'stavesmo35083');
stavesmo35083.setBegBarType(1);
stavesmo35083.addClef('treble');
const keysmo35083 = new VF.KeySignature('G');
keysmo35083.addToStave(stavesmo35083);
stavesmo35083.setContext(context);
stavesmo35083.draw();
smo35083v0.draw(context, stavesmo35083);
const stavesmo36261 = new VF.Stave(66, 643.5133013333334, 291);
stavesmo36261.setAttribute('id', 'stavesmo36261');
stavesmo36261.setBegBarType(1);
stavesmo36261.addClef('bass');
const keysmo36261 = new VF.KeySignature('G');
keysmo36261.addToStave(stavesmo36261);
stavesmo36261.setContext(context);
stavesmo36261.draw();
smo36261v0.draw(context, stavesmo36261);
const leftsmo36899stavesmo338172 = new VF.StaveConnector(stavesmo33817, stavesmo36261).setType(1);
leftsmo36899stavesmo338172.setContext(context).draw();
const fmtsmo3383630 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo33836v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33836v0ar = [];
const smo33818 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo33818'] = smo33818;
smo33818.setAttribute('id', 'smo33818');
smo33818.addModifier(new VF.Dot(), 0);
const smo33820 = new VF.Annotation('klingt');
smo33820.setAttribute('id', 'smo33820');
smo33820.setFont('Merriweather', 12, 'normal');
smo33820.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33818.addModifier(smo33820);
smo33820.addClass('lyric lyric-0');
const smo33819 = new VF.Annotation('sagt');
smo33819.setAttribute('id', 'smo33819');
smo33819.setFont('Merriweather', 12, 'normal');
smo33819.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33818.addModifier(smo33819);
smo33819.addClass('lyric lyric-1');
smo33836v0ar.push(smo33818);
smo33836v0.addTickables(smo33836v0ar)
fmtsmo3383630.joinVoices([smo33836v0]);
const fmtsmo3510030 = new VF.Formatter();
//
// voices and notes for stave 1 30
const smo35100v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35100v0ar = [];
const smo35084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo35084'] = smo35084;
smo35084.setAttribute('id', 'smo35084');
smo35084.addModifier(new VF.Dot(), 0);
smo35100v0ar.push(smo35084);
smo35100v0.addTickables(smo35100v0ar)
fmtsmo3510030.joinVoices([smo35100v0]);
const fmtsmo3628230 = new VF.Formatter();
//
// voices and notes for stave 2 30
const smo36282v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36282v0ar = [];
const smo36262 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo36262'] = smo36262;
smo36262.setAttribute('id', 'smo36262');
smo36262.addModifier(new VF.Dot(), 0);
smo36282v0ar.push(smo36262);
smo36282v0.addTickables(smo36282v0ar)
fmtsmo3628230.joinVoices([smo36282v0]);
const smo36282v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36282v1ar = [];
const smo36263 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo36263'] = smo36263;
smo36263.setAttribute('id', 'smo36263');
smo36282v1ar.push(smo36263);
const smo36264 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo36264'] = smo36264;
smo36264.setAttribute('id', 'smo36264');
smo36282v1ar.push(smo36264);
const smo36265 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo36265'] = smo36265;
smo36265.setAttribute('id', 'smo36265');
smo36282v1ar.push(smo36265);
const smo36266 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo36266'] = smo36266;
smo36266.setAttribute('id', 'smo36266');
smo36282v1ar.push(smo36266);
smo36282v1.addTickables(smo36282v1ar)
fmtsmo3628230.joinVoices([smo36282v1]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3383630.format([smo33836v0,smo35100v0,smo36282v0,smo36282v1], 197);
const stavesmo33836 = new VF.Stave(357, 398.5133013333334, 211);
stavesmo33836.setAttribute('id', 'stavesmo33836');
stavesmo33836.setBegBarType(VF.Barline.type.NONE);
stavesmo33836.setContext(context);
stavesmo33836.draw();
smo33836v0.draw(context, stavesmo33836);
const stavesmo35100 = new VF.Stave(357, 520.5133013333334, 211);
stavesmo35100.setAttribute('id', 'stavesmo35100');
stavesmo35100.setBegBarType(VF.Barline.type.NONE);
stavesmo35100.setContext(context);
stavesmo35100.draw();
smo35100v0.draw(context, stavesmo35100);
const stavesmo36282 = new VF.Stave(357, 643.5133013333334, 211);
stavesmo36282.setAttribute('id', 'stavesmo36282');
stavesmo36282.setBegBarType(VF.Barline.type.NONE);
stavesmo36282.setContext(context);
stavesmo36282.draw();
smo36282v0.draw(context, stavesmo36282);
smo36282v1.draw(context, stavesmo36282);
const fmtsmo3386431 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo33864v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33864v0ar = [];
const smo33837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo33837'] = smo33837;
smo33837.setAttribute('id', 'smo33837');
const smo33838 = new VF.Annotation('-');
smo33838.setAttribute('id', 'smo33838');
smo33838.setFont('Merriweather', 12, 'normal');
smo33838.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33837.addModifier(smo33838);
smo33838.addClass('lyric lyric-0 lyric-hyphen');
const smo33839 = new VF.Annotation('-');
smo33839.setAttribute('id', 'smo33839');
smo33839.setFont('Merriweather', 12, 'normal');
smo33839.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33837.addModifier(smo33839);
smo33839.addClass('lyric lyric-1 lyric-hyphen');
smo33864v0ar.push(smo33837);
const smo33840 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo33840'] = smo33840;
smo33840.setAttribute('id', 'smo33840');
const smo33841 = new VF.Annotation('wenn');
smo33841.setAttribute('id', 'smo33841');
smo33841.setFont('Merriweather', 12, 'normal');
smo33841.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33840.addModifier(smo33841);
smo33841.addClass('lyric lyric-0');
const smo33842 = new VF.Annotation('zu');
smo33842.setAttribute('id', 'smo33842');
smo33842.setFont('Merriweather', 12, 'normal');
smo33842.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33840.addModifier(smo33842);
smo33842.addClass('lyric lyric-1');
smo33864v0ar.push(smo33840);
const smo33843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo33843'] = smo33843;
smo33843.setAttribute('id', 'smo33843');
const smo33844 = new VF.Annotation('es');
smo33844.setAttribute('id', 'smo33844');
smo33844.setFont('Merriweather', 12, 'normal');
smo33844.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33843.addModifier(smo33844);
smo33844.addClass('lyric lyric-0');
const smo33845 = new VF.Annotation('ihm');
smo33845.setAttribute('id', 'smo33845');
smo33845.setFont('Merriweather', 12, 'normal');
smo33845.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33843.addModifier(smo33845);
smo33845.addClass('lyric lyric-1');
smo33864v0ar.push(smo33843);
const smo33846 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo33846'] = smo33846;
smo33846.setAttribute('id', 'smo33846');
const smo33847 = new VF.Annotation('von');
smo33847.setAttribute('id', 'smo33847');
smo33847.setFont('Merriweather', 12, 'normal');
smo33847.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33846.addModifier(smo33847);
smo33847.addClass('lyric lyric-0');
const smo33848 = new VF.Annotation('Denk\'');
smo33848.setAttribute('id', 'smo33848');
smo33848.setFont('Merriweather', 12, 'normal');
smo33848.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33846.addModifier(smo33848);
smo33848.addClass('lyric lyric-1');
smo33864v0ar.push(smo33846);
smo33864v0.addTickables(smo33864v0ar)
fmtsmo3386431.joinVoices([smo33864v0]);
const fmtsmo3511831 = new VF.Formatter();
//
// voices and notes for stave 1 31
const smo35118v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35118v0ar = [];
const smo35101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo35101'] = smo35101;
smo35101.setAttribute('id', 'smo35101');
smo35101.addModifier(new VF.Dot(), 0);
smo35118v0ar.push(smo35101);
const smo35102 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
noteHash['smo35102'] = smo35102;
smo35102.setAttribute('id', 'smo35102');
smo35102.addModifier(new VF.Dot(), 0);
smo35118v0ar.push(smo35102);
smo35118v0.addTickables(smo35118v0ar)
fmtsmo3511831.joinVoices([smo35118v0]);
const fmtsmo3630331 = new VF.Formatter();
//
// voices and notes for stave 2 31
const smo36303v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36303v0ar = [];
const smo36283 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo36283'] = smo36283;
smo36283.setAttribute('id', 'smo36283');
smo36283.addModifier(new VF.Dot(), 0);
smo36303v0ar.push(smo36283);
smo36303v0.addTickables(smo36303v0ar)
fmtsmo3630331.joinVoices([smo36303v0]);
const smo36303v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36303v1ar = [];
const smo36284 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo36284'] = smo36284;
smo36284.setAttribute('id', 'smo36284');
smo36303v1ar.push(smo36284);
const smo36285 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo36285'] = smo36285;
smo36285.setAttribute('id', 'smo36285');
smo36303v1ar.push(smo36285);
const smo36286 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo36286'] = smo36286;
smo36286.setAttribute('id', 'smo36286');
smo36303v1ar.push(smo36286);
const smo36287 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo36287'] = smo36287;
smo36287.setAttribute('id', 'smo36287');
smo36303v1ar.push(smo36287);
smo36303v1.addTickables(smo36303v1ar)
fmtsmo3630331.joinVoices([smo36303v1]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3386431.format([smo33864v0,smo35118v0,smo36303v0,smo36303v1], 293);
const stavesmo33864 = new VF.Stave(568, 398.5133013333334, 307);
stavesmo33864.setAttribute('id', 'stavesmo33864');
stavesmo33864.setBegBarType(VF.Barline.type.NONE);
stavesmo33864.setContext(context);
stavesmo33864.draw();
smo33864v0.draw(context, stavesmo33864);
const stavesmo35118 = new VF.Stave(568, 520.5133013333334, 307);
stavesmo35118.setAttribute('id', 'stavesmo35118');
stavesmo35118.setBegBarType(VF.Barline.type.NONE);
stavesmo35118.setContext(context);
stavesmo35118.draw();
smo35118v0.draw(context, stavesmo35118);
const stavesmo36303 = new VF.Stave(568, 643.5133013333334, 307);
stavesmo36303.setAttribute('id', 'stavesmo36303');
stavesmo36303.setBegBarType(VF.Barline.type.NONE);
stavesmo36303.setContext(context);
stavesmo36303.draw();
smo36303v0.draw(context, stavesmo36303);
smo36303v1.draw(context, stavesmo36303);
const fmtsmo3389232 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo33892v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33892v0ar = [];
const smo33865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo33865'] = smo33865;
smo33865.setAttribute('id', 'smo33865');
const smo33866 = new VF.Annotation('fer');
smo33866.setAttribute('id', 'smo33866');
smo33866.setFont('Merriweather', 12, 'normal');
smo33866.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33865.addModifier(smo33866);
smo33866.addClass('lyric lyric-0 lyric-hyphen');
const smo33867 = new VF.Annotation('im');
smo33867.setAttribute('id', 'smo33867');
smo33867.setFont('Merriweather', 12, 'normal');
smo33867.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33865.addModifier(smo33867);
smo33867.addClass('lyric lyric-1 lyric-hyphen');
smo33892v0ar.push(smo33865);
const smo33868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo33868'] = smo33868;
smo33868.setAttribute('id', 'smo33868');
const smo33869 = new VF.Annotation('ne');
smo33869.setAttribute('id', 'smo33869');
smo33869.setFont('Merriweather', 12, 'normal');
smo33869.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33868.addModifier(smo33869);
smo33869.addClass('lyric lyric-0');
const smo33870 = new VF.Annotation('mer');
smo33870.setAttribute('id', 'smo33870');
smo33870.setFont('Merriweather', 12, 'normal');
smo33870.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33868.addModifier(smo33870);
smo33870.addClass('lyric lyric-1');
smo33892v0ar.push(smo33868);
const smo33871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo33871'] = smo33871;
smo33871.setAttribute('id', 'smo33871');
const smo33872 = new VF.Annotation('er');
smo33872.setAttribute('id', 'smo33872');
smo33872.setFont('Merriweather', 12, 'normal');
smo33872.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33871.addModifier(smo33872);
smo33872.addClass('lyric lyric-0 lyric-hyphen');
const smo33873 = new VF.Annotation('an');
smo33873.setAttribute('id', 'smo33873');
smo33873.setFont('Merriweather', 12, 'normal');
smo33873.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33871.addModifier(smo33873);
smo33873.addClass('lyric lyric-1');
smo33892v0ar.push(smo33871);
const smo33874 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo33874'] = smo33874;
smo33874.setAttribute('id', 'smo33874');
smo33874.addModifier(new VF.Dot(), 0);
const smo33876 = new VF.Annotation('schalit');
smo33876.setAttribute('id', 'smo33876');
smo33876.setFont('Merriweather', 12, 'normal');
smo33876.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33874.addModifier(smo33876);
smo33876.addClass('lyric lyric-0');
const smo33875 = new VF.Annotation('mich');
smo33875.setAttribute('id', 'smo33875');
smo33875.setFont('Merriweather', 12, 'normal');
smo33875.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33874.addModifier(smo33875);
smo33875.addClass('lyric lyric-1');
smo33892v0ar.push(smo33874);
smo33892v0.addTickables(smo33892v0ar)
fmtsmo3389232.joinVoices([smo33892v0]);
const fmtsmo3513532 = new VF.Formatter();
//
// voices and notes for stave 1 32
const smo35135v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35135v0ar = [];
const smo35119 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo35119'] = smo35119;
smo35119.setAttribute('id', 'smo35119');
smo35119.addModifier(new VF.Dot(), 0);
smo35135v0ar.push(smo35119);
smo35135v0.addTickables(smo35135v0ar)
fmtsmo3513532.joinVoices([smo35135v0]);
const fmtsmo3632432 = new VF.Formatter();
//
// voices and notes for stave 2 32
const smo36324v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36324v0ar = [];
const smo36304 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
noteHash['smo36304'] = smo36304;
smo36304.setAttribute('id', 'smo36304');
smo36304.addModifier(new VF.Dot(), 0);
smo36324v0ar.push(smo36304);
smo36324v0.addTickables(smo36324v0ar)
fmtsmo3632432.joinVoices([smo36324v0]);
const smo36324v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36324v1ar = [];
const smo36305 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
noteHash['smo36305'] = smo36305;
smo36305.setAttribute('id', 'smo36305');
const smo363050acc = new VF.Accidental('#');
smo36305.addModifier(smo363050acc, 0);
smo36324v1ar.push(smo36305);
const smo36306 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
noteHash['smo36306'] = smo36306;
smo36306.setAttribute('id', 'smo36306');
smo36324v1ar.push(smo36306);
const smo36307 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
noteHash['smo36307'] = smo36307;
smo36307.setAttribute('id', 'smo36307');
smo36324v1ar.push(smo36307);
const smo36308 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
noteHash['smo36308'] = smo36308;
smo36308.setAttribute('id', 'smo36308');
smo36324v1ar.push(smo36308);
smo36324v1.addTickables(smo36324v1ar)
fmtsmo3632432.joinVoices([smo36324v1]);
// create beam groups and tuplets for format grp smo36899 before formatting
const dirsmo43090 = smo33865.getStemDirection();
smo33865.setStemDirection(dirsmo43090);
smo33868.setStemDirection(dirsmo43090);
smo33871.setStemDirection(dirsmo43090);
const smo43090 = new VF.Beam([smo33865,smo33868,smo33871]);
 
// formatting measures in staff group smo36899
fmtsmo3389232.format([smo33892v0,smo35135v0,smo36324v0,smo36324v1], 321);
const stavesmo33892 = new VF.Stave(875, 398.5133013333334, 335);
stavesmo33892.setAttribute('id', 'stavesmo33892');
stavesmo33892.setBegBarType(VF.Barline.type.NONE);
stavesmo33892.setContext(context);
stavesmo33892.draw();
smo33892v0.draw(context, stavesmo33892);
smo43090.setContext(context);
smo43090.draw();
const stavesmo35135 = new VF.Stave(875, 520.5133013333334, 335);
stavesmo35135.setAttribute('id', 'stavesmo35135');
stavesmo35135.setBegBarType(VF.Barline.type.NONE);
stavesmo35135.setContext(context);
stavesmo35135.draw();
smo35135v0.draw(context, stavesmo35135);
const stavesmo36324 = new VF.Stave(875, 643.5133013333334, 335);
stavesmo36324.setAttribute('id', 'stavesmo36324');
stavesmo36324.setBegBarType(VF.Barline.type.NONE);
stavesmo36324.setContext(context);
stavesmo36324.draw();
smo36324v0.draw(context, stavesmo36324);
smo36324v1.draw(context, stavesmo36324);
const rightsmo36899stavesmo338922 = new VF.StaveConnector(stavesmo33892, stavesmo36324).setType(0);
rightsmo36899stavesmo338922.setContext(context).draw();
const fmtsmo3392233 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo33922v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33922v0ar = [];
const smo33893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo33893'] = smo33893;
smo33893.setAttribute('id', 'smo33893');
const smo33894 = new VF.Annotation('-');
smo33894.setAttribute('id', 'smo33894');
smo33894.setFont('Merriweather', 12, 'normal');
smo33894.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33893.addModifier(smo33894);
smo33894.addClass('lyric lyric-0 lyric-hyphen');
smo33922v0ar.push(smo33893);
const smo33895 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo33895'] = smo33895;
smo33895.setAttribute('id', 'smo33895');
const smo33896 = new VF.Annotation('ais');
smo33896.setAttribute('id', 'smo33896');
smo33896.setFont('Merriweather', 12, 'normal');
smo33896.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33895.addModifier(smo33896);
smo33896.addClass('lyric lyric-0');
const smo33897 = new VF.Annotation('du');
smo33897.setAttribute('id', 'smo33897');
smo33897.setFont('Merriweather', 12, 'normal');
smo33897.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33895.addModifier(smo33897);
smo33897.addClass('lyric lyric-1');
smo33922v0ar.push(smo33895);
const smo33898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo33898'] = smo33898;
smo33898.setAttribute('id', 'smo33898');
const smo33899 = new VF.Annotation('ruit');
smo33899.setAttribute('id', 'smo33899');
smo33899.setFont('Merriweather', 12, 'normal');
smo33899.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33898.addModifier(smo33899);
smo33899.addClass('lyric lyric-0');
const smo33900 = new VF.Annotation('weißt');
smo33900.setAttribute('id', 'smo33900');
smo33900.setFont('Merriweather', 12, 'normal');
smo33900.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33898.addModifier(smo33900);
smo33900.addClass('lyric lyric-1');
smo33922v0ar.push(smo33898);
const smo33901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo33901'] = smo33901;
smo33901.setAttribute('id', 'smo33901');
const smo33902 = new VF.Annotation('er');
smo33902.setAttribute('id', 'smo33902');
smo33902.setFont('Merriweather', 12, 'normal');
smo33902.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33901.addModifier(smo33902);
smo33902.addClass('lyric lyric-0');
const smo33903 = new VF.Annotation('doch,');
smo33903.setAttribute('id', 'smo33903');
smo33903.setFont('Merriweather', 12, 'normal');
smo33903.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33901.addModifier(smo33903);
smo33903.addClass('lyric lyric-1');
smo33922v0ar.push(smo33901);
const smo33904 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo33904'] = smo33904;
smo33904.setAttribute('id', 'smo33904');
const smo33905 = new VF.Annotation('Ich');
smo33905.setAttribute('id', 'smo33905');
smo33905.setFont('Merriweather', 12, 'normal');
smo33905.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33904.addModifier(smo33905);
smo33905.addClass('lyric lyric-0');
const smo33906 = new VF.Annotation('ich');
smo33906.setAttribute('id', 'smo33906');
smo33906.setFont('Merriweather', 12, 'normal');
smo33906.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33904.addModifier(smo33906);
smo33906.addClass('lyric lyric-1');
smo33922v0ar.push(smo33904);
smo33922v0.addTickables(smo33922v0ar)
fmtsmo3392233.joinVoices([smo33922v0]);
const fmtsmo3515533 = new VF.Formatter();
//
// voices and notes for stave 1 33
const smo35155v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35155v0ar = [];
const smo35136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo35136'] = smo35136;
smo35136.setAttribute('id', 'smo35136');
smo35155v0ar.push(smo35136);
const smo35137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo35137'] = smo35137;
smo35137.setAttribute('id', 'smo35137');
smo35155v0ar.push(smo35137);
const smo35138 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo35138'] = smo35138;
smo35138.setAttribute('id', 'smo35138');
smo35155v0ar.push(smo35138);
const smo35139 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo35139'] = smo35139;
smo35139.setAttribute('id', 'smo35139');
smo35155v0ar.push(smo35139);
smo35155v0.addTickables(smo35155v0ar)
fmtsmo3515533.joinVoices([smo35155v0]);
const fmtsmo3634533 = new VF.Formatter();
//
// voices and notes for stave 2 33
const smo36345v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36345v0ar = [];
const smo36325 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
noteHash['smo36325'] = smo36325;
smo36325.setAttribute('id', 'smo36325');
smo36325.addModifier(new VF.Dot(), 0);
smo36345v0ar.push(smo36325);
smo36345v0.addTickables(smo36345v0ar)
fmtsmo3634533.joinVoices([smo36345v0]);
const smo36345v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36345v1ar = [];
const smo36326 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
noteHash['smo36326'] = smo36326;
smo36326.setAttribute('id', 'smo36326');
const smo363260acc = new VF.Accidental('#');
smo36326.addModifier(smo363260acc, 0);
smo36345v1ar.push(smo36326);
const smo36327 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
noteHash['smo36327'] = smo36327;
smo36327.setAttribute('id', 'smo36327');
smo36345v1ar.push(smo36327);
const smo36328 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
noteHash['smo36328'] = smo36328;
smo36328.setAttribute('id', 'smo36328');
smo36345v1ar.push(smo36328);
const smo36329 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
noteHash['smo36329'] = smo36329;
smo36329.setAttribute('id', 'smo36329');
smo36345v1ar.push(smo36329);
smo36345v1.addTickables(smo36345v1ar)
fmtsmo3634533.joinVoices([smo36345v1]);
// create beam groups and tuplets for format grp smo36899 before formatting
const dirsmo43104 = smo33898.getStemDirection();
smo33898.setStemDirection(dirsmo43104);
smo33901.setStemDirection(dirsmo43104);
smo33904.setStemDirection(dirsmo43104);
const smo43104 = new VF.Beam([smo33898,smo33901,smo33904]);
 
// formatting measures in staff group smo36899
fmtsmo3392233.format([smo33922v0,smo35155v0,smo36345v0,smo36345v1], 293);
const stavesmo33922 = new VF.Stave(66, 778.5133013333334, 367);
stavesmo33922.setAttribute('id', 'stavesmo33922');
stavesmo33922.setBegBarType(1);
stavesmo33922.addClef('treble');
const keysmo33922 = new VF.KeySignature('G');
keysmo33922.addToStave(stavesmo33922);
stavesmo33922.setContext(context);
stavesmo33922.draw();
smo33922v0.draw(context, stavesmo33922);
smo43104.setContext(context);
smo43104.draw();
const stavesmo35155 = new VF.Stave(66, 893.5133013333334, 367);
stavesmo35155.setAttribute('id', 'stavesmo35155');
stavesmo35155.setBegBarType(1);
stavesmo35155.addClef('treble');
const keysmo35155 = new VF.KeySignature('G');
keysmo35155.addToStave(stavesmo35155);
stavesmo35155.setContext(context);
stavesmo35155.draw();
smo35155v0.draw(context, stavesmo35155);
const stavesmo36345 = new VF.Stave(66, 1026.5133013333334, 367);
stavesmo36345.setAttribute('id', 'stavesmo36345');
stavesmo36345.setBegBarType(1);
stavesmo36345.addClef('bass');
const keysmo36345 = new VF.KeySignature('G');
keysmo36345.addToStave(stavesmo36345);
stavesmo36345.setContext(context);
stavesmo36345.draw();
smo36345v0.draw(context, stavesmo36345);
smo36345v1.draw(context, stavesmo36345);
const leftsmo36899stavesmo339222 = new VF.StaveConnector(stavesmo33922, stavesmo36345).setType(1);
leftsmo36899stavesmo339222.setContext(context).draw();
const fmtsmo3394734 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo33947v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33947v0ar = [];
const smo33923 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33923'] = smo33923;
smo33923.setAttribute('id', 'smo33923');
const smo33924 = new VF.Annotation('kom');
smo33924.setAttribute('id', 'smo33924');
smo33924.setFont('Merriweather', 12, 'normal');
smo33924.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33923.addModifier(smo33924);
smo33924.addClass('lyric lyric-0 lyric-hyphen');
const smo33925 = new VF.Annotation('lie');
smo33925.setAttribute('id', 'smo33925');
smo33925.setFont('Merriweather', 12, 'normal');
smo33925.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33923.addModifier(smo33925);
smo33925.addClass('lyric lyric-1 lyric-hyphen');
smo33947v0ar.push(smo33923);
const smo33926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo33926'] = smo33926;
smo33926.setAttribute('id', 'smo33926');
const smo33927 = new VF.Annotation('me');
smo33927.setAttribute('id', 'smo33927');
smo33927.setFont('Merriweather', 12, 'normal');
smo33927.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33926.addModifier(smo33927);
smo33927.addClass('lyric lyric-0');
const smo33928 = new VF.Annotation('be');
smo33928.setAttribute('id', 'smo33928');
smo33928.setFont('Merriweather', 12, 'normal');
smo33928.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33926.addModifier(smo33928);
smo33928.addClass('lyric lyric-1 lyric-hyphen');
smo33947v0ar.push(smo33926);
const smo33929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33929'] = smo33929;
smo33929.setAttribute('id', 'smo33929');
smo33929.addModifier(new VF.Dot(), 0);
const smo33931 = new VF.Annotation('bald!');
smo33931.setAttribute('id', 'smo33931');
smo33931.setFont('Merriweather', 12, 'normal');
smo33931.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33929.addModifier(smo33931);
smo33931.addClass('lyric lyric-0');
const smo33930 = new VF.Annotation('dich!');
smo33930.setAttribute('id', 'smo33930');
smo33930.setFont('Merriweather', 12, 'normal');
smo33930.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33929.addModifier(smo33930);
smo33930.addClass('lyric lyric-1');
smo33947v0ar.push(smo33929);
smo33947v0.addTickables(smo33947v0ar)
fmtsmo3394734.joinVoices([smo33947v0]);
const fmtsmo3517434 = new VF.Formatter();
//
// voices and notes for stave 1 34
const smo35174v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35174v0ar = [];
const smo35156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo35156'] = smo35156;
smo35156.setAttribute('id', 'smo35156');
smo35156.addModifier(new VF.Dot(), 0);
smo35174v0ar.push(smo35156);
const smo35157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35157'] = smo35157;
smo35157.setAttribute('id', 'smo35157');
smo35174v0ar.push(smo35157);
const smo35158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35158'] = smo35158;
smo35158.setAttribute('id', 'smo35158');
smo35174v0ar.push(smo35158);
smo35174v0.addTickables(smo35174v0ar)
fmtsmo3517434.joinVoices([smo35174v0]);
const fmtsmo3636334 = new VF.Formatter();
//
// voices and notes for stave 2 34
const smo36363v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36363v0ar = [];
const smo36346 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
noteHash['smo36346'] = smo36346;
smo36346.setAttribute('id', 'smo36346');
smo36346.addModifier(new VF.Dot(), 0);
smo36363v0ar.push(smo36346);
smo36363v0.addTickables(smo36363v0ar)
fmtsmo3636334.joinVoices([smo36363v0]);
const smo36363v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36363v1ar = [];
const smo36347 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo36347'] = smo36347;
smo36347.setAttribute('id', 'smo36347');
smo36347.addModifier(new VF.Dot(), 0);
smo36363v1ar.push(smo36347);
smo36363v1.addTickables(smo36363v1ar)
fmtsmo3636334.joinVoices([smo36363v1]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3394734.format([smo33947v0,smo35174v0,smo36363v0,smo36363v1], 200);
const stavesmo33947 = new VF.Stave(433, 778.5133013333334, 214);
stavesmo33947.setAttribute('id', 'stavesmo33947');
stavesmo33947.setBegBarType(VF.Barline.type.NONE);
stavesmo33947.setContext(context);
stavesmo33947.draw();
smo33947v0.draw(context, stavesmo33947);
const stavesmo35174 = new VF.Stave(433, 893.5133013333334, 214);
stavesmo35174.setAttribute('id', 'stavesmo35174');
stavesmo35174.setBegBarType(VF.Barline.type.NONE);
stavesmo35174.setContext(context);
stavesmo35174.draw();
smo35174v0.draw(context, stavesmo35174);
const stavesmo36363 = new VF.Stave(433, 1026.5133013333334, 214);
stavesmo36363.setAttribute('id', 'stavesmo36363');
stavesmo36363.setBegBarType(VF.Barline.type.NONE);
stavesmo36363.setContext(context);
stavesmo36363.draw();
smo36363v0.draw(context, stavesmo36363);
smo36363v1.draw(context, stavesmo36363);
const fmtsmo3396935 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo33969v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33969v0ar = [];
const smo33948 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33948'] = smo33948;
smo33948.setAttribute('id', 'smo33948');
smo33948.addModifier(new VF.Dot(), 0);
const smo33949 = new VF.Annotation('-');
smo33949.setAttribute('id', 'smo33949');
smo33949.setFont('Merriweather', 12, 'normal');
smo33949.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33948.addModifier(smo33949);
smo33949.addClass('lyric lyric-0 lyric-hyphen');
smo33969v0ar.push(smo33948);
const smo33950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33950'] = smo33950;
smo33950.setAttribute('id', 'smo33950');
smo33969v0ar.push(smo33950);
const smo33951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo33951'] = smo33951;
smo33951.setAttribute('id', 'smo33951');
const smo33952 = new VF.Annotation('Ich');
smo33952.setAttribute('id', 'smo33952');
smo33952.setFont('Merriweather', 12, 'normal');
smo33952.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33951.addModifier(smo33952);
smo33952.addClass('lyric lyric-0');
const smo33953 = new VF.Annotation('ich');
smo33953.setAttribute('id', 'smo33953');
smo33953.setFont('Merriweather', 12, 'normal');
smo33953.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33951.addModifier(smo33953);
smo33953.addClass('lyric lyric-1');
smo33969v0ar.push(smo33951);
smo33969v0.addTickables(smo33969v0ar)
fmtsmo3396935.joinVoices([smo33969v0]);
const fmtsmo3519135 = new VF.Formatter();
//
// voices and notes for stave 1 35
const smo35191v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35191v0ar = [];
const smo35175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo35175'] = smo35175;
smo35175.setAttribute('id', 'smo35175');
smo35175.addModifier(new VF.Dot(), 0);
smo35191v0ar.push(smo35175);
smo35191v0.addTickables(smo35191v0ar)
fmtsmo3519135.joinVoices([smo35191v0]);
const fmtsmo3638335 = new VF.Formatter();
//
// voices and notes for stave 2 35
const smo36383v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36383v0ar = [];
const smo36364 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo36364'] = smo36364;
smo36364.setAttribute('id', 'smo36364');
smo36364.addModifier(new VF.Dot(), 0);
smo36383v0ar.push(smo36364);
smo36383v0.addTickables(smo36383v0ar)
fmtsmo3638335.joinVoices([smo36383v0]);
const smo36383v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36383v1ar = [];
const smo36365 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo36365'] = smo36365;
smo36365.setAttribute('id', 'smo36365');
smo36383v1ar.push(smo36365);
const smo36366 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo36366'] = smo36366;
smo36366.setAttribute('id', 'smo36366');
smo36383v1ar.push(smo36366);
const smo36367 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo36367'] = smo36367;
smo36367.setAttribute('id', 'smo36367');
smo36367.addModifier(new VF.Dot(), 0);
smo36383v1ar.push(smo36367);
smo36383v1.addTickables(smo36383v1ar)
fmtsmo3638335.joinVoices([smo36383v1]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3396935.format([smo33969v0,smo35191v0,smo36383v0,smo36383v1], 155);
const stavesmo33969 = new VF.Stave(647, 778.5133013333334, 169);
stavesmo33969.setAttribute('id', 'stavesmo33969');
stavesmo33969.setBegBarType(VF.Barline.type.NONE);
stavesmo33969.setContext(context);
stavesmo33969.draw();
smo33969v0.draw(context, stavesmo33969);
const stavesmo35191 = new VF.Stave(647, 893.5133013333334, 169);
stavesmo35191.setAttribute('id', 'stavesmo35191');
stavesmo35191.setBegBarType(VF.Barline.type.NONE);
stavesmo35191.setContext(context);
stavesmo35191.draw();
smo35191v0.draw(context, stavesmo35191);
const stavesmo36383 = new VF.Stave(647, 1026.5133013333334, 169);
stavesmo36383.setAttribute('id', 'stavesmo36383');
stavesmo36383.setBegBarType(VF.Barline.type.NONE);
stavesmo36383.setContext(context);
stavesmo36383.draw();
smo36383v0.draw(context, stavesmo36383);
smo36383v1.draw(context, stavesmo36383);
const fmtsmo3399436 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo33994v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33994v0ar = [];
const smo33970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33970'] = smo33970;
smo33970.setAttribute('id', 'smo33970');
const smo33971 = new VF.Annotation('kom');
smo33971.setAttribute('id', 'smo33971');
smo33971.setFont('Merriweather', 12, 'normal');
smo33971.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33970.addModifier(smo33971);
smo33971.addClass('lyric lyric-0 lyric-hyphen');
const smo33972 = new VF.Annotation('lie');
smo33972.setAttribute('id', 'smo33972');
smo33972.setFont('Merriweather', 12, 'normal');
smo33972.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33970.addModifier(smo33972);
smo33972.addClass('lyric lyric-1 lyric-hyphen');
smo33994v0ar.push(smo33970);
const smo33973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo33973'] = smo33973;
smo33973.setAttribute('id', 'smo33973');
const smo33974 = new VF.Annotation('me');
smo33974.setAttribute('id', 'smo33974');
smo33974.setFont('Merriweather', 12, 'normal');
smo33974.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33973.addModifier(smo33974);
smo33974.addClass('lyric lyric-0');
const smo33975 = new VF.Annotation('be');
smo33975.setAttribute('id', 'smo33975');
smo33975.setFont('Merriweather', 12, 'normal');
smo33975.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33973.addModifier(smo33975);
smo33975.addClass('lyric lyric-1');
smo33994v0ar.push(smo33973);
const smo33976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33976'] = smo33976;
smo33976.setAttribute('id', 'smo33976');
smo33976.addModifier(new VF.Dot(), 0);
const smo33977 = new VF.Annotation('bald');
smo33977.setAttribute('id', 'smo33977');
smo33977.setFont('Merriweather', 12, 'normal');
smo33977.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33976.addModifier(smo33977);
smo33977.addClass('lyric lyric-0');
const smo33978 = new VF.Annotation('dich!');
smo33978.setAttribute('id', 'smo33978');
smo33978.setFont('Merriweather', 12, 'normal');
smo33978.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33976.addModifier(smo33978);
smo33978.addClass('lyric lyric-1');
smo33994v0ar.push(smo33976);
smo33994v0.addTickables(smo33994v0ar)
fmtsmo3399436.joinVoices([smo33994v0]);
const fmtsmo3520836 = new VF.Formatter();
//
// voices and notes for stave 1 36
const smo35208v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35208v0ar = [];
const smo35192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo35192'] = smo35192;
smo35192.setAttribute('id', 'smo35192');
smo35192.addModifier(new VF.Dot(), 0);
smo35208v0ar.push(smo35192);
smo35208v0.addTickables(smo35208v0ar)
fmtsmo3520836.joinVoices([smo35208v0]);
const fmtsmo3640336 = new VF.Formatter();
//
// voices and notes for stave 2 36
const smo36403v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36403v0ar = [];
const smo36384 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo36384'] = smo36384;
smo36384.setAttribute('id', 'smo36384');
smo36384.addModifier(new VF.Dot(), 0);
smo36403v0ar.push(smo36384);
smo36403v0.addTickables(smo36403v0ar)
fmtsmo3640336.joinVoices([smo36403v0]);
const smo36403v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36403v1ar = [];
const smo36385 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["dn/4/r"]}'))
noteHash['smo36385'] = smo36385;
smo36385.setAttribute('id', 'smo36385');
smo36385.addModifier(new VF.Dot(), 0);
smo36403v1ar.push(smo36385);
const smo36386 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/4/r"]}'))
noteHash['smo36386'] = smo36386;
smo36386.setAttribute('id', 'smo36386');
smo36403v1ar.push(smo36386);
const smo36387 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo36387'] = smo36387;
smo36387.setAttribute('id', 'smo36387');
smo36403v1ar.push(smo36387);
smo36403v1.addTickables(smo36403v1ar)
fmtsmo3640336.joinVoices([smo36403v1]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3399436.format([smo33994v0,smo35208v0,smo36403v0,smo36403v1], 200);
const stavesmo33994 = new VF.Stave(816, 778.5133013333334, 214);
stavesmo33994.setAttribute('id', 'stavesmo33994');
stavesmo33994.setBegBarType(VF.Barline.type.NONE);
stavesmo33994.setContext(context);
stavesmo33994.draw();
smo33994v0.draw(context, stavesmo33994);
const stavesmo35208 = new VF.Stave(816, 893.5133013333334, 214);
stavesmo35208.setAttribute('id', 'stavesmo35208');
stavesmo35208.setBegBarType(VF.Barline.type.NONE);
stavesmo35208.setContext(context);
stavesmo35208.draw();
smo35208v0.draw(context, stavesmo35208);
const stavesmo36403 = new VF.Stave(816, 1026.5133013333334, 214);
stavesmo36403.setAttribute('id', 'stavesmo36403');
stavesmo36403.setBegBarType(VF.Barline.type.NONE);
stavesmo36403.setContext(context);
stavesmo36403.draw();
smo36403v0.draw(context, stavesmo36403);
smo36403v1.draw(context, stavesmo36403);
const fmtsmo3401637 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo34016v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34016v0ar = [];
const smo33995 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33995'] = smo33995;
smo33995.setAttribute('id', 'smo33995');
smo34016v0ar.push(smo33995);
const smo33996 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33996'] = smo33996;
smo33996.setAttribute('id', 'smo33996');
smo34016v0ar.push(smo33996);
const smo33997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33997'] = smo33997;
smo33997.setAttribute('id', 'smo33997');
smo34016v0ar.push(smo33997);
const smo33998 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo33998'] = smo33998;
smo33998.setAttribute('id', 'smo33998');
const smo33999 = new VF.Annotation('Mein');
smo33999.setAttribute('id', 'smo33999');
smo33999.setFont('Merriweather', 12, 'normal');
smo33999.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33998.addModifier(smo33999);
smo33999.addClass('lyric lyric-0');
const smo34000 = new VF.Annotation('Tra');
smo34000.setAttribute('id', 'smo34000');
smo34000.setFont('Merriweather', 12, 'normal');
smo34000.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33998.addModifier(smo34000);
smo34000.addClass('lyric lyric-1 lyric-hyphen');
smo34016v0ar.push(smo33998);
smo34016v0.addTickables(smo34016v0ar)
fmtsmo3401637.joinVoices([smo34016v0]);
const fmtsmo3522537 = new VF.Formatter();
//
// voices and notes for stave 1 37
const smo35225v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35225v0ar = [];
const smo35209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo35209'] = smo35209;
smo35209.setAttribute('id', 'smo35209');
smo35209.addModifier(new VF.Dot(), 0);
smo35225v0ar.push(smo35209);
smo35225v0.addTickables(smo35225v0ar)
fmtsmo3522537.joinVoices([smo35225v0]);
const fmtsmo3642337 = new VF.Formatter();
//
// voices and notes for stave 2 37
const smo36423v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36423v0ar = [];
const smo36404 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo36404'] = smo36404;
smo36404.setAttribute('id', 'smo36404');
smo36404.addModifier(new VF.Dot(), 0);
smo36423v0ar.push(smo36404);
smo36423v0.addTickables(smo36423v0ar)
fmtsmo3642337.joinVoices([smo36423v0]);
const smo36423v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36423v1ar = [];
const smo36405 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo36405'] = smo36405;
smo36405.setAttribute('id', 'smo36405');
smo36423v1ar.push(smo36405);
const smo36406 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo36406'] = smo36406;
smo36406.setAttribute('id', 'smo36406');
smo36423v1ar.push(smo36406);
const smo36407 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo36407'] = smo36407;
smo36407.setAttribute('id', 'smo36407');
smo36407.addModifier(new VF.Dot(), 0);
smo36423v1ar.push(smo36407);
smo36423v1.addTickables(smo36423v1ar)
fmtsmo3642337.joinVoices([smo36423v1]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3401637.format([smo34016v0,smo35225v0,smo36423v0,smo36423v1], 170);
const stavesmo34016 = new VF.Stave(1030, 778.5133013333334, 184);
stavesmo34016.setAttribute('id', 'stavesmo34016');
stavesmo34016.setBegBarType(VF.Barline.type.NONE);
stavesmo34016.setContext(context);
stavesmo34016.draw();
smo34016v0.draw(context, stavesmo34016);
const stavesmo35225 = new VF.Stave(1030, 893.5133013333334, 184);
stavesmo35225.setAttribute('id', 'stavesmo35225');
stavesmo35225.setBegBarType(VF.Barline.type.NONE);
stavesmo35225.setContext(context);
stavesmo35225.draw();
smo35225v0.draw(context, stavesmo35225);
const stavesmo36423 = new VF.Stave(1030, 1026.5133013333334, 184);
stavesmo36423.setAttribute('id', 'stavesmo36423');
stavesmo36423.setBegBarType(VF.Barline.type.NONE);
stavesmo36423.setContext(context);
stavesmo36423.draw();
smo36423v0.draw(context, stavesmo36423);
smo36423v1.draw(context, stavesmo36423);
const rightsmo36899stavesmo340162 = new VF.StaveConnector(stavesmo34016, stavesmo36423).setType(0);
rightsmo36899stavesmo340162.setContext(context).draw();
const fmtsmo3403538 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo34035v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34035v0ar = [];
const smo34017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo34017'] = smo34017;
smo34017.setAttribute('id', 'smo34017');
smo34017.addModifier(new VF.Dot(), 0);
const smo34018 = new VF.Annotation('Shatz');
smo34018.setAttribute('id', 'smo34018');
smo34018.setFont('Merriweather', 12, 'normal');
smo34018.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34017.addModifier(smo34018);
smo34018.addClass('lyric lyric-0');
const smo34019 = new VF.Annotation('ra!');
smo34019.setAttribute('id', 'smo34019');
smo34019.setFont('Merriweather', 12, 'normal');
smo34019.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34017.addModifier(smo34019);
smo34019.addClass('lyric lyric-1');
smo34035v0ar.push(smo34017);
smo34035v0.addTickables(smo34035v0ar)
fmtsmo3403538.joinVoices([smo34035v0]);
const fmtsmo3524238 = new VF.Formatter();
//
// voices and notes for stave 1 38
const smo35242v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35242v0ar = [];
const smo35226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n","bn/4/n"]}'))
noteHash['smo35226'] = smo35226;
smo35226.setAttribute('id', 'smo35226');
smo35226.addModifier(new VF.Dot(), 0);
smo35226.addModifier(new VF.Dot(), 1);
smo35242v0ar.push(smo35226);
smo35242v0.addTickables(smo35242v0ar)
fmtsmo3524238.joinVoices([smo35242v0]);
const fmtsmo3644338 = new VF.Formatter();
//
// voices and notes for stave 2 38
const smo36443v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36443v0ar = [];
const smo36424 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo36424'] = smo36424;
smo36424.setAttribute('id', 'smo36424');
smo36443v0ar.push(smo36424);
const smo36425 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo36425'] = smo36425;
smo36425.setAttribute('id', 'smo36425');
smo36443v0ar.push(smo36425);
const smo36426 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo36426'] = smo36426;
smo36426.setAttribute('id', 'smo36426');
smo36443v0ar.push(smo36426);
const smo36427 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo36427'] = smo36427;
smo36427.setAttribute('id', 'smo36427');
smo36443v0ar.push(smo36427);
smo36443v0.addTickables(smo36443v0ar)
fmtsmo3644338.joinVoices([smo36443v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3403538.format([smo34035v0,smo35242v0,smo36443v0], 150);
const stavesmo34035 = new VF.Stave(66, 1166.5133013333334, 224);
stavesmo34035.setAttribute('id', 'stavesmo34035');
stavesmo34035.setBegBarType(1);
stavesmo34035.addClef('treble');
const keysmo34035 = new VF.KeySignature('G');
keysmo34035.addToStave(stavesmo34035);
stavesmo34035.setContext(context);
stavesmo34035.draw();
smo34035v0.draw(context, stavesmo34035);
const stavesmo35242 = new VF.Stave(66, 1298.5133013333334, 224);
stavesmo35242.setAttribute('id', 'stavesmo35242');
stavesmo35242.setBegBarType(1);
stavesmo35242.addClef('treble');
const keysmo35242 = new VF.KeySignature('G');
keysmo35242.addToStave(stavesmo35242);
stavesmo35242.setContext(context);
stavesmo35242.draw();
smo35242v0.draw(context, stavesmo35242);
const stavesmo36443 = new VF.Stave(66, 1424.5133013333334, 224);
stavesmo36443.setAttribute('id', 'stavesmo36443');
stavesmo36443.setBegBarType(1);
stavesmo36443.addClef('bass');
const keysmo36443 = new VF.KeySignature('G');
keysmo36443.addToStave(stavesmo36443);
stavesmo36443.setContext(context);
stavesmo36443.draw();
smo36443v0.draw(context, stavesmo36443);
const leftsmo36899stavesmo340352 = new VF.StaveConnector(stavesmo34035, stavesmo36443).setType(1);
leftsmo36899stavesmo340352.setContext(context).draw();
const fmtsmo3406639 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo34066v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34066v0ar = [];
const smo34036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34036'] = smo34036;
smo34036.setAttribute('id', 'smo34036');
const smo34037 = new VF.Annotation('-');
smo34037.setAttribute('id', 'smo34037');
smo34037.setFont('Merriweather', 12, 'normal');
smo34037.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34036.addModifier(smo34037);
smo34037.addClass('lyric lyric-0 lyric-hyphen');
smo34066v0ar.push(smo34036);
const smo34038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34038'] = smo34038;
smo34038.setAttribute('id', 'smo34038');
smo34066v0ar.push(smo34038);
const smo34039 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34039'] = smo34039;
smo34039.setAttribute('id', 'smo34039');
const smo34040 = new VF.Annotation('der');
smo34040.setAttribute('id', 'smo34040');
smo34040.setFont('Merriweather', 12, 'normal');
smo34040.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34039.addModifier(smo34040);
smo34040.addClass('lyric lyric-0');
const smo34041 = new VF.Annotation('ich');
smo34041.setAttribute('id', 'smo34041');
smo34041.setFont('Merriweather', 12, 'normal');
smo34041.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34039.addModifier(smo34041);
smo34041.addClass('lyric lyric-1');
smo34066v0ar.push(smo34039);
const smo34042 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34042'] = smo34042;
smo34042.setAttribute('id', 'smo34042');
const smo34043 = new VF.Annotation('ist');
smo34043.setAttribute('id', 'smo34043');
smo34043.setFont('Merriweather', 12, 'normal');
smo34043.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34042.addModifier(smo34043);
smo34043.addClass('lyric lyric-0');
const smo34044 = new VF.Annotation('hö');
smo34044.setAttribute('id', 'smo34044');
smo34044.setFont('Merriweather', 12, 'normal');
smo34044.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34042.addModifier(smo34044);
smo34044.addClass('lyric lyric-1 lyric-hyphen');
smo34066v0ar.push(smo34042);
const smo34045 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo34045'] = smo34045;
smo34045.setAttribute('id', 'smo34045');
const smo34046 = new VF.Annotation('Po');
smo34046.setAttribute('id', 'smo34046');
smo34046.setFont('Merriweather', 12, 'normal');
smo34046.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34045.addModifier(smo34046);
smo34046.addClass('lyric lyric-0 lyric-hyphen');
const smo34047 = new VF.Annotation('re');
smo34047.setAttribute('id', 'smo34047');
smo34047.setFont('Merriweather', 12, 'normal');
smo34047.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34045.addModifier(smo34047);
smo34047.addClass('lyric lyric-1');
smo34066v0ar.push(smo34045);
const smo34048 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo34048'] = smo34048;
smo34048.setAttribute('id', 'smo34048');
const smo34049 = new VF.Annotation('stil');
smo34049.setAttribute('id', 'smo34049');
smo34049.setFont('Merriweather', 12, 'normal');
smo34049.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34048.addModifier(smo34049);
smo34049.addClass('lyric lyric-0 lyric-hyphen');
const smo34050 = new VF.Annotation('sein');
smo34050.setAttribute('id', 'smo34050');
smo34050.setFont('Merriweather', 12, 'normal');
smo34050.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34048.addModifier(smo34050);
smo34050.addClass('lyric lyric-1');
smo34066v0ar.push(smo34048);
smo34066v0.addTickables(smo34066v0ar)
fmtsmo3406639.joinVoices([smo34066v0]);
const fmtsmo3526139 = new VF.Formatter();
//
// voices and notes for stave 1 39
const smo35261v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35261v0ar = [];
const smo35243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n","bn/4/n"]}'))
noteHash['smo35243'] = smo35243;
smo35243.setAttribute('id', 'smo35243');
smo35243.addModifier(new VF.Dot(), 0);
smo35243.addModifier(new VF.Dot(), 1);
smo35261v0ar.push(smo35243);
const smo35244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35244'] = smo35244;
smo35244.setAttribute('id', 'smo35244');
smo35261v0ar.push(smo35244);
const smo35245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35245'] = smo35245;
smo35245.setAttribute('id', 'smo35245');
smo35261v0ar.push(smo35245);
smo35261v0.addTickables(smo35261v0ar)
fmtsmo3526139.joinVoices([smo35261v0]);
const fmtsmo3646339 = new VF.Formatter();
//
// voices and notes for stave 2 39
const smo36463v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36463v0ar = [];
const smo36444 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo36444'] = smo36444;
smo36444.setAttribute('id', 'smo36444');
smo36463v0ar.push(smo36444);
const smo36445 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo36445'] = smo36445;
smo36445.setAttribute('id', 'smo36445');
smo36463v0ar.push(smo36445);
const smo36446 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo36446'] = smo36446;
smo36446.setAttribute('id', 'smo36446');
smo36463v0ar.push(smo36446);
const smo36447 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo36447'] = smo36447;
smo36447.setAttribute('id', 'smo36447');
smo36463v0ar.push(smo36447);
smo36463v0.addTickables(smo36463v0ar)
fmtsmo3646339.joinVoices([smo36463v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
const dirsmo43147 = smo34042.getStemDirection();
smo34042.setStemDirection(dirsmo43147);
smo34045.setStemDirection(dirsmo43147);
smo34048.setStemDirection(dirsmo43147);
const smo43147 = new VF.Beam([smo34042,smo34045,smo34048]);
 
// formatting measures in staff group smo36899
fmtsmo3406639.format([smo34066v0,smo35261v0,smo36463v0], 271);
const stavesmo34066 = new VF.Stave(290, 1166.5133013333334, 285);
stavesmo34066.setAttribute('id', 'stavesmo34066');
stavesmo34066.setBegBarType(VF.Barline.type.NONE);
stavesmo34066.setContext(context);
stavesmo34066.draw();
smo34066v0.draw(context, stavesmo34066);
smo43147.setContext(context);
smo43147.draw();
const stavesmo35261 = new VF.Stave(290, 1298.5133013333334, 285);
stavesmo35261.setAttribute('id', 'stavesmo35261');
stavesmo35261.setBegBarType(VF.Barline.type.NONE);
stavesmo35261.setContext(context);
stavesmo35261.draw();
smo35261v0.draw(context, stavesmo35261);
const stavesmo36463 = new VF.Stave(290, 1424.5133013333334, 285);
stavesmo36463.setAttribute('id', 'stavesmo36463');
stavesmo36463.setBegBarType(VF.Barline.type.NONE);
stavesmo36463.setContext(context);
stavesmo36463.draw();
smo36463v0.draw(context, stavesmo36463);
const fmtsmo3408540 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo34085v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34085v0ar = [];
const smo34067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo34067'] = smo34067;
smo34067.setAttribute('id', 'smo34067');
smo34067.addModifier(new VF.Dot(), 0);
const smo34068 = new VF.Annotation('lion');
smo34068.setAttribute('id', 'smo34068');
smo34068.setFont('Merriweather', 12, 'normal');
smo34068.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34067.addModifier(smo34068);
smo34068.addClass('lyric lyric-0');
const smo34069 = new VF.Annotation('Lied!');
smo34069.setAttribute('id', 'smo34069');
smo34069.setFont('Merriweather', 12, 'normal');
smo34069.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34067.addModifier(smo34069);
smo34069.addClass('lyric lyric-1');
smo34085v0ar.push(smo34067);
smo34085v0.addTickables(smo34085v0ar)
fmtsmo3408540.joinVoices([smo34085v0]);
const fmtsmo3527840 = new VF.Formatter();
//
// voices and notes for stave 1 40
const smo35278v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35278v0ar = [];
const smo35262 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
noteHash['smo35262'] = smo35262;
smo35262.setAttribute('id', 'smo35262');
smo35262.addModifier(new VF.Dot(), 0);
smo35262.addModifier(new VF.Dot(), 1);
smo35278v0ar.push(smo35262);
smo35278v0.addTickables(smo35278v0ar)
fmtsmo3527840.joinVoices([smo35278v0]);
const fmtsmo3648740 = new VF.Formatter();
//
// voices and notes for stave 2 40
const smo36487v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36487v0ar = [];
const smo36464 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo36464'] = smo36464;
smo36464.setAttribute('id', 'smo36464');
smo36487v0ar.push(smo36464);
const smo36465 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo36465'] = smo36465;
smo36465.setAttribute('id', 'smo36465');
smo36487v0ar.push(smo36465);
const smo36466 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo36466'] = smo36466;
smo36466.setAttribute('id', 'smo36466');
smo36487v0ar.push(smo36466);
const smo36467 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo36467'] = smo36467;
smo36467.setAttribute('id', 'smo36467');
smo36487v0ar.push(smo36467);
smo36487v0.addTickables(smo36487v0ar)
fmtsmo3648740.joinVoices([smo36487v0]);
const smo36487v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36487v1ar = [];
const smo36468 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo36468'] = smo36468;
smo36468.setAttribute('id', 'smo36468');
smo36487v1ar.push(smo36468);
const smo36469 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo36469'] = smo36469;
smo36469.setAttribute('id', 'smo36469');
smo36487v1ar.push(smo36469);
const smo36470 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo36470'] = smo36470;
smo36470.setAttribute('id', 'smo36470');
smo36487v1ar.push(smo36470);
const smo36471 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo36471'] = smo36471;
smo36471.setAttribute('id', 'smo36471');
smo36487v1ar.push(smo36471);
smo36487v1.addTickables(smo36487v1ar)
fmtsmo3648740.joinVoices([smo36487v1]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3408540.format([smo34085v0,smo35278v0,smo36487v0,smo36487v1], 145);
const stavesmo34085 = new VF.Stave(575, 1166.5133013333334, 159);
stavesmo34085.setAttribute('id', 'stavesmo34085');
stavesmo34085.setBegBarType(VF.Barline.type.NONE);
stavesmo34085.setContext(context);
stavesmo34085.draw();
smo34085v0.draw(context, stavesmo34085);
const stavesmo35278 = new VF.Stave(575, 1298.5133013333334, 159);
stavesmo35278.setAttribute('id', 'stavesmo35278');
stavesmo35278.setBegBarType(VF.Barline.type.NONE);
stavesmo35278.setContext(context);
stavesmo35278.draw();
smo35278v0.draw(context, stavesmo35278);
const stavesmo36487 = new VF.Stave(575, 1424.5133013333334, 159);
stavesmo36487.setAttribute('id', 'stavesmo36487');
stavesmo36487.setBegBarType(VF.Barline.type.NONE);
stavesmo36487.setContext(context);
stavesmo36487.draw();
smo36487v0.draw(context, stavesmo36487);
smo36487v1.draw(context, stavesmo36487);
const fmtsmo3411541 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo34115v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34115v0ar = [];
const smo34086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34086'] = smo34086;
smo34086.setAttribute('id', 'smo34086');
const smo34087 = new VF.Annotation('-');
smo34087.setAttribute('id', 'smo34087');
smo34087.setFont('Merriweather', 12, 'normal');
smo34087.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34086.addModifier(smo34087);
smo34087.addClass('lyric lyric-0 lyric-hyphen');
smo34115v0ar.push(smo34086);
const smo34088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo34088'] = smo34088;
smo34088.setAttribute('id', 'smo34088');
const smo34089 = new VF.Annotation('er');
smo34089.setAttribute('id', 'smo34089');
smo34089.setFont('Merriweather', 12, 'normal');
smo34089.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34088.addModifier(smo34089);
smo34089.addClass('lyric lyric-0');
const smo34090 = new VF.Annotation('ich');
smo34090.setAttribute('id', 'smo34090');
smo34090.setFont('Merriweather', 12, 'normal');
smo34090.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34088.addModifier(smo34090);
smo34090.addClass('lyric lyric-1');
smo34115v0ar.push(smo34088);
const smo34091 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34091'] = smo34091;
smo34091.setAttribute('id', 'smo34091');
const smo34092 = new VF.Annotation('fährt');
smo34092.setAttribute('id', 'smo34092');
smo34092.setFont('Merriweather', 12, 'normal');
smo34092.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34091.addModifier(smo34092);
smo34092.addClass('lyric lyric-0');
const smo34093 = new VF.Annotation('hö');
smo34093.setAttribute('id', 'smo34093');
smo34093.setFont('Merriweather', 12, 'normal');
smo34093.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34091.addModifier(smo34093);
smo34093.addClass('lyric lyric-1 lyric-hyphen');
smo34115v0ar.push(smo34091);
const smo34094 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34094'] = smo34094;
smo34094.setAttribute('id', 'smo34094');
const smo34095 = new VF.Annotation('durch');
smo34095.setAttribute('id', 'smo34095');
smo34095.setFont('Merriweather', 12, 'normal');
smo34095.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34094.addModifier(smo34095);
smo34095.addClass('lyric lyric-0');
const smo34096 = new VF.Annotation('re');
smo34096.setAttribute('id', 'smo34096');
smo34096.setFont('Merriweather', 12, 'normal');
smo34096.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34094.addModifier(smo34096);
smo34096.addClass('lyric lyric-1');
smo34115v0ar.push(smo34094);
const smo34097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo34097'] = smo34097;
smo34097.setAttribute('id', 'smo34097');
const smo34098 = new VF.Annotation('die');
smo34098.setAttribute('id', 'smo34098');
smo34098.setFont('Merriweather', 12, 'normal');
smo34098.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34097.addModifier(smo34098);
smo34098.addClass('lyric lyric-0');
const smo34099 = new VF.Annotation('es');
smo34099.setAttribute('id', 'smo34099');
smo34099.setFont('Merriweather', 12, 'normal');
smo34099.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34097.addModifier(smo34099);
smo34099.addClass('lyric lyric-1');
smo34115v0ar.push(smo34097);
smo34115v0.addTickables(smo34115v0ar)
fmtsmo3411541.joinVoices([smo34115v0]);
const fmtsmo3529641 = new VF.Formatter();
//
// voices and notes for stave 1 41
const smo35296v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35296v0ar = [];
const smo35279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
noteHash['smo35279'] = smo35279;
smo35279.setAttribute('id', 'smo35279');
smo35279.addModifier(new VF.Dot(), 0);
smo35279.addModifier(new VF.Dot(), 1);
smo35296v0ar.push(smo35279);
const smo35280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35280'] = smo35280;
smo35280.setAttribute('id', 'smo35280');
smo35280.addModifier(new VF.Dot(), 0);
smo35296v0ar.push(smo35280);
smo35296v0.addTickables(smo35296v0ar)
fmtsmo3529641.joinVoices([smo35296v0]);
const fmtsmo3651141 = new VF.Formatter();
//
// voices and notes for stave 2 41
const smo36511v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36511v0ar = [];
const smo36488 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo36488'] = smo36488;
smo36488.setAttribute('id', 'smo36488');
smo36511v0ar.push(smo36488);
const smo36489 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo36489'] = smo36489;
smo36489.setAttribute('id', 'smo36489');
smo36511v0ar.push(smo36489);
const smo36490 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo36490'] = smo36490;
smo36490.setAttribute('id', 'smo36490');
smo36511v0ar.push(smo36490);
const smo36491 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo36491'] = smo36491;
smo36491.setAttribute('id', 'smo36491');
smo36511v0ar.push(smo36491);
smo36511v0.addTickables(smo36511v0ar)
fmtsmo3651141.joinVoices([smo36511v0]);
const smo36511v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36511v1ar = [];
const smo36492 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo36492'] = smo36492;
smo36492.setAttribute('id', 'smo36492');
smo36511v1ar.push(smo36492);
const smo36493 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo36493'] = smo36493;
smo36493.setAttribute('id', 'smo36493');
smo36511v1ar.push(smo36493);
const smo36494 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo36494'] = smo36494;
smo36494.setAttribute('id', 'smo36494');
smo36511v1ar.push(smo36494);
const smo36495 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo36495'] = smo36495;
smo36495.setAttribute('id', 'smo36495');
smo36511v1ar.push(smo36495);
smo36511v1.addTickables(smo36511v1ar)
fmtsmo3651141.joinVoices([smo36511v1]);
// create beam groups and tuplets for format grp smo36899 before formatting
const dirsmo43160 = smo34091.getStemDirection();
smo34091.setStemDirection(dirsmo43160);
smo34094.setStemDirection(dirsmo43160);
smo34097.setStemDirection(dirsmo43160);
const smo43160 = new VF.Beam([smo34091,smo34094,smo34097]);
 
// formatting measures in staff group smo36899
fmtsmo3411541.format([smo34115v0,smo35296v0,smo36511v0,smo36511v1], 291);
const stavesmo34115 = new VF.Stave(734, 1166.5133013333334, 305);
stavesmo34115.setAttribute('id', 'stavesmo34115');
stavesmo34115.setBegBarType(VF.Barline.type.NONE);
stavesmo34115.setContext(context);
stavesmo34115.draw();
smo34115v0.draw(context, stavesmo34115);
smo43160.setContext(context);
smo43160.draw();
const stavesmo35296 = new VF.Stave(734, 1298.5133013333334, 305);
stavesmo35296.setAttribute('id', 'stavesmo35296');
stavesmo35296.setBegBarType(VF.Barline.type.NONE);
stavesmo35296.setContext(context);
stavesmo35296.draw();
smo35296v0.draw(context, stavesmo35296);
const stavesmo36511 = new VF.Stave(734, 1424.5133013333334, 305);
stavesmo36511.setAttribute('id', 'stavesmo36511');
stavesmo36511.setBegBarType(VF.Barline.type.NONE);
stavesmo36511.setContext(context);
stavesmo36511.draw();
smo36511v0.draw(context, stavesmo36511);
smo36511v1.draw(context, stavesmo36511);
const fmtsmo3413742 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo34137v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34137v0ar = [];
const smo34116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34116'] = smo34116;
smo34116.setAttribute('id', 'smo34116');
smo34116.addModifier(new VF.Dot(), 0);
const smo34117 = new VF.Annotation('Fel');
smo34117.setAttribute('id', 'smo34117');
smo34117.setFont('Merriweather', 12, 'normal');
smo34117.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34116.addModifier(smo34117);
smo34117.addClass('lyric lyric-0 lyric-hyphen');
const smo34118 = new VF.Annotation('sin');
smo34118.setAttribute('id', 'smo34118');
smo34118.setFont('Merriweather', 12, 'normal');
smo34118.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34116.addModifier(smo34118);
smo34118.addClass('lyric lyric-1 lyric-hyphen');
smo34137v0ar.push(smo34116);
const smo34119 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo34119'] = smo34119;
smo34119.setAttribute('id', 'smo34119');
smo34119.addModifier(new VF.Dot(), 0);
const smo34120 = new VF.Annotation('er');
smo34120.setAttribute('id', 'smo34120');
smo34120.setFont('Merriweather', 12, 'normal');
smo34120.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34119.addModifier(smo34120);
smo34120.addClass('lyric lyric-0');
const smo34121 = new VF.Annotation('gen,');
smo34121.setAttribute('id', 'smo34121');
smo34121.setFont('Merriweather', 12, 'normal');
smo34121.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo34119.addModifier(smo34121);
smo34121.addClass('lyric lyric-1');
smo34137v0ar.push(smo34119);
smo34137v0.addTickables(smo34137v0ar)
fmtsmo3413742.joinVoices([smo34137v0]);
const fmtsmo3531342 = new VF.Formatter();
//
// voices and notes for stave 1 42
const smo35313v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35313v0ar = [];
const smo35297 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","f#/5/n","dn/6/n"]}'))
noteHash['smo35297'] = smo35297;
smo35297.setAttribute('id', 'smo35297');
smo35297.addModifier(new VF.Dot(), 0);
smo35297.addModifier(new VF.Dot(), 1);
smo35297.addModifier(new VF.Dot(), 2);
smo35313v0ar.push(smo35297);
smo35313v0.addTickables(smo35313v0ar)
fmtsmo3531342.joinVoices([smo35313v0]);
const fmtsmo3653342 = new VF.Formatter();
//
// voices and notes for stave 2 42
const smo36533v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36533v0ar = [];
const smo36512 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo36512'] = smo36512;
smo36512.setAttribute('id', 'smo36512');
smo36533v0ar.push(smo36512);
const smo36513 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo36513'] = smo36513;
smo36513.setAttribute('id', 'smo36513');
smo36533v0ar.push(smo36513);
const smo36514 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo36514'] = smo36514;
smo36514.setAttribute('id', 'smo36514');
smo36533v0ar.push(smo36514);
const smo36515 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo36515'] = smo36515;
smo36515.setAttribute('id', 'smo36515');
smo36533v0ar.push(smo36515);
smo36533v0.addTickables(smo36533v0ar)
fmtsmo3653342.joinVoices([smo36533v0]);
const smo36533v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36533v1ar = [];
const smo36516 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo36516'] = smo36516;
smo36516.setAttribute('id', 'smo36516');
smo36516.addModifier(new VF.Dot(), 0);
smo36533v1ar.push(smo36516);
const smo36517 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["cn/4/r"]}'))
noteHash['smo36517'] = smo36517;
smo36517.setAttribute('id', 'smo36517');
smo36517.addModifier(new VF.Dot(), 0);
smo36533v1ar.push(smo36517);
smo36533v1.addTickables(smo36533v1ar)
fmtsmo3653342.joinVoices([smo36533v1]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3413742.format([smo34137v0,smo35313v0,smo36533v0,smo36533v1], 160);
const stavesmo34137 = new VF.Stave(1039, 1166.5133013333334, 174);
stavesmo34137.setAttribute('id', 'stavesmo34137');
stavesmo34137.setBegBarType(VF.Barline.type.NONE);
stavesmo34137.setContext(context);
stavesmo34137.draw();
smo34137v0.draw(context, stavesmo34137);
const stavesmo35313 = new VF.Stave(1039, 1298.5133013333334, 174);
stavesmo35313.setAttribute('id', 'stavesmo35313');
stavesmo35313.setBegBarType(VF.Barline.type.NONE);
stavesmo35313.setContext(context);
stavesmo35313.draw();
smo35313v0.draw(context, stavesmo35313);
const stavesmo36533 = new VF.Stave(1039, 1424.5133013333334, 174);
stavesmo36533.setAttribute('id', 'stavesmo36533');
stavesmo36533.setBegBarType(VF.Barline.type.NONE);
stavesmo36533.setContext(context);
stavesmo36533.draw();
smo36533v0.draw(context, stavesmo36533);
smo36533v1.draw(context, stavesmo36533);
const rightsmo36899stavesmo341372 = new VF.StaveConnector(stavesmo34137, stavesmo36533).setType(0);
rightsmo36899stavesmo341372.setContext(context).draw();
const smo43813 = new VF.Curve(smo33726, smo33745, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo43813.setContext(context).draw();
const smo43814 = new VF.StaveTie({ first_note: smo33634, last_note: smo33653, first_indices: [0], last_indices: [0]});
smo43814.setContext(context).draw();
const smo43815 = new VF.StaveTie({ first_note: smo33702, last_note: smo33705, first_indices: [0], last_indices: [0]});
smo43815.setContext(context).draw();
const smo43816 = new VF.StaveTie({ first_note: smo33818, last_note: smo33837, first_indices: [0], last_indices: [0]});
smo43816.setContext(context).draw();
const smo43817 = new VF.StaveTie({ first_note: smo33874, last_note: null, first_indices: [0], last_indices: [0]});
smo43817.setContext(context).draw();
const smo43818 = new VF.StaveTie({ first_note: null, last_note: smo33893, first_indices: [0], last_indices: [0]});
smo43818.setContext(context).draw();
const smo43819 = new VF.StaveTie({ first_note: smo33929, last_note: smo33948, first_indices: [0], last_indices: [0]});
smo43819.setContext(context).draw();
const smo43820 = new VF.Curve(smo35084, smo35101, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo43820.setContext(context).draw();
const smo43821 = new VF.StaveTie({ first_note: smo35262, last_note: smo35279, first_indices: [0,1], last_indices: [0,1]});
smo43821.setContext(context).draw();
const smo43822 = new VF.StaveTie({ first_note: smo35226, last_note: smo35243, first_indices: [0,1], last_indices: [0,1]});
smo43822.setContext(context).draw();
const smo43823 = new VF.Curve(smo36262, smo36283, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"position_end":2}'));
smo43823.setContext(context).draw();
const smo43824 = new VF.StaveTie({ first_note: smo36304, last_note: null, first_indices: [0], last_indices: [0]});
smo43824.setContext(context).draw();
const smo43825 = new VF.StaveTie({ first_note: null, last_note: smo36325, first_indices: [0], last_indices: [0]});
smo43825.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo33635').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33636').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo33656').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33657').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo33659').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo33660').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo33662').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33663').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo33681').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33682').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo33684').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33685').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo33704').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo33703').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo33706').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo33708').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo33709').setAttributeNS('', 'transform', 'translate(0 8)');
context.svg.getElementById('vf-smo33728').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo33746').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo33748').setAttributeNS('', 'transform', 'translate(0 0)');
context.svg.getElementById('vf-smo33749').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo33751').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo33752').setAttributeNS('', 'transform', 'translate(0 8)');
context.svg.getElementById('vf-smo33755').setAttributeNS('', 'transform', 'translate(0 8)');
context.svg.getElementById('vf-smo33773').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo33774').setAttributeNS('', 'transform', 'translate(0 8)');
context.svg.getElementById('vf-smo33776').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33777').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo33795').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo33796').setAttributeNS('', 'transform', 'translate(0 34)');
context.svg.getElementById('vf-smo33798').setAttributeNS('', 'transform', 'translate(0 48)');
context.svg.getElementById('vf-smo33800').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33801').setAttributeNS('', 'transform', 'translate(0 34)');
context.svg.getElementById('vf-smo33820').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33819').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo33838').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo33839').setAttributeNS('', 'transform', 'translate(0 29)');
context.svg.getElementById('vf-smo33841').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo33842').setAttributeNS('', 'transform', 'translate(0 29)');
context.svg.getElementById('vf-smo33844').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo33845').setAttributeNS('', 'transform', 'translate(0 28)');
context.svg.getElementById('vf-smo33847').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo33848').setAttributeNS('', 'transform', 'translate(0 27)');
context.svg.getElementById('vf-smo33866').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo33867').setAttributeNS('', 'transform', 'translate(0 27)');
context.svg.getElementById('vf-smo33869').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33870').setAttributeNS('', 'transform', 'translate(0 24)');
context.svg.getElementById('vf-smo33873').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo33876').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo33875').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo33894').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo33896').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33897').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo33899').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33900').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo33902').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo33903').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo33905').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33906').setAttributeNS('', 'transform', 'translate(0 21)');
context.svg.getElementById('vf-smo33924').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo33925').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo33927').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo33928').setAttributeNS('', 'transform', 'translate(0 32)');
context.svg.getElementById('vf-smo33931').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo33930').setAttributeNS('', 'transform', 'translate(0 24)');
context.svg.getElementById('vf-smo33949').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo33953').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo33971').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo33972').setAttributeNS('', 'transform', 'translate(0 26)');
context.svg.getElementById('vf-smo33974').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo33975').setAttributeNS('', 'transform', 'translate(0 32)');
context.svg.getElementById('vf-smo33977').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo33978').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo33999').setAttributeNS('', 'transform', 'translate(0 0)');
context.svg.getElementById('vf-smo34000').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo34018').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo34019').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo34037').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo34040').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo34041').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo34043').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo34044').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo34046').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo34047').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo34049').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo34050').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo34068').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo34069').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo34087').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo34090').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo34092').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo34093').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo34095').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo34096').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo34098').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo34099').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo34117').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo34118').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo34121').setAttributeNS('', 'transform', 'translate(0 9)');
}
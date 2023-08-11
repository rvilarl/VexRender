function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
//
// create the musical objects
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1632.0398513887887');
svg.setAttributeNS('', 'height', '1344');
svg.setAttributeNS('', 'viewBox', '0 0 3264 2688');
VF.setMusicFont("Leland","Bravura","Gonville","Custom");
const noteHash = {};
const voiceHash = {}
const fmtsmo7883563 = new VF.Formatter();
//
// voices and notes for stave 0 63
const smo78835v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78835v0ar = [];
const smo78810 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo78810'] = smo78810;
smo78810.setAttribute('id', 'smo78810');
smo78835v0ar.push(smo78810);
const smo78811 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo78811'] = smo78811;
smo78811.setAttribute('id', 'smo78811');
smo78835v0ar.push(smo78811);
const smo78812 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo78812'] = smo78812;
smo78812.setAttribute('id', 'smo78812');
const smo78813 = new VF.Annotation('Ki');
smo78813.setAttribute('id', 'smo78813');
smo78813.setFont('times', 12, 'normal');
smo78813.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo78812.addModifier(smo78813);
smo78813.addClass('lyric lyric-0 lyric-hyphen');
smo78835v0ar.push(smo78812);
const smo78814 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo78814'] = smo78814;
smo78814.setAttribute('id', 'smo78814');
smo78835v0ar.push(smo78814);
const smo78815 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo78815'] = smo78815;
smo78815.setAttribute('id', 'smo78815');
const smo78816 = new VF.Annotation('ki');
smo78816.setAttribute('id', 'smo78816');
smo78816.setFont('times', 12, 'normal');
smo78816.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo78815.addModifier(smo78816);
smo78816.addClass('lyric lyric-0 lyric-hyphen');
smo78835v0ar.push(smo78815);
const smo78817 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo78817'] = smo78817;
smo78817.setAttribute('id', 'smo78817');
const smo78818 = new VF.Annotation('ri');
smo78818.setAttribute('id', 'smo78818');
smo78818.setFont('times', 12, 'normal');
smo78818.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo78817.addModifier(smo78818);
smo78818.addClass('lyric lyric-0');
smo78835v0ar.push(smo78817);
smo78835v0.addTickables(smo78835v0ar)
fmtsmo7883563.joinVoices([smo78835v0]);
const fmtsmo8182963 = new VF.Formatter();
//
// voices and notes for stave 1 63
const smo81829v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81829v0ar = [];
const smo81804 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo81804'] = smo81804;
smo81804.setAttribute('id', 'smo81804');
smo81829v0ar.push(smo81804);
const smo81805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo81805'] = smo81805;
smo81805.setAttribute('id', 'smo81805');
smo81829v0ar.push(smo81805);
const smo81806 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo81806'] = smo81806;
smo81806.setAttribute('id', 'smo81806');
const smo81807 = new VF.Annotation('Ki');
smo81807.setAttribute('id', 'smo81807');
smo81807.setFont('times', 12, 'normal');
smo81807.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo81806.addModifier(smo81807);
smo81807.addClass('lyric lyric-0 lyric-hyphen');
smo81829v0ar.push(smo81806);
const smo81808 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo81808'] = smo81808;
smo81808.setAttribute('id', 'smo81808');
smo81829v0ar.push(smo81808);
const smo81809 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo81809'] = smo81809;
smo81809.setAttribute('id', 'smo81809');
const smo81810 = new VF.Annotation('ki');
smo81810.setAttribute('id', 'smo81810');
smo81810.setFont('times', 12, 'normal');
smo81810.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo81809.addModifier(smo81810);
smo81810.addClass('lyric lyric-0 lyric-hyphen');
smo81829v0ar.push(smo81809);
const smo81811 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo81811'] = smo81811;
smo81811.setAttribute('id', 'smo81811');
const smo81812 = new VF.Annotation('ri');
smo81812.setAttribute('id', 'smo81812');
smo81812.setFont('times', 12, 'normal');
smo81812.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo81811.addModifier(smo81812);
smo81812.addClass('lyric lyric-0');
smo81829v0ar.push(smo81811);
smo81829v0.addTickables(smo81829v0ar)
fmtsmo8182963.joinVoices([smo81829v0]);
const fmtsmo8497263 = new VF.Formatter();
//
// voices and notes for stave 2 63
const smo84972v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84972v0ar = [];
const smo84947 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo84947'] = smo84947;
smo84947.setAttribute('id', 'smo84947');
smo84972v0ar.push(smo84947);
const smo84948 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo84948'] = smo84948;
smo84948.setAttribute('id', 'smo84948');
smo84972v0ar.push(smo84948);
const smo84949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo84949'] = smo84949;
smo84949.setAttribute('id', 'smo84949');
const smo84950 = new VF.Annotation('Ki');
smo84950.setAttribute('id', 'smo84950');
smo84950.setFont('times', 12, 'normal');
smo84950.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo84949.addModifier(smo84950);
smo84950.addClass('lyric lyric-0 lyric-hyphen');
smo84972v0ar.push(smo84949);
const smo84951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo84951'] = smo84951;
smo84951.setAttribute('id', 'smo84951');
smo84972v0ar.push(smo84951);
const smo84952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo84952'] = smo84952;
smo84952.setAttribute('id', 'smo84952');
const smo84953 = new VF.Annotation('ki');
smo84953.setAttribute('id', 'smo84953');
smo84953.setFont('times', 12, 'normal');
smo84953.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo84952.addModifier(smo84953);
smo84953.addClass('lyric lyric-0 lyric-hyphen');
smo84972v0ar.push(smo84952);
const smo84954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo84954'] = smo84954;
smo84954.setAttribute('id', 'smo84954');
const smo84955 = new VF.Annotation('ri');
smo84955.setAttribute('id', 'smo84955');
smo84955.setFont('times', 12, 'normal');
smo84955.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo84954.addModifier(smo84955);
smo84955.addClass('lyric lyric-0');
smo84972v0ar.push(smo84954);
smo84972v0.addTickables(smo84972v0ar)
fmtsmo8497263.joinVoices([smo84972v0]);
const fmtsmo8808863 = new VF.Formatter();
//
// voices and notes for stave 3 63
const smo88088v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo88088v0ar = [];
const smo88063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo88063'] = smo88063;
smo88063.setAttribute('id', 'smo88063');
smo88088v0ar.push(smo88063);
const smo88064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo88064'] = smo88064;
smo88064.setAttribute('id', 'smo88064');
smo88088v0ar.push(smo88064);
const smo88065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo88065'] = smo88065;
smo88065.setAttribute('id', 'smo88065');
const smo88066 = new VF.Annotation('Ki');
smo88066.setAttribute('id', 'smo88066');
smo88066.setFont('times', 12, 'normal');
smo88066.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo88065.addModifier(smo88066);
smo88066.addClass('lyric lyric-0 lyric-hyphen');
smo88088v0ar.push(smo88065);
const smo88067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo88067'] = smo88067;
smo88067.setAttribute('id', 'smo88067');
smo88088v0ar.push(smo88067);
const smo88068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo88068'] = smo88068;
smo88068.setAttribute('id', 'smo88068');
const smo88069 = new VF.Annotation('ki');
smo88069.setAttribute('id', 'smo88069');
smo88069.setFont('times', 12, 'normal');
smo88069.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo88068.addModifier(smo88069);
smo88069.addClass('lyric lyric-0 lyric-hyphen');
smo88088v0ar.push(smo88068);
const smo88070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo88070'] = smo88070;
smo88070.setAttribute('id', 'smo88070');
const smo88071 = new VF.Annotation('ri');
smo88071.setAttribute('id', 'smo88071');
smo88071.setFont('times', 12, 'normal');
smo88071.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo88070.addModifier(smo88071);
smo88071.addClass('lyric lyric-0');
smo88088v0ar.push(smo88070);
smo88088v0.addTickables(smo88088v0ar)
fmtsmo8808863.joinVoices([smo88088v0]);
const fmtsmo9110763 = new VF.Formatter();
//
// voices and notes for stave 4 63
const smo91107v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo91107v0ar = [];
const smo91082 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo91082'] = smo91082;
smo91082.setAttribute('id', 'smo91082');
smo91107v0ar.push(smo91082);
const smo91083 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo91083'] = smo91083;
smo91083.setAttribute('id', 'smo91083');
smo91107v0ar.push(smo91083);
const smo91084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo91084'] = smo91084;
smo91084.setAttribute('id', 'smo91084');
const smo91085 = new VF.Annotation('Ki');
smo91085.setAttribute('id', 'smo91085');
smo91085.setFont('times', 12, 'normal');
smo91085.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo91084.addModifier(smo91085);
smo91085.addClass('lyric lyric-0 lyric-hyphen');
smo91107v0ar.push(smo91084);
const smo91086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo91086'] = smo91086;
smo91086.setAttribute('id', 'smo91086');
smo91107v0ar.push(smo91086);
const smo91087 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo91087'] = smo91087;
smo91087.setAttribute('id', 'smo91087');
const smo91088 = new VF.Annotation('ki');
smo91088.setAttribute('id', 'smo91088');
smo91088.setFont('times', 12, 'normal');
smo91088.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo91087.addModifier(smo91088);
smo91088.addClass('lyric lyric-0 lyric-hyphen');
smo91107v0ar.push(smo91087);
const smo91089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo91089'] = smo91089;
smo91089.setAttribute('id', 'smo91089');
const smo91090 = new VF.Annotation('ri');
smo91090.setAttribute('id', 'smo91090');
smo91090.setFont('times', 12, 'normal');
smo91090.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo91089.addModifier(smo91090);
smo91090.addClass('lyric lyric-0');
smo91107v0ar.push(smo91089);
smo91107v0.addTickables(smo91107v0ar)
fmtsmo9110763.joinVoices([smo91107v0]);
const fmtsmo9421463 = new VF.Formatter();
//
// voices and notes for stave 5 63
const smo94214v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo94214v0ar = [];
const smo94188 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo94188'] = smo94188;
smo94188.setAttribute('id', 'smo94188');
smo94214v0ar.push(smo94188);
const smo94189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo94189'] = smo94189;
smo94189.setAttribute('id', 'smo94189');
smo94214v0ar.push(smo94189);
const smo94190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo94190'] = smo94190;
smo94190.setAttribute('id', 'smo94190');
smo94214v0ar.push(smo94190);
const smo94191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo94191'] = smo94191;
smo94191.setAttribute('id', 'smo94191');
const smo94192 = new VF.Annotation('Ki');
smo94192.setAttribute('id', 'smo94192');
smo94192.setFont('times', 12, 'normal');
smo94192.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo94191.addModifier(smo94192);
smo94192.addClass('lyric lyric-0 lyric-hyphen');
smo94214v0ar.push(smo94191);
const smo94193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo94193'] = smo94193;
smo94193.setAttribute('id', 'smo94193');
smo94214v0ar.push(smo94193);
const smo94194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo94194'] = smo94194;
smo94194.setAttribute('id', 'smo94194');
const smo94195 = new VF.Annotation('ki');
smo94195.setAttribute('id', 'smo94195');
smo94195.setFont('times', 12, 'normal');
smo94195.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo94194.addModifier(smo94195);
smo94195.addClass('lyric lyric-0 lyric-hyphen');
smo94214v0ar.push(smo94194);
const smo94196 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo94196'] = smo94196;
smo94196.setAttribute('id', 'smo94196');
const smo94197 = new VF.Annotation('ri');
smo94197.setAttribute('id', 'smo94197');
smo94197.setFont('times', 12, 'normal');
smo94197.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo94196.addModifier(smo94197);
smo94197.addClass('lyric lyric-0');
smo94214v0ar.push(smo94196);
smo94214v0.addTickables(smo94214v0ar)
fmtsmo9421463.joinVoices([smo94214v0]);
const fmtsmo9732663 = new VF.Formatter();
//
// voices and notes for stave 6 63
const smo97326v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo97326v0ar = [];
const smo97301 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo97301'] = smo97301;
smo97301.setAttribute('id', 'smo97301');
smo97326v0ar.push(smo97301);
const smo97302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo97302'] = smo97302;
smo97302.setAttribute('id', 'smo97302');
smo97326v0ar.push(smo97302);
const smo97303 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo97303'] = smo97303;
smo97303.setAttribute('id', 'smo97303');
const smo97304 = new VF.Annotation('Ki');
smo97304.setAttribute('id', 'smo97304');
smo97304.setFont('times', 12, 'normal');
smo97304.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo97303.addModifier(smo97304);
smo97304.addClass('lyric lyric-0 lyric-hyphen');
smo97326v0ar.push(smo97303);
const smo97305 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo97305'] = smo97305;
smo97305.setAttribute('id', 'smo97305');
smo97326v0ar.push(smo97305);
const smo97306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo97306'] = smo97306;
smo97306.setAttribute('id', 'smo97306');
const smo97307 = new VF.Annotation('ki');
smo97307.setAttribute('id', 'smo97307');
smo97307.setFont('times', 12, 'normal');
smo97307.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo97306.addModifier(smo97307);
smo97307.addClass('lyric lyric-0 lyric-hyphen');
smo97326v0ar.push(smo97306);
const smo97308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo97308'] = smo97308;
smo97308.setAttribute('id', 'smo97308');
const smo97309 = new VF.Annotation('ri');
smo97309.setAttribute('id', 'smo97309');
smo97309.setFont('times', 12, 'normal');
smo97309.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo97308.addModifier(smo97309);
smo97309.addClass('lyric lyric-0');
smo97326v0ar.push(smo97308);
smo97326v0.addTickables(smo97326v0ar)
fmtsmo9732663.joinVoices([smo97326v0]);
const fmtsmo10043563 = new VF.Formatter();
//
// voices and notes for stave 7 63
const smo100435v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100435v0ar = [];
const smo100410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo100410'] = smo100410;
smo100410.setAttribute('id', 'smo100410');
smo100435v0ar.push(smo100410);
const smo100411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo100411'] = smo100411;
smo100411.setAttribute('id', 'smo100411');
smo100435v0ar.push(smo100411);
const smo100412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo100412'] = smo100412;
smo100412.setAttribute('id', 'smo100412');
const smo100413 = new VF.Annotation('Ki');
smo100413.setAttribute('id', 'smo100413');
smo100413.setFont('times', 12, 'normal');
smo100413.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo100412.addModifier(smo100413);
smo100413.addClass('lyric lyric-0 lyric-hyphen');
smo100435v0ar.push(smo100412);
const smo100414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo100414'] = smo100414;
smo100414.setAttribute('id', 'smo100414');
smo100435v0ar.push(smo100414);
const smo100415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo100415'] = smo100415;
smo100415.setAttribute('id', 'smo100415');
const smo100416 = new VF.Annotation('ki');
smo100416.setAttribute('id', 'smo100416');
smo100416.setFont('times', 12, 'normal');
smo100416.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo100415.addModifier(smo100416);
smo100416.addClass('lyric lyric-0 lyric-hyphen');
smo100435v0ar.push(smo100415);
const smo100417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo100417'] = smo100417;
smo100417.setAttribute('id', 'smo100417');
const smo100418 = new VF.Annotation('ri');
smo100418.setAttribute('id', 'smo100418');
smo100418.setFont('times', 12, 'normal');
smo100418.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo100417.addModifier(smo100418);
smo100418.addClass('lyric lyric-0');
smo100435v0ar.push(smo100417);
smo100435v0.addTickables(smo100435v0ar)
fmtsmo10043563.joinVoices([smo100435v0]);
const fmtsmo10352163 = new VF.Formatter();
//
// voices and notes for stave 8 63
const smo103521v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103521v0ar = [];
const smo103496 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo103496'] = smo103496;
smo103496.setAttribute('id', 'smo103496');
smo103521v0ar.push(smo103496);
const smo103497 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo103497'] = smo103497;
smo103497.setAttribute('id', 'smo103497');
smo103521v0ar.push(smo103497);
const smo103498 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo103498'] = smo103498;
smo103498.setAttribute('id', 'smo103498');
const smo103499 = new VF.Annotation('Ki');
smo103499.setAttribute('id', 'smo103499');
smo103499.setFont('times', 12, 'normal');
smo103499.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo103498.addModifier(smo103499);
smo103499.addClass('lyric lyric-0 lyric-hyphen');
smo103521v0ar.push(smo103498);
const smo103500 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo103500'] = smo103500;
smo103500.setAttribute('id', 'smo103500');
smo103521v0ar.push(smo103500);
const smo103501 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo103501'] = smo103501;
smo103501.setAttribute('id', 'smo103501');
const smo103502 = new VF.Annotation('ki');
smo103502.setAttribute('id', 'smo103502');
smo103502.setFont('times', 12, 'normal');
smo103502.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo103501.addModifier(smo103502);
smo103502.addClass('lyric lyric-0 lyric-hyphen');
smo103521v0ar.push(smo103501);
const smo103503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo103503'] = smo103503;
smo103503.setAttribute('id', 'smo103503');
const smo103504 = new VF.Annotation('ri');
smo103504.setAttribute('id', 'smo103504');
smo103504.setFont('times', 12, 'normal');
smo103504.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo103503.addModifier(smo103504);
smo103504.addClass('lyric lyric-0');
smo103521v0ar.push(smo103503);
smo103521v0.addTickables(smo103521v0ar)
fmtsmo10352163.joinVoices([smo103521v0]);
const fmtsmo10661063 = new VF.Formatter();
//
// voices and notes for stave 9 63
const smo106610v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo106610v0ar = [];
const smo106585 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo106585'] = smo106585;
smo106585.setAttribute('id', 'smo106585');
smo106610v0ar.push(smo106585);
const smo106586 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo106586'] = smo106586;
smo106586.setAttribute('id', 'smo106586');
smo106610v0ar.push(smo106586);
const smo106587 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo106587'] = smo106587;
smo106587.setAttribute('id', 'smo106587');
const smo106588 = new VF.Annotation('Ki');
smo106588.setAttribute('id', 'smo106588');
smo106588.setFont('times', 12, 'normal');
smo106588.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo106587.addModifier(smo106588);
smo106588.addClass('lyric lyric-0 lyric-hyphen');
smo106610v0ar.push(smo106587);
const smo106589 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo106589'] = smo106589;
smo106589.setAttribute('id', 'smo106589');
smo106610v0ar.push(smo106589);
const smo106590 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo106590'] = smo106590;
smo106590.setAttribute('id', 'smo106590');
const smo106591 = new VF.Annotation('ki');
smo106591.setAttribute('id', 'smo106591');
smo106591.setFont('times', 12, 'normal');
smo106591.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo106590.addModifier(smo106591);
smo106591.addClass('lyric lyric-0 lyric-hyphen');
smo106610v0ar.push(smo106590);
const smo106592 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo106592'] = smo106592;
smo106592.setAttribute('id', 'smo106592');
const smo106593 = new VF.Annotation('ri');
smo106593.setAttribute('id', 'smo106593');
smo106593.setFont('times', 12, 'normal');
smo106593.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo106592.addModifier(smo106593);
smo106593.addClass('lyric lyric-0');
smo106610v0ar.push(smo106592);
smo106610v0.addTickables(smo106610v0ar)
fmtsmo10661063.joinVoices([smo106610v0]);
const fmtsmo10965063 = new VF.Formatter();
//
// voices and notes for stave 10 63
const smo109650v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo109650v0ar = [];
const smo109625 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo109625'] = smo109625;
smo109625.setAttribute('id', 'smo109625');
smo109650v0ar.push(smo109625);
const smo109626 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo109626'] = smo109626;
smo109626.setAttribute('id', 'smo109626');
smo109650v0ar.push(smo109626);
const smo109627 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo109627'] = smo109627;
smo109627.setAttribute('id', 'smo109627');
const smo109628 = new VF.Annotation('Ki');
smo109628.setAttribute('id', 'smo109628');
smo109628.setFont('times', 12, 'normal');
smo109628.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo109627.addModifier(smo109628);
smo109628.addClass('lyric lyric-0 lyric-hyphen');
smo109650v0ar.push(smo109627);
const smo109629 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo109629'] = smo109629;
smo109629.setAttribute('id', 'smo109629');
smo109650v0ar.push(smo109629);
const smo109630 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo109630'] = smo109630;
smo109630.setAttribute('id', 'smo109630');
const smo109631 = new VF.Annotation('ki');
smo109631.setAttribute('id', 'smo109631');
smo109631.setFont('times', 12, 'normal');
smo109631.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo109630.addModifier(smo109631);
smo109631.addClass('lyric lyric-0 lyric-hyphen');
smo109650v0ar.push(smo109630);
const smo109632 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo109632'] = smo109632;
smo109632.setAttribute('id', 'smo109632');
const smo109633 = new VF.Annotation('ri');
smo109633.setAttribute('id', 'smo109633');
smo109633.setFont('times', 12, 'normal');
smo109633.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo109632.addModifier(smo109633);
smo109633.addClass('lyric lyric-0');
smo109650v0ar.push(smo109632);
smo109650v0.addTickables(smo109650v0ar)
fmtsmo10965063.joinVoices([smo109650v0]);
const fmtsmo11270463 = new VF.Formatter();
//
// voices and notes for stave 11 63
const smo112704v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo112704v0ar = [];
const smo112679 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo112679'] = smo112679;
smo112679.setAttribute('id', 'smo112679');
smo112704v0ar.push(smo112679);
const smo112680 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo112680'] = smo112680;
smo112680.setAttribute('id', 'smo112680');
smo112704v0ar.push(smo112680);
const smo112681 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo112681'] = smo112681;
smo112681.setAttribute('id', 'smo112681');
const smo112682 = new VF.Annotation('Ki');
smo112682.setAttribute('id', 'smo112682');
smo112682.setFont('times', 12, 'normal');
smo112682.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo112681.addModifier(smo112682);
smo112682.addClass('lyric lyric-0 lyric-hyphen');
smo112704v0ar.push(smo112681);
const smo112683 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo112683'] = smo112683;
smo112683.setAttribute('id', 'smo112683');
smo112704v0ar.push(smo112683);
const smo112684 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo112684'] = smo112684;
smo112684.setAttribute('id', 'smo112684');
const smo112685 = new VF.Annotation('ki');
smo112685.setAttribute('id', 'smo112685');
smo112685.setFont('times', 12, 'normal');
smo112685.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo112684.addModifier(smo112685);
smo112685.addClass('lyric lyric-0 lyric-hyphen');
smo112704v0ar.push(smo112684);
const smo112686 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo112686'] = smo112686;
smo112686.setAttribute('id', 'smo112686');
const smo112687 = new VF.Annotation('ri');
smo112687.setAttribute('id', 'smo112687');
smo112687.setFont('times', 12, 'normal');
smo112687.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo112686.addModifier(smo112687);
smo112687.addClass('lyric lyric-0');
smo112704v0ar.push(smo112686);
smo112704v0.addTickables(smo112704v0ar)
fmtsmo11270463.joinVoices([smo112704v0]);
const fmtsmo11574763 = new VF.Formatter();
//
// voices and notes for stave 12 63
const smo115747v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo115747v0ar = [];
const smo115722 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo115722'] = smo115722;
smo115722.setAttribute('id', 'smo115722');
smo115747v0ar.push(smo115722);
const smo115723 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo115723'] = smo115723;
smo115723.setAttribute('id', 'smo115723');
smo115747v0ar.push(smo115723);
const smo115724 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo115724'] = smo115724;
smo115724.setAttribute('id', 'smo115724');
const smo115725 = new VF.Annotation('Ki');
smo115725.setAttribute('id', 'smo115725');
smo115725.setFont('times', 12, 'normal');
smo115725.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo115724.addModifier(smo115725);
smo115725.addClass('lyric lyric-0 lyric-hyphen');
smo115747v0ar.push(smo115724);
const smo115726 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo115726'] = smo115726;
smo115726.setAttribute('id', 'smo115726');
smo115747v0ar.push(smo115726);
const smo115727 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo115727'] = smo115727;
smo115727.setAttribute('id', 'smo115727');
const smo115728 = new VF.Annotation('ki');
smo115728.setAttribute('id', 'smo115728');
smo115728.setFont('times', 12, 'normal');
smo115728.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo115727.addModifier(smo115728);
smo115728.addClass('lyric lyric-0 lyric-hyphen');
smo115747v0ar.push(smo115727);
const smo115729 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo115729'] = smo115729;
smo115729.setAttribute('id', 'smo115729');
const smo115730 = new VF.Annotation('ri');
smo115730.setAttribute('id', 'smo115730');
smo115730.setFont('times', 12, 'normal');
smo115730.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo115729.addModifier(smo115730);
smo115730.addClass('lyric lyric-0');
smo115747v0ar.push(smo115729);
smo115747v0.addTickables(smo115747v0ar)
fmtsmo11574763.joinVoices([smo115747v0]);
const fmtsmo11896363 = new VF.Formatter();
//
// voices and notes for stave 13 63
const smo118963v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo118963v0ar = [];
const smo118940 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo118940'] = smo118940;
smo118940.setAttribute('id', 'smo118940');
smo118963v0ar.push(smo118940);
const smo118941 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo118941'] = smo118941;
smo118941.setAttribute('id', 'smo118941');
smo118963v0ar.push(smo118941);
const smo118942 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo118942'] = smo118942;
smo118942.setAttribute('id', 'smo118942');
smo118963v0ar.push(smo118942);
const smo118943 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
noteHash['smo118943'] = smo118943;
smo118943.setAttribute('id', 'smo118943');
const smo1189430acc = new VF.Accidental('#');
smo118943.addModifier(smo1189430acc, 0);
smo118963v0ar.push(smo118943);
const smo118944 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
noteHash['smo118944'] = smo118944;
smo118944.setAttribute('id', 'smo118944');
smo118963v0ar.push(smo118944);
const smo118945 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
noteHash['smo118945'] = smo118945;
smo118945.setAttribute('id', 'smo118945');
smo118963v0ar.push(smo118945);
const smo118946 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
noteHash['smo118946'] = smo118946;
smo118946.setAttribute('id', 'smo118946');
smo118963v0ar.push(smo118946);
smo118963v0.addTickables(smo118963v0ar)
fmtsmo11896363.joinVoices([smo118963v0]);
const fmtsmo12217663 = new VF.Formatter();
//
// voices and notes for stave 14 63
const smo122176v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo122176v0ar = [];
const smo122153 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","ab/4/n","bb/4/n","dn/5/n"]}'))
noteHash['smo122153'] = smo122153;
smo122153.setAttribute('id', 'smo122153');
const smo1221531acc = new VF.Accidental('b');
smo122153.addModifier(smo1221531acc, 1);
smo122176v0ar.push(smo122153);
const smo122154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo122154'] = smo122154;
smo122154.setAttribute('id', 'smo122154');
smo122176v0ar.push(smo122154);
const smo122155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo122155'] = smo122155;
smo122155.setAttribute('id', 'smo122155');
smo122176v0ar.push(smo122155);
const smo122156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
noteHash['smo122156'] = smo122156;
smo122156.setAttribute('id', 'smo122156');
const smo1221560acc = new VF.Accidental('#');
smo122156.addModifier(smo1221560acc, 0);
const smo1221561acc = new VF.Accidental('n');
smo122156.addModifier(smo1221561acc, 1);
smo122176v0ar.push(smo122156);
const smo122157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
noteHash['smo122157'] = smo122157;
smo122157.setAttribute('id', 'smo122157');
smo122176v0ar.push(smo122157);
const smo122158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
noteHash['smo122158'] = smo122158;
smo122158.setAttribute('id', 'smo122158');
smo122176v0ar.push(smo122158);
const smo122159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
noteHash['smo122159'] = smo122159;
smo122159.setAttribute('id', 'smo122159');
smo122176v0ar.push(smo122159);
smo122176v0.addTickables(smo122176v0ar)
fmtsmo12217663.joinVoices([smo122176v0]);
const fmtsmo12537163 = new VF.Formatter();
//
// voices and notes for stave 15 63
const smo125371v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo125371v0ar = [];
const smo125348 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo125348'] = smo125348;
smo125348.setAttribute('id', 'smo125348');
smo125371v0ar.push(smo125348);
const smo125349 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo125349'] = smo125349;
smo125349.setAttribute('id', 'smo125349');
smo125371v0ar.push(smo125349);
const smo125350 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo125350'] = smo125350;
smo125350.setAttribute('id', 'smo125350');
smo125371v0ar.push(smo125350);
const smo125351 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo125351'] = smo125351;
smo125351.setAttribute('id', 'smo125351');
smo125371v0ar.push(smo125351);
const smo125352 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo125352'] = smo125352;
smo125352.setAttribute('id', 'smo125352');
smo125371v0ar.push(smo125352);
const smo125353 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo125353'] = smo125353;
smo125353.setAttribute('id', 'smo125353');
smo125371v0ar.push(smo125353);
const smo125354 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo125354'] = smo125354;
smo125354.setAttribute('id', 'smo125354');
smo125371v0ar.push(smo125354);
smo125371v0.addTickables(smo125371v0ar)
fmtsmo12537163.joinVoices([smo125371v0]);
const fmtsmo12849063 = new VF.Formatter();
//
// voices and notes for stave 16 63
const smo128490v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo128490v0ar = [];
const smo128471 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo128471'] = smo128471;
smo128471.setAttribute('id', 'smo128471');
smo128490v0ar.push(smo128471);
const smo128472 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo128472'] = smo128472;
smo128472.setAttribute('id', 'smo128472');
smo128490v0ar.push(smo128472);
const smo128473 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo128473'] = smo128473;
smo128473.setAttribute('id', 'smo128473');
smo128490v0ar.push(smo128473);
smo128490v0.addTickables(smo128490v0ar)
fmtsmo12849063.joinVoices([smo128490v0]);
const fmtsmo13167163 = new VF.Formatter();
//
// voices and notes for stave 17 63
const smo131671v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo131671v0ar = [];
const smo131651 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo131651'] = smo131651;
smo131651.setAttribute('id', 'smo131651');
const smo1316510acc = new VF.Accidental('n');
smo131651.addModifier(smo1316510acc, 0);
smo131651.addModifier(new VF.Dot(), 0);
smo131671v0ar.push(smo131651);
const smo131652 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo131652'] = smo131652;
smo131652.setAttribute('id', 'smo131652');
smo131671v0ar.push(smo131652);
const smo131653 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo131653'] = smo131653;
smo131653.setAttribute('id', 'smo131653');
smo131671v0ar.push(smo131653);
const smo131654 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo131654'] = smo131654;
smo131654.setAttribute('id', 'smo131654');
smo131671v0ar.push(smo131654);
smo131671v0.addTickables(smo131671v0ar)
fmtsmo13167163.joinVoices([smo131671v0]);
// create beam groups and tuplets for format grp smo133472 before formatting
const dirsmo224743 = smo78812.getStemDirection();
smo78812.setStemDirection(dirsmo224743);
smo78814.setStemDirection(dirsmo224743);
const smo224743 = new VF.Beam([smo78812,smo78814]);
const dirsmo224746 = smo81806.getStemDirection();
smo81806.setStemDirection(dirsmo224746);
smo81808.setStemDirection(dirsmo224746);
const smo224746 = new VF.Beam([smo81806,smo81808]);
const dirsmo224749 = smo84949.getStemDirection();
smo84949.setStemDirection(dirsmo224749);
smo84951.setStemDirection(dirsmo224749);
const smo224749 = new VF.Beam([smo84949,smo84951]);
const dirsmo224752 = smo88065.getStemDirection();
smo88065.setStemDirection(dirsmo224752);
smo88067.setStemDirection(dirsmo224752);
const smo224752 = new VF.Beam([smo88065,smo88067]);
const dirsmo224755 = smo91084.getStemDirection();
smo91084.setStemDirection(dirsmo224755);
smo91086.setStemDirection(dirsmo224755);
const smo224755 = new VF.Beam([smo91084,smo91086]);
 
// formatting measures in staff group smo133472
fmtsmo7883563.format([smo78835v0,smo81829v0,smo84972v0,smo88088v0,smo91107v0], 261);
const stavesmo78835 = new VF.Stave(159, 210, 347);
stavesmo78835.setAttribute('id', 'stavesmo78835');
stavesmo78835.setBegBarType(1);
stavesmo78835.setSection('D', 0);
stavesmo78835.addClef('treble');
const keysmo78835 = new VF.KeySignature('D');
keysmo78835.addToStave(stavesmo78835);
stavesmo78835.setContext(context);
stavesmo78835.draw();
smo78835v0.draw(context, stavesmo78835);
smo224743.setContext(context);
smo224743.draw();
const stavesmo81829 = new VF.Stave(159, 316, 347);
stavesmo81829.setAttribute('id', 'stavesmo81829');
stavesmo81829.setBegBarType(1);
stavesmo81829.addClef('treble');
const keysmo81829 = new VF.KeySignature('D');
keysmo81829.addToStave(stavesmo81829);
stavesmo81829.setContext(context);
stavesmo81829.draw();
smo81829v0.draw(context, stavesmo81829);
smo224746.setContext(context);
smo224746.draw();
const stavesmo84972 = new VF.Stave(159, 437, 347);
stavesmo84972.setAttribute('id', 'stavesmo84972');
stavesmo84972.setBegBarType(1);
stavesmo84972.addClef('treble');
const keysmo84972 = new VF.KeySignature('G');
keysmo84972.addToStave(stavesmo84972);
stavesmo84972.setContext(context);
stavesmo84972.draw();
smo84972v0.draw(context, stavesmo84972);
smo224749.setContext(context);
smo224749.draw();
const stavesmo88088 = new VF.Stave(159, 553, 347);
stavesmo88088.setAttribute('id', 'stavesmo88088');
stavesmo88088.setBegBarType(1);
stavesmo88088.addClef('treble');
const keysmo88088 = new VF.KeySignature('G');
keysmo88088.addToStave(stavesmo88088);
stavesmo88088.setContext(context);
stavesmo88088.draw();
smo88088v0.draw(context, stavesmo88088);
smo224752.setContext(context);
smo224752.draw();
const stavesmo91107 = new VF.Stave(159, 659, 347);
stavesmo91107.setAttribute('id', 'stavesmo91107');
stavesmo91107.setBegBarType(1);
stavesmo91107.addClef('treble');
const keysmo91107 = new VF.KeySignature('D');
keysmo91107.addToStave(stavesmo91107);
stavesmo91107.setContext(context);
stavesmo91107.draw();
smo91107v0.draw(context, stavesmo91107);
smo224755.setContext(context);
smo224755.draw();
// create beam groups and tuplets for format grp smo133474 before formatting
const dirsmo224758 = smo94188.getStemDirection();
smo94188.setStemDirection(dirsmo224758);
smo94189.setStemDirection(dirsmo224758);
const smo224758 = new VF.Beam([smo94188,smo94189]);
const dirsmo224759 = smo94191.getStemDirection();
smo94191.setStemDirection(dirsmo224759);
smo94193.setStemDirection(dirsmo224759);
const smo224759 = new VF.Beam([smo94191,smo94193]);
const dirsmo224762 = smo97303.getStemDirection();
smo97303.setStemDirection(dirsmo224762);
smo97305.setStemDirection(dirsmo224762);
const smo224762 = new VF.Beam([smo97303,smo97305]);
const dirsmo224765 = smo100412.getStemDirection();
smo100412.setStemDirection(dirsmo224765);
smo100414.setStemDirection(dirsmo224765);
const smo224765 = new VF.Beam([smo100412,smo100414]);
const dirsmo224768 = smo103498.getStemDirection();
smo103498.setStemDirection(dirsmo224768);
smo103500.setStemDirection(dirsmo224768);
const smo224768 = new VF.Beam([smo103498,smo103500]);
 
// formatting measures in staff group smo133474
fmtsmo9421463.format([smo94214v0,smo97326v0,smo100435v0,smo103521v0], 274);
const stavesmo94214 = new VF.Stave(159, 780, 347);
stavesmo94214.setAttribute('id', 'stavesmo94214');
stavesmo94214.setBegBarType(1);
stavesmo94214.addClef('treble');
const keysmo94214 = new VF.KeySignature('G');
keysmo94214.addToStave(stavesmo94214);
stavesmo94214.setContext(context);
stavesmo94214.draw();
smo94214v0.draw(context, stavesmo94214);
smo224758.setContext(context);
smo224758.draw();
smo224759.setContext(context);
smo224759.draw();
const stavesmo97326 = new VF.Stave(159, 896, 347);
stavesmo97326.setAttribute('id', 'stavesmo97326');
stavesmo97326.setBegBarType(1);
stavesmo97326.addClef('treble');
const keysmo97326 = new VF.KeySignature('G');
keysmo97326.addToStave(stavesmo97326);
stavesmo97326.setContext(context);
stavesmo97326.draw();
smo97326v0.draw(context, stavesmo97326);
smo224762.setContext(context);
smo224762.draw();
const stavesmo100435 = new VF.Stave(159, 1012, 347);
stavesmo100435.setAttribute('id', 'stavesmo100435');
stavesmo100435.setBegBarType(1);
stavesmo100435.addClef('treble');
const keysmo100435 = new VF.KeySignature('G');
keysmo100435.addToStave(stavesmo100435);
stavesmo100435.setContext(context);
stavesmo100435.draw();
smo100435v0.draw(context, stavesmo100435);
smo224765.setContext(context);
smo224765.draw();
const stavesmo103521 = new VF.Stave(159, 1128, 347);
stavesmo103521.setAttribute('id', 'stavesmo103521');
stavesmo103521.setBegBarType(1);
stavesmo103521.addClef('treble');
const keysmo103521 = new VF.KeySignature('G');
keysmo103521.addToStave(stavesmo103521);
stavesmo103521.setContext(context);
stavesmo103521.draw();
smo103521v0.draw(context, stavesmo103521);
smo224768.setContext(context);
smo224768.draw();
// create beam groups and tuplets for format grp smo133476 before formatting
const dirsmo224771 = smo106587.getStemDirection();
smo106587.setStemDirection(dirsmo224771);
smo106589.setStemDirection(dirsmo224771);
const smo224771 = new VF.Beam([smo106587,smo106589]);
const dirsmo224774 = smo109627.getStemDirection();
smo109627.setStemDirection(dirsmo224774);
smo109629.setStemDirection(dirsmo224774);
const smo224774 = new VF.Beam([smo109627,smo109629]);
const dirsmo224777 = smo112681.getStemDirection();
smo112681.setStemDirection(dirsmo224777);
smo112683.setStemDirection(dirsmo224777);
const smo224777 = new VF.Beam([smo112681,smo112683]);
const dirsmo224780 = smo115724.getStemDirection();
smo115724.setStemDirection(dirsmo224780);
smo115726.setStemDirection(dirsmo224780);
const smo224780 = new VF.Beam([smo115724,smo115726]);
 
// formatting measures in staff group smo133476
fmtsmo10661063.format([smo106610v0,smo109650v0,smo112704v0,smo115747v0], 274);
const stavesmo106610 = new VF.Stave(159, 1264, 347);
stavesmo106610.setAttribute('id', 'stavesmo106610');
stavesmo106610.setBegBarType(1);
stavesmo106610.addClef('bass');
const keysmo106610 = new VF.KeySignature('F');
keysmo106610.addToStave(stavesmo106610);
stavesmo106610.setContext(context);
stavesmo106610.draw();
smo106610v0.draw(context, stavesmo106610);
smo224771.setContext(context);
smo224771.draw();
const stavesmo109650 = new VF.Stave(159, 1400, 347);
stavesmo109650.setAttribute('id', 'stavesmo109650');
stavesmo109650.setBegBarType(1);
stavesmo109650.addClef('bass');
const keysmo109650 = new VF.KeySignature('F');
keysmo109650.addToStave(stavesmo109650);
stavesmo109650.setContext(context);
stavesmo109650.draw();
smo109650v0.draw(context, stavesmo109650);
smo224774.setContext(context);
smo224774.draw();
const stavesmo112704 = new VF.Stave(159, 1536, 347);
stavesmo112704.setAttribute('id', 'stavesmo112704');
stavesmo112704.setBegBarType(1);
stavesmo112704.addClef('bass');
const keysmo112704 = new VF.KeySignature('F');
keysmo112704.addToStave(stavesmo112704);
stavesmo112704.setContext(context);
stavesmo112704.draw();
smo112704v0.draw(context, stavesmo112704);
smo224777.setContext(context);
smo224777.draw();
const stavesmo115747 = new VF.Stave(159, 1672, 347);
stavesmo115747.setAttribute('id', 'stavesmo115747');
stavesmo115747.setBegBarType(1);
stavesmo115747.addClef('bass');
const keysmo115747 = new VF.KeySignature('F');
keysmo115747.addToStave(stavesmo115747);
stavesmo115747.setContext(context);
stavesmo115747.draw();
smo115747v0.draw(context, stavesmo115747);
smo224780.setContext(context);
smo224780.draw();
// create beam groups and tuplets for format grp smo120795 before formatting
const dirsmo224783 = smo118943.getStemDirection();
smo118943.setStemDirection(dirsmo224783);
smo118944.setStemDirection(dirsmo224783);
const smo224783 = new VF.Beam([smo118943,smo118944]);
 
// formatting measures in staff group smo120795
fmtsmo11896363.format([smo118963v0], 276);
const stavesmo118963 = new VF.Stave(159, 1818, 347);
stavesmo118963.setAttribute('id', 'stavesmo118963');
stavesmo118963.setBegBarType(1);
stavesmo118963.addClef('treble');
const keysmo118963 = new VF.KeySignature('F');
keysmo118963.addToStave(stavesmo118963);
stavesmo118963.setContext(context);
stavesmo118963.draw();
smo118963v0.draw(context, stavesmo118963);
smo224783.setContext(context);
smo224783.draw();
// create beam groups and tuplets for format grp smo133470 before formatting
const dirsmo224786 = smo122156.getStemDirection();
smo122156.setStemDirection(dirsmo224786);
smo122157.setStemDirection(dirsmo224786);
const smo224786 = new VF.Beam([smo122156,smo122157]);
const dirsmo224789 = smo125351.getStemDirection();
smo125351.setStemDirection(dirsmo224789);
smo125352.setStemDirection(dirsmo224789);
const smo224789 = new VF.Beam([smo125351,smo125352]);
 
// formatting measures in staff group smo133470
fmtsmo12217663.format([smo122176v0,smo125371v0], 276);
const stavesmo122176 = new VF.Stave(159, 1924, 347);
stavesmo122176.setAttribute('id', 'stavesmo122176');
stavesmo122176.setBegBarType(1);
stavesmo122176.addClef('treble');
const keysmo122176 = new VF.KeySignature('F');
keysmo122176.addToStave(stavesmo122176);
stavesmo122176.setContext(context);
stavesmo122176.draw();
smo122176v0.draw(context, stavesmo122176);
smo224786.setContext(context);
smo224786.draw();
const stavesmo125371 = new VF.Stave(159, 2010, 347);
stavesmo125371.setAttribute('id', 'stavesmo125371');
stavesmo125371.setBegBarType(1);
stavesmo125371.addClef('bass');
const keysmo125371 = new VF.KeySignature('F');
keysmo125371.addToStave(stavesmo125371);
stavesmo125371.setContext(context);
stavesmo125371.draw();
smo125371v0.draw(context, stavesmo125371);
smo224789.setContext(context);
smo224789.draw();
// create beam groups and tuplets for format grp smo130308 before formatting
 
// formatting measures in staff group smo130308
fmtsmo12849063.format([smo128490v0], 274);
const stavesmo128490 = new VF.Stave(159, 2081, 347);
stavesmo128490.setAttribute('id', 'stavesmo128490');
stavesmo128490.setBegBarType(1);
stavesmo128490.addClef('bass');
const keysmo128490 = new VF.KeySignature('F');
keysmo128490.addToStave(stavesmo128490);
stavesmo128490.setContext(context);
stavesmo128490.draw();
smo128490v0.draw(context, stavesmo128490);
// create beam groups and tuplets for format grp smo133464 before formatting
 
// formatting measures in staff group smo133464
fmtsmo13167163.format([smo131671v0], 282);
const stavesmo131671 = new VF.Stave(159, 2152, 347);
stavesmo131671.setAttribute('id', 'stavesmo131671');
stavesmo131671.setBegBarType(1);
stavesmo131671.addClef('percussion');
const keysmo131671 = new VF.KeySignature('F');
keysmo131671.addToStave(stavesmo131671);
stavesmo131671.setContext(context);
stavesmo131671.draw();
smo131671v0.draw(context, stavesmo131671);
const leftsmo133464stavesmo7883517 = new VF.StaveConnector(stavesmo78835, stavesmo91107).setType(3);
leftsmo133464stavesmo7883517.setContext(context).draw();
const leftsmo133464stavesmo9421417 = new VF.StaveConnector(stavesmo94214, stavesmo103521).setType(3);
leftsmo133464stavesmo9421417.setContext(context).draw();
const leftsmo133464stavesmo10661017 = new VF.StaveConnector(stavesmo106610, stavesmo115747).setType(1);
leftsmo133464stavesmo10661017.setContext(context).draw();
const leftsmo133464stavesmo12217617 = new VF.StaveConnector(stavesmo122176, stavesmo125371).setType(3);
leftsmo133464stavesmo12217617.setContext(context).draw();
const fmtsmo7886064 = new VF.Formatter();
//
// voices and notes for stave 0 64
const smo78860v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78860v0ar = [];
const smo78836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo78836'] = smo78836;
smo78836.setAttribute('id', 'smo78836');
const smo78837 = new VF.Annotation('bun');
smo78837.setAttribute('id', 'smo78837');
smo78837.setFont('times', 12, 'normal');
smo78837.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo78836.addModifier(smo78837);
smo78837.addClass('lyric lyric-0');
smo78860v0ar.push(smo78836);
const smo78838 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo78838'] = smo78838;
smo78838.setAttribute('id', 'smo78838');
smo78860v0ar.push(smo78838);
const smo78839 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo78839'] = smo78839;
smo78839.setAttribute('id', 'smo78839');
smo78860v0ar.push(smo78839);
const smo78840 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo78840'] = smo78840;
smo78840.setAttribute('id', 'smo78840');
const smo78841 = new VF.Annotation('Man');
smo78841.setAttribute('id', 'smo78841');
smo78841.setFont('times', 12, 'normal');
smo78841.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo78840.addModifier(smo78841);
smo78841.addClass('lyric lyric-0 lyric-hyphen');
smo78860v0ar.push(smo78840);
const smo78842 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo78842'] = smo78842;
smo78842.setAttribute('id', 'smo78842');
smo78860v0ar.push(smo78842);
const smo78843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo78843'] = smo78843;
smo78843.setAttribute('id', 'smo78843');
const smo788430acc = new VF.Accidental('n');
smo78843.addModifier(smo788430acc, 0);
const smo78844 = new VF.Annotation('ding');
smo78844.setAttribute('id', 'smo78844');
smo78844.setFont('times', 12, 'normal');
smo78844.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo78843.addModifier(smo78844);
smo78844.addClass('lyric lyric-0 lyric-hyphen');
smo78860v0ar.push(smo78843);
smo78860v0.addTickables(smo78860v0ar)
fmtsmo7886064.joinVoices([smo78860v0]);
const fmtsmo8185464 = new VF.Formatter();
//
// voices and notes for stave 1 64
const smo81854v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81854v0ar = [];
const smo81830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo81830'] = smo81830;
smo81830.setAttribute('id', 'smo81830');
const smo81831 = new VF.Annotation('bun');
smo81831.setAttribute('id', 'smo81831');
smo81831.setFont('times', 12, 'normal');
smo81831.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo81830.addModifier(smo81831);
smo81831.addClass('lyric lyric-0');
smo81854v0ar.push(smo81830);
const smo81832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo81832'] = smo81832;
smo81832.setAttribute('id', 'smo81832');
smo81854v0ar.push(smo81832);
const smo81833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo81833'] = smo81833;
smo81833.setAttribute('id', 'smo81833');
smo81854v0ar.push(smo81833);
const smo81834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo81834'] = smo81834;
smo81834.setAttribute('id', 'smo81834');
const smo81835 = new VF.Annotation('Man');
smo81835.setAttribute('id', 'smo81835');
smo81835.setFont('times', 12, 'normal');
smo81835.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo81834.addModifier(smo81835);
smo81835.addClass('lyric lyric-0 lyric-hyphen');
smo81854v0ar.push(smo81834);
const smo81836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo81836'] = smo81836;
smo81836.setAttribute('id', 'smo81836');
smo81854v0ar.push(smo81836);
const smo81837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo81837'] = smo81837;
smo81837.setAttribute('id', 'smo81837');
const smo818370acc = new VF.Accidental('n');
smo81837.addModifier(smo818370acc, 0);
const smo81838 = new VF.Annotation('ding');
smo81838.setAttribute('id', 'smo81838');
smo81838.setFont('times', 12, 'normal');
smo81838.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo81837.addModifier(smo81838);
smo81838.addClass('lyric lyric-0 lyric-hyphen');
smo81854v0ar.push(smo81837);
smo81854v0.addTickables(smo81854v0ar)
fmtsmo8185464.joinVoices([smo81854v0]);
const fmtsmo8499764 = new VF.Formatter();
//
// voices and notes for stave 2 64
const smo84997v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84997v0ar = [];
const smo84973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo84973'] = smo84973;
smo84973.setAttribute('id', 'smo84973');
const smo84974 = new VF.Annotation('bun');
smo84974.setAttribute('id', 'smo84974');
smo84974.setFont('times', 12, 'normal');
smo84974.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo84973.addModifier(smo84974);
smo84974.addClass('lyric lyric-0');
smo84997v0ar.push(smo84973);
const smo84975 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo84975'] = smo84975;
smo84975.setAttribute('id', 'smo84975');
smo84997v0ar.push(smo84975);
const smo84976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo84976'] = smo84976;
smo84976.setAttribute('id', 'smo84976');
smo84997v0ar.push(smo84976);
const smo84977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo84977'] = smo84977;
smo84977.setAttribute('id', 'smo84977');
const smo84978 = new VF.Annotation('Man');
smo84978.setAttribute('id', 'smo84978');
smo84978.setFont('times', 12, 'normal');
smo84978.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo84977.addModifier(smo84978);
smo84978.addClass('lyric lyric-0 lyric-hyphen');
smo84997v0ar.push(smo84977);
const smo84979 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo84979'] = smo84979;
smo84979.setAttribute('id', 'smo84979');
smo84997v0ar.push(smo84979);
const smo84980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo84980'] = smo84980;
smo84980.setAttribute('id', 'smo84980');
const smo849800acc = new VF.Accidental('n');
smo84980.addModifier(smo849800acc, 0);
const smo84981 = new VF.Annotation('ding');
smo84981.setAttribute('id', 'smo84981');
smo84981.setFont('times', 12, 'normal');
smo84981.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo84980.addModifier(smo84981);
smo84981.addClass('lyric lyric-0 lyric-hyphen');
smo84997v0ar.push(smo84980);
smo84997v0.addTickables(smo84997v0ar)
fmtsmo8499764.joinVoices([smo84997v0]);
const fmtsmo8811364 = new VF.Formatter();
//
// voices and notes for stave 3 64
const smo88113v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo88113v0ar = [];
const smo88089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo88089'] = smo88089;
smo88089.setAttribute('id', 'smo88089');
const smo88090 = new VF.Annotation('bun');
smo88090.setAttribute('id', 'smo88090');
smo88090.setFont('times', 12, 'normal');
smo88090.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo88089.addModifier(smo88090);
smo88090.addClass('lyric lyric-0');
smo88113v0ar.push(smo88089);
const smo88091 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo88091'] = smo88091;
smo88091.setAttribute('id', 'smo88091');
smo88113v0ar.push(smo88091);
const smo88092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo88092'] = smo88092;
smo88092.setAttribute('id', 'smo88092');
smo88113v0ar.push(smo88092);
const smo88093 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo88093'] = smo88093;
smo88093.setAttribute('id', 'smo88093');
const smo88094 = new VF.Annotation('Man');
smo88094.setAttribute('id', 'smo88094');
smo88094.setFont('times', 12, 'normal');
smo88094.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo88093.addModifier(smo88094);
smo88094.addClass('lyric lyric-0 lyric-hyphen');
smo88113v0ar.push(smo88093);
const smo88095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo88095'] = smo88095;
smo88095.setAttribute('id', 'smo88095');
smo88113v0ar.push(smo88095);
const smo88096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo88096'] = smo88096;
smo88096.setAttribute('id', 'smo88096');
const smo880960acc = new VF.Accidental('n');
smo88096.addModifier(smo880960acc, 0);
const smo88097 = new VF.Annotation('ding');
smo88097.setAttribute('id', 'smo88097');
smo88097.setFont('times', 12, 'normal');
smo88097.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo88096.addModifier(smo88097);
smo88097.addClass('lyric lyric-0 lyric-hyphen');
smo88113v0ar.push(smo88096);
smo88113v0.addTickables(smo88113v0ar)
fmtsmo8811364.joinVoices([smo88113v0]);
const fmtsmo9113264 = new VF.Formatter();
//
// voices and notes for stave 4 64
const smo91132v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo91132v0ar = [];
const smo91108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo91108'] = smo91108;
smo91108.setAttribute('id', 'smo91108');
const smo91109 = new VF.Annotation('bun');
smo91109.setAttribute('id', 'smo91109');
smo91109.setFont('times', 12, 'normal');
smo91109.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo91108.addModifier(smo91109);
smo91109.addClass('lyric lyric-0');
smo91132v0ar.push(smo91108);
const smo91110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo91110'] = smo91110;
smo91110.setAttribute('id', 'smo91110');
smo91132v0ar.push(smo91110);
const smo91111 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo91111'] = smo91111;
smo91111.setAttribute('id', 'smo91111');
smo91132v0ar.push(smo91111);
const smo91112 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo91112'] = smo91112;
smo91112.setAttribute('id', 'smo91112');
const smo91113 = new VF.Annotation('Man');
smo91113.setAttribute('id', 'smo91113');
smo91113.setFont('times', 12, 'normal');
smo91113.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo91112.addModifier(smo91113);
smo91113.addClass('lyric lyric-0 lyric-hyphen');
smo91132v0ar.push(smo91112);
const smo91114 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo91114'] = smo91114;
smo91114.setAttribute('id', 'smo91114');
smo91132v0ar.push(smo91114);
const smo91115 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo91115'] = smo91115;
smo91115.setAttribute('id', 'smo91115');
const smo911150acc = new VF.Accidental('n');
smo91115.addModifier(smo911150acc, 0);
const smo91116 = new VF.Annotation('ding');
smo91116.setAttribute('id', 'smo91116');
smo91116.setFont('times', 12, 'normal');
smo91116.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo91115.addModifier(smo91116);
smo91116.addClass('lyric lyric-0 lyric-hyphen');
smo91132v0ar.push(smo91115);
smo91132v0.addTickables(smo91132v0ar)
fmtsmo9113264.joinVoices([smo91132v0]);
const fmtsmo9423964 = new VF.Formatter();
//
// voices and notes for stave 5 64
const smo94239v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo94239v0ar = [];
const smo94215 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo94215'] = smo94215;
smo94215.setAttribute('id', 'smo94215');
const smo94216 = new VF.Annotation('bun');
smo94216.setAttribute('id', 'smo94216');
smo94216.setFont('times', 12, 'normal');
smo94216.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo94215.addModifier(smo94216);
smo94216.addClass('lyric lyric-0');
smo94239v0ar.push(smo94215);
const smo94217 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo94217'] = smo94217;
smo94217.setAttribute('id', 'smo94217');
smo94239v0ar.push(smo94217);
const smo94218 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo94218'] = smo94218;
smo94218.setAttribute('id', 'smo94218');
smo94239v0ar.push(smo94218);
const smo94219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo94219'] = smo94219;
smo94219.setAttribute('id', 'smo94219');
const smo94220 = new VF.Annotation('Man');
smo94220.setAttribute('id', 'smo94220');
smo94220.setFont('times', 12, 'normal');
smo94220.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo94219.addModifier(smo94220);
smo94220.addClass('lyric lyric-0 lyric-hyphen');
smo94239v0ar.push(smo94219);
const smo94221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo94221'] = smo94221;
smo94221.setAttribute('id', 'smo94221');
smo94239v0ar.push(smo94221);
const smo94222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo94222'] = smo94222;
smo94222.setAttribute('id', 'smo94222');
const smo942220acc = new VF.Accidental('n');
smo94222.addModifier(smo942220acc, 0);
const smo94223 = new VF.Annotation('ding');
smo94223.setAttribute('id', 'smo94223');
smo94223.setFont('times', 12, 'normal');
smo94223.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo94222.addModifier(smo94223);
smo94223.addClass('lyric lyric-0 lyric-hyphen');
smo94239v0ar.push(smo94222);
smo94239v0.addTickables(smo94239v0ar)
fmtsmo9423964.joinVoices([smo94239v0]);
const fmtsmo9735164 = new VF.Formatter();
//
// voices and notes for stave 6 64
const smo97351v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo97351v0ar = [];
const smo97327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo97327'] = smo97327;
smo97327.setAttribute('id', 'smo97327');
const smo97328 = new VF.Annotation('bun');
smo97328.setAttribute('id', 'smo97328');
smo97328.setFont('times', 12, 'normal');
smo97328.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo97327.addModifier(smo97328);
smo97328.addClass('lyric lyric-0');
smo97351v0ar.push(smo97327);
const smo97329 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo97329'] = smo97329;
smo97329.setAttribute('id', 'smo97329');
smo97351v0ar.push(smo97329);
const smo97330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo97330'] = smo97330;
smo97330.setAttribute('id', 'smo97330');
smo97351v0ar.push(smo97330);
const smo97331 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo97331'] = smo97331;
smo97331.setAttribute('id', 'smo97331');
const smo97332 = new VF.Annotation('Man');
smo97332.setAttribute('id', 'smo97332');
smo97332.setFont('times', 12, 'normal');
smo97332.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo97331.addModifier(smo97332);
smo97332.addClass('lyric lyric-0 lyric-hyphen');
smo97351v0ar.push(smo97331);
const smo97333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo97333'] = smo97333;
smo97333.setAttribute('id', 'smo97333');
smo97351v0ar.push(smo97333);
const smo97334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo97334'] = smo97334;
smo97334.setAttribute('id', 'smo97334');
const smo973340acc = new VF.Accidental('n');
smo97334.addModifier(smo973340acc, 0);
const smo97335 = new VF.Annotation('ding');
smo97335.setAttribute('id', 'smo97335');
smo97335.setFont('times', 12, 'normal');
smo97335.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo97334.addModifier(smo97335);
smo97335.addClass('lyric lyric-0 lyric-hyphen');
smo97351v0ar.push(smo97334);
smo97351v0.addTickables(smo97351v0ar)
fmtsmo9735164.joinVoices([smo97351v0]);
const fmtsmo10046064 = new VF.Formatter();
//
// voices and notes for stave 7 64
const smo100460v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100460v0ar = [];
const smo100436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo100436'] = smo100436;
smo100436.setAttribute('id', 'smo100436');
const smo100437 = new VF.Annotation('bun');
smo100437.setAttribute('id', 'smo100437');
smo100437.setFont('times', 12, 'normal');
smo100437.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo100436.addModifier(smo100437);
smo100437.addClass('lyric lyric-0');
smo100460v0ar.push(smo100436);
const smo100438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo100438'] = smo100438;
smo100438.setAttribute('id', 'smo100438');
smo100460v0ar.push(smo100438);
const smo100439 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo100439'] = smo100439;
smo100439.setAttribute('id', 'smo100439');
smo100460v0ar.push(smo100439);
const smo100440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo100440'] = smo100440;
smo100440.setAttribute('id', 'smo100440');
const smo100441 = new VF.Annotation('Man');
smo100441.setAttribute('id', 'smo100441');
smo100441.setFont('times', 12, 'normal');
smo100441.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo100440.addModifier(smo100441);
smo100441.addClass('lyric lyric-0 lyric-hyphen');
smo100460v0ar.push(smo100440);
const smo100442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo100442'] = smo100442;
smo100442.setAttribute('id', 'smo100442');
smo100460v0ar.push(smo100442);
const smo100443 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo100443'] = smo100443;
smo100443.setAttribute('id', 'smo100443');
const smo1004430acc = new VF.Accidental('n');
smo100443.addModifier(smo1004430acc, 0);
const smo100444 = new VF.Annotation('ding');
smo100444.setAttribute('id', 'smo100444');
smo100444.setFont('times', 12, 'normal');
smo100444.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo100443.addModifier(smo100444);
smo100444.addClass('lyric lyric-0 lyric-hyphen');
smo100460v0ar.push(smo100443);
smo100460v0.addTickables(smo100460v0ar)
fmtsmo10046064.joinVoices([smo100460v0]);
const fmtsmo10354664 = new VF.Formatter();
//
// voices and notes for stave 8 64
const smo103546v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103546v0ar = [];
const smo103522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo103522'] = smo103522;
smo103522.setAttribute('id', 'smo103522');
const smo103523 = new VF.Annotation('bun');
smo103523.setAttribute('id', 'smo103523');
smo103523.setFont('times', 12, 'normal');
smo103523.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo103522.addModifier(smo103523);
smo103523.addClass('lyric lyric-0');
smo103546v0ar.push(smo103522);
const smo103524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo103524'] = smo103524;
smo103524.setAttribute('id', 'smo103524');
smo103546v0ar.push(smo103524);
const smo103525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo103525'] = smo103525;
smo103525.setAttribute('id', 'smo103525');
smo103546v0ar.push(smo103525);
const smo103526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo103526'] = smo103526;
smo103526.setAttribute('id', 'smo103526');
const smo103527 = new VF.Annotation('Man');
smo103527.setAttribute('id', 'smo103527');
smo103527.setFont('times', 12, 'normal');
smo103527.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo103526.addModifier(smo103527);
smo103527.addClass('lyric lyric-0 lyric-hyphen');
smo103546v0ar.push(smo103526);
const smo103528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo103528'] = smo103528;
smo103528.setAttribute('id', 'smo103528');
smo103546v0ar.push(smo103528);
const smo103529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo103529'] = smo103529;
smo103529.setAttribute('id', 'smo103529');
const smo1035290acc = new VF.Accidental('n');
smo103529.addModifier(smo1035290acc, 0);
const smo103530 = new VF.Annotation('ding');
smo103530.setAttribute('id', 'smo103530');
smo103530.setFont('times', 12, 'normal');
smo103530.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo103529.addModifier(smo103530);
smo103530.addClass('lyric lyric-0 lyric-hyphen');
smo103546v0ar.push(smo103529);
smo103546v0.addTickables(smo103546v0ar)
fmtsmo10354664.joinVoices([smo103546v0]);
const fmtsmo10663564 = new VF.Formatter();
//
// voices and notes for stave 9 64
const smo106635v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo106635v0ar = [];
const smo106611 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo106611'] = smo106611;
smo106611.setAttribute('id', 'smo106611');
const smo106612 = new VF.Annotation('bun');
smo106612.setAttribute('id', 'smo106612');
smo106612.setFont('times', 12, 'normal');
smo106612.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo106611.addModifier(smo106612);
smo106612.addClass('lyric lyric-0');
smo106635v0ar.push(smo106611);
const smo106613 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo106613'] = smo106613;
smo106613.setAttribute('id', 'smo106613');
smo106635v0ar.push(smo106613);
const smo106614 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo106614'] = smo106614;
smo106614.setAttribute('id', 'smo106614');
smo106635v0ar.push(smo106614);
const smo106615 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo106615'] = smo106615;
smo106615.setAttribute('id', 'smo106615');
const smo106616 = new VF.Annotation('Man');
smo106616.setAttribute('id', 'smo106616');
smo106616.setFont('times', 12, 'normal');
smo106616.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo106615.addModifier(smo106616);
smo106616.addClass('lyric lyric-0 lyric-hyphen');
smo106635v0ar.push(smo106615);
const smo106617 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo106617'] = smo106617;
smo106617.setAttribute('id', 'smo106617');
smo106635v0ar.push(smo106617);
const smo106618 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo106618'] = smo106618;
smo106618.setAttribute('id', 'smo106618');
const smo1066180acc = new VF.Accidental('b');
smo106618.addModifier(smo1066180acc, 0);
const smo106619 = new VF.Annotation('ding');
smo106619.setAttribute('id', 'smo106619');
smo106619.setFont('times', 12, 'normal');
smo106619.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo106618.addModifier(smo106619);
smo106619.addClass('lyric lyric-0 lyric-hyphen');
smo106635v0ar.push(smo106618);
smo106635v0.addTickables(smo106635v0ar)
fmtsmo10663564.joinVoices([smo106635v0]);
const fmtsmo10967564 = new VF.Formatter();
//
// voices and notes for stave 10 64
const smo109675v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo109675v0ar = [];
const smo109651 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo109651'] = smo109651;
smo109651.setAttribute('id', 'smo109651');
const smo109652 = new VF.Annotation('bun');
smo109652.setAttribute('id', 'smo109652');
smo109652.setFont('times', 12, 'normal');
smo109652.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo109651.addModifier(smo109652);
smo109652.addClass('lyric lyric-0');
smo109675v0ar.push(smo109651);
const smo109653 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo109653'] = smo109653;
smo109653.setAttribute('id', 'smo109653');
smo109675v0ar.push(smo109653);
const smo109654 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo109654'] = smo109654;
smo109654.setAttribute('id', 'smo109654');
smo109675v0ar.push(smo109654);
const smo109655 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo109655'] = smo109655;
smo109655.setAttribute('id', 'smo109655');
const smo109656 = new VF.Annotation('Man');
smo109656.setAttribute('id', 'smo109656');
smo109656.setFont('times', 12, 'normal');
smo109656.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo109655.addModifier(smo109656);
smo109656.addClass('lyric lyric-0 lyric-hyphen');
smo109675v0ar.push(smo109655);
const smo109657 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo109657'] = smo109657;
smo109657.setAttribute('id', 'smo109657');
smo109675v0ar.push(smo109657);
const smo109658 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo109658'] = smo109658;
smo109658.setAttribute('id', 'smo109658');
const smo1096580acc = new VF.Accidental('b');
smo109658.addModifier(smo1096580acc, 0);
const smo109659 = new VF.Annotation('ding');
smo109659.setAttribute('id', 'smo109659');
smo109659.setFont('times', 12, 'normal');
smo109659.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo109658.addModifier(smo109659);
smo109659.addClass('lyric lyric-0 lyric-hyphen');
smo109675v0ar.push(smo109658);
smo109675v0.addTickables(smo109675v0ar)
fmtsmo10967564.joinVoices([smo109675v0]);
const fmtsmo11272964 = new VF.Formatter();
//
// voices and notes for stave 11 64
const smo112729v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo112729v0ar = [];
const smo112705 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo112705'] = smo112705;
smo112705.setAttribute('id', 'smo112705');
const smo112706 = new VF.Annotation('bun');
smo112706.setAttribute('id', 'smo112706');
smo112706.setFont('times', 12, 'normal');
smo112706.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo112705.addModifier(smo112706);
smo112706.addClass('lyric lyric-0');
smo112729v0ar.push(smo112705);
const smo112707 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo112707'] = smo112707;
smo112707.setAttribute('id', 'smo112707');
smo112729v0ar.push(smo112707);
const smo112708 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo112708'] = smo112708;
smo112708.setAttribute('id', 'smo112708');
smo112729v0ar.push(smo112708);
const smo112709 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo112709'] = smo112709;
smo112709.setAttribute('id', 'smo112709');
const smo112710 = new VF.Annotation('Man');
smo112710.setAttribute('id', 'smo112710');
smo112710.setFont('times', 12, 'normal');
smo112710.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo112709.addModifier(smo112710);
smo112710.addClass('lyric lyric-0 lyric-hyphen');
smo112729v0ar.push(smo112709);
const smo112711 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo112711'] = smo112711;
smo112711.setAttribute('id', 'smo112711');
smo112729v0ar.push(smo112711);
const smo112712 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo112712'] = smo112712;
smo112712.setAttribute('id', 'smo112712');
const smo1127120acc = new VF.Accidental('b');
smo112712.addModifier(smo1127120acc, 0);
const smo112713 = new VF.Annotation('ding');
smo112713.setAttribute('id', 'smo112713');
smo112713.setFont('times', 12, 'normal');
smo112713.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo112712.addModifier(smo112713);
smo112713.addClass('lyric lyric-0 lyric-hyphen');
smo112729v0ar.push(smo112712);
smo112729v0.addTickables(smo112729v0ar)
fmtsmo11272964.joinVoices([smo112729v0]);
const fmtsmo11577264 = new VF.Formatter();
//
// voices and notes for stave 12 64
const smo115772v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo115772v0ar = [];
const smo115748 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo115748'] = smo115748;
smo115748.setAttribute('id', 'smo115748');
const smo115749 = new VF.Annotation('bun');
smo115749.setAttribute('id', 'smo115749');
smo115749.setFont('times', 12, 'normal');
smo115749.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo115748.addModifier(smo115749);
smo115749.addClass('lyric lyric-0');
smo115772v0ar.push(smo115748);
const smo115750 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo115750'] = smo115750;
smo115750.setAttribute('id', 'smo115750');
smo115772v0ar.push(smo115750);
const smo115751 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo115751'] = smo115751;
smo115751.setAttribute('id', 'smo115751');
smo115772v0ar.push(smo115751);
const smo115752 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo115752'] = smo115752;
smo115752.setAttribute('id', 'smo115752');
const smo115753 = new VF.Annotation('Man');
smo115753.setAttribute('id', 'smo115753');
smo115753.setFont('times', 12, 'normal');
smo115753.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo115752.addModifier(smo115753);
smo115753.addClass('lyric lyric-0 lyric-hyphen');
smo115772v0ar.push(smo115752);
const smo115754 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo115754'] = smo115754;
smo115754.setAttribute('id', 'smo115754');
smo115772v0ar.push(smo115754);
const smo115755 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo115755'] = smo115755;
smo115755.setAttribute('id', 'smo115755');
const smo1157550acc = new VF.Accidental('b');
smo115755.addModifier(smo1157550acc, 0);
const smo115756 = new VF.Annotation('ding');
smo115756.setAttribute('id', 'smo115756');
smo115756.setFont('times', 12, 'normal');
smo115756.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo115755.addModifier(smo115756);
smo115756.addClass('lyric lyric-0 lyric-hyphen');
smo115772v0ar.push(smo115755);
smo115772v0.addTickables(smo115772v0ar)
fmtsmo11577264.joinVoices([smo115772v0]);
const fmtsmo11898464 = new VF.Formatter();
//
// voices and notes for stave 13 64
const smo118984v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo118984v0ar = [];
const smo118964 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
noteHash['smo118964'] = smo118964;
smo118964.setAttribute('id', 'smo118964');
smo118964.addModifier(new VF.Dot(), 0);
smo118964.addModifier(new VF.Dot(), 1);
smo118964.addModifier(new VF.Dot(), 2);
smo118984v0ar.push(smo118964);
const smo118965 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo118965'] = smo118965;
smo118965.setAttribute('id', 'smo118965');
smo118984v0ar.push(smo118965);
const smo118966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo118966'] = smo118966;
smo118966.setAttribute('id', 'smo118966');
smo118984v0ar.push(smo118966);
const smo118967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
noteHash['smo118967'] = smo118967;
smo118967.setAttribute('id', 'smo118967');
const smo1189672acc = new VF.Accidental('b');
smo118967.addModifier(smo1189672acc, 2);
smo118984v0ar.push(smo118967);
const smo118968 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
noteHash['smo118968'] = smo118968;
smo118968.setAttribute('id', 'smo118968');
smo118984v0ar.push(smo118968);
smo118984v0.addTickables(smo118984v0ar)
fmtsmo11898464.joinVoices([smo118984v0]);
const fmtsmo12219764 = new VF.Formatter();
//
// voices and notes for stave 14 64
const smo122197v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo122197v0ar = [];
const smo122177 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
noteHash['smo122177'] = smo122177;
smo122177.setAttribute('id', 'smo122177');
smo122177.addModifier(new VF.Dot(), 0);
smo122177.addModifier(new VF.Dot(), 1);
smo122177.addModifier(new VF.Dot(), 2);
smo122197v0ar.push(smo122177);
const smo122178 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo122178'] = smo122178;
smo122178.setAttribute('id', 'smo122178');
smo122197v0ar.push(smo122178);
const smo122179 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo122179'] = smo122179;
smo122179.setAttribute('id', 'smo122179');
smo122197v0ar.push(smo122179);
const smo122180 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
noteHash['smo122180'] = smo122180;
smo122180.setAttribute('id', 'smo122180');
const smo1221802acc = new VF.Accidental('b');
smo122180.addModifier(smo1221802acc, 2);
smo122197v0ar.push(smo122180);
const smo122181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
noteHash['smo122181'] = smo122181;
smo122181.setAttribute('id', 'smo122181');
smo122197v0ar.push(smo122181);
smo122197v0.addTickables(smo122197v0ar)
fmtsmo12219764.joinVoices([smo122197v0]);
const fmtsmo12539264 = new VF.Formatter();
//
// voices and notes for stave 15 64
const smo125392v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo125392v0ar = [];
const smo125372 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo125372'] = smo125372;
smo125372.setAttribute('id', 'smo125372');
smo125372.addModifier(new VF.Dot(), 0);
smo125392v0ar.push(smo125372);
const smo125373 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo125373'] = smo125373;
smo125373.setAttribute('id', 'smo125373');
smo125392v0ar.push(smo125373);
const smo125374 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo125374'] = smo125374;
smo125374.setAttribute('id', 'smo125374');
smo125392v0ar.push(smo125374);
const smo125375 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo125375'] = smo125375;
smo125375.setAttribute('id', 'smo125375');
smo125392v0ar.push(smo125375);
const smo125376 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo125376'] = smo125376;
smo125376.setAttribute('id', 'smo125376');
smo125392v0ar.push(smo125376);
smo125392v0.addTickables(smo125392v0ar)
fmtsmo12539264.joinVoices([smo125392v0]);
const fmtsmo12851064 = new VF.Formatter();
//
// voices and notes for stave 16 64
const smo128510v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo128510v0ar = [];
const smo128491 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo128491'] = smo128491;
smo128491.setAttribute('id', 'smo128491');
smo128491.addModifier(new VF.Dot(), 0);
smo128510v0ar.push(smo128491);
const smo128492 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo128492'] = smo128492;
smo128492.setAttribute('id', 'smo128492');
smo128510v0ar.push(smo128492);
const smo128493 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo128493'] = smo128493;
smo128493.setAttribute('id', 'smo128493');
smo128510v0ar.push(smo128493);
const smo128494 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo128494'] = smo128494;
smo128494.setAttribute('id', 'smo128494');
smo128510v0ar.push(smo128494);
smo128510v0.addTickables(smo128510v0ar)
fmtsmo12851064.joinVoices([smo128510v0]);
const fmtsmo13169964 = new VF.Formatter();
//
// voices and notes for stave 17 64
const smo131699v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo131699v0ar = [];
const smo131672 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo131672'] = smo131672;
smo131672.setAttribute('id', 'smo131672');
const smo131673 = new VF.Annotation('bun');
smo131673.setAttribute('id', 'smo131673');
smo131673.setFont('times', 12, 'normal');
smo131673.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo131672.addModifier(smo131673);
smo131673.addClass('lyric lyric-0');
smo131699v0ar.push(smo131672);
const smo131674 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo131674'] = smo131674;
smo131674.setAttribute('id', 'smo131674');
smo131699v0ar.push(smo131674);
const smo131675 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo131675'] = smo131675;
smo131675.setAttribute('id', 'smo131675');
smo131699v0ar.push(smo131675);
const smo131676 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo131676'] = smo131676;
smo131676.setAttribute('id', 'smo131676');
smo131699v0ar.push(smo131676);
smo131699v0.addTickables(smo131699v0ar)
fmtsmo13169964.joinVoices([smo131699v0]);
const smo131699v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo131699v1ar = [];
const smo131677 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo131677'] = smo131677;
smo131677.setAttribute('id', 'smo131677');
smo131677.setStyle({ fillStyle: '#aaaaaa7f' });
smo131699v1ar.push(smo131677);
const smo131678 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo131678'] = smo131678;
smo131678.setAttribute('id', 'smo131678');
smo131678.setStyle({ fillStyle: '#aaaaaa7f' });
smo131699v1ar.push(smo131678);
const smo131679 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo131679'] = smo131679;
smo131679.setAttribute('id', 'smo131679');
smo131679.setStyle({ fillStyle: '#aaaaaa7f' });
smo131699v1ar.push(smo131679);
const smo131680 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo131680'] = smo131680;
smo131680.setAttribute('id', 'smo131680');
smo131680.setStyle({ fillStyle: '#aaaaaa7f' });
smo131699v1ar.push(smo131680);
smo131699v1.addTickables(smo131699v1ar)
fmtsmo13169964.joinVoices([smo131699v1]);
const smo131699v2 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo131699v2ar = [];
const smo131681 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo131681'] = smo131681;
smo131681.setAttribute('id', 'smo131681');
smo131681.setStyle({ fillStyle: '#aaaaaa7f' });
const smo1316810acc = new VF.Accidental('n');
smo131681.addModifier(smo1316810acc, 0);
smo131699v2ar.push(smo131681);
const smo131682 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo131682'] = smo131682;
smo131682.setAttribute('id', 'smo131682');
smo131682.setStyle({ fillStyle: '#aaaaaa7f' });
smo131699v2ar.push(smo131682);
const smo131683 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo131683'] = smo131683;
smo131683.setAttribute('id', 'smo131683');
smo131683.setStyle({ fillStyle: '#aaaaaa7f' });
smo131699v2ar.push(smo131683);
smo131699v2.addTickables(smo131699v2ar)
fmtsmo13169964.joinVoices([smo131699v2]);
// create beam groups and tuplets for format grp smo133472 before formatting
const dirsmo224796 = smo78840.getStemDirection();
smo78840.setStemDirection(dirsmo224796);
smo78842.setStemDirection(dirsmo224796);
const smo224796 = new VF.Beam([smo78840,smo78842]);
const dirsmo224799 = smo81834.getStemDirection();
smo81834.setStemDirection(dirsmo224799);
smo81836.setStemDirection(dirsmo224799);
const smo224799 = new VF.Beam([smo81834,smo81836]);
const dirsmo224802 = smo84977.getStemDirection();
smo84977.setStemDirection(dirsmo224802);
smo84979.setStemDirection(dirsmo224802);
const smo224802 = new VF.Beam([smo84977,smo84979]);
const dirsmo224805 = smo88093.getStemDirection();
smo88093.setStemDirection(dirsmo224805);
smo88095.setStemDirection(dirsmo224805);
const smo224805 = new VF.Beam([smo88093,smo88095]);
const dirsmo224808 = smo91112.getStemDirection();
smo91112.setStemDirection(dirsmo224808);
smo91114.setStemDirection(dirsmo224808);
const smo224808 = new VF.Beam([smo91112,smo91114]);
 
// formatting measures in staff group smo133472
fmtsmo7886064.format([smo78860v0,smo81854v0,smo84997v0,smo88113v0,smo91132v0], 288);
const stavesmo78860 = new VF.Stave(506, 210, 302);
stavesmo78860.setAttribute('id', 'stavesmo78860');
stavesmo78860.setBegBarType(VF.Barline.type.NONE);
stavesmo78860.setContext(context);
stavesmo78860.draw();
smo78860v0.draw(context, stavesmo78860);
smo224796.setContext(context);
smo224796.draw();
const stavesmo81854 = new VF.Stave(506, 316, 302);
stavesmo81854.setAttribute('id', 'stavesmo81854');
stavesmo81854.setBegBarType(VF.Barline.type.NONE);
stavesmo81854.setContext(context);
stavesmo81854.draw();
smo81854v0.draw(context, stavesmo81854);
smo224799.setContext(context);
smo224799.draw();
const stavesmo84997 = new VF.Stave(506, 437, 302);
stavesmo84997.setAttribute('id', 'stavesmo84997');
stavesmo84997.setBegBarType(VF.Barline.type.NONE);
stavesmo84997.setContext(context);
stavesmo84997.draw();
smo84997v0.draw(context, stavesmo84997);
smo224802.setContext(context);
smo224802.draw();
const stavesmo88113 = new VF.Stave(506, 553, 302);
stavesmo88113.setAttribute('id', 'stavesmo88113');
stavesmo88113.setBegBarType(VF.Barline.type.NONE);
stavesmo88113.setContext(context);
stavesmo88113.draw();
smo88113v0.draw(context, stavesmo88113);
smo224805.setContext(context);
smo224805.draw();
const stavesmo91132 = new VF.Stave(506, 659, 302);
stavesmo91132.setAttribute('id', 'stavesmo91132');
stavesmo91132.setBegBarType(VF.Barline.type.NONE);
stavesmo91132.setContext(context);
stavesmo91132.draw();
smo91132v0.draw(context, stavesmo91132);
smo224808.setContext(context);
smo224808.draw();
// create beam groups and tuplets for format grp smo133474 before formatting
const dirsmo224811 = smo94219.getStemDirection();
smo94219.setStemDirection(dirsmo224811);
smo94221.setStemDirection(dirsmo224811);
const smo224811 = new VF.Beam([smo94219,smo94221]);
const dirsmo224814 = smo97331.getStemDirection();
smo97331.setStemDirection(dirsmo224814);
smo97333.setStemDirection(dirsmo224814);
const smo224814 = new VF.Beam([smo97331,smo97333]);
const dirsmo224817 = smo100440.getStemDirection();
smo100440.setStemDirection(dirsmo224817);
smo100442.setStemDirection(dirsmo224817);
const smo224817 = new VF.Beam([smo100440,smo100442]);
const dirsmo224820 = smo103526.getStemDirection();
smo103526.setStemDirection(dirsmo224820);
smo103528.setStemDirection(dirsmo224820);
const smo224820 = new VF.Beam([smo103526,smo103528]);
 
// formatting measures in staff group smo133474
fmtsmo9423964.format([smo94239v0,smo97351v0,smo100460v0,smo103546v0], 288);
const stavesmo94239 = new VF.Stave(506, 780, 302);
stavesmo94239.setAttribute('id', 'stavesmo94239');
stavesmo94239.setBegBarType(VF.Barline.type.NONE);
stavesmo94239.setContext(context);
stavesmo94239.draw();
smo94239v0.draw(context, stavesmo94239);
smo224811.setContext(context);
smo224811.draw();
const stavesmo97351 = new VF.Stave(506, 896, 302);
stavesmo97351.setAttribute('id', 'stavesmo97351');
stavesmo97351.setBegBarType(VF.Barline.type.NONE);
stavesmo97351.setContext(context);
stavesmo97351.draw();
smo97351v0.draw(context, stavesmo97351);
smo224814.setContext(context);
smo224814.draw();
const stavesmo100460 = new VF.Stave(506, 1012, 302);
stavesmo100460.setAttribute('id', 'stavesmo100460');
stavesmo100460.setBegBarType(VF.Barline.type.NONE);
stavesmo100460.setContext(context);
stavesmo100460.draw();
smo100460v0.draw(context, stavesmo100460);
smo224817.setContext(context);
smo224817.draw();
const stavesmo103546 = new VF.Stave(506, 1128, 302);
stavesmo103546.setAttribute('id', 'stavesmo103546');
stavesmo103546.setBegBarType(VF.Barline.type.NONE);
stavesmo103546.setContext(context);
stavesmo103546.draw();
smo103546v0.draw(context, stavesmo103546);
smo224820.setContext(context);
smo224820.draw();
// create beam groups and tuplets for format grp smo133476 before formatting
const dirsmo224823 = smo106615.getStemDirection();
smo106615.setStemDirection(dirsmo224823);
smo106617.setStemDirection(dirsmo224823);
const smo224823 = new VF.Beam([smo106615,smo106617]);
const dirsmo224826 = smo109655.getStemDirection();
smo109655.setStemDirection(dirsmo224826);
smo109657.setStemDirection(dirsmo224826);
const smo224826 = new VF.Beam([smo109655,smo109657]);
const dirsmo224829 = smo112709.getStemDirection();
smo112709.setStemDirection(dirsmo224829);
smo112711.setStemDirection(dirsmo224829);
const smo224829 = new VF.Beam([smo112709,smo112711]);
const dirsmo224832 = smo115752.getStemDirection();
smo115752.setStemDirection(dirsmo224832);
smo115754.setStemDirection(dirsmo224832);
const smo224832 = new VF.Beam([smo115752,smo115754]);
 
// formatting measures in staff group smo133476
fmtsmo10663564.format([smo106635v0,smo109675v0,smo112729v0,smo115772v0], 288);
const stavesmo106635 = new VF.Stave(506, 1264, 302);
stavesmo106635.setAttribute('id', 'stavesmo106635');
stavesmo106635.setBegBarType(VF.Barline.type.NONE);
stavesmo106635.setContext(context);
stavesmo106635.draw();
smo106635v0.draw(context, stavesmo106635);
smo224823.setContext(context);
smo224823.draw();
const stavesmo109675 = new VF.Stave(506, 1400, 302);
stavesmo109675.setAttribute('id', 'stavesmo109675');
stavesmo109675.setBegBarType(VF.Barline.type.NONE);
stavesmo109675.setContext(context);
stavesmo109675.draw();
smo109675v0.draw(context, stavesmo109675);
smo224826.setContext(context);
smo224826.draw();
const stavesmo112729 = new VF.Stave(506, 1536, 302);
stavesmo112729.setAttribute('id', 'stavesmo112729');
stavesmo112729.setBegBarType(VF.Barline.type.NONE);
stavesmo112729.setContext(context);
stavesmo112729.draw();
smo112729v0.draw(context, stavesmo112729);
smo224829.setContext(context);
smo224829.draw();
const stavesmo115772 = new VF.Stave(506, 1672, 302);
stavesmo115772.setAttribute('id', 'stavesmo115772');
stavesmo115772.setBegBarType(VF.Barline.type.NONE);
stavesmo115772.setContext(context);
stavesmo115772.draw();
smo115772v0.draw(context, stavesmo115772);
smo224832.setContext(context);
smo224832.draw();
// create beam groups and tuplets for format grp smo120795 before formatting
const dirsmo224835 = smo118965.getStemDirection();
smo118965.setStemDirection(dirsmo224835);
smo118966.setStemDirection(dirsmo224835);
const smo224835 = new VF.Beam([smo118965,smo118966]);
 
// formatting measures in staff group smo120795
fmtsmo11898464.format([smo118984v0], 288);
const stavesmo118984 = new VF.Stave(506, 1818, 302);
stavesmo118984.setAttribute('id', 'stavesmo118984');
stavesmo118984.setBegBarType(VF.Barline.type.NONE);
stavesmo118984.setContext(context);
stavesmo118984.draw();
smo118984v0.draw(context, stavesmo118984);
smo224835.setContext(context);
smo224835.draw();
// create beam groups and tuplets for format grp smo133470 before formatting
const dirsmo224838 = smo122178.getStemDirection();
smo122178.setStemDirection(dirsmo224838);
smo122179.setStemDirection(dirsmo224838);
const smo224838 = new VF.Beam([smo122178,smo122179]);
const dirsmo224841 = smo125373.getStemDirection();
smo125373.setStemDirection(dirsmo224841);
smo125374.setStemDirection(dirsmo224841);
const smo224841 = new VF.Beam([smo125373,smo125374]);
 
// formatting measures in staff group smo133470
fmtsmo12219764.format([smo122197v0,smo125392v0], 288);
const stavesmo122197 = new VF.Stave(506, 1924, 302);
stavesmo122197.setAttribute('id', 'stavesmo122197');
stavesmo122197.setBegBarType(VF.Barline.type.NONE);
stavesmo122197.setContext(context);
stavesmo122197.draw();
smo122197v0.draw(context, stavesmo122197);
smo224838.setContext(context);
smo224838.draw();
const stavesmo125392 = new VF.Stave(506, 2010, 302);
stavesmo125392.setAttribute('id', 'stavesmo125392');
stavesmo125392.setBegBarType(VF.Barline.type.NONE);
stavesmo125392.setContext(context);
stavesmo125392.draw();
smo125392v0.draw(context, stavesmo125392);
smo224841.setContext(context);
smo224841.draw();
// create beam groups and tuplets for format grp smo130308 before formatting
 
// formatting measures in staff group smo130308
fmtsmo12851064.format([smo128510v0], 288);
const stavesmo128510 = new VF.Stave(506, 2081, 302);
stavesmo128510.setAttribute('id', 'stavesmo128510');
stavesmo128510.setBegBarType(VF.Barline.type.NONE);
stavesmo128510.setContext(context);
stavesmo128510.draw();
smo128510v0.draw(context, stavesmo128510);
// create beam groups and tuplets for format grp smo133464 before formatting
 
// formatting measures in staff group smo133464
fmtsmo13169964.format([smo131699v0,smo131699v1,smo131699v2], 288);
const stavesmo131699 = new VF.Stave(506, 2152, 302);
stavesmo131699.setAttribute('id', 'stavesmo131699');
stavesmo131699.setBegBarType(VF.Barline.type.NONE);
stavesmo131699.setContext(context);
stavesmo131699.draw();
smo131699v0.draw(context, stavesmo131699);
smo131699v1.draw(context, stavesmo131699);
smo131699v2.draw(context, stavesmo131699);
const fmtsmo7888765 = new VF.Formatter();
//
// voices and notes for stave 0 65
const smo78887v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78887v0ar = [];
const smo78861 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo78861'] = smo78861;
smo78861.setAttribute('id', 'smo78861');
const smo788610acc = new VF.Accidental('n');
smo78861.addModifier(smo788610acc, 0);
smo78887v0ar.push(smo78861);
const smo78862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo78862'] = smo78862;
smo78862.setAttribute('id', 'smo78862');
const smo78863 = new VF.Annotation('a');
smo78863.setAttribute('id', 'smo78863');
smo78863.setFont('times', 12, 'normal');
smo78863.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo78862.addModifier(smo78863);
smo78863.addClass('lyric lyric-0');
smo78887v0ar.push(smo78862);
const smo78864 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo78864'] = smo78864;
smo78864.setAttribute('id', 'smo78864');
smo78887v0ar.push(smo78864);
const smo78865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo78865'] = smo78865;
smo78865.setAttribute('id', 'smo78865');
const smo78866 = new VF.Annotation('Ki');
smo78866.setAttribute('id', 'smo78866');
smo78866.setFont('times', 12, 'normal');
smo78866.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo78865.addModifier(smo78866);
smo78866.addClass('lyric lyric-0 lyric-hyphen');
smo78887v0ar.push(smo78865);
const smo78867 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo78867'] = smo78867;
smo78867.setAttribute('id', 'smo78867');
smo78887v0ar.push(smo78867);
const smo78868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo78868'] = smo78868;
smo78868.setAttribute('id', 'smo78868');
const smo78869 = new VF.Annotation('ki');
smo78869.setAttribute('id', 'smo78869');
smo78869.setFont('times', 12, 'normal');
smo78869.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo78868.addModifier(smo78869);
smo78869.addClass('lyric lyric-0');
smo78887v0ar.push(smo78868);
const smo78870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo78870'] = smo78870;
smo78870.setAttribute('id', 'smo78870');
const smo78871 = new VF.Annotation('ri');
smo78871.setAttribute('id', 'smo78871');
smo78871.setFont('times', 12, 'normal');
smo78871.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo78870.addModifier(smo78871);
smo78871.addClass('lyric lyric-0');
smo78887v0ar.push(smo78870);
smo78887v0.addTickables(smo78887v0ar)
fmtsmo7888765.joinVoices([smo78887v0]);
const fmtsmo8188165 = new VF.Formatter();
//
// voices and notes for stave 1 65
const smo81881v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81881v0ar = [];
const smo81855 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo81855'] = smo81855;
smo81855.setAttribute('id', 'smo81855');
const smo818550acc = new VF.Accidental('n');
smo81855.addModifier(smo818550acc, 0);
smo81881v0ar.push(smo81855);
const smo81856 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo81856'] = smo81856;
smo81856.setAttribute('id', 'smo81856');
const smo81857 = new VF.Annotation('a');
smo81857.setAttribute('id', 'smo81857');
smo81857.setFont('times', 12, 'normal');
smo81857.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo81856.addModifier(smo81857);
smo81857.addClass('lyric lyric-0');
smo81881v0ar.push(smo81856);
const smo81858 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo81858'] = smo81858;
smo81858.setAttribute('id', 'smo81858');
smo81881v0ar.push(smo81858);
const smo81859 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo81859'] = smo81859;
smo81859.setAttribute('id', 'smo81859');
const smo81860 = new VF.Annotation('Ki');
smo81860.setAttribute('id', 'smo81860');
smo81860.setFont('times', 12, 'normal');
smo81860.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo81859.addModifier(smo81860);
smo81860.addClass('lyric lyric-0 lyric-hyphen');
smo81881v0ar.push(smo81859);
const smo81861 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo81861'] = smo81861;
smo81861.setAttribute('id', 'smo81861');
smo81881v0ar.push(smo81861);
const smo81862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo81862'] = smo81862;
smo81862.setAttribute('id', 'smo81862');
const smo81863 = new VF.Annotation('ki');
smo81863.setAttribute('id', 'smo81863');
smo81863.setFont('times', 12, 'normal');
smo81863.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo81862.addModifier(smo81863);
smo81863.addClass('lyric lyric-0');
smo81881v0ar.push(smo81862);
const smo81864 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo81864'] = smo81864;
smo81864.setAttribute('id', 'smo81864');
const smo81865 = new VF.Annotation('ri');
smo81865.setAttribute('id', 'smo81865');
smo81865.setFont('times', 12, 'normal');
smo81865.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo81864.addModifier(smo81865);
smo81865.addClass('lyric lyric-0');
smo81881v0ar.push(smo81864);
smo81881v0.addTickables(smo81881v0ar)
fmtsmo8188165.joinVoices([smo81881v0]);
const fmtsmo8502465 = new VF.Formatter();
//
// voices and notes for stave 2 65
const smo85024v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo85024v0ar = [];
const smo84998 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo84998'] = smo84998;
smo84998.setAttribute('id', 'smo84998');
const smo849980acc = new VF.Accidental('n');
smo84998.addModifier(smo849980acc, 0);
smo85024v0ar.push(smo84998);
const smo84999 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo84999'] = smo84999;
smo84999.setAttribute('id', 'smo84999');
const smo85000 = new VF.Annotation('a');
smo85000.setAttribute('id', 'smo85000');
smo85000.setFont('times', 12, 'normal');
smo85000.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo84999.addModifier(smo85000);
smo85000.addClass('lyric lyric-0');
smo85024v0ar.push(smo84999);
const smo85001 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo85001'] = smo85001;
smo85001.setAttribute('id', 'smo85001');
smo85024v0ar.push(smo85001);
const smo85002 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo85002'] = smo85002;
smo85002.setAttribute('id', 'smo85002');
const smo85003 = new VF.Annotation('Ki');
smo85003.setAttribute('id', 'smo85003');
smo85003.setFont('times', 12, 'normal');
smo85003.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo85002.addModifier(smo85003);
smo85003.addClass('lyric lyric-0 lyric-hyphen');
smo85024v0ar.push(smo85002);
const smo85004 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo85004'] = smo85004;
smo85004.setAttribute('id', 'smo85004');
smo85024v0ar.push(smo85004);
const smo85005 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo85005'] = smo85005;
smo85005.setAttribute('id', 'smo85005');
const smo85006 = new VF.Annotation('ki');
smo85006.setAttribute('id', 'smo85006');
smo85006.setFont('times', 12, 'normal');
smo85006.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo85005.addModifier(smo85006);
smo85006.addClass('lyric lyric-0');
smo85024v0ar.push(smo85005);
const smo85007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo85007'] = smo85007;
smo85007.setAttribute('id', 'smo85007');
const smo85008 = new VF.Annotation('ri');
smo85008.setAttribute('id', 'smo85008');
smo85008.setFont('times', 12, 'normal');
smo85008.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo85007.addModifier(smo85008);
smo85008.addClass('lyric lyric-0');
smo85024v0ar.push(smo85007);
smo85024v0.addTickables(smo85024v0ar)
fmtsmo8502465.joinVoices([smo85024v0]);
const fmtsmo8814065 = new VF.Formatter();
//
// voices and notes for stave 3 65
const smo88140v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo88140v0ar = [];
const smo88114 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo88114'] = smo88114;
smo88114.setAttribute('id', 'smo88114');
const smo881140acc = new VF.Accidental('n');
smo88114.addModifier(smo881140acc, 0);
smo88140v0ar.push(smo88114);
const smo88115 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo88115'] = smo88115;
smo88115.setAttribute('id', 'smo88115');
const smo88116 = new VF.Annotation('a');
smo88116.setAttribute('id', 'smo88116');
smo88116.setFont('times', 12, 'normal');
smo88116.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo88115.addModifier(smo88116);
smo88116.addClass('lyric lyric-0');
smo88140v0ar.push(smo88115);
const smo88117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo88117'] = smo88117;
smo88117.setAttribute('id', 'smo88117');
smo88140v0ar.push(smo88117);
const smo88118 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo88118'] = smo88118;
smo88118.setAttribute('id', 'smo88118');
const smo88119 = new VF.Annotation('Ki');
smo88119.setAttribute('id', 'smo88119');
smo88119.setFont('times', 12, 'normal');
smo88119.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo88118.addModifier(smo88119);
smo88119.addClass('lyric lyric-0 lyric-hyphen');
smo88140v0ar.push(smo88118);
const smo88120 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo88120'] = smo88120;
smo88120.setAttribute('id', 'smo88120');
smo88140v0ar.push(smo88120);
const smo88121 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo88121'] = smo88121;
smo88121.setAttribute('id', 'smo88121');
const smo88122 = new VF.Annotation('ki');
smo88122.setAttribute('id', 'smo88122');
smo88122.setFont('times', 12, 'normal');
smo88122.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo88121.addModifier(smo88122);
smo88122.addClass('lyric lyric-0');
smo88140v0ar.push(smo88121);
const smo88123 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo88123'] = smo88123;
smo88123.setAttribute('id', 'smo88123');
const smo88124 = new VF.Annotation('ri');
smo88124.setAttribute('id', 'smo88124');
smo88124.setFont('times', 12, 'normal');
smo88124.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo88123.addModifier(smo88124);
smo88124.addClass('lyric lyric-0');
smo88140v0ar.push(smo88123);
smo88140v0.addTickables(smo88140v0ar)
fmtsmo8814065.joinVoices([smo88140v0]);
const fmtsmo9115965 = new VF.Formatter();
//
// voices and notes for stave 4 65
const smo91159v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo91159v0ar = [];
const smo91133 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo91133'] = smo91133;
smo91133.setAttribute('id', 'smo91133');
const smo911330acc = new VF.Accidental('n');
smo91133.addModifier(smo911330acc, 0);
smo91159v0ar.push(smo91133);
const smo91134 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo91134'] = smo91134;
smo91134.setAttribute('id', 'smo91134');
const smo91135 = new VF.Annotation('a');
smo91135.setAttribute('id', 'smo91135');
smo91135.setFont('times', 12, 'normal');
smo91135.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo91134.addModifier(smo91135);
smo91135.addClass('lyric lyric-0');
smo91159v0ar.push(smo91134);
const smo91136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo91136'] = smo91136;
smo91136.setAttribute('id', 'smo91136');
smo91159v0ar.push(smo91136);
const smo91137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo91137'] = smo91137;
smo91137.setAttribute('id', 'smo91137');
const smo91138 = new VF.Annotation('Ki');
smo91138.setAttribute('id', 'smo91138');
smo91138.setFont('times', 12, 'normal');
smo91138.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo91137.addModifier(smo91138);
smo91138.addClass('lyric lyric-0 lyric-hyphen');
smo91159v0ar.push(smo91137);
const smo91139 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo91139'] = smo91139;
smo91139.setAttribute('id', 'smo91139');
smo91159v0ar.push(smo91139);
const smo91140 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo91140'] = smo91140;
smo91140.setAttribute('id', 'smo91140');
const smo91141 = new VF.Annotation('ki');
smo91141.setAttribute('id', 'smo91141');
smo91141.setFont('times', 12, 'normal');
smo91141.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo91140.addModifier(smo91141);
smo91141.addClass('lyric lyric-0');
smo91159v0ar.push(smo91140);
const smo91142 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo91142'] = smo91142;
smo91142.setAttribute('id', 'smo91142');
const smo91143 = new VF.Annotation('ri');
smo91143.setAttribute('id', 'smo91143');
smo91143.setFont('times', 12, 'normal');
smo91143.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo91142.addModifier(smo91143);
smo91143.addClass('lyric lyric-0');
smo91159v0ar.push(smo91142);
smo91159v0.addTickables(smo91159v0ar)
fmtsmo9115965.joinVoices([smo91159v0]);
const fmtsmo9426665 = new VF.Formatter();
//
// voices and notes for stave 5 65
const smo94266v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo94266v0ar = [];
const smo94240 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo94240'] = smo94240;
smo94240.setAttribute('id', 'smo94240');
const smo942400acc = new VF.Accidental('n');
smo94240.addModifier(smo942400acc, 0);
smo94266v0ar.push(smo94240);
const smo94241 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo94241'] = smo94241;
smo94241.setAttribute('id', 'smo94241');
const smo94242 = new VF.Annotation('a');
smo94242.setAttribute('id', 'smo94242');
smo94242.setFont('times', 12, 'normal');
smo94242.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo94241.addModifier(smo94242);
smo94242.addClass('lyric lyric-0');
smo94266v0ar.push(smo94241);
const smo94243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo94243'] = smo94243;
smo94243.setAttribute('id', 'smo94243');
smo94266v0ar.push(smo94243);
const smo94244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo94244'] = smo94244;
smo94244.setAttribute('id', 'smo94244');
const smo94245 = new VF.Annotation('Ki');
smo94245.setAttribute('id', 'smo94245');
smo94245.setFont('times', 12, 'normal');
smo94245.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo94244.addModifier(smo94245);
smo94245.addClass('lyric lyric-0 lyric-hyphen');
smo94266v0ar.push(smo94244);
const smo94246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo94246'] = smo94246;
smo94246.setAttribute('id', 'smo94246');
smo94266v0ar.push(smo94246);
const smo94247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo94247'] = smo94247;
smo94247.setAttribute('id', 'smo94247');
const smo94248 = new VF.Annotation('ki');
smo94248.setAttribute('id', 'smo94248');
smo94248.setFont('times', 12, 'normal');
smo94248.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo94247.addModifier(smo94248);
smo94248.addClass('lyric lyric-0');
smo94266v0ar.push(smo94247);
const smo94249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo94249'] = smo94249;
smo94249.setAttribute('id', 'smo94249');
const smo94250 = new VF.Annotation('ri');
smo94250.setAttribute('id', 'smo94250');
smo94250.setFont('times', 12, 'normal');
smo94250.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo94249.addModifier(smo94250);
smo94250.addClass('lyric lyric-0');
smo94266v0ar.push(smo94249);
smo94266v0.addTickables(smo94266v0ar)
fmtsmo9426665.joinVoices([smo94266v0]);
const fmtsmo9737865 = new VF.Formatter();
//
// voices and notes for stave 6 65
const smo97378v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo97378v0ar = [];
const smo97352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo97352'] = smo97352;
smo97352.setAttribute('id', 'smo97352');
const smo973520acc = new VF.Accidental('n');
smo97352.addModifier(smo973520acc, 0);
smo97378v0ar.push(smo97352);
const smo97353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo97353'] = smo97353;
smo97353.setAttribute('id', 'smo97353');
const smo97354 = new VF.Annotation('a');
smo97354.setAttribute('id', 'smo97354');
smo97354.setFont('times', 12, 'normal');
smo97354.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo97353.addModifier(smo97354);
smo97354.addClass('lyric lyric-0');
smo97378v0ar.push(smo97353);
const smo97355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo97355'] = smo97355;
smo97355.setAttribute('id', 'smo97355');
smo97378v0ar.push(smo97355);
const smo97356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo97356'] = smo97356;
smo97356.setAttribute('id', 'smo97356');
const smo97357 = new VF.Annotation('Ki');
smo97357.setAttribute('id', 'smo97357');
smo97357.setFont('times', 12, 'normal');
smo97357.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo97356.addModifier(smo97357);
smo97357.addClass('lyric lyric-0 lyric-hyphen');
smo97378v0ar.push(smo97356);
const smo97358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo97358'] = smo97358;
smo97358.setAttribute('id', 'smo97358');
smo97378v0ar.push(smo97358);
const smo97359 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo97359'] = smo97359;
smo97359.setAttribute('id', 'smo97359');
const smo97360 = new VF.Annotation('ki');
smo97360.setAttribute('id', 'smo97360');
smo97360.setFont('times', 12, 'normal');
smo97360.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo97359.addModifier(smo97360);
smo97360.addClass('lyric lyric-0');
smo97378v0ar.push(smo97359);
const smo97361 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo97361'] = smo97361;
smo97361.setAttribute('id', 'smo97361');
const smo97362 = new VF.Annotation('ri');
smo97362.setAttribute('id', 'smo97362');
smo97362.setFont('times', 12, 'normal');
smo97362.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo97361.addModifier(smo97362);
smo97362.addClass('lyric lyric-0');
smo97378v0ar.push(smo97361);
smo97378v0.addTickables(smo97378v0ar)
fmtsmo9737865.joinVoices([smo97378v0]);
const fmtsmo10048765 = new VF.Formatter();
//
// voices and notes for stave 7 65
const smo100487v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100487v0ar = [];
const smo100461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo100461'] = smo100461;
smo100461.setAttribute('id', 'smo100461');
const smo1004610acc = new VF.Accidental('n');
smo100461.addModifier(smo1004610acc, 0);
smo100487v0ar.push(smo100461);
const smo100462 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo100462'] = smo100462;
smo100462.setAttribute('id', 'smo100462');
const smo100463 = new VF.Annotation('a');
smo100463.setAttribute('id', 'smo100463');
smo100463.setFont('times', 12, 'normal');
smo100463.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo100462.addModifier(smo100463);
smo100463.addClass('lyric lyric-0');
smo100487v0ar.push(smo100462);
const smo100464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo100464'] = smo100464;
smo100464.setAttribute('id', 'smo100464');
smo100487v0ar.push(smo100464);
const smo100465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo100465'] = smo100465;
smo100465.setAttribute('id', 'smo100465');
const smo100466 = new VF.Annotation('Ki');
smo100466.setAttribute('id', 'smo100466');
smo100466.setFont('times', 12, 'normal');
smo100466.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo100465.addModifier(smo100466);
smo100466.addClass('lyric lyric-0 lyric-hyphen');
smo100487v0ar.push(smo100465);
const smo100467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo100467'] = smo100467;
smo100467.setAttribute('id', 'smo100467');
smo100487v0ar.push(smo100467);
const smo100468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo100468'] = smo100468;
smo100468.setAttribute('id', 'smo100468');
const smo100469 = new VF.Annotation('ki');
smo100469.setAttribute('id', 'smo100469');
smo100469.setFont('times', 12, 'normal');
smo100469.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo100468.addModifier(smo100469);
smo100469.addClass('lyric lyric-0');
smo100487v0ar.push(smo100468);
const smo100470 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo100470'] = smo100470;
smo100470.setAttribute('id', 'smo100470');
const smo100471 = new VF.Annotation('ri');
smo100471.setAttribute('id', 'smo100471');
smo100471.setFont('times', 12, 'normal');
smo100471.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo100470.addModifier(smo100471);
smo100471.addClass('lyric lyric-0');
smo100487v0ar.push(smo100470);
smo100487v0.addTickables(smo100487v0ar)
fmtsmo10048765.joinVoices([smo100487v0]);
const fmtsmo10357365 = new VF.Formatter();
//
// voices and notes for stave 8 65
const smo103573v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103573v0ar = [];
const smo103547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo103547'] = smo103547;
smo103547.setAttribute('id', 'smo103547');
const smo1035470acc = new VF.Accidental('n');
smo103547.addModifier(smo1035470acc, 0);
smo103573v0ar.push(smo103547);
const smo103548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo103548'] = smo103548;
smo103548.setAttribute('id', 'smo103548');
const smo103549 = new VF.Annotation('a');
smo103549.setAttribute('id', 'smo103549');
smo103549.setFont('times', 12, 'normal');
smo103549.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo103548.addModifier(smo103549);
smo103549.addClass('lyric lyric-0');
smo103573v0ar.push(smo103548);
const smo103550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo103550'] = smo103550;
smo103550.setAttribute('id', 'smo103550');
smo103573v0ar.push(smo103550);
const smo103551 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo103551'] = smo103551;
smo103551.setAttribute('id', 'smo103551');
const smo103552 = new VF.Annotation('Ki');
smo103552.setAttribute('id', 'smo103552');
smo103552.setFont('times', 12, 'normal');
smo103552.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo103551.addModifier(smo103552);
smo103552.addClass('lyric lyric-0 lyric-hyphen');
smo103573v0ar.push(smo103551);
const smo103553 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo103553'] = smo103553;
smo103553.setAttribute('id', 'smo103553');
smo103573v0ar.push(smo103553);
const smo103554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo103554'] = smo103554;
smo103554.setAttribute('id', 'smo103554');
const smo103555 = new VF.Annotation('ki');
smo103555.setAttribute('id', 'smo103555');
smo103555.setFont('times', 12, 'normal');
smo103555.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo103554.addModifier(smo103555);
smo103555.addClass('lyric lyric-0');
smo103573v0ar.push(smo103554);
const smo103556 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo103556'] = smo103556;
smo103556.setAttribute('id', 'smo103556');
const smo103557 = new VF.Annotation('ri');
smo103557.setAttribute('id', 'smo103557');
smo103557.setFont('times', 12, 'normal');
smo103557.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo103556.addModifier(smo103557);
smo103557.addClass('lyric lyric-0');
smo103573v0ar.push(smo103556);
smo103573v0.addTickables(smo103573v0ar)
fmtsmo10357365.joinVoices([smo103573v0]);
const fmtsmo10666265 = new VF.Formatter();
//
// voices and notes for stave 9 65
const smo106662v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo106662v0ar = [];
const smo106636 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo106636'] = smo106636;
smo106636.setAttribute('id', 'smo106636');
const smo1066360acc = new VF.Accidental('b');
smo106636.addModifier(smo1066360acc, 0);
smo106662v0ar.push(smo106636);
const smo106637 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo106637'] = smo106637;
smo106637.setAttribute('id', 'smo106637');
const smo106638 = new VF.Annotation('a');
smo106638.setAttribute('id', 'smo106638');
smo106638.setFont('times', 12, 'normal');
smo106638.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo106637.addModifier(smo106638);
smo106638.addClass('lyric lyric-0');
smo106662v0ar.push(smo106637);
const smo106639 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo106639'] = smo106639;
smo106639.setAttribute('id', 'smo106639');
smo106662v0ar.push(smo106639);
const smo106640 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo106640'] = smo106640;
smo106640.setAttribute('id', 'smo106640');
const smo106641 = new VF.Annotation('Ki');
smo106641.setAttribute('id', 'smo106641');
smo106641.setFont('times', 12, 'normal');
smo106641.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo106640.addModifier(smo106641);
smo106641.addClass('lyric lyric-0 lyric-hyphen');
smo106662v0ar.push(smo106640);
const smo106642 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo106642'] = smo106642;
smo106642.setAttribute('id', 'smo106642');
smo106662v0ar.push(smo106642);
const smo106643 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo106643'] = smo106643;
smo106643.setAttribute('id', 'smo106643');
const smo106644 = new VF.Annotation('ki');
smo106644.setAttribute('id', 'smo106644');
smo106644.setFont('times', 12, 'normal');
smo106644.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo106643.addModifier(smo106644);
smo106644.addClass('lyric lyric-0');
smo106662v0ar.push(smo106643);
const smo106645 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo106645'] = smo106645;
smo106645.setAttribute('id', 'smo106645');
const smo106646 = new VF.Annotation('ri');
smo106646.setAttribute('id', 'smo106646');
smo106646.setFont('times', 12, 'normal');
smo106646.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo106645.addModifier(smo106646);
smo106646.addClass('lyric lyric-0');
smo106662v0ar.push(smo106645);
smo106662v0.addTickables(smo106662v0ar)
fmtsmo10666265.joinVoices([smo106662v0]);
const fmtsmo10970265 = new VF.Formatter();
//
// voices and notes for stave 10 65
const smo109702v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo109702v0ar = [];
const smo109676 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo109676'] = smo109676;
smo109676.setAttribute('id', 'smo109676');
const smo1096760acc = new VF.Accidental('b');
smo109676.addModifier(smo1096760acc, 0);
smo109702v0ar.push(smo109676);
const smo109677 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo109677'] = smo109677;
smo109677.setAttribute('id', 'smo109677');
const smo109678 = new VF.Annotation('a');
smo109678.setAttribute('id', 'smo109678');
smo109678.setFont('times', 12, 'normal');
smo109678.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo109677.addModifier(smo109678);
smo109678.addClass('lyric lyric-0');
smo109702v0ar.push(smo109677);
const smo109679 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo109679'] = smo109679;
smo109679.setAttribute('id', 'smo109679');
smo109702v0ar.push(smo109679);
const smo109680 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo109680'] = smo109680;
smo109680.setAttribute('id', 'smo109680');
const smo109681 = new VF.Annotation('Ki');
smo109681.setAttribute('id', 'smo109681');
smo109681.setFont('times', 12, 'normal');
smo109681.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo109680.addModifier(smo109681);
smo109681.addClass('lyric lyric-0 lyric-hyphen');
smo109702v0ar.push(smo109680);
const smo109682 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo109682'] = smo109682;
smo109682.setAttribute('id', 'smo109682');
smo109702v0ar.push(smo109682);
const smo109683 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo109683'] = smo109683;
smo109683.setAttribute('id', 'smo109683');
const smo109684 = new VF.Annotation('ki');
smo109684.setAttribute('id', 'smo109684');
smo109684.setFont('times', 12, 'normal');
smo109684.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo109683.addModifier(smo109684);
smo109684.addClass('lyric lyric-0');
smo109702v0ar.push(smo109683);
const smo109685 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo109685'] = smo109685;
smo109685.setAttribute('id', 'smo109685');
const smo109686 = new VF.Annotation('ri');
smo109686.setAttribute('id', 'smo109686');
smo109686.setFont('times', 12, 'normal');
smo109686.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo109685.addModifier(smo109686);
smo109686.addClass('lyric lyric-0');
smo109702v0ar.push(smo109685);
smo109702v0.addTickables(smo109702v0ar)
fmtsmo10970265.joinVoices([smo109702v0]);
const fmtsmo11275665 = new VF.Formatter();
//
// voices and notes for stave 11 65
const smo112756v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo112756v0ar = [];
const smo112730 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo112730'] = smo112730;
smo112730.setAttribute('id', 'smo112730');
const smo1127300acc = new VF.Accidental('b');
smo112730.addModifier(smo1127300acc, 0);
smo112756v0ar.push(smo112730);
const smo112731 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo112731'] = smo112731;
smo112731.setAttribute('id', 'smo112731');
const smo112732 = new VF.Annotation('a');
smo112732.setAttribute('id', 'smo112732');
smo112732.setFont('times', 12, 'normal');
smo112732.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo112731.addModifier(smo112732);
smo112732.addClass('lyric lyric-0');
smo112756v0ar.push(smo112731);
const smo112733 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo112733'] = smo112733;
smo112733.setAttribute('id', 'smo112733');
smo112756v0ar.push(smo112733);
const smo112734 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo112734'] = smo112734;
smo112734.setAttribute('id', 'smo112734');
const smo112735 = new VF.Annotation('Ki');
smo112735.setAttribute('id', 'smo112735');
smo112735.setFont('times', 12, 'normal');
smo112735.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo112734.addModifier(smo112735);
smo112735.addClass('lyric lyric-0 lyric-hyphen');
smo112756v0ar.push(smo112734);
const smo112736 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo112736'] = smo112736;
smo112736.setAttribute('id', 'smo112736');
smo112756v0ar.push(smo112736);
const smo112737 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo112737'] = smo112737;
smo112737.setAttribute('id', 'smo112737');
const smo112738 = new VF.Annotation('ki');
smo112738.setAttribute('id', 'smo112738');
smo112738.setFont('times', 12, 'normal');
smo112738.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo112737.addModifier(smo112738);
smo112738.addClass('lyric lyric-0');
smo112756v0ar.push(smo112737);
const smo112739 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo112739'] = smo112739;
smo112739.setAttribute('id', 'smo112739');
const smo112740 = new VF.Annotation('ri');
smo112740.setAttribute('id', 'smo112740');
smo112740.setFont('times', 12, 'normal');
smo112740.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo112739.addModifier(smo112740);
smo112740.addClass('lyric lyric-0');
smo112756v0ar.push(smo112739);
smo112756v0.addTickables(smo112756v0ar)
fmtsmo11275665.joinVoices([smo112756v0]);
const fmtsmo11579965 = new VF.Formatter();
//
// voices and notes for stave 12 65
const smo115799v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo115799v0ar = [];
const smo115773 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo115773'] = smo115773;
smo115773.setAttribute('id', 'smo115773');
const smo1157730acc = new VF.Accidental('b');
smo115773.addModifier(smo1157730acc, 0);
smo115799v0ar.push(smo115773);
const smo115774 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo115774'] = smo115774;
smo115774.setAttribute('id', 'smo115774');
const smo115775 = new VF.Annotation('a');
smo115775.setAttribute('id', 'smo115775');
smo115775.setFont('times', 12, 'normal');
smo115775.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo115774.addModifier(smo115775);
smo115775.addClass('lyric lyric-0');
smo115799v0ar.push(smo115774);
const smo115776 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo115776'] = smo115776;
smo115776.setAttribute('id', 'smo115776');
smo115799v0ar.push(smo115776);
const smo115777 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo115777'] = smo115777;
smo115777.setAttribute('id', 'smo115777');
const smo115778 = new VF.Annotation('Ki');
smo115778.setAttribute('id', 'smo115778');
smo115778.setFont('times', 12, 'normal');
smo115778.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo115777.addModifier(smo115778);
smo115778.addClass('lyric lyric-0 lyric-hyphen');
smo115799v0ar.push(smo115777);
const smo115779 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo115779'] = smo115779;
smo115779.setAttribute('id', 'smo115779');
smo115799v0ar.push(smo115779);
const smo115780 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo115780'] = smo115780;
smo115780.setAttribute('id', 'smo115780');
const smo115781 = new VF.Annotation('ki');
smo115781.setAttribute('id', 'smo115781');
smo115781.setFont('times', 12, 'normal');
smo115781.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo115780.addModifier(smo115781);
smo115781.addClass('lyric lyric-0');
smo115799v0ar.push(smo115780);
const smo115782 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo115782'] = smo115782;
smo115782.setAttribute('id', 'smo115782');
const smo115783 = new VF.Annotation('ri');
smo115783.setAttribute('id', 'smo115783');
smo115783.setFont('times', 12, 'normal');
smo115783.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo115782.addModifier(smo115783);
smo115783.addClass('lyric lyric-0');
smo115799v0ar.push(smo115782);
smo115799v0.addTickables(smo115799v0ar)
fmtsmo11579965.joinVoices([smo115799v0]);
const fmtsmo11900565 = new VF.Formatter();
//
// voices and notes for stave 13 65
const smo119005v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo119005v0ar = [];
const smo118985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n","eb/5/n"]}'))
noteHash['smo118985'] = smo118985;
smo118985.setAttribute('id', 'smo118985');
const smo1189852acc = new VF.Accidental('b');
smo118985.addModifier(smo1189852acc, 2);
smo118985.addModifier(new VF.Dot(), 0);
smo118985.addModifier(new VF.Dot(), 1);
smo118985.addModifier(new VF.Dot(), 2);
smo119005v0ar.push(smo118985);
const smo118986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
noteHash['smo118986'] = smo118986;
smo118986.setAttribute('id', 'smo118986');
const smo1189860acc = new VF.Accidental('#');
smo118986.addModifier(smo1189860acc, 0);
smo119005v0ar.push(smo118986);
const smo118987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
noteHash['smo118987'] = smo118987;
smo118987.setAttribute('id', 'smo118987');
smo119005v0ar.push(smo118987);
const smo118988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo118988'] = smo118988;
smo118988.setAttribute('id', 'smo118988');
smo119005v0ar.push(smo118988);
const smo118989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo118989'] = smo118989;
smo118989.setAttribute('id', 'smo118989');
smo119005v0ar.push(smo118989);
smo119005v0.addTickables(smo119005v0ar)
fmtsmo11900565.joinVoices([smo119005v0]);
const fmtsmo12221865 = new VF.Formatter();
//
// voices and notes for stave 14 65
const smo122218v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo122218v0ar = [];
const smo122198 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n","eb/5/n"]}'))
noteHash['smo122198'] = smo122198;
smo122198.setAttribute('id', 'smo122198');
const smo1221982acc = new VF.Accidental('b');
smo122198.addModifier(smo1221982acc, 2);
smo122198.addModifier(new VF.Dot(), 0);
smo122198.addModifier(new VF.Dot(), 1);
smo122198.addModifier(new VF.Dot(), 2);
smo122218v0ar.push(smo122198);
const smo122199 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
noteHash['smo122199'] = smo122199;
smo122199.setAttribute('id', 'smo122199');
const smo1221990acc = new VF.Accidental('#');
smo122199.addModifier(smo1221990acc, 0);
smo122218v0ar.push(smo122199);
const smo122200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
noteHash['smo122200'] = smo122200;
smo122200.setAttribute('id', 'smo122200');
smo122218v0ar.push(smo122200);
const smo122201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo122201'] = smo122201;
smo122201.setAttribute('id', 'smo122201');
smo122218v0ar.push(smo122201);
const smo122202 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo122202'] = smo122202;
smo122202.setAttribute('id', 'smo122202');
smo122218v0ar.push(smo122202);
smo122218v0.addTickables(smo122218v0ar)
fmtsmo12221865.joinVoices([smo122218v0]);
const fmtsmo12541365 = new VF.Formatter();
//
// voices and notes for stave 15 65
const smo125413v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo125413v0ar = [];
const smo125393 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo125393'] = smo125393;
smo125393.setAttribute('id', 'smo125393');
smo125393.addModifier(new VF.Dot(), 0);
smo125413v0ar.push(smo125393);
const smo125394 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo125394'] = smo125394;
smo125394.setAttribute('id', 'smo125394');
const smo1253940acc = new VF.Accidental('#');
smo125394.addModifier(smo1253940acc, 0);
smo125413v0ar.push(smo125394);
const smo125395 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo125395'] = smo125395;
smo125395.setAttribute('id', 'smo125395');
smo125413v0ar.push(smo125395);
const smo125396 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo125396'] = smo125396;
smo125396.setAttribute('id', 'smo125396');
smo125413v0ar.push(smo125396);
const smo125397 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo125397'] = smo125397;
smo125397.setAttribute('id', 'smo125397');
smo125413v0ar.push(smo125397);
smo125413v0.addTickables(smo125413v0ar)
fmtsmo12541365.joinVoices([smo125413v0]);
const fmtsmo12853065 = new VF.Formatter();
//
// voices and notes for stave 16 65
const smo128530v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo128530v0ar = [];
const smo128511 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo128511'] = smo128511;
smo128511.setAttribute('id', 'smo128511');
smo128511.addModifier(new VF.Dot(), 0);
smo128530v0ar.push(smo128511);
const smo128512 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo128512'] = smo128512;
smo128512.setAttribute('id', 'smo128512');
smo128530v0ar.push(smo128512);
const smo128513 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo128513'] = smo128513;
smo128513.setAttribute('id', 'smo128513');
smo128530v0ar.push(smo128513);
const smo128514 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo128514'] = smo128514;
smo128514.setAttribute('id', 'smo128514');
smo128530v0ar.push(smo128514);
smo128530v0.addTickables(smo128530v0ar)
fmtsmo12853065.joinVoices([smo128530v0]);
const fmtsmo13171965 = new VF.Formatter();
//
// voices and notes for stave 17 65
const smo131719v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo131719v0ar = [];
const smo131700 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo131700'] = smo131700;
smo131700.setAttribute('id', 'smo131700');
const smo1317000acc = new VF.Accidental('n');
smo131700.addModifier(smo1317000acc, 0);
smo131700.addModifier(new VF.Dot(), 0);
smo131719v0ar.push(smo131700);
const smo131701 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo131701'] = smo131701;
smo131701.setAttribute('id', 'smo131701');
smo131719v0ar.push(smo131701);
const smo131702 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo131702'] = smo131702;
smo131702.setAttribute('id', 'smo131702');
smo131719v0ar.push(smo131702);
const smo131703 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo131703'] = smo131703;
smo131703.setAttribute('id', 'smo131703');
smo131719v0ar.push(smo131703);
smo131719v0.addTickables(smo131719v0ar)
fmtsmo13171965.joinVoices([smo131719v0]);
// create beam groups and tuplets for format grp smo133472 before formatting
const dirsmo224848 = smo78861.getStemDirection();
smo78861.setStemDirection(dirsmo224848);
smo78862.setStemDirection(dirsmo224848);
const smo224848 = new VF.Beam([smo78861,smo78862]);
const dirsmo224849 = smo78865.getStemDirection();
smo78865.setStemDirection(dirsmo224849);
smo78867.setStemDirection(dirsmo224849);
const smo224849 = new VF.Beam([smo78865,smo78867]);
const dirsmo224852 = smo81855.getStemDirection();
smo81855.setStemDirection(dirsmo224852);
smo81856.setStemDirection(dirsmo224852);
const smo224852 = new VF.Beam([smo81855,smo81856]);
const dirsmo224853 = smo81859.getStemDirection();
smo81859.setStemDirection(dirsmo224853);
smo81861.setStemDirection(dirsmo224853);
const smo224853 = new VF.Beam([smo81859,smo81861]);
const dirsmo224856 = smo84998.getStemDirection();
smo84998.setStemDirection(dirsmo224856);
smo84999.setStemDirection(dirsmo224856);
const smo224856 = new VF.Beam([smo84998,smo84999]);
const dirsmo224857 = smo85002.getStemDirection();
smo85002.setStemDirection(dirsmo224857);
smo85004.setStemDirection(dirsmo224857);
const smo224857 = new VF.Beam([smo85002,smo85004]);
const dirsmo224860 = smo88114.getStemDirection();
smo88114.setStemDirection(dirsmo224860);
smo88115.setStemDirection(dirsmo224860);
const smo224860 = new VF.Beam([smo88114,smo88115]);
const dirsmo224861 = smo88118.getStemDirection();
smo88118.setStemDirection(dirsmo224861);
smo88120.setStemDirection(dirsmo224861);
const smo224861 = new VF.Beam([smo88118,smo88120]);
const dirsmo224864 = smo91133.getStemDirection();
smo91133.setStemDirection(dirsmo224864);
smo91134.setStemDirection(dirsmo224864);
const smo224864 = new VF.Beam([smo91133,smo91134]);
const dirsmo224865 = smo91137.getStemDirection();
smo91137.setStemDirection(dirsmo224865);
smo91139.setStemDirection(dirsmo224865);
const smo224865 = new VF.Beam([smo91137,smo91139]);
 
// formatting measures in staff group smo133472
fmtsmo7888765.format([smo78887v0,smo81881v0,smo85024v0,smo88140v0,smo91159v0], 288);
const stavesmo78887 = new VF.Stave(808, 210, 302);
stavesmo78887.setAttribute('id', 'stavesmo78887');
stavesmo78887.setBegBarType(VF.Barline.type.NONE);
stavesmo78887.setContext(context);
stavesmo78887.draw();
smo78887v0.draw(context, stavesmo78887);
smo224848.setContext(context);
smo224848.draw();
smo224849.setContext(context);
smo224849.draw();
const stavesmo81881 = new VF.Stave(808, 316, 302);
stavesmo81881.setAttribute('id', 'stavesmo81881');
stavesmo81881.setBegBarType(VF.Barline.type.NONE);
stavesmo81881.setContext(context);
stavesmo81881.draw();
smo81881v0.draw(context, stavesmo81881);
smo224852.setContext(context);
smo224852.draw();
smo224853.setContext(context);
smo224853.draw();
const stavesmo85024 = new VF.Stave(808, 437, 302);
stavesmo85024.setAttribute('id', 'stavesmo85024');
stavesmo85024.setBegBarType(VF.Barline.type.NONE);
stavesmo85024.setContext(context);
stavesmo85024.draw();
smo85024v0.draw(context, stavesmo85024);
smo224856.setContext(context);
smo224856.draw();
smo224857.setContext(context);
smo224857.draw();
const stavesmo88140 = new VF.Stave(808, 553, 302);
stavesmo88140.setAttribute('id', 'stavesmo88140');
stavesmo88140.setBegBarType(VF.Barline.type.NONE);
stavesmo88140.setContext(context);
stavesmo88140.draw();
smo88140v0.draw(context, stavesmo88140);
smo224860.setContext(context);
smo224860.draw();
smo224861.setContext(context);
smo224861.draw();
const stavesmo91159 = new VF.Stave(808, 659, 302);
stavesmo91159.setAttribute('id', 'stavesmo91159');
stavesmo91159.setBegBarType(VF.Barline.type.NONE);
stavesmo91159.setContext(context);
stavesmo91159.draw();
smo91159v0.draw(context, stavesmo91159);
smo224864.setContext(context);
smo224864.draw();
smo224865.setContext(context);
smo224865.draw();
// create beam groups and tuplets for format grp smo133474 before formatting
const dirsmo224868 = smo94240.getStemDirection();
smo94240.setStemDirection(dirsmo224868);
smo94241.setStemDirection(dirsmo224868);
const smo224868 = new VF.Beam([smo94240,smo94241]);
const dirsmo224869 = smo94244.getStemDirection();
smo94244.setStemDirection(dirsmo224869);
smo94246.setStemDirection(dirsmo224869);
const smo224869 = new VF.Beam([smo94244,smo94246]);
const dirsmo224872 = smo97352.getStemDirection();
smo97352.setStemDirection(dirsmo224872);
smo97353.setStemDirection(dirsmo224872);
const smo224872 = new VF.Beam([smo97352,smo97353]);
const dirsmo224873 = smo97356.getStemDirection();
smo97356.setStemDirection(dirsmo224873);
smo97358.setStemDirection(dirsmo224873);
const smo224873 = new VF.Beam([smo97356,smo97358]);
const dirsmo224876 = smo100461.getStemDirection();
smo100461.setStemDirection(dirsmo224876);
smo100462.setStemDirection(dirsmo224876);
const smo224876 = new VF.Beam([smo100461,smo100462]);
const dirsmo224877 = smo100465.getStemDirection();
smo100465.setStemDirection(dirsmo224877);
smo100467.setStemDirection(dirsmo224877);
const smo224877 = new VF.Beam([smo100465,smo100467]);
const dirsmo224880 = smo103547.getStemDirection();
smo103547.setStemDirection(dirsmo224880);
smo103548.setStemDirection(dirsmo224880);
const smo224880 = new VF.Beam([smo103547,smo103548]);
const dirsmo224881 = smo103551.getStemDirection();
smo103551.setStemDirection(dirsmo224881);
smo103553.setStemDirection(dirsmo224881);
const smo224881 = new VF.Beam([smo103551,smo103553]);
 
// formatting measures in staff group smo133474
fmtsmo9426665.format([smo94266v0,smo97378v0,smo100487v0,smo103573v0], 288);
const stavesmo94266 = new VF.Stave(808, 780, 302);
stavesmo94266.setAttribute('id', 'stavesmo94266');
stavesmo94266.setBegBarType(VF.Barline.type.NONE);
stavesmo94266.setContext(context);
stavesmo94266.draw();
smo94266v0.draw(context, stavesmo94266);
smo224868.setContext(context);
smo224868.draw();
smo224869.setContext(context);
smo224869.draw();
const stavesmo97378 = new VF.Stave(808, 896, 302);
stavesmo97378.setAttribute('id', 'stavesmo97378');
stavesmo97378.setBegBarType(VF.Barline.type.NONE);
stavesmo97378.setContext(context);
stavesmo97378.draw();
smo97378v0.draw(context, stavesmo97378);
smo224872.setContext(context);
smo224872.draw();
smo224873.setContext(context);
smo224873.draw();
const stavesmo100487 = new VF.Stave(808, 1012, 302);
stavesmo100487.setAttribute('id', 'stavesmo100487');
stavesmo100487.setBegBarType(VF.Barline.type.NONE);
stavesmo100487.setContext(context);
stavesmo100487.draw();
smo100487v0.draw(context, stavesmo100487);
smo224876.setContext(context);
smo224876.draw();
smo224877.setContext(context);
smo224877.draw();
const stavesmo103573 = new VF.Stave(808, 1128, 302);
stavesmo103573.setAttribute('id', 'stavesmo103573');
stavesmo103573.setBegBarType(VF.Barline.type.NONE);
stavesmo103573.setContext(context);
stavesmo103573.draw();
smo103573v0.draw(context, stavesmo103573);
smo224880.setContext(context);
smo224880.draw();
smo224881.setContext(context);
smo224881.draw();
// create beam groups and tuplets for format grp smo133476 before formatting
const dirsmo224884 = smo106636.getStemDirection();
smo106636.setStemDirection(dirsmo224884);
smo106637.setStemDirection(dirsmo224884);
const smo224884 = new VF.Beam([smo106636,smo106637]);
const dirsmo224885 = smo106640.getStemDirection();
smo106640.setStemDirection(dirsmo224885);
smo106642.setStemDirection(dirsmo224885);
const smo224885 = new VF.Beam([smo106640,smo106642]);
const dirsmo224888 = smo109676.getStemDirection();
smo109676.setStemDirection(dirsmo224888);
smo109677.setStemDirection(dirsmo224888);
const smo224888 = new VF.Beam([smo109676,smo109677]);
const dirsmo224889 = smo109680.getStemDirection();
smo109680.setStemDirection(dirsmo224889);
smo109682.setStemDirection(dirsmo224889);
const smo224889 = new VF.Beam([smo109680,smo109682]);
const dirsmo224892 = smo112730.getStemDirection();
smo112730.setStemDirection(dirsmo224892);
smo112731.setStemDirection(dirsmo224892);
const smo224892 = new VF.Beam([smo112730,smo112731]);
const dirsmo224893 = smo112734.getStemDirection();
smo112734.setStemDirection(dirsmo224893);
smo112736.setStemDirection(dirsmo224893);
const smo224893 = new VF.Beam([smo112734,smo112736]);
const dirsmo224896 = smo115773.getStemDirection();
smo115773.setStemDirection(dirsmo224896);
smo115774.setStemDirection(dirsmo224896);
const smo224896 = new VF.Beam([smo115773,smo115774]);
const dirsmo224897 = smo115777.getStemDirection();
smo115777.setStemDirection(dirsmo224897);
smo115779.setStemDirection(dirsmo224897);
const smo224897 = new VF.Beam([smo115777,smo115779]);
 
// formatting measures in staff group smo133476
fmtsmo10666265.format([smo106662v0,smo109702v0,smo112756v0,smo115799v0], 288);
const stavesmo106662 = new VF.Stave(808, 1264, 302);
stavesmo106662.setAttribute('id', 'stavesmo106662');
stavesmo106662.setBegBarType(VF.Barline.type.NONE);
stavesmo106662.setContext(context);
stavesmo106662.draw();
smo106662v0.draw(context, stavesmo106662);
smo224884.setContext(context);
smo224884.draw();
smo224885.setContext(context);
smo224885.draw();
const stavesmo109702 = new VF.Stave(808, 1400, 302);
stavesmo109702.setAttribute('id', 'stavesmo109702');
stavesmo109702.setBegBarType(VF.Barline.type.NONE);
stavesmo109702.setContext(context);
stavesmo109702.draw();
smo109702v0.draw(context, stavesmo109702);
smo224888.setContext(context);
smo224888.draw();
smo224889.setContext(context);
smo224889.draw();
const stavesmo112756 = new VF.Stave(808, 1536, 302);
stavesmo112756.setAttribute('id', 'stavesmo112756');
stavesmo112756.setBegBarType(VF.Barline.type.NONE);
stavesmo112756.setContext(context);
stavesmo112756.draw();
smo112756v0.draw(context, stavesmo112756);
smo224892.setContext(context);
smo224892.draw();
smo224893.setContext(context);
smo224893.draw();
const stavesmo115799 = new VF.Stave(808, 1672, 302);
stavesmo115799.setAttribute('id', 'stavesmo115799');
stavesmo115799.setBegBarType(VF.Barline.type.NONE);
stavesmo115799.setContext(context);
stavesmo115799.draw();
smo115799v0.draw(context, stavesmo115799);
smo224896.setContext(context);
smo224896.draw();
smo224897.setContext(context);
smo224897.draw();
// create beam groups and tuplets for format grp smo120795 before formatting
const dirsmo224900 = smo118986.getStemDirection();
smo118986.setStemDirection(dirsmo224900);
smo118987.setStemDirection(dirsmo224900);
const smo224900 = new VF.Beam([smo118986,smo118987]);
 
// formatting measures in staff group smo120795
fmtsmo11900565.format([smo119005v0], 288);
const stavesmo119005 = new VF.Stave(808, 1818, 302);
stavesmo119005.setAttribute('id', 'stavesmo119005');
stavesmo119005.setBegBarType(VF.Barline.type.NONE);
stavesmo119005.setContext(context);
stavesmo119005.draw();
smo119005v0.draw(context, stavesmo119005);
smo224900.setContext(context);
smo224900.draw();
// create beam groups and tuplets for format grp smo133470 before formatting
const dirsmo224903 = smo122199.getStemDirection();
smo122199.setStemDirection(dirsmo224903);
smo122200.setStemDirection(dirsmo224903);
const smo224903 = new VF.Beam([smo122199,smo122200]);
const dirsmo224906 = smo125394.getStemDirection();
smo125394.setStemDirection(dirsmo224906);
smo125395.setStemDirection(dirsmo224906);
const smo224906 = new VF.Beam([smo125394,smo125395]);
 
// formatting measures in staff group smo133470
fmtsmo12221865.format([smo122218v0,smo125413v0], 288);
const stavesmo122218 = new VF.Stave(808, 1924, 302);
stavesmo122218.setAttribute('id', 'stavesmo122218');
stavesmo122218.setBegBarType(VF.Barline.type.NONE);
stavesmo122218.setContext(context);
stavesmo122218.draw();
smo122218v0.draw(context, stavesmo122218);
smo224903.setContext(context);
smo224903.draw();
const stavesmo125413 = new VF.Stave(808, 2010, 302);
stavesmo125413.setAttribute('id', 'stavesmo125413');
stavesmo125413.setBegBarType(VF.Barline.type.NONE);
stavesmo125413.setContext(context);
stavesmo125413.draw();
smo125413v0.draw(context, stavesmo125413);
smo224906.setContext(context);
smo224906.draw();
// create beam groups and tuplets for format grp smo130308 before formatting
 
// formatting measures in staff group smo130308
fmtsmo12853065.format([smo128530v0], 288);
const stavesmo128530 = new VF.Stave(808, 2081, 302);
stavesmo128530.setAttribute('id', 'stavesmo128530');
stavesmo128530.setBegBarType(VF.Barline.type.NONE);
stavesmo128530.setContext(context);
stavesmo128530.draw();
smo128530v0.draw(context, stavesmo128530);
// create beam groups and tuplets for format grp smo133464 before formatting
 
// formatting measures in staff group smo133464
fmtsmo13171965.format([smo131719v0], 288);
const stavesmo131719 = new VF.Stave(808, 2152, 302);
stavesmo131719.setAttribute('id', 'stavesmo131719');
stavesmo131719.setBegBarType(VF.Barline.type.NONE);
stavesmo131719.setContext(context);
stavesmo131719.draw();
smo131719v0.draw(context, stavesmo131719);
const fmtsmo7891666 = new VF.Formatter();
//
// voices and notes for stave 0 66
const smo78916v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78916v0ar = [];
const smo78888 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo78888'] = smo78888;
smo78888.setAttribute('id', 'smo78888');
const smo78889 = new VF.Annotation('bun');
smo78889.setAttribute('id', 'smo78889');
smo78889.setFont('times', 12, 'normal');
smo78889.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo78888.addModifier(smo78889);
smo78889.addClass('lyric lyric-0');
smo78916v0ar.push(smo78888);
const smo78890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo78890'] = smo78890;
smo78890.setAttribute('id', 'smo78890');
const smo78891 = new VF.Annotation('yi');
smo78891.setAttribute('id', 'smo78891');
smo78891.setFont('times', 12, 'normal');
smo78891.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo78890.addModifier(smo78891);
smo78891.addClass('lyric lyric-0 lyric-hyphen');
smo78916v0ar.push(smo78890);
const smo78892 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo78892'] = smo78892;
smo78892.setAttribute('id', 'smo78892');
const smo78893 = new VF.Annotation('ri');
smo78893.setAttribute('id', 'smo78893');
smo78893.setFont('times', 12, 'normal');
smo78893.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo78892.addModifier(smo78893);
smo78893.addClass('lyric lyric-0');
smo78916v0ar.push(smo78892);
const smo78894 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo78894'] = smo78894;
smo78894.setAttribute('id', 'smo78894');
const smo78895 = new VF.Annotation('bun');
smo78895.setAttribute('id', 'smo78895');
smo78895.setFont('times', 12, 'normal');
smo78895.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo78894.addModifier(smo78895);
smo78895.addClass('lyric lyric-0');
smo78916v0ar.push(smo78894);
const smo78896 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo78896'] = smo78896;
smo78896.setAttribute('id', 'smo78896');
const smo78897 = new VF.Annotation('Man');
smo78897.setAttribute('id', 'smo78897');
smo78897.setFont('times', 12, 'normal');
smo78897.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo78896.addModifier(smo78897);
smo78897.addClass('lyric lyric-0 lyric-hyphen');
smo78916v0ar.push(smo78896);
const smo78898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo78898'] = smo78898;
smo78898.setAttribute('id', 'smo78898');
smo78916v0ar.push(smo78898);
const smo78899 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo78899'] = smo78899;
smo78899.setAttribute('id', 'smo78899');
const smo78900 = new VF.Annotation('ding');
smo78900.setAttribute('id', 'smo78900');
smo78900.setFont('times', 12, 'normal');
smo78900.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo78899.addModifier(smo78900);
smo78900.addClass('lyric lyric-0 lyric-hyphen');
smo78916v0ar.push(smo78899);
smo78916v0.addTickables(smo78916v0ar)
fmtsmo7891666.joinVoices([smo78916v0]);
const fmtsmo8191066 = new VF.Formatter();
//
// voices and notes for stave 1 66
const smo81910v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81910v0ar = [];
const smo81882 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo81882'] = smo81882;
smo81882.setAttribute('id', 'smo81882');
const smo81883 = new VF.Annotation('bun');
smo81883.setAttribute('id', 'smo81883');
smo81883.setFont('times', 12, 'normal');
smo81883.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo81882.addModifier(smo81883);
smo81883.addClass('lyric lyric-0');
smo81910v0ar.push(smo81882);
const smo81884 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo81884'] = smo81884;
smo81884.setAttribute('id', 'smo81884');
const smo81885 = new VF.Annotation('yi');
smo81885.setAttribute('id', 'smo81885');
smo81885.setFont('times', 12, 'normal');
smo81885.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo81884.addModifier(smo81885);
smo81885.addClass('lyric lyric-0 lyric-hyphen');
smo81910v0ar.push(smo81884);
const smo81886 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo81886'] = smo81886;
smo81886.setAttribute('id', 'smo81886');
const smo81887 = new VF.Annotation('ri');
smo81887.setAttribute('id', 'smo81887');
smo81887.setFont('times', 12, 'normal');
smo81887.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo81886.addModifier(smo81887);
smo81887.addClass('lyric lyric-0');
smo81910v0ar.push(smo81886);
const smo81888 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo81888'] = smo81888;
smo81888.setAttribute('id', 'smo81888');
const smo81889 = new VF.Annotation('bun');
smo81889.setAttribute('id', 'smo81889');
smo81889.setFont('times', 12, 'normal');
smo81889.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo81888.addModifier(smo81889);
smo81889.addClass('lyric lyric-0');
smo81910v0ar.push(smo81888);
const smo81890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo81890'] = smo81890;
smo81890.setAttribute('id', 'smo81890');
const smo81891 = new VF.Annotation('Man');
smo81891.setAttribute('id', 'smo81891');
smo81891.setFont('times', 12, 'normal');
smo81891.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo81890.addModifier(smo81891);
smo81891.addClass('lyric lyric-0 lyric-hyphen');
smo81910v0ar.push(smo81890);
const smo81892 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo81892'] = smo81892;
smo81892.setAttribute('id', 'smo81892');
smo81910v0ar.push(smo81892);
const smo81893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo81893'] = smo81893;
smo81893.setAttribute('id', 'smo81893');
const smo81894 = new VF.Annotation('ding');
smo81894.setAttribute('id', 'smo81894');
smo81894.setFont('times', 12, 'normal');
smo81894.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo81893.addModifier(smo81894);
smo81894.addClass('lyric lyric-0 lyric-hyphen');
smo81910v0ar.push(smo81893);
smo81910v0.addTickables(smo81910v0ar)
fmtsmo8191066.joinVoices([smo81910v0]);
const fmtsmo8505366 = new VF.Formatter();
//
// voices and notes for stave 2 66
const smo85053v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo85053v0ar = [];
const smo85025 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo85025'] = smo85025;
smo85025.setAttribute('id', 'smo85025');
const smo85026 = new VF.Annotation('bun');
smo85026.setAttribute('id', 'smo85026');
smo85026.setFont('times', 12, 'normal');
smo85026.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo85025.addModifier(smo85026);
smo85026.addClass('lyric lyric-0');
smo85053v0ar.push(smo85025);
const smo85027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo85027'] = smo85027;
smo85027.setAttribute('id', 'smo85027');
const smo85028 = new VF.Annotation('yi');
smo85028.setAttribute('id', 'smo85028');
smo85028.setFont('times', 12, 'normal');
smo85028.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo85027.addModifier(smo85028);
smo85028.addClass('lyric lyric-0 lyric-hyphen');
smo85053v0ar.push(smo85027);
const smo85029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo85029'] = smo85029;
smo85029.setAttribute('id', 'smo85029');
const smo85030 = new VF.Annotation('ri');
smo85030.setAttribute('id', 'smo85030');
smo85030.setFont('times', 12, 'normal');
smo85030.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo85029.addModifier(smo85030);
smo85030.addClass('lyric lyric-0');
smo85053v0ar.push(smo85029);
const smo85031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo85031'] = smo85031;
smo85031.setAttribute('id', 'smo85031');
const smo85032 = new VF.Annotation('bun');
smo85032.setAttribute('id', 'smo85032');
smo85032.setFont('times', 12, 'normal');
smo85032.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo85031.addModifier(smo85032);
smo85032.addClass('lyric lyric-0');
smo85053v0ar.push(smo85031);
const smo85033 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo85033'] = smo85033;
smo85033.setAttribute('id', 'smo85033');
const smo85034 = new VF.Annotation('Man');
smo85034.setAttribute('id', 'smo85034');
smo85034.setFont('times', 12, 'normal');
smo85034.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo85033.addModifier(smo85034);
smo85034.addClass('lyric lyric-0 lyric-hyphen');
smo85053v0ar.push(smo85033);
const smo85035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo85035'] = smo85035;
smo85035.setAttribute('id', 'smo85035');
smo85053v0ar.push(smo85035);
const smo85036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo85036'] = smo85036;
smo85036.setAttribute('id', 'smo85036');
const smo85037 = new VF.Annotation('ding');
smo85037.setAttribute('id', 'smo85037');
smo85037.setFont('times', 12, 'normal');
smo85037.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo85036.addModifier(smo85037);
smo85037.addClass('lyric lyric-0 lyric-hyphen');
smo85053v0ar.push(smo85036);
smo85053v0.addTickables(smo85053v0ar)
fmtsmo8505366.joinVoices([smo85053v0]);
const fmtsmo8816966 = new VF.Formatter();
//
// voices and notes for stave 3 66
const smo88169v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo88169v0ar = [];
const smo88141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo88141'] = smo88141;
smo88141.setAttribute('id', 'smo88141');
const smo88142 = new VF.Annotation('bun');
smo88142.setAttribute('id', 'smo88142');
smo88142.setFont('times', 12, 'normal');
smo88142.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo88141.addModifier(smo88142);
smo88142.addClass('lyric lyric-0');
smo88169v0ar.push(smo88141);
const smo88143 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo88143'] = smo88143;
smo88143.setAttribute('id', 'smo88143');
const smo88144 = new VF.Annotation('yi');
smo88144.setAttribute('id', 'smo88144');
smo88144.setFont('times', 12, 'normal');
smo88144.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo88143.addModifier(smo88144);
smo88144.addClass('lyric lyric-0 lyric-hyphen');
smo88169v0ar.push(smo88143);
const smo88145 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo88145'] = smo88145;
smo88145.setAttribute('id', 'smo88145');
const smo88146 = new VF.Annotation('ri');
smo88146.setAttribute('id', 'smo88146');
smo88146.setFont('times', 12, 'normal');
smo88146.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo88145.addModifier(smo88146);
smo88146.addClass('lyric lyric-0');
smo88169v0ar.push(smo88145);
const smo88147 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo88147'] = smo88147;
smo88147.setAttribute('id', 'smo88147');
const smo88148 = new VF.Annotation('bun');
smo88148.setAttribute('id', 'smo88148');
smo88148.setFont('times', 12, 'normal');
smo88148.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo88147.addModifier(smo88148);
smo88148.addClass('lyric lyric-0');
smo88169v0ar.push(smo88147);
const smo88149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo88149'] = smo88149;
smo88149.setAttribute('id', 'smo88149');
const smo88150 = new VF.Annotation('Man');
smo88150.setAttribute('id', 'smo88150');
smo88150.setFont('times', 12, 'normal');
smo88150.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo88149.addModifier(smo88150);
smo88150.addClass('lyric lyric-0 lyric-hyphen');
smo88169v0ar.push(smo88149);
const smo88151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo88151'] = smo88151;
smo88151.setAttribute('id', 'smo88151');
smo88169v0ar.push(smo88151);
const smo88152 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo88152'] = smo88152;
smo88152.setAttribute('id', 'smo88152');
const smo88153 = new VF.Annotation('ding');
smo88153.setAttribute('id', 'smo88153');
smo88153.setFont('times', 12, 'normal');
smo88153.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo88152.addModifier(smo88153);
smo88153.addClass('lyric lyric-0 lyric-hyphen');
smo88169v0ar.push(smo88152);
smo88169v0.addTickables(smo88169v0ar)
fmtsmo8816966.joinVoices([smo88169v0]);
const fmtsmo9118866 = new VF.Formatter();
//
// voices and notes for stave 4 66
const smo91188v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo91188v0ar = [];
const smo91160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo91160'] = smo91160;
smo91160.setAttribute('id', 'smo91160');
const smo91161 = new VF.Annotation('bun');
smo91161.setAttribute('id', 'smo91161');
smo91161.setFont('times', 12, 'normal');
smo91161.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo91160.addModifier(smo91161);
smo91161.addClass('lyric lyric-0');
smo91188v0ar.push(smo91160);
const smo91162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo91162'] = smo91162;
smo91162.setAttribute('id', 'smo91162');
const smo91163 = new VF.Annotation('yi');
smo91163.setAttribute('id', 'smo91163');
smo91163.setFont('times', 12, 'normal');
smo91163.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo91162.addModifier(smo91163);
smo91163.addClass('lyric lyric-0 lyric-hyphen');
smo91188v0ar.push(smo91162);
const smo91164 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo91164'] = smo91164;
smo91164.setAttribute('id', 'smo91164');
const smo91165 = new VF.Annotation('ri');
smo91165.setAttribute('id', 'smo91165');
smo91165.setFont('times', 12, 'normal');
smo91165.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo91164.addModifier(smo91165);
smo91165.addClass('lyric lyric-0');
smo91188v0ar.push(smo91164);
const smo91166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo91166'] = smo91166;
smo91166.setAttribute('id', 'smo91166');
const smo91167 = new VF.Annotation('bun');
smo91167.setAttribute('id', 'smo91167');
smo91167.setFont('times', 12, 'normal');
smo91167.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo91166.addModifier(smo91167);
smo91167.addClass('lyric lyric-0');
smo91188v0ar.push(smo91166);
const smo91168 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo91168'] = smo91168;
smo91168.setAttribute('id', 'smo91168');
const smo91169 = new VF.Annotation('Man');
smo91169.setAttribute('id', 'smo91169');
smo91169.setFont('times', 12, 'normal');
smo91169.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo91168.addModifier(smo91169);
smo91169.addClass('lyric lyric-0 lyric-hyphen');
smo91188v0ar.push(smo91168);
const smo91170 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo91170'] = smo91170;
smo91170.setAttribute('id', 'smo91170');
smo91188v0ar.push(smo91170);
const smo91171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo91171'] = smo91171;
smo91171.setAttribute('id', 'smo91171');
const smo91172 = new VF.Annotation('ding');
smo91172.setAttribute('id', 'smo91172');
smo91172.setFont('times', 12, 'normal');
smo91172.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo91171.addModifier(smo91172);
smo91172.addClass('lyric lyric-0 lyric-hyphen');
smo91188v0ar.push(smo91171);
smo91188v0.addTickables(smo91188v0ar)
fmtsmo9118866.joinVoices([smo91188v0]);
const fmtsmo9429566 = new VF.Formatter();
//
// voices and notes for stave 5 66
const smo94295v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo94295v0ar = [];
const smo94267 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo94267'] = smo94267;
smo94267.setAttribute('id', 'smo94267');
const smo94268 = new VF.Annotation('bun');
smo94268.setAttribute('id', 'smo94268');
smo94268.setFont('times', 12, 'normal');
smo94268.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo94267.addModifier(smo94268);
smo94268.addClass('lyric lyric-0');
smo94295v0ar.push(smo94267);
const smo94269 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo94269'] = smo94269;
smo94269.setAttribute('id', 'smo94269');
const smo94270 = new VF.Annotation('yi');
smo94270.setAttribute('id', 'smo94270');
smo94270.setFont('times', 12, 'normal');
smo94270.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo94269.addModifier(smo94270);
smo94270.addClass('lyric lyric-0 lyric-hyphen');
smo94295v0ar.push(smo94269);
const smo94271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo94271'] = smo94271;
smo94271.setAttribute('id', 'smo94271');
const smo94272 = new VF.Annotation('ri');
smo94272.setAttribute('id', 'smo94272');
smo94272.setFont('times', 12, 'normal');
smo94272.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo94271.addModifier(smo94272);
smo94272.addClass('lyric lyric-0');
smo94295v0ar.push(smo94271);
const smo94273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo94273'] = smo94273;
smo94273.setAttribute('id', 'smo94273');
const smo94274 = new VF.Annotation('bun');
smo94274.setAttribute('id', 'smo94274');
smo94274.setFont('times', 12, 'normal');
smo94274.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo94273.addModifier(smo94274);
smo94274.addClass('lyric lyric-0');
smo94295v0ar.push(smo94273);
const smo94275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo94275'] = smo94275;
smo94275.setAttribute('id', 'smo94275');
const smo94276 = new VF.Annotation('Man');
smo94276.setAttribute('id', 'smo94276');
smo94276.setFont('times', 12, 'normal');
smo94276.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo94275.addModifier(smo94276);
smo94276.addClass('lyric lyric-0 lyric-hyphen');
smo94295v0ar.push(smo94275);
const smo94277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo94277'] = smo94277;
smo94277.setAttribute('id', 'smo94277');
smo94295v0ar.push(smo94277);
const smo94278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo94278'] = smo94278;
smo94278.setAttribute('id', 'smo94278');
const smo94279 = new VF.Annotation('ding');
smo94279.setAttribute('id', 'smo94279');
smo94279.setFont('times', 12, 'normal');
smo94279.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo94278.addModifier(smo94279);
smo94279.addClass('lyric lyric-0 lyric-hyphen');
smo94295v0ar.push(smo94278);
smo94295v0.addTickables(smo94295v0ar)
fmtsmo9429566.joinVoices([smo94295v0]);
const fmtsmo9740766 = new VF.Formatter();
//
// voices and notes for stave 6 66
const smo97407v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo97407v0ar = [];
const smo97379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo97379'] = smo97379;
smo97379.setAttribute('id', 'smo97379');
const smo97380 = new VF.Annotation('bun');
smo97380.setAttribute('id', 'smo97380');
smo97380.setFont('times', 12, 'normal');
smo97380.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo97379.addModifier(smo97380);
smo97380.addClass('lyric lyric-0');
smo97407v0ar.push(smo97379);
const smo97381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo97381'] = smo97381;
smo97381.setAttribute('id', 'smo97381');
const smo97382 = new VF.Annotation('yi');
smo97382.setAttribute('id', 'smo97382');
smo97382.setFont('times', 12, 'normal');
smo97382.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo97381.addModifier(smo97382);
smo97382.addClass('lyric lyric-0 lyric-hyphen');
smo97407v0ar.push(smo97381);
const smo97383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo97383'] = smo97383;
smo97383.setAttribute('id', 'smo97383');
const smo97384 = new VF.Annotation('ri');
smo97384.setAttribute('id', 'smo97384');
smo97384.setFont('times', 12, 'normal');
smo97384.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo97383.addModifier(smo97384);
smo97384.addClass('lyric lyric-0');
smo97407v0ar.push(smo97383);
const smo97385 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo97385'] = smo97385;
smo97385.setAttribute('id', 'smo97385');
const smo97386 = new VF.Annotation('bun');
smo97386.setAttribute('id', 'smo97386');
smo97386.setFont('times', 12, 'normal');
smo97386.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo97385.addModifier(smo97386);
smo97386.addClass('lyric lyric-0');
smo97407v0ar.push(smo97385);
const smo97387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo97387'] = smo97387;
smo97387.setAttribute('id', 'smo97387');
const smo97388 = new VF.Annotation('Man');
smo97388.setAttribute('id', 'smo97388');
smo97388.setFont('times', 12, 'normal');
smo97388.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo97387.addModifier(smo97388);
smo97388.addClass('lyric lyric-0 lyric-hyphen');
smo97407v0ar.push(smo97387);
const smo97389 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo97389'] = smo97389;
smo97389.setAttribute('id', 'smo97389');
smo97407v0ar.push(smo97389);
const smo97390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo97390'] = smo97390;
smo97390.setAttribute('id', 'smo97390');
const smo97391 = new VF.Annotation('ding');
smo97391.setAttribute('id', 'smo97391');
smo97391.setFont('times', 12, 'normal');
smo97391.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo97390.addModifier(smo97391);
smo97391.addClass('lyric lyric-0 lyric-hyphen');
smo97407v0ar.push(smo97390);
smo97407v0.addTickables(smo97407v0ar)
fmtsmo9740766.joinVoices([smo97407v0]);
const fmtsmo10051666 = new VF.Formatter();
//
// voices and notes for stave 7 66
const smo100516v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100516v0ar = [];
const smo100488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo100488'] = smo100488;
smo100488.setAttribute('id', 'smo100488');
const smo100489 = new VF.Annotation('bun');
smo100489.setAttribute('id', 'smo100489');
smo100489.setFont('times', 12, 'normal');
smo100489.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo100488.addModifier(smo100489);
smo100489.addClass('lyric lyric-0');
smo100516v0ar.push(smo100488);
const smo100490 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo100490'] = smo100490;
smo100490.setAttribute('id', 'smo100490');
const smo100491 = new VF.Annotation('yi');
smo100491.setAttribute('id', 'smo100491');
smo100491.setFont('times', 12, 'normal');
smo100491.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo100490.addModifier(smo100491);
smo100491.addClass('lyric lyric-0 lyric-hyphen');
smo100516v0ar.push(smo100490);
const smo100492 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo100492'] = smo100492;
smo100492.setAttribute('id', 'smo100492');
const smo100493 = new VF.Annotation('ri');
smo100493.setAttribute('id', 'smo100493');
smo100493.setFont('times', 12, 'normal');
smo100493.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo100492.addModifier(smo100493);
smo100493.addClass('lyric lyric-0');
smo100516v0ar.push(smo100492);
const smo100494 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo100494'] = smo100494;
smo100494.setAttribute('id', 'smo100494');
const smo100495 = new VF.Annotation('bun');
smo100495.setAttribute('id', 'smo100495');
smo100495.setFont('times', 12, 'normal');
smo100495.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo100494.addModifier(smo100495);
smo100495.addClass('lyric lyric-0');
smo100516v0ar.push(smo100494);
const smo100496 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo100496'] = smo100496;
smo100496.setAttribute('id', 'smo100496');
const smo100497 = new VF.Annotation('Man');
smo100497.setAttribute('id', 'smo100497');
smo100497.setFont('times', 12, 'normal');
smo100497.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo100496.addModifier(smo100497);
smo100497.addClass('lyric lyric-0 lyric-hyphen');
smo100516v0ar.push(smo100496);
const smo100498 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo100498'] = smo100498;
smo100498.setAttribute('id', 'smo100498');
smo100516v0ar.push(smo100498);
const smo100499 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo100499'] = smo100499;
smo100499.setAttribute('id', 'smo100499');
const smo100500 = new VF.Annotation('ding');
smo100500.setAttribute('id', 'smo100500');
smo100500.setFont('times', 12, 'normal');
smo100500.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo100499.addModifier(smo100500);
smo100500.addClass('lyric lyric-0 lyric-hyphen');
smo100516v0ar.push(smo100499);
smo100516v0.addTickables(smo100516v0ar)
fmtsmo10051666.joinVoices([smo100516v0]);
const fmtsmo10360266 = new VF.Formatter();
//
// voices and notes for stave 8 66
const smo103602v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103602v0ar = [];
const smo103574 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo103574'] = smo103574;
smo103574.setAttribute('id', 'smo103574');
const smo103575 = new VF.Annotation('bun');
smo103575.setAttribute('id', 'smo103575');
smo103575.setFont('times', 12, 'normal');
smo103575.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo103574.addModifier(smo103575);
smo103575.addClass('lyric lyric-0');
smo103602v0ar.push(smo103574);
const smo103576 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo103576'] = smo103576;
smo103576.setAttribute('id', 'smo103576');
const smo103577 = new VF.Annotation('yi');
smo103577.setAttribute('id', 'smo103577');
smo103577.setFont('times', 12, 'normal');
smo103577.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo103576.addModifier(smo103577);
smo103577.addClass('lyric lyric-0 lyric-hyphen');
smo103602v0ar.push(smo103576);
const smo103578 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo103578'] = smo103578;
smo103578.setAttribute('id', 'smo103578');
const smo103579 = new VF.Annotation('ri');
smo103579.setAttribute('id', 'smo103579');
smo103579.setFont('times', 12, 'normal');
smo103579.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo103578.addModifier(smo103579);
smo103579.addClass('lyric lyric-0');
smo103602v0ar.push(smo103578);
const smo103580 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo103580'] = smo103580;
smo103580.setAttribute('id', 'smo103580');
const smo103581 = new VF.Annotation('bun');
smo103581.setAttribute('id', 'smo103581');
smo103581.setFont('times', 12, 'normal');
smo103581.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo103580.addModifier(smo103581);
smo103581.addClass('lyric lyric-0');
smo103602v0ar.push(smo103580);
const smo103582 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo103582'] = smo103582;
smo103582.setAttribute('id', 'smo103582');
const smo103583 = new VF.Annotation('Man');
smo103583.setAttribute('id', 'smo103583');
smo103583.setFont('times', 12, 'normal');
smo103583.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo103582.addModifier(smo103583);
smo103583.addClass('lyric lyric-0 lyric-hyphen');
smo103602v0ar.push(smo103582);
const smo103584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo103584'] = smo103584;
smo103584.setAttribute('id', 'smo103584');
smo103602v0ar.push(smo103584);
const smo103585 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo103585'] = smo103585;
smo103585.setAttribute('id', 'smo103585');
const smo103586 = new VF.Annotation('ding');
smo103586.setAttribute('id', 'smo103586');
smo103586.setFont('times', 12, 'normal');
smo103586.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo103585.addModifier(smo103586);
smo103586.addClass('lyric lyric-0 lyric-hyphen');
smo103602v0ar.push(smo103585);
smo103602v0.addTickables(smo103602v0ar)
fmtsmo10360266.joinVoices([smo103602v0]);
const fmtsmo10669166 = new VF.Formatter();
//
// voices and notes for stave 9 66
const smo106691v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo106691v0ar = [];
const smo106663 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo106663'] = smo106663;
smo106663.setAttribute('id', 'smo106663');
const smo106664 = new VF.Annotation('bun');
smo106664.setAttribute('id', 'smo106664');
smo106664.setFont('times', 12, 'normal');
smo106664.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo106663.addModifier(smo106664);
smo106664.addClass('lyric lyric-0');
smo106691v0ar.push(smo106663);
const smo106665 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo106665'] = smo106665;
smo106665.setAttribute('id', 'smo106665');
const smo106666 = new VF.Annotation('yi');
smo106666.setAttribute('id', 'smo106666');
smo106666.setFont('times', 12, 'normal');
smo106666.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo106665.addModifier(smo106666);
smo106666.addClass('lyric lyric-0 lyric-hyphen');
smo106691v0ar.push(smo106665);
const smo106667 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo106667'] = smo106667;
smo106667.setAttribute('id', 'smo106667');
const smo106668 = new VF.Annotation('ri');
smo106668.setAttribute('id', 'smo106668');
smo106668.setFont('times', 12, 'normal');
smo106668.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo106667.addModifier(smo106668);
smo106668.addClass('lyric lyric-0');
smo106691v0ar.push(smo106667);
const smo106669 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo106669'] = smo106669;
smo106669.setAttribute('id', 'smo106669');
const smo106670 = new VF.Annotation('bun');
smo106670.setAttribute('id', 'smo106670');
smo106670.setFont('times', 12, 'normal');
smo106670.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo106669.addModifier(smo106670);
smo106670.addClass('lyric lyric-0');
smo106691v0ar.push(smo106669);
const smo106671 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo106671'] = smo106671;
smo106671.setAttribute('id', 'smo106671');
const smo106672 = new VF.Annotation('Man');
smo106672.setAttribute('id', 'smo106672');
smo106672.setFont('times', 12, 'normal');
smo106672.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo106671.addModifier(smo106672);
smo106672.addClass('lyric lyric-0 lyric-hyphen');
smo106691v0ar.push(smo106671);
const smo106673 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo106673'] = smo106673;
smo106673.setAttribute('id', 'smo106673');
smo106691v0ar.push(smo106673);
const smo106674 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo106674'] = smo106674;
smo106674.setAttribute('id', 'smo106674');
const smo106675 = new VF.Annotation('ding');
smo106675.setAttribute('id', 'smo106675');
smo106675.setFont('times', 12, 'normal');
smo106675.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo106674.addModifier(smo106675);
smo106675.addClass('lyric lyric-0 lyric-hyphen');
smo106691v0ar.push(smo106674);
smo106691v0.addTickables(smo106691v0ar)
fmtsmo10669166.joinVoices([smo106691v0]);
const fmtsmo10973166 = new VF.Formatter();
//
// voices and notes for stave 10 66
const smo109731v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo109731v0ar = [];
const smo109703 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo109703'] = smo109703;
smo109703.setAttribute('id', 'smo109703');
const smo109704 = new VF.Annotation('bun');
smo109704.setAttribute('id', 'smo109704');
smo109704.setFont('times', 12, 'normal');
smo109704.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo109703.addModifier(smo109704);
smo109704.addClass('lyric lyric-0');
smo109731v0ar.push(smo109703);
const smo109705 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo109705'] = smo109705;
smo109705.setAttribute('id', 'smo109705');
const smo109706 = new VF.Annotation('yi');
smo109706.setAttribute('id', 'smo109706');
smo109706.setFont('times', 12, 'normal');
smo109706.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo109705.addModifier(smo109706);
smo109706.addClass('lyric lyric-0 lyric-hyphen');
smo109731v0ar.push(smo109705);
const smo109707 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo109707'] = smo109707;
smo109707.setAttribute('id', 'smo109707');
const smo109708 = new VF.Annotation('ri');
smo109708.setAttribute('id', 'smo109708');
smo109708.setFont('times', 12, 'normal');
smo109708.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo109707.addModifier(smo109708);
smo109708.addClass('lyric lyric-0');
smo109731v0ar.push(smo109707);
const smo109709 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo109709'] = smo109709;
smo109709.setAttribute('id', 'smo109709');
const smo109710 = new VF.Annotation('bun');
smo109710.setAttribute('id', 'smo109710');
smo109710.setFont('times', 12, 'normal');
smo109710.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo109709.addModifier(smo109710);
smo109710.addClass('lyric lyric-0');
smo109731v0ar.push(smo109709);
const smo109711 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo109711'] = smo109711;
smo109711.setAttribute('id', 'smo109711');
const smo109712 = new VF.Annotation('Man');
smo109712.setAttribute('id', 'smo109712');
smo109712.setFont('times', 12, 'normal');
smo109712.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo109711.addModifier(smo109712);
smo109712.addClass('lyric lyric-0 lyric-hyphen');
smo109731v0ar.push(smo109711);
const smo109713 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo109713'] = smo109713;
smo109713.setAttribute('id', 'smo109713');
smo109731v0ar.push(smo109713);
const smo109714 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo109714'] = smo109714;
smo109714.setAttribute('id', 'smo109714');
const smo109715 = new VF.Annotation('ding');
smo109715.setAttribute('id', 'smo109715');
smo109715.setFont('times', 12, 'normal');
smo109715.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo109714.addModifier(smo109715);
smo109715.addClass('lyric lyric-0 lyric-hyphen');
smo109731v0ar.push(smo109714);
smo109731v0.addTickables(smo109731v0ar)
fmtsmo10973166.joinVoices([smo109731v0]);
const fmtsmo11278566 = new VF.Formatter();
//
// voices and notes for stave 11 66
const smo112785v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo112785v0ar = [];
const smo112757 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo112757'] = smo112757;
smo112757.setAttribute('id', 'smo112757');
const smo112758 = new VF.Annotation('bun');
smo112758.setAttribute('id', 'smo112758');
smo112758.setFont('times', 12, 'normal');
smo112758.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo112757.addModifier(smo112758);
smo112758.addClass('lyric lyric-0');
smo112785v0ar.push(smo112757);
const smo112759 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo112759'] = smo112759;
smo112759.setAttribute('id', 'smo112759');
const smo112760 = new VF.Annotation('yi');
smo112760.setAttribute('id', 'smo112760');
smo112760.setFont('times', 12, 'normal');
smo112760.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo112759.addModifier(smo112760);
smo112760.addClass('lyric lyric-0 lyric-hyphen');
smo112785v0ar.push(smo112759);
const smo112761 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo112761'] = smo112761;
smo112761.setAttribute('id', 'smo112761');
const smo112762 = new VF.Annotation('ri');
smo112762.setAttribute('id', 'smo112762');
smo112762.setFont('times', 12, 'normal');
smo112762.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo112761.addModifier(smo112762);
smo112762.addClass('lyric lyric-0');
smo112785v0ar.push(smo112761);
const smo112763 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo112763'] = smo112763;
smo112763.setAttribute('id', 'smo112763');
const smo112764 = new VF.Annotation('bun');
smo112764.setAttribute('id', 'smo112764');
smo112764.setFont('times', 12, 'normal');
smo112764.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo112763.addModifier(smo112764);
smo112764.addClass('lyric lyric-0');
smo112785v0ar.push(smo112763);
const smo112765 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo112765'] = smo112765;
smo112765.setAttribute('id', 'smo112765');
const smo112766 = new VF.Annotation('Man');
smo112766.setAttribute('id', 'smo112766');
smo112766.setFont('times', 12, 'normal');
smo112766.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo112765.addModifier(smo112766);
smo112766.addClass('lyric lyric-0 lyric-hyphen');
smo112785v0ar.push(smo112765);
const smo112767 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo112767'] = smo112767;
smo112767.setAttribute('id', 'smo112767');
smo112785v0ar.push(smo112767);
const smo112768 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo112768'] = smo112768;
smo112768.setAttribute('id', 'smo112768');
const smo112769 = new VF.Annotation('ding');
smo112769.setAttribute('id', 'smo112769');
smo112769.setFont('times', 12, 'normal');
smo112769.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo112768.addModifier(smo112769);
smo112769.addClass('lyric lyric-0 lyric-hyphen');
smo112785v0ar.push(smo112768);
smo112785v0.addTickables(smo112785v0ar)
fmtsmo11278566.joinVoices([smo112785v0]);
const fmtsmo11582866 = new VF.Formatter();
//
// voices and notes for stave 12 66
const smo115828v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo115828v0ar = [];
const smo115800 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo115800'] = smo115800;
smo115800.setAttribute('id', 'smo115800');
const smo115801 = new VF.Annotation('bun');
smo115801.setAttribute('id', 'smo115801');
smo115801.setFont('times', 12, 'normal');
smo115801.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo115800.addModifier(smo115801);
smo115801.addClass('lyric lyric-0');
smo115828v0ar.push(smo115800);
const smo115802 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo115802'] = smo115802;
smo115802.setAttribute('id', 'smo115802');
const smo115803 = new VF.Annotation('yi');
smo115803.setAttribute('id', 'smo115803');
smo115803.setFont('times', 12, 'normal');
smo115803.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo115802.addModifier(smo115803);
smo115803.addClass('lyric lyric-0 lyric-hyphen');
smo115828v0ar.push(smo115802);
const smo115804 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo115804'] = smo115804;
smo115804.setAttribute('id', 'smo115804');
const smo115805 = new VF.Annotation('ri');
smo115805.setAttribute('id', 'smo115805');
smo115805.setFont('times', 12, 'normal');
smo115805.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo115804.addModifier(smo115805);
smo115805.addClass('lyric lyric-0');
smo115828v0ar.push(smo115804);
const smo115806 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo115806'] = smo115806;
smo115806.setAttribute('id', 'smo115806');
const smo115807 = new VF.Annotation('bun');
smo115807.setAttribute('id', 'smo115807');
smo115807.setFont('times', 12, 'normal');
smo115807.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo115806.addModifier(smo115807);
smo115807.addClass('lyric lyric-0');
smo115828v0ar.push(smo115806);
const smo115808 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo115808'] = smo115808;
smo115808.setAttribute('id', 'smo115808');
const smo115809 = new VF.Annotation('Man');
smo115809.setAttribute('id', 'smo115809');
smo115809.setFont('times', 12, 'normal');
smo115809.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo115808.addModifier(smo115809);
smo115809.addClass('lyric lyric-0 lyric-hyphen');
smo115828v0ar.push(smo115808);
const smo115810 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo115810'] = smo115810;
smo115810.setAttribute('id', 'smo115810');
smo115828v0ar.push(smo115810);
const smo115811 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo115811'] = smo115811;
smo115811.setAttribute('id', 'smo115811');
const smo115812 = new VF.Annotation('ding');
smo115812.setAttribute('id', 'smo115812');
smo115812.setFont('times', 12, 'normal');
smo115812.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo115811.addModifier(smo115812);
smo115812.addClass('lyric lyric-0 lyric-hyphen');
smo115828v0ar.push(smo115811);
smo115828v0.addTickables(smo115828v0ar)
fmtsmo11582866.joinVoices([smo115828v0]);
const fmtsmo11902766 = new VF.Formatter();
//
// voices and notes for stave 13 66
const smo119027v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo119027v0ar = [];
const smo119006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
noteHash['smo119006'] = smo119006;
smo119006.setAttribute('id', 'smo119006');
const smo1190060acc = new VF.Accidental('#');
smo119006.addModifier(smo1190060acc, 0);
smo119006.addModifier(new VF.Dot(), 0);
smo119006.addModifier(new VF.Dot(), 1);
smo119006.addModifier(new VF.Dot(), 2);
smo119027v0ar.push(smo119006);
const smo119007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo119007'] = smo119007;
smo119007.setAttribute('id', 'smo119007');
smo119027v0ar.push(smo119007);
const smo119008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo119008'] = smo119008;
smo119008.setAttribute('id', 'smo119008');
smo119027v0ar.push(smo119008);
const smo119009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
noteHash['smo119009'] = smo119009;
smo119009.setAttribute('id', 'smo119009');
const smo1190092acc = new VF.Accidental('b');
smo119009.addModifier(smo1190092acc, 2);
smo119027v0ar.push(smo119009);
const smo119010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
noteHash['smo119010'] = smo119010;
smo119010.setAttribute('id', 'smo119010');
smo119027v0ar.push(smo119010);
const smo119011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
noteHash['smo119011'] = smo119011;
smo119011.setAttribute('id', 'smo119011');
smo119027v0ar.push(smo119011);
smo119027v0.addTickables(smo119027v0ar)
fmtsmo11902766.joinVoices([smo119027v0]);
const fmtsmo12224066 = new VF.Formatter();
//
// voices and notes for stave 14 66
const smo122240v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo122240v0ar = [];
const smo122219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
noteHash['smo122219'] = smo122219;
smo122219.setAttribute('id', 'smo122219');
const smo1222190acc = new VF.Accidental('#');
smo122219.addModifier(smo1222190acc, 0);
smo122219.addModifier(new VF.Dot(), 0);
smo122219.addModifier(new VF.Dot(), 1);
smo122219.addModifier(new VF.Dot(), 2);
smo122240v0ar.push(smo122219);
const smo122220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo122220'] = smo122220;
smo122220.setAttribute('id', 'smo122220');
smo122240v0ar.push(smo122220);
const smo122221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo122221'] = smo122221;
smo122221.setAttribute('id', 'smo122221');
smo122240v0ar.push(smo122221);
const smo122222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
noteHash['smo122222'] = smo122222;
smo122222.setAttribute('id', 'smo122222');
const smo1222222acc = new VF.Accidental('b');
smo122222.addModifier(smo1222222acc, 2);
smo122240v0ar.push(smo122222);
const smo122223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
noteHash['smo122223'] = smo122223;
smo122223.setAttribute('id', 'smo122223');
smo122240v0ar.push(smo122223);
const smo122224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
noteHash['smo122224'] = smo122224;
smo122224.setAttribute('id', 'smo122224');
smo122240v0ar.push(smo122224);
smo122240v0.addTickables(smo122240v0ar)
fmtsmo12224066.joinVoices([smo122240v0]);
const fmtsmo12543566 = new VF.Formatter();
//
// voices and notes for stave 15 66
const smo125435v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo125435v0ar = [];
const smo125414 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo125414'] = smo125414;
smo125414.setAttribute('id', 'smo125414');
const smo1254140acc = new VF.Accidental('#');
smo125414.addModifier(smo1254140acc, 0);
smo125414.addModifier(new VF.Dot(), 0);
smo125435v0ar.push(smo125414);
const smo125415 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo125415'] = smo125415;
smo125415.setAttribute('id', 'smo125415');
smo125435v0ar.push(smo125415);
const smo125416 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo125416'] = smo125416;
smo125416.setAttribute('id', 'smo125416');
smo125435v0ar.push(smo125416);
const smo125417 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo125417'] = smo125417;
smo125417.setAttribute('id', 'smo125417');
smo125435v0ar.push(smo125417);
const smo125418 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo125418'] = smo125418;
smo125418.setAttribute('id', 'smo125418');
smo125435v0ar.push(smo125418);
const smo125419 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo125419'] = smo125419;
smo125419.setAttribute('id', 'smo125419');
smo125435v0ar.push(smo125419);
smo125435v0.addTickables(smo125435v0ar)
fmtsmo12543566.joinVoices([smo125435v0]);
const fmtsmo12855066 = new VF.Formatter();
//
// voices and notes for stave 16 66
const smo128550v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo128550v0ar = [];
const smo128531 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo128531'] = smo128531;
smo128531.setAttribute('id', 'smo128531');
smo128531.addModifier(new VF.Dot(), 0);
smo128550v0ar.push(smo128531);
const smo128532 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n"]}'))
noteHash['smo128532'] = smo128532;
smo128532.setAttribute('id', 'smo128532');
const smo1285320acc = new VF.Accidental('b');
smo128532.addModifier(smo1285320acc, 0);
smo128550v0ar.push(smo128532);
const smo128533 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n"]}'))
noteHash['smo128533'] = smo128533;
smo128533.setAttribute('id', 'smo128533');
smo128550v0ar.push(smo128533);
const smo128534 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo128534'] = smo128534;
smo128534.setAttribute('id', 'smo128534');
smo128550v0ar.push(smo128534);
smo128550v0.addTickables(smo128550v0ar)
fmtsmo12855066.joinVoices([smo128550v0]);
const fmtsmo13174966 = new VF.Formatter();
//
// voices and notes for stave 17 66
const smo131749v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo131749v0ar = [];
const smo131720 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo131720'] = smo131720;
smo131720.setAttribute('id', 'smo131720');
smo131720.setStyle({ fillStyle: '#aaaaaa7f' });
const smo1317200acc = new VF.Accidental('n');
smo131720.addModifier(smo1317200acc, 0);
const smo131721 = new VF.Annotation('bun');
smo131721.setAttribute('id', 'smo131721');
smo131721.setFont('times', 12, 'normal');
smo131721.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo131720.addModifier(smo131721);
smo131721.addClass('lyric lyric-0');
smo131749v0ar.push(smo131720);
const smo131722 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo131722'] = smo131722;
smo131722.setAttribute('id', 'smo131722');
smo131722.setStyle({ fillStyle: '#aaaaaa7f' });
const smo131723 = new VF.Annotation('yi');
smo131723.setAttribute('id', 'smo131723');
smo131723.setFont('times', 12, 'normal');
smo131723.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo131722.addModifier(smo131723);
smo131723.addClass('lyric lyric-0 lyric-hyphen');
smo131749v0ar.push(smo131722);
const smo131724 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo131724'] = smo131724;
smo131724.setAttribute('id', 'smo131724');
smo131724.setStyle({ fillStyle: '#aaaaaa7f' });
const smo131725 = new VF.Annotation('ri');
smo131725.setAttribute('id', 'smo131725');
smo131725.setFont('times', 12, 'normal');
smo131725.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo131724.addModifier(smo131725);
smo131725.addClass('lyric lyric-0');
smo131749v0ar.push(smo131724);
const smo131726 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo131726'] = smo131726;
smo131726.setAttribute('id', 'smo131726');
smo131726.setStyle({ fillStyle: '#aaaaaa7f' });
const smo131727 = new VF.Annotation('bun');
smo131727.setAttribute('id', 'smo131727');
smo131727.setFont('times', 12, 'normal');
smo131727.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo131726.addModifier(smo131727);
smo131727.addClass('lyric lyric-0');
smo131749v0ar.push(smo131726);
const smo131728 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo131728'] = smo131728;
smo131728.setAttribute('id', 'smo131728');
smo131728.setStyle({ fillStyle: '#aaaaaa7f' });
const smo131729 = new VF.Annotation('Man');
smo131729.setAttribute('id', 'smo131729');
smo131729.setFont('times', 12, 'normal');
smo131729.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo131728.addModifier(smo131729);
smo131729.addClass('lyric lyric-0 lyric-hyphen');
smo131749v0ar.push(smo131728);
const smo131730 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo131730'] = smo131730;
smo131730.setAttribute('id', 'smo131730');
smo131730.setStyle({ fillStyle: '#aaaaaa7f' });
smo131749v0ar.push(smo131730);
const smo131731 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo131731'] = smo131731;
smo131731.setAttribute('id', 'smo131731');
smo131731.setStyle({ fillStyle: '#aaaaaa7f' });
const smo131732 = new VF.Annotation('ding');
smo131732.setAttribute('id', 'smo131732');
smo131732.setFont('times', 12, 'normal');
smo131732.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo131731.addModifier(smo131732);
smo131732.addClass('lyric lyric-0 lyric-hyphen');
smo131749v0ar.push(smo131731);
smo131749v0.addTickables(smo131749v0ar)
fmtsmo13174966.joinVoices([smo131749v0]);
const smo131749v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo131749v1ar = [];
const smo131733 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo131733'] = smo131733;
smo131733.setAttribute('id', 'smo131733');
smo131733.setStyle({ fillStyle: "#115511" });
smo131749v1ar.push(smo131733);
smo131749v1.addTickables(smo131749v1ar)
fmtsmo13174966.joinVoices([smo131749v1]);
// create beam groups and tuplets for format grp smo133472 before formatting
const dirsmo224913 = smo78890.getStemDirection();
smo78890.setStemDirection(dirsmo224913);
smo78892.setStemDirection(dirsmo224913);
const smo224913 = new VF.Beam([smo78890,smo78892]);
const dirsmo224914 = smo78894.getStemDirection();
smo78894.setStemDirection(dirsmo224914);
smo78896.setStemDirection(dirsmo224914);
smo78898.setStemDirection(dirsmo224914);
smo78899.setStemDirection(dirsmo224914);
const smo224914 = new VF.Beam([smo78894,smo78896,smo78898,smo78899]);
const dirsmo224917 = smo81884.getStemDirection();
smo81884.setStemDirection(dirsmo224917);
smo81886.setStemDirection(dirsmo224917);
const smo224917 = new VF.Beam([smo81884,smo81886]);
const dirsmo224918 = smo81888.getStemDirection();
smo81888.setStemDirection(dirsmo224918);
smo81890.setStemDirection(dirsmo224918);
smo81892.setStemDirection(dirsmo224918);
smo81893.setStemDirection(dirsmo224918);
const smo224918 = new VF.Beam([smo81888,smo81890,smo81892,smo81893]);
const dirsmo224921 = smo85027.getStemDirection();
smo85027.setStemDirection(dirsmo224921);
smo85029.setStemDirection(dirsmo224921);
const smo224921 = new VF.Beam([smo85027,smo85029]);
const dirsmo224922 = smo85031.getStemDirection();
smo85031.setStemDirection(dirsmo224922);
smo85033.setStemDirection(dirsmo224922);
smo85035.setStemDirection(dirsmo224922);
smo85036.setStemDirection(dirsmo224922);
const smo224922 = new VF.Beam([smo85031,smo85033,smo85035,smo85036]);
const dirsmo224925 = smo88143.getStemDirection();
smo88143.setStemDirection(dirsmo224925);
smo88145.setStemDirection(dirsmo224925);
const smo224925 = new VF.Beam([smo88143,smo88145]);
const dirsmo224926 = smo88147.getStemDirection();
smo88147.setStemDirection(dirsmo224926);
smo88149.setStemDirection(dirsmo224926);
smo88151.setStemDirection(dirsmo224926);
smo88152.setStemDirection(dirsmo224926);
const smo224926 = new VF.Beam([smo88147,smo88149,smo88151,smo88152]);
const dirsmo224929 = smo91162.getStemDirection();
smo91162.setStemDirection(dirsmo224929);
smo91164.setStemDirection(dirsmo224929);
const smo224929 = new VF.Beam([smo91162,smo91164]);
const dirsmo224930 = smo91166.getStemDirection();
smo91166.setStemDirection(dirsmo224930);
smo91168.setStemDirection(dirsmo224930);
smo91170.setStemDirection(dirsmo224930);
smo91171.setStemDirection(dirsmo224930);
const smo224930 = new VF.Beam([smo91166,smo91168,smo91170,smo91171]);
 
// formatting measures in staff group smo133472
fmtsmo7891666.format([smo78916v0,smo81910v0,smo85053v0,smo88169v0,smo91188v0], 311);
const stavesmo78916 = new VF.Stave(1110, 210, 325);
stavesmo78916.setAttribute('id', 'stavesmo78916');
stavesmo78916.setBegBarType(VF.Barline.type.NONE);
stavesmo78916.setContext(context);
stavesmo78916.draw();
smo78916v0.draw(context, stavesmo78916);
smo224913.setContext(context);
smo224913.draw();
smo224914.setContext(context);
smo224914.draw();
const stavesmo81910 = new VF.Stave(1110, 316, 325);
stavesmo81910.setAttribute('id', 'stavesmo81910');
stavesmo81910.setBegBarType(VF.Barline.type.NONE);
stavesmo81910.setContext(context);
stavesmo81910.draw();
smo81910v0.draw(context, stavesmo81910);
smo224917.setContext(context);
smo224917.draw();
smo224918.setContext(context);
smo224918.draw();
const stavesmo85053 = new VF.Stave(1110, 437, 325);
stavesmo85053.setAttribute('id', 'stavesmo85053');
stavesmo85053.setBegBarType(VF.Barline.type.NONE);
stavesmo85053.setContext(context);
stavesmo85053.draw();
smo85053v0.draw(context, stavesmo85053);
smo224921.setContext(context);
smo224921.draw();
smo224922.setContext(context);
smo224922.draw();
const stavesmo88169 = new VF.Stave(1110, 553, 325);
stavesmo88169.setAttribute('id', 'stavesmo88169');
stavesmo88169.setBegBarType(VF.Barline.type.NONE);
stavesmo88169.setContext(context);
stavesmo88169.draw();
smo88169v0.draw(context, stavesmo88169);
smo224925.setContext(context);
smo224925.draw();
smo224926.setContext(context);
smo224926.draw();
const stavesmo91188 = new VF.Stave(1110, 659, 325);
stavesmo91188.setAttribute('id', 'stavesmo91188');
stavesmo91188.setBegBarType(VF.Barline.type.NONE);
stavesmo91188.setContext(context);
stavesmo91188.draw();
smo91188v0.draw(context, stavesmo91188);
smo224929.setContext(context);
smo224929.draw();
smo224930.setContext(context);
smo224930.draw();
// create beam groups and tuplets for format grp smo133474 before formatting
const dirsmo224933 = smo94269.getStemDirection();
smo94269.setStemDirection(dirsmo224933);
smo94271.setStemDirection(dirsmo224933);
const smo224933 = new VF.Beam([smo94269,smo94271]);
const dirsmo224934 = smo94273.getStemDirection();
smo94273.setStemDirection(dirsmo224934);
smo94275.setStemDirection(dirsmo224934);
smo94277.setStemDirection(dirsmo224934);
smo94278.setStemDirection(dirsmo224934);
const smo224934 = new VF.Beam([smo94273,smo94275,smo94277,smo94278]);
const dirsmo224937 = smo97381.getStemDirection();
smo97381.setStemDirection(dirsmo224937);
smo97383.setStemDirection(dirsmo224937);
const smo224937 = new VF.Beam([smo97381,smo97383]);
const dirsmo224938 = smo97385.getStemDirection();
smo97385.setStemDirection(dirsmo224938);
smo97387.setStemDirection(dirsmo224938);
smo97389.setStemDirection(dirsmo224938);
smo97390.setStemDirection(dirsmo224938);
const smo224938 = new VF.Beam([smo97385,smo97387,smo97389,smo97390]);
const dirsmo224941 = smo100490.getStemDirection();
smo100490.setStemDirection(dirsmo224941);
smo100492.setStemDirection(dirsmo224941);
const smo224941 = new VF.Beam([smo100490,smo100492]);
const dirsmo224942 = smo100494.getStemDirection();
smo100494.setStemDirection(dirsmo224942);
smo100496.setStemDirection(dirsmo224942);
smo100498.setStemDirection(dirsmo224942);
smo100499.setStemDirection(dirsmo224942);
const smo224942 = new VF.Beam([smo100494,smo100496,smo100498,smo100499]);
const dirsmo224945 = smo103576.getStemDirection();
smo103576.setStemDirection(dirsmo224945);
smo103578.setStemDirection(dirsmo224945);
const smo224945 = new VF.Beam([smo103576,smo103578]);
const dirsmo224946 = smo103580.getStemDirection();
smo103580.setStemDirection(dirsmo224946);
smo103582.setStemDirection(dirsmo224946);
smo103584.setStemDirection(dirsmo224946);
smo103585.setStemDirection(dirsmo224946);
const smo224946 = new VF.Beam([smo103580,smo103582,smo103584,smo103585]);
 
// formatting measures in staff group smo133474
fmtsmo9429566.format([smo94295v0,smo97407v0,smo100516v0,smo103602v0], 311);
const stavesmo94295 = new VF.Stave(1110, 780, 325);
stavesmo94295.setAttribute('id', 'stavesmo94295');
stavesmo94295.setBegBarType(VF.Barline.type.NONE);
stavesmo94295.setContext(context);
stavesmo94295.draw();
smo94295v0.draw(context, stavesmo94295);
smo224933.setContext(context);
smo224933.draw();
smo224934.setContext(context);
smo224934.draw();
const stavesmo97407 = new VF.Stave(1110, 896, 325);
stavesmo97407.setAttribute('id', 'stavesmo97407');
stavesmo97407.setBegBarType(VF.Barline.type.NONE);
stavesmo97407.setContext(context);
stavesmo97407.draw();
smo97407v0.draw(context, stavesmo97407);
smo224937.setContext(context);
smo224937.draw();
smo224938.setContext(context);
smo224938.draw();
const stavesmo100516 = new VF.Stave(1110, 1012, 325);
stavesmo100516.setAttribute('id', 'stavesmo100516');
stavesmo100516.setBegBarType(VF.Barline.type.NONE);
stavesmo100516.setContext(context);
stavesmo100516.draw();
smo100516v0.draw(context, stavesmo100516);
smo224941.setContext(context);
smo224941.draw();
smo224942.setContext(context);
smo224942.draw();
const stavesmo103602 = new VF.Stave(1110, 1128, 325);
stavesmo103602.setAttribute('id', 'stavesmo103602');
stavesmo103602.setBegBarType(VF.Barline.type.NONE);
stavesmo103602.setContext(context);
stavesmo103602.draw();
smo103602v0.draw(context, stavesmo103602);
smo224945.setContext(context);
smo224945.draw();
smo224946.setContext(context);
smo224946.draw();
// create beam groups and tuplets for format grp smo133476 before formatting
const dirsmo224949 = smo106665.getStemDirection();
smo106665.setStemDirection(dirsmo224949);
smo106667.setStemDirection(dirsmo224949);
const smo224949 = new VF.Beam([smo106665,smo106667]);
const dirsmo224950 = smo106669.getStemDirection();
smo106669.setStemDirection(dirsmo224950);
smo106671.setStemDirection(dirsmo224950);
smo106673.setStemDirection(dirsmo224950);
smo106674.setStemDirection(dirsmo224950);
const smo224950 = new VF.Beam([smo106669,smo106671,smo106673,smo106674]);
const dirsmo224953 = smo109705.getStemDirection();
smo109705.setStemDirection(dirsmo224953);
smo109707.setStemDirection(dirsmo224953);
const smo224953 = new VF.Beam([smo109705,smo109707]);
const dirsmo224954 = smo109709.getStemDirection();
smo109709.setStemDirection(dirsmo224954);
smo109711.setStemDirection(dirsmo224954);
smo109713.setStemDirection(dirsmo224954);
smo109714.setStemDirection(dirsmo224954);
const smo224954 = new VF.Beam([smo109709,smo109711,smo109713,smo109714]);
const dirsmo224957 = smo112759.getStemDirection();
smo112759.setStemDirection(dirsmo224957);
smo112761.setStemDirection(dirsmo224957);
const smo224957 = new VF.Beam([smo112759,smo112761]);
const dirsmo224958 = smo112763.getStemDirection();
smo112763.setStemDirection(dirsmo224958);
smo112765.setStemDirection(dirsmo224958);
smo112767.setStemDirection(dirsmo224958);
smo112768.setStemDirection(dirsmo224958);
const smo224958 = new VF.Beam([smo112763,smo112765,smo112767,smo112768]);
const dirsmo224961 = smo115802.getStemDirection();
smo115802.setStemDirection(dirsmo224961);
smo115804.setStemDirection(dirsmo224961);
const smo224961 = new VF.Beam([smo115802,smo115804]);
const dirsmo224962 = smo115806.getStemDirection();
smo115806.setStemDirection(dirsmo224962);
smo115808.setStemDirection(dirsmo224962);
smo115810.setStemDirection(dirsmo224962);
smo115811.setStemDirection(dirsmo224962);
const smo224962 = new VF.Beam([smo115806,smo115808,smo115810,smo115811]);
 
// formatting measures in staff group smo133476
fmtsmo10669166.format([smo106691v0,smo109731v0,smo112785v0,smo115828v0], 311);
const stavesmo106691 = new VF.Stave(1110, 1264, 325);
stavesmo106691.setAttribute('id', 'stavesmo106691');
stavesmo106691.setBegBarType(VF.Barline.type.NONE);
stavesmo106691.setContext(context);
stavesmo106691.draw();
smo106691v0.draw(context, stavesmo106691);
smo224949.setContext(context);
smo224949.draw();
smo224950.setContext(context);
smo224950.draw();
const stavesmo109731 = new VF.Stave(1110, 1400, 325);
stavesmo109731.setAttribute('id', 'stavesmo109731');
stavesmo109731.setBegBarType(VF.Barline.type.NONE);
stavesmo109731.setContext(context);
stavesmo109731.draw();
smo109731v0.draw(context, stavesmo109731);
smo224953.setContext(context);
smo224953.draw();
smo224954.setContext(context);
smo224954.draw();
const stavesmo112785 = new VF.Stave(1110, 1536, 325);
stavesmo112785.setAttribute('id', 'stavesmo112785');
stavesmo112785.setBegBarType(VF.Barline.type.NONE);
stavesmo112785.setContext(context);
stavesmo112785.draw();
smo112785v0.draw(context, stavesmo112785);
smo224957.setContext(context);
smo224957.draw();
smo224958.setContext(context);
smo224958.draw();
const stavesmo115828 = new VF.Stave(1110, 1672, 325);
stavesmo115828.setAttribute('id', 'stavesmo115828');
stavesmo115828.setBegBarType(VF.Barline.type.NONE);
stavesmo115828.setContext(context);
stavesmo115828.draw();
smo115828v0.draw(context, stavesmo115828);
smo224961.setContext(context);
smo224961.draw();
smo224962.setContext(context);
smo224962.draw();
// create beam groups and tuplets for format grp smo120795 before formatting
const dirsmo224965 = smo119007.getStemDirection();
smo119007.setStemDirection(dirsmo224965);
smo119008.setStemDirection(dirsmo224965);
smo119009.setStemDirection(dirsmo224965);
smo119010.setStemDirection(dirsmo224965);
const smo224965 = new VF.Beam([smo119007,smo119008,smo119009,smo119010]);
 
// formatting measures in staff group smo120795
fmtsmo11902766.format([smo119027v0], 311);
const stavesmo119027 = new VF.Stave(1110, 1818, 325);
stavesmo119027.setAttribute('id', 'stavesmo119027');
stavesmo119027.setBegBarType(VF.Barline.type.NONE);
stavesmo119027.setContext(context);
stavesmo119027.draw();
smo119027v0.draw(context, stavesmo119027);
smo224965.setContext(context);
smo224965.draw();
// create beam groups and tuplets for format grp smo133470 before formatting
const dirsmo224968 = smo122220.getStemDirection();
smo122220.setStemDirection(dirsmo224968);
smo122221.setStemDirection(dirsmo224968);
smo122222.setStemDirection(dirsmo224968);
smo122223.setStemDirection(dirsmo224968);
const smo224968 = new VF.Beam([smo122220,smo122221,smo122222,smo122223]);
const dirsmo224971 = smo125415.getStemDirection();
smo125415.setStemDirection(dirsmo224971);
smo125416.setStemDirection(dirsmo224971);
smo125417.setStemDirection(dirsmo224971);
smo125418.setStemDirection(dirsmo224971);
const smo224971 = new VF.Beam([smo125415,smo125416,smo125417,smo125418]);
 
// formatting measures in staff group smo133470
fmtsmo12224066.format([smo122240v0,smo125435v0], 311);
const stavesmo122240 = new VF.Stave(1110, 1924, 325);
stavesmo122240.setAttribute('id', 'stavesmo122240');
stavesmo122240.setBegBarType(VF.Barline.type.NONE);
stavesmo122240.setContext(context);
stavesmo122240.draw();
smo122240v0.draw(context, stavesmo122240);
smo224968.setContext(context);
smo224968.draw();
const stavesmo125435 = new VF.Stave(1110, 2010, 325);
stavesmo125435.setAttribute('id', 'stavesmo125435');
stavesmo125435.setBegBarType(VF.Barline.type.NONE);
stavesmo125435.setContext(context);
stavesmo125435.draw();
smo125435v0.draw(context, stavesmo125435);
smo224971.setContext(context);
smo224971.draw();
// create beam groups and tuplets for format grp smo130308 before formatting
 
// formatting measures in staff group smo130308
fmtsmo12855066.format([smo128550v0], 311);
const stavesmo128550 = new VF.Stave(1110, 2081, 325);
stavesmo128550.setAttribute('id', 'stavesmo128550');
stavesmo128550.setBegBarType(VF.Barline.type.NONE);
stavesmo128550.setContext(context);
stavesmo128550.draw();
smo128550v0.draw(context, stavesmo128550);
// create beam groups and tuplets for format grp smo133464 before formatting
const dirsmo224976 = smo131722.getStemDirection();
smo131722.setStemDirection(dirsmo224976);
smo131724.setStemDirection(dirsmo224976);
const smo224976 = new VF.Beam([smo131722,smo131724]);
const dirsmo224977 = smo131726.getStemDirection();
smo131726.setStemDirection(dirsmo224977);
smo131728.setStemDirection(dirsmo224977);
smo131730.setStemDirection(dirsmo224977);
smo131731.setStemDirection(dirsmo224977);
const smo224977 = new VF.Beam([smo131726,smo131728,smo131730,smo131731]);
 
// formatting measures in staff group smo133464
fmtsmo13174966.format([smo131749v0,smo131749v1], 311);
const stavesmo131749 = new VF.Stave(1110, 2152, 325);
stavesmo131749.setAttribute('id', 'stavesmo131749');
stavesmo131749.setBegBarType(VF.Barline.type.NONE);
stavesmo131749.setContext(context);
stavesmo131749.draw();
smo131749v0.draw(context, stavesmo131749);
smo131749v1.draw(context, stavesmo131749);
smo224976.setContext(context);
smo224976.draw();
smo224977.setContext(context);
smo224977.draw();
const fmtsmo7893867 = new VF.Formatter();
//
// voices and notes for stave 0 67
const smo78938v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78938v0ar = [];
const smo78917 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo78917'] = smo78917;
smo78917.setAttribute('id', 'smo78917');
smo78938v0ar.push(smo78917);
const smo78918 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo78918'] = smo78918;
smo78918.setAttribute('id', 'smo78918');
const smo78919 = new VF.Annotation('a');
smo78919.setAttribute('id', 'smo78919');
smo78919.setFont('times', 12, 'normal');
smo78919.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo78918.addModifier(smo78919);
smo78919.addClass('lyric lyric-0');
smo78938v0ar.push(smo78918);
const smo78920 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo78920'] = smo78920;
smo78920.setAttribute('id', 'smo78920');
smo78938v0ar.push(smo78920);
const smo78921 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo78921'] = smo78921;
smo78921.setAttribute('id', 'smo78921');
smo78938v0ar.push(smo78921);
const smo78922 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo78922'] = smo78922;
smo78922.setAttribute('id', 'smo78922');
smo78938v0ar.push(smo78922);
smo78938v0.addTickables(smo78938v0ar)
fmtsmo7893867.joinVoices([smo78938v0]);
const fmtsmo8193167 = new VF.Formatter();
//
// voices and notes for stave 1 67
const smo81931v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81931v0ar = [];
const smo81911 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo81911'] = smo81911;
smo81911.setAttribute('id', 'smo81911');
smo81931v0ar.push(smo81911);
const smo81912 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo81912'] = smo81912;
smo81912.setAttribute('id', 'smo81912');
const smo81913 = new VF.Annotation('a');
smo81913.setAttribute('id', 'smo81913');
smo81913.setFont('times', 12, 'normal');
smo81913.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo81912.addModifier(smo81913);
smo81913.addClass('lyric lyric-0');
smo81931v0ar.push(smo81912);
const smo81914 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo81914'] = smo81914;
smo81914.setAttribute('id', 'smo81914');
smo81931v0ar.push(smo81914);
const smo81915 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo81915'] = smo81915;
smo81915.setAttribute('id', 'smo81915');
smo81931v0ar.push(smo81915);
smo81931v0.addTickables(smo81931v0ar)
fmtsmo8193167.joinVoices([smo81931v0]);
const fmtsmo8507567 = new VF.Formatter();
//
// voices and notes for stave 2 67
const smo85075v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo85075v0ar = [];
const smo85054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo85054'] = smo85054;
smo85054.setAttribute('id', 'smo85054');
smo85075v0ar.push(smo85054);
const smo85055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo85055'] = smo85055;
smo85055.setAttribute('id', 'smo85055');
const smo85056 = new VF.Annotation('a');
smo85056.setAttribute('id', 'smo85056');
smo85056.setFont('times', 12, 'normal');
smo85056.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo85055.addModifier(smo85056);
smo85056.addClass('lyric lyric-0');
smo85075v0ar.push(smo85055);
const smo85057 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo85057'] = smo85057;
smo85057.setAttribute('id', 'smo85057');
smo85075v0ar.push(smo85057);
const smo85058 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo85058'] = smo85058;
smo85058.setAttribute('id', 'smo85058');
smo85075v0ar.push(smo85058);
const smo85059 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo85059'] = smo85059;
smo85059.setAttribute('id', 'smo85059');
smo85075v0ar.push(smo85059);
smo85075v0.addTickables(smo85075v0ar)
fmtsmo8507567.joinVoices([smo85075v0]);
const fmtsmo8819167 = new VF.Formatter();
//
// voices and notes for stave 3 67
const smo88191v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo88191v0ar = [];
const smo88170 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo88170'] = smo88170;
smo88170.setAttribute('id', 'smo88170');
smo88191v0ar.push(smo88170);
const smo88171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo88171'] = smo88171;
smo88171.setAttribute('id', 'smo88171');
const smo88172 = new VF.Annotation('a');
smo88172.setAttribute('id', 'smo88172');
smo88172.setFont('times', 12, 'normal');
smo88172.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo88171.addModifier(smo88172);
smo88172.addClass('lyric lyric-0');
smo88191v0ar.push(smo88171);
const smo88173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo88173'] = smo88173;
smo88173.setAttribute('id', 'smo88173');
smo88191v0ar.push(smo88173);
const smo88174 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo88174'] = smo88174;
smo88174.setAttribute('id', 'smo88174');
smo88191v0ar.push(smo88174);
const smo88175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo88175'] = smo88175;
smo88175.setAttribute('id', 'smo88175');
smo88191v0ar.push(smo88175);
smo88191v0.addTickables(smo88191v0ar)
fmtsmo8819167.joinVoices([smo88191v0]);
const fmtsmo9121067 = new VF.Formatter();
//
// voices and notes for stave 4 67
const smo91210v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo91210v0ar = [];
const smo91189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo91189'] = smo91189;
smo91189.setAttribute('id', 'smo91189');
smo91210v0ar.push(smo91189);
const smo91190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo91190'] = smo91190;
smo91190.setAttribute('id', 'smo91190');
const smo91191 = new VF.Annotation('a');
smo91191.setAttribute('id', 'smo91191');
smo91191.setFont('times', 12, 'normal');
smo91191.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo91190.addModifier(smo91191);
smo91191.addClass('lyric lyric-0');
smo91210v0ar.push(smo91190);
const smo91192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo91192'] = smo91192;
smo91192.setAttribute('id', 'smo91192');
smo91210v0ar.push(smo91192);
const smo91193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo91193'] = smo91193;
smo91193.setAttribute('id', 'smo91193');
smo91210v0ar.push(smo91193);
const smo91194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo91194'] = smo91194;
smo91194.setAttribute('id', 'smo91194');
smo91210v0ar.push(smo91194);
smo91210v0.addTickables(smo91210v0ar)
fmtsmo9121067.joinVoices([smo91210v0]);
const fmtsmo9431767 = new VF.Formatter();
//
// voices and notes for stave 5 67
const smo94317v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo94317v0ar = [];
const smo94296 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo94296'] = smo94296;
smo94296.setAttribute('id', 'smo94296');
smo94317v0ar.push(smo94296);
const smo94297 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo94297'] = smo94297;
smo94297.setAttribute('id', 'smo94297');
const smo94298 = new VF.Annotation('a');
smo94298.setAttribute('id', 'smo94298');
smo94298.setFont('times', 12, 'normal');
smo94298.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo94297.addModifier(smo94298);
smo94298.addClass('lyric lyric-0');
smo94317v0ar.push(smo94297);
const smo94299 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo94299'] = smo94299;
smo94299.setAttribute('id', 'smo94299');
smo94317v0ar.push(smo94299);
const smo94300 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo94300'] = smo94300;
smo94300.setAttribute('id', 'smo94300');
smo94317v0ar.push(smo94300);
const smo94301 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo94301'] = smo94301;
smo94301.setAttribute('id', 'smo94301');
smo94317v0ar.push(smo94301);
smo94317v0.addTickables(smo94317v0ar)
fmtsmo9431767.joinVoices([smo94317v0]);
const fmtsmo9742967 = new VF.Formatter();
//
// voices and notes for stave 6 67
const smo97429v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo97429v0ar = [];
const smo97408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo97408'] = smo97408;
smo97408.setAttribute('id', 'smo97408');
smo97429v0ar.push(smo97408);
const smo97409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo97409'] = smo97409;
smo97409.setAttribute('id', 'smo97409');
const smo97410 = new VF.Annotation('a');
smo97410.setAttribute('id', 'smo97410');
smo97410.setFont('times', 12, 'normal');
smo97410.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo97409.addModifier(smo97410);
smo97410.addClass('lyric lyric-0');
smo97429v0ar.push(smo97409);
const smo97411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo97411'] = smo97411;
smo97411.setAttribute('id', 'smo97411');
smo97429v0ar.push(smo97411);
const smo97412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo97412'] = smo97412;
smo97412.setAttribute('id', 'smo97412');
smo97429v0ar.push(smo97412);
const smo97413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo97413'] = smo97413;
smo97413.setAttribute('id', 'smo97413');
smo97429v0ar.push(smo97413);
smo97429v0.addTickables(smo97429v0ar)
fmtsmo9742967.joinVoices([smo97429v0]);
const fmtsmo10053867 = new VF.Formatter();
//
// voices and notes for stave 7 67
const smo100538v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100538v0ar = [];
const smo100517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo100517'] = smo100517;
smo100517.setAttribute('id', 'smo100517');
smo100538v0ar.push(smo100517);
const smo100518 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo100518'] = smo100518;
smo100518.setAttribute('id', 'smo100518');
const smo100519 = new VF.Annotation('a');
smo100519.setAttribute('id', 'smo100519');
smo100519.setFont('times', 12, 'normal');
smo100519.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo100518.addModifier(smo100519);
smo100519.addClass('lyric lyric-0');
smo100538v0ar.push(smo100518);
const smo100520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo100520'] = smo100520;
smo100520.setAttribute('id', 'smo100520');
smo100538v0ar.push(smo100520);
const smo100521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo100521'] = smo100521;
smo100521.setAttribute('id', 'smo100521');
smo100538v0ar.push(smo100521);
const smo100522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo100522'] = smo100522;
smo100522.setAttribute('id', 'smo100522');
smo100538v0ar.push(smo100522);
smo100538v0.addTickables(smo100538v0ar)
fmtsmo10053867.joinVoices([smo100538v0]);
const fmtsmo10362467 = new VF.Formatter();
//
// voices and notes for stave 8 67
const smo103624v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103624v0ar = [];
const smo103603 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo103603'] = smo103603;
smo103603.setAttribute('id', 'smo103603');
smo103624v0ar.push(smo103603);
const smo103604 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo103604'] = smo103604;
smo103604.setAttribute('id', 'smo103604');
const smo103605 = new VF.Annotation('a');
smo103605.setAttribute('id', 'smo103605');
smo103605.setFont('times', 12, 'normal');
smo103605.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo103604.addModifier(smo103605);
smo103605.addClass('lyric lyric-0');
smo103624v0ar.push(smo103604);
const smo103606 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo103606'] = smo103606;
smo103606.setAttribute('id', 'smo103606');
smo103624v0ar.push(smo103606);
const smo103607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo103607'] = smo103607;
smo103607.setAttribute('id', 'smo103607');
smo103624v0ar.push(smo103607);
const smo103608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo103608'] = smo103608;
smo103608.setAttribute('id', 'smo103608');
smo103624v0ar.push(smo103608);
smo103624v0.addTickables(smo103624v0ar)
fmtsmo10362467.joinVoices([smo103624v0]);
const fmtsmo10671367 = new VF.Formatter();
//
// voices and notes for stave 9 67
const smo106713v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo106713v0ar = [];
const smo106692 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo106692'] = smo106692;
smo106692.setAttribute('id', 'smo106692');
smo106713v0ar.push(smo106692);
const smo106693 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo106693'] = smo106693;
smo106693.setAttribute('id', 'smo106693');
const smo106694 = new VF.Annotation('a');
smo106694.setAttribute('id', 'smo106694');
smo106694.setFont('times', 12, 'normal');
smo106694.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo106693.addModifier(smo106694);
smo106694.addClass('lyric lyric-0');
smo106713v0ar.push(smo106693);
const smo106695 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo106695'] = smo106695;
smo106695.setAttribute('id', 'smo106695');
smo106713v0ar.push(smo106695);
const smo106696 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo106696'] = smo106696;
smo106696.setAttribute('id', 'smo106696');
smo106713v0ar.push(smo106696);
const smo106697 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo106697'] = smo106697;
smo106697.setAttribute('id', 'smo106697');
smo106713v0ar.push(smo106697);
smo106713v0.addTickables(smo106713v0ar)
fmtsmo10671367.joinVoices([smo106713v0]);
const fmtsmo10975367 = new VF.Formatter();
//
// voices and notes for stave 10 67
const smo109753v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo109753v0ar = [];
const smo109732 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo109732'] = smo109732;
smo109732.setAttribute('id', 'smo109732');
smo109753v0ar.push(smo109732);
const smo109733 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo109733'] = smo109733;
smo109733.setAttribute('id', 'smo109733');
const smo109734 = new VF.Annotation('a');
smo109734.setAttribute('id', 'smo109734');
smo109734.setFont('times', 12, 'normal');
smo109734.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo109733.addModifier(smo109734);
smo109734.addClass('lyric lyric-0');
smo109753v0ar.push(smo109733);
const smo109735 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo109735'] = smo109735;
smo109735.setAttribute('id', 'smo109735');
smo109753v0ar.push(smo109735);
const smo109736 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo109736'] = smo109736;
smo109736.setAttribute('id', 'smo109736');
smo109753v0ar.push(smo109736);
const smo109737 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo109737'] = smo109737;
smo109737.setAttribute('id', 'smo109737');
smo109753v0ar.push(smo109737);
smo109753v0.addTickables(smo109753v0ar)
fmtsmo10975367.joinVoices([smo109753v0]);
const fmtsmo11280767 = new VF.Formatter();
//
// voices and notes for stave 11 67
const smo112807v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo112807v0ar = [];
const smo112786 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo112786'] = smo112786;
smo112786.setAttribute('id', 'smo112786');
smo112807v0ar.push(smo112786);
const smo112787 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo112787'] = smo112787;
smo112787.setAttribute('id', 'smo112787');
const smo112788 = new VF.Annotation('a');
smo112788.setAttribute('id', 'smo112788');
smo112788.setFont('times', 12, 'normal');
smo112788.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo112787.addModifier(smo112788);
smo112788.addClass('lyric lyric-0');
smo112807v0ar.push(smo112787);
const smo112789 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo112789'] = smo112789;
smo112789.setAttribute('id', 'smo112789');
smo112807v0ar.push(smo112789);
const smo112790 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo112790'] = smo112790;
smo112790.setAttribute('id', 'smo112790');
smo112807v0ar.push(smo112790);
const smo112791 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo112791'] = smo112791;
smo112791.setAttribute('id', 'smo112791');
smo112807v0ar.push(smo112791);
smo112807v0.addTickables(smo112807v0ar)
fmtsmo11280767.joinVoices([smo112807v0]);
const fmtsmo11585067 = new VF.Formatter();
//
// voices and notes for stave 12 67
const smo115850v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo115850v0ar = [];
const smo115829 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo115829'] = smo115829;
smo115829.setAttribute('id', 'smo115829');
smo115850v0ar.push(smo115829);
const smo115830 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo115830'] = smo115830;
smo115830.setAttribute('id', 'smo115830');
const smo115831 = new VF.Annotation('a');
smo115831.setAttribute('id', 'smo115831');
smo115831.setFont('times', 12, 'normal');
smo115831.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo115830.addModifier(smo115831);
smo115831.addClass('lyric lyric-0');
smo115850v0ar.push(smo115830);
const smo115832 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo115832'] = smo115832;
smo115832.setAttribute('id', 'smo115832');
smo115850v0ar.push(smo115832);
const smo115833 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo115833'] = smo115833;
smo115833.setAttribute('id', 'smo115833');
smo115850v0ar.push(smo115833);
const smo115834 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo115834'] = smo115834;
smo115834.setAttribute('id', 'smo115834');
smo115850v0ar.push(smo115834);
smo115850v0.addTickables(smo115850v0ar)
fmtsmo11585067.joinVoices([smo115850v0]);
const fmtsmo11904967 = new VF.Formatter();
//
// voices and notes for stave 13 67
const smo119049v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo119049v0ar = [];
const smo119028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
noteHash['smo119028'] = smo119028;
smo119028.setAttribute('id', 'smo119028');
smo119028.addModifier(new VF.Dot(), 0);
smo119028.addModifier(new VF.Dot(), 1);
smo119028.addModifier(new VF.Dot(), 2);
smo119049v0ar.push(smo119028);
const smo119029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","dn/5/n"]}'))
noteHash['smo119029'] = smo119029;
smo119029.setAttribute('id', 'smo119029');
smo119049v0ar.push(smo119029);
const smo119030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","dn/5/n"]}'))
noteHash['smo119030'] = smo119030;
smo119030.setAttribute('id', 'smo119030');
smo119049v0ar.push(smo119030);
const smo119031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo119031'] = smo119031;
smo119031.setAttribute('id', 'smo119031');
smo119049v0ar.push(smo119031);
const smo119032 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo119032'] = smo119032;
smo119032.setAttribute('id', 'smo119032');
smo119049v0ar.push(smo119032);
const smo119033 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo119033'] = smo119033;
smo119033.setAttribute('id', 'smo119033');
smo119049v0ar.push(smo119033);
smo119049v0.addTickables(smo119049v0ar)
fmtsmo11904967.joinVoices([smo119049v0]);
const fmtsmo12226267 = new VF.Formatter();
//
// voices and notes for stave 14 67
const smo122262v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo122262v0ar = [];
const smo122241 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
noteHash['smo122241'] = smo122241;
smo122241.setAttribute('id', 'smo122241');
smo122241.addModifier(new VF.Dot(), 0);
smo122241.addModifier(new VF.Dot(), 1);
smo122241.addModifier(new VF.Dot(), 2);
smo122262v0ar.push(smo122241);
const smo122242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","dn/5/n"]}'))
noteHash['smo122242'] = smo122242;
smo122242.setAttribute('id', 'smo122242');
smo122262v0ar.push(smo122242);
const smo122243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","dn/5/n"]}'))
noteHash['smo122243'] = smo122243;
smo122243.setAttribute('id', 'smo122243');
smo122262v0ar.push(smo122243);
const smo122244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo122244'] = smo122244;
smo122244.setAttribute('id', 'smo122244');
smo122262v0ar.push(smo122244);
const smo122245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo122245'] = smo122245;
smo122245.setAttribute('id', 'smo122245');
smo122262v0ar.push(smo122245);
const smo122246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo122246'] = smo122246;
smo122246.setAttribute('id', 'smo122246');
smo122262v0ar.push(smo122246);
smo122262v0.addTickables(smo122262v0ar)
fmtsmo12226267.joinVoices([smo122262v0]);
const fmtsmo12545767 = new VF.Formatter();
//
// voices and notes for stave 15 67
const smo125457v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo125457v0ar = [];
const smo125436 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo125436'] = smo125436;
smo125436.setAttribute('id', 'smo125436');
smo125436.addModifier(new VF.Dot(), 0);
smo125457v0ar.push(smo125436);
const smo125437 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo125437'] = smo125437;
smo125437.setAttribute('id', 'smo125437');
smo125457v0ar.push(smo125437);
const smo125438 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo125438'] = smo125438;
smo125438.setAttribute('id', 'smo125438');
smo125457v0ar.push(smo125438);
const smo125439 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo125439'] = smo125439;
smo125439.setAttribute('id', 'smo125439');
smo125457v0ar.push(smo125439);
const smo125440 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo125440'] = smo125440;
smo125440.setAttribute('id', 'smo125440');
smo125457v0ar.push(smo125440);
const smo125441 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo125441'] = smo125441;
smo125441.setAttribute('id', 'smo125441');
smo125457v0ar.push(smo125441);
smo125457v0.addTickables(smo125457v0ar)
fmtsmo12545767.joinVoices([smo125457v0]);
const fmtsmo12857067 = new VF.Formatter();
//
// voices and notes for stave 16 67
const smo128570v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo128570v0ar = [];
const smo128551 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo128551'] = smo128551;
smo128551.setAttribute('id', 'smo128551');
smo128570v0ar.push(smo128551);
const smo128552 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo128552'] = smo128552;
smo128552.setAttribute('id', 'smo128552');
smo128570v0ar.push(smo128552);
const smo128553 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo128553'] = smo128553;
smo128553.setAttribute('id', 'smo128553');
smo128570v0ar.push(smo128553);
const smo128554 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo128554'] = smo128554;
smo128554.setAttribute('id', 'smo128554');
smo128570v0ar.push(smo128554);
smo128570v0.addTickables(smo128570v0ar)
fmtsmo12857067.joinVoices([smo128570v0]);
const fmtsmo13176967 = new VF.Formatter();
//
// voices and notes for stave 17 67
const smo131769v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo131769v0ar = [];
const smo131750 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo131750'] = smo131750;
smo131750.setAttribute('id', 'smo131750');
smo131769v0ar.push(smo131750);
const smo131751 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo131751'] = smo131751;
smo131751.setAttribute('id', 'smo131751');
smo131751.setStyle({ fillStyle: "#ffffff00" });
smo131769v0ar.push(smo131751);
smo131769v0.addTickables(smo131769v0ar)
fmtsmo13176967.joinVoices([smo131769v0]);
const smo131769v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo131769v1ar = [];
const smo131752 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo131752'] = smo131752;
smo131752.setAttribute('id', 'smo131752');
smo131752.setStyle({ fillStyle: '#aaaaaa7f' });
smo131769v1ar.push(smo131752);
const smo131753 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo131753'] = smo131753;
smo131753.setAttribute('id', 'smo131753');
smo131753.setStyle({ fillStyle: "#115511" });
smo131769v1ar.push(smo131753);
smo131769v1.addTickables(smo131769v1ar)
fmtsmo13176967.joinVoices([smo131769v1]);
// create beam groups and tuplets for format grp smo133472 before formatting
const dirsmo224980 = smo78917.getStemDirection();
smo78917.setStemDirection(dirsmo224980);
smo78918.setStemDirection(dirsmo224980);
const smo224980 = new VF.Beam([smo78917,smo78918]);
const dirsmo224983 = smo81911.getStemDirection();
smo81911.setStemDirection(dirsmo224983);
smo81912.setStemDirection(dirsmo224983);
const smo224983 = new VF.Beam([smo81911,smo81912]);
const dirsmo224986 = smo85054.getStemDirection();
smo85054.setStemDirection(dirsmo224986);
smo85055.setStemDirection(dirsmo224986);
const smo224986 = new VF.Beam([smo85054,smo85055]);
const dirsmo224989 = smo88170.getStemDirection();
smo88170.setStemDirection(dirsmo224989);
smo88171.setStemDirection(dirsmo224989);
const smo224989 = new VF.Beam([smo88170,smo88171]);
const dirsmo224992 = smo91189.getStemDirection();
smo91189.setStemDirection(dirsmo224992);
smo91190.setStemDirection(dirsmo224992);
const smo224992 = new VF.Beam([smo91189,smo91190]);
 
// formatting measures in staff group smo133472
fmtsmo7893867.format([smo78938v0,smo81931v0,smo85075v0,smo88191v0,smo91210v0], 288);
const stavesmo78938 = new VF.Stave(1435, 210, 302);
stavesmo78938.setAttribute('id', 'stavesmo78938');
stavesmo78938.setBegBarType(VF.Barline.type.NONE);
stavesmo78938.setContext(context);
stavesmo78938.draw();
smo78938v0.draw(context, stavesmo78938);
smo224980.setContext(context);
smo224980.draw();
const stavesmo81931 = new VF.Stave(1435, 316, 302);
stavesmo81931.setAttribute('id', 'stavesmo81931');
stavesmo81931.setBegBarType(VF.Barline.type.NONE);
stavesmo81931.setContext(context);
stavesmo81931.draw();
smo81931v0.draw(context, stavesmo81931);
smo224983.setContext(context);
smo224983.draw();
const stavesmo85075 = new VF.Stave(1435, 437, 302);
stavesmo85075.setAttribute('id', 'stavesmo85075');
stavesmo85075.setBegBarType(VF.Barline.type.NONE);
stavesmo85075.setContext(context);
stavesmo85075.draw();
smo85075v0.draw(context, stavesmo85075);
smo224986.setContext(context);
smo224986.draw();
const stavesmo88191 = new VF.Stave(1435, 553, 302);
stavesmo88191.setAttribute('id', 'stavesmo88191');
stavesmo88191.setBegBarType(VF.Barline.type.NONE);
stavesmo88191.setContext(context);
stavesmo88191.draw();
smo88191v0.draw(context, stavesmo88191);
smo224989.setContext(context);
smo224989.draw();
const stavesmo91210 = new VF.Stave(1435, 659, 302);
stavesmo91210.setAttribute('id', 'stavesmo91210');
stavesmo91210.setBegBarType(VF.Barline.type.NONE);
stavesmo91210.setContext(context);
stavesmo91210.draw();
smo91210v0.draw(context, stavesmo91210);
smo224992.setContext(context);
smo224992.draw();
// create beam groups and tuplets for format grp smo133474 before formatting
const dirsmo224995 = smo94296.getStemDirection();
smo94296.setStemDirection(dirsmo224995);
smo94297.setStemDirection(dirsmo224995);
const smo224995 = new VF.Beam([smo94296,smo94297]);
const dirsmo224998 = smo97408.getStemDirection();
smo97408.setStemDirection(dirsmo224998);
smo97409.setStemDirection(dirsmo224998);
const smo224998 = new VF.Beam([smo97408,smo97409]);
const dirsmo225001 = smo100517.getStemDirection();
smo100517.setStemDirection(dirsmo225001);
smo100518.setStemDirection(dirsmo225001);
const smo225001 = new VF.Beam([smo100517,smo100518]);
const dirsmo225004 = smo103603.getStemDirection();
smo103603.setStemDirection(dirsmo225004);
smo103604.setStemDirection(dirsmo225004);
const smo225004 = new VF.Beam([smo103603,smo103604]);
 
// formatting measures in staff group smo133474
fmtsmo9431767.format([smo94317v0,smo97429v0,smo100538v0,smo103624v0], 288);
const stavesmo94317 = new VF.Stave(1435, 780, 302);
stavesmo94317.setAttribute('id', 'stavesmo94317');
stavesmo94317.setBegBarType(VF.Barline.type.NONE);
stavesmo94317.setContext(context);
stavesmo94317.draw();
smo94317v0.draw(context, stavesmo94317);
smo224995.setContext(context);
smo224995.draw();
const stavesmo97429 = new VF.Stave(1435, 896, 302);
stavesmo97429.setAttribute('id', 'stavesmo97429');
stavesmo97429.setBegBarType(VF.Barline.type.NONE);
stavesmo97429.setContext(context);
stavesmo97429.draw();
smo97429v0.draw(context, stavesmo97429);
smo224998.setContext(context);
smo224998.draw();
const stavesmo100538 = new VF.Stave(1435, 1012, 302);
stavesmo100538.setAttribute('id', 'stavesmo100538');
stavesmo100538.setBegBarType(VF.Barline.type.NONE);
stavesmo100538.setContext(context);
stavesmo100538.draw();
smo100538v0.draw(context, stavesmo100538);
smo225001.setContext(context);
smo225001.draw();
const stavesmo103624 = new VF.Stave(1435, 1128, 302);
stavesmo103624.setAttribute('id', 'stavesmo103624');
stavesmo103624.setBegBarType(VF.Barline.type.NONE);
stavesmo103624.setContext(context);
stavesmo103624.draw();
smo103624v0.draw(context, stavesmo103624);
smo225004.setContext(context);
smo225004.draw();
// create beam groups and tuplets for format grp smo133476 before formatting
const dirsmo225007 = smo106692.getStemDirection();
smo106692.setStemDirection(dirsmo225007);
smo106693.setStemDirection(dirsmo225007);
const smo225007 = new VF.Beam([smo106692,smo106693]);
const dirsmo225010 = smo109732.getStemDirection();
smo109732.setStemDirection(dirsmo225010);
smo109733.setStemDirection(dirsmo225010);
const smo225010 = new VF.Beam([smo109732,smo109733]);
const dirsmo225013 = smo112786.getStemDirection();
smo112786.setStemDirection(dirsmo225013);
smo112787.setStemDirection(dirsmo225013);
const smo225013 = new VF.Beam([smo112786,smo112787]);
const dirsmo225016 = smo115829.getStemDirection();
smo115829.setStemDirection(dirsmo225016);
smo115830.setStemDirection(dirsmo225016);
const smo225016 = new VF.Beam([smo115829,smo115830]);
 
// formatting measures in staff group smo133476
fmtsmo10671367.format([smo106713v0,smo109753v0,smo112807v0,smo115850v0], 288);
const stavesmo106713 = new VF.Stave(1435, 1264, 302);
stavesmo106713.setAttribute('id', 'stavesmo106713');
stavesmo106713.setBegBarType(VF.Barline.type.NONE);
stavesmo106713.setContext(context);
stavesmo106713.draw();
smo106713v0.draw(context, stavesmo106713);
smo225007.setContext(context);
smo225007.draw();
const stavesmo109753 = new VF.Stave(1435, 1400, 302);
stavesmo109753.setAttribute('id', 'stavesmo109753');
stavesmo109753.setBegBarType(VF.Barline.type.NONE);
stavesmo109753.setContext(context);
stavesmo109753.draw();
smo109753v0.draw(context, stavesmo109753);
smo225010.setContext(context);
smo225010.draw();
const stavesmo112807 = new VF.Stave(1435, 1536, 302);
stavesmo112807.setAttribute('id', 'stavesmo112807');
stavesmo112807.setBegBarType(VF.Barline.type.NONE);
stavesmo112807.setContext(context);
stavesmo112807.draw();
smo112807v0.draw(context, stavesmo112807);
smo225013.setContext(context);
smo225013.draw();
const stavesmo115850 = new VF.Stave(1435, 1672, 302);
stavesmo115850.setAttribute('id', 'stavesmo115850');
stavesmo115850.setBegBarType(VF.Barline.type.NONE);
stavesmo115850.setContext(context);
stavesmo115850.draw();
smo115850v0.draw(context, stavesmo115850);
smo225016.setContext(context);
smo225016.draw();
// create beam groups and tuplets for format grp smo120795 before formatting
const dirsmo225019 = smo119029.getStemDirection();
smo119029.setStemDirection(dirsmo225019);
smo119030.setStemDirection(dirsmo225019);
smo119031.setStemDirection(dirsmo225019);
smo119032.setStemDirection(dirsmo225019);
const smo225019 = new VF.Beam([smo119029,smo119030,smo119031,smo119032]);
 
// formatting measures in staff group smo120795
fmtsmo11904967.format([smo119049v0], 288);
const stavesmo119049 = new VF.Stave(1435, 1818, 302);
stavesmo119049.setAttribute('id', 'stavesmo119049');
stavesmo119049.setBegBarType(VF.Barline.type.NONE);
stavesmo119049.setContext(context);
stavesmo119049.draw();
smo119049v0.draw(context, stavesmo119049);
smo225019.setContext(context);
smo225019.draw();
// create beam groups and tuplets for format grp smo133470 before formatting
const dirsmo225022 = smo122242.getStemDirection();
smo122242.setStemDirection(dirsmo225022);
smo122243.setStemDirection(dirsmo225022);
smo122244.setStemDirection(dirsmo225022);
smo122245.setStemDirection(dirsmo225022);
const smo225022 = new VF.Beam([smo122242,smo122243,smo122244,smo122245]);
const dirsmo225025 = smo125437.getStemDirection();
smo125437.setStemDirection(dirsmo225025);
smo125438.setStemDirection(dirsmo225025);
smo125439.setStemDirection(dirsmo225025);
smo125440.setStemDirection(dirsmo225025);
const smo225025 = new VF.Beam([smo125437,smo125438,smo125439,smo125440]);
 
// formatting measures in staff group smo133470
fmtsmo12226267.format([smo122262v0,smo125457v0], 288);
const stavesmo122262 = new VF.Stave(1435, 1924, 302);
stavesmo122262.setAttribute('id', 'stavesmo122262');
stavesmo122262.setBegBarType(VF.Barline.type.NONE);
stavesmo122262.setContext(context);
stavesmo122262.draw();
smo122262v0.draw(context, stavesmo122262);
smo225022.setContext(context);
smo225022.draw();
const stavesmo125457 = new VF.Stave(1435, 2010, 302);
stavesmo125457.setAttribute('id', 'stavesmo125457');
stavesmo125457.setBegBarType(VF.Barline.type.NONE);
stavesmo125457.setContext(context);
stavesmo125457.draw();
smo125457v0.draw(context, stavesmo125457);
smo225025.setContext(context);
smo225025.draw();
// create beam groups and tuplets for format grp smo130308 before formatting
 
// formatting measures in staff group smo130308
fmtsmo12857067.format([smo128570v0], 288);
const stavesmo128570 = new VF.Stave(1435, 2081, 302);
stavesmo128570.setAttribute('id', 'stavesmo128570');
stavesmo128570.setBegBarType(VF.Barline.type.NONE);
stavesmo128570.setContext(context);
stavesmo128570.draw();
smo128570v0.draw(context, stavesmo128570);
// create beam groups and tuplets for format grp smo133464 before formatting
 
// formatting measures in staff group smo133464
fmtsmo13176967.format([smo131769v0,smo131769v1], 288);
const stavesmo131769 = new VF.Stave(1435, 2152, 302);
stavesmo131769.setAttribute('id', 'stavesmo131769');
stavesmo131769.setBegBarType(VF.Barline.type.NONE);
stavesmo131769.setContext(context);
stavesmo131769.draw();
smo131769v0.draw(context, stavesmo131769);
smo131769v1.draw(context, stavesmo131769);
const fmtsmo7895568 = new VF.Formatter();
//
// voices and notes for stave 0 68
const smo78955v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78955v0ar = [];
const smo78939 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo78939'] = smo78939;
smo78939.setAttribute('id', 'smo78939');
smo78955v0ar.push(smo78939);
smo78955v0.addTickables(smo78955v0ar)
fmtsmo7895568.joinVoices([smo78955v0]);
const fmtsmo8194868 = new VF.Formatter();
//
// voices and notes for stave 1 68
const smo81948v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81948v0ar = [];
const smo81932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo81932'] = smo81932;
smo81932.setAttribute('id', 'smo81932');
smo81948v0ar.push(smo81932);
smo81948v0.addTickables(smo81948v0ar)
fmtsmo8194868.joinVoices([smo81948v0]);
const fmtsmo8509268 = new VF.Formatter();
//
// voices and notes for stave 2 68
const smo85092v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo85092v0ar = [];
const smo85076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo85076'] = smo85076;
smo85076.setAttribute('id', 'smo85076');
smo85092v0ar.push(smo85076);
smo85092v0.addTickables(smo85092v0ar)
fmtsmo8509268.joinVoices([smo85092v0]);
const fmtsmo8820868 = new VF.Formatter();
//
// voices and notes for stave 3 68
const smo88208v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo88208v0ar = [];
const smo88192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo88192'] = smo88192;
smo88192.setAttribute('id', 'smo88192');
smo88208v0ar.push(smo88192);
smo88208v0.addTickables(smo88208v0ar)
fmtsmo8820868.joinVoices([smo88208v0]);
const fmtsmo9122768 = new VF.Formatter();
//
// voices and notes for stave 4 68
const smo91227v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo91227v0ar = [];
const smo91211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo91211'] = smo91211;
smo91211.setAttribute('id', 'smo91211');
smo91227v0ar.push(smo91211);
smo91227v0.addTickables(smo91227v0ar)
fmtsmo9122768.joinVoices([smo91227v0]);
const fmtsmo9433768 = new VF.Formatter();
//
// voices and notes for stave 5 68
const smo94337v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo94337v0ar = [];
const smo94318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo94318'] = smo94318;
smo94318.setAttribute('id', 'smo94318');
smo94337v0ar.push(smo94318);
const smo94319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo94319'] = smo94319;
smo94319.setAttribute('id', 'smo94319');
smo94337v0ar.push(smo94319);
const smo94320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo94320'] = smo94320;
smo94320.setAttribute('id', 'smo94320');
smo94337v0ar.push(smo94320);
const smo94321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo94321'] = smo94321;
smo94321.setAttribute('id', 'smo94321');
smo94337v0ar.push(smo94321);
smo94337v0.addTickables(smo94337v0ar)
fmtsmo9433768.joinVoices([smo94337v0]);
const fmtsmo9744668 = new VF.Formatter();
//
// voices and notes for stave 6 68
const smo97446v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo97446v0ar = [];
const smo97430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo97430'] = smo97430;
smo97430.setAttribute('id', 'smo97430');
smo97446v0ar.push(smo97430);
smo97446v0.addTickables(smo97446v0ar)
fmtsmo9744668.joinVoices([smo97446v0]);
const fmtsmo10055568 = new VF.Formatter();
//
// voices and notes for stave 7 68
const smo100555v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100555v0ar = [];
const smo100539 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo100539'] = smo100539;
smo100539.setAttribute('id', 'smo100539');
smo100555v0ar.push(smo100539);
smo100555v0.addTickables(smo100555v0ar)
fmtsmo10055568.joinVoices([smo100555v0]);
const fmtsmo10364168 = new VF.Formatter();
//
// voices and notes for stave 8 68
const smo103641v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103641v0ar = [];
const smo103625 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo103625'] = smo103625;
smo103625.setAttribute('id', 'smo103625');
smo103641v0ar.push(smo103625);
smo103641v0.addTickables(smo103641v0ar)
fmtsmo10364168.joinVoices([smo103641v0]);
const fmtsmo10673068 = new VF.Formatter();
//
// voices and notes for stave 9 68
const smo106730v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo106730v0ar = [];
const smo106714 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo106714'] = smo106714;
smo106714.setAttribute('id', 'smo106714');
smo106730v0ar.push(smo106714);
smo106730v0.addTickables(smo106730v0ar)
fmtsmo10673068.joinVoices([smo106730v0]);
const fmtsmo10977068 = new VF.Formatter();
//
// voices and notes for stave 10 68
const smo109770v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo109770v0ar = [];
const smo109754 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo109754'] = smo109754;
smo109754.setAttribute('id', 'smo109754');
smo109770v0ar.push(smo109754);
smo109770v0.addTickables(smo109770v0ar)
fmtsmo10977068.joinVoices([smo109770v0]);
const fmtsmo11282468 = new VF.Formatter();
//
// voices and notes for stave 11 68
const smo112824v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo112824v0ar = [];
const smo112808 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo112808'] = smo112808;
smo112808.setAttribute('id', 'smo112808');
smo112824v0ar.push(smo112808);
smo112824v0.addTickables(smo112824v0ar)
fmtsmo11282468.joinVoices([smo112824v0]);
const fmtsmo11586768 = new VF.Formatter();
//
// voices and notes for stave 12 68
const smo115867v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo115867v0ar = [];
const smo115851 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo115851'] = smo115851;
smo115851.setAttribute('id', 'smo115851');
smo115867v0ar.push(smo115851);
smo115867v0.addTickables(smo115867v0ar)
fmtsmo11586768.joinVoices([smo115867v0]);
const fmtsmo11906668 = new VF.Formatter();
//
// voices and notes for stave 13 68
const smo119066v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo119066v0ar = [];
const smo119050 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo119050'] = smo119050;
smo119050.setAttribute('id', 'smo119050');
smo119066v0ar.push(smo119050);
smo119066v0.addTickables(smo119066v0ar)
fmtsmo11906668.joinVoices([smo119066v0]);
const fmtsmo12227968 = new VF.Formatter();
//
// voices and notes for stave 14 68
const smo122279v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo122279v0ar = [];
const smo122263 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo122263'] = smo122263;
smo122263.setAttribute('id', 'smo122263');
smo122279v0ar.push(smo122263);
smo122279v0.addTickables(smo122279v0ar)
fmtsmo12227968.joinVoices([smo122279v0]);
const fmtsmo12547468 = new VF.Formatter();
//
// voices and notes for stave 15 68
const smo125474v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo125474v0ar = [];
const smo125458 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo125458'] = smo125458;
smo125458.setAttribute('id', 'smo125458');
smo125474v0ar.push(smo125458);
smo125474v0.addTickables(smo125474v0ar)
fmtsmo12547468.joinVoices([smo125474v0]);
const fmtsmo12859068 = new VF.Formatter();
//
// voices and notes for stave 16 68
const smo128590v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo128590v0ar = [];
const smo128571 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo128571'] = smo128571;
smo128571.setAttribute('id', 'smo128571');
smo128571.addModifier(new VF.Dot(), 0);
smo128590v0ar.push(smo128571);
const smo128572 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo128572'] = smo128572;
smo128572.setAttribute('id', 'smo128572');
smo128590v0ar.push(smo128572);
const smo128573 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo128573'] = smo128573;
smo128573.setAttribute('id', 'smo128573');
smo128590v0ar.push(smo128573);
const smo128574 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo128574'] = smo128574;
smo128574.setAttribute('id', 'smo128574');
smo128590v0ar.push(smo128574);
smo128590v0.addTickables(smo128590v0ar)
fmtsmo12859068.joinVoices([smo128590v0]);
const fmtsmo13178968 = new VF.Formatter();
//
// voices and notes for stave 17 68
const smo131789v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo131789v0ar = [];
const smo131770 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo131770'] = smo131770;
smo131770.setAttribute('id', 'smo131770');
smo131789v0ar.push(smo131770);
const smo131771 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo131771'] = smo131771;
smo131771.setAttribute('id', 'smo131771');
smo131771.setStyle({ fillStyle: "#ffffff00" });
smo131789v0ar.push(smo131771);
smo131789v0.addTickables(smo131789v0ar)
fmtsmo13178968.joinVoices([smo131789v0]);
const smo131789v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo131789v1ar = [];
const smo131772 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo131772'] = smo131772;
smo131772.setAttribute('id', 'smo131772');
smo131772.setStyle({ fillStyle: '#aaaaaa7f' });
smo131789v1ar.push(smo131772);
const smo131773 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo131773'] = smo131773;
smo131773.setAttribute('id', 'smo131773');
smo131773.setStyle({ fillStyle: "#115511" });
smo131789v1ar.push(smo131773);
smo131789v1.addTickables(smo131789v1ar)
fmtsmo13178968.joinVoices([smo131789v1]);
// create beam groups and tuplets for format grp smo133472 before formatting
 
// formatting measures in staff group smo133472
fmtsmo7895568.format([smo78955v0,smo81948v0,smo85092v0,smo88208v0,smo91227v0], 288);
const stavesmo78955 = new VF.Stave(1737, 210, 302);
stavesmo78955.setAttribute('id', 'stavesmo78955');
stavesmo78955.setBegBarType(VF.Barline.type.NONE);
stavesmo78955.setContext(context);
stavesmo78955.draw();
smo78955v0.draw(context, stavesmo78955);
const stavesmo81948 = new VF.Stave(1737, 316, 302);
stavesmo81948.setAttribute('id', 'stavesmo81948');
stavesmo81948.setBegBarType(VF.Barline.type.NONE);
stavesmo81948.setContext(context);
stavesmo81948.draw();
smo81948v0.draw(context, stavesmo81948);
const stavesmo85092 = new VF.Stave(1737, 437, 302);
stavesmo85092.setAttribute('id', 'stavesmo85092');
stavesmo85092.setBegBarType(VF.Barline.type.NONE);
stavesmo85092.setContext(context);
stavesmo85092.draw();
smo85092v0.draw(context, stavesmo85092);
const stavesmo88208 = new VF.Stave(1737, 553, 302);
stavesmo88208.setAttribute('id', 'stavesmo88208');
stavesmo88208.setBegBarType(VF.Barline.type.NONE);
stavesmo88208.setContext(context);
stavesmo88208.draw();
smo88208v0.draw(context, stavesmo88208);
const stavesmo91227 = new VF.Stave(1737, 659, 302);
stavesmo91227.setAttribute('id', 'stavesmo91227');
stavesmo91227.setBegBarType(VF.Barline.type.NONE);
stavesmo91227.setContext(context);
stavesmo91227.draw();
smo91227v0.draw(context, stavesmo91227);
// create beam groups and tuplets for format grp smo133474 before formatting
 
// formatting measures in staff group smo133474
fmtsmo9433768.format([smo94337v0,smo97446v0,smo100555v0,smo103641v0], 288);
const stavesmo94337 = new VF.Stave(1737, 780, 302);
stavesmo94337.setAttribute('id', 'stavesmo94337');
stavesmo94337.setBegBarType(VF.Barline.type.NONE);
stavesmo94337.setContext(context);
stavesmo94337.draw();
smo94337v0.draw(context, stavesmo94337);
const stavesmo97446 = new VF.Stave(1737, 896, 302);
stavesmo97446.setAttribute('id', 'stavesmo97446');
stavesmo97446.setBegBarType(VF.Barline.type.NONE);
stavesmo97446.setContext(context);
stavesmo97446.draw();
smo97446v0.draw(context, stavesmo97446);
const stavesmo100555 = new VF.Stave(1737, 1012, 302);
stavesmo100555.setAttribute('id', 'stavesmo100555');
stavesmo100555.setBegBarType(VF.Barline.type.NONE);
stavesmo100555.setContext(context);
stavesmo100555.draw();
smo100555v0.draw(context, stavesmo100555);
const stavesmo103641 = new VF.Stave(1737, 1128, 302);
stavesmo103641.setAttribute('id', 'stavesmo103641');
stavesmo103641.setBegBarType(VF.Barline.type.NONE);
stavesmo103641.setContext(context);
stavesmo103641.draw();
smo103641v0.draw(context, stavesmo103641);
// create beam groups and tuplets for format grp smo133476 before formatting
 
// formatting measures in staff group smo133476
fmtsmo10673068.format([smo106730v0,smo109770v0,smo112824v0,smo115867v0], 288);
const stavesmo106730 = new VF.Stave(1737, 1264, 302);
stavesmo106730.setAttribute('id', 'stavesmo106730');
stavesmo106730.setBegBarType(VF.Barline.type.NONE);
stavesmo106730.setContext(context);
stavesmo106730.draw();
smo106730v0.draw(context, stavesmo106730);
const stavesmo109770 = new VF.Stave(1737, 1400, 302);
stavesmo109770.setAttribute('id', 'stavesmo109770');
stavesmo109770.setBegBarType(VF.Barline.type.NONE);
stavesmo109770.setContext(context);
stavesmo109770.draw();
smo109770v0.draw(context, stavesmo109770);
const stavesmo112824 = new VF.Stave(1737, 1536, 302);
stavesmo112824.setAttribute('id', 'stavesmo112824');
stavesmo112824.setBegBarType(VF.Barline.type.NONE);
stavesmo112824.setContext(context);
stavesmo112824.draw();
smo112824v0.draw(context, stavesmo112824);
const stavesmo115867 = new VF.Stave(1737, 1672, 302);
stavesmo115867.setAttribute('id', 'stavesmo115867');
stavesmo115867.setBegBarType(VF.Barline.type.NONE);
stavesmo115867.setContext(context);
stavesmo115867.draw();
smo115867v0.draw(context, stavesmo115867);
// create beam groups and tuplets for format grp smo120795 before formatting
 
// formatting measures in staff group smo120795
fmtsmo11906668.format([smo119066v0], 288);
const stavesmo119066 = new VF.Stave(1737, 1818, 302);
stavesmo119066.setAttribute('id', 'stavesmo119066');
stavesmo119066.setBegBarType(VF.Barline.type.NONE);
stavesmo119066.setContext(context);
stavesmo119066.draw();
smo119066v0.draw(context, stavesmo119066);
// create beam groups and tuplets for format grp smo133470 before formatting
 
// formatting measures in staff group smo133470
fmtsmo12227968.format([smo122279v0,smo125474v0], 288);
const stavesmo122279 = new VF.Stave(1737, 1924, 302);
stavesmo122279.setAttribute('id', 'stavesmo122279');
stavesmo122279.setBegBarType(VF.Barline.type.NONE);
stavesmo122279.setContext(context);
stavesmo122279.draw();
smo122279v0.draw(context, stavesmo122279);
const stavesmo125474 = new VF.Stave(1737, 2010, 302);
stavesmo125474.setAttribute('id', 'stavesmo125474');
stavesmo125474.setBegBarType(VF.Barline.type.NONE);
stavesmo125474.setContext(context);
stavesmo125474.draw();
smo125474v0.draw(context, stavesmo125474);
// create beam groups and tuplets for format grp smo130308 before formatting
 
// formatting measures in staff group smo130308
fmtsmo12859068.format([smo128590v0], 288);
const stavesmo128590 = new VF.Stave(1737, 2081, 302);
stavesmo128590.setAttribute('id', 'stavesmo128590');
stavesmo128590.setBegBarType(VF.Barline.type.NONE);
stavesmo128590.setContext(context);
stavesmo128590.draw();
smo128590v0.draw(context, stavesmo128590);
// create beam groups and tuplets for format grp smo133464 before formatting
 
// formatting measures in staff group smo133464
fmtsmo13178968.format([smo131789v0,smo131789v1], 288);
const stavesmo131789 = new VF.Stave(1737, 2152, 302);
stavesmo131789.setAttribute('id', 'stavesmo131789');
stavesmo131789.setBegBarType(VF.Barline.type.NONE);
stavesmo131789.setContext(context);
stavesmo131789.draw();
smo131789v0.draw(context, stavesmo131789);
smo131789v1.draw(context, stavesmo131789);
const fmtsmo7897269 = new VF.Formatter();
//
// voices and notes for stave 0 69
const smo78972v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78972v0ar = [];
const smo78956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo78956'] = smo78956;
smo78956.setAttribute('id', 'smo78956');
smo78972v0ar.push(smo78956);
smo78972v0.addTickables(smo78972v0ar)
fmtsmo7897269.joinVoices([smo78972v0]);
const fmtsmo8196569 = new VF.Formatter();
//
// voices and notes for stave 1 69
const smo81965v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81965v0ar = [];
const smo81949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo81949'] = smo81949;
smo81949.setAttribute('id', 'smo81949');
smo81965v0ar.push(smo81949);
smo81965v0.addTickables(smo81965v0ar)
fmtsmo8196569.joinVoices([smo81965v0]);
const fmtsmo8510969 = new VF.Formatter();
//
// voices and notes for stave 2 69
const smo85109v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo85109v0ar = [];
const smo85093 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo85093'] = smo85093;
smo85093.setAttribute('id', 'smo85093');
smo85109v0ar.push(smo85093);
smo85109v0.addTickables(smo85109v0ar)
fmtsmo8510969.joinVoices([smo85109v0]);
const fmtsmo8822569 = new VF.Formatter();
//
// voices and notes for stave 3 69
const smo88225v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo88225v0ar = [];
const smo88209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo88209'] = smo88209;
smo88209.setAttribute('id', 'smo88209');
smo88225v0ar.push(smo88209);
smo88225v0.addTickables(smo88225v0ar)
fmtsmo8822569.joinVoices([smo88225v0]);
const fmtsmo9124469 = new VF.Formatter();
//
// voices and notes for stave 4 69
const smo91244v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo91244v0ar = [];
const smo91228 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo91228'] = smo91228;
smo91228.setAttribute('id', 'smo91228');
smo91244v0ar.push(smo91228);
smo91244v0.addTickables(smo91244v0ar)
fmtsmo9124469.joinVoices([smo91244v0]);
const fmtsmo9435769 = new VF.Formatter();
//
// voices and notes for stave 5 69
const smo94357v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo94357v0ar = [];
const smo94338 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo94338'] = smo94338;
smo94338.setAttribute('id', 'smo94338');
smo94357v0ar.push(smo94338);
const smo94339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo94339'] = smo94339;
smo94339.setAttribute('id', 'smo94339');
smo94357v0ar.push(smo94339);
const smo94340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo94340'] = smo94340;
smo94340.setAttribute('id', 'smo94340');
smo94357v0ar.push(smo94340);
const smo94341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo94341'] = smo94341;
smo94341.setAttribute('id', 'smo94341');
smo94357v0ar.push(smo94341);
smo94357v0.addTickables(smo94357v0ar)
fmtsmo9435769.joinVoices([smo94357v0]);
const fmtsmo9746369 = new VF.Formatter();
//
// voices and notes for stave 6 69
const smo97463v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo97463v0ar = [];
const smo97447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo97447'] = smo97447;
smo97447.setAttribute('id', 'smo97447');
smo97463v0ar.push(smo97447);
smo97463v0.addTickables(smo97463v0ar)
fmtsmo9746369.joinVoices([smo97463v0]);
const fmtsmo10057269 = new VF.Formatter();
//
// voices and notes for stave 7 69
const smo100572v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100572v0ar = [];
const smo100556 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo100556'] = smo100556;
smo100556.setAttribute('id', 'smo100556');
smo100572v0ar.push(smo100556);
smo100572v0.addTickables(smo100572v0ar)
fmtsmo10057269.joinVoices([smo100572v0]);
const fmtsmo10365869 = new VF.Formatter();
//
// voices and notes for stave 8 69
const smo103658v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103658v0ar = [];
const smo103642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo103642'] = smo103642;
smo103642.setAttribute('id', 'smo103642');
smo103658v0ar.push(smo103642);
smo103658v0.addTickables(smo103658v0ar)
fmtsmo10365869.joinVoices([smo103658v0]);
const fmtsmo10674769 = new VF.Formatter();
//
// voices and notes for stave 9 69
const smo106747v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo106747v0ar = [];
const smo106731 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo106731'] = smo106731;
smo106731.setAttribute('id', 'smo106731');
smo106747v0ar.push(smo106731);
smo106747v0.addTickables(smo106747v0ar)
fmtsmo10674769.joinVoices([smo106747v0]);
const fmtsmo10978769 = new VF.Formatter();
//
// voices and notes for stave 10 69
const smo109787v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo109787v0ar = [];
const smo109771 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo109771'] = smo109771;
smo109771.setAttribute('id', 'smo109771');
smo109787v0ar.push(smo109771);
smo109787v0.addTickables(smo109787v0ar)
fmtsmo10978769.joinVoices([smo109787v0]);
const fmtsmo11284169 = new VF.Formatter();
//
// voices and notes for stave 11 69
const smo112841v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo112841v0ar = [];
const smo112825 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo112825'] = smo112825;
smo112825.setAttribute('id', 'smo112825');
smo112841v0ar.push(smo112825);
smo112841v0.addTickables(smo112841v0ar)
fmtsmo11284169.joinVoices([smo112841v0]);
const fmtsmo11588469 = new VF.Formatter();
//
// voices and notes for stave 12 69
const smo115884v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo115884v0ar = [];
const smo115868 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo115868'] = smo115868;
smo115868.setAttribute('id', 'smo115868');
smo115884v0ar.push(smo115868);
smo115884v0.addTickables(smo115884v0ar)
fmtsmo11588469.joinVoices([smo115884v0]);
const fmtsmo11908369 = new VF.Formatter();
//
// voices and notes for stave 13 69
const smo119083v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo119083v0ar = [];
const smo119067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo119067'] = smo119067;
smo119067.setAttribute('id', 'smo119067');
smo119083v0ar.push(smo119067);
smo119083v0.addTickables(smo119083v0ar)
fmtsmo11908369.joinVoices([smo119083v0]);
const fmtsmo12229669 = new VF.Formatter();
//
// voices and notes for stave 14 69
const smo122296v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo122296v0ar = [];
const smo122280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo122280'] = smo122280;
smo122280.setAttribute('id', 'smo122280');
smo122296v0ar.push(smo122280);
smo122296v0.addTickables(smo122296v0ar)
fmtsmo12229669.joinVoices([smo122296v0]);
const fmtsmo12549169 = new VF.Formatter();
//
// voices and notes for stave 15 69
const smo125491v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo125491v0ar = [];
const smo125475 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo125475'] = smo125475;
smo125475.setAttribute('id', 'smo125475');
smo125491v0ar.push(smo125475);
smo125491v0.addTickables(smo125491v0ar)
fmtsmo12549169.joinVoices([smo125491v0]);
const fmtsmo12861069 = new VF.Formatter();
//
// voices and notes for stave 16 69
const smo128610v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo128610v0ar = [];
const smo128591 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo128591'] = smo128591;
smo128591.setAttribute('id', 'smo128591');
smo128591.addModifier(new VF.Dot(), 0);
smo128610v0ar.push(smo128591);
const smo128592 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo128592'] = smo128592;
smo128592.setAttribute('id', 'smo128592');
smo128610v0ar.push(smo128592);
const smo128593 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo128593'] = smo128593;
smo128593.setAttribute('id', 'smo128593');
smo128610v0ar.push(smo128593);
const smo128594 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo128594'] = smo128594;
smo128594.setAttribute('id', 'smo128594');
smo128610v0ar.push(smo128594);
smo128610v0.addTickables(smo128610v0ar)
fmtsmo12861069.joinVoices([smo128610v0]);
const fmtsmo13180969 = new VF.Formatter();
//
// voices and notes for stave 17 69
const smo131809v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo131809v0ar = [];
const smo131790 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo131790'] = smo131790;
smo131790.setAttribute('id', 'smo131790');
smo131809v0ar.push(smo131790);
const smo131791 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo131791'] = smo131791;
smo131791.setAttribute('id', 'smo131791');
smo131791.setStyle({ fillStyle: "#ffffff00" });
smo131809v0ar.push(smo131791);
smo131809v0.addTickables(smo131809v0ar)
fmtsmo13180969.joinVoices([smo131809v0]);
const smo131809v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo131809v1ar = [];
const smo131792 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo131792'] = smo131792;
smo131792.setAttribute('id', 'smo131792');
smo131792.setStyle({ fillStyle: '#aaaaaa7f' });
smo131809v1ar.push(smo131792);
const smo131793 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo131793'] = smo131793;
smo131793.setAttribute('id', 'smo131793');
smo131793.setStyle({ fillStyle: "#115511" });
smo131809v1ar.push(smo131793);
smo131809v1.addTickables(smo131809v1ar)
fmtsmo13180969.joinVoices([smo131809v1]);
// create beam groups and tuplets for format grp smo133472 before formatting
 
// formatting measures in staff group smo133472
fmtsmo7897269.format([smo78972v0,smo81965v0,smo85109v0,smo88225v0,smo91244v0], 288);
const stavesmo78972 = new VF.Stave(2039, 210, 302);
stavesmo78972.setAttribute('id', 'stavesmo78972');
stavesmo78972.setBegBarType(VF.Barline.type.NONE);
stavesmo78972.setContext(context);
stavesmo78972.draw();
smo78972v0.draw(context, stavesmo78972);
const stavesmo81965 = new VF.Stave(2039, 316, 302);
stavesmo81965.setAttribute('id', 'stavesmo81965');
stavesmo81965.setBegBarType(VF.Barline.type.NONE);
stavesmo81965.setContext(context);
stavesmo81965.draw();
smo81965v0.draw(context, stavesmo81965);
const stavesmo85109 = new VF.Stave(2039, 437, 302);
stavesmo85109.setAttribute('id', 'stavesmo85109');
stavesmo85109.setBegBarType(VF.Barline.type.NONE);
stavesmo85109.setContext(context);
stavesmo85109.draw();
smo85109v0.draw(context, stavesmo85109);
const stavesmo88225 = new VF.Stave(2039, 553, 302);
stavesmo88225.setAttribute('id', 'stavesmo88225');
stavesmo88225.setBegBarType(VF.Barline.type.NONE);
stavesmo88225.setContext(context);
stavesmo88225.draw();
smo88225v0.draw(context, stavesmo88225);
const stavesmo91244 = new VF.Stave(2039, 659, 302);
stavesmo91244.setAttribute('id', 'stavesmo91244');
stavesmo91244.setBegBarType(VF.Barline.type.NONE);
stavesmo91244.setContext(context);
stavesmo91244.draw();
smo91244v0.draw(context, stavesmo91244);
// create beam groups and tuplets for format grp smo133474 before formatting
 
// formatting measures in staff group smo133474
fmtsmo9435769.format([smo94357v0,smo97463v0,smo100572v0,smo103658v0], 288);
const stavesmo94357 = new VF.Stave(2039, 780, 302);
stavesmo94357.setAttribute('id', 'stavesmo94357');
stavesmo94357.setBegBarType(VF.Barline.type.NONE);
stavesmo94357.setContext(context);
stavesmo94357.draw();
smo94357v0.draw(context, stavesmo94357);
const stavesmo97463 = new VF.Stave(2039, 896, 302);
stavesmo97463.setAttribute('id', 'stavesmo97463');
stavesmo97463.setBegBarType(VF.Barline.type.NONE);
stavesmo97463.setContext(context);
stavesmo97463.draw();
smo97463v0.draw(context, stavesmo97463);
const stavesmo100572 = new VF.Stave(2039, 1012, 302);
stavesmo100572.setAttribute('id', 'stavesmo100572');
stavesmo100572.setBegBarType(VF.Barline.type.NONE);
stavesmo100572.setContext(context);
stavesmo100572.draw();
smo100572v0.draw(context, stavesmo100572);
const stavesmo103658 = new VF.Stave(2039, 1128, 302);
stavesmo103658.setAttribute('id', 'stavesmo103658');
stavesmo103658.setBegBarType(VF.Barline.type.NONE);
stavesmo103658.setContext(context);
stavesmo103658.draw();
smo103658v0.draw(context, stavesmo103658);
// create beam groups and tuplets for format grp smo133476 before formatting
 
// formatting measures in staff group smo133476
fmtsmo10674769.format([smo106747v0,smo109787v0,smo112841v0,smo115884v0], 288);
const stavesmo106747 = new VF.Stave(2039, 1264, 302);
stavesmo106747.setAttribute('id', 'stavesmo106747');
stavesmo106747.setBegBarType(VF.Barline.type.NONE);
stavesmo106747.setContext(context);
stavesmo106747.draw();
smo106747v0.draw(context, stavesmo106747);
const stavesmo109787 = new VF.Stave(2039, 1400, 302);
stavesmo109787.setAttribute('id', 'stavesmo109787');
stavesmo109787.setBegBarType(VF.Barline.type.NONE);
stavesmo109787.setContext(context);
stavesmo109787.draw();
smo109787v0.draw(context, stavesmo109787);
const stavesmo112841 = new VF.Stave(2039, 1536, 302);
stavesmo112841.setAttribute('id', 'stavesmo112841');
stavesmo112841.setBegBarType(VF.Barline.type.NONE);
stavesmo112841.setContext(context);
stavesmo112841.draw();
smo112841v0.draw(context, stavesmo112841);
const stavesmo115884 = new VF.Stave(2039, 1672, 302);
stavesmo115884.setAttribute('id', 'stavesmo115884');
stavesmo115884.setBegBarType(VF.Barline.type.NONE);
stavesmo115884.setContext(context);
stavesmo115884.draw();
smo115884v0.draw(context, stavesmo115884);
// create beam groups and tuplets for format grp smo120795 before formatting
 
// formatting measures in staff group smo120795
fmtsmo11908369.format([smo119083v0], 288);
const stavesmo119083 = new VF.Stave(2039, 1818, 302);
stavesmo119083.setAttribute('id', 'stavesmo119083');
stavesmo119083.setBegBarType(VF.Barline.type.NONE);
stavesmo119083.setContext(context);
stavesmo119083.draw();
smo119083v0.draw(context, stavesmo119083);
// create beam groups and tuplets for format grp smo133470 before formatting
 
// formatting measures in staff group smo133470
fmtsmo12229669.format([smo122296v0,smo125491v0], 288);
const stavesmo122296 = new VF.Stave(2039, 1924, 302);
stavesmo122296.setAttribute('id', 'stavesmo122296');
stavesmo122296.setBegBarType(VF.Barline.type.NONE);
stavesmo122296.setContext(context);
stavesmo122296.draw();
smo122296v0.draw(context, stavesmo122296);
const stavesmo125491 = new VF.Stave(2039, 2010, 302);
stavesmo125491.setAttribute('id', 'stavesmo125491');
stavesmo125491.setBegBarType(VF.Barline.type.NONE);
stavesmo125491.setContext(context);
stavesmo125491.draw();
smo125491v0.draw(context, stavesmo125491);
// create beam groups and tuplets for format grp smo130308 before formatting
 
// formatting measures in staff group smo130308
fmtsmo12861069.format([smo128610v0], 288);
const stavesmo128610 = new VF.Stave(2039, 2081, 302);
stavesmo128610.setAttribute('id', 'stavesmo128610');
stavesmo128610.setBegBarType(VF.Barline.type.NONE);
stavesmo128610.setContext(context);
stavesmo128610.draw();
smo128610v0.draw(context, stavesmo128610);
// create beam groups and tuplets for format grp smo133464 before formatting
 
// formatting measures in staff group smo133464
fmtsmo13180969.format([smo131809v0,smo131809v1], 288);
const stavesmo131809 = new VF.Stave(2039, 2152, 302);
stavesmo131809.setAttribute('id', 'stavesmo131809');
stavesmo131809.setBegBarType(VF.Barline.type.NONE);
stavesmo131809.setContext(context);
stavesmo131809.draw();
smo131809v0.draw(context, stavesmo131809);
smo131809v1.draw(context, stavesmo131809);
const fmtsmo7898970 = new VF.Formatter();
//
// voices and notes for stave 0 70
const smo78989v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78989v0ar = [];
const smo78973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo78973'] = smo78973;
smo78973.setAttribute('id', 'smo78973');
smo78989v0ar.push(smo78973);
smo78989v0.addTickables(smo78989v0ar)
fmtsmo7898970.joinVoices([smo78989v0]);
const fmtsmo8198270 = new VF.Formatter();
//
// voices and notes for stave 1 70
const smo81982v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81982v0ar = [];
const smo81966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo81966'] = smo81966;
smo81966.setAttribute('id', 'smo81966');
smo81982v0ar.push(smo81966);
smo81982v0.addTickables(smo81982v0ar)
fmtsmo8198270.joinVoices([smo81982v0]);
const fmtsmo8512670 = new VF.Formatter();
//
// voices and notes for stave 2 70
const smo85126v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo85126v0ar = [];
const smo85110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo85110'] = smo85110;
smo85110.setAttribute('id', 'smo85110');
smo85126v0ar.push(smo85110);
smo85126v0.addTickables(smo85126v0ar)
fmtsmo8512670.joinVoices([smo85126v0]);
const fmtsmo8824270 = new VF.Formatter();
//
// voices and notes for stave 3 70
const smo88242v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo88242v0ar = [];
const smo88226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo88226'] = smo88226;
smo88226.setAttribute('id', 'smo88226');
smo88242v0ar.push(smo88226);
smo88242v0.addTickables(smo88242v0ar)
fmtsmo8824270.joinVoices([smo88242v0]);
const fmtsmo9126170 = new VF.Formatter();
//
// voices and notes for stave 4 70
const smo91261v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo91261v0ar = [];
const smo91245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo91245'] = smo91245;
smo91245.setAttribute('id', 'smo91245');
smo91261v0ar.push(smo91245);
smo91261v0.addTickables(smo91261v0ar)
fmtsmo9126170.joinVoices([smo91261v0]);
const fmtsmo9437770 = new VF.Formatter();
//
// voices and notes for stave 5 70
const smo94377v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo94377v0ar = [];
const smo94358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo94358'] = smo94358;
smo94358.setAttribute('id', 'smo94358');
smo94377v0ar.push(smo94358);
const smo94359 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo94359'] = smo94359;
smo94359.setAttribute('id', 'smo94359');
smo94377v0ar.push(smo94359);
const smo94360 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo94360'] = smo94360;
smo94360.setAttribute('id', 'smo94360');
smo94377v0ar.push(smo94360);
const smo94361 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo94361'] = smo94361;
smo94361.setAttribute('id', 'smo94361');
smo94377v0ar.push(smo94361);
smo94377v0.addTickables(smo94377v0ar)
fmtsmo9437770.joinVoices([smo94377v0]);
const fmtsmo9748070 = new VF.Formatter();
//
// voices and notes for stave 6 70
const smo97480v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo97480v0ar = [];
const smo97464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo97464'] = smo97464;
smo97464.setAttribute('id', 'smo97464');
smo97480v0ar.push(smo97464);
smo97480v0.addTickables(smo97480v0ar)
fmtsmo9748070.joinVoices([smo97480v0]);
const fmtsmo10058970 = new VF.Formatter();
//
// voices and notes for stave 7 70
const smo100589v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100589v0ar = [];
const smo100573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo100573'] = smo100573;
smo100573.setAttribute('id', 'smo100573');
smo100589v0ar.push(smo100573);
smo100589v0.addTickables(smo100589v0ar)
fmtsmo10058970.joinVoices([smo100589v0]);
const fmtsmo10367570 = new VF.Formatter();
//
// voices and notes for stave 8 70
const smo103675v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103675v0ar = [];
const smo103659 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo103659'] = smo103659;
smo103659.setAttribute('id', 'smo103659');
smo103675v0ar.push(smo103659);
smo103675v0.addTickables(smo103675v0ar)
fmtsmo10367570.joinVoices([smo103675v0]);
const fmtsmo10676470 = new VF.Formatter();
//
// voices and notes for stave 9 70
const smo106764v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo106764v0ar = [];
const smo106748 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo106748'] = smo106748;
smo106748.setAttribute('id', 'smo106748');
smo106764v0ar.push(smo106748);
smo106764v0.addTickables(smo106764v0ar)
fmtsmo10676470.joinVoices([smo106764v0]);
const fmtsmo10980470 = new VF.Formatter();
//
// voices and notes for stave 10 70
const smo109804v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo109804v0ar = [];
const smo109788 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo109788'] = smo109788;
smo109788.setAttribute('id', 'smo109788');
smo109804v0ar.push(smo109788);
smo109804v0.addTickables(smo109804v0ar)
fmtsmo10980470.joinVoices([smo109804v0]);
const fmtsmo11285870 = new VF.Formatter();
//
// voices and notes for stave 11 70
const smo112858v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo112858v0ar = [];
const smo112842 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo112842'] = smo112842;
smo112842.setAttribute('id', 'smo112842');
smo112858v0ar.push(smo112842);
smo112858v0.addTickables(smo112858v0ar)
fmtsmo11285870.joinVoices([smo112858v0]);
const fmtsmo11590170 = new VF.Formatter();
//
// voices and notes for stave 12 70
const smo115901v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo115901v0ar = [];
const smo115885 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo115885'] = smo115885;
smo115885.setAttribute('id', 'smo115885');
smo115901v0ar.push(smo115885);
smo115901v0.addTickables(smo115901v0ar)
fmtsmo11590170.joinVoices([smo115901v0]);
const fmtsmo11910070 = new VF.Formatter();
//
// voices and notes for stave 13 70
const smo119100v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo119100v0ar = [];
const smo119084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo119084'] = smo119084;
smo119084.setAttribute('id', 'smo119084');
smo119100v0ar.push(smo119084);
smo119100v0.addTickables(smo119100v0ar)
fmtsmo11910070.joinVoices([smo119100v0]);
const fmtsmo12231370 = new VF.Formatter();
//
// voices and notes for stave 14 70
const smo122313v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo122313v0ar = [];
const smo122297 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo122297'] = smo122297;
smo122297.setAttribute('id', 'smo122297');
smo122313v0ar.push(smo122297);
smo122313v0.addTickables(smo122313v0ar)
fmtsmo12231370.joinVoices([smo122313v0]);
const fmtsmo12550870 = new VF.Formatter();
//
// voices and notes for stave 15 70
const smo125508v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo125508v0ar = [];
const smo125492 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo125492'] = smo125492;
smo125492.setAttribute('id', 'smo125492');
smo125508v0ar.push(smo125492);
smo125508v0.addTickables(smo125508v0ar)
fmtsmo12550870.joinVoices([smo125508v0]);
const fmtsmo12863070 = new VF.Formatter();
//
// voices and notes for stave 16 70
const smo128630v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo128630v0ar = [];
const smo128611 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo128611'] = smo128611;
smo128611.setAttribute('id', 'smo128611');
smo128611.addModifier(new VF.Dot(), 0);
smo128630v0ar.push(smo128611);
const smo128612 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n"]}'))
noteHash['smo128612'] = smo128612;
smo128612.setAttribute('id', 'smo128612');
const smo1286120acc = new VF.Accidental('b');
smo128612.addModifier(smo1286120acc, 0);
smo128630v0ar.push(smo128612);
const smo128613 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n"]}'))
noteHash['smo128613'] = smo128613;
smo128613.setAttribute('id', 'smo128613');
smo128630v0ar.push(smo128613);
const smo128614 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo128614'] = smo128614;
smo128614.setAttribute('id', 'smo128614');
smo128630v0ar.push(smo128614);
smo128630v0.addTickables(smo128630v0ar)
fmtsmo12863070.joinVoices([smo128630v0]);
const fmtsmo13182970 = new VF.Formatter();
//
// voices and notes for stave 17 70
const smo131829v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo131829v0ar = [];
const smo131810 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo131810'] = smo131810;
smo131810.setAttribute('id', 'smo131810');
smo131829v0ar.push(smo131810);
const smo131811 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo131811'] = smo131811;
smo131811.setAttribute('id', 'smo131811');
smo131811.setStyle({ fillStyle: "#ffffff00" });
smo131829v0ar.push(smo131811);
smo131829v0.addTickables(smo131829v0ar)
fmtsmo13182970.joinVoices([smo131829v0]);
const smo131829v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo131829v1ar = [];
const smo131812 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo131812'] = smo131812;
smo131812.setAttribute('id', 'smo131812');
smo131812.setStyle({ fillStyle: '#aaaaaa7f' });
smo131829v1ar.push(smo131812);
const smo131813 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo131813'] = smo131813;
smo131813.setAttribute('id', 'smo131813');
smo131813.setStyle({ fillStyle: "#115511" });
smo131829v1ar.push(smo131813);
smo131829v1.addTickables(smo131829v1ar)
fmtsmo13182970.joinVoices([smo131829v1]);
// create beam groups and tuplets for format grp smo133472 before formatting
 
// formatting measures in staff group smo133472
fmtsmo7898970.format([smo78989v0,smo81982v0,smo85126v0,smo88242v0,smo91261v0], 288);
const stavesmo78989 = new VF.Stave(2341, 210, 302);
stavesmo78989.setAttribute('id', 'stavesmo78989');
stavesmo78989.setBegBarType(VF.Barline.type.NONE);
stavesmo78989.setContext(context);
stavesmo78989.draw();
smo78989v0.draw(context, stavesmo78989);
const stavesmo81982 = new VF.Stave(2341, 316, 302);
stavesmo81982.setAttribute('id', 'stavesmo81982');
stavesmo81982.setBegBarType(VF.Barline.type.NONE);
stavesmo81982.setContext(context);
stavesmo81982.draw();
smo81982v0.draw(context, stavesmo81982);
const stavesmo85126 = new VF.Stave(2341, 437, 302);
stavesmo85126.setAttribute('id', 'stavesmo85126');
stavesmo85126.setBegBarType(VF.Barline.type.NONE);
stavesmo85126.setContext(context);
stavesmo85126.draw();
smo85126v0.draw(context, stavesmo85126);
const stavesmo88242 = new VF.Stave(2341, 553, 302);
stavesmo88242.setAttribute('id', 'stavesmo88242');
stavesmo88242.setBegBarType(VF.Barline.type.NONE);
stavesmo88242.setContext(context);
stavesmo88242.draw();
smo88242v0.draw(context, stavesmo88242);
const stavesmo91261 = new VF.Stave(2341, 659, 302);
stavesmo91261.setAttribute('id', 'stavesmo91261');
stavesmo91261.setBegBarType(VF.Barline.type.NONE);
stavesmo91261.setContext(context);
stavesmo91261.draw();
smo91261v0.draw(context, stavesmo91261);
// create beam groups and tuplets for format grp smo133474 before formatting
 
// formatting measures in staff group smo133474
fmtsmo9437770.format([smo94377v0,smo97480v0,smo100589v0,smo103675v0], 288);
const stavesmo94377 = new VF.Stave(2341, 780, 302);
stavesmo94377.setAttribute('id', 'stavesmo94377');
stavesmo94377.setBegBarType(VF.Barline.type.NONE);
stavesmo94377.setContext(context);
stavesmo94377.draw();
smo94377v0.draw(context, stavesmo94377);
const stavesmo97480 = new VF.Stave(2341, 896, 302);
stavesmo97480.setAttribute('id', 'stavesmo97480');
stavesmo97480.setBegBarType(VF.Barline.type.NONE);
stavesmo97480.setContext(context);
stavesmo97480.draw();
smo97480v0.draw(context, stavesmo97480);
const stavesmo100589 = new VF.Stave(2341, 1012, 302);
stavesmo100589.setAttribute('id', 'stavesmo100589');
stavesmo100589.setBegBarType(VF.Barline.type.NONE);
stavesmo100589.setContext(context);
stavesmo100589.draw();
smo100589v0.draw(context, stavesmo100589);
const stavesmo103675 = new VF.Stave(2341, 1128, 302);
stavesmo103675.setAttribute('id', 'stavesmo103675');
stavesmo103675.setBegBarType(VF.Barline.type.NONE);
stavesmo103675.setContext(context);
stavesmo103675.draw();
smo103675v0.draw(context, stavesmo103675);
// create beam groups and tuplets for format grp smo133476 before formatting
 
// formatting measures in staff group smo133476
fmtsmo10676470.format([smo106764v0,smo109804v0,smo112858v0,smo115901v0], 288);
const stavesmo106764 = new VF.Stave(2341, 1264, 302);
stavesmo106764.setAttribute('id', 'stavesmo106764');
stavesmo106764.setBegBarType(VF.Barline.type.NONE);
stavesmo106764.setContext(context);
stavesmo106764.draw();
smo106764v0.draw(context, stavesmo106764);
const stavesmo109804 = new VF.Stave(2341, 1400, 302);
stavesmo109804.setAttribute('id', 'stavesmo109804');
stavesmo109804.setBegBarType(VF.Barline.type.NONE);
stavesmo109804.setContext(context);
stavesmo109804.draw();
smo109804v0.draw(context, stavesmo109804);
const stavesmo112858 = new VF.Stave(2341, 1536, 302);
stavesmo112858.setAttribute('id', 'stavesmo112858');
stavesmo112858.setBegBarType(VF.Barline.type.NONE);
stavesmo112858.setContext(context);
stavesmo112858.draw();
smo112858v0.draw(context, stavesmo112858);
const stavesmo115901 = new VF.Stave(2341, 1672, 302);
stavesmo115901.setAttribute('id', 'stavesmo115901');
stavesmo115901.setBegBarType(VF.Barline.type.NONE);
stavesmo115901.setContext(context);
stavesmo115901.draw();
smo115901v0.draw(context, stavesmo115901);
// create beam groups and tuplets for format grp smo120795 before formatting
 
// formatting measures in staff group smo120795
fmtsmo11910070.format([smo119100v0], 288);
const stavesmo119100 = new VF.Stave(2341, 1818, 302);
stavesmo119100.setAttribute('id', 'stavesmo119100');
stavesmo119100.setBegBarType(VF.Barline.type.NONE);
stavesmo119100.setContext(context);
stavesmo119100.draw();
smo119100v0.draw(context, stavesmo119100);
// create beam groups and tuplets for format grp smo133470 before formatting
 
// formatting measures in staff group smo133470
fmtsmo12231370.format([smo122313v0,smo125508v0], 288);
const stavesmo122313 = new VF.Stave(2341, 1924, 302);
stavesmo122313.setAttribute('id', 'stavesmo122313');
stavesmo122313.setBegBarType(VF.Barline.type.NONE);
stavesmo122313.setContext(context);
stavesmo122313.draw();
smo122313v0.draw(context, stavesmo122313);
const stavesmo125508 = new VF.Stave(2341, 2010, 302);
stavesmo125508.setAttribute('id', 'stavesmo125508');
stavesmo125508.setBegBarType(VF.Barline.type.NONE);
stavesmo125508.setContext(context);
stavesmo125508.draw();
smo125508v0.draw(context, stavesmo125508);
// create beam groups and tuplets for format grp smo130308 before formatting
 
// formatting measures in staff group smo130308
fmtsmo12863070.format([smo128630v0], 288);
const stavesmo128630 = new VF.Stave(2341, 2081, 302);
stavesmo128630.setAttribute('id', 'stavesmo128630');
stavesmo128630.setBegBarType(VF.Barline.type.NONE);
stavesmo128630.setContext(context);
stavesmo128630.draw();
smo128630v0.draw(context, stavesmo128630);
// create beam groups and tuplets for format grp smo133464 before formatting
 
// formatting measures in staff group smo133464
fmtsmo13182970.format([smo131829v0,smo131829v1], 288);
const stavesmo131829 = new VF.Stave(2341, 2152, 302);
stavesmo131829.setAttribute('id', 'stavesmo131829');
stavesmo131829.setBegBarType(VF.Barline.type.NONE);
stavesmo131829.setContext(context);
stavesmo131829.draw();
smo131829v0.draw(context, stavesmo131829);
smo131829v1.draw(context, stavesmo131829);
const fmtsmo7901471 = new VF.Formatter();
//
// voices and notes for stave 0 71
const smo79014v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo79014v0ar = [];
const smo78990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo78990'] = smo78990;
smo78990.setAttribute('id', 'smo78990');
smo79014v0ar.push(smo78990);
const smo78991 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo78991'] = smo78991;
smo78991.setAttribute('id', 'smo78991');
smo79014v0ar.push(smo78991);
const smo78992 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo78992'] = smo78992;
smo78992.setAttribute('id', 'smo78992');
const smo78993 = new VF.Annotation('Ki');
smo78993.setAttribute('id', 'smo78993');
smo78993.setFont('times', 12, 'normal');
smo78993.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo78992.addModifier(smo78993);
smo78993.addClass('lyric lyric-0 lyric-hyphen');
smo79014v0ar.push(smo78992);
const smo78994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo78994'] = smo78994;
smo78994.setAttribute('id', 'smo78994');
smo79014v0ar.push(smo78994);
const smo78995 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo78995'] = smo78995;
smo78995.setAttribute('id', 'smo78995');
const smo78996 = new VF.Annotation('ki');
smo78996.setAttribute('id', 'smo78996');
smo78996.setFont('times', 12, 'normal');
smo78996.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo78995.addModifier(smo78996);
smo78996.addClass('lyric lyric-0 lyric-hyphen');
smo79014v0ar.push(smo78995);
const smo78997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo78997'] = smo78997;
smo78997.setAttribute('id', 'smo78997');
const smo78998 = new VF.Annotation('ri');
smo78998.setAttribute('id', 'smo78998');
smo78998.setFont('times', 12, 'normal');
smo78998.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo78997.addModifier(smo78998);
smo78998.addClass('lyric lyric-0');
smo79014v0ar.push(smo78997);
smo79014v0.addTickables(smo79014v0ar)
fmtsmo7901471.joinVoices([smo79014v0]);
const fmtsmo8200771 = new VF.Formatter();
//
// voices and notes for stave 1 71
const smo82007v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo82007v0ar = [];
const smo81983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo81983'] = smo81983;
smo81983.setAttribute('id', 'smo81983');
smo82007v0ar.push(smo81983);
const smo81984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo81984'] = smo81984;
smo81984.setAttribute('id', 'smo81984');
smo82007v0ar.push(smo81984);
const smo81985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo81985'] = smo81985;
smo81985.setAttribute('id', 'smo81985');
const smo81986 = new VF.Annotation('Ki');
smo81986.setAttribute('id', 'smo81986');
smo81986.setFont('times', 12, 'normal');
smo81986.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo81985.addModifier(smo81986);
smo81986.addClass('lyric lyric-0 lyric-hyphen');
smo82007v0ar.push(smo81985);
const smo81987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo81987'] = smo81987;
smo81987.setAttribute('id', 'smo81987');
smo82007v0ar.push(smo81987);
const smo81988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo81988'] = smo81988;
smo81988.setAttribute('id', 'smo81988');
const smo81989 = new VF.Annotation('ki');
smo81989.setAttribute('id', 'smo81989');
smo81989.setFont('times', 12, 'normal');
smo81989.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo81988.addModifier(smo81989);
smo81989.addClass('lyric lyric-0 lyric-hyphen');
smo82007v0ar.push(smo81988);
const smo81990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo81990'] = smo81990;
smo81990.setAttribute('id', 'smo81990');
const smo81991 = new VF.Annotation('ri');
smo81991.setAttribute('id', 'smo81991');
smo81991.setFont('times', 12, 'normal');
smo81991.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo81990.addModifier(smo81991);
smo81991.addClass('lyric lyric-0');
smo82007v0ar.push(smo81990);
smo82007v0.addTickables(smo82007v0ar)
fmtsmo8200771.joinVoices([smo82007v0]);
const fmtsmo8515171 = new VF.Formatter();
//
// voices and notes for stave 2 71
const smo85151v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo85151v0ar = [];
const smo85127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo85127'] = smo85127;
smo85127.setAttribute('id', 'smo85127');
smo85151v0ar.push(smo85127);
const smo85128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo85128'] = smo85128;
smo85128.setAttribute('id', 'smo85128');
smo85151v0ar.push(smo85128);
const smo85129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo85129'] = smo85129;
smo85129.setAttribute('id', 'smo85129');
const smo85130 = new VF.Annotation('Ki');
smo85130.setAttribute('id', 'smo85130');
smo85130.setFont('times', 12, 'normal');
smo85130.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo85129.addModifier(smo85130);
smo85130.addClass('lyric lyric-0 lyric-hyphen');
smo85151v0ar.push(smo85129);
const smo85131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo85131'] = smo85131;
smo85131.setAttribute('id', 'smo85131');
smo85151v0ar.push(smo85131);
const smo85132 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo85132'] = smo85132;
smo85132.setAttribute('id', 'smo85132');
const smo85133 = new VF.Annotation('ki');
smo85133.setAttribute('id', 'smo85133');
smo85133.setFont('times', 12, 'normal');
smo85133.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo85132.addModifier(smo85133);
smo85133.addClass('lyric lyric-0 lyric-hyphen');
smo85151v0ar.push(smo85132);
const smo85134 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo85134'] = smo85134;
smo85134.setAttribute('id', 'smo85134');
const smo85135 = new VF.Annotation('ri');
smo85135.setAttribute('id', 'smo85135');
smo85135.setFont('times', 12, 'normal');
smo85135.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo85134.addModifier(smo85135);
smo85135.addClass('lyric lyric-0');
smo85151v0ar.push(smo85134);
smo85151v0.addTickables(smo85151v0ar)
fmtsmo8515171.joinVoices([smo85151v0]);
const fmtsmo8826771 = new VF.Formatter();
//
// voices and notes for stave 3 71
const smo88267v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo88267v0ar = [];
const smo88243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo88243'] = smo88243;
smo88243.setAttribute('id', 'smo88243');
smo88267v0ar.push(smo88243);
const smo88244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo88244'] = smo88244;
smo88244.setAttribute('id', 'smo88244');
smo88267v0ar.push(smo88244);
const smo88245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo88245'] = smo88245;
smo88245.setAttribute('id', 'smo88245');
const smo88246 = new VF.Annotation('Ki');
smo88246.setAttribute('id', 'smo88246');
smo88246.setFont('times', 12, 'normal');
smo88246.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo88245.addModifier(smo88246);
smo88246.addClass('lyric lyric-0 lyric-hyphen');
smo88267v0ar.push(smo88245);
const smo88247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo88247'] = smo88247;
smo88247.setAttribute('id', 'smo88247');
smo88267v0ar.push(smo88247);
const smo88248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo88248'] = smo88248;
smo88248.setAttribute('id', 'smo88248');
const smo88249 = new VF.Annotation('ki');
smo88249.setAttribute('id', 'smo88249');
smo88249.setFont('times', 12, 'normal');
smo88249.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo88248.addModifier(smo88249);
smo88249.addClass('lyric lyric-0 lyric-hyphen');
smo88267v0ar.push(smo88248);
const smo88250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo88250'] = smo88250;
smo88250.setAttribute('id', 'smo88250');
const smo88251 = new VF.Annotation('ri');
smo88251.setAttribute('id', 'smo88251');
smo88251.setFont('times', 12, 'normal');
smo88251.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo88250.addModifier(smo88251);
smo88251.addClass('lyric lyric-0');
smo88267v0ar.push(smo88250);
smo88267v0.addTickables(smo88267v0ar)
fmtsmo8826771.joinVoices([smo88267v0]);
const fmtsmo9128671 = new VF.Formatter();
//
// voices and notes for stave 4 71
const smo91286v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo91286v0ar = [];
const smo91262 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo91262'] = smo91262;
smo91262.setAttribute('id', 'smo91262');
smo91286v0ar.push(smo91262);
const smo91263 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo91263'] = smo91263;
smo91263.setAttribute('id', 'smo91263');
smo91286v0ar.push(smo91263);
const smo91264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo91264'] = smo91264;
smo91264.setAttribute('id', 'smo91264');
const smo91265 = new VF.Annotation('Ki');
smo91265.setAttribute('id', 'smo91265');
smo91265.setFont('times', 12, 'normal');
smo91265.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo91264.addModifier(smo91265);
smo91265.addClass('lyric lyric-0 lyric-hyphen');
smo91286v0ar.push(smo91264);
const smo91266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo91266'] = smo91266;
smo91266.setAttribute('id', 'smo91266');
smo91286v0ar.push(smo91266);
const smo91267 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo91267'] = smo91267;
smo91267.setAttribute('id', 'smo91267');
const smo91268 = new VF.Annotation('ki');
smo91268.setAttribute('id', 'smo91268');
smo91268.setFont('times', 12, 'normal');
smo91268.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo91267.addModifier(smo91268);
smo91268.addClass('lyric lyric-0 lyric-hyphen');
smo91286v0ar.push(smo91267);
const smo91269 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo91269'] = smo91269;
smo91269.setAttribute('id', 'smo91269');
const smo91270 = new VF.Annotation('ri');
smo91270.setAttribute('id', 'smo91270');
smo91270.setFont('times', 12, 'normal');
smo91270.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo91269.addModifier(smo91270);
smo91270.addClass('lyric lyric-0');
smo91286v0ar.push(smo91269);
smo91286v0.addTickables(smo91286v0ar)
fmtsmo9128671.joinVoices([smo91286v0]);
const fmtsmo9440271 = new VF.Formatter();
//
// voices and notes for stave 5 71
const smo94402v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo94402v0ar = [];
const smo94378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo94378'] = smo94378;
smo94378.setAttribute('id', 'smo94378');
smo94402v0ar.push(smo94378);
const smo94379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo94379'] = smo94379;
smo94379.setAttribute('id', 'smo94379');
smo94402v0ar.push(smo94379);
const smo94380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo94380'] = smo94380;
smo94380.setAttribute('id', 'smo94380');
const smo94381 = new VF.Annotation('Ki');
smo94381.setAttribute('id', 'smo94381');
smo94381.setFont('times', 12, 'normal');
smo94381.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo94380.addModifier(smo94381);
smo94381.addClass('lyric lyric-0 lyric-hyphen');
smo94402v0ar.push(smo94380);
const smo94382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo94382'] = smo94382;
smo94382.setAttribute('id', 'smo94382');
smo94402v0ar.push(smo94382);
const smo94383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo94383'] = smo94383;
smo94383.setAttribute('id', 'smo94383');
const smo94384 = new VF.Annotation('ki');
smo94384.setAttribute('id', 'smo94384');
smo94384.setFont('times', 12, 'normal');
smo94384.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo94383.addModifier(smo94384);
smo94384.addClass('lyric lyric-0 lyric-hyphen');
smo94402v0ar.push(smo94383);
const smo94385 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo94385'] = smo94385;
smo94385.setAttribute('id', 'smo94385');
const smo94386 = new VF.Annotation('ri');
smo94386.setAttribute('id', 'smo94386');
smo94386.setFont('times', 12, 'normal');
smo94386.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo94385.addModifier(smo94386);
smo94386.addClass('lyric lyric-0');
smo94402v0ar.push(smo94385);
smo94402v0.addTickables(smo94402v0ar)
fmtsmo9440271.joinVoices([smo94402v0]);
const fmtsmo9750571 = new VF.Formatter();
//
// voices and notes for stave 6 71
const smo97505v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo97505v0ar = [];
const smo97481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo97481'] = smo97481;
smo97481.setAttribute('id', 'smo97481');
smo97505v0ar.push(smo97481);
const smo97482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo97482'] = smo97482;
smo97482.setAttribute('id', 'smo97482');
smo97505v0ar.push(smo97482);
const smo97483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo97483'] = smo97483;
smo97483.setAttribute('id', 'smo97483');
const smo97484 = new VF.Annotation('Ki');
smo97484.setAttribute('id', 'smo97484');
smo97484.setFont('times', 12, 'normal');
smo97484.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo97483.addModifier(smo97484);
smo97484.addClass('lyric lyric-0 lyric-hyphen');
smo97505v0ar.push(smo97483);
const smo97485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo97485'] = smo97485;
smo97485.setAttribute('id', 'smo97485');
smo97505v0ar.push(smo97485);
const smo97486 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo97486'] = smo97486;
smo97486.setAttribute('id', 'smo97486');
const smo97487 = new VF.Annotation('ki');
smo97487.setAttribute('id', 'smo97487');
smo97487.setFont('times', 12, 'normal');
smo97487.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo97486.addModifier(smo97487);
smo97487.addClass('lyric lyric-0 lyric-hyphen');
smo97505v0ar.push(smo97486);
const smo97488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo97488'] = smo97488;
smo97488.setAttribute('id', 'smo97488');
const smo97489 = new VF.Annotation('ri');
smo97489.setAttribute('id', 'smo97489');
smo97489.setFont('times', 12, 'normal');
smo97489.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo97488.addModifier(smo97489);
smo97489.addClass('lyric lyric-0');
smo97505v0ar.push(smo97488);
smo97505v0.addTickables(smo97505v0ar)
fmtsmo9750571.joinVoices([smo97505v0]);
const fmtsmo10061471 = new VF.Formatter();
//
// voices and notes for stave 7 71
const smo100614v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100614v0ar = [];
const smo100590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo100590'] = smo100590;
smo100590.setAttribute('id', 'smo100590');
smo100614v0ar.push(smo100590);
const smo100591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo100591'] = smo100591;
smo100591.setAttribute('id', 'smo100591');
smo100614v0ar.push(smo100591);
const smo100592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo100592'] = smo100592;
smo100592.setAttribute('id', 'smo100592');
const smo100593 = new VF.Annotation('Ki');
smo100593.setAttribute('id', 'smo100593');
smo100593.setFont('times', 12, 'normal');
smo100593.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo100592.addModifier(smo100593);
smo100593.addClass('lyric lyric-0 lyric-hyphen');
smo100614v0ar.push(smo100592);
const smo100594 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo100594'] = smo100594;
smo100594.setAttribute('id', 'smo100594');
smo100614v0ar.push(smo100594);
const smo100595 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo100595'] = smo100595;
smo100595.setAttribute('id', 'smo100595');
const smo100596 = new VF.Annotation('ki');
smo100596.setAttribute('id', 'smo100596');
smo100596.setFont('times', 12, 'normal');
smo100596.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo100595.addModifier(smo100596);
smo100596.addClass('lyric lyric-0 lyric-hyphen');
smo100614v0ar.push(smo100595);
const smo100597 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo100597'] = smo100597;
smo100597.setAttribute('id', 'smo100597');
const smo100598 = new VF.Annotation('ri');
smo100598.setAttribute('id', 'smo100598');
smo100598.setFont('times', 12, 'normal');
smo100598.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo100597.addModifier(smo100598);
smo100598.addClass('lyric lyric-0');
smo100614v0ar.push(smo100597);
smo100614v0.addTickables(smo100614v0ar)
fmtsmo10061471.joinVoices([smo100614v0]);
const fmtsmo10370071 = new VF.Formatter();
//
// voices and notes for stave 8 71
const smo103700v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103700v0ar = [];
const smo103676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo103676'] = smo103676;
smo103676.setAttribute('id', 'smo103676');
smo103700v0ar.push(smo103676);
const smo103677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo103677'] = smo103677;
smo103677.setAttribute('id', 'smo103677');
smo103700v0ar.push(smo103677);
const smo103678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo103678'] = smo103678;
smo103678.setAttribute('id', 'smo103678');
const smo103679 = new VF.Annotation('Ki');
smo103679.setAttribute('id', 'smo103679');
smo103679.setFont('times', 12, 'normal');
smo103679.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo103678.addModifier(smo103679);
smo103679.addClass('lyric lyric-0 lyric-hyphen');
smo103700v0ar.push(smo103678);
const smo103680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo103680'] = smo103680;
smo103680.setAttribute('id', 'smo103680');
smo103700v0ar.push(smo103680);
const smo103681 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo103681'] = smo103681;
smo103681.setAttribute('id', 'smo103681');
const smo103682 = new VF.Annotation('ki');
smo103682.setAttribute('id', 'smo103682');
smo103682.setFont('times', 12, 'normal');
smo103682.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo103681.addModifier(smo103682);
smo103682.addClass('lyric lyric-0 lyric-hyphen');
smo103700v0ar.push(smo103681);
const smo103683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo103683'] = smo103683;
smo103683.setAttribute('id', 'smo103683');
const smo103684 = new VF.Annotation('ri');
smo103684.setAttribute('id', 'smo103684');
smo103684.setFont('times', 12, 'normal');
smo103684.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo103683.addModifier(smo103684);
smo103684.addClass('lyric lyric-0');
smo103700v0ar.push(smo103683);
smo103700v0.addTickables(smo103700v0ar)
fmtsmo10370071.joinVoices([smo103700v0]);
const fmtsmo10678971 = new VF.Formatter();
//
// voices and notes for stave 9 71
const smo106789v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo106789v0ar = [];
const smo106765 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo106765'] = smo106765;
smo106765.setAttribute('id', 'smo106765');
smo106789v0ar.push(smo106765);
const smo106766 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo106766'] = smo106766;
smo106766.setAttribute('id', 'smo106766');
smo106789v0ar.push(smo106766);
const smo106767 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo106767'] = smo106767;
smo106767.setAttribute('id', 'smo106767');
const smo106768 = new VF.Annotation('Ki');
smo106768.setAttribute('id', 'smo106768');
smo106768.setFont('times', 12, 'normal');
smo106768.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo106767.addModifier(smo106768);
smo106768.addClass('lyric lyric-0 lyric-hyphen');
smo106789v0ar.push(smo106767);
const smo106769 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo106769'] = smo106769;
smo106769.setAttribute('id', 'smo106769');
smo106789v0ar.push(smo106769);
const smo106770 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo106770'] = smo106770;
smo106770.setAttribute('id', 'smo106770');
const smo106771 = new VF.Annotation('ki');
smo106771.setAttribute('id', 'smo106771');
smo106771.setFont('times', 12, 'normal');
smo106771.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo106770.addModifier(smo106771);
smo106771.addClass('lyric lyric-0 lyric-hyphen');
smo106789v0ar.push(smo106770);
const smo106772 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo106772'] = smo106772;
smo106772.setAttribute('id', 'smo106772');
const smo106773 = new VF.Annotation('ri');
smo106773.setAttribute('id', 'smo106773');
smo106773.setFont('times', 12, 'normal');
smo106773.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo106772.addModifier(smo106773);
smo106773.addClass('lyric lyric-0');
smo106789v0ar.push(smo106772);
smo106789v0.addTickables(smo106789v0ar)
fmtsmo10678971.joinVoices([smo106789v0]);
const fmtsmo10982971 = new VF.Formatter();
//
// voices and notes for stave 10 71
const smo109829v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo109829v0ar = [];
const smo109805 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo109805'] = smo109805;
smo109805.setAttribute('id', 'smo109805');
smo109829v0ar.push(smo109805);
const smo109806 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo109806'] = smo109806;
smo109806.setAttribute('id', 'smo109806');
smo109829v0ar.push(smo109806);
const smo109807 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo109807'] = smo109807;
smo109807.setAttribute('id', 'smo109807');
const smo109808 = new VF.Annotation('Ki');
smo109808.setAttribute('id', 'smo109808');
smo109808.setFont('times', 12, 'normal');
smo109808.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo109807.addModifier(smo109808);
smo109808.addClass('lyric lyric-0 lyric-hyphen');
smo109829v0ar.push(smo109807);
const smo109809 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo109809'] = smo109809;
smo109809.setAttribute('id', 'smo109809');
smo109829v0ar.push(smo109809);
const smo109810 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo109810'] = smo109810;
smo109810.setAttribute('id', 'smo109810');
const smo109811 = new VF.Annotation('ki');
smo109811.setAttribute('id', 'smo109811');
smo109811.setFont('times', 12, 'normal');
smo109811.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo109810.addModifier(smo109811);
smo109811.addClass('lyric lyric-0 lyric-hyphen');
smo109829v0ar.push(smo109810);
const smo109812 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo109812'] = smo109812;
smo109812.setAttribute('id', 'smo109812');
const smo109813 = new VF.Annotation('ri');
smo109813.setAttribute('id', 'smo109813');
smo109813.setFont('times', 12, 'normal');
smo109813.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo109812.addModifier(smo109813);
smo109813.addClass('lyric lyric-0');
smo109829v0ar.push(smo109812);
smo109829v0.addTickables(smo109829v0ar)
fmtsmo10982971.joinVoices([smo109829v0]);
const fmtsmo11288371 = new VF.Formatter();
//
// voices and notes for stave 11 71
const smo112883v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo112883v0ar = [];
const smo112859 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo112859'] = smo112859;
smo112859.setAttribute('id', 'smo112859');
smo112883v0ar.push(smo112859);
const smo112860 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo112860'] = smo112860;
smo112860.setAttribute('id', 'smo112860');
smo112883v0ar.push(smo112860);
const smo112861 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo112861'] = smo112861;
smo112861.setAttribute('id', 'smo112861');
const smo112862 = new VF.Annotation('Ki');
smo112862.setAttribute('id', 'smo112862');
smo112862.setFont('times', 12, 'normal');
smo112862.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo112861.addModifier(smo112862);
smo112862.addClass('lyric lyric-0 lyric-hyphen');
smo112883v0ar.push(smo112861);
const smo112863 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo112863'] = smo112863;
smo112863.setAttribute('id', 'smo112863');
smo112883v0ar.push(smo112863);
const smo112864 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo112864'] = smo112864;
smo112864.setAttribute('id', 'smo112864');
const smo112865 = new VF.Annotation('ki');
smo112865.setAttribute('id', 'smo112865');
smo112865.setFont('times', 12, 'normal');
smo112865.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo112864.addModifier(smo112865);
smo112865.addClass('lyric lyric-0 lyric-hyphen');
smo112883v0ar.push(smo112864);
const smo112866 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo112866'] = smo112866;
smo112866.setAttribute('id', 'smo112866');
const smo112867 = new VF.Annotation('ri');
smo112867.setAttribute('id', 'smo112867');
smo112867.setFont('times', 12, 'normal');
smo112867.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo112866.addModifier(smo112867);
smo112867.addClass('lyric lyric-0');
smo112883v0ar.push(smo112866);
smo112883v0.addTickables(smo112883v0ar)
fmtsmo11288371.joinVoices([smo112883v0]);
const fmtsmo11592671 = new VF.Formatter();
//
// voices and notes for stave 12 71
const smo115926v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo115926v0ar = [];
const smo115902 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo115902'] = smo115902;
smo115902.setAttribute('id', 'smo115902');
smo115926v0ar.push(smo115902);
const smo115903 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo115903'] = smo115903;
smo115903.setAttribute('id', 'smo115903');
smo115926v0ar.push(smo115903);
const smo115904 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo115904'] = smo115904;
smo115904.setAttribute('id', 'smo115904');
const smo115905 = new VF.Annotation('Ki');
smo115905.setAttribute('id', 'smo115905');
smo115905.setFont('times', 12, 'normal');
smo115905.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo115904.addModifier(smo115905);
smo115905.addClass('lyric lyric-0 lyric-hyphen');
smo115926v0ar.push(smo115904);
const smo115906 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo115906'] = smo115906;
smo115906.setAttribute('id', 'smo115906');
smo115926v0ar.push(smo115906);
const smo115907 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo115907'] = smo115907;
smo115907.setAttribute('id', 'smo115907');
const smo115908 = new VF.Annotation('ki');
smo115908.setAttribute('id', 'smo115908');
smo115908.setFont('times', 12, 'normal');
smo115908.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo115907.addModifier(smo115908);
smo115908.addClass('lyric lyric-0 lyric-hyphen');
smo115926v0ar.push(smo115907);
const smo115909 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo115909'] = smo115909;
smo115909.setAttribute('id', 'smo115909');
const smo115910 = new VF.Annotation('ri');
smo115910.setAttribute('id', 'smo115910');
smo115910.setFont('times', 12, 'normal');
smo115910.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo115909.addModifier(smo115910);
smo115910.addClass('lyric lyric-0');
smo115926v0ar.push(smo115909);
smo115926v0.addTickables(smo115926v0ar)
fmtsmo11592671.joinVoices([smo115926v0]);
const fmtsmo11911771 = new VF.Formatter();
//
// voices and notes for stave 13 71
const smo119117v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo119117v0ar = [];
const smo119101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo119101'] = smo119101;
smo119101.setAttribute('id', 'smo119101');
smo119117v0ar.push(smo119101);
smo119117v0.addTickables(smo119117v0ar)
fmtsmo11911771.joinVoices([smo119117v0]);
const fmtsmo12233071 = new VF.Formatter();
//
// voices and notes for stave 14 71
const smo122330v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo122330v0ar = [];
const smo122314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo122314'] = smo122314;
smo122314.setAttribute('id', 'smo122314');
smo122330v0ar.push(smo122314);
smo122330v0.addTickables(smo122330v0ar)
fmtsmo12233071.joinVoices([smo122330v0]);
const fmtsmo12552571 = new VF.Formatter();
//
// voices and notes for stave 15 71
const smo125525v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo125525v0ar = [];
const smo125509 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo125509'] = smo125509;
smo125509.setAttribute('id', 'smo125509');
smo125525v0ar.push(smo125509);
smo125525v0.addTickables(smo125525v0ar)
fmtsmo12552571.joinVoices([smo125525v0]);
const fmtsmo12865071 = new VF.Formatter();
//
// voices and notes for stave 16 71
const smo128650v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo128650v0ar = [];
const smo128631 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo128631'] = smo128631;
smo128631.setAttribute('id', 'smo128631');
smo128650v0ar.push(smo128631);
const smo128632 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo128632'] = smo128632;
smo128632.setAttribute('id', 'smo128632');
smo128650v0ar.push(smo128632);
const smo128633 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo128633'] = smo128633;
smo128633.setAttribute('id', 'smo128633');
smo128650v0ar.push(smo128633);
const smo128634 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo128634'] = smo128634;
smo128634.setAttribute('id', 'smo128634');
smo128650v0ar.push(smo128634);
smo128650v0.addTickables(smo128650v0ar)
fmtsmo12865071.joinVoices([smo128650v0]);
const fmtsmo13184971 = new VF.Formatter();
//
// voices and notes for stave 17 71
const smo131849v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo131849v0ar = [];
const smo131830 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo131830'] = smo131830;
smo131830.setAttribute('id', 'smo131830');
smo131849v0ar.push(smo131830);
const smo131831 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo131831'] = smo131831;
smo131831.setAttribute('id', 'smo131831');
smo131831.setStyle({ fillStyle: "#ffffff00" });
smo131849v0ar.push(smo131831);
smo131849v0.addTickables(smo131849v0ar)
fmtsmo13184971.joinVoices([smo131849v0]);
const smo131849v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo131849v1ar = [];
const smo131832 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo131832'] = smo131832;
smo131832.setAttribute('id', 'smo131832');
smo131832.setStyle({ fillStyle: '#aaaaaa7f' });
smo131849v1ar.push(smo131832);
const smo131833 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo131833'] = smo131833;
smo131833.setAttribute('id', 'smo131833');
smo131833.setStyle({ fillStyle: "#115511" });
smo131849v1ar.push(smo131833);
smo131849v1.addTickables(smo131849v1ar)
fmtsmo13184971.joinVoices([smo131849v1]);
// create beam groups and tuplets for format grp smo133472 before formatting
const dirsmo225140 = smo78992.getStemDirection();
smo78992.setStemDirection(dirsmo225140);
smo78994.setStemDirection(dirsmo225140);
const smo225140 = new VF.Beam([smo78992,smo78994]);
const dirsmo225143 = smo81985.getStemDirection();
smo81985.setStemDirection(dirsmo225143);
smo81987.setStemDirection(dirsmo225143);
const smo225143 = new VF.Beam([smo81985,smo81987]);
const dirsmo225146 = smo85129.getStemDirection();
smo85129.setStemDirection(dirsmo225146);
smo85131.setStemDirection(dirsmo225146);
const smo225146 = new VF.Beam([smo85129,smo85131]);
const dirsmo225149 = smo88245.getStemDirection();
smo88245.setStemDirection(dirsmo225149);
smo88247.setStemDirection(dirsmo225149);
const smo225149 = new VF.Beam([smo88245,smo88247]);
const dirsmo225152 = smo91264.getStemDirection();
smo91264.setStemDirection(dirsmo225152);
smo91266.setStemDirection(dirsmo225152);
const smo225152 = new VF.Beam([smo91264,smo91266]);
 
// formatting measures in staff group smo133472
fmtsmo7901471.format([smo79014v0,smo82007v0,smo85151v0,smo88267v0,smo91286v0], 288);
const stavesmo79014 = new VF.Stave(2643, 210, 302);
stavesmo79014.setAttribute('id', 'stavesmo79014');
stavesmo79014.setBegBarType(VF.Barline.type.NONE);
stavesmo79014.setContext(context);
stavesmo79014.draw();
smo79014v0.draw(context, stavesmo79014);
smo225140.setContext(context);
smo225140.draw();
const stavesmo82007 = new VF.Stave(2643, 316, 302);
stavesmo82007.setAttribute('id', 'stavesmo82007');
stavesmo82007.setBegBarType(VF.Barline.type.NONE);
stavesmo82007.setContext(context);
stavesmo82007.draw();
smo82007v0.draw(context, stavesmo82007);
smo225143.setContext(context);
smo225143.draw();
const stavesmo85151 = new VF.Stave(2643, 437, 302);
stavesmo85151.setAttribute('id', 'stavesmo85151');
stavesmo85151.setBegBarType(VF.Barline.type.NONE);
stavesmo85151.setContext(context);
stavesmo85151.draw();
smo85151v0.draw(context, stavesmo85151);
smo225146.setContext(context);
smo225146.draw();
const stavesmo88267 = new VF.Stave(2643, 553, 302);
stavesmo88267.setAttribute('id', 'stavesmo88267');
stavesmo88267.setBegBarType(VF.Barline.type.NONE);
stavesmo88267.setContext(context);
stavesmo88267.draw();
smo88267v0.draw(context, stavesmo88267);
smo225149.setContext(context);
smo225149.draw();
const stavesmo91286 = new VF.Stave(2643, 659, 302);
stavesmo91286.setAttribute('id', 'stavesmo91286');
stavesmo91286.setBegBarType(VF.Barline.type.NONE);
stavesmo91286.setContext(context);
stavesmo91286.draw();
smo91286v0.draw(context, stavesmo91286);
smo225152.setContext(context);
smo225152.draw();
// create beam groups and tuplets for format grp smo133474 before formatting
const dirsmo225155 = smo94380.getStemDirection();
smo94380.setStemDirection(dirsmo225155);
smo94382.setStemDirection(dirsmo225155);
const smo225155 = new VF.Beam([smo94380,smo94382]);
const dirsmo225158 = smo97483.getStemDirection();
smo97483.setStemDirection(dirsmo225158);
smo97485.setStemDirection(dirsmo225158);
const smo225158 = new VF.Beam([smo97483,smo97485]);
const dirsmo225161 = smo100592.getStemDirection();
smo100592.setStemDirection(dirsmo225161);
smo100594.setStemDirection(dirsmo225161);
const smo225161 = new VF.Beam([smo100592,smo100594]);
const dirsmo225164 = smo103678.getStemDirection();
smo103678.setStemDirection(dirsmo225164);
smo103680.setStemDirection(dirsmo225164);
const smo225164 = new VF.Beam([smo103678,smo103680]);
 
// formatting measures in staff group smo133474
fmtsmo9440271.format([smo94402v0,smo97505v0,smo100614v0,smo103700v0], 288);
const stavesmo94402 = new VF.Stave(2643, 780, 302);
stavesmo94402.setAttribute('id', 'stavesmo94402');
stavesmo94402.setBegBarType(VF.Barline.type.NONE);
stavesmo94402.setContext(context);
stavesmo94402.draw();
smo94402v0.draw(context, stavesmo94402);
smo225155.setContext(context);
smo225155.draw();
const stavesmo97505 = new VF.Stave(2643, 896, 302);
stavesmo97505.setAttribute('id', 'stavesmo97505');
stavesmo97505.setBegBarType(VF.Barline.type.NONE);
stavesmo97505.setContext(context);
stavesmo97505.draw();
smo97505v0.draw(context, stavesmo97505);
smo225158.setContext(context);
smo225158.draw();
const stavesmo100614 = new VF.Stave(2643, 1012, 302);
stavesmo100614.setAttribute('id', 'stavesmo100614');
stavesmo100614.setBegBarType(VF.Barline.type.NONE);
stavesmo100614.setContext(context);
stavesmo100614.draw();
smo100614v0.draw(context, stavesmo100614);
smo225161.setContext(context);
smo225161.draw();
const stavesmo103700 = new VF.Stave(2643, 1128, 302);
stavesmo103700.setAttribute('id', 'stavesmo103700');
stavesmo103700.setBegBarType(VF.Barline.type.NONE);
stavesmo103700.setContext(context);
stavesmo103700.draw();
smo103700v0.draw(context, stavesmo103700);
smo225164.setContext(context);
smo225164.draw();
// create beam groups and tuplets for format grp smo133476 before formatting
const dirsmo225167 = smo106767.getStemDirection();
smo106767.setStemDirection(dirsmo225167);
smo106769.setStemDirection(dirsmo225167);
const smo225167 = new VF.Beam([smo106767,smo106769]);
const dirsmo225170 = smo109807.getStemDirection();
smo109807.setStemDirection(dirsmo225170);
smo109809.setStemDirection(dirsmo225170);
const smo225170 = new VF.Beam([smo109807,smo109809]);
const dirsmo225173 = smo112861.getStemDirection();
smo112861.setStemDirection(dirsmo225173);
smo112863.setStemDirection(dirsmo225173);
const smo225173 = new VF.Beam([smo112861,smo112863]);
const dirsmo225176 = smo115904.getStemDirection();
smo115904.setStemDirection(dirsmo225176);
smo115906.setStemDirection(dirsmo225176);
const smo225176 = new VF.Beam([smo115904,smo115906]);
 
// formatting measures in staff group smo133476
fmtsmo10678971.format([smo106789v0,smo109829v0,smo112883v0,smo115926v0], 288);
const stavesmo106789 = new VF.Stave(2643, 1264, 302);
stavesmo106789.setAttribute('id', 'stavesmo106789');
stavesmo106789.setBegBarType(VF.Barline.type.NONE);
stavesmo106789.setContext(context);
stavesmo106789.draw();
smo106789v0.draw(context, stavesmo106789);
smo225167.setContext(context);
smo225167.draw();
const stavesmo109829 = new VF.Stave(2643, 1400, 302);
stavesmo109829.setAttribute('id', 'stavesmo109829');
stavesmo109829.setBegBarType(VF.Barline.type.NONE);
stavesmo109829.setContext(context);
stavesmo109829.draw();
smo109829v0.draw(context, stavesmo109829);
smo225170.setContext(context);
smo225170.draw();
const stavesmo112883 = new VF.Stave(2643, 1536, 302);
stavesmo112883.setAttribute('id', 'stavesmo112883');
stavesmo112883.setBegBarType(VF.Barline.type.NONE);
stavesmo112883.setContext(context);
stavesmo112883.draw();
smo112883v0.draw(context, stavesmo112883);
smo225173.setContext(context);
smo225173.draw();
const stavesmo115926 = new VF.Stave(2643, 1672, 302);
stavesmo115926.setAttribute('id', 'stavesmo115926');
stavesmo115926.setBegBarType(VF.Barline.type.NONE);
stavesmo115926.setContext(context);
stavesmo115926.draw();
smo115926v0.draw(context, stavesmo115926);
smo225176.setContext(context);
smo225176.draw();
// create beam groups and tuplets for format grp smo120795 before formatting
 
// formatting measures in staff group smo120795
fmtsmo11911771.format([smo119117v0], 288);
const stavesmo119117 = new VF.Stave(2643, 1818, 302);
stavesmo119117.setAttribute('id', 'stavesmo119117');
stavesmo119117.setBegBarType(VF.Barline.type.NONE);
stavesmo119117.setContext(context);
stavesmo119117.draw();
smo119117v0.draw(context, stavesmo119117);
// create beam groups and tuplets for format grp smo133470 before formatting
 
// formatting measures in staff group smo133470
fmtsmo12233071.format([smo122330v0,smo125525v0], 288);
const stavesmo122330 = new VF.Stave(2643, 1924, 302);
stavesmo122330.setAttribute('id', 'stavesmo122330');
stavesmo122330.setBegBarType(VF.Barline.type.NONE);
stavesmo122330.setContext(context);
stavesmo122330.draw();
smo122330v0.draw(context, stavesmo122330);
const stavesmo125525 = new VF.Stave(2643, 2010, 302);
stavesmo125525.setAttribute('id', 'stavesmo125525');
stavesmo125525.setBegBarType(VF.Barline.type.NONE);
stavesmo125525.setContext(context);
stavesmo125525.draw();
smo125525v0.draw(context, stavesmo125525);
// create beam groups and tuplets for format grp smo130308 before formatting
 
// formatting measures in staff group smo130308
fmtsmo12865071.format([smo128650v0], 288);
const stavesmo128650 = new VF.Stave(2643, 2081, 302);
stavesmo128650.setAttribute('id', 'stavesmo128650');
stavesmo128650.setBegBarType(VF.Barline.type.NONE);
stavesmo128650.setContext(context);
stavesmo128650.draw();
smo128650v0.draw(context, stavesmo128650);
// create beam groups and tuplets for format grp smo133464 before formatting
 
// formatting measures in staff group smo133464
fmtsmo13184971.format([smo131849v0,smo131849v1], 288);
const stavesmo131849 = new VF.Stave(2643, 2152, 302);
stavesmo131849.setAttribute('id', 'stavesmo131849');
stavesmo131849.setBegBarType(VF.Barline.type.NONE);
stavesmo131849.setContext(context);
stavesmo131849.draw();
smo131849v0.draw(context, stavesmo131849);
smo131849v1.draw(context, stavesmo131849);
const rightsmo133464stavesmo7901417 = new VF.StaveConnector(stavesmo79014, stavesmo91286).setType(0);
rightsmo133464stavesmo7901417.setContext(context).draw();
const rightsmo133464stavesmo9440217 = new VF.StaveConnector(stavesmo94402, stavesmo103700).setType(0);
rightsmo133464stavesmo9440217.setContext(context).draw();
const rightsmo133464stavesmo10678917 = new VF.StaveConnector(stavesmo106789, stavesmo115926).setType(0);
rightsmo133464stavesmo10678917.setContext(context).draw();
const rightsmo133464stavesmo12233017 = new VF.StaveConnector(stavesmo122330, stavesmo125525).setType(0);
rightsmo133464stavesmo12233017.setContext(context).draw();
const smo234550 = new VF.StaveTie({ first_note: smo78812, last_note: smo78814, 
          firstNote: smo78812, lastNote: smo78814, first_indices: [0], last_indices: [0]});
smo234550.setContext(context).draw();
const smo234551 = new VF.StaveTie({ first_note: smo78840, last_note: smo78842, 
          firstNote: smo78840, lastNote: smo78842, first_indices: [0], last_indices: [0]});
smo234551.setContext(context).draw();
const smo234552 = new VF.StaveTie({ first_note: smo78843, last_note: smo78861, 
          firstNote: smo78843, lastNote: smo78861, first_indices: [0], last_indices: [0]});
smo234552.setContext(context).draw();
const smo234553 = new VF.StaveTie({ first_note: smo78865, last_note: smo78867, 
          firstNote: smo78865, lastNote: smo78867, first_indices: [0], last_indices: [0]});
smo234553.setContext(context).draw();
const smo234554 = new VF.StaveTie({ first_note: smo78896, last_note: smo78898, 
          firstNote: smo78896, lastNote: smo78898, first_indices: [0], last_indices: [0]});
smo234554.setContext(context).draw();
const smo234555 = new VF.StaveTie({ first_note: smo78899, last_note: smo78917, 
          firstNote: smo78899, lastNote: smo78917, first_indices: [0], last_indices: [0]});
smo234555.setContext(context).draw();
const smo234556 = new VF.StaveTie({ first_note: smo78992, last_note: smo78994, 
          firstNote: smo78992, lastNote: smo78994, first_indices: [0], last_indices: [0]});
smo234556.setContext(context).draw();
const smo234557 = new VF.StaveTie({ first_note: smo81806, last_note: smo81808, 
          firstNote: smo81806, lastNote: smo81808, first_indices: [0], last_indices: [0]});
smo234557.setContext(context).draw();
const smo234558 = new VF.StaveTie({ first_note: smo81834, last_note: smo81836, 
          firstNote: smo81834, lastNote: smo81836, first_indices: [0], last_indices: [0]});
smo234558.setContext(context).draw();
const smo234559 = new VF.StaveTie({ first_note: smo81837, last_note: smo81855, 
          firstNote: smo81837, lastNote: smo81855, first_indices: [0], last_indices: [0]});
smo234559.setContext(context).draw();
const smo234560 = new VF.StaveTie({ first_note: smo81859, last_note: smo81861, 
          firstNote: smo81859, lastNote: smo81861, first_indices: [0], last_indices: [0]});
smo234560.setContext(context).draw();
const smo234561 = new VF.StaveTie({ first_note: smo81890, last_note: smo81892, 
          firstNote: smo81890, lastNote: smo81892, first_indices: [0], last_indices: [0]});
smo234561.setContext(context).draw();
const smo234562 = new VF.StaveTie({ first_note: smo81893, last_note: smo81911, 
          firstNote: smo81893, lastNote: smo81911, first_indices: [0], last_indices: [0]});
smo234562.setContext(context).draw();
const smo234563 = new VF.StaveTie({ first_note: smo81985, last_note: smo81987, 
          firstNote: smo81985, lastNote: smo81987, first_indices: [0], last_indices: [0]});
smo234563.setContext(context).draw();
const smo234564 = new VF.StaveTie({ first_note: smo84949, last_note: smo84951, 
          firstNote: smo84949, lastNote: smo84951, first_indices: [0], last_indices: [0]});
smo234564.setContext(context).draw();
const smo234565 = new VF.StaveTie({ first_note: smo84977, last_note: smo84979, 
          firstNote: smo84977, lastNote: smo84979, first_indices: [0], last_indices: [0]});
smo234565.setContext(context).draw();
const smo234566 = new VF.StaveTie({ first_note: smo84980, last_note: smo84998, 
          firstNote: smo84980, lastNote: smo84998, first_indices: [0], last_indices: [0]});
smo234566.setContext(context).draw();
const smo234567 = new VF.StaveTie({ first_note: smo85002, last_note: smo85004, 
          firstNote: smo85002, lastNote: smo85004, first_indices: [0], last_indices: [0]});
smo234567.setContext(context).draw();
const smo234568 = new VF.StaveTie({ first_note: smo85033, last_note: smo85035, 
          firstNote: smo85033, lastNote: smo85035, first_indices: [0], last_indices: [0]});
smo234568.setContext(context).draw();
const smo234569 = new VF.StaveTie({ first_note: smo85036, last_note: smo85054, 
          firstNote: smo85036, lastNote: smo85054, first_indices: [0], last_indices: [0]});
smo234569.setContext(context).draw();
const smo234570 = new VF.StaveTie({ first_note: smo85129, last_note: smo85131, 
          firstNote: smo85129, lastNote: smo85131, first_indices: [0], last_indices: [0]});
smo234570.setContext(context).draw();
const smo234571 = new VF.StaveTie({ first_note: smo88065, last_note: smo88067, 
          firstNote: smo88065, lastNote: smo88067, first_indices: [0], last_indices: [0]});
smo234571.setContext(context).draw();
const smo234572 = new VF.StaveTie({ first_note: smo88093, last_note: smo88095, 
          firstNote: smo88093, lastNote: smo88095, first_indices: [0], last_indices: [0]});
smo234572.setContext(context).draw();
const smo234573 = new VF.StaveTie({ first_note: smo88096, last_note: smo88114, 
          firstNote: smo88096, lastNote: smo88114, first_indices: [0], last_indices: [0]});
smo234573.setContext(context).draw();
const smo234574 = new VF.StaveTie({ first_note: smo88118, last_note: smo88120, 
          firstNote: smo88118, lastNote: smo88120, first_indices: [0], last_indices: [0]});
smo234574.setContext(context).draw();
const smo234575 = new VF.StaveTie({ first_note: smo88149, last_note: smo88151, 
          firstNote: smo88149, lastNote: smo88151, first_indices: [0], last_indices: [0]});
smo234575.setContext(context).draw();
const smo234576 = new VF.StaveTie({ first_note: smo88152, last_note: smo88170, 
          firstNote: smo88152, lastNote: smo88170, first_indices: [0], last_indices: [0]});
smo234576.setContext(context).draw();
const smo234577 = new VF.StaveTie({ first_note: smo88245, last_note: smo88247, 
          firstNote: smo88245, lastNote: smo88247, first_indices: [0], last_indices: [0]});
smo234577.setContext(context).draw();
const smo234578 = new VF.StaveTie({ first_note: smo91084, last_note: smo91086, 
          firstNote: smo91084, lastNote: smo91086, first_indices: [0], last_indices: [0]});
smo234578.setContext(context).draw();
const smo234579 = new VF.StaveTie({ first_note: smo91112, last_note: smo91114, 
          firstNote: smo91112, lastNote: smo91114, first_indices: [0], last_indices: [0]});
smo234579.setContext(context).draw();
const smo234580 = new VF.StaveTie({ first_note: smo91115, last_note: smo91133, 
          firstNote: smo91115, lastNote: smo91133, first_indices: [0], last_indices: [0]});
smo234580.setContext(context).draw();
const smo234581 = new VF.StaveTie({ first_note: smo91137, last_note: smo91139, 
          firstNote: smo91137, lastNote: smo91139, first_indices: [0], last_indices: [0]});
smo234581.setContext(context).draw();
const smo234582 = new VF.StaveTie({ first_note: smo91168, last_note: smo91170, 
          firstNote: smo91168, lastNote: smo91170, first_indices: [0], last_indices: [0]});
smo234582.setContext(context).draw();
const smo234583 = new VF.StaveTie({ first_note: smo91171, last_note: smo91189, 
          firstNote: smo91171, lastNote: smo91189, first_indices: [0], last_indices: [0]});
smo234583.setContext(context).draw();
const smo234584 = new VF.StaveTie({ first_note: smo91264, last_note: smo91266, 
          firstNote: smo91264, lastNote: smo91266, first_indices: [0], last_indices: [0]});
smo234584.setContext(context).draw();
const smo234585 = new VF.StaveTie({ first_note: smo94191, last_note: smo94193, 
          firstNote: smo94191, lastNote: smo94193, first_indices: [0], last_indices: [0]});
smo234585.setContext(context).draw();
const smo234586 = new VF.StaveTie({ first_note: smo94219, last_note: smo94221, 
          firstNote: smo94219, lastNote: smo94221, first_indices: [0], last_indices: [0]});
smo234586.setContext(context).draw();
const smo234587 = new VF.StaveTie({ first_note: smo94222, last_note: smo94240, 
          firstNote: smo94222, lastNote: smo94240, first_indices: [0], last_indices: [0]});
smo234587.setContext(context).draw();
const smo234588 = new VF.StaveTie({ first_note: smo94244, last_note: smo94246, 
          firstNote: smo94244, lastNote: smo94246, first_indices: [0], last_indices: [0]});
smo234588.setContext(context).draw();
const smo234589 = new VF.StaveTie({ first_note: smo94275, last_note: smo94277, 
          firstNote: smo94275, lastNote: smo94277, first_indices: [0], last_indices: [0]});
smo234589.setContext(context).draw();
const smo234590 = new VF.StaveTie({ first_note: smo94278, last_note: smo94296, 
          firstNote: smo94278, lastNote: smo94296, first_indices: [0], last_indices: [0]});
smo234590.setContext(context).draw();
const smo234591 = new VF.StaveTie({ first_note: smo94380, last_note: smo94382, 
          firstNote: smo94380, lastNote: smo94382, first_indices: [0], last_indices: [0]});
smo234591.setContext(context).draw();
const smo234592 = new VF.StaveTie({ first_note: smo97303, last_note: smo97305, 
          firstNote: smo97303, lastNote: smo97305, first_indices: [0], last_indices: [0]});
smo234592.setContext(context).draw();
const smo234593 = new VF.StaveTie({ first_note: smo97331, last_note: smo97333, 
          firstNote: smo97331, lastNote: smo97333, first_indices: [0], last_indices: [0]});
smo234593.setContext(context).draw();
const smo234594 = new VF.StaveTie({ first_note: smo97334, last_note: smo97352, 
          firstNote: smo97334, lastNote: smo97352, first_indices: [0], last_indices: [0]});
smo234594.setContext(context).draw();
const smo234595 = new VF.StaveTie({ first_note: smo97356, last_note: smo97358, 
          firstNote: smo97356, lastNote: smo97358, first_indices: [0], last_indices: [0]});
smo234595.setContext(context).draw();
const smo234596 = new VF.StaveTie({ first_note: smo97387, last_note: smo97389, 
          firstNote: smo97387, lastNote: smo97389, first_indices: [0], last_indices: [0]});
smo234596.setContext(context).draw();
const smo234597 = new VF.StaveTie({ first_note: smo97390, last_note: smo97408, 
          firstNote: smo97390, lastNote: smo97408, first_indices: [0], last_indices: [0]});
smo234597.setContext(context).draw();
const smo234598 = new VF.StaveTie({ first_note: smo97483, last_note: smo97485, 
          firstNote: smo97483, lastNote: smo97485, first_indices: [0], last_indices: [0]});
smo234598.setContext(context).draw();
const smo234599 = new VF.StaveTie({ first_note: smo100412, last_note: smo100414, 
          firstNote: smo100412, lastNote: smo100414, first_indices: [0], last_indices: [0]});
smo234599.setContext(context).draw();
const smo234600 = new VF.StaveTie({ first_note: smo100440, last_note: smo100442, 
          firstNote: smo100440, lastNote: smo100442, first_indices: [0], last_indices: [0]});
smo234600.setContext(context).draw();
const smo234601 = new VF.StaveTie({ first_note: smo100443, last_note: smo100461, 
          firstNote: smo100443, lastNote: smo100461, first_indices: [0], last_indices: [0]});
smo234601.setContext(context).draw();
const smo234602 = new VF.StaveTie({ first_note: smo100465, last_note: smo100467, 
          firstNote: smo100465, lastNote: smo100467, first_indices: [0], last_indices: [0]});
smo234602.setContext(context).draw();
const smo234603 = new VF.StaveTie({ first_note: smo100496, last_note: smo100498, 
          firstNote: smo100496, lastNote: smo100498, first_indices: [0], last_indices: [0]});
smo234603.setContext(context).draw();
const smo234604 = new VF.StaveTie({ first_note: smo100499, last_note: smo100517, 
          firstNote: smo100499, lastNote: smo100517, first_indices: [0], last_indices: [0]});
smo234604.setContext(context).draw();
const smo234605 = new VF.StaveTie({ first_note: smo100592, last_note: smo100594, 
          firstNote: smo100592, lastNote: smo100594, first_indices: [0], last_indices: [0]});
smo234605.setContext(context).draw();
const smo234606 = new VF.StaveTie({ first_note: smo103498, last_note: smo103500, 
          firstNote: smo103498, lastNote: smo103500, first_indices: [0], last_indices: [0]});
smo234606.setContext(context).draw();
const smo234607 = new VF.StaveTie({ first_note: smo103526, last_note: smo103528, 
          firstNote: smo103526, lastNote: smo103528, first_indices: [0], last_indices: [0]});
smo234607.setContext(context).draw();
const smo234608 = new VF.StaveTie({ first_note: smo103529, last_note: smo103547, 
          firstNote: smo103529, lastNote: smo103547, first_indices: [0], last_indices: [0]});
smo234608.setContext(context).draw();
const smo234609 = new VF.StaveTie({ first_note: smo103551, last_note: smo103553, 
          firstNote: smo103551, lastNote: smo103553, first_indices: [0], last_indices: [0]});
smo234609.setContext(context).draw();
const smo234610 = new VF.StaveTie({ first_note: smo103582, last_note: smo103584, 
          firstNote: smo103582, lastNote: smo103584, first_indices: [0], last_indices: [0]});
smo234610.setContext(context).draw();
const smo234611 = new VF.StaveTie({ first_note: smo103585, last_note: smo103603, 
          firstNote: smo103585, lastNote: smo103603, first_indices: [0], last_indices: [0]});
smo234611.setContext(context).draw();
const smo234612 = new VF.StaveTie({ first_note: smo103678, last_note: smo103680, 
          firstNote: smo103678, lastNote: smo103680, first_indices: [0], last_indices: [0]});
smo234612.setContext(context).draw();
const smo234613 = new VF.StaveTie({ first_note: smo106587, last_note: smo106589, 
          firstNote: smo106587, lastNote: smo106589, first_indices: [0], last_indices: [0]});
smo234613.setContext(context).draw();
const smo234614 = new VF.StaveTie({ first_note: smo106615, last_note: smo106617, 
          firstNote: smo106615, lastNote: smo106617, first_indices: [0], last_indices: [0]});
smo234614.setContext(context).draw();
const smo234615 = new VF.StaveTie({ first_note: smo106618, last_note: smo106636, 
          firstNote: smo106618, lastNote: smo106636, first_indices: [0], last_indices: [0]});
smo234615.setContext(context).draw();
const smo234616 = new VF.StaveTie({ first_note: smo106640, last_note: smo106642, 
          firstNote: smo106640, lastNote: smo106642, first_indices: [0], last_indices: [0]});
smo234616.setContext(context).draw();
const smo234617 = new VF.StaveTie({ first_note: smo106671, last_note: smo106673, 
          firstNote: smo106671, lastNote: smo106673, first_indices: [0], last_indices: [0]});
smo234617.setContext(context).draw();
const smo234618 = new VF.StaveTie({ first_note: smo106674, last_note: smo106692, 
          firstNote: smo106674, lastNote: smo106692, first_indices: [0], last_indices: [0]});
smo234618.setContext(context).draw();
const smo234619 = new VF.StaveTie({ first_note: smo106767, last_note: smo106769, 
          firstNote: smo106767, lastNote: smo106769, first_indices: [0], last_indices: [0]});
smo234619.setContext(context).draw();
const smo234620 = new VF.StaveTie({ first_note: smo109627, last_note: smo109629, 
          firstNote: smo109627, lastNote: smo109629, first_indices: [0], last_indices: [0]});
smo234620.setContext(context).draw();
const smo234621 = new VF.StaveTie({ first_note: smo109655, last_note: smo109657, 
          firstNote: smo109655, lastNote: smo109657, first_indices: [0], last_indices: [0]});
smo234621.setContext(context).draw();
const smo234622 = new VF.StaveTie({ first_note: smo109658, last_note: smo109676, 
          firstNote: smo109658, lastNote: smo109676, first_indices: [0], last_indices: [0]});
smo234622.setContext(context).draw();
const smo234623 = new VF.StaveTie({ first_note: smo109680, last_note: smo109682, 
          firstNote: smo109680, lastNote: smo109682, first_indices: [0], last_indices: [0]});
smo234623.setContext(context).draw();
const smo234624 = new VF.StaveTie({ first_note: smo109711, last_note: smo109713, 
          firstNote: smo109711, lastNote: smo109713, first_indices: [0], last_indices: [0]});
smo234624.setContext(context).draw();
const smo234625 = new VF.StaveTie({ first_note: smo109714, last_note: smo109732, 
          firstNote: smo109714, lastNote: smo109732, first_indices: [0], last_indices: [0]});
smo234625.setContext(context).draw();
const smo234626 = new VF.StaveTie({ first_note: smo109807, last_note: smo109809, 
          firstNote: smo109807, lastNote: smo109809, first_indices: [0], last_indices: [0]});
smo234626.setContext(context).draw();
const smo234627 = new VF.StaveTie({ first_note: smo112681, last_note: smo112683, 
          firstNote: smo112681, lastNote: smo112683, first_indices: [0], last_indices: [0]});
smo234627.setContext(context).draw();
const smo234628 = new VF.StaveTie({ first_note: smo112709, last_note: smo112711, 
          firstNote: smo112709, lastNote: smo112711, first_indices: [0], last_indices: [0]});
smo234628.setContext(context).draw();
const smo234629 = new VF.StaveTie({ first_note: smo112712, last_note: smo112730, 
          firstNote: smo112712, lastNote: smo112730, first_indices: [0], last_indices: [0]});
smo234629.setContext(context).draw();
const smo234630 = new VF.StaveTie({ first_note: smo112734, last_note: smo112736, 
          firstNote: smo112734, lastNote: smo112736, first_indices: [0], last_indices: [0]});
smo234630.setContext(context).draw();
const smo234631 = new VF.StaveTie({ first_note: smo112765, last_note: smo112767, 
          firstNote: smo112765, lastNote: smo112767, first_indices: [0], last_indices: [0]});
smo234631.setContext(context).draw();
const smo234632 = new VF.StaveTie({ first_note: smo112768, last_note: smo112786, 
          firstNote: smo112768, lastNote: smo112786, first_indices: [0], last_indices: [0]});
smo234632.setContext(context).draw();
const smo234633 = new VF.StaveTie({ first_note: smo112861, last_note: smo112863, 
          firstNote: smo112861, lastNote: smo112863, first_indices: [0], last_indices: [0]});
smo234633.setContext(context).draw();
const smo234634 = new VF.StaveTie({ first_note: smo115724, last_note: smo115726, 
          firstNote: smo115724, lastNote: smo115726, first_indices: [0], last_indices: [0]});
smo234634.setContext(context).draw();
const smo234635 = new VF.StaveTie({ first_note: smo115752, last_note: smo115754, 
          firstNote: smo115752, lastNote: smo115754, first_indices: [0], last_indices: [0]});
smo234635.setContext(context).draw();
const smo234636 = new VF.StaveTie({ first_note: smo115755, last_note: smo115773, 
          firstNote: smo115755, lastNote: smo115773, first_indices: [0], last_indices: [0]});
smo234636.setContext(context).draw();
const smo234637 = new VF.StaveTie({ first_note: smo115777, last_note: smo115779, 
          firstNote: smo115777, lastNote: smo115779, first_indices: [0], last_indices: [0]});
smo234637.setContext(context).draw();
const smo234638 = new VF.StaveTie({ first_note: smo115808, last_note: smo115810, 
          firstNote: smo115808, lastNote: smo115810, first_indices: [0], last_indices: [0]});
smo234638.setContext(context).draw();
const smo234639 = new VF.StaveTie({ first_note: smo115811, last_note: smo115829, 
          firstNote: smo115811, lastNote: smo115829, first_indices: [0], last_indices: [0]});
smo234639.setContext(context).draw();
const smo234640 = new VF.StaveTie({ first_note: smo115904, last_note: smo115906, 
          firstNote: smo115904, lastNote: smo115906, first_indices: [0], last_indices: [0]});
smo234640.setContext(context).draw();
const smo234641 = new VF.StaveTie({ first_note: smo118943, last_note: smo118944, 
          firstNote: smo118943, lastNote: smo118944, first_indices: [0,1,2], last_indices: [0,1,2]});
smo234641.setContext(context).draw();
const smo234642 = new VF.StaveTie({ first_note: smo118967, last_note: smo118968, 
          firstNote: smo118967, lastNote: smo118968, first_indices: [0,1,2], last_indices: [0,1,2]});
smo234642.setContext(context).draw();
const smo234643 = new VF.StaveTie({ first_note: smo118986, last_note: smo118987, 
          firstNote: smo118986, lastNote: smo118987, first_indices: [0,1,2], last_indices: [0,1,2]});
smo234643.setContext(context).draw();
const smo234644 = new VF.StaveTie({ first_note: smo119009, last_note: smo119010, 
          firstNote: smo119009, lastNote: smo119010, first_indices: [0,1,2], last_indices: [0,1,2]});
smo234644.setContext(context).draw();
const smo234645 = new VF.StaveTie({ first_note: smo119011, last_note: smo119028, 
          firstNote: smo119011, lastNote: smo119028, first_indices: [0,1,2], last_indices: [0,1,2]});
smo234645.setContext(context).draw();
const smo234646 = new VF.StaveTie({ first_note: smo119029, last_note: smo119030, 
          firstNote: smo119029, lastNote: smo119030, first_indices: [0,1], last_indices: [0,1]});
smo234646.setContext(context).draw();
const smo234647 = new VF.StaveTie({ first_note: smo122156, last_note: smo122157, 
          firstNote: smo122156, lastNote: smo122157, first_indices: [0,1,2], last_indices: [0,1,2]});
smo234647.setContext(context).draw();
const smo234648 = new VF.StaveTie({ first_note: smo122180, last_note: smo122181, 
          firstNote: smo122180, lastNote: smo122181, first_indices: [0,1,2], last_indices: [0,1,2]});
smo234648.setContext(context).draw();
const smo234649 = new VF.StaveTie({ first_note: smo122199, last_note: smo122200, 
          firstNote: smo122199, lastNote: smo122200, first_indices: [0,1,2], last_indices: [0,1,2]});
smo234649.setContext(context).draw();
const smo234650 = new VF.StaveTie({ first_note: smo122222, last_note: smo122223, 
          firstNote: smo122222, lastNote: smo122223, first_indices: [0,1,2], last_indices: [0,1,2]});
smo234650.setContext(context).draw();
const smo234651 = new VF.StaveTie({ first_note: smo122224, last_note: smo122241, 
          firstNote: smo122224, lastNote: smo122241, first_indices: [0,1,2], last_indices: [0,1,2]});
smo234651.setContext(context).draw();
const smo234652 = new VF.StaveTie({ first_note: smo122242, last_note: smo122243, 
          firstNote: smo122242, lastNote: smo122243, first_indices: [0,1], last_indices: [0,1]});
smo234652.setContext(context).draw();
const smo234653 = new VF.StaveTie({ first_note: smo125351, last_note: smo125352, 
          firstNote: smo125351, lastNote: smo125352, first_indices: [0], last_indices: [0]});
smo234653.setContext(context).draw();
const smo234654 = new VF.StaveTie({ first_note: smo125375, last_note: smo125376, 
          firstNote: smo125375, lastNote: smo125376, first_indices: [0], last_indices: [0]});
smo234654.setContext(context).draw();
const smo234655 = new VF.StaveTie({ first_note: smo125394, last_note: smo125395, 
          firstNote: smo125394, lastNote: smo125395, first_indices: [0], last_indices: [0]});
smo234655.setContext(context).draw();
const smo234656 = new VF.StaveTie({ first_note: smo125417, last_note: smo125418, 
          firstNote: smo125417, lastNote: smo125418, first_indices: [0], last_indices: [0]});
smo234656.setContext(context).draw();
const smo234657 = new VF.StaveTie({ first_note: smo125419, last_note: smo125436, 
          firstNote: smo125419, lastNote: smo125436, first_indices: [0], last_indices: [0]});
smo234657.setContext(context).draw();
const smo234658 = new VF.StaveTie({ first_note: smo125437, last_note: smo125438, 
          firstNote: smo125437, lastNote: smo125438, first_indices: [0], last_indices: [0]});
smo234658.setContext(context).draw();
const smo234659 = new VF.StaveTie({ first_note: smo128492, last_note: smo128493, 
          firstNote: smo128492, lastNote: smo128493, first_indices: [0], last_indices: [0]});
smo234659.setContext(context).draw();
const smo234660 = new VF.StaveTie({ first_note: smo128494, last_note: smo128511, 
          firstNote: smo128494, lastNote: smo128511, first_indices: [0], last_indices: [0]});
smo234660.setContext(context).draw();
const smo234661 = new VF.StaveTie({ first_note: smo128512, last_note: smo128513, 
          firstNote: smo128512, lastNote: smo128513, first_indices: [0], last_indices: [0]});
smo234661.setContext(context).draw();
const smo234662 = new VF.StaveTie({ first_note: smo128514, last_note: smo128531, 
          firstNote: smo128514, lastNote: smo128531, first_indices: [0], last_indices: [0]});
smo234662.setContext(context).draw();
const smo234663 = new VF.StaveTie({ first_note: smo128532, last_note: smo128533, 
          firstNote: smo128532, lastNote: smo128533, first_indices: [0], last_indices: [0]});
smo234663.setContext(context).draw();
const smo234664 = new VF.StaveTie({ first_note: smo128534, last_note: smo128551, 
          firstNote: smo128534, lastNote: smo128551, first_indices: [0], last_indices: [0]});
smo234664.setContext(context).draw();
const smo234665 = new VF.StaveTie({ first_note: smo128572, last_note: smo128573, 
          firstNote: smo128572, lastNote: smo128573, first_indices: [0], last_indices: [0]});
smo234665.setContext(context).draw();
const smo234666 = new VF.StaveTie({ first_note: smo128574, last_note: smo128591, 
          firstNote: smo128574, lastNote: smo128591, first_indices: [0], last_indices: [0]});
smo234666.setContext(context).draw();
const smo234667 = new VF.StaveTie({ first_note: smo128592, last_note: smo128593, 
          firstNote: smo128592, lastNote: smo128593, first_indices: [0], last_indices: [0]});
smo234667.setContext(context).draw();
const smo234668 = new VF.StaveTie({ first_note: smo128594, last_note: smo128611, 
          firstNote: smo128594, lastNote: smo128611, first_indices: [0], last_indices: [0]});
smo234668.setContext(context).draw();
const smo234669 = new VF.StaveTie({ first_note: smo128612, last_note: smo128613, 
          firstNote: smo128612, lastNote: smo128613, first_indices: [0], last_indices: [0]});
smo234669.setContext(context).draw();
const smo234670 = new VF.StaveTie({ first_note: smo128614, last_note: smo128631, 
          firstNote: smo128614, lastNote: smo128631, first_indices: [0], last_indices: [0]});
smo234670.setContext(context).draw();
const smo234671 = new VF.StaveTie({ first_note: smo131652, last_note: smo131653, 
          firstNote: smo131652, lastNote: smo131653, first_indices: [0], last_indices: [0]});
smo234671.setContext(context).draw();
const smo234672 = new VF.StaveTie({ first_note: smo131701, last_note: smo131702, 
          firstNote: smo131701, lastNote: smo131702, first_indices: [0], last_indices: [0]});
smo234672.setContext(context).draw();
const smo234673 = new VF.StaveTie({ first_note: smo131728, last_note: smo131730, 
          firstNote: smo131728, lastNote: smo131730, first_indices: [0], last_indices: [0]});
smo234673.setContext(context).draw();
const smo234674 = new VF.StaveTie({ first_note: smo131731, last_note: smo131750, 
          firstNote: smo131731, lastNote: smo131750, first_indices: [0], last_indices: [0]});
smo234674.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo78813').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo78816').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo78818').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo81807').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo81810').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo81812').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo84950').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo84953').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo84955').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo88066').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo88069').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo88071').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo91085').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo91088').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo91090').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo94192').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo94195').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo94197').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo97304').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo97307').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo97309').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo100413').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo100416').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo100418').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo103499').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo103502').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo103504').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo106588').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo106591').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo106593').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo109628').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo109631').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo109633').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo112682').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo112685').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo112687').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo115725').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo115728').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo115730').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo78837').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo78841').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo78844').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo81831').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo81835').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo81838').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo84974').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo84978').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo84981').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo88090').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo88094').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo88097').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo91109').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo91113').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo91116').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo94216').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo94220').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo94223').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo97328').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo97332').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo97335').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo100437').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo100441').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo100444').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo103523').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo103527').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo103530').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo106612').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo106616').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo109652').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo109656').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo112706').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo112710').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo115749').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo115753').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo131673').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo78863').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo78866').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo78869').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo78871').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo81857').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo81860').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo81863').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo81865').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo85000').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo85003').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo85006').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo85008').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo88116').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo88119').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo88122').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo88124').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo91135').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo91138').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo91141').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo91143').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo94242').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo94245').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo94248').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo94250').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo97354').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo97357').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo97360').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo97362').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo100463').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo100466').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo100469').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo100471').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo103549').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo103552').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo103555').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo103557').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo106638').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo106641').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo106644').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo106646').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo109678').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo109681').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo109684').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo109686').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo112732').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo112735').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo112738').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo112740').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo115775').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo115778').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo115781').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo115783').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo78889').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo78891').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo78893').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo78895').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo78897').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo78900').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo81883').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo81885').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo81887').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo81889').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo81891').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo81894').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo85026').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo85028').setAttributeNS('', 'transform', 'translate(0 2)');
context.svg.getElementById('vf-smo85030').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo85032').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo85037').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo88142').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo88144').setAttributeNS('', 'transform', 'translate(0 2)');
context.svg.getElementById('vf-smo88146').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo88148').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo88153').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo91161').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo91163').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo91165').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo91167').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo91169').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo91172').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo94268').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo94270').setAttributeNS('', 'transform', 'translate(0 2)');
context.svg.getElementById('vf-smo94272').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo94274').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo94279').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo97380').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo97382').setAttributeNS('', 'transform', 'translate(0 2)');
context.svg.getElementById('vf-smo97384').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo97386').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo97391').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo100489').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo100491').setAttributeNS('', 'transform', 'translate(0 2)');
context.svg.getElementById('vf-smo100493').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo100495').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo100500').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo103575').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo103577').setAttributeNS('', 'transform', 'translate(0 2)');
context.svg.getElementById('vf-smo103579').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo103581').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo103586').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo106664').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo106668').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo106670').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo106672').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo109704').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo109708').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo109710').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo109712').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo112758').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo112762').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo112764').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo112766').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo115801').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo115805').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo115807').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo115809').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo131721').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo131725').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo131727').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo131729').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo106694').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo109734').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo112788').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo115831').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo78993').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo78996').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo78998').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo81986').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo81989').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo81991').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo85130').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo85133').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo85135').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo88246').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo88249').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo88251').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo91265').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo91268').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo91270').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo94381').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo94384').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo94386').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo97484').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo97487').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo97489').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo100593').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo100596').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo100598').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo103679').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo103682').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo103684').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo106768').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo106771').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo106773').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo109808').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo109811').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo109813').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo112862').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo112865').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo112867').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo115905').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo115908').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo115910').setAttributeNS('', 'transform', 'translate(0 3)');
}
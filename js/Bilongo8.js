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
const fmtsmo16987563 = new VF.Formatter();
//
// voices and notes for stave 0 63
const smo169875v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo169875v0ar = [];
const smo169850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo169850'] = smo169850;
smo169850.setAttribute('id', 'smo169850');
smo169875v0ar.push(smo169850);
const smo169851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo169851'] = smo169851;
smo169851.setAttribute('id', 'smo169851');
smo169875v0ar.push(smo169851);
const smo169852 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo169852'] = smo169852;
smo169852.setAttribute('id', 'smo169852');
const smo169853 = new VF.Annotation('Ki');
smo169853.setAttribute('id', 'smo169853');
smo169853.setFont('times', 12, 'normal');
smo169853.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo169852.addModifier(smo169853);
smo169853.addClass('lyric lyric-0 lyric-hyphen');
smo169875v0ar.push(smo169852);
const smo169854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo169854'] = smo169854;
smo169854.setAttribute('id', 'smo169854');
smo169875v0ar.push(smo169854);
const smo169855 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo169855'] = smo169855;
smo169855.setAttribute('id', 'smo169855');
const smo169856 = new VF.Annotation('ki');
smo169856.setAttribute('id', 'smo169856');
smo169856.setFont('times', 12, 'normal');
smo169856.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo169855.addModifier(smo169856);
smo169856.addClass('lyric lyric-0 lyric-hyphen');
smo169875v0ar.push(smo169855);
const smo169857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo169857'] = smo169857;
smo169857.setAttribute('id', 'smo169857');
const smo169858 = new VF.Annotation('ri');
smo169858.setAttribute('id', 'smo169858');
smo169858.setFont('times', 12, 'normal');
smo169858.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo169857.addModifier(smo169858);
smo169858.addClass('lyric lyric-0');
smo169875v0ar.push(smo169857);
smo169875v0.addTickables(smo169875v0ar)
fmtsmo16987563.joinVoices([smo169875v0]);
const fmtsmo17286963 = new VF.Formatter();
//
// voices and notes for stave 1 63
const smo172869v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo172869v0ar = [];
const smo172844 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo172844'] = smo172844;
smo172844.setAttribute('id', 'smo172844');
smo172869v0ar.push(smo172844);
const smo172845 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo172845'] = smo172845;
smo172845.setAttribute('id', 'smo172845');
smo172869v0ar.push(smo172845);
const smo172846 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo172846'] = smo172846;
smo172846.setAttribute('id', 'smo172846');
const smo172847 = new VF.Annotation('Ki');
smo172847.setAttribute('id', 'smo172847');
smo172847.setFont('times', 12, 'normal');
smo172847.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo172846.addModifier(smo172847);
smo172847.addClass('lyric lyric-0 lyric-hyphen');
smo172869v0ar.push(smo172846);
const smo172848 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo172848'] = smo172848;
smo172848.setAttribute('id', 'smo172848');
smo172869v0ar.push(smo172848);
const smo172849 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo172849'] = smo172849;
smo172849.setAttribute('id', 'smo172849');
const smo172850 = new VF.Annotation('ki');
smo172850.setAttribute('id', 'smo172850');
smo172850.setFont('times', 12, 'normal');
smo172850.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo172849.addModifier(smo172850);
smo172850.addClass('lyric lyric-0 lyric-hyphen');
smo172869v0ar.push(smo172849);
const smo172851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo172851'] = smo172851;
smo172851.setAttribute('id', 'smo172851');
const smo172852 = new VF.Annotation('ri');
smo172852.setAttribute('id', 'smo172852');
smo172852.setFont('times', 12, 'normal');
smo172852.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo172851.addModifier(smo172852);
smo172852.addClass('lyric lyric-0');
smo172869v0ar.push(smo172851);
smo172869v0.addTickables(smo172869v0ar)
fmtsmo17286963.joinVoices([smo172869v0]);
const fmtsmo17601263 = new VF.Formatter();
//
// voices and notes for stave 2 63
const smo176012v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo176012v0ar = [];
const smo175987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo175987'] = smo175987;
smo175987.setAttribute('id', 'smo175987');
smo176012v0ar.push(smo175987);
const smo175988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo175988'] = smo175988;
smo175988.setAttribute('id', 'smo175988');
smo176012v0ar.push(smo175988);
const smo175989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo175989'] = smo175989;
smo175989.setAttribute('id', 'smo175989');
const smo175990 = new VF.Annotation('Ki');
smo175990.setAttribute('id', 'smo175990');
smo175990.setFont('times', 12, 'normal');
smo175990.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo175989.addModifier(smo175990);
smo175990.addClass('lyric lyric-0 lyric-hyphen');
smo176012v0ar.push(smo175989);
const smo175991 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo175991'] = smo175991;
smo175991.setAttribute('id', 'smo175991');
smo176012v0ar.push(smo175991);
const smo175992 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo175992'] = smo175992;
smo175992.setAttribute('id', 'smo175992');
const smo175993 = new VF.Annotation('ki');
smo175993.setAttribute('id', 'smo175993');
smo175993.setFont('times', 12, 'normal');
smo175993.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo175992.addModifier(smo175993);
smo175993.addClass('lyric lyric-0 lyric-hyphen');
smo176012v0ar.push(smo175992);
const smo175994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo175994'] = smo175994;
smo175994.setAttribute('id', 'smo175994');
const smo175995 = new VF.Annotation('ri');
smo175995.setAttribute('id', 'smo175995');
smo175995.setFont('times', 12, 'normal');
smo175995.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo175994.addModifier(smo175995);
smo175995.addClass('lyric lyric-0');
smo176012v0ar.push(smo175994);
smo176012v0.addTickables(smo176012v0ar)
fmtsmo17601263.joinVoices([smo176012v0]);
const fmtsmo17912863 = new VF.Formatter();
//
// voices and notes for stave 3 63
const smo179128v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo179128v0ar = [];
const smo179103 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo179103'] = smo179103;
smo179103.setAttribute('id', 'smo179103');
smo179128v0ar.push(smo179103);
const smo179104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo179104'] = smo179104;
smo179104.setAttribute('id', 'smo179104');
smo179128v0ar.push(smo179104);
const smo179105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo179105'] = smo179105;
smo179105.setAttribute('id', 'smo179105');
const smo179106 = new VF.Annotation('Ki');
smo179106.setAttribute('id', 'smo179106');
smo179106.setFont('times', 12, 'normal');
smo179106.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo179105.addModifier(smo179106);
smo179106.addClass('lyric lyric-0 lyric-hyphen');
smo179128v0ar.push(smo179105);
const smo179107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo179107'] = smo179107;
smo179107.setAttribute('id', 'smo179107');
smo179128v0ar.push(smo179107);
const smo179108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo179108'] = smo179108;
smo179108.setAttribute('id', 'smo179108');
const smo179109 = new VF.Annotation('ki');
smo179109.setAttribute('id', 'smo179109');
smo179109.setFont('times', 12, 'normal');
smo179109.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo179108.addModifier(smo179109);
smo179109.addClass('lyric lyric-0 lyric-hyphen');
smo179128v0ar.push(smo179108);
const smo179110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo179110'] = smo179110;
smo179110.setAttribute('id', 'smo179110');
const smo179111 = new VF.Annotation('ri');
smo179111.setAttribute('id', 'smo179111');
smo179111.setFont('times', 12, 'normal');
smo179111.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo179110.addModifier(smo179111);
smo179111.addClass('lyric lyric-0');
smo179128v0ar.push(smo179110);
smo179128v0.addTickables(smo179128v0ar)
fmtsmo17912863.joinVoices([smo179128v0]);
const fmtsmo18214763 = new VF.Formatter();
//
// voices and notes for stave 4 63
const smo182147v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo182147v0ar = [];
const smo182122 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo182122'] = smo182122;
smo182122.setAttribute('id', 'smo182122');
smo182147v0ar.push(smo182122);
const smo182123 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo182123'] = smo182123;
smo182123.setAttribute('id', 'smo182123');
smo182147v0ar.push(smo182123);
const smo182124 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo182124'] = smo182124;
smo182124.setAttribute('id', 'smo182124');
const smo182125 = new VF.Annotation('Ki');
smo182125.setAttribute('id', 'smo182125');
smo182125.setFont('times', 12, 'normal');
smo182125.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo182124.addModifier(smo182125);
smo182125.addClass('lyric lyric-0 lyric-hyphen');
smo182147v0ar.push(smo182124);
const smo182126 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo182126'] = smo182126;
smo182126.setAttribute('id', 'smo182126');
smo182147v0ar.push(smo182126);
const smo182127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo182127'] = smo182127;
smo182127.setAttribute('id', 'smo182127');
const smo182128 = new VF.Annotation('ki');
smo182128.setAttribute('id', 'smo182128');
smo182128.setFont('times', 12, 'normal');
smo182128.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo182127.addModifier(smo182128);
smo182128.addClass('lyric lyric-0 lyric-hyphen');
smo182147v0ar.push(smo182127);
const smo182129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo182129'] = smo182129;
smo182129.setAttribute('id', 'smo182129');
const smo182130 = new VF.Annotation('ri');
smo182130.setAttribute('id', 'smo182130');
smo182130.setFont('times', 12, 'normal');
smo182130.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo182129.addModifier(smo182130);
smo182130.addClass('lyric lyric-0');
smo182147v0ar.push(smo182129);
smo182147v0.addTickables(smo182147v0ar)
fmtsmo18214763.joinVoices([smo182147v0]);
const fmtsmo18525463 = new VF.Formatter();
//
// voices and notes for stave 5 63
const smo185254v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo185254v0ar = [];
const smo185228 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo185228'] = smo185228;
smo185228.setAttribute('id', 'smo185228');
smo185254v0ar.push(smo185228);
const smo185229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo185229'] = smo185229;
smo185229.setAttribute('id', 'smo185229');
smo185254v0ar.push(smo185229);
const smo185230 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo185230'] = smo185230;
smo185230.setAttribute('id', 'smo185230');
smo185254v0ar.push(smo185230);
const smo185231 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo185231'] = smo185231;
smo185231.setAttribute('id', 'smo185231');
const smo185232 = new VF.Annotation('Ki');
smo185232.setAttribute('id', 'smo185232');
smo185232.setFont('times', 12, 'normal');
smo185232.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo185231.addModifier(smo185232);
smo185232.addClass('lyric lyric-0 lyric-hyphen');
smo185254v0ar.push(smo185231);
const smo185233 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo185233'] = smo185233;
smo185233.setAttribute('id', 'smo185233');
smo185254v0ar.push(smo185233);
const smo185234 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo185234'] = smo185234;
smo185234.setAttribute('id', 'smo185234');
const smo185235 = new VF.Annotation('ki');
smo185235.setAttribute('id', 'smo185235');
smo185235.setFont('times', 12, 'normal');
smo185235.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo185234.addModifier(smo185235);
smo185235.addClass('lyric lyric-0 lyric-hyphen');
smo185254v0ar.push(smo185234);
const smo185236 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo185236'] = smo185236;
smo185236.setAttribute('id', 'smo185236');
const smo185237 = new VF.Annotation('ri');
smo185237.setAttribute('id', 'smo185237');
smo185237.setFont('times', 12, 'normal');
smo185237.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo185236.addModifier(smo185237);
smo185237.addClass('lyric lyric-0');
smo185254v0ar.push(smo185236);
smo185254v0.addTickables(smo185254v0ar)
fmtsmo18525463.joinVoices([smo185254v0]);
const fmtsmo18836663 = new VF.Formatter();
//
// voices and notes for stave 6 63
const smo188366v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo188366v0ar = [];
const smo188341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo188341'] = smo188341;
smo188341.setAttribute('id', 'smo188341');
smo188366v0ar.push(smo188341);
const smo188342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo188342'] = smo188342;
smo188342.setAttribute('id', 'smo188342');
smo188366v0ar.push(smo188342);
const smo188343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo188343'] = smo188343;
smo188343.setAttribute('id', 'smo188343');
const smo188344 = new VF.Annotation('Ki');
smo188344.setAttribute('id', 'smo188344');
smo188344.setFont('times', 12, 'normal');
smo188344.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo188343.addModifier(smo188344);
smo188344.addClass('lyric lyric-0 lyric-hyphen');
smo188366v0ar.push(smo188343);
const smo188345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo188345'] = smo188345;
smo188345.setAttribute('id', 'smo188345');
smo188366v0ar.push(smo188345);
const smo188346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo188346'] = smo188346;
smo188346.setAttribute('id', 'smo188346');
const smo188347 = new VF.Annotation('ki');
smo188347.setAttribute('id', 'smo188347');
smo188347.setFont('times', 12, 'normal');
smo188347.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo188346.addModifier(smo188347);
smo188347.addClass('lyric lyric-0 lyric-hyphen');
smo188366v0ar.push(smo188346);
const smo188348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo188348'] = smo188348;
smo188348.setAttribute('id', 'smo188348');
const smo188349 = new VF.Annotation('ri');
smo188349.setAttribute('id', 'smo188349');
smo188349.setFont('times', 12, 'normal');
smo188349.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo188348.addModifier(smo188349);
smo188349.addClass('lyric lyric-0');
smo188366v0ar.push(smo188348);
smo188366v0.addTickables(smo188366v0ar)
fmtsmo18836663.joinVoices([smo188366v0]);
const fmtsmo19147563 = new VF.Formatter();
//
// voices and notes for stave 7 63
const smo191475v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo191475v0ar = [];
const smo191450 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo191450'] = smo191450;
smo191450.setAttribute('id', 'smo191450');
smo191475v0ar.push(smo191450);
const smo191451 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo191451'] = smo191451;
smo191451.setAttribute('id', 'smo191451');
smo191475v0ar.push(smo191451);
const smo191452 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo191452'] = smo191452;
smo191452.setAttribute('id', 'smo191452');
const smo191453 = new VF.Annotation('Ki');
smo191453.setAttribute('id', 'smo191453');
smo191453.setFont('times', 12, 'normal');
smo191453.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo191452.addModifier(smo191453);
smo191453.addClass('lyric lyric-0 lyric-hyphen');
smo191475v0ar.push(smo191452);
const smo191454 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo191454'] = smo191454;
smo191454.setAttribute('id', 'smo191454');
smo191475v0ar.push(smo191454);
const smo191455 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo191455'] = smo191455;
smo191455.setAttribute('id', 'smo191455');
const smo191456 = new VF.Annotation('ki');
smo191456.setAttribute('id', 'smo191456');
smo191456.setFont('times', 12, 'normal');
smo191456.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo191455.addModifier(smo191456);
smo191456.addClass('lyric lyric-0 lyric-hyphen');
smo191475v0ar.push(smo191455);
const smo191457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo191457'] = smo191457;
smo191457.setAttribute('id', 'smo191457');
const smo191458 = new VF.Annotation('ri');
smo191458.setAttribute('id', 'smo191458');
smo191458.setFont('times', 12, 'normal');
smo191458.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo191457.addModifier(smo191458);
smo191458.addClass('lyric lyric-0');
smo191475v0ar.push(smo191457);
smo191475v0.addTickables(smo191475v0ar)
fmtsmo19147563.joinVoices([smo191475v0]);
const fmtsmo19456163 = new VF.Formatter();
//
// voices and notes for stave 8 63
const smo194561v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo194561v0ar = [];
const smo194536 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo194536'] = smo194536;
smo194536.setAttribute('id', 'smo194536');
smo194561v0ar.push(smo194536);
const smo194537 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo194537'] = smo194537;
smo194537.setAttribute('id', 'smo194537');
smo194561v0ar.push(smo194537);
const smo194538 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo194538'] = smo194538;
smo194538.setAttribute('id', 'smo194538');
const smo194539 = new VF.Annotation('Ki');
smo194539.setAttribute('id', 'smo194539');
smo194539.setFont('times', 12, 'normal');
smo194539.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo194538.addModifier(smo194539);
smo194539.addClass('lyric lyric-0 lyric-hyphen');
smo194561v0ar.push(smo194538);
const smo194540 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo194540'] = smo194540;
smo194540.setAttribute('id', 'smo194540');
smo194561v0ar.push(smo194540);
const smo194541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo194541'] = smo194541;
smo194541.setAttribute('id', 'smo194541');
const smo194542 = new VF.Annotation('ki');
smo194542.setAttribute('id', 'smo194542');
smo194542.setFont('times', 12, 'normal');
smo194542.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo194541.addModifier(smo194542);
smo194542.addClass('lyric lyric-0 lyric-hyphen');
smo194561v0ar.push(smo194541);
const smo194543 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo194543'] = smo194543;
smo194543.setAttribute('id', 'smo194543');
const smo194544 = new VF.Annotation('ri');
smo194544.setAttribute('id', 'smo194544');
smo194544.setFont('times', 12, 'normal');
smo194544.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo194543.addModifier(smo194544);
smo194544.addClass('lyric lyric-0');
smo194561v0ar.push(smo194543);
smo194561v0.addTickables(smo194561v0ar)
fmtsmo19456163.joinVoices([smo194561v0]);
const fmtsmo19765063 = new VF.Formatter();
//
// voices and notes for stave 9 63
const smo197650v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo197650v0ar = [];
const smo197625 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo197625'] = smo197625;
smo197625.setAttribute('id', 'smo197625');
smo197650v0ar.push(smo197625);
const smo197626 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo197626'] = smo197626;
smo197626.setAttribute('id', 'smo197626');
smo197650v0ar.push(smo197626);
const smo197627 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo197627'] = smo197627;
smo197627.setAttribute('id', 'smo197627');
const smo197628 = new VF.Annotation('Ki');
smo197628.setAttribute('id', 'smo197628');
smo197628.setFont('times', 12, 'normal');
smo197628.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo197627.addModifier(smo197628);
smo197628.addClass('lyric lyric-0 lyric-hyphen');
smo197650v0ar.push(smo197627);
const smo197629 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo197629'] = smo197629;
smo197629.setAttribute('id', 'smo197629');
smo197650v0ar.push(smo197629);
const smo197630 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo197630'] = smo197630;
smo197630.setAttribute('id', 'smo197630');
const smo197631 = new VF.Annotation('ki');
smo197631.setAttribute('id', 'smo197631');
smo197631.setFont('times', 12, 'normal');
smo197631.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo197630.addModifier(smo197631);
smo197631.addClass('lyric lyric-0 lyric-hyphen');
smo197650v0ar.push(smo197630);
const smo197632 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo197632'] = smo197632;
smo197632.setAttribute('id', 'smo197632');
const smo197633 = new VF.Annotation('ri');
smo197633.setAttribute('id', 'smo197633');
smo197633.setFont('times', 12, 'normal');
smo197633.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo197632.addModifier(smo197633);
smo197633.addClass('lyric lyric-0');
smo197650v0ar.push(smo197632);
smo197650v0.addTickables(smo197650v0ar)
fmtsmo19765063.joinVoices([smo197650v0]);
const fmtsmo20069063 = new VF.Formatter();
//
// voices and notes for stave 10 63
const smo200690v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo200690v0ar = [];
const smo200665 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo200665'] = smo200665;
smo200665.setAttribute('id', 'smo200665');
smo200690v0ar.push(smo200665);
const smo200666 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo200666'] = smo200666;
smo200666.setAttribute('id', 'smo200666');
smo200690v0ar.push(smo200666);
const smo200667 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo200667'] = smo200667;
smo200667.setAttribute('id', 'smo200667');
const smo200668 = new VF.Annotation('Ki');
smo200668.setAttribute('id', 'smo200668');
smo200668.setFont('times', 12, 'normal');
smo200668.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo200667.addModifier(smo200668);
smo200668.addClass('lyric lyric-0 lyric-hyphen');
smo200690v0ar.push(smo200667);
const smo200669 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo200669'] = smo200669;
smo200669.setAttribute('id', 'smo200669');
smo200690v0ar.push(smo200669);
const smo200670 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo200670'] = smo200670;
smo200670.setAttribute('id', 'smo200670');
const smo200671 = new VF.Annotation('ki');
smo200671.setAttribute('id', 'smo200671');
smo200671.setFont('times', 12, 'normal');
smo200671.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo200670.addModifier(smo200671);
smo200671.addClass('lyric lyric-0 lyric-hyphen');
smo200690v0ar.push(smo200670);
const smo200672 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo200672'] = smo200672;
smo200672.setAttribute('id', 'smo200672');
const smo200673 = new VF.Annotation('ri');
smo200673.setAttribute('id', 'smo200673');
smo200673.setFont('times', 12, 'normal');
smo200673.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo200672.addModifier(smo200673);
smo200673.addClass('lyric lyric-0');
smo200690v0ar.push(smo200672);
smo200690v0.addTickables(smo200690v0ar)
fmtsmo20069063.joinVoices([smo200690v0]);
const fmtsmo20374463 = new VF.Formatter();
//
// voices and notes for stave 11 63
const smo203744v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo203744v0ar = [];
const smo203719 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo203719'] = smo203719;
smo203719.setAttribute('id', 'smo203719');
smo203744v0ar.push(smo203719);
const smo203720 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo203720'] = smo203720;
smo203720.setAttribute('id', 'smo203720');
smo203744v0ar.push(smo203720);
const smo203721 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo203721'] = smo203721;
smo203721.setAttribute('id', 'smo203721');
const smo203722 = new VF.Annotation('Ki');
smo203722.setAttribute('id', 'smo203722');
smo203722.setFont('times', 12, 'normal');
smo203722.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo203721.addModifier(smo203722);
smo203722.addClass('lyric lyric-0 lyric-hyphen');
smo203744v0ar.push(smo203721);
const smo203723 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo203723'] = smo203723;
smo203723.setAttribute('id', 'smo203723');
smo203744v0ar.push(smo203723);
const smo203724 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo203724'] = smo203724;
smo203724.setAttribute('id', 'smo203724');
const smo203725 = new VF.Annotation('ki');
smo203725.setAttribute('id', 'smo203725');
smo203725.setFont('times', 12, 'normal');
smo203725.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo203724.addModifier(smo203725);
smo203725.addClass('lyric lyric-0 lyric-hyphen');
smo203744v0ar.push(smo203724);
const smo203726 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo203726'] = smo203726;
smo203726.setAttribute('id', 'smo203726');
const smo203727 = new VF.Annotation('ri');
smo203727.setAttribute('id', 'smo203727');
smo203727.setFont('times', 12, 'normal');
smo203727.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo203726.addModifier(smo203727);
smo203727.addClass('lyric lyric-0');
smo203744v0ar.push(smo203726);
smo203744v0.addTickables(smo203744v0ar)
fmtsmo20374463.joinVoices([smo203744v0]);
const fmtsmo20678763 = new VF.Formatter();
//
// voices and notes for stave 12 63
const smo206787v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo206787v0ar = [];
const smo206762 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo206762'] = smo206762;
smo206762.setAttribute('id', 'smo206762');
smo206787v0ar.push(smo206762);
const smo206763 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo206763'] = smo206763;
smo206763.setAttribute('id', 'smo206763');
smo206787v0ar.push(smo206763);
const smo206764 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo206764'] = smo206764;
smo206764.setAttribute('id', 'smo206764');
const smo206765 = new VF.Annotation('Ki');
smo206765.setAttribute('id', 'smo206765');
smo206765.setFont('times', 12, 'normal');
smo206765.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo206764.addModifier(smo206765);
smo206765.addClass('lyric lyric-0 lyric-hyphen');
smo206787v0ar.push(smo206764);
const smo206766 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo206766'] = smo206766;
smo206766.setAttribute('id', 'smo206766');
smo206787v0ar.push(smo206766);
const smo206767 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo206767'] = smo206767;
smo206767.setAttribute('id', 'smo206767');
const smo206768 = new VF.Annotation('ki');
smo206768.setAttribute('id', 'smo206768');
smo206768.setFont('times', 12, 'normal');
smo206768.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo206767.addModifier(smo206768);
smo206768.addClass('lyric lyric-0 lyric-hyphen');
smo206787v0ar.push(smo206767);
const smo206769 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo206769'] = smo206769;
smo206769.setAttribute('id', 'smo206769');
const smo206770 = new VF.Annotation('ri');
smo206770.setAttribute('id', 'smo206770');
smo206770.setFont('times', 12, 'normal');
smo206770.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo206769.addModifier(smo206770);
smo206770.addClass('lyric lyric-0');
smo206787v0ar.push(smo206769);
smo206787v0.addTickables(smo206787v0ar)
fmtsmo20678763.joinVoices([smo206787v0]);
const fmtsmo21000363 = new VF.Formatter();
//
// voices and notes for stave 13 63
const smo210003v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo210003v0ar = [];
const smo209980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo209980'] = smo209980;
smo209980.setAttribute('id', 'smo209980');
smo210003v0ar.push(smo209980);
const smo209981 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo209981'] = smo209981;
smo209981.setAttribute('id', 'smo209981');
smo210003v0ar.push(smo209981);
const smo209982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo209982'] = smo209982;
smo209982.setAttribute('id', 'smo209982');
smo210003v0ar.push(smo209982);
const smo209983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
noteHash['smo209983'] = smo209983;
smo209983.setAttribute('id', 'smo209983');
const smo2099830acc = new VF.Accidental('#');
smo209983.addModifier(smo2099830acc, 0);
smo210003v0ar.push(smo209983);
const smo209984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
noteHash['smo209984'] = smo209984;
smo209984.setAttribute('id', 'smo209984');
smo210003v0ar.push(smo209984);
const smo209985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
noteHash['smo209985'] = smo209985;
smo209985.setAttribute('id', 'smo209985');
smo210003v0ar.push(smo209985);
const smo209986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
noteHash['smo209986'] = smo209986;
smo209986.setAttribute('id', 'smo209986');
smo210003v0ar.push(smo209986);
smo210003v0.addTickables(smo210003v0ar)
fmtsmo21000363.joinVoices([smo210003v0]);
const fmtsmo21321663 = new VF.Formatter();
//
// voices and notes for stave 14 63
const smo213216v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo213216v0ar = [];
const smo213193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","ab/4/n","bb/4/n","dn/5/n"]}'))
noteHash['smo213193'] = smo213193;
smo213193.setAttribute('id', 'smo213193');
const smo2131931acc = new VF.Accidental('b');
smo213193.addModifier(smo2131931acc, 1);
smo213216v0ar.push(smo213193);
const smo213194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo213194'] = smo213194;
smo213194.setAttribute('id', 'smo213194');
smo213216v0ar.push(smo213194);
const smo213195 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo213195'] = smo213195;
smo213195.setAttribute('id', 'smo213195');
smo213216v0ar.push(smo213195);
const smo213196 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
noteHash['smo213196'] = smo213196;
smo213196.setAttribute('id', 'smo213196');
const smo2131960acc = new VF.Accidental('#');
smo213196.addModifier(smo2131960acc, 0);
const smo2131961acc = new VF.Accidental('n');
smo213196.addModifier(smo2131961acc, 1);
smo213216v0ar.push(smo213196);
const smo213197 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
noteHash['smo213197'] = smo213197;
smo213197.setAttribute('id', 'smo213197');
smo213216v0ar.push(smo213197);
const smo213198 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
noteHash['smo213198'] = smo213198;
smo213198.setAttribute('id', 'smo213198');
smo213216v0ar.push(smo213198);
const smo213199 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","dn/5/n"]}'))
noteHash['smo213199'] = smo213199;
smo213199.setAttribute('id', 'smo213199');
smo213216v0ar.push(smo213199);
smo213216v0.addTickables(smo213216v0ar)
fmtsmo21321663.joinVoices([smo213216v0]);
const fmtsmo21641163 = new VF.Formatter();
//
// voices and notes for stave 15 63
const smo216411v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo216411v0ar = [];
const smo216388 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo216388'] = smo216388;
smo216388.setAttribute('id', 'smo216388');
smo216411v0ar.push(smo216388);
const smo216389 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo216389'] = smo216389;
smo216389.setAttribute('id', 'smo216389');
smo216411v0ar.push(smo216389);
const smo216390 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo216390'] = smo216390;
smo216390.setAttribute('id', 'smo216390');
smo216411v0ar.push(smo216390);
const smo216391 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo216391'] = smo216391;
smo216391.setAttribute('id', 'smo216391');
smo216411v0ar.push(smo216391);
const smo216392 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo216392'] = smo216392;
smo216392.setAttribute('id', 'smo216392');
smo216411v0ar.push(smo216392);
const smo216393 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo216393'] = smo216393;
smo216393.setAttribute('id', 'smo216393');
smo216411v0ar.push(smo216393);
const smo216394 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo216394'] = smo216394;
smo216394.setAttribute('id', 'smo216394');
smo216411v0ar.push(smo216394);
smo216411v0.addTickables(smo216411v0ar)
fmtsmo21641163.joinVoices([smo216411v0]);
const fmtsmo21953063 = new VF.Formatter();
//
// voices and notes for stave 16 63
const smo219530v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo219530v0ar = [];
const smo219511 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo219511'] = smo219511;
smo219511.setAttribute('id', 'smo219511');
smo219530v0ar.push(smo219511);
const smo219512 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo219512'] = smo219512;
smo219512.setAttribute('id', 'smo219512');
smo219530v0ar.push(smo219512);
const smo219513 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo219513'] = smo219513;
smo219513.setAttribute('id', 'smo219513');
smo219530v0ar.push(smo219513);
smo219530v0.addTickables(smo219530v0ar)
fmtsmo21953063.joinVoices([smo219530v0]);
const fmtsmo22271163 = new VF.Formatter();
//
// voices and notes for stave 17 63
const smo222711v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo222711v0ar = [];
const smo222691 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo222691'] = smo222691;
smo222691.setAttribute('id', 'smo222691');
const smo2226910acc = new VF.Accidental('n');
smo222691.addModifier(smo2226910acc, 0);
smo222691.addModifier(new VF.Dot(), 0);
smo222711v0ar.push(smo222691);
const smo222692 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo222692'] = smo222692;
smo222692.setAttribute('id', 'smo222692');
smo222711v0ar.push(smo222692);
const smo222693 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo222693'] = smo222693;
smo222693.setAttribute('id', 'smo222693');
smo222711v0ar.push(smo222693);
const smo222694 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo222694'] = smo222694;
smo222694.setAttribute('id', 'smo222694');
smo222711v0ar.push(smo222694);
smo222711v0.addTickables(smo222711v0ar)
fmtsmo22271163.joinVoices([smo222711v0]);
// create beam groups and tuplets for format grp smo224512 before formatting
const dirsmo315783 = smo169852.getStemDirection();
smo169852.setStemDirection(dirsmo315783);
smo169854.setStemDirection(dirsmo315783);
const smo315783 = new VF.Beam([smo169852,smo169854]);
const dirsmo315786 = smo172846.getStemDirection();
smo172846.setStemDirection(dirsmo315786);
smo172848.setStemDirection(dirsmo315786);
const smo315786 = new VF.Beam([smo172846,smo172848]);
const dirsmo315789 = smo175989.getStemDirection();
smo175989.setStemDirection(dirsmo315789);
smo175991.setStemDirection(dirsmo315789);
const smo315789 = new VF.Beam([smo175989,smo175991]);
const dirsmo315792 = smo179105.getStemDirection();
smo179105.setStemDirection(dirsmo315792);
smo179107.setStemDirection(dirsmo315792);
const smo315792 = new VF.Beam([smo179105,smo179107]);
const dirsmo315795 = smo182124.getStemDirection();
smo182124.setStemDirection(dirsmo315795);
smo182126.setStemDirection(dirsmo315795);
const smo315795 = new VF.Beam([smo182124,smo182126]);
 
// formatting measures in staff group smo224512
fmtsmo16987563.format([smo169875v0,smo172869v0,smo176012v0,smo179128v0,smo182147v0], 261);
const stavesmo169875 = new VF.Stave(159, 210, 347);
stavesmo169875.setAttribute('id', 'stavesmo169875');
stavesmo169875.setBegBarType(1);
stavesmo169875.setSection('D', 0);
stavesmo169875.addClef('treble');
const keysmo169875 = new VF.KeySignature('D');
keysmo169875.addToStave(stavesmo169875);
stavesmo169875.setContext(context);
stavesmo169875.draw();
smo169875v0.draw(context, stavesmo169875);
smo315783.setContext(context);
smo315783.draw();
const stavesmo172869 = new VF.Stave(159, 316, 347);
stavesmo172869.setAttribute('id', 'stavesmo172869');
stavesmo172869.setBegBarType(1);
stavesmo172869.addClef('treble');
const keysmo172869 = new VF.KeySignature('D');
keysmo172869.addToStave(stavesmo172869);
stavesmo172869.setContext(context);
stavesmo172869.draw();
smo172869v0.draw(context, stavesmo172869);
smo315786.setContext(context);
smo315786.draw();
const stavesmo176012 = new VF.Stave(159, 437, 347);
stavesmo176012.setAttribute('id', 'stavesmo176012');
stavesmo176012.setBegBarType(1);
stavesmo176012.addClef('treble');
const keysmo176012 = new VF.KeySignature('G');
keysmo176012.addToStave(stavesmo176012);
stavesmo176012.setContext(context);
stavesmo176012.draw();
smo176012v0.draw(context, stavesmo176012);
smo315789.setContext(context);
smo315789.draw();
const stavesmo179128 = new VF.Stave(159, 553, 347);
stavesmo179128.setAttribute('id', 'stavesmo179128');
stavesmo179128.setBegBarType(1);
stavesmo179128.addClef('treble');
const keysmo179128 = new VF.KeySignature('G');
keysmo179128.addToStave(stavesmo179128);
stavesmo179128.setContext(context);
stavesmo179128.draw();
smo179128v0.draw(context, stavesmo179128);
smo315792.setContext(context);
smo315792.draw();
const stavesmo182147 = new VF.Stave(159, 659, 347);
stavesmo182147.setAttribute('id', 'stavesmo182147');
stavesmo182147.setBegBarType(1);
stavesmo182147.addClef('treble');
const keysmo182147 = new VF.KeySignature('D');
keysmo182147.addToStave(stavesmo182147);
stavesmo182147.setContext(context);
stavesmo182147.draw();
smo182147v0.draw(context, stavesmo182147);
smo315795.setContext(context);
smo315795.draw();
// create beam groups and tuplets for format grp smo224514 before formatting
const dirsmo315798 = smo185228.getStemDirection();
smo185228.setStemDirection(dirsmo315798);
smo185229.setStemDirection(dirsmo315798);
const smo315798 = new VF.Beam([smo185228,smo185229]);
const dirsmo315799 = smo185231.getStemDirection();
smo185231.setStemDirection(dirsmo315799);
smo185233.setStemDirection(dirsmo315799);
const smo315799 = new VF.Beam([smo185231,smo185233]);
const dirsmo315802 = smo188343.getStemDirection();
smo188343.setStemDirection(dirsmo315802);
smo188345.setStemDirection(dirsmo315802);
const smo315802 = new VF.Beam([smo188343,smo188345]);
const dirsmo315805 = smo191452.getStemDirection();
smo191452.setStemDirection(dirsmo315805);
smo191454.setStemDirection(dirsmo315805);
const smo315805 = new VF.Beam([smo191452,smo191454]);
const dirsmo315808 = smo194538.getStemDirection();
smo194538.setStemDirection(dirsmo315808);
smo194540.setStemDirection(dirsmo315808);
const smo315808 = new VF.Beam([smo194538,smo194540]);
 
// formatting measures in staff group smo224514
fmtsmo18525463.format([smo185254v0,smo188366v0,smo191475v0,smo194561v0], 274);
const stavesmo185254 = new VF.Stave(159, 780, 347);
stavesmo185254.setAttribute('id', 'stavesmo185254');
stavesmo185254.setBegBarType(1);
stavesmo185254.addClef('treble');
const keysmo185254 = new VF.KeySignature('G');
keysmo185254.addToStave(stavesmo185254);
stavesmo185254.setContext(context);
stavesmo185254.draw();
smo185254v0.draw(context, stavesmo185254);
smo315798.setContext(context);
smo315798.draw();
smo315799.setContext(context);
smo315799.draw();
const stavesmo188366 = new VF.Stave(159, 896, 347);
stavesmo188366.setAttribute('id', 'stavesmo188366');
stavesmo188366.setBegBarType(1);
stavesmo188366.addClef('treble');
const keysmo188366 = new VF.KeySignature('G');
keysmo188366.addToStave(stavesmo188366);
stavesmo188366.setContext(context);
stavesmo188366.draw();
smo188366v0.draw(context, stavesmo188366);
smo315802.setContext(context);
smo315802.draw();
const stavesmo191475 = new VF.Stave(159, 1012, 347);
stavesmo191475.setAttribute('id', 'stavesmo191475');
stavesmo191475.setBegBarType(1);
stavesmo191475.addClef('treble');
const keysmo191475 = new VF.KeySignature('G');
keysmo191475.addToStave(stavesmo191475);
stavesmo191475.setContext(context);
stavesmo191475.draw();
smo191475v0.draw(context, stavesmo191475);
smo315805.setContext(context);
smo315805.draw();
const stavesmo194561 = new VF.Stave(159, 1128, 347);
stavesmo194561.setAttribute('id', 'stavesmo194561');
stavesmo194561.setBegBarType(1);
stavesmo194561.addClef('treble');
const keysmo194561 = new VF.KeySignature('G');
keysmo194561.addToStave(stavesmo194561);
stavesmo194561.setContext(context);
stavesmo194561.draw();
smo194561v0.draw(context, stavesmo194561);
smo315808.setContext(context);
smo315808.draw();
// create beam groups and tuplets for format grp smo224516 before formatting
const dirsmo315811 = smo197627.getStemDirection();
smo197627.setStemDirection(dirsmo315811);
smo197629.setStemDirection(dirsmo315811);
const smo315811 = new VF.Beam([smo197627,smo197629]);
const dirsmo315814 = smo200667.getStemDirection();
smo200667.setStemDirection(dirsmo315814);
smo200669.setStemDirection(dirsmo315814);
const smo315814 = new VF.Beam([smo200667,smo200669]);
const dirsmo315817 = smo203721.getStemDirection();
smo203721.setStemDirection(dirsmo315817);
smo203723.setStemDirection(dirsmo315817);
const smo315817 = new VF.Beam([smo203721,smo203723]);
const dirsmo315820 = smo206764.getStemDirection();
smo206764.setStemDirection(dirsmo315820);
smo206766.setStemDirection(dirsmo315820);
const smo315820 = new VF.Beam([smo206764,smo206766]);
 
// formatting measures in staff group smo224516
fmtsmo19765063.format([smo197650v0,smo200690v0,smo203744v0,smo206787v0], 274);
const stavesmo197650 = new VF.Stave(159, 1264, 347);
stavesmo197650.setAttribute('id', 'stavesmo197650');
stavesmo197650.setBegBarType(1);
stavesmo197650.addClef('bass');
const keysmo197650 = new VF.KeySignature('F');
keysmo197650.addToStave(stavesmo197650);
stavesmo197650.setContext(context);
stavesmo197650.draw();
smo197650v0.draw(context, stavesmo197650);
smo315811.setContext(context);
smo315811.draw();
const stavesmo200690 = new VF.Stave(159, 1400, 347);
stavesmo200690.setAttribute('id', 'stavesmo200690');
stavesmo200690.setBegBarType(1);
stavesmo200690.addClef('bass');
const keysmo200690 = new VF.KeySignature('F');
keysmo200690.addToStave(stavesmo200690);
stavesmo200690.setContext(context);
stavesmo200690.draw();
smo200690v0.draw(context, stavesmo200690);
smo315814.setContext(context);
smo315814.draw();
const stavesmo203744 = new VF.Stave(159, 1536, 347);
stavesmo203744.setAttribute('id', 'stavesmo203744');
stavesmo203744.setBegBarType(1);
stavesmo203744.addClef('bass');
const keysmo203744 = new VF.KeySignature('F');
keysmo203744.addToStave(stavesmo203744);
stavesmo203744.setContext(context);
stavesmo203744.draw();
smo203744v0.draw(context, stavesmo203744);
smo315817.setContext(context);
smo315817.draw();
const stavesmo206787 = new VF.Stave(159, 1672, 347);
stavesmo206787.setAttribute('id', 'stavesmo206787');
stavesmo206787.setBegBarType(1);
stavesmo206787.addClef('bass');
const keysmo206787 = new VF.KeySignature('F');
keysmo206787.addToStave(stavesmo206787);
stavesmo206787.setContext(context);
stavesmo206787.draw();
smo206787v0.draw(context, stavesmo206787);
smo315820.setContext(context);
smo315820.draw();
// create beam groups and tuplets for format grp smo211835 before formatting
const dirsmo315823 = smo209983.getStemDirection();
smo209983.setStemDirection(dirsmo315823);
smo209984.setStemDirection(dirsmo315823);
const smo315823 = new VF.Beam([smo209983,smo209984]);
 
// formatting measures in staff group smo211835
fmtsmo21000363.format([smo210003v0], 276);
const stavesmo210003 = new VF.Stave(159, 1818, 347);
stavesmo210003.setAttribute('id', 'stavesmo210003');
stavesmo210003.setBegBarType(1);
stavesmo210003.addClef('treble');
const keysmo210003 = new VF.KeySignature('F');
keysmo210003.addToStave(stavesmo210003);
stavesmo210003.setContext(context);
stavesmo210003.draw();
smo210003v0.draw(context, stavesmo210003);
smo315823.setContext(context);
smo315823.draw();
// create beam groups and tuplets for format grp smo224510 before formatting
const dirsmo315826 = smo213196.getStemDirection();
smo213196.setStemDirection(dirsmo315826);
smo213197.setStemDirection(dirsmo315826);
const smo315826 = new VF.Beam([smo213196,smo213197]);
const dirsmo315829 = smo216391.getStemDirection();
smo216391.setStemDirection(dirsmo315829);
smo216392.setStemDirection(dirsmo315829);
const smo315829 = new VF.Beam([smo216391,smo216392]);
 
// formatting measures in staff group smo224510
fmtsmo21321663.format([smo213216v0,smo216411v0], 276);
const stavesmo213216 = new VF.Stave(159, 1924, 347);
stavesmo213216.setAttribute('id', 'stavesmo213216');
stavesmo213216.setBegBarType(1);
stavesmo213216.addClef('treble');
const keysmo213216 = new VF.KeySignature('F');
keysmo213216.addToStave(stavesmo213216);
stavesmo213216.setContext(context);
stavesmo213216.draw();
smo213216v0.draw(context, stavesmo213216);
smo315826.setContext(context);
smo315826.draw();
const stavesmo216411 = new VF.Stave(159, 2010, 347);
stavesmo216411.setAttribute('id', 'stavesmo216411');
stavesmo216411.setBegBarType(1);
stavesmo216411.addClef('bass');
const keysmo216411 = new VF.KeySignature('F');
keysmo216411.addToStave(stavesmo216411);
stavesmo216411.setContext(context);
stavesmo216411.draw();
smo216411v0.draw(context, stavesmo216411);
smo315829.setContext(context);
smo315829.draw();
// create beam groups and tuplets for format grp smo221348 before formatting
 
// formatting measures in staff group smo221348
fmtsmo21953063.format([smo219530v0], 274);
const stavesmo219530 = new VF.Stave(159, 2081, 347);
stavesmo219530.setAttribute('id', 'stavesmo219530');
stavesmo219530.setBegBarType(1);
stavesmo219530.addClef('bass');
const keysmo219530 = new VF.KeySignature('F');
keysmo219530.addToStave(stavesmo219530);
stavesmo219530.setContext(context);
stavesmo219530.draw();
smo219530v0.draw(context, stavesmo219530);
// create beam groups and tuplets for format grp smo224504 before formatting
 
// formatting measures in staff group smo224504
fmtsmo22271163.format([smo222711v0], 282);
const stavesmo222711 = new VF.Stave(159, 2152, 347);
stavesmo222711.setAttribute('id', 'stavesmo222711');
stavesmo222711.setBegBarType(1);
stavesmo222711.addClef('percussion');
const keysmo222711 = new VF.KeySignature('F');
keysmo222711.addToStave(stavesmo222711);
stavesmo222711.setContext(context);
stavesmo222711.draw();
smo222711v0.draw(context, stavesmo222711);
const leftsmo224504stavesmo16987517 = new VF.StaveConnector(stavesmo169875, stavesmo182147).setType(3);
leftsmo224504stavesmo16987517.setContext(context).draw();
const leftsmo224504stavesmo18525417 = new VF.StaveConnector(stavesmo185254, stavesmo194561).setType(3);
leftsmo224504stavesmo18525417.setContext(context).draw();
const leftsmo224504stavesmo19765017 = new VF.StaveConnector(stavesmo197650, stavesmo206787).setType(1);
leftsmo224504stavesmo19765017.setContext(context).draw();
const leftsmo224504stavesmo21321617 = new VF.StaveConnector(stavesmo213216, stavesmo216411).setType(3);
leftsmo224504stavesmo21321617.setContext(context).draw();
const fmtsmo16990064 = new VF.Formatter();
//
// voices and notes for stave 0 64
const smo169900v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo169900v0ar = [];
const smo169876 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo169876'] = smo169876;
smo169876.setAttribute('id', 'smo169876');
const smo169877 = new VF.Annotation('bun');
smo169877.setAttribute('id', 'smo169877');
smo169877.setFont('times', 12, 'normal');
smo169877.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo169876.addModifier(smo169877);
smo169877.addClass('lyric lyric-0');
smo169900v0ar.push(smo169876);
const smo169878 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo169878'] = smo169878;
smo169878.setAttribute('id', 'smo169878');
smo169900v0ar.push(smo169878);
const smo169879 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo169879'] = smo169879;
smo169879.setAttribute('id', 'smo169879');
smo169900v0ar.push(smo169879);
const smo169880 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo169880'] = smo169880;
smo169880.setAttribute('id', 'smo169880');
const smo169881 = new VF.Annotation('Man');
smo169881.setAttribute('id', 'smo169881');
smo169881.setFont('times', 12, 'normal');
smo169881.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo169880.addModifier(smo169881);
smo169881.addClass('lyric lyric-0 lyric-hyphen');
smo169900v0ar.push(smo169880);
const smo169882 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo169882'] = smo169882;
smo169882.setAttribute('id', 'smo169882');
smo169900v0ar.push(smo169882);
const smo169883 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo169883'] = smo169883;
smo169883.setAttribute('id', 'smo169883');
const smo1698830acc = new VF.Accidental('n');
smo169883.addModifier(smo1698830acc, 0);
const smo169884 = new VF.Annotation('ding');
smo169884.setAttribute('id', 'smo169884');
smo169884.setFont('times', 12, 'normal');
smo169884.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo169883.addModifier(smo169884);
smo169884.addClass('lyric lyric-0 lyric-hyphen');
smo169900v0ar.push(smo169883);
smo169900v0.addTickables(smo169900v0ar)
fmtsmo16990064.joinVoices([smo169900v0]);
const fmtsmo17289464 = new VF.Formatter();
//
// voices and notes for stave 1 64
const smo172894v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo172894v0ar = [];
const smo172870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo172870'] = smo172870;
smo172870.setAttribute('id', 'smo172870');
const smo172871 = new VF.Annotation('bun');
smo172871.setAttribute('id', 'smo172871');
smo172871.setFont('times', 12, 'normal');
smo172871.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo172870.addModifier(smo172871);
smo172871.addClass('lyric lyric-0');
smo172894v0ar.push(smo172870);
const smo172872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo172872'] = smo172872;
smo172872.setAttribute('id', 'smo172872');
smo172894v0ar.push(smo172872);
const smo172873 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo172873'] = smo172873;
smo172873.setAttribute('id', 'smo172873');
smo172894v0ar.push(smo172873);
const smo172874 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo172874'] = smo172874;
smo172874.setAttribute('id', 'smo172874');
const smo172875 = new VF.Annotation('Man');
smo172875.setAttribute('id', 'smo172875');
smo172875.setFont('times', 12, 'normal');
smo172875.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo172874.addModifier(smo172875);
smo172875.addClass('lyric lyric-0 lyric-hyphen');
smo172894v0ar.push(smo172874);
const smo172876 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo172876'] = smo172876;
smo172876.setAttribute('id', 'smo172876');
smo172894v0ar.push(smo172876);
const smo172877 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo172877'] = smo172877;
smo172877.setAttribute('id', 'smo172877');
const smo1728770acc = new VF.Accidental('n');
smo172877.addModifier(smo1728770acc, 0);
const smo172878 = new VF.Annotation('ding');
smo172878.setAttribute('id', 'smo172878');
smo172878.setFont('times', 12, 'normal');
smo172878.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo172877.addModifier(smo172878);
smo172878.addClass('lyric lyric-0 lyric-hyphen');
smo172894v0ar.push(smo172877);
smo172894v0.addTickables(smo172894v0ar)
fmtsmo17289464.joinVoices([smo172894v0]);
const fmtsmo17603764 = new VF.Formatter();
//
// voices and notes for stave 2 64
const smo176037v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo176037v0ar = [];
const smo176013 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo176013'] = smo176013;
smo176013.setAttribute('id', 'smo176013');
const smo176014 = new VF.Annotation('bun');
smo176014.setAttribute('id', 'smo176014');
smo176014.setFont('times', 12, 'normal');
smo176014.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo176013.addModifier(smo176014);
smo176014.addClass('lyric lyric-0');
smo176037v0ar.push(smo176013);
const smo176015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo176015'] = smo176015;
smo176015.setAttribute('id', 'smo176015');
smo176037v0ar.push(smo176015);
const smo176016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo176016'] = smo176016;
smo176016.setAttribute('id', 'smo176016');
smo176037v0ar.push(smo176016);
const smo176017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo176017'] = smo176017;
smo176017.setAttribute('id', 'smo176017');
const smo176018 = new VF.Annotation('Man');
smo176018.setAttribute('id', 'smo176018');
smo176018.setFont('times', 12, 'normal');
smo176018.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo176017.addModifier(smo176018);
smo176018.addClass('lyric lyric-0 lyric-hyphen');
smo176037v0ar.push(smo176017);
const smo176019 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo176019'] = smo176019;
smo176019.setAttribute('id', 'smo176019');
smo176037v0ar.push(smo176019);
const smo176020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo176020'] = smo176020;
smo176020.setAttribute('id', 'smo176020');
const smo1760200acc = new VF.Accidental('n');
smo176020.addModifier(smo1760200acc, 0);
const smo176021 = new VF.Annotation('ding');
smo176021.setAttribute('id', 'smo176021');
smo176021.setFont('times', 12, 'normal');
smo176021.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo176020.addModifier(smo176021);
smo176021.addClass('lyric lyric-0 lyric-hyphen');
smo176037v0ar.push(smo176020);
smo176037v0.addTickables(smo176037v0ar)
fmtsmo17603764.joinVoices([smo176037v0]);
const fmtsmo17915364 = new VF.Formatter();
//
// voices and notes for stave 3 64
const smo179153v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo179153v0ar = [];
const smo179129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo179129'] = smo179129;
smo179129.setAttribute('id', 'smo179129');
const smo179130 = new VF.Annotation('bun');
smo179130.setAttribute('id', 'smo179130');
smo179130.setFont('times', 12, 'normal');
smo179130.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo179129.addModifier(smo179130);
smo179130.addClass('lyric lyric-0');
smo179153v0ar.push(smo179129);
const smo179131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo179131'] = smo179131;
smo179131.setAttribute('id', 'smo179131');
smo179153v0ar.push(smo179131);
const smo179132 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo179132'] = smo179132;
smo179132.setAttribute('id', 'smo179132');
smo179153v0ar.push(smo179132);
const smo179133 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo179133'] = smo179133;
smo179133.setAttribute('id', 'smo179133');
const smo179134 = new VF.Annotation('Man');
smo179134.setAttribute('id', 'smo179134');
smo179134.setFont('times', 12, 'normal');
smo179134.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo179133.addModifier(smo179134);
smo179134.addClass('lyric lyric-0 lyric-hyphen');
smo179153v0ar.push(smo179133);
const smo179135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo179135'] = smo179135;
smo179135.setAttribute('id', 'smo179135');
smo179153v0ar.push(smo179135);
const smo179136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo179136'] = smo179136;
smo179136.setAttribute('id', 'smo179136');
const smo1791360acc = new VF.Accidental('n');
smo179136.addModifier(smo1791360acc, 0);
const smo179137 = new VF.Annotation('ding');
smo179137.setAttribute('id', 'smo179137');
smo179137.setFont('times', 12, 'normal');
smo179137.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo179136.addModifier(smo179137);
smo179137.addClass('lyric lyric-0 lyric-hyphen');
smo179153v0ar.push(smo179136);
smo179153v0.addTickables(smo179153v0ar)
fmtsmo17915364.joinVoices([smo179153v0]);
const fmtsmo18217264 = new VF.Formatter();
//
// voices and notes for stave 4 64
const smo182172v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo182172v0ar = [];
const smo182148 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo182148'] = smo182148;
smo182148.setAttribute('id', 'smo182148');
const smo182149 = new VF.Annotation('bun');
smo182149.setAttribute('id', 'smo182149');
smo182149.setFont('times', 12, 'normal');
smo182149.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo182148.addModifier(smo182149);
smo182149.addClass('lyric lyric-0');
smo182172v0ar.push(smo182148);
const smo182150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo182150'] = smo182150;
smo182150.setAttribute('id', 'smo182150');
smo182172v0ar.push(smo182150);
const smo182151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo182151'] = smo182151;
smo182151.setAttribute('id', 'smo182151');
smo182172v0ar.push(smo182151);
const smo182152 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo182152'] = smo182152;
smo182152.setAttribute('id', 'smo182152');
const smo182153 = new VF.Annotation('Man');
smo182153.setAttribute('id', 'smo182153');
smo182153.setFont('times', 12, 'normal');
smo182153.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo182152.addModifier(smo182153);
smo182153.addClass('lyric lyric-0 lyric-hyphen');
smo182172v0ar.push(smo182152);
const smo182154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo182154'] = smo182154;
smo182154.setAttribute('id', 'smo182154');
smo182172v0ar.push(smo182154);
const smo182155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo182155'] = smo182155;
smo182155.setAttribute('id', 'smo182155');
const smo1821550acc = new VF.Accidental('n');
smo182155.addModifier(smo1821550acc, 0);
const smo182156 = new VF.Annotation('ding');
smo182156.setAttribute('id', 'smo182156');
smo182156.setFont('times', 12, 'normal');
smo182156.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo182155.addModifier(smo182156);
smo182156.addClass('lyric lyric-0 lyric-hyphen');
smo182172v0ar.push(smo182155);
smo182172v0.addTickables(smo182172v0ar)
fmtsmo18217264.joinVoices([smo182172v0]);
const fmtsmo18527964 = new VF.Formatter();
//
// voices and notes for stave 5 64
const smo185279v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo185279v0ar = [];
const smo185255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo185255'] = smo185255;
smo185255.setAttribute('id', 'smo185255');
const smo185256 = new VF.Annotation('bun');
smo185256.setAttribute('id', 'smo185256');
smo185256.setFont('times', 12, 'normal');
smo185256.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo185255.addModifier(smo185256);
smo185256.addClass('lyric lyric-0');
smo185279v0ar.push(smo185255);
const smo185257 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo185257'] = smo185257;
smo185257.setAttribute('id', 'smo185257');
smo185279v0ar.push(smo185257);
const smo185258 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo185258'] = smo185258;
smo185258.setAttribute('id', 'smo185258');
smo185279v0ar.push(smo185258);
const smo185259 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo185259'] = smo185259;
smo185259.setAttribute('id', 'smo185259');
const smo185260 = new VF.Annotation('Man');
smo185260.setAttribute('id', 'smo185260');
smo185260.setFont('times', 12, 'normal');
smo185260.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo185259.addModifier(smo185260);
smo185260.addClass('lyric lyric-0 lyric-hyphen');
smo185279v0ar.push(smo185259);
const smo185261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo185261'] = smo185261;
smo185261.setAttribute('id', 'smo185261');
smo185279v0ar.push(smo185261);
const smo185262 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo185262'] = smo185262;
smo185262.setAttribute('id', 'smo185262');
const smo1852620acc = new VF.Accidental('n');
smo185262.addModifier(smo1852620acc, 0);
const smo185263 = new VF.Annotation('ding');
smo185263.setAttribute('id', 'smo185263');
smo185263.setFont('times', 12, 'normal');
smo185263.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo185262.addModifier(smo185263);
smo185263.addClass('lyric lyric-0 lyric-hyphen');
smo185279v0ar.push(smo185262);
smo185279v0.addTickables(smo185279v0ar)
fmtsmo18527964.joinVoices([smo185279v0]);
const fmtsmo18839164 = new VF.Formatter();
//
// voices and notes for stave 6 64
const smo188391v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo188391v0ar = [];
const smo188367 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo188367'] = smo188367;
smo188367.setAttribute('id', 'smo188367');
const smo188368 = new VF.Annotation('bun');
smo188368.setAttribute('id', 'smo188368');
smo188368.setFont('times', 12, 'normal');
smo188368.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo188367.addModifier(smo188368);
smo188368.addClass('lyric lyric-0');
smo188391v0ar.push(smo188367);
const smo188369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo188369'] = smo188369;
smo188369.setAttribute('id', 'smo188369');
smo188391v0ar.push(smo188369);
const smo188370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo188370'] = smo188370;
smo188370.setAttribute('id', 'smo188370');
smo188391v0ar.push(smo188370);
const smo188371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo188371'] = smo188371;
smo188371.setAttribute('id', 'smo188371');
const smo188372 = new VF.Annotation('Man');
smo188372.setAttribute('id', 'smo188372');
smo188372.setFont('times', 12, 'normal');
smo188372.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo188371.addModifier(smo188372);
smo188372.addClass('lyric lyric-0 lyric-hyphen');
smo188391v0ar.push(smo188371);
const smo188373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo188373'] = smo188373;
smo188373.setAttribute('id', 'smo188373');
smo188391v0ar.push(smo188373);
const smo188374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo188374'] = smo188374;
smo188374.setAttribute('id', 'smo188374');
const smo1883740acc = new VF.Accidental('n');
smo188374.addModifier(smo1883740acc, 0);
const smo188375 = new VF.Annotation('ding');
smo188375.setAttribute('id', 'smo188375');
smo188375.setFont('times', 12, 'normal');
smo188375.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo188374.addModifier(smo188375);
smo188375.addClass('lyric lyric-0 lyric-hyphen');
smo188391v0ar.push(smo188374);
smo188391v0.addTickables(smo188391v0ar)
fmtsmo18839164.joinVoices([smo188391v0]);
const fmtsmo19150064 = new VF.Formatter();
//
// voices and notes for stave 7 64
const smo191500v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo191500v0ar = [];
const smo191476 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo191476'] = smo191476;
smo191476.setAttribute('id', 'smo191476');
const smo191477 = new VF.Annotation('bun');
smo191477.setAttribute('id', 'smo191477');
smo191477.setFont('times', 12, 'normal');
smo191477.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo191476.addModifier(smo191477);
smo191477.addClass('lyric lyric-0');
smo191500v0ar.push(smo191476);
const smo191478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo191478'] = smo191478;
smo191478.setAttribute('id', 'smo191478');
smo191500v0ar.push(smo191478);
const smo191479 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo191479'] = smo191479;
smo191479.setAttribute('id', 'smo191479');
smo191500v0ar.push(smo191479);
const smo191480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo191480'] = smo191480;
smo191480.setAttribute('id', 'smo191480');
const smo191481 = new VF.Annotation('Man');
smo191481.setAttribute('id', 'smo191481');
smo191481.setFont('times', 12, 'normal');
smo191481.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo191480.addModifier(smo191481);
smo191481.addClass('lyric lyric-0 lyric-hyphen');
smo191500v0ar.push(smo191480);
const smo191482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo191482'] = smo191482;
smo191482.setAttribute('id', 'smo191482');
smo191500v0ar.push(smo191482);
const smo191483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo191483'] = smo191483;
smo191483.setAttribute('id', 'smo191483');
const smo1914830acc = new VF.Accidental('n');
smo191483.addModifier(smo1914830acc, 0);
const smo191484 = new VF.Annotation('ding');
smo191484.setAttribute('id', 'smo191484');
smo191484.setFont('times', 12, 'normal');
smo191484.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo191483.addModifier(smo191484);
smo191484.addClass('lyric lyric-0 lyric-hyphen');
smo191500v0ar.push(smo191483);
smo191500v0.addTickables(smo191500v0ar)
fmtsmo19150064.joinVoices([smo191500v0]);
const fmtsmo19458664 = new VF.Formatter();
//
// voices and notes for stave 8 64
const smo194586v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo194586v0ar = [];
const smo194562 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo194562'] = smo194562;
smo194562.setAttribute('id', 'smo194562');
const smo194563 = new VF.Annotation('bun');
smo194563.setAttribute('id', 'smo194563');
smo194563.setFont('times', 12, 'normal');
smo194563.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo194562.addModifier(smo194563);
smo194563.addClass('lyric lyric-0');
smo194586v0ar.push(smo194562);
const smo194564 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo194564'] = smo194564;
smo194564.setAttribute('id', 'smo194564');
smo194586v0ar.push(smo194564);
const smo194565 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo194565'] = smo194565;
smo194565.setAttribute('id', 'smo194565');
smo194586v0ar.push(smo194565);
const smo194566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo194566'] = smo194566;
smo194566.setAttribute('id', 'smo194566');
const smo194567 = new VF.Annotation('Man');
smo194567.setAttribute('id', 'smo194567');
smo194567.setFont('times', 12, 'normal');
smo194567.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo194566.addModifier(smo194567);
smo194567.addClass('lyric lyric-0 lyric-hyphen');
smo194586v0ar.push(smo194566);
const smo194568 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo194568'] = smo194568;
smo194568.setAttribute('id', 'smo194568');
smo194586v0ar.push(smo194568);
const smo194569 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo194569'] = smo194569;
smo194569.setAttribute('id', 'smo194569');
const smo1945690acc = new VF.Accidental('n');
smo194569.addModifier(smo1945690acc, 0);
const smo194570 = new VF.Annotation('ding');
smo194570.setAttribute('id', 'smo194570');
smo194570.setFont('times', 12, 'normal');
smo194570.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo194569.addModifier(smo194570);
smo194570.addClass('lyric lyric-0 lyric-hyphen');
smo194586v0ar.push(smo194569);
smo194586v0.addTickables(smo194586v0ar)
fmtsmo19458664.joinVoices([smo194586v0]);
const fmtsmo19767564 = new VF.Formatter();
//
// voices and notes for stave 9 64
const smo197675v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo197675v0ar = [];
const smo197651 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo197651'] = smo197651;
smo197651.setAttribute('id', 'smo197651');
const smo197652 = new VF.Annotation('bun');
smo197652.setAttribute('id', 'smo197652');
smo197652.setFont('times', 12, 'normal');
smo197652.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo197651.addModifier(smo197652);
smo197652.addClass('lyric lyric-0');
smo197675v0ar.push(smo197651);
const smo197653 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo197653'] = smo197653;
smo197653.setAttribute('id', 'smo197653');
smo197675v0ar.push(smo197653);
const smo197654 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo197654'] = smo197654;
smo197654.setAttribute('id', 'smo197654');
smo197675v0ar.push(smo197654);
const smo197655 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo197655'] = smo197655;
smo197655.setAttribute('id', 'smo197655');
const smo197656 = new VF.Annotation('Man');
smo197656.setAttribute('id', 'smo197656');
smo197656.setFont('times', 12, 'normal');
smo197656.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo197655.addModifier(smo197656);
smo197656.addClass('lyric lyric-0 lyric-hyphen');
smo197675v0ar.push(smo197655);
const smo197657 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo197657'] = smo197657;
smo197657.setAttribute('id', 'smo197657');
smo197675v0ar.push(smo197657);
const smo197658 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo197658'] = smo197658;
smo197658.setAttribute('id', 'smo197658');
const smo1976580acc = new VF.Accidental('b');
smo197658.addModifier(smo1976580acc, 0);
const smo197659 = new VF.Annotation('ding');
smo197659.setAttribute('id', 'smo197659');
smo197659.setFont('times', 12, 'normal');
smo197659.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo197658.addModifier(smo197659);
smo197659.addClass('lyric lyric-0 lyric-hyphen');
smo197675v0ar.push(smo197658);
smo197675v0.addTickables(smo197675v0ar)
fmtsmo19767564.joinVoices([smo197675v0]);
const fmtsmo20071564 = new VF.Formatter();
//
// voices and notes for stave 10 64
const smo200715v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo200715v0ar = [];
const smo200691 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo200691'] = smo200691;
smo200691.setAttribute('id', 'smo200691');
const smo200692 = new VF.Annotation('bun');
smo200692.setAttribute('id', 'smo200692');
smo200692.setFont('times', 12, 'normal');
smo200692.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo200691.addModifier(smo200692);
smo200692.addClass('lyric lyric-0');
smo200715v0ar.push(smo200691);
const smo200693 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo200693'] = smo200693;
smo200693.setAttribute('id', 'smo200693');
smo200715v0ar.push(smo200693);
const smo200694 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo200694'] = smo200694;
smo200694.setAttribute('id', 'smo200694');
smo200715v0ar.push(smo200694);
const smo200695 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo200695'] = smo200695;
smo200695.setAttribute('id', 'smo200695');
const smo200696 = new VF.Annotation('Man');
smo200696.setAttribute('id', 'smo200696');
smo200696.setFont('times', 12, 'normal');
smo200696.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo200695.addModifier(smo200696);
smo200696.addClass('lyric lyric-0 lyric-hyphen');
smo200715v0ar.push(smo200695);
const smo200697 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo200697'] = smo200697;
smo200697.setAttribute('id', 'smo200697');
smo200715v0ar.push(smo200697);
const smo200698 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo200698'] = smo200698;
smo200698.setAttribute('id', 'smo200698');
const smo2006980acc = new VF.Accidental('b');
smo200698.addModifier(smo2006980acc, 0);
const smo200699 = new VF.Annotation('ding');
smo200699.setAttribute('id', 'smo200699');
smo200699.setFont('times', 12, 'normal');
smo200699.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo200698.addModifier(smo200699);
smo200699.addClass('lyric lyric-0 lyric-hyphen');
smo200715v0ar.push(smo200698);
smo200715v0.addTickables(smo200715v0ar)
fmtsmo20071564.joinVoices([smo200715v0]);
const fmtsmo20376964 = new VF.Formatter();
//
// voices and notes for stave 11 64
const smo203769v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo203769v0ar = [];
const smo203745 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo203745'] = smo203745;
smo203745.setAttribute('id', 'smo203745');
const smo203746 = new VF.Annotation('bun');
smo203746.setAttribute('id', 'smo203746');
smo203746.setFont('times', 12, 'normal');
smo203746.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo203745.addModifier(smo203746);
smo203746.addClass('lyric lyric-0');
smo203769v0ar.push(smo203745);
const smo203747 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo203747'] = smo203747;
smo203747.setAttribute('id', 'smo203747');
smo203769v0ar.push(smo203747);
const smo203748 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo203748'] = smo203748;
smo203748.setAttribute('id', 'smo203748');
smo203769v0ar.push(smo203748);
const smo203749 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo203749'] = smo203749;
smo203749.setAttribute('id', 'smo203749');
const smo203750 = new VF.Annotation('Man');
smo203750.setAttribute('id', 'smo203750');
smo203750.setFont('times', 12, 'normal');
smo203750.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo203749.addModifier(smo203750);
smo203750.addClass('lyric lyric-0 lyric-hyphen');
smo203769v0ar.push(smo203749);
const smo203751 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo203751'] = smo203751;
smo203751.setAttribute('id', 'smo203751');
smo203769v0ar.push(smo203751);
const smo203752 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo203752'] = smo203752;
smo203752.setAttribute('id', 'smo203752');
const smo2037520acc = new VF.Accidental('b');
smo203752.addModifier(smo2037520acc, 0);
const smo203753 = new VF.Annotation('ding');
smo203753.setAttribute('id', 'smo203753');
smo203753.setFont('times', 12, 'normal');
smo203753.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo203752.addModifier(smo203753);
smo203753.addClass('lyric lyric-0 lyric-hyphen');
smo203769v0ar.push(smo203752);
smo203769v0.addTickables(smo203769v0ar)
fmtsmo20376964.joinVoices([smo203769v0]);
const fmtsmo20681264 = new VF.Formatter();
//
// voices and notes for stave 12 64
const smo206812v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo206812v0ar = [];
const smo206788 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo206788'] = smo206788;
smo206788.setAttribute('id', 'smo206788');
const smo206789 = new VF.Annotation('bun');
smo206789.setAttribute('id', 'smo206789');
smo206789.setFont('times', 12, 'normal');
smo206789.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo206788.addModifier(smo206789);
smo206789.addClass('lyric lyric-0');
smo206812v0ar.push(smo206788);
const smo206790 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo206790'] = smo206790;
smo206790.setAttribute('id', 'smo206790');
smo206812v0ar.push(smo206790);
const smo206791 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo206791'] = smo206791;
smo206791.setAttribute('id', 'smo206791');
smo206812v0ar.push(smo206791);
const smo206792 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo206792'] = smo206792;
smo206792.setAttribute('id', 'smo206792');
const smo206793 = new VF.Annotation('Man');
smo206793.setAttribute('id', 'smo206793');
smo206793.setFont('times', 12, 'normal');
smo206793.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo206792.addModifier(smo206793);
smo206793.addClass('lyric lyric-0 lyric-hyphen');
smo206812v0ar.push(smo206792);
const smo206794 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo206794'] = smo206794;
smo206794.setAttribute('id', 'smo206794');
smo206812v0ar.push(smo206794);
const smo206795 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo206795'] = smo206795;
smo206795.setAttribute('id', 'smo206795');
const smo2067950acc = new VF.Accidental('b');
smo206795.addModifier(smo2067950acc, 0);
const smo206796 = new VF.Annotation('ding');
smo206796.setAttribute('id', 'smo206796');
smo206796.setFont('times', 12, 'normal');
smo206796.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo206795.addModifier(smo206796);
smo206796.addClass('lyric lyric-0 lyric-hyphen');
smo206812v0ar.push(smo206795);
smo206812v0.addTickables(smo206812v0ar)
fmtsmo20681264.joinVoices([smo206812v0]);
const fmtsmo21002464 = new VF.Formatter();
//
// voices and notes for stave 13 64
const smo210024v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo210024v0ar = [];
const smo210004 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
noteHash['smo210004'] = smo210004;
smo210004.setAttribute('id', 'smo210004');
smo210004.addModifier(new VF.Dot(), 0);
smo210004.addModifier(new VF.Dot(), 1);
smo210004.addModifier(new VF.Dot(), 2);
smo210024v0ar.push(smo210004);
const smo210005 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo210005'] = smo210005;
smo210005.setAttribute('id', 'smo210005');
smo210024v0ar.push(smo210005);
const smo210006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo210006'] = smo210006;
smo210006.setAttribute('id', 'smo210006');
smo210024v0ar.push(smo210006);
const smo210007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
noteHash['smo210007'] = smo210007;
smo210007.setAttribute('id', 'smo210007');
const smo2100072acc = new VF.Accidental('b');
smo210007.addModifier(smo2100072acc, 2);
smo210024v0ar.push(smo210007);
const smo210008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
noteHash['smo210008'] = smo210008;
smo210008.setAttribute('id', 'smo210008');
smo210024v0ar.push(smo210008);
smo210024v0.addTickables(smo210024v0ar)
fmtsmo21002464.joinVoices([smo210024v0]);
const fmtsmo21323764 = new VF.Formatter();
//
// voices and notes for stave 14 64
const smo213237v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo213237v0ar = [];
const smo213217 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
noteHash['smo213217'] = smo213217;
smo213217.setAttribute('id', 'smo213217');
smo213217.addModifier(new VF.Dot(), 0);
smo213217.addModifier(new VF.Dot(), 1);
smo213217.addModifier(new VF.Dot(), 2);
smo213237v0ar.push(smo213217);
const smo213218 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo213218'] = smo213218;
smo213218.setAttribute('id', 'smo213218');
smo213237v0ar.push(smo213218);
const smo213219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo213219'] = smo213219;
smo213219.setAttribute('id', 'smo213219');
smo213237v0ar.push(smo213219);
const smo213220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
noteHash['smo213220'] = smo213220;
smo213220.setAttribute('id', 'smo213220');
const smo2132202acc = new VF.Accidental('b');
smo213220.addModifier(smo2132202acc, 2);
smo213237v0ar.push(smo213220);
const smo213221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
noteHash['smo213221'] = smo213221;
smo213221.setAttribute('id', 'smo213221');
smo213237v0ar.push(smo213221);
smo213237v0.addTickables(smo213237v0ar)
fmtsmo21323764.joinVoices([smo213237v0]);
const fmtsmo21643264 = new VF.Formatter();
//
// voices and notes for stave 15 64
const smo216432v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo216432v0ar = [];
const smo216412 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo216412'] = smo216412;
smo216412.setAttribute('id', 'smo216412');
smo216412.addModifier(new VF.Dot(), 0);
smo216432v0ar.push(smo216412);
const smo216413 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo216413'] = smo216413;
smo216413.setAttribute('id', 'smo216413');
smo216432v0ar.push(smo216413);
const smo216414 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo216414'] = smo216414;
smo216414.setAttribute('id', 'smo216414');
smo216432v0ar.push(smo216414);
const smo216415 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo216415'] = smo216415;
smo216415.setAttribute('id', 'smo216415');
smo216432v0ar.push(smo216415);
const smo216416 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo216416'] = smo216416;
smo216416.setAttribute('id', 'smo216416');
smo216432v0ar.push(smo216416);
smo216432v0.addTickables(smo216432v0ar)
fmtsmo21643264.joinVoices([smo216432v0]);
const fmtsmo21955064 = new VF.Formatter();
//
// voices and notes for stave 16 64
const smo219550v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo219550v0ar = [];
const smo219531 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo219531'] = smo219531;
smo219531.setAttribute('id', 'smo219531');
smo219531.addModifier(new VF.Dot(), 0);
smo219550v0ar.push(smo219531);
const smo219532 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo219532'] = smo219532;
smo219532.setAttribute('id', 'smo219532');
smo219550v0ar.push(smo219532);
const smo219533 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo219533'] = smo219533;
smo219533.setAttribute('id', 'smo219533');
smo219550v0ar.push(smo219533);
const smo219534 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo219534'] = smo219534;
smo219534.setAttribute('id', 'smo219534');
smo219550v0ar.push(smo219534);
smo219550v0.addTickables(smo219550v0ar)
fmtsmo21955064.joinVoices([smo219550v0]);
const fmtsmo22273964 = new VF.Formatter();
//
// voices and notes for stave 17 64
const smo222739v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo222739v0ar = [];
const smo222712 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo222712'] = smo222712;
smo222712.setAttribute('id', 'smo222712');
const smo222713 = new VF.Annotation('bun');
smo222713.setAttribute('id', 'smo222713');
smo222713.setFont('times', 12, 'normal');
smo222713.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo222712.addModifier(smo222713);
smo222713.addClass('lyric lyric-0');
smo222739v0ar.push(smo222712);
const smo222714 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo222714'] = smo222714;
smo222714.setAttribute('id', 'smo222714');
smo222739v0ar.push(smo222714);
const smo222715 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo222715'] = smo222715;
smo222715.setAttribute('id', 'smo222715');
smo222739v0ar.push(smo222715);
const smo222716 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo222716'] = smo222716;
smo222716.setAttribute('id', 'smo222716');
smo222739v0ar.push(smo222716);
smo222739v0.addTickables(smo222739v0ar)
fmtsmo22273964.joinVoices([smo222739v0]);
const smo222739v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo222739v1ar = [];
const smo222717 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo222717'] = smo222717;
smo222717.setAttribute('id', 'smo222717');
smo222739v1ar.push(smo222717);
const smo222718 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo222718'] = smo222718;
smo222718.setAttribute('id', 'smo222718');
smo222739v1ar.push(smo222718);
const smo222719 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo222719'] = smo222719;
smo222719.setAttribute('id', 'smo222719');
smo222739v1ar.push(smo222719);
const smo222720 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo222720'] = smo222720;
smo222720.setAttribute('id', 'smo222720');
smo222739v1ar.push(smo222720);
smo222739v1.addTickables(smo222739v1ar)
fmtsmo22273964.joinVoices([smo222739v1]);
const smo222739v2 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo222739v2ar = [];
const smo222721 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo222721'] = smo222721;
smo222721.setAttribute('id', 'smo222721');
const smo2227210acc = new VF.Accidental('n');
smo222721.addModifier(smo2227210acc, 0);
smo222739v2ar.push(smo222721);
const smo222722 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo222722'] = smo222722;
smo222722.setAttribute('id', 'smo222722');
smo222739v2ar.push(smo222722);
const smo222723 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo222723'] = smo222723;
smo222723.setAttribute('id', 'smo222723');
smo222739v2ar.push(smo222723);
smo222739v2.addTickables(smo222739v2ar)
fmtsmo22273964.joinVoices([smo222739v2]);
// create beam groups and tuplets for format grp smo224512 before formatting
const dirsmo315836 = smo169880.getStemDirection();
smo169880.setStemDirection(dirsmo315836);
smo169882.setStemDirection(dirsmo315836);
const smo315836 = new VF.Beam([smo169880,smo169882]);
const dirsmo315839 = smo172874.getStemDirection();
smo172874.setStemDirection(dirsmo315839);
smo172876.setStemDirection(dirsmo315839);
const smo315839 = new VF.Beam([smo172874,smo172876]);
const dirsmo315842 = smo176017.getStemDirection();
smo176017.setStemDirection(dirsmo315842);
smo176019.setStemDirection(dirsmo315842);
const smo315842 = new VF.Beam([smo176017,smo176019]);
const dirsmo315845 = smo179133.getStemDirection();
smo179133.setStemDirection(dirsmo315845);
smo179135.setStemDirection(dirsmo315845);
const smo315845 = new VF.Beam([smo179133,smo179135]);
const dirsmo315848 = smo182152.getStemDirection();
smo182152.setStemDirection(dirsmo315848);
smo182154.setStemDirection(dirsmo315848);
const smo315848 = new VF.Beam([smo182152,smo182154]);
 
// formatting measures in staff group smo224512
fmtsmo16990064.format([smo169900v0,smo172894v0,smo176037v0,smo179153v0,smo182172v0], 288);
const stavesmo169900 = new VF.Stave(506, 210, 302);
stavesmo169900.setAttribute('id', 'stavesmo169900');
stavesmo169900.setBegBarType(VF.Barline.type.NONE);
stavesmo169900.setContext(context);
stavesmo169900.draw();
smo169900v0.draw(context, stavesmo169900);
smo315836.setContext(context);
smo315836.draw();
const stavesmo172894 = new VF.Stave(506, 316, 302);
stavesmo172894.setAttribute('id', 'stavesmo172894');
stavesmo172894.setBegBarType(VF.Barline.type.NONE);
stavesmo172894.setContext(context);
stavesmo172894.draw();
smo172894v0.draw(context, stavesmo172894);
smo315839.setContext(context);
smo315839.draw();
const stavesmo176037 = new VF.Stave(506, 437, 302);
stavesmo176037.setAttribute('id', 'stavesmo176037');
stavesmo176037.setBegBarType(VF.Barline.type.NONE);
stavesmo176037.setContext(context);
stavesmo176037.draw();
smo176037v0.draw(context, stavesmo176037);
smo315842.setContext(context);
smo315842.draw();
const stavesmo179153 = new VF.Stave(506, 553, 302);
stavesmo179153.setAttribute('id', 'stavesmo179153');
stavesmo179153.setBegBarType(VF.Barline.type.NONE);
stavesmo179153.setContext(context);
stavesmo179153.draw();
smo179153v0.draw(context, stavesmo179153);
smo315845.setContext(context);
smo315845.draw();
const stavesmo182172 = new VF.Stave(506, 659, 302);
stavesmo182172.setAttribute('id', 'stavesmo182172');
stavesmo182172.setBegBarType(VF.Barline.type.NONE);
stavesmo182172.setContext(context);
stavesmo182172.draw();
smo182172v0.draw(context, stavesmo182172);
smo315848.setContext(context);
smo315848.draw();
// create beam groups and tuplets for format grp smo224514 before formatting
const dirsmo315851 = smo185259.getStemDirection();
smo185259.setStemDirection(dirsmo315851);
smo185261.setStemDirection(dirsmo315851);
const smo315851 = new VF.Beam([smo185259,smo185261]);
const dirsmo315854 = smo188371.getStemDirection();
smo188371.setStemDirection(dirsmo315854);
smo188373.setStemDirection(dirsmo315854);
const smo315854 = new VF.Beam([smo188371,smo188373]);
const dirsmo315857 = smo191480.getStemDirection();
smo191480.setStemDirection(dirsmo315857);
smo191482.setStemDirection(dirsmo315857);
const smo315857 = new VF.Beam([smo191480,smo191482]);
const dirsmo315860 = smo194566.getStemDirection();
smo194566.setStemDirection(dirsmo315860);
smo194568.setStemDirection(dirsmo315860);
const smo315860 = new VF.Beam([smo194566,smo194568]);
 
// formatting measures in staff group smo224514
fmtsmo18527964.format([smo185279v0,smo188391v0,smo191500v0,smo194586v0], 288);
const stavesmo185279 = new VF.Stave(506, 780, 302);
stavesmo185279.setAttribute('id', 'stavesmo185279');
stavesmo185279.setBegBarType(VF.Barline.type.NONE);
stavesmo185279.setContext(context);
stavesmo185279.draw();
smo185279v0.draw(context, stavesmo185279);
smo315851.setContext(context);
smo315851.draw();
const stavesmo188391 = new VF.Stave(506, 896, 302);
stavesmo188391.setAttribute('id', 'stavesmo188391');
stavesmo188391.setBegBarType(VF.Barline.type.NONE);
stavesmo188391.setContext(context);
stavesmo188391.draw();
smo188391v0.draw(context, stavesmo188391);
smo315854.setContext(context);
smo315854.draw();
const stavesmo191500 = new VF.Stave(506, 1012, 302);
stavesmo191500.setAttribute('id', 'stavesmo191500');
stavesmo191500.setBegBarType(VF.Barline.type.NONE);
stavesmo191500.setContext(context);
stavesmo191500.draw();
smo191500v0.draw(context, stavesmo191500);
smo315857.setContext(context);
smo315857.draw();
const stavesmo194586 = new VF.Stave(506, 1128, 302);
stavesmo194586.setAttribute('id', 'stavesmo194586');
stavesmo194586.setBegBarType(VF.Barline.type.NONE);
stavesmo194586.setContext(context);
stavesmo194586.draw();
smo194586v0.draw(context, stavesmo194586);
smo315860.setContext(context);
smo315860.draw();
// create beam groups and tuplets for format grp smo224516 before formatting
const dirsmo315863 = smo197655.getStemDirection();
smo197655.setStemDirection(dirsmo315863);
smo197657.setStemDirection(dirsmo315863);
const smo315863 = new VF.Beam([smo197655,smo197657]);
const dirsmo315866 = smo200695.getStemDirection();
smo200695.setStemDirection(dirsmo315866);
smo200697.setStemDirection(dirsmo315866);
const smo315866 = new VF.Beam([smo200695,smo200697]);
const dirsmo315869 = smo203749.getStemDirection();
smo203749.setStemDirection(dirsmo315869);
smo203751.setStemDirection(dirsmo315869);
const smo315869 = new VF.Beam([smo203749,smo203751]);
const dirsmo315872 = smo206792.getStemDirection();
smo206792.setStemDirection(dirsmo315872);
smo206794.setStemDirection(dirsmo315872);
const smo315872 = new VF.Beam([smo206792,smo206794]);
 
// formatting measures in staff group smo224516
fmtsmo19767564.format([smo197675v0,smo200715v0,smo203769v0,smo206812v0], 288);
const stavesmo197675 = new VF.Stave(506, 1264, 302);
stavesmo197675.setAttribute('id', 'stavesmo197675');
stavesmo197675.setBegBarType(VF.Barline.type.NONE);
stavesmo197675.setContext(context);
stavesmo197675.draw();
smo197675v0.draw(context, stavesmo197675);
smo315863.setContext(context);
smo315863.draw();
const stavesmo200715 = new VF.Stave(506, 1400, 302);
stavesmo200715.setAttribute('id', 'stavesmo200715');
stavesmo200715.setBegBarType(VF.Barline.type.NONE);
stavesmo200715.setContext(context);
stavesmo200715.draw();
smo200715v0.draw(context, stavesmo200715);
smo315866.setContext(context);
smo315866.draw();
const stavesmo203769 = new VF.Stave(506, 1536, 302);
stavesmo203769.setAttribute('id', 'stavesmo203769');
stavesmo203769.setBegBarType(VF.Barline.type.NONE);
stavesmo203769.setContext(context);
stavesmo203769.draw();
smo203769v0.draw(context, stavesmo203769);
smo315869.setContext(context);
smo315869.draw();
const stavesmo206812 = new VF.Stave(506, 1672, 302);
stavesmo206812.setAttribute('id', 'stavesmo206812');
stavesmo206812.setBegBarType(VF.Barline.type.NONE);
stavesmo206812.setContext(context);
stavesmo206812.draw();
smo206812v0.draw(context, stavesmo206812);
smo315872.setContext(context);
smo315872.draw();
// create beam groups and tuplets for format grp smo211835 before formatting
const dirsmo315875 = smo210005.getStemDirection();
smo210005.setStemDirection(dirsmo315875);
smo210006.setStemDirection(dirsmo315875);
const smo315875 = new VF.Beam([smo210005,smo210006]);
 
// formatting measures in staff group smo211835
fmtsmo21002464.format([smo210024v0], 288);
const stavesmo210024 = new VF.Stave(506, 1818, 302);
stavesmo210024.setAttribute('id', 'stavesmo210024');
stavesmo210024.setBegBarType(VF.Barline.type.NONE);
stavesmo210024.setContext(context);
stavesmo210024.draw();
smo210024v0.draw(context, stavesmo210024);
smo315875.setContext(context);
smo315875.draw();
// create beam groups and tuplets for format grp smo224510 before formatting
const dirsmo315878 = smo213218.getStemDirection();
smo213218.setStemDirection(dirsmo315878);
smo213219.setStemDirection(dirsmo315878);
const smo315878 = new VF.Beam([smo213218,smo213219]);
const dirsmo315881 = smo216413.getStemDirection();
smo216413.setStemDirection(dirsmo315881);
smo216414.setStemDirection(dirsmo315881);
const smo315881 = new VF.Beam([smo216413,smo216414]);
 
// formatting measures in staff group smo224510
fmtsmo21323764.format([smo213237v0,smo216432v0], 288);
const stavesmo213237 = new VF.Stave(506, 1924, 302);
stavesmo213237.setAttribute('id', 'stavesmo213237');
stavesmo213237.setBegBarType(VF.Barline.type.NONE);
stavesmo213237.setContext(context);
stavesmo213237.draw();
smo213237v0.draw(context, stavesmo213237);
smo315878.setContext(context);
smo315878.draw();
const stavesmo216432 = new VF.Stave(506, 2010, 302);
stavesmo216432.setAttribute('id', 'stavesmo216432');
stavesmo216432.setBegBarType(VF.Barline.type.NONE);
stavesmo216432.setContext(context);
stavesmo216432.draw();
smo216432v0.draw(context, stavesmo216432);
smo315881.setContext(context);
smo315881.draw();
// create beam groups and tuplets for format grp smo221348 before formatting
 
// formatting measures in staff group smo221348
fmtsmo21955064.format([smo219550v0], 288);
const stavesmo219550 = new VF.Stave(506, 2081, 302);
stavesmo219550.setAttribute('id', 'stavesmo219550');
stavesmo219550.setBegBarType(VF.Barline.type.NONE);
stavesmo219550.setContext(context);
stavesmo219550.draw();
smo219550v0.draw(context, stavesmo219550);
// create beam groups and tuplets for format grp smo224504 before formatting
 
// formatting measures in staff group smo224504
fmtsmo22273964.format([smo222739v0,smo222739v1,smo222739v2], 288);
const stavesmo222739 = new VF.Stave(506, 2152, 302);
stavesmo222739.setAttribute('id', 'stavesmo222739');
stavesmo222739.setBegBarType(VF.Barline.type.NONE);
stavesmo222739.setContext(context);
stavesmo222739.draw();
smo222739v0.draw(context, stavesmo222739);
smo222739v1.draw(context, stavesmo222739);
smo222739v2.draw(context, stavesmo222739);
const fmtsmo16992765 = new VF.Formatter();
//
// voices and notes for stave 0 65
const smo169927v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo169927v0ar = [];
const smo169901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo169901'] = smo169901;
smo169901.setAttribute('id', 'smo169901');
const smo1699010acc = new VF.Accidental('n');
smo169901.addModifier(smo1699010acc, 0);
smo169927v0ar.push(smo169901);
const smo169902 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo169902'] = smo169902;
smo169902.setAttribute('id', 'smo169902');
const smo169903 = new VF.Annotation('a');
smo169903.setAttribute('id', 'smo169903');
smo169903.setFont('times', 12, 'normal');
smo169903.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo169902.addModifier(smo169903);
smo169903.addClass('lyric lyric-0');
smo169927v0ar.push(smo169902);
const smo169904 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo169904'] = smo169904;
smo169904.setAttribute('id', 'smo169904');
smo169927v0ar.push(smo169904);
const smo169905 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo169905'] = smo169905;
smo169905.setAttribute('id', 'smo169905');
const smo169906 = new VF.Annotation('Ki');
smo169906.setAttribute('id', 'smo169906');
smo169906.setFont('times', 12, 'normal');
smo169906.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo169905.addModifier(smo169906);
smo169906.addClass('lyric lyric-0 lyric-hyphen');
smo169927v0ar.push(smo169905);
const smo169907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo169907'] = smo169907;
smo169907.setAttribute('id', 'smo169907');
smo169927v0ar.push(smo169907);
const smo169908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo169908'] = smo169908;
smo169908.setAttribute('id', 'smo169908');
const smo169909 = new VF.Annotation('ki');
smo169909.setAttribute('id', 'smo169909');
smo169909.setFont('times', 12, 'normal');
smo169909.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo169908.addModifier(smo169909);
smo169909.addClass('lyric lyric-0');
smo169927v0ar.push(smo169908);
const smo169910 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo169910'] = smo169910;
smo169910.setAttribute('id', 'smo169910');
const smo169911 = new VF.Annotation('ri');
smo169911.setAttribute('id', 'smo169911');
smo169911.setFont('times', 12, 'normal');
smo169911.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo169910.addModifier(smo169911);
smo169911.addClass('lyric lyric-0');
smo169927v0ar.push(smo169910);
smo169927v0.addTickables(smo169927v0ar)
fmtsmo16992765.joinVoices([smo169927v0]);
const fmtsmo17292165 = new VF.Formatter();
//
// voices and notes for stave 1 65
const smo172921v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo172921v0ar = [];
const smo172895 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo172895'] = smo172895;
smo172895.setAttribute('id', 'smo172895');
const smo1728950acc = new VF.Accidental('n');
smo172895.addModifier(smo1728950acc, 0);
smo172921v0ar.push(smo172895);
const smo172896 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo172896'] = smo172896;
smo172896.setAttribute('id', 'smo172896');
const smo172897 = new VF.Annotation('a');
smo172897.setAttribute('id', 'smo172897');
smo172897.setFont('times', 12, 'normal');
smo172897.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo172896.addModifier(smo172897);
smo172897.addClass('lyric lyric-0');
smo172921v0ar.push(smo172896);
const smo172898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo172898'] = smo172898;
smo172898.setAttribute('id', 'smo172898');
smo172921v0ar.push(smo172898);
const smo172899 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo172899'] = smo172899;
smo172899.setAttribute('id', 'smo172899');
const smo172900 = new VF.Annotation('Ki');
smo172900.setAttribute('id', 'smo172900');
smo172900.setFont('times', 12, 'normal');
smo172900.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo172899.addModifier(smo172900);
smo172900.addClass('lyric lyric-0 lyric-hyphen');
smo172921v0ar.push(smo172899);
const smo172901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo172901'] = smo172901;
smo172901.setAttribute('id', 'smo172901');
smo172921v0ar.push(smo172901);
const smo172902 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo172902'] = smo172902;
smo172902.setAttribute('id', 'smo172902');
const smo172903 = new VF.Annotation('ki');
smo172903.setAttribute('id', 'smo172903');
smo172903.setFont('times', 12, 'normal');
smo172903.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo172902.addModifier(smo172903);
smo172903.addClass('lyric lyric-0');
smo172921v0ar.push(smo172902);
const smo172904 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo172904'] = smo172904;
smo172904.setAttribute('id', 'smo172904');
const smo172905 = new VF.Annotation('ri');
smo172905.setAttribute('id', 'smo172905');
smo172905.setFont('times', 12, 'normal');
smo172905.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo172904.addModifier(smo172905);
smo172905.addClass('lyric lyric-0');
smo172921v0ar.push(smo172904);
smo172921v0.addTickables(smo172921v0ar)
fmtsmo17292165.joinVoices([smo172921v0]);
const fmtsmo17606465 = new VF.Formatter();
//
// voices and notes for stave 2 65
const smo176064v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo176064v0ar = [];
const smo176038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo176038'] = smo176038;
smo176038.setAttribute('id', 'smo176038');
const smo1760380acc = new VF.Accidental('n');
smo176038.addModifier(smo1760380acc, 0);
smo176064v0ar.push(smo176038);
const smo176039 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo176039'] = smo176039;
smo176039.setAttribute('id', 'smo176039');
const smo176040 = new VF.Annotation('a');
smo176040.setAttribute('id', 'smo176040');
smo176040.setFont('times', 12, 'normal');
smo176040.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo176039.addModifier(smo176040);
smo176040.addClass('lyric lyric-0');
smo176064v0ar.push(smo176039);
const smo176041 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo176041'] = smo176041;
smo176041.setAttribute('id', 'smo176041');
smo176064v0ar.push(smo176041);
const smo176042 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo176042'] = smo176042;
smo176042.setAttribute('id', 'smo176042');
const smo176043 = new VF.Annotation('Ki');
smo176043.setAttribute('id', 'smo176043');
smo176043.setFont('times', 12, 'normal');
smo176043.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo176042.addModifier(smo176043);
smo176043.addClass('lyric lyric-0 lyric-hyphen');
smo176064v0ar.push(smo176042);
const smo176044 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo176044'] = smo176044;
smo176044.setAttribute('id', 'smo176044');
smo176064v0ar.push(smo176044);
const smo176045 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo176045'] = smo176045;
smo176045.setAttribute('id', 'smo176045');
const smo176046 = new VF.Annotation('ki');
smo176046.setAttribute('id', 'smo176046');
smo176046.setFont('times', 12, 'normal');
smo176046.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo176045.addModifier(smo176046);
smo176046.addClass('lyric lyric-0');
smo176064v0ar.push(smo176045);
const smo176047 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo176047'] = smo176047;
smo176047.setAttribute('id', 'smo176047');
const smo176048 = new VF.Annotation('ri');
smo176048.setAttribute('id', 'smo176048');
smo176048.setFont('times', 12, 'normal');
smo176048.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo176047.addModifier(smo176048);
smo176048.addClass('lyric lyric-0');
smo176064v0ar.push(smo176047);
smo176064v0.addTickables(smo176064v0ar)
fmtsmo17606465.joinVoices([smo176064v0]);
const fmtsmo17918065 = new VF.Formatter();
//
// voices and notes for stave 3 65
const smo179180v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo179180v0ar = [];
const smo179154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo179154'] = smo179154;
smo179154.setAttribute('id', 'smo179154');
const smo1791540acc = new VF.Accidental('n');
smo179154.addModifier(smo1791540acc, 0);
smo179180v0ar.push(smo179154);
const smo179155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo179155'] = smo179155;
smo179155.setAttribute('id', 'smo179155');
const smo179156 = new VF.Annotation('a');
smo179156.setAttribute('id', 'smo179156');
smo179156.setFont('times', 12, 'normal');
smo179156.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo179155.addModifier(smo179156);
smo179156.addClass('lyric lyric-0');
smo179180v0ar.push(smo179155);
const smo179157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo179157'] = smo179157;
smo179157.setAttribute('id', 'smo179157');
smo179180v0ar.push(smo179157);
const smo179158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo179158'] = smo179158;
smo179158.setAttribute('id', 'smo179158');
const smo179159 = new VF.Annotation('Ki');
smo179159.setAttribute('id', 'smo179159');
smo179159.setFont('times', 12, 'normal');
smo179159.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo179158.addModifier(smo179159);
smo179159.addClass('lyric lyric-0 lyric-hyphen');
smo179180v0ar.push(smo179158);
const smo179160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo179160'] = smo179160;
smo179160.setAttribute('id', 'smo179160');
smo179180v0ar.push(smo179160);
const smo179161 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo179161'] = smo179161;
smo179161.setAttribute('id', 'smo179161');
const smo179162 = new VF.Annotation('ki');
smo179162.setAttribute('id', 'smo179162');
smo179162.setFont('times', 12, 'normal');
smo179162.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo179161.addModifier(smo179162);
smo179162.addClass('lyric lyric-0');
smo179180v0ar.push(smo179161);
const smo179163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo179163'] = smo179163;
smo179163.setAttribute('id', 'smo179163');
const smo179164 = new VF.Annotation('ri');
smo179164.setAttribute('id', 'smo179164');
smo179164.setFont('times', 12, 'normal');
smo179164.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo179163.addModifier(smo179164);
smo179164.addClass('lyric lyric-0');
smo179180v0ar.push(smo179163);
smo179180v0.addTickables(smo179180v0ar)
fmtsmo17918065.joinVoices([smo179180v0]);
const fmtsmo18219965 = new VF.Formatter();
//
// voices and notes for stave 4 65
const smo182199v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo182199v0ar = [];
const smo182173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo182173'] = smo182173;
smo182173.setAttribute('id', 'smo182173');
const smo1821730acc = new VF.Accidental('n');
smo182173.addModifier(smo1821730acc, 0);
smo182199v0ar.push(smo182173);
const smo182174 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo182174'] = smo182174;
smo182174.setAttribute('id', 'smo182174');
const smo182175 = new VF.Annotation('a');
smo182175.setAttribute('id', 'smo182175');
smo182175.setFont('times', 12, 'normal');
smo182175.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo182174.addModifier(smo182175);
smo182175.addClass('lyric lyric-0');
smo182199v0ar.push(smo182174);
const smo182176 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo182176'] = smo182176;
smo182176.setAttribute('id', 'smo182176');
smo182199v0ar.push(smo182176);
const smo182177 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo182177'] = smo182177;
smo182177.setAttribute('id', 'smo182177');
const smo182178 = new VF.Annotation('Ki');
smo182178.setAttribute('id', 'smo182178');
smo182178.setFont('times', 12, 'normal');
smo182178.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo182177.addModifier(smo182178);
smo182178.addClass('lyric lyric-0 lyric-hyphen');
smo182199v0ar.push(smo182177);
const smo182179 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo182179'] = smo182179;
smo182179.setAttribute('id', 'smo182179');
smo182199v0ar.push(smo182179);
const smo182180 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo182180'] = smo182180;
smo182180.setAttribute('id', 'smo182180');
const smo182181 = new VF.Annotation('ki');
smo182181.setAttribute('id', 'smo182181');
smo182181.setFont('times', 12, 'normal');
smo182181.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo182180.addModifier(smo182181);
smo182181.addClass('lyric lyric-0');
smo182199v0ar.push(smo182180);
const smo182182 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo182182'] = smo182182;
smo182182.setAttribute('id', 'smo182182');
const smo182183 = new VF.Annotation('ri');
smo182183.setAttribute('id', 'smo182183');
smo182183.setFont('times', 12, 'normal');
smo182183.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo182182.addModifier(smo182183);
smo182183.addClass('lyric lyric-0');
smo182199v0ar.push(smo182182);
smo182199v0.addTickables(smo182199v0ar)
fmtsmo18219965.joinVoices([smo182199v0]);
const fmtsmo18530665 = new VF.Formatter();
//
// voices and notes for stave 5 65
const smo185306v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo185306v0ar = [];
const smo185280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo185280'] = smo185280;
smo185280.setAttribute('id', 'smo185280');
const smo1852800acc = new VF.Accidental('n');
smo185280.addModifier(smo1852800acc, 0);
smo185306v0ar.push(smo185280);
const smo185281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo185281'] = smo185281;
smo185281.setAttribute('id', 'smo185281');
const smo185282 = new VF.Annotation('a');
smo185282.setAttribute('id', 'smo185282');
smo185282.setFont('times', 12, 'normal');
smo185282.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo185281.addModifier(smo185282);
smo185282.addClass('lyric lyric-0');
smo185306v0ar.push(smo185281);
const smo185283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo185283'] = smo185283;
smo185283.setAttribute('id', 'smo185283');
smo185306v0ar.push(smo185283);
const smo185284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo185284'] = smo185284;
smo185284.setAttribute('id', 'smo185284');
const smo185285 = new VF.Annotation('Ki');
smo185285.setAttribute('id', 'smo185285');
smo185285.setFont('times', 12, 'normal');
smo185285.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo185284.addModifier(smo185285);
smo185285.addClass('lyric lyric-0 lyric-hyphen');
smo185306v0ar.push(smo185284);
const smo185286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo185286'] = smo185286;
smo185286.setAttribute('id', 'smo185286');
smo185306v0ar.push(smo185286);
const smo185287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo185287'] = smo185287;
smo185287.setAttribute('id', 'smo185287');
const smo185288 = new VF.Annotation('ki');
smo185288.setAttribute('id', 'smo185288');
smo185288.setFont('times', 12, 'normal');
smo185288.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo185287.addModifier(smo185288);
smo185288.addClass('lyric lyric-0');
smo185306v0ar.push(smo185287);
const smo185289 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo185289'] = smo185289;
smo185289.setAttribute('id', 'smo185289');
const smo185290 = new VF.Annotation('ri');
smo185290.setAttribute('id', 'smo185290');
smo185290.setFont('times', 12, 'normal');
smo185290.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo185289.addModifier(smo185290);
smo185290.addClass('lyric lyric-0');
smo185306v0ar.push(smo185289);
smo185306v0.addTickables(smo185306v0ar)
fmtsmo18530665.joinVoices([smo185306v0]);
const fmtsmo18841865 = new VF.Formatter();
//
// voices and notes for stave 6 65
const smo188418v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo188418v0ar = [];
const smo188392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo188392'] = smo188392;
smo188392.setAttribute('id', 'smo188392');
const smo1883920acc = new VF.Accidental('n');
smo188392.addModifier(smo1883920acc, 0);
smo188418v0ar.push(smo188392);
const smo188393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo188393'] = smo188393;
smo188393.setAttribute('id', 'smo188393');
const smo188394 = new VF.Annotation('a');
smo188394.setAttribute('id', 'smo188394');
smo188394.setFont('times', 12, 'normal');
smo188394.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo188393.addModifier(smo188394);
smo188394.addClass('lyric lyric-0');
smo188418v0ar.push(smo188393);
const smo188395 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo188395'] = smo188395;
smo188395.setAttribute('id', 'smo188395');
smo188418v0ar.push(smo188395);
const smo188396 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo188396'] = smo188396;
smo188396.setAttribute('id', 'smo188396');
const smo188397 = new VF.Annotation('Ki');
smo188397.setAttribute('id', 'smo188397');
smo188397.setFont('times', 12, 'normal');
smo188397.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo188396.addModifier(smo188397);
smo188397.addClass('lyric lyric-0 lyric-hyphen');
smo188418v0ar.push(smo188396);
const smo188398 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo188398'] = smo188398;
smo188398.setAttribute('id', 'smo188398');
smo188418v0ar.push(smo188398);
const smo188399 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo188399'] = smo188399;
smo188399.setAttribute('id', 'smo188399');
const smo188400 = new VF.Annotation('ki');
smo188400.setAttribute('id', 'smo188400');
smo188400.setFont('times', 12, 'normal');
smo188400.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo188399.addModifier(smo188400);
smo188400.addClass('lyric lyric-0');
smo188418v0ar.push(smo188399);
const smo188401 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo188401'] = smo188401;
smo188401.setAttribute('id', 'smo188401');
const smo188402 = new VF.Annotation('ri');
smo188402.setAttribute('id', 'smo188402');
smo188402.setFont('times', 12, 'normal');
smo188402.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo188401.addModifier(smo188402);
smo188402.addClass('lyric lyric-0');
smo188418v0ar.push(smo188401);
smo188418v0.addTickables(smo188418v0ar)
fmtsmo18841865.joinVoices([smo188418v0]);
const fmtsmo19152765 = new VF.Formatter();
//
// voices and notes for stave 7 65
const smo191527v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo191527v0ar = [];
const smo191501 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo191501'] = smo191501;
smo191501.setAttribute('id', 'smo191501');
const smo1915010acc = new VF.Accidental('n');
smo191501.addModifier(smo1915010acc, 0);
smo191527v0ar.push(smo191501);
const smo191502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo191502'] = smo191502;
smo191502.setAttribute('id', 'smo191502');
const smo191503 = new VF.Annotation('a');
smo191503.setAttribute('id', 'smo191503');
smo191503.setFont('times', 12, 'normal');
smo191503.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo191502.addModifier(smo191503);
smo191503.addClass('lyric lyric-0');
smo191527v0ar.push(smo191502);
const smo191504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo191504'] = smo191504;
smo191504.setAttribute('id', 'smo191504');
smo191527v0ar.push(smo191504);
const smo191505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo191505'] = smo191505;
smo191505.setAttribute('id', 'smo191505');
const smo191506 = new VF.Annotation('Ki');
smo191506.setAttribute('id', 'smo191506');
smo191506.setFont('times', 12, 'normal');
smo191506.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo191505.addModifier(smo191506);
smo191506.addClass('lyric lyric-0 lyric-hyphen');
smo191527v0ar.push(smo191505);
const smo191507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo191507'] = smo191507;
smo191507.setAttribute('id', 'smo191507');
smo191527v0ar.push(smo191507);
const smo191508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo191508'] = smo191508;
smo191508.setAttribute('id', 'smo191508');
const smo191509 = new VF.Annotation('ki');
smo191509.setAttribute('id', 'smo191509');
smo191509.setFont('times', 12, 'normal');
smo191509.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo191508.addModifier(smo191509);
smo191509.addClass('lyric lyric-0');
smo191527v0ar.push(smo191508);
const smo191510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo191510'] = smo191510;
smo191510.setAttribute('id', 'smo191510');
const smo191511 = new VF.Annotation('ri');
smo191511.setAttribute('id', 'smo191511');
smo191511.setFont('times', 12, 'normal');
smo191511.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo191510.addModifier(smo191511);
smo191511.addClass('lyric lyric-0');
smo191527v0ar.push(smo191510);
smo191527v0.addTickables(smo191527v0ar)
fmtsmo19152765.joinVoices([smo191527v0]);
const fmtsmo19461365 = new VF.Formatter();
//
// voices and notes for stave 8 65
const smo194613v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo194613v0ar = [];
const smo194587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo194587'] = smo194587;
smo194587.setAttribute('id', 'smo194587');
const smo1945870acc = new VF.Accidental('n');
smo194587.addModifier(smo1945870acc, 0);
smo194613v0ar.push(smo194587);
const smo194588 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo194588'] = smo194588;
smo194588.setAttribute('id', 'smo194588');
const smo194589 = new VF.Annotation('a');
smo194589.setAttribute('id', 'smo194589');
smo194589.setFont('times', 12, 'normal');
smo194589.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo194588.addModifier(smo194589);
smo194589.addClass('lyric lyric-0');
smo194613v0ar.push(smo194588);
const smo194590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo194590'] = smo194590;
smo194590.setAttribute('id', 'smo194590');
smo194613v0ar.push(smo194590);
const smo194591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo194591'] = smo194591;
smo194591.setAttribute('id', 'smo194591');
const smo194592 = new VF.Annotation('Ki');
smo194592.setAttribute('id', 'smo194592');
smo194592.setFont('times', 12, 'normal');
smo194592.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo194591.addModifier(smo194592);
smo194592.addClass('lyric lyric-0 lyric-hyphen');
smo194613v0ar.push(smo194591);
const smo194593 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo194593'] = smo194593;
smo194593.setAttribute('id', 'smo194593');
smo194613v0ar.push(smo194593);
const smo194594 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo194594'] = smo194594;
smo194594.setAttribute('id', 'smo194594');
const smo194595 = new VF.Annotation('ki');
smo194595.setAttribute('id', 'smo194595');
smo194595.setFont('times', 12, 'normal');
smo194595.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo194594.addModifier(smo194595);
smo194595.addClass('lyric lyric-0');
smo194613v0ar.push(smo194594);
const smo194596 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo194596'] = smo194596;
smo194596.setAttribute('id', 'smo194596');
const smo194597 = new VF.Annotation('ri');
smo194597.setAttribute('id', 'smo194597');
smo194597.setFont('times', 12, 'normal');
smo194597.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo194596.addModifier(smo194597);
smo194597.addClass('lyric lyric-0');
smo194613v0ar.push(smo194596);
smo194613v0.addTickables(smo194613v0ar)
fmtsmo19461365.joinVoices([smo194613v0]);
const fmtsmo19770265 = new VF.Formatter();
//
// voices and notes for stave 9 65
const smo197702v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo197702v0ar = [];
const smo197676 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo197676'] = smo197676;
smo197676.setAttribute('id', 'smo197676');
const smo1976760acc = new VF.Accidental('b');
smo197676.addModifier(smo1976760acc, 0);
smo197702v0ar.push(smo197676);
const smo197677 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo197677'] = smo197677;
smo197677.setAttribute('id', 'smo197677');
const smo197678 = new VF.Annotation('a');
smo197678.setAttribute('id', 'smo197678');
smo197678.setFont('times', 12, 'normal');
smo197678.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo197677.addModifier(smo197678);
smo197678.addClass('lyric lyric-0');
smo197702v0ar.push(smo197677);
const smo197679 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo197679'] = smo197679;
smo197679.setAttribute('id', 'smo197679');
smo197702v0ar.push(smo197679);
const smo197680 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo197680'] = smo197680;
smo197680.setAttribute('id', 'smo197680');
const smo197681 = new VF.Annotation('Ki');
smo197681.setAttribute('id', 'smo197681');
smo197681.setFont('times', 12, 'normal');
smo197681.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo197680.addModifier(smo197681);
smo197681.addClass('lyric lyric-0 lyric-hyphen');
smo197702v0ar.push(smo197680);
const smo197682 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo197682'] = smo197682;
smo197682.setAttribute('id', 'smo197682');
smo197702v0ar.push(smo197682);
const smo197683 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo197683'] = smo197683;
smo197683.setAttribute('id', 'smo197683');
const smo197684 = new VF.Annotation('ki');
smo197684.setAttribute('id', 'smo197684');
smo197684.setFont('times', 12, 'normal');
smo197684.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo197683.addModifier(smo197684);
smo197684.addClass('lyric lyric-0');
smo197702v0ar.push(smo197683);
const smo197685 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo197685'] = smo197685;
smo197685.setAttribute('id', 'smo197685');
const smo197686 = new VF.Annotation('ri');
smo197686.setAttribute('id', 'smo197686');
smo197686.setFont('times', 12, 'normal');
smo197686.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo197685.addModifier(smo197686);
smo197686.addClass('lyric lyric-0');
smo197702v0ar.push(smo197685);
smo197702v0.addTickables(smo197702v0ar)
fmtsmo19770265.joinVoices([smo197702v0]);
const fmtsmo20074265 = new VF.Formatter();
//
// voices and notes for stave 10 65
const smo200742v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo200742v0ar = [];
const smo200716 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo200716'] = smo200716;
smo200716.setAttribute('id', 'smo200716');
const smo2007160acc = new VF.Accidental('b');
smo200716.addModifier(smo2007160acc, 0);
smo200742v0ar.push(smo200716);
const smo200717 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo200717'] = smo200717;
smo200717.setAttribute('id', 'smo200717');
const smo200718 = new VF.Annotation('a');
smo200718.setAttribute('id', 'smo200718');
smo200718.setFont('times', 12, 'normal');
smo200718.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo200717.addModifier(smo200718);
smo200718.addClass('lyric lyric-0');
smo200742v0ar.push(smo200717);
const smo200719 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo200719'] = smo200719;
smo200719.setAttribute('id', 'smo200719');
smo200742v0ar.push(smo200719);
const smo200720 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo200720'] = smo200720;
smo200720.setAttribute('id', 'smo200720');
const smo200721 = new VF.Annotation('Ki');
smo200721.setAttribute('id', 'smo200721');
smo200721.setFont('times', 12, 'normal');
smo200721.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo200720.addModifier(smo200721);
smo200721.addClass('lyric lyric-0 lyric-hyphen');
smo200742v0ar.push(smo200720);
const smo200722 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo200722'] = smo200722;
smo200722.setAttribute('id', 'smo200722');
smo200742v0ar.push(smo200722);
const smo200723 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo200723'] = smo200723;
smo200723.setAttribute('id', 'smo200723');
const smo200724 = new VF.Annotation('ki');
smo200724.setAttribute('id', 'smo200724');
smo200724.setFont('times', 12, 'normal');
smo200724.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo200723.addModifier(smo200724);
smo200724.addClass('lyric lyric-0');
smo200742v0ar.push(smo200723);
const smo200725 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo200725'] = smo200725;
smo200725.setAttribute('id', 'smo200725');
const smo200726 = new VF.Annotation('ri');
smo200726.setAttribute('id', 'smo200726');
smo200726.setFont('times', 12, 'normal');
smo200726.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo200725.addModifier(smo200726);
smo200726.addClass('lyric lyric-0');
smo200742v0ar.push(smo200725);
smo200742v0.addTickables(smo200742v0ar)
fmtsmo20074265.joinVoices([smo200742v0]);
const fmtsmo20379665 = new VF.Formatter();
//
// voices and notes for stave 11 65
const smo203796v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo203796v0ar = [];
const smo203770 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo203770'] = smo203770;
smo203770.setAttribute('id', 'smo203770');
const smo2037700acc = new VF.Accidental('b');
smo203770.addModifier(smo2037700acc, 0);
smo203796v0ar.push(smo203770);
const smo203771 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo203771'] = smo203771;
smo203771.setAttribute('id', 'smo203771');
const smo203772 = new VF.Annotation('a');
smo203772.setAttribute('id', 'smo203772');
smo203772.setFont('times', 12, 'normal');
smo203772.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo203771.addModifier(smo203772);
smo203772.addClass('lyric lyric-0');
smo203796v0ar.push(smo203771);
const smo203773 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo203773'] = smo203773;
smo203773.setAttribute('id', 'smo203773');
smo203796v0ar.push(smo203773);
const smo203774 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo203774'] = smo203774;
smo203774.setAttribute('id', 'smo203774');
const smo203775 = new VF.Annotation('Ki');
smo203775.setAttribute('id', 'smo203775');
smo203775.setFont('times', 12, 'normal');
smo203775.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo203774.addModifier(smo203775);
smo203775.addClass('lyric lyric-0 lyric-hyphen');
smo203796v0ar.push(smo203774);
const smo203776 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo203776'] = smo203776;
smo203776.setAttribute('id', 'smo203776');
smo203796v0ar.push(smo203776);
const smo203777 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo203777'] = smo203777;
smo203777.setAttribute('id', 'smo203777');
const smo203778 = new VF.Annotation('ki');
smo203778.setAttribute('id', 'smo203778');
smo203778.setFont('times', 12, 'normal');
smo203778.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo203777.addModifier(smo203778);
smo203778.addClass('lyric lyric-0');
smo203796v0ar.push(smo203777);
const smo203779 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo203779'] = smo203779;
smo203779.setAttribute('id', 'smo203779');
const smo203780 = new VF.Annotation('ri');
smo203780.setAttribute('id', 'smo203780');
smo203780.setFont('times', 12, 'normal');
smo203780.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo203779.addModifier(smo203780);
smo203780.addClass('lyric lyric-0');
smo203796v0ar.push(smo203779);
smo203796v0.addTickables(smo203796v0ar)
fmtsmo20379665.joinVoices([smo203796v0]);
const fmtsmo20683965 = new VF.Formatter();
//
// voices and notes for stave 12 65
const smo206839v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo206839v0ar = [];
const smo206813 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo206813'] = smo206813;
smo206813.setAttribute('id', 'smo206813');
const smo2068130acc = new VF.Accidental('b');
smo206813.addModifier(smo2068130acc, 0);
smo206839v0ar.push(smo206813);
const smo206814 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo206814'] = smo206814;
smo206814.setAttribute('id', 'smo206814');
const smo206815 = new VF.Annotation('a');
smo206815.setAttribute('id', 'smo206815');
smo206815.setFont('times', 12, 'normal');
smo206815.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo206814.addModifier(smo206815);
smo206815.addClass('lyric lyric-0');
smo206839v0ar.push(smo206814);
const smo206816 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo206816'] = smo206816;
smo206816.setAttribute('id', 'smo206816');
smo206839v0ar.push(smo206816);
const smo206817 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo206817'] = smo206817;
smo206817.setAttribute('id', 'smo206817');
const smo206818 = new VF.Annotation('Ki');
smo206818.setAttribute('id', 'smo206818');
smo206818.setFont('times', 12, 'normal');
smo206818.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo206817.addModifier(smo206818);
smo206818.addClass('lyric lyric-0 lyric-hyphen');
smo206839v0ar.push(smo206817);
const smo206819 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo206819'] = smo206819;
smo206819.setAttribute('id', 'smo206819');
smo206839v0ar.push(smo206819);
const smo206820 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo206820'] = smo206820;
smo206820.setAttribute('id', 'smo206820');
const smo206821 = new VF.Annotation('ki');
smo206821.setAttribute('id', 'smo206821');
smo206821.setFont('times', 12, 'normal');
smo206821.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo206820.addModifier(smo206821);
smo206821.addClass('lyric lyric-0');
smo206839v0ar.push(smo206820);
const smo206822 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo206822'] = smo206822;
smo206822.setAttribute('id', 'smo206822');
const smo206823 = new VF.Annotation('ri');
smo206823.setAttribute('id', 'smo206823');
smo206823.setFont('times', 12, 'normal');
smo206823.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo206822.addModifier(smo206823);
smo206823.addClass('lyric lyric-0');
smo206839v0ar.push(smo206822);
smo206839v0.addTickables(smo206839v0ar)
fmtsmo20683965.joinVoices([smo206839v0]);
const fmtsmo21004565 = new VF.Formatter();
//
// voices and notes for stave 13 65
const smo210045v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo210045v0ar = [];
const smo210025 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n","eb/5/n"]}'))
noteHash['smo210025'] = smo210025;
smo210025.setAttribute('id', 'smo210025');
const smo2100252acc = new VF.Accidental('b');
smo210025.addModifier(smo2100252acc, 2);
smo210025.addModifier(new VF.Dot(), 0);
smo210025.addModifier(new VF.Dot(), 1);
smo210025.addModifier(new VF.Dot(), 2);
smo210045v0ar.push(smo210025);
const smo210026 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
noteHash['smo210026'] = smo210026;
smo210026.setAttribute('id', 'smo210026');
const smo2100260acc = new VF.Accidental('#');
smo210026.addModifier(smo2100260acc, 0);
smo210045v0ar.push(smo210026);
const smo210027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
noteHash['smo210027'] = smo210027;
smo210027.setAttribute('id', 'smo210027');
smo210045v0ar.push(smo210027);
const smo210028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo210028'] = smo210028;
smo210028.setAttribute('id', 'smo210028');
smo210045v0ar.push(smo210028);
const smo210029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo210029'] = smo210029;
smo210029.setAttribute('id', 'smo210029');
smo210045v0ar.push(smo210029);
smo210045v0.addTickables(smo210045v0ar)
fmtsmo21004565.joinVoices([smo210045v0]);
const fmtsmo21325865 = new VF.Formatter();
//
// voices and notes for stave 14 65
const smo213258v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo213258v0ar = [];
const smo213238 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n","eb/5/n"]}'))
noteHash['smo213238'] = smo213238;
smo213238.setAttribute('id', 'smo213238');
const smo2132382acc = new VF.Accidental('b');
smo213238.addModifier(smo2132382acc, 2);
smo213238.addModifier(new VF.Dot(), 0);
smo213238.addModifier(new VF.Dot(), 1);
smo213238.addModifier(new VF.Dot(), 2);
smo213258v0ar.push(smo213238);
const smo213239 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
noteHash['smo213239'] = smo213239;
smo213239.setAttribute('id', 'smo213239');
const smo2132390acc = new VF.Accidental('#');
smo213239.addModifier(smo2132390acc, 0);
smo213258v0ar.push(smo213239);
const smo213240 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
noteHash['smo213240'] = smo213240;
smo213240.setAttribute('id', 'smo213240');
smo213258v0ar.push(smo213240);
const smo213241 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo213241'] = smo213241;
smo213241.setAttribute('id', 'smo213241');
smo213258v0ar.push(smo213241);
const smo213242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo213242'] = smo213242;
smo213242.setAttribute('id', 'smo213242');
smo213258v0ar.push(smo213242);
smo213258v0.addTickables(smo213258v0ar)
fmtsmo21325865.joinVoices([smo213258v0]);
const fmtsmo21645365 = new VF.Formatter();
//
// voices and notes for stave 15 65
const smo216453v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo216453v0ar = [];
const smo216433 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo216433'] = smo216433;
smo216433.setAttribute('id', 'smo216433');
smo216433.addModifier(new VF.Dot(), 0);
smo216453v0ar.push(smo216433);
const smo216434 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo216434'] = smo216434;
smo216434.setAttribute('id', 'smo216434');
const smo2164340acc = new VF.Accidental('#');
smo216434.addModifier(smo2164340acc, 0);
smo216453v0ar.push(smo216434);
const smo216435 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo216435'] = smo216435;
smo216435.setAttribute('id', 'smo216435');
smo216453v0ar.push(smo216435);
const smo216436 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo216436'] = smo216436;
smo216436.setAttribute('id', 'smo216436');
smo216453v0ar.push(smo216436);
const smo216437 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo216437'] = smo216437;
smo216437.setAttribute('id', 'smo216437');
smo216453v0ar.push(smo216437);
smo216453v0.addTickables(smo216453v0ar)
fmtsmo21645365.joinVoices([smo216453v0]);
const fmtsmo21957065 = new VF.Formatter();
//
// voices and notes for stave 16 65
const smo219570v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo219570v0ar = [];
const smo219551 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo219551'] = smo219551;
smo219551.setAttribute('id', 'smo219551');
smo219551.addModifier(new VF.Dot(), 0);
smo219570v0ar.push(smo219551);
const smo219552 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo219552'] = smo219552;
smo219552.setAttribute('id', 'smo219552');
smo219570v0ar.push(smo219552);
const smo219553 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo219553'] = smo219553;
smo219553.setAttribute('id', 'smo219553');
smo219570v0ar.push(smo219553);
const smo219554 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo219554'] = smo219554;
smo219554.setAttribute('id', 'smo219554');
smo219570v0ar.push(smo219554);
smo219570v0.addTickables(smo219570v0ar)
fmtsmo21957065.joinVoices([smo219570v0]);
const fmtsmo22275965 = new VF.Formatter();
//
// voices and notes for stave 17 65
const smo222759v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo222759v0ar = [];
const smo222740 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo222740'] = smo222740;
smo222740.setAttribute('id', 'smo222740');
const smo2227400acc = new VF.Accidental('n');
smo222740.addModifier(smo2227400acc, 0);
smo222740.addModifier(new VF.Dot(), 0);
smo222759v0ar.push(smo222740);
const smo222741 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo222741'] = smo222741;
smo222741.setAttribute('id', 'smo222741');
smo222759v0ar.push(smo222741);
const smo222742 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo222742'] = smo222742;
smo222742.setAttribute('id', 'smo222742');
smo222759v0ar.push(smo222742);
const smo222743 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo222743'] = smo222743;
smo222743.setAttribute('id', 'smo222743');
smo222759v0ar.push(smo222743);
smo222759v0.addTickables(smo222759v0ar)
fmtsmo22275965.joinVoices([smo222759v0]);
// create beam groups and tuplets for format grp smo224512 before formatting
const dirsmo315888 = smo169901.getStemDirection();
smo169901.setStemDirection(dirsmo315888);
smo169902.setStemDirection(dirsmo315888);
const smo315888 = new VF.Beam([smo169901,smo169902]);
const dirsmo315889 = smo169905.getStemDirection();
smo169905.setStemDirection(dirsmo315889);
smo169907.setStemDirection(dirsmo315889);
const smo315889 = new VF.Beam([smo169905,smo169907]);
const dirsmo315892 = smo172895.getStemDirection();
smo172895.setStemDirection(dirsmo315892);
smo172896.setStemDirection(dirsmo315892);
const smo315892 = new VF.Beam([smo172895,smo172896]);
const dirsmo315893 = smo172899.getStemDirection();
smo172899.setStemDirection(dirsmo315893);
smo172901.setStemDirection(dirsmo315893);
const smo315893 = new VF.Beam([smo172899,smo172901]);
const dirsmo315896 = smo176038.getStemDirection();
smo176038.setStemDirection(dirsmo315896);
smo176039.setStemDirection(dirsmo315896);
const smo315896 = new VF.Beam([smo176038,smo176039]);
const dirsmo315897 = smo176042.getStemDirection();
smo176042.setStemDirection(dirsmo315897);
smo176044.setStemDirection(dirsmo315897);
const smo315897 = new VF.Beam([smo176042,smo176044]);
const dirsmo315900 = smo179154.getStemDirection();
smo179154.setStemDirection(dirsmo315900);
smo179155.setStemDirection(dirsmo315900);
const smo315900 = new VF.Beam([smo179154,smo179155]);
const dirsmo315901 = smo179158.getStemDirection();
smo179158.setStemDirection(dirsmo315901);
smo179160.setStemDirection(dirsmo315901);
const smo315901 = new VF.Beam([smo179158,smo179160]);
const dirsmo315904 = smo182173.getStemDirection();
smo182173.setStemDirection(dirsmo315904);
smo182174.setStemDirection(dirsmo315904);
const smo315904 = new VF.Beam([smo182173,smo182174]);
const dirsmo315905 = smo182177.getStemDirection();
smo182177.setStemDirection(dirsmo315905);
smo182179.setStemDirection(dirsmo315905);
const smo315905 = new VF.Beam([smo182177,smo182179]);
 
// formatting measures in staff group smo224512
fmtsmo16992765.format([smo169927v0,smo172921v0,smo176064v0,smo179180v0,smo182199v0], 288);
const stavesmo169927 = new VF.Stave(808, 210, 302);
stavesmo169927.setAttribute('id', 'stavesmo169927');
stavesmo169927.setBegBarType(VF.Barline.type.NONE);
stavesmo169927.setContext(context);
stavesmo169927.draw();
smo169927v0.draw(context, stavesmo169927);
smo315888.setContext(context);
smo315888.draw();
smo315889.setContext(context);
smo315889.draw();
const stavesmo172921 = new VF.Stave(808, 316, 302);
stavesmo172921.setAttribute('id', 'stavesmo172921');
stavesmo172921.setBegBarType(VF.Barline.type.NONE);
stavesmo172921.setContext(context);
stavesmo172921.draw();
smo172921v0.draw(context, stavesmo172921);
smo315892.setContext(context);
smo315892.draw();
smo315893.setContext(context);
smo315893.draw();
const stavesmo176064 = new VF.Stave(808, 437, 302);
stavesmo176064.setAttribute('id', 'stavesmo176064');
stavesmo176064.setBegBarType(VF.Barline.type.NONE);
stavesmo176064.setContext(context);
stavesmo176064.draw();
smo176064v0.draw(context, stavesmo176064);
smo315896.setContext(context);
smo315896.draw();
smo315897.setContext(context);
smo315897.draw();
const stavesmo179180 = new VF.Stave(808, 553, 302);
stavesmo179180.setAttribute('id', 'stavesmo179180');
stavesmo179180.setBegBarType(VF.Barline.type.NONE);
stavesmo179180.setContext(context);
stavesmo179180.draw();
smo179180v0.draw(context, stavesmo179180);
smo315900.setContext(context);
smo315900.draw();
smo315901.setContext(context);
smo315901.draw();
const stavesmo182199 = new VF.Stave(808, 659, 302);
stavesmo182199.setAttribute('id', 'stavesmo182199');
stavesmo182199.setBegBarType(VF.Barline.type.NONE);
stavesmo182199.setContext(context);
stavesmo182199.draw();
smo182199v0.draw(context, stavesmo182199);
smo315904.setContext(context);
smo315904.draw();
smo315905.setContext(context);
smo315905.draw();
// create beam groups and tuplets for format grp smo224514 before formatting
const dirsmo315908 = smo185280.getStemDirection();
smo185280.setStemDirection(dirsmo315908);
smo185281.setStemDirection(dirsmo315908);
const smo315908 = new VF.Beam([smo185280,smo185281]);
const dirsmo315909 = smo185284.getStemDirection();
smo185284.setStemDirection(dirsmo315909);
smo185286.setStemDirection(dirsmo315909);
const smo315909 = new VF.Beam([smo185284,smo185286]);
const dirsmo315912 = smo188392.getStemDirection();
smo188392.setStemDirection(dirsmo315912);
smo188393.setStemDirection(dirsmo315912);
const smo315912 = new VF.Beam([smo188392,smo188393]);
const dirsmo315913 = smo188396.getStemDirection();
smo188396.setStemDirection(dirsmo315913);
smo188398.setStemDirection(dirsmo315913);
const smo315913 = new VF.Beam([smo188396,smo188398]);
const dirsmo315916 = smo191501.getStemDirection();
smo191501.setStemDirection(dirsmo315916);
smo191502.setStemDirection(dirsmo315916);
const smo315916 = new VF.Beam([smo191501,smo191502]);
const dirsmo315917 = smo191505.getStemDirection();
smo191505.setStemDirection(dirsmo315917);
smo191507.setStemDirection(dirsmo315917);
const smo315917 = new VF.Beam([smo191505,smo191507]);
const dirsmo315920 = smo194587.getStemDirection();
smo194587.setStemDirection(dirsmo315920);
smo194588.setStemDirection(dirsmo315920);
const smo315920 = new VF.Beam([smo194587,smo194588]);
const dirsmo315921 = smo194591.getStemDirection();
smo194591.setStemDirection(dirsmo315921);
smo194593.setStemDirection(dirsmo315921);
const smo315921 = new VF.Beam([smo194591,smo194593]);
 
// formatting measures in staff group smo224514
fmtsmo18530665.format([smo185306v0,smo188418v0,smo191527v0,smo194613v0], 288);
const stavesmo185306 = new VF.Stave(808, 780, 302);
stavesmo185306.setAttribute('id', 'stavesmo185306');
stavesmo185306.setBegBarType(VF.Barline.type.NONE);
stavesmo185306.setContext(context);
stavesmo185306.draw();
smo185306v0.draw(context, stavesmo185306);
smo315908.setContext(context);
smo315908.draw();
smo315909.setContext(context);
smo315909.draw();
const stavesmo188418 = new VF.Stave(808, 896, 302);
stavesmo188418.setAttribute('id', 'stavesmo188418');
stavesmo188418.setBegBarType(VF.Barline.type.NONE);
stavesmo188418.setContext(context);
stavesmo188418.draw();
smo188418v0.draw(context, stavesmo188418);
smo315912.setContext(context);
smo315912.draw();
smo315913.setContext(context);
smo315913.draw();
const stavesmo191527 = new VF.Stave(808, 1012, 302);
stavesmo191527.setAttribute('id', 'stavesmo191527');
stavesmo191527.setBegBarType(VF.Barline.type.NONE);
stavesmo191527.setContext(context);
stavesmo191527.draw();
smo191527v0.draw(context, stavesmo191527);
smo315916.setContext(context);
smo315916.draw();
smo315917.setContext(context);
smo315917.draw();
const stavesmo194613 = new VF.Stave(808, 1128, 302);
stavesmo194613.setAttribute('id', 'stavesmo194613');
stavesmo194613.setBegBarType(VF.Barline.type.NONE);
stavesmo194613.setContext(context);
stavesmo194613.draw();
smo194613v0.draw(context, stavesmo194613);
smo315920.setContext(context);
smo315920.draw();
smo315921.setContext(context);
smo315921.draw();
// create beam groups and tuplets for format grp smo224516 before formatting
const dirsmo315924 = smo197676.getStemDirection();
smo197676.setStemDirection(dirsmo315924);
smo197677.setStemDirection(dirsmo315924);
const smo315924 = new VF.Beam([smo197676,smo197677]);
const dirsmo315925 = smo197680.getStemDirection();
smo197680.setStemDirection(dirsmo315925);
smo197682.setStemDirection(dirsmo315925);
const smo315925 = new VF.Beam([smo197680,smo197682]);
const dirsmo315928 = smo200716.getStemDirection();
smo200716.setStemDirection(dirsmo315928);
smo200717.setStemDirection(dirsmo315928);
const smo315928 = new VF.Beam([smo200716,smo200717]);
const dirsmo315929 = smo200720.getStemDirection();
smo200720.setStemDirection(dirsmo315929);
smo200722.setStemDirection(dirsmo315929);
const smo315929 = new VF.Beam([smo200720,smo200722]);
const dirsmo315932 = smo203770.getStemDirection();
smo203770.setStemDirection(dirsmo315932);
smo203771.setStemDirection(dirsmo315932);
const smo315932 = new VF.Beam([smo203770,smo203771]);
const dirsmo315933 = smo203774.getStemDirection();
smo203774.setStemDirection(dirsmo315933);
smo203776.setStemDirection(dirsmo315933);
const smo315933 = new VF.Beam([smo203774,smo203776]);
const dirsmo315936 = smo206813.getStemDirection();
smo206813.setStemDirection(dirsmo315936);
smo206814.setStemDirection(dirsmo315936);
const smo315936 = new VF.Beam([smo206813,smo206814]);
const dirsmo315937 = smo206817.getStemDirection();
smo206817.setStemDirection(dirsmo315937);
smo206819.setStemDirection(dirsmo315937);
const smo315937 = new VF.Beam([smo206817,smo206819]);
 
// formatting measures in staff group smo224516
fmtsmo19770265.format([smo197702v0,smo200742v0,smo203796v0,smo206839v0], 288);
const stavesmo197702 = new VF.Stave(808, 1264, 302);
stavesmo197702.setAttribute('id', 'stavesmo197702');
stavesmo197702.setBegBarType(VF.Barline.type.NONE);
stavesmo197702.setContext(context);
stavesmo197702.draw();
smo197702v0.draw(context, stavesmo197702);
smo315924.setContext(context);
smo315924.draw();
smo315925.setContext(context);
smo315925.draw();
const stavesmo200742 = new VF.Stave(808, 1400, 302);
stavesmo200742.setAttribute('id', 'stavesmo200742');
stavesmo200742.setBegBarType(VF.Barline.type.NONE);
stavesmo200742.setContext(context);
stavesmo200742.draw();
smo200742v0.draw(context, stavesmo200742);
smo315928.setContext(context);
smo315928.draw();
smo315929.setContext(context);
smo315929.draw();
const stavesmo203796 = new VF.Stave(808, 1536, 302);
stavesmo203796.setAttribute('id', 'stavesmo203796');
stavesmo203796.setBegBarType(VF.Barline.type.NONE);
stavesmo203796.setContext(context);
stavesmo203796.draw();
smo203796v0.draw(context, stavesmo203796);
smo315932.setContext(context);
smo315932.draw();
smo315933.setContext(context);
smo315933.draw();
const stavesmo206839 = new VF.Stave(808, 1672, 302);
stavesmo206839.setAttribute('id', 'stavesmo206839');
stavesmo206839.setBegBarType(VF.Barline.type.NONE);
stavesmo206839.setContext(context);
stavesmo206839.draw();
smo206839v0.draw(context, stavesmo206839);
smo315936.setContext(context);
smo315936.draw();
smo315937.setContext(context);
smo315937.draw();
// create beam groups and tuplets for format grp smo211835 before formatting
const dirsmo315940 = smo210026.getStemDirection();
smo210026.setStemDirection(dirsmo315940);
smo210027.setStemDirection(dirsmo315940);
const smo315940 = new VF.Beam([smo210026,smo210027]);
 
// formatting measures in staff group smo211835
fmtsmo21004565.format([smo210045v0], 288);
const stavesmo210045 = new VF.Stave(808, 1818, 302);
stavesmo210045.setAttribute('id', 'stavesmo210045');
stavesmo210045.setBegBarType(VF.Barline.type.NONE);
stavesmo210045.setContext(context);
stavesmo210045.draw();
smo210045v0.draw(context, stavesmo210045);
smo315940.setContext(context);
smo315940.draw();
// create beam groups and tuplets for format grp smo224510 before formatting
const dirsmo315943 = smo213239.getStemDirection();
smo213239.setStemDirection(dirsmo315943);
smo213240.setStemDirection(dirsmo315943);
const smo315943 = new VF.Beam([smo213239,smo213240]);
const dirsmo315946 = smo216434.getStemDirection();
smo216434.setStemDirection(dirsmo315946);
smo216435.setStemDirection(dirsmo315946);
const smo315946 = new VF.Beam([smo216434,smo216435]);
 
// formatting measures in staff group smo224510
fmtsmo21325865.format([smo213258v0,smo216453v0], 288);
const stavesmo213258 = new VF.Stave(808, 1924, 302);
stavesmo213258.setAttribute('id', 'stavesmo213258');
stavesmo213258.setBegBarType(VF.Barline.type.NONE);
stavesmo213258.setContext(context);
stavesmo213258.draw();
smo213258v0.draw(context, stavesmo213258);
smo315943.setContext(context);
smo315943.draw();
const stavesmo216453 = new VF.Stave(808, 2010, 302);
stavesmo216453.setAttribute('id', 'stavesmo216453');
stavesmo216453.setBegBarType(VF.Barline.type.NONE);
stavesmo216453.setContext(context);
stavesmo216453.draw();
smo216453v0.draw(context, stavesmo216453);
smo315946.setContext(context);
smo315946.draw();
// create beam groups and tuplets for format grp smo221348 before formatting
 
// formatting measures in staff group smo221348
fmtsmo21957065.format([smo219570v0], 288);
const stavesmo219570 = new VF.Stave(808, 2081, 302);
stavesmo219570.setAttribute('id', 'stavesmo219570');
stavesmo219570.setBegBarType(VF.Barline.type.NONE);
stavesmo219570.setContext(context);
stavesmo219570.draw();
smo219570v0.draw(context, stavesmo219570);
// create beam groups and tuplets for format grp smo224504 before formatting
 
// formatting measures in staff group smo224504
fmtsmo22275965.format([smo222759v0], 288);
const stavesmo222759 = new VF.Stave(808, 2152, 302);
stavesmo222759.setAttribute('id', 'stavesmo222759');
stavesmo222759.setBegBarType(VF.Barline.type.NONE);
stavesmo222759.setContext(context);
stavesmo222759.draw();
smo222759v0.draw(context, stavesmo222759);
const fmtsmo16995666 = new VF.Formatter();
//
// voices and notes for stave 0 66
const smo169956v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo169956v0ar = [];
const smo169928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo169928'] = smo169928;
smo169928.setAttribute('id', 'smo169928');
const smo169929 = new VF.Annotation('bun');
smo169929.setAttribute('id', 'smo169929');
smo169929.setFont('times', 12, 'normal');
smo169929.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo169928.addModifier(smo169929);
smo169929.addClass('lyric lyric-0');
smo169956v0ar.push(smo169928);
const smo169930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo169930'] = smo169930;
smo169930.setAttribute('id', 'smo169930');
const smo169931 = new VF.Annotation('yi');
smo169931.setAttribute('id', 'smo169931');
smo169931.setFont('times', 12, 'normal');
smo169931.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo169930.addModifier(smo169931);
smo169931.addClass('lyric lyric-0 lyric-hyphen');
smo169956v0ar.push(smo169930);
const smo169932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo169932'] = smo169932;
smo169932.setAttribute('id', 'smo169932');
const smo169933 = new VF.Annotation('ri');
smo169933.setAttribute('id', 'smo169933');
smo169933.setFont('times', 12, 'normal');
smo169933.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo169932.addModifier(smo169933);
smo169933.addClass('lyric lyric-0');
smo169956v0ar.push(smo169932);
const smo169934 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo169934'] = smo169934;
smo169934.setAttribute('id', 'smo169934');
const smo169935 = new VF.Annotation('bun');
smo169935.setAttribute('id', 'smo169935');
smo169935.setFont('times', 12, 'normal');
smo169935.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo169934.addModifier(smo169935);
smo169935.addClass('lyric lyric-0');
smo169956v0ar.push(smo169934);
const smo169936 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo169936'] = smo169936;
smo169936.setAttribute('id', 'smo169936');
const smo169937 = new VF.Annotation('Man');
smo169937.setAttribute('id', 'smo169937');
smo169937.setFont('times', 12, 'normal');
smo169937.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo169936.addModifier(smo169937);
smo169937.addClass('lyric lyric-0 lyric-hyphen');
smo169956v0ar.push(smo169936);
const smo169938 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo169938'] = smo169938;
smo169938.setAttribute('id', 'smo169938');
smo169956v0ar.push(smo169938);
const smo169939 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo169939'] = smo169939;
smo169939.setAttribute('id', 'smo169939');
const smo169940 = new VF.Annotation('ding');
smo169940.setAttribute('id', 'smo169940');
smo169940.setFont('times', 12, 'normal');
smo169940.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo169939.addModifier(smo169940);
smo169940.addClass('lyric lyric-0 lyric-hyphen');
smo169956v0ar.push(smo169939);
smo169956v0.addTickables(smo169956v0ar)
fmtsmo16995666.joinVoices([smo169956v0]);
const fmtsmo17295066 = new VF.Formatter();
//
// voices and notes for stave 1 66
const smo172950v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo172950v0ar = [];
const smo172922 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo172922'] = smo172922;
smo172922.setAttribute('id', 'smo172922');
const smo172923 = new VF.Annotation('bun');
smo172923.setAttribute('id', 'smo172923');
smo172923.setFont('times', 12, 'normal');
smo172923.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo172922.addModifier(smo172923);
smo172923.addClass('lyric lyric-0');
smo172950v0ar.push(smo172922);
const smo172924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo172924'] = smo172924;
smo172924.setAttribute('id', 'smo172924');
const smo172925 = new VF.Annotation('yi');
smo172925.setAttribute('id', 'smo172925');
smo172925.setFont('times', 12, 'normal');
smo172925.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo172924.addModifier(smo172925);
smo172925.addClass('lyric lyric-0 lyric-hyphen');
smo172950v0ar.push(smo172924);
const smo172926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo172926'] = smo172926;
smo172926.setAttribute('id', 'smo172926');
const smo172927 = new VF.Annotation('ri');
smo172927.setAttribute('id', 'smo172927');
smo172927.setFont('times', 12, 'normal');
smo172927.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo172926.addModifier(smo172927);
smo172927.addClass('lyric lyric-0');
smo172950v0ar.push(smo172926);
const smo172928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo172928'] = smo172928;
smo172928.setAttribute('id', 'smo172928');
const smo172929 = new VF.Annotation('bun');
smo172929.setAttribute('id', 'smo172929');
smo172929.setFont('times', 12, 'normal');
smo172929.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo172928.addModifier(smo172929);
smo172929.addClass('lyric lyric-0');
smo172950v0ar.push(smo172928);
const smo172930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo172930'] = smo172930;
smo172930.setAttribute('id', 'smo172930');
const smo172931 = new VF.Annotation('Man');
smo172931.setAttribute('id', 'smo172931');
smo172931.setFont('times', 12, 'normal');
smo172931.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo172930.addModifier(smo172931);
smo172931.addClass('lyric lyric-0 lyric-hyphen');
smo172950v0ar.push(smo172930);
const smo172932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo172932'] = smo172932;
smo172932.setAttribute('id', 'smo172932');
smo172950v0ar.push(smo172932);
const smo172933 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo172933'] = smo172933;
smo172933.setAttribute('id', 'smo172933');
const smo172934 = new VF.Annotation('ding');
smo172934.setAttribute('id', 'smo172934');
smo172934.setFont('times', 12, 'normal');
smo172934.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo172933.addModifier(smo172934);
smo172934.addClass('lyric lyric-0 lyric-hyphen');
smo172950v0ar.push(smo172933);
smo172950v0.addTickables(smo172950v0ar)
fmtsmo17295066.joinVoices([smo172950v0]);
const fmtsmo17609366 = new VF.Formatter();
//
// voices and notes for stave 2 66
const smo176093v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo176093v0ar = [];
const smo176065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo176065'] = smo176065;
smo176065.setAttribute('id', 'smo176065');
const smo176066 = new VF.Annotation('bun');
smo176066.setAttribute('id', 'smo176066');
smo176066.setFont('times', 12, 'normal');
smo176066.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo176065.addModifier(smo176066);
smo176066.addClass('lyric lyric-0');
smo176093v0ar.push(smo176065);
const smo176067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo176067'] = smo176067;
smo176067.setAttribute('id', 'smo176067');
const smo176068 = new VF.Annotation('yi');
smo176068.setAttribute('id', 'smo176068');
smo176068.setFont('times', 12, 'normal');
smo176068.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo176067.addModifier(smo176068);
smo176068.addClass('lyric lyric-0 lyric-hyphen');
smo176093v0ar.push(smo176067);
const smo176069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo176069'] = smo176069;
smo176069.setAttribute('id', 'smo176069');
const smo176070 = new VF.Annotation('ri');
smo176070.setAttribute('id', 'smo176070');
smo176070.setFont('times', 12, 'normal');
smo176070.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo176069.addModifier(smo176070);
smo176070.addClass('lyric lyric-0');
smo176093v0ar.push(smo176069);
const smo176071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo176071'] = smo176071;
smo176071.setAttribute('id', 'smo176071');
const smo176072 = new VF.Annotation('bun');
smo176072.setAttribute('id', 'smo176072');
smo176072.setFont('times', 12, 'normal');
smo176072.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo176071.addModifier(smo176072);
smo176072.addClass('lyric lyric-0');
smo176093v0ar.push(smo176071);
const smo176073 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo176073'] = smo176073;
smo176073.setAttribute('id', 'smo176073');
const smo176074 = new VF.Annotation('Man');
smo176074.setAttribute('id', 'smo176074');
smo176074.setFont('times', 12, 'normal');
smo176074.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo176073.addModifier(smo176074);
smo176074.addClass('lyric lyric-0 lyric-hyphen');
smo176093v0ar.push(smo176073);
const smo176075 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo176075'] = smo176075;
smo176075.setAttribute('id', 'smo176075');
smo176093v0ar.push(smo176075);
const smo176076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo176076'] = smo176076;
smo176076.setAttribute('id', 'smo176076');
const smo176077 = new VF.Annotation('ding');
smo176077.setAttribute('id', 'smo176077');
smo176077.setFont('times', 12, 'normal');
smo176077.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo176076.addModifier(smo176077);
smo176077.addClass('lyric lyric-0 lyric-hyphen');
smo176093v0ar.push(smo176076);
smo176093v0.addTickables(smo176093v0ar)
fmtsmo17609366.joinVoices([smo176093v0]);
const fmtsmo17920966 = new VF.Formatter();
//
// voices and notes for stave 3 66
const smo179209v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo179209v0ar = [];
const smo179181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo179181'] = smo179181;
smo179181.setAttribute('id', 'smo179181');
const smo179182 = new VF.Annotation('bun');
smo179182.setAttribute('id', 'smo179182');
smo179182.setFont('times', 12, 'normal');
smo179182.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo179181.addModifier(smo179182);
smo179182.addClass('lyric lyric-0');
smo179209v0ar.push(smo179181);
const smo179183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo179183'] = smo179183;
smo179183.setAttribute('id', 'smo179183');
const smo179184 = new VF.Annotation('yi');
smo179184.setAttribute('id', 'smo179184');
smo179184.setFont('times', 12, 'normal');
smo179184.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo179183.addModifier(smo179184);
smo179184.addClass('lyric lyric-0 lyric-hyphen');
smo179209v0ar.push(smo179183);
const smo179185 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo179185'] = smo179185;
smo179185.setAttribute('id', 'smo179185');
const smo179186 = new VF.Annotation('ri');
smo179186.setAttribute('id', 'smo179186');
smo179186.setFont('times', 12, 'normal');
smo179186.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo179185.addModifier(smo179186);
smo179186.addClass('lyric lyric-0');
smo179209v0ar.push(smo179185);
const smo179187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo179187'] = smo179187;
smo179187.setAttribute('id', 'smo179187');
const smo179188 = new VF.Annotation('bun');
smo179188.setAttribute('id', 'smo179188');
smo179188.setFont('times', 12, 'normal');
smo179188.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo179187.addModifier(smo179188);
smo179188.addClass('lyric lyric-0');
smo179209v0ar.push(smo179187);
const smo179189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo179189'] = smo179189;
smo179189.setAttribute('id', 'smo179189');
const smo179190 = new VF.Annotation('Man');
smo179190.setAttribute('id', 'smo179190');
smo179190.setFont('times', 12, 'normal');
smo179190.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo179189.addModifier(smo179190);
smo179190.addClass('lyric lyric-0 lyric-hyphen');
smo179209v0ar.push(smo179189);
const smo179191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo179191'] = smo179191;
smo179191.setAttribute('id', 'smo179191');
smo179209v0ar.push(smo179191);
const smo179192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo179192'] = smo179192;
smo179192.setAttribute('id', 'smo179192');
const smo179193 = new VF.Annotation('ding');
smo179193.setAttribute('id', 'smo179193');
smo179193.setFont('times', 12, 'normal');
smo179193.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo179192.addModifier(smo179193);
smo179193.addClass('lyric lyric-0 lyric-hyphen');
smo179209v0ar.push(smo179192);
smo179209v0.addTickables(smo179209v0ar)
fmtsmo17920966.joinVoices([smo179209v0]);
const fmtsmo18222866 = new VF.Formatter();
//
// voices and notes for stave 4 66
const smo182228v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo182228v0ar = [];
const smo182200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo182200'] = smo182200;
smo182200.setAttribute('id', 'smo182200');
const smo182201 = new VF.Annotation('bun');
smo182201.setAttribute('id', 'smo182201');
smo182201.setFont('times', 12, 'normal');
smo182201.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo182200.addModifier(smo182201);
smo182201.addClass('lyric lyric-0');
smo182228v0ar.push(smo182200);
const smo182202 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo182202'] = smo182202;
smo182202.setAttribute('id', 'smo182202');
const smo182203 = new VF.Annotation('yi');
smo182203.setAttribute('id', 'smo182203');
smo182203.setFont('times', 12, 'normal');
smo182203.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo182202.addModifier(smo182203);
smo182203.addClass('lyric lyric-0 lyric-hyphen');
smo182228v0ar.push(smo182202);
const smo182204 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo182204'] = smo182204;
smo182204.setAttribute('id', 'smo182204');
const smo182205 = new VF.Annotation('ri');
smo182205.setAttribute('id', 'smo182205');
smo182205.setFont('times', 12, 'normal');
smo182205.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo182204.addModifier(smo182205);
smo182205.addClass('lyric lyric-0');
smo182228v0ar.push(smo182204);
const smo182206 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo182206'] = smo182206;
smo182206.setAttribute('id', 'smo182206');
const smo182207 = new VF.Annotation('bun');
smo182207.setAttribute('id', 'smo182207');
smo182207.setFont('times', 12, 'normal');
smo182207.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo182206.addModifier(smo182207);
smo182207.addClass('lyric lyric-0');
smo182228v0ar.push(smo182206);
const smo182208 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo182208'] = smo182208;
smo182208.setAttribute('id', 'smo182208');
const smo182209 = new VF.Annotation('Man');
smo182209.setAttribute('id', 'smo182209');
smo182209.setFont('times', 12, 'normal');
smo182209.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo182208.addModifier(smo182209);
smo182209.addClass('lyric lyric-0 lyric-hyphen');
smo182228v0ar.push(smo182208);
const smo182210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo182210'] = smo182210;
smo182210.setAttribute('id', 'smo182210');
smo182228v0ar.push(smo182210);
const smo182211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo182211'] = smo182211;
smo182211.setAttribute('id', 'smo182211');
const smo182212 = new VF.Annotation('ding');
smo182212.setAttribute('id', 'smo182212');
smo182212.setFont('times', 12, 'normal');
smo182212.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo182211.addModifier(smo182212);
smo182212.addClass('lyric lyric-0 lyric-hyphen');
smo182228v0ar.push(smo182211);
smo182228v0.addTickables(smo182228v0ar)
fmtsmo18222866.joinVoices([smo182228v0]);
const fmtsmo18533566 = new VF.Formatter();
//
// voices and notes for stave 5 66
const smo185335v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo185335v0ar = [];
const smo185307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo185307'] = smo185307;
smo185307.setAttribute('id', 'smo185307');
const smo185308 = new VF.Annotation('bun');
smo185308.setAttribute('id', 'smo185308');
smo185308.setFont('times', 12, 'normal');
smo185308.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo185307.addModifier(smo185308);
smo185308.addClass('lyric lyric-0');
smo185335v0ar.push(smo185307);
const smo185309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo185309'] = smo185309;
smo185309.setAttribute('id', 'smo185309');
const smo185310 = new VF.Annotation('yi');
smo185310.setAttribute('id', 'smo185310');
smo185310.setFont('times', 12, 'normal');
smo185310.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo185309.addModifier(smo185310);
smo185310.addClass('lyric lyric-0 lyric-hyphen');
smo185335v0ar.push(smo185309);
const smo185311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo185311'] = smo185311;
smo185311.setAttribute('id', 'smo185311');
const smo185312 = new VF.Annotation('ri');
smo185312.setAttribute('id', 'smo185312');
smo185312.setFont('times', 12, 'normal');
smo185312.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo185311.addModifier(smo185312);
smo185312.addClass('lyric lyric-0');
smo185335v0ar.push(smo185311);
const smo185313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo185313'] = smo185313;
smo185313.setAttribute('id', 'smo185313');
const smo185314 = new VF.Annotation('bun');
smo185314.setAttribute('id', 'smo185314');
smo185314.setFont('times', 12, 'normal');
smo185314.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo185313.addModifier(smo185314);
smo185314.addClass('lyric lyric-0');
smo185335v0ar.push(smo185313);
const smo185315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo185315'] = smo185315;
smo185315.setAttribute('id', 'smo185315');
const smo185316 = new VF.Annotation('Man');
smo185316.setAttribute('id', 'smo185316');
smo185316.setFont('times', 12, 'normal');
smo185316.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo185315.addModifier(smo185316);
smo185316.addClass('lyric lyric-0 lyric-hyphen');
smo185335v0ar.push(smo185315);
const smo185317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo185317'] = smo185317;
smo185317.setAttribute('id', 'smo185317');
smo185335v0ar.push(smo185317);
const smo185318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo185318'] = smo185318;
smo185318.setAttribute('id', 'smo185318');
const smo185319 = new VF.Annotation('ding');
smo185319.setAttribute('id', 'smo185319');
smo185319.setFont('times', 12, 'normal');
smo185319.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo185318.addModifier(smo185319);
smo185319.addClass('lyric lyric-0 lyric-hyphen');
smo185335v0ar.push(smo185318);
smo185335v0.addTickables(smo185335v0ar)
fmtsmo18533566.joinVoices([smo185335v0]);
const fmtsmo18844766 = new VF.Formatter();
//
// voices and notes for stave 6 66
const smo188447v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo188447v0ar = [];
const smo188419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo188419'] = smo188419;
smo188419.setAttribute('id', 'smo188419');
const smo188420 = new VF.Annotation('bun');
smo188420.setAttribute('id', 'smo188420');
smo188420.setFont('times', 12, 'normal');
smo188420.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo188419.addModifier(smo188420);
smo188420.addClass('lyric lyric-0');
smo188447v0ar.push(smo188419);
const smo188421 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo188421'] = smo188421;
smo188421.setAttribute('id', 'smo188421');
const smo188422 = new VF.Annotation('yi');
smo188422.setAttribute('id', 'smo188422');
smo188422.setFont('times', 12, 'normal');
smo188422.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo188421.addModifier(smo188422);
smo188422.addClass('lyric lyric-0 lyric-hyphen');
smo188447v0ar.push(smo188421);
const smo188423 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo188423'] = smo188423;
smo188423.setAttribute('id', 'smo188423');
const smo188424 = new VF.Annotation('ri');
smo188424.setAttribute('id', 'smo188424');
smo188424.setFont('times', 12, 'normal');
smo188424.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo188423.addModifier(smo188424);
smo188424.addClass('lyric lyric-0');
smo188447v0ar.push(smo188423);
const smo188425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo188425'] = smo188425;
smo188425.setAttribute('id', 'smo188425');
const smo188426 = new VF.Annotation('bun');
smo188426.setAttribute('id', 'smo188426');
smo188426.setFont('times', 12, 'normal');
smo188426.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo188425.addModifier(smo188426);
smo188426.addClass('lyric lyric-0');
smo188447v0ar.push(smo188425);
const smo188427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo188427'] = smo188427;
smo188427.setAttribute('id', 'smo188427');
const smo188428 = new VF.Annotation('Man');
smo188428.setAttribute('id', 'smo188428');
smo188428.setFont('times', 12, 'normal');
smo188428.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo188427.addModifier(smo188428);
smo188428.addClass('lyric lyric-0 lyric-hyphen');
smo188447v0ar.push(smo188427);
const smo188429 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo188429'] = smo188429;
smo188429.setAttribute('id', 'smo188429');
smo188447v0ar.push(smo188429);
const smo188430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo188430'] = smo188430;
smo188430.setAttribute('id', 'smo188430');
const smo188431 = new VF.Annotation('ding');
smo188431.setAttribute('id', 'smo188431');
smo188431.setFont('times', 12, 'normal');
smo188431.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo188430.addModifier(smo188431);
smo188431.addClass('lyric lyric-0 lyric-hyphen');
smo188447v0ar.push(smo188430);
smo188447v0.addTickables(smo188447v0ar)
fmtsmo18844766.joinVoices([smo188447v0]);
const fmtsmo19155666 = new VF.Formatter();
//
// voices and notes for stave 7 66
const smo191556v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo191556v0ar = [];
const smo191528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo191528'] = smo191528;
smo191528.setAttribute('id', 'smo191528');
const smo191529 = new VF.Annotation('bun');
smo191529.setAttribute('id', 'smo191529');
smo191529.setFont('times', 12, 'normal');
smo191529.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo191528.addModifier(smo191529);
smo191529.addClass('lyric lyric-0');
smo191556v0ar.push(smo191528);
const smo191530 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo191530'] = smo191530;
smo191530.setAttribute('id', 'smo191530');
const smo191531 = new VF.Annotation('yi');
smo191531.setAttribute('id', 'smo191531');
smo191531.setFont('times', 12, 'normal');
smo191531.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo191530.addModifier(smo191531);
smo191531.addClass('lyric lyric-0 lyric-hyphen');
smo191556v0ar.push(smo191530);
const smo191532 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo191532'] = smo191532;
smo191532.setAttribute('id', 'smo191532');
const smo191533 = new VF.Annotation('ri');
smo191533.setAttribute('id', 'smo191533');
smo191533.setFont('times', 12, 'normal');
smo191533.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo191532.addModifier(smo191533);
smo191533.addClass('lyric lyric-0');
smo191556v0ar.push(smo191532);
const smo191534 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo191534'] = smo191534;
smo191534.setAttribute('id', 'smo191534');
const smo191535 = new VF.Annotation('bun');
smo191535.setAttribute('id', 'smo191535');
smo191535.setFont('times', 12, 'normal');
smo191535.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo191534.addModifier(smo191535);
smo191535.addClass('lyric lyric-0');
smo191556v0ar.push(smo191534);
const smo191536 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo191536'] = smo191536;
smo191536.setAttribute('id', 'smo191536');
const smo191537 = new VF.Annotation('Man');
smo191537.setAttribute('id', 'smo191537');
smo191537.setFont('times', 12, 'normal');
smo191537.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo191536.addModifier(smo191537);
smo191537.addClass('lyric lyric-0 lyric-hyphen');
smo191556v0ar.push(smo191536);
const smo191538 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo191538'] = smo191538;
smo191538.setAttribute('id', 'smo191538');
smo191556v0ar.push(smo191538);
const smo191539 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo191539'] = smo191539;
smo191539.setAttribute('id', 'smo191539');
const smo191540 = new VF.Annotation('ding');
smo191540.setAttribute('id', 'smo191540');
smo191540.setFont('times', 12, 'normal');
smo191540.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo191539.addModifier(smo191540);
smo191540.addClass('lyric lyric-0 lyric-hyphen');
smo191556v0ar.push(smo191539);
smo191556v0.addTickables(smo191556v0ar)
fmtsmo19155666.joinVoices([smo191556v0]);
const fmtsmo19464266 = new VF.Formatter();
//
// voices and notes for stave 8 66
const smo194642v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo194642v0ar = [];
const smo194614 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo194614'] = smo194614;
smo194614.setAttribute('id', 'smo194614');
const smo194615 = new VF.Annotation('bun');
smo194615.setAttribute('id', 'smo194615');
smo194615.setFont('times', 12, 'normal');
smo194615.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo194614.addModifier(smo194615);
smo194615.addClass('lyric lyric-0');
smo194642v0ar.push(smo194614);
const smo194616 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo194616'] = smo194616;
smo194616.setAttribute('id', 'smo194616');
const smo194617 = new VF.Annotation('yi');
smo194617.setAttribute('id', 'smo194617');
smo194617.setFont('times', 12, 'normal');
smo194617.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo194616.addModifier(smo194617);
smo194617.addClass('lyric lyric-0 lyric-hyphen');
smo194642v0ar.push(smo194616);
const smo194618 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo194618'] = smo194618;
smo194618.setAttribute('id', 'smo194618');
const smo194619 = new VF.Annotation('ri');
smo194619.setAttribute('id', 'smo194619');
smo194619.setFont('times', 12, 'normal');
smo194619.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo194618.addModifier(smo194619);
smo194619.addClass('lyric lyric-0');
smo194642v0ar.push(smo194618);
const smo194620 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo194620'] = smo194620;
smo194620.setAttribute('id', 'smo194620');
const smo194621 = new VF.Annotation('bun');
smo194621.setAttribute('id', 'smo194621');
smo194621.setFont('times', 12, 'normal');
smo194621.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo194620.addModifier(smo194621);
smo194621.addClass('lyric lyric-0');
smo194642v0ar.push(smo194620);
const smo194622 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo194622'] = smo194622;
smo194622.setAttribute('id', 'smo194622');
const smo194623 = new VF.Annotation('Man');
smo194623.setAttribute('id', 'smo194623');
smo194623.setFont('times', 12, 'normal');
smo194623.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo194622.addModifier(smo194623);
smo194623.addClass('lyric lyric-0 lyric-hyphen');
smo194642v0ar.push(smo194622);
const smo194624 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo194624'] = smo194624;
smo194624.setAttribute('id', 'smo194624');
smo194642v0ar.push(smo194624);
const smo194625 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo194625'] = smo194625;
smo194625.setAttribute('id', 'smo194625');
const smo194626 = new VF.Annotation('ding');
smo194626.setAttribute('id', 'smo194626');
smo194626.setFont('times', 12, 'normal');
smo194626.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo194625.addModifier(smo194626);
smo194626.addClass('lyric lyric-0 lyric-hyphen');
smo194642v0ar.push(smo194625);
smo194642v0.addTickables(smo194642v0ar)
fmtsmo19464266.joinVoices([smo194642v0]);
const fmtsmo19773166 = new VF.Formatter();
//
// voices and notes for stave 9 66
const smo197731v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo197731v0ar = [];
const smo197703 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo197703'] = smo197703;
smo197703.setAttribute('id', 'smo197703');
const smo197704 = new VF.Annotation('bun');
smo197704.setAttribute('id', 'smo197704');
smo197704.setFont('times', 12, 'normal');
smo197704.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo197703.addModifier(smo197704);
smo197704.addClass('lyric lyric-0');
smo197731v0ar.push(smo197703);
const smo197705 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo197705'] = smo197705;
smo197705.setAttribute('id', 'smo197705');
const smo197706 = new VF.Annotation('yi');
smo197706.setAttribute('id', 'smo197706');
smo197706.setFont('times', 12, 'normal');
smo197706.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo197705.addModifier(smo197706);
smo197706.addClass('lyric lyric-0 lyric-hyphen');
smo197731v0ar.push(smo197705);
const smo197707 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo197707'] = smo197707;
smo197707.setAttribute('id', 'smo197707');
const smo197708 = new VF.Annotation('ri');
smo197708.setAttribute('id', 'smo197708');
smo197708.setFont('times', 12, 'normal');
smo197708.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo197707.addModifier(smo197708);
smo197708.addClass('lyric lyric-0');
smo197731v0ar.push(smo197707);
const smo197709 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo197709'] = smo197709;
smo197709.setAttribute('id', 'smo197709');
const smo197710 = new VF.Annotation('bun');
smo197710.setAttribute('id', 'smo197710');
smo197710.setFont('times', 12, 'normal');
smo197710.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo197709.addModifier(smo197710);
smo197710.addClass('lyric lyric-0');
smo197731v0ar.push(smo197709);
const smo197711 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo197711'] = smo197711;
smo197711.setAttribute('id', 'smo197711');
const smo197712 = new VF.Annotation('Man');
smo197712.setAttribute('id', 'smo197712');
smo197712.setFont('times', 12, 'normal');
smo197712.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo197711.addModifier(smo197712);
smo197712.addClass('lyric lyric-0 lyric-hyphen');
smo197731v0ar.push(smo197711);
const smo197713 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo197713'] = smo197713;
smo197713.setAttribute('id', 'smo197713');
smo197731v0ar.push(smo197713);
const smo197714 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo197714'] = smo197714;
smo197714.setAttribute('id', 'smo197714');
const smo197715 = new VF.Annotation('ding');
smo197715.setAttribute('id', 'smo197715');
smo197715.setFont('times', 12, 'normal');
smo197715.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo197714.addModifier(smo197715);
smo197715.addClass('lyric lyric-0 lyric-hyphen');
smo197731v0ar.push(smo197714);
smo197731v0.addTickables(smo197731v0ar)
fmtsmo19773166.joinVoices([smo197731v0]);
const fmtsmo20077166 = new VF.Formatter();
//
// voices and notes for stave 10 66
const smo200771v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo200771v0ar = [];
const smo200743 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo200743'] = smo200743;
smo200743.setAttribute('id', 'smo200743');
const smo200744 = new VF.Annotation('bun');
smo200744.setAttribute('id', 'smo200744');
smo200744.setFont('times', 12, 'normal');
smo200744.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo200743.addModifier(smo200744);
smo200744.addClass('lyric lyric-0');
smo200771v0ar.push(smo200743);
const smo200745 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo200745'] = smo200745;
smo200745.setAttribute('id', 'smo200745');
const smo200746 = new VF.Annotation('yi');
smo200746.setAttribute('id', 'smo200746');
smo200746.setFont('times', 12, 'normal');
smo200746.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo200745.addModifier(smo200746);
smo200746.addClass('lyric lyric-0 lyric-hyphen');
smo200771v0ar.push(smo200745);
const smo200747 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo200747'] = smo200747;
smo200747.setAttribute('id', 'smo200747');
const smo200748 = new VF.Annotation('ri');
smo200748.setAttribute('id', 'smo200748');
smo200748.setFont('times', 12, 'normal');
smo200748.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo200747.addModifier(smo200748);
smo200748.addClass('lyric lyric-0');
smo200771v0ar.push(smo200747);
const smo200749 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo200749'] = smo200749;
smo200749.setAttribute('id', 'smo200749');
const smo200750 = new VF.Annotation('bun');
smo200750.setAttribute('id', 'smo200750');
smo200750.setFont('times', 12, 'normal');
smo200750.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo200749.addModifier(smo200750);
smo200750.addClass('lyric lyric-0');
smo200771v0ar.push(smo200749);
const smo200751 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo200751'] = smo200751;
smo200751.setAttribute('id', 'smo200751');
const smo200752 = new VF.Annotation('Man');
smo200752.setAttribute('id', 'smo200752');
smo200752.setFont('times', 12, 'normal');
smo200752.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo200751.addModifier(smo200752);
smo200752.addClass('lyric lyric-0 lyric-hyphen');
smo200771v0ar.push(smo200751);
const smo200753 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo200753'] = smo200753;
smo200753.setAttribute('id', 'smo200753');
smo200771v0ar.push(smo200753);
const smo200754 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo200754'] = smo200754;
smo200754.setAttribute('id', 'smo200754');
const smo200755 = new VF.Annotation('ding');
smo200755.setAttribute('id', 'smo200755');
smo200755.setFont('times', 12, 'normal');
smo200755.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo200754.addModifier(smo200755);
smo200755.addClass('lyric lyric-0 lyric-hyphen');
smo200771v0ar.push(smo200754);
smo200771v0.addTickables(smo200771v0ar)
fmtsmo20077166.joinVoices([smo200771v0]);
const fmtsmo20382566 = new VF.Formatter();
//
// voices and notes for stave 11 66
const smo203825v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo203825v0ar = [];
const smo203797 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo203797'] = smo203797;
smo203797.setAttribute('id', 'smo203797');
const smo203798 = new VF.Annotation('bun');
smo203798.setAttribute('id', 'smo203798');
smo203798.setFont('times', 12, 'normal');
smo203798.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo203797.addModifier(smo203798);
smo203798.addClass('lyric lyric-0');
smo203825v0ar.push(smo203797);
const smo203799 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo203799'] = smo203799;
smo203799.setAttribute('id', 'smo203799');
const smo203800 = new VF.Annotation('yi');
smo203800.setAttribute('id', 'smo203800');
smo203800.setFont('times', 12, 'normal');
smo203800.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo203799.addModifier(smo203800);
smo203800.addClass('lyric lyric-0 lyric-hyphen');
smo203825v0ar.push(smo203799);
const smo203801 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo203801'] = smo203801;
smo203801.setAttribute('id', 'smo203801');
const smo203802 = new VF.Annotation('ri');
smo203802.setAttribute('id', 'smo203802');
smo203802.setFont('times', 12, 'normal');
smo203802.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo203801.addModifier(smo203802);
smo203802.addClass('lyric lyric-0');
smo203825v0ar.push(smo203801);
const smo203803 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo203803'] = smo203803;
smo203803.setAttribute('id', 'smo203803');
const smo203804 = new VF.Annotation('bun');
smo203804.setAttribute('id', 'smo203804');
smo203804.setFont('times', 12, 'normal');
smo203804.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo203803.addModifier(smo203804);
smo203804.addClass('lyric lyric-0');
smo203825v0ar.push(smo203803);
const smo203805 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo203805'] = smo203805;
smo203805.setAttribute('id', 'smo203805');
const smo203806 = new VF.Annotation('Man');
smo203806.setAttribute('id', 'smo203806');
smo203806.setFont('times', 12, 'normal');
smo203806.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo203805.addModifier(smo203806);
smo203806.addClass('lyric lyric-0 lyric-hyphen');
smo203825v0ar.push(smo203805);
const smo203807 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo203807'] = smo203807;
smo203807.setAttribute('id', 'smo203807');
smo203825v0ar.push(smo203807);
const smo203808 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo203808'] = smo203808;
smo203808.setAttribute('id', 'smo203808');
const smo203809 = new VF.Annotation('ding');
smo203809.setAttribute('id', 'smo203809');
smo203809.setFont('times', 12, 'normal');
smo203809.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo203808.addModifier(smo203809);
smo203809.addClass('lyric lyric-0 lyric-hyphen');
smo203825v0ar.push(smo203808);
smo203825v0.addTickables(smo203825v0ar)
fmtsmo20382566.joinVoices([smo203825v0]);
const fmtsmo20686866 = new VF.Formatter();
//
// voices and notes for stave 12 66
const smo206868v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo206868v0ar = [];
const smo206840 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo206840'] = smo206840;
smo206840.setAttribute('id', 'smo206840');
const smo206841 = new VF.Annotation('bun');
smo206841.setAttribute('id', 'smo206841');
smo206841.setFont('times', 12, 'normal');
smo206841.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo206840.addModifier(smo206841);
smo206841.addClass('lyric lyric-0');
smo206868v0ar.push(smo206840);
const smo206842 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo206842'] = smo206842;
smo206842.setAttribute('id', 'smo206842');
const smo206843 = new VF.Annotation('yi');
smo206843.setAttribute('id', 'smo206843');
smo206843.setFont('times', 12, 'normal');
smo206843.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo206842.addModifier(smo206843);
smo206843.addClass('lyric lyric-0 lyric-hyphen');
smo206868v0ar.push(smo206842);
const smo206844 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo206844'] = smo206844;
smo206844.setAttribute('id', 'smo206844');
const smo206845 = new VF.Annotation('ri');
smo206845.setAttribute('id', 'smo206845');
smo206845.setFont('times', 12, 'normal');
smo206845.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo206844.addModifier(smo206845);
smo206845.addClass('lyric lyric-0');
smo206868v0ar.push(smo206844);
const smo206846 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo206846'] = smo206846;
smo206846.setAttribute('id', 'smo206846');
const smo206847 = new VF.Annotation('bun');
smo206847.setAttribute('id', 'smo206847');
smo206847.setFont('times', 12, 'normal');
smo206847.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo206846.addModifier(smo206847);
smo206847.addClass('lyric lyric-0');
smo206868v0ar.push(smo206846);
const smo206848 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo206848'] = smo206848;
smo206848.setAttribute('id', 'smo206848');
const smo206849 = new VF.Annotation('Man');
smo206849.setAttribute('id', 'smo206849');
smo206849.setFont('times', 12, 'normal');
smo206849.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo206848.addModifier(smo206849);
smo206849.addClass('lyric lyric-0 lyric-hyphen');
smo206868v0ar.push(smo206848);
const smo206850 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo206850'] = smo206850;
smo206850.setAttribute('id', 'smo206850');
smo206868v0ar.push(smo206850);
const smo206851 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo206851'] = smo206851;
smo206851.setAttribute('id', 'smo206851');
const smo206852 = new VF.Annotation('ding');
smo206852.setAttribute('id', 'smo206852');
smo206852.setFont('times', 12, 'normal');
smo206852.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo206851.addModifier(smo206852);
smo206852.addClass('lyric lyric-0 lyric-hyphen');
smo206868v0ar.push(smo206851);
smo206868v0.addTickables(smo206868v0ar)
fmtsmo20686866.joinVoices([smo206868v0]);
const fmtsmo21006766 = new VF.Formatter();
//
// voices and notes for stave 13 66
const smo210067v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo210067v0ar = [];
const smo210046 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
noteHash['smo210046'] = smo210046;
smo210046.setAttribute('id', 'smo210046');
const smo2100460acc = new VF.Accidental('#');
smo210046.addModifier(smo2100460acc, 0);
smo210046.addModifier(new VF.Dot(), 0);
smo210046.addModifier(new VF.Dot(), 1);
smo210046.addModifier(new VF.Dot(), 2);
smo210067v0ar.push(smo210046);
const smo210047 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo210047'] = smo210047;
smo210047.setAttribute('id', 'smo210047');
smo210067v0ar.push(smo210047);
const smo210048 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo210048'] = smo210048;
smo210048.setAttribute('id', 'smo210048');
smo210067v0ar.push(smo210048);
const smo210049 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
noteHash['smo210049'] = smo210049;
smo210049.setAttribute('id', 'smo210049');
const smo2100492acc = new VF.Accidental('b');
smo210049.addModifier(smo2100492acc, 2);
smo210067v0ar.push(smo210049);
const smo210050 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
noteHash['smo210050'] = smo210050;
smo210050.setAttribute('id', 'smo210050');
smo210067v0ar.push(smo210050);
const smo210051 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
noteHash['smo210051'] = smo210051;
smo210051.setAttribute('id', 'smo210051');
smo210067v0ar.push(smo210051);
smo210067v0.addTickables(smo210067v0ar)
fmtsmo21006766.joinVoices([smo210067v0]);
const fmtsmo21328066 = new VF.Formatter();
//
// voices and notes for stave 14 66
const smo213280v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo213280v0ar = [];
const smo213259 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n","cn/5/n"]}'))
noteHash['smo213259'] = smo213259;
smo213259.setAttribute('id', 'smo213259');
const smo2132590acc = new VF.Accidental('#');
smo213259.addModifier(smo2132590acc, 0);
smo213259.addModifier(new VF.Dot(), 0);
smo213259.addModifier(new VF.Dot(), 1);
smo213259.addModifier(new VF.Dot(), 2);
smo213280v0ar.push(smo213259);
const smo213260 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo213260'] = smo213260;
smo213260.setAttribute('id', 'smo213260');
smo213280v0ar.push(smo213260);
const smo213261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo213261'] = smo213261;
smo213261.setAttribute('id', 'smo213261');
smo213280v0ar.push(smo213261);
const smo213262 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
noteHash['smo213262'] = smo213262;
smo213262.setAttribute('id', 'smo213262');
const smo2132622acc = new VF.Accidental('b');
smo213262.addModifier(smo2132622acc, 2);
smo213280v0ar.push(smo213262);
const smo213263 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","eb/5/n"]}'))
noteHash['smo213263'] = smo213263;
smo213263.setAttribute('id', 'smo213263');
smo213280v0ar.push(smo213263);
const smo213264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
noteHash['smo213264'] = smo213264;
smo213264.setAttribute('id', 'smo213264');
smo213280v0ar.push(smo213264);
smo213280v0.addTickables(smo213280v0ar)
fmtsmo21328066.joinVoices([smo213280v0]);
const fmtsmo21647566 = new VF.Formatter();
//
// voices and notes for stave 15 66
const smo216475v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo216475v0ar = [];
const smo216454 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo216454'] = smo216454;
smo216454.setAttribute('id', 'smo216454');
const smo2164540acc = new VF.Accidental('#');
smo216454.addModifier(smo2164540acc, 0);
smo216454.addModifier(new VF.Dot(), 0);
smo216475v0ar.push(smo216454);
const smo216455 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo216455'] = smo216455;
smo216455.setAttribute('id', 'smo216455');
smo216475v0ar.push(smo216455);
const smo216456 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo216456'] = smo216456;
smo216456.setAttribute('id', 'smo216456');
smo216475v0ar.push(smo216456);
const smo216457 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo216457'] = smo216457;
smo216457.setAttribute('id', 'smo216457');
smo216475v0ar.push(smo216457);
const smo216458 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo216458'] = smo216458;
smo216458.setAttribute('id', 'smo216458');
smo216475v0ar.push(smo216458);
const smo216459 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo216459'] = smo216459;
smo216459.setAttribute('id', 'smo216459');
smo216475v0ar.push(smo216459);
smo216475v0.addTickables(smo216475v0ar)
fmtsmo21647566.joinVoices([smo216475v0]);
const fmtsmo21959066 = new VF.Formatter();
//
// voices and notes for stave 16 66
const smo219590v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo219590v0ar = [];
const smo219571 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo219571'] = smo219571;
smo219571.setAttribute('id', 'smo219571');
smo219571.addModifier(new VF.Dot(), 0);
smo219590v0ar.push(smo219571);
const smo219572 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n"]}'))
noteHash['smo219572'] = smo219572;
smo219572.setAttribute('id', 'smo219572');
const smo2195720acc = new VF.Accidental('b');
smo219572.addModifier(smo2195720acc, 0);
smo219590v0ar.push(smo219572);
const smo219573 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n"]}'))
noteHash['smo219573'] = smo219573;
smo219573.setAttribute('id', 'smo219573');
smo219590v0ar.push(smo219573);
const smo219574 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo219574'] = smo219574;
smo219574.setAttribute('id', 'smo219574');
smo219590v0ar.push(smo219574);
smo219590v0.addTickables(smo219590v0ar)
fmtsmo21959066.joinVoices([smo219590v0]);
const fmtsmo22278966 = new VF.Formatter();
//
// voices and notes for stave 17 66
const smo222789v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo222789v0ar = [];
const smo222760 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo222760'] = smo222760;
smo222760.setAttribute('id', 'smo222760');
const smo2227600acc = new VF.Accidental('n');
smo222760.addModifier(smo2227600acc, 0);
const smo222761 = new VF.Annotation('bun');
smo222761.setAttribute('id', 'smo222761');
smo222761.setFont('times', 12, 'normal');
smo222761.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo222760.addModifier(smo222761);
smo222761.addClass('lyric lyric-0');
smo222789v0ar.push(smo222760);
const smo222762 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo222762'] = smo222762;
smo222762.setAttribute('id', 'smo222762');
const smo222763 = new VF.Annotation('yi');
smo222763.setAttribute('id', 'smo222763');
smo222763.setFont('times', 12, 'normal');
smo222763.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo222762.addModifier(smo222763);
smo222763.addClass('lyric lyric-0 lyric-hyphen');
smo222789v0ar.push(smo222762);
const smo222764 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo222764'] = smo222764;
smo222764.setAttribute('id', 'smo222764');
const smo222765 = new VF.Annotation('ri');
smo222765.setAttribute('id', 'smo222765');
smo222765.setFont('times', 12, 'normal');
smo222765.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo222764.addModifier(smo222765);
smo222765.addClass('lyric lyric-0');
smo222789v0ar.push(smo222764);
const smo222766 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo222766'] = smo222766;
smo222766.setAttribute('id', 'smo222766');
const smo222767 = new VF.Annotation('bun');
smo222767.setAttribute('id', 'smo222767');
smo222767.setFont('times', 12, 'normal');
smo222767.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo222766.addModifier(smo222767);
smo222767.addClass('lyric lyric-0');
smo222789v0ar.push(smo222766);
const smo222768 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo222768'] = smo222768;
smo222768.setAttribute('id', 'smo222768');
const smo222769 = new VF.Annotation('Man');
smo222769.setAttribute('id', 'smo222769');
smo222769.setFont('times', 12, 'normal');
smo222769.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo222768.addModifier(smo222769);
smo222769.addClass('lyric lyric-0 lyric-hyphen');
smo222789v0ar.push(smo222768);
const smo222770 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo222770'] = smo222770;
smo222770.setAttribute('id', 'smo222770');
smo222789v0ar.push(smo222770);
const smo222771 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo222771'] = smo222771;
smo222771.setAttribute('id', 'smo222771');
const smo222772 = new VF.Annotation('ding');
smo222772.setAttribute('id', 'smo222772');
smo222772.setFont('times', 12, 'normal');
smo222772.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo222771.addModifier(smo222772);
smo222772.addClass('lyric lyric-0 lyric-hyphen');
smo222789v0ar.push(smo222771);
smo222789v0.addTickables(smo222789v0ar)
fmtsmo22278966.joinVoices([smo222789v0]);
const smo222789v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo222789v1ar = [];
const smo222773 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo222773'] = smo222773;
smo222773.setAttribute('id', 'smo222773');
smo222789v1ar.push(smo222773);
smo222789v1.addTickables(smo222789v1ar)
fmtsmo22278966.joinVoices([smo222789v1]);
// create beam groups and tuplets for format grp smo224512 before formatting
const dirsmo315953 = smo169930.getStemDirection();
smo169930.setStemDirection(dirsmo315953);
smo169932.setStemDirection(dirsmo315953);
const smo315953 = new VF.Beam([smo169930,smo169932]);
const dirsmo315954 = smo169934.getStemDirection();
smo169934.setStemDirection(dirsmo315954);
smo169936.setStemDirection(dirsmo315954);
smo169938.setStemDirection(dirsmo315954);
smo169939.setStemDirection(dirsmo315954);
const smo315954 = new VF.Beam([smo169934,smo169936,smo169938,smo169939]);
const dirsmo315957 = smo172924.getStemDirection();
smo172924.setStemDirection(dirsmo315957);
smo172926.setStemDirection(dirsmo315957);
const smo315957 = new VF.Beam([smo172924,smo172926]);
const dirsmo315958 = smo172928.getStemDirection();
smo172928.setStemDirection(dirsmo315958);
smo172930.setStemDirection(dirsmo315958);
smo172932.setStemDirection(dirsmo315958);
smo172933.setStemDirection(dirsmo315958);
const smo315958 = new VF.Beam([smo172928,smo172930,smo172932,smo172933]);
const dirsmo315961 = smo176067.getStemDirection();
smo176067.setStemDirection(dirsmo315961);
smo176069.setStemDirection(dirsmo315961);
const smo315961 = new VF.Beam([smo176067,smo176069]);
const dirsmo315962 = smo176071.getStemDirection();
smo176071.setStemDirection(dirsmo315962);
smo176073.setStemDirection(dirsmo315962);
smo176075.setStemDirection(dirsmo315962);
smo176076.setStemDirection(dirsmo315962);
const smo315962 = new VF.Beam([smo176071,smo176073,smo176075,smo176076]);
const dirsmo315965 = smo179183.getStemDirection();
smo179183.setStemDirection(dirsmo315965);
smo179185.setStemDirection(dirsmo315965);
const smo315965 = new VF.Beam([smo179183,smo179185]);
const dirsmo315966 = smo179187.getStemDirection();
smo179187.setStemDirection(dirsmo315966);
smo179189.setStemDirection(dirsmo315966);
smo179191.setStemDirection(dirsmo315966);
smo179192.setStemDirection(dirsmo315966);
const smo315966 = new VF.Beam([smo179187,smo179189,smo179191,smo179192]);
const dirsmo315969 = smo182202.getStemDirection();
smo182202.setStemDirection(dirsmo315969);
smo182204.setStemDirection(dirsmo315969);
const smo315969 = new VF.Beam([smo182202,smo182204]);
const dirsmo315970 = smo182206.getStemDirection();
smo182206.setStemDirection(dirsmo315970);
smo182208.setStemDirection(dirsmo315970);
smo182210.setStemDirection(dirsmo315970);
smo182211.setStemDirection(dirsmo315970);
const smo315970 = new VF.Beam([smo182206,smo182208,smo182210,smo182211]);
 
// formatting measures in staff group smo224512
fmtsmo16995666.format([smo169956v0,smo172950v0,smo176093v0,smo179209v0,smo182228v0], 311);
const stavesmo169956 = new VF.Stave(1110, 210, 325);
stavesmo169956.setAttribute('id', 'stavesmo169956');
stavesmo169956.setBegBarType(VF.Barline.type.NONE);
stavesmo169956.setContext(context);
stavesmo169956.draw();
smo169956v0.draw(context, stavesmo169956);
smo315953.setContext(context);
smo315953.draw();
smo315954.setContext(context);
smo315954.draw();
const stavesmo172950 = new VF.Stave(1110, 316, 325);
stavesmo172950.setAttribute('id', 'stavesmo172950');
stavesmo172950.setBegBarType(VF.Barline.type.NONE);
stavesmo172950.setContext(context);
stavesmo172950.draw();
smo172950v0.draw(context, stavesmo172950);
smo315957.setContext(context);
smo315957.draw();
smo315958.setContext(context);
smo315958.draw();
const stavesmo176093 = new VF.Stave(1110, 437, 325);
stavesmo176093.setAttribute('id', 'stavesmo176093');
stavesmo176093.setBegBarType(VF.Barline.type.NONE);
stavesmo176093.setContext(context);
stavesmo176093.draw();
smo176093v0.draw(context, stavesmo176093);
smo315961.setContext(context);
smo315961.draw();
smo315962.setContext(context);
smo315962.draw();
const stavesmo179209 = new VF.Stave(1110, 553, 325);
stavesmo179209.setAttribute('id', 'stavesmo179209');
stavesmo179209.setBegBarType(VF.Barline.type.NONE);
stavesmo179209.setContext(context);
stavesmo179209.draw();
smo179209v0.draw(context, stavesmo179209);
smo315965.setContext(context);
smo315965.draw();
smo315966.setContext(context);
smo315966.draw();
const stavesmo182228 = new VF.Stave(1110, 659, 325);
stavesmo182228.setAttribute('id', 'stavesmo182228');
stavesmo182228.setBegBarType(VF.Barline.type.NONE);
stavesmo182228.setContext(context);
stavesmo182228.draw();
smo182228v0.draw(context, stavesmo182228);
smo315969.setContext(context);
smo315969.draw();
smo315970.setContext(context);
smo315970.draw();
// create beam groups and tuplets for format grp smo224514 before formatting
const dirsmo315973 = smo185309.getStemDirection();
smo185309.setStemDirection(dirsmo315973);
smo185311.setStemDirection(dirsmo315973);
const smo315973 = new VF.Beam([smo185309,smo185311]);
const dirsmo315974 = smo185313.getStemDirection();
smo185313.setStemDirection(dirsmo315974);
smo185315.setStemDirection(dirsmo315974);
smo185317.setStemDirection(dirsmo315974);
smo185318.setStemDirection(dirsmo315974);
const smo315974 = new VF.Beam([smo185313,smo185315,smo185317,smo185318]);
const dirsmo315977 = smo188421.getStemDirection();
smo188421.setStemDirection(dirsmo315977);
smo188423.setStemDirection(dirsmo315977);
const smo315977 = new VF.Beam([smo188421,smo188423]);
const dirsmo315978 = smo188425.getStemDirection();
smo188425.setStemDirection(dirsmo315978);
smo188427.setStemDirection(dirsmo315978);
smo188429.setStemDirection(dirsmo315978);
smo188430.setStemDirection(dirsmo315978);
const smo315978 = new VF.Beam([smo188425,smo188427,smo188429,smo188430]);
const dirsmo315981 = smo191530.getStemDirection();
smo191530.setStemDirection(dirsmo315981);
smo191532.setStemDirection(dirsmo315981);
const smo315981 = new VF.Beam([smo191530,smo191532]);
const dirsmo315982 = smo191534.getStemDirection();
smo191534.setStemDirection(dirsmo315982);
smo191536.setStemDirection(dirsmo315982);
smo191538.setStemDirection(dirsmo315982);
smo191539.setStemDirection(dirsmo315982);
const smo315982 = new VF.Beam([smo191534,smo191536,smo191538,smo191539]);
const dirsmo315985 = smo194616.getStemDirection();
smo194616.setStemDirection(dirsmo315985);
smo194618.setStemDirection(dirsmo315985);
const smo315985 = new VF.Beam([smo194616,smo194618]);
const dirsmo315986 = smo194620.getStemDirection();
smo194620.setStemDirection(dirsmo315986);
smo194622.setStemDirection(dirsmo315986);
smo194624.setStemDirection(dirsmo315986);
smo194625.setStemDirection(dirsmo315986);
const smo315986 = new VF.Beam([smo194620,smo194622,smo194624,smo194625]);
 
// formatting measures in staff group smo224514
fmtsmo18533566.format([smo185335v0,smo188447v0,smo191556v0,smo194642v0], 311);
const stavesmo185335 = new VF.Stave(1110, 780, 325);
stavesmo185335.setAttribute('id', 'stavesmo185335');
stavesmo185335.setBegBarType(VF.Barline.type.NONE);
stavesmo185335.setContext(context);
stavesmo185335.draw();
smo185335v0.draw(context, stavesmo185335);
smo315973.setContext(context);
smo315973.draw();
smo315974.setContext(context);
smo315974.draw();
const stavesmo188447 = new VF.Stave(1110, 896, 325);
stavesmo188447.setAttribute('id', 'stavesmo188447');
stavesmo188447.setBegBarType(VF.Barline.type.NONE);
stavesmo188447.setContext(context);
stavesmo188447.draw();
smo188447v0.draw(context, stavesmo188447);
smo315977.setContext(context);
smo315977.draw();
smo315978.setContext(context);
smo315978.draw();
const stavesmo191556 = new VF.Stave(1110, 1012, 325);
stavesmo191556.setAttribute('id', 'stavesmo191556');
stavesmo191556.setBegBarType(VF.Barline.type.NONE);
stavesmo191556.setContext(context);
stavesmo191556.draw();
smo191556v0.draw(context, stavesmo191556);
smo315981.setContext(context);
smo315981.draw();
smo315982.setContext(context);
smo315982.draw();
const stavesmo194642 = new VF.Stave(1110, 1128, 325);
stavesmo194642.setAttribute('id', 'stavesmo194642');
stavesmo194642.setBegBarType(VF.Barline.type.NONE);
stavesmo194642.setContext(context);
stavesmo194642.draw();
smo194642v0.draw(context, stavesmo194642);
smo315985.setContext(context);
smo315985.draw();
smo315986.setContext(context);
smo315986.draw();
// create beam groups and tuplets for format grp smo224516 before formatting
const dirsmo315989 = smo197705.getStemDirection();
smo197705.setStemDirection(dirsmo315989);
smo197707.setStemDirection(dirsmo315989);
const smo315989 = new VF.Beam([smo197705,smo197707]);
const dirsmo315990 = smo197709.getStemDirection();
smo197709.setStemDirection(dirsmo315990);
smo197711.setStemDirection(dirsmo315990);
smo197713.setStemDirection(dirsmo315990);
smo197714.setStemDirection(dirsmo315990);
const smo315990 = new VF.Beam([smo197709,smo197711,smo197713,smo197714]);
const dirsmo315993 = smo200745.getStemDirection();
smo200745.setStemDirection(dirsmo315993);
smo200747.setStemDirection(dirsmo315993);
const smo315993 = new VF.Beam([smo200745,smo200747]);
const dirsmo315994 = smo200749.getStemDirection();
smo200749.setStemDirection(dirsmo315994);
smo200751.setStemDirection(dirsmo315994);
smo200753.setStemDirection(dirsmo315994);
smo200754.setStemDirection(dirsmo315994);
const smo315994 = new VF.Beam([smo200749,smo200751,smo200753,smo200754]);
const dirsmo315997 = smo203799.getStemDirection();
smo203799.setStemDirection(dirsmo315997);
smo203801.setStemDirection(dirsmo315997);
const smo315997 = new VF.Beam([smo203799,smo203801]);
const dirsmo315998 = smo203803.getStemDirection();
smo203803.setStemDirection(dirsmo315998);
smo203805.setStemDirection(dirsmo315998);
smo203807.setStemDirection(dirsmo315998);
smo203808.setStemDirection(dirsmo315998);
const smo315998 = new VF.Beam([smo203803,smo203805,smo203807,smo203808]);
const dirsmo316001 = smo206842.getStemDirection();
smo206842.setStemDirection(dirsmo316001);
smo206844.setStemDirection(dirsmo316001);
const smo316001 = new VF.Beam([smo206842,smo206844]);
const dirsmo316002 = smo206846.getStemDirection();
smo206846.setStemDirection(dirsmo316002);
smo206848.setStemDirection(dirsmo316002);
smo206850.setStemDirection(dirsmo316002);
smo206851.setStemDirection(dirsmo316002);
const smo316002 = new VF.Beam([smo206846,smo206848,smo206850,smo206851]);
 
// formatting measures in staff group smo224516
fmtsmo19773166.format([smo197731v0,smo200771v0,smo203825v0,smo206868v0], 311);
const stavesmo197731 = new VF.Stave(1110, 1264, 325);
stavesmo197731.setAttribute('id', 'stavesmo197731');
stavesmo197731.setBegBarType(VF.Barline.type.NONE);
stavesmo197731.setContext(context);
stavesmo197731.draw();
smo197731v0.draw(context, stavesmo197731);
smo315989.setContext(context);
smo315989.draw();
smo315990.setContext(context);
smo315990.draw();
const stavesmo200771 = new VF.Stave(1110, 1400, 325);
stavesmo200771.setAttribute('id', 'stavesmo200771');
stavesmo200771.setBegBarType(VF.Barline.type.NONE);
stavesmo200771.setContext(context);
stavesmo200771.draw();
smo200771v0.draw(context, stavesmo200771);
smo315993.setContext(context);
smo315993.draw();
smo315994.setContext(context);
smo315994.draw();
const stavesmo203825 = new VF.Stave(1110, 1536, 325);
stavesmo203825.setAttribute('id', 'stavesmo203825');
stavesmo203825.setBegBarType(VF.Barline.type.NONE);
stavesmo203825.setContext(context);
stavesmo203825.draw();
smo203825v0.draw(context, stavesmo203825);
smo315997.setContext(context);
smo315997.draw();
smo315998.setContext(context);
smo315998.draw();
const stavesmo206868 = new VF.Stave(1110, 1672, 325);
stavesmo206868.setAttribute('id', 'stavesmo206868');
stavesmo206868.setBegBarType(VF.Barline.type.NONE);
stavesmo206868.setContext(context);
stavesmo206868.draw();
smo206868v0.draw(context, stavesmo206868);
smo316001.setContext(context);
smo316001.draw();
smo316002.setContext(context);
smo316002.draw();
// create beam groups and tuplets for format grp smo211835 before formatting
const dirsmo316005 = smo210047.getStemDirection();
smo210047.setStemDirection(dirsmo316005);
smo210048.setStemDirection(dirsmo316005);
smo210049.setStemDirection(dirsmo316005);
smo210050.setStemDirection(dirsmo316005);
const smo316005 = new VF.Beam([smo210047,smo210048,smo210049,smo210050]);
 
// formatting measures in staff group smo211835
fmtsmo21006766.format([smo210067v0], 311);
const stavesmo210067 = new VF.Stave(1110, 1818, 325);
stavesmo210067.setAttribute('id', 'stavesmo210067');
stavesmo210067.setBegBarType(VF.Barline.type.NONE);
stavesmo210067.setContext(context);
stavesmo210067.draw();
smo210067v0.draw(context, stavesmo210067);
smo316005.setContext(context);
smo316005.draw();
// create beam groups and tuplets for format grp smo224510 before formatting
const dirsmo316008 = smo213260.getStemDirection();
smo213260.setStemDirection(dirsmo316008);
smo213261.setStemDirection(dirsmo316008);
smo213262.setStemDirection(dirsmo316008);
smo213263.setStemDirection(dirsmo316008);
const smo316008 = new VF.Beam([smo213260,smo213261,smo213262,smo213263]);
const dirsmo316011 = smo216455.getStemDirection();
smo216455.setStemDirection(dirsmo316011);
smo216456.setStemDirection(dirsmo316011);
smo216457.setStemDirection(dirsmo316011);
smo216458.setStemDirection(dirsmo316011);
const smo316011 = new VF.Beam([smo216455,smo216456,smo216457,smo216458]);
 
// formatting measures in staff group smo224510
fmtsmo21328066.format([smo213280v0,smo216475v0], 311);
const stavesmo213280 = new VF.Stave(1110, 1924, 325);
stavesmo213280.setAttribute('id', 'stavesmo213280');
stavesmo213280.setBegBarType(VF.Barline.type.NONE);
stavesmo213280.setContext(context);
stavesmo213280.draw();
smo213280v0.draw(context, stavesmo213280);
smo316008.setContext(context);
smo316008.draw();
const stavesmo216475 = new VF.Stave(1110, 2010, 325);
stavesmo216475.setAttribute('id', 'stavesmo216475');
stavesmo216475.setBegBarType(VF.Barline.type.NONE);
stavesmo216475.setContext(context);
stavesmo216475.draw();
smo216475v0.draw(context, stavesmo216475);
smo316011.setContext(context);
smo316011.draw();
// create beam groups and tuplets for format grp smo221348 before formatting
 
// formatting measures in staff group smo221348
fmtsmo21959066.format([smo219590v0], 311);
const stavesmo219590 = new VF.Stave(1110, 2081, 325);
stavesmo219590.setAttribute('id', 'stavesmo219590');
stavesmo219590.setBegBarType(VF.Barline.type.NONE);
stavesmo219590.setContext(context);
stavesmo219590.draw();
smo219590v0.draw(context, stavesmo219590);
// create beam groups and tuplets for format grp smo224504 before formatting
const dirsmo316016 = smo222762.getStemDirection();
smo222762.setStemDirection(dirsmo316016);
smo222764.setStemDirection(dirsmo316016);
const smo316016 = new VF.Beam([smo222762,smo222764]);
const dirsmo316017 = smo222766.getStemDirection();
smo222766.setStemDirection(dirsmo316017);
smo222768.setStemDirection(dirsmo316017);
smo222770.setStemDirection(dirsmo316017);
smo222771.setStemDirection(dirsmo316017);
const smo316017 = new VF.Beam([smo222766,smo222768,smo222770,smo222771]);
 
// formatting measures in staff group smo224504
fmtsmo22278966.format([smo222789v0,smo222789v1], 311);
const stavesmo222789 = new VF.Stave(1110, 2152, 325);
stavesmo222789.setAttribute('id', 'stavesmo222789');
stavesmo222789.setBegBarType(VF.Barline.type.NONE);
stavesmo222789.setContext(context);
stavesmo222789.draw();
smo222789v0.draw(context, stavesmo222789);
smo222789v1.draw(context, stavesmo222789);
smo316016.setContext(context);
smo316016.draw();
smo316017.setContext(context);
smo316017.draw();
const fmtsmo16997867 = new VF.Formatter();
//
// voices and notes for stave 0 67
const smo169978v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo169978v0ar = [];
const smo169957 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo169957'] = smo169957;
smo169957.setAttribute('id', 'smo169957');
smo169978v0ar.push(smo169957);
const smo169958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo169958'] = smo169958;
smo169958.setAttribute('id', 'smo169958');
const smo169959 = new VF.Annotation('a');
smo169959.setAttribute('id', 'smo169959');
smo169959.setFont('times', 12, 'normal');
smo169959.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo169958.addModifier(smo169959);
smo169959.addClass('lyric lyric-0');
smo169978v0ar.push(smo169958);
const smo169960 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo169960'] = smo169960;
smo169960.setAttribute('id', 'smo169960');
smo169978v0ar.push(smo169960);
const smo169961 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo169961'] = smo169961;
smo169961.setAttribute('id', 'smo169961');
smo169978v0ar.push(smo169961);
const smo169962 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo169962'] = smo169962;
smo169962.setAttribute('id', 'smo169962');
smo169978v0ar.push(smo169962);
smo169978v0.addTickables(smo169978v0ar)
fmtsmo16997867.joinVoices([smo169978v0]);
const fmtsmo17297167 = new VF.Formatter();
//
// voices and notes for stave 1 67
const smo172971v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo172971v0ar = [];
const smo172951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo172951'] = smo172951;
smo172951.setAttribute('id', 'smo172951');
smo172971v0ar.push(smo172951);
const smo172952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo172952'] = smo172952;
smo172952.setAttribute('id', 'smo172952');
const smo172953 = new VF.Annotation('a');
smo172953.setAttribute('id', 'smo172953');
smo172953.setFont('times', 12, 'normal');
smo172953.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo172952.addModifier(smo172953);
smo172953.addClass('lyric lyric-0');
smo172971v0ar.push(smo172952);
const smo172954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo172954'] = smo172954;
smo172954.setAttribute('id', 'smo172954');
smo172971v0ar.push(smo172954);
const smo172955 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo172955'] = smo172955;
smo172955.setAttribute('id', 'smo172955');
smo172971v0ar.push(smo172955);
smo172971v0.addTickables(smo172971v0ar)
fmtsmo17297167.joinVoices([smo172971v0]);
const fmtsmo17611567 = new VF.Formatter();
//
// voices and notes for stave 2 67
const smo176115v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo176115v0ar = [];
const smo176094 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo176094'] = smo176094;
smo176094.setAttribute('id', 'smo176094');
smo176115v0ar.push(smo176094);
const smo176095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo176095'] = smo176095;
smo176095.setAttribute('id', 'smo176095');
const smo176096 = new VF.Annotation('a');
smo176096.setAttribute('id', 'smo176096');
smo176096.setFont('times', 12, 'normal');
smo176096.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo176095.addModifier(smo176096);
smo176096.addClass('lyric lyric-0');
smo176115v0ar.push(smo176095);
const smo176097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo176097'] = smo176097;
smo176097.setAttribute('id', 'smo176097');
smo176115v0ar.push(smo176097);
const smo176098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo176098'] = smo176098;
smo176098.setAttribute('id', 'smo176098');
smo176115v0ar.push(smo176098);
const smo176099 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo176099'] = smo176099;
smo176099.setAttribute('id', 'smo176099');
smo176115v0ar.push(smo176099);
smo176115v0.addTickables(smo176115v0ar)
fmtsmo17611567.joinVoices([smo176115v0]);
const fmtsmo17923167 = new VF.Formatter();
//
// voices and notes for stave 3 67
const smo179231v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo179231v0ar = [];
const smo179210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo179210'] = smo179210;
smo179210.setAttribute('id', 'smo179210');
smo179231v0ar.push(smo179210);
const smo179211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo179211'] = smo179211;
smo179211.setAttribute('id', 'smo179211');
const smo179212 = new VF.Annotation('a');
smo179212.setAttribute('id', 'smo179212');
smo179212.setFont('times', 12, 'normal');
smo179212.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo179211.addModifier(smo179212);
smo179212.addClass('lyric lyric-0');
smo179231v0ar.push(smo179211);
const smo179213 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo179213'] = smo179213;
smo179213.setAttribute('id', 'smo179213');
smo179231v0ar.push(smo179213);
const smo179214 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo179214'] = smo179214;
smo179214.setAttribute('id', 'smo179214');
smo179231v0ar.push(smo179214);
const smo179215 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo179215'] = smo179215;
smo179215.setAttribute('id', 'smo179215');
smo179231v0ar.push(smo179215);
smo179231v0.addTickables(smo179231v0ar)
fmtsmo17923167.joinVoices([smo179231v0]);
const fmtsmo18225067 = new VF.Formatter();
//
// voices and notes for stave 4 67
const smo182250v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo182250v0ar = [];
const smo182229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo182229'] = smo182229;
smo182229.setAttribute('id', 'smo182229');
smo182250v0ar.push(smo182229);
const smo182230 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo182230'] = smo182230;
smo182230.setAttribute('id', 'smo182230');
const smo182231 = new VF.Annotation('a');
smo182231.setAttribute('id', 'smo182231');
smo182231.setFont('times', 12, 'normal');
smo182231.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo182230.addModifier(smo182231);
smo182231.addClass('lyric lyric-0');
smo182250v0ar.push(smo182230);
const smo182232 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo182232'] = smo182232;
smo182232.setAttribute('id', 'smo182232');
smo182250v0ar.push(smo182232);
const smo182233 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo182233'] = smo182233;
smo182233.setAttribute('id', 'smo182233');
smo182250v0ar.push(smo182233);
const smo182234 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo182234'] = smo182234;
smo182234.setAttribute('id', 'smo182234');
smo182250v0ar.push(smo182234);
smo182250v0.addTickables(smo182250v0ar)
fmtsmo18225067.joinVoices([smo182250v0]);
const fmtsmo18535767 = new VF.Formatter();
//
// voices and notes for stave 5 67
const smo185357v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo185357v0ar = [];
const smo185336 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo185336'] = smo185336;
smo185336.setAttribute('id', 'smo185336');
smo185357v0ar.push(smo185336);
const smo185337 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo185337'] = smo185337;
smo185337.setAttribute('id', 'smo185337');
const smo185338 = new VF.Annotation('a');
smo185338.setAttribute('id', 'smo185338');
smo185338.setFont('times', 12, 'normal');
smo185338.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo185337.addModifier(smo185338);
smo185338.addClass('lyric lyric-0');
smo185357v0ar.push(smo185337);
const smo185339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo185339'] = smo185339;
smo185339.setAttribute('id', 'smo185339');
smo185357v0ar.push(smo185339);
const smo185340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo185340'] = smo185340;
smo185340.setAttribute('id', 'smo185340');
smo185357v0ar.push(smo185340);
const smo185341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo185341'] = smo185341;
smo185341.setAttribute('id', 'smo185341');
smo185357v0ar.push(smo185341);
smo185357v0.addTickables(smo185357v0ar)
fmtsmo18535767.joinVoices([smo185357v0]);
const fmtsmo18846967 = new VF.Formatter();
//
// voices and notes for stave 6 67
const smo188469v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo188469v0ar = [];
const smo188448 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo188448'] = smo188448;
smo188448.setAttribute('id', 'smo188448');
smo188469v0ar.push(smo188448);
const smo188449 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo188449'] = smo188449;
smo188449.setAttribute('id', 'smo188449');
const smo188450 = new VF.Annotation('a');
smo188450.setAttribute('id', 'smo188450');
smo188450.setFont('times', 12, 'normal');
smo188450.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo188449.addModifier(smo188450);
smo188450.addClass('lyric lyric-0');
smo188469v0ar.push(smo188449);
const smo188451 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo188451'] = smo188451;
smo188451.setAttribute('id', 'smo188451');
smo188469v0ar.push(smo188451);
const smo188452 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo188452'] = smo188452;
smo188452.setAttribute('id', 'smo188452');
smo188469v0ar.push(smo188452);
const smo188453 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo188453'] = smo188453;
smo188453.setAttribute('id', 'smo188453');
smo188469v0ar.push(smo188453);
smo188469v0.addTickables(smo188469v0ar)
fmtsmo18846967.joinVoices([smo188469v0]);
const fmtsmo19157867 = new VF.Formatter();
//
// voices and notes for stave 7 67
const smo191578v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo191578v0ar = [];
const smo191557 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo191557'] = smo191557;
smo191557.setAttribute('id', 'smo191557');
smo191578v0ar.push(smo191557);
const smo191558 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo191558'] = smo191558;
smo191558.setAttribute('id', 'smo191558');
const smo191559 = new VF.Annotation('a');
smo191559.setAttribute('id', 'smo191559');
smo191559.setFont('times', 12, 'normal');
smo191559.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo191558.addModifier(smo191559);
smo191559.addClass('lyric lyric-0');
smo191578v0ar.push(smo191558);
const smo191560 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo191560'] = smo191560;
smo191560.setAttribute('id', 'smo191560');
smo191578v0ar.push(smo191560);
const smo191561 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo191561'] = smo191561;
smo191561.setAttribute('id', 'smo191561');
smo191578v0ar.push(smo191561);
const smo191562 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo191562'] = smo191562;
smo191562.setAttribute('id', 'smo191562');
smo191578v0ar.push(smo191562);
smo191578v0.addTickables(smo191578v0ar)
fmtsmo19157867.joinVoices([smo191578v0]);
const fmtsmo19466467 = new VF.Formatter();
//
// voices and notes for stave 8 67
const smo194664v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo194664v0ar = [];
const smo194643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo194643'] = smo194643;
smo194643.setAttribute('id', 'smo194643');
smo194664v0ar.push(smo194643);
const smo194644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo194644'] = smo194644;
smo194644.setAttribute('id', 'smo194644');
const smo194645 = new VF.Annotation('a');
smo194645.setAttribute('id', 'smo194645');
smo194645.setFont('times', 12, 'normal');
smo194645.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo194644.addModifier(smo194645);
smo194645.addClass('lyric lyric-0');
smo194664v0ar.push(smo194644);
const smo194646 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo194646'] = smo194646;
smo194646.setAttribute('id', 'smo194646');
smo194664v0ar.push(smo194646);
const smo194647 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo194647'] = smo194647;
smo194647.setAttribute('id', 'smo194647');
smo194664v0ar.push(smo194647);
const smo194648 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo194648'] = smo194648;
smo194648.setAttribute('id', 'smo194648');
smo194664v0ar.push(smo194648);
smo194664v0.addTickables(smo194664v0ar)
fmtsmo19466467.joinVoices([smo194664v0]);
const fmtsmo19775367 = new VF.Formatter();
//
// voices and notes for stave 9 67
const smo197753v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo197753v0ar = [];
const smo197732 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo197732'] = smo197732;
smo197732.setAttribute('id', 'smo197732');
smo197753v0ar.push(smo197732);
const smo197733 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo197733'] = smo197733;
smo197733.setAttribute('id', 'smo197733');
const smo197734 = new VF.Annotation('a');
smo197734.setAttribute('id', 'smo197734');
smo197734.setFont('times', 12, 'normal');
smo197734.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo197733.addModifier(smo197734);
smo197734.addClass('lyric lyric-0');
smo197753v0ar.push(smo197733);
const smo197735 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo197735'] = smo197735;
smo197735.setAttribute('id', 'smo197735');
smo197753v0ar.push(smo197735);
const smo197736 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo197736'] = smo197736;
smo197736.setAttribute('id', 'smo197736');
smo197753v0ar.push(smo197736);
const smo197737 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo197737'] = smo197737;
smo197737.setAttribute('id', 'smo197737');
smo197753v0ar.push(smo197737);
smo197753v0.addTickables(smo197753v0ar)
fmtsmo19775367.joinVoices([smo197753v0]);
const fmtsmo20079367 = new VF.Formatter();
//
// voices and notes for stave 10 67
const smo200793v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo200793v0ar = [];
const smo200772 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo200772'] = smo200772;
smo200772.setAttribute('id', 'smo200772');
smo200793v0ar.push(smo200772);
const smo200773 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo200773'] = smo200773;
smo200773.setAttribute('id', 'smo200773');
const smo200774 = new VF.Annotation('a');
smo200774.setAttribute('id', 'smo200774');
smo200774.setFont('times', 12, 'normal');
smo200774.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo200773.addModifier(smo200774);
smo200774.addClass('lyric lyric-0');
smo200793v0ar.push(smo200773);
const smo200775 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo200775'] = smo200775;
smo200775.setAttribute('id', 'smo200775');
smo200793v0ar.push(smo200775);
const smo200776 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo200776'] = smo200776;
smo200776.setAttribute('id', 'smo200776');
smo200793v0ar.push(smo200776);
const smo200777 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo200777'] = smo200777;
smo200777.setAttribute('id', 'smo200777');
smo200793v0ar.push(smo200777);
smo200793v0.addTickables(smo200793v0ar)
fmtsmo20079367.joinVoices([smo200793v0]);
const fmtsmo20384767 = new VF.Formatter();
//
// voices and notes for stave 11 67
const smo203847v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo203847v0ar = [];
const smo203826 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo203826'] = smo203826;
smo203826.setAttribute('id', 'smo203826');
smo203847v0ar.push(smo203826);
const smo203827 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo203827'] = smo203827;
smo203827.setAttribute('id', 'smo203827');
const smo203828 = new VF.Annotation('a');
smo203828.setAttribute('id', 'smo203828');
smo203828.setFont('times', 12, 'normal');
smo203828.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo203827.addModifier(smo203828);
smo203828.addClass('lyric lyric-0');
smo203847v0ar.push(smo203827);
const smo203829 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo203829'] = smo203829;
smo203829.setAttribute('id', 'smo203829');
smo203847v0ar.push(smo203829);
const smo203830 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo203830'] = smo203830;
smo203830.setAttribute('id', 'smo203830');
smo203847v0ar.push(smo203830);
const smo203831 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo203831'] = smo203831;
smo203831.setAttribute('id', 'smo203831');
smo203847v0ar.push(smo203831);
smo203847v0.addTickables(smo203847v0ar)
fmtsmo20384767.joinVoices([smo203847v0]);
const fmtsmo20689067 = new VF.Formatter();
//
// voices and notes for stave 12 67
const smo206890v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo206890v0ar = [];
const smo206869 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo206869'] = smo206869;
smo206869.setAttribute('id', 'smo206869');
smo206890v0ar.push(smo206869);
const smo206870 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo206870'] = smo206870;
smo206870.setAttribute('id', 'smo206870');
const smo206871 = new VF.Annotation('a');
smo206871.setAttribute('id', 'smo206871');
smo206871.setFont('times', 12, 'normal');
smo206871.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo206870.addModifier(smo206871);
smo206871.addClass('lyric lyric-0');
smo206890v0ar.push(smo206870);
const smo206872 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo206872'] = smo206872;
smo206872.setAttribute('id', 'smo206872');
smo206890v0ar.push(smo206872);
const smo206873 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo206873'] = smo206873;
smo206873.setAttribute('id', 'smo206873');
smo206890v0ar.push(smo206873);
const smo206874 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo206874'] = smo206874;
smo206874.setAttribute('id', 'smo206874');
smo206890v0ar.push(smo206874);
smo206890v0.addTickables(smo206890v0ar)
fmtsmo20689067.joinVoices([smo206890v0]);
const fmtsmo21008967 = new VF.Formatter();
//
// voices and notes for stave 13 67
const smo210089v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo210089v0ar = [];
const smo210068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
noteHash['smo210068'] = smo210068;
smo210068.setAttribute('id', 'smo210068');
smo210068.addModifier(new VF.Dot(), 0);
smo210068.addModifier(new VF.Dot(), 1);
smo210068.addModifier(new VF.Dot(), 2);
smo210089v0ar.push(smo210068);
const smo210069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","dn/5/n"]}'))
noteHash['smo210069'] = smo210069;
smo210069.setAttribute('id', 'smo210069');
smo210089v0ar.push(smo210069);
const smo210070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","dn/5/n"]}'))
noteHash['smo210070'] = smo210070;
smo210070.setAttribute('id', 'smo210070');
smo210089v0ar.push(smo210070);
const smo210071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo210071'] = smo210071;
smo210071.setAttribute('id', 'smo210071');
smo210089v0ar.push(smo210071);
const smo210072 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo210072'] = smo210072;
smo210072.setAttribute('id', 'smo210072');
smo210089v0ar.push(smo210072);
const smo210073 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo210073'] = smo210073;
smo210073.setAttribute('id', 'smo210073');
smo210089v0ar.push(smo210073);
smo210089v0.addTickables(smo210089v0ar)
fmtsmo21008967.joinVoices([smo210089v0]);
const fmtsmo21330267 = new VF.Formatter();
//
// voices and notes for stave 14 67
const smo213302v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo213302v0ar = [];
const smo213281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n","bb/4/n","dn/5/n"]}'))
noteHash['smo213281'] = smo213281;
smo213281.setAttribute('id', 'smo213281');
smo213281.addModifier(new VF.Dot(), 0);
smo213281.addModifier(new VF.Dot(), 1);
smo213281.addModifier(new VF.Dot(), 2);
smo213302v0ar.push(smo213281);
const smo213282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","dn/5/n"]}'))
noteHash['smo213282'] = smo213282;
smo213282.setAttribute('id', 'smo213282');
smo213302v0ar.push(smo213282);
const smo213283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","dn/5/n"]}'))
noteHash['smo213283'] = smo213283;
smo213283.setAttribute('id', 'smo213283');
smo213302v0ar.push(smo213283);
const smo213284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo213284'] = smo213284;
smo213284.setAttribute('id', 'smo213284');
smo213302v0ar.push(smo213284);
const smo213285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo213285'] = smo213285;
smo213285.setAttribute('id', 'smo213285');
smo213302v0ar.push(smo213285);
const smo213286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo213286'] = smo213286;
smo213286.setAttribute('id', 'smo213286');
smo213302v0ar.push(smo213286);
smo213302v0.addTickables(smo213302v0ar)
fmtsmo21330267.joinVoices([smo213302v0]);
const fmtsmo21649767 = new VF.Formatter();
//
// voices and notes for stave 15 67
const smo216497v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo216497v0ar = [];
const smo216476 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo216476'] = smo216476;
smo216476.setAttribute('id', 'smo216476');
smo216476.addModifier(new VF.Dot(), 0);
smo216497v0ar.push(smo216476);
const smo216477 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo216477'] = smo216477;
smo216477.setAttribute('id', 'smo216477');
smo216497v0ar.push(smo216477);
const smo216478 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo216478'] = smo216478;
smo216478.setAttribute('id', 'smo216478');
smo216497v0ar.push(smo216478);
const smo216479 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo216479'] = smo216479;
smo216479.setAttribute('id', 'smo216479');
smo216497v0ar.push(smo216479);
const smo216480 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo216480'] = smo216480;
smo216480.setAttribute('id', 'smo216480');
smo216497v0ar.push(smo216480);
const smo216481 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo216481'] = smo216481;
smo216481.setAttribute('id', 'smo216481');
smo216497v0ar.push(smo216481);
smo216497v0.addTickables(smo216497v0ar)
fmtsmo21649767.joinVoices([smo216497v0]);
const fmtsmo21961067 = new VF.Formatter();
//
// voices and notes for stave 16 67
const smo219610v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo219610v0ar = [];
const smo219591 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo219591'] = smo219591;
smo219591.setAttribute('id', 'smo219591');
smo219610v0ar.push(smo219591);
const smo219592 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo219592'] = smo219592;
smo219592.setAttribute('id', 'smo219592');
smo219610v0ar.push(smo219592);
const smo219593 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo219593'] = smo219593;
smo219593.setAttribute('id', 'smo219593');
smo219610v0ar.push(smo219593);
const smo219594 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo219594'] = smo219594;
smo219594.setAttribute('id', 'smo219594');
smo219610v0ar.push(smo219594);
smo219610v0.addTickables(smo219610v0ar)
fmtsmo21961067.joinVoices([smo219610v0]);
const fmtsmo22280967 = new VF.Formatter();
//
// voices and notes for stave 17 67
const smo222809v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo222809v0ar = [];
const smo222790 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo222790'] = smo222790;
smo222790.setAttribute('id', 'smo222790');
smo222809v0ar.push(smo222790);
const smo222791 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo222791'] = smo222791;
smo222791.setAttribute('id', 'smo222791');
smo222809v0ar.push(smo222791);
smo222809v0.addTickables(smo222809v0ar)
fmtsmo22280967.joinVoices([smo222809v0]);
const smo222809v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo222809v1ar = [];
const smo222792 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo222792'] = smo222792;
smo222792.setAttribute('id', 'smo222792');
smo222809v1ar.push(smo222792);
const smo222793 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo222793'] = smo222793;
smo222793.setAttribute('id', 'smo222793');
smo222809v1ar.push(smo222793);
smo222809v1.addTickables(smo222809v1ar)
fmtsmo22280967.joinVoices([smo222809v1]);
// create beam groups and tuplets for format grp smo224512 before formatting
const dirsmo316020 = smo169957.getStemDirection();
smo169957.setStemDirection(dirsmo316020);
smo169958.setStemDirection(dirsmo316020);
const smo316020 = new VF.Beam([smo169957,smo169958]);
const dirsmo316023 = smo172951.getStemDirection();
smo172951.setStemDirection(dirsmo316023);
smo172952.setStemDirection(dirsmo316023);
const smo316023 = new VF.Beam([smo172951,smo172952]);
const dirsmo316026 = smo176094.getStemDirection();
smo176094.setStemDirection(dirsmo316026);
smo176095.setStemDirection(dirsmo316026);
const smo316026 = new VF.Beam([smo176094,smo176095]);
const dirsmo316029 = smo179210.getStemDirection();
smo179210.setStemDirection(dirsmo316029);
smo179211.setStemDirection(dirsmo316029);
const smo316029 = new VF.Beam([smo179210,smo179211]);
const dirsmo316032 = smo182229.getStemDirection();
smo182229.setStemDirection(dirsmo316032);
smo182230.setStemDirection(dirsmo316032);
const smo316032 = new VF.Beam([smo182229,smo182230]);
 
// formatting measures in staff group smo224512
fmtsmo16997867.format([smo169978v0,smo172971v0,smo176115v0,smo179231v0,smo182250v0], 288);
const stavesmo169978 = new VF.Stave(1435, 210, 302);
stavesmo169978.setAttribute('id', 'stavesmo169978');
stavesmo169978.setBegBarType(VF.Barline.type.NONE);
stavesmo169978.setContext(context);
stavesmo169978.draw();
smo169978v0.draw(context, stavesmo169978);
smo316020.setContext(context);
smo316020.draw();
const stavesmo172971 = new VF.Stave(1435, 316, 302);
stavesmo172971.setAttribute('id', 'stavesmo172971');
stavesmo172971.setBegBarType(VF.Barline.type.NONE);
stavesmo172971.setContext(context);
stavesmo172971.draw();
smo172971v0.draw(context, stavesmo172971);
smo316023.setContext(context);
smo316023.draw();
const stavesmo176115 = new VF.Stave(1435, 437, 302);
stavesmo176115.setAttribute('id', 'stavesmo176115');
stavesmo176115.setBegBarType(VF.Barline.type.NONE);
stavesmo176115.setContext(context);
stavesmo176115.draw();
smo176115v0.draw(context, stavesmo176115);
smo316026.setContext(context);
smo316026.draw();
const stavesmo179231 = new VF.Stave(1435, 553, 302);
stavesmo179231.setAttribute('id', 'stavesmo179231');
stavesmo179231.setBegBarType(VF.Barline.type.NONE);
stavesmo179231.setContext(context);
stavesmo179231.draw();
smo179231v0.draw(context, stavesmo179231);
smo316029.setContext(context);
smo316029.draw();
const stavesmo182250 = new VF.Stave(1435, 659, 302);
stavesmo182250.setAttribute('id', 'stavesmo182250');
stavesmo182250.setBegBarType(VF.Barline.type.NONE);
stavesmo182250.setContext(context);
stavesmo182250.draw();
smo182250v0.draw(context, stavesmo182250);
smo316032.setContext(context);
smo316032.draw();
// create beam groups and tuplets for format grp smo224514 before formatting
const dirsmo316035 = smo185336.getStemDirection();
smo185336.setStemDirection(dirsmo316035);
smo185337.setStemDirection(dirsmo316035);
const smo316035 = new VF.Beam([smo185336,smo185337]);
const dirsmo316038 = smo188448.getStemDirection();
smo188448.setStemDirection(dirsmo316038);
smo188449.setStemDirection(dirsmo316038);
const smo316038 = new VF.Beam([smo188448,smo188449]);
const dirsmo316041 = smo191557.getStemDirection();
smo191557.setStemDirection(dirsmo316041);
smo191558.setStemDirection(dirsmo316041);
const smo316041 = new VF.Beam([smo191557,smo191558]);
const dirsmo316044 = smo194643.getStemDirection();
smo194643.setStemDirection(dirsmo316044);
smo194644.setStemDirection(dirsmo316044);
const smo316044 = new VF.Beam([smo194643,smo194644]);
 
// formatting measures in staff group smo224514
fmtsmo18535767.format([smo185357v0,smo188469v0,smo191578v0,smo194664v0], 288);
const stavesmo185357 = new VF.Stave(1435, 780, 302);
stavesmo185357.setAttribute('id', 'stavesmo185357');
stavesmo185357.setBegBarType(VF.Barline.type.NONE);
stavesmo185357.setContext(context);
stavesmo185357.draw();
smo185357v0.draw(context, stavesmo185357);
smo316035.setContext(context);
smo316035.draw();
const stavesmo188469 = new VF.Stave(1435, 896, 302);
stavesmo188469.setAttribute('id', 'stavesmo188469');
stavesmo188469.setBegBarType(VF.Barline.type.NONE);
stavesmo188469.setContext(context);
stavesmo188469.draw();
smo188469v0.draw(context, stavesmo188469);
smo316038.setContext(context);
smo316038.draw();
const stavesmo191578 = new VF.Stave(1435, 1012, 302);
stavesmo191578.setAttribute('id', 'stavesmo191578');
stavesmo191578.setBegBarType(VF.Barline.type.NONE);
stavesmo191578.setContext(context);
stavesmo191578.draw();
smo191578v0.draw(context, stavesmo191578);
smo316041.setContext(context);
smo316041.draw();
const stavesmo194664 = new VF.Stave(1435, 1128, 302);
stavesmo194664.setAttribute('id', 'stavesmo194664');
stavesmo194664.setBegBarType(VF.Barline.type.NONE);
stavesmo194664.setContext(context);
stavesmo194664.draw();
smo194664v0.draw(context, stavesmo194664);
smo316044.setContext(context);
smo316044.draw();
// create beam groups and tuplets for format grp smo224516 before formatting
const dirsmo316047 = smo197732.getStemDirection();
smo197732.setStemDirection(dirsmo316047);
smo197733.setStemDirection(dirsmo316047);
const smo316047 = new VF.Beam([smo197732,smo197733]);
const dirsmo316050 = smo200772.getStemDirection();
smo200772.setStemDirection(dirsmo316050);
smo200773.setStemDirection(dirsmo316050);
const smo316050 = new VF.Beam([smo200772,smo200773]);
const dirsmo316053 = smo203826.getStemDirection();
smo203826.setStemDirection(dirsmo316053);
smo203827.setStemDirection(dirsmo316053);
const smo316053 = new VF.Beam([smo203826,smo203827]);
const dirsmo316056 = smo206869.getStemDirection();
smo206869.setStemDirection(dirsmo316056);
smo206870.setStemDirection(dirsmo316056);
const smo316056 = new VF.Beam([smo206869,smo206870]);
 
// formatting measures in staff group smo224516
fmtsmo19775367.format([smo197753v0,smo200793v0,smo203847v0,smo206890v0], 288);
const stavesmo197753 = new VF.Stave(1435, 1264, 302);
stavesmo197753.setAttribute('id', 'stavesmo197753');
stavesmo197753.setBegBarType(VF.Barline.type.NONE);
stavesmo197753.setContext(context);
stavesmo197753.draw();
smo197753v0.draw(context, stavesmo197753);
smo316047.setContext(context);
smo316047.draw();
const stavesmo200793 = new VF.Stave(1435, 1400, 302);
stavesmo200793.setAttribute('id', 'stavesmo200793');
stavesmo200793.setBegBarType(VF.Barline.type.NONE);
stavesmo200793.setContext(context);
stavesmo200793.draw();
smo200793v0.draw(context, stavesmo200793);
smo316050.setContext(context);
smo316050.draw();
const stavesmo203847 = new VF.Stave(1435, 1536, 302);
stavesmo203847.setAttribute('id', 'stavesmo203847');
stavesmo203847.setBegBarType(VF.Barline.type.NONE);
stavesmo203847.setContext(context);
stavesmo203847.draw();
smo203847v0.draw(context, stavesmo203847);
smo316053.setContext(context);
smo316053.draw();
const stavesmo206890 = new VF.Stave(1435, 1672, 302);
stavesmo206890.setAttribute('id', 'stavesmo206890');
stavesmo206890.setBegBarType(VF.Barline.type.NONE);
stavesmo206890.setContext(context);
stavesmo206890.draw();
smo206890v0.draw(context, stavesmo206890);
smo316056.setContext(context);
smo316056.draw();
// create beam groups and tuplets for format grp smo211835 before formatting
const dirsmo316059 = smo210069.getStemDirection();
smo210069.setStemDirection(dirsmo316059);
smo210070.setStemDirection(dirsmo316059);
smo210071.setStemDirection(dirsmo316059);
smo210072.setStemDirection(dirsmo316059);
const smo316059 = new VF.Beam([smo210069,smo210070,smo210071,smo210072]);
 
// formatting measures in staff group smo211835
fmtsmo21008967.format([smo210089v0], 288);
const stavesmo210089 = new VF.Stave(1435, 1818, 302);
stavesmo210089.setAttribute('id', 'stavesmo210089');
stavesmo210089.setBegBarType(VF.Barline.type.NONE);
stavesmo210089.setContext(context);
stavesmo210089.draw();
smo210089v0.draw(context, stavesmo210089);
smo316059.setContext(context);
smo316059.draw();
// create beam groups and tuplets for format grp smo224510 before formatting
const dirsmo316062 = smo213282.getStemDirection();
smo213282.setStemDirection(dirsmo316062);
smo213283.setStemDirection(dirsmo316062);
smo213284.setStemDirection(dirsmo316062);
smo213285.setStemDirection(dirsmo316062);
const smo316062 = new VF.Beam([smo213282,smo213283,smo213284,smo213285]);
const dirsmo316065 = smo216477.getStemDirection();
smo216477.setStemDirection(dirsmo316065);
smo216478.setStemDirection(dirsmo316065);
smo216479.setStemDirection(dirsmo316065);
smo216480.setStemDirection(dirsmo316065);
const smo316065 = new VF.Beam([smo216477,smo216478,smo216479,smo216480]);
 
// formatting measures in staff group smo224510
fmtsmo21330267.format([smo213302v0,smo216497v0], 288);
const stavesmo213302 = new VF.Stave(1435, 1924, 302);
stavesmo213302.setAttribute('id', 'stavesmo213302');
stavesmo213302.setBegBarType(VF.Barline.type.NONE);
stavesmo213302.setContext(context);
stavesmo213302.draw();
smo213302v0.draw(context, stavesmo213302);
smo316062.setContext(context);
smo316062.draw();
const stavesmo216497 = new VF.Stave(1435, 2010, 302);
stavesmo216497.setAttribute('id', 'stavesmo216497');
stavesmo216497.setBegBarType(VF.Barline.type.NONE);
stavesmo216497.setContext(context);
stavesmo216497.draw();
smo216497v0.draw(context, stavesmo216497);
smo316065.setContext(context);
smo316065.draw();
// create beam groups and tuplets for format grp smo221348 before formatting
 
// formatting measures in staff group smo221348
fmtsmo21961067.format([smo219610v0], 288);
const stavesmo219610 = new VF.Stave(1435, 2081, 302);
stavesmo219610.setAttribute('id', 'stavesmo219610');
stavesmo219610.setBegBarType(VF.Barline.type.NONE);
stavesmo219610.setContext(context);
stavesmo219610.draw();
smo219610v0.draw(context, stavesmo219610);
// create beam groups and tuplets for format grp smo224504 before formatting
 
// formatting measures in staff group smo224504
fmtsmo22280967.format([smo222809v0,smo222809v1], 288);
const stavesmo222809 = new VF.Stave(1435, 2152, 302);
stavesmo222809.setAttribute('id', 'stavesmo222809');
stavesmo222809.setBegBarType(VF.Barline.type.NONE);
stavesmo222809.setContext(context);
stavesmo222809.draw();
smo222809v0.draw(context, stavesmo222809);
smo222809v1.draw(context, stavesmo222809);
const fmtsmo16999568 = new VF.Formatter();
//
// voices and notes for stave 0 68
const smo169995v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo169995v0ar = [];
const smo169979 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo169979'] = smo169979;
smo169979.setAttribute('id', 'smo169979');
smo169995v0ar.push(smo169979);
smo169995v0.addTickables(smo169995v0ar)
fmtsmo16999568.joinVoices([smo169995v0]);
const fmtsmo17298868 = new VF.Formatter();
//
// voices and notes for stave 1 68
const smo172988v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo172988v0ar = [];
const smo172972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo172972'] = smo172972;
smo172972.setAttribute('id', 'smo172972');
smo172988v0ar.push(smo172972);
smo172988v0.addTickables(smo172988v0ar)
fmtsmo17298868.joinVoices([smo172988v0]);
const fmtsmo17613268 = new VF.Formatter();
//
// voices and notes for stave 2 68
const smo176132v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo176132v0ar = [];
const smo176116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo176116'] = smo176116;
smo176116.setAttribute('id', 'smo176116');
smo176132v0ar.push(smo176116);
smo176132v0.addTickables(smo176132v0ar)
fmtsmo17613268.joinVoices([smo176132v0]);
const fmtsmo17924868 = new VF.Formatter();
//
// voices and notes for stave 3 68
const smo179248v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo179248v0ar = [];
const smo179232 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo179232'] = smo179232;
smo179232.setAttribute('id', 'smo179232');
smo179248v0ar.push(smo179232);
smo179248v0.addTickables(smo179248v0ar)
fmtsmo17924868.joinVoices([smo179248v0]);
const fmtsmo18226768 = new VF.Formatter();
//
// voices and notes for stave 4 68
const smo182267v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo182267v0ar = [];
const smo182251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo182251'] = smo182251;
smo182251.setAttribute('id', 'smo182251');
smo182267v0ar.push(smo182251);
smo182267v0.addTickables(smo182267v0ar)
fmtsmo18226768.joinVoices([smo182267v0]);
const fmtsmo18537768 = new VF.Formatter();
//
// voices and notes for stave 5 68
const smo185377v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo185377v0ar = [];
const smo185358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo185358'] = smo185358;
smo185358.setAttribute('id', 'smo185358');
smo185377v0ar.push(smo185358);
const smo185359 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo185359'] = smo185359;
smo185359.setAttribute('id', 'smo185359');
smo185377v0ar.push(smo185359);
const smo185360 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo185360'] = smo185360;
smo185360.setAttribute('id', 'smo185360');
smo185377v0ar.push(smo185360);
const smo185361 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo185361'] = smo185361;
smo185361.setAttribute('id', 'smo185361');
smo185377v0ar.push(smo185361);
smo185377v0.addTickables(smo185377v0ar)
fmtsmo18537768.joinVoices([smo185377v0]);
const fmtsmo18848668 = new VF.Formatter();
//
// voices and notes for stave 6 68
const smo188486v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo188486v0ar = [];
const smo188470 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo188470'] = smo188470;
smo188470.setAttribute('id', 'smo188470');
smo188486v0ar.push(smo188470);
smo188486v0.addTickables(smo188486v0ar)
fmtsmo18848668.joinVoices([smo188486v0]);
const fmtsmo19159568 = new VF.Formatter();
//
// voices and notes for stave 7 68
const smo191595v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo191595v0ar = [];
const smo191579 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo191579'] = smo191579;
smo191579.setAttribute('id', 'smo191579');
smo191595v0ar.push(smo191579);
smo191595v0.addTickables(smo191595v0ar)
fmtsmo19159568.joinVoices([smo191595v0]);
const fmtsmo19468168 = new VF.Formatter();
//
// voices and notes for stave 8 68
const smo194681v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo194681v0ar = [];
const smo194665 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo194665'] = smo194665;
smo194665.setAttribute('id', 'smo194665');
smo194681v0ar.push(smo194665);
smo194681v0.addTickables(smo194681v0ar)
fmtsmo19468168.joinVoices([smo194681v0]);
const fmtsmo19777068 = new VF.Formatter();
//
// voices and notes for stave 9 68
const smo197770v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo197770v0ar = [];
const smo197754 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo197754'] = smo197754;
smo197754.setAttribute('id', 'smo197754');
smo197770v0ar.push(smo197754);
smo197770v0.addTickables(smo197770v0ar)
fmtsmo19777068.joinVoices([smo197770v0]);
const fmtsmo20081068 = new VF.Formatter();
//
// voices and notes for stave 10 68
const smo200810v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo200810v0ar = [];
const smo200794 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo200794'] = smo200794;
smo200794.setAttribute('id', 'smo200794');
smo200810v0ar.push(smo200794);
smo200810v0.addTickables(smo200810v0ar)
fmtsmo20081068.joinVoices([smo200810v0]);
const fmtsmo20386468 = new VF.Formatter();
//
// voices and notes for stave 11 68
const smo203864v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo203864v0ar = [];
const smo203848 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo203848'] = smo203848;
smo203848.setAttribute('id', 'smo203848');
smo203864v0ar.push(smo203848);
smo203864v0.addTickables(smo203864v0ar)
fmtsmo20386468.joinVoices([smo203864v0]);
const fmtsmo20690768 = new VF.Formatter();
//
// voices and notes for stave 12 68
const smo206907v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo206907v0ar = [];
const smo206891 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo206891'] = smo206891;
smo206891.setAttribute('id', 'smo206891');
smo206907v0ar.push(smo206891);
smo206907v0.addTickables(smo206907v0ar)
fmtsmo20690768.joinVoices([smo206907v0]);
const fmtsmo21010668 = new VF.Formatter();
//
// voices and notes for stave 13 68
const smo210106v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo210106v0ar = [];
const smo210090 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo210090'] = smo210090;
smo210090.setAttribute('id', 'smo210090');
smo210106v0ar.push(smo210090);
smo210106v0.addTickables(smo210106v0ar)
fmtsmo21010668.joinVoices([smo210106v0]);
const fmtsmo21331968 = new VF.Formatter();
//
// voices and notes for stave 14 68
const smo213319v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo213319v0ar = [];
const smo213303 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo213303'] = smo213303;
smo213303.setAttribute('id', 'smo213303');
smo213319v0ar.push(smo213303);
smo213319v0.addTickables(smo213319v0ar)
fmtsmo21331968.joinVoices([smo213319v0]);
const fmtsmo21651468 = new VF.Formatter();
//
// voices and notes for stave 15 68
const smo216514v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo216514v0ar = [];
const smo216498 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo216498'] = smo216498;
smo216498.setAttribute('id', 'smo216498');
smo216514v0ar.push(smo216498);
smo216514v0.addTickables(smo216514v0ar)
fmtsmo21651468.joinVoices([smo216514v0]);
const fmtsmo21963068 = new VF.Formatter();
//
// voices and notes for stave 16 68
const smo219630v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo219630v0ar = [];
const smo219611 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo219611'] = smo219611;
smo219611.setAttribute('id', 'smo219611');
smo219611.addModifier(new VF.Dot(), 0);
smo219630v0ar.push(smo219611);
const smo219612 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo219612'] = smo219612;
smo219612.setAttribute('id', 'smo219612');
smo219630v0ar.push(smo219612);
const smo219613 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo219613'] = smo219613;
smo219613.setAttribute('id', 'smo219613');
smo219630v0ar.push(smo219613);
const smo219614 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo219614'] = smo219614;
smo219614.setAttribute('id', 'smo219614');
smo219630v0ar.push(smo219614);
smo219630v0.addTickables(smo219630v0ar)
fmtsmo21963068.joinVoices([smo219630v0]);
const fmtsmo22282968 = new VF.Formatter();
//
// voices and notes for stave 17 68
const smo222829v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo222829v0ar = [];
const smo222810 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo222810'] = smo222810;
smo222810.setAttribute('id', 'smo222810');
smo222829v0ar.push(smo222810);
const smo222811 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo222811'] = smo222811;
smo222811.setAttribute('id', 'smo222811');
smo222829v0ar.push(smo222811);
smo222829v0.addTickables(smo222829v0ar)
fmtsmo22282968.joinVoices([smo222829v0]);
const smo222829v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo222829v1ar = [];
const smo222812 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo222812'] = smo222812;
smo222812.setAttribute('id', 'smo222812');
smo222829v1ar.push(smo222812);
const smo222813 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo222813'] = smo222813;
smo222813.setAttribute('id', 'smo222813');
smo222829v1ar.push(smo222813);
smo222829v1.addTickables(smo222829v1ar)
fmtsmo22282968.joinVoices([smo222829v1]);
// create beam groups and tuplets for format grp smo224512 before formatting
 
// formatting measures in staff group smo224512
fmtsmo16999568.format([smo169995v0,smo172988v0,smo176132v0,smo179248v0,smo182267v0], 288);
const stavesmo169995 = new VF.Stave(1737, 210, 302);
stavesmo169995.setAttribute('id', 'stavesmo169995');
stavesmo169995.setBegBarType(VF.Barline.type.NONE);
stavesmo169995.setContext(context);
stavesmo169995.draw();
smo169995v0.draw(context, stavesmo169995);
const stavesmo172988 = new VF.Stave(1737, 316, 302);
stavesmo172988.setAttribute('id', 'stavesmo172988');
stavesmo172988.setBegBarType(VF.Barline.type.NONE);
stavesmo172988.setContext(context);
stavesmo172988.draw();
smo172988v0.draw(context, stavesmo172988);
const stavesmo176132 = new VF.Stave(1737, 437, 302);
stavesmo176132.setAttribute('id', 'stavesmo176132');
stavesmo176132.setBegBarType(VF.Barline.type.NONE);
stavesmo176132.setContext(context);
stavesmo176132.draw();
smo176132v0.draw(context, stavesmo176132);
const stavesmo179248 = new VF.Stave(1737, 553, 302);
stavesmo179248.setAttribute('id', 'stavesmo179248');
stavesmo179248.setBegBarType(VF.Barline.type.NONE);
stavesmo179248.setContext(context);
stavesmo179248.draw();
smo179248v0.draw(context, stavesmo179248);
const stavesmo182267 = new VF.Stave(1737, 659, 302);
stavesmo182267.setAttribute('id', 'stavesmo182267');
stavesmo182267.setBegBarType(VF.Barline.type.NONE);
stavesmo182267.setContext(context);
stavesmo182267.draw();
smo182267v0.draw(context, stavesmo182267);
// create beam groups and tuplets for format grp smo224514 before formatting
 
// formatting measures in staff group smo224514
fmtsmo18537768.format([smo185377v0,smo188486v0,smo191595v0,smo194681v0], 288);
const stavesmo185377 = new VF.Stave(1737, 780, 302);
stavesmo185377.setAttribute('id', 'stavesmo185377');
stavesmo185377.setBegBarType(VF.Barline.type.NONE);
stavesmo185377.setContext(context);
stavesmo185377.draw();
smo185377v0.draw(context, stavesmo185377);
const stavesmo188486 = new VF.Stave(1737, 896, 302);
stavesmo188486.setAttribute('id', 'stavesmo188486');
stavesmo188486.setBegBarType(VF.Barline.type.NONE);
stavesmo188486.setContext(context);
stavesmo188486.draw();
smo188486v0.draw(context, stavesmo188486);
const stavesmo191595 = new VF.Stave(1737, 1012, 302);
stavesmo191595.setAttribute('id', 'stavesmo191595');
stavesmo191595.setBegBarType(VF.Barline.type.NONE);
stavesmo191595.setContext(context);
stavesmo191595.draw();
smo191595v0.draw(context, stavesmo191595);
const stavesmo194681 = new VF.Stave(1737, 1128, 302);
stavesmo194681.setAttribute('id', 'stavesmo194681');
stavesmo194681.setBegBarType(VF.Barline.type.NONE);
stavesmo194681.setContext(context);
stavesmo194681.draw();
smo194681v0.draw(context, stavesmo194681);
// create beam groups and tuplets for format grp smo224516 before formatting
 
// formatting measures in staff group smo224516
fmtsmo19777068.format([smo197770v0,smo200810v0,smo203864v0,smo206907v0], 288);
const stavesmo197770 = new VF.Stave(1737, 1264, 302);
stavesmo197770.setAttribute('id', 'stavesmo197770');
stavesmo197770.setBegBarType(VF.Barline.type.NONE);
stavesmo197770.setContext(context);
stavesmo197770.draw();
smo197770v0.draw(context, stavesmo197770);
const stavesmo200810 = new VF.Stave(1737, 1400, 302);
stavesmo200810.setAttribute('id', 'stavesmo200810');
stavesmo200810.setBegBarType(VF.Barline.type.NONE);
stavesmo200810.setContext(context);
stavesmo200810.draw();
smo200810v0.draw(context, stavesmo200810);
const stavesmo203864 = new VF.Stave(1737, 1536, 302);
stavesmo203864.setAttribute('id', 'stavesmo203864');
stavesmo203864.setBegBarType(VF.Barline.type.NONE);
stavesmo203864.setContext(context);
stavesmo203864.draw();
smo203864v0.draw(context, stavesmo203864);
const stavesmo206907 = new VF.Stave(1737, 1672, 302);
stavesmo206907.setAttribute('id', 'stavesmo206907');
stavesmo206907.setBegBarType(VF.Barline.type.NONE);
stavesmo206907.setContext(context);
stavesmo206907.draw();
smo206907v0.draw(context, stavesmo206907);
// create beam groups and tuplets for format grp smo211835 before formatting
 
// formatting measures in staff group smo211835
fmtsmo21010668.format([smo210106v0], 288);
const stavesmo210106 = new VF.Stave(1737, 1818, 302);
stavesmo210106.setAttribute('id', 'stavesmo210106');
stavesmo210106.setBegBarType(VF.Barline.type.NONE);
stavesmo210106.setContext(context);
stavesmo210106.draw();
smo210106v0.draw(context, stavesmo210106);
// create beam groups and tuplets for format grp smo224510 before formatting
 
// formatting measures in staff group smo224510
fmtsmo21331968.format([smo213319v0,smo216514v0], 288);
const stavesmo213319 = new VF.Stave(1737, 1924, 302);
stavesmo213319.setAttribute('id', 'stavesmo213319');
stavesmo213319.setBegBarType(VF.Barline.type.NONE);
stavesmo213319.setContext(context);
stavesmo213319.draw();
smo213319v0.draw(context, stavesmo213319);
const stavesmo216514 = new VF.Stave(1737, 2010, 302);
stavesmo216514.setAttribute('id', 'stavesmo216514');
stavesmo216514.setBegBarType(VF.Barline.type.NONE);
stavesmo216514.setContext(context);
stavesmo216514.draw();
smo216514v0.draw(context, stavesmo216514);
// create beam groups and tuplets for format grp smo221348 before formatting
 
// formatting measures in staff group smo221348
fmtsmo21963068.format([smo219630v0], 288);
const stavesmo219630 = new VF.Stave(1737, 2081, 302);
stavesmo219630.setAttribute('id', 'stavesmo219630');
stavesmo219630.setBegBarType(VF.Barline.type.NONE);
stavesmo219630.setContext(context);
stavesmo219630.draw();
smo219630v0.draw(context, stavesmo219630);
// create beam groups and tuplets for format grp smo224504 before formatting
 
// formatting measures in staff group smo224504
fmtsmo22282968.format([smo222829v0,smo222829v1], 288);
const stavesmo222829 = new VF.Stave(1737, 2152, 302);
stavesmo222829.setAttribute('id', 'stavesmo222829');
stavesmo222829.setBegBarType(VF.Barline.type.NONE);
stavesmo222829.setContext(context);
stavesmo222829.draw();
smo222829v0.draw(context, stavesmo222829);
smo222829v1.draw(context, stavesmo222829);
const fmtsmo17001269 = new VF.Formatter();
//
// voices and notes for stave 0 69
const smo170012v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo170012v0ar = [];
const smo169996 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo169996'] = smo169996;
smo169996.setAttribute('id', 'smo169996');
smo170012v0ar.push(smo169996);
smo170012v0.addTickables(smo170012v0ar)
fmtsmo17001269.joinVoices([smo170012v0]);
const fmtsmo17300569 = new VF.Formatter();
//
// voices and notes for stave 1 69
const smo173005v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo173005v0ar = [];
const smo172989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo172989'] = smo172989;
smo172989.setAttribute('id', 'smo172989');
smo173005v0ar.push(smo172989);
smo173005v0.addTickables(smo173005v0ar)
fmtsmo17300569.joinVoices([smo173005v0]);
const fmtsmo17614969 = new VF.Formatter();
//
// voices and notes for stave 2 69
const smo176149v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo176149v0ar = [];
const smo176133 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo176133'] = smo176133;
smo176133.setAttribute('id', 'smo176133');
smo176149v0ar.push(smo176133);
smo176149v0.addTickables(smo176149v0ar)
fmtsmo17614969.joinVoices([smo176149v0]);
const fmtsmo17926569 = new VF.Formatter();
//
// voices and notes for stave 3 69
const smo179265v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo179265v0ar = [];
const smo179249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo179249'] = smo179249;
smo179249.setAttribute('id', 'smo179249');
smo179265v0ar.push(smo179249);
smo179265v0.addTickables(smo179265v0ar)
fmtsmo17926569.joinVoices([smo179265v0]);
const fmtsmo18228469 = new VF.Formatter();
//
// voices and notes for stave 4 69
const smo182284v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo182284v0ar = [];
const smo182268 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo182268'] = smo182268;
smo182268.setAttribute('id', 'smo182268');
smo182284v0ar.push(smo182268);
smo182284v0.addTickables(smo182284v0ar)
fmtsmo18228469.joinVoices([smo182284v0]);
const fmtsmo18539769 = new VF.Formatter();
//
// voices and notes for stave 5 69
const smo185397v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo185397v0ar = [];
const smo185378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo185378'] = smo185378;
smo185378.setAttribute('id', 'smo185378');
smo185397v0ar.push(smo185378);
const smo185379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo185379'] = smo185379;
smo185379.setAttribute('id', 'smo185379');
smo185397v0ar.push(smo185379);
const smo185380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo185380'] = smo185380;
smo185380.setAttribute('id', 'smo185380');
smo185397v0ar.push(smo185380);
const smo185381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo185381'] = smo185381;
smo185381.setAttribute('id', 'smo185381');
smo185397v0ar.push(smo185381);
smo185397v0.addTickables(smo185397v0ar)
fmtsmo18539769.joinVoices([smo185397v0]);
const fmtsmo18850369 = new VF.Formatter();
//
// voices and notes for stave 6 69
const smo188503v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo188503v0ar = [];
const smo188487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo188487'] = smo188487;
smo188487.setAttribute('id', 'smo188487');
smo188503v0ar.push(smo188487);
smo188503v0.addTickables(smo188503v0ar)
fmtsmo18850369.joinVoices([smo188503v0]);
const fmtsmo19161269 = new VF.Formatter();
//
// voices and notes for stave 7 69
const smo191612v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo191612v0ar = [];
const smo191596 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo191596'] = smo191596;
smo191596.setAttribute('id', 'smo191596');
smo191612v0ar.push(smo191596);
smo191612v0.addTickables(smo191612v0ar)
fmtsmo19161269.joinVoices([smo191612v0]);
const fmtsmo19469869 = new VF.Formatter();
//
// voices and notes for stave 8 69
const smo194698v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo194698v0ar = [];
const smo194682 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo194682'] = smo194682;
smo194682.setAttribute('id', 'smo194682');
smo194698v0ar.push(smo194682);
smo194698v0.addTickables(smo194698v0ar)
fmtsmo19469869.joinVoices([smo194698v0]);
const fmtsmo19778769 = new VF.Formatter();
//
// voices and notes for stave 9 69
const smo197787v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo197787v0ar = [];
const smo197771 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo197771'] = smo197771;
smo197771.setAttribute('id', 'smo197771');
smo197787v0ar.push(smo197771);
smo197787v0.addTickables(smo197787v0ar)
fmtsmo19778769.joinVoices([smo197787v0]);
const fmtsmo20082769 = new VF.Formatter();
//
// voices and notes for stave 10 69
const smo200827v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo200827v0ar = [];
const smo200811 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo200811'] = smo200811;
smo200811.setAttribute('id', 'smo200811');
smo200827v0ar.push(smo200811);
smo200827v0.addTickables(smo200827v0ar)
fmtsmo20082769.joinVoices([smo200827v0]);
const fmtsmo20388169 = new VF.Formatter();
//
// voices and notes for stave 11 69
const smo203881v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo203881v0ar = [];
const smo203865 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo203865'] = smo203865;
smo203865.setAttribute('id', 'smo203865');
smo203881v0ar.push(smo203865);
smo203881v0.addTickables(smo203881v0ar)
fmtsmo20388169.joinVoices([smo203881v0]);
const fmtsmo20692469 = new VF.Formatter();
//
// voices and notes for stave 12 69
const smo206924v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo206924v0ar = [];
const smo206908 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo206908'] = smo206908;
smo206908.setAttribute('id', 'smo206908');
smo206924v0ar.push(smo206908);
smo206924v0.addTickables(smo206924v0ar)
fmtsmo20692469.joinVoices([smo206924v0]);
const fmtsmo21012369 = new VF.Formatter();
//
// voices and notes for stave 13 69
const smo210123v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo210123v0ar = [];
const smo210107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo210107'] = smo210107;
smo210107.setAttribute('id', 'smo210107');
smo210123v0ar.push(smo210107);
smo210123v0.addTickables(smo210123v0ar)
fmtsmo21012369.joinVoices([smo210123v0]);
const fmtsmo21333669 = new VF.Formatter();
//
// voices and notes for stave 14 69
const smo213336v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo213336v0ar = [];
const smo213320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo213320'] = smo213320;
smo213320.setAttribute('id', 'smo213320');
smo213336v0ar.push(smo213320);
smo213336v0.addTickables(smo213336v0ar)
fmtsmo21333669.joinVoices([smo213336v0]);
const fmtsmo21653169 = new VF.Formatter();
//
// voices and notes for stave 15 69
const smo216531v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo216531v0ar = [];
const smo216515 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo216515'] = smo216515;
smo216515.setAttribute('id', 'smo216515');
smo216531v0ar.push(smo216515);
smo216531v0.addTickables(smo216531v0ar)
fmtsmo21653169.joinVoices([smo216531v0]);
const fmtsmo21965069 = new VF.Formatter();
//
// voices and notes for stave 16 69
const smo219650v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo219650v0ar = [];
const smo219631 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo219631'] = smo219631;
smo219631.setAttribute('id', 'smo219631');
smo219631.addModifier(new VF.Dot(), 0);
smo219650v0ar.push(smo219631);
const smo219632 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo219632'] = smo219632;
smo219632.setAttribute('id', 'smo219632');
smo219650v0ar.push(smo219632);
const smo219633 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo219633'] = smo219633;
smo219633.setAttribute('id', 'smo219633');
smo219650v0ar.push(smo219633);
const smo219634 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo219634'] = smo219634;
smo219634.setAttribute('id', 'smo219634');
smo219650v0ar.push(smo219634);
smo219650v0.addTickables(smo219650v0ar)
fmtsmo21965069.joinVoices([smo219650v0]);
const fmtsmo22284969 = new VF.Formatter();
//
// voices and notes for stave 17 69
const smo222849v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo222849v0ar = [];
const smo222830 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo222830'] = smo222830;
smo222830.setAttribute('id', 'smo222830');
smo222849v0ar.push(smo222830);
const smo222831 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo222831'] = smo222831;
smo222831.setAttribute('id', 'smo222831');
smo222849v0ar.push(smo222831);
smo222849v0.addTickables(smo222849v0ar)
fmtsmo22284969.joinVoices([smo222849v0]);
const smo222849v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo222849v1ar = [];
const smo222832 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo222832'] = smo222832;
smo222832.setAttribute('id', 'smo222832');
smo222849v1ar.push(smo222832);
const smo222833 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo222833'] = smo222833;
smo222833.setAttribute('id', 'smo222833');
smo222849v1ar.push(smo222833);
smo222849v1.addTickables(smo222849v1ar)
fmtsmo22284969.joinVoices([smo222849v1]);
// create beam groups and tuplets for format grp smo224512 before formatting
 
// formatting measures in staff group smo224512
fmtsmo17001269.format([smo170012v0,smo173005v0,smo176149v0,smo179265v0,smo182284v0], 288);
const stavesmo170012 = new VF.Stave(2039, 210, 302);
stavesmo170012.setAttribute('id', 'stavesmo170012');
stavesmo170012.setBegBarType(VF.Barline.type.NONE);
stavesmo170012.setContext(context);
stavesmo170012.draw();
smo170012v0.draw(context, stavesmo170012);
const stavesmo173005 = new VF.Stave(2039, 316, 302);
stavesmo173005.setAttribute('id', 'stavesmo173005');
stavesmo173005.setBegBarType(VF.Barline.type.NONE);
stavesmo173005.setContext(context);
stavesmo173005.draw();
smo173005v0.draw(context, stavesmo173005);
const stavesmo176149 = new VF.Stave(2039, 437, 302);
stavesmo176149.setAttribute('id', 'stavesmo176149');
stavesmo176149.setBegBarType(VF.Barline.type.NONE);
stavesmo176149.setContext(context);
stavesmo176149.draw();
smo176149v0.draw(context, stavesmo176149);
const stavesmo179265 = new VF.Stave(2039, 553, 302);
stavesmo179265.setAttribute('id', 'stavesmo179265');
stavesmo179265.setBegBarType(VF.Barline.type.NONE);
stavesmo179265.setContext(context);
stavesmo179265.draw();
smo179265v0.draw(context, stavesmo179265);
const stavesmo182284 = new VF.Stave(2039, 659, 302);
stavesmo182284.setAttribute('id', 'stavesmo182284');
stavesmo182284.setBegBarType(VF.Barline.type.NONE);
stavesmo182284.setContext(context);
stavesmo182284.draw();
smo182284v0.draw(context, stavesmo182284);
// create beam groups and tuplets for format grp smo224514 before formatting
 
// formatting measures in staff group smo224514
fmtsmo18539769.format([smo185397v0,smo188503v0,smo191612v0,smo194698v0], 288);
const stavesmo185397 = new VF.Stave(2039, 780, 302);
stavesmo185397.setAttribute('id', 'stavesmo185397');
stavesmo185397.setBegBarType(VF.Barline.type.NONE);
stavesmo185397.setContext(context);
stavesmo185397.draw();
smo185397v0.draw(context, stavesmo185397);
const stavesmo188503 = new VF.Stave(2039, 896, 302);
stavesmo188503.setAttribute('id', 'stavesmo188503');
stavesmo188503.setBegBarType(VF.Barline.type.NONE);
stavesmo188503.setContext(context);
stavesmo188503.draw();
smo188503v0.draw(context, stavesmo188503);
const stavesmo191612 = new VF.Stave(2039, 1012, 302);
stavesmo191612.setAttribute('id', 'stavesmo191612');
stavesmo191612.setBegBarType(VF.Barline.type.NONE);
stavesmo191612.setContext(context);
stavesmo191612.draw();
smo191612v0.draw(context, stavesmo191612);
const stavesmo194698 = new VF.Stave(2039, 1128, 302);
stavesmo194698.setAttribute('id', 'stavesmo194698');
stavesmo194698.setBegBarType(VF.Barline.type.NONE);
stavesmo194698.setContext(context);
stavesmo194698.draw();
smo194698v0.draw(context, stavesmo194698);
// create beam groups and tuplets for format grp smo224516 before formatting
 
// formatting measures in staff group smo224516
fmtsmo19778769.format([smo197787v0,smo200827v0,smo203881v0,smo206924v0], 288);
const stavesmo197787 = new VF.Stave(2039, 1264, 302);
stavesmo197787.setAttribute('id', 'stavesmo197787');
stavesmo197787.setBegBarType(VF.Barline.type.NONE);
stavesmo197787.setContext(context);
stavesmo197787.draw();
smo197787v0.draw(context, stavesmo197787);
const stavesmo200827 = new VF.Stave(2039, 1400, 302);
stavesmo200827.setAttribute('id', 'stavesmo200827');
stavesmo200827.setBegBarType(VF.Barline.type.NONE);
stavesmo200827.setContext(context);
stavesmo200827.draw();
smo200827v0.draw(context, stavesmo200827);
const stavesmo203881 = new VF.Stave(2039, 1536, 302);
stavesmo203881.setAttribute('id', 'stavesmo203881');
stavesmo203881.setBegBarType(VF.Barline.type.NONE);
stavesmo203881.setContext(context);
stavesmo203881.draw();
smo203881v0.draw(context, stavesmo203881);
const stavesmo206924 = new VF.Stave(2039, 1672, 302);
stavesmo206924.setAttribute('id', 'stavesmo206924');
stavesmo206924.setBegBarType(VF.Barline.type.NONE);
stavesmo206924.setContext(context);
stavesmo206924.draw();
smo206924v0.draw(context, stavesmo206924);
// create beam groups and tuplets for format grp smo211835 before formatting
 
// formatting measures in staff group smo211835
fmtsmo21012369.format([smo210123v0], 288);
const stavesmo210123 = new VF.Stave(2039, 1818, 302);
stavesmo210123.setAttribute('id', 'stavesmo210123');
stavesmo210123.setBegBarType(VF.Barline.type.NONE);
stavesmo210123.setContext(context);
stavesmo210123.draw();
smo210123v0.draw(context, stavesmo210123);
// create beam groups and tuplets for format grp smo224510 before formatting
 
// formatting measures in staff group smo224510
fmtsmo21333669.format([smo213336v0,smo216531v0], 288);
const stavesmo213336 = new VF.Stave(2039, 1924, 302);
stavesmo213336.setAttribute('id', 'stavesmo213336');
stavesmo213336.setBegBarType(VF.Barline.type.NONE);
stavesmo213336.setContext(context);
stavesmo213336.draw();
smo213336v0.draw(context, stavesmo213336);
const stavesmo216531 = new VF.Stave(2039, 2010, 302);
stavesmo216531.setAttribute('id', 'stavesmo216531');
stavesmo216531.setBegBarType(VF.Barline.type.NONE);
stavesmo216531.setContext(context);
stavesmo216531.draw();
smo216531v0.draw(context, stavesmo216531);
// create beam groups and tuplets for format grp smo221348 before formatting
 
// formatting measures in staff group smo221348
fmtsmo21965069.format([smo219650v0], 288);
const stavesmo219650 = new VF.Stave(2039, 2081, 302);
stavesmo219650.setAttribute('id', 'stavesmo219650');
stavesmo219650.setBegBarType(VF.Barline.type.NONE);
stavesmo219650.setContext(context);
stavesmo219650.draw();
smo219650v0.draw(context, stavesmo219650);
// create beam groups and tuplets for format grp smo224504 before formatting
 
// formatting measures in staff group smo224504
fmtsmo22284969.format([smo222849v0,smo222849v1], 288);
const stavesmo222849 = new VF.Stave(2039, 2152, 302);
stavesmo222849.setAttribute('id', 'stavesmo222849');
stavesmo222849.setBegBarType(VF.Barline.type.NONE);
stavesmo222849.setContext(context);
stavesmo222849.draw();
smo222849v0.draw(context, stavesmo222849);
smo222849v1.draw(context, stavesmo222849);
const fmtsmo17002970 = new VF.Formatter();
//
// voices and notes for stave 0 70
const smo170029v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo170029v0ar = [];
const smo170013 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo170013'] = smo170013;
smo170013.setAttribute('id', 'smo170013');
smo170029v0ar.push(smo170013);
smo170029v0.addTickables(smo170029v0ar)
fmtsmo17002970.joinVoices([smo170029v0]);
const fmtsmo17302270 = new VF.Formatter();
//
// voices and notes for stave 1 70
const smo173022v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo173022v0ar = [];
const smo173006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo173006'] = smo173006;
smo173006.setAttribute('id', 'smo173006');
smo173022v0ar.push(smo173006);
smo173022v0.addTickables(smo173022v0ar)
fmtsmo17302270.joinVoices([smo173022v0]);
const fmtsmo17616670 = new VF.Formatter();
//
// voices and notes for stave 2 70
const smo176166v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo176166v0ar = [];
const smo176150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo176150'] = smo176150;
smo176150.setAttribute('id', 'smo176150');
smo176166v0ar.push(smo176150);
smo176166v0.addTickables(smo176166v0ar)
fmtsmo17616670.joinVoices([smo176166v0]);
const fmtsmo17928270 = new VF.Formatter();
//
// voices and notes for stave 3 70
const smo179282v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo179282v0ar = [];
const smo179266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo179266'] = smo179266;
smo179266.setAttribute('id', 'smo179266');
smo179282v0ar.push(smo179266);
smo179282v0.addTickables(smo179282v0ar)
fmtsmo17928270.joinVoices([smo179282v0]);
const fmtsmo18230170 = new VF.Formatter();
//
// voices and notes for stave 4 70
const smo182301v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo182301v0ar = [];
const smo182285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo182285'] = smo182285;
smo182285.setAttribute('id', 'smo182285');
smo182301v0ar.push(smo182285);
smo182301v0.addTickables(smo182301v0ar)
fmtsmo18230170.joinVoices([smo182301v0]);
const fmtsmo18541770 = new VF.Formatter();
//
// voices and notes for stave 5 70
const smo185417v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo185417v0ar = [];
const smo185398 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo185398'] = smo185398;
smo185398.setAttribute('id', 'smo185398');
smo185417v0ar.push(smo185398);
const smo185399 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo185399'] = smo185399;
smo185399.setAttribute('id', 'smo185399');
smo185417v0ar.push(smo185399);
const smo185400 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo185400'] = smo185400;
smo185400.setAttribute('id', 'smo185400');
smo185417v0ar.push(smo185400);
const smo185401 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo185401'] = smo185401;
smo185401.setAttribute('id', 'smo185401');
smo185417v0ar.push(smo185401);
smo185417v0.addTickables(smo185417v0ar)
fmtsmo18541770.joinVoices([smo185417v0]);
const fmtsmo18852070 = new VF.Formatter();
//
// voices and notes for stave 6 70
const smo188520v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo188520v0ar = [];
const smo188504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo188504'] = smo188504;
smo188504.setAttribute('id', 'smo188504');
smo188520v0ar.push(smo188504);
smo188520v0.addTickables(smo188520v0ar)
fmtsmo18852070.joinVoices([smo188520v0]);
const fmtsmo19162970 = new VF.Formatter();
//
// voices and notes for stave 7 70
const smo191629v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo191629v0ar = [];
const smo191613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo191613'] = smo191613;
smo191613.setAttribute('id', 'smo191613');
smo191629v0ar.push(smo191613);
smo191629v0.addTickables(smo191629v0ar)
fmtsmo19162970.joinVoices([smo191629v0]);
const fmtsmo19471570 = new VF.Formatter();
//
// voices and notes for stave 8 70
const smo194715v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo194715v0ar = [];
const smo194699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo194699'] = smo194699;
smo194699.setAttribute('id', 'smo194699');
smo194715v0ar.push(smo194699);
smo194715v0.addTickables(smo194715v0ar)
fmtsmo19471570.joinVoices([smo194715v0]);
const fmtsmo19780470 = new VF.Formatter();
//
// voices and notes for stave 9 70
const smo197804v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo197804v0ar = [];
const smo197788 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo197788'] = smo197788;
smo197788.setAttribute('id', 'smo197788');
smo197804v0ar.push(smo197788);
smo197804v0.addTickables(smo197804v0ar)
fmtsmo19780470.joinVoices([smo197804v0]);
const fmtsmo20084470 = new VF.Formatter();
//
// voices and notes for stave 10 70
const smo200844v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo200844v0ar = [];
const smo200828 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo200828'] = smo200828;
smo200828.setAttribute('id', 'smo200828');
smo200844v0ar.push(smo200828);
smo200844v0.addTickables(smo200844v0ar)
fmtsmo20084470.joinVoices([smo200844v0]);
const fmtsmo20389870 = new VF.Formatter();
//
// voices and notes for stave 11 70
const smo203898v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo203898v0ar = [];
const smo203882 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo203882'] = smo203882;
smo203882.setAttribute('id', 'smo203882');
smo203898v0ar.push(smo203882);
smo203898v0.addTickables(smo203898v0ar)
fmtsmo20389870.joinVoices([smo203898v0]);
const fmtsmo20694170 = new VF.Formatter();
//
// voices and notes for stave 12 70
const smo206941v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo206941v0ar = [];
const smo206925 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo206925'] = smo206925;
smo206925.setAttribute('id', 'smo206925');
smo206941v0ar.push(smo206925);
smo206941v0.addTickables(smo206941v0ar)
fmtsmo20694170.joinVoices([smo206941v0]);
const fmtsmo21014070 = new VF.Formatter();
//
// voices and notes for stave 13 70
const smo210140v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo210140v0ar = [];
const smo210124 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo210124'] = smo210124;
smo210124.setAttribute('id', 'smo210124');
smo210140v0ar.push(smo210124);
smo210140v0.addTickables(smo210140v0ar)
fmtsmo21014070.joinVoices([smo210140v0]);
const fmtsmo21335370 = new VF.Formatter();
//
// voices and notes for stave 14 70
const smo213353v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo213353v0ar = [];
const smo213337 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo213337'] = smo213337;
smo213337.setAttribute('id', 'smo213337');
smo213353v0ar.push(smo213337);
smo213353v0.addTickables(smo213353v0ar)
fmtsmo21335370.joinVoices([smo213353v0]);
const fmtsmo21654870 = new VF.Formatter();
//
// voices and notes for stave 15 70
const smo216548v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo216548v0ar = [];
const smo216532 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo216532'] = smo216532;
smo216532.setAttribute('id', 'smo216532');
smo216548v0ar.push(smo216532);
smo216548v0.addTickables(smo216548v0ar)
fmtsmo21654870.joinVoices([smo216548v0]);
const fmtsmo21967070 = new VF.Formatter();
//
// voices and notes for stave 16 70
const smo219670v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo219670v0ar = [];
const smo219651 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo219651'] = smo219651;
smo219651.setAttribute('id', 'smo219651');
smo219651.addModifier(new VF.Dot(), 0);
smo219670v0ar.push(smo219651);
const smo219652 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n"]}'))
noteHash['smo219652'] = smo219652;
smo219652.setAttribute('id', 'smo219652');
const smo2196520acc = new VF.Accidental('b');
smo219652.addModifier(smo2196520acc, 0);
smo219670v0ar.push(smo219652);
const smo219653 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n"]}'))
noteHash['smo219653'] = smo219653;
smo219653.setAttribute('id', 'smo219653');
smo219670v0ar.push(smo219653);
const smo219654 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo219654'] = smo219654;
smo219654.setAttribute('id', 'smo219654');
smo219670v0ar.push(smo219654);
smo219670v0.addTickables(smo219670v0ar)
fmtsmo21967070.joinVoices([smo219670v0]);
const fmtsmo22286970 = new VF.Formatter();
//
// voices and notes for stave 17 70
const smo222869v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo222869v0ar = [];
const smo222850 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo222850'] = smo222850;
smo222850.setAttribute('id', 'smo222850');
smo222869v0ar.push(smo222850);
const smo222851 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo222851'] = smo222851;
smo222851.setAttribute('id', 'smo222851');
smo222869v0ar.push(smo222851);
smo222869v0.addTickables(smo222869v0ar)
fmtsmo22286970.joinVoices([smo222869v0]);
const smo222869v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo222869v1ar = [];
const smo222852 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo222852'] = smo222852;
smo222852.setAttribute('id', 'smo222852');
smo222869v1ar.push(smo222852);
const smo222853 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo222853'] = smo222853;
smo222853.setAttribute('id', 'smo222853');
smo222869v1ar.push(smo222853);
smo222869v1.addTickables(smo222869v1ar)
fmtsmo22286970.joinVoices([smo222869v1]);
// create beam groups and tuplets for format grp smo224512 before formatting
 
// formatting measures in staff group smo224512
fmtsmo17002970.format([smo170029v0,smo173022v0,smo176166v0,smo179282v0,smo182301v0], 288);
const stavesmo170029 = new VF.Stave(2341, 210, 302);
stavesmo170029.setAttribute('id', 'stavesmo170029');
stavesmo170029.setBegBarType(VF.Barline.type.NONE);
stavesmo170029.setContext(context);
stavesmo170029.draw();
smo170029v0.draw(context, stavesmo170029);
const stavesmo173022 = new VF.Stave(2341, 316, 302);
stavesmo173022.setAttribute('id', 'stavesmo173022');
stavesmo173022.setBegBarType(VF.Barline.type.NONE);
stavesmo173022.setContext(context);
stavesmo173022.draw();
smo173022v0.draw(context, stavesmo173022);
const stavesmo176166 = new VF.Stave(2341, 437, 302);
stavesmo176166.setAttribute('id', 'stavesmo176166');
stavesmo176166.setBegBarType(VF.Barline.type.NONE);
stavesmo176166.setContext(context);
stavesmo176166.draw();
smo176166v0.draw(context, stavesmo176166);
const stavesmo179282 = new VF.Stave(2341, 553, 302);
stavesmo179282.setAttribute('id', 'stavesmo179282');
stavesmo179282.setBegBarType(VF.Barline.type.NONE);
stavesmo179282.setContext(context);
stavesmo179282.draw();
smo179282v0.draw(context, stavesmo179282);
const stavesmo182301 = new VF.Stave(2341, 659, 302);
stavesmo182301.setAttribute('id', 'stavesmo182301');
stavesmo182301.setBegBarType(VF.Barline.type.NONE);
stavesmo182301.setContext(context);
stavesmo182301.draw();
smo182301v0.draw(context, stavesmo182301);
// create beam groups and tuplets for format grp smo224514 before formatting
 
// formatting measures in staff group smo224514
fmtsmo18541770.format([smo185417v0,smo188520v0,smo191629v0,smo194715v0], 288);
const stavesmo185417 = new VF.Stave(2341, 780, 302);
stavesmo185417.setAttribute('id', 'stavesmo185417');
stavesmo185417.setBegBarType(VF.Barline.type.NONE);
stavesmo185417.setContext(context);
stavesmo185417.draw();
smo185417v0.draw(context, stavesmo185417);
const stavesmo188520 = new VF.Stave(2341, 896, 302);
stavesmo188520.setAttribute('id', 'stavesmo188520');
stavesmo188520.setBegBarType(VF.Barline.type.NONE);
stavesmo188520.setContext(context);
stavesmo188520.draw();
smo188520v0.draw(context, stavesmo188520);
const stavesmo191629 = new VF.Stave(2341, 1012, 302);
stavesmo191629.setAttribute('id', 'stavesmo191629');
stavesmo191629.setBegBarType(VF.Barline.type.NONE);
stavesmo191629.setContext(context);
stavesmo191629.draw();
smo191629v0.draw(context, stavesmo191629);
const stavesmo194715 = new VF.Stave(2341, 1128, 302);
stavesmo194715.setAttribute('id', 'stavesmo194715');
stavesmo194715.setBegBarType(VF.Barline.type.NONE);
stavesmo194715.setContext(context);
stavesmo194715.draw();
smo194715v0.draw(context, stavesmo194715);
// create beam groups and tuplets for format grp smo224516 before formatting
 
// formatting measures in staff group smo224516
fmtsmo19780470.format([smo197804v0,smo200844v0,smo203898v0,smo206941v0], 288);
const stavesmo197804 = new VF.Stave(2341, 1264, 302);
stavesmo197804.setAttribute('id', 'stavesmo197804');
stavesmo197804.setBegBarType(VF.Barline.type.NONE);
stavesmo197804.setContext(context);
stavesmo197804.draw();
smo197804v0.draw(context, stavesmo197804);
const stavesmo200844 = new VF.Stave(2341, 1400, 302);
stavesmo200844.setAttribute('id', 'stavesmo200844');
stavesmo200844.setBegBarType(VF.Barline.type.NONE);
stavesmo200844.setContext(context);
stavesmo200844.draw();
smo200844v0.draw(context, stavesmo200844);
const stavesmo203898 = new VF.Stave(2341, 1536, 302);
stavesmo203898.setAttribute('id', 'stavesmo203898');
stavesmo203898.setBegBarType(VF.Barline.type.NONE);
stavesmo203898.setContext(context);
stavesmo203898.draw();
smo203898v0.draw(context, stavesmo203898);
const stavesmo206941 = new VF.Stave(2341, 1672, 302);
stavesmo206941.setAttribute('id', 'stavesmo206941');
stavesmo206941.setBegBarType(VF.Barline.type.NONE);
stavesmo206941.setContext(context);
stavesmo206941.draw();
smo206941v0.draw(context, stavesmo206941);
// create beam groups and tuplets for format grp smo211835 before formatting
 
// formatting measures in staff group smo211835
fmtsmo21014070.format([smo210140v0], 288);
const stavesmo210140 = new VF.Stave(2341, 1818, 302);
stavesmo210140.setAttribute('id', 'stavesmo210140');
stavesmo210140.setBegBarType(VF.Barline.type.NONE);
stavesmo210140.setContext(context);
stavesmo210140.draw();
smo210140v0.draw(context, stavesmo210140);
// create beam groups and tuplets for format grp smo224510 before formatting
 
// formatting measures in staff group smo224510
fmtsmo21335370.format([smo213353v0,smo216548v0], 288);
const stavesmo213353 = new VF.Stave(2341, 1924, 302);
stavesmo213353.setAttribute('id', 'stavesmo213353');
stavesmo213353.setBegBarType(VF.Barline.type.NONE);
stavesmo213353.setContext(context);
stavesmo213353.draw();
smo213353v0.draw(context, stavesmo213353);
const stavesmo216548 = new VF.Stave(2341, 2010, 302);
stavesmo216548.setAttribute('id', 'stavesmo216548');
stavesmo216548.setBegBarType(VF.Barline.type.NONE);
stavesmo216548.setContext(context);
stavesmo216548.draw();
smo216548v0.draw(context, stavesmo216548);
// create beam groups and tuplets for format grp smo221348 before formatting
 
// formatting measures in staff group smo221348
fmtsmo21967070.format([smo219670v0], 288);
const stavesmo219670 = new VF.Stave(2341, 2081, 302);
stavesmo219670.setAttribute('id', 'stavesmo219670');
stavesmo219670.setBegBarType(VF.Barline.type.NONE);
stavesmo219670.setContext(context);
stavesmo219670.draw();
smo219670v0.draw(context, stavesmo219670);
// create beam groups and tuplets for format grp smo224504 before formatting
 
// formatting measures in staff group smo224504
fmtsmo22286970.format([smo222869v0,smo222869v1], 288);
const stavesmo222869 = new VF.Stave(2341, 2152, 302);
stavesmo222869.setAttribute('id', 'stavesmo222869');
stavesmo222869.setBegBarType(VF.Barline.type.NONE);
stavesmo222869.setContext(context);
stavesmo222869.draw();
smo222869v0.draw(context, stavesmo222869);
smo222869v1.draw(context, stavesmo222869);
const fmtsmo17005471 = new VF.Formatter();
//
// voices and notes for stave 0 71
const smo170054v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo170054v0ar = [];
const smo170030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo170030'] = smo170030;
smo170030.setAttribute('id', 'smo170030');
smo170054v0ar.push(smo170030);
const smo170031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo170031'] = smo170031;
smo170031.setAttribute('id', 'smo170031');
smo170054v0ar.push(smo170031);
const smo170032 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo170032'] = smo170032;
smo170032.setAttribute('id', 'smo170032');
const smo170033 = new VF.Annotation('Ki');
smo170033.setAttribute('id', 'smo170033');
smo170033.setFont('times', 12, 'normal');
smo170033.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo170032.addModifier(smo170033);
smo170033.addClass('lyric lyric-0 lyric-hyphen');
smo170054v0ar.push(smo170032);
const smo170034 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo170034'] = smo170034;
smo170034.setAttribute('id', 'smo170034');
smo170054v0ar.push(smo170034);
const smo170035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo170035'] = smo170035;
smo170035.setAttribute('id', 'smo170035');
const smo170036 = new VF.Annotation('ki');
smo170036.setAttribute('id', 'smo170036');
smo170036.setFont('times', 12, 'normal');
smo170036.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo170035.addModifier(smo170036);
smo170036.addClass('lyric lyric-0 lyric-hyphen');
smo170054v0ar.push(smo170035);
const smo170037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo170037'] = smo170037;
smo170037.setAttribute('id', 'smo170037');
const smo170038 = new VF.Annotation('ri');
smo170038.setAttribute('id', 'smo170038');
smo170038.setFont('times', 12, 'normal');
smo170038.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo170037.addModifier(smo170038);
smo170038.addClass('lyric lyric-0');
smo170054v0ar.push(smo170037);
smo170054v0.addTickables(smo170054v0ar)
fmtsmo17005471.joinVoices([smo170054v0]);
const fmtsmo17304771 = new VF.Formatter();
//
// voices and notes for stave 1 71
const smo173047v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo173047v0ar = [];
const smo173023 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo173023'] = smo173023;
smo173023.setAttribute('id', 'smo173023');
smo173047v0ar.push(smo173023);
const smo173024 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo173024'] = smo173024;
smo173024.setAttribute('id', 'smo173024');
smo173047v0ar.push(smo173024);
const smo173025 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo173025'] = smo173025;
smo173025.setAttribute('id', 'smo173025');
const smo173026 = new VF.Annotation('Ki');
smo173026.setAttribute('id', 'smo173026');
smo173026.setFont('times', 12, 'normal');
smo173026.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo173025.addModifier(smo173026);
smo173026.addClass('lyric lyric-0 lyric-hyphen');
smo173047v0ar.push(smo173025);
const smo173027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo173027'] = smo173027;
smo173027.setAttribute('id', 'smo173027');
smo173047v0ar.push(smo173027);
const smo173028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo173028'] = smo173028;
smo173028.setAttribute('id', 'smo173028');
const smo173029 = new VF.Annotation('ki');
smo173029.setAttribute('id', 'smo173029');
smo173029.setFont('times', 12, 'normal');
smo173029.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo173028.addModifier(smo173029);
smo173029.addClass('lyric lyric-0 lyric-hyphen');
smo173047v0ar.push(smo173028);
const smo173030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo173030'] = smo173030;
smo173030.setAttribute('id', 'smo173030');
const smo173031 = new VF.Annotation('ri');
smo173031.setAttribute('id', 'smo173031');
smo173031.setFont('times', 12, 'normal');
smo173031.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo173030.addModifier(smo173031);
smo173031.addClass('lyric lyric-0');
smo173047v0ar.push(smo173030);
smo173047v0.addTickables(smo173047v0ar)
fmtsmo17304771.joinVoices([smo173047v0]);
const fmtsmo17619171 = new VF.Formatter();
//
// voices and notes for stave 2 71
const smo176191v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo176191v0ar = [];
const smo176167 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo176167'] = smo176167;
smo176167.setAttribute('id', 'smo176167');
smo176191v0ar.push(smo176167);
const smo176168 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo176168'] = smo176168;
smo176168.setAttribute('id', 'smo176168');
smo176191v0ar.push(smo176168);
const smo176169 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo176169'] = smo176169;
smo176169.setAttribute('id', 'smo176169');
const smo176170 = new VF.Annotation('Ki');
smo176170.setAttribute('id', 'smo176170');
smo176170.setFont('times', 12, 'normal');
smo176170.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo176169.addModifier(smo176170);
smo176170.addClass('lyric lyric-0 lyric-hyphen');
smo176191v0ar.push(smo176169);
const smo176171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo176171'] = smo176171;
smo176171.setAttribute('id', 'smo176171');
smo176191v0ar.push(smo176171);
const smo176172 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo176172'] = smo176172;
smo176172.setAttribute('id', 'smo176172');
const smo176173 = new VF.Annotation('ki');
smo176173.setAttribute('id', 'smo176173');
smo176173.setFont('times', 12, 'normal');
smo176173.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo176172.addModifier(smo176173);
smo176173.addClass('lyric lyric-0 lyric-hyphen');
smo176191v0ar.push(smo176172);
const smo176174 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo176174'] = smo176174;
smo176174.setAttribute('id', 'smo176174');
const smo176175 = new VF.Annotation('ri');
smo176175.setAttribute('id', 'smo176175');
smo176175.setFont('times', 12, 'normal');
smo176175.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo176174.addModifier(smo176175);
smo176175.addClass('lyric lyric-0');
smo176191v0ar.push(smo176174);
smo176191v0.addTickables(smo176191v0ar)
fmtsmo17619171.joinVoices([smo176191v0]);
const fmtsmo17930771 = new VF.Formatter();
//
// voices and notes for stave 3 71
const smo179307v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo179307v0ar = [];
const smo179283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo179283'] = smo179283;
smo179283.setAttribute('id', 'smo179283');
smo179307v0ar.push(smo179283);
const smo179284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo179284'] = smo179284;
smo179284.setAttribute('id', 'smo179284');
smo179307v0ar.push(smo179284);
const smo179285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo179285'] = smo179285;
smo179285.setAttribute('id', 'smo179285');
const smo179286 = new VF.Annotation('Ki');
smo179286.setAttribute('id', 'smo179286');
smo179286.setFont('times', 12, 'normal');
smo179286.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo179285.addModifier(smo179286);
smo179286.addClass('lyric lyric-0 lyric-hyphen');
smo179307v0ar.push(smo179285);
const smo179287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo179287'] = smo179287;
smo179287.setAttribute('id', 'smo179287');
smo179307v0ar.push(smo179287);
const smo179288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo179288'] = smo179288;
smo179288.setAttribute('id', 'smo179288');
const smo179289 = new VF.Annotation('ki');
smo179289.setAttribute('id', 'smo179289');
smo179289.setFont('times', 12, 'normal');
smo179289.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo179288.addModifier(smo179289);
smo179289.addClass('lyric lyric-0 lyric-hyphen');
smo179307v0ar.push(smo179288);
const smo179290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo179290'] = smo179290;
smo179290.setAttribute('id', 'smo179290');
const smo179291 = new VF.Annotation('ri');
smo179291.setAttribute('id', 'smo179291');
smo179291.setFont('times', 12, 'normal');
smo179291.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo179290.addModifier(smo179291);
smo179291.addClass('lyric lyric-0');
smo179307v0ar.push(smo179290);
smo179307v0.addTickables(smo179307v0ar)
fmtsmo17930771.joinVoices([smo179307v0]);
const fmtsmo18232671 = new VF.Formatter();
//
// voices and notes for stave 4 71
const smo182326v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo182326v0ar = [];
const smo182302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo182302'] = smo182302;
smo182302.setAttribute('id', 'smo182302');
smo182326v0ar.push(smo182302);
const smo182303 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo182303'] = smo182303;
smo182303.setAttribute('id', 'smo182303');
smo182326v0ar.push(smo182303);
const smo182304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo182304'] = smo182304;
smo182304.setAttribute('id', 'smo182304');
const smo182305 = new VF.Annotation('Ki');
smo182305.setAttribute('id', 'smo182305');
smo182305.setFont('times', 12, 'normal');
smo182305.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo182304.addModifier(smo182305);
smo182305.addClass('lyric lyric-0 lyric-hyphen');
smo182326v0ar.push(smo182304);
const smo182306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo182306'] = smo182306;
smo182306.setAttribute('id', 'smo182306');
smo182326v0ar.push(smo182306);
const smo182307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo182307'] = smo182307;
smo182307.setAttribute('id', 'smo182307');
const smo182308 = new VF.Annotation('ki');
smo182308.setAttribute('id', 'smo182308');
smo182308.setFont('times', 12, 'normal');
smo182308.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo182307.addModifier(smo182308);
smo182308.addClass('lyric lyric-0 lyric-hyphen');
smo182326v0ar.push(smo182307);
const smo182309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo182309'] = smo182309;
smo182309.setAttribute('id', 'smo182309');
const smo182310 = new VF.Annotation('ri');
smo182310.setAttribute('id', 'smo182310');
smo182310.setFont('times', 12, 'normal');
smo182310.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo182309.addModifier(smo182310);
smo182310.addClass('lyric lyric-0');
smo182326v0ar.push(smo182309);
smo182326v0.addTickables(smo182326v0ar)
fmtsmo18232671.joinVoices([smo182326v0]);
const fmtsmo18544271 = new VF.Formatter();
//
// voices and notes for stave 5 71
const smo185442v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo185442v0ar = [];
const smo185418 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo185418'] = smo185418;
smo185418.setAttribute('id', 'smo185418');
smo185442v0ar.push(smo185418);
const smo185419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo185419'] = smo185419;
smo185419.setAttribute('id', 'smo185419');
smo185442v0ar.push(smo185419);
const smo185420 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo185420'] = smo185420;
smo185420.setAttribute('id', 'smo185420');
const smo185421 = new VF.Annotation('Ki');
smo185421.setAttribute('id', 'smo185421');
smo185421.setFont('times', 12, 'normal');
smo185421.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo185420.addModifier(smo185421);
smo185421.addClass('lyric lyric-0 lyric-hyphen');
smo185442v0ar.push(smo185420);
const smo185422 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo185422'] = smo185422;
smo185422.setAttribute('id', 'smo185422');
smo185442v0ar.push(smo185422);
const smo185423 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo185423'] = smo185423;
smo185423.setAttribute('id', 'smo185423');
const smo185424 = new VF.Annotation('ki');
smo185424.setAttribute('id', 'smo185424');
smo185424.setFont('times', 12, 'normal');
smo185424.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo185423.addModifier(smo185424);
smo185424.addClass('lyric lyric-0 lyric-hyphen');
smo185442v0ar.push(smo185423);
const smo185425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo185425'] = smo185425;
smo185425.setAttribute('id', 'smo185425');
const smo185426 = new VF.Annotation('ri');
smo185426.setAttribute('id', 'smo185426');
smo185426.setFont('times', 12, 'normal');
smo185426.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo185425.addModifier(smo185426);
smo185426.addClass('lyric lyric-0');
smo185442v0ar.push(smo185425);
smo185442v0.addTickables(smo185442v0ar)
fmtsmo18544271.joinVoices([smo185442v0]);
const fmtsmo18854571 = new VF.Formatter();
//
// voices and notes for stave 6 71
const smo188545v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo188545v0ar = [];
const smo188521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo188521'] = smo188521;
smo188521.setAttribute('id', 'smo188521');
smo188545v0ar.push(smo188521);
const smo188522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo188522'] = smo188522;
smo188522.setAttribute('id', 'smo188522');
smo188545v0ar.push(smo188522);
const smo188523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo188523'] = smo188523;
smo188523.setAttribute('id', 'smo188523');
const smo188524 = new VF.Annotation('Ki');
smo188524.setAttribute('id', 'smo188524');
smo188524.setFont('times', 12, 'normal');
smo188524.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo188523.addModifier(smo188524);
smo188524.addClass('lyric lyric-0 lyric-hyphen');
smo188545v0ar.push(smo188523);
const smo188525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo188525'] = smo188525;
smo188525.setAttribute('id', 'smo188525');
smo188545v0ar.push(smo188525);
const smo188526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo188526'] = smo188526;
smo188526.setAttribute('id', 'smo188526');
const smo188527 = new VF.Annotation('ki');
smo188527.setAttribute('id', 'smo188527');
smo188527.setFont('times', 12, 'normal');
smo188527.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo188526.addModifier(smo188527);
smo188527.addClass('lyric lyric-0 lyric-hyphen');
smo188545v0ar.push(smo188526);
const smo188528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo188528'] = smo188528;
smo188528.setAttribute('id', 'smo188528');
const smo188529 = new VF.Annotation('ri');
smo188529.setAttribute('id', 'smo188529');
smo188529.setFont('times', 12, 'normal');
smo188529.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo188528.addModifier(smo188529);
smo188529.addClass('lyric lyric-0');
smo188545v0ar.push(smo188528);
smo188545v0.addTickables(smo188545v0ar)
fmtsmo18854571.joinVoices([smo188545v0]);
const fmtsmo19165471 = new VF.Formatter();
//
// voices and notes for stave 7 71
const smo191654v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo191654v0ar = [];
const smo191630 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo191630'] = smo191630;
smo191630.setAttribute('id', 'smo191630');
smo191654v0ar.push(smo191630);
const smo191631 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo191631'] = smo191631;
smo191631.setAttribute('id', 'smo191631');
smo191654v0ar.push(smo191631);
const smo191632 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo191632'] = smo191632;
smo191632.setAttribute('id', 'smo191632');
const smo191633 = new VF.Annotation('Ki');
smo191633.setAttribute('id', 'smo191633');
smo191633.setFont('times', 12, 'normal');
smo191633.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo191632.addModifier(smo191633);
smo191633.addClass('lyric lyric-0 lyric-hyphen');
smo191654v0ar.push(smo191632);
const smo191634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo191634'] = smo191634;
smo191634.setAttribute('id', 'smo191634');
smo191654v0ar.push(smo191634);
const smo191635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo191635'] = smo191635;
smo191635.setAttribute('id', 'smo191635');
const smo191636 = new VF.Annotation('ki');
smo191636.setAttribute('id', 'smo191636');
smo191636.setFont('times', 12, 'normal');
smo191636.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo191635.addModifier(smo191636);
smo191636.addClass('lyric lyric-0 lyric-hyphen');
smo191654v0ar.push(smo191635);
const smo191637 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo191637'] = smo191637;
smo191637.setAttribute('id', 'smo191637');
const smo191638 = new VF.Annotation('ri');
smo191638.setAttribute('id', 'smo191638');
smo191638.setFont('times', 12, 'normal');
smo191638.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo191637.addModifier(smo191638);
smo191638.addClass('lyric lyric-0');
smo191654v0ar.push(smo191637);
smo191654v0.addTickables(smo191654v0ar)
fmtsmo19165471.joinVoices([smo191654v0]);
const fmtsmo19474071 = new VF.Formatter();
//
// voices and notes for stave 8 71
const smo194740v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo194740v0ar = [];
const smo194716 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo194716'] = smo194716;
smo194716.setAttribute('id', 'smo194716');
smo194740v0ar.push(smo194716);
const smo194717 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo194717'] = smo194717;
smo194717.setAttribute('id', 'smo194717');
smo194740v0ar.push(smo194717);
const smo194718 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo194718'] = smo194718;
smo194718.setAttribute('id', 'smo194718');
const smo194719 = new VF.Annotation('Ki');
smo194719.setAttribute('id', 'smo194719');
smo194719.setFont('times', 12, 'normal');
smo194719.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo194718.addModifier(smo194719);
smo194719.addClass('lyric lyric-0 lyric-hyphen');
smo194740v0ar.push(smo194718);
const smo194720 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo194720'] = smo194720;
smo194720.setAttribute('id', 'smo194720');
smo194740v0ar.push(smo194720);
const smo194721 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo194721'] = smo194721;
smo194721.setAttribute('id', 'smo194721');
const smo194722 = new VF.Annotation('ki');
smo194722.setAttribute('id', 'smo194722');
smo194722.setFont('times', 12, 'normal');
smo194722.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo194721.addModifier(smo194722);
smo194722.addClass('lyric lyric-0 lyric-hyphen');
smo194740v0ar.push(smo194721);
const smo194723 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo194723'] = smo194723;
smo194723.setAttribute('id', 'smo194723');
const smo194724 = new VF.Annotation('ri');
smo194724.setAttribute('id', 'smo194724');
smo194724.setFont('times', 12, 'normal');
smo194724.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo194723.addModifier(smo194724);
smo194724.addClass('lyric lyric-0');
smo194740v0ar.push(smo194723);
smo194740v0.addTickables(smo194740v0ar)
fmtsmo19474071.joinVoices([smo194740v0]);
const fmtsmo19782971 = new VF.Formatter();
//
// voices and notes for stave 9 71
const smo197829v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo197829v0ar = [];
const smo197805 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo197805'] = smo197805;
smo197805.setAttribute('id', 'smo197805');
smo197829v0ar.push(smo197805);
const smo197806 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo197806'] = smo197806;
smo197806.setAttribute('id', 'smo197806');
smo197829v0ar.push(smo197806);
const smo197807 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo197807'] = smo197807;
smo197807.setAttribute('id', 'smo197807');
const smo197808 = new VF.Annotation('Ki');
smo197808.setAttribute('id', 'smo197808');
smo197808.setFont('times', 12, 'normal');
smo197808.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo197807.addModifier(smo197808);
smo197808.addClass('lyric lyric-0 lyric-hyphen');
smo197829v0ar.push(smo197807);
const smo197809 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo197809'] = smo197809;
smo197809.setAttribute('id', 'smo197809');
smo197829v0ar.push(smo197809);
const smo197810 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo197810'] = smo197810;
smo197810.setAttribute('id', 'smo197810');
const smo197811 = new VF.Annotation('ki');
smo197811.setAttribute('id', 'smo197811');
smo197811.setFont('times', 12, 'normal');
smo197811.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo197810.addModifier(smo197811);
smo197811.addClass('lyric lyric-0 lyric-hyphen');
smo197829v0ar.push(smo197810);
const smo197812 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo197812'] = smo197812;
smo197812.setAttribute('id', 'smo197812');
const smo197813 = new VF.Annotation('ri');
smo197813.setAttribute('id', 'smo197813');
smo197813.setFont('times', 12, 'normal');
smo197813.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo197812.addModifier(smo197813);
smo197813.addClass('lyric lyric-0');
smo197829v0ar.push(smo197812);
smo197829v0.addTickables(smo197829v0ar)
fmtsmo19782971.joinVoices([smo197829v0]);
const fmtsmo20086971 = new VF.Formatter();
//
// voices and notes for stave 10 71
const smo200869v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo200869v0ar = [];
const smo200845 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo200845'] = smo200845;
smo200845.setAttribute('id', 'smo200845');
smo200869v0ar.push(smo200845);
const smo200846 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo200846'] = smo200846;
smo200846.setAttribute('id', 'smo200846');
smo200869v0ar.push(smo200846);
const smo200847 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo200847'] = smo200847;
smo200847.setAttribute('id', 'smo200847');
const smo200848 = new VF.Annotation('Ki');
smo200848.setAttribute('id', 'smo200848');
smo200848.setFont('times', 12, 'normal');
smo200848.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo200847.addModifier(smo200848);
smo200848.addClass('lyric lyric-0 lyric-hyphen');
smo200869v0ar.push(smo200847);
const smo200849 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo200849'] = smo200849;
smo200849.setAttribute('id', 'smo200849');
smo200869v0ar.push(smo200849);
const smo200850 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo200850'] = smo200850;
smo200850.setAttribute('id', 'smo200850');
const smo200851 = new VF.Annotation('ki');
smo200851.setAttribute('id', 'smo200851');
smo200851.setFont('times', 12, 'normal');
smo200851.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo200850.addModifier(smo200851);
smo200851.addClass('lyric lyric-0 lyric-hyphen');
smo200869v0ar.push(smo200850);
const smo200852 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo200852'] = smo200852;
smo200852.setAttribute('id', 'smo200852');
const smo200853 = new VF.Annotation('ri');
smo200853.setAttribute('id', 'smo200853');
smo200853.setFont('times', 12, 'normal');
smo200853.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo200852.addModifier(smo200853);
smo200853.addClass('lyric lyric-0');
smo200869v0ar.push(smo200852);
smo200869v0.addTickables(smo200869v0ar)
fmtsmo20086971.joinVoices([smo200869v0]);
const fmtsmo20392371 = new VF.Formatter();
//
// voices and notes for stave 11 71
const smo203923v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo203923v0ar = [];
const smo203899 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo203899'] = smo203899;
smo203899.setAttribute('id', 'smo203899');
smo203923v0ar.push(smo203899);
const smo203900 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo203900'] = smo203900;
smo203900.setAttribute('id', 'smo203900');
smo203923v0ar.push(smo203900);
const smo203901 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo203901'] = smo203901;
smo203901.setAttribute('id', 'smo203901');
const smo203902 = new VF.Annotation('Ki');
smo203902.setAttribute('id', 'smo203902');
smo203902.setFont('times', 12, 'normal');
smo203902.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo203901.addModifier(smo203902);
smo203902.addClass('lyric lyric-0 lyric-hyphen');
smo203923v0ar.push(smo203901);
const smo203903 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo203903'] = smo203903;
smo203903.setAttribute('id', 'smo203903');
smo203923v0ar.push(smo203903);
const smo203904 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo203904'] = smo203904;
smo203904.setAttribute('id', 'smo203904');
const smo203905 = new VF.Annotation('ki');
smo203905.setAttribute('id', 'smo203905');
smo203905.setFont('times', 12, 'normal');
smo203905.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo203904.addModifier(smo203905);
smo203905.addClass('lyric lyric-0 lyric-hyphen');
smo203923v0ar.push(smo203904);
const smo203906 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo203906'] = smo203906;
smo203906.setAttribute('id', 'smo203906');
const smo203907 = new VF.Annotation('ri');
smo203907.setAttribute('id', 'smo203907');
smo203907.setFont('times', 12, 'normal');
smo203907.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo203906.addModifier(smo203907);
smo203907.addClass('lyric lyric-0');
smo203923v0ar.push(smo203906);
smo203923v0.addTickables(smo203923v0ar)
fmtsmo20392371.joinVoices([smo203923v0]);
const fmtsmo20696671 = new VF.Formatter();
//
// voices and notes for stave 12 71
const smo206966v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo206966v0ar = [];
const smo206942 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo206942'] = smo206942;
smo206942.setAttribute('id', 'smo206942');
smo206966v0ar.push(smo206942);
const smo206943 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo206943'] = smo206943;
smo206943.setAttribute('id', 'smo206943');
smo206966v0ar.push(smo206943);
const smo206944 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo206944'] = smo206944;
smo206944.setAttribute('id', 'smo206944');
const smo206945 = new VF.Annotation('Ki');
smo206945.setAttribute('id', 'smo206945');
smo206945.setFont('times', 12, 'normal');
smo206945.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo206944.addModifier(smo206945);
smo206945.addClass('lyric lyric-0 lyric-hyphen');
smo206966v0ar.push(smo206944);
const smo206946 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo206946'] = smo206946;
smo206946.setAttribute('id', 'smo206946');
smo206966v0ar.push(smo206946);
const smo206947 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo206947'] = smo206947;
smo206947.setAttribute('id', 'smo206947');
const smo206948 = new VF.Annotation('ki');
smo206948.setAttribute('id', 'smo206948');
smo206948.setFont('times', 12, 'normal');
smo206948.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo206947.addModifier(smo206948);
smo206948.addClass('lyric lyric-0 lyric-hyphen');
smo206966v0ar.push(smo206947);
const smo206949 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo206949'] = smo206949;
smo206949.setAttribute('id', 'smo206949');
const smo206950 = new VF.Annotation('ri');
smo206950.setAttribute('id', 'smo206950');
smo206950.setFont('times', 12, 'normal');
smo206950.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo206949.addModifier(smo206950);
smo206950.addClass('lyric lyric-0');
smo206966v0ar.push(smo206949);
smo206966v0.addTickables(smo206966v0ar)
fmtsmo20696671.joinVoices([smo206966v0]);
const fmtsmo21015771 = new VF.Formatter();
//
// voices and notes for stave 13 71
const smo210157v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo210157v0ar = [];
const smo210141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo210141'] = smo210141;
smo210141.setAttribute('id', 'smo210141');
smo210157v0ar.push(smo210141);
smo210157v0.addTickables(smo210157v0ar)
fmtsmo21015771.joinVoices([smo210157v0]);
const fmtsmo21337071 = new VF.Formatter();
//
// voices and notes for stave 14 71
const smo213370v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo213370v0ar = [];
const smo213354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo213354'] = smo213354;
smo213354.setAttribute('id', 'smo213354');
smo213370v0ar.push(smo213354);
smo213370v0.addTickables(smo213370v0ar)
fmtsmo21337071.joinVoices([smo213370v0]);
const fmtsmo21656571 = new VF.Formatter();
//
// voices and notes for stave 15 71
const smo216565v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo216565v0ar = [];
const smo216549 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo216549'] = smo216549;
smo216549.setAttribute('id', 'smo216549');
smo216565v0ar.push(smo216549);
smo216565v0.addTickables(smo216565v0ar)
fmtsmo21656571.joinVoices([smo216565v0]);
const fmtsmo21969071 = new VF.Formatter();
//
// voices and notes for stave 16 71
const smo219690v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo219690v0ar = [];
const smo219671 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo219671'] = smo219671;
smo219671.setAttribute('id', 'smo219671');
smo219690v0ar.push(smo219671);
const smo219672 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo219672'] = smo219672;
smo219672.setAttribute('id', 'smo219672');
smo219690v0ar.push(smo219672);
const smo219673 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo219673'] = smo219673;
smo219673.setAttribute('id', 'smo219673');
smo219690v0ar.push(smo219673);
const smo219674 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo219674'] = smo219674;
smo219674.setAttribute('id', 'smo219674');
smo219690v0ar.push(smo219674);
smo219690v0.addTickables(smo219690v0ar)
fmtsmo21969071.joinVoices([smo219690v0]);
const fmtsmo22288971 = new VF.Formatter();
//
// voices and notes for stave 17 71
const smo222889v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo222889v0ar = [];
const smo222870 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo222870'] = smo222870;
smo222870.setAttribute('id', 'smo222870');
smo222889v0ar.push(smo222870);
const smo222871 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo222871'] = smo222871;
smo222871.setAttribute('id', 'smo222871');
smo222889v0ar.push(smo222871);
smo222889v0.addTickables(smo222889v0ar)
fmtsmo22288971.joinVoices([smo222889v0]);
const smo222889v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo222889v1ar = [];
const smo222872 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo222872'] = smo222872;
smo222872.setAttribute('id', 'smo222872');
smo222889v1ar.push(smo222872);
const smo222873 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo222873'] = smo222873;
smo222873.setAttribute('id', 'smo222873');
smo222889v1ar.push(smo222873);
smo222889v1.addTickables(smo222889v1ar)
fmtsmo22288971.joinVoices([smo222889v1]);
// create beam groups and tuplets for format grp smo224512 before formatting
const dirsmo316180 = smo170032.getStemDirection();
smo170032.setStemDirection(dirsmo316180);
smo170034.setStemDirection(dirsmo316180);
const smo316180 = new VF.Beam([smo170032,smo170034]);
const dirsmo316183 = smo173025.getStemDirection();
smo173025.setStemDirection(dirsmo316183);
smo173027.setStemDirection(dirsmo316183);
const smo316183 = new VF.Beam([smo173025,smo173027]);
const dirsmo316186 = smo176169.getStemDirection();
smo176169.setStemDirection(dirsmo316186);
smo176171.setStemDirection(dirsmo316186);
const smo316186 = new VF.Beam([smo176169,smo176171]);
const dirsmo316189 = smo179285.getStemDirection();
smo179285.setStemDirection(dirsmo316189);
smo179287.setStemDirection(dirsmo316189);
const smo316189 = new VF.Beam([smo179285,smo179287]);
const dirsmo316192 = smo182304.getStemDirection();
smo182304.setStemDirection(dirsmo316192);
smo182306.setStemDirection(dirsmo316192);
const smo316192 = new VF.Beam([smo182304,smo182306]);
 
// formatting measures in staff group smo224512
fmtsmo17005471.format([smo170054v0,smo173047v0,smo176191v0,smo179307v0,smo182326v0], 288);
const stavesmo170054 = new VF.Stave(2643, 210, 302);
stavesmo170054.setAttribute('id', 'stavesmo170054');
stavesmo170054.setBegBarType(VF.Barline.type.NONE);
stavesmo170054.setContext(context);
stavesmo170054.draw();
smo170054v0.draw(context, stavesmo170054);
smo316180.setContext(context);
smo316180.draw();
const stavesmo173047 = new VF.Stave(2643, 316, 302);
stavesmo173047.setAttribute('id', 'stavesmo173047');
stavesmo173047.setBegBarType(VF.Barline.type.NONE);
stavesmo173047.setContext(context);
stavesmo173047.draw();
smo173047v0.draw(context, stavesmo173047);
smo316183.setContext(context);
smo316183.draw();
const stavesmo176191 = new VF.Stave(2643, 437, 302);
stavesmo176191.setAttribute('id', 'stavesmo176191');
stavesmo176191.setBegBarType(VF.Barline.type.NONE);
stavesmo176191.setContext(context);
stavesmo176191.draw();
smo176191v0.draw(context, stavesmo176191);
smo316186.setContext(context);
smo316186.draw();
const stavesmo179307 = new VF.Stave(2643, 553, 302);
stavesmo179307.setAttribute('id', 'stavesmo179307');
stavesmo179307.setBegBarType(VF.Barline.type.NONE);
stavesmo179307.setContext(context);
stavesmo179307.draw();
smo179307v0.draw(context, stavesmo179307);
smo316189.setContext(context);
smo316189.draw();
const stavesmo182326 = new VF.Stave(2643, 659, 302);
stavesmo182326.setAttribute('id', 'stavesmo182326');
stavesmo182326.setBegBarType(VF.Barline.type.NONE);
stavesmo182326.setContext(context);
stavesmo182326.draw();
smo182326v0.draw(context, stavesmo182326);
smo316192.setContext(context);
smo316192.draw();
// create beam groups and tuplets for format grp smo224514 before formatting
const dirsmo316195 = smo185420.getStemDirection();
smo185420.setStemDirection(dirsmo316195);
smo185422.setStemDirection(dirsmo316195);
const smo316195 = new VF.Beam([smo185420,smo185422]);
const dirsmo316198 = smo188523.getStemDirection();
smo188523.setStemDirection(dirsmo316198);
smo188525.setStemDirection(dirsmo316198);
const smo316198 = new VF.Beam([smo188523,smo188525]);
const dirsmo316201 = smo191632.getStemDirection();
smo191632.setStemDirection(dirsmo316201);
smo191634.setStemDirection(dirsmo316201);
const smo316201 = new VF.Beam([smo191632,smo191634]);
const dirsmo316204 = smo194718.getStemDirection();
smo194718.setStemDirection(dirsmo316204);
smo194720.setStemDirection(dirsmo316204);
const smo316204 = new VF.Beam([smo194718,smo194720]);
 
// formatting measures in staff group smo224514
fmtsmo18544271.format([smo185442v0,smo188545v0,smo191654v0,smo194740v0], 288);
const stavesmo185442 = new VF.Stave(2643, 780, 302);
stavesmo185442.setAttribute('id', 'stavesmo185442');
stavesmo185442.setBegBarType(VF.Barline.type.NONE);
stavesmo185442.setContext(context);
stavesmo185442.draw();
smo185442v0.draw(context, stavesmo185442);
smo316195.setContext(context);
smo316195.draw();
const stavesmo188545 = new VF.Stave(2643, 896, 302);
stavesmo188545.setAttribute('id', 'stavesmo188545');
stavesmo188545.setBegBarType(VF.Barline.type.NONE);
stavesmo188545.setContext(context);
stavesmo188545.draw();
smo188545v0.draw(context, stavesmo188545);
smo316198.setContext(context);
smo316198.draw();
const stavesmo191654 = new VF.Stave(2643, 1012, 302);
stavesmo191654.setAttribute('id', 'stavesmo191654');
stavesmo191654.setBegBarType(VF.Barline.type.NONE);
stavesmo191654.setContext(context);
stavesmo191654.draw();
smo191654v0.draw(context, stavesmo191654);
smo316201.setContext(context);
smo316201.draw();
const stavesmo194740 = new VF.Stave(2643, 1128, 302);
stavesmo194740.setAttribute('id', 'stavesmo194740');
stavesmo194740.setBegBarType(VF.Barline.type.NONE);
stavesmo194740.setContext(context);
stavesmo194740.draw();
smo194740v0.draw(context, stavesmo194740);
smo316204.setContext(context);
smo316204.draw();
// create beam groups and tuplets for format grp smo224516 before formatting
const dirsmo316207 = smo197807.getStemDirection();
smo197807.setStemDirection(dirsmo316207);
smo197809.setStemDirection(dirsmo316207);
const smo316207 = new VF.Beam([smo197807,smo197809]);
const dirsmo316210 = smo200847.getStemDirection();
smo200847.setStemDirection(dirsmo316210);
smo200849.setStemDirection(dirsmo316210);
const smo316210 = new VF.Beam([smo200847,smo200849]);
const dirsmo316213 = smo203901.getStemDirection();
smo203901.setStemDirection(dirsmo316213);
smo203903.setStemDirection(dirsmo316213);
const smo316213 = new VF.Beam([smo203901,smo203903]);
const dirsmo316216 = smo206944.getStemDirection();
smo206944.setStemDirection(dirsmo316216);
smo206946.setStemDirection(dirsmo316216);
const smo316216 = new VF.Beam([smo206944,smo206946]);
 
// formatting measures in staff group smo224516
fmtsmo19782971.format([smo197829v0,smo200869v0,smo203923v0,smo206966v0], 288);
const stavesmo197829 = new VF.Stave(2643, 1264, 302);
stavesmo197829.setAttribute('id', 'stavesmo197829');
stavesmo197829.setBegBarType(VF.Barline.type.NONE);
stavesmo197829.setContext(context);
stavesmo197829.draw();
smo197829v0.draw(context, stavesmo197829);
smo316207.setContext(context);
smo316207.draw();
const stavesmo200869 = new VF.Stave(2643, 1400, 302);
stavesmo200869.setAttribute('id', 'stavesmo200869');
stavesmo200869.setBegBarType(VF.Barline.type.NONE);
stavesmo200869.setContext(context);
stavesmo200869.draw();
smo200869v0.draw(context, stavesmo200869);
smo316210.setContext(context);
smo316210.draw();
const stavesmo203923 = new VF.Stave(2643, 1536, 302);
stavesmo203923.setAttribute('id', 'stavesmo203923');
stavesmo203923.setBegBarType(VF.Barline.type.NONE);
stavesmo203923.setContext(context);
stavesmo203923.draw();
smo203923v0.draw(context, stavesmo203923);
smo316213.setContext(context);
smo316213.draw();
const stavesmo206966 = new VF.Stave(2643, 1672, 302);
stavesmo206966.setAttribute('id', 'stavesmo206966');
stavesmo206966.setBegBarType(VF.Barline.type.NONE);
stavesmo206966.setContext(context);
stavesmo206966.draw();
smo206966v0.draw(context, stavesmo206966);
smo316216.setContext(context);
smo316216.draw();
// create beam groups and tuplets for format grp smo211835 before formatting
 
// formatting measures in staff group smo211835
fmtsmo21015771.format([smo210157v0], 288);
const stavesmo210157 = new VF.Stave(2643, 1818, 302);
stavesmo210157.setAttribute('id', 'stavesmo210157');
stavesmo210157.setBegBarType(VF.Barline.type.NONE);
stavesmo210157.setContext(context);
stavesmo210157.draw();
smo210157v0.draw(context, stavesmo210157);
// create beam groups and tuplets for format grp smo224510 before formatting
 
// formatting measures in staff group smo224510
fmtsmo21337071.format([smo213370v0,smo216565v0], 288);
const stavesmo213370 = new VF.Stave(2643, 1924, 302);
stavesmo213370.setAttribute('id', 'stavesmo213370');
stavesmo213370.setBegBarType(VF.Barline.type.NONE);
stavesmo213370.setContext(context);
stavesmo213370.draw();
smo213370v0.draw(context, stavesmo213370);
const stavesmo216565 = new VF.Stave(2643, 2010, 302);
stavesmo216565.setAttribute('id', 'stavesmo216565');
stavesmo216565.setBegBarType(VF.Barline.type.NONE);
stavesmo216565.setContext(context);
stavesmo216565.draw();
smo216565v0.draw(context, stavesmo216565);
// create beam groups and tuplets for format grp smo221348 before formatting
 
// formatting measures in staff group smo221348
fmtsmo21969071.format([smo219690v0], 288);
const stavesmo219690 = new VF.Stave(2643, 2081, 302);
stavesmo219690.setAttribute('id', 'stavesmo219690');
stavesmo219690.setBegBarType(VF.Barline.type.NONE);
stavesmo219690.setContext(context);
stavesmo219690.draw();
smo219690v0.draw(context, stavesmo219690);
// create beam groups and tuplets for format grp smo224504 before formatting
 
// formatting measures in staff group smo224504
fmtsmo22288971.format([smo222889v0,smo222889v1], 288);
const stavesmo222889 = new VF.Stave(2643, 2152, 302);
stavesmo222889.setAttribute('id', 'stavesmo222889');
stavesmo222889.setBegBarType(VF.Barline.type.NONE);
stavesmo222889.setContext(context);
stavesmo222889.draw();
smo222889v0.draw(context, stavesmo222889);
smo222889v1.draw(context, stavesmo222889);
const rightsmo224504stavesmo17005417 = new VF.StaveConnector(stavesmo170054, stavesmo182326).setType(0);
rightsmo224504stavesmo17005417.setContext(context).draw();
const rightsmo224504stavesmo18544217 = new VF.StaveConnector(stavesmo185442, stavesmo194740).setType(0);
rightsmo224504stavesmo18544217.setContext(context).draw();
const rightsmo224504stavesmo19782917 = new VF.StaveConnector(stavesmo197829, stavesmo206966).setType(0);
rightsmo224504stavesmo19782917.setContext(context).draw();
const rightsmo224504stavesmo21337017 = new VF.StaveConnector(stavesmo213370, stavesmo216565).setType(0);
rightsmo224504stavesmo21337017.setContext(context).draw();
const smo325590 = new VF.StaveTie({ first_note: smo169852, last_note: smo169854, first_indices: [0], last_indices: [0]});
smo325590.setContext(context).draw();
const smo325591 = new VF.StaveTie({ first_note: smo169880, last_note: smo169882, first_indices: [0], last_indices: [0]});
smo325591.setContext(context).draw();
const smo325592 = new VF.StaveTie({ first_note: smo169883, last_note: smo169901, first_indices: [0], last_indices: [0]});
smo325592.setContext(context).draw();
const smo325593 = new VF.StaveTie({ first_note: smo169905, last_note: smo169907, first_indices: [0], last_indices: [0]});
smo325593.setContext(context).draw();
const smo325594 = new VF.StaveTie({ first_note: smo169936, last_note: smo169938, first_indices: [0], last_indices: [0]});
smo325594.setContext(context).draw();
const smo325595 = new VF.StaveTie({ first_note: smo169939, last_note: smo169957, first_indices: [0], last_indices: [0]});
smo325595.setContext(context).draw();
const smo325596 = new VF.StaveTie({ first_note: smo170032, last_note: smo170034, first_indices: [0], last_indices: [0]});
smo325596.setContext(context).draw();
const smo325597 = new VF.StaveTie({ first_note: smo172846, last_note: smo172848, first_indices: [0], last_indices: [0]});
smo325597.setContext(context).draw();
const smo325598 = new VF.StaveTie({ first_note: smo172874, last_note: smo172876, first_indices: [0], last_indices: [0]});
smo325598.setContext(context).draw();
const smo325599 = new VF.StaveTie({ first_note: smo172877, last_note: smo172895, first_indices: [0], last_indices: [0]});
smo325599.setContext(context).draw();
const smo325600 = new VF.StaveTie({ first_note: smo172899, last_note: smo172901, first_indices: [0], last_indices: [0]});
smo325600.setContext(context).draw();
const smo325601 = new VF.StaveTie({ first_note: smo172930, last_note: smo172932, first_indices: [0], last_indices: [0]});
smo325601.setContext(context).draw();
const smo325602 = new VF.StaveTie({ first_note: smo172933, last_note: smo172951, first_indices: [0], last_indices: [0]});
smo325602.setContext(context).draw();
const smo325603 = new VF.StaveTie({ first_note: smo173025, last_note: smo173027, first_indices: [0], last_indices: [0]});
smo325603.setContext(context).draw();
const smo325604 = new VF.StaveTie({ first_note: smo175989, last_note: smo175991, first_indices: [0], last_indices: [0]});
smo325604.setContext(context).draw();
const smo325605 = new VF.StaveTie({ first_note: smo176017, last_note: smo176019, first_indices: [0], last_indices: [0]});
smo325605.setContext(context).draw();
const smo325606 = new VF.StaveTie({ first_note: smo176020, last_note: smo176038, first_indices: [0], last_indices: [0]});
smo325606.setContext(context).draw();
const smo325607 = new VF.StaveTie({ first_note: smo176042, last_note: smo176044, first_indices: [0], last_indices: [0]});
smo325607.setContext(context).draw();
const smo325608 = new VF.StaveTie({ first_note: smo176073, last_note: smo176075, first_indices: [0], last_indices: [0]});
smo325608.setContext(context).draw();
const smo325609 = new VF.StaveTie({ first_note: smo176076, last_note: smo176094, first_indices: [0], last_indices: [0]});
smo325609.setContext(context).draw();
const smo325610 = new VF.StaveTie({ first_note: smo176169, last_note: smo176171, first_indices: [0], last_indices: [0]});
smo325610.setContext(context).draw();
const smo325611 = new VF.StaveTie({ first_note: smo179105, last_note: smo179107, first_indices: [0], last_indices: [0]});
smo325611.setContext(context).draw();
const smo325612 = new VF.StaveTie({ first_note: smo179133, last_note: smo179135, first_indices: [0], last_indices: [0]});
smo325612.setContext(context).draw();
const smo325613 = new VF.StaveTie({ first_note: smo179136, last_note: smo179154, first_indices: [0], last_indices: [0]});
smo325613.setContext(context).draw();
const smo325614 = new VF.StaveTie({ first_note: smo179158, last_note: smo179160, first_indices: [0], last_indices: [0]});
smo325614.setContext(context).draw();
const smo325615 = new VF.StaveTie({ first_note: smo179189, last_note: smo179191, first_indices: [0], last_indices: [0]});
smo325615.setContext(context).draw();
const smo325616 = new VF.StaveTie({ first_note: smo179192, last_note: smo179210, first_indices: [0], last_indices: [0]});
smo325616.setContext(context).draw();
const smo325617 = new VF.StaveTie({ first_note: smo179285, last_note: smo179287, first_indices: [0], last_indices: [0]});
smo325617.setContext(context).draw();
const smo325618 = new VF.StaveTie({ first_note: smo182124, last_note: smo182126, first_indices: [0], last_indices: [0]});
smo325618.setContext(context).draw();
const smo325619 = new VF.StaveTie({ first_note: smo182152, last_note: smo182154, first_indices: [0], last_indices: [0]});
smo325619.setContext(context).draw();
const smo325620 = new VF.StaveTie({ first_note: smo182155, last_note: smo182173, first_indices: [0], last_indices: [0]});
smo325620.setContext(context).draw();
const smo325621 = new VF.StaveTie({ first_note: smo182177, last_note: smo182179, first_indices: [0], last_indices: [0]});
smo325621.setContext(context).draw();
const smo325622 = new VF.StaveTie({ first_note: smo182208, last_note: smo182210, first_indices: [0], last_indices: [0]});
smo325622.setContext(context).draw();
const smo325623 = new VF.StaveTie({ first_note: smo182211, last_note: smo182229, first_indices: [0], last_indices: [0]});
smo325623.setContext(context).draw();
const smo325624 = new VF.StaveTie({ first_note: smo182304, last_note: smo182306, first_indices: [0], last_indices: [0]});
smo325624.setContext(context).draw();
const smo325625 = new VF.StaveTie({ first_note: smo185231, last_note: smo185233, first_indices: [0], last_indices: [0]});
smo325625.setContext(context).draw();
const smo325626 = new VF.StaveTie({ first_note: smo185259, last_note: smo185261, first_indices: [0], last_indices: [0]});
smo325626.setContext(context).draw();
const smo325627 = new VF.StaveTie({ first_note: smo185262, last_note: smo185280, first_indices: [0], last_indices: [0]});
smo325627.setContext(context).draw();
const smo325628 = new VF.StaveTie({ first_note: smo185284, last_note: smo185286, first_indices: [0], last_indices: [0]});
smo325628.setContext(context).draw();
const smo325629 = new VF.StaveTie({ first_note: smo185315, last_note: smo185317, first_indices: [0], last_indices: [0]});
smo325629.setContext(context).draw();
const smo325630 = new VF.StaveTie({ first_note: smo185318, last_note: smo185336, first_indices: [0], last_indices: [0]});
smo325630.setContext(context).draw();
const smo325631 = new VF.StaveTie({ first_note: smo185420, last_note: smo185422, first_indices: [0], last_indices: [0]});
smo325631.setContext(context).draw();
const smo325632 = new VF.StaveTie({ first_note: smo188343, last_note: smo188345, first_indices: [0], last_indices: [0]});
smo325632.setContext(context).draw();
const smo325633 = new VF.StaveTie({ first_note: smo188371, last_note: smo188373, first_indices: [0], last_indices: [0]});
smo325633.setContext(context).draw();
const smo325634 = new VF.StaveTie({ first_note: smo188374, last_note: smo188392, first_indices: [0], last_indices: [0]});
smo325634.setContext(context).draw();
const smo325635 = new VF.StaveTie({ first_note: smo188396, last_note: smo188398, first_indices: [0], last_indices: [0]});
smo325635.setContext(context).draw();
const smo325636 = new VF.StaveTie({ first_note: smo188427, last_note: smo188429, first_indices: [0], last_indices: [0]});
smo325636.setContext(context).draw();
const smo325637 = new VF.StaveTie({ first_note: smo188430, last_note: smo188448, first_indices: [0], last_indices: [0]});
smo325637.setContext(context).draw();
const smo325638 = new VF.StaveTie({ first_note: smo188523, last_note: smo188525, first_indices: [0], last_indices: [0]});
smo325638.setContext(context).draw();
const smo325639 = new VF.StaveTie({ first_note: smo191452, last_note: smo191454, first_indices: [0], last_indices: [0]});
smo325639.setContext(context).draw();
const smo325640 = new VF.StaveTie({ first_note: smo191480, last_note: smo191482, first_indices: [0], last_indices: [0]});
smo325640.setContext(context).draw();
const smo325641 = new VF.StaveTie({ first_note: smo191483, last_note: smo191501, first_indices: [0], last_indices: [0]});
smo325641.setContext(context).draw();
const smo325642 = new VF.StaveTie({ first_note: smo191505, last_note: smo191507, first_indices: [0], last_indices: [0]});
smo325642.setContext(context).draw();
const smo325643 = new VF.StaveTie({ first_note: smo191536, last_note: smo191538, first_indices: [0], last_indices: [0]});
smo325643.setContext(context).draw();
const smo325644 = new VF.StaveTie({ first_note: smo191539, last_note: smo191557, first_indices: [0], last_indices: [0]});
smo325644.setContext(context).draw();
const smo325645 = new VF.StaveTie({ first_note: smo191632, last_note: smo191634, first_indices: [0], last_indices: [0]});
smo325645.setContext(context).draw();
const smo325646 = new VF.StaveTie({ first_note: smo194538, last_note: smo194540, first_indices: [0], last_indices: [0]});
smo325646.setContext(context).draw();
const smo325647 = new VF.StaveTie({ first_note: smo194566, last_note: smo194568, first_indices: [0], last_indices: [0]});
smo325647.setContext(context).draw();
const smo325648 = new VF.StaveTie({ first_note: smo194569, last_note: smo194587, first_indices: [0], last_indices: [0]});
smo325648.setContext(context).draw();
const smo325649 = new VF.StaveTie({ first_note: smo194591, last_note: smo194593, first_indices: [0], last_indices: [0]});
smo325649.setContext(context).draw();
const smo325650 = new VF.StaveTie({ first_note: smo194622, last_note: smo194624, first_indices: [0], last_indices: [0]});
smo325650.setContext(context).draw();
const smo325651 = new VF.StaveTie({ first_note: smo194625, last_note: smo194643, first_indices: [0], last_indices: [0]});
smo325651.setContext(context).draw();
const smo325652 = new VF.StaveTie({ first_note: smo194718, last_note: smo194720, first_indices: [0], last_indices: [0]});
smo325652.setContext(context).draw();
const smo325653 = new VF.StaveTie({ first_note: smo197627, last_note: smo197629, first_indices: [0], last_indices: [0]});
smo325653.setContext(context).draw();
const smo325654 = new VF.StaveTie({ first_note: smo197655, last_note: smo197657, first_indices: [0], last_indices: [0]});
smo325654.setContext(context).draw();
const smo325655 = new VF.StaveTie({ first_note: smo197658, last_note: smo197676, first_indices: [0], last_indices: [0]});
smo325655.setContext(context).draw();
const smo325656 = new VF.StaveTie({ first_note: smo197680, last_note: smo197682, first_indices: [0], last_indices: [0]});
smo325656.setContext(context).draw();
const smo325657 = new VF.StaveTie({ first_note: smo197711, last_note: smo197713, first_indices: [0], last_indices: [0]});
smo325657.setContext(context).draw();
const smo325658 = new VF.StaveTie({ first_note: smo197714, last_note: smo197732, first_indices: [0], last_indices: [0]});
smo325658.setContext(context).draw();
const smo325659 = new VF.StaveTie({ first_note: smo197807, last_note: smo197809, first_indices: [0], last_indices: [0]});
smo325659.setContext(context).draw();
const smo325660 = new VF.StaveTie({ first_note: smo200667, last_note: smo200669, first_indices: [0], last_indices: [0]});
smo325660.setContext(context).draw();
const smo325661 = new VF.StaveTie({ first_note: smo200695, last_note: smo200697, first_indices: [0], last_indices: [0]});
smo325661.setContext(context).draw();
const smo325662 = new VF.StaveTie({ first_note: smo200698, last_note: smo200716, first_indices: [0], last_indices: [0]});
smo325662.setContext(context).draw();
const smo325663 = new VF.StaveTie({ first_note: smo200720, last_note: smo200722, first_indices: [0], last_indices: [0]});
smo325663.setContext(context).draw();
const smo325664 = new VF.StaveTie({ first_note: smo200751, last_note: smo200753, first_indices: [0], last_indices: [0]});
smo325664.setContext(context).draw();
const smo325665 = new VF.StaveTie({ first_note: smo200754, last_note: smo200772, first_indices: [0], last_indices: [0]});
smo325665.setContext(context).draw();
const smo325666 = new VF.StaveTie({ first_note: smo200847, last_note: smo200849, first_indices: [0], last_indices: [0]});
smo325666.setContext(context).draw();
const smo325667 = new VF.StaveTie({ first_note: smo203721, last_note: smo203723, first_indices: [0], last_indices: [0]});
smo325667.setContext(context).draw();
const smo325668 = new VF.StaveTie({ first_note: smo203749, last_note: smo203751, first_indices: [0], last_indices: [0]});
smo325668.setContext(context).draw();
const smo325669 = new VF.StaveTie({ first_note: smo203752, last_note: smo203770, first_indices: [0], last_indices: [0]});
smo325669.setContext(context).draw();
const smo325670 = new VF.StaveTie({ first_note: smo203774, last_note: smo203776, first_indices: [0], last_indices: [0]});
smo325670.setContext(context).draw();
const smo325671 = new VF.StaveTie({ first_note: smo203805, last_note: smo203807, first_indices: [0], last_indices: [0]});
smo325671.setContext(context).draw();
const smo325672 = new VF.StaveTie({ first_note: smo203808, last_note: smo203826, first_indices: [0], last_indices: [0]});
smo325672.setContext(context).draw();
const smo325673 = new VF.StaveTie({ first_note: smo203901, last_note: smo203903, first_indices: [0], last_indices: [0]});
smo325673.setContext(context).draw();
const smo325674 = new VF.StaveTie({ first_note: smo206764, last_note: smo206766, first_indices: [0], last_indices: [0]});
smo325674.setContext(context).draw();
const smo325675 = new VF.StaveTie({ first_note: smo206792, last_note: smo206794, first_indices: [0], last_indices: [0]});
smo325675.setContext(context).draw();
const smo325676 = new VF.StaveTie({ first_note: smo206795, last_note: smo206813, first_indices: [0], last_indices: [0]});
smo325676.setContext(context).draw();
const smo325677 = new VF.StaveTie({ first_note: smo206817, last_note: smo206819, first_indices: [0], last_indices: [0]});
smo325677.setContext(context).draw();
const smo325678 = new VF.StaveTie({ first_note: smo206848, last_note: smo206850, first_indices: [0], last_indices: [0]});
smo325678.setContext(context).draw();
const smo325679 = new VF.StaveTie({ first_note: smo206851, last_note: smo206869, first_indices: [0], last_indices: [0]});
smo325679.setContext(context).draw();
const smo325680 = new VF.StaveTie({ first_note: smo206944, last_note: smo206946, first_indices: [0], last_indices: [0]});
smo325680.setContext(context).draw();
const smo325681 = new VF.StaveTie({ first_note: smo209983, last_note: smo209984, first_indices: [0,1,2], last_indices: [0,1,2]});
smo325681.setContext(context).draw();
const smo325682 = new VF.StaveTie({ first_note: smo210007, last_note: smo210008, first_indices: [0,1,2], last_indices: [0,1,2]});
smo325682.setContext(context).draw();
const smo325683 = new VF.StaveTie({ first_note: smo210026, last_note: smo210027, first_indices: [0,1,2], last_indices: [0,1,2]});
smo325683.setContext(context).draw();
const smo325684 = new VF.StaveTie({ first_note: smo210049, last_note: smo210050, first_indices: [0,1,2], last_indices: [0,1,2]});
smo325684.setContext(context).draw();
const smo325685 = new VF.StaveTie({ first_note: smo210051, last_note: smo210068, first_indices: [0,1,2], last_indices: [0,1,2]});
smo325685.setContext(context).draw();
const smo325686 = new VF.StaveTie({ first_note: smo210069, last_note: smo210070, first_indices: [0,1], last_indices: [0,1]});
smo325686.setContext(context).draw();
const smo325687 = new VF.StaveTie({ first_note: smo213196, last_note: smo213197, first_indices: [0,1,2], last_indices: [0,1,2]});
smo325687.setContext(context).draw();
const smo325688 = new VF.StaveTie({ first_note: smo213220, last_note: smo213221, first_indices: [0,1,2], last_indices: [0,1,2]});
smo325688.setContext(context).draw();
const smo325689 = new VF.StaveTie({ first_note: smo213239, last_note: smo213240, first_indices: [0,1,2], last_indices: [0,1,2]});
smo325689.setContext(context).draw();
const smo325690 = new VF.StaveTie({ first_note: smo213262, last_note: smo213263, first_indices: [0,1,2], last_indices: [0,1,2]});
smo325690.setContext(context).draw();
const smo325691 = new VF.StaveTie({ first_note: smo213264, last_note: smo213281, first_indices: [0,1,2], last_indices: [0,1,2]});
smo325691.setContext(context).draw();
const smo325692 = new VF.StaveTie({ first_note: smo213282, last_note: smo213283, first_indices: [0,1], last_indices: [0,1]});
smo325692.setContext(context).draw();
const smo325693 = new VF.StaveTie({ first_note: smo216391, last_note: smo216392, first_indices: [0], last_indices: [0]});
smo325693.setContext(context).draw();
const smo325694 = new VF.StaveTie({ first_note: smo216415, last_note: smo216416, first_indices: [0], last_indices: [0]});
smo325694.setContext(context).draw();
const smo325695 = new VF.StaveTie({ first_note: smo216434, last_note: smo216435, first_indices: [0], last_indices: [0]});
smo325695.setContext(context).draw();
const smo325696 = new VF.StaveTie({ first_note: smo216457, last_note: smo216458, first_indices: [0], last_indices: [0]});
smo325696.setContext(context).draw();
const smo325697 = new VF.StaveTie({ first_note: smo216459, last_note: smo216476, first_indices: [0], last_indices: [0]});
smo325697.setContext(context).draw();
const smo325698 = new VF.StaveTie({ first_note: smo216477, last_note: smo216478, first_indices: [0], last_indices: [0]});
smo325698.setContext(context).draw();
const smo325699 = new VF.StaveTie({ first_note: smo219532, last_note: smo219533, first_indices: [0], last_indices: [0]});
smo325699.setContext(context).draw();
const smo325700 = new VF.StaveTie({ first_note: smo219534, last_note: smo219551, first_indices: [0], last_indices: [0]});
smo325700.setContext(context).draw();
const smo325701 = new VF.StaveTie({ first_note: smo219552, last_note: smo219553, first_indices: [0], last_indices: [0]});
smo325701.setContext(context).draw();
const smo325702 = new VF.StaveTie({ first_note: smo219554, last_note: smo219571, first_indices: [0], last_indices: [0]});
smo325702.setContext(context).draw();
const smo325703 = new VF.StaveTie({ first_note: smo219572, last_note: smo219573, first_indices: [0], last_indices: [0]});
smo325703.setContext(context).draw();
const smo325704 = new VF.StaveTie({ first_note: smo219574, last_note: smo219591, first_indices: [0], last_indices: [0]});
smo325704.setContext(context).draw();
const smo325705 = new VF.StaveTie({ first_note: smo219612, last_note: smo219613, first_indices: [0], last_indices: [0]});
smo325705.setContext(context).draw();
const smo325706 = new VF.StaveTie({ first_note: smo219614, last_note: smo219631, first_indices: [0], last_indices: [0]});
smo325706.setContext(context).draw();
const smo325707 = new VF.StaveTie({ first_note: smo219632, last_note: smo219633, first_indices: [0], last_indices: [0]});
smo325707.setContext(context).draw();
const smo325708 = new VF.StaveTie({ first_note: smo219634, last_note: smo219651, first_indices: [0], last_indices: [0]});
smo325708.setContext(context).draw();
const smo325709 = new VF.StaveTie({ first_note: smo219652, last_note: smo219653, first_indices: [0], last_indices: [0]});
smo325709.setContext(context).draw();
const smo325710 = new VF.StaveTie({ first_note: smo219654, last_note: smo219671, first_indices: [0], last_indices: [0]});
smo325710.setContext(context).draw();
const smo325711 = new VF.StaveTie({ first_note: smo222692, last_note: smo222693, first_indices: [0], last_indices: [0]});
smo325711.setContext(context).draw();
const smo325712 = new VF.StaveTie({ first_note: smo222741, last_note: smo222742, first_indices: [0], last_indices: [0]});
smo325712.setContext(context).draw();
const smo325713 = new VF.StaveTie({ first_note: smo222768, last_note: smo222770, first_indices: [0], last_indices: [0]});
smo325713.setContext(context).draw();
const smo325714 = new VF.StaveTie({ first_note: smo222771, last_note: smo222790, first_indices: [0], last_indices: [0]});
smo325714.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo169853').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo169856').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo169858').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo172847').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo172850').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo172852').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo175990').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo175993').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo175995').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo179106').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo179109').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo179111').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo182125').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo182128').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo182130').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo185232').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo185235').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo185237').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo188344').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo188347').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo188349').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo191453').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo191456').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo191458').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo194539').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo194542').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo194544').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo197628').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo197631').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo197633').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo200668').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo200671').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo200673').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo203722').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo203725').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo203727').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo206765').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo206768').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo206770').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo169877').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo169881').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo169884').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo172871').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo172875').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo172878').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo176014').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo176018').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo176021').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo179130').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo179134').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo179137').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo182149').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo182153').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo182156').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo185256').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo185260').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo185263').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo188368').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo188372').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo188375').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo191477').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo191481').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo191484').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo194563').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo194567').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo194570').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo197652').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo197656').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo200692').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo200696').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo203746').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo203750').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo206789').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo206793').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo222713').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo169903').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo169906').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo169909').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo169911').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo172897').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo172900').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo172903').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo172905').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo176040').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo176043').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo176046').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo176048').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo179156').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo179159').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo179162').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo179164').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo182175').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo182178').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo182181').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo182183').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo185282').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo185285').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo185288').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo185290').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo188394').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo188397').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo188400').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo188402').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo191503').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo191506').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo191509').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo191511').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo194589').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo194592').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo194595').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo194597').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo197678').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo197681').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo197684').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo197686').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo200718').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo200721').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo200724').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo200726').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo203772').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo203775').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo203778').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo203780').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo206815').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo206818').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo206821').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo206823').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo169929').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo169931').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo169933').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo169935').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo169937').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo169940').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo172923').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo172925').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo172927').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo172929').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo172931').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo172934').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo176066').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo176068').setAttributeNS('', 'transform', 'translate(0 2)');
context.svg.getElementById('vf-smo176070').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo176072').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo176077').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo179182').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo179184').setAttributeNS('', 'transform', 'translate(0 2)');
context.svg.getElementById('vf-smo179186').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo179188').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo179193').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo182201').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo182203').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo182205').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo182207').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo182209').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo182212').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo185308').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo185310').setAttributeNS('', 'transform', 'translate(0 2)');
context.svg.getElementById('vf-smo185312').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo185314').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo185319').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo188420').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo188422').setAttributeNS('', 'transform', 'translate(0 2)');
context.svg.getElementById('vf-smo188424').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo188426').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo188431').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo191529').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo191531').setAttributeNS('', 'transform', 'translate(0 2)');
context.svg.getElementById('vf-smo191533').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo191535').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo191540').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo194615').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo194617').setAttributeNS('', 'transform', 'translate(0 2)');
context.svg.getElementById('vf-smo194619').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo194621').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo194626').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo197704').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo197708').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo197710').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo197712').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo200744').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo200748').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo200750').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo200752').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo203798').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo203802').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo203804').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo203806').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo206841').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo206845').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo206847').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo206849').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo222761').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo222765').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo222767').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo222769').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo197734').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo200774').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo203828').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo206871').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo170033').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo170036').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo170038').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo173026').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo173029').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo173031').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo176170').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo176173').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo176175').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo179286').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo179289').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo179291').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo182305').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo182308').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo182310').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo185421').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo185424').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo185426').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo188524').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo188527').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo188529').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo191633').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo191636').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo191638').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo194719').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo194722').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo194724').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo197808').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo197811').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo197813').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo200848').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo200851').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo200853').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo203902').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo203905').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo203907').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo206945').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo206948').setAttributeNS('', 'transform', 'translate(0 3)');
context.svg.getElementById('vf-smo206950').setAttributeNS('', 'transform', 'translate(0 3)');
}
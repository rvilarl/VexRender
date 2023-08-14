// @@ Plena para tres ninos p 3/13  by Newman
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1569.9999999999998');
svg.setAttributeNS('', 'height', '1212.8945249597423');
svg.setAttributeNS('', 'viewBox', '0 0 2574 1989');
//
// create the musical objects
VF.setMusicFont("Bravura","Gonville","Custom");
const fmtsmo12110513 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo121105v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo121105v0ar = [];
const smo121081 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo121081.setAttribute('id', 'smo121081');
smo121105v0ar.push(smo121081);
const smo121082 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo121082.setAttribute('id', 'smo121082');
smo121105v0ar.push(smo121082);
const smo121083 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo121083.setAttribute('id', 'smo121083');
smo121105v0ar.push(smo121083);
const smo121084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo121084.setAttribute('id', 'smo121084');
smo121105v0ar.push(smo121084);
const smo121085 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo121085.setAttribute('id', 'smo121085');
smo121105v0ar.push(smo121085);
const smo121086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo121086.setAttribute('id', 'smo121086');
smo121105v0ar.push(smo121086);
const smo121087 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo121087.setAttribute('id', 'smo121087');
smo121105v0ar.push(smo121087);
const smo121088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo121088.setAttribute('id', 'smo121088');
smo121105v0ar.push(smo121088);
const smo121089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo121089.setAttribute('id', 'smo121089');
smo121105v0ar.push(smo121089);
smo121105v0.addTickables(smo121105v0ar)
fmtsmo12110513.joinVoices([smo121105v0]);
const fmtsmo12353213 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo123532v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo123532v0ar = [];
const smo123508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo123508.setAttribute('id', 'smo123508');
smo123532v0ar.push(smo123508);
const smo123509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo123509.setAttribute('id', 'smo123509');
smo123532v0ar.push(smo123509);
const smo123510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo123510.setAttribute('id', 'smo123510');
smo123532v0ar.push(smo123510);
const smo123511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
smo123511.setAttribute('id', 'smo123511');
smo123532v0ar.push(smo123511);
const smo123512 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo123512.setAttribute('id', 'smo123512');
smo123532v0ar.push(smo123512);
const smo123513 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo123513.setAttribute('id', 'smo123513');
smo123532v0ar.push(smo123513);
const smo123514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo123514.setAttribute('id', 'smo123514');
smo123532v0ar.push(smo123514);
const smo123515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo123515.setAttribute('id', 'smo123515');
smo123532v0ar.push(smo123515);
const smo123516 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo123516.setAttribute('id', 'smo123516');
smo123532v0ar.push(smo123516);
smo123532v0.addTickables(smo123532v0ar)
fmtsmo12353213.joinVoices([smo123532v0]);
const fmtsmo12595013 = new VF.Formatter();
//
// voices and notes for stave 2 13
const smo125950v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo125950v0ar = [];
const smo125926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo125926.setAttribute('id', 'smo125926');
smo125950v0ar.push(smo125926);
const smo125927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo125927.setAttribute('id', 'smo125927');
smo125950v0ar.push(smo125927);
const smo125928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo125928.setAttribute('id', 'smo125928');
smo125950v0ar.push(smo125928);
const smo125929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo125929.setAttribute('id', 'smo125929');
smo125950v0ar.push(smo125929);
const smo125930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo125930.setAttribute('id', 'smo125930');
smo125950v0ar.push(smo125930);
const smo125931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo125931.setAttribute('id', 'smo125931');
smo125950v0ar.push(smo125931);
const smo125932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo125932.setAttribute('id', 'smo125932');
smo125950v0ar.push(smo125932);
const smo125933 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo125933.setAttribute('id', 'smo125933');
smo125950v0ar.push(smo125933);
const smo125934 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo125934.setAttribute('id', 'smo125934');
smo125950v0ar.push(smo125934);
smo125950v0.addTickables(smo125950v0ar)
fmtsmo12595013.joinVoices([smo125950v0]);
const fmtsmo12832413 = new VF.Formatter();
//
// voices and notes for stave 3 13
const smo128324v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo128324v0ar = [];
const smo128300 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo128300.setAttribute('id', 'smo128300');
smo128324v0ar.push(smo128300);
const smo128301 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo128301.setAttribute('id', 'smo128301');
smo128324v0ar.push(smo128301);
const smo128302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo128302.setAttribute('id', 'smo128302');
smo128324v0ar.push(smo128302);
const smo128303 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo128303.setAttribute('id', 'smo128303');
smo128324v0ar.push(smo128303);
const smo128304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo128304.setAttribute('id', 'smo128304');
smo128324v0ar.push(smo128304);
const smo128305 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo128305.setAttribute('id', 'smo128305');
smo128324v0ar.push(smo128305);
const smo128306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo128306.setAttribute('id', 'smo128306');
smo128324v0ar.push(smo128306);
const smo128307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo128307.setAttribute('id', 'smo128307');
smo128324v0ar.push(smo128307);
const smo128308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo128308.setAttribute('id', 'smo128308');
smo128324v0ar.push(smo128308);
smo128324v0.addTickables(smo128324v0ar)
fmtsmo12832413.joinVoices([smo128324v0]);
const fmtsmo13068413 = new VF.Formatter();
//
// voices and notes for stave 4 13
const smo130684v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo130684v0ar = [];
const smo130665 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo130665.setAttribute('id', 'smo130665');
const  smo236005 = new VF.Articulation('a.').setPosition(3);
smo130665.addModifier(smo236005, 0);
smo130684v0ar.push(smo130665);
const smo130667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo130667.setAttribute('id', 'smo130667');
smo130684v0ar.push(smo130667);
const smo130668 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo130668.setAttribute('id', 'smo130668');
smo130684v0ar.push(smo130668);
smo130684v0.addTickables(smo130684v0ar)
fmtsmo13068413.joinVoices([smo130684v0]);
const fmtsmo13298413 = new VF.Formatter();
//
// voices and notes for stave 5 13
const smo132984v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo132984v0ar = [];
const smo132961 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo132961.setAttribute('id', 'smo132961');
smo132984v0ar.push(smo132961);
const smo132962 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo132962.setAttribute('id', 'smo132962');
smo132984v0ar.push(smo132962);
const smo132963 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo132963.setAttribute('id', 'smo132963');
smo132984v0ar.push(smo132963);
const smo132964 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo132964.setAttribute('id', 'smo132964');
smo132984v0ar.push(smo132964);
const smo132965 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo132965.setAttribute('id', 'smo132965');
smo132984v0ar.push(smo132965);
const smo132966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo132966.setAttribute('id', 'smo132966');
smo132984v0ar.push(smo132966);
const smo132967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo132967.setAttribute('id', 'smo132967');
smo132984v0ar.push(smo132967);
const smo132968 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo132968.setAttribute('id', 'smo132968');
smo132984v0ar.push(smo132968);
smo132984v0.addTickables(smo132984v0ar)
fmtsmo13298413.joinVoices([smo132984v0]);
const fmtsmo13539013 = new VF.Formatter();
//
// voices and notes for stave 6 13
const smo135390v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo135390v0ar = [];
const smo135367 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo135367.setAttribute('id', 'smo135367');
smo135390v0ar.push(smo135367);
const smo135368 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo135368.setAttribute('id', 'smo135368');
smo135390v0ar.push(smo135368);
const smo135369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo135369.setAttribute('id', 'smo135369');
smo135390v0ar.push(smo135369);
const smo135370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo135370.setAttribute('id', 'smo135370');
smo135390v0ar.push(smo135370);
const smo135371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo135371.setAttribute('id', 'smo135371');
smo135390v0ar.push(smo135371);
const smo135372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo135372.setAttribute('id', 'smo135372');
smo135390v0ar.push(smo135372);
const smo135373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo135373.setAttribute('id', 'smo135373');
smo135390v0ar.push(smo135373);
const smo135374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo135374.setAttribute('id', 'smo135374');
smo135390v0ar.push(smo135374);
smo135390v0.addTickables(smo135390v0ar)
fmtsmo13539013.joinVoices([smo135390v0]);
const fmtsmo13773313 = new VF.Formatter();
//
// voices and notes for stave 7 13
const smo137733v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo137733v0ar = [];
const smo137717 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo137717.setAttribute('id', 'smo137717');
smo137733v0ar.push(smo137717);
smo137733v0.addTickables(smo137733v0ar)
fmtsmo13773313.joinVoices([smo137733v0]);
const fmtsmo14008313 = new VF.Formatter();
//
// voices and notes for stave 8 13
const smo140083v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo140083v0ar = [];
const smo140067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo140067.setAttribute('id', 'smo140067');
smo140083v0ar.push(smo140067);
smo140083v0.addTickables(smo140083v0ar)
fmtsmo14008313.joinVoices([smo140083v0]);
const fmtsmo14248913 = new VF.Formatter();
//
// voices and notes for stave 9 13
const smo142489v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo142489v0ar = [];
const smo142466 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo142466.setAttribute('id', 'smo142466');
smo142489v0ar.push(smo142466);
const smo142467 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo142467.setAttribute('id', 'smo142467');
smo142489v0ar.push(smo142467);
const smo142468 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo142468.setAttribute('id', 'smo142468');
smo142489v0ar.push(smo142468);
const smo142469 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo142469.setAttribute('id', 'smo142469');
smo142489v0ar.push(smo142469);
const smo142470 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo142470.setAttribute('id', 'smo142470');
smo142489v0ar.push(smo142470);
const smo142471 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo142471.setAttribute('id', 'smo142471');
smo142489v0ar.push(smo142471);
const smo142472 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo142472.setAttribute('id', 'smo142472');
smo142489v0ar.push(smo142472);
const smo142473 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo142473.setAttribute('id', 'smo142473');
smo142489v0ar.push(smo142473);
smo142489v0.addTickables(smo142489v0ar)
fmtsmo14248913.joinVoices([smo142489v0]);
const fmtsmo14486213 = new VF.Formatter();
//
// voices and notes for stave 10 13
const smo144862v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo144862v0ar = [];
const smo144839 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo144839.setAttribute('id', 'smo144839');
smo144862v0ar.push(smo144839);
const smo144840 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo144840.setAttribute('id', 'smo144840');
smo144862v0ar.push(smo144840);
const smo144841 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo144841.setAttribute('id', 'smo144841');
smo144862v0ar.push(smo144841);
const smo144842 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo144842.setAttribute('id', 'smo144842');
smo144862v0ar.push(smo144842);
const smo144843 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo144843.setAttribute('id', 'smo144843');
smo144862v0ar.push(smo144843);
const smo144844 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo144844.setAttribute('id', 'smo144844');
smo144862v0ar.push(smo144844);
const smo144845 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo144845.setAttribute('id', 'smo144845');
smo144862v0ar.push(smo144845);
const smo144846 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo144846.setAttribute('id', 'smo144846');
smo144862v0ar.push(smo144846);
smo144862v0.addTickables(smo144862v0ar)
fmtsmo14486213.joinVoices([smo144862v0]);
const fmtsmo14720813 = new VF.Formatter();
//
// voices and notes for stave 11 13
const smo147208v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo147208v0ar = [];
const smo147185 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo147185.setAttribute('id', 'smo147185');
smo147208v0ar.push(smo147185);
const smo147186 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo147186.setAttribute('id', 'smo147186');
smo147208v0ar.push(smo147186);
const smo147187 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo147187.setAttribute('id', 'smo147187');
smo147208v0ar.push(smo147187);
const smo147188 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo147188.setAttribute('id', 'smo147188');
smo147208v0ar.push(smo147188);
const smo147189 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo147189.setAttribute('id', 'smo147189');
smo147208v0ar.push(smo147189);
const smo147190 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo147190.setAttribute('id', 'smo147190');
smo147208v0ar.push(smo147190);
const smo147191 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo147191.setAttribute('id', 'smo147191');
smo147208v0ar.push(smo147191);
const smo147192 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo147192.setAttribute('id', 'smo147192');
smo147208v0ar.push(smo147192);
smo147208v0.addTickables(smo147208v0ar)
fmtsmo14720813.joinVoices([smo147208v0]);
const fmtsmo14954313 = new VF.Formatter();
//
// voices and notes for stave 12 13
const smo149543v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo149543v0ar = [];
const smo149524 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo149524.setAttribute('id', 'smo149524');
const  smo236006 = new VF.Articulation('a.').setPosition(3);
smo149524.addModifier(smo236006, 0);
smo149543v0ar.push(smo149524);
const smo149526 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo149526.setAttribute('id', 'smo149526');
smo149543v0ar.push(smo149526);
const smo149527 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n"]}'))
smo149527.setAttribute('id', 'smo149527');
smo149543v0ar.push(smo149527);
smo149543v0.addTickables(smo149543v0ar)
fmtsmo14954313.joinVoices([smo149543v0]);
const fmtsmo15187013 = new VF.Formatter();
//
// voices and notes for stave 13 13
const smo151870v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo151870v0ar = [];
const smo151847 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo151847.setAttribute('id', 'smo151847');
smo151870v0ar.push(smo151847);
const smo151848 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo151848.setAttribute('id', 'smo151848');
smo151870v0ar.push(smo151848);
const smo151849 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo151849.setAttribute('id', 'smo151849');
smo151870v0ar.push(smo151849);
const smo151850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo151850.setAttribute('id', 'smo151850');
smo151870v0ar.push(smo151850);
const smo151851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo151851.setAttribute('id', 'smo151851');
smo151870v0ar.push(smo151851);
const smo151852 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo151852.setAttribute('id', 'smo151852');
smo151870v0ar.push(smo151852);
const smo151853 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo151853.setAttribute('id', 'smo151853');
smo151870v0ar.push(smo151853);
const smo151854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo151854.setAttribute('id', 'smo151854');
smo151870v0ar.push(smo151854);
smo151870v0.addTickables(smo151870v0ar)
fmtsmo15187013.joinVoices([smo151870v0]);
const fmtsmo15431213 = new VF.Formatter();
//
// voices and notes for stave 14 13
const smo154312v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo154312v0ar = [];
const smo154296 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo154296.setAttribute('id', 'smo154296');
smo154312v0ar.push(smo154296);
smo154312v0.addTickables(smo154312v0ar)
fmtsmo15431213.joinVoices([smo154312v0]);
const fmtsmo15682113 = new VF.Formatter();
//
// voices and notes for stave 15 13
const smo156821v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo156821v0ar = [];
const smo156802 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo156802.setAttribute('id', 'smo156802');
const  smo236007 = new VF.Articulation('a.').setPosition(3);
smo156802.addModifier(smo236007, 0);
smo156821v0ar.push(smo156802);
const smo156804 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo156804.setAttribute('id', 'smo156804');
smo156821v0ar.push(smo156804);
const smo156805 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo156805.setAttribute('id', 'smo156805');
smo156821v0ar.push(smo156805);
smo156821v0.addTickables(smo156821v0ar)
fmtsmo15682113.joinVoices([smo156821v0]);
const fmtsmo15926513 = new VF.Formatter();
//
// voices and notes for stave 16 13
const smo159265v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo159265v0ar = [];
const smo159239 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159239.setAttribute('id', 'smo159239');
const smo1592390acc = new VF.Accidental('n');
smo159239.addModifier(smo1592390acc, 0);
smo159265v0ar.push(smo159239);
const smo159240 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159240.setAttribute('id', 'smo159240');
smo159265v0ar.push(smo159240);
const smo159241 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159241.setAttribute('id', 'smo159241');
smo159265v0ar.push(smo159241);
const smo159242 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159242.setAttribute('id', 'smo159242');
smo159265v0ar.push(smo159242);
const smo159243 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159243.setAttribute('id', 'smo159243');
smo159265v0ar.push(smo159243);
const smo159244 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159244.setAttribute('id', 'smo159244');
smo159265v0ar.push(smo159244);
const smo159245 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo159245.setAttribute('id', 'smo159245');
smo159265v0ar.push(smo159245);
const smo159246 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159246.setAttribute('id', 'smo159246');
smo159265v0ar.push(smo159246);
const smo159247 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo159247.setAttribute('id', 'smo159247');
smo159265v0ar.push(smo159247);
const smo159248 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159248.setAttribute('id', 'smo159248');
smo159265v0ar.push(smo159248);
smo159265v0.addTickables(smo159265v0ar)
fmtsmo15926513.joinVoices([smo159265v0]);
// create beam groups and tuplets for format grp smo161614 before formatting
const dirsmo227782 = smo121081.getStemDirection();
smo121081.setStemDirection(dirsmo227782);
smo121082.setStemDirection(dirsmo227782);
smo121083.setStemDirection(dirsmo227782);
const smo227782 = new VF.Beam([smo121081,smo121082,smo121083]);
const dirsmo227783 = smo121084.getStemDirection();
smo121084.setStemDirection(dirsmo227783);
smo121085.setStemDirection(dirsmo227783);
const smo227783 = new VF.Beam([smo121084,smo121085]);
const dirsmo227784 = smo121087.getStemDirection();
smo121087.setStemDirection(dirsmo227784);
smo121088.setStemDirection(dirsmo227784);
const smo227784 = new VF.Beam([smo121087,smo121088]);
const dirsmo227787 = smo123508.getStemDirection();
smo123508.setStemDirection(dirsmo227787);
smo123509.setStemDirection(dirsmo227787);
smo123510.setStemDirection(dirsmo227787);
const smo227787 = new VF.Beam([smo123508,smo123509,smo123510]);
const dirsmo227788 = smo123511.getStemDirection();
smo123511.setStemDirection(dirsmo227788);
smo123512.setStemDirection(dirsmo227788);
const smo227788 = new VF.Beam([smo123511,smo123512]);
const dirsmo227789 = smo123514.getStemDirection();
smo123514.setStemDirection(dirsmo227789);
smo123515.setStemDirection(dirsmo227789);
const smo227789 = new VF.Beam([smo123514,smo123515]);
const dirsmo227792 = smo125926.getStemDirection();
smo125926.setStemDirection(dirsmo227792);
smo125927.setStemDirection(dirsmo227792);
smo125928.setStemDirection(dirsmo227792);
const smo227792 = new VF.Beam([smo125926,smo125927,smo125928]);
const dirsmo227793 = smo125929.getStemDirection();
smo125929.setStemDirection(dirsmo227793);
smo125930.setStemDirection(dirsmo227793);
const smo227793 = new VF.Beam([smo125929,smo125930]);
const dirsmo227794 = smo125932.getStemDirection();
smo125932.setStemDirection(dirsmo227794);
smo125933.setStemDirection(dirsmo227794);
const smo227794 = new VF.Beam([smo125932,smo125933]);
const dirsmo227797 = smo128300.getStemDirection();
smo128300.setStemDirection(dirsmo227797);
smo128301.setStemDirection(dirsmo227797);
smo128302.setStemDirection(dirsmo227797);
const smo227797 = new VF.Beam([smo128300,smo128301,smo128302]);
const dirsmo227798 = smo128303.getStemDirection();
smo128303.setStemDirection(dirsmo227798);
smo128304.setStemDirection(dirsmo227798);
const smo227798 = new VF.Beam([smo128303,smo128304]);
const dirsmo227799 = smo128306.getStemDirection();
smo128306.setStemDirection(dirsmo227799);
smo128307.setStemDirection(dirsmo227799);
const smo227799 = new VF.Beam([smo128306,smo128307]);
 
// formatting measures in staff group smo161614
fmtsmo12110513.format([smo121105v0,smo123532v0,smo125950v0,smo128324v0,smo130684v0], 352);
const stavesmo121105 = new VF.Stave(138, 183.2253035909339, 440);
stavesmo121105.setAttribute('id', 'stavesmo121105');
stavesmo121105.setBegBarType(1);
stavesmo121105.addClef('treble');
const keysmo121105 = new VF.KeySignature('D');
keysmo121105.addToStave(stavesmo121105);
stavesmo121105.setContext(context);
stavesmo121105.draw();
smo121105v0.draw(context, stavesmo121105);
smo227782.setContext(context);
smo227782.draw();
smo227783.setContext(context);
smo227783.draw();
smo227784.setContext(context);
smo227784.draw();
const stavesmo123532 = new VF.Stave(138, 288.2253035909339, 440);
stavesmo123532.setAttribute('id', 'stavesmo123532');
stavesmo123532.setBegBarType(1);
stavesmo123532.addClef('treble');
const keysmo123532 = new VF.KeySignature('D');
keysmo123532.addToStave(stavesmo123532);
stavesmo123532.setContext(context);
stavesmo123532.draw();
smo123532v0.draw(context, stavesmo123532);
smo227787.setContext(context);
smo227787.draw();
smo227788.setContext(context);
smo227788.draw();
smo227789.setContext(context);
smo227789.draw();
const stavesmo125950 = new VF.Stave(138, 379.2253035909339, 440);
stavesmo125950.setAttribute('id', 'stavesmo125950');
stavesmo125950.setBegBarType(1);
stavesmo125950.addClef('treble');
const keysmo125950 = new VF.KeySignature('G');
keysmo125950.addToStave(stavesmo125950);
stavesmo125950.setContext(context);
stavesmo125950.draw();
smo125950v0.draw(context, stavesmo125950);
smo227792.setContext(context);
smo227792.draw();
smo227793.setContext(context);
smo227793.draw();
smo227794.setContext(context);
smo227794.draw();
const stavesmo128324 = new VF.Stave(138, 479.2253035909339, 440);
stavesmo128324.setAttribute('id', 'stavesmo128324');
stavesmo128324.setBegBarType(1);
stavesmo128324.addClef('treble');
const keysmo128324 = new VF.KeySignature('G');
keysmo128324.addToStave(stavesmo128324);
stavesmo128324.setContext(context);
stavesmo128324.draw();
smo128324v0.draw(context, stavesmo128324);
smo227797.setContext(context);
smo227797.draw();
smo227798.setContext(context);
smo227798.draw();
smo227799.setContext(context);
smo227799.draw();
const stavesmo130684 = new VF.Stave(138, 549.2253035909339, 440);
stavesmo130684.setAttribute('id', 'stavesmo130684');
stavesmo130684.setBegBarType(1);
stavesmo130684.addClef('treble');
const keysmo130684 = new VF.KeySignature('D');
keysmo130684.addToStave(stavesmo130684);
stavesmo130684.setContext(context);
stavesmo130684.draw();
smo130684v0.draw(context, stavesmo130684);
// create beam groups and tuplets for format grp smo161616 before formatting
const dirsmo227804 = smo132962.getStemDirection();
smo132962.setStemDirection(dirsmo227804);
smo132963.setStemDirection(dirsmo227804);
const smo227804 = new VF.Beam([smo132962,smo132963]);
const dirsmo227805 = smo132965.getStemDirection();
smo132965.setStemDirection(dirsmo227805);
smo132966.setStemDirection(dirsmo227805);
smo132967.setStemDirection(dirsmo227805);
smo132968.setStemDirection(dirsmo227805);
const smo227805 = new VF.Beam([smo132965,smo132966,smo132967,smo132968]);
const dirsmo227808 = smo135368.getStemDirection();
smo135368.setStemDirection(dirsmo227808);
smo135369.setStemDirection(dirsmo227808);
const smo227808 = new VF.Beam([smo135368,smo135369]);
const dirsmo227809 = smo135371.getStemDirection();
smo135371.setStemDirection(dirsmo227809);
smo135372.setStemDirection(dirsmo227809);
smo135373.setStemDirection(dirsmo227809);
smo135374.setStemDirection(dirsmo227809);
const smo227809 = new VF.Beam([smo135371,smo135372,smo135373,smo135374]);
 
// formatting measures in staff group smo161616
fmtsmo13298413.format([smo132984v0,smo135390v0,smo137733v0,smo140083v0], 364);
const stavesmo132984 = new VF.Stave(138, 630.2253035909339, 440);
stavesmo132984.setAttribute('id', 'stavesmo132984');
stavesmo132984.setBegBarType(1);
stavesmo132984.addClef('treble');
const keysmo132984 = new VF.KeySignature('G');
keysmo132984.addToStave(stavesmo132984);
stavesmo132984.setContext(context);
stavesmo132984.draw();
smo132984v0.draw(context, stavesmo132984);
smo227804.setContext(context);
smo227804.draw();
smo227805.setContext(context);
smo227805.draw();
const stavesmo135390 = new VF.Stave(138, 700.2253035909339, 440);
stavesmo135390.setAttribute('id', 'stavesmo135390');
stavesmo135390.setBegBarType(1);
stavesmo135390.addClef('treble');
const keysmo135390 = new VF.KeySignature('G');
keysmo135390.addToStave(stavesmo135390);
stavesmo135390.setContext(context);
stavesmo135390.draw();
smo135390v0.draw(context, stavesmo135390);
smo227808.setContext(context);
smo227808.draw();
smo227809.setContext(context);
smo227809.draw();
const stavesmo137733 = new VF.Stave(138, 761.2253035909339, 440);
stavesmo137733.setAttribute('id', 'stavesmo137733');
stavesmo137733.setBegBarType(1);
stavesmo137733.addClef('treble');
const keysmo137733 = new VF.KeySignature('G');
keysmo137733.addToStave(stavesmo137733);
stavesmo137733.setContext(context);
stavesmo137733.draw();
smo137733v0.draw(context, stavesmo137733);
const stavesmo140083 = new VF.Stave(138, 831.2253035909339, 440);
stavesmo140083.setAttribute('id', 'stavesmo140083');
stavesmo140083.setBegBarType(1);
stavesmo140083.addClef('treble');
const keysmo140083 = new VF.KeySignature('G');
keysmo140083.addToStave(stavesmo140083);
stavesmo140083.setContext(context);
stavesmo140083.draw();
smo140083v0.draw(context, stavesmo140083);
// create beam groups and tuplets for format grp smo161618 before formatting
const dirsmo227816 = smo142467.getStemDirection();
smo142467.setStemDirection(dirsmo227816);
smo142468.setStemDirection(dirsmo227816);
const smo227816 = new VF.Beam([smo142467,smo142468]);
const dirsmo227817 = smo142470.getStemDirection();
smo142470.setStemDirection(dirsmo227817);
smo142471.setStemDirection(dirsmo227817);
smo142472.setStemDirection(dirsmo227817);
smo142473.setStemDirection(dirsmo227817);
const smo227817 = new VF.Beam([smo142470,smo142471,smo142472,smo142473]);
const dirsmo227820 = smo144840.getStemDirection();
smo144840.setStemDirection(dirsmo227820);
smo144841.setStemDirection(dirsmo227820);
const smo227820 = new VF.Beam([smo144840,smo144841]);
const dirsmo227821 = smo144843.getStemDirection();
smo144843.setStemDirection(dirsmo227821);
smo144844.setStemDirection(dirsmo227821);
smo144845.setStemDirection(dirsmo227821);
smo144846.setStemDirection(dirsmo227821);
const smo227821 = new VF.Beam([smo144843,smo144844,smo144845,smo144846]);
const dirsmo227824 = smo147186.getStemDirection();
smo147186.setStemDirection(dirsmo227824);
smo147187.setStemDirection(dirsmo227824);
const smo227824 = new VF.Beam([smo147186,smo147187]);
const dirsmo227825 = smo147189.getStemDirection();
smo147189.setStemDirection(dirsmo227825);
smo147190.setStemDirection(dirsmo227825);
smo147191.setStemDirection(dirsmo227825);
smo147192.setStemDirection(dirsmo227825);
const smo227825 = new VF.Beam([smo147189,smo147190,smo147191,smo147192]);
 
// formatting measures in staff group smo161618
fmtsmo14248913.format([smo142489v0,smo144862v0,smo147208v0,smo149543v0], 364);
const stavesmo142489 = new VF.Stave(138, 936.2253035909339, 440);
stavesmo142489.setAttribute('id', 'stavesmo142489');
stavesmo142489.setBegBarType(1);
stavesmo142489.addClef('bass');
const keysmo142489 = new VF.KeySignature('F');
keysmo142489.addToStave(stavesmo142489);
stavesmo142489.setContext(context);
stavesmo142489.draw();
smo142489v0.draw(context, stavesmo142489);
smo227816.setContext(context);
smo227816.draw();
smo227817.setContext(context);
smo227817.draw();
const stavesmo144862 = new VF.Stave(138, 1023.2253035909339, 440);
stavesmo144862.setAttribute('id', 'stavesmo144862');
stavesmo144862.setBegBarType(1);
stavesmo144862.addClef('bass');
const keysmo144862 = new VF.KeySignature('F');
keysmo144862.addToStave(stavesmo144862);
stavesmo144862.setContext(context);
stavesmo144862.draw();
smo144862v0.draw(context, stavesmo144862);
smo227820.setContext(context);
smo227820.draw();
smo227821.setContext(context);
smo227821.draw();
const stavesmo147208 = new VF.Stave(138, 1128.225303590934, 440);
stavesmo147208.setAttribute('id', 'stavesmo147208');
stavesmo147208.setBegBarType(1);
stavesmo147208.addClef('bass');
const keysmo147208 = new VF.KeySignature('F');
keysmo147208.addToStave(stavesmo147208);
stavesmo147208.setContext(context);
stavesmo147208.draw();
smo147208v0.draw(context, stavesmo147208);
smo227824.setContext(context);
smo227824.draw();
smo227825.setContext(context);
smo227825.draw();
const stavesmo149543 = new VF.Stave(138, 1213.225303590934, 440);
stavesmo149543.setAttribute('id', 'stavesmo149543');
stavesmo149543.setBegBarType(1);
stavesmo149543.addClef('bass');
const keysmo149543 = new VF.KeySignature('F');
keysmo149543.addToStave(stavesmo149543);
stavesmo149543.setContext(context);
stavesmo149543.draw();
smo149543v0.draw(context, stavesmo149543);
// create beam groups and tuplets for format grp smo154069 before formatting
const dirsmo227830 = smo151848.getStemDirection();
smo151848.setStemDirection(dirsmo227830);
smo151849.setStemDirection(dirsmo227830);
const smo227830 = new VF.Beam([smo151848,smo151849]);
const dirsmo227831 = smo151851.getStemDirection();
smo151851.setStemDirection(dirsmo227831);
smo151852.setStemDirection(dirsmo227831);
smo151853.setStemDirection(dirsmo227831);
smo151854.setStemDirection(dirsmo227831);
const smo227831 = new VF.Beam([smo151851,smo151852,smo151853,smo151854]);
 
// formatting measures in staff group smo154069
fmtsmo15187013.format([smo151870v0], 365);
const stavesmo151870 = new VF.Stave(138, 1290.225303590934, 440);
stavesmo151870.setAttribute('id', 'stavesmo151870');
stavesmo151870.setBegBarType(1);
stavesmo151870.addClef('treble');
const keysmo151870 = new VF.KeySignature('F');
keysmo151870.addToStave(stavesmo151870);
stavesmo151870.setContext(context);
stavesmo151870.draw();
smo151870v0.draw(context, stavesmo151870);
smo227830.setContext(context);
smo227830.draw();
smo227831.setContext(context);
smo227831.draw();
// create beam groups and tuplets for format grp smo156537 before formatting
 
// formatting measures in staff group smo156537
fmtsmo15431213.format([smo154312v0], 365);
const stavesmo154312 = new VF.Stave(138, 1373.225303590934, 440);
stavesmo154312.setAttribute('id', 'stavesmo154312');
stavesmo154312.setBegBarType(1);
stavesmo154312.addClef('treble');
const keysmo154312 = new VF.KeySignature('F');
keysmo154312.addToStave(stavesmo154312);
stavesmo154312.setContext(context);
stavesmo154312.draw();
smo154312v0.draw(context, stavesmo154312);
// create beam groups and tuplets for format grp smo158895 before formatting
 
// formatting measures in staff group smo158895
fmtsmo15682113.format([smo156821v0], 364);
const stavesmo156821 = new VF.Stave(138, 1478.225303590934, 440);
stavesmo156821.setAttribute('id', 'stavesmo156821');
stavesmo156821.setBegBarType(1);
stavesmo156821.addClef('bass');
const keysmo156821 = new VF.KeySignature('F');
keysmo156821.addToStave(stavesmo156821);
stavesmo156821.setContext(context);
stavesmo156821.draw();
smo156821v0.draw(context, stavesmo156821);
// create beam groups and tuplets for format grp smo161608 before formatting
const dirsmo227838 = smo159239.getStemDirection();
smo159239.setStemDirection(dirsmo227838);
smo159240.setStemDirection(dirsmo227838);
smo159241.setStemDirection(dirsmo227838);
smo159242.setStemDirection(dirsmo227838);
const smo227838 = new VF.Beam([smo159239,smo159240,smo159241,smo159242]);
const dirsmo227839 = smo159243.getStemDirection();
smo159243.setStemDirection(dirsmo227839);
smo159244.setStemDirection(dirsmo227839);
const smo227839 = new VF.Beam([smo159243,smo159244]);
const smo159249 = new VF.Tuplet([smo159240,smo159241,smo159242], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo161608
fmtsmo15926513.format([smo159265v0], 373);
const stavesmo159265 = new VF.Stave(138, 1555.225303590934, 440);
stavesmo159265.setAttribute('id', 'stavesmo159265');
stavesmo159265.setBegBarType(1);
stavesmo159265.addClef('percussion');
const keysmo159265 = new VF.KeySignature('F');
keysmo159265.addToStave(stavesmo159265);
stavesmo159265.setContext(context);
stavesmo159265.draw();
smo159265v0.draw(context, stavesmo159265);
smo227838.setContext(context);
smo227838.draw();
smo227839.setContext(context);
smo227839.draw();
smo159249.setContext(context).draw();
const leftsmo161608stavesmo12110516 = new VF.StaveConnector(stavesmo121105, stavesmo130684).setType(3);
leftsmo161608stavesmo12110516.setContext(context).draw();
const leftsmo161608stavesmo13298416 = new VF.StaveConnector(stavesmo132984, stavesmo140083).setType(3);
leftsmo161608stavesmo13298416.setContext(context).draw();
const leftsmo161608stavesmo14248916 = new VF.StaveConnector(stavesmo142489, stavesmo149543).setType(3);
leftsmo161608stavesmo14248916.setContext(context).draw();
const fmtsmo12112814 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo121128v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo121128v0ar = [];
const smo121106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo121106.setAttribute('id', 'smo121106');
smo121128v0ar.push(smo121106);
const smo121107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo121107.setAttribute('id', 'smo121107');
const  smo236042 = new VF.Articulation('a.').setPosition(3);
smo121107.addModifier(smo236042, 0);
smo121128v0ar.push(smo121107);
const smo121109 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo121109.setAttribute('id', 'smo121109');
const  smo236043 = new VF.Articulation('a.').setPosition(3);
smo121109.addModifier(smo236043, 0);
smo121128v0ar.push(smo121109);
const smo121111 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo121111.setAttribute('id', 'smo121111');
const  smo236044 = new VF.Articulation('a.').setPosition(3);
smo121111.addModifier(smo236044, 0);
smo121128v0ar.push(smo121111);
smo121128v0.addTickables(smo121128v0ar)
fmtsmo12112814.joinVoices([smo121128v0]);
const fmtsmo12355514 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo123555v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo123555v0ar = [];
const smo123533 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo123533.setAttribute('id', 'smo123533');
smo123555v0ar.push(smo123533);
const smo123534 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo123534.setAttribute('id', 'smo123534');
const  smo236045 = new VF.Articulation('a.').setPosition(3);
smo123534.addModifier(smo236045, 0);
smo123555v0ar.push(smo123534);
const smo123536 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo123536.setAttribute('id', 'smo123536');
const  smo236046 = new VF.Articulation('a.').setPosition(3);
smo123536.addModifier(smo236046, 0);
smo123555v0ar.push(smo123536);
const smo123538 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo123538.setAttribute('id', 'smo123538');
const  smo236047 = new VF.Articulation('a.').setPosition(3);
smo123538.addModifier(smo236047, 0);
smo123555v0ar.push(smo123538);
smo123555v0.addTickables(smo123555v0ar)
fmtsmo12355514.joinVoices([smo123555v0]);
const fmtsmo12597314 = new VF.Formatter();
//
// voices and notes for stave 2 14
const smo125973v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo125973v0ar = [];
const smo125951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo125951.setAttribute('id', 'smo125951');
smo125973v0ar.push(smo125951);
const smo125952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo125952.setAttribute('id', 'smo125952');
const  smo236048 = new VF.Articulation('a.').setPosition(3);
smo125952.addModifier(smo236048, 0);
smo125973v0ar.push(smo125952);
const smo125954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo125954.setAttribute('id', 'smo125954');
const  smo236049 = new VF.Articulation('a.').setPosition(3);
smo125954.addModifier(smo236049, 0);
smo125973v0ar.push(smo125954);
const smo125956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo125956.setAttribute('id', 'smo125956');
const  smo236050 = new VF.Articulation('a.').setPosition(3);
smo125956.addModifier(smo236050, 0);
smo125973v0ar.push(smo125956);
smo125973v0.addTickables(smo125973v0ar)
fmtsmo12597314.joinVoices([smo125973v0]);
const fmtsmo12834714 = new VF.Formatter();
//
// voices and notes for stave 3 14
const smo128347v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo128347v0ar = [];
const smo128325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo128325.setAttribute('id', 'smo128325');
smo128347v0ar.push(smo128325);
const smo128326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo128326.setAttribute('id', 'smo128326');
const  smo236051 = new VF.Articulation('a.').setPosition(3);
smo128326.addModifier(smo236051, 0);
smo128347v0ar.push(smo128326);
const smo128328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo128328.setAttribute('id', 'smo128328');
const  smo236052 = new VF.Articulation('a.').setPosition(3);
smo128328.addModifier(smo236052, 0);
smo128347v0ar.push(smo128328);
const smo128330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo128330.setAttribute('id', 'smo128330');
const  smo236053 = new VF.Articulation('a.').setPosition(3);
smo128330.addModifier(smo236053, 0);
smo128347v0ar.push(smo128330);
smo128347v0.addTickables(smo128347v0ar)
fmtsmo12834714.joinVoices([smo128347v0]);
const fmtsmo13070414 = new VF.Formatter();
//
// voices and notes for stave 4 14
const smo130704v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo130704v0ar = [];
const smo130685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo130685.setAttribute('id', 'smo130685');
smo130704v0ar.push(smo130685);
const smo130686 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo130686.setAttribute('id', 'smo130686');
smo130704v0ar.push(smo130686);
const smo130687 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo130687.setAttribute('id', 'smo130687');
smo130704v0ar.push(smo130687);
const smo130688 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo130688.setAttribute('id', 'smo130688');
smo130704v0ar.push(smo130688);
smo130704v0.addTickables(smo130704v0ar)
fmtsmo13070414.joinVoices([smo130704v0]);
const fmtsmo13300614 = new VF.Formatter();
//
// voices and notes for stave 5 14
const smo133006v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo133006v0ar = [];
const smo132985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo132985.setAttribute('id', 'smo132985');
smo133006v0ar.push(smo132985);
const smo132986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo132986.setAttribute('id', 'smo132986');
smo133006v0ar.push(smo132986);
const smo132987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo132987.setAttribute('id', 'smo132987');
smo133006v0ar.push(smo132987);
const smo132988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo132988.setAttribute('id', 'smo132988');
smo133006v0ar.push(smo132988);
const smo132989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo132989.setAttribute('id', 'smo132989');
smo133006v0ar.push(smo132989);
const smo132990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo132990.setAttribute('id', 'smo132990');
smo133006v0ar.push(smo132990);
smo133006v0.addTickables(smo133006v0ar)
fmtsmo13300614.joinVoices([smo133006v0]);
const fmtsmo13541214 = new VF.Formatter();
//
// voices and notes for stave 6 14
const smo135412v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo135412v0ar = [];
const smo135391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo135391.setAttribute('id', 'smo135391');
smo135412v0ar.push(smo135391);
const smo135392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo135392.setAttribute('id', 'smo135392');
smo135412v0ar.push(smo135392);
const smo135393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo135393.setAttribute('id', 'smo135393');
smo135412v0ar.push(smo135393);
const smo135394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo135394.setAttribute('id', 'smo135394');
smo135412v0ar.push(smo135394);
const smo135395 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo135395.setAttribute('id', 'smo135395');
smo135412v0ar.push(smo135395);
const smo135396 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo135396.setAttribute('id', 'smo135396');
smo135412v0ar.push(smo135396);
smo135412v0.addTickables(smo135412v0ar)
fmtsmo13541214.joinVoices([smo135412v0]);
const fmtsmo13775014 = new VF.Formatter();
//
// voices and notes for stave 7 14
const smo137750v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo137750v0ar = [];
const smo137734 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo137734.setAttribute('id', 'smo137734');
smo137750v0ar.push(smo137734);
smo137750v0.addTickables(smo137750v0ar)
fmtsmo13775014.joinVoices([smo137750v0]);
const fmtsmo14010014 = new VF.Formatter();
//
// voices and notes for stave 8 14
const smo140100v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo140100v0ar = [];
const smo140084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo140084.setAttribute('id', 'smo140084');
smo140100v0ar.push(smo140084);
smo140100v0.addTickables(smo140100v0ar)
fmtsmo14010014.joinVoices([smo140100v0]);
const fmtsmo14251114 = new VF.Formatter();
//
// voices and notes for stave 9 14
const smo142511v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo142511v0ar = [];
const smo142490 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo142490.setAttribute('id', 'smo142490');
smo142511v0ar.push(smo142490);
const smo142491 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo142491.setAttribute('id', 'smo142491');
smo142511v0ar.push(smo142491);
const smo142492 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo142492.setAttribute('id', 'smo142492');
smo142511v0ar.push(smo142492);
const smo142493 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo142493.setAttribute('id', 'smo142493');
smo142511v0ar.push(smo142493);
const smo142494 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo142494.setAttribute('id', 'smo142494');
smo142511v0ar.push(smo142494);
const smo142495 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo142495.setAttribute('id', 'smo142495');
smo142511v0ar.push(smo142495);
smo142511v0.addTickables(smo142511v0ar)
fmtsmo14251114.joinVoices([smo142511v0]);
const fmtsmo14488414 = new VF.Formatter();
//
// voices and notes for stave 10 14
const smo144884v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo144884v0ar = [];
const smo144863 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo144863.setAttribute('id', 'smo144863');
smo144884v0ar.push(smo144863);
const smo144864 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo144864.setAttribute('id', 'smo144864');
smo144884v0ar.push(smo144864);
const smo144865 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo144865.setAttribute('id', 'smo144865');
smo144884v0ar.push(smo144865);
const smo144866 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo144866.setAttribute('id', 'smo144866');
smo144884v0ar.push(smo144866);
const smo144867 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo144867.setAttribute('id', 'smo144867');
smo144884v0ar.push(smo144867);
const smo144868 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo144868.setAttribute('id', 'smo144868');
smo144884v0ar.push(smo144868);
smo144884v0.addTickables(smo144884v0ar)
fmtsmo14488414.joinVoices([smo144884v0]);
const fmtsmo14723014 = new VF.Formatter();
//
// voices and notes for stave 11 14
const smo147230v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo147230v0ar = [];
const smo147209 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo147209.setAttribute('id', 'smo147209');
smo147230v0ar.push(smo147209);
const smo147210 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo147210.setAttribute('id', 'smo147210');
smo147230v0ar.push(smo147210);
const smo147211 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo147211.setAttribute('id', 'smo147211');
smo147230v0ar.push(smo147211);
const smo147212 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo147212.setAttribute('id', 'smo147212');
smo147230v0ar.push(smo147212);
const smo147213 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo147213.setAttribute('id', 'smo147213');
smo147230v0ar.push(smo147213);
const smo147214 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo147214.setAttribute('id', 'smo147214');
smo147230v0ar.push(smo147214);
smo147230v0.addTickables(smo147230v0ar)
fmtsmo14723014.joinVoices([smo147230v0]);
const fmtsmo14956314 = new VF.Formatter();
//
// voices and notes for stave 12 14
const smo149563v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo149563v0ar = [];
const smo149544 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo149544.setAttribute('id', 'smo149544');
smo149563v0ar.push(smo149544);
const smo149545 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo149545.setAttribute('id', 'smo149545');
smo149563v0ar.push(smo149545);
const smo149546 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo149546.setAttribute('id', 'smo149546');
smo149563v0ar.push(smo149546);
const smo149547 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo149547.setAttribute('id', 'smo149547');
smo149563v0ar.push(smo149547);
smo149563v0.addTickables(smo149563v0ar)
fmtsmo14956314.joinVoices([smo149563v0]);
const fmtsmo15189214 = new VF.Formatter();
//
// voices and notes for stave 13 14
const smo151892v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo151892v0ar = [];
const smo151871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo151871.setAttribute('id', 'smo151871');
smo151892v0ar.push(smo151871);
const smo151872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo151872.setAttribute('id', 'smo151872');
smo151892v0ar.push(smo151872);
const smo151873 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo151873.setAttribute('id', 'smo151873');
smo151892v0ar.push(smo151873);
const smo151874 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo151874.setAttribute('id', 'smo151874');
smo151892v0ar.push(smo151874);
const smo151875 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo151875.setAttribute('id', 'smo151875');
smo151892v0ar.push(smo151875);
const smo151876 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo151876.setAttribute('id', 'smo151876');
smo151892v0ar.push(smo151876);
smo151892v0.addTickables(smo151892v0ar)
fmtsmo15189214.joinVoices([smo151892v0]);
const fmtsmo15432914 = new VF.Formatter();
//
// voices and notes for stave 14 14
const smo154329v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo154329v0ar = [];
const smo154313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo154313.setAttribute('id', 'smo154313');
smo154329v0ar.push(smo154313);
smo154329v0.addTickables(smo154329v0ar)
fmtsmo15432914.joinVoices([smo154329v0]);
const fmtsmo15684114 = new VF.Formatter();
//
// voices and notes for stave 15 14
const smo156841v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo156841v0ar = [];
const smo156822 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo156822.setAttribute('id', 'smo156822');
smo156841v0ar.push(smo156822);
const smo156823 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo156823.setAttribute('id', 'smo156823');
smo156841v0ar.push(smo156823);
const smo156824 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo156824.setAttribute('id', 'smo156824');
smo156841v0ar.push(smo156824);
const smo156825 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo156825.setAttribute('id', 'smo156825');
smo156841v0ar.push(smo156825);
smo156841v0.addTickables(smo156841v0ar)
fmtsmo15684114.joinVoices([smo156841v0]);
const fmtsmo15929214 = new VF.Formatter();
//
// voices and notes for stave 16 14
const smo159292v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo159292v0ar = [];
const smo159266 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159266.setAttribute('id', 'smo159266');
const smo1592660acc = new VF.Accidental('n');
smo159266.addModifier(smo1592660acc, 0);
smo159292v0ar.push(smo159266);
const smo159267 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159267.setAttribute('id', 'smo159267');
smo159292v0ar.push(smo159267);
const smo159268 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159268.setAttribute('id', 'smo159268');
smo159292v0ar.push(smo159268);
const smo159269 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159269.setAttribute('id', 'smo159269');
smo159292v0ar.push(smo159269);
const smo159270 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159270.setAttribute('id', 'smo159270');
smo159292v0ar.push(smo159270);
const smo159271 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159271.setAttribute('id', 'smo159271');
smo159292v0ar.push(smo159271);
const smo159272 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo159272.setAttribute('id', 'smo159272');
smo159292v0ar.push(smo159272);
const smo159273 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159273.setAttribute('id', 'smo159273');
smo159292v0ar.push(smo159273);
const smo159274 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo159274.setAttribute('id', 'smo159274');
smo159292v0ar.push(smo159274);
const smo159275 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159275.setAttribute('id', 'smo159275');
smo159292v0ar.push(smo159275);
smo159292v0.addTickables(smo159292v0ar)
fmtsmo15929214.joinVoices([smo159292v0]);
// create beam groups and tuplets for format grp smo161614 before formatting
 
// formatting measures in staff group smo161614
fmtsmo12112814.format([smo121128v0,smo123555v0,smo125973v0,smo128347v0,smo130704v0], 323);
const stavesmo121128 = new VF.Stave(578, 183.2253035909339, 337);
stavesmo121128.setAttribute('id', 'stavesmo121128');
stavesmo121128.setBegBarType(VF.Barline.type.NONE);
stavesmo121128.setContext(context);
stavesmo121128.draw();
smo121128v0.draw(context, stavesmo121128);
const stavesmo123555 = new VF.Stave(578, 288.2253035909339, 337);
stavesmo123555.setAttribute('id', 'stavesmo123555');
stavesmo123555.setBegBarType(VF.Barline.type.NONE);
stavesmo123555.setContext(context);
stavesmo123555.draw();
smo123555v0.draw(context, stavesmo123555);
const stavesmo125973 = new VF.Stave(578, 379.2253035909339, 337);
stavesmo125973.setAttribute('id', 'stavesmo125973');
stavesmo125973.setBegBarType(VF.Barline.type.NONE);
stavesmo125973.setContext(context);
stavesmo125973.draw();
smo125973v0.draw(context, stavesmo125973);
const stavesmo128347 = new VF.Stave(578, 479.2253035909339, 337);
stavesmo128347.setAttribute('id', 'stavesmo128347');
stavesmo128347.setBegBarType(VF.Barline.type.NONE);
stavesmo128347.setContext(context);
stavesmo128347.draw();
smo128347v0.draw(context, stavesmo128347);
const stavesmo130704 = new VF.Stave(578, 549.2253035909339, 337);
stavesmo130704.setAttribute('id', 'stavesmo130704');
stavesmo130704.setBegBarType(VF.Barline.type.NONE);
stavesmo130704.setContext(context);
stavesmo130704.draw();
smo130704v0.draw(context, stavesmo130704);
// create beam groups and tuplets for format grp smo161616 before formatting
const dirsmo227852 = smo132986.getStemDirection();
smo132986.setStemDirection(dirsmo227852);
smo132987.setStemDirection(dirsmo227852);
const smo227852 = new VF.Beam([smo132986,smo132987]);
const dirsmo227853 = smo132988.getStemDirection();
smo132988.setStemDirection(dirsmo227853);
smo132989.setStemDirection(dirsmo227853);
const smo227853 = new VF.Beam([smo132988,smo132989]);
const dirsmo227856 = smo135392.getStemDirection();
smo135392.setStemDirection(dirsmo227856);
smo135393.setStemDirection(dirsmo227856);
const smo227856 = new VF.Beam([smo135392,smo135393]);
const dirsmo227857 = smo135394.getStemDirection();
smo135394.setStemDirection(dirsmo227857);
smo135395.setStemDirection(dirsmo227857);
const smo227857 = new VF.Beam([smo135394,smo135395]);
 
// formatting measures in staff group smo161616
fmtsmo13300614.format([smo133006v0,smo135412v0,smo137750v0,smo140100v0], 323);
const stavesmo133006 = new VF.Stave(578, 630.2253035909339, 337);
stavesmo133006.setAttribute('id', 'stavesmo133006');
stavesmo133006.setBegBarType(VF.Barline.type.NONE);
stavesmo133006.setContext(context);
stavesmo133006.draw();
smo133006v0.draw(context, stavesmo133006);
smo227852.setContext(context);
smo227852.draw();
smo227853.setContext(context);
smo227853.draw();
const stavesmo135412 = new VF.Stave(578, 700.2253035909339, 337);
stavesmo135412.setAttribute('id', 'stavesmo135412');
stavesmo135412.setBegBarType(VF.Barline.type.NONE);
stavesmo135412.setContext(context);
stavesmo135412.draw();
smo135412v0.draw(context, stavesmo135412);
smo227856.setContext(context);
smo227856.draw();
smo227857.setContext(context);
smo227857.draw();
const stavesmo137750 = new VF.Stave(578, 761.2253035909339, 337);
stavesmo137750.setAttribute('id', 'stavesmo137750');
stavesmo137750.setBegBarType(VF.Barline.type.NONE);
stavesmo137750.setContext(context);
stavesmo137750.draw();
smo137750v0.draw(context, stavesmo137750);
const stavesmo140100 = new VF.Stave(578, 831.2253035909339, 337);
stavesmo140100.setAttribute('id', 'stavesmo140100');
stavesmo140100.setBegBarType(VF.Barline.type.NONE);
stavesmo140100.setContext(context);
stavesmo140100.draw();
smo140100v0.draw(context, stavesmo140100);
// create beam groups and tuplets for format grp smo161618 before formatting
const dirsmo227864 = smo142491.getStemDirection();
smo142491.setStemDirection(dirsmo227864);
smo142492.setStemDirection(dirsmo227864);
const smo227864 = new VF.Beam([smo142491,smo142492]);
const dirsmo227865 = smo142493.getStemDirection();
smo142493.setStemDirection(dirsmo227865);
smo142494.setStemDirection(dirsmo227865);
const smo227865 = new VF.Beam([smo142493,smo142494]);
const dirsmo227868 = smo144864.getStemDirection();
smo144864.setStemDirection(dirsmo227868);
smo144865.setStemDirection(dirsmo227868);
const smo227868 = new VF.Beam([smo144864,smo144865]);
const dirsmo227869 = smo144866.getStemDirection();
smo144866.setStemDirection(dirsmo227869);
smo144867.setStemDirection(dirsmo227869);
const smo227869 = new VF.Beam([smo144866,smo144867]);
const dirsmo227872 = smo147210.getStemDirection();
smo147210.setStemDirection(dirsmo227872);
smo147211.setStemDirection(dirsmo227872);
const smo227872 = new VF.Beam([smo147210,smo147211]);
const dirsmo227873 = smo147212.getStemDirection();
smo147212.setStemDirection(dirsmo227873);
smo147213.setStemDirection(dirsmo227873);
const smo227873 = new VF.Beam([smo147212,smo147213]);
 
// formatting measures in staff group smo161618
fmtsmo14251114.format([smo142511v0,smo144884v0,smo147230v0,smo149563v0], 323);
const stavesmo142511 = new VF.Stave(578, 936.2253035909339, 337);
stavesmo142511.setAttribute('id', 'stavesmo142511');
stavesmo142511.setBegBarType(VF.Barline.type.NONE);
stavesmo142511.setContext(context);
stavesmo142511.draw();
smo142511v0.draw(context, stavesmo142511);
smo227864.setContext(context);
smo227864.draw();
smo227865.setContext(context);
smo227865.draw();
const stavesmo144884 = new VF.Stave(578, 1023.2253035909339, 337);
stavesmo144884.setAttribute('id', 'stavesmo144884');
stavesmo144884.setBegBarType(VF.Barline.type.NONE);
stavesmo144884.setContext(context);
stavesmo144884.draw();
smo144884v0.draw(context, stavesmo144884);
smo227868.setContext(context);
smo227868.draw();
smo227869.setContext(context);
smo227869.draw();
const stavesmo147230 = new VF.Stave(578, 1128.225303590934, 337);
stavesmo147230.setAttribute('id', 'stavesmo147230');
stavesmo147230.setBegBarType(VF.Barline.type.NONE);
stavesmo147230.setContext(context);
stavesmo147230.draw();
smo147230v0.draw(context, stavesmo147230);
smo227872.setContext(context);
smo227872.draw();
smo227873.setContext(context);
smo227873.draw();
const stavesmo149563 = new VF.Stave(578, 1213.225303590934, 337);
stavesmo149563.setAttribute('id', 'stavesmo149563');
stavesmo149563.setBegBarType(VF.Barline.type.NONE);
stavesmo149563.setContext(context);
stavesmo149563.draw();
smo149563v0.draw(context, stavesmo149563);
// create beam groups and tuplets for format grp smo154069 before formatting
const dirsmo227878 = smo151872.getStemDirection();
smo151872.setStemDirection(dirsmo227878);
smo151873.setStemDirection(dirsmo227878);
const smo227878 = new VF.Beam([smo151872,smo151873]);
const dirsmo227879 = smo151874.getStemDirection();
smo151874.setStemDirection(dirsmo227879);
smo151875.setStemDirection(dirsmo227879);
const smo227879 = new VF.Beam([smo151874,smo151875]);
 
// formatting measures in staff group smo154069
fmtsmo15189214.format([smo151892v0], 323);
const stavesmo151892 = new VF.Stave(578, 1290.225303590934, 337);
stavesmo151892.setAttribute('id', 'stavesmo151892');
stavesmo151892.setBegBarType(VF.Barline.type.NONE);
stavesmo151892.setContext(context);
stavesmo151892.draw();
smo151892v0.draw(context, stavesmo151892);
smo227878.setContext(context);
smo227878.draw();
smo227879.setContext(context);
smo227879.draw();
// create beam groups and tuplets for format grp smo156537 before formatting
 
// formatting measures in staff group smo156537
fmtsmo15432914.format([smo154329v0], 323);
const stavesmo154329 = new VF.Stave(578, 1373.225303590934, 337);
stavesmo154329.setAttribute('id', 'stavesmo154329');
stavesmo154329.setBegBarType(VF.Barline.type.NONE);
stavesmo154329.setContext(context);
stavesmo154329.draw();
smo154329v0.draw(context, stavesmo154329);
// create beam groups and tuplets for format grp smo158895 before formatting
 
// formatting measures in staff group smo158895
fmtsmo15684114.format([smo156841v0], 323);
const stavesmo156841 = new VF.Stave(578, 1478.225303590934, 337);
stavesmo156841.setAttribute('id', 'stavesmo156841');
stavesmo156841.setBegBarType(VF.Barline.type.NONE);
stavesmo156841.setContext(context);
stavesmo156841.draw();
smo156841v0.draw(context, stavesmo156841);
// create beam groups and tuplets for format grp smo161608 before formatting
const dirsmo227886 = smo159266.getStemDirection();
smo159266.setStemDirection(dirsmo227886);
smo159267.setStemDirection(dirsmo227886);
smo159268.setStemDirection(dirsmo227886);
smo159269.setStemDirection(dirsmo227886);
const smo227886 = new VF.Beam([smo159266,smo159267,smo159268,smo159269]);
const dirsmo227887 = smo159270.getStemDirection();
smo159270.setStemDirection(dirsmo227887);
smo159271.setStemDirection(dirsmo227887);
const smo227887 = new VF.Beam([smo159270,smo159271]);
const smo159276 = new VF.Tuplet([smo159267,smo159268,smo159269], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo161608
fmtsmo15929214.format([smo159292v0], 323);
const stavesmo159292 = new VF.Stave(578, 1555.225303590934, 337);
stavesmo159292.setAttribute('id', 'stavesmo159292');
stavesmo159292.setBegBarType(VF.Barline.type.NONE);
stavesmo159292.setContext(context);
stavesmo159292.draw();
smo159292v0.draw(context, stavesmo159292);
smo227886.setContext(context);
smo227886.draw();
smo227887.setContext(context);
smo227887.draw();
smo159276.setContext(context).draw();
const fmtsmo12115515 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo121155v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo121155v0ar = [];
const smo121129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo121129.setAttribute('id', 'smo121129');
smo121155v0ar.push(smo121129);
const smo121130 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo121130.setAttribute('id', 'smo121130');
smo121155v0ar.push(smo121130);
const smo121131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo121131.setAttribute('id', 'smo121131');
smo121155v0ar.push(smo121131);
const smo121132 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo121132.setAttribute('id', 'smo121132');
smo121155v0ar.push(smo121132);
const smo121133 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo121133.setAttribute('id', 'smo121133');
smo121155v0ar.push(smo121133);
const smo121134 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo121134.setAttribute('id', 'smo121134');
smo121155v0ar.push(smo121134);
const smo121135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo121135.setAttribute('id', 'smo121135');
smo121155v0ar.push(smo121135);
const smo121136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo121136.setAttribute('id', 'smo121136');
smo121155v0ar.push(smo121136);
const smo121137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo121137.setAttribute('id', 'smo121137');
smo121155v0ar.push(smo121137);
const smo121138 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo121138.setAttribute('id', 'smo121138');
smo121155v0ar.push(smo121138);
const smo121139 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo121139.setAttribute('id', 'smo121139');
smo121155v0ar.push(smo121139);
smo121155v0.addTickables(smo121155v0ar)
fmtsmo12115515.joinVoices([smo121155v0]);
const fmtsmo12358215 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo123582v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo123582v0ar = [];
const smo123556 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo123556.setAttribute('id', 'smo123556');
smo123582v0ar.push(smo123556);
const smo123557 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo123557.setAttribute('id', 'smo123557');
smo123582v0ar.push(smo123557);
const smo123558 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo123558.setAttribute('id', 'smo123558');
smo123582v0ar.push(smo123558);
const smo123559 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo123559.setAttribute('id', 'smo123559');
smo123582v0ar.push(smo123559);
const smo123560 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo123560.setAttribute('id', 'smo123560');
smo123582v0ar.push(smo123560);
const smo123561 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo123561.setAttribute('id', 'smo123561');
smo123582v0ar.push(smo123561);
const smo123562 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo123562.setAttribute('id', 'smo123562');
smo123582v0ar.push(smo123562);
const smo123563 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo123563.setAttribute('id', 'smo123563');
smo123582v0ar.push(smo123563);
const smo123564 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo123564.setAttribute('id', 'smo123564');
smo123582v0ar.push(smo123564);
const smo123565 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo123565.setAttribute('id', 'smo123565');
smo123582v0ar.push(smo123565);
const smo123566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo123566.setAttribute('id', 'smo123566');
smo123582v0ar.push(smo123566);
smo123582v0.addTickables(smo123582v0ar)
fmtsmo12358215.joinVoices([smo123582v0]);
const fmtsmo12599815 = new VF.Formatter();
//
// voices and notes for stave 2 15
const smo125998v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo125998v0ar = [];
const smo125974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo125974.setAttribute('id', 'smo125974');
smo125998v0ar.push(smo125974);
const smo125975 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo125975.setAttribute('id', 'smo125975');
smo125998v0ar.push(smo125975);
const smo125976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo125976.setAttribute('id', 'smo125976');
smo125998v0ar.push(smo125976);
const smo125977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo125977.setAttribute('id', 'smo125977');
smo125998v0ar.push(smo125977);
const smo125978 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo125978.setAttribute('id', 'smo125978');
smo125998v0ar.push(smo125978);
const smo125979 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo125979.setAttribute('id', 'smo125979');
smo125998v0ar.push(smo125979);
const smo125980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo125980.setAttribute('id', 'smo125980');
smo125998v0ar.push(smo125980);
const smo125981 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo125981.setAttribute('id', 'smo125981');
smo125998v0ar.push(smo125981);
const smo125982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo125982.setAttribute('id', 'smo125982');
smo125998v0ar.push(smo125982);
smo125998v0.addTickables(smo125998v0ar)
fmtsmo12599815.joinVoices([smo125998v0]);
const fmtsmo12837215 = new VF.Formatter();
//
// voices and notes for stave 3 15
const smo128372v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo128372v0ar = [];
const smo128348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo128348.setAttribute('id', 'smo128348');
smo128372v0ar.push(smo128348);
const smo128349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo128349.setAttribute('id', 'smo128349');
smo128372v0ar.push(smo128349);
const smo128350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo128350.setAttribute('id', 'smo128350');
smo128372v0ar.push(smo128350);
const smo128351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo128351.setAttribute('id', 'smo128351');
smo128372v0ar.push(smo128351);
const smo128352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo128352.setAttribute('id', 'smo128352');
smo128372v0ar.push(smo128352);
const smo128353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo128353.setAttribute('id', 'smo128353');
smo128372v0ar.push(smo128353);
const smo128354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo128354.setAttribute('id', 'smo128354');
smo128372v0ar.push(smo128354);
const smo128355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo128355.setAttribute('id', 'smo128355');
smo128372v0ar.push(smo128355);
const smo128356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo128356.setAttribute('id', 'smo128356');
smo128372v0ar.push(smo128356);
smo128372v0.addTickables(smo128372v0ar)
fmtsmo12837215.joinVoices([smo128372v0]);
const fmtsmo13072415 = new VF.Formatter();
//
// voices and notes for stave 4 15
const smo130724v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo130724v0ar = [];
const smo130705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo130705.setAttribute('id', 'smo130705');
const  smo236088 = new VF.Articulation('a.').setPosition(3);
smo130705.addModifier(smo236088, 0);
smo130724v0ar.push(smo130705);
const smo130707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo130707.setAttribute('id', 'smo130707');
smo130724v0ar.push(smo130707);
const smo130708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo130708.setAttribute('id', 'smo130708');
smo130724v0ar.push(smo130708);
smo130724v0.addTickables(smo130724v0ar)
fmtsmo13072415.joinVoices([smo130724v0]);
const fmtsmo13303015 = new VF.Formatter();
//
// voices and notes for stave 5 15
const smo133030v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo133030v0ar = [];
const smo133007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo133007.setAttribute('id', 'smo133007');
smo133030v0ar.push(smo133007);
const smo133008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo133008.setAttribute('id', 'smo133008');
smo133030v0ar.push(smo133008);
const smo133009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo133009.setAttribute('id', 'smo133009');
smo133030v0ar.push(smo133009);
const smo133010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo133010.setAttribute('id', 'smo133010');
smo133030v0ar.push(smo133010);
const smo133011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo133011.setAttribute('id', 'smo133011');
smo133030v0ar.push(smo133011);
const smo133012 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo133012.setAttribute('id', 'smo133012');
smo133030v0ar.push(smo133012);
const smo133013 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo133013.setAttribute('id', 'smo133013');
smo133030v0ar.push(smo133013);
const smo133014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo133014.setAttribute('id', 'smo133014');
smo133030v0ar.push(smo133014);
smo133030v0.addTickables(smo133030v0ar)
fmtsmo13303015.joinVoices([smo133030v0]);
const fmtsmo13543615 = new VF.Formatter();
//
// voices and notes for stave 6 15
const smo135436v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo135436v0ar = [];
const smo135413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo135413.setAttribute('id', 'smo135413');
smo135436v0ar.push(smo135413);
const smo135414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo135414.setAttribute('id', 'smo135414');
smo135436v0ar.push(smo135414);
const smo135415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo135415.setAttribute('id', 'smo135415');
smo135436v0ar.push(smo135415);
const smo135416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo135416.setAttribute('id', 'smo135416');
smo135436v0ar.push(smo135416);
const smo135417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo135417.setAttribute('id', 'smo135417');
smo135436v0ar.push(smo135417);
const smo135418 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo135418.setAttribute('id', 'smo135418');
smo135436v0ar.push(smo135418);
const smo135419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo135419.setAttribute('id', 'smo135419');
smo135436v0ar.push(smo135419);
const smo135420 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo135420.setAttribute('id', 'smo135420');
smo135436v0ar.push(smo135420);
smo135436v0.addTickables(smo135436v0ar)
fmtsmo13543615.joinVoices([smo135436v0]);
const fmtsmo13776715 = new VF.Formatter();
//
// voices and notes for stave 7 15
const smo137767v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo137767v0ar = [];
const smo137751 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo137751.setAttribute('id', 'smo137751');
smo137767v0ar.push(smo137751);
smo137767v0.addTickables(smo137767v0ar)
fmtsmo13776715.joinVoices([smo137767v0]);
const fmtsmo14011715 = new VF.Formatter();
//
// voices and notes for stave 8 15
const smo140117v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo140117v0ar = [];
const smo140101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo140101.setAttribute('id', 'smo140101');
smo140117v0ar.push(smo140101);
smo140117v0.addTickables(smo140117v0ar)
fmtsmo14011715.joinVoices([smo140117v0]);
const fmtsmo14253515 = new VF.Formatter();
//
// voices and notes for stave 9 15
const smo142535v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo142535v0ar = [];
const smo142512 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo142512.setAttribute('id', 'smo142512');
smo142535v0ar.push(smo142512);
const smo142513 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo142513.setAttribute('id', 'smo142513');
smo142535v0ar.push(smo142513);
const smo142514 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo142514.setAttribute('id', 'smo142514');
smo142535v0ar.push(smo142514);
const smo142515 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo142515.setAttribute('id', 'smo142515');
smo142535v0ar.push(smo142515);
const smo142516 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo142516.setAttribute('id', 'smo142516');
smo142535v0ar.push(smo142516);
const smo142517 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo142517.setAttribute('id', 'smo142517');
smo142535v0ar.push(smo142517);
const smo142518 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo142518.setAttribute('id', 'smo142518');
smo142535v0ar.push(smo142518);
const smo142519 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo142519.setAttribute('id', 'smo142519');
smo142535v0ar.push(smo142519);
smo142535v0.addTickables(smo142535v0ar)
fmtsmo14253515.joinVoices([smo142535v0]);
const fmtsmo14490815 = new VF.Formatter();
//
// voices and notes for stave 10 15
const smo144908v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo144908v0ar = [];
const smo144885 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo144885.setAttribute('id', 'smo144885');
smo144908v0ar.push(smo144885);
const smo144886 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo144886.setAttribute('id', 'smo144886');
smo144908v0ar.push(smo144886);
const smo144887 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo144887.setAttribute('id', 'smo144887');
smo144908v0ar.push(smo144887);
const smo144888 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo144888.setAttribute('id', 'smo144888');
smo144908v0ar.push(smo144888);
const smo144889 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo144889.setAttribute('id', 'smo144889');
smo144908v0ar.push(smo144889);
const smo144890 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo144890.setAttribute('id', 'smo144890');
smo144908v0ar.push(smo144890);
const smo144891 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo144891.setAttribute('id', 'smo144891');
smo144908v0ar.push(smo144891);
const smo144892 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo144892.setAttribute('id', 'smo144892');
smo144908v0ar.push(smo144892);
smo144908v0.addTickables(smo144908v0ar)
fmtsmo14490815.joinVoices([smo144908v0]);
const fmtsmo14725415 = new VF.Formatter();
//
// voices and notes for stave 11 15
const smo147254v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo147254v0ar = [];
const smo147231 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo147231.setAttribute('id', 'smo147231');
smo147254v0ar.push(smo147231);
const smo147232 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo147232.setAttribute('id', 'smo147232');
smo147254v0ar.push(smo147232);
const smo147233 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo147233.setAttribute('id', 'smo147233');
smo147254v0ar.push(smo147233);
const smo147234 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo147234.setAttribute('id', 'smo147234');
smo147254v0ar.push(smo147234);
const smo147235 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo147235.setAttribute('id', 'smo147235');
smo147254v0ar.push(smo147235);
const smo147236 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo147236.setAttribute('id', 'smo147236');
smo147254v0ar.push(smo147236);
const smo147237 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo147237.setAttribute('id', 'smo147237');
smo147254v0ar.push(smo147237);
const smo147238 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo147238.setAttribute('id', 'smo147238');
smo147254v0ar.push(smo147238);
smo147254v0.addTickables(smo147254v0ar)
fmtsmo14725415.joinVoices([smo147254v0]);
const fmtsmo14958315 = new VF.Formatter();
//
// voices and notes for stave 12 15
const smo149583v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo149583v0ar = [];
const smo149564 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo149564.setAttribute('id', 'smo149564');
const  smo236089 = new VF.Articulation('a.').setPosition(3);
smo149564.addModifier(smo236089, 0);
smo149583v0ar.push(smo149564);
const smo149566 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo149566.setAttribute('id', 'smo149566');
smo149583v0ar.push(smo149566);
const smo149567 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n"]}'))
smo149567.setAttribute('id', 'smo149567');
smo149583v0ar.push(smo149567);
smo149583v0.addTickables(smo149583v0ar)
fmtsmo14958315.joinVoices([smo149583v0]);
const fmtsmo15191615 = new VF.Formatter();
//
// voices and notes for stave 13 15
const smo151916v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo151916v0ar = [];
const smo151893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo151893.setAttribute('id', 'smo151893');
smo151916v0ar.push(smo151893);
const smo151894 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo151894.setAttribute('id', 'smo151894');
smo151916v0ar.push(smo151894);
const smo151895 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo151895.setAttribute('id', 'smo151895');
smo151916v0ar.push(smo151895);
const smo151896 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo151896.setAttribute('id', 'smo151896');
smo151916v0ar.push(smo151896);
const smo151897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo151897.setAttribute('id', 'smo151897');
smo151916v0ar.push(smo151897);
const smo151898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo151898.setAttribute('id', 'smo151898');
smo151916v0ar.push(smo151898);
const smo151899 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo151899.setAttribute('id', 'smo151899');
smo151916v0ar.push(smo151899);
const smo151900 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo151900.setAttribute('id', 'smo151900');
smo151916v0ar.push(smo151900);
smo151916v0.addTickables(smo151916v0ar)
fmtsmo15191615.joinVoices([smo151916v0]);
const fmtsmo15434615 = new VF.Formatter();
//
// voices and notes for stave 14 15
const smo154346v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo154346v0ar = [];
const smo154330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo154330.setAttribute('id', 'smo154330');
smo154346v0ar.push(smo154330);
smo154346v0.addTickables(smo154346v0ar)
fmtsmo15434615.joinVoices([smo154346v0]);
const fmtsmo15686115 = new VF.Formatter();
//
// voices and notes for stave 15 15
const smo156861v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo156861v0ar = [];
const smo156842 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo156842.setAttribute('id', 'smo156842');
const  smo236090 = new VF.Articulation('a.').setPosition(3);
smo156842.addModifier(smo236090, 0);
smo156861v0ar.push(smo156842);
const smo156844 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo156844.setAttribute('id', 'smo156844');
smo156861v0ar.push(smo156844);
const smo156845 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo156845.setAttribute('id', 'smo156845');
smo156861v0ar.push(smo156845);
smo156861v0.addTickables(smo156861v0ar)
fmtsmo15686115.joinVoices([smo156861v0]);
const fmtsmo15931915 = new VF.Formatter();
//
// voices and notes for stave 16 15
const smo159319v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo159319v0ar = [];
const smo159293 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159293.setAttribute('id', 'smo159293');
const smo1592930acc = new VF.Accidental('n');
smo159293.addModifier(smo1592930acc, 0);
smo159319v0ar.push(smo159293);
const smo159294 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159294.setAttribute('id', 'smo159294');
smo159319v0ar.push(smo159294);
const smo159295 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159295.setAttribute('id', 'smo159295');
smo159319v0ar.push(smo159295);
const smo159296 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159296.setAttribute('id', 'smo159296');
smo159319v0ar.push(smo159296);
const smo159297 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159297.setAttribute('id', 'smo159297');
smo159319v0ar.push(smo159297);
const smo159298 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159298.setAttribute('id', 'smo159298');
smo159319v0ar.push(smo159298);
const smo159299 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo159299.setAttribute('id', 'smo159299');
smo159319v0ar.push(smo159299);
const smo159300 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159300.setAttribute('id', 'smo159300');
smo159319v0ar.push(smo159300);
const smo159301 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo159301.setAttribute('id', 'smo159301');
smo159319v0ar.push(smo159301);
const smo159302 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159302.setAttribute('id', 'smo159302');
smo159319v0ar.push(smo159302);
smo159319v0.addTickables(smo159319v0ar)
fmtsmo15931915.joinVoices([smo159319v0]);
// create beam groups and tuplets for format grp smo161614 before formatting
const dirsmo227890 = smo121129.getStemDirection();
smo121129.setStemDirection(dirsmo227890);
smo121130.setStemDirection(dirsmo227890);
smo121131.setStemDirection(dirsmo227890);
const smo227890 = new VF.Beam([smo121129,smo121130,smo121131]);
const dirsmo227891 = smo121132.getStemDirection();
smo121132.setStemDirection(dirsmo227891);
smo121133.setStemDirection(dirsmo227891);
const smo227891 = new VF.Beam([smo121132,smo121133]);
const dirsmo227892 = smo121134.getStemDirection();
smo121134.setStemDirection(dirsmo227892);
smo121135.setStemDirection(dirsmo227892);
smo121136.setStemDirection(dirsmo227892);
const smo227892 = new VF.Beam([smo121134,smo121135,smo121136]);
const dirsmo227893 = smo121137.getStemDirection();
smo121137.setStemDirection(dirsmo227893);
smo121138.setStemDirection(dirsmo227893);
smo121139.setStemDirection(dirsmo227893);
const smo227893 = new VF.Beam([smo121137,smo121138,smo121139]);
const dirsmo227896 = smo123556.getStemDirection();
smo123556.setStemDirection(dirsmo227896);
smo123557.setStemDirection(dirsmo227896);
smo123558.setStemDirection(dirsmo227896);
const smo227896 = new VF.Beam([smo123556,smo123557,smo123558]);
const dirsmo227897 = smo123559.getStemDirection();
smo123559.setStemDirection(dirsmo227897);
smo123560.setStemDirection(dirsmo227897);
const smo227897 = new VF.Beam([smo123559,smo123560]);
const dirsmo227898 = smo123561.getStemDirection();
smo123561.setStemDirection(dirsmo227898);
smo123562.setStemDirection(dirsmo227898);
smo123563.setStemDirection(dirsmo227898);
const smo227898 = new VF.Beam([smo123561,smo123562,smo123563]);
const dirsmo227899 = smo123564.getStemDirection();
smo123564.setStemDirection(dirsmo227899);
smo123565.setStemDirection(dirsmo227899);
smo123566.setStemDirection(dirsmo227899);
const smo227899 = new VF.Beam([smo123564,smo123565,smo123566]);
const dirsmo227902 = smo125974.getStemDirection();
smo125974.setStemDirection(dirsmo227902);
smo125975.setStemDirection(dirsmo227902);
smo125976.setStemDirection(dirsmo227902);
const smo227902 = new VF.Beam([smo125974,smo125975,smo125976]);
const dirsmo227903 = smo125977.getStemDirection();
smo125977.setStemDirection(dirsmo227903);
smo125978.setStemDirection(dirsmo227903);
const smo227903 = new VF.Beam([smo125977,smo125978]);
const dirsmo227904 = smo125980.getStemDirection();
smo125980.setStemDirection(dirsmo227904);
smo125981.setStemDirection(dirsmo227904);
const smo227904 = new VF.Beam([smo125980,smo125981]);
const dirsmo227907 = smo128348.getStemDirection();
smo128348.setStemDirection(dirsmo227907);
smo128349.setStemDirection(dirsmo227907);
smo128350.setStemDirection(dirsmo227907);
const smo227907 = new VF.Beam([smo128348,smo128349,smo128350]);
const dirsmo227908 = smo128351.getStemDirection();
smo128351.setStemDirection(dirsmo227908);
smo128352.setStemDirection(dirsmo227908);
const smo227908 = new VF.Beam([smo128351,smo128352]);
const dirsmo227909 = smo128354.getStemDirection();
smo128354.setStemDirection(dirsmo227909);
smo128355.setStemDirection(dirsmo227909);
const smo227909 = new VF.Beam([smo128354,smo128355]);
 
// formatting measures in staff group smo161614
fmtsmo12115515.format([smo121155v0,smo123582v0,smo125998v0,smo128372v0,smo130724v0], 402);
const stavesmo121155 = new VF.Stave(915, 183.2253035909339, 416);
stavesmo121155.setAttribute('id', 'stavesmo121155');
stavesmo121155.setBegBarType(VF.Barline.type.NONE);
stavesmo121155.setContext(context);
stavesmo121155.draw();
smo121155v0.draw(context, stavesmo121155);
smo227890.setContext(context);
smo227890.draw();
smo227891.setContext(context);
smo227891.draw();
smo227892.setContext(context);
smo227892.draw();
smo227893.setContext(context);
smo227893.draw();
const stavesmo123582 = new VF.Stave(915, 288.2253035909339, 416);
stavesmo123582.setAttribute('id', 'stavesmo123582');
stavesmo123582.setBegBarType(VF.Barline.type.NONE);
stavesmo123582.setContext(context);
stavesmo123582.draw();
smo123582v0.draw(context, stavesmo123582);
smo227896.setContext(context);
smo227896.draw();
smo227897.setContext(context);
smo227897.draw();
smo227898.setContext(context);
smo227898.draw();
smo227899.setContext(context);
smo227899.draw();
const stavesmo125998 = new VF.Stave(915, 379.2253035909339, 416);
stavesmo125998.setAttribute('id', 'stavesmo125998');
stavesmo125998.setBegBarType(VF.Barline.type.NONE);
stavesmo125998.setContext(context);
stavesmo125998.draw();
smo125998v0.draw(context, stavesmo125998);
smo227902.setContext(context);
smo227902.draw();
smo227903.setContext(context);
smo227903.draw();
smo227904.setContext(context);
smo227904.draw();
const stavesmo128372 = new VF.Stave(915, 479.2253035909339, 416);
stavesmo128372.setAttribute('id', 'stavesmo128372');
stavesmo128372.setBegBarType(VF.Barline.type.NONE);
stavesmo128372.setContext(context);
stavesmo128372.draw();
smo128372v0.draw(context, stavesmo128372);
smo227907.setContext(context);
smo227907.draw();
smo227908.setContext(context);
smo227908.draw();
smo227909.setContext(context);
smo227909.draw();
const stavesmo130724 = new VF.Stave(915, 549.2253035909339, 416);
stavesmo130724.setAttribute('id', 'stavesmo130724');
stavesmo130724.setBegBarType(VF.Barline.type.NONE);
stavesmo130724.setContext(context);
stavesmo130724.draw();
smo130724v0.draw(context, stavesmo130724);
// create beam groups and tuplets for format grp smo161616 before formatting
const dirsmo227914 = smo133008.getStemDirection();
smo133008.setStemDirection(dirsmo227914);
smo133009.setStemDirection(dirsmo227914);
const smo227914 = new VF.Beam([smo133008,smo133009]);
const dirsmo227915 = smo133011.getStemDirection();
smo133011.setStemDirection(dirsmo227915);
smo133012.setStemDirection(dirsmo227915);
smo133013.setStemDirection(dirsmo227915);
smo133014.setStemDirection(dirsmo227915);
const smo227915 = new VF.Beam([smo133011,smo133012,smo133013,smo133014]);
const dirsmo227918 = smo135414.getStemDirection();
smo135414.setStemDirection(dirsmo227918);
smo135415.setStemDirection(dirsmo227918);
const smo227918 = new VF.Beam([smo135414,smo135415]);
const dirsmo227919 = smo135417.getStemDirection();
smo135417.setStemDirection(dirsmo227919);
smo135418.setStemDirection(dirsmo227919);
smo135419.setStemDirection(dirsmo227919);
smo135420.setStemDirection(dirsmo227919);
const smo227919 = new VF.Beam([smo135417,smo135418,smo135419,smo135420]);
 
// formatting measures in staff group smo161616
fmtsmo13303015.format([smo133030v0,smo135436v0,smo137767v0,smo140117v0], 402);
const stavesmo133030 = new VF.Stave(915, 630.2253035909339, 416);
stavesmo133030.setAttribute('id', 'stavesmo133030');
stavesmo133030.setBegBarType(VF.Barline.type.NONE);
stavesmo133030.setContext(context);
stavesmo133030.draw();
smo133030v0.draw(context, stavesmo133030);
smo227914.setContext(context);
smo227914.draw();
smo227915.setContext(context);
smo227915.draw();
const stavesmo135436 = new VF.Stave(915, 700.2253035909339, 416);
stavesmo135436.setAttribute('id', 'stavesmo135436');
stavesmo135436.setBegBarType(VF.Barline.type.NONE);
stavesmo135436.setContext(context);
stavesmo135436.draw();
smo135436v0.draw(context, stavesmo135436);
smo227918.setContext(context);
smo227918.draw();
smo227919.setContext(context);
smo227919.draw();
const stavesmo137767 = new VF.Stave(915, 761.2253035909339, 416);
stavesmo137767.setAttribute('id', 'stavesmo137767');
stavesmo137767.setBegBarType(VF.Barline.type.NONE);
stavesmo137767.setContext(context);
stavesmo137767.draw();
smo137767v0.draw(context, stavesmo137767);
const stavesmo140117 = new VF.Stave(915, 831.2253035909339, 416);
stavesmo140117.setAttribute('id', 'stavesmo140117');
stavesmo140117.setBegBarType(VF.Barline.type.NONE);
stavesmo140117.setContext(context);
stavesmo140117.draw();
smo140117v0.draw(context, stavesmo140117);
// create beam groups and tuplets for format grp smo161618 before formatting
const dirsmo227926 = smo142513.getStemDirection();
smo142513.setStemDirection(dirsmo227926);
smo142514.setStemDirection(dirsmo227926);
const smo227926 = new VF.Beam([smo142513,smo142514]);
const dirsmo227927 = smo142516.getStemDirection();
smo142516.setStemDirection(dirsmo227927);
smo142517.setStemDirection(dirsmo227927);
smo142518.setStemDirection(dirsmo227927);
smo142519.setStemDirection(dirsmo227927);
const smo227927 = new VF.Beam([smo142516,smo142517,smo142518,smo142519]);
const dirsmo227930 = smo144886.getStemDirection();
smo144886.setStemDirection(dirsmo227930);
smo144887.setStemDirection(dirsmo227930);
const smo227930 = new VF.Beam([smo144886,smo144887]);
const dirsmo227931 = smo144889.getStemDirection();
smo144889.setStemDirection(dirsmo227931);
smo144890.setStemDirection(dirsmo227931);
smo144891.setStemDirection(dirsmo227931);
smo144892.setStemDirection(dirsmo227931);
const smo227931 = new VF.Beam([smo144889,smo144890,smo144891,smo144892]);
const dirsmo227934 = smo147232.getStemDirection();
smo147232.setStemDirection(dirsmo227934);
smo147233.setStemDirection(dirsmo227934);
const smo227934 = new VF.Beam([smo147232,smo147233]);
const dirsmo227935 = smo147235.getStemDirection();
smo147235.setStemDirection(dirsmo227935);
smo147236.setStemDirection(dirsmo227935);
smo147237.setStemDirection(dirsmo227935);
smo147238.setStemDirection(dirsmo227935);
const smo227935 = new VF.Beam([smo147235,smo147236,smo147237,smo147238]);
 
// formatting measures in staff group smo161618
fmtsmo14253515.format([smo142535v0,smo144908v0,smo147254v0,smo149583v0], 402);
const stavesmo142535 = new VF.Stave(915, 936.2253035909339, 416);
stavesmo142535.setAttribute('id', 'stavesmo142535');
stavesmo142535.setBegBarType(VF.Barline.type.NONE);
stavesmo142535.setContext(context);
stavesmo142535.draw();
smo142535v0.draw(context, stavesmo142535);
smo227926.setContext(context);
smo227926.draw();
smo227927.setContext(context);
smo227927.draw();
const stavesmo144908 = new VF.Stave(915, 1023.2253035909339, 416);
stavesmo144908.setAttribute('id', 'stavesmo144908');
stavesmo144908.setBegBarType(VF.Barline.type.NONE);
stavesmo144908.setContext(context);
stavesmo144908.draw();
smo144908v0.draw(context, stavesmo144908);
smo227930.setContext(context);
smo227930.draw();
smo227931.setContext(context);
smo227931.draw();
const stavesmo147254 = new VF.Stave(915, 1128.225303590934, 416);
stavesmo147254.setAttribute('id', 'stavesmo147254');
stavesmo147254.setBegBarType(VF.Barline.type.NONE);
stavesmo147254.setContext(context);
stavesmo147254.draw();
smo147254v0.draw(context, stavesmo147254);
smo227934.setContext(context);
smo227934.draw();
smo227935.setContext(context);
smo227935.draw();
const stavesmo149583 = new VF.Stave(915, 1213.225303590934, 416);
stavesmo149583.setAttribute('id', 'stavesmo149583');
stavesmo149583.setBegBarType(VF.Barline.type.NONE);
stavesmo149583.setContext(context);
stavesmo149583.draw();
smo149583v0.draw(context, stavesmo149583);
// create beam groups and tuplets for format grp smo154069 before formatting
const dirsmo227940 = smo151894.getStemDirection();
smo151894.setStemDirection(dirsmo227940);
smo151895.setStemDirection(dirsmo227940);
const smo227940 = new VF.Beam([smo151894,smo151895]);
const dirsmo227941 = smo151897.getStemDirection();
smo151897.setStemDirection(dirsmo227941);
smo151898.setStemDirection(dirsmo227941);
smo151899.setStemDirection(dirsmo227941);
smo151900.setStemDirection(dirsmo227941);
const smo227941 = new VF.Beam([smo151897,smo151898,smo151899,smo151900]);
 
// formatting measures in staff group smo154069
fmtsmo15191615.format([smo151916v0], 402);
const stavesmo151916 = new VF.Stave(915, 1290.225303590934, 416);
stavesmo151916.setAttribute('id', 'stavesmo151916');
stavesmo151916.setBegBarType(VF.Barline.type.NONE);
stavesmo151916.setContext(context);
stavesmo151916.draw();
smo151916v0.draw(context, stavesmo151916);
smo227940.setContext(context);
smo227940.draw();
smo227941.setContext(context);
smo227941.draw();
// create beam groups and tuplets for format grp smo156537 before formatting
 
// formatting measures in staff group smo156537
fmtsmo15434615.format([smo154346v0], 402);
const stavesmo154346 = new VF.Stave(915, 1373.225303590934, 416);
stavesmo154346.setAttribute('id', 'stavesmo154346');
stavesmo154346.setBegBarType(VF.Barline.type.NONE);
stavesmo154346.setContext(context);
stavesmo154346.draw();
smo154346v0.draw(context, stavesmo154346);
// create beam groups and tuplets for format grp smo158895 before formatting
 
// formatting measures in staff group smo158895
fmtsmo15686115.format([smo156861v0], 402);
const stavesmo156861 = new VF.Stave(915, 1478.225303590934, 416);
stavesmo156861.setAttribute('id', 'stavesmo156861');
stavesmo156861.setBegBarType(VF.Barline.type.NONE);
stavesmo156861.setContext(context);
stavesmo156861.draw();
smo156861v0.draw(context, stavesmo156861);
// create beam groups and tuplets for format grp smo161608 before formatting
const dirsmo227948 = smo159293.getStemDirection();
smo159293.setStemDirection(dirsmo227948);
smo159294.setStemDirection(dirsmo227948);
smo159295.setStemDirection(dirsmo227948);
smo159296.setStemDirection(dirsmo227948);
const smo227948 = new VF.Beam([smo159293,smo159294,smo159295,smo159296]);
const dirsmo227949 = smo159297.getStemDirection();
smo159297.setStemDirection(dirsmo227949);
smo159298.setStemDirection(dirsmo227949);
const smo227949 = new VF.Beam([smo159297,smo159298]);
const smo159303 = new VF.Tuplet([smo159294,smo159295,smo159296], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo161608
fmtsmo15931915.format([smo159319v0], 402);
const stavesmo159319 = new VF.Stave(915, 1555.225303590934, 416);
stavesmo159319.setAttribute('id', 'stavesmo159319');
stavesmo159319.setBegBarType(VF.Barline.type.NONE);
stavesmo159319.setContext(context);
stavesmo159319.draw();
smo159319v0.draw(context, stavesmo159319);
smo227948.setContext(context);
smo227948.draw();
smo227949.setContext(context);
smo227949.draw();
smo159303.setContext(context).draw();
const fmtsmo12117616 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo121176v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo121176v0ar = [];
const smo121156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo121156.setAttribute('id', 'smo121156');
smo121176v0ar.push(smo121156);
const smo121157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo121157.setAttribute('id', 'smo121157');
smo121176v0ar.push(smo121157);
const smo121158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo121158.setAttribute('id', 'smo121158');
smo121176v0ar.push(smo121158);
const smo121159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo121159.setAttribute('id', 'smo121159');
const smo1211590acc = new VF.Accidental('n');
smo121159.addModifier(smo1211590acc, 0);
smo121176v0ar.push(smo121159);
const smo121160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo121160.setAttribute('id', 'smo121160');
smo121176v0ar.push(smo121160);
smo121176v0.addTickables(smo121176v0ar)
fmtsmo12117616.joinVoices([smo121176v0]);
const fmtsmo12360316 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo123603v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo123603v0ar = [];
const smo123583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo123583.setAttribute('id', 'smo123583');
smo123603v0ar.push(smo123583);
const smo123584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo123584.setAttribute('id', 'smo123584');
smo123603v0ar.push(smo123584);
const smo123585 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo123585.setAttribute('id', 'smo123585');
smo123603v0ar.push(smo123585);
const smo123586 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo123586.setAttribute('id', 'smo123586');
const smo1235860acc = new VF.Accidental('n');
smo123586.addModifier(smo1235860acc, 0);
smo123603v0ar.push(smo123586);
const smo123587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo123587.setAttribute('id', 'smo123587');
const smo1235870acc = new VF.Accidental('b');
smo123587.addModifier(smo1235870acc, 0);
smo123603v0ar.push(smo123587);
smo123603v0.addTickables(smo123603v0ar)
fmtsmo12360316.joinVoices([smo123603v0]);
const fmtsmo12601916 = new VF.Formatter();
//
// voices and notes for stave 2 16
const smo126019v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo126019v0ar = [];
const smo125999 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo125999.setAttribute('id', 'smo125999');
smo126019v0ar.push(smo125999);
const smo126000 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo126000.setAttribute('id', 'smo126000');
smo126019v0ar.push(smo126000);
const smo126001 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo126001.setAttribute('id', 'smo126001');
smo126019v0ar.push(smo126001);
const smo126002 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo126002.setAttribute('id', 'smo126002');
const smo1260020acc = new VF.Accidental('n');
smo126002.addModifier(smo1260020acc, 0);
smo126019v0ar.push(smo126002);
const smo126003 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["ab/4/n"]}'))
smo126003.setAttribute('id', 'smo126003');
const smo1260030acc = new VF.Accidental('b');
smo126003.addModifier(smo1260030acc, 0);
smo126019v0ar.push(smo126003);
smo126019v0.addTickables(smo126019v0ar)
fmtsmo12601916.joinVoices([smo126019v0]);
const fmtsmo12839316 = new VF.Formatter();
//
// voices and notes for stave 3 16
const smo128393v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo128393v0ar = [];
const smo128373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo128373.setAttribute('id', 'smo128373');
smo128393v0ar.push(smo128373);
const smo128374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo128374.setAttribute('id', 'smo128374');
smo128393v0ar.push(smo128374);
const smo128375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo128375.setAttribute('id', 'smo128375');
smo128393v0ar.push(smo128375);
const smo128376 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo128376.setAttribute('id', 'smo128376');
const smo1283760acc = new VF.Accidental('n');
smo128376.addModifier(smo1283760acc, 0);
smo128393v0ar.push(smo128376);
const smo128377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo128377.setAttribute('id', 'smo128377');
const smo1283770acc = new VF.Accidental('#');
smo128377.addModifier(smo1283770acc, 0);
smo128393v0ar.push(smo128377);
smo128393v0.addTickables(smo128393v0ar)
fmtsmo12839316.joinVoices([smo128393v0]);
const fmtsmo13074416 = new VF.Formatter();
//
// voices and notes for stave 4 16
const smo130744v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo130744v0ar = [];
const smo130725 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo130725.setAttribute('id', 'smo130725');
smo130744v0ar.push(smo130725);
const smo130726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo130726.setAttribute('id', 'smo130726');
smo130744v0ar.push(smo130726);
const smo130727 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo130727.setAttribute('id', 'smo130727');
smo130744v0ar.push(smo130727);
const smo130728 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["a#/4/n"]}'))
smo130728.setAttribute('id', 'smo130728');
const smo1307280acc = new VF.Accidental('#');
smo130728.addModifier(smo1307280acc, 0);
smo130744v0ar.push(smo130728);
smo130744v0.addTickables(smo130744v0ar)
fmtsmo13074416.joinVoices([smo130744v0]);
const fmtsmo13305116 = new VF.Formatter();
//
// voices and notes for stave 5 16
const smo133051v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo133051v0ar = [];
const smo133031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo133031.setAttribute('id', 'smo133031');
smo133051v0ar.push(smo133031);
const smo133032 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo133032.setAttribute('id', 'smo133032');
smo133051v0ar.push(smo133032);
const smo133033 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo133033.setAttribute('id', 'smo133033');
smo133051v0ar.push(smo133033);
const smo133034 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo133034.setAttribute('id', 'smo133034');
smo133051v0ar.push(smo133034);
const smo133035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo133035.setAttribute('id', 'smo133035');
smo133051v0ar.push(smo133035);
smo133051v0.addTickables(smo133051v0ar)
fmtsmo13305116.joinVoices([smo133051v0]);
const fmtsmo13545716 = new VF.Formatter();
//
// voices and notes for stave 6 16
const smo135457v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo135457v0ar = [];
const smo135437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo135437.setAttribute('id', 'smo135437');
smo135457v0ar.push(smo135437);
const smo135438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo135438.setAttribute('id', 'smo135438');
smo135457v0ar.push(smo135438);
const smo135439 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo135439.setAttribute('id', 'smo135439');
smo135457v0ar.push(smo135439);
const smo135440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo135440.setAttribute('id', 'smo135440');
const smo1354400acc = new VF.Accidental('b');
smo135440.addModifier(smo1354400acc, 0);
smo135457v0ar.push(smo135440);
const smo135441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n"]}'))
smo135441.setAttribute('id', 'smo135441');
const smo1354410acc = new VF.Accidental('b');
smo135441.addModifier(smo1354410acc, 0);
smo135457v0ar.push(smo135441);
smo135457v0.addTickables(smo135457v0ar)
fmtsmo13545716.joinVoices([smo135457v0]);
const fmtsmo13778416 = new VF.Formatter();
//
// voices and notes for stave 7 16
const smo137784v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo137784v0ar = [];
const smo137768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo137768.setAttribute('id', 'smo137768');
smo137784v0ar.push(smo137768);
smo137784v0.addTickables(smo137784v0ar)
fmtsmo13778416.joinVoices([smo137784v0]);
const fmtsmo14013416 = new VF.Formatter();
//
// voices and notes for stave 8 16
const smo140134v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo140134v0ar = [];
const smo140118 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo140118.setAttribute('id', 'smo140118');
smo140134v0ar.push(smo140118);
smo140134v0.addTickables(smo140134v0ar)
fmtsmo14013416.joinVoices([smo140134v0]);
const fmtsmo14255616 = new VF.Formatter();
//
// voices and notes for stave 9 16
const smo142556v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo142556v0ar = [];
const smo142536 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo142536.setAttribute('id', 'smo142536');
smo142556v0ar.push(smo142536);
const smo142537 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo142537.setAttribute('id', 'smo142537');
smo142556v0ar.push(smo142537);
const smo142538 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo142538.setAttribute('id', 'smo142538');
smo142556v0ar.push(smo142538);
const smo142539 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n"]}'))
smo142539.setAttribute('id', 'smo142539');
const smo1425390acc = new VF.Accidental('b');
smo142539.addModifier(smo1425390acc, 0);
smo142556v0ar.push(smo142539);
const smo142540 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo142540.setAttribute('id', 'smo142540');
smo142556v0ar.push(smo142540);
smo142556v0.addTickables(smo142556v0ar)
fmtsmo14255616.joinVoices([smo142556v0]);
const fmtsmo14492916 = new VF.Formatter();
//
// voices and notes for stave 10 16
const smo144929v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo144929v0ar = [];
const smo144909 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo144909.setAttribute('id', 'smo144909');
smo144929v0ar.push(smo144909);
const smo144910 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo144910.setAttribute('id', 'smo144910');
smo144929v0ar.push(smo144910);
const smo144911 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo144911.setAttribute('id', 'smo144911');
smo144929v0ar.push(smo144911);
const smo144912 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo144912.setAttribute('id', 'smo144912');
smo144929v0ar.push(smo144912);
const smo144913 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo144913.setAttribute('id', 'smo144913');
smo144929v0ar.push(smo144913);
smo144929v0.addTickables(smo144929v0ar)
fmtsmo14492916.joinVoices([smo144929v0]);
const fmtsmo14727516 = new VF.Formatter();
//
// voices and notes for stave 11 16
const smo147275v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo147275v0ar = [];
const smo147255 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo147255.setAttribute('id', 'smo147255');
smo147275v0ar.push(smo147255);
const smo147256 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo147256.setAttribute('id', 'smo147256');
smo147275v0ar.push(smo147256);
const smo147257 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo147257.setAttribute('id', 'smo147257');
smo147275v0ar.push(smo147257);
const smo147258 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n"]}'))
smo147258.setAttribute('id', 'smo147258');
const smo1472580acc = new VF.Accidental('b');
smo147258.addModifier(smo1472580acc, 0);
smo147275v0ar.push(smo147258);
const smo147259 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo147259.setAttribute('id', 'smo147259');
const smo1472590acc = new VF.Accidental('n');
smo147259.addModifier(smo1472590acc, 0);
smo147275v0ar.push(smo147259);
smo147275v0.addTickables(smo147275v0ar)
fmtsmo14727516.joinVoices([smo147275v0]);
const fmtsmo14960316 = new VF.Formatter();
//
// voices and notes for stave 12 16
const smo149603v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo149603v0ar = [];
const smo149584 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo149584.setAttribute('id', 'smo149584');
smo149603v0ar.push(smo149584);
const smo149585 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo149585.setAttribute('id', 'smo149585');
smo149603v0ar.push(smo149585);
const smo149586 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n"]}'))
smo149586.setAttribute('id', 'smo149586');
smo149603v0ar.push(smo149586);
const smo149587 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/3/n"]}'))
smo149587.setAttribute('id', 'smo149587');
const smo1495870acc = new VF.Accidental('#');
smo149587.addModifier(smo1495870acc, 0);
smo149603v0ar.push(smo149587);
smo149603v0.addTickables(smo149603v0ar)
fmtsmo14960316.joinVoices([smo149603v0]);
const fmtsmo15193716 = new VF.Formatter();
//
// voices and notes for stave 13 16
const smo151937v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo151937v0ar = [];
const smo151917 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo151917.setAttribute('id', 'smo151917');
smo151937v0ar.push(smo151917);
const smo151918 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo151918.setAttribute('id', 'smo151918');
smo151937v0ar.push(smo151918);
const smo151919 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo151919.setAttribute('id', 'smo151919');
smo151937v0ar.push(smo151919);
const smo151920 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo151920.setAttribute('id', 'smo151920');
smo151937v0ar.push(smo151920);
const smo151921 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo151921.setAttribute('id', 'smo151921');
smo151937v0ar.push(smo151921);
smo151937v0.addTickables(smo151937v0ar)
fmtsmo15193716.joinVoices([smo151937v0]);
const fmtsmo15436316 = new VF.Formatter();
//
// voices and notes for stave 14 16
const smo154363v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo154363v0ar = [];
const smo154347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo154347.setAttribute('id', 'smo154347');
smo154363v0ar.push(smo154347);
smo154363v0.addTickables(smo154363v0ar)
fmtsmo15436316.joinVoices([smo154363v0]);
const fmtsmo15688116 = new VF.Formatter();
//
// voices and notes for stave 15 16
const smo156881v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo156881v0ar = [];
const smo156862 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo156862.setAttribute('id', 'smo156862');
smo156881v0ar.push(smo156862);
const smo156863 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo156863.setAttribute('id', 'smo156863');
smo156881v0ar.push(smo156863);
const smo156864 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo156864.setAttribute('id', 'smo156864');
smo156881v0ar.push(smo156864);
const smo156865 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/4/n"]}'))
smo156865.setAttribute('id', 'smo156865');
const smo1568650acc = new VF.Accidental('#');
smo156865.addModifier(smo1568650acc, 0);
smo156881v0ar.push(smo156865);
smo156881v0.addTickables(smo156881v0ar)
fmtsmo15688116.joinVoices([smo156881v0]);
const fmtsmo15934016 = new VF.Formatter();
//
// voices and notes for stave 16 16
const smo159340v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo159340v0ar = [];
const smo159320 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo159320.setAttribute('id', 'smo159320');
smo159340v0ar.push(smo159320);
const smo159321 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159321.setAttribute('id', 'smo159321');
const smo1593210acc = new VF.Accidental('n');
smo159321.addModifier(smo1593210acc, 0);
smo159340v0ar.push(smo159321);
const smo159322 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159322.setAttribute('id', 'smo159322');
smo159340v0ar.push(smo159322);
const smo159323 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159323.setAttribute('id', 'smo159323');
smo159340v0ar.push(smo159323);
const smo159324 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159324.setAttribute('id', 'smo159324');
smo159340v0ar.push(smo159324);
smo159340v0.addTickables(smo159340v0ar)
fmtsmo15934016.joinVoices([smo159340v0]);
// create beam groups and tuplets for format grp smo161614 before formatting
const dirsmo227952 = smo121156.getStemDirection();
smo121156.setStemDirection(dirsmo227952);
smo121157.setStemDirection(dirsmo227952);
const smo227952 = new VF.Beam([smo121156,smo121157]);
const dirsmo227954 = smo123583.getStemDirection();
smo123583.setStemDirection(dirsmo227954);
smo123584.setStemDirection(dirsmo227954);
const smo227954 = new VF.Beam([smo123583,smo123584]);
const dirsmo227956 = smo125999.getStemDirection();
smo125999.setStemDirection(dirsmo227956);
smo126000.setStemDirection(dirsmo227956);
const smo227956 = new VF.Beam([smo125999,smo126000]);
const dirsmo227958 = smo128373.getStemDirection();
smo128373.setStemDirection(dirsmo227958);
smo128374.setStemDirection(dirsmo227958);
const smo227958 = new VF.Beam([smo128373,smo128374]);
 
// formatting measures in staff group smo161614
fmtsmo12117616.format([smo121176v0,smo123603v0,smo126019v0,smo128393v0,smo130744v0], 140);
const stavesmo121176 = new VF.Stave(1331, 183.2253035909339, 155);
stavesmo121176.setAttribute('id', 'stavesmo121176');
stavesmo121176.setBegBarType(VF.Barline.type.NONE);
stavesmo121176.setEndBarType(2);
stavesmo121176.setContext(context);
stavesmo121176.draw();
smo121176v0.draw(context, stavesmo121176);
smo227952.setContext(context);
smo227952.draw();
const stavesmo123603 = new VF.Stave(1331, 288.2253035909339, 155);
stavesmo123603.setAttribute('id', 'stavesmo123603');
stavesmo123603.setBegBarType(VF.Barline.type.NONE);
stavesmo123603.setEndBarType(2);
stavesmo123603.setContext(context);
stavesmo123603.draw();
smo123603v0.draw(context, stavesmo123603);
smo227954.setContext(context);
smo227954.draw();
const stavesmo126019 = new VF.Stave(1331, 379.2253035909339, 155);
stavesmo126019.setAttribute('id', 'stavesmo126019');
stavesmo126019.setBegBarType(VF.Barline.type.NONE);
stavesmo126019.setEndBarType(2);
stavesmo126019.setContext(context);
stavesmo126019.draw();
smo126019v0.draw(context, stavesmo126019);
smo227956.setContext(context);
smo227956.draw();
const stavesmo128393 = new VF.Stave(1331, 479.2253035909339, 155);
stavesmo128393.setAttribute('id', 'stavesmo128393');
stavesmo128393.setBegBarType(VF.Barline.type.NONE);
stavesmo128393.setEndBarType(2);
stavesmo128393.setContext(context);
stavesmo128393.draw();
smo128393v0.draw(context, stavesmo128393);
smo227958.setContext(context);
smo227958.draw();
const stavesmo130744 = new VF.Stave(1331, 549.2253035909339, 155);
stavesmo130744.setAttribute('id', 'stavesmo130744');
stavesmo130744.setBegBarType(VF.Barline.type.NONE);
stavesmo130744.setEndBarType(2);
stavesmo130744.setContext(context);
stavesmo130744.draw();
smo130744v0.draw(context, stavesmo130744);
// create beam groups and tuplets for format grp smo161616 before formatting
const dirsmo227961 = smo133031.getStemDirection();
smo133031.setStemDirection(dirsmo227961);
smo133032.setStemDirection(dirsmo227961);
const smo227961 = new VF.Beam([smo133031,smo133032]);
const dirsmo227963 = smo135437.getStemDirection();
smo135437.setStemDirection(dirsmo227963);
smo135438.setStemDirection(dirsmo227963);
const smo227963 = new VF.Beam([smo135437,smo135438]);
 
// formatting measures in staff group smo161616
fmtsmo13305116.format([smo133051v0,smo135457v0,smo137784v0,smo140134v0], 140);
const stavesmo133051 = new VF.Stave(1331, 630.2253035909339, 155);
stavesmo133051.setAttribute('id', 'stavesmo133051');
stavesmo133051.setBegBarType(VF.Barline.type.NONE);
stavesmo133051.setEndBarType(2);
stavesmo133051.setContext(context);
stavesmo133051.draw();
smo133051v0.draw(context, stavesmo133051);
smo227961.setContext(context);
smo227961.draw();
const stavesmo135457 = new VF.Stave(1331, 700.2253035909339, 155);
stavesmo135457.setAttribute('id', 'stavesmo135457');
stavesmo135457.setBegBarType(VF.Barline.type.NONE);
stavesmo135457.setEndBarType(2);
stavesmo135457.setContext(context);
stavesmo135457.draw();
smo135457v0.draw(context, stavesmo135457);
smo227963.setContext(context);
smo227963.draw();
const stavesmo137784 = new VF.Stave(1331, 761.2253035909339, 155);
stavesmo137784.setAttribute('id', 'stavesmo137784');
stavesmo137784.setBegBarType(VF.Barline.type.NONE);
stavesmo137784.setEndBarType(2);
stavesmo137784.setContext(context);
stavesmo137784.draw();
smo137784v0.draw(context, stavesmo137784);
const stavesmo140134 = new VF.Stave(1331, 831.2253035909339, 155);
stavesmo140134.setAttribute('id', 'stavesmo140134');
stavesmo140134.setBegBarType(VF.Barline.type.NONE);
stavesmo140134.setEndBarType(2);
stavesmo140134.setContext(context);
stavesmo140134.draw();
smo140134v0.draw(context, stavesmo140134);
// create beam groups and tuplets for format grp smo161618 before formatting
const dirsmo227967 = smo142536.getStemDirection();
smo142536.setStemDirection(dirsmo227967);
smo142537.setStemDirection(dirsmo227967);
const smo227967 = new VF.Beam([smo142536,smo142537]);
const dirsmo227969 = smo144909.getStemDirection();
smo144909.setStemDirection(dirsmo227969);
smo144910.setStemDirection(dirsmo227969);
const smo227969 = new VF.Beam([smo144909,smo144910]);
const dirsmo227971 = smo147255.getStemDirection();
smo147255.setStemDirection(dirsmo227971);
smo147256.setStemDirection(dirsmo227971);
const smo227971 = new VF.Beam([smo147255,smo147256]);
 
// formatting measures in staff group smo161618
fmtsmo14255616.format([smo142556v0,smo144929v0,smo147275v0,smo149603v0], 140);
const stavesmo142556 = new VF.Stave(1331, 936.2253035909339, 155);
stavesmo142556.setAttribute('id', 'stavesmo142556');
stavesmo142556.setBegBarType(VF.Barline.type.NONE);
stavesmo142556.setEndBarType(2);
stavesmo142556.setContext(context);
stavesmo142556.draw();
smo142556v0.draw(context, stavesmo142556);
smo227967.setContext(context);
smo227967.draw();
const stavesmo144929 = new VF.Stave(1331, 1023.2253035909339, 155);
stavesmo144929.setAttribute('id', 'stavesmo144929');
stavesmo144929.setBegBarType(VF.Barline.type.NONE);
stavesmo144929.setEndBarType(2);
stavesmo144929.setContext(context);
stavesmo144929.draw();
smo144929v0.draw(context, stavesmo144929);
smo227969.setContext(context);
smo227969.draw();
const stavesmo147275 = new VF.Stave(1331, 1128.225303590934, 155);
stavesmo147275.setAttribute('id', 'stavesmo147275');
stavesmo147275.setBegBarType(VF.Barline.type.NONE);
stavesmo147275.setEndBarType(2);
stavesmo147275.setContext(context);
stavesmo147275.draw();
smo147275v0.draw(context, stavesmo147275);
smo227971.setContext(context);
smo227971.draw();
const stavesmo149603 = new VF.Stave(1331, 1213.225303590934, 155);
stavesmo149603.setAttribute('id', 'stavesmo149603');
stavesmo149603.setBegBarType(VF.Barline.type.NONE);
stavesmo149603.setEndBarType(2);
stavesmo149603.setContext(context);
stavesmo149603.draw();
smo149603v0.draw(context, stavesmo149603);
// create beam groups and tuplets for format grp smo154069 before formatting
const dirsmo227974 = smo151917.getStemDirection();
smo151917.setStemDirection(dirsmo227974);
smo151918.setStemDirection(dirsmo227974);
const smo227974 = new VF.Beam([smo151917,smo151918]);
 
// formatting measures in staff group smo154069
fmtsmo15193716.format([smo151937v0], 140);
const stavesmo151937 = new VF.Stave(1331, 1290.225303590934, 155);
stavesmo151937.setAttribute('id', 'stavesmo151937');
stavesmo151937.setBegBarType(VF.Barline.type.NONE);
stavesmo151937.setEndBarType(2);
stavesmo151937.setContext(context);
stavesmo151937.draw();
smo151937v0.draw(context, stavesmo151937);
smo227974.setContext(context);
smo227974.draw();
// create beam groups and tuplets for format grp smo156537 before formatting
 
// formatting measures in staff group smo156537
fmtsmo15436316.format([smo154363v0], 140);
const stavesmo154363 = new VF.Stave(1331, 1373.225303590934, 155);
stavesmo154363.setAttribute('id', 'stavesmo154363');
stavesmo154363.setBegBarType(VF.Barline.type.NONE);
stavesmo154363.setEndBarType(2);
stavesmo154363.setContext(context);
stavesmo154363.draw();
smo154363v0.draw(context, stavesmo154363);
// create beam groups and tuplets for format grp smo158895 before formatting
 
// formatting measures in staff group smo158895
fmtsmo15688116.format([smo156881v0], 140);
const stavesmo156881 = new VF.Stave(1331, 1478.225303590934, 155);
stavesmo156881.setAttribute('id', 'stavesmo156881');
stavesmo156881.setBegBarType(VF.Barline.type.NONE);
stavesmo156881.setEndBarType(2);
stavesmo156881.setContext(context);
stavesmo156881.draw();
smo156881v0.draw(context, stavesmo156881);
// create beam groups and tuplets for format grp smo161608 before formatting
 
// formatting measures in staff group smo161608
fmtsmo15934016.format([smo159340v0], 140);
const stavesmo159340 = new VF.Stave(1331, 1555.225303590934, 155);
stavesmo159340.setAttribute('id', 'stavesmo159340');
stavesmo159340.setBegBarType(VF.Barline.type.NONE);
stavesmo159340.setEndBarType(2);
stavesmo159340.setContext(context);
stavesmo159340.draw();
smo159340v0.draw(context, stavesmo159340);
const fmtsmo12119317 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo121193v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo121193v0ar = [];
const smo121177 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo121177.setAttribute('id', 'smo121177');
smo121193v0ar.push(smo121177);
smo121193v0.addTickables(smo121193v0ar)
fmtsmo12119317.joinVoices([smo121193v0]);
const fmtsmo12362017 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo123620v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo123620v0ar = [];
const smo123604 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo123604.setAttribute('id', 'smo123604');
smo123620v0ar.push(smo123604);
smo123620v0.addTickables(smo123620v0ar)
fmtsmo12362017.joinVoices([smo123620v0]);
const fmtsmo12603617 = new VF.Formatter();
//
// voices and notes for stave 2 17
const smo126036v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo126036v0ar = [];
const smo126020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo126020.setAttribute('id', 'smo126020');
smo126036v0ar.push(smo126020);
smo126036v0.addTickables(smo126036v0ar)
fmtsmo12603617.joinVoices([smo126036v0]);
const fmtsmo12841017 = new VF.Formatter();
//
// voices and notes for stave 3 17
const smo128410v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo128410v0ar = [];
const smo128394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo128394.setAttribute('id', 'smo128394');
smo128410v0ar.push(smo128394);
smo128410v0.addTickables(smo128410v0ar)
fmtsmo12841017.joinVoices([smo128410v0]);
const fmtsmo13076117 = new VF.Formatter();
//
// voices and notes for stave 4 17
const smo130761v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo130761v0ar = [];
const smo130745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo130745.setAttribute('id', 'smo130745');
smo130761v0ar.push(smo130745);
smo130761v0.addTickables(smo130761v0ar)
fmtsmo13076117.joinVoices([smo130761v0]);
const fmtsmo13306817 = new VF.Formatter();
//
// voices and notes for stave 5 17
const smo133068v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo133068v0ar = [];
const smo133052 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo133052.setAttribute('id', 'smo133052');
smo133068v0ar.push(smo133052);
smo133068v0.addTickables(smo133068v0ar)
fmtsmo13306817.joinVoices([smo133068v0]);
const fmtsmo13547417 = new VF.Formatter();
//
// voices and notes for stave 6 17
const smo135474v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo135474v0ar = [];
const smo135458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo135458.setAttribute('id', 'smo135458');
smo135474v0ar.push(smo135458);
smo135474v0.addTickables(smo135474v0ar)
fmtsmo13547417.joinVoices([smo135474v0]);
const fmtsmo13780117 = new VF.Formatter();
//
// voices and notes for stave 7 17
const smo137801v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo137801v0ar = [];
const smo137785 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo137785.setAttribute('id', 'smo137785');
smo137801v0ar.push(smo137785);
smo137801v0.addTickables(smo137801v0ar)
fmtsmo13780117.joinVoices([smo137801v0]);
const fmtsmo14015117 = new VF.Formatter();
//
// voices and notes for stave 8 17
const smo140151v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo140151v0ar = [];
const smo140135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo140135.setAttribute('id', 'smo140135');
smo140151v0ar.push(smo140135);
smo140151v0.addTickables(smo140151v0ar)
fmtsmo14015117.joinVoices([smo140151v0]);
const fmtsmo14257317 = new VF.Formatter();
//
// voices and notes for stave 9 17
const smo142573v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo142573v0ar = [];
const smo142557 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo142557.setAttribute('id', 'smo142557');
smo142573v0ar.push(smo142557);
smo142573v0.addTickables(smo142573v0ar)
fmtsmo14257317.joinVoices([smo142573v0]);
const fmtsmo14494617 = new VF.Formatter();
//
// voices and notes for stave 10 17
const smo144946v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo144946v0ar = [];
const smo144930 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo144930.setAttribute('id', 'smo144930');
smo144946v0ar.push(smo144930);
smo144946v0.addTickables(smo144946v0ar)
fmtsmo14494617.joinVoices([smo144946v0]);
const fmtsmo14729217 = new VF.Formatter();
//
// voices and notes for stave 11 17
const smo147292v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo147292v0ar = [];
const smo147276 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo147276.setAttribute('id', 'smo147276');
smo147292v0ar.push(smo147276);
smo147292v0.addTickables(smo147292v0ar)
fmtsmo14729217.joinVoices([smo147292v0]);
const fmtsmo14962017 = new VF.Formatter();
//
// voices and notes for stave 12 17
const smo149620v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo149620v0ar = [];
const smo149604 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo149604.setAttribute('id', 'smo149604');
smo149620v0ar.push(smo149604);
smo149620v0.addTickables(smo149620v0ar)
fmtsmo14962017.joinVoices([smo149620v0]);
const fmtsmo15195417 = new VF.Formatter();
//
// voices and notes for stave 13 17
const smo151954v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo151954v0ar = [];
const smo151938 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo151938.setAttribute('id', 'smo151938');
smo151954v0ar.push(smo151938);
smo151954v0.addTickables(smo151954v0ar)
fmtsmo15195417.joinVoices([smo151954v0]);
const fmtsmo15438017 = new VF.Formatter();
//
// voices and notes for stave 14 17
const smo154380v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo154380v0ar = [];
const smo154364 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo154364.setAttribute('id', 'smo154364');
smo154380v0ar.push(smo154364);
smo154380v0.addTickables(smo154380v0ar)
fmtsmo15438017.joinVoices([smo154380v0]);
const fmtsmo15690017 = new VF.Formatter();
//
// voices and notes for stave 15 17
const smo156900v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo156900v0ar = [];
const smo156882 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo156882.setAttribute('id', 'smo156882');
smo156900v0ar.push(smo156882);
const smo156883 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo156883.setAttribute('id', 'smo156883');
smo156900v0ar.push(smo156883);
const smo156884 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo156884.setAttribute('id', 'smo156884');
smo156900v0ar.push(smo156884);
smo156900v0.addTickables(smo156900v0ar)
fmtsmo15690017.joinVoices([smo156900v0]);
const fmtsmo15936017 = new VF.Formatter();
//
// voices and notes for stave 16 17
const smo159360v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo159360v0ar = [];
const smo159341 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159341.setAttribute('id', 'smo159341');
const smo1593410acc = new VF.Accidental('n');
smo159341.addModifier(smo1593410acc, 0);
smo159360v0ar.push(smo159341);
const smo159342 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159342.setAttribute('id', 'smo159342');
smo159360v0ar.push(smo159342);
const smo159343 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159343.setAttribute('id', 'smo159343');
smo159360v0ar.push(smo159343);
const smo159344 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159344.setAttribute('id', 'smo159344');
smo159360v0ar.push(smo159344);
smo159360v0.addTickables(smo159360v0ar)
fmtsmo15936017.joinVoices([smo159360v0]);
// create beam groups and tuplets for format grp smo161614 before formatting
 
// formatting measures in staff group smo161614
fmtsmo12119317.format([smo121193v0,smo123620v0,smo126036v0,smo128410v0,smo130761v0], 108);
const stavesmo121193 = new VF.Stave(1486, 183.2253035909339, 146);
stavesmo121193.setAttribute('id', 'stavesmo121193');
stavesmo121193.setBegBarType(VF.Barline.type.NONE);
stavesmo121193.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":256}'), -1 * 0);
stavesmo121193.addTimeSignature('2/2');
stavesmo121193.setContext(context);
stavesmo121193.draw();
smo121193v0.draw(context, stavesmo121193);
const stavesmo123620 = new VF.Stave(1486, 288.2253035909339, 146);
stavesmo123620.setAttribute('id', 'stavesmo123620');
stavesmo123620.setBegBarType(VF.Barline.type.NONE);
stavesmo123620.addTimeSignature('2/2');
stavesmo123620.setContext(context);
stavesmo123620.draw();
smo123620v0.draw(context, stavesmo123620);
const stavesmo126036 = new VF.Stave(1486, 379.2253035909339, 146);
stavesmo126036.setAttribute('id', 'stavesmo126036');
stavesmo126036.setBegBarType(VF.Barline.type.NONE);
stavesmo126036.addTimeSignature('2/2');
stavesmo126036.setContext(context);
stavesmo126036.draw();
smo126036v0.draw(context, stavesmo126036);
const stavesmo128410 = new VF.Stave(1486, 479.2253035909339, 146);
stavesmo128410.setAttribute('id', 'stavesmo128410');
stavesmo128410.setBegBarType(VF.Barline.type.NONE);
stavesmo128410.addTimeSignature('2/2');
stavesmo128410.setContext(context);
stavesmo128410.draw();
smo128410v0.draw(context, stavesmo128410);
const stavesmo130761 = new VF.Stave(1486, 549.2253035909339, 146);
stavesmo130761.setAttribute('id', 'stavesmo130761');
stavesmo130761.setBegBarType(VF.Barline.type.NONE);
stavesmo130761.addTimeSignature('2/2');
stavesmo130761.setContext(context);
stavesmo130761.draw();
smo130761v0.draw(context, stavesmo130761);
// create beam groups and tuplets for format grp smo161616 before formatting
 
// formatting measures in staff group smo161616
fmtsmo13306817.format([smo133068v0,smo135474v0,smo137801v0,smo140151v0], 108);
const stavesmo133068 = new VF.Stave(1486, 630.2253035909339, 146);
stavesmo133068.setAttribute('id', 'stavesmo133068');
stavesmo133068.setBegBarType(VF.Barline.type.NONE);
stavesmo133068.addTimeSignature('2/2');
stavesmo133068.setContext(context);
stavesmo133068.draw();
smo133068v0.draw(context, stavesmo133068);
const stavesmo135474 = new VF.Stave(1486, 700.2253035909339, 146);
stavesmo135474.setAttribute('id', 'stavesmo135474');
stavesmo135474.setBegBarType(VF.Barline.type.NONE);
stavesmo135474.addTimeSignature('2/2');
stavesmo135474.setContext(context);
stavesmo135474.draw();
smo135474v0.draw(context, stavesmo135474);
const stavesmo137801 = new VF.Stave(1486, 761.2253035909339, 146);
stavesmo137801.setAttribute('id', 'stavesmo137801');
stavesmo137801.setBegBarType(VF.Barline.type.NONE);
stavesmo137801.addTimeSignature('2/2');
stavesmo137801.setContext(context);
stavesmo137801.draw();
smo137801v0.draw(context, stavesmo137801);
const stavesmo140151 = new VF.Stave(1486, 831.2253035909339, 146);
stavesmo140151.setAttribute('id', 'stavesmo140151');
stavesmo140151.setBegBarType(VF.Barline.type.NONE);
stavesmo140151.addTimeSignature('2/2');
stavesmo140151.setContext(context);
stavesmo140151.draw();
smo140151v0.draw(context, stavesmo140151);
// create beam groups and tuplets for format grp smo161618 before formatting
 
// formatting measures in staff group smo161618
fmtsmo14257317.format([smo142573v0,smo144946v0,smo147292v0,smo149620v0], 108);
const stavesmo142573 = new VF.Stave(1486, 936.2253035909339, 146);
stavesmo142573.setAttribute('id', 'stavesmo142573');
stavesmo142573.setBegBarType(VF.Barline.type.NONE);
stavesmo142573.addTimeSignature('2/2');
stavesmo142573.setContext(context);
stavesmo142573.draw();
smo142573v0.draw(context, stavesmo142573);
const stavesmo144946 = new VF.Stave(1486, 1023.2253035909339, 146);
stavesmo144946.setAttribute('id', 'stavesmo144946');
stavesmo144946.setBegBarType(VF.Barline.type.NONE);
stavesmo144946.addTimeSignature('2/2');
stavesmo144946.setContext(context);
stavesmo144946.draw();
smo144946v0.draw(context, stavesmo144946);
const stavesmo147292 = new VF.Stave(1486, 1128.225303590934, 146);
stavesmo147292.setAttribute('id', 'stavesmo147292');
stavesmo147292.setBegBarType(VF.Barline.type.NONE);
stavesmo147292.addTimeSignature('2/2');
stavesmo147292.setContext(context);
stavesmo147292.draw();
smo147292v0.draw(context, stavesmo147292);
const stavesmo149620 = new VF.Stave(1486, 1213.225303590934, 146);
stavesmo149620.setAttribute('id', 'stavesmo149620');
stavesmo149620.setBegBarType(VF.Barline.type.NONE);
stavesmo149620.addTimeSignature('2/2');
stavesmo149620.setContext(context);
stavesmo149620.draw();
smo149620v0.draw(context, stavesmo149620);
// create beam groups and tuplets for format grp smo154069 before formatting
 
// formatting measures in staff group smo154069
fmtsmo15195417.format([smo151954v0], 108);
const stavesmo151954 = new VF.Stave(1486, 1290.225303590934, 146);
stavesmo151954.setAttribute('id', 'stavesmo151954');
stavesmo151954.setBegBarType(VF.Barline.type.NONE);
stavesmo151954.addTimeSignature('2/2');
stavesmo151954.setContext(context);
stavesmo151954.draw();
smo151954v0.draw(context, stavesmo151954);
// create beam groups and tuplets for format grp smo156537 before formatting
 
// formatting measures in staff group smo156537
fmtsmo15438017.format([smo154380v0], 108);
const stavesmo154380 = new VF.Stave(1486, 1373.225303590934, 146);
stavesmo154380.setAttribute('id', 'stavesmo154380');
stavesmo154380.setBegBarType(VF.Barline.type.NONE);
stavesmo154380.addTimeSignature('2/2');
stavesmo154380.setContext(context);
stavesmo154380.draw();
smo154380v0.draw(context, stavesmo154380);
// create beam groups and tuplets for format grp smo158895 before formatting
 
// formatting measures in staff group smo158895
fmtsmo15690017.format([smo156900v0], 108);
const stavesmo156900 = new VF.Stave(1486, 1478.225303590934, 146);
stavesmo156900.setAttribute('id', 'stavesmo156900');
stavesmo156900.setBegBarType(VF.Barline.type.NONE);
stavesmo156900.addTimeSignature('2/2');
stavesmo156900.setContext(context);
stavesmo156900.draw();
smo156900v0.draw(context, stavesmo156900);
// create beam groups and tuplets for format grp smo161608 before formatting
 
// formatting measures in staff group smo161608
fmtsmo15936017.format([smo159360v0], 108);
const stavesmo159360 = new VF.Stave(1486, 1555.225303590934, 146);
stavesmo159360.setAttribute('id', 'stavesmo159360');
stavesmo159360.setBegBarType(VF.Barline.type.NONE);
stavesmo159360.addTimeSignature('2/2');
stavesmo159360.setContext(context);
stavesmo159360.draw();
smo159360v0.draw(context, stavesmo159360);
const fmtsmo12121018 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo121210v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo121210v0ar = [];
const smo121194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo121194.setAttribute('id', 'smo121194');
smo121210v0ar.push(smo121194);
smo121210v0.addTickables(smo121210v0ar)
fmtsmo12121018.joinVoices([smo121210v0]);
const fmtsmo12363718 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo123637v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo123637v0ar = [];
const smo123621 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo123621.setAttribute('id', 'smo123621');
smo123637v0ar.push(smo123621);
smo123637v0.addTickables(smo123637v0ar)
fmtsmo12363718.joinVoices([smo123637v0]);
const fmtsmo12605318 = new VF.Formatter();
//
// voices and notes for stave 2 18
const smo126053v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo126053v0ar = [];
const smo126037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo126037.setAttribute('id', 'smo126037');
smo126053v0ar.push(smo126037);
smo126053v0.addTickables(smo126053v0ar)
fmtsmo12605318.joinVoices([smo126053v0]);
const fmtsmo12842718 = new VF.Formatter();
//
// voices and notes for stave 3 18
const smo128427v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo128427v0ar = [];
const smo128411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo128411.setAttribute('id', 'smo128411');
smo128427v0ar.push(smo128411);
smo128427v0.addTickables(smo128427v0ar)
fmtsmo12842718.joinVoices([smo128427v0]);
const fmtsmo13077818 = new VF.Formatter();
//
// voices and notes for stave 4 18
const smo130778v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo130778v0ar = [];
const smo130762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo130762.setAttribute('id', 'smo130762');
smo130778v0ar.push(smo130762);
smo130778v0.addTickables(smo130778v0ar)
fmtsmo13077818.joinVoices([smo130778v0]);
const fmtsmo13308518 = new VF.Formatter();
//
// voices and notes for stave 5 18
const smo133085v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo133085v0ar = [];
const smo133069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo133069.setAttribute('id', 'smo133069');
smo133085v0ar.push(smo133069);
smo133085v0.addTickables(smo133085v0ar)
fmtsmo13308518.joinVoices([smo133085v0]);
const fmtsmo13549118 = new VF.Formatter();
//
// voices and notes for stave 6 18
const smo135491v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo135491v0ar = [];
const smo135475 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo135475.setAttribute('id', 'smo135475');
smo135491v0ar.push(smo135475);
smo135491v0.addTickables(smo135491v0ar)
fmtsmo13549118.joinVoices([smo135491v0]);
const fmtsmo13781818 = new VF.Formatter();
//
// voices and notes for stave 7 18
const smo137818v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo137818v0ar = [];
const smo137802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo137802.setAttribute('id', 'smo137802');
smo137818v0ar.push(smo137802);
smo137818v0.addTickables(smo137818v0ar)
fmtsmo13781818.joinVoices([smo137818v0]);
const fmtsmo14016818 = new VF.Formatter();
//
// voices and notes for stave 8 18
const smo140168v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo140168v0ar = [];
const smo140152 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo140152.setAttribute('id', 'smo140152');
smo140168v0ar.push(smo140152);
smo140168v0.addTickables(smo140168v0ar)
fmtsmo14016818.joinVoices([smo140168v0]);
const fmtsmo14259018 = new VF.Formatter();
//
// voices and notes for stave 9 18
const smo142590v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo142590v0ar = [];
const smo142574 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo142574.setAttribute('id', 'smo142574');
smo142590v0ar.push(smo142574);
smo142590v0.addTickables(smo142590v0ar)
fmtsmo14259018.joinVoices([smo142590v0]);
const fmtsmo14496318 = new VF.Formatter();
//
// voices and notes for stave 10 18
const smo144963v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo144963v0ar = [];
const smo144947 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo144947.setAttribute('id', 'smo144947');
smo144963v0ar.push(smo144947);
smo144963v0.addTickables(smo144963v0ar)
fmtsmo14496318.joinVoices([smo144963v0]);
const fmtsmo14730918 = new VF.Formatter();
//
// voices and notes for stave 11 18
const smo147309v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo147309v0ar = [];
const smo147293 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo147293.setAttribute('id', 'smo147293');
smo147309v0ar.push(smo147293);
smo147309v0.addTickables(smo147309v0ar)
fmtsmo14730918.joinVoices([smo147309v0]);
const fmtsmo14963718 = new VF.Formatter();
//
// voices and notes for stave 12 18
const smo149637v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo149637v0ar = [];
const smo149621 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo149621.setAttribute('id', 'smo149621');
smo149637v0ar.push(smo149621);
smo149637v0.addTickables(smo149637v0ar)
fmtsmo14963718.joinVoices([smo149637v0]);
const fmtsmo15197118 = new VF.Formatter();
//
// voices and notes for stave 13 18
const smo151971v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo151971v0ar = [];
const smo151955 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo151955.setAttribute('id', 'smo151955');
smo151971v0ar.push(smo151955);
smo151971v0.addTickables(smo151971v0ar)
fmtsmo15197118.joinVoices([smo151971v0]);
const fmtsmo15439718 = new VF.Formatter();
//
// voices and notes for stave 14 18
const smo154397v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo154397v0ar = [];
const smo154381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo154381.setAttribute('id', 'smo154381');
smo154397v0ar.push(smo154381);
smo154397v0.addTickables(smo154397v0ar)
fmtsmo15439718.joinVoices([smo154397v0]);
const fmtsmo15691918 = new VF.Formatter();
//
// voices and notes for stave 15 18
const smo156919v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo156919v0ar = [];
const smo156901 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo156901.setAttribute('id', 'smo156901');
smo156919v0ar.push(smo156901);
const smo156902 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo156902.setAttribute('id', 'smo156902');
smo156919v0ar.push(smo156902);
const smo156903 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo156903.setAttribute('id', 'smo156903');
smo156919v0ar.push(smo156903);
smo156919v0.addTickables(smo156919v0ar)
fmtsmo15691918.joinVoices([smo156919v0]);
const fmtsmo15938218 = new VF.Formatter();
//
// voices and notes for stave 16 18
const smo159382v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo159382v0ar = [];
const smo159361 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159361.setAttribute('id', 'smo159361');
const smo1593610acc = new VF.Accidental('n');
smo159361.addModifier(smo1593610acc, 0);
smo159382v0ar.push(smo159361);
const smo159362 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159362.setAttribute('id', 'smo159362');
smo159382v0ar.push(smo159362);
const smo159363 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo159363.setAttribute('id', 'smo159363');
smo159382v0ar.push(smo159363);
const smo159364 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159364.setAttribute('id', 'smo159364');
smo159382v0ar.push(smo159364);
const smo159365 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159365.setAttribute('id', 'smo159365');
smo159382v0ar.push(smo159365);
const smo159366 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159366.setAttribute('id', 'smo159366');
smo159382v0ar.push(smo159366);
smo159382v0.addTickables(smo159382v0ar)
fmtsmo15938218.joinVoices([smo159382v0]);
// create beam groups and tuplets for format grp smo161614 before formatting
 
// formatting measures in staff group smo161614
fmtsmo12121018.format([smo121210v0,smo123637v0,smo126053v0,smo128427v0,smo130778v0], 174);
const stavesmo121210 = new VF.Stave(1632, 183.2253035909339, 188);
stavesmo121210.setAttribute('id', 'stavesmo121210');
stavesmo121210.setBegBarType(VF.Barline.type.NONE);
stavesmo121210.setContext(context);
stavesmo121210.draw();
smo121210v0.draw(context, stavesmo121210);
const stavesmo123637 = new VF.Stave(1632, 288.2253035909339, 188);
stavesmo123637.setAttribute('id', 'stavesmo123637');
stavesmo123637.setBegBarType(VF.Barline.type.NONE);
stavesmo123637.setContext(context);
stavesmo123637.draw();
smo123637v0.draw(context, stavesmo123637);
const stavesmo126053 = new VF.Stave(1632, 379.2253035909339, 188);
stavesmo126053.setAttribute('id', 'stavesmo126053');
stavesmo126053.setBegBarType(VF.Barline.type.NONE);
stavesmo126053.setContext(context);
stavesmo126053.draw();
smo126053v0.draw(context, stavesmo126053);
const stavesmo128427 = new VF.Stave(1632, 479.2253035909339, 188);
stavesmo128427.setAttribute('id', 'stavesmo128427');
stavesmo128427.setBegBarType(VF.Barline.type.NONE);
stavesmo128427.setContext(context);
stavesmo128427.draw();
smo128427v0.draw(context, stavesmo128427);
const stavesmo130778 = new VF.Stave(1632, 549.2253035909339, 188);
stavesmo130778.setAttribute('id', 'stavesmo130778');
stavesmo130778.setBegBarType(VF.Barline.type.NONE);
stavesmo130778.setContext(context);
stavesmo130778.draw();
smo130778v0.draw(context, stavesmo130778);
// create beam groups and tuplets for format grp smo161616 before formatting
 
// formatting measures in staff group smo161616
fmtsmo13308518.format([smo133085v0,smo135491v0,smo137818v0,smo140168v0], 174);
const stavesmo133085 = new VF.Stave(1632, 630.2253035909339, 188);
stavesmo133085.setAttribute('id', 'stavesmo133085');
stavesmo133085.setBegBarType(VF.Barline.type.NONE);
stavesmo133085.setContext(context);
stavesmo133085.draw();
smo133085v0.draw(context, stavesmo133085);
const stavesmo135491 = new VF.Stave(1632, 700.2253035909339, 188);
stavesmo135491.setAttribute('id', 'stavesmo135491');
stavesmo135491.setBegBarType(VF.Barline.type.NONE);
stavesmo135491.setContext(context);
stavesmo135491.draw();
smo135491v0.draw(context, stavesmo135491);
const stavesmo137818 = new VF.Stave(1632, 761.2253035909339, 188);
stavesmo137818.setAttribute('id', 'stavesmo137818');
stavesmo137818.setBegBarType(VF.Barline.type.NONE);
stavesmo137818.setContext(context);
stavesmo137818.draw();
smo137818v0.draw(context, stavesmo137818);
const stavesmo140168 = new VF.Stave(1632, 831.2253035909339, 188);
stavesmo140168.setAttribute('id', 'stavesmo140168');
stavesmo140168.setBegBarType(VF.Barline.type.NONE);
stavesmo140168.setContext(context);
stavesmo140168.draw();
smo140168v0.draw(context, stavesmo140168);
// create beam groups and tuplets for format grp smo161618 before formatting
 
// formatting measures in staff group smo161618
fmtsmo14259018.format([smo142590v0,smo144963v0,smo147309v0,smo149637v0], 174);
const stavesmo142590 = new VF.Stave(1632, 936.2253035909339, 188);
stavesmo142590.setAttribute('id', 'stavesmo142590');
stavesmo142590.setBegBarType(VF.Barline.type.NONE);
stavesmo142590.setContext(context);
stavesmo142590.draw();
smo142590v0.draw(context, stavesmo142590);
const stavesmo144963 = new VF.Stave(1632, 1023.2253035909339, 188);
stavesmo144963.setAttribute('id', 'stavesmo144963');
stavesmo144963.setBegBarType(VF.Barline.type.NONE);
stavesmo144963.setContext(context);
stavesmo144963.draw();
smo144963v0.draw(context, stavesmo144963);
const stavesmo147309 = new VF.Stave(1632, 1128.225303590934, 188);
stavesmo147309.setAttribute('id', 'stavesmo147309');
stavesmo147309.setBegBarType(VF.Barline.type.NONE);
stavesmo147309.setContext(context);
stavesmo147309.draw();
smo147309v0.draw(context, stavesmo147309);
const stavesmo149637 = new VF.Stave(1632, 1213.225303590934, 188);
stavesmo149637.setAttribute('id', 'stavesmo149637');
stavesmo149637.setBegBarType(VF.Barline.type.NONE);
stavesmo149637.setContext(context);
stavesmo149637.draw();
smo149637v0.draw(context, stavesmo149637);
// create beam groups and tuplets for format grp smo154069 before formatting
 
// formatting measures in staff group smo154069
fmtsmo15197118.format([smo151971v0], 174);
const stavesmo151971 = new VF.Stave(1632, 1290.225303590934, 188);
stavesmo151971.setAttribute('id', 'stavesmo151971');
stavesmo151971.setBegBarType(VF.Barline.type.NONE);
stavesmo151971.setContext(context);
stavesmo151971.draw();
smo151971v0.draw(context, stavesmo151971);
// create beam groups and tuplets for format grp smo156537 before formatting
 
// formatting measures in staff group smo156537
fmtsmo15439718.format([smo154397v0], 174);
const stavesmo154397 = new VF.Stave(1632, 1373.225303590934, 188);
stavesmo154397.setAttribute('id', 'stavesmo154397');
stavesmo154397.setBegBarType(VF.Barline.type.NONE);
stavesmo154397.setContext(context);
stavesmo154397.draw();
smo154397v0.draw(context, stavesmo154397);
// create beam groups and tuplets for format grp smo158895 before formatting
 
// formatting measures in staff group smo158895
fmtsmo15691918.format([smo156919v0], 174);
const stavesmo156919 = new VF.Stave(1632, 1478.225303590934, 188);
stavesmo156919.setAttribute('id', 'stavesmo156919');
stavesmo156919.setBegBarType(VF.Barline.type.NONE);
stavesmo156919.setContext(context);
stavesmo156919.draw();
smo156919v0.draw(context, stavesmo156919);
// create beam groups and tuplets for format grp smo161608 before formatting
const dirsmo228045 = smo159361.getStemDirection();
smo159361.setStemDirection(dirsmo228045);
smo159362.setStemDirection(dirsmo228045);
const smo228045 = new VF.Beam([smo159361,smo159362]);
 
// formatting measures in staff group smo161608
fmtsmo15938218.format([smo159382v0], 174);
const stavesmo159382 = new VF.Stave(1632, 1555.225303590934, 188);
stavesmo159382.setAttribute('id', 'stavesmo159382');
stavesmo159382.setBegBarType(VF.Barline.type.NONE);
stavesmo159382.setContext(context);
stavesmo159382.draw();
smo159382v0.draw(context, stavesmo159382);
smo228045.setContext(context);
smo228045.draw();
const fmtsmo12122719 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo121227v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo121227v0ar = [];
const smo121211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo121211.setAttribute('id', 'smo121211');
smo121227v0ar.push(smo121211);
smo121227v0.addTickables(smo121227v0ar)
fmtsmo12122719.joinVoices([smo121227v0]);
const fmtsmo12365419 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo123654v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo123654v0ar = [];
const smo123638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo123638.setAttribute('id', 'smo123638');
smo123654v0ar.push(smo123638);
smo123654v0.addTickables(smo123654v0ar)
fmtsmo12365419.joinVoices([smo123654v0]);
const fmtsmo12607019 = new VF.Formatter();
//
// voices and notes for stave 2 19
const smo126070v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo126070v0ar = [];
const smo126054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo126054.setAttribute('id', 'smo126054');
smo126070v0ar.push(smo126054);
smo126070v0.addTickables(smo126070v0ar)
fmtsmo12607019.joinVoices([smo126070v0]);
const fmtsmo12844419 = new VF.Formatter();
//
// voices and notes for stave 3 19
const smo128444v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo128444v0ar = [];
const smo128428 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo128428.setAttribute('id', 'smo128428');
smo128444v0ar.push(smo128428);
smo128444v0.addTickables(smo128444v0ar)
fmtsmo12844419.joinVoices([smo128444v0]);
const fmtsmo13079519 = new VF.Formatter();
//
// voices and notes for stave 4 19
const smo130795v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo130795v0ar = [];
const smo130779 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo130779.setAttribute('id', 'smo130779');
smo130795v0ar.push(smo130779);
smo130795v0.addTickables(smo130795v0ar)
fmtsmo13079519.joinVoices([smo130795v0]);
const fmtsmo13310219 = new VF.Formatter();
//
// voices and notes for stave 5 19
const smo133102v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo133102v0ar = [];
const smo133086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo133086.setAttribute('id', 'smo133086');
smo133102v0ar.push(smo133086);
smo133102v0.addTickables(smo133102v0ar)
fmtsmo13310219.joinVoices([smo133102v0]);
const fmtsmo13550819 = new VF.Formatter();
//
// voices and notes for stave 6 19
const smo135508v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo135508v0ar = [];
const smo135492 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo135492.setAttribute('id', 'smo135492');
smo135508v0ar.push(smo135492);
smo135508v0.addTickables(smo135508v0ar)
fmtsmo13550819.joinVoices([smo135508v0]);
const fmtsmo13783519 = new VF.Formatter();
//
// voices and notes for stave 7 19
const smo137835v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo137835v0ar = [];
const smo137819 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo137819.setAttribute('id', 'smo137819');
smo137835v0ar.push(smo137819);
smo137835v0.addTickables(smo137835v0ar)
fmtsmo13783519.joinVoices([smo137835v0]);
const fmtsmo14018519 = new VF.Formatter();
//
// voices and notes for stave 8 19
const smo140185v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo140185v0ar = [];
const smo140169 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo140169.setAttribute('id', 'smo140169');
smo140185v0ar.push(smo140169);
smo140185v0.addTickables(smo140185v0ar)
fmtsmo14018519.joinVoices([smo140185v0]);
const fmtsmo14260719 = new VF.Formatter();
//
// voices and notes for stave 9 19
const smo142607v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo142607v0ar = [];
const smo142591 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo142591.setAttribute('id', 'smo142591');
smo142607v0ar.push(smo142591);
smo142607v0.addTickables(smo142607v0ar)
fmtsmo14260719.joinVoices([smo142607v0]);
const fmtsmo14498019 = new VF.Formatter();
//
// voices and notes for stave 10 19
const smo144980v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo144980v0ar = [];
const smo144964 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo144964.setAttribute('id', 'smo144964');
smo144980v0ar.push(smo144964);
smo144980v0.addTickables(smo144980v0ar)
fmtsmo14498019.joinVoices([smo144980v0]);
const fmtsmo14732619 = new VF.Formatter();
//
// voices and notes for stave 11 19
const smo147326v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo147326v0ar = [];
const smo147310 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo147310.setAttribute('id', 'smo147310');
smo147326v0ar.push(smo147310);
smo147326v0.addTickables(smo147326v0ar)
fmtsmo14732619.joinVoices([smo147326v0]);
const fmtsmo14965419 = new VF.Formatter();
//
// voices and notes for stave 12 19
const smo149654v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo149654v0ar = [];
const smo149638 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo149638.setAttribute('id', 'smo149638');
smo149654v0ar.push(smo149638);
smo149654v0.addTickables(smo149654v0ar)
fmtsmo14965419.joinVoices([smo149654v0]);
const fmtsmo15198819 = new VF.Formatter();
//
// voices and notes for stave 13 19
const smo151988v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo151988v0ar = [];
const smo151972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo151972.setAttribute('id', 'smo151972');
smo151988v0ar.push(smo151972);
smo151988v0.addTickables(smo151988v0ar)
fmtsmo15198819.joinVoices([smo151988v0]);
const fmtsmo15441419 = new VF.Formatter();
//
// voices and notes for stave 14 19
const smo154414v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo154414v0ar = [];
const smo154398 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo154398.setAttribute('id', 'smo154398');
smo154414v0ar.push(smo154398);
smo154414v0.addTickables(smo154414v0ar)
fmtsmo15441419.joinVoices([smo154414v0]);
const fmtsmo15693819 = new VF.Formatter();
//
// voices and notes for stave 15 19
const smo156938v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo156938v0ar = [];
const smo156920 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo156920.setAttribute('id', 'smo156920');
smo156938v0ar.push(smo156920);
const smo156921 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo156921.setAttribute('id', 'smo156921');
smo156938v0ar.push(smo156921);
const smo156922 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo156922.setAttribute('id', 'smo156922');
smo156938v0ar.push(smo156922);
smo156938v0.addTickables(smo156938v0ar)
fmtsmo15693819.joinVoices([smo156938v0]);
const fmtsmo15940219 = new VF.Formatter();
//
// voices and notes for stave 16 19
const smo159402v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo159402v0ar = [];
const smo159383 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159383.setAttribute('id', 'smo159383');
const smo1593830acc = new VF.Accidental('n');
smo159383.addModifier(smo1593830acc, 0);
smo159402v0ar.push(smo159383);
const smo159384 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159384.setAttribute('id', 'smo159384');
smo159402v0ar.push(smo159384);
const smo159385 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159385.setAttribute('id', 'smo159385');
smo159402v0ar.push(smo159385);
const smo159386 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159386.setAttribute('id', 'smo159386');
smo159402v0ar.push(smo159386);
smo159402v0.addTickables(smo159402v0ar)
fmtsmo15940219.joinVoices([smo159402v0]);
// create beam groups and tuplets for format grp smo161614 before formatting
 
// formatting measures in staff group smo161614
fmtsmo12122719.format([smo121227v0,smo123654v0,smo126070v0,smo128444v0,smo130795v0], 101);
const stavesmo121227 = new VF.Stave(1820, 183.2253035909339, 115);
stavesmo121227.setAttribute('id', 'stavesmo121227');
stavesmo121227.setBegBarType(VF.Barline.type.NONE);
stavesmo121227.setContext(context);
stavesmo121227.draw();
smo121227v0.draw(context, stavesmo121227);
const stavesmo123654 = new VF.Stave(1820, 288.2253035909339, 115);
stavesmo123654.setAttribute('id', 'stavesmo123654');
stavesmo123654.setBegBarType(VF.Barline.type.NONE);
stavesmo123654.setContext(context);
stavesmo123654.draw();
smo123654v0.draw(context, stavesmo123654);
const stavesmo126070 = new VF.Stave(1820, 379.2253035909339, 115);
stavesmo126070.setAttribute('id', 'stavesmo126070');
stavesmo126070.setBegBarType(VF.Barline.type.NONE);
stavesmo126070.setContext(context);
stavesmo126070.draw();
smo126070v0.draw(context, stavesmo126070);
const stavesmo128444 = new VF.Stave(1820, 479.2253035909339, 115);
stavesmo128444.setAttribute('id', 'stavesmo128444');
stavesmo128444.setBegBarType(VF.Barline.type.NONE);
stavesmo128444.setContext(context);
stavesmo128444.draw();
smo128444v0.draw(context, stavesmo128444);
const stavesmo130795 = new VF.Stave(1820, 549.2253035909339, 115);
stavesmo130795.setAttribute('id', 'stavesmo130795');
stavesmo130795.setBegBarType(VF.Barline.type.NONE);
stavesmo130795.setContext(context);
stavesmo130795.draw();
smo130795v0.draw(context, stavesmo130795);
// create beam groups and tuplets for format grp smo161616 before formatting
 
// formatting measures in staff group smo161616
fmtsmo13310219.format([smo133102v0,smo135508v0,smo137835v0,smo140185v0], 101);
const stavesmo133102 = new VF.Stave(1820, 630.2253035909339, 115);
stavesmo133102.setAttribute('id', 'stavesmo133102');
stavesmo133102.setBegBarType(VF.Barline.type.NONE);
stavesmo133102.setContext(context);
stavesmo133102.draw();
smo133102v0.draw(context, stavesmo133102);
const stavesmo135508 = new VF.Stave(1820, 700.2253035909339, 115);
stavesmo135508.setAttribute('id', 'stavesmo135508');
stavesmo135508.setBegBarType(VF.Barline.type.NONE);
stavesmo135508.setContext(context);
stavesmo135508.draw();
smo135508v0.draw(context, stavesmo135508);
const stavesmo137835 = new VF.Stave(1820, 761.2253035909339, 115);
stavesmo137835.setAttribute('id', 'stavesmo137835');
stavesmo137835.setBegBarType(VF.Barline.type.NONE);
stavesmo137835.setContext(context);
stavesmo137835.draw();
smo137835v0.draw(context, stavesmo137835);
const stavesmo140185 = new VF.Stave(1820, 831.2253035909339, 115);
stavesmo140185.setAttribute('id', 'stavesmo140185');
stavesmo140185.setBegBarType(VF.Barline.type.NONE);
stavesmo140185.setContext(context);
stavesmo140185.draw();
smo140185v0.draw(context, stavesmo140185);
// create beam groups and tuplets for format grp smo161618 before formatting
 
// formatting measures in staff group smo161618
fmtsmo14260719.format([smo142607v0,smo144980v0,smo147326v0,smo149654v0], 101);
const stavesmo142607 = new VF.Stave(1820, 936.2253035909339, 115);
stavesmo142607.setAttribute('id', 'stavesmo142607');
stavesmo142607.setBegBarType(VF.Barline.type.NONE);
stavesmo142607.setContext(context);
stavesmo142607.draw();
smo142607v0.draw(context, stavesmo142607);
const stavesmo144980 = new VF.Stave(1820, 1023.2253035909339, 115);
stavesmo144980.setAttribute('id', 'stavesmo144980');
stavesmo144980.setBegBarType(VF.Barline.type.NONE);
stavesmo144980.setContext(context);
stavesmo144980.draw();
smo144980v0.draw(context, stavesmo144980);
const stavesmo147326 = new VF.Stave(1820, 1128.225303590934, 115);
stavesmo147326.setAttribute('id', 'stavesmo147326');
stavesmo147326.setBegBarType(VF.Barline.type.NONE);
stavesmo147326.setContext(context);
stavesmo147326.draw();
smo147326v0.draw(context, stavesmo147326);
const stavesmo149654 = new VF.Stave(1820, 1213.225303590934, 115);
stavesmo149654.setAttribute('id', 'stavesmo149654');
stavesmo149654.setBegBarType(VF.Barline.type.NONE);
stavesmo149654.setContext(context);
stavesmo149654.draw();
smo149654v0.draw(context, stavesmo149654);
// create beam groups and tuplets for format grp smo154069 before formatting
 
// formatting measures in staff group smo154069
fmtsmo15198819.format([smo151988v0], 101);
const stavesmo151988 = new VF.Stave(1820, 1290.225303590934, 115);
stavesmo151988.setAttribute('id', 'stavesmo151988');
stavesmo151988.setBegBarType(VF.Barline.type.NONE);
stavesmo151988.setContext(context);
stavesmo151988.draw();
smo151988v0.draw(context, stavesmo151988);
// create beam groups and tuplets for format grp smo156537 before formatting
 
// formatting measures in staff group smo156537
fmtsmo15441419.format([smo154414v0], 101);
const stavesmo154414 = new VF.Stave(1820, 1373.225303590934, 115);
stavesmo154414.setAttribute('id', 'stavesmo154414');
stavesmo154414.setBegBarType(VF.Barline.type.NONE);
stavesmo154414.setContext(context);
stavesmo154414.draw();
smo154414v0.draw(context, stavesmo154414);
// create beam groups and tuplets for format grp smo158895 before formatting
 
// formatting measures in staff group smo158895
fmtsmo15693819.format([smo156938v0], 101);
const stavesmo156938 = new VF.Stave(1820, 1478.225303590934, 115);
stavesmo156938.setAttribute('id', 'stavesmo156938');
stavesmo156938.setBegBarType(VF.Barline.type.NONE);
stavesmo156938.setContext(context);
stavesmo156938.draw();
smo156938v0.draw(context, stavesmo156938);
// create beam groups and tuplets for format grp smo161608 before formatting
 
// formatting measures in staff group smo161608
fmtsmo15940219.format([smo159402v0], 101);
const stavesmo159402 = new VF.Stave(1820, 1555.225303590934, 115);
stavesmo159402.setAttribute('id', 'stavesmo159402');
stavesmo159402.setBegBarType(VF.Barline.type.NONE);
stavesmo159402.setContext(context);
stavesmo159402.draw();
smo159402v0.draw(context, stavesmo159402);
const fmtsmo12124420 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo121244v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo121244v0ar = [];
const smo121228 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo121228.setAttribute('id', 'smo121228');
smo121244v0ar.push(smo121228);
smo121244v0.addTickables(smo121244v0ar)
fmtsmo12124420.joinVoices([smo121244v0]);
const fmtsmo12367120 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo123671v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo123671v0ar = [];
const smo123655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo123655.setAttribute('id', 'smo123655');
smo123671v0ar.push(smo123655);
smo123671v0.addTickables(smo123671v0ar)
fmtsmo12367120.joinVoices([smo123671v0]);
const fmtsmo12608720 = new VF.Formatter();
//
// voices and notes for stave 2 20
const smo126087v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo126087v0ar = [];
const smo126071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo126071.setAttribute('id', 'smo126071');
smo126087v0ar.push(smo126071);
smo126087v0.addTickables(smo126087v0ar)
fmtsmo12608720.joinVoices([smo126087v0]);
const fmtsmo12846120 = new VF.Formatter();
//
// voices and notes for stave 3 20
const smo128461v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo128461v0ar = [];
const smo128445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo128445.setAttribute('id', 'smo128445');
smo128461v0ar.push(smo128445);
smo128461v0.addTickables(smo128461v0ar)
fmtsmo12846120.joinVoices([smo128461v0]);
const fmtsmo13081220 = new VF.Formatter();
//
// voices and notes for stave 4 20
const smo130812v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo130812v0ar = [];
const smo130796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo130796.setAttribute('id', 'smo130796');
smo130812v0ar.push(smo130796);
smo130812v0.addTickables(smo130812v0ar)
fmtsmo13081220.joinVoices([smo130812v0]);
const fmtsmo13311920 = new VF.Formatter();
//
// voices and notes for stave 5 20
const smo133119v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo133119v0ar = [];
const smo133103 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo133103.setAttribute('id', 'smo133103');
smo133119v0ar.push(smo133103);
smo133119v0.addTickables(smo133119v0ar)
fmtsmo13311920.joinVoices([smo133119v0]);
const fmtsmo13552520 = new VF.Formatter();
//
// voices and notes for stave 6 20
const smo135525v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo135525v0ar = [];
const smo135509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo135509.setAttribute('id', 'smo135509');
smo135525v0ar.push(smo135509);
smo135525v0.addTickables(smo135525v0ar)
fmtsmo13552520.joinVoices([smo135525v0]);
const fmtsmo13785220 = new VF.Formatter();
//
// voices and notes for stave 7 20
const smo137852v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo137852v0ar = [];
const smo137836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo137836.setAttribute('id', 'smo137836');
smo137852v0ar.push(smo137836);
smo137852v0.addTickables(smo137852v0ar)
fmtsmo13785220.joinVoices([smo137852v0]);
const fmtsmo14020220 = new VF.Formatter();
//
// voices and notes for stave 8 20
const smo140202v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo140202v0ar = [];
const smo140186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo140186.setAttribute('id', 'smo140186');
smo140202v0ar.push(smo140186);
smo140202v0.addTickables(smo140202v0ar)
fmtsmo14020220.joinVoices([smo140202v0]);
const fmtsmo14262420 = new VF.Formatter();
//
// voices and notes for stave 9 20
const smo142624v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo142624v0ar = [];
const smo142608 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo142608.setAttribute('id', 'smo142608');
smo142624v0ar.push(smo142608);
smo142624v0.addTickables(smo142624v0ar)
fmtsmo14262420.joinVoices([smo142624v0]);
const fmtsmo14499720 = new VF.Formatter();
//
// voices and notes for stave 10 20
const smo144997v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo144997v0ar = [];
const smo144981 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo144981.setAttribute('id', 'smo144981');
smo144997v0ar.push(smo144981);
smo144997v0.addTickables(smo144997v0ar)
fmtsmo14499720.joinVoices([smo144997v0]);
const fmtsmo14734320 = new VF.Formatter();
//
// voices and notes for stave 11 20
const smo147343v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo147343v0ar = [];
const smo147327 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo147327.setAttribute('id', 'smo147327');
smo147343v0ar.push(smo147327);
smo147343v0.addTickables(smo147343v0ar)
fmtsmo14734320.joinVoices([smo147343v0]);
const fmtsmo14967120 = new VF.Formatter();
//
// voices and notes for stave 12 20
const smo149671v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo149671v0ar = [];
const smo149655 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo149655.setAttribute('id', 'smo149655');
smo149671v0ar.push(smo149655);
smo149671v0.addTickables(smo149671v0ar)
fmtsmo14967120.joinVoices([smo149671v0]);
const fmtsmo15200520 = new VF.Formatter();
//
// voices and notes for stave 13 20
const smo152005v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo152005v0ar = [];
const smo151989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo151989.setAttribute('id', 'smo151989');
smo152005v0ar.push(smo151989);
smo152005v0.addTickables(smo152005v0ar)
fmtsmo15200520.joinVoices([smo152005v0]);
const fmtsmo15443120 = new VF.Formatter();
//
// voices and notes for stave 14 20
const smo154431v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo154431v0ar = [];
const smo154415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo154415.setAttribute('id', 'smo154415');
smo154431v0ar.push(smo154415);
smo154431v0.addTickables(smo154431v0ar)
fmtsmo15443120.joinVoices([smo154431v0]);
const fmtsmo15695720 = new VF.Formatter();
//
// voices and notes for stave 15 20
const smo156957v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo156957v0ar = [];
const smo156939 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo156939.setAttribute('id', 'smo156939');
smo156957v0ar.push(smo156939);
const smo156940 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo156940.setAttribute('id', 'smo156940');
smo156957v0ar.push(smo156940);
const smo156941 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo156941.setAttribute('id', 'smo156941');
smo156957v0ar.push(smo156941);
smo156957v0.addTickables(smo156957v0ar)
fmtsmo15695720.joinVoices([smo156957v0]);
const fmtsmo15942420 = new VF.Formatter();
//
// voices and notes for stave 16 20
const smo159424v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo159424v0ar = [];
const smo159403 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159403.setAttribute('id', 'smo159403');
const smo1594030acc = new VF.Accidental('n');
smo159403.addModifier(smo1594030acc, 0);
smo159424v0ar.push(smo159403);
const smo159404 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159404.setAttribute('id', 'smo159404');
smo159424v0ar.push(smo159404);
const smo159405 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo159405.setAttribute('id', 'smo159405');
smo159424v0ar.push(smo159405);
const smo159406 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159406.setAttribute('id', 'smo159406');
smo159424v0ar.push(smo159406);
const smo159407 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159407.setAttribute('id', 'smo159407');
smo159424v0ar.push(smo159407);
const smo159408 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159408.setAttribute('id', 'smo159408');
smo159424v0ar.push(smo159408);
smo159424v0.addTickables(smo159424v0ar)
fmtsmo15942420.joinVoices([smo159424v0]);
// create beam groups and tuplets for format grp smo161614 before formatting
 
// formatting measures in staff group smo161614
fmtsmo12124420.format([smo121244v0,smo123671v0,smo126087v0,smo128461v0,smo130812v0], 166);
const stavesmo121244 = new VF.Stave(1935, 183.2253035909339, 181);
stavesmo121244.setAttribute('id', 'stavesmo121244');
stavesmo121244.setBegBarType(VF.Barline.type.NONE);
stavesmo121244.setEndBarType(2);
stavesmo121244.setContext(context);
stavesmo121244.draw();
smo121244v0.draw(context, stavesmo121244);
const stavesmo123671 = new VF.Stave(1935, 288.2253035909339, 181);
stavesmo123671.setAttribute('id', 'stavesmo123671');
stavesmo123671.setBegBarType(VF.Barline.type.NONE);
stavesmo123671.setEndBarType(2);
stavesmo123671.setContext(context);
stavesmo123671.draw();
smo123671v0.draw(context, stavesmo123671);
const stavesmo126087 = new VF.Stave(1935, 379.2253035909339, 181);
stavesmo126087.setAttribute('id', 'stavesmo126087');
stavesmo126087.setBegBarType(VF.Barline.type.NONE);
stavesmo126087.setEndBarType(2);
stavesmo126087.setContext(context);
stavesmo126087.draw();
smo126087v0.draw(context, stavesmo126087);
const stavesmo128461 = new VF.Stave(1935, 479.2253035909339, 181);
stavesmo128461.setAttribute('id', 'stavesmo128461');
stavesmo128461.setBegBarType(VF.Barline.type.NONE);
stavesmo128461.setEndBarType(2);
stavesmo128461.setContext(context);
stavesmo128461.draw();
smo128461v0.draw(context, stavesmo128461);
const stavesmo130812 = new VF.Stave(1935, 549.2253035909339, 181);
stavesmo130812.setAttribute('id', 'stavesmo130812');
stavesmo130812.setBegBarType(VF.Barline.type.NONE);
stavesmo130812.setEndBarType(2);
stavesmo130812.setContext(context);
stavesmo130812.draw();
smo130812v0.draw(context, stavesmo130812);
// create beam groups and tuplets for format grp smo161616 before formatting
 
// formatting measures in staff group smo161616
fmtsmo13311920.format([smo133119v0,smo135525v0,smo137852v0,smo140202v0], 166);
const stavesmo133119 = new VF.Stave(1935, 630.2253035909339, 181);
stavesmo133119.setAttribute('id', 'stavesmo133119');
stavesmo133119.setBegBarType(VF.Barline.type.NONE);
stavesmo133119.setEndBarType(2);
stavesmo133119.setContext(context);
stavesmo133119.draw();
smo133119v0.draw(context, stavesmo133119);
const stavesmo135525 = new VF.Stave(1935, 700.2253035909339, 181);
stavesmo135525.setAttribute('id', 'stavesmo135525');
stavesmo135525.setBegBarType(VF.Barline.type.NONE);
stavesmo135525.setEndBarType(2);
stavesmo135525.setContext(context);
stavesmo135525.draw();
smo135525v0.draw(context, stavesmo135525);
const stavesmo137852 = new VF.Stave(1935, 761.2253035909339, 181);
stavesmo137852.setAttribute('id', 'stavesmo137852');
stavesmo137852.setBegBarType(VF.Barline.type.NONE);
stavesmo137852.setEndBarType(2);
stavesmo137852.setContext(context);
stavesmo137852.draw();
smo137852v0.draw(context, stavesmo137852);
const stavesmo140202 = new VF.Stave(1935, 831.2253035909339, 181);
stavesmo140202.setAttribute('id', 'stavesmo140202');
stavesmo140202.setBegBarType(VF.Barline.type.NONE);
stavesmo140202.setEndBarType(2);
stavesmo140202.setContext(context);
stavesmo140202.draw();
smo140202v0.draw(context, stavesmo140202);
// create beam groups and tuplets for format grp smo161618 before formatting
 
// formatting measures in staff group smo161618
fmtsmo14262420.format([smo142624v0,smo144997v0,smo147343v0,smo149671v0], 166);
const stavesmo142624 = new VF.Stave(1935, 936.2253035909339, 181);
stavesmo142624.setAttribute('id', 'stavesmo142624');
stavesmo142624.setBegBarType(VF.Barline.type.NONE);
stavesmo142624.setEndBarType(2);
stavesmo142624.setContext(context);
stavesmo142624.draw();
smo142624v0.draw(context, stavesmo142624);
const stavesmo144997 = new VF.Stave(1935, 1023.2253035909339, 181);
stavesmo144997.setAttribute('id', 'stavesmo144997');
stavesmo144997.setBegBarType(VF.Barline.type.NONE);
stavesmo144997.setEndBarType(2);
stavesmo144997.setContext(context);
stavesmo144997.draw();
smo144997v0.draw(context, stavesmo144997);
const stavesmo147343 = new VF.Stave(1935, 1128.225303590934, 181);
stavesmo147343.setAttribute('id', 'stavesmo147343');
stavesmo147343.setBegBarType(VF.Barline.type.NONE);
stavesmo147343.setEndBarType(2);
stavesmo147343.setContext(context);
stavesmo147343.draw();
smo147343v0.draw(context, stavesmo147343);
const stavesmo149671 = new VF.Stave(1935, 1213.225303590934, 181);
stavesmo149671.setAttribute('id', 'stavesmo149671');
stavesmo149671.setBegBarType(VF.Barline.type.NONE);
stavesmo149671.setEndBarType(2);
stavesmo149671.setContext(context);
stavesmo149671.draw();
smo149671v0.draw(context, stavesmo149671);
// create beam groups and tuplets for format grp smo154069 before formatting
 
// formatting measures in staff group smo154069
fmtsmo15200520.format([smo152005v0], 166);
const stavesmo152005 = new VF.Stave(1935, 1290.225303590934, 181);
stavesmo152005.setAttribute('id', 'stavesmo152005');
stavesmo152005.setBegBarType(VF.Barline.type.NONE);
stavesmo152005.setEndBarType(2);
stavesmo152005.setContext(context);
stavesmo152005.draw();
smo152005v0.draw(context, stavesmo152005);
// create beam groups and tuplets for format grp smo156537 before formatting
 
// formatting measures in staff group smo156537
fmtsmo15443120.format([smo154431v0], 166);
const stavesmo154431 = new VF.Stave(1935, 1373.225303590934, 181);
stavesmo154431.setAttribute('id', 'stavesmo154431');
stavesmo154431.setBegBarType(VF.Barline.type.NONE);
stavesmo154431.setEndBarType(2);
stavesmo154431.setContext(context);
stavesmo154431.draw();
smo154431v0.draw(context, stavesmo154431);
// create beam groups and tuplets for format grp smo158895 before formatting
 
// formatting measures in staff group smo158895
fmtsmo15695720.format([smo156957v0], 166);
const stavesmo156957 = new VF.Stave(1935, 1478.225303590934, 181);
stavesmo156957.setAttribute('id', 'stavesmo156957');
stavesmo156957.setBegBarType(VF.Barline.type.NONE);
stavesmo156957.setEndBarType(2);
stavesmo156957.setContext(context);
stavesmo156957.draw();
smo156957v0.draw(context, stavesmo156957);
// create beam groups and tuplets for format grp smo161608 before formatting
const dirsmo228098 = smo159403.getStemDirection();
smo159403.setStemDirection(dirsmo228098);
smo159404.setStemDirection(dirsmo228098);
const smo228098 = new VF.Beam([smo159403,smo159404]);
 
// formatting measures in staff group smo161608
fmtsmo15942420.format([smo159424v0], 166);
const stavesmo159424 = new VF.Stave(1935, 1555.225303590934, 181);
stavesmo159424.setAttribute('id', 'stavesmo159424');
stavesmo159424.setBegBarType(VF.Barline.type.NONE);
stavesmo159424.setEndBarType(2);
stavesmo159424.setContext(context);
stavesmo159424.draw();
smo159424v0.draw(context, stavesmo159424);
smo228098.setContext(context);
smo228098.draw();
const fmtsmo12126621 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo121266v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo121266v0ar = [];
const smo121245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo121245.setAttribute('id', 'smo121245');
smo121245.addModifier(new VF.Dot(), 0);
smo121266v0ar.push(smo121245);
const smo121247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo121247.setAttribute('id', 'smo121247');
smo121266v0ar.push(smo121247);
const smo121248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo121248.setAttribute('id', 'smo121248');
smo121266v0ar.push(smo121248);
const smo121249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo121249.setAttribute('id', 'smo121249');
smo121266v0ar.push(smo121249);
smo121266v0.addTickables(smo121266v0ar)
fmtsmo12126621.joinVoices([smo121266v0]);
const fmtsmo12369321 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo123693v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo123693v0ar = [];
const smo123672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo123672.setAttribute('id', 'smo123672');
smo123672.addModifier(new VF.Dot(), 0);
smo123693v0ar.push(smo123672);
const smo123674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo123674.setAttribute('id', 'smo123674');
smo123693v0ar.push(smo123674);
const smo123675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo123675.setAttribute('id', 'smo123675');
smo123693v0ar.push(smo123675);
const smo123676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo123676.setAttribute('id', 'smo123676');
smo123693v0ar.push(smo123676);
smo123693v0.addTickables(smo123693v0ar)
fmtsmo12369321.joinVoices([smo123693v0]);
const fmtsmo12610921 = new VF.Formatter();
//
// voices and notes for stave 2 21
const smo126109v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo126109v0ar = [];
const smo126088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo126088.setAttribute('id', 'smo126088');
smo126088.addModifier(new VF.Dot(), 0);
smo126109v0ar.push(smo126088);
const smo126090 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo126090.setAttribute('id', 'smo126090');
smo126109v0ar.push(smo126090);
const smo126091 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo126091.setAttribute('id', 'smo126091');
smo126109v0ar.push(smo126091);
const smo126092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo126092.setAttribute('id', 'smo126092');
smo126109v0ar.push(smo126092);
smo126109v0.addTickables(smo126109v0ar)
fmtsmo12610921.joinVoices([smo126109v0]);
const fmtsmo12848321 = new VF.Formatter();
//
// voices and notes for stave 3 21
const smo128483v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo128483v0ar = [];
const smo128462 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo128462.setAttribute('id', 'smo128462');
smo128462.addModifier(new VF.Dot(), 0);
smo128483v0ar.push(smo128462);
const smo128464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo128464.setAttribute('id', 'smo128464');
smo128483v0ar.push(smo128464);
const smo128465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo128465.setAttribute('id', 'smo128465');
smo128483v0ar.push(smo128465);
const smo128466 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo128466.setAttribute('id', 'smo128466');
smo128483v0ar.push(smo128466);
smo128483v0.addTickables(smo128483v0ar)
fmtsmo12848321.joinVoices([smo128483v0]);
const fmtsmo13083021 = new VF.Formatter();
//
// voices and notes for stave 4 21
const smo130830v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo130830v0ar = [];
const smo130813 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo130813.setAttribute('id', 'smo130813');
smo130830v0ar.push(smo130813);
smo130830v0.addTickables(smo130830v0ar)
fmtsmo13083021.joinVoices([smo130830v0]);
const fmtsmo13313921 = new VF.Formatter();
//
// voices and notes for stave 5 21
const smo133139v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo133139v0ar = [];
const smo133120 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo133120.setAttribute('id', 'smo133120');
smo133139v0ar.push(smo133120);
const smo133121 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo133121.setAttribute('id', 'smo133121');
smo133139v0ar.push(smo133121);
const smo133122 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo133122.setAttribute('id', 'smo133122');
smo133139v0ar.push(smo133122);
smo133139v0.addTickables(smo133139v0ar)
fmtsmo13313921.joinVoices([smo133139v0]);
const fmtsmo13554521 = new VF.Formatter();
//
// voices and notes for stave 6 21
const smo135545v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo135545v0ar = [];
const smo135526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo135526.setAttribute('id', 'smo135526');
smo135545v0ar.push(smo135526);
const smo135527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo135527.setAttribute('id', 'smo135527');
smo135545v0ar.push(smo135527);
const smo135528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo135528.setAttribute('id', 'smo135528');
smo135545v0ar.push(smo135528);
smo135545v0.addTickables(smo135545v0ar)
fmtsmo13554521.joinVoices([smo135545v0]);
const fmtsmo13787221 = new VF.Formatter();
//
// voices and notes for stave 7 21
const smo137872v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo137872v0ar = [];
const smo137853 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo137853.setAttribute('id', 'smo137853');
smo137872v0ar.push(smo137853);
const smo137854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo137854.setAttribute('id', 'smo137854');
smo137872v0ar.push(smo137854);
const smo137855 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo137855.setAttribute('id', 'smo137855');
smo137872v0ar.push(smo137855);
smo137872v0.addTickables(smo137872v0ar)
fmtsmo13787221.joinVoices([smo137872v0]);
const fmtsmo14022221 = new VF.Formatter();
//
// voices and notes for stave 8 21
const smo140222v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo140222v0ar = [];
const smo140203 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo140203.setAttribute('id', 'smo140203');
smo140222v0ar.push(smo140203);
const smo140204 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo140204.setAttribute('id', 'smo140204');
smo140222v0ar.push(smo140204);
const smo140205 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo140205.setAttribute('id', 'smo140205');
smo140222v0ar.push(smo140205);
smo140222v0.addTickables(smo140222v0ar)
fmtsmo14022221.joinVoices([smo140222v0]);
const fmtsmo14264221 = new VF.Formatter();
//
// voices and notes for stave 9 21
const smo142642v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo142642v0ar = [];
const smo142625 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo142625.setAttribute('id', 'smo142625');
smo142642v0ar.push(smo142625);
smo142642v0.addTickables(smo142642v0ar)
fmtsmo14264221.joinVoices([smo142642v0]);
const fmtsmo14501521 = new VF.Formatter();
//
// voices and notes for stave 10 21
const smo145015v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo145015v0ar = [];
const smo144998 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo144998.setAttribute('id', 'smo144998');
smo145015v0ar.push(smo144998);
smo145015v0.addTickables(smo145015v0ar)
fmtsmo14501521.joinVoices([smo145015v0]);
const fmtsmo14736121 = new VF.Formatter();
//
// voices and notes for stave 11 21
const smo147361v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo147361v0ar = [];
const smo147344 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo147344.setAttribute('id', 'smo147344');
smo147361v0ar.push(smo147344);
smo147361v0.addTickables(smo147361v0ar)
fmtsmo14736121.joinVoices([smo147361v0]);
const fmtsmo14968921 = new VF.Formatter();
//
// voices and notes for stave 12 21
const smo149689v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo149689v0ar = [];
const smo149672 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo149672.setAttribute('id', 'smo149672');
smo149689v0ar.push(smo149672);
smo149689v0.addTickables(smo149689v0ar)
fmtsmo14968921.joinVoices([smo149689v0]);
const fmtsmo15202621 = new VF.Formatter();
//
// voices and notes for stave 13 21
const smo152026v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo152026v0ar = [];
const smo152006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo152006.setAttribute('id', 'smo152006');
smo152026v0ar.push(smo152006);
const smo152007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo152007.setAttribute('id', 'smo152007');
smo152026v0ar.push(smo152007);
const smo152008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo152008.setAttribute('id', 'smo152008');
smo152026v0ar.push(smo152008);
const smo152009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo152009.setAttribute('id', 'smo152009');
smo152026v0ar.push(smo152009);
smo152026v0.addTickables(smo152026v0ar)
fmtsmo15202621.joinVoices([smo152026v0]);
const fmtsmo15445421 = new VF.Formatter();
//
// voices and notes for stave 14 21
const smo154454v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo154454v0ar = [];
const smo154432 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo154432.setAttribute('id', 'smo154432');
smo154454v0ar.push(smo154432);
const smo154433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo154433.setAttribute('id', 'smo154433');
smo154454v0ar.push(smo154433);
const smo154434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo154434.setAttribute('id', 'smo154434');
smo154454v0ar.push(smo154434);
const smo154435 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo154435.setAttribute('id', 'smo154435');
smo154454v0ar.push(smo154435);
const smo154436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo154436.setAttribute('id', 'smo154436');
smo154454v0ar.push(smo154436);
const smo154437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo154437.setAttribute('id', 'smo154437');
smo154454v0ar.push(smo154437);
smo154454v0.addTickables(smo154454v0ar)
fmtsmo15445421.joinVoices([smo154454v0]);
const fmtsmo15697721 = new VF.Formatter();
//
// voices and notes for stave 15 21
const smo156977v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo156977v0ar = [];
const smo156958 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo156958.setAttribute('id', 'smo156958');
smo156977v0ar.push(smo156958);
const smo156959 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo156959.setAttribute('id', 'smo156959');
smo156977v0ar.push(smo156959);
const smo156960 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo156960.setAttribute('id', 'smo156960');
smo156977v0ar.push(smo156960);
smo156977v0.addTickables(smo156977v0ar)
fmtsmo15697721.joinVoices([smo156977v0]);
const fmtsmo15944521 = new VF.Formatter();
//
// voices and notes for stave 16 21
const smo159445v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo159445v0ar = [];
const smo159425 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159425.setAttribute('id', 'smo159425');
const smo1594250acc = new VF.Accidental('n');
smo159425.addModifier(smo1594250acc, 0);
smo159445v0ar.push(smo159425);
const smo159426 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159426.setAttribute('id', 'smo159426');
smo159445v0ar.push(smo159426);
const smo159427 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159427.setAttribute('id', 'smo159427');
smo159445v0ar.push(smo159427);
const smo159428 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo159428.setAttribute('id', 'smo159428');
smo159445v0ar.push(smo159428);
smo159445v0.addTickables(smo159445v0ar)
fmtsmo15944521.joinVoices([smo159445v0]);
// create beam groups and tuplets for format grp smo161614 before formatting
 
// formatting measures in staff group smo161614
fmtsmo12126621.format([smo121266v0,smo123693v0,smo126109v0,smo128483v0,smo130830v0], 157);
const stavesmo121266 = new VF.Stave(2116, 183.2253035909339, 180);
stavesmo121266.setAttribute('id', 'stavesmo121266');
stavesmo121266.setBegBarType(4);
stavesmo121266.setSection('B', 0);
stavesmo121266.setContext(context);
stavesmo121266.draw();
smo121266v0.draw(context, stavesmo121266);
const stavesmo123693 = new VF.Stave(2116, 288.2253035909339, 180);
stavesmo123693.setAttribute('id', 'stavesmo123693');
stavesmo123693.setBegBarType(4);
stavesmo123693.setContext(context);
stavesmo123693.draw();
smo123693v0.draw(context, stavesmo123693);
const stavesmo126109 = new VF.Stave(2116, 379.2253035909339, 180);
stavesmo126109.setAttribute('id', 'stavesmo126109');
stavesmo126109.setBegBarType(4);
stavesmo126109.setContext(context);
stavesmo126109.draw();
smo126109v0.draw(context, stavesmo126109);
const stavesmo128483 = new VF.Stave(2116, 479.2253035909339, 180);
stavesmo128483.setAttribute('id', 'stavesmo128483');
stavesmo128483.setBegBarType(4);
stavesmo128483.setContext(context);
stavesmo128483.draw();
smo128483v0.draw(context, stavesmo128483);
const stavesmo130830 = new VF.Stave(2116, 549.2253035909339, 180);
stavesmo130830.setAttribute('id', 'stavesmo130830');
stavesmo130830.setBegBarType(4);
stavesmo130830.setContext(context);
stavesmo130830.draw();
smo130830v0.draw(context, stavesmo130830);
// create beam groups and tuplets for format grp smo161616 before formatting
 
// formatting measures in staff group smo161616
fmtsmo13313921.format([smo133139v0,smo135545v0,smo137872v0,smo140222v0], 157);
const stavesmo133139 = new VF.Stave(2116, 630.2253035909339, 180);
stavesmo133139.setAttribute('id', 'stavesmo133139');
stavesmo133139.setBegBarType(4);
stavesmo133139.setContext(context);
stavesmo133139.draw();
smo133139v0.draw(context, stavesmo133139);
const stavesmo135545 = new VF.Stave(2116, 700.2253035909339, 180);
stavesmo135545.setAttribute('id', 'stavesmo135545');
stavesmo135545.setBegBarType(4);
stavesmo135545.setContext(context);
stavesmo135545.draw();
smo135545v0.draw(context, stavesmo135545);
const stavesmo137872 = new VF.Stave(2116, 761.2253035909339, 180);
stavesmo137872.setAttribute('id', 'stavesmo137872');
stavesmo137872.setBegBarType(4);
stavesmo137872.setContext(context);
stavesmo137872.draw();
smo137872v0.draw(context, stavesmo137872);
const stavesmo140222 = new VF.Stave(2116, 831.2253035909339, 180);
stavesmo140222.setAttribute('id', 'stavesmo140222');
stavesmo140222.setBegBarType(4);
stavesmo140222.setContext(context);
stavesmo140222.draw();
smo140222v0.draw(context, stavesmo140222);
// create beam groups and tuplets for format grp smo161618 before formatting
 
// formatting measures in staff group smo161618
fmtsmo14264221.format([smo142642v0,smo145015v0,smo147361v0,smo149689v0], 157);
const stavesmo142642 = new VF.Stave(2116, 936.2253035909339, 180);
stavesmo142642.setAttribute('id', 'stavesmo142642');
stavesmo142642.setBegBarType(4);
stavesmo142642.setContext(context);
stavesmo142642.draw();
smo142642v0.draw(context, stavesmo142642);
const stavesmo145015 = new VF.Stave(2116, 1023.2253035909339, 180);
stavesmo145015.setAttribute('id', 'stavesmo145015');
stavesmo145015.setBegBarType(4);
stavesmo145015.setContext(context);
stavesmo145015.draw();
smo145015v0.draw(context, stavesmo145015);
const stavesmo147361 = new VF.Stave(2116, 1128.225303590934, 180);
stavesmo147361.setAttribute('id', 'stavesmo147361');
stavesmo147361.setBegBarType(4);
stavesmo147361.setContext(context);
stavesmo147361.draw();
smo147361v0.draw(context, stavesmo147361);
const stavesmo149689 = new VF.Stave(2116, 1213.225303590934, 180);
stavesmo149689.setAttribute('id', 'stavesmo149689');
stavesmo149689.setBegBarType(4);
stavesmo149689.setContext(context);
stavesmo149689.draw();
smo149689v0.draw(context, stavesmo149689);
// create beam groups and tuplets for format grp smo154069 before formatting
 
// formatting measures in staff group smo154069
fmtsmo15202621.format([smo152026v0], 157);
const stavesmo152026 = new VF.Stave(2116, 1290.225303590934, 180);
stavesmo152026.setAttribute('id', 'stavesmo152026');
stavesmo152026.setBegBarType(4);
stavesmo152026.setContext(context);
stavesmo152026.draw();
smo152026v0.draw(context, stavesmo152026);
// create beam groups and tuplets for format grp smo156537 before formatting
const dirsmo228114 = smo154432.getStemDirection();
smo154432.setStemDirection(dirsmo228114);
smo154433.setStemDirection(dirsmo228114);
smo154434.setStemDirection(dirsmo228114);
smo154435.setStemDirection(dirsmo228114);
const smo228114 = new VF.Beam([smo154432,smo154433,smo154434,smo154435]);
 
// formatting measures in staff group smo156537
fmtsmo15445421.format([smo154454v0], 157);
const stavesmo154454 = new VF.Stave(2116, 1373.225303590934, 180);
stavesmo154454.setAttribute('id', 'stavesmo154454');
stavesmo154454.setBegBarType(4);
stavesmo154454.setContext(context);
stavesmo154454.draw();
smo154454v0.draw(context, stavesmo154454);
smo228114.setContext(context);
smo228114.draw();
// create beam groups and tuplets for format grp smo158895 before formatting
 
// formatting measures in staff group smo158895
fmtsmo15697721.format([smo156977v0], 157);
const stavesmo156977 = new VF.Stave(2116, 1478.225303590934, 180);
stavesmo156977.setAttribute('id', 'stavesmo156977');
stavesmo156977.setBegBarType(4);
stavesmo156977.setContext(context);
stavesmo156977.draw();
smo156977v0.draw(context, stavesmo156977);
// create beam groups and tuplets for format grp smo161608 before formatting
 
// formatting measures in staff group smo161608
fmtsmo15944521.format([smo159445v0], 157);
const stavesmo159445 = new VF.Stave(2116, 1555.225303590934, 180);
stavesmo159445.setAttribute('id', 'stavesmo159445');
stavesmo159445.setBegBarType(4);
stavesmo159445.setContext(context);
stavesmo159445.draw();
smo159445v0.draw(context, stavesmo159445);
const rightsmo161608stavesmo12126616 = new VF.StaveConnector(stavesmo121266, stavesmo130830).setType(0);
rightsmo161608stavesmo12126616.setContext(context).draw();
const rightsmo161608stavesmo13313916 = new VF.StaveConnector(stavesmo133139, stavesmo140222).setType(0);
rightsmo161608stavesmo13313916.setContext(context).draw();
const rightsmo161608stavesmo14264216 = new VF.StaveConnector(stavesmo142642, stavesmo149689).setType(0);
rightsmo161608stavesmo14264216.setContext(context).draw();
// modifier from 0-17-0-0 to 0-18-0-0
const smo236278 = new VF.StaveHairpin({ first_note: smo121177, last_note: smo121177,
       firstNote: smo121177, lastNote: smo121177 });
smo236278.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo236278.setContext(context).setPosition(4).draw();
// modifier from 0-15-0-6 to 0-15-0-9
const smo236279 = new VF.Curve(smo121135, smo121138, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo236279.setContext(context).draw();
// modifier from 0-17-0-0 to 0-18-0-0
const smo236280 = new VF.StaveTie({ first_note: smo121177, last_note: smo121194, 
          firstNote: smo121177, lastNote: smo121194, first_indices: [0], last_indices: [0]});
smo236280.setContext(context).draw();
// modifier from 0-21-0-1 to 0-21-0-2
const smo236281 = new VF.StaveTie({ first_note: smo121247, last_note: smo121248, 
          firstNote: smo121247, lastNote: smo121248, first_indices: [0], last_indices: [0]});
smo236281.setContext(context).draw();
// modifier from 1-17-0-0 to 1-18-0-0
const smo236282 = new VF.StaveHairpin({ first_note: smo123604, last_note: smo123604,
       firstNote: smo123604, lastNote: smo123604 });
smo236282.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo236282.setContext(context).setPosition(4).draw();
// modifier from 1-15-0-6 to 1-15-0-9
const smo236283 = new VF.Curve(smo123562, smo123565, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo236283.setContext(context).draw();
// modifier from 1-17-0-0 to 1-18-0-0
const smo236284 = new VF.StaveTie({ first_note: smo123604, last_note: smo123621, 
          firstNote: smo123604, lastNote: smo123621, first_indices: [0], last_indices: [0]});
smo236284.setContext(context).draw();
// modifier from 1-21-0-1 to 1-21-0-2
const smo236285 = new VF.StaveTie({ first_note: smo123674, last_note: smo123675, 
          firstNote: smo123674, lastNote: smo123675, first_indices: [0], last_indices: [0]});
smo236285.setContext(context).draw();
// modifier from 2-17-0-0 to 2-18-0-0
const smo236286 = new VF.StaveHairpin({ first_note: smo126020, last_note: smo126020,
       firstNote: smo126020, lastNote: smo126020 });
smo236286.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo236286.setContext(context).setPosition(4).draw();
// modifier from 2-17-0-0 to 2-18-0-0
const smo236287 = new VF.StaveTie({ first_note: smo126020, last_note: smo126037, 
          firstNote: smo126020, lastNote: smo126037, first_indices: [0], last_indices: [0]});
smo236287.setContext(context).draw();
// modifier from 2-21-0-1 to 2-21-0-2
const smo236288 = new VF.StaveTie({ first_note: smo126090, last_note: smo126091, 
          firstNote: smo126090, lastNote: smo126091, first_indices: [0], last_indices: [0]});
smo236288.setContext(context).draw();
// modifier from 3-17-0-0 to 3-18-0-0
const smo236289 = new VF.StaveHairpin({ first_note: smo128394, last_note: smo128394,
       firstNote: smo128394, lastNote: smo128394 });
smo236289.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo236289.setContext(context).setPosition(4).draw();
// modifier from 3-17-0-0 to 3-18-0-0
const smo236290 = new VF.StaveTie({ first_note: smo128394, last_note: smo128411, 
          firstNote: smo128394, lastNote: smo128411, first_indices: [0], last_indices: [0]});
smo236290.setContext(context).draw();
// modifier from 3-21-0-1 to 3-21-0-2
const smo236291 = new VF.StaveTie({ first_note: smo128464, last_note: smo128465, 
          firstNote: smo128464, lastNote: smo128465, first_indices: [0], last_indices: [0]});
smo236291.setContext(context).draw();
// modifier from 4-17-0-0 to 4-18-0-0
const smo236292 = new VF.StaveHairpin({ first_note: smo130745, last_note: smo130745,
       firstNote: smo130745, lastNote: smo130745 });
smo236292.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo236292.setContext(context).setPosition(4).draw();
// modifier from 4-17-0-0 to 4-18-0-0
const smo236293 = new VF.StaveTie({ first_note: smo130745, last_note: smo130762, 
          firstNote: smo130745, lastNote: smo130762, first_indices: [0], last_indices: [0]});
smo236293.setContext(context).draw();
// modifier from 5-17-0-0 to 5-18-0-0
const smo236294 = new VF.StaveHairpin({ first_note: smo133052, last_note: smo133052,
       firstNote: smo133052, lastNote: smo133052 });
smo236294.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo236294.setContext(context).setPosition(4).draw();
// modifier from 5-14-0-2 to 5-14-0-3
const smo236295 = new VF.StaveTie({ first_note: smo132987, last_note: smo132988, 
          firstNote: smo132987, lastNote: smo132988, first_indices: [0], last_indices: [0]});
smo236295.setContext(context).draw();
// modifier from 5-17-0-0 to 5-18-0-0
const smo236296 = new VF.StaveTie({ first_note: smo133052, last_note: smo133069, 
          firstNote: smo133052, lastNote: smo133069, first_indices: [0], last_indices: [0]});
smo236296.setContext(context).draw();
// modifier from 6-17-0-0 to 6-18-0-0
const smo236297 = new VF.StaveHairpin({ first_note: smo135458, last_note: smo135458,
       firstNote: smo135458, lastNote: smo135458 });
smo236297.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo236297.setContext(context).setPosition(4).draw();
// modifier from 6-17-0-0 to 6-18-0-0
const smo236298 = new VF.StaveTie({ first_note: smo135458, last_note: smo135475, 
          firstNote: smo135458, lastNote: smo135475, first_indices: [0], last_indices: [0]});
smo236298.setContext(context).draw();
// modifier from 9-17-0-0 to 9-18-0-0
const smo236299 = new VF.StaveHairpin({ first_note: smo142557, last_note: smo142557,
       firstNote: smo142557, lastNote: smo142557 });
smo236299.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo236299.setContext(context).setPosition(4).draw();
// modifier from 9-14-0-2 to 9-14-0-3
const smo236300 = new VF.StaveTie({ first_note: smo142492, last_note: smo142493, 
          firstNote: smo142492, lastNote: smo142493, first_indices: [0], last_indices: [0]});
smo236300.setContext(context).draw();
// modifier from 9-17-0-0 to 9-18-0-0
const smo236301 = new VF.StaveTie({ first_note: smo142557, last_note: smo142574, 
          firstNote: smo142557, lastNote: smo142574, first_indices: [0], last_indices: [0]});
smo236301.setContext(context).draw();
// modifier from 10-17-0-0 to 10-18-0-0
const smo236302 = new VF.StaveHairpin({ first_note: smo144930, last_note: smo144930,
       firstNote: smo144930, lastNote: smo144930 });
smo236302.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo236302.setContext(context).setPosition(4).draw();
// modifier from 10-14-0-2 to 10-14-0-3
const smo236303 = new VF.StaveTie({ first_note: smo144865, last_note: smo144866, 
          firstNote: smo144865, lastNote: smo144866, first_indices: [0], last_indices: [0]});
smo236303.setContext(context).draw();
// modifier from 10-17-0-0 to 10-18-0-0
const smo236304 = new VF.StaveTie({ first_note: smo144930, last_note: smo144947, 
          firstNote: smo144930, lastNote: smo144947, first_indices: [0], last_indices: [0]});
smo236304.setContext(context).draw();
// modifier from 11-17-0-0 to 11-18-0-0
const smo236305 = new VF.StaveHairpin({ first_note: smo147276, last_note: smo147276,
       firstNote: smo147276, lastNote: smo147276 });
smo236305.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo236305.setContext(context).setPosition(4).draw();
// modifier from 11-14-0-2 to 11-14-0-3
const smo236306 = new VF.StaveTie({ first_note: smo147211, last_note: smo147212, 
          firstNote: smo147211, lastNote: smo147212, first_indices: [0], last_indices: [0]});
smo236306.setContext(context).draw();
// modifier from 11-17-0-0 to 11-18-0-0
const smo236307 = new VF.StaveTie({ first_note: smo147276, last_note: smo147293, 
          firstNote: smo147276, lastNote: smo147293, first_indices: [0], last_indices: [0]});
smo236307.setContext(context).draw();
// modifier from 12-17-0-0 to 12-18-0-0
const smo236308 = new VF.StaveHairpin({ first_note: smo149604, last_note: smo149604,
       firstNote: smo149604, lastNote: smo149604 });
smo236308.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo236308.setContext(context).setPosition(4).draw();
// modifier from 12-17-0-0 to 12-18-0-0
const smo236309 = new VF.StaveTie({ first_note: smo149604, last_note: smo149621, 
          firstNote: smo149604, lastNote: smo149621, first_indices: [0], last_indices: [0]});
smo236309.setContext(context).draw();
// modifier from 13-14-0-2 to 13-14-0-3
const smo236310 = new VF.StaveTie({ first_note: smo151873, last_note: smo151874, 
          firstNote: smo151873, lastNote: smo151874, first_indices: [0], last_indices: [0]});
smo236310.setContext(context).draw();
// modifier from 14-21-0-3 to 14-21-0-4
const smo236311 = new VF.StaveTie({ first_note: smo154435, last_note: smo154436, 
          firstNote: smo154435, lastNote: smo154436, first_indices: [0], last_indices: [0]});
smo236311.setContext(context).draw();
}
// @@ Plena para tres ninos p 3/14  by Newman
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
const fmtsmo11136213 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo111362v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111362v0ar = [];
const smo111338 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo111338.setAttribute('id', 'smo111338');
smo111362v0ar.push(smo111338);
const smo111339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo111339.setAttribute('id', 'smo111339');
smo111362v0ar.push(smo111339);
const smo111340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo111340.setAttribute('id', 'smo111340');
smo111362v0ar.push(smo111340);
const smo111341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo111341.setAttribute('id', 'smo111341');
smo111362v0ar.push(smo111341);
const smo111342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo111342.setAttribute('id', 'smo111342');
smo111362v0ar.push(smo111342);
const smo111343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo111343.setAttribute('id', 'smo111343');
smo111362v0ar.push(smo111343);
const smo111344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo111344.setAttribute('id', 'smo111344');
smo111362v0ar.push(smo111344);
const smo111345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo111345.setAttribute('id', 'smo111345');
smo111362v0ar.push(smo111345);
const smo111346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo111346.setAttribute('id', 'smo111346');
smo111362v0ar.push(smo111346);
smo111362v0.addTickables(smo111362v0ar)
fmtsmo11136213.joinVoices([smo111362v0]);
const fmtsmo11378913 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo113789v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113789v0ar = [];
const smo113765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo113765.setAttribute('id', 'smo113765');
smo113789v0ar.push(smo113765);
const smo113766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo113766.setAttribute('id', 'smo113766');
smo113789v0ar.push(smo113766);
const smo113767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo113767.setAttribute('id', 'smo113767');
smo113789v0ar.push(smo113767);
const smo113768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["c#/5/n"]}'))
smo113768.setAttribute('id', 'smo113768');
smo113789v0ar.push(smo113768);
const smo113769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo113769.setAttribute('id', 'smo113769');
smo113789v0ar.push(smo113769);
const smo113770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo113770.setAttribute('id', 'smo113770');
smo113789v0ar.push(smo113770);
const smo113771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo113771.setAttribute('id', 'smo113771');
smo113789v0ar.push(smo113771);
const smo113772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo113772.setAttribute('id', 'smo113772');
smo113789v0ar.push(smo113772);
const smo113773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo113773.setAttribute('id', 'smo113773');
smo113789v0ar.push(smo113773);
smo113789v0.addTickables(smo113789v0ar)
fmtsmo11378913.joinVoices([smo113789v0]);
const fmtsmo11620713 = new VF.Formatter();
//
// voices and notes for stave 2 13
const smo116207v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo116207v0ar = [];
const smo116183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo116183.setAttribute('id', 'smo116183');
smo116207v0ar.push(smo116183);
const smo116184 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo116184.setAttribute('id', 'smo116184');
smo116207v0ar.push(smo116184);
const smo116185 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo116185.setAttribute('id', 'smo116185');
smo116207v0ar.push(smo116185);
const smo116186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo116186.setAttribute('id', 'smo116186');
smo116207v0ar.push(smo116186);
const smo116187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo116187.setAttribute('id', 'smo116187');
smo116207v0ar.push(smo116187);
const smo116188 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo116188.setAttribute('id', 'smo116188');
smo116207v0ar.push(smo116188);
const smo116189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo116189.setAttribute('id', 'smo116189');
smo116207v0ar.push(smo116189);
const smo116190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo116190.setAttribute('id', 'smo116190');
smo116207v0ar.push(smo116190);
const smo116191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo116191.setAttribute('id', 'smo116191');
smo116207v0ar.push(smo116191);
smo116207v0.addTickables(smo116207v0ar)
fmtsmo11620713.joinVoices([smo116207v0]);
const fmtsmo11858113 = new VF.Formatter();
//
// voices and notes for stave 3 13
const smo118581v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo118581v0ar = [];
const smo118557 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo118557.setAttribute('id', 'smo118557');
smo118581v0ar.push(smo118557);
const smo118558 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo118558.setAttribute('id', 'smo118558');
smo118581v0ar.push(smo118558);
const smo118559 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo118559.setAttribute('id', 'smo118559');
smo118581v0ar.push(smo118559);
const smo118560 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo118560.setAttribute('id', 'smo118560');
smo118581v0ar.push(smo118560);
const smo118561 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo118561.setAttribute('id', 'smo118561');
smo118581v0ar.push(smo118561);
const smo118562 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo118562.setAttribute('id', 'smo118562');
smo118581v0ar.push(smo118562);
const smo118563 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo118563.setAttribute('id', 'smo118563');
smo118581v0ar.push(smo118563);
const smo118564 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo118564.setAttribute('id', 'smo118564');
smo118581v0ar.push(smo118564);
const smo118565 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo118565.setAttribute('id', 'smo118565');
smo118581v0ar.push(smo118565);
smo118581v0.addTickables(smo118581v0ar)
fmtsmo11858113.joinVoices([smo118581v0]);
const fmtsmo12094113 = new VF.Formatter();
//
// voices and notes for stave 4 13
const smo120941v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo120941v0ar = [];
const smo120922 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo120922.setAttribute('id', 'smo120922');
const  smo226262 = new VF.Articulation('a.').setPosition(3);
smo120922.addModifier(smo226262, 0);
smo120941v0ar.push(smo120922);
const smo120924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo120924.setAttribute('id', 'smo120924');
smo120941v0ar.push(smo120924);
const smo120925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo120925.setAttribute('id', 'smo120925');
smo120941v0ar.push(smo120925);
smo120941v0.addTickables(smo120941v0ar)
fmtsmo12094113.joinVoices([smo120941v0]);
const fmtsmo12324113 = new VF.Formatter();
//
// voices and notes for stave 5 13
const smo123241v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo123241v0ar = [];
const smo123218 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo123218.setAttribute('id', 'smo123218');
smo123241v0ar.push(smo123218);
const smo123219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo123219.setAttribute('id', 'smo123219');
smo123241v0ar.push(smo123219);
const smo123220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo123220.setAttribute('id', 'smo123220');
smo123241v0ar.push(smo123220);
const smo123221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo123221.setAttribute('id', 'smo123221');
smo123241v0ar.push(smo123221);
const smo123222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo123222.setAttribute('id', 'smo123222');
smo123241v0ar.push(smo123222);
const smo123223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo123223.setAttribute('id', 'smo123223');
smo123241v0ar.push(smo123223);
const smo123224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo123224.setAttribute('id', 'smo123224');
smo123241v0ar.push(smo123224);
const smo123225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo123225.setAttribute('id', 'smo123225');
smo123241v0ar.push(smo123225);
smo123241v0.addTickables(smo123241v0ar)
fmtsmo12324113.joinVoices([smo123241v0]);
const fmtsmo12564713 = new VF.Formatter();
//
// voices and notes for stave 6 13
const smo125647v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo125647v0ar = [];
const smo125624 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo125624.setAttribute('id', 'smo125624');
smo125647v0ar.push(smo125624);
const smo125625 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo125625.setAttribute('id', 'smo125625');
smo125647v0ar.push(smo125625);
const smo125626 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo125626.setAttribute('id', 'smo125626');
smo125647v0ar.push(smo125626);
const smo125627 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo125627.setAttribute('id', 'smo125627');
smo125647v0ar.push(smo125627);
const smo125628 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo125628.setAttribute('id', 'smo125628');
smo125647v0ar.push(smo125628);
const smo125629 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo125629.setAttribute('id', 'smo125629');
smo125647v0ar.push(smo125629);
const smo125630 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo125630.setAttribute('id', 'smo125630');
smo125647v0ar.push(smo125630);
const smo125631 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo125631.setAttribute('id', 'smo125631');
smo125647v0ar.push(smo125631);
smo125647v0.addTickables(smo125647v0ar)
fmtsmo12564713.joinVoices([smo125647v0]);
const fmtsmo12799013 = new VF.Formatter();
//
// voices and notes for stave 7 13
const smo127990v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo127990v0ar = [];
const smo127974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo127974.setAttribute('id', 'smo127974');
smo127990v0ar.push(smo127974);
smo127990v0.addTickables(smo127990v0ar)
fmtsmo12799013.joinVoices([smo127990v0]);
const fmtsmo13034013 = new VF.Formatter();
//
// voices and notes for stave 8 13
const smo130340v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo130340v0ar = [];
const smo130324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo130324.setAttribute('id', 'smo130324');
smo130340v0ar.push(smo130324);
smo130340v0.addTickables(smo130340v0ar)
fmtsmo13034013.joinVoices([smo130340v0]);
const fmtsmo13274613 = new VF.Formatter();
//
// voices and notes for stave 9 13
const smo132746v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo132746v0ar = [];
const smo132723 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo132723.setAttribute('id', 'smo132723');
smo132746v0ar.push(smo132723);
const smo132724 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo132724.setAttribute('id', 'smo132724');
smo132746v0ar.push(smo132724);
const smo132725 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo132725.setAttribute('id', 'smo132725');
smo132746v0ar.push(smo132725);
const smo132726 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo132726.setAttribute('id', 'smo132726');
smo132746v0ar.push(smo132726);
const smo132727 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo132727.setAttribute('id', 'smo132727');
smo132746v0ar.push(smo132727);
const smo132728 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo132728.setAttribute('id', 'smo132728');
smo132746v0ar.push(smo132728);
const smo132729 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo132729.setAttribute('id', 'smo132729');
smo132746v0ar.push(smo132729);
const smo132730 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo132730.setAttribute('id', 'smo132730');
smo132746v0ar.push(smo132730);
smo132746v0.addTickables(smo132746v0ar)
fmtsmo13274613.joinVoices([smo132746v0]);
const fmtsmo13511913 = new VF.Formatter();
//
// voices and notes for stave 10 13
const smo135119v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo135119v0ar = [];
const smo135096 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo135096.setAttribute('id', 'smo135096');
smo135119v0ar.push(smo135096);
const smo135097 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo135097.setAttribute('id', 'smo135097');
smo135119v0ar.push(smo135097);
const smo135098 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo135098.setAttribute('id', 'smo135098');
smo135119v0ar.push(smo135098);
const smo135099 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo135099.setAttribute('id', 'smo135099');
smo135119v0ar.push(smo135099);
const smo135100 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo135100.setAttribute('id', 'smo135100');
smo135119v0ar.push(smo135100);
const smo135101 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo135101.setAttribute('id', 'smo135101');
smo135119v0ar.push(smo135101);
const smo135102 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo135102.setAttribute('id', 'smo135102');
smo135119v0ar.push(smo135102);
const smo135103 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo135103.setAttribute('id', 'smo135103');
smo135119v0ar.push(smo135103);
smo135119v0.addTickables(smo135119v0ar)
fmtsmo13511913.joinVoices([smo135119v0]);
const fmtsmo13746513 = new VF.Formatter();
//
// voices and notes for stave 11 13
const smo137465v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo137465v0ar = [];
const smo137442 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo137442.setAttribute('id', 'smo137442');
smo137465v0ar.push(smo137442);
const smo137443 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo137443.setAttribute('id', 'smo137443');
smo137465v0ar.push(smo137443);
const smo137444 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo137444.setAttribute('id', 'smo137444');
smo137465v0ar.push(smo137444);
const smo137445 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo137445.setAttribute('id', 'smo137445');
smo137465v0ar.push(smo137445);
const smo137446 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo137446.setAttribute('id', 'smo137446');
smo137465v0ar.push(smo137446);
const smo137447 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo137447.setAttribute('id', 'smo137447');
smo137465v0ar.push(smo137447);
const smo137448 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo137448.setAttribute('id', 'smo137448');
smo137465v0ar.push(smo137448);
const smo137449 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo137449.setAttribute('id', 'smo137449');
smo137465v0ar.push(smo137449);
smo137465v0.addTickables(smo137465v0ar)
fmtsmo13746513.joinVoices([smo137465v0]);
const fmtsmo13980013 = new VF.Formatter();
//
// voices and notes for stave 12 13
const smo139800v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo139800v0ar = [];
const smo139781 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo139781.setAttribute('id', 'smo139781');
const  smo226263 = new VF.Articulation('a.').setPosition(3);
smo139781.addModifier(smo226263, 0);
smo139800v0ar.push(smo139781);
const smo139783 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo139783.setAttribute('id', 'smo139783');
smo139800v0ar.push(smo139783);
const smo139784 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n"]}'))
smo139784.setAttribute('id', 'smo139784');
smo139800v0ar.push(smo139784);
smo139800v0.addTickables(smo139800v0ar)
fmtsmo13980013.joinVoices([smo139800v0]);
const fmtsmo14212713 = new VF.Formatter();
//
// voices and notes for stave 13 13
const smo142127v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo142127v0ar = [];
const smo142104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo142104.setAttribute('id', 'smo142104');
smo142127v0ar.push(smo142104);
const smo142105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo142105.setAttribute('id', 'smo142105');
smo142127v0ar.push(smo142105);
const smo142106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo142106.setAttribute('id', 'smo142106');
smo142127v0ar.push(smo142106);
const smo142107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo142107.setAttribute('id', 'smo142107');
smo142127v0ar.push(smo142107);
const smo142108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo142108.setAttribute('id', 'smo142108');
smo142127v0ar.push(smo142108);
const smo142109 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo142109.setAttribute('id', 'smo142109');
smo142127v0ar.push(smo142109);
const smo142110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo142110.setAttribute('id', 'smo142110');
smo142127v0ar.push(smo142110);
const smo142111 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo142111.setAttribute('id', 'smo142111');
smo142127v0ar.push(smo142111);
smo142127v0.addTickables(smo142127v0ar)
fmtsmo14212713.joinVoices([smo142127v0]);
const fmtsmo14456913 = new VF.Formatter();
//
// voices and notes for stave 14 13
const smo144569v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo144569v0ar = [];
const smo144553 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo144553.setAttribute('id', 'smo144553');
smo144569v0ar.push(smo144553);
smo144569v0.addTickables(smo144569v0ar)
fmtsmo14456913.joinVoices([smo144569v0]);
const fmtsmo14707813 = new VF.Formatter();
//
// voices and notes for stave 15 13
const smo147078v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo147078v0ar = [];
const smo147059 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo147059.setAttribute('id', 'smo147059');
const  smo226264 = new VF.Articulation('a.').setPosition(3);
smo147059.addModifier(smo226264, 0);
smo147078v0ar.push(smo147059);
const smo147061 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo147061.setAttribute('id', 'smo147061');
smo147078v0ar.push(smo147061);
const smo147062 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo147062.setAttribute('id', 'smo147062');
smo147078v0ar.push(smo147062);
smo147078v0.addTickables(smo147078v0ar)
fmtsmo14707813.joinVoices([smo147078v0]);
const fmtsmo14952213 = new VF.Formatter();
//
// voices and notes for stave 16 13
const smo149522v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo149522v0ar = [];
const smo149496 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149496.setAttribute('id', 'smo149496');
const smo1494960acc = new VF.Accidental('n');
smo149496.addModifier(smo1494960acc, 0);
smo149522v0ar.push(smo149496);
const smo149497 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149497.setAttribute('id', 'smo149497');
smo149522v0ar.push(smo149497);
const smo149498 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149498.setAttribute('id', 'smo149498');
smo149522v0ar.push(smo149498);
const smo149499 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149499.setAttribute('id', 'smo149499');
smo149522v0ar.push(smo149499);
const smo149500 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149500.setAttribute('id', 'smo149500');
smo149522v0ar.push(smo149500);
const smo149501 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149501.setAttribute('id', 'smo149501');
smo149522v0ar.push(smo149501);
const smo149502 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo149502.setAttribute('id', 'smo149502');
smo149522v0ar.push(smo149502);
const smo149503 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149503.setAttribute('id', 'smo149503');
smo149522v0ar.push(smo149503);
const smo149504 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo149504.setAttribute('id', 'smo149504');
smo149522v0ar.push(smo149504);
const smo149505 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149505.setAttribute('id', 'smo149505');
smo149522v0ar.push(smo149505);
smo149522v0.addTickables(smo149522v0ar)
fmtsmo14952213.joinVoices([smo149522v0]);
// create beam groups and tuplets for format grp smo151871 before formatting
const dirsmo218039 = smo111338.getStemDirection();
smo111338.setStemDirection(dirsmo218039);
smo111339.setStemDirection(dirsmo218039);
smo111340.setStemDirection(dirsmo218039);
const smo218039 = new VF.Beam([smo111338,smo111339,smo111340]);
const dirsmo218040 = smo111341.getStemDirection();
smo111341.setStemDirection(dirsmo218040);
smo111342.setStemDirection(dirsmo218040);
const smo218040 = new VF.Beam([smo111341,smo111342]);
const dirsmo218041 = smo111344.getStemDirection();
smo111344.setStemDirection(dirsmo218041);
smo111345.setStemDirection(dirsmo218041);
const smo218041 = new VF.Beam([smo111344,smo111345]);
const dirsmo218044 = smo113765.getStemDirection();
smo113765.setStemDirection(dirsmo218044);
smo113766.setStemDirection(dirsmo218044);
smo113767.setStemDirection(dirsmo218044);
const smo218044 = new VF.Beam([smo113765,smo113766,smo113767]);
const dirsmo218045 = smo113768.getStemDirection();
smo113768.setStemDirection(dirsmo218045);
smo113769.setStemDirection(dirsmo218045);
const smo218045 = new VF.Beam([smo113768,smo113769]);
const dirsmo218046 = smo113771.getStemDirection();
smo113771.setStemDirection(dirsmo218046);
smo113772.setStemDirection(dirsmo218046);
const smo218046 = new VF.Beam([smo113771,smo113772]);
const dirsmo218049 = smo116183.getStemDirection();
smo116183.setStemDirection(dirsmo218049);
smo116184.setStemDirection(dirsmo218049);
smo116185.setStemDirection(dirsmo218049);
const smo218049 = new VF.Beam([smo116183,smo116184,smo116185]);
const dirsmo218050 = smo116186.getStemDirection();
smo116186.setStemDirection(dirsmo218050);
smo116187.setStemDirection(dirsmo218050);
const smo218050 = new VF.Beam([smo116186,smo116187]);
const dirsmo218051 = smo116189.getStemDirection();
smo116189.setStemDirection(dirsmo218051);
smo116190.setStemDirection(dirsmo218051);
const smo218051 = new VF.Beam([smo116189,smo116190]);
const dirsmo218054 = smo118557.getStemDirection();
smo118557.setStemDirection(dirsmo218054);
smo118558.setStemDirection(dirsmo218054);
smo118559.setStemDirection(dirsmo218054);
const smo218054 = new VF.Beam([smo118557,smo118558,smo118559]);
const dirsmo218055 = smo118560.getStemDirection();
smo118560.setStemDirection(dirsmo218055);
smo118561.setStemDirection(dirsmo218055);
const smo218055 = new VF.Beam([smo118560,smo118561]);
const dirsmo218056 = smo118563.getStemDirection();
smo118563.setStemDirection(dirsmo218056);
smo118564.setStemDirection(dirsmo218056);
const smo218056 = new VF.Beam([smo118563,smo118564]);
 
// formatting measures in staff group smo151871
fmtsmo11136213.format([smo111362v0,smo113789v0,smo116207v0,smo118581v0,smo120941v0], 352);
const stavesmo111362 = new VF.Stave(138, 183.2253035909339, 440);
stavesmo111362.setAttribute('id', 'stavesmo111362');
stavesmo111362.setBegBarType(1);
stavesmo111362.addClef('treble');
const keysmo111362 = new VF.KeySignature('D');
keysmo111362.addToStave(stavesmo111362);
stavesmo111362.setContext(context);
stavesmo111362.draw();
smo111362v0.draw(context, stavesmo111362);
smo218039.setContext(context);
smo218039.draw();
smo218040.setContext(context);
smo218040.draw();
smo218041.setContext(context);
smo218041.draw();
const stavesmo113789 = new VF.Stave(138, 288.2253035909339, 440);
stavesmo113789.setAttribute('id', 'stavesmo113789');
stavesmo113789.setBegBarType(1);
stavesmo113789.addClef('treble');
const keysmo113789 = new VF.KeySignature('D');
keysmo113789.addToStave(stavesmo113789);
stavesmo113789.setContext(context);
stavesmo113789.draw();
smo113789v0.draw(context, stavesmo113789);
smo218044.setContext(context);
smo218044.draw();
smo218045.setContext(context);
smo218045.draw();
smo218046.setContext(context);
smo218046.draw();
const stavesmo116207 = new VF.Stave(138, 379.2253035909339, 440);
stavesmo116207.setAttribute('id', 'stavesmo116207');
stavesmo116207.setBegBarType(1);
stavesmo116207.addClef('treble');
const keysmo116207 = new VF.KeySignature('G');
keysmo116207.addToStave(stavesmo116207);
stavesmo116207.setContext(context);
stavesmo116207.draw();
smo116207v0.draw(context, stavesmo116207);
smo218049.setContext(context);
smo218049.draw();
smo218050.setContext(context);
smo218050.draw();
smo218051.setContext(context);
smo218051.draw();
const stavesmo118581 = new VF.Stave(138, 479.2253035909339, 440);
stavesmo118581.setAttribute('id', 'stavesmo118581');
stavesmo118581.setBegBarType(1);
stavesmo118581.addClef('treble');
const keysmo118581 = new VF.KeySignature('G');
keysmo118581.addToStave(stavesmo118581);
stavesmo118581.setContext(context);
stavesmo118581.draw();
smo118581v0.draw(context, stavesmo118581);
smo218054.setContext(context);
smo218054.draw();
smo218055.setContext(context);
smo218055.draw();
smo218056.setContext(context);
smo218056.draw();
const stavesmo120941 = new VF.Stave(138, 549.2253035909339, 440);
stavesmo120941.setAttribute('id', 'stavesmo120941');
stavesmo120941.setBegBarType(1);
stavesmo120941.addClef('treble');
const keysmo120941 = new VF.KeySignature('D');
keysmo120941.addToStave(stavesmo120941);
stavesmo120941.setContext(context);
stavesmo120941.draw();
smo120941v0.draw(context, stavesmo120941);
// create beam groups and tuplets for format grp smo151873 before formatting
const dirsmo218061 = smo123219.getStemDirection();
smo123219.setStemDirection(dirsmo218061);
smo123220.setStemDirection(dirsmo218061);
const smo218061 = new VF.Beam([smo123219,smo123220]);
const dirsmo218062 = smo123222.getStemDirection();
smo123222.setStemDirection(dirsmo218062);
smo123223.setStemDirection(dirsmo218062);
smo123224.setStemDirection(dirsmo218062);
smo123225.setStemDirection(dirsmo218062);
const smo218062 = new VF.Beam([smo123222,smo123223,smo123224,smo123225]);
const dirsmo218065 = smo125625.getStemDirection();
smo125625.setStemDirection(dirsmo218065);
smo125626.setStemDirection(dirsmo218065);
const smo218065 = new VF.Beam([smo125625,smo125626]);
const dirsmo218066 = smo125628.getStemDirection();
smo125628.setStemDirection(dirsmo218066);
smo125629.setStemDirection(dirsmo218066);
smo125630.setStemDirection(dirsmo218066);
smo125631.setStemDirection(dirsmo218066);
const smo218066 = new VF.Beam([smo125628,smo125629,smo125630,smo125631]);
 
// formatting measures in staff group smo151873
fmtsmo12324113.format([smo123241v0,smo125647v0,smo127990v0,smo130340v0], 364);
const stavesmo123241 = new VF.Stave(138, 630.2253035909339, 440);
stavesmo123241.setAttribute('id', 'stavesmo123241');
stavesmo123241.setBegBarType(1);
stavesmo123241.addClef('treble');
const keysmo123241 = new VF.KeySignature('G');
keysmo123241.addToStave(stavesmo123241);
stavesmo123241.setContext(context);
stavesmo123241.draw();
smo123241v0.draw(context, stavesmo123241);
smo218061.setContext(context);
smo218061.draw();
smo218062.setContext(context);
smo218062.draw();
const stavesmo125647 = new VF.Stave(138, 700.2253035909339, 440);
stavesmo125647.setAttribute('id', 'stavesmo125647');
stavesmo125647.setBegBarType(1);
stavesmo125647.addClef('treble');
const keysmo125647 = new VF.KeySignature('G');
keysmo125647.addToStave(stavesmo125647);
stavesmo125647.setContext(context);
stavesmo125647.draw();
smo125647v0.draw(context, stavesmo125647);
smo218065.setContext(context);
smo218065.draw();
smo218066.setContext(context);
smo218066.draw();
const stavesmo127990 = new VF.Stave(138, 761.2253035909339, 440);
stavesmo127990.setAttribute('id', 'stavesmo127990');
stavesmo127990.setBegBarType(1);
stavesmo127990.addClef('treble');
const keysmo127990 = new VF.KeySignature('G');
keysmo127990.addToStave(stavesmo127990);
stavesmo127990.setContext(context);
stavesmo127990.draw();
smo127990v0.draw(context, stavesmo127990);
const stavesmo130340 = new VF.Stave(138, 831.2253035909339, 440);
stavesmo130340.setAttribute('id', 'stavesmo130340');
stavesmo130340.setBegBarType(1);
stavesmo130340.addClef('treble');
const keysmo130340 = new VF.KeySignature('G');
keysmo130340.addToStave(stavesmo130340);
stavesmo130340.setContext(context);
stavesmo130340.draw();
smo130340v0.draw(context, stavesmo130340);
// create beam groups and tuplets for format grp smo151875 before formatting
const dirsmo218073 = smo132724.getStemDirection();
smo132724.setStemDirection(dirsmo218073);
smo132725.setStemDirection(dirsmo218073);
const smo218073 = new VF.Beam([smo132724,smo132725]);
const dirsmo218074 = smo132727.getStemDirection();
smo132727.setStemDirection(dirsmo218074);
smo132728.setStemDirection(dirsmo218074);
smo132729.setStemDirection(dirsmo218074);
smo132730.setStemDirection(dirsmo218074);
const smo218074 = new VF.Beam([smo132727,smo132728,smo132729,smo132730]);
const dirsmo218077 = smo135097.getStemDirection();
smo135097.setStemDirection(dirsmo218077);
smo135098.setStemDirection(dirsmo218077);
const smo218077 = new VF.Beam([smo135097,smo135098]);
const dirsmo218078 = smo135100.getStemDirection();
smo135100.setStemDirection(dirsmo218078);
smo135101.setStemDirection(dirsmo218078);
smo135102.setStemDirection(dirsmo218078);
smo135103.setStemDirection(dirsmo218078);
const smo218078 = new VF.Beam([smo135100,smo135101,smo135102,smo135103]);
const dirsmo218081 = smo137443.getStemDirection();
smo137443.setStemDirection(dirsmo218081);
smo137444.setStemDirection(dirsmo218081);
const smo218081 = new VF.Beam([smo137443,smo137444]);
const dirsmo218082 = smo137446.getStemDirection();
smo137446.setStemDirection(dirsmo218082);
smo137447.setStemDirection(dirsmo218082);
smo137448.setStemDirection(dirsmo218082);
smo137449.setStemDirection(dirsmo218082);
const smo218082 = new VF.Beam([smo137446,smo137447,smo137448,smo137449]);
 
// formatting measures in staff group smo151875
fmtsmo13274613.format([smo132746v0,smo135119v0,smo137465v0,smo139800v0], 364);
const stavesmo132746 = new VF.Stave(138, 936.2253035909339, 440);
stavesmo132746.setAttribute('id', 'stavesmo132746');
stavesmo132746.setBegBarType(1);
stavesmo132746.addClef('bass');
const keysmo132746 = new VF.KeySignature('F');
keysmo132746.addToStave(stavesmo132746);
stavesmo132746.setContext(context);
stavesmo132746.draw();
smo132746v0.draw(context, stavesmo132746);
smo218073.setContext(context);
smo218073.draw();
smo218074.setContext(context);
smo218074.draw();
const stavesmo135119 = new VF.Stave(138, 1023.2253035909339, 440);
stavesmo135119.setAttribute('id', 'stavesmo135119');
stavesmo135119.setBegBarType(1);
stavesmo135119.addClef('bass');
const keysmo135119 = new VF.KeySignature('F');
keysmo135119.addToStave(stavesmo135119);
stavesmo135119.setContext(context);
stavesmo135119.draw();
smo135119v0.draw(context, stavesmo135119);
smo218077.setContext(context);
smo218077.draw();
smo218078.setContext(context);
smo218078.draw();
const stavesmo137465 = new VF.Stave(138, 1128.225303590934, 440);
stavesmo137465.setAttribute('id', 'stavesmo137465');
stavesmo137465.setBegBarType(1);
stavesmo137465.addClef('bass');
const keysmo137465 = new VF.KeySignature('F');
keysmo137465.addToStave(stavesmo137465);
stavesmo137465.setContext(context);
stavesmo137465.draw();
smo137465v0.draw(context, stavesmo137465);
smo218081.setContext(context);
smo218081.draw();
smo218082.setContext(context);
smo218082.draw();
const stavesmo139800 = new VF.Stave(138, 1213.225303590934, 440);
stavesmo139800.setAttribute('id', 'stavesmo139800');
stavesmo139800.setBegBarType(1);
stavesmo139800.addClef('bass');
const keysmo139800 = new VF.KeySignature('F');
keysmo139800.addToStave(stavesmo139800);
stavesmo139800.setContext(context);
stavesmo139800.draw();
smo139800v0.draw(context, stavesmo139800);
// create beam groups and tuplets for format grp smo144326 before formatting
const dirsmo218087 = smo142105.getStemDirection();
smo142105.setStemDirection(dirsmo218087);
smo142106.setStemDirection(dirsmo218087);
const smo218087 = new VF.Beam([smo142105,smo142106]);
const dirsmo218088 = smo142108.getStemDirection();
smo142108.setStemDirection(dirsmo218088);
smo142109.setStemDirection(dirsmo218088);
smo142110.setStemDirection(dirsmo218088);
smo142111.setStemDirection(dirsmo218088);
const smo218088 = new VF.Beam([smo142108,smo142109,smo142110,smo142111]);
 
// formatting measures in staff group smo144326
fmtsmo14212713.format([smo142127v0], 365);
const stavesmo142127 = new VF.Stave(138, 1290.225303590934, 440);
stavesmo142127.setAttribute('id', 'stavesmo142127');
stavesmo142127.setBegBarType(1);
stavesmo142127.addClef('treble');
const keysmo142127 = new VF.KeySignature('F');
keysmo142127.addToStave(stavesmo142127);
stavesmo142127.setContext(context);
stavesmo142127.draw();
smo142127v0.draw(context, stavesmo142127);
smo218087.setContext(context);
smo218087.draw();
smo218088.setContext(context);
smo218088.draw();
// create beam groups and tuplets for format grp smo146794 before formatting
 
// formatting measures in staff group smo146794
fmtsmo14456913.format([smo144569v0], 365);
const stavesmo144569 = new VF.Stave(138, 1373.225303590934, 440);
stavesmo144569.setAttribute('id', 'stavesmo144569');
stavesmo144569.setBegBarType(1);
stavesmo144569.addClef('treble');
const keysmo144569 = new VF.KeySignature('F');
keysmo144569.addToStave(stavesmo144569);
stavesmo144569.setContext(context);
stavesmo144569.draw();
smo144569v0.draw(context, stavesmo144569);
// create beam groups and tuplets for format grp smo149152 before formatting
 
// formatting measures in staff group smo149152
fmtsmo14707813.format([smo147078v0], 364);
const stavesmo147078 = new VF.Stave(138, 1478.225303590934, 440);
stavesmo147078.setAttribute('id', 'stavesmo147078');
stavesmo147078.setBegBarType(1);
stavesmo147078.addClef('bass');
const keysmo147078 = new VF.KeySignature('F');
keysmo147078.addToStave(stavesmo147078);
stavesmo147078.setContext(context);
stavesmo147078.draw();
smo147078v0.draw(context, stavesmo147078);
// create beam groups and tuplets for format grp smo151865 before formatting
const dirsmo218095 = smo149496.getStemDirection();
smo149496.setStemDirection(dirsmo218095);
smo149497.setStemDirection(dirsmo218095);
smo149498.setStemDirection(dirsmo218095);
smo149499.setStemDirection(dirsmo218095);
const smo218095 = new VF.Beam([smo149496,smo149497,smo149498,smo149499]);
const dirsmo218096 = smo149500.getStemDirection();
smo149500.setStemDirection(dirsmo218096);
smo149501.setStemDirection(dirsmo218096);
const smo218096 = new VF.Beam([smo149500,smo149501]);
const smo149506 = new VF.Tuplet([smo149497,smo149498,smo149499], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo151865
fmtsmo14952213.format([smo149522v0], 373);
const stavesmo149522 = new VF.Stave(138, 1555.225303590934, 440);
stavesmo149522.setAttribute('id', 'stavesmo149522');
stavesmo149522.setBegBarType(1);
stavesmo149522.addClef('percussion');
const keysmo149522 = new VF.KeySignature('F');
keysmo149522.addToStave(stavesmo149522);
stavesmo149522.setContext(context);
stavesmo149522.draw();
smo149522v0.draw(context, stavesmo149522);
smo218095.setContext(context);
smo218095.draw();
smo218096.setContext(context);
smo218096.draw();
smo149506.setContext(context).draw();
const leftsmo151865stavesmo11136216 = new VF.StaveConnector(stavesmo111362, stavesmo120941).setType(3);
leftsmo151865stavesmo11136216.setContext(context).draw();
const leftsmo151865stavesmo12324116 = new VF.StaveConnector(stavesmo123241, stavesmo130340).setType(3);
leftsmo151865stavesmo12324116.setContext(context).draw();
const leftsmo151865stavesmo13274616 = new VF.StaveConnector(stavesmo132746, stavesmo139800).setType(3);
leftsmo151865stavesmo13274616.setContext(context).draw();
const fmtsmo11138514 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo111385v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111385v0ar = [];
const smo111363 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo111363.setAttribute('id', 'smo111363');
smo111385v0ar.push(smo111363);
const smo111364 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo111364.setAttribute('id', 'smo111364');
const  smo226299 = new VF.Articulation('a.').setPosition(3);
smo111364.addModifier(smo226299, 0);
smo111385v0ar.push(smo111364);
const smo111366 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo111366.setAttribute('id', 'smo111366');
const  smo226300 = new VF.Articulation('a.').setPosition(3);
smo111366.addModifier(smo226300, 0);
smo111385v0ar.push(smo111366);
const smo111368 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo111368.setAttribute('id', 'smo111368');
const  smo226301 = new VF.Articulation('a.').setPosition(3);
smo111368.addModifier(smo226301, 0);
smo111385v0ar.push(smo111368);
smo111385v0.addTickables(smo111385v0ar)
fmtsmo11138514.joinVoices([smo111385v0]);
const fmtsmo11381214 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo113812v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113812v0ar = [];
const smo113790 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo113790.setAttribute('id', 'smo113790');
smo113812v0ar.push(smo113790);
const smo113791 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo113791.setAttribute('id', 'smo113791');
const  smo226302 = new VF.Articulation('a.').setPosition(3);
smo113791.addModifier(smo226302, 0);
smo113812v0ar.push(smo113791);
const smo113793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo113793.setAttribute('id', 'smo113793');
const  smo226303 = new VF.Articulation('a.').setPosition(3);
smo113793.addModifier(smo226303, 0);
smo113812v0ar.push(smo113793);
const smo113795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo113795.setAttribute('id', 'smo113795');
const  smo226304 = new VF.Articulation('a.').setPosition(3);
smo113795.addModifier(smo226304, 0);
smo113812v0ar.push(smo113795);
smo113812v0.addTickables(smo113812v0ar)
fmtsmo11381214.joinVoices([smo113812v0]);
const fmtsmo11623014 = new VF.Formatter();
//
// voices and notes for stave 2 14
const smo116230v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo116230v0ar = [];
const smo116208 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo116208.setAttribute('id', 'smo116208');
smo116230v0ar.push(smo116208);
const smo116209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo116209.setAttribute('id', 'smo116209');
const  smo226305 = new VF.Articulation('a.').setPosition(3);
smo116209.addModifier(smo226305, 0);
smo116230v0ar.push(smo116209);
const smo116211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo116211.setAttribute('id', 'smo116211');
const  smo226306 = new VF.Articulation('a.').setPosition(3);
smo116211.addModifier(smo226306, 0);
smo116230v0ar.push(smo116211);
const smo116213 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo116213.setAttribute('id', 'smo116213');
const  smo226307 = new VF.Articulation('a.').setPosition(3);
smo116213.addModifier(smo226307, 0);
smo116230v0ar.push(smo116213);
smo116230v0.addTickables(smo116230v0ar)
fmtsmo11623014.joinVoices([smo116230v0]);
const fmtsmo11860414 = new VF.Formatter();
//
// voices and notes for stave 3 14
const smo118604v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo118604v0ar = [];
const smo118582 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo118582.setAttribute('id', 'smo118582');
smo118604v0ar.push(smo118582);
const smo118583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo118583.setAttribute('id', 'smo118583');
const  smo226308 = new VF.Articulation('a.').setPosition(3);
smo118583.addModifier(smo226308, 0);
smo118604v0ar.push(smo118583);
const smo118585 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo118585.setAttribute('id', 'smo118585');
const  smo226309 = new VF.Articulation('a.').setPosition(3);
smo118585.addModifier(smo226309, 0);
smo118604v0ar.push(smo118585);
const smo118587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo118587.setAttribute('id', 'smo118587');
const  smo226310 = new VF.Articulation('a.').setPosition(3);
smo118587.addModifier(smo226310, 0);
smo118604v0ar.push(smo118587);
smo118604v0.addTickables(smo118604v0ar)
fmtsmo11860414.joinVoices([smo118604v0]);
const fmtsmo12096114 = new VF.Formatter();
//
// voices and notes for stave 4 14
const smo120961v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo120961v0ar = [];
const smo120942 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo120942.setAttribute('id', 'smo120942');
smo120961v0ar.push(smo120942);
const smo120943 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo120943.setAttribute('id', 'smo120943');
smo120961v0ar.push(smo120943);
const smo120944 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo120944.setAttribute('id', 'smo120944');
smo120961v0ar.push(smo120944);
const smo120945 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo120945.setAttribute('id', 'smo120945');
smo120961v0ar.push(smo120945);
smo120961v0.addTickables(smo120961v0ar)
fmtsmo12096114.joinVoices([smo120961v0]);
const fmtsmo12326314 = new VF.Formatter();
//
// voices and notes for stave 5 14
const smo123263v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo123263v0ar = [];
const smo123242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo123242.setAttribute('id', 'smo123242');
smo123263v0ar.push(smo123242);
const smo123243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo123243.setAttribute('id', 'smo123243');
smo123263v0ar.push(smo123243);
const smo123244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo123244.setAttribute('id', 'smo123244');
smo123263v0ar.push(smo123244);
const smo123245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo123245.setAttribute('id', 'smo123245');
smo123263v0ar.push(smo123245);
const smo123246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo123246.setAttribute('id', 'smo123246');
smo123263v0ar.push(smo123246);
const smo123247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo123247.setAttribute('id', 'smo123247');
smo123263v0ar.push(smo123247);
smo123263v0.addTickables(smo123263v0ar)
fmtsmo12326314.joinVoices([smo123263v0]);
const fmtsmo12566914 = new VF.Formatter();
//
// voices and notes for stave 6 14
const smo125669v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo125669v0ar = [];
const smo125648 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo125648.setAttribute('id', 'smo125648');
smo125669v0ar.push(smo125648);
const smo125649 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo125649.setAttribute('id', 'smo125649');
smo125669v0ar.push(smo125649);
const smo125650 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo125650.setAttribute('id', 'smo125650');
smo125669v0ar.push(smo125650);
const smo125651 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo125651.setAttribute('id', 'smo125651');
smo125669v0ar.push(smo125651);
const smo125652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo125652.setAttribute('id', 'smo125652');
smo125669v0ar.push(smo125652);
const smo125653 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo125653.setAttribute('id', 'smo125653');
smo125669v0ar.push(smo125653);
smo125669v0.addTickables(smo125669v0ar)
fmtsmo12566914.joinVoices([smo125669v0]);
const fmtsmo12800714 = new VF.Formatter();
//
// voices and notes for stave 7 14
const smo128007v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo128007v0ar = [];
const smo127991 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo127991.setAttribute('id', 'smo127991');
smo128007v0ar.push(smo127991);
smo128007v0.addTickables(smo128007v0ar)
fmtsmo12800714.joinVoices([smo128007v0]);
const fmtsmo13035714 = new VF.Formatter();
//
// voices and notes for stave 8 14
const smo130357v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo130357v0ar = [];
const smo130341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo130341.setAttribute('id', 'smo130341');
smo130357v0ar.push(smo130341);
smo130357v0.addTickables(smo130357v0ar)
fmtsmo13035714.joinVoices([smo130357v0]);
const fmtsmo13276814 = new VF.Formatter();
//
// voices and notes for stave 9 14
const smo132768v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo132768v0ar = [];
const smo132747 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo132747.setAttribute('id', 'smo132747');
smo132768v0ar.push(smo132747);
const smo132748 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo132748.setAttribute('id', 'smo132748');
smo132768v0ar.push(smo132748);
const smo132749 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo132749.setAttribute('id', 'smo132749');
smo132768v0ar.push(smo132749);
const smo132750 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo132750.setAttribute('id', 'smo132750');
smo132768v0ar.push(smo132750);
const smo132751 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo132751.setAttribute('id', 'smo132751');
smo132768v0ar.push(smo132751);
const smo132752 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo132752.setAttribute('id', 'smo132752');
smo132768v0ar.push(smo132752);
smo132768v0.addTickables(smo132768v0ar)
fmtsmo13276814.joinVoices([smo132768v0]);
const fmtsmo13514114 = new VF.Formatter();
//
// voices and notes for stave 10 14
const smo135141v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo135141v0ar = [];
const smo135120 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo135120.setAttribute('id', 'smo135120');
smo135141v0ar.push(smo135120);
const smo135121 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo135121.setAttribute('id', 'smo135121');
smo135141v0ar.push(smo135121);
const smo135122 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo135122.setAttribute('id', 'smo135122');
smo135141v0ar.push(smo135122);
const smo135123 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo135123.setAttribute('id', 'smo135123');
smo135141v0ar.push(smo135123);
const smo135124 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo135124.setAttribute('id', 'smo135124');
smo135141v0ar.push(smo135124);
const smo135125 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo135125.setAttribute('id', 'smo135125');
smo135141v0ar.push(smo135125);
smo135141v0.addTickables(smo135141v0ar)
fmtsmo13514114.joinVoices([smo135141v0]);
const fmtsmo13748714 = new VF.Formatter();
//
// voices and notes for stave 11 14
const smo137487v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo137487v0ar = [];
const smo137466 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo137466.setAttribute('id', 'smo137466');
smo137487v0ar.push(smo137466);
const smo137467 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo137467.setAttribute('id', 'smo137467');
smo137487v0ar.push(smo137467);
const smo137468 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo137468.setAttribute('id', 'smo137468');
smo137487v0ar.push(smo137468);
const smo137469 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo137469.setAttribute('id', 'smo137469');
smo137487v0ar.push(smo137469);
const smo137470 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo137470.setAttribute('id', 'smo137470');
smo137487v0ar.push(smo137470);
const smo137471 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo137471.setAttribute('id', 'smo137471');
smo137487v0ar.push(smo137471);
smo137487v0.addTickables(smo137487v0ar)
fmtsmo13748714.joinVoices([smo137487v0]);
const fmtsmo13982014 = new VF.Formatter();
//
// voices and notes for stave 12 14
const smo139820v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo139820v0ar = [];
const smo139801 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo139801.setAttribute('id', 'smo139801');
smo139820v0ar.push(smo139801);
const smo139802 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo139802.setAttribute('id', 'smo139802');
smo139820v0ar.push(smo139802);
const smo139803 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo139803.setAttribute('id', 'smo139803');
smo139820v0ar.push(smo139803);
const smo139804 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo139804.setAttribute('id', 'smo139804');
smo139820v0ar.push(smo139804);
smo139820v0.addTickables(smo139820v0ar)
fmtsmo13982014.joinVoices([smo139820v0]);
const fmtsmo14214914 = new VF.Formatter();
//
// voices and notes for stave 13 14
const smo142149v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo142149v0ar = [];
const smo142128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo142128.setAttribute('id', 'smo142128');
smo142149v0ar.push(smo142128);
const smo142129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo142129.setAttribute('id', 'smo142129');
smo142149v0ar.push(smo142129);
const smo142130 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo142130.setAttribute('id', 'smo142130');
smo142149v0ar.push(smo142130);
const smo142131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo142131.setAttribute('id', 'smo142131');
smo142149v0ar.push(smo142131);
const smo142132 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo142132.setAttribute('id', 'smo142132');
smo142149v0ar.push(smo142132);
const smo142133 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo142133.setAttribute('id', 'smo142133');
smo142149v0ar.push(smo142133);
smo142149v0.addTickables(smo142149v0ar)
fmtsmo14214914.joinVoices([smo142149v0]);
const fmtsmo14458614 = new VF.Formatter();
//
// voices and notes for stave 14 14
const smo144586v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo144586v0ar = [];
const smo144570 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo144570.setAttribute('id', 'smo144570');
smo144586v0ar.push(smo144570);
smo144586v0.addTickables(smo144586v0ar)
fmtsmo14458614.joinVoices([smo144586v0]);
const fmtsmo14709814 = new VF.Formatter();
//
// voices and notes for stave 15 14
const smo147098v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo147098v0ar = [];
const smo147079 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo147079.setAttribute('id', 'smo147079');
smo147098v0ar.push(smo147079);
const smo147080 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo147080.setAttribute('id', 'smo147080');
smo147098v0ar.push(smo147080);
const smo147081 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo147081.setAttribute('id', 'smo147081');
smo147098v0ar.push(smo147081);
const smo147082 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo147082.setAttribute('id', 'smo147082');
smo147098v0ar.push(smo147082);
smo147098v0.addTickables(smo147098v0ar)
fmtsmo14709814.joinVoices([smo147098v0]);
const fmtsmo14954914 = new VF.Formatter();
//
// voices and notes for stave 16 14
const smo149549v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo149549v0ar = [];
const smo149523 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149523.setAttribute('id', 'smo149523');
const smo1495230acc = new VF.Accidental('n');
smo149523.addModifier(smo1495230acc, 0);
smo149549v0ar.push(smo149523);
const smo149524 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149524.setAttribute('id', 'smo149524');
smo149549v0ar.push(smo149524);
const smo149525 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149525.setAttribute('id', 'smo149525');
smo149549v0ar.push(smo149525);
const smo149526 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149526.setAttribute('id', 'smo149526');
smo149549v0ar.push(smo149526);
const smo149527 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149527.setAttribute('id', 'smo149527');
smo149549v0ar.push(smo149527);
const smo149528 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149528.setAttribute('id', 'smo149528');
smo149549v0ar.push(smo149528);
const smo149529 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo149529.setAttribute('id', 'smo149529');
smo149549v0ar.push(smo149529);
const smo149530 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149530.setAttribute('id', 'smo149530');
smo149549v0ar.push(smo149530);
const smo149531 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo149531.setAttribute('id', 'smo149531');
smo149549v0ar.push(smo149531);
const smo149532 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149532.setAttribute('id', 'smo149532');
smo149549v0ar.push(smo149532);
smo149549v0.addTickables(smo149549v0ar)
fmtsmo14954914.joinVoices([smo149549v0]);
// create beam groups and tuplets for format grp smo151871 before formatting
 
// formatting measures in staff group smo151871
fmtsmo11138514.format([smo111385v0,smo113812v0,smo116230v0,smo118604v0,smo120961v0], 323);
const stavesmo111385 = new VF.Stave(578, 183.2253035909339, 337);
stavesmo111385.setAttribute('id', 'stavesmo111385');
stavesmo111385.setBegBarType(VF.Barline.type.NONE);
stavesmo111385.setContext(context);
stavesmo111385.draw();
smo111385v0.draw(context, stavesmo111385);
const stavesmo113812 = new VF.Stave(578, 288.2253035909339, 337);
stavesmo113812.setAttribute('id', 'stavesmo113812');
stavesmo113812.setBegBarType(VF.Barline.type.NONE);
stavesmo113812.setContext(context);
stavesmo113812.draw();
smo113812v0.draw(context, stavesmo113812);
const stavesmo116230 = new VF.Stave(578, 379.2253035909339, 337);
stavesmo116230.setAttribute('id', 'stavesmo116230');
stavesmo116230.setBegBarType(VF.Barline.type.NONE);
stavesmo116230.setContext(context);
stavesmo116230.draw();
smo116230v0.draw(context, stavesmo116230);
const stavesmo118604 = new VF.Stave(578, 479.2253035909339, 337);
stavesmo118604.setAttribute('id', 'stavesmo118604');
stavesmo118604.setBegBarType(VF.Barline.type.NONE);
stavesmo118604.setContext(context);
stavesmo118604.draw();
smo118604v0.draw(context, stavesmo118604);
const stavesmo120961 = new VF.Stave(578, 549.2253035909339, 337);
stavesmo120961.setAttribute('id', 'stavesmo120961');
stavesmo120961.setBegBarType(VF.Barline.type.NONE);
stavesmo120961.setContext(context);
stavesmo120961.draw();
smo120961v0.draw(context, stavesmo120961);
// create beam groups and tuplets for format grp smo151873 before formatting
const dirsmo218109 = smo123243.getStemDirection();
smo123243.setStemDirection(dirsmo218109);
smo123244.setStemDirection(dirsmo218109);
const smo218109 = new VF.Beam([smo123243,smo123244]);
const dirsmo218110 = smo123245.getStemDirection();
smo123245.setStemDirection(dirsmo218110);
smo123246.setStemDirection(dirsmo218110);
const smo218110 = new VF.Beam([smo123245,smo123246]);
const dirsmo218113 = smo125649.getStemDirection();
smo125649.setStemDirection(dirsmo218113);
smo125650.setStemDirection(dirsmo218113);
const smo218113 = new VF.Beam([smo125649,smo125650]);
const dirsmo218114 = smo125651.getStemDirection();
smo125651.setStemDirection(dirsmo218114);
smo125652.setStemDirection(dirsmo218114);
const smo218114 = new VF.Beam([smo125651,smo125652]);
 
// formatting measures in staff group smo151873
fmtsmo12326314.format([smo123263v0,smo125669v0,smo128007v0,smo130357v0], 323);
const stavesmo123263 = new VF.Stave(578, 630.2253035909339, 337);
stavesmo123263.setAttribute('id', 'stavesmo123263');
stavesmo123263.setBegBarType(VF.Barline.type.NONE);
stavesmo123263.setContext(context);
stavesmo123263.draw();
smo123263v0.draw(context, stavesmo123263);
smo218109.setContext(context);
smo218109.draw();
smo218110.setContext(context);
smo218110.draw();
const stavesmo125669 = new VF.Stave(578, 700.2253035909339, 337);
stavesmo125669.setAttribute('id', 'stavesmo125669');
stavesmo125669.setBegBarType(VF.Barline.type.NONE);
stavesmo125669.setContext(context);
stavesmo125669.draw();
smo125669v0.draw(context, stavesmo125669);
smo218113.setContext(context);
smo218113.draw();
smo218114.setContext(context);
smo218114.draw();
const stavesmo128007 = new VF.Stave(578, 761.2253035909339, 337);
stavesmo128007.setAttribute('id', 'stavesmo128007');
stavesmo128007.setBegBarType(VF.Barline.type.NONE);
stavesmo128007.setContext(context);
stavesmo128007.draw();
smo128007v0.draw(context, stavesmo128007);
const stavesmo130357 = new VF.Stave(578, 831.2253035909339, 337);
stavesmo130357.setAttribute('id', 'stavesmo130357');
stavesmo130357.setBegBarType(VF.Barline.type.NONE);
stavesmo130357.setContext(context);
stavesmo130357.draw();
smo130357v0.draw(context, stavesmo130357);
// create beam groups and tuplets for format grp smo151875 before formatting
const dirsmo218121 = smo132748.getStemDirection();
smo132748.setStemDirection(dirsmo218121);
smo132749.setStemDirection(dirsmo218121);
const smo218121 = new VF.Beam([smo132748,smo132749]);
const dirsmo218122 = smo132750.getStemDirection();
smo132750.setStemDirection(dirsmo218122);
smo132751.setStemDirection(dirsmo218122);
const smo218122 = new VF.Beam([smo132750,smo132751]);
const dirsmo218125 = smo135121.getStemDirection();
smo135121.setStemDirection(dirsmo218125);
smo135122.setStemDirection(dirsmo218125);
const smo218125 = new VF.Beam([smo135121,smo135122]);
const dirsmo218126 = smo135123.getStemDirection();
smo135123.setStemDirection(dirsmo218126);
smo135124.setStemDirection(dirsmo218126);
const smo218126 = new VF.Beam([smo135123,smo135124]);
const dirsmo218129 = smo137467.getStemDirection();
smo137467.setStemDirection(dirsmo218129);
smo137468.setStemDirection(dirsmo218129);
const smo218129 = new VF.Beam([smo137467,smo137468]);
const dirsmo218130 = smo137469.getStemDirection();
smo137469.setStemDirection(dirsmo218130);
smo137470.setStemDirection(dirsmo218130);
const smo218130 = new VF.Beam([smo137469,smo137470]);
 
// formatting measures in staff group smo151875
fmtsmo13276814.format([smo132768v0,smo135141v0,smo137487v0,smo139820v0], 323);
const stavesmo132768 = new VF.Stave(578, 936.2253035909339, 337);
stavesmo132768.setAttribute('id', 'stavesmo132768');
stavesmo132768.setBegBarType(VF.Barline.type.NONE);
stavesmo132768.setContext(context);
stavesmo132768.draw();
smo132768v0.draw(context, stavesmo132768);
smo218121.setContext(context);
smo218121.draw();
smo218122.setContext(context);
smo218122.draw();
const stavesmo135141 = new VF.Stave(578, 1023.2253035909339, 337);
stavesmo135141.setAttribute('id', 'stavesmo135141');
stavesmo135141.setBegBarType(VF.Barline.type.NONE);
stavesmo135141.setContext(context);
stavesmo135141.draw();
smo135141v0.draw(context, stavesmo135141);
smo218125.setContext(context);
smo218125.draw();
smo218126.setContext(context);
smo218126.draw();
const stavesmo137487 = new VF.Stave(578, 1128.225303590934, 337);
stavesmo137487.setAttribute('id', 'stavesmo137487');
stavesmo137487.setBegBarType(VF.Barline.type.NONE);
stavesmo137487.setContext(context);
stavesmo137487.draw();
smo137487v0.draw(context, stavesmo137487);
smo218129.setContext(context);
smo218129.draw();
smo218130.setContext(context);
smo218130.draw();
const stavesmo139820 = new VF.Stave(578, 1213.225303590934, 337);
stavesmo139820.setAttribute('id', 'stavesmo139820');
stavesmo139820.setBegBarType(VF.Barline.type.NONE);
stavesmo139820.setContext(context);
stavesmo139820.draw();
smo139820v0.draw(context, stavesmo139820);
// create beam groups and tuplets for format grp smo144326 before formatting
const dirsmo218135 = smo142129.getStemDirection();
smo142129.setStemDirection(dirsmo218135);
smo142130.setStemDirection(dirsmo218135);
const smo218135 = new VF.Beam([smo142129,smo142130]);
const dirsmo218136 = smo142131.getStemDirection();
smo142131.setStemDirection(dirsmo218136);
smo142132.setStemDirection(dirsmo218136);
const smo218136 = new VF.Beam([smo142131,smo142132]);
 
// formatting measures in staff group smo144326
fmtsmo14214914.format([smo142149v0], 323);
const stavesmo142149 = new VF.Stave(578, 1290.225303590934, 337);
stavesmo142149.setAttribute('id', 'stavesmo142149');
stavesmo142149.setBegBarType(VF.Barline.type.NONE);
stavesmo142149.setContext(context);
stavesmo142149.draw();
smo142149v0.draw(context, stavesmo142149);
smo218135.setContext(context);
smo218135.draw();
smo218136.setContext(context);
smo218136.draw();
// create beam groups and tuplets for format grp smo146794 before formatting
 
// formatting measures in staff group smo146794
fmtsmo14458614.format([smo144586v0], 323);
const stavesmo144586 = new VF.Stave(578, 1373.225303590934, 337);
stavesmo144586.setAttribute('id', 'stavesmo144586');
stavesmo144586.setBegBarType(VF.Barline.type.NONE);
stavesmo144586.setContext(context);
stavesmo144586.draw();
smo144586v0.draw(context, stavesmo144586);
// create beam groups and tuplets for format grp smo149152 before formatting
 
// formatting measures in staff group smo149152
fmtsmo14709814.format([smo147098v0], 323);
const stavesmo147098 = new VF.Stave(578, 1478.225303590934, 337);
stavesmo147098.setAttribute('id', 'stavesmo147098');
stavesmo147098.setBegBarType(VF.Barline.type.NONE);
stavesmo147098.setContext(context);
stavesmo147098.draw();
smo147098v0.draw(context, stavesmo147098);
// create beam groups and tuplets for format grp smo151865 before formatting
const dirsmo218143 = smo149523.getStemDirection();
smo149523.setStemDirection(dirsmo218143);
smo149524.setStemDirection(dirsmo218143);
smo149525.setStemDirection(dirsmo218143);
smo149526.setStemDirection(dirsmo218143);
const smo218143 = new VF.Beam([smo149523,smo149524,smo149525,smo149526]);
const dirsmo218144 = smo149527.getStemDirection();
smo149527.setStemDirection(dirsmo218144);
smo149528.setStemDirection(dirsmo218144);
const smo218144 = new VF.Beam([smo149527,smo149528]);
const smo149533 = new VF.Tuplet([smo149524,smo149525,smo149526], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo151865
fmtsmo14954914.format([smo149549v0], 323);
const stavesmo149549 = new VF.Stave(578, 1555.225303590934, 337);
stavesmo149549.setAttribute('id', 'stavesmo149549');
stavesmo149549.setBegBarType(VF.Barline.type.NONE);
stavesmo149549.setContext(context);
stavesmo149549.draw();
smo149549v0.draw(context, stavesmo149549);
smo218143.setContext(context);
smo218143.draw();
smo218144.setContext(context);
smo218144.draw();
smo149533.setContext(context).draw();
const fmtsmo11141215 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo111412v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111412v0ar = [];
const smo111386 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo111386.setAttribute('id', 'smo111386');
smo111412v0ar.push(smo111386);
const smo111387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo111387.setAttribute('id', 'smo111387');
smo111412v0ar.push(smo111387);
const smo111388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo111388.setAttribute('id', 'smo111388');
smo111412v0ar.push(smo111388);
const smo111389 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo111389.setAttribute('id', 'smo111389');
smo111412v0ar.push(smo111389);
const smo111390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo111390.setAttribute('id', 'smo111390');
smo111412v0ar.push(smo111390);
const smo111391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo111391.setAttribute('id', 'smo111391');
smo111412v0ar.push(smo111391);
const smo111392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo111392.setAttribute('id', 'smo111392');
smo111412v0ar.push(smo111392);
const smo111393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo111393.setAttribute('id', 'smo111393');
smo111412v0ar.push(smo111393);
const smo111394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo111394.setAttribute('id', 'smo111394');
smo111412v0ar.push(smo111394);
const smo111395 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo111395.setAttribute('id', 'smo111395');
smo111412v0ar.push(smo111395);
const smo111396 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo111396.setAttribute('id', 'smo111396');
smo111412v0ar.push(smo111396);
smo111412v0.addTickables(smo111412v0ar)
fmtsmo11141215.joinVoices([smo111412v0]);
const fmtsmo11383915 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo113839v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113839v0ar = [];
const smo113813 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo113813.setAttribute('id', 'smo113813');
smo113839v0ar.push(smo113813);
const smo113814 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo113814.setAttribute('id', 'smo113814');
smo113839v0ar.push(smo113814);
const smo113815 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo113815.setAttribute('id', 'smo113815');
smo113839v0ar.push(smo113815);
const smo113816 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo113816.setAttribute('id', 'smo113816');
smo113839v0ar.push(smo113816);
const smo113817 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo113817.setAttribute('id', 'smo113817');
smo113839v0ar.push(smo113817);
const smo113818 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo113818.setAttribute('id', 'smo113818');
smo113839v0ar.push(smo113818);
const smo113819 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo113819.setAttribute('id', 'smo113819');
smo113839v0ar.push(smo113819);
const smo113820 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo113820.setAttribute('id', 'smo113820');
smo113839v0ar.push(smo113820);
const smo113821 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo113821.setAttribute('id', 'smo113821');
smo113839v0ar.push(smo113821);
const smo113822 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo113822.setAttribute('id', 'smo113822');
smo113839v0ar.push(smo113822);
const smo113823 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo113823.setAttribute('id', 'smo113823');
smo113839v0ar.push(smo113823);
smo113839v0.addTickables(smo113839v0ar)
fmtsmo11383915.joinVoices([smo113839v0]);
const fmtsmo11625515 = new VF.Formatter();
//
// voices and notes for stave 2 15
const smo116255v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo116255v0ar = [];
const smo116231 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo116231.setAttribute('id', 'smo116231');
smo116255v0ar.push(smo116231);
const smo116232 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo116232.setAttribute('id', 'smo116232');
smo116255v0ar.push(smo116232);
const smo116233 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo116233.setAttribute('id', 'smo116233');
smo116255v0ar.push(smo116233);
const smo116234 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo116234.setAttribute('id', 'smo116234');
smo116255v0ar.push(smo116234);
const smo116235 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo116235.setAttribute('id', 'smo116235');
smo116255v0ar.push(smo116235);
const smo116236 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo116236.setAttribute('id', 'smo116236');
smo116255v0ar.push(smo116236);
const smo116237 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo116237.setAttribute('id', 'smo116237');
smo116255v0ar.push(smo116237);
const smo116238 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo116238.setAttribute('id', 'smo116238');
smo116255v0ar.push(smo116238);
const smo116239 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo116239.setAttribute('id', 'smo116239');
smo116255v0ar.push(smo116239);
smo116255v0.addTickables(smo116255v0ar)
fmtsmo11625515.joinVoices([smo116255v0]);
const fmtsmo11862915 = new VF.Formatter();
//
// voices and notes for stave 3 15
const smo118629v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo118629v0ar = [];
const smo118605 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo118605.setAttribute('id', 'smo118605');
smo118629v0ar.push(smo118605);
const smo118606 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo118606.setAttribute('id', 'smo118606');
smo118629v0ar.push(smo118606);
const smo118607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo118607.setAttribute('id', 'smo118607');
smo118629v0ar.push(smo118607);
const smo118608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo118608.setAttribute('id', 'smo118608');
smo118629v0ar.push(smo118608);
const smo118609 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo118609.setAttribute('id', 'smo118609');
smo118629v0ar.push(smo118609);
const smo118610 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo118610.setAttribute('id', 'smo118610');
smo118629v0ar.push(smo118610);
const smo118611 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo118611.setAttribute('id', 'smo118611');
smo118629v0ar.push(smo118611);
const smo118612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo118612.setAttribute('id', 'smo118612');
smo118629v0ar.push(smo118612);
const smo118613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo118613.setAttribute('id', 'smo118613');
smo118629v0ar.push(smo118613);
smo118629v0.addTickables(smo118629v0ar)
fmtsmo11862915.joinVoices([smo118629v0]);
const fmtsmo12098115 = new VF.Formatter();
//
// voices and notes for stave 4 15
const smo120981v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo120981v0ar = [];
const smo120962 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo120962.setAttribute('id', 'smo120962');
const  smo226345 = new VF.Articulation('a.').setPosition(3);
smo120962.addModifier(smo226345, 0);
smo120981v0ar.push(smo120962);
const smo120964 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo120964.setAttribute('id', 'smo120964');
smo120981v0ar.push(smo120964);
const smo120965 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo120965.setAttribute('id', 'smo120965');
smo120981v0ar.push(smo120965);
smo120981v0.addTickables(smo120981v0ar)
fmtsmo12098115.joinVoices([smo120981v0]);
const fmtsmo12328715 = new VF.Formatter();
//
// voices and notes for stave 5 15
const smo123287v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo123287v0ar = [];
const smo123264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo123264.setAttribute('id', 'smo123264');
smo123287v0ar.push(smo123264);
const smo123265 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo123265.setAttribute('id', 'smo123265');
smo123287v0ar.push(smo123265);
const smo123266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo123266.setAttribute('id', 'smo123266');
smo123287v0ar.push(smo123266);
const smo123267 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo123267.setAttribute('id', 'smo123267');
smo123287v0ar.push(smo123267);
const smo123268 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo123268.setAttribute('id', 'smo123268');
smo123287v0ar.push(smo123268);
const smo123269 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo123269.setAttribute('id', 'smo123269');
smo123287v0ar.push(smo123269);
const smo123270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo123270.setAttribute('id', 'smo123270');
smo123287v0ar.push(smo123270);
const smo123271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo123271.setAttribute('id', 'smo123271');
smo123287v0ar.push(smo123271);
smo123287v0.addTickables(smo123287v0ar)
fmtsmo12328715.joinVoices([smo123287v0]);
const fmtsmo12569315 = new VF.Formatter();
//
// voices and notes for stave 6 15
const smo125693v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo125693v0ar = [];
const smo125670 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo125670.setAttribute('id', 'smo125670');
smo125693v0ar.push(smo125670);
const smo125671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo125671.setAttribute('id', 'smo125671');
smo125693v0ar.push(smo125671);
const smo125672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo125672.setAttribute('id', 'smo125672');
smo125693v0ar.push(smo125672);
const smo125673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo125673.setAttribute('id', 'smo125673');
smo125693v0ar.push(smo125673);
const smo125674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo125674.setAttribute('id', 'smo125674');
smo125693v0ar.push(smo125674);
const smo125675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo125675.setAttribute('id', 'smo125675');
smo125693v0ar.push(smo125675);
const smo125676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo125676.setAttribute('id', 'smo125676');
smo125693v0ar.push(smo125676);
const smo125677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo125677.setAttribute('id', 'smo125677');
smo125693v0ar.push(smo125677);
smo125693v0.addTickables(smo125693v0ar)
fmtsmo12569315.joinVoices([smo125693v0]);
const fmtsmo12802415 = new VF.Formatter();
//
// voices and notes for stave 7 15
const smo128024v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo128024v0ar = [];
const smo128008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo128008.setAttribute('id', 'smo128008');
smo128024v0ar.push(smo128008);
smo128024v0.addTickables(smo128024v0ar)
fmtsmo12802415.joinVoices([smo128024v0]);
const fmtsmo13037415 = new VF.Formatter();
//
// voices and notes for stave 8 15
const smo130374v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo130374v0ar = [];
const smo130358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo130358.setAttribute('id', 'smo130358');
smo130374v0ar.push(smo130358);
smo130374v0.addTickables(smo130374v0ar)
fmtsmo13037415.joinVoices([smo130374v0]);
const fmtsmo13279215 = new VF.Formatter();
//
// voices and notes for stave 9 15
const smo132792v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo132792v0ar = [];
const smo132769 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo132769.setAttribute('id', 'smo132769');
smo132792v0ar.push(smo132769);
const smo132770 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo132770.setAttribute('id', 'smo132770');
smo132792v0ar.push(smo132770);
const smo132771 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo132771.setAttribute('id', 'smo132771');
smo132792v0ar.push(smo132771);
const smo132772 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo132772.setAttribute('id', 'smo132772');
smo132792v0ar.push(smo132772);
const smo132773 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo132773.setAttribute('id', 'smo132773');
smo132792v0ar.push(smo132773);
const smo132774 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo132774.setAttribute('id', 'smo132774');
smo132792v0ar.push(smo132774);
const smo132775 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo132775.setAttribute('id', 'smo132775');
smo132792v0ar.push(smo132775);
const smo132776 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo132776.setAttribute('id', 'smo132776');
smo132792v0ar.push(smo132776);
smo132792v0.addTickables(smo132792v0ar)
fmtsmo13279215.joinVoices([smo132792v0]);
const fmtsmo13516515 = new VF.Formatter();
//
// voices and notes for stave 10 15
const smo135165v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo135165v0ar = [];
const smo135142 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo135142.setAttribute('id', 'smo135142');
smo135165v0ar.push(smo135142);
const smo135143 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo135143.setAttribute('id', 'smo135143');
smo135165v0ar.push(smo135143);
const smo135144 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo135144.setAttribute('id', 'smo135144');
smo135165v0ar.push(smo135144);
const smo135145 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo135145.setAttribute('id', 'smo135145');
smo135165v0ar.push(smo135145);
const smo135146 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo135146.setAttribute('id', 'smo135146');
smo135165v0ar.push(smo135146);
const smo135147 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo135147.setAttribute('id', 'smo135147');
smo135165v0ar.push(smo135147);
const smo135148 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo135148.setAttribute('id', 'smo135148');
smo135165v0ar.push(smo135148);
const smo135149 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo135149.setAttribute('id', 'smo135149');
smo135165v0ar.push(smo135149);
smo135165v0.addTickables(smo135165v0ar)
fmtsmo13516515.joinVoices([smo135165v0]);
const fmtsmo13751115 = new VF.Formatter();
//
// voices and notes for stave 11 15
const smo137511v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo137511v0ar = [];
const smo137488 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo137488.setAttribute('id', 'smo137488');
smo137511v0ar.push(smo137488);
const smo137489 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo137489.setAttribute('id', 'smo137489');
smo137511v0ar.push(smo137489);
const smo137490 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo137490.setAttribute('id', 'smo137490');
smo137511v0ar.push(smo137490);
const smo137491 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo137491.setAttribute('id', 'smo137491');
smo137511v0ar.push(smo137491);
const smo137492 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo137492.setAttribute('id', 'smo137492');
smo137511v0ar.push(smo137492);
const smo137493 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo137493.setAttribute('id', 'smo137493');
smo137511v0ar.push(smo137493);
const smo137494 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo137494.setAttribute('id', 'smo137494');
smo137511v0ar.push(smo137494);
const smo137495 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo137495.setAttribute('id', 'smo137495');
smo137511v0ar.push(smo137495);
smo137511v0.addTickables(smo137511v0ar)
fmtsmo13751115.joinVoices([smo137511v0]);
const fmtsmo13984015 = new VF.Formatter();
//
// voices and notes for stave 12 15
const smo139840v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo139840v0ar = [];
const smo139821 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo139821.setAttribute('id', 'smo139821');
const  smo226346 = new VF.Articulation('a.').setPosition(3);
smo139821.addModifier(smo226346, 0);
smo139840v0ar.push(smo139821);
const smo139823 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo139823.setAttribute('id', 'smo139823');
smo139840v0ar.push(smo139823);
const smo139824 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n"]}'))
smo139824.setAttribute('id', 'smo139824');
smo139840v0ar.push(smo139824);
smo139840v0.addTickables(smo139840v0ar)
fmtsmo13984015.joinVoices([smo139840v0]);
const fmtsmo14217315 = new VF.Formatter();
//
// voices and notes for stave 13 15
const smo142173v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo142173v0ar = [];
const smo142150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo142150.setAttribute('id', 'smo142150');
smo142173v0ar.push(smo142150);
const smo142151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo142151.setAttribute('id', 'smo142151');
smo142173v0ar.push(smo142151);
const smo142152 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo142152.setAttribute('id', 'smo142152');
smo142173v0ar.push(smo142152);
const smo142153 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo142153.setAttribute('id', 'smo142153');
smo142173v0ar.push(smo142153);
const smo142154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo142154.setAttribute('id', 'smo142154');
smo142173v0ar.push(smo142154);
const smo142155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo142155.setAttribute('id', 'smo142155');
smo142173v0ar.push(smo142155);
const smo142156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo142156.setAttribute('id', 'smo142156');
smo142173v0ar.push(smo142156);
const smo142157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo142157.setAttribute('id', 'smo142157');
smo142173v0ar.push(smo142157);
smo142173v0.addTickables(smo142173v0ar)
fmtsmo14217315.joinVoices([smo142173v0]);
const fmtsmo14460315 = new VF.Formatter();
//
// voices and notes for stave 14 15
const smo144603v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo144603v0ar = [];
const smo144587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo144587.setAttribute('id', 'smo144587');
smo144603v0ar.push(smo144587);
smo144603v0.addTickables(smo144603v0ar)
fmtsmo14460315.joinVoices([smo144603v0]);
const fmtsmo14711815 = new VF.Formatter();
//
// voices and notes for stave 15 15
const smo147118v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo147118v0ar = [];
const smo147099 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo147099.setAttribute('id', 'smo147099');
const  smo226347 = new VF.Articulation('a.').setPosition(3);
smo147099.addModifier(smo226347, 0);
smo147118v0ar.push(smo147099);
const smo147101 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo147101.setAttribute('id', 'smo147101');
smo147118v0ar.push(smo147101);
const smo147102 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo147102.setAttribute('id', 'smo147102');
smo147118v0ar.push(smo147102);
smo147118v0.addTickables(smo147118v0ar)
fmtsmo14711815.joinVoices([smo147118v0]);
const fmtsmo14957615 = new VF.Formatter();
//
// voices and notes for stave 16 15
const smo149576v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo149576v0ar = [];
const smo149550 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149550.setAttribute('id', 'smo149550');
const smo1495500acc = new VF.Accidental('n');
smo149550.addModifier(smo1495500acc, 0);
smo149576v0ar.push(smo149550);
const smo149551 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149551.setAttribute('id', 'smo149551');
smo149576v0ar.push(smo149551);
const smo149552 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149552.setAttribute('id', 'smo149552');
smo149576v0ar.push(smo149552);
const smo149553 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149553.setAttribute('id', 'smo149553');
smo149576v0ar.push(smo149553);
const smo149554 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149554.setAttribute('id', 'smo149554');
smo149576v0ar.push(smo149554);
const smo149555 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149555.setAttribute('id', 'smo149555');
smo149576v0ar.push(smo149555);
const smo149556 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo149556.setAttribute('id', 'smo149556');
smo149576v0ar.push(smo149556);
const smo149557 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149557.setAttribute('id', 'smo149557');
smo149576v0ar.push(smo149557);
const smo149558 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo149558.setAttribute('id', 'smo149558');
smo149576v0ar.push(smo149558);
const smo149559 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149559.setAttribute('id', 'smo149559');
smo149576v0ar.push(smo149559);
smo149576v0.addTickables(smo149576v0ar)
fmtsmo14957615.joinVoices([smo149576v0]);
// create beam groups and tuplets for format grp smo151871 before formatting
const dirsmo218147 = smo111386.getStemDirection();
smo111386.setStemDirection(dirsmo218147);
smo111387.setStemDirection(dirsmo218147);
smo111388.setStemDirection(dirsmo218147);
const smo218147 = new VF.Beam([smo111386,smo111387,smo111388]);
const dirsmo218148 = smo111389.getStemDirection();
smo111389.setStemDirection(dirsmo218148);
smo111390.setStemDirection(dirsmo218148);
const smo218148 = new VF.Beam([smo111389,smo111390]);
const dirsmo218149 = smo111391.getStemDirection();
smo111391.setStemDirection(dirsmo218149);
smo111392.setStemDirection(dirsmo218149);
smo111393.setStemDirection(dirsmo218149);
const smo218149 = new VF.Beam([smo111391,smo111392,smo111393]);
const dirsmo218150 = smo111394.getStemDirection();
smo111394.setStemDirection(dirsmo218150);
smo111395.setStemDirection(dirsmo218150);
smo111396.setStemDirection(dirsmo218150);
const smo218150 = new VF.Beam([smo111394,smo111395,smo111396]);
const dirsmo218153 = smo113813.getStemDirection();
smo113813.setStemDirection(dirsmo218153);
smo113814.setStemDirection(dirsmo218153);
smo113815.setStemDirection(dirsmo218153);
const smo218153 = new VF.Beam([smo113813,smo113814,smo113815]);
const dirsmo218154 = smo113816.getStemDirection();
smo113816.setStemDirection(dirsmo218154);
smo113817.setStemDirection(dirsmo218154);
const smo218154 = new VF.Beam([smo113816,smo113817]);
const dirsmo218155 = smo113818.getStemDirection();
smo113818.setStemDirection(dirsmo218155);
smo113819.setStemDirection(dirsmo218155);
smo113820.setStemDirection(dirsmo218155);
const smo218155 = new VF.Beam([smo113818,smo113819,smo113820]);
const dirsmo218156 = smo113821.getStemDirection();
smo113821.setStemDirection(dirsmo218156);
smo113822.setStemDirection(dirsmo218156);
smo113823.setStemDirection(dirsmo218156);
const smo218156 = new VF.Beam([smo113821,smo113822,smo113823]);
const dirsmo218159 = smo116231.getStemDirection();
smo116231.setStemDirection(dirsmo218159);
smo116232.setStemDirection(dirsmo218159);
smo116233.setStemDirection(dirsmo218159);
const smo218159 = new VF.Beam([smo116231,smo116232,smo116233]);
const dirsmo218160 = smo116234.getStemDirection();
smo116234.setStemDirection(dirsmo218160);
smo116235.setStemDirection(dirsmo218160);
const smo218160 = new VF.Beam([smo116234,smo116235]);
const dirsmo218161 = smo116237.getStemDirection();
smo116237.setStemDirection(dirsmo218161);
smo116238.setStemDirection(dirsmo218161);
const smo218161 = new VF.Beam([smo116237,smo116238]);
const dirsmo218164 = smo118605.getStemDirection();
smo118605.setStemDirection(dirsmo218164);
smo118606.setStemDirection(dirsmo218164);
smo118607.setStemDirection(dirsmo218164);
const smo218164 = new VF.Beam([smo118605,smo118606,smo118607]);
const dirsmo218165 = smo118608.getStemDirection();
smo118608.setStemDirection(dirsmo218165);
smo118609.setStemDirection(dirsmo218165);
const smo218165 = new VF.Beam([smo118608,smo118609]);
const dirsmo218166 = smo118611.getStemDirection();
smo118611.setStemDirection(dirsmo218166);
smo118612.setStemDirection(dirsmo218166);
const smo218166 = new VF.Beam([smo118611,smo118612]);
 
// formatting measures in staff group smo151871
fmtsmo11141215.format([smo111412v0,smo113839v0,smo116255v0,smo118629v0,smo120981v0], 402);
const stavesmo111412 = new VF.Stave(915, 183.2253035909339, 416);
stavesmo111412.setAttribute('id', 'stavesmo111412');
stavesmo111412.setBegBarType(VF.Barline.type.NONE);
stavesmo111412.setContext(context);
stavesmo111412.draw();
smo111412v0.draw(context, stavesmo111412);
smo218147.setContext(context);
smo218147.draw();
smo218148.setContext(context);
smo218148.draw();
smo218149.setContext(context);
smo218149.draw();
smo218150.setContext(context);
smo218150.draw();
const stavesmo113839 = new VF.Stave(915, 288.2253035909339, 416);
stavesmo113839.setAttribute('id', 'stavesmo113839');
stavesmo113839.setBegBarType(VF.Barline.type.NONE);
stavesmo113839.setContext(context);
stavesmo113839.draw();
smo113839v0.draw(context, stavesmo113839);
smo218153.setContext(context);
smo218153.draw();
smo218154.setContext(context);
smo218154.draw();
smo218155.setContext(context);
smo218155.draw();
smo218156.setContext(context);
smo218156.draw();
const stavesmo116255 = new VF.Stave(915, 379.2253035909339, 416);
stavesmo116255.setAttribute('id', 'stavesmo116255');
stavesmo116255.setBegBarType(VF.Barline.type.NONE);
stavesmo116255.setContext(context);
stavesmo116255.draw();
smo116255v0.draw(context, stavesmo116255);
smo218159.setContext(context);
smo218159.draw();
smo218160.setContext(context);
smo218160.draw();
smo218161.setContext(context);
smo218161.draw();
const stavesmo118629 = new VF.Stave(915, 479.2253035909339, 416);
stavesmo118629.setAttribute('id', 'stavesmo118629');
stavesmo118629.setBegBarType(VF.Barline.type.NONE);
stavesmo118629.setContext(context);
stavesmo118629.draw();
smo118629v0.draw(context, stavesmo118629);
smo218164.setContext(context);
smo218164.draw();
smo218165.setContext(context);
smo218165.draw();
smo218166.setContext(context);
smo218166.draw();
const stavesmo120981 = new VF.Stave(915, 549.2253035909339, 416);
stavesmo120981.setAttribute('id', 'stavesmo120981');
stavesmo120981.setBegBarType(VF.Barline.type.NONE);
stavesmo120981.setContext(context);
stavesmo120981.draw();
smo120981v0.draw(context, stavesmo120981);
// create beam groups and tuplets for format grp smo151873 before formatting
const dirsmo218171 = smo123265.getStemDirection();
smo123265.setStemDirection(dirsmo218171);
smo123266.setStemDirection(dirsmo218171);
const smo218171 = new VF.Beam([smo123265,smo123266]);
const dirsmo218172 = smo123268.getStemDirection();
smo123268.setStemDirection(dirsmo218172);
smo123269.setStemDirection(dirsmo218172);
smo123270.setStemDirection(dirsmo218172);
smo123271.setStemDirection(dirsmo218172);
const smo218172 = new VF.Beam([smo123268,smo123269,smo123270,smo123271]);
const dirsmo218175 = smo125671.getStemDirection();
smo125671.setStemDirection(dirsmo218175);
smo125672.setStemDirection(dirsmo218175);
const smo218175 = new VF.Beam([smo125671,smo125672]);
const dirsmo218176 = smo125674.getStemDirection();
smo125674.setStemDirection(dirsmo218176);
smo125675.setStemDirection(dirsmo218176);
smo125676.setStemDirection(dirsmo218176);
smo125677.setStemDirection(dirsmo218176);
const smo218176 = new VF.Beam([smo125674,smo125675,smo125676,smo125677]);
 
// formatting measures in staff group smo151873
fmtsmo12328715.format([smo123287v0,smo125693v0,smo128024v0,smo130374v0], 402);
const stavesmo123287 = new VF.Stave(915, 630.2253035909339, 416);
stavesmo123287.setAttribute('id', 'stavesmo123287');
stavesmo123287.setBegBarType(VF.Barline.type.NONE);
stavesmo123287.setContext(context);
stavesmo123287.draw();
smo123287v0.draw(context, stavesmo123287);
smo218171.setContext(context);
smo218171.draw();
smo218172.setContext(context);
smo218172.draw();
const stavesmo125693 = new VF.Stave(915, 700.2253035909339, 416);
stavesmo125693.setAttribute('id', 'stavesmo125693');
stavesmo125693.setBegBarType(VF.Barline.type.NONE);
stavesmo125693.setContext(context);
stavesmo125693.draw();
smo125693v0.draw(context, stavesmo125693);
smo218175.setContext(context);
smo218175.draw();
smo218176.setContext(context);
smo218176.draw();
const stavesmo128024 = new VF.Stave(915, 761.2253035909339, 416);
stavesmo128024.setAttribute('id', 'stavesmo128024');
stavesmo128024.setBegBarType(VF.Barline.type.NONE);
stavesmo128024.setContext(context);
stavesmo128024.draw();
smo128024v0.draw(context, stavesmo128024);
const stavesmo130374 = new VF.Stave(915, 831.2253035909339, 416);
stavesmo130374.setAttribute('id', 'stavesmo130374');
stavesmo130374.setBegBarType(VF.Barline.type.NONE);
stavesmo130374.setContext(context);
stavesmo130374.draw();
smo130374v0.draw(context, stavesmo130374);
// create beam groups and tuplets for format grp smo151875 before formatting
const dirsmo218183 = smo132770.getStemDirection();
smo132770.setStemDirection(dirsmo218183);
smo132771.setStemDirection(dirsmo218183);
const smo218183 = new VF.Beam([smo132770,smo132771]);
const dirsmo218184 = smo132773.getStemDirection();
smo132773.setStemDirection(dirsmo218184);
smo132774.setStemDirection(dirsmo218184);
smo132775.setStemDirection(dirsmo218184);
smo132776.setStemDirection(dirsmo218184);
const smo218184 = new VF.Beam([smo132773,smo132774,smo132775,smo132776]);
const dirsmo218187 = smo135143.getStemDirection();
smo135143.setStemDirection(dirsmo218187);
smo135144.setStemDirection(dirsmo218187);
const smo218187 = new VF.Beam([smo135143,smo135144]);
const dirsmo218188 = smo135146.getStemDirection();
smo135146.setStemDirection(dirsmo218188);
smo135147.setStemDirection(dirsmo218188);
smo135148.setStemDirection(dirsmo218188);
smo135149.setStemDirection(dirsmo218188);
const smo218188 = new VF.Beam([smo135146,smo135147,smo135148,smo135149]);
const dirsmo218191 = smo137489.getStemDirection();
smo137489.setStemDirection(dirsmo218191);
smo137490.setStemDirection(dirsmo218191);
const smo218191 = new VF.Beam([smo137489,smo137490]);
const dirsmo218192 = smo137492.getStemDirection();
smo137492.setStemDirection(dirsmo218192);
smo137493.setStemDirection(dirsmo218192);
smo137494.setStemDirection(dirsmo218192);
smo137495.setStemDirection(dirsmo218192);
const smo218192 = new VF.Beam([smo137492,smo137493,smo137494,smo137495]);
 
// formatting measures in staff group smo151875
fmtsmo13279215.format([smo132792v0,smo135165v0,smo137511v0,smo139840v0], 402);
const stavesmo132792 = new VF.Stave(915, 936.2253035909339, 416);
stavesmo132792.setAttribute('id', 'stavesmo132792');
stavesmo132792.setBegBarType(VF.Barline.type.NONE);
stavesmo132792.setContext(context);
stavesmo132792.draw();
smo132792v0.draw(context, stavesmo132792);
smo218183.setContext(context);
smo218183.draw();
smo218184.setContext(context);
smo218184.draw();
const stavesmo135165 = new VF.Stave(915, 1023.2253035909339, 416);
stavesmo135165.setAttribute('id', 'stavesmo135165');
stavesmo135165.setBegBarType(VF.Barline.type.NONE);
stavesmo135165.setContext(context);
stavesmo135165.draw();
smo135165v0.draw(context, stavesmo135165);
smo218187.setContext(context);
smo218187.draw();
smo218188.setContext(context);
smo218188.draw();
const stavesmo137511 = new VF.Stave(915, 1128.225303590934, 416);
stavesmo137511.setAttribute('id', 'stavesmo137511');
stavesmo137511.setBegBarType(VF.Barline.type.NONE);
stavesmo137511.setContext(context);
stavesmo137511.draw();
smo137511v0.draw(context, stavesmo137511);
smo218191.setContext(context);
smo218191.draw();
smo218192.setContext(context);
smo218192.draw();
const stavesmo139840 = new VF.Stave(915, 1213.225303590934, 416);
stavesmo139840.setAttribute('id', 'stavesmo139840');
stavesmo139840.setBegBarType(VF.Barline.type.NONE);
stavesmo139840.setContext(context);
stavesmo139840.draw();
smo139840v0.draw(context, stavesmo139840);
// create beam groups and tuplets for format grp smo144326 before formatting
const dirsmo218197 = smo142151.getStemDirection();
smo142151.setStemDirection(dirsmo218197);
smo142152.setStemDirection(dirsmo218197);
const smo218197 = new VF.Beam([smo142151,smo142152]);
const dirsmo218198 = smo142154.getStemDirection();
smo142154.setStemDirection(dirsmo218198);
smo142155.setStemDirection(dirsmo218198);
smo142156.setStemDirection(dirsmo218198);
smo142157.setStemDirection(dirsmo218198);
const smo218198 = new VF.Beam([smo142154,smo142155,smo142156,smo142157]);
 
// formatting measures in staff group smo144326
fmtsmo14217315.format([smo142173v0], 402);
const stavesmo142173 = new VF.Stave(915, 1290.225303590934, 416);
stavesmo142173.setAttribute('id', 'stavesmo142173');
stavesmo142173.setBegBarType(VF.Barline.type.NONE);
stavesmo142173.setContext(context);
stavesmo142173.draw();
smo142173v0.draw(context, stavesmo142173);
smo218197.setContext(context);
smo218197.draw();
smo218198.setContext(context);
smo218198.draw();
// create beam groups and tuplets for format grp smo146794 before formatting
 
// formatting measures in staff group smo146794
fmtsmo14460315.format([smo144603v0], 402);
const stavesmo144603 = new VF.Stave(915, 1373.225303590934, 416);
stavesmo144603.setAttribute('id', 'stavesmo144603');
stavesmo144603.setBegBarType(VF.Barline.type.NONE);
stavesmo144603.setContext(context);
stavesmo144603.draw();
smo144603v0.draw(context, stavesmo144603);
// create beam groups and tuplets for format grp smo149152 before formatting
 
// formatting measures in staff group smo149152
fmtsmo14711815.format([smo147118v0], 402);
const stavesmo147118 = new VF.Stave(915, 1478.225303590934, 416);
stavesmo147118.setAttribute('id', 'stavesmo147118');
stavesmo147118.setBegBarType(VF.Barline.type.NONE);
stavesmo147118.setContext(context);
stavesmo147118.draw();
smo147118v0.draw(context, stavesmo147118);
// create beam groups and tuplets for format grp smo151865 before formatting
const dirsmo218205 = smo149550.getStemDirection();
smo149550.setStemDirection(dirsmo218205);
smo149551.setStemDirection(dirsmo218205);
smo149552.setStemDirection(dirsmo218205);
smo149553.setStemDirection(dirsmo218205);
const smo218205 = new VF.Beam([smo149550,smo149551,smo149552,smo149553]);
const dirsmo218206 = smo149554.getStemDirection();
smo149554.setStemDirection(dirsmo218206);
smo149555.setStemDirection(dirsmo218206);
const smo218206 = new VF.Beam([smo149554,smo149555]);
const smo149560 = new VF.Tuplet([smo149551,smo149552,smo149553], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo151865
fmtsmo14957615.format([smo149576v0], 402);
const stavesmo149576 = new VF.Stave(915, 1555.225303590934, 416);
stavesmo149576.setAttribute('id', 'stavesmo149576');
stavesmo149576.setBegBarType(VF.Barline.type.NONE);
stavesmo149576.setContext(context);
stavesmo149576.draw();
smo149576v0.draw(context, stavesmo149576);
smo218205.setContext(context);
smo218205.draw();
smo218206.setContext(context);
smo218206.draw();
smo149560.setContext(context).draw();
const fmtsmo11143316 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo111433v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111433v0ar = [];
const smo111413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo111413.setAttribute('id', 'smo111413');
smo111433v0ar.push(smo111413);
const smo111414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo111414.setAttribute('id', 'smo111414');
smo111433v0ar.push(smo111414);
const smo111415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo111415.setAttribute('id', 'smo111415');
smo111433v0ar.push(smo111415);
const smo111416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo111416.setAttribute('id', 'smo111416');
const smo1114160acc = new VF.Accidental('n');
smo111416.addModifier(smo1114160acc, 0);
smo111433v0ar.push(smo111416);
const smo111417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo111417.setAttribute('id', 'smo111417');
smo111433v0ar.push(smo111417);
smo111433v0.addTickables(smo111433v0ar)
fmtsmo11143316.joinVoices([smo111433v0]);
const fmtsmo11386016 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo113860v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113860v0ar = [];
const smo113840 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo113840.setAttribute('id', 'smo113840');
smo113860v0ar.push(smo113840);
const smo113841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo113841.setAttribute('id', 'smo113841');
smo113860v0ar.push(smo113841);
const smo113842 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo113842.setAttribute('id', 'smo113842');
smo113860v0ar.push(smo113842);
const smo113843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo113843.setAttribute('id', 'smo113843');
const smo1138430acc = new VF.Accidental('n');
smo113843.addModifier(smo1138430acc, 0);
smo113860v0ar.push(smo113843);
const smo113844 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo113844.setAttribute('id', 'smo113844');
const smo1138440acc = new VF.Accidental('b');
smo113844.addModifier(smo1138440acc, 0);
smo113860v0ar.push(smo113844);
smo113860v0.addTickables(smo113860v0ar)
fmtsmo11386016.joinVoices([smo113860v0]);
const fmtsmo11627616 = new VF.Formatter();
//
// voices and notes for stave 2 16
const smo116276v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo116276v0ar = [];
const smo116256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo116256.setAttribute('id', 'smo116256');
smo116276v0ar.push(smo116256);
const smo116257 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo116257.setAttribute('id', 'smo116257');
smo116276v0ar.push(smo116257);
const smo116258 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo116258.setAttribute('id', 'smo116258');
smo116276v0ar.push(smo116258);
const smo116259 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo116259.setAttribute('id', 'smo116259');
const smo1162590acc = new VF.Accidental('n');
smo116259.addModifier(smo1162590acc, 0);
smo116276v0ar.push(smo116259);
const smo116260 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["ab/4/n"]}'))
smo116260.setAttribute('id', 'smo116260');
const smo1162600acc = new VF.Accidental('b');
smo116260.addModifier(smo1162600acc, 0);
smo116276v0ar.push(smo116260);
smo116276v0.addTickables(smo116276v0ar)
fmtsmo11627616.joinVoices([smo116276v0]);
const fmtsmo11865016 = new VF.Formatter();
//
// voices and notes for stave 3 16
const smo118650v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo118650v0ar = [];
const smo118630 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo118630.setAttribute('id', 'smo118630');
smo118650v0ar.push(smo118630);
const smo118631 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo118631.setAttribute('id', 'smo118631');
smo118650v0ar.push(smo118631);
const smo118632 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo118632.setAttribute('id', 'smo118632');
smo118650v0ar.push(smo118632);
const smo118633 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo118633.setAttribute('id', 'smo118633');
const smo1186330acc = new VF.Accidental('n');
smo118633.addModifier(smo1186330acc, 0);
smo118650v0ar.push(smo118633);
const smo118634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo118634.setAttribute('id', 'smo118634');
const smo1186340acc = new VF.Accidental('#');
smo118634.addModifier(smo1186340acc, 0);
smo118650v0ar.push(smo118634);
smo118650v0.addTickables(smo118650v0ar)
fmtsmo11865016.joinVoices([smo118650v0]);
const fmtsmo12100116 = new VF.Formatter();
//
// voices and notes for stave 4 16
const smo121001v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo121001v0ar = [];
const smo120982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo120982.setAttribute('id', 'smo120982');
smo121001v0ar.push(smo120982);
const smo120983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo120983.setAttribute('id', 'smo120983');
smo121001v0ar.push(smo120983);
const smo120984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo120984.setAttribute('id', 'smo120984');
smo121001v0ar.push(smo120984);
const smo120985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["a#/4/n"]}'))
smo120985.setAttribute('id', 'smo120985');
const smo1209850acc = new VF.Accidental('#');
smo120985.addModifier(smo1209850acc, 0);
smo121001v0ar.push(smo120985);
smo121001v0.addTickables(smo121001v0ar)
fmtsmo12100116.joinVoices([smo121001v0]);
const fmtsmo12330816 = new VF.Formatter();
//
// voices and notes for stave 5 16
const smo123308v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo123308v0ar = [];
const smo123288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo123288.setAttribute('id', 'smo123288');
smo123308v0ar.push(smo123288);
const smo123289 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo123289.setAttribute('id', 'smo123289');
smo123308v0ar.push(smo123289);
const smo123290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo123290.setAttribute('id', 'smo123290');
smo123308v0ar.push(smo123290);
const smo123291 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo123291.setAttribute('id', 'smo123291');
smo123308v0ar.push(smo123291);
const smo123292 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo123292.setAttribute('id', 'smo123292');
smo123308v0ar.push(smo123292);
smo123308v0.addTickables(smo123308v0ar)
fmtsmo12330816.joinVoices([smo123308v0]);
const fmtsmo12571416 = new VF.Formatter();
//
// voices and notes for stave 6 16
const smo125714v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo125714v0ar = [];
const smo125694 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo125694.setAttribute('id', 'smo125694');
smo125714v0ar.push(smo125694);
const smo125695 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo125695.setAttribute('id', 'smo125695');
smo125714v0ar.push(smo125695);
const smo125696 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo125696.setAttribute('id', 'smo125696');
smo125714v0ar.push(smo125696);
const smo125697 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo125697.setAttribute('id', 'smo125697');
const smo1256970acc = new VF.Accidental('b');
smo125697.addModifier(smo1256970acc, 0);
smo125714v0ar.push(smo125697);
const smo125698 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["db/4/n"]}'))
smo125698.setAttribute('id', 'smo125698');
const smo1256980acc = new VF.Accidental('b');
smo125698.addModifier(smo1256980acc, 0);
smo125714v0ar.push(smo125698);
smo125714v0.addTickables(smo125714v0ar)
fmtsmo12571416.joinVoices([smo125714v0]);
const fmtsmo12804116 = new VF.Formatter();
//
// voices and notes for stave 7 16
const smo128041v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo128041v0ar = [];
const smo128025 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo128025.setAttribute('id', 'smo128025');
smo128041v0ar.push(smo128025);
smo128041v0.addTickables(smo128041v0ar)
fmtsmo12804116.joinVoices([smo128041v0]);
const fmtsmo13039116 = new VF.Formatter();
//
// voices and notes for stave 8 16
const smo130391v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo130391v0ar = [];
const smo130375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo130375.setAttribute('id', 'smo130375');
smo130391v0ar.push(smo130375);
smo130391v0.addTickables(smo130391v0ar)
fmtsmo13039116.joinVoices([smo130391v0]);
const fmtsmo13281316 = new VF.Formatter();
//
// voices and notes for stave 9 16
const smo132813v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo132813v0ar = [];
const smo132793 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo132793.setAttribute('id', 'smo132793');
smo132813v0ar.push(smo132793);
const smo132794 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo132794.setAttribute('id', 'smo132794');
smo132813v0ar.push(smo132794);
const smo132795 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo132795.setAttribute('id', 'smo132795');
smo132813v0ar.push(smo132795);
const smo132796 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["ab/3/n"]}'))
smo132796.setAttribute('id', 'smo132796');
const smo1327960acc = new VF.Accidental('b');
smo132796.addModifier(smo1327960acc, 0);
smo132813v0ar.push(smo132796);
const smo132797 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo132797.setAttribute('id', 'smo132797');
smo132813v0ar.push(smo132797);
smo132813v0.addTickables(smo132813v0ar)
fmtsmo13281316.joinVoices([smo132813v0]);
const fmtsmo13518616 = new VF.Formatter();
//
// voices and notes for stave 10 16
const smo135186v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo135186v0ar = [];
const smo135166 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo135166.setAttribute('id', 'smo135166');
smo135186v0ar.push(smo135166);
const smo135167 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo135167.setAttribute('id', 'smo135167');
smo135186v0ar.push(smo135167);
const smo135168 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo135168.setAttribute('id', 'smo135168');
smo135186v0ar.push(smo135168);
const smo135169 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo135169.setAttribute('id', 'smo135169');
smo135186v0ar.push(smo135169);
const smo135170 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo135170.setAttribute('id', 'smo135170');
smo135186v0ar.push(smo135170);
smo135186v0.addTickables(smo135186v0ar)
fmtsmo13518616.joinVoices([smo135186v0]);
const fmtsmo13753216 = new VF.Formatter();
//
// voices and notes for stave 11 16
const smo137532v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo137532v0ar = [];
const smo137512 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo137512.setAttribute('id', 'smo137512');
smo137532v0ar.push(smo137512);
const smo137513 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo137513.setAttribute('id', 'smo137513');
smo137532v0ar.push(smo137513);
const smo137514 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo137514.setAttribute('id', 'smo137514');
smo137532v0ar.push(smo137514);
const smo137515 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["eb/3/n"]}'))
smo137515.setAttribute('id', 'smo137515');
const smo1375150acc = new VF.Accidental('b');
smo137515.addModifier(smo1375150acc, 0);
smo137532v0ar.push(smo137515);
const smo137516 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo137516.setAttribute('id', 'smo137516');
const smo1375160acc = new VF.Accidental('n');
smo137516.addModifier(smo1375160acc, 0);
smo137532v0ar.push(smo137516);
smo137532v0.addTickables(smo137532v0ar)
fmtsmo13753216.joinVoices([smo137532v0]);
const fmtsmo13986016 = new VF.Formatter();
//
// voices and notes for stave 12 16
const smo139860v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo139860v0ar = [];
const smo139841 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo139841.setAttribute('id', 'smo139841');
smo139860v0ar.push(smo139841);
const smo139842 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo139842.setAttribute('id', 'smo139842');
smo139860v0ar.push(smo139842);
const smo139843 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n"]}'))
smo139843.setAttribute('id', 'smo139843');
smo139860v0ar.push(smo139843);
const smo139844 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["c#/3/n"]}'))
smo139844.setAttribute('id', 'smo139844');
const smo1398440acc = new VF.Accidental('#');
smo139844.addModifier(smo1398440acc, 0);
smo139860v0ar.push(smo139844);
smo139860v0.addTickables(smo139860v0ar)
fmtsmo13986016.joinVoices([smo139860v0]);
const fmtsmo14219416 = new VF.Formatter();
//
// voices and notes for stave 13 16
const smo142194v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo142194v0ar = [];
const smo142174 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo142174.setAttribute('id', 'smo142174');
smo142194v0ar.push(smo142174);
const smo142175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo142175.setAttribute('id', 'smo142175');
smo142194v0ar.push(smo142175);
const smo142176 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo142176.setAttribute('id', 'smo142176');
smo142194v0ar.push(smo142176);
const smo142177 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo142177.setAttribute('id', 'smo142177');
smo142194v0ar.push(smo142177);
const smo142178 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo142178.setAttribute('id', 'smo142178');
smo142194v0ar.push(smo142178);
smo142194v0.addTickables(smo142194v0ar)
fmtsmo14219416.joinVoices([smo142194v0]);
const fmtsmo14462016 = new VF.Formatter();
//
// voices and notes for stave 14 16
const smo144620v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo144620v0ar = [];
const smo144604 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo144604.setAttribute('id', 'smo144604');
smo144620v0ar.push(smo144604);
smo144620v0.addTickables(smo144620v0ar)
fmtsmo14462016.joinVoices([smo144620v0]);
const fmtsmo14713816 = new VF.Formatter();
//
// voices and notes for stave 15 16
const smo147138v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo147138v0ar = [];
const smo147119 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo147119.setAttribute('id', 'smo147119');
smo147138v0ar.push(smo147119);
const smo147120 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo147120.setAttribute('id', 'smo147120');
smo147138v0ar.push(smo147120);
const smo147121 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo147121.setAttribute('id', 'smo147121');
smo147138v0ar.push(smo147121);
const smo147122 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["c#/4/n"]}'))
smo147122.setAttribute('id', 'smo147122');
const smo1471220acc = new VF.Accidental('#');
smo147122.addModifier(smo1471220acc, 0);
smo147138v0ar.push(smo147122);
smo147138v0.addTickables(smo147138v0ar)
fmtsmo14713816.joinVoices([smo147138v0]);
const fmtsmo14959716 = new VF.Formatter();
//
// voices and notes for stave 16 16
const smo149597v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo149597v0ar = [];
const smo149577 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo149577.setAttribute('id', 'smo149577');
smo149597v0ar.push(smo149577);
const smo149578 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149578.setAttribute('id', 'smo149578');
const smo1495780acc = new VF.Accidental('n');
smo149578.addModifier(smo1495780acc, 0);
smo149597v0ar.push(smo149578);
const smo149579 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149579.setAttribute('id', 'smo149579');
smo149597v0ar.push(smo149579);
const smo149580 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149580.setAttribute('id', 'smo149580');
smo149597v0ar.push(smo149580);
const smo149581 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149581.setAttribute('id', 'smo149581');
smo149597v0ar.push(smo149581);
smo149597v0.addTickables(smo149597v0ar)
fmtsmo14959716.joinVoices([smo149597v0]);
// create beam groups and tuplets for format grp smo151871 before formatting
const dirsmo218209 = smo111413.getStemDirection();
smo111413.setStemDirection(dirsmo218209);
smo111414.setStemDirection(dirsmo218209);
const smo218209 = new VF.Beam([smo111413,smo111414]);
const dirsmo218211 = smo113840.getStemDirection();
smo113840.setStemDirection(dirsmo218211);
smo113841.setStemDirection(dirsmo218211);
const smo218211 = new VF.Beam([smo113840,smo113841]);
const dirsmo218213 = smo116256.getStemDirection();
smo116256.setStemDirection(dirsmo218213);
smo116257.setStemDirection(dirsmo218213);
const smo218213 = new VF.Beam([smo116256,smo116257]);
const dirsmo218215 = smo118630.getStemDirection();
smo118630.setStemDirection(dirsmo218215);
smo118631.setStemDirection(dirsmo218215);
const smo218215 = new VF.Beam([smo118630,smo118631]);
 
// formatting measures in staff group smo151871
fmtsmo11143316.format([smo111433v0,smo113860v0,smo116276v0,smo118650v0,smo121001v0], 140);
const stavesmo111433 = new VF.Stave(1331, 183.2253035909339, 155);
stavesmo111433.setAttribute('id', 'stavesmo111433');
stavesmo111433.setBegBarType(VF.Barline.type.NONE);
stavesmo111433.setEndBarType(2);
stavesmo111433.setContext(context);
stavesmo111433.draw();
smo111433v0.draw(context, stavesmo111433);
smo218209.setContext(context);
smo218209.draw();
const stavesmo113860 = new VF.Stave(1331, 288.2253035909339, 155);
stavesmo113860.setAttribute('id', 'stavesmo113860');
stavesmo113860.setBegBarType(VF.Barline.type.NONE);
stavesmo113860.setEndBarType(2);
stavesmo113860.setContext(context);
stavesmo113860.draw();
smo113860v0.draw(context, stavesmo113860);
smo218211.setContext(context);
smo218211.draw();
const stavesmo116276 = new VF.Stave(1331, 379.2253035909339, 155);
stavesmo116276.setAttribute('id', 'stavesmo116276');
stavesmo116276.setBegBarType(VF.Barline.type.NONE);
stavesmo116276.setEndBarType(2);
stavesmo116276.setContext(context);
stavesmo116276.draw();
smo116276v0.draw(context, stavesmo116276);
smo218213.setContext(context);
smo218213.draw();
const stavesmo118650 = new VF.Stave(1331, 479.2253035909339, 155);
stavesmo118650.setAttribute('id', 'stavesmo118650');
stavesmo118650.setBegBarType(VF.Barline.type.NONE);
stavesmo118650.setEndBarType(2);
stavesmo118650.setContext(context);
stavesmo118650.draw();
smo118650v0.draw(context, stavesmo118650);
smo218215.setContext(context);
smo218215.draw();
const stavesmo121001 = new VF.Stave(1331, 549.2253035909339, 155);
stavesmo121001.setAttribute('id', 'stavesmo121001');
stavesmo121001.setBegBarType(VF.Barline.type.NONE);
stavesmo121001.setEndBarType(2);
stavesmo121001.setContext(context);
stavesmo121001.draw();
smo121001v0.draw(context, stavesmo121001);
// create beam groups and tuplets for format grp smo151873 before formatting
const dirsmo218218 = smo123288.getStemDirection();
smo123288.setStemDirection(dirsmo218218);
smo123289.setStemDirection(dirsmo218218);
const smo218218 = new VF.Beam([smo123288,smo123289]);
const dirsmo218220 = smo125694.getStemDirection();
smo125694.setStemDirection(dirsmo218220);
smo125695.setStemDirection(dirsmo218220);
const smo218220 = new VF.Beam([smo125694,smo125695]);
 
// formatting measures in staff group smo151873
fmtsmo12330816.format([smo123308v0,smo125714v0,smo128041v0,smo130391v0], 140);
const stavesmo123308 = new VF.Stave(1331, 630.2253035909339, 155);
stavesmo123308.setAttribute('id', 'stavesmo123308');
stavesmo123308.setBegBarType(VF.Barline.type.NONE);
stavesmo123308.setEndBarType(2);
stavesmo123308.setContext(context);
stavesmo123308.draw();
smo123308v0.draw(context, stavesmo123308);
smo218218.setContext(context);
smo218218.draw();
const stavesmo125714 = new VF.Stave(1331, 700.2253035909339, 155);
stavesmo125714.setAttribute('id', 'stavesmo125714');
stavesmo125714.setBegBarType(VF.Barline.type.NONE);
stavesmo125714.setEndBarType(2);
stavesmo125714.setContext(context);
stavesmo125714.draw();
smo125714v0.draw(context, stavesmo125714);
smo218220.setContext(context);
smo218220.draw();
const stavesmo128041 = new VF.Stave(1331, 761.2253035909339, 155);
stavesmo128041.setAttribute('id', 'stavesmo128041');
stavesmo128041.setBegBarType(VF.Barline.type.NONE);
stavesmo128041.setEndBarType(2);
stavesmo128041.setContext(context);
stavesmo128041.draw();
smo128041v0.draw(context, stavesmo128041);
const stavesmo130391 = new VF.Stave(1331, 831.2253035909339, 155);
stavesmo130391.setAttribute('id', 'stavesmo130391');
stavesmo130391.setBegBarType(VF.Barline.type.NONE);
stavesmo130391.setEndBarType(2);
stavesmo130391.setContext(context);
stavesmo130391.draw();
smo130391v0.draw(context, stavesmo130391);
// create beam groups and tuplets for format grp smo151875 before formatting
const dirsmo218224 = smo132793.getStemDirection();
smo132793.setStemDirection(dirsmo218224);
smo132794.setStemDirection(dirsmo218224);
const smo218224 = new VF.Beam([smo132793,smo132794]);
const dirsmo218226 = smo135166.getStemDirection();
smo135166.setStemDirection(dirsmo218226);
smo135167.setStemDirection(dirsmo218226);
const smo218226 = new VF.Beam([smo135166,smo135167]);
const dirsmo218228 = smo137512.getStemDirection();
smo137512.setStemDirection(dirsmo218228);
smo137513.setStemDirection(dirsmo218228);
const smo218228 = new VF.Beam([smo137512,smo137513]);
 
// formatting measures in staff group smo151875
fmtsmo13281316.format([smo132813v0,smo135186v0,smo137532v0,smo139860v0], 140);
const stavesmo132813 = new VF.Stave(1331, 936.2253035909339, 155);
stavesmo132813.setAttribute('id', 'stavesmo132813');
stavesmo132813.setBegBarType(VF.Barline.type.NONE);
stavesmo132813.setEndBarType(2);
stavesmo132813.setContext(context);
stavesmo132813.draw();
smo132813v0.draw(context, stavesmo132813);
smo218224.setContext(context);
smo218224.draw();
const stavesmo135186 = new VF.Stave(1331, 1023.2253035909339, 155);
stavesmo135186.setAttribute('id', 'stavesmo135186');
stavesmo135186.setBegBarType(VF.Barline.type.NONE);
stavesmo135186.setEndBarType(2);
stavesmo135186.setContext(context);
stavesmo135186.draw();
smo135186v0.draw(context, stavesmo135186);
smo218226.setContext(context);
smo218226.draw();
const stavesmo137532 = new VF.Stave(1331, 1128.225303590934, 155);
stavesmo137532.setAttribute('id', 'stavesmo137532');
stavesmo137532.setBegBarType(VF.Barline.type.NONE);
stavesmo137532.setEndBarType(2);
stavesmo137532.setContext(context);
stavesmo137532.draw();
smo137532v0.draw(context, stavesmo137532);
smo218228.setContext(context);
smo218228.draw();
const stavesmo139860 = new VF.Stave(1331, 1213.225303590934, 155);
stavesmo139860.setAttribute('id', 'stavesmo139860');
stavesmo139860.setBegBarType(VF.Barline.type.NONE);
stavesmo139860.setEndBarType(2);
stavesmo139860.setContext(context);
stavesmo139860.draw();
smo139860v0.draw(context, stavesmo139860);
// create beam groups and tuplets for format grp smo144326 before formatting
const dirsmo218231 = smo142174.getStemDirection();
smo142174.setStemDirection(dirsmo218231);
smo142175.setStemDirection(dirsmo218231);
const smo218231 = new VF.Beam([smo142174,smo142175]);
 
// formatting measures in staff group smo144326
fmtsmo14219416.format([smo142194v0], 140);
const stavesmo142194 = new VF.Stave(1331, 1290.225303590934, 155);
stavesmo142194.setAttribute('id', 'stavesmo142194');
stavesmo142194.setBegBarType(VF.Barline.type.NONE);
stavesmo142194.setEndBarType(2);
stavesmo142194.setContext(context);
stavesmo142194.draw();
smo142194v0.draw(context, stavesmo142194);
smo218231.setContext(context);
smo218231.draw();
// create beam groups and tuplets for format grp smo146794 before formatting
 
// formatting measures in staff group smo146794
fmtsmo14462016.format([smo144620v0], 140);
const stavesmo144620 = new VF.Stave(1331, 1373.225303590934, 155);
stavesmo144620.setAttribute('id', 'stavesmo144620');
stavesmo144620.setBegBarType(VF.Barline.type.NONE);
stavesmo144620.setEndBarType(2);
stavesmo144620.setContext(context);
stavesmo144620.draw();
smo144620v0.draw(context, stavesmo144620);
// create beam groups and tuplets for format grp smo149152 before formatting
 
// formatting measures in staff group smo149152
fmtsmo14713816.format([smo147138v0], 140);
const stavesmo147138 = new VF.Stave(1331, 1478.225303590934, 155);
stavesmo147138.setAttribute('id', 'stavesmo147138');
stavesmo147138.setBegBarType(VF.Barline.type.NONE);
stavesmo147138.setEndBarType(2);
stavesmo147138.setContext(context);
stavesmo147138.draw();
smo147138v0.draw(context, stavesmo147138);
// create beam groups and tuplets for format grp smo151865 before formatting
 
// formatting measures in staff group smo151865
fmtsmo14959716.format([smo149597v0], 140);
const stavesmo149597 = new VF.Stave(1331, 1555.225303590934, 155);
stavesmo149597.setAttribute('id', 'stavesmo149597');
stavesmo149597.setBegBarType(VF.Barline.type.NONE);
stavesmo149597.setEndBarType(2);
stavesmo149597.setContext(context);
stavesmo149597.draw();
smo149597v0.draw(context, stavesmo149597);
const fmtsmo11145017 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo111450v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo111450v0ar = [];
const smo111434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo111434.setAttribute('id', 'smo111434');
smo111450v0ar.push(smo111434);
smo111450v0.addTickables(smo111450v0ar)
fmtsmo11145017.joinVoices([smo111450v0]);
const fmtsmo11387717 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo113877v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo113877v0ar = [];
const smo113861 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo113861.setAttribute('id', 'smo113861');
smo113877v0ar.push(smo113861);
smo113877v0.addTickables(smo113877v0ar)
fmtsmo11387717.joinVoices([smo113877v0]);
const fmtsmo11629317 = new VF.Formatter();
//
// voices and notes for stave 2 17
const smo116293v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo116293v0ar = [];
const smo116277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo116277.setAttribute('id', 'smo116277');
smo116293v0ar.push(smo116277);
smo116293v0.addTickables(smo116293v0ar)
fmtsmo11629317.joinVoices([smo116293v0]);
const fmtsmo11866717 = new VF.Formatter();
//
// voices and notes for stave 3 17
const smo118667v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo118667v0ar = [];
const smo118651 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo118651.setAttribute('id', 'smo118651');
smo118667v0ar.push(smo118651);
smo118667v0.addTickables(smo118667v0ar)
fmtsmo11866717.joinVoices([smo118667v0]);
const fmtsmo12101817 = new VF.Formatter();
//
// voices and notes for stave 4 17
const smo121018v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo121018v0ar = [];
const smo121002 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo121002.setAttribute('id', 'smo121002');
smo121018v0ar.push(smo121002);
smo121018v0.addTickables(smo121018v0ar)
fmtsmo12101817.joinVoices([smo121018v0]);
const fmtsmo12332517 = new VF.Formatter();
//
// voices and notes for stave 5 17
const smo123325v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo123325v0ar = [];
const smo123309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo123309.setAttribute('id', 'smo123309');
smo123325v0ar.push(smo123309);
smo123325v0.addTickables(smo123325v0ar)
fmtsmo12332517.joinVoices([smo123325v0]);
const fmtsmo12573117 = new VF.Formatter();
//
// voices and notes for stave 6 17
const smo125731v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo125731v0ar = [];
const smo125715 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo125715.setAttribute('id', 'smo125715');
smo125731v0ar.push(smo125715);
smo125731v0.addTickables(smo125731v0ar)
fmtsmo12573117.joinVoices([smo125731v0]);
const fmtsmo12805817 = new VF.Formatter();
//
// voices and notes for stave 7 17
const smo128058v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo128058v0ar = [];
const smo128042 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo128042.setAttribute('id', 'smo128042');
smo128058v0ar.push(smo128042);
smo128058v0.addTickables(smo128058v0ar)
fmtsmo12805817.joinVoices([smo128058v0]);
const fmtsmo13040817 = new VF.Formatter();
//
// voices and notes for stave 8 17
const smo130408v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo130408v0ar = [];
const smo130392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo130392.setAttribute('id', 'smo130392');
smo130408v0ar.push(smo130392);
smo130408v0.addTickables(smo130408v0ar)
fmtsmo13040817.joinVoices([smo130408v0]);
const fmtsmo13283017 = new VF.Formatter();
//
// voices and notes for stave 9 17
const smo132830v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo132830v0ar = [];
const smo132814 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo132814.setAttribute('id', 'smo132814');
smo132830v0ar.push(smo132814);
smo132830v0.addTickables(smo132830v0ar)
fmtsmo13283017.joinVoices([smo132830v0]);
const fmtsmo13520317 = new VF.Formatter();
//
// voices and notes for stave 10 17
const smo135203v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo135203v0ar = [];
const smo135187 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo135187.setAttribute('id', 'smo135187');
smo135203v0ar.push(smo135187);
smo135203v0.addTickables(smo135203v0ar)
fmtsmo13520317.joinVoices([smo135203v0]);
const fmtsmo13754917 = new VF.Formatter();
//
// voices and notes for stave 11 17
const smo137549v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo137549v0ar = [];
const smo137533 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo137533.setAttribute('id', 'smo137533');
smo137549v0ar.push(smo137533);
smo137549v0.addTickables(smo137549v0ar)
fmtsmo13754917.joinVoices([smo137549v0]);
const fmtsmo13987717 = new VF.Formatter();
//
// voices and notes for stave 12 17
const smo139877v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo139877v0ar = [];
const smo139861 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo139861.setAttribute('id', 'smo139861');
smo139877v0ar.push(smo139861);
smo139877v0.addTickables(smo139877v0ar)
fmtsmo13987717.joinVoices([smo139877v0]);
const fmtsmo14221117 = new VF.Formatter();
//
// voices and notes for stave 13 17
const smo142211v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo142211v0ar = [];
const smo142195 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo142195.setAttribute('id', 'smo142195');
smo142211v0ar.push(smo142195);
smo142211v0.addTickables(smo142211v0ar)
fmtsmo14221117.joinVoices([smo142211v0]);
const fmtsmo14463717 = new VF.Formatter();
//
// voices and notes for stave 14 17
const smo144637v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo144637v0ar = [];
const smo144621 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo144621.setAttribute('id', 'smo144621');
smo144637v0ar.push(smo144621);
smo144637v0.addTickables(smo144637v0ar)
fmtsmo14463717.joinVoices([smo144637v0]);
const fmtsmo14715717 = new VF.Formatter();
//
// voices and notes for stave 15 17
const smo147157v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo147157v0ar = [];
const smo147139 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo147139.setAttribute('id', 'smo147139');
smo147157v0ar.push(smo147139);
const smo147140 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo147140.setAttribute('id', 'smo147140');
smo147157v0ar.push(smo147140);
const smo147141 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo147141.setAttribute('id', 'smo147141');
smo147157v0ar.push(smo147141);
smo147157v0.addTickables(smo147157v0ar)
fmtsmo14715717.joinVoices([smo147157v0]);
const fmtsmo14961717 = new VF.Formatter();
//
// voices and notes for stave 16 17
const smo149617v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo149617v0ar = [];
const smo149598 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149598.setAttribute('id', 'smo149598');
const smo1495980acc = new VF.Accidental('n');
smo149598.addModifier(smo1495980acc, 0);
smo149617v0ar.push(smo149598);
const smo149599 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149599.setAttribute('id', 'smo149599');
smo149617v0ar.push(smo149599);
const smo149600 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149600.setAttribute('id', 'smo149600');
smo149617v0ar.push(smo149600);
const smo149601 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149601.setAttribute('id', 'smo149601');
smo149617v0ar.push(smo149601);
smo149617v0.addTickables(smo149617v0ar)
fmtsmo14961717.joinVoices([smo149617v0]);
// create beam groups and tuplets for format grp smo151871 before formatting
 
// formatting measures in staff group smo151871
fmtsmo11145017.format([smo111450v0,smo113877v0,smo116293v0,smo118667v0,smo121018v0], 108);
const stavesmo111450 = new VF.Stave(1486, 183.2253035909339, 146);
stavesmo111450.setAttribute('id', 'stavesmo111450');
stavesmo111450.setBegBarType(VF.Barline.type.NONE);
stavesmo111450.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":256}'), -1 * 0);
stavesmo111450.addTimeSignature('2/2');
stavesmo111450.setContext(context);
stavesmo111450.draw();
smo111450v0.draw(context, stavesmo111450);
const stavesmo113877 = new VF.Stave(1486, 288.2253035909339, 146);
stavesmo113877.setAttribute('id', 'stavesmo113877');
stavesmo113877.setBegBarType(VF.Barline.type.NONE);
stavesmo113877.addTimeSignature('2/2');
stavesmo113877.setContext(context);
stavesmo113877.draw();
smo113877v0.draw(context, stavesmo113877);
const stavesmo116293 = new VF.Stave(1486, 379.2253035909339, 146);
stavesmo116293.setAttribute('id', 'stavesmo116293');
stavesmo116293.setBegBarType(VF.Barline.type.NONE);
stavesmo116293.addTimeSignature('2/2');
stavesmo116293.setContext(context);
stavesmo116293.draw();
smo116293v0.draw(context, stavesmo116293);
const stavesmo118667 = new VF.Stave(1486, 479.2253035909339, 146);
stavesmo118667.setAttribute('id', 'stavesmo118667');
stavesmo118667.setBegBarType(VF.Barline.type.NONE);
stavesmo118667.addTimeSignature('2/2');
stavesmo118667.setContext(context);
stavesmo118667.draw();
smo118667v0.draw(context, stavesmo118667);
const stavesmo121018 = new VF.Stave(1486, 549.2253035909339, 146);
stavesmo121018.setAttribute('id', 'stavesmo121018');
stavesmo121018.setBegBarType(VF.Barline.type.NONE);
stavesmo121018.addTimeSignature('2/2');
stavesmo121018.setContext(context);
stavesmo121018.draw();
smo121018v0.draw(context, stavesmo121018);
// create beam groups and tuplets for format grp smo151873 before formatting
 
// formatting measures in staff group smo151873
fmtsmo12332517.format([smo123325v0,smo125731v0,smo128058v0,smo130408v0], 108);
const stavesmo123325 = new VF.Stave(1486, 630.2253035909339, 146);
stavesmo123325.setAttribute('id', 'stavesmo123325');
stavesmo123325.setBegBarType(VF.Barline.type.NONE);
stavesmo123325.addTimeSignature('2/2');
stavesmo123325.setContext(context);
stavesmo123325.draw();
smo123325v0.draw(context, stavesmo123325);
const stavesmo125731 = new VF.Stave(1486, 700.2253035909339, 146);
stavesmo125731.setAttribute('id', 'stavesmo125731');
stavesmo125731.setBegBarType(VF.Barline.type.NONE);
stavesmo125731.addTimeSignature('2/2');
stavesmo125731.setContext(context);
stavesmo125731.draw();
smo125731v0.draw(context, stavesmo125731);
const stavesmo128058 = new VF.Stave(1486, 761.2253035909339, 146);
stavesmo128058.setAttribute('id', 'stavesmo128058');
stavesmo128058.setBegBarType(VF.Barline.type.NONE);
stavesmo128058.addTimeSignature('2/2');
stavesmo128058.setContext(context);
stavesmo128058.draw();
smo128058v0.draw(context, stavesmo128058);
const stavesmo130408 = new VF.Stave(1486, 831.2253035909339, 146);
stavesmo130408.setAttribute('id', 'stavesmo130408');
stavesmo130408.setBegBarType(VF.Barline.type.NONE);
stavesmo130408.addTimeSignature('2/2');
stavesmo130408.setContext(context);
stavesmo130408.draw();
smo130408v0.draw(context, stavesmo130408);
// create beam groups and tuplets for format grp smo151875 before formatting
 
// formatting measures in staff group smo151875
fmtsmo13283017.format([smo132830v0,smo135203v0,smo137549v0,smo139877v0], 108);
const stavesmo132830 = new VF.Stave(1486, 936.2253035909339, 146);
stavesmo132830.setAttribute('id', 'stavesmo132830');
stavesmo132830.setBegBarType(VF.Barline.type.NONE);
stavesmo132830.addTimeSignature('2/2');
stavesmo132830.setContext(context);
stavesmo132830.draw();
smo132830v0.draw(context, stavesmo132830);
const stavesmo135203 = new VF.Stave(1486, 1023.2253035909339, 146);
stavesmo135203.setAttribute('id', 'stavesmo135203');
stavesmo135203.setBegBarType(VF.Barline.type.NONE);
stavesmo135203.addTimeSignature('2/2');
stavesmo135203.setContext(context);
stavesmo135203.draw();
smo135203v0.draw(context, stavesmo135203);
const stavesmo137549 = new VF.Stave(1486, 1128.225303590934, 146);
stavesmo137549.setAttribute('id', 'stavesmo137549');
stavesmo137549.setBegBarType(VF.Barline.type.NONE);
stavesmo137549.addTimeSignature('2/2');
stavesmo137549.setContext(context);
stavesmo137549.draw();
smo137549v0.draw(context, stavesmo137549);
const stavesmo139877 = new VF.Stave(1486, 1213.225303590934, 146);
stavesmo139877.setAttribute('id', 'stavesmo139877');
stavesmo139877.setBegBarType(VF.Barline.type.NONE);
stavesmo139877.addTimeSignature('2/2');
stavesmo139877.setContext(context);
stavesmo139877.draw();
smo139877v0.draw(context, stavesmo139877);
// create beam groups and tuplets for format grp smo144326 before formatting
 
// formatting measures in staff group smo144326
fmtsmo14221117.format([smo142211v0], 108);
const stavesmo142211 = new VF.Stave(1486, 1290.225303590934, 146);
stavesmo142211.setAttribute('id', 'stavesmo142211');
stavesmo142211.setBegBarType(VF.Barline.type.NONE);
stavesmo142211.addTimeSignature('2/2');
stavesmo142211.setContext(context);
stavesmo142211.draw();
smo142211v0.draw(context, stavesmo142211);
// create beam groups and tuplets for format grp smo146794 before formatting
 
// formatting measures in staff group smo146794
fmtsmo14463717.format([smo144637v0], 108);
const stavesmo144637 = new VF.Stave(1486, 1373.225303590934, 146);
stavesmo144637.setAttribute('id', 'stavesmo144637');
stavesmo144637.setBegBarType(VF.Barline.type.NONE);
stavesmo144637.addTimeSignature('2/2');
stavesmo144637.setContext(context);
stavesmo144637.draw();
smo144637v0.draw(context, stavesmo144637);
// create beam groups and tuplets for format grp smo149152 before formatting
 
// formatting measures in staff group smo149152
fmtsmo14715717.format([smo147157v0], 108);
const stavesmo147157 = new VF.Stave(1486, 1478.225303590934, 146);
stavesmo147157.setAttribute('id', 'stavesmo147157');
stavesmo147157.setBegBarType(VF.Barline.type.NONE);
stavesmo147157.addTimeSignature('2/2');
stavesmo147157.setContext(context);
stavesmo147157.draw();
smo147157v0.draw(context, stavesmo147157);
// create beam groups and tuplets for format grp smo151865 before formatting
 
// formatting measures in staff group smo151865
fmtsmo14961717.format([smo149617v0], 108);
const stavesmo149617 = new VF.Stave(1486, 1555.225303590934, 146);
stavesmo149617.setAttribute('id', 'stavesmo149617');
stavesmo149617.setBegBarType(VF.Barline.type.NONE);
stavesmo149617.addTimeSignature('2/2');
stavesmo149617.setContext(context);
stavesmo149617.draw();
smo149617v0.draw(context, stavesmo149617);
const fmtsmo11146718 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo111467v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo111467v0ar = [];
const smo111451 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo111451.setAttribute('id', 'smo111451');
smo111467v0ar.push(smo111451);
smo111467v0.addTickables(smo111467v0ar)
fmtsmo11146718.joinVoices([smo111467v0]);
const fmtsmo11389418 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo113894v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo113894v0ar = [];
const smo113878 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo113878.setAttribute('id', 'smo113878');
smo113894v0ar.push(smo113878);
smo113894v0.addTickables(smo113894v0ar)
fmtsmo11389418.joinVoices([smo113894v0]);
const fmtsmo11631018 = new VF.Formatter();
//
// voices and notes for stave 2 18
const smo116310v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo116310v0ar = [];
const smo116294 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo116294.setAttribute('id', 'smo116294');
smo116310v0ar.push(smo116294);
smo116310v0.addTickables(smo116310v0ar)
fmtsmo11631018.joinVoices([smo116310v0]);
const fmtsmo11868418 = new VF.Formatter();
//
// voices and notes for stave 3 18
const smo118684v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo118684v0ar = [];
const smo118668 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo118668.setAttribute('id', 'smo118668');
smo118684v0ar.push(smo118668);
smo118684v0.addTickables(smo118684v0ar)
fmtsmo11868418.joinVoices([smo118684v0]);
const fmtsmo12103518 = new VF.Formatter();
//
// voices and notes for stave 4 18
const smo121035v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo121035v0ar = [];
const smo121019 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo121019.setAttribute('id', 'smo121019');
smo121035v0ar.push(smo121019);
smo121035v0.addTickables(smo121035v0ar)
fmtsmo12103518.joinVoices([smo121035v0]);
const fmtsmo12334218 = new VF.Formatter();
//
// voices and notes for stave 5 18
const smo123342v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo123342v0ar = [];
const smo123326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo123326.setAttribute('id', 'smo123326');
smo123342v0ar.push(smo123326);
smo123342v0.addTickables(smo123342v0ar)
fmtsmo12334218.joinVoices([smo123342v0]);
const fmtsmo12574818 = new VF.Formatter();
//
// voices and notes for stave 6 18
const smo125748v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo125748v0ar = [];
const smo125732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo125732.setAttribute('id', 'smo125732');
smo125748v0ar.push(smo125732);
smo125748v0.addTickables(smo125748v0ar)
fmtsmo12574818.joinVoices([smo125748v0]);
const fmtsmo12807518 = new VF.Formatter();
//
// voices and notes for stave 7 18
const smo128075v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo128075v0ar = [];
const smo128059 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo128059.setAttribute('id', 'smo128059');
smo128075v0ar.push(smo128059);
smo128075v0.addTickables(smo128075v0ar)
fmtsmo12807518.joinVoices([smo128075v0]);
const fmtsmo13042518 = new VF.Formatter();
//
// voices and notes for stave 8 18
const smo130425v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo130425v0ar = [];
const smo130409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo130409.setAttribute('id', 'smo130409');
smo130425v0ar.push(smo130409);
smo130425v0.addTickables(smo130425v0ar)
fmtsmo13042518.joinVoices([smo130425v0]);
const fmtsmo13284718 = new VF.Formatter();
//
// voices and notes for stave 9 18
const smo132847v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo132847v0ar = [];
const smo132831 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo132831.setAttribute('id', 'smo132831');
smo132847v0ar.push(smo132831);
smo132847v0.addTickables(smo132847v0ar)
fmtsmo13284718.joinVoices([smo132847v0]);
const fmtsmo13522018 = new VF.Formatter();
//
// voices and notes for stave 10 18
const smo135220v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo135220v0ar = [];
const smo135204 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo135204.setAttribute('id', 'smo135204');
smo135220v0ar.push(smo135204);
smo135220v0.addTickables(smo135220v0ar)
fmtsmo13522018.joinVoices([smo135220v0]);
const fmtsmo13756618 = new VF.Formatter();
//
// voices and notes for stave 11 18
const smo137566v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo137566v0ar = [];
const smo137550 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo137550.setAttribute('id', 'smo137550');
smo137566v0ar.push(smo137550);
smo137566v0.addTickables(smo137566v0ar)
fmtsmo13756618.joinVoices([smo137566v0]);
const fmtsmo13989418 = new VF.Formatter();
//
// voices and notes for stave 12 18
const smo139894v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo139894v0ar = [];
const smo139878 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo139878.setAttribute('id', 'smo139878');
smo139894v0ar.push(smo139878);
smo139894v0.addTickables(smo139894v0ar)
fmtsmo13989418.joinVoices([smo139894v0]);
const fmtsmo14222818 = new VF.Formatter();
//
// voices and notes for stave 13 18
const smo142228v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo142228v0ar = [];
const smo142212 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo142212.setAttribute('id', 'smo142212');
smo142228v0ar.push(smo142212);
smo142228v0.addTickables(smo142228v0ar)
fmtsmo14222818.joinVoices([smo142228v0]);
const fmtsmo14465418 = new VF.Formatter();
//
// voices and notes for stave 14 18
const smo144654v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo144654v0ar = [];
const smo144638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo144638.setAttribute('id', 'smo144638');
smo144654v0ar.push(smo144638);
smo144654v0.addTickables(smo144654v0ar)
fmtsmo14465418.joinVoices([smo144654v0]);
const fmtsmo14717618 = new VF.Formatter();
//
// voices and notes for stave 15 18
const smo147176v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo147176v0ar = [];
const smo147158 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo147158.setAttribute('id', 'smo147158');
smo147176v0ar.push(smo147158);
const smo147159 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo147159.setAttribute('id', 'smo147159');
smo147176v0ar.push(smo147159);
const smo147160 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo147160.setAttribute('id', 'smo147160');
smo147176v0ar.push(smo147160);
smo147176v0.addTickables(smo147176v0ar)
fmtsmo14717618.joinVoices([smo147176v0]);
const fmtsmo14963918 = new VF.Formatter();
//
// voices and notes for stave 16 18
const smo149639v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo149639v0ar = [];
const smo149618 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149618.setAttribute('id', 'smo149618');
const smo1496180acc = new VF.Accidental('n');
smo149618.addModifier(smo1496180acc, 0);
smo149639v0ar.push(smo149618);
const smo149619 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149619.setAttribute('id', 'smo149619');
smo149639v0ar.push(smo149619);
const smo149620 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo149620.setAttribute('id', 'smo149620');
smo149639v0ar.push(smo149620);
const smo149621 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149621.setAttribute('id', 'smo149621');
smo149639v0ar.push(smo149621);
const smo149622 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149622.setAttribute('id', 'smo149622');
smo149639v0ar.push(smo149622);
const smo149623 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149623.setAttribute('id', 'smo149623');
smo149639v0ar.push(smo149623);
smo149639v0.addTickables(smo149639v0ar)
fmtsmo14963918.joinVoices([smo149639v0]);
// create beam groups and tuplets for format grp smo151871 before formatting
 
// formatting measures in staff group smo151871
fmtsmo11146718.format([smo111467v0,smo113894v0,smo116310v0,smo118684v0,smo121035v0], 174);
const stavesmo111467 = new VF.Stave(1632, 183.2253035909339, 188);
stavesmo111467.setAttribute('id', 'stavesmo111467');
stavesmo111467.setBegBarType(VF.Barline.type.NONE);
stavesmo111467.setContext(context);
stavesmo111467.draw();
smo111467v0.draw(context, stavesmo111467);
const stavesmo113894 = new VF.Stave(1632, 288.2253035909339, 188);
stavesmo113894.setAttribute('id', 'stavesmo113894');
stavesmo113894.setBegBarType(VF.Barline.type.NONE);
stavesmo113894.setContext(context);
stavesmo113894.draw();
smo113894v0.draw(context, stavesmo113894);
const stavesmo116310 = new VF.Stave(1632, 379.2253035909339, 188);
stavesmo116310.setAttribute('id', 'stavesmo116310');
stavesmo116310.setBegBarType(VF.Barline.type.NONE);
stavesmo116310.setContext(context);
stavesmo116310.draw();
smo116310v0.draw(context, stavesmo116310);
const stavesmo118684 = new VF.Stave(1632, 479.2253035909339, 188);
stavesmo118684.setAttribute('id', 'stavesmo118684');
stavesmo118684.setBegBarType(VF.Barline.type.NONE);
stavesmo118684.setContext(context);
stavesmo118684.draw();
smo118684v0.draw(context, stavesmo118684);
const stavesmo121035 = new VF.Stave(1632, 549.2253035909339, 188);
stavesmo121035.setAttribute('id', 'stavesmo121035');
stavesmo121035.setBegBarType(VF.Barline.type.NONE);
stavesmo121035.setContext(context);
stavesmo121035.draw();
smo121035v0.draw(context, stavesmo121035);
// create beam groups and tuplets for format grp smo151873 before formatting
 
// formatting measures in staff group smo151873
fmtsmo12334218.format([smo123342v0,smo125748v0,smo128075v0,smo130425v0], 174);
const stavesmo123342 = new VF.Stave(1632, 630.2253035909339, 188);
stavesmo123342.setAttribute('id', 'stavesmo123342');
stavesmo123342.setBegBarType(VF.Barline.type.NONE);
stavesmo123342.setContext(context);
stavesmo123342.draw();
smo123342v0.draw(context, stavesmo123342);
const stavesmo125748 = new VF.Stave(1632, 700.2253035909339, 188);
stavesmo125748.setAttribute('id', 'stavesmo125748');
stavesmo125748.setBegBarType(VF.Barline.type.NONE);
stavesmo125748.setContext(context);
stavesmo125748.draw();
smo125748v0.draw(context, stavesmo125748);
const stavesmo128075 = new VF.Stave(1632, 761.2253035909339, 188);
stavesmo128075.setAttribute('id', 'stavesmo128075');
stavesmo128075.setBegBarType(VF.Barline.type.NONE);
stavesmo128075.setContext(context);
stavesmo128075.draw();
smo128075v0.draw(context, stavesmo128075);
const stavesmo130425 = new VF.Stave(1632, 831.2253035909339, 188);
stavesmo130425.setAttribute('id', 'stavesmo130425');
stavesmo130425.setBegBarType(VF.Barline.type.NONE);
stavesmo130425.setContext(context);
stavesmo130425.draw();
smo130425v0.draw(context, stavesmo130425);
// create beam groups and tuplets for format grp smo151875 before formatting
 
// formatting measures in staff group smo151875
fmtsmo13284718.format([smo132847v0,smo135220v0,smo137566v0,smo139894v0], 174);
const stavesmo132847 = new VF.Stave(1632, 936.2253035909339, 188);
stavesmo132847.setAttribute('id', 'stavesmo132847');
stavesmo132847.setBegBarType(VF.Barline.type.NONE);
stavesmo132847.setContext(context);
stavesmo132847.draw();
smo132847v0.draw(context, stavesmo132847);
const stavesmo135220 = new VF.Stave(1632, 1023.2253035909339, 188);
stavesmo135220.setAttribute('id', 'stavesmo135220');
stavesmo135220.setBegBarType(VF.Barline.type.NONE);
stavesmo135220.setContext(context);
stavesmo135220.draw();
smo135220v0.draw(context, stavesmo135220);
const stavesmo137566 = new VF.Stave(1632, 1128.225303590934, 188);
stavesmo137566.setAttribute('id', 'stavesmo137566');
stavesmo137566.setBegBarType(VF.Barline.type.NONE);
stavesmo137566.setContext(context);
stavesmo137566.draw();
smo137566v0.draw(context, stavesmo137566);
const stavesmo139894 = new VF.Stave(1632, 1213.225303590934, 188);
stavesmo139894.setAttribute('id', 'stavesmo139894');
stavesmo139894.setBegBarType(VF.Barline.type.NONE);
stavesmo139894.setContext(context);
stavesmo139894.draw();
smo139894v0.draw(context, stavesmo139894);
// create beam groups and tuplets for format grp smo144326 before formatting
 
// formatting measures in staff group smo144326
fmtsmo14222818.format([smo142228v0], 174);
const stavesmo142228 = new VF.Stave(1632, 1290.225303590934, 188);
stavesmo142228.setAttribute('id', 'stavesmo142228');
stavesmo142228.setBegBarType(VF.Barline.type.NONE);
stavesmo142228.setContext(context);
stavesmo142228.draw();
smo142228v0.draw(context, stavesmo142228);
// create beam groups and tuplets for format grp smo146794 before formatting
 
// formatting measures in staff group smo146794
fmtsmo14465418.format([smo144654v0], 174);
const stavesmo144654 = new VF.Stave(1632, 1373.225303590934, 188);
stavesmo144654.setAttribute('id', 'stavesmo144654');
stavesmo144654.setBegBarType(VF.Barline.type.NONE);
stavesmo144654.setContext(context);
stavesmo144654.draw();
smo144654v0.draw(context, stavesmo144654);
// create beam groups and tuplets for format grp smo149152 before formatting
 
// formatting measures in staff group smo149152
fmtsmo14717618.format([smo147176v0], 174);
const stavesmo147176 = new VF.Stave(1632, 1478.225303590934, 188);
stavesmo147176.setAttribute('id', 'stavesmo147176');
stavesmo147176.setBegBarType(VF.Barline.type.NONE);
stavesmo147176.setContext(context);
stavesmo147176.draw();
smo147176v0.draw(context, stavesmo147176);
// create beam groups and tuplets for format grp smo151865 before formatting
const dirsmo218302 = smo149618.getStemDirection();
smo149618.setStemDirection(dirsmo218302);
smo149619.setStemDirection(dirsmo218302);
const smo218302 = new VF.Beam([smo149618,smo149619]);
 
// formatting measures in staff group smo151865
fmtsmo14963918.format([smo149639v0], 174);
const stavesmo149639 = new VF.Stave(1632, 1555.225303590934, 188);
stavesmo149639.setAttribute('id', 'stavesmo149639');
stavesmo149639.setBegBarType(VF.Barline.type.NONE);
stavesmo149639.setContext(context);
stavesmo149639.draw();
smo149639v0.draw(context, stavesmo149639);
smo218302.setContext(context);
smo218302.draw();
const fmtsmo11148419 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo111484v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo111484v0ar = [];
const smo111468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo111468.setAttribute('id', 'smo111468');
smo111484v0ar.push(smo111468);
smo111484v0.addTickables(smo111484v0ar)
fmtsmo11148419.joinVoices([smo111484v0]);
const fmtsmo11391119 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo113911v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo113911v0ar = [];
const smo113895 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo113895.setAttribute('id', 'smo113895');
smo113911v0ar.push(smo113895);
smo113911v0.addTickables(smo113911v0ar)
fmtsmo11391119.joinVoices([smo113911v0]);
const fmtsmo11632719 = new VF.Formatter();
//
// voices and notes for stave 2 19
const smo116327v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo116327v0ar = [];
const smo116311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo116311.setAttribute('id', 'smo116311');
smo116327v0ar.push(smo116311);
smo116327v0.addTickables(smo116327v0ar)
fmtsmo11632719.joinVoices([smo116327v0]);
const fmtsmo11870119 = new VF.Formatter();
//
// voices and notes for stave 3 19
const smo118701v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo118701v0ar = [];
const smo118685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo118685.setAttribute('id', 'smo118685');
smo118701v0ar.push(smo118685);
smo118701v0.addTickables(smo118701v0ar)
fmtsmo11870119.joinVoices([smo118701v0]);
const fmtsmo12105219 = new VF.Formatter();
//
// voices and notes for stave 4 19
const smo121052v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo121052v0ar = [];
const smo121036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo121036.setAttribute('id', 'smo121036');
smo121052v0ar.push(smo121036);
smo121052v0.addTickables(smo121052v0ar)
fmtsmo12105219.joinVoices([smo121052v0]);
const fmtsmo12335919 = new VF.Formatter();
//
// voices and notes for stave 5 19
const smo123359v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo123359v0ar = [];
const smo123343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo123343.setAttribute('id', 'smo123343');
smo123359v0ar.push(smo123343);
smo123359v0.addTickables(smo123359v0ar)
fmtsmo12335919.joinVoices([smo123359v0]);
const fmtsmo12576519 = new VF.Formatter();
//
// voices and notes for stave 6 19
const smo125765v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo125765v0ar = [];
const smo125749 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo125749.setAttribute('id', 'smo125749');
smo125765v0ar.push(smo125749);
smo125765v0.addTickables(smo125765v0ar)
fmtsmo12576519.joinVoices([smo125765v0]);
const fmtsmo12809219 = new VF.Formatter();
//
// voices and notes for stave 7 19
const smo128092v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo128092v0ar = [];
const smo128076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo128076.setAttribute('id', 'smo128076');
smo128092v0ar.push(smo128076);
smo128092v0.addTickables(smo128092v0ar)
fmtsmo12809219.joinVoices([smo128092v0]);
const fmtsmo13044219 = new VF.Formatter();
//
// voices and notes for stave 8 19
const smo130442v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo130442v0ar = [];
const smo130426 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo130426.setAttribute('id', 'smo130426');
smo130442v0ar.push(smo130426);
smo130442v0.addTickables(smo130442v0ar)
fmtsmo13044219.joinVoices([smo130442v0]);
const fmtsmo13286419 = new VF.Formatter();
//
// voices and notes for stave 9 19
const smo132864v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo132864v0ar = [];
const smo132848 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo132848.setAttribute('id', 'smo132848');
smo132864v0ar.push(smo132848);
smo132864v0.addTickables(smo132864v0ar)
fmtsmo13286419.joinVoices([smo132864v0]);
const fmtsmo13523719 = new VF.Formatter();
//
// voices and notes for stave 10 19
const smo135237v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo135237v0ar = [];
const smo135221 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo135221.setAttribute('id', 'smo135221');
smo135237v0ar.push(smo135221);
smo135237v0.addTickables(smo135237v0ar)
fmtsmo13523719.joinVoices([smo135237v0]);
const fmtsmo13758319 = new VF.Formatter();
//
// voices and notes for stave 11 19
const smo137583v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo137583v0ar = [];
const smo137567 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo137567.setAttribute('id', 'smo137567');
smo137583v0ar.push(smo137567);
smo137583v0.addTickables(smo137583v0ar)
fmtsmo13758319.joinVoices([smo137583v0]);
const fmtsmo13991119 = new VF.Formatter();
//
// voices and notes for stave 12 19
const smo139911v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo139911v0ar = [];
const smo139895 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo139895.setAttribute('id', 'smo139895');
smo139911v0ar.push(smo139895);
smo139911v0.addTickables(smo139911v0ar)
fmtsmo13991119.joinVoices([smo139911v0]);
const fmtsmo14224519 = new VF.Formatter();
//
// voices and notes for stave 13 19
const smo142245v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo142245v0ar = [];
const smo142229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo142229.setAttribute('id', 'smo142229');
smo142245v0ar.push(smo142229);
smo142245v0.addTickables(smo142245v0ar)
fmtsmo14224519.joinVoices([smo142245v0]);
const fmtsmo14467119 = new VF.Formatter();
//
// voices and notes for stave 14 19
const smo144671v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo144671v0ar = [];
const smo144655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo144655.setAttribute('id', 'smo144655');
smo144671v0ar.push(smo144655);
smo144671v0.addTickables(smo144671v0ar)
fmtsmo14467119.joinVoices([smo144671v0]);
const fmtsmo14719519 = new VF.Formatter();
//
// voices and notes for stave 15 19
const smo147195v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo147195v0ar = [];
const smo147177 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo147177.setAttribute('id', 'smo147177');
smo147195v0ar.push(smo147177);
const smo147178 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo147178.setAttribute('id', 'smo147178');
smo147195v0ar.push(smo147178);
const smo147179 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo147179.setAttribute('id', 'smo147179');
smo147195v0ar.push(smo147179);
smo147195v0.addTickables(smo147195v0ar)
fmtsmo14719519.joinVoices([smo147195v0]);
const fmtsmo14965919 = new VF.Formatter();
//
// voices and notes for stave 16 19
const smo149659v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo149659v0ar = [];
const smo149640 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149640.setAttribute('id', 'smo149640');
const smo1496400acc = new VF.Accidental('n');
smo149640.addModifier(smo1496400acc, 0);
smo149659v0ar.push(smo149640);
const smo149641 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149641.setAttribute('id', 'smo149641');
smo149659v0ar.push(smo149641);
const smo149642 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149642.setAttribute('id', 'smo149642');
smo149659v0ar.push(smo149642);
const smo149643 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149643.setAttribute('id', 'smo149643');
smo149659v0ar.push(smo149643);
smo149659v0.addTickables(smo149659v0ar)
fmtsmo14965919.joinVoices([smo149659v0]);
// create beam groups and tuplets for format grp smo151871 before formatting
 
// formatting measures in staff group smo151871
fmtsmo11148419.format([smo111484v0,smo113911v0,smo116327v0,smo118701v0,smo121052v0], 101);
const stavesmo111484 = new VF.Stave(1820, 183.2253035909339, 115);
stavesmo111484.setAttribute('id', 'stavesmo111484');
stavesmo111484.setBegBarType(VF.Barline.type.NONE);
stavesmo111484.setContext(context);
stavesmo111484.draw();
smo111484v0.draw(context, stavesmo111484);
const stavesmo113911 = new VF.Stave(1820, 288.2253035909339, 115);
stavesmo113911.setAttribute('id', 'stavesmo113911');
stavesmo113911.setBegBarType(VF.Barline.type.NONE);
stavesmo113911.setContext(context);
stavesmo113911.draw();
smo113911v0.draw(context, stavesmo113911);
const stavesmo116327 = new VF.Stave(1820, 379.2253035909339, 115);
stavesmo116327.setAttribute('id', 'stavesmo116327');
stavesmo116327.setBegBarType(VF.Barline.type.NONE);
stavesmo116327.setContext(context);
stavesmo116327.draw();
smo116327v0.draw(context, stavesmo116327);
const stavesmo118701 = new VF.Stave(1820, 479.2253035909339, 115);
stavesmo118701.setAttribute('id', 'stavesmo118701');
stavesmo118701.setBegBarType(VF.Barline.type.NONE);
stavesmo118701.setContext(context);
stavesmo118701.draw();
smo118701v0.draw(context, stavesmo118701);
const stavesmo121052 = new VF.Stave(1820, 549.2253035909339, 115);
stavesmo121052.setAttribute('id', 'stavesmo121052');
stavesmo121052.setBegBarType(VF.Barline.type.NONE);
stavesmo121052.setContext(context);
stavesmo121052.draw();
smo121052v0.draw(context, stavesmo121052);
// create beam groups and tuplets for format grp smo151873 before formatting
 
// formatting measures in staff group smo151873
fmtsmo12335919.format([smo123359v0,smo125765v0,smo128092v0,smo130442v0], 101);
const stavesmo123359 = new VF.Stave(1820, 630.2253035909339, 115);
stavesmo123359.setAttribute('id', 'stavesmo123359');
stavesmo123359.setBegBarType(VF.Barline.type.NONE);
stavesmo123359.setContext(context);
stavesmo123359.draw();
smo123359v0.draw(context, stavesmo123359);
const stavesmo125765 = new VF.Stave(1820, 700.2253035909339, 115);
stavesmo125765.setAttribute('id', 'stavesmo125765');
stavesmo125765.setBegBarType(VF.Barline.type.NONE);
stavesmo125765.setContext(context);
stavesmo125765.draw();
smo125765v0.draw(context, stavesmo125765);
const stavesmo128092 = new VF.Stave(1820, 761.2253035909339, 115);
stavesmo128092.setAttribute('id', 'stavesmo128092');
stavesmo128092.setBegBarType(VF.Barline.type.NONE);
stavesmo128092.setContext(context);
stavesmo128092.draw();
smo128092v0.draw(context, stavesmo128092);
const stavesmo130442 = new VF.Stave(1820, 831.2253035909339, 115);
stavesmo130442.setAttribute('id', 'stavesmo130442');
stavesmo130442.setBegBarType(VF.Barline.type.NONE);
stavesmo130442.setContext(context);
stavesmo130442.draw();
smo130442v0.draw(context, stavesmo130442);
// create beam groups and tuplets for format grp smo151875 before formatting
 
// formatting measures in staff group smo151875
fmtsmo13286419.format([smo132864v0,smo135237v0,smo137583v0,smo139911v0], 101);
const stavesmo132864 = new VF.Stave(1820, 936.2253035909339, 115);
stavesmo132864.setAttribute('id', 'stavesmo132864');
stavesmo132864.setBegBarType(VF.Barline.type.NONE);
stavesmo132864.setContext(context);
stavesmo132864.draw();
smo132864v0.draw(context, stavesmo132864);
const stavesmo135237 = new VF.Stave(1820, 1023.2253035909339, 115);
stavesmo135237.setAttribute('id', 'stavesmo135237');
stavesmo135237.setBegBarType(VF.Barline.type.NONE);
stavesmo135237.setContext(context);
stavesmo135237.draw();
smo135237v0.draw(context, stavesmo135237);
const stavesmo137583 = new VF.Stave(1820, 1128.225303590934, 115);
stavesmo137583.setAttribute('id', 'stavesmo137583');
stavesmo137583.setBegBarType(VF.Barline.type.NONE);
stavesmo137583.setContext(context);
stavesmo137583.draw();
smo137583v0.draw(context, stavesmo137583);
const stavesmo139911 = new VF.Stave(1820, 1213.225303590934, 115);
stavesmo139911.setAttribute('id', 'stavesmo139911');
stavesmo139911.setBegBarType(VF.Barline.type.NONE);
stavesmo139911.setContext(context);
stavesmo139911.draw();
smo139911v0.draw(context, stavesmo139911);
// create beam groups and tuplets for format grp smo144326 before formatting
 
// formatting measures in staff group smo144326
fmtsmo14224519.format([smo142245v0], 101);
const stavesmo142245 = new VF.Stave(1820, 1290.225303590934, 115);
stavesmo142245.setAttribute('id', 'stavesmo142245');
stavesmo142245.setBegBarType(VF.Barline.type.NONE);
stavesmo142245.setContext(context);
stavesmo142245.draw();
smo142245v0.draw(context, stavesmo142245);
// create beam groups and tuplets for format grp smo146794 before formatting
 
// formatting measures in staff group smo146794
fmtsmo14467119.format([smo144671v0], 101);
const stavesmo144671 = new VF.Stave(1820, 1373.225303590934, 115);
stavesmo144671.setAttribute('id', 'stavesmo144671');
stavesmo144671.setBegBarType(VF.Barline.type.NONE);
stavesmo144671.setContext(context);
stavesmo144671.draw();
smo144671v0.draw(context, stavesmo144671);
// create beam groups and tuplets for format grp smo149152 before formatting
 
// formatting measures in staff group smo149152
fmtsmo14719519.format([smo147195v0], 101);
const stavesmo147195 = new VF.Stave(1820, 1478.225303590934, 115);
stavesmo147195.setAttribute('id', 'stavesmo147195');
stavesmo147195.setBegBarType(VF.Barline.type.NONE);
stavesmo147195.setContext(context);
stavesmo147195.draw();
smo147195v0.draw(context, stavesmo147195);
// create beam groups and tuplets for format grp smo151865 before formatting
 
// formatting measures in staff group smo151865
fmtsmo14965919.format([smo149659v0], 101);
const stavesmo149659 = new VF.Stave(1820, 1555.225303590934, 115);
stavesmo149659.setAttribute('id', 'stavesmo149659');
stavesmo149659.setBegBarType(VF.Barline.type.NONE);
stavesmo149659.setContext(context);
stavesmo149659.draw();
smo149659v0.draw(context, stavesmo149659);
const fmtsmo11150120 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo111501v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo111501v0ar = [];
const smo111485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo111485.setAttribute('id', 'smo111485');
smo111501v0ar.push(smo111485);
smo111501v0.addTickables(smo111501v0ar)
fmtsmo11150120.joinVoices([smo111501v0]);
const fmtsmo11392820 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo113928v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo113928v0ar = [];
const smo113912 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo113912.setAttribute('id', 'smo113912');
smo113928v0ar.push(smo113912);
smo113928v0.addTickables(smo113928v0ar)
fmtsmo11392820.joinVoices([smo113928v0]);
const fmtsmo11634420 = new VF.Formatter();
//
// voices and notes for stave 2 20
const smo116344v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo116344v0ar = [];
const smo116328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo116328.setAttribute('id', 'smo116328');
smo116344v0ar.push(smo116328);
smo116344v0.addTickables(smo116344v0ar)
fmtsmo11634420.joinVoices([smo116344v0]);
const fmtsmo11871820 = new VF.Formatter();
//
// voices and notes for stave 3 20
const smo118718v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo118718v0ar = [];
const smo118702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo118702.setAttribute('id', 'smo118702');
smo118718v0ar.push(smo118702);
smo118718v0.addTickables(smo118718v0ar)
fmtsmo11871820.joinVoices([smo118718v0]);
const fmtsmo12106920 = new VF.Formatter();
//
// voices and notes for stave 4 20
const smo121069v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo121069v0ar = [];
const smo121053 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo121053.setAttribute('id', 'smo121053');
smo121069v0ar.push(smo121053);
smo121069v0.addTickables(smo121069v0ar)
fmtsmo12106920.joinVoices([smo121069v0]);
const fmtsmo12337620 = new VF.Formatter();
//
// voices and notes for stave 5 20
const smo123376v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo123376v0ar = [];
const smo123360 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo123360.setAttribute('id', 'smo123360');
smo123376v0ar.push(smo123360);
smo123376v0.addTickables(smo123376v0ar)
fmtsmo12337620.joinVoices([smo123376v0]);
const fmtsmo12578220 = new VF.Formatter();
//
// voices and notes for stave 6 20
const smo125782v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo125782v0ar = [];
const smo125766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo125766.setAttribute('id', 'smo125766');
smo125782v0ar.push(smo125766);
smo125782v0.addTickables(smo125782v0ar)
fmtsmo12578220.joinVoices([smo125782v0]);
const fmtsmo12810920 = new VF.Formatter();
//
// voices and notes for stave 7 20
const smo128109v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo128109v0ar = [];
const smo128093 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo128093.setAttribute('id', 'smo128093');
smo128109v0ar.push(smo128093);
smo128109v0.addTickables(smo128109v0ar)
fmtsmo12810920.joinVoices([smo128109v0]);
const fmtsmo13045920 = new VF.Formatter();
//
// voices and notes for stave 8 20
const smo130459v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo130459v0ar = [];
const smo130443 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo130443.setAttribute('id', 'smo130443');
smo130459v0ar.push(smo130443);
smo130459v0.addTickables(smo130459v0ar)
fmtsmo13045920.joinVoices([smo130459v0]);
const fmtsmo13288120 = new VF.Formatter();
//
// voices and notes for stave 9 20
const smo132881v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo132881v0ar = [];
const smo132865 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo132865.setAttribute('id', 'smo132865');
smo132881v0ar.push(smo132865);
smo132881v0.addTickables(smo132881v0ar)
fmtsmo13288120.joinVoices([smo132881v0]);
const fmtsmo13525420 = new VF.Formatter();
//
// voices and notes for stave 10 20
const smo135254v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo135254v0ar = [];
const smo135238 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo135238.setAttribute('id', 'smo135238');
smo135254v0ar.push(smo135238);
smo135254v0.addTickables(smo135254v0ar)
fmtsmo13525420.joinVoices([smo135254v0]);
const fmtsmo13760020 = new VF.Formatter();
//
// voices and notes for stave 11 20
const smo137600v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo137600v0ar = [];
const smo137584 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo137584.setAttribute('id', 'smo137584');
smo137600v0ar.push(smo137584);
smo137600v0.addTickables(smo137600v0ar)
fmtsmo13760020.joinVoices([smo137600v0]);
const fmtsmo13992820 = new VF.Formatter();
//
// voices and notes for stave 12 20
const smo139928v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo139928v0ar = [];
const smo139912 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo139912.setAttribute('id', 'smo139912');
smo139928v0ar.push(smo139912);
smo139928v0.addTickables(smo139928v0ar)
fmtsmo13992820.joinVoices([smo139928v0]);
const fmtsmo14226220 = new VF.Formatter();
//
// voices and notes for stave 13 20
const smo142262v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo142262v0ar = [];
const smo142246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo142246.setAttribute('id', 'smo142246');
smo142262v0ar.push(smo142246);
smo142262v0.addTickables(smo142262v0ar)
fmtsmo14226220.joinVoices([smo142262v0]);
const fmtsmo14468820 = new VF.Formatter();
//
// voices and notes for stave 14 20
const smo144688v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo144688v0ar = [];
const smo144672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo144672.setAttribute('id', 'smo144672');
smo144688v0ar.push(smo144672);
smo144688v0.addTickables(smo144688v0ar)
fmtsmo14468820.joinVoices([smo144688v0]);
const fmtsmo14721420 = new VF.Formatter();
//
// voices and notes for stave 15 20
const smo147214v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo147214v0ar = [];
const smo147196 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo147196.setAttribute('id', 'smo147196');
smo147214v0ar.push(smo147196);
const smo147197 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo147197.setAttribute('id', 'smo147197');
smo147214v0ar.push(smo147197);
const smo147198 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo147198.setAttribute('id', 'smo147198');
smo147214v0ar.push(smo147198);
smo147214v0.addTickables(smo147214v0ar)
fmtsmo14721420.joinVoices([smo147214v0]);
const fmtsmo14968120 = new VF.Formatter();
//
// voices and notes for stave 16 20
const smo149681v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo149681v0ar = [];
const smo149660 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149660.setAttribute('id', 'smo149660');
const smo1496600acc = new VF.Accidental('n');
smo149660.addModifier(smo1496600acc, 0);
smo149681v0ar.push(smo149660);
const smo149661 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149661.setAttribute('id', 'smo149661');
smo149681v0ar.push(smo149661);
const smo149662 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo149662.setAttribute('id', 'smo149662');
smo149681v0ar.push(smo149662);
const smo149663 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149663.setAttribute('id', 'smo149663');
smo149681v0ar.push(smo149663);
const smo149664 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149664.setAttribute('id', 'smo149664');
smo149681v0ar.push(smo149664);
const smo149665 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149665.setAttribute('id', 'smo149665');
smo149681v0ar.push(smo149665);
smo149681v0.addTickables(smo149681v0ar)
fmtsmo14968120.joinVoices([smo149681v0]);
// create beam groups and tuplets for format grp smo151871 before formatting
 
// formatting measures in staff group smo151871
fmtsmo11150120.format([smo111501v0,smo113928v0,smo116344v0,smo118718v0,smo121069v0], 166);
const stavesmo111501 = new VF.Stave(1935, 183.2253035909339, 181);
stavesmo111501.setAttribute('id', 'stavesmo111501');
stavesmo111501.setBegBarType(VF.Barline.type.NONE);
stavesmo111501.setEndBarType(2);
stavesmo111501.setContext(context);
stavesmo111501.draw();
smo111501v0.draw(context, stavesmo111501);
const stavesmo113928 = new VF.Stave(1935, 288.2253035909339, 181);
stavesmo113928.setAttribute('id', 'stavesmo113928');
stavesmo113928.setBegBarType(VF.Barline.type.NONE);
stavesmo113928.setEndBarType(2);
stavesmo113928.setContext(context);
stavesmo113928.draw();
smo113928v0.draw(context, stavesmo113928);
const stavesmo116344 = new VF.Stave(1935, 379.2253035909339, 181);
stavesmo116344.setAttribute('id', 'stavesmo116344');
stavesmo116344.setBegBarType(VF.Barline.type.NONE);
stavesmo116344.setEndBarType(2);
stavesmo116344.setContext(context);
stavesmo116344.draw();
smo116344v0.draw(context, stavesmo116344);
const stavesmo118718 = new VF.Stave(1935, 479.2253035909339, 181);
stavesmo118718.setAttribute('id', 'stavesmo118718');
stavesmo118718.setBegBarType(VF.Barline.type.NONE);
stavesmo118718.setEndBarType(2);
stavesmo118718.setContext(context);
stavesmo118718.draw();
smo118718v0.draw(context, stavesmo118718);
const stavesmo121069 = new VF.Stave(1935, 549.2253035909339, 181);
stavesmo121069.setAttribute('id', 'stavesmo121069');
stavesmo121069.setBegBarType(VF.Barline.type.NONE);
stavesmo121069.setEndBarType(2);
stavesmo121069.setContext(context);
stavesmo121069.draw();
smo121069v0.draw(context, stavesmo121069);
// create beam groups and tuplets for format grp smo151873 before formatting
 
// formatting measures in staff group smo151873
fmtsmo12337620.format([smo123376v0,smo125782v0,smo128109v0,smo130459v0], 166);
const stavesmo123376 = new VF.Stave(1935, 630.2253035909339, 181);
stavesmo123376.setAttribute('id', 'stavesmo123376');
stavesmo123376.setBegBarType(VF.Barline.type.NONE);
stavesmo123376.setEndBarType(2);
stavesmo123376.setContext(context);
stavesmo123376.draw();
smo123376v0.draw(context, stavesmo123376);
const stavesmo125782 = new VF.Stave(1935, 700.2253035909339, 181);
stavesmo125782.setAttribute('id', 'stavesmo125782');
stavesmo125782.setBegBarType(VF.Barline.type.NONE);
stavesmo125782.setEndBarType(2);
stavesmo125782.setContext(context);
stavesmo125782.draw();
smo125782v0.draw(context, stavesmo125782);
const stavesmo128109 = new VF.Stave(1935, 761.2253035909339, 181);
stavesmo128109.setAttribute('id', 'stavesmo128109');
stavesmo128109.setBegBarType(VF.Barline.type.NONE);
stavesmo128109.setEndBarType(2);
stavesmo128109.setContext(context);
stavesmo128109.draw();
smo128109v0.draw(context, stavesmo128109);
const stavesmo130459 = new VF.Stave(1935, 831.2253035909339, 181);
stavesmo130459.setAttribute('id', 'stavesmo130459');
stavesmo130459.setBegBarType(VF.Barline.type.NONE);
stavesmo130459.setEndBarType(2);
stavesmo130459.setContext(context);
stavesmo130459.draw();
smo130459v0.draw(context, stavesmo130459);
// create beam groups and tuplets for format grp smo151875 before formatting
 
// formatting measures in staff group smo151875
fmtsmo13288120.format([smo132881v0,smo135254v0,smo137600v0,smo139928v0], 166);
const stavesmo132881 = new VF.Stave(1935, 936.2253035909339, 181);
stavesmo132881.setAttribute('id', 'stavesmo132881');
stavesmo132881.setBegBarType(VF.Barline.type.NONE);
stavesmo132881.setEndBarType(2);
stavesmo132881.setContext(context);
stavesmo132881.draw();
smo132881v0.draw(context, stavesmo132881);
const stavesmo135254 = new VF.Stave(1935, 1023.2253035909339, 181);
stavesmo135254.setAttribute('id', 'stavesmo135254');
stavesmo135254.setBegBarType(VF.Barline.type.NONE);
stavesmo135254.setEndBarType(2);
stavesmo135254.setContext(context);
stavesmo135254.draw();
smo135254v0.draw(context, stavesmo135254);
const stavesmo137600 = new VF.Stave(1935, 1128.225303590934, 181);
stavesmo137600.setAttribute('id', 'stavesmo137600');
stavesmo137600.setBegBarType(VF.Barline.type.NONE);
stavesmo137600.setEndBarType(2);
stavesmo137600.setContext(context);
stavesmo137600.draw();
smo137600v0.draw(context, stavesmo137600);
const stavesmo139928 = new VF.Stave(1935, 1213.225303590934, 181);
stavesmo139928.setAttribute('id', 'stavesmo139928');
stavesmo139928.setBegBarType(VF.Barline.type.NONE);
stavesmo139928.setEndBarType(2);
stavesmo139928.setContext(context);
stavesmo139928.draw();
smo139928v0.draw(context, stavesmo139928);
// create beam groups and tuplets for format grp smo144326 before formatting
 
// formatting measures in staff group smo144326
fmtsmo14226220.format([smo142262v0], 166);
const stavesmo142262 = new VF.Stave(1935, 1290.225303590934, 181);
stavesmo142262.setAttribute('id', 'stavesmo142262');
stavesmo142262.setBegBarType(VF.Barline.type.NONE);
stavesmo142262.setEndBarType(2);
stavesmo142262.setContext(context);
stavesmo142262.draw();
smo142262v0.draw(context, stavesmo142262);
// create beam groups and tuplets for format grp smo146794 before formatting
 
// formatting measures in staff group smo146794
fmtsmo14468820.format([smo144688v0], 166);
const stavesmo144688 = new VF.Stave(1935, 1373.225303590934, 181);
stavesmo144688.setAttribute('id', 'stavesmo144688');
stavesmo144688.setBegBarType(VF.Barline.type.NONE);
stavesmo144688.setEndBarType(2);
stavesmo144688.setContext(context);
stavesmo144688.draw();
smo144688v0.draw(context, stavesmo144688);
// create beam groups and tuplets for format grp smo149152 before formatting
 
// formatting measures in staff group smo149152
fmtsmo14721420.format([smo147214v0], 166);
const stavesmo147214 = new VF.Stave(1935, 1478.225303590934, 181);
stavesmo147214.setAttribute('id', 'stavesmo147214');
stavesmo147214.setBegBarType(VF.Barline.type.NONE);
stavesmo147214.setEndBarType(2);
stavesmo147214.setContext(context);
stavesmo147214.draw();
smo147214v0.draw(context, stavesmo147214);
// create beam groups and tuplets for format grp smo151865 before formatting
const dirsmo218355 = smo149660.getStemDirection();
smo149660.setStemDirection(dirsmo218355);
smo149661.setStemDirection(dirsmo218355);
const smo218355 = new VF.Beam([smo149660,smo149661]);
 
// formatting measures in staff group smo151865
fmtsmo14968120.format([smo149681v0], 166);
const stavesmo149681 = new VF.Stave(1935, 1555.225303590934, 181);
stavesmo149681.setAttribute('id', 'stavesmo149681');
stavesmo149681.setBegBarType(VF.Barline.type.NONE);
stavesmo149681.setEndBarType(2);
stavesmo149681.setContext(context);
stavesmo149681.draw();
smo149681v0.draw(context, stavesmo149681);
smo218355.setContext(context);
smo218355.draw();
const fmtsmo11152321 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo111523v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo111523v0ar = [];
const smo111502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo111502.setAttribute('id', 'smo111502');
smo111502.addModifier(new VF.Dot(), 0);
smo111523v0ar.push(smo111502);
const smo111504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo111504.setAttribute('id', 'smo111504');
smo111523v0ar.push(smo111504);
const smo111505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo111505.setAttribute('id', 'smo111505');
smo111523v0ar.push(smo111505);
const smo111506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo111506.setAttribute('id', 'smo111506');
smo111523v0ar.push(smo111506);
smo111523v0.addTickables(smo111523v0ar)
fmtsmo11152321.joinVoices([smo111523v0]);
const fmtsmo11395021 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo113950v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo113950v0ar = [];
const smo113929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo113929.setAttribute('id', 'smo113929');
smo113929.addModifier(new VF.Dot(), 0);
smo113950v0ar.push(smo113929);
const smo113931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo113931.setAttribute('id', 'smo113931');
smo113950v0ar.push(smo113931);
const smo113932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo113932.setAttribute('id', 'smo113932');
smo113950v0ar.push(smo113932);
const smo113933 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo113933.setAttribute('id', 'smo113933');
smo113950v0ar.push(smo113933);
smo113950v0.addTickables(smo113950v0ar)
fmtsmo11395021.joinVoices([smo113950v0]);
const fmtsmo11636621 = new VF.Formatter();
//
// voices and notes for stave 2 21
const smo116366v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo116366v0ar = [];
const smo116345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo116345.setAttribute('id', 'smo116345');
smo116345.addModifier(new VF.Dot(), 0);
smo116366v0ar.push(smo116345);
const smo116347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo116347.setAttribute('id', 'smo116347');
smo116366v0ar.push(smo116347);
const smo116348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo116348.setAttribute('id', 'smo116348');
smo116366v0ar.push(smo116348);
const smo116349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo116349.setAttribute('id', 'smo116349');
smo116366v0ar.push(smo116349);
smo116366v0.addTickables(smo116366v0ar)
fmtsmo11636621.joinVoices([smo116366v0]);
const fmtsmo11874021 = new VF.Formatter();
//
// voices and notes for stave 3 21
const smo118740v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo118740v0ar = [];
const smo118719 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo118719.setAttribute('id', 'smo118719');
smo118719.addModifier(new VF.Dot(), 0);
smo118740v0ar.push(smo118719);
const smo118721 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo118721.setAttribute('id', 'smo118721');
smo118740v0ar.push(smo118721);
const smo118722 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo118722.setAttribute('id', 'smo118722');
smo118740v0ar.push(smo118722);
const smo118723 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo118723.setAttribute('id', 'smo118723');
smo118740v0ar.push(smo118723);
smo118740v0.addTickables(smo118740v0ar)
fmtsmo11874021.joinVoices([smo118740v0]);
const fmtsmo12108721 = new VF.Formatter();
//
// voices and notes for stave 4 21
const smo121087v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo121087v0ar = [];
const smo121070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo121070.setAttribute('id', 'smo121070');
smo121087v0ar.push(smo121070);
smo121087v0.addTickables(smo121087v0ar)
fmtsmo12108721.joinVoices([smo121087v0]);
const fmtsmo12339621 = new VF.Formatter();
//
// voices and notes for stave 5 21
const smo123396v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo123396v0ar = [];
const smo123377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo123377.setAttribute('id', 'smo123377');
smo123396v0ar.push(smo123377);
const smo123378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo123378.setAttribute('id', 'smo123378');
smo123396v0ar.push(smo123378);
const smo123379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo123379.setAttribute('id', 'smo123379');
smo123396v0ar.push(smo123379);
smo123396v0.addTickables(smo123396v0ar)
fmtsmo12339621.joinVoices([smo123396v0]);
const fmtsmo12580221 = new VF.Formatter();
//
// voices and notes for stave 6 21
const smo125802v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo125802v0ar = [];
const smo125783 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo125783.setAttribute('id', 'smo125783');
smo125802v0ar.push(smo125783);
const smo125784 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo125784.setAttribute('id', 'smo125784');
smo125802v0ar.push(smo125784);
const smo125785 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo125785.setAttribute('id', 'smo125785');
smo125802v0ar.push(smo125785);
smo125802v0.addTickables(smo125802v0ar)
fmtsmo12580221.joinVoices([smo125802v0]);
const fmtsmo12812921 = new VF.Formatter();
//
// voices and notes for stave 7 21
const smo128129v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo128129v0ar = [];
const smo128110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo128110.setAttribute('id', 'smo128110');
smo128129v0ar.push(smo128110);
const smo128111 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo128111.setAttribute('id', 'smo128111');
smo128129v0ar.push(smo128111);
const smo128112 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo128112.setAttribute('id', 'smo128112');
smo128129v0ar.push(smo128112);
smo128129v0.addTickables(smo128129v0ar)
fmtsmo12812921.joinVoices([smo128129v0]);
const fmtsmo13047921 = new VF.Formatter();
//
// voices and notes for stave 8 21
const smo130479v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo130479v0ar = [];
const smo130460 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo130460.setAttribute('id', 'smo130460');
smo130479v0ar.push(smo130460);
const smo130461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo130461.setAttribute('id', 'smo130461');
smo130479v0ar.push(smo130461);
const smo130462 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo130462.setAttribute('id', 'smo130462');
smo130479v0ar.push(smo130462);
smo130479v0.addTickables(smo130479v0ar)
fmtsmo13047921.joinVoices([smo130479v0]);
const fmtsmo13289921 = new VF.Formatter();
//
// voices and notes for stave 9 21
const smo132899v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo132899v0ar = [];
const smo132882 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo132882.setAttribute('id', 'smo132882');
smo132899v0ar.push(smo132882);
smo132899v0.addTickables(smo132899v0ar)
fmtsmo13289921.joinVoices([smo132899v0]);
const fmtsmo13527221 = new VF.Formatter();
//
// voices and notes for stave 10 21
const smo135272v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo135272v0ar = [];
const smo135255 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo135255.setAttribute('id', 'smo135255');
smo135272v0ar.push(smo135255);
smo135272v0.addTickables(smo135272v0ar)
fmtsmo13527221.joinVoices([smo135272v0]);
const fmtsmo13761821 = new VF.Formatter();
//
// voices and notes for stave 11 21
const smo137618v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo137618v0ar = [];
const smo137601 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo137601.setAttribute('id', 'smo137601');
smo137618v0ar.push(smo137601);
smo137618v0.addTickables(smo137618v0ar)
fmtsmo13761821.joinVoices([smo137618v0]);
const fmtsmo13994621 = new VF.Formatter();
//
// voices and notes for stave 12 21
const smo139946v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo139946v0ar = [];
const smo139929 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo139929.setAttribute('id', 'smo139929');
smo139946v0ar.push(smo139929);
smo139946v0.addTickables(smo139946v0ar)
fmtsmo13994621.joinVoices([smo139946v0]);
const fmtsmo14228321 = new VF.Formatter();
//
// voices and notes for stave 13 21
const smo142283v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo142283v0ar = [];
const smo142263 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo142263.setAttribute('id', 'smo142263');
smo142283v0ar.push(smo142263);
const smo142264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo142264.setAttribute('id', 'smo142264');
smo142283v0ar.push(smo142264);
const smo142265 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo142265.setAttribute('id', 'smo142265');
smo142283v0ar.push(smo142265);
const smo142266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo142266.setAttribute('id', 'smo142266');
smo142283v0ar.push(smo142266);
smo142283v0.addTickables(smo142283v0ar)
fmtsmo14228321.joinVoices([smo142283v0]);
const fmtsmo14471121 = new VF.Formatter();
//
// voices and notes for stave 14 21
const smo144711v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo144711v0ar = [];
const smo144689 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo144689.setAttribute('id', 'smo144689');
smo144711v0ar.push(smo144689);
const smo144690 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo144690.setAttribute('id', 'smo144690');
smo144711v0ar.push(smo144690);
const smo144691 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo144691.setAttribute('id', 'smo144691');
smo144711v0ar.push(smo144691);
const smo144692 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo144692.setAttribute('id', 'smo144692');
smo144711v0ar.push(smo144692);
const smo144693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo144693.setAttribute('id', 'smo144693');
smo144711v0ar.push(smo144693);
const smo144694 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo144694.setAttribute('id', 'smo144694');
smo144711v0ar.push(smo144694);
smo144711v0.addTickables(smo144711v0ar)
fmtsmo14471121.joinVoices([smo144711v0]);
const fmtsmo14723421 = new VF.Formatter();
//
// voices and notes for stave 15 21
const smo147234v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo147234v0ar = [];
const smo147215 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo147215.setAttribute('id', 'smo147215');
smo147234v0ar.push(smo147215);
const smo147216 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo147216.setAttribute('id', 'smo147216');
smo147234v0ar.push(smo147216);
const smo147217 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo147217.setAttribute('id', 'smo147217');
smo147234v0ar.push(smo147217);
smo147234v0.addTickables(smo147234v0ar)
fmtsmo14723421.joinVoices([smo147234v0]);
const fmtsmo14970221 = new VF.Formatter();
//
// voices and notes for stave 16 21
const smo149702v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo149702v0ar = [];
const smo149682 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149682.setAttribute('id', 'smo149682');
const smo1496820acc = new VF.Accidental('n');
smo149682.addModifier(smo1496820acc, 0);
smo149702v0ar.push(smo149682);
const smo149683 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149683.setAttribute('id', 'smo149683');
smo149702v0ar.push(smo149683);
const smo149684 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149684.setAttribute('id', 'smo149684');
smo149702v0ar.push(smo149684);
const smo149685 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo149685.setAttribute('id', 'smo149685');
smo149702v0ar.push(smo149685);
smo149702v0.addTickables(smo149702v0ar)
fmtsmo14970221.joinVoices([smo149702v0]);
// create beam groups and tuplets for format grp smo151871 before formatting
 
// formatting measures in staff group smo151871
fmtsmo11152321.format([smo111523v0,smo113950v0,smo116366v0,smo118740v0,smo121087v0], 157);
const stavesmo111523 = new VF.Stave(2116, 183.2253035909339, 180);
stavesmo111523.setAttribute('id', 'stavesmo111523');
stavesmo111523.setBegBarType(4);
stavesmo111523.setSection('B', 0);
stavesmo111523.setContext(context);
stavesmo111523.draw();
smo111523v0.draw(context, stavesmo111523);
const stavesmo113950 = new VF.Stave(2116, 288.2253035909339, 180);
stavesmo113950.setAttribute('id', 'stavesmo113950');
stavesmo113950.setBegBarType(4);
stavesmo113950.setContext(context);
stavesmo113950.draw();
smo113950v0.draw(context, stavesmo113950);
const stavesmo116366 = new VF.Stave(2116, 379.2253035909339, 180);
stavesmo116366.setAttribute('id', 'stavesmo116366');
stavesmo116366.setBegBarType(4);
stavesmo116366.setContext(context);
stavesmo116366.draw();
smo116366v0.draw(context, stavesmo116366);
const stavesmo118740 = new VF.Stave(2116, 479.2253035909339, 180);
stavesmo118740.setAttribute('id', 'stavesmo118740');
stavesmo118740.setBegBarType(4);
stavesmo118740.setContext(context);
stavesmo118740.draw();
smo118740v0.draw(context, stavesmo118740);
const stavesmo121087 = new VF.Stave(2116, 549.2253035909339, 180);
stavesmo121087.setAttribute('id', 'stavesmo121087');
stavesmo121087.setBegBarType(4);
stavesmo121087.setContext(context);
stavesmo121087.draw();
smo121087v0.draw(context, stavesmo121087);
// create beam groups and tuplets for format grp smo151873 before formatting
 
// formatting measures in staff group smo151873
fmtsmo12339621.format([smo123396v0,smo125802v0,smo128129v0,smo130479v0], 157);
const stavesmo123396 = new VF.Stave(2116, 630.2253035909339, 180);
stavesmo123396.setAttribute('id', 'stavesmo123396');
stavesmo123396.setBegBarType(4);
stavesmo123396.setContext(context);
stavesmo123396.draw();
smo123396v0.draw(context, stavesmo123396);
const stavesmo125802 = new VF.Stave(2116, 700.2253035909339, 180);
stavesmo125802.setAttribute('id', 'stavesmo125802');
stavesmo125802.setBegBarType(4);
stavesmo125802.setContext(context);
stavesmo125802.draw();
smo125802v0.draw(context, stavesmo125802);
const stavesmo128129 = new VF.Stave(2116, 761.2253035909339, 180);
stavesmo128129.setAttribute('id', 'stavesmo128129');
stavesmo128129.setBegBarType(4);
stavesmo128129.setContext(context);
stavesmo128129.draw();
smo128129v0.draw(context, stavesmo128129);
const stavesmo130479 = new VF.Stave(2116, 831.2253035909339, 180);
stavesmo130479.setAttribute('id', 'stavesmo130479');
stavesmo130479.setBegBarType(4);
stavesmo130479.setContext(context);
stavesmo130479.draw();
smo130479v0.draw(context, stavesmo130479);
// create beam groups and tuplets for format grp smo151875 before formatting
 
// formatting measures in staff group smo151875
fmtsmo13289921.format([smo132899v0,smo135272v0,smo137618v0,smo139946v0], 157);
const stavesmo132899 = new VF.Stave(2116, 936.2253035909339, 180);
stavesmo132899.setAttribute('id', 'stavesmo132899');
stavesmo132899.setBegBarType(4);
stavesmo132899.setContext(context);
stavesmo132899.draw();
smo132899v0.draw(context, stavesmo132899);
const stavesmo135272 = new VF.Stave(2116, 1023.2253035909339, 180);
stavesmo135272.setAttribute('id', 'stavesmo135272');
stavesmo135272.setBegBarType(4);
stavesmo135272.setContext(context);
stavesmo135272.draw();
smo135272v0.draw(context, stavesmo135272);
const stavesmo137618 = new VF.Stave(2116, 1128.225303590934, 180);
stavesmo137618.setAttribute('id', 'stavesmo137618');
stavesmo137618.setBegBarType(4);
stavesmo137618.setContext(context);
stavesmo137618.draw();
smo137618v0.draw(context, stavesmo137618);
const stavesmo139946 = new VF.Stave(2116, 1213.225303590934, 180);
stavesmo139946.setAttribute('id', 'stavesmo139946');
stavesmo139946.setBegBarType(4);
stavesmo139946.setContext(context);
stavesmo139946.draw();
smo139946v0.draw(context, stavesmo139946);
// create beam groups and tuplets for format grp smo144326 before formatting
 
// formatting measures in staff group smo144326
fmtsmo14228321.format([smo142283v0], 157);
const stavesmo142283 = new VF.Stave(2116, 1290.225303590934, 180);
stavesmo142283.setAttribute('id', 'stavesmo142283');
stavesmo142283.setBegBarType(4);
stavesmo142283.setContext(context);
stavesmo142283.draw();
smo142283v0.draw(context, stavesmo142283);
// create beam groups and tuplets for format grp smo146794 before formatting
const dirsmo218371 = smo144689.getStemDirection();
smo144689.setStemDirection(dirsmo218371);
smo144690.setStemDirection(dirsmo218371);
smo144691.setStemDirection(dirsmo218371);
smo144692.setStemDirection(dirsmo218371);
const smo218371 = new VF.Beam([smo144689,smo144690,smo144691,smo144692]);
 
// formatting measures in staff group smo146794
fmtsmo14471121.format([smo144711v0], 157);
const stavesmo144711 = new VF.Stave(2116, 1373.225303590934, 180);
stavesmo144711.setAttribute('id', 'stavesmo144711');
stavesmo144711.setBegBarType(4);
stavesmo144711.setContext(context);
stavesmo144711.draw();
smo144711v0.draw(context, stavesmo144711);
smo218371.setContext(context);
smo218371.draw();
// create beam groups and tuplets for format grp smo149152 before formatting
 
// formatting measures in staff group smo149152
fmtsmo14723421.format([smo147234v0], 157);
const stavesmo147234 = new VF.Stave(2116, 1478.225303590934, 180);
stavesmo147234.setAttribute('id', 'stavesmo147234');
stavesmo147234.setBegBarType(4);
stavesmo147234.setContext(context);
stavesmo147234.draw();
smo147234v0.draw(context, stavesmo147234);
// create beam groups and tuplets for format grp smo151865 before formatting
 
// formatting measures in staff group smo151865
fmtsmo14970221.format([smo149702v0], 157);
const stavesmo149702 = new VF.Stave(2116, 1555.225303590934, 180);
stavesmo149702.setAttribute('id', 'stavesmo149702');
stavesmo149702.setBegBarType(4);
stavesmo149702.setContext(context);
stavesmo149702.draw();
smo149702v0.draw(context, stavesmo149702);
const rightsmo151865stavesmo11152316 = new VF.StaveConnector(stavesmo111523, stavesmo121087).setType(0);
rightsmo151865stavesmo11152316.setContext(context).draw();
const rightsmo151865stavesmo12339616 = new VF.StaveConnector(stavesmo123396, stavesmo130479).setType(0);
rightsmo151865stavesmo12339616.setContext(context).draw();
const rightsmo151865stavesmo13289916 = new VF.StaveConnector(stavesmo132899, stavesmo139946).setType(0);
rightsmo151865stavesmo13289916.setContext(context).draw();
// modifier from 0-17-0-0 to 0-18-0-0
const smo226535 = new VF.StaveHairpin({ first_note: smo111434, last_note: smo111434,
       firstNote: smo111434, lastNote: smo111434 });
smo226535.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo226535.setContext(context).setPosition(4).draw();
// modifier from 0-15-0-6 to 0-15-0-9
const smo226536 = new VF.Curve(smo111392, smo111395, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo226536.setContext(context).draw();
// modifier from 0-17-0-0 to 0-18-0-0
const smo226537 = new VF.StaveTie({ first_note: smo111434, last_note: smo111451, 
          firstNote: smo111434, lastNote: smo111451, first_indices: [0], last_indices: [0]});
smo226537.setContext(context).draw();
// modifier from 0-21-0-1 to 0-21-0-2
const smo226538 = new VF.StaveTie({ first_note: smo111504, last_note: smo111505, 
          firstNote: smo111504, lastNote: smo111505, first_indices: [0], last_indices: [0]});
smo226538.setContext(context).draw();
// modifier from 1-17-0-0 to 1-18-0-0
const smo226539 = new VF.StaveHairpin({ first_note: smo113861, last_note: smo113861,
       firstNote: smo113861, lastNote: smo113861 });
smo226539.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo226539.setContext(context).setPosition(4).draw();
// modifier from 1-15-0-6 to 1-15-0-9
const smo226540 = new VF.Curve(smo113819, smo113822, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo226540.setContext(context).draw();
// modifier from 1-17-0-0 to 1-18-0-0
const smo226541 = new VF.StaveTie({ first_note: smo113861, last_note: smo113878, 
          firstNote: smo113861, lastNote: smo113878, first_indices: [0], last_indices: [0]});
smo226541.setContext(context).draw();
// modifier from 1-21-0-1 to 1-21-0-2
const smo226542 = new VF.StaveTie({ first_note: smo113931, last_note: smo113932, 
          firstNote: smo113931, lastNote: smo113932, first_indices: [0], last_indices: [0]});
smo226542.setContext(context).draw();
// modifier from 2-17-0-0 to 2-18-0-0
const smo226543 = new VF.StaveHairpin({ first_note: smo116277, last_note: smo116277,
       firstNote: smo116277, lastNote: smo116277 });
smo226543.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo226543.setContext(context).setPosition(4).draw();
// modifier from 2-17-0-0 to 2-18-0-0
const smo226544 = new VF.StaveTie({ first_note: smo116277, last_note: smo116294, 
          firstNote: smo116277, lastNote: smo116294, first_indices: [0], last_indices: [0]});
smo226544.setContext(context).draw();
// modifier from 2-21-0-1 to 2-21-0-2
const smo226545 = new VF.StaveTie({ first_note: smo116347, last_note: smo116348, 
          firstNote: smo116347, lastNote: smo116348, first_indices: [0], last_indices: [0]});
smo226545.setContext(context).draw();
// modifier from 3-17-0-0 to 3-18-0-0
const smo226546 = new VF.StaveHairpin({ first_note: smo118651, last_note: smo118651,
       firstNote: smo118651, lastNote: smo118651 });
smo226546.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo226546.setContext(context).setPosition(4).draw();
// modifier from 3-17-0-0 to 3-18-0-0
const smo226547 = new VF.StaveTie({ first_note: smo118651, last_note: smo118668, 
          firstNote: smo118651, lastNote: smo118668, first_indices: [0], last_indices: [0]});
smo226547.setContext(context).draw();
// modifier from 3-21-0-1 to 3-21-0-2
const smo226548 = new VF.StaveTie({ first_note: smo118721, last_note: smo118722, 
          firstNote: smo118721, lastNote: smo118722, first_indices: [0], last_indices: [0]});
smo226548.setContext(context).draw();
// modifier from 4-17-0-0 to 4-18-0-0
const smo226549 = new VF.StaveHairpin({ first_note: smo121002, last_note: smo121002,
       firstNote: smo121002, lastNote: smo121002 });
smo226549.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo226549.setContext(context).setPosition(4).draw();
// modifier from 4-17-0-0 to 4-18-0-0
const smo226550 = new VF.StaveTie({ first_note: smo121002, last_note: smo121019, 
          firstNote: smo121002, lastNote: smo121019, first_indices: [0], last_indices: [0]});
smo226550.setContext(context).draw();
// modifier from 5-17-0-0 to 5-18-0-0
const smo226551 = new VF.StaveHairpin({ first_note: smo123309, last_note: smo123309,
       firstNote: smo123309, lastNote: smo123309 });
smo226551.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo226551.setContext(context).setPosition(4).draw();
// modifier from 5-14-0-2 to 5-14-0-3
const smo226552 = new VF.StaveTie({ first_note: smo123244, last_note: smo123245, 
          firstNote: smo123244, lastNote: smo123245, first_indices: [0], last_indices: [0]});
smo226552.setContext(context).draw();
// modifier from 5-17-0-0 to 5-18-0-0
const smo226553 = new VF.StaveTie({ first_note: smo123309, last_note: smo123326, 
          firstNote: smo123309, lastNote: smo123326, first_indices: [0], last_indices: [0]});
smo226553.setContext(context).draw();
// modifier from 6-17-0-0 to 6-18-0-0
const smo226554 = new VF.StaveHairpin({ first_note: smo125715, last_note: smo125715,
       firstNote: smo125715, lastNote: smo125715 });
smo226554.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo226554.setContext(context).setPosition(4).draw();
// modifier from 6-17-0-0 to 6-18-0-0
const smo226555 = new VF.StaveTie({ first_note: smo125715, last_note: smo125732, 
          firstNote: smo125715, lastNote: smo125732, first_indices: [0], last_indices: [0]});
smo226555.setContext(context).draw();
// modifier from 9-17-0-0 to 9-18-0-0
const smo226556 = new VF.StaveHairpin({ first_note: smo132814, last_note: smo132814,
       firstNote: smo132814, lastNote: smo132814 });
smo226556.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo226556.setContext(context).setPosition(4).draw();
// modifier from 9-14-0-2 to 9-14-0-3
const smo226557 = new VF.StaveTie({ first_note: smo132749, last_note: smo132750, 
          firstNote: smo132749, lastNote: smo132750, first_indices: [0], last_indices: [0]});
smo226557.setContext(context).draw();
// modifier from 9-17-0-0 to 9-18-0-0
const smo226558 = new VF.StaveTie({ first_note: smo132814, last_note: smo132831, 
          firstNote: smo132814, lastNote: smo132831, first_indices: [0], last_indices: [0]});
smo226558.setContext(context).draw();
// modifier from 10-17-0-0 to 10-18-0-0
const smo226559 = new VF.StaveHairpin({ first_note: smo135187, last_note: smo135187,
       firstNote: smo135187, lastNote: smo135187 });
smo226559.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo226559.setContext(context).setPosition(4).draw();
// modifier from 10-14-0-2 to 10-14-0-3
const smo226560 = new VF.StaveTie({ first_note: smo135122, last_note: smo135123, 
          firstNote: smo135122, lastNote: smo135123, first_indices: [0], last_indices: [0]});
smo226560.setContext(context).draw();
// modifier from 10-17-0-0 to 10-18-0-0
const smo226561 = new VF.StaveTie({ first_note: smo135187, last_note: smo135204, 
          firstNote: smo135187, lastNote: smo135204, first_indices: [0], last_indices: [0]});
smo226561.setContext(context).draw();
// modifier from 11-17-0-0 to 11-18-0-0
const smo226562 = new VF.StaveHairpin({ first_note: smo137533, last_note: smo137533,
       firstNote: smo137533, lastNote: smo137533 });
smo226562.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo226562.setContext(context).setPosition(4).draw();
// modifier from 11-14-0-2 to 11-14-0-3
const smo226563 = new VF.StaveTie({ first_note: smo137468, last_note: smo137469, 
          firstNote: smo137468, lastNote: smo137469, first_indices: [0], last_indices: [0]});
smo226563.setContext(context).draw();
// modifier from 11-17-0-0 to 11-18-0-0
const smo226564 = new VF.StaveTie({ first_note: smo137533, last_note: smo137550, 
          firstNote: smo137533, lastNote: smo137550, first_indices: [0], last_indices: [0]});
smo226564.setContext(context).draw();
// modifier from 12-17-0-0 to 12-18-0-0
const smo226565 = new VF.StaveHairpin({ first_note: smo139861, last_note: smo139861,
       firstNote: smo139861, lastNote: smo139861 });
smo226565.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo226565.setContext(context).setPosition(4).draw();
// modifier from 12-17-0-0 to 12-18-0-0
const smo226566 = new VF.StaveTie({ first_note: smo139861, last_note: smo139878, 
          firstNote: smo139861, lastNote: smo139878, first_indices: [0], last_indices: [0]});
smo226566.setContext(context).draw();
// modifier from 13-14-0-2 to 13-14-0-3
const smo226567 = new VF.StaveTie({ first_note: smo142130, last_note: smo142131, 
          firstNote: smo142130, lastNote: smo142131, first_indices: [0], last_indices: [0]});
smo226567.setContext(context).draw();
// modifier from 14-21-0-3 to 14-21-0-4
const smo226568 = new VF.StaveTie({ first_note: smo144692, last_note: smo144693, 
          firstNote: smo144692, lastNote: smo144693, first_indices: [0], last_indices: [0]});
smo226568.setContext(context).draw();
}
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
const fmtsmo11486713 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo114867v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114867v0ar = [];
const smo114843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo114843.setAttribute('id', 'smo114843');
smo114867v0ar.push(smo114843);
const smo114844 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo114844.setAttribute('id', 'smo114844');
smo114867v0ar.push(smo114844);
const smo114845 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo114845.setAttribute('id', 'smo114845');
smo114867v0ar.push(smo114845);
const smo114846 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo114846.setAttribute('id', 'smo114846');
smo114867v0ar.push(smo114846);
const smo114847 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo114847.setAttribute('id', 'smo114847');
smo114867v0ar.push(smo114847);
const smo114848 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo114848.setAttribute('id', 'smo114848');
smo114867v0ar.push(smo114848);
const smo114849 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo114849.setAttribute('id', 'smo114849');
smo114867v0ar.push(smo114849);
const smo114850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo114850.setAttribute('id', 'smo114850');
smo114867v0ar.push(smo114850);
const smo114851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo114851.setAttribute('id', 'smo114851');
smo114867v0ar.push(smo114851);
smo114867v0.addTickables(smo114867v0ar)
fmtsmo11486713.joinVoices([smo114867v0]);
const fmtsmo11729413 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo117294v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo117294v0ar = [];
const smo117270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo117270.setAttribute('id', 'smo117270');
smo117294v0ar.push(smo117270);
const smo117271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo117271.setAttribute('id', 'smo117271');
smo117294v0ar.push(smo117271);
const smo117272 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo117272.setAttribute('id', 'smo117272');
smo117294v0ar.push(smo117272);
const smo117273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["c#/5/n"]}'))
smo117273.setAttribute('id', 'smo117273');
smo117294v0ar.push(smo117273);
const smo117274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo117274.setAttribute('id', 'smo117274');
smo117294v0ar.push(smo117274);
const smo117275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo117275.setAttribute('id', 'smo117275');
smo117294v0ar.push(smo117275);
const smo117276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo117276.setAttribute('id', 'smo117276');
smo117294v0ar.push(smo117276);
const smo117277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo117277.setAttribute('id', 'smo117277');
smo117294v0ar.push(smo117277);
const smo117278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo117278.setAttribute('id', 'smo117278');
smo117294v0ar.push(smo117278);
smo117294v0.addTickables(smo117294v0ar)
fmtsmo11729413.joinVoices([smo117294v0]);
const fmtsmo11971213 = new VF.Formatter();
//
// voices and notes for stave 2 13
const smo119712v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo119712v0ar = [];
const smo119688 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo119688.setAttribute('id', 'smo119688');
smo119712v0ar.push(smo119688);
const smo119689 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo119689.setAttribute('id', 'smo119689');
smo119712v0ar.push(smo119689);
const smo119690 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo119690.setAttribute('id', 'smo119690');
smo119712v0ar.push(smo119690);
const smo119691 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo119691.setAttribute('id', 'smo119691');
smo119712v0ar.push(smo119691);
const smo119692 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo119692.setAttribute('id', 'smo119692');
smo119712v0ar.push(smo119692);
const smo119693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo119693.setAttribute('id', 'smo119693');
smo119712v0ar.push(smo119693);
const smo119694 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo119694.setAttribute('id', 'smo119694');
smo119712v0ar.push(smo119694);
const smo119695 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo119695.setAttribute('id', 'smo119695');
smo119712v0ar.push(smo119695);
const smo119696 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo119696.setAttribute('id', 'smo119696');
smo119712v0ar.push(smo119696);
smo119712v0.addTickables(smo119712v0ar)
fmtsmo11971213.joinVoices([smo119712v0]);
const fmtsmo12208613 = new VF.Formatter();
//
// voices and notes for stave 3 13
const smo122086v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo122086v0ar = [];
const smo122062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo122062.setAttribute('id', 'smo122062');
smo122086v0ar.push(smo122062);
const smo122063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo122063.setAttribute('id', 'smo122063');
smo122086v0ar.push(smo122063);
const smo122064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo122064.setAttribute('id', 'smo122064');
smo122086v0ar.push(smo122064);
const smo122065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo122065.setAttribute('id', 'smo122065');
smo122086v0ar.push(smo122065);
const smo122066 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo122066.setAttribute('id', 'smo122066');
smo122086v0ar.push(smo122066);
const smo122067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo122067.setAttribute('id', 'smo122067');
smo122086v0ar.push(smo122067);
const smo122068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo122068.setAttribute('id', 'smo122068');
smo122086v0ar.push(smo122068);
const smo122069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo122069.setAttribute('id', 'smo122069');
smo122086v0ar.push(smo122069);
const smo122070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo122070.setAttribute('id', 'smo122070');
smo122086v0ar.push(smo122070);
smo122086v0.addTickables(smo122086v0ar)
fmtsmo12208613.joinVoices([smo122086v0]);
const fmtsmo12444613 = new VF.Formatter();
//
// voices and notes for stave 4 13
const smo124446v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo124446v0ar = [];
const smo124427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo124427.setAttribute('id', 'smo124427');
const  smo229767 = new VF.Articulation('a.').setPosition(3);
smo124427.addModifier(smo229767, 0);
smo124446v0ar.push(smo124427);
const smo124429 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo124429.setAttribute('id', 'smo124429');
smo124446v0ar.push(smo124429);
const smo124430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo124430.setAttribute('id', 'smo124430');
smo124446v0ar.push(smo124430);
smo124446v0.addTickables(smo124446v0ar)
fmtsmo12444613.joinVoices([smo124446v0]);
const fmtsmo12674613 = new VF.Formatter();
//
// voices and notes for stave 5 13
const smo126746v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo126746v0ar = [];
const smo126723 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo126723.setAttribute('id', 'smo126723');
smo126746v0ar.push(smo126723);
const smo126724 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo126724.setAttribute('id', 'smo126724');
smo126746v0ar.push(smo126724);
const smo126725 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo126725.setAttribute('id', 'smo126725');
smo126746v0ar.push(smo126725);
const smo126726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo126726.setAttribute('id', 'smo126726');
smo126746v0ar.push(smo126726);
const smo126727 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo126727.setAttribute('id', 'smo126727');
smo126746v0ar.push(smo126727);
const smo126728 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo126728.setAttribute('id', 'smo126728');
smo126746v0ar.push(smo126728);
const smo126729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo126729.setAttribute('id', 'smo126729');
smo126746v0ar.push(smo126729);
const smo126730 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo126730.setAttribute('id', 'smo126730');
smo126746v0ar.push(smo126730);
smo126746v0.addTickables(smo126746v0ar)
fmtsmo12674613.joinVoices([smo126746v0]);
const fmtsmo12915213 = new VF.Formatter();
//
// voices and notes for stave 6 13
const smo129152v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo129152v0ar = [];
const smo129129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo129129.setAttribute('id', 'smo129129');
smo129152v0ar.push(smo129129);
const smo129130 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo129130.setAttribute('id', 'smo129130');
smo129152v0ar.push(smo129130);
const smo129131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo129131.setAttribute('id', 'smo129131');
smo129152v0ar.push(smo129131);
const smo129132 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo129132.setAttribute('id', 'smo129132');
smo129152v0ar.push(smo129132);
const smo129133 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo129133.setAttribute('id', 'smo129133');
smo129152v0ar.push(smo129133);
const smo129134 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo129134.setAttribute('id', 'smo129134');
smo129152v0ar.push(smo129134);
const smo129135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo129135.setAttribute('id', 'smo129135');
smo129152v0ar.push(smo129135);
const smo129136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo129136.setAttribute('id', 'smo129136');
smo129152v0ar.push(smo129136);
smo129152v0.addTickables(smo129152v0ar)
fmtsmo12915213.joinVoices([smo129152v0]);
const fmtsmo13149513 = new VF.Formatter();
//
// voices and notes for stave 7 13
const smo131495v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo131495v0ar = [];
const smo131479 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo131479.setAttribute('id', 'smo131479');
smo131495v0ar.push(smo131479);
smo131495v0.addTickables(smo131495v0ar)
fmtsmo13149513.joinVoices([smo131495v0]);
const fmtsmo13384513 = new VF.Formatter();
//
// voices and notes for stave 8 13
const smo133845v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo133845v0ar = [];
const smo133829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo133829.setAttribute('id', 'smo133829');
smo133845v0ar.push(smo133829);
smo133845v0.addTickables(smo133845v0ar)
fmtsmo13384513.joinVoices([smo133845v0]);
const fmtsmo13625113 = new VF.Formatter();
//
// voices and notes for stave 9 13
const smo136251v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo136251v0ar = [];
const smo136228 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo136228.setAttribute('id', 'smo136228');
smo136251v0ar.push(smo136228);
const smo136229 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo136229.setAttribute('id', 'smo136229');
smo136251v0ar.push(smo136229);
const smo136230 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo136230.setAttribute('id', 'smo136230');
smo136251v0ar.push(smo136230);
const smo136231 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo136231.setAttribute('id', 'smo136231');
smo136251v0ar.push(smo136231);
const smo136232 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo136232.setAttribute('id', 'smo136232');
smo136251v0ar.push(smo136232);
const smo136233 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo136233.setAttribute('id', 'smo136233');
smo136251v0ar.push(smo136233);
const smo136234 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo136234.setAttribute('id', 'smo136234');
smo136251v0ar.push(smo136234);
const smo136235 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo136235.setAttribute('id', 'smo136235');
smo136251v0ar.push(smo136235);
smo136251v0.addTickables(smo136251v0ar)
fmtsmo13625113.joinVoices([smo136251v0]);
const fmtsmo13862413 = new VF.Formatter();
//
// voices and notes for stave 10 13
const smo138624v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo138624v0ar = [];
const smo138601 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo138601.setAttribute('id', 'smo138601');
smo138624v0ar.push(smo138601);
const smo138602 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo138602.setAttribute('id', 'smo138602');
smo138624v0ar.push(smo138602);
const smo138603 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo138603.setAttribute('id', 'smo138603');
smo138624v0ar.push(smo138603);
const smo138604 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo138604.setAttribute('id', 'smo138604');
smo138624v0ar.push(smo138604);
const smo138605 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo138605.setAttribute('id', 'smo138605');
smo138624v0ar.push(smo138605);
const smo138606 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo138606.setAttribute('id', 'smo138606');
smo138624v0ar.push(smo138606);
const smo138607 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo138607.setAttribute('id', 'smo138607');
smo138624v0ar.push(smo138607);
const smo138608 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo138608.setAttribute('id', 'smo138608');
smo138624v0ar.push(smo138608);
smo138624v0.addTickables(smo138624v0ar)
fmtsmo13862413.joinVoices([smo138624v0]);
const fmtsmo14097013 = new VF.Formatter();
//
// voices and notes for stave 11 13
const smo140970v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo140970v0ar = [];
const smo140947 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo140947.setAttribute('id', 'smo140947');
smo140970v0ar.push(smo140947);
const smo140948 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo140948.setAttribute('id', 'smo140948');
smo140970v0ar.push(smo140948);
const smo140949 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo140949.setAttribute('id', 'smo140949');
smo140970v0ar.push(smo140949);
const smo140950 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo140950.setAttribute('id', 'smo140950');
smo140970v0ar.push(smo140950);
const smo140951 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo140951.setAttribute('id', 'smo140951');
smo140970v0ar.push(smo140951);
const smo140952 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo140952.setAttribute('id', 'smo140952');
smo140970v0ar.push(smo140952);
const smo140953 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo140953.setAttribute('id', 'smo140953');
smo140970v0ar.push(smo140953);
const smo140954 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo140954.setAttribute('id', 'smo140954');
smo140970v0ar.push(smo140954);
smo140970v0.addTickables(smo140970v0ar)
fmtsmo14097013.joinVoices([smo140970v0]);
const fmtsmo14330513 = new VF.Formatter();
//
// voices and notes for stave 12 13
const smo143305v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo143305v0ar = [];
const smo143286 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo143286.setAttribute('id', 'smo143286');
const  smo229768 = new VF.Articulation('a.').setPosition(3);
smo143286.addModifier(smo229768, 0);
smo143305v0ar.push(smo143286);
const smo143288 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo143288.setAttribute('id', 'smo143288');
smo143305v0ar.push(smo143288);
const smo143289 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n"]}'))
smo143289.setAttribute('id', 'smo143289');
smo143305v0ar.push(smo143289);
smo143305v0.addTickables(smo143305v0ar)
fmtsmo14330513.joinVoices([smo143305v0]);
const fmtsmo14563213 = new VF.Formatter();
//
// voices and notes for stave 13 13
const smo145632v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo145632v0ar = [];
const smo145609 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo145609.setAttribute('id', 'smo145609');
smo145632v0ar.push(smo145609);
const smo145610 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo145610.setAttribute('id', 'smo145610');
smo145632v0ar.push(smo145610);
const smo145611 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo145611.setAttribute('id', 'smo145611');
smo145632v0ar.push(smo145611);
const smo145612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo145612.setAttribute('id', 'smo145612');
smo145632v0ar.push(smo145612);
const smo145613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo145613.setAttribute('id', 'smo145613');
smo145632v0ar.push(smo145613);
const smo145614 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo145614.setAttribute('id', 'smo145614');
smo145632v0ar.push(smo145614);
const smo145615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo145615.setAttribute('id', 'smo145615');
smo145632v0ar.push(smo145615);
const smo145616 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo145616.setAttribute('id', 'smo145616');
smo145632v0ar.push(smo145616);
smo145632v0.addTickables(smo145632v0ar)
fmtsmo14563213.joinVoices([smo145632v0]);
const fmtsmo14807413 = new VF.Formatter();
//
// voices and notes for stave 14 13
const smo148074v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo148074v0ar = [];
const smo148058 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo148058.setAttribute('id', 'smo148058');
smo148074v0ar.push(smo148058);
smo148074v0.addTickables(smo148074v0ar)
fmtsmo14807413.joinVoices([smo148074v0]);
const fmtsmo15058313 = new VF.Formatter();
//
// voices and notes for stave 15 13
const smo150583v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo150583v0ar = [];
const smo150564 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo150564.setAttribute('id', 'smo150564');
const  smo229769 = new VF.Articulation('a.').setPosition(3);
smo150564.addModifier(smo229769, 0);
smo150583v0ar.push(smo150564);
const smo150566 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo150566.setAttribute('id', 'smo150566');
smo150583v0ar.push(smo150566);
const smo150567 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo150567.setAttribute('id', 'smo150567');
smo150583v0ar.push(smo150567);
smo150583v0.addTickables(smo150583v0ar)
fmtsmo15058313.joinVoices([smo150583v0]);
const fmtsmo15302713 = new VF.Formatter();
//
// voices and notes for stave 16 13
const smo153027v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo153027v0ar = [];
const smo153001 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153001.setAttribute('id', 'smo153001');
const smo1530010acc = new VF.Accidental('n');
smo153001.addModifier(smo1530010acc, 0);
smo153027v0ar.push(smo153001);
const smo153002 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153002.setAttribute('id', 'smo153002');
smo153027v0ar.push(smo153002);
const smo153003 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153003.setAttribute('id', 'smo153003');
smo153027v0ar.push(smo153003);
const smo153004 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153004.setAttribute('id', 'smo153004');
smo153027v0ar.push(smo153004);
const smo153005 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153005.setAttribute('id', 'smo153005');
smo153027v0ar.push(smo153005);
const smo153006 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153006.setAttribute('id', 'smo153006');
smo153027v0ar.push(smo153006);
const smo153007 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo153007.setAttribute('id', 'smo153007');
smo153027v0ar.push(smo153007);
const smo153008 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153008.setAttribute('id', 'smo153008');
smo153027v0ar.push(smo153008);
const smo153009 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo153009.setAttribute('id', 'smo153009');
smo153027v0ar.push(smo153009);
const smo153010 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153010.setAttribute('id', 'smo153010');
smo153027v0ar.push(smo153010);
smo153027v0.addTickables(smo153027v0ar)
fmtsmo15302713.joinVoices([smo153027v0]);
// create beam groups and tuplets for format grp smo155376 before formatting
const dirsmo221544 = smo114843.getStemDirection();
smo114843.setStemDirection(dirsmo221544);
smo114844.setStemDirection(dirsmo221544);
smo114845.setStemDirection(dirsmo221544);
const smo221544 = new VF.Beam([smo114843,smo114844,smo114845]);
const dirsmo221545 = smo114846.getStemDirection();
smo114846.setStemDirection(dirsmo221545);
smo114847.setStemDirection(dirsmo221545);
const smo221545 = new VF.Beam([smo114846,smo114847]);
const dirsmo221546 = smo114849.getStemDirection();
smo114849.setStemDirection(dirsmo221546);
smo114850.setStemDirection(dirsmo221546);
const smo221546 = new VF.Beam([smo114849,smo114850]);
const dirsmo221549 = smo117270.getStemDirection();
smo117270.setStemDirection(dirsmo221549);
smo117271.setStemDirection(dirsmo221549);
smo117272.setStemDirection(dirsmo221549);
const smo221549 = new VF.Beam([smo117270,smo117271,smo117272]);
const dirsmo221550 = smo117273.getStemDirection();
smo117273.setStemDirection(dirsmo221550);
smo117274.setStemDirection(dirsmo221550);
const smo221550 = new VF.Beam([smo117273,smo117274]);
const dirsmo221551 = smo117276.getStemDirection();
smo117276.setStemDirection(dirsmo221551);
smo117277.setStemDirection(dirsmo221551);
const smo221551 = new VF.Beam([smo117276,smo117277]);
const dirsmo221554 = smo119688.getStemDirection();
smo119688.setStemDirection(dirsmo221554);
smo119689.setStemDirection(dirsmo221554);
smo119690.setStemDirection(dirsmo221554);
const smo221554 = new VF.Beam([smo119688,smo119689,smo119690]);
const dirsmo221555 = smo119691.getStemDirection();
smo119691.setStemDirection(dirsmo221555);
smo119692.setStemDirection(dirsmo221555);
const smo221555 = new VF.Beam([smo119691,smo119692]);
const dirsmo221556 = smo119694.getStemDirection();
smo119694.setStemDirection(dirsmo221556);
smo119695.setStemDirection(dirsmo221556);
const smo221556 = new VF.Beam([smo119694,smo119695]);
const dirsmo221559 = smo122062.getStemDirection();
smo122062.setStemDirection(dirsmo221559);
smo122063.setStemDirection(dirsmo221559);
smo122064.setStemDirection(dirsmo221559);
const smo221559 = new VF.Beam([smo122062,smo122063,smo122064]);
const dirsmo221560 = smo122065.getStemDirection();
smo122065.setStemDirection(dirsmo221560);
smo122066.setStemDirection(dirsmo221560);
const smo221560 = new VF.Beam([smo122065,smo122066]);
const dirsmo221561 = smo122068.getStemDirection();
smo122068.setStemDirection(dirsmo221561);
smo122069.setStemDirection(dirsmo221561);
const smo221561 = new VF.Beam([smo122068,smo122069]);
 
// formatting measures in staff group smo155376
fmtsmo11486713.format([smo114867v0,smo117294v0,smo119712v0,smo122086v0,smo124446v0], 352);
const stavesmo114867 = new VF.Stave(138, 183.2253035909339, 440);
stavesmo114867.setAttribute('id', 'stavesmo114867');
stavesmo114867.setBegBarType(1);
stavesmo114867.addClef('treble');
const keysmo114867 = new VF.KeySignature('D');
keysmo114867.addToStave(stavesmo114867);
stavesmo114867.setContext(context);
stavesmo114867.draw();
smo114867v0.draw(context, stavesmo114867);
smo221544.setContext(context);
smo221544.draw();
smo221545.setContext(context);
smo221545.draw();
smo221546.setContext(context);
smo221546.draw();
const stavesmo117294 = new VF.Stave(138, 288.2253035909339, 440);
stavesmo117294.setAttribute('id', 'stavesmo117294');
stavesmo117294.setBegBarType(1);
stavesmo117294.addClef('treble');
const keysmo117294 = new VF.KeySignature('D');
keysmo117294.addToStave(stavesmo117294);
stavesmo117294.setContext(context);
stavesmo117294.draw();
smo117294v0.draw(context, stavesmo117294);
smo221549.setContext(context);
smo221549.draw();
smo221550.setContext(context);
smo221550.draw();
smo221551.setContext(context);
smo221551.draw();
const stavesmo119712 = new VF.Stave(138, 379.2253035909339, 440);
stavesmo119712.setAttribute('id', 'stavesmo119712');
stavesmo119712.setBegBarType(1);
stavesmo119712.addClef('treble');
const keysmo119712 = new VF.KeySignature('G');
keysmo119712.addToStave(stavesmo119712);
stavesmo119712.setContext(context);
stavesmo119712.draw();
smo119712v0.draw(context, stavesmo119712);
smo221554.setContext(context);
smo221554.draw();
smo221555.setContext(context);
smo221555.draw();
smo221556.setContext(context);
smo221556.draw();
const stavesmo122086 = new VF.Stave(138, 479.2253035909339, 440);
stavesmo122086.setAttribute('id', 'stavesmo122086');
stavesmo122086.setBegBarType(1);
stavesmo122086.addClef('treble');
const keysmo122086 = new VF.KeySignature('G');
keysmo122086.addToStave(stavesmo122086);
stavesmo122086.setContext(context);
stavesmo122086.draw();
smo122086v0.draw(context, stavesmo122086);
smo221559.setContext(context);
smo221559.draw();
smo221560.setContext(context);
smo221560.draw();
smo221561.setContext(context);
smo221561.draw();
const stavesmo124446 = new VF.Stave(138, 549.2253035909339, 440);
stavesmo124446.setAttribute('id', 'stavesmo124446');
stavesmo124446.setBegBarType(1);
stavesmo124446.addClef('treble');
const keysmo124446 = new VF.KeySignature('D');
keysmo124446.addToStave(stavesmo124446);
stavesmo124446.setContext(context);
stavesmo124446.draw();
smo124446v0.draw(context, stavesmo124446);
// create beam groups and tuplets for format grp smo155378 before formatting
const dirsmo221566 = smo126724.getStemDirection();
smo126724.setStemDirection(dirsmo221566);
smo126725.setStemDirection(dirsmo221566);
const smo221566 = new VF.Beam([smo126724,smo126725]);
const dirsmo221567 = smo126727.getStemDirection();
smo126727.setStemDirection(dirsmo221567);
smo126728.setStemDirection(dirsmo221567);
smo126729.setStemDirection(dirsmo221567);
smo126730.setStemDirection(dirsmo221567);
const smo221567 = new VF.Beam([smo126727,smo126728,smo126729,smo126730]);
const dirsmo221570 = smo129130.getStemDirection();
smo129130.setStemDirection(dirsmo221570);
smo129131.setStemDirection(dirsmo221570);
const smo221570 = new VF.Beam([smo129130,smo129131]);
const dirsmo221571 = smo129133.getStemDirection();
smo129133.setStemDirection(dirsmo221571);
smo129134.setStemDirection(dirsmo221571);
smo129135.setStemDirection(dirsmo221571);
smo129136.setStemDirection(dirsmo221571);
const smo221571 = new VF.Beam([smo129133,smo129134,smo129135,smo129136]);
 
// formatting measures in staff group smo155378
fmtsmo12674613.format([smo126746v0,smo129152v0,smo131495v0,smo133845v0], 364);
const stavesmo126746 = new VF.Stave(138, 630.2253035909339, 440);
stavesmo126746.setAttribute('id', 'stavesmo126746');
stavesmo126746.setBegBarType(1);
stavesmo126746.addClef('treble');
const keysmo126746 = new VF.KeySignature('G');
keysmo126746.addToStave(stavesmo126746);
stavesmo126746.setContext(context);
stavesmo126746.draw();
smo126746v0.draw(context, stavesmo126746);
smo221566.setContext(context);
smo221566.draw();
smo221567.setContext(context);
smo221567.draw();
const stavesmo129152 = new VF.Stave(138, 700.2253035909339, 440);
stavesmo129152.setAttribute('id', 'stavesmo129152');
stavesmo129152.setBegBarType(1);
stavesmo129152.addClef('treble');
const keysmo129152 = new VF.KeySignature('G');
keysmo129152.addToStave(stavesmo129152);
stavesmo129152.setContext(context);
stavesmo129152.draw();
smo129152v0.draw(context, stavesmo129152);
smo221570.setContext(context);
smo221570.draw();
smo221571.setContext(context);
smo221571.draw();
const stavesmo131495 = new VF.Stave(138, 761.2253035909339, 440);
stavesmo131495.setAttribute('id', 'stavesmo131495');
stavesmo131495.setBegBarType(1);
stavesmo131495.addClef('treble');
const keysmo131495 = new VF.KeySignature('G');
keysmo131495.addToStave(stavesmo131495);
stavesmo131495.setContext(context);
stavesmo131495.draw();
smo131495v0.draw(context, stavesmo131495);
const stavesmo133845 = new VF.Stave(138, 831.2253035909339, 440);
stavesmo133845.setAttribute('id', 'stavesmo133845');
stavesmo133845.setBegBarType(1);
stavesmo133845.addClef('treble');
const keysmo133845 = new VF.KeySignature('G');
keysmo133845.addToStave(stavesmo133845);
stavesmo133845.setContext(context);
stavesmo133845.draw();
smo133845v0.draw(context, stavesmo133845);
// create beam groups and tuplets for format grp smo155380 before formatting
const dirsmo221578 = smo136229.getStemDirection();
smo136229.setStemDirection(dirsmo221578);
smo136230.setStemDirection(dirsmo221578);
const smo221578 = new VF.Beam([smo136229,smo136230]);
const dirsmo221579 = smo136232.getStemDirection();
smo136232.setStemDirection(dirsmo221579);
smo136233.setStemDirection(dirsmo221579);
smo136234.setStemDirection(dirsmo221579);
smo136235.setStemDirection(dirsmo221579);
const smo221579 = new VF.Beam([smo136232,smo136233,smo136234,smo136235]);
const dirsmo221582 = smo138602.getStemDirection();
smo138602.setStemDirection(dirsmo221582);
smo138603.setStemDirection(dirsmo221582);
const smo221582 = new VF.Beam([smo138602,smo138603]);
const dirsmo221583 = smo138605.getStemDirection();
smo138605.setStemDirection(dirsmo221583);
smo138606.setStemDirection(dirsmo221583);
smo138607.setStemDirection(dirsmo221583);
smo138608.setStemDirection(dirsmo221583);
const smo221583 = new VF.Beam([smo138605,smo138606,smo138607,smo138608]);
const dirsmo221586 = smo140948.getStemDirection();
smo140948.setStemDirection(dirsmo221586);
smo140949.setStemDirection(dirsmo221586);
const smo221586 = new VF.Beam([smo140948,smo140949]);
const dirsmo221587 = smo140951.getStemDirection();
smo140951.setStemDirection(dirsmo221587);
smo140952.setStemDirection(dirsmo221587);
smo140953.setStemDirection(dirsmo221587);
smo140954.setStemDirection(dirsmo221587);
const smo221587 = new VF.Beam([smo140951,smo140952,smo140953,smo140954]);
 
// formatting measures in staff group smo155380
fmtsmo13625113.format([smo136251v0,smo138624v0,smo140970v0,smo143305v0], 364);
const stavesmo136251 = new VF.Stave(138, 936.2253035909339, 440);
stavesmo136251.setAttribute('id', 'stavesmo136251');
stavesmo136251.setBegBarType(1);
stavesmo136251.addClef('bass');
const keysmo136251 = new VF.KeySignature('F');
keysmo136251.addToStave(stavesmo136251);
stavesmo136251.setContext(context);
stavesmo136251.draw();
smo136251v0.draw(context, stavesmo136251);
smo221578.setContext(context);
smo221578.draw();
smo221579.setContext(context);
smo221579.draw();
const stavesmo138624 = new VF.Stave(138, 1023.2253035909339, 440);
stavesmo138624.setAttribute('id', 'stavesmo138624');
stavesmo138624.setBegBarType(1);
stavesmo138624.addClef('bass');
const keysmo138624 = new VF.KeySignature('F');
keysmo138624.addToStave(stavesmo138624);
stavesmo138624.setContext(context);
stavesmo138624.draw();
smo138624v0.draw(context, stavesmo138624);
smo221582.setContext(context);
smo221582.draw();
smo221583.setContext(context);
smo221583.draw();
const stavesmo140970 = new VF.Stave(138, 1128.225303590934, 440);
stavesmo140970.setAttribute('id', 'stavesmo140970');
stavesmo140970.setBegBarType(1);
stavesmo140970.addClef('bass');
const keysmo140970 = new VF.KeySignature('F');
keysmo140970.addToStave(stavesmo140970);
stavesmo140970.setContext(context);
stavesmo140970.draw();
smo140970v0.draw(context, stavesmo140970);
smo221586.setContext(context);
smo221586.draw();
smo221587.setContext(context);
smo221587.draw();
const stavesmo143305 = new VF.Stave(138, 1213.225303590934, 440);
stavesmo143305.setAttribute('id', 'stavesmo143305');
stavesmo143305.setBegBarType(1);
stavesmo143305.addClef('bass');
const keysmo143305 = new VF.KeySignature('F');
keysmo143305.addToStave(stavesmo143305);
stavesmo143305.setContext(context);
stavesmo143305.draw();
smo143305v0.draw(context, stavesmo143305);
// create beam groups and tuplets for format grp smo147831 before formatting
const dirsmo221592 = smo145610.getStemDirection();
smo145610.setStemDirection(dirsmo221592);
smo145611.setStemDirection(dirsmo221592);
const smo221592 = new VF.Beam([smo145610,smo145611]);
const dirsmo221593 = smo145613.getStemDirection();
smo145613.setStemDirection(dirsmo221593);
smo145614.setStemDirection(dirsmo221593);
smo145615.setStemDirection(dirsmo221593);
smo145616.setStemDirection(dirsmo221593);
const smo221593 = new VF.Beam([smo145613,smo145614,smo145615,smo145616]);
 
// formatting measures in staff group smo147831
fmtsmo14563213.format([smo145632v0], 365);
const stavesmo145632 = new VF.Stave(138, 1290.225303590934, 440);
stavesmo145632.setAttribute('id', 'stavesmo145632');
stavesmo145632.setBegBarType(1);
stavesmo145632.addClef('treble');
const keysmo145632 = new VF.KeySignature('F');
keysmo145632.addToStave(stavesmo145632);
stavesmo145632.setContext(context);
stavesmo145632.draw();
smo145632v0.draw(context, stavesmo145632);
smo221592.setContext(context);
smo221592.draw();
smo221593.setContext(context);
smo221593.draw();
// create beam groups and tuplets for format grp smo150299 before formatting
 
// formatting measures in staff group smo150299
fmtsmo14807413.format([smo148074v0], 365);
const stavesmo148074 = new VF.Stave(138, 1373.225303590934, 440);
stavesmo148074.setAttribute('id', 'stavesmo148074');
stavesmo148074.setBegBarType(1);
stavesmo148074.addClef('treble');
const keysmo148074 = new VF.KeySignature('F');
keysmo148074.addToStave(stavesmo148074);
stavesmo148074.setContext(context);
stavesmo148074.draw();
smo148074v0.draw(context, stavesmo148074);
// create beam groups and tuplets for format grp smo152657 before formatting
 
// formatting measures in staff group smo152657
fmtsmo15058313.format([smo150583v0], 364);
const stavesmo150583 = new VF.Stave(138, 1478.225303590934, 440);
stavesmo150583.setAttribute('id', 'stavesmo150583');
stavesmo150583.setBegBarType(1);
stavesmo150583.addClef('bass');
const keysmo150583 = new VF.KeySignature('F');
keysmo150583.addToStave(stavesmo150583);
stavesmo150583.setContext(context);
stavesmo150583.draw();
smo150583v0.draw(context, stavesmo150583);
// create beam groups and tuplets for format grp smo155370 before formatting
const dirsmo221600 = smo153001.getStemDirection();
smo153001.setStemDirection(dirsmo221600);
smo153002.setStemDirection(dirsmo221600);
smo153003.setStemDirection(dirsmo221600);
smo153004.setStemDirection(dirsmo221600);
const smo221600 = new VF.Beam([smo153001,smo153002,smo153003,smo153004]);
const dirsmo221601 = smo153005.getStemDirection();
smo153005.setStemDirection(dirsmo221601);
smo153006.setStemDirection(dirsmo221601);
const smo221601 = new VF.Beam([smo153005,smo153006]);
const smo153011 = new VF.Tuplet([smo153002,smo153003,smo153004], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo155370
fmtsmo15302713.format([smo153027v0], 373);
const stavesmo153027 = new VF.Stave(138, 1555.225303590934, 440);
stavesmo153027.setAttribute('id', 'stavesmo153027');
stavesmo153027.setBegBarType(1);
stavesmo153027.addClef('percussion');
const keysmo153027 = new VF.KeySignature('F');
keysmo153027.addToStave(stavesmo153027);
stavesmo153027.setContext(context);
stavesmo153027.draw();
smo153027v0.draw(context, stavesmo153027);
smo221600.setContext(context);
smo221600.draw();
smo221601.setContext(context);
smo221601.draw();
smo153011.setContext(context).draw();
const leftsmo155370stavesmo11486716 = new VF.StaveConnector(stavesmo114867, stavesmo124446).setType(3);
leftsmo155370stavesmo11486716.setContext(context).draw();
const leftsmo155370stavesmo12674616 = new VF.StaveConnector(stavesmo126746, stavesmo133845).setType(3);
leftsmo155370stavesmo12674616.setContext(context).draw();
const leftsmo155370stavesmo13625116 = new VF.StaveConnector(stavesmo136251, stavesmo143305).setType(3);
leftsmo155370stavesmo13625116.setContext(context).draw();
const fmtsmo11489014 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo114890v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114890v0ar = [];
const smo114868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo114868.setAttribute('id', 'smo114868');
smo114890v0ar.push(smo114868);
const smo114869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo114869.setAttribute('id', 'smo114869');
const  smo229804 = new VF.Articulation('a.').setPosition(3);
smo114869.addModifier(smo229804, 0);
smo114890v0ar.push(smo114869);
const smo114871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo114871.setAttribute('id', 'smo114871');
const  smo229805 = new VF.Articulation('a.').setPosition(3);
smo114871.addModifier(smo229805, 0);
smo114890v0ar.push(smo114871);
const smo114873 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo114873.setAttribute('id', 'smo114873');
const  smo229806 = new VF.Articulation('a.').setPosition(3);
smo114873.addModifier(smo229806, 0);
smo114890v0ar.push(smo114873);
smo114890v0.addTickables(smo114890v0ar)
fmtsmo11489014.joinVoices([smo114890v0]);
const fmtsmo11731714 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo117317v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo117317v0ar = [];
const smo117295 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo117295.setAttribute('id', 'smo117295');
smo117317v0ar.push(smo117295);
const smo117296 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo117296.setAttribute('id', 'smo117296');
const  smo229807 = new VF.Articulation('a.').setPosition(3);
smo117296.addModifier(smo229807, 0);
smo117317v0ar.push(smo117296);
const smo117298 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo117298.setAttribute('id', 'smo117298');
const  smo229808 = new VF.Articulation('a.').setPosition(3);
smo117298.addModifier(smo229808, 0);
smo117317v0ar.push(smo117298);
const smo117300 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo117300.setAttribute('id', 'smo117300');
const  smo229809 = new VF.Articulation('a.').setPosition(3);
smo117300.addModifier(smo229809, 0);
smo117317v0ar.push(smo117300);
smo117317v0.addTickables(smo117317v0ar)
fmtsmo11731714.joinVoices([smo117317v0]);
const fmtsmo11973514 = new VF.Formatter();
//
// voices and notes for stave 2 14
const smo119735v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo119735v0ar = [];
const smo119713 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo119713.setAttribute('id', 'smo119713');
smo119735v0ar.push(smo119713);
const smo119714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo119714.setAttribute('id', 'smo119714');
const  smo229810 = new VF.Articulation('a.').setPosition(3);
smo119714.addModifier(smo229810, 0);
smo119735v0ar.push(smo119714);
const smo119716 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo119716.setAttribute('id', 'smo119716');
const  smo229811 = new VF.Articulation('a.').setPosition(3);
smo119716.addModifier(smo229811, 0);
smo119735v0ar.push(smo119716);
const smo119718 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo119718.setAttribute('id', 'smo119718');
const  smo229812 = new VF.Articulation('a.').setPosition(3);
smo119718.addModifier(smo229812, 0);
smo119735v0ar.push(smo119718);
smo119735v0.addTickables(smo119735v0ar)
fmtsmo11973514.joinVoices([smo119735v0]);
const fmtsmo12210914 = new VF.Formatter();
//
// voices and notes for stave 3 14
const smo122109v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo122109v0ar = [];
const smo122087 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo122087.setAttribute('id', 'smo122087');
smo122109v0ar.push(smo122087);
const smo122088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo122088.setAttribute('id', 'smo122088');
const  smo229813 = new VF.Articulation('a.').setPosition(3);
smo122088.addModifier(smo229813, 0);
smo122109v0ar.push(smo122088);
const smo122090 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo122090.setAttribute('id', 'smo122090');
const  smo229814 = new VF.Articulation('a.').setPosition(3);
smo122090.addModifier(smo229814, 0);
smo122109v0ar.push(smo122090);
const smo122092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo122092.setAttribute('id', 'smo122092');
const  smo229815 = new VF.Articulation('a.').setPosition(3);
smo122092.addModifier(smo229815, 0);
smo122109v0ar.push(smo122092);
smo122109v0.addTickables(smo122109v0ar)
fmtsmo12210914.joinVoices([smo122109v0]);
const fmtsmo12446614 = new VF.Formatter();
//
// voices and notes for stave 4 14
const smo124466v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo124466v0ar = [];
const smo124447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo124447.setAttribute('id', 'smo124447');
smo124466v0ar.push(smo124447);
const smo124448 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo124448.setAttribute('id', 'smo124448');
smo124466v0ar.push(smo124448);
const smo124449 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo124449.setAttribute('id', 'smo124449');
smo124466v0ar.push(smo124449);
const smo124450 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo124450.setAttribute('id', 'smo124450');
smo124466v0ar.push(smo124450);
smo124466v0.addTickables(smo124466v0ar)
fmtsmo12446614.joinVoices([smo124466v0]);
const fmtsmo12676814 = new VF.Formatter();
//
// voices and notes for stave 5 14
const smo126768v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo126768v0ar = [];
const smo126747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo126747.setAttribute('id', 'smo126747');
smo126768v0ar.push(smo126747);
const smo126748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo126748.setAttribute('id', 'smo126748');
smo126768v0ar.push(smo126748);
const smo126749 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo126749.setAttribute('id', 'smo126749');
smo126768v0ar.push(smo126749);
const smo126750 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo126750.setAttribute('id', 'smo126750');
smo126768v0ar.push(smo126750);
const smo126751 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo126751.setAttribute('id', 'smo126751');
smo126768v0ar.push(smo126751);
const smo126752 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo126752.setAttribute('id', 'smo126752');
smo126768v0ar.push(smo126752);
smo126768v0.addTickables(smo126768v0ar)
fmtsmo12676814.joinVoices([smo126768v0]);
const fmtsmo12917414 = new VF.Formatter();
//
// voices and notes for stave 6 14
const smo129174v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo129174v0ar = [];
const smo129153 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo129153.setAttribute('id', 'smo129153');
smo129174v0ar.push(smo129153);
const smo129154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo129154.setAttribute('id', 'smo129154');
smo129174v0ar.push(smo129154);
const smo129155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo129155.setAttribute('id', 'smo129155');
smo129174v0ar.push(smo129155);
const smo129156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo129156.setAttribute('id', 'smo129156');
smo129174v0ar.push(smo129156);
const smo129157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo129157.setAttribute('id', 'smo129157');
smo129174v0ar.push(smo129157);
const smo129158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo129158.setAttribute('id', 'smo129158');
smo129174v0ar.push(smo129158);
smo129174v0.addTickables(smo129174v0ar)
fmtsmo12917414.joinVoices([smo129174v0]);
const fmtsmo13151214 = new VF.Formatter();
//
// voices and notes for stave 7 14
const smo131512v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo131512v0ar = [];
const smo131496 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo131496.setAttribute('id', 'smo131496');
smo131512v0ar.push(smo131496);
smo131512v0.addTickables(smo131512v0ar)
fmtsmo13151214.joinVoices([smo131512v0]);
const fmtsmo13386214 = new VF.Formatter();
//
// voices and notes for stave 8 14
const smo133862v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo133862v0ar = [];
const smo133846 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo133846.setAttribute('id', 'smo133846');
smo133862v0ar.push(smo133846);
smo133862v0.addTickables(smo133862v0ar)
fmtsmo13386214.joinVoices([smo133862v0]);
const fmtsmo13627314 = new VF.Formatter();
//
// voices and notes for stave 9 14
const smo136273v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo136273v0ar = [];
const smo136252 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo136252.setAttribute('id', 'smo136252');
smo136273v0ar.push(smo136252);
const smo136253 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo136253.setAttribute('id', 'smo136253');
smo136273v0ar.push(smo136253);
const smo136254 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo136254.setAttribute('id', 'smo136254');
smo136273v0ar.push(smo136254);
const smo136255 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo136255.setAttribute('id', 'smo136255');
smo136273v0ar.push(smo136255);
const smo136256 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo136256.setAttribute('id', 'smo136256');
smo136273v0ar.push(smo136256);
const smo136257 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo136257.setAttribute('id', 'smo136257');
smo136273v0ar.push(smo136257);
smo136273v0.addTickables(smo136273v0ar)
fmtsmo13627314.joinVoices([smo136273v0]);
const fmtsmo13864614 = new VF.Formatter();
//
// voices and notes for stave 10 14
const smo138646v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo138646v0ar = [];
const smo138625 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo138625.setAttribute('id', 'smo138625');
smo138646v0ar.push(smo138625);
const smo138626 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo138626.setAttribute('id', 'smo138626');
smo138646v0ar.push(smo138626);
const smo138627 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo138627.setAttribute('id', 'smo138627');
smo138646v0ar.push(smo138627);
const smo138628 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo138628.setAttribute('id', 'smo138628');
smo138646v0ar.push(smo138628);
const smo138629 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo138629.setAttribute('id', 'smo138629');
smo138646v0ar.push(smo138629);
const smo138630 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo138630.setAttribute('id', 'smo138630');
smo138646v0ar.push(smo138630);
smo138646v0.addTickables(smo138646v0ar)
fmtsmo13864614.joinVoices([smo138646v0]);
const fmtsmo14099214 = new VF.Formatter();
//
// voices and notes for stave 11 14
const smo140992v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo140992v0ar = [];
const smo140971 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo140971.setAttribute('id', 'smo140971');
smo140992v0ar.push(smo140971);
const smo140972 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo140972.setAttribute('id', 'smo140972');
smo140992v0ar.push(smo140972);
const smo140973 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo140973.setAttribute('id', 'smo140973');
smo140992v0ar.push(smo140973);
const smo140974 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo140974.setAttribute('id', 'smo140974');
smo140992v0ar.push(smo140974);
const smo140975 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo140975.setAttribute('id', 'smo140975');
smo140992v0ar.push(smo140975);
const smo140976 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo140976.setAttribute('id', 'smo140976');
smo140992v0ar.push(smo140976);
smo140992v0.addTickables(smo140992v0ar)
fmtsmo14099214.joinVoices([smo140992v0]);
const fmtsmo14332514 = new VF.Formatter();
//
// voices and notes for stave 12 14
const smo143325v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo143325v0ar = [];
const smo143306 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo143306.setAttribute('id', 'smo143306');
smo143325v0ar.push(smo143306);
const smo143307 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo143307.setAttribute('id', 'smo143307');
smo143325v0ar.push(smo143307);
const smo143308 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo143308.setAttribute('id', 'smo143308');
smo143325v0ar.push(smo143308);
const smo143309 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo143309.setAttribute('id', 'smo143309');
smo143325v0ar.push(smo143309);
smo143325v0.addTickables(smo143325v0ar)
fmtsmo14332514.joinVoices([smo143325v0]);
const fmtsmo14565414 = new VF.Formatter();
//
// voices and notes for stave 13 14
const smo145654v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo145654v0ar = [];
const smo145633 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo145633.setAttribute('id', 'smo145633');
smo145654v0ar.push(smo145633);
const smo145634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo145634.setAttribute('id', 'smo145634');
smo145654v0ar.push(smo145634);
const smo145635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo145635.setAttribute('id', 'smo145635');
smo145654v0ar.push(smo145635);
const smo145636 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo145636.setAttribute('id', 'smo145636');
smo145654v0ar.push(smo145636);
const smo145637 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo145637.setAttribute('id', 'smo145637');
smo145654v0ar.push(smo145637);
const smo145638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo145638.setAttribute('id', 'smo145638');
smo145654v0ar.push(smo145638);
smo145654v0.addTickables(smo145654v0ar)
fmtsmo14565414.joinVoices([smo145654v0]);
const fmtsmo14809114 = new VF.Formatter();
//
// voices and notes for stave 14 14
const smo148091v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo148091v0ar = [];
const smo148075 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo148075.setAttribute('id', 'smo148075');
smo148091v0ar.push(smo148075);
smo148091v0.addTickables(smo148091v0ar)
fmtsmo14809114.joinVoices([smo148091v0]);
const fmtsmo15060314 = new VF.Formatter();
//
// voices and notes for stave 15 14
const smo150603v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo150603v0ar = [];
const smo150584 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo150584.setAttribute('id', 'smo150584');
smo150603v0ar.push(smo150584);
const smo150585 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo150585.setAttribute('id', 'smo150585');
smo150603v0ar.push(smo150585);
const smo150586 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo150586.setAttribute('id', 'smo150586');
smo150603v0ar.push(smo150586);
const smo150587 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo150587.setAttribute('id', 'smo150587');
smo150603v0ar.push(smo150587);
smo150603v0.addTickables(smo150603v0ar)
fmtsmo15060314.joinVoices([smo150603v0]);
const fmtsmo15305414 = new VF.Formatter();
//
// voices and notes for stave 16 14
const smo153054v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo153054v0ar = [];
const smo153028 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153028.setAttribute('id', 'smo153028');
const smo1530280acc = new VF.Accidental('n');
smo153028.addModifier(smo1530280acc, 0);
smo153054v0ar.push(smo153028);
const smo153029 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153029.setAttribute('id', 'smo153029');
smo153054v0ar.push(smo153029);
const smo153030 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153030.setAttribute('id', 'smo153030');
smo153054v0ar.push(smo153030);
const smo153031 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153031.setAttribute('id', 'smo153031');
smo153054v0ar.push(smo153031);
const smo153032 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153032.setAttribute('id', 'smo153032');
smo153054v0ar.push(smo153032);
const smo153033 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153033.setAttribute('id', 'smo153033');
smo153054v0ar.push(smo153033);
const smo153034 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo153034.setAttribute('id', 'smo153034');
smo153054v0ar.push(smo153034);
const smo153035 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153035.setAttribute('id', 'smo153035');
smo153054v0ar.push(smo153035);
const smo153036 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo153036.setAttribute('id', 'smo153036');
smo153054v0ar.push(smo153036);
const smo153037 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153037.setAttribute('id', 'smo153037');
smo153054v0ar.push(smo153037);
smo153054v0.addTickables(smo153054v0ar)
fmtsmo15305414.joinVoices([smo153054v0]);
// create beam groups and tuplets for format grp smo155376 before formatting
 
// formatting measures in staff group smo155376
fmtsmo11489014.format([smo114890v0,smo117317v0,smo119735v0,smo122109v0,smo124466v0], 323);
const stavesmo114890 = new VF.Stave(578, 183.2253035909339, 337);
stavesmo114890.setAttribute('id', 'stavesmo114890');
stavesmo114890.setBegBarType(VF.Barline.type.NONE);
stavesmo114890.setContext(context);
stavesmo114890.draw();
smo114890v0.draw(context, stavesmo114890);
const stavesmo117317 = new VF.Stave(578, 288.2253035909339, 337);
stavesmo117317.setAttribute('id', 'stavesmo117317');
stavesmo117317.setBegBarType(VF.Barline.type.NONE);
stavesmo117317.setContext(context);
stavesmo117317.draw();
smo117317v0.draw(context, stavesmo117317);
const stavesmo119735 = new VF.Stave(578, 379.2253035909339, 337);
stavesmo119735.setAttribute('id', 'stavesmo119735');
stavesmo119735.setBegBarType(VF.Barline.type.NONE);
stavesmo119735.setContext(context);
stavesmo119735.draw();
smo119735v0.draw(context, stavesmo119735);
const stavesmo122109 = new VF.Stave(578, 479.2253035909339, 337);
stavesmo122109.setAttribute('id', 'stavesmo122109');
stavesmo122109.setBegBarType(VF.Barline.type.NONE);
stavesmo122109.setContext(context);
stavesmo122109.draw();
smo122109v0.draw(context, stavesmo122109);
const stavesmo124466 = new VF.Stave(578, 549.2253035909339, 337);
stavesmo124466.setAttribute('id', 'stavesmo124466');
stavesmo124466.setBegBarType(VF.Barline.type.NONE);
stavesmo124466.setContext(context);
stavesmo124466.draw();
smo124466v0.draw(context, stavesmo124466);
// create beam groups and tuplets for format grp smo155378 before formatting
const dirsmo221614 = smo126748.getStemDirection();
smo126748.setStemDirection(dirsmo221614);
smo126749.setStemDirection(dirsmo221614);
const smo221614 = new VF.Beam([smo126748,smo126749]);
const dirsmo221615 = smo126750.getStemDirection();
smo126750.setStemDirection(dirsmo221615);
smo126751.setStemDirection(dirsmo221615);
const smo221615 = new VF.Beam([smo126750,smo126751]);
const dirsmo221618 = smo129154.getStemDirection();
smo129154.setStemDirection(dirsmo221618);
smo129155.setStemDirection(dirsmo221618);
const smo221618 = new VF.Beam([smo129154,smo129155]);
const dirsmo221619 = smo129156.getStemDirection();
smo129156.setStemDirection(dirsmo221619);
smo129157.setStemDirection(dirsmo221619);
const smo221619 = new VF.Beam([smo129156,smo129157]);
 
// formatting measures in staff group smo155378
fmtsmo12676814.format([smo126768v0,smo129174v0,smo131512v0,smo133862v0], 323);
const stavesmo126768 = new VF.Stave(578, 630.2253035909339, 337);
stavesmo126768.setAttribute('id', 'stavesmo126768');
stavesmo126768.setBegBarType(VF.Barline.type.NONE);
stavesmo126768.setContext(context);
stavesmo126768.draw();
smo126768v0.draw(context, stavesmo126768);
smo221614.setContext(context);
smo221614.draw();
smo221615.setContext(context);
smo221615.draw();
const stavesmo129174 = new VF.Stave(578, 700.2253035909339, 337);
stavesmo129174.setAttribute('id', 'stavesmo129174');
stavesmo129174.setBegBarType(VF.Barline.type.NONE);
stavesmo129174.setContext(context);
stavesmo129174.draw();
smo129174v0.draw(context, stavesmo129174);
smo221618.setContext(context);
smo221618.draw();
smo221619.setContext(context);
smo221619.draw();
const stavesmo131512 = new VF.Stave(578, 761.2253035909339, 337);
stavesmo131512.setAttribute('id', 'stavesmo131512');
stavesmo131512.setBegBarType(VF.Barline.type.NONE);
stavesmo131512.setContext(context);
stavesmo131512.draw();
smo131512v0.draw(context, stavesmo131512);
const stavesmo133862 = new VF.Stave(578, 831.2253035909339, 337);
stavesmo133862.setAttribute('id', 'stavesmo133862');
stavesmo133862.setBegBarType(VF.Barline.type.NONE);
stavesmo133862.setContext(context);
stavesmo133862.draw();
smo133862v0.draw(context, stavesmo133862);
// create beam groups and tuplets for format grp smo155380 before formatting
const dirsmo221626 = smo136253.getStemDirection();
smo136253.setStemDirection(dirsmo221626);
smo136254.setStemDirection(dirsmo221626);
const smo221626 = new VF.Beam([smo136253,smo136254]);
const dirsmo221627 = smo136255.getStemDirection();
smo136255.setStemDirection(dirsmo221627);
smo136256.setStemDirection(dirsmo221627);
const smo221627 = new VF.Beam([smo136255,smo136256]);
const dirsmo221630 = smo138626.getStemDirection();
smo138626.setStemDirection(dirsmo221630);
smo138627.setStemDirection(dirsmo221630);
const smo221630 = new VF.Beam([smo138626,smo138627]);
const dirsmo221631 = smo138628.getStemDirection();
smo138628.setStemDirection(dirsmo221631);
smo138629.setStemDirection(dirsmo221631);
const smo221631 = new VF.Beam([smo138628,smo138629]);
const dirsmo221634 = smo140972.getStemDirection();
smo140972.setStemDirection(dirsmo221634);
smo140973.setStemDirection(dirsmo221634);
const smo221634 = new VF.Beam([smo140972,smo140973]);
const dirsmo221635 = smo140974.getStemDirection();
smo140974.setStemDirection(dirsmo221635);
smo140975.setStemDirection(dirsmo221635);
const smo221635 = new VF.Beam([smo140974,smo140975]);
 
// formatting measures in staff group smo155380
fmtsmo13627314.format([smo136273v0,smo138646v0,smo140992v0,smo143325v0], 323);
const stavesmo136273 = new VF.Stave(578, 936.2253035909339, 337);
stavesmo136273.setAttribute('id', 'stavesmo136273');
stavesmo136273.setBegBarType(VF.Barline.type.NONE);
stavesmo136273.setContext(context);
stavesmo136273.draw();
smo136273v0.draw(context, stavesmo136273);
smo221626.setContext(context);
smo221626.draw();
smo221627.setContext(context);
smo221627.draw();
const stavesmo138646 = new VF.Stave(578, 1023.2253035909339, 337);
stavesmo138646.setAttribute('id', 'stavesmo138646');
stavesmo138646.setBegBarType(VF.Barline.type.NONE);
stavesmo138646.setContext(context);
stavesmo138646.draw();
smo138646v0.draw(context, stavesmo138646);
smo221630.setContext(context);
smo221630.draw();
smo221631.setContext(context);
smo221631.draw();
const stavesmo140992 = new VF.Stave(578, 1128.225303590934, 337);
stavesmo140992.setAttribute('id', 'stavesmo140992');
stavesmo140992.setBegBarType(VF.Barline.type.NONE);
stavesmo140992.setContext(context);
stavesmo140992.draw();
smo140992v0.draw(context, stavesmo140992);
smo221634.setContext(context);
smo221634.draw();
smo221635.setContext(context);
smo221635.draw();
const stavesmo143325 = new VF.Stave(578, 1213.225303590934, 337);
stavesmo143325.setAttribute('id', 'stavesmo143325');
stavesmo143325.setBegBarType(VF.Barline.type.NONE);
stavesmo143325.setContext(context);
stavesmo143325.draw();
smo143325v0.draw(context, stavesmo143325);
// create beam groups and tuplets for format grp smo147831 before formatting
const dirsmo221640 = smo145634.getStemDirection();
smo145634.setStemDirection(dirsmo221640);
smo145635.setStemDirection(dirsmo221640);
const smo221640 = new VF.Beam([smo145634,smo145635]);
const dirsmo221641 = smo145636.getStemDirection();
smo145636.setStemDirection(dirsmo221641);
smo145637.setStemDirection(dirsmo221641);
const smo221641 = new VF.Beam([smo145636,smo145637]);
 
// formatting measures in staff group smo147831
fmtsmo14565414.format([smo145654v0], 323);
const stavesmo145654 = new VF.Stave(578, 1290.225303590934, 337);
stavesmo145654.setAttribute('id', 'stavesmo145654');
stavesmo145654.setBegBarType(VF.Barline.type.NONE);
stavesmo145654.setContext(context);
stavesmo145654.draw();
smo145654v0.draw(context, stavesmo145654);
smo221640.setContext(context);
smo221640.draw();
smo221641.setContext(context);
smo221641.draw();
// create beam groups and tuplets for format grp smo150299 before formatting
 
// formatting measures in staff group smo150299
fmtsmo14809114.format([smo148091v0], 323);
const stavesmo148091 = new VF.Stave(578, 1373.225303590934, 337);
stavesmo148091.setAttribute('id', 'stavesmo148091');
stavesmo148091.setBegBarType(VF.Barline.type.NONE);
stavesmo148091.setContext(context);
stavesmo148091.draw();
smo148091v0.draw(context, stavesmo148091);
// create beam groups and tuplets for format grp smo152657 before formatting
 
// formatting measures in staff group smo152657
fmtsmo15060314.format([smo150603v0], 323);
const stavesmo150603 = new VF.Stave(578, 1478.225303590934, 337);
stavesmo150603.setAttribute('id', 'stavesmo150603');
stavesmo150603.setBegBarType(VF.Barline.type.NONE);
stavesmo150603.setContext(context);
stavesmo150603.draw();
smo150603v0.draw(context, stavesmo150603);
// create beam groups and tuplets for format grp smo155370 before formatting
const dirsmo221648 = smo153028.getStemDirection();
smo153028.setStemDirection(dirsmo221648);
smo153029.setStemDirection(dirsmo221648);
smo153030.setStemDirection(dirsmo221648);
smo153031.setStemDirection(dirsmo221648);
const smo221648 = new VF.Beam([smo153028,smo153029,smo153030,smo153031]);
const dirsmo221649 = smo153032.getStemDirection();
smo153032.setStemDirection(dirsmo221649);
smo153033.setStemDirection(dirsmo221649);
const smo221649 = new VF.Beam([smo153032,smo153033]);
const smo153038 = new VF.Tuplet([smo153029,smo153030,smo153031], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo155370
fmtsmo15305414.format([smo153054v0], 323);
const stavesmo153054 = new VF.Stave(578, 1555.225303590934, 337);
stavesmo153054.setAttribute('id', 'stavesmo153054');
stavesmo153054.setBegBarType(VF.Barline.type.NONE);
stavesmo153054.setContext(context);
stavesmo153054.draw();
smo153054v0.draw(context, stavesmo153054);
smo221648.setContext(context);
smo221648.draw();
smo221649.setContext(context);
smo221649.draw();
smo153038.setContext(context).draw();
const fmtsmo11491715 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo114917v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114917v0ar = [];
const smo114891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo114891.setAttribute('id', 'smo114891');
smo114917v0ar.push(smo114891);
const smo114892 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo114892.setAttribute('id', 'smo114892');
smo114917v0ar.push(smo114892);
const smo114893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo114893.setAttribute('id', 'smo114893');
smo114917v0ar.push(smo114893);
const smo114894 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo114894.setAttribute('id', 'smo114894');
smo114917v0ar.push(smo114894);
const smo114895 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo114895.setAttribute('id', 'smo114895');
smo114917v0ar.push(smo114895);
const smo114896 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo114896.setAttribute('id', 'smo114896');
smo114917v0ar.push(smo114896);
const smo114897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo114897.setAttribute('id', 'smo114897');
smo114917v0ar.push(smo114897);
const smo114898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo114898.setAttribute('id', 'smo114898');
smo114917v0ar.push(smo114898);
const smo114899 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo114899.setAttribute('id', 'smo114899');
smo114917v0ar.push(smo114899);
const smo114900 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo114900.setAttribute('id', 'smo114900');
smo114917v0ar.push(smo114900);
const smo114901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo114901.setAttribute('id', 'smo114901');
smo114917v0ar.push(smo114901);
smo114917v0.addTickables(smo114917v0ar)
fmtsmo11491715.joinVoices([smo114917v0]);
const fmtsmo11734415 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo117344v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo117344v0ar = [];
const smo117318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo117318.setAttribute('id', 'smo117318');
smo117344v0ar.push(smo117318);
const smo117319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo117319.setAttribute('id', 'smo117319');
smo117344v0ar.push(smo117319);
const smo117320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo117320.setAttribute('id', 'smo117320');
smo117344v0ar.push(smo117320);
const smo117321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo117321.setAttribute('id', 'smo117321');
smo117344v0ar.push(smo117321);
const smo117322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo117322.setAttribute('id', 'smo117322');
smo117344v0ar.push(smo117322);
const smo117323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo117323.setAttribute('id', 'smo117323');
smo117344v0ar.push(smo117323);
const smo117324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo117324.setAttribute('id', 'smo117324');
smo117344v0ar.push(smo117324);
const smo117325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo117325.setAttribute('id', 'smo117325');
smo117344v0ar.push(smo117325);
const smo117326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo117326.setAttribute('id', 'smo117326');
smo117344v0ar.push(smo117326);
const smo117327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo117327.setAttribute('id', 'smo117327');
smo117344v0ar.push(smo117327);
const smo117328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo117328.setAttribute('id', 'smo117328');
smo117344v0ar.push(smo117328);
smo117344v0.addTickables(smo117344v0ar)
fmtsmo11734415.joinVoices([smo117344v0]);
const fmtsmo11976015 = new VF.Formatter();
//
// voices and notes for stave 2 15
const smo119760v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo119760v0ar = [];
const smo119736 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo119736.setAttribute('id', 'smo119736');
smo119760v0ar.push(smo119736);
const smo119737 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo119737.setAttribute('id', 'smo119737');
smo119760v0ar.push(smo119737);
const smo119738 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo119738.setAttribute('id', 'smo119738');
smo119760v0ar.push(smo119738);
const smo119739 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo119739.setAttribute('id', 'smo119739');
smo119760v0ar.push(smo119739);
const smo119740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo119740.setAttribute('id', 'smo119740');
smo119760v0ar.push(smo119740);
const smo119741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo119741.setAttribute('id', 'smo119741');
smo119760v0ar.push(smo119741);
const smo119742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo119742.setAttribute('id', 'smo119742');
smo119760v0ar.push(smo119742);
const smo119743 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo119743.setAttribute('id', 'smo119743');
smo119760v0ar.push(smo119743);
const smo119744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo119744.setAttribute('id', 'smo119744');
smo119760v0ar.push(smo119744);
smo119760v0.addTickables(smo119760v0ar)
fmtsmo11976015.joinVoices([smo119760v0]);
const fmtsmo12213415 = new VF.Formatter();
//
// voices and notes for stave 3 15
const smo122134v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo122134v0ar = [];
const smo122110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo122110.setAttribute('id', 'smo122110');
smo122134v0ar.push(smo122110);
const smo122111 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo122111.setAttribute('id', 'smo122111');
smo122134v0ar.push(smo122111);
const smo122112 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo122112.setAttribute('id', 'smo122112');
smo122134v0ar.push(smo122112);
const smo122113 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo122113.setAttribute('id', 'smo122113');
smo122134v0ar.push(smo122113);
const smo122114 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo122114.setAttribute('id', 'smo122114');
smo122134v0ar.push(smo122114);
const smo122115 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo122115.setAttribute('id', 'smo122115');
smo122134v0ar.push(smo122115);
const smo122116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo122116.setAttribute('id', 'smo122116');
smo122134v0ar.push(smo122116);
const smo122117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo122117.setAttribute('id', 'smo122117');
smo122134v0ar.push(smo122117);
const smo122118 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo122118.setAttribute('id', 'smo122118');
smo122134v0ar.push(smo122118);
smo122134v0.addTickables(smo122134v0ar)
fmtsmo12213415.joinVoices([smo122134v0]);
const fmtsmo12448615 = new VF.Formatter();
//
// voices and notes for stave 4 15
const smo124486v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo124486v0ar = [];
const smo124467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo124467.setAttribute('id', 'smo124467');
const  smo229850 = new VF.Articulation('a.').setPosition(3);
smo124467.addModifier(smo229850, 0);
smo124486v0ar.push(smo124467);
const smo124469 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo124469.setAttribute('id', 'smo124469');
smo124486v0ar.push(smo124469);
const smo124470 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo124470.setAttribute('id', 'smo124470');
smo124486v0ar.push(smo124470);
smo124486v0.addTickables(smo124486v0ar)
fmtsmo12448615.joinVoices([smo124486v0]);
const fmtsmo12679215 = new VF.Formatter();
//
// voices and notes for stave 5 15
const smo126792v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo126792v0ar = [];
const smo126769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo126769.setAttribute('id', 'smo126769');
smo126792v0ar.push(smo126769);
const smo126770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo126770.setAttribute('id', 'smo126770');
smo126792v0ar.push(smo126770);
const smo126771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo126771.setAttribute('id', 'smo126771');
smo126792v0ar.push(smo126771);
const smo126772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo126772.setAttribute('id', 'smo126772');
smo126792v0ar.push(smo126772);
const smo126773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo126773.setAttribute('id', 'smo126773');
smo126792v0ar.push(smo126773);
const smo126774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo126774.setAttribute('id', 'smo126774');
smo126792v0ar.push(smo126774);
const smo126775 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo126775.setAttribute('id', 'smo126775');
smo126792v0ar.push(smo126775);
const smo126776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo126776.setAttribute('id', 'smo126776');
smo126792v0ar.push(smo126776);
smo126792v0.addTickables(smo126792v0ar)
fmtsmo12679215.joinVoices([smo126792v0]);
const fmtsmo12919815 = new VF.Formatter();
//
// voices and notes for stave 6 15
const smo129198v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo129198v0ar = [];
const smo129175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo129175.setAttribute('id', 'smo129175');
smo129198v0ar.push(smo129175);
const smo129176 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo129176.setAttribute('id', 'smo129176');
smo129198v0ar.push(smo129176);
const smo129177 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo129177.setAttribute('id', 'smo129177');
smo129198v0ar.push(smo129177);
const smo129178 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo129178.setAttribute('id', 'smo129178');
smo129198v0ar.push(smo129178);
const smo129179 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo129179.setAttribute('id', 'smo129179');
smo129198v0ar.push(smo129179);
const smo129180 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo129180.setAttribute('id', 'smo129180');
smo129198v0ar.push(smo129180);
const smo129181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo129181.setAttribute('id', 'smo129181');
smo129198v0ar.push(smo129181);
const smo129182 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo129182.setAttribute('id', 'smo129182');
smo129198v0ar.push(smo129182);
smo129198v0.addTickables(smo129198v0ar)
fmtsmo12919815.joinVoices([smo129198v0]);
const fmtsmo13152915 = new VF.Formatter();
//
// voices and notes for stave 7 15
const smo131529v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo131529v0ar = [];
const smo131513 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo131513.setAttribute('id', 'smo131513');
smo131529v0ar.push(smo131513);
smo131529v0.addTickables(smo131529v0ar)
fmtsmo13152915.joinVoices([smo131529v0]);
const fmtsmo13387915 = new VF.Formatter();
//
// voices and notes for stave 8 15
const smo133879v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo133879v0ar = [];
const smo133863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo133863.setAttribute('id', 'smo133863');
smo133879v0ar.push(smo133863);
smo133879v0.addTickables(smo133879v0ar)
fmtsmo13387915.joinVoices([smo133879v0]);
const fmtsmo13629715 = new VF.Formatter();
//
// voices and notes for stave 9 15
const smo136297v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo136297v0ar = [];
const smo136274 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo136274.setAttribute('id', 'smo136274');
smo136297v0ar.push(smo136274);
const smo136275 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo136275.setAttribute('id', 'smo136275');
smo136297v0ar.push(smo136275);
const smo136276 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo136276.setAttribute('id', 'smo136276');
smo136297v0ar.push(smo136276);
const smo136277 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo136277.setAttribute('id', 'smo136277');
smo136297v0ar.push(smo136277);
const smo136278 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo136278.setAttribute('id', 'smo136278');
smo136297v0ar.push(smo136278);
const smo136279 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo136279.setAttribute('id', 'smo136279');
smo136297v0ar.push(smo136279);
const smo136280 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo136280.setAttribute('id', 'smo136280');
smo136297v0ar.push(smo136280);
const smo136281 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo136281.setAttribute('id', 'smo136281');
smo136297v0ar.push(smo136281);
smo136297v0.addTickables(smo136297v0ar)
fmtsmo13629715.joinVoices([smo136297v0]);
const fmtsmo13867015 = new VF.Formatter();
//
// voices and notes for stave 10 15
const smo138670v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo138670v0ar = [];
const smo138647 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo138647.setAttribute('id', 'smo138647');
smo138670v0ar.push(smo138647);
const smo138648 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo138648.setAttribute('id', 'smo138648');
smo138670v0ar.push(smo138648);
const smo138649 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo138649.setAttribute('id', 'smo138649');
smo138670v0ar.push(smo138649);
const smo138650 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo138650.setAttribute('id', 'smo138650');
smo138670v0ar.push(smo138650);
const smo138651 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo138651.setAttribute('id', 'smo138651');
smo138670v0ar.push(smo138651);
const smo138652 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo138652.setAttribute('id', 'smo138652');
smo138670v0ar.push(smo138652);
const smo138653 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo138653.setAttribute('id', 'smo138653');
smo138670v0ar.push(smo138653);
const smo138654 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo138654.setAttribute('id', 'smo138654');
smo138670v0ar.push(smo138654);
smo138670v0.addTickables(smo138670v0ar)
fmtsmo13867015.joinVoices([smo138670v0]);
const fmtsmo14101615 = new VF.Formatter();
//
// voices and notes for stave 11 15
const smo141016v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo141016v0ar = [];
const smo140993 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo140993.setAttribute('id', 'smo140993');
smo141016v0ar.push(smo140993);
const smo140994 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo140994.setAttribute('id', 'smo140994');
smo141016v0ar.push(smo140994);
const smo140995 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo140995.setAttribute('id', 'smo140995');
smo141016v0ar.push(smo140995);
const smo140996 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo140996.setAttribute('id', 'smo140996');
smo141016v0ar.push(smo140996);
const smo140997 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo140997.setAttribute('id', 'smo140997');
smo141016v0ar.push(smo140997);
const smo140998 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo140998.setAttribute('id', 'smo140998');
smo141016v0ar.push(smo140998);
const smo140999 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo140999.setAttribute('id', 'smo140999');
smo141016v0ar.push(smo140999);
const smo141000 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo141000.setAttribute('id', 'smo141000');
smo141016v0ar.push(smo141000);
smo141016v0.addTickables(smo141016v0ar)
fmtsmo14101615.joinVoices([smo141016v0]);
const fmtsmo14334515 = new VF.Formatter();
//
// voices and notes for stave 12 15
const smo143345v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo143345v0ar = [];
const smo143326 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo143326.setAttribute('id', 'smo143326');
const  smo229851 = new VF.Articulation('a.').setPosition(3);
smo143326.addModifier(smo229851, 0);
smo143345v0ar.push(smo143326);
const smo143328 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo143328.setAttribute('id', 'smo143328');
smo143345v0ar.push(smo143328);
const smo143329 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n"]}'))
smo143329.setAttribute('id', 'smo143329');
smo143345v0ar.push(smo143329);
smo143345v0.addTickables(smo143345v0ar)
fmtsmo14334515.joinVoices([smo143345v0]);
const fmtsmo14567815 = new VF.Formatter();
//
// voices and notes for stave 13 15
const smo145678v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo145678v0ar = [];
const smo145655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo145655.setAttribute('id', 'smo145655');
smo145678v0ar.push(smo145655);
const smo145656 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo145656.setAttribute('id', 'smo145656');
smo145678v0ar.push(smo145656);
const smo145657 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo145657.setAttribute('id', 'smo145657');
smo145678v0ar.push(smo145657);
const smo145658 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo145658.setAttribute('id', 'smo145658');
smo145678v0ar.push(smo145658);
const smo145659 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo145659.setAttribute('id', 'smo145659');
smo145678v0ar.push(smo145659);
const smo145660 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo145660.setAttribute('id', 'smo145660');
smo145678v0ar.push(smo145660);
const smo145661 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo145661.setAttribute('id', 'smo145661');
smo145678v0ar.push(smo145661);
const smo145662 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo145662.setAttribute('id', 'smo145662');
smo145678v0ar.push(smo145662);
smo145678v0.addTickables(smo145678v0ar)
fmtsmo14567815.joinVoices([smo145678v0]);
const fmtsmo14810815 = new VF.Formatter();
//
// voices and notes for stave 14 15
const smo148108v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo148108v0ar = [];
const smo148092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo148092.setAttribute('id', 'smo148092');
smo148108v0ar.push(smo148092);
smo148108v0.addTickables(smo148108v0ar)
fmtsmo14810815.joinVoices([smo148108v0]);
const fmtsmo15062315 = new VF.Formatter();
//
// voices and notes for stave 15 15
const smo150623v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo150623v0ar = [];
const smo150604 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo150604.setAttribute('id', 'smo150604');
const  smo229852 = new VF.Articulation('a.').setPosition(3);
smo150604.addModifier(smo229852, 0);
smo150623v0ar.push(smo150604);
const smo150606 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo150606.setAttribute('id', 'smo150606');
smo150623v0ar.push(smo150606);
const smo150607 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo150607.setAttribute('id', 'smo150607');
smo150623v0ar.push(smo150607);
smo150623v0.addTickables(smo150623v0ar)
fmtsmo15062315.joinVoices([smo150623v0]);
const fmtsmo15308115 = new VF.Formatter();
//
// voices and notes for stave 16 15
const smo153081v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo153081v0ar = [];
const smo153055 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153055.setAttribute('id', 'smo153055');
const smo1530550acc = new VF.Accidental('n');
smo153055.addModifier(smo1530550acc, 0);
smo153081v0ar.push(smo153055);
const smo153056 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153056.setAttribute('id', 'smo153056');
smo153081v0ar.push(smo153056);
const smo153057 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153057.setAttribute('id', 'smo153057');
smo153081v0ar.push(smo153057);
const smo153058 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153058.setAttribute('id', 'smo153058');
smo153081v0ar.push(smo153058);
const smo153059 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153059.setAttribute('id', 'smo153059');
smo153081v0ar.push(smo153059);
const smo153060 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153060.setAttribute('id', 'smo153060');
smo153081v0ar.push(smo153060);
const smo153061 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo153061.setAttribute('id', 'smo153061');
smo153081v0ar.push(smo153061);
const smo153062 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153062.setAttribute('id', 'smo153062');
smo153081v0ar.push(smo153062);
const smo153063 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo153063.setAttribute('id', 'smo153063');
smo153081v0ar.push(smo153063);
const smo153064 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153064.setAttribute('id', 'smo153064');
smo153081v0ar.push(smo153064);
smo153081v0.addTickables(smo153081v0ar)
fmtsmo15308115.joinVoices([smo153081v0]);
// create beam groups and tuplets for format grp smo155376 before formatting
const dirsmo221652 = smo114891.getStemDirection();
smo114891.setStemDirection(dirsmo221652);
smo114892.setStemDirection(dirsmo221652);
smo114893.setStemDirection(dirsmo221652);
const smo221652 = new VF.Beam([smo114891,smo114892,smo114893]);
const dirsmo221653 = smo114894.getStemDirection();
smo114894.setStemDirection(dirsmo221653);
smo114895.setStemDirection(dirsmo221653);
const smo221653 = new VF.Beam([smo114894,smo114895]);
const dirsmo221654 = smo114896.getStemDirection();
smo114896.setStemDirection(dirsmo221654);
smo114897.setStemDirection(dirsmo221654);
smo114898.setStemDirection(dirsmo221654);
const smo221654 = new VF.Beam([smo114896,smo114897,smo114898]);
const dirsmo221655 = smo114899.getStemDirection();
smo114899.setStemDirection(dirsmo221655);
smo114900.setStemDirection(dirsmo221655);
smo114901.setStemDirection(dirsmo221655);
const smo221655 = new VF.Beam([smo114899,smo114900,smo114901]);
const dirsmo221658 = smo117318.getStemDirection();
smo117318.setStemDirection(dirsmo221658);
smo117319.setStemDirection(dirsmo221658);
smo117320.setStemDirection(dirsmo221658);
const smo221658 = new VF.Beam([smo117318,smo117319,smo117320]);
const dirsmo221659 = smo117321.getStemDirection();
smo117321.setStemDirection(dirsmo221659);
smo117322.setStemDirection(dirsmo221659);
const smo221659 = new VF.Beam([smo117321,smo117322]);
const dirsmo221660 = smo117323.getStemDirection();
smo117323.setStemDirection(dirsmo221660);
smo117324.setStemDirection(dirsmo221660);
smo117325.setStemDirection(dirsmo221660);
const smo221660 = new VF.Beam([smo117323,smo117324,smo117325]);
const dirsmo221661 = smo117326.getStemDirection();
smo117326.setStemDirection(dirsmo221661);
smo117327.setStemDirection(dirsmo221661);
smo117328.setStemDirection(dirsmo221661);
const smo221661 = new VF.Beam([smo117326,smo117327,smo117328]);
const dirsmo221664 = smo119736.getStemDirection();
smo119736.setStemDirection(dirsmo221664);
smo119737.setStemDirection(dirsmo221664);
smo119738.setStemDirection(dirsmo221664);
const smo221664 = new VF.Beam([smo119736,smo119737,smo119738]);
const dirsmo221665 = smo119739.getStemDirection();
smo119739.setStemDirection(dirsmo221665);
smo119740.setStemDirection(dirsmo221665);
const smo221665 = new VF.Beam([smo119739,smo119740]);
const dirsmo221666 = smo119742.getStemDirection();
smo119742.setStemDirection(dirsmo221666);
smo119743.setStemDirection(dirsmo221666);
const smo221666 = new VF.Beam([smo119742,smo119743]);
const dirsmo221669 = smo122110.getStemDirection();
smo122110.setStemDirection(dirsmo221669);
smo122111.setStemDirection(dirsmo221669);
smo122112.setStemDirection(dirsmo221669);
const smo221669 = new VF.Beam([smo122110,smo122111,smo122112]);
const dirsmo221670 = smo122113.getStemDirection();
smo122113.setStemDirection(dirsmo221670);
smo122114.setStemDirection(dirsmo221670);
const smo221670 = new VF.Beam([smo122113,smo122114]);
const dirsmo221671 = smo122116.getStemDirection();
smo122116.setStemDirection(dirsmo221671);
smo122117.setStemDirection(dirsmo221671);
const smo221671 = new VF.Beam([smo122116,smo122117]);
 
// formatting measures in staff group smo155376
fmtsmo11491715.format([smo114917v0,smo117344v0,smo119760v0,smo122134v0,smo124486v0], 402);
const stavesmo114917 = new VF.Stave(915, 183.2253035909339, 416);
stavesmo114917.setAttribute('id', 'stavesmo114917');
stavesmo114917.setBegBarType(VF.Barline.type.NONE);
stavesmo114917.setContext(context);
stavesmo114917.draw();
smo114917v0.draw(context, stavesmo114917);
smo221652.setContext(context);
smo221652.draw();
smo221653.setContext(context);
smo221653.draw();
smo221654.setContext(context);
smo221654.draw();
smo221655.setContext(context);
smo221655.draw();
const stavesmo117344 = new VF.Stave(915, 288.2253035909339, 416);
stavesmo117344.setAttribute('id', 'stavesmo117344');
stavesmo117344.setBegBarType(VF.Barline.type.NONE);
stavesmo117344.setContext(context);
stavesmo117344.draw();
smo117344v0.draw(context, stavesmo117344);
smo221658.setContext(context);
smo221658.draw();
smo221659.setContext(context);
smo221659.draw();
smo221660.setContext(context);
smo221660.draw();
smo221661.setContext(context);
smo221661.draw();
const stavesmo119760 = new VF.Stave(915, 379.2253035909339, 416);
stavesmo119760.setAttribute('id', 'stavesmo119760');
stavesmo119760.setBegBarType(VF.Barline.type.NONE);
stavesmo119760.setContext(context);
stavesmo119760.draw();
smo119760v0.draw(context, stavesmo119760);
smo221664.setContext(context);
smo221664.draw();
smo221665.setContext(context);
smo221665.draw();
smo221666.setContext(context);
smo221666.draw();
const stavesmo122134 = new VF.Stave(915, 479.2253035909339, 416);
stavesmo122134.setAttribute('id', 'stavesmo122134');
stavesmo122134.setBegBarType(VF.Barline.type.NONE);
stavesmo122134.setContext(context);
stavesmo122134.draw();
smo122134v0.draw(context, stavesmo122134);
smo221669.setContext(context);
smo221669.draw();
smo221670.setContext(context);
smo221670.draw();
smo221671.setContext(context);
smo221671.draw();
const stavesmo124486 = new VF.Stave(915, 549.2253035909339, 416);
stavesmo124486.setAttribute('id', 'stavesmo124486');
stavesmo124486.setBegBarType(VF.Barline.type.NONE);
stavesmo124486.setContext(context);
stavesmo124486.draw();
smo124486v0.draw(context, stavesmo124486);
// create beam groups and tuplets for format grp smo155378 before formatting
const dirsmo221676 = smo126770.getStemDirection();
smo126770.setStemDirection(dirsmo221676);
smo126771.setStemDirection(dirsmo221676);
const smo221676 = new VF.Beam([smo126770,smo126771]);
const dirsmo221677 = smo126773.getStemDirection();
smo126773.setStemDirection(dirsmo221677);
smo126774.setStemDirection(dirsmo221677);
smo126775.setStemDirection(dirsmo221677);
smo126776.setStemDirection(dirsmo221677);
const smo221677 = new VF.Beam([smo126773,smo126774,smo126775,smo126776]);
const dirsmo221680 = smo129176.getStemDirection();
smo129176.setStemDirection(dirsmo221680);
smo129177.setStemDirection(dirsmo221680);
const smo221680 = new VF.Beam([smo129176,smo129177]);
const dirsmo221681 = smo129179.getStemDirection();
smo129179.setStemDirection(dirsmo221681);
smo129180.setStemDirection(dirsmo221681);
smo129181.setStemDirection(dirsmo221681);
smo129182.setStemDirection(dirsmo221681);
const smo221681 = new VF.Beam([smo129179,smo129180,smo129181,smo129182]);
 
// formatting measures in staff group smo155378
fmtsmo12679215.format([smo126792v0,smo129198v0,smo131529v0,smo133879v0], 402);
const stavesmo126792 = new VF.Stave(915, 630.2253035909339, 416);
stavesmo126792.setAttribute('id', 'stavesmo126792');
stavesmo126792.setBegBarType(VF.Barline.type.NONE);
stavesmo126792.setContext(context);
stavesmo126792.draw();
smo126792v0.draw(context, stavesmo126792);
smo221676.setContext(context);
smo221676.draw();
smo221677.setContext(context);
smo221677.draw();
const stavesmo129198 = new VF.Stave(915, 700.2253035909339, 416);
stavesmo129198.setAttribute('id', 'stavesmo129198');
stavesmo129198.setBegBarType(VF.Barline.type.NONE);
stavesmo129198.setContext(context);
stavesmo129198.draw();
smo129198v0.draw(context, stavesmo129198);
smo221680.setContext(context);
smo221680.draw();
smo221681.setContext(context);
smo221681.draw();
const stavesmo131529 = new VF.Stave(915, 761.2253035909339, 416);
stavesmo131529.setAttribute('id', 'stavesmo131529');
stavesmo131529.setBegBarType(VF.Barline.type.NONE);
stavesmo131529.setContext(context);
stavesmo131529.draw();
smo131529v0.draw(context, stavesmo131529);
const stavesmo133879 = new VF.Stave(915, 831.2253035909339, 416);
stavesmo133879.setAttribute('id', 'stavesmo133879');
stavesmo133879.setBegBarType(VF.Barline.type.NONE);
stavesmo133879.setContext(context);
stavesmo133879.draw();
smo133879v0.draw(context, stavesmo133879);
// create beam groups and tuplets for format grp smo155380 before formatting
const dirsmo221688 = smo136275.getStemDirection();
smo136275.setStemDirection(dirsmo221688);
smo136276.setStemDirection(dirsmo221688);
const smo221688 = new VF.Beam([smo136275,smo136276]);
const dirsmo221689 = smo136278.getStemDirection();
smo136278.setStemDirection(dirsmo221689);
smo136279.setStemDirection(dirsmo221689);
smo136280.setStemDirection(dirsmo221689);
smo136281.setStemDirection(dirsmo221689);
const smo221689 = new VF.Beam([smo136278,smo136279,smo136280,smo136281]);
const dirsmo221692 = smo138648.getStemDirection();
smo138648.setStemDirection(dirsmo221692);
smo138649.setStemDirection(dirsmo221692);
const smo221692 = new VF.Beam([smo138648,smo138649]);
const dirsmo221693 = smo138651.getStemDirection();
smo138651.setStemDirection(dirsmo221693);
smo138652.setStemDirection(dirsmo221693);
smo138653.setStemDirection(dirsmo221693);
smo138654.setStemDirection(dirsmo221693);
const smo221693 = new VF.Beam([smo138651,smo138652,smo138653,smo138654]);
const dirsmo221696 = smo140994.getStemDirection();
smo140994.setStemDirection(dirsmo221696);
smo140995.setStemDirection(dirsmo221696);
const smo221696 = new VF.Beam([smo140994,smo140995]);
const dirsmo221697 = smo140997.getStemDirection();
smo140997.setStemDirection(dirsmo221697);
smo140998.setStemDirection(dirsmo221697);
smo140999.setStemDirection(dirsmo221697);
smo141000.setStemDirection(dirsmo221697);
const smo221697 = new VF.Beam([smo140997,smo140998,smo140999,smo141000]);
 
// formatting measures in staff group smo155380
fmtsmo13629715.format([smo136297v0,smo138670v0,smo141016v0,smo143345v0], 402);
const stavesmo136297 = new VF.Stave(915, 936.2253035909339, 416);
stavesmo136297.setAttribute('id', 'stavesmo136297');
stavesmo136297.setBegBarType(VF.Barline.type.NONE);
stavesmo136297.setContext(context);
stavesmo136297.draw();
smo136297v0.draw(context, stavesmo136297);
smo221688.setContext(context);
smo221688.draw();
smo221689.setContext(context);
smo221689.draw();
const stavesmo138670 = new VF.Stave(915, 1023.2253035909339, 416);
stavesmo138670.setAttribute('id', 'stavesmo138670');
stavesmo138670.setBegBarType(VF.Barline.type.NONE);
stavesmo138670.setContext(context);
stavesmo138670.draw();
smo138670v0.draw(context, stavesmo138670);
smo221692.setContext(context);
smo221692.draw();
smo221693.setContext(context);
smo221693.draw();
const stavesmo141016 = new VF.Stave(915, 1128.225303590934, 416);
stavesmo141016.setAttribute('id', 'stavesmo141016');
stavesmo141016.setBegBarType(VF.Barline.type.NONE);
stavesmo141016.setContext(context);
stavesmo141016.draw();
smo141016v0.draw(context, stavesmo141016);
smo221696.setContext(context);
smo221696.draw();
smo221697.setContext(context);
smo221697.draw();
const stavesmo143345 = new VF.Stave(915, 1213.225303590934, 416);
stavesmo143345.setAttribute('id', 'stavesmo143345');
stavesmo143345.setBegBarType(VF.Barline.type.NONE);
stavesmo143345.setContext(context);
stavesmo143345.draw();
smo143345v0.draw(context, stavesmo143345);
// create beam groups and tuplets for format grp smo147831 before formatting
const dirsmo221702 = smo145656.getStemDirection();
smo145656.setStemDirection(dirsmo221702);
smo145657.setStemDirection(dirsmo221702);
const smo221702 = new VF.Beam([smo145656,smo145657]);
const dirsmo221703 = smo145659.getStemDirection();
smo145659.setStemDirection(dirsmo221703);
smo145660.setStemDirection(dirsmo221703);
smo145661.setStemDirection(dirsmo221703);
smo145662.setStemDirection(dirsmo221703);
const smo221703 = new VF.Beam([smo145659,smo145660,smo145661,smo145662]);
 
// formatting measures in staff group smo147831
fmtsmo14567815.format([smo145678v0], 402);
const stavesmo145678 = new VF.Stave(915, 1290.225303590934, 416);
stavesmo145678.setAttribute('id', 'stavesmo145678');
stavesmo145678.setBegBarType(VF.Barline.type.NONE);
stavesmo145678.setContext(context);
stavesmo145678.draw();
smo145678v0.draw(context, stavesmo145678);
smo221702.setContext(context);
smo221702.draw();
smo221703.setContext(context);
smo221703.draw();
// create beam groups and tuplets for format grp smo150299 before formatting
 
// formatting measures in staff group smo150299
fmtsmo14810815.format([smo148108v0], 402);
const stavesmo148108 = new VF.Stave(915, 1373.225303590934, 416);
stavesmo148108.setAttribute('id', 'stavesmo148108');
stavesmo148108.setBegBarType(VF.Barline.type.NONE);
stavesmo148108.setContext(context);
stavesmo148108.draw();
smo148108v0.draw(context, stavesmo148108);
// create beam groups and tuplets for format grp smo152657 before formatting
 
// formatting measures in staff group smo152657
fmtsmo15062315.format([smo150623v0], 402);
const stavesmo150623 = new VF.Stave(915, 1478.225303590934, 416);
stavesmo150623.setAttribute('id', 'stavesmo150623');
stavesmo150623.setBegBarType(VF.Barline.type.NONE);
stavesmo150623.setContext(context);
stavesmo150623.draw();
smo150623v0.draw(context, stavesmo150623);
// create beam groups and tuplets for format grp smo155370 before formatting
const dirsmo221710 = smo153055.getStemDirection();
smo153055.setStemDirection(dirsmo221710);
smo153056.setStemDirection(dirsmo221710);
smo153057.setStemDirection(dirsmo221710);
smo153058.setStemDirection(dirsmo221710);
const smo221710 = new VF.Beam([smo153055,smo153056,smo153057,smo153058]);
const dirsmo221711 = smo153059.getStemDirection();
smo153059.setStemDirection(dirsmo221711);
smo153060.setStemDirection(dirsmo221711);
const smo221711 = new VF.Beam([smo153059,smo153060]);
const smo153065 = new VF.Tuplet([smo153056,smo153057,smo153058], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo155370
fmtsmo15308115.format([smo153081v0], 402);
const stavesmo153081 = new VF.Stave(915, 1555.225303590934, 416);
stavesmo153081.setAttribute('id', 'stavesmo153081');
stavesmo153081.setBegBarType(VF.Barline.type.NONE);
stavesmo153081.setContext(context);
stavesmo153081.draw();
smo153081v0.draw(context, stavesmo153081);
smo221710.setContext(context);
smo221710.draw();
smo221711.setContext(context);
smo221711.draw();
smo153065.setContext(context).draw();
const fmtsmo11493816 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo114938v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114938v0ar = [];
const smo114918 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo114918.setAttribute('id', 'smo114918');
smo114938v0ar.push(smo114918);
const smo114919 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo114919.setAttribute('id', 'smo114919');
smo114938v0ar.push(smo114919);
const smo114920 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo114920.setAttribute('id', 'smo114920');
smo114938v0ar.push(smo114920);
const smo114921 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo114921.setAttribute('id', 'smo114921');
const smo1149210acc = new VF.Accidental('n');
smo114921.addModifier(smo1149210acc, 0);
smo114938v0ar.push(smo114921);
const smo114922 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo114922.setAttribute('id', 'smo114922');
smo114938v0ar.push(smo114922);
smo114938v0.addTickables(smo114938v0ar)
fmtsmo11493816.joinVoices([smo114938v0]);
const fmtsmo11736516 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo117365v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo117365v0ar = [];
const smo117345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo117345.setAttribute('id', 'smo117345');
smo117365v0ar.push(smo117345);
const smo117346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo117346.setAttribute('id', 'smo117346');
smo117365v0ar.push(smo117346);
const smo117347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo117347.setAttribute('id', 'smo117347');
smo117365v0ar.push(smo117347);
const smo117348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo117348.setAttribute('id', 'smo117348');
const smo1173480acc = new VF.Accidental('n');
smo117348.addModifier(smo1173480acc, 0);
smo117365v0ar.push(smo117348);
const smo117349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo117349.setAttribute('id', 'smo117349');
const smo1173490acc = new VF.Accidental('b');
smo117349.addModifier(smo1173490acc, 0);
smo117365v0ar.push(smo117349);
smo117365v0.addTickables(smo117365v0ar)
fmtsmo11736516.joinVoices([smo117365v0]);
const fmtsmo11978116 = new VF.Formatter();
//
// voices and notes for stave 2 16
const smo119781v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo119781v0ar = [];
const smo119761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo119761.setAttribute('id', 'smo119761');
smo119781v0ar.push(smo119761);
const smo119762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo119762.setAttribute('id', 'smo119762');
smo119781v0ar.push(smo119762);
const smo119763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo119763.setAttribute('id', 'smo119763');
smo119781v0ar.push(smo119763);
const smo119764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo119764.setAttribute('id', 'smo119764');
const smo1197640acc = new VF.Accidental('n');
smo119764.addModifier(smo1197640acc, 0);
smo119781v0ar.push(smo119764);
const smo119765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["ab/4/n"]}'))
smo119765.setAttribute('id', 'smo119765');
const smo1197650acc = new VF.Accidental('b');
smo119765.addModifier(smo1197650acc, 0);
smo119781v0ar.push(smo119765);
smo119781v0.addTickables(smo119781v0ar)
fmtsmo11978116.joinVoices([smo119781v0]);
const fmtsmo12215516 = new VF.Formatter();
//
// voices and notes for stave 3 16
const smo122155v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo122155v0ar = [];
const smo122135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo122135.setAttribute('id', 'smo122135');
smo122155v0ar.push(smo122135);
const smo122136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo122136.setAttribute('id', 'smo122136');
smo122155v0ar.push(smo122136);
const smo122137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo122137.setAttribute('id', 'smo122137');
smo122155v0ar.push(smo122137);
const smo122138 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo122138.setAttribute('id', 'smo122138');
const smo1221380acc = new VF.Accidental('n');
smo122138.addModifier(smo1221380acc, 0);
smo122155v0ar.push(smo122138);
const smo122139 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo122139.setAttribute('id', 'smo122139');
const smo1221390acc = new VF.Accidental('#');
smo122139.addModifier(smo1221390acc, 0);
smo122155v0ar.push(smo122139);
smo122155v0.addTickables(smo122155v0ar)
fmtsmo12215516.joinVoices([smo122155v0]);
const fmtsmo12450616 = new VF.Formatter();
//
// voices and notes for stave 4 16
const smo124506v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo124506v0ar = [];
const smo124487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo124487.setAttribute('id', 'smo124487');
smo124506v0ar.push(smo124487);
const smo124488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo124488.setAttribute('id', 'smo124488');
smo124506v0ar.push(smo124488);
const smo124489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo124489.setAttribute('id', 'smo124489');
smo124506v0ar.push(smo124489);
const smo124490 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["a#/4/n"]}'))
smo124490.setAttribute('id', 'smo124490');
const smo1244900acc = new VF.Accidental('#');
smo124490.addModifier(smo1244900acc, 0);
smo124506v0ar.push(smo124490);
smo124506v0.addTickables(smo124506v0ar)
fmtsmo12450616.joinVoices([smo124506v0]);
const fmtsmo12681316 = new VF.Formatter();
//
// voices and notes for stave 5 16
const smo126813v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo126813v0ar = [];
const smo126793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo126793.setAttribute('id', 'smo126793');
smo126813v0ar.push(smo126793);
const smo126794 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo126794.setAttribute('id', 'smo126794');
smo126813v0ar.push(smo126794);
const smo126795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo126795.setAttribute('id', 'smo126795');
smo126813v0ar.push(smo126795);
const smo126796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo126796.setAttribute('id', 'smo126796');
smo126813v0ar.push(smo126796);
const smo126797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo126797.setAttribute('id', 'smo126797');
smo126813v0ar.push(smo126797);
smo126813v0.addTickables(smo126813v0ar)
fmtsmo12681316.joinVoices([smo126813v0]);
const fmtsmo12921916 = new VF.Formatter();
//
// voices and notes for stave 6 16
const smo129219v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo129219v0ar = [];
const smo129199 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo129199.setAttribute('id', 'smo129199');
smo129219v0ar.push(smo129199);
const smo129200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo129200.setAttribute('id', 'smo129200');
smo129219v0ar.push(smo129200);
const smo129201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo129201.setAttribute('id', 'smo129201');
smo129219v0ar.push(smo129201);
const smo129202 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo129202.setAttribute('id', 'smo129202');
const smo1292020acc = new VF.Accidental('b');
smo129202.addModifier(smo1292020acc, 0);
smo129219v0ar.push(smo129202);
const smo129203 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["db/4/n"]}'))
smo129203.setAttribute('id', 'smo129203');
const smo1292030acc = new VF.Accidental('b');
smo129203.addModifier(smo1292030acc, 0);
smo129219v0ar.push(smo129203);
smo129219v0.addTickables(smo129219v0ar)
fmtsmo12921916.joinVoices([smo129219v0]);
const fmtsmo13154616 = new VF.Formatter();
//
// voices and notes for stave 7 16
const smo131546v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo131546v0ar = [];
const smo131530 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo131530.setAttribute('id', 'smo131530');
smo131546v0ar.push(smo131530);
smo131546v0.addTickables(smo131546v0ar)
fmtsmo13154616.joinVoices([smo131546v0]);
const fmtsmo13389616 = new VF.Formatter();
//
// voices and notes for stave 8 16
const smo133896v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo133896v0ar = [];
const smo133880 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo133880.setAttribute('id', 'smo133880');
smo133896v0ar.push(smo133880);
smo133896v0.addTickables(smo133896v0ar)
fmtsmo13389616.joinVoices([smo133896v0]);
const fmtsmo13631816 = new VF.Formatter();
//
// voices and notes for stave 9 16
const smo136318v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo136318v0ar = [];
const smo136298 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo136298.setAttribute('id', 'smo136298');
smo136318v0ar.push(smo136298);
const smo136299 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo136299.setAttribute('id', 'smo136299');
smo136318v0ar.push(smo136299);
const smo136300 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo136300.setAttribute('id', 'smo136300');
smo136318v0ar.push(smo136300);
const smo136301 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["ab/3/n"]}'))
smo136301.setAttribute('id', 'smo136301');
const smo1363010acc = new VF.Accidental('b');
smo136301.addModifier(smo1363010acc, 0);
smo136318v0ar.push(smo136301);
const smo136302 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo136302.setAttribute('id', 'smo136302');
smo136318v0ar.push(smo136302);
smo136318v0.addTickables(smo136318v0ar)
fmtsmo13631816.joinVoices([smo136318v0]);
const fmtsmo13869116 = new VF.Formatter();
//
// voices and notes for stave 10 16
const smo138691v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo138691v0ar = [];
const smo138671 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo138671.setAttribute('id', 'smo138671');
smo138691v0ar.push(smo138671);
const smo138672 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo138672.setAttribute('id', 'smo138672');
smo138691v0ar.push(smo138672);
const smo138673 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo138673.setAttribute('id', 'smo138673');
smo138691v0ar.push(smo138673);
const smo138674 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo138674.setAttribute('id', 'smo138674');
smo138691v0ar.push(smo138674);
const smo138675 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo138675.setAttribute('id', 'smo138675');
smo138691v0ar.push(smo138675);
smo138691v0.addTickables(smo138691v0ar)
fmtsmo13869116.joinVoices([smo138691v0]);
const fmtsmo14103716 = new VF.Formatter();
//
// voices and notes for stave 11 16
const smo141037v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo141037v0ar = [];
const smo141017 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo141017.setAttribute('id', 'smo141017');
smo141037v0ar.push(smo141017);
const smo141018 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo141018.setAttribute('id', 'smo141018');
smo141037v0ar.push(smo141018);
const smo141019 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo141019.setAttribute('id', 'smo141019');
smo141037v0ar.push(smo141019);
const smo141020 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["eb/3/n"]}'))
smo141020.setAttribute('id', 'smo141020');
const smo1410200acc = new VF.Accidental('b');
smo141020.addModifier(smo1410200acc, 0);
smo141037v0ar.push(smo141020);
const smo141021 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo141021.setAttribute('id', 'smo141021');
const smo1410210acc = new VF.Accidental('n');
smo141021.addModifier(smo1410210acc, 0);
smo141037v0ar.push(smo141021);
smo141037v0.addTickables(smo141037v0ar)
fmtsmo14103716.joinVoices([smo141037v0]);
const fmtsmo14336516 = new VF.Formatter();
//
// voices and notes for stave 12 16
const smo143365v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo143365v0ar = [];
const smo143346 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo143346.setAttribute('id', 'smo143346');
smo143365v0ar.push(smo143346);
const smo143347 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo143347.setAttribute('id', 'smo143347');
smo143365v0ar.push(smo143347);
const smo143348 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n"]}'))
smo143348.setAttribute('id', 'smo143348');
smo143365v0ar.push(smo143348);
const smo143349 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["c#/3/n"]}'))
smo143349.setAttribute('id', 'smo143349');
const smo1433490acc = new VF.Accidental('#');
smo143349.addModifier(smo1433490acc, 0);
smo143365v0ar.push(smo143349);
smo143365v0.addTickables(smo143365v0ar)
fmtsmo14336516.joinVoices([smo143365v0]);
const fmtsmo14569916 = new VF.Formatter();
//
// voices and notes for stave 13 16
const smo145699v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo145699v0ar = [];
const smo145679 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo145679.setAttribute('id', 'smo145679');
smo145699v0ar.push(smo145679);
const smo145680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo145680.setAttribute('id', 'smo145680');
smo145699v0ar.push(smo145680);
const smo145681 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo145681.setAttribute('id', 'smo145681');
smo145699v0ar.push(smo145681);
const smo145682 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo145682.setAttribute('id', 'smo145682');
smo145699v0ar.push(smo145682);
const smo145683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo145683.setAttribute('id', 'smo145683');
smo145699v0ar.push(smo145683);
smo145699v0.addTickables(smo145699v0ar)
fmtsmo14569916.joinVoices([smo145699v0]);
const fmtsmo14812516 = new VF.Formatter();
//
// voices and notes for stave 14 16
const smo148125v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo148125v0ar = [];
const smo148109 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo148109.setAttribute('id', 'smo148109');
smo148125v0ar.push(smo148109);
smo148125v0.addTickables(smo148125v0ar)
fmtsmo14812516.joinVoices([smo148125v0]);
const fmtsmo15064316 = new VF.Formatter();
//
// voices and notes for stave 15 16
const smo150643v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo150643v0ar = [];
const smo150624 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo150624.setAttribute('id', 'smo150624');
smo150643v0ar.push(smo150624);
const smo150625 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo150625.setAttribute('id', 'smo150625');
smo150643v0ar.push(smo150625);
const smo150626 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo150626.setAttribute('id', 'smo150626');
smo150643v0ar.push(smo150626);
const smo150627 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["c#/4/n"]}'))
smo150627.setAttribute('id', 'smo150627');
const smo1506270acc = new VF.Accidental('#');
smo150627.addModifier(smo1506270acc, 0);
smo150643v0ar.push(smo150627);
smo150643v0.addTickables(smo150643v0ar)
fmtsmo15064316.joinVoices([smo150643v0]);
const fmtsmo15310216 = new VF.Formatter();
//
// voices and notes for stave 16 16
const smo153102v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo153102v0ar = [];
const smo153082 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo153082.setAttribute('id', 'smo153082');
smo153102v0ar.push(smo153082);
const smo153083 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153083.setAttribute('id', 'smo153083');
const smo1530830acc = new VF.Accidental('n');
smo153083.addModifier(smo1530830acc, 0);
smo153102v0ar.push(smo153083);
const smo153084 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153084.setAttribute('id', 'smo153084');
smo153102v0ar.push(smo153084);
const smo153085 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153085.setAttribute('id', 'smo153085');
smo153102v0ar.push(smo153085);
const smo153086 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153086.setAttribute('id', 'smo153086');
smo153102v0ar.push(smo153086);
smo153102v0.addTickables(smo153102v0ar)
fmtsmo15310216.joinVoices([smo153102v0]);
// create beam groups and tuplets for format grp smo155376 before formatting
const dirsmo221714 = smo114918.getStemDirection();
smo114918.setStemDirection(dirsmo221714);
smo114919.setStemDirection(dirsmo221714);
const smo221714 = new VF.Beam([smo114918,smo114919]);
const dirsmo221716 = smo117345.getStemDirection();
smo117345.setStemDirection(dirsmo221716);
smo117346.setStemDirection(dirsmo221716);
const smo221716 = new VF.Beam([smo117345,smo117346]);
const dirsmo221718 = smo119761.getStemDirection();
smo119761.setStemDirection(dirsmo221718);
smo119762.setStemDirection(dirsmo221718);
const smo221718 = new VF.Beam([smo119761,smo119762]);
const dirsmo221720 = smo122135.getStemDirection();
smo122135.setStemDirection(dirsmo221720);
smo122136.setStemDirection(dirsmo221720);
const smo221720 = new VF.Beam([smo122135,smo122136]);
 
// formatting measures in staff group smo155376
fmtsmo11493816.format([smo114938v0,smo117365v0,smo119781v0,smo122155v0,smo124506v0], 140);
const stavesmo114938 = new VF.Stave(1331, 183.2253035909339, 155);
stavesmo114938.setAttribute('id', 'stavesmo114938');
stavesmo114938.setBegBarType(VF.Barline.type.NONE);
stavesmo114938.setEndBarType(2);
stavesmo114938.setContext(context);
stavesmo114938.draw();
smo114938v0.draw(context, stavesmo114938);
smo221714.setContext(context);
smo221714.draw();
const stavesmo117365 = new VF.Stave(1331, 288.2253035909339, 155);
stavesmo117365.setAttribute('id', 'stavesmo117365');
stavesmo117365.setBegBarType(VF.Barline.type.NONE);
stavesmo117365.setEndBarType(2);
stavesmo117365.setContext(context);
stavesmo117365.draw();
smo117365v0.draw(context, stavesmo117365);
smo221716.setContext(context);
smo221716.draw();
const stavesmo119781 = new VF.Stave(1331, 379.2253035909339, 155);
stavesmo119781.setAttribute('id', 'stavesmo119781');
stavesmo119781.setBegBarType(VF.Barline.type.NONE);
stavesmo119781.setEndBarType(2);
stavesmo119781.setContext(context);
stavesmo119781.draw();
smo119781v0.draw(context, stavesmo119781);
smo221718.setContext(context);
smo221718.draw();
const stavesmo122155 = new VF.Stave(1331, 479.2253035909339, 155);
stavesmo122155.setAttribute('id', 'stavesmo122155');
stavesmo122155.setBegBarType(VF.Barline.type.NONE);
stavesmo122155.setEndBarType(2);
stavesmo122155.setContext(context);
stavesmo122155.draw();
smo122155v0.draw(context, stavesmo122155);
smo221720.setContext(context);
smo221720.draw();
const stavesmo124506 = new VF.Stave(1331, 549.2253035909339, 155);
stavesmo124506.setAttribute('id', 'stavesmo124506');
stavesmo124506.setBegBarType(VF.Barline.type.NONE);
stavesmo124506.setEndBarType(2);
stavesmo124506.setContext(context);
stavesmo124506.draw();
smo124506v0.draw(context, stavesmo124506);
// create beam groups and tuplets for format grp smo155378 before formatting
const dirsmo221723 = smo126793.getStemDirection();
smo126793.setStemDirection(dirsmo221723);
smo126794.setStemDirection(dirsmo221723);
const smo221723 = new VF.Beam([smo126793,smo126794]);
const dirsmo221725 = smo129199.getStemDirection();
smo129199.setStemDirection(dirsmo221725);
smo129200.setStemDirection(dirsmo221725);
const smo221725 = new VF.Beam([smo129199,smo129200]);
 
// formatting measures in staff group smo155378
fmtsmo12681316.format([smo126813v0,smo129219v0,smo131546v0,smo133896v0], 140);
const stavesmo126813 = new VF.Stave(1331, 630.2253035909339, 155);
stavesmo126813.setAttribute('id', 'stavesmo126813');
stavesmo126813.setBegBarType(VF.Barline.type.NONE);
stavesmo126813.setEndBarType(2);
stavesmo126813.setContext(context);
stavesmo126813.draw();
smo126813v0.draw(context, stavesmo126813);
smo221723.setContext(context);
smo221723.draw();
const stavesmo129219 = new VF.Stave(1331, 700.2253035909339, 155);
stavesmo129219.setAttribute('id', 'stavesmo129219');
stavesmo129219.setBegBarType(VF.Barline.type.NONE);
stavesmo129219.setEndBarType(2);
stavesmo129219.setContext(context);
stavesmo129219.draw();
smo129219v0.draw(context, stavesmo129219);
smo221725.setContext(context);
smo221725.draw();
const stavesmo131546 = new VF.Stave(1331, 761.2253035909339, 155);
stavesmo131546.setAttribute('id', 'stavesmo131546');
stavesmo131546.setBegBarType(VF.Barline.type.NONE);
stavesmo131546.setEndBarType(2);
stavesmo131546.setContext(context);
stavesmo131546.draw();
smo131546v0.draw(context, stavesmo131546);
const stavesmo133896 = new VF.Stave(1331, 831.2253035909339, 155);
stavesmo133896.setAttribute('id', 'stavesmo133896');
stavesmo133896.setBegBarType(VF.Barline.type.NONE);
stavesmo133896.setEndBarType(2);
stavesmo133896.setContext(context);
stavesmo133896.draw();
smo133896v0.draw(context, stavesmo133896);
// create beam groups and tuplets for format grp smo155380 before formatting
const dirsmo221729 = smo136298.getStemDirection();
smo136298.setStemDirection(dirsmo221729);
smo136299.setStemDirection(dirsmo221729);
const smo221729 = new VF.Beam([smo136298,smo136299]);
const dirsmo221731 = smo138671.getStemDirection();
smo138671.setStemDirection(dirsmo221731);
smo138672.setStemDirection(dirsmo221731);
const smo221731 = new VF.Beam([smo138671,smo138672]);
const dirsmo221733 = smo141017.getStemDirection();
smo141017.setStemDirection(dirsmo221733);
smo141018.setStemDirection(dirsmo221733);
const smo221733 = new VF.Beam([smo141017,smo141018]);
 
// formatting measures in staff group smo155380
fmtsmo13631816.format([smo136318v0,smo138691v0,smo141037v0,smo143365v0], 140);
const stavesmo136318 = new VF.Stave(1331, 936.2253035909339, 155);
stavesmo136318.setAttribute('id', 'stavesmo136318');
stavesmo136318.setBegBarType(VF.Barline.type.NONE);
stavesmo136318.setEndBarType(2);
stavesmo136318.setContext(context);
stavesmo136318.draw();
smo136318v0.draw(context, stavesmo136318);
smo221729.setContext(context);
smo221729.draw();
const stavesmo138691 = new VF.Stave(1331, 1023.2253035909339, 155);
stavesmo138691.setAttribute('id', 'stavesmo138691');
stavesmo138691.setBegBarType(VF.Barline.type.NONE);
stavesmo138691.setEndBarType(2);
stavesmo138691.setContext(context);
stavesmo138691.draw();
smo138691v0.draw(context, stavesmo138691);
smo221731.setContext(context);
smo221731.draw();
const stavesmo141037 = new VF.Stave(1331, 1128.225303590934, 155);
stavesmo141037.setAttribute('id', 'stavesmo141037');
stavesmo141037.setBegBarType(VF.Barline.type.NONE);
stavesmo141037.setEndBarType(2);
stavesmo141037.setContext(context);
stavesmo141037.draw();
smo141037v0.draw(context, stavesmo141037);
smo221733.setContext(context);
smo221733.draw();
const stavesmo143365 = new VF.Stave(1331, 1213.225303590934, 155);
stavesmo143365.setAttribute('id', 'stavesmo143365');
stavesmo143365.setBegBarType(VF.Barline.type.NONE);
stavesmo143365.setEndBarType(2);
stavesmo143365.setContext(context);
stavesmo143365.draw();
smo143365v0.draw(context, stavesmo143365);
// create beam groups and tuplets for format grp smo147831 before formatting
const dirsmo221736 = smo145679.getStemDirection();
smo145679.setStemDirection(dirsmo221736);
smo145680.setStemDirection(dirsmo221736);
const smo221736 = new VF.Beam([smo145679,smo145680]);
 
// formatting measures in staff group smo147831
fmtsmo14569916.format([smo145699v0], 140);
const stavesmo145699 = new VF.Stave(1331, 1290.225303590934, 155);
stavesmo145699.setAttribute('id', 'stavesmo145699');
stavesmo145699.setBegBarType(VF.Barline.type.NONE);
stavesmo145699.setEndBarType(2);
stavesmo145699.setContext(context);
stavesmo145699.draw();
smo145699v0.draw(context, stavesmo145699);
smo221736.setContext(context);
smo221736.draw();
// create beam groups and tuplets for format grp smo150299 before formatting
 
// formatting measures in staff group smo150299
fmtsmo14812516.format([smo148125v0], 140);
const stavesmo148125 = new VF.Stave(1331, 1373.225303590934, 155);
stavesmo148125.setAttribute('id', 'stavesmo148125');
stavesmo148125.setBegBarType(VF.Barline.type.NONE);
stavesmo148125.setEndBarType(2);
stavesmo148125.setContext(context);
stavesmo148125.draw();
smo148125v0.draw(context, stavesmo148125);
// create beam groups and tuplets for format grp smo152657 before formatting
 
// formatting measures in staff group smo152657
fmtsmo15064316.format([smo150643v0], 140);
const stavesmo150643 = new VF.Stave(1331, 1478.225303590934, 155);
stavesmo150643.setAttribute('id', 'stavesmo150643');
stavesmo150643.setBegBarType(VF.Barline.type.NONE);
stavesmo150643.setEndBarType(2);
stavesmo150643.setContext(context);
stavesmo150643.draw();
smo150643v0.draw(context, stavesmo150643);
// create beam groups and tuplets for format grp smo155370 before formatting
 
// formatting measures in staff group smo155370
fmtsmo15310216.format([smo153102v0], 140);
const stavesmo153102 = new VF.Stave(1331, 1555.225303590934, 155);
stavesmo153102.setAttribute('id', 'stavesmo153102');
stavesmo153102.setBegBarType(VF.Barline.type.NONE);
stavesmo153102.setEndBarType(2);
stavesmo153102.setContext(context);
stavesmo153102.draw();
smo153102v0.draw(context, stavesmo153102);
const fmtsmo11495517 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo114955v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo114955v0ar = [];
const smo114939 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo114939.setAttribute('id', 'smo114939');
smo114955v0ar.push(smo114939);
smo114955v0.addTickables(smo114955v0ar)
fmtsmo11495517.joinVoices([smo114955v0]);
const fmtsmo11738217 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo117382v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo117382v0ar = [];
const smo117366 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo117366.setAttribute('id', 'smo117366');
smo117382v0ar.push(smo117366);
smo117382v0.addTickables(smo117382v0ar)
fmtsmo11738217.joinVoices([smo117382v0]);
const fmtsmo11979817 = new VF.Formatter();
//
// voices and notes for stave 2 17
const smo119798v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo119798v0ar = [];
const smo119782 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo119782.setAttribute('id', 'smo119782');
smo119798v0ar.push(smo119782);
smo119798v0.addTickables(smo119798v0ar)
fmtsmo11979817.joinVoices([smo119798v0]);
const fmtsmo12217217 = new VF.Formatter();
//
// voices and notes for stave 3 17
const smo122172v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo122172v0ar = [];
const smo122156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo122156.setAttribute('id', 'smo122156');
smo122172v0ar.push(smo122156);
smo122172v0.addTickables(smo122172v0ar)
fmtsmo12217217.joinVoices([smo122172v0]);
const fmtsmo12452317 = new VF.Formatter();
//
// voices and notes for stave 4 17
const smo124523v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo124523v0ar = [];
const smo124507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo124507.setAttribute('id', 'smo124507');
smo124523v0ar.push(smo124507);
smo124523v0.addTickables(smo124523v0ar)
fmtsmo12452317.joinVoices([smo124523v0]);
const fmtsmo12683017 = new VF.Formatter();
//
// voices and notes for stave 5 17
const smo126830v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo126830v0ar = [];
const smo126814 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo126814.setAttribute('id', 'smo126814');
smo126830v0ar.push(smo126814);
smo126830v0.addTickables(smo126830v0ar)
fmtsmo12683017.joinVoices([smo126830v0]);
const fmtsmo12923617 = new VF.Formatter();
//
// voices and notes for stave 6 17
const smo129236v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo129236v0ar = [];
const smo129220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo129220.setAttribute('id', 'smo129220');
smo129236v0ar.push(smo129220);
smo129236v0.addTickables(smo129236v0ar)
fmtsmo12923617.joinVoices([smo129236v0]);
const fmtsmo13156317 = new VF.Formatter();
//
// voices and notes for stave 7 17
const smo131563v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo131563v0ar = [];
const smo131547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo131547.setAttribute('id', 'smo131547');
smo131563v0ar.push(smo131547);
smo131563v0.addTickables(smo131563v0ar)
fmtsmo13156317.joinVoices([smo131563v0]);
const fmtsmo13391317 = new VF.Formatter();
//
// voices and notes for stave 8 17
const smo133913v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo133913v0ar = [];
const smo133897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo133897.setAttribute('id', 'smo133897');
smo133913v0ar.push(smo133897);
smo133913v0.addTickables(smo133913v0ar)
fmtsmo13391317.joinVoices([smo133913v0]);
const fmtsmo13633517 = new VF.Formatter();
//
// voices and notes for stave 9 17
const smo136335v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo136335v0ar = [];
const smo136319 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo136319.setAttribute('id', 'smo136319');
smo136335v0ar.push(smo136319);
smo136335v0.addTickables(smo136335v0ar)
fmtsmo13633517.joinVoices([smo136335v0]);
const fmtsmo13870817 = new VF.Formatter();
//
// voices and notes for stave 10 17
const smo138708v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo138708v0ar = [];
const smo138692 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo138692.setAttribute('id', 'smo138692');
smo138708v0ar.push(smo138692);
smo138708v0.addTickables(smo138708v0ar)
fmtsmo13870817.joinVoices([smo138708v0]);
const fmtsmo14105417 = new VF.Formatter();
//
// voices and notes for stave 11 17
const smo141054v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo141054v0ar = [];
const smo141038 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo141038.setAttribute('id', 'smo141038');
smo141054v0ar.push(smo141038);
smo141054v0.addTickables(smo141054v0ar)
fmtsmo14105417.joinVoices([smo141054v0]);
const fmtsmo14338217 = new VF.Formatter();
//
// voices and notes for stave 12 17
const smo143382v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo143382v0ar = [];
const smo143366 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo143366.setAttribute('id', 'smo143366');
smo143382v0ar.push(smo143366);
smo143382v0.addTickables(smo143382v0ar)
fmtsmo14338217.joinVoices([smo143382v0]);
const fmtsmo14571617 = new VF.Formatter();
//
// voices and notes for stave 13 17
const smo145716v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo145716v0ar = [];
const smo145700 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo145700.setAttribute('id', 'smo145700');
smo145716v0ar.push(smo145700);
smo145716v0.addTickables(smo145716v0ar)
fmtsmo14571617.joinVoices([smo145716v0]);
const fmtsmo14814217 = new VF.Formatter();
//
// voices and notes for stave 14 17
const smo148142v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo148142v0ar = [];
const smo148126 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo148126.setAttribute('id', 'smo148126');
smo148142v0ar.push(smo148126);
smo148142v0.addTickables(smo148142v0ar)
fmtsmo14814217.joinVoices([smo148142v0]);
const fmtsmo15066217 = new VF.Formatter();
//
// voices and notes for stave 15 17
const smo150662v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo150662v0ar = [];
const smo150644 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo150644.setAttribute('id', 'smo150644');
smo150662v0ar.push(smo150644);
const smo150645 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo150645.setAttribute('id', 'smo150645');
smo150662v0ar.push(smo150645);
const smo150646 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo150646.setAttribute('id', 'smo150646');
smo150662v0ar.push(smo150646);
smo150662v0.addTickables(smo150662v0ar)
fmtsmo15066217.joinVoices([smo150662v0]);
const fmtsmo15312217 = new VF.Formatter();
//
// voices and notes for stave 16 17
const smo153122v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo153122v0ar = [];
const smo153103 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153103.setAttribute('id', 'smo153103');
const smo1531030acc = new VF.Accidental('n');
smo153103.addModifier(smo1531030acc, 0);
smo153122v0ar.push(smo153103);
const smo153104 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153104.setAttribute('id', 'smo153104');
smo153122v0ar.push(smo153104);
const smo153105 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153105.setAttribute('id', 'smo153105');
smo153122v0ar.push(smo153105);
const smo153106 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153106.setAttribute('id', 'smo153106');
smo153122v0ar.push(smo153106);
smo153122v0.addTickables(smo153122v0ar)
fmtsmo15312217.joinVoices([smo153122v0]);
// create beam groups and tuplets for format grp smo155376 before formatting
 
// formatting measures in staff group smo155376
fmtsmo11495517.format([smo114955v0,smo117382v0,smo119798v0,smo122172v0,smo124523v0], 108);
const stavesmo114955 = new VF.Stave(1486, 183.2253035909339, 146);
stavesmo114955.setAttribute('id', 'stavesmo114955');
stavesmo114955.setBegBarType(VF.Barline.type.NONE);
stavesmo114955.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":256}'), -1 * 0);
stavesmo114955.addTimeSignature('2/2');
stavesmo114955.setContext(context);
stavesmo114955.draw();
smo114955v0.draw(context, stavesmo114955);
const stavesmo117382 = new VF.Stave(1486, 288.2253035909339, 146);
stavesmo117382.setAttribute('id', 'stavesmo117382');
stavesmo117382.setBegBarType(VF.Barline.type.NONE);
stavesmo117382.addTimeSignature('2/2');
stavesmo117382.setContext(context);
stavesmo117382.draw();
smo117382v0.draw(context, stavesmo117382);
const stavesmo119798 = new VF.Stave(1486, 379.2253035909339, 146);
stavesmo119798.setAttribute('id', 'stavesmo119798');
stavesmo119798.setBegBarType(VF.Barline.type.NONE);
stavesmo119798.addTimeSignature('2/2');
stavesmo119798.setContext(context);
stavesmo119798.draw();
smo119798v0.draw(context, stavesmo119798);
const stavesmo122172 = new VF.Stave(1486, 479.2253035909339, 146);
stavesmo122172.setAttribute('id', 'stavesmo122172');
stavesmo122172.setBegBarType(VF.Barline.type.NONE);
stavesmo122172.addTimeSignature('2/2');
stavesmo122172.setContext(context);
stavesmo122172.draw();
smo122172v0.draw(context, stavesmo122172);
const stavesmo124523 = new VF.Stave(1486, 549.2253035909339, 146);
stavesmo124523.setAttribute('id', 'stavesmo124523');
stavesmo124523.setBegBarType(VF.Barline.type.NONE);
stavesmo124523.addTimeSignature('2/2');
stavesmo124523.setContext(context);
stavesmo124523.draw();
smo124523v0.draw(context, stavesmo124523);
// create beam groups and tuplets for format grp smo155378 before formatting
 
// formatting measures in staff group smo155378
fmtsmo12683017.format([smo126830v0,smo129236v0,smo131563v0,smo133913v0], 108);
const stavesmo126830 = new VF.Stave(1486, 630.2253035909339, 146);
stavesmo126830.setAttribute('id', 'stavesmo126830');
stavesmo126830.setBegBarType(VF.Barline.type.NONE);
stavesmo126830.addTimeSignature('2/2');
stavesmo126830.setContext(context);
stavesmo126830.draw();
smo126830v0.draw(context, stavesmo126830);
const stavesmo129236 = new VF.Stave(1486, 700.2253035909339, 146);
stavesmo129236.setAttribute('id', 'stavesmo129236');
stavesmo129236.setBegBarType(VF.Barline.type.NONE);
stavesmo129236.addTimeSignature('2/2');
stavesmo129236.setContext(context);
stavesmo129236.draw();
smo129236v0.draw(context, stavesmo129236);
const stavesmo131563 = new VF.Stave(1486, 761.2253035909339, 146);
stavesmo131563.setAttribute('id', 'stavesmo131563');
stavesmo131563.setBegBarType(VF.Barline.type.NONE);
stavesmo131563.addTimeSignature('2/2');
stavesmo131563.setContext(context);
stavesmo131563.draw();
smo131563v0.draw(context, stavesmo131563);
const stavesmo133913 = new VF.Stave(1486, 831.2253035909339, 146);
stavesmo133913.setAttribute('id', 'stavesmo133913');
stavesmo133913.setBegBarType(VF.Barline.type.NONE);
stavesmo133913.addTimeSignature('2/2');
stavesmo133913.setContext(context);
stavesmo133913.draw();
smo133913v0.draw(context, stavesmo133913);
// create beam groups and tuplets for format grp smo155380 before formatting
 
// formatting measures in staff group smo155380
fmtsmo13633517.format([smo136335v0,smo138708v0,smo141054v0,smo143382v0], 108);
const stavesmo136335 = new VF.Stave(1486, 936.2253035909339, 146);
stavesmo136335.setAttribute('id', 'stavesmo136335');
stavesmo136335.setBegBarType(VF.Barline.type.NONE);
stavesmo136335.addTimeSignature('2/2');
stavesmo136335.setContext(context);
stavesmo136335.draw();
smo136335v0.draw(context, stavesmo136335);
const stavesmo138708 = new VF.Stave(1486, 1023.2253035909339, 146);
stavesmo138708.setAttribute('id', 'stavesmo138708');
stavesmo138708.setBegBarType(VF.Barline.type.NONE);
stavesmo138708.addTimeSignature('2/2');
stavesmo138708.setContext(context);
stavesmo138708.draw();
smo138708v0.draw(context, stavesmo138708);
const stavesmo141054 = new VF.Stave(1486, 1128.225303590934, 146);
stavesmo141054.setAttribute('id', 'stavesmo141054');
stavesmo141054.setBegBarType(VF.Barline.type.NONE);
stavesmo141054.addTimeSignature('2/2');
stavesmo141054.setContext(context);
stavesmo141054.draw();
smo141054v0.draw(context, stavesmo141054);
const stavesmo143382 = new VF.Stave(1486, 1213.225303590934, 146);
stavesmo143382.setAttribute('id', 'stavesmo143382');
stavesmo143382.setBegBarType(VF.Barline.type.NONE);
stavesmo143382.addTimeSignature('2/2');
stavesmo143382.setContext(context);
stavesmo143382.draw();
smo143382v0.draw(context, stavesmo143382);
// create beam groups and tuplets for format grp smo147831 before formatting
 
// formatting measures in staff group smo147831
fmtsmo14571617.format([smo145716v0], 108);
const stavesmo145716 = new VF.Stave(1486, 1290.225303590934, 146);
stavesmo145716.setAttribute('id', 'stavesmo145716');
stavesmo145716.setBegBarType(VF.Barline.type.NONE);
stavesmo145716.addTimeSignature('2/2');
stavesmo145716.setContext(context);
stavesmo145716.draw();
smo145716v0.draw(context, stavesmo145716);
// create beam groups and tuplets for format grp smo150299 before formatting
 
// formatting measures in staff group smo150299
fmtsmo14814217.format([smo148142v0], 108);
const stavesmo148142 = new VF.Stave(1486, 1373.225303590934, 146);
stavesmo148142.setAttribute('id', 'stavesmo148142');
stavesmo148142.setBegBarType(VF.Barline.type.NONE);
stavesmo148142.addTimeSignature('2/2');
stavesmo148142.setContext(context);
stavesmo148142.draw();
smo148142v0.draw(context, stavesmo148142);
// create beam groups and tuplets for format grp smo152657 before formatting
 
// formatting measures in staff group smo152657
fmtsmo15066217.format([smo150662v0], 108);
const stavesmo150662 = new VF.Stave(1486, 1478.225303590934, 146);
stavesmo150662.setAttribute('id', 'stavesmo150662');
stavesmo150662.setBegBarType(VF.Barline.type.NONE);
stavesmo150662.addTimeSignature('2/2');
stavesmo150662.setContext(context);
stavesmo150662.draw();
smo150662v0.draw(context, stavesmo150662);
// create beam groups and tuplets for format grp smo155370 before formatting
 
// formatting measures in staff group smo155370
fmtsmo15312217.format([smo153122v0], 108);
const stavesmo153122 = new VF.Stave(1486, 1555.225303590934, 146);
stavesmo153122.setAttribute('id', 'stavesmo153122');
stavesmo153122.setBegBarType(VF.Barline.type.NONE);
stavesmo153122.addTimeSignature('2/2');
stavesmo153122.setContext(context);
stavesmo153122.draw();
smo153122v0.draw(context, stavesmo153122);
const fmtsmo11497218 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo114972v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo114972v0ar = [];
const smo114956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo114956.setAttribute('id', 'smo114956');
smo114972v0ar.push(smo114956);
smo114972v0.addTickables(smo114972v0ar)
fmtsmo11497218.joinVoices([smo114972v0]);
const fmtsmo11739918 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo117399v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo117399v0ar = [];
const smo117383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo117383.setAttribute('id', 'smo117383');
smo117399v0ar.push(smo117383);
smo117399v0.addTickables(smo117399v0ar)
fmtsmo11739918.joinVoices([smo117399v0]);
const fmtsmo11981518 = new VF.Formatter();
//
// voices and notes for stave 2 18
const smo119815v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo119815v0ar = [];
const smo119799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo119799.setAttribute('id', 'smo119799');
smo119815v0ar.push(smo119799);
smo119815v0.addTickables(smo119815v0ar)
fmtsmo11981518.joinVoices([smo119815v0]);
const fmtsmo12218918 = new VF.Formatter();
//
// voices and notes for stave 3 18
const smo122189v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo122189v0ar = [];
const smo122173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo122173.setAttribute('id', 'smo122173');
smo122189v0ar.push(smo122173);
smo122189v0.addTickables(smo122189v0ar)
fmtsmo12218918.joinVoices([smo122189v0]);
const fmtsmo12454018 = new VF.Formatter();
//
// voices and notes for stave 4 18
const smo124540v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo124540v0ar = [];
const smo124524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo124524.setAttribute('id', 'smo124524');
smo124540v0ar.push(smo124524);
smo124540v0.addTickables(smo124540v0ar)
fmtsmo12454018.joinVoices([smo124540v0]);
const fmtsmo12684718 = new VF.Formatter();
//
// voices and notes for stave 5 18
const smo126847v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo126847v0ar = [];
const smo126831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo126831.setAttribute('id', 'smo126831');
smo126847v0ar.push(smo126831);
smo126847v0.addTickables(smo126847v0ar)
fmtsmo12684718.joinVoices([smo126847v0]);
const fmtsmo12925318 = new VF.Formatter();
//
// voices and notes for stave 6 18
const smo129253v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo129253v0ar = [];
const smo129237 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo129237.setAttribute('id', 'smo129237');
smo129253v0ar.push(smo129237);
smo129253v0.addTickables(smo129253v0ar)
fmtsmo12925318.joinVoices([smo129253v0]);
const fmtsmo13158018 = new VF.Formatter();
//
// voices and notes for stave 7 18
const smo131580v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo131580v0ar = [];
const smo131564 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo131564.setAttribute('id', 'smo131564');
smo131580v0ar.push(smo131564);
smo131580v0.addTickables(smo131580v0ar)
fmtsmo13158018.joinVoices([smo131580v0]);
const fmtsmo13393018 = new VF.Formatter();
//
// voices and notes for stave 8 18
const smo133930v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo133930v0ar = [];
const smo133914 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo133914.setAttribute('id', 'smo133914');
smo133930v0ar.push(smo133914);
smo133930v0.addTickables(smo133930v0ar)
fmtsmo13393018.joinVoices([smo133930v0]);
const fmtsmo13635218 = new VF.Formatter();
//
// voices and notes for stave 9 18
const smo136352v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo136352v0ar = [];
const smo136336 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo136336.setAttribute('id', 'smo136336');
smo136352v0ar.push(smo136336);
smo136352v0.addTickables(smo136352v0ar)
fmtsmo13635218.joinVoices([smo136352v0]);
const fmtsmo13872518 = new VF.Formatter();
//
// voices and notes for stave 10 18
const smo138725v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo138725v0ar = [];
const smo138709 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo138709.setAttribute('id', 'smo138709');
smo138725v0ar.push(smo138709);
smo138725v0.addTickables(smo138725v0ar)
fmtsmo13872518.joinVoices([smo138725v0]);
const fmtsmo14107118 = new VF.Formatter();
//
// voices and notes for stave 11 18
const smo141071v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo141071v0ar = [];
const smo141055 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo141055.setAttribute('id', 'smo141055');
smo141071v0ar.push(smo141055);
smo141071v0.addTickables(smo141071v0ar)
fmtsmo14107118.joinVoices([smo141071v0]);
const fmtsmo14339918 = new VF.Formatter();
//
// voices and notes for stave 12 18
const smo143399v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo143399v0ar = [];
const smo143383 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo143383.setAttribute('id', 'smo143383');
smo143399v0ar.push(smo143383);
smo143399v0.addTickables(smo143399v0ar)
fmtsmo14339918.joinVoices([smo143399v0]);
const fmtsmo14573318 = new VF.Formatter();
//
// voices and notes for stave 13 18
const smo145733v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo145733v0ar = [];
const smo145717 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo145717.setAttribute('id', 'smo145717');
smo145733v0ar.push(smo145717);
smo145733v0.addTickables(smo145733v0ar)
fmtsmo14573318.joinVoices([smo145733v0]);
const fmtsmo14815918 = new VF.Formatter();
//
// voices and notes for stave 14 18
const smo148159v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo148159v0ar = [];
const smo148143 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo148143.setAttribute('id', 'smo148143');
smo148159v0ar.push(smo148143);
smo148159v0.addTickables(smo148159v0ar)
fmtsmo14815918.joinVoices([smo148159v0]);
const fmtsmo15068118 = new VF.Formatter();
//
// voices and notes for stave 15 18
const smo150681v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo150681v0ar = [];
const smo150663 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo150663.setAttribute('id', 'smo150663');
smo150681v0ar.push(smo150663);
const smo150664 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo150664.setAttribute('id', 'smo150664');
smo150681v0ar.push(smo150664);
const smo150665 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo150665.setAttribute('id', 'smo150665');
smo150681v0ar.push(smo150665);
smo150681v0.addTickables(smo150681v0ar)
fmtsmo15068118.joinVoices([smo150681v0]);
const fmtsmo15314418 = new VF.Formatter();
//
// voices and notes for stave 16 18
const smo153144v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo153144v0ar = [];
const smo153123 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153123.setAttribute('id', 'smo153123');
const smo1531230acc = new VF.Accidental('n');
smo153123.addModifier(smo1531230acc, 0);
smo153144v0ar.push(smo153123);
const smo153124 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153124.setAttribute('id', 'smo153124');
smo153144v0ar.push(smo153124);
const smo153125 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo153125.setAttribute('id', 'smo153125');
smo153144v0ar.push(smo153125);
const smo153126 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153126.setAttribute('id', 'smo153126');
smo153144v0ar.push(smo153126);
const smo153127 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153127.setAttribute('id', 'smo153127');
smo153144v0ar.push(smo153127);
const smo153128 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153128.setAttribute('id', 'smo153128');
smo153144v0ar.push(smo153128);
smo153144v0.addTickables(smo153144v0ar)
fmtsmo15314418.joinVoices([smo153144v0]);
// create beam groups and tuplets for format grp smo155376 before formatting
 
// formatting measures in staff group smo155376
fmtsmo11497218.format([smo114972v0,smo117399v0,smo119815v0,smo122189v0,smo124540v0], 174);
const stavesmo114972 = new VF.Stave(1632, 183.2253035909339, 188);
stavesmo114972.setAttribute('id', 'stavesmo114972');
stavesmo114972.setBegBarType(VF.Barline.type.NONE);
stavesmo114972.setContext(context);
stavesmo114972.draw();
smo114972v0.draw(context, stavesmo114972);
const stavesmo117399 = new VF.Stave(1632, 288.2253035909339, 188);
stavesmo117399.setAttribute('id', 'stavesmo117399');
stavesmo117399.setBegBarType(VF.Barline.type.NONE);
stavesmo117399.setContext(context);
stavesmo117399.draw();
smo117399v0.draw(context, stavesmo117399);
const stavesmo119815 = new VF.Stave(1632, 379.2253035909339, 188);
stavesmo119815.setAttribute('id', 'stavesmo119815');
stavesmo119815.setBegBarType(VF.Barline.type.NONE);
stavesmo119815.setContext(context);
stavesmo119815.draw();
smo119815v0.draw(context, stavesmo119815);
const stavesmo122189 = new VF.Stave(1632, 479.2253035909339, 188);
stavesmo122189.setAttribute('id', 'stavesmo122189');
stavesmo122189.setBegBarType(VF.Barline.type.NONE);
stavesmo122189.setContext(context);
stavesmo122189.draw();
smo122189v0.draw(context, stavesmo122189);
const stavesmo124540 = new VF.Stave(1632, 549.2253035909339, 188);
stavesmo124540.setAttribute('id', 'stavesmo124540');
stavesmo124540.setBegBarType(VF.Barline.type.NONE);
stavesmo124540.setContext(context);
stavesmo124540.draw();
smo124540v0.draw(context, stavesmo124540);
// create beam groups and tuplets for format grp smo155378 before formatting
 
// formatting measures in staff group smo155378
fmtsmo12684718.format([smo126847v0,smo129253v0,smo131580v0,smo133930v0], 174);
const stavesmo126847 = new VF.Stave(1632, 630.2253035909339, 188);
stavesmo126847.setAttribute('id', 'stavesmo126847');
stavesmo126847.setBegBarType(VF.Barline.type.NONE);
stavesmo126847.setContext(context);
stavesmo126847.draw();
smo126847v0.draw(context, stavesmo126847);
const stavesmo129253 = new VF.Stave(1632, 700.2253035909339, 188);
stavesmo129253.setAttribute('id', 'stavesmo129253');
stavesmo129253.setBegBarType(VF.Barline.type.NONE);
stavesmo129253.setContext(context);
stavesmo129253.draw();
smo129253v0.draw(context, stavesmo129253);
const stavesmo131580 = new VF.Stave(1632, 761.2253035909339, 188);
stavesmo131580.setAttribute('id', 'stavesmo131580');
stavesmo131580.setBegBarType(VF.Barline.type.NONE);
stavesmo131580.setContext(context);
stavesmo131580.draw();
smo131580v0.draw(context, stavesmo131580);
const stavesmo133930 = new VF.Stave(1632, 831.2253035909339, 188);
stavesmo133930.setAttribute('id', 'stavesmo133930');
stavesmo133930.setBegBarType(VF.Barline.type.NONE);
stavesmo133930.setContext(context);
stavesmo133930.draw();
smo133930v0.draw(context, stavesmo133930);
// create beam groups and tuplets for format grp smo155380 before formatting
 
// formatting measures in staff group smo155380
fmtsmo13635218.format([smo136352v0,smo138725v0,smo141071v0,smo143399v0], 174);
const stavesmo136352 = new VF.Stave(1632, 936.2253035909339, 188);
stavesmo136352.setAttribute('id', 'stavesmo136352');
stavesmo136352.setBegBarType(VF.Barline.type.NONE);
stavesmo136352.setContext(context);
stavesmo136352.draw();
smo136352v0.draw(context, stavesmo136352);
const stavesmo138725 = new VF.Stave(1632, 1023.2253035909339, 188);
stavesmo138725.setAttribute('id', 'stavesmo138725');
stavesmo138725.setBegBarType(VF.Barline.type.NONE);
stavesmo138725.setContext(context);
stavesmo138725.draw();
smo138725v0.draw(context, stavesmo138725);
const stavesmo141071 = new VF.Stave(1632, 1128.225303590934, 188);
stavesmo141071.setAttribute('id', 'stavesmo141071');
stavesmo141071.setBegBarType(VF.Barline.type.NONE);
stavesmo141071.setContext(context);
stavesmo141071.draw();
smo141071v0.draw(context, stavesmo141071);
const stavesmo143399 = new VF.Stave(1632, 1213.225303590934, 188);
stavesmo143399.setAttribute('id', 'stavesmo143399');
stavesmo143399.setBegBarType(VF.Barline.type.NONE);
stavesmo143399.setContext(context);
stavesmo143399.draw();
smo143399v0.draw(context, stavesmo143399);
// create beam groups and tuplets for format grp smo147831 before formatting
 
// formatting measures in staff group smo147831
fmtsmo14573318.format([smo145733v0], 174);
const stavesmo145733 = new VF.Stave(1632, 1290.225303590934, 188);
stavesmo145733.setAttribute('id', 'stavesmo145733');
stavesmo145733.setBegBarType(VF.Barline.type.NONE);
stavesmo145733.setContext(context);
stavesmo145733.draw();
smo145733v0.draw(context, stavesmo145733);
// create beam groups and tuplets for format grp smo150299 before formatting
 
// formatting measures in staff group smo150299
fmtsmo14815918.format([smo148159v0], 174);
const stavesmo148159 = new VF.Stave(1632, 1373.225303590934, 188);
stavesmo148159.setAttribute('id', 'stavesmo148159');
stavesmo148159.setBegBarType(VF.Barline.type.NONE);
stavesmo148159.setContext(context);
stavesmo148159.draw();
smo148159v0.draw(context, stavesmo148159);
// create beam groups and tuplets for format grp smo152657 before formatting
 
// formatting measures in staff group smo152657
fmtsmo15068118.format([smo150681v0], 174);
const stavesmo150681 = new VF.Stave(1632, 1478.225303590934, 188);
stavesmo150681.setAttribute('id', 'stavesmo150681');
stavesmo150681.setBegBarType(VF.Barline.type.NONE);
stavesmo150681.setContext(context);
stavesmo150681.draw();
smo150681v0.draw(context, stavesmo150681);
// create beam groups and tuplets for format grp smo155370 before formatting
const dirsmo221807 = smo153123.getStemDirection();
smo153123.setStemDirection(dirsmo221807);
smo153124.setStemDirection(dirsmo221807);
const smo221807 = new VF.Beam([smo153123,smo153124]);
 
// formatting measures in staff group smo155370
fmtsmo15314418.format([smo153144v0], 174);
const stavesmo153144 = new VF.Stave(1632, 1555.225303590934, 188);
stavesmo153144.setAttribute('id', 'stavesmo153144');
stavesmo153144.setBegBarType(VF.Barline.type.NONE);
stavesmo153144.setContext(context);
stavesmo153144.draw();
smo153144v0.draw(context, stavesmo153144);
smo221807.setContext(context);
smo221807.draw();
const fmtsmo11498919 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo114989v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo114989v0ar = [];
const smo114973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo114973.setAttribute('id', 'smo114973');
smo114989v0ar.push(smo114973);
smo114989v0.addTickables(smo114989v0ar)
fmtsmo11498919.joinVoices([smo114989v0]);
const fmtsmo11741619 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo117416v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo117416v0ar = [];
const smo117400 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo117400.setAttribute('id', 'smo117400');
smo117416v0ar.push(smo117400);
smo117416v0.addTickables(smo117416v0ar)
fmtsmo11741619.joinVoices([smo117416v0]);
const fmtsmo11983219 = new VF.Formatter();
//
// voices and notes for stave 2 19
const smo119832v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo119832v0ar = [];
const smo119816 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo119816.setAttribute('id', 'smo119816');
smo119832v0ar.push(smo119816);
smo119832v0.addTickables(smo119832v0ar)
fmtsmo11983219.joinVoices([smo119832v0]);
const fmtsmo12220619 = new VF.Formatter();
//
// voices and notes for stave 3 19
const smo122206v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo122206v0ar = [];
const smo122190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo122190.setAttribute('id', 'smo122190');
smo122206v0ar.push(smo122190);
smo122206v0.addTickables(smo122206v0ar)
fmtsmo12220619.joinVoices([smo122206v0]);
const fmtsmo12455719 = new VF.Formatter();
//
// voices and notes for stave 4 19
const smo124557v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo124557v0ar = [];
const smo124541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo124541.setAttribute('id', 'smo124541');
smo124557v0ar.push(smo124541);
smo124557v0.addTickables(smo124557v0ar)
fmtsmo12455719.joinVoices([smo124557v0]);
const fmtsmo12686419 = new VF.Formatter();
//
// voices and notes for stave 5 19
const smo126864v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo126864v0ar = [];
const smo126848 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo126848.setAttribute('id', 'smo126848');
smo126864v0ar.push(smo126848);
smo126864v0.addTickables(smo126864v0ar)
fmtsmo12686419.joinVoices([smo126864v0]);
const fmtsmo12927019 = new VF.Formatter();
//
// voices and notes for stave 6 19
const smo129270v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo129270v0ar = [];
const smo129254 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo129254.setAttribute('id', 'smo129254');
smo129270v0ar.push(smo129254);
smo129270v0.addTickables(smo129270v0ar)
fmtsmo12927019.joinVoices([smo129270v0]);
const fmtsmo13159719 = new VF.Formatter();
//
// voices and notes for stave 7 19
const smo131597v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo131597v0ar = [];
const smo131581 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo131581.setAttribute('id', 'smo131581');
smo131597v0ar.push(smo131581);
smo131597v0.addTickables(smo131597v0ar)
fmtsmo13159719.joinVoices([smo131597v0]);
const fmtsmo13394719 = new VF.Formatter();
//
// voices and notes for stave 8 19
const smo133947v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo133947v0ar = [];
const smo133931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo133931.setAttribute('id', 'smo133931');
smo133947v0ar.push(smo133931);
smo133947v0.addTickables(smo133947v0ar)
fmtsmo13394719.joinVoices([smo133947v0]);
const fmtsmo13636919 = new VF.Formatter();
//
// voices and notes for stave 9 19
const smo136369v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo136369v0ar = [];
const smo136353 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo136353.setAttribute('id', 'smo136353');
smo136369v0ar.push(smo136353);
smo136369v0.addTickables(smo136369v0ar)
fmtsmo13636919.joinVoices([smo136369v0]);
const fmtsmo13874219 = new VF.Formatter();
//
// voices and notes for stave 10 19
const smo138742v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo138742v0ar = [];
const smo138726 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo138726.setAttribute('id', 'smo138726');
smo138742v0ar.push(smo138726);
smo138742v0.addTickables(smo138742v0ar)
fmtsmo13874219.joinVoices([smo138742v0]);
const fmtsmo14108819 = new VF.Formatter();
//
// voices and notes for stave 11 19
const smo141088v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo141088v0ar = [];
const smo141072 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo141072.setAttribute('id', 'smo141072');
smo141088v0ar.push(smo141072);
smo141088v0.addTickables(smo141088v0ar)
fmtsmo14108819.joinVoices([smo141088v0]);
const fmtsmo14341619 = new VF.Formatter();
//
// voices and notes for stave 12 19
const smo143416v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo143416v0ar = [];
const smo143400 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo143400.setAttribute('id', 'smo143400');
smo143416v0ar.push(smo143400);
smo143416v0.addTickables(smo143416v0ar)
fmtsmo14341619.joinVoices([smo143416v0]);
const fmtsmo14575019 = new VF.Formatter();
//
// voices and notes for stave 13 19
const smo145750v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo145750v0ar = [];
const smo145734 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo145734.setAttribute('id', 'smo145734');
smo145750v0ar.push(smo145734);
smo145750v0.addTickables(smo145750v0ar)
fmtsmo14575019.joinVoices([smo145750v0]);
const fmtsmo14817619 = new VF.Formatter();
//
// voices and notes for stave 14 19
const smo148176v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo148176v0ar = [];
const smo148160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo148160.setAttribute('id', 'smo148160');
smo148176v0ar.push(smo148160);
smo148176v0.addTickables(smo148176v0ar)
fmtsmo14817619.joinVoices([smo148176v0]);
const fmtsmo15070019 = new VF.Formatter();
//
// voices and notes for stave 15 19
const smo150700v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo150700v0ar = [];
const smo150682 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo150682.setAttribute('id', 'smo150682');
smo150700v0ar.push(smo150682);
const smo150683 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo150683.setAttribute('id', 'smo150683');
smo150700v0ar.push(smo150683);
const smo150684 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo150684.setAttribute('id', 'smo150684');
smo150700v0ar.push(smo150684);
smo150700v0.addTickables(smo150700v0ar)
fmtsmo15070019.joinVoices([smo150700v0]);
const fmtsmo15316419 = new VF.Formatter();
//
// voices and notes for stave 16 19
const smo153164v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo153164v0ar = [];
const smo153145 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153145.setAttribute('id', 'smo153145');
const smo1531450acc = new VF.Accidental('n');
smo153145.addModifier(smo1531450acc, 0);
smo153164v0ar.push(smo153145);
const smo153146 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153146.setAttribute('id', 'smo153146');
smo153164v0ar.push(smo153146);
const smo153147 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153147.setAttribute('id', 'smo153147');
smo153164v0ar.push(smo153147);
const smo153148 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153148.setAttribute('id', 'smo153148');
smo153164v0ar.push(smo153148);
smo153164v0.addTickables(smo153164v0ar)
fmtsmo15316419.joinVoices([smo153164v0]);
// create beam groups and tuplets for format grp smo155376 before formatting
 
// formatting measures in staff group smo155376
fmtsmo11498919.format([smo114989v0,smo117416v0,smo119832v0,smo122206v0,smo124557v0], 101);
const stavesmo114989 = new VF.Stave(1820, 183.2253035909339, 115);
stavesmo114989.setAttribute('id', 'stavesmo114989');
stavesmo114989.setBegBarType(VF.Barline.type.NONE);
stavesmo114989.setContext(context);
stavesmo114989.draw();
smo114989v0.draw(context, stavesmo114989);
const stavesmo117416 = new VF.Stave(1820, 288.2253035909339, 115);
stavesmo117416.setAttribute('id', 'stavesmo117416');
stavesmo117416.setBegBarType(VF.Barline.type.NONE);
stavesmo117416.setContext(context);
stavesmo117416.draw();
smo117416v0.draw(context, stavesmo117416);
const stavesmo119832 = new VF.Stave(1820, 379.2253035909339, 115);
stavesmo119832.setAttribute('id', 'stavesmo119832');
stavesmo119832.setBegBarType(VF.Barline.type.NONE);
stavesmo119832.setContext(context);
stavesmo119832.draw();
smo119832v0.draw(context, stavesmo119832);
const stavesmo122206 = new VF.Stave(1820, 479.2253035909339, 115);
stavesmo122206.setAttribute('id', 'stavesmo122206');
stavesmo122206.setBegBarType(VF.Barline.type.NONE);
stavesmo122206.setContext(context);
stavesmo122206.draw();
smo122206v0.draw(context, stavesmo122206);
const stavesmo124557 = new VF.Stave(1820, 549.2253035909339, 115);
stavesmo124557.setAttribute('id', 'stavesmo124557');
stavesmo124557.setBegBarType(VF.Barline.type.NONE);
stavesmo124557.setContext(context);
stavesmo124557.draw();
smo124557v0.draw(context, stavesmo124557);
// create beam groups and tuplets for format grp smo155378 before formatting
 
// formatting measures in staff group smo155378
fmtsmo12686419.format([smo126864v0,smo129270v0,smo131597v0,smo133947v0], 101);
const stavesmo126864 = new VF.Stave(1820, 630.2253035909339, 115);
stavesmo126864.setAttribute('id', 'stavesmo126864');
stavesmo126864.setBegBarType(VF.Barline.type.NONE);
stavesmo126864.setContext(context);
stavesmo126864.draw();
smo126864v0.draw(context, stavesmo126864);
const stavesmo129270 = new VF.Stave(1820, 700.2253035909339, 115);
stavesmo129270.setAttribute('id', 'stavesmo129270');
stavesmo129270.setBegBarType(VF.Barline.type.NONE);
stavesmo129270.setContext(context);
stavesmo129270.draw();
smo129270v0.draw(context, stavesmo129270);
const stavesmo131597 = new VF.Stave(1820, 761.2253035909339, 115);
stavesmo131597.setAttribute('id', 'stavesmo131597');
stavesmo131597.setBegBarType(VF.Barline.type.NONE);
stavesmo131597.setContext(context);
stavesmo131597.draw();
smo131597v0.draw(context, stavesmo131597);
const stavesmo133947 = new VF.Stave(1820, 831.2253035909339, 115);
stavesmo133947.setAttribute('id', 'stavesmo133947');
stavesmo133947.setBegBarType(VF.Barline.type.NONE);
stavesmo133947.setContext(context);
stavesmo133947.draw();
smo133947v0.draw(context, stavesmo133947);
// create beam groups and tuplets for format grp smo155380 before formatting
 
// formatting measures in staff group smo155380
fmtsmo13636919.format([smo136369v0,smo138742v0,smo141088v0,smo143416v0], 101);
const stavesmo136369 = new VF.Stave(1820, 936.2253035909339, 115);
stavesmo136369.setAttribute('id', 'stavesmo136369');
stavesmo136369.setBegBarType(VF.Barline.type.NONE);
stavesmo136369.setContext(context);
stavesmo136369.draw();
smo136369v0.draw(context, stavesmo136369);
const stavesmo138742 = new VF.Stave(1820, 1023.2253035909339, 115);
stavesmo138742.setAttribute('id', 'stavesmo138742');
stavesmo138742.setBegBarType(VF.Barline.type.NONE);
stavesmo138742.setContext(context);
stavesmo138742.draw();
smo138742v0.draw(context, stavesmo138742);
const stavesmo141088 = new VF.Stave(1820, 1128.225303590934, 115);
stavesmo141088.setAttribute('id', 'stavesmo141088');
stavesmo141088.setBegBarType(VF.Barline.type.NONE);
stavesmo141088.setContext(context);
stavesmo141088.draw();
smo141088v0.draw(context, stavesmo141088);
const stavesmo143416 = new VF.Stave(1820, 1213.225303590934, 115);
stavesmo143416.setAttribute('id', 'stavesmo143416');
stavesmo143416.setBegBarType(VF.Barline.type.NONE);
stavesmo143416.setContext(context);
stavesmo143416.draw();
smo143416v0.draw(context, stavesmo143416);
// create beam groups and tuplets for format grp smo147831 before formatting
 
// formatting measures in staff group smo147831
fmtsmo14575019.format([smo145750v0], 101);
const stavesmo145750 = new VF.Stave(1820, 1290.225303590934, 115);
stavesmo145750.setAttribute('id', 'stavesmo145750');
stavesmo145750.setBegBarType(VF.Barline.type.NONE);
stavesmo145750.setContext(context);
stavesmo145750.draw();
smo145750v0.draw(context, stavesmo145750);
// create beam groups and tuplets for format grp smo150299 before formatting
 
// formatting measures in staff group smo150299
fmtsmo14817619.format([smo148176v0], 101);
const stavesmo148176 = new VF.Stave(1820, 1373.225303590934, 115);
stavesmo148176.setAttribute('id', 'stavesmo148176');
stavesmo148176.setBegBarType(VF.Barline.type.NONE);
stavesmo148176.setContext(context);
stavesmo148176.draw();
smo148176v0.draw(context, stavesmo148176);
// create beam groups and tuplets for format grp smo152657 before formatting
 
// formatting measures in staff group smo152657
fmtsmo15070019.format([smo150700v0], 101);
const stavesmo150700 = new VF.Stave(1820, 1478.225303590934, 115);
stavesmo150700.setAttribute('id', 'stavesmo150700');
stavesmo150700.setBegBarType(VF.Barline.type.NONE);
stavesmo150700.setContext(context);
stavesmo150700.draw();
smo150700v0.draw(context, stavesmo150700);
// create beam groups and tuplets for format grp smo155370 before formatting
 
// formatting measures in staff group smo155370
fmtsmo15316419.format([smo153164v0], 101);
const stavesmo153164 = new VF.Stave(1820, 1555.225303590934, 115);
stavesmo153164.setAttribute('id', 'stavesmo153164');
stavesmo153164.setBegBarType(VF.Barline.type.NONE);
stavesmo153164.setContext(context);
stavesmo153164.draw();
smo153164v0.draw(context, stavesmo153164);
const fmtsmo11500620 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo115006v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo115006v0ar = [];
const smo114990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo114990.setAttribute('id', 'smo114990');
smo115006v0ar.push(smo114990);
smo115006v0.addTickables(smo115006v0ar)
fmtsmo11500620.joinVoices([smo115006v0]);
const fmtsmo11743320 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo117433v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo117433v0ar = [];
const smo117417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo117417.setAttribute('id', 'smo117417');
smo117433v0ar.push(smo117417);
smo117433v0.addTickables(smo117433v0ar)
fmtsmo11743320.joinVoices([smo117433v0]);
const fmtsmo11984920 = new VF.Formatter();
//
// voices and notes for stave 2 20
const smo119849v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo119849v0ar = [];
const smo119833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo119833.setAttribute('id', 'smo119833');
smo119849v0ar.push(smo119833);
smo119849v0.addTickables(smo119849v0ar)
fmtsmo11984920.joinVoices([smo119849v0]);
const fmtsmo12222320 = new VF.Formatter();
//
// voices and notes for stave 3 20
const smo122223v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo122223v0ar = [];
const smo122207 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo122207.setAttribute('id', 'smo122207');
smo122223v0ar.push(smo122207);
smo122223v0.addTickables(smo122223v0ar)
fmtsmo12222320.joinVoices([smo122223v0]);
const fmtsmo12457420 = new VF.Formatter();
//
// voices and notes for stave 4 20
const smo124574v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo124574v0ar = [];
const smo124558 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo124558.setAttribute('id', 'smo124558');
smo124574v0ar.push(smo124558);
smo124574v0.addTickables(smo124574v0ar)
fmtsmo12457420.joinVoices([smo124574v0]);
const fmtsmo12688120 = new VF.Formatter();
//
// voices and notes for stave 5 20
const smo126881v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo126881v0ar = [];
const smo126865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo126865.setAttribute('id', 'smo126865');
smo126881v0ar.push(smo126865);
smo126881v0.addTickables(smo126881v0ar)
fmtsmo12688120.joinVoices([smo126881v0]);
const fmtsmo12928720 = new VF.Formatter();
//
// voices and notes for stave 6 20
const smo129287v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo129287v0ar = [];
const smo129271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo129271.setAttribute('id', 'smo129271');
smo129287v0ar.push(smo129271);
smo129287v0.addTickables(smo129287v0ar)
fmtsmo12928720.joinVoices([smo129287v0]);
const fmtsmo13161420 = new VF.Formatter();
//
// voices and notes for stave 7 20
const smo131614v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo131614v0ar = [];
const smo131598 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo131598.setAttribute('id', 'smo131598');
smo131614v0ar.push(smo131598);
smo131614v0.addTickables(smo131614v0ar)
fmtsmo13161420.joinVoices([smo131614v0]);
const fmtsmo13396420 = new VF.Formatter();
//
// voices and notes for stave 8 20
const smo133964v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo133964v0ar = [];
const smo133948 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo133948.setAttribute('id', 'smo133948');
smo133964v0ar.push(smo133948);
smo133964v0.addTickables(smo133964v0ar)
fmtsmo13396420.joinVoices([smo133964v0]);
const fmtsmo13638620 = new VF.Formatter();
//
// voices and notes for stave 9 20
const smo136386v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo136386v0ar = [];
const smo136370 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo136370.setAttribute('id', 'smo136370');
smo136386v0ar.push(smo136370);
smo136386v0.addTickables(smo136386v0ar)
fmtsmo13638620.joinVoices([smo136386v0]);
const fmtsmo13875920 = new VF.Formatter();
//
// voices and notes for stave 10 20
const smo138759v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo138759v0ar = [];
const smo138743 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo138743.setAttribute('id', 'smo138743');
smo138759v0ar.push(smo138743);
smo138759v0.addTickables(smo138759v0ar)
fmtsmo13875920.joinVoices([smo138759v0]);
const fmtsmo14110520 = new VF.Formatter();
//
// voices and notes for stave 11 20
const smo141105v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo141105v0ar = [];
const smo141089 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo141089.setAttribute('id', 'smo141089');
smo141105v0ar.push(smo141089);
smo141105v0.addTickables(smo141105v0ar)
fmtsmo14110520.joinVoices([smo141105v0]);
const fmtsmo14343320 = new VF.Formatter();
//
// voices and notes for stave 12 20
const smo143433v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo143433v0ar = [];
const smo143417 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo143417.setAttribute('id', 'smo143417');
smo143433v0ar.push(smo143417);
smo143433v0.addTickables(smo143433v0ar)
fmtsmo14343320.joinVoices([smo143433v0]);
const fmtsmo14576720 = new VF.Formatter();
//
// voices and notes for stave 13 20
const smo145767v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo145767v0ar = [];
const smo145751 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo145751.setAttribute('id', 'smo145751');
smo145767v0ar.push(smo145751);
smo145767v0.addTickables(smo145767v0ar)
fmtsmo14576720.joinVoices([smo145767v0]);
const fmtsmo14819320 = new VF.Formatter();
//
// voices and notes for stave 14 20
const smo148193v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo148193v0ar = [];
const smo148177 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo148177.setAttribute('id', 'smo148177');
smo148193v0ar.push(smo148177);
smo148193v0.addTickables(smo148193v0ar)
fmtsmo14819320.joinVoices([smo148193v0]);
const fmtsmo15071920 = new VF.Formatter();
//
// voices and notes for stave 15 20
const smo150719v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo150719v0ar = [];
const smo150701 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo150701.setAttribute('id', 'smo150701');
smo150719v0ar.push(smo150701);
const smo150702 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo150702.setAttribute('id', 'smo150702');
smo150719v0ar.push(smo150702);
const smo150703 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo150703.setAttribute('id', 'smo150703');
smo150719v0ar.push(smo150703);
smo150719v0.addTickables(smo150719v0ar)
fmtsmo15071920.joinVoices([smo150719v0]);
const fmtsmo15318620 = new VF.Formatter();
//
// voices and notes for stave 16 20
const smo153186v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo153186v0ar = [];
const smo153165 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153165.setAttribute('id', 'smo153165');
const smo1531650acc = new VF.Accidental('n');
smo153165.addModifier(smo1531650acc, 0);
smo153186v0ar.push(smo153165);
const smo153166 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153166.setAttribute('id', 'smo153166');
smo153186v0ar.push(smo153166);
const smo153167 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo153167.setAttribute('id', 'smo153167');
smo153186v0ar.push(smo153167);
const smo153168 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153168.setAttribute('id', 'smo153168');
smo153186v0ar.push(smo153168);
const smo153169 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153169.setAttribute('id', 'smo153169');
smo153186v0ar.push(smo153169);
const smo153170 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153170.setAttribute('id', 'smo153170');
smo153186v0ar.push(smo153170);
smo153186v0.addTickables(smo153186v0ar)
fmtsmo15318620.joinVoices([smo153186v0]);
// create beam groups and tuplets for format grp smo155376 before formatting
 
// formatting measures in staff group smo155376
fmtsmo11500620.format([smo115006v0,smo117433v0,smo119849v0,smo122223v0,smo124574v0], 166);
const stavesmo115006 = new VF.Stave(1935, 183.2253035909339, 181);
stavesmo115006.setAttribute('id', 'stavesmo115006');
stavesmo115006.setBegBarType(VF.Barline.type.NONE);
stavesmo115006.setEndBarType(2);
stavesmo115006.setContext(context);
stavesmo115006.draw();
smo115006v0.draw(context, stavesmo115006);
const stavesmo117433 = new VF.Stave(1935, 288.2253035909339, 181);
stavesmo117433.setAttribute('id', 'stavesmo117433');
stavesmo117433.setBegBarType(VF.Barline.type.NONE);
stavesmo117433.setEndBarType(2);
stavesmo117433.setContext(context);
stavesmo117433.draw();
smo117433v0.draw(context, stavesmo117433);
const stavesmo119849 = new VF.Stave(1935, 379.2253035909339, 181);
stavesmo119849.setAttribute('id', 'stavesmo119849');
stavesmo119849.setBegBarType(VF.Barline.type.NONE);
stavesmo119849.setEndBarType(2);
stavesmo119849.setContext(context);
stavesmo119849.draw();
smo119849v0.draw(context, stavesmo119849);
const stavesmo122223 = new VF.Stave(1935, 479.2253035909339, 181);
stavesmo122223.setAttribute('id', 'stavesmo122223');
stavesmo122223.setBegBarType(VF.Barline.type.NONE);
stavesmo122223.setEndBarType(2);
stavesmo122223.setContext(context);
stavesmo122223.draw();
smo122223v0.draw(context, stavesmo122223);
const stavesmo124574 = new VF.Stave(1935, 549.2253035909339, 181);
stavesmo124574.setAttribute('id', 'stavesmo124574');
stavesmo124574.setBegBarType(VF.Barline.type.NONE);
stavesmo124574.setEndBarType(2);
stavesmo124574.setContext(context);
stavesmo124574.draw();
smo124574v0.draw(context, stavesmo124574);
// create beam groups and tuplets for format grp smo155378 before formatting
 
// formatting measures in staff group smo155378
fmtsmo12688120.format([smo126881v0,smo129287v0,smo131614v0,smo133964v0], 166);
const stavesmo126881 = new VF.Stave(1935, 630.2253035909339, 181);
stavesmo126881.setAttribute('id', 'stavesmo126881');
stavesmo126881.setBegBarType(VF.Barline.type.NONE);
stavesmo126881.setEndBarType(2);
stavesmo126881.setContext(context);
stavesmo126881.draw();
smo126881v0.draw(context, stavesmo126881);
const stavesmo129287 = new VF.Stave(1935, 700.2253035909339, 181);
stavesmo129287.setAttribute('id', 'stavesmo129287');
stavesmo129287.setBegBarType(VF.Barline.type.NONE);
stavesmo129287.setEndBarType(2);
stavesmo129287.setContext(context);
stavesmo129287.draw();
smo129287v0.draw(context, stavesmo129287);
const stavesmo131614 = new VF.Stave(1935, 761.2253035909339, 181);
stavesmo131614.setAttribute('id', 'stavesmo131614');
stavesmo131614.setBegBarType(VF.Barline.type.NONE);
stavesmo131614.setEndBarType(2);
stavesmo131614.setContext(context);
stavesmo131614.draw();
smo131614v0.draw(context, stavesmo131614);
const stavesmo133964 = new VF.Stave(1935, 831.2253035909339, 181);
stavesmo133964.setAttribute('id', 'stavesmo133964');
stavesmo133964.setBegBarType(VF.Barline.type.NONE);
stavesmo133964.setEndBarType(2);
stavesmo133964.setContext(context);
stavesmo133964.draw();
smo133964v0.draw(context, stavesmo133964);
// create beam groups and tuplets for format grp smo155380 before formatting
 
// formatting measures in staff group smo155380
fmtsmo13638620.format([smo136386v0,smo138759v0,smo141105v0,smo143433v0], 166);
const stavesmo136386 = new VF.Stave(1935, 936.2253035909339, 181);
stavesmo136386.setAttribute('id', 'stavesmo136386');
stavesmo136386.setBegBarType(VF.Barline.type.NONE);
stavesmo136386.setEndBarType(2);
stavesmo136386.setContext(context);
stavesmo136386.draw();
smo136386v0.draw(context, stavesmo136386);
const stavesmo138759 = new VF.Stave(1935, 1023.2253035909339, 181);
stavesmo138759.setAttribute('id', 'stavesmo138759');
stavesmo138759.setBegBarType(VF.Barline.type.NONE);
stavesmo138759.setEndBarType(2);
stavesmo138759.setContext(context);
stavesmo138759.draw();
smo138759v0.draw(context, stavesmo138759);
const stavesmo141105 = new VF.Stave(1935, 1128.225303590934, 181);
stavesmo141105.setAttribute('id', 'stavesmo141105');
stavesmo141105.setBegBarType(VF.Barline.type.NONE);
stavesmo141105.setEndBarType(2);
stavesmo141105.setContext(context);
stavesmo141105.draw();
smo141105v0.draw(context, stavesmo141105);
const stavesmo143433 = new VF.Stave(1935, 1213.225303590934, 181);
stavesmo143433.setAttribute('id', 'stavesmo143433');
stavesmo143433.setBegBarType(VF.Barline.type.NONE);
stavesmo143433.setEndBarType(2);
stavesmo143433.setContext(context);
stavesmo143433.draw();
smo143433v0.draw(context, stavesmo143433);
// create beam groups and tuplets for format grp smo147831 before formatting
 
// formatting measures in staff group smo147831
fmtsmo14576720.format([smo145767v0], 166);
const stavesmo145767 = new VF.Stave(1935, 1290.225303590934, 181);
stavesmo145767.setAttribute('id', 'stavesmo145767');
stavesmo145767.setBegBarType(VF.Barline.type.NONE);
stavesmo145767.setEndBarType(2);
stavesmo145767.setContext(context);
stavesmo145767.draw();
smo145767v0.draw(context, stavesmo145767);
// create beam groups and tuplets for format grp smo150299 before formatting
 
// formatting measures in staff group smo150299
fmtsmo14819320.format([smo148193v0], 166);
const stavesmo148193 = new VF.Stave(1935, 1373.225303590934, 181);
stavesmo148193.setAttribute('id', 'stavesmo148193');
stavesmo148193.setBegBarType(VF.Barline.type.NONE);
stavesmo148193.setEndBarType(2);
stavesmo148193.setContext(context);
stavesmo148193.draw();
smo148193v0.draw(context, stavesmo148193);
// create beam groups and tuplets for format grp smo152657 before formatting
 
// formatting measures in staff group smo152657
fmtsmo15071920.format([smo150719v0], 166);
const stavesmo150719 = new VF.Stave(1935, 1478.225303590934, 181);
stavesmo150719.setAttribute('id', 'stavesmo150719');
stavesmo150719.setBegBarType(VF.Barline.type.NONE);
stavesmo150719.setEndBarType(2);
stavesmo150719.setContext(context);
stavesmo150719.draw();
smo150719v0.draw(context, stavesmo150719);
// create beam groups and tuplets for format grp smo155370 before formatting
const dirsmo221860 = smo153165.getStemDirection();
smo153165.setStemDirection(dirsmo221860);
smo153166.setStemDirection(dirsmo221860);
const smo221860 = new VF.Beam([smo153165,smo153166]);
 
// formatting measures in staff group smo155370
fmtsmo15318620.format([smo153186v0], 166);
const stavesmo153186 = new VF.Stave(1935, 1555.225303590934, 181);
stavesmo153186.setAttribute('id', 'stavesmo153186');
stavesmo153186.setBegBarType(VF.Barline.type.NONE);
stavesmo153186.setEndBarType(2);
stavesmo153186.setContext(context);
stavesmo153186.draw();
smo153186v0.draw(context, stavesmo153186);
smo221860.setContext(context);
smo221860.draw();
const fmtsmo11502821 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo115028v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo115028v0ar = [];
const smo115007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo115007.setAttribute('id', 'smo115007');
smo115007.addModifier(new VF.Dot(), 0);
smo115028v0ar.push(smo115007);
const smo115009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo115009.setAttribute('id', 'smo115009');
smo115028v0ar.push(smo115009);
const smo115010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo115010.setAttribute('id', 'smo115010');
smo115028v0ar.push(smo115010);
const smo115011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo115011.setAttribute('id', 'smo115011');
smo115028v0ar.push(smo115011);
smo115028v0.addTickables(smo115028v0ar)
fmtsmo11502821.joinVoices([smo115028v0]);
const fmtsmo11745521 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo117455v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo117455v0ar = [];
const smo117434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo117434.setAttribute('id', 'smo117434');
smo117434.addModifier(new VF.Dot(), 0);
smo117455v0ar.push(smo117434);
const smo117436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo117436.setAttribute('id', 'smo117436');
smo117455v0ar.push(smo117436);
const smo117437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo117437.setAttribute('id', 'smo117437');
smo117455v0ar.push(smo117437);
const smo117438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo117438.setAttribute('id', 'smo117438');
smo117455v0ar.push(smo117438);
smo117455v0.addTickables(smo117455v0ar)
fmtsmo11745521.joinVoices([smo117455v0]);
const fmtsmo11987121 = new VF.Formatter();
//
// voices and notes for stave 2 21
const smo119871v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo119871v0ar = [];
const smo119850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo119850.setAttribute('id', 'smo119850');
smo119850.addModifier(new VF.Dot(), 0);
smo119871v0ar.push(smo119850);
const smo119852 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo119852.setAttribute('id', 'smo119852');
smo119871v0ar.push(smo119852);
const smo119853 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo119853.setAttribute('id', 'smo119853');
smo119871v0ar.push(smo119853);
const smo119854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo119854.setAttribute('id', 'smo119854');
smo119871v0ar.push(smo119854);
smo119871v0.addTickables(smo119871v0ar)
fmtsmo11987121.joinVoices([smo119871v0]);
const fmtsmo12224521 = new VF.Formatter();
//
// voices and notes for stave 3 21
const smo122245v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo122245v0ar = [];
const smo122224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo122224.setAttribute('id', 'smo122224');
smo122224.addModifier(new VF.Dot(), 0);
smo122245v0ar.push(smo122224);
const smo122226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo122226.setAttribute('id', 'smo122226');
smo122245v0ar.push(smo122226);
const smo122227 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo122227.setAttribute('id', 'smo122227');
smo122245v0ar.push(smo122227);
const smo122228 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo122228.setAttribute('id', 'smo122228');
smo122245v0ar.push(smo122228);
smo122245v0.addTickables(smo122245v0ar)
fmtsmo12224521.joinVoices([smo122245v0]);
const fmtsmo12459221 = new VF.Formatter();
//
// voices and notes for stave 4 21
const smo124592v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo124592v0ar = [];
const smo124575 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo124575.setAttribute('id', 'smo124575');
smo124592v0ar.push(smo124575);
smo124592v0.addTickables(smo124592v0ar)
fmtsmo12459221.joinVoices([smo124592v0]);
const fmtsmo12690121 = new VF.Formatter();
//
// voices and notes for stave 5 21
const smo126901v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo126901v0ar = [];
const smo126882 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo126882.setAttribute('id', 'smo126882');
smo126901v0ar.push(smo126882);
const smo126883 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo126883.setAttribute('id', 'smo126883');
smo126901v0ar.push(smo126883);
const smo126884 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo126884.setAttribute('id', 'smo126884');
smo126901v0ar.push(smo126884);
smo126901v0.addTickables(smo126901v0ar)
fmtsmo12690121.joinVoices([smo126901v0]);
const fmtsmo12930721 = new VF.Formatter();
//
// voices and notes for stave 6 21
const smo129307v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo129307v0ar = [];
const smo129288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo129288.setAttribute('id', 'smo129288');
smo129307v0ar.push(smo129288);
const smo129289 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo129289.setAttribute('id', 'smo129289');
smo129307v0ar.push(smo129289);
const smo129290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo129290.setAttribute('id', 'smo129290');
smo129307v0ar.push(smo129290);
smo129307v0.addTickables(smo129307v0ar)
fmtsmo12930721.joinVoices([smo129307v0]);
const fmtsmo13163421 = new VF.Formatter();
//
// voices and notes for stave 7 21
const smo131634v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo131634v0ar = [];
const smo131615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo131615.setAttribute('id', 'smo131615');
smo131634v0ar.push(smo131615);
const smo131616 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo131616.setAttribute('id', 'smo131616');
smo131634v0ar.push(smo131616);
const smo131617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo131617.setAttribute('id', 'smo131617');
smo131634v0ar.push(smo131617);
smo131634v0.addTickables(smo131634v0ar)
fmtsmo13163421.joinVoices([smo131634v0]);
const fmtsmo13398421 = new VF.Formatter();
//
// voices and notes for stave 8 21
const smo133984v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo133984v0ar = [];
const smo133965 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo133965.setAttribute('id', 'smo133965');
smo133984v0ar.push(smo133965);
const smo133966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo133966.setAttribute('id', 'smo133966');
smo133984v0ar.push(smo133966);
const smo133967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo133967.setAttribute('id', 'smo133967');
smo133984v0ar.push(smo133967);
smo133984v0.addTickables(smo133984v0ar)
fmtsmo13398421.joinVoices([smo133984v0]);
const fmtsmo13640421 = new VF.Formatter();
//
// voices and notes for stave 9 21
const smo136404v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo136404v0ar = [];
const smo136387 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo136387.setAttribute('id', 'smo136387');
smo136404v0ar.push(smo136387);
smo136404v0.addTickables(smo136404v0ar)
fmtsmo13640421.joinVoices([smo136404v0]);
const fmtsmo13877721 = new VF.Formatter();
//
// voices and notes for stave 10 21
const smo138777v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo138777v0ar = [];
const smo138760 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo138760.setAttribute('id', 'smo138760');
smo138777v0ar.push(smo138760);
smo138777v0.addTickables(smo138777v0ar)
fmtsmo13877721.joinVoices([smo138777v0]);
const fmtsmo14112321 = new VF.Formatter();
//
// voices and notes for stave 11 21
const smo141123v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo141123v0ar = [];
const smo141106 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo141106.setAttribute('id', 'smo141106');
smo141123v0ar.push(smo141106);
smo141123v0.addTickables(smo141123v0ar)
fmtsmo14112321.joinVoices([smo141123v0]);
const fmtsmo14345121 = new VF.Formatter();
//
// voices and notes for stave 12 21
const smo143451v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo143451v0ar = [];
const smo143434 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo143434.setAttribute('id', 'smo143434');
smo143451v0ar.push(smo143434);
smo143451v0.addTickables(smo143451v0ar)
fmtsmo14345121.joinVoices([smo143451v0]);
const fmtsmo14578821 = new VF.Formatter();
//
// voices and notes for stave 13 21
const smo145788v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo145788v0ar = [];
const smo145768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo145768.setAttribute('id', 'smo145768');
smo145788v0ar.push(smo145768);
const smo145769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo145769.setAttribute('id', 'smo145769');
smo145788v0ar.push(smo145769);
const smo145770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo145770.setAttribute('id', 'smo145770');
smo145788v0ar.push(smo145770);
const smo145771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo145771.setAttribute('id', 'smo145771');
smo145788v0ar.push(smo145771);
smo145788v0.addTickables(smo145788v0ar)
fmtsmo14578821.joinVoices([smo145788v0]);
const fmtsmo14821621 = new VF.Formatter();
//
// voices and notes for stave 14 21
const smo148216v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo148216v0ar = [];
const smo148194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo148194.setAttribute('id', 'smo148194');
smo148216v0ar.push(smo148194);
const smo148195 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo148195.setAttribute('id', 'smo148195');
smo148216v0ar.push(smo148195);
const smo148196 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo148196.setAttribute('id', 'smo148196');
smo148216v0ar.push(smo148196);
const smo148197 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo148197.setAttribute('id', 'smo148197');
smo148216v0ar.push(smo148197);
const smo148198 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo148198.setAttribute('id', 'smo148198');
smo148216v0ar.push(smo148198);
const smo148199 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo148199.setAttribute('id', 'smo148199');
smo148216v0ar.push(smo148199);
smo148216v0.addTickables(smo148216v0ar)
fmtsmo14821621.joinVoices([smo148216v0]);
const fmtsmo15073921 = new VF.Formatter();
//
// voices and notes for stave 15 21
const smo150739v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo150739v0ar = [];
const smo150720 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo150720.setAttribute('id', 'smo150720');
smo150739v0ar.push(smo150720);
const smo150721 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo150721.setAttribute('id', 'smo150721');
smo150739v0ar.push(smo150721);
const smo150722 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo150722.setAttribute('id', 'smo150722');
smo150739v0ar.push(smo150722);
smo150739v0.addTickables(smo150739v0ar)
fmtsmo15073921.joinVoices([smo150739v0]);
const fmtsmo15320721 = new VF.Formatter();
//
// voices and notes for stave 16 21
const smo153207v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":2}')).setMode(VF.Voice.Mode.SOFT);
const smo153207v0ar = [];
const smo153187 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153187.setAttribute('id', 'smo153187');
const smo1531870acc = new VF.Accidental('n');
smo153187.addModifier(smo1531870acc, 0);
smo153207v0ar.push(smo153187);
const smo153188 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153188.setAttribute('id', 'smo153188');
smo153207v0ar.push(smo153188);
const smo153189 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153189.setAttribute('id', 'smo153189');
smo153207v0ar.push(smo153189);
const smo153190 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo153190.setAttribute('id', 'smo153190');
smo153207v0ar.push(smo153190);
smo153207v0.addTickables(smo153207v0ar)
fmtsmo15320721.joinVoices([smo153207v0]);
// create beam groups and tuplets for format grp smo155376 before formatting
 
// formatting measures in staff group smo155376
fmtsmo11502821.format([smo115028v0,smo117455v0,smo119871v0,smo122245v0,smo124592v0], 157);
const stavesmo115028 = new VF.Stave(2116, 183.2253035909339, 180);
stavesmo115028.setAttribute('id', 'stavesmo115028');
stavesmo115028.setBegBarType(4);
stavesmo115028.setSection('B', 0);
stavesmo115028.setContext(context);
stavesmo115028.draw();
smo115028v0.draw(context, stavesmo115028);
const stavesmo117455 = new VF.Stave(2116, 288.2253035909339, 180);
stavesmo117455.setAttribute('id', 'stavesmo117455');
stavesmo117455.setBegBarType(4);
stavesmo117455.setContext(context);
stavesmo117455.draw();
smo117455v0.draw(context, stavesmo117455);
const stavesmo119871 = new VF.Stave(2116, 379.2253035909339, 180);
stavesmo119871.setAttribute('id', 'stavesmo119871');
stavesmo119871.setBegBarType(4);
stavesmo119871.setContext(context);
stavesmo119871.draw();
smo119871v0.draw(context, stavesmo119871);
const stavesmo122245 = new VF.Stave(2116, 479.2253035909339, 180);
stavesmo122245.setAttribute('id', 'stavesmo122245');
stavesmo122245.setBegBarType(4);
stavesmo122245.setContext(context);
stavesmo122245.draw();
smo122245v0.draw(context, stavesmo122245);
const stavesmo124592 = new VF.Stave(2116, 549.2253035909339, 180);
stavesmo124592.setAttribute('id', 'stavesmo124592');
stavesmo124592.setBegBarType(4);
stavesmo124592.setContext(context);
stavesmo124592.draw();
smo124592v0.draw(context, stavesmo124592);
// create beam groups and tuplets for format grp smo155378 before formatting
 
// formatting measures in staff group smo155378
fmtsmo12690121.format([smo126901v0,smo129307v0,smo131634v0,smo133984v0], 157);
const stavesmo126901 = new VF.Stave(2116, 630.2253035909339, 180);
stavesmo126901.setAttribute('id', 'stavesmo126901');
stavesmo126901.setBegBarType(4);
stavesmo126901.setContext(context);
stavesmo126901.draw();
smo126901v0.draw(context, stavesmo126901);
const stavesmo129307 = new VF.Stave(2116, 700.2253035909339, 180);
stavesmo129307.setAttribute('id', 'stavesmo129307');
stavesmo129307.setBegBarType(4);
stavesmo129307.setContext(context);
stavesmo129307.draw();
smo129307v0.draw(context, stavesmo129307);
const stavesmo131634 = new VF.Stave(2116, 761.2253035909339, 180);
stavesmo131634.setAttribute('id', 'stavesmo131634');
stavesmo131634.setBegBarType(4);
stavesmo131634.setContext(context);
stavesmo131634.draw();
smo131634v0.draw(context, stavesmo131634);
const stavesmo133984 = new VF.Stave(2116, 831.2253035909339, 180);
stavesmo133984.setAttribute('id', 'stavesmo133984');
stavesmo133984.setBegBarType(4);
stavesmo133984.setContext(context);
stavesmo133984.draw();
smo133984v0.draw(context, stavesmo133984);
// create beam groups and tuplets for format grp smo155380 before formatting
 
// formatting measures in staff group smo155380
fmtsmo13640421.format([smo136404v0,smo138777v0,smo141123v0,smo143451v0], 157);
const stavesmo136404 = new VF.Stave(2116, 936.2253035909339, 180);
stavesmo136404.setAttribute('id', 'stavesmo136404');
stavesmo136404.setBegBarType(4);
stavesmo136404.setContext(context);
stavesmo136404.draw();
smo136404v0.draw(context, stavesmo136404);
const stavesmo138777 = new VF.Stave(2116, 1023.2253035909339, 180);
stavesmo138777.setAttribute('id', 'stavesmo138777');
stavesmo138777.setBegBarType(4);
stavesmo138777.setContext(context);
stavesmo138777.draw();
smo138777v0.draw(context, stavesmo138777);
const stavesmo141123 = new VF.Stave(2116, 1128.225303590934, 180);
stavesmo141123.setAttribute('id', 'stavesmo141123');
stavesmo141123.setBegBarType(4);
stavesmo141123.setContext(context);
stavesmo141123.draw();
smo141123v0.draw(context, stavesmo141123);
const stavesmo143451 = new VF.Stave(2116, 1213.225303590934, 180);
stavesmo143451.setAttribute('id', 'stavesmo143451');
stavesmo143451.setBegBarType(4);
stavesmo143451.setContext(context);
stavesmo143451.draw();
smo143451v0.draw(context, stavesmo143451);
// create beam groups and tuplets for format grp smo147831 before formatting
 
// formatting measures in staff group smo147831
fmtsmo14578821.format([smo145788v0], 157);
const stavesmo145788 = new VF.Stave(2116, 1290.225303590934, 180);
stavesmo145788.setAttribute('id', 'stavesmo145788');
stavesmo145788.setBegBarType(4);
stavesmo145788.setContext(context);
stavesmo145788.draw();
smo145788v0.draw(context, stavesmo145788);
// create beam groups and tuplets for format grp smo150299 before formatting
const dirsmo221876 = smo148194.getStemDirection();
smo148194.setStemDirection(dirsmo221876);
smo148195.setStemDirection(dirsmo221876);
smo148196.setStemDirection(dirsmo221876);
smo148197.setStemDirection(dirsmo221876);
const smo221876 = new VF.Beam([smo148194,smo148195,smo148196,smo148197]);
 
// formatting measures in staff group smo150299
fmtsmo14821621.format([smo148216v0], 157);
const stavesmo148216 = new VF.Stave(2116, 1373.225303590934, 180);
stavesmo148216.setAttribute('id', 'stavesmo148216');
stavesmo148216.setBegBarType(4);
stavesmo148216.setContext(context);
stavesmo148216.draw();
smo148216v0.draw(context, stavesmo148216);
smo221876.setContext(context);
smo221876.draw();
// create beam groups and tuplets for format grp smo152657 before formatting
 
// formatting measures in staff group smo152657
fmtsmo15073921.format([smo150739v0], 157);
const stavesmo150739 = new VF.Stave(2116, 1478.225303590934, 180);
stavesmo150739.setAttribute('id', 'stavesmo150739');
stavesmo150739.setBegBarType(4);
stavesmo150739.setContext(context);
stavesmo150739.draw();
smo150739v0.draw(context, stavesmo150739);
// create beam groups and tuplets for format grp smo155370 before formatting
 
// formatting measures in staff group smo155370
fmtsmo15320721.format([smo153207v0], 157);
const stavesmo153207 = new VF.Stave(2116, 1555.225303590934, 180);
stavesmo153207.setAttribute('id', 'stavesmo153207');
stavesmo153207.setBegBarType(4);
stavesmo153207.setContext(context);
stavesmo153207.draw();
smo153207v0.draw(context, stavesmo153207);
const rightsmo155370stavesmo11502816 = new VF.StaveConnector(stavesmo115028, stavesmo124592).setType(0);
rightsmo155370stavesmo11502816.setContext(context).draw();
const rightsmo155370stavesmo12690116 = new VF.StaveConnector(stavesmo126901, stavesmo133984).setType(0);
rightsmo155370stavesmo12690116.setContext(context).draw();
const rightsmo155370stavesmo13640416 = new VF.StaveConnector(stavesmo136404, stavesmo143451).setType(0);
rightsmo155370stavesmo13640416.setContext(context).draw();
// modifier from 0-17-0-0 to 0-18-0-0
const smo230040 = new VF.StaveHairpin({ first_note: smo114939, last_note: smo114939,
       firstNote: smo114939, lastNote: smo114939 });
smo230040.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo230040.setContext(context).setPosition(4).draw();
// modifier from 0-15-0-6 to 0-15-0-9
const smo230041 = new VF.Curve(smo114897, smo114900, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo230041.setContext(context).draw();
// modifier from 0-17-0-0 to 0-18-0-0
const smo230042 = new VF.StaveTie({ first_note: smo114939, last_note: smo114956, 
          firstNote: smo114939, lastNote: smo114956, first_indices: [0], last_indices: [0]});
smo230042.setContext(context).draw();
// modifier from 0-21-0-1 to 0-21-0-2
const smo230043 = new VF.StaveTie({ first_note: smo115009, last_note: smo115010, 
          firstNote: smo115009, lastNote: smo115010, first_indices: [0], last_indices: [0]});
smo230043.setContext(context).draw();
// modifier from 1-17-0-0 to 1-18-0-0
const smo230044 = new VF.StaveHairpin({ first_note: smo117366, last_note: smo117366,
       firstNote: smo117366, lastNote: smo117366 });
smo230044.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo230044.setContext(context).setPosition(4).draw();
// modifier from 1-15-0-6 to 1-15-0-9
const smo230045 = new VF.Curve(smo117324, smo117327, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo230045.setContext(context).draw();
// modifier from 1-17-0-0 to 1-18-0-0
const smo230046 = new VF.StaveTie({ first_note: smo117366, last_note: smo117383, 
          firstNote: smo117366, lastNote: smo117383, first_indices: [0], last_indices: [0]});
smo230046.setContext(context).draw();
// modifier from 1-21-0-1 to 1-21-0-2
const smo230047 = new VF.StaveTie({ first_note: smo117436, last_note: smo117437, 
          firstNote: smo117436, lastNote: smo117437, first_indices: [0], last_indices: [0]});
smo230047.setContext(context).draw();
// modifier from 2-17-0-0 to 2-18-0-0
const smo230048 = new VF.StaveHairpin({ first_note: smo119782, last_note: smo119782,
       firstNote: smo119782, lastNote: smo119782 });
smo230048.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo230048.setContext(context).setPosition(4).draw();
// modifier from 2-17-0-0 to 2-18-0-0
const smo230049 = new VF.StaveTie({ first_note: smo119782, last_note: smo119799, 
          firstNote: smo119782, lastNote: smo119799, first_indices: [0], last_indices: [0]});
smo230049.setContext(context).draw();
// modifier from 2-21-0-1 to 2-21-0-2
const smo230050 = new VF.StaveTie({ first_note: smo119852, last_note: smo119853, 
          firstNote: smo119852, lastNote: smo119853, first_indices: [0], last_indices: [0]});
smo230050.setContext(context).draw();
// modifier from 3-17-0-0 to 3-18-0-0
const smo230051 = new VF.StaveHairpin({ first_note: smo122156, last_note: smo122156,
       firstNote: smo122156, lastNote: smo122156 });
smo230051.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo230051.setContext(context).setPosition(4).draw();
// modifier from 3-17-0-0 to 3-18-0-0
const smo230052 = new VF.StaveTie({ first_note: smo122156, last_note: smo122173, 
          firstNote: smo122156, lastNote: smo122173, first_indices: [0], last_indices: [0]});
smo230052.setContext(context).draw();
// modifier from 3-21-0-1 to 3-21-0-2
const smo230053 = new VF.StaveTie({ first_note: smo122226, last_note: smo122227, 
          firstNote: smo122226, lastNote: smo122227, first_indices: [0], last_indices: [0]});
smo230053.setContext(context).draw();
// modifier from 4-17-0-0 to 4-18-0-0
const smo230054 = new VF.StaveHairpin({ first_note: smo124507, last_note: smo124507,
       firstNote: smo124507, lastNote: smo124507 });
smo230054.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo230054.setContext(context).setPosition(4).draw();
// modifier from 4-17-0-0 to 4-18-0-0
const smo230055 = new VF.StaveTie({ first_note: smo124507, last_note: smo124524, 
          firstNote: smo124507, lastNote: smo124524, first_indices: [0], last_indices: [0]});
smo230055.setContext(context).draw();
// modifier from 5-17-0-0 to 5-18-0-0
const smo230056 = new VF.StaveHairpin({ first_note: smo126814, last_note: smo126814,
       firstNote: smo126814, lastNote: smo126814 });
smo230056.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo230056.setContext(context).setPosition(4).draw();
// modifier from 5-14-0-2 to 5-14-0-3
const smo230057 = new VF.StaveTie({ first_note: smo126749, last_note: smo126750, 
          firstNote: smo126749, lastNote: smo126750, first_indices: [0], last_indices: [0]});
smo230057.setContext(context).draw();
// modifier from 5-17-0-0 to 5-18-0-0
const smo230058 = new VF.StaveTie({ first_note: smo126814, last_note: smo126831, 
          firstNote: smo126814, lastNote: smo126831, first_indices: [0], last_indices: [0]});
smo230058.setContext(context).draw();
// modifier from 6-17-0-0 to 6-18-0-0
const smo230059 = new VF.StaveHairpin({ first_note: smo129220, last_note: smo129220,
       firstNote: smo129220, lastNote: smo129220 });
smo230059.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo230059.setContext(context).setPosition(4).draw();
// modifier from 6-17-0-0 to 6-18-0-0
const smo230060 = new VF.StaveTie({ first_note: smo129220, last_note: smo129237, 
          firstNote: smo129220, lastNote: smo129237, first_indices: [0], last_indices: [0]});
smo230060.setContext(context).draw();
// modifier from 9-17-0-0 to 9-18-0-0
const smo230061 = new VF.StaveHairpin({ first_note: smo136319, last_note: smo136319,
       firstNote: smo136319, lastNote: smo136319 });
smo230061.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo230061.setContext(context).setPosition(4).draw();
// modifier from 9-14-0-2 to 9-14-0-3
const smo230062 = new VF.StaveTie({ first_note: smo136254, last_note: smo136255, 
          firstNote: smo136254, lastNote: smo136255, first_indices: [0], last_indices: [0]});
smo230062.setContext(context).draw();
// modifier from 9-17-0-0 to 9-18-0-0
const smo230063 = new VF.StaveTie({ first_note: smo136319, last_note: smo136336, 
          firstNote: smo136319, lastNote: smo136336, first_indices: [0], last_indices: [0]});
smo230063.setContext(context).draw();
// modifier from 10-17-0-0 to 10-18-0-0
const smo230064 = new VF.StaveHairpin({ first_note: smo138692, last_note: smo138692,
       firstNote: smo138692, lastNote: smo138692 });
smo230064.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo230064.setContext(context).setPosition(4).draw();
// modifier from 10-14-0-2 to 10-14-0-3
const smo230065 = new VF.StaveTie({ first_note: smo138627, last_note: smo138628, 
          firstNote: smo138627, lastNote: smo138628, first_indices: [0], last_indices: [0]});
smo230065.setContext(context).draw();
// modifier from 10-17-0-0 to 10-18-0-0
const smo230066 = new VF.StaveTie({ first_note: smo138692, last_note: smo138709, 
          firstNote: smo138692, lastNote: smo138709, first_indices: [0], last_indices: [0]});
smo230066.setContext(context).draw();
// modifier from 11-17-0-0 to 11-18-0-0
const smo230067 = new VF.StaveHairpin({ first_note: smo141038, last_note: smo141038,
       firstNote: smo141038, lastNote: smo141038 });
smo230067.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo230067.setContext(context).setPosition(4).draw();
// modifier from 11-14-0-2 to 11-14-0-3
const smo230068 = new VF.StaveTie({ first_note: smo140973, last_note: smo140974, 
          firstNote: smo140973, lastNote: smo140974, first_indices: [0], last_indices: [0]});
smo230068.setContext(context).draw();
// modifier from 11-17-0-0 to 11-18-0-0
const smo230069 = new VF.StaveTie({ first_note: smo141038, last_note: smo141055, 
          firstNote: smo141038, lastNote: smo141055, first_indices: [0], last_indices: [0]});
smo230069.setContext(context).draw();
// modifier from 12-17-0-0 to 12-18-0-0
const smo230070 = new VF.StaveHairpin({ first_note: smo143366, last_note: smo143366,
       firstNote: smo143366, lastNote: smo143366 });
smo230070.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo230070.setContext(context).setPosition(4).draw();
// modifier from 12-17-0-0 to 12-18-0-0
const smo230071 = new VF.StaveTie({ first_note: smo143366, last_note: smo143383, 
          firstNote: smo143366, lastNote: smo143383, first_indices: [0], last_indices: [0]});
smo230071.setContext(context).draw();
// modifier from 13-14-0-2 to 13-14-0-3
const smo230072 = new VF.StaveTie({ first_note: smo145635, last_note: smo145636, 
          firstNote: smo145635, lastNote: smo145636, first_indices: [0], last_indices: [0]});
smo230072.setContext(context).draw();
// modifier from 14-21-0-3 to 14-21-0-4
const smo230073 = new VF.StaveTie({ first_note: smo148197, last_note: smo148198, 
          firstNote: smo148197, lastNote: smo148198, first_indices: [0], last_indices: [0]});
smo230073.setContext(context).draw();
}
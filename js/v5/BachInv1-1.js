// @@ Invention No. 1 p 2/3  by JS Bach
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1590.1531536000011');
svg.setAttributeNS('', 'height', '2057.8452576000013');
svg.setAttributeNS('', 'viewBox', '0 0 1360 1760');
//
// create the musical objects
VF.setMusicFont("Gonville","Bravura","Custom");
const fmtsmo7118010 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo71180v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo71180v0ar = [];
const smo71157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo71157.setAttribute('id', 'smo71157');
smo71180v0ar.push(smo71157);
const smo71158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["c#/5/n"]}'))
smo71158.setAttribute('id', 'smo71158');
const smo711580acc = new VF.Accidental('#');
smo71158.addModifier(smo711580acc, 0);
smo71180v0ar.push(smo71158);
const smo71159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo71159.setAttribute('id', 'smo71159');
smo71180v0ar.push(smo71159);
const smo71160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo71160.setAttribute('id', 'smo71160');
smo71180v0ar.push(smo71160);
const smo71161 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo71161.setAttribute('id', 'smo71161');
smo71180v0ar.push(smo71161);
const smo71162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo71162.setAttribute('id', 'smo71162');
smo71180v0ar.push(smo71162);
const smo71163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo71163.setAttribute('id', 'smo71163');
smo71180v0ar.push(smo71163);
const smo71164 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/5/n"]}'))
smo71164.setAttribute('id', 'smo71164');
smo71180v0ar.push(smo71164);
smo71180v0.addTickables(smo71180v0ar)
fmtsmo7118010.joinVoices([smo71180v0]);
const fmtsmo7179710 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo71797v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo71797v0ar = [];
const smo71766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo71766.setAttribute('id', 'smo71766');
smo71797v0ar.push(smo71766);
const smo71767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo71767.setAttribute('id', 'smo71767');
const smo717670acc = new VF.Accidental('b');
smo71767.addModifier(smo717670acc, 0);
smo71797v0ar.push(smo71767);
const smo71768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo71768.setAttribute('id', 'smo71768');
smo71797v0ar.push(smo71768);
const smo71769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo71769.setAttribute('id', 'smo71769');
smo71797v0ar.push(smo71769);
const smo71770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo71770.setAttribute('id', 'smo71770');
smo71797v0ar.push(smo71770);
const smo71771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo71771.setAttribute('id', 'smo71771');
smo71797v0ar.push(smo71771);
const smo71772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo71772.setAttribute('id', 'smo71772');
smo71797v0ar.push(smo71772);
const smo71773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo71773.setAttribute('id', 'smo71773');
smo71797v0ar.push(smo71773);
const smo71774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo71774.setAttribute('id', 'smo71774');
smo71797v0ar.push(smo71774);
const smo71775 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo71775.setAttribute('id', 'smo71775');
smo71797v0ar.push(smo71775);
const smo71776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo71776.setAttribute('id', 'smo71776');
smo71797v0ar.push(smo71776);
const smo71777 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo71777.setAttribute('id', 'smo71777');
smo71797v0ar.push(smo71777);
const smo71778 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo71778.setAttribute('id', 'smo71778');
smo71797v0ar.push(smo71778);
const smo71779 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo71779.setAttribute('id', 'smo71779');
smo71797v0ar.push(smo71779);
const smo71780 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo71780.setAttribute('id', 'smo71780');
smo71797v0ar.push(smo71780);
const smo71781 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo71781.setAttribute('id', 'smo71781');
smo71797v0ar.push(smo71781);
smo71797v0.addTickables(smo71797v0ar)
fmtsmo7179710.joinVoices([smo71797v0]);
// create beam groups and tuplets for format grp smo72104 before formatting
const dirsmo74029 = smo71157.getStemDirection();
smo71157.setStemDirection(dirsmo74029);
smo71158.setStemDirection(dirsmo74029);
smo71159.setStemDirection(dirsmo74029);
smo71160.setStemDirection(dirsmo74029);
const smo74029 = new VF.Beam([smo71157,smo71158,smo71159,smo71160]);
const dirsmo74030 = smo71161.getStemDirection();
smo71161.setStemDirection(dirsmo74030);
smo71162.setStemDirection(dirsmo74030);
smo71163.setStemDirection(dirsmo74030);
smo71164.setStemDirection(dirsmo74030);
const smo74030 = new VF.Beam([smo71161,smo71162,smo71163,smo71164]);
const dirsmo74033 = smo71766.getStemDirection();
smo71766.setStemDirection(dirsmo74033);
smo71767.setStemDirection(dirsmo74033);
smo71768.setStemDirection(dirsmo74033);
smo71769.setStemDirection(dirsmo74033);
const smo74033 = new VF.Beam([smo71766,smo71767,smo71768,smo71769]);
const dirsmo74034 = smo71770.getStemDirection();
smo71770.setStemDirection(dirsmo74034);
smo71771.setStemDirection(dirsmo74034);
smo71772.setStemDirection(dirsmo74034);
smo71773.setStemDirection(dirsmo74034);
const smo74034 = new VF.Beam([smo71770,smo71771,smo71772,smo71773]);
const dirsmo74035 = smo71774.getStemDirection();
smo71774.setStemDirection(dirsmo74035);
smo71775.setStemDirection(dirsmo74035);
smo71776.setStemDirection(dirsmo74035);
smo71777.setStemDirection(dirsmo74035);
const smo74035 = new VF.Beam([smo71774,smo71775,smo71776,smo71777]);
const dirsmo74036 = smo71778.getStemDirection();
smo71778.setStemDirection(dirsmo74036);
smo71779.setStemDirection(dirsmo74036);
smo71780.setStemDirection(dirsmo74036);
smo71781.setStemDirection(dirsmo74036);
const smo74036 = new VF.Beam([smo71778,smo71779,smo71780,smo71781]);
 
// formatting measures in staff group smo72104
fmtsmo7118010.format([smo71180v0,smo71797v0], 571);
const stavesmo71180 = new VF.Stave(50, 220.00000000000023, 627);
stavesmo71180.setAttribute('id', 'stavesmo71180');
stavesmo71180.setBegBarType(1);
stavesmo71180.addClef('treble');
stavesmo71180.setContext(context);
stavesmo71180.draw();
smo71180v0.draw(context, stavesmo71180);
smo74029.setContext(context);
smo74029.draw();
smo74030.setContext(context);
smo74030.draw();
const stavesmo71797 = new VF.Stave(50, 323.0000000000002, 627);
stavesmo71797.setAttribute('id', 'stavesmo71797');
stavesmo71797.setBegBarType(1);
stavesmo71797.addClef('treble');
stavesmo71797.setContext(context);
stavesmo71797.draw();
smo71797v0.draw(context, stavesmo71797);
smo74033.setContext(context);
smo74033.draw();
smo74034.setContext(context);
smo74034.draw();
smo74035.setContext(context);
smo74035.draw();
smo74036.setContext(context);
smo74036.draw();
const leftsmo72104stavesmo711801 = new VF.StaveConnector(stavesmo71180, stavesmo71797).setType(3);
leftsmo72104stavesmo711801.setContext(context).draw();
const fmtsmo7120311 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo71203v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo71203v0ar = [];
const smo71181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo71181.setAttribute('id', 'smo71181');
smo71203v0ar.push(smo71181);
const smo71182 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo71182.setAttribute('id', 'smo71182');
const smo711820acc = new VF.Accidental('#');
smo71182.addModifier(smo711820acc, 0);
smo71203v0ar.push(smo71182);
const smo71183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["g#/4/n"]}'))
smo71183.setAttribute('id', 'smo71183');
const smo711830acc = new VF.Accidental('#');
smo71183.addModifier(smo711830acc, 0);
smo71203v0ar.push(smo71183);
const smo71184 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo71184.setAttribute('id', 'smo71184');
smo71203v0ar.push(smo71184);
const smo71185 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo71185.setAttribute('id', 'smo71185');
smo71203v0ar.push(smo71185);
const smo71186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo71186.setAttribute('id', 'smo71186');
smo71203v0ar.push(smo71186);
const smo71187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo71187.setAttribute('id', 'smo71187');
smo71203v0ar.push(smo71187);
smo71203v0.addTickables(smo71203v0ar)
fmtsmo7120311.joinVoices([smo71203v0]);
const fmtsmo7182911 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo71829v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo71829v0ar = [];
const smo71798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo71798.setAttribute('id', 'smo71798');
smo71829v0ar.push(smo71798);
const smo71799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo71799.setAttribute('id', 'smo71799');
smo71829v0ar.push(smo71799);
const smo71800 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo71800.setAttribute('id', 'smo71800');
smo71829v0ar.push(smo71800);
const smo71801 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo71801.setAttribute('id', 'smo71801');
smo71829v0ar.push(smo71801);
const smo71802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo71802.setAttribute('id', 'smo71802');
smo71829v0ar.push(smo71802);
const smo71803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo71803.setAttribute('id', 'smo71803');
smo71829v0ar.push(smo71803);
const smo71804 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo71804.setAttribute('id', 'smo71804');
smo71829v0ar.push(smo71804);
const smo71805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo71805.setAttribute('id', 'smo71805');
smo71829v0ar.push(smo71805);
const smo71806 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo71806.setAttribute('id', 'smo71806');
smo71829v0ar.push(smo71806);
const smo71807 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo71807.setAttribute('id', 'smo71807');
smo71829v0ar.push(smo71807);
const smo71808 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo71808.setAttribute('id', 'smo71808');
smo71829v0ar.push(smo71808);
const smo71809 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo71809.setAttribute('id', 'smo71809');
smo71829v0ar.push(smo71809);
const smo71810 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["g#/3/n"]}'))
smo71810.setAttribute('id', 'smo71810');
const smo718100acc = new VF.Accidental('#');
smo71810.addModifier(smo718100acc, 0);
smo71829v0ar.push(smo71810);
const smo71811 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo71811.setAttribute('id', 'smo71811');
smo71829v0ar.push(smo71811);
const smo71812 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo71812.setAttribute('id', 'smo71812');
smo71829v0ar.push(smo71812);
const smo71813 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo71813.setAttribute('id', 'smo71813');
smo71829v0ar.push(smo71813);
smo71829v0.addTickables(smo71829v0ar)
fmtsmo7182911.joinVoices([smo71829v0]);
// create beam groups and tuplets for format grp smo72104 before formatting
const dirsmo74039 = smo71181.getStemDirection();
smo71181.setStemDirection(dirsmo74039);
smo71182.setStemDirection(dirsmo74039);
smo71183.setStemDirection(dirsmo74039);
smo71184.setStemDirection(dirsmo74039);
const smo74039 = new VF.Beam([smo71181,smo71182,smo71183,smo71184]);
const dirsmo74040 = smo71185.getStemDirection();
smo71185.setStemDirection(dirsmo74040);
smo71186.setStemDirection(dirsmo74040);
const smo74040 = new VF.Beam([smo71185,smo71186]);
const dirsmo74043 = smo71798.getStemDirection();
smo71798.setStemDirection(dirsmo74043);
smo71799.setStemDirection(dirsmo74043);
smo71800.setStemDirection(dirsmo74043);
smo71801.setStemDirection(dirsmo74043);
const smo74043 = new VF.Beam([smo71798,smo71799,smo71800,smo71801]);
const dirsmo74044 = smo71802.getStemDirection();
smo71802.setStemDirection(dirsmo74044);
smo71803.setStemDirection(dirsmo74044);
smo71804.setStemDirection(dirsmo74044);
smo71805.setStemDirection(dirsmo74044);
const smo74044 = new VF.Beam([smo71802,smo71803,smo71804,smo71805]);
const dirsmo74045 = smo71806.getStemDirection();
smo71806.setStemDirection(dirsmo74045);
smo71807.setStemDirection(dirsmo74045);
smo71808.setStemDirection(dirsmo74045);
smo71809.setStemDirection(dirsmo74045);
const smo74045 = new VF.Beam([smo71806,smo71807,smo71808,smo71809]);
const dirsmo74046 = smo71810.getStemDirection();
smo71810.setStemDirection(dirsmo74046);
smo71811.setStemDirection(dirsmo74046);
smo71812.setStemDirection(dirsmo74046);
smo71813.setStemDirection(dirsmo74046);
const smo74046 = new VF.Beam([smo71810,smo71811,smo71812,smo71813]);
 
// formatting measures in staff group smo72104
fmtsmo7120311.format([smo71203v0,smo71829v0], 568);
const stavesmo71203 = new VF.Stave(677, 220.00000000000023, 582);
stavesmo71203.setAttribute('id', 'stavesmo71203');
stavesmo71203.setBegBarType(VF.Barline.type.NONE);
stavesmo71203.setContext(context);
stavesmo71203.draw();
smo71203v0.draw(context, stavesmo71203);
smo74039.setContext(context);
smo74039.draw();
smo74040.setContext(context);
smo74040.draw();
const stavesmo71829 = new VF.Stave(677, 323.0000000000002, 582);
stavesmo71829.setAttribute('id', 'stavesmo71829');
stavesmo71829.setBegBarType(VF.Barline.type.NONE);
stavesmo71829.setContext(context);
stavesmo71829.draw();
smo71829v0.draw(context, stavesmo71829);
smo74043.setContext(context);
smo74043.draw();
smo74044.setContext(context);
smo74044.draw();
smo74045.setContext(context);
smo74045.draw();
smo74046.setContext(context);
smo74046.draw();
const rightsmo72104stavesmo712031 = new VF.StaveConnector(stavesmo71203, stavesmo71829).setType(0);
rightsmo72104stavesmo712031.setContext(context).draw();
const fmtsmo7123512 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo71235v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo71235v0ar = [];
const smo71204 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo71204.setAttribute('id', 'smo71204');
smo71235v0ar.push(smo71204);
const smo71205 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo71205.setAttribute('id', 'smo71205');
smo71235v0ar.push(smo71205);
const smo71206 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo71206.setAttribute('id', 'smo71206');
const smo712060acc = new VF.Accidental('#');
smo71206.addModifier(smo712060acc, 0);
smo71235v0ar.push(smo71206);
const smo71207 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo71207.setAttribute('id', 'smo71207');
const smo712070acc = new VF.Accidental('#');
smo71207.addModifier(smo712070acc, 0);
smo71235v0ar.push(smo71207);
const smo71208 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo71208.setAttribute('id', 'smo71208');
smo71235v0ar.push(smo71208);
const smo71209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo71209.setAttribute('id', 'smo71209');
smo71235v0ar.push(smo71209);
const smo71210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo71210.setAttribute('id', 'smo71210');
smo71235v0ar.push(smo71210);
const smo71211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo71211.setAttribute('id', 'smo71211');
smo71235v0ar.push(smo71211);
const smo71212 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo71212.setAttribute('id', 'smo71212');
smo71235v0ar.push(smo71212);
const smo71213 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo71213.setAttribute('id', 'smo71213');
smo71235v0ar.push(smo71213);
const smo71214 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo71214.setAttribute('id', 'smo71214');
smo71235v0ar.push(smo71214);
const smo71215 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo71215.setAttribute('id', 'smo71215');
smo71235v0ar.push(smo71215);
const smo71216 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo71216.setAttribute('id', 'smo71216');
smo71235v0ar.push(smo71216);
const smo71217 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo71217.setAttribute('id', 'smo71217');
smo71235v0ar.push(smo71217);
const smo71218 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo71218.setAttribute('id', 'smo71218');
smo71235v0ar.push(smo71218);
const smo71219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo71219.setAttribute('id', 'smo71219');
smo71235v0ar.push(smo71219);
smo71235v0.addTickables(smo71235v0ar)
fmtsmo7123512.joinVoices([smo71235v0]);
const fmtsmo7185812 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo71858v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo71858v0ar = [];
const smo71830 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo71830.setAttribute('id', 'smo71830');
smo71858v0ar.push(smo71830);
const smo71831 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo71831.setAttribute('id', 'smo71831');
smo71858v0ar.push(smo71831);
const smo71832 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo71832.setAttribute('id', 'smo71832');
smo71832.addModifier(new VF.Dot(), 0);
const smo71833 = new VF.Ornament('mordent_inverted');
smo71832.addModifier(smo71833, 0);
smo71858v0ar.push(smo71832);
const smo71834 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo71834.setAttribute('id', 'smo71834');
smo71858v0ar.push(smo71834);
const smo71835 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo71835.setAttribute('id', 'smo71835');
smo71858v0ar.push(smo71835);
const smo71836 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo71836.setAttribute('id', 'smo71836');
smo71858v0ar.push(smo71836);
const smo71837 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo71837.setAttribute('id', 'smo71837');
smo71858v0ar.push(smo71837);
const smo71838 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo71838.setAttribute('id', 'smo71838');
const smo718380acc = new VF.Accidental('n');
smo718380acc.setAsCautionary();
smo71838.addModifier(smo718380acc, 0);
smo71858v0ar.push(smo71838);
const smo71839 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/3/n"]}'))
smo71839.setAttribute('id', 'smo71839');
const smo718390acc = new VF.Accidental('#');
smo71839.addModifier(smo718390acc, 0);
smo71858v0ar.push(smo71839);
const smo71840 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo71840.setAttribute('id', 'smo71840');
smo71858v0ar.push(smo71840);
const smo71841 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["g#/3/n"]}'))
smo71841.setAttribute('id', 'smo71841');
const smo718410acc = new VF.Accidental('#');
smo71841.addModifier(smo718410acc, 0);
smo71858v0ar.push(smo71841);
const smo71842 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo71842.setAttribute('id', 'smo71842');
smo71858v0ar.push(smo71842);
smo71858v0.addTickables(smo71858v0ar)
fmtsmo7185812.joinVoices([smo71858v0]);
// create beam groups and tuplets for format grp smo72104 before formatting
const dirsmo74061 = smo71204.getStemDirection();
smo71204.setStemDirection(dirsmo74061);
smo71205.setStemDirection(dirsmo74061);
smo71206.setStemDirection(dirsmo74061);
smo71207.setStemDirection(dirsmo74061);
const smo74061 = new VF.Beam([smo71204,smo71205,smo71206,smo71207]);
const dirsmo74062 = smo71208.getStemDirection();
smo71208.setStemDirection(dirsmo74062);
smo71209.setStemDirection(dirsmo74062);
smo71210.setStemDirection(dirsmo74062);
smo71211.setStemDirection(dirsmo74062);
const smo74062 = new VF.Beam([smo71208,smo71209,smo71210,smo71211]);
const dirsmo74063 = smo71212.getStemDirection();
smo71212.setStemDirection(dirsmo74063);
smo71213.setStemDirection(dirsmo74063);
smo71214.setStemDirection(dirsmo74063);
smo71215.setStemDirection(dirsmo74063);
const smo74063 = new VF.Beam([smo71212,smo71213,smo71214,smo71215]);
const dirsmo74064 = smo71216.getStemDirection();
smo71216.setStemDirection(dirsmo74064);
smo71217.setStemDirection(dirsmo74064);
smo71218.setStemDirection(dirsmo74064);
smo71219.setStemDirection(dirsmo74064);
const smo74064 = new VF.Beam([smo71216,smo71217,smo71218,smo71219]);
const dirsmo74067 = smo71830.getStemDirection();
smo71830.setStemDirection(dirsmo74067);
smo71831.setStemDirection(dirsmo74067);
const smo74067 = new VF.Beam([smo71830,smo71831]);
const dirsmo74068 = smo71832.getStemDirection();
smo71832.setStemDirection(dirsmo74068);
smo71834.setStemDirection(dirsmo74068);
const smo74068 = new VF.Beam([smo71832,smo71834]);
const dirsmo74069 = smo71835.getStemDirection();
smo71835.setStemDirection(dirsmo74069);
smo71836.setStemDirection(dirsmo74069);
smo71837.setStemDirection(dirsmo74069);
smo71838.setStemDirection(dirsmo74069);
const smo74069 = new VF.Beam([smo71835,smo71836,smo71837,smo71838]);
const dirsmo74070 = smo71839.getStemDirection();
smo71839.setStemDirection(dirsmo74070);
smo71840.setStemDirection(dirsmo74070);
smo71841.setStemDirection(dirsmo74070);
smo71842.setStemDirection(dirsmo74070);
const smo74070 = new VF.Beam([smo71839,smo71840,smo71841,smo71842]);
 
// formatting measures in staff group smo72104
fmtsmo7123512.format([smo71235v0,smo71858v0], 623);
const stavesmo71235 = new VF.Stave(50, 483.0000000000002, 678);
stavesmo71235.setAttribute('id', 'stavesmo71235');
stavesmo71235.setBegBarType(1);
stavesmo71235.addClef('treble');
stavesmo71235.setContext(context);
stavesmo71235.draw();
smo71235v0.draw(context, stavesmo71235);
smo74061.setContext(context);
smo74061.draw();
smo74062.setContext(context);
smo74062.draw();
smo74063.setContext(context);
smo74063.draw();
smo74064.setContext(context);
smo74064.draw();
const stavesmo71858 = new VF.Stave(50, 627.0000000000002, 678);
stavesmo71858.setAttribute('id', 'stavesmo71858');
stavesmo71858.setBegBarType(1);
stavesmo71858.addClef('bass');
stavesmo71858.setContext(context);
stavesmo71858.draw();
smo71858v0.draw(context, stavesmo71858);
smo74067.setContext(context);
smo74067.draw();
smo74068.setContext(context);
smo74068.draw();
smo74069.setContext(context);
smo74069.draw();
smo74070.setContext(context);
smo74070.draw();
const leftsmo72104stavesmo712351 = new VF.StaveConnector(stavesmo71235, stavesmo71858).setType(3);
leftsmo72104stavesmo712351.setContext(context).draw();
const fmtsmo7126713 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo71267v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo71267v0ar = [];
const smo71236 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo71236.setAttribute('id', 'smo71236');
smo71267v0ar.push(smo71236);
const smo71237 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo71237.setAttribute('id', 'smo71237');
smo71267v0ar.push(smo71237);
const smo71238 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["g#/5/n"]}'))
smo71238.setAttribute('id', 'smo71238');
const smo712380acc = new VF.Accidental('#');
smo71238.addModifier(smo712380acc, 0);
smo71267v0ar.push(smo71238);
const smo71239 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo71239.setAttribute('id', 'smo71239');
smo71267v0ar.push(smo71239);
const smo71240 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo71240.setAttribute('id', 'smo71240');
smo71267v0ar.push(smo71240);
const smo71241 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo71241.setAttribute('id', 'smo71241');
smo71267v0ar.push(smo71241);
const smo71242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo71242.setAttribute('id', 'smo71242');
smo71267v0ar.push(smo71242);
const smo71243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo71243.setAttribute('id', 'smo71243');
smo71267v0ar.push(smo71243);
const smo71244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo71244.setAttribute('id', 'smo71244');
const smo712440acc = new VF.Accidental('#');
smo71244.addModifier(smo712440acc, 0);
smo71267v0ar.push(smo71244);
const smo71245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo71245.setAttribute('id', 'smo71245');
smo71267v0ar.push(smo71245);
const smo71246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo71246.setAttribute('id', 'smo71246');
smo71267v0ar.push(smo71246);
const smo71247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo71247.setAttribute('id', 'smo71247');
smo71267v0ar.push(smo71247);
const smo71248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo71248.setAttribute('id', 'smo71248');
const smo71249 = new VF.Ornament('mordent');
smo71248.addModifier(smo71249, 0);
smo71267v0ar.push(smo71248);
const smo71250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo71250.setAttribute('id', 'smo71250');
smo71267v0ar.push(smo71250);
const smo71251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo71251.setAttribute('id', 'smo71251');
smo71267v0ar.push(smo71251);
smo71267v0.addTickables(smo71267v0ar)
fmtsmo7126713.joinVoices([smo71267v0]);
const fmtsmo7188613 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo71886v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo71886v0ar = [];
const smo71859 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo71859.setAttribute('id', 'smo71859');
smo71886v0ar.push(smo71859);
const smo71860 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo71860.setAttribute('id', 'smo71860');
smo71886v0ar.push(smo71860);
const smo71861 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo71861.setAttribute('id', 'smo71861');
smo71886v0ar.push(smo71861);
const smo71862 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo71862.setAttribute('id', 'smo71862');
smo71886v0ar.push(smo71862);
const smo71863 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo71863.setAttribute('id', 'smo71863');
smo71886v0ar.push(smo71863);
const smo71864 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo71864.setAttribute('id', 'smo71864');
smo71886v0ar.push(smo71864);
const smo71865 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo71865.setAttribute('id', 'smo71865');
smo71886v0ar.push(smo71865);
const smo71866 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo71866.setAttribute('id', 'smo71866');
smo71886v0ar.push(smo71866);
const smo71867 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo71867.setAttribute('id', 'smo71867');
smo71886v0ar.push(smo71867);
const smo71868 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo71868.setAttribute('id', 'smo71868');
smo71886v0ar.push(smo71868);
const smo71869 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo71869.setAttribute('id', 'smo71869');
smo71886v0ar.push(smo71869);
const smo71870 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo71870.setAttribute('id', 'smo71870');
smo71886v0ar.push(smo71870);
smo71886v0.addTickables(smo71886v0ar)
fmtsmo7188613.joinVoices([smo71886v0]);
// create beam groups and tuplets for format grp smo72104 before formatting
const dirsmo74073 = smo71236.getStemDirection();
smo71236.setStemDirection(dirsmo74073);
smo71237.setStemDirection(dirsmo74073);
smo71238.setStemDirection(dirsmo74073);
smo71239.setStemDirection(dirsmo74073);
const smo74073 = new VF.Beam([smo71236,smo71237,smo71238,smo71239]);
const dirsmo74074 = smo71240.getStemDirection();
smo71240.setStemDirection(dirsmo74074);
smo71241.setStemDirection(dirsmo74074);
smo71242.setStemDirection(dirsmo74074);
smo71243.setStemDirection(dirsmo74074);
const smo74074 = new VF.Beam([smo71240,smo71241,smo71242,smo71243]);
const dirsmo74075 = smo71244.getStemDirection();
smo71244.setStemDirection(dirsmo74075);
smo71245.setStemDirection(dirsmo74075);
smo71246.setStemDirection(dirsmo74075);
smo71247.setStemDirection(dirsmo74075);
const smo74075 = new VF.Beam([smo71244,smo71245,smo71246,smo71247]);
const dirsmo74076 = smo71248.getStemDirection();
smo71248.setStemDirection(dirsmo74076);
smo71250.setStemDirection(dirsmo74076);
smo71251.setStemDirection(dirsmo74076);
const smo74076 = new VF.Beam([smo71248,smo71250,smo71251]);
const dirsmo74079 = smo71859.getStemDirection();
smo71859.setStemDirection(dirsmo74079);
smo71860.setStemDirection(dirsmo74079);
smo71861.setStemDirection(dirsmo74079);
smo71862.setStemDirection(dirsmo74079);
const smo74079 = new VF.Beam([smo71859,smo71860,smo71861,smo71862]);
const dirsmo74080 = smo71863.getStemDirection();
smo71863.setStemDirection(dirsmo74080);
smo71864.setStemDirection(dirsmo74080);
smo71865.setStemDirection(dirsmo74080);
smo71866.setStemDirection(dirsmo74080);
const smo74080 = new VF.Beam([smo71863,smo71864,smo71865,smo71866]);
const dirsmo74081 = smo71867.getStemDirection();
smo71867.setStemDirection(dirsmo74081);
smo71868.setStemDirection(dirsmo74081);
const smo74081 = new VF.Beam([smo71867,smo71868]);
const dirsmo74082 = smo71869.getStemDirection();
smo71869.setStemDirection(dirsmo74082);
smo71870.setStemDirection(dirsmo74082);
const smo74082 = new VF.Beam([smo71869,smo71870]);
 
// formatting measures in staff group smo72104
fmtsmo7126713.format([smo71267v0,smo71886v0], 518);
const stavesmo71267 = new VF.Stave(728, 483.0000000000002, 532);
stavesmo71267.setAttribute('id', 'stavesmo71267');
stavesmo71267.setBegBarType(VF.Barline.type.NONE);
stavesmo71267.setContext(context);
stavesmo71267.draw();
smo71267v0.draw(context, stavesmo71267);
smo74073.setContext(context);
smo74073.draw();
smo74074.setContext(context);
smo74074.draw();
smo74075.setContext(context);
smo74075.draw();
smo74076.setContext(context);
smo74076.draw();
const stavesmo71886 = new VF.Stave(728, 627.0000000000002, 532);
stavesmo71886.setAttribute('id', 'stavesmo71886');
stavesmo71886.setBegBarType(VF.Barline.type.NONE);
stavesmo71886.setContext(context);
stavesmo71886.draw();
smo71886v0.draw(context, stavesmo71886);
smo74079.setContext(context);
smo74079.draw();
smo74080.setContext(context);
smo74080.draw();
smo74081.setContext(context);
smo74081.draw();
smo74082.setContext(context);
smo74082.draw();
const rightsmo72104stavesmo712671 = new VF.StaveConnector(stavesmo71267, stavesmo71886).setType(0);
rightsmo72104stavesmo712671.setContext(context).draw();
const fmtsmo7129314 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo71293v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo71293v0ar = [];
const smo71268 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo71268.setAttribute('id', 'smo71268');
const  smo74313 = new VF.Articulation('a.').setPosition(4);
smo71268.addModifier(smo74313, 0);
smo71293v0ar.push(smo71268);
const smo71270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo71270.setAttribute('id', 'smo71270');
smo71293v0ar.push(smo71270);
const smo71271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo71271.setAttribute('id', 'smo71271');
smo71293v0ar.push(smo71271);
const smo71272 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo71272.setAttribute('id', 'smo71272');
smo71293v0ar.push(smo71272);
const smo71273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo71273.setAttribute('id', 'smo71273');
smo71293v0ar.push(smo71273);
const smo71274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo71274.setAttribute('id', 'smo71274');
smo71293v0ar.push(smo71274);
const smo71275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo71275.setAttribute('id', 'smo71275');
smo71293v0ar.push(smo71275);
const smo71276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo71276.setAttribute('id', 'smo71276');
smo71293v0ar.push(smo71276);
const smo71277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo71277.setAttribute('id', 'smo71277');
smo71293v0ar.push(smo71277);
smo71293v0.addTickables(smo71293v0ar)
fmtsmo7129314.joinVoices([smo71293v0]);
const fmtsmo7191314 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo71913v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo71913v0ar = [];
const smo71887 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo71887.setAttribute('id', 'smo71887');
smo71913v0ar.push(smo71887);
const smo71888 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo71888.setAttribute('id', 'smo71888');
smo71913v0ar.push(smo71888);
const smo71889 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["cn/4/r"]}'))
smo71889.setAttribute('id', 'smo71889');
smo71913v0ar.push(smo71889);
const smo71890 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["en/4/r"]}'))
smo71890.setAttribute('id', 'smo71890');
smo71913v0ar.push(smo71890);
const smo71891 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo71891.setAttribute('id', 'smo71891');
smo71913v0ar.push(smo71891);
const smo71892 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo71892.setAttribute('id', 'smo71892');
smo71913v0ar.push(smo71892);
const smo71893 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo71893.setAttribute('id', 'smo71893');
smo71913v0ar.push(smo71893);
const smo71894 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo71894.setAttribute('id', 'smo71894');
smo71913v0ar.push(smo71894);
const smo71895 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo71895.setAttribute('id', 'smo71895');
smo71913v0ar.push(smo71895);
const smo71896 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["c#/4/n"]}'))
smo71896.setAttribute('id', 'smo71896');
const smo718960acc = new VF.Accidental('#');
smo71896.addModifier(smo718960acc, 0);
smo71913v0ar.push(smo71896);
const smo71897 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo71897.setAttribute('id', 'smo71897');
smo71913v0ar.push(smo71897);
smo71913v0.addTickables(smo71913v0ar)
fmtsmo7191314.joinVoices([smo71913v0]);
// create beam groups and tuplets for format grp smo72104 before formatting
const dirsmo74094 = smo71268.getStemDirection();
smo71268.setStemDirection(dirsmo74094);
smo71270.setStemDirection(dirsmo74094);
smo71271.setStemDirection(dirsmo74094);
smo71272.setStemDirection(dirsmo74094);
const smo74094 = new VF.Beam([smo71268,smo71270,smo71271,smo71272]);
const dirsmo74095 = smo71273.getStemDirection();
smo71273.setStemDirection(dirsmo74095);
smo71274.setStemDirection(dirsmo74095);
smo71275.setStemDirection(dirsmo74095);
smo71276.setStemDirection(dirsmo74095);
const smo74095 = new VF.Beam([smo71273,smo71274,smo71275,smo71276]);
const dirsmo74098 = smo71887.getStemDirection();
smo71887.setStemDirection(dirsmo74098);
smo71888.setStemDirection(dirsmo74098);
const smo74098 = new VF.Beam([smo71887,smo71888]);
const dirsmo74099 = smo71891.getStemDirection();
smo71891.setStemDirection(dirsmo74099);
smo71892.setStemDirection(dirsmo74099);
smo71893.setStemDirection(dirsmo74099);
const smo74099 = new VF.Beam([smo71891,smo71892,smo71893]);
const dirsmo74100 = smo71894.getStemDirection();
smo71894.setStemDirection(dirsmo74100);
smo71895.setStemDirection(dirsmo74100);
smo71896.setStemDirection(dirsmo74100);
smo71897.setStemDirection(dirsmo74100);
const smo74100 = new VF.Beam([smo71894,smo71895,smo71896,smo71897]);
 
// formatting measures in staff group smo72104
fmtsmo7129314.format([smo71293v0,smo71913v0], 568);
const stavesmo71293 = new VF.Stave(50, 793.0000000000002, 624);
stavesmo71293.setAttribute('id', 'stavesmo71293');
stavesmo71293.setBegBarType(1);
stavesmo71293.addClef('treble');
stavesmo71293.setContext(context);
stavesmo71293.draw();
smo71293v0.draw(context, stavesmo71293);
smo74094.setContext(context);
smo74094.draw();
smo74095.setContext(context);
smo74095.draw();
const stavesmo71913 = new VF.Stave(50, 927.0000000000002, 624);
stavesmo71913.setAttribute('id', 'stavesmo71913');
stavesmo71913.setBegBarType(1);
stavesmo71913.addClef('bass');
stavesmo71913.setContext(context);
stavesmo71913.draw();
smo71913v0.draw(context, stavesmo71913);
smo74098.setContext(context);
smo74098.draw();
smo74099.setContext(context);
smo74099.draw();
smo74100.setContext(context);
smo74100.draw();
const leftsmo72104stavesmo712931 = new VF.StaveConnector(stavesmo71293, stavesmo71913).setType(3);
leftsmo72104stavesmo712931.setContext(context).draw();
const fmtsmo7131815 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo71318v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo71318v0ar = [];
const smo71294 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/5/n"]}'))
smo71294.setAttribute('id', 'smo71294');
smo71318v0ar.push(smo71294);
const smo71295 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo71295.setAttribute('id', 'smo71295');
smo71318v0ar.push(smo71295);
const smo71296 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/5/n"]}'))
smo71296.setAttribute('id', 'smo71296');
smo71318v0ar.push(smo71296);
const smo71297 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/5/n"]}'))
smo71297.setAttribute('id', 'smo71297');
smo71318v0ar.push(smo71297);
const smo71298 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/5/n"]}'))
smo71298.setAttribute('id', 'smo71298');
smo71318v0ar.push(smo71298);
const smo71299 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/5/n"]}'))
smo71299.setAttribute('id', 'smo71299');
smo71318v0ar.push(smo71299);
const smo71300 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/5/n"]}'))
smo71300.setAttribute('id', 'smo71300');
smo71318v0ar.push(smo71300);
const smo71301 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo71301.setAttribute('id', 'smo71301');
smo71318v0ar.push(smo71301);
const smo71302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo71302.setAttribute('id', 'smo71302');
smo71318v0ar.push(smo71302);
smo71318v0.addTickables(smo71318v0ar)
fmtsmo7131815.joinVoices([smo71318v0]);
const fmtsmo7193815 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo71938v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo71938v0ar = [];
const smo71914 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo71914.setAttribute('id', 'smo71914');
smo71938v0ar.push(smo71914);
const smo71915 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo71915.setAttribute('id', 'smo71915');
smo71938v0ar.push(smo71915);
const smo71916 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo71916.setAttribute('id', 'smo71916');
smo71938v0ar.push(smo71916);
const smo71917 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo71917.setAttribute('id', 'smo71917');
smo71938v0ar.push(smo71917);
const smo71918 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo71918.setAttribute('id', 'smo71918');
smo71938v0ar.push(smo71918);
const smo71919 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo71919.setAttribute('id', 'smo71919');
smo71938v0ar.push(smo71919);
const smo71920 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo71920.setAttribute('id', 'smo71920');
smo71938v0ar.push(smo71920);
const smo71921 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo71921.setAttribute('id', 'smo71921');
smo71938v0ar.push(smo71921);
const smo71922 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo71922.setAttribute('id', 'smo71922');
smo71938v0ar.push(smo71922);
smo71938v0.addTickables(smo71938v0ar)
fmtsmo7193815.joinVoices([smo71938v0]);
// create beam groups and tuplets for format grp smo72104 before formatting
const dirsmo74103 = smo71294.getStemDirection();
smo71294.setStemDirection(dirsmo74103);
smo71295.setStemDirection(dirsmo74103);
smo71296.setStemDirection(dirsmo74103);
smo71297.setStemDirection(dirsmo74103);
const smo74103 = new VF.Beam([smo71294,smo71295,smo71296,smo71297]);
const dirsmo74104 = smo71298.getStemDirection();
smo71298.setStemDirection(dirsmo74104);
smo71299.setStemDirection(dirsmo74104);
smo71300.setStemDirection(dirsmo74104);
smo71301.setStemDirection(dirsmo74104);
const smo74104 = new VF.Beam([smo71298,smo71299,smo71300,smo71301]);
const dirsmo74107 = smo71915.getStemDirection();
smo71915.setStemDirection(dirsmo74107);
smo71916.setStemDirection(dirsmo74107);
smo71917.setStemDirection(dirsmo74107);
smo71918.setStemDirection(dirsmo74107);
const smo74107 = new VF.Beam([smo71915,smo71916,smo71917,smo71918]);
const dirsmo74108 = smo71919.getStemDirection();
smo71919.setStemDirection(dirsmo74108);
smo71920.setStemDirection(dirsmo74108);
smo71921.setStemDirection(dirsmo74108);
smo71922.setStemDirection(dirsmo74108);
const smo74108 = new VF.Beam([smo71919,smo71920,smo71921,smo71922]);
 
// formatting measures in staff group smo72104
fmtsmo7131815.format([smo71318v0,smo71938v0], 572);
const stavesmo71318 = new VF.Stave(674, 793.0000000000002, 586);
stavesmo71318.setAttribute('id', 'stavesmo71318');
stavesmo71318.setBegBarType(VF.Barline.type.NONE);
stavesmo71318.setContext(context);
stavesmo71318.draw();
smo71318v0.draw(context, stavesmo71318);
smo74103.setContext(context);
smo74103.draw();
smo74104.setContext(context);
smo74104.draw();
const stavesmo71938 = new VF.Stave(674, 927.0000000000002, 586);
stavesmo71938.setAttribute('id', 'stavesmo71938');
stavesmo71938.setBegBarType(VF.Barline.type.NONE);
stavesmo71938.setContext(context);
stavesmo71938.draw();
smo71938v0.draw(context, stavesmo71938);
smo74107.setContext(context);
smo74107.draw();
smo74108.setContext(context);
smo74108.draw();
const rightsmo72104stavesmo713181 = new VF.StaveConnector(stavesmo71318, stavesmo71938).setType(0);
rightsmo72104stavesmo713181.setContext(context).draw();
const fmtsmo7134416 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo71344v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo71344v0ar = [];
const smo71319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo71319.setAttribute('id', 'smo71319');
const  smo74322 = new VF.Articulation('a.').setPosition(3);
smo71319.addModifier(smo74322, 0);
smo71344v0ar.push(smo71319);
const smo71321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo71321.setAttribute('id', 'smo71321');
smo71344v0ar.push(smo71321);
const smo71322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo71322.setAttribute('id', 'smo71322');
smo71344v0ar.push(smo71322);
const smo71323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo71323.setAttribute('id', 'smo71323');
smo71344v0ar.push(smo71323);
const smo71324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo71324.setAttribute('id', 'smo71324');
smo71344v0ar.push(smo71324);
const smo71325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo71325.setAttribute('id', 'smo71325');
smo71344v0ar.push(smo71325);
const smo71326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo71326.setAttribute('id', 'smo71326');
smo71344v0ar.push(smo71326);
const smo71327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo71327.setAttribute('id', 'smo71327');
smo71344v0ar.push(smo71327);
const smo71328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo71328.setAttribute('id', 'smo71328');
smo71344v0ar.push(smo71328);
smo71344v0.addTickables(smo71344v0ar)
fmtsmo7134416.joinVoices([smo71344v0]);
const fmtsmo7196316 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo71963v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo71963v0ar = [];
const smo71939 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo71939.setAttribute('id', 'smo71939');
smo71963v0ar.push(smo71939);
const smo71940 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo71940.setAttribute('id', 'smo71940');
smo71963v0ar.push(smo71940);
const smo71941 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo71941.setAttribute('id', 'smo71941');
smo71963v0ar.push(smo71941);
const smo71942 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo71942.setAttribute('id', 'smo71942');
smo71963v0ar.push(smo71942);
const smo71943 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo71943.setAttribute('id', 'smo71943');
smo71963v0ar.push(smo71943);
const smo71944 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo71944.setAttribute('id', 'smo71944');
smo71963v0ar.push(smo71944);
const smo71945 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo71945.setAttribute('id', 'smo71945');
smo71963v0ar.push(smo71945);
const smo71946 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo71946.setAttribute('id', 'smo71946');
smo71963v0ar.push(smo71946);
const smo71947 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo71947.setAttribute('id', 'smo71947');
smo71963v0ar.push(smo71947);
smo71963v0.addTickables(smo71963v0ar)
fmtsmo7196316.joinVoices([smo71963v0]);
// create beam groups and tuplets for format grp smo72104 before formatting
const dirsmo74119 = smo71319.getStemDirection();
smo71319.setStemDirection(dirsmo74119);
smo71321.setStemDirection(dirsmo74119);
smo71322.setStemDirection(dirsmo74119);
smo71323.setStemDirection(dirsmo74119);
const smo74119 = new VF.Beam([smo71319,smo71321,smo71322,smo71323]);
const dirsmo74120 = smo71324.getStemDirection();
smo71324.setStemDirection(dirsmo74120);
smo71325.setStemDirection(dirsmo74120);
smo71326.setStemDirection(dirsmo74120);
smo71327.setStemDirection(dirsmo74120);
const smo74120 = new VF.Beam([smo71324,smo71325,smo71326,smo71327]);
const dirsmo74123 = smo71940.getStemDirection();
smo71940.setStemDirection(dirsmo74123);
smo71941.setStemDirection(dirsmo74123);
smo71942.setStemDirection(dirsmo74123);
smo71943.setStemDirection(dirsmo74123);
const smo74123 = new VF.Beam([smo71940,smo71941,smo71942,smo71943]);
const dirsmo74124 = smo71944.getStemDirection();
smo71944.setStemDirection(dirsmo74124);
smo71945.setStemDirection(dirsmo74124);
smo71946.setStemDirection(dirsmo74124);
smo71947.setStemDirection(dirsmo74124);
const smo74124 = new VF.Beam([smo71944,smo71945,smo71946,smo71947]);
 
// formatting measures in staff group smo72104
fmtsmo7134416.format([smo71344v0,smo71963v0], 561);
const stavesmo71344 = new VF.Stave(50, 1058.0000000000002, 616);
stavesmo71344.setAttribute('id', 'stavesmo71344');
stavesmo71344.setBegBarType(1);
stavesmo71344.addClef('treble');
stavesmo71344.setContext(context);
stavesmo71344.draw();
smo71344v0.draw(context, stavesmo71344);
smo74119.setContext(context);
smo74119.draw();
smo74120.setContext(context);
smo74120.draw();
const stavesmo71963 = new VF.Stave(50, 1177.0000000000002, 616);
stavesmo71963.setAttribute('id', 'stavesmo71963');
stavesmo71963.setBegBarType(1);
stavesmo71963.addClef('bass');
stavesmo71963.setContext(context);
stavesmo71963.draw();
smo71963v0.draw(context, stavesmo71963);
smo74123.setContext(context);
smo74123.draw();
smo74124.setContext(context);
smo74124.draw();
const leftsmo72104stavesmo713441 = new VF.StaveConnector(stavesmo71344, stavesmo71963).setType(3);
leftsmo72104stavesmo713441.setContext(context).draw();
const fmtsmo7136917 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo71369v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo71369v0ar = [];
const smo71345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo71345.setAttribute('id', 'smo71345');
smo71369v0ar.push(smo71345);
const smo71346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo71346.setAttribute('id', 'smo71346');
smo71369v0ar.push(smo71346);
const smo71347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo71347.setAttribute('id', 'smo71347');
smo71369v0ar.push(smo71347);
const smo71348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo71348.setAttribute('id', 'smo71348');
smo71369v0ar.push(smo71348);
const smo71349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo71349.setAttribute('id', 'smo71349');
smo71369v0ar.push(smo71349);
const smo71350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo71350.setAttribute('id', 'smo71350');
smo71369v0ar.push(smo71350);
const smo71351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo71351.setAttribute('id', 'smo71351');
smo71369v0ar.push(smo71351);
const smo71352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo71352.setAttribute('id', 'smo71352');
smo71369v0ar.push(smo71352);
const smo71353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo71353.setAttribute('id', 'smo71353');
smo71369v0ar.push(smo71353);
smo71369v0.addTickables(smo71369v0ar)
fmtsmo7136917.joinVoices([smo71369v0]);
const fmtsmo7198817 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo71988v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo71988v0ar = [];
const smo71964 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo71964.setAttribute('id', 'smo71964');
smo71988v0ar.push(smo71964);
const smo71965 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo71965.setAttribute('id', 'smo71965');
smo71988v0ar.push(smo71965);
const smo71966 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo71966.setAttribute('id', 'smo71966');
smo71988v0ar.push(smo71966);
const smo71967 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo71967.setAttribute('id', 'smo71967');
smo71988v0ar.push(smo71967);
const smo71968 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo71968.setAttribute('id', 'smo71968');
const smo719680acc = new VF.Accidental('b');
smo71968.addModifier(smo719680acc, 0);
smo71988v0ar.push(smo71968);
const smo71969 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo71969.setAttribute('id', 'smo71969');
smo71988v0ar.push(smo71969);
const smo71970 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo71970.setAttribute('id', 'smo71970');
smo71988v0ar.push(smo71970);
const smo71971 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo71971.setAttribute('id', 'smo71971');
smo71988v0ar.push(smo71971);
const smo71972 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo71972.setAttribute('id', 'smo71972');
smo71988v0ar.push(smo71972);
smo71988v0.addTickables(smo71988v0ar)
fmtsmo7198817.joinVoices([smo71988v0]);
// create beam groups and tuplets for format grp smo72104 before formatting
const dirsmo74127 = smo71345.getStemDirection();
smo71345.setStemDirection(dirsmo74127);
smo71346.setStemDirection(dirsmo74127);
smo71347.setStemDirection(dirsmo74127);
smo71348.setStemDirection(dirsmo74127);
const smo74127 = new VF.Beam([smo71345,smo71346,smo71347,smo71348]);
const dirsmo74128 = smo71349.getStemDirection();
smo71349.setStemDirection(dirsmo74128);
smo71350.setStemDirection(dirsmo74128);
smo71351.setStemDirection(dirsmo74128);
smo71352.setStemDirection(dirsmo74128);
const smo74128 = new VF.Beam([smo71349,smo71350,smo71351,smo71352]);
const dirsmo74131 = smo71965.getStemDirection();
smo71965.setStemDirection(dirsmo74131);
smo71966.setStemDirection(dirsmo74131);
smo71967.setStemDirection(dirsmo74131);
smo71968.setStemDirection(dirsmo74131);
const smo74131 = new VF.Beam([smo71965,smo71966,smo71967,smo71968]);
const dirsmo74132 = smo71969.getStemDirection();
smo71969.setStemDirection(dirsmo74132);
smo71970.setStemDirection(dirsmo74132);
smo71971.setStemDirection(dirsmo74132);
smo71972.setStemDirection(dirsmo74132);
const smo74132 = new VF.Beam([smo71969,smo71970,smo71971,smo71972]);
 
// formatting measures in staff group smo72104
fmtsmo7136917.format([smo71369v0,smo71988v0], 579);
const stavesmo71369 = new VF.Stave(666, 1058.0000000000002, 593);
stavesmo71369.setAttribute('id', 'stavesmo71369');
stavesmo71369.setBegBarType(VF.Barline.type.NONE);
stavesmo71369.setContext(context);
stavesmo71369.draw();
smo71369v0.draw(context, stavesmo71369);
smo74127.setContext(context);
smo74127.draw();
smo74128.setContext(context);
smo74128.draw();
const stavesmo71988 = new VF.Stave(666, 1177.0000000000002, 593);
stavesmo71988.setAttribute('id', 'stavesmo71988');
stavesmo71988.setBegBarType(VF.Barline.type.NONE);
stavesmo71988.setContext(context);
stavesmo71988.draw();
smo71988v0.draw(context, stavesmo71988);
smo74131.setContext(context);
smo74131.draw();
smo74132.setContext(context);
smo74132.draw();
const rightsmo72104stavesmo713691 = new VF.StaveConnector(stavesmo71369, stavesmo71988).setType(0);
rightsmo72104stavesmo713691.setContext(context).draw();
const fmtsmo7140218 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo71402v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo71402v0ar = [];
const smo71370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo71370.setAttribute('id', 'smo71370');
const  smo74331 = new VF.Articulation('a.').setPosition(3);
smo71370.addModifier(smo74331, 0);
smo71402v0ar.push(smo71370);
const smo71372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo71372.setAttribute('id', 'smo71372');
smo71402v0ar.push(smo71372);
const smo71373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo71373.setAttribute('id', 'smo71373');
smo71402v0ar.push(smo71373);
const smo71374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo71374.setAttribute('id', 'smo71374');
smo71402v0ar.push(smo71374);
const smo71375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo71375.setAttribute('id', 'smo71375');
smo71402v0ar.push(smo71375);
const smo71376 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo71376.setAttribute('id', 'smo71376');
smo71402v0ar.push(smo71376);
const smo71377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo71377.setAttribute('id', 'smo71377');
smo71402v0ar.push(smo71377);
const smo71378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo71378.setAttribute('id', 'smo71378');
smo71402v0ar.push(smo71378);
const smo71379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo71379.setAttribute('id', 'smo71379');
smo71402v0ar.push(smo71379);
const smo71380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo71380.setAttribute('id', 'smo71380');
smo71402v0ar.push(smo71380);
const smo71381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo71381.setAttribute('id', 'smo71381');
smo71402v0ar.push(smo71381);
const smo71382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo71382.setAttribute('id', 'smo71382');
smo71402v0ar.push(smo71382);
const smo71383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo71383.setAttribute('id', 'smo71383');
smo71402v0ar.push(smo71383);
const smo71384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo71384.setAttribute('id', 'smo71384');
smo71402v0ar.push(smo71384);
const smo71385 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo71385.setAttribute('id', 'smo71385');
smo71402v0ar.push(smo71385);
const smo71386 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo71386.setAttribute('id', 'smo71386');
smo71402v0ar.push(smo71386);
smo71402v0.addTickables(smo71402v0ar)
fmtsmo7140218.joinVoices([smo71402v0]);
const fmtsmo7201218 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo72012v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72012v0ar = [];
const smo71989 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo71989.setAttribute('id', 'smo71989');
smo72012v0ar.push(smo71989);
const smo71990 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo71990.setAttribute('id', 'smo71990');
const smo719900acc = new VF.Accidental('b');
smo71990.addModifier(smo719900acc, 0);
smo72012v0ar.push(smo71990);
const smo71991 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo71991.setAttribute('id', 'smo71991');
smo72012v0ar.push(smo71991);
const smo71992 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo71992.setAttribute('id', 'smo71992');
smo72012v0ar.push(smo71992);
const smo71993 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo71993.setAttribute('id', 'smo71993');
smo72012v0ar.push(smo71993);
const smo71994 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo71994.setAttribute('id', 'smo71994');
smo72012v0ar.push(smo71994);
const smo71995 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo71995.setAttribute('id', 'smo71995');
smo72012v0ar.push(smo71995);
const smo71996 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo71996.setAttribute('id', 'smo71996');
smo72012v0ar.push(smo71996);
smo72012v0.addTickables(smo72012v0ar)
fmtsmo7201218.joinVoices([smo72012v0]);
// create beam groups and tuplets for format grp smo72104 before formatting
const dirsmo74145 = smo71370.getStemDirection();
smo71370.setStemDirection(dirsmo74145);
smo71372.setStemDirection(dirsmo74145);
smo71373.setStemDirection(dirsmo74145);
smo71374.setStemDirection(dirsmo74145);
const smo74145 = new VF.Beam([smo71370,smo71372,smo71373,smo71374]);
const dirsmo74146 = smo71375.getStemDirection();
smo71375.setStemDirection(dirsmo74146);
smo71376.setStemDirection(dirsmo74146);
smo71377.setStemDirection(dirsmo74146);
smo71378.setStemDirection(dirsmo74146);
const smo74146 = new VF.Beam([smo71375,smo71376,smo71377,smo71378]);
const dirsmo74147 = smo71379.getStemDirection();
smo71379.setStemDirection(dirsmo74147);
smo71380.setStemDirection(dirsmo74147);
smo71381.setStemDirection(dirsmo74147);
smo71382.setStemDirection(dirsmo74147);
const smo74147 = new VF.Beam([smo71379,smo71380,smo71381,smo71382]);
const dirsmo74148 = smo71383.getStemDirection();
smo71383.setStemDirection(dirsmo74148);
smo71384.setStemDirection(dirsmo74148);
smo71385.setStemDirection(dirsmo74148);
smo71386.setStemDirection(dirsmo74148);
const smo74148 = new VF.Beam([smo71383,smo71384,smo71385,smo71386]);
const dirsmo74151 = smo71989.getStemDirection();
smo71989.setStemDirection(dirsmo74151);
smo71990.setStemDirection(dirsmo74151);
smo71991.setStemDirection(dirsmo74151);
smo71992.setStemDirection(dirsmo74151);
const smo74151 = new VF.Beam([smo71989,smo71990,smo71991,smo71992]);
const dirsmo74152 = smo71993.getStemDirection();
smo71993.setStemDirection(dirsmo74152);
smo71994.setStemDirection(dirsmo74152);
smo71995.setStemDirection(dirsmo74152);
smo71996.setStemDirection(dirsmo74152);
const smo74152 = new VF.Beam([smo71993,smo71994,smo71995,smo71996]);
 
// formatting measures in staff group smo72104
fmtsmo7140218.format([smo71402v0,smo72012v0], 395);
const stavesmo71402 = new VF.Stave(50, 1318.0000000000002, 451);
stavesmo71402.setAttribute('id', 'stavesmo71402');
stavesmo71402.setBegBarType(1);
stavesmo71402.addClef('treble');
stavesmo71402.setContext(context);
stavesmo71402.draw();
smo71402v0.draw(context, stavesmo71402);
smo74145.setContext(context);
smo74145.draw();
smo74146.setContext(context);
smo74146.draw();
smo74147.setContext(context);
smo74147.draw();
smo74148.setContext(context);
smo74148.draw();
const stavesmo72012 = new VF.Stave(50, 1452.0000000000002, 451);
stavesmo72012.setAttribute('id', 'stavesmo72012');
stavesmo72012.setBegBarType(1);
stavesmo72012.addClef('bass');
stavesmo72012.setContext(context);
stavesmo72012.draw();
smo72012v0.draw(context, stavesmo72012);
smo74151.setContext(context);
smo74151.draw();
smo74152.setContext(context);
smo74152.draw();
const leftsmo72104stavesmo714021 = new VF.StaveConnector(stavesmo71402, stavesmo72012).setType(3);
leftsmo72104stavesmo714021.setContext(context).draw();
const fmtsmo7143119 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo71431v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo71431v0ar = [];
const smo71403 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo71403.setAttribute('id', 'smo71403');
smo71431v0ar.push(smo71403);
const smo71404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo71404.setAttribute('id', 'smo71404');
smo71431v0ar.push(smo71404);
const smo71405 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo71405.setAttribute('id', 'smo71405');
smo71431v0ar.push(smo71405);
const smo71406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo71406.setAttribute('id', 'smo71406');
smo71431v0ar.push(smo71406);
const smo71407 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/6/n"]}'))
smo71407.setAttribute('id', 'smo71407');
smo71431v0ar.push(smo71407);
const smo71408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo71408.setAttribute('id', 'smo71408');
smo71431v0ar.push(smo71408);
const smo71409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo71409.setAttribute('id', 'smo71409');
smo71431v0ar.push(smo71409);
const smo71410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo71410.setAttribute('id', 'smo71410');
smo71431v0ar.push(smo71410);
const smo71411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/6/n"]}'))
smo71411.setAttribute('id', 'smo71411');
smo71431v0ar.push(smo71411);
const smo71412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo71412.setAttribute('id', 'smo71412');
smo71431v0ar.push(smo71412);
const smo71413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo71413.setAttribute('id', 'smo71413');
smo71431v0ar.push(smo71413);
const smo71414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo71414.setAttribute('id', 'smo71414');
smo71431v0ar.push(smo71414);
const smo71415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo71415.setAttribute('id', 'smo71415');
smo71431v0ar.push(smo71415);
smo71431v0.addTickables(smo71431v0ar)
fmtsmo7143119.joinVoices([smo71431v0]);
const fmtsmo7204019 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo72040v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72040v0ar = [];
const smo72013 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo72013.setAttribute('id', 'smo72013');
smo72040v0ar.push(smo72013);
const smo72014 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo72014.setAttribute('id', 'smo72014');
smo72040v0ar.push(smo72014);
const smo72015 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo72015.setAttribute('id', 'smo72015');
smo72040v0ar.push(smo72015);
const smo72016 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo72016.setAttribute('id', 'smo72016');
smo72040v0ar.push(smo72016);
const smo72017 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo72017.setAttribute('id', 'smo72017');
smo72040v0ar.push(smo72017);
const smo72018 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo72018.setAttribute('id', 'smo72018');
smo72040v0ar.push(smo72018);
const smo72019 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo72019.setAttribute('id', 'smo72019');
smo72040v0ar.push(smo72019);
const smo72020 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo72020.setAttribute('id', 'smo72020');
smo72040v0ar.push(smo72020);
const smo72021 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo72021.setAttribute('id', 'smo72021');
smo72040v0ar.push(smo72021);
const smo72022 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo72022.setAttribute('id', 'smo72022');
smo72040v0ar.push(smo72022);
const smo72023 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo72023.setAttribute('id', 'smo72023');
smo72040v0ar.push(smo72023);
const smo72024 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo72024.setAttribute('id', 'smo72024');
smo72040v0ar.push(smo72024);
smo72040v0.addTickables(smo72040v0ar)
fmtsmo7204019.joinVoices([smo72040v0]);
// create beam groups and tuplets for format grp smo72104 before formatting
const dirsmo74155 = smo71403.getStemDirection();
smo71403.setStemDirection(dirsmo74155);
smo71404.setStemDirection(dirsmo74155);
smo71405.setStemDirection(dirsmo74155);
smo71406.setStemDirection(dirsmo74155);
const smo74155 = new VF.Beam([smo71403,smo71404,smo71405,smo71406]);
const dirsmo74156 = smo71407.getStemDirection();
smo71407.setStemDirection(dirsmo74156);
smo71408.setStemDirection(dirsmo74156);
smo71409.setStemDirection(dirsmo74156);
smo71410.setStemDirection(dirsmo74156);
const smo74156 = new VF.Beam([smo71407,smo71408,smo71409,smo71410]);
const dirsmo74157 = smo71411.getStemDirection();
smo71411.setStemDirection(dirsmo74157);
smo71412.setStemDirection(dirsmo74157);
const smo74157 = new VF.Beam([smo71411,smo71412]);
const dirsmo74158 = smo71413.getStemDirection();
smo71413.setStemDirection(dirsmo74158);
smo71414.setStemDirection(dirsmo74158);
smo71415.setStemDirection(dirsmo74158);
const smo74158 = new VF.Beam([smo71413,smo71414,smo71415]);
const dirsmo74161 = smo72013.getStemDirection();
smo72013.setStemDirection(dirsmo74161);
smo72014.setStemDirection(dirsmo74161);
const smo74161 = new VF.Beam([smo72013,smo72014]);
const dirsmo74162 = smo72015.getStemDirection();
smo72015.setStemDirection(dirsmo74162);
smo72016.setStemDirection(dirsmo74162);
const smo74162 = new VF.Beam([smo72015,smo72016]);
const dirsmo74163 = smo72017.getStemDirection();
smo72017.setStemDirection(dirsmo74163);
smo72018.setStemDirection(dirsmo74163);
smo72019.setStemDirection(dirsmo74163);
smo72020.setStemDirection(dirsmo74163);
const smo74163 = new VF.Beam([smo72017,smo72018,smo72019,smo72020]);
const dirsmo74164 = smo72021.getStemDirection();
smo72021.setStemDirection(dirsmo74164);
smo72022.setStemDirection(dirsmo74164);
smo72023.setStemDirection(dirsmo74164);
smo72024.setStemDirection(dirsmo74164);
const smo74164 = new VF.Beam([smo72021,smo72022,smo72023,smo72024]);
 
// formatting measures in staff group smo72104
fmtsmo7143119.format([smo71431v0,smo72040v0], 368);
const stavesmo71431 = new VF.Stave(501, 1318.0000000000002, 382);
stavesmo71431.setAttribute('id', 'stavesmo71431');
stavesmo71431.setBegBarType(VF.Barline.type.NONE);
stavesmo71431.setContext(context);
stavesmo71431.draw();
smo71431v0.draw(context, stavesmo71431);
smo74155.setContext(context);
smo74155.draw();
smo74156.setContext(context);
smo74156.draw();
smo74157.setContext(context);
smo74157.draw();
smo74158.setContext(context);
smo74158.draw();
const stavesmo72040 = new VF.Stave(501, 1452.0000000000002, 382);
stavesmo72040.setAttribute('id', 'stavesmo72040');
stavesmo72040.setBegBarType(VF.Barline.type.NONE);
stavesmo72040.setContext(context);
stavesmo72040.draw();
smo72040v0.draw(context, stavesmo72040);
smo74161.setContext(context);
smo74161.draw();
smo74162.setContext(context);
smo74162.draw();
smo74163.setContext(context);
smo74163.draw();
smo74164.setContext(context);
smo74164.draw();
const fmtsmo7146320 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo71463v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo71463v0ar = [];
const smo71432 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo71432.setAttribute('id', 'smo71432');
smo71463v0ar.push(smo71432);
const smo71433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo71433.setAttribute('id', 'smo71433');
smo71463v0ar.push(smo71433);
const smo71434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo71434.setAttribute('id', 'smo71434');
smo71463v0ar.push(smo71434);
const smo71435 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo71435.setAttribute('id', 'smo71435');
smo71463v0ar.push(smo71435);
const smo71436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo71436.setAttribute('id', 'smo71436');
smo71463v0ar.push(smo71436);
const smo71437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo71437.setAttribute('id', 'smo71437');
smo71463v0ar.push(smo71437);
const smo71438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo71438.setAttribute('id', 'smo71438');
smo71463v0ar.push(smo71438);
const smo71439 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo71439.setAttribute('id', 'smo71439');
smo71463v0ar.push(smo71439);
const smo71440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo71440.setAttribute('id', 'smo71440');
smo71463v0ar.push(smo71440);
const smo71441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo71441.setAttribute('id', 'smo71441');
smo71463v0ar.push(smo71441);
const smo71442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo71442.setAttribute('id', 'smo71442');
smo71463v0ar.push(smo71442);
const smo71443 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo71443.setAttribute('id', 'smo71443');
smo71463v0ar.push(smo71443);
const smo71444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo71444.setAttribute('id', 'smo71444');
smo71463v0ar.push(smo71444);
const smo71445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo71445.setAttribute('id', 'smo71445');
smo71463v0ar.push(smo71445);
const smo71446 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo71446.setAttribute('id', 'smo71446');
smo71463v0ar.push(smo71446);
const smo71447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo71447.setAttribute('id', 'smo71447');
smo71463v0ar.push(smo71447);
smo71463v0.addTickables(smo71463v0ar)
fmtsmo7146320.joinVoices([smo71463v0]);
const fmtsmo7206820 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo72068v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72068v0ar = [];
const smo72041 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo72041.setAttribute('id', 'smo72041');
smo72068v0ar.push(smo72041);
const smo72042 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo72042.setAttribute('id', 'smo72042');
smo72068v0ar.push(smo72042);
const smo72043 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo72043.setAttribute('id', 'smo72043');
smo72068v0ar.push(smo72043);
const smo72044 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo72044.setAttribute('id', 'smo72044');
smo72068v0ar.push(smo72044);
const smo72045 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo72045.setAttribute('id', 'smo72045');
smo72068v0ar.push(smo72045);
const smo72046 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo72046.setAttribute('id', 'smo72046');
smo72068v0ar.push(smo72046);
const smo72047 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo72047.setAttribute('id', 'smo72047');
smo72068v0ar.push(smo72047);
const smo72048 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo72048.setAttribute('id', 'smo72048');
smo72068v0ar.push(smo72048);
const smo72049 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo72049.setAttribute('id', 'smo72049');
const  smo74340 = new VF.Articulation('a.').setPosition(3);
smo72049.addModifier(smo74340, 0);
smo72068v0ar.push(smo72049);
const smo72051 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo72051.setAttribute('id', 'smo72051');
const  smo74341 = new VF.Articulation('a.').setPosition(3);
smo72051.addModifier(smo74341, 0);
smo72068v0ar.push(smo72051);
smo72068v0.addTickables(smo72068v0ar)
fmtsmo7206820.joinVoices([smo72068v0]);
// create beam groups and tuplets for format grp smo72104 before formatting
const dirsmo74167 = smo71432.getStemDirection();
smo71432.setStemDirection(dirsmo74167);
smo71433.setStemDirection(dirsmo74167);
smo71434.setStemDirection(dirsmo74167);
smo71435.setStemDirection(dirsmo74167);
const smo74167 = new VF.Beam([smo71432,smo71433,smo71434,smo71435]);
const dirsmo74168 = smo71436.getStemDirection();
smo71436.setStemDirection(dirsmo74168);
smo71437.setStemDirection(dirsmo74168);
smo71438.setStemDirection(dirsmo74168);
smo71439.setStemDirection(dirsmo74168);
const smo74168 = new VF.Beam([smo71436,smo71437,smo71438,smo71439]);
const dirsmo74169 = smo71440.getStemDirection();
smo71440.setStemDirection(dirsmo74169);
smo71441.setStemDirection(dirsmo74169);
smo71442.setStemDirection(dirsmo74169);
smo71443.setStemDirection(dirsmo74169);
const smo74169 = new VF.Beam([smo71440,smo71441,smo71442,smo71443]);
const dirsmo74170 = smo71444.getStemDirection();
smo71444.setStemDirection(dirsmo74170);
smo71445.setStemDirection(dirsmo74170);
smo71446.setStemDirection(dirsmo74170);
smo71447.setStemDirection(dirsmo74170);
const smo74170 = new VF.Beam([smo71444,smo71445,smo71446,smo71447]);
const dirsmo74173 = smo72041.getStemDirection();
smo72041.setStemDirection(dirsmo74173);
smo72042.setStemDirection(dirsmo74173);
const smo74173 = new VF.Beam([smo72041,smo72042]);
const dirsmo74174 = smo72043.getStemDirection();
smo72043.setStemDirection(dirsmo74174);
smo72044.setStemDirection(dirsmo74174);
const smo74174 = new VF.Beam([smo72043,smo72044]);
const dirsmo74175 = smo72045.getStemDirection();
smo72045.setStemDirection(dirsmo74175);
smo72046.setStemDirection(dirsmo74175);
smo72047.setStemDirection(dirsmo74175);
smo72048.setStemDirection(dirsmo74175);
const smo74175 = new VF.Beam([smo72045,smo72046,smo72047,smo72048]);
const dirsmo74176 = smo72049.getStemDirection();
smo72049.setStemDirection(dirsmo74176);
smo72051.setStemDirection(dirsmo74176);
const smo74176 = new VF.Beam([smo72049,smo72051]);
 
// formatting measures in staff group smo72104
fmtsmo7146320.format([smo71463v0,smo72068v0], 363);
const stavesmo71463 = new VF.Stave(883, 1318.0000000000002, 377);
stavesmo71463.setAttribute('id', 'stavesmo71463');
stavesmo71463.setBegBarType(VF.Barline.type.NONE);
stavesmo71463.setContext(context);
stavesmo71463.draw();
smo71463v0.draw(context, stavesmo71463);
smo74167.setContext(context);
smo74167.draw();
smo74168.setContext(context);
smo74168.draw();
smo74169.setContext(context);
smo74169.draw();
smo74170.setContext(context);
smo74170.draw();
const stavesmo72068 = new VF.Stave(883, 1452.0000000000002, 377);
stavesmo72068.setAttribute('id', 'stavesmo72068');
stavesmo72068.setBegBarType(VF.Barline.type.NONE);
stavesmo72068.setContext(context);
stavesmo72068.draw();
smo72068v0.draw(context, stavesmo72068);
smo74173.setContext(context);
smo74173.draw();
smo74174.setContext(context);
smo74174.draw();
smo74175.setContext(context);
smo74175.draw();
smo74176.setContext(context);
smo74176.draw();
const rightsmo72104stavesmo714631 = new VF.StaveConnector(stavesmo71463, stavesmo72068).setType(0);
rightsmo72104stavesmo714631.setContext(context).draw();
// modifier from 0-10-0-1 to 0-10-0-4
const smo74346 = new VF.Curve(smo71158, smo71161, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":1,"position_end":2}'));
smo74346.setContext(context).draw();
// modifier from 0-10-0-5 to 0-11-0-0
const smo74347 = new VF.Curve(smo71162, smo71181, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo74347.setContext(context).draw();
// modifier from 0-11-0-1 to 0-11-0-6
const smo74348 = new VF.Curve(smo71182, smo71187, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo74348.setContext(context).draw();
// modifier from 0-15-0-8 to 0-16-0-0
const smo74349 = new VF.Curve(smo71302, null, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"position_end":1}'));
smo74349.setContext(context).draw();
// modifier from 0-15-0-8 to 0-16-0-0
const smo74350 = new VF.Curve(null, smo71319, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"position_end":1}'));
smo74350.setContext(context).draw();
// modifier from 0-17-0-8 to 0-18-0-0
const smo74351 = new VF.Curve(smo71353, null, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"position_end":1}'));
smo74351.setContext(context).draw();
// modifier from 0-17-0-8 to 0-18-0-0
const smo74352 = new VF.Curve(null, smo71370, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"position_end":1}'));
smo74352.setContext(context).draw();
// modifier from 0-16-0-8 to 0-17-0-0
const smo74353 = new VF.Curve(smo71328, smo71345, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo74353.setContext(context).draw();
// modifier from 1-15-0-0 to 1-15-0-1
const smo74354 = new VF.Curve(smo71914, smo71915, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo74354.setContext(context).draw();
// modifier from 1-16-0-0 to 1-16-0-1
const smo74355 = new VF.Curve(smo71939, smo71940, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo74355.setContext(context).draw();
// modifier from 1-17-0-0 to 1-17-0-1
const smo74356 = new VF.Curve(smo71964, smo71965, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo74356.setContext(context).draw();
// modifier from 1-18-0-1 to 1-18-0-4
const smo74357 = new VF.Curve(smo71990, smo71993, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo74357.setContext(context).draw();
// modifier from 1-18-0-5 to 1-19-0-0
const smo74358 = new VF.Curve(smo71994, smo72013, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo74358.setContext(context).draw();
}
// @@ The Entertainer p 2/3  by Scott Joplin
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = VexFlow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1632');
svg.setAttributeNS('', 'height', '2112');
svg.setAttributeNS('', 'viewBox', '0 0 1989 2574');
//
// create the musical objects
VF.setFonts("Bravura","Academico");
const fmtsmo10228130 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo102281v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102281v0ar = [];
const smo102261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo102261.setAttribute('id', 'smo102261');
smo102281v0ar.push(smo102261);
const smo102262 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
smo102262.setAttribute('id', 'smo102262');
smo102281v0ar.push(smo102262);
const smo102263 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo102263.setAttribute('id', 'smo102263');
smo102281v0ar.push(smo102263);
const smo102264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo102264.setAttribute('id', 'smo102264');
smo102281v0ar.push(smo102264);
const smo102265 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo102265.setAttribute('id', 'smo102265');
smo102281v0ar.push(smo102265);
const smo102266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102266.setAttribute('id', 'smo102266');
smo102281v0ar.push(smo102266);
const smo102267 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo102267.setAttribute('id', 'smo102267');
smo102281v0ar.push(smo102267);
smo102281v0.addTickables(smo102281v0ar)
fmtsmo10228130.joinVoices([smo102281v0]);
const fmtsmo10509130 = new VF.Formatter();
//
// voices and notes for stave 1 30
const smo105091v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105091v0ar = [];
const smo105074 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo105074.setAttribute('id', 'smo105074');
smo105091v0ar.push(smo105074);
const smo105075 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo105075.setAttribute('id', 'smo105075');
smo105091v0ar.push(smo105075);
const smo105076 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo105076.setAttribute('id', 'smo105076');
smo105091v0ar.push(smo105076);
const smo105077 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo105077.setAttribute('id', 'smo105077');
smo105091v0ar.push(smo105077);
smo105091v0.addTickables(smo105091v0ar)
fmtsmo10509130.joinVoices([smo105091v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106826 = smo102261.getStemDirection();
smo102261.setStemDirection(dirsmo106826);
smo102262.setStemDirection(dirsmo106826);
smo102263.setStemDirection(dirsmo106826);
const smo106826 = new VF.Beam([smo102261,smo102262,smo102263]);
const dirsmo106827 = smo102264.getStemDirection();
smo102264.setStemDirection(dirsmo106827);
smo102265.setStemDirection(dirsmo106827);
smo102266.setStemDirection(dirsmo106827);
smo102267.setStemDirection(dirsmo106827);
const smo106827 = new VF.Beam([smo102264,smo102265,smo102266,smo102267]);
const dirsmo106829 = smo105074.getStemDirection();
smo105074.setStemDirection(dirsmo106829);
smo105075.setStemDirection(dirsmo106829);
const smo106829 = new VF.Beam([smo105074,smo105075]);
const dirsmo106830 = smo105076.getStemDirection();
smo105076.setStemDirection(dirsmo106830);
smo105077.setStemDirection(dirsmo106830);
const smo106830 = new VF.Beam([smo105076,smo105077]);
 
// formatting measures in staff group smo100894
fmtsmo10228130.format([smo102281v0,smo105091v0], 244);
const stavesmo102281 = new VF.Stave(73, 411, 295);
stavesmo102281.setAttribute('id', 'stavesmo102281');
stavesmo102281.setBegBarType(1);
stavesmo102281.addClef('treble');
stavesmo102281.setContext(context);
stavesmo102281.draw();
smo102281v0.draw(context, stavesmo102281);
smo106826.setContext(context);
smo106826.draw();
smo106827.setContext(context);
smo106827.draw();
const stavesmo105091 = new VF.Stave(73, 561, 295);
stavesmo105091.setAttribute('id', 'stavesmo105091');
stavesmo105091.setBegBarType(1);
stavesmo105091.addClef('bass');
stavesmo105091.setContext(context);
stavesmo105091.draw();
smo105091v0.draw(context, stavesmo105091);
smo106829.setContext(context);
smo106829.draw();
smo106830.setContext(context);
smo106830.draw();
const leftsmo100894stavesmo1022811 = new VF.StaveConnector(stavesmo102281, stavesmo105091).setType(3);
leftsmo100894stavesmo1022811.setContext(context).draw();
const fmtsmo10230331 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo102303v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102303v0ar = [];
const smo102282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo102282.setAttribute('id', 'smo102282');
smo102303v0ar.push(smo102282);
const smo102283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo102283.setAttribute('id', 'smo102283');
smo102303v0ar.push(smo102283);
const smo102284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102284.setAttribute('id', 'smo102284');
smo102303v0ar.push(smo102284);
const smo102285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo102285.setAttribute('id', 'smo102285');
smo102303v0ar.push(smo102285);
const smo102286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo102286.setAttribute('id', 'smo102286');
smo102303v0ar.push(smo102286);
const smo102287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo102287.setAttribute('id', 'smo102287');
smo102303v0ar.push(smo102287);
const smo102288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102288.setAttribute('id', 'smo102288');
smo102303v0ar.push(smo102288);
const smo102289 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo102289.setAttribute('id', 'smo102289');
smo102303v0ar.push(smo102289);
smo102303v0.addTickables(smo102303v0ar)
fmtsmo10230331.joinVoices([smo102303v0]);
const fmtsmo10510931 = new VF.Formatter();
//
// voices and notes for stave 1 31
const smo105109v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105109v0ar = [];
const smo105092 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo105092.setAttribute('id', 'smo105092');
smo105109v0ar.push(smo105092);
const smo105093 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo105093.setAttribute('id', 'smo105093');
smo105109v0ar.push(smo105093);
const smo105094 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo105094.setAttribute('id', 'smo105094');
smo105109v0ar.push(smo105094);
const smo105095 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo105095.setAttribute('id', 'smo105095');
const smo1050950acc = new VF.Accidental('b');
smo105095.addModifier(smo1050950acc, 0);
smo105109v0ar.push(smo105095);
smo105109v0.addTickables(smo105109v0ar)
fmtsmo10510931.joinVoices([smo105109v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106834 = smo102282.getStemDirection();
smo102282.setStemDirection(dirsmo106834);
smo102283.setStemDirection(dirsmo106834);
smo102284.setStemDirection(dirsmo106834);
smo102285.setStemDirection(dirsmo106834);
const smo106834 = new VF.Beam([smo102282,smo102283,smo102284,smo102285]);
const dirsmo106835 = smo102286.getStemDirection();
smo102286.setStemDirection(dirsmo106835);
smo102287.setStemDirection(dirsmo106835);
smo102288.setStemDirection(dirsmo106835);
smo102289.setStemDirection(dirsmo106835);
const smo106835 = new VF.Beam([smo102286,smo102287,smo102288,smo102289]);
const dirsmo106837 = smo105092.getStemDirection();
smo105092.setStemDirection(dirsmo106837);
smo105093.setStemDirection(dirsmo106837);
const smo106837 = new VF.Beam([smo105092,smo105093]);
const dirsmo106838 = smo105094.getStemDirection();
smo105094.setStemDirection(dirsmo106838);
smo105095.setStemDirection(dirsmo106838);
const smo106838 = new VF.Beam([smo105094,smo105095]);
 
// formatting measures in staff group smo100894
fmtsmo10230331.format([smo102303v0,smo105109v0], 281);
const stavesmo102303 = new VF.Stave(368, 411, 295);
stavesmo102303.setAttribute('id', 'stavesmo102303');
stavesmo102303.setBegBarType(VF.Barline.type.NONE);
stavesmo102303.setContext(context);
stavesmo102303.draw();
smo102303v0.draw(context, stavesmo102303);
smo106834.setContext(context);
smo106834.draw();
smo106835.setContext(context);
smo106835.draw();
const stavesmo105109 = new VF.Stave(368, 561, 295);
stavesmo105109.setAttribute('id', 'stavesmo105109');
stavesmo105109.setBegBarType(VF.Barline.type.NONE);
stavesmo105109.setContext(context);
stavesmo105109.draw();
smo105109v0.draw(context, stavesmo105109);
smo106837.setContext(context);
smo106837.draw();
smo106838.setContext(context);
smo106838.draw();
const fmtsmo10232232 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo102322v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102322v0ar = [];
const smo102304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102304.setAttribute('id', 'smo102304');
smo102322v0ar.push(smo102304);
const smo102305 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102305.setAttribute('id', 'smo102305');
smo102322v0ar.push(smo102305);
const smo102306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo102306.setAttribute('id', 'smo102306');
smo102322v0ar.push(smo102306);
const smo102307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n"]}'))
smo102307.setAttribute('id', 'smo102307');
const smo1023070acc = new VF.Accidental('b');
smo102307.addModifier(smo1023070acc, 0);
smo102322v0ar.push(smo102307);
const smo102308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo102308.setAttribute('id', 'smo102308');
const smo1023080acc = new VF.Accidental('n');
smo102308.addModifier(smo1023080acc, 0);
smo102322v0ar.push(smo102308);
smo102322v0.addTickables(smo102322v0ar)
fmtsmo10232232.joinVoices([smo102322v0]);
const fmtsmo10512732 = new VF.Formatter();
//
// voices and notes for stave 1 32
const smo105127v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105127v0ar = [];
const smo105110 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo105110.setAttribute('id', 'smo105110');
smo105127v0ar.push(smo105110);
const smo105111 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo105111.setAttribute('id', 'smo105111');
smo105127v0ar.push(smo105111);
const smo105112 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo105112.setAttribute('id', 'smo105112');
smo105127v0ar.push(smo105112);
const smo105113 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","cn/4/n","en/4/n"]}'))
smo105113.setAttribute('id', 'smo105113');
const smo1051130acc = new VF.Accidental('b');
smo105113.addModifier(smo1051130acc, 0);
smo105127v0ar.push(smo105113);
smo105127v0.addTickables(smo105127v0ar)
fmtsmo10512732.joinVoices([smo105127v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106842 = smo102305.getStemDirection();
smo102305.setStemDirection(dirsmo106842);
smo102306.setStemDirection(dirsmo106842);
smo102307.setStemDirection(dirsmo106842);
smo102308.setStemDirection(dirsmo106842);
const smo106842 = new VF.Beam([smo102305,smo102306,smo102307,smo102308]);
const dirsmo106844 = smo105110.getStemDirection();
smo105110.setStemDirection(dirsmo106844);
smo105111.setStemDirection(dirsmo106844);
const smo106844 = new VF.Beam([smo105110,smo105111]);
const dirsmo106845 = smo105112.getStemDirection();
smo105112.setStemDirection(dirsmo106845);
smo105113.setStemDirection(dirsmo106845);
const smo106845 = new VF.Beam([smo105112,smo105113]);
 
// formatting measures in staff group smo100894
fmtsmo10232232.format([smo102322v0,smo105127v0], 281);
const stavesmo102322 = new VF.Stave(663, 411, 295);
stavesmo102322.setAttribute('id', 'stavesmo102322');
stavesmo102322.setBegBarType(VF.Barline.type.NONE);
stavesmo102322.setContext(context);
stavesmo102322.draw();
smo102322v0.draw(context, stavesmo102322);
smo106842.setContext(context);
smo106842.draw();
const stavesmo105127 = new VF.Stave(663, 561, 295);
stavesmo105127.setAttribute('id', 'stavesmo105127');
stavesmo105127.setBegBarType(VF.Barline.type.NONE);
stavesmo105127.setContext(context);
stavesmo105127.draw();
smo105127v0.draw(context, stavesmo105127);
smo106844.setContext(context);
smo106844.draw();
smo106845.setContext(context);
smo106845.draw();
const fmtsmo10234433 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo102344v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102344v0ar = [];
const smo102323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102323.setAttribute('id', 'smo102323');
smo102344v0ar.push(smo102323);
const smo102325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo102325.setAttribute('id', 'smo102325');
smo102344v0ar.push(smo102325);
const smo102326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102326.setAttribute('id', 'smo102326');
smo102344v0ar.push(smo102326);
const smo102327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102327.setAttribute('id', 'smo102327');
smo102344v0ar.push(smo102327);
const smo102328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo102328.setAttribute('id', 'smo102328');
smo102344v0ar.push(smo102328);
const smo102329 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102329.setAttribute('id', 'smo102329');
smo102344v0ar.push(smo102329);
const smo102330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo102330.setAttribute('id', 'smo102330');
smo102344v0ar.push(smo102330);
smo102344v0.addTickables(smo102344v0ar)
fmtsmo10234433.joinVoices([smo102344v0]);
const fmtsmo10514533 = new VF.Formatter();
//
// voices and notes for stave 1 33
const smo105145v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105145v0ar = [];
const smo105128 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n","cn/4/n","fn/4/n"]}'))
smo105128.setAttribute('id', 'smo105128');
smo105145v0ar.push(smo105128);
const smo105129 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n","cn/4/n","fn/4/n"]}'))
smo105129.setAttribute('id', 'smo105129');
smo105145v0ar.push(smo105129);
const smo105130 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gb/3/n","an/3/n","cn/4/n","eb/4/n"]}'))
smo105130.setAttribute('id', 'smo105130');
const smo1051300acc = new VF.Accidental('b');
smo105130.addModifier(smo1051300acc, 0);
const smo1051303acc = new VF.Accidental('b');
smo105130.addModifier(smo1051303acc, 3);
smo105145v0ar.push(smo105130);
const smo105131 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gb/3/n","an/3/n","cn/4/n","eb/4/n"]}'))
smo105131.setAttribute('id', 'smo105131');
smo105145v0ar.push(smo105131);
smo105145v0.addTickables(smo105145v0ar)
fmtsmo10514533.joinVoices([smo105145v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106849 = smo102323.getStemDirection();
smo102323.setStemDirection(dirsmo106849);
smo102325.setStemDirection(dirsmo106849);
smo102326.setStemDirection(dirsmo106849);
const smo106849 = new VF.Beam([smo102323,smo102325,smo102326]);
const dirsmo106850 = smo102327.getStemDirection();
smo102327.setStemDirection(dirsmo106850);
smo102328.setStemDirection(dirsmo106850);
smo102329.setStemDirection(dirsmo106850);
smo102330.setStemDirection(dirsmo106850);
const smo106850 = new VF.Beam([smo102327,smo102328,smo102329,smo102330]);
const dirsmo106852 = smo105128.getStemDirection();
smo105128.setStemDirection(dirsmo106852);
smo105129.setStemDirection(dirsmo106852);
const smo106852 = new VF.Beam([smo105128,smo105129]);
const dirsmo106853 = smo105130.getStemDirection();
smo105130.setStemDirection(dirsmo106853);
smo105131.setStemDirection(dirsmo106853);
const smo106853 = new VF.Beam([smo105130,smo105131]);
 
// formatting measures in staff group smo100894
fmtsmo10234433.format([smo102344v0,smo105145v0], 281);
const stavesmo102344 = new VF.Stave(958, 411, 295);
stavesmo102344.setAttribute('id', 'stavesmo102344');
stavesmo102344.setBegBarType(VF.Barline.type.NONE);
stavesmo102344.setContext(context);
stavesmo102344.draw();
smo102344v0.draw(context, stavesmo102344);
smo106849.setContext(context);
smo106849.draw();
smo106850.setContext(context);
smo106850.draw();
const stavesmo105145 = new VF.Stave(958, 561, 295);
stavesmo105145.setAttribute('id', 'stavesmo105145');
stavesmo105145.setBegBarType(VF.Barline.type.NONE);
stavesmo105145.setContext(context);
stavesmo105145.draw();
smo105145v0.draw(context, stavesmo105145);
smo106852.setContext(context);
smo106852.draw();
smo106853.setContext(context);
smo106853.draw();
const fmtsmo10236634 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo102366v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102366v0ar = [];
const smo102345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo102345.setAttribute('id', 'smo102345');
smo102366v0ar.push(smo102345);
const smo102346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102346.setAttribute('id', 'smo102346');
smo102366v0ar.push(smo102346);
const smo102347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo102347.setAttribute('id', 'smo102347');
smo102366v0ar.push(smo102347);
const smo102348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo102348.setAttribute('id', 'smo102348');
smo102366v0ar.push(smo102348);
const smo102349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo102349.setAttribute('id', 'smo102349');
smo102366v0ar.push(smo102349);
const smo102350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo102350.setAttribute('id', 'smo102350');
smo102366v0ar.push(smo102350);
const smo102351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102351.setAttribute('id', 'smo102351');
smo102366v0ar.push(smo102351);
const smo102352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo102352.setAttribute('id', 'smo102352');
smo102366v0ar.push(smo102352);
smo102366v0.addTickables(smo102366v0ar)
fmtsmo10236634.joinVoices([smo102366v0]);
const fmtsmo10516334 = new VF.Formatter();
//
// voices and notes for stave 1 34
const smo105163v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105163v0ar = [];
const smo105146 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo105146.setAttribute('id', 'smo105146');
smo105163v0ar.push(smo105146);
const smo105147 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo105147.setAttribute('id', 'smo105147');
smo105163v0ar.push(smo105147);
const smo105148 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo105148.setAttribute('id', 'smo105148');
smo105163v0ar.push(smo105148);
const smo105149 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo105149.setAttribute('id', 'smo105149');
smo105163v0ar.push(smo105149);
smo105163v0.addTickables(smo105163v0ar)
fmtsmo10516334.joinVoices([smo105163v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106857 = smo102345.getStemDirection();
smo102345.setStemDirection(dirsmo106857);
smo102346.setStemDirection(dirsmo106857);
smo102347.setStemDirection(dirsmo106857);
smo102348.setStemDirection(dirsmo106857);
const smo106857 = new VF.Beam([smo102345,smo102346,smo102347,smo102348]);
const dirsmo106858 = smo102349.getStemDirection();
smo102349.setStemDirection(dirsmo106858);
smo102350.setStemDirection(dirsmo106858);
smo102351.setStemDirection(dirsmo106858);
smo102352.setStemDirection(dirsmo106858);
const smo106858 = new VF.Beam([smo102349,smo102350,smo102351,smo102352]);
const dirsmo106860 = smo105146.getStemDirection();
smo105146.setStemDirection(dirsmo106860);
smo105147.setStemDirection(dirsmo106860);
const smo106860 = new VF.Beam([smo105146,smo105147]);
const dirsmo106861 = smo105148.getStemDirection();
smo105148.setStemDirection(dirsmo106861);
smo105149.setStemDirection(dirsmo106861);
const smo106861 = new VF.Beam([smo105148,smo105149]);
 
// formatting measures in staff group smo100894
fmtsmo10236634.format([smo102366v0,smo105163v0], 281);
const stavesmo102366 = new VF.Stave(1253, 411, 295);
stavesmo102366.setAttribute('id', 'stavesmo102366');
stavesmo102366.setBegBarType(VF.Barline.type.NONE);
stavesmo102366.setContext(context);
stavesmo102366.draw();
smo102366v0.draw(context, stavesmo102366);
smo106857.setContext(context);
smo106857.draw();
smo106858.setContext(context);
smo106858.draw();
const stavesmo105163 = new VF.Stave(1253, 561, 295);
stavesmo105163.setAttribute('id', 'stavesmo105163');
stavesmo105163.setBegBarType(VF.Barline.type.NONE);
stavesmo105163.setContext(context);
stavesmo105163.draw();
smo105163v0.draw(context, stavesmo105163);
smo106860.setContext(context);
smo106860.draw();
smo106861.setContext(context);
smo106861.draw();
const fmtsmo10238535 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo102385v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102385v0ar = [];
const smo102367 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n","an/4/n"]}'))
smo102367.setAttribute('id', 'smo102367');
const smo1023670acc = new VF.Accidental('b');
smo102367.addModifier(smo1023670acc, 0);
smo102385v0ar.push(smo102367);
const smo102368 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n","cn/5/n"]}'))
smo102368.setAttribute('id', 'smo102368');
smo102385v0ar.push(smo102368);
const smo102369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","en/5/n"]}'))
smo102369.setAttribute('id', 'smo102369');
smo102385v0ar.push(smo102369);
const smo102370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","dn/5/n"]}'))
smo102370.setAttribute('id', 'smo102370');
smo102385v0ar.push(smo102370);
const smo102371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","cn/5/n"]}'))
smo102371.setAttribute('id', 'smo102371');
smo102385v0ar.push(smo102371);
smo102385v0.addTickables(smo102385v0ar)
fmtsmo10238535.joinVoices([smo102385v0]);
const fmtsmo10518135 = new VF.Formatter();
//
// voices and notes for stave 1 35
const smo105181v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105181v0ar = [];
const smo105164 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n","cn/4/n"]}'))
smo105164.setAttribute('id', 'smo105164');
smo105181v0ar.push(smo105164);
const smo105165 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n","an/3/n"]}'))
smo105165.setAttribute('id', 'smo105165');
smo105181v0ar.push(smo105165);
const smo105166 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo105166.setAttribute('id', 'smo105166');
smo105181v0ar.push(smo105166);
const smo105167 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo105167.setAttribute('id', 'smo105167');
smo105181v0ar.push(smo105167);
smo105181v0.addTickables(smo105181v0ar)
fmtsmo10518135.joinVoices([smo105181v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106865 = smo102367.getStemDirection();
smo102367.setStemDirection(dirsmo106865);
smo102368.setStemDirection(dirsmo106865);
const smo106865 = new VF.Beam([smo102367,smo102368]);
const dirsmo106866 = smo102369.getStemDirection();
smo102369.setStemDirection(dirsmo106866);
smo102370.setStemDirection(dirsmo106866);
smo102371.setStemDirection(dirsmo106866);
const smo106866 = new VF.Beam([smo102369,smo102370,smo102371]);
const dirsmo106868 = smo105164.getStemDirection();
smo105164.setStemDirection(dirsmo106868);
smo105165.setStemDirection(dirsmo106868);
const smo106868 = new VF.Beam([smo105164,smo105165]);
const dirsmo106869 = smo105166.getStemDirection();
smo105166.setStemDirection(dirsmo106869);
smo105167.setStemDirection(dirsmo106869);
const smo106869 = new VF.Beam([smo105166,smo105167]);
 
// formatting measures in staff group smo100894
fmtsmo10238535.format([smo102385v0,smo105181v0], 281);
const stavesmo102385 = new VF.Stave(1548, 411, 295);
stavesmo102385.setAttribute('id', 'stavesmo102385');
stavesmo102385.setBegBarType(VF.Barline.type.NONE);
stavesmo102385.setContext(context);
stavesmo102385.draw();
smo102385v0.draw(context, stavesmo102385);
smo106865.setContext(context);
smo106865.draw();
smo106866.setContext(context);
smo106866.draw();
const stavesmo105181 = new VF.Stave(1548, 561, 295);
stavesmo105181.setAttribute('id', 'stavesmo105181');
stavesmo105181.setBegBarType(VF.Barline.type.NONE);
stavesmo105181.setContext(context);
stavesmo105181.draw();
smo105181v0.draw(context, stavesmo105181);
smo106868.setContext(context);
smo106868.draw();
smo106869.setContext(context);
smo106869.draw();
const rightsmo100894stavesmo1023851 = new VF.StaveConnector(stavesmo102385, stavesmo105181).setType(0);
rightsmo100894stavesmo1023851.setContext(context).draw();
const fmtsmo10240536 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo102405v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102405v0ar = [];
const smo102386 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","cn/5/n"]}'))
smo102386.setAttribute('id', 'smo102386');
smo102405v0ar.push(smo102386);
const smo102387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","cn/5/n"]}'))
smo102387.setAttribute('id', 'smo102387');
smo102405v0ar.push(smo102387);
const smo102388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","cn/6/n","en/6/n"]}'))
smo102388.setAttribute('id', 'smo102388');
smo102405v0ar.push(smo102388);
const smo102389 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n","dn/6/n","fn/6/n"]}'))
smo102389.setAttribute('id', 'smo102389');
smo102405v0ar.push(smo102389);
const smo102390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gb/5/n","eb/6/n","gb/6/n"]}'))
smo102390.setAttribute('id', 'smo102390');
const smo1023900acc = new VF.Accidental('b');
smo102390.addModifier(smo1023900acc, 0);
const smo1023901acc = new VF.Accidental('b');
smo102390.addModifier(smo1023901acc, 1);
const smo1023902acc = new VF.Accidental('b');
smo102390.addModifier(smo1023902acc, 2);
smo102405v0ar.push(smo102390);
smo102405v0.addTickables(smo102405v0ar)
fmtsmo10240536.joinVoices([smo102405v0]);
const fmtsmo10520036 = new VF.Formatter();
//
// voices and notes for stave 1 36
const smo105200v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105200v0ar = [];
const smo105182 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo105182.setAttribute('id', 'smo105182');
smo105200v0ar.push(smo105182);
const smo105183 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo105183.setAttribute('id', 'smo105183');
smo105200v0ar.push(smo105183);
const smo105184 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/2/n","en/3/n"]}'))
smo105184.setAttribute('id', 'smo105184');
smo105200v0ar.push(smo105184);
const smo105185 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo105185.setAttribute('id', 'smo105185');
smo105200v0ar.push(smo105185);
smo105200v0.addTickables(smo105200v0ar)
fmtsmo10520036.joinVoices([smo105200v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106879 = smo102387.getStemDirection();
smo102387.setStemDirection(dirsmo106879);
smo102388.setStemDirection(dirsmo106879);
smo102389.setStemDirection(dirsmo106879);
smo102390.setStemDirection(dirsmo106879);
const smo106879 = new VF.Beam([smo102387,smo102388,smo102389,smo102390]);
const dirsmo106880 = smo105182.getStemDirection();
smo105182.setStemDirection(dirsmo106880);
smo105183.setStemDirection(dirsmo106880);
const smo106880 = new VF.Beam([smo105182,smo105183]);
const dirsmo106881 = smo105184.getStemDirection();
smo105184.setStemDirection(dirsmo106881);
smo105185.setStemDirection(dirsmo106881);
const smo106881 = new VF.Beam([smo105184,smo105185]);
 
// formatting measures in staff group smo100894
fmtsmo10240536.format([smo102405v0,smo105200v0], 240);
const stavesmo102405 = new VF.Stave(73, 789, 295);
stavesmo102405.setAttribute('id', 'stavesmo102405');
stavesmo102405.setBegBarType(1);
stavesmo102405.setEndBarType(5);
stavesmo102405.addClef('treble');
stavesmo102405.setContext(context);
stavesmo102405.draw();
smo102405v0.draw(context, stavesmo102405);
smo106879.setContext(context);
smo106879.draw();
const stavesmo105200 = new VF.Stave(73, 930, 295);
stavesmo105200.setAttribute('id', 'stavesmo105200');
stavesmo105200.setBegBarType(1);
stavesmo105200.setEndBarType(5);
stavesmo105200.addClef('bass');
stavesmo105200.setContext(context);
stavesmo105200.draw();
smo105200v0.draw(context, stavesmo105200);
smo106880.setContext(context);
smo106880.draw();
smo106881.setContext(context);
smo106881.draw();
const leftsmo100894stavesmo1024051 = new VF.StaveConnector(stavesmo102405, stavesmo105200).setType(3);
leftsmo100894stavesmo1024051.setContext(context).draw();
const fmtsmo10242437 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo102424v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102424v0ar = [];
const smo102406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","cn/5/n"]}'))
smo102406.setAttribute('id', 'smo102406');
smo102424v0ar.push(smo102406);
const smo102407 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","cn/5/n"]}'))
smo102407.setAttribute('id', 'smo102407');
smo102424v0ar.push(smo102407);
const smo102408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo102408.setAttribute('id', 'smo102408');
smo102424v0ar.push(smo102408);
const smo102409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo102409.setAttribute('id', 'smo102409');
const smo1024090acc = new VF.Accidental('b');
smo102409.addModifier(smo1024090acc, 0);
smo102424v0ar.push(smo102409);
smo102424v0.addTickables(smo102424v0ar)
fmtsmo10242437.joinVoices([smo102424v0]);
const fmtsmo10521937 = new VF.Formatter();
//
// voices and notes for stave 1 37
const smo105219v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105219v0ar = [];
const smo105201 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo105201.setAttribute('id', 'smo105201');
smo105219v0ar.push(smo105201);
const smo105202 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo105202.setAttribute('id', 'smo105202');
smo105219v0ar.push(smo105202);
const smo105203 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo105203.setAttribute('id', 'smo105203');
smo105219v0ar.push(smo105203);
const smo105204 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo105204.setAttribute('id', 'smo105204');
smo105219v0ar.push(smo105204);
smo105219v0.addTickables(smo105219v0ar)
fmtsmo10521937.joinVoices([smo105219v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106884 = smo102407.getStemDirection();
smo102407.setStemDirection(dirsmo106884);
smo102408.setStemDirection(dirsmo106884);
smo102409.setStemDirection(dirsmo106884);
const smo106884 = new VF.Beam([smo102407,smo102408,smo102409]);
const dirsmo106886 = smo105201.getStemDirection();
smo105201.setStemDirection(dirsmo106886);
smo105202.setStemDirection(dirsmo106886);
const smo106886 = new VF.Beam([smo105201,smo105202]);
 
// formatting measures in staff group smo100894
fmtsmo10242437.format([smo102424v0,smo105219v0], 281);
const stavesmo102424 = new VF.Stave(368, 789, 295);
stavesmo102424.setAttribute('id', 'stavesmo102424');
stavesmo102424.setBegBarType(VF.Barline.type.NONE);
stavesmo102424.setContext(context);
stavesmo102424.draw();
smo102424v0.draw(context, stavesmo102424);
smo106884.setContext(context);
smo106884.draw();
const stavesmo105219 = new VF.Stave(368, 930, 295);
stavesmo105219.setAttribute('id', 'stavesmo105219');
stavesmo105219.setBegBarType(VF.Barline.type.NONE);
stavesmo105219.setContext(context);
stavesmo105219.draw();
smo105219v0.draw(context, stavesmo105219);
smo106886.setContext(context);
smo106886.draw();
const fmtsmo10244538 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo102445v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102445v0ar = [];
const smo102425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo102425.setAttribute('id', 'smo102425');
smo102445v0ar.push(smo102425);
const smo102427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102427.setAttribute('id', 'smo102427');
smo102445v0ar.push(smo102427);
const smo102428 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo102428.setAttribute('id', 'smo102428');
smo102445v0ar.push(smo102428);
const smo102429 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102429.setAttribute('id', 'smo102429');
smo102445v0ar.push(smo102429);
const smo102430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo102430.setAttribute('id', 'smo102430');
smo102445v0ar.push(smo102430);
const smo102431 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102431.setAttribute('id', 'smo102431');
smo102445v0ar.push(smo102431);
smo102445v0.addTickables(smo102445v0ar)
fmtsmo10244538.joinVoices([smo102445v0]);
const fmtsmo10523738 = new VF.Formatter();
//
// voices and notes for stave 1 38
const smo105237v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105237v0ar = [];
const smo105220 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo105220.setAttribute('id', 'smo105220');
smo105237v0ar.push(smo105220);
const smo105221 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo105221.setAttribute('id', 'smo105221');
smo105237v0ar.push(smo105221);
const smo105222 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo105222.setAttribute('id', 'smo105222');
smo105237v0ar.push(smo105222);
const smo105223 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
smo105223.setAttribute('id', 'smo105223');
const smo1052231acc = new VF.Accidental('b');
smo105223.addModifier(smo1052231acc, 1);
smo105237v0ar.push(smo105223);
smo105237v0.addTickables(smo105237v0ar)
fmtsmo10523738.joinVoices([smo105237v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106890 = smo102425.getStemDirection();
smo102425.setStemDirection(dirsmo106890);
smo102427.setStemDirection(dirsmo106890);
smo102428.setStemDirection(dirsmo106890);
const smo106890 = new VF.Beam([smo102425,smo102427,smo102428]);
const dirsmo106891 = smo102429.getStemDirection();
smo102429.setStemDirection(dirsmo106891);
smo102430.setStemDirection(dirsmo106891);
smo102431.setStemDirection(dirsmo106891);
const smo106891 = new VF.Beam([smo102429,smo102430,smo102431]);
const dirsmo106893 = smo105220.getStemDirection();
smo105220.setStemDirection(dirsmo106893);
smo105221.setStemDirection(dirsmo106893);
const smo106893 = new VF.Beam([smo105220,smo105221]);
const dirsmo106894 = smo105222.getStemDirection();
smo105222.setStemDirection(dirsmo106894);
smo105223.setStemDirection(dirsmo106894);
const smo106894 = new VF.Beam([smo105222,smo105223]);
 
// formatting measures in staff group smo100894
fmtsmo10244538.format([smo102445v0,smo105237v0], 281);
const stavesmo102445 = new VF.Stave(663, 789, 295);
stavesmo102445.setAttribute('id', 'stavesmo102445');
stavesmo102445.setBegBarType(VF.Barline.type.NONE);
stavesmo102445.setContext(context);
stavesmo102445.draw();
smo102445v0.draw(context, stavesmo102445);
smo106890.setContext(context);
smo106890.draw();
smo106891.setContext(context);
smo106891.draw();
const stavesmo105237 = new VF.Stave(663, 930, 295);
stavesmo105237.setAttribute('id', 'stavesmo105237');
stavesmo105237.setBegBarType(VF.Barline.type.NONE);
stavesmo105237.setContext(context);
stavesmo105237.draw();
smo105237v0.draw(context, stavesmo105237);
smo106893.setContext(context);
smo106893.draw();
smo106894.setContext(context);
smo106894.draw();
const fmtsmo10246439 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo102464v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102464v0ar = [];
const smo102446 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102446.setAttribute('id', 'smo102446');
smo102464v0ar.push(smo102446);
const smo102447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102447.setAttribute('id', 'smo102447');
smo102464v0ar.push(smo102447);
const smo102448 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo102448.setAttribute('id', 'smo102448');
smo102464v0ar.push(smo102448);
const smo102449 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo102449.setAttribute('id', 'smo102449');
smo102464v0ar.push(smo102449);
const smo102450 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/5/n","gb/5/n","eb/6/n"]}'))
smo102450.setAttribute('id', 'smo102450');
const smo1024500acc = new VF.Accidental('b');
smo102450.addModifier(smo1024500acc, 0);
const smo1024501acc = new VF.Accidental('b');
smo102450.addModifier(smo1024501acc, 1);
const smo1024502acc = new VF.Accidental('b');
smo102450.addModifier(smo1024502acc, 2);
smo102464v0ar.push(smo102450);
smo102464v0.addTickables(smo102464v0ar)
fmtsmo10246439.joinVoices([smo102464v0]);
const fmtsmo10525539 = new VF.Formatter();
//
// voices and notes for stave 1 39
const smo105255v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105255v0ar = [];
const smo105238 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo105238.setAttribute('id', 'smo105238');
smo105255v0ar.push(smo105238);
const smo105239 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n"]}'))
smo105239.setAttribute('id', 'smo105239');
smo105255v0ar.push(smo105239);
const smo105240 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/2/n","en/3/n"]}'))
smo105240.setAttribute('id', 'smo105240');
smo105255v0ar.push(smo105240);
const smo105241 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n"]}'))
smo105241.setAttribute('id', 'smo105241');
smo105255v0ar.push(smo105241);
smo105255v0.addTickables(smo105255v0ar)
fmtsmo10525539.joinVoices([smo105255v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106898 = smo102447.getStemDirection();
smo102447.setStemDirection(dirsmo106898);
smo102448.setStemDirection(dirsmo106898);
smo102449.setStemDirection(dirsmo106898);
smo102450.setStemDirection(dirsmo106898);
const smo106898 = new VF.Beam([smo102447,smo102448,smo102449,smo102450]);
const dirsmo106900 = smo105238.getStemDirection();
smo105238.setStemDirection(dirsmo106900);
smo105239.setStemDirection(dirsmo106900);
const smo106900 = new VF.Beam([smo105238,smo105239]);
const dirsmo106901 = smo105240.getStemDirection();
smo105240.setStemDirection(dirsmo106901);
smo105241.setStemDirection(dirsmo106901);
const smo106901 = new VF.Beam([smo105240,smo105241]);
 
// formatting measures in staff group smo100894
fmtsmo10246439.format([smo102464v0,smo105255v0], 281);
const stavesmo102464 = new VF.Stave(958, 789, 295);
stavesmo102464.setAttribute('id', 'stavesmo102464');
stavesmo102464.setBegBarType(VF.Barline.type.NONE);
stavesmo102464.setContext(context);
stavesmo102464.draw();
smo102464v0.draw(context, stavesmo102464);
smo106898.setContext(context);
smo106898.draw();
const stavesmo105255 = new VF.Stave(958, 930, 295);
stavesmo105255.setAttribute('id', 'stavesmo105255');
stavesmo105255.setBegBarType(VF.Barline.type.NONE);
stavesmo105255.setContext(context);
stavesmo105255.draw();
smo105255v0.draw(context, stavesmo105255);
smo106900.setContext(context);
smo106900.draw();
smo106901.setContext(context);
smo106901.draw();
const fmtsmo10248640 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo102486v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102486v0ar = [];
const smo102465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo102465.setAttribute('id', 'smo102465');
smo102486v0ar.push(smo102465);
const smo102467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo102467.setAttribute('id', 'smo102467');
smo102486v0ar.push(smo102467);
const smo102468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo102468.setAttribute('id', 'smo102468');
smo102486v0ar.push(smo102468);
const smo102469 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo102469.setAttribute('id', 'smo102469');
smo102486v0ar.push(smo102469);
const smo102470 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo102470.setAttribute('id', 'smo102470');
smo102486v0ar.push(smo102470);
const smo102471 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
smo102471.setAttribute('id', 'smo102471');
smo102486v0ar.push(smo102471);
const smo102472 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo102472.setAttribute('id', 'smo102472');
smo102486v0ar.push(smo102472);
smo102486v0.addTickables(smo102486v0ar)
fmtsmo10248640.joinVoices([smo102486v0]);
const fmtsmo10527340 = new VF.Formatter();
//
// voices and notes for stave 1 40
const smo105273v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105273v0ar = [];
const smo105256 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo105256.setAttribute('id', 'smo105256');
smo105273v0ar.push(smo105256);
const smo105257 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo105257.setAttribute('id', 'smo105257');
smo105273v0ar.push(smo105257);
const smo105258 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo105258.setAttribute('id', 'smo105258');
smo105273v0ar.push(smo105258);
const smo105259 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo105259.setAttribute('id', 'smo105259');
smo105273v0ar.push(smo105259);
smo105273v0.addTickables(smo105273v0ar)
fmtsmo10527340.joinVoices([smo105273v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106905 = smo102465.getStemDirection();
smo102465.setStemDirection(dirsmo106905);
smo102467.setStemDirection(dirsmo106905);
smo102468.setStemDirection(dirsmo106905);
smo102469.setStemDirection(dirsmo106905);
const smo106905 = new VF.Beam([smo102465,smo102467,smo102468,smo102469]);
const dirsmo106906 = smo102470.getStemDirection();
smo102470.setStemDirection(dirsmo106906);
smo102471.setStemDirection(dirsmo106906);
smo102472.setStemDirection(dirsmo106906);
const smo106906 = new VF.Beam([smo102470,smo102471,smo102472]);
const dirsmo106908 = smo105256.getStemDirection();
smo105256.setStemDirection(dirsmo106908);
smo105257.setStemDirection(dirsmo106908);
const smo106908 = new VF.Beam([smo105256,smo105257]);
const dirsmo106909 = smo105258.getStemDirection();
smo105258.setStemDirection(dirsmo106909);
smo105259.setStemDirection(dirsmo106909);
const smo106909 = new VF.Beam([smo105258,smo105259]);
 
// formatting measures in staff group smo100894
fmtsmo10248640.format([smo102486v0,smo105273v0], 281);
const stavesmo102486 = new VF.Stave(1253, 789, 295);
stavesmo102486.setAttribute('id', 'stavesmo102486');
stavesmo102486.setBegBarType(VF.Barline.type.NONE);
stavesmo102486.setContext(context);
stavesmo102486.draw();
smo102486v0.draw(context, stavesmo102486);
smo106905.setContext(context);
smo106905.draw();
smo106906.setContext(context);
smo106906.draw();
const stavesmo105273 = new VF.Stave(1253, 930, 295);
stavesmo105273.setAttribute('id', 'stavesmo105273');
stavesmo105273.setBegBarType(VF.Barline.type.NONE);
stavesmo105273.setContext(context);
stavesmo105273.draw();
smo105273v0.draw(context, stavesmo105273);
smo106908.setContext(context);
smo106908.draw();
smo106909.setContext(context);
smo106909.draw();
const fmtsmo10250441 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo102504v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102504v0ar = [];
const smo102487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo102487.setAttribute('id', 'smo102487');
smo102504v0ar.push(smo102487);
const smo102488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo102488.setAttribute('id', 'smo102488');
smo102504v0ar.push(smo102488);
const smo102489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo102489.setAttribute('id', 'smo102489');
smo102504v0ar.push(smo102489);
const smo102490 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo102490.setAttribute('id', 'smo102490');
const smo1024900acc = new VF.Accidental('b');
smo102490.addModifier(smo1024900acc, 0);
smo102504v0ar.push(smo102490);
smo102504v0.addTickables(smo102504v0ar)
fmtsmo10250441.joinVoices([smo102504v0]);
const fmtsmo10529141 = new VF.Formatter();
//
// voices and notes for stave 1 41
const smo105291v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105291v0ar = [];
const smo105274 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo105274.setAttribute('id', 'smo105274');
smo105291v0ar.push(smo105274);
const smo105275 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo105275.setAttribute('id', 'smo105275');
smo105291v0ar.push(smo105275);
const smo105276 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo105276.setAttribute('id', 'smo105276');
smo105291v0ar.push(smo105276);
const smo105277 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo105277.setAttribute('id', 'smo105277');
smo105291v0ar.push(smo105277);
smo105291v0.addTickables(smo105291v0ar)
fmtsmo10529141.joinVoices([smo105291v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106913 = smo102488.getStemDirection();
smo102488.setStemDirection(dirsmo106913);
smo102489.setStemDirection(dirsmo106913);
smo102490.setStemDirection(dirsmo106913);
const smo106913 = new VF.Beam([smo102488,smo102489,smo102490]);
const dirsmo106915 = smo105274.getStemDirection();
smo105274.setStemDirection(dirsmo106915);
smo105275.setStemDirection(dirsmo106915);
const smo106915 = new VF.Beam([smo105274,smo105275]);
const dirsmo106916 = smo105276.getStemDirection();
smo105276.setStemDirection(dirsmo106916);
smo105277.setStemDirection(dirsmo106916);
const smo106916 = new VF.Beam([smo105276,smo105277]);
 
// formatting measures in staff group smo100894
fmtsmo10250441.format([smo102504v0,smo105291v0], 281);
const stavesmo102504 = new VF.Stave(1548, 789, 295);
stavesmo102504.setAttribute('id', 'stavesmo102504');
stavesmo102504.setBegBarType(VF.Barline.type.NONE);
stavesmo102504.setContext(context);
stavesmo102504.draw();
smo102504v0.draw(context, stavesmo102504);
smo106913.setContext(context);
smo106913.draw();
const stavesmo105291 = new VF.Stave(1548, 930, 295);
stavesmo105291.setAttribute('id', 'stavesmo105291');
stavesmo105291.setBegBarType(VF.Barline.type.NONE);
stavesmo105291.setContext(context);
stavesmo105291.draw();
smo105291v0.draw(context, stavesmo105291);
smo106915.setContext(context);
smo106915.draw();
smo106916.setContext(context);
smo106916.draw();
const rightsmo100894stavesmo1025041 = new VF.StaveConnector(stavesmo102504, stavesmo105291).setType(0);
rightsmo100894stavesmo1025041.setContext(context).draw();
const fmtsmo10252542 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo102525v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102525v0ar = [];
const smo102505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo102505.setAttribute('id', 'smo102505');
smo102525v0ar.push(smo102505);
const smo102507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102507.setAttribute('id', 'smo102507');
smo102525v0ar.push(smo102507);
const smo102508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo102508.setAttribute('id', 'smo102508');
smo102525v0ar.push(smo102508);
const smo102509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102509.setAttribute('id', 'smo102509');
smo102525v0ar.push(smo102509);
const smo102510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo102510.setAttribute('id', 'smo102510');
smo102525v0ar.push(smo102510);
const smo102511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102511.setAttribute('id', 'smo102511');
smo102525v0ar.push(smo102511);
smo102525v0.addTickables(smo102525v0ar)
fmtsmo10252542.joinVoices([smo102525v0]);
const fmtsmo10530942 = new VF.Formatter();
//
// voices and notes for stave 1 42
const smo105309v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105309v0ar = [];
const smo105292 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo105292.setAttribute('id', 'smo105292');
smo105309v0ar.push(smo105292);
const smo105293 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo105293.setAttribute('id', 'smo105293');
smo105309v0ar.push(smo105293);
const smo105294 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo105294.setAttribute('id', 'smo105294');
smo105309v0ar.push(smo105294);
const smo105295 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
smo105295.setAttribute('id', 'smo105295');
const smo1052951acc = new VF.Accidental('b');
smo105295.addModifier(smo1052951acc, 1);
smo105309v0ar.push(smo105295);
smo105309v0.addTickables(smo105309v0ar)
fmtsmo10530942.joinVoices([smo105309v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106928 = smo102505.getStemDirection();
smo102505.setStemDirection(dirsmo106928);
smo102507.setStemDirection(dirsmo106928);
smo102508.setStemDirection(dirsmo106928);
const smo106928 = new VF.Beam([smo102505,smo102507,smo102508]);
const dirsmo106929 = smo102509.getStemDirection();
smo102509.setStemDirection(dirsmo106929);
smo102510.setStemDirection(dirsmo106929);
smo102511.setStemDirection(dirsmo106929);
const smo106929 = new VF.Beam([smo102509,smo102510,smo102511]);
const dirsmo106931 = smo105292.getStemDirection();
smo105292.setStemDirection(dirsmo106931);
smo105293.setStemDirection(dirsmo106931);
const smo106931 = new VF.Beam([smo105292,smo105293]);
const dirsmo106932 = smo105294.getStemDirection();
smo105294.setStemDirection(dirsmo106932);
smo105295.setStemDirection(dirsmo106932);
const smo106932 = new VF.Beam([smo105294,smo105295]);
 
// formatting measures in staff group smo100894
fmtsmo10252542.format([smo102525v0,smo105309v0], 244);
const stavesmo102525 = new VF.Stave(73, 1148, 295);
stavesmo102525.setAttribute('id', 'stavesmo102525');
stavesmo102525.setBegBarType(1);
stavesmo102525.addClef('treble');
stavesmo102525.setContext(context);
stavesmo102525.draw();
smo102525v0.draw(context, stavesmo102525);
smo106928.setContext(context);
smo106928.draw();
smo106929.setContext(context);
smo106929.draw();
const stavesmo105309 = new VF.Stave(73, 1303, 295);
stavesmo105309.setAttribute('id', 'stavesmo105309');
stavesmo105309.setBegBarType(1);
stavesmo105309.addClef('bass');
stavesmo105309.setContext(context);
stavesmo105309.draw();
smo105309v0.draw(context, stavesmo105309);
smo106931.setContext(context);
smo106931.draw();
smo106932.setContext(context);
smo106932.draw();
const leftsmo100894stavesmo1025251 = new VF.StaveConnector(stavesmo102525, stavesmo105309).setType(3);
leftsmo100894stavesmo1025251.setContext(context).draw();
const fmtsmo10254343 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo102543v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102543v0ar = [];
const smo102526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102526.setAttribute('id', 'smo102526');
smo102543v0ar.push(smo102526);
const smo102527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102527.setAttribute('id', 'smo102527');
smo102543v0ar.push(smo102527);
const smo102528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","cn/5/n","an/5/n"]}'))
smo102528.setAttribute('id', 'smo102528');
smo102543v0ar.push(smo102528);
const smo102529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","cn/5/n","gn/5/n"]}'))
smo102529.setAttribute('id', 'smo102529');
smo102543v0ar.push(smo102529);
smo102543v0.addTickables(smo102543v0ar)
fmtsmo10254343.joinVoices([smo102543v0]);
const fmtsmo10532743 = new VF.Formatter();
//
// voices and notes for stave 1 43
const smo105327v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105327v0ar = [];
const smo105310 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo105310.setAttribute('id', 'smo105310');
smo105327v0ar.push(smo105310);
const smo105311 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n"]}'))
smo105311.setAttribute('id', 'smo105311');
smo105327v0ar.push(smo105311);
const smo105312 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/2/n","en/3/n"]}'))
smo105312.setAttribute('id', 'smo105312');
smo105327v0ar.push(smo105312);
const smo105313 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/2/n","eb/3/n"]}'))
smo105313.setAttribute('id', 'smo105313');
const smo1053130acc = new VF.Accidental('b');
smo105313.addModifier(smo1053130acc, 0);
const smo1053131acc = new VF.Accidental('b');
smo105313.addModifier(smo1053131acc, 1);
smo105327v0ar.push(smo105313);
smo105327v0.addTickables(smo105327v0ar)
fmtsmo10532743.joinVoices([smo105327v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106936 = smo102527.getStemDirection();
smo102527.setStemDirection(dirsmo106936);
smo102528.setStemDirection(dirsmo106936);
smo102529.setStemDirection(dirsmo106936);
const smo106936 = new VF.Beam([smo102527,smo102528,smo102529]);
const dirsmo106938 = smo105310.getStemDirection();
smo105310.setStemDirection(dirsmo106938);
smo105311.setStemDirection(dirsmo106938);
const smo106938 = new VF.Beam([smo105310,smo105311]);
const dirsmo106939 = smo105312.getStemDirection();
smo105312.setStemDirection(dirsmo106939);
smo105313.setStemDirection(dirsmo106939);
const smo106939 = new VF.Beam([smo105312,smo105313]);
 
// formatting measures in staff group smo100894
fmtsmo10254343.format([smo102543v0,smo105327v0], 281);
const stavesmo102543 = new VF.Stave(368, 1148, 295);
stavesmo102543.setAttribute('id', 'stavesmo102543');
stavesmo102543.setBegBarType(VF.Barline.type.NONE);
stavesmo102543.setContext(context);
stavesmo102543.draw();
smo102543v0.draw(context, stavesmo102543);
smo106936.setContext(context);
smo106936.draw();
const stavesmo105327 = new VF.Stave(368, 1303, 295);
stavesmo105327.setAttribute('id', 'stavesmo105327');
stavesmo105327.setBegBarType(VF.Barline.type.NONE);
stavesmo105327.setContext(context);
stavesmo105327.draw();
smo105327v0.draw(context, stavesmo105327);
smo106938.setContext(context);
smo106938.draw();
smo106939.setContext(context);
smo106939.draw();
const fmtsmo10256644 = new VF.Formatter();
//
// voices and notes for stave 0 44
const smo102566v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102566v0ar = [];
const smo102544 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n","cn/5/n","gb/5/n"]}'))
smo102544.setAttribute('id', 'smo102544');
const smo1025440acc = new VF.Accidental('b');
smo102544.addModifier(smo1025440acc, 0);
const smo1025442acc = new VF.Accidental('b');
smo102544.addModifier(smo1025442acc, 2);
smo102566v0ar.push(smo102544);
const smo102546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","an/5/n"]}'))
smo102546.setAttribute('id', 'smo102546');
smo102566v0ar.push(smo102546);
const smo102547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo102547.setAttribute('id', 'smo102547');
smo102566v0ar.push(smo102547);
const smo102548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo102548.setAttribute('id', 'smo102548');
smo102566v0ar.push(smo102548);
const smo102549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo102549.setAttribute('id', 'smo102549');
smo102566v0ar.push(smo102549);
const smo102550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo102550.setAttribute('id', 'smo102550');
smo102566v0ar.push(smo102550);
const smo102551 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo102551.setAttribute('id', 'smo102551');
smo102566v0ar.push(smo102551);
const smo102552 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","an/5/n"]}'))
smo102552.setAttribute('id', 'smo102552');
smo102566v0ar.push(smo102552);
smo102566v0.addTickables(smo102566v0ar)
fmtsmo10256644.joinVoices([smo102566v0]);
const fmtsmo10534544 = new VF.Formatter();
//
// voices and notes for stave 1 44
const smo105345v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105345v0ar = [];
const smo105328 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo105328.setAttribute('id', 'smo105328');
smo105345v0ar.push(smo105328);
const smo105329 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n","gb/3/n","an/3/n","cn/4/n"]}'))
smo105329.setAttribute('id', 'smo105329');
const smo1053291acc = new VF.Accidental('b');
smo105329.addModifier(smo1053291acc, 1);
smo105345v0ar.push(smo105329);
const smo105330 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo105330.setAttribute('id', 'smo105330');
smo105345v0ar.push(smo105330);
const smo105331 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gb/3/n","an/3/n","cn/4/n"]}'))
smo105331.setAttribute('id', 'smo105331');
smo105345v0ar.push(smo105331);
smo105345v0.addTickables(smo105345v0ar)
fmtsmo10534544.joinVoices([smo105345v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106943 = smo102544.getStemDirection();
smo102544.setStemDirection(dirsmo106943);
smo102546.setStemDirection(dirsmo106943);
smo102547.setStemDirection(dirsmo106943);
smo102548.setStemDirection(dirsmo106943);
const smo106943 = new VF.Beam([smo102544,smo102546,smo102547,smo102548]);
const dirsmo106944 = smo102549.getStemDirection();
smo102549.setStemDirection(dirsmo106944);
smo102550.setStemDirection(dirsmo106944);
smo102551.setStemDirection(dirsmo106944);
smo102552.setStemDirection(dirsmo106944);
const smo106944 = new VF.Beam([smo102549,smo102550,smo102551,smo102552]);
const dirsmo106946 = smo105328.getStemDirection();
smo105328.setStemDirection(dirsmo106946);
smo105329.setStemDirection(dirsmo106946);
const smo106946 = new VF.Beam([smo105328,smo105329]);
const dirsmo106947 = smo105330.getStemDirection();
smo105330.setStemDirection(dirsmo106947);
smo105331.setStemDirection(dirsmo106947);
const smo106947 = new VF.Beam([smo105330,smo105331]);
 
// formatting measures in staff group smo100894
fmtsmo10256644.format([smo102566v0,smo105345v0], 281);
const stavesmo102566 = new VF.Stave(663, 1148, 295);
stavesmo102566.setAttribute('id', 'stavesmo102566');
stavesmo102566.setBegBarType(VF.Barline.type.NONE);
stavesmo102566.setContext(context);
stavesmo102566.draw();
smo102566v0.draw(context, stavesmo102566);
smo106943.setContext(context);
smo106943.draw();
smo106944.setContext(context);
smo106944.draw();
const stavesmo105345 = new VF.Stave(663, 1303, 295);
stavesmo105345.setAttribute('id', 'stavesmo105345');
stavesmo105345.setBegBarType(VF.Barline.type.NONE);
stavesmo105345.setContext(context);
stavesmo105345.draw();
smo105345v0.draw(context, stavesmo105345);
smo106946.setContext(context);
smo106946.draw();
smo106947.setContext(context);
smo106947.draw();
const fmtsmo10258445 = new VF.Formatter();
//
// voices and notes for stave 0 45
const smo102584v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102584v0ar = [];
const smo102567 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo102567.setAttribute('id', 'smo102567');
smo102584v0ar.push(smo102567);
const smo102568 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo102568.setAttribute('id', 'smo102568');
smo102584v0ar.push(smo102568);
const smo102569 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo102569.setAttribute('id', 'smo102569');
smo102584v0ar.push(smo102569);
const smo102570 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo102570.setAttribute('id', 'smo102570');
const smo1025700acc = new VF.Accidental('b');
smo102570.addModifier(smo1025700acc, 0);
smo102584v0ar.push(smo102570);
smo102584v0.addTickables(smo102584v0ar)
fmtsmo10258445.joinVoices([smo102584v0]);
const fmtsmo10536345 = new VF.Formatter();
//
// voices and notes for stave 1 45
const smo105363v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105363v0ar = [];
const smo105346 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo105346.setAttribute('id', 'smo105346');
smo105363v0ar.push(smo105346);
const smo105347 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo105347.setAttribute('id', 'smo105347');
smo105363v0ar.push(smo105347);
const smo105348 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/2/n","an/3/n"]}'))
smo105348.setAttribute('id', 'smo105348');
smo105363v0ar.push(smo105348);
const smo105349 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n","bn/3/n"]}'))
smo105349.setAttribute('id', 'smo105349');
smo105363v0ar.push(smo105349);
smo105363v0.addTickables(smo105363v0ar)
fmtsmo10536345.joinVoices([smo105363v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106951 = smo102568.getStemDirection();
smo102568.setStemDirection(dirsmo106951);
smo102569.setStemDirection(dirsmo106951);
smo102570.setStemDirection(dirsmo106951);
const smo106951 = new VF.Beam([smo102568,smo102569,smo102570]);
const dirsmo106953 = smo105346.getStemDirection();
smo105346.setStemDirection(dirsmo106953);
smo105347.setStemDirection(dirsmo106953);
const smo106953 = new VF.Beam([smo105346,smo105347]);
const dirsmo106954 = smo105348.getStemDirection();
smo105348.setStemDirection(dirsmo106954);
smo105349.setStemDirection(dirsmo106954);
const smo106954 = new VF.Beam([smo105348,smo105349]);
 
// formatting measures in staff group smo100894
fmtsmo10258445.format([smo102584v0,smo105363v0], 281);
const stavesmo102584 = new VF.Stave(958, 1148, 295);
stavesmo102584.setAttribute('id', 'stavesmo102584');
stavesmo102584.setBegBarType(VF.Barline.type.NONE);
stavesmo102584.setContext(context);
stavesmo102584.draw();
smo102584v0.draw(context, stavesmo102584);
smo106951.setContext(context);
smo106951.draw();
const stavesmo105363 = new VF.Stave(958, 1303, 295);
stavesmo105363.setAttribute('id', 'stavesmo105363');
stavesmo105363.setBegBarType(VF.Barline.type.NONE);
stavesmo105363.setContext(context);
stavesmo105363.draw();
smo105363v0.draw(context, stavesmo105363);
smo106953.setContext(context);
smo106953.draw();
smo106954.setContext(context);
smo106954.draw();
const fmtsmo10260546 = new VF.Formatter();
//
// voices and notes for stave 0 46
const smo102605v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102605v0ar = [];
const smo102585 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo102585.setAttribute('id', 'smo102585');
smo102605v0ar.push(smo102585);
const smo102587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102587.setAttribute('id', 'smo102587');
smo102605v0ar.push(smo102587);
const smo102588 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo102588.setAttribute('id', 'smo102588');
smo102605v0ar.push(smo102588);
const smo102589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102589.setAttribute('id', 'smo102589');
smo102605v0ar.push(smo102589);
const smo102590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo102590.setAttribute('id', 'smo102590');
smo102605v0ar.push(smo102590);
const smo102591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102591.setAttribute('id', 'smo102591');
smo102605v0ar.push(smo102591);
smo102605v0.addTickables(smo102605v0ar)
fmtsmo10260546.joinVoices([smo102605v0]);
const fmtsmo10538146 = new VF.Formatter();
//
// voices and notes for stave 1 46
const smo105381v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105381v0ar = [];
const smo105364 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo105364.setAttribute('id', 'smo105364');
smo105381v0ar.push(smo105364);
const smo105365 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo105365.setAttribute('id', 'smo105365');
smo105381v0ar.push(smo105365);
const smo105366 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo105366.setAttribute('id', 'smo105366');
smo105381v0ar.push(smo105366);
const smo105367 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
smo105367.setAttribute('id', 'smo105367');
const smo1053671acc = new VF.Accidental('b');
smo105367.addModifier(smo1053671acc, 1);
smo105381v0ar.push(smo105367);
smo105381v0.addTickables(smo105381v0ar)
fmtsmo10538146.joinVoices([smo105381v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106958 = smo102585.getStemDirection();
smo102585.setStemDirection(dirsmo106958);
smo102587.setStemDirection(dirsmo106958);
smo102588.setStemDirection(dirsmo106958);
const smo106958 = new VF.Beam([smo102585,smo102587,smo102588]);
const dirsmo106959 = smo102589.getStemDirection();
smo102589.setStemDirection(dirsmo106959);
smo102590.setStemDirection(dirsmo106959);
smo102591.setStemDirection(dirsmo106959);
const smo106959 = new VF.Beam([smo102589,smo102590,smo102591]);
const dirsmo106961 = smo105364.getStemDirection();
smo105364.setStemDirection(dirsmo106961);
smo105365.setStemDirection(dirsmo106961);
const smo106961 = new VF.Beam([smo105364,smo105365]);
const dirsmo106962 = smo105366.getStemDirection();
smo105366.setStemDirection(dirsmo106962);
smo105367.setStemDirection(dirsmo106962);
const smo106962 = new VF.Beam([smo105366,smo105367]);
 
// formatting measures in staff group smo100894
fmtsmo10260546.format([smo102605v0,smo105381v0], 281);
const stavesmo102605 = new VF.Stave(1253, 1148, 295);
stavesmo102605.setAttribute('id', 'stavesmo102605');
stavesmo102605.setBegBarType(VF.Barline.type.NONE);
stavesmo102605.setContext(context);
stavesmo102605.draw();
smo102605v0.draw(context, stavesmo102605);
smo106958.setContext(context);
smo106958.draw();
smo106959.setContext(context);
smo106959.draw();
const stavesmo105381 = new VF.Stave(1253, 1303, 295);
stavesmo105381.setAttribute('id', 'stavesmo105381');
stavesmo105381.setBegBarType(VF.Barline.type.NONE);
stavesmo105381.setContext(context);
stavesmo105381.draw();
smo105381v0.draw(context, stavesmo105381);
smo106961.setContext(context);
smo106961.draw();
smo106962.setContext(context);
smo106962.draw();
const fmtsmo10262447 = new VF.Formatter();
//
// voices and notes for stave 0 47
const smo102624v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102624v0ar = [];
const smo102606 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102606.setAttribute('id', 'smo102606');
smo102624v0ar.push(smo102606);
const smo102607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102607.setAttribute('id', 'smo102607');
smo102624v0ar.push(smo102607);
const smo102608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo102608.setAttribute('id', 'smo102608');
smo102624v0ar.push(smo102608);
const smo102609 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo102609.setAttribute('id', 'smo102609');
smo102624v0ar.push(smo102609);
const smo102610 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/5/n","gb/5/n","eb/6/n"]}'))
smo102610.setAttribute('id', 'smo102610');
const smo1026100acc = new VF.Accidental('b');
smo102610.addModifier(smo1026100acc, 0);
const smo1026101acc = new VF.Accidental('b');
smo102610.addModifier(smo1026101acc, 1);
const smo1026102acc = new VF.Accidental('b');
smo102610.addModifier(smo1026102acc, 2);
smo102624v0ar.push(smo102610);
smo102624v0.addTickables(smo102624v0ar)
fmtsmo10262447.joinVoices([smo102624v0]);
const fmtsmo10539947 = new VF.Formatter();
//
// voices and notes for stave 1 47
const smo105399v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105399v0ar = [];
const smo105382 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo105382.setAttribute('id', 'smo105382');
smo105399v0ar.push(smo105382);
const smo105383 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n"]}'))
smo105383.setAttribute('id', 'smo105383');
smo105399v0ar.push(smo105383);
const smo105384 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/2/n","en/3/n"]}'))
smo105384.setAttribute('id', 'smo105384');
smo105399v0ar.push(smo105384);
const smo105385 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n"]}'))
smo105385.setAttribute('id', 'smo105385');
smo105399v0ar.push(smo105385);
smo105399v0.addTickables(smo105399v0ar)
fmtsmo10539947.joinVoices([smo105399v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106966 = smo102607.getStemDirection();
smo102607.setStemDirection(dirsmo106966);
smo102608.setStemDirection(dirsmo106966);
smo102609.setStemDirection(dirsmo106966);
smo102610.setStemDirection(dirsmo106966);
const smo106966 = new VF.Beam([smo102607,smo102608,smo102609,smo102610]);
const dirsmo106968 = smo105382.getStemDirection();
smo105382.setStemDirection(dirsmo106968);
smo105383.setStemDirection(dirsmo106968);
const smo106968 = new VF.Beam([smo105382,smo105383]);
const dirsmo106969 = smo105384.getStemDirection();
smo105384.setStemDirection(dirsmo106969);
smo105385.setStemDirection(dirsmo106969);
const smo106969 = new VF.Beam([smo105384,smo105385]);
 
// formatting measures in staff group smo100894
fmtsmo10262447.format([smo102624v0,smo105399v0], 281);
const stavesmo102624 = new VF.Stave(1548, 1148, 295);
stavesmo102624.setAttribute('id', 'stavesmo102624');
stavesmo102624.setBegBarType(VF.Barline.type.NONE);
stavesmo102624.setContext(context);
stavesmo102624.draw();
smo102624v0.draw(context, stavesmo102624);
smo106966.setContext(context);
smo106966.draw();
const stavesmo105399 = new VF.Stave(1548, 1303, 295);
stavesmo105399.setAttribute('id', 'stavesmo105399');
stavesmo105399.setBegBarType(VF.Barline.type.NONE);
stavesmo105399.setContext(context);
stavesmo105399.draw();
smo105399v0.draw(context, stavesmo105399);
smo106968.setContext(context);
smo106968.draw();
smo106969.setContext(context);
smo106969.draw();
const rightsmo100894stavesmo1026241 = new VF.StaveConnector(stavesmo102624, stavesmo105399).setType(0);
rightsmo100894stavesmo1026241.setContext(context).draw();
const fmtsmo10264648 = new VF.Formatter();
//
// voices and notes for stave 0 48
const smo102646v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102646v0ar = [];
const smo102625 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo102625.setAttribute('id', 'smo102625');
smo102646v0ar.push(smo102625);
const smo102627 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo102627.setAttribute('id', 'smo102627');
smo102646v0ar.push(smo102627);
const smo102628 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo102628.setAttribute('id', 'smo102628');
smo102646v0ar.push(smo102628);
const smo102629 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo102629.setAttribute('id', 'smo102629');
smo102646v0ar.push(smo102629);
const smo102630 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo102630.setAttribute('id', 'smo102630');
smo102646v0ar.push(smo102630);
const smo102631 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
smo102631.setAttribute('id', 'smo102631');
smo102646v0ar.push(smo102631);
const smo102632 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo102632.setAttribute('id', 'smo102632');
smo102646v0ar.push(smo102632);
smo102646v0.addTickables(smo102646v0ar)
fmtsmo10264648.joinVoices([smo102646v0]);
const fmtsmo10541748 = new VF.Formatter();
//
// voices and notes for stave 1 48
const smo105417v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105417v0ar = [];
const smo105400 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo105400.setAttribute('id', 'smo105400');
smo105417v0ar.push(smo105400);
const smo105401 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo105401.setAttribute('id', 'smo105401');
smo105417v0ar.push(smo105401);
const smo105402 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo105402.setAttribute('id', 'smo105402');
smo105417v0ar.push(smo105402);
const smo105403 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo105403.setAttribute('id', 'smo105403');
smo105417v0ar.push(smo105403);
smo105417v0.addTickables(smo105417v0ar)
fmtsmo10541748.joinVoices([smo105417v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106981 = smo102625.getStemDirection();
smo102625.setStemDirection(dirsmo106981);
smo102627.setStemDirection(dirsmo106981);
smo102628.setStemDirection(dirsmo106981);
smo102629.setStemDirection(dirsmo106981);
const smo106981 = new VF.Beam([smo102625,smo102627,smo102628,smo102629]);
const dirsmo106982 = smo102630.getStemDirection();
smo102630.setStemDirection(dirsmo106982);
smo102631.setStemDirection(dirsmo106982);
smo102632.setStemDirection(dirsmo106982);
const smo106982 = new VF.Beam([smo102630,smo102631,smo102632]);
const dirsmo106984 = smo105400.getStemDirection();
smo105400.setStemDirection(dirsmo106984);
smo105401.setStemDirection(dirsmo106984);
const smo106984 = new VF.Beam([smo105400,smo105401]);
const dirsmo106985 = smo105402.getStemDirection();
smo105402.setStemDirection(dirsmo106985);
smo105403.setStemDirection(dirsmo106985);
const smo106985 = new VF.Beam([smo105402,smo105403]);
 
// formatting measures in staff group smo100894
fmtsmo10264648.format([smo102646v0,smo105417v0], 244);
const stavesmo102646 = new VF.Stave(73, 1501, 295);
stavesmo102646.setAttribute('id', 'stavesmo102646');
stavesmo102646.setBegBarType(1);
stavesmo102646.addClef('treble');
stavesmo102646.setContext(context);
stavesmo102646.draw();
smo102646v0.draw(context, stavesmo102646);
smo106981.setContext(context);
smo106981.draw();
smo106982.setContext(context);
smo106982.draw();
const stavesmo105417 = new VF.Stave(73, 1657, 295);
stavesmo105417.setAttribute('id', 'stavesmo105417');
stavesmo105417.setBegBarType(1);
stavesmo105417.addClef('bass');
stavesmo105417.setContext(context);
stavesmo105417.draw();
smo105417v0.draw(context, stavesmo105417);
smo106984.setContext(context);
smo106984.draw();
smo106985.setContext(context);
smo106985.draw();
const leftsmo100894stavesmo1026461 = new VF.StaveConnector(stavesmo102646, stavesmo105417).setType(3);
leftsmo100894stavesmo1026461.setContext(context).draw();
const fmtsmo10266449 = new VF.Formatter();
//
// voices and notes for stave 0 49
const smo102664v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102664v0ar = [];
const smo102647 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo102647.setAttribute('id', 'smo102647');
smo102664v0ar.push(smo102647);
const smo102648 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo102648.setAttribute('id', 'smo102648');
smo102664v0ar.push(smo102648);
const smo102649 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo102649.setAttribute('id', 'smo102649');
smo102664v0ar.push(smo102649);
const smo102650 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo102650.setAttribute('id', 'smo102650');
smo102664v0ar.push(smo102650);
smo102664v0.addTickables(smo102664v0ar)
fmtsmo10266449.joinVoices([smo102664v0]);
const fmtsmo10543549 = new VF.Formatter();
//
// voices and notes for stave 1 49
const smo105435v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105435v0ar = [];
const smo105418 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo105418.setAttribute('id', 'smo105418');
smo105435v0ar.push(smo105418);
const smo105419 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo105419.setAttribute('id', 'smo105419');
smo105435v0ar.push(smo105419);
const smo105420 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo105420.setAttribute('id', 'smo105420');
smo105435v0ar.push(smo105420);
const smo105421 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo105421.setAttribute('id', 'smo105421');
smo105435v0ar.push(smo105421);
smo105435v0.addTickables(smo105435v0ar)
fmtsmo10543549.joinVoices([smo105435v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106989 = smo102648.getStemDirection();
smo102648.setStemDirection(dirsmo106989);
smo102649.setStemDirection(dirsmo106989);
smo102650.setStemDirection(dirsmo106989);
const smo106989 = new VF.Beam([smo102648,smo102649,smo102650]);
const dirsmo106991 = smo105418.getStemDirection();
smo105418.setStemDirection(dirsmo106991);
smo105419.setStemDirection(dirsmo106991);
const smo106991 = new VF.Beam([smo105418,smo105419]);
 
// formatting measures in staff group smo100894
fmtsmo10266449.format([smo102664v0,smo105435v0], 281);
const stavesmo102664 = new VF.Stave(368, 1501, 295);
stavesmo102664.setAttribute('id', 'stavesmo102664');
stavesmo102664.setBegBarType(VF.Barline.type.NONE);
stavesmo102664.setContext(context);
stavesmo102664.draw();
smo102664v0.draw(context, stavesmo102664);
smo106989.setContext(context);
smo106989.draw();
const stavesmo105435 = new VF.Stave(368, 1657, 295);
stavesmo105435.setAttribute('id', 'stavesmo105435');
stavesmo105435.setBegBarType(VF.Barline.type.NONE);
stavesmo105435.setContext(context);
stavesmo105435.draw();
smo105435v0.draw(context, stavesmo105435);
smo106991.setContext(context);
smo106991.draw();
const fmtsmo10268650 = new VF.Formatter();
//
// voices and notes for stave 0 50
const smo102686v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102686v0ar = [];
const smo102665 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo102665.setAttribute('id', 'smo102665');
smo102686v0ar.push(smo102665);
const smo102666 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo102666.setAttribute('id', 'smo102666');
smo102686v0ar.push(smo102666);
const smo102667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo102667.setAttribute('id', 'smo102667');
smo102686v0ar.push(smo102667);
const smo102668 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo102668.setAttribute('id', 'smo102668');
smo102686v0ar.push(smo102668);
const smo102669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo102669.setAttribute('id', 'smo102669');
smo102686v0ar.push(smo102669);
const smo102670 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo102670.setAttribute('id', 'smo102670');
smo102686v0ar.push(smo102670);
const smo102671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo102671.setAttribute('id', 'smo102671');
smo102686v0ar.push(smo102671);
const smo102672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo102672.setAttribute('id', 'smo102672');
smo102686v0ar.push(smo102672);
smo102686v0.addTickables(smo102686v0ar)
fmtsmo10268650.joinVoices([smo102686v0]);
const fmtsmo10545350 = new VF.Formatter();
//
// voices and notes for stave 1 50
const smo105453v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105453v0ar = [];
const smo105436 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo105436.setAttribute('id', 'smo105436');
smo105453v0ar.push(smo105436);
const smo105437 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo105437.setAttribute('id', 'smo105437');
smo105453v0ar.push(smo105437);
const smo105438 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo105438.setAttribute('id', 'smo105438');
const smo1054380acc = new VF.Accidental('b');
smo105438.addModifier(smo1054380acc, 0);
const smo1054381acc = new VF.Accidental('b');
smo105438.addModifier(smo1054381acc, 1);
smo105453v0ar.push(smo105438);
const smo105439 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo105439.setAttribute('id', 'smo105439');
smo105453v0ar.push(smo105439);
smo105453v0.addTickables(smo105453v0ar)
fmtsmo10545350.joinVoices([smo105453v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106995 = smo102665.getStemDirection();
smo102665.setStemDirection(dirsmo106995);
smo102666.setStemDirection(dirsmo106995);
smo102667.setStemDirection(dirsmo106995);
smo102668.setStemDirection(dirsmo106995);
const smo106995 = new VF.Beam([smo102665,smo102666,smo102667,smo102668]);
const dirsmo106996 = smo102669.getStemDirection();
smo102669.setStemDirection(dirsmo106996);
smo102670.setStemDirection(dirsmo106996);
smo102671.setStemDirection(dirsmo106996);
smo102672.setStemDirection(dirsmo106996);
const smo106996 = new VF.Beam([smo102669,smo102670,smo102671,smo102672]);
const dirsmo106998 = smo105436.getStemDirection();
smo105436.setStemDirection(dirsmo106998);
smo105437.setStemDirection(dirsmo106998);
const smo106998 = new VF.Beam([smo105436,smo105437]);
const dirsmo106999 = smo105438.getStemDirection();
smo105438.setStemDirection(dirsmo106999);
smo105439.setStemDirection(dirsmo106999);
const smo106999 = new VF.Beam([smo105438,smo105439]);
 
// formatting measures in staff group smo100894
fmtsmo10268650.format([smo102686v0,smo105453v0], 281);
const stavesmo102686 = new VF.Stave(663, 1501, 295);
stavesmo102686.setAttribute('id', 'stavesmo102686');
stavesmo102686.setBegBarType(VF.Barline.type.NONE);
stavesmo102686.setContext(context);
stavesmo102686.draw();
smo102686v0.draw(context, stavesmo102686);
smo106995.setContext(context);
smo106995.draw();
smo106996.setContext(context);
smo106996.draw();
const stavesmo105453 = new VF.Stave(663, 1657, 295);
stavesmo105453.setAttribute('id', 'stavesmo105453');
stavesmo105453.setBegBarType(VF.Barline.type.NONE);
stavesmo105453.setContext(context);
stavesmo105453.draw();
smo105453v0.draw(context, stavesmo105453);
smo106998.setContext(context);
smo106998.draw();
smo106999.setContext(context);
smo106999.draw();
const fmtsmo10270851 = new VF.Formatter();
//
// voices and notes for stave 0 51
const smo102708v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102708v0ar = [];
const smo102687 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo102687.setAttribute('id', 'smo102687');
smo102708v0ar.push(smo102687);
const smo102688 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo102688.setAttribute('id', 'smo102688');
smo102708v0ar.push(smo102688);
const smo102689 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo102689.setAttribute('id', 'smo102689');
smo102708v0ar.push(smo102689);
const smo102690 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo102690.setAttribute('id', 'smo102690');
smo102708v0ar.push(smo102690);
const smo102691 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo102691.setAttribute('id', 'smo102691');
smo102708v0ar.push(smo102691);
const smo102692 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo102692.setAttribute('id', 'smo102692');
smo102708v0ar.push(smo102692);
const smo102693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo102693.setAttribute('id', 'smo102693');
smo102708v0ar.push(smo102693);
const smo102694 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo102694.setAttribute('id', 'smo102694');
smo102708v0ar.push(smo102694);
smo102708v0.addTickables(smo102708v0ar)
fmtsmo10270851.joinVoices([smo102708v0]);
const fmtsmo10547151 = new VF.Formatter();
//
// voices and notes for stave 1 51
const smo105471v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105471v0ar = [];
const smo105454 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/2/n","an/3/n"]}'))
smo105454.setAttribute('id', 'smo105454');
smo105471v0ar.push(smo105454);
const smo105455 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo105455.setAttribute('id', 'smo105455');
smo105471v0ar.push(smo105455);
const smo105456 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["ab/2/n","ab/3/n"]}'))
smo105456.setAttribute('id', 'smo105456');
const smo1054560acc = new VF.Accidental('b');
smo105456.addModifier(smo1054560acc, 0);
const smo1054561acc = new VF.Accidental('b');
smo105456.addModifier(smo1054561acc, 1);
smo105471v0ar.push(smo105456);
const smo105457 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo105457.setAttribute('id', 'smo105457');
smo105471v0ar.push(smo105457);
smo105471v0.addTickables(smo105471v0ar)
fmtsmo10547151.joinVoices([smo105471v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107003 = smo102687.getStemDirection();
smo102687.setStemDirection(dirsmo107003);
smo102688.setStemDirection(dirsmo107003);
smo102689.setStemDirection(dirsmo107003);
smo102690.setStemDirection(dirsmo107003);
const smo107003 = new VF.Beam([smo102687,smo102688,smo102689,smo102690]);
const dirsmo107004 = smo102691.getStemDirection();
smo102691.setStemDirection(dirsmo107004);
smo102692.setStemDirection(dirsmo107004);
smo102693.setStemDirection(dirsmo107004);
smo102694.setStemDirection(dirsmo107004);
const smo107004 = new VF.Beam([smo102691,smo102692,smo102693,smo102694]);
const dirsmo107006 = smo105454.getStemDirection();
smo105454.setStemDirection(dirsmo107006);
smo105455.setStemDirection(dirsmo107006);
const smo107006 = new VF.Beam([smo105454,smo105455]);
const dirsmo107007 = smo105456.getStemDirection();
smo105456.setStemDirection(dirsmo107007);
smo105457.setStemDirection(dirsmo107007);
const smo107007 = new VF.Beam([smo105456,smo105457]);
 
// formatting measures in staff group smo100894
fmtsmo10270851.format([smo102708v0,smo105471v0], 281);
const stavesmo102708 = new VF.Stave(958, 1501, 295);
stavesmo102708.setAttribute('id', 'stavesmo102708');
stavesmo102708.setBegBarType(VF.Barline.type.NONE);
stavesmo102708.setContext(context);
stavesmo102708.draw();
smo102708v0.draw(context, stavesmo102708);
smo107003.setContext(context);
smo107003.draw();
smo107004.setContext(context);
smo107004.draw();
const stavesmo105471 = new VF.Stave(958, 1657, 295);
stavesmo105471.setAttribute('id', 'stavesmo105471');
stavesmo105471.setBegBarType(VF.Barline.type.NONE);
stavesmo105471.setContext(context);
stavesmo105471.draw();
smo105471v0.draw(context, stavesmo105471);
smo107006.setContext(context);
smo107006.draw();
smo107007.setContext(context);
smo107007.draw();
const fmtsmo10272952 = new VF.Formatter();
//
// voices and notes for stave 0 52
const smo102729v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102729v0ar = [];
const smo102709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo102709.setAttribute('id', 'smo102709');
smo102729v0ar.push(smo102709);
const smo102710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo102710.setAttribute('id', 'smo102710');
smo102729v0ar.push(smo102710);
const smo102711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo102711.setAttribute('id', 'smo102711');
smo102729v0ar.push(smo102711);
const smo102712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo102712.setAttribute('id', 'smo102712');
smo102729v0ar.push(smo102712);
const smo102713 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo102713.setAttribute('id', 'smo102713');
smo102729v0ar.push(smo102713);
const smo102714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
smo102714.setAttribute('id', 'smo102714');
smo102729v0ar.push(smo102714);
const smo102715 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo102715.setAttribute('id', 'smo102715');
smo102729v0ar.push(smo102715);
smo102729v0.addTickables(smo102729v0ar)
fmtsmo10272952.joinVoices([smo102729v0]);
const fmtsmo10548952 = new VF.Formatter();
//
// voices and notes for stave 1 52
const smo105489v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105489v0ar = [];
const smo105472 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo105472.setAttribute('id', 'smo105472');
smo105489v0ar.push(smo105472);
const smo105473 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo105473.setAttribute('id', 'smo105473');
smo105489v0ar.push(smo105473);
const smo105474 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo105474.setAttribute('id', 'smo105474');
smo105489v0ar.push(smo105474);
const smo105475 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo105475.setAttribute('id', 'smo105475');
smo105489v0ar.push(smo105475);
smo105489v0.addTickables(smo105489v0ar)
fmtsmo10548952.joinVoices([smo105489v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107011 = smo102709.getStemDirection();
smo102709.setStemDirection(dirsmo107011);
smo102710.setStemDirection(dirsmo107011);
smo102711.setStemDirection(dirsmo107011);
smo102712.setStemDirection(dirsmo107011);
const smo107011 = new VF.Beam([smo102709,smo102710,smo102711,smo102712]);
const dirsmo107012 = smo102713.getStemDirection();
smo102713.setStemDirection(dirsmo107012);
smo102714.setStemDirection(dirsmo107012);
smo102715.setStemDirection(dirsmo107012);
const smo107012 = new VF.Beam([smo102713,smo102714,smo102715]);
const dirsmo107014 = smo105472.getStemDirection();
smo105472.setStemDirection(dirsmo107014);
smo105473.setStemDirection(dirsmo107014);
const smo107014 = new VF.Beam([smo105472,smo105473]);
const dirsmo107015 = smo105474.getStemDirection();
smo105474.setStemDirection(dirsmo107015);
smo105475.setStemDirection(dirsmo107015);
const smo107015 = new VF.Beam([smo105474,smo105475]);
 
// formatting measures in staff group smo100894
fmtsmo10272952.format([smo102729v0,smo105489v0], 281);
const stavesmo102729 = new VF.Stave(1253, 1501, 295);
stavesmo102729.setAttribute('id', 'stavesmo102729');
stavesmo102729.setBegBarType(VF.Barline.type.NONE);
stavesmo102729.setContext(context);
stavesmo102729.draw();
smo102729v0.draw(context, stavesmo102729);
smo107011.setContext(context);
smo107011.draw();
smo107012.setContext(context);
smo107012.draw();
const stavesmo105489 = new VF.Stave(1253, 1657, 295);
stavesmo105489.setAttribute('id', 'stavesmo105489');
stavesmo105489.setBegBarType(VF.Barline.type.NONE);
stavesmo105489.setContext(context);
stavesmo105489.draw();
smo105489v0.draw(context, stavesmo105489);
smo107014.setContext(context);
smo107014.draw();
smo107015.setContext(context);
smo107015.draw();
const fmtsmo10274653 = new VF.Formatter();
//
// voices and notes for stave 0 53
const smo102746v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102746v0ar = [];
const smo102730 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo102730.setAttribute('id', 'smo102730');
smo102746v0ar.push(smo102730);
const smo102731 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo102731.setAttribute('id', 'smo102731');
smo102746v0ar.push(smo102731);
const smo102732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo102732.setAttribute('id', 'smo102732');
smo102746v0ar.push(smo102732);
smo102746v0.addTickables(smo102746v0ar)
fmtsmo10274653.joinVoices([smo102746v0]);
const fmtsmo10550753 = new VF.Formatter();
//
// voices and notes for stave 1 53
const smo105507v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105507v0ar = [];
const smo105490 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","gn/3/n","cn/4/n"]}'))
smo105490.setAttribute('id', 'smo105490');
smo105507v0ar.push(smo105490);
const smo105491 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo105491.setAttribute('id', 'smo105491');
smo105507v0ar.push(smo105491);
const smo105492 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo105492.setAttribute('id', 'smo105492');
smo105507v0ar.push(smo105492);
const smo105493 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo105493.setAttribute('id', 'smo105493');
smo105507v0ar.push(smo105493);
smo105507v0.addTickables(smo105507v0ar)
fmtsmo10550753.joinVoices([smo105507v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107020 = smo105490.getStemDirection();
smo105490.setStemDirection(dirsmo107020);
smo105491.setStemDirection(dirsmo107020);
const smo107020 = new VF.Beam([smo105490,smo105491]);
 
// formatting measures in staff group smo100894
fmtsmo10274653.format([smo102746v0,smo105507v0], 281);
const stavesmo102746 = new VF.Stave(1548, 1501, 295);
stavesmo102746.setAttribute('id', 'stavesmo102746');
stavesmo102746.setBegBarType(VF.Barline.type.NONE);
stavesmo102746.setContext(context);
stavesmo102746.draw();
smo102746v0.draw(context, stavesmo102746);
const stavesmo105507 = new VF.Stave(1548, 1657, 295);
stavesmo105507.setAttribute('id', 'stavesmo105507');
stavesmo105507.setBegBarType(VF.Barline.type.NONE);
stavesmo105507.setContext(context);
stavesmo105507.draw();
smo105507v0.draw(context, stavesmo105507);
smo107020.setContext(context);
smo107020.draw();
const rightsmo100894stavesmo1027461 = new VF.StaveConnector(stavesmo102746, stavesmo105507).setType(0);
rightsmo100894stavesmo1027461.setContext(context).draw();
const fmtsmo10276654 = new VF.Formatter();
//
// voices and notes for stave 0 54
const smo102766v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102766v0ar = [];
const smo102747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n","an/5/n"]}'))
smo102747.setAttribute('id', 'smo102747');
smo102766v0ar.push(smo102747);
const smo102749 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["ab/5/n"]}'))
smo102749.setAttribute('id', 'smo102749');
const smo1027490acc = new VF.Accidental('b');
smo102749.addModifier(smo1027490acc, 0);
smo102766v0ar.push(smo102749);
const smo102750 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n","an/5/n"]}'))
smo102750.setAttribute('id', 'smo102750');
const smo1027501acc = new VF.Accidental('n');
smo102750.addModifier(smo1027501acc, 1);
smo102766v0ar.push(smo102750);
const smo102751 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n","an/5/n"]}'))
smo102751.setAttribute('id', 'smo102751');
smo102766v0ar.push(smo102751);
const smo102752 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n","an/5/n","cn/6/n"]}'))
smo102752.setAttribute('id', 'smo102752');
smo102766v0ar.push(smo102752);
smo102766v0.addTickables(smo102766v0ar)
fmtsmo10276654.joinVoices([smo102766v0]);
const fmtsmo10552554 = new VF.Formatter();
//
// voices and notes for stave 1 54
const smo105525v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105525v0ar = [];
const smo105508 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo105508.setAttribute('id', 'smo105508');
smo105525v0ar.push(smo105508);
const smo105509 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo105509.setAttribute('id', 'smo105509');
smo105525v0ar.push(smo105509);
const smo105510 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo105510.setAttribute('id', 'smo105510');
smo105525v0ar.push(smo105510);
const smo105511 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo105511.setAttribute('id', 'smo105511');
smo105525v0ar.push(smo105511);
smo105525v0.addTickables(smo105525v0ar)
fmtsmo10552554.joinVoices([smo105525v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107028 = smo102747.getStemDirection();
smo102747.setStemDirection(dirsmo107028);
smo102749.setStemDirection(dirsmo107028);
smo102750.setStemDirection(dirsmo107028);
const smo107028 = new VF.Beam([smo102747,smo102749,smo102750]);
const dirsmo107029 = smo102751.getStemDirection();
smo102751.setStemDirection(dirsmo107029);
smo102752.setStemDirection(dirsmo107029);
const smo107029 = new VF.Beam([smo102751,smo102752]);
const dirsmo107031 = smo105508.getStemDirection();
smo105508.setStemDirection(dirsmo107031);
smo105509.setStemDirection(dirsmo107031);
const smo107031 = new VF.Beam([smo105508,smo105509]);
const dirsmo107032 = smo105510.getStemDirection();
smo105510.setStemDirection(dirsmo107032);
smo105511.setStemDirection(dirsmo107032);
const smo107032 = new VF.Beam([smo105510,smo105511]);
 
// formatting measures in staff group smo100894
fmtsmo10276654.format([smo102766v0,smo105525v0], 207);
const stavesmo102766 = new VF.Stave(73, 1835, 295);
stavesmo102766.setAttribute('id', 'stavesmo102766');
stavesmo102766.setBegBarType(4);
stavesmo102766.addClef('treble');
const keysmo102766 = new VF.KeySignature('Bb');
keysmo102766.cancelKey('C');
keysmo102766.addToStave(stavesmo102766);
stavesmo102766.setContext(context);
stavesmo102766.draw();
smo102766v0.draw(context, stavesmo102766);
smo107028.setContext(context);
smo107028.draw();
smo107029.setContext(context);
smo107029.draw();
const stavesmo105525 = new VF.Stave(73, 2000, 295);
stavesmo105525.setAttribute('id', 'stavesmo105525');
stavesmo105525.setBegBarType(4);
stavesmo105525.addClef('bass');
const keysmo105525 = new VF.KeySignature('Bb');
keysmo105525.cancelKey('C');
keysmo105525.addToStave(stavesmo105525);
stavesmo105525.setContext(context);
stavesmo105525.draw();
smo105525v0.draw(context, stavesmo105525);
smo107031.setContext(context);
smo107031.draw();
smo107032.setContext(context);
smo107032.draw();
const leftsmo100894stavesmo1027661 = new VF.StaveConnector(stavesmo102766, stavesmo105525).setType(3);
leftsmo100894stavesmo1027661.setContext(context).draw();
const fmtsmo10278755 = new VF.Formatter();
//
// voices and notes for stave 0 55
const smo102787v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102787v0ar = [];
const smo102767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n","bb/5/n","dn/6/n"]}'))
smo102767.setAttribute('id', 'smo102767');
smo102787v0ar.push(smo102767);
smo102787v0.addTickables(smo102787v0ar)
fmtsmo10278755.joinVoices([smo102787v0]);
const smo102787v1 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102787v1ar = [];
const smo102768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo102768.setAttribute('id', 'smo102768');
smo102768.setStyle({ fillStyle: "#115511" });
smo102787v1ar.push(smo102768);
const smo102769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo102769.setAttribute('id', 'smo102769');
smo102769.setStyle({ fillStyle: "#115511" });
smo102787v1ar.push(smo102769);
const smo102770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo102770.setAttribute('id', 'smo102770');
smo102770.setStyle({ fillStyle: "#115511" });
smo102787v1ar.push(smo102770);
const smo102771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo102771.setAttribute('id', 'smo102771');
smo102771.setStyle({ fillStyle: "#115511" });
smo102787v1ar.push(smo102771);
const smo102772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102772.setAttribute('id', 'smo102772');
smo102772.setStyle({ fillStyle: "#115511" });
smo102787v1ar.push(smo102772);
const smo102773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo102773.setAttribute('id', 'smo102773');
smo102773.setStyle({ fillStyle: "#115511" });
smo102787v1ar.push(smo102773);
smo102787v1.addTickables(smo102787v1ar)
fmtsmo10278755.joinVoices([smo102787v1]);
const fmtsmo10554355 = new VF.Formatter();
//
// voices and notes for stave 1 55
const smo105543v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105543v0ar = [];
const smo105526 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n"]}'))
smo105526.setAttribute('id', 'smo105526');
smo105543v0ar.push(smo105526);
const smo105527 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","dn/4/n","fn/4/n"]}'))
smo105527.setAttribute('id', 'smo105527');
smo105543v0ar.push(smo105527);
const smo105528 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo105528.setAttribute('id', 'smo105528');
smo105543v0ar.push(smo105528);
const smo105529 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","dn/4/n","fn/4/n"]}'))
smo105529.setAttribute('id', 'smo105529');
smo105543v0ar.push(smo105529);
smo105543v0.addTickables(smo105543v0ar)
fmtsmo10554355.joinVoices([smo105543v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107036 = smo102769.getStemDirection();
smo102769.setStemDirection(dirsmo107036);
smo102770.setStemDirection(dirsmo107036);
const smo107036 = new VF.Beam([smo102769,smo102770]);
const dirsmo107037 = smo102771.getStemDirection();
smo102771.setStemDirection(dirsmo107037);
smo102772.setStemDirection(dirsmo107037);
smo102773.setStemDirection(dirsmo107037);
const smo107037 = new VF.Beam([smo102771,smo102772,smo102773]);
const dirsmo107039 = smo105526.getStemDirection();
smo105526.setStemDirection(dirsmo107039);
smo105527.setStemDirection(dirsmo107039);
const smo107039 = new VF.Beam([smo105526,smo105527]);
const dirsmo107040 = smo105528.getStemDirection();
smo105528.setStemDirection(dirsmo107040);
smo105529.setStemDirection(dirsmo107040);
const smo107040 = new VF.Beam([smo105528,smo105529]);
 
// formatting measures in staff group smo100894
fmtsmo10278755.format([smo102787v0,smo102787v1,smo105543v0], 281);
const stavesmo102787 = new VF.Stave(368, 1835, 295);
stavesmo102787.setAttribute('id', 'stavesmo102787');
stavesmo102787.setBegBarType(VF.Barline.type.NONE);
stavesmo102787.setContext(context);
stavesmo102787.draw();
smo102787v0.draw(context, stavesmo102787);
smo102787v1.draw(context, stavesmo102787);
smo107036.setContext(context);
smo107036.draw();
smo107037.setContext(context);
smo107037.draw();
const stavesmo105543 = new VF.Stave(368, 2000, 295);
stavesmo105543.setAttribute('id', 'stavesmo105543');
stavesmo105543.setBegBarType(VF.Barline.type.NONE);
stavesmo105543.setContext(context);
stavesmo105543.draw();
smo105543v0.draw(context, stavesmo105543);
smo107039.setContext(context);
smo107039.draw();
smo107040.setContext(context);
smo107040.draw();
const fmtsmo10280656 = new VF.Formatter();
//
// voices and notes for stave 0 56
const smo102806v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102806v0ar = [];
const smo102788 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n"]}'))
smo102788.setAttribute('id', 'smo102788');
smo102806v0ar.push(smo102788);
const smo102789 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo102789.setAttribute('id', 'smo102789');
const smo1027890acc = new VF.Accidental('n');
smo102789.addModifier(smo1027890acc, 0);
smo102806v0ar.push(smo102789);
const smo102790 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n"]}'))
smo102790.setAttribute('id', 'smo102790');
smo102806v0ar.push(smo102790);
const smo102791 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n"]}'))
smo102791.setAttribute('id', 'smo102791');
smo102806v0ar.push(smo102791);
const smo102792 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","an/5/n"]}'))
smo102792.setAttribute('id', 'smo102792');
smo102806v0ar.push(smo102792);
smo102806v0.addTickables(smo102806v0ar)
fmtsmo10280656.joinVoices([smo102806v0]);
const fmtsmo10556156 = new VF.Formatter();
//
// voices and notes for stave 1 56
const smo105561v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105561v0ar = [];
const smo105544 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n"]}'))
smo105544.setAttribute('id', 'smo105544');
smo105561v0ar.push(smo105544);
const smo105545 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo105545.setAttribute('id', 'smo105545');
smo105561v0ar.push(smo105545);
const smo105546 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo105546.setAttribute('id', 'smo105546');
smo105561v0ar.push(smo105546);
const smo105547 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo105547.setAttribute('id', 'smo105547');
smo105561v0ar.push(smo105547);
smo105561v0.addTickables(smo105561v0ar)
fmtsmo10556156.joinVoices([smo105561v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107044 = smo102788.getStemDirection();
smo102788.setStemDirection(dirsmo107044);
smo102789.setStemDirection(dirsmo107044);
smo102790.setStemDirection(dirsmo107044);
const smo107044 = new VF.Beam([smo102788,smo102789,smo102790]);
const dirsmo107045 = smo102791.getStemDirection();
smo102791.setStemDirection(dirsmo107045);
smo102792.setStemDirection(dirsmo107045);
const smo107045 = new VF.Beam([smo102791,smo102792]);
const dirsmo107047 = smo105544.getStemDirection();
smo105544.setStemDirection(dirsmo107047);
smo105545.setStemDirection(dirsmo107047);
const smo107047 = new VF.Beam([smo105544,smo105545]);
const dirsmo107048 = smo105546.getStemDirection();
smo105546.setStemDirection(dirsmo107048);
smo105547.setStemDirection(dirsmo107048);
const smo107048 = new VF.Beam([smo105546,smo105547]);
 
// formatting measures in staff group smo100894
fmtsmo10280656.format([smo102806v0,smo105561v0], 281);
const stavesmo102806 = new VF.Stave(663, 1835, 295);
stavesmo102806.setAttribute('id', 'stavesmo102806');
stavesmo102806.setBegBarType(VF.Barline.type.NONE);
stavesmo102806.setContext(context);
stavesmo102806.draw();
smo102806v0.draw(context, stavesmo102806);
smo107044.setContext(context);
smo107044.draw();
smo107045.setContext(context);
smo107045.draw();
const stavesmo105561 = new VF.Stave(663, 2000, 295);
stavesmo105561.setAttribute('id', 'stavesmo105561');
stavesmo105561.setBegBarType(VF.Barline.type.NONE);
stavesmo105561.setContext(context);
stavesmo105561.draw();
smo105561v0.draw(context, stavesmo105561);
smo107047.setContext(context);
smo107047.draw();
smo107048.setContext(context);
smo107048.draw();
const fmtsmo10282957 = new VF.Formatter();
//
// voices and notes for stave 0 57
const smo102829v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102829v0ar = [];
const smo102807 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","gn/5/n","bb/5/n"]}'))
smo102807.setAttribute('id', 'smo102807');
smo102829v0ar.push(smo102807);
const smo102808 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n","gn/5/n","bb/5/n"]}'))
smo102808.setAttribute('id', 'smo102808');
smo102808.addModifier(new VF.Dot(), 0);
smo102808.addModifier(new VF.Dot(), 1);
smo102808.addModifier(new VF.Dot(), 2);
smo102829v0ar.push(smo102808);
const smo102809 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo102809.setAttribute('id', 'smo102809');
smo102829v0ar.push(smo102809);
smo102829v0.addTickables(smo102829v0ar)
fmtsmo10282957.joinVoices([smo102829v0]);
const smo102829v1 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102829v1ar = [];
const smo102810 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo102810.setAttribute('id', 'smo102810');
smo102810.setStyle({ fillStyle: "#115511" });
smo102829v1ar.push(smo102810);
const smo102811 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo102811.setAttribute('id', 'smo102811');
smo102811.setStyle({ fillStyle: "#115511" });
smo102829v1ar.push(smo102811);
const smo102812 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n"]}'))
smo102812.setAttribute('id', 'smo102812');
smo102812.setStyle({ fillStyle: "#115511" });
const smo1028120acc = new VF.Accidental('b');
smo102812.addModifier(smo1028120acc, 0);
smo102829v1ar.push(smo102812);
const smo102813 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo102813.setAttribute('id', 'smo102813');
smo102813.setStyle({ fillStyle: "#115511" });
const smo1028130acc = new VF.Accidental('n');
smo102813.addModifier(smo1028130acc, 0);
smo102829v1ar.push(smo102813);
const smo102814 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo102814.setAttribute('id', 'smo102814');
smo102814.setStyle({ fillStyle: "#115511" });
smo102829v1ar.push(smo102814);
const smo102815 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo102815.setAttribute('id', 'smo102815');
smo102815.setStyle({ fillStyle: "#115511" });
smo102829v1ar.push(smo102815);
smo102829v1.addTickables(smo102829v1ar)
fmtsmo10282957.joinVoices([smo102829v1]);
const fmtsmo10557957 = new VF.Formatter();
//
// voices and notes for stave 1 57
const smo105579v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105579v0ar = [];
const smo105562 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo105562.setAttribute('id', 'smo105562');
smo105579v0ar.push(smo105562);
const smo105563 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo105563.setAttribute('id', 'smo105563');
smo105579v0ar.push(smo105563);
const smo105564 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo105564.setAttribute('id', 'smo105564');
smo105579v0ar.push(smo105564);
const smo105565 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo105565.setAttribute('id', 'smo105565');
smo105579v0ar.push(smo105565);
smo105579v0.addTickables(smo105579v0ar)
fmtsmo10557957.joinVoices([smo105579v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107052 = smo102808.getStemDirection();
smo102808.setStemDirection(dirsmo107052);
smo102809.setStemDirection(dirsmo107052);
const smo107052 = new VF.Beam([smo102808,smo102809]);
const dirsmo107053 = smo102811.getStemDirection();
smo102811.setStemDirection(dirsmo107053);
smo102812.setStemDirection(dirsmo107053);
const smo107053 = new VF.Beam([smo102811,smo102812]);
const dirsmo107054 = smo102813.getStemDirection();
smo102813.setStemDirection(dirsmo107054);
smo102814.setStemDirection(dirsmo107054);
smo102815.setStemDirection(dirsmo107054);
const smo107054 = new VF.Beam([smo102813,smo102814,smo102815]);
const dirsmo107056 = smo105562.getStemDirection();
smo105562.setStemDirection(dirsmo107056);
smo105563.setStemDirection(dirsmo107056);
const smo107056 = new VF.Beam([smo105562,smo105563]);
const dirsmo107057 = smo105564.getStemDirection();
smo105564.setStemDirection(dirsmo107057);
smo105565.setStemDirection(dirsmo107057);
const smo107057 = new VF.Beam([smo105564,smo105565]);
 
// formatting measures in staff group smo100894
fmtsmo10282957.format([smo102829v0,smo102829v1,smo105579v0], 281);
const stavesmo102829 = new VF.Stave(958, 1835, 295);
stavesmo102829.setAttribute('id', 'stavesmo102829');
stavesmo102829.setBegBarType(VF.Barline.type.NONE);
stavesmo102829.setContext(context);
stavesmo102829.draw();
smo102829v0.draw(context, stavesmo102829);
smo102829v1.draw(context, stavesmo102829);
smo107052.setContext(context);
smo107052.draw();
smo107053.setContext(context);
smo107053.draw();
smo107054.setContext(context);
smo107054.draw();
const stavesmo105579 = new VF.Stave(958, 2000, 295);
stavesmo105579.setAttribute('id', 'stavesmo105579');
stavesmo105579.setBegBarType(VF.Barline.type.NONE);
stavesmo105579.setContext(context);
stavesmo105579.draw();
smo105579v0.draw(context, stavesmo105579);
smo107056.setContext(context);
smo107056.draw();
smo107057.setContext(context);
smo107057.draw();
const fmtsmo10284958 = new VF.Formatter();
//
// voices and notes for stave 0 58
const smo102849v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102849v0ar = [];
const smo102830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo102830.setAttribute('id', 'smo102830');
smo102849v0ar.push(smo102830);
const smo102831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo102831.setAttribute('id', 'smo102831');
smo102849v0ar.push(smo102831);
const smo102832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo102832.setAttribute('id', 'smo102832');
smo102849v0ar.push(smo102832);
const smo102833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo102833.setAttribute('id', 'smo102833');
smo102849v0ar.push(smo102833);
const smo102834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo102834.setAttribute('id', 'smo102834');
smo102849v0ar.push(smo102834);
const smo102835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo102835.setAttribute('id', 'smo102835');
smo102849v0ar.push(smo102835);
smo102849v0.addTickables(smo102849v0ar)
fmtsmo10284958.joinVoices([smo102849v0]);
const fmtsmo10559758 = new VF.Formatter();
//
// voices and notes for stave 1 58
const smo105597v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105597v0ar = [];
const smo105580 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo105580.setAttribute('id', 'smo105580');
smo105597v0ar.push(smo105580);
const smo105581 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo105581.setAttribute('id', 'smo105581');
smo105597v0ar.push(smo105581);
const smo105582 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo105582.setAttribute('id', 'smo105582');
smo105597v0ar.push(smo105582);
const smo105583 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["ab/2/n","ab/3/n"]}'))
smo105583.setAttribute('id', 'smo105583');
const smo1055830acc = new VF.Accidental('b');
smo105583.addModifier(smo1055830acc, 0);
const smo1055831acc = new VF.Accidental('b');
smo105583.addModifier(smo1055831acc, 1);
smo105597v0ar.push(smo105583);
smo105597v0.addTickables(smo105597v0ar)
fmtsmo10559758.joinVoices([smo105597v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107061 = smo102830.getStemDirection();
smo102830.setStemDirection(dirsmo107061);
smo102831.setStemDirection(dirsmo107061);
smo102832.setStemDirection(dirsmo107061);
const smo107061 = new VF.Beam([smo102830,smo102831,smo102832]);
const dirsmo107062 = smo102833.getStemDirection();
smo102833.setStemDirection(dirsmo107062);
smo102834.setStemDirection(dirsmo107062);
smo102835.setStemDirection(dirsmo107062);
const smo107062 = new VF.Beam([smo102833,smo102834,smo102835]);
const dirsmo107064 = smo105580.getStemDirection();
smo105580.setStemDirection(dirsmo107064);
smo105581.setStemDirection(dirsmo107064);
const smo107064 = new VF.Beam([smo105580,smo105581]);
const dirsmo107065 = smo105582.getStemDirection();
smo105582.setStemDirection(dirsmo107065);
smo105583.setStemDirection(dirsmo107065);
const smo107065 = new VF.Beam([smo105582,smo105583]);
 
// formatting measures in staff group smo100894
fmtsmo10284958.format([smo102849v0,smo105597v0], 281);
const stavesmo102849 = new VF.Stave(1253, 1835, 295);
stavesmo102849.setAttribute('id', 'stavesmo102849');
stavesmo102849.setBegBarType(VF.Barline.type.NONE);
stavesmo102849.setContext(context);
stavesmo102849.draw();
smo102849v0.draw(context, stavesmo102849);
smo107061.setContext(context);
smo107061.draw();
smo107062.setContext(context);
smo107062.draw();
const stavesmo105597 = new VF.Stave(1253, 2000, 295);
stavesmo105597.setAttribute('id', 'stavesmo105597');
stavesmo105597.setBegBarType(VF.Barline.type.NONE);
stavesmo105597.setContext(context);
stavesmo105597.draw();
smo105597v0.draw(context, stavesmo105597);
smo107064.setContext(context);
smo107064.draw();
smo107065.setContext(context);
smo107065.draw();
const fmtsmo10286559 = new VF.Formatter();
//
// voices and notes for stave 0 59
const smo102865v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102865v0ar = [];
const smo102850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102850.setAttribute('id', 'smo102850');
smo102865v0ar.push(smo102850);
const smo102851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo102851.setAttribute('id', 'smo102851');
smo102865v0ar.push(smo102851);
smo102865v0.addTickables(smo102865v0ar)
fmtsmo10286559.joinVoices([smo102865v0]);
const fmtsmo10561559 = new VF.Formatter();
//
// voices and notes for stave 1 59
const smo105615v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105615v0ar = [];
const smo105598 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/2/n","an/3/n"]}'))
smo105598.setAttribute('id', 'smo105598');
smo105615v0ar.push(smo105598);
const smo105599 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo105599.setAttribute('id', 'smo105599');
smo105615v0ar.push(smo105599);
const smo105600 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo105600.setAttribute('id', 'smo105600');
smo105615v0ar.push(smo105600);
const smo105601 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo105601.setAttribute('id', 'smo105601');
smo105615v0ar.push(smo105601);
smo105615v0.addTickables(smo105615v0ar)
fmtsmo10561559.joinVoices([smo105615v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo107070 = smo105598.getStemDirection();
smo105598.setStemDirection(dirsmo107070);
smo105599.setStemDirection(dirsmo107070);
const smo107070 = new VF.Beam([smo105598,smo105599]);
const dirsmo107071 = smo105600.getStemDirection();
smo105600.setStemDirection(dirsmo107071);
smo105601.setStemDirection(dirsmo107071);
const smo107071 = new VF.Beam([smo105600,smo105601]);
 
// formatting measures in staff group smo100894
fmtsmo10286559.format([smo102865v0,smo105615v0], 281);
const stavesmo102865 = new VF.Stave(1548, 1835, 295);
stavesmo102865.setAttribute('id', 'stavesmo102865');
stavesmo102865.setBegBarType(VF.Barline.type.NONE);
stavesmo102865.setContext(context);
stavesmo102865.draw();
smo102865v0.draw(context, stavesmo102865);
const stavesmo105615 = new VF.Stave(1548, 2000, 295);
stavesmo105615.setAttribute('id', 'stavesmo105615');
stavesmo105615.setBegBarType(VF.Barline.type.NONE);
stavesmo105615.setContext(context);
stavesmo105615.draw();
smo105615v0.draw(context, stavesmo105615);
smo107070.setContext(context);
smo107070.draw();
smo107071.setContext(context);
smo107071.draw();
const rightsmo100894stavesmo1028651 = new VF.StaveConnector(stavesmo102865, stavesmo105615).setType(0);
rightsmo100894stavesmo1028651.setContext(context).draw();
// modifier from 0-32-0-2 to 0-32-0-4
const smo107981 = new VF.StaveHairpin({ first_note: smo102306, last_note: smo102306,
       firstNote: smo102306, lastNote: smo102306 });
smo107981.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo107981.setContext(context).setPosition(4).draw();
// modifier from 0-34-0-1 to 0-34-0-7
const smo107982 = new VF.StaveHairpin({ first_note: smo102346, last_note: smo102346,
       firstNote: smo102346, lastNote: smo102346 });
smo107982.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo107982.setContext(context).setPosition(4).draw();
// modifier from 0-37-0-2 to 0-38-0-0
const smo107983 = new VF.StaveHairpin({ first_note: smo102408, last_note: smo102408,
       firstNote: smo102408, lastNote: smo102408 });
smo107983.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo107983.setContext(context).setPosition(4).draw();
// modifier from 0-39-0-2 to 0-39-0-4
const smo107984 = new VF.StaveHairpin({ first_note: smo102448, last_note: smo102448,
       firstNote: smo102448, lastNote: smo102448 });
smo107984.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo107984.setContext(context).setPosition(4).draw();
// modifier from 0-41-0-2 to 0-42-0-0
// modifier from 0-41-0-2 to 0-42-0-0
// modifier from 0-43-0-2 to 0-44-0-0
const smo107987 = new VF.StaveHairpin({ first_note: smo102528, last_note: smo102528,
       firstNote: smo102528, lastNote: smo102528 });
smo107987.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo107987.setContext(context).setPosition(4).draw();
// modifier from 0-45-0-2 to 0-46-0-0
const smo107988 = new VF.StaveHairpin({ first_note: smo102569, last_note: smo102569,
       firstNote: smo102569, lastNote: smo102569 });
smo107988.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo107988.setContext(context).setPosition(4).draw();
// modifier from 0-47-0-2 to 0-47-0-4
const smo107989 = new VF.StaveHairpin({ first_note: smo102608, last_note: smo102608,
       firstNote: smo102608, lastNote: smo102608 });
smo107989.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo107989.setContext(context).setPosition(4).draw();
// modifier from 0-30-0-2 to 0-30-0-3
const smo107990 = new VF.StaveTie({ first_note: smo102263, last_note: smo102264, 
          firstNote: smo102263, lastNote: smo102264, first_indices: [0,1,2], last_indices: [0,1,2]});
smo107990.setContext(context).draw();
// modifier from 0-32-0-0 to 0-32-0-1
const smo107991 = new VF.StaveTie({ first_note: smo102304, last_note: smo102305, 
          firstNote: smo102304, lastNote: smo102305, first_indices: [0], last_indices: [0]});
smo107991.setContext(context).draw();
// modifier from 0-33-0-2 to 0-33-0-3
const smo107992 = new VF.StaveTie({ first_note: smo102326, last_note: smo102327, 
          firstNote: smo102326, lastNote: smo102327, first_indices: [0], last_indices: [0]});
smo107992.setContext(context).draw();
// modifier from 0-34-0-3 to 0-34-0-4
const smo107993 = new VF.StaveTie({ first_note: smo102348, last_note: smo102349, 
          firstNote: smo102348, lastNote: smo102349, first_indices: [0], last_indices: [0]});
smo107993.setContext(context).draw();
// modifier from 0-35-0-4 to 0-36-0-0
const smo107994 = new VF.StaveTie({ first_note: smo102371, last_note: null, 
          firstNote: smo102371, lastNote: null, first_indices: [0,1], last_indices: [0,1]});
smo107994.setContext(context).draw();
// modifier from 0-35-0-4 to 0-36-0-0
const smo107995 = new VF.StaveTie({ first_note: null, last_note: smo102386, 
          firstNote: null, lastNote: smo102386, first_indices: [0,1], last_indices: [0,1]});
smo107995.setContext(context).draw();
// modifier from 0-36-0-0 to 0-36-0-1
const smo107996 = new VF.StaveTie({ first_note: smo102386, last_note: smo102387, 
          firstNote: smo102386, lastNote: smo102387, first_indices: [0,1], last_indices: [0,1]});
smo107996.setContext(context).draw();
// modifier from 0-37-0-0 to 0-37-0-1
const smo107997 = new VF.StaveTie({ first_note: smo102406, last_note: smo102407, 
          firstNote: smo102406, lastNote: smo102407, first_indices: [0,1], last_indices: [0,1]});
smo107997.setContext(context).draw();
// modifier from 0-38-0-5 to 0-39-0-0
const smo107998 = new VF.StaveTie({ first_note: smo102431, last_note: smo102446, 
          firstNote: smo102431, lastNote: smo102446, first_indices: [0], last_indices: [0]});
smo107998.setContext(context).draw();
// modifier from 0-39-0-0 to 0-39-0-1
const smo107999 = new VF.StaveTie({ first_note: smo102446, last_note: smo102447, 
          firstNote: smo102446, lastNote: smo102447, first_indices: [0], last_indices: [0]});
smo107999.setContext(context).draw();
// modifier from 0-40-0-3 to 0-40-0-4
const smo108000 = new VF.StaveTie({ first_note: smo102469, last_note: smo102470, 
          firstNote: smo102469, lastNote: smo102470, first_indices: [0,1,2], last_indices: [0,1,2]});
smo108000.setContext(context).draw();
// modifier from 0-41-0-0 to 0-41-0-1
const smo108001 = new VF.StaveTie({ first_note: smo102487, last_note: smo102488, 
          firstNote: smo102487, lastNote: smo102488, first_indices: [0,1,2], last_indices: [0,1,2]});
smo108001.setContext(context).draw();
// modifier from 0-42-0-5 to 0-43-0-0
const smo108002 = new VF.StaveTie({ first_note: smo102511, last_note: smo102526, 
          firstNote: smo102511, lastNote: smo102526, first_indices: [0], last_indices: [0]});
smo108002.setContext(context).draw();
// modifier from 0-43-0-0 to 0-43-0-1
const smo108003 = new VF.StaveTie({ first_note: smo102526, last_note: smo102527, 
          firstNote: smo102526, lastNote: smo102527, first_indices: [0], last_indices: [0]});
smo108003.setContext(context).draw();
// modifier from 0-44-0-3 to 0-44-0-4
const smo108004 = new VF.StaveTie({ first_note: smo102548, last_note: smo102549, 
          firstNote: smo102548, lastNote: smo102549, first_indices: [0,1], last_indices: [0,1]});
smo108004.setContext(context).draw();
// modifier from 0-45-0-0 to 0-45-0-1
const smo108005 = new VF.StaveTie({ first_note: smo102567, last_note: smo102568, 
          firstNote: smo102567, lastNote: smo102568, first_indices: [0,1,2], last_indices: [0,1,2]});
smo108005.setContext(context).draw();
// modifier from 0-46-0-5 to 0-47-0-0
const smo108006 = new VF.StaveTie({ first_note: smo102591, last_note: smo102606, 
          firstNote: smo102591, lastNote: smo102606, first_indices: [0], last_indices: [0]});
smo108006.setContext(context).draw();
// modifier from 0-47-0-0 to 0-47-0-1
const smo108007 = new VF.StaveTie({ first_note: smo102606, last_note: smo102607, 
          firstNote: smo102606, lastNote: smo102607, first_indices: [0], last_indices: [0]});
smo108007.setContext(context).draw();
// modifier from 0-48-0-3 to 0-48-0-4
const smo108008 = new VF.StaveTie({ first_note: smo102629, last_note: smo102630, 
          firstNote: smo102629, lastNote: smo102630, first_indices: [0,1,2], last_indices: [0,1,2]});
smo108008.setContext(context).draw();
// modifier from 0-49-0-0 to 0-49-0-1
const smo108009 = new VF.StaveTie({ first_note: smo102647, last_note: smo102648, 
          firstNote: smo102647, lastNote: smo102648, first_indices: [0,1,2], last_indices: [0,1,2]});
smo108009.setContext(context).draw();
// modifier from 0-50-0-3 to 0-50-0-4
const smo108010 = new VF.StaveTie({ first_note: smo102668, last_note: smo102669, 
          firstNote: smo102668, lastNote: smo102669, first_indices: [0,1], last_indices: [0,1]});
smo108010.setContext(context).draw();
// modifier from 0-51-0-3 to 0-51-0-4
const smo108011 = new VF.StaveTie({ first_note: smo102690, last_note: smo102691, 
          firstNote: smo102690, lastNote: smo102691, first_indices: [0,1], last_indices: [0,1]});
smo108011.setContext(context).draw();
// modifier from 0-52-0-3 to 0-52-0-4
const smo108012 = new VF.StaveTie({ first_note: smo102712, last_note: smo102713, 
          firstNote: smo102712, lastNote: smo102713, first_indices: [0,1,2], last_indices: [0,1,2]});
smo108012.setContext(context).draw();
// modifier from 0-54-0-2 to 0-54-0-3
const smo108013 = new VF.StaveTie({ first_note: smo102750, last_note: smo102751, 
          firstNote: smo102750, lastNote: smo102751, first_indices: [0,1], last_indices: [0,1]});
smo108013.setContext(context).draw();
// modifier from 0-56-0-2 to 0-56-0-3
const smo108014 = new VF.StaveTie({ first_note: smo102790, last_note: smo102791, 
          firstNote: smo102790, lastNote: smo102791, first_indices: [0,1], last_indices: [0,1]});
smo108014.setContext(context).draw();
// modifier from 0-57-0-0 to 0-57-0-1
const smo108015 = new VF.StaveTie({ first_note: smo102807, last_note: smo102808, 
          firstNote: smo102807, lastNote: smo102808, first_indices: [0,1,2], last_indices: [0,1,2]});
smo108015.setContext(context).draw();
// modifier from 0-58-0-2 to 0-58-0-3
const smo108016 = new VF.StaveTie({ first_note: smo102832, last_note: smo102833, 
          firstNote: smo102832, lastNote: smo102833, first_indices: [0], last_indices: [0]});
smo108016.setContext(context).draw();
const smo102392smo102405 = new VF.Volta(5, '1', 73, -55);
smo102392smo102405.setContext(context).draw(stavesmo102405, -1 * 0);
const smo102410smo102424 = new VF.Volta(5, '2', 368, 20);
smo102410smo102424.setContext(context).draw(stavesmo102424, -1 * 0);
}
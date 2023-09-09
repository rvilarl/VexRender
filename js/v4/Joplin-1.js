// @@ The Entertainer p 2/3  by Scott Joplin
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1632');
svg.setAttributeNS('', 'height', '2112');
svg.setAttributeNS('', 'viewBox', '0 0 1989 2574');
//
// create the musical objects
VF.setMusicFont("Bravura","Gonville","Custom");
const fmtsmo9899630 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo98996v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98996v0ar = [];
const smo98976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo98976.setAttribute('id', 'smo98976');
smo98996v0ar.push(smo98976);
const smo98977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
smo98977.setAttribute('id', 'smo98977');
smo98996v0ar.push(smo98977);
const smo98978 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo98978.setAttribute('id', 'smo98978');
smo98996v0ar.push(smo98978);
const smo98979 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo98979.setAttribute('id', 'smo98979');
smo98996v0ar.push(smo98979);
const smo98980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo98980.setAttribute('id', 'smo98980');
smo98996v0ar.push(smo98980);
const smo98981 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo98981.setAttribute('id', 'smo98981');
smo98996v0ar.push(smo98981);
const smo98982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo98982.setAttribute('id', 'smo98982');
smo98996v0ar.push(smo98982);
smo98996v0.addTickables(smo98996v0ar)
fmtsmo9899630.joinVoices([smo98996v0]);
const fmtsmo10180630 = new VF.Formatter();
//
// voices and notes for stave 1 30
const smo101806v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101806v0ar = [];
const smo101789 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo101789.setAttribute('id', 'smo101789');
smo101806v0ar.push(smo101789);
const smo101790 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo101790.setAttribute('id', 'smo101790');
smo101806v0ar.push(smo101790);
const smo101791 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo101791.setAttribute('id', 'smo101791');
smo101806v0ar.push(smo101791);
const smo101792 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo101792.setAttribute('id', 'smo101792');
smo101806v0ar.push(smo101792);
smo101806v0.addTickables(smo101806v0ar)
fmtsmo10180630.joinVoices([smo101806v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103539 = smo98976.getStemDirection();
smo98976.setStemDirection(dirsmo103539);
smo98977.setStemDirection(dirsmo103539);
smo98978.setStemDirection(dirsmo103539);
const smo103539 = new VF.Beam([smo98976,smo98977,smo98978]);
const dirsmo103540 = smo98979.getStemDirection();
smo98979.setStemDirection(dirsmo103540);
smo98980.setStemDirection(dirsmo103540);
smo98981.setStemDirection(dirsmo103540);
smo98982.setStemDirection(dirsmo103540);
const smo103540 = new VF.Beam([smo98979,smo98980,smo98981,smo98982]);
const dirsmo103543 = smo101789.getStemDirection();
smo101789.setStemDirection(dirsmo103543);
smo101790.setStemDirection(dirsmo103543);
const smo103543 = new VF.Beam([smo101789,smo101790]);
const dirsmo103544 = smo101791.getStemDirection();
smo101791.setStemDirection(dirsmo103544);
smo101792.setStemDirection(dirsmo103544);
const smo103544 = new VF.Beam([smo101791,smo101792]);
 
// formatting measures in staff group smo97609
fmtsmo9899630.format([smo98996v0,smo101806v0], 237);
const stavesmo98996 = new VF.Stave(73, 411, 295);
stavesmo98996.setAttribute('id', 'stavesmo98996');
stavesmo98996.setBegBarType(1);
stavesmo98996.addClef('treble');
stavesmo98996.setContext(context);
stavesmo98996.draw();
smo98996v0.draw(context, stavesmo98996);
smo103539.setContext(context);
smo103539.draw();
smo103540.setContext(context);
smo103540.draw();
const stavesmo101806 = new VF.Stave(73, 561, 295);
stavesmo101806.setAttribute('id', 'stavesmo101806');
stavesmo101806.setBegBarType(1);
stavesmo101806.addClef('bass');
stavesmo101806.setContext(context);
stavesmo101806.draw();
smo101806v0.draw(context, stavesmo101806);
smo103543.setContext(context);
smo103543.draw();
smo103544.setContext(context);
smo103544.draw();
const leftsmo97609stavesmo989961 = new VF.StaveConnector(stavesmo98996, stavesmo101806).setType(3);
leftsmo97609stavesmo989961.setContext(context).draw();
const fmtsmo9901831 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo99018v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99018v0ar = [];
const smo98997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo98997.setAttribute('id', 'smo98997');
smo99018v0ar.push(smo98997);
const smo98998 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo98998.setAttribute('id', 'smo98998');
smo99018v0ar.push(smo98998);
const smo98999 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo98999.setAttribute('id', 'smo98999');
smo99018v0ar.push(smo98999);
const smo99000 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo99000.setAttribute('id', 'smo99000');
smo99018v0ar.push(smo99000);
const smo99001 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo99001.setAttribute('id', 'smo99001');
smo99018v0ar.push(smo99001);
const smo99002 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo99002.setAttribute('id', 'smo99002');
smo99018v0ar.push(smo99002);
const smo99003 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99003.setAttribute('id', 'smo99003');
smo99018v0ar.push(smo99003);
const smo99004 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo99004.setAttribute('id', 'smo99004');
smo99018v0ar.push(smo99004);
smo99018v0.addTickables(smo99018v0ar)
fmtsmo9901831.joinVoices([smo99018v0]);
const fmtsmo10182431 = new VF.Formatter();
//
// voices and notes for stave 1 31
const smo101824v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101824v0ar = [];
const smo101807 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo101807.setAttribute('id', 'smo101807');
smo101824v0ar.push(smo101807);
const smo101808 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo101808.setAttribute('id', 'smo101808');
smo101824v0ar.push(smo101808);
const smo101809 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo101809.setAttribute('id', 'smo101809');
smo101824v0ar.push(smo101809);
const smo101810 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo101810.setAttribute('id', 'smo101810');
const smo1018100acc = new VF.Accidental('b');
smo101810.addModifier(smo1018100acc, 0);
smo101824v0ar.push(smo101810);
smo101824v0.addTickables(smo101824v0ar)
fmtsmo10182431.joinVoices([smo101824v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103547 = smo98997.getStemDirection();
smo98997.setStemDirection(dirsmo103547);
smo98998.setStemDirection(dirsmo103547);
smo98999.setStemDirection(dirsmo103547);
smo99000.setStemDirection(dirsmo103547);
const smo103547 = new VF.Beam([smo98997,smo98998,smo98999,smo99000]);
const dirsmo103548 = smo99001.getStemDirection();
smo99001.setStemDirection(dirsmo103548);
smo99002.setStemDirection(dirsmo103548);
smo99003.setStemDirection(dirsmo103548);
smo99004.setStemDirection(dirsmo103548);
const smo103548 = new VF.Beam([smo99001,smo99002,smo99003,smo99004]);
const dirsmo103551 = smo101807.getStemDirection();
smo101807.setStemDirection(dirsmo103551);
smo101808.setStemDirection(dirsmo103551);
const smo103551 = new VF.Beam([smo101807,smo101808]);
const dirsmo103552 = smo101809.getStemDirection();
smo101809.setStemDirection(dirsmo103552);
smo101810.setStemDirection(dirsmo103552);
const smo103552 = new VF.Beam([smo101809,smo101810]);
 
// formatting measures in staff group smo97609
fmtsmo9901831.format([smo99018v0,smo101824v0], 281);
const stavesmo99018 = new VF.Stave(368, 411, 295);
stavesmo99018.setAttribute('id', 'stavesmo99018');
stavesmo99018.setBegBarType(VF.Barline.type.NONE);
stavesmo99018.setContext(context);
stavesmo99018.draw();
smo99018v0.draw(context, stavesmo99018);
smo103547.setContext(context);
smo103547.draw();
smo103548.setContext(context);
smo103548.draw();
const stavesmo101824 = new VF.Stave(368, 561, 295);
stavesmo101824.setAttribute('id', 'stavesmo101824');
stavesmo101824.setBegBarType(VF.Barline.type.NONE);
stavesmo101824.setContext(context);
stavesmo101824.draw();
smo101824v0.draw(context, stavesmo101824);
smo103551.setContext(context);
smo103551.draw();
smo103552.setContext(context);
smo103552.draw();
const fmtsmo9903732 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo99037v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99037v0ar = [];
const smo99019 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99019.setAttribute('id', 'smo99019');
smo99037v0ar.push(smo99019);
const smo99020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99020.setAttribute('id', 'smo99020');
smo99037v0ar.push(smo99020);
const smo99021 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo99021.setAttribute('id', 'smo99021');
smo99037v0ar.push(smo99021);
const smo99022 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n"]}'))
smo99022.setAttribute('id', 'smo99022');
const smo990220acc = new VF.Accidental('b');
smo99022.addModifier(smo990220acc, 0);
smo99037v0ar.push(smo99022);
const smo99023 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo99023.setAttribute('id', 'smo99023');
const smo990230acc = new VF.Accidental('n');
smo99023.addModifier(smo990230acc, 0);
smo99037v0ar.push(smo99023);
smo99037v0.addTickables(smo99037v0ar)
fmtsmo9903732.joinVoices([smo99037v0]);
const fmtsmo10184232 = new VF.Formatter();
//
// voices and notes for stave 1 32
const smo101842v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101842v0ar = [];
const smo101825 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo101825.setAttribute('id', 'smo101825');
smo101842v0ar.push(smo101825);
const smo101826 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo101826.setAttribute('id', 'smo101826');
smo101842v0ar.push(smo101826);
const smo101827 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo101827.setAttribute('id', 'smo101827');
smo101842v0ar.push(smo101827);
const smo101828 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","cn/4/n","en/4/n"]}'))
smo101828.setAttribute('id', 'smo101828');
const smo1018280acc = new VF.Accidental('b');
smo101828.addModifier(smo1018280acc, 0);
smo101842v0ar.push(smo101828);
smo101842v0.addTickables(smo101842v0ar)
fmtsmo10184232.joinVoices([smo101842v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103555 = smo99020.getStemDirection();
smo99020.setStemDirection(dirsmo103555);
smo99021.setStemDirection(dirsmo103555);
smo99022.setStemDirection(dirsmo103555);
smo99023.setStemDirection(dirsmo103555);
const smo103555 = new VF.Beam([smo99020,smo99021,smo99022,smo99023]);
const dirsmo103558 = smo101825.getStemDirection();
smo101825.setStemDirection(dirsmo103558);
smo101826.setStemDirection(dirsmo103558);
const smo103558 = new VF.Beam([smo101825,smo101826]);
const dirsmo103559 = smo101827.getStemDirection();
smo101827.setStemDirection(dirsmo103559);
smo101828.setStemDirection(dirsmo103559);
const smo103559 = new VF.Beam([smo101827,smo101828]);
 
// formatting measures in staff group smo97609
fmtsmo9903732.format([smo99037v0,smo101842v0], 281);
const stavesmo99037 = new VF.Stave(663, 411, 295);
stavesmo99037.setAttribute('id', 'stavesmo99037');
stavesmo99037.setBegBarType(VF.Barline.type.NONE);
stavesmo99037.setContext(context);
stavesmo99037.draw();
smo99037v0.draw(context, stavesmo99037);
smo103555.setContext(context);
smo103555.draw();
const stavesmo101842 = new VF.Stave(663, 561, 295);
stavesmo101842.setAttribute('id', 'stavesmo101842');
stavesmo101842.setBegBarType(VF.Barline.type.NONE);
stavesmo101842.setContext(context);
stavesmo101842.draw();
smo101842v0.draw(context, stavesmo101842);
smo103558.setContext(context);
smo103558.draw();
smo103559.setContext(context);
smo103559.draw();
const fmtsmo9905933 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo99059v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99059v0ar = [];
const smo99038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99038.setAttribute('id', 'smo99038');
smo99059v0ar.push(smo99038);
const smo99040 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo99040.setAttribute('id', 'smo99040');
smo99059v0ar.push(smo99040);
const smo99041 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99041.setAttribute('id', 'smo99041');
smo99059v0ar.push(smo99041);
const smo99042 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99042.setAttribute('id', 'smo99042');
smo99059v0ar.push(smo99042);
const smo99043 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo99043.setAttribute('id', 'smo99043');
smo99059v0ar.push(smo99043);
const smo99044 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99044.setAttribute('id', 'smo99044');
smo99059v0ar.push(smo99044);
const smo99045 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo99045.setAttribute('id', 'smo99045');
smo99059v0ar.push(smo99045);
smo99059v0.addTickables(smo99059v0ar)
fmtsmo9905933.joinVoices([smo99059v0]);
const fmtsmo10186033 = new VF.Formatter();
//
// voices and notes for stave 1 33
const smo101860v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101860v0ar = [];
const smo101843 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n","cn/4/n","fn/4/n"]}'))
smo101843.setAttribute('id', 'smo101843');
smo101860v0ar.push(smo101843);
const smo101844 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n","cn/4/n","fn/4/n"]}'))
smo101844.setAttribute('id', 'smo101844');
smo101860v0ar.push(smo101844);
const smo101845 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","an/3/n","cn/4/n","eb/4/n"]}'))
smo101845.setAttribute('id', 'smo101845');
const smo1018450acc = new VF.Accidental('b');
smo101845.addModifier(smo1018450acc, 0);
const smo1018453acc = new VF.Accidental('b');
smo101845.addModifier(smo1018453acc, 3);
smo101860v0ar.push(smo101845);
const smo101846 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","an/3/n","cn/4/n","eb/4/n"]}'))
smo101846.setAttribute('id', 'smo101846');
smo101860v0ar.push(smo101846);
smo101860v0.addTickables(smo101860v0ar)
fmtsmo10186033.joinVoices([smo101860v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103562 = smo99038.getStemDirection();
smo99038.setStemDirection(dirsmo103562);
smo99040.setStemDirection(dirsmo103562);
smo99041.setStemDirection(dirsmo103562);
const smo103562 = new VF.Beam([smo99038,smo99040,smo99041]);
const dirsmo103563 = smo99042.getStemDirection();
smo99042.setStemDirection(dirsmo103563);
smo99043.setStemDirection(dirsmo103563);
smo99044.setStemDirection(dirsmo103563);
smo99045.setStemDirection(dirsmo103563);
const smo103563 = new VF.Beam([smo99042,smo99043,smo99044,smo99045]);
const dirsmo103566 = smo101843.getStemDirection();
smo101843.setStemDirection(dirsmo103566);
smo101844.setStemDirection(dirsmo103566);
const smo103566 = new VF.Beam([smo101843,smo101844]);
const dirsmo103567 = smo101845.getStemDirection();
smo101845.setStemDirection(dirsmo103567);
smo101846.setStemDirection(dirsmo103567);
const smo103567 = new VF.Beam([smo101845,smo101846]);
 
// formatting measures in staff group smo97609
fmtsmo9905933.format([smo99059v0,smo101860v0], 281);
const stavesmo99059 = new VF.Stave(958, 411, 295);
stavesmo99059.setAttribute('id', 'stavesmo99059');
stavesmo99059.setBegBarType(VF.Barline.type.NONE);
stavesmo99059.setContext(context);
stavesmo99059.draw();
smo99059v0.draw(context, stavesmo99059);
smo103562.setContext(context);
smo103562.draw();
smo103563.setContext(context);
smo103563.draw();
const stavesmo101860 = new VF.Stave(958, 561, 295);
stavesmo101860.setAttribute('id', 'stavesmo101860');
stavesmo101860.setBegBarType(VF.Barline.type.NONE);
stavesmo101860.setContext(context);
stavesmo101860.draw();
smo101860v0.draw(context, stavesmo101860);
smo103566.setContext(context);
smo103566.draw();
smo103567.setContext(context);
smo103567.draw();
const fmtsmo9908134 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo99081v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99081v0ar = [];
const smo99060 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo99060.setAttribute('id', 'smo99060');
smo99081v0ar.push(smo99060);
const smo99061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99061.setAttribute('id', 'smo99061');
smo99081v0ar.push(smo99061);
const smo99062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo99062.setAttribute('id', 'smo99062');
smo99081v0ar.push(smo99062);
const smo99063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo99063.setAttribute('id', 'smo99063');
smo99081v0ar.push(smo99063);
const smo99064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo99064.setAttribute('id', 'smo99064');
smo99081v0ar.push(smo99064);
const smo99065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo99065.setAttribute('id', 'smo99065');
smo99081v0ar.push(smo99065);
const smo99066 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99066.setAttribute('id', 'smo99066');
smo99081v0ar.push(smo99066);
const smo99067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo99067.setAttribute('id', 'smo99067');
smo99081v0ar.push(smo99067);
smo99081v0.addTickables(smo99081v0ar)
fmtsmo9908134.joinVoices([smo99081v0]);
const fmtsmo10187834 = new VF.Formatter();
//
// voices and notes for stave 1 34
const smo101878v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101878v0ar = [];
const smo101861 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo101861.setAttribute('id', 'smo101861');
smo101878v0ar.push(smo101861);
const smo101862 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo101862.setAttribute('id', 'smo101862');
smo101878v0ar.push(smo101862);
const smo101863 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo101863.setAttribute('id', 'smo101863');
smo101878v0ar.push(smo101863);
const smo101864 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo101864.setAttribute('id', 'smo101864');
smo101878v0ar.push(smo101864);
smo101878v0.addTickables(smo101878v0ar)
fmtsmo10187834.joinVoices([smo101878v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103570 = smo99060.getStemDirection();
smo99060.setStemDirection(dirsmo103570);
smo99061.setStemDirection(dirsmo103570);
smo99062.setStemDirection(dirsmo103570);
smo99063.setStemDirection(dirsmo103570);
const smo103570 = new VF.Beam([smo99060,smo99061,smo99062,smo99063]);
const dirsmo103571 = smo99064.getStemDirection();
smo99064.setStemDirection(dirsmo103571);
smo99065.setStemDirection(dirsmo103571);
smo99066.setStemDirection(dirsmo103571);
smo99067.setStemDirection(dirsmo103571);
const smo103571 = new VF.Beam([smo99064,smo99065,smo99066,smo99067]);
const dirsmo103574 = smo101861.getStemDirection();
smo101861.setStemDirection(dirsmo103574);
smo101862.setStemDirection(dirsmo103574);
const smo103574 = new VF.Beam([smo101861,smo101862]);
const dirsmo103575 = smo101863.getStemDirection();
smo101863.setStemDirection(dirsmo103575);
smo101864.setStemDirection(dirsmo103575);
const smo103575 = new VF.Beam([smo101863,smo101864]);
 
// formatting measures in staff group smo97609
fmtsmo9908134.format([smo99081v0,smo101878v0], 281);
const stavesmo99081 = new VF.Stave(1253, 411, 295);
stavesmo99081.setAttribute('id', 'stavesmo99081');
stavesmo99081.setBegBarType(VF.Barline.type.NONE);
stavesmo99081.setContext(context);
stavesmo99081.draw();
smo99081v0.draw(context, stavesmo99081);
smo103570.setContext(context);
smo103570.draw();
smo103571.setContext(context);
smo103571.draw();
const stavesmo101878 = new VF.Stave(1253, 561, 295);
stavesmo101878.setAttribute('id', 'stavesmo101878');
stavesmo101878.setBegBarType(VF.Barline.type.NONE);
stavesmo101878.setContext(context);
stavesmo101878.draw();
smo101878v0.draw(context, stavesmo101878);
smo103574.setContext(context);
smo103574.draw();
smo103575.setContext(context);
smo103575.draw();
const fmtsmo9910035 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo99100v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99100v0ar = [];
const smo99082 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","an/4/n"]}'))
smo99082.setAttribute('id', 'smo99082');
const smo990820acc = new VF.Accidental('b');
smo99082.addModifier(smo990820acc, 0);
smo99100v0ar.push(smo99082);
const smo99083 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","cn/5/n"]}'))
smo99083.setAttribute('id', 'smo99083');
smo99100v0ar.push(smo99083);
const smo99084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","en/5/n"]}'))
smo99084.setAttribute('id', 'smo99084');
smo99100v0ar.push(smo99084);
const smo99085 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n"]}'))
smo99085.setAttribute('id', 'smo99085');
smo99100v0ar.push(smo99085);
const smo99086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
smo99086.setAttribute('id', 'smo99086');
smo99100v0ar.push(smo99086);
smo99100v0.addTickables(smo99100v0ar)
fmtsmo9910035.joinVoices([smo99100v0]);
const fmtsmo10189635 = new VF.Formatter();
//
// voices and notes for stave 1 35
const smo101896v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101896v0ar = [];
const smo101879 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","cn/4/n"]}'))
smo101879.setAttribute('id', 'smo101879');
smo101896v0ar.push(smo101879);
const smo101880 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","an/3/n"]}'))
smo101880.setAttribute('id', 'smo101880');
smo101896v0ar.push(smo101880);
const smo101881 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo101881.setAttribute('id', 'smo101881');
smo101896v0ar.push(smo101881);
const smo101882 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo101882.setAttribute('id', 'smo101882');
smo101896v0ar.push(smo101882);
smo101896v0.addTickables(smo101896v0ar)
fmtsmo10189635.joinVoices([smo101896v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103578 = smo99082.getStemDirection();
smo99082.setStemDirection(dirsmo103578);
smo99083.setStemDirection(dirsmo103578);
const smo103578 = new VF.Beam([smo99082,smo99083]);
const dirsmo103579 = smo99084.getStemDirection();
smo99084.setStemDirection(dirsmo103579);
smo99085.setStemDirection(dirsmo103579);
smo99086.setStemDirection(dirsmo103579);
const smo103579 = new VF.Beam([smo99084,smo99085,smo99086]);
const dirsmo103582 = smo101879.getStemDirection();
smo101879.setStemDirection(dirsmo103582);
smo101880.setStemDirection(dirsmo103582);
const smo103582 = new VF.Beam([smo101879,smo101880]);
const dirsmo103583 = smo101881.getStemDirection();
smo101881.setStemDirection(dirsmo103583);
smo101882.setStemDirection(dirsmo103583);
const smo103583 = new VF.Beam([smo101881,smo101882]);
 
// formatting measures in staff group smo97609
fmtsmo9910035.format([smo99100v0,smo101896v0], 281);
const stavesmo99100 = new VF.Stave(1548, 411, 295);
stavesmo99100.setAttribute('id', 'stavesmo99100');
stavesmo99100.setBegBarType(VF.Barline.type.NONE);
stavesmo99100.setContext(context);
stavesmo99100.draw();
smo99100v0.draw(context, stavesmo99100);
smo103578.setContext(context);
smo103578.draw();
smo103579.setContext(context);
smo103579.draw();
const stavesmo101896 = new VF.Stave(1548, 561, 295);
stavesmo101896.setAttribute('id', 'stavesmo101896');
stavesmo101896.setBegBarType(VF.Barline.type.NONE);
stavesmo101896.setContext(context);
stavesmo101896.draw();
smo101896v0.draw(context, stavesmo101896);
smo103582.setContext(context);
smo103582.draw();
smo103583.setContext(context);
smo103583.draw();
const rightsmo97609stavesmo991001 = new VF.StaveConnector(stavesmo99100, stavesmo101896).setType(0);
rightsmo97609stavesmo991001.setContext(context).draw();
const fmtsmo9912036 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo99120v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99120v0ar = [];
const smo99101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
smo99101.setAttribute('id', 'smo99101');
smo99120v0ar.push(smo99101);
const smo99102 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
smo99102.setAttribute('id', 'smo99102');
smo99120v0ar.push(smo99102);
const smo99103 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","cn/6/n","en/6/n"]}'))
smo99103.setAttribute('id', 'smo99103');
smo99120v0ar.push(smo99103);
const smo99104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","dn/6/n","fn/6/n"]}'))
smo99104.setAttribute('id', 'smo99104');
smo99120v0ar.push(smo99104);
const smo99105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/5/n","eb/6/n","gb/6/n"]}'))
smo99105.setAttribute('id', 'smo99105');
const smo991050acc = new VF.Accidental('b');
smo99105.addModifier(smo991050acc, 0);
const smo991051acc = new VF.Accidental('b');
smo99105.addModifier(smo991051acc, 1);
const smo991052acc = new VF.Accidental('b');
smo99105.addModifier(smo991052acc, 2);
smo99120v0ar.push(smo99105);
smo99120v0.addTickables(smo99120v0ar)
fmtsmo9912036.joinVoices([smo99120v0]);
const fmtsmo10191536 = new VF.Formatter();
//
// voices and notes for stave 1 36
const smo101915v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101915v0ar = [];
const smo101897 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo101897.setAttribute('id', 'smo101897');
smo101915v0ar.push(smo101897);
const smo101898 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo101898.setAttribute('id', 'smo101898');
smo101915v0ar.push(smo101898);
const smo101899 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
smo101899.setAttribute('id', 'smo101899');
smo101915v0ar.push(smo101899);
const smo101900 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo101900.setAttribute('id', 'smo101900');
smo101915v0ar.push(smo101900);
smo101915v0.addTickables(smo101915v0ar)
fmtsmo10191536.joinVoices([smo101915v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103592 = smo99102.getStemDirection();
smo99102.setStemDirection(dirsmo103592);
smo99103.setStemDirection(dirsmo103592);
smo99104.setStemDirection(dirsmo103592);
smo99105.setStemDirection(dirsmo103592);
const smo103592 = new VF.Beam([smo99102,smo99103,smo99104,smo99105]);
const dirsmo103594 = smo101897.getStemDirection();
smo101897.setStemDirection(dirsmo103594);
smo101898.setStemDirection(dirsmo103594);
const smo103594 = new VF.Beam([smo101897,smo101898]);
const dirsmo103595 = smo101899.getStemDirection();
smo101899.setStemDirection(dirsmo103595);
smo101900.setStemDirection(dirsmo103595);
const smo103595 = new VF.Beam([smo101899,smo101900]);
 
// formatting measures in staff group smo97609
fmtsmo9912036.format([smo99120v0,smo101915v0], 233);
const stavesmo99120 = new VF.Stave(73, 789, 295);
stavesmo99120.setAttribute('id', 'stavesmo99120');
stavesmo99120.setBegBarType(1);
stavesmo99120.setEndBarType(5);
stavesmo99120.addClef('treble');
stavesmo99120.setContext(context);
stavesmo99120.draw();
smo99120v0.draw(context, stavesmo99120);
smo103592.setContext(context);
smo103592.draw();
const stavesmo101915 = new VF.Stave(73, 930, 295);
stavesmo101915.setAttribute('id', 'stavesmo101915');
stavesmo101915.setBegBarType(1);
stavesmo101915.setEndBarType(5);
stavesmo101915.addClef('bass');
stavesmo101915.setContext(context);
stavesmo101915.draw();
smo101915v0.draw(context, stavesmo101915);
smo103594.setContext(context);
smo103594.draw();
smo103595.setContext(context);
smo103595.draw();
const leftsmo97609stavesmo991201 = new VF.StaveConnector(stavesmo99120, stavesmo101915).setType(3);
leftsmo97609stavesmo991201.setContext(context).draw();
const fmtsmo9913937 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo99139v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99139v0ar = [];
const smo99121 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
smo99121.setAttribute('id', 'smo99121');
smo99139v0ar.push(smo99121);
const smo99122 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
smo99122.setAttribute('id', 'smo99122');
smo99139v0ar.push(smo99122);
const smo99123 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo99123.setAttribute('id', 'smo99123');
smo99139v0ar.push(smo99123);
const smo99124 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo99124.setAttribute('id', 'smo99124');
const smo991240acc = new VF.Accidental('b');
smo99124.addModifier(smo991240acc, 0);
smo99139v0ar.push(smo99124);
smo99139v0.addTickables(smo99139v0ar)
fmtsmo9913937.joinVoices([smo99139v0]);
const fmtsmo10193437 = new VF.Formatter();
//
// voices and notes for stave 1 37
const smo101934v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101934v0ar = [];
const smo101916 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo101916.setAttribute('id', 'smo101916');
smo101934v0ar.push(smo101916);
const smo101917 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo101917.setAttribute('id', 'smo101917');
smo101934v0ar.push(smo101917);
const smo101918 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo101918.setAttribute('id', 'smo101918');
smo101934v0ar.push(smo101918);
const smo101919 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo101919.setAttribute('id', 'smo101919');
smo101934v0ar.push(smo101919);
smo101934v0.addTickables(smo101934v0ar)
fmtsmo10193437.joinVoices([smo101934v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103597 = smo99122.getStemDirection();
smo99122.setStemDirection(dirsmo103597);
smo99123.setStemDirection(dirsmo103597);
smo99124.setStemDirection(dirsmo103597);
const smo103597 = new VF.Beam([smo99122,smo99123,smo99124]);
const dirsmo103600 = smo101916.getStemDirection();
smo101916.setStemDirection(dirsmo103600);
smo101917.setStemDirection(dirsmo103600);
const smo103600 = new VF.Beam([smo101916,smo101917]);
 
// formatting measures in staff group smo97609
fmtsmo9913937.format([smo99139v0,smo101934v0], 281);
const stavesmo99139 = new VF.Stave(368, 789, 295);
stavesmo99139.setAttribute('id', 'stavesmo99139');
stavesmo99139.setBegBarType(VF.Barline.type.NONE);
stavesmo99139.setContext(context);
stavesmo99139.draw();
smo99139v0.draw(context, stavesmo99139);
smo103597.setContext(context);
smo103597.draw();
const stavesmo101934 = new VF.Stave(368, 930, 295);
stavesmo101934.setAttribute('id', 'stavesmo101934');
stavesmo101934.setBegBarType(VF.Barline.type.NONE);
stavesmo101934.setContext(context);
stavesmo101934.draw();
smo101934v0.draw(context, stavesmo101934);
smo103600.setContext(context);
smo103600.draw();
const fmtsmo9916038 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo99160v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99160v0ar = [];
const smo99140 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo99140.setAttribute('id', 'smo99140');
smo99160v0ar.push(smo99140);
const smo99142 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99142.setAttribute('id', 'smo99142');
smo99160v0ar.push(smo99142);
const smo99143 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo99143.setAttribute('id', 'smo99143');
smo99160v0ar.push(smo99143);
const smo99144 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99144.setAttribute('id', 'smo99144');
smo99160v0ar.push(smo99144);
const smo99145 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo99145.setAttribute('id', 'smo99145');
smo99160v0ar.push(smo99145);
const smo99146 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99146.setAttribute('id', 'smo99146');
smo99160v0ar.push(smo99146);
smo99160v0.addTickables(smo99160v0ar)
fmtsmo9916038.joinVoices([smo99160v0]);
const fmtsmo10195238 = new VF.Formatter();
//
// voices and notes for stave 1 38
const smo101952v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101952v0ar = [];
const smo101935 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo101935.setAttribute('id', 'smo101935');
smo101952v0ar.push(smo101935);
const smo101936 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo101936.setAttribute('id', 'smo101936');
smo101952v0ar.push(smo101936);
const smo101937 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo101937.setAttribute('id', 'smo101937');
smo101952v0ar.push(smo101937);
const smo101938 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
smo101938.setAttribute('id', 'smo101938');
const smo1019381acc = new VF.Accidental('b');
smo101938.addModifier(smo1019381acc, 1);
smo101952v0ar.push(smo101938);
smo101952v0.addTickables(smo101952v0ar)
fmtsmo10195238.joinVoices([smo101952v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103603 = smo99140.getStemDirection();
smo99140.setStemDirection(dirsmo103603);
smo99142.setStemDirection(dirsmo103603);
smo99143.setStemDirection(dirsmo103603);
const smo103603 = new VF.Beam([smo99140,smo99142,smo99143]);
const dirsmo103604 = smo99144.getStemDirection();
smo99144.setStemDirection(dirsmo103604);
smo99145.setStemDirection(dirsmo103604);
smo99146.setStemDirection(dirsmo103604);
const smo103604 = new VF.Beam([smo99144,smo99145,smo99146]);
const dirsmo103607 = smo101935.getStemDirection();
smo101935.setStemDirection(dirsmo103607);
smo101936.setStemDirection(dirsmo103607);
const smo103607 = new VF.Beam([smo101935,smo101936]);
const dirsmo103608 = smo101937.getStemDirection();
smo101937.setStemDirection(dirsmo103608);
smo101938.setStemDirection(dirsmo103608);
const smo103608 = new VF.Beam([smo101937,smo101938]);
 
// formatting measures in staff group smo97609
fmtsmo9916038.format([smo99160v0,smo101952v0], 281);
const stavesmo99160 = new VF.Stave(663, 789, 295);
stavesmo99160.setAttribute('id', 'stavesmo99160');
stavesmo99160.setBegBarType(VF.Barline.type.NONE);
stavesmo99160.setContext(context);
stavesmo99160.draw();
smo99160v0.draw(context, stavesmo99160);
smo103603.setContext(context);
smo103603.draw();
smo103604.setContext(context);
smo103604.draw();
const stavesmo101952 = new VF.Stave(663, 930, 295);
stavesmo101952.setAttribute('id', 'stavesmo101952');
stavesmo101952.setBegBarType(VF.Barline.type.NONE);
stavesmo101952.setContext(context);
stavesmo101952.draw();
smo101952v0.draw(context, stavesmo101952);
smo103607.setContext(context);
smo103607.draw();
smo103608.setContext(context);
smo103608.draw();
const fmtsmo9917939 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo99179v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99179v0ar = [];
const smo99161 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99161.setAttribute('id', 'smo99161');
smo99179v0ar.push(smo99161);
const smo99162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99162.setAttribute('id', 'smo99162');
smo99179v0ar.push(smo99162);
const smo99163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo99163.setAttribute('id', 'smo99163');
smo99179v0ar.push(smo99163);
const smo99164 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo99164.setAttribute('id', 'smo99164');
smo99179v0ar.push(smo99164);
const smo99165 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n","gb/5/n","eb/6/n"]}'))
smo99165.setAttribute('id', 'smo99165');
const smo991650acc = new VF.Accidental('b');
smo99165.addModifier(smo991650acc, 0);
const smo991651acc = new VF.Accidental('b');
smo99165.addModifier(smo991651acc, 1);
const smo991652acc = new VF.Accidental('b');
smo99165.addModifier(smo991652acc, 2);
smo99179v0ar.push(smo99165);
smo99179v0.addTickables(smo99179v0ar)
fmtsmo9917939.joinVoices([smo99179v0]);
const fmtsmo10197039 = new VF.Formatter();
//
// voices and notes for stave 1 39
const smo101970v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101970v0ar = [];
const smo101953 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo101953.setAttribute('id', 'smo101953');
smo101970v0ar.push(smo101953);
const smo101954 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
smo101954.setAttribute('id', 'smo101954');
smo101970v0ar.push(smo101954);
const smo101955 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
smo101955.setAttribute('id', 'smo101955');
smo101970v0ar.push(smo101955);
const smo101956 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n"]}'))
smo101956.setAttribute('id', 'smo101956');
smo101970v0ar.push(smo101956);
smo101970v0.addTickables(smo101970v0ar)
fmtsmo10197039.joinVoices([smo101970v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103611 = smo99162.getStemDirection();
smo99162.setStemDirection(dirsmo103611);
smo99163.setStemDirection(dirsmo103611);
smo99164.setStemDirection(dirsmo103611);
smo99165.setStemDirection(dirsmo103611);
const smo103611 = new VF.Beam([smo99162,smo99163,smo99164,smo99165]);
const dirsmo103614 = smo101953.getStemDirection();
smo101953.setStemDirection(dirsmo103614);
smo101954.setStemDirection(dirsmo103614);
const smo103614 = new VF.Beam([smo101953,smo101954]);
const dirsmo103615 = smo101955.getStemDirection();
smo101955.setStemDirection(dirsmo103615);
smo101956.setStemDirection(dirsmo103615);
const smo103615 = new VF.Beam([smo101955,smo101956]);
 
// formatting measures in staff group smo97609
fmtsmo9917939.format([smo99179v0,smo101970v0], 281);
const stavesmo99179 = new VF.Stave(958, 789, 295);
stavesmo99179.setAttribute('id', 'stavesmo99179');
stavesmo99179.setBegBarType(VF.Barline.type.NONE);
stavesmo99179.setContext(context);
stavesmo99179.draw();
smo99179v0.draw(context, stavesmo99179);
smo103611.setContext(context);
smo103611.draw();
const stavesmo101970 = new VF.Stave(958, 930, 295);
stavesmo101970.setAttribute('id', 'stavesmo101970');
stavesmo101970.setBegBarType(VF.Barline.type.NONE);
stavesmo101970.setContext(context);
stavesmo101970.draw();
smo101970v0.draw(context, stavesmo101970);
smo103614.setContext(context);
smo103614.draw();
smo103615.setContext(context);
smo103615.draw();
const fmtsmo9920140 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo99201v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99201v0ar = [];
const smo99180 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo99180.setAttribute('id', 'smo99180');
smo99201v0ar.push(smo99180);
const smo99182 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo99182.setAttribute('id', 'smo99182');
smo99201v0ar.push(smo99182);
const smo99183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo99183.setAttribute('id', 'smo99183');
smo99201v0ar.push(smo99183);
const smo99184 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo99184.setAttribute('id', 'smo99184');
smo99201v0ar.push(smo99184);
const smo99185 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo99185.setAttribute('id', 'smo99185');
smo99201v0ar.push(smo99185);
const smo99186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
smo99186.setAttribute('id', 'smo99186');
smo99201v0ar.push(smo99186);
const smo99187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo99187.setAttribute('id', 'smo99187');
smo99201v0ar.push(smo99187);
smo99201v0.addTickables(smo99201v0ar)
fmtsmo9920140.joinVoices([smo99201v0]);
const fmtsmo10198840 = new VF.Formatter();
//
// voices and notes for stave 1 40
const smo101988v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101988v0ar = [];
const smo101971 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo101971.setAttribute('id', 'smo101971');
smo101988v0ar.push(smo101971);
const smo101972 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo101972.setAttribute('id', 'smo101972');
smo101988v0ar.push(smo101972);
const smo101973 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo101973.setAttribute('id', 'smo101973');
smo101988v0ar.push(smo101973);
const smo101974 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo101974.setAttribute('id', 'smo101974');
smo101988v0ar.push(smo101974);
smo101988v0.addTickables(smo101988v0ar)
fmtsmo10198840.joinVoices([smo101988v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103618 = smo99180.getStemDirection();
smo99180.setStemDirection(dirsmo103618);
smo99182.setStemDirection(dirsmo103618);
smo99183.setStemDirection(dirsmo103618);
smo99184.setStemDirection(dirsmo103618);
const smo103618 = new VF.Beam([smo99180,smo99182,smo99183,smo99184]);
const dirsmo103619 = smo99185.getStemDirection();
smo99185.setStemDirection(dirsmo103619);
smo99186.setStemDirection(dirsmo103619);
smo99187.setStemDirection(dirsmo103619);
const smo103619 = new VF.Beam([smo99185,smo99186,smo99187]);
const dirsmo103622 = smo101971.getStemDirection();
smo101971.setStemDirection(dirsmo103622);
smo101972.setStemDirection(dirsmo103622);
const smo103622 = new VF.Beam([smo101971,smo101972]);
const dirsmo103623 = smo101973.getStemDirection();
smo101973.setStemDirection(dirsmo103623);
smo101974.setStemDirection(dirsmo103623);
const smo103623 = new VF.Beam([smo101973,smo101974]);
 
// formatting measures in staff group smo97609
fmtsmo9920140.format([smo99201v0,smo101988v0], 281);
const stavesmo99201 = new VF.Stave(1253, 789, 295);
stavesmo99201.setAttribute('id', 'stavesmo99201');
stavesmo99201.setBegBarType(VF.Barline.type.NONE);
stavesmo99201.setContext(context);
stavesmo99201.draw();
smo99201v0.draw(context, stavesmo99201);
smo103618.setContext(context);
smo103618.draw();
smo103619.setContext(context);
smo103619.draw();
const stavesmo101988 = new VF.Stave(1253, 930, 295);
stavesmo101988.setAttribute('id', 'stavesmo101988');
stavesmo101988.setBegBarType(VF.Barline.type.NONE);
stavesmo101988.setContext(context);
stavesmo101988.draw();
smo101988v0.draw(context, stavesmo101988);
smo103622.setContext(context);
smo103622.draw();
smo103623.setContext(context);
smo103623.draw();
const fmtsmo9921941 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo99219v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99219v0ar = [];
const smo99202 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo99202.setAttribute('id', 'smo99202');
smo99219v0ar.push(smo99202);
const smo99203 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo99203.setAttribute('id', 'smo99203');
smo99219v0ar.push(smo99203);
const smo99204 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo99204.setAttribute('id', 'smo99204');
smo99219v0ar.push(smo99204);
const smo99205 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo99205.setAttribute('id', 'smo99205');
const smo992050acc = new VF.Accidental('b');
smo99205.addModifier(smo992050acc, 0);
smo99219v0ar.push(smo99205);
smo99219v0.addTickables(smo99219v0ar)
fmtsmo9921941.joinVoices([smo99219v0]);
const fmtsmo10200641 = new VF.Formatter();
//
// voices and notes for stave 1 41
const smo102006v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102006v0ar = [];
const smo101989 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo101989.setAttribute('id', 'smo101989');
smo102006v0ar.push(smo101989);
const smo101990 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo101990.setAttribute('id', 'smo101990');
smo102006v0ar.push(smo101990);
const smo101991 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo101991.setAttribute('id', 'smo101991');
smo102006v0ar.push(smo101991);
const smo101992 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo101992.setAttribute('id', 'smo101992');
smo102006v0ar.push(smo101992);
smo102006v0.addTickables(smo102006v0ar)
fmtsmo10200641.joinVoices([smo102006v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103626 = smo99203.getStemDirection();
smo99203.setStemDirection(dirsmo103626);
smo99204.setStemDirection(dirsmo103626);
smo99205.setStemDirection(dirsmo103626);
const smo103626 = new VF.Beam([smo99203,smo99204,smo99205]);
const dirsmo103629 = smo101989.getStemDirection();
smo101989.setStemDirection(dirsmo103629);
smo101990.setStemDirection(dirsmo103629);
const smo103629 = new VF.Beam([smo101989,smo101990]);
const dirsmo103630 = smo101991.getStemDirection();
smo101991.setStemDirection(dirsmo103630);
smo101992.setStemDirection(dirsmo103630);
const smo103630 = new VF.Beam([smo101991,smo101992]);
 
// formatting measures in staff group smo97609
fmtsmo9921941.format([smo99219v0,smo102006v0], 281);
const stavesmo99219 = new VF.Stave(1548, 789, 295);
stavesmo99219.setAttribute('id', 'stavesmo99219');
stavesmo99219.setBegBarType(VF.Barline.type.NONE);
stavesmo99219.setContext(context);
stavesmo99219.draw();
smo99219v0.draw(context, stavesmo99219);
smo103626.setContext(context);
smo103626.draw();
const stavesmo102006 = new VF.Stave(1548, 930, 295);
stavesmo102006.setAttribute('id', 'stavesmo102006');
stavesmo102006.setBegBarType(VF.Barline.type.NONE);
stavesmo102006.setContext(context);
stavesmo102006.draw();
smo102006v0.draw(context, stavesmo102006);
smo103629.setContext(context);
smo103629.draw();
smo103630.setContext(context);
smo103630.draw();
const rightsmo97609stavesmo992191 = new VF.StaveConnector(stavesmo99219, stavesmo102006).setType(0);
rightsmo97609stavesmo992191.setContext(context).draw();
const fmtsmo9924042 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo99240v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99240v0ar = [];
const smo99220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo99220.setAttribute('id', 'smo99220');
smo99240v0ar.push(smo99220);
const smo99222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99222.setAttribute('id', 'smo99222');
smo99240v0ar.push(smo99222);
const smo99223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo99223.setAttribute('id', 'smo99223');
smo99240v0ar.push(smo99223);
const smo99224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99224.setAttribute('id', 'smo99224');
smo99240v0ar.push(smo99224);
const smo99225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo99225.setAttribute('id', 'smo99225');
smo99240v0ar.push(smo99225);
const smo99226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99226.setAttribute('id', 'smo99226');
smo99240v0ar.push(smo99226);
smo99240v0.addTickables(smo99240v0ar)
fmtsmo9924042.joinVoices([smo99240v0]);
const fmtsmo10202442 = new VF.Formatter();
//
// voices and notes for stave 1 42
const smo102024v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102024v0ar = [];
const smo102007 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo102007.setAttribute('id', 'smo102007');
smo102024v0ar.push(smo102007);
const smo102008 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo102008.setAttribute('id', 'smo102008');
smo102024v0ar.push(smo102008);
const smo102009 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo102009.setAttribute('id', 'smo102009');
smo102024v0ar.push(smo102009);
const smo102010 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
smo102010.setAttribute('id', 'smo102010');
const smo1020101acc = new VF.Accidental('b');
smo102010.addModifier(smo1020101acc, 1);
smo102024v0ar.push(smo102010);
smo102024v0.addTickables(smo102024v0ar)
fmtsmo10202442.joinVoices([smo102024v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103641 = smo99220.getStemDirection();
smo99220.setStemDirection(dirsmo103641);
smo99222.setStemDirection(dirsmo103641);
smo99223.setStemDirection(dirsmo103641);
const smo103641 = new VF.Beam([smo99220,smo99222,smo99223]);
const dirsmo103642 = smo99224.getStemDirection();
smo99224.setStemDirection(dirsmo103642);
smo99225.setStemDirection(dirsmo103642);
smo99226.setStemDirection(dirsmo103642);
const smo103642 = new VF.Beam([smo99224,smo99225,smo99226]);
const dirsmo103645 = smo102007.getStemDirection();
smo102007.setStemDirection(dirsmo103645);
smo102008.setStemDirection(dirsmo103645);
const smo103645 = new VF.Beam([smo102007,smo102008]);
const dirsmo103646 = smo102009.getStemDirection();
smo102009.setStemDirection(dirsmo103646);
smo102010.setStemDirection(dirsmo103646);
const smo103646 = new VF.Beam([smo102009,smo102010]);
 
// formatting measures in staff group smo97609
fmtsmo9924042.format([smo99240v0,smo102024v0], 237);
const stavesmo99240 = new VF.Stave(73, 1148, 295);
stavesmo99240.setAttribute('id', 'stavesmo99240');
stavesmo99240.setBegBarType(1);
stavesmo99240.addClef('treble');
stavesmo99240.setContext(context);
stavesmo99240.draw();
smo99240v0.draw(context, stavesmo99240);
smo103641.setContext(context);
smo103641.draw();
smo103642.setContext(context);
smo103642.draw();
const stavesmo102024 = new VF.Stave(73, 1303, 295);
stavesmo102024.setAttribute('id', 'stavesmo102024');
stavesmo102024.setBegBarType(1);
stavesmo102024.addClef('bass');
stavesmo102024.setContext(context);
stavesmo102024.draw();
smo102024v0.draw(context, stavesmo102024);
smo103645.setContext(context);
smo103645.draw();
smo103646.setContext(context);
smo103646.draw();
const leftsmo97609stavesmo992401 = new VF.StaveConnector(stavesmo99240, stavesmo102024).setType(3);
leftsmo97609stavesmo992401.setContext(context).draw();
const fmtsmo9925843 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo99258v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99258v0ar = [];
const smo99241 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99241.setAttribute('id', 'smo99241');
smo99258v0ar.push(smo99241);
const smo99242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99242.setAttribute('id', 'smo99242');
smo99258v0ar.push(smo99242);
const smo99243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n","an/5/n"]}'))
smo99243.setAttribute('id', 'smo99243');
smo99258v0ar.push(smo99243);
const smo99244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","cn/5/n","gn/5/n"]}'))
smo99244.setAttribute('id', 'smo99244');
smo99258v0ar.push(smo99244);
smo99258v0.addTickables(smo99258v0ar)
fmtsmo9925843.joinVoices([smo99258v0]);
const fmtsmo10204243 = new VF.Formatter();
//
// voices and notes for stave 1 43
const smo102042v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102042v0ar = [];
const smo102025 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo102025.setAttribute('id', 'smo102025');
smo102042v0ar.push(smo102025);
const smo102026 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
smo102026.setAttribute('id', 'smo102026');
smo102042v0ar.push(smo102026);
const smo102027 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
smo102027.setAttribute('id', 'smo102027');
smo102042v0ar.push(smo102027);
const smo102028 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/2/n","eb/3/n"]}'))
smo102028.setAttribute('id', 'smo102028');
const smo1020280acc = new VF.Accidental('b');
smo102028.addModifier(smo1020280acc, 0);
const smo1020281acc = new VF.Accidental('b');
smo102028.addModifier(smo1020281acc, 1);
smo102042v0ar.push(smo102028);
smo102042v0.addTickables(smo102042v0ar)
fmtsmo10204243.joinVoices([smo102042v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103649 = smo99242.getStemDirection();
smo99242.setStemDirection(dirsmo103649);
smo99243.setStemDirection(dirsmo103649);
smo99244.setStemDirection(dirsmo103649);
const smo103649 = new VF.Beam([smo99242,smo99243,smo99244]);
const dirsmo103652 = smo102025.getStemDirection();
smo102025.setStemDirection(dirsmo103652);
smo102026.setStemDirection(dirsmo103652);
const smo103652 = new VF.Beam([smo102025,smo102026]);
const dirsmo103653 = smo102027.getStemDirection();
smo102027.setStemDirection(dirsmo103653);
smo102028.setStemDirection(dirsmo103653);
const smo103653 = new VF.Beam([smo102027,smo102028]);
 
// formatting measures in staff group smo97609
fmtsmo9925843.format([smo99258v0,smo102042v0], 281);
const stavesmo99258 = new VF.Stave(368, 1148, 295);
stavesmo99258.setAttribute('id', 'stavesmo99258');
stavesmo99258.setBegBarType(VF.Barline.type.NONE);
stavesmo99258.setContext(context);
stavesmo99258.draw();
smo99258v0.draw(context, stavesmo99258);
smo103649.setContext(context);
smo103649.draw();
const stavesmo102042 = new VF.Stave(368, 1303, 295);
stavesmo102042.setAttribute('id', 'stavesmo102042');
stavesmo102042.setBegBarType(VF.Barline.type.NONE);
stavesmo102042.setContext(context);
stavesmo102042.draw();
smo102042v0.draw(context, stavesmo102042);
smo103652.setContext(context);
smo103652.draw();
smo103653.setContext(context);
smo103653.draw();
const fmtsmo9928144 = new VF.Formatter();
//
// voices and notes for stave 0 44
const smo99281v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99281v0ar = [];
const smo99259 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","cn/5/n","gb/5/n"]}'))
smo99259.setAttribute('id', 'smo99259');
const smo992590acc = new VF.Accidental('b');
smo99259.addModifier(smo992590acc, 0);
const smo992592acc = new VF.Accidental('b');
smo99259.addModifier(smo992592acc, 2);
smo99281v0ar.push(smo99259);
const smo99261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","an/5/n"]}'))
smo99261.setAttribute('id', 'smo99261');
smo99281v0ar.push(smo99261);
const smo99262 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo99262.setAttribute('id', 'smo99262');
smo99281v0ar.push(smo99262);
const smo99263 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo99263.setAttribute('id', 'smo99263');
smo99281v0ar.push(smo99263);
const smo99264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo99264.setAttribute('id', 'smo99264');
smo99281v0ar.push(smo99264);
const smo99265 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo99265.setAttribute('id', 'smo99265');
smo99281v0ar.push(smo99265);
const smo99266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo99266.setAttribute('id', 'smo99266');
smo99281v0ar.push(smo99266);
const smo99267 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","an/5/n"]}'))
smo99267.setAttribute('id', 'smo99267');
smo99281v0ar.push(smo99267);
smo99281v0.addTickables(smo99281v0ar)
fmtsmo9928144.joinVoices([smo99281v0]);
const fmtsmo10206044 = new VF.Formatter();
//
// voices and notes for stave 1 44
const smo102060v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102060v0ar = [];
const smo102043 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo102043.setAttribute('id', 'smo102043');
smo102060v0ar.push(smo102043);
const smo102044 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","gb/3/n","an/3/n","cn/4/n"]}'))
smo102044.setAttribute('id', 'smo102044');
const smo1020441acc = new VF.Accidental('b');
smo102044.addModifier(smo1020441acc, 1);
smo102060v0ar.push(smo102044);
const smo102045 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo102045.setAttribute('id', 'smo102045');
smo102060v0ar.push(smo102045);
const smo102046 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","an/3/n","cn/4/n"]}'))
smo102046.setAttribute('id', 'smo102046');
smo102060v0ar.push(smo102046);
smo102060v0.addTickables(smo102060v0ar)
fmtsmo10206044.joinVoices([smo102060v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103656 = smo99259.getStemDirection();
smo99259.setStemDirection(dirsmo103656);
smo99261.setStemDirection(dirsmo103656);
smo99262.setStemDirection(dirsmo103656);
smo99263.setStemDirection(dirsmo103656);
const smo103656 = new VF.Beam([smo99259,smo99261,smo99262,smo99263]);
const dirsmo103657 = smo99264.getStemDirection();
smo99264.setStemDirection(dirsmo103657);
smo99265.setStemDirection(dirsmo103657);
smo99266.setStemDirection(dirsmo103657);
smo99267.setStemDirection(dirsmo103657);
const smo103657 = new VF.Beam([smo99264,smo99265,smo99266,smo99267]);
const dirsmo103660 = smo102043.getStemDirection();
smo102043.setStemDirection(dirsmo103660);
smo102044.setStemDirection(dirsmo103660);
const smo103660 = new VF.Beam([smo102043,smo102044]);
const dirsmo103661 = smo102045.getStemDirection();
smo102045.setStemDirection(dirsmo103661);
smo102046.setStemDirection(dirsmo103661);
const smo103661 = new VF.Beam([smo102045,smo102046]);
 
// formatting measures in staff group smo97609
fmtsmo9928144.format([smo99281v0,smo102060v0], 281);
const stavesmo99281 = new VF.Stave(663, 1148, 295);
stavesmo99281.setAttribute('id', 'stavesmo99281');
stavesmo99281.setBegBarType(VF.Barline.type.NONE);
stavesmo99281.setContext(context);
stavesmo99281.draw();
smo99281v0.draw(context, stavesmo99281);
smo103656.setContext(context);
smo103656.draw();
smo103657.setContext(context);
smo103657.draw();
const stavesmo102060 = new VF.Stave(663, 1303, 295);
stavesmo102060.setAttribute('id', 'stavesmo102060');
stavesmo102060.setBegBarType(VF.Barline.type.NONE);
stavesmo102060.setContext(context);
stavesmo102060.draw();
smo102060v0.draw(context, stavesmo102060);
smo103660.setContext(context);
smo103660.draw();
smo103661.setContext(context);
smo103661.draw();
const fmtsmo9929945 = new VF.Formatter();
//
// voices and notes for stave 0 45
const smo99299v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99299v0ar = [];
const smo99282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo99282.setAttribute('id', 'smo99282');
smo99299v0ar.push(smo99282);
const smo99283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo99283.setAttribute('id', 'smo99283');
smo99299v0ar.push(smo99283);
const smo99284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo99284.setAttribute('id', 'smo99284');
smo99299v0ar.push(smo99284);
const smo99285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo99285.setAttribute('id', 'smo99285');
const smo992850acc = new VF.Accidental('b');
smo99285.addModifier(smo992850acc, 0);
smo99299v0ar.push(smo99285);
smo99299v0.addTickables(smo99299v0ar)
fmtsmo9929945.joinVoices([smo99299v0]);
const fmtsmo10207845 = new VF.Formatter();
//
// voices and notes for stave 1 45
const smo102078v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102078v0ar = [];
const smo102061 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo102061.setAttribute('id', 'smo102061');
smo102078v0ar.push(smo102061);
const smo102062 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo102062.setAttribute('id', 'smo102062');
smo102078v0ar.push(smo102062);
const smo102063 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
smo102063.setAttribute('id', 'smo102063');
smo102078v0ar.push(smo102063);
const smo102064 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n","bn/3/n"]}'))
smo102064.setAttribute('id', 'smo102064');
smo102078v0ar.push(smo102064);
smo102078v0.addTickables(smo102078v0ar)
fmtsmo10207845.joinVoices([smo102078v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103664 = smo99283.getStemDirection();
smo99283.setStemDirection(dirsmo103664);
smo99284.setStemDirection(dirsmo103664);
smo99285.setStemDirection(dirsmo103664);
const smo103664 = new VF.Beam([smo99283,smo99284,smo99285]);
const dirsmo103667 = smo102061.getStemDirection();
smo102061.setStemDirection(dirsmo103667);
smo102062.setStemDirection(dirsmo103667);
const smo103667 = new VF.Beam([smo102061,smo102062]);
const dirsmo103668 = smo102063.getStemDirection();
smo102063.setStemDirection(dirsmo103668);
smo102064.setStemDirection(dirsmo103668);
const smo103668 = new VF.Beam([smo102063,smo102064]);
 
// formatting measures in staff group smo97609
fmtsmo9929945.format([smo99299v0,smo102078v0], 281);
const stavesmo99299 = new VF.Stave(958, 1148, 295);
stavesmo99299.setAttribute('id', 'stavesmo99299');
stavesmo99299.setBegBarType(VF.Barline.type.NONE);
stavesmo99299.setContext(context);
stavesmo99299.draw();
smo99299v0.draw(context, stavesmo99299);
smo103664.setContext(context);
smo103664.draw();
const stavesmo102078 = new VF.Stave(958, 1303, 295);
stavesmo102078.setAttribute('id', 'stavesmo102078');
stavesmo102078.setBegBarType(VF.Barline.type.NONE);
stavesmo102078.setContext(context);
stavesmo102078.draw();
smo102078v0.draw(context, stavesmo102078);
smo103667.setContext(context);
smo103667.draw();
smo103668.setContext(context);
smo103668.draw();
const fmtsmo9932046 = new VF.Formatter();
//
// voices and notes for stave 0 46
const smo99320v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99320v0ar = [];
const smo99300 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo99300.setAttribute('id', 'smo99300');
smo99320v0ar.push(smo99300);
const smo99302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99302.setAttribute('id', 'smo99302');
smo99320v0ar.push(smo99302);
const smo99303 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo99303.setAttribute('id', 'smo99303');
smo99320v0ar.push(smo99303);
const smo99304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99304.setAttribute('id', 'smo99304');
smo99320v0ar.push(smo99304);
const smo99305 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo99305.setAttribute('id', 'smo99305');
smo99320v0ar.push(smo99305);
const smo99306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99306.setAttribute('id', 'smo99306');
smo99320v0ar.push(smo99306);
smo99320v0.addTickables(smo99320v0ar)
fmtsmo9932046.joinVoices([smo99320v0]);
const fmtsmo10209646 = new VF.Formatter();
//
// voices and notes for stave 1 46
const smo102096v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102096v0ar = [];
const smo102079 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo102079.setAttribute('id', 'smo102079');
smo102096v0ar.push(smo102079);
const smo102080 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo102080.setAttribute('id', 'smo102080');
smo102096v0ar.push(smo102080);
const smo102081 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo102081.setAttribute('id', 'smo102081');
smo102096v0ar.push(smo102081);
const smo102082 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
smo102082.setAttribute('id', 'smo102082');
const smo1020821acc = new VF.Accidental('b');
smo102082.addModifier(smo1020821acc, 1);
smo102096v0ar.push(smo102082);
smo102096v0.addTickables(smo102096v0ar)
fmtsmo10209646.joinVoices([smo102096v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103671 = smo99300.getStemDirection();
smo99300.setStemDirection(dirsmo103671);
smo99302.setStemDirection(dirsmo103671);
smo99303.setStemDirection(dirsmo103671);
const smo103671 = new VF.Beam([smo99300,smo99302,smo99303]);
const dirsmo103672 = smo99304.getStemDirection();
smo99304.setStemDirection(dirsmo103672);
smo99305.setStemDirection(dirsmo103672);
smo99306.setStemDirection(dirsmo103672);
const smo103672 = new VF.Beam([smo99304,smo99305,smo99306]);
const dirsmo103675 = smo102079.getStemDirection();
smo102079.setStemDirection(dirsmo103675);
smo102080.setStemDirection(dirsmo103675);
const smo103675 = new VF.Beam([smo102079,smo102080]);
const dirsmo103676 = smo102081.getStemDirection();
smo102081.setStemDirection(dirsmo103676);
smo102082.setStemDirection(dirsmo103676);
const smo103676 = new VF.Beam([smo102081,smo102082]);
 
// formatting measures in staff group smo97609
fmtsmo9932046.format([smo99320v0,smo102096v0], 281);
const stavesmo99320 = new VF.Stave(1253, 1148, 295);
stavesmo99320.setAttribute('id', 'stavesmo99320');
stavesmo99320.setBegBarType(VF.Barline.type.NONE);
stavesmo99320.setContext(context);
stavesmo99320.draw();
smo99320v0.draw(context, stavesmo99320);
smo103671.setContext(context);
smo103671.draw();
smo103672.setContext(context);
smo103672.draw();
const stavesmo102096 = new VF.Stave(1253, 1303, 295);
stavesmo102096.setAttribute('id', 'stavesmo102096');
stavesmo102096.setBegBarType(VF.Barline.type.NONE);
stavesmo102096.setContext(context);
stavesmo102096.draw();
smo102096v0.draw(context, stavesmo102096);
smo103675.setContext(context);
smo103675.draw();
smo103676.setContext(context);
smo103676.draw();
const fmtsmo9933947 = new VF.Formatter();
//
// voices and notes for stave 0 47
const smo99339v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99339v0ar = [];
const smo99321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99321.setAttribute('id', 'smo99321');
smo99339v0ar.push(smo99321);
const smo99322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99322.setAttribute('id', 'smo99322');
smo99339v0ar.push(smo99322);
const smo99323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo99323.setAttribute('id', 'smo99323');
smo99339v0ar.push(smo99323);
const smo99324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo99324.setAttribute('id', 'smo99324');
smo99339v0ar.push(smo99324);
const smo99325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n","gb/5/n","eb/6/n"]}'))
smo99325.setAttribute('id', 'smo99325');
const smo993250acc = new VF.Accidental('b');
smo99325.addModifier(smo993250acc, 0);
const smo993251acc = new VF.Accidental('b');
smo99325.addModifier(smo993251acc, 1);
const smo993252acc = new VF.Accidental('b');
smo99325.addModifier(smo993252acc, 2);
smo99339v0ar.push(smo99325);
smo99339v0.addTickables(smo99339v0ar)
fmtsmo9933947.joinVoices([smo99339v0]);
const fmtsmo10211447 = new VF.Formatter();
//
// voices and notes for stave 1 47
const smo102114v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102114v0ar = [];
const smo102097 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo102097.setAttribute('id', 'smo102097');
smo102114v0ar.push(smo102097);
const smo102098 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
smo102098.setAttribute('id', 'smo102098');
smo102114v0ar.push(smo102098);
const smo102099 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
smo102099.setAttribute('id', 'smo102099');
smo102114v0ar.push(smo102099);
const smo102100 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n"]}'))
smo102100.setAttribute('id', 'smo102100');
smo102114v0ar.push(smo102100);
smo102114v0.addTickables(smo102114v0ar)
fmtsmo10211447.joinVoices([smo102114v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103679 = smo99322.getStemDirection();
smo99322.setStemDirection(dirsmo103679);
smo99323.setStemDirection(dirsmo103679);
smo99324.setStemDirection(dirsmo103679);
smo99325.setStemDirection(dirsmo103679);
const smo103679 = new VF.Beam([smo99322,smo99323,smo99324,smo99325]);
const dirsmo103682 = smo102097.getStemDirection();
smo102097.setStemDirection(dirsmo103682);
smo102098.setStemDirection(dirsmo103682);
const smo103682 = new VF.Beam([smo102097,smo102098]);
const dirsmo103683 = smo102099.getStemDirection();
smo102099.setStemDirection(dirsmo103683);
smo102100.setStemDirection(dirsmo103683);
const smo103683 = new VF.Beam([smo102099,smo102100]);
 
// formatting measures in staff group smo97609
fmtsmo9933947.format([smo99339v0,smo102114v0], 281);
const stavesmo99339 = new VF.Stave(1548, 1148, 295);
stavesmo99339.setAttribute('id', 'stavesmo99339');
stavesmo99339.setBegBarType(VF.Barline.type.NONE);
stavesmo99339.setContext(context);
stavesmo99339.draw();
smo99339v0.draw(context, stavesmo99339);
smo103679.setContext(context);
smo103679.draw();
const stavesmo102114 = new VF.Stave(1548, 1303, 295);
stavesmo102114.setAttribute('id', 'stavesmo102114');
stavesmo102114.setBegBarType(VF.Barline.type.NONE);
stavesmo102114.setContext(context);
stavesmo102114.draw();
smo102114v0.draw(context, stavesmo102114);
smo103682.setContext(context);
smo103682.draw();
smo103683.setContext(context);
smo103683.draw();
const rightsmo97609stavesmo993391 = new VF.StaveConnector(stavesmo99339, stavesmo102114).setType(0);
rightsmo97609stavesmo993391.setContext(context).draw();
const fmtsmo9936148 = new VF.Formatter();
//
// voices and notes for stave 0 48
const smo99361v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99361v0ar = [];
const smo99340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo99340.setAttribute('id', 'smo99340');
smo99361v0ar.push(smo99340);
const smo99342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo99342.setAttribute('id', 'smo99342');
smo99361v0ar.push(smo99342);
const smo99343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo99343.setAttribute('id', 'smo99343');
smo99361v0ar.push(smo99343);
const smo99344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo99344.setAttribute('id', 'smo99344');
smo99361v0ar.push(smo99344);
const smo99345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo99345.setAttribute('id', 'smo99345');
smo99361v0ar.push(smo99345);
const smo99346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
smo99346.setAttribute('id', 'smo99346');
smo99361v0ar.push(smo99346);
const smo99347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo99347.setAttribute('id', 'smo99347');
smo99361v0ar.push(smo99347);
smo99361v0.addTickables(smo99361v0ar)
fmtsmo9936148.joinVoices([smo99361v0]);
const fmtsmo10213248 = new VF.Formatter();
//
// voices and notes for stave 1 48
const smo102132v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102132v0ar = [];
const smo102115 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo102115.setAttribute('id', 'smo102115');
smo102132v0ar.push(smo102115);
const smo102116 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo102116.setAttribute('id', 'smo102116');
smo102132v0ar.push(smo102116);
const smo102117 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo102117.setAttribute('id', 'smo102117');
smo102132v0ar.push(smo102117);
const smo102118 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo102118.setAttribute('id', 'smo102118');
smo102132v0ar.push(smo102118);
smo102132v0.addTickables(smo102132v0ar)
fmtsmo10213248.joinVoices([smo102132v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103694 = smo99340.getStemDirection();
smo99340.setStemDirection(dirsmo103694);
smo99342.setStemDirection(dirsmo103694);
smo99343.setStemDirection(dirsmo103694);
smo99344.setStemDirection(dirsmo103694);
const smo103694 = new VF.Beam([smo99340,smo99342,smo99343,smo99344]);
const dirsmo103695 = smo99345.getStemDirection();
smo99345.setStemDirection(dirsmo103695);
smo99346.setStemDirection(dirsmo103695);
smo99347.setStemDirection(dirsmo103695);
const smo103695 = new VF.Beam([smo99345,smo99346,smo99347]);
const dirsmo103698 = smo102115.getStemDirection();
smo102115.setStemDirection(dirsmo103698);
smo102116.setStemDirection(dirsmo103698);
const smo103698 = new VF.Beam([smo102115,smo102116]);
const dirsmo103699 = smo102117.getStemDirection();
smo102117.setStemDirection(dirsmo103699);
smo102118.setStemDirection(dirsmo103699);
const smo103699 = new VF.Beam([smo102117,smo102118]);
 
// formatting measures in staff group smo97609
fmtsmo9936148.format([smo99361v0,smo102132v0], 237);
const stavesmo99361 = new VF.Stave(73, 1501, 295);
stavesmo99361.setAttribute('id', 'stavesmo99361');
stavesmo99361.setBegBarType(1);
stavesmo99361.addClef('treble');
stavesmo99361.setContext(context);
stavesmo99361.draw();
smo99361v0.draw(context, stavesmo99361);
smo103694.setContext(context);
smo103694.draw();
smo103695.setContext(context);
smo103695.draw();
const stavesmo102132 = new VF.Stave(73, 1657, 295);
stavesmo102132.setAttribute('id', 'stavesmo102132');
stavesmo102132.setBegBarType(1);
stavesmo102132.addClef('bass');
stavesmo102132.setContext(context);
stavesmo102132.draw();
smo102132v0.draw(context, stavesmo102132);
smo103698.setContext(context);
smo103698.draw();
smo103699.setContext(context);
smo103699.draw();
const leftsmo97609stavesmo993611 = new VF.StaveConnector(stavesmo99361, stavesmo102132).setType(3);
leftsmo97609stavesmo993611.setContext(context).draw();
const fmtsmo9937949 = new VF.Formatter();
//
// voices and notes for stave 0 49
const smo99379v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99379v0ar = [];
const smo99362 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo99362.setAttribute('id', 'smo99362');
smo99379v0ar.push(smo99362);
const smo99363 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo99363.setAttribute('id', 'smo99363');
smo99379v0ar.push(smo99363);
const smo99364 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo99364.setAttribute('id', 'smo99364');
smo99379v0ar.push(smo99364);
const smo99365 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo99365.setAttribute('id', 'smo99365');
smo99379v0ar.push(smo99365);
smo99379v0.addTickables(smo99379v0ar)
fmtsmo9937949.joinVoices([smo99379v0]);
const fmtsmo10215049 = new VF.Formatter();
//
// voices and notes for stave 1 49
const smo102150v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102150v0ar = [];
const smo102133 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo102133.setAttribute('id', 'smo102133');
smo102150v0ar.push(smo102133);
const smo102134 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo102134.setAttribute('id', 'smo102134');
smo102150v0ar.push(smo102134);
const smo102135 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo102135.setAttribute('id', 'smo102135');
smo102150v0ar.push(smo102135);
const smo102136 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo102136.setAttribute('id', 'smo102136');
smo102150v0ar.push(smo102136);
smo102150v0.addTickables(smo102150v0ar)
fmtsmo10215049.joinVoices([smo102150v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103702 = smo99363.getStemDirection();
smo99363.setStemDirection(dirsmo103702);
smo99364.setStemDirection(dirsmo103702);
smo99365.setStemDirection(dirsmo103702);
const smo103702 = new VF.Beam([smo99363,smo99364,smo99365]);
const dirsmo103705 = smo102133.getStemDirection();
smo102133.setStemDirection(dirsmo103705);
smo102134.setStemDirection(dirsmo103705);
const smo103705 = new VF.Beam([smo102133,smo102134]);
 
// formatting measures in staff group smo97609
fmtsmo9937949.format([smo99379v0,smo102150v0], 281);
const stavesmo99379 = new VF.Stave(368, 1501, 295);
stavesmo99379.setAttribute('id', 'stavesmo99379');
stavesmo99379.setBegBarType(VF.Barline.type.NONE);
stavesmo99379.setContext(context);
stavesmo99379.draw();
smo99379v0.draw(context, stavesmo99379);
smo103702.setContext(context);
smo103702.draw();
const stavesmo102150 = new VF.Stave(368, 1657, 295);
stavesmo102150.setAttribute('id', 'stavesmo102150');
stavesmo102150.setBegBarType(VF.Barline.type.NONE);
stavesmo102150.setContext(context);
stavesmo102150.draw();
smo102150v0.draw(context, stavesmo102150);
smo103705.setContext(context);
smo103705.draw();
const fmtsmo9940150 = new VF.Formatter();
//
// voices and notes for stave 0 50
const smo99401v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99401v0ar = [];
const smo99380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo99380.setAttribute('id', 'smo99380');
smo99401v0ar.push(smo99380);
const smo99381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo99381.setAttribute('id', 'smo99381');
smo99401v0ar.push(smo99381);
const smo99382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo99382.setAttribute('id', 'smo99382');
smo99401v0ar.push(smo99382);
const smo99383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo99383.setAttribute('id', 'smo99383');
smo99401v0ar.push(smo99383);
const smo99384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo99384.setAttribute('id', 'smo99384');
smo99401v0ar.push(smo99384);
const smo99385 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo99385.setAttribute('id', 'smo99385');
smo99401v0ar.push(smo99385);
const smo99386 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo99386.setAttribute('id', 'smo99386');
smo99401v0ar.push(smo99386);
const smo99387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo99387.setAttribute('id', 'smo99387');
smo99401v0ar.push(smo99387);
smo99401v0.addTickables(smo99401v0ar)
fmtsmo9940150.joinVoices([smo99401v0]);
const fmtsmo10216850 = new VF.Formatter();
//
// voices and notes for stave 1 50
const smo102168v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102168v0ar = [];
const smo102151 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo102151.setAttribute('id', 'smo102151');
smo102168v0ar.push(smo102151);
const smo102152 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo102152.setAttribute('id', 'smo102152');
smo102168v0ar.push(smo102152);
const smo102153 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo102153.setAttribute('id', 'smo102153');
const smo1021530acc = new VF.Accidental('b');
smo102153.addModifier(smo1021530acc, 0);
const smo1021531acc = new VF.Accidental('b');
smo102153.addModifier(smo1021531acc, 1);
smo102168v0ar.push(smo102153);
const smo102154 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo102154.setAttribute('id', 'smo102154');
smo102168v0ar.push(smo102154);
smo102168v0.addTickables(smo102168v0ar)
fmtsmo10216850.joinVoices([smo102168v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103708 = smo99380.getStemDirection();
smo99380.setStemDirection(dirsmo103708);
smo99381.setStemDirection(dirsmo103708);
smo99382.setStemDirection(dirsmo103708);
smo99383.setStemDirection(dirsmo103708);
const smo103708 = new VF.Beam([smo99380,smo99381,smo99382,smo99383]);
const dirsmo103709 = smo99384.getStemDirection();
smo99384.setStemDirection(dirsmo103709);
smo99385.setStemDirection(dirsmo103709);
smo99386.setStemDirection(dirsmo103709);
smo99387.setStemDirection(dirsmo103709);
const smo103709 = new VF.Beam([smo99384,smo99385,smo99386,smo99387]);
const dirsmo103712 = smo102151.getStemDirection();
smo102151.setStemDirection(dirsmo103712);
smo102152.setStemDirection(dirsmo103712);
const smo103712 = new VF.Beam([smo102151,smo102152]);
const dirsmo103713 = smo102153.getStemDirection();
smo102153.setStemDirection(dirsmo103713);
smo102154.setStemDirection(dirsmo103713);
const smo103713 = new VF.Beam([smo102153,smo102154]);
 
// formatting measures in staff group smo97609
fmtsmo9940150.format([smo99401v0,smo102168v0], 281);
const stavesmo99401 = new VF.Stave(663, 1501, 295);
stavesmo99401.setAttribute('id', 'stavesmo99401');
stavesmo99401.setBegBarType(VF.Barline.type.NONE);
stavesmo99401.setContext(context);
stavesmo99401.draw();
smo99401v0.draw(context, stavesmo99401);
smo103708.setContext(context);
smo103708.draw();
smo103709.setContext(context);
smo103709.draw();
const stavesmo102168 = new VF.Stave(663, 1657, 295);
stavesmo102168.setAttribute('id', 'stavesmo102168');
stavesmo102168.setBegBarType(VF.Barline.type.NONE);
stavesmo102168.setContext(context);
stavesmo102168.draw();
smo102168v0.draw(context, stavesmo102168);
smo103712.setContext(context);
smo103712.draw();
smo103713.setContext(context);
smo103713.draw();
const fmtsmo9942351 = new VF.Formatter();
//
// voices and notes for stave 0 51
const smo99423v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99423v0ar = [];
const smo99402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo99402.setAttribute('id', 'smo99402');
smo99423v0ar.push(smo99402);
const smo99403 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo99403.setAttribute('id', 'smo99403');
smo99423v0ar.push(smo99403);
const smo99404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo99404.setAttribute('id', 'smo99404');
smo99423v0ar.push(smo99404);
const smo99405 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo99405.setAttribute('id', 'smo99405');
smo99423v0ar.push(smo99405);
const smo99406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo99406.setAttribute('id', 'smo99406');
smo99423v0ar.push(smo99406);
const smo99407 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo99407.setAttribute('id', 'smo99407');
smo99423v0ar.push(smo99407);
const smo99408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo99408.setAttribute('id', 'smo99408');
smo99423v0ar.push(smo99408);
const smo99409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo99409.setAttribute('id', 'smo99409');
smo99423v0ar.push(smo99409);
smo99423v0.addTickables(smo99423v0ar)
fmtsmo9942351.joinVoices([smo99423v0]);
const fmtsmo10218651 = new VF.Formatter();
//
// voices and notes for stave 1 51
const smo102186v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102186v0ar = [];
const smo102169 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
smo102169.setAttribute('id', 'smo102169');
smo102186v0ar.push(smo102169);
const smo102170 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo102170.setAttribute('id', 'smo102170');
smo102186v0ar.push(smo102170);
const smo102171 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/2/n","ab/3/n"]}'))
smo102171.setAttribute('id', 'smo102171');
const smo1021710acc = new VF.Accidental('b');
smo102171.addModifier(smo1021710acc, 0);
const smo1021711acc = new VF.Accidental('b');
smo102171.addModifier(smo1021711acc, 1);
smo102186v0ar.push(smo102171);
const smo102172 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo102172.setAttribute('id', 'smo102172');
smo102186v0ar.push(smo102172);
smo102186v0.addTickables(smo102186v0ar)
fmtsmo10218651.joinVoices([smo102186v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103716 = smo99402.getStemDirection();
smo99402.setStemDirection(dirsmo103716);
smo99403.setStemDirection(dirsmo103716);
smo99404.setStemDirection(dirsmo103716);
smo99405.setStemDirection(dirsmo103716);
const smo103716 = new VF.Beam([smo99402,smo99403,smo99404,smo99405]);
const dirsmo103717 = smo99406.getStemDirection();
smo99406.setStemDirection(dirsmo103717);
smo99407.setStemDirection(dirsmo103717);
smo99408.setStemDirection(dirsmo103717);
smo99409.setStemDirection(dirsmo103717);
const smo103717 = new VF.Beam([smo99406,smo99407,smo99408,smo99409]);
const dirsmo103720 = smo102169.getStemDirection();
smo102169.setStemDirection(dirsmo103720);
smo102170.setStemDirection(dirsmo103720);
const smo103720 = new VF.Beam([smo102169,smo102170]);
const dirsmo103721 = smo102171.getStemDirection();
smo102171.setStemDirection(dirsmo103721);
smo102172.setStemDirection(dirsmo103721);
const smo103721 = new VF.Beam([smo102171,smo102172]);
 
// formatting measures in staff group smo97609
fmtsmo9942351.format([smo99423v0,smo102186v0], 281);
const stavesmo99423 = new VF.Stave(958, 1501, 295);
stavesmo99423.setAttribute('id', 'stavesmo99423');
stavesmo99423.setBegBarType(VF.Barline.type.NONE);
stavesmo99423.setContext(context);
stavesmo99423.draw();
smo99423v0.draw(context, stavesmo99423);
smo103716.setContext(context);
smo103716.draw();
smo103717.setContext(context);
smo103717.draw();
const stavesmo102186 = new VF.Stave(958, 1657, 295);
stavesmo102186.setAttribute('id', 'stavesmo102186');
stavesmo102186.setBegBarType(VF.Barline.type.NONE);
stavesmo102186.setContext(context);
stavesmo102186.draw();
smo102186v0.draw(context, stavesmo102186);
smo103720.setContext(context);
smo103720.draw();
smo103721.setContext(context);
smo103721.draw();
const fmtsmo9944452 = new VF.Formatter();
//
// voices and notes for stave 0 52
const smo99444v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99444v0ar = [];
const smo99424 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo99424.setAttribute('id', 'smo99424');
smo99444v0ar.push(smo99424);
const smo99425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo99425.setAttribute('id', 'smo99425');
smo99444v0ar.push(smo99425);
const smo99426 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo99426.setAttribute('id', 'smo99426');
smo99444v0ar.push(smo99426);
const smo99427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo99427.setAttribute('id', 'smo99427');
smo99444v0ar.push(smo99427);
const smo99428 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo99428.setAttribute('id', 'smo99428');
smo99444v0ar.push(smo99428);
const smo99429 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
smo99429.setAttribute('id', 'smo99429');
smo99444v0ar.push(smo99429);
const smo99430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo99430.setAttribute('id', 'smo99430');
smo99444v0ar.push(smo99430);
smo99444v0.addTickables(smo99444v0ar)
fmtsmo9944452.joinVoices([smo99444v0]);
const fmtsmo10220452 = new VF.Formatter();
//
// voices and notes for stave 1 52
const smo102204v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102204v0ar = [];
const smo102187 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo102187.setAttribute('id', 'smo102187');
smo102204v0ar.push(smo102187);
const smo102188 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo102188.setAttribute('id', 'smo102188');
smo102204v0ar.push(smo102188);
const smo102189 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo102189.setAttribute('id', 'smo102189');
smo102204v0ar.push(smo102189);
const smo102190 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo102190.setAttribute('id', 'smo102190');
smo102204v0ar.push(smo102190);
smo102204v0.addTickables(smo102204v0ar)
fmtsmo10220452.joinVoices([smo102204v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103724 = smo99424.getStemDirection();
smo99424.setStemDirection(dirsmo103724);
smo99425.setStemDirection(dirsmo103724);
smo99426.setStemDirection(dirsmo103724);
smo99427.setStemDirection(dirsmo103724);
const smo103724 = new VF.Beam([smo99424,smo99425,smo99426,smo99427]);
const dirsmo103725 = smo99428.getStemDirection();
smo99428.setStemDirection(dirsmo103725);
smo99429.setStemDirection(dirsmo103725);
smo99430.setStemDirection(dirsmo103725);
const smo103725 = new VF.Beam([smo99428,smo99429,smo99430]);
const dirsmo103728 = smo102187.getStemDirection();
smo102187.setStemDirection(dirsmo103728);
smo102188.setStemDirection(dirsmo103728);
const smo103728 = new VF.Beam([smo102187,smo102188]);
const dirsmo103729 = smo102189.getStemDirection();
smo102189.setStemDirection(dirsmo103729);
smo102190.setStemDirection(dirsmo103729);
const smo103729 = new VF.Beam([smo102189,smo102190]);
 
// formatting measures in staff group smo97609
fmtsmo9944452.format([smo99444v0,smo102204v0], 281);
const stavesmo99444 = new VF.Stave(1253, 1501, 295);
stavesmo99444.setAttribute('id', 'stavesmo99444');
stavesmo99444.setBegBarType(VF.Barline.type.NONE);
stavesmo99444.setContext(context);
stavesmo99444.draw();
smo99444v0.draw(context, stavesmo99444);
smo103724.setContext(context);
smo103724.draw();
smo103725.setContext(context);
smo103725.draw();
const stavesmo102204 = new VF.Stave(1253, 1657, 295);
stavesmo102204.setAttribute('id', 'stavesmo102204');
stavesmo102204.setBegBarType(VF.Barline.type.NONE);
stavesmo102204.setContext(context);
stavesmo102204.draw();
smo102204v0.draw(context, stavesmo102204);
smo103728.setContext(context);
smo103728.draw();
smo103729.setContext(context);
smo103729.draw();
const fmtsmo9946153 = new VF.Formatter();
//
// voices and notes for stave 0 53
const smo99461v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99461v0ar = [];
const smo99445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo99445.setAttribute('id', 'smo99445');
smo99461v0ar.push(smo99445);
const smo99446 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo99446.setAttribute('id', 'smo99446');
smo99461v0ar.push(smo99446);
const smo99447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo99447.setAttribute('id', 'smo99447');
smo99461v0ar.push(smo99447);
smo99461v0.addTickables(smo99461v0ar)
fmtsmo9946153.joinVoices([smo99461v0]);
const fmtsmo10222253 = new VF.Formatter();
//
// voices and notes for stave 1 53
const smo102222v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102222v0ar = [];
const smo102205 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","gn/3/n","cn/4/n"]}'))
smo102205.setAttribute('id', 'smo102205');
smo102222v0ar.push(smo102205);
const smo102206 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo102206.setAttribute('id', 'smo102206');
smo102222v0ar.push(smo102206);
const smo102207 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo102207.setAttribute('id', 'smo102207');
smo102222v0ar.push(smo102207);
const smo102208 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo102208.setAttribute('id', 'smo102208');
smo102222v0ar.push(smo102208);
smo102222v0.addTickables(smo102222v0ar)
fmtsmo10222253.joinVoices([smo102222v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103734 = smo102205.getStemDirection();
smo102205.setStemDirection(dirsmo103734);
smo102206.setStemDirection(dirsmo103734);
const smo103734 = new VF.Beam([smo102205,smo102206]);
 
// formatting measures in staff group smo97609
fmtsmo9946153.format([smo99461v0,smo102222v0], 281);
const stavesmo99461 = new VF.Stave(1548, 1501, 295);
stavesmo99461.setAttribute('id', 'stavesmo99461');
stavesmo99461.setBegBarType(VF.Barline.type.NONE);
stavesmo99461.setContext(context);
stavesmo99461.draw();
smo99461v0.draw(context, stavesmo99461);
const stavesmo102222 = new VF.Stave(1548, 1657, 295);
stavesmo102222.setAttribute('id', 'stavesmo102222');
stavesmo102222.setBegBarType(VF.Barline.type.NONE);
stavesmo102222.setContext(context);
stavesmo102222.draw();
smo102222v0.draw(context, stavesmo102222);
smo103734.setContext(context);
smo103734.draw();
const rightsmo97609stavesmo994611 = new VF.StaveConnector(stavesmo99461, stavesmo102222).setType(0);
rightsmo97609stavesmo994611.setContext(context).draw();
const fmtsmo9948154 = new VF.Formatter();
//
// voices and notes for stave 0 54
const smo99481v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99481v0ar = [];
const smo99462 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n"]}'))
smo99462.setAttribute('id', 'smo99462');
smo99481v0ar.push(smo99462);
const smo99464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/5/n"]}'))
smo99464.setAttribute('id', 'smo99464');
const smo994640acc = new VF.Accidental('b');
smo99464.addModifier(smo994640acc, 0);
smo99481v0ar.push(smo99464);
const smo99465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n"]}'))
smo99465.setAttribute('id', 'smo99465');
const smo994651acc = new VF.Accidental('n');
smo99465.addModifier(smo994651acc, 1);
smo99481v0ar.push(smo99465);
const smo99466 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n"]}'))
smo99466.setAttribute('id', 'smo99466');
smo99481v0ar.push(smo99466);
const smo99467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n","cn/6/n"]}'))
smo99467.setAttribute('id', 'smo99467');
smo99481v0ar.push(smo99467);
smo99481v0.addTickables(smo99481v0ar)
fmtsmo9948154.joinVoices([smo99481v0]);
const fmtsmo10224054 = new VF.Formatter();
//
// voices and notes for stave 1 54
const smo102240v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102240v0ar = [];
const smo102223 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo102223.setAttribute('id', 'smo102223');
smo102240v0ar.push(smo102223);
const smo102224 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo102224.setAttribute('id', 'smo102224');
smo102240v0ar.push(smo102224);
const smo102225 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo102225.setAttribute('id', 'smo102225');
smo102240v0ar.push(smo102225);
const smo102226 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo102226.setAttribute('id', 'smo102226');
smo102240v0ar.push(smo102226);
smo102240v0.addTickables(smo102240v0ar)
fmtsmo10224054.joinVoices([smo102240v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103743 = smo99462.getStemDirection();
smo99462.setStemDirection(dirsmo103743);
smo99464.setStemDirection(dirsmo103743);
smo99465.setStemDirection(dirsmo103743);
const smo103743 = new VF.Beam([smo99462,smo99464,smo99465]);
const dirsmo103744 = smo99466.getStemDirection();
smo99466.setStemDirection(dirsmo103744);
smo99467.setStemDirection(dirsmo103744);
const smo103744 = new VF.Beam([smo99466,smo99467]);
const dirsmo103746 = smo102223.getStemDirection();
smo102223.setStemDirection(dirsmo103746);
smo102224.setStemDirection(dirsmo103746);
const smo103746 = new VF.Beam([smo102223,smo102224]);
const dirsmo103747 = smo102225.getStemDirection();
smo102225.setStemDirection(dirsmo103747);
smo102226.setStemDirection(dirsmo103747);
const smo103747 = new VF.Beam([smo102225,smo102226]);
 
// formatting measures in staff group smo97609
fmtsmo9948154.format([smo99481v0,smo102240v0], 195);
const stavesmo99481 = new VF.Stave(73, 1835, 295);
stavesmo99481.setAttribute('id', 'stavesmo99481');
stavesmo99481.setBegBarType(4);
stavesmo99481.addClef('treble');
const keysmo99481 = new VF.KeySignature('Bb');
keysmo99481.cancelKey('C');
keysmo99481.addToStave(stavesmo99481);
stavesmo99481.setContext(context);
stavesmo99481.draw();
smo99481v0.draw(context, stavesmo99481);
smo103743.setContext(context);
smo103743.draw();
smo103744.setContext(context);
smo103744.draw();
const stavesmo102240 = new VF.Stave(73, 2000, 295);
stavesmo102240.setAttribute('id', 'stavesmo102240');
stavesmo102240.setBegBarType(4);
stavesmo102240.addClef('bass');
const keysmo102240 = new VF.KeySignature('Bb');
keysmo102240.cancelKey('C');
keysmo102240.addToStave(stavesmo102240);
stavesmo102240.setContext(context);
stavesmo102240.draw();
smo102240v0.draw(context, stavesmo102240);
smo103746.setContext(context);
smo103746.draw();
smo103747.setContext(context);
smo103747.draw();
const leftsmo97609stavesmo994811 = new VF.StaveConnector(stavesmo99481, stavesmo102240).setType(3);
leftsmo97609stavesmo994811.setContext(context).draw();
const fmtsmo9950255 = new VF.Formatter();
//
// voices and notes for stave 0 55
const smo99502v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99502v0ar = [];
const smo99482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","bb/5/n","dn/6/n"]}'))
smo99482.setAttribute('id', 'smo99482');
smo99502v0ar.push(smo99482);
smo99502v0.addTickables(smo99502v0ar)
fmtsmo9950255.joinVoices([smo99502v0]);
const smo99502v1 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99502v1ar = [];
const smo99483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo99483.setAttribute('id', 'smo99483');
smo99483.setStyle({ fillStyle: "#115511" });
smo99502v1ar.push(smo99483);
const smo99484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo99484.setAttribute('id', 'smo99484');
smo99484.setStyle({ fillStyle: "#115511" });
smo99502v1ar.push(smo99484);
const smo99485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo99485.setAttribute('id', 'smo99485');
smo99485.setStyle({ fillStyle: "#115511" });
smo99502v1ar.push(smo99485);
const smo99486 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo99486.setAttribute('id', 'smo99486');
smo99486.setStyle({ fillStyle: "#115511" });
smo99502v1ar.push(smo99486);
const smo99487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99487.setAttribute('id', 'smo99487');
smo99487.setStyle({ fillStyle: "#115511" });
smo99502v1ar.push(smo99487);
const smo99488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo99488.setAttribute('id', 'smo99488');
smo99488.setStyle({ fillStyle: "#115511" });
smo99502v1ar.push(smo99488);
smo99502v1.addTickables(smo99502v1ar)
fmtsmo9950255.joinVoices([smo99502v1]);
const fmtsmo10225855 = new VF.Formatter();
//
// voices and notes for stave 1 55
const smo102258v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102258v0ar = [];
const smo102241 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n"]}'))
smo102241.setAttribute('id', 'smo102241');
smo102258v0ar.push(smo102241);
const smo102242 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n","fn/4/n"]}'))
smo102242.setAttribute('id', 'smo102242');
smo102258v0ar.push(smo102242);
const smo102243 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo102243.setAttribute('id', 'smo102243');
smo102258v0ar.push(smo102243);
const smo102244 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n","fn/4/n"]}'))
smo102244.setAttribute('id', 'smo102244');
smo102258v0ar.push(smo102244);
smo102258v0.addTickables(smo102258v0ar)
fmtsmo10225855.joinVoices([smo102258v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103749 = smo99484.getStemDirection();
smo99484.setStemDirection(dirsmo103749);
smo99485.setStemDirection(dirsmo103749);
const smo103749 = new VF.Beam([smo99484,smo99485]);
const dirsmo103750 = smo99486.getStemDirection();
smo99486.setStemDirection(dirsmo103750);
smo99487.setStemDirection(dirsmo103750);
smo99488.setStemDirection(dirsmo103750);
const smo103750 = new VF.Beam([smo99486,smo99487,smo99488]);
const dirsmo103753 = smo102241.getStemDirection();
smo102241.setStemDirection(dirsmo103753);
smo102242.setStemDirection(dirsmo103753);
const smo103753 = new VF.Beam([smo102241,smo102242]);
const dirsmo103754 = smo102243.getStemDirection();
smo102243.setStemDirection(dirsmo103754);
smo102244.setStemDirection(dirsmo103754);
const smo103754 = new VF.Beam([smo102243,smo102244]);
 
// formatting measures in staff group smo97609
fmtsmo9950255.format([smo99502v0,smo99502v1,smo102258v0], 281);
const stavesmo99502 = new VF.Stave(368, 1835, 295);
stavesmo99502.setAttribute('id', 'stavesmo99502');
stavesmo99502.setBegBarType(VF.Barline.type.NONE);
stavesmo99502.setContext(context);
stavesmo99502.draw();
smo99502v0.draw(context, stavesmo99502);
smo99502v1.draw(context, stavesmo99502);
smo103749.setContext(context);
smo103749.draw();
smo103750.setContext(context);
smo103750.draw();
const stavesmo102258 = new VF.Stave(368, 2000, 295);
stavesmo102258.setAttribute('id', 'stavesmo102258');
stavesmo102258.setBegBarType(VF.Barline.type.NONE);
stavesmo102258.setContext(context);
stavesmo102258.draw();
smo102258v0.draw(context, stavesmo102258);
smo103753.setContext(context);
smo103753.draw();
smo103754.setContext(context);
smo103754.draw();
const fmtsmo9952156 = new VF.Formatter();
//
// voices and notes for stave 0 56
const smo99521v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99521v0ar = [];
const smo99503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n"]}'))
smo99503.setAttribute('id', 'smo99503');
smo99521v0ar.push(smo99503);
const smo99504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo99504.setAttribute('id', 'smo99504');
const smo995040acc = new VF.Accidental('n');
smo99504.addModifier(smo995040acc, 0);
smo99521v0ar.push(smo99504);
const smo99505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n"]}'))
smo99505.setAttribute('id', 'smo99505');
smo99521v0ar.push(smo99505);
const smo99506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n"]}'))
smo99506.setAttribute('id', 'smo99506');
smo99521v0ar.push(smo99506);
const smo99507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","an/5/n"]}'))
smo99507.setAttribute('id', 'smo99507');
smo99521v0ar.push(smo99507);
smo99521v0.addTickables(smo99521v0ar)
fmtsmo9952156.joinVoices([smo99521v0]);
const fmtsmo10227656 = new VF.Formatter();
//
// voices and notes for stave 1 56
const smo102276v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102276v0ar = [];
const smo102259 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
smo102259.setAttribute('id', 'smo102259');
smo102276v0ar.push(smo102259);
const smo102260 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo102260.setAttribute('id', 'smo102260');
smo102276v0ar.push(smo102260);
const smo102261 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo102261.setAttribute('id', 'smo102261');
smo102276v0ar.push(smo102261);
const smo102262 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo102262.setAttribute('id', 'smo102262');
smo102276v0ar.push(smo102262);
smo102276v0.addTickables(smo102276v0ar)
fmtsmo10227656.joinVoices([smo102276v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103757 = smo99503.getStemDirection();
smo99503.setStemDirection(dirsmo103757);
smo99504.setStemDirection(dirsmo103757);
smo99505.setStemDirection(dirsmo103757);
const smo103757 = new VF.Beam([smo99503,smo99504,smo99505]);
const dirsmo103758 = smo99506.getStemDirection();
smo99506.setStemDirection(dirsmo103758);
smo99507.setStemDirection(dirsmo103758);
const smo103758 = new VF.Beam([smo99506,smo99507]);
const dirsmo103761 = smo102259.getStemDirection();
smo102259.setStemDirection(dirsmo103761);
smo102260.setStemDirection(dirsmo103761);
const smo103761 = new VF.Beam([smo102259,smo102260]);
const dirsmo103762 = smo102261.getStemDirection();
smo102261.setStemDirection(dirsmo103762);
smo102262.setStemDirection(dirsmo103762);
const smo103762 = new VF.Beam([smo102261,smo102262]);
 
// formatting measures in staff group smo97609
fmtsmo9952156.format([smo99521v0,smo102276v0], 281);
const stavesmo99521 = new VF.Stave(663, 1835, 295);
stavesmo99521.setAttribute('id', 'stavesmo99521');
stavesmo99521.setBegBarType(VF.Barline.type.NONE);
stavesmo99521.setContext(context);
stavesmo99521.draw();
smo99521v0.draw(context, stavesmo99521);
smo103757.setContext(context);
smo103757.draw();
smo103758.setContext(context);
smo103758.draw();
const stavesmo102276 = new VF.Stave(663, 2000, 295);
stavesmo102276.setAttribute('id', 'stavesmo102276');
stavesmo102276.setBegBarType(VF.Barline.type.NONE);
stavesmo102276.setContext(context);
stavesmo102276.draw();
smo102276v0.draw(context, stavesmo102276);
smo103761.setContext(context);
smo103761.draw();
smo103762.setContext(context);
smo103762.draw();
const fmtsmo9954457 = new VF.Formatter();
//
// voices and notes for stave 0 57
const smo99544v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99544v0ar = [];
const smo99522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","gn/5/n","bb/5/n"]}'))
smo99522.setAttribute('id', 'smo99522');
smo99544v0ar.push(smo99522);
const smo99523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","gn/5/n","bb/5/n"]}'))
smo99523.setAttribute('id', 'smo99523');
smo99523.addModifier(new VF.Dot(), 0);
smo99523.addModifier(new VF.Dot(), 1);
smo99523.addModifier(new VF.Dot(), 2);
smo99544v0ar.push(smo99523);
const smo99524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo99524.setAttribute('id', 'smo99524');
smo99544v0ar.push(smo99524);
smo99544v0.addTickables(smo99544v0ar)
fmtsmo9954457.joinVoices([smo99544v0]);
const smo99544v1 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99544v1ar = [];
const smo99525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo99525.setAttribute('id', 'smo99525');
smo99525.setStyle({ fillStyle: "#115511" });
smo99544v1ar.push(smo99525);
const smo99526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo99526.setAttribute('id', 'smo99526');
smo99526.setStyle({ fillStyle: "#115511" });
smo99544v1ar.push(smo99526);
const smo99527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n"]}'))
smo99527.setAttribute('id', 'smo99527');
smo99527.setStyle({ fillStyle: "#115511" });
const smo995270acc = new VF.Accidental('b');
smo99527.addModifier(smo995270acc, 0);
smo99544v1ar.push(smo99527);
const smo99528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo99528.setAttribute('id', 'smo99528');
smo99528.setStyle({ fillStyle: "#115511" });
const smo995280acc = new VF.Accidental('n');
smo99528.addModifier(smo995280acc, 0);
smo99544v1ar.push(smo99528);
const smo99529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo99529.setAttribute('id', 'smo99529');
smo99529.setStyle({ fillStyle: "#115511" });
smo99544v1ar.push(smo99529);
const smo99530 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo99530.setAttribute('id', 'smo99530');
smo99530.setStyle({ fillStyle: "#115511" });
smo99544v1ar.push(smo99530);
smo99544v1.addTickables(smo99544v1ar)
fmtsmo9954457.joinVoices([smo99544v1]);
const fmtsmo10229457 = new VF.Formatter();
//
// voices and notes for stave 1 57
const smo102294v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102294v0ar = [];
const smo102277 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo102277.setAttribute('id', 'smo102277');
smo102294v0ar.push(smo102277);
const smo102278 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo102278.setAttribute('id', 'smo102278');
smo102294v0ar.push(smo102278);
const smo102279 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo102279.setAttribute('id', 'smo102279');
smo102294v0ar.push(smo102279);
const smo102280 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo102280.setAttribute('id', 'smo102280');
smo102294v0ar.push(smo102280);
smo102294v0.addTickables(smo102294v0ar)
fmtsmo10229457.joinVoices([smo102294v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103765 = smo99523.getStemDirection();
smo99523.setStemDirection(dirsmo103765);
smo99524.setStemDirection(dirsmo103765);
const smo103765 = new VF.Beam([smo99523,smo99524]);
const dirsmo103766 = smo99526.getStemDirection();
smo99526.setStemDirection(dirsmo103766);
smo99527.setStemDirection(dirsmo103766);
const smo103766 = new VF.Beam([smo99526,smo99527]);
const dirsmo103767 = smo99528.getStemDirection();
smo99528.setStemDirection(dirsmo103767);
smo99529.setStemDirection(dirsmo103767);
smo99530.setStemDirection(dirsmo103767);
const smo103767 = new VF.Beam([smo99528,smo99529,smo99530]);
const dirsmo103770 = smo102277.getStemDirection();
smo102277.setStemDirection(dirsmo103770);
smo102278.setStemDirection(dirsmo103770);
const smo103770 = new VF.Beam([smo102277,smo102278]);
const dirsmo103771 = smo102279.getStemDirection();
smo102279.setStemDirection(dirsmo103771);
smo102280.setStemDirection(dirsmo103771);
const smo103771 = new VF.Beam([smo102279,smo102280]);
 
// formatting measures in staff group smo97609
fmtsmo9954457.format([smo99544v0,smo99544v1,smo102294v0], 281);
const stavesmo99544 = new VF.Stave(958, 1835, 295);
stavesmo99544.setAttribute('id', 'stavesmo99544');
stavesmo99544.setBegBarType(VF.Barline.type.NONE);
stavesmo99544.setContext(context);
stavesmo99544.draw();
smo99544v0.draw(context, stavesmo99544);
smo99544v1.draw(context, stavesmo99544);
smo103765.setContext(context);
smo103765.draw();
smo103766.setContext(context);
smo103766.draw();
smo103767.setContext(context);
smo103767.draw();
const stavesmo102294 = new VF.Stave(958, 2000, 295);
stavesmo102294.setAttribute('id', 'stavesmo102294');
stavesmo102294.setBegBarType(VF.Barline.type.NONE);
stavesmo102294.setContext(context);
stavesmo102294.draw();
smo102294v0.draw(context, stavesmo102294);
smo103770.setContext(context);
smo103770.draw();
smo103771.setContext(context);
smo103771.draw();
const fmtsmo9956458 = new VF.Formatter();
//
// voices and notes for stave 0 58
const smo99564v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99564v0ar = [];
const smo99545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo99545.setAttribute('id', 'smo99545');
smo99564v0ar.push(smo99545);
const smo99546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo99546.setAttribute('id', 'smo99546');
smo99564v0ar.push(smo99546);
const smo99547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo99547.setAttribute('id', 'smo99547');
smo99564v0ar.push(smo99547);
const smo99548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo99548.setAttribute('id', 'smo99548');
smo99564v0ar.push(smo99548);
const smo99549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo99549.setAttribute('id', 'smo99549');
smo99564v0ar.push(smo99549);
const smo99550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo99550.setAttribute('id', 'smo99550');
smo99564v0ar.push(smo99550);
smo99564v0.addTickables(smo99564v0ar)
fmtsmo9956458.joinVoices([smo99564v0]);
const fmtsmo10231258 = new VF.Formatter();
//
// voices and notes for stave 1 58
const smo102312v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102312v0ar = [];
const smo102295 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo102295.setAttribute('id', 'smo102295');
smo102312v0ar.push(smo102295);
const smo102296 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo102296.setAttribute('id', 'smo102296');
smo102312v0ar.push(smo102296);
const smo102297 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo102297.setAttribute('id', 'smo102297');
smo102312v0ar.push(smo102297);
const smo102298 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/2/n","ab/3/n"]}'))
smo102298.setAttribute('id', 'smo102298');
const smo1022980acc = new VF.Accidental('b');
smo102298.addModifier(smo1022980acc, 0);
const smo1022981acc = new VF.Accidental('b');
smo102298.addModifier(smo1022981acc, 1);
smo102312v0ar.push(smo102298);
smo102312v0.addTickables(smo102312v0ar)
fmtsmo10231258.joinVoices([smo102312v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103774 = smo99545.getStemDirection();
smo99545.setStemDirection(dirsmo103774);
smo99546.setStemDirection(dirsmo103774);
smo99547.setStemDirection(dirsmo103774);
const smo103774 = new VF.Beam([smo99545,smo99546,smo99547]);
const dirsmo103775 = smo99548.getStemDirection();
smo99548.setStemDirection(dirsmo103775);
smo99549.setStemDirection(dirsmo103775);
smo99550.setStemDirection(dirsmo103775);
const smo103775 = new VF.Beam([smo99548,smo99549,smo99550]);
const dirsmo103778 = smo102295.getStemDirection();
smo102295.setStemDirection(dirsmo103778);
smo102296.setStemDirection(dirsmo103778);
const smo103778 = new VF.Beam([smo102295,smo102296]);
const dirsmo103779 = smo102297.getStemDirection();
smo102297.setStemDirection(dirsmo103779);
smo102298.setStemDirection(dirsmo103779);
const smo103779 = new VF.Beam([smo102297,smo102298]);
 
// formatting measures in staff group smo97609
fmtsmo9956458.format([smo99564v0,smo102312v0], 281);
const stavesmo99564 = new VF.Stave(1253, 1835, 295);
stavesmo99564.setAttribute('id', 'stavesmo99564');
stavesmo99564.setBegBarType(VF.Barline.type.NONE);
stavesmo99564.setContext(context);
stavesmo99564.draw();
smo99564v0.draw(context, stavesmo99564);
smo103774.setContext(context);
smo103774.draw();
smo103775.setContext(context);
smo103775.draw();
const stavesmo102312 = new VF.Stave(1253, 2000, 295);
stavesmo102312.setAttribute('id', 'stavesmo102312');
stavesmo102312.setBegBarType(VF.Barline.type.NONE);
stavesmo102312.setContext(context);
stavesmo102312.draw();
smo102312v0.draw(context, stavesmo102312);
smo103778.setContext(context);
smo103778.draw();
smo103779.setContext(context);
smo103779.draw();
const fmtsmo9958059 = new VF.Formatter();
//
// voices and notes for stave 0 59
const smo99580v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99580v0ar = [];
const smo99565 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99565.setAttribute('id', 'smo99565');
smo99580v0ar.push(smo99565);
const smo99566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo99566.setAttribute('id', 'smo99566');
smo99580v0ar.push(smo99566);
smo99580v0.addTickables(smo99580v0ar)
fmtsmo9958059.joinVoices([smo99580v0]);
const fmtsmo10233059 = new VF.Formatter();
//
// voices and notes for stave 1 59
const smo102330v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102330v0ar = [];
const smo102313 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
smo102313.setAttribute('id', 'smo102313');
smo102330v0ar.push(smo102313);
const smo102314 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo102314.setAttribute('id', 'smo102314');
smo102330v0ar.push(smo102314);
const smo102315 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo102315.setAttribute('id', 'smo102315');
smo102330v0ar.push(smo102315);
const smo102316 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo102316.setAttribute('id', 'smo102316');
smo102330v0ar.push(smo102316);
smo102330v0.addTickables(smo102330v0ar)
fmtsmo10233059.joinVoices([smo102330v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103784 = smo102313.getStemDirection();
smo102313.setStemDirection(dirsmo103784);
smo102314.setStemDirection(dirsmo103784);
const smo103784 = new VF.Beam([smo102313,smo102314]);
const dirsmo103785 = smo102315.getStemDirection();
smo102315.setStemDirection(dirsmo103785);
smo102316.setStemDirection(dirsmo103785);
const smo103785 = new VF.Beam([smo102315,smo102316]);
 
// formatting measures in staff group smo97609
fmtsmo9958059.format([smo99580v0,smo102330v0], 281);
const stavesmo99580 = new VF.Stave(1548, 1835, 295);
stavesmo99580.setAttribute('id', 'stavesmo99580');
stavesmo99580.setBegBarType(VF.Barline.type.NONE);
stavesmo99580.setContext(context);
stavesmo99580.draw();
smo99580v0.draw(context, stavesmo99580);
const stavesmo102330 = new VF.Stave(1548, 2000, 295);
stavesmo102330.setAttribute('id', 'stavesmo102330');
stavesmo102330.setBegBarType(VF.Barline.type.NONE);
stavesmo102330.setContext(context);
stavesmo102330.draw();
smo102330v0.draw(context, stavesmo102330);
smo103784.setContext(context);
smo103784.draw();
smo103785.setContext(context);
smo103785.draw();
const rightsmo97609stavesmo995801 = new VF.StaveConnector(stavesmo99580, stavesmo102330).setType(0);
rightsmo97609stavesmo995801.setContext(context).draw();
// modifier from 0-32-0-2 to 0-32-0-4
const smo104696 = new VF.StaveHairpin({ first_note: smo99021, last_note: smo99021,
       firstNote: smo99021, lastNote: smo99021 });
smo104696.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo104696.setContext(context).setPosition(4).draw();
// modifier from 0-34-0-1 to 0-34-0-7
const smo104697 = new VF.StaveHairpin({ first_note: smo99061, last_note: smo99061,
       firstNote: smo99061, lastNote: smo99061 });
smo104697.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo104697.setContext(context).setPosition(4).draw();
// modifier from 0-37-0-2 to 0-38-0-0
const smo104698 = new VF.StaveHairpin({ first_note: smo99123, last_note: smo99123,
       firstNote: smo99123, lastNote: smo99123 });
smo104698.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo104698.setContext(context).setPosition(4).draw();
// modifier from 0-39-0-2 to 0-39-0-4
const smo104699 = new VF.StaveHairpin({ first_note: smo99163, last_note: smo99163,
       firstNote: smo99163, lastNote: smo99163 });
smo104699.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo104699.setContext(context).setPosition(4).draw();
// modifier from 0-41-0-2 to 0-42-0-0
// modifier from 0-41-0-2 to 0-42-0-0
// modifier from 0-43-0-2 to 0-44-0-0
const smo104702 = new VF.StaveHairpin({ first_note: smo99243, last_note: smo99243,
       firstNote: smo99243, lastNote: smo99243 });
smo104702.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo104702.setContext(context).setPosition(4).draw();
// modifier from 0-45-0-2 to 0-46-0-0
const smo104703 = new VF.StaveHairpin({ first_note: smo99284, last_note: smo99284,
       firstNote: smo99284, lastNote: smo99284 });
smo104703.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo104703.setContext(context).setPosition(4).draw();
// modifier from 0-47-0-2 to 0-47-0-4
const smo104704 = new VF.StaveHairpin({ first_note: smo99323, last_note: smo99323,
       firstNote: smo99323, lastNote: smo99323 });
smo104704.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo104704.setContext(context).setPosition(4).draw();
// modifier from 0-30-0-2 to 0-30-0-3
const smo104705 = new VF.StaveTie({ first_note: smo98978, last_note: smo98979, 
          firstNote: smo98978, lastNote: smo98979, first_indices: [0,1,2], last_indices: [0,1,2]});
smo104705.setContext(context).draw();
// modifier from 0-32-0-0 to 0-32-0-1
const smo104706 = new VF.StaveTie({ first_note: smo99019, last_note: smo99020, 
          firstNote: smo99019, lastNote: smo99020, first_indices: [0], last_indices: [0]});
smo104706.setContext(context).draw();
// modifier from 0-33-0-2 to 0-33-0-3
const smo104707 = new VF.StaveTie({ first_note: smo99041, last_note: smo99042, 
          firstNote: smo99041, lastNote: smo99042, first_indices: [0], last_indices: [0]});
smo104707.setContext(context).draw();
// modifier from 0-34-0-3 to 0-34-0-4
const smo104708 = new VF.StaveTie({ first_note: smo99063, last_note: smo99064, 
          firstNote: smo99063, lastNote: smo99064, first_indices: [0], last_indices: [0]});
smo104708.setContext(context).draw();
// modifier from 0-35-0-4 to 0-36-0-0
const smo104709 = new VF.StaveTie({ first_note: smo99086, last_note: null, 
          firstNote: smo99086, lastNote: null, first_indices: [0,1], last_indices: [0,1]});
smo104709.setContext(context).draw();
// modifier from 0-35-0-4 to 0-36-0-0
const smo104710 = new VF.StaveTie({ first_note: null, last_note: smo99101, 
          firstNote: null, lastNote: smo99101, first_indices: [0,1], last_indices: [0,1]});
smo104710.setContext(context).draw();
// modifier from 0-36-0-0 to 0-36-0-1
const smo104711 = new VF.StaveTie({ first_note: smo99101, last_note: smo99102, 
          firstNote: smo99101, lastNote: smo99102, first_indices: [0,1], last_indices: [0,1]});
smo104711.setContext(context).draw();
// modifier from 0-37-0-0 to 0-37-0-1
const smo104712 = new VF.StaveTie({ first_note: smo99121, last_note: smo99122, 
          firstNote: smo99121, lastNote: smo99122, first_indices: [0,1], last_indices: [0,1]});
smo104712.setContext(context).draw();
// modifier from 0-38-0-5 to 0-39-0-0
const smo104713 = new VF.StaveTie({ first_note: smo99146, last_note: smo99161, 
          firstNote: smo99146, lastNote: smo99161, first_indices: [0], last_indices: [0]});
smo104713.setContext(context).draw();
// modifier from 0-39-0-0 to 0-39-0-1
const smo104714 = new VF.StaveTie({ first_note: smo99161, last_note: smo99162, 
          firstNote: smo99161, lastNote: smo99162, first_indices: [0], last_indices: [0]});
smo104714.setContext(context).draw();
// modifier from 0-40-0-3 to 0-40-0-4
const smo104715 = new VF.StaveTie({ first_note: smo99184, last_note: smo99185, 
          firstNote: smo99184, lastNote: smo99185, first_indices: [0,1,2], last_indices: [0,1,2]});
smo104715.setContext(context).draw();
// modifier from 0-41-0-0 to 0-41-0-1
const smo104716 = new VF.StaveTie({ first_note: smo99202, last_note: smo99203, 
          firstNote: smo99202, lastNote: smo99203, first_indices: [0,1,2], last_indices: [0,1,2]});
smo104716.setContext(context).draw();
// modifier from 0-42-0-5 to 0-43-0-0
const smo104717 = new VF.StaveTie({ first_note: smo99226, last_note: smo99241, 
          firstNote: smo99226, lastNote: smo99241, first_indices: [0], last_indices: [0]});
smo104717.setContext(context).draw();
// modifier from 0-43-0-0 to 0-43-0-1
const smo104718 = new VF.StaveTie({ first_note: smo99241, last_note: smo99242, 
          firstNote: smo99241, lastNote: smo99242, first_indices: [0], last_indices: [0]});
smo104718.setContext(context).draw();
// modifier from 0-44-0-3 to 0-44-0-4
const smo104719 = new VF.StaveTie({ first_note: smo99263, last_note: smo99264, 
          firstNote: smo99263, lastNote: smo99264, first_indices: [0,1], last_indices: [0,1]});
smo104719.setContext(context).draw();
// modifier from 0-45-0-0 to 0-45-0-1
const smo104720 = new VF.StaveTie({ first_note: smo99282, last_note: smo99283, 
          firstNote: smo99282, lastNote: smo99283, first_indices: [0,1,2], last_indices: [0,1,2]});
smo104720.setContext(context).draw();
// modifier from 0-46-0-5 to 0-47-0-0
const smo104721 = new VF.StaveTie({ first_note: smo99306, last_note: smo99321, 
          firstNote: smo99306, lastNote: smo99321, first_indices: [0], last_indices: [0]});
smo104721.setContext(context).draw();
// modifier from 0-47-0-0 to 0-47-0-1
const smo104722 = new VF.StaveTie({ first_note: smo99321, last_note: smo99322, 
          firstNote: smo99321, lastNote: smo99322, first_indices: [0], last_indices: [0]});
smo104722.setContext(context).draw();
// modifier from 0-48-0-3 to 0-48-0-4
const smo104723 = new VF.StaveTie({ first_note: smo99344, last_note: smo99345, 
          firstNote: smo99344, lastNote: smo99345, first_indices: [0,1,2], last_indices: [0,1,2]});
smo104723.setContext(context).draw();
// modifier from 0-49-0-0 to 0-49-0-1
const smo104724 = new VF.StaveTie({ first_note: smo99362, last_note: smo99363, 
          firstNote: smo99362, lastNote: smo99363, first_indices: [0,1,2], last_indices: [0,1,2]});
smo104724.setContext(context).draw();
// modifier from 0-50-0-3 to 0-50-0-4
const smo104725 = new VF.StaveTie({ first_note: smo99383, last_note: smo99384, 
          firstNote: smo99383, lastNote: smo99384, first_indices: [0,1], last_indices: [0,1]});
smo104725.setContext(context).draw();
// modifier from 0-51-0-3 to 0-51-0-4
const smo104726 = new VF.StaveTie({ first_note: smo99405, last_note: smo99406, 
          firstNote: smo99405, lastNote: smo99406, first_indices: [0,1], last_indices: [0,1]});
smo104726.setContext(context).draw();
// modifier from 0-52-0-3 to 0-52-0-4
const smo104727 = new VF.StaveTie({ first_note: smo99427, last_note: smo99428, 
          firstNote: smo99427, lastNote: smo99428, first_indices: [0,1,2], last_indices: [0,1,2]});
smo104727.setContext(context).draw();
// modifier from 0-54-0-2 to 0-54-0-3
const smo104728 = new VF.StaveTie({ first_note: smo99465, last_note: smo99466, 
          firstNote: smo99465, lastNote: smo99466, first_indices: [0,1], last_indices: [0,1]});
smo104728.setContext(context).draw();
// modifier from 0-56-0-2 to 0-56-0-3
const smo104729 = new VF.StaveTie({ first_note: smo99505, last_note: smo99506, 
          firstNote: smo99505, lastNote: smo99506, first_indices: [0,1], last_indices: [0,1]});
smo104729.setContext(context).draw();
// modifier from 0-57-0-0 to 0-57-0-1
const smo104730 = new VF.StaveTie({ first_note: smo99522, last_note: smo99523, 
          firstNote: smo99522, lastNote: smo99523, first_indices: [0,1,2], last_indices: [0,1,2]});
smo104730.setContext(context).draw();
// modifier from 0-58-0-2 to 0-58-0-3
const smo104731 = new VF.StaveTie({ first_note: smo99547, last_note: smo99548, 
          firstNote: smo99547, lastNote: smo99548, first_indices: [0], last_indices: [0]});
smo104731.setContext(context).draw();
const smo99107smo99120 = new VF.Volta(5, '1', 73, -55);
smo99107smo99120.setContext(context).draw(stavesmo99120, -1 * 0);
const smo99125smo99139 = new VF.Volta(5, '2', 368, 20);
smo99125smo99139.setContext(context).draw(stavesmo99139, -1 * 0);
}
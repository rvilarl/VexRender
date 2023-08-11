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
const fmtsmo3890943 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo38909v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38909v0ar = [];
const smo38888 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo38888'] = smo38888;
smo38888.setAttribute('id', 'smo38888');
smo38888.addModifier(new VF.Dot(), 0);
const smo38889 = new VF.Annotation('Wäl');
smo38889.setAttribute('id', 'smo38889');
smo38889.setFont('Merriweather', 12, 'normal');
smo38889.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38888.addModifier(smo38889);
smo38889.addClass('lyric lyric-0 lyric-hyphen');
const smo38890 = new VF.Annotation('klin');
smo38890.setAttribute('id', 'smo38890');
smo38890.setFont('Merriweather', 12, 'normal');
smo38890.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38888.addModifier(smo38890);
smo38890.addClass('lyric lyric-1 lyric-hyphen');
smo38909v0ar.push(smo38888);
const smo38891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo38891'] = smo38891;
smo38891.setAttribute('id', 'smo38891');
smo38891.addModifier(new VF.Dot(), 0);
const smo38892 = new VF.Annotation('der');
smo38892.setAttribute('id', 'smo38892');
smo38892.setFont('Merriweather', 12, 'normal');
smo38892.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38891.addModifier(smo38892);
smo38892.addClass('lyric lyric-0');
const smo38893 = new VF.Annotation('gen:');
smo38893.setAttribute('id', 'smo38893');
smo38893.setFont('Merriweather', 12, 'normal');
smo38893.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38891.addModifier(smo38893);
smo38893.addClass('lyric lyric-1');
smo38909v0ar.push(smo38891);
smo38909v0.addTickables(smo38909v0ar)
fmtsmo3890943.joinVoices([smo38909v0]);
const fmtsmo4008043 = new VF.Formatter();
//
// voices and notes for stave 1 43
const smo40080v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40080v0ar = [];
const smo40064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","f#/5/n","dn/6/n"]}'))
noteHash['smo40064'] = smo40064;
smo40064.setAttribute('id', 'smo40064');
smo40064.addModifier(new VF.Dot(), 0);
smo40064.addModifier(new VF.Dot(), 1);
smo40064.addModifier(new VF.Dot(), 2);
smo40080v0ar.push(smo40064);
smo40080v0.addTickables(smo40080v0ar)
fmtsmo4008043.joinVoices([smo40080v0]);
const fmtsmo4130543 = new VF.Formatter();
//
// voices and notes for stave 2 43
const smo41305v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41305v0ar = [];
const smo41284 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo41284'] = smo41284;
smo41284.setAttribute('id', 'smo41284');
smo41305v0ar.push(smo41284);
const smo41285 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo41285'] = smo41285;
smo41285.setAttribute('id', 'smo41285');
smo41305v0ar.push(smo41285);
const smo41286 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo41286'] = smo41286;
smo41286.setAttribute('id', 'smo41286');
smo41305v0ar.push(smo41286);
const smo41287 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo41287'] = smo41287;
smo41287.setAttribute('id', 'smo41287');
smo41305v0ar.push(smo41287);
smo41305v0.addTickables(smo41305v0ar)
fmtsmo4130543.joinVoices([smo41305v0]);
const smo41305v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41305v1ar = [];
const smo41288 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo41288'] = smo41288;
smo41288.setAttribute('id', 'smo41288');
smo41288.setStyle({ fillStyle: "#115511" });
smo41288.addModifier(new VF.Dot(), 0);
smo41305v1ar.push(smo41288);
const smo41289 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["cn/4/r"]}'))
noteHash['smo41289'] = smo41289;
smo41289.setAttribute('id', 'smo41289');
smo41289.setStyle({ fillStyle: "#115511" });
smo41289.addModifier(new VF.Dot(), 0);
smo41305v1ar.push(smo41289);
smo41305v1.addTickables(smo41305v1ar)
fmtsmo4130543.joinVoices([smo41305v1]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3890943.format([smo38909v0,smo40080v0,smo41305v0,smo41305v1], 173);
const stavesmo38909 = new VF.Stave(66, 98.0266026666668, 247);
stavesmo38909.setAttribute('id', 'stavesmo38909');
stavesmo38909.setBegBarType(1);
stavesmo38909.addClef('treble');
const keysmo38909 = new VF.KeySignature('G');
keysmo38909.addToStave(stavesmo38909);
stavesmo38909.setContext(context);
stavesmo38909.draw();
smo38909v0.draw(context, stavesmo38909);
const stavesmo40080 = new VF.Stave(66, 280.0266026666668, 247);
stavesmo40080.setAttribute('id', 'stavesmo40080');
stavesmo40080.setBegBarType(1);
stavesmo40080.addClef('treble');
const keysmo40080 = new VF.KeySignature('G');
keysmo40080.addToStave(stavesmo40080);
stavesmo40080.setContext(context);
stavesmo40080.draw();
smo40080v0.draw(context, stavesmo40080);
const stavesmo41305 = new VF.Stave(66, 386.0266026666668, 247);
stavesmo41305.setAttribute('id', 'stavesmo41305');
stavesmo41305.setBegBarType(1);
stavesmo41305.addClef('bass');
const keysmo41305 = new VF.KeySignature('G');
keysmo41305.addToStave(stavesmo41305);
stavesmo41305.setContext(context);
stavesmo41305.draw();
smo41305v0.draw(context, stavesmo41305);
smo41305v1.draw(context, stavesmo41305);
const leftsmo41649stavesmo389092 = new VF.StaveConnector(stavesmo38909, stavesmo41305).setType(1);
leftsmo41649stavesmo389092.setContext(context).draw();
const fmtsmo3893744 = new VF.Formatter();
//
// voices and notes for stave 0 44
const smo38937v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38937v0ar = [];
const smo38910 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo38910'] = smo38910;
smo38910.setAttribute('id', 'smo38910');
const smo38911 = new VF.Annotation('ü');
smo38911.setAttribute('id', 'smo38911');
smo38911.setFont('Merriweather', 12, 'normal');
smo38911.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38910.addModifier(smo38911);
smo38911.addClass('lyric lyric-0 lyric-hyphen');
const smo38912 = new VF.Annotation('Ich');
smo38912.setAttribute('id', 'smo38912');
smo38912.setFont('Merriweather', 12, 'normal');
smo38912.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38910.addModifier(smo38912);
smo38912.addClass('lyric lyric-1');
smo38937v0ar.push(smo38910);
const smo38913 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo38913'] = smo38913;
smo38913.setAttribute('id', 'smo38913');
const smo38914 = new VF.Annotation('ber');
smo38914.setAttribute('id', 'smo38914');
smo38914.setFont('Merriweather', 12, 'normal');
smo38914.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38913.addModifier(smo38914);
smo38914.addClass('lyric lyric-0');
const smo38915 = new VF.Annotation('bin');
smo38915.setAttribute('id', 'smo38915');
smo38915.setFont('Merriweather', 12, 'normal');
smo38915.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38913.addModifier(smo38915);
smo38915.addClass('lyric lyric-1');
smo38937v0ar.push(smo38913);
const smo38916 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo38916'] = smo38916;
smo38916.setAttribute('id', 'smo38916');
const smo38917 = new VF.Annotation('das');
smo38917.setAttribute('id', 'smo38917');
smo38917.setFont('Merriweather', 12, 'normal');
smo38917.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38916.addModifier(smo38917);
smo38917.addClass('lyric lyric-0');
const smo38918 = new VF.Annotation('ganz');
smo38918.setAttribute('id', 'smo38918');
smo38918.setFont('Merriweather', 12, 'normal');
smo38918.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38916.addModifier(smo38918);
smo38918.addClass('lyric lyric-1');
smo38937v0ar.push(smo38916);
const smo38919 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo38919'] = smo38919;
smo38919.setAttribute('id', 'smo38919');
smo38919.addModifier(new VF.Dot(), 0);
const smo38920 = new VF.Annotation('Land;');
smo38920.setAttribute('id', 'smo38920');
smo38920.setFont('Merriweather', 12, 'normal');
smo38920.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38919.addModifier(smo38920);
smo38920.addClass('lyric lyric-0');
const smo38921 = new VF.Annotation('nah!');
smo38921.setAttribute('id', 'smo38921');
smo38921.setFont('Merriweather', 12, 'normal');
smo38921.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38919.addModifier(smo38921);
smo38921.addClass('lyric lyric-1');
smo38937v0ar.push(smo38919);
smo38937v0.addTickables(smo38937v0ar)
fmtsmo3893744.joinVoices([smo38937v0]);
const fmtsmo4009744 = new VF.Formatter();
//
// voices and notes for stave 1 44
const smo40097v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40097v0ar = [];
const smo40081 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
noteHash['smo40081'] = smo40081;
smo40081.setAttribute('id', 'smo40081');
smo40081.addModifier(new VF.Dot(), 0);
smo40081.addModifier(new VF.Dot(), 1);
smo40097v0ar.push(smo40081);
smo40097v0.addTickables(smo40097v0ar)
fmtsmo4009744.joinVoices([smo40097v0]);
const fmtsmo4132544 = new VF.Formatter();
//
// voices and notes for stave 2 44
const smo41325v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41325v0ar = [];
const smo41306 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo41306'] = smo41306;
smo41306.setAttribute('id', 'smo41306');
smo41325v0ar.push(smo41306);
const smo41307 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo41307'] = smo41307;
smo41307.setAttribute('id', 'smo41307');
smo41325v0ar.push(smo41307);
const smo41308 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo41308'] = smo41308;
smo41308.setAttribute('id', 'smo41308');
smo41325v0ar.push(smo41308);
const smo41309 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo41309'] = smo41309;
smo41309.setAttribute('id', 'smo41309');
smo41325v0ar.push(smo41309);
smo41325v0.addTickables(smo41325v0ar)
fmtsmo4132544.joinVoices([smo41325v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
const dirsmo47935 = smo38910.getStemDirection();
smo38910.setStemDirection(dirsmo47935);
smo38913.setStemDirection(dirsmo47935);
smo38916.setStemDirection(dirsmo47935);
const smo47935 = new VF.Beam([smo38910,smo38913,smo38916]);
 
// formatting measures in staff group smo41649
fmtsmo3893744.format([smo38937v0,smo40097v0,smo41325v0], 278);
const stavesmo38937 = new VF.Stave(313, 98.0266026666668, 292);
stavesmo38937.setAttribute('id', 'stavesmo38937');
stavesmo38937.setBegBarType(VF.Barline.type.NONE);
stavesmo38937.setContext(context);
stavesmo38937.draw();
smo38937v0.draw(context, stavesmo38937);
smo47935.setContext(context);
smo47935.draw();
const stavesmo40097 = new VF.Stave(313, 280.0266026666668, 292);
stavesmo40097.setAttribute('id', 'stavesmo40097');
stavesmo40097.setBegBarType(VF.Barline.type.NONE);
stavesmo40097.setContext(context);
stavesmo40097.draw();
smo40097v0.draw(context, stavesmo40097);
const stavesmo41325 = new VF.Stave(313, 386.0266026666668, 292);
stavesmo41325.setAttribute('id', 'stavesmo41325');
stavesmo41325.setBegBarType(VF.Barline.type.NONE);
stavesmo41325.setContext(context);
stavesmo41325.draw();
smo41325v0.draw(context, stavesmo41325);
const fmtsmo3895745 = new VF.Formatter();
//
// voices and notes for stave 0 45
const smo38957v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38957v0ar = [];
const smo38938 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo38938'] = smo38938;
smo38938.setAttribute('id', 'smo38938');
smo38938.addModifier(new VF.Dot(), 0);
smo38957v0ar.push(smo38938);
const smo38939 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo38939'] = smo38939;
smo38939.setAttribute('id', 'smo38939');
smo38939.addModifier(new VF.Dot(), 0);
const smo38940 = new VF.Annotation('von');
smo38940.setAttribute('id', 'smo38940');
smo38940.setFont('Merriweather', 12, 'normal');
smo38940.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38939.addModifier(smo38940);
smo38940.addClass('lyric lyric-0');
const smo38941 = new VF.Annotation('Tra');
smo38941.setAttribute('id', 'smo38941');
smo38941.setFont('Merriweather', 12, 'normal');
smo38941.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38939.addModifier(smo38941);
smo38941.addClass('lyric lyric-1 lyric-hyphen');
smo38957v0ar.push(smo38939);
smo38957v0.addTickables(smo38957v0ar)
fmtsmo3895745.joinVoices([smo38957v0]);
const fmtsmo4011445 = new VF.Formatter();
//
// voices and notes for stave 1 45
const smo40114v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40114v0ar = [];
const smo40098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
noteHash['smo40098'] = smo40098;
smo40098.setAttribute('id', 'smo40098');
smo40098.addModifier(new VF.Dot(), 0);
smo40098.addModifier(new VF.Dot(), 1);
smo40114v0ar.push(smo40098);
smo40114v0.addTickables(smo40114v0ar)
fmtsmo4011445.joinVoices([smo40114v0]);
const fmtsmo4134545 = new VF.Formatter();
//
// voices and notes for stave 2 45
const smo41345v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41345v0ar = [];
const smo41326 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo41326'] = smo41326;
smo41326.setAttribute('id', 'smo41326');
smo41345v0ar.push(smo41326);
const smo41327 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo41327'] = smo41327;
smo41327.setAttribute('id', 'smo41327');
smo41345v0ar.push(smo41327);
const smo41328 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo41328'] = smo41328;
smo41328.setAttribute('id', 'smo41328');
smo41345v0ar.push(smo41328);
const smo41329 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo41329'] = smo41329;
smo41329.setAttribute('id', 'smo41329');
smo41345v0ar.push(smo41329);
smo41345v0.addTickables(smo41345v0ar)
fmtsmo4134545.joinVoices([smo41345v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3895745.format([smo38957v0,smo40114v0,smo41345v0], 150);
const stavesmo38957 = new VF.Stave(605, 98.0266026666668, 164);
stavesmo38957.setAttribute('id', 'stavesmo38957');
stavesmo38957.setBegBarType(VF.Barline.type.NONE);
stavesmo38957.setContext(context);
stavesmo38957.draw();
smo38957v0.draw(context, stavesmo38957);
const stavesmo40114 = new VF.Stave(605, 280.0266026666668, 164);
stavesmo40114.setAttribute('id', 'stavesmo40114');
stavesmo40114.setBegBarType(VF.Barline.type.NONE);
stavesmo40114.setContext(context);
stavesmo40114.draw();
smo40114v0.draw(context, stavesmo40114);
const stavesmo41345 = new VF.Stave(605, 386.0266026666668, 164);
stavesmo41345.setAttribute('id', 'stavesmo41345');
stavesmo41345.setBegBarType(VF.Barline.type.NONE);
stavesmo41345.setContext(context);
stavesmo41345.draw();
smo41345v0.draw(context, stavesmo41345);
const fmtsmo3897646 = new VF.Formatter();
//
// voices and notes for stave 0 46
const smo38976v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38976v0ar = [];
const smo38958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo38958'] = smo38958;
smo38958.setAttribute('id', 'smo38958');
smo38958.addModifier(new VF.Dot(), 0);
const smo38959 = new VF.Annotation('fern');
smo38959.setAttribute('id', 'smo38959');
smo38959.setFont('Merriweather', 12, 'normal');
smo38959.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38958.addModifier(smo38959);
smo38959.addClass('lyric lyric-0');
const smo38960 = new VF.Annotation('ra!');
smo38960.setAttribute('id', 'smo38960');
smo38960.setFont('Merriweather', 12, 'normal');
smo38960.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38958.addModifier(smo38960);
smo38960.addClass('lyric lyric-1');
smo38976v0ar.push(smo38958);
smo38976v0.addTickables(smo38976v0ar)
fmtsmo3897646.joinVoices([smo38976v0]);
const fmtsmo4013446 = new VF.Formatter();
//
// voices and notes for stave 1 46
const smo40134v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40134v0ar = [];
const smo40115 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo40115'] = smo40115;
smo40115.setAttribute('id', 'smo40115');
smo40115.addModifier(new VF.Dot(), 0);
smo40134v0ar.push(smo40115);
smo40134v0.addTickables(smo40134v0ar)
fmtsmo4013446.joinVoices([smo40134v0]);
const smo40134v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40134v1ar = [];
const smo40116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/5/r"]}'))
noteHash['smo40116'] = smo40116;
smo40116.setAttribute('id', 'smo40116');
smo40116.setStyle({ fillStyle: "#115511" });
smo40116.addModifier(new VF.Dot(), 0);
smo40134v1ar.push(smo40116);
const smo40117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/5/n"]}'))
noteHash['smo40117'] = smo40117;
smo40117.setAttribute('id', 'smo40117');
smo40117.setStyle({ fillStyle: "#115511" });
smo40134v1ar.push(smo40117);
const smo40118 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo40118'] = smo40118;
smo40118.setAttribute('id', 'smo40118');
smo40118.setStyle({ fillStyle: "#115511" });
smo40134v1ar.push(smo40118);
smo40134v1.addTickables(smo40134v1ar)
fmtsmo4013446.joinVoices([smo40134v1]);
const fmtsmo4136546 = new VF.Formatter();
//
// voices and notes for stave 2 46
const smo41365v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41365v0ar = [];
const smo41346 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo41346'] = smo41346;
smo41346.setAttribute('id', 'smo41346');
smo41365v0ar.push(smo41346);
const smo41347 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo41347'] = smo41347;
smo41347.setAttribute('id', 'smo41347');
smo41365v0ar.push(smo41347);
const smo41348 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo41348'] = smo41348;
smo41348.setAttribute('id', 'smo41348');
smo41365v0ar.push(smo41348);
const smo41349 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo41349'] = smo41349;
smo41349.setAttribute('id', 'smo41349');
smo41365v0ar.push(smo41349);
smo41365v0.addTickables(smo41365v0ar)
fmtsmo4136546.joinVoices([smo41365v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3897646.format([smo38976v0,smo40134v0,smo40134v1,smo41365v0], 138);
const stavesmo38976 = new VF.Stave(769, 98.0266026666668, 152);
stavesmo38976.setAttribute('id', 'stavesmo38976');
stavesmo38976.setBegBarType(VF.Barline.type.NONE);
stavesmo38976.setContext(context);
stavesmo38976.draw();
smo38976v0.draw(context, stavesmo38976);
const stavesmo40134 = new VF.Stave(769, 280.0266026666668, 152);
stavesmo40134.setAttribute('id', 'stavesmo40134');
stavesmo40134.setBegBarType(VF.Barline.type.NONE);
stavesmo40134.setContext(context);
stavesmo40134.draw();
smo40134v0.draw(context, stavesmo40134);
smo40134v1.draw(context, stavesmo40134);
const stavesmo41365 = new VF.Stave(769, 386.0266026666668, 152);
stavesmo41365.setAttribute('id', 'stavesmo41365');
stavesmo41365.setBegBarType(VF.Barline.type.NONE);
stavesmo41365.setContext(context);
stavesmo41365.draw();
smo41365v0.draw(context, stavesmo41365);
const fmtsmo3900647 = new VF.Formatter();
//
// voices and notes for stave 0 47
const smo39006v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39006v0ar = [];
const smo38977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo38977'] = smo38977;
smo38977.setAttribute('id', 'smo38977');
smo39006v0ar.push(smo38977);
const smo38979 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo38979'] = smo38979;
smo38979.setAttribute('id', 'smo38979');
const smo38980 = new VF.Annotation('er');
smo38980.setAttribute('id', 'smo38980');
smo38980.setFont('Merriweather', 12, 'normal');
smo38980.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38979.addModifier(smo38980);
smo38980.addClass('lyric lyric-0');
const smo38981 = new VF.Annotation('Ich');
smo38981.setAttribute('id', 'smo38981');
smo38981.setFont('Merriweather', 12, 'normal');
smo38981.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38979.addModifier(smo38981);
smo38981.addClass('lyric lyric-1');
smo39006v0ar.push(smo38979);
const smo38982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo38982'] = smo38982;
smo38982.setAttribute('id', 'smo38982');
const smo38983 = new VF.Annotation('kem');
smo38983.setAttribute('id', 'smo38983');
smo38983.setFont('Merriweather', 12, 'normal');
smo38983.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38982.addModifier(smo38983);
smo38983.addClass('lyric lyric-0');
const smo38984 = new VF.Annotation('hö');
smo38984.setAttribute('id', 'smo38984');
smo38984.setFont('Merriweather', 12, 'normal');
smo38984.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38982.addModifier(smo38984);
smo38984.addClass('lyric lyric-1 lyric-hyphen');
smo39006v0ar.push(smo38982);
const smo38985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo38985'] = smo38985;
smo38985.setAttribute('id', 'smo38985');
const smo38986 = new VF.Annotation('ich');
smo38986.setAttribute('id', 'smo38986');
smo38986.setFont('Merriweather', 12, 'normal');
smo38986.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38985.addModifier(smo38986);
smo38986.addClass('lyric lyric-0');
const smo38987 = new VF.Annotation('re');
smo38987.setAttribute('id', 'smo38987');
smo38987.setFont('Merriweather', 12, 'normal');
smo38987.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38985.addModifier(smo38987);
smo38987.addClass('lyric lyric-1');
smo39006v0ar.push(smo38985);
const smo38988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo38988'] = smo38988;
smo38988.setAttribute('id', 'smo38988');
const smo38989 = new VF.Annotation('ihn');
smo38989.setAttribute('id', 'smo38989');
smo38989.setFont('Merriweather', 12, 'normal');
smo38989.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38988.addModifier(smo38989);
smo38989.addClass('lyric lyric-0');
const smo38990 = new VF.Annotation('sein');
smo38990.setAttribute('id', 'smo38990');
smo38990.setFont('Merriweather', 12, 'normal');
smo38990.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38988.addModifier(smo38990);
smo38990.addClass('lyric lyric-1');
smo39006v0ar.push(smo38988);
smo39006v0.addTickables(smo39006v0ar)
fmtsmo3900647.joinVoices([smo39006v0]);
const fmtsmo4015347 = new VF.Formatter();
//
// voices and notes for stave 1 47
const smo40153v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40153v0ar = [];
const smo40135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo40135'] = smo40135;
smo40135.setAttribute('id', 'smo40135');
smo40135.addModifier(new VF.Dot(), 0);
smo40153v0ar.push(smo40135);
smo40153v0.addTickables(smo40153v0ar)
fmtsmo4015347.joinVoices([smo40153v0]);
const smo40153v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40153v1ar = [];
const smo40136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/6/n"]}'))
noteHash['smo40136'] = smo40136;
smo40136.setAttribute('id', 'smo40136');
smo40136.setStyle({ fillStyle: "#115511" });
smo40136.addModifier(new VF.Dot(), 0);
smo40153v1ar.push(smo40136);
const smo40137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/5/r"]}'))
noteHash['smo40137'] = smo40137;
smo40137.setAttribute('id', 'smo40137');
smo40137.setStyle({ fillStyle: "#115511" });
smo40137.addModifier(new VF.Dot(), 0);
smo40153v1ar.push(smo40137);
smo40153v1.addTickables(smo40153v1ar)
fmtsmo4015347.joinVoices([smo40153v1]);
const fmtsmo4138547 = new VF.Formatter();
//
// voices and notes for stave 2 47
const smo41385v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41385v0ar = [];
const smo41366 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo41366'] = smo41366;
smo41366.setAttribute('id', 'smo41366');
smo41385v0ar.push(smo41366);
const smo41367 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo41367'] = smo41367;
smo41367.setAttribute('id', 'smo41367');
smo41385v0ar.push(smo41367);
const smo41368 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo41368'] = smo41368;
smo41368.setAttribute('id', 'smo41368');
smo41385v0ar.push(smo41368);
const smo41369 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo41369'] = smo41369;
smo41369.setAttribute('id', 'smo41369');
smo41385v0ar.push(smo41369);
smo41385v0.addTickables(smo41385v0ar)
fmtsmo4138547.joinVoices([smo41385v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
const dirsmo47954 = smo38982.getStemDirection();
smo38982.setStemDirection(dirsmo47954);
smo38985.setStemDirection(dirsmo47954);
smo38988.setStemDirection(dirsmo47954);
const smo47954 = new VF.Beam([smo38982,smo38985,smo38988]);
 
// formatting measures in staff group smo41649
fmtsmo3900647.format([smo39006v0,smo40153v0,smo40153v1,smo41385v0], 275);
const stavesmo39006 = new VF.Stave(921, 98.0266026666668, 289);
stavesmo39006.setAttribute('id', 'stavesmo39006');
stavesmo39006.setBegBarType(VF.Barline.type.NONE);
stavesmo39006.setContext(context);
stavesmo39006.draw();
smo39006v0.draw(context, stavesmo39006);
smo47954.setContext(context);
smo47954.draw();
const stavesmo40153 = new VF.Stave(921, 280.0266026666668, 289);
stavesmo40153.setAttribute('id', 'stavesmo40153');
stavesmo40153.setBegBarType(VF.Barline.type.NONE);
stavesmo40153.setContext(context);
stavesmo40153.draw();
smo40153v0.draw(context, stavesmo40153);
smo40153v1.draw(context, stavesmo40153);
const stavesmo41385 = new VF.Stave(921, 386.0266026666668, 289);
stavesmo41385.setAttribute('id', 'stavesmo41385');
stavesmo41385.setBegBarType(VF.Barline.type.NONE);
stavesmo41385.setContext(context);
stavesmo41385.draw();
smo41385v0.draw(context, stavesmo41385);
const rightsmo41649stavesmo390062 = new VF.StaveConnector(stavesmo39006, stavesmo41385).setType(0);
rightsmo41649stavesmo390062.setContext(context).draw();
const fmtsmo3902548 = new VF.Formatter();
//
// voices and notes for stave 0 48
const smo39025v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39025v0ar = [];
const smo39007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39007'] = smo39007;
smo39007.setAttribute('id', 'smo39007');
smo39007.addModifier(new VF.Dot(), 0);
const smo39008 = new VF.Annotation('schon');
smo39008.setAttribute('id', 'smo39008');
smo39008.setFont('Merriweather', 12, 'normal');
smo39008.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39007.addModifier(smo39008);
smo39008.addClass('lyric lyric-0');
const smo39009 = new VF.Annotation('Lied!');
smo39009.setAttribute('id', 'smo39009');
smo39009.setFont('Merriweather', 12, 'normal');
smo39009.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39007.addModifier(smo39009);
smo39009.addClass('lyric lyric-1');
smo39025v0ar.push(smo39007);
smo39025v0.addTickables(smo39025v0ar)
fmtsmo3902548.joinVoices([smo39025v0]);
const fmtsmo4017548 = new VF.Formatter();
//
// voices and notes for stave 1 48
const smo40175v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40175v0ar = [];
const smo40154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo40154'] = smo40154;
smo40154.setAttribute('id', 'smo40154');
smo40154.addModifier(new VF.Dot(), 0);
smo40175v0ar.push(smo40154);
const smo40155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo40155'] = smo40155;
smo40155.setAttribute('id', 'smo40155');
smo40175v0ar.push(smo40155);
const smo40156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo40156'] = smo40156;
smo40156.setAttribute('id', 'smo40156');
smo40175v0ar.push(smo40156);
smo40175v0.addTickables(smo40175v0ar)
fmtsmo4017548.joinVoices([smo40175v0]);
const smo40175v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40175v1ar = [];
const smo40157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/5/r"]}'))
noteHash['smo40157'] = smo40157;
smo40157.setAttribute('id', 'smo40157');
smo40157.setStyle({ fillStyle: "#115511" });
smo40157.addModifier(new VF.Dot(), 0);
smo40175v1ar.push(smo40157);
const smo40158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo40158'] = smo40158;
smo40158.setAttribute('id', 'smo40158');
smo40158.setStyle({ fillStyle: "#115511" });
smo40175v1ar.push(smo40158);
const smo40159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo40159'] = smo40159;
smo40159.setAttribute('id', 'smo40159');
smo40159.setStyle({ fillStyle: "#115511" });
smo40175v1ar.push(smo40159);
smo40175v1.addTickables(smo40175v1ar)
fmtsmo4017548.joinVoices([smo40175v1]);
const fmtsmo4140548 = new VF.Formatter();
//
// voices and notes for stave 2 48
const smo41405v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41405v0ar = [];
const smo41386 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo41386'] = smo41386;
smo41386.setAttribute('id', 'smo41386');
smo41405v0ar.push(smo41386);
const smo41387 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo41387'] = smo41387;
smo41387.setAttribute('id', 'smo41387');
smo41405v0ar.push(smo41387);
const smo41388 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo41388'] = smo41388;
smo41388.setAttribute('id', 'smo41388');
smo41405v0ar.push(smo41388);
const smo41389 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo41389'] = smo41389;
smo41389.setAttribute('id', 'smo41389');
smo41405v0ar.push(smo41389);
smo41405v0.addTickables(smo41405v0ar)
fmtsmo4140548.joinVoices([smo41405v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3902548.format([smo39025v0,smo40175v0,smo40175v1,smo41405v0], 152);
const stavesmo39025 = new VF.Stave(66, 516.0266026666668, 226);
stavesmo39025.setAttribute('id', 'stavesmo39025');
stavesmo39025.setBegBarType(1);
stavesmo39025.addClef('treble');
const keysmo39025 = new VF.KeySignature('G');
keysmo39025.addToStave(stavesmo39025);
stavesmo39025.setContext(context);
stavesmo39025.draw();
smo39025v0.draw(context, stavesmo39025);
const stavesmo40175 = new VF.Stave(66, 688.0266026666668, 226);
stavesmo40175.setAttribute('id', 'stavesmo40175');
stavesmo40175.setBegBarType(1);
stavesmo40175.addClef('treble');
const keysmo40175 = new VF.KeySignature('G');
keysmo40175.addToStave(stavesmo40175);
stavesmo40175.setContext(context);
stavesmo40175.draw();
smo40175v0.draw(context, stavesmo40175);
smo40175v1.draw(context, stavesmo40175);
const stavesmo41405 = new VF.Stave(66, 780.0266026666668, 226);
stavesmo41405.setAttribute('id', 'stavesmo41405');
stavesmo41405.setBegBarType(1);
stavesmo41405.addClef('bass');
const keysmo41405 = new VF.KeySignature('G');
keysmo41405.addToStave(stavesmo41405);
stavesmo41405.setContext(context);
stavesmo41405.draw();
smo41405v0.draw(context, stavesmo41405);
const leftsmo41649stavesmo390252 = new VF.StaveConnector(stavesmo39025, stavesmo41405).setType(1);
leftsmo41649stavesmo390252.setContext(context).draw();
const fmtsmo3905549 = new VF.Formatter();
//
// voices and notes for stave 0 49
const smo39055v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39055v0ar = [];
const smo39026 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39026'] = smo39026;
smo39026.setAttribute('id', 'smo39026');
const smo39027 = new VF.Annotation('-');
smo39027.setAttribute('id', 'smo39027');
smo39027.setFont('Merriweather', 12, 'normal');
smo39027.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39026.addModifier(smo39027);
smo39027.addClass('lyric lyric-0 lyric-hyphen');
smo39055v0ar.push(smo39026);
const smo39028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo39028'] = smo39028;
smo39028.setAttribute('id', 'smo39028');
const smo39029 = new VF.Annotation('denn');
smo39029.setAttribute('id', 'smo39029');
smo39029.setFont('Merriweather', 12, 'normal');
smo39029.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39028.addModifier(smo39029);
smo39029.addClass('lyric lyric-0');
const smo39030 = new VF.Annotation('Es');
smo39030.setAttribute('id', 'smo39030');
smo39030.setFont('Merriweather', 12, 'normal');
smo39030.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39028.addModifier(smo39030);
smo39030.addClass('lyric lyric-1');
smo39055v0ar.push(smo39028);
const smo39031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo39031'] = smo39031;
smo39031.setAttribute('id', 'smo39031');
const smo39032 = new VF.Annotation('all');
smo39032.setAttribute('id', 'smo39032');
smo39032.setFont('Merriweather', 12, 'normal');
smo39032.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39031.addModifier(smo39032);
smo39032.addClass('lyric lyric-0');
const smo39033 = new VF.Annotation('soli');
smo39033.setAttribute('id', 'smo39033');
smo39033.setFont('Merriweather', 12, 'normal');
smo39033.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39031.addModifier(smo39033);
smo39033.addClass('lyric lyric-1');
smo39055v0ar.push(smo39031);
const smo39034 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo39034'] = smo39034;
smo39034.setAttribute('id', 'smo39034');
const smo39035 = new VF.Annotation('sei');
smo39035.setAttribute('id', 'smo39035');
smo39035.setFont('Merriweather', 12, 'normal');
smo39035.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39034.addModifier(smo39035);
smo39035.addClass('lyric lyric-0 lyric-hyphen');
const smo39036 = new VF.Annotation('zu');
smo39036.setAttribute('id', 'smo39036');
smo39036.setFont('Merriweather', 12, 'normal');
smo39036.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39034.addModifier(smo39036);
smo39036.addClass('lyric lyric-1 lyric-hyphen');
smo39055v0ar.push(smo39034);
const smo39037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo39037'] = smo39037;
smo39037.setAttribute('id', 'smo39037');
const smo39038 = new VF.Annotation('ne');
smo39038.setAttribute('id', 'smo39038');
smo39038.setFont('Merriweather', 12, 'normal');
smo39038.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39037.addModifier(smo39038);
smo39038.addClass('lyric lyric-0');
const smo39039 = new VF.Annotation('mir');
smo39039.setAttribute('id', 'smo39039');
smo39039.setFont('Merriweather', 12, 'normal');
smo39039.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39037.addModifier(smo39039);
smo39039.addClass('lyric lyric-1');
smo39055v0ar.push(smo39037);
smo39055v0.addTickables(smo39055v0ar)
fmtsmo3905549.joinVoices([smo39055v0]);
const fmtsmo4019349 = new VF.Formatter();
//
// voices and notes for stave 1 49
const smo40193v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40193v0ar = [];
const smo40176 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo40176'] = smo40176;
smo40176.setAttribute('id', 'smo40176');
smo40176.addModifier(new VF.Dot(), 0);
smo40193v0ar.push(smo40176);
smo40193v0.addTickables(smo40193v0ar)
fmtsmo4019349.joinVoices([smo40193v0]);
const smo40193v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40193v1ar = [];
const smo40177 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/6/n"]}'))
noteHash['smo40177'] = smo40177;
smo40177.setAttribute('id', 'smo40177');
smo40177.setStyle({ fillStyle: "#115511" });
smo40177.addModifier(new VF.Dot(), 0);
smo40193v1ar.push(smo40177);
smo40193v1.addTickables(smo40193v1ar)
fmtsmo4019349.joinVoices([smo40193v1]);
const fmtsmo4142549 = new VF.Formatter();
//
// voices and notes for stave 2 49
const smo41425v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41425v0ar = [];
const smo41406 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo41406'] = smo41406;
smo41406.setAttribute('id', 'smo41406');
smo41425v0ar.push(smo41406);
const smo41407 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo41407'] = smo41407;
smo41407.setAttribute('id', 'smo41407');
smo41425v0ar.push(smo41407);
const smo41408 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo41408'] = smo41408;
smo41408.setAttribute('id', 'smo41408');
smo41425v0ar.push(smo41408);
const smo41409 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo41409'] = smo41409;
smo41409.setAttribute('id', 'smo41409');
smo41425v0ar.push(smo41409);
smo41425v0.addTickables(smo41425v0ar)
fmtsmo4142549.joinVoices([smo41425v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
const dirsmo47974 = smo39031.getStemDirection();
smo39031.setStemDirection(dirsmo47974);
smo39034.setStemDirection(dirsmo47974);
smo39037.setStemDirection(dirsmo47974);
const smo47974 = new VF.Beam([smo39031,smo39034,smo39037]);
 
// formatting measures in staff group smo41649
fmtsmo3905549.format([smo39055v0,smo40193v0,smo40193v1,smo41425v0], 271);
const stavesmo39055 = new VF.Stave(292, 516.0266026666668, 285);
stavesmo39055.setAttribute('id', 'stavesmo39055');
stavesmo39055.setBegBarType(VF.Barline.type.NONE);
stavesmo39055.setContext(context);
stavesmo39055.draw();
smo39055v0.draw(context, stavesmo39055);
smo47974.setContext(context);
smo47974.draw();
const stavesmo40193 = new VF.Stave(292, 688.0266026666668, 285);
stavesmo40193.setAttribute('id', 'stavesmo40193');
stavesmo40193.setBegBarType(VF.Barline.type.NONE);
stavesmo40193.setContext(context);
stavesmo40193.draw();
smo40193v0.draw(context, stavesmo40193);
smo40193v1.draw(context, stavesmo40193);
const stavesmo41425 = new VF.Stave(292, 780.0266026666668, 285);
stavesmo41425.setAttribute('id', 'stavesmo41425');
stavesmo41425.setBegBarType(VF.Barline.type.NONE);
stavesmo41425.setContext(context);
stavesmo41425.draw();
smo41425v0.draw(context, stavesmo41425);
const fmtsmo3907750 = new VF.Formatter();
//
// voices and notes for stave 0 50
const smo39077v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39077v0ar = [];
const smo39056 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo39056'] = smo39056;
smo39056.setAttribute('id', 'smo39056');
smo39056.addModifier(new VF.Dot(), 0);
const smo39057 = new VF.Annotation('Lie');
smo39057.setAttribute('id', 'smo39057');
smo39057.setFont('Merriweather', 12, 'normal');
smo39057.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39056.addModifier(smo39057);
smo39057.addClass('lyric lyric-0 lyric-hyphen');
const smo39058 = new VF.Annotation('so');
smo39058.setAttribute('id', 'smo39058');
smo39058.setFont('Merriweather', 12, 'normal');
smo39058.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39056.addModifier(smo39058);
smo39058.addClass('lyric lyric-1 lyric-hyphen');
smo39077v0ar.push(smo39056);
const smo39059 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39059'] = smo39059;
smo39059.setAttribute('id', 'smo39059');
smo39059.addModifier(new VF.Dot(), 0);
const smo39060 = new VF.Annotation('der');
smo39060.setAttribute('id', 'smo39060');
smo39060.setFont('Merriweather', 12, 'normal');
smo39060.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39059.addModifier(smo39060);
smo39060.addClass('lyric lyric-0');
const smo39061 = new VF.Annotation('gen');
smo39061.setAttribute('id', 'smo39061');
smo39061.setFont('Merriweather', 12, 'normal');
smo39061.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39059.addModifier(smo39061);
smo39061.addClass('lyric lyric-1');
smo39077v0ar.push(smo39059);
smo39077v0.addTickables(smo39077v0ar)
fmtsmo3907750.joinVoices([smo39077v0]);
const fmtsmo4021150 = new VF.Formatter();
//
// voices and notes for stave 1 50
const smo40211v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40211v0ar = [];
const smo40194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo40194'] = smo40194;
smo40194.setAttribute('id', 'smo40194');
smo40194.addModifier(new VF.Dot(), 0);
smo40211v0ar.push(smo40194);
const smo40195 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n","dn/5/n"]}'))
noteHash['smo40195'] = smo40195;
smo40195.setAttribute('id', 'smo40195');
smo40195.addModifier(new VF.Dot(), 0);
smo40195.addModifier(new VF.Dot(), 1);
smo40211v0ar.push(smo40195);
smo40211v0.addTickables(smo40211v0ar)
fmtsmo4021150.joinVoices([smo40211v0]);
const fmtsmo4144550 = new VF.Formatter();
//
// voices and notes for stave 2 50
const smo41445v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41445v0ar = [];
const smo41426 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo41426'] = smo41426;
smo41426.setAttribute('id', 'smo41426');
smo41445v0ar.push(smo41426);
const smo41427 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo41427'] = smo41427;
smo41427.setAttribute('id', 'smo41427');
smo41445v0ar.push(smo41427);
const smo41428 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","cn/4/n"]}'))
noteHash['smo41428'] = smo41428;
smo41428.setAttribute('id', 'smo41428');
smo41445v0ar.push(smo41428);
const smo41429 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","cn/4/n"]}'))
noteHash['smo41429'] = smo41429;
smo41429.setAttribute('id', 'smo41429');
smo41445v0ar.push(smo41429);
smo41445v0.addTickables(smo41445v0ar)
fmtsmo4144550.joinVoices([smo41445v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3907750.format([smo39077v0,smo40211v0,smo41445v0], 149);
const stavesmo39077 = new VF.Stave(577, 516.0266026666668, 163);
stavesmo39077.setAttribute('id', 'stavesmo39077');
stavesmo39077.setBegBarType(VF.Barline.type.NONE);
stavesmo39077.setContext(context);
stavesmo39077.draw();
smo39077v0.draw(context, stavesmo39077);
const stavesmo40211 = new VF.Stave(577, 688.0266026666668, 163);
stavesmo40211.setAttribute('id', 'stavesmo40211');
stavesmo40211.setBegBarType(VF.Barline.type.NONE);
stavesmo40211.setContext(context);
stavesmo40211.draw();
smo40211v0.draw(context, stavesmo40211);
const stavesmo41445 = new VF.Stave(577, 780.0266026666668, 163);
stavesmo41445.setAttribute('id', 'stavesmo41445');
stavesmo41445.setBegBarType(VF.Barline.type.NONE);
stavesmo41445.setContext(context);
stavesmo41445.draw();
smo41445v0.draw(context, stavesmo41445);
const fmtsmo3909951 = new VF.Formatter();
//
// voices and notes for stave 0 51
const smo39099v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39099v0ar = [];
const smo39078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39078'] = smo39078;
smo39078.setAttribute('id', 'smo39078');
smo39078.addModifier(new VF.Dot(), 0);
const smo39079 = new VF.Annotation('-');
smo39079.setAttribute('id', 'smo39079');
smo39079.setFont('Merriweather', 12, 'normal');
smo39079.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39078.addModifier(smo39079);
smo39079.addClass('lyric lyric-0 lyric-hyphen');
smo39099v0ar.push(smo39078);
const smo39080 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo39080'] = smo39080;
smo39080.setAttribute('id', 'smo39080');
smo39099v0ar.push(smo39080);
const smo39081 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo39081'] = smo39081;
smo39081.setAttribute('id', 'smo39081');
const smo39082 = new VF.Annotation('sie');
smo39082.setAttribute('id', 'smo39082');
smo39082.setFont('Merriweather', 12, 'normal');
smo39082.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39081.addModifier(smo39082);
smo39082.addClass('lyric lyric-0');
const smo39083 = new VF.Annotation('Ich');
smo39083.setAttribute('id', 'smo39083');
smo39083.setFont('Merriweather', 12, 'normal');
smo39083.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39081.addModifier(smo39083);
smo39083.addClass('lyric lyric-1');
smo39099v0ar.push(smo39081);
smo39099v0.addTickables(smo39099v0ar)
fmtsmo3909951.joinVoices([smo39099v0]);
const fmtsmo4022851 = new VF.Formatter();
//
// voices and notes for stave 1 51
const smo40228v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40228v0ar = [];
const smo40212 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n","dn/5/n"]}'))
noteHash['smo40212'] = smo40212;
smo40212.setAttribute('id', 'smo40212');
smo40212.addModifier(new VF.Dot(), 0);
smo40212.addModifier(new VF.Dot(), 1);
smo40228v0ar.push(smo40212);
smo40228v0.addTickables(smo40228v0ar)
fmtsmo4022851.joinVoices([smo40228v0]);
const fmtsmo4146251 = new VF.Formatter();
//
// voices and notes for stave 2 51
const smo41462v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41462v0ar = [];
const smo41446 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n","cn/4/n"]}'))
noteHash['smo41446'] = smo41446;
smo41446.setAttribute('id', 'smo41446');
smo41446.addModifier(new VF.Dot(), 0);
smo41446.addModifier(new VF.Dot(), 1);
smo41462v0ar.push(smo41446);
smo41462v0.addTickables(smo41462v0ar)
fmtsmo4146251.joinVoices([smo41462v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3909951.format([smo39099v0,smo40228v0,smo41462v0], 116);
const stavesmo39099 = new VF.Stave(740, 516.0266026666668, 130);
stavesmo39099.setAttribute('id', 'stavesmo39099');
stavesmo39099.setBegBarType(VF.Barline.type.NONE);
stavesmo39099.setContext(context);
stavesmo39099.draw();
smo39099v0.draw(context, stavesmo39099);
const stavesmo40228 = new VF.Stave(740, 688.0266026666668, 130);
stavesmo40228.setAttribute('id', 'stavesmo40228');
stavesmo40228.setBegBarType(VF.Barline.type.NONE);
stavesmo40228.setContext(context);
stavesmo40228.draw();
smo40228v0.draw(context, stavesmo40228);
const stavesmo41462 = new VF.Stave(740, 780.0266026666668, 130);
stavesmo41462.setAttribute('id', 'stavesmo41462');
stavesmo41462.setBegBarType(VF.Barline.type.NONE);
stavesmo41462.setContext(context);
stavesmo41462.draw();
smo41462v0.draw(context, stavesmo41462);
const fmtsmo3912752 = new VF.Formatter();
//
// voices and notes for stave 0 52
const smo39127v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39127v0ar = [];
const smo39100 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo39100'] = smo39100;
smo39100.setAttribute('id', 'smo39100');
const smo39101 = new VF.Annotation('sind');
smo39101.setAttribute('id', 'smo39101');
smo39101.setFont('Merriweather', 12, 'normal');
smo39101.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39100.addModifier(smo39101);
smo39101.addClass('lyric lyric-0');
const smo39102 = new VF.Annotation('bin');
smo39102.setAttribute('id', 'smo39102');
smo39102.setFont('Merriweather', 12, 'normal');
smo39102.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39100.addModifier(smo39102);
smo39102.addClass('lyric lyric-1');
smo39127v0ar.push(smo39100);
const smo39103 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo39103'] = smo39103;
smo39103.setAttribute('id', 'smo39103');
const smo39104 = new VF.Annotation('mir');
smo39104.setAttribute('id', 'smo39104');
smo39104.setFont('Merriweather', 12, 'normal');
smo39104.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39103.addModifier(smo39104);
smo39104.addClass('lyric lyric-0');
const smo39105 = new VF.Annotation('wie');
smo39105.setAttribute('id', 'smo39105');
smo39105.setFont('Merriweather', 12, 'normal');
smo39105.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39103.addModifier(smo39105);
smo39105.addClass('lyric lyric-1 lyric-hyphen');
smo39127v0ar.push(smo39103);
const smo39106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo39106'] = smo39106;
smo39106.setAttribute('id', 'smo39106');
const smo39107 = new VF.Annotation('be');
smo39107.setAttribute('id', 'smo39107');
smo39107.setFont('Merriweather', 12, 'normal');
smo39107.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39106.addModifier(smo39107);
smo39107.addClass('lyric lyric-0 lyric-hyphen');
const smo39108 = new VF.Annotation('der');
smo39108.setAttribute('id', 'smo39108');
smo39108.setFont('Merriweather', 12, 'normal');
smo39108.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39106.addModifier(smo39108);
smo39108.addClass('lyric lyric-1');
smo39127v0ar.push(smo39106);
const smo39109 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo39109'] = smo39109;
smo39109.setAttribute('id', 'smo39109');
smo39109.addModifier(new VF.Dot(), 0);
const smo39110 = new VF.Annotation('kannt!');
smo39110.setAttribute('id', 'smo39110');
smo39110.setFont('Merriweather', 12, 'normal');
smo39110.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39109.addModifier(smo39110);
smo39110.addClass('lyric lyric-0');
const smo39111 = new VF.Annotation('da!');
smo39111.setAttribute('id', 'smo39111');
smo39111.setFont('Merriweather', 12, 'normal');
smo39111.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39109.addModifier(smo39111);
smo39111.addClass('lyric lyric-1');
smo39127v0ar.push(smo39109);
smo39127v0.addTickables(smo39127v0ar)
fmtsmo3912752.joinVoices([smo39127v0]);
const fmtsmo4024552 = new VF.Formatter();
//
// voices and notes for stave 1 52
const smo40245v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40245v0ar = [];
const smo40229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n","cn/5/n"]}'))
noteHash['smo40229'] = smo40229;
smo40229.setAttribute('id', 'smo40229');
smo40229.addModifier(new VF.Dot(), 0);
smo40229.addModifier(new VF.Dot(), 1);
smo40245v0ar.push(smo40229);
smo40245v0.addTickables(smo40245v0ar)
fmtsmo4024552.joinVoices([smo40245v0]);
const fmtsmo4147952 = new VF.Formatter();
//
// voices and notes for stave 2 52
const smo41479v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41479v0ar = [];
const smo41463 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo41463'] = smo41463;
smo41463.setAttribute('id', 'smo41463');
smo41463.addModifier(new VF.Dot(), 0);
smo41479v0ar.push(smo41463);
smo41479v0.addTickables(smo41479v0ar)
fmtsmo4147952.joinVoices([smo41479v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
const dirsmo47993 = smo39100.getStemDirection();
smo39100.setStemDirection(dirsmo47993);
smo39103.setStemDirection(dirsmo47993);
smo39106.setStemDirection(dirsmo47993);
const smo47993 = new VF.Beam([smo39100,smo39103,smo39106]);
 
// formatting measures in staff group smo41649
fmtsmo3912752.format([smo39127v0,smo40245v0,smo41479v0], 254);
const stavesmo39127 = new VF.Stave(870, 516.0266026666668, 268);
stavesmo39127.setAttribute('id', 'stavesmo39127');
stavesmo39127.setBegBarType(VF.Barline.type.NONE);
stavesmo39127.setContext(context);
stavesmo39127.draw();
smo39127v0.draw(context, stavesmo39127);
smo47993.setContext(context);
smo47993.draw();
const stavesmo40245 = new VF.Stave(870, 688.0266026666668, 268);
stavesmo40245.setAttribute('id', 'stavesmo40245');
stavesmo40245.setBegBarType(VF.Barline.type.NONE);
stavesmo40245.setContext(context);
stavesmo40245.draw();
smo40245v0.draw(context, stavesmo40245);
const stavesmo41479 = new VF.Stave(870, 780.0266026666668, 268);
stavesmo41479.setAttribute('id', 'stavesmo41479');
stavesmo41479.setBegBarType(VF.Barline.type.NONE);
stavesmo41479.setContext(context);
stavesmo41479.draw();
smo41479v0.draw(context, stavesmo41479);
const fmtsmo3914553 = new VF.Formatter();
//
// voices and notes for stave 0 53
const smo39145v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39145v0ar = [];
const smo39128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo39128'] = smo39128;
smo39128.setAttribute('id', 'smo39128');
smo39128.addModifier(new VF.Dot(), 0);
const smo39129 = new VF.Annotation('-');
smo39129.setAttribute('id', 'smo39129');
smo39129.setFont('Merriweather', 12, 'normal');
smo39129.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39128.addModifier(smo39129);
smo39129.addClass('lyric lyric-0 lyric-hyphen');
smo39145v0ar.push(smo39128);
smo39145v0.addTickables(smo39145v0ar)
fmtsmo3914553.joinVoices([smo39145v0]);
const fmtsmo4026253 = new VF.Formatter();
//
// voices and notes for stave 1 53
const smo40262v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40262v0ar = [];
const smo40246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n","cn/5/n"]}'))
noteHash['smo40246'] = smo40246;
smo40246.setAttribute('id', 'smo40246');
smo40246.addModifier(new VF.Dot(), 0);
smo40246.addModifier(new VF.Dot(), 1);
smo40262v0ar.push(smo40246);
smo40262v0.addTickables(smo40262v0ar)
fmtsmo4026253.joinVoices([smo40262v0]);
const fmtsmo4149653 = new VF.Formatter();
//
// voices and notes for stave 2 53
const smo41496v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41496v0ar = [];
const smo41480 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo41480'] = smo41480;
smo41480.setAttribute('id', 'smo41480');
smo41480.addModifier(new VF.Dot(), 0);
smo41496v0ar.push(smo41480);
smo41496v0.addTickables(smo41496v0ar)
fmtsmo4149653.joinVoices([smo41496v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3914553.format([smo39145v0,smo40262v0,smo41496v0], 58);
const stavesmo39145 = new VF.Stave(1138, 516.0266026666668, 72);
stavesmo39145.setAttribute('id', 'stavesmo39145');
stavesmo39145.setBegBarType(VF.Barline.type.NONE);
stavesmo39145.setContext(context);
stavesmo39145.draw();
smo39145v0.draw(context, stavesmo39145);
const stavesmo40262 = new VF.Stave(1138, 688.0266026666668, 72);
stavesmo40262.setAttribute('id', 'stavesmo40262');
stavesmo40262.setBegBarType(VF.Barline.type.NONE);
stavesmo40262.setContext(context);
stavesmo40262.draw();
smo40262v0.draw(context, stavesmo40262);
const stavesmo41496 = new VF.Stave(1138, 780.0266026666668, 72);
stavesmo41496.setAttribute('id', 'stavesmo41496');
stavesmo41496.setBegBarType(VF.Barline.type.NONE);
stavesmo41496.setContext(context);
stavesmo41496.draw();
smo41496v0.draw(context, stavesmo41496);
const rightsmo41649stavesmo391452 = new VF.StaveConnector(stavesmo39145, stavesmo41496).setType(0);
rightsmo41649stavesmo391452.setContext(context).draw();
const fmtsmo3916454 = new VF.Formatter();
//
// voices and notes for stave 0 54
const smo39164v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39164v0ar = [];
const smo39146 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo39146'] = smo39146;
smo39146.setAttribute('id', 'smo39146');
smo39146.addModifier(new VF.Dot(), 0);
const smo39147 = new VF.Annotation('-');
smo39147.setAttribute('id', 'smo39147');
smo39147.setFont('Merriweather', 12, 'normal');
smo39147.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39146.addModifier(smo39147);
smo39147.addClass('lyric lyric-0 lyric-hyphen');
smo39164v0ar.push(smo39146);
smo39164v0.addTickables(smo39164v0ar)
fmtsmo3916454.joinVoices([smo39164v0]);
const fmtsmo4028354 = new VF.Formatter();
//
// voices and notes for stave 1 54
const smo40283v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40283v0ar = [];
const smo40263 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo40263'] = smo40263;
smo40263.setAttribute('id', 'smo40263');
smo40283v0ar.push(smo40263);
const smo40264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo40264'] = smo40264;
smo40264.setAttribute('id', 'smo40264');
smo40283v0ar.push(smo40264);
const smo40265 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo40265'] = smo40265;
smo40265.setAttribute('id', 'smo40265');
smo40283v0ar.push(smo40265);
const smo40266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo40266'] = smo40266;
smo40266.setAttribute('id', 'smo40266');
smo40283v0ar.push(smo40266);
smo40283v0.addTickables(smo40283v0ar)
fmtsmo4028354.joinVoices([smo40283v0]);
const fmtsmo4151754 = new VF.Formatter();
//
// voices and notes for stave 2 54
const smo41517v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41517v0ar = [];
const smo41497 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41497'] = smo41497;
smo41497.setAttribute('id', 'smo41497');
smo41517v0ar.push(smo41497);
const smo41498 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41498'] = smo41498;
smo41498.setAttribute('id', 'smo41498');
smo41517v0ar.push(smo41498);
const smo41499 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41499'] = smo41499;
smo41499.setAttribute('id', 'smo41499');
smo41517v0ar.push(smo41499);
const smo41500 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41500'] = smo41500;
smo41500.setAttribute('id', 'smo41500');
smo41517v0ar.push(smo41500);
smo41517v0.addTickables(smo41517v0ar)
fmtsmo4151754.joinVoices([smo41517v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3916454.format([smo39164v0,smo40283v0,smo41517v0], 111);
const stavesmo39164 = new VF.Stave(66, 909.0266026666668, 185);
stavesmo39164.setAttribute('id', 'stavesmo39164');
stavesmo39164.setBegBarType(1);
stavesmo39164.addClef('treble');
const keysmo39164 = new VF.KeySignature('G');
keysmo39164.addToStave(stavesmo39164);
stavesmo39164.setContext(context);
stavesmo39164.draw();
smo39164v0.draw(context, stavesmo39164);
const stavesmo40283 = new VF.Stave(66, 1030.0266026666668, 185);
stavesmo40283.setAttribute('id', 'stavesmo40283');
stavesmo40283.setBegBarType(1);
stavesmo40283.addClef('treble');
const keysmo40283 = new VF.KeySignature('G');
keysmo40283.addToStave(stavesmo40283);
stavesmo40283.setContext(context);
stavesmo40283.draw();
smo40283v0.draw(context, stavesmo40283);
const stavesmo41517 = new VF.Stave(66, 1106.0266026666668, 185);
stavesmo41517.setAttribute('id', 'stavesmo41517');
stavesmo41517.setBegBarType(1);
stavesmo41517.addClef('bass');
const keysmo41517 = new VF.KeySignature('G');
keysmo41517.addToStave(stavesmo41517);
stavesmo41517.setContext(context);
stavesmo41517.draw();
smo41517v0.draw(context, stavesmo41517);
const leftsmo41649stavesmo391642 = new VF.StaveConnector(stavesmo39164, stavesmo41517).setType(1);
leftsmo41649stavesmo391642.setContext(context).draw();
const fmtsmo3918155 = new VF.Formatter();
//
// voices and notes for stave 0 55
const smo39181v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39181v0ar = [];
const smo39165 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo39165'] = smo39165;
smo39165.setAttribute('id', 'smo39165');
smo39165.addModifier(new VF.Dot(), 0);
smo39181v0ar.push(smo39165);
smo39181v0.addTickables(smo39181v0ar)
fmtsmo3918155.joinVoices([smo39181v0]);
const fmtsmo4030355 = new VF.Formatter();
//
// voices and notes for stave 1 55
const smo40303v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40303v0ar = [];
const smo40284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo40284'] = smo40284;
smo40284.setAttribute('id', 'smo40284');
smo40303v0ar.push(smo40284);
const smo40285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo40285'] = smo40285;
smo40285.setAttribute('id', 'smo40285');
smo40303v0ar.push(smo40285);
const smo40286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo40286'] = smo40286;
smo40286.setAttribute('id', 'smo40286');
smo40303v0ar.push(smo40286);
const smo40287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo40287'] = smo40287;
smo40287.setAttribute('id', 'smo40287');
smo40303v0ar.push(smo40287);
smo40303v0.addTickables(smo40303v0ar)
fmtsmo4030355.joinVoices([smo40303v0]);
const fmtsmo4153755 = new VF.Formatter();
//
// voices and notes for stave 2 55
const smo41537v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41537v0ar = [];
const smo41518 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41518'] = smo41518;
smo41518.setAttribute('id', 'smo41518');
smo41537v0ar.push(smo41518);
const smo41519 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41519'] = smo41519;
smo41519.setAttribute('id', 'smo41519');
smo41537v0ar.push(smo41519);
const smo41520 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41520'] = smo41520;
smo41520.setAttribute('id', 'smo41520');
smo41537v0ar.push(smo41520);
const smo41521 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41521'] = smo41521;
smo41521.setAttribute('id', 'smo41521');
smo41537v0ar.push(smo41521);
smo41537v0.addTickables(smo41537v0ar)
fmtsmo4153755.joinVoices([smo41537v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3918155.format([smo39181v0,smo40303v0,smo41537v0], 106);
const stavesmo39181 = new VF.Stave(251, 909.0266026666668, 124);
stavesmo39181.setAttribute('id', 'stavesmo39181');
stavesmo39181.setBegBarType(VF.Barline.type.NONE);
stavesmo39181.setEndBarType(5);
stavesmo39181.setContext(context);
stavesmo39181.draw();
smo39181v0.draw(context, stavesmo39181);
const stavesmo40303 = new VF.Stave(251, 1030.0266026666668, 124);
stavesmo40303.setAttribute('id', 'stavesmo40303');
stavesmo40303.setBegBarType(VF.Barline.type.NONE);
stavesmo40303.setEndBarType(5);
stavesmo40303.setContext(context);
stavesmo40303.draw();
smo40303v0.draw(context, stavesmo40303);
const stavesmo41537 = new VF.Stave(251, 1106.0266026666668, 124);
stavesmo41537.setAttribute('id', 'stavesmo41537');
stavesmo41537.setBegBarType(VF.Barline.type.NONE);
stavesmo41537.setEndBarType(5);
stavesmo41537.setContext(context);
stavesmo41537.draw();
smo41537v0.draw(context, stavesmo41537);
const fmtsmo3920056 = new VF.Formatter();
//
// voices and notes for stave 0 56
const smo39200v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39200v0ar = [];
const smo39182 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo39182'] = smo39182;
smo39182.setAttribute('id', 'smo39182');
smo39182.addModifier(new VF.Dot(), 0);
const smo39183 = new VF.Annotation('-');
smo39183.setAttribute('id', 'smo39183');
smo39183.setFont('Merriweather', 12, 'normal');
smo39183.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39182.addModifier(smo39183);
smo39183.addClass('lyric lyric-0 lyric-hyphen');
smo39200v0ar.push(smo39182);
smo39200v0.addTickables(smo39200v0ar)
fmtsmo3920056.joinVoices([smo39200v0]);
const fmtsmo4032256 = new VF.Formatter();
//
// voices and notes for stave 1 56
const smo40322v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40322v0ar = [];
const smo40304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo40304'] = smo40304;
smo40304.setAttribute('id', 'smo40304');
smo40304.addModifier(new VF.Dot(), 0);
smo40322v0ar.push(smo40304);
const smo40305 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo40305'] = smo40305;
smo40305.setAttribute('id', 'smo40305');
smo40305.addModifier(new VF.Dot(), 0);
smo40322v0ar.push(smo40305);
smo40322v0.addTickables(smo40322v0ar)
fmtsmo4032256.joinVoices([smo40322v0]);
const fmtsmo4155856 = new VF.Formatter();
//
// voices and notes for stave 2 56
const smo41558v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41558v0ar = [];
const smo41538 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41538'] = smo41538;
smo41538.setAttribute('id', 'smo41538');
smo41558v0ar.push(smo41538);
const smo41539 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41539'] = smo41539;
smo41539.setAttribute('id', 'smo41539');
smo41558v0ar.push(smo41539);
const smo41540 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41540'] = smo41540;
smo41540.setAttribute('id', 'smo41540');
smo41558v0ar.push(smo41540);
const smo41541 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41541'] = smo41541;
smo41541.setAttribute('id', 'smo41541');
smo41558v0ar.push(smo41541);
smo41558v0.addTickables(smo41558v0ar)
fmtsmo4155856.joinVoices([smo41558v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3920056.format([smo39200v0,smo40322v0,smo41558v0], 125);
const stavesmo39200 = new VF.Stave(375, 909.0266026666668, 139);
stavesmo39200.setAttribute('id', 'stavesmo39200');
stavesmo39200.setBegBarType(VF.Barline.type.NONE);
stavesmo39200.setContext(context);
stavesmo39200.draw();
smo39200v0.draw(context, stavesmo39200);
const stavesmo40322 = new VF.Stave(375, 1030.0266026666668, 139);
stavesmo40322.setAttribute('id', 'stavesmo40322');
stavesmo40322.setBegBarType(VF.Barline.type.NONE);
stavesmo40322.setContext(context);
stavesmo40322.draw();
smo40322v0.draw(context, stavesmo40322);
const stavesmo41558 = new VF.Stave(375, 1106.0266026666668, 139);
stavesmo41558.setAttribute('id', 'stavesmo41558');
stavesmo41558.setBegBarType(VF.Barline.type.NONE);
stavesmo41558.setContext(context);
stavesmo41558.draw();
smo41558v0.draw(context, stavesmo41558);
const fmtsmo3921857 = new VF.Formatter();
//
// voices and notes for stave 0 57
const smo39218v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39218v0ar = [];
const smo39201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo39201'] = smo39201;
smo39201.setAttribute('id', 'smo39201');
smo39201.addModifier(new VF.Dot(), 0);
const smo39202 = new VF.Annotation('-');
smo39202.setAttribute('id', 'smo39202');
smo39202.setFont('Merriweather', 12, 'normal');
smo39202.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39201.addModifier(smo39202);
smo39202.addClass('lyric lyric-0 lyric-hyphen');
smo39218v0ar.push(smo39201);
smo39218v0.addTickables(smo39218v0ar)
fmtsmo3921857.joinVoices([smo39218v0]);
const fmtsmo4034157 = new VF.Formatter();
//
// voices and notes for stave 1 57
const smo40341v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40341v0ar = [];
const smo40323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
noteHash['smo40323'] = smo40323;
smo40323.setAttribute('id', 'smo40323');
smo40323.addModifier(new VF.Dot(), 0);
smo40341v0ar.push(smo40323);
const smo40324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo40324'] = smo40324;
smo40324.setAttribute('id', 'smo40324');
smo40341v0ar.push(smo40324);
const smo40325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo40325'] = smo40325;
smo40325.setAttribute('id', 'smo40325');
smo40341v0ar.push(smo40325);
smo40341v0.addTickables(smo40341v0ar)
fmtsmo4034157.joinVoices([smo40341v0]);
const fmtsmo4157857 = new VF.Formatter();
//
// voices and notes for stave 2 57
const smo41578v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41578v0ar = [];
const smo41559 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41559'] = smo41559;
smo41559.setAttribute('id', 'smo41559');
smo41578v0ar.push(smo41559);
const smo41560 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41560'] = smo41560;
smo41560.setAttribute('id', 'smo41560');
smo41578v0ar.push(smo41560);
const smo41561 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41561'] = smo41561;
smo41561.setAttribute('id', 'smo41561');
smo41578v0ar.push(smo41561);
const smo41562 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41562'] = smo41562;
smo41562.setAttribute('id', 'smo41562');
smo41578v0ar.push(smo41562);
smo41578v0.addTickables(smo41578v0ar)
fmtsmo4157857.joinVoices([smo41578v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3921857.format([smo39218v0,smo40341v0,smo41578v0], 110);
const stavesmo39218 = new VF.Stave(514, 909.0266026666668, 124);
stavesmo39218.setAttribute('id', 'stavesmo39218');
stavesmo39218.setBegBarType(VF.Barline.type.NONE);
stavesmo39218.setContext(context);
stavesmo39218.draw();
smo39218v0.draw(context, stavesmo39218);
const stavesmo40341 = new VF.Stave(514, 1030.0266026666668, 124);
stavesmo40341.setAttribute('id', 'stavesmo40341');
stavesmo40341.setBegBarType(VF.Barline.type.NONE);
stavesmo40341.setContext(context);
stavesmo40341.draw();
smo40341v0.draw(context, stavesmo40341);
const stavesmo41578 = new VF.Stave(514, 1106.0266026666668, 124);
stavesmo41578.setAttribute('id', 'stavesmo41578');
stavesmo41578.setBegBarType(VF.Barline.type.NONE);
stavesmo41578.setContext(context);
stavesmo41578.draw();
smo41578v0.draw(context, stavesmo41578);
const fmtsmo3923658 = new VF.Formatter();
//
// voices and notes for stave 0 58
const smo39236v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39236v0ar = [];
const smo39219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo39219'] = smo39219;
smo39219.setAttribute('id', 'smo39219');
smo39219.addModifier(new VF.Dot(), 0);
const smo39220 = new VF.Annotation('-');
smo39220.setAttribute('id', 'smo39220');
smo39220.setFont('Merriweather', 12, 'normal');
smo39220.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39219.addModifier(smo39220);
smo39220.addClass('lyric lyric-0 lyric-hyphen');
smo39236v0ar.push(smo39219);
smo39236v0.addTickables(smo39236v0ar)
fmtsmo3923658.joinVoices([smo39236v0]);
const fmtsmo4036258 = new VF.Formatter();
//
// voices and notes for stave 1 58
const smo40362v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40362v0ar = [];
const smo40342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo40342'] = smo40342;
smo40342.setAttribute('id', 'smo40342');
smo40362v0ar.push(smo40342);
const smo40343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo40343'] = smo40343;
smo40343.setAttribute('id', 'smo40343');
smo40362v0ar.push(smo40343);
const smo40344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo40344'] = smo40344;
smo40344.setAttribute('id', 'smo40344');
smo40362v0ar.push(smo40344);
const smo40345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo40345'] = smo40345;
smo40345.setAttribute('id', 'smo40345');
smo40362v0ar.push(smo40345);
const smo40346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo40346'] = smo40346;
smo40346.setAttribute('id', 'smo40346');
smo40362v0ar.push(smo40346);
smo40362v0.addTickables(smo40362v0ar)
fmtsmo4036258.joinVoices([smo40362v0]);
const fmtsmo4159958 = new VF.Formatter();
//
// voices and notes for stave 2 58
const smo41599v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41599v0ar = [];
const smo41579 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n","an/3/n"]}'))
noteHash['smo41579'] = smo41579;
smo41579.setAttribute('id', 'smo41579');
smo41599v0ar.push(smo41579);
const smo41580 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
noteHash['smo41580'] = smo41580;
smo41580.setAttribute('id', 'smo41580');
smo41599v0ar.push(smo41580);
const smo41581 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n","an/3/n"]}'))
noteHash['smo41581'] = smo41581;
smo41581.setAttribute('id', 'smo41581');
smo41599v0ar.push(smo41581);
const smo41582 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo41582'] = smo41582;
smo41582.setAttribute('id', 'smo41582');
smo41599v0ar.push(smo41582);
const smo41583 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo41583'] = smo41583;
smo41583.setAttribute('id', 'smo41583');
smo41599v0ar.push(smo41583);
smo41599v0.addTickables(smo41599v0ar)
fmtsmo4159958.joinVoices([smo41599v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
const dirsmo48035 = smo40342.getStemDirection();
smo40342.setStemDirection(dirsmo48035);
smo40343.setStemDirection(dirsmo48035);
smo40344.setStemDirection(dirsmo48035);
const smo48035 = new VF.Beam([smo40342,smo40343,smo40344]);
const dirsmo48038 = smo41579.getStemDirection();
smo41579.setStemDirection(dirsmo48038);
smo41580.setStemDirection(dirsmo48038);
smo41581.setStemDirection(dirsmo48038);
const smo48038 = new VF.Beam([smo41579,smo41580,smo41581]);
 
// formatting measures in staff group smo41649
fmtsmo3923658.format([smo39236v0,smo40362v0,smo41599v0], 140);
const stavesmo39236 = new VF.Stave(638, 909.0266026666668, 154);
stavesmo39236.setAttribute('id', 'stavesmo39236');
stavesmo39236.setBegBarType(VF.Barline.type.NONE);
stavesmo39236.setContext(context);
stavesmo39236.draw();
smo39236v0.draw(context, stavesmo39236);
const stavesmo40362 = new VF.Stave(638, 1030.0266026666668, 154);
stavesmo40362.setAttribute('id', 'stavesmo40362');
stavesmo40362.setBegBarType(VF.Barline.type.NONE);
stavesmo40362.setContext(context);
stavesmo40362.draw();
smo40362v0.draw(context, stavesmo40362);
smo48035.setContext(context);
smo48035.draw();
const stavesmo41599 = new VF.Stave(638, 1106.0266026666668, 154);
stavesmo41599.setAttribute('id', 'stavesmo41599');
stavesmo41599.setBegBarType(VF.Barline.type.NONE);
stavesmo41599.setContext(context);
stavesmo41599.draw();
smo41599v0.draw(context, stavesmo41599);
smo48038.setContext(context);
smo48038.draw();
const fmtsmo3925459 = new VF.Formatter();
//
// voices and notes for stave 0 59
const smo39254v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39254v0ar = [];
const smo39237 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo39237'] = smo39237;
smo39237.setAttribute('id', 'smo39237');
smo39237.addModifier(new VF.Dot(), 0);
const smo39238 = new VF.Annotation('-');
smo39238.setAttribute('id', 'smo39238');
smo39238.setFont('Merriweather', 12, 'normal');
smo39238.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39237.addModifier(smo39238);
smo39238.addClass('lyric lyric-0 lyric-hyphen');
smo39254v0ar.push(smo39237);
smo39254v0.addTickables(smo39254v0ar)
fmtsmo3925459.joinVoices([smo39254v0]);
const fmtsmo4037959 = new VF.Formatter();
//
// voices and notes for stave 1 59
const smo40379v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40379v0ar = [];
const smo40363 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo40363'] = smo40363;
smo40363.setAttribute('id', 'smo40363');
smo40363.addModifier(new VF.Dot(), 0);
smo40379v0ar.push(smo40363);
smo40379v0.addTickables(smo40379v0ar)
fmtsmo4037959.joinVoices([smo40379v0]);
const fmtsmo4161659 = new VF.Formatter();
//
// voices and notes for stave 2 59
const smo41616v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41616v0ar = [];
const smo41600 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n","gn/3/n","bn/3/n"]}'))
noteHash['smo41600'] = smo41600;
smo41600.setAttribute('id', 'smo41600');
smo41600.addModifier(new VF.Dot(), 0);
smo41600.addModifier(new VF.Dot(), 1);
smo41600.addModifier(new VF.Dot(), 2);
smo41616v0ar.push(smo41600);
smo41616v0.addTickables(smo41616v0ar)
fmtsmo4161659.joinVoices([smo41616v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3925459.format([smo39254v0,smo40379v0,smo41616v0], 28);
const stavesmo39254 = new VF.Stave(792, 909.0266026666668, 42);
stavesmo39254.setAttribute('id', 'stavesmo39254');
stavesmo39254.setBegBarType(VF.Barline.type.NONE);
stavesmo39254.setContext(context);
stavesmo39254.draw();
smo39254v0.draw(context, stavesmo39254);
const stavesmo40379 = new VF.Stave(792, 1030.0266026666668, 42);
stavesmo40379.setAttribute('id', 'stavesmo40379');
stavesmo40379.setBegBarType(VF.Barline.type.NONE);
stavesmo40379.setContext(context);
stavesmo40379.draw();
smo40379v0.draw(context, stavesmo40379);
const stavesmo41616 = new VF.Stave(792, 1106.0266026666668, 42);
stavesmo41616.setAttribute('id', 'stavesmo41616');
stavesmo41616.setBegBarType(VF.Barline.type.NONE);
stavesmo41616.setContext(context);
stavesmo41616.draw();
smo41616v0.draw(context, stavesmo41616);
const fmtsmo3927160 = new VF.Formatter();
//
// voices and notes for stave 0 60
const smo39271v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39271v0ar = [];
const smo39255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo39255'] = smo39255;
smo39255.setAttribute('id', 'smo39255');
smo39255.addModifier(new VF.Dot(), 0);
smo39271v0ar.push(smo39255);
smo39271v0.addTickables(smo39271v0ar)
fmtsmo3927160.joinVoices([smo39271v0]);
const fmtsmo4039860 = new VF.Formatter();
//
// voices and notes for stave 1 60
const smo40398v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40398v0ar = [];
const smo40380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo40380'] = smo40380;
smo40380.setAttribute('id', 'smo40380');
smo40398v0ar.push(smo40380);
const smo40381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
noteHash['smo40381'] = smo40381;
smo40381.setAttribute('id', 'smo40381');
smo40398v0ar.push(smo40381);
const smo40382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
noteHash['smo40382'] = smo40382;
smo40382.setAttribute('id', 'smo40382');
smo40382.addModifier(new VF.Dot(), 0);
smo40398v0ar.push(smo40382);
smo40398v0.addTickables(smo40398v0ar)
fmtsmo4039860.joinVoices([smo40398v0]);
const fmtsmo4163560 = new VF.Formatter();
//
// voices and notes for stave 2 60
const smo41635v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41635v0ar = [];
const smo41617 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","bn/2/n","dn/3/n","gn/3/n"]}'))
noteHash['smo41617'] = smo41617;
smo41617.setAttribute('id', 'smo41617');
smo41635v0ar.push(smo41617);
const smo41618 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo41618'] = smo41618;
smo41618.setAttribute('id', 'smo41618');
smo41635v0ar.push(smo41618);
const smo41619 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo41619'] = smo41619;
smo41619.setAttribute('id', 'smo41619');
smo41619.addModifier(new VF.Dot(), 0);
smo41635v0ar.push(smo41619);
smo41635v0.addTickables(smo41635v0ar)
fmtsmo4163560.joinVoices([smo41635v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3927160.format([smo39271v0,smo40398v0,smo41635v0], 89);
const stavesmo39271 = new VF.Stave(834, 909.0266026666668, 111);
stavesmo39271.setAttribute('id', 'stavesmo39271');
stavesmo39271.setBegBarType(VF.Barline.type.NONE);
stavesmo39271.setEndBarType(3);
stavesmo39271.setContext(context);
stavesmo39271.draw();
smo39271v0.draw(context, stavesmo39271);
const stavesmo40398 = new VF.Stave(834, 1030.0266026666668, 111);
stavesmo40398.setAttribute('id', 'stavesmo40398');
stavesmo40398.setBegBarType(VF.Barline.type.NONE);
stavesmo40398.setEndBarType(3);
stavesmo40398.setContext(context);
stavesmo40398.draw();
smo40398v0.draw(context, stavesmo40398);
const stavesmo41635 = new VF.Stave(834, 1106.0266026666668, 111);
stavesmo41635.setAttribute('id', 'stavesmo41635');
stavesmo41635.setBegBarType(VF.Barline.type.NONE);
stavesmo41635.setEndBarType(3);
stavesmo41635.setContext(context);
stavesmo41635.draw();
smo41635v0.draw(context, stavesmo41635);
const smo48818 = new VF.StaveTie({ first_note: smo39146, last_note: smo39165, 
          firstNote: smo39146, lastNote: smo39165, first_indices: [0], last_indices: [0]});
smo48818.setContext(context).draw();
const smo48819 = new VF.StaveTie({ first_note: smo39109, last_note: smo39128, 
          firstNote: smo39109, lastNote: smo39128, first_indices: [0], last_indices: [0]});
smo48819.setContext(context).draw();
const smo48820 = new VF.StaveTie({ first_note: smo39182, last_note: smo39201, 
          firstNote: smo39182, lastNote: smo39201, first_indices: [0], last_indices: [0]});
smo48820.setContext(context).draw();
const smo48821 = new VF.StaveTie({ first_note: smo39219, last_note: smo39237, 
          firstNote: smo39219, lastNote: smo39237, first_indices: [0], last_indices: [0]});
smo48821.setContext(context).draw();
const smo48822 = new VF.StaveTie({ first_note: smo39007, last_note: smo39026, 
          firstNote: smo39007, lastNote: smo39026, first_indices: [0], last_indices: [0]});
smo48822.setContext(context).draw();
const smo48823 = new VF.StaveTie({ first_note: smo39059, last_note: smo39078, 
          firstNote: smo39059, lastNote: smo39078, first_indices: [0], last_indices: [0]});
smo48823.setContext(context).draw();
const smo48824 = new VF.StaveTie({ first_note: smo38958, last_note: smo38977, 
          firstNote: smo38958, lastNote: smo38977, first_indices: [0], last_indices: [0]});
smo48824.setContext(context).draw();
const smo48825 = new VF.StaveTie({ first_note: smo40081, last_note: smo40098, 
          firstNote: smo40081, lastNote: smo40098, first_indices: [0,1], last_indices: [0,1]});
smo48825.setContext(context).draw();
const smo48826 = new VF.StaveTie({ first_note: smo40229, last_note: smo40246, 
          firstNote: smo40229, lastNote: smo40246, first_indices: [0,1], last_indices: [0,1]});
smo48826.setContext(context).draw();
const smo48827 = new VF.StaveTie({ first_note: smo41463, last_note: smo41480, 
          firstNote: smo41463, lastNote: smo41480, first_indices: [0], last_indices: [0]});
smo48827.setContext(context).draw();
const smo39148smo39164 = new VF.Volta(2, '1', 66, 20);
smo39148smo39164.setContext(context).draw(stavesmo39164, -1 * 0);
const smo39148smo39181 = new VF.Volta(4, '1', 251, 20);
smo39148smo39181.setContext(context).draw(stavesmo39181, -1 * 0);
const smo39184smo39200 = new VF.Volta(2, '2', 375, 20);
smo39184smo39200.setContext(context).draw(stavesmo39200, -1 * 0);
const smo39184smo39218 = new VF.Volta(4, '2', 514, 20);
smo39184smo39218.setContext(context).draw(stavesmo39218, -1 * 0);
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo38889').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38890').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo38893').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo38911').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo38912').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo38914').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38915').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo38917').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38918').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo38920').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo38921').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo38940').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo38941').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo38959').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo38960').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo38980').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo38981').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo38983').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38984').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo38986').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38987').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo38989').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38990').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo39008').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo39009').setAttributeNS('', 'transform', 'translate(0 24)');
context.svg.getElementById('vf-smo39027').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo39030').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo39032').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39033').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo39035').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39036').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo39038').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo39039').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo39057').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39058').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo39060').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo39061').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo39079').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo39082').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo39083').setAttributeNS('', 'transform', 'translate(0 31)');
context.svg.getElementById('vf-smo39101').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo39102').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo39104').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo39105').setAttributeNS('', 'transform', 'translate(0 31)');
context.svg.getElementById('vf-smo39107').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo39108').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo39110').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo39111').setAttributeNS('', 'transform', 'translate(0 28)');
context.svg.getElementById('vf-smo39129').setAttributeNS('', 'transform', 'translate(0 16)');
}
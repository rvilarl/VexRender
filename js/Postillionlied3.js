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
const fmtsmo3989243 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo39892v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39892v0ar = [];
const smo39871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo39871'] = smo39871;
smo39871.setAttribute('id', 'smo39871');
smo39871.addModifier(new VF.Dot(), 0);
const smo39872 = new VF.Annotation('Wäl');
smo39872.setAttribute('id', 'smo39872');
smo39872.setFont('Merriweather', 12, 'normal');
smo39872.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39871.addModifier(smo39872);
smo39872.addClass('lyric lyric-0 lyric-hyphen');
const smo39873 = new VF.Annotation('klin');
smo39873.setAttribute('id', 'smo39873');
smo39873.setFont('Merriweather', 12, 'normal');
smo39873.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39871.addModifier(smo39873);
smo39873.addClass('lyric lyric-1 lyric-hyphen');
smo39892v0ar.push(smo39871);
const smo39874 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo39874'] = smo39874;
smo39874.setAttribute('id', 'smo39874');
smo39874.addModifier(new VF.Dot(), 0);
const smo39875 = new VF.Annotation('der');
smo39875.setAttribute('id', 'smo39875');
smo39875.setFont('Merriweather', 12, 'normal');
smo39875.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39874.addModifier(smo39875);
smo39875.addClass('lyric lyric-0');
const smo39876 = new VF.Annotation('gen:');
smo39876.setAttribute('id', 'smo39876');
smo39876.setFont('Merriweather', 12, 'normal');
smo39876.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39874.addModifier(smo39876);
smo39876.addClass('lyric lyric-1');
smo39892v0ar.push(smo39874);
smo39892v0.addTickables(smo39892v0ar)
fmtsmo3989243.joinVoices([smo39892v0]);
const fmtsmo4106343 = new VF.Formatter();
//
// voices and notes for stave 1 43
const smo41063v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41063v0ar = [];
const smo41047 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","f#/5/n","dn/6/n"]}'))
noteHash['smo41047'] = smo41047;
smo41047.setAttribute('id', 'smo41047');
smo41047.addModifier(new VF.Dot(), 0);
smo41047.addModifier(new VF.Dot(), 1);
smo41047.addModifier(new VF.Dot(), 2);
smo41063v0ar.push(smo41047);
smo41063v0.addTickables(smo41063v0ar)
fmtsmo4106343.joinVoices([smo41063v0]);
const fmtsmo4228843 = new VF.Formatter();
//
// voices and notes for stave 2 43
const smo42288v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42288v0ar = [];
const smo42267 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo42267'] = smo42267;
smo42267.setAttribute('id', 'smo42267');
smo42288v0ar.push(smo42267);
const smo42268 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo42268'] = smo42268;
smo42268.setAttribute('id', 'smo42268');
smo42288v0ar.push(smo42268);
const smo42269 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo42269'] = smo42269;
smo42269.setAttribute('id', 'smo42269');
smo42288v0ar.push(smo42269);
const smo42270 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
noteHash['smo42270'] = smo42270;
smo42270.setAttribute('id', 'smo42270');
smo42288v0ar.push(smo42270);
smo42288v0.addTickables(smo42288v0ar)
fmtsmo4228843.joinVoices([smo42288v0]);
const smo42288v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42288v1ar = [];
const smo42271 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo42271'] = smo42271;
smo42271.setAttribute('id', 'smo42271');
smo42271.addModifier(new VF.Dot(), 0);
smo42288v1ar.push(smo42271);
const smo42272 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["cn/4/r"]}'))
noteHash['smo42272'] = smo42272;
smo42272.setAttribute('id', 'smo42272');
smo42272.addModifier(new VF.Dot(), 0);
smo42288v1ar.push(smo42272);
smo42288v1.addTickables(smo42288v1ar)
fmtsmo4228843.joinVoices([smo42288v1]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo3989243.format([smo39892v0,smo41063v0,smo42288v0,smo42288v1], 173);
const stavesmo39892 = new VF.Stave(66, 98.0266026666668, 247);
stavesmo39892.setAttribute('id', 'stavesmo39892');
stavesmo39892.setBegBarType(1);
stavesmo39892.addClef('treble');
const keysmo39892 = new VF.KeySignature('G');
keysmo39892.addToStave(stavesmo39892);
stavesmo39892.setContext(context);
stavesmo39892.draw();
smo39892v0.draw(context, stavesmo39892);
const stavesmo41063 = new VF.Stave(66, 280.0266026666668, 247);
stavesmo41063.setAttribute('id', 'stavesmo41063');
stavesmo41063.setBegBarType(1);
stavesmo41063.addClef('treble');
const keysmo41063 = new VF.KeySignature('G');
keysmo41063.addToStave(stavesmo41063);
stavesmo41063.setContext(context);
stavesmo41063.draw();
smo41063v0.draw(context, stavesmo41063);
const stavesmo42288 = new VF.Stave(66, 386.0266026666668, 247);
stavesmo42288.setAttribute('id', 'stavesmo42288');
stavesmo42288.setBegBarType(1);
stavesmo42288.addClef('bass');
const keysmo42288 = new VF.KeySignature('G');
keysmo42288.addToStave(stavesmo42288);
stavesmo42288.setContext(context);
stavesmo42288.draw();
smo42288v0.draw(context, stavesmo42288);
smo42288v1.draw(context, stavesmo42288);
const leftsmo42632stavesmo398922 = new VF.StaveConnector(stavesmo39892, stavesmo42288).setType(1);
leftsmo42632stavesmo398922.setContext(context).draw();
const fmtsmo3992044 = new VF.Formatter();
//
// voices and notes for stave 0 44
const smo39920v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39920v0ar = [];
const smo39893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo39893'] = smo39893;
smo39893.setAttribute('id', 'smo39893');
const smo39894 = new VF.Annotation('ü');
smo39894.setAttribute('id', 'smo39894');
smo39894.setFont('Merriweather', 12, 'normal');
smo39894.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39893.addModifier(smo39894);
smo39894.addClass('lyric lyric-0 lyric-hyphen');
const smo39895 = new VF.Annotation('Ich');
smo39895.setAttribute('id', 'smo39895');
smo39895.setFont('Merriweather', 12, 'normal');
smo39895.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39893.addModifier(smo39895);
smo39895.addClass('lyric lyric-1');
smo39920v0ar.push(smo39893);
const smo39896 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo39896'] = smo39896;
smo39896.setAttribute('id', 'smo39896');
const smo39897 = new VF.Annotation('ber');
smo39897.setAttribute('id', 'smo39897');
smo39897.setFont('Merriweather', 12, 'normal');
smo39897.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39896.addModifier(smo39897);
smo39897.addClass('lyric lyric-0');
const smo39898 = new VF.Annotation('bin');
smo39898.setAttribute('id', 'smo39898');
smo39898.setFont('Merriweather', 12, 'normal');
smo39898.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39896.addModifier(smo39898);
smo39898.addClass('lyric lyric-1');
smo39920v0ar.push(smo39896);
const smo39899 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo39899'] = smo39899;
smo39899.setAttribute('id', 'smo39899');
const smo39900 = new VF.Annotation('das');
smo39900.setAttribute('id', 'smo39900');
smo39900.setFont('Merriweather', 12, 'normal');
smo39900.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39899.addModifier(smo39900);
smo39900.addClass('lyric lyric-0');
const smo39901 = new VF.Annotation('ganz');
smo39901.setAttribute('id', 'smo39901');
smo39901.setFont('Merriweather', 12, 'normal');
smo39901.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39899.addModifier(smo39901);
smo39901.addClass('lyric lyric-1');
smo39920v0ar.push(smo39899);
const smo39902 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39902'] = smo39902;
smo39902.setAttribute('id', 'smo39902');
smo39902.addModifier(new VF.Dot(), 0);
const smo39903 = new VF.Annotation('Land;');
smo39903.setAttribute('id', 'smo39903');
smo39903.setFont('Merriweather', 12, 'normal');
smo39903.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39902.addModifier(smo39903);
smo39903.addClass('lyric lyric-0');
const smo39904 = new VF.Annotation('nah!');
smo39904.setAttribute('id', 'smo39904');
smo39904.setFont('Merriweather', 12, 'normal');
smo39904.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39902.addModifier(smo39904);
smo39904.addClass('lyric lyric-1');
smo39920v0ar.push(smo39902);
smo39920v0.addTickables(smo39920v0ar)
fmtsmo3992044.joinVoices([smo39920v0]);
const fmtsmo4108044 = new VF.Formatter();
//
// voices and notes for stave 1 44
const smo41080v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41080v0ar = [];
const smo41064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
noteHash['smo41064'] = smo41064;
smo41064.setAttribute('id', 'smo41064');
smo41064.addModifier(new VF.Dot(), 0);
smo41064.addModifier(new VF.Dot(), 1);
smo41080v0ar.push(smo41064);
smo41080v0.addTickables(smo41080v0ar)
fmtsmo4108044.joinVoices([smo41080v0]);
const fmtsmo4230844 = new VF.Formatter();
//
// voices and notes for stave 2 44
const smo42308v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42308v0ar = [];
const smo42289 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo42289'] = smo42289;
smo42289.setAttribute('id', 'smo42289');
smo42308v0ar.push(smo42289);
const smo42290 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo42290'] = smo42290;
smo42290.setAttribute('id', 'smo42290');
smo42308v0ar.push(smo42290);
const smo42291 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo42291'] = smo42291;
smo42291.setAttribute('id', 'smo42291');
smo42308v0ar.push(smo42291);
const smo42292 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo42292'] = smo42292;
smo42292.setAttribute('id', 'smo42292');
smo42308v0ar.push(smo42292);
smo42308v0.addTickables(smo42308v0ar)
fmtsmo4230844.joinVoices([smo42308v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
const dirsmo48918 = smo39893.getStemDirection();
smo39893.setStemDirection(dirsmo48918);
smo39896.setStemDirection(dirsmo48918);
smo39899.setStemDirection(dirsmo48918);
const smo48918 = new VF.Beam([smo39893,smo39896,smo39899]);
 
// formatting measures in staff group smo42632
fmtsmo3992044.format([smo39920v0,smo41080v0,smo42308v0], 278);
const stavesmo39920 = new VF.Stave(313, 98.0266026666668, 292);
stavesmo39920.setAttribute('id', 'stavesmo39920');
stavesmo39920.setBegBarType(VF.Barline.type.NONE);
stavesmo39920.setContext(context);
stavesmo39920.draw();
smo39920v0.draw(context, stavesmo39920);
smo48918.setContext(context);
smo48918.draw();
const stavesmo41080 = new VF.Stave(313, 280.0266026666668, 292);
stavesmo41080.setAttribute('id', 'stavesmo41080');
stavesmo41080.setBegBarType(VF.Barline.type.NONE);
stavesmo41080.setContext(context);
stavesmo41080.draw();
smo41080v0.draw(context, stavesmo41080);
const stavesmo42308 = new VF.Stave(313, 386.0266026666668, 292);
stavesmo42308.setAttribute('id', 'stavesmo42308');
stavesmo42308.setBegBarType(VF.Barline.type.NONE);
stavesmo42308.setContext(context);
stavesmo42308.draw();
smo42308v0.draw(context, stavesmo42308);
const fmtsmo3994045 = new VF.Formatter();
//
// voices and notes for stave 0 45
const smo39940v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39940v0ar = [];
const smo39921 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo39921'] = smo39921;
smo39921.setAttribute('id', 'smo39921');
smo39921.addModifier(new VF.Dot(), 0);
smo39940v0ar.push(smo39921);
const smo39922 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo39922'] = smo39922;
smo39922.setAttribute('id', 'smo39922');
smo39922.addModifier(new VF.Dot(), 0);
const smo39923 = new VF.Annotation('von');
smo39923.setAttribute('id', 'smo39923');
smo39923.setFont('Merriweather', 12, 'normal');
smo39923.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39922.addModifier(smo39923);
smo39923.addClass('lyric lyric-0');
const smo39924 = new VF.Annotation('Tra');
smo39924.setAttribute('id', 'smo39924');
smo39924.setFont('Merriweather', 12, 'normal');
smo39924.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39922.addModifier(smo39924);
smo39924.addClass('lyric lyric-1 lyric-hyphen');
smo39940v0ar.push(smo39922);
smo39940v0.addTickables(smo39940v0ar)
fmtsmo3994045.joinVoices([smo39940v0]);
const fmtsmo4109745 = new VF.Formatter();
//
// voices and notes for stave 1 45
const smo41097v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41097v0ar = [];
const smo41081 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
noteHash['smo41081'] = smo41081;
smo41081.setAttribute('id', 'smo41081');
smo41081.addModifier(new VF.Dot(), 0);
smo41081.addModifier(new VF.Dot(), 1);
smo41097v0ar.push(smo41081);
smo41097v0.addTickables(smo41097v0ar)
fmtsmo4109745.joinVoices([smo41097v0]);
const fmtsmo4232845 = new VF.Formatter();
//
// voices and notes for stave 2 45
const smo42328v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42328v0ar = [];
const smo42309 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo42309'] = smo42309;
smo42309.setAttribute('id', 'smo42309');
smo42328v0ar.push(smo42309);
const smo42310 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo42310'] = smo42310;
smo42310.setAttribute('id', 'smo42310');
smo42328v0ar.push(smo42310);
const smo42311 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo42311'] = smo42311;
smo42311.setAttribute('id', 'smo42311');
smo42328v0ar.push(smo42311);
const smo42312 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo42312'] = smo42312;
smo42312.setAttribute('id', 'smo42312');
smo42328v0ar.push(smo42312);
smo42328v0.addTickables(smo42328v0ar)
fmtsmo4232845.joinVoices([smo42328v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo3994045.format([smo39940v0,smo41097v0,smo42328v0], 150);
const stavesmo39940 = new VF.Stave(605, 98.0266026666668, 164);
stavesmo39940.setAttribute('id', 'stavesmo39940');
stavesmo39940.setBegBarType(VF.Barline.type.NONE);
stavesmo39940.setContext(context);
stavesmo39940.draw();
smo39940v0.draw(context, stavesmo39940);
const stavesmo41097 = new VF.Stave(605, 280.0266026666668, 164);
stavesmo41097.setAttribute('id', 'stavesmo41097');
stavesmo41097.setBegBarType(VF.Barline.type.NONE);
stavesmo41097.setContext(context);
stavesmo41097.draw();
smo41097v0.draw(context, stavesmo41097);
const stavesmo42328 = new VF.Stave(605, 386.0266026666668, 164);
stavesmo42328.setAttribute('id', 'stavesmo42328');
stavesmo42328.setBegBarType(VF.Barline.type.NONE);
stavesmo42328.setContext(context);
stavesmo42328.draw();
smo42328v0.draw(context, stavesmo42328);
const fmtsmo3995946 = new VF.Formatter();
//
// voices and notes for stave 0 46
const smo39959v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39959v0ar = [];
const smo39941 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39941'] = smo39941;
smo39941.setAttribute('id', 'smo39941');
smo39941.addModifier(new VF.Dot(), 0);
const smo39942 = new VF.Annotation('fern');
smo39942.setAttribute('id', 'smo39942');
smo39942.setFont('Merriweather', 12, 'normal');
smo39942.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39941.addModifier(smo39942);
smo39942.addClass('lyric lyric-0');
const smo39943 = new VF.Annotation('ra!');
smo39943.setAttribute('id', 'smo39943');
smo39943.setFont('Merriweather', 12, 'normal');
smo39943.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39941.addModifier(smo39943);
smo39943.addClass('lyric lyric-1');
smo39959v0ar.push(smo39941);
smo39959v0.addTickables(smo39959v0ar)
fmtsmo3995946.joinVoices([smo39959v0]);
const fmtsmo4111746 = new VF.Formatter();
//
// voices and notes for stave 1 46
const smo41117v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41117v0ar = [];
const smo41098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo41098'] = smo41098;
smo41098.setAttribute('id', 'smo41098');
smo41098.addModifier(new VF.Dot(), 0);
smo41117v0ar.push(smo41098);
smo41117v0.addTickables(smo41117v0ar)
fmtsmo4111746.joinVoices([smo41117v0]);
const smo41117v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41117v1ar = [];
const smo41099 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/5/r"]}'))
noteHash['smo41099'] = smo41099;
smo41099.setAttribute('id', 'smo41099');
smo41099.addModifier(new VF.Dot(), 0);
smo41117v1ar.push(smo41099);
const smo41100 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/5/n"]}'))
noteHash['smo41100'] = smo41100;
smo41100.setAttribute('id', 'smo41100');
smo41117v1ar.push(smo41100);
const smo41101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo41101'] = smo41101;
smo41101.setAttribute('id', 'smo41101');
smo41117v1ar.push(smo41101);
smo41117v1.addTickables(smo41117v1ar)
fmtsmo4111746.joinVoices([smo41117v1]);
const fmtsmo4234846 = new VF.Formatter();
//
// voices and notes for stave 2 46
const smo42348v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42348v0ar = [];
const smo42329 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo42329'] = smo42329;
smo42329.setAttribute('id', 'smo42329');
smo42348v0ar.push(smo42329);
const smo42330 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo42330'] = smo42330;
smo42330.setAttribute('id', 'smo42330');
smo42348v0ar.push(smo42330);
const smo42331 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo42331'] = smo42331;
smo42331.setAttribute('id', 'smo42331');
smo42348v0ar.push(smo42331);
const smo42332 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo42332'] = smo42332;
smo42332.setAttribute('id', 'smo42332');
smo42348v0ar.push(smo42332);
smo42348v0.addTickables(smo42348v0ar)
fmtsmo4234846.joinVoices([smo42348v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo3995946.format([smo39959v0,smo41117v0,smo41117v1,smo42348v0], 138);
const stavesmo39959 = new VF.Stave(769, 98.0266026666668, 152);
stavesmo39959.setAttribute('id', 'stavesmo39959');
stavesmo39959.setBegBarType(VF.Barline.type.NONE);
stavesmo39959.setContext(context);
stavesmo39959.draw();
smo39959v0.draw(context, stavesmo39959);
const stavesmo41117 = new VF.Stave(769, 280.0266026666668, 152);
stavesmo41117.setAttribute('id', 'stavesmo41117');
stavesmo41117.setBegBarType(VF.Barline.type.NONE);
stavesmo41117.setContext(context);
stavesmo41117.draw();
smo41117v0.draw(context, stavesmo41117);
smo41117v1.draw(context, stavesmo41117);
const stavesmo42348 = new VF.Stave(769, 386.0266026666668, 152);
stavesmo42348.setAttribute('id', 'stavesmo42348');
stavesmo42348.setBegBarType(VF.Barline.type.NONE);
stavesmo42348.setContext(context);
stavesmo42348.draw();
smo42348v0.draw(context, stavesmo42348);
const fmtsmo3998947 = new VF.Formatter();
//
// voices and notes for stave 0 47
const smo39989v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39989v0ar = [];
const smo39960 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39960'] = smo39960;
smo39960.setAttribute('id', 'smo39960');
smo39989v0ar.push(smo39960);
const smo39962 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo39962'] = smo39962;
smo39962.setAttribute('id', 'smo39962');
const smo39963 = new VF.Annotation('er');
smo39963.setAttribute('id', 'smo39963');
smo39963.setFont('Merriweather', 12, 'normal');
smo39963.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39962.addModifier(smo39963);
smo39963.addClass('lyric lyric-0');
const smo39964 = new VF.Annotation('Ich');
smo39964.setAttribute('id', 'smo39964');
smo39964.setFont('Merriweather', 12, 'normal');
smo39964.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39962.addModifier(smo39964);
smo39964.addClass('lyric lyric-1');
smo39989v0ar.push(smo39962);
const smo39965 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo39965'] = smo39965;
smo39965.setAttribute('id', 'smo39965');
const smo39966 = new VF.Annotation('kem');
smo39966.setAttribute('id', 'smo39966');
smo39966.setFont('Merriweather', 12, 'normal');
smo39966.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39965.addModifier(smo39966);
smo39966.addClass('lyric lyric-0');
const smo39967 = new VF.Annotation('hö');
smo39967.setAttribute('id', 'smo39967');
smo39967.setFont('Merriweather', 12, 'normal');
smo39967.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39965.addModifier(smo39967);
smo39967.addClass('lyric lyric-1 lyric-hyphen');
smo39989v0ar.push(smo39965);
const smo39968 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo39968'] = smo39968;
smo39968.setAttribute('id', 'smo39968');
const smo39969 = new VF.Annotation('ich');
smo39969.setAttribute('id', 'smo39969');
smo39969.setFont('Merriweather', 12, 'normal');
smo39969.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39968.addModifier(smo39969);
smo39969.addClass('lyric lyric-0');
const smo39970 = new VF.Annotation('re');
smo39970.setAttribute('id', 'smo39970');
smo39970.setFont('Merriweather', 12, 'normal');
smo39970.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39968.addModifier(smo39970);
smo39970.addClass('lyric lyric-1');
smo39989v0ar.push(smo39968);
const smo39971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo39971'] = smo39971;
smo39971.setAttribute('id', 'smo39971');
const smo39972 = new VF.Annotation('ihn');
smo39972.setAttribute('id', 'smo39972');
smo39972.setFont('Merriweather', 12, 'normal');
smo39972.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39971.addModifier(smo39972);
smo39972.addClass('lyric lyric-0');
const smo39973 = new VF.Annotation('sein');
smo39973.setAttribute('id', 'smo39973');
smo39973.setFont('Merriweather', 12, 'normal');
smo39973.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39971.addModifier(smo39973);
smo39973.addClass('lyric lyric-1');
smo39989v0ar.push(smo39971);
smo39989v0.addTickables(smo39989v0ar)
fmtsmo3998947.joinVoices([smo39989v0]);
const fmtsmo4113647 = new VF.Formatter();
//
// voices and notes for stave 1 47
const smo41136v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41136v0ar = [];
const smo41118 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo41118'] = smo41118;
smo41118.setAttribute('id', 'smo41118');
smo41118.addModifier(new VF.Dot(), 0);
smo41136v0ar.push(smo41118);
smo41136v0.addTickables(smo41136v0ar)
fmtsmo4113647.joinVoices([smo41136v0]);
const smo41136v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41136v1ar = [];
const smo41119 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/6/n"]}'))
noteHash['smo41119'] = smo41119;
smo41119.setAttribute('id', 'smo41119');
smo41119.addModifier(new VF.Dot(), 0);
smo41136v1ar.push(smo41119);
const smo41120 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/5/r"]}'))
noteHash['smo41120'] = smo41120;
smo41120.setAttribute('id', 'smo41120');
smo41120.addModifier(new VF.Dot(), 0);
smo41136v1ar.push(smo41120);
smo41136v1.addTickables(smo41136v1ar)
fmtsmo4113647.joinVoices([smo41136v1]);
const fmtsmo4236847 = new VF.Formatter();
//
// voices and notes for stave 2 47
const smo42368v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42368v0ar = [];
const smo42349 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo42349'] = smo42349;
smo42349.setAttribute('id', 'smo42349');
smo42368v0ar.push(smo42349);
const smo42350 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo42350'] = smo42350;
smo42350.setAttribute('id', 'smo42350');
smo42368v0ar.push(smo42350);
const smo42351 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo42351'] = smo42351;
smo42351.setAttribute('id', 'smo42351');
smo42368v0ar.push(smo42351);
const smo42352 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo42352'] = smo42352;
smo42352.setAttribute('id', 'smo42352');
smo42368v0ar.push(smo42352);
smo42368v0.addTickables(smo42368v0ar)
fmtsmo4236847.joinVoices([smo42368v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
const dirsmo48937 = smo39965.getStemDirection();
smo39965.setStemDirection(dirsmo48937);
smo39968.setStemDirection(dirsmo48937);
smo39971.setStemDirection(dirsmo48937);
const smo48937 = new VF.Beam([smo39965,smo39968,smo39971]);
 
// formatting measures in staff group smo42632
fmtsmo3998947.format([smo39989v0,smo41136v0,smo41136v1,smo42368v0], 275);
const stavesmo39989 = new VF.Stave(921, 98.0266026666668, 289);
stavesmo39989.setAttribute('id', 'stavesmo39989');
stavesmo39989.setBegBarType(VF.Barline.type.NONE);
stavesmo39989.setContext(context);
stavesmo39989.draw();
smo39989v0.draw(context, stavesmo39989);
smo48937.setContext(context);
smo48937.draw();
const stavesmo41136 = new VF.Stave(921, 280.0266026666668, 289);
stavesmo41136.setAttribute('id', 'stavesmo41136');
stavesmo41136.setBegBarType(VF.Barline.type.NONE);
stavesmo41136.setContext(context);
stavesmo41136.draw();
smo41136v0.draw(context, stavesmo41136);
smo41136v1.draw(context, stavesmo41136);
const stavesmo42368 = new VF.Stave(921, 386.0266026666668, 289);
stavesmo42368.setAttribute('id', 'stavesmo42368');
stavesmo42368.setBegBarType(VF.Barline.type.NONE);
stavesmo42368.setContext(context);
stavesmo42368.draw();
smo42368v0.draw(context, stavesmo42368);
const rightsmo42632stavesmo399892 = new VF.StaveConnector(stavesmo39989, stavesmo42368).setType(0);
rightsmo42632stavesmo399892.setContext(context).draw();
const fmtsmo4000848 = new VF.Formatter();
//
// voices and notes for stave 0 48
const smo40008v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40008v0ar = [];
const smo39990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39990'] = smo39990;
smo39990.setAttribute('id', 'smo39990');
smo39990.addModifier(new VF.Dot(), 0);
const smo39991 = new VF.Annotation('schon');
smo39991.setAttribute('id', 'smo39991');
smo39991.setFont('Merriweather', 12, 'normal');
smo39991.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39990.addModifier(smo39991);
smo39991.addClass('lyric lyric-0');
const smo39992 = new VF.Annotation('Lied!');
smo39992.setAttribute('id', 'smo39992');
smo39992.setFont('Merriweather', 12, 'normal');
smo39992.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39990.addModifier(smo39992);
smo39992.addClass('lyric lyric-1');
smo40008v0ar.push(smo39990);
smo40008v0.addTickables(smo40008v0ar)
fmtsmo4000848.joinVoices([smo40008v0]);
const fmtsmo4115848 = new VF.Formatter();
//
// voices and notes for stave 1 48
const smo41158v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41158v0ar = [];
const smo41137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo41137'] = smo41137;
smo41137.setAttribute('id', 'smo41137');
smo41137.addModifier(new VF.Dot(), 0);
smo41158v0ar.push(smo41137);
const smo41138 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo41138'] = smo41138;
smo41138.setAttribute('id', 'smo41138');
smo41158v0ar.push(smo41138);
const smo41139 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo41139'] = smo41139;
smo41139.setAttribute('id', 'smo41139');
smo41158v0ar.push(smo41139);
smo41158v0.addTickables(smo41158v0ar)
fmtsmo4115848.joinVoices([smo41158v0]);
const smo41158v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41158v1ar = [];
const smo41140 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/5/r"]}'))
noteHash['smo41140'] = smo41140;
smo41140.setAttribute('id', 'smo41140');
smo41140.addModifier(new VF.Dot(), 0);
smo41158v1ar.push(smo41140);
const smo41141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo41141'] = smo41141;
smo41141.setAttribute('id', 'smo41141');
smo41158v1ar.push(smo41141);
const smo41142 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo41142'] = smo41142;
smo41142.setAttribute('id', 'smo41142');
smo41158v1ar.push(smo41142);
smo41158v1.addTickables(smo41158v1ar)
fmtsmo4115848.joinVoices([smo41158v1]);
const fmtsmo4238848 = new VF.Formatter();
//
// voices and notes for stave 2 48
const smo42388v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42388v0ar = [];
const smo42369 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo42369'] = smo42369;
smo42369.setAttribute('id', 'smo42369');
smo42388v0ar.push(smo42369);
const smo42370 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo42370'] = smo42370;
smo42370.setAttribute('id', 'smo42370');
smo42388v0ar.push(smo42370);
const smo42371 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo42371'] = smo42371;
smo42371.setAttribute('id', 'smo42371');
smo42388v0ar.push(smo42371);
const smo42372 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo42372'] = smo42372;
smo42372.setAttribute('id', 'smo42372');
smo42388v0ar.push(smo42372);
smo42388v0.addTickables(smo42388v0ar)
fmtsmo4238848.joinVoices([smo42388v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo4000848.format([smo40008v0,smo41158v0,smo41158v1,smo42388v0], 152);
const stavesmo40008 = new VF.Stave(66, 516.0266026666668, 226);
stavesmo40008.setAttribute('id', 'stavesmo40008');
stavesmo40008.setBegBarType(1);
stavesmo40008.addClef('treble');
const keysmo40008 = new VF.KeySignature('G');
keysmo40008.addToStave(stavesmo40008);
stavesmo40008.setContext(context);
stavesmo40008.draw();
smo40008v0.draw(context, stavesmo40008);
const stavesmo41158 = new VF.Stave(66, 688.0266026666668, 226);
stavesmo41158.setAttribute('id', 'stavesmo41158');
stavesmo41158.setBegBarType(1);
stavesmo41158.addClef('treble');
const keysmo41158 = new VF.KeySignature('G');
keysmo41158.addToStave(stavesmo41158);
stavesmo41158.setContext(context);
stavesmo41158.draw();
smo41158v0.draw(context, stavesmo41158);
smo41158v1.draw(context, stavesmo41158);
const stavesmo42388 = new VF.Stave(66, 780.0266026666668, 226);
stavesmo42388.setAttribute('id', 'stavesmo42388');
stavesmo42388.setBegBarType(1);
stavesmo42388.addClef('bass');
const keysmo42388 = new VF.KeySignature('G');
keysmo42388.addToStave(stavesmo42388);
stavesmo42388.setContext(context);
stavesmo42388.draw();
smo42388v0.draw(context, stavesmo42388);
const leftsmo42632stavesmo400082 = new VF.StaveConnector(stavesmo40008, stavesmo42388).setType(1);
leftsmo42632stavesmo400082.setContext(context).draw();
const fmtsmo4003849 = new VF.Formatter();
//
// voices and notes for stave 0 49
const smo40038v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40038v0ar = [];
const smo40009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo40009'] = smo40009;
smo40009.setAttribute('id', 'smo40009');
const smo40010 = new VF.Annotation('-');
smo40010.setAttribute('id', 'smo40010');
smo40010.setFont('Merriweather', 12, 'normal');
smo40010.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo40009.addModifier(smo40010);
smo40010.addClass('lyric lyric-0 lyric-hyphen');
smo40038v0ar.push(smo40009);
const smo40011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo40011'] = smo40011;
smo40011.setAttribute('id', 'smo40011');
const smo40012 = new VF.Annotation('denn');
smo40012.setAttribute('id', 'smo40012');
smo40012.setFont('Merriweather', 12, 'normal');
smo40012.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo40011.addModifier(smo40012);
smo40012.addClass('lyric lyric-0');
const smo40013 = new VF.Annotation('Es');
smo40013.setAttribute('id', 'smo40013');
smo40013.setFont('Merriweather', 12, 'normal');
smo40013.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo40011.addModifier(smo40013);
smo40013.addClass('lyric lyric-1');
smo40038v0ar.push(smo40011);
const smo40014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo40014'] = smo40014;
smo40014.setAttribute('id', 'smo40014');
const smo40015 = new VF.Annotation('all');
smo40015.setAttribute('id', 'smo40015');
smo40015.setFont('Merriweather', 12, 'normal');
smo40015.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo40014.addModifier(smo40015);
smo40015.addClass('lyric lyric-0');
const smo40016 = new VF.Annotation('soli');
smo40016.setAttribute('id', 'smo40016');
smo40016.setFont('Merriweather', 12, 'normal');
smo40016.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo40014.addModifier(smo40016);
smo40016.addClass('lyric lyric-1');
smo40038v0ar.push(smo40014);
const smo40017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo40017'] = smo40017;
smo40017.setAttribute('id', 'smo40017');
const smo40018 = new VF.Annotation('sei');
smo40018.setAttribute('id', 'smo40018');
smo40018.setFont('Merriweather', 12, 'normal');
smo40018.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo40017.addModifier(smo40018);
smo40018.addClass('lyric lyric-0 lyric-hyphen');
const smo40019 = new VF.Annotation('zu');
smo40019.setAttribute('id', 'smo40019');
smo40019.setFont('Merriweather', 12, 'normal');
smo40019.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo40017.addModifier(smo40019);
smo40019.addClass('lyric lyric-1 lyric-hyphen');
smo40038v0ar.push(smo40017);
const smo40020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo40020'] = smo40020;
smo40020.setAttribute('id', 'smo40020');
const smo40021 = new VF.Annotation('ne');
smo40021.setAttribute('id', 'smo40021');
smo40021.setFont('Merriweather', 12, 'normal');
smo40021.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo40020.addModifier(smo40021);
smo40021.addClass('lyric lyric-0');
const smo40022 = new VF.Annotation('mir');
smo40022.setAttribute('id', 'smo40022');
smo40022.setFont('Merriweather', 12, 'normal');
smo40022.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo40020.addModifier(smo40022);
smo40022.addClass('lyric lyric-1');
smo40038v0ar.push(smo40020);
smo40038v0.addTickables(smo40038v0ar)
fmtsmo4003849.joinVoices([smo40038v0]);
const fmtsmo4117649 = new VF.Formatter();
//
// voices and notes for stave 1 49
const smo41176v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41176v0ar = [];
const smo41159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo41159'] = smo41159;
smo41159.setAttribute('id', 'smo41159');
smo41159.addModifier(new VF.Dot(), 0);
smo41176v0ar.push(smo41159);
smo41176v0.addTickables(smo41176v0ar)
fmtsmo4117649.joinVoices([smo41176v0]);
const smo41176v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41176v1ar = [];
const smo41160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/6/n"]}'))
noteHash['smo41160'] = smo41160;
smo41160.setAttribute('id', 'smo41160');
smo41160.addModifier(new VF.Dot(), 0);
smo41176v1ar.push(smo41160);
smo41176v1.addTickables(smo41176v1ar)
fmtsmo4117649.joinVoices([smo41176v1]);
const fmtsmo4240849 = new VF.Formatter();
//
// voices and notes for stave 2 49
const smo42408v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42408v0ar = [];
const smo42389 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo42389'] = smo42389;
smo42389.setAttribute('id', 'smo42389');
smo42408v0ar.push(smo42389);
const smo42390 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo42390'] = smo42390;
smo42390.setAttribute('id', 'smo42390');
smo42408v0ar.push(smo42390);
const smo42391 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo42391'] = smo42391;
smo42391.setAttribute('id', 'smo42391');
smo42408v0ar.push(smo42391);
const smo42392 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo42392'] = smo42392;
smo42392.setAttribute('id', 'smo42392');
smo42408v0ar.push(smo42392);
smo42408v0.addTickables(smo42408v0ar)
fmtsmo4240849.joinVoices([smo42408v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
const dirsmo48957 = smo40014.getStemDirection();
smo40014.setStemDirection(dirsmo48957);
smo40017.setStemDirection(dirsmo48957);
smo40020.setStemDirection(dirsmo48957);
const smo48957 = new VF.Beam([smo40014,smo40017,smo40020]);
 
// formatting measures in staff group smo42632
fmtsmo4003849.format([smo40038v0,smo41176v0,smo41176v1,smo42408v0], 271);
const stavesmo40038 = new VF.Stave(292, 516.0266026666668, 285);
stavesmo40038.setAttribute('id', 'stavesmo40038');
stavesmo40038.setBegBarType(VF.Barline.type.NONE);
stavesmo40038.setContext(context);
stavesmo40038.draw();
smo40038v0.draw(context, stavesmo40038);
smo48957.setContext(context);
smo48957.draw();
const stavesmo41176 = new VF.Stave(292, 688.0266026666668, 285);
stavesmo41176.setAttribute('id', 'stavesmo41176');
stavesmo41176.setBegBarType(VF.Barline.type.NONE);
stavesmo41176.setContext(context);
stavesmo41176.draw();
smo41176v0.draw(context, stavesmo41176);
smo41176v1.draw(context, stavesmo41176);
const stavesmo42408 = new VF.Stave(292, 780.0266026666668, 285);
stavesmo42408.setAttribute('id', 'stavesmo42408');
stavesmo42408.setBegBarType(VF.Barline.type.NONE);
stavesmo42408.setContext(context);
stavesmo42408.draw();
smo42408v0.draw(context, stavesmo42408);
const fmtsmo4006050 = new VF.Formatter();
//
// voices and notes for stave 0 50
const smo40060v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40060v0ar = [];
const smo40039 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo40039'] = smo40039;
smo40039.setAttribute('id', 'smo40039');
smo40039.addModifier(new VF.Dot(), 0);
const smo40040 = new VF.Annotation('Lie');
smo40040.setAttribute('id', 'smo40040');
smo40040.setFont('Merriweather', 12, 'normal');
smo40040.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo40039.addModifier(smo40040);
smo40040.addClass('lyric lyric-0 lyric-hyphen');
const smo40041 = new VF.Annotation('so');
smo40041.setAttribute('id', 'smo40041');
smo40041.setFont('Merriweather', 12, 'normal');
smo40041.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo40039.addModifier(smo40041);
smo40041.addClass('lyric lyric-1 lyric-hyphen');
smo40060v0ar.push(smo40039);
const smo40042 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo40042'] = smo40042;
smo40042.setAttribute('id', 'smo40042');
smo40042.addModifier(new VF.Dot(), 0);
const smo40043 = new VF.Annotation('der');
smo40043.setAttribute('id', 'smo40043');
smo40043.setFont('Merriweather', 12, 'normal');
smo40043.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo40042.addModifier(smo40043);
smo40043.addClass('lyric lyric-0');
const smo40044 = new VF.Annotation('gen');
smo40044.setAttribute('id', 'smo40044');
smo40044.setFont('Merriweather', 12, 'normal');
smo40044.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo40042.addModifier(smo40044);
smo40044.addClass('lyric lyric-1');
smo40060v0ar.push(smo40042);
smo40060v0.addTickables(smo40060v0ar)
fmtsmo4006050.joinVoices([smo40060v0]);
const fmtsmo4119450 = new VF.Formatter();
//
// voices and notes for stave 1 50
const smo41194v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41194v0ar = [];
const smo41177 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo41177'] = smo41177;
smo41177.setAttribute('id', 'smo41177');
smo41177.addModifier(new VF.Dot(), 0);
smo41194v0ar.push(smo41177);
const smo41178 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n","dn/5/n"]}'))
noteHash['smo41178'] = smo41178;
smo41178.setAttribute('id', 'smo41178');
smo41178.addModifier(new VF.Dot(), 0);
smo41178.addModifier(new VF.Dot(), 1);
smo41194v0ar.push(smo41178);
smo41194v0.addTickables(smo41194v0ar)
fmtsmo4119450.joinVoices([smo41194v0]);
const fmtsmo4242850 = new VF.Formatter();
//
// voices and notes for stave 2 50
const smo42428v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42428v0ar = [];
const smo42409 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo42409'] = smo42409;
smo42409.setAttribute('id', 'smo42409');
smo42428v0ar.push(smo42409);
const smo42410 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo42410'] = smo42410;
smo42410.setAttribute('id', 'smo42410');
smo42428v0ar.push(smo42410);
const smo42411 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","cn/4/n"]}'))
noteHash['smo42411'] = smo42411;
smo42411.setAttribute('id', 'smo42411');
smo42428v0ar.push(smo42411);
const smo42412 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","cn/4/n"]}'))
noteHash['smo42412'] = smo42412;
smo42412.setAttribute('id', 'smo42412');
smo42428v0ar.push(smo42412);
smo42428v0.addTickables(smo42428v0ar)
fmtsmo4242850.joinVoices([smo42428v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo4006050.format([smo40060v0,smo41194v0,smo42428v0], 149);
const stavesmo40060 = new VF.Stave(577, 516.0266026666668, 163);
stavesmo40060.setAttribute('id', 'stavesmo40060');
stavesmo40060.setBegBarType(VF.Barline.type.NONE);
stavesmo40060.setContext(context);
stavesmo40060.draw();
smo40060v0.draw(context, stavesmo40060);
const stavesmo41194 = new VF.Stave(577, 688.0266026666668, 163);
stavesmo41194.setAttribute('id', 'stavesmo41194');
stavesmo41194.setBegBarType(VF.Barline.type.NONE);
stavesmo41194.setContext(context);
stavesmo41194.draw();
smo41194v0.draw(context, stavesmo41194);
const stavesmo42428 = new VF.Stave(577, 780.0266026666668, 163);
stavesmo42428.setAttribute('id', 'stavesmo42428');
stavesmo42428.setBegBarType(VF.Barline.type.NONE);
stavesmo42428.setContext(context);
stavesmo42428.draw();
smo42428v0.draw(context, stavesmo42428);
const fmtsmo4008251 = new VF.Formatter();
//
// voices and notes for stave 0 51
const smo40082v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40082v0ar = [];
const smo40061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo40061'] = smo40061;
smo40061.setAttribute('id', 'smo40061');
smo40061.addModifier(new VF.Dot(), 0);
const smo40062 = new VF.Annotation('-');
smo40062.setAttribute('id', 'smo40062');
smo40062.setFont('Merriweather', 12, 'normal');
smo40062.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo40061.addModifier(smo40062);
smo40062.addClass('lyric lyric-0 lyric-hyphen');
smo40082v0ar.push(smo40061);
const smo40063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo40063'] = smo40063;
smo40063.setAttribute('id', 'smo40063');
smo40082v0ar.push(smo40063);
const smo40064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo40064'] = smo40064;
smo40064.setAttribute('id', 'smo40064');
const smo40065 = new VF.Annotation('sie');
smo40065.setAttribute('id', 'smo40065');
smo40065.setFont('Merriweather', 12, 'normal');
smo40065.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo40064.addModifier(smo40065);
smo40065.addClass('lyric lyric-0');
const smo40066 = new VF.Annotation('Ich');
smo40066.setAttribute('id', 'smo40066');
smo40066.setFont('Merriweather', 12, 'normal');
smo40066.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo40064.addModifier(smo40066);
smo40066.addClass('lyric lyric-1');
smo40082v0ar.push(smo40064);
smo40082v0.addTickables(smo40082v0ar)
fmtsmo4008251.joinVoices([smo40082v0]);
const fmtsmo4121151 = new VF.Formatter();
//
// voices and notes for stave 1 51
const smo41211v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41211v0ar = [];
const smo41195 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n","dn/5/n"]}'))
noteHash['smo41195'] = smo41195;
smo41195.setAttribute('id', 'smo41195');
smo41195.addModifier(new VF.Dot(), 0);
smo41195.addModifier(new VF.Dot(), 1);
smo41211v0ar.push(smo41195);
smo41211v0.addTickables(smo41211v0ar)
fmtsmo4121151.joinVoices([smo41211v0]);
const fmtsmo4244551 = new VF.Formatter();
//
// voices and notes for stave 2 51
const smo42445v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42445v0ar = [];
const smo42429 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n","cn/4/n"]}'))
noteHash['smo42429'] = smo42429;
smo42429.setAttribute('id', 'smo42429');
smo42429.addModifier(new VF.Dot(), 0);
smo42429.addModifier(new VF.Dot(), 1);
smo42445v0ar.push(smo42429);
smo42445v0.addTickables(smo42445v0ar)
fmtsmo4244551.joinVoices([smo42445v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo4008251.format([smo40082v0,smo41211v0,smo42445v0], 116);
const stavesmo40082 = new VF.Stave(740, 516.0266026666668, 130);
stavesmo40082.setAttribute('id', 'stavesmo40082');
stavesmo40082.setBegBarType(VF.Barline.type.NONE);
stavesmo40082.setContext(context);
stavesmo40082.draw();
smo40082v0.draw(context, stavesmo40082);
const stavesmo41211 = new VF.Stave(740, 688.0266026666668, 130);
stavesmo41211.setAttribute('id', 'stavesmo41211');
stavesmo41211.setBegBarType(VF.Barline.type.NONE);
stavesmo41211.setContext(context);
stavesmo41211.draw();
smo41211v0.draw(context, stavesmo41211);
const stavesmo42445 = new VF.Stave(740, 780.0266026666668, 130);
stavesmo42445.setAttribute('id', 'stavesmo42445');
stavesmo42445.setBegBarType(VF.Barline.type.NONE);
stavesmo42445.setContext(context);
stavesmo42445.draw();
smo42445v0.draw(context, stavesmo42445);
const fmtsmo4011052 = new VF.Formatter();
//
// voices and notes for stave 0 52
const smo40110v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40110v0ar = [];
const smo40083 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo40083'] = smo40083;
smo40083.setAttribute('id', 'smo40083');
const smo40084 = new VF.Annotation('sind');
smo40084.setAttribute('id', 'smo40084');
smo40084.setFont('Merriweather', 12, 'normal');
smo40084.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo40083.addModifier(smo40084);
smo40084.addClass('lyric lyric-0');
const smo40085 = new VF.Annotation('bin');
smo40085.setAttribute('id', 'smo40085');
smo40085.setFont('Merriweather', 12, 'normal');
smo40085.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo40083.addModifier(smo40085);
smo40085.addClass('lyric lyric-1');
smo40110v0ar.push(smo40083);
const smo40086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo40086'] = smo40086;
smo40086.setAttribute('id', 'smo40086');
const smo40087 = new VF.Annotation('mir');
smo40087.setAttribute('id', 'smo40087');
smo40087.setFont('Merriweather', 12, 'normal');
smo40087.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo40086.addModifier(smo40087);
smo40087.addClass('lyric lyric-0');
const smo40088 = new VF.Annotation('wie');
smo40088.setAttribute('id', 'smo40088');
smo40088.setFont('Merriweather', 12, 'normal');
smo40088.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo40086.addModifier(smo40088);
smo40088.addClass('lyric lyric-1 lyric-hyphen');
smo40110v0ar.push(smo40086);
const smo40089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo40089'] = smo40089;
smo40089.setAttribute('id', 'smo40089');
const smo40090 = new VF.Annotation('be');
smo40090.setAttribute('id', 'smo40090');
smo40090.setFont('Merriweather', 12, 'normal');
smo40090.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo40089.addModifier(smo40090);
smo40090.addClass('lyric lyric-0 lyric-hyphen');
const smo40091 = new VF.Annotation('der');
smo40091.setAttribute('id', 'smo40091');
smo40091.setFont('Merriweather', 12, 'normal');
smo40091.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo40089.addModifier(smo40091);
smo40091.addClass('lyric lyric-1');
smo40110v0ar.push(smo40089);
const smo40092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo40092'] = smo40092;
smo40092.setAttribute('id', 'smo40092');
smo40092.addModifier(new VF.Dot(), 0);
const smo40093 = new VF.Annotation('kannt!');
smo40093.setAttribute('id', 'smo40093');
smo40093.setFont('Merriweather', 12, 'normal');
smo40093.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo40092.addModifier(smo40093);
smo40093.addClass('lyric lyric-0');
const smo40094 = new VF.Annotation('da!');
smo40094.setAttribute('id', 'smo40094');
smo40094.setFont('Merriweather', 12, 'normal');
smo40094.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo40092.addModifier(smo40094);
smo40094.addClass('lyric lyric-1');
smo40110v0ar.push(smo40092);
smo40110v0.addTickables(smo40110v0ar)
fmtsmo4011052.joinVoices([smo40110v0]);
const fmtsmo4122852 = new VF.Formatter();
//
// voices and notes for stave 1 52
const smo41228v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41228v0ar = [];
const smo41212 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n","cn/5/n"]}'))
noteHash['smo41212'] = smo41212;
smo41212.setAttribute('id', 'smo41212');
smo41212.addModifier(new VF.Dot(), 0);
smo41212.addModifier(new VF.Dot(), 1);
smo41228v0ar.push(smo41212);
smo41228v0.addTickables(smo41228v0ar)
fmtsmo4122852.joinVoices([smo41228v0]);
const fmtsmo4246252 = new VF.Formatter();
//
// voices and notes for stave 2 52
const smo42462v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42462v0ar = [];
const smo42446 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo42446'] = smo42446;
smo42446.setAttribute('id', 'smo42446');
smo42446.addModifier(new VF.Dot(), 0);
smo42462v0ar.push(smo42446);
smo42462v0.addTickables(smo42462v0ar)
fmtsmo4246252.joinVoices([smo42462v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
const dirsmo48976 = smo40083.getStemDirection();
smo40083.setStemDirection(dirsmo48976);
smo40086.setStemDirection(dirsmo48976);
smo40089.setStemDirection(dirsmo48976);
const smo48976 = new VF.Beam([smo40083,smo40086,smo40089]);
 
// formatting measures in staff group smo42632
fmtsmo4011052.format([smo40110v0,smo41228v0,smo42462v0], 254);
const stavesmo40110 = new VF.Stave(870, 516.0266026666668, 268);
stavesmo40110.setAttribute('id', 'stavesmo40110');
stavesmo40110.setBegBarType(VF.Barline.type.NONE);
stavesmo40110.setContext(context);
stavesmo40110.draw();
smo40110v0.draw(context, stavesmo40110);
smo48976.setContext(context);
smo48976.draw();
const stavesmo41228 = new VF.Stave(870, 688.0266026666668, 268);
stavesmo41228.setAttribute('id', 'stavesmo41228');
stavesmo41228.setBegBarType(VF.Barline.type.NONE);
stavesmo41228.setContext(context);
stavesmo41228.draw();
smo41228v0.draw(context, stavesmo41228);
const stavesmo42462 = new VF.Stave(870, 780.0266026666668, 268);
stavesmo42462.setAttribute('id', 'stavesmo42462');
stavesmo42462.setBegBarType(VF.Barline.type.NONE);
stavesmo42462.setContext(context);
stavesmo42462.draw();
smo42462v0.draw(context, stavesmo42462);
const fmtsmo4012853 = new VF.Formatter();
//
// voices and notes for stave 0 53
const smo40128v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40128v0ar = [];
const smo40111 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo40111'] = smo40111;
smo40111.setAttribute('id', 'smo40111');
smo40111.addModifier(new VF.Dot(), 0);
const smo40112 = new VF.Annotation('-');
smo40112.setAttribute('id', 'smo40112');
smo40112.setFont('Merriweather', 12, 'normal');
smo40112.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo40111.addModifier(smo40112);
smo40112.addClass('lyric lyric-0 lyric-hyphen');
smo40128v0ar.push(smo40111);
smo40128v0.addTickables(smo40128v0ar)
fmtsmo4012853.joinVoices([smo40128v0]);
const fmtsmo4124553 = new VF.Formatter();
//
// voices and notes for stave 1 53
const smo41245v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41245v0ar = [];
const smo41229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n","cn/5/n"]}'))
noteHash['smo41229'] = smo41229;
smo41229.setAttribute('id', 'smo41229');
smo41229.addModifier(new VF.Dot(), 0);
smo41229.addModifier(new VF.Dot(), 1);
smo41245v0ar.push(smo41229);
smo41245v0.addTickables(smo41245v0ar)
fmtsmo4124553.joinVoices([smo41245v0]);
const fmtsmo4247953 = new VF.Formatter();
//
// voices and notes for stave 2 53
const smo42479v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42479v0ar = [];
const smo42463 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo42463'] = smo42463;
smo42463.setAttribute('id', 'smo42463');
smo42463.addModifier(new VF.Dot(), 0);
smo42479v0ar.push(smo42463);
smo42479v0.addTickables(smo42479v0ar)
fmtsmo4247953.joinVoices([smo42479v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo4012853.format([smo40128v0,smo41245v0,smo42479v0], 58);
const stavesmo40128 = new VF.Stave(1138, 516.0266026666668, 72);
stavesmo40128.setAttribute('id', 'stavesmo40128');
stavesmo40128.setBegBarType(VF.Barline.type.NONE);
stavesmo40128.setContext(context);
stavesmo40128.draw();
smo40128v0.draw(context, stavesmo40128);
const stavesmo41245 = new VF.Stave(1138, 688.0266026666668, 72);
stavesmo41245.setAttribute('id', 'stavesmo41245');
stavesmo41245.setBegBarType(VF.Barline.type.NONE);
stavesmo41245.setContext(context);
stavesmo41245.draw();
smo41245v0.draw(context, stavesmo41245);
const stavesmo42479 = new VF.Stave(1138, 780.0266026666668, 72);
stavesmo42479.setAttribute('id', 'stavesmo42479');
stavesmo42479.setBegBarType(VF.Barline.type.NONE);
stavesmo42479.setContext(context);
stavesmo42479.draw();
smo42479v0.draw(context, stavesmo42479);
const rightsmo42632stavesmo401282 = new VF.StaveConnector(stavesmo40128, stavesmo42479).setType(0);
rightsmo42632stavesmo401282.setContext(context).draw();
const fmtsmo4014754 = new VF.Formatter();
//
// voices and notes for stave 0 54
const smo40147v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40147v0ar = [];
const smo40129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo40129'] = smo40129;
smo40129.setAttribute('id', 'smo40129');
smo40129.addModifier(new VF.Dot(), 0);
const smo40130 = new VF.Annotation('-');
smo40130.setAttribute('id', 'smo40130');
smo40130.setFont('Merriweather', 12, 'normal');
smo40130.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo40129.addModifier(smo40130);
smo40130.addClass('lyric lyric-0 lyric-hyphen');
smo40147v0ar.push(smo40129);
smo40147v0.addTickables(smo40147v0ar)
fmtsmo4014754.joinVoices([smo40147v0]);
const fmtsmo4126654 = new VF.Formatter();
//
// voices and notes for stave 1 54
const smo41266v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41266v0ar = [];
const smo41246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo41246'] = smo41246;
smo41246.setAttribute('id', 'smo41246');
smo41266v0ar.push(smo41246);
const smo41247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo41247'] = smo41247;
smo41247.setAttribute('id', 'smo41247');
smo41266v0ar.push(smo41247);
const smo41248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo41248'] = smo41248;
smo41248.setAttribute('id', 'smo41248');
smo41266v0ar.push(smo41248);
const smo41249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo41249'] = smo41249;
smo41249.setAttribute('id', 'smo41249');
smo41266v0ar.push(smo41249);
smo41266v0.addTickables(smo41266v0ar)
fmtsmo4126654.joinVoices([smo41266v0]);
const fmtsmo4250054 = new VF.Formatter();
//
// voices and notes for stave 2 54
const smo42500v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42500v0ar = [];
const smo42480 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo42480'] = smo42480;
smo42480.setAttribute('id', 'smo42480');
smo42500v0ar.push(smo42480);
const smo42481 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo42481'] = smo42481;
smo42481.setAttribute('id', 'smo42481');
smo42500v0ar.push(smo42481);
const smo42482 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo42482'] = smo42482;
smo42482.setAttribute('id', 'smo42482');
smo42500v0ar.push(smo42482);
const smo42483 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo42483'] = smo42483;
smo42483.setAttribute('id', 'smo42483');
smo42500v0ar.push(smo42483);
smo42500v0.addTickables(smo42500v0ar)
fmtsmo4250054.joinVoices([smo42500v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo4014754.format([smo40147v0,smo41266v0,smo42500v0], 111);
const stavesmo40147 = new VF.Stave(66, 909.0266026666668, 185);
stavesmo40147.setAttribute('id', 'stavesmo40147');
stavesmo40147.setBegBarType(1);
stavesmo40147.addClef('treble');
const keysmo40147 = new VF.KeySignature('G');
keysmo40147.addToStave(stavesmo40147);
stavesmo40147.setContext(context);
stavesmo40147.draw();
smo40147v0.draw(context, stavesmo40147);
const stavesmo41266 = new VF.Stave(66, 1030.0266026666668, 185);
stavesmo41266.setAttribute('id', 'stavesmo41266');
stavesmo41266.setBegBarType(1);
stavesmo41266.addClef('treble');
const keysmo41266 = new VF.KeySignature('G');
keysmo41266.addToStave(stavesmo41266);
stavesmo41266.setContext(context);
stavesmo41266.draw();
smo41266v0.draw(context, stavesmo41266);
const stavesmo42500 = new VF.Stave(66, 1106.0266026666668, 185);
stavesmo42500.setAttribute('id', 'stavesmo42500');
stavesmo42500.setBegBarType(1);
stavesmo42500.addClef('bass');
const keysmo42500 = new VF.KeySignature('G');
keysmo42500.addToStave(stavesmo42500);
stavesmo42500.setContext(context);
stavesmo42500.draw();
smo42500v0.draw(context, stavesmo42500);
const leftsmo42632stavesmo401472 = new VF.StaveConnector(stavesmo40147, stavesmo42500).setType(1);
leftsmo42632stavesmo401472.setContext(context).draw();
const fmtsmo4016455 = new VF.Formatter();
//
// voices and notes for stave 0 55
const smo40164v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40164v0ar = [];
const smo40148 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo40148'] = smo40148;
smo40148.setAttribute('id', 'smo40148');
smo40148.addModifier(new VF.Dot(), 0);
smo40164v0ar.push(smo40148);
smo40164v0.addTickables(smo40164v0ar)
fmtsmo4016455.joinVoices([smo40164v0]);
const fmtsmo4128655 = new VF.Formatter();
//
// voices and notes for stave 1 55
const smo41286v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41286v0ar = [];
const smo41267 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo41267'] = smo41267;
smo41267.setAttribute('id', 'smo41267');
smo41286v0ar.push(smo41267);
const smo41268 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo41268'] = smo41268;
smo41268.setAttribute('id', 'smo41268');
smo41286v0ar.push(smo41268);
const smo41269 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo41269'] = smo41269;
smo41269.setAttribute('id', 'smo41269');
smo41286v0ar.push(smo41269);
const smo41270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo41270'] = smo41270;
smo41270.setAttribute('id', 'smo41270');
smo41286v0ar.push(smo41270);
smo41286v0.addTickables(smo41286v0ar)
fmtsmo4128655.joinVoices([smo41286v0]);
const fmtsmo4252055 = new VF.Formatter();
//
// voices and notes for stave 2 55
const smo42520v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42520v0ar = [];
const smo42501 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo42501'] = smo42501;
smo42501.setAttribute('id', 'smo42501');
smo42520v0ar.push(smo42501);
const smo42502 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo42502'] = smo42502;
smo42502.setAttribute('id', 'smo42502');
smo42520v0ar.push(smo42502);
const smo42503 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo42503'] = smo42503;
smo42503.setAttribute('id', 'smo42503');
smo42520v0ar.push(smo42503);
const smo42504 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo42504'] = smo42504;
smo42504.setAttribute('id', 'smo42504');
smo42520v0ar.push(smo42504);
smo42520v0.addTickables(smo42520v0ar)
fmtsmo4252055.joinVoices([smo42520v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo4016455.format([smo40164v0,smo41286v0,smo42520v0], 106);
const stavesmo40164 = new VF.Stave(251, 909.0266026666668, 124);
stavesmo40164.setAttribute('id', 'stavesmo40164');
stavesmo40164.setBegBarType(VF.Barline.type.NONE);
stavesmo40164.setEndBarType(5);
stavesmo40164.setContext(context);
stavesmo40164.draw();
smo40164v0.draw(context, stavesmo40164);
const stavesmo41286 = new VF.Stave(251, 1030.0266026666668, 124);
stavesmo41286.setAttribute('id', 'stavesmo41286');
stavesmo41286.setBegBarType(VF.Barline.type.NONE);
stavesmo41286.setEndBarType(5);
stavesmo41286.setContext(context);
stavesmo41286.draw();
smo41286v0.draw(context, stavesmo41286);
const stavesmo42520 = new VF.Stave(251, 1106.0266026666668, 124);
stavesmo42520.setAttribute('id', 'stavesmo42520');
stavesmo42520.setBegBarType(VF.Barline.type.NONE);
stavesmo42520.setEndBarType(5);
stavesmo42520.setContext(context);
stavesmo42520.draw();
smo42520v0.draw(context, stavesmo42520);
const fmtsmo4018356 = new VF.Formatter();
//
// voices and notes for stave 0 56
const smo40183v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40183v0ar = [];
const smo40165 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo40165'] = smo40165;
smo40165.setAttribute('id', 'smo40165');
smo40165.addModifier(new VF.Dot(), 0);
const smo40166 = new VF.Annotation('-');
smo40166.setAttribute('id', 'smo40166');
smo40166.setFont('Merriweather', 12, 'normal');
smo40166.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo40165.addModifier(smo40166);
smo40166.addClass('lyric lyric-0 lyric-hyphen');
smo40183v0ar.push(smo40165);
smo40183v0.addTickables(smo40183v0ar)
fmtsmo4018356.joinVoices([smo40183v0]);
const fmtsmo4130556 = new VF.Formatter();
//
// voices and notes for stave 1 56
const smo41305v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41305v0ar = [];
const smo41287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo41287'] = smo41287;
smo41287.setAttribute('id', 'smo41287');
smo41287.addModifier(new VF.Dot(), 0);
smo41305v0ar.push(smo41287);
const smo41288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo41288'] = smo41288;
smo41288.setAttribute('id', 'smo41288');
smo41288.addModifier(new VF.Dot(), 0);
smo41305v0ar.push(smo41288);
smo41305v0.addTickables(smo41305v0ar)
fmtsmo4130556.joinVoices([smo41305v0]);
const fmtsmo4254156 = new VF.Formatter();
//
// voices and notes for stave 2 56
const smo42541v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42541v0ar = [];
const smo42521 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo42521'] = smo42521;
smo42521.setAttribute('id', 'smo42521');
smo42541v0ar.push(smo42521);
const smo42522 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo42522'] = smo42522;
smo42522.setAttribute('id', 'smo42522');
smo42541v0ar.push(smo42522);
const smo42523 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo42523'] = smo42523;
smo42523.setAttribute('id', 'smo42523');
smo42541v0ar.push(smo42523);
const smo42524 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo42524'] = smo42524;
smo42524.setAttribute('id', 'smo42524');
smo42541v0ar.push(smo42524);
smo42541v0.addTickables(smo42541v0ar)
fmtsmo4254156.joinVoices([smo42541v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo4018356.format([smo40183v0,smo41305v0,smo42541v0], 125);
const stavesmo40183 = new VF.Stave(375, 909.0266026666668, 139);
stavesmo40183.setAttribute('id', 'stavesmo40183');
stavesmo40183.setBegBarType(VF.Barline.type.NONE);
stavesmo40183.setContext(context);
stavesmo40183.draw();
smo40183v0.draw(context, stavesmo40183);
const stavesmo41305 = new VF.Stave(375, 1030.0266026666668, 139);
stavesmo41305.setAttribute('id', 'stavesmo41305');
stavesmo41305.setBegBarType(VF.Barline.type.NONE);
stavesmo41305.setContext(context);
stavesmo41305.draw();
smo41305v0.draw(context, stavesmo41305);
const stavesmo42541 = new VF.Stave(375, 1106.0266026666668, 139);
stavesmo42541.setAttribute('id', 'stavesmo42541');
stavesmo42541.setBegBarType(VF.Barline.type.NONE);
stavesmo42541.setContext(context);
stavesmo42541.draw();
smo42541v0.draw(context, stavesmo42541);
const fmtsmo4020157 = new VF.Formatter();
//
// voices and notes for stave 0 57
const smo40201v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40201v0ar = [];
const smo40184 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo40184'] = smo40184;
smo40184.setAttribute('id', 'smo40184');
smo40184.addModifier(new VF.Dot(), 0);
const smo40185 = new VF.Annotation('-');
smo40185.setAttribute('id', 'smo40185');
smo40185.setFont('Merriweather', 12, 'normal');
smo40185.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo40184.addModifier(smo40185);
smo40185.addClass('lyric lyric-0 lyric-hyphen');
smo40201v0ar.push(smo40184);
smo40201v0.addTickables(smo40201v0ar)
fmtsmo4020157.joinVoices([smo40201v0]);
const fmtsmo4132457 = new VF.Formatter();
//
// voices and notes for stave 1 57
const smo41324v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41324v0ar = [];
const smo41306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
noteHash['smo41306'] = smo41306;
smo41306.setAttribute('id', 'smo41306');
smo41306.addModifier(new VF.Dot(), 0);
smo41324v0ar.push(smo41306);
const smo41307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo41307'] = smo41307;
smo41307.setAttribute('id', 'smo41307');
smo41324v0ar.push(smo41307);
const smo41308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo41308'] = smo41308;
smo41308.setAttribute('id', 'smo41308');
smo41324v0ar.push(smo41308);
smo41324v0.addTickables(smo41324v0ar)
fmtsmo4132457.joinVoices([smo41324v0]);
const fmtsmo4256157 = new VF.Formatter();
//
// voices and notes for stave 2 57
const smo42561v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42561v0ar = [];
const smo42542 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo42542'] = smo42542;
smo42542.setAttribute('id', 'smo42542');
smo42561v0ar.push(smo42542);
const smo42543 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo42543'] = smo42543;
smo42543.setAttribute('id', 'smo42543');
smo42561v0ar.push(smo42543);
const smo42544 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo42544'] = smo42544;
smo42544.setAttribute('id', 'smo42544');
smo42561v0ar.push(smo42544);
const smo42545 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo42545'] = smo42545;
smo42545.setAttribute('id', 'smo42545');
smo42561v0ar.push(smo42545);
smo42561v0.addTickables(smo42561v0ar)
fmtsmo4256157.joinVoices([smo42561v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo4020157.format([smo40201v0,smo41324v0,smo42561v0], 110);
const stavesmo40201 = new VF.Stave(514, 909.0266026666668, 124);
stavesmo40201.setAttribute('id', 'stavesmo40201');
stavesmo40201.setBegBarType(VF.Barline.type.NONE);
stavesmo40201.setContext(context);
stavesmo40201.draw();
smo40201v0.draw(context, stavesmo40201);
const stavesmo41324 = new VF.Stave(514, 1030.0266026666668, 124);
stavesmo41324.setAttribute('id', 'stavesmo41324');
stavesmo41324.setBegBarType(VF.Barline.type.NONE);
stavesmo41324.setContext(context);
stavesmo41324.draw();
smo41324v0.draw(context, stavesmo41324);
const stavesmo42561 = new VF.Stave(514, 1106.0266026666668, 124);
stavesmo42561.setAttribute('id', 'stavesmo42561');
stavesmo42561.setBegBarType(VF.Barline.type.NONE);
stavesmo42561.setContext(context);
stavesmo42561.draw();
smo42561v0.draw(context, stavesmo42561);
const fmtsmo4021958 = new VF.Formatter();
//
// voices and notes for stave 0 58
const smo40219v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40219v0ar = [];
const smo40202 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo40202'] = smo40202;
smo40202.setAttribute('id', 'smo40202');
smo40202.addModifier(new VF.Dot(), 0);
const smo40203 = new VF.Annotation('-');
smo40203.setAttribute('id', 'smo40203');
smo40203.setFont('Merriweather', 12, 'normal');
smo40203.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo40202.addModifier(smo40203);
smo40203.addClass('lyric lyric-0 lyric-hyphen');
smo40219v0ar.push(smo40202);
smo40219v0.addTickables(smo40219v0ar)
fmtsmo4021958.joinVoices([smo40219v0]);
const fmtsmo4134558 = new VF.Formatter();
//
// voices and notes for stave 1 58
const smo41345v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41345v0ar = [];
const smo41325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo41325'] = smo41325;
smo41325.setAttribute('id', 'smo41325');
smo41345v0ar.push(smo41325);
const smo41326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo41326'] = smo41326;
smo41326.setAttribute('id', 'smo41326');
smo41345v0ar.push(smo41326);
const smo41327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo41327'] = smo41327;
smo41327.setAttribute('id', 'smo41327');
smo41345v0ar.push(smo41327);
const smo41328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo41328'] = smo41328;
smo41328.setAttribute('id', 'smo41328');
smo41345v0ar.push(smo41328);
const smo41329 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo41329'] = smo41329;
smo41329.setAttribute('id', 'smo41329');
smo41345v0ar.push(smo41329);
smo41345v0.addTickables(smo41345v0ar)
fmtsmo4134558.joinVoices([smo41345v0]);
const fmtsmo4258258 = new VF.Formatter();
//
// voices and notes for stave 2 58
const smo42582v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42582v0ar = [];
const smo42562 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n","an/3/n"]}'))
noteHash['smo42562'] = smo42562;
smo42562.setAttribute('id', 'smo42562');
smo42582v0ar.push(smo42562);
const smo42563 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
noteHash['smo42563'] = smo42563;
smo42563.setAttribute('id', 'smo42563');
smo42582v0ar.push(smo42563);
const smo42564 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n","an/3/n"]}'))
noteHash['smo42564'] = smo42564;
smo42564.setAttribute('id', 'smo42564');
smo42582v0ar.push(smo42564);
const smo42565 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo42565'] = smo42565;
smo42565.setAttribute('id', 'smo42565');
smo42582v0ar.push(smo42565);
const smo42566 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo42566'] = smo42566;
smo42566.setAttribute('id', 'smo42566');
smo42582v0ar.push(smo42566);
smo42582v0.addTickables(smo42582v0ar)
fmtsmo4258258.joinVoices([smo42582v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
const dirsmo49018 = smo41325.getStemDirection();
smo41325.setStemDirection(dirsmo49018);
smo41326.setStemDirection(dirsmo49018);
smo41327.setStemDirection(dirsmo49018);
const smo49018 = new VF.Beam([smo41325,smo41326,smo41327]);
const dirsmo49021 = smo42562.getStemDirection();
smo42562.setStemDirection(dirsmo49021);
smo42563.setStemDirection(dirsmo49021);
smo42564.setStemDirection(dirsmo49021);
const smo49021 = new VF.Beam([smo42562,smo42563,smo42564]);
 
// formatting measures in staff group smo42632
fmtsmo4021958.format([smo40219v0,smo41345v0,smo42582v0], 140);
const stavesmo40219 = new VF.Stave(638, 909.0266026666668, 154);
stavesmo40219.setAttribute('id', 'stavesmo40219');
stavesmo40219.setBegBarType(VF.Barline.type.NONE);
stavesmo40219.setContext(context);
stavesmo40219.draw();
smo40219v0.draw(context, stavesmo40219);
const stavesmo41345 = new VF.Stave(638, 1030.0266026666668, 154);
stavesmo41345.setAttribute('id', 'stavesmo41345');
stavesmo41345.setBegBarType(VF.Barline.type.NONE);
stavesmo41345.setContext(context);
stavesmo41345.draw();
smo41345v0.draw(context, stavesmo41345);
smo49018.setContext(context);
smo49018.draw();
const stavesmo42582 = new VF.Stave(638, 1106.0266026666668, 154);
stavesmo42582.setAttribute('id', 'stavesmo42582');
stavesmo42582.setBegBarType(VF.Barline.type.NONE);
stavesmo42582.setContext(context);
stavesmo42582.draw();
smo42582v0.draw(context, stavesmo42582);
smo49021.setContext(context);
smo49021.draw();
const fmtsmo4023759 = new VF.Formatter();
//
// voices and notes for stave 0 59
const smo40237v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40237v0ar = [];
const smo40220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo40220'] = smo40220;
smo40220.setAttribute('id', 'smo40220');
smo40220.addModifier(new VF.Dot(), 0);
const smo40221 = new VF.Annotation('-');
smo40221.setAttribute('id', 'smo40221');
smo40221.setFont('Merriweather', 12, 'normal');
smo40221.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo40220.addModifier(smo40221);
smo40221.addClass('lyric lyric-0 lyric-hyphen');
smo40237v0ar.push(smo40220);
smo40237v0.addTickables(smo40237v0ar)
fmtsmo4023759.joinVoices([smo40237v0]);
const fmtsmo4136259 = new VF.Formatter();
//
// voices and notes for stave 1 59
const smo41362v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41362v0ar = [];
const smo41346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo41346'] = smo41346;
smo41346.setAttribute('id', 'smo41346');
smo41346.addModifier(new VF.Dot(), 0);
smo41362v0ar.push(smo41346);
smo41362v0.addTickables(smo41362v0ar)
fmtsmo4136259.joinVoices([smo41362v0]);
const fmtsmo4259959 = new VF.Formatter();
//
// voices and notes for stave 2 59
const smo42599v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42599v0ar = [];
const smo42583 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n","gn/3/n","bn/3/n"]}'))
noteHash['smo42583'] = smo42583;
smo42583.setAttribute('id', 'smo42583');
smo42583.addModifier(new VF.Dot(), 0);
smo42583.addModifier(new VF.Dot(), 1);
smo42583.addModifier(new VF.Dot(), 2);
smo42599v0ar.push(smo42583);
smo42599v0.addTickables(smo42599v0ar)
fmtsmo4259959.joinVoices([smo42599v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo4023759.format([smo40237v0,smo41362v0,smo42599v0], 28);
const stavesmo40237 = new VF.Stave(792, 909.0266026666668, 42);
stavesmo40237.setAttribute('id', 'stavesmo40237');
stavesmo40237.setBegBarType(VF.Barline.type.NONE);
stavesmo40237.setContext(context);
stavesmo40237.draw();
smo40237v0.draw(context, stavesmo40237);
const stavesmo41362 = new VF.Stave(792, 1030.0266026666668, 42);
stavesmo41362.setAttribute('id', 'stavesmo41362');
stavesmo41362.setBegBarType(VF.Barline.type.NONE);
stavesmo41362.setContext(context);
stavesmo41362.draw();
smo41362v0.draw(context, stavesmo41362);
const stavesmo42599 = new VF.Stave(792, 1106.0266026666668, 42);
stavesmo42599.setAttribute('id', 'stavesmo42599');
stavesmo42599.setBegBarType(VF.Barline.type.NONE);
stavesmo42599.setContext(context);
stavesmo42599.draw();
smo42599v0.draw(context, stavesmo42599);
const fmtsmo4025460 = new VF.Formatter();
//
// voices and notes for stave 0 60
const smo40254v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40254v0ar = [];
const smo40238 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo40238'] = smo40238;
smo40238.setAttribute('id', 'smo40238');
smo40238.addModifier(new VF.Dot(), 0);
smo40254v0ar.push(smo40238);
smo40254v0.addTickables(smo40254v0ar)
fmtsmo4025460.joinVoices([smo40254v0]);
const fmtsmo4138160 = new VF.Formatter();
//
// voices and notes for stave 1 60
const smo41381v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41381v0ar = [];
const smo41363 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo41363'] = smo41363;
smo41363.setAttribute('id', 'smo41363');
smo41381v0ar.push(smo41363);
const smo41364 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
noteHash['smo41364'] = smo41364;
smo41364.setAttribute('id', 'smo41364');
smo41381v0ar.push(smo41364);
const smo41365 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
noteHash['smo41365'] = smo41365;
smo41365.setAttribute('id', 'smo41365');
smo41365.addModifier(new VF.Dot(), 0);
smo41381v0ar.push(smo41365);
smo41381v0.addTickables(smo41381v0ar)
fmtsmo4138160.joinVoices([smo41381v0]);
const fmtsmo4261860 = new VF.Formatter();
//
// voices and notes for stave 2 60
const smo42618v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo42618v0ar = [];
const smo42600 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","bn/2/n","dn/3/n","gn/3/n"]}'))
noteHash['smo42600'] = smo42600;
smo42600.setAttribute('id', 'smo42600');
smo42618v0ar.push(smo42600);
const smo42601 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo42601'] = smo42601;
smo42601.setAttribute('id', 'smo42601');
smo42618v0ar.push(smo42601);
const smo42602 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo42602'] = smo42602;
smo42602.setAttribute('id', 'smo42602');
smo42602.addModifier(new VF.Dot(), 0);
smo42618v0ar.push(smo42602);
smo42618v0.addTickables(smo42618v0ar)
fmtsmo4261860.joinVoices([smo42618v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo4025460.format([smo40254v0,smo41381v0,smo42618v0], 89);
const stavesmo40254 = new VF.Stave(834, 909.0266026666668, 111);
stavesmo40254.setAttribute('id', 'stavesmo40254');
stavesmo40254.setBegBarType(VF.Barline.type.NONE);
stavesmo40254.setEndBarType(3);
stavesmo40254.setContext(context);
stavesmo40254.draw();
smo40254v0.draw(context, stavesmo40254);
const stavesmo41381 = new VF.Stave(834, 1030.0266026666668, 111);
stavesmo41381.setAttribute('id', 'stavesmo41381');
stavesmo41381.setBegBarType(VF.Barline.type.NONE);
stavesmo41381.setEndBarType(3);
stavesmo41381.setContext(context);
stavesmo41381.draw();
smo41381v0.draw(context, stavesmo41381);
const stavesmo42618 = new VF.Stave(834, 1106.0266026666668, 111);
stavesmo42618.setAttribute('id', 'stavesmo42618');
stavesmo42618.setBegBarType(VF.Barline.type.NONE);
stavesmo42618.setEndBarType(3);
stavesmo42618.setContext(context);
stavesmo42618.draw();
smo42618v0.draw(context, stavesmo42618);
const smo40256 = new VF.StaveTie({ first_note: smo40129, last_note: smo40148, first_indices: [0], last_indices: [0]});
smo40256.setContext(context).draw();
const smo40257 = new VF.StaveTie({ first_note: smo40092, last_note: smo40111, first_indices: [0], last_indices: [0]});
smo40257.setContext(context).draw();
const smo40258 = new VF.StaveTie({ first_note: smo40165, last_note: smo40184, first_indices: [0], last_indices: [0]});
smo40258.setContext(context).draw();
const smo40259 = new VF.StaveTie({ first_note: smo40202, last_note: smo40220, first_indices: [0], last_indices: [0]});
smo40259.setContext(context).draw();
const smo40260 = new VF.StaveTie({ first_note: smo39990, last_note: smo40009, first_indices: [0], last_indices: [0]});
smo40260.setContext(context).draw();
const smo40261 = new VF.StaveTie({ first_note: smo40042, last_note: smo40061, first_indices: [0], last_indices: [0]});
smo40261.setContext(context).draw();
const smo40262 = new VF.StaveTie({ first_note: smo39941, last_note: smo39960, first_indices: [0], last_indices: [0]});
smo40262.setContext(context).draw();
const smo41388 = new VF.StaveTie({ first_note: smo41064, last_note: smo41081, first_indices: [0,1], last_indices: [0,1]});
smo41388.setContext(context).draw();
const smo41390 = new VF.StaveTie({ first_note: smo41212, last_note: smo41229, first_indices: [0,1], last_indices: [0,1]});
smo41390.setContext(context).draw();
const smo42622 = new VF.StaveTie({ first_note: smo42446, last_note: smo42463, first_indices: [0], last_indices: [0]});
smo42622.setContext(context).draw();
const smo40131smo40147 = new VF.Volta(2, '1', 66, 20);
smo40131smo40147.setContext(context).draw(stavesmo40147, -1 * 0);
const smo40131smo40164 = new VF.Volta(4, '1', 251, 20);
smo40131smo40164.setContext(context).draw(stavesmo40164, -1 * 0);
const smo40167smo40183 = new VF.Volta(2, '2', 375, 20);
smo40167smo40183.setContext(context).draw(stavesmo40183, -1 * 0);
const smo40167smo40201 = new VF.Volta(4, '2', 514, 20);
smo40167smo40201.setContext(context).draw(stavesmo40201, -1 * 0);
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo39872').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39873').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo39876').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo39894').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo39895').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo39897').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39898').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo39900').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39901').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo39903').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo39904').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo39923').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo39924').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo39942').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo39943').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo39963').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo39964').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo39966').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39967').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo39969').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39970').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo39972').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39973').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo39991').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo39992').setAttributeNS('', 'transform', 'translate(0 24)');
context.svg.getElementById('vf-smo40010').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo40013').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo40015').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo40016').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo40018').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo40019').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo40021').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo40022').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo40040').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo40041').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo40043').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo40044').setAttributeNS('', 'transform', 'translate(0 22)');
context.svg.getElementById('vf-smo40062').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo40065').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo40066').setAttributeNS('', 'transform', 'translate(0 31)');
context.svg.getElementById('vf-smo40084').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo40085').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo40087').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo40088').setAttributeNS('', 'transform', 'translate(0 31)');
context.svg.getElementById('vf-smo40090').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo40091').setAttributeNS('', 'transform', 'translate(0 30)');
context.svg.getElementById('vf-smo40093').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo40094').setAttributeNS('', 'transform', 'translate(0 28)');
context.svg.getElementById('vf-smo40112').setAttributeNS('', 'transform', 'translate(0 16)');
}
// @@ Solovey p 2/2 ((Op. 1)) by Folks
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1483.6363636363635');
svg.setAttributeNS('', 'height', '1920');
svg.setAttributeNS('', 'viewBox', '0 0 1484 1920');
//
// create the musical objects
VF.setMusicFont("Bravura","Gonville","Custom");
const fmtsmo23887126 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo238871v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238871v0ar = [];
const smo238843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo238843.setAttribute('id', 'smo238843');
const smo238844 = new VF.Annotation('Со');
smo238844.setAttribute('id', 'smo238844');
smo238844.setFont('Merriweather', 12.1, 'normal');
smo238844.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238843.addModifier(smo238844);
smo238844.addClass('lyric lyric-0');
smo238871v0ar.push(smo238843);
const smo238845 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo238845.setAttribute('id', 'smo238845');
const smo238846 = new VF.Annotation('-');
smo238846.setAttribute('id', 'smo238846');
smo238846.setFont('Merriweather', 12.1, 'normal');
smo238846.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238845.addModifier(smo238846);
smo238846.addClass('lyric lyric-0 lyric-hyphen');
smo238871v0ar.push(smo238845);
const smo238847 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo238847.setAttribute('id', 'smo238847');
const smo238848 = new VF.Annotation('-');
smo238848.setAttribute('id', 'smo238848');
smo238848.setFont('Merriweather', 12.1, 'normal');
smo238848.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238847.addModifier(smo238848);
smo238848.addClass('lyric lyric-0 lyric-hyphen');
smo238871v0ar.push(smo238847);
const smo238849 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["d#/5/n"]}'))
smo238849.setAttribute('id', 'smo238849');
const smo2388490acc = new VF.Accidental('#');
smo238849.addModifier(smo2388490acc, 0);
const smo238850 = new VF.Annotation('-');
smo238850.setAttribute('id', 'smo238850');
smo238850.setFont('Merriweather', 12.1, 'normal');
smo238850.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238849.addModifier(smo238850);
smo238850.addClass('lyric lyric-0 lyric-hyphen');
smo238871v0ar.push(smo238849);
const smo238851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo238851.setAttribute('id', 'smo238851');
smo238871v0ar.push(smo238851);
const smo238852 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo238852.setAttribute('id', 'smo238852');
const smo238853 = new VF.Annotation('ло');
smo238853.setAttribute('id', 'smo238853');
smo238853.setFont('Merriweather', 12.1, 'normal');
smo238853.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238852.addModifier(smo238853);
smo238853.addClass('lyric lyric-0');
smo238871v0ar.push(smo238852);
const smo238854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo238854.setAttribute('id', 'smo238854');
const smo238855 = new VF.Annotation('-');
smo238855.setAttribute('id', 'smo238855');
smo238855.setFont('Merriweather', 12.1, 'normal');
smo238855.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238854.addModifier(smo238855);
smo238855.addClass('lyric lyric-0 lyric-hyphen');
smo238871v0ar.push(smo238854);
smo238871v0.addTickables(smo238871v0ar)
fmtsmo23887126.joinVoices([smo238871v0]);
const fmtsmo23985626 = new VF.Formatter();
//
// voices and notes for stave 1 26
const smo239856v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239856v0ar = [];
const smo239837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239837.setAttribute('id', 'smo239837');
smo239856v0ar.push(smo239837);
const smo239838 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239838.setAttribute('id', 'smo239838');
smo239856v0ar.push(smo239838);
const smo239839 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["c#/5/n"]}'))
smo239839.setAttribute('id', 'smo239839');
const smo2398390acc = new VF.Accidental('#');
smo239839.addModifier(smo2398390acc, 0);
smo239856v0ar.push(smo239839);
const smo239840 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239840.setAttribute('id', 'smo239840');
smo239856v0ar.push(smo239840);
smo239856v0.addTickables(smo239856v0ar)
fmtsmo23985626.joinVoices([smo239856v0]);
const fmtsmo24083526 = new VF.Formatter();
//
// voices and notes for stave 2 26
const smo240835v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240835v0ar = [];
const smo240819 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240819.setAttribute('id', 'smo240819');
smo240835v0ar.push(smo240819);
smo240835v0.addTickables(smo240835v0ar)
fmtsmo24083526.joinVoices([smo240835v0]);
const fmtsmo24178926 = new VF.Formatter();
//
// voices and notes for stave 3 26
const smo241789v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241789v0ar = [];
const smo241772 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241772.setAttribute('id', 'smo241772');
smo241789v0ar.push(smo241772);
const smo241773 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241773.setAttribute('id', 'smo241773');
smo241789v0ar.push(smo241773);
smo241789v0.addTickables(smo241789v0ar)
fmtsmo24178926.joinVoices([smo241789v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
const dirsmo248744 = smo238845.getStemDirection();
smo238845.setStemDirection(dirsmo248744);
smo238847.setStemDirection(dirsmo248744);
smo238849.setStemDirection(dirsmo248744);
smo238851.setStemDirection(dirsmo248744);
const smo248744 = new VF.Beam([smo238845,smo238847,smo238849,smo238851]);
 
// formatting measures in staff group smo242235
fmtsmo23887126.format([smo238871v0,smo239856v0,smo240835v0,smo241789v0], 249);
const stavesmo238871 = new VF.Stave(55, 219, 323);
stavesmo238871.setAttribute('id', 'stavesmo238871');
stavesmo238871.setBegBarType(1);
stavesmo238871.addClef('treble');
const keysmo238871 = new VF.KeySignature('F');
keysmo238871.addToStave(stavesmo238871);
stavesmo238871.setContext(context);
stavesmo238871.draw();
smo238871v0.draw(context, stavesmo238871);
smo248744.setContext(context);
smo248744.draw();
const stavesmo239856 = new VF.Stave(55, 311, 323);
stavesmo239856.setAttribute('id', 'stavesmo239856');
stavesmo239856.setBegBarType(1);
stavesmo239856.addClef('treble');
const keysmo239856 = new VF.KeySignature('F');
keysmo239856.addToStave(stavesmo239856);
stavesmo239856.setContext(context);
stavesmo239856.draw();
smo239856v0.draw(context, stavesmo239856);
const stavesmo240835 = new VF.Stave(55, 389, 323);
stavesmo240835.setAttribute('id', 'stavesmo240835');
stavesmo240835.setBegBarType(1);
stavesmo240835.addClef('treble');
const keysmo240835 = new VF.KeySignature('F');
keysmo240835.addToStave(stavesmo240835);
stavesmo240835.setContext(context);
stavesmo240835.draw();
smo240835v0.draw(context, stavesmo240835);
const stavesmo241789 = new VF.Stave(55, 473, 323);
stavesmo241789.setAttribute('id', 'stavesmo241789');
stavesmo241789.setBegBarType(1);
stavesmo241789.addClef('bass');
const keysmo241789 = new VF.KeySignature('F');
keysmo241789.addToStave(stavesmo241789);
stavesmo241789.setContext(context);
stavesmo241789.draw();
smo241789v0.draw(context, stavesmo241789);
const leftsmo242235stavesmo2388713 = new VF.StaveConnector(stavesmo238871, stavesmo241789).setType(1);
leftsmo242235stavesmo2388713.setContext(context).draw();
const fmtsmo23889027 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo238890v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238890v0ar = [];
const smo238872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo238872.setAttribute('id', 'smo238872');
const smo238873 = new VF.Annotation('вей');
smo238873.setAttribute('id', 'smo238873');
smo238873.setFont('Merriweather', 12.1, 'normal');
smo238873.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238872.addModifier(smo238873);
smo238873.addClass('lyric lyric-0');
smo238890v0ar.push(smo238872);
const smo238874 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo238874.setAttribute('id', 'smo238874');
smo238890v0ar.push(smo238874);
smo238890v0.addTickables(smo238890v0ar)
fmtsmo23889027.joinVoices([smo238890v0]);
const fmtsmo23987627 = new VF.Formatter();
//
// voices and notes for stave 1 27
const smo239876v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239876v0ar = [];
const smo239857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239857.setAttribute('id', 'smo239857');
smo239876v0ar.push(smo239857);
const smo239858 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239858.setAttribute('id', 'smo239858');
smo239876v0ar.push(smo239858);
const smo239859 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo239859.setAttribute('id', 'smo239859');
smo239876v0ar.push(smo239859);
const smo239860 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239860.setAttribute('id', 'smo239860');
smo239876v0ar.push(smo239860);
smo239876v0.addTickables(smo239876v0ar)
fmtsmo23987627.joinVoices([smo239876v0]);
const fmtsmo24085227 = new VF.Formatter();
//
// voices and notes for stave 2 27
const smo240852v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240852v0ar = [];
const smo240836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240836.setAttribute('id', 'smo240836');
smo240852v0ar.push(smo240836);
smo240852v0.addTickables(smo240852v0ar)
fmtsmo24085227.joinVoices([smo240852v0]);
const fmtsmo24180727 = new VF.Formatter();
//
// voices and notes for stave 3 27
const smo241807v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241807v0ar = [];
const smo241790 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo241790.setAttribute('id', 'smo241790');
smo241807v0ar.push(smo241790);
const smo241791 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241791.setAttribute('id', 'smo241791');
smo241807v0ar.push(smo241791);
smo241807v0.addTickables(smo241807v0ar)
fmtsmo24180727.joinVoices([smo241807v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
 
// formatting measures in staff group smo242235
fmtsmo23889027.format([smo238890v0,smo239876v0,smo240852v0,smo241807v0], 147);
const stavesmo238890 = new VF.Stave(378, 219, 161);
stavesmo238890.setAttribute('id', 'stavesmo238890');
stavesmo238890.setBegBarType(VF.Barline.type.NONE);
stavesmo238890.setContext(context);
stavesmo238890.draw();
smo238890v0.draw(context, stavesmo238890);
const stavesmo239876 = new VF.Stave(378, 311, 161);
stavesmo239876.setAttribute('id', 'stavesmo239876');
stavesmo239876.setBegBarType(VF.Barline.type.NONE);
stavesmo239876.setContext(context);
stavesmo239876.draw();
smo239876v0.draw(context, stavesmo239876);
const stavesmo240852 = new VF.Stave(378, 389, 161);
stavesmo240852.setAttribute('id', 'stavesmo240852');
stavesmo240852.setBegBarType(VF.Barline.type.NONE);
stavesmo240852.setContext(context);
stavesmo240852.draw();
smo240852v0.draw(context, stavesmo240852);
const stavesmo241807 = new VF.Stave(378, 473, 161);
stavesmo241807.setAttribute('id', 'stavesmo241807');
stavesmo241807.setBegBarType(VF.Barline.type.NONE);
stavesmo241807.setContext(context);
stavesmo241807.draw();
smo241807v0.draw(context, stavesmo241807);
const fmtsmo23891228 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo238912v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238912v0ar = [];
const smo238891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo238891.setAttribute('id', 'smo238891');
const smo238892 = new VF.Annotation('цо');
smo238892.setAttribute('id', 'smo238892');
smo238892.setFont('Merriweather', 12.1, 'normal');
smo238892.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238891.addModifier(smo238892);
smo238892.addClass('lyric lyric-0 lyric-hyphen');
smo238912v0ar.push(smo238891);
const smo238893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo238893.setAttribute('id', 'smo238893');
const smo238894 = new VF.Annotation('ло');
smo238894.setAttribute('id', 'smo238894');
smo238894.setFont('Merriweather', 12.1, 'normal');
smo238894.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238893.addModifier(smo238894);
smo238894.addClass('lyric lyric-0');
smo238912v0ar.push(smo238893);
const smo238895 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo238895.setAttribute('id', 'smo238895');
const smo238896 = new VF.Annotation('-');
smo238896.setAttribute('id', 'smo238896');
smo238896.setFont('Merriweather', 12.1, 'normal');
smo238896.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238895.addModifier(smo238896);
smo238896.addClass('lyric lyric-0 lyric-hyphen');
smo238912v0ar.push(smo238895);
smo238912v0.addTickables(smo238912v0ar)
fmtsmo23891228.joinVoices([smo238912v0]);
const fmtsmo23989628 = new VF.Formatter();
//
// voices and notes for stave 1 28
const smo239896v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239896v0ar = [];
const smo239877 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239877.setAttribute('id', 'smo239877');
smo239896v0ar.push(smo239877);
const smo239878 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239878.setAttribute('id', 'smo239878');
smo239896v0ar.push(smo239878);
const smo239879 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239879.setAttribute('id', 'smo239879');
smo239896v0ar.push(smo239879);
const smo239880 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239880.setAttribute('id', 'smo239880');
smo239896v0ar.push(smo239880);
smo239896v0.addTickables(smo239896v0ar)
fmtsmo23989628.joinVoices([smo239896v0]);
const fmtsmo24087028 = new VF.Formatter();
//
// voices and notes for stave 2 28
const smo240870v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240870v0ar = [];
const smo240853 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo240853.setAttribute('id', 'smo240853');
smo240870v0ar.push(smo240853);
const smo240854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo240854.setAttribute('id', 'smo240854');
smo240870v0ar.push(smo240854);
smo240870v0.addTickables(smo240870v0ar)
fmtsmo24087028.joinVoices([smo240870v0]);
const fmtsmo24182528 = new VF.Formatter();
//
// voices and notes for stave 3 28
const smo241825v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241825v0ar = [];
const smo241808 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo241808.setAttribute('id', 'smo241808');
smo241825v0ar.push(smo241808);
const smo241809 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo241809.setAttribute('id', 'smo241809');
smo241825v0ar.push(smo241809);
smo241825v0.addTickables(smo241825v0ar)
fmtsmo24182528.joinVoices([smo241825v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
 
// formatting measures in staff group smo242235
fmtsmo23891228.format([smo238912v0,smo239896v0,smo240870v0,smo241825v0], 146);
const stavesmo238912 = new VF.Stave(539, 219, 160);
stavesmo238912.setAttribute('id', 'stavesmo238912');
stavesmo238912.setBegBarType(VF.Barline.type.NONE);
stavesmo238912.setContext(context);
stavesmo238912.draw();
smo238912v0.draw(context, stavesmo238912);
const stavesmo239896 = new VF.Stave(539, 311, 160);
stavesmo239896.setAttribute('id', 'stavesmo239896');
stavesmo239896.setBegBarType(VF.Barline.type.NONE);
stavesmo239896.setContext(context);
stavesmo239896.draw();
smo239896v0.draw(context, stavesmo239896);
const stavesmo240870 = new VF.Stave(539, 389, 160);
stavesmo240870.setAttribute('id', 'stavesmo240870');
stavesmo240870.setBegBarType(VF.Barline.type.NONE);
stavesmo240870.setContext(context);
stavesmo240870.draw();
smo240870v0.draw(context, stavesmo240870);
const stavesmo241825 = new VF.Stave(539, 473, 160);
stavesmo241825.setAttribute('id', 'stavesmo241825');
stavesmo241825.setBegBarType(VF.Barline.type.NONE);
stavesmo241825.setContext(context);
stavesmo241825.draw();
smo241825v0.draw(context, stavesmo241825);
const fmtsmo23893429 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo238934v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238934v0ar = [];
const smo238913 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo238913.setAttribute('id', 'smo238913');
const smo238914 = new VF.Annotation('си');
smo238914.setAttribute('id', 'smo238914');
smo238914.setFont('Merriweather', 12.1, 'normal');
smo238914.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238913.addModifier(smo238914);
smo238914.addClass('lyric lyric-0 lyric-hyphen');
smo238934v0ar.push(smo238913);
const smo238915 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo238915.setAttribute('id', 'smo238915');
const smo238916 = new VF.Annotation('стый');
smo238916.setAttribute('id', 'smo238916');
smo238916.setFont('Merriweather', 12.1, 'normal');
smo238916.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238915.addModifier(smo238916);
smo238916.addClass('lyric lyric-0');
smo238934v0ar.push(smo238915);
const smo238917 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo238917.setAttribute('id', 'smo238917');
const smo238918 = new VF.Annotation('-');
smo238918.setAttribute('id', 'smo238918');
smo238918.setFont('Merriweather', 12.1, 'normal');
smo238918.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238917.addModifier(smo238918);
smo238918.addClass('lyric lyric-0 lyric-hyphen');
smo238934v0ar.push(smo238917);
smo238934v0.addTickables(smo238934v0ar)
fmtsmo23893429.joinVoices([smo238934v0]);
const fmtsmo23991629 = new VF.Formatter();
//
// voices and notes for stave 1 29
const smo239916v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239916v0ar = [];
const smo239897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239897.setAttribute('id', 'smo239897');
smo239916v0ar.push(smo239897);
const smo239898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239898.setAttribute('id', 'smo239898');
smo239916v0ar.push(smo239898);
const smo239899 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239899.setAttribute('id', 'smo239899');
smo239916v0ar.push(smo239899);
const smo239900 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo239900.setAttribute('id', 'smo239900');
smo239916v0ar.push(smo239900);
smo239916v0.addTickables(smo239916v0ar)
fmtsmo23991629.joinVoices([smo239916v0]);
const fmtsmo24088829 = new VF.Formatter();
//
// voices and notes for stave 2 29
const smo240888v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240888v0ar = [];
const smo240871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240871.setAttribute('id', 'smo240871');
smo240888v0ar.push(smo240871);
const smo240872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo240872.setAttribute('id', 'smo240872');
smo240888v0ar.push(smo240872);
smo240888v0.addTickables(smo240888v0ar)
fmtsmo24088829.joinVoices([smo240888v0]);
const fmtsmo24184329 = new VF.Formatter();
//
// voices and notes for stave 3 29
const smo241843v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241843v0ar = [];
const smo241826 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo241826.setAttribute('id', 'smo241826');
smo241843v0ar.push(smo241826);
const smo241827 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo241827.setAttribute('id', 'smo241827');
smo241843v0ar.push(smo241827);
smo241843v0.addTickables(smo241843v0ar)
fmtsmo24184329.joinVoices([smo241843v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
 
// formatting measures in staff group smo242235
fmtsmo23893429.format([smo238934v0,smo239916v0,smo240888v0,smo241843v0], 174);
const stavesmo238934 = new VF.Stave(699, 219, 188);
stavesmo238934.setAttribute('id', 'stavesmo238934');
stavesmo238934.setBegBarType(VF.Barline.type.NONE);
stavesmo238934.setContext(context);
stavesmo238934.draw();
smo238934v0.draw(context, stavesmo238934);
const stavesmo239916 = new VF.Stave(699, 311, 188);
stavesmo239916.setAttribute('id', 'stavesmo239916');
stavesmo239916.setBegBarType(VF.Barline.type.NONE);
stavesmo239916.setContext(context);
stavesmo239916.draw();
smo239916v0.draw(context, stavesmo239916);
const stavesmo240888 = new VF.Stave(699, 389, 188);
stavesmo240888.setAttribute('id', 'stavesmo240888');
stavesmo240888.setBegBarType(VF.Barline.type.NONE);
stavesmo240888.setContext(context);
stavesmo240888.draw();
smo240888v0.draw(context, stavesmo240888);
const stavesmo241843 = new VF.Stave(699, 473, 188);
stavesmo241843.setAttribute('id', 'stavesmo241843');
stavesmo241843.setBegBarType(VF.Barline.type.NONE);
stavesmo241843.setContext(context);
stavesmo241843.draw();
smo241843v0.draw(context, stavesmo241843);
const fmtsmo23896330 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo238963v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238963v0ar = [];
const smo238935 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo238935.setAttribute('id', 'smo238935');
const smo238936 = new VF.Annotation('со');
smo238936.setAttribute('id', 'smo238936');
smo238936.setFont('Merriweather', 12.1, 'normal');
smo238936.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238935.addModifier(smo238936);
smo238936.addClass('lyric lyric-0');
smo238963v0ar.push(smo238935);
const smo238937 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/4/n"]}'))
smo238937.setAttribute('id', 'smo238937');
const smo238938 = new VF.Annotation('-');
smo238938.setAttribute('id', 'smo238938');
smo238938.setFont('Merriweather', 12.1, 'normal');
smo238938.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238937.addModifier(smo238938);
smo238938.addClass('lyric lyric-0 lyric-hyphen');
smo238963v0ar.push(smo238937);
const smo238939 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo238939.setAttribute('id', 'smo238939');
const smo238940 = new VF.Annotation('-');
smo238940.setAttribute('id', 'smo238940');
smo238940.setFont('Merriweather', 12.1, 'normal');
smo238940.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238939.addModifier(smo238940);
smo238940.addClass('lyric lyric-0 lyric-hyphen');
smo238963v0ar.push(smo238939);
const smo238941 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["g#/4/n"]}'))
smo238941.setAttribute('id', 'smo238941');
const smo2389410acc = new VF.Accidental('#');
smo238941.addModifier(smo2389410acc, 0);
const smo238942 = new VF.Annotation('-');
smo238942.setAttribute('id', 'smo238942');
smo238942.setFont('Merriweather', 12.1, 'normal');
smo238942.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238941.addModifier(smo238942);
smo238942.addClass('lyric lyric-0 lyric-hyphen');
smo238963v0ar.push(smo238941);
const smo238943 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo238943.setAttribute('id', 'smo238943');
const smo238944 = new VF.Annotation('ло');
smo238944.setAttribute('id', 'smo238944');
smo238944.setFont('Merriweather', 12.1, 'normal');
smo238944.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238943.addModifier(smo238944);
smo238944.addClass('lyric lyric-0');
smo238963v0ar.push(smo238943);
const smo238945 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo238945.setAttribute('id', 'smo238945');
const smo238946 = new VF.Annotation('-');
smo238946.setAttribute('id', 'smo238946');
smo238946.setFont('Merriweather', 12.1, 'normal');
smo238946.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238945.addModifier(smo238946);
smo238946.addClass('lyric lyric-0 lyric-hyphen');
smo238963v0ar.push(smo238945);
smo238963v0.addTickables(smo238963v0ar)
fmtsmo23896330.joinVoices([smo238963v0]);
const fmtsmo23993630 = new VF.Formatter();
//
// voices and notes for stave 1 30
const smo239936v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239936v0ar = [];
const smo239917 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239917.setAttribute('id', 'smo239917');
smo239936v0ar.push(smo239917);
const smo239918 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo239918.setAttribute('id', 'smo239918');
smo239936v0ar.push(smo239918);
const smo239919 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239919.setAttribute('id', 'smo239919');
smo239936v0ar.push(smo239919);
const smo239920 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo239920.setAttribute('id', 'smo239920');
smo239936v0ar.push(smo239920);
smo239936v0.addTickables(smo239936v0ar)
fmtsmo23993630.joinVoices([smo239936v0]);
const fmtsmo24090630 = new VF.Formatter();
//
// voices and notes for stave 2 30
const smo240906v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240906v0ar = [];
const smo240889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo240889.setAttribute('id', 'smo240889');
smo240906v0ar.push(smo240889);
const smo240890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo240890.setAttribute('id', 'smo240890');
smo240906v0ar.push(smo240890);
smo240906v0.addTickables(smo240906v0ar)
fmtsmo24090630.joinVoices([smo240906v0]);
const fmtsmo24186130 = new VF.Formatter();
//
// voices and notes for stave 3 30
const smo241861v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241861v0ar = [];
const smo241844 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241844.setAttribute('id', 'smo241844');
smo241861v0ar.push(smo241844);
const smo241845 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241845.setAttribute('id', 'smo241845');
smo241861v0ar.push(smo241845);
smo241861v0.addTickables(smo241861v0ar)
fmtsmo24186130.joinVoices([smo241861v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
const dirsmo248777 = smo238937.getStemDirection();
smo238937.setStemDirection(dirsmo248777);
smo238939.setStemDirection(dirsmo248777);
smo238941.setStemDirection(dirsmo248777);
const smo248777 = new VF.Beam([smo238937,smo238939,smo238941]);
const smo238947 = new VF.Tuplet([smo238937,smo238939,smo238941], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":1}'));
 
// formatting measures in staff group smo242235
fmtsmo23896330.format([smo238963v0,smo239936v0,smo240906v0,smo241861v0], 217);
const stavesmo238963 = new VF.Stave(887, 219, 231);
stavesmo238963.setAttribute('id', 'stavesmo238963');
stavesmo238963.setBegBarType(VF.Barline.type.NONE);
stavesmo238963.setTempo(JSON.parse('{"duration":"2","dots":0,"bpm":96}'), -1 * 0);
stavesmo238963.setContext(context);
stavesmo238963.draw();
smo238963v0.draw(context, stavesmo238963);
smo248777.setContext(context);
smo248777.draw();
smo238947.setContext(context).draw();
const stavesmo239936 = new VF.Stave(887, 311, 231);
stavesmo239936.setAttribute('id', 'stavesmo239936');
stavesmo239936.setBegBarType(VF.Barline.type.NONE);
stavesmo239936.setContext(context);
stavesmo239936.draw();
smo239936v0.draw(context, stavesmo239936);
const stavesmo240906 = new VF.Stave(887, 389, 231);
stavesmo240906.setAttribute('id', 'stavesmo240906');
stavesmo240906.setBegBarType(VF.Barline.type.NONE);
stavesmo240906.setContext(context);
stavesmo240906.draw();
smo240906v0.draw(context, stavesmo240906);
const stavesmo241861 = new VF.Stave(887, 473, 231);
stavesmo241861.setAttribute('id', 'stavesmo241861');
stavesmo241861.setBegBarType(VF.Barline.type.NONE);
stavesmo241861.setContext(context);
stavesmo241861.draw();
smo241861v0.draw(context, stavesmo241861);
const fmtsmo23898231 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo238982v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238982v0ar = [];
const smo238964 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo238964.setAttribute('id', 'smo238964');
const smo238965 = new VF.Annotation('вей');
smo238965.setAttribute('id', 'smo238965');
smo238965.setFont('Merriweather', 12.1, 'normal');
smo238965.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238964.addModifier(smo238965);
smo238965.addClass('lyric lyric-0');
smo238982v0ar.push(smo238964);
const smo238966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo238966.setAttribute('id', 'smo238966');
smo238982v0ar.push(smo238966);
smo238982v0.addTickables(smo238982v0ar)
fmtsmo23898231.joinVoices([smo238982v0]);
const fmtsmo23995731 = new VF.Formatter();
//
// voices and notes for stave 1 31
const smo239957v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239957v0ar = [];
const smo239937 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo239937.setAttribute('id', 'smo239937');
smo239957v0ar.push(smo239937);
const smo239938 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo239938.setAttribute('id', 'smo239938');
smo239957v0ar.push(smo239938);
const smo239939 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo239939.setAttribute('id', 'smo239939');
smo239957v0ar.push(smo239939);
const smo239940 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo239940.setAttribute('id', 'smo239940');
smo239957v0ar.push(smo239940);
const smo239941 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo239941.setAttribute('id', 'smo239941');
smo239957v0ar.push(smo239941);
smo239957v0.addTickables(smo239957v0ar)
fmtsmo23995731.joinVoices([smo239957v0]);
const fmtsmo24092431 = new VF.Formatter();
//
// voices and notes for stave 2 31
const smo240924v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240924v0ar = [];
const smo240907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo240907.setAttribute('id', 'smo240907');
smo240924v0ar.push(smo240907);
const smo240908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240908.setAttribute('id', 'smo240908');
smo240924v0ar.push(smo240908);
smo240924v0.addTickables(smo240924v0ar)
fmtsmo24092431.joinVoices([smo240924v0]);
const fmtsmo24188331 = new VF.Formatter();
//
// voices and notes for stave 3 31
const smo241883v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241883v0ar = [];
const smo241862 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo241862.setAttribute('id', 'smo241862');
smo241883v0ar.push(smo241862);
const smo241863 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo241863.setAttribute('id', 'smo241863');
smo241883v0ar.push(smo241863);
const smo241864 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo241864.setAttribute('id', 'smo241864');
smo241883v0ar.push(smo241864);
const smo241865 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241865.setAttribute('id', 'smo241865');
smo241883v0ar.push(smo241865);
const smo241866 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241866.setAttribute('id', 'smo241866');
smo241883v0ar.push(smo241866);
const smo241867 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241867.setAttribute('id', 'smo241867');
smo241883v0ar.push(smo241867);
smo241883v0.addTickables(smo241883v0ar)
fmtsmo24188331.joinVoices([smo241883v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
const dirsmo248788 = smo239938.getStemDirection();
smo239938.setStemDirection(dirsmo248788);
smo239939.setStemDirection(dirsmo248788);
const smo248788 = new VF.Beam([smo239938,smo239939]);
const dirsmo248789 = smo239940.getStemDirection();
smo239940.setStemDirection(dirsmo248789);
smo239941.setStemDirection(dirsmo248789);
const smo248789 = new VF.Beam([smo239940,smo239941]);
const dirsmo248794 = smo241862.getStemDirection();
smo241862.setStemDirection(dirsmo248794);
smo241863.setStemDirection(dirsmo248794);
const smo248794 = new VF.Beam([smo241862,smo241863]);
const dirsmo248795 = smo241864.getStemDirection();
smo241864.setStemDirection(dirsmo248795);
smo241865.setStemDirection(dirsmo248795);
const smo248795 = new VF.Beam([smo241864,smo241865]);
 
// formatting measures in staff group smo242235
fmtsmo23898231.format([smo238982v0,smo239957v0,smo240924v0,smo241883v0], 245);
const stavesmo238982 = new VF.Stave(1118, 219, 259);
stavesmo238982.setAttribute('id', 'stavesmo238982');
stavesmo238982.setBegBarType(VF.Barline.type.NONE);
stavesmo238982.setContext(context);
stavesmo238982.draw();
smo238982v0.draw(context, stavesmo238982);
const stavesmo239957 = new VF.Stave(1118, 311, 259);
stavesmo239957.setAttribute('id', 'stavesmo239957');
stavesmo239957.setBegBarType(VF.Barline.type.NONE);
stavesmo239957.setContext(context);
stavesmo239957.draw();
smo239957v0.draw(context, stavesmo239957);
smo248788.setContext(context);
smo248788.draw();
smo248789.setContext(context);
smo248789.draw();
const stavesmo240924 = new VF.Stave(1118, 389, 259);
stavesmo240924.setAttribute('id', 'stavesmo240924');
stavesmo240924.setBegBarType(VF.Barline.type.NONE);
stavesmo240924.setContext(context);
stavesmo240924.draw();
smo240924v0.draw(context, stavesmo240924);
const stavesmo241883 = new VF.Stave(1118, 473, 259);
stavesmo241883.setAttribute('id', 'stavesmo241883');
stavesmo241883.setBegBarType(VF.Barline.type.NONE);
stavesmo241883.setContext(context);
stavesmo241883.draw();
smo241883v0.draw(context, stavesmo241883);
smo248794.setContext(context);
smo248794.draw();
smo248795.setContext(context);
smo248795.draw();
const rightsmo242235stavesmo2389823 = new VF.StaveConnector(stavesmo238982, stavesmo241883).setType(0);
rightsmo242235stavesmo2389823.setContext(context).draw();
const fmtsmo23900932 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo239009v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239009v0ar = [];
const smo238983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo238983.setAttribute('id', 'smo238983');
const smo238985 = new VF.Ornament('mordent');
smo238983.addModifier(smo238985, 0);
const smo238984 = new VF.Annotation('Со');
smo238984.setAttribute('id', 'smo238984');
smo238984.setFont('Merriweather', 12.1, 'normal');
smo238984.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238983.addModifier(smo238984);
smo238984.addClass('lyric lyric-0');
smo239009v0ar.push(smo238983);
const smo238986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo238986.setAttribute('id', 'smo238986');
const smo238987 = new VF.Annotation('-');
smo238987.setAttribute('id', 'smo238987');
smo238987.setFont('Merriweather', 12.1, 'normal');
smo238987.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238986.addModifier(smo238987);
smo238987.addClass('lyric lyric-0 lyric-hyphen');
smo239009v0ar.push(smo238986);
const smo238988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo238988.setAttribute('id', 'smo238988');
const smo238989 = new VF.Annotation('-');
smo238989.setAttribute('id', 'smo238989');
smo238989.setFont('Merriweather', 12.1, 'normal');
smo238989.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238988.addModifier(smo238989);
smo238989.addClass('lyric lyric-0 lyric-hyphen');
smo239009v0ar.push(smo238988);
const smo238990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo238990.setAttribute('id', 'smo238990');
const smo238991 = new VF.Annotation('ло');
smo238991.setAttribute('id', 'smo238991');
smo238991.setFont('Merriweather', 12.1, 'normal');
smo238991.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238990.addModifier(smo238991);
smo238991.addClass('lyric lyric-0');
smo239009v0ar.push(smo238990);
const smo238992 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo238992.setAttribute('id', 'smo238992');
const smo238993 = new VF.Annotation('-');
smo238993.setAttribute('id', 'smo238993');
smo238993.setFont('Merriweather', 12.1, 'normal');
smo238993.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238992.addModifier(smo238993);
smo238993.addClass('lyric lyric-0 lyric-hyphen');
smo239009v0ar.push(smo238992);
smo239009v0.addTickables(smo239009v0ar)
fmtsmo23900932.joinVoices([smo239009v0]);
const fmtsmo23997932 = new VF.Formatter();
//
// voices and notes for stave 1 32
const smo239979v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239979v0ar = [];
const smo239958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239958.setAttribute('id', 'smo239958');
smo239979v0ar.push(smo239958);
const smo239959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239959.setAttribute('id', 'smo239959');
const  smo249622 = new VF.Articulation('ao').setPosition(3);
smo239959.addModifier(smo249622, 0);
smo239979v0ar.push(smo239959);
const smo239961 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239961.setAttribute('id', 'smo239961');
smo239979v0ar.push(smo239961);
const smo239962 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239962.setAttribute('id', 'smo239962');
const  smo249623 = new VF.Articulation('ao').setPosition(3);
smo239962.addModifier(smo249623, 0);
smo239979v0ar.push(smo239962);
smo239979v0.addTickables(smo239979v0ar)
fmtsmo23997932.joinVoices([smo239979v0]);
const fmtsmo24094132 = new VF.Formatter();
//
// voices and notes for stave 2 32
const smo240941v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240941v0ar = [];
const smo240925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240925.setAttribute('id', 'smo240925');
smo240941v0ar.push(smo240925);
smo240941v0.addTickables(smo240941v0ar)
fmtsmo24094132.joinVoices([smo240941v0]);
const fmtsmo24190532 = new VF.Formatter();
//
// voices and notes for stave 3 32
const smo241905v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241905v0ar = [];
const smo241884 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241884.setAttribute('id', 'smo241884');
const  smo249624 = new VF.Articulation('ao').setPosition(3);
smo241884.addModifier(smo249624, 0);
smo241905v0ar.push(smo241884);
const smo241886 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241886.setAttribute('id', 'smo241886');
smo241905v0ar.push(smo241886);
const smo241887 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo241887.setAttribute('id', 'smo241887');
const  smo249625 = new VF.Articulation('ao').setPosition(3);
smo241887.addModifier(smo249625, 0);
smo241905v0ar.push(smo241887);
const smo241889 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241889.setAttribute('id', 'smo241889');
smo241905v0ar.push(smo241889);
smo241905v0.addTickables(smo241905v0ar)
fmtsmo24190532.joinVoices([smo241905v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
const dirsmo248808 = smo238986.getStemDirection();
smo238986.setStemDirection(dirsmo248808);
smo238988.setStemDirection(dirsmo248808);
const smo248808 = new VF.Beam([smo238986,smo238988]);
 
// formatting measures in staff group smo242235
fmtsmo23900932.format([smo239009v0,smo239979v0,smo240941v0,smo241905v0], 173);
const stavesmo239009 = new VF.Stave(55, 627, 248);
stavesmo239009.setAttribute('id', 'stavesmo239009');
stavesmo239009.setBegBarType(1);
stavesmo239009.addClef('treble');
const keysmo239009 = new VF.KeySignature('F');
keysmo239009.addToStave(stavesmo239009);
stavesmo239009.setContext(context);
stavesmo239009.draw();
smo239009v0.draw(context, stavesmo239009);
smo248808.setContext(context);
smo248808.draw();
const stavesmo239979 = new VF.Stave(55, 730, 248);
stavesmo239979.setAttribute('id', 'stavesmo239979');
stavesmo239979.setBegBarType(1);
stavesmo239979.addClef('treble');
const keysmo239979 = new VF.KeySignature('F');
keysmo239979.addToStave(stavesmo239979);
stavesmo239979.setContext(context);
stavesmo239979.draw();
smo239979v0.draw(context, stavesmo239979);
const stavesmo240941 = new VF.Stave(55, 813, 248);
stavesmo240941.setAttribute('id', 'stavesmo240941');
stavesmo240941.setBegBarType(1);
stavesmo240941.addClef('treble');
const keysmo240941 = new VF.KeySignature('F');
keysmo240941.addToStave(stavesmo240941);
stavesmo240941.setContext(context);
stavesmo240941.draw();
smo240941v0.draw(context, stavesmo240941);
const stavesmo241905 = new VF.Stave(55, 922, 248);
stavesmo241905.setAttribute('id', 'stavesmo241905');
stavesmo241905.setBegBarType(1);
stavesmo241905.addClef('bass');
const keysmo241905 = new VF.KeySignature('F');
keysmo241905.addToStave(stavesmo241905);
stavesmo241905.setContext(context);
stavesmo241905.draw();
smo241905v0.draw(context, stavesmo241905);
const leftsmo242235stavesmo2390093 = new VF.StaveConnector(stavesmo239009, stavesmo241905).setType(1);
leftsmo242235stavesmo2390093.setContext(context).draw();
const fmtsmo23903233 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo239032v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239032v0ar = [];
const smo239010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo239010.setAttribute('id', 'smo239010');
const smo239011 = new VF.Annotation('вей');
smo239011.setAttribute('id', 'smo239011');
smo239011.setFont('Merriweather', 12.1, 'normal');
smo239011.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239010.addModifier(smo239011);
smo239011.addClass('lyric lyric-0');
smo239032v0ar.push(smo239010);
const smo239012 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/5/n"]}'))
smo239012.setAttribute('id', 'smo239012');
const smo239013 = new VF.Annotation('-');
smo239013.setAttribute('id', 'smo239013');
smo239013.setFont('Merriweather', 12.1, 'normal');
smo239013.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239012.addModifier(smo239013);
smo239013.addClass('lyric lyric-0 lyric-hyphen');
smo239032v0ar.push(smo239012);
const smo239014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo239014.setAttribute('id', 'smo239014');
const smo239015 = new VF.Annotation('-');
smo239015.setAttribute('id', 'smo239015');
smo239015.setFont('Merriweather', 12.1, 'normal');
smo239015.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239014.addModifier(smo239015);
smo239015.addClass('lyric lyric-0 lyric-hyphen');
smo239032v0ar.push(smo239014);
const smo239016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239016.setAttribute('id', 'smo239016');
smo239032v0ar.push(smo239016);
smo239032v0.addTickables(smo239032v0ar)
fmtsmo23903233.joinVoices([smo239032v0]);
const fmtsmo23999933 = new VF.Formatter();
//
// voices and notes for stave 1 33
const smo239999v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239999v0ar = [];
const smo239980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239980.setAttribute('id', 'smo239980');
smo239999v0ar.push(smo239980);
const smo239981 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo239981.setAttribute('id', 'smo239981');
smo239999v0ar.push(smo239981);
const smo239982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239982.setAttribute('id', 'smo239982');
smo239999v0ar.push(smo239982);
const smo239983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo239983.setAttribute('id', 'smo239983');
smo239999v0ar.push(smo239983);
smo239999v0.addTickables(smo239999v0ar)
fmtsmo23999933.joinVoices([smo239999v0]);
const fmtsmo24095833 = new VF.Formatter();
//
// voices and notes for stave 2 33
const smo240958v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240958v0ar = [];
const smo240942 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240942.setAttribute('id', 'smo240942');
smo240958v0ar.push(smo240942);
smo240958v0.addTickables(smo240958v0ar)
fmtsmo24095833.joinVoices([smo240958v0]);
const fmtsmo24192533 = new VF.Formatter();
//
// voices and notes for stave 3 33
const smo241925v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241925v0ar = [];
const smo241906 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo241906.setAttribute('id', 'smo241906');
smo241925v0ar.push(smo241906);
const smo241907 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241907.setAttribute('id', 'smo241907');
smo241925v0ar.push(smo241907);
const smo241908 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo241908.setAttribute('id', 'smo241908');
smo241925v0ar.push(smo241908);
const smo241909 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241909.setAttribute('id', 'smo241909');
smo241925v0ar.push(smo241909);
smo241925v0.addTickables(smo241925v0ar)
fmtsmo24192533.joinVoices([smo241925v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
 
// formatting measures in staff group smo242235
fmtsmo23903233.format([smo239032v0,smo239999v0,smo240958v0,smo241925v0], 144);
const stavesmo239032 = new VF.Stave(303, 627, 158);
stavesmo239032.setAttribute('id', 'stavesmo239032');
stavesmo239032.setBegBarType(VF.Barline.type.NONE);
stavesmo239032.setContext(context);
stavesmo239032.draw();
smo239032v0.draw(context, stavesmo239032);
const stavesmo239999 = new VF.Stave(303, 730, 158);
stavesmo239999.setAttribute('id', 'stavesmo239999');
stavesmo239999.setBegBarType(VF.Barline.type.NONE);
stavesmo239999.setContext(context);
stavesmo239999.draw();
smo239999v0.draw(context, stavesmo239999);
const stavesmo240958 = new VF.Stave(303, 813, 158);
stavesmo240958.setAttribute('id', 'stavesmo240958');
stavesmo240958.setBegBarType(VF.Barline.type.NONE);
stavesmo240958.setContext(context);
stavesmo240958.draw();
smo240958v0.draw(context, stavesmo240958);
const stavesmo241925 = new VF.Stave(303, 922, 158);
stavesmo241925.setAttribute('id', 'stavesmo241925');
stavesmo241925.setBegBarType(VF.Barline.type.NONE);
stavesmo241925.setContext(context);
stavesmo241925.draw();
smo241925v0.draw(context, stavesmo241925);
const fmtsmo23905934 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo239059v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239059v0ar = [];
const smo239033 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo239033.setAttribute('id', 'smo239033');
const smo239035 = new VF.Ornament('mordent');
smo239033.addModifier(smo239035, 0);
const smo239034 = new VF.Annotation('Со');
smo239034.setAttribute('id', 'smo239034');
smo239034.setFont('Merriweather', 12.1, 'normal');
smo239034.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239033.addModifier(smo239034);
smo239034.addClass('lyric lyric-0');
smo239059v0ar.push(smo239033);
const smo239036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo239036.setAttribute('id', 'smo239036');
const smo239037 = new VF.Annotation('-');
smo239037.setAttribute('id', 'smo239037');
smo239037.setFont('Merriweather', 12.1, 'normal');
smo239037.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239036.addModifier(smo239037);
smo239037.addClass('lyric lyric-0 lyric-hyphen');
smo239059v0ar.push(smo239036);
const smo239038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo239038.setAttribute('id', 'smo239038');
const smo239039 = new VF.Annotation('-');
smo239039.setAttribute('id', 'smo239039');
smo239039.setFont('Merriweather', 12.1, 'normal');
smo239039.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239038.addModifier(smo239039);
smo239039.addClass('lyric lyric-0 lyric-hyphen');
smo239059v0ar.push(smo239038);
const smo239040 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo239040.setAttribute('id', 'smo239040');
const smo239041 = new VF.Annotation('ло');
smo239041.setAttribute('id', 'smo239041');
smo239041.setFont('Merriweather', 12.1, 'normal');
smo239041.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239040.addModifier(smo239041);
smo239041.addClass('lyric lyric-0');
smo239059v0ar.push(smo239040);
const smo239042 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo239042.setAttribute('id', 'smo239042');
const smo239043 = new VF.Annotation('-');
smo239043.setAttribute('id', 'smo239043');
smo239043.setFont('Merriweather', 12.1, 'normal');
smo239043.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239042.addModifier(smo239043);
smo239043.addClass('lyric lyric-0 lyric-hyphen');
smo239059v0ar.push(smo239042);
smo239059v0.addTickables(smo239059v0ar)
fmtsmo23905934.joinVoices([smo239059v0]);
const fmtsmo24001934 = new VF.Formatter();
//
// voices and notes for stave 1 34
const smo240019v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240019v0ar = [];
const smo240000 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240000.setAttribute('id', 'smo240000');
smo240019v0ar.push(smo240000);
const smo240001 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240001.setAttribute('id', 'smo240001');
smo240019v0ar.push(smo240001);
const smo240002 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240002.setAttribute('id', 'smo240002');
smo240019v0ar.push(smo240002);
const smo240003 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240003.setAttribute('id', 'smo240003');
smo240019v0ar.push(smo240003);
smo240019v0.addTickables(smo240019v0ar)
fmtsmo24001934.joinVoices([smo240019v0]);
const fmtsmo24097534 = new VF.Formatter();
//
// voices and notes for stave 2 34
const smo240975v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240975v0ar = [];
const smo240959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240959.setAttribute('id', 'smo240959');
smo240975v0ar.push(smo240959);
smo240975v0.addTickables(smo240975v0ar)
fmtsmo24097534.joinVoices([smo240975v0]);
const fmtsmo24194534 = new VF.Formatter();
//
// voices and notes for stave 3 34
const smo241945v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241945v0ar = [];
const smo241926 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241926.setAttribute('id', 'smo241926');
smo241945v0ar.push(smo241926);
const smo241927 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241927.setAttribute('id', 'smo241927');
smo241945v0ar.push(smo241927);
const smo241928 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo241928.setAttribute('id', 'smo241928');
smo241945v0ar.push(smo241928);
const smo241929 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241929.setAttribute('id', 'smo241929');
smo241945v0ar.push(smo241929);
smo241945v0.addTickables(smo241945v0ar)
fmtsmo24194534.joinVoices([smo241945v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
const dirsmo248825 = smo239036.getStemDirection();
smo239036.setStemDirection(dirsmo248825);
smo239038.setStemDirection(dirsmo248825);
const smo248825 = new VF.Beam([smo239036,smo239038]);
 
// formatting measures in staff group smo242235
fmtsmo23905934.format([smo239059v0,smo240019v0,smo240975v0,smo241945v0], 172);
const stavesmo239059 = new VF.Stave(461, 627, 186);
stavesmo239059.setAttribute('id', 'stavesmo239059');
stavesmo239059.setBegBarType(VF.Barline.type.NONE);
stavesmo239059.setContext(context);
stavesmo239059.draw();
smo239059v0.draw(context, stavesmo239059);
smo248825.setContext(context);
smo248825.draw();
const stavesmo240019 = new VF.Stave(461, 730, 186);
stavesmo240019.setAttribute('id', 'stavesmo240019');
stavesmo240019.setBegBarType(VF.Barline.type.NONE);
stavesmo240019.setContext(context);
stavesmo240019.draw();
smo240019v0.draw(context, stavesmo240019);
const stavesmo240975 = new VF.Stave(461, 813, 186);
stavesmo240975.setAttribute('id', 'stavesmo240975');
stavesmo240975.setBegBarType(VF.Barline.type.NONE);
stavesmo240975.setContext(context);
stavesmo240975.draw();
smo240975v0.draw(context, stavesmo240975);
const stavesmo241945 = new VF.Stave(461, 922, 186);
stavesmo241945.setAttribute('id', 'stavesmo241945');
stavesmo241945.setBegBarType(VF.Barline.type.NONE);
stavesmo241945.setContext(context);
stavesmo241945.draw();
smo241945v0.draw(context, stavesmo241945);
const fmtsmo23908135 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo239081v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239081v0ar = [];
const smo239060 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo239060.setAttribute('id', 'smo239060');
const smo239061 = new VF.Annotation('вей');
smo239061.setAttribute('id', 'smo239061');
smo239061.setFont('Merriweather', 12.1, 'normal');
smo239061.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239060.addModifier(smo239061);
smo239061.addClass('lyric lyric-0');
smo239081v0ar.push(smo239060);
const smo239062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/6/n"]}'))
smo239062.setAttribute('id', 'smo239062');
const smo239063 = new VF.Annotation('-');
smo239063.setAttribute('id', 'smo239063');
smo239063.setFont('Merriweather', 12.1, 'normal');
smo239063.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239062.addModifier(smo239063);
smo239063.addClass('lyric lyric-0 lyric-hyphen');
smo239081v0ar.push(smo239062);
const smo239064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo239064.setAttribute('id', 'smo239064');
const smo239065 = new VF.Annotation('-');
smo239065.setAttribute('id', 'smo239065');
smo239065.setFont('Merriweather', 12.1, 'normal');
smo239065.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239064.addModifier(smo239065);
smo239065.addClass('lyric lyric-0 lyric-hyphen');
smo239081v0ar.push(smo239064);
smo239081v0.addTickables(smo239081v0ar)
fmtsmo23908135.joinVoices([smo239081v0]);
const fmtsmo24003935 = new VF.Formatter();
//
// voices and notes for stave 1 35
const smo240039v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240039v0ar = [];
const smo240020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240020.setAttribute('id', 'smo240020');
smo240039v0ar.push(smo240020);
const smo240021 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo240021.setAttribute('id', 'smo240021');
smo240039v0ar.push(smo240021);
const smo240022 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240022.setAttribute('id', 'smo240022');
smo240039v0ar.push(smo240022);
const smo240023 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo240023.setAttribute('id', 'smo240023');
smo240039v0ar.push(smo240023);
smo240039v0.addTickables(smo240039v0ar)
fmtsmo24003935.joinVoices([smo240039v0]);
const fmtsmo24099235 = new VF.Formatter();
//
// voices and notes for stave 2 35
const smo240992v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240992v0ar = [];
const smo240976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240976.setAttribute('id', 'smo240976');
smo240992v0ar.push(smo240976);
smo240992v0.addTickables(smo240992v0ar)
fmtsmo24099235.joinVoices([smo240992v0]);
const fmtsmo24196535 = new VF.Formatter();
//
// voices and notes for stave 3 35
const smo241965v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241965v0ar = [];
const smo241946 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo241946.setAttribute('id', 'smo241946');
smo241965v0ar.push(smo241946);
const smo241947 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241947.setAttribute('id', 'smo241947');
smo241965v0ar.push(smo241947);
const smo241948 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo241948.setAttribute('id', 'smo241948');
smo241965v0ar.push(smo241948);
const smo241949 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241949.setAttribute('id', 'smo241949');
smo241965v0ar.push(smo241949);
smo241965v0.addTickables(smo241965v0ar)
fmtsmo24196535.joinVoices([smo241965v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
 
// formatting measures in staff group smo242235
fmtsmo23908135.format([smo239081v0,smo240039v0,smo240992v0,smo241965v0], 136);
const stavesmo239081 = new VF.Stave(647, 627, 150);
stavesmo239081.setAttribute('id', 'stavesmo239081');
stavesmo239081.setBegBarType(VF.Barline.type.NONE);
stavesmo239081.setContext(context);
stavesmo239081.draw();
smo239081v0.draw(context, stavesmo239081);
const stavesmo240039 = new VF.Stave(647, 730, 150);
stavesmo240039.setAttribute('id', 'stavesmo240039');
stavesmo240039.setBegBarType(VF.Barline.type.NONE);
stavesmo240039.setContext(context);
stavesmo240039.draw();
smo240039v0.draw(context, stavesmo240039);
const stavesmo240992 = new VF.Stave(647, 813, 150);
stavesmo240992.setAttribute('id', 'stavesmo240992');
stavesmo240992.setBegBarType(VF.Barline.type.NONE);
stavesmo240992.setContext(context);
stavesmo240992.draw();
smo240992v0.draw(context, stavesmo240992);
const stavesmo241965 = new VF.Stave(647, 922, 150);
stavesmo241965.setAttribute('id', 'stavesmo241965');
stavesmo241965.setBegBarType(VF.Barline.type.NONE);
stavesmo241965.setContext(context);
stavesmo241965.draw();
smo241965v0.draw(context, stavesmo241965);
const fmtsmo23910736 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo239107v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239107v0ar = [];
const smo239082 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo239082.setAttribute('id', 'smo239082');
const smo239083 = new VF.Annotation('го');
smo239083.setAttribute('id', 'smo239083');
smo239083.setFont('Merriweather', 12.1, 'normal');
smo239083.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239082.addModifier(smo239083);
smo239083.addClass('lyric lyric-0');
smo239107v0ar.push(smo239082);
const smo239084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo239084.setAttribute('id', 'smo239084');
const smo239085 = new VF.Annotation('-');
smo239085.setAttribute('id', 'smo239085');
smo239085.setFont('Merriweather', 12.1, 'normal');
smo239085.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239084.addModifier(smo239085);
smo239085.addClass('lyric lyric-0 lyric-hyphen');
smo239107v0ar.push(smo239084);
const smo239086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo239086.setAttribute('id', 'smo239086');
const smo239087 = new VF.Annotation('-');
smo239087.setAttribute('id', 'smo239087');
smo239087.setFont('Merriweather', 12.1, 'normal');
smo239087.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239086.addModifier(smo239087);
smo239087.addClass('lyric lyric-0 lyric-hyphen');
smo239107v0ar.push(smo239086);
const smo239088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["c#/5/n"]}'))
smo239088.setAttribute('id', 'smo239088');
const smo2390880acc = new VF.Accidental('#');
smo239088.addModifier(smo2390880acc, 0);
const smo239089 = new VF.Annotation('-');
smo239089.setAttribute('id', 'smo239089');
smo239089.setFont('Merriweather', 12.1, 'normal');
smo239089.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239088.addModifier(smo239089);
smo239089.addClass('lyric lyric-0 lyric-hyphen');
smo239107v0ar.push(smo239088);
const smo239090 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo239090.setAttribute('id', 'smo239090');
const smo239091 = new VF.Annotation('ло');
smo239091.setAttribute('id', 'smo239091');
smo239091.setFont('Merriweather', 12.1, 'normal');
smo239091.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239090.addModifier(smo239091);
smo239091.addClass('lyric lyric-0 lyric-hyphen');
smo239107v0ar.push(smo239090);
smo239107v0.addTickables(smo239107v0ar)
fmtsmo23910736.joinVoices([smo239107v0]);
const fmtsmo24005936 = new VF.Formatter();
//
// voices and notes for stave 1 36
const smo240059v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240059v0ar = [];
const smo240040 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240040.setAttribute('id', 'smo240040');
smo240059v0ar.push(smo240040);
const smo240041 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo240041.setAttribute('id', 'smo240041');
smo240059v0ar.push(smo240041);
const smo240042 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240042.setAttribute('id', 'smo240042');
smo240059v0ar.push(smo240042);
const smo240043 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo240043.setAttribute('id', 'smo240043');
smo240059v0ar.push(smo240043);
smo240059v0.addTickables(smo240059v0ar)
fmtsmo24005936.joinVoices([smo240059v0]);
const fmtsmo24101036 = new VF.Formatter();
//
// voices and notes for stave 2 36
const smo241010v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241010v0ar = [];
const smo240993 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240993.setAttribute('id', 'smo240993');
smo241010v0ar.push(smo240993);
const smo240994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240994.setAttribute('id', 'smo240994');
smo241010v0ar.push(smo240994);
smo241010v0.addTickables(smo241010v0ar)
fmtsmo24101036.joinVoices([smo241010v0]);
const fmtsmo24198536 = new VF.Formatter();
//
// voices and notes for stave 3 36
const smo241985v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241985v0ar = [];
const smo241966 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo241966.setAttribute('id', 'smo241966');
smo241985v0ar.push(smo241966);
const smo241967 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241967.setAttribute('id', 'smo241967');
smo241985v0ar.push(smo241967);
const smo241968 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo241968.setAttribute('id', 'smo241968');
smo241985v0ar.push(smo241968);
const smo241969 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241969.setAttribute('id', 'smo241969');
smo241985v0ar.push(smo241969);
smo241985v0.addTickables(smo241985v0ar)
fmtsmo24198536.joinVoices([smo241985v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
const dirsmo248842 = smo239084.getStemDirection();
smo239084.setStemDirection(dirsmo248842);
smo239086.setStemDirection(dirsmo248842);
const smo248842 = new VF.Beam([smo239084,smo239086]);
 
// formatting measures in staff group smo242235
fmtsmo23910736.format([smo239107v0,smo240059v0,smo241010v0,smo241985v0], 174);
const stavesmo239107 = new VF.Stave(797, 627, 188);
stavesmo239107.setAttribute('id', 'stavesmo239107');
stavesmo239107.setBegBarType(VF.Barline.type.NONE);
stavesmo239107.setContext(context);
stavesmo239107.draw();
smo239107v0.draw(context, stavesmo239107);
smo248842.setContext(context);
smo248842.draw();
const stavesmo240059 = new VF.Stave(797, 730, 188);
stavesmo240059.setAttribute('id', 'stavesmo240059');
stavesmo240059.setBegBarType(VF.Barline.type.NONE);
stavesmo240059.setContext(context);
stavesmo240059.draw();
smo240059v0.draw(context, stavesmo240059);
const stavesmo241010 = new VF.Stave(797, 813, 188);
stavesmo241010.setAttribute('id', 'stavesmo241010');
stavesmo241010.setBegBarType(VF.Barline.type.NONE);
stavesmo241010.setContext(context);
stavesmo241010.draw();
smo241010v0.draw(context, stavesmo241010);
const stavesmo241985 = new VF.Stave(797, 922, 188);
stavesmo241985.setAttribute('id', 'stavesmo241985');
stavesmo241985.setBegBarType(VF.Barline.type.NONE);
stavesmo241985.setContext(context);
stavesmo241985.draw();
smo241985v0.draw(context, stavesmo241985);
const fmtsmo23912937 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo239129v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239129v0ar = [];
const smo239108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo239108.setAttribute('id', 'smo239108');
const smo239109 = new VF.Annotation('си');
smo239109.setAttribute('id', 'smo239109');
smo239109.setFont('Merriweather', 12.1, 'normal');
smo239109.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239108.addModifier(smo239109);
smo239109.addClass('lyric lyric-0 lyric-hyphen');
smo239129v0ar.push(smo239108);
const smo239110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo239110.setAttribute('id', 'smo239110');
const smo239111 = new VF.Annotation('ст');
smo239111.setAttribute('id', 'smo239111');
smo239111.setFont('Merriweather', 12.1, 'normal');
smo239111.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239110.addModifier(smo239111);
smo239111.addClass('lyric lyric-0');
smo239129v0ar.push(smo239110);
const smo239112 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo239112.setAttribute('id', 'smo239112');
const smo239113 = new VF.Annotation('ый');
smo239113.setAttribute('id', 'smo239113');
smo239113.setFont('Merriweather', 12.1, 'normal');
smo239113.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239112.addModifier(smo239113);
smo239113.addClass('lyric lyric-0');
smo239129v0ar.push(smo239112);
smo239129v0.addTickables(smo239129v0ar)
fmtsmo23912937.joinVoices([smo239129v0]);
const fmtsmo24007737 = new VF.Formatter();
//
// voices and notes for stave 1 37
const smo240077v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240077v0ar = [];
const smo240060 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo240060.setAttribute('id', 'smo240060');
smo240077v0ar.push(smo240060);
const smo240061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo240061.setAttribute('id', 'smo240061');
smo240077v0ar.push(smo240061);
smo240077v0.addTickables(smo240077v0ar)
fmtsmo24007737.joinVoices([smo240077v0]);
const fmtsmo24102837 = new VF.Formatter();
//
// voices and notes for stave 2 37
const smo241028v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241028v0ar = [];
const smo241011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo241011.setAttribute('id', 'smo241011');
smo241028v0ar.push(smo241011);
const smo241012 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241012.setAttribute('id', 'smo241012');
smo241028v0ar.push(smo241012);
smo241028v0.addTickables(smo241028v0ar)
fmtsmo24102837.joinVoices([smo241028v0]);
const fmtsmo24200337 = new VF.Formatter();
//
// voices and notes for stave 3 37
const smo242003v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242003v0ar = [];
const smo241986 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo241986.setAttribute('id', 'smo241986');
smo242003v0ar.push(smo241986);
const smo241987 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo241987.setAttribute('id', 'smo241987');
smo242003v0ar.push(smo241987);
smo242003v0.addTickables(smo242003v0ar)
fmtsmo24200337.joinVoices([smo242003v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
 
// formatting measures in staff group smo242235
fmtsmo23912937.format([smo239129v0,smo240077v0,smo241028v0,smo242003v0], 143);
const stavesmo239129 = new VF.Stave(985, 627, 157);
stavesmo239129.setAttribute('id', 'stavesmo239129');
stavesmo239129.setBegBarType(VF.Barline.type.NONE);
stavesmo239129.setContext(context);
stavesmo239129.draw();
smo239129v0.draw(context, stavesmo239129);
const stavesmo240077 = new VF.Stave(985, 730, 157);
stavesmo240077.setAttribute('id', 'stavesmo240077');
stavesmo240077.setBegBarType(VF.Barline.type.NONE);
stavesmo240077.setContext(context);
stavesmo240077.draw();
smo240077v0.draw(context, stavesmo240077);
const stavesmo241028 = new VF.Stave(985, 813, 157);
stavesmo241028.setAttribute('id', 'stavesmo241028');
stavesmo241028.setBegBarType(VF.Barline.type.NONE);
stavesmo241028.setContext(context);
stavesmo241028.draw();
smo241028v0.draw(context, stavesmo241028);
const stavesmo242003 = new VF.Stave(985, 922, 157);
stavesmo242003.setAttribute('id', 'stavesmo242003');
stavesmo242003.setBegBarType(VF.Barline.type.NONE);
stavesmo242003.setContext(context);
stavesmo242003.draw();
smo242003v0.draw(context, stavesmo242003);
const fmtsmo23915238 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo239152v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239152v0ar = [];
const smo239130 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239130.setAttribute('id', 'smo239130');
smo239130.addModifier(new VF.Dot(), 0);
const  smo249674 = new VF.Articulation('a@a').setPosition(3);
smo239130.addModifier(smo249674, 0);
const smo239131 = new VF.Annotation('со');
smo239131.setAttribute('id', 'smo239131');
smo239131.setFont('Merriweather', 12.1, 'normal');
smo239131.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239130.addModifier(smo239131);
smo239131.addClass('lyric lyric-0');
smo239152v0ar.push(smo239130);
const smo239133 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo239133.setAttribute('id', 'smo239133');
const smo2391330acc = new VF.Accidental('#');
smo239133.addModifier(smo2391330acc, 0);
const smo239134 = new VF.Annotation('-');
smo239134.setAttribute('id', 'smo239134');
smo239134.setFont('Merriweather', 12.1, 'normal');
smo239134.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239133.addModifier(smo239134);
smo239134.addClass('lyric lyric-0 lyric-hyphen');
smo239152v0ar.push(smo239133);
const smo239135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239135.setAttribute('id', 'smo239135');
smo239152v0ar.push(smo239135);
smo239152v0.addTickables(smo239152v0ar)
fmtsmo23915238.joinVoices([smo239152v0]);
const fmtsmo24009538 = new VF.Formatter();
//
// voices and notes for stave 1 38
const smo240095v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240095v0ar = [];
const smo240078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240078.setAttribute('id', 'smo240078');
smo240078.addModifier(new VF.Dot(), 0);
smo240095v0ar.push(smo240078);
const smo240079 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240079.setAttribute('id', 'smo240079');
smo240095v0ar.push(smo240079);
smo240095v0.addTickables(smo240095v0ar)
fmtsmo24009538.joinVoices([smo240095v0]);
const fmtsmo24104638 = new VF.Formatter();
//
// voices and notes for stave 2 38
const smo241046v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241046v0ar = [];
const smo241029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo241029.setAttribute('id', 'smo241029');
smo241029.addModifier(new VF.Dot(), 0);
smo241046v0ar.push(smo241029);
const smo241030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241030.setAttribute('id', 'smo241030');
smo241046v0ar.push(smo241030);
smo241046v0.addTickables(smo241046v0ar)
fmtsmo24104638.joinVoices([smo241046v0]);
const fmtsmo24202138 = new VF.Formatter();
//
// voices and notes for stave 3 38
const smo242021v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242021v0ar = [];
const smo242004 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242004.setAttribute('id', 'smo242004');
smo242004.addModifier(new VF.Dot(), 0);
smo242021v0ar.push(smo242004);
const smo242005 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242005.setAttribute('id', 'smo242005');
smo242021v0ar.push(smo242005);
smo242021v0.addTickables(smo242021v0ar)
fmtsmo24202138.joinVoices([smo242021v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
const dirsmo248859 = smo239133.getStemDirection();
smo239133.setStemDirection(dirsmo248859);
smo239135.setStemDirection(dirsmo248859);
const smo248859 = new VF.Beam([smo239133,smo239135]);
 
// formatting measures in staff group smo242235
fmtsmo23915238.format([smo239152v0,smo240095v0,smo241046v0,smo242021v0], 100);
const stavesmo239152 = new VF.Stave(1142, 627, 114);
stavesmo239152.setAttribute('id', 'stavesmo239152');
stavesmo239152.setBegBarType(VF.Barline.type.NONE);
stavesmo239152.setContext(context);
stavesmo239152.draw();
smo239152v0.draw(context, stavesmo239152);
smo248859.setContext(context);
smo248859.draw();
const stavesmo240095 = new VF.Stave(1142, 730, 114);
stavesmo240095.setAttribute('id', 'stavesmo240095');
stavesmo240095.setBegBarType(VF.Barline.type.NONE);
stavesmo240095.setContext(context);
stavesmo240095.draw();
smo240095v0.draw(context, stavesmo240095);
const stavesmo241046 = new VF.Stave(1142, 813, 114);
stavesmo241046.setAttribute('id', 'stavesmo241046');
stavesmo241046.setBegBarType(VF.Barline.type.NONE);
stavesmo241046.setContext(context);
stavesmo241046.draw();
smo241046v0.draw(context, stavesmo241046);
const stavesmo242021 = new VF.Stave(1142, 922, 114);
stavesmo242021.setAttribute('id', 'stavesmo242021');
stavesmo242021.setBegBarType(VF.Barline.type.NONE);
stavesmo242021.setContext(context);
stavesmo242021.draw();
smo242021v0.draw(context, stavesmo242021);
const fmtsmo23917239 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo239172v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239172v0ar = [];
const smo239153 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo239153.setAttribute('id', 'smo239153');
smo239153.addModifier(new VF.Dot(), 0);
const smo239154 = new VF.Annotation('ло');
smo239154.setAttribute('id', 'smo239154');
smo239154.setFont('Merriweather', 12.1, 'normal');
smo239154.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239153.addModifier(smo239154);
smo239154.addClass('lyric lyric-0');
smo239172v0ar.push(smo239153);
const smo239155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo239155.setAttribute('id', 'smo239155');
const smo239156 = new VF.Annotation('-');
smo239156.setAttribute('id', 'smo239156');
smo239156.setFont('Merriweather', 12.1, 'normal');
smo239156.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239155.addModifier(smo239156);
smo239156.addClass('lyric lyric-0 lyric-hyphen');
smo239172v0ar.push(smo239155);
smo239172v0.addTickables(smo239172v0ar)
fmtsmo23917239.joinVoices([smo239172v0]);
const fmtsmo24011439 = new VF.Formatter();
//
// voices and notes for stave 1 39
const smo240114v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240114v0ar = [];
const smo240096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240096.setAttribute('id', 'smo240096');
smo240114v0ar.push(smo240096);
const smo240097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240097.setAttribute('id', 'smo240097');
smo240114v0ar.push(smo240097);
const smo240098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240098.setAttribute('id', 'smo240098');
smo240114v0ar.push(smo240098);
smo240114v0.addTickables(smo240114v0ar)
fmtsmo24011439.joinVoices([smo240114v0]);
const fmtsmo24106539 = new VF.Formatter();
//
// voices and notes for stave 2 39
const smo241065v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241065v0ar = [];
const smo241047 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241047.setAttribute('id', 'smo241047');
smo241065v0ar.push(smo241047);
const smo241048 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241048.setAttribute('id', 'smo241048');
smo241065v0ar.push(smo241048);
const smo241049 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["c#/4/n"]}'))
smo241049.setAttribute('id', 'smo241049');
const smo2410490acc = new VF.Accidental('#');
smo241049.addModifier(smo2410490acc, 0);
smo241065v0ar.push(smo241049);
smo241065v0.addTickables(smo241065v0ar)
fmtsmo24106539.joinVoices([smo241065v0]);
const fmtsmo24204039 = new VF.Formatter();
//
// voices and notes for stave 3 39
const smo242040v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242040v0ar = [];
const smo242022 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242022.setAttribute('id', 'smo242022');
smo242040v0ar.push(smo242022);
const smo242023 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242023.setAttribute('id', 'smo242023');
smo242040v0ar.push(smo242023);
const smo242024 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo242024.setAttribute('id', 'smo242024');
smo242040v0ar.push(smo242024);
smo242040v0.addTickables(smo242040v0ar)
fmtsmo24204039.joinVoices([smo242040v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
 
// formatting measures in staff group smo242235
fmtsmo23917239.format([smo239172v0,smo240114v0,smo241065v0,smo242040v0], 106);
const stavesmo239172 = new VF.Stave(1256, 627, 120);
stavesmo239172.setAttribute('id', 'stavesmo239172');
stavesmo239172.setBegBarType(VF.Barline.type.NONE);
stavesmo239172.setTempo(JSON.parse('{"duration":"2","dots":0,"bpm":144}'), -1 * 0);
stavesmo239172.setContext(context);
stavesmo239172.draw();
smo239172v0.draw(context, stavesmo239172);
const stavesmo240114 = new VF.Stave(1256, 730, 120);
stavesmo240114.setAttribute('id', 'stavesmo240114');
stavesmo240114.setBegBarType(VF.Barline.type.NONE);
stavesmo240114.setContext(context);
stavesmo240114.draw();
smo240114v0.draw(context, stavesmo240114);
const stavesmo241065 = new VF.Stave(1256, 813, 120);
stavesmo241065.setAttribute('id', 'stavesmo241065');
stavesmo241065.setBegBarType(VF.Barline.type.NONE);
stavesmo241065.setContext(context);
stavesmo241065.draw();
smo241065v0.draw(context, stavesmo241065);
const stavesmo242040 = new VF.Stave(1256, 922, 120);
stavesmo242040.setAttribute('id', 'stavesmo242040');
stavesmo242040.setBegBarType(VF.Barline.type.NONE);
stavesmo242040.setContext(context);
stavesmo242040.draw();
smo242040v0.draw(context, stavesmo242040);
const rightsmo242235stavesmo2391723 = new VF.StaveConnector(stavesmo239172, stavesmo242040).setType(0);
rightsmo242235stavesmo2391723.setContext(context).draw();
const fmtsmo23919240 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo239192v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239192v0ar = [];
const smo239173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo239173.setAttribute('id', 'smo239173');
const smo239174 = new VF.Annotation('вей');
smo239174.setAttribute('id', 'smo239174');
smo239174.setFont('Merriweather', 12.1, 'normal');
smo239174.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239173.addModifier(smo239174);
smo239174.addClass('lyric lyric-0');
smo239192v0ar.push(smo239173);
const smo239175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239175.setAttribute('id', 'smo239175');
smo239192v0ar.push(smo239175);
const smo239176 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239176.setAttribute('id', 'smo239176');
smo239192v0ar.push(smo239176);
smo239192v0.addTickables(smo239192v0ar)
fmtsmo23919240.joinVoices([smo239192v0]);
const fmtsmo24013640 = new VF.Formatter();
//
// voices and notes for stave 1 40
const smo240136v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240136v0ar = [];
const smo240115 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
const smo240116 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["an/4"],"slash":false}'))
smo240116.setAttribute('id', 'smo240116');
const ggrpsmo240115 = new VF.GraceNoteGroup([smo240116]);
ggrpsmo240115.beamNotes();
smo240115.addModifier(ggrpsmo240115, 0);
smo240115.setAttribute('id', 'smo240115');
smo240136v0ar.push(smo240115);
const smo240117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240117.setAttribute('id', 'smo240117');
smo240136v0ar.push(smo240117);
const smo240118 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
const smo240119 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["dn/5"],"slash":false}'))
smo240119.setAttribute('id', 'smo240119');
const ggrpsmo240118 = new VF.GraceNoteGroup([smo240119]);
ggrpsmo240118.beamNotes();
smo240118.addModifier(ggrpsmo240118, 0);
smo240118.setAttribute('id', 'smo240118');
smo240136v0ar.push(smo240118);
const smo240120 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240120.setAttribute('id', 'smo240120');
smo240136v0ar.push(smo240120);
smo240136v0.addTickables(smo240136v0ar)
fmtsmo24013640.joinVoices([smo240136v0]);
const fmtsmo24108540 = new VF.Formatter();
//
// voices and notes for stave 2 40
const smo241085v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241085v0ar = [];
const smo241066 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241066.setAttribute('id', 'smo241066');
smo241085v0ar.push(smo241066);
const smo241067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241067.setAttribute('id', 'smo241067');
smo241085v0ar.push(smo241067);
const smo241068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241068.setAttribute('id', 'smo241068');
smo241085v0ar.push(smo241068);
const smo241069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241069.setAttribute('id', 'smo241069');
smo241085v0ar.push(smo241069);
smo241085v0.addTickables(smo241085v0ar)
fmtsmo24108540.joinVoices([smo241085v0]);
const fmtsmo24206040 = new VF.Formatter();
//
// voices and notes for stave 3 40
const smo242060v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242060v0ar = [];
const smo242041 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242041.setAttribute('id', 'smo242041');
smo242060v0ar.push(smo242041);
const smo242042 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242042.setAttribute('id', 'smo242042');
smo242060v0ar.push(smo242042);
const smo242043 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242043.setAttribute('id', 'smo242043');
smo242060v0ar.push(smo242043);
const smo242044 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242044.setAttribute('id', 'smo242044');
smo242060v0ar.push(smo242044);
smo242060v0.addTickables(smo242060v0ar)
fmtsmo24206040.joinVoices([smo242060v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
 
// formatting measures in staff group smo242235
fmtsmo23919240.format([smo239192v0,smo240136v0,smo241085v0,smo242060v0], 170);
const stavesmo239192 = new VF.Stave(55, 1040, 244);
stavesmo239192.setAttribute('id', 'stavesmo239192');
stavesmo239192.setBegBarType(1);
stavesmo239192.addClef('treble');
const keysmo239192 = new VF.KeySignature('F');
keysmo239192.addToStave(stavesmo239192);
stavesmo239192.setContext(context);
stavesmo239192.draw();
smo239192v0.draw(context, stavesmo239192);
const stavesmo240136 = new VF.Stave(55, 1165, 244);
stavesmo240136.setAttribute('id', 'stavesmo240136');
stavesmo240136.setBegBarType(1);
stavesmo240136.addClef('treble');
const keysmo240136 = new VF.KeySignature('F');
keysmo240136.addToStave(stavesmo240136);
stavesmo240136.setContext(context);
stavesmo240136.draw();
smo240136v0.draw(context, stavesmo240136);
const stavesmo241085 = new VF.Stave(55, 1253, 244);
stavesmo241085.setAttribute('id', 'stavesmo241085');
stavesmo241085.setBegBarType(1);
stavesmo241085.addClef('treble');
const keysmo241085 = new VF.KeySignature('F');
keysmo241085.addToStave(stavesmo241085);
stavesmo241085.setContext(context);
stavesmo241085.draw();
smo241085v0.draw(context, stavesmo241085);
const stavesmo242060 = new VF.Stave(55, 1366, 244);
stavesmo242060.setAttribute('id', 'stavesmo242060');
stavesmo242060.setBegBarType(1);
stavesmo242060.addClef('bass');
const keysmo242060 = new VF.KeySignature('F');
keysmo242060.addToStave(stavesmo242060);
stavesmo242060.setContext(context);
stavesmo242060.draw();
smo242060v0.draw(context, stavesmo242060);
const leftsmo242235stavesmo2391923 = new VF.StaveConnector(stavesmo239192, stavesmo242060).setType(1);
leftsmo242235stavesmo2391923.setContext(context).draw();
const fmtsmo23920941 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo239209v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239209v0ar = [];
const smo239193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239193.setAttribute('id', 'smo239193');
smo239209v0ar.push(smo239193);
smo239209v0.addTickables(smo239209v0ar)
fmtsmo23920941.joinVoices([smo239209v0]);
const fmtsmo24015641 = new VF.Formatter();
//
// voices and notes for stave 1 41
const smo240156v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240156v0ar = [];
const smo240137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
const smo240138 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["fn/5"],"slash":false}'))
smo240138.setAttribute('id', 'smo240138');
const ggrpsmo240137 = new VF.GraceNoteGroup([smo240138]);
ggrpsmo240137.beamNotes();
smo240137.addModifier(ggrpsmo240137, 0);
smo240137.setAttribute('id', 'smo240137');
smo240137.addModifier(new VF.Dot(), 0);
smo240156v0ar.push(smo240137);
const smo240139 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo240139.setAttribute('id', 'smo240139');
smo240156v0ar.push(smo240139);
const smo240140 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/5/n"]}'))
smo240140.setAttribute('id', 'smo240140');
smo240156v0ar.push(smo240140);
smo240156v0.addTickables(smo240156v0ar)
fmtsmo24015641.joinVoices([smo240156v0]);
const fmtsmo24110541 = new VF.Formatter();
//
// voices and notes for stave 2 41
const smo241105v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241105v0ar = [];
const smo241086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241086.setAttribute('id', 'smo241086');
smo241105v0ar.push(smo241086);
const smo241087 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241087.setAttribute('id', 'smo241087');
smo241105v0ar.push(smo241087);
const smo241088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241088.setAttribute('id', 'smo241088');
smo241105v0ar.push(smo241088);
const smo241089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241089.setAttribute('id', 'smo241089');
smo241105v0ar.push(smo241089);
smo241105v0.addTickables(smo241105v0ar)
fmtsmo24110541.joinVoices([smo241105v0]);
const fmtsmo24208041 = new VF.Formatter();
//
// voices and notes for stave 3 41
const smo242080v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242080v0ar = [];
const smo242061 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242061.setAttribute('id', 'smo242061');
smo242080v0ar.push(smo242061);
const smo242062 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242062.setAttribute('id', 'smo242062');
smo242080v0ar.push(smo242062);
const smo242063 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242063.setAttribute('id', 'smo242063');
smo242080v0ar.push(smo242063);
const smo242064 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242064.setAttribute('id', 'smo242064');
smo242080v0ar.push(smo242064);
smo242080v0.addTickables(smo242080v0ar)
fmtsmo24208041.joinVoices([smo242080v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
const dirsmo248894 = smo240139.getStemDirection();
smo240139.setStemDirection(dirsmo248894);
smo240140.setStemDirection(dirsmo248894);
const smo248894 = new VF.Beam([smo240139,smo240140]);
 
// formatting measures in staff group smo242235
fmtsmo23920941.format([smo239209v0,smo240156v0,smo241105v0,smo242080v0], 153);
const stavesmo239209 = new VF.Stave(299, 1040, 167);
stavesmo239209.setAttribute('id', 'stavesmo239209');
stavesmo239209.setBegBarType(VF.Barline.type.NONE);
stavesmo239209.setContext(context);
stavesmo239209.draw();
smo239209v0.draw(context, stavesmo239209);
const stavesmo240156 = new VF.Stave(299, 1165, 167);
stavesmo240156.setAttribute('id', 'stavesmo240156');
stavesmo240156.setBegBarType(VF.Barline.type.NONE);
stavesmo240156.setContext(context);
stavesmo240156.draw();
smo240156v0.draw(context, stavesmo240156);
smo248894.setContext(context);
smo248894.draw();
const stavesmo241105 = new VF.Stave(299, 1253, 167);
stavesmo241105.setAttribute('id', 'stavesmo241105');
stavesmo241105.setBegBarType(VF.Barline.type.NONE);
stavesmo241105.setContext(context);
stavesmo241105.draw();
smo241105v0.draw(context, stavesmo241105);
const stavesmo242080 = new VF.Stave(299, 1366, 167);
stavesmo242080.setAttribute('id', 'stavesmo242080');
stavesmo242080.setBegBarType(VF.Barline.type.NONE);
stavesmo242080.setContext(context);
stavesmo242080.draw();
smo242080v0.draw(context, stavesmo242080);
const fmtsmo23922642 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo239226v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239226v0ar = [];
const smo239210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239210.setAttribute('id', 'smo239210');
smo239226v0ar.push(smo239210);
smo239226v0.addTickables(smo239226v0ar)
fmtsmo23922642.joinVoices([smo239226v0]);
const fmtsmo24017842 = new VF.Formatter();
//
// voices and notes for stave 1 42
const smo240178v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240178v0ar = [];
const smo240157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo240157.setAttribute('id', 'smo240157');
smo240178v0ar.push(smo240157);
const smo240158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo240158.setAttribute('id', 'smo240158');
smo240178v0ar.push(smo240158);
const smo240159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/5/n"]}'))
smo240159.setAttribute('id', 'smo240159');
smo240178v0ar.push(smo240159);
const smo240160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo240160.setAttribute('id', 'smo240160');
smo240178v0ar.push(smo240160);
const smo240161 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo240161.setAttribute('id', 'smo240161');
smo240178v0ar.push(smo240161);
const smo240162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/5/n"]}'))
smo240162.setAttribute('id', 'smo240162');
smo240178v0ar.push(smo240162);
smo240178v0.addTickables(smo240178v0ar)
fmtsmo24017842.joinVoices([smo240178v0]);
const fmtsmo24112542 = new VF.Formatter();
//
// voices and notes for stave 2 42
const smo241125v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241125v0ar = [];
const smo241106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241106.setAttribute('id', 'smo241106');
smo241125v0ar.push(smo241106);
const smo241107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241107.setAttribute('id', 'smo241107');
smo241125v0ar.push(smo241107);
const smo241108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241108.setAttribute('id', 'smo241108');
smo241125v0ar.push(smo241108);
const smo241109 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241109.setAttribute('id', 'smo241109');
smo241125v0ar.push(smo241109);
smo241125v0.addTickables(smo241125v0ar)
fmtsmo24112542.joinVoices([smo241125v0]);
const fmtsmo24210042 = new VF.Formatter();
//
// voices and notes for stave 3 42
const smo242100v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242100v0ar = [];
const smo242081 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242081.setAttribute('id', 'smo242081');
smo242100v0ar.push(smo242081);
const smo242082 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242082.setAttribute('id', 'smo242082');
smo242100v0ar.push(smo242082);
const smo242083 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242083.setAttribute('id', 'smo242083');
smo242100v0ar.push(smo242083);
const smo242084 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242084.setAttribute('id', 'smo242084');
smo242100v0ar.push(smo242084);
smo242100v0.addTickables(smo242100v0ar)
fmtsmo24210042.joinVoices([smo242100v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
const dirsmo248903 = smo240158.getStemDirection();
smo240158.setStemDirection(dirsmo248903);
smo240159.setStemDirection(dirsmo248903);
const smo248903 = new VF.Beam([smo240158,smo240159]);
const dirsmo248904 = smo240161.getStemDirection();
smo240161.setStemDirection(dirsmo248904);
smo240162.setStemDirection(dirsmo248904);
const smo248904 = new VF.Beam([smo240161,smo240162]);
 
// formatting measures in staff group smo242235
fmtsmo23922642.format([smo239226v0,smo240178v0,smo241125v0,smo242100v0], 147);
const stavesmo239226 = new VF.Stave(466, 1040, 161);
stavesmo239226.setAttribute('id', 'stavesmo239226');
stavesmo239226.setBegBarType(VF.Barline.type.NONE);
stavesmo239226.setContext(context);
stavesmo239226.draw();
smo239226v0.draw(context, stavesmo239226);
const stavesmo240178 = new VF.Stave(466, 1165, 161);
stavesmo240178.setAttribute('id', 'stavesmo240178');
stavesmo240178.setBegBarType(VF.Barline.type.NONE);
stavesmo240178.setContext(context);
stavesmo240178.draw();
smo240178v0.draw(context, stavesmo240178);
smo248903.setContext(context);
smo248903.draw();
smo248904.setContext(context);
smo248904.draw();
const stavesmo241125 = new VF.Stave(466, 1253, 161);
stavesmo241125.setAttribute('id', 'stavesmo241125');
stavesmo241125.setBegBarType(VF.Barline.type.NONE);
stavesmo241125.setContext(context);
stavesmo241125.draw();
smo241125v0.draw(context, stavesmo241125);
const stavesmo242100 = new VF.Stave(466, 1366, 161);
stavesmo242100.setAttribute('id', 'stavesmo242100');
stavesmo242100.setBegBarType(VF.Barline.type.NONE);
stavesmo242100.setContext(context);
stavesmo242100.draw();
smo242100v0.draw(context, stavesmo242100);
const fmtsmo23924343 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo239243v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239243v0ar = [];
const smo239227 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239227.setAttribute('id', 'smo239227');
smo239243v0ar.push(smo239227);
smo239243v0.addTickables(smo239243v0ar)
fmtsmo23924343.joinVoices([smo239243v0]);
const fmtsmo24019743 = new VF.Formatter();
//
// voices and notes for stave 1 43
const smo240197v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240197v0ar = [];
const smo240179 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo240179.setAttribute('id', 'smo240179');
smo240197v0ar.push(smo240179);
const smo240180 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/6/n"]}'))
smo240180.setAttribute('id', 'smo240180');
smo240197v0ar.push(smo240180);
const smo240181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/5/n"]}'))
smo240181.setAttribute('id', 'smo240181');
smo240197v0ar.push(smo240181);
smo240197v0.addTickables(smo240197v0ar)
fmtsmo24019743.joinVoices([smo240197v0]);
const fmtsmo24114543 = new VF.Formatter();
//
// voices and notes for stave 2 43
const smo241145v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241145v0ar = [];
const smo241126 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241126.setAttribute('id', 'smo241126');
smo241145v0ar.push(smo241126);
const smo241127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241127.setAttribute('id', 'smo241127');
smo241145v0ar.push(smo241127);
const smo241128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241128.setAttribute('id', 'smo241128');
smo241145v0ar.push(smo241128);
const smo241129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241129.setAttribute('id', 'smo241129');
smo241145v0ar.push(smo241129);
smo241145v0.addTickables(smo241145v0ar)
fmtsmo24114543.joinVoices([smo241145v0]);
const fmtsmo24212043 = new VF.Formatter();
//
// voices and notes for stave 3 43
const smo242120v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242120v0ar = [];
const smo242101 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242101.setAttribute('id', 'smo242101');
smo242120v0ar.push(smo242101);
const smo242102 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242102.setAttribute('id', 'smo242102');
smo242120v0ar.push(smo242102);
const smo242103 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242103.setAttribute('id', 'smo242103');
smo242120v0ar.push(smo242103);
const smo242104 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242104.setAttribute('id', 'smo242104');
smo242120v0ar.push(smo242104);
smo242120v0.addTickables(smo242120v0ar)
fmtsmo24212043.joinVoices([smo242120v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
 
// formatting measures in staff group smo242235
fmtsmo23924343.format([smo239243v0,smo240197v0,smo241145v0,smo242120v0], 95);
const stavesmo239243 = new VF.Stave(627, 1040, 109);
stavesmo239243.setAttribute('id', 'stavesmo239243');
stavesmo239243.setBegBarType(VF.Barline.type.NONE);
stavesmo239243.setContext(context);
stavesmo239243.draw();
smo239243v0.draw(context, stavesmo239243);
const stavesmo240197 = new VF.Stave(627, 1165, 109);
stavesmo240197.setAttribute('id', 'stavesmo240197');
stavesmo240197.setBegBarType(VF.Barline.type.NONE);
stavesmo240197.setContext(context);
stavesmo240197.draw();
smo240197v0.draw(context, stavesmo240197);
const stavesmo241145 = new VF.Stave(627, 1253, 109);
stavesmo241145.setAttribute('id', 'stavesmo241145');
stavesmo241145.setBegBarType(VF.Barline.type.NONE);
stavesmo241145.setContext(context);
stavesmo241145.draw();
smo241145v0.draw(context, stavesmo241145);
const stavesmo242120 = new VF.Stave(627, 1366, 109);
stavesmo242120.setAttribute('id', 'stavesmo242120');
stavesmo242120.setBegBarType(VF.Barline.type.NONE);
stavesmo242120.setContext(context);
stavesmo242120.draw();
smo242120v0.draw(context, stavesmo242120);
const fmtsmo23926044 = new VF.Formatter();
//
// voices and notes for stave 0 44
const smo239260v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239260v0ar = [];
const smo239244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239244.setAttribute('id', 'smo239244');
smo239260v0ar.push(smo239244);
smo239260v0.addTickables(smo239260v0ar)
fmtsmo23926044.joinVoices([smo239260v0]);
const fmtsmo24021744 = new VF.Formatter();
//
// voices and notes for stave 1 44
const smo240217v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240217v0ar = [];
const smo240198 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo240198.setAttribute('id', 'smo240198');
smo240217v0ar.push(smo240198);
const smo240199 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/5/n"]}'))
smo240199.setAttribute('id', 'smo240199');
smo240217v0ar.push(smo240199);
const smo240200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo240200.setAttribute('id', 'smo240200');
smo240217v0ar.push(smo240200);
const smo240201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo240201.setAttribute('id', 'smo240201');
smo240217v0ar.push(smo240201);
smo240217v0.addTickables(smo240217v0ar)
fmtsmo24021744.joinVoices([smo240217v0]);
const fmtsmo24116544 = new VF.Formatter();
//
// voices and notes for stave 2 44
const smo241165v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241165v0ar = [];
const smo241146 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo241146.setAttribute('id', 'smo241146');
smo241165v0ar.push(smo241146);
const smo241147 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo241147.setAttribute('id', 'smo241147');
smo241165v0ar.push(smo241147);
const smo241148 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo241148.setAttribute('id', 'smo241148');
smo241165v0ar.push(smo241148);
const smo241149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo241149.setAttribute('id', 'smo241149');
smo241165v0ar.push(smo241149);
smo241165v0.addTickables(smo241165v0ar)
fmtsmo24116544.joinVoices([smo241165v0]);
const fmtsmo24214044 = new VF.Formatter();
//
// voices and notes for stave 3 44
const smo242140v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242140v0ar = [];
const smo242121 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo242121.setAttribute('id', 'smo242121');
smo242140v0ar.push(smo242121);
const smo242122 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo242122.setAttribute('id', 'smo242122');
smo242140v0ar.push(smo242122);
const smo242123 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo242123.setAttribute('id', 'smo242123');
smo242140v0ar.push(smo242123);
const smo242124 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo242124.setAttribute('id', 'smo242124');
smo242140v0ar.push(smo242124);
smo242140v0.addTickables(smo242140v0ar)
fmtsmo24214044.joinVoices([smo242140v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
const dirsmo248921 = smo240198.getStemDirection();
smo240198.setStemDirection(dirsmo248921);
smo240199.setStemDirection(dirsmo248921);
const smo248921 = new VF.Beam([smo240198,smo240199]);
 
// formatting measures in staff group smo242235
fmtsmo23926044.format([smo239260v0,smo240217v0,smo241165v0,smo242140v0], 121);
const stavesmo239260 = new VF.Stave(736, 1040, 135);
stavesmo239260.setAttribute('id', 'stavesmo239260');
stavesmo239260.setBegBarType(VF.Barline.type.NONE);
stavesmo239260.setContext(context);
stavesmo239260.draw();
smo239260v0.draw(context, stavesmo239260);
const stavesmo240217 = new VF.Stave(736, 1165, 135);
stavesmo240217.setAttribute('id', 'stavesmo240217');
stavesmo240217.setBegBarType(VF.Barline.type.NONE);
stavesmo240217.setContext(context);
stavesmo240217.draw();
smo240217v0.draw(context, stavesmo240217);
smo248921.setContext(context);
smo248921.draw();
const stavesmo241165 = new VF.Stave(736, 1253, 135);
stavesmo241165.setAttribute('id', 'stavesmo241165');
stavesmo241165.setBegBarType(VF.Barline.type.NONE);
stavesmo241165.setContext(context);
stavesmo241165.draw();
smo241165v0.draw(context, stavesmo241165);
const stavesmo242140 = new VF.Stave(736, 1366, 135);
stavesmo242140.setAttribute('id', 'stavesmo242140');
stavesmo242140.setBegBarType(VF.Barline.type.NONE);
stavesmo242140.setContext(context);
stavesmo242140.draw();
smo242140v0.draw(context, stavesmo242140);
const fmtsmo23927745 = new VF.Formatter();
//
// voices and notes for stave 0 45
const smo239277v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239277v0ar = [];
const smo239261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239261.setAttribute('id', 'smo239261');
smo239277v0ar.push(smo239261);
smo239277v0.addTickables(smo239277v0ar)
fmtsmo23927745.joinVoices([smo239277v0]);
const fmtsmo24023745 = new VF.Formatter();
//
// voices and notes for stave 1 45
const smo240237v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240237v0ar = [];
const smo240218 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo240218.setAttribute('id', 'smo240218');
smo240237v0ar.push(smo240218);
const smo240219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo240219.setAttribute('id', 'smo240219');
smo240237v0ar.push(smo240219);
const smo240220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo240220.setAttribute('id', 'smo240220');
smo240237v0ar.push(smo240220);
const smo240221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo240221.setAttribute('id', 'smo240221');
smo240237v0ar.push(smo240221);
smo240237v0.addTickables(smo240237v0ar)
fmtsmo24023745.joinVoices([smo240237v0]);
const fmtsmo24118545 = new VF.Formatter();
//
// voices and notes for stave 2 45
const smo241185v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241185v0ar = [];
const smo241166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241166.setAttribute('id', 'smo241166');
smo241185v0ar.push(smo241166);
const smo241167 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241167.setAttribute('id', 'smo241167');
smo241185v0ar.push(smo241167);
const smo241168 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241168.setAttribute('id', 'smo241168');
smo241185v0ar.push(smo241168);
const smo241169 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241169.setAttribute('id', 'smo241169');
smo241185v0ar.push(smo241169);
smo241185v0.addTickables(smo241185v0ar)
fmtsmo24118545.joinVoices([smo241185v0]);
const fmtsmo24216045 = new VF.Formatter();
//
// voices and notes for stave 3 45
const smo242160v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242160v0ar = [];
const smo242141 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242141.setAttribute('id', 'smo242141');
smo242160v0ar.push(smo242141);
const smo242142 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242142.setAttribute('id', 'smo242142');
smo242160v0ar.push(smo242142);
const smo242143 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242143.setAttribute('id', 'smo242143');
smo242160v0ar.push(smo242143);
const smo242144 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242144.setAttribute('id', 'smo242144');
smo242160v0ar.push(smo242144);
smo242160v0.addTickables(smo242160v0ar)
fmtsmo24216045.joinVoices([smo242160v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
const dirsmo248930 = smo240218.getStemDirection();
smo240218.setStemDirection(dirsmo248930);
smo240219.setStemDirection(dirsmo248930);
const smo248930 = new VF.Beam([smo240218,smo240219]);
 
// formatting measures in staff group smo242235
fmtsmo23927745.format([smo239277v0,smo240237v0,smo241185v0,smo242160v0], 121);
const stavesmo239277 = new VF.Stave(871, 1040, 135);
stavesmo239277.setAttribute('id', 'stavesmo239277');
stavesmo239277.setBegBarType(VF.Barline.type.NONE);
stavesmo239277.setContext(context);
stavesmo239277.draw();
smo239277v0.draw(context, stavesmo239277);
const stavesmo240237 = new VF.Stave(871, 1165, 135);
stavesmo240237.setAttribute('id', 'stavesmo240237');
stavesmo240237.setBegBarType(VF.Barline.type.NONE);
stavesmo240237.setContext(context);
stavesmo240237.draw();
smo240237v0.draw(context, stavesmo240237);
smo248930.setContext(context);
smo248930.draw();
const stavesmo241185 = new VF.Stave(871, 1253, 135);
stavesmo241185.setAttribute('id', 'stavesmo241185');
stavesmo241185.setBegBarType(VF.Barline.type.NONE);
stavesmo241185.setContext(context);
stavesmo241185.draw();
smo241185v0.draw(context, stavesmo241185);
const stavesmo242160 = new VF.Stave(871, 1366, 135);
stavesmo242160.setAttribute('id', 'stavesmo242160');
stavesmo242160.setBegBarType(VF.Barline.type.NONE);
stavesmo242160.setContext(context);
stavesmo242160.draw();
smo242160v0.draw(context, stavesmo242160);
const fmtsmo23929446 = new VF.Formatter();
//
// voices and notes for stave 0 46
const smo239294v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239294v0ar = [];
const smo239278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239278.setAttribute('id', 'smo239278');
smo239294v0ar.push(smo239278);
smo239294v0.addTickables(smo239294v0ar)
fmtsmo23929446.joinVoices([smo239294v0]);
const fmtsmo24025946 = new VF.Formatter();
//
// voices and notes for stave 1 46
const smo240259v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240259v0ar = [];
const smo240238 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo240238.setAttribute('id', 'smo240238');
smo240259v0ar.push(smo240238);
const smo240239 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo240239.setAttribute('id', 'smo240239');
smo240259v0ar.push(smo240239);
const smo240240 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo240240.setAttribute('id', 'smo240240');
smo240259v0ar.push(smo240240);
const smo240241 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo240241.setAttribute('id', 'smo240241');
smo240259v0ar.push(smo240241);
const smo240242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo240242.setAttribute('id', 'smo240242');
smo240259v0ar.push(smo240242);
const smo240243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo240243.setAttribute('id', 'smo240243');
smo240259v0ar.push(smo240243);
smo240259v0.addTickables(smo240259v0ar)
fmtsmo24025946.joinVoices([smo240259v0]);
const fmtsmo24120546 = new VF.Formatter();
//
// voices and notes for stave 2 46
const smo241205v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241205v0ar = [];
const smo241186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241186.setAttribute('id', 'smo241186');
smo241205v0ar.push(smo241186);
const smo241187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241187.setAttribute('id', 'smo241187');
smo241205v0ar.push(smo241187);
const smo241188 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo241188.setAttribute('id', 'smo241188');
smo241205v0ar.push(smo241188);
const smo241189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo241189.setAttribute('id', 'smo241189');
smo241205v0ar.push(smo241189);
smo241205v0.addTickables(smo241205v0ar)
fmtsmo24120546.joinVoices([smo241205v0]);
const fmtsmo24218046 = new VF.Formatter();
//
// voices and notes for stave 3 46
const smo242180v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242180v0ar = [];
const smo242161 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo242161.setAttribute('id', 'smo242161');
smo242180v0ar.push(smo242161);
const smo242162 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo242162.setAttribute('id', 'smo242162');
smo242180v0ar.push(smo242162);
const smo242163 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo242163.setAttribute('id', 'smo242163');
smo242180v0ar.push(smo242163);
const smo242164 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo242164.setAttribute('id', 'smo242164');
smo242180v0ar.push(smo242164);
smo242180v0.addTickables(smo242180v0ar)
fmtsmo24218046.joinVoices([smo242180v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
const dirsmo248939 = smo240238.getStemDirection();
smo240238.setStemDirection(dirsmo248939);
smo240239.setStemDirection(dirsmo248939);
const smo248939 = new VF.Beam([smo240238,smo240239]);
const dirsmo248940 = smo240241.getStemDirection();
smo240241.setStemDirection(dirsmo248940);
smo240242.setStemDirection(dirsmo248940);
const smo248940 = new VF.Beam([smo240241,smo240242]);
 
// formatting measures in staff group smo242235
fmtsmo23929446.format([smo239294v0,smo240259v0,smo241205v0,smo242180v0], 147);
const stavesmo239294 = new VF.Stave(1006, 1040, 161);
stavesmo239294.setAttribute('id', 'stavesmo239294');
stavesmo239294.setBegBarType(VF.Barline.type.NONE);
stavesmo239294.setContext(context);
stavesmo239294.draw();
smo239294v0.draw(context, stavesmo239294);
const stavesmo240259 = new VF.Stave(1006, 1165, 161);
stavesmo240259.setAttribute('id', 'stavesmo240259');
stavesmo240259.setBegBarType(VF.Barline.type.NONE);
stavesmo240259.setContext(context);
stavesmo240259.draw();
smo240259v0.draw(context, stavesmo240259);
smo248939.setContext(context);
smo248939.draw();
smo248940.setContext(context);
smo248940.draw();
const stavesmo241205 = new VF.Stave(1006, 1253, 161);
stavesmo241205.setAttribute('id', 'stavesmo241205');
stavesmo241205.setBegBarType(VF.Barline.type.NONE);
stavesmo241205.setContext(context);
stavesmo241205.draw();
smo241205v0.draw(context, stavesmo241205);
const stavesmo242180 = new VF.Stave(1006, 1366, 161);
stavesmo242180.setAttribute('id', 'stavesmo242180');
stavesmo242180.setBegBarType(VF.Barline.type.NONE);
stavesmo242180.setContext(context);
stavesmo242180.draw();
smo242180v0.draw(context, stavesmo242180);
const fmtsmo23931147 = new VF.Formatter();
//
// voices and notes for stave 0 47
const smo239311v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239311v0ar = [];
const smo239295 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239295.setAttribute('id', 'smo239295');
smo239311v0ar.push(smo239295);
smo239311v0.addTickables(smo239311v0ar)
fmtsmo23931147.joinVoices([smo239311v0]);
const fmtsmo24027947 = new VF.Formatter();
//
// voices and notes for stave 1 47
const smo240279v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240279v0ar = [];
const smo240260 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo240260.setAttribute('id', 'smo240260');
smo240279v0ar.push(smo240260);
const smo240261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/6/n"]}'))
smo240261.setAttribute('id', 'smo240261');
const smo240262 = new VF.Ornament('scoop');
smo240261.addModifier(smo240262, 0);
smo240279v0ar.push(smo240261);
const smo240263 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240263.setAttribute('id', 'smo240263');
smo240279v0ar.push(smo240263);
smo240279v0.addTickables(smo240279v0ar)
fmtsmo24027947.joinVoices([smo240279v0]);
const fmtsmo24122547 = new VF.Formatter();
//
// voices and notes for stave 2 47
const smo241225v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241225v0ar = [];
const smo241206 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo241206.setAttribute('id', 'smo241206');
smo241225v0ar.push(smo241206);
const smo241207 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo241207.setAttribute('id', 'smo241207');
const smo241208 = new VF.Ornament('scoop');
smo241207.addModifier(smo241208, 0);
smo241225v0ar.push(smo241207);
const smo241209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241209.setAttribute('id', 'smo241209');
smo241225v0ar.push(smo241209);
smo241225v0.addTickables(smo241225v0ar)
fmtsmo24122547.joinVoices([smo241225v0]);
const fmtsmo24219947 = new VF.Formatter();
//
// voices and notes for stave 3 47
const smo242199v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242199v0ar = [];
const smo242181 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242181.setAttribute('id', 'smo242181');
smo242199v0ar.push(smo242181);
const smo242182 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo242182.setAttribute('id', 'smo242182');
smo242199v0ar.push(smo242182);
const smo242183 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242183.setAttribute('id', 'smo242183');
smo242199v0ar.push(smo242183);
smo242199v0.addTickables(smo242199v0ar)
fmtsmo24219947.joinVoices([smo242199v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
 
// formatting measures in staff group smo242235
fmtsmo23931147.format([smo239311v0,smo240279v0,smo241225v0,smo242199v0], 74);
const stavesmo239311 = new VF.Stave(1167, 1040, 92);
stavesmo239311.setAttribute('id', 'stavesmo239311');
stavesmo239311.setBegBarType(VF.Barline.type.NONE);
stavesmo239311.setEndBarType(5);
stavesmo239311.setContext(context);
stavesmo239311.draw();
smo239311v0.draw(context, stavesmo239311);
const stavesmo240279 = new VF.Stave(1167, 1165, 92);
stavesmo240279.setAttribute('id', 'stavesmo240279');
stavesmo240279.setBegBarType(VF.Barline.type.NONE);
stavesmo240279.setEndBarType(5);
stavesmo240279.setContext(context);
stavesmo240279.draw();
smo240279v0.draw(context, stavesmo240279);
const stavesmo241225 = new VF.Stave(1167, 1253, 92);
stavesmo241225.setAttribute('id', 'stavesmo241225');
stavesmo241225.setBegBarType(VF.Barline.type.NONE);
stavesmo241225.setEndBarType(5);
stavesmo241225.setContext(context);
stavesmo241225.draw();
smo241225v0.draw(context, stavesmo241225);
const stavesmo242199 = new VF.Stave(1167, 1366, 92);
stavesmo242199.setAttribute('id', 'stavesmo242199');
stavesmo242199.setBegBarType(VF.Barline.type.NONE);
stavesmo242199.setEndBarType(5);
stavesmo242199.setContext(context);
stavesmo242199.draw();
smo242199v0.draw(context, stavesmo242199);
// modifier from 0-28-0-0 to 0-29-0-2
const smo249751 = new VF.TextBracket({ start: smo238891, stop: smo238917, text: 'accelerando', position: 1 });
smo249751.setLine(1).setContext(context).draw();
// modifier from 2-26-0-0 to 2-27-0-0
const smo249752 = new VF.StaveTie({ first_note: smo240819, last_note: smo240836, 
          firstNote: smo240819, lastNote: smo240836, first_indices: [0], last_indices: [0]});
smo249752.setContext(context).draw();
// modifier from 2-32-0-0 to 2-33-0-0
const smo249753 = new VF.StaveTie({ first_note: smo240925, last_note: smo240942, 
          firstNote: smo240925, lastNote: smo240942, first_indices: [0], last_indices: [0]});
smo249753.setContext(context).draw();
// modifier from 2-33-0-0 to 2-34-0-0
const smo249754 = new VF.StaveTie({ first_note: smo240942, last_note: smo240959, 
          firstNote: smo240942, lastNote: smo240959, first_indices: [0], last_indices: [0]});
smo249754.setContext(context).draw();
// modifier from 2-35-0-0 to 2-36-0-0
const smo249755 = new VF.StaveTie({ first_note: smo240976, last_note: smo240993, 
          firstNote: smo240976, lastNote: smo240993, first_indices: [0], last_indices: [0]});
smo249755.setContext(context).draw();
// modifier from 3-31-0-3 to 3-31-0-4
const smo249756 = new VF.StaveTie({ first_note: smo241865, last_note: smo241866, 
          firstNote: smo241865, lastNote: smo241866, first_indices: [0], last_indices: [0]});
smo249756.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo238844').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo238846').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo238848').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo238850').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo238853').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo238855').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo238873').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo238892').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo238894').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo238914').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo238916').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo238936').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo238938').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo238940').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo238942').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo238944').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo238946').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo238965').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo238987').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo238989').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo238991').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo238993').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo239011').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo239013').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo239015').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo239037').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo239039').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo239041').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo239043').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo239061').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo239063').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo239065').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo239083').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo239085').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo239087').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo239089').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo239091').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo239109').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo239111').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo239113').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo239131').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo239134').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo239154').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo239156').setAttributeNS('', 'transform', 'translate(0 20)');
}
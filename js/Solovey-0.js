// @@ Solovey p 1/1 ((Op. 1)) by Folks
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
const fmtsmo2480610 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo248061v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248061v0ar = [];
const smo248045 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo248045.setAttribute('id', 'smo248045');
smo248061v0ar.push(smo248045);
smo248061v0.addTickables(smo248061v0ar)
fmtsmo2480610.joinVoices([smo248061v0]);
const fmtsmo2490830 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo249083v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249083v0ar = [];
const smo249066 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo249066.setAttribute('id', 'smo249066');
smo249083v0ar.push(smo249066);
const smo249067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo249067.setAttribute('id', 'smo249067');
smo249083v0ar.push(smo249067);
smo249083v0.addTickables(smo249083v0ar)
fmtsmo2490830.joinVoices([smo249083v0]);
const fmtsmo2500810 = new VF.Formatter();
//
// voices and notes for stave 2 0
const smo250081v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250081v0ar = [];
const smo250064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo250064.setAttribute('id', 'smo250064');
smo250081v0ar.push(smo250064);
const smo250065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo250065.setAttribute('id', 'smo250065');
smo250081v0ar.push(smo250065);
smo250081v0.addTickables(smo250081v0ar)
fmtsmo2500810.joinVoices([smo250081v0]);
const fmtsmo2510350 = new VF.Formatter();
//
// voices and notes for stave 3 0
const smo251035v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251035v0ar = [];
const smo251016 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251016.setAttribute('id', 'smo251016');
smo251035v0ar.push(smo251016);
const smo251017 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251017.setAttribute('id', 'smo251017');
smo251035v0ar.push(smo251017);
const smo251018 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251018.setAttribute('id', 'smo251018');
smo251035v0ar.push(smo251018);
const smo251019 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo251019.setAttribute('id', 'smo251019');
smo251035v0ar.push(smo251019);
smo251035v0.addTickables(smo251035v0ar)
fmtsmo2510350.joinVoices([smo251035v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
 
// formatting measures in staff group smo251978
fmtsmo2480610.format([smo248061v0,smo249083v0,smo250081v0,smo251035v0], 85);
const stavesmo248061 = new VF.Stave(55, 219, 303);
stavesmo248061.setAttribute('id', 'stavesmo248061');
stavesmo248061.setBegBarType(1);
stavesmo248061.setTempo(JSON.parse('{"duration":"2","dots":0,"bpm":72}'), -1 * 0);
stavesmo248061.addClef('treble');
stavesmo248061.addTimeSignature('4/4');
const keysmo248061 = new VF.KeySignature('F');
keysmo248061.addToStave(stavesmo248061);
stavesmo248061.setContext(context);
stavesmo248061.draw();
smo248061v0.draw(context, stavesmo248061);
const stavesmo249083 = new VF.Stave(55, 312, 303);
stavesmo249083.setAttribute('id', 'stavesmo249083');
stavesmo249083.setBegBarType(1);
stavesmo249083.addClef('treble');
stavesmo249083.addTimeSignature('4/4');
const keysmo249083 = new VF.KeySignature('F');
keysmo249083.addToStave(stavesmo249083);
stavesmo249083.setContext(context);
stavesmo249083.draw();
smo249083v0.draw(context, stavesmo249083);
const stavesmo250081 = new VF.Stave(55, 391, 303);
stavesmo250081.setAttribute('id', 'stavesmo250081');
stavesmo250081.setBegBarType(1);
stavesmo250081.addClef('treble');
stavesmo250081.addTimeSignature('4/4');
const keysmo250081 = new VF.KeySignature('F');
keysmo250081.addToStave(stavesmo250081);
stavesmo250081.setContext(context);
stavesmo250081.draw();
smo250081v0.draw(context, stavesmo250081);
const stavesmo251035 = new VF.Stave(55, 468, 303);
stavesmo251035.setAttribute('id', 'stavesmo251035');
stavesmo251035.setBegBarType(1);
stavesmo251035.addClef('bass');
stavesmo251035.addTimeSignature('4/4');
const keysmo251035 = new VF.KeySignature('F');
keysmo251035.addToStave(stavesmo251035);
stavesmo251035.setContext(context);
stavesmo251035.draw();
smo251035v0.draw(context, stavesmo251035);
const leftsmo251978stavesmo2480613 = new VF.StaveConnector(stavesmo248061, stavesmo251035).setType(1);
leftsmo251978stavesmo2480613.setContext(context).draw();
const fmtsmo2480781 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo248078v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248078v0ar = [];
const smo248062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo248062.setAttribute('id', 'smo248062');
smo248078v0ar.push(smo248062);
smo248078v0.addTickables(smo248078v0ar)
fmtsmo2480781.joinVoices([smo248078v0]);
const fmtsmo2491021 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo249102v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249102v0ar = [];
const smo249084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo249084.setAttribute('id', 'smo249084');
smo249102v0ar.push(smo249084);
const smo249085 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo249085.setAttribute('id', 'smo249085');
smo249102v0ar.push(smo249085);
const smo249086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo249086.setAttribute('id', 'smo249086');
smo249102v0ar.push(smo249086);
smo249102v0.addTickables(smo249102v0ar)
fmtsmo2491021.joinVoices([smo249102v0]);
const fmtsmo2500991 = new VF.Formatter();
//
// voices and notes for stave 2 1
const smo250099v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250099v0ar = [];
const smo250082 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo250082.setAttribute('id', 'smo250082');
smo250099v0ar.push(smo250082);
const smo250083 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo250083.setAttribute('id', 'smo250083');
smo250099v0ar.push(smo250083);
smo250099v0.addTickables(smo250099v0ar)
fmtsmo2500991.joinVoices([smo250099v0]);
const fmtsmo2510551 = new VF.Formatter();
//
// voices and notes for stave 3 1
const smo251055v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251055v0ar = [];
const smo251036 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251036.setAttribute('id', 'smo251036');
smo251055v0ar.push(smo251036);
const smo251037 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo251037.setAttribute('id', 'smo251037');
smo251055v0ar.push(smo251037);
const smo251038 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251038.setAttribute('id', 'smo251038');
smo251055v0ar.push(smo251038);
const smo251039 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo251039.setAttribute('id', 'smo251039');
smo251055v0ar.push(smo251039);
smo251055v0.addTickables(smo251055v0ar)
fmtsmo2510551.joinVoices([smo251055v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
 
// formatting measures in staff group smo251978
fmtsmo2480781.format([smo248078v0,smo249102v0,smo250099v0,smo251055v0], 106);
const stavesmo248078 = new VF.Stave(358, 219, 120);
stavesmo248078.setAttribute('id', 'stavesmo248078');
stavesmo248078.setBegBarType(VF.Barline.type.NONE);
stavesmo248078.setContext(context);
stavesmo248078.draw();
smo248078v0.draw(context, stavesmo248078);
const stavesmo249102 = new VF.Stave(358, 312, 120);
stavesmo249102.setAttribute('id', 'stavesmo249102');
stavesmo249102.setBegBarType(VF.Barline.type.NONE);
stavesmo249102.setContext(context);
stavesmo249102.draw();
smo249102v0.draw(context, stavesmo249102);
const stavesmo250099 = new VF.Stave(358, 391, 120);
stavesmo250099.setAttribute('id', 'stavesmo250099');
stavesmo250099.setBegBarType(VF.Barline.type.NONE);
stavesmo250099.setContext(context);
stavesmo250099.draw();
smo250099v0.draw(context, stavesmo250099);
const stavesmo251055 = new VF.Stave(358, 468, 120);
stavesmo251055.setAttribute('id', 'stavesmo251055');
stavesmo251055.setBegBarType(VF.Barline.type.NONE);
stavesmo251055.setContext(context);
stavesmo251055.draw();
smo251055v0.draw(context, stavesmo251055);
const fmtsmo2480952 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo248095v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248095v0ar = [];
const smo248079 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo248079.setAttribute('id', 'smo248079');
smo248095v0ar.push(smo248079);
smo248095v0.addTickables(smo248095v0ar)
fmtsmo2480952.joinVoices([smo248095v0]);
const fmtsmo2491212 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo249121v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249121v0ar = [];
const smo249103 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo249103.setAttribute('id', 'smo249103');
smo249121v0ar.push(smo249103);
const smo249104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo249104.setAttribute('id', 'smo249104');
const smo2491040acc = new VF.Accidental('n');
smo249104.addModifier(smo2491040acc, 0);
smo249121v0ar.push(smo249104);
const smo249105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
smo249105.setAttribute('id', 'smo249105');
const smo2491050acc = new VF.Accidental('#');
smo249105.addModifier(smo2491050acc, 0);
smo249121v0ar.push(smo249105);
smo249121v0.addTickables(smo249121v0ar)
fmtsmo2491212.joinVoices([smo249121v0]);
const fmtsmo2501172 = new VF.Formatter();
//
// voices and notes for stave 2 2
const smo250117v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250117v0ar = [];
const smo250100 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo250100.setAttribute('id', 'smo250100');
smo250117v0ar.push(smo250100);
const smo250101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo250101.setAttribute('id', 'smo250101');
smo250117v0ar.push(smo250101);
smo250117v0.addTickables(smo250117v0ar)
fmtsmo2501172.joinVoices([smo250117v0]);
const fmtsmo2510752 = new VF.Formatter();
//
// voices and notes for stave 3 2
const smo251075v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251075v0ar = [];
const smo251056 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251056.setAttribute('id', 'smo251056');
smo251075v0ar.push(smo251056);
const smo251057 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo251057.setAttribute('id', 'smo251057');
smo251075v0ar.push(smo251057);
const smo251058 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251058.setAttribute('id', 'smo251058');
smo251075v0ar.push(smo251058);
const smo251059 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo251059.setAttribute('id', 'smo251059');
smo251075v0ar.push(smo251059);
smo251075v0.addTickables(smo251075v0ar)
fmtsmo2510752.joinVoices([smo251075v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
 
// formatting measures in staff group smo251978
fmtsmo2480952.format([smo248095v0,smo249121v0,smo250117v0,smo251075v0], 127);
const stavesmo248095 = new VF.Stave(478, 219, 141);
stavesmo248095.setAttribute('id', 'stavesmo248095');
stavesmo248095.setBegBarType(VF.Barline.type.NONE);
stavesmo248095.setContext(context);
stavesmo248095.draw();
smo248095v0.draw(context, stavesmo248095);
const stavesmo249121 = new VF.Stave(478, 312, 141);
stavesmo249121.setAttribute('id', 'stavesmo249121');
stavesmo249121.setBegBarType(VF.Barline.type.NONE);
stavesmo249121.setContext(context);
stavesmo249121.draw();
smo249121v0.draw(context, stavesmo249121);
const stavesmo250117 = new VF.Stave(478, 391, 141);
stavesmo250117.setAttribute('id', 'stavesmo250117');
stavesmo250117.setBegBarType(VF.Barline.type.NONE);
stavesmo250117.setContext(context);
stavesmo250117.draw();
smo250117v0.draw(context, stavesmo250117);
const stavesmo251075 = new VF.Stave(478, 468, 141);
stavesmo251075.setAttribute('id', 'stavesmo251075');
stavesmo251075.setBegBarType(VF.Barline.type.NONE);
stavesmo251075.setContext(context);
stavesmo251075.draw();
smo251075v0.draw(context, stavesmo251075);
const fmtsmo2481123 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo248112v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248112v0ar = [];
const smo248096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo248096.setAttribute('id', 'smo248096');
smo248112v0ar.push(smo248096);
smo248112v0.addTickables(smo248112v0ar)
fmtsmo2481123.joinVoices([smo248112v0]);
const fmtsmo2491393 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo249139v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249139v0ar = [];
const smo249122 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo249122.setAttribute('id', 'smo249122');
smo249139v0ar.push(smo249122);
const smo249123 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo249123.setAttribute('id', 'smo249123');
smo249139v0ar.push(smo249123);
smo249139v0.addTickables(smo249139v0ar)
fmtsmo2491393.joinVoices([smo249139v0]);
const fmtsmo2501353 = new VF.Formatter();
//
// voices and notes for stave 2 3
const smo250135v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250135v0ar = [];
const smo250118 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo250118.setAttribute('id', 'smo250118');
smo250118.addModifier(new VF.Dot(), 0);
smo250135v0ar.push(smo250118);
const smo250119 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250119.setAttribute('id', 'smo250119');
smo250135v0ar.push(smo250119);
smo250135v0.addTickables(smo250135v0ar)
fmtsmo2501353.joinVoices([smo250135v0]);
const fmtsmo2510953 = new VF.Formatter();
//
// voices and notes for stave 3 3
const smo251095v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251095v0ar = [];
const smo251076 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251076.setAttribute('id', 'smo251076');
smo251095v0ar.push(smo251076);
const smo251077 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo251077.setAttribute('id', 'smo251077');
smo251095v0ar.push(smo251077);
const smo251078 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251078.setAttribute('id', 'smo251078');
smo251095v0ar.push(smo251078);
const smo251079 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo251079.setAttribute('id', 'smo251079');
smo251095v0ar.push(smo251079);
smo251095v0.addTickables(smo251095v0ar)
fmtsmo2510953.joinVoices([smo251095v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
 
// formatting measures in staff group smo251978
fmtsmo2481123.format([smo248112v0,smo249139v0,smo250135v0,smo251095v0], 121);
const stavesmo248112 = new VF.Stave(619, 219, 135);
stavesmo248112.setAttribute('id', 'stavesmo248112');
stavesmo248112.setBegBarType(VF.Barline.type.NONE);
stavesmo248112.setContext(context);
stavesmo248112.draw();
smo248112v0.draw(context, stavesmo248112);
const stavesmo249139 = new VF.Stave(619, 312, 135);
stavesmo249139.setAttribute('id', 'stavesmo249139');
stavesmo249139.setBegBarType(VF.Barline.type.NONE);
stavesmo249139.setContext(context);
stavesmo249139.draw();
smo249139v0.draw(context, stavesmo249139);
const stavesmo250135 = new VF.Stave(619, 391, 135);
stavesmo250135.setAttribute('id', 'stavesmo250135');
stavesmo250135.setBegBarType(VF.Barline.type.NONE);
stavesmo250135.setContext(context);
stavesmo250135.draw();
smo250135v0.draw(context, stavesmo250135);
const stavesmo251095 = new VF.Stave(619, 468, 135);
stavesmo251095.setAttribute('id', 'stavesmo251095');
stavesmo251095.setBegBarType(VF.Barline.type.NONE);
stavesmo251095.setContext(context);
stavesmo251095.draw();
smo251095v0.draw(context, stavesmo251095);
const fmtsmo2481294 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo248129v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248129v0ar = [];
const smo248113 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo248113.setAttribute('id', 'smo248113');
smo248129v0ar.push(smo248113);
smo248129v0.addTickables(smo248129v0ar)
fmtsmo2481294.joinVoices([smo248129v0]);
const fmtsmo2491574 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo249157v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249157v0ar = [];
const smo249140 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo249140.setAttribute('id', 'smo249140');
smo249157v0ar.push(smo249140);
const smo249141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo249141.setAttribute('id', 'smo249141');
smo249157v0ar.push(smo249141);
smo249157v0.addTickables(smo249157v0ar)
fmtsmo2491574.joinVoices([smo249157v0]);
const fmtsmo2501534 = new VF.Formatter();
//
// voices and notes for stave 2 4
const smo250153v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250153v0ar = [];
const smo250136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo250136.setAttribute('id', 'smo250136');
smo250153v0ar.push(smo250136);
const smo250137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo250137.setAttribute('id', 'smo250137');
smo250153v0ar.push(smo250137);
smo250153v0.addTickables(smo250153v0ar)
fmtsmo2501534.joinVoices([smo250153v0]);
const fmtsmo2511154 = new VF.Formatter();
//
// voices and notes for stave 3 4
const smo251115v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251115v0ar = [];
const smo251096 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251096.setAttribute('id', 'smo251096');
smo251115v0ar.push(smo251096);
const smo251097 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251097.setAttribute('id', 'smo251097');
smo251115v0ar.push(smo251097);
const smo251098 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251098.setAttribute('id', 'smo251098');
smo251115v0ar.push(smo251098);
const smo251099 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/3/n"]}'))
smo251099.setAttribute('id', 'smo251099');
const smo2510990acc = new VF.Accidental('#');
smo251099.addModifier(smo2510990acc, 0);
smo251115v0ar.push(smo251099);
smo251115v0.addTickables(smo251115v0ar)
fmtsmo2511154.joinVoices([smo251115v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
 
// formatting measures in staff group smo251978
fmtsmo2481294.format([smo248129v0,smo249157v0,smo250153v0,smo251115v0], 118);
const stavesmo248129 = new VF.Stave(754, 219, 132);
stavesmo248129.setAttribute('id', 'stavesmo248129');
stavesmo248129.setBegBarType(VF.Barline.type.NONE);
stavesmo248129.setContext(context);
stavesmo248129.draw();
smo248129v0.draw(context, stavesmo248129);
const stavesmo249157 = new VF.Stave(754, 312, 132);
stavesmo249157.setAttribute('id', 'stavesmo249157');
stavesmo249157.setBegBarType(VF.Barline.type.NONE);
stavesmo249157.setContext(context);
stavesmo249157.draw();
smo249157v0.draw(context, stavesmo249157);
const stavesmo250153 = new VF.Stave(754, 391, 132);
stavesmo250153.setAttribute('id', 'stavesmo250153');
stavesmo250153.setBegBarType(VF.Barline.type.NONE);
stavesmo250153.setContext(context);
stavesmo250153.draw();
smo250153v0.draw(context, stavesmo250153);
const stavesmo251115 = new VF.Stave(754, 468, 132);
stavesmo251115.setAttribute('id', 'stavesmo251115');
stavesmo251115.setBegBarType(VF.Barline.type.NONE);
stavesmo251115.setContext(context);
stavesmo251115.draw();
smo251115v0.draw(context, stavesmo251115);
const fmtsmo2481465 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo248146v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248146v0ar = [];
const smo248130 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo248130.setAttribute('id', 'smo248130');
smo248146v0ar.push(smo248130);
smo248146v0.addTickables(smo248146v0ar)
fmtsmo2481465.joinVoices([smo248146v0]);
const fmtsmo2491765 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo249176v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249176v0ar = [];
const smo249158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo249158.setAttribute('id', 'smo249158');
smo249176v0ar.push(smo249158);
const smo249159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo249159.setAttribute('id', 'smo249159');
smo249176v0ar.push(smo249159);
const smo249160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo249160.setAttribute('id', 'smo249160');
smo249176v0ar.push(smo249160);
smo249176v0.addTickables(smo249176v0ar)
fmtsmo2491765.joinVoices([smo249176v0]);
const fmtsmo2501725 = new VF.Formatter();
//
// voices and notes for stave 2 5
const smo250172v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250172v0ar = [];
const smo250154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo250154.setAttribute('id', 'smo250154');
smo250172v0ar.push(smo250154);
const smo250155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo250155.setAttribute('id', 'smo250155');
smo250172v0ar.push(smo250155);
const smo250156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo250156.setAttribute('id', 'smo250156');
smo250172v0ar.push(smo250156);
smo250172v0.addTickables(smo250172v0ar)
fmtsmo2501725.joinVoices([smo250172v0]);
const fmtsmo2511355 = new VF.Formatter();
//
// voices and notes for stave 3 5
const smo251135v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251135v0ar = [];
const smo251116 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251116.setAttribute('id', 'smo251116');
smo251135v0ar.push(smo251116);
const smo251117 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251117.setAttribute('id', 'smo251117');
smo251135v0ar.push(smo251117);
const smo251118 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251118.setAttribute('id', 'smo251118');
smo251135v0ar.push(smo251118);
const smo251119 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo251119.setAttribute('id', 'smo251119');
smo251135v0ar.push(smo251119);
smo251135v0.addTickables(smo251135v0ar)
fmtsmo2511355.joinVoices([smo251135v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
 
// formatting measures in staff group smo251978
fmtsmo2481465.format([smo248146v0,smo249176v0,smo250172v0,smo251135v0], 106);
const stavesmo248146 = new VF.Stave(886, 219, 120);
stavesmo248146.setAttribute('id', 'stavesmo248146');
stavesmo248146.setBegBarType(VF.Barline.type.NONE);
stavesmo248146.setContext(context);
stavesmo248146.draw();
smo248146v0.draw(context, stavesmo248146);
const stavesmo249176 = new VF.Stave(886, 312, 120);
stavesmo249176.setAttribute('id', 'stavesmo249176');
stavesmo249176.setBegBarType(VF.Barline.type.NONE);
stavesmo249176.setContext(context);
stavesmo249176.draw();
smo249176v0.draw(context, stavesmo249176);
const stavesmo250172 = new VF.Stave(886, 391, 120);
stavesmo250172.setAttribute('id', 'stavesmo250172');
stavesmo250172.setBegBarType(VF.Barline.type.NONE);
stavesmo250172.setContext(context);
stavesmo250172.draw();
smo250172v0.draw(context, stavesmo250172);
const stavesmo251135 = new VF.Stave(886, 468, 120);
stavesmo251135.setAttribute('id', 'stavesmo251135');
stavesmo251135.setBegBarType(VF.Barline.type.NONE);
stavesmo251135.setContext(context);
stavesmo251135.draw();
smo251135v0.draw(context, stavesmo251135);
const fmtsmo2481636 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo248163v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248163v0ar = [];
const smo248147 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo248147.setAttribute('id', 'smo248147');
smo248163v0ar.push(smo248147);
smo248163v0.addTickables(smo248163v0ar)
fmtsmo2481636.joinVoices([smo248163v0]);
const fmtsmo2491996 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo249199v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249199v0ar = [];
const smo249177 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo249177.setAttribute('id', 'smo249177');
smo249199v0ar.push(smo249177);
const smo249178 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo249178.setAttribute('id', 'smo249178');
smo249199v0ar.push(smo249178);
const smo249179 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo249179.setAttribute('id', 'smo249179');
smo249199v0ar.push(smo249179);
const smo249180 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["c#/4/n"]}'))
smo249180.setAttribute('id', 'smo249180');
const smo2491800acc = new VF.Accidental('#');
smo249180.addModifier(smo2491800acc, 0);
smo249199v0ar.push(smo249180);
const smo249181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo249181.setAttribute('id', 'smo249181');
smo249199v0ar.push(smo249181);
const smo249182 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo249182.setAttribute('id', 'smo249182');
smo249199v0ar.push(smo249182);
const smo249183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo249183.setAttribute('id', 'smo249183');
smo249199v0ar.push(smo249183);
smo249199v0.addTickables(smo249199v0ar)
fmtsmo2491996.joinVoices([smo249199v0]);
const fmtsmo2501926 = new VF.Formatter();
//
// voices and notes for stave 2 6
const smo250192v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250192v0ar = [];
const smo250173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo250173.setAttribute('id', 'smo250173');
smo250192v0ar.push(smo250173);
const smo250174 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo250174.setAttribute('id', 'smo250174');
smo250192v0ar.push(smo250174);
const smo250175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo250175.setAttribute('id', 'smo250175');
smo250192v0ar.push(smo250175);
const smo250176 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo250176.setAttribute('id', 'smo250176');
smo250192v0ar.push(smo250176);
smo250192v0.addTickables(smo250192v0ar)
fmtsmo2501926.joinVoices([smo250192v0]);
const fmtsmo2511556 = new VF.Formatter();
//
// voices and notes for stave 3 6
const smo251155v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251155v0ar = [];
const smo251136 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251136.setAttribute('id', 'smo251136');
smo251155v0ar.push(smo251136);
const smo251137 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo251137.setAttribute('id', 'smo251137');
smo251155v0ar.push(smo251137);
const smo251138 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251138.setAttribute('id', 'smo251138');
smo251155v0ar.push(smo251138);
const smo251139 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo251139.setAttribute('id', 'smo251139');
smo251155v0ar.push(smo251139);
smo251155v0.addTickables(smo251155v0ar)
fmtsmo2511556.joinVoices([smo251155v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
const dirsmo258297 = smo249178.getStemDirection();
smo249178.setStemDirection(dirsmo258297);
smo249179.setStemDirection(dirsmo258297);
smo249180.setStemDirection(dirsmo258297);
smo249181.setStemDirection(dirsmo258297);
const smo258297 = new VF.Beam([smo249178,smo249179,smo249180,smo249181]);
 
// formatting measures in staff group smo251978
fmtsmo2481636.format([smo248163v0,smo249199v0,smo250192v0,smo251155v0], 196);
const stavesmo248163 = new VF.Stave(1006, 219, 210);
stavesmo248163.setAttribute('id', 'stavesmo248163');
stavesmo248163.setBegBarType(VF.Barline.type.NONE);
stavesmo248163.setContext(context);
stavesmo248163.draw();
smo248163v0.draw(context, stavesmo248163);
const stavesmo249199 = new VF.Stave(1006, 312, 210);
stavesmo249199.setAttribute('id', 'stavesmo249199');
stavesmo249199.setBegBarType(VF.Barline.type.NONE);
stavesmo249199.setContext(context);
stavesmo249199.draw();
smo249199v0.draw(context, stavesmo249199);
smo258297.setContext(context);
smo258297.draw();
const stavesmo250192 = new VF.Stave(1006, 391, 210);
stavesmo250192.setAttribute('id', 'stavesmo250192');
stavesmo250192.setBegBarType(VF.Barline.type.NONE);
stavesmo250192.setContext(context);
stavesmo250192.draw();
smo250192v0.draw(context, stavesmo250192);
const stavesmo251155 = new VF.Stave(1006, 468, 210);
stavesmo251155.setAttribute('id', 'stavesmo251155');
stavesmo251155.setBegBarType(VF.Barline.type.NONE);
stavesmo251155.setContext(context);
stavesmo251155.draw();
smo251155v0.draw(context, stavesmo251155);
const fmtsmo2481807 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo248180v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248180v0ar = [];
const smo248164 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo248164.setAttribute('id', 'smo248164');
smo248180v0ar.push(smo248164);
smo248180v0.addTickables(smo248180v0ar)
fmtsmo2481807.joinVoices([smo248180v0]);
const fmtsmo2492207 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo249220v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249220v0ar = [];
const smo249200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo249200.setAttribute('id', 'smo249200');
smo249200.addModifier(new VF.Dot(), 0);
smo249220v0ar.push(smo249200);
const smo249201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo249201.setAttribute('id', 'smo249201');
smo249220v0ar.push(smo249201);
const smo249202 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo249202.setAttribute('id', 'smo249202');
smo249220v0ar.push(smo249202);
const smo249203 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo249203.setAttribute('id', 'smo249203');
smo249220v0ar.push(smo249203);
const smo249204 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249204.setAttribute('id', 'smo249204');
smo249220v0ar.push(smo249204);
smo249220v0.addTickables(smo249220v0ar)
fmtsmo2492207.joinVoices([smo249220v0]);
const fmtsmo2502117 = new VF.Formatter();
//
// voices and notes for stave 2 7
const smo250211v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250211v0ar = [];
const smo250193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo250193.setAttribute('id', 'smo250193');
smo250211v0ar.push(smo250193);
const smo250194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo250194.setAttribute('id', 'smo250194');
smo250211v0ar.push(smo250194);
const smo250195 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250195.setAttribute('id', 'smo250195');
smo250211v0ar.push(smo250195);
smo250211v0.addTickables(smo250211v0ar)
fmtsmo2502117.joinVoices([smo250211v0]);
const fmtsmo2511737 = new VF.Formatter();
//
// voices and notes for stave 3 7
const smo251173v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251173v0ar = [];
const smo251156 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo251156.setAttribute('id', 'smo251156');
smo251173v0ar.push(smo251156);
const smo251157 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo251157.setAttribute('id', 'smo251157');
smo251173v0ar.push(smo251157);
smo251173v0.addTickables(smo251173v0ar)
fmtsmo2511737.joinVoices([smo251173v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
const dirsmo258306 = smo249201.getStemDirection();
smo249201.setStemDirection(dirsmo258306);
smo249202.setStemDirection(dirsmo258306);
const smo258306 = new VF.Beam([smo249201,smo249202]);
 
// formatting measures in staff group smo251978
fmtsmo2481807.format([smo248180v0,smo249220v0,smo250211v0,smo251173v0], 147);
const stavesmo248180 = new VF.Stave(1216, 219, 161);
stavesmo248180.setAttribute('id', 'stavesmo248180');
stavesmo248180.setBegBarType(VF.Barline.type.NONE);
stavesmo248180.setContext(context);
stavesmo248180.draw();
smo248180v0.draw(context, stavesmo248180);
const stavesmo249220 = new VF.Stave(1216, 312, 161);
stavesmo249220.setAttribute('id', 'stavesmo249220');
stavesmo249220.setBegBarType(VF.Barline.type.NONE);
stavesmo249220.setContext(context);
stavesmo249220.draw();
smo249220v0.draw(context, stavesmo249220);
smo258306.setContext(context);
smo258306.draw();
const stavesmo250211 = new VF.Stave(1216, 391, 161);
stavesmo250211.setAttribute('id', 'stavesmo250211');
stavesmo250211.setBegBarType(VF.Barline.type.NONE);
stavesmo250211.setContext(context);
stavesmo250211.draw();
smo250211v0.draw(context, stavesmo250211);
const stavesmo251173 = new VF.Stave(1216, 468, 161);
stavesmo251173.setAttribute('id', 'stavesmo251173');
stavesmo251173.setBegBarType(VF.Barline.type.NONE);
stavesmo251173.setContext(context);
stavesmo251173.draw();
smo251173v0.draw(context, stavesmo251173);
const rightsmo251978stavesmo2481803 = new VF.StaveConnector(stavesmo248180, stavesmo251173).setType(0);
rightsmo251978stavesmo2481803.setContext(context).draw();
const fmtsmo2482008 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo248200v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248200v0ar = [];
const smo248181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo248181.setAttribute('id', 'smo248181');
const smo248182 = new VF.Annotation('Со');
smo248182.setAttribute('id', 'smo248182');
smo248182.setFont('Merriweather', 12.1, 'normal');
smo248182.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248181.addModifier(smo248182);
smo248182.addClass('lyric lyric-0 lyric-hyphen');
smo248200v0ar.push(smo248181);
const smo248183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo248183.setAttribute('id', 'smo248183');
const smo248184 = new VF.Annotation('ло');
smo248184.setAttribute('id', 'smo248184');
smo248184.setFont('Merriweather', 12.1, 'normal');
smo248184.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248183.addModifier(smo248184);
smo248184.addClass('lyric lyric-0');
smo248200v0ar.push(smo248183);
smo248200v0.addTickables(smo248200v0ar)
fmtsmo2482008.joinVoices([smo248200v0]);
const fmtsmo2492408 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo249240v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249240v0ar = [];
const smo249221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249221.setAttribute('id', 'smo249221');
smo249240v0ar.push(smo249221);
const smo249222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo249222.setAttribute('id', 'smo249222');
smo249240v0ar.push(smo249222);
const smo249223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo249223.setAttribute('id', 'smo249223');
smo249240v0ar.push(smo249223);
const smo249224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249224.setAttribute('id', 'smo249224');
smo249240v0ar.push(smo249224);
smo249240v0.addTickables(smo249240v0ar)
fmtsmo2492408.joinVoices([smo249240v0]);
const fmtsmo2502318 = new VF.Formatter();
//
// voices and notes for stave 2 8
const smo250231v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250231v0ar = [];
const smo250212 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250212.setAttribute('id', 'smo250212');
smo250231v0ar.push(smo250212);
const smo250213 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo250213.setAttribute('id', 'smo250213');
smo250231v0ar.push(smo250213);
const smo250214 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo250214.setAttribute('id', 'smo250214');
smo250231v0ar.push(smo250214);
const smo250215 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250215.setAttribute('id', 'smo250215');
smo250231v0ar.push(smo250215);
smo250231v0.addTickables(smo250231v0ar)
fmtsmo2502318.joinVoices([smo250231v0]);
const fmtsmo2511938 = new VF.Formatter();
//
// voices and notes for stave 3 8
const smo251193v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251193v0ar = [];
const smo251174 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251174.setAttribute('id', 'smo251174');
smo251193v0ar.push(smo251174);
const smo251175 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251175.setAttribute('id', 'smo251175');
smo251193v0ar.push(smo251175);
const smo251176 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo251176.setAttribute('id', 'smo251176');
smo251193v0ar.push(smo251176);
const smo251177 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251177.setAttribute('id', 'smo251177');
smo251193v0ar.push(smo251177);
smo251193v0.addTickables(smo251193v0ar)
fmtsmo2511938.joinVoices([smo251193v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
 
// formatting measures in staff group smo251978
fmtsmo2482008.format([smo248200v0,smo249240v0,smo250231v0,smo251193v0], 161);
const stavesmo248200 = new VF.Stave(55, 598, 244);
stavesmo248200.setAttribute('id', 'stavesmo248200');
stavesmo248200.setBegBarType(4);
stavesmo248200.addClef('treble');
const keysmo248200 = new VF.KeySignature('F');
keysmo248200.addToStave(stavesmo248200);
stavesmo248200.setContext(context);
stavesmo248200.draw();
smo248200v0.draw(context, stavesmo248200);
const stavesmo249240 = new VF.Stave(55, 711, 244);
stavesmo249240.setAttribute('id', 'stavesmo249240');
stavesmo249240.setBegBarType(4);
stavesmo249240.addClef('treble');
const keysmo249240 = new VF.KeySignature('F');
keysmo249240.addToStave(stavesmo249240);
stavesmo249240.setContext(context);
stavesmo249240.draw();
smo249240v0.draw(context, stavesmo249240);
const stavesmo250231 = new VF.Stave(55, 794, 244);
stavesmo250231.setAttribute('id', 'stavesmo250231');
stavesmo250231.setBegBarType(4);
stavesmo250231.addClef('treble');
const keysmo250231 = new VF.KeySignature('F');
keysmo250231.addToStave(stavesmo250231);
stavesmo250231.setContext(context);
stavesmo250231.draw();
smo250231v0.draw(context, stavesmo250231);
const stavesmo251193 = new VF.Stave(55, 875, 244);
stavesmo251193.setAttribute('id', 'stavesmo251193');
stavesmo251193.setBegBarType(4);
stavesmo251193.addClef('bass');
const keysmo251193 = new VF.KeySignature('F');
keysmo251193.addToStave(stavesmo251193);
stavesmo251193.setContext(context);
stavesmo251193.draw();
smo251193v0.draw(context, stavesmo251193);
const leftsmo251978stavesmo2482003 = new VF.StaveConnector(stavesmo248200, stavesmo251193).setType(1);
leftsmo251978stavesmo2482003.setContext(context).draw();
const fmtsmo2482229 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo248222v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248222v0ar = [];
const smo248201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo248201.setAttribute('id', 'smo248201');
const smo248202 = new VF.Annotation('вей,');
smo248202.setAttribute('id', 'smo248202');
smo248202.setFont('Merriweather', 12.1, 'normal');
smo248202.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248201.addModifier(smo248202);
smo248202.addClass('lyric lyric-0');
smo248222v0ar.push(smo248201);
const smo248203 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo248203.setAttribute('id', 'smo248203');
const smo248204 = new VF.Annotation('мой');
smo248204.setAttribute('id', 'smo248204');
smo248204.setFont('Merriweather', 12.1, 'normal');
smo248204.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248203.addModifier(smo248204);
smo248204.addClass('lyric lyric-0');
smo248222v0ar.push(smo248203);
const smo248205 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo248205.setAttribute('id', 'smo248205');
const smo248206 = new VF.Annotation('-');
smo248206.setAttribute('id', 'smo248206');
smo248206.setFont('Merriweather', 12.1, 'normal');
smo248206.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248205.addModifier(smo248206);
smo248206.addClass('lyric lyric-0 lyric-hyphen');
smo248222v0ar.push(smo248205);
smo248222v0.addTickables(smo248222v0ar)
fmtsmo2482229.joinVoices([smo248222v0]);
const fmtsmo2492619 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo249261v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249261v0ar = [];
const smo249241 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249241.setAttribute('id', 'smo249241');
smo249261v0ar.push(smo249241);
const smo249242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo249242.setAttribute('id', 'smo249242');
smo249261v0ar.push(smo249242);
const smo249244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249244.setAttribute('id', 'smo249244');
smo249261v0ar.push(smo249244);
const smo249245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo249245.setAttribute('id', 'smo249245');
smo249261v0ar.push(smo249245);
smo249261v0.addTickables(smo249261v0ar)
fmtsmo2492619.joinVoices([smo249261v0]);
const fmtsmo2502519 = new VF.Formatter();
//
// voices and notes for stave 2 9
const smo250251v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250251v0ar = [];
const smo250232 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250232.setAttribute('id', 'smo250232');
smo250251v0ar.push(smo250232);
const smo250233 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo250233.setAttribute('id', 'smo250233');
smo250251v0ar.push(smo250233);
const smo250234 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250234.setAttribute('id', 'smo250234');
smo250251v0ar.push(smo250234);
const smo250235 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo250235.setAttribute('id', 'smo250235');
smo250251v0ar.push(smo250235);
smo250251v0.addTickables(smo250251v0ar)
fmtsmo2502519.joinVoices([smo250251v0]);
const fmtsmo2512139 = new VF.Formatter();
//
// voices and notes for stave 3 9
const smo251213v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251213v0ar = [];
const smo251194 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo251194.setAttribute('id', 'smo251194');
smo251213v0ar.push(smo251194);
const smo251195 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251195.setAttribute('id', 'smo251195');
smo251213v0ar.push(smo251195);
const smo251196 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo251196.setAttribute('id', 'smo251196');
smo251213v0ar.push(smo251196);
const smo251197 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251197.setAttribute('id', 'smo251197');
smo251213v0ar.push(smo251197);
smo251213v0.addTickables(smo251213v0ar)
fmtsmo2512139.joinVoices([smo251213v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
 
// formatting measures in staff group smo251978
fmtsmo2482229.format([smo248222v0,smo249261v0,smo250251v0,smo251213v0], 191);
const stavesmo248222 = new VF.Stave(299, 598, 205);
stavesmo248222.setAttribute('id', 'stavesmo248222');
stavesmo248222.setBegBarType(VF.Barline.type.NONE);
stavesmo248222.setContext(context);
stavesmo248222.draw();
smo248222v0.draw(context, stavesmo248222);
const stavesmo249261 = new VF.Stave(299, 711, 205);
stavesmo249261.setAttribute('id', 'stavesmo249261');
stavesmo249261.setBegBarType(VF.Barline.type.NONE);
stavesmo249261.setContext(context);
stavesmo249261.draw();
smo249261v0.draw(context, stavesmo249261);
const stavesmo250251 = new VF.Stave(299, 794, 205);
stavesmo250251.setAttribute('id', 'stavesmo250251');
stavesmo250251.setBegBarType(VF.Barline.type.NONE);
stavesmo250251.setContext(context);
stavesmo250251.draw();
smo250251v0.draw(context, stavesmo250251);
const stavesmo251213 = new VF.Stave(299, 875, 205);
stavesmo251213.setAttribute('id', 'stavesmo251213');
stavesmo251213.setBegBarType(VF.Barline.type.NONE);
stavesmo251213.setContext(context);
stavesmo251213.draw();
smo251213v0.draw(context, stavesmo251213);
const fmtsmo24824410 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo248244v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248244v0ar = [];
const smo248223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo248223.setAttribute('id', 'smo248223');
const smo248224 = new VF.Annotation('Со');
smo248224.setAttribute('id', 'smo248224');
smo248224.setFont('Merriweather', 12.1, 'normal');
smo248224.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248223.addModifier(smo248224);
smo248224.addClass('lyric lyric-0 lyric-hyphen');
smo248244v0ar.push(smo248223);
const smo248225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo248225.setAttribute('id', 'smo248225');
const smo2482250acc = new VF.Accidental('n');
smo248225.addModifier(smo2482250acc, 0);
const smo248226 = new VF.Annotation('ло');
smo248226.setAttribute('id', 'smo248226');
smo248226.setFont('Merriweather', 12.1, 'normal');
smo248226.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248225.addModifier(smo248226);
smo248226.addClass('lyric lyric-0 lyric-hyphen');
smo248244v0ar.push(smo248225);
const smo248227 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
smo248227.setAttribute('id', 'smo248227');
const smo2482270acc = new VF.Accidental('#');
smo248227.addModifier(smo2482270acc, 0);
smo248244v0ar.push(smo248227);
smo248244v0.addTickables(smo248244v0ar)
fmtsmo24824410.joinVoices([smo248244v0]);
const fmtsmo24928110 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo249281v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249281v0ar = [];
const smo249262 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249262.setAttribute('id', 'smo249262');
smo249281v0ar.push(smo249262);
const smo249263 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo249263.setAttribute('id', 'smo249263');
smo249281v0ar.push(smo249263);
const smo249264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249264.setAttribute('id', 'smo249264');
smo249281v0ar.push(smo249264);
const smo249265 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo249265.setAttribute('id', 'smo249265');
smo249281v0ar.push(smo249265);
smo249281v0.addTickables(smo249281v0ar)
fmtsmo24928110.joinVoices([smo249281v0]);
const fmtsmo25027110 = new VF.Formatter();
//
// voices and notes for stave 2 10
const smo250271v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250271v0ar = [];
const smo250252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250252.setAttribute('id', 'smo250252');
smo250271v0ar.push(smo250252);
const smo250253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo250253.setAttribute('id', 'smo250253');
smo250271v0ar.push(smo250253);
const smo250254 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250254.setAttribute('id', 'smo250254');
smo250271v0ar.push(smo250254);
const smo250255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo250255.setAttribute('id', 'smo250255');
smo250271v0ar.push(smo250255);
smo250271v0.addTickables(smo250271v0ar)
fmtsmo25027110.joinVoices([smo250271v0]);
const fmtsmo25123310 = new VF.Formatter();
//
// voices and notes for stave 3 10
const smo251233v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251233v0ar = [];
const smo251214 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo251214.setAttribute('id', 'smo251214');
smo251233v0ar.push(smo251214);
const smo251215 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251215.setAttribute('id', 'smo251215');
smo251233v0ar.push(smo251215);
const smo251216 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo251216.setAttribute('id', 'smo251216');
smo251233v0ar.push(smo251216);
const smo251217 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251217.setAttribute('id', 'smo251217');
smo251233v0ar.push(smo251217);
smo251233v0.addTickables(smo251233v0ar)
fmtsmo25123310.joinVoices([smo251233v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
 
// formatting measures in staff group smo251978
fmtsmo24824410.format([smo248244v0,smo249281v0,smo250271v0,smo251233v0], 154);
const stavesmo248244 = new VF.Stave(504, 598, 168);
stavesmo248244.setAttribute('id', 'stavesmo248244');
stavesmo248244.setBegBarType(VF.Barline.type.NONE);
stavesmo248244.setContext(context);
stavesmo248244.draw();
smo248244v0.draw(context, stavesmo248244);
const stavesmo249281 = new VF.Stave(504, 711, 168);
stavesmo249281.setAttribute('id', 'stavesmo249281');
stavesmo249281.setBegBarType(VF.Barline.type.NONE);
stavesmo249281.setContext(context);
stavesmo249281.draw();
smo249281v0.draw(context, stavesmo249281);
const stavesmo250271 = new VF.Stave(504, 794, 168);
stavesmo250271.setAttribute('id', 'stavesmo250271');
stavesmo250271.setBegBarType(VF.Barline.type.NONE);
stavesmo250271.setContext(context);
stavesmo250271.draw();
smo250271v0.draw(context, stavesmo250271);
const stavesmo251233 = new VF.Stave(504, 875, 168);
stavesmo251233.setAttribute('id', 'stavesmo251233');
stavesmo251233.setBegBarType(VF.Barline.type.NONE);
stavesmo251233.setContext(context);
stavesmo251233.draw();
smo251233v0.draw(context, stavesmo251233);
const fmtsmo24826311 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo248263v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248263v0ar = [];
const smo248245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo248245.setAttribute('id', 'smo248245');
const smo248246 = new VF.Annotation('вей');
smo248246.setAttribute('id', 'smo248246');
smo248246.setFont('Merriweather', 12.1, 'normal');
smo248246.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248245.addModifier(smo248246);
smo248246.addClass('lyric lyric-0');
smo248263v0ar.push(smo248245);
const smo248247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo248247.setAttribute('id', 'smo248247');
smo248263v0ar.push(smo248247);
smo248263v0.addTickables(smo248263v0ar)
fmtsmo24826311.joinVoices([smo248263v0]);
const fmtsmo24930111 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo249301v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249301v0ar = [];
const smo249282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249282.setAttribute('id', 'smo249282');
smo249301v0ar.push(smo249282);
const smo249283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo249283.setAttribute('id', 'smo249283');
smo249301v0ar.push(smo249283);
const smo249284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo249284.setAttribute('id', 'smo249284');
smo249301v0ar.push(smo249284);
const smo249285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo249285.setAttribute('id', 'smo249285');
smo249301v0ar.push(smo249285);
smo249301v0.addTickables(smo249301v0ar)
fmtsmo24930111.joinVoices([smo249301v0]);
const fmtsmo25029111 = new VF.Formatter();
//
// voices and notes for stave 2 11
const smo250291v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250291v0ar = [];
const smo250272 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250272.setAttribute('id', 'smo250272');
smo250291v0ar.push(smo250272);
const smo250273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo250273.setAttribute('id', 'smo250273');
smo250291v0ar.push(smo250273);
const smo250274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo250274.setAttribute('id', 'smo250274');
smo250291v0ar.push(smo250274);
const smo250275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo250275.setAttribute('id', 'smo250275');
smo250291v0ar.push(smo250275);
smo250291v0.addTickables(smo250291v0ar)
fmtsmo25029111.joinVoices([smo250291v0]);
const fmtsmo25125111 = new VF.Formatter();
//
// voices and notes for stave 3 11
const smo251251v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251251v0ar = [];
const smo251234 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo251234.setAttribute('id', 'smo251234');
smo251251v0ar.push(smo251234);
const smo251235 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251235.setAttribute('id', 'smo251235');
smo251251v0ar.push(smo251235);
smo251251v0.addTickables(smo251251v0ar)
fmtsmo25125111.joinVoices([smo251251v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
 
// formatting measures in staff group smo251978
fmtsmo24826311.format([smo248263v0,smo249301v0,smo250291v0,smo251251v0], 147);
const stavesmo248263 = new VF.Stave(672, 598, 161);
stavesmo248263.setAttribute('id', 'stavesmo248263');
stavesmo248263.setBegBarType(VF.Barline.type.NONE);
stavesmo248263.setContext(context);
stavesmo248263.draw();
smo248263v0.draw(context, stavesmo248263);
const stavesmo249301 = new VF.Stave(672, 711, 161);
stavesmo249301.setAttribute('id', 'stavesmo249301');
stavesmo249301.setBegBarType(VF.Barline.type.NONE);
stavesmo249301.setContext(context);
stavesmo249301.draw();
smo249301v0.draw(context, stavesmo249301);
const stavesmo250291 = new VF.Stave(672, 794, 161);
stavesmo250291.setAttribute('id', 'stavesmo250291');
stavesmo250291.setBegBarType(VF.Barline.type.NONE);
stavesmo250291.setContext(context);
stavesmo250291.draw();
smo250291v0.draw(context, stavesmo250291);
const stavesmo251251 = new VF.Stave(672, 875, 161);
stavesmo251251.setAttribute('id', 'stavesmo251251');
stavesmo251251.setBegBarType(VF.Barline.type.NONE);
stavesmo251251.setContext(context);
stavesmo251251.draw();
smo251251v0.draw(context, stavesmo251251);
const fmtsmo24828512 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo248285v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248285v0ar = [];
const smo248264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo248264.setAttribute('id', 'smo248264');
const smo248265 = new VF.Annotation('го');
smo248265.setAttribute('id', 'smo248265');
smo248265.setFont('Merriweather', 12.1, 'normal');
smo248265.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248264.addModifier(smo248265);
smo248265.addClass('lyric lyric-0 lyric-hyphen');
smo248285v0ar.push(smo248264);
const smo248266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo248266.setAttribute('id', 'smo248266');
const smo248267 = new VF.Annotation('пo');
smo248267.setAttribute('id', 'smo248267');
smo248267.setFont('Merriweather', 12.1, 'normal');
smo248267.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248266.addModifier(smo248267);
smo248267.addClass('lyric lyric-0');
smo248285v0ar.push(smo248266);
const smo248268 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo248268.setAttribute('id', 'smo248268');
const smo248269 = new VF.Annotation('-');
smo248269.setAttribute('id', 'smo248269');
smo248269.setFont('Merriweather', 12.1, 'normal');
smo248269.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248268.addModifier(smo248269);
smo248269.addClass('lyric lyric-0 lyric-hyphen');
smo248285v0ar.push(smo248268);
smo248285v0.addTickables(smo248285v0ar)
fmtsmo24828512.joinVoices([smo248285v0]);
const fmtsmo24932112 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo249321v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249321v0ar = [];
const smo249302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249302.setAttribute('id', 'smo249302');
smo249321v0ar.push(smo249302);
const smo249303 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo249303.setAttribute('id', 'smo249303');
smo249321v0ar.push(smo249303);
const smo249304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249304.setAttribute('id', 'smo249304');
smo249321v0ar.push(smo249304);
const smo249305 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo249305.setAttribute('id', 'smo249305');
smo249321v0ar.push(smo249305);
smo249321v0.addTickables(smo249321v0ar)
fmtsmo24932112.joinVoices([smo249321v0]);
const fmtsmo25031112 = new VF.Formatter();
//
// voices and notes for stave 2 12
const smo250311v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250311v0ar = [];
const smo250292 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250292.setAttribute('id', 'smo250292');
smo250311v0ar.push(smo250292);
const smo250293 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo250293.setAttribute('id', 'smo250293');
smo250311v0ar.push(smo250293);
const smo250294 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250294.setAttribute('id', 'smo250294');
smo250311v0ar.push(smo250294);
const smo250295 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo250295.setAttribute('id', 'smo250295');
smo250311v0ar.push(smo250295);
smo250311v0.addTickables(smo250311v0ar)
fmtsmo25031112.joinVoices([smo250311v0]);
const fmtsmo25127112 = new VF.Formatter();
//
// voices and notes for stave 3 12
const smo251271v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251271v0ar = [];
const smo251252 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo251252.setAttribute('id', 'smo251252');
smo251271v0ar.push(smo251252);
const smo251253 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251253.setAttribute('id', 'smo251253');
smo251271v0ar.push(smo251253);
const smo251254 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo251254.setAttribute('id', 'smo251254');
smo251271v0ar.push(smo251254);
const smo251255 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251255.setAttribute('id', 'smo251255');
smo251271v0ar.push(smo251255);
smo251271v0.addTickables(smo251271v0ar)
fmtsmo25127112.joinVoices([smo251271v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
 
// formatting measures in staff group smo251978
fmtsmo24828512.format([smo248285v0,smo249321v0,smo250311v0,smo251271v0], 144);
const stavesmo248285 = new VF.Stave(833, 598, 158);
stavesmo248285.setAttribute('id', 'stavesmo248285');
stavesmo248285.setBegBarType(VF.Barline.type.NONE);
stavesmo248285.setContext(context);
stavesmo248285.draw();
smo248285v0.draw(context, stavesmo248285);
const stavesmo249321 = new VF.Stave(833, 711, 158);
stavesmo249321.setAttribute('id', 'stavesmo249321');
stavesmo249321.setBegBarType(VF.Barline.type.NONE);
stavesmo249321.setContext(context);
stavesmo249321.draw();
smo249321v0.draw(context, stavesmo249321);
const stavesmo250311 = new VF.Stave(833, 794, 158);
stavesmo250311.setAttribute('id', 'stavesmo250311');
stavesmo250311.setBegBarType(VF.Barline.type.NONE);
stavesmo250311.setContext(context);
stavesmo250311.draw();
smo250311v0.draw(context, stavesmo250311);
const stavesmo251271 = new VF.Stave(833, 875, 158);
stavesmo251271.setAttribute('id', 'stavesmo251271');
stavesmo251271.setBegBarType(VF.Barline.type.NONE);
stavesmo251271.setContext(context);
stavesmo251271.draw();
smo251271v0.draw(context, stavesmo251271);
const fmtsmo24830713 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo248307v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248307v0ar = [];
const smo248286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo248286.setAttribute('id', 'smo248286');
const smo248287 = new VF.Annotation('си');
smo248287.setAttribute('id', 'smo248287');
smo248287.setFont('Merriweather', 12.1, 'normal');
smo248287.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248286.addModifier(smo248287);
smo248287.addClass('lyric lyric-0');
smo248307v0ar.push(smo248286);
const smo248288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo248288.setAttribute('id', 'smo248288');
const smo248289 = new VF.Annotation('ст');
smo248289.setAttribute('id', 'smo248289');
smo248289.setFont('Merriweather', 12.1, 'normal');
smo248289.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248288.addModifier(smo248289);
smo248289.addClass('lyric lyric-0 lyric-hyphen');
smo248307v0ar.push(smo248288);
const smo248290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo248290.setAttribute('id', 'smo248290');
const smo248291 = new VF.Annotation('ый');
smo248291.setAttribute('id', 'smo248291');
smo248291.setFont('Merriweather', 12.1, 'normal');
smo248291.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248290.addModifier(smo248291);
smo248291.addClass('lyric lyric-0');
smo248307v0ar.push(smo248290);
smo248307v0.addTickables(smo248307v0ar)
fmtsmo24830713.joinVoices([smo248307v0]);
const fmtsmo24934113 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo249341v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249341v0ar = [];
const smo249322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249322.setAttribute('id', 'smo249322');
smo249341v0ar.push(smo249322);
const smo249323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo249323.setAttribute('id', 'smo249323');
smo249341v0ar.push(smo249323);
const smo249324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249324.setAttribute('id', 'smo249324');
smo249341v0ar.push(smo249324);
const smo249325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo249325.setAttribute('id', 'smo249325');
smo249341v0ar.push(smo249325);
smo249341v0.addTickables(smo249341v0ar)
fmtsmo24934113.joinVoices([smo249341v0]);
const fmtsmo25033113 = new VF.Formatter();
//
// voices and notes for stave 2 13
const smo250331v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250331v0ar = [];
const smo250312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250312.setAttribute('id', 'smo250312');
smo250331v0ar.push(smo250312);
const smo250313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo250313.setAttribute('id', 'smo250313');
smo250331v0ar.push(smo250313);
const smo250314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250314.setAttribute('id', 'smo250314');
smo250331v0ar.push(smo250314);
const smo250315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo250315.setAttribute('id', 'smo250315');
smo250331v0ar.push(smo250315);
smo250331v0.addTickables(smo250331v0ar)
fmtsmo25033113.joinVoices([smo250331v0]);
const fmtsmo25128913 = new VF.Formatter();
//
// voices and notes for stave 3 13
const smo251289v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251289v0ar = [];
const smo251272 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo251272.setAttribute('id', 'smo251272');
smo251289v0ar.push(smo251272);
const smo251273 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo251273.setAttribute('id', 'smo251273');
smo251289v0ar.push(smo251273);
smo251289v0.addTickables(smo251289v0ar)
fmtsmo25128913.joinVoices([smo251289v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
 
// formatting measures in staff group smo251978
fmtsmo24830713.format([smo248307v0,smo249341v0,smo250331v0,smo251289v0], 184);
const stavesmo248307 = new VF.Stave(991, 598, 198);
stavesmo248307.setAttribute('id', 'stavesmo248307');
stavesmo248307.setBegBarType(VF.Barline.type.NONE);
stavesmo248307.setContext(context);
stavesmo248307.draw();
smo248307v0.draw(context, stavesmo248307);
const stavesmo249341 = new VF.Stave(991, 711, 198);
stavesmo249341.setAttribute('id', 'stavesmo249341');
stavesmo249341.setBegBarType(VF.Barline.type.NONE);
stavesmo249341.setContext(context);
stavesmo249341.draw();
smo249341v0.draw(context, stavesmo249341);
const stavesmo250331 = new VF.Stave(991, 794, 198);
stavesmo250331.setAttribute('id', 'stavesmo250331');
stavesmo250331.setBegBarType(VF.Barline.type.NONE);
stavesmo250331.setContext(context);
stavesmo250331.draw();
smo250331v0.draw(context, stavesmo250331);
const stavesmo251289 = new VF.Stave(991, 875, 198);
stavesmo251289.setAttribute('id', 'stavesmo251289');
stavesmo251289.setBegBarType(VF.Barline.type.NONE);
stavesmo251289.setContext(context);
stavesmo251289.draw();
smo251289v0.draw(context, stavesmo251289);
const fmtsmo24833314 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo248333v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248333v0ar = [];
const smo248308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo248308.setAttribute('id', 'smo248308');
const smo248309 = new VF.Annotation('co');
smo248309.setAttribute('id', 'smo248309');
smo248309.setFont('Merriweather', 12.1, 'normal');
smo248309.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248308.addModifier(smo248309);
smo248309.addClass('lyric lyric-0');
smo248333v0ar.push(smo248308);
const smo248310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo248310.setAttribute('id', 'smo248310');
const smo248311 = new VF.Annotation('-');
smo248311.setAttribute('id', 'smo248311');
smo248311.setFont('Merriweather', 12.1, 'normal');
smo248311.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248310.addModifier(smo248311);
smo248311.addClass('lyric lyric-0 lyric-hyphen');
smo248333v0ar.push(smo248310);
const smo248312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo248312.setAttribute('id', 'smo248312');
const smo248313 = new VF.Annotation('-');
smo248313.setAttribute('id', 'smo248313');
smo248313.setFont('Merriweather', 12.1, 'normal');
smo248313.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248312.addModifier(smo248313);
smo248313.addClass('lyric lyric-0 lyric-hyphen');
smo248333v0ar.push(smo248312);
const smo248314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo248314.setAttribute('id', 'smo248314');
const smo248315 = new VF.Annotation('по');
smo248315.setAttribute('id', 'smo248315');
smo248315.setFont('Merriweather', 12.1, 'normal');
smo248315.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248314.addModifier(smo248315);
smo248315.addClass('lyric lyric-0');
smo248333v0ar.push(smo248314);
const smo248316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo248316.setAttribute('id', 'smo248316');
const smo248317 = new VF.Annotation('-');
smo248317.setAttribute('id', 'smo248317');
smo248317.setFont('Merriweather', 12.1, 'normal');
smo248317.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248316.addModifier(smo248317);
smo248317.addClass('lyric lyric-0 lyric-hyphen');
smo248333v0ar.push(smo248316);
smo248333v0.addTickables(smo248333v0ar)
fmtsmo24833314.joinVoices([smo248333v0]);
const fmtsmo24936114 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo249361v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249361v0ar = [];
const smo249342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249342.setAttribute('id', 'smo249342');
smo249361v0ar.push(smo249342);
const smo249343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo249343.setAttribute('id', 'smo249343');
smo249361v0ar.push(smo249343);
const smo249344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249344.setAttribute('id', 'smo249344');
smo249361v0ar.push(smo249344);
const smo249345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo249345.setAttribute('id', 'smo249345');
smo249361v0ar.push(smo249345);
smo249361v0.addTickables(smo249361v0ar)
fmtsmo24936114.joinVoices([smo249361v0]);
const fmtsmo25035114 = new VF.Formatter();
//
// voices and notes for stave 2 14
const smo250351v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250351v0ar = [];
const smo250332 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250332.setAttribute('id', 'smo250332');
smo250351v0ar.push(smo250332);
const smo250333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo250333.setAttribute('id', 'smo250333');
smo250351v0ar.push(smo250333);
const smo250334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250334.setAttribute('id', 'smo250334');
smo250351v0ar.push(smo250334);
const smo250335 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo250335.setAttribute('id', 'smo250335');
smo250351v0ar.push(smo250335);
smo250351v0.addTickables(smo250351v0ar)
fmtsmo25035114.joinVoices([smo250351v0]);
const fmtsmo25130914 = new VF.Formatter();
//
// voices and notes for stave 3 14
const smo251309v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251309v0ar = [];
const smo251290 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo251290.setAttribute('id', 'smo251290');
smo251309v0ar.push(smo251290);
const smo251291 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251291.setAttribute('id', 'smo251291');
smo251309v0ar.push(smo251291);
const smo251292 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo251292.setAttribute('id', 'smo251292');
smo251309v0ar.push(smo251292);
const smo251293 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251293.setAttribute('id', 'smo251293');
smo251309v0ar.push(smo251293);
smo251309v0.addTickables(smo251309v0ar)
fmtsmo25130914.joinVoices([smo251309v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
const dirsmo258361 = smo248310.getStemDirection();
smo248310.setStemDirection(dirsmo258361);
smo248312.setStemDirection(dirsmo258361);
const smo258361 = new VF.Beam([smo248310,smo248312]);
 
// formatting measures in staff group smo251978
fmtsmo24833314.format([smo248333v0,smo249361v0,smo250351v0,smo251309v0], 169);
const stavesmo248333 = new VF.Stave(1189, 598, 183);
stavesmo248333.setAttribute('id', 'stavesmo248333');
stavesmo248333.setBegBarType(VF.Barline.type.NONE);
stavesmo248333.setContext(context);
stavesmo248333.draw();
smo248333v0.draw(context, stavesmo248333);
smo258361.setContext(context);
smo258361.draw();
const stavesmo249361 = new VF.Stave(1189, 711, 183);
stavesmo249361.setAttribute('id', 'stavesmo249361');
stavesmo249361.setBegBarType(VF.Barline.type.NONE);
stavesmo249361.setContext(context);
stavesmo249361.draw();
smo249361v0.draw(context, stavesmo249361);
const stavesmo250351 = new VF.Stave(1189, 794, 183);
stavesmo250351.setAttribute('id', 'stavesmo250351');
stavesmo250351.setBegBarType(VF.Barline.type.NONE);
stavesmo250351.setContext(context);
stavesmo250351.draw();
smo250351v0.draw(context, stavesmo250351);
const stavesmo251309 = new VF.Stave(1189, 875, 183);
stavesmo251309.setAttribute('id', 'stavesmo251309');
stavesmo251309.setBegBarType(VF.Barline.type.NONE);
stavesmo251309.setContext(context);
stavesmo251309.draw();
smo251309v0.draw(context, stavesmo251309);
const rightsmo251978stavesmo2483333 = new VF.StaveConnector(stavesmo248333, stavesmo251309).setType(0);
rightsmo251978stavesmo2483333.setContext(context).draw();
const fmtsmo24835215 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo248352v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248352v0ar = [];
const smo248334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo248334.setAttribute('id', 'smo248334');
smo248334.addModifier(new VF.Dot(), 0);
const smo248335 = new VF.Annotation('вей');
smo248335.setAttribute('id', 'smo248335');
smo248335.setFont('Merriweather', 12.1, 'normal');
smo248335.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248334.addModifier(smo248335);
smo248335.addClass('lyric lyric-0');
smo248352v0ar.push(smo248334);
const smo248336 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo248336.setAttribute('id', 'smo248336');
smo248352v0ar.push(smo248336);
smo248352v0.addTickables(smo248352v0ar)
fmtsmo24835215.joinVoices([smo248352v0]);
const fmtsmo24938115 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo249381v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249381v0ar = [];
const smo249362 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249362.setAttribute('id', 'smo249362');
smo249381v0ar.push(smo249362);
const smo249363 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo249363.setAttribute('id', 'smo249363');
smo249381v0ar.push(smo249363);
const smo249364 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo249364.setAttribute('id', 'smo249364');
smo249381v0ar.push(smo249364);
const smo249365 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo249365.setAttribute('id', 'smo249365');
smo249381v0ar.push(smo249365);
smo249381v0.addTickables(smo249381v0ar)
fmtsmo24938115.joinVoices([smo249381v0]);
const fmtsmo25037115 = new VF.Formatter();
//
// voices and notes for stave 2 15
const smo250371v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250371v0ar = [];
const smo250352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250352.setAttribute('id', 'smo250352');
smo250371v0ar.push(smo250352);
const smo250353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo250353.setAttribute('id', 'smo250353');
smo250371v0ar.push(smo250353);
const smo250354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo250354.setAttribute('id', 'smo250354');
smo250371v0ar.push(smo250354);
const smo250355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo250355.setAttribute('id', 'smo250355');
smo250371v0ar.push(smo250355);
smo250371v0.addTickables(smo250371v0ar)
fmtsmo25037115.joinVoices([smo250371v0]);
const fmtsmo25132715 = new VF.Formatter();
//
// voices and notes for stave 3 15
const smo251327v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251327v0ar = [];
const smo251310 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo251310.setAttribute('id', 'smo251310');
smo251310.addModifier(new VF.Dot(), 0);
smo251327v0ar.push(smo251310);
const smo251311 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251311.setAttribute('id', 'smo251311');
smo251327v0ar.push(smo251311);
smo251327v0.addTickables(smo251327v0ar)
fmtsmo25132715.joinVoices([smo251327v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
 
// formatting measures in staff group smo251978
fmtsmo24835215.format([smo248352v0,smo249381v0,smo250371v0,smo251327v0], 226);
const stavesmo248352 = new VF.Stave(55, 1005, 300);
stavesmo248352.setAttribute('id', 'stavesmo248352');
stavesmo248352.setBegBarType(1);
stavesmo248352.addClef('treble');
const keysmo248352 = new VF.KeySignature('F');
keysmo248352.addToStave(stavesmo248352);
stavesmo248352.setContext(context);
stavesmo248352.draw();
smo248352v0.draw(context, stavesmo248352);
const stavesmo249381 = new VF.Stave(55, 1120, 300);
stavesmo249381.setAttribute('id', 'stavesmo249381');
stavesmo249381.setBegBarType(1);
stavesmo249381.addClef('treble');
const keysmo249381 = new VF.KeySignature('F');
keysmo249381.addToStave(stavesmo249381);
stavesmo249381.setContext(context);
stavesmo249381.draw();
smo249381v0.draw(context, stavesmo249381);
const stavesmo250371 = new VF.Stave(55, 1215, 300);
stavesmo250371.setAttribute('id', 'stavesmo250371');
stavesmo250371.setBegBarType(1);
stavesmo250371.addClef('treble');
const keysmo250371 = new VF.KeySignature('F');
keysmo250371.addToStave(stavesmo250371);
stavesmo250371.setContext(context);
stavesmo250371.draw();
smo250371v0.draw(context, stavesmo250371);
const stavesmo251327 = new VF.Stave(55, 1293, 300);
stavesmo251327.setAttribute('id', 'stavesmo251327');
stavesmo251327.setBegBarType(1);
stavesmo251327.addClef('bass');
const keysmo251327 = new VF.KeySignature('F');
keysmo251327.addToStave(stavesmo251327);
stavesmo251327.setContext(context);
stavesmo251327.draw();
smo251327v0.draw(context, stavesmo251327);
const leftsmo251978stavesmo2483523 = new VF.StaveConnector(stavesmo248352, stavesmo251327).setType(1);
leftsmo251978stavesmo2483523.setContext(context).draw();
const fmtsmo24837416 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo248374v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248374v0ar = [];
const smo248353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo248353.setAttribute('id', 'smo248353');
const smo248354 = new VF.Annotation('Tы');
smo248354.setAttribute('id', 'smo248354');
smo248354.setFont('Merriweather', 12.1, 'normal');
smo248354.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248353.addModifier(smo248354);
smo248354.addClass('lyric lyric-0');
smo248374v0ar.push(smo248353);
const smo248355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo248355.setAttribute('id', 'smo248355');
const smo2483550acc = new VF.Accidental('n');
smo248355.addModifier(smo2483550acc, 0);
const smo248356 = new VF.Annotation('ку');
smo248356.setAttribute('id', 'smo248356');
smo248356.setFont('Merriweather', 12.1, 'normal');
smo248356.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248355.addModifier(smo248356);
smo248356.addClass('lyric lyric-0');
smo248374v0ar.push(smo248355);
const smo248357 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
smo248357.setAttribute('id', 'smo248357');
const smo2483570acc = new VF.Accidental('#');
smo248357.addModifier(smo2483570acc, 0);
const smo248358 = new VF.Annotation('-');
smo248358.setAttribute('id', 'smo248358');
smo248358.setFont('Merriweather', 12.1, 'normal');
smo248358.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248357.addModifier(smo248358);
smo248358.addClass('lyric lyric-0 lyric-hyphen');
smo248374v0ar.push(smo248357);
smo248374v0.addTickables(smo248374v0ar)
fmtsmo24837416.joinVoices([smo248374v0]);
const fmtsmo24940116 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo249401v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249401v0ar = [];
const smo249382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249382.setAttribute('id', 'smo249382');
smo249401v0ar.push(smo249382);
const smo249383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo249383.setAttribute('id', 'smo249383');
smo249401v0ar.push(smo249383);
const smo249384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249384.setAttribute('id', 'smo249384');
smo249401v0ar.push(smo249384);
const smo249385 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo249385.setAttribute('id', 'smo249385');
smo249401v0ar.push(smo249385);
smo249401v0.addTickables(smo249401v0ar)
fmtsmo24940116.joinVoices([smo249401v0]);
const fmtsmo25039116 = new VF.Formatter();
//
// voices and notes for stave 2 16
const smo250391v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250391v0ar = [];
const smo250372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250372.setAttribute('id', 'smo250372');
smo250391v0ar.push(smo250372);
const smo250373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
smo250373.setAttribute('id', 'smo250373');
const smo2503730acc = new VF.Accidental('#');
smo250373.addModifier(smo2503730acc, 0);
smo250391v0ar.push(smo250373);
const smo250374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250374.setAttribute('id', 'smo250374');
smo250391v0ar.push(smo250374);
const smo250375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250375.setAttribute('id', 'smo250375');
smo250391v0ar.push(smo250375);
smo250391v0.addTickables(smo250391v0ar)
fmtsmo25039116.joinVoices([smo250391v0]);
const fmtsmo25134516 = new VF.Formatter();
//
// voices and notes for stave 3 16
const smo251345v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251345v0ar = [];
const smo251328 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo251328.setAttribute('id', 'smo251328');
smo251345v0ar.push(smo251328);
const smo251329 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo251329.setAttribute('id', 'smo251329');
smo251345v0ar.push(smo251329);
smo251345v0.addTickables(smo251345v0ar)
fmtsmo25134516.joinVoices([smo251345v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
 
// formatting measures in staff group smo251978
fmtsmo24837416.format([smo248374v0,smo249401v0,smo250391v0,smo251345v0], 258);
const stavesmo248374 = new VF.Stave(355, 1005, 272);
stavesmo248374.setAttribute('id', 'stavesmo248374');
stavesmo248374.setBegBarType(VF.Barline.type.NONE);
stavesmo248374.setContext(context);
stavesmo248374.draw();
smo248374v0.draw(context, stavesmo248374);
const stavesmo249401 = new VF.Stave(355, 1120, 272);
stavesmo249401.setAttribute('id', 'stavesmo249401');
stavesmo249401.setBegBarType(VF.Barline.type.NONE);
stavesmo249401.setContext(context);
stavesmo249401.draw();
smo249401v0.draw(context, stavesmo249401);
const stavesmo250391 = new VF.Stave(355, 1215, 272);
stavesmo250391.setAttribute('id', 'stavesmo250391');
stavesmo250391.setBegBarType(VF.Barline.type.NONE);
stavesmo250391.setContext(context);
stavesmo250391.draw();
smo250391v0.draw(context, stavesmo250391);
const stavesmo251345 = new VF.Stave(355, 1293, 272);
stavesmo251345.setAttribute('id', 'stavesmo251345');
stavesmo251345.setBegBarType(VF.Barline.type.NONE);
stavesmo251345.setContext(context);
stavesmo251345.draw();
smo251345v0.draw(context, stavesmo251345);
const fmtsmo24839617 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo248396v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248396v0ar = [];
const smo248375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo248375.setAttribute('id', 'smo248375');
const smo248376 = new VF.Annotation('дa,');
smo248376.setAttribute('id', 'smo248376');
smo248376.setFont('Merriweather', 12.1, 'normal');
smo248376.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248375.addModifier(smo248376);
smo248376.addClass('lyric lyric-0');
smo248396v0ar.push(smo248375);
const smo248377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo248377.setAttribute('id', 'smo248377');
const smo248378 = new VF.Annotation('ку');
smo248378.setAttribute('id', 'smo248378');
smo248378.setFont('Merriweather', 12.1, 'normal');
smo248378.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248377.addModifier(smo248378);
smo248378.addClass('lyric lyric-0');
smo248396v0ar.push(smo248377);
const smo248379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo248379.setAttribute('id', 'smo248379');
const smo248380 = new VF.Annotation('-');
smo248380.setAttribute('id', 'smo248380');
smo248380.setFont('Merriweather', 12.1, 'normal');
smo248380.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248379.addModifier(smo248380);
smo248380.addClass('lyric lyric-0 lyric-hyphen');
smo248396v0ar.push(smo248379);
smo248396v0.addTickables(smo248396v0ar)
fmtsmo24839617.joinVoices([smo248396v0]);
const fmtsmo24942117 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo249421v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249421v0ar = [];
const smo249402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249402.setAttribute('id', 'smo249402');
smo249421v0ar.push(smo249402);
const smo249403 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo249403.setAttribute('id', 'smo249403');
smo249421v0ar.push(smo249403);
const smo249404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo249404.setAttribute('id', 'smo249404');
smo249421v0ar.push(smo249404);
const smo249405 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo249405.setAttribute('id', 'smo249405');
smo249421v0ar.push(smo249405);
smo249421v0.addTickables(smo249421v0ar)
fmtsmo24942117.joinVoices([smo249421v0]);
const fmtsmo25041117 = new VF.Formatter();
//
// voices and notes for stave 2 17
const smo250411v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250411v0ar = [];
const smo250392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250392.setAttribute('id', 'smo250392');
smo250411v0ar.push(smo250392);
const smo250393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo250393.setAttribute('id', 'smo250393');
smo250411v0ar.push(smo250393);
const smo250394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo250394.setAttribute('id', 'smo250394');
smo250411v0ar.push(smo250394);
const smo250395 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo250395.setAttribute('id', 'smo250395');
smo250411v0ar.push(smo250395);
smo250411v0.addTickables(smo250411v0ar)
fmtsmo25041117.joinVoices([smo250411v0]);
const fmtsmo25136417 = new VF.Formatter();
//
// voices and notes for stave 3 17
const smo251364v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251364v0ar = [];
const smo251346 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo251346.setAttribute('id', 'smo251346');
smo251364v0ar.push(smo251346);
const smo251347 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo251347.setAttribute('id', 'smo251347');
smo251364v0ar.push(smo251347);
const smo251348 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251348.setAttribute('id', 'smo251348');
smo251364v0ar.push(smo251348);
smo251364v0.addTickables(smo251364v0ar)
fmtsmo25136417.joinVoices([smo251364v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
 
// formatting measures in staff group smo251978
fmtsmo24839617.format([smo248396v0,smo249421v0,smo250411v0,smo251364v0], 234);
const stavesmo248396 = new VF.Stave(627, 1005, 248);
stavesmo248396.setAttribute('id', 'stavesmo248396');
stavesmo248396.setBegBarType(VF.Barline.type.NONE);
stavesmo248396.setContext(context);
stavesmo248396.draw();
smo248396v0.draw(context, stavesmo248396);
const stavesmo249421 = new VF.Stave(627, 1120, 248);
stavesmo249421.setAttribute('id', 'stavesmo249421');
stavesmo249421.setBegBarType(VF.Barline.type.NONE);
stavesmo249421.setContext(context);
stavesmo249421.draw();
smo249421v0.draw(context, stavesmo249421);
const stavesmo250411 = new VF.Stave(627, 1215, 248);
stavesmo250411.setAttribute('id', 'stavesmo250411');
stavesmo250411.setBegBarType(VF.Barline.type.NONE);
stavesmo250411.setContext(context);
stavesmo250411.draw();
smo250411v0.draw(context, stavesmo250411);
const stavesmo251364 = new VF.Stave(627, 1293, 248);
stavesmo251364.setAttribute('id', 'stavesmo251364');
stavesmo251364.setBegBarType(VF.Barline.type.NONE);
stavesmo251364.setContext(context);
stavesmo251364.draw();
smo251364v0.draw(context, stavesmo251364);
const fmtsmo24841818 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo248418v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248418v0ar = [];
const smo248397 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo248397.setAttribute('id', 'smo248397');
const smo248398 = new VF.Annotation('да');
smo248398.setAttribute('id', 'smo248398');
smo248398.setFont('Merriweather', 12.1, 'normal');
smo248398.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248397.addModifier(smo248398);
smo248398.addClass('lyric lyric-0');
smo248418v0ar.push(smo248397);
const smo248399 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo248399.setAttribute('id', 'smo248399');
smo248418v0ar.push(smo248399);
const smo248400 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo248400.setAttribute('id', 'smo248400');
const smo248401 = new VF.Annotation('ле');
smo248401.setAttribute('id', 'smo248401');
smo248401.setFont('Merriweather', 12.1, 'normal');
smo248401.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248400.addModifier(smo248401);
smo248401.addClass('lyric lyric-0 lyric-hyphen');
smo248418v0ar.push(smo248400);
const smo248402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo248402.setAttribute('id', 'smo248402');
smo248418v0ar.push(smo248402);
smo248418v0.addTickables(smo248418v0ar)
fmtsmo24841818.joinVoices([smo248418v0]);
const fmtsmo24944118 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo249441v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249441v0ar = [];
const smo249422 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249422.setAttribute('id', 'smo249422');
smo249441v0ar.push(smo249422);
const smo249423 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo249423.setAttribute('id', 'smo249423');
smo249441v0ar.push(smo249423);
const smo249424 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249424.setAttribute('id', 'smo249424');
smo249441v0ar.push(smo249424);
const smo249425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo249425.setAttribute('id', 'smo249425');
smo249441v0ar.push(smo249425);
smo249441v0.addTickables(smo249441v0ar)
fmtsmo24944118.joinVoices([smo249441v0]);
const fmtsmo25043118 = new VF.Formatter();
//
// voices and notes for stave 2 18
const smo250431v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250431v0ar = [];
const smo250412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250412.setAttribute('id', 'smo250412');
smo250431v0ar.push(smo250412);
const smo250413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo250413.setAttribute('id', 'smo250413');
smo250431v0ar.push(smo250413);
const smo250414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250414.setAttribute('id', 'smo250414');
smo250431v0ar.push(smo250414);
const smo250415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo250415.setAttribute('id', 'smo250415');
smo250431v0ar.push(smo250415);
smo250431v0.addTickables(smo250431v0ar)
fmtsmo25043118.joinVoices([smo250431v0]);
const fmtsmo25138218 = new VF.Formatter();
//
// voices and notes for stave 3 18
const smo251382v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251382v0ar = [];
const smo251365 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo251365.setAttribute('id', 'smo251365');
smo251382v0ar.push(smo251365);
const smo251366 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo251366.setAttribute('id', 'smo251366');
smo251382v0ar.push(smo251366);
smo251382v0.addTickables(smo251382v0ar)
fmtsmo25138218.joinVoices([smo251382v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
 
// formatting measures in staff group smo251978
fmtsmo24841818.format([smo248418v0,smo249441v0,smo250431v0,smo251382v0], 228);
const stavesmo248418 = new VF.Stave(875, 1005, 242);
stavesmo248418.setAttribute('id', 'stavesmo248418');
stavesmo248418.setBegBarType(VF.Barline.type.NONE);
stavesmo248418.setContext(context);
stavesmo248418.draw();
smo248418v0.draw(context, stavesmo248418);
const stavesmo249441 = new VF.Stave(875, 1120, 242);
stavesmo249441.setAttribute('id', 'stavesmo249441');
stavesmo249441.setBegBarType(VF.Barline.type.NONE);
stavesmo249441.setContext(context);
stavesmo249441.draw();
smo249441v0.draw(context, stavesmo249441);
const stavesmo250431 = new VF.Stave(875, 1215, 242);
stavesmo250431.setAttribute('id', 'stavesmo250431');
stavesmo250431.setBegBarType(VF.Barline.type.NONE);
stavesmo250431.setContext(context);
stavesmo250431.draw();
smo250431v0.draw(context, stavesmo250431);
const stavesmo251382 = new VF.Stave(875, 1293, 242);
stavesmo251382.setAttribute('id', 'stavesmo251382');
stavesmo251382.setBegBarType(VF.Barline.type.NONE);
stavesmo251382.setContext(context);
stavesmo251382.draw();
smo251382v0.draw(context, stavesmo251382);
const fmtsmo24843919 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo248439v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248439v0ar = [];
const smo248419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo248419.setAttribute('id', 'smo248419');
const smo248420 = new VF.Annotation('тишь,');
smo248420.setAttribute('id', 'smo248420');
smo248420.setFont('Merriweather', 12.1, 'normal');
smo248420.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248419.addModifier(smo248420);
smo248420.addClass('lyric lyric-0');
smo248439v0ar.push(smo248419);
const smo248421 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo248421.setAttribute('id', 'smo248421');
const smo248422 = new VF.Annotation('-');
smo248422.setAttribute('id', 'smo248422');
smo248422.setFont('Merriweather', 12.1, 'normal');
smo248422.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248421.addModifier(smo248422);
smo248422.addClass('lyric lyric-0 lyric-hyphen');
smo248439v0ar.push(smo248421);
const smo248423 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo248423.setAttribute('id', 'smo248423');
smo248439v0ar.push(smo248423);
smo248439v0.addTickables(smo248439v0ar)
fmtsmo24843919.joinVoices([smo248439v0]);
const fmtsmo24946119 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo249461v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249461v0ar = [];
const smo249442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249442.setAttribute('id', 'smo249442');
smo249461v0ar.push(smo249442);
const smo249443 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo249443.setAttribute('id', 'smo249443');
smo249461v0ar.push(smo249443);
const smo249444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo249444.setAttribute('id', 'smo249444');
smo249461v0ar.push(smo249444);
const smo249445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo249445.setAttribute('id', 'smo249445');
smo249461v0ar.push(smo249445);
smo249461v0.addTickables(smo249461v0ar)
fmtsmo24946119.joinVoices([smo249461v0]);
const fmtsmo25045119 = new VF.Formatter();
//
// voices and notes for stave 2 19
const smo250451v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250451v0ar = [];
const smo250432 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250432.setAttribute('id', 'smo250432');
smo250451v0ar.push(smo250432);
const smo250433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo250433.setAttribute('id', 'smo250433');
smo250451v0ar.push(smo250433);
const smo250434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo250434.setAttribute('id', 'smo250434');
smo250451v0ar.push(smo250434);
const smo250435 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo250435.setAttribute('id', 'smo250435');
smo250451v0ar.push(smo250435);
smo250451v0.addTickables(smo250451v0ar)
fmtsmo25045119.joinVoices([smo250451v0]);
const fmtsmo25140119 = new VF.Formatter();
//
// voices and notes for stave 3 19
const smo251401v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251401v0ar = [];
const smo251383 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo251383.setAttribute('id', 'smo251383');
smo251401v0ar.push(smo251383);
const smo251384 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251384.setAttribute('id', 'smo251384');
smo251401v0ar.push(smo251384);
const smo251385 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo251385.setAttribute('id', 'smo251385');
smo251401v0ar.push(smo251385);
smo251401v0.addTickables(smo251401v0ar)
fmtsmo25140119.joinVoices([smo251401v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
 
// formatting measures in staff group smo251978
fmtsmo24843919.format([smo248439v0,smo249461v0,smo250451v0,smo251401v0], 245);
const stavesmo248439 = new VF.Stave(1117, 1005, 259);
stavesmo248439.setAttribute('id', 'stavesmo248439');
stavesmo248439.setBegBarType(VF.Barline.type.NONE);
stavesmo248439.setContext(context);
stavesmo248439.draw();
smo248439v0.draw(context, stavesmo248439);
const stavesmo249461 = new VF.Stave(1117, 1120, 259);
stavesmo249461.setAttribute('id', 'stavesmo249461');
stavesmo249461.setBegBarType(VF.Barline.type.NONE);
stavesmo249461.setContext(context);
stavesmo249461.draw();
smo249461v0.draw(context, stavesmo249461);
const stavesmo250451 = new VF.Stave(1117, 1215, 259);
stavesmo250451.setAttribute('id', 'stavesmo250451');
stavesmo250451.setBegBarType(VF.Barline.type.NONE);
stavesmo250451.setContext(context);
stavesmo250451.draw();
smo250451v0.draw(context, stavesmo250451);
const stavesmo251401 = new VF.Stave(1117, 1293, 259);
stavesmo251401.setAttribute('id', 'stavesmo251401');
stavesmo251401.setBegBarType(VF.Barline.type.NONE);
stavesmo251401.setContext(context);
stavesmo251401.draw();
smo251401v0.draw(context, stavesmo251401);
const rightsmo251978stavesmo2484393 = new VF.StaveConnector(stavesmo248439, stavesmo251401).setType(0);
rightsmo251978stavesmo2484393.setContext(context).draw();
const fmtsmo24846420 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo248464v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248464v0ar = [];
const smo248440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo248440.setAttribute('id', 'smo248440');
const smo2484400acc = new VF.Accidental('n');
smo248440.addModifier(smo2484400acc, 0);
smo248440.addModifier(new VF.Dot(), 0);
const smo248441 = new VF.Annotation('где');
smo248441.setAttribute('id', 'smo248441');
smo248441.setFont('Merriweather', 12.1, 'normal');
smo248441.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248440.addModifier(smo248441);
smo248441.addClass('lyric lyric-0');
smo248464v0ar.push(smo248440);
const smo248442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo248442.setAttribute('id', 'smo248442');
const smo248443 = new VF.Annotation('-');
smo248443.setAttribute('id', 'smo248443');
smo248443.setFont('Merriweather', 12.1, 'normal');
smo248443.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248442.addModifier(smo248443);
smo248443.addClass('lyric lyric-0 lyric-hyphen');
smo248464v0ar.push(smo248442);
const smo248444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo248444.setAttribute('id', 'smo248444');
smo248464v0ar.push(smo248444);
const smo248445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo248445.setAttribute('id', 'smo248445');
const smo248446 = new VF.Annotation('вс');
smo248446.setAttribute('id', 'smo248446');
smo248446.setFont('Merriweather', 12.1, 'normal');
smo248446.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248445.addModifier(smo248446);
smo248446.addClass('lyric lyric-0 lyric-hyphen');
smo248464v0ar.push(smo248445);
const smo248447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo248447.setAttribute('id', 'smo248447');
const smo248448 = new VF.Annotation('ю');
smo248448.setAttribute('id', 'smo248448');
smo248448.setFont('Merriweather', 12.1, 'normal');
smo248448.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248447.addModifier(smo248448);
smo248448.addClass('lyric lyric-0');
smo248464v0ar.push(smo248447);
smo248464v0.addTickables(smo248464v0ar)
fmtsmo24846420.joinVoices([smo248464v0]);
const fmtsmo24948120 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo249481v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249481v0ar = [];
const smo249462 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249462.setAttribute('id', 'smo249462');
smo249481v0ar.push(smo249462);
const smo249463 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo249463.setAttribute('id', 'smo249463');
smo249481v0ar.push(smo249463);
const smo249464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249464.setAttribute('id', 'smo249464');
smo249481v0ar.push(smo249464);
const smo249465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo249465.setAttribute('id', 'smo249465');
const smo2494650acc = new VF.Accidental('#');
smo249465.addModifier(smo2494650acc, 0);
smo249481v0ar.push(smo249465);
smo249481v0.addTickables(smo249481v0ar)
fmtsmo24948120.joinVoices([smo249481v0]);
const fmtsmo25047120 = new VF.Formatter();
//
// voices and notes for stave 2 20
const smo250471v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250471v0ar = [];
const smo250452 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250452.setAttribute('id', 'smo250452');
smo250471v0ar.push(smo250452);
const smo250453 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo250453.setAttribute('id', 'smo250453');
smo250471v0ar.push(smo250453);
const smo250454 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250454.setAttribute('id', 'smo250454');
smo250471v0ar.push(smo250454);
const smo250455 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo250455.setAttribute('id', 'smo250455');
smo250471v0ar.push(smo250455);
smo250471v0.addTickables(smo250471v0ar)
fmtsmo25047120.joinVoices([smo250471v0]);
const fmtsmo25142120 = new VF.Formatter();
//
// voices and notes for stave 3 20
const smo251421v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251421v0ar = [];
const smo251402 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo251402.setAttribute('id', 'smo251402');
smo251421v0ar.push(smo251402);
const smo251403 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251403.setAttribute('id', 'smo251403');
smo251421v0ar.push(smo251403);
const smo251404 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo251404.setAttribute('id', 'smo251404');
smo251421v0ar.push(smo251404);
const smo251405 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251405.setAttribute('id', 'smo251405');
smo251421v0ar.push(smo251405);
smo251421v0.addTickables(smo251421v0ar)
fmtsmo25142120.joinVoices([smo251421v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
const dirsmo258427 = smo248442.getStemDirection();
smo248442.setStemDirection(dirsmo258427);
smo248444.setStemDirection(dirsmo258427);
const smo258427 = new VF.Beam([smo248442,smo248444]);
 
// formatting measures in staff group smo251978
fmtsmo24846420.format([smo248464v0,smo249481v0,smo250471v0,smo251421v0], 219);
const stavesmo248464 = new VF.Stave(55, 1423, 294);
stavesmo248464.setAttribute('id', 'stavesmo248464');
stavesmo248464.setBegBarType(1);
stavesmo248464.addClef('treble');
const keysmo248464 = new VF.KeySignature('F');
keysmo248464.addToStave(stavesmo248464);
stavesmo248464.setContext(context);
stavesmo248464.draw();
smo248464v0.draw(context, stavesmo248464);
smo258427.setContext(context);
smo258427.draw();
const stavesmo249481 = new VF.Stave(55, 1534, 294);
stavesmo249481.setAttribute('id', 'stavesmo249481');
stavesmo249481.setBegBarType(1);
stavesmo249481.addClef('treble');
const keysmo249481 = new VF.KeySignature('F');
keysmo249481.addToStave(stavesmo249481);
stavesmo249481.setContext(context);
stavesmo249481.draw();
smo249481v0.draw(context, stavesmo249481);
const stavesmo250471 = new VF.Stave(55, 1617, 294);
stavesmo250471.setAttribute('id', 'stavesmo250471');
stavesmo250471.setBegBarType(1);
stavesmo250471.addClef('treble');
const keysmo250471 = new VF.KeySignature('F');
keysmo250471.addToStave(stavesmo250471);
stavesmo250471.setContext(context);
stavesmo250471.draw();
smo250471v0.draw(context, stavesmo250471);
const stavesmo251421 = new VF.Stave(55, 1711, 294);
stavesmo251421.setAttribute('id', 'stavesmo251421');
stavesmo251421.setBegBarType(1);
stavesmo251421.addClef('bass');
const keysmo251421 = new VF.KeySignature('F');
keysmo251421.addToStave(stavesmo251421);
stavesmo251421.setContext(context);
stavesmo251421.draw();
smo251421v0.draw(context, stavesmo251421);
const leftsmo251978stavesmo2484643 = new VF.StaveConnector(stavesmo248464, stavesmo251421).setType(1);
leftsmo251978stavesmo2484643.setContext(context).draw();
const fmtsmo24848621 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo248486v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248486v0ar = [];
const smo248465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo248465.setAttribute('id', 'smo248465');
const smo248466 = new VF.Annotation('ноч');
smo248466.setAttribute('id', 'smo248466');
smo248466.setFont('Merriweather', 12.1, 'normal');
smo248466.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248465.addModifier(smo248466);
smo248466.addClass('lyric lyric-0 lyric-hyphen');
smo248486v0ar.push(smo248465);
const smo248467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo248467.setAttribute('id', 'smo248467');
const smo248468 = new VF.Annotation('ку');
smo248468.setAttribute('id', 'smo248468');
smo248468.setFont('Merriweather', 12.1, 'normal');
smo248468.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248467.addModifier(smo248468);
smo248468.addClass('lyric lyric-0');
smo248486v0ar.push(smo248467);
const smo248469 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo248469.setAttribute('id', 'smo248469');
const smo248470 = new VF.Annotation('про');
smo248470.setAttribute('id', 'smo248470');
smo248470.setFont('Merriweather', 12.1, 'normal');
smo248470.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248469.addModifier(smo248470);
smo248470.addClass('lyric lyric-0');
smo248486v0ar.push(smo248469);
smo248486v0.addTickables(smo248486v0ar)
fmtsmo24848621.joinVoices([smo248486v0]);
const fmtsmo24950121 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo249501v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249501v0ar = [];
const smo249482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249482.setAttribute('id', 'smo249482');
smo249501v0ar.push(smo249482);
const smo249483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo249483.setAttribute('id', 'smo249483');
smo249501v0ar.push(smo249483);
const smo249484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249484.setAttribute('id', 'smo249484');
smo249501v0ar.push(smo249484);
const smo249485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo249485.setAttribute('id', 'smo249485');
smo249501v0ar.push(smo249485);
smo249501v0.addTickables(smo249501v0ar)
fmtsmo24950121.joinVoices([smo249501v0]);
const fmtsmo25049121 = new VF.Formatter();
//
// voices and notes for stave 2 21
const smo250491v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250491v0ar = [];
const smo250472 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250472.setAttribute('id', 'smo250472');
smo250491v0ar.push(smo250472);
const smo250473 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo250473.setAttribute('id', 'smo250473');
smo250491v0ar.push(smo250473);
const smo250474 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250474.setAttribute('id', 'smo250474');
smo250491v0ar.push(smo250474);
const smo250475 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo250475.setAttribute('id', 'smo250475');
smo250491v0ar.push(smo250475);
smo250491v0.addTickables(smo250491v0ar)
fmtsmo25049121.joinVoices([smo250491v0]);
const fmtsmo25144121 = new VF.Formatter();
//
// voices and notes for stave 3 21
const smo251441v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251441v0ar = [];
const smo251422 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo251422.setAttribute('id', 'smo251422');
smo251441v0ar.push(smo251422);
const smo251423 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251423.setAttribute('id', 'smo251423');
smo251441v0ar.push(smo251423);
const smo251424 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo251424.setAttribute('id', 'smo251424');
smo251441v0ar.push(smo251424);
const smo251425 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251425.setAttribute('id', 'smo251425');
smo251441v0ar.push(smo251425);
smo251441v0.addTickables(smo251441v0ar)
fmtsmo25144121.joinVoices([smo251441v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
 
// formatting measures in staff group smo251978
fmtsmo24848621.format([smo248486v0,smo249501v0,smo250491v0,smo251441v0], 198);
const stavesmo248486 = new VF.Stave(349, 1423, 212);
stavesmo248486.setAttribute('id', 'stavesmo248486');
stavesmo248486.setBegBarType(VF.Barline.type.NONE);
stavesmo248486.setContext(context);
stavesmo248486.draw();
smo248486v0.draw(context, stavesmo248486);
const stavesmo249501 = new VF.Stave(349, 1534, 212);
stavesmo249501.setAttribute('id', 'stavesmo249501');
stavesmo249501.setBegBarType(VF.Barline.type.NONE);
stavesmo249501.setContext(context);
stavesmo249501.draw();
smo249501v0.draw(context, stavesmo249501);
const stavesmo250491 = new VF.Stave(349, 1617, 212);
stavesmo250491.setAttribute('id', 'stavesmo250491');
stavesmo250491.setBegBarType(VF.Barline.type.NONE);
stavesmo250491.setContext(context);
stavesmo250491.draw();
smo250491v0.draw(context, stavesmo250491);
const stavesmo251441 = new VF.Stave(349, 1711, 212);
stavesmo251441.setAttribute('id', 'stavesmo251441');
stavesmo251441.setBegBarType(VF.Barline.type.NONE);
stavesmo251441.setContext(context);
stavesmo251441.draw();
smo251441v0.draw(context, stavesmo251441);
const fmtsmo24851622 = new VF.Formatter();
//
// voices and notes for stave 0 22
const smo248516v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248516v0ar = [];
const smo248487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo248487.setAttribute('id', 'smo248487');
const smo248488 = new VF.Annotation('-');
smo248488.setAttribute('id', 'smo248488');
smo248488.setFont('Merriweather', 12.1, 'normal');
smo248488.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248487.addModifier(smo248488);
smo248488.addClass('lyric lyric-0 lyric-hyphen');
smo248516v0ar.push(smo248487);
const smo248489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo248489.setAttribute('id', 'smo248489');
const smo248490 = new VF.Annotation('-');
smo248490.setAttribute('id', 'smo248490');
smo248490.setFont('Merriweather', 12.1, 'normal');
smo248490.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248489.addModifier(smo248490);
smo248490.addClass('lyric lyric-0 lyric-hyphen');
smo248516v0ar.push(smo248489);
const smo248491 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo248491.setAttribute('id', 'smo248491');
const smo248492 = new VF.Annotation('-');
smo248492.setAttribute('id', 'smo248492');
smo248492.setFont('Merriweather', 12.1, 'normal');
smo248492.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248491.addModifier(smo248492);
smo248492.addClass('lyric lyric-0 lyric-hyphen');
smo248516v0ar.push(smo248491);
const smo248493 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo248493.setAttribute('id', 'smo248493');
const smo2484930acc = new VF.Accidental('#');
smo248493.addModifier(smo2484930acc, 0);
const smo248494 = new VF.Annotation('-');
smo248494.setAttribute('id', 'smo248494');
smo248494.setFont('Merriweather', 12.1, 'normal');
smo248494.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248493.addModifier(smo248494);
smo248494.addClass('lyric lyric-0 lyric-hyphen');
smo248516v0ar.push(smo248493);
const smo248495 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo248495.setAttribute('id', 'smo248495');
const smo248496 = new VF.Annotation('-');
smo248496.setAttribute('id', 'smo248496');
smo248496.setFont('Merriweather', 12.1, 'normal');
smo248496.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248495.addModifier(smo248496);
smo248496.addClass('lyric lyric-0 lyric-hyphen');
smo248516v0ar.push(smo248495);
const smo248497 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo248497.setAttribute('id', 'smo248497');
const smo2484970acc = new VF.Accidental('n');
smo248497.addModifier(smo2484970acc, 0);
const smo248498 = new VF.Annotation('-');
smo248498.setAttribute('id', 'smo248498');
smo248498.setFont('Merriweather', 12.1, 'normal');
smo248498.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248497.addModifier(smo248498);
smo248498.addClass('lyric lyric-0 lyric-hyphen');
smo248516v0ar.push(smo248497);
const smo248499 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
smo248499.setAttribute('id', 'smo248499');
const smo2484990acc = new VF.Accidental('#');
smo248499.addModifier(smo2484990acc, 0);
const smo248500 = new VF.Annotation('по');
smo248500.setAttribute('id', 'smo248500');
smo248500.setFont('Merriweather', 12.1, 'normal');
smo248500.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248499.addModifier(smo248500);
smo248500.addClass('lyric lyric-0 lyric-hyphen');
smo248516v0ar.push(smo248499);
smo248516v0.addTickables(smo248516v0ar)
fmtsmo24851622.joinVoices([smo248516v0]);
const fmtsmo24951922 = new VF.Formatter();
//
// voices and notes for stave 1 22
const smo249519v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249519v0ar = [];
const smo249502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249502.setAttribute('id', 'smo249502');
smo249519v0ar.push(smo249502);
const smo249503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
smo249503.setAttribute('id', 'smo249503');
const smo2495030acc = new VF.Accidental('#');
smo249503.addModifier(smo2495030acc, 0);
smo249503.addModifier(new VF.Dot(), 0);
smo249519v0ar.push(smo249503);
smo249519v0.addTickables(smo249519v0ar)
fmtsmo24951922.joinVoices([smo249519v0]);
const fmtsmo25050922 = new VF.Formatter();
//
// voices and notes for stave 2 22
const smo250509v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250509v0ar = [];
const smo250492 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250492.setAttribute('id', 'smo250492');
smo250509v0ar.push(smo250492);
const smo250493 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo250493.setAttribute('id', 'smo250493');
smo250493.addModifier(new VF.Dot(), 0);
smo250509v0ar.push(smo250493);
smo250509v0.addTickables(smo250509v0ar)
fmtsmo25050922.joinVoices([smo250509v0]);
const fmtsmo25145822 = new VF.Formatter();
//
// voices and notes for stave 3 22
const smo251458v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251458v0ar = [];
const smo251442 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo251442.setAttribute('id', 'smo251442');
smo251458v0ar.push(smo251442);
smo251458v0.addTickables(smo251458v0ar)
fmtsmo25145822.joinVoices([smo251458v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
const dirsmo258444 = smo248489.getStemDirection();
smo248489.setStemDirection(dirsmo258444);
smo248491.setStemDirection(dirsmo258444);
smo248493.setStemDirection(dirsmo258444);
smo248495.setStemDirection(dirsmo258444);
const smo258444 = new VF.Beam([smo248489,smo248491,smo248493,smo248495]);
 
// formatting measures in staff group smo251978
fmtsmo24851622.format([smo248516v0,smo249519v0,smo250509v0,smo251458v0], 255);
const stavesmo248516 = new VF.Stave(561, 1423, 269);
stavesmo248516.setAttribute('id', 'stavesmo248516');
stavesmo248516.setBegBarType(VF.Barline.type.NONE);
stavesmo248516.setContext(context);
stavesmo248516.draw();
smo248516v0.draw(context, stavesmo248516);
smo258444.setContext(context);
smo258444.draw();
const stavesmo249519 = new VF.Stave(561, 1534, 269);
stavesmo249519.setAttribute('id', 'stavesmo249519');
stavesmo249519.setBegBarType(VF.Barline.type.NONE);
stavesmo249519.setContext(context);
stavesmo249519.draw();
smo249519v0.draw(context, stavesmo249519);
const stavesmo250509 = new VF.Stave(561, 1617, 269);
stavesmo250509.setAttribute('id', 'stavesmo250509');
stavesmo250509.setBegBarType(VF.Barline.type.NONE);
stavesmo250509.setContext(context);
stavesmo250509.draw();
smo250509v0.draw(context, stavesmo250509);
const stavesmo251458 = new VF.Stave(561, 1711, 269);
stavesmo251458.setAttribute('id', 'stavesmo251458');
stavesmo251458.setBegBarType(VF.Barline.type.NONE);
stavesmo251458.setContext(context);
stavesmo251458.draw();
smo251458v0.draw(context, stavesmo251458);
const fmtsmo24853523 = new VF.Formatter();
//
// voices and notes for stave 0 23
const smo248535v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248535v0ar = [];
const smo248517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo248517.setAttribute('id', 'smo248517');
smo248517.addModifier(new VF.Dot(), 0);
const smo248518 = new VF.Annotation('ешь');
smo248518.setAttribute('id', 'smo248518');
smo248518.setFont('Merriweather', 12.1, 'normal');
smo248518.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248517.addModifier(smo248518);
smo248518.addClass('lyric lyric-0');
smo248535v0ar.push(smo248517);
const smo248519 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo248519.setAttribute('id', 'smo248519');
smo248535v0ar.push(smo248519);
smo248535v0.addTickables(smo248535v0ar)
fmtsmo24853523.joinVoices([smo248535v0]);
const fmtsmo24953723 = new VF.Formatter();
//
// voices and notes for stave 1 23
const smo249537v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249537v0ar = [];
const smo249520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo249520.setAttribute('id', 'smo249520');
smo249520.addModifier(new VF.Dot(), 0);
smo249537v0ar.push(smo249520);
const smo249521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249521.setAttribute('id', 'smo249521');
smo249537v0ar.push(smo249521);
smo249537v0.addTickables(smo249537v0ar)
fmtsmo24953723.joinVoices([smo249537v0]);
const fmtsmo25052723 = new VF.Formatter();
//
// voices and notes for stave 2 23
const smo250527v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250527v0ar = [];
const smo250510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo250510.setAttribute('id', 'smo250510');
smo250510.addModifier(new VF.Dot(), 0);
smo250527v0ar.push(smo250510);
const smo250511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo250511.setAttribute('id', 'smo250511');
smo250527v0ar.push(smo250511);
smo250527v0.addTickables(smo250527v0ar)
fmtsmo25052723.joinVoices([smo250527v0]);
const fmtsmo25147623 = new VF.Formatter();
//
// voices and notes for stave 3 23
const smo251476v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251476v0ar = [];
const smo251459 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251459.setAttribute('id', 'smo251459');
smo251459.addModifier(new VF.Dot(), 0);
smo251476v0ar.push(smo251459);
const smo251460 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251460.setAttribute('id', 'smo251460');
smo251476v0ar.push(smo251460);
smo251476v0.addTickables(smo251476v0ar)
fmtsmo25147623.joinVoices([smo251476v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
 
// formatting measures in staff group smo251978
fmtsmo24853523.format([smo248535v0,smo249537v0,smo250527v0,smo251476v0], 88);
const stavesmo248535 = new VF.Stave(830, 1423, 102);
stavesmo248535.setAttribute('id', 'stavesmo248535');
stavesmo248535.setBegBarType(VF.Barline.type.NONE);
stavesmo248535.setContext(context);
stavesmo248535.draw();
smo248535v0.draw(context, stavesmo248535);
const stavesmo249537 = new VF.Stave(830, 1534, 102);
stavesmo249537.setAttribute('id', 'stavesmo249537');
stavesmo249537.setBegBarType(VF.Barline.type.NONE);
stavesmo249537.setContext(context);
stavesmo249537.draw();
smo249537v0.draw(context, stavesmo249537);
const stavesmo250527 = new VF.Stave(830, 1617, 102);
stavesmo250527.setAttribute('id', 'stavesmo250527');
stavesmo250527.setBegBarType(VF.Barline.type.NONE);
stavesmo250527.setContext(context);
stavesmo250527.draw();
smo250527v0.draw(context, stavesmo250527);
const stavesmo251476 = new VF.Stave(830, 1711, 102);
stavesmo251476.setAttribute('id', 'stavesmo251476');
stavesmo251476.setBegBarType(VF.Barline.type.NONE);
stavesmo251476.setContext(context);
stavesmo251476.draw();
smo251476v0.draw(context, stavesmo251476);
const fmtsmo24856524 = new VF.Formatter();
//
// voices and notes for stave 0 24
const smo248565v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248565v0ar = [];
const smo248536 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo248536.setAttribute('id', 'smo248536');
const smo248537 = new VF.Annotation('Со');
smo248537.setAttribute('id', 'smo248537');
smo248537.setFont('Merriweather', 12.1, 'normal');
smo248537.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248536.addModifier(smo248537);
smo248537.addClass('lyric lyric-0');
smo248565v0ar.push(smo248536);
const smo248538 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo248538.setAttribute('id', 'smo248538');
const smo248539 = new VF.Annotation('-');
smo248539.setAttribute('id', 'smo248539');
smo248539.setFont('Merriweather', 12.1, 'normal');
smo248539.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248538.addModifier(smo248539);
smo248539.addClass('lyric lyric-0 lyric-hyphen');
smo248565v0ar.push(smo248538);
const smo248540 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo248540.setAttribute('id', 'smo248540');
const smo248541 = new VF.Annotation('-');
smo248541.setAttribute('id', 'smo248541');
smo248541.setFont('Merriweather', 12.1, 'normal');
smo248541.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248540.addModifier(smo248541);
smo248541.addClass('lyric lyric-0 lyric-hyphen');
smo248565v0ar.push(smo248540);
const smo248542 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["d#/5/n"]}'))
smo248542.setAttribute('id', 'smo248542');
const smo2485420acc = new VF.Accidental('#');
smo248542.addModifier(smo2485420acc, 0);
const smo248543 = new VF.Annotation('-');
smo248543.setAttribute('id', 'smo248543');
smo248543.setFont('Merriweather', 12.1, 'normal');
smo248543.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248542.addModifier(smo248543);
smo248543.addClass('lyric lyric-0 lyric-hyphen');
smo248565v0ar.push(smo248542);
const smo248544 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo248544.setAttribute('id', 'smo248544');
const smo248545 = new VF.Annotation('-');
smo248545.setAttribute('id', 'smo248545');
smo248545.setFont('Merriweather', 12.1, 'normal');
smo248545.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248544.addModifier(smo248545);
smo248545.addClass('lyric lyric-0 lyric-hyphen');
smo248565v0ar.push(smo248544);
const smo248546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo248546.setAttribute('id', 'smo248546');
const smo248547 = new VF.Annotation('лo');
smo248547.setAttribute('id', 'smo248547');
smo248547.setFont('Merriweather', 12.1, 'normal');
smo248547.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248546.addModifier(smo248547);
smo248547.addClass('lyric lyric-0');
smo248565v0ar.push(smo248546);
const smo248548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo248548.setAttribute('id', 'smo248548');
const smo248549 = new VF.Annotation('-');
smo248549.setAttribute('id', 'smo248549');
smo248549.setFont('Merriweather', 12.1, 'normal');
smo248549.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248548.addModifier(smo248549);
smo248549.addClass('lyric lyric-0 lyric-hyphen');
smo248565v0ar.push(smo248548);
smo248565v0.addTickables(smo248565v0ar)
fmtsmo24856524.joinVoices([smo248565v0]);
const fmtsmo24955824 = new VF.Formatter();
//
// voices and notes for stave 1 24
const smo249558v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249558v0ar = [];
const smo249538 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249538.setAttribute('id', 'smo249538');
smo249558v0ar.push(smo249538);
const smo249539 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo249539.setAttribute('id', 'smo249539');
const smo249540 = new VF.Ornament('mordent_inverted');
smo249539.addModifier(smo249540, 0);
smo249558v0ar.push(smo249539);
const smo249541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
smo249541.setAttribute('id', 'smo249541');
const smo2495410acc = new VF.Accidental('#');
smo249541.addModifier(smo2495410acc, 0);
smo249558v0ar.push(smo249541);
const smo249542 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo249542.setAttribute('id', 'smo249542');
smo249558v0ar.push(smo249542);
smo249558v0.addTickables(smo249558v0ar)
fmtsmo24955824.joinVoices([smo249558v0]);
const fmtsmo25054424 = new VF.Formatter();
//
// voices and notes for stave 2 24
const smo250544v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250544v0ar = [];
const smo250528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo250528.setAttribute('id', 'smo250528');
smo250544v0ar.push(smo250528);
smo250544v0.addTickables(smo250544v0ar)
fmtsmo25054424.joinVoices([smo250544v0]);
const fmtsmo25149624 = new VF.Formatter();
//
// voices and notes for stave 3 24
const smo251496v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251496v0ar = [];
const smo251477 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo251477.setAttribute('id', 'smo251477');
smo251496v0ar.push(smo251477);
const smo251478 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251478.setAttribute('id', 'smo251478');
smo251496v0ar.push(smo251478);
const smo251479 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo251479.setAttribute('id', 'smo251479');
smo251496v0ar.push(smo251479);
const smo251480 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251480.setAttribute('id', 'smo251480');
smo251496v0ar.push(smo251480);
smo251496v0.addTickables(smo251496v0ar)
fmtsmo25149624.joinVoices([smo251496v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
const dirsmo258461 = smo248538.getStemDirection();
smo248538.setStemDirection(dirsmo258461);
smo248540.setStemDirection(dirsmo258461);
smo248542.setStemDirection(dirsmo258461);
smo248544.setStemDirection(dirsmo258461);
const smo258461 = new VF.Beam([smo248538,smo248540,smo248542,smo248544]);
 
// formatting measures in staff group smo251978
fmtsmo24856524.format([smo248565v0,smo249558v0,smo250544v0,smo251496v0], 237);
const stavesmo248565 = new VF.Stave(932, 1423, 251);
stavesmo248565.setAttribute('id', 'stavesmo248565');
stavesmo248565.setBegBarType(VF.Barline.type.NONE);
stavesmo248565.setContext(context);
stavesmo248565.draw();
smo248565v0.draw(context, stavesmo248565);
smo258461.setContext(context);
smo258461.draw();
const stavesmo249558 = new VF.Stave(932, 1534, 251);
stavesmo249558.setAttribute('id', 'stavesmo249558');
stavesmo249558.setBegBarType(VF.Barline.type.NONE);
stavesmo249558.setContext(context);
stavesmo249558.draw();
smo249558v0.draw(context, stavesmo249558);
const stavesmo250544 = new VF.Stave(932, 1617, 251);
stavesmo250544.setAttribute('id', 'stavesmo250544');
stavesmo250544.setBegBarType(VF.Barline.type.NONE);
stavesmo250544.setContext(context);
stavesmo250544.draw();
smo250544v0.draw(context, stavesmo250544);
const stavesmo251496 = new VF.Stave(932, 1711, 251);
stavesmo251496.setAttribute('id', 'stavesmo251496');
stavesmo251496.setBegBarType(VF.Barline.type.NONE);
stavesmo251496.setContext(context);
stavesmo251496.draw();
smo251496v0.draw(context, stavesmo251496);
const fmtsmo24858525 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo248585v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo248585v0ar = [];
const smo248566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo248566.setAttribute('id', 'smo248566');
const smo248567 = new VF.Annotation('вей');
smo248567.setAttribute('id', 'smo248567');
smo248567.setFont('Merriweather', 12.1, 'normal');
smo248567.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248566.addModifier(smo248567);
smo248567.addClass('lyric lyric-0');
smo248585v0ar.push(smo248566);
const smo248568 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo248568.setAttribute('id', 'smo248568');
const smo248569 = new VF.Annotation('мой');
smo248569.setAttribute('id', 'smo248569');
smo248569.setFont('Merriweather', 12.1, 'normal');
smo248569.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo248568.addModifier(smo248569);
smo248569.addClass('lyric lyric-0');
smo248585v0ar.push(smo248568);
smo248585v0.addTickables(smo248585v0ar)
fmtsmo24858525.joinVoices([smo248585v0]);
const fmtsmo24957925 = new VF.Formatter();
//
// voices and notes for stave 1 25
const smo249579v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo249579v0ar = [];
const smo249559 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo249559.setAttribute('id', 'smo249559');
smo249579v0ar.push(smo249559);
const smo249560 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo249560.setAttribute('id', 'smo249560');
const smo249561 = new VF.Ornament('mordent_inverted');
smo249560.addModifier(smo249561, 0);
smo249579v0ar.push(smo249560);
const smo249562 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo249562.setAttribute('id', 'smo249562');
smo249579v0ar.push(smo249562);
const smo249563 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo249563.setAttribute('id', 'smo249563');
smo249579v0ar.push(smo249563);
smo249579v0.addTickables(smo249579v0ar)
fmtsmo24957925.joinVoices([smo249579v0]);
const fmtsmo25056125 = new VF.Formatter();
//
// voices and notes for stave 2 25
const smo250561v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo250561v0ar = [];
const smo250545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo250545.setAttribute('id', 'smo250545');
smo250561v0ar.push(smo250545);
smo250561v0.addTickables(smo250561v0ar)
fmtsmo25056125.joinVoices([smo250561v0]);
const fmtsmo25151425 = new VF.Formatter();
//
// voices and notes for stave 3 25
const smo251514v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo251514v0ar = [];
const smo251497 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo251497.setAttribute('id', 'smo251497');
smo251514v0ar.push(smo251497);
const smo251498 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo251498.setAttribute('id', 'smo251498');
smo251514v0ar.push(smo251498);
smo251514v0.addTickables(smo251514v0ar)
fmtsmo25151425.joinVoices([smo251514v0]);
// create beam groups and tuplets for format grp smo251978 before formatting
 
// formatting measures in staff group smo251978
fmtsmo24858525.format([smo248585v0,smo249579v0,smo250561v0,smo251514v0], 177);
const stavesmo248585 = new VF.Stave(1183, 1423, 191);
stavesmo248585.setAttribute('id', 'stavesmo248585');
stavesmo248585.setBegBarType(VF.Barline.type.NONE);
stavesmo248585.setContext(context);
stavesmo248585.draw();
smo248585v0.draw(context, stavesmo248585);
const stavesmo249579 = new VF.Stave(1183, 1534, 191);
stavesmo249579.setAttribute('id', 'stavesmo249579');
stavesmo249579.setBegBarType(VF.Barline.type.NONE);
stavesmo249579.setContext(context);
stavesmo249579.draw();
smo249579v0.draw(context, stavesmo249579);
const stavesmo250561 = new VF.Stave(1183, 1617, 191);
stavesmo250561.setAttribute('id', 'stavesmo250561');
stavesmo250561.setBegBarType(VF.Barline.type.NONE);
stavesmo250561.setContext(context);
stavesmo250561.draw();
smo250561v0.draw(context, stavesmo250561);
const stavesmo251514 = new VF.Stave(1183, 1711, 191);
stavesmo251514.setAttribute('id', 'stavesmo251514');
stavesmo251514.setBegBarType(VF.Barline.type.NONE);
stavesmo251514.setContext(context);
stavesmo251514.draw();
smo251514v0.draw(context, stavesmo251514);
const rightsmo251978stavesmo2485853 = new VF.StaveConnector(stavesmo248585, stavesmo251514).setType(0);
rightsmo251978stavesmo2485853.setContext(context).draw();
// modifier from 0-18-0-0 to 0-18-0-1
const smo259314 = new VF.Curve(smo248397, smo248399, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":45},{"x":0,"y":45}],"invert":false,"position":2,"position_end":1}'));
smo259314.setContext(context).draw();
// modifier from 0-22-0-0 to 0-23-0-0
const smo259315 = new VF.TextBracket({ start: smo248487, stop: smo248517, text: 'ritard', position: 1 });
smo259315.setLine(1).setContext(context).draw();
// modifier from 2-24-0-0 to 2-25-0-0
const smo259316 = new VF.StaveTie({ first_note: smo250528, last_note: smo250545, 
          firstNote: smo250528, lastNote: smo250545, first_indices: [0], last_indices: [0]});
smo259316.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo248182').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo248184').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo248202').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo248204').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo248206').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo248224').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo248246').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo248265').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo248267').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo248269').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo248287').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo248289').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo248291').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo248309').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo248311').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo248313').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo248315').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo248317').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo248335').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo248354').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo248358').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo248376').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo248378').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo248380').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo248398').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo248401').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo248420').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo248422').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo248441').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo248443').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo248446').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo248448').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo248466').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo248468').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo248470').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo248488').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo248490').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo248492').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo248496').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo248498').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo248500').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo248518').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo248537').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo248539').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo248541').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo248543').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo248545').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo248547').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo248549').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo248567').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo248569').setAttributeNS('', 'transform', 'translate(0 15)');
}
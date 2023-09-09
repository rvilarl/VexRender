// @@ Gnossienne No 3 p 1/2  by Erik Satie
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1348.7603305785124');
svg.setAttributeNS('', 'height', '1745.4545454545453');
svg.setAttributeNS('', 'viewBox', '0 0 1484 1920');
//
// create the musical objects
VF.setMusicFont("Leland","Bravura","Gonville","Custom");
const fmtsmo723610 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo72361v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72361v0ar = [];
const smo72309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo72309.setAttribute('id', 'smo72309');
smo72361v0ar.push(smo72309);
const smo72311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo72311.setAttribute('id', 'smo72311');
smo72361v0ar.push(smo72311);
const smo72312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo72312.setAttribute('id', 'smo72312');
const smo723120acc = new VF.Accidental('#');
smo72312.addModifier(smo723120acc, 0);
smo72361v0ar.push(smo72312);
const smo72313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo72313.setAttribute('id', 'smo72313');
smo72361v0ar.push(smo72313);
const smo72314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo72314.setAttribute('id', 'smo72314');
const smo723140acc = new VF.Accidental('#');
smo72314.addModifier(smo723140acc, 0);
smo72361v0ar.push(smo72314);
const smo72315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo72315.setAttribute('id', 'smo72315');
smo72361v0ar.push(smo72315);
const smo72316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo72316.setAttribute('id', 'smo72316');
smo72361v0ar.push(smo72316);
const smo72317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72317.setAttribute('id', 'smo72317');
smo72361v0ar.push(smo72317);
const smo72318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo72318.setAttribute('id', 'smo72318');
smo72361v0ar.push(smo72318);
const smo72319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo72319.setAttribute('id', 'smo72319');
smo72361v0ar.push(smo72319);
const smo72320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo72320.setAttribute('id', 'smo72320');
smo72361v0ar.push(smo72320);
const smo72321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo72321.setAttribute('id', 'smo72321');
smo72361v0ar.push(smo72321);
const smo72322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo72322.setAttribute('id', 'smo72322');
smo72361v0ar.push(smo72322);
const smo72323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo72323.setAttribute('id', 'smo72323');
smo72361v0ar.push(smo72323);
const smo72324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72324.setAttribute('id', 'smo72324');
smo72361v0ar.push(smo72324);
const smo72325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72325.setAttribute('id', 'smo72325');
smo72361v0ar.push(smo72325);
const smo72326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72326.setAttribute('id', 'smo72326');
smo72361v0ar.push(smo72326);
const smo72327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72327.setAttribute('id', 'smo72327');
smo72361v0ar.push(smo72327);
const smo72328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72328.setAttribute('id', 'smo72328');
smo72361v0ar.push(smo72328);
const smo72329 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo72329.setAttribute('id', 'smo72329');
smo72361v0ar.push(smo72329);
const smo72330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo72330.setAttribute('id', 'smo72330');
smo72361v0ar.push(smo72330);
const smo72331 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo72331.setAttribute('id', 'smo72331');
smo72361v0ar.push(smo72331);
const smo72332 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo72332.setAttribute('id', 'smo72332');
smo72361v0ar.push(smo72332);
const smo72333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo72333.setAttribute('id', 'smo72333');
smo72361v0ar.push(smo72333);
const smo72334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo72334.setAttribute('id', 'smo72334');
smo72361v0ar.push(smo72334);
const smo72335 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo72335.setAttribute('id', 'smo72335');
smo72361v0ar.push(smo72335);
smo72361v0.addTickables(smo72361v0ar)
fmtsmo723610.joinVoices([smo72361v0]);
const smo72361v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72361v1ar = [];
const smo72336 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72336.setAttribute('id', 'smo72336');
smo72336.setStyle({ fillStyle: '#aaaaaa7f' });
smo72361v1ar.push(smo72336);
const smo72337 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo72337.setAttribute('id', 'smo72337');
smo72337.setStyle({ fillStyle: "#115511" });
smo72361v1ar.push(smo72337);
const smo72338 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo72338.setAttribute('id', 'smo72338');
smo72338.setStyle({ fillStyle: "#115511" });
smo72361v1ar.push(smo72338);
const smo72339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72339.setAttribute('id', 'smo72339');
smo72339.setStyle({ fillStyle: '#aaaaaa7f' });
smo72361v1ar.push(smo72339);
const smo72340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo72340.setAttribute('id', 'smo72340');
smo72340.setStyle({ fillStyle: "#115511" });
smo72361v1ar.push(smo72340);
const smo72341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo72341.setAttribute('id', 'smo72341');
smo72341.setStyle({ fillStyle: "#115511" });
smo72361v1ar.push(smo72341);
const smo72342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72342.setAttribute('id', 'smo72342');
smo72342.setStyle({ fillStyle: '#aaaaaa7f' });
smo72361v1ar.push(smo72342);
const smo72343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72343.setAttribute('id', 'smo72343');
smo72343.setStyle({ fillStyle: '#aaaaaa7f' });
smo72361v1ar.push(smo72343);
const smo72344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo72344.setAttribute('id', 'smo72344');
smo72344.setStyle({ fillStyle: "#115511" });
smo72361v1ar.push(smo72344);
const smo72345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo72345.setAttribute('id', 'smo72345');
smo72345.setStyle({ fillStyle: "#115511" });
smo72361v1ar.push(smo72345);
smo72361v1.addTickables(smo72361v1ar)
fmtsmo723610.joinVoices([smo72361v1]);
const fmtsmo728680 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo72868v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72868v0ar = [];
const smo72836 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo72836.setAttribute('id', 'smo72836');
smo72868v0ar.push(smo72836);
const smo72837 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo72837.setAttribute('id', 'smo72837');
smo72837.setStyle({ fillStyle: '#aaaaaa7f' });
smo72837.addModifier(new VF.Dot(), 0);
smo72868v0ar.push(smo72837);
const smo72838 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo72838.setAttribute('id', 'smo72838');
smo72868v0ar.push(smo72838);
const smo72839 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo72839.setAttribute('id', 'smo72839');
smo72839.setStyle({ fillStyle: '#aaaaaa7f' });
smo72839.addModifier(new VF.Dot(), 0);
smo72868v0ar.push(smo72839);
const smo72840 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo72840.setAttribute('id', 'smo72840');
smo72868v0ar.push(smo72840);
const smo72841 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo72841.setAttribute('id', 'smo72841');
smo72868v0ar.push(smo72841);
const smo72842 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo72842.setAttribute('id', 'smo72842');
smo72868v0ar.push(smo72842);
const smo72843 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo72843.setAttribute('id', 'smo72843');
smo72868v0ar.push(smo72843);
const smo72844 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo72844.setAttribute('id', 'smo72844');
smo72868v0ar.push(smo72844);
const smo72845 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo72845.setAttribute('id', 'smo72845');
smo72868v0ar.push(smo72845);
const smo72846 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo72846.setAttribute('id', 'smo72846');
smo72868v0ar.push(smo72846);
const smo72847 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo72847.setAttribute('id', 'smo72847');
smo72847.setStyle({ fillStyle: '#aaaaaa7f' });
smo72847.addModifier(new VF.Dot(), 0);
smo72868v0ar.push(smo72847);
smo72868v0.addTickables(smo72868v0ar)
fmtsmo728680.joinVoices([smo72868v0]);
const smo72868v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72868v1ar = [];
const smo72848 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo72848.setAttribute('id', 'smo72848');
smo72848.setStyle({ fillStyle: "#115511" });
smo72868v1ar.push(smo72848);
const smo72849 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo72849.setAttribute('id', 'smo72849');
smo72849.setStyle({ fillStyle: "#115511" });
smo72868v1ar.push(smo72849);
const smo72850 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo72850.setAttribute('id', 'smo72850');
smo72850.setStyle({ fillStyle: "#115511" });
smo72868v1ar.push(smo72850);
const smo72851 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo72851.setAttribute('id', 'smo72851');
smo72851.setStyle({ fillStyle: "#115511" });
smo72868v1ar.push(smo72851);
const smo72852 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo72852.setAttribute('id', 'smo72852');
smo72852.setStyle({ fillStyle: "#115511" });
smo72868v1ar.push(smo72852);
smo72868v1.addTickables(smo72868v1ar)
fmtsmo728680.joinVoices([smo72868v1]);
// create beam groups and tuplets for format grp smo73233 before formatting
const dirsmo74435 = smo72309.getStemDirection();
smo72309.setStemDirection(dirsmo74435);
smo72311.setStemDirection(dirsmo74435);
smo72312.setStemDirection(dirsmo74435);
smo72313.setStemDirection(dirsmo74435);
const smo74435 = new VF.Beam([smo72309,smo72311,smo72312,smo72313]);
const dirsmo74436 = smo72314.getStemDirection();
smo72314.setStemDirection(dirsmo74436);
smo72315.setStemDirection(dirsmo74436);
const smo74436 = new VF.Beam([smo72314,smo72315]);
const dirsmo74437 = smo72318.getStemDirection();
smo72318.setStemDirection(dirsmo74437);
smo72319.setStemDirection(dirsmo74437);
const smo74437 = new VF.Beam([smo72318,smo72319]);
const dirsmo74438 = smo72320.getStemDirection();
smo72320.setStemDirection(dirsmo74438);
smo72321.setStemDirection(dirsmo74438);
smo72322.setStemDirection(dirsmo74438);
smo72323.setStemDirection(dirsmo74438);
const smo74438 = new VF.Beam([smo72320,smo72321,smo72322,smo72323]);
const dirsmo74439 = smo72324.getStemDirection();
smo72324.setStemDirection(dirsmo74439);
smo72325.setStemDirection(dirsmo74439);
const smo74439 = new VF.Beam([smo72324,smo72325]);
const dirsmo74440 = smo72329.getStemDirection();
smo72329.setStemDirection(dirsmo74440);
smo72330.setStemDirection(dirsmo74440);
smo72331.setStemDirection(dirsmo74440);
smo72332.setStemDirection(dirsmo74440);
const smo74440 = new VF.Beam([smo72329,smo72330,smo72331,smo72332]);
const dirsmo74441 = smo72333.getStemDirection();
smo72333.setStemDirection(dirsmo74441);
smo72334.setStemDirection(dirsmo74441);
const smo74441 = new VF.Beam([smo72333,smo72334]);
 
// formatting measures in staff group smo73233
fmtsmo723610.format([smo72361v0,smo72361v1,smo72868v0,smo72868v1], 1094);
const stavesmo72361 = new VF.Stave(103, 187, 1174);
stavesmo72361.setAttribute('id', 'stavesmo72361');
stavesmo72361.setBegBarType(1);
stavesmo72361.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":60,"name":"Lent"}'), -1 * 35);
stavesmo72361.addClef('treble');
stavesmo72361.addTimeSignature('4/4');
stavesmo72361.setContext(context);
stavesmo72361.draw();
smo72361v0.draw(context, stavesmo72361);
smo72361v1.draw(context, stavesmo72361);
smo74435.setContext(context);
smo74435.draw();
smo74436.setContext(context);
smo74436.draw();
smo74437.setContext(context);
smo74437.draw();
smo74438.setContext(context);
smo74438.draw();
smo74439.setContext(context);
smo74439.draw();
smo74440.setContext(context);
smo74440.draw();
smo74441.setContext(context);
smo74441.draw();
const stavesmo72868 = new VF.Stave(103, 330, 1174);
stavesmo72868.setAttribute('id', 'stavesmo72868');
stavesmo72868.setBegBarType(1);
stavesmo72868.addClef('bass');
stavesmo72868.addTimeSignature('4/4');
stavesmo72868.setContext(context);
stavesmo72868.draw();
smo72868v0.draw(context, stavesmo72868);
smo72868v1.draw(context, stavesmo72868);
const leftsmo73233stavesmo723611 = new VF.StaveConnector(stavesmo72361, stavesmo72868).setType(3);
leftsmo73233stavesmo723611.setContext(context).draw();
const fmtsmo724061 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo72406v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72406v0ar = [];
const smo72362 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72362.setAttribute('id', 'smo72362');
smo72406v0ar.push(smo72362);
const smo72363 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo72363.setAttribute('id', 'smo72363');
smo72406v0ar.push(smo72363);
const smo72364 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo72364.setAttribute('id', 'smo72364');
smo72406v0ar.push(smo72364);
const smo72365 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo72365.setAttribute('id', 'smo72365');
const smo723650acc = new VF.Accidental('#');
smo72365.addModifier(smo723650acc, 0);
smo72406v0ar.push(smo72365);
const smo72366 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo72366.setAttribute('id', 'smo72366');
smo72406v0ar.push(smo72366);
const smo72367 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo72367.setAttribute('id', 'smo72367');
smo72406v0ar.push(smo72367);
const smo72368 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo72368.setAttribute('id', 'smo72368');
smo72406v0ar.push(smo72368);
const smo72369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72369.setAttribute('id', 'smo72369');
smo72406v0ar.push(smo72369);
const smo72370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72370.setAttribute('id', 'smo72370');
smo72406v0ar.push(smo72370);
const smo72371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72371.setAttribute('id', 'smo72371');
smo72406v0ar.push(smo72371);
const smo72372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72372.setAttribute('id', 'smo72372');
smo72406v0ar.push(smo72372);
const smo72373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
const smo72374 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["bn/4"],"slash":false}'))
smo72374.setAttribute('id', 'smo72374');
const ggrpsmo72373 = new VF.GraceNoteGroup([smo72374]);
ggrpsmo72373.beamNotes();
smo72373.addModifier(ggrpsmo72373, 0);
smo72373.setAttribute('id', 'smo72373');
const smo723730acc = new VF.Accidental('n');
smo72373.addModifier(smo723730acc, 0);
smo72406v0ar.push(smo72373);
const smo72375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72375.setAttribute('id', 'smo72375');
smo72406v0ar.push(smo72375);
const smo72376 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72376.setAttribute('id', 'smo72376');
smo72406v0ar.push(smo72376);
const smo72377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo72377.setAttribute('id', 'smo72377');
smo72406v0ar.push(smo72377);
const smo72378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo72378.setAttribute('id', 'smo72378');
smo72406v0ar.push(smo72378);
const smo72379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo72379.setAttribute('id', 'smo72379');
smo72406v0ar.push(smo72379);
const smo72380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72380.setAttribute('id', 'smo72380');
smo72406v0ar.push(smo72380);
const smo72381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72381.setAttribute('id', 'smo72381');
smo72406v0ar.push(smo72381);
const smo72382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72382.setAttribute('id', 'smo72382');
smo72406v0ar.push(smo72382);
const smo72383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72383.setAttribute('id', 'smo72383');
smo72406v0ar.push(smo72383);
const smo72384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
const smo72385 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["bn/4"],"slash":false}'))
smo72385.setAttribute('id', 'smo72385');
const ggrpsmo72384 = new VF.GraceNoteGroup([smo72385]);
ggrpsmo72384.beamNotes();
smo72384.addModifier(ggrpsmo72384, 0);
smo72384.setAttribute('id', 'smo72384');
smo72406v0ar.push(smo72384);
smo72406v0.addTickables(smo72406v0ar)
fmtsmo724061.joinVoices([smo72406v0]);
const smo72406v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72406v1ar = [];
const smo72386 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72386.setAttribute('id', 'smo72386');
smo72386.setStyle({ fillStyle: '#aaaaaa7f' });
smo72406v1ar.push(smo72386);
const smo72387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo72387.setAttribute('id', 'smo72387');
smo72387.setStyle({ fillStyle: "#115511" });
smo72406v1ar.push(smo72387);
const smo72388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo72388.setAttribute('id', 'smo72388');
smo72388.setStyle({ fillStyle: "#115511" });
smo72406v1ar.push(smo72388);
const smo72389 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2dddd","dots":4,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72389.setAttribute('id', 'smo72389');
smo72389.setStyle({ fillStyle: '#aaaaaa7f' });
smo72389.addModifier(new VF.Dot(), 0);
smo72389.addModifier(new VF.Dot(), 0);
smo72389.addModifier(new VF.Dot(), 0);
smo72389.addModifier(new VF.Dot(), 0);
smo72406v1ar.push(smo72389);
const smo72390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72390.setAttribute('id', 'smo72390');
smo72390.setStyle({ fillStyle: '#aaaaaa7f' });
smo72406v1ar.push(smo72390);
smo72406v1.addTickables(smo72406v1ar)
fmtsmo724061.joinVoices([smo72406v1]);
const fmtsmo729031 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo72903v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72903v0ar = [];
const smo72869 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo72869.setAttribute('id', 'smo72869');
smo72903v0ar.push(smo72869);
const smo72870 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo72870.setAttribute('id', 'smo72870');
smo72870.setStyle({ fillStyle: '#aaaaaa7f' });
smo72870.addModifier(new VF.Dot(), 0);
smo72903v0ar.push(smo72870);
const smo72871 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo72871.setAttribute('id', 'smo72871');
smo72903v0ar.push(smo72871);
const smo72872 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo72872.setAttribute('id', 'smo72872');
smo72903v0ar.push(smo72872);
const smo72873 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo72873.setAttribute('id', 'smo72873');
smo72903v0ar.push(smo72873);
const smo72874 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo72874.setAttribute('id', 'smo72874');
smo72903v0ar.push(smo72874);
const smo72875 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo72875.setAttribute('id', 'smo72875');
smo72903v0ar.push(smo72875);
const smo72876 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo72876.setAttribute('id', 'smo72876');
smo72903v0ar.push(smo72876);
const smo72877 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo72877.setAttribute('id', 'smo72877');
smo72903v0ar.push(smo72877);
const smo72878 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/3/n","bn/3/n","en/4/n"]}'))
smo72878.setAttribute('id', 'smo72878');
const smo728780acc = new VF.Accidental('#');
smo72878.addModifier(smo728780acc, 0);
smo72903v0ar.push(smo72878);
const smo72879 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/3/n","bn/3/n","en/4/n"]}'))
smo72879.setAttribute('id', 'smo72879');
smo72903v0ar.push(smo72879);
const smo72880 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo72880.setAttribute('id', 'smo72880');
smo72903v0ar.push(smo72880);
const smo72881 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo72881.setAttribute('id', 'smo72881');
smo72903v0ar.push(smo72881);
const smo72882 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo72882.setAttribute('id', 'smo72882');
smo72903v0ar.push(smo72882);
smo72903v0.addTickables(smo72903v0ar)
fmtsmo729031.joinVoices([smo72903v0]);
const smo72903v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72903v1ar = [];
const smo72883 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo72883.setAttribute('id', 'smo72883');
smo72883.setStyle({ fillStyle: "#115511" });
smo72903v1ar.push(smo72883);
const smo72884 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo72884.setAttribute('id', 'smo72884');
smo72884.setStyle({ fillStyle: "#115511" });
smo72903v1ar.push(smo72884);
const smo72885 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
smo72885.setAttribute('id', 'smo72885');
smo72885.setStyle({ fillStyle: "#115511" });
smo72903v1ar.push(smo72885);
const smo72886 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo72886.setAttribute('id', 'smo72886');
smo72886.setStyle({ fillStyle: "#115511" });
smo72903v1ar.push(smo72886);
const smo72887 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
smo72887.setAttribute('id', 'smo72887');
smo72887.setStyle({ fillStyle: "#115511" });
smo72903v1ar.push(smo72887);
smo72903v1.addTickables(smo72903v1ar)
fmtsmo729031.joinVoices([smo72903v1]);
// create beam groups and tuplets for format grp smo73233 before formatting
const dirsmo74456 = smo72363.getStemDirection();
smo72363.setStemDirection(dirsmo74456);
smo72364.setStemDirection(dirsmo74456);
const smo74456 = new VF.Beam([smo72363,smo72364]);
const dirsmo74457 = smo72365.getStemDirection();
smo72365.setStemDirection(dirsmo74457);
smo72366.setStemDirection(dirsmo74457);
smo72367.setStemDirection(dirsmo74457);
smo72368.setStemDirection(dirsmo74457);
const smo74457 = new VF.Beam([smo72365,smo72366,smo72367,smo72368]);
const dirsmo74458 = smo72369.getStemDirection();
smo72369.setStemDirection(dirsmo74458);
smo72370.setStemDirection(dirsmo74458);
const smo74458 = new VF.Beam([smo72369,smo72370]);
const dirsmo74459 = smo72375.getStemDirection();
smo72375.setStemDirection(dirsmo74459);
smo72376.setStemDirection(dirsmo74459);
const smo74459 = new VF.Beam([smo72375,smo72376]);
const dirsmo74460 = smo72377.getStemDirection();
smo72377.setStemDirection(dirsmo74460);
smo72378.setStemDirection(dirsmo74460);
const smo74460 = new VF.Beam([smo72377,smo72378]);
const dirsmo74461 = smo72380.getStemDirection();
smo72380.setStemDirection(dirsmo74461);
smo72381.setStemDirection(dirsmo74461);
const smo74461 = new VF.Beam([smo72380,smo72381]);
 
// formatting measures in staff group smo73233
fmtsmo724061.format([smo72406v0,smo72406v1,smo72903v0,smo72903v1], 1117);
const stavesmo72406 = new VF.Stave(103, 490, 1174);
stavesmo72406.setAttribute('id', 'stavesmo72406');
stavesmo72406.setBegBarType(1);
stavesmo72406.addClef('treble');
stavesmo72406.setContext(context);
stavesmo72406.draw();
smo72406v0.draw(context, stavesmo72406);
smo72406v1.draw(context, stavesmo72406);
smo74456.setContext(context);
smo74456.draw();
smo74457.setContext(context);
smo74457.draw();
smo74458.setContext(context);
smo74458.draw();
smo74459.setContext(context);
smo74459.draw();
smo74460.setContext(context);
smo74460.draw();
smo74461.setContext(context);
smo74461.draw();
const stavesmo72903 = new VF.Stave(103, 638, 1174);
stavesmo72903.setAttribute('id', 'stavesmo72903');
stavesmo72903.setBegBarType(1);
stavesmo72903.addClef('bass');
stavesmo72903.setContext(context);
stavesmo72903.draw();
smo72903v0.draw(context, stavesmo72903);
smo72903v1.draw(context, stavesmo72903);
const leftsmo73233stavesmo724061 = new VF.StaveConnector(stavesmo72406, stavesmo72903).setType(3);
leftsmo73233stavesmo724061.setContext(context).draw();
const fmtsmo724512 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo72451v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72451v0ar = [];
const smo72407 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo72407.setAttribute('id', 'smo72407');
smo72451v0ar.push(smo72407);
const smo72408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72408.setAttribute('id', 'smo72408');
smo72451v0ar.push(smo72408);
const smo72409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72409.setAttribute('id', 'smo72409');
smo72451v0ar.push(smo72409);
const smo72410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo72410.setAttribute('id', 'smo72410');
smo72451v0ar.push(smo72410);
const smo72411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo72411.setAttribute('id', 'smo72411');
smo72451v0ar.push(smo72411);
const smo72412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72412.setAttribute('id', 'smo72412');
smo72451v0ar.push(smo72412);
const smo72413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72413.setAttribute('id', 'smo72413');
smo72451v0ar.push(smo72413);
const smo72414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo72414.setAttribute('id', 'smo72414');
const smo724140acc = new VF.Accidental('#');
smo72414.addModifier(smo724140acc, 0);
smo72451v0ar.push(smo72414);
const smo72415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo72415.setAttribute('id', 'smo72415');
smo72451v0ar.push(smo72415);
const smo72416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72416.setAttribute('id', 'smo72416');
smo72451v0ar.push(smo72416);
const smo72417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo72417.setAttribute('id', 'smo72417');
smo72451v0ar.push(smo72417);
const smo72418 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72418.setAttribute('id', 'smo72418');
smo72451v0ar.push(smo72418);
const smo72419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo72419.setAttribute('id', 'smo72419');
smo72451v0ar.push(smo72419);
const smo72420 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo72420.setAttribute('id', 'smo72420');
smo72451v0ar.push(smo72420);
const smo72421 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo72421.setAttribute('id', 'smo72421');
smo72451v0ar.push(smo72421);
const smo72422 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72422.setAttribute('id', 'smo72422');
smo72451v0ar.push(smo72422);
const smo72423 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo72423.setAttribute('id', 'smo72423');
smo72451v0ar.push(smo72423);
const smo72424 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72424.setAttribute('id', 'smo72424');
smo72451v0ar.push(smo72424);
const smo72425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo72425.setAttribute('id', 'smo72425');
smo72451v0ar.push(smo72425);
const smo72426 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo72426.setAttribute('id', 'smo72426');
smo72451v0ar.push(smo72426);
const smo72427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo72427.setAttribute('id', 'smo72427');
smo72451v0ar.push(smo72427);
const smo72428 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72428.setAttribute('id', 'smo72428');
smo72451v0ar.push(smo72428);
const smo72429 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo72429.setAttribute('id', 'smo72429');
smo72451v0ar.push(smo72429);
const smo72430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo72430.setAttribute('id', 'smo72430');
smo72451v0ar.push(smo72430);
const smo72431 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo72431.setAttribute('id', 'smo72431');
smo72451v0ar.push(smo72431);
const smo72432 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo72432.setAttribute('id', 'smo72432');
smo72451v0ar.push(smo72432);
const smo72433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo72433.setAttribute('id', 'smo72433');
smo72451v0ar.push(smo72433);
const smo72434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo72434.setAttribute('id', 'smo72434');
smo72451v0ar.push(smo72434);
const smo72435 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72435.setAttribute('id', 'smo72435');
smo72451v0ar.push(smo72435);
smo72451v0.addTickables(smo72451v0ar)
fmtsmo724512.joinVoices([smo72451v0]);
const fmtsmo729352 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo72935v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72935v0ar = [];
const smo72904 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo72904.setAttribute('id', 'smo72904');
smo72935v0ar.push(smo72904);
const smo72905 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo72905.setAttribute('id', 'smo72905');
smo72935v0ar.push(smo72905);
const smo72906 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo72906.setAttribute('id', 'smo72906');
smo72935v0ar.push(smo72906);
const smo72907 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo72907.setAttribute('id', 'smo72907');
smo72935v0ar.push(smo72907);
const smo72908 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo72908.setAttribute('id', 'smo72908');
smo72935v0ar.push(smo72908);
const smo72909 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo72909.setAttribute('id', 'smo72909');
smo72935v0ar.push(smo72909);
const smo72910 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo72910.setAttribute('id', 'smo72910');
smo72935v0ar.push(smo72910);
const smo72911 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo72911.setAttribute('id', 'smo72911');
smo72935v0ar.push(smo72911);
const smo72912 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo72912.setAttribute('id', 'smo72912');
smo72935v0ar.push(smo72912);
const smo72913 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo72913.setAttribute('id', 'smo72913');
smo72935v0ar.push(smo72913);
const smo72914 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo72914.setAttribute('id', 'smo72914');
smo72935v0ar.push(smo72914);
const smo72915 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo72915.setAttribute('id', 'smo72915');
smo72935v0ar.push(smo72915);
smo72935v0.addTickables(smo72935v0ar)
fmtsmo729352.joinVoices([smo72935v0]);
const smo72935v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72935v1ar = [];
const smo72916 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
smo72916.setAttribute('id', 'smo72916');
smo72916.setStyle({ fillStyle: "#115511" });
smo72935v1ar.push(smo72916);
const smo72917 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
smo72917.setAttribute('id', 'smo72917');
smo72917.setStyle({ fillStyle: "#115511" });
smo72935v1ar.push(smo72917);
const smo72918 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
smo72918.setAttribute('id', 'smo72918');
smo72918.setStyle({ fillStyle: "#115511" });
smo72935v1ar.push(smo72918);
const smo72919 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/1/n"]}'))
smo72919.setAttribute('id', 'smo72919');
smo72919.setStyle({ fillStyle: "#115511" });
smo72935v1ar.push(smo72919);
smo72935v1.addTickables(smo72935v1ar)
fmtsmo729352.joinVoices([smo72935v1]);
// create beam groups and tuplets for format grp smo73233 before formatting
const dirsmo74477 = smo72408.getStemDirection();
smo72408.setStemDirection(dirsmo74477);
smo72409.setStemDirection(dirsmo74477);
const smo74477 = new VF.Beam([smo72408,smo72409]);
const dirsmo74478 = smo72410.getStemDirection();
smo72410.setStemDirection(dirsmo74478);
smo72411.setStemDirection(dirsmo74478);
smo72412.setStemDirection(dirsmo74478);
smo72413.setStemDirection(dirsmo74478);
const smo74478 = new VF.Beam([smo72410,smo72411,smo72412,smo72413]);
const dirsmo74479 = smo72414.getStemDirection();
smo72414.setStemDirection(dirsmo74479);
smo72415.setStemDirection(dirsmo74479);
smo72416.setStemDirection(dirsmo74479);
smo72417.setStemDirection(dirsmo74479);
const smo74479 = new VF.Beam([smo72414,smo72415,smo72416,smo72417]);
const dirsmo74480 = smo72418.getStemDirection();
smo72418.setStemDirection(dirsmo74480);
smo72419.setStemDirection(dirsmo74480);
smo72420.setStemDirection(dirsmo74480);
smo72421.setStemDirection(dirsmo74480);
const smo74480 = new VF.Beam([smo72418,smo72419,smo72420,smo72421]);
const dirsmo74481 = smo72422.getStemDirection();
smo72422.setStemDirection(dirsmo74481);
smo72423.setStemDirection(dirsmo74481);
smo72424.setStemDirection(dirsmo74481);
smo72425.setStemDirection(dirsmo74481);
const smo74481 = new VF.Beam([smo72422,smo72423,smo72424,smo72425]);
const dirsmo74482 = smo72426.getStemDirection();
smo72426.setStemDirection(dirsmo74482);
smo72427.setStemDirection(dirsmo74482);
smo72428.setStemDirection(dirsmo74482);
smo72429.setStemDirection(dirsmo74482);
const smo74482 = new VF.Beam([smo72426,smo72427,smo72428,smo72429]);
const dirsmo74483 = smo72430.getStemDirection();
smo72430.setStemDirection(dirsmo74483);
smo72431.setStemDirection(dirsmo74483);
smo72432.setStemDirection(dirsmo74483);
smo72433.setStemDirection(dirsmo74483);
const smo74483 = new VF.Beam([smo72430,smo72431,smo72432,smo72433]);
 
// formatting measures in staff group smo73233
fmtsmo724512.format([smo72451v0,smo72935v0,smo72935v1], 1117);
const stavesmo72451 = new VF.Stave(103, 768, 1173);
stavesmo72451.setAttribute('id', 'stavesmo72451');
stavesmo72451.setBegBarType(1);
stavesmo72451.addClef('treble');
stavesmo72451.setContext(context);
stavesmo72451.draw();
smo72451v0.draw(context, stavesmo72451);
smo74477.setContext(context);
smo74477.draw();
smo74478.setContext(context);
smo74478.draw();
smo74479.setContext(context);
smo74479.draw();
smo74480.setContext(context);
smo74480.draw();
smo74481.setContext(context);
smo74481.draw();
smo74482.setContext(context);
smo74482.draw();
smo74483.setContext(context);
smo74483.draw();
const stavesmo72935 = new VF.Stave(103, 896, 1173);
stavesmo72935.setAttribute('id', 'stavesmo72935');
stavesmo72935.setBegBarType(1);
stavesmo72935.addClef('bass');
stavesmo72935.setContext(context);
stavesmo72935.draw();
smo72935v0.draw(context, stavesmo72935);
smo72935v1.draw(context, stavesmo72935);
const leftsmo73233stavesmo724511 = new VF.StaveConnector(stavesmo72451, stavesmo72935).setType(3);
leftsmo73233stavesmo724511.setContext(context).draw();
const fmtsmo724873 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo72487v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72487v0ar = [];
const smo72452 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72452.setAttribute('id', 'smo72452');
smo72487v0ar.push(smo72452);
const smo72453 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo72453.setAttribute('id', 'smo72453');
smo72487v0ar.push(smo72453);
const smo72454 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo72454.setAttribute('id', 'smo72454');
smo72487v0ar.push(smo72454);
const smo72455 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo72455.setAttribute('id', 'smo72455');
const smo724550acc = new VF.Accidental('#');
smo72455.addModifier(smo724550acc, 0);
smo72487v0ar.push(smo72455);
const smo72456 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo72456.setAttribute('id', 'smo72456');
smo72487v0ar.push(smo72456);
const smo72457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo72457.setAttribute('id', 'smo72457');
const smo724570acc = new VF.Accidental('#');
smo72457.addModifier(smo724570acc, 0);
smo72487v0ar.push(smo72457);
const smo72458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo72458.setAttribute('id', 'smo72458');
smo72487v0ar.push(smo72458);
const smo72459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo72459.setAttribute('id', 'smo72459');
smo72487v0ar.push(smo72459);
const smo72460 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72460.setAttribute('id', 'smo72460');
smo72487v0ar.push(smo72460);
const smo72461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72461.setAttribute('id', 'smo72461');
smo72487v0ar.push(smo72461);
const smo72462 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72462.setAttribute('id', 'smo72462');
smo72487v0ar.push(smo72462);
const smo72463 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo72463.setAttribute('id', 'smo72463');
smo72487v0ar.push(smo72463);
const smo72464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo72464.setAttribute('id', 'smo72464');
smo72487v0ar.push(smo72464);
const smo72465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo72465.setAttribute('id', 'smo72465');
smo72487v0ar.push(smo72465);
const smo72466 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo72466.setAttribute('id', 'smo72466');
smo72487v0ar.push(smo72466);
const smo72467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo72467.setAttribute('id', 'smo72467');
const smo724670acc = new VF.Accidental('#');
smo72467.addModifier(smo724670acc, 0);
smo72487v0ar.push(smo72467);
const smo72468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo72468.setAttribute('id', 'smo72468');
smo72487v0ar.push(smo72468);
const smo72469 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo72469.setAttribute('id', 'smo72469');
smo72487v0ar.push(smo72469);
const smo72470 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72470.setAttribute('id', 'smo72470');
smo72487v0ar.push(smo72470);
const smo72471 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72471.setAttribute('id', 'smo72471');
smo72487v0ar.push(smo72471);
smo72487v0.addTickables(smo72487v0ar)
fmtsmo724873.joinVoices([smo72487v0]);
const fmtsmo729713 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo72971v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72971v0ar = [];
const smo72936 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo72936.setAttribute('id', 'smo72936');
smo72971v0ar.push(smo72936);
const smo72937 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo72937.setAttribute('id', 'smo72937');
smo72971v0ar.push(smo72937);
const smo72938 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo72938.setAttribute('id', 'smo72938');
smo72971v0ar.push(smo72938);
const smo72939 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo72939.setAttribute('id', 'smo72939');
smo72971v0ar.push(smo72939);
const smo72940 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo72940.setAttribute('id', 'smo72940');
smo72971v0ar.push(smo72940);
const smo72941 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo72941.setAttribute('id', 'smo72941');
smo72971v0ar.push(smo72941);
const smo72942 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo72942.setAttribute('id', 'smo72942');
smo72971v0ar.push(smo72942);
const smo72943 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo72943.setAttribute('id', 'smo72943');
smo72971v0ar.push(smo72943);
const smo72944 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo72944.setAttribute('id', 'smo72944');
smo72971v0ar.push(smo72944);
const smo72945 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo72945.setAttribute('id', 'smo72945');
smo72971v0ar.push(smo72945);
const smo72946 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo72946.setAttribute('id', 'smo72946');
const smo729460acc = new VF.Accidental('#');
smo72946.addModifier(smo729460acc, 0);
smo72971v0ar.push(smo72946);
const smo72947 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo72947.setAttribute('id', 'smo72947');
smo72971v0ar.push(smo72947);
const smo72948 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo72948.setAttribute('id', 'smo72948');
smo72971v0ar.push(smo72948);
const smo72949 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo72949.setAttribute('id', 'smo72949');
smo72971v0ar.push(smo72949);
const smo72950 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo72950.setAttribute('id', 'smo72950');
smo72971v0ar.push(smo72950);
smo72971v0.addTickables(smo72971v0ar)
fmtsmo729713.joinVoices([smo72971v0]);
const smo72971v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72971v1ar = [];
const smo72951 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo72951.setAttribute('id', 'smo72951');
smo72951.setStyle({ fillStyle: "#115511" });
smo72971v1ar.push(smo72951);
const smo72952 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo72952.setAttribute('id', 'smo72952');
smo72952.setStyle({ fillStyle: "#115511" });
smo72971v1ar.push(smo72952);
const smo72953 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo72953.setAttribute('id', 'smo72953');
smo72953.setStyle({ fillStyle: "#115511" });
smo72971v1ar.push(smo72953);
const smo72954 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/1/n"]}'))
smo72954.setAttribute('id', 'smo72954');
smo72954.setStyle({ fillStyle: "#115511" });
smo72971v1ar.push(smo72954);
const smo72955 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/1/n"]}'))
smo72955.setAttribute('id', 'smo72955');
smo72955.setStyle({ fillStyle: "#115511" });
smo72971v1ar.push(smo72955);
smo72971v1.addTickables(smo72971v1ar)
fmtsmo729713.joinVoices([smo72971v1]);
// create beam groups and tuplets for format grp smo73233 before formatting
const dirsmo74497 = smo72453.getStemDirection();
smo72453.setStemDirection(dirsmo74497);
smo72454.setStemDirection(dirsmo74497);
smo72455.setStemDirection(dirsmo74497);
smo72456.setStemDirection(dirsmo74497);
const smo74497 = new VF.Beam([smo72453,smo72454,smo72455,smo72456]);
const dirsmo74498 = smo72457.getStemDirection();
smo72457.setStemDirection(dirsmo74498);
smo72458.setStemDirection(dirsmo74498);
const smo74498 = new VF.Beam([smo72457,smo72458]);
const dirsmo74499 = smo72461.getStemDirection();
smo72461.setStemDirection(dirsmo74499);
smo72462.setStemDirection(dirsmo74499);
const smo74499 = new VF.Beam([smo72461,smo72462]);
const dirsmo74500 = smo72463.getStemDirection();
smo72463.setStemDirection(dirsmo74500);
smo72464.setStemDirection(dirsmo74500);
smo72465.setStemDirection(dirsmo74500);
smo72466.setStemDirection(dirsmo74500);
const smo74500 = new VF.Beam([smo72463,smo72464,smo72465,smo72466]);
const dirsmo74501 = smo72467.getStemDirection();
smo72467.setStemDirection(dirsmo74501);
smo72468.setStemDirection(dirsmo74501);
const smo74501 = new VF.Beam([smo72467,smo72468]);
 
// formatting measures in staff group smo73233
fmtsmo724873.format([smo72487v0,smo72971v0,smo72971v1], 1117);
const stavesmo72487 = new VF.Stave(103, 1035, 1173);
stavesmo72487.setAttribute('id', 'stavesmo72487');
stavesmo72487.setBegBarType(1);
stavesmo72487.addClef('treble');
stavesmo72487.setContext(context);
stavesmo72487.draw();
smo72487v0.draw(context, stavesmo72487);
smo74497.setContext(context);
smo74497.draw();
smo74498.setContext(context);
smo74498.draw();
smo74499.setContext(context);
smo74499.draw();
smo74500.setContext(context);
smo74500.draw();
smo74501.setContext(context);
smo74501.draw();
const stavesmo72971 = new VF.Stave(103, 1164, 1173);
stavesmo72971.setAttribute('id', 'stavesmo72971');
stavesmo72971.setBegBarType(1);
stavesmo72971.addClef('bass');
stavesmo72971.setContext(context);
stavesmo72971.draw();
smo72971v0.draw(context, stavesmo72971);
smo72971v1.draw(context, stavesmo72971);
const leftsmo73233stavesmo724871 = new VF.StaveConnector(stavesmo72487, stavesmo72971).setType(3);
leftsmo73233stavesmo724871.setContext(context).draw();
const fmtsmo725314 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo72531v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72531v0ar = [];
const smo72488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo72488.setAttribute('id', 'smo72488');
smo72531v0ar.push(smo72488);
const smo72489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo72489.setAttribute('id', 'smo72489');
smo72531v0ar.push(smo72489);
const smo72490 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo72490.setAttribute('id', 'smo72490');
const smo724900acc = new VF.Accidental('#');
smo72490.addModifier(smo724900acc, 0);
smo72531v0ar.push(smo72490);
const smo72491 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo72491.setAttribute('id', 'smo72491');
smo72531v0ar.push(smo72491);
const smo72492 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo72492.setAttribute('id', 'smo72492');
const smo724920acc = new VF.Accidental('#');
smo72492.addModifier(smo724920acc, 0);
smo72531v0ar.push(smo72492);
const smo72493 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo72493.setAttribute('id', 'smo72493');
smo72531v0ar.push(smo72493);
const smo72494 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo72494.setAttribute('id', 'smo72494');
smo72531v0ar.push(smo72494);
const smo72495 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72495.setAttribute('id', 'smo72495');
smo72531v0ar.push(smo72495);
const smo72496 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72496.setAttribute('id', 'smo72496');
smo72531v0ar.push(smo72496);
const smo72497 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72497.setAttribute('id', 'smo72497');
smo72531v0ar.push(smo72497);
const smo72498 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo72498.setAttribute('id', 'smo72498');
smo72531v0ar.push(smo72498);
const smo72499 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo72499.setAttribute('id', 'smo72499');
smo72531v0ar.push(smo72499);
const smo72500 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo72500.setAttribute('id', 'smo72500');
smo72531v0ar.push(smo72500);
const smo72501 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo72501.setAttribute('id', 'smo72501');
smo72531v0ar.push(smo72501);
const smo72502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo72502.setAttribute('id', 'smo72502');
const smo725020acc = new VF.Accidental('#');
smo72502.addModifier(smo725020acc, 0);
smo72531v0ar.push(smo72502);
const smo72503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo72503.setAttribute('id', 'smo72503');
smo72531v0ar.push(smo72503);
const smo72504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo72504.setAttribute('id', 'smo72504');
smo72531v0ar.push(smo72504);
const smo72505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72505.setAttribute('id', 'smo72505');
smo72531v0ar.push(smo72505);
const smo72506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
const smo72507 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["f#/4"],"slash":false}'))
smo72507.setAttribute('id', 'smo72507');
const acc0smo72507 = new VF.Accidental('#');
smo72507.addModifier(acc0smo72507, 0)
const ggrpsmo72506 = new VF.GraceNoteGroup([smo72507]);
ggrpsmo72506.beamNotes();
smo72506.addModifier(ggrpsmo72506, 0);
smo72506.setAttribute('id', 'smo72506');
const smo725060acc = new VF.Accidental('n');
smo72506.addModifier(smo725060acc, 0);
smo72531v0ar.push(smo72506);
const smo72508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo72508.setAttribute('id', 'smo72508');
smo72531v0ar.push(smo72508);
const smo72509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo72509.setAttribute('id', 'smo72509');
smo72531v0ar.push(smo72509);
const smo72510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo72510.setAttribute('id', 'smo72510');
smo72531v0ar.push(smo72510);
const smo72511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo72511.setAttribute('id', 'smo72511');
const smo725110acc = new VF.Accidental('#');
smo72511.addModifier(smo725110acc, 0);
smo72531v0ar.push(smo72511);
const smo72512 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72512.setAttribute('id', 'smo72512');
smo72531v0ar.push(smo72512);
const smo72513 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo72513.setAttribute('id', 'smo72513');
smo72531v0ar.push(smo72513);
const smo72514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo72514.setAttribute('id', 'smo72514');
smo72531v0ar.push(smo72514);
const smo72515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo72515.setAttribute('id', 'smo72515');
smo72531v0ar.push(smo72515);
smo72531v0.addTickables(smo72531v0ar)
fmtsmo725314.joinVoices([smo72531v0]);
const fmtsmo730074 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo73007v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73007v0ar = [];
const smo72972 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo72972.setAttribute('id', 'smo72972');
smo73007v0ar.push(smo72972);
const smo72973 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo72973.setAttribute('id', 'smo72973');
smo73007v0ar.push(smo72973);
const smo72974 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo72974.setAttribute('id', 'smo72974');
smo73007v0ar.push(smo72974);
const smo72975 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo72975.setAttribute('id', 'smo72975');
smo73007v0ar.push(smo72975);
const smo72976 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo72976.setAttribute('id', 'smo72976');
smo73007v0ar.push(smo72976);
const smo72977 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo72977.setAttribute('id', 'smo72977');
smo73007v0ar.push(smo72977);
const smo72978 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo72978.setAttribute('id', 'smo72978');
smo73007v0ar.push(smo72978);
const smo72979 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo72979.setAttribute('id', 'smo72979');
const smo729790acc = new VF.Accidental('#');
smo72979.addModifier(smo729790acc, 0);
smo73007v0ar.push(smo72979);
const smo72980 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo72980.setAttribute('id', 'smo72980');
smo73007v0ar.push(smo72980);
const smo72981 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo72981.setAttribute('id', 'smo72981');
smo73007v0ar.push(smo72981);
const smo72982 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","c#/4/n","f#/4/n"]}'))
smo72982.setAttribute('id', 'smo72982');
const smo729821acc = new VF.Accidental('#');
smo72982.addModifier(smo729821acc, 1);
const smo729822acc = new VF.Accidental('#');
smo72982.addModifier(smo729822acc, 2);
smo73007v0ar.push(smo72982);
const smo72983 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","c#/4/n","f#/4/n"]}'))
smo72983.setAttribute('id', 'smo72983');
smo73007v0ar.push(smo72983);
const smo72984 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo72984.setAttribute('id', 'smo72984');
smo73007v0ar.push(smo72984);
const smo72985 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo72985.setAttribute('id', 'smo72985');
smo73007v0ar.push(smo72985);
const smo72986 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo72986.setAttribute('id', 'smo72986');
smo73007v0ar.push(smo72986);
smo73007v0.addTickables(smo73007v0ar)
fmtsmo730074.joinVoices([smo73007v0]);
const smo73007v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73007v1ar = [];
const smo72987 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo72987.setAttribute('id', 'smo72987');
smo72987.setStyle({ fillStyle: "#115511" });
smo73007v1ar.push(smo72987);
const smo72988 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo72988.setAttribute('id', 'smo72988');
smo72988.setStyle({ fillStyle: "#115511" });
smo73007v1ar.push(smo72988);
const smo72989 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/1/n"]}'))
smo72989.setAttribute('id', 'smo72989');
smo72989.setStyle({ fillStyle: "#115511" });
smo73007v1ar.push(smo72989);
const smo72990 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["f#/1/n"]}'))
smo72990.setAttribute('id', 'smo72990');
smo72990.setStyle({ fillStyle: "#115511" });
const smo729900acc = new VF.Accidental('#');
smo72990.addModifier(smo729900acc, 0);
smo73007v1ar.push(smo72990);
const smo72991 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo72991.setAttribute('id', 'smo72991');
smo72991.setStyle({ fillStyle: "#115511" });
smo73007v1ar.push(smo72991);
smo73007v1.addTickables(smo73007v1ar)
fmtsmo730074.joinVoices([smo73007v1]);
// create beam groups and tuplets for format grp smo73233 before formatting
const dirsmo74517 = smo72488.getStemDirection();
smo72488.setStemDirection(dirsmo74517);
smo72489.setStemDirection(dirsmo74517);
smo72490.setStemDirection(dirsmo74517);
smo72491.setStemDirection(dirsmo74517);
const smo74517 = new VF.Beam([smo72488,smo72489,smo72490,smo72491]);
const dirsmo74518 = smo72492.getStemDirection();
smo72492.setStemDirection(dirsmo74518);
smo72493.setStemDirection(dirsmo74518);
const smo74518 = new VF.Beam([smo72492,smo72493]);
const dirsmo74519 = smo72496.getStemDirection();
smo72496.setStemDirection(dirsmo74519);
smo72497.setStemDirection(dirsmo74519);
const smo74519 = new VF.Beam([smo72496,smo72497]);
const dirsmo74520 = smo72498.getStemDirection();
smo72498.setStemDirection(dirsmo74520);
smo72499.setStemDirection(dirsmo74520);
smo72500.setStemDirection(dirsmo74520);
smo72501.setStemDirection(dirsmo74520);
const smo74520 = new VF.Beam([smo72498,smo72499,smo72500,smo72501]);
const dirsmo74521 = smo72502.getStemDirection();
smo72502.setStemDirection(dirsmo74521);
smo72503.setStemDirection(dirsmo74521);
const smo74521 = new VF.Beam([smo72502,smo72503]);
const dirsmo74522 = smo72508.getStemDirection();
smo72508.setStemDirection(dirsmo74522);
smo72509.setStemDirection(dirsmo74522);
smo72510.setStemDirection(dirsmo74522);
smo72511.setStemDirection(dirsmo74522);
const smo74522 = new VF.Beam([smo72508,smo72509,smo72510,smo72511]);
const dirsmo74523 = smo72512.getStemDirection();
smo72512.setStemDirection(dirsmo74523);
smo72513.setStemDirection(dirsmo74523);
smo72514.setStemDirection(dirsmo74523);
smo72515.setStemDirection(dirsmo74523);
const smo74523 = new VF.Beam([smo72512,smo72513,smo72514,smo72515]);
 
// formatting measures in staff group smo73233
fmtsmo725314.format([smo72531v0,smo73007v0,smo73007v1], 1117);
const stavesmo72531 = new VF.Stave(103, 1298, 1174);
stavesmo72531.setAttribute('id', 'stavesmo72531');
stavesmo72531.setBegBarType(1);
stavesmo72531.addClef('treble');
stavesmo72531.setContext(context);
stavesmo72531.draw();
smo72531v0.draw(context, stavesmo72531);
smo74517.setContext(context);
smo74517.draw();
smo74518.setContext(context);
smo74518.draw();
smo74519.setContext(context);
smo74519.draw();
smo74520.setContext(context);
smo74520.draw();
smo74521.setContext(context);
smo74521.draw();
smo74522.setContext(context);
smo74522.draw();
smo74523.setContext(context);
smo74523.draw();
const stavesmo73007 = new VF.Stave(103, 1436, 1174);
stavesmo73007.setAttribute('id', 'stavesmo73007');
stavesmo73007.setBegBarType(1);
stavesmo73007.addClef('bass');
stavesmo73007.setContext(context);
stavesmo73007.draw();
smo73007v0.draw(context, stavesmo73007);
smo73007v1.draw(context, stavesmo73007);
const leftsmo73233stavesmo725311 = new VF.StaveConnector(stavesmo72531, stavesmo73007).setType(3);
leftsmo73233stavesmo725311.setContext(context).draw();
const fmtsmo725755 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo72575v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72575v0ar = [];
const smo72532 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72532.setAttribute('id', 'smo72532');
smo72575v0ar.push(smo72532);
const smo72533 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo72533.setAttribute('id', 'smo72533');
const smo725330acc = new VF.Accidental('#');
smo72533.addModifier(smo725330acc, 0);
smo72575v0ar.push(smo72533);
const smo72534 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo72534.setAttribute('id', 'smo72534');
smo72575v0ar.push(smo72534);
const smo72535 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo72535.setAttribute('id', 'smo72535');
const smo725350acc = new VF.Accidental('#');
smo72535.addModifier(smo725350acc, 0);
smo72575v0ar.push(smo72535);
const smo72536 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo72536.setAttribute('id', 'smo72536');
smo72575v0ar.push(smo72536);
const smo72537 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo72537.setAttribute('id', 'smo72537');
smo72575v0ar.push(smo72537);
const smo72538 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo72538.setAttribute('id', 'smo72538');
smo72575v0ar.push(smo72538);
const smo72539 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo72539.setAttribute('id', 'smo72539');
smo72575v0ar.push(smo72539);
const smo72540 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72540.setAttribute('id', 'smo72540');
smo72575v0ar.push(smo72540);
const smo72541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo72541.setAttribute('id', 'smo72541');
const smo725410acc = new VF.Accidental('#');
smo72541.addModifier(smo725410acc, 0);
smo72575v0ar.push(smo72541);
const smo72542 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo72542.setAttribute('id', 'smo72542');
smo72575v0ar.push(smo72542);
const smo72543 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo72543.setAttribute('id', 'smo72543');
smo72575v0ar.push(smo72543);
const smo72544 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72544.setAttribute('id', 'smo72544');
smo72575v0ar.push(smo72544);
const smo72545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo72545.setAttribute('id', 'smo72545');
smo72575v0ar.push(smo72545);
const smo72546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo72546.setAttribute('id', 'smo72546');
smo72575v0ar.push(smo72546);
const smo72547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo72547.setAttribute('id', 'smo72547');
smo72575v0ar.push(smo72547);
const smo72548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo72548.setAttribute('id', 'smo72548');
smo72575v0ar.push(smo72548);
const smo72549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo72549.setAttribute('id', 'smo72549');
smo72575v0ar.push(smo72549);
const smo72550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo72550.setAttribute('id', 'smo72550');
smo72575v0ar.push(smo72550);
const smo72551 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo72551.setAttribute('id', 'smo72551');
smo72575v0ar.push(smo72551);
const smo72552 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72552.setAttribute('id', 'smo72552');
smo72575v0ar.push(smo72552);
const smo72553 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo72553.setAttribute('id', 'smo72553');
smo72575v0ar.push(smo72553);
const smo72554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo72554.setAttribute('id', 'smo72554');
smo72575v0ar.push(smo72554);
const smo72555 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo72555.setAttribute('id', 'smo72555');
smo72575v0ar.push(smo72555);
const smo72556 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo72556.setAttribute('id', 'smo72556');
smo72575v0ar.push(smo72556);
const smo72557 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo72557.setAttribute('id', 'smo72557');
smo72575v0ar.push(smo72557);
const smo72558 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo72558.setAttribute('id', 'smo72558');
smo72575v0ar.push(smo72558);
const smo72559 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72559.setAttribute('id', 'smo72559');
smo72575v0ar.push(smo72559);
smo72575v0.addTickables(smo72575v0ar)
fmtsmo725755.joinVoices([smo72575v0]);
const fmtsmo730395 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo73039v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73039v0ar = [];
const smo73008 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73008.setAttribute('id', 'smo73008');
smo73039v0ar.push(smo73008);
const smo73009 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo73009.setAttribute('id', 'smo73009');
smo73039v0ar.push(smo73009);
const smo73010 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo73010.setAttribute('id', 'smo73010');
smo73039v0ar.push(smo73010);
const smo73011 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73011.setAttribute('id', 'smo73011');
smo73039v0ar.push(smo73011);
const smo73012 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo73012.setAttribute('id', 'smo73012');
smo73039v0ar.push(smo73012);
const smo73013 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo73013.setAttribute('id', 'smo73013');
smo73039v0ar.push(smo73013);
const smo73014 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73014.setAttribute('id', 'smo73014');
smo73039v0ar.push(smo73014);
const smo73015 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo73015.setAttribute('id', 'smo73015');
smo73039v0ar.push(smo73015);
const smo73016 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo73016.setAttribute('id', 'smo73016');
smo73039v0ar.push(smo73016);
const smo73017 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73017.setAttribute('id', 'smo73017');
smo73039v0ar.push(smo73017);
const smo73018 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo73018.setAttribute('id', 'smo73018');
const smo730180acc = new VF.Accidental('#');
smo73018.addModifier(smo730180acc, 0);
smo73039v0ar.push(smo73018);
const smo73019 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo73019.setAttribute('id', 'smo73019');
smo73039v0ar.push(smo73019);
smo73039v0.addTickables(smo73039v0ar)
fmtsmo730395.joinVoices([smo73039v0]);
const smo73039v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73039v1ar = [];
const smo73020 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo73020.setAttribute('id', 'smo73020');
smo73020.setStyle({ fillStyle: "#115511" });
smo73039v1ar.push(smo73020);
const smo73021 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo73021.setAttribute('id', 'smo73021');
smo73021.setStyle({ fillStyle: "#115511" });
smo73039v1ar.push(smo73021);
const smo73022 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo73022.setAttribute('id', 'smo73022');
smo73022.setStyle({ fillStyle: "#115511" });
smo73039v1ar.push(smo73022);
const smo73023 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/1/n"]}'))
smo73023.setAttribute('id', 'smo73023');
smo73023.setStyle({ fillStyle: "#115511" });
smo73039v1ar.push(smo73023);
smo73039v1.addTickables(smo73039v1ar)
fmtsmo730395.joinVoices([smo73039v1]);
// create beam groups and tuplets for format grp smo73233 before formatting
const dirsmo74539 = smo72532.getStemDirection();
smo72532.setStemDirection(dirsmo74539);
smo72533.setStemDirection(dirsmo74539);
smo72534.setStemDirection(dirsmo74539);
smo72535.setStemDirection(dirsmo74539);
const smo74539 = new VF.Beam([smo72532,smo72533,smo72534,smo72535]);
const dirsmo74540 = smo72536.getStemDirection();
smo72536.setStemDirection(dirsmo74540);
smo72537.setStemDirection(dirsmo74540);
smo72538.setStemDirection(dirsmo74540);
smo72539.setStemDirection(dirsmo74540);
const smo74540 = new VF.Beam([smo72536,smo72537,smo72538,smo72539]);
const dirsmo74541 = smo72540.getStemDirection();
smo72540.setStemDirection(dirsmo74541);
smo72541.setStemDirection(dirsmo74541);
smo72542.setStemDirection(dirsmo74541);
smo72543.setStemDirection(dirsmo74541);
const smo74541 = new VF.Beam([smo72540,smo72541,smo72542,smo72543]);
const dirsmo74542 = smo72544.getStemDirection();
smo72544.setStemDirection(dirsmo74542);
smo72545.setStemDirection(dirsmo74542);
smo72546.setStemDirection(dirsmo74542);
smo72547.setStemDirection(dirsmo74542);
const smo74542 = new VF.Beam([smo72544,smo72545,smo72546,smo72547]);
const dirsmo74543 = smo72548.getStemDirection();
smo72548.setStemDirection(dirsmo74543);
smo72549.setStemDirection(dirsmo74543);
smo72550.setStemDirection(dirsmo74543);
smo72551.setStemDirection(dirsmo74543);
const smo74543 = new VF.Beam([smo72548,smo72549,smo72550,smo72551]);
const dirsmo74544 = smo72552.getStemDirection();
smo72552.setStemDirection(dirsmo74544);
smo72553.setStemDirection(dirsmo74544);
smo72554.setStemDirection(dirsmo74544);
smo72555.setStemDirection(dirsmo74544);
const smo74544 = new VF.Beam([smo72552,smo72553,smo72554,smo72555]);
const dirsmo74545 = smo72556.getStemDirection();
smo72556.setStemDirection(dirsmo74545);
smo72557.setStemDirection(dirsmo74545);
const smo74545 = new VF.Beam([smo72556,smo72557]);
 
// formatting measures in staff group smo73233
fmtsmo725755.format([smo72575v0,smo73039v0,smo73039v1], 1117);
const stavesmo72575 = new VF.Stave(103, 1621, 1174);
stavesmo72575.setAttribute('id', 'stavesmo72575');
stavesmo72575.setBegBarType(1);
stavesmo72575.addClef('treble');
stavesmo72575.setContext(context);
stavesmo72575.draw();
smo72575v0.draw(context, stavesmo72575);
smo74539.setContext(context);
smo74539.draw();
smo74540.setContext(context);
smo74540.draw();
smo74541.setContext(context);
smo74541.draw();
smo74542.setContext(context);
smo74542.draw();
smo74543.setContext(context);
smo74543.draw();
smo74544.setContext(context);
smo74544.draw();
smo74545.setContext(context);
smo74545.draw();
const stavesmo73039 = new VF.Stave(103, 1734, 1174);
stavesmo73039.setAttribute('id', 'stavesmo73039');
stavesmo73039.setBegBarType(1);
stavesmo73039.addClef('bass');
stavesmo73039.setContext(context);
stavesmo73039.draw();
smo73039v0.draw(context, stavesmo73039);
smo73039v1.draw(context, stavesmo73039);
const leftsmo73233stavesmo725751 = new VF.StaveConnector(stavesmo72575, stavesmo73039).setType(3);
leftsmo73233stavesmo725751.setContext(context).draw();
// modifier from 0-0-0-5 to 0-0-0-6
const smo74737 = new VF.StaveTie({ first_note: smo72315, last_note: smo72316, 
          firstNote: smo72315, lastNote: smo72316, first_indices: [0], last_indices: [0]});
smo74737.setContext(context).draw();
// modifier from 0-0-0-15 to 0-0-0-16
const smo74738 = new VF.StaveTie({ first_note: smo72325, last_note: smo72326, 
          firstNote: smo72325, lastNote: smo72326, first_indices: [0], last_indices: [0]});
smo74738.setContext(context).draw();
// modifier from 0-0-0-24 to 0-0-0-25
const smo74739 = new VF.StaveTie({ first_note: smo72334, last_note: smo72335, 
          firstNote: smo72334, lastNote: smo72335, first_indices: [0], last_indices: [0]});
smo74739.setContext(context).draw();
// modifier from 0-1-0-8 to 0-1-0-9
const smo74740 = new VF.StaveTie({ first_note: smo72370, last_note: smo72371, 
          firstNote: smo72370, lastNote: smo72371, first_indices: [0], last_indices: [0]});
smo74740.setContext(context).draw();
// modifier from 0-1-0-15 to 0-1-0-16
const smo74741 = new VF.StaveTie({ first_note: smo72378, last_note: smo72379, 
          firstNote: smo72378, lastNote: smo72379, first_indices: [0], last_indices: [0]});
smo74741.setContext(context).draw();
// modifier from 0-1-0-18 to 0-1-0-19
const smo74742 = new VF.StaveTie({ first_note: smo72381, last_note: smo72382, 
          firstNote: smo72381, lastNote: smo72382, first_indices: [0], last_indices: [0]});
smo74742.setContext(context).draw();
// modifier from 0-1-0-21 to 0-2-0-0
const smo74743 = new VF.StaveTie({ first_note: smo72384, last_note: null, 
          firstNote: smo72384, lastNote: null, first_indices: [0], last_indices: [0]});
smo74743.setContext(context).draw();
// modifier from 0-1-0-21 to 0-2-0-0
const smo74744 = new VF.StaveTie({ first_note: null, last_note: smo72407, 
          firstNote: null, lastNote: smo72407, first_indices: [0], last_indices: [0]});
smo74744.setContext(context).draw();
// modifier from 0-2-0-26 to 0-2-0-27
const smo74745 = new VF.StaveTie({ first_note: smo72433, last_note: smo72434, 
          firstNote: smo72433, lastNote: smo72434, first_indices: [0], last_indices: [0]});
smo74745.setContext(context).draw();
// modifier from 0-3-0-6 to 0-3-0-7
const smo74746 = new VF.StaveTie({ first_note: smo72458, last_note: smo72459, 
          firstNote: smo72458, lastNote: smo72459, first_indices: [0], last_indices: [0]});
smo74746.setContext(context).draw();
// modifier from 0-3-0-16 to 0-3-0-17
const smo74747 = new VF.StaveTie({ first_note: smo72468, last_note: smo72469, 
          firstNote: smo72468, lastNote: smo72469, first_indices: [0], last_indices: [0]});
smo74747.setContext(context).draw();
// modifier from 0-4-0-5 to 0-4-0-6
const smo74748 = new VF.StaveTie({ first_note: smo72493, last_note: smo72494, 
          firstNote: smo72493, lastNote: smo72494, first_indices: [0], last_indices: [0]});
smo74748.setContext(context).draw();
// modifier from 0-4-0-15 to 0-4-0-16
const smo74749 = new VF.StaveTie({ first_note: smo72503, last_note: smo72504, 
          firstNote: smo72503, lastNote: smo72504, first_indices: [0], last_indices: [0]});
smo74749.setContext(context).draw();
// modifier from 0-5-0-25 to 0-5-0-26
const smo74750 = new VF.StaveTie({ first_note: smo72557, last_note: smo72558, 
          firstNote: smo72557, lastNote: smo72558, first_indices: [0], last_indices: [0]});
smo74750.setContext(context).draw();
// modifier from 0-4-0-19 to 0-5-0-26
const smo74751 = new VF.Curve(smo72508, null, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":20,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":2,"position_end":1}'));
smo74751.setContext(context).draw();
// modifier from 0-4-0-19 to 0-5-0-26
const smo74752 = new VF.Curve(null, smo72558, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":20,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":2,"position_end":1}'));
smo74752.setContext(context).draw();
// modifier from 0-3-0-1 to 0-3-0-7
const smo74753 = new VF.Curve(smo72453, smo72459, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo74753.setContext(context).draw();
// modifier from 0-0-0-0 to 0-0-0-6
const smo74754 = new VF.Curve(smo72309, smo72316, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":67,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":1,"position_end":1}'));
smo74754.setContext(context).draw();
// modifier from 0-0-0-8 to 0-0-0-16
const smo74755 = new VF.Curve(smo72318, smo72326, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":35,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"position_end":2}'));
smo74755.setContext(context).draw();
// modifier from 0-0-0-19 to 0-0-0-25
const smo74756 = new VF.Curve(smo72329, smo72335, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":13,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"position_end":2}'));
smo74756.setContext(context).draw();
// modifier from 0-1-0-1 to 0-1-0-9
const smo74757 = new VF.Curve(smo72363, smo72371, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":16,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"position_end":2}'));
smo74757.setContext(context).draw();
// modifier from 0-2-0-1 to 0-2-0-27
const smo74758 = new VF.Curve(smo72408, smo72434, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":5,"cps":[{"x":0,"y":100},{"x":0,"y":80}],"invert":true,"position":1,"position_end":1}'));
smo74758.setContext(context).draw();
// modifier from 0-1-0-11 to 0-1-0-19
const smo74759 = new VF.Curve(smo72373, smo72382, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":5,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"position_end":2}'));
smo74759.setContext(context).draw();
// modifier from 0-3-0-9 to 0-3-0-17
const smo74760 = new VF.Curve(smo72461, smo72469, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":57},{"x":0,"y":45}],"invert":true,"position":1,"position_end":2}'));
smo74760.setContext(context).draw();
// modifier from 0-4-0-0 to 0-4-0-6
const smo74761 = new VF.Curve(smo72488, smo72494, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo74761.setContext(context).draw();
// modifier from 0-4-0-8 to 0-4-0-16
const smo74762 = new VF.Curve(smo72496, smo72504, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":15,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo74762.setContext(context).draw();
}
// @@ The Entertainer p 3/2  by Scott Joplin
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
const fmtsmo11144760 = new VF.Formatter();
//
// voices and notes for stave 0 60
const smo111447v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111447v0ar = [];
const smo111426 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo111426.setAttribute('id', 'smo111426');
const smo1114260acc = new VF.Accidental('n');
smo111426.addModifier(smo1114260acc, 0);
smo111447v0ar.push(smo111426);
const smo111427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/5/n"]}'))
smo111427.setAttribute('id', 'smo111427');
const smo1114270acc = new VF.Accidental('b');
smo111427.addModifier(smo1114270acc, 0);
smo111447v0ar.push(smo111427);
const smo111428 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
smo111428.setAttribute('id', 'smo111428');
const smo1114280acc = new VF.Accidental('n');
smo111428.addModifier(smo1114280acc, 0);
smo111447v0ar.push(smo111428);
const smo111429 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/6/n"]}'))
smo111429.setAttribute('id', 'smo111429');
const smo1114290acc = new VF.Accidental('n');
smo111429.addModifier(smo1114290acc, 0);
smo111447v0ar.push(smo111429);
const smo111430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/6/n"]}'))
smo111430.setAttribute('id', 'smo111430');
smo111447v0ar.push(smo111430);
const smo111431 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
smo111431.setAttribute('id', 'smo111431');
smo111447v0ar.push(smo111431);
const smo111432 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
smo111432.setAttribute('id', 'smo111432');
smo111447v0ar.push(smo111432);
const smo111433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
smo111433.setAttribute('id', 'smo111433');
smo111447v0ar.push(smo111433);
smo111447v0.addTickables(smo111447v0ar)
fmtsmo11144760.joinVoices([smo111447v0]);
const fmtsmo11419360 = new VF.Formatter();
//
// voices and notes for stave 1 60
const smo114193v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114193v0ar = [];
const smo114176 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo114176.setAttribute('id', 'smo114176');
const smo1141760acc = new VF.Accidental('n');
smo114176.addModifier(smo1141760acc, 0);
smo114193v0ar.push(smo114176);
const smo114177 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n","dn/4/n","en/4/n"]}'))
smo114177.setAttribute('id', 'smo114177');
const smo1141770acc = new VF.Accidental('n');
smo114177.addModifier(smo1141770acc, 0);
const smo1141772acc = new VF.Accidental('n');
smo114177.addModifier(smo1141772acc, 2);
smo114193v0ar.push(smo114177);
const smo114178 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n"]}'))
smo114178.setAttribute('id', 'smo114178');
const smo1141780acc = new VF.Accidental('b');
smo114178.addModifier(smo1141780acc, 0);
smo114193v0ar.push(smo114178);
const smo114179 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n","dn/4/n","en/4/n"]}'))
smo114179.setAttribute('id', 'smo114179');
smo114193v0ar.push(smo114179);
smo114193v0.addTickables(smo114193v0ar)
fmtsmo11419360.joinVoices([smo114193v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115641 = smo111426.getStemDirection();
smo111426.setStemDirection(dirsmo115641);
smo111427.setStemDirection(dirsmo115641);
smo111428.setStemDirection(dirsmo115641);
smo111429.setStemDirection(dirsmo115641);
const smo115641 = new VF.Beam([smo111426,smo111427,smo111428,smo111429]);
const dirsmo115642 = smo111430.getStemDirection();
smo111430.setStemDirection(dirsmo115642);
smo111431.setStemDirection(dirsmo115642);
smo111432.setStemDirection(dirsmo115642);
smo111433.setStemDirection(dirsmo115642);
const smo115642 = new VF.Beam([smo111430,smo111431,smo111432,smo111433]);
const dirsmo115645 = smo114176.getStemDirection();
smo114176.setStemDirection(dirsmo115645);
smo114177.setStemDirection(dirsmo115645);
const smo115645 = new VF.Beam([smo114176,smo114177]);
const dirsmo115646 = smo114178.getStemDirection();
smo114178.setStemDirection(dirsmo115646);
smo114179.setStemDirection(dirsmo115646);
const smo115646 = new VF.Beam([smo114178,smo114179]);
 
// formatting measures in staff group smo109454
fmtsmo11144760.format([smo111447v0,smo114193v0], 242);
const stavesmo111447 = new VF.Stave(73, 396, 328);
stavesmo111447.setAttribute('id', 'stavesmo111447');
stavesmo111447.setBegBarType(1);
stavesmo111447.addClef('treble');
const keysmo111447 = new VF.KeySignature('Bb');
keysmo111447.addToStave(stavesmo111447);
stavesmo111447.setContext(context);
stavesmo111447.draw();
smo111447v0.draw(context, stavesmo111447);
smo115641.setContext(context);
smo115641.draw();
smo115642.setContext(context);
smo115642.draw();
const stavesmo114193 = new VF.Stave(73, 556, 328);
stavesmo114193.setAttribute('id', 'stavesmo114193');
stavesmo114193.setBegBarType(1);
stavesmo114193.addClef('bass');
const keysmo114193 = new VF.KeySignature('Bb');
keysmo114193.addToStave(stavesmo114193);
stavesmo114193.setContext(context);
stavesmo114193.draw();
smo114193v0.draw(context, stavesmo114193);
smo115645.setContext(context);
smo115645.draw();
smo115646.setContext(context);
smo115646.draw();
const leftsmo109454stavesmo1114471 = new VF.StaveConnector(stavesmo111447, stavesmo114193).setType(3);
leftsmo109454stavesmo1114471.setContext(context).draw();
const fmtsmo11146361 = new VF.Formatter();
//
// voices and notes for stave 0 61
const smo111463v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111463v0ar = [];
const smo111448 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo111448.setAttribute('id', 'smo111448');
smo111463v0ar.push(smo111448);
const smo111449 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
smo111449.setAttribute('id', 'smo111449');
smo111463v0ar.push(smo111449);
smo111463v0.addTickables(smo111463v0ar)
fmtsmo11146361.joinVoices([smo111463v0]);
const fmtsmo11421061 = new VF.Formatter();
//
// voices and notes for stave 1 61
const smo114210v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114210v0ar = [];
const smo114194 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo114194.setAttribute('id', 'smo114194');
const smo1141942acc = new VF.Accidental('n');
smo114194.addModifier(smo1141942acc, 2);
smo114210v0ar.push(smo114194);
const smo114195 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo114195.setAttribute('id', 'smo114195');
smo114210v0ar.push(smo114195);
const smo114196 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo114196.setAttribute('id', 'smo114196');
smo114210v0ar.push(smo114196);
smo114210v0.addTickables(smo114210v0ar)
fmtsmo11421061.joinVoices([smo114210v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115651 = smo114195.getStemDirection();
smo114195.setStemDirection(dirsmo115651);
smo114196.setStemDirection(dirsmo115651);
const smo115651 = new VF.Beam([smo114195,smo114196]);
 
// formatting measures in staff group smo109454
fmtsmo11146361.format([smo111463v0,smo114210v0], 274);
const stavesmo111463 = new VF.Stave(401, 396, 288);
stavesmo111463.setAttribute('id', 'stavesmo111463');
stavesmo111463.setBegBarType(VF.Barline.type.NONE);
stavesmo111463.setContext(context);
stavesmo111463.draw();
smo111463v0.draw(context, stavesmo111463);
const stavesmo114210 = new VF.Stave(401, 556, 288);
stavesmo114210.setAttribute('id', 'stavesmo114210');
stavesmo114210.setBegBarType(VF.Barline.type.NONE);
stavesmo114210.setContext(context);
stavesmo114210.draw();
smo114210v0.draw(context, stavesmo114210);
smo115651.setContext(context);
smo115651.draw();
const fmtsmo11148262 = new VF.Formatter();
//
// voices and notes for stave 0 62
const smo111482v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111482v0ar = [];
const smo111464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n"]}'))
smo111464.setAttribute('id', 'smo111464');
smo111482v0ar.push(smo111464);
const smo111465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/5/n"]}'))
smo111465.setAttribute('id', 'smo111465');
const smo1114650acc = new VF.Accidental('b');
smo111465.addModifier(smo1114650acc, 0);
smo111482v0ar.push(smo111465);
const smo111466 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n"]}'))
smo111466.setAttribute('id', 'smo111466');
const smo1114661acc = new VF.Accidental('n');
smo111466.addModifier(smo1114661acc, 1);
smo111482v0ar.push(smo111466);
const smo111467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n"]}'))
smo111467.setAttribute('id', 'smo111467');
smo111482v0ar.push(smo111467);
const smo111468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n","cn/6/n"]}'))
smo111468.setAttribute('id', 'smo111468');
smo111482v0ar.push(smo111468);
smo111482v0.addTickables(smo111482v0ar)
fmtsmo11148262.joinVoices([smo111482v0]);
const fmtsmo11422862 = new VF.Formatter();
//
// voices and notes for stave 1 62
const smo114228v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114228v0ar = [];
const smo114211 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo114211.setAttribute('id', 'smo114211');
smo114228v0ar.push(smo114211);
const smo114212 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo114212.setAttribute('id', 'smo114212');
smo114228v0ar.push(smo114212);
const smo114213 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo114213.setAttribute('id', 'smo114213');
smo114228v0ar.push(smo114213);
const smo114214 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo114214.setAttribute('id', 'smo114214');
smo114228v0ar.push(smo114214);
smo114228v0.addTickables(smo114228v0ar)
fmtsmo11422862.joinVoices([smo114228v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115654 = smo111464.getStemDirection();
smo111464.setStemDirection(dirsmo115654);
smo111465.setStemDirection(dirsmo115654);
smo111466.setStemDirection(dirsmo115654);
const smo115654 = new VF.Beam([smo111464,smo111465,smo111466]);
const dirsmo115655 = smo111467.getStemDirection();
smo111467.setStemDirection(dirsmo115655);
smo111468.setStemDirection(dirsmo115655);
const smo115655 = new VF.Beam([smo111467,smo111468]);
const dirsmo115658 = smo114211.getStemDirection();
smo114211.setStemDirection(dirsmo115658);
smo114212.setStemDirection(dirsmo115658);
const smo115658 = new VF.Beam([smo114211,smo114212]);
const dirsmo115659 = smo114213.getStemDirection();
smo114213.setStemDirection(dirsmo115659);
smo114214.setStemDirection(dirsmo115659);
const smo115659 = new VF.Beam([smo114213,smo114214]);
 
// formatting measures in staff group smo109454
fmtsmo11148262.format([smo111482v0,smo114228v0], 274);
const stavesmo111482 = new VF.Stave(689, 396, 288);
stavesmo111482.setAttribute('id', 'stavesmo111482');
stavesmo111482.setBegBarType(VF.Barline.type.NONE);
stavesmo111482.setContext(context);
stavesmo111482.draw();
smo111482v0.draw(context, stavesmo111482);
smo115654.setContext(context);
smo115654.draw();
smo115655.setContext(context);
smo115655.draw();
const stavesmo114228 = new VF.Stave(689, 556, 288);
stavesmo114228.setAttribute('id', 'stavesmo114228');
stavesmo114228.setBegBarType(VF.Barline.type.NONE);
stavesmo114228.setContext(context);
stavesmo114228.draw();
smo114228v0.draw(context, stavesmo114228);
smo115658.setContext(context);
smo115658.draw();
smo115659.setContext(context);
smo115659.draw();
const fmtsmo11150363 = new VF.Formatter();
//
// voices and notes for stave 0 63
const smo111503v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111503v0ar = [];
const smo111483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","bb/5/n","dn/6/n"]}'))
smo111483.setAttribute('id', 'smo111483');
smo111503v0ar.push(smo111483);
smo111503v0.addTickables(smo111503v0ar)
fmtsmo11150363.joinVoices([smo111503v0]);
const smo111503v1 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111503v1ar = [];
const smo111484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo111484.setAttribute('id', 'smo111484');
smo111484.setStyle({ fillStyle: "#115511" });
smo111503v1ar.push(smo111484);
const smo111485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo111485.setAttribute('id', 'smo111485');
smo111485.setStyle({ fillStyle: "#115511" });
smo111503v1ar.push(smo111485);
const smo111486 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo111486.setAttribute('id', 'smo111486');
smo111486.setStyle({ fillStyle: "#115511" });
smo111503v1ar.push(smo111486);
const smo111487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo111487.setAttribute('id', 'smo111487');
smo111487.setStyle({ fillStyle: "#115511" });
smo111503v1ar.push(smo111487);
const smo111488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111488.setAttribute('id', 'smo111488');
smo111488.setStyle({ fillStyle: "#115511" });
smo111503v1ar.push(smo111488);
const smo111489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo111489.setAttribute('id', 'smo111489');
smo111489.setStyle({ fillStyle: "#115511" });
smo111503v1ar.push(smo111489);
smo111503v1.addTickables(smo111503v1ar)
fmtsmo11150363.joinVoices([smo111503v1]);
const fmtsmo11424663 = new VF.Formatter();
//
// voices and notes for stave 1 63
const smo114246v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114246v0ar = [];
const smo114229 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n"]}'))
smo114229.setAttribute('id', 'smo114229');
smo114246v0ar.push(smo114229);
const smo114230 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n","fn/4/n"]}'))
smo114230.setAttribute('id', 'smo114230');
smo114246v0ar.push(smo114230);
const smo114231 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo114231.setAttribute('id', 'smo114231');
smo114246v0ar.push(smo114231);
const smo114232 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n","fn/4/n"]}'))
smo114232.setAttribute('id', 'smo114232');
smo114246v0ar.push(smo114232);
smo114246v0.addTickables(smo114246v0ar)
fmtsmo11424663.joinVoices([smo114246v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115662 = smo111485.getStemDirection();
smo111485.setStemDirection(dirsmo115662);
smo111486.setStemDirection(dirsmo115662);
const smo115662 = new VF.Beam([smo111485,smo111486]);
const dirsmo115663 = smo111487.getStemDirection();
smo111487.setStemDirection(dirsmo115663);
smo111488.setStemDirection(dirsmo115663);
smo111489.setStemDirection(dirsmo115663);
const smo115663 = new VF.Beam([smo111487,smo111488,smo111489]);
const dirsmo115666 = smo114229.getStemDirection();
smo114229.setStemDirection(dirsmo115666);
smo114230.setStemDirection(dirsmo115666);
const smo115666 = new VF.Beam([smo114229,smo114230]);
const dirsmo115667 = smo114231.getStemDirection();
smo114231.setStemDirection(dirsmo115667);
smo114232.setStemDirection(dirsmo115667);
const smo115667 = new VF.Beam([smo114231,smo114232]);
 
// formatting measures in staff group smo109454
fmtsmo11150363.format([smo111503v0,smo111503v1,smo114246v0], 274);
const stavesmo111503 = new VF.Stave(977, 396, 288);
stavesmo111503.setAttribute('id', 'stavesmo111503');
stavesmo111503.setBegBarType(VF.Barline.type.NONE);
stavesmo111503.setContext(context);
stavesmo111503.draw();
smo111503v0.draw(context, stavesmo111503);
smo111503v1.draw(context, stavesmo111503);
smo115662.setContext(context);
smo115662.draw();
smo115663.setContext(context);
smo115663.draw();
const stavesmo114246 = new VF.Stave(977, 556, 288);
stavesmo114246.setAttribute('id', 'stavesmo114246');
stavesmo114246.setBegBarType(VF.Barline.type.NONE);
stavesmo114246.setContext(context);
stavesmo114246.draw();
smo114246v0.draw(context, stavesmo114246);
smo115666.setContext(context);
smo115666.draw();
smo115667.setContext(context);
smo115667.draw();
const fmtsmo11152264 = new VF.Formatter();
//
// voices and notes for stave 0 64
const smo111522v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111522v0ar = [];
const smo111504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n"]}'))
smo111504.setAttribute('id', 'smo111504');
smo111522v0ar.push(smo111504);
const smo111505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo111505.setAttribute('id', 'smo111505');
const smo1115050acc = new VF.Accidental('n');
smo111505.addModifier(smo1115050acc, 0);
smo111522v0ar.push(smo111505);
const smo111506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n"]}'))
smo111506.setAttribute('id', 'smo111506');
smo111522v0ar.push(smo111506);
const smo111507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n"]}'))
smo111507.setAttribute('id', 'smo111507');
smo111522v0ar.push(smo111507);
const smo111508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","an/5/n"]}'))
smo111508.setAttribute('id', 'smo111508');
smo111522v0ar.push(smo111508);
smo111522v0.addTickables(smo111522v0ar)
fmtsmo11152264.joinVoices([smo111522v0]);
const fmtsmo11426464 = new VF.Formatter();
//
// voices and notes for stave 1 64
const smo114264v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114264v0ar = [];
const smo114247 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
smo114247.setAttribute('id', 'smo114247');
smo114264v0ar.push(smo114247);
const smo114248 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo114248.setAttribute('id', 'smo114248');
smo114264v0ar.push(smo114248);
const smo114249 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo114249.setAttribute('id', 'smo114249');
smo114264v0ar.push(smo114249);
const smo114250 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo114250.setAttribute('id', 'smo114250');
smo114264v0ar.push(smo114250);
smo114264v0.addTickables(smo114264v0ar)
fmtsmo11426464.joinVoices([smo114264v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115670 = smo111504.getStemDirection();
smo111504.setStemDirection(dirsmo115670);
smo111505.setStemDirection(dirsmo115670);
smo111506.setStemDirection(dirsmo115670);
const smo115670 = new VF.Beam([smo111504,smo111505,smo111506]);
const dirsmo115671 = smo111507.getStemDirection();
smo111507.setStemDirection(dirsmo115671);
smo111508.setStemDirection(dirsmo115671);
const smo115671 = new VF.Beam([smo111507,smo111508]);
const dirsmo115674 = smo114247.getStemDirection();
smo114247.setStemDirection(dirsmo115674);
smo114248.setStemDirection(dirsmo115674);
const smo115674 = new VF.Beam([smo114247,smo114248]);
const dirsmo115675 = smo114249.getStemDirection();
smo114249.setStemDirection(dirsmo115675);
smo114250.setStemDirection(dirsmo115675);
const smo115675 = new VF.Beam([smo114249,smo114250]);
 
// formatting measures in staff group smo109454
fmtsmo11152264.format([smo111522v0,smo114264v0], 274);
const stavesmo111522 = new VF.Stave(1265, 396, 288);
stavesmo111522.setAttribute('id', 'stavesmo111522');
stavesmo111522.setBegBarType(VF.Barline.type.NONE);
stavesmo111522.setContext(context);
stavesmo111522.draw();
smo111522v0.draw(context, stavesmo111522);
smo115670.setContext(context);
smo115670.draw();
smo115671.setContext(context);
smo115671.draw();
const stavesmo114264 = new VF.Stave(1265, 556, 288);
stavesmo114264.setAttribute('id', 'stavesmo114264');
stavesmo114264.setBegBarType(VF.Barline.type.NONE);
stavesmo114264.setContext(context);
stavesmo114264.draw();
smo114264v0.draw(context, stavesmo114264);
smo115674.setContext(context);
smo115674.draw();
smo115675.setContext(context);
smo115675.draw();
const fmtsmo11154565 = new VF.Formatter();
//
// voices and notes for stave 0 65
const smo111545v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111545v0ar = [];
const smo111523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","gn/5/n","bb/5/n"]}'))
smo111523.setAttribute('id', 'smo111523');
smo111545v0ar.push(smo111523);
const smo111524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","gn/5/n","bb/5/n"]}'))
smo111524.setAttribute('id', 'smo111524');
smo111524.addModifier(new VF.Dot(), 0);
smo111524.addModifier(new VF.Dot(), 1);
smo111524.addModifier(new VF.Dot(), 2);
smo111545v0ar.push(smo111524);
const smo111525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo111525.setAttribute('id', 'smo111525');
smo111545v0ar.push(smo111525);
smo111545v0.addTickables(smo111545v0ar)
fmtsmo11154565.joinVoices([smo111545v0]);
const smo111545v1 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111545v1ar = [];
const smo111526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo111526.setAttribute('id', 'smo111526');
smo111526.setStyle({ fillStyle: "#115511" });
smo111545v1ar.push(smo111526);
const smo111527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo111527.setAttribute('id', 'smo111527');
smo111527.setStyle({ fillStyle: "#115511" });
smo111545v1ar.push(smo111527);
const smo111528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n"]}'))
smo111528.setAttribute('id', 'smo111528');
smo111528.setStyle({ fillStyle: "#115511" });
const smo1115280acc = new VF.Accidental('b');
smo111528.addModifier(smo1115280acc, 0);
smo111545v1ar.push(smo111528);
const smo111529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo111529.setAttribute('id', 'smo111529');
smo111529.setStyle({ fillStyle: "#115511" });
const smo1115290acc = new VF.Accidental('n');
smo111529.addModifier(smo1115290acc, 0);
smo111545v1ar.push(smo111529);
const smo111530 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo111530.setAttribute('id', 'smo111530');
smo111530.setStyle({ fillStyle: "#115511" });
smo111545v1ar.push(smo111530);
const smo111531 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo111531.setAttribute('id', 'smo111531');
smo111531.setStyle({ fillStyle: "#115511" });
smo111545v1ar.push(smo111531);
smo111545v1.addTickables(smo111545v1ar)
fmtsmo11154565.joinVoices([smo111545v1]);
const fmtsmo11428265 = new VF.Formatter();
//
// voices and notes for stave 1 65
const smo114282v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114282v0ar = [];
const smo114265 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo114265.setAttribute('id', 'smo114265');
smo114282v0ar.push(smo114265);
const smo114266 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo114266.setAttribute('id', 'smo114266');
smo114282v0ar.push(smo114266);
const smo114267 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo114267.setAttribute('id', 'smo114267');
smo114282v0ar.push(smo114267);
const smo114268 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo114268.setAttribute('id', 'smo114268');
smo114282v0ar.push(smo114268);
smo114282v0.addTickables(smo114282v0ar)
fmtsmo11428265.joinVoices([smo114282v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115678 = smo111524.getStemDirection();
smo111524.setStemDirection(dirsmo115678);
smo111525.setStemDirection(dirsmo115678);
const smo115678 = new VF.Beam([smo111524,smo111525]);
const dirsmo115679 = smo111527.getStemDirection();
smo111527.setStemDirection(dirsmo115679);
smo111528.setStemDirection(dirsmo115679);
const smo115679 = new VF.Beam([smo111527,smo111528]);
const dirsmo115680 = smo111529.getStemDirection();
smo111529.setStemDirection(dirsmo115680);
smo111530.setStemDirection(dirsmo115680);
smo111531.setStemDirection(dirsmo115680);
const smo115680 = new VF.Beam([smo111529,smo111530,smo111531]);
const dirsmo115683 = smo114265.getStemDirection();
smo114265.setStemDirection(dirsmo115683);
smo114266.setStemDirection(dirsmo115683);
const smo115683 = new VF.Beam([smo114265,smo114266]);
const dirsmo115684 = smo114267.getStemDirection();
smo114267.setStemDirection(dirsmo115684);
smo114268.setStemDirection(dirsmo115684);
const smo115684 = new VF.Beam([smo114267,smo114268]);
 
// formatting measures in staff group smo109454
fmtsmo11154565.format([smo111545v0,smo111545v1,smo114282v0], 274);
const stavesmo111545 = new VF.Stave(1553, 396, 288);
stavesmo111545.setAttribute('id', 'stavesmo111545');
stavesmo111545.setBegBarType(VF.Barline.type.NONE);
stavesmo111545.setContext(context);
stavesmo111545.draw();
smo111545v0.draw(context, stavesmo111545);
smo111545v1.draw(context, stavesmo111545);
smo115678.setContext(context);
smo115678.draw();
smo115679.setContext(context);
smo115679.draw();
smo115680.setContext(context);
smo115680.draw();
const stavesmo114282 = new VF.Stave(1553, 556, 288);
stavesmo114282.setAttribute('id', 'stavesmo114282');
stavesmo114282.setBegBarType(VF.Barline.type.NONE);
stavesmo114282.setContext(context);
stavesmo114282.draw();
smo114282v0.draw(context, stavesmo114282);
smo115683.setContext(context);
smo115683.draw();
smo115684.setContext(context);
smo115684.draw();
const rightsmo109454stavesmo1115451 = new VF.StaveConnector(stavesmo111545, stavesmo114282).setType(0);
rightsmo109454stavesmo1115451.setContext(context).draw();
const fmtsmo11156566 = new VF.Formatter();
//
// voices and notes for stave 0 66
const smo111565v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111565v0ar = [];
const smo111546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo111546.setAttribute('id', 'smo111546');
smo111565v0ar.push(smo111546);
const smo111547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo111547.setAttribute('id', 'smo111547');
smo111565v0ar.push(smo111547);
const smo111548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo111548.setAttribute('id', 'smo111548');
smo111565v0ar.push(smo111548);
const smo111549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo111549.setAttribute('id', 'smo111549');
smo111565v0ar.push(smo111549);
const smo111550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo111550.setAttribute('id', 'smo111550');
smo111565v0ar.push(smo111550);
const smo111551 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo111551.setAttribute('id', 'smo111551');
smo111565v0ar.push(smo111551);
smo111565v0.addTickables(smo111565v0ar)
fmtsmo11156566.joinVoices([smo111565v0]);
const fmtsmo11430066 = new VF.Formatter();
//
// voices and notes for stave 1 66
const smo114300v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114300v0ar = [];
const smo114283 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo114283.setAttribute('id', 'smo114283');
smo114300v0ar.push(smo114283);
const smo114284 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo114284.setAttribute('id', 'smo114284');
smo114300v0ar.push(smo114284);
const smo114285 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo114285.setAttribute('id', 'smo114285');
smo114300v0ar.push(smo114285);
const smo114286 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/2/n","ab/3/n"]}'))
smo114286.setAttribute('id', 'smo114286');
const smo1142860acc = new VF.Accidental('b');
smo114286.addModifier(smo1142860acc, 0);
const smo1142861acc = new VF.Accidental('b');
smo114286.addModifier(smo1142861acc, 1);
smo114300v0ar.push(smo114286);
smo114300v0.addTickables(smo114300v0ar)
fmtsmo11430066.joinVoices([smo114300v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115696 = smo111546.getStemDirection();
smo111546.setStemDirection(dirsmo115696);
smo111547.setStemDirection(dirsmo115696);
smo111548.setStemDirection(dirsmo115696);
const smo115696 = new VF.Beam([smo111546,smo111547,smo111548]);
const dirsmo115697 = smo111549.getStemDirection();
smo111549.setStemDirection(dirsmo115697);
smo111550.setStemDirection(dirsmo115697);
smo111551.setStemDirection(dirsmo115697);
const smo115697 = new VF.Beam([smo111549,smo111550,smo111551]);
const dirsmo115700 = smo114283.getStemDirection();
smo114283.setStemDirection(dirsmo115700);
smo114284.setStemDirection(dirsmo115700);
const smo115700 = new VF.Beam([smo114283,smo114284]);
const dirsmo115701 = smo114285.getStemDirection();
smo114285.setStemDirection(dirsmo115701);
smo114286.setStemDirection(dirsmo115701);
const smo115701 = new VF.Beam([smo114285,smo114286]);
 
// formatting measures in staff group smo109454
fmtsmo11156566.format([smo111565v0,smo114300v0], 209);
const stavesmo111565 = new VF.Stave(73, 763, 295);
stavesmo111565.setAttribute('id', 'stavesmo111565');
stavesmo111565.setBegBarType(1);
stavesmo111565.addClef('treble');
const keysmo111565 = new VF.KeySignature('Bb');
keysmo111565.addToStave(stavesmo111565);
stavesmo111565.setContext(context);
stavesmo111565.draw();
smo111565v0.draw(context, stavesmo111565);
smo115696.setContext(context);
smo115696.draw();
smo115697.setContext(context);
smo115697.draw();
const stavesmo114300 = new VF.Stave(73, 934, 295);
stavesmo114300.setAttribute('id', 'stavesmo114300');
stavesmo114300.setBegBarType(1);
stavesmo114300.addClef('bass');
const keysmo114300 = new VF.KeySignature('Bb');
keysmo114300.addToStave(stavesmo114300);
stavesmo114300.setContext(context);
stavesmo114300.draw();
smo114300v0.draw(context, stavesmo114300);
smo115700.setContext(context);
smo115700.draw();
smo115701.setContext(context);
smo115701.draw();
const leftsmo109454stavesmo1115651 = new VF.StaveConnector(stavesmo111565, stavesmo114300).setType(3);
leftsmo109454stavesmo1115651.setContext(context).draw();
const fmtsmo11158367 = new VF.Formatter();
//
// voices and notes for stave 0 67
const smo111583v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111583v0ar = [];
const smo111566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111566.setAttribute('id', 'smo111566');
smo111583v0ar.push(smo111566);
const smo111567 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["ab/4/n","bn/4/n","fn/5/n"]}'))
smo111567.setAttribute('id', 'smo111567');
const smo1115670acc = new VF.Accidental('b');
smo111567.addModifier(smo1115670acc, 0);
const smo1115671acc = new VF.Accidental('n');
smo111567.addModifier(smo1115671acc, 1);
smo111567.addModifier(new VF.Dot(), 0);
smo111567.addModifier(new VF.Dot(), 1);
smo111567.addModifier(new VF.Dot(), 2);
smo111583v0ar.push(smo111567);
const smo111569 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo111569.setAttribute('id', 'smo111569');
smo111583v0ar.push(smo111569);
smo111583v0.addTickables(smo111583v0ar)
fmtsmo11158367.joinVoices([smo111583v0]);
const fmtsmo11431967 = new VF.Formatter();
//
// voices and notes for stave 1 67
const smo114319v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114319v0ar = [];
const smo114301 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
smo114301.setAttribute('id', 'smo114301');
smo114319v0ar.push(smo114301);
const smo114302 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo114302.setAttribute('id', 'smo114302');
smo114319v0ar.push(smo114302);
const smo114303 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
smo114303.setAttribute('id', 'smo114303');
const smo1143030acc = new VF.Accidental('n');
smo114303.addModifier(smo1143030acc, 0);
const smo1143031acc = new VF.Accidental('n');
smo114303.addModifier(smo1143031acc, 1);
smo114319v0ar.push(smo114303);
const smo114304 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo114304.setAttribute('id', 'smo114304');
smo114319v0ar.push(smo114304);
const smo114305 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["db/2/n","db/3/n"]}'))
smo114305.setAttribute('id', 'smo114305');
const smo1143050acc = new VF.Accidental('b');
smo114305.addModifier(smo1143050acc, 0);
const smo1143051acc = new VF.Accidental('b');
smo114305.addModifier(smo1143051acc, 1);
smo114319v0ar.push(smo114305);
smo114319v0.addTickables(smo114319v0ar)
fmtsmo11431967.joinVoices([smo114319v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115704 = smo111567.getStemDirection();
smo111567.setStemDirection(dirsmo115704);
smo111569.setStemDirection(dirsmo115704);
const smo115704 = new VF.Beam([smo111567,smo111569]);
const dirsmo115707 = smo114301.getStemDirection();
smo114301.setStemDirection(dirsmo115707);
smo114302.setStemDirection(dirsmo115707);
smo114303.setStemDirection(dirsmo115707);
smo114304.setStemDirection(dirsmo115707);
const smo115707 = new VF.Beam([smo114301,smo114302,smo114303,smo114304]);
 
// formatting measures in staff group smo109454
fmtsmo11158367.format([smo111583v0,smo114319v0], 281);
const stavesmo111583 = new VF.Stave(368, 763, 295);
stavesmo111583.setAttribute('id', 'stavesmo111583');
stavesmo111583.setBegBarType(VF.Barline.type.NONE);
stavesmo111583.setContext(context);
stavesmo111583.draw();
smo111583v0.draw(context, stavesmo111583);
smo115704.setContext(context);
smo115704.draw();
const stavesmo114319 = new VF.Stave(368, 934, 295);
stavesmo114319.setAttribute('id', 'stavesmo114319');
stavesmo114319.setBegBarType(VF.Barline.type.NONE);
stavesmo114319.setContext(context);
stavesmo114319.draw();
smo114319v0.draw(context, stavesmo114319);
smo115707.setContext(context);
smo115707.draw();
const fmtsmo11160568 = new VF.Formatter();
//
// voices and notes for stave 0 68
const smo111605v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111605v0ar = [];
const smo111584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n","an/5/n"]}'))
smo111584.setAttribute('id', 'smo111584');
smo111605v0ar.push(smo111584);
const smo111586 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo111586.setAttribute('id', 'smo111586');
smo111605v0ar.push(smo111586);
const smo111587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","gn/5/n"]}'))
smo111587.setAttribute('id', 'smo111587');
smo111605v0ar.push(smo111587);
const smo111588 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","gn/5/n"]}'))
smo111588.setAttribute('id', 'smo111588');
smo111605v0ar.push(smo111588);
const smo111589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111589.setAttribute('id', 'smo111589');
smo111605v0ar.push(smo111589);
const smo111590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","dn/5/n"]}'))
smo111590.setAttribute('id', 'smo111590');
smo111605v0ar.push(smo111590);
const smo111591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo111591.setAttribute('id', 'smo111591');
const smo1115910acc = new VF.Accidental('n');
smo111591.addModifier(smo1115910acc, 0);
smo111605v0ar.push(smo111591);
smo111605v0.addTickables(smo111605v0ar)
fmtsmo11160568.joinVoices([smo111605v0]);
const fmtsmo11433768 = new VF.Formatter();
//
// voices and notes for stave 1 68
const smo114337v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114337v0ar = [];
const smo114320 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo114320.setAttribute('id', 'smo114320');
smo114337v0ar.push(smo114320);
const smo114321 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo114321.setAttribute('id', 'smo114321');
smo114337v0ar.push(smo114321);
const smo114322 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo114322.setAttribute('id', 'smo114322');
smo114337v0ar.push(smo114322);
const smo114323 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo114323.setAttribute('id', 'smo114323');
smo114337v0ar.push(smo114323);
smo114337v0.addTickables(smo114337v0ar)
fmtsmo11433768.joinVoices([smo114337v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115710 = smo111584.getStemDirection();
smo111584.setStemDirection(dirsmo115710);
smo111586.setStemDirection(dirsmo115710);
smo111587.setStemDirection(dirsmo115710);
const smo115710 = new VF.Beam([smo111584,smo111586,smo111587]);
const dirsmo115711 = smo111588.getStemDirection();
smo111588.setStemDirection(dirsmo115711);
smo111589.setStemDirection(dirsmo115711);
smo111590.setStemDirection(dirsmo115711);
smo111591.setStemDirection(dirsmo115711);
const smo115711 = new VF.Beam([smo111588,smo111589,smo111590,smo111591]);
const dirsmo115714 = smo114320.getStemDirection();
smo114320.setStemDirection(dirsmo115714);
smo114321.setStemDirection(dirsmo115714);
const smo115714 = new VF.Beam([smo114320,smo114321]);
const dirsmo115715 = smo114322.getStemDirection();
smo114322.setStemDirection(dirsmo115715);
smo114323.setStemDirection(dirsmo115715);
const smo115715 = new VF.Beam([smo114322,smo114323]);
 
// formatting measures in staff group smo109454
fmtsmo11160568.format([smo111605v0,smo114337v0], 281);
const stavesmo111605 = new VF.Stave(663, 763, 295);
stavesmo111605.setAttribute('id', 'stavesmo111605');
stavesmo111605.setBegBarType(VF.Barline.type.NONE);
stavesmo111605.setContext(context);
stavesmo111605.draw();
smo111605v0.draw(context, stavesmo111605);
smo115710.setContext(context);
smo115710.draw();
smo115711.setContext(context);
smo115711.draw();
const stavesmo114337 = new VF.Stave(663, 934, 295);
stavesmo114337.setAttribute('id', 'stavesmo114337');
stavesmo114337.setBegBarType(VF.Barline.type.NONE);
stavesmo114337.setContext(context);
stavesmo114337.draw();
smo114337v0.draw(context, stavesmo114337);
smo115714.setContext(context);
smo115714.draw();
smo115715.setContext(context);
smo115715.draw();
const fmtsmo11162769 = new VF.Formatter();
//
// voices and notes for stave 0 69
const smo111627v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111627v0ar = [];
const smo111606 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","fn/5/n"]}'))
smo111606.setAttribute('id', 'smo111606');
smo111627v0ar.push(smo111606);
const smo111607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo111607.setAttribute('id', 'smo111607');
const smo1116070acc = new VF.Accidental('n');
smo111607.addModifier(smo1116070acc, 0);
smo111627v0ar.push(smo111607);
const smo111608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111608.setAttribute('id', 'smo111608');
smo111627v0ar.push(smo111608);
const smo111609 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo111609.setAttribute('id', 'smo111609');
smo111627v0ar.push(smo111609);
const smo111610 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo111610.setAttribute('id', 'smo111610');
const smo1116100acc = new VF.Accidental('n');
smo111610.addModifier(smo1116100acc, 0);
smo111627v0ar.push(smo111610);
const smo111611 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo111611.setAttribute('id', 'smo111611');
smo111627v0ar.push(smo111611);
const smo111612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo111612.setAttribute('id', 'smo111612');
smo111627v0ar.push(smo111612);
smo111627v0.addTickables(smo111627v0ar)
fmtsmo11162769.joinVoices([smo111627v0]);
const fmtsmo11435569 = new VF.Formatter();
//
// voices and notes for stave 1 69
const smo114355v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114355v0ar = [];
const smo114338 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo114338.setAttribute('id', 'smo114338');
smo114355v0ar.push(smo114338);
const smo114339 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo114339.setAttribute('id', 'smo114339');
smo114355v0ar.push(smo114339);
const smo114340 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo114340.setAttribute('id', 'smo114340');
smo114355v0ar.push(smo114340);
smo114355v0.addTickables(smo114355v0ar)
fmtsmo11435569.joinVoices([smo114355v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115718 = smo111606.getStemDirection();
smo111606.setStemDirection(dirsmo115718);
smo111607.setStemDirection(dirsmo115718);
smo111608.setStemDirection(dirsmo115718);
const smo115718 = new VF.Beam([smo111606,smo111607,smo111608]);
const dirsmo115719 = smo111609.getStemDirection();
smo111609.setStemDirection(dirsmo115719);
smo111610.setStemDirection(dirsmo115719);
smo111611.setStemDirection(dirsmo115719);
smo111612.setStemDirection(dirsmo115719);
const smo115719 = new VF.Beam([smo111609,smo111610,smo111611,smo111612]);
 
// formatting measures in staff group smo109454
fmtsmo11162769.format([smo111627v0,smo114355v0], 277);
const stavesmo111627 = new VF.Stave(958, 763, 295);
stavesmo111627.setAttribute('id', 'stavesmo111627');
stavesmo111627.setBegBarType(VF.Barline.type.NONE);
stavesmo111627.setEndBarType(5);
stavesmo111627.setContext(context);
stavesmo111627.draw();
smo111627v0.draw(context, stavesmo111627);
smo115718.setContext(context);
smo115718.draw();
smo115719.setContext(context);
smo115719.draw();
const stavesmo114355 = new VF.Stave(958, 934, 295);
stavesmo114355.setAttribute('id', 'stavesmo114355');
stavesmo114355.setBegBarType(VF.Barline.type.NONE);
stavesmo114355.setEndBarType(5);
stavesmo114355.setContext(context);
stavesmo114355.draw();
smo114355v0.draw(context, stavesmo114355);
const fmtsmo11164670 = new VF.Formatter();
//
// voices and notes for stave 0 70
const smo111646v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111646v0ar = [];
const smo111628 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","fn/5/n"]}'))
smo111628.setAttribute('id', 'smo111628');
smo111646v0ar.push(smo111628);
const smo111629 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo111629.setAttribute('id', 'smo111629');
smo111646v0ar.push(smo111629);
const smo111630 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n","cn/6/n","fn/6/n"]}'))
smo111630.setAttribute('id', 'smo111630');
smo111646v0ar.push(smo111630);
const smo111631 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo111631.setAttribute('id', 'smo111631');
smo111646v0ar.push(smo111631);
smo111646v0.addTickables(smo111646v0ar)
fmtsmo11164670.joinVoices([smo111646v0]);
const fmtsmo11437470 = new VF.Formatter();
//
// voices and notes for stave 1 70
const smo114374v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114374v0ar = [];
const smo114356 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo114356.setAttribute('id', 'smo114356');
smo114374v0ar.push(smo114356);
const smo114357 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo114357.setAttribute('id', 'smo114357');
smo114374v0ar.push(smo114357);
const smo114358 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/1/n","fn/2/n"]}'))
smo114358.setAttribute('id', 'smo114358');
smo114374v0ar.push(smo114358);
const smo114359 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo114359.setAttribute('id', 'smo114359');
smo114374v0ar.push(smo114359);
smo114374v0.addTickables(smo114374v0ar)
fmtsmo11437470.joinVoices([smo114374v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
 
// formatting measures in staff group smo109454
fmtsmo11164670.format([smo111646v0,smo114374v0], 281);
const stavesmo111646 = new VF.Stave(1253, 763, 295);
stavesmo111646.setAttribute('id', 'stavesmo111646');
stavesmo111646.setBegBarType(VF.Barline.type.NONE);
stavesmo111646.setContext(context);
stavesmo111646.draw();
smo111646v0.draw(context, stavesmo111646);
const stavesmo114374 = new VF.Stave(1253, 934, 295);
stavesmo114374.setAttribute('id', 'stavesmo114374');
stavesmo114374.setBegBarType(VF.Barline.type.NONE);
stavesmo114374.setContext(context);
stavesmo114374.draw();
smo114374v0.draw(context, stavesmo114374);
const fmtsmo11166771 = new VF.Formatter();
//
// voices and notes for stave 0 71
const smo111667v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111667v0ar = [];
const smo111647 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111647.setAttribute('id', 'smo111647');
smo111667v0ar.push(smo111647);
const smo111648 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo111648.setAttribute('id', 'smo111648');
smo111667v0ar.push(smo111648);
const smo111649 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111649.setAttribute('id', 'smo111649');
smo111667v0ar.push(smo111649);
const smo111650 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111650.setAttribute('id', 'smo111650');
smo111667v0ar.push(smo111650);
const smo111651 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo111651.setAttribute('id', 'smo111651');
smo111667v0ar.push(smo111651);
const smo111652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111652.setAttribute('id', 'smo111652');
smo111667v0ar.push(smo111652);
const smo111653 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo111653.setAttribute('id', 'smo111653');
smo111667v0ar.push(smo111653);
smo111667v0.addTickables(smo111667v0ar)
fmtsmo11166771.joinVoices([smo111667v0]);
const fmtsmo11439271 = new VF.Formatter();
//
// voices and notes for stave 1 71
const smo114392v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114392v0ar = [];
const smo114375 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n","cn/4/n","fn/4/n"]}'))
smo114375.setAttribute('id', 'smo114375');
smo114392v0ar.push(smo114375);
const smo114376 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n","cn/4/n","fn/4/n"]}'))
smo114376.setAttribute('id', 'smo114376');
smo114392v0ar.push(smo114376);
const smo114377 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","an/3/n","cn/4/n","eb/4/n"]}'))
smo114377.setAttribute('id', 'smo114377');
const smo1143770acc = new VF.Accidental('b');
smo114377.addModifier(smo1143770acc, 0);
const smo1143773acc = new VF.Accidental('b');
smo114377.addModifier(smo1143773acc, 3);
smo114392v0ar.push(smo114377);
const smo114378 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","an/3/n","cn/4/n","eb/4/n"]}'))
smo114378.setAttribute('id', 'smo114378');
smo114392v0ar.push(smo114378);
smo114392v0.addTickables(smo114392v0ar)
fmtsmo11439271.joinVoices([smo114392v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115726 = smo111647.getStemDirection();
smo111647.setStemDirection(dirsmo115726);
smo111648.setStemDirection(dirsmo115726);
smo111649.setStemDirection(dirsmo115726);
const smo115726 = new VF.Beam([smo111647,smo111648,smo111649]);
const dirsmo115727 = smo111650.getStemDirection();
smo111650.setStemDirection(dirsmo115727);
smo111651.setStemDirection(dirsmo115727);
smo111652.setStemDirection(dirsmo115727);
smo111653.setStemDirection(dirsmo115727);
const smo115727 = new VF.Beam([smo111650,smo111651,smo111652,smo111653]);
const dirsmo115730 = smo114375.getStemDirection();
smo114375.setStemDirection(dirsmo115730);
smo114376.setStemDirection(dirsmo115730);
const smo115730 = new VF.Beam([smo114375,smo114376]);
const dirsmo115731 = smo114377.getStemDirection();
smo114377.setStemDirection(dirsmo115731);
smo114378.setStemDirection(dirsmo115731);
const smo115731 = new VF.Beam([smo114377,smo114378]);
 
// formatting measures in staff group smo109454
fmtsmo11166771.format([smo111667v0,smo114392v0], 248);
const stavesmo111667 = new VF.Stave(1548, 763, 295);
stavesmo111667.setAttribute('id', 'stavesmo111667');
stavesmo111667.setBegBarType(VF.Barline.type.NONE);
const keysmo111667 = new VF.KeySignature('C');
keysmo111667.cancelKey('Bb');
keysmo111667.addToStave(stavesmo111667);
stavesmo111667.setContext(context);
stavesmo111667.draw();
smo111667v0.draw(context, stavesmo111667);
smo115726.setContext(context);
smo115726.draw();
smo115727.setContext(context);
smo115727.draw();
const stavesmo114392 = new VF.Stave(1548, 934, 295);
stavesmo114392.setAttribute('id', 'stavesmo114392');
stavesmo114392.setBegBarType(VF.Barline.type.NONE);
const keysmo114392 = new VF.KeySignature('C');
keysmo114392.cancelKey('Bb');
keysmo114392.addToStave(stavesmo114392);
stavesmo114392.setContext(context);
stavesmo114392.draw();
smo114392v0.draw(context, stavesmo114392);
smo115730.setContext(context);
smo115730.draw();
smo115731.setContext(context);
smo115731.draw();
const rightsmo109454stavesmo1116671 = new VF.StaveConnector(stavesmo111667, stavesmo114392).setType(0);
rightsmo109454stavesmo1116671.setContext(context).draw();
const fmtsmo11168972 = new VF.Formatter();
//
// voices and notes for stave 0 72
const smo111689v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111689v0ar = [];
const smo111668 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo111668.setAttribute('id', 'smo111668');
smo111689v0ar.push(smo111668);
const smo111669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111669.setAttribute('id', 'smo111669');
smo111689v0ar.push(smo111669);
const smo111670 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo111670.setAttribute('id', 'smo111670');
smo111689v0ar.push(smo111670);
const smo111671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo111671.setAttribute('id', 'smo111671');
smo111689v0ar.push(smo111671);
const smo111672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo111672.setAttribute('id', 'smo111672');
smo111689v0ar.push(smo111672);
const smo111673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo111673.setAttribute('id', 'smo111673');
smo111689v0ar.push(smo111673);
const smo111674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111674.setAttribute('id', 'smo111674');
smo111689v0ar.push(smo111674);
const smo111675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo111675.setAttribute('id', 'smo111675');
smo111689v0ar.push(smo111675);
smo111689v0.addTickables(smo111689v0ar)
fmtsmo11168972.joinVoices([smo111689v0]);
const fmtsmo11441072 = new VF.Formatter();
//
// voices and notes for stave 1 72
const smo114410v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114410v0ar = [];
const smo114393 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo114393.setAttribute('id', 'smo114393');
smo114410v0ar.push(smo114393);
const smo114394 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo114394.setAttribute('id', 'smo114394');
smo114410v0ar.push(smo114394);
const smo114395 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo114395.setAttribute('id', 'smo114395');
smo114410v0ar.push(smo114395);
const smo114396 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo114396.setAttribute('id', 'smo114396');
smo114410v0ar.push(smo114396);
smo114410v0.addTickables(smo114410v0ar)
fmtsmo11441072.joinVoices([smo114410v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115742 = smo111668.getStemDirection();
smo111668.setStemDirection(dirsmo115742);
smo111669.setStemDirection(dirsmo115742);
smo111670.setStemDirection(dirsmo115742);
smo111671.setStemDirection(dirsmo115742);
const smo115742 = new VF.Beam([smo111668,smo111669,smo111670,smo111671]);
const dirsmo115743 = smo111672.getStemDirection();
smo111672.setStemDirection(dirsmo115743);
smo111673.setStemDirection(dirsmo115743);
smo111674.setStemDirection(dirsmo115743);
smo111675.setStemDirection(dirsmo115743);
const smo115743 = new VF.Beam([smo111672,smo111673,smo111674,smo111675]);
const dirsmo115746 = smo114393.getStemDirection();
smo114393.setStemDirection(dirsmo115746);
smo114394.setStemDirection(dirsmo115746);
const smo115746 = new VF.Beam([smo114393,smo114394]);
const dirsmo115747 = smo114395.getStemDirection();
smo114395.setStemDirection(dirsmo115747);
smo114396.setStemDirection(dirsmo115747);
const smo115747 = new VF.Beam([smo114395,smo114396]);
 
// formatting measures in staff group smo109454
fmtsmo11168972.format([smo111689v0,smo114410v0], 237);
const stavesmo111689 = new VF.Stave(73, 1147, 295);
stavesmo111689.setAttribute('id', 'stavesmo111689');
stavesmo111689.setBegBarType(1);
stavesmo111689.addClef('treble');
stavesmo111689.setContext(context);
stavesmo111689.draw();
smo111689v0.draw(context, stavesmo111689);
smo115742.setContext(context);
smo115742.draw();
smo115743.setContext(context);
smo115743.draw();
const stavesmo114410 = new VF.Stave(73, 1271, 295);
stavesmo114410.setAttribute('id', 'stavesmo114410');
stavesmo114410.setBegBarType(1);
stavesmo114410.addClef('bass');
stavesmo114410.setContext(context);
stavesmo114410.draw();
smo114410v0.draw(context, stavesmo114410);
smo115746.setContext(context);
smo115746.draw();
smo115747.setContext(context);
smo115747.draw();
const leftsmo109454stavesmo1116891 = new VF.StaveConnector(stavesmo111689, stavesmo114410).setType(3);
leftsmo109454stavesmo1116891.setContext(context).draw();
const fmtsmo11170873 = new VF.Formatter();
//
// voices and notes for stave 0 73
const smo111708v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111708v0ar = [];
const smo111690 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","an/4/n"]}'))
smo111690.setAttribute('id', 'smo111690');
const smo1116900acc = new VF.Accidental('b');
smo111690.addModifier(smo1116900acc, 0);
smo111708v0ar.push(smo111690);
const smo111691 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","gb/5/n"]}'))
smo111691.setAttribute('id', 'smo111691');
const smo1116911acc = new VF.Accidental('b');
smo111691.addModifier(smo1116911acc, 1);
smo111708v0ar.push(smo111691);
const smo111692 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","en/5/n"]}'))
smo111692.setAttribute('id', 'smo111692');
smo111708v0ar.push(smo111692);
const smo111693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n"]}'))
smo111693.setAttribute('id', 'smo111693');
smo111708v0ar.push(smo111693);
const smo111694 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
smo111694.setAttribute('id', 'smo111694');
smo111708v0ar.push(smo111694);
smo111708v0.addTickables(smo111708v0ar)
fmtsmo11170873.joinVoices([smo111708v0]);
const fmtsmo11442873 = new VF.Formatter();
//
// voices and notes for stave 1 73
const smo114428v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114428v0ar = [];
const smo114411 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","cn/4/n"]}'))
smo114411.setAttribute('id', 'smo114411');
smo114428v0ar.push(smo114411);
const smo114412 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","an/3/n"]}'))
smo114412.setAttribute('id', 'smo114412');
smo114428v0ar.push(smo114412);
const smo114413 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo114413.setAttribute('id', 'smo114413');
smo114428v0ar.push(smo114413);
const smo114414 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo114414.setAttribute('id', 'smo114414');
smo114428v0ar.push(smo114414);
smo114428v0.addTickables(smo114428v0ar)
fmtsmo11442873.joinVoices([smo114428v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115750 = smo111690.getStemDirection();
smo111690.setStemDirection(dirsmo115750);
smo111691.setStemDirection(dirsmo115750);
const smo115750 = new VF.Beam([smo111690,smo111691]);
const dirsmo115751 = smo111692.getStemDirection();
smo111692.setStemDirection(dirsmo115751);
smo111693.setStemDirection(dirsmo115751);
smo111694.setStemDirection(dirsmo115751);
const smo115751 = new VF.Beam([smo111692,smo111693,smo111694]);
const dirsmo115754 = smo114411.getStemDirection();
smo114411.setStemDirection(dirsmo115754);
smo114412.setStemDirection(dirsmo115754);
const smo115754 = new VF.Beam([smo114411,smo114412]);
const dirsmo115755 = smo114413.getStemDirection();
smo114413.setStemDirection(dirsmo115755);
smo114414.setStemDirection(dirsmo115755);
const smo115755 = new VF.Beam([smo114413,smo114414]);
 
// formatting measures in staff group smo109454
fmtsmo11170873.format([smo111708v0,smo114428v0], 281);
const stavesmo111708 = new VF.Stave(368, 1147, 295);
stavesmo111708.setAttribute('id', 'stavesmo111708');
stavesmo111708.setBegBarType(VF.Barline.type.NONE);
stavesmo111708.setContext(context);
stavesmo111708.draw();
smo111708v0.draw(context, stavesmo111708);
smo115750.setContext(context);
smo115750.draw();
smo115751.setContext(context);
smo115751.draw();
const stavesmo114428 = new VF.Stave(368, 1271, 295);
stavesmo114428.setAttribute('id', 'stavesmo114428');
stavesmo114428.setBegBarType(VF.Barline.type.NONE);
stavesmo114428.setContext(context);
stavesmo114428.draw();
smo114428v0.draw(context, stavesmo114428);
smo115754.setContext(context);
smo115754.draw();
smo115755.setContext(context);
smo115755.draw();
const fmtsmo11172574 = new VF.Formatter();
//
// voices and notes for stave 0 74
const smo111725v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111725v0ar = [];
const smo111709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
smo111709.setAttribute('id', 'smo111709');
smo111725v0ar.push(smo111709);
const smo111710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","gn/5/n","cn/6/n"]}'))
smo111710.setAttribute('id', 'smo111710');
smo111725v0ar.push(smo111710);
const smo111711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo111711.setAttribute('id', 'smo111711');
smo111725v0ar.push(smo111711);
smo111725v0.addTickables(smo111725v0ar)
fmtsmo11172574.joinVoices([smo111725v0]);
const fmtsmo11444574 = new VF.Formatter();
//
// voices and notes for stave 1 74
const smo114445v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114445v0ar = [];
const smo114429 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo114429.setAttribute('id', 'smo114429');
smo114445v0ar.push(smo114429);
const smo114430 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo114430.setAttribute('id', 'smo114430');
smo114445v0ar.push(smo114430);
const smo114431 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo114431.setAttribute('id', 'smo114431');
smo114445v0ar.push(smo114431);
smo114445v0.addTickables(smo114445v0ar)
fmtsmo11444574.joinVoices([smo114445v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
 
// formatting measures in staff group smo109454
fmtsmo11172574.format([smo111725v0,smo114445v0], 281);
const stavesmo111725 = new VF.Stave(663, 1147, 295);
stavesmo111725.setAttribute('id', 'stavesmo111725');
stavesmo111725.setBegBarType(VF.Barline.type.NONE);
stavesmo111725.setContext(context);
stavesmo111725.draw();
smo111725v0.draw(context, stavesmo111725);
const stavesmo114445 = new VF.Stave(663, 1271, 295);
stavesmo114445.setAttribute('id', 'stavesmo114445');
stavesmo114445.setBegBarType(VF.Barline.type.NONE);
stavesmo114445.setContext(context);
stavesmo114445.draw();
smo114445v0.draw(context, stavesmo114445);
const fmtsmo11174575 = new VF.Formatter();
//
// voices and notes for stave 0 75
const smo111745v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111745v0ar = [];
const smo111726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo111726.setAttribute('id', 'smo111726');
smo111745v0ar.push(smo111726);
const smo111727 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n","en/4/n"]}'))
smo111727.setAttribute('id', 'smo111727');
const smo1117270acc = new VF.Accidental('b');
smo111727.addModifier(smo1117270acc, 0);
smo111745v0ar.push(smo111727);
const smo111728 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo111728.setAttribute('id', 'smo111728');
const smo1117280acc = new VF.Accidental('n');
smo111728.addModifier(smo1117280acc, 0);
smo111745v0ar.push(smo111728);
const smo111729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo111729.setAttribute('id', 'smo111729');
smo111745v0ar.push(smo111729);
const smo111730 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n","en/4/n"]}'))
smo111730.setAttribute('id', 'smo111730');
const smo1117300acc = new VF.Accidental('b');
smo111730.addModifier(smo1117300acc, 0);
smo111745v0ar.push(smo111730);
const smo111731 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo111731.setAttribute('id', 'smo111731');
const smo1117310acc = new VF.Accidental('n');
smo111731.addModifier(smo1117310acc, 0);
smo111745v0ar.push(smo111731);
smo111745v0.addTickables(smo111745v0ar)
fmtsmo11174575.joinVoices([smo111745v0]);
const fmtsmo11446375 = new VF.Formatter();
//
// voices and notes for stave 1 75
const smo114463v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114463v0ar = [];
const smo114446 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo114446.setAttribute('id', 'smo114446');
smo114463v0ar.push(smo114446);
const smo114447 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo114447.setAttribute('id', 'smo114447');
smo114463v0ar.push(smo114447);
const smo114448 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo114448.setAttribute('id', 'smo114448');
smo114463v0ar.push(smo114448);
const smo114449 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo114449.setAttribute('id', 'smo114449');
smo114463v0ar.push(smo114449);
smo114463v0.addTickables(smo114463v0ar)
fmtsmo11446375.joinVoices([smo114463v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115762 = smo111726.getStemDirection();
smo111726.setStemDirection(dirsmo115762);
smo111727.setStemDirection(dirsmo115762);
smo111728.setStemDirection(dirsmo115762);
const smo115762 = new VF.Beam([smo111726,smo111727,smo111728]);
const dirsmo115763 = smo111729.getStemDirection();
smo111729.setStemDirection(dirsmo115763);
smo111730.setStemDirection(dirsmo115763);
smo111731.setStemDirection(dirsmo115763);
const smo115763 = new VF.Beam([smo111729,smo111730,smo111731]);
const dirsmo115765 = smo114446.getStemDirection();
smo114446.setStemDirection(dirsmo115765);
smo114447.setStemDirection(dirsmo115765);
const smo115765 = new VF.Beam([smo114446,smo114447]);
const dirsmo115766 = smo114448.getStemDirection();
smo114448.setStemDirection(dirsmo115766);
smo114449.setStemDirection(dirsmo115766);
const smo115766 = new VF.Beam([smo114448,smo114449]);
 
// formatting measures in staff group smo109454
fmtsmo11174575.format([smo111745v0,smo114463v0], 272);
const stavesmo111745 = new VF.Stave(958, 1147, 295);
stavesmo111745.setAttribute('id', 'stavesmo111745');
stavesmo111745.setBegBarType(4);
stavesmo111745.setContext(context);
stavesmo111745.draw();
smo111745v0.draw(context, stavesmo111745);
smo115762.setContext(context);
smo115762.draw();
smo115763.setContext(context);
smo115763.draw();
const stavesmo114463 = new VF.Stave(958, 1271, 295);
stavesmo114463.setAttribute('id', 'stavesmo114463');
stavesmo114463.setBegBarType(4);
stavesmo114463.setContext(context);
stavesmo114463.draw();
smo114463v0.draw(context, stavesmo114463);
smo115765.setContext(context);
smo115765.draw();
smo115766.setContext(context);
smo115766.draw();
const fmtsmo11176776 = new VF.Formatter();
//
// voices and notes for stave 0 76
const smo111767v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111767v0ar = [];
const smo111746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo111746.setAttribute('id', 'smo111746');
smo111767v0ar.push(smo111746);
const smo111747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo111747.setAttribute('id', 'smo111747');
smo111767v0ar.push(smo111747);
const smo111748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n"]}'))
smo111748.setAttribute('id', 'smo111748');
smo111767v0ar.push(smo111748);
const smo111749 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo111749.setAttribute('id', 'smo111749');
smo111767v0ar.push(smo111749);
const smo111750 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111750.setAttribute('id', 'smo111750');
smo111767v0ar.push(smo111750);
const smo111751 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo111751.setAttribute('id', 'smo111751');
smo111767v0ar.push(smo111751);
const smo111752 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111752.setAttribute('id', 'smo111752');
smo111767v0ar.push(smo111752);
const smo111753 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo111753.setAttribute('id', 'smo111753');
smo111767v0ar.push(smo111753);
smo111767v0.addTickables(smo111767v0ar)
fmtsmo11176776.joinVoices([smo111767v0]);
const fmtsmo11448176 = new VF.Formatter();
//
// voices and notes for stave 1 76
const smo114481v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114481v0ar = [];
const smo114464 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo114464.setAttribute('id', 'smo114464');
smo114481v0ar.push(smo114464);
const smo114465 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo114465.setAttribute('id', 'smo114465');
smo114481v0ar.push(smo114465);
const smo114466 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo114466.setAttribute('id', 'smo114466');
smo114481v0ar.push(smo114466);
const smo114467 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo114467.setAttribute('id', 'smo114467');
smo114481v0ar.push(smo114467);
smo114481v0.addTickables(smo114481v0ar)
fmtsmo11448176.joinVoices([smo114481v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115768 = smo111747.getStemDirection();
smo111747.setStemDirection(dirsmo115768);
smo111748.setStemDirection(dirsmo115768);
smo111749.setStemDirection(dirsmo115768);
const smo115768 = new VF.Beam([smo111747,smo111748,smo111749]);
const dirsmo115769 = smo111750.getStemDirection();
smo111750.setStemDirection(dirsmo115769);
smo111751.setStemDirection(dirsmo115769);
smo111752.setStemDirection(dirsmo115769);
smo111753.setStemDirection(dirsmo115769);
const smo115769 = new VF.Beam([smo111750,smo111751,smo111752,smo111753]);
const dirsmo115772 = smo114464.getStemDirection();
smo114464.setStemDirection(dirsmo115772);
smo114465.setStemDirection(dirsmo115772);
const smo115772 = new VF.Beam([smo114464,smo114465]);
const dirsmo115773 = smo114466.getStemDirection();
smo114466.setStemDirection(dirsmo115773);
smo114467.setStemDirection(dirsmo115773);
const smo115773 = new VF.Beam([smo114466,smo114467]);
 
// formatting measures in staff group smo109454
fmtsmo11176776.format([smo111767v0,smo114481v0], 281);
const stavesmo111767 = new VF.Stave(1253, 1147, 295);
stavesmo111767.setAttribute('id', 'stavesmo111767');
stavesmo111767.setBegBarType(VF.Barline.type.NONE);
stavesmo111767.setContext(context);
stavesmo111767.draw();
smo111767v0.draw(context, stavesmo111767);
smo115768.setContext(context);
smo115768.draw();
smo115769.setContext(context);
smo115769.draw();
const stavesmo114481 = new VF.Stave(1253, 1271, 295);
stavesmo114481.setAttribute('id', 'stavesmo114481');
stavesmo114481.setBegBarType(VF.Barline.type.NONE);
stavesmo114481.setContext(context);
stavesmo114481.draw();
smo114481v0.draw(context, stavesmo114481);
smo115772.setContext(context);
smo115772.draw();
smo115773.setContext(context);
smo115773.draw();
const fmtsmo11178777 = new VF.Formatter();
//
// voices and notes for stave 0 77
const smo111787v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111787v0ar = [];
const smo111768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo111768.setAttribute('id', 'smo111768');
smo111787v0ar.push(smo111768);
const smo111769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n","gb/4/n"]}'))
smo111769.setAttribute('id', 'smo111769');
const smo1117690acc = new VF.Accidental('b');
smo111769.addModifier(smo1117690acc, 0);
const smo1117691acc = new VF.Accidental('b');
smo111769.addModifier(smo1117691acc, 1);
smo111787v0ar.push(smo111769);
const smo111770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo111770.setAttribute('id', 'smo111770');
const smo1117700acc = new VF.Accidental('n');
smo111770.addModifier(smo1117700acc, 0);
const smo1117701acc = new VF.Accidental('n');
smo111770.addModifier(smo1117701acc, 1);
smo111787v0ar.push(smo111770);
const smo111771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo111771.setAttribute('id', 'smo111771');
smo111787v0ar.push(smo111771);
const smo111772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n","gb/4/n"]}'))
smo111772.setAttribute('id', 'smo111772');
const smo1117720acc = new VF.Accidental('b');
smo111772.addModifier(smo1117720acc, 0);
const smo1117721acc = new VF.Accidental('b');
smo111772.addModifier(smo1117721acc, 1);
smo111787v0ar.push(smo111772);
const smo111773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo111773.setAttribute('id', 'smo111773');
const smo1117730acc = new VF.Accidental('n');
smo111773.addModifier(smo1117730acc, 0);
const smo1117731acc = new VF.Accidental('n');
smo111773.addModifier(smo1117731acc, 1);
smo111787v0ar.push(smo111773);
smo111787v0.addTickables(smo111787v0ar)
fmtsmo11178777.joinVoices([smo111787v0]);
const fmtsmo11449977 = new VF.Formatter();
//
// voices and notes for stave 1 77
const smo114499v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114499v0ar = [];
const smo114482 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo114482.setAttribute('id', 'smo114482');
smo114499v0ar.push(smo114482);
const smo114483 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo114483.setAttribute('id', 'smo114483');
smo114499v0ar.push(smo114483);
const smo114484 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo114484.setAttribute('id', 'smo114484');
smo114499v0ar.push(smo114484);
const smo114485 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo114485.setAttribute('id', 'smo114485');
smo114499v0ar.push(smo114485);
smo114499v0.addTickables(smo114499v0ar)
fmtsmo11449977.joinVoices([smo114499v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115776 = smo111768.getStemDirection();
smo111768.setStemDirection(dirsmo115776);
smo111769.setStemDirection(dirsmo115776);
smo111770.setStemDirection(dirsmo115776);
const smo115776 = new VF.Beam([smo111768,smo111769,smo111770]);
const dirsmo115777 = smo111771.getStemDirection();
smo111771.setStemDirection(dirsmo115777);
smo111772.setStemDirection(dirsmo115777);
smo111773.setStemDirection(dirsmo115777);
const smo115777 = new VF.Beam([smo111771,smo111772,smo111773]);
const dirsmo115780 = smo114482.getStemDirection();
smo114482.setStemDirection(dirsmo115780);
smo114483.setStemDirection(dirsmo115780);
const smo115780 = new VF.Beam([smo114482,smo114483]);
const dirsmo115781 = smo114484.getStemDirection();
smo114484.setStemDirection(dirsmo115781);
smo114485.setStemDirection(dirsmo115781);
const smo115781 = new VF.Beam([smo114484,smo114485]);
 
// formatting measures in staff group smo109454
fmtsmo11178777.format([smo111787v0,smo114499v0], 281);
const stavesmo111787 = new VF.Stave(1548, 1147, 295);
stavesmo111787.setAttribute('id', 'stavesmo111787');
stavesmo111787.setBegBarType(VF.Barline.type.NONE);
stavesmo111787.setContext(context);
stavesmo111787.draw();
smo111787v0.draw(context, stavesmo111787);
smo115776.setContext(context);
smo115776.draw();
smo115777.setContext(context);
smo115777.draw();
const stavesmo114499 = new VF.Stave(1548, 1271, 295);
stavesmo114499.setAttribute('id', 'stavesmo114499');
stavesmo114499.setBegBarType(VF.Barline.type.NONE);
stavesmo114499.setContext(context);
stavesmo114499.draw();
smo114499v0.draw(context, stavesmo114499);
smo115780.setContext(context);
smo115780.draw();
smo115781.setContext(context);
smo115781.draw();
const rightsmo109454stavesmo1117871 = new VF.StaveConnector(stavesmo111787, stavesmo114499).setType(0);
rightsmo109454stavesmo1117871.setContext(context).draw();
const fmtsmo11180978 = new VF.Formatter();
//
// voices and notes for stave 0 78
const smo111809v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111809v0ar = [];
const smo111788 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo111788.setAttribute('id', 'smo111788');
smo111809v0ar.push(smo111788);
const smo111789 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111789.setAttribute('id', 'smo111789');
smo111809v0ar.push(smo111789);
const smo111790 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n"]}'))
smo111790.setAttribute('id', 'smo111790');
smo111809v0ar.push(smo111790);
const smo111791 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111791.setAttribute('id', 'smo111791');
smo111809v0ar.push(smo111791);
const smo111792 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo111792.setAttribute('id', 'smo111792');
smo111809v0ar.push(smo111792);
const smo111793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo111793.setAttribute('id', 'smo111793');
smo111809v0ar.push(smo111793);
const smo111794 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo111794.setAttribute('id', 'smo111794');
smo111809v0ar.push(smo111794);
const smo111795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111795.setAttribute('id', 'smo111795');
smo111809v0ar.push(smo111795);
smo111809v0.addTickables(smo111809v0ar)
fmtsmo11180978.joinVoices([smo111809v0]);
const fmtsmo11451778 = new VF.Formatter();
//
// voices and notes for stave 1 78
const smo114517v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114517v0ar = [];
const smo114500 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo114500.setAttribute('id', 'smo114500');
smo114517v0ar.push(smo114500);
const smo114501 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo114501.setAttribute('id', 'smo114501');
smo114517v0ar.push(smo114501);
const smo114502 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo114502.setAttribute('id', 'smo114502');
smo114517v0ar.push(smo114502);
const smo114503 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo114503.setAttribute('id', 'smo114503');
smo114517v0ar.push(smo114503);
smo114517v0.addTickables(smo114517v0ar)
fmtsmo11451778.joinVoices([smo114517v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115792 = smo111789.getStemDirection();
smo111789.setStemDirection(dirsmo115792);
smo111790.setStemDirection(dirsmo115792);
smo111791.setStemDirection(dirsmo115792);
const smo115792 = new VF.Beam([smo111789,smo111790,smo111791]);
const dirsmo115793 = smo111792.getStemDirection();
smo111792.setStemDirection(dirsmo115793);
smo111793.setStemDirection(dirsmo115793);
smo111794.setStemDirection(dirsmo115793);
smo111795.setStemDirection(dirsmo115793);
const smo115793 = new VF.Beam([smo111792,smo111793,smo111794,smo111795]);
const dirsmo115796 = smo114500.getStemDirection();
smo114500.setStemDirection(dirsmo115796);
smo114501.setStemDirection(dirsmo115796);
const smo115796 = new VF.Beam([smo114500,smo114501]);
const dirsmo115797 = smo114502.getStemDirection();
smo114502.setStemDirection(dirsmo115797);
smo114503.setStemDirection(dirsmo115797);
const smo115797 = new VF.Beam([smo114502,smo114503]);
 
// formatting measures in staff group smo109454
fmtsmo11180978.format([smo111809v0,smo114517v0], 237);
const stavesmo111809 = new VF.Stave(73, 1444, 295);
stavesmo111809.setAttribute('id', 'stavesmo111809');
stavesmo111809.setBegBarType(1);
stavesmo111809.addClef('treble');
stavesmo111809.setContext(context);
stavesmo111809.draw();
smo111809v0.draw(context, stavesmo111809);
smo115792.setContext(context);
smo115792.draw();
smo115793.setContext(context);
smo115793.draw();
const stavesmo114517 = new VF.Stave(73, 1574, 295);
stavesmo114517.setAttribute('id', 'stavesmo114517');
stavesmo114517.setBegBarType(1);
stavesmo114517.addClef('bass');
stavesmo114517.setContext(context);
stavesmo114517.draw();
smo114517v0.draw(context, stavesmo114517);
smo115796.setContext(context);
smo115796.draw();
smo115797.setContext(context);
smo115797.draw();
const leftsmo109454stavesmo1118091 = new VF.StaveConnector(stavesmo111809, stavesmo114517).setType(3);
leftsmo109454stavesmo1118091.setContext(context).draw();
const fmtsmo11182979 = new VF.Formatter();
//
// voices and notes for stave 0 79
const smo111829v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111829v0ar = [];
const smo111810 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n"]}'))
smo111810.setAttribute('id', 'smo111810');
smo111829v0ar.push(smo111810);
const smo111811 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","db/5/n"]}'))
smo111811.setAttribute('id', 'smo111811');
const smo1118110acc = new VF.Accidental('b');
smo111811.addModifier(smo1118110acc, 0);
const smo1118111acc = new VF.Accidental('b');
smo111811.addModifier(smo1118111acc, 1);
smo111829v0ar.push(smo111811);
const smo111812 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n"]}'))
smo111812.setAttribute('id', 'smo111812');
const smo1118120acc = new VF.Accidental('n');
smo111812.addModifier(smo1118120acc, 0);
const smo1118121acc = new VF.Accidental('n');
smo111812.addModifier(smo1118121acc, 1);
smo111829v0ar.push(smo111812);
const smo111813 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n"]}'))
smo111813.setAttribute('id', 'smo111813');
smo111829v0ar.push(smo111813);
const smo111814 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","db/5/n"]}'))
smo111814.setAttribute('id', 'smo111814');
const smo1118140acc = new VF.Accidental('b');
smo111814.addModifier(smo1118140acc, 0);
const smo1118141acc = new VF.Accidental('b');
smo111814.addModifier(smo1118141acc, 1);
smo111829v0ar.push(smo111814);
const smo111815 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n"]}'))
smo111815.setAttribute('id', 'smo111815');
const smo1118150acc = new VF.Accidental('n');
smo111815.addModifier(smo1118150acc, 0);
const smo1118151acc = new VF.Accidental('n');
smo111815.addModifier(smo1118151acc, 1);
smo111829v0ar.push(smo111815);
smo111829v0.addTickables(smo111829v0ar)
fmtsmo11182979.joinVoices([smo111829v0]);
const fmtsmo11453579 = new VF.Formatter();
//
// voices and notes for stave 1 79
const smo114535v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114535v0ar = [];
const smo114518 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo114518.setAttribute('id', 'smo114518');
smo114535v0ar.push(smo114518);
const smo114519 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo114519.setAttribute('id', 'smo114519');
smo114535v0ar.push(smo114519);
const smo114520 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo114520.setAttribute('id', 'smo114520');
smo114535v0ar.push(smo114520);
const smo114521 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo114521.setAttribute('id', 'smo114521');
smo114535v0ar.push(smo114521);
smo114535v0.addTickables(smo114535v0ar)
fmtsmo11453579.joinVoices([smo114535v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115800 = smo111810.getStemDirection();
smo111810.setStemDirection(dirsmo115800);
smo111811.setStemDirection(dirsmo115800);
smo111812.setStemDirection(dirsmo115800);
const smo115800 = new VF.Beam([smo111810,smo111811,smo111812]);
const dirsmo115801 = smo111813.getStemDirection();
smo111813.setStemDirection(dirsmo115801);
smo111814.setStemDirection(dirsmo115801);
smo111815.setStemDirection(dirsmo115801);
const smo115801 = new VF.Beam([smo111813,smo111814,smo111815]);
const dirsmo115804 = smo114518.getStemDirection();
smo114518.setStemDirection(dirsmo115804);
smo114519.setStemDirection(dirsmo115804);
const smo115804 = new VF.Beam([smo114518,smo114519]);
const dirsmo115805 = smo114520.getStemDirection();
smo114520.setStemDirection(dirsmo115805);
smo114521.setStemDirection(dirsmo115805);
const smo115805 = new VF.Beam([smo114520,smo114521]);
 
// formatting measures in staff group smo109454
fmtsmo11182979.format([smo111829v0,smo114535v0], 281);
const stavesmo111829 = new VF.Stave(368, 1444, 295);
stavesmo111829.setAttribute('id', 'stavesmo111829');
stavesmo111829.setBegBarType(VF.Barline.type.NONE);
stavesmo111829.setContext(context);
stavesmo111829.draw();
smo111829v0.draw(context, stavesmo111829);
smo115800.setContext(context);
smo115800.draw();
smo115801.setContext(context);
smo115801.draw();
const stavesmo114535 = new VF.Stave(368, 1574, 295);
stavesmo114535.setAttribute('id', 'stavesmo114535');
stavesmo114535.setBegBarType(VF.Barline.type.NONE);
stavesmo114535.setContext(context);
stavesmo114535.draw();
smo114535v0.draw(context, stavesmo114535);
smo115804.setContext(context);
smo115804.draw();
smo115805.setContext(context);
smo115805.draw();
const fmtsmo11185180 = new VF.Formatter();
//
// voices and notes for stave 0 80
const smo111851v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111851v0ar = [];
const smo111830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo111830.setAttribute('id', 'smo111830');
smo111851v0ar.push(smo111830);
const smo111831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo111831.setAttribute('id', 'smo111831');
smo111851v0ar.push(smo111831);
const smo111832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","an/5/n"]}'))
smo111832.setAttribute('id', 'smo111832');
smo111851v0ar.push(smo111832);
const smo111833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo111833.setAttribute('id', 'smo111833');
smo111851v0ar.push(smo111833);
const smo111834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo111834.setAttribute('id', 'smo111834');
smo111851v0ar.push(smo111834);
const smo111835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo111835.setAttribute('id', 'smo111835');
smo111851v0ar.push(smo111835);
const smo111836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo111836.setAttribute('id', 'smo111836');
smo111851v0ar.push(smo111836);
const smo111837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo111837.setAttribute('id', 'smo111837');
smo111851v0ar.push(smo111837);
smo111851v0.addTickables(smo111851v0ar)
fmtsmo11185180.joinVoices([smo111851v0]);
const fmtsmo11455380 = new VF.Formatter();
//
// voices and notes for stave 1 80
const smo114553v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114553v0ar = [];
const smo114536 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo114536.setAttribute('id', 'smo114536');
smo114553v0ar.push(smo114536);
const smo114537 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo114537.setAttribute('id', 'smo114537');
smo114553v0ar.push(smo114537);
const smo114538 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo114538.setAttribute('id', 'smo114538');
smo114553v0ar.push(smo114538);
const smo114539 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo114539.setAttribute('id', 'smo114539');
smo114553v0ar.push(smo114539);
smo114553v0.addTickables(smo114553v0ar)
fmtsmo11455380.joinVoices([smo114553v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115808 = smo111831.getStemDirection();
smo111831.setStemDirection(dirsmo115808);
smo111832.setStemDirection(dirsmo115808);
smo111833.setStemDirection(dirsmo115808);
const smo115808 = new VF.Beam([smo111831,smo111832,smo111833]);
const dirsmo115809 = smo111834.getStemDirection();
smo111834.setStemDirection(dirsmo115809);
smo111835.setStemDirection(dirsmo115809);
smo111836.setStemDirection(dirsmo115809);
smo111837.setStemDirection(dirsmo115809);
const smo115809 = new VF.Beam([smo111834,smo111835,smo111836,smo111837]);
const dirsmo115812 = smo114536.getStemDirection();
smo114536.setStemDirection(dirsmo115812);
smo114537.setStemDirection(dirsmo115812);
const smo115812 = new VF.Beam([smo114536,smo114537]);
const dirsmo115813 = smo114538.getStemDirection();
smo114538.setStemDirection(dirsmo115813);
smo114539.setStemDirection(dirsmo115813);
const smo115813 = new VF.Beam([smo114538,smo114539]);
 
// formatting measures in staff group smo109454
fmtsmo11185180.format([smo111851v0,smo114553v0], 281);
const stavesmo111851 = new VF.Stave(663, 1444, 295);
stavesmo111851.setAttribute('id', 'stavesmo111851');
stavesmo111851.setBegBarType(VF.Barline.type.NONE);
stavesmo111851.setContext(context);
stavesmo111851.draw();
smo111851v0.draw(context, stavesmo111851);
smo115808.setContext(context);
smo115808.draw();
smo115809.setContext(context);
smo115809.draw();
const stavesmo114553 = new VF.Stave(663, 1574, 295);
stavesmo114553.setAttribute('id', 'stavesmo114553');
stavesmo114553.setBegBarType(VF.Barline.type.NONE);
stavesmo114553.setContext(context);
stavesmo114553.draw();
smo114553v0.draw(context, stavesmo114553);
smo115812.setContext(context);
smo115812.draw();
smo115813.setContext(context);
smo115813.draw();
const fmtsmo11186981 = new VF.Formatter();
//
// voices and notes for stave 0 81
const smo111869v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111869v0ar = [];
const smo111852 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo111852.setAttribute('id', 'smo111852');
smo111869v0ar.push(smo111852);
const smo111853 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo111853.setAttribute('id', 'smo111853');
smo111869v0ar.push(smo111853);
const smo111854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo111854.setAttribute('id', 'smo111854');
smo111869v0ar.push(smo111854);
const smo111855 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","an/5/n"]}'))
smo111855.setAttribute('id', 'smo111855');
smo111869v0ar.push(smo111855);
smo111869v0.addTickables(smo111869v0ar)
fmtsmo11186981.joinVoices([smo111869v0]);
const fmtsmo11457081 = new VF.Formatter();
//
// voices and notes for stave 1 81
const smo114570v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114570v0ar = [];
const smo114554 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n","gb/3/n","cn/4/n"]}'))
smo114554.setAttribute('id', 'smo114554');
const smo1145540acc = new VF.Accidental('b');
smo114554.addModifier(smo1145540acc, 0);
const smo1145541acc = new VF.Accidental('b');
smo114554.addModifier(smo1145541acc, 1);
smo114570v0ar.push(smo114554);
const smo114555 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n","gb/3/n","cn/4/n"]}'))
smo114555.setAttribute('id', 'smo114555');
smo114570v0ar.push(smo114555);
const smo114556 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n","gb/3/n","cn/4/n"]}'))
smo114556.setAttribute('id', 'smo114556');
smo114570v0ar.push(smo114556);
smo114570v0.addTickables(smo114570v0ar)
fmtsmo11457081.joinVoices([smo114570v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115816 = smo111852.getStemDirection();
smo111852.setStemDirection(dirsmo115816);
smo111853.setStemDirection(dirsmo115816);
const smo115816 = new VF.Beam([smo111852,smo111853]);
 
// formatting measures in staff group smo109454
fmtsmo11186981.format([smo111869v0,smo114570v0], 281);
const stavesmo111869 = new VF.Stave(958, 1444, 295);
stavesmo111869.setAttribute('id', 'stavesmo111869');
stavesmo111869.setBegBarType(VF.Barline.type.NONE);
stavesmo111869.setContext(context);
stavesmo111869.draw();
smo111869v0.draw(context, stavesmo111869);
smo115816.setContext(context);
smo115816.draw();
const stavesmo114570 = new VF.Stave(958, 1574, 295);
stavesmo114570.setAttribute('id', 'stavesmo114570');
stavesmo114570.setBegBarType(VF.Barline.type.NONE);
stavesmo114570.setContext(context);
stavesmo114570.draw();
smo114570v0.draw(context, stavesmo114570);
const fmtsmo11188882 = new VF.Formatter();
//
// voices and notes for stave 0 82
const smo111888v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111888v0ar = [];
const smo111870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","gn/5/n"]}'))
smo111870.setAttribute('id', 'smo111870');
smo111888v0ar.push(smo111870);
const smo111871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo111871.setAttribute('id', 'smo111871');
smo111888v0ar.push(smo111871);
const smo111872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo111872.setAttribute('id', 'smo111872');
smo111888v0ar.push(smo111872);
const smo111873 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo111873.setAttribute('id', 'smo111873');
smo111888v0ar.push(smo111873);
const smo111874 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo111874.setAttribute('id', 'smo111874');
smo111888v0ar.push(smo111874);
smo111888v0.addTickables(smo111888v0ar)
fmtsmo11188882.joinVoices([smo111888v0]);
const fmtsmo11458782 = new VF.Formatter();
//
// voices and notes for stave 1 82
const smo114587v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114587v0ar = [];
const smo114571 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo114571.setAttribute('id', 'smo114571');
smo114587v0ar.push(smo114571);
const smo114572 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo114572.setAttribute('id', 'smo114572');
smo114587v0ar.push(smo114572);
const smo114573 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo114573.setAttribute('id', 'smo114573');
smo114587v0ar.push(smo114573);
smo114587v0.addTickables(smo114587v0ar)
fmtsmo11458782.joinVoices([smo114587v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115821 = smo111870.getStemDirection();
smo111870.setStemDirection(dirsmo115821);
smo111871.setStemDirection(dirsmo115821);
smo111872.setStemDirection(dirsmo115821);
const smo115821 = new VF.Beam([smo111870,smo111871,smo111872]);
const dirsmo115822 = smo111873.getStemDirection();
smo111873.setStemDirection(dirsmo115822);
smo111874.setStemDirection(dirsmo115822);
const smo115822 = new VF.Beam([smo111873,smo111874]);
 
// formatting measures in staff group smo109454
fmtsmo11188882.format([smo111888v0,smo114587v0], 281);
const stavesmo111888 = new VF.Stave(1253, 1444, 295);
stavesmo111888.setAttribute('id', 'stavesmo111888');
stavesmo111888.setBegBarType(VF.Barline.type.NONE);
stavesmo111888.setContext(context);
stavesmo111888.draw();
smo111888v0.draw(context, stavesmo111888);
smo115821.setContext(context);
smo115821.draw();
smo115822.setContext(context);
smo115822.draw();
const stavesmo114587 = new VF.Stave(1253, 1574, 295);
stavesmo114587.setAttribute('id', 'stavesmo114587');
stavesmo114587.setBegBarType(VF.Barline.type.NONE);
stavesmo114587.setContext(context);
stavesmo114587.draw();
smo114587v0.draw(context, stavesmo114587);
const fmtsmo11190883 = new VF.Formatter();
//
// voices and notes for stave 0 83
const smo111908v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111908v0ar = [];
const smo111889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo111889.setAttribute('id', 'smo111889');
smo111908v0ar.push(smo111889);
const smo111890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n","en/4/n"]}'))
smo111890.setAttribute('id', 'smo111890');
const smo1118900acc = new VF.Accidental('b');
smo111890.addModifier(smo1118900acc, 0);
smo111908v0ar.push(smo111890);
const smo111891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo111891.setAttribute('id', 'smo111891');
const smo1118910acc = new VF.Accidental('n');
smo111891.addModifier(smo1118910acc, 0);
smo111908v0ar.push(smo111891);
const smo111892 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo111892.setAttribute('id', 'smo111892');
smo111908v0ar.push(smo111892);
const smo111893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n","en/4/n"]}'))
smo111893.setAttribute('id', 'smo111893');
const smo1118930acc = new VF.Accidental('b');
smo111893.addModifier(smo1118930acc, 0);
smo111908v0ar.push(smo111893);
const smo111894 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo111894.setAttribute('id', 'smo111894');
const smo1118940acc = new VF.Accidental('n');
smo111894.addModifier(smo1118940acc, 0);
smo111908v0ar.push(smo111894);
smo111908v0.addTickables(smo111908v0ar)
fmtsmo11190883.joinVoices([smo111908v0]);
const fmtsmo11460583 = new VF.Formatter();
//
// voices and notes for stave 1 83
const smo114605v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114605v0ar = [];
const smo114588 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo114588.setAttribute('id', 'smo114588');
smo114605v0ar.push(smo114588);
const smo114589 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo114589.setAttribute('id', 'smo114589');
smo114605v0ar.push(smo114589);
const smo114590 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo114590.setAttribute('id', 'smo114590');
smo114605v0ar.push(smo114590);
const smo114591 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo114591.setAttribute('id', 'smo114591');
smo114605v0ar.push(smo114591);
smo114605v0.addTickables(smo114605v0ar)
fmtsmo11460583.joinVoices([smo114605v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115827 = smo111889.getStemDirection();
smo111889.setStemDirection(dirsmo115827);
smo111890.setStemDirection(dirsmo115827);
smo111891.setStemDirection(dirsmo115827);
const smo115827 = new VF.Beam([smo111889,smo111890,smo111891]);
const dirsmo115828 = smo111892.getStemDirection();
smo111892.setStemDirection(dirsmo115828);
smo111893.setStemDirection(dirsmo115828);
smo111894.setStemDirection(dirsmo115828);
const smo115828 = new VF.Beam([smo111892,smo111893,smo111894]);
const dirsmo115831 = smo114588.getStemDirection();
smo114588.setStemDirection(dirsmo115831);
smo114589.setStemDirection(dirsmo115831);
const smo115831 = new VF.Beam([smo114588,smo114589]);
const dirsmo115832 = smo114590.getStemDirection();
smo114590.setStemDirection(dirsmo115832);
smo114591.setStemDirection(dirsmo115832);
const smo115832 = new VF.Beam([smo114590,smo114591]);
 
// formatting measures in staff group smo109454
fmtsmo11190883.format([smo111908v0,smo114605v0], 281);
const stavesmo111908 = new VF.Stave(1548, 1444, 295);
stavesmo111908.setAttribute('id', 'stavesmo111908');
stavesmo111908.setBegBarType(VF.Barline.type.NONE);
stavesmo111908.setContext(context);
stavesmo111908.draw();
smo111908v0.draw(context, stavesmo111908);
smo115827.setContext(context);
smo115827.draw();
smo115828.setContext(context);
smo115828.draw();
const stavesmo114605 = new VF.Stave(1548, 1574, 295);
stavesmo114605.setAttribute('id', 'stavesmo114605');
stavesmo114605.setBegBarType(VF.Barline.type.NONE);
stavesmo114605.setContext(context);
stavesmo114605.draw();
smo114605v0.draw(context, stavesmo114605);
smo115831.setContext(context);
smo115831.draw();
smo115832.setContext(context);
smo115832.draw();
const rightsmo109454stavesmo1119081 = new VF.StaveConnector(stavesmo111908, stavesmo114605).setType(0);
rightsmo109454stavesmo1119081.setContext(context).draw();
const fmtsmo11193084 = new VF.Formatter();
//
// voices and notes for stave 0 84
const smo111930v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111930v0ar = [];
const smo111909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo111909.setAttribute('id', 'smo111909');
smo111930v0ar.push(smo111909);
const smo111910 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo111910.setAttribute('id', 'smo111910');
smo111930v0ar.push(smo111910);
const smo111911 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n"]}'))
smo111911.setAttribute('id', 'smo111911');
smo111930v0ar.push(smo111911);
const smo111912 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo111912.setAttribute('id', 'smo111912');
smo111930v0ar.push(smo111912);
const smo111913 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111913.setAttribute('id', 'smo111913');
smo111930v0ar.push(smo111913);
const smo111914 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo111914.setAttribute('id', 'smo111914');
smo111930v0ar.push(smo111914);
const smo111915 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111915.setAttribute('id', 'smo111915');
smo111930v0ar.push(smo111915);
const smo111916 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo111916.setAttribute('id', 'smo111916');
smo111930v0ar.push(smo111916);
smo111930v0.addTickables(smo111930v0ar)
fmtsmo11193084.joinVoices([smo111930v0]);
const fmtsmo11462384 = new VF.Formatter();
//
// voices and notes for stave 1 84
const smo114623v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114623v0ar = [];
const smo114606 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo114606.setAttribute('id', 'smo114606');
smo114623v0ar.push(smo114606);
const smo114607 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo114607.setAttribute('id', 'smo114607');
smo114623v0ar.push(smo114607);
const smo114608 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo114608.setAttribute('id', 'smo114608');
smo114623v0ar.push(smo114608);
const smo114609 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo114609.setAttribute('id', 'smo114609');
smo114623v0ar.push(smo114609);
smo114623v0.addTickables(smo114623v0ar)
fmtsmo11462384.joinVoices([smo114623v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115843 = smo111910.getStemDirection();
smo111910.setStemDirection(dirsmo115843);
smo111911.setStemDirection(dirsmo115843);
smo111912.setStemDirection(dirsmo115843);
const smo115843 = new VF.Beam([smo111910,smo111911,smo111912]);
const dirsmo115844 = smo111913.getStemDirection();
smo111913.setStemDirection(dirsmo115844);
smo111914.setStemDirection(dirsmo115844);
smo111915.setStemDirection(dirsmo115844);
smo111916.setStemDirection(dirsmo115844);
const smo115844 = new VF.Beam([smo111913,smo111914,smo111915,smo111916]);
const dirsmo115847 = smo114606.getStemDirection();
smo114606.setStemDirection(dirsmo115847);
smo114607.setStemDirection(dirsmo115847);
const smo115847 = new VF.Beam([smo114606,smo114607]);
const dirsmo115848 = smo114608.getStemDirection();
smo114608.setStemDirection(dirsmo115848);
smo114609.setStemDirection(dirsmo115848);
const smo115848 = new VF.Beam([smo114608,smo114609]);
 
// formatting measures in staff group smo109454
fmtsmo11193084.format([smo111930v0,smo114623v0], 237);
const stavesmo111930 = new VF.Stave(73, 1777, 295);
stavesmo111930.setAttribute('id', 'stavesmo111930');
stavesmo111930.setBegBarType(1);
stavesmo111930.addClef('treble');
stavesmo111930.setContext(context);
stavesmo111930.draw();
smo111930v0.draw(context, stavesmo111930);
smo115843.setContext(context);
smo115843.draw();
smo115844.setContext(context);
smo115844.draw();
const stavesmo114623 = new VF.Stave(73, 1921, 295);
stavesmo114623.setAttribute('id', 'stavesmo114623');
stavesmo114623.setBegBarType(1);
stavesmo114623.addClef('bass');
stavesmo114623.setContext(context);
stavesmo114623.draw();
smo114623v0.draw(context, stavesmo114623);
smo115847.setContext(context);
smo115847.draw();
smo115848.setContext(context);
smo115848.draw();
const leftsmo109454stavesmo1119301 = new VF.StaveConnector(stavesmo111930, stavesmo114623).setType(3);
leftsmo109454stavesmo1119301.setContext(context).draw();
const fmtsmo11195085 = new VF.Formatter();
//
// voices and notes for stave 0 85
const smo111950v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111950v0ar = [];
const smo111931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo111931.setAttribute('id', 'smo111931');
smo111950v0ar.push(smo111931);
const smo111932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n","gb/4/n"]}'))
smo111932.setAttribute('id', 'smo111932');
const smo1119320acc = new VF.Accidental('b');
smo111932.addModifier(smo1119320acc, 0);
const smo1119321acc = new VF.Accidental('b');
smo111932.addModifier(smo1119321acc, 1);
smo111950v0ar.push(smo111932);
const smo111933 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo111933.setAttribute('id', 'smo111933');
const smo1119330acc = new VF.Accidental('n');
smo111933.addModifier(smo1119330acc, 0);
const smo1119331acc = new VF.Accidental('n');
smo111933.addModifier(smo1119331acc, 1);
smo111950v0ar.push(smo111933);
const smo111934 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo111934.setAttribute('id', 'smo111934');
smo111950v0ar.push(smo111934);
const smo111935 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n","gb/4/n"]}'))
smo111935.setAttribute('id', 'smo111935');
const smo1119350acc = new VF.Accidental('b');
smo111935.addModifier(smo1119350acc, 0);
const smo1119351acc = new VF.Accidental('b');
smo111935.addModifier(smo1119351acc, 1);
smo111950v0ar.push(smo111935);
const smo111936 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo111936.setAttribute('id', 'smo111936');
const smo1119360acc = new VF.Accidental('n');
smo111936.addModifier(smo1119360acc, 0);
const smo1119361acc = new VF.Accidental('n');
smo111936.addModifier(smo1119361acc, 1);
smo111950v0ar.push(smo111936);
smo111950v0.addTickables(smo111950v0ar)
fmtsmo11195085.joinVoices([smo111950v0]);
const fmtsmo11464185 = new VF.Formatter();
//
// voices and notes for stave 1 85
const smo114641v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114641v0ar = [];
const smo114624 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo114624.setAttribute('id', 'smo114624');
smo114641v0ar.push(smo114624);
const smo114625 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo114625.setAttribute('id', 'smo114625');
smo114641v0ar.push(smo114625);
const smo114626 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo114626.setAttribute('id', 'smo114626');
smo114641v0ar.push(smo114626);
const smo114627 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo114627.setAttribute('id', 'smo114627');
smo114641v0ar.push(smo114627);
smo114641v0.addTickables(smo114641v0ar)
fmtsmo11464185.joinVoices([smo114641v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115851 = smo111931.getStemDirection();
smo111931.setStemDirection(dirsmo115851);
smo111932.setStemDirection(dirsmo115851);
smo111933.setStemDirection(dirsmo115851);
const smo115851 = new VF.Beam([smo111931,smo111932,smo111933]);
const dirsmo115852 = smo111934.getStemDirection();
smo111934.setStemDirection(dirsmo115852);
smo111935.setStemDirection(dirsmo115852);
smo111936.setStemDirection(dirsmo115852);
const smo115852 = new VF.Beam([smo111934,smo111935,smo111936]);
const dirsmo115855 = smo114624.getStemDirection();
smo114624.setStemDirection(dirsmo115855);
smo114625.setStemDirection(dirsmo115855);
const smo115855 = new VF.Beam([smo114624,smo114625]);
const dirsmo115856 = smo114626.getStemDirection();
smo114626.setStemDirection(dirsmo115856);
smo114627.setStemDirection(dirsmo115856);
const smo115856 = new VF.Beam([smo114626,smo114627]);
 
// formatting measures in staff group smo109454
fmtsmo11195085.format([smo111950v0,smo114641v0], 281);
const stavesmo111950 = new VF.Stave(368, 1777, 295);
stavesmo111950.setAttribute('id', 'stavesmo111950');
stavesmo111950.setBegBarType(VF.Barline.type.NONE);
stavesmo111950.setContext(context);
stavesmo111950.draw();
smo111950v0.draw(context, stavesmo111950);
smo115851.setContext(context);
smo115851.draw();
smo115852.setContext(context);
smo115852.draw();
const stavesmo114641 = new VF.Stave(368, 1921, 295);
stavesmo114641.setAttribute('id', 'stavesmo114641');
stavesmo114641.setBegBarType(VF.Barline.type.NONE);
stavesmo114641.setContext(context);
stavesmo114641.draw();
smo114641v0.draw(context, stavesmo114641);
smo115855.setContext(context);
smo115855.draw();
smo115856.setContext(context);
smo115856.draw();
const fmtsmo11197286 = new VF.Formatter();
//
// voices and notes for stave 0 86
const smo111972v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111972v0ar = [];
const smo111951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo111951.setAttribute('id', 'smo111951');
smo111972v0ar.push(smo111951);
const smo111952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111952.setAttribute('id', 'smo111952');
smo111972v0ar.push(smo111952);
const smo111953 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n"]}'))
smo111953.setAttribute('id', 'smo111953');
smo111972v0ar.push(smo111953);
const smo111954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111954.setAttribute('id', 'smo111954');
smo111972v0ar.push(smo111954);
const smo111955 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo111955.setAttribute('id', 'smo111955');
smo111972v0ar.push(smo111955);
const smo111956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo111956.setAttribute('id', 'smo111956');
smo111972v0ar.push(smo111956);
const smo111957 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo111957.setAttribute('id', 'smo111957');
smo111972v0ar.push(smo111957);
const smo111958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo111958.setAttribute('id', 'smo111958');
smo111972v0ar.push(smo111958);
smo111972v0.addTickables(smo111972v0ar)
fmtsmo11197286.joinVoices([smo111972v0]);
const fmtsmo11465986 = new VF.Formatter();
//
// voices and notes for stave 1 86
const smo114659v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114659v0ar = [];
const smo114642 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo114642.setAttribute('id', 'smo114642');
smo114659v0ar.push(smo114642);
const smo114643 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo114643.setAttribute('id', 'smo114643');
smo114659v0ar.push(smo114643);
const smo114644 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo114644.setAttribute('id', 'smo114644');
smo114659v0ar.push(smo114644);
const smo114645 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo114645.setAttribute('id', 'smo114645');
smo114659v0ar.push(smo114645);
smo114659v0.addTickables(smo114659v0ar)
fmtsmo11465986.joinVoices([smo114659v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115859 = smo111952.getStemDirection();
smo111952.setStemDirection(dirsmo115859);
smo111953.setStemDirection(dirsmo115859);
smo111954.setStemDirection(dirsmo115859);
const smo115859 = new VF.Beam([smo111952,smo111953,smo111954]);
const dirsmo115860 = smo111955.getStemDirection();
smo111955.setStemDirection(dirsmo115860);
smo111956.setStemDirection(dirsmo115860);
smo111957.setStemDirection(dirsmo115860);
smo111958.setStemDirection(dirsmo115860);
const smo115860 = new VF.Beam([smo111955,smo111956,smo111957,smo111958]);
const dirsmo115863 = smo114642.getStemDirection();
smo114642.setStemDirection(dirsmo115863);
smo114643.setStemDirection(dirsmo115863);
const smo115863 = new VF.Beam([smo114642,smo114643]);
const dirsmo115864 = smo114644.getStemDirection();
smo114644.setStemDirection(dirsmo115864);
smo114645.setStemDirection(dirsmo115864);
const smo115864 = new VF.Beam([smo114644,smo114645]);
 
// formatting measures in staff group smo109454
fmtsmo11197286.format([smo111972v0,smo114659v0], 281);
const stavesmo111972 = new VF.Stave(663, 1777, 295);
stavesmo111972.setAttribute('id', 'stavesmo111972');
stavesmo111972.setBegBarType(VF.Barline.type.NONE);
stavesmo111972.setContext(context);
stavesmo111972.draw();
smo111972v0.draw(context, stavesmo111972);
smo115859.setContext(context);
smo115859.draw();
smo115860.setContext(context);
smo115860.draw();
const stavesmo114659 = new VF.Stave(663, 1921, 295);
stavesmo114659.setAttribute('id', 'stavesmo114659');
stavesmo114659.setBegBarType(VF.Barline.type.NONE);
stavesmo114659.setContext(context);
stavesmo114659.draw();
smo114659v0.draw(context, stavesmo114659);
smo115863.setContext(context);
smo115863.draw();
smo115864.setContext(context);
smo115864.draw();
const fmtsmo11199387 = new VF.Formatter();
//
// voices and notes for stave 0 87
const smo111993v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo111993v0ar = [];
const smo111973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo111973.setAttribute('id', 'smo111973');
smo111993v0ar.push(smo111973);
const smo111974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/4/n"]}'))
smo111974.setAttribute('id', 'smo111974');
const smo1119740acc = new VF.Accidental('b');
smo111974.addModifier(smo1119740acc, 0);
smo111993v0ar.push(smo111974);
const smo111975 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo111975.setAttribute('id', 'smo111975');
const smo1119750acc = new VF.Accidental('n');
smo111975.addModifier(smo1119750acc, 0);
smo111993v0ar.push(smo111975);
const smo111976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","gn/5/n"]}'))
smo111976.setAttribute('id', 'smo111976');
smo111993v0ar.push(smo111976);
const smo111977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","gn/5/n"]}'))
smo111977.setAttribute('id', 'smo111977');
smo111993v0ar.push(smo111977);
const smo111978 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","fn/5/n"]}'))
smo111978.setAttribute('id', 'smo111978');
smo111993v0ar.push(smo111978);
const smo111979 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n"]}'))
smo111979.setAttribute('id', 'smo111979');
smo111993v0ar.push(smo111979);
smo111993v0.addTickables(smo111993v0ar)
fmtsmo11199387.joinVoices([smo111993v0]);
const fmtsmo11467787 = new VF.Formatter();
//
// voices and notes for stave 1 87
const smo114677v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114677v0ar = [];
const smo114660 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo114660.setAttribute('id', 'smo114660');
smo114677v0ar.push(smo114660);
const smo114661 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo114661.setAttribute('id', 'smo114661');
smo114677v0ar.push(smo114661);
const smo114662 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
smo114662.setAttribute('id', 'smo114662');
smo114677v0ar.push(smo114662);
const smo114663 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo114663.setAttribute('id', 'smo114663');
smo114677v0ar.push(smo114663);
smo114677v0.addTickables(smo114677v0ar)
fmtsmo11467787.joinVoices([smo114677v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115867 = smo111973.getStemDirection();
smo111973.setStemDirection(dirsmo115867);
smo111974.setStemDirection(dirsmo115867);
smo111975.setStemDirection(dirsmo115867);
smo111976.setStemDirection(dirsmo115867);
const smo115867 = new VF.Beam([smo111973,smo111974,smo111975,smo111976]);
const dirsmo115868 = smo111977.getStemDirection();
smo111977.setStemDirection(dirsmo115868);
smo111978.setStemDirection(dirsmo115868);
smo111979.setStemDirection(dirsmo115868);
const smo115868 = new VF.Beam([smo111977,smo111978,smo111979]);
const dirsmo115871 = smo114660.getStemDirection();
smo114660.setStemDirection(dirsmo115871);
smo114661.setStemDirection(dirsmo115871);
const smo115871 = new VF.Beam([smo114660,smo114661]);
const dirsmo115872 = smo114662.getStemDirection();
smo114662.setStemDirection(dirsmo115872);
smo114663.setStemDirection(dirsmo115872);
const smo115872 = new VF.Beam([smo114662,smo114663]);
 
// formatting measures in staff group smo109454
fmtsmo11199387.format([smo111993v0,smo114677v0], 281);
const stavesmo111993 = new VF.Stave(958, 1777, 295);
stavesmo111993.setAttribute('id', 'stavesmo111993');
stavesmo111993.setBegBarType(VF.Barline.type.NONE);
stavesmo111993.setContext(context);
stavesmo111993.draw();
smo111993v0.draw(context, stavesmo111993);
smo115867.setContext(context);
smo115867.draw();
smo115868.setContext(context);
smo115868.draw();
const stavesmo114677 = new VF.Stave(958, 1921, 295);
stavesmo114677.setAttribute('id', 'stavesmo114677');
stavesmo114677.setBegBarType(VF.Barline.type.NONE);
stavesmo114677.setContext(context);
stavesmo114677.draw();
smo114677v0.draw(context, stavesmo114677);
smo115871.setContext(context);
smo115871.draw();
smo115872.setContext(context);
smo115872.draw();
const fmtsmo11201588 = new VF.Formatter();
//
// voices and notes for stave 0 88
const smo112015v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo112015v0ar = [];
const smo111994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n"]}'))
smo111994.setAttribute('id', 'smo111994');
smo112015v0ar.push(smo111994);
const smo111995 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
smo111995.setAttribute('id', 'smo111995');
const smo1119950acc = new VF.Accidental('b');
smo111995.addModifier(smo1119950acc, 0);
smo112015v0ar.push(smo111995);
const smo111996 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo111996.setAttribute('id', 'smo111996');
const smo1119960acc = new VF.Accidental('n');
smo111996.addModifier(smo1119960acc, 0);
smo112015v0ar.push(smo111996);
const smo111997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo111997.setAttribute('id', 'smo111997');
smo112015v0ar.push(smo111997);
const smo111998 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo111998.setAttribute('id', 'smo111998');
smo112015v0ar.push(smo111998);
const smo111999 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
smo111999.setAttribute('id', 'smo111999');
smo112015v0ar.push(smo111999);
const smo112000 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo112000.setAttribute('id', 'smo112000');
smo112015v0ar.push(smo112000);
const smo112001 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo112001.setAttribute('id', 'smo112001');
smo112015v0ar.push(smo112001);
smo112015v0.addTickables(smo112015v0ar)
fmtsmo11201588.joinVoices([smo112015v0]);
const fmtsmo11469588 = new VF.Formatter();
//
// voices and notes for stave 1 88
const smo114695v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114695v0ar = [];
const smo114678 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo114678.setAttribute('id', 'smo114678');
smo114695v0ar.push(smo114678);
const smo114679 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo114679.setAttribute('id', 'smo114679');
smo114695v0ar.push(smo114679);
const smo114680 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","cn/4/n","eb/4/n"]}'))
smo114680.setAttribute('id', 'smo114680');
const smo1146800acc = new VF.Accidental('b');
smo114680.addModifier(smo1146800acc, 0);
const smo1146802acc = new VF.Accidental('b');
smo114680.addModifier(smo1146802acc, 2);
smo114695v0ar.push(smo114680);
const smo114681 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo114681.setAttribute('id', 'smo114681');
const smo1146810acc = new VF.Accidental('n');
smo114681.addModifier(smo1146810acc, 0);
const smo1146812acc = new VF.Accidental('n');
smo114681.addModifier(smo1146812acc, 2);
smo114695v0ar.push(smo114681);
smo114695v0.addTickables(smo114695v0ar)
fmtsmo11469588.joinVoices([smo114695v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115875 = smo111994.getStemDirection();
smo111994.setStemDirection(dirsmo115875);
smo111995.setStemDirection(dirsmo115875);
smo111996.setStemDirection(dirsmo115875);
smo111997.setStemDirection(dirsmo115875);
const smo115875 = new VF.Beam([smo111994,smo111995,smo111996,smo111997]);
const dirsmo115876 = smo111998.getStemDirection();
smo111998.setStemDirection(dirsmo115876);
smo111999.setStemDirection(dirsmo115876);
smo112000.setStemDirection(dirsmo115876);
smo112001.setStemDirection(dirsmo115876);
const smo115876 = new VF.Beam([smo111998,smo111999,smo112000,smo112001]);
const dirsmo115879 = smo114678.getStemDirection();
smo114678.setStemDirection(dirsmo115879);
smo114679.setStemDirection(dirsmo115879);
const smo115879 = new VF.Beam([smo114678,smo114679]);
const dirsmo115880 = smo114680.getStemDirection();
smo114680.setStemDirection(dirsmo115880);
smo114681.setStemDirection(dirsmo115880);
const smo115880 = new VF.Beam([smo114680,smo114681]);
 
// formatting measures in staff group smo109454
fmtsmo11201588.format([smo112015v0,smo114695v0], 281);
const stavesmo112015 = new VF.Stave(1253, 1777, 295);
stavesmo112015.setAttribute('id', 'stavesmo112015');
stavesmo112015.setBegBarType(VF.Barline.type.NONE);
stavesmo112015.setContext(context);
stavesmo112015.draw();
smo112015v0.draw(context, stavesmo112015);
smo115875.setContext(context);
smo115875.draw();
smo115876.setContext(context);
smo115876.draw();
const stavesmo114695 = new VF.Stave(1253, 1921, 295);
stavesmo114695.setAttribute('id', 'stavesmo114695');
stavesmo114695.setBegBarType(VF.Barline.type.NONE);
stavesmo114695.setContext(context);
stavesmo114695.draw();
smo114695v0.draw(context, stavesmo114695);
smo115879.setContext(context);
smo115879.draw();
smo115880.setContext(context);
smo115880.draw();
const fmtsmo11203489 = new VF.Formatter();
//
// voices and notes for stave 0 89
const smo112034v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo112034v0ar = [];
const smo112016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","cn/5/n"]}'))
smo112016.setAttribute('id', 'smo112016');
const smo1120160acc = new VF.Accidental('b');
smo112016.addModifier(smo1120160acc, 0);
smo112034v0ar.push(smo112016);
const smo112017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","cn/5/n"]}'))
smo112017.setAttribute('id', 'smo112017');
smo112034v0ar.push(smo112017);
const smo112018 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","bn/4/n","en/5/n"]}'))
smo112018.setAttribute('id', 'smo112018');
smo112034v0ar.push(smo112018);
const smo112019 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","bn/4/n","dn/5/n"]}'))
smo112019.setAttribute('id', 'smo112019');
smo112034v0ar.push(smo112019);
const smo112020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n","cn/5/n"]}'))
smo112020.setAttribute('id', 'smo112020');
const smo1120201acc = new VF.Accidental('n');
smo112020.addModifier(smo1120201acc, 1);
smo112034v0ar.push(smo112020);
smo112034v0.addTickables(smo112034v0ar)
fmtsmo11203489.joinVoices([smo112034v0]);
const fmtsmo11471389 = new VF.Formatter();
//
// voices and notes for stave 1 89
const smo114713v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114713v0ar = [];
const smo114696 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
smo114696.setAttribute('id', 'smo114696');
smo114713v0ar.push(smo114696);
const smo114697 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo114697.setAttribute('id', 'smo114697');
smo114713v0ar.push(smo114697);
const smo114698 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo114698.setAttribute('id', 'smo114698');
smo114713v0ar.push(smo114698);
const smo114699 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n","bn/3/n"]}'))
smo114699.setAttribute('id', 'smo114699');
smo114713v0ar.push(smo114699);
smo114713v0.addTickables(smo114713v0ar)
fmtsmo11471389.joinVoices([smo114713v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115883 = smo112016.getStemDirection();
smo112016.setStemDirection(dirsmo115883);
smo112017.setStemDirection(dirsmo115883);
const smo115883 = new VF.Beam([smo112016,smo112017]);
const dirsmo115884 = smo112018.getStemDirection();
smo112018.setStemDirection(dirsmo115884);
smo112019.setStemDirection(dirsmo115884);
smo112020.setStemDirection(dirsmo115884);
const smo115884 = new VF.Beam([smo112018,smo112019,smo112020]);
const dirsmo115887 = smo114696.getStemDirection();
smo114696.setStemDirection(dirsmo115887);
smo114697.setStemDirection(dirsmo115887);
const smo115887 = new VF.Beam([smo114696,smo114697]);
const dirsmo115888 = smo114698.getStemDirection();
smo114698.setStemDirection(dirsmo115888);
smo114699.setStemDirection(dirsmo115888);
const smo115888 = new VF.Beam([smo114698,smo114699]);
 
// formatting measures in staff group smo109454
fmtsmo11203489.format([smo112034v0,smo114713v0], 281);
const stavesmo112034 = new VF.Stave(1548, 1777, 295);
stavesmo112034.setAttribute('id', 'stavesmo112034');
stavesmo112034.setBegBarType(VF.Barline.type.NONE);
stavesmo112034.setContext(context);
stavesmo112034.draw();
smo112034v0.draw(context, stavesmo112034);
smo115883.setContext(context);
smo115883.draw();
smo115884.setContext(context);
smo115884.draw();
const stavesmo114713 = new VF.Stave(1548, 1921, 295);
stavesmo114713.setAttribute('id', 'stavesmo114713');
stavesmo114713.setBegBarType(VF.Barline.type.NONE);
stavesmo114713.setContext(context);
stavesmo114713.draw();
smo114713v0.draw(context, stavesmo114713);
smo115887.setContext(context);
smo115887.draw();
smo115888.setContext(context);
smo115888.draw();
const rightsmo109454stavesmo1120341 = new VF.StaveConnector(stavesmo112034, stavesmo114713).setType(0);
rightsmo109454stavesmo1120341.setContext(context).draw();
const fmtsmo11205490 = new VF.Formatter();
//
// voices and notes for stave 0 90
const smo112054v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo112054v0ar = [];
const smo112035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n","cn/5/n"]}'))
smo112035.setAttribute('id', 'smo112035');
smo112054v0ar.push(smo112035);
const smo112036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo112036.setAttribute('id', 'smo112036');
smo112054v0ar.push(smo112036);
const smo112037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo112037.setAttribute('id', 'smo112037');
smo112054v0ar.push(smo112037);
const smo112038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo112038.setAttribute('id', 'smo112038');
smo112054v0ar.push(smo112038);
const smo112039 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo112039.setAttribute('id', 'smo112039');
smo112054v0ar.push(smo112039);
smo112054v0.addTickables(smo112054v0ar)
fmtsmo11205490.joinVoices([smo112054v0]);
const fmtsmo11473190 = new VF.Formatter();
//
// voices and notes for stave 1 90
const smo114731v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114731v0ar = [];
const smo114714 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo114714.setAttribute('id', 'smo114714');
smo114731v0ar.push(smo114714);
const smo114715 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo114715.setAttribute('id', 'smo114715');
smo114731v0ar.push(smo114715);
const smo114716 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo114716.setAttribute('id', 'smo114716');
smo114731v0ar.push(smo114716);
smo114731v0.addTickables(smo114731v0ar)
fmtsmo11473190.joinVoices([smo114731v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115895 = smo112035.getStemDirection();
smo112035.setStemDirection(dirsmo115895);
smo112036.setStemDirection(dirsmo115895);
smo112037.setStemDirection(dirsmo115895);
const smo115895 = new VF.Beam([smo112035,smo112036,smo112037]);
const dirsmo115896 = smo112038.getStemDirection();
smo112038.setStemDirection(dirsmo115896);
smo112039.setStemDirection(dirsmo115896);
const smo115896 = new VF.Beam([smo112038,smo112039]);
 
// formatting measures in staff group smo109454
fmtsmo11205490.format([smo112054v0,smo114731v0], 233);
const stavesmo112054 = new VF.Stave(73, 2089, 295);
stavesmo112054.setAttribute('id', 'stavesmo112054');
stavesmo112054.setBegBarType(1);
stavesmo112054.setEndBarType(5);
stavesmo112054.addClef('treble');
stavesmo112054.setContext(context);
stavesmo112054.draw();
smo112054v0.draw(context, stavesmo112054);
smo115895.setContext(context);
smo115895.draw();
smo115896.setContext(context);
smo115896.draw();
const stavesmo114731 = new VF.Stave(73, 2234, 295);
stavesmo114731.setAttribute('id', 'stavesmo114731');
stavesmo114731.setBegBarType(1);
stavesmo114731.setEndBarType(5);
stavesmo114731.addClef('bass');
stavesmo114731.setContext(context);
stavesmo114731.draw();
smo114731v0.draw(context, stavesmo114731);
const leftsmo109454stavesmo1120541 = new VF.StaveConnector(stavesmo112054, stavesmo114731).setType(3);
leftsmo109454stavesmo1120541.setContext(context).draw();
const fmtsmo11207291 = new VF.Formatter();
//
// voices and notes for stave 0 91
const smo112072v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo112072v0ar = [];
const smo112055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n","cn/5/n"]}'))
smo112055.setAttribute('id', 'smo112055');
smo112072v0ar.push(smo112055);
const smo112056 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","gn/5/n","cn/6/n"]}'))
smo112056.setAttribute('id', 'smo112056');
smo112072v0ar.push(smo112056);
const smo112057 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo112057.setAttribute('id', 'smo112057');
smo112072v0ar.push(smo112057);
smo112072v0.addTickables(smo112072v0ar)
fmtsmo11207291.joinVoices([smo112072v0]);
const fmtsmo11475091 = new VF.Formatter();
//
// voices and notes for stave 1 91
const smo114750v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114750v0ar = [];
const smo114732 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo114732.setAttribute('id', 'smo114732');
smo114750v0ar.push(smo114732);
const smo114733 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo114733.setAttribute('id', 'smo114733');
smo114750v0ar.push(smo114733);
const smo114734 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo114734.setAttribute('id', 'smo114734');
smo114750v0ar.push(smo114734);
const smo114735 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo114735.setAttribute('id', 'smo114735');
smo114750v0ar.push(smo114735);
smo114750v0.addTickables(smo114750v0ar)
fmtsmo11475091.joinVoices([smo114750v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115901 = smo114732.getStemDirection();
smo114732.setStemDirection(dirsmo115901);
smo114733.setStemDirection(dirsmo115901);
const smo115901 = new VF.Beam([smo114732,smo114733]);
 
// formatting measures in staff group smo109454
fmtsmo11207291.format([smo112072v0,smo114750v0], 281);
const stavesmo112072 = new VF.Stave(368, 2089, 295);
stavesmo112072.setAttribute('id', 'stavesmo112072');
stavesmo112072.setBegBarType(VF.Barline.type.NONE);
stavesmo112072.setContext(context);
stavesmo112072.draw();
smo112072v0.draw(context, stavesmo112072);
const stavesmo114750 = new VF.Stave(368, 2234, 295);
stavesmo114750.setAttribute('id', 'stavesmo114750');
stavesmo114750.setBegBarType(VF.Barline.type.NONE);
stavesmo114750.setEndBarType(3);
stavesmo114750.setContext(context);
stavesmo114750.draw();
smo114750v0.draw(context, stavesmo114750);
smo115901.setContext(context);
smo115901.draw();
// modifier from 0-67-0-0 to 0-67-0-0
const smo116698 = new VF.StaveHairpin({ first_note: smo111566, last_note: smo111566,
       firstNote: smo111566, lastNote: smo111566 });
smo116698.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -10,right_shift_px: 10 });
smo116698.setContext(context).setPosition(4).draw();
// modifier from 0-67-0-1 to 0-67-0-2
const smo116699 = new VF.StaveHairpin({ first_note: smo111567, last_note: smo111567,
       firstNote: smo111567, lastNote: smo111567 });
smo116699.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo116699.setContext(context).setPosition(4).draw();
// modifier from 0-60-0-3 to 0-60-0-4
const smo116700 = new VF.StaveTie({ first_note: smo111429, last_note: smo111430, 
          firstNote: smo111429, lastNote: smo111430, first_indices: [0], last_indices: [0]});
smo116700.setContext(context).draw();
// modifier from 0-62-0-2 to 0-62-0-3
const smo116701 = new VF.StaveTie({ first_note: smo111466, last_note: smo111467, 
          firstNote: smo111466, lastNote: smo111467, first_indices: [0,1], last_indices: [0,1]});
smo116701.setContext(context).draw();
// modifier from 0-64-0-2 to 0-64-0-3
const smo116702 = new VF.StaveTie({ first_note: smo111506, last_note: smo111507, 
          firstNote: smo111506, lastNote: smo111507, first_indices: [0,1], last_indices: [0,1]});
smo116702.setContext(context).draw();
// modifier from 0-65-0-0 to 0-65-0-1
const smo116703 = new VF.StaveTie({ first_note: smo111523, last_note: smo111524, 
          firstNote: smo111523, lastNote: smo111524, first_indices: [0,1,2], last_indices: [0,1,2]});
smo116703.setContext(context).draw();
// modifier from 0-66-0-2 to 0-66-0-3
const smo116704 = new VF.StaveTie({ first_note: smo111548, last_note: smo111549, 
          firstNote: smo111548, lastNote: smo111549, first_indices: [0], last_indices: [0]});
smo116704.setContext(context).draw();
// modifier from 0-68-0-2 to 0-68-0-3
const smo116705 = new VF.StaveTie({ first_note: smo111587, last_note: smo111588, 
          firstNote: smo111587, lastNote: smo111588, first_indices: [0,1], last_indices: [0,1]});
smo116705.setContext(context).draw();
// modifier from 0-71-0-2 to 0-71-0-3
const smo116706 = new VF.StaveTie({ first_note: smo111649, last_note: smo111650, 
          firstNote: smo111649, lastNote: smo111650, first_indices: [0], last_indices: [0]});
smo116706.setContext(context).draw();
// modifier from 0-72-0-3 to 0-72-0-4
const smo116707 = new VF.StaveTie({ first_note: smo111671, last_note: smo111672, 
          firstNote: smo111671, lastNote: smo111672, first_indices: [0], last_indices: [0]});
smo116707.setContext(context).draw();
// modifier from 0-73-0-4 to 0-74-0-0
const smo116708 = new VF.StaveTie({ first_note: smo111694, last_note: smo111709, 
          firstNote: smo111694, lastNote: smo111709, first_indices: [0,1], last_indices: [0,1]});
smo116708.setContext(context).draw();
// modifier from 0-75-0-2 to 0-75-0-3
const smo116709 = new VF.StaveTie({ first_note: smo111728, last_note: smo111729, 
          firstNote: smo111728, lastNote: smo111729, first_indices: [0,1], last_indices: [0,1]});
smo116709.setContext(context).draw();
// modifier from 0-77-0-2 to 0-77-0-3
const smo116710 = new VF.StaveTie({ first_note: smo111770, last_note: smo111771, 
          firstNote: smo111770, lastNote: smo111771, first_indices: [0,1], last_indices: [0,1]});
smo116710.setContext(context).draw();
// modifier from 0-79-0-2 to 0-79-0-3
const smo116711 = new VF.StaveTie({ first_note: smo111812, last_note: smo111813, 
          firstNote: smo111812, lastNote: smo111813, first_indices: [0,1], last_indices: [0,1]});
smo116711.setContext(context).draw();
// modifier from 0-83-0-2 to 0-83-0-3
const smo116712 = new VF.StaveTie({ first_note: smo111891, last_note: smo111892, 
          firstNote: smo111891, lastNote: smo111892, first_indices: [0,1], last_indices: [0,1]});
smo116712.setContext(context).draw();
// modifier from 0-85-0-2 to 0-85-0-3
const smo116713 = new VF.StaveTie({ first_note: smo111933, last_note: smo111934, 
          firstNote: smo111933, lastNote: smo111934, first_indices: [0,1], last_indices: [0,1]});
smo116713.setContext(context).draw();
// modifier from 0-87-0-3 to 0-87-0-4
const smo116714 = new VF.StaveTie({ first_note: smo111976, last_note: smo111977, 
          firstNote: smo111976, lastNote: smo111977, first_indices: [0,1], last_indices: [0,1]});
smo116714.setContext(context).draw();
// modifier from 0-88-0-3 to 0-88-0-4
const smo116715 = new VF.StaveTie({ first_note: smo111997, last_note: smo111998, 
          firstNote: smo111997, lastNote: smo111998, first_indices: [0], last_indices: [0]});
smo116715.setContext(context).draw();
// modifier from 0-89-0-4 to 0-90-0-0
const smo116716 = new VF.StaveTie({ first_note: smo112020, last_note: null, 
          firstNote: smo112020, lastNote: null, first_indices: [0,1,2], last_indices: [0,1,2]});
smo116716.setContext(context).draw();
// modifier from 0-89-0-4 to 0-90-0-0
const smo116717 = new VF.StaveTie({ first_note: null, last_note: smo112035, 
          firstNote: null, lastNote: smo112035, first_indices: [0,1,2], last_indices: [0,1,2]});
smo116717.setContext(context).draw();
const smo111614smo111627 = new VF.Volta(5, '1', 958, 20);
smo111614smo111627.setContext(context).draw(stavesmo111627, -1 * 0);
const smo111632smo111646 = new VF.Volta(5, '2', 1253, 20);
smo111632smo111646.setContext(context).draw(stavesmo111646, -1 * 0);
const smo112041smo112054 = new VF.Volta(5, '1', 73, 20);
smo112041smo112054.setContext(context).draw(stavesmo112054, -1 * 0);
const smo112058smo112072 = new VF.Volta(5, '2', 368, 20);
smo112058smo112072.setContext(context).draw(stavesmo112072, -1 * 0);
}
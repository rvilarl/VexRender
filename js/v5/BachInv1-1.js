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
const fmtsmo7468510 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo74685v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74685v0ar = [];
const smo74662 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo74662.setAttribute('id', 'smo74662');
smo74685v0ar.push(smo74662);
const smo74663 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["c#/5/n"]}'))
smo74663.setAttribute('id', 'smo74663');
const smo746630acc = new VF.Accidental('#');
smo74663.addModifier(smo746630acc, 0);
smo74685v0ar.push(smo74663);
const smo74664 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo74664.setAttribute('id', 'smo74664');
smo74685v0ar.push(smo74664);
const smo74665 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo74665.setAttribute('id', 'smo74665');
smo74685v0ar.push(smo74665);
const smo74666 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo74666.setAttribute('id', 'smo74666');
smo74685v0ar.push(smo74666);
const smo74667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo74667.setAttribute('id', 'smo74667');
smo74685v0ar.push(smo74667);
const smo74668 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74668.setAttribute('id', 'smo74668');
smo74685v0ar.push(smo74668);
const smo74669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/5/n"]}'))
smo74669.setAttribute('id', 'smo74669');
smo74685v0ar.push(smo74669);
smo74685v0.addTickables(smo74685v0ar)
fmtsmo7468510.joinVoices([smo74685v0]);
const fmtsmo7530210 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo75302v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75302v0ar = [];
const smo75271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo75271.setAttribute('id', 'smo75271');
smo75302v0ar.push(smo75271);
const smo75272 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo75272.setAttribute('id', 'smo75272');
const smo752720acc = new VF.Accidental('b');
smo75272.addModifier(smo752720acc, 0);
smo75302v0ar.push(smo75272);
const smo75273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo75273.setAttribute('id', 'smo75273');
smo75302v0ar.push(smo75273);
const smo75274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo75274.setAttribute('id', 'smo75274');
smo75302v0ar.push(smo75274);
const smo75275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo75275.setAttribute('id', 'smo75275');
smo75302v0ar.push(smo75275);
const smo75276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo75276.setAttribute('id', 'smo75276');
smo75302v0ar.push(smo75276);
const smo75277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo75277.setAttribute('id', 'smo75277');
smo75302v0ar.push(smo75277);
const smo75278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo75278.setAttribute('id', 'smo75278');
smo75302v0ar.push(smo75278);
const smo75279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo75279.setAttribute('id', 'smo75279');
smo75302v0ar.push(smo75279);
const smo75280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo75280.setAttribute('id', 'smo75280');
smo75302v0ar.push(smo75280);
const smo75281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo75281.setAttribute('id', 'smo75281');
smo75302v0ar.push(smo75281);
const smo75282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo75282.setAttribute('id', 'smo75282');
smo75302v0ar.push(smo75282);
const smo75283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo75283.setAttribute('id', 'smo75283');
smo75302v0ar.push(smo75283);
const smo75284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo75284.setAttribute('id', 'smo75284');
smo75302v0ar.push(smo75284);
const smo75285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo75285.setAttribute('id', 'smo75285');
smo75302v0ar.push(smo75285);
const smo75286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo75286.setAttribute('id', 'smo75286');
smo75302v0ar.push(smo75286);
smo75302v0.addTickables(smo75302v0ar)
fmtsmo7530210.joinVoices([smo75302v0]);
// create beam groups and tuplets for format grp smo75609 before formatting
const dirsmo77534 = smo74662.getStemDirection();
smo74662.setStemDirection(dirsmo77534);
smo74663.setStemDirection(dirsmo77534);
smo74664.setStemDirection(dirsmo77534);
smo74665.setStemDirection(dirsmo77534);
const smo77534 = new VF.Beam([smo74662,smo74663,smo74664,smo74665]);
const dirsmo77535 = smo74666.getStemDirection();
smo74666.setStemDirection(dirsmo77535);
smo74667.setStemDirection(dirsmo77535);
smo74668.setStemDirection(dirsmo77535);
smo74669.setStemDirection(dirsmo77535);
const smo77535 = new VF.Beam([smo74666,smo74667,smo74668,smo74669]);
const dirsmo77538 = smo75271.getStemDirection();
smo75271.setStemDirection(dirsmo77538);
smo75272.setStemDirection(dirsmo77538);
smo75273.setStemDirection(dirsmo77538);
smo75274.setStemDirection(dirsmo77538);
const smo77538 = new VF.Beam([smo75271,smo75272,smo75273,smo75274]);
const dirsmo77539 = smo75275.getStemDirection();
smo75275.setStemDirection(dirsmo77539);
smo75276.setStemDirection(dirsmo77539);
smo75277.setStemDirection(dirsmo77539);
smo75278.setStemDirection(dirsmo77539);
const smo77539 = new VF.Beam([smo75275,smo75276,smo75277,smo75278]);
const dirsmo77540 = smo75279.getStemDirection();
smo75279.setStemDirection(dirsmo77540);
smo75280.setStemDirection(dirsmo77540);
smo75281.setStemDirection(dirsmo77540);
smo75282.setStemDirection(dirsmo77540);
const smo77540 = new VF.Beam([smo75279,smo75280,smo75281,smo75282]);
const dirsmo77541 = smo75283.getStemDirection();
smo75283.setStemDirection(dirsmo77541);
smo75284.setStemDirection(dirsmo77541);
smo75285.setStemDirection(dirsmo77541);
smo75286.setStemDirection(dirsmo77541);
const smo77541 = new VF.Beam([smo75283,smo75284,smo75285,smo75286]);
 
// formatting measures in staff group smo75609
fmtsmo7468510.format([smo74685v0,smo75302v0], 571);
const stavesmo74685 = new VF.Stave(50, 220.00000000000023, 627);
stavesmo74685.setAttribute('id', 'stavesmo74685');
stavesmo74685.setBegBarType(1);
stavesmo74685.addClef('treble');
stavesmo74685.setContext(context);
stavesmo74685.draw();
smo74685v0.draw(context, stavesmo74685);
smo77534.setContext(context);
smo77534.draw();
smo77535.setContext(context);
smo77535.draw();
const stavesmo75302 = new VF.Stave(50, 323.0000000000002, 627);
stavesmo75302.setAttribute('id', 'stavesmo75302');
stavesmo75302.setBegBarType(1);
stavesmo75302.addClef('treble');
stavesmo75302.setContext(context);
stavesmo75302.draw();
smo75302v0.draw(context, stavesmo75302);
smo77538.setContext(context);
smo77538.draw();
smo77539.setContext(context);
smo77539.draw();
smo77540.setContext(context);
smo77540.draw();
smo77541.setContext(context);
smo77541.draw();
const leftsmo75609stavesmo746851 = new VF.StaveConnector(stavesmo74685, stavesmo75302).setType(3);
leftsmo75609stavesmo746851.setContext(context).draw();
const fmtsmo7470811 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo74708v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74708v0ar = [];
const smo74686 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo74686.setAttribute('id', 'smo74686');
smo74708v0ar.push(smo74686);
const smo74687 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo74687.setAttribute('id', 'smo74687');
const smo746870acc = new VF.Accidental('#');
smo74687.addModifier(smo746870acc, 0);
smo74708v0ar.push(smo74687);
const smo74688 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["g#/4/n"]}'))
smo74688.setAttribute('id', 'smo74688');
const smo746880acc = new VF.Accidental('#');
smo74688.addModifier(smo746880acc, 0);
smo74708v0ar.push(smo74688);
const smo74689 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo74689.setAttribute('id', 'smo74689');
smo74708v0ar.push(smo74689);
const smo74690 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74690.setAttribute('id', 'smo74690');
smo74708v0ar.push(smo74690);
const smo74691 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo74691.setAttribute('id', 'smo74691');
smo74708v0ar.push(smo74691);
const smo74692 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo74692.setAttribute('id', 'smo74692');
smo74708v0ar.push(smo74692);
smo74708v0.addTickables(smo74708v0ar)
fmtsmo7470811.joinVoices([smo74708v0]);
const fmtsmo7533411 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo75334v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75334v0ar = [];
const smo75303 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo75303.setAttribute('id', 'smo75303');
smo75334v0ar.push(smo75303);
const smo75304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo75304.setAttribute('id', 'smo75304');
smo75334v0ar.push(smo75304);
const smo75305 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo75305.setAttribute('id', 'smo75305');
smo75334v0ar.push(smo75305);
const smo75306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo75306.setAttribute('id', 'smo75306');
smo75334v0ar.push(smo75306);
const smo75307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo75307.setAttribute('id', 'smo75307');
smo75334v0ar.push(smo75307);
const smo75308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo75308.setAttribute('id', 'smo75308');
smo75334v0ar.push(smo75308);
const smo75309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo75309.setAttribute('id', 'smo75309');
smo75334v0ar.push(smo75309);
const smo75310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo75310.setAttribute('id', 'smo75310');
smo75334v0ar.push(smo75310);
const smo75311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo75311.setAttribute('id', 'smo75311');
smo75334v0ar.push(smo75311);
const smo75312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo75312.setAttribute('id', 'smo75312');
smo75334v0ar.push(smo75312);
const smo75313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo75313.setAttribute('id', 'smo75313');
smo75334v0ar.push(smo75313);
const smo75314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo75314.setAttribute('id', 'smo75314');
smo75334v0ar.push(smo75314);
const smo75315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["g#/3/n"]}'))
smo75315.setAttribute('id', 'smo75315');
const smo753150acc = new VF.Accidental('#');
smo75315.addModifier(smo753150acc, 0);
smo75334v0ar.push(smo75315);
const smo75316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo75316.setAttribute('id', 'smo75316');
smo75334v0ar.push(smo75316);
const smo75317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo75317.setAttribute('id', 'smo75317');
smo75334v0ar.push(smo75317);
const smo75318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo75318.setAttribute('id', 'smo75318');
smo75334v0ar.push(smo75318);
smo75334v0.addTickables(smo75334v0ar)
fmtsmo7533411.joinVoices([smo75334v0]);
// create beam groups and tuplets for format grp smo75609 before formatting
const dirsmo77544 = smo74686.getStemDirection();
smo74686.setStemDirection(dirsmo77544);
smo74687.setStemDirection(dirsmo77544);
smo74688.setStemDirection(dirsmo77544);
smo74689.setStemDirection(dirsmo77544);
const smo77544 = new VF.Beam([smo74686,smo74687,smo74688,smo74689]);
const dirsmo77545 = smo74690.getStemDirection();
smo74690.setStemDirection(dirsmo77545);
smo74691.setStemDirection(dirsmo77545);
const smo77545 = new VF.Beam([smo74690,smo74691]);
const dirsmo77548 = smo75303.getStemDirection();
smo75303.setStemDirection(dirsmo77548);
smo75304.setStemDirection(dirsmo77548);
smo75305.setStemDirection(dirsmo77548);
smo75306.setStemDirection(dirsmo77548);
const smo77548 = new VF.Beam([smo75303,smo75304,smo75305,smo75306]);
const dirsmo77549 = smo75307.getStemDirection();
smo75307.setStemDirection(dirsmo77549);
smo75308.setStemDirection(dirsmo77549);
smo75309.setStemDirection(dirsmo77549);
smo75310.setStemDirection(dirsmo77549);
const smo77549 = new VF.Beam([smo75307,smo75308,smo75309,smo75310]);
const dirsmo77550 = smo75311.getStemDirection();
smo75311.setStemDirection(dirsmo77550);
smo75312.setStemDirection(dirsmo77550);
smo75313.setStemDirection(dirsmo77550);
smo75314.setStemDirection(dirsmo77550);
const smo77550 = new VF.Beam([smo75311,smo75312,smo75313,smo75314]);
const dirsmo77551 = smo75315.getStemDirection();
smo75315.setStemDirection(dirsmo77551);
smo75316.setStemDirection(dirsmo77551);
smo75317.setStemDirection(dirsmo77551);
smo75318.setStemDirection(dirsmo77551);
const smo77551 = new VF.Beam([smo75315,smo75316,smo75317,smo75318]);
 
// formatting measures in staff group smo75609
fmtsmo7470811.format([smo74708v0,smo75334v0], 568);
const stavesmo74708 = new VF.Stave(677, 220.00000000000023, 582);
stavesmo74708.setAttribute('id', 'stavesmo74708');
stavesmo74708.setBegBarType(VF.Barline.type.NONE);
stavesmo74708.setContext(context);
stavesmo74708.draw();
smo74708v0.draw(context, stavesmo74708);
smo77544.setContext(context);
smo77544.draw();
smo77545.setContext(context);
smo77545.draw();
const stavesmo75334 = new VF.Stave(677, 323.0000000000002, 582);
stavesmo75334.setAttribute('id', 'stavesmo75334');
stavesmo75334.setBegBarType(VF.Barline.type.NONE);
stavesmo75334.setContext(context);
stavesmo75334.draw();
smo75334v0.draw(context, stavesmo75334);
smo77548.setContext(context);
smo77548.draw();
smo77549.setContext(context);
smo77549.draw();
smo77550.setContext(context);
smo77550.draw();
smo77551.setContext(context);
smo77551.draw();
const rightsmo75609stavesmo747081 = new VF.StaveConnector(stavesmo74708, stavesmo75334).setType(0);
rightsmo75609stavesmo747081.setContext(context).draw();
const fmtsmo7474012 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo74740v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74740v0ar = [];
const smo74709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo74709.setAttribute('id', 'smo74709');
smo74740v0ar.push(smo74709);
const smo74710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo74710.setAttribute('id', 'smo74710');
smo74740v0ar.push(smo74710);
const smo74711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo74711.setAttribute('id', 'smo74711');
const smo747110acc = new VF.Accidental('#');
smo74711.addModifier(smo747110acc, 0);
smo74740v0ar.push(smo74711);
const smo74712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo74712.setAttribute('id', 'smo74712');
const smo747120acc = new VF.Accidental('#');
smo74712.addModifier(smo747120acc, 0);
smo74740v0ar.push(smo74712);
const smo74713 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo74713.setAttribute('id', 'smo74713');
smo74740v0ar.push(smo74713);
const smo74714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo74714.setAttribute('id', 'smo74714');
smo74740v0ar.push(smo74714);
const smo74715 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo74715.setAttribute('id', 'smo74715');
smo74740v0ar.push(smo74715);
const smo74716 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo74716.setAttribute('id', 'smo74716');
smo74740v0ar.push(smo74716);
const smo74717 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo74717.setAttribute('id', 'smo74717');
smo74740v0ar.push(smo74717);
const smo74718 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo74718.setAttribute('id', 'smo74718');
smo74740v0ar.push(smo74718);
const smo74719 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo74719.setAttribute('id', 'smo74719');
smo74740v0ar.push(smo74719);
const smo74720 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo74720.setAttribute('id', 'smo74720');
smo74740v0ar.push(smo74720);
const smo74721 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo74721.setAttribute('id', 'smo74721');
smo74740v0ar.push(smo74721);
const smo74722 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo74722.setAttribute('id', 'smo74722');
smo74740v0ar.push(smo74722);
const smo74723 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo74723.setAttribute('id', 'smo74723');
smo74740v0ar.push(smo74723);
const smo74724 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo74724.setAttribute('id', 'smo74724');
smo74740v0ar.push(smo74724);
smo74740v0.addTickables(smo74740v0ar)
fmtsmo7474012.joinVoices([smo74740v0]);
const fmtsmo7536312 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo75363v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75363v0ar = [];
const smo75335 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo75335.setAttribute('id', 'smo75335');
smo75363v0ar.push(smo75335);
const smo75336 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo75336.setAttribute('id', 'smo75336');
smo75363v0ar.push(smo75336);
const smo75337 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo75337.setAttribute('id', 'smo75337');
smo75337.addModifier(new VF.Dot(), 0);
const smo75338 = new VF.Ornament('');
smo75337.addModifier(smo75338, 0);
smo75363v0ar.push(smo75337);
const smo75339 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo75339.setAttribute('id', 'smo75339');
smo75363v0ar.push(smo75339);
const smo75340 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo75340.setAttribute('id', 'smo75340');
smo75363v0ar.push(smo75340);
const smo75341 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo75341.setAttribute('id', 'smo75341');
smo75363v0ar.push(smo75341);
const smo75342 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo75342.setAttribute('id', 'smo75342');
smo75363v0ar.push(smo75342);
const smo75343 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo75343.setAttribute('id', 'smo75343');
const smo753430acc = new VF.Accidental('n');
smo753430acc.setAsCautionary();
smo75343.addModifier(smo753430acc, 0);
smo75363v0ar.push(smo75343);
const smo75344 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/3/n"]}'))
smo75344.setAttribute('id', 'smo75344');
const smo753440acc = new VF.Accidental('#');
smo75344.addModifier(smo753440acc, 0);
smo75363v0ar.push(smo75344);
const smo75345 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo75345.setAttribute('id', 'smo75345');
smo75363v0ar.push(smo75345);
const smo75346 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["g#/3/n"]}'))
smo75346.setAttribute('id', 'smo75346');
const smo753460acc = new VF.Accidental('#');
smo75346.addModifier(smo753460acc, 0);
smo75363v0ar.push(smo75346);
const smo75347 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo75347.setAttribute('id', 'smo75347');
smo75363v0ar.push(smo75347);
smo75363v0.addTickables(smo75363v0ar)
fmtsmo7536312.joinVoices([smo75363v0]);
// create beam groups and tuplets for format grp smo75609 before formatting
const dirsmo77566 = smo74709.getStemDirection();
smo74709.setStemDirection(dirsmo77566);
smo74710.setStemDirection(dirsmo77566);
smo74711.setStemDirection(dirsmo77566);
smo74712.setStemDirection(dirsmo77566);
const smo77566 = new VF.Beam([smo74709,smo74710,smo74711,smo74712]);
const dirsmo77567 = smo74713.getStemDirection();
smo74713.setStemDirection(dirsmo77567);
smo74714.setStemDirection(dirsmo77567);
smo74715.setStemDirection(dirsmo77567);
smo74716.setStemDirection(dirsmo77567);
const smo77567 = new VF.Beam([smo74713,smo74714,smo74715,smo74716]);
const dirsmo77568 = smo74717.getStemDirection();
smo74717.setStemDirection(dirsmo77568);
smo74718.setStemDirection(dirsmo77568);
smo74719.setStemDirection(dirsmo77568);
smo74720.setStemDirection(dirsmo77568);
const smo77568 = new VF.Beam([smo74717,smo74718,smo74719,smo74720]);
const dirsmo77569 = smo74721.getStemDirection();
smo74721.setStemDirection(dirsmo77569);
smo74722.setStemDirection(dirsmo77569);
smo74723.setStemDirection(dirsmo77569);
smo74724.setStemDirection(dirsmo77569);
const smo77569 = new VF.Beam([smo74721,smo74722,smo74723,smo74724]);
const dirsmo77572 = smo75335.getStemDirection();
smo75335.setStemDirection(dirsmo77572);
smo75336.setStemDirection(dirsmo77572);
const smo77572 = new VF.Beam([smo75335,smo75336]);
const dirsmo77573 = smo75337.getStemDirection();
smo75337.setStemDirection(dirsmo77573);
smo75339.setStemDirection(dirsmo77573);
const smo77573 = new VF.Beam([smo75337,smo75339]);
const dirsmo77574 = smo75340.getStemDirection();
smo75340.setStemDirection(dirsmo77574);
smo75341.setStemDirection(dirsmo77574);
smo75342.setStemDirection(dirsmo77574);
smo75343.setStemDirection(dirsmo77574);
const smo77574 = new VF.Beam([smo75340,smo75341,smo75342,smo75343]);
const dirsmo77575 = smo75344.getStemDirection();
smo75344.setStemDirection(dirsmo77575);
smo75345.setStemDirection(dirsmo77575);
smo75346.setStemDirection(dirsmo77575);
smo75347.setStemDirection(dirsmo77575);
const smo77575 = new VF.Beam([smo75344,smo75345,smo75346,smo75347]);
 
// formatting measures in staff group smo75609
fmtsmo7474012.format([smo74740v0,smo75363v0], 623);
const stavesmo74740 = new VF.Stave(50, 483.0000000000002, 678);
stavesmo74740.setAttribute('id', 'stavesmo74740');
stavesmo74740.setBegBarType(1);
stavesmo74740.addClef('treble');
stavesmo74740.setContext(context);
stavesmo74740.draw();
smo74740v0.draw(context, stavesmo74740);
smo77566.setContext(context);
smo77566.draw();
smo77567.setContext(context);
smo77567.draw();
smo77568.setContext(context);
smo77568.draw();
smo77569.setContext(context);
smo77569.draw();
const stavesmo75363 = new VF.Stave(50, 627.0000000000002, 678);
stavesmo75363.setAttribute('id', 'stavesmo75363');
stavesmo75363.setBegBarType(1);
stavesmo75363.addClef('bass');
stavesmo75363.setContext(context);
stavesmo75363.draw();
smo75363v0.draw(context, stavesmo75363);
smo77572.setContext(context);
smo77572.draw();
smo77573.setContext(context);
smo77573.draw();
smo77574.setContext(context);
smo77574.draw();
smo77575.setContext(context);
smo77575.draw();
const leftsmo75609stavesmo747401 = new VF.StaveConnector(stavesmo74740, stavesmo75363).setType(3);
leftsmo75609stavesmo747401.setContext(context).draw();
const fmtsmo7477213 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo74772v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74772v0ar = [];
const smo74741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo74741.setAttribute('id', 'smo74741');
smo74772v0ar.push(smo74741);
const smo74742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo74742.setAttribute('id', 'smo74742');
smo74772v0ar.push(smo74742);
const smo74743 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["g#/5/n"]}'))
smo74743.setAttribute('id', 'smo74743');
const smo747430acc = new VF.Accidental('#');
smo74743.addModifier(smo747430acc, 0);
smo74772v0ar.push(smo74743);
const smo74744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo74744.setAttribute('id', 'smo74744');
smo74772v0ar.push(smo74744);
const smo74745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo74745.setAttribute('id', 'smo74745');
smo74772v0ar.push(smo74745);
const smo74746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo74746.setAttribute('id', 'smo74746');
smo74772v0ar.push(smo74746);
const smo74747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo74747.setAttribute('id', 'smo74747');
smo74772v0ar.push(smo74747);
const smo74748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo74748.setAttribute('id', 'smo74748');
smo74772v0ar.push(smo74748);
const smo74749 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo74749.setAttribute('id', 'smo74749');
const smo747490acc = new VF.Accidental('#');
smo74749.addModifier(smo747490acc, 0);
smo74772v0ar.push(smo74749);
const smo74750 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo74750.setAttribute('id', 'smo74750');
smo74772v0ar.push(smo74750);
const smo74751 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo74751.setAttribute('id', 'smo74751');
smo74772v0ar.push(smo74751);
const smo74752 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo74752.setAttribute('id', 'smo74752');
smo74772v0ar.push(smo74752);
const smo74753 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo74753.setAttribute('id', 'smo74753');
const smo74754 = new VF.Ornament('');
smo74753.addModifier(smo74754, 0);
smo74772v0ar.push(smo74753);
const smo74755 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo74755.setAttribute('id', 'smo74755');
smo74772v0ar.push(smo74755);
const smo74756 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo74756.setAttribute('id', 'smo74756');
smo74772v0ar.push(smo74756);
smo74772v0.addTickables(smo74772v0ar)
fmtsmo7477213.joinVoices([smo74772v0]);
const fmtsmo7539113 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo75391v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75391v0ar = [];
const smo75364 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo75364.setAttribute('id', 'smo75364');
smo75391v0ar.push(smo75364);
const smo75365 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo75365.setAttribute('id', 'smo75365');
smo75391v0ar.push(smo75365);
const smo75366 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo75366.setAttribute('id', 'smo75366');
smo75391v0ar.push(smo75366);
const smo75367 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo75367.setAttribute('id', 'smo75367');
smo75391v0ar.push(smo75367);
const smo75368 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo75368.setAttribute('id', 'smo75368');
smo75391v0ar.push(smo75368);
const smo75369 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo75369.setAttribute('id', 'smo75369');
smo75391v0ar.push(smo75369);
const smo75370 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo75370.setAttribute('id', 'smo75370');
smo75391v0ar.push(smo75370);
const smo75371 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo75371.setAttribute('id', 'smo75371');
smo75391v0ar.push(smo75371);
const smo75372 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo75372.setAttribute('id', 'smo75372');
smo75391v0ar.push(smo75372);
const smo75373 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo75373.setAttribute('id', 'smo75373');
smo75391v0ar.push(smo75373);
const smo75374 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo75374.setAttribute('id', 'smo75374');
smo75391v0ar.push(smo75374);
const smo75375 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo75375.setAttribute('id', 'smo75375');
smo75391v0ar.push(smo75375);
smo75391v0.addTickables(smo75391v0ar)
fmtsmo7539113.joinVoices([smo75391v0]);
// create beam groups and tuplets for format grp smo75609 before formatting
const dirsmo77578 = smo74741.getStemDirection();
smo74741.setStemDirection(dirsmo77578);
smo74742.setStemDirection(dirsmo77578);
smo74743.setStemDirection(dirsmo77578);
smo74744.setStemDirection(dirsmo77578);
const smo77578 = new VF.Beam([smo74741,smo74742,smo74743,smo74744]);
const dirsmo77579 = smo74745.getStemDirection();
smo74745.setStemDirection(dirsmo77579);
smo74746.setStemDirection(dirsmo77579);
smo74747.setStemDirection(dirsmo77579);
smo74748.setStemDirection(dirsmo77579);
const smo77579 = new VF.Beam([smo74745,smo74746,smo74747,smo74748]);
const dirsmo77580 = smo74749.getStemDirection();
smo74749.setStemDirection(dirsmo77580);
smo74750.setStemDirection(dirsmo77580);
smo74751.setStemDirection(dirsmo77580);
smo74752.setStemDirection(dirsmo77580);
const smo77580 = new VF.Beam([smo74749,smo74750,smo74751,smo74752]);
const dirsmo77581 = smo74753.getStemDirection();
smo74753.setStemDirection(dirsmo77581);
smo74755.setStemDirection(dirsmo77581);
smo74756.setStemDirection(dirsmo77581);
const smo77581 = new VF.Beam([smo74753,smo74755,smo74756]);
const dirsmo77584 = smo75364.getStemDirection();
smo75364.setStemDirection(dirsmo77584);
smo75365.setStemDirection(dirsmo77584);
smo75366.setStemDirection(dirsmo77584);
smo75367.setStemDirection(dirsmo77584);
const smo77584 = new VF.Beam([smo75364,smo75365,smo75366,smo75367]);
const dirsmo77585 = smo75368.getStemDirection();
smo75368.setStemDirection(dirsmo77585);
smo75369.setStemDirection(dirsmo77585);
smo75370.setStemDirection(dirsmo77585);
smo75371.setStemDirection(dirsmo77585);
const smo77585 = new VF.Beam([smo75368,smo75369,smo75370,smo75371]);
const dirsmo77586 = smo75372.getStemDirection();
smo75372.setStemDirection(dirsmo77586);
smo75373.setStemDirection(dirsmo77586);
const smo77586 = new VF.Beam([smo75372,smo75373]);
const dirsmo77587 = smo75374.getStemDirection();
smo75374.setStemDirection(dirsmo77587);
smo75375.setStemDirection(dirsmo77587);
const smo77587 = new VF.Beam([smo75374,smo75375]);
 
// formatting measures in staff group smo75609
fmtsmo7477213.format([smo74772v0,smo75391v0], 518);
const stavesmo74772 = new VF.Stave(728, 483.0000000000002, 532);
stavesmo74772.setAttribute('id', 'stavesmo74772');
stavesmo74772.setBegBarType(VF.Barline.type.NONE);
stavesmo74772.setContext(context);
stavesmo74772.draw();
smo74772v0.draw(context, stavesmo74772);
smo77578.setContext(context);
smo77578.draw();
smo77579.setContext(context);
smo77579.draw();
smo77580.setContext(context);
smo77580.draw();
smo77581.setContext(context);
smo77581.draw();
const stavesmo75391 = new VF.Stave(728, 627.0000000000002, 532);
stavesmo75391.setAttribute('id', 'stavesmo75391');
stavesmo75391.setBegBarType(VF.Barline.type.NONE);
stavesmo75391.setContext(context);
stavesmo75391.draw();
smo75391v0.draw(context, stavesmo75391);
smo77584.setContext(context);
smo77584.draw();
smo77585.setContext(context);
smo77585.draw();
smo77586.setContext(context);
smo77586.draw();
smo77587.setContext(context);
smo77587.draw();
const rightsmo75609stavesmo747721 = new VF.StaveConnector(stavesmo74772, stavesmo75391).setType(0);
rightsmo75609stavesmo747721.setContext(context).draw();
const fmtsmo7479814 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo74798v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74798v0ar = [];
const smo74773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo74773.setAttribute('id', 'smo74773');
const  smo77818 = new VF.Articulation('a.').setPosition(4);
smo74773.addModifier(smo77818, 0);
smo74798v0ar.push(smo74773);
const smo74775 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo74775.setAttribute('id', 'smo74775');
smo74798v0ar.push(smo74775);
const smo74776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo74776.setAttribute('id', 'smo74776');
smo74798v0ar.push(smo74776);
const smo74777 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo74777.setAttribute('id', 'smo74777');
smo74798v0ar.push(smo74777);
const smo74778 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo74778.setAttribute('id', 'smo74778');
smo74798v0ar.push(smo74778);
const smo74779 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo74779.setAttribute('id', 'smo74779');
smo74798v0ar.push(smo74779);
const smo74780 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo74780.setAttribute('id', 'smo74780');
smo74798v0ar.push(smo74780);
const smo74781 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo74781.setAttribute('id', 'smo74781');
smo74798v0ar.push(smo74781);
const smo74782 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo74782.setAttribute('id', 'smo74782');
smo74798v0ar.push(smo74782);
smo74798v0.addTickables(smo74798v0ar)
fmtsmo7479814.joinVoices([smo74798v0]);
const fmtsmo7541814 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo75418v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75418v0ar = [];
const smo75392 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo75392.setAttribute('id', 'smo75392');
smo75418v0ar.push(smo75392);
const smo75393 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo75393.setAttribute('id', 'smo75393');
smo75418v0ar.push(smo75393);
const smo75394 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["cn/4/r"]}'))
smo75394.setAttribute('id', 'smo75394');
smo75418v0ar.push(smo75394);
const smo75395 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["en/4/r"]}'))
smo75395.setAttribute('id', 'smo75395');
smo75418v0ar.push(smo75395);
const smo75396 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo75396.setAttribute('id', 'smo75396');
smo75418v0ar.push(smo75396);
const smo75397 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo75397.setAttribute('id', 'smo75397');
smo75418v0ar.push(smo75397);
const smo75398 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo75398.setAttribute('id', 'smo75398');
smo75418v0ar.push(smo75398);
const smo75399 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo75399.setAttribute('id', 'smo75399');
smo75418v0ar.push(smo75399);
const smo75400 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo75400.setAttribute('id', 'smo75400');
smo75418v0ar.push(smo75400);
const smo75401 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["c#/4/n"]}'))
smo75401.setAttribute('id', 'smo75401');
const smo754010acc = new VF.Accidental('#');
smo75401.addModifier(smo754010acc, 0);
smo75418v0ar.push(smo75401);
const smo75402 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo75402.setAttribute('id', 'smo75402');
smo75418v0ar.push(smo75402);
smo75418v0.addTickables(smo75418v0ar)
fmtsmo7541814.joinVoices([smo75418v0]);
// create beam groups and tuplets for format grp smo75609 before formatting
const dirsmo77599 = smo74773.getStemDirection();
smo74773.setStemDirection(dirsmo77599);
smo74775.setStemDirection(dirsmo77599);
smo74776.setStemDirection(dirsmo77599);
smo74777.setStemDirection(dirsmo77599);
const smo77599 = new VF.Beam([smo74773,smo74775,smo74776,smo74777]);
const dirsmo77600 = smo74778.getStemDirection();
smo74778.setStemDirection(dirsmo77600);
smo74779.setStemDirection(dirsmo77600);
smo74780.setStemDirection(dirsmo77600);
smo74781.setStemDirection(dirsmo77600);
const smo77600 = new VF.Beam([smo74778,smo74779,smo74780,smo74781]);
const dirsmo77603 = smo75392.getStemDirection();
smo75392.setStemDirection(dirsmo77603);
smo75393.setStemDirection(dirsmo77603);
const smo77603 = new VF.Beam([smo75392,smo75393]);
const dirsmo77604 = smo75396.getStemDirection();
smo75396.setStemDirection(dirsmo77604);
smo75397.setStemDirection(dirsmo77604);
smo75398.setStemDirection(dirsmo77604);
const smo77604 = new VF.Beam([smo75396,smo75397,smo75398]);
const dirsmo77605 = smo75399.getStemDirection();
smo75399.setStemDirection(dirsmo77605);
smo75400.setStemDirection(dirsmo77605);
smo75401.setStemDirection(dirsmo77605);
smo75402.setStemDirection(dirsmo77605);
const smo77605 = new VF.Beam([smo75399,smo75400,smo75401,smo75402]);
 
// formatting measures in staff group smo75609
fmtsmo7479814.format([smo74798v0,smo75418v0], 568);
const stavesmo74798 = new VF.Stave(50, 793.0000000000002, 624);
stavesmo74798.setAttribute('id', 'stavesmo74798');
stavesmo74798.setBegBarType(1);
stavesmo74798.addClef('treble');
stavesmo74798.setContext(context);
stavesmo74798.draw();
smo74798v0.draw(context, stavesmo74798);
smo77599.setContext(context);
smo77599.draw();
smo77600.setContext(context);
smo77600.draw();
const stavesmo75418 = new VF.Stave(50, 927.0000000000002, 624);
stavesmo75418.setAttribute('id', 'stavesmo75418');
stavesmo75418.setBegBarType(1);
stavesmo75418.addClef('bass');
stavesmo75418.setContext(context);
stavesmo75418.draw();
smo75418v0.draw(context, stavesmo75418);
smo77603.setContext(context);
smo77603.draw();
smo77604.setContext(context);
smo77604.draw();
smo77605.setContext(context);
smo77605.draw();
const leftsmo75609stavesmo747981 = new VF.StaveConnector(stavesmo74798, stavesmo75418).setType(3);
leftsmo75609stavesmo747981.setContext(context).draw();
const fmtsmo7482315 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo74823v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74823v0ar = [];
const smo74799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/5/n"]}'))
smo74799.setAttribute('id', 'smo74799');
smo74823v0ar.push(smo74799);
const smo74800 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo74800.setAttribute('id', 'smo74800');
smo74823v0ar.push(smo74800);
const smo74801 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/5/n"]}'))
smo74801.setAttribute('id', 'smo74801');
smo74823v0ar.push(smo74801);
const smo74802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/5/n"]}'))
smo74802.setAttribute('id', 'smo74802');
smo74823v0ar.push(smo74802);
const smo74803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/5/n"]}'))
smo74803.setAttribute('id', 'smo74803');
smo74823v0ar.push(smo74803);
const smo74804 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/5/n"]}'))
smo74804.setAttribute('id', 'smo74804');
smo74823v0ar.push(smo74804);
const smo74805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/5/n"]}'))
smo74805.setAttribute('id', 'smo74805');
smo74823v0ar.push(smo74805);
const smo74806 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo74806.setAttribute('id', 'smo74806');
smo74823v0ar.push(smo74806);
const smo74807 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo74807.setAttribute('id', 'smo74807');
smo74823v0ar.push(smo74807);
smo74823v0.addTickables(smo74823v0ar)
fmtsmo7482315.joinVoices([smo74823v0]);
const fmtsmo7544315 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo75443v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75443v0ar = [];
const smo75419 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo75419.setAttribute('id', 'smo75419');
smo75443v0ar.push(smo75419);
const smo75420 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo75420.setAttribute('id', 'smo75420');
smo75443v0ar.push(smo75420);
const smo75421 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo75421.setAttribute('id', 'smo75421');
smo75443v0ar.push(smo75421);
const smo75422 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo75422.setAttribute('id', 'smo75422');
smo75443v0ar.push(smo75422);
const smo75423 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo75423.setAttribute('id', 'smo75423');
smo75443v0ar.push(smo75423);
const smo75424 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo75424.setAttribute('id', 'smo75424');
smo75443v0ar.push(smo75424);
const smo75425 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo75425.setAttribute('id', 'smo75425');
smo75443v0ar.push(smo75425);
const smo75426 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo75426.setAttribute('id', 'smo75426');
smo75443v0ar.push(smo75426);
const smo75427 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo75427.setAttribute('id', 'smo75427');
smo75443v0ar.push(smo75427);
smo75443v0.addTickables(smo75443v0ar)
fmtsmo7544315.joinVoices([smo75443v0]);
// create beam groups and tuplets for format grp smo75609 before formatting
const dirsmo77608 = smo74799.getStemDirection();
smo74799.setStemDirection(dirsmo77608);
smo74800.setStemDirection(dirsmo77608);
smo74801.setStemDirection(dirsmo77608);
smo74802.setStemDirection(dirsmo77608);
const smo77608 = new VF.Beam([smo74799,smo74800,smo74801,smo74802]);
const dirsmo77609 = smo74803.getStemDirection();
smo74803.setStemDirection(dirsmo77609);
smo74804.setStemDirection(dirsmo77609);
smo74805.setStemDirection(dirsmo77609);
smo74806.setStemDirection(dirsmo77609);
const smo77609 = new VF.Beam([smo74803,smo74804,smo74805,smo74806]);
const dirsmo77612 = smo75420.getStemDirection();
smo75420.setStemDirection(dirsmo77612);
smo75421.setStemDirection(dirsmo77612);
smo75422.setStemDirection(dirsmo77612);
smo75423.setStemDirection(dirsmo77612);
const smo77612 = new VF.Beam([smo75420,smo75421,smo75422,smo75423]);
const dirsmo77613 = smo75424.getStemDirection();
smo75424.setStemDirection(dirsmo77613);
smo75425.setStemDirection(dirsmo77613);
smo75426.setStemDirection(dirsmo77613);
smo75427.setStemDirection(dirsmo77613);
const smo77613 = new VF.Beam([smo75424,smo75425,smo75426,smo75427]);
 
// formatting measures in staff group smo75609
fmtsmo7482315.format([smo74823v0,smo75443v0], 572);
const stavesmo74823 = new VF.Stave(674, 793.0000000000002, 586);
stavesmo74823.setAttribute('id', 'stavesmo74823');
stavesmo74823.setBegBarType(VF.Barline.type.NONE);
stavesmo74823.setContext(context);
stavesmo74823.draw();
smo74823v0.draw(context, stavesmo74823);
smo77608.setContext(context);
smo77608.draw();
smo77609.setContext(context);
smo77609.draw();
const stavesmo75443 = new VF.Stave(674, 927.0000000000002, 586);
stavesmo75443.setAttribute('id', 'stavesmo75443');
stavesmo75443.setBegBarType(VF.Barline.type.NONE);
stavesmo75443.setContext(context);
stavesmo75443.draw();
smo75443v0.draw(context, stavesmo75443);
smo77612.setContext(context);
smo77612.draw();
smo77613.setContext(context);
smo77613.draw();
const rightsmo75609stavesmo748231 = new VF.StaveConnector(stavesmo74823, stavesmo75443).setType(0);
rightsmo75609stavesmo748231.setContext(context).draw();
const fmtsmo7484916 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo74849v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74849v0ar = [];
const smo74824 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo74824.setAttribute('id', 'smo74824');
const  smo77827 = new VF.Articulation('a.').setPosition(3);
smo74824.addModifier(smo77827, 0);
smo74849v0ar.push(smo74824);
const smo74826 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo74826.setAttribute('id', 'smo74826');
smo74849v0ar.push(smo74826);
const smo74827 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo74827.setAttribute('id', 'smo74827');
smo74849v0ar.push(smo74827);
const smo74828 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo74828.setAttribute('id', 'smo74828');
smo74849v0ar.push(smo74828);
const smo74829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo74829.setAttribute('id', 'smo74829');
smo74849v0ar.push(smo74829);
const smo74830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo74830.setAttribute('id', 'smo74830');
smo74849v0ar.push(smo74830);
const smo74831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo74831.setAttribute('id', 'smo74831');
smo74849v0ar.push(smo74831);
const smo74832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo74832.setAttribute('id', 'smo74832');
smo74849v0ar.push(smo74832);
const smo74833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo74833.setAttribute('id', 'smo74833');
smo74849v0ar.push(smo74833);
smo74849v0.addTickables(smo74849v0ar)
fmtsmo7484916.joinVoices([smo74849v0]);
const fmtsmo7546816 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo75468v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75468v0ar = [];
const smo75444 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo75444.setAttribute('id', 'smo75444');
smo75468v0ar.push(smo75444);
const smo75445 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo75445.setAttribute('id', 'smo75445');
smo75468v0ar.push(smo75445);
const smo75446 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo75446.setAttribute('id', 'smo75446');
smo75468v0ar.push(smo75446);
const smo75447 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo75447.setAttribute('id', 'smo75447');
smo75468v0ar.push(smo75447);
const smo75448 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo75448.setAttribute('id', 'smo75448');
smo75468v0ar.push(smo75448);
const smo75449 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo75449.setAttribute('id', 'smo75449');
smo75468v0ar.push(smo75449);
const smo75450 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo75450.setAttribute('id', 'smo75450');
smo75468v0ar.push(smo75450);
const smo75451 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo75451.setAttribute('id', 'smo75451');
smo75468v0ar.push(smo75451);
const smo75452 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo75452.setAttribute('id', 'smo75452');
smo75468v0ar.push(smo75452);
smo75468v0.addTickables(smo75468v0ar)
fmtsmo7546816.joinVoices([smo75468v0]);
// create beam groups and tuplets for format grp smo75609 before formatting
const dirsmo77624 = smo74824.getStemDirection();
smo74824.setStemDirection(dirsmo77624);
smo74826.setStemDirection(dirsmo77624);
smo74827.setStemDirection(dirsmo77624);
smo74828.setStemDirection(dirsmo77624);
const smo77624 = new VF.Beam([smo74824,smo74826,smo74827,smo74828]);
const dirsmo77625 = smo74829.getStemDirection();
smo74829.setStemDirection(dirsmo77625);
smo74830.setStemDirection(dirsmo77625);
smo74831.setStemDirection(dirsmo77625);
smo74832.setStemDirection(dirsmo77625);
const smo77625 = new VF.Beam([smo74829,smo74830,smo74831,smo74832]);
const dirsmo77628 = smo75445.getStemDirection();
smo75445.setStemDirection(dirsmo77628);
smo75446.setStemDirection(dirsmo77628);
smo75447.setStemDirection(dirsmo77628);
smo75448.setStemDirection(dirsmo77628);
const smo77628 = new VF.Beam([smo75445,smo75446,smo75447,smo75448]);
const dirsmo77629 = smo75449.getStemDirection();
smo75449.setStemDirection(dirsmo77629);
smo75450.setStemDirection(dirsmo77629);
smo75451.setStemDirection(dirsmo77629);
smo75452.setStemDirection(dirsmo77629);
const smo77629 = new VF.Beam([smo75449,smo75450,smo75451,smo75452]);
 
// formatting measures in staff group smo75609
fmtsmo7484916.format([smo74849v0,smo75468v0], 561);
const stavesmo74849 = new VF.Stave(50, 1058.0000000000002, 616);
stavesmo74849.setAttribute('id', 'stavesmo74849');
stavesmo74849.setBegBarType(1);
stavesmo74849.addClef('treble');
stavesmo74849.setContext(context);
stavesmo74849.draw();
smo74849v0.draw(context, stavesmo74849);
smo77624.setContext(context);
smo77624.draw();
smo77625.setContext(context);
smo77625.draw();
const stavesmo75468 = new VF.Stave(50, 1177.0000000000002, 616);
stavesmo75468.setAttribute('id', 'stavesmo75468');
stavesmo75468.setBegBarType(1);
stavesmo75468.addClef('bass');
stavesmo75468.setContext(context);
stavesmo75468.draw();
smo75468v0.draw(context, stavesmo75468);
smo77628.setContext(context);
smo77628.draw();
smo77629.setContext(context);
smo77629.draw();
const leftsmo75609stavesmo748491 = new VF.StaveConnector(stavesmo74849, stavesmo75468).setType(3);
leftsmo75609stavesmo748491.setContext(context).draw();
const fmtsmo7487417 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo74874v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74874v0ar = [];
const smo74850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo74850.setAttribute('id', 'smo74850');
smo74874v0ar.push(smo74850);
const smo74851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo74851.setAttribute('id', 'smo74851');
smo74874v0ar.push(smo74851);
const smo74852 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo74852.setAttribute('id', 'smo74852');
smo74874v0ar.push(smo74852);
const smo74853 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo74853.setAttribute('id', 'smo74853');
smo74874v0ar.push(smo74853);
const smo74854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo74854.setAttribute('id', 'smo74854');
smo74874v0ar.push(smo74854);
const smo74855 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo74855.setAttribute('id', 'smo74855');
smo74874v0ar.push(smo74855);
const smo74856 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo74856.setAttribute('id', 'smo74856');
smo74874v0ar.push(smo74856);
const smo74857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo74857.setAttribute('id', 'smo74857');
smo74874v0ar.push(smo74857);
const smo74858 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo74858.setAttribute('id', 'smo74858');
smo74874v0ar.push(smo74858);
smo74874v0.addTickables(smo74874v0ar)
fmtsmo7487417.joinVoices([smo74874v0]);
const fmtsmo7549317 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo75493v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75493v0ar = [];
const smo75469 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo75469.setAttribute('id', 'smo75469');
smo75493v0ar.push(smo75469);
const smo75470 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo75470.setAttribute('id', 'smo75470');
smo75493v0ar.push(smo75470);
const smo75471 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo75471.setAttribute('id', 'smo75471');
smo75493v0ar.push(smo75471);
const smo75472 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo75472.setAttribute('id', 'smo75472');
smo75493v0ar.push(smo75472);
const smo75473 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo75473.setAttribute('id', 'smo75473');
const smo754730acc = new VF.Accidental('b');
smo75473.addModifier(smo754730acc, 0);
smo75493v0ar.push(smo75473);
const smo75474 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo75474.setAttribute('id', 'smo75474');
smo75493v0ar.push(smo75474);
const smo75475 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo75475.setAttribute('id', 'smo75475');
smo75493v0ar.push(smo75475);
const smo75476 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo75476.setAttribute('id', 'smo75476');
smo75493v0ar.push(smo75476);
const smo75477 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo75477.setAttribute('id', 'smo75477');
smo75493v0ar.push(smo75477);
smo75493v0.addTickables(smo75493v0ar)
fmtsmo7549317.joinVoices([smo75493v0]);
// create beam groups and tuplets for format grp smo75609 before formatting
const dirsmo77632 = smo74850.getStemDirection();
smo74850.setStemDirection(dirsmo77632);
smo74851.setStemDirection(dirsmo77632);
smo74852.setStemDirection(dirsmo77632);
smo74853.setStemDirection(dirsmo77632);
const smo77632 = new VF.Beam([smo74850,smo74851,smo74852,smo74853]);
const dirsmo77633 = smo74854.getStemDirection();
smo74854.setStemDirection(dirsmo77633);
smo74855.setStemDirection(dirsmo77633);
smo74856.setStemDirection(dirsmo77633);
smo74857.setStemDirection(dirsmo77633);
const smo77633 = new VF.Beam([smo74854,smo74855,smo74856,smo74857]);
const dirsmo77636 = smo75470.getStemDirection();
smo75470.setStemDirection(dirsmo77636);
smo75471.setStemDirection(dirsmo77636);
smo75472.setStemDirection(dirsmo77636);
smo75473.setStemDirection(dirsmo77636);
const smo77636 = new VF.Beam([smo75470,smo75471,smo75472,smo75473]);
const dirsmo77637 = smo75474.getStemDirection();
smo75474.setStemDirection(dirsmo77637);
smo75475.setStemDirection(dirsmo77637);
smo75476.setStemDirection(dirsmo77637);
smo75477.setStemDirection(dirsmo77637);
const smo77637 = new VF.Beam([smo75474,smo75475,smo75476,smo75477]);
 
// formatting measures in staff group smo75609
fmtsmo7487417.format([smo74874v0,smo75493v0], 579);
const stavesmo74874 = new VF.Stave(666, 1058.0000000000002, 593);
stavesmo74874.setAttribute('id', 'stavesmo74874');
stavesmo74874.setBegBarType(VF.Barline.type.NONE);
stavesmo74874.setContext(context);
stavesmo74874.draw();
smo74874v0.draw(context, stavesmo74874);
smo77632.setContext(context);
smo77632.draw();
smo77633.setContext(context);
smo77633.draw();
const stavesmo75493 = new VF.Stave(666, 1177.0000000000002, 593);
stavesmo75493.setAttribute('id', 'stavesmo75493');
stavesmo75493.setBegBarType(VF.Barline.type.NONE);
stavesmo75493.setContext(context);
stavesmo75493.draw();
smo75493v0.draw(context, stavesmo75493);
smo77636.setContext(context);
smo77636.draw();
smo77637.setContext(context);
smo77637.draw();
const rightsmo75609stavesmo748741 = new VF.StaveConnector(stavesmo74874, stavesmo75493).setType(0);
rightsmo75609stavesmo748741.setContext(context).draw();
const fmtsmo7490718 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo74907v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74907v0ar = [];
const smo74875 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo74875.setAttribute('id', 'smo74875');
const  smo77836 = new VF.Articulation('a.').setPosition(3);
smo74875.addModifier(smo77836, 0);
smo74907v0ar.push(smo74875);
const smo74877 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo74877.setAttribute('id', 'smo74877');
smo74907v0ar.push(smo74877);
const smo74878 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo74878.setAttribute('id', 'smo74878');
smo74907v0ar.push(smo74878);
const smo74879 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo74879.setAttribute('id', 'smo74879');
smo74907v0ar.push(smo74879);
const smo74880 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo74880.setAttribute('id', 'smo74880');
smo74907v0ar.push(smo74880);
const smo74881 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo74881.setAttribute('id', 'smo74881');
smo74907v0ar.push(smo74881);
const smo74882 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo74882.setAttribute('id', 'smo74882');
smo74907v0ar.push(smo74882);
const smo74883 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo74883.setAttribute('id', 'smo74883');
smo74907v0ar.push(smo74883);
const smo74884 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo74884.setAttribute('id', 'smo74884');
smo74907v0ar.push(smo74884);
const smo74885 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo74885.setAttribute('id', 'smo74885');
smo74907v0ar.push(smo74885);
const smo74886 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo74886.setAttribute('id', 'smo74886');
smo74907v0ar.push(smo74886);
const smo74887 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo74887.setAttribute('id', 'smo74887');
smo74907v0ar.push(smo74887);
const smo74888 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo74888.setAttribute('id', 'smo74888');
smo74907v0ar.push(smo74888);
const smo74889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo74889.setAttribute('id', 'smo74889');
smo74907v0ar.push(smo74889);
const smo74890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo74890.setAttribute('id', 'smo74890');
smo74907v0ar.push(smo74890);
const smo74891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo74891.setAttribute('id', 'smo74891');
smo74907v0ar.push(smo74891);
smo74907v0.addTickables(smo74907v0ar)
fmtsmo7490718.joinVoices([smo74907v0]);
const fmtsmo7551718 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo75517v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75517v0ar = [];
const smo75494 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo75494.setAttribute('id', 'smo75494');
smo75517v0ar.push(smo75494);
const smo75495 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo75495.setAttribute('id', 'smo75495');
const smo754950acc = new VF.Accidental('b');
smo75495.addModifier(smo754950acc, 0);
smo75517v0ar.push(smo75495);
const smo75496 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo75496.setAttribute('id', 'smo75496');
smo75517v0ar.push(smo75496);
const smo75497 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo75497.setAttribute('id', 'smo75497');
smo75517v0ar.push(smo75497);
const smo75498 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo75498.setAttribute('id', 'smo75498');
smo75517v0ar.push(smo75498);
const smo75499 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo75499.setAttribute('id', 'smo75499');
smo75517v0ar.push(smo75499);
const smo75500 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo75500.setAttribute('id', 'smo75500');
smo75517v0ar.push(smo75500);
const smo75501 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo75501.setAttribute('id', 'smo75501');
smo75517v0ar.push(smo75501);
smo75517v0.addTickables(smo75517v0ar)
fmtsmo7551718.joinVoices([smo75517v0]);
// create beam groups and tuplets for format grp smo75609 before formatting
const dirsmo77650 = smo74875.getStemDirection();
smo74875.setStemDirection(dirsmo77650);
smo74877.setStemDirection(dirsmo77650);
smo74878.setStemDirection(dirsmo77650);
smo74879.setStemDirection(dirsmo77650);
const smo77650 = new VF.Beam([smo74875,smo74877,smo74878,smo74879]);
const dirsmo77651 = smo74880.getStemDirection();
smo74880.setStemDirection(dirsmo77651);
smo74881.setStemDirection(dirsmo77651);
smo74882.setStemDirection(dirsmo77651);
smo74883.setStemDirection(dirsmo77651);
const smo77651 = new VF.Beam([smo74880,smo74881,smo74882,smo74883]);
const dirsmo77652 = smo74884.getStemDirection();
smo74884.setStemDirection(dirsmo77652);
smo74885.setStemDirection(dirsmo77652);
smo74886.setStemDirection(dirsmo77652);
smo74887.setStemDirection(dirsmo77652);
const smo77652 = new VF.Beam([smo74884,smo74885,smo74886,smo74887]);
const dirsmo77653 = smo74888.getStemDirection();
smo74888.setStemDirection(dirsmo77653);
smo74889.setStemDirection(dirsmo77653);
smo74890.setStemDirection(dirsmo77653);
smo74891.setStemDirection(dirsmo77653);
const smo77653 = new VF.Beam([smo74888,smo74889,smo74890,smo74891]);
const dirsmo77656 = smo75494.getStemDirection();
smo75494.setStemDirection(dirsmo77656);
smo75495.setStemDirection(dirsmo77656);
smo75496.setStemDirection(dirsmo77656);
smo75497.setStemDirection(dirsmo77656);
const smo77656 = new VF.Beam([smo75494,smo75495,smo75496,smo75497]);
const dirsmo77657 = smo75498.getStemDirection();
smo75498.setStemDirection(dirsmo77657);
smo75499.setStemDirection(dirsmo77657);
smo75500.setStemDirection(dirsmo77657);
smo75501.setStemDirection(dirsmo77657);
const smo77657 = new VF.Beam([smo75498,smo75499,smo75500,smo75501]);
 
// formatting measures in staff group smo75609
fmtsmo7490718.format([smo74907v0,smo75517v0], 395);
const stavesmo74907 = new VF.Stave(50, 1318.0000000000002, 451);
stavesmo74907.setAttribute('id', 'stavesmo74907');
stavesmo74907.setBegBarType(1);
stavesmo74907.addClef('treble');
stavesmo74907.setContext(context);
stavesmo74907.draw();
smo74907v0.draw(context, stavesmo74907);
smo77650.setContext(context);
smo77650.draw();
smo77651.setContext(context);
smo77651.draw();
smo77652.setContext(context);
smo77652.draw();
smo77653.setContext(context);
smo77653.draw();
const stavesmo75517 = new VF.Stave(50, 1452.0000000000002, 451);
stavesmo75517.setAttribute('id', 'stavesmo75517');
stavesmo75517.setBegBarType(1);
stavesmo75517.addClef('bass');
stavesmo75517.setContext(context);
stavesmo75517.draw();
smo75517v0.draw(context, stavesmo75517);
smo77656.setContext(context);
smo77656.draw();
smo77657.setContext(context);
smo77657.draw();
const leftsmo75609stavesmo749071 = new VF.StaveConnector(stavesmo74907, stavesmo75517).setType(3);
leftsmo75609stavesmo749071.setContext(context).draw();
const fmtsmo7493619 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo74936v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74936v0ar = [];
const smo74908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo74908.setAttribute('id', 'smo74908');
smo74936v0ar.push(smo74908);
const smo74909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo74909.setAttribute('id', 'smo74909');
smo74936v0ar.push(smo74909);
const smo74910 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo74910.setAttribute('id', 'smo74910');
smo74936v0ar.push(smo74910);
const smo74911 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo74911.setAttribute('id', 'smo74911');
smo74936v0ar.push(smo74911);
const smo74912 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/6/n"]}'))
smo74912.setAttribute('id', 'smo74912');
smo74936v0ar.push(smo74912);
const smo74913 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo74913.setAttribute('id', 'smo74913');
smo74936v0ar.push(smo74913);
const smo74914 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo74914.setAttribute('id', 'smo74914');
smo74936v0ar.push(smo74914);
const smo74915 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo74915.setAttribute('id', 'smo74915');
smo74936v0ar.push(smo74915);
const smo74916 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/6/n"]}'))
smo74916.setAttribute('id', 'smo74916');
smo74936v0ar.push(smo74916);
const smo74917 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo74917.setAttribute('id', 'smo74917');
smo74936v0ar.push(smo74917);
const smo74918 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo74918.setAttribute('id', 'smo74918');
smo74936v0ar.push(smo74918);
const smo74919 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo74919.setAttribute('id', 'smo74919');
smo74936v0ar.push(smo74919);
const smo74920 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo74920.setAttribute('id', 'smo74920');
smo74936v0ar.push(smo74920);
smo74936v0.addTickables(smo74936v0ar)
fmtsmo7493619.joinVoices([smo74936v0]);
const fmtsmo7554519 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo75545v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75545v0ar = [];
const smo75518 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo75518.setAttribute('id', 'smo75518');
smo75545v0ar.push(smo75518);
const smo75519 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo75519.setAttribute('id', 'smo75519');
smo75545v0ar.push(smo75519);
const smo75520 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo75520.setAttribute('id', 'smo75520');
smo75545v0ar.push(smo75520);
const smo75521 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo75521.setAttribute('id', 'smo75521');
smo75545v0ar.push(smo75521);
const smo75522 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo75522.setAttribute('id', 'smo75522');
smo75545v0ar.push(smo75522);
const smo75523 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo75523.setAttribute('id', 'smo75523');
smo75545v0ar.push(smo75523);
const smo75524 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo75524.setAttribute('id', 'smo75524');
smo75545v0ar.push(smo75524);
const smo75525 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo75525.setAttribute('id', 'smo75525');
smo75545v0ar.push(smo75525);
const smo75526 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo75526.setAttribute('id', 'smo75526');
smo75545v0ar.push(smo75526);
const smo75527 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo75527.setAttribute('id', 'smo75527');
smo75545v0ar.push(smo75527);
const smo75528 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo75528.setAttribute('id', 'smo75528');
smo75545v0ar.push(smo75528);
const smo75529 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo75529.setAttribute('id', 'smo75529');
smo75545v0ar.push(smo75529);
smo75545v0.addTickables(smo75545v0ar)
fmtsmo7554519.joinVoices([smo75545v0]);
// create beam groups and tuplets for format grp smo75609 before formatting
const dirsmo77660 = smo74908.getStemDirection();
smo74908.setStemDirection(dirsmo77660);
smo74909.setStemDirection(dirsmo77660);
smo74910.setStemDirection(dirsmo77660);
smo74911.setStemDirection(dirsmo77660);
const smo77660 = new VF.Beam([smo74908,smo74909,smo74910,smo74911]);
const dirsmo77661 = smo74912.getStemDirection();
smo74912.setStemDirection(dirsmo77661);
smo74913.setStemDirection(dirsmo77661);
smo74914.setStemDirection(dirsmo77661);
smo74915.setStemDirection(dirsmo77661);
const smo77661 = new VF.Beam([smo74912,smo74913,smo74914,smo74915]);
const dirsmo77662 = smo74916.getStemDirection();
smo74916.setStemDirection(dirsmo77662);
smo74917.setStemDirection(dirsmo77662);
const smo77662 = new VF.Beam([smo74916,smo74917]);
const dirsmo77663 = smo74918.getStemDirection();
smo74918.setStemDirection(dirsmo77663);
smo74919.setStemDirection(dirsmo77663);
smo74920.setStemDirection(dirsmo77663);
const smo77663 = new VF.Beam([smo74918,smo74919,smo74920]);
const dirsmo77666 = smo75518.getStemDirection();
smo75518.setStemDirection(dirsmo77666);
smo75519.setStemDirection(dirsmo77666);
const smo77666 = new VF.Beam([smo75518,smo75519]);
const dirsmo77667 = smo75520.getStemDirection();
smo75520.setStemDirection(dirsmo77667);
smo75521.setStemDirection(dirsmo77667);
const smo77667 = new VF.Beam([smo75520,smo75521]);
const dirsmo77668 = smo75522.getStemDirection();
smo75522.setStemDirection(dirsmo77668);
smo75523.setStemDirection(dirsmo77668);
smo75524.setStemDirection(dirsmo77668);
smo75525.setStemDirection(dirsmo77668);
const smo77668 = new VF.Beam([smo75522,smo75523,smo75524,smo75525]);
const dirsmo77669 = smo75526.getStemDirection();
smo75526.setStemDirection(dirsmo77669);
smo75527.setStemDirection(dirsmo77669);
smo75528.setStemDirection(dirsmo77669);
smo75529.setStemDirection(dirsmo77669);
const smo77669 = new VF.Beam([smo75526,smo75527,smo75528,smo75529]);
 
// formatting measures in staff group smo75609
fmtsmo7493619.format([smo74936v0,smo75545v0], 368);
const stavesmo74936 = new VF.Stave(501, 1318.0000000000002, 382);
stavesmo74936.setAttribute('id', 'stavesmo74936');
stavesmo74936.setBegBarType(VF.Barline.type.NONE);
stavesmo74936.setContext(context);
stavesmo74936.draw();
smo74936v0.draw(context, stavesmo74936);
smo77660.setContext(context);
smo77660.draw();
smo77661.setContext(context);
smo77661.draw();
smo77662.setContext(context);
smo77662.draw();
smo77663.setContext(context);
smo77663.draw();
const stavesmo75545 = new VF.Stave(501, 1452.0000000000002, 382);
stavesmo75545.setAttribute('id', 'stavesmo75545');
stavesmo75545.setBegBarType(VF.Barline.type.NONE);
stavesmo75545.setContext(context);
stavesmo75545.draw();
smo75545v0.draw(context, stavesmo75545);
smo77666.setContext(context);
smo77666.draw();
smo77667.setContext(context);
smo77667.draw();
smo77668.setContext(context);
smo77668.draw();
smo77669.setContext(context);
smo77669.draw();
const fmtsmo7496820 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo74968v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74968v0ar = [];
const smo74937 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo74937.setAttribute('id', 'smo74937');
smo74968v0ar.push(smo74937);
const smo74938 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo74938.setAttribute('id', 'smo74938');
smo74968v0ar.push(smo74938);
const smo74939 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo74939.setAttribute('id', 'smo74939');
smo74968v0ar.push(smo74939);
const smo74940 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo74940.setAttribute('id', 'smo74940');
smo74968v0ar.push(smo74940);
const smo74941 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo74941.setAttribute('id', 'smo74941');
smo74968v0ar.push(smo74941);
const smo74942 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo74942.setAttribute('id', 'smo74942');
smo74968v0ar.push(smo74942);
const smo74943 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo74943.setAttribute('id', 'smo74943');
smo74968v0ar.push(smo74943);
const smo74944 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo74944.setAttribute('id', 'smo74944');
smo74968v0ar.push(smo74944);
const smo74945 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo74945.setAttribute('id', 'smo74945');
smo74968v0ar.push(smo74945);
const smo74946 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo74946.setAttribute('id', 'smo74946');
smo74968v0ar.push(smo74946);
const smo74947 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo74947.setAttribute('id', 'smo74947');
smo74968v0ar.push(smo74947);
const smo74948 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo74948.setAttribute('id', 'smo74948');
smo74968v0ar.push(smo74948);
const smo74949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo74949.setAttribute('id', 'smo74949');
smo74968v0ar.push(smo74949);
const smo74950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo74950.setAttribute('id', 'smo74950');
smo74968v0ar.push(smo74950);
const smo74951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo74951.setAttribute('id', 'smo74951');
smo74968v0ar.push(smo74951);
const smo74952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo74952.setAttribute('id', 'smo74952');
smo74968v0ar.push(smo74952);
smo74968v0.addTickables(smo74968v0ar)
fmtsmo7496820.joinVoices([smo74968v0]);
const fmtsmo7557320 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo75573v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75573v0ar = [];
const smo75546 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo75546.setAttribute('id', 'smo75546');
smo75573v0ar.push(smo75546);
const smo75547 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo75547.setAttribute('id', 'smo75547');
smo75573v0ar.push(smo75547);
const smo75548 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo75548.setAttribute('id', 'smo75548');
smo75573v0ar.push(smo75548);
const smo75549 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo75549.setAttribute('id', 'smo75549');
smo75573v0ar.push(smo75549);
const smo75550 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo75550.setAttribute('id', 'smo75550');
smo75573v0ar.push(smo75550);
const smo75551 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo75551.setAttribute('id', 'smo75551');
smo75573v0ar.push(smo75551);
const smo75552 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo75552.setAttribute('id', 'smo75552');
smo75573v0ar.push(smo75552);
const smo75553 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo75553.setAttribute('id', 'smo75553');
smo75573v0ar.push(smo75553);
const smo75554 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo75554.setAttribute('id', 'smo75554');
const  smo77845 = new VF.Articulation('a.').setPosition(3);
smo75554.addModifier(smo77845, 0);
smo75573v0ar.push(smo75554);
const smo75556 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo75556.setAttribute('id', 'smo75556');
const  smo77846 = new VF.Articulation('a.').setPosition(3);
smo75556.addModifier(smo77846, 0);
smo75573v0ar.push(smo75556);
smo75573v0.addTickables(smo75573v0ar)
fmtsmo7557320.joinVoices([smo75573v0]);
// create beam groups and tuplets for format grp smo75609 before formatting
const dirsmo77672 = smo74937.getStemDirection();
smo74937.setStemDirection(dirsmo77672);
smo74938.setStemDirection(dirsmo77672);
smo74939.setStemDirection(dirsmo77672);
smo74940.setStemDirection(dirsmo77672);
const smo77672 = new VF.Beam([smo74937,smo74938,smo74939,smo74940]);
const dirsmo77673 = smo74941.getStemDirection();
smo74941.setStemDirection(dirsmo77673);
smo74942.setStemDirection(dirsmo77673);
smo74943.setStemDirection(dirsmo77673);
smo74944.setStemDirection(dirsmo77673);
const smo77673 = new VF.Beam([smo74941,smo74942,smo74943,smo74944]);
const dirsmo77674 = smo74945.getStemDirection();
smo74945.setStemDirection(dirsmo77674);
smo74946.setStemDirection(dirsmo77674);
smo74947.setStemDirection(dirsmo77674);
smo74948.setStemDirection(dirsmo77674);
const smo77674 = new VF.Beam([smo74945,smo74946,smo74947,smo74948]);
const dirsmo77675 = smo74949.getStemDirection();
smo74949.setStemDirection(dirsmo77675);
smo74950.setStemDirection(dirsmo77675);
smo74951.setStemDirection(dirsmo77675);
smo74952.setStemDirection(dirsmo77675);
const smo77675 = new VF.Beam([smo74949,smo74950,smo74951,smo74952]);
const dirsmo77678 = smo75546.getStemDirection();
smo75546.setStemDirection(dirsmo77678);
smo75547.setStemDirection(dirsmo77678);
const smo77678 = new VF.Beam([smo75546,smo75547]);
const dirsmo77679 = smo75548.getStemDirection();
smo75548.setStemDirection(dirsmo77679);
smo75549.setStemDirection(dirsmo77679);
const smo77679 = new VF.Beam([smo75548,smo75549]);
const dirsmo77680 = smo75550.getStemDirection();
smo75550.setStemDirection(dirsmo77680);
smo75551.setStemDirection(dirsmo77680);
smo75552.setStemDirection(dirsmo77680);
smo75553.setStemDirection(dirsmo77680);
const smo77680 = new VF.Beam([smo75550,smo75551,smo75552,smo75553]);
const dirsmo77681 = smo75554.getStemDirection();
smo75554.setStemDirection(dirsmo77681);
smo75556.setStemDirection(dirsmo77681);
const smo77681 = new VF.Beam([smo75554,smo75556]);
 
// formatting measures in staff group smo75609
fmtsmo7496820.format([smo74968v0,smo75573v0], 363);
const stavesmo74968 = new VF.Stave(883, 1318.0000000000002, 377);
stavesmo74968.setAttribute('id', 'stavesmo74968');
stavesmo74968.setBegBarType(VF.Barline.type.NONE);
stavesmo74968.setContext(context);
stavesmo74968.draw();
smo74968v0.draw(context, stavesmo74968);
smo77672.setContext(context);
smo77672.draw();
smo77673.setContext(context);
smo77673.draw();
smo77674.setContext(context);
smo77674.draw();
smo77675.setContext(context);
smo77675.draw();
const stavesmo75573 = new VF.Stave(883, 1452.0000000000002, 377);
stavesmo75573.setAttribute('id', 'stavesmo75573');
stavesmo75573.setBegBarType(VF.Barline.type.NONE);
stavesmo75573.setContext(context);
stavesmo75573.draw();
smo75573v0.draw(context, stavesmo75573);
smo77678.setContext(context);
smo77678.draw();
smo77679.setContext(context);
smo77679.draw();
smo77680.setContext(context);
smo77680.draw();
smo77681.setContext(context);
smo77681.draw();
const rightsmo75609stavesmo749681 = new VF.StaveConnector(stavesmo74968, stavesmo75573).setType(0);
rightsmo75609stavesmo749681.setContext(context).draw();
// modifier from 0-10-0-1 to 0-10-0-4
const smo77851 = new VF.Curve(smo74663, smo74666, JSON.parse('{"thickness":2,"xShift":0,"yShift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":1,"positionEnd":2}'));
smo77851.setContext(context).draw();
// modifier from 0-10-0-5 to 0-11-0-0
const smo77852 = new VF.Curve(smo74667, smo74686, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo77852.setContext(context).draw();
// modifier from 0-11-0-1 to 0-11-0-6
const smo77853 = new VF.Curve(smo74687, smo74692, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo77853.setContext(context).draw();
// modifier from 0-15-0-8 to 0-16-0-0
const smo77854 = new VF.Curve(smo74807, null, JSON.parse('{"thickness":2,"xShift":-5,"yShift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"positionEnd":1}'));
smo77854.setContext(context).draw();
// modifier from 0-15-0-8 to 0-16-0-0
const smo77855 = new VF.Curve(null, smo74824, JSON.parse('{"thickness":2,"xShift":-5,"yShift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"positionEnd":1}'));
smo77855.setContext(context).draw();
// modifier from 0-17-0-8 to 0-18-0-0
const smo77856 = new VF.Curve(smo74858, null, JSON.parse('{"thickness":2,"xShift":-5,"yShift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"positionEnd":1}'));
smo77856.setContext(context).draw();
// modifier from 0-17-0-8 to 0-18-0-0
const smo77857 = new VF.Curve(null, smo74875, JSON.parse('{"thickness":2,"xShift":-5,"yShift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"positionEnd":1}'));
smo77857.setContext(context).draw();
// modifier from 0-16-0-8 to 0-17-0-0
const smo77858 = new VF.Curve(smo74833, smo74850, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo77858.setContext(context).draw();
// modifier from 1-15-0-0 to 1-15-0-1
const smo77859 = new VF.Curve(smo75419, smo75420, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo77859.setContext(context).draw();
// modifier from 1-16-0-0 to 1-16-0-1
const smo77860 = new VF.Curve(smo75444, smo75445, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo77860.setContext(context).draw();
// modifier from 1-17-0-0 to 1-17-0-1
const smo77861 = new VF.Curve(smo75469, smo75470, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo77861.setContext(context).draw();
// modifier from 1-18-0-1 to 1-18-0-4
const smo77862 = new VF.Curve(smo75495, smo75498, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo77862.setContext(context).draw();
// modifier from 1-18-0-5 to 1-19-0-0
const smo77863 = new VF.Curve(smo75499, smo75518, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo77863.setContext(context).draw();
}
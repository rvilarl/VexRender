// @@ Comfort Ye, My People p 1/3 (Comfort Ye, my people (tenor)) by Handel
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1421.487603305785');
svg.setAttributeNS('', 'height', '1839.5721925133685');
svg.setAttributeNS('', 'viewBox', '0 0 1484 1920');
//
// create the musical objects
VF.setMusicFont("Gonville","Bravura","Custom");
const fmtsmo870570 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo87057v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo87057v0ar = [];
const smo87029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo87029.setAttribute('id', 'smo87029');
const  smo98615 = new VF.Articulation('a.').setPosition(4);
smo87029.addModifier(smo98615, 0);
smo87057v0ar.push(smo87029);
const smo87032 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo87032.setAttribute('id', 'smo87032');
const  smo98616 = new VF.Articulation('a.').setPosition(4);
smo87032.addModifier(smo98616, 0);
smo87057v0ar.push(smo87032);
const smo87034 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo87034.setAttribute('id', 'smo87034');
const  smo98617 = new VF.Articulation('a.').setPosition(4);
smo87034.addModifier(smo98617, 0);
smo87057v0ar.push(smo87034);
const smo87036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo87036.setAttribute('id', 'smo87036');
const  smo98618 = new VF.Articulation('a.').setPosition(4);
smo87036.addModifier(smo98618, 0);
smo87057v0ar.push(smo87036);
const smo87038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo87038.setAttribute('id', 'smo87038');
smo87057v0ar.push(smo87038);
const smo87039 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo87039.setAttribute('id', 'smo87039');
smo87039.addModifier(new VF.Dot(), 0);
smo87057v0ar.push(smo87039);
const smo87040 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo87040.setAttribute('id', 'smo87040');
smo87057v0ar.push(smo87040);
const smo87041 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo87041.setAttribute('id', 'smo87041');
smo87057v0ar.push(smo87041);
smo87057v0.addTickables(smo87057v0ar)
fmtsmo870570.joinVoices([smo87057v0]);
const fmtsmo878760 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo87876v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo87876v0ar = [];
const smo87849 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87849.setAttribute('id', 'smo87849');
const  smo98619 = new VF.Articulation('a.').setPosition(4);
smo87849.addModifier(smo98619, 0);
smo87876v0ar.push(smo87849);
const smo87851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87851.setAttribute('id', 'smo87851');
const  smo98620 = new VF.Articulation('a.').setPosition(4);
smo87851.addModifier(smo98620, 0);
smo87876v0ar.push(smo87851);
const smo87853 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87853.setAttribute('id', 'smo87853');
const  smo98621 = new VF.Articulation('a.').setPosition(4);
smo87853.addModifier(smo98621, 0);
smo87876v0ar.push(smo87853);
const smo87855 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87855.setAttribute('id', 'smo87855');
const  smo98622 = new VF.Articulation('a.').setPosition(4);
smo87855.addModifier(smo98622, 0);
smo87876v0ar.push(smo87855);
const smo87857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87857.setAttribute('id', 'smo87857');
smo87876v0ar.push(smo87857);
const smo87858 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87858.setAttribute('id', 'smo87858');
smo87876v0ar.push(smo87858);
const smo87859 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87859.setAttribute('id', 'smo87859');
smo87876v0ar.push(smo87859);
const smo87860 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87860.setAttribute('id', 'smo87860');
smo87876v0ar.push(smo87860);
smo87876v0.addTickables(smo87876v0ar)
fmtsmo878760.joinVoices([smo87876v0]);
const fmtsmo886870 = new VF.Formatter();
//
// voices and notes for stave 2 0
const smo88687v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo88687v0ar = [];
const smo88660 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88660.setAttribute('id', 'smo88660');
const  smo98623 = new VF.Articulation('a.').setPosition(4);
smo88660.addModifier(smo98623, 0);
smo88687v0ar.push(smo88660);
const smo88662 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88662.setAttribute('id', 'smo88662');
const  smo98624 = new VF.Articulation('a.').setPosition(4);
smo88662.addModifier(smo98624, 0);
smo88687v0ar.push(smo88662);
const smo88664 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88664.setAttribute('id', 'smo88664');
const  smo98625 = new VF.Articulation('a.').setPosition(4);
smo88664.addModifier(smo98625, 0);
smo88687v0ar.push(smo88664);
const smo88666 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88666.setAttribute('id', 'smo88666');
const  smo98626 = new VF.Articulation('a.').setPosition(4);
smo88666.addModifier(smo98626, 0);
smo88687v0ar.push(smo88666);
const smo88668 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88668.setAttribute('id', 'smo88668');
smo88687v0ar.push(smo88668);
const smo88669 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88669.setAttribute('id', 'smo88669');
smo88687v0ar.push(smo88669);
const smo88670 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88670.setAttribute('id', 'smo88670');
smo88687v0ar.push(smo88670);
const smo88671 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88671.setAttribute('id', 'smo88671');
smo88687v0ar.push(smo88671);
smo88687v0.addTickables(smo88687v0ar)
fmtsmo886870.joinVoices([smo88687v0]);
const fmtsmo894870 = new VF.Formatter();
//
// voices and notes for stave 3 0
const smo89487v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo89487v0ar = [];
const smo89471 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo89471.setAttribute('id', 'smo89471');
smo89487v0ar.push(smo89471);
smo89487v0.addTickables(smo89487v0ar)
fmtsmo894870.joinVoices([smo89487v0]);
const fmtsmo903720 = new VF.Formatter();
//
// voices and notes for stave 4 0
const smo90372v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo90372v0ar = [];
const smo90352 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo90352.setAttribute('id', 'smo90352');
smo90372v0ar.push(smo90352);
const smo90353 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/2/n"]}'))
smo90353.setAttribute('id', 'smo90353');
smo90372v0ar.push(smo90353);
const smo90354 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/2/n"]}'))
smo90354.setAttribute('id', 'smo90354');
smo90372v0ar.push(smo90354);
const smo90355 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/2/n"]}'))
smo90355.setAttribute('id', 'smo90355');
smo90372v0ar.push(smo90355);
const smo90356 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/2/n"]}'))
smo90356.setAttribute('id', 'smo90356');
smo90372v0ar.push(smo90356);
smo90372v0.addTickables(smo90372v0ar)
fmtsmo903720.joinVoices([smo90372v0]);
// create beam groups and tuplets for format grp smo91149 before formatting
const dirsmo97500 = smo87029.getStemDirection();
smo87029.setStemDirection(dirsmo97500);
smo87032.setStemDirection(dirsmo97500);
const smo97500 = new VF.Beam([smo87029,smo87032]);
const dirsmo97501 = smo87034.getStemDirection();
smo87034.setStemDirection(dirsmo97501);
smo87036.setStemDirection(dirsmo97501);
const smo97501 = new VF.Beam([smo87034,smo87036]);
const dirsmo97502 = smo87039.getStemDirection();
smo87039.setStemDirection(dirsmo97502);
smo87040.setStemDirection(dirsmo97502);
smo87041.setStemDirection(dirsmo97502);
const smo97502 = new VF.Beam([smo87039,smo87040,smo87041]);
const dirsmo97505 = smo87849.getStemDirection();
smo87849.setStemDirection(dirsmo97505);
smo87851.setStemDirection(dirsmo97505);
smo87853.setStemDirection(dirsmo97505);
smo87855.setStemDirection(dirsmo97505);
const smo97505 = new VF.Beam([smo87849,smo87851,smo87853,smo87855]);
const dirsmo97506 = smo87857.getStemDirection();
smo87857.setStemDirection(dirsmo97506);
smo87858.setStemDirection(dirsmo97506);
smo87859.setStemDirection(dirsmo97506);
smo87860.setStemDirection(dirsmo97506);
const smo97506 = new VF.Beam([smo87857,smo87858,smo87859,smo87860]);
const dirsmo97509 = smo88660.getStemDirection();
smo88660.setStemDirection(dirsmo97509);
smo88662.setStemDirection(dirsmo97509);
smo88664.setStemDirection(dirsmo97509);
smo88666.setStemDirection(dirsmo97509);
const smo97509 = new VF.Beam([smo88660,smo88662,smo88664,smo88666]);
const dirsmo97510 = smo88668.getStemDirection();
smo88668.setStemDirection(dirsmo97510);
smo88669.setStemDirection(dirsmo97510);
smo88670.setStemDirection(dirsmo97510);
smo88671.setStemDirection(dirsmo97510);
const smo97510 = new VF.Beam([smo88668,smo88669,smo88670,smo88671]);
const dirsmo97515 = smo90353.getStemDirection();
smo90353.setStemDirection(dirsmo97515);
smo90354.setStemDirection(dirsmo97515);
smo90355.setStemDirection(dirsmo97515);
smo90356.setStemDirection(dirsmo97515);
const smo97515 = new VF.Beam([smo90353,smo90354,smo90355,smo90356]);
 
// formatting measures in staff group smo91149
fmtsmo870570.format([smo87057v0,smo87876v0,smo88687v0,smo89487v0,smo90372v0], 290);
const stavesmo87057 = new VF.Stave(55, 255, 419);
stavesmo87057.setAttribute('id', 'stavesmo87057');
stavesmo87057.setBegBarType(1);
stavesmo87057.setTempo(JSON.parse('{"name":"Larghetto"}'), -1 * 0);
stavesmo87057.addClef('treble');
stavesmo87057.addTimeSignature('4/4');
const keysmo87057 = new VF.KeySignature('E');
keysmo87057.addToStave(stavesmo87057);
stavesmo87057.setContext(context);
stavesmo87057.draw();
smo87057v0.draw(context, stavesmo87057);
smo97500.setContext(context);
smo97500.draw();
smo97501.setContext(context);
smo97501.draw();
smo97502.setContext(context);
smo97502.draw();
const stavesmo87876 = new VF.Stave(55, 387, 419);
stavesmo87876.setAttribute('id', 'stavesmo87876');
stavesmo87876.setBegBarType(1);
stavesmo87876.addClef('treble');
stavesmo87876.addTimeSignature('4/4');
const keysmo87876 = new VF.KeySignature('E');
keysmo87876.addToStave(stavesmo87876);
stavesmo87876.setContext(context);
stavesmo87876.draw();
smo87876v0.draw(context, stavesmo87876);
smo97505.setContext(context);
smo97505.draw();
smo97506.setContext(context);
smo97506.draw();
const stavesmo88687 = new VF.Stave(55, 507, 419);
stavesmo88687.setAttribute('id', 'stavesmo88687');
stavesmo88687.setBegBarType(1);
stavesmo88687.addClef('alto');
stavesmo88687.addTimeSignature('4/4');
const keysmo88687 = new VF.KeySignature('E');
keysmo88687.addToStave(stavesmo88687);
stavesmo88687.setContext(context);
stavesmo88687.draw();
smo88687v0.draw(context, stavesmo88687);
smo97509.setContext(context);
smo97509.draw();
smo97510.setContext(context);
smo97510.draw();
const stavesmo89487 = new VF.Stave(55, 624, 419);
stavesmo89487.setAttribute('id', 'stavesmo89487');
stavesmo89487.setBegBarType(1);
stavesmo89487.addClef('treble');
stavesmo89487.addTimeSignature('4/4');
const keysmo89487 = new VF.KeySignature('E');
keysmo89487.addToStave(stavesmo89487);
stavesmo89487.setContext(context);
stavesmo89487.draw();
smo89487v0.draw(context, stavesmo89487);
const stavesmo90372 = new VF.Stave(55, 705, 419);
stavesmo90372.setAttribute('id', 'stavesmo90372');
stavesmo90372.setBegBarType(1);
stavesmo90372.addClef('bass');
stavesmo90372.addTimeSignature('4/4');
const keysmo90372 = new VF.KeySignature('E');
keysmo90372.addToStave(stavesmo90372);
stavesmo90372.setContext(context);
stavesmo90372.draw();
smo90372v0.draw(context, stavesmo90372);
smo97515.setContext(context);
smo97515.draw();
const leftsmo91149stavesmo870574 = new VF.StaveConnector(stavesmo87057, stavesmo90372).setType(4);
leftsmo91149stavesmo870574.setContext(context).draw();
const fmtsmo870811 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo87081v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo87081v0ar = [];
const smo87058 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo87058.setAttribute('id', 'smo87058');
smo87081v0ar.push(smo87058);
const smo87059 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo87059.setAttribute('id', 'smo87059');
smo87081v0ar.push(smo87059);
const smo87060 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo87060.setAttribute('id', 'smo87060');
smo87081v0ar.push(smo87060);
const smo87061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo87061.setAttribute('id', 'smo87061');
smo87081v0ar.push(smo87061);
const smo87062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo87062.setAttribute('id', 'smo87062');
smo87081v0ar.push(smo87062);
const smo87063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo87063.setAttribute('id', 'smo87063');
smo87063.addModifier(new VF.Dot(), 0);
smo87081v0ar.push(smo87063);
const smo87064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo87064.setAttribute('id', 'smo87064');
smo87081v0ar.push(smo87064);
const smo87065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo87065.setAttribute('id', 'smo87065');
smo87081v0ar.push(smo87065);
smo87081v0.addTickables(smo87081v0ar)
fmtsmo870811.joinVoices([smo87081v0]);
const fmtsmo879001 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo87900v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo87900v0ar = [];
const smo87877 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87877.setAttribute('id', 'smo87877');
smo87900v0ar.push(smo87877);
const smo87878 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87878.setAttribute('id', 'smo87878');
smo87900v0ar.push(smo87878);
const smo87879 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo87879.setAttribute('id', 'smo87879');
smo87900v0ar.push(smo87879);
const smo87880 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo87880.setAttribute('id', 'smo87880');
smo87900v0ar.push(smo87880);
const smo87881 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo87881.setAttribute('id', 'smo87881');
smo87900v0ar.push(smo87881);
const smo87882 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo87882.setAttribute('id', 'smo87882');
smo87900v0ar.push(smo87882);
const smo87883 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo87883.setAttribute('id', 'smo87883');
smo87900v0ar.push(smo87883);
const smo87884 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo87884.setAttribute('id', 'smo87884');
smo87900v0ar.push(smo87884);
smo87900v0.addTickables(smo87900v0ar)
fmtsmo879001.joinVoices([smo87900v0]);
const fmtsmo887111 = new VF.Formatter();
//
// voices and notes for stave 2 1
const smo88711v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo88711v0ar = [];
const smo88688 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88688.setAttribute('id', 'smo88688');
smo88711v0ar.push(smo88688);
const smo88689 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88689.setAttribute('id', 'smo88689');
smo88711v0ar.push(smo88689);
const smo88690 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88690.setAttribute('id', 'smo88690');
smo88711v0ar.push(smo88690);
const smo88691 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88691.setAttribute('id', 'smo88691');
smo88711v0ar.push(smo88691);
const smo88692 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo88692.setAttribute('id', 'smo88692');
smo88711v0ar.push(smo88692);
const smo88693 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo88693.setAttribute('id', 'smo88693');
smo88711v0ar.push(smo88693);
const smo88694 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo88694.setAttribute('id', 'smo88694');
smo88711v0ar.push(smo88694);
const smo88695 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo88695.setAttribute('id', 'smo88695');
smo88711v0ar.push(smo88695);
smo88711v0.addTickables(smo88711v0ar)
fmtsmo887111.joinVoices([smo88711v0]);
const fmtsmo895041 = new VF.Formatter();
//
// voices and notes for stave 3 1
const smo89504v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo89504v0ar = [];
const smo89488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo89488.setAttribute('id', 'smo89488');
smo89504v0ar.push(smo89488);
smo89504v0.addTickables(smo89504v0ar)
fmtsmo895041.joinVoices([smo89504v0]);
const fmtsmo903941 = new VF.Formatter();
//
// voices and notes for stave 4 1
const smo90394v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo90394v0ar = [];
const smo90373 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo90373.setAttribute('id', 'smo90373');
smo90394v0ar.push(smo90373);
const smo90374 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo90374.setAttribute('id', 'smo90374');
smo90394v0ar.push(smo90374);
const smo90375 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/2/n"]}'))
smo90375.setAttribute('id', 'smo90375');
smo90394v0ar.push(smo90375);
const smo90376 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/2/n"]}'))
smo90376.setAttribute('id', 'smo90376');
smo90394v0ar.push(smo90376);
const smo90377 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/2/n"]}'))
smo90377.setAttribute('id', 'smo90377');
smo90394v0ar.push(smo90377);
const smo90378 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/2/n"]}'))
smo90378.setAttribute('id', 'smo90378');
smo90394v0ar.push(smo90378);
smo90394v0.addTickables(smo90394v0ar)
fmtsmo903941.joinVoices([smo90394v0]);
// create beam groups and tuplets for format grp smo91149 before formatting
const dirsmo97518 = smo87058.getStemDirection();
smo87058.setStemDirection(dirsmo97518);
smo87059.setStemDirection(dirsmo97518);
const smo97518 = new VF.Beam([smo87058,smo87059]);
const dirsmo97519 = smo87060.getStemDirection();
smo87060.setStemDirection(dirsmo97519);
smo87061.setStemDirection(dirsmo97519);
const smo97519 = new VF.Beam([smo87060,smo87061]);
const dirsmo97520 = smo87063.getStemDirection();
smo87063.setStemDirection(dirsmo97520);
smo87064.setStemDirection(dirsmo97520);
smo87065.setStemDirection(dirsmo97520);
const smo97520 = new VF.Beam([smo87063,smo87064,smo87065]);
const dirsmo97523 = smo87877.getStemDirection();
smo87877.setStemDirection(dirsmo97523);
smo87878.setStemDirection(dirsmo97523);
smo87879.setStemDirection(dirsmo97523);
smo87880.setStemDirection(dirsmo97523);
const smo97523 = new VF.Beam([smo87877,smo87878,smo87879,smo87880]);
const dirsmo97524 = smo87881.getStemDirection();
smo87881.setStemDirection(dirsmo97524);
smo87882.setStemDirection(dirsmo97524);
smo87883.setStemDirection(dirsmo97524);
smo87884.setStemDirection(dirsmo97524);
const smo97524 = new VF.Beam([smo87881,smo87882,smo87883,smo87884]);
const dirsmo97527 = smo88688.getStemDirection();
smo88688.setStemDirection(dirsmo97527);
smo88689.setStemDirection(dirsmo97527);
smo88690.setStemDirection(dirsmo97527);
smo88691.setStemDirection(dirsmo97527);
const smo97527 = new VF.Beam([smo88688,smo88689,smo88690,smo88691]);
const dirsmo97528 = smo88692.getStemDirection();
smo88692.setStemDirection(dirsmo97528);
smo88693.setStemDirection(dirsmo97528);
smo88694.setStemDirection(dirsmo97528);
smo88695.setStemDirection(dirsmo97528);
const smo97528 = new VF.Beam([smo88692,smo88693,smo88694,smo88695]);
const dirsmo97533 = smo90375.getStemDirection();
smo90375.setStemDirection(dirsmo97533);
smo90376.setStemDirection(dirsmo97533);
smo90377.setStemDirection(dirsmo97533);
smo90378.setStemDirection(dirsmo97533);
const smo97533 = new VF.Beam([smo90375,smo90376,smo90377,smo90378]);
 
// formatting measures in staff group smo91149
fmtsmo870811.format([smo87081v0,smo87900v0,smo88711v0,smo89504v0,smo90394v0], 295);
const stavesmo87081 = new VF.Stave(474, 255, 309);
stavesmo87081.setAttribute('id', 'stavesmo87081');
stavesmo87081.setBegBarType(VF.Barline.type.NONE);
stavesmo87081.setContext(context);
stavesmo87081.draw();
smo87081v0.draw(context, stavesmo87081);
smo97518.setContext(context);
smo97518.draw();
smo97519.setContext(context);
smo97519.draw();
smo97520.setContext(context);
smo97520.draw();
const stavesmo87900 = new VF.Stave(474, 387, 309);
stavesmo87900.setAttribute('id', 'stavesmo87900');
stavesmo87900.setBegBarType(VF.Barline.type.NONE);
stavesmo87900.setContext(context);
stavesmo87900.draw();
smo87900v0.draw(context, stavesmo87900);
smo97523.setContext(context);
smo97523.draw();
smo97524.setContext(context);
smo97524.draw();
const stavesmo88711 = new VF.Stave(474, 507, 309);
stavesmo88711.setAttribute('id', 'stavesmo88711');
stavesmo88711.setBegBarType(VF.Barline.type.NONE);
stavesmo88711.setContext(context);
stavesmo88711.draw();
smo88711v0.draw(context, stavesmo88711);
smo97527.setContext(context);
smo97527.draw();
smo97528.setContext(context);
smo97528.draw();
const stavesmo89504 = new VF.Stave(474, 624, 309);
stavesmo89504.setAttribute('id', 'stavesmo89504');
stavesmo89504.setBegBarType(VF.Barline.type.NONE);
stavesmo89504.setContext(context);
stavesmo89504.draw();
smo89504v0.draw(context, stavesmo89504);
const stavesmo90394 = new VF.Stave(474, 705, 309);
stavesmo90394.setAttribute('id', 'stavesmo90394');
stavesmo90394.setBegBarType(VF.Barline.type.NONE);
stavesmo90394.setContext(context);
stavesmo90394.draw();
smo90394v0.draw(context, stavesmo90394);
smo97533.setContext(context);
smo97533.draw();
const fmtsmo871052 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo87105v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo87105v0ar = [];
const smo87082 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87082.setAttribute('id', 'smo87082');
smo87105v0ar.push(smo87082);
const smo87083 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16d","dots":1,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87083.setAttribute('id', 'smo87083');
smo87083.addModifier(new VF.Dot(), 0);
smo87105v0ar.push(smo87083);
const smo87084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo87084.setAttribute('id', 'smo87084');
smo87105v0ar.push(smo87084);
const smo87085 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87085.setAttribute('id', 'smo87085');
smo87105v0ar.push(smo87085);
const smo87086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo87086.setAttribute('id', 'smo87086');
smo87105v0ar.push(smo87086);
const smo87087 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo87087.setAttribute('id', 'smo87087');
smo87105v0ar.push(smo87087);
const smo87088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo87088.setAttribute('id', 'smo87088');
smo87088.addModifier(new VF.Dot(), 0);
smo87105v0ar.push(smo87088);
const smo87089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87089.setAttribute('id', 'smo87089');
smo87105v0ar.push(smo87089);
smo87105v0.addTickables(smo87105v0ar)
fmtsmo871052.joinVoices([smo87105v0]);
const fmtsmo879242 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo87924v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo87924v0ar = [];
const smo87901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87901.setAttribute('id', 'smo87901');
smo87924v0ar.push(smo87901);
const smo87902 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87902.setAttribute('id', 'smo87902');
smo87924v0ar.push(smo87902);
const smo87903 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87903.setAttribute('id', 'smo87903');
smo87924v0ar.push(smo87903);
const smo87904 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87904.setAttribute('id', 'smo87904');
smo87924v0ar.push(smo87904);
const smo87905 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87905.setAttribute('id', 'smo87905');
smo87924v0ar.push(smo87905);
const smo87906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87906.setAttribute('id', 'smo87906');
smo87924v0ar.push(smo87906);
const smo87907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo87907.setAttribute('id', 'smo87907');
smo87924v0ar.push(smo87907);
const smo87908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo87908.setAttribute('id', 'smo87908');
smo87924v0ar.push(smo87908);
smo87924v0.addTickables(smo87924v0ar)
fmtsmo879242.joinVoices([smo87924v0]);
const fmtsmo887352 = new VF.Formatter();
//
// voices and notes for stave 2 2
const smo88735v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo88735v0ar = [];
const smo88712 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88712.setAttribute('id', 'smo88712');
smo88735v0ar.push(smo88712);
const smo88713 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88713.setAttribute('id', 'smo88713');
smo88735v0ar.push(smo88713);
const smo88714 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo88714.setAttribute('id', 'smo88714');
smo88735v0ar.push(smo88714);
const smo88715 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo88715.setAttribute('id', 'smo88715');
smo88735v0ar.push(smo88715);
const smo88716 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88716.setAttribute('id', 'smo88716');
smo88735v0ar.push(smo88716);
const smo88717 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88717.setAttribute('id', 'smo88717');
smo88735v0ar.push(smo88717);
const smo88718 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo88718.setAttribute('id', 'smo88718');
smo88735v0ar.push(smo88718);
const smo88719 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo88719.setAttribute('id', 'smo88719');
smo88735v0ar.push(smo88719);
smo88735v0.addTickables(smo88735v0ar)
fmtsmo887352.joinVoices([smo88735v0]);
const fmtsmo895212 = new VF.Formatter();
//
// voices and notes for stave 3 2
const smo89521v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo89521v0ar = [];
const smo89505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo89505.setAttribute('id', 'smo89505');
smo89521v0ar.push(smo89505);
smo89521v0.addTickables(smo89521v0ar)
fmtsmo895212.joinVoices([smo89521v0]);
const fmtsmo904182 = new VF.Formatter();
//
// voices and notes for stave 4 2
const smo90418v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo90418v0ar = [];
const smo90395 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/2/n"]}'))
smo90395.setAttribute('id', 'smo90395');
smo90418v0ar.push(smo90395);
const smo90396 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/2/n"]}'))
smo90396.setAttribute('id', 'smo90396');
smo90418v0ar.push(smo90396);
const smo90397 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["c#/3/n"]}'))
smo90397.setAttribute('id', 'smo90397');
smo90418v0ar.push(smo90397);
const smo90398 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["c#/3/n"]}'))
smo90398.setAttribute('id', 'smo90398');
smo90418v0ar.push(smo90398);
const smo90399 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo90399.setAttribute('id', 'smo90399');
smo90418v0ar.push(smo90399);
const smo90400 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo90400.setAttribute('id', 'smo90400');
smo90418v0ar.push(smo90400);
const smo90401 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo90401.setAttribute('id', 'smo90401');
smo90418v0ar.push(smo90401);
const smo90402 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo90402.setAttribute('id', 'smo90402');
smo90418v0ar.push(smo90402);
smo90418v0.addTickables(smo90418v0ar)
fmtsmo904182.joinVoices([smo90418v0]);
// create beam groups and tuplets for format grp smo91149 before formatting
const dirsmo97536 = smo87082.getStemDirection();
smo87082.setStemDirection(dirsmo97536);
smo87083.setStemDirection(dirsmo97536);
smo87084.setStemDirection(dirsmo97536);
const smo97536 = new VF.Beam([smo87082,smo87083,smo87084]);
const dirsmo97537 = smo87085.getStemDirection();
smo87085.setStemDirection(dirsmo97537);
smo87086.setStemDirection(dirsmo97537);
const smo97537 = new VF.Beam([smo87085,smo87086]);
const dirsmo97538 = smo87088.getStemDirection();
smo87088.setStemDirection(dirsmo97538);
smo87089.setStemDirection(dirsmo97538);
const smo97538 = new VF.Beam([smo87088,smo87089]);
const dirsmo97541 = smo87901.getStemDirection();
smo87901.setStemDirection(dirsmo97541);
smo87902.setStemDirection(dirsmo97541);
smo87903.setStemDirection(dirsmo97541);
smo87904.setStemDirection(dirsmo97541);
const smo97541 = new VF.Beam([smo87901,smo87902,smo87903,smo87904]);
const dirsmo97542 = smo87905.getStemDirection();
smo87905.setStemDirection(dirsmo97542);
smo87906.setStemDirection(dirsmo97542);
smo87907.setStemDirection(dirsmo97542);
smo87908.setStemDirection(dirsmo97542);
const smo97542 = new VF.Beam([smo87905,smo87906,smo87907,smo87908]);
const dirsmo97545 = smo88712.getStemDirection();
smo88712.setStemDirection(dirsmo97545);
smo88713.setStemDirection(dirsmo97545);
smo88714.setStemDirection(dirsmo97545);
smo88715.setStemDirection(dirsmo97545);
const smo97545 = new VF.Beam([smo88712,smo88713,smo88714,smo88715]);
const dirsmo97546 = smo88716.getStemDirection();
smo88716.setStemDirection(dirsmo97546);
smo88717.setStemDirection(dirsmo97546);
smo88718.setStemDirection(dirsmo97546);
smo88719.setStemDirection(dirsmo97546);
const smo97546 = new VF.Beam([smo88716,smo88717,smo88718,smo88719]);
const dirsmo97551 = smo90395.getStemDirection();
smo90395.setStemDirection(dirsmo97551);
smo90396.setStemDirection(dirsmo97551);
smo90397.setStemDirection(dirsmo97551);
smo90398.setStemDirection(dirsmo97551);
const smo97551 = new VF.Beam([smo90395,smo90396,smo90397,smo90398]);
const dirsmo97552 = smo90399.getStemDirection();
smo90399.setStemDirection(dirsmo97552);
smo90400.setStemDirection(dirsmo97552);
smo90401.setStemDirection(dirsmo97552);
smo90402.setStemDirection(dirsmo97552);
const smo97552 = new VF.Beam([smo90399,smo90400,smo90401,smo90402]);
 
// formatting measures in staff group smo91149
fmtsmo871052.format([smo87105v0,smo87924v0,smo88735v0,smo89521v0,smo90418v0], 303);
const stavesmo87105 = new VF.Stave(783, 255, 317);
stavesmo87105.setAttribute('id', 'stavesmo87105');
stavesmo87105.setBegBarType(VF.Barline.type.NONE);
stavesmo87105.setContext(context);
stavesmo87105.draw();
smo87105v0.draw(context, stavesmo87105);
smo97536.setContext(context);
smo97536.draw();
smo97537.setContext(context);
smo97537.draw();
smo97538.setContext(context);
smo97538.draw();
const stavesmo87924 = new VF.Stave(783, 387, 317);
stavesmo87924.setAttribute('id', 'stavesmo87924');
stavesmo87924.setBegBarType(VF.Barline.type.NONE);
stavesmo87924.setContext(context);
stavesmo87924.draw();
smo87924v0.draw(context, stavesmo87924);
smo97541.setContext(context);
smo97541.draw();
smo97542.setContext(context);
smo97542.draw();
const stavesmo88735 = new VF.Stave(783, 507, 317);
stavesmo88735.setAttribute('id', 'stavesmo88735');
stavesmo88735.setBegBarType(VF.Barline.type.NONE);
stavesmo88735.setContext(context);
stavesmo88735.draw();
smo88735v0.draw(context, stavesmo88735);
smo97545.setContext(context);
smo97545.draw();
smo97546.setContext(context);
smo97546.draw();
const stavesmo89521 = new VF.Stave(783, 624, 317);
stavesmo89521.setAttribute('id', 'stavesmo89521');
stavesmo89521.setBegBarType(VF.Barline.type.NONE);
stavesmo89521.setContext(context);
stavesmo89521.draw();
smo89521v0.draw(context, stavesmo89521);
const stavesmo90418 = new VF.Stave(783, 705, 317);
stavesmo90418.setAttribute('id', 'stavesmo90418');
stavesmo90418.setBegBarType(VF.Barline.type.NONE);
stavesmo90418.setContext(context);
stavesmo90418.draw();
smo90418v0.draw(context, stavesmo90418);
smo97551.setContext(context);
smo97551.draw();
smo97552.setContext(context);
smo97552.draw();
const fmtsmo871263 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo87126v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo87126v0ar = [];
const smo87106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87106.setAttribute('id', 'smo87106');
smo87126v0ar.push(smo87106);
const smo87107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo87107.setAttribute('id', 'smo87107');
smo87126v0ar.push(smo87107);
const smo87108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
smo87108.setAttribute('id', 'smo87108');
smo87108.addModifier(new VF.Dot(), 0);
smo87126v0ar.push(smo87108);
const smo87109 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo87109.setAttribute('id', 'smo87109');
smo87126v0ar.push(smo87109);
const smo87110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["g#/5/n"]}'))
smo87110.setAttribute('id', 'smo87110');
smo87126v0ar.push(smo87110);
smo87126v0.addTickables(smo87126v0ar)
fmtsmo871263.joinVoices([smo87126v0]);
const fmtsmo879453 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo87945v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo87945v0ar = [];
const smo87925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87925.setAttribute('id', 'smo87925');
smo87945v0ar.push(smo87925);
const smo87926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo87926.setAttribute('id', 'smo87926');
smo87945v0ar.push(smo87926);
const smo87927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["g#/5/n"]}'))
smo87927.setAttribute('id', 'smo87927');
smo87927.addModifier(new VF.Dot(), 0);
smo87945v0ar.push(smo87927);
const smo87928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo87928.setAttribute('id', 'smo87928');
smo87945v0ar.push(smo87928);
const smo87929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo87929.setAttribute('id', 'smo87929');
smo87945v0ar.push(smo87929);
smo87945v0.addTickables(smo87945v0ar)
fmtsmo879453.joinVoices([smo87945v0]);
const fmtsmo887563 = new VF.Formatter();
//
// voices and notes for stave 2 3
const smo88756v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo88756v0ar = [];
const smo88736 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["g#/3/n"]}'))
smo88736.setAttribute('id', 'smo88736');
smo88756v0ar.push(smo88736);
const smo88737 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["cn/4/r"]}'))
smo88737.setAttribute('id', 'smo88737');
smo88756v0ar.push(smo88737);
const smo88738 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo88738.setAttribute('id', 'smo88738');
smo88738.addModifier(new VF.Dot(), 0);
smo88756v0ar.push(smo88738);
const smo88739 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo88739.setAttribute('id', 'smo88739');
smo88756v0ar.push(smo88739);
const smo88740 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo88740.setAttribute('id', 'smo88740');
smo88756v0ar.push(smo88740);
smo88756v0.addTickables(smo88756v0ar)
fmtsmo887563.joinVoices([smo88756v0]);
const fmtsmo895443 = new VF.Formatter();
//
// voices and notes for stave 3 3
const smo89544v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo89544v0ar = [];
const smo89522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo89522.setAttribute('id', 'smo89522');
smo89522.addModifier(new VF.Dot(), 0);
const smo89523 = new VF.Annotation('Com');
smo89523.setAttribute('id', 'smo89523');
smo89523.setFont('Merriweather', 12, 'normal');
smo89523.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo89522.addModifier(smo89523);
smo89523.addClass('lyric lyric-0 lyric-hyphen');
smo89544v0ar.push(smo89522);
const smo89524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo89524.setAttribute('id', 'smo89524');
const smo89525 = new VF.Annotation('fort');
smo89525.setAttribute('id', 'smo89525');
smo89525.setFont('Merriweather', 12, 'normal');
smo89525.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo89524.addModifier(smo89525);
smo89525.addClass('lyric lyric-0');
smo89544v0ar.push(smo89524);
const smo89526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo89526.setAttribute('id', 'smo89526');
const smo89527 = new VF.Annotation('ye!');
smo89527.setAttribute('id', 'smo89527');
smo89527.setFont('Merriweather', 12, 'normal');
smo89527.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo89526.addModifier(smo89527);
smo89527.addClass('lyric lyric-0');
smo89544v0ar.push(smo89526);
const smo89528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo89528.setAttribute('id', 'smo89528');
smo89544v0ar.push(smo89528);
smo89544v0.addTickables(smo89544v0ar)
fmtsmo895443.joinVoices([smo89544v0]);
const fmtsmo904373 = new VF.Formatter();
//
// voices and notes for stave 4 3
const smo90437v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo90437v0ar = [];
const smo90419 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo90419.setAttribute('id', 'smo90419');
smo90437v0ar.push(smo90419);
const smo90420 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo90420.setAttribute('id', 'smo90420');
smo90437v0ar.push(smo90420);
const smo90421 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo90421.setAttribute('id', 'smo90421');
smo90437v0ar.push(smo90421);
smo90437v0.addTickables(smo90437v0ar)
fmtsmo904373.joinVoices([smo90437v0]);
// create beam groups and tuplets for format grp smo91149 before formatting
const dirsmo97555 = smo87108.getStemDirection();
smo87108.setStemDirection(dirsmo97555);
smo87109.setStemDirection(dirsmo97555);
const smo97555 = new VF.Beam([smo87108,smo87109]);
const dirsmo97558 = smo87927.getStemDirection();
smo87927.setStemDirection(dirsmo97558);
smo87928.setStemDirection(dirsmo97558);
const smo97558 = new VF.Beam([smo87927,smo87928]);
const dirsmo97561 = smo88738.getStemDirection();
smo88738.setStemDirection(dirsmo97561);
smo88739.setStemDirection(dirsmo97561);
const smo97561 = new VF.Beam([smo88738,smo88739]);
const dirsmo97564 = smo89522.getStemDirection();
smo89522.setStemDirection(dirsmo97564);
smo89524.setStemDirection(dirsmo97564);
const smo97564 = new VF.Beam([smo89522,smo89524]);
 
// formatting measures in staff group smo91149
fmtsmo871263.format([smo87126v0,smo87945v0,smo88756v0,smo89544v0,smo90437v0], 261);
const stavesmo87126 = new VF.Stave(1100, 255, 275);
stavesmo87126.setAttribute('id', 'stavesmo87126');
stavesmo87126.setBegBarType(VF.Barline.type.NONE);
stavesmo87126.setContext(context);
stavesmo87126.draw();
smo87126v0.draw(context, stavesmo87126);
smo97555.setContext(context);
smo97555.draw();
const stavesmo87945 = new VF.Stave(1100, 387, 275);
stavesmo87945.setAttribute('id', 'stavesmo87945');
stavesmo87945.setBegBarType(VF.Barline.type.NONE);
stavesmo87945.setContext(context);
stavesmo87945.draw();
smo87945v0.draw(context, stavesmo87945);
smo97558.setContext(context);
smo97558.draw();
const stavesmo88756 = new VF.Stave(1100, 507, 275);
stavesmo88756.setAttribute('id', 'stavesmo88756');
stavesmo88756.setBegBarType(VF.Barline.type.NONE);
stavesmo88756.setContext(context);
stavesmo88756.draw();
smo88756v0.draw(context, stavesmo88756);
smo97561.setContext(context);
smo97561.draw();
const stavesmo89544 = new VF.Stave(1100, 624, 275);
stavesmo89544.setAttribute('id', 'stavesmo89544');
stavesmo89544.setBegBarType(VF.Barline.type.NONE);
stavesmo89544.setContext(context);
stavesmo89544.draw();
smo89544v0.draw(context, stavesmo89544);
smo97564.setContext(context);
smo97564.draw();
const stavesmo90437 = new VF.Stave(1100, 705, 275);
stavesmo90437.setAttribute('id', 'stavesmo90437');
stavesmo90437.setBegBarType(VF.Barline.type.NONE);
stavesmo90437.setContext(context);
stavesmo90437.draw();
smo90437v0.draw(context, stavesmo90437);
const rightsmo91149stavesmo871264 = new VF.StaveConnector(stavesmo87126, stavesmo90437).setType(0);
rightsmo91149stavesmo871264.setContext(context).draw();
const fmtsmo871504 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo87150v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo87150v0ar = [];
const smo87127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo87127.setAttribute('id', 'smo87127');
smo87150v0ar.push(smo87127);
const smo87128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo87128.setAttribute('id', 'smo87128');
smo87150v0ar.push(smo87128);
const smo87129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo87129.setAttribute('id', 'smo87129');
smo87150v0ar.push(smo87129);
const smo87130 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo87130.setAttribute('id', 'smo87130');
smo87150v0ar.push(smo87130);
const smo87131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo87131.setAttribute('id', 'smo87131');
smo87150v0ar.push(smo87131);
const smo87132 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo87132.setAttribute('id', 'smo87132');
smo87132.addModifier(new VF.Dot(), 0);
smo87150v0ar.push(smo87132);
const smo87133 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo87133.setAttribute('id', 'smo87133');
smo87150v0ar.push(smo87133);
const smo87134 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo87134.setAttribute('id', 'smo87134');
smo87150v0ar.push(smo87134);
smo87150v0.addTickables(smo87150v0ar)
fmtsmo871504.joinVoices([smo87150v0]);
const fmtsmo879694 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo87969v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo87969v0ar = [];
const smo87946 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87946.setAttribute('id', 'smo87946');
smo87969v0ar.push(smo87946);
const smo87947 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87947.setAttribute('id', 'smo87947');
smo87969v0ar.push(smo87947);
const smo87948 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87948.setAttribute('id', 'smo87948');
smo87969v0ar.push(smo87948);
const smo87949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87949.setAttribute('id', 'smo87949');
smo87969v0ar.push(smo87949);
const smo87950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87950.setAttribute('id', 'smo87950');
smo87969v0ar.push(smo87950);
const smo87951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87951.setAttribute('id', 'smo87951');
smo87969v0ar.push(smo87951);
const smo87952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87952.setAttribute('id', 'smo87952');
smo87969v0ar.push(smo87952);
const smo87953 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87953.setAttribute('id', 'smo87953');
smo87969v0ar.push(smo87953);
smo87969v0.addTickables(smo87969v0ar)
fmtsmo879694.joinVoices([smo87969v0]);
const fmtsmo887804 = new VF.Formatter();
//
// voices and notes for stave 2 4
const smo88780v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo88780v0ar = [];
const smo88757 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88757.setAttribute('id', 'smo88757');
smo88780v0ar.push(smo88757);
const smo88758 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88758.setAttribute('id', 'smo88758');
smo88780v0ar.push(smo88758);
const smo88759 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88759.setAttribute('id', 'smo88759');
smo88780v0ar.push(smo88759);
const smo88760 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88760.setAttribute('id', 'smo88760');
smo88780v0ar.push(smo88760);
const smo88761 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88761.setAttribute('id', 'smo88761');
smo88780v0ar.push(smo88761);
const smo88762 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88762.setAttribute('id', 'smo88762');
smo88780v0ar.push(smo88762);
const smo88763 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88763.setAttribute('id', 'smo88763');
smo88780v0ar.push(smo88763);
const smo88764 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88764.setAttribute('id', 'smo88764');
smo88780v0ar.push(smo88764);
smo88780v0.addTickables(smo88780v0ar)
fmtsmo887804.joinVoices([smo88780v0]);
const fmtsmo895634 = new VF.Formatter();
//
// voices and notes for stave 3 4
const smo89563v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo89563v0ar = [];
const smo89545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo89545.setAttribute('id', 'smo89545');
smo89563v0ar.push(smo89545);
const smo89546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo89546.setAttribute('id', 'smo89546');
const smo89547 = new VF.Annotation('com');
smo89547.setAttribute('id', 'smo89547');
smo89547.setFont('Merriweather', 12, 'normal');
smo89547.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo89546.addModifier(smo89547);
smo89547.addClass('lyric lyric-0');
smo89563v0ar.push(smo89546);
smo89563v0.addTickables(smo89563v0ar)
fmtsmo895634.joinVoices([smo89563v0]);
const fmtsmo904614 = new VF.Formatter();
//
// voices and notes for stave 4 4
const smo90461v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo90461v0ar = [];
const smo90438 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo90438.setAttribute('id', 'smo90438');
smo90461v0ar.push(smo90438);
const smo90439 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo90439.setAttribute('id', 'smo90439');
smo90461v0ar.push(smo90439);
const smo90440 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo90440.setAttribute('id', 'smo90440');
smo90461v0ar.push(smo90440);
const smo90441 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo90441.setAttribute('id', 'smo90441');
smo90461v0ar.push(smo90441);
const smo90442 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/3/n"]}'))
smo90442.setAttribute('id', 'smo90442');
smo90461v0ar.push(smo90442);
const smo90443 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/3/n"]}'))
smo90443.setAttribute('id', 'smo90443');
smo90461v0ar.push(smo90443);
const smo90444 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/3/n"]}'))
smo90444.setAttribute('id', 'smo90444');
smo90461v0ar.push(smo90444);
const smo90445 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/3/n"]}'))
smo90445.setAttribute('id', 'smo90445');
smo90461v0ar.push(smo90445);
smo90461v0.addTickables(smo90461v0ar)
fmtsmo904614.joinVoices([smo90461v0]);
// create beam groups and tuplets for format grp smo91149 before formatting
const dirsmo97588 = smo87127.getStemDirection();
smo87127.setStemDirection(dirsmo97588);
smo87128.setStemDirection(dirsmo97588);
const smo97588 = new VF.Beam([smo87127,smo87128]);
const dirsmo97589 = smo87129.getStemDirection();
smo87129.setStemDirection(dirsmo97589);
smo87130.setStemDirection(dirsmo97589);
const smo97589 = new VF.Beam([smo87129,smo87130]);
const dirsmo97590 = smo87132.getStemDirection();
smo87132.setStemDirection(dirsmo97590);
smo87133.setStemDirection(dirsmo97590);
smo87134.setStemDirection(dirsmo97590);
const smo97590 = new VF.Beam([smo87132,smo87133,smo87134]);
const dirsmo97593 = smo87946.getStemDirection();
smo87946.setStemDirection(dirsmo97593);
smo87947.setStemDirection(dirsmo97593);
smo87948.setStemDirection(dirsmo97593);
smo87949.setStemDirection(dirsmo97593);
const smo97593 = new VF.Beam([smo87946,smo87947,smo87948,smo87949]);
const dirsmo97594 = smo87950.getStemDirection();
smo87950.setStemDirection(dirsmo97594);
smo87951.setStemDirection(dirsmo97594);
smo87952.setStemDirection(dirsmo97594);
smo87953.setStemDirection(dirsmo97594);
const smo97594 = new VF.Beam([smo87950,smo87951,smo87952,smo87953]);
const dirsmo97597 = smo88757.getStemDirection();
smo88757.setStemDirection(dirsmo97597);
smo88758.setStemDirection(dirsmo97597);
smo88759.setStemDirection(dirsmo97597);
smo88760.setStemDirection(dirsmo97597);
const smo97597 = new VF.Beam([smo88757,smo88758,smo88759,smo88760]);
const dirsmo97598 = smo88761.getStemDirection();
smo88761.setStemDirection(dirsmo97598);
smo88762.setStemDirection(dirsmo97598);
smo88763.setStemDirection(dirsmo97598);
smo88764.setStemDirection(dirsmo97598);
const smo97598 = new VF.Beam([smo88761,smo88762,smo88763,smo88764]);
const dirsmo97603 = smo90438.getStemDirection();
smo90438.setStemDirection(dirsmo97603);
smo90439.setStemDirection(dirsmo97603);
smo90440.setStemDirection(dirsmo97603);
smo90441.setStemDirection(dirsmo97603);
const smo97603 = new VF.Beam([smo90438,smo90439,smo90440,smo90441]);
const dirsmo97604 = smo90442.getStemDirection();
smo90442.setStemDirection(dirsmo97604);
smo90443.setStemDirection(dirsmo97604);
smo90444.setStemDirection(dirsmo97604);
smo90445.setStemDirection(dirsmo97604);
const smo97604 = new VF.Beam([smo90442,smo90443,smo90444,smo90445]);
 
// formatting measures in staff group smo91149
fmtsmo871504.format([smo87150v0,smo87969v0,smo88780v0,smo89563v0,smo90461v0], 312);
const stavesmo87150 = new VF.Stave(55, 839, 421);
stavesmo87150.setAttribute('id', 'stavesmo87150');
stavesmo87150.setBegBarType(1);
stavesmo87150.addClef('treble');
const keysmo87150 = new VF.KeySignature('E');
keysmo87150.addToStave(stavesmo87150);
stavesmo87150.setContext(context);
stavesmo87150.draw();
smo87150v0.draw(context, stavesmo87150);
smo97588.setContext(context);
smo97588.draw();
smo97589.setContext(context);
smo97589.draw();
smo97590.setContext(context);
smo97590.draw();
const stavesmo87969 = new VF.Stave(55, 933, 421);
stavesmo87969.setAttribute('id', 'stavesmo87969');
stavesmo87969.setBegBarType(1);
stavesmo87969.addClef('treble');
const keysmo87969 = new VF.KeySignature('E');
keysmo87969.addToStave(stavesmo87969);
stavesmo87969.setContext(context);
stavesmo87969.draw();
smo87969v0.draw(context, stavesmo87969);
smo97593.setContext(context);
smo97593.draw();
smo97594.setContext(context);
smo97594.draw();
const stavesmo88780 = new VF.Stave(55, 1011, 421);
stavesmo88780.setAttribute('id', 'stavesmo88780');
stavesmo88780.setBegBarType(1);
stavesmo88780.addClef('alto');
const keysmo88780 = new VF.KeySignature('E');
keysmo88780.addToStave(stavesmo88780);
stavesmo88780.setContext(context);
stavesmo88780.draw();
smo88780v0.draw(context, stavesmo88780);
smo97597.setContext(context);
smo97597.draw();
smo97598.setContext(context);
smo97598.draw();
const stavesmo89563 = new VF.Stave(55, 1109, 421);
stavesmo89563.setAttribute('id', 'stavesmo89563');
stavesmo89563.setBegBarType(1);
stavesmo89563.addClef('treble');
const keysmo89563 = new VF.KeySignature('E');
keysmo89563.addToStave(stavesmo89563);
stavesmo89563.setContext(context);
stavesmo89563.draw();
smo89563v0.draw(context, stavesmo89563);
const stavesmo90461 = new VF.Stave(55, 1231, 421);
stavesmo90461.setAttribute('id', 'stavesmo90461');
stavesmo90461.setBegBarType(1);
stavesmo90461.addClef('bass');
const keysmo90461 = new VF.KeySignature('E');
keysmo90461.addToStave(stavesmo90461);
stavesmo90461.setContext(context);
stavesmo90461.draw();
smo90461v0.draw(context, stavesmo90461);
smo97603.setContext(context);
smo97603.draw();
smo97604.setContext(context);
smo97604.draw();
const leftsmo91149stavesmo871504 = new VF.StaveConnector(stavesmo87150, stavesmo90461).setType(4);
leftsmo91149stavesmo871504.setContext(context).draw();
const fmtsmo871745 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo87174v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo87174v0ar = [];
const smo87151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo87151.setAttribute('id', 'smo87151');
smo87174v0ar.push(smo87151);
const smo87152 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo87152.setAttribute('id', 'smo87152');
smo87174v0ar.push(smo87152);
const smo87153 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo87153.setAttribute('id', 'smo87153');
smo87174v0ar.push(smo87153);
const smo87154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo87154.setAttribute('id', 'smo87154');
smo87174v0ar.push(smo87154);
const smo87155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo87155.setAttribute('id', 'smo87155');
smo87174v0ar.push(smo87155);
const smo87156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo87156.setAttribute('id', 'smo87156');
smo87174v0ar.push(smo87156);
const smo87157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo87157.setAttribute('id', 'smo87157');
smo87174v0ar.push(smo87157);
const smo87158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo87158.setAttribute('id', 'smo87158');
smo87174v0ar.push(smo87158);
smo87174v0.addTickables(smo87174v0ar)
fmtsmo871745.joinVoices([smo87174v0]);
const fmtsmo879935 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo87993v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo87993v0ar = [];
const smo87970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87970.setAttribute('id', 'smo87970');
smo87993v0ar.push(smo87970);
const smo87971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87971.setAttribute('id', 'smo87971');
smo87993v0ar.push(smo87971);
const smo87972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87972.setAttribute('id', 'smo87972');
smo87993v0ar.push(smo87972);
const smo87973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87973.setAttribute('id', 'smo87973');
smo87993v0ar.push(smo87973);
const smo87974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87974.setAttribute('id', 'smo87974');
smo87993v0ar.push(smo87974);
const smo87975 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87975.setAttribute('id', 'smo87975');
smo87993v0ar.push(smo87975);
const smo87976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo87976.setAttribute('id', 'smo87976');
smo87993v0ar.push(smo87976);
const smo87977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo87977.setAttribute('id', 'smo87977');
smo87993v0ar.push(smo87977);
smo87993v0.addTickables(smo87993v0ar)
fmtsmo879935.joinVoices([smo87993v0]);
const fmtsmo888045 = new VF.Formatter();
//
// voices and notes for stave 2 5
const smo88804v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo88804v0ar = [];
const smo88781 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88781.setAttribute('id', 'smo88781');
smo88804v0ar.push(smo88781);
const smo88782 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88782.setAttribute('id', 'smo88782');
smo88804v0ar.push(smo88782);
const smo88783 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88783.setAttribute('id', 'smo88783');
smo88804v0ar.push(smo88783);
const smo88784 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88784.setAttribute('id', 'smo88784');
smo88804v0ar.push(smo88784);
const smo88785 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88785.setAttribute('id', 'smo88785');
smo88804v0ar.push(smo88785);
const smo88786 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88786.setAttribute('id', 'smo88786');
smo88804v0ar.push(smo88786);
const smo88787 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo88787.setAttribute('id', 'smo88787');
smo88804v0ar.push(smo88787);
const smo88788 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo88788.setAttribute('id', 'smo88788');
smo88804v0ar.push(smo88788);
smo88804v0.addTickables(smo88804v0ar)
fmtsmo888045.joinVoices([smo88804v0]);
const fmtsmo895905 = new VF.Formatter();
//
// voices and notes for stave 3 5
const smo89590v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo89590v0ar = [];
const smo89564 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo89564.setAttribute('id', 'smo89564');
smo89564.addModifier(new VF.Dot(), 0);
const smo89565 = new VF.Annotation('-');
smo89565.setAttribute('id', 'smo89565');
smo89565.setFont('Merriweather', 12, 'normal');
smo89565.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo89564.addModifier(smo89565);
smo89565.addClass('lyric lyric-0 lyric-hyphen');
smo89590v0ar.push(smo89564);
const smo89566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo89566.setAttribute('id', 'smo89566');
const smo89567 = new VF.Annotation('fort');
smo89567.setAttribute('id', 'smo89567');
smo89567.setFont('Merriweather', 12, 'normal');
smo89567.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo89566.addModifier(smo89567);
smo89567.addClass('lyric lyric-0');
smo89590v0ar.push(smo89566);
const smo89568 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/5/n"]}'))
smo89568.setAttribute('id', 'smo89568');
smo89590v0ar.push(smo89568);
const smo89569 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo89569.setAttribute('id', 'smo89569');
const smo89570 = new VF.Annotation('ye');
smo89570.setAttribute('id', 'smo89570');
smo89570.setFont('Merriweather', 12, 'normal');
smo89570.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo89569.addModifier(smo89570);
smo89570.addClass('lyric lyric-0');
smo89590v0ar.push(smo89569);
const smo89571 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo89571.setAttribute('id', 'smo89571');
smo89571.addModifier(new VF.Dot(), 0);
const smo89572 = new VF.Annotation('-');
smo89572.setAttribute('id', 'smo89572');
smo89572.setFont('Merriweather', 12, 'normal');
smo89572.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo89571.addModifier(smo89572);
smo89572.addClass('lyric lyric-0 lyric-hyphen');
smo89590v0ar.push(smo89571);
const smo89573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo89573.setAttribute('id', 'smo89573');
const smo89574 = new VF.Annotation('my');
smo89574.setAttribute('id', 'smo89574');
smo89574.setFont('Merriweather', 12, 'normal');
smo89574.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo89573.addModifier(smo89574);
smo89574.addClass('lyric lyric-0');
smo89590v0ar.push(smo89573);
smo89590v0.addTickables(smo89590v0ar)
fmtsmo895905.joinVoices([smo89590v0]);
const fmtsmo904855 = new VF.Formatter();
//
// voices and notes for stave 4 5
const smo90485v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo90485v0ar = [];
const smo90462 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo90462.setAttribute('id', 'smo90462');
smo90485v0ar.push(smo90462);
const smo90463 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo90463.setAttribute('id', 'smo90463');
smo90485v0ar.push(smo90463);
const smo90464 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo90464.setAttribute('id', 'smo90464');
smo90485v0ar.push(smo90464);
const smo90465 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo90465.setAttribute('id', 'smo90465');
smo90485v0ar.push(smo90465);
const smo90466 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo90466.setAttribute('id', 'smo90466');
smo90485v0ar.push(smo90466);
const smo90467 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo90467.setAttribute('id', 'smo90467');
smo90485v0ar.push(smo90467);
const smo90468 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo90468.setAttribute('id', 'smo90468');
smo90485v0ar.push(smo90468);
const smo90469 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo90469.setAttribute('id', 'smo90469');
smo90485v0ar.push(smo90469);
smo90485v0.addTickables(smo90485v0ar)
fmtsmo904855.joinVoices([smo90485v0]);
// create beam groups and tuplets for format grp smo91149 before formatting
const dirsmo97607 = smo87151.getStemDirection();
smo87151.setStemDirection(dirsmo97607);
smo87152.setStemDirection(dirsmo97607);
smo87153.setStemDirection(dirsmo97607);
smo87154.setStemDirection(dirsmo97607);
const smo97607 = new VF.Beam([smo87151,smo87152,smo87153,smo87154]);
const dirsmo97608 = smo87155.getStemDirection();
smo87155.setStemDirection(dirsmo97608);
smo87156.setStemDirection(dirsmo97608);
smo87157.setStemDirection(dirsmo97608);
smo87158.setStemDirection(dirsmo97608);
const smo97608 = new VF.Beam([smo87155,smo87156,smo87157,smo87158]);
const dirsmo97611 = smo87970.getStemDirection();
smo87970.setStemDirection(dirsmo97611);
smo87971.setStemDirection(dirsmo97611);
smo87972.setStemDirection(dirsmo97611);
smo87973.setStemDirection(dirsmo97611);
const smo97611 = new VF.Beam([smo87970,smo87971,smo87972,smo87973]);
const dirsmo97612 = smo87974.getStemDirection();
smo87974.setStemDirection(dirsmo97612);
smo87975.setStemDirection(dirsmo97612);
smo87976.setStemDirection(dirsmo97612);
smo87977.setStemDirection(dirsmo97612);
const smo97612 = new VF.Beam([smo87974,smo87975,smo87976,smo87977]);
const dirsmo97615 = smo88781.getStemDirection();
smo88781.setStemDirection(dirsmo97615);
smo88782.setStemDirection(dirsmo97615);
smo88783.setStemDirection(dirsmo97615);
smo88784.setStemDirection(dirsmo97615);
const smo97615 = new VF.Beam([smo88781,smo88782,smo88783,smo88784]);
const dirsmo97616 = smo88785.getStemDirection();
smo88785.setStemDirection(dirsmo97616);
smo88786.setStemDirection(dirsmo97616);
smo88787.setStemDirection(dirsmo97616);
smo88788.setStemDirection(dirsmo97616);
const smo97616 = new VF.Beam([smo88785,smo88786,smo88787,smo88788]);
const dirsmo97619 = smo89566.getStemDirection();
smo89566.setStemDirection(dirsmo97619);
smo89568.setStemDirection(dirsmo97619);
const smo97619 = new VF.Beam([smo89566,smo89568]);
const dirsmo97620 = smo89571.getStemDirection();
smo89571.setStemDirection(dirsmo97620);
smo89573.setStemDirection(dirsmo97620);
const smo97620 = new VF.Beam([smo89571,smo89573]);
const dirsmo97623 = smo90462.getStemDirection();
smo90462.setStemDirection(dirsmo97623);
smo90463.setStemDirection(dirsmo97623);
smo90464.setStemDirection(dirsmo97623);
smo90465.setStemDirection(dirsmo97623);
const smo97623 = new VF.Beam([smo90462,smo90463,smo90464,smo90465]);
const dirsmo97624 = smo90466.getStemDirection();
smo90466.setStemDirection(dirsmo97624);
smo90467.setStemDirection(dirsmo97624);
smo90468.setStemDirection(dirsmo97624);
smo90469.setStemDirection(dirsmo97624);
const smo97624 = new VF.Beam([smo90466,smo90467,smo90468,smo90469]);
 
// formatting measures in staff group smo91149
fmtsmo871745.format([smo87174v0,smo87993v0,smo88804v0,smo89590v0,smo90485v0], 364);
const stavesmo87174 = new VF.Stave(476, 839, 378);
stavesmo87174.setAttribute('id', 'stavesmo87174');
stavesmo87174.setBegBarType(VF.Barline.type.NONE);
stavesmo87174.setContext(context);
stavesmo87174.draw();
smo87174v0.draw(context, stavesmo87174);
smo97607.setContext(context);
smo97607.draw();
smo97608.setContext(context);
smo97608.draw();
const stavesmo87993 = new VF.Stave(476, 933, 378);
stavesmo87993.setAttribute('id', 'stavesmo87993');
stavesmo87993.setBegBarType(VF.Barline.type.NONE);
stavesmo87993.setContext(context);
stavesmo87993.draw();
smo87993v0.draw(context, stavesmo87993);
smo97611.setContext(context);
smo97611.draw();
smo97612.setContext(context);
smo97612.draw();
const stavesmo88804 = new VF.Stave(476, 1011, 378);
stavesmo88804.setAttribute('id', 'stavesmo88804');
stavesmo88804.setBegBarType(VF.Barline.type.NONE);
stavesmo88804.setContext(context);
stavesmo88804.draw();
smo88804v0.draw(context, stavesmo88804);
smo97615.setContext(context);
smo97615.draw();
smo97616.setContext(context);
smo97616.draw();
const stavesmo89590 = new VF.Stave(476, 1109, 378);
stavesmo89590.setAttribute('id', 'stavesmo89590');
stavesmo89590.setBegBarType(VF.Barline.type.NONE);
stavesmo89590.setContext(context);
stavesmo89590.draw();
smo89590v0.draw(context, stavesmo89590);
smo97619.setContext(context);
smo97619.draw();
smo97620.setContext(context);
smo97620.draw();
const stavesmo90485 = new VF.Stave(476, 1231, 378);
stavesmo90485.setAttribute('id', 'stavesmo90485');
stavesmo90485.setBegBarType(VF.Barline.type.NONE);
stavesmo90485.setContext(context);
stavesmo90485.draw();
smo90485v0.draw(context, stavesmo90485);
smo97623.setContext(context);
smo97623.draw();
smo97624.setContext(context);
smo97624.draw();
const fmtsmo871966 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo87196v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo87196v0ar = [];
const smo87175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo87175.setAttribute('id', 'smo87175');
smo87175.addModifier(new VF.Dot(), 0);
smo87196v0ar.push(smo87175);
const smo87176 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo87176.setAttribute('id', 'smo87176');
smo87196v0ar.push(smo87176);
const smo87177 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo87177.setAttribute('id', 'smo87177');
smo87196v0ar.push(smo87177);
const smo87178 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["g#/5/n"]}'))
smo87178.setAttribute('id', 'smo87178');
smo87178.addModifier(new VF.Dot(), 0);
smo87196v0ar.push(smo87178);
const smo87179 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo87179.setAttribute('id', 'smo87179');
smo87196v0ar.push(smo87179);
const smo87180 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo87180.setAttribute('id', 'smo87180');
smo87196v0ar.push(smo87180);
smo87196v0.addTickables(smo87196v0ar)
fmtsmo871966.joinVoices([smo87196v0]);
const fmtsmo880156 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo88015v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo88015v0ar = [];
const smo87994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo87994.setAttribute('id', 'smo87994');
smo87994.addModifier(new VF.Dot(), 0);
smo88015v0ar.push(smo87994);
const smo87995 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo87995.setAttribute('id', 'smo87995');
smo88015v0ar.push(smo87995);
const smo87996 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo87996.setAttribute('id', 'smo87996');
smo88015v0ar.push(smo87996);
const smo87997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo87997.setAttribute('id', 'smo87997');
smo87997.addModifier(new VF.Dot(), 0);
smo88015v0ar.push(smo87997);
const smo87998 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo87998.setAttribute('id', 'smo87998');
smo88015v0ar.push(smo87998);
const smo87999 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo87999.setAttribute('id', 'smo87999');
smo88015v0ar.push(smo87999);
smo88015v0.addTickables(smo88015v0ar)
fmtsmo880156.joinVoices([smo88015v0]);
const fmtsmo888266 = new VF.Formatter();
//
// voices and notes for stave 2 6
const smo88826v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo88826v0ar = [];
const smo88805 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo88805.setAttribute('id', 'smo88805');
smo88805.addModifier(new VF.Dot(), 0);
smo88826v0ar.push(smo88805);
const smo88806 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88806.setAttribute('id', 'smo88806');
smo88826v0ar.push(smo88806);
const smo88807 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo88807.setAttribute('id', 'smo88807');
smo88826v0ar.push(smo88807);
const smo88808 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo88808.setAttribute('id', 'smo88808');
smo88808.addModifier(new VF.Dot(), 0);
smo88826v0ar.push(smo88808);
const smo88809 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo88809.setAttribute('id', 'smo88809');
smo88826v0ar.push(smo88809);
const smo88810 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo88810.setAttribute('id', 'smo88810');
smo88826v0ar.push(smo88810);
smo88826v0.addTickables(smo88826v0ar)
fmtsmo888266.joinVoices([smo88826v0]);
const fmtsmo896146 = new VF.Formatter();
//
// voices and notes for stave 3 6
const smo89614v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo89614v0ar = [];
const smo89591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo89591.setAttribute('id', 'smo89591');
const smo89592 = new VF.Annotation('peo');
smo89592.setAttribute('id', 'smo89592');
smo89592.setFont('Merriweather', 12, 'normal');
smo89592.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo89591.addModifier(smo89592);
smo89592.addClass('lyric lyric-0');
smo89614v0ar.push(smo89591);
const smo89593 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo89593.setAttribute('id', 'smo89593');
const smo89594 = new VF.Annotation('-');
smo89594.setAttribute('id', 'smo89594');
smo89594.setFont('Merriweather', 12, 'normal');
smo89594.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo89593.addModifier(smo89594);
smo89594.addClass('lyric lyric-0 lyric-hyphen');
smo89614v0ar.push(smo89593);
const smo89595 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo89595.setAttribute('id', 'smo89595');
smo89614v0ar.push(smo89595);
const smo89596 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo89596.setAttribute('id', 'smo89596');
const smo89597 = new VF.Annotation('ple');
smo89597.setAttribute('id', 'smo89597');
smo89597.setFont('Merriweather', 12, 'normal');
smo89597.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo89596.addModifier(smo89597);
smo89597.addClass('lyric lyric-0');
smo89614v0ar.push(smo89596);
const smo89598 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo89598.setAttribute('id', 'smo89598');
smo89614v0ar.push(smo89598);
smo89614v0.addTickables(smo89614v0ar)
fmtsmo896146.joinVoices([smo89614v0]);
const fmtsmo905056 = new VF.Formatter();
//
// voices and notes for stave 4 6
const smo90505v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo90505v0ar = [];
const smo90486 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo90486.setAttribute('id', 'smo90486');
smo90486.addModifier(new VF.Dot(), 0);
smo90505v0ar.push(smo90486);
const smo90487 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo90487.setAttribute('id', 'smo90487');
smo90505v0ar.push(smo90487);
const smo90488 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo90488.setAttribute('id', 'smo90488');
smo90505v0ar.push(smo90488);
const smo90489 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo90489.setAttribute('id', 'smo90489');
smo90505v0ar.push(smo90489);
smo90505v0.addTickables(smo90505v0ar)
fmtsmo905056.joinVoices([smo90505v0]);
// create beam groups and tuplets for format grp smo91149 before formatting
const dirsmo97627 = smo87175.getStemDirection();
smo87175.setStemDirection(dirsmo97627);
smo87176.setStemDirection(dirsmo97627);
const smo97627 = new VF.Beam([smo87175,smo87176]);
const dirsmo97628 = smo87178.getStemDirection();
smo87178.setStemDirection(dirsmo97628);
smo87179.setStemDirection(dirsmo97628);
const smo97628 = new VF.Beam([smo87178,smo87179]);
const dirsmo97631 = smo87994.getStemDirection();
smo87994.setStemDirection(dirsmo97631);
smo87995.setStemDirection(dirsmo97631);
const smo97631 = new VF.Beam([smo87994,smo87995]);
const dirsmo97632 = smo87997.getStemDirection();
smo87997.setStemDirection(dirsmo97632);
smo87998.setStemDirection(dirsmo97632);
const smo97632 = new VF.Beam([smo87997,smo87998]);
const dirsmo97635 = smo88805.getStemDirection();
smo88805.setStemDirection(dirsmo97635);
smo88806.setStemDirection(dirsmo97635);
const smo97635 = new VF.Beam([smo88805,smo88806]);
const dirsmo97636 = smo88808.getStemDirection();
smo88808.setStemDirection(dirsmo97636);
smo88809.setStemDirection(dirsmo97636);
const smo97636 = new VF.Beam([smo88808,smo88809]);
const dirsmo97639 = smo89591.getStemDirection();
smo89591.setStemDirection(dirsmo97639);
smo89593.setStemDirection(dirsmo97639);
smo89595.setStemDirection(dirsmo97639);
const smo97639 = new VF.Beam([smo89591,smo89593,smo89595]);
const dirsmo97642 = smo90486.getStemDirection();
smo90486.setStemDirection(dirsmo97642);
smo90487.setStemDirection(dirsmo97642);
const smo97642 = new VF.Beam([smo90486,smo90487]);
 
// formatting measures in staff group smo91149
fmtsmo871966.format([smo87196v0,smo88015v0,smo88826v0,smo89614v0,smo90505v0], 275);
const stavesmo87196 = new VF.Stave(854, 839, 289);
stavesmo87196.setAttribute('id', 'stavesmo87196');
stavesmo87196.setBegBarType(VF.Barline.type.NONE);
stavesmo87196.setContext(context);
stavesmo87196.draw();
smo87196v0.draw(context, stavesmo87196);
smo97627.setContext(context);
smo97627.draw();
smo97628.setContext(context);
smo97628.draw();
const stavesmo88015 = new VF.Stave(854, 933, 289);
stavesmo88015.setAttribute('id', 'stavesmo88015');
stavesmo88015.setBegBarType(VF.Barline.type.NONE);
stavesmo88015.setContext(context);
stavesmo88015.draw();
smo88015v0.draw(context, stavesmo88015);
smo97631.setContext(context);
smo97631.draw();
smo97632.setContext(context);
smo97632.draw();
const stavesmo88826 = new VF.Stave(854, 1011, 289);
stavesmo88826.setAttribute('id', 'stavesmo88826');
stavesmo88826.setBegBarType(VF.Barline.type.NONE);
stavesmo88826.setContext(context);
stavesmo88826.draw();
smo88826v0.draw(context, stavesmo88826);
smo97635.setContext(context);
smo97635.draw();
smo97636.setContext(context);
smo97636.draw();
const stavesmo89614 = new VF.Stave(854, 1109, 289);
stavesmo89614.setAttribute('id', 'stavesmo89614');
stavesmo89614.setBegBarType(VF.Barline.type.NONE);
stavesmo89614.setContext(context);
stavesmo89614.draw();
smo89614v0.draw(context, stavesmo89614);
smo97639.setContext(context);
smo97639.draw();
const stavesmo90505 = new VF.Stave(854, 1231, 289);
stavesmo90505.setAttribute('id', 'stavesmo90505');
stavesmo90505.setBegBarType(VF.Barline.type.NONE);
stavesmo90505.setContext(context);
stavesmo90505.draw();
smo90505v0.draw(context, stavesmo90505);
smo97642.setContext(context);
smo97642.draw();
const fmtsmo872137 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo87213v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo87213v0ar = [];
const smo87197 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo87197.setAttribute('id', 'smo87197');
smo87213v0ar.push(smo87197);
smo87213v0.addTickables(smo87213v0ar)
fmtsmo872137.joinVoices([smo87213v0]);
const fmtsmo880327 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo88032v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo88032v0ar = [];
const smo88016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo88016.setAttribute('id', 'smo88016');
smo88032v0ar.push(smo88016);
smo88032v0.addTickables(smo88032v0ar)
fmtsmo880327.joinVoices([smo88032v0]);
const fmtsmo888437 = new VF.Formatter();
//
// voices and notes for stave 2 7
const smo88843v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo88843v0ar = [];
const smo88827 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["cn/4/r"]}'))
smo88827.setAttribute('id', 'smo88827');
smo88843v0ar.push(smo88827);
smo88843v0.addTickables(smo88843v0ar)
fmtsmo888437.joinVoices([smo88843v0]);
const fmtsmo896387 = new VF.Formatter();
//
// voices and notes for stave 3 7
const smo89638v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo89638v0ar = [];
const smo89615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo89615.setAttribute('id', 'smo89615');
const smo89616 = new VF.Annotation('Com');
smo89616.setAttribute('id', 'smo89616');
smo89616.setFont('Merriweather', 12, 'normal');
smo89616.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo89615.addModifier(smo89616);
smo89616.addClass('lyric lyric-0');
smo89638v0ar.push(smo89615);
const smo89617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo89617.setAttribute('id', 'smo89617');
smo89617.addModifier(new VF.Dot(), 0);
const smo89618 = new VF.Annotation('-');
smo89618.setAttribute('id', 'smo89618');
smo89618.setFont('Merriweather', 12, 'normal');
smo89618.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo89617.addModifier(smo89618);
smo89618.addClass('lyric lyric-0 lyric-hyphen');
smo89638v0ar.push(smo89617);
const smo89619 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo89619.setAttribute('id', 'smo89619');
const smo89620 = new VF.Annotation('fort');
smo89620.setAttribute('id', 'smo89620');
smo89620.setFont('Merriweather', 12, 'normal');
smo89620.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo89619.addModifier(smo89620);
smo89620.addClass('lyric lyric-0');
smo89638v0ar.push(smo89619);
const smo89621 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo89621.setAttribute('id', 'smo89621');
const smo89622 = new VF.Annotation('ye,');
smo89622.setAttribute('id', 'smo89622');
smo89622.setFont('Merriweather', 12, 'normal');
smo89622.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo89621.addModifier(smo89622);
smo89622.addClass('lyric lyric-0');
smo89638v0ar.push(smo89621);
smo89638v0.addTickables(smo89638v0ar)
fmtsmo896387.joinVoices([smo89638v0]);
const fmtsmo905227 = new VF.Formatter();
//
// voices and notes for stave 4 7
const smo90522v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo90522v0ar = [];
const smo90506 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo90506.setAttribute('id', 'smo90506');
smo90522v0ar.push(smo90506);
smo90522v0.addTickables(smo90522v0ar)
fmtsmo905227.joinVoices([smo90522v0]);
// create beam groups and tuplets for format grp smo91149 before formatting
const dirsmo97651 = smo89617.getStemDirection();
smo89617.setStemDirection(dirsmo97651);
smo89619.setStemDirection(dirsmo97651);
const smo97651 = new VF.Beam([smo89617,smo89619]);
 
// formatting measures in staff group smo91149
fmtsmo872137.format([smo87213v0,smo88032v0,smo88843v0,smo89638v0,smo90522v0], 218);
const stavesmo87213 = new VF.Stave(1143, 839, 232);
stavesmo87213.setAttribute('id', 'stavesmo87213');
stavesmo87213.setBegBarType(VF.Barline.type.NONE);
stavesmo87213.setContext(context);
stavesmo87213.draw();
smo87213v0.draw(context, stavesmo87213);
const stavesmo88032 = new VF.Stave(1143, 933, 232);
stavesmo88032.setAttribute('id', 'stavesmo88032');
stavesmo88032.setBegBarType(VF.Barline.type.NONE);
stavesmo88032.setContext(context);
stavesmo88032.draw();
smo88032v0.draw(context, stavesmo88032);
const stavesmo88843 = new VF.Stave(1143, 1011, 232);
stavesmo88843.setAttribute('id', 'stavesmo88843');
stavesmo88843.setBegBarType(VF.Barline.type.NONE);
stavesmo88843.setContext(context);
stavesmo88843.draw();
smo88843v0.draw(context, stavesmo88843);
const stavesmo89638 = new VF.Stave(1143, 1109, 232);
stavesmo89638.setAttribute('id', 'stavesmo89638');
stavesmo89638.setBegBarType(VF.Barline.type.NONE);
stavesmo89638.setContext(context);
stavesmo89638.draw();
smo89638v0.draw(context, stavesmo89638);
smo97651.setContext(context);
smo97651.draw();
const stavesmo90522 = new VF.Stave(1143, 1231, 232);
stavesmo90522.setAttribute('id', 'stavesmo90522');
stavesmo90522.setBegBarType(VF.Barline.type.NONE);
stavesmo90522.setContext(context);
stavesmo90522.draw();
smo90522v0.draw(context, stavesmo90522);
const rightsmo91149stavesmo872134 = new VF.StaveConnector(stavesmo87213, stavesmo90522).setType(0);
rightsmo91149stavesmo872134.setContext(context).draw();
// modifier from 0-0-0-0 to 0-0-0-3
const smo98707 = new VF.Curve(smo87029, smo87036, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":25,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo98707.setContext(context).draw();
// modifier from 0-4-0-4 to 0-4-0-5
const smo98708 = new VF.Curve(smo87131, smo87132, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo98708.setContext(context).draw();
// modifier from 0-0-0-4 to 0-0-0-5
const smo98709 = new VF.Curve(smo87038, smo87039, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":5,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo98709.setContext(context).draw();
// modifier from 0-1-0-4 to 0-1-0-5
const smo98710 = new VF.Curve(smo87062, smo87063, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo98710.setContext(context).draw();
// modifier from 1-0-0-0 to 1-0-0-3
const smo98711 = new VF.Curve(smo87849, smo87855, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":20,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo98711.setContext(context).draw();
// modifier from 2-0-0-0 to 2-0-0-3
const smo98712 = new VF.Curve(smo88660, smo88666, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":20,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo98712.setContext(context).draw();
// modifier from 3-7-0-0 to 3-7-0-1
const smo98713 = new VF.Curve(smo89615, smo89617, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo98713.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo89523').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo89527').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo89547').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo89565').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo89567').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo89572').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo89574').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo89592').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo89594').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo89597').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo89616').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo89618').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo89620').setAttributeNS('', 'transform', 'translate(0 2)');
}
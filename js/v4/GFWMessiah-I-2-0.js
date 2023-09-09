// @@ Comfort Ye, My People p 1/4 (Comfort Ye, my people (tenor)) by Handel
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
const fmtsmo752120 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo75212v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75212v0ar = [];
const smo75184 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo75184.setAttribute('id', 'smo75184');
const  smo86770 = new VF.Articulation('a.').setPosition(4);
smo75184.addModifier(smo86770, 0);
smo75212v0ar.push(smo75184);
const smo75187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo75187.setAttribute('id', 'smo75187');
const  smo86771 = new VF.Articulation('a.').setPosition(4);
smo75187.addModifier(smo86771, 0);
smo75212v0ar.push(smo75187);
const smo75189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo75189.setAttribute('id', 'smo75189');
const  smo86772 = new VF.Articulation('a.').setPosition(4);
smo75189.addModifier(smo86772, 0);
smo75212v0ar.push(smo75189);
const smo75191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo75191.setAttribute('id', 'smo75191');
const  smo86773 = new VF.Articulation('a.').setPosition(4);
smo75191.addModifier(smo86773, 0);
smo75212v0ar.push(smo75191);
const smo75193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo75193.setAttribute('id', 'smo75193');
smo75212v0ar.push(smo75193);
const smo75194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo75194.setAttribute('id', 'smo75194');
smo75194.addModifier(new VF.Dot(), 0);
smo75212v0ar.push(smo75194);
const smo75195 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo75195.setAttribute('id', 'smo75195');
smo75212v0ar.push(smo75195);
const smo75196 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo75196.setAttribute('id', 'smo75196');
smo75212v0ar.push(smo75196);
smo75212v0.addTickables(smo75212v0ar)
fmtsmo752120.joinVoices([smo75212v0]);
const fmtsmo760310 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo76031v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76031v0ar = [];
const smo76004 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76004.setAttribute('id', 'smo76004');
const  smo86774 = new VF.Articulation('a.').setPosition(4);
smo76004.addModifier(smo86774, 0);
smo76031v0ar.push(smo76004);
const smo76006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76006.setAttribute('id', 'smo76006');
const  smo86775 = new VF.Articulation('a.').setPosition(4);
smo76006.addModifier(smo86775, 0);
smo76031v0ar.push(smo76006);
const smo76008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76008.setAttribute('id', 'smo76008');
const  smo86776 = new VF.Articulation('a.').setPosition(4);
smo76008.addModifier(smo86776, 0);
smo76031v0ar.push(smo76008);
const smo76010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76010.setAttribute('id', 'smo76010');
const  smo86777 = new VF.Articulation('a.').setPosition(4);
smo76010.addModifier(smo86777, 0);
smo76031v0ar.push(smo76010);
const smo76012 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76012.setAttribute('id', 'smo76012');
smo76031v0ar.push(smo76012);
const smo76013 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76013.setAttribute('id', 'smo76013');
smo76031v0ar.push(smo76013);
const smo76014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76014.setAttribute('id', 'smo76014');
smo76031v0ar.push(smo76014);
const smo76015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76015.setAttribute('id', 'smo76015');
smo76031v0ar.push(smo76015);
smo76031v0.addTickables(smo76031v0ar)
fmtsmo760310.joinVoices([smo76031v0]);
const fmtsmo768420 = new VF.Formatter();
//
// voices and notes for stave 2 0
const smo76842v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76842v0ar = [];
const smo76815 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76815.setAttribute('id', 'smo76815');
const  smo86778 = new VF.Articulation('a.').setPosition(4);
smo76815.addModifier(smo86778, 0);
smo76842v0ar.push(smo76815);
const smo76817 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76817.setAttribute('id', 'smo76817');
const  smo86779 = new VF.Articulation('a.').setPosition(4);
smo76817.addModifier(smo86779, 0);
smo76842v0ar.push(smo76817);
const smo76819 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76819.setAttribute('id', 'smo76819');
const  smo86780 = new VF.Articulation('a.').setPosition(4);
smo76819.addModifier(smo86780, 0);
smo76842v0ar.push(smo76819);
const smo76821 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76821.setAttribute('id', 'smo76821');
const  smo86781 = new VF.Articulation('a.').setPosition(4);
smo76821.addModifier(smo86781, 0);
smo76842v0ar.push(smo76821);
const smo76823 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76823.setAttribute('id', 'smo76823');
smo76842v0ar.push(smo76823);
const smo76824 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76824.setAttribute('id', 'smo76824');
smo76842v0ar.push(smo76824);
const smo76825 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76825.setAttribute('id', 'smo76825');
smo76842v0ar.push(smo76825);
const smo76826 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76826.setAttribute('id', 'smo76826');
smo76842v0ar.push(smo76826);
smo76842v0.addTickables(smo76842v0ar)
fmtsmo768420.joinVoices([smo76842v0]);
const fmtsmo776420 = new VF.Formatter();
//
// voices and notes for stave 3 0
const smo77642v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo77642v0ar = [];
const smo77626 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo77626.setAttribute('id', 'smo77626');
smo77642v0ar.push(smo77626);
smo77642v0.addTickables(smo77642v0ar)
fmtsmo776420.joinVoices([smo77642v0]);
const fmtsmo785270 = new VF.Formatter();
//
// voices and notes for stave 4 0
const smo78527v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78527v0ar = [];
const smo78507 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo78507.setAttribute('id', 'smo78507');
smo78527v0ar.push(smo78507);
const smo78508 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/2/n"]}'))
smo78508.setAttribute('id', 'smo78508');
smo78527v0ar.push(smo78508);
const smo78509 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/2/n"]}'))
smo78509.setAttribute('id', 'smo78509');
smo78527v0ar.push(smo78509);
const smo78510 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/2/n"]}'))
smo78510.setAttribute('id', 'smo78510');
smo78527v0ar.push(smo78510);
const smo78511 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/2/n"]}'))
smo78511.setAttribute('id', 'smo78511');
smo78527v0ar.push(smo78511);
smo78527v0.addTickables(smo78527v0ar)
fmtsmo785270.joinVoices([smo78527v0]);
// create beam groups and tuplets for format grp smo79304 before formatting
const dirsmo85655 = smo75184.getStemDirection();
smo75184.setStemDirection(dirsmo85655);
smo75187.setStemDirection(dirsmo85655);
const smo85655 = new VF.Beam([smo75184,smo75187]);
const dirsmo85656 = smo75189.getStemDirection();
smo75189.setStemDirection(dirsmo85656);
smo75191.setStemDirection(dirsmo85656);
const smo85656 = new VF.Beam([smo75189,smo75191]);
const dirsmo85657 = smo75194.getStemDirection();
smo75194.setStemDirection(dirsmo85657);
smo75195.setStemDirection(dirsmo85657);
smo75196.setStemDirection(dirsmo85657);
const smo85657 = new VF.Beam([smo75194,smo75195,smo75196]);
const dirsmo85660 = smo76004.getStemDirection();
smo76004.setStemDirection(dirsmo85660);
smo76006.setStemDirection(dirsmo85660);
smo76008.setStemDirection(dirsmo85660);
smo76010.setStemDirection(dirsmo85660);
const smo85660 = new VF.Beam([smo76004,smo76006,smo76008,smo76010]);
const dirsmo85661 = smo76012.getStemDirection();
smo76012.setStemDirection(dirsmo85661);
smo76013.setStemDirection(dirsmo85661);
smo76014.setStemDirection(dirsmo85661);
smo76015.setStemDirection(dirsmo85661);
const smo85661 = new VF.Beam([smo76012,smo76013,smo76014,smo76015]);
const dirsmo85664 = smo76815.getStemDirection();
smo76815.setStemDirection(dirsmo85664);
smo76817.setStemDirection(dirsmo85664);
smo76819.setStemDirection(dirsmo85664);
smo76821.setStemDirection(dirsmo85664);
const smo85664 = new VF.Beam([smo76815,smo76817,smo76819,smo76821]);
const dirsmo85665 = smo76823.getStemDirection();
smo76823.setStemDirection(dirsmo85665);
smo76824.setStemDirection(dirsmo85665);
smo76825.setStemDirection(dirsmo85665);
smo76826.setStemDirection(dirsmo85665);
const smo85665 = new VF.Beam([smo76823,smo76824,smo76825,smo76826]);
const dirsmo85670 = smo78508.getStemDirection();
smo78508.setStemDirection(dirsmo85670);
smo78509.setStemDirection(dirsmo85670);
smo78510.setStemDirection(dirsmo85670);
smo78511.setStemDirection(dirsmo85670);
const smo85670 = new VF.Beam([smo78508,smo78509,smo78510,smo78511]);
 
// formatting measures in staff group smo79304
fmtsmo752120.format([smo75212v0,smo76031v0,smo76842v0,smo77642v0,smo78527v0], 290);
const stavesmo75212 = new VF.Stave(55, 255, 419);
stavesmo75212.setAttribute('id', 'stavesmo75212');
stavesmo75212.setBegBarType(1);
stavesmo75212.setTempo(JSON.parse('{"name":"Larghetto"}'), -1 * 0);
stavesmo75212.addClef('treble');
stavesmo75212.addTimeSignature('4/4');
const keysmo75212 = new VF.KeySignature('E');
keysmo75212.addToStave(stavesmo75212);
stavesmo75212.setContext(context);
stavesmo75212.draw();
smo75212v0.draw(context, stavesmo75212);
smo85655.setContext(context);
smo85655.draw();
smo85656.setContext(context);
smo85656.draw();
smo85657.setContext(context);
smo85657.draw();
const stavesmo76031 = new VF.Stave(55, 387, 419);
stavesmo76031.setAttribute('id', 'stavesmo76031');
stavesmo76031.setBegBarType(1);
stavesmo76031.addClef('treble');
stavesmo76031.addTimeSignature('4/4');
const keysmo76031 = new VF.KeySignature('E');
keysmo76031.addToStave(stavesmo76031);
stavesmo76031.setContext(context);
stavesmo76031.draw();
smo76031v0.draw(context, stavesmo76031);
smo85660.setContext(context);
smo85660.draw();
smo85661.setContext(context);
smo85661.draw();
const stavesmo76842 = new VF.Stave(55, 507, 419);
stavesmo76842.setAttribute('id', 'stavesmo76842');
stavesmo76842.setBegBarType(1);
stavesmo76842.addClef('alto');
stavesmo76842.addTimeSignature('4/4');
const keysmo76842 = new VF.KeySignature('E');
keysmo76842.addToStave(stavesmo76842);
stavesmo76842.setContext(context);
stavesmo76842.draw();
smo76842v0.draw(context, stavesmo76842);
smo85664.setContext(context);
smo85664.draw();
smo85665.setContext(context);
smo85665.draw();
const stavesmo77642 = new VF.Stave(55, 624, 419);
stavesmo77642.setAttribute('id', 'stavesmo77642');
stavesmo77642.setBegBarType(1);
stavesmo77642.addClef('treble');
stavesmo77642.addTimeSignature('4/4');
const keysmo77642 = new VF.KeySignature('E');
keysmo77642.addToStave(stavesmo77642);
stavesmo77642.setContext(context);
stavesmo77642.draw();
smo77642v0.draw(context, stavesmo77642);
const stavesmo78527 = new VF.Stave(55, 705, 419);
stavesmo78527.setAttribute('id', 'stavesmo78527');
stavesmo78527.setBegBarType(1);
stavesmo78527.addClef('bass');
stavesmo78527.addTimeSignature('4/4');
const keysmo78527 = new VF.KeySignature('E');
keysmo78527.addToStave(stavesmo78527);
stavesmo78527.setContext(context);
stavesmo78527.draw();
smo78527v0.draw(context, stavesmo78527);
smo85670.setContext(context);
smo85670.draw();
const leftsmo79304stavesmo752124 = new VF.StaveConnector(stavesmo75212, stavesmo78527).setType(4);
leftsmo79304stavesmo752124.setContext(context).draw();
const fmtsmo752361 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo75236v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75236v0ar = [];
const smo75213 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo75213.setAttribute('id', 'smo75213');
smo75236v0ar.push(smo75213);
const smo75214 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo75214.setAttribute('id', 'smo75214');
smo75236v0ar.push(smo75214);
const smo75215 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo75215.setAttribute('id', 'smo75215');
smo75236v0ar.push(smo75215);
const smo75216 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo75216.setAttribute('id', 'smo75216');
smo75236v0ar.push(smo75216);
const smo75217 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo75217.setAttribute('id', 'smo75217');
smo75236v0ar.push(smo75217);
const smo75218 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo75218.setAttribute('id', 'smo75218');
smo75218.addModifier(new VF.Dot(), 0);
smo75236v0ar.push(smo75218);
const smo75219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo75219.setAttribute('id', 'smo75219');
smo75236v0ar.push(smo75219);
const smo75220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo75220.setAttribute('id', 'smo75220');
smo75236v0ar.push(smo75220);
smo75236v0.addTickables(smo75236v0ar)
fmtsmo752361.joinVoices([smo75236v0]);
const fmtsmo760551 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo76055v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76055v0ar = [];
const smo76032 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76032.setAttribute('id', 'smo76032');
smo76055v0ar.push(smo76032);
const smo76033 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76033.setAttribute('id', 'smo76033');
smo76055v0ar.push(smo76033);
const smo76034 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo76034.setAttribute('id', 'smo76034');
smo76055v0ar.push(smo76034);
const smo76035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo76035.setAttribute('id', 'smo76035');
smo76055v0ar.push(smo76035);
const smo76036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo76036.setAttribute('id', 'smo76036');
smo76055v0ar.push(smo76036);
const smo76037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo76037.setAttribute('id', 'smo76037');
smo76055v0ar.push(smo76037);
const smo76038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo76038.setAttribute('id', 'smo76038');
smo76055v0ar.push(smo76038);
const smo76039 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo76039.setAttribute('id', 'smo76039');
smo76055v0ar.push(smo76039);
smo76055v0.addTickables(smo76055v0ar)
fmtsmo760551.joinVoices([smo76055v0]);
const fmtsmo768661 = new VF.Formatter();
//
// voices and notes for stave 2 1
const smo76866v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76866v0ar = [];
const smo76843 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76843.setAttribute('id', 'smo76843');
smo76866v0ar.push(smo76843);
const smo76844 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76844.setAttribute('id', 'smo76844');
smo76866v0ar.push(smo76844);
const smo76845 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76845.setAttribute('id', 'smo76845');
smo76866v0ar.push(smo76845);
const smo76846 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76846.setAttribute('id', 'smo76846');
smo76866v0ar.push(smo76846);
const smo76847 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo76847.setAttribute('id', 'smo76847');
smo76866v0ar.push(smo76847);
const smo76848 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo76848.setAttribute('id', 'smo76848');
smo76866v0ar.push(smo76848);
const smo76849 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo76849.setAttribute('id', 'smo76849');
smo76866v0ar.push(smo76849);
const smo76850 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo76850.setAttribute('id', 'smo76850');
smo76866v0ar.push(smo76850);
smo76866v0.addTickables(smo76866v0ar)
fmtsmo768661.joinVoices([smo76866v0]);
const fmtsmo776591 = new VF.Formatter();
//
// voices and notes for stave 3 1
const smo77659v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo77659v0ar = [];
const smo77643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo77643.setAttribute('id', 'smo77643');
smo77659v0ar.push(smo77643);
smo77659v0.addTickables(smo77659v0ar)
fmtsmo776591.joinVoices([smo77659v0]);
const fmtsmo785491 = new VF.Formatter();
//
// voices and notes for stave 4 1
const smo78549v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78549v0ar = [];
const smo78528 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo78528.setAttribute('id', 'smo78528');
smo78549v0ar.push(smo78528);
const smo78529 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78529.setAttribute('id', 'smo78529');
smo78549v0ar.push(smo78529);
const smo78530 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/2/n"]}'))
smo78530.setAttribute('id', 'smo78530');
smo78549v0ar.push(smo78530);
const smo78531 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/2/n"]}'))
smo78531.setAttribute('id', 'smo78531');
smo78549v0ar.push(smo78531);
const smo78532 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/2/n"]}'))
smo78532.setAttribute('id', 'smo78532');
smo78549v0ar.push(smo78532);
const smo78533 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/2/n"]}'))
smo78533.setAttribute('id', 'smo78533');
smo78549v0ar.push(smo78533);
smo78549v0.addTickables(smo78549v0ar)
fmtsmo785491.joinVoices([smo78549v0]);
// create beam groups and tuplets for format grp smo79304 before formatting
const dirsmo85673 = smo75213.getStemDirection();
smo75213.setStemDirection(dirsmo85673);
smo75214.setStemDirection(dirsmo85673);
const smo85673 = new VF.Beam([smo75213,smo75214]);
const dirsmo85674 = smo75215.getStemDirection();
smo75215.setStemDirection(dirsmo85674);
smo75216.setStemDirection(dirsmo85674);
const smo85674 = new VF.Beam([smo75215,smo75216]);
const dirsmo85675 = smo75218.getStemDirection();
smo75218.setStemDirection(dirsmo85675);
smo75219.setStemDirection(dirsmo85675);
smo75220.setStemDirection(dirsmo85675);
const smo85675 = new VF.Beam([smo75218,smo75219,smo75220]);
const dirsmo85678 = smo76032.getStemDirection();
smo76032.setStemDirection(dirsmo85678);
smo76033.setStemDirection(dirsmo85678);
smo76034.setStemDirection(dirsmo85678);
smo76035.setStemDirection(dirsmo85678);
const smo85678 = new VF.Beam([smo76032,smo76033,smo76034,smo76035]);
const dirsmo85679 = smo76036.getStemDirection();
smo76036.setStemDirection(dirsmo85679);
smo76037.setStemDirection(dirsmo85679);
smo76038.setStemDirection(dirsmo85679);
smo76039.setStemDirection(dirsmo85679);
const smo85679 = new VF.Beam([smo76036,smo76037,smo76038,smo76039]);
const dirsmo85682 = smo76843.getStemDirection();
smo76843.setStemDirection(dirsmo85682);
smo76844.setStemDirection(dirsmo85682);
smo76845.setStemDirection(dirsmo85682);
smo76846.setStemDirection(dirsmo85682);
const smo85682 = new VF.Beam([smo76843,smo76844,smo76845,smo76846]);
const dirsmo85683 = smo76847.getStemDirection();
smo76847.setStemDirection(dirsmo85683);
smo76848.setStemDirection(dirsmo85683);
smo76849.setStemDirection(dirsmo85683);
smo76850.setStemDirection(dirsmo85683);
const smo85683 = new VF.Beam([smo76847,smo76848,smo76849,smo76850]);
const dirsmo85688 = smo78530.getStemDirection();
smo78530.setStemDirection(dirsmo85688);
smo78531.setStemDirection(dirsmo85688);
smo78532.setStemDirection(dirsmo85688);
smo78533.setStemDirection(dirsmo85688);
const smo85688 = new VF.Beam([smo78530,smo78531,smo78532,smo78533]);
 
// formatting measures in staff group smo79304
fmtsmo752361.format([smo75236v0,smo76055v0,smo76866v0,smo77659v0,smo78549v0], 295);
const stavesmo75236 = new VF.Stave(474, 255, 309);
stavesmo75236.setAttribute('id', 'stavesmo75236');
stavesmo75236.setBegBarType(VF.Barline.type.NONE);
stavesmo75236.setContext(context);
stavesmo75236.draw();
smo75236v0.draw(context, stavesmo75236);
smo85673.setContext(context);
smo85673.draw();
smo85674.setContext(context);
smo85674.draw();
smo85675.setContext(context);
smo85675.draw();
const stavesmo76055 = new VF.Stave(474, 387, 309);
stavesmo76055.setAttribute('id', 'stavesmo76055');
stavesmo76055.setBegBarType(VF.Barline.type.NONE);
stavesmo76055.setContext(context);
stavesmo76055.draw();
smo76055v0.draw(context, stavesmo76055);
smo85678.setContext(context);
smo85678.draw();
smo85679.setContext(context);
smo85679.draw();
const stavesmo76866 = new VF.Stave(474, 507, 309);
stavesmo76866.setAttribute('id', 'stavesmo76866');
stavesmo76866.setBegBarType(VF.Barline.type.NONE);
stavesmo76866.setContext(context);
stavesmo76866.draw();
smo76866v0.draw(context, stavesmo76866);
smo85682.setContext(context);
smo85682.draw();
smo85683.setContext(context);
smo85683.draw();
const stavesmo77659 = new VF.Stave(474, 624, 309);
stavesmo77659.setAttribute('id', 'stavesmo77659');
stavesmo77659.setBegBarType(VF.Barline.type.NONE);
stavesmo77659.setContext(context);
stavesmo77659.draw();
smo77659v0.draw(context, stavesmo77659);
const stavesmo78549 = new VF.Stave(474, 705, 309);
stavesmo78549.setAttribute('id', 'stavesmo78549');
stavesmo78549.setBegBarType(VF.Barline.type.NONE);
stavesmo78549.setContext(context);
stavesmo78549.draw();
smo78549v0.draw(context, stavesmo78549);
smo85688.setContext(context);
smo85688.draw();
const fmtsmo752602 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo75260v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75260v0ar = [];
const smo75237 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo75237.setAttribute('id', 'smo75237');
smo75260v0ar.push(smo75237);
const smo75238 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16d","dots":1,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo75238.setAttribute('id', 'smo75238');
smo75238.addModifier(new VF.Dot(), 0);
smo75260v0ar.push(smo75238);
const smo75239 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo75239.setAttribute('id', 'smo75239');
smo75260v0ar.push(smo75239);
const smo75240 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo75240.setAttribute('id', 'smo75240');
smo75260v0ar.push(smo75240);
const smo75241 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo75241.setAttribute('id', 'smo75241');
smo75260v0ar.push(smo75241);
const smo75242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo75242.setAttribute('id', 'smo75242');
smo75260v0ar.push(smo75242);
const smo75243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo75243.setAttribute('id', 'smo75243');
smo75243.addModifier(new VF.Dot(), 0);
smo75260v0ar.push(smo75243);
const smo75244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo75244.setAttribute('id', 'smo75244');
smo75260v0ar.push(smo75244);
smo75260v0.addTickables(smo75260v0ar)
fmtsmo752602.joinVoices([smo75260v0]);
const fmtsmo760792 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo76079v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76079v0ar = [];
const smo76056 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76056.setAttribute('id', 'smo76056');
smo76079v0ar.push(smo76056);
const smo76057 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76057.setAttribute('id', 'smo76057');
smo76079v0ar.push(smo76057);
const smo76058 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76058.setAttribute('id', 'smo76058');
smo76079v0ar.push(smo76058);
const smo76059 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76059.setAttribute('id', 'smo76059');
smo76079v0ar.push(smo76059);
const smo76060 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76060.setAttribute('id', 'smo76060');
smo76079v0ar.push(smo76060);
const smo76061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76061.setAttribute('id', 'smo76061');
smo76079v0ar.push(smo76061);
const smo76062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo76062.setAttribute('id', 'smo76062');
smo76079v0ar.push(smo76062);
const smo76063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo76063.setAttribute('id', 'smo76063');
smo76079v0ar.push(smo76063);
smo76079v0.addTickables(smo76079v0ar)
fmtsmo760792.joinVoices([smo76079v0]);
const fmtsmo768902 = new VF.Formatter();
//
// voices and notes for stave 2 2
const smo76890v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76890v0ar = [];
const smo76867 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76867.setAttribute('id', 'smo76867');
smo76890v0ar.push(smo76867);
const smo76868 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76868.setAttribute('id', 'smo76868');
smo76890v0ar.push(smo76868);
const smo76869 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo76869.setAttribute('id', 'smo76869');
smo76890v0ar.push(smo76869);
const smo76870 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo76870.setAttribute('id', 'smo76870');
smo76890v0ar.push(smo76870);
const smo76871 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76871.setAttribute('id', 'smo76871');
smo76890v0ar.push(smo76871);
const smo76872 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76872.setAttribute('id', 'smo76872');
smo76890v0ar.push(smo76872);
const smo76873 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo76873.setAttribute('id', 'smo76873');
smo76890v0ar.push(smo76873);
const smo76874 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo76874.setAttribute('id', 'smo76874');
smo76890v0ar.push(smo76874);
smo76890v0.addTickables(smo76890v0ar)
fmtsmo768902.joinVoices([smo76890v0]);
const fmtsmo776762 = new VF.Formatter();
//
// voices and notes for stave 3 2
const smo77676v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo77676v0ar = [];
const smo77660 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo77660.setAttribute('id', 'smo77660');
smo77676v0ar.push(smo77660);
smo77676v0.addTickables(smo77676v0ar)
fmtsmo776762.joinVoices([smo77676v0]);
const fmtsmo785732 = new VF.Formatter();
//
// voices and notes for stave 4 2
const smo78573v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78573v0ar = [];
const smo78550 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/2/n"]}'))
smo78550.setAttribute('id', 'smo78550');
smo78573v0ar.push(smo78550);
const smo78551 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/2/n"]}'))
smo78551.setAttribute('id', 'smo78551');
smo78573v0ar.push(smo78551);
const smo78552 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["c#/3/n"]}'))
smo78552.setAttribute('id', 'smo78552');
smo78573v0ar.push(smo78552);
const smo78553 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["c#/3/n"]}'))
smo78553.setAttribute('id', 'smo78553');
smo78573v0ar.push(smo78553);
const smo78554 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo78554.setAttribute('id', 'smo78554');
smo78573v0ar.push(smo78554);
const smo78555 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo78555.setAttribute('id', 'smo78555');
smo78573v0ar.push(smo78555);
const smo78556 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo78556.setAttribute('id', 'smo78556');
smo78573v0ar.push(smo78556);
const smo78557 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo78557.setAttribute('id', 'smo78557');
smo78573v0ar.push(smo78557);
smo78573v0.addTickables(smo78573v0ar)
fmtsmo785732.joinVoices([smo78573v0]);
// create beam groups and tuplets for format grp smo79304 before formatting
const dirsmo85691 = smo75237.getStemDirection();
smo75237.setStemDirection(dirsmo85691);
smo75238.setStemDirection(dirsmo85691);
smo75239.setStemDirection(dirsmo85691);
const smo85691 = new VF.Beam([smo75237,smo75238,smo75239]);
const dirsmo85692 = smo75240.getStemDirection();
smo75240.setStemDirection(dirsmo85692);
smo75241.setStemDirection(dirsmo85692);
const smo85692 = new VF.Beam([smo75240,smo75241]);
const dirsmo85693 = smo75243.getStemDirection();
smo75243.setStemDirection(dirsmo85693);
smo75244.setStemDirection(dirsmo85693);
const smo85693 = new VF.Beam([smo75243,smo75244]);
const dirsmo85696 = smo76056.getStemDirection();
smo76056.setStemDirection(dirsmo85696);
smo76057.setStemDirection(dirsmo85696);
smo76058.setStemDirection(dirsmo85696);
smo76059.setStemDirection(dirsmo85696);
const smo85696 = new VF.Beam([smo76056,smo76057,smo76058,smo76059]);
const dirsmo85697 = smo76060.getStemDirection();
smo76060.setStemDirection(dirsmo85697);
smo76061.setStemDirection(dirsmo85697);
smo76062.setStemDirection(dirsmo85697);
smo76063.setStemDirection(dirsmo85697);
const smo85697 = new VF.Beam([smo76060,smo76061,smo76062,smo76063]);
const dirsmo85700 = smo76867.getStemDirection();
smo76867.setStemDirection(dirsmo85700);
smo76868.setStemDirection(dirsmo85700);
smo76869.setStemDirection(dirsmo85700);
smo76870.setStemDirection(dirsmo85700);
const smo85700 = new VF.Beam([smo76867,smo76868,smo76869,smo76870]);
const dirsmo85701 = smo76871.getStemDirection();
smo76871.setStemDirection(dirsmo85701);
smo76872.setStemDirection(dirsmo85701);
smo76873.setStemDirection(dirsmo85701);
smo76874.setStemDirection(dirsmo85701);
const smo85701 = new VF.Beam([smo76871,smo76872,smo76873,smo76874]);
const dirsmo85706 = smo78550.getStemDirection();
smo78550.setStemDirection(dirsmo85706);
smo78551.setStemDirection(dirsmo85706);
smo78552.setStemDirection(dirsmo85706);
smo78553.setStemDirection(dirsmo85706);
const smo85706 = new VF.Beam([smo78550,smo78551,smo78552,smo78553]);
const dirsmo85707 = smo78554.getStemDirection();
smo78554.setStemDirection(dirsmo85707);
smo78555.setStemDirection(dirsmo85707);
smo78556.setStemDirection(dirsmo85707);
smo78557.setStemDirection(dirsmo85707);
const smo85707 = new VF.Beam([smo78554,smo78555,smo78556,smo78557]);
 
// formatting measures in staff group smo79304
fmtsmo752602.format([smo75260v0,smo76079v0,smo76890v0,smo77676v0,smo78573v0], 303);
const stavesmo75260 = new VF.Stave(783, 255, 317);
stavesmo75260.setAttribute('id', 'stavesmo75260');
stavesmo75260.setBegBarType(VF.Barline.type.NONE);
stavesmo75260.setContext(context);
stavesmo75260.draw();
smo75260v0.draw(context, stavesmo75260);
smo85691.setContext(context);
smo85691.draw();
smo85692.setContext(context);
smo85692.draw();
smo85693.setContext(context);
smo85693.draw();
const stavesmo76079 = new VF.Stave(783, 387, 317);
stavesmo76079.setAttribute('id', 'stavesmo76079');
stavesmo76079.setBegBarType(VF.Barline.type.NONE);
stavesmo76079.setContext(context);
stavesmo76079.draw();
smo76079v0.draw(context, stavesmo76079);
smo85696.setContext(context);
smo85696.draw();
smo85697.setContext(context);
smo85697.draw();
const stavesmo76890 = new VF.Stave(783, 507, 317);
stavesmo76890.setAttribute('id', 'stavesmo76890');
stavesmo76890.setBegBarType(VF.Barline.type.NONE);
stavesmo76890.setContext(context);
stavesmo76890.draw();
smo76890v0.draw(context, stavesmo76890);
smo85700.setContext(context);
smo85700.draw();
smo85701.setContext(context);
smo85701.draw();
const stavesmo77676 = new VF.Stave(783, 624, 317);
stavesmo77676.setAttribute('id', 'stavesmo77676');
stavesmo77676.setBegBarType(VF.Barline.type.NONE);
stavesmo77676.setContext(context);
stavesmo77676.draw();
smo77676v0.draw(context, stavesmo77676);
const stavesmo78573 = new VF.Stave(783, 705, 317);
stavesmo78573.setAttribute('id', 'stavesmo78573');
stavesmo78573.setBegBarType(VF.Barline.type.NONE);
stavesmo78573.setContext(context);
stavesmo78573.draw();
smo78573v0.draw(context, stavesmo78573);
smo85706.setContext(context);
smo85706.draw();
smo85707.setContext(context);
smo85707.draw();
const fmtsmo752813 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo75281v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75281v0ar = [];
const smo75261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo75261.setAttribute('id', 'smo75261');
smo75281v0ar.push(smo75261);
const smo75262 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo75262.setAttribute('id', 'smo75262');
smo75281v0ar.push(smo75262);
const smo75263 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
smo75263.setAttribute('id', 'smo75263');
smo75263.addModifier(new VF.Dot(), 0);
smo75281v0ar.push(smo75263);
const smo75264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo75264.setAttribute('id', 'smo75264');
smo75281v0ar.push(smo75264);
const smo75265 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["g#/5/n"]}'))
smo75265.setAttribute('id', 'smo75265');
smo75281v0ar.push(smo75265);
smo75281v0.addTickables(smo75281v0ar)
fmtsmo752813.joinVoices([smo75281v0]);
const fmtsmo761003 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo76100v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76100v0ar = [];
const smo76080 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76080.setAttribute('id', 'smo76080');
smo76100v0ar.push(smo76080);
const smo76081 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo76081.setAttribute('id', 'smo76081');
smo76100v0ar.push(smo76081);
const smo76082 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["g#/5/n"]}'))
smo76082.setAttribute('id', 'smo76082');
smo76082.addModifier(new VF.Dot(), 0);
smo76100v0ar.push(smo76082);
const smo76083 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo76083.setAttribute('id', 'smo76083');
smo76100v0ar.push(smo76083);
const smo76084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo76084.setAttribute('id', 'smo76084');
smo76100v0ar.push(smo76084);
smo76100v0.addTickables(smo76100v0ar)
fmtsmo761003.joinVoices([smo76100v0]);
const fmtsmo769113 = new VF.Formatter();
//
// voices and notes for stave 2 3
const smo76911v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76911v0ar = [];
const smo76891 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["g#/3/n"]}'))
smo76891.setAttribute('id', 'smo76891');
smo76911v0ar.push(smo76891);
const smo76892 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["cn/4/r"]}'))
smo76892.setAttribute('id', 'smo76892');
smo76911v0ar.push(smo76892);
const smo76893 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76893.setAttribute('id', 'smo76893');
smo76893.addModifier(new VF.Dot(), 0);
smo76911v0ar.push(smo76893);
const smo76894 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo76894.setAttribute('id', 'smo76894');
smo76911v0ar.push(smo76894);
const smo76895 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo76895.setAttribute('id', 'smo76895');
smo76911v0ar.push(smo76895);
smo76911v0.addTickables(smo76911v0ar)
fmtsmo769113.joinVoices([smo76911v0]);
const fmtsmo776993 = new VF.Formatter();
//
// voices and notes for stave 3 3
const smo77699v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo77699v0ar = [];
const smo77677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo77677.setAttribute('id', 'smo77677');
smo77677.addModifier(new VF.Dot(), 0);
const smo77678 = new VF.Annotation('Com');
smo77678.setAttribute('id', 'smo77678');
smo77678.setFont('Merriweather', 12, 'normal');
smo77678.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo77677.addModifier(smo77678);
smo77678.addClass('lyric lyric-0 lyric-hyphen');
smo77699v0ar.push(smo77677);
const smo77679 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo77679.setAttribute('id', 'smo77679');
const smo77680 = new VF.Annotation('fort');
smo77680.setAttribute('id', 'smo77680');
smo77680.setFont('Merriweather', 12, 'normal');
smo77680.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo77679.addModifier(smo77680);
smo77680.addClass('lyric lyric-0');
smo77699v0ar.push(smo77679);
const smo77681 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo77681.setAttribute('id', 'smo77681');
const smo77682 = new VF.Annotation('ye!');
smo77682.setAttribute('id', 'smo77682');
smo77682.setFont('Merriweather', 12, 'normal');
smo77682.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo77681.addModifier(smo77682);
smo77682.addClass('lyric lyric-0');
smo77699v0ar.push(smo77681);
const smo77683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo77683.setAttribute('id', 'smo77683');
smo77699v0ar.push(smo77683);
smo77699v0.addTickables(smo77699v0ar)
fmtsmo776993.joinVoices([smo77699v0]);
const fmtsmo785923 = new VF.Formatter();
//
// voices and notes for stave 4 3
const smo78592v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78592v0ar = [];
const smo78574 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo78574.setAttribute('id', 'smo78574');
smo78592v0ar.push(smo78574);
const smo78575 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78575.setAttribute('id', 'smo78575');
smo78592v0ar.push(smo78575);
const smo78576 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78576.setAttribute('id', 'smo78576');
smo78592v0ar.push(smo78576);
smo78592v0.addTickables(smo78592v0ar)
fmtsmo785923.joinVoices([smo78592v0]);
// create beam groups and tuplets for format grp smo79304 before formatting
const dirsmo85710 = smo75263.getStemDirection();
smo75263.setStemDirection(dirsmo85710);
smo75264.setStemDirection(dirsmo85710);
const smo85710 = new VF.Beam([smo75263,smo75264]);
const dirsmo85713 = smo76082.getStemDirection();
smo76082.setStemDirection(dirsmo85713);
smo76083.setStemDirection(dirsmo85713);
const smo85713 = new VF.Beam([smo76082,smo76083]);
const dirsmo85716 = smo76893.getStemDirection();
smo76893.setStemDirection(dirsmo85716);
smo76894.setStemDirection(dirsmo85716);
const smo85716 = new VF.Beam([smo76893,smo76894]);
const dirsmo85719 = smo77677.getStemDirection();
smo77677.setStemDirection(dirsmo85719);
smo77679.setStemDirection(dirsmo85719);
const smo85719 = new VF.Beam([smo77677,smo77679]);
 
// formatting measures in staff group smo79304
fmtsmo752813.format([smo75281v0,smo76100v0,smo76911v0,smo77699v0,smo78592v0], 261);
const stavesmo75281 = new VF.Stave(1100, 255, 275);
stavesmo75281.setAttribute('id', 'stavesmo75281');
stavesmo75281.setBegBarType(VF.Barline.type.NONE);
stavesmo75281.setContext(context);
stavesmo75281.draw();
smo75281v0.draw(context, stavesmo75281);
smo85710.setContext(context);
smo85710.draw();
const stavesmo76100 = new VF.Stave(1100, 387, 275);
stavesmo76100.setAttribute('id', 'stavesmo76100');
stavesmo76100.setBegBarType(VF.Barline.type.NONE);
stavesmo76100.setContext(context);
stavesmo76100.draw();
smo76100v0.draw(context, stavesmo76100);
smo85713.setContext(context);
smo85713.draw();
const stavesmo76911 = new VF.Stave(1100, 507, 275);
stavesmo76911.setAttribute('id', 'stavesmo76911');
stavesmo76911.setBegBarType(VF.Barline.type.NONE);
stavesmo76911.setContext(context);
stavesmo76911.draw();
smo76911v0.draw(context, stavesmo76911);
smo85716.setContext(context);
smo85716.draw();
const stavesmo77699 = new VF.Stave(1100, 624, 275);
stavesmo77699.setAttribute('id', 'stavesmo77699');
stavesmo77699.setBegBarType(VF.Barline.type.NONE);
stavesmo77699.setContext(context);
stavesmo77699.draw();
smo77699v0.draw(context, stavesmo77699);
smo85719.setContext(context);
smo85719.draw();
const stavesmo78592 = new VF.Stave(1100, 705, 275);
stavesmo78592.setAttribute('id', 'stavesmo78592');
stavesmo78592.setBegBarType(VF.Barline.type.NONE);
stavesmo78592.setContext(context);
stavesmo78592.draw();
smo78592v0.draw(context, stavesmo78592);
const rightsmo79304stavesmo752814 = new VF.StaveConnector(stavesmo75281, stavesmo78592).setType(0);
rightsmo79304stavesmo752814.setContext(context).draw();
const fmtsmo753054 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo75305v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75305v0ar = [];
const smo75282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo75282.setAttribute('id', 'smo75282');
smo75305v0ar.push(smo75282);
const smo75283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo75283.setAttribute('id', 'smo75283');
smo75305v0ar.push(smo75283);
const smo75284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo75284.setAttribute('id', 'smo75284');
smo75305v0ar.push(smo75284);
const smo75285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo75285.setAttribute('id', 'smo75285');
smo75305v0ar.push(smo75285);
const smo75286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo75286.setAttribute('id', 'smo75286');
smo75305v0ar.push(smo75286);
const smo75287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo75287.setAttribute('id', 'smo75287');
smo75287.addModifier(new VF.Dot(), 0);
smo75305v0ar.push(smo75287);
const smo75288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo75288.setAttribute('id', 'smo75288');
smo75305v0ar.push(smo75288);
const smo75289 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo75289.setAttribute('id', 'smo75289');
smo75305v0ar.push(smo75289);
smo75305v0.addTickables(smo75305v0ar)
fmtsmo753054.joinVoices([smo75305v0]);
const fmtsmo761244 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo76124v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76124v0ar = [];
const smo76101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76101.setAttribute('id', 'smo76101');
smo76124v0ar.push(smo76101);
const smo76102 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76102.setAttribute('id', 'smo76102');
smo76124v0ar.push(smo76102);
const smo76103 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76103.setAttribute('id', 'smo76103');
smo76124v0ar.push(smo76103);
const smo76104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76104.setAttribute('id', 'smo76104');
smo76124v0ar.push(smo76104);
const smo76105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76105.setAttribute('id', 'smo76105');
smo76124v0ar.push(smo76105);
const smo76106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76106.setAttribute('id', 'smo76106');
smo76124v0ar.push(smo76106);
const smo76107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76107.setAttribute('id', 'smo76107');
smo76124v0ar.push(smo76107);
const smo76108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76108.setAttribute('id', 'smo76108');
smo76124v0ar.push(smo76108);
smo76124v0.addTickables(smo76124v0ar)
fmtsmo761244.joinVoices([smo76124v0]);
const fmtsmo769354 = new VF.Formatter();
//
// voices and notes for stave 2 4
const smo76935v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76935v0ar = [];
const smo76912 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76912.setAttribute('id', 'smo76912');
smo76935v0ar.push(smo76912);
const smo76913 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76913.setAttribute('id', 'smo76913');
smo76935v0ar.push(smo76913);
const smo76914 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76914.setAttribute('id', 'smo76914');
smo76935v0ar.push(smo76914);
const smo76915 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76915.setAttribute('id', 'smo76915');
smo76935v0ar.push(smo76915);
const smo76916 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76916.setAttribute('id', 'smo76916');
smo76935v0ar.push(smo76916);
const smo76917 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76917.setAttribute('id', 'smo76917');
smo76935v0ar.push(smo76917);
const smo76918 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76918.setAttribute('id', 'smo76918');
smo76935v0ar.push(smo76918);
const smo76919 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76919.setAttribute('id', 'smo76919');
smo76935v0ar.push(smo76919);
smo76935v0.addTickables(smo76935v0ar)
fmtsmo769354.joinVoices([smo76935v0]);
const fmtsmo777184 = new VF.Formatter();
//
// voices and notes for stave 3 4
const smo77718v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo77718v0ar = [];
const smo77700 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo77700.setAttribute('id', 'smo77700');
smo77718v0ar.push(smo77700);
const smo77701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo77701.setAttribute('id', 'smo77701');
const smo77702 = new VF.Annotation('com');
smo77702.setAttribute('id', 'smo77702');
smo77702.setFont('Merriweather', 12, 'normal');
smo77702.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo77701.addModifier(smo77702);
smo77702.addClass('lyric lyric-0');
smo77718v0ar.push(smo77701);
smo77718v0.addTickables(smo77718v0ar)
fmtsmo777184.joinVoices([smo77718v0]);
const fmtsmo786164 = new VF.Formatter();
//
// voices and notes for stave 4 4
const smo78616v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78616v0ar = [];
const smo78593 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo78593.setAttribute('id', 'smo78593');
smo78616v0ar.push(smo78593);
const smo78594 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo78594.setAttribute('id', 'smo78594');
smo78616v0ar.push(smo78594);
const smo78595 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo78595.setAttribute('id', 'smo78595');
smo78616v0ar.push(smo78595);
const smo78596 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo78596.setAttribute('id', 'smo78596');
smo78616v0ar.push(smo78596);
const smo78597 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/3/n"]}'))
smo78597.setAttribute('id', 'smo78597');
smo78616v0ar.push(smo78597);
const smo78598 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/3/n"]}'))
smo78598.setAttribute('id', 'smo78598');
smo78616v0ar.push(smo78598);
const smo78599 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/3/n"]}'))
smo78599.setAttribute('id', 'smo78599');
smo78616v0ar.push(smo78599);
const smo78600 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["g#/3/n"]}'))
smo78600.setAttribute('id', 'smo78600');
smo78616v0ar.push(smo78600);
smo78616v0.addTickables(smo78616v0ar)
fmtsmo786164.joinVoices([smo78616v0]);
// create beam groups and tuplets for format grp smo79304 before formatting
const dirsmo85743 = smo75282.getStemDirection();
smo75282.setStemDirection(dirsmo85743);
smo75283.setStemDirection(dirsmo85743);
const smo85743 = new VF.Beam([smo75282,smo75283]);
const dirsmo85744 = smo75284.getStemDirection();
smo75284.setStemDirection(dirsmo85744);
smo75285.setStemDirection(dirsmo85744);
const smo85744 = new VF.Beam([smo75284,smo75285]);
const dirsmo85745 = smo75287.getStemDirection();
smo75287.setStemDirection(dirsmo85745);
smo75288.setStemDirection(dirsmo85745);
smo75289.setStemDirection(dirsmo85745);
const smo85745 = new VF.Beam([smo75287,smo75288,smo75289]);
const dirsmo85748 = smo76101.getStemDirection();
smo76101.setStemDirection(dirsmo85748);
smo76102.setStemDirection(dirsmo85748);
smo76103.setStemDirection(dirsmo85748);
smo76104.setStemDirection(dirsmo85748);
const smo85748 = new VF.Beam([smo76101,smo76102,smo76103,smo76104]);
const dirsmo85749 = smo76105.getStemDirection();
smo76105.setStemDirection(dirsmo85749);
smo76106.setStemDirection(dirsmo85749);
smo76107.setStemDirection(dirsmo85749);
smo76108.setStemDirection(dirsmo85749);
const smo85749 = new VF.Beam([smo76105,smo76106,smo76107,smo76108]);
const dirsmo85752 = smo76912.getStemDirection();
smo76912.setStemDirection(dirsmo85752);
smo76913.setStemDirection(dirsmo85752);
smo76914.setStemDirection(dirsmo85752);
smo76915.setStemDirection(dirsmo85752);
const smo85752 = new VF.Beam([smo76912,smo76913,smo76914,smo76915]);
const dirsmo85753 = smo76916.getStemDirection();
smo76916.setStemDirection(dirsmo85753);
smo76917.setStemDirection(dirsmo85753);
smo76918.setStemDirection(dirsmo85753);
smo76919.setStemDirection(dirsmo85753);
const smo85753 = new VF.Beam([smo76916,smo76917,smo76918,smo76919]);
const dirsmo85758 = smo78593.getStemDirection();
smo78593.setStemDirection(dirsmo85758);
smo78594.setStemDirection(dirsmo85758);
smo78595.setStemDirection(dirsmo85758);
smo78596.setStemDirection(dirsmo85758);
const smo85758 = new VF.Beam([smo78593,smo78594,smo78595,smo78596]);
const dirsmo85759 = smo78597.getStemDirection();
smo78597.setStemDirection(dirsmo85759);
smo78598.setStemDirection(dirsmo85759);
smo78599.setStemDirection(dirsmo85759);
smo78600.setStemDirection(dirsmo85759);
const smo85759 = new VF.Beam([smo78597,smo78598,smo78599,smo78600]);
 
// formatting measures in staff group smo79304
fmtsmo753054.format([smo75305v0,smo76124v0,smo76935v0,smo77718v0,smo78616v0], 312);
const stavesmo75305 = new VF.Stave(55, 839, 421);
stavesmo75305.setAttribute('id', 'stavesmo75305');
stavesmo75305.setBegBarType(1);
stavesmo75305.addClef('treble');
const keysmo75305 = new VF.KeySignature('E');
keysmo75305.addToStave(stavesmo75305);
stavesmo75305.setContext(context);
stavesmo75305.draw();
smo75305v0.draw(context, stavesmo75305);
smo85743.setContext(context);
smo85743.draw();
smo85744.setContext(context);
smo85744.draw();
smo85745.setContext(context);
smo85745.draw();
const stavesmo76124 = new VF.Stave(55, 933, 421);
stavesmo76124.setAttribute('id', 'stavesmo76124');
stavesmo76124.setBegBarType(1);
stavesmo76124.addClef('treble');
const keysmo76124 = new VF.KeySignature('E');
keysmo76124.addToStave(stavesmo76124);
stavesmo76124.setContext(context);
stavesmo76124.draw();
smo76124v0.draw(context, stavesmo76124);
smo85748.setContext(context);
smo85748.draw();
smo85749.setContext(context);
smo85749.draw();
const stavesmo76935 = new VF.Stave(55, 1011, 421);
stavesmo76935.setAttribute('id', 'stavesmo76935');
stavesmo76935.setBegBarType(1);
stavesmo76935.addClef('alto');
const keysmo76935 = new VF.KeySignature('E');
keysmo76935.addToStave(stavesmo76935);
stavesmo76935.setContext(context);
stavesmo76935.draw();
smo76935v0.draw(context, stavesmo76935);
smo85752.setContext(context);
smo85752.draw();
smo85753.setContext(context);
smo85753.draw();
const stavesmo77718 = new VF.Stave(55, 1109, 421);
stavesmo77718.setAttribute('id', 'stavesmo77718');
stavesmo77718.setBegBarType(1);
stavesmo77718.addClef('treble');
const keysmo77718 = new VF.KeySignature('E');
keysmo77718.addToStave(stavesmo77718);
stavesmo77718.setContext(context);
stavesmo77718.draw();
smo77718v0.draw(context, stavesmo77718);
const stavesmo78616 = new VF.Stave(55, 1231, 421);
stavesmo78616.setAttribute('id', 'stavesmo78616');
stavesmo78616.setBegBarType(1);
stavesmo78616.addClef('bass');
const keysmo78616 = new VF.KeySignature('E');
keysmo78616.addToStave(stavesmo78616);
stavesmo78616.setContext(context);
stavesmo78616.draw();
smo78616v0.draw(context, stavesmo78616);
smo85758.setContext(context);
smo85758.draw();
smo85759.setContext(context);
smo85759.draw();
const leftsmo79304stavesmo753054 = new VF.StaveConnector(stavesmo75305, stavesmo78616).setType(4);
leftsmo79304stavesmo753054.setContext(context).draw();
const fmtsmo753295 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo75329v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75329v0ar = [];
const smo75306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo75306.setAttribute('id', 'smo75306');
smo75329v0ar.push(smo75306);
const smo75307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo75307.setAttribute('id', 'smo75307');
smo75329v0ar.push(smo75307);
const smo75308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo75308.setAttribute('id', 'smo75308');
smo75329v0ar.push(smo75308);
const smo75309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo75309.setAttribute('id', 'smo75309');
smo75329v0ar.push(smo75309);
const smo75310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo75310.setAttribute('id', 'smo75310');
smo75329v0ar.push(smo75310);
const smo75311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo75311.setAttribute('id', 'smo75311');
smo75329v0ar.push(smo75311);
const smo75312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo75312.setAttribute('id', 'smo75312');
smo75329v0ar.push(smo75312);
const smo75313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo75313.setAttribute('id', 'smo75313');
smo75329v0ar.push(smo75313);
smo75329v0.addTickables(smo75329v0ar)
fmtsmo753295.joinVoices([smo75329v0]);
const fmtsmo761485 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo76148v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76148v0ar = [];
const smo76125 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76125.setAttribute('id', 'smo76125');
smo76148v0ar.push(smo76125);
const smo76126 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76126.setAttribute('id', 'smo76126');
smo76148v0ar.push(smo76126);
const smo76127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76127.setAttribute('id', 'smo76127');
smo76148v0ar.push(smo76127);
const smo76128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76128.setAttribute('id', 'smo76128');
smo76148v0ar.push(smo76128);
const smo76129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76129.setAttribute('id', 'smo76129');
smo76148v0ar.push(smo76129);
const smo76130 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76130.setAttribute('id', 'smo76130');
smo76148v0ar.push(smo76130);
const smo76131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo76131.setAttribute('id', 'smo76131');
smo76148v0ar.push(smo76131);
const smo76132 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["d#/4/n"]}'))
smo76132.setAttribute('id', 'smo76132');
smo76148v0ar.push(smo76132);
smo76148v0.addTickables(smo76148v0ar)
fmtsmo761485.joinVoices([smo76148v0]);
const fmtsmo769595 = new VF.Formatter();
//
// voices and notes for stave 2 5
const smo76959v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76959v0ar = [];
const smo76936 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76936.setAttribute('id', 'smo76936');
smo76959v0ar.push(smo76936);
const smo76937 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76937.setAttribute('id', 'smo76937');
smo76959v0ar.push(smo76937);
const smo76938 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76938.setAttribute('id', 'smo76938');
smo76959v0ar.push(smo76938);
const smo76939 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76939.setAttribute('id', 'smo76939');
smo76959v0ar.push(smo76939);
const smo76940 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76940.setAttribute('id', 'smo76940');
smo76959v0ar.push(smo76940);
const smo76941 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76941.setAttribute('id', 'smo76941');
smo76959v0ar.push(smo76941);
const smo76942 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo76942.setAttribute('id', 'smo76942');
smo76959v0ar.push(smo76942);
const smo76943 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo76943.setAttribute('id', 'smo76943');
smo76959v0ar.push(smo76943);
smo76959v0.addTickables(smo76959v0ar)
fmtsmo769595.joinVoices([smo76959v0]);
const fmtsmo777455 = new VF.Formatter();
//
// voices and notes for stave 3 5
const smo77745v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo77745v0ar = [];
const smo77719 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo77719.setAttribute('id', 'smo77719');
smo77719.addModifier(new VF.Dot(), 0);
const smo77720 = new VF.Annotation('-');
smo77720.setAttribute('id', 'smo77720');
smo77720.setFont('Merriweather', 12, 'normal');
smo77720.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo77719.addModifier(smo77720);
smo77720.addClass('lyric lyric-0 lyric-hyphen');
smo77745v0ar.push(smo77719);
const smo77721 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo77721.setAttribute('id', 'smo77721');
const smo77722 = new VF.Annotation('fort');
smo77722.setAttribute('id', 'smo77722');
smo77722.setFont('Merriweather', 12, 'normal');
smo77722.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo77721.addModifier(smo77722);
smo77722.addClass('lyric lyric-0');
smo77745v0ar.push(smo77721);
const smo77723 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/5/n"]}'))
smo77723.setAttribute('id', 'smo77723');
smo77745v0ar.push(smo77723);
const smo77724 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo77724.setAttribute('id', 'smo77724');
const smo77725 = new VF.Annotation('ye');
smo77725.setAttribute('id', 'smo77725');
smo77725.setFont('Merriweather', 12, 'normal');
smo77725.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo77724.addModifier(smo77725);
smo77725.addClass('lyric lyric-0');
smo77745v0ar.push(smo77724);
const smo77726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo77726.setAttribute('id', 'smo77726');
smo77726.addModifier(new VF.Dot(), 0);
const smo77727 = new VF.Annotation('-');
smo77727.setAttribute('id', 'smo77727');
smo77727.setFont('Merriweather', 12, 'normal');
smo77727.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo77726.addModifier(smo77727);
smo77727.addClass('lyric lyric-0 lyric-hyphen');
smo77745v0ar.push(smo77726);
const smo77728 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo77728.setAttribute('id', 'smo77728');
const smo77729 = new VF.Annotation('my');
smo77729.setAttribute('id', 'smo77729');
smo77729.setFont('Merriweather', 12, 'normal');
smo77729.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo77728.addModifier(smo77729);
smo77729.addClass('lyric lyric-0');
smo77745v0ar.push(smo77728);
smo77745v0.addTickables(smo77745v0ar)
fmtsmo777455.joinVoices([smo77745v0]);
const fmtsmo786405 = new VF.Formatter();
//
// voices and notes for stave 4 5
const smo78640v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78640v0ar = [];
const smo78617 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo78617.setAttribute('id', 'smo78617');
smo78640v0ar.push(smo78617);
const smo78618 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo78618.setAttribute('id', 'smo78618');
smo78640v0ar.push(smo78618);
const smo78619 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo78619.setAttribute('id', 'smo78619');
smo78640v0ar.push(smo78619);
const smo78620 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo78620.setAttribute('id', 'smo78620');
smo78640v0ar.push(smo78620);
const smo78621 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo78621.setAttribute('id', 'smo78621');
smo78640v0ar.push(smo78621);
const smo78622 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo78622.setAttribute('id', 'smo78622');
smo78640v0ar.push(smo78622);
const smo78623 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo78623.setAttribute('id', 'smo78623');
smo78640v0ar.push(smo78623);
const smo78624 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo78624.setAttribute('id', 'smo78624');
smo78640v0ar.push(smo78624);
smo78640v0.addTickables(smo78640v0ar)
fmtsmo786405.joinVoices([smo78640v0]);
// create beam groups and tuplets for format grp smo79304 before formatting
const dirsmo85762 = smo75306.getStemDirection();
smo75306.setStemDirection(dirsmo85762);
smo75307.setStemDirection(dirsmo85762);
smo75308.setStemDirection(dirsmo85762);
smo75309.setStemDirection(dirsmo85762);
const smo85762 = new VF.Beam([smo75306,smo75307,smo75308,smo75309]);
const dirsmo85763 = smo75310.getStemDirection();
smo75310.setStemDirection(dirsmo85763);
smo75311.setStemDirection(dirsmo85763);
smo75312.setStemDirection(dirsmo85763);
smo75313.setStemDirection(dirsmo85763);
const smo85763 = new VF.Beam([smo75310,smo75311,smo75312,smo75313]);
const dirsmo85766 = smo76125.getStemDirection();
smo76125.setStemDirection(dirsmo85766);
smo76126.setStemDirection(dirsmo85766);
smo76127.setStemDirection(dirsmo85766);
smo76128.setStemDirection(dirsmo85766);
const smo85766 = new VF.Beam([smo76125,smo76126,smo76127,smo76128]);
const dirsmo85767 = smo76129.getStemDirection();
smo76129.setStemDirection(dirsmo85767);
smo76130.setStemDirection(dirsmo85767);
smo76131.setStemDirection(dirsmo85767);
smo76132.setStemDirection(dirsmo85767);
const smo85767 = new VF.Beam([smo76129,smo76130,smo76131,smo76132]);
const dirsmo85770 = smo76936.getStemDirection();
smo76936.setStemDirection(dirsmo85770);
smo76937.setStemDirection(dirsmo85770);
smo76938.setStemDirection(dirsmo85770);
smo76939.setStemDirection(dirsmo85770);
const smo85770 = new VF.Beam([smo76936,smo76937,smo76938,smo76939]);
const dirsmo85771 = smo76940.getStemDirection();
smo76940.setStemDirection(dirsmo85771);
smo76941.setStemDirection(dirsmo85771);
smo76942.setStemDirection(dirsmo85771);
smo76943.setStemDirection(dirsmo85771);
const smo85771 = new VF.Beam([smo76940,smo76941,smo76942,smo76943]);
const dirsmo85774 = smo77721.getStemDirection();
smo77721.setStemDirection(dirsmo85774);
smo77723.setStemDirection(dirsmo85774);
const smo85774 = new VF.Beam([smo77721,smo77723]);
const dirsmo85775 = smo77726.getStemDirection();
smo77726.setStemDirection(dirsmo85775);
smo77728.setStemDirection(dirsmo85775);
const smo85775 = new VF.Beam([smo77726,smo77728]);
const dirsmo85778 = smo78617.getStemDirection();
smo78617.setStemDirection(dirsmo85778);
smo78618.setStemDirection(dirsmo85778);
smo78619.setStemDirection(dirsmo85778);
smo78620.setStemDirection(dirsmo85778);
const smo85778 = new VF.Beam([smo78617,smo78618,smo78619,smo78620]);
const dirsmo85779 = smo78621.getStemDirection();
smo78621.setStemDirection(dirsmo85779);
smo78622.setStemDirection(dirsmo85779);
smo78623.setStemDirection(dirsmo85779);
smo78624.setStemDirection(dirsmo85779);
const smo85779 = new VF.Beam([smo78621,smo78622,smo78623,smo78624]);
 
// formatting measures in staff group smo79304
fmtsmo753295.format([smo75329v0,smo76148v0,smo76959v0,smo77745v0,smo78640v0], 364);
const stavesmo75329 = new VF.Stave(476, 839, 378);
stavesmo75329.setAttribute('id', 'stavesmo75329');
stavesmo75329.setBegBarType(VF.Barline.type.NONE);
stavesmo75329.setContext(context);
stavesmo75329.draw();
smo75329v0.draw(context, stavesmo75329);
smo85762.setContext(context);
smo85762.draw();
smo85763.setContext(context);
smo85763.draw();
const stavesmo76148 = new VF.Stave(476, 933, 378);
stavesmo76148.setAttribute('id', 'stavesmo76148');
stavesmo76148.setBegBarType(VF.Barline.type.NONE);
stavesmo76148.setContext(context);
stavesmo76148.draw();
smo76148v0.draw(context, stavesmo76148);
smo85766.setContext(context);
smo85766.draw();
smo85767.setContext(context);
smo85767.draw();
const stavesmo76959 = new VF.Stave(476, 1011, 378);
stavesmo76959.setAttribute('id', 'stavesmo76959');
stavesmo76959.setBegBarType(VF.Barline.type.NONE);
stavesmo76959.setContext(context);
stavesmo76959.draw();
smo76959v0.draw(context, stavesmo76959);
smo85770.setContext(context);
smo85770.draw();
smo85771.setContext(context);
smo85771.draw();
const stavesmo77745 = new VF.Stave(476, 1109, 378);
stavesmo77745.setAttribute('id', 'stavesmo77745');
stavesmo77745.setBegBarType(VF.Barline.type.NONE);
stavesmo77745.setContext(context);
stavesmo77745.draw();
smo77745v0.draw(context, stavesmo77745);
smo85774.setContext(context);
smo85774.draw();
smo85775.setContext(context);
smo85775.draw();
const stavesmo78640 = new VF.Stave(476, 1231, 378);
stavesmo78640.setAttribute('id', 'stavesmo78640');
stavesmo78640.setBegBarType(VF.Barline.type.NONE);
stavesmo78640.setContext(context);
stavesmo78640.draw();
smo78640v0.draw(context, stavesmo78640);
smo85778.setContext(context);
smo85778.draw();
smo85779.setContext(context);
smo85779.draw();
const fmtsmo753516 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo75351v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75351v0ar = [];
const smo75330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo75330.setAttribute('id', 'smo75330');
smo75330.addModifier(new VF.Dot(), 0);
smo75351v0ar.push(smo75330);
const smo75331 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo75331.setAttribute('id', 'smo75331');
smo75351v0ar.push(smo75331);
const smo75332 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo75332.setAttribute('id', 'smo75332');
smo75351v0ar.push(smo75332);
const smo75333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["g#/5/n"]}'))
smo75333.setAttribute('id', 'smo75333');
smo75333.addModifier(new VF.Dot(), 0);
smo75351v0ar.push(smo75333);
const smo75334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo75334.setAttribute('id', 'smo75334');
smo75351v0ar.push(smo75334);
const smo75335 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo75335.setAttribute('id', 'smo75335');
smo75351v0ar.push(smo75335);
smo75351v0.addTickables(smo75351v0ar)
fmtsmo753516.joinVoices([smo75351v0]);
const fmtsmo761706 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo76170v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76170v0ar = [];
const smo76149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo76149.setAttribute('id', 'smo76149');
smo76149.addModifier(new VF.Dot(), 0);
smo76170v0ar.push(smo76149);
const smo76150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo76150.setAttribute('id', 'smo76150');
smo76170v0ar.push(smo76150);
const smo76151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76151.setAttribute('id', 'smo76151');
smo76170v0ar.push(smo76151);
const smo76152 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo76152.setAttribute('id', 'smo76152');
smo76152.addModifier(new VF.Dot(), 0);
smo76170v0ar.push(smo76152);
const smo76153 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo76153.setAttribute('id', 'smo76153');
smo76170v0ar.push(smo76153);
const smo76154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo76154.setAttribute('id', 'smo76154');
smo76170v0ar.push(smo76154);
smo76170v0.addTickables(smo76170v0ar)
fmtsmo761706.joinVoices([smo76170v0]);
const fmtsmo769816 = new VF.Formatter();
//
// voices and notes for stave 2 6
const smo76981v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76981v0ar = [];
const smo76960 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76960.setAttribute('id', 'smo76960');
smo76960.addModifier(new VF.Dot(), 0);
smo76981v0ar.push(smo76960);
const smo76961 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76961.setAttribute('id', 'smo76961');
smo76981v0ar.push(smo76961);
const smo76962 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo76962.setAttribute('id', 'smo76962');
smo76981v0ar.push(smo76962);
const smo76963 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo76963.setAttribute('id', 'smo76963');
smo76963.addModifier(new VF.Dot(), 0);
smo76981v0ar.push(smo76963);
const smo76964 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo76964.setAttribute('id', 'smo76964');
smo76981v0ar.push(smo76964);
const smo76965 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo76965.setAttribute('id', 'smo76965');
smo76981v0ar.push(smo76965);
smo76981v0.addTickables(smo76981v0ar)
fmtsmo769816.joinVoices([smo76981v0]);
const fmtsmo777696 = new VF.Formatter();
//
// voices and notes for stave 3 6
const smo77769v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo77769v0ar = [];
const smo77746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo77746.setAttribute('id', 'smo77746');
const smo77747 = new VF.Annotation('peo');
smo77747.setAttribute('id', 'smo77747');
smo77747.setFont('Merriweather', 12, 'normal');
smo77747.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo77746.addModifier(smo77747);
smo77747.addClass('lyric lyric-0');
smo77769v0ar.push(smo77746);
const smo77748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo77748.setAttribute('id', 'smo77748');
const smo77749 = new VF.Annotation('-');
smo77749.setAttribute('id', 'smo77749');
smo77749.setFont('Merriweather', 12, 'normal');
smo77749.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo77748.addModifier(smo77749);
smo77749.addClass('lyric lyric-0 lyric-hyphen');
smo77769v0ar.push(smo77748);
const smo77750 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo77750.setAttribute('id', 'smo77750');
smo77769v0ar.push(smo77750);
const smo77751 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo77751.setAttribute('id', 'smo77751');
const smo77752 = new VF.Annotation('ple');
smo77752.setAttribute('id', 'smo77752');
smo77752.setFont('Merriweather', 12, 'normal');
smo77752.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo77751.addModifier(smo77752);
smo77752.addClass('lyric lyric-0');
smo77769v0ar.push(smo77751);
const smo77753 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo77753.setAttribute('id', 'smo77753');
smo77769v0ar.push(smo77753);
smo77769v0.addTickables(smo77769v0ar)
fmtsmo777696.joinVoices([smo77769v0]);
const fmtsmo786606 = new VF.Formatter();
//
// voices and notes for stave 4 6
const smo78660v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78660v0ar = [];
const smo78641 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo78641.setAttribute('id', 'smo78641');
smo78641.addModifier(new VF.Dot(), 0);
smo78660v0ar.push(smo78641);
const smo78642 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo78642.setAttribute('id', 'smo78642');
smo78660v0ar.push(smo78642);
const smo78643 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo78643.setAttribute('id', 'smo78643');
smo78660v0ar.push(smo78643);
const smo78644 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78644.setAttribute('id', 'smo78644');
smo78660v0ar.push(smo78644);
smo78660v0.addTickables(smo78660v0ar)
fmtsmo786606.joinVoices([smo78660v0]);
// create beam groups and tuplets for format grp smo79304 before formatting
const dirsmo85782 = smo75330.getStemDirection();
smo75330.setStemDirection(dirsmo85782);
smo75331.setStemDirection(dirsmo85782);
const smo85782 = new VF.Beam([smo75330,smo75331]);
const dirsmo85783 = smo75333.getStemDirection();
smo75333.setStemDirection(dirsmo85783);
smo75334.setStemDirection(dirsmo85783);
const smo85783 = new VF.Beam([smo75333,smo75334]);
const dirsmo85786 = smo76149.getStemDirection();
smo76149.setStemDirection(dirsmo85786);
smo76150.setStemDirection(dirsmo85786);
const smo85786 = new VF.Beam([smo76149,smo76150]);
const dirsmo85787 = smo76152.getStemDirection();
smo76152.setStemDirection(dirsmo85787);
smo76153.setStemDirection(dirsmo85787);
const smo85787 = new VF.Beam([smo76152,smo76153]);
const dirsmo85790 = smo76960.getStemDirection();
smo76960.setStemDirection(dirsmo85790);
smo76961.setStemDirection(dirsmo85790);
const smo85790 = new VF.Beam([smo76960,smo76961]);
const dirsmo85791 = smo76963.getStemDirection();
smo76963.setStemDirection(dirsmo85791);
smo76964.setStemDirection(dirsmo85791);
const smo85791 = new VF.Beam([smo76963,smo76964]);
const dirsmo85794 = smo77746.getStemDirection();
smo77746.setStemDirection(dirsmo85794);
smo77748.setStemDirection(dirsmo85794);
smo77750.setStemDirection(dirsmo85794);
const smo85794 = new VF.Beam([smo77746,smo77748,smo77750]);
const dirsmo85797 = smo78641.getStemDirection();
smo78641.setStemDirection(dirsmo85797);
smo78642.setStemDirection(dirsmo85797);
const smo85797 = new VF.Beam([smo78641,smo78642]);
 
// formatting measures in staff group smo79304
fmtsmo753516.format([smo75351v0,smo76170v0,smo76981v0,smo77769v0,smo78660v0], 275);
const stavesmo75351 = new VF.Stave(854, 839, 289);
stavesmo75351.setAttribute('id', 'stavesmo75351');
stavesmo75351.setBegBarType(VF.Barline.type.NONE);
stavesmo75351.setContext(context);
stavesmo75351.draw();
smo75351v0.draw(context, stavesmo75351);
smo85782.setContext(context);
smo85782.draw();
smo85783.setContext(context);
smo85783.draw();
const stavesmo76170 = new VF.Stave(854, 933, 289);
stavesmo76170.setAttribute('id', 'stavesmo76170');
stavesmo76170.setBegBarType(VF.Barline.type.NONE);
stavesmo76170.setContext(context);
stavesmo76170.draw();
smo76170v0.draw(context, stavesmo76170);
smo85786.setContext(context);
smo85786.draw();
smo85787.setContext(context);
smo85787.draw();
const stavesmo76981 = new VF.Stave(854, 1011, 289);
stavesmo76981.setAttribute('id', 'stavesmo76981');
stavesmo76981.setBegBarType(VF.Barline.type.NONE);
stavesmo76981.setContext(context);
stavesmo76981.draw();
smo76981v0.draw(context, stavesmo76981);
smo85790.setContext(context);
smo85790.draw();
smo85791.setContext(context);
smo85791.draw();
const stavesmo77769 = new VF.Stave(854, 1109, 289);
stavesmo77769.setAttribute('id', 'stavesmo77769');
stavesmo77769.setBegBarType(VF.Barline.type.NONE);
stavesmo77769.setContext(context);
stavesmo77769.draw();
smo77769v0.draw(context, stavesmo77769);
smo85794.setContext(context);
smo85794.draw();
const stavesmo78660 = new VF.Stave(854, 1231, 289);
stavesmo78660.setAttribute('id', 'stavesmo78660');
stavesmo78660.setBegBarType(VF.Barline.type.NONE);
stavesmo78660.setContext(context);
stavesmo78660.draw();
smo78660v0.draw(context, stavesmo78660);
smo85797.setContext(context);
smo85797.draw();
const fmtsmo753687 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo75368v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75368v0ar = [];
const smo75352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo75352.setAttribute('id', 'smo75352');
smo75368v0ar.push(smo75352);
smo75368v0.addTickables(smo75368v0ar)
fmtsmo753687.joinVoices([smo75368v0]);
const fmtsmo761877 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo76187v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76187v0ar = [];
const smo76171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo76171.setAttribute('id', 'smo76171');
smo76187v0ar.push(smo76171);
smo76187v0.addTickables(smo76187v0ar)
fmtsmo761877.joinVoices([smo76187v0]);
const fmtsmo769987 = new VF.Formatter();
//
// voices and notes for stave 2 7
const smo76998v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76998v0ar = [];
const smo76982 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["cn/4/r"]}'))
smo76982.setAttribute('id', 'smo76982');
smo76998v0ar.push(smo76982);
smo76998v0.addTickables(smo76998v0ar)
fmtsmo769987.joinVoices([smo76998v0]);
const fmtsmo777937 = new VF.Formatter();
//
// voices and notes for stave 3 7
const smo77793v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo77793v0ar = [];
const smo77770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo77770.setAttribute('id', 'smo77770');
const smo77771 = new VF.Annotation('Com');
smo77771.setAttribute('id', 'smo77771');
smo77771.setFont('Merriweather', 12, 'normal');
smo77771.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo77770.addModifier(smo77771);
smo77771.addClass('lyric lyric-0');
smo77793v0ar.push(smo77770);
const smo77772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo77772.setAttribute('id', 'smo77772');
smo77772.addModifier(new VF.Dot(), 0);
const smo77773 = new VF.Annotation('-');
smo77773.setAttribute('id', 'smo77773');
smo77773.setFont('Merriweather', 12, 'normal');
smo77773.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo77772.addModifier(smo77773);
smo77773.addClass('lyric lyric-0 lyric-hyphen');
smo77793v0ar.push(smo77772);
const smo77774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo77774.setAttribute('id', 'smo77774');
const smo77775 = new VF.Annotation('fort');
smo77775.setAttribute('id', 'smo77775');
smo77775.setFont('Merriweather', 12, 'normal');
smo77775.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo77774.addModifier(smo77775);
smo77775.addClass('lyric lyric-0');
smo77793v0ar.push(smo77774);
const smo77776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo77776.setAttribute('id', 'smo77776');
const smo77777 = new VF.Annotation('ye,');
smo77777.setAttribute('id', 'smo77777');
smo77777.setFont('Merriweather', 12, 'normal');
smo77777.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo77776.addModifier(smo77777);
smo77777.addClass('lyric lyric-0');
smo77793v0ar.push(smo77776);
smo77793v0.addTickables(smo77793v0ar)
fmtsmo777937.joinVoices([smo77793v0]);
const fmtsmo786777 = new VF.Formatter();
//
// voices and notes for stave 4 7
const smo78677v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78677v0ar = [];
const smo78661 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78661.setAttribute('id', 'smo78661');
smo78677v0ar.push(smo78661);
smo78677v0.addTickables(smo78677v0ar)
fmtsmo786777.joinVoices([smo78677v0]);
// create beam groups and tuplets for format grp smo79304 before formatting
const dirsmo85806 = smo77772.getStemDirection();
smo77772.setStemDirection(dirsmo85806);
smo77774.setStemDirection(dirsmo85806);
const smo85806 = new VF.Beam([smo77772,smo77774]);
 
// formatting measures in staff group smo79304
fmtsmo753687.format([smo75368v0,smo76187v0,smo76998v0,smo77793v0,smo78677v0], 218);
const stavesmo75368 = new VF.Stave(1143, 839, 232);
stavesmo75368.setAttribute('id', 'stavesmo75368');
stavesmo75368.setBegBarType(VF.Barline.type.NONE);
stavesmo75368.setContext(context);
stavesmo75368.draw();
smo75368v0.draw(context, stavesmo75368);
const stavesmo76187 = new VF.Stave(1143, 933, 232);
stavesmo76187.setAttribute('id', 'stavesmo76187');
stavesmo76187.setBegBarType(VF.Barline.type.NONE);
stavesmo76187.setContext(context);
stavesmo76187.draw();
smo76187v0.draw(context, stavesmo76187);
const stavesmo76998 = new VF.Stave(1143, 1011, 232);
stavesmo76998.setAttribute('id', 'stavesmo76998');
stavesmo76998.setBegBarType(VF.Barline.type.NONE);
stavesmo76998.setContext(context);
stavesmo76998.draw();
smo76998v0.draw(context, stavesmo76998);
const stavesmo77793 = new VF.Stave(1143, 1109, 232);
stavesmo77793.setAttribute('id', 'stavesmo77793');
stavesmo77793.setBegBarType(VF.Barline.type.NONE);
stavesmo77793.setContext(context);
stavesmo77793.draw();
smo77793v0.draw(context, stavesmo77793);
smo85806.setContext(context);
smo85806.draw();
const stavesmo78677 = new VF.Stave(1143, 1231, 232);
stavesmo78677.setAttribute('id', 'stavesmo78677');
stavesmo78677.setBegBarType(VF.Barline.type.NONE);
stavesmo78677.setContext(context);
stavesmo78677.draw();
smo78677v0.draw(context, stavesmo78677);
const rightsmo79304stavesmo753684 = new VF.StaveConnector(stavesmo75368, stavesmo78677).setType(0);
rightsmo79304stavesmo753684.setContext(context).draw();
// modifier from 0-0-0-0 to 0-0-0-3
const smo86862 = new VF.Curve(smo75184, smo75191, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":25,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo86862.setContext(context).draw();
// modifier from 0-4-0-4 to 0-4-0-5
const smo86863 = new VF.Curve(smo75286, smo75287, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo86863.setContext(context).draw();
// modifier from 0-0-0-4 to 0-0-0-5
const smo86864 = new VF.Curve(smo75193, smo75194, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":5,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo86864.setContext(context).draw();
// modifier from 0-1-0-4 to 0-1-0-5
const smo86865 = new VF.Curve(smo75217, smo75218, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo86865.setContext(context).draw();
// modifier from 1-0-0-0 to 1-0-0-3
const smo86866 = new VF.Curve(smo76004, smo76010, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":20,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo86866.setContext(context).draw();
// modifier from 2-0-0-0 to 2-0-0-3
const smo86867 = new VF.Curve(smo76815, smo76821, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":20,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo86867.setContext(context).draw();
// modifier from 3-7-0-0 to 3-7-0-1
const smo86868 = new VF.Curve(smo77770, smo77772, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo86868.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo77678').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo77682').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo77702').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo77720').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo77722').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo77727').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo77729').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo77747').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo77749').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo77752').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo77771').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo77773').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo77775').setAttributeNS('', 'transform', 'translate(0 2)');
}
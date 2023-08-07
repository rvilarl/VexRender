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
const fmtsmo331640 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo33164v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33164v0ar = [];
const smo33148 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33148'] = smo33148;
smo33148.setAttribute('id', 'smo33148');
smo33148.addModifier(new VF.Dot(), 0);
smo33164v0ar.push(smo33148);
smo33164v0.addTickables(smo33164v0ar)
fmtsmo331640.joinVoices([smo33164v0]);
const fmtsmo345640 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo34564v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34564v0ar = [];
const smo34546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo34546'] = smo34546;
smo34546.setAttribute('id', 'smo34546');
smo34546.addModifier(new VF.Dot(), 0);
smo34564v0ar.push(smo34546);
const smo34547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo34547'] = smo34547;
smo34547.setAttribute('id', 'smo34547');
smo34564v0ar.push(smo34547);
const smo34548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
noteHash['smo34548'] = smo34548;
smo34548.setAttribute('id', 'smo34548');
smo34564v0ar.push(smo34548);
smo34564v0.addTickables(smo34564v0ar)
fmtsmo345640.joinVoices([smo34564v0]);
const fmtsmo356850 = new VF.Formatter();
//
// voices and notes for stave 2 0
const smo35685v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35685v0ar = [];
const smo35667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo35667'] = smo35667;
smo35667.setAttribute('id', 'smo35667');
smo35667.addModifier(new VF.Dot(), 0);
smo35685v0ar.push(smo35667);
const smo35668 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo35668'] = smo35668;
smo35668.setAttribute('id', 'smo35668');
smo35685v0ar.push(smo35668);
const smo35669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo35669'] = smo35669;
smo35669.setAttribute('id', 'smo35669');
smo35685v0ar.push(smo35669);
smo35685v0.addTickables(smo35685v0ar)
fmtsmo356850.joinVoices([smo35685v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo331640.format([smo33164v0,smo34564v0,smo35685v0], 105);
const stavesmo33164 = new VF.Stave(66, 119, 202);
stavesmo33164.setAttribute('id', 'stavesmo33164');
stavesmo33164.setBegBarType(1);
stavesmo33164.setTempo(JSON.parse('{"duration":"4","dots":1,"bpm":120}'), -1 * 0);
stavesmo33164.addClef('treble');
stavesmo33164.addTimeSignature('6/8');
const keysmo33164 = new VF.KeySignature('G');
keysmo33164.addToStave(stavesmo33164);
stavesmo33164.setContext(context);
stavesmo33164.draw();
smo33164v0.draw(context, stavesmo33164);
const stavesmo34564 = new VF.Stave(66, 226, 202);
stavesmo34564.setAttribute('id', 'stavesmo34564');
stavesmo34564.setBegBarType(1);
stavesmo34564.addClef('treble');
stavesmo34564.addTimeSignature('6/8');
const keysmo34564 = new VF.KeySignature('G');
keysmo34564.addToStave(stavesmo34564);
stavesmo34564.setContext(context);
stavesmo34564.draw();
smo34564v0.draw(context, stavesmo34564);
const stavesmo35685 = new VF.Stave(66, 301, 202);
stavesmo35685.setAttribute('id', 'stavesmo35685');
stavesmo35685.setBegBarType(1);
stavesmo35685.addClef('treble');
stavesmo35685.addTimeSignature('6/8');
const keysmo35685 = new VF.KeySignature('G');
keysmo35685.addToStave(stavesmo35685);
stavesmo35685.setContext(context);
stavesmo35685.draw();
smo35685v0.draw(context, stavesmo35685);
const leftsmo36899stavesmo331642 = new VF.StaveConnector(stavesmo33164, stavesmo35685).setType(1);
leftsmo36899stavesmo331642.setContext(context).draw();
const fmtsmo331811 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo33181v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33181v0ar = [];
const smo33165 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33165'] = smo33165;
smo33165.setAttribute('id', 'smo33165');
smo33165.addModifier(new VF.Dot(), 0);
smo33181v0ar.push(smo33165);
smo33181v0.addTickables(smo33181v0ar)
fmtsmo331811.joinVoices([smo33181v0]);
const fmtsmo345821 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo34582v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34582v0ar = [];
const smo34565 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
noteHash['smo34565'] = smo34565;
smo34565.setAttribute('id', 'smo34565');
smo34565.addModifier(new VF.Dot(), 0);
smo34582v0ar.push(smo34565);
const smo34566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
noteHash['smo34566'] = smo34566;
smo34566.setAttribute('id', 'smo34566');
smo34566.addModifier(new VF.Dot(), 0);
smo34582v0ar.push(smo34566);
smo34582v0.addTickables(smo34582v0ar)
fmtsmo345821.joinVoices([smo34582v0]);
const fmtsmo357031 = new VF.Formatter();
//
// voices and notes for stave 2 1
const smo35703v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35703v0ar = [];
const smo35686 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo35686'] = smo35686;
smo35686.setAttribute('id', 'smo35686');
smo35686.addModifier(new VF.Dot(), 0);
smo35703v0ar.push(smo35686);
const smo35687 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo35687'] = smo35687;
smo35687.setAttribute('id', 'smo35687');
smo35687.addModifier(new VF.Dot(), 0);
smo35703v0ar.push(smo35687);
smo35703v0.addTickables(smo35703v0ar)
fmtsmo357031.joinVoices([smo35703v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo331811.format([smo33181v0,smo34582v0,smo35703v0], 75);
const stavesmo33181 = new VF.Stave(268, 119, 89);
stavesmo33181.setAttribute('id', 'stavesmo33181');
stavesmo33181.setBegBarType(VF.Barline.type.NONE);
stavesmo33181.setContext(context);
stavesmo33181.draw();
smo33181v0.draw(context, stavesmo33181);
const stavesmo34582 = new VF.Stave(268, 226, 89);
stavesmo34582.setAttribute('id', 'stavesmo34582');
stavesmo34582.setBegBarType(VF.Barline.type.NONE);
stavesmo34582.setContext(context);
stavesmo34582.draw();
smo34582v0.draw(context, stavesmo34582);
const stavesmo35703 = new VF.Stave(268, 301, 89);
stavesmo35703.setAttribute('id', 'stavesmo35703');
stavesmo35703.setBegBarType(VF.Barline.type.NONE);
stavesmo35703.setContext(context);
stavesmo35703.draw();
smo35703v0.draw(context, stavesmo35703);
const fmtsmo331982 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo33198v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33198v0ar = [];
const smo33182 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33182'] = smo33182;
smo33182.setAttribute('id', 'smo33182');
smo33182.addModifier(new VF.Dot(), 0);
smo33198v0ar.push(smo33182);
smo33198v0.addTickables(smo33198v0ar)
fmtsmo331982.joinVoices([smo33198v0]);
const fmtsmo346032 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo34603v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34603v0ar = [];
const smo34583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo34583'] = smo34583;
smo34583.setAttribute('id', 'smo34583');
smo34603v0ar.push(smo34583);
const smo34584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
noteHash['smo34584'] = smo34584;
smo34584.setAttribute('id', 'smo34584');
smo34603v0ar.push(smo34584);
const smo34585 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo34585'] = smo34585;
smo34585.setAttribute('id', 'smo34585');
smo34603v0ar.push(smo34585);
const smo34586 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo34586'] = smo34586;
smo34586.setAttribute('id', 'smo34586');
smo34603v0ar.push(smo34586);
const smo34587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo34587'] = smo34587;
smo34587.setAttribute('id', 'smo34587');
smo34603v0ar.push(smo34587);
smo34603v0.addTickables(smo34603v0ar)
fmtsmo346032.joinVoices([smo34603v0]);
const fmtsmo357242 = new VF.Formatter();
//
// voices and notes for stave 2 2
const smo35724v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35724v0ar = [];
const smo35704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo35704'] = smo35704;
smo35704.setAttribute('id', 'smo35704');
smo35724v0ar.push(smo35704);
const smo35705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo35705'] = smo35705;
smo35705.setAttribute('id', 'smo35705');
smo35724v0ar.push(smo35705);
const smo35706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo35706'] = smo35706;
smo35706.setAttribute('id', 'smo35706');
smo35724v0ar.push(smo35706);
const smo35707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo35707'] = smo35707;
smo35707.setAttribute('id', 'smo35707');
smo35724v0ar.push(smo35707);
const smo35708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo35708'] = smo35708;
smo35708.setAttribute('id', 'smo35708');
smo35724v0ar.push(smo35708);
smo35724v0.addTickables(smo35724v0ar)
fmtsmo357242.joinVoices([smo35724v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
const dirsmo42865 = smo34583.getStemDirection();
smo34583.setStemDirection(dirsmo42865);
smo34584.setStemDirection(dirsmo42865);
smo34585.setStemDirection(dirsmo42865);
const smo42865 = new VF.Beam([smo34583,smo34584,smo34585]);
const dirsmo42868 = smo35704.getStemDirection();
smo35704.setStemDirection(dirsmo42868);
smo35705.setStemDirection(dirsmo42868);
smo35706.setStemDirection(dirsmo42868);
const smo42868 = new VF.Beam([smo35704,smo35705,smo35706]);
 
// formatting measures in staff group smo36899
fmtsmo331982.format([smo33198v0,smo34603v0,smo35724v0], 146);
const stavesmo33198 = new VF.Stave(357, 119, 160);
stavesmo33198.setAttribute('id', 'stavesmo33198');
stavesmo33198.setBegBarType(VF.Barline.type.NONE);
stavesmo33198.setContext(context);
stavesmo33198.draw();
smo33198v0.draw(context, stavesmo33198);
const stavesmo34603 = new VF.Stave(357, 226, 160);
stavesmo34603.setAttribute('id', 'stavesmo34603');
stavesmo34603.setBegBarType(VF.Barline.type.NONE);
stavesmo34603.setContext(context);
stavesmo34603.draw();
smo34603v0.draw(context, stavesmo34603);
smo42865.setContext(context);
smo42865.draw();
const stavesmo35724 = new VF.Stave(357, 301, 160);
stavesmo35724.setAttribute('id', 'stavesmo35724');
stavesmo35724.setBegBarType(VF.Barline.type.NONE);
stavesmo35724.setContext(context);
stavesmo35724.draw();
smo35724v0.draw(context, stavesmo35724);
smo42868.setContext(context);
smo42868.draw();
const fmtsmo332153 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo33215v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33215v0ar = [];
const smo33199 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33199'] = smo33199;
smo33199.setAttribute('id', 'smo33199');
smo33199.addModifier(new VF.Dot(), 0);
smo33215v0ar.push(smo33199);
smo33215v0.addTickables(smo33215v0ar)
fmtsmo332153.joinVoices([smo33215v0]);
const fmtsmo346243 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo34624v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34624v0ar = [];
const smo34604 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo34604'] = smo34604;
smo34604.setAttribute('id', 'smo34604');
smo34624v0ar.push(smo34604);
const smo34605 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo34605'] = smo34605;
smo34605.setAttribute('id', 'smo34605');
smo34624v0ar.push(smo34605);
const smo34606 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo34606'] = smo34606;
smo34606.setAttribute('id', 'smo34606');
smo34624v0ar.push(smo34606);
const smo34607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo34607'] = smo34607;
smo34607.setAttribute('id', 'smo34607');
smo34624v0ar.push(smo34607);
const smo34608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34608'] = smo34608;
smo34608.setAttribute('id', 'smo34608');
smo34624v0ar.push(smo34608);
smo34624v0.addTickables(smo34624v0ar)
fmtsmo346243.joinVoices([smo34624v0]);
const fmtsmo357443 = new VF.Formatter();
//
// voices and notes for stave 2 3
const smo35744v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35744v0ar = [];
const smo35725 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo35725'] = smo35725;
smo35725.setAttribute('id', 'smo35725');
smo35744v0ar.push(smo35725);
const smo35726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo35726'] = smo35726;
smo35726.setAttribute('id', 'smo35726');
smo35744v0ar.push(smo35726);
const smo35727 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo35727'] = smo35727;
smo35727.setAttribute('id', 'smo35727');
smo35744v0ar.push(smo35727);
const smo35728 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n","f#/3/n"]}'))
noteHash['smo35728'] = smo35728;
smo35728.setAttribute('id', 'smo35728');
smo35728.addModifier(new VF.Dot(), 0);
smo35728.addModifier(new VF.Dot(), 1);
smo35744v0ar.push(smo35728);
smo35744v0.addTickables(smo35744v0ar)
fmtsmo357443.joinVoices([smo35744v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
const dirsmo42873 = smo34604.getStemDirection();
smo34604.setStemDirection(dirsmo42873);
smo34605.setStemDirection(dirsmo42873);
smo34606.setStemDirection(dirsmo42873);
const smo42873 = new VF.Beam([smo34604,smo34605,smo34606]);
const dirsmo42876 = smo35725.getStemDirection();
smo35725.setStemDirection(dirsmo42876);
smo35726.setStemDirection(dirsmo42876);
smo35727.setStemDirection(dirsmo42876);
const smo42876 = new VF.Beam([smo35725,smo35726,smo35727]);
 
// formatting measures in staff group smo36899
fmtsmo332153.format([smo33215v0,smo34624v0,smo35744v0], 160);
const stavesmo33215 = new VF.Stave(517, 119, 174);
stavesmo33215.setAttribute('id', 'stavesmo33215');
stavesmo33215.setBegBarType(VF.Barline.type.NONE);
stavesmo33215.setContext(context);
stavesmo33215.draw();
smo33215v0.draw(context, stavesmo33215);
const stavesmo34624 = new VF.Stave(517, 226, 174);
stavesmo34624.setAttribute('id', 'stavesmo34624');
stavesmo34624.setBegBarType(VF.Barline.type.NONE);
stavesmo34624.setContext(context);
stavesmo34624.draw();
smo34624v0.draw(context, stavesmo34624);
smo42873.setContext(context);
smo42873.draw();
const stavesmo35744 = new VF.Stave(517, 301, 174);
stavesmo35744.setAttribute('id', 'stavesmo35744');
stavesmo35744.setBegBarType(VF.Barline.type.NONE);
stavesmo35744.setContext(context);
stavesmo35744.draw();
smo35744v0.draw(context, stavesmo35744);
smo42876.setContext(context);
smo42876.draw();
const fmtsmo332324 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo33232v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33232v0ar = [];
const smo33216 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33216'] = smo33216;
smo33216.setAttribute('id', 'smo33216');
smo33216.addModifier(new VF.Dot(), 0);
smo33232v0ar.push(smo33216);
smo33232v0.addTickables(smo33232v0ar)
fmtsmo332324.joinVoices([smo33232v0]);
const fmtsmo346414 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo34641v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34641v0ar = [];
const smo34625 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo34625'] = smo34625;
smo34625.setAttribute('id', 'smo34625');
smo34625.addModifier(new VF.Dot(), 0);
smo34641v0ar.push(smo34625);
smo34641v0.addTickables(smo34641v0ar)
fmtsmo346414.joinVoices([smo34641v0]);
const fmtsmo357644 = new VF.Formatter();
//
// voices and notes for stave 2 4
const smo35764v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35764v0ar = [];
const smo35745 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35745'] = smo35745;
smo35745.setAttribute('id', 'smo35745');
smo35764v0ar.push(smo35745);
const smo35746 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35746'] = smo35746;
smo35746.setAttribute('id', 'smo35746');
smo35764v0ar.push(smo35746);
const smo35747 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35747'] = smo35747;
smo35747.setAttribute('id', 'smo35747');
smo35764v0ar.push(smo35747);
const smo35748 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35748'] = smo35748;
smo35748.setAttribute('id', 'smo35748');
smo35764v0ar.push(smo35748);
smo35764v0.addTickables(smo35764v0ar)
fmtsmo357644.joinVoices([smo35764v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo332324.format([smo33232v0,smo34641v0,smo35764v0], 127);
const stavesmo33232 = new VF.Stave(691, 119, 183);
stavesmo33232.setAttribute('id', 'stavesmo33232');
stavesmo33232.setBegBarType(4);
stavesmo33232.setContext(context);
stavesmo33232.draw();
smo33232v0.draw(context, stavesmo33232);
const stavesmo34641 = new VF.Stave(691, 226, 183);
stavesmo34641.setAttribute('id', 'stavesmo34641');
stavesmo34641.setBegBarType(4);
stavesmo34641.setContext(context);
stavesmo34641.draw();
smo34641v0.draw(context, stavesmo34641);
const stavesmo35764 = new VF.Stave(691, 301, 183);
stavesmo35764.setAttribute('id', 'stavesmo35764');
stavesmo35764.setBegBarType(4);
stavesmo35764.addClef('bass');
stavesmo35764.setContext(context);
stavesmo35764.draw();
smo35764v0.draw(context, stavesmo35764);
const fmtsmo332515 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo33251v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33251v0ar = [];
const smo33233 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33233'] = smo33233;
smo33233.setAttribute('id', 'smo33233');
smo33233.addModifier(new VF.Dot(), 0);
smo33251v0ar.push(smo33233);
const smo33234 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo33234'] = smo33234;
smo33234.setAttribute('id', 'smo33234');
smo33234.addModifier(new VF.Dot(), 0);
const smo33235 = new VF.Annotation('Mein');
smo33235.setAttribute('id', 'smo33235');
smo33235.setFont('Merriweather', 12, 'normal');
smo33235.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33234.addModifier(smo33235);
smo33235.addClass('lyric lyric-0');
smo33251v0ar.push(smo33234);
smo33251v0.addTickables(smo33251v0ar)
fmtsmo332515.joinVoices([smo33251v0]);
const fmtsmo346595 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo34659v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34659v0ar = [];
const smo34642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo34642'] = smo34642;
smo34642.setAttribute('id', 'smo34642');
smo34642.addModifier(new VF.Dot(), 0);
smo34659v0ar.push(smo34642);
const smo34643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34643'] = smo34643;
smo34643.setAttribute('id', 'smo34643');
smo34643.addModifier(new VF.Dot(), 0);
smo34659v0ar.push(smo34643);
smo34659v0.addTickables(smo34659v0ar)
fmtsmo346595.joinVoices([smo34659v0]);
const fmtsmo357845 = new VF.Formatter();
//
// voices and notes for stave 2 5
const smo35784v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35784v0ar = [];
const smo35765 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35765'] = smo35765;
smo35765.setAttribute('id', 'smo35765');
smo35784v0ar.push(smo35765);
const smo35766 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35766'] = smo35766;
smo35766.setAttribute('id', 'smo35766');
smo35784v0ar.push(smo35766);
const smo35767 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35767'] = smo35767;
smo35767.setAttribute('id', 'smo35767');
smo35784v0ar.push(smo35767);
const smo35768 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35768'] = smo35768;
smo35768.setAttribute('id', 'smo35768');
smo35784v0ar.push(smo35768);
smo35784v0.addTickables(smo35784v0ar)
fmtsmo357845.joinVoices([smo35784v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo332515.format([smo33251v0,smo34659v0,smo35784v0], 155);
const stavesmo33251 = new VF.Stave(874, 119, 169);
stavesmo33251.setAttribute('id', 'stavesmo33251');
stavesmo33251.setBegBarType(VF.Barline.type.NONE);
stavesmo33251.setContext(context);
stavesmo33251.draw();
smo33251v0.draw(context, stavesmo33251);
const stavesmo34659 = new VF.Stave(874, 226, 169);
stavesmo34659.setAttribute('id', 'stavesmo34659');
stavesmo34659.setBegBarType(VF.Barline.type.NONE);
stavesmo34659.setContext(context);
stavesmo34659.draw();
smo34659v0.draw(context, stavesmo34659);
const stavesmo35784 = new VF.Stave(874, 301, 169);
stavesmo35784.setAttribute('id', 'stavesmo35784');
stavesmo35784.setBegBarType(VF.Barline.type.NONE);
stavesmo35784.setContext(context);
stavesmo35784.draw();
smo35784v0.draw(context, stavesmo35784);
const fmtsmo332696 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo33269v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33269v0ar = [];
const smo33252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33252'] = smo33252;
smo33252.setAttribute('id', 'smo33252');
smo33252.addModifier(new VF.Dot(), 0);
const smo33253 = new VF.Annotation('Shatz,');
smo33253.setAttribute('id', 'smo33253');
smo33253.setFont('Merriweather', 12, 'normal');
smo33253.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33252.addModifier(smo33253);
smo33253.addClass('lyric lyric-0');
smo33269v0ar.push(smo33252);
smo33269v0.addTickables(smo33269v0ar)
fmtsmo332696.joinVoices([smo33269v0]);
const fmtsmo346766 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo34676v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34676v0ar = [];
const smo34660 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","f#/4/n"]}'))
noteHash['smo34660'] = smo34660;
smo34660.setAttribute('id', 'smo34660');
smo34660.addModifier(new VF.Dot(), 0);
smo34660.addModifier(new VF.Dot(), 1);
smo34676v0ar.push(smo34660);
smo34676v0.addTickables(smo34676v0ar)
fmtsmo346766.joinVoices([smo34676v0]);
const fmtsmo358046 = new VF.Formatter();
//
// voices and notes for stave 2 6
const smo35804v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35804v0ar = [];
const smo35785 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35785'] = smo35785;
smo35785.setAttribute('id', 'smo35785');
smo35804v0ar.push(smo35785);
const smo35786 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35786'] = smo35786;
smo35786.setAttribute('id', 'smo35786');
smo35804v0ar.push(smo35786);
const smo35787 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35787'] = smo35787;
smo35787.setAttribute('id', 'smo35787');
smo35804v0ar.push(smo35787);
const smo35788 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35788'] = smo35788;
smo35788.setAttribute('id', 'smo35788');
smo35804v0ar.push(smo35788);
smo35804v0.addTickables(smo35804v0ar)
fmtsmo358046.joinVoices([smo35804v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo332696.format([smo33269v0,smo34676v0,smo35804v0], 154);
const stavesmo33269 = new VF.Stave(1043, 119, 168);
stavesmo33269.setAttribute('id', 'stavesmo33269');
stavesmo33269.setBegBarType(VF.Barline.type.NONE);
stavesmo33269.setContext(context);
stavesmo33269.draw();
smo33269v0.draw(context, stavesmo33269);
const stavesmo34676 = new VF.Stave(1043, 226, 168);
stavesmo34676.setAttribute('id', 'stavesmo34676');
stavesmo34676.setBegBarType(VF.Barline.type.NONE);
stavesmo34676.setContext(context);
stavesmo34676.draw();
smo34676v0.draw(context, stavesmo34676);
const stavesmo35804 = new VF.Stave(1043, 301, 168);
stavesmo35804.setAttribute('id', 'stavesmo35804');
stavesmo35804.setBegBarType(VF.Barline.type.NONE);
stavesmo35804.setContext(context);
stavesmo35804.draw();
smo35804v0.draw(context, stavesmo35804);
const rightsmo36899stavesmo332692 = new VF.StaveConnector(stavesmo33269, stavesmo35804).setType(0);
rightsmo36899stavesmo332692.setContext(context).draw();
const fmtsmo332997 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo33299v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33299v0ar = [];
const smo33270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33270'] = smo33270;
smo33270.setAttribute('id', 'smo33270');
smo33299v0ar.push(smo33270);
const smo33272 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo33272'] = smo33272;
smo33272.setAttribute('id', 'smo33272');
const smo33273 = new VF.Annotation('der');
smo33273.setAttribute('id', 'smo33273');
smo33273.setFont('Merriweather', 12, 'normal');
smo33273.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33272.addModifier(smo33273);
smo33273.addClass('lyric lyric-0');
const smo33274 = new VF.Annotation('hat');
smo33274.setAttribute('id', 'smo33274');
smo33274.setFont('Merriweather', 12, 'normal');
smo33274.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33272.addModifier(smo33274);
smo33274.addClass('lyric lyric-1');
smo33299v0ar.push(smo33272);
const smo33275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo33275'] = smo33275;
smo33275.setAttribute('id', 'smo33275');
const smo33276 = new VF.Annotation('is');
smo33276.setAttribute('id', 'smo33276');
smo33276.setFont('Merriweather', 12, 'normal');
smo33276.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33275.addModifier(smo33276);
smo33276.addClass('lyric lyric-0');
const smo33277 = new VF.Annotation('vie');
smo33277.setAttribute('id', 'smo33277');
smo33277.setFont('Merriweather', 12, 'normal');
smo33277.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33275.addModifier(smo33277);
smo33277.addClass('lyric lyric-1 lyric-hyphen');
smo33299v0ar.push(smo33275);
const smo33278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo33278'] = smo33278;
smo33278.setAttribute('id', 'smo33278');
const smo33279 = new VF.Annotation('Po');
smo33279.setAttribute('id', 'smo33279');
smo33279.setFont('Merriweather', 12, 'normal');
smo33279.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33278.addModifier(smo33279);
smo33279.addClass('lyric lyric-0 lyric-hyphen');
const smo33280 = new VF.Annotation('les');
smo33280.setAttribute('id', 'smo33280');
smo33280.setFont('Merriweather', 12, 'normal');
smo33280.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33278.addModifier(smo33280);
smo33280.addClass('lyric lyric-1');
smo33299v0ar.push(smo33278);
const smo33281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo33281'] = smo33281;
smo33281.setAttribute('id', 'smo33281');
const smo33282 = new VF.Annotation('stil');
smo33282.setAttribute('id', 'smo33282');
smo33282.setFont('Merriweather', 12, 'normal');
smo33282.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33281.addModifier(smo33282);
smo33282.addClass('lyric lyric-0 lyric-hyphen');
const smo33283 = new VF.Annotation('ge');
smo33283.setAttribute('id', 'smo33283');
smo33283.setFont('Merriweather', 12, 'normal');
smo33283.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33281.addModifier(smo33283);
smo33283.addClass('lyric lyric-1 lyric-hyphen');
smo33299v0ar.push(smo33281);
smo33299v0.addTickables(smo33299v0ar)
fmtsmo332997.joinVoices([smo33299v0]);
const fmtsmo346937 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo34693v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34693v0ar = [];
const smo34677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","f#/4/n"]}'))
noteHash['smo34677'] = smo34677;
smo34677.setAttribute('id', 'smo34677');
smo34677.addModifier(new VF.Dot(), 0);
smo34677.addModifier(new VF.Dot(), 1);
smo34693v0ar.push(smo34677);
smo34693v0.addTickables(smo34693v0ar)
fmtsmo346937.joinVoices([smo34693v0]);
const fmtsmo358247 = new VF.Formatter();
//
// voices and notes for stave 2 7
const smo35824v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35824v0ar = [];
const smo35805 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35805'] = smo35805;
smo35805.setAttribute('id', 'smo35805');
smo35824v0ar.push(smo35805);
const smo35806 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35806'] = smo35806;
smo35806.setAttribute('id', 'smo35806');
smo35824v0ar.push(smo35806);
const smo35807 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35807'] = smo35807;
smo35807.setAttribute('id', 'smo35807');
smo35824v0ar.push(smo35807);
const smo35808 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35808'] = smo35808;
smo35808.setAttribute('id', 'smo35808');
smo35824v0ar.push(smo35808);
smo35824v0.addTickables(smo35824v0ar)
fmtsmo358247.joinVoices([smo35824v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
const dirsmo42901 = smo33275.getStemDirection();
smo33275.setStemDirection(dirsmo42901);
smo33278.setStemDirection(dirsmo42901);
smo33281.setStemDirection(dirsmo42901);
const smo42901 = new VF.Beam([smo33275,smo33278,smo33281]);
 
// formatting measures in staff group smo36899
fmtsmo332997.format([smo33299v0,smo34693v0,smo35824v0], 232);
const stavesmo33299 = new VF.Stave(66, 451, 306);
stavesmo33299.setAttribute('id', 'stavesmo33299');
stavesmo33299.setBegBarType(1);
stavesmo33299.addClef('treble');
const keysmo33299 = new VF.KeySignature('G');
keysmo33299.addToStave(stavesmo33299);
stavesmo33299.setContext(context);
stavesmo33299.draw();
smo33299v0.draw(context, stavesmo33299);
smo42901.setContext(context);
smo42901.draw();
const stavesmo34693 = new VF.Stave(66, 566, 306);
stavesmo34693.setAttribute('id', 'stavesmo34693');
stavesmo34693.setBegBarType(1);
stavesmo34693.addClef('treble');
const keysmo34693 = new VF.KeySignature('G');
keysmo34693.addToStave(stavesmo34693);
stavesmo34693.setContext(context);
stavesmo34693.draw();
smo34693v0.draw(context, stavesmo34693);
const stavesmo35824 = new VF.Stave(66, 699, 306);
stavesmo35824.setAttribute('id', 'stavesmo35824');
stavesmo35824.setBegBarType(1);
stavesmo35824.addClef('bass');
const keysmo35824 = new VF.KeySignature('G');
keysmo35824.addToStave(stavesmo35824);
stavesmo35824.setContext(context);
stavesmo35824.draw();
smo35824v0.draw(context, stavesmo35824);
const leftsmo36899stavesmo332992 = new VF.StaveConnector(stavesmo33299, stavesmo35824).setType(1);
leftsmo36899stavesmo332992.setContext(context).draw();
const fmtsmo333188 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo33318v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33318v0ar = [];
const smo33300 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33300'] = smo33300;
smo33300.setAttribute('id', 'smo33300');
smo33300.addModifier(new VF.Dot(), 0);
const smo33301 = new VF.Annotation('lion,');
smo33301.setAttribute('id', 'smo33301');
smo33301.setFont('Merriweather', 12, 'normal');
smo33301.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33300.addModifier(smo33301);
smo33301.addClass('lyric lyric-0');
const smo33302 = new VF.Annotation('sehn');
smo33302.setAttribute('id', 'smo33302');
smo33302.setFont('Merriweather', 12, 'normal');
smo33302.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33300.addModifier(smo33302);
smo33302.addClass('lyric lyric-1');
smo33318v0ar.push(smo33300);
smo33318v0.addTickables(smo33318v0ar)
fmtsmo333188.joinVoices([smo33318v0]);
const fmtsmo347108 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo34710v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34710v0ar = [];
const smo34694 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
noteHash['smo34694'] = smo34694;
smo34694.setAttribute('id', 'smo34694');
smo34694.addModifier(new VF.Dot(), 0);
smo34694.addModifier(new VF.Dot(), 1);
smo34710v0ar.push(smo34694);
smo34710v0.addTickables(smo34710v0ar)
fmtsmo347108.joinVoices([smo34710v0]);
const fmtsmo358498 = new VF.Formatter();
//
// voices and notes for stave 2 8
const smo35849v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35849v0ar = [];
const smo35825 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35825'] = smo35825;
smo35825.setAttribute('id', 'smo35825');
smo35849v0ar.push(smo35825);
const smo35826 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35826'] = smo35826;
smo35826.setAttribute('id', 'smo35826');
smo35849v0ar.push(smo35826);
const smo35827 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35827'] = smo35827;
smo35827.setAttribute('id', 'smo35827');
smo35849v0ar.push(smo35827);
const smo35828 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35828'] = smo35828;
smo35828.setAttribute('id', 'smo35828');
smo35849v0ar.push(smo35828);
smo35849v0.addTickables(smo35849v0ar)
fmtsmo358498.joinVoices([smo35849v0]);
const smo35849v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35849v1ar = [];
const smo35829 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["cn/4/r"]}'))
noteHash['smo35829'] = smo35829;
smo35829.setAttribute('id', 'smo35829');
smo35849v1ar.push(smo35829);
const smo35830 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo35830'] = smo35830;
smo35830.setAttribute('id', 'smo35830');
smo35849v1ar.push(smo35830);
const smo35831 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo35831'] = smo35831;
smo35831.setAttribute('id', 'smo35831');
smo35849v1ar.push(smo35831);
const smo35832 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo35832'] = smo35832;
smo35832.setAttribute('id', 'smo35832');
smo35849v1ar.push(smo35832);
const smo35833 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo35833'] = smo35833;
smo35833.setAttribute('id', 'smo35833');
smo35849v1ar.push(smo35833);
smo35849v1.addTickables(smo35849v1ar)
fmtsmo358498.joinVoices([smo35849v1]);
// create beam groups and tuplets for format grp smo36899 before formatting
const dirsmo42912 = smo35831.getStemDirection();
smo35831.setStemDirection(dirsmo42912);
smo35832.setStemDirection(dirsmo42912);
smo35833.setStemDirection(dirsmo42912);
const smo42912 = new VF.Beam([smo35831,smo35832,smo35833]);
 
// formatting measures in staff group smo36899
fmtsmo333188.format([smo33318v0,smo34710v0,smo35849v0,smo35849v1], 161);
const stavesmo33318 = new VF.Stave(372, 451, 175);
stavesmo33318.setAttribute('id', 'stavesmo33318');
stavesmo33318.setBegBarType(VF.Barline.type.NONE);
stavesmo33318.setContext(context);
stavesmo33318.draw();
smo33318v0.draw(context, stavesmo33318);
const stavesmo34710 = new VF.Stave(372, 566, 175);
stavesmo34710.setAttribute('id', 'stavesmo34710');
stavesmo34710.setBegBarType(VF.Barline.type.NONE);
stavesmo34710.setContext(context);
stavesmo34710.draw();
smo34710v0.draw(context, stavesmo34710);
const stavesmo35849 = new VF.Stave(372, 699, 175);
stavesmo35849.setAttribute('id', 'stavesmo35849');
stavesmo35849.setBegBarType(VF.Barline.type.NONE);
stavesmo35849.setContext(context);
stavesmo35849.draw();
smo35849v0.draw(context, stavesmo35849);
smo35849v1.draw(context, stavesmo35849);
smo42912.setContext(context);
smo42912.draw();
const fmtsmo333489 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo33348v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33348v0ar = [];
const smo33319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33319'] = smo33319;
smo33319.setAttribute('id', 'smo33319');
smo33348v0ar.push(smo33319);
const smo33321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo33321'] = smo33321;
smo33321.setAttribute('id', 'smo33321');
const smo33322 = new VF.Annotation('er');
smo33322.setAttribute('id', 'smo33322');
smo33322.setFont('Merriweather', 12, 'normal');
smo33322.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33321.addModifier(smo33322);
smo33322.addClass('lyric lyric-0');
const smo33323 = new VF.Annotation('er');
smo33323.setAttribute('id', 'smo33323');
smo33323.setFont('Merriweather', 12, 'normal');
smo33323.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33321.addModifier(smo33323);
smo33323.addClass('lyric lyric-1');
smo33348v0ar.push(smo33321);
const smo33324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo33324'] = smo33324;
smo33324.setAttribute('id', 'smo33324');
const smo33325 = new VF.Annotation('fährt');
smo33325.setAttribute('id', 'smo33325');
smo33325.setFont('Merriweather', 12, 'normal');
smo33325.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33324.addModifier(smo33325);
smo33325.addClass('lyric lyric-0');
const smo33326 = new VF.Annotation('traf');
smo33326.setAttribute('id', 'smo33326');
smo33326.setFont('Merriweather', 12, 'normal');
smo33326.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33324.addModifier(smo33326);
smo33326.addClass('lyric lyric-1');
smo33348v0ar.push(smo33324);
const smo33327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo33327'] = smo33327;
smo33327.setAttribute('id', 'smo33327');
const smo33328 = new VF.Annotation('durch');
smo33328.setAttribute('id', 'smo33328');
smo33328.setFont('Merriweather', 12, 'normal');
smo33328.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33327.addModifier(smo33328);
smo33328.addClass('lyric lyric-0');
const smo33329 = new VF.Annotation('la');
smo33329.setAttribute('id', 'smo33329');
smo33329.setFont('Merriweather', 12, 'normal');
smo33329.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33327.addModifier(smo33329);
smo33329.addClass('lyric lyric-1');
smo33348v0ar.push(smo33327);
const smo33330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo33330'] = smo33330;
smo33330.setAttribute('id', 'smo33330');
const smo33331 = new VF.Annotation('de');
smo33331.setAttribute('id', 'smo33331');
smo33331.setFont('Merriweather', 12, 'normal');
smo33331.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33330.addModifier(smo33331);
smo33331.addClass('lyric lyric-0');
const smo33332 = new VF.Annotation('den');
smo33332.setAttribute('id', 'smo33332');
smo33332.setFont('Merriweather', 12, 'normal');
smo33332.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33330.addModifier(smo33332);
smo33332.addClass('lyric lyric-1');
smo33348v0ar.push(smo33330);
smo33348v0.addTickables(smo33348v0ar)
fmtsmo333489.joinVoices([smo33348v0]);
const fmtsmo347279 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo34727v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34727v0ar = [];
const smo34711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
noteHash['smo34711'] = smo34711;
smo34711.setAttribute('id', 'smo34711');
smo34711.addModifier(new VF.Dot(), 0);
smo34711.addModifier(new VF.Dot(), 1);
smo34727v0ar.push(smo34711);
smo34727v0.addTickables(smo34727v0ar)
fmtsmo347279.joinVoices([smo34727v0]);
const fmtsmo358719 = new VF.Formatter();
//
// voices and notes for stave 2 9
const smo35871v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35871v0ar = [];
const smo35850 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35850'] = smo35850;
smo35850.setAttribute('id', 'smo35850');
smo35871v0ar.push(smo35850);
const smo35851 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35851'] = smo35851;
smo35851.setAttribute('id', 'smo35851');
smo35871v0ar.push(smo35851);
const smo35852 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35852'] = smo35852;
smo35852.setAttribute('id', 'smo35852');
smo35871v0ar.push(smo35852);
const smo35853 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35853'] = smo35853;
smo35853.setAttribute('id', 'smo35853');
smo35871v0ar.push(smo35853);
smo35871v0.addTickables(smo35871v0ar)
fmtsmo358719.joinVoices([smo35871v0]);
const smo35871v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35871v1ar = [];
const smo35854 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo35854'] = smo35854;
smo35854.setAttribute('id', 'smo35854');
smo35854.addModifier(new VF.Dot(), 0);
smo35871v1ar.push(smo35854);
const smo35855 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo35855'] = smo35855;
smo35855.setAttribute('id', 'smo35855');
smo35855.addModifier(new VF.Dot(), 0);
smo35871v1ar.push(smo35855);
smo35871v1.addTickables(smo35871v1ar)
fmtsmo358719.joinVoices([smo35871v1]);
// create beam groups and tuplets for format grp smo36899 before formatting
const dirsmo42915 = smo33324.getStemDirection();
smo33324.setStemDirection(dirsmo42915);
smo33327.setStemDirection(dirsmo42915);
smo33330.setStemDirection(dirsmo42915);
const smo42915 = new VF.Beam([smo33324,smo33327,smo33330]);
 
// formatting measures in staff group smo36899
fmtsmo333489.format([smo33348v0,smo34727v0,smo35871v0,smo35871v1], 282);
const stavesmo33348 = new VF.Stave(547, 451, 296);
stavesmo33348.setAttribute('id', 'stavesmo33348');
stavesmo33348.setBegBarType(VF.Barline.type.NONE);
stavesmo33348.setContext(context);
stavesmo33348.draw();
smo33348v0.draw(context, stavesmo33348);
smo42915.setContext(context);
smo42915.draw();
const stavesmo34727 = new VF.Stave(547, 566, 296);
stavesmo34727.setAttribute('id', 'stavesmo34727');
stavesmo34727.setBegBarType(VF.Barline.type.NONE);
stavesmo34727.setContext(context);
stavesmo34727.draw();
smo34727v0.draw(context, stavesmo34727);
const stavesmo35871 = new VF.Stave(547, 699, 296);
stavesmo35871.setAttribute('id', 'stavesmo35871');
stavesmo35871.setBegBarType(VF.Barline.type.NONE);
stavesmo35871.setContext(context);
stavesmo35871.draw();
smo35871v0.draw(context, stavesmo35871);
smo35871v1.draw(context, stavesmo35871);
const fmtsmo3337010 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo33370v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33370v0ar = [];
const smo33349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo33349'] = smo33349;
smo33349.setAttribute('id', 'smo33349');
smo33349.addModifier(new VF.Dot(), 0);
const smo33350 = new VF.Annotation('Fel');
smo33350.setAttribute('id', 'smo33350');
smo33350.setFont('Merriweather', 12, 'normal');
smo33350.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33349.addModifier(smo33350);
smo33350.addClass('lyric lyric-0 lyric-hyphen');
const smo33351 = new VF.Annotation('Städt');
smo33351.setAttribute('id', 'smo33351');
smo33351.setFont('Merriweather', 12, 'normal');
smo33351.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33349.addModifier(smo33351);
smo33351.addClass('lyric lyric-1 lyric-hyphen');
smo33370v0ar.push(smo33349);
const smo33352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo33352'] = smo33352;
smo33352.setAttribute('id', 'smo33352');
smo33352.addModifier(new VF.Dot(), 0);
const smo33353 = new VF.Annotation('der');
smo33353.setAttribute('id', 'smo33353');
smo33353.setFont('Merriweather', 12, 'normal');
smo33353.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33352.addModifier(smo33353);
smo33353.addClass('lyric lyric-0');
const smo33354 = new VF.Annotation('chen');
smo33354.setAttribute('id', 'smo33354');
smo33354.setFont('Merriweather', 12, 'normal');
smo33354.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33352.addModifier(smo33354);
smo33354.addClass('lyric lyric-1');
smo33370v0ar.push(smo33352);
smo33370v0.addTickables(smo33370v0ar)
fmtsmo3337010.joinVoices([smo33370v0]);
const fmtsmo3474410 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo34744v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34744v0ar = [];
const smo34728 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/3/n","f#/4/n"]}'))
noteHash['smo34728'] = smo34728;
smo34728.setAttribute('id', 'smo34728');
smo34728.addModifier(new VF.Dot(), 0);
smo34728.addModifier(new VF.Dot(), 1);
smo34744v0ar.push(smo34728);
smo34744v0.addTickables(smo34744v0ar)
fmtsmo3474410.joinVoices([smo34744v0]);
const fmtsmo3589110 = new VF.Formatter();
//
// voices and notes for stave 2 10
const smo35891v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35891v0ar = [];
const smo35872 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35872'] = smo35872;
smo35872.setAttribute('id', 'smo35872');
smo35891v0ar.push(smo35872);
const smo35873 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35873'] = smo35873;
smo35873.setAttribute('id', 'smo35873');
smo35891v0ar.push(smo35873);
const smo35874 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35874'] = smo35874;
smo35874.setAttribute('id', 'smo35874');
smo35891v0ar.push(smo35874);
const smo35875 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35875'] = smo35875;
smo35875.setAttribute('id', 'smo35875');
smo35891v0ar.push(smo35875);
smo35891v0.addTickables(smo35891v0ar)
fmtsmo3589110.joinVoices([smo35891v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3337010.format([smo33370v0,smo34744v0,smo35891v0], 174);
const stavesmo33370 = new VF.Stave(843, 451, 188);
stavesmo33370.setAttribute('id', 'stavesmo33370');
stavesmo33370.setBegBarType(VF.Barline.type.NONE);
stavesmo33370.setContext(context);
stavesmo33370.draw();
smo33370v0.draw(context, stavesmo33370);
const stavesmo34744 = new VF.Stave(843, 566, 188);
stavesmo34744.setAttribute('id', 'stavesmo34744');
stavesmo34744.setBegBarType(VF.Barline.type.NONE);
stavesmo34744.setContext(context);
stavesmo34744.draw();
smo34744v0.draw(context, stavesmo34744);
const stavesmo35891 = new VF.Stave(843, 699, 188);
stavesmo35891.setAttribute('id', 'stavesmo35891');
stavesmo35891.setBegBarType(VF.Barline.type.NONE);
stavesmo35891.setContext(context);
stavesmo35891.draw();
smo35891v0.draw(context, stavesmo35891);
const fmtsmo3339211 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo33392v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33392v0ar = [];
const smo33371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo33371'] = smo33371;
smo33371.setAttribute('id', 'smo33371');
smo33371.addModifier(new VF.Dot(), 0);
const smo33372 = new VF.Annotation('Wäl');
smo33372.setAttribute('id', 'smo33372');
smo33372.setFont('Merriweather', 12, 'normal');
smo33372.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33371.addModifier(smo33372);
smo33372.addClass('lyric lyric-0 lyric-hyphen');
const smo33373 = new VF.Annotation('Mäd');
smo33373.setAttribute('id', 'smo33373');
smo33373.setFont('Merriweather', 12, 'normal');
smo33373.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33371.addModifier(smo33373);
smo33373.addClass('lyric lyric-1 lyric-hyphen');
smo33392v0ar.push(smo33371);
const smo33374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo33374'] = smo33374;
smo33374.setAttribute('id', 'smo33374');
smo33374.addModifier(new VF.Dot(), 0);
const smo33375 = new VF.Annotation('der');
smo33375.setAttribute('id', 'smo33375');
smo33375.setFont('Merriweather', 12, 'normal');
smo33375.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33374.addModifier(smo33375);
smo33375.addClass('lyric lyric-0');
const smo33376 = new VF.Annotation('chen');
smo33376.setAttribute('id', 'smo33376');
smo33376.setFont('Merriweather', 12, 'normal');
smo33376.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33374.addModifier(smo33376);
smo33376.addClass('lyric lyric-1');
smo33392v0ar.push(smo33374);
smo33392v0.addTickables(smo33392v0ar)
fmtsmo3339211.joinVoices([smo33392v0]);
const fmtsmo3476111 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo34761v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34761v0ar = [];
const smo34745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/3/n","f#/4/n"]}'))
noteHash['smo34745'] = smo34745;
smo34745.setAttribute('id', 'smo34745');
smo34745.addModifier(new VF.Dot(), 0);
smo34745.addModifier(new VF.Dot(), 1);
smo34761v0ar.push(smo34745);
smo34761v0.addTickables(smo34761v0ar)
fmtsmo3476111.joinVoices([smo34761v0]);
const fmtsmo3591111 = new VF.Formatter();
//
// voices and notes for stave 2 11
const smo35911v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35911v0ar = [];
const smo35892 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35892'] = smo35892;
smo35892.setAttribute('id', 'smo35892');
smo35911v0ar.push(smo35892);
const smo35893 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35893'] = smo35893;
smo35893.setAttribute('id', 'smo35893');
smo35911v0ar.push(smo35893);
const smo35894 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35894'] = smo35894;
smo35894.setAttribute('id', 'smo35894');
smo35911v0ar.push(smo35894);
const smo35895 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35895'] = smo35895;
smo35895.setAttribute('id', 'smo35895');
smo35911v0ar.push(smo35895);
smo35911v0.addTickables(smo35911v0ar)
fmtsmo3591111.joinVoices([smo35911v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3339211.format([smo33392v0,smo34761v0,smo35911v0], 168);
const stavesmo33392 = new VF.Stave(1031, 451, 182);
stavesmo33392.setAttribute('id', 'stavesmo33392');
stavesmo33392.setBegBarType(VF.Barline.type.NONE);
stavesmo33392.setContext(context);
stavesmo33392.draw();
smo33392v0.draw(context, stavesmo33392);
const stavesmo34761 = new VF.Stave(1031, 566, 182);
stavesmo34761.setAttribute('id', 'stavesmo34761');
stavesmo34761.setBegBarType(VF.Barline.type.NONE);
stavesmo34761.setContext(context);
stavesmo34761.draw();
smo34761v0.draw(context, stavesmo34761);
const stavesmo35911 = new VF.Stave(1031, 699, 182);
stavesmo35911.setAttribute('id', 'stavesmo35911');
stavesmo35911.setBegBarType(VF.Barline.type.NONE);
stavesmo35911.setContext(context);
stavesmo35911.draw();
smo35911v0.draw(context, stavesmo35911);
const rightsmo36899stavesmo333922 = new VF.StaveConnector(stavesmo33392, stavesmo35911).setType(0);
rightsmo36899stavesmo333922.setContext(context).draw();
const fmtsmo3342012 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo33420v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33420v0ar = [];
const smo33393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo33393'] = smo33393;
smo33393.setAttribute('id', 'smo33393');
const smo33394 = new VF.Annotation('ü');
smo33394.setAttribute('id', 'smo33394');
smo33394.setFont('Merriweather', 12, 'normal');
smo33394.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33393.addModifier(smo33394);
smo33394.addClass('lyric lyric-0 lyric-hyphen');
const smo33395 = new VF.Annotation('schö');
smo33395.setAttribute('id', 'smo33395');
smo33395.setFont('Merriweather', 12, 'normal');
smo33395.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33393.addModifier(smo33395);
smo33395.addClass('lyric lyric-1 lyric-hyphen');
smo33420v0ar.push(smo33393);
const smo33396 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo33396'] = smo33396;
smo33396.setAttribute('id', 'smo33396');
const smo33397 = new VF.Annotation('ber');
smo33397.setAttribute('id', 'smo33397');
smo33397.setFont('Merriweather', 12, 'normal');
smo33397.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33396.addModifier(smo33397);
smo33397.addClass('lyric lyric-0 lyric-hyphen');
const smo33398 = new VF.Annotation('new');
smo33398.setAttribute('id', 'smo33398');
smo33398.setFont('Merriweather', 12, 'normal');
smo33398.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33396.addModifier(smo33398);
smo33398.addClass('lyric lyric-1');
smo33420v0ar.push(smo33396);
const smo33399 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo33399'] = smo33399;
smo33399.setAttribute('id', 'smo33399');
const smo33400 = new VF.Annotation('das');
smo33400.setAttribute('id', 'smo33400');
smo33400.setFont('Merriweather', 12, 'normal');
smo33400.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33399.addModifier(smo33400);
smo33400.addClass('lyric lyric-0');
const smo33401 = new VF.Annotation('als');
smo33401.setAttribute('id', 'smo33401');
smo33401.setFont('Merriweather', 12, 'normal');
smo33401.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33399.addModifier(smo33401);
smo33401.addClass('lyric lyric-1');
smo33420v0ar.push(smo33399);
const smo33402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33402'] = smo33402;
smo33402.setAttribute('id', 'smo33402');
smo33402.addModifier(new VF.Dot(), 0);
const smo33403 = new VF.Annotation('Land;');
smo33403.setAttribute('id', 'smo33403');
smo33403.setFont('Merriweather', 12, 'normal');
smo33403.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33402.addModifier(smo33403);
smo33403.addClass('lyric lyric-0 lyric-hyphen');
const smo33404 = new VF.Annotation('ich');
smo33404.setAttribute('id', 'smo33404');
smo33404.setFont('Merriweather', 12, 'normal');
smo33404.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33402.addModifier(smo33404);
smo33404.addClass('lyric lyric-1');
smo33420v0ar.push(smo33402);
smo33420v0.addTickables(smo33420v0ar)
fmtsmo3342012.joinVoices([smo33420v0]);
const fmtsmo3478112 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo34781v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34781v0ar = [];
const smo34762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
noteHash['smo34762'] = smo34762;
smo34762.setAttribute('id', 'smo34762');
smo34762.addModifier(new VF.Dot(), 0);
smo34762.addModifier(new VF.Dot(), 1);
smo34781v0ar.push(smo34762);
const smo34763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n"]}'))
noteHash['smo34763'] = smo34763;
smo34763.setAttribute('id', 'smo34763');
smo34781v0ar.push(smo34763);
const smo34764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bn/4/n"]}'))
noteHash['smo34764'] = smo34764;
smo34764.setAttribute('id', 'smo34764');
smo34781v0ar.push(smo34764);
const smo34765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n"]}'))
noteHash['smo34765'] = smo34765;
smo34765.setAttribute('id', 'smo34765');
smo34781v0ar.push(smo34765);
smo34781v0.addTickables(smo34781v0ar)
fmtsmo3478112.joinVoices([smo34781v0]);
const fmtsmo3593112 = new VF.Formatter();
//
// voices and notes for stave 2 12
const smo35931v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35931v0ar = [];
const smo35912 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35912'] = smo35912;
smo35912.setAttribute('id', 'smo35912');
smo35931v0ar.push(smo35912);
const smo35913 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35913'] = smo35913;
smo35913.setAttribute('id', 'smo35913');
smo35931v0ar.push(smo35913);
const smo35914 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35914'] = smo35914;
smo35914.setAttribute('id', 'smo35914');
smo35931v0ar.push(smo35914);
const smo35915 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35915'] = smo35915;
smo35915.setAttribute('id', 'smo35915');
smo35931v0ar.push(smo35915);
smo35931v0.addTickables(smo35931v0ar)
fmtsmo3593112.joinVoices([smo35931v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
const dirsmo42942 = smo33393.getStemDirection();
smo33393.setStemDirection(dirsmo42942);
smo33396.setStemDirection(dirsmo42942);
smo33399.setStemDirection(dirsmo42942);
const smo42942 = new VF.Beam([smo33393,smo33396,smo33399]);
const dirsmo42945 = smo34763.getStemDirection();
smo34763.setStemDirection(dirsmo42945);
smo34764.setStemDirection(dirsmo42945);
smo34765.setStemDirection(dirsmo42945);
const smo42945 = new VF.Beam([smo34763,smo34764,smo34765]);
 
// formatting measures in staff group smo36899
fmtsmo3342012.format([smo33420v0,smo34781v0,smo35931v0], 289);
const stavesmo33420 = new VF.Stave(66, 844, 363);
stavesmo33420.setAttribute('id', 'stavesmo33420');
stavesmo33420.setBegBarType(1);
stavesmo33420.addClef('treble');
const keysmo33420 = new VF.KeySignature('G');
keysmo33420.addToStave(stavesmo33420);
stavesmo33420.setContext(context);
stavesmo33420.draw();
smo33420v0.draw(context, stavesmo33420);
smo42942.setContext(context);
smo42942.draw();
const stavesmo34781 = new VF.Stave(66, 967, 363);
stavesmo34781.setAttribute('id', 'stavesmo34781');
stavesmo34781.setBegBarType(1);
stavesmo34781.addClef('treble');
const keysmo34781 = new VF.KeySignature('G');
keysmo34781.addToStave(stavesmo34781);
stavesmo34781.setContext(context);
stavesmo34781.draw();
smo34781v0.draw(context, stavesmo34781);
smo42945.setContext(context);
smo42945.draw();
const stavesmo35931 = new VF.Stave(66, 1057, 363);
stavesmo35931.setAttribute('id', 'stavesmo35931');
stavesmo35931.setBegBarType(1);
stavesmo35931.addClef('bass');
const keysmo35931 = new VF.KeySignature('G');
keysmo35931.addToStave(stavesmo35931);
stavesmo35931.setContext(context);
stavesmo35931.draw();
smo35931v0.draw(context, stavesmo35931);
const leftsmo36899stavesmo334202 = new VF.StaveConnector(stavesmo33420, stavesmo35931).setType(1);
leftsmo36899stavesmo334202.setContext(context).draw();
const fmtsmo3344313 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo33443v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33443v0ar = [];
const smo33421 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33421'] = smo33421;
smo33421.setAttribute('id', 'smo33421');
const smo33423 = new VF.Annotation('-');
smo33423.setAttribute('id', 'smo33423');
smo33423.setFont('Merriweather', 12, 'normal');
smo33423.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33421.addModifier(smo33423);
smo33423.addClass('lyric lyric-1 lyric-hyphen');
smo33443v0ar.push(smo33421);
const smo33424 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33424'] = smo33424;
smo33424.setAttribute('id', 'smo33424');
smo33443v0ar.push(smo33424);
const smo33425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo33425'] = smo33425;
smo33425.setAttribute('id', 'smo33425');
smo33425.addModifier(new VF.Dot(), 0);
const smo33426 = new VF.Annotation('von');
smo33426.setAttribute('id', 'smo33426');
smo33426.setFont('Merriweather', 12, 'normal');
smo33426.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33425.addModifier(smo33426);
smo33426.addClass('lyric lyric-0');
const smo33427 = new VF.Annotation('Trotz');
smo33427.setAttribute('id', 'smo33427');
smo33427.setFont('Merriweather', 12, 'normal');
smo33427.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33425.addModifier(smo33427);
smo33427.addClass('lyric lyric-1 lyric-hyphen');
smo33443v0ar.push(smo33425);
smo33443v0.addTickables(smo33443v0ar)
fmtsmo3344313.joinVoices([smo33443v0]);
const fmtsmo3479813 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo34798v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34798v0ar = [];
const smo34782 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n"]}'))
noteHash['smo34782'] = smo34782;
smo34782.setAttribute('id', 'smo34782');
smo34782.addModifier(new VF.Dot(), 0);
smo34782.addModifier(new VF.Dot(), 1);
smo34798v0ar.push(smo34782);
smo34798v0.addTickables(smo34798v0ar)
fmtsmo3479813.joinVoices([smo34798v0]);
const fmtsmo3595113 = new VF.Formatter();
//
// voices and notes for stave 2 13
const smo35951v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35951v0ar = [];
const smo35932 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35932'] = smo35932;
smo35932.setAttribute('id', 'smo35932');
smo35951v0ar.push(smo35932);
const smo35933 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35933'] = smo35933;
smo35933.setAttribute('id', 'smo35933');
smo35951v0ar.push(smo35933);
const smo35934 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35934'] = smo35934;
smo35934.setAttribute('id', 'smo35934');
smo35951v0ar.push(smo35934);
const smo35935 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35935'] = smo35935;
smo35935.setAttribute('id', 'smo35935');
smo35951v0ar.push(smo35935);
smo35951v0.addTickables(smo35951v0ar)
fmtsmo3595113.joinVoices([smo35951v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3344313.format([smo33443v0,smo34798v0,smo35951v0], 147);
const stavesmo33443 = new VF.Stave(429, 844, 161);
stavesmo33443.setAttribute('id', 'stavesmo33443');
stavesmo33443.setBegBarType(VF.Barline.type.NONE);
stavesmo33443.setContext(context);
stavesmo33443.draw();
smo33443v0.draw(context, stavesmo33443);
const stavesmo34798 = new VF.Stave(429, 967, 161);
stavesmo34798.setAttribute('id', 'stavesmo34798');
stavesmo34798.setBegBarType(VF.Barline.type.NONE);
stavesmo34798.setContext(context);
stavesmo34798.draw();
smo34798v0.draw(context, stavesmo34798);
const stavesmo35951 = new VF.Stave(429, 1057, 161);
stavesmo35951.setAttribute('id', 'stavesmo35951');
stavesmo35951.setBegBarType(VF.Barline.type.NONE);
stavesmo35951.setContext(context);
stavesmo35951.draw();
smo35951v0.draw(context, stavesmo35951);
const fmtsmo3346214 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo33462v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33462v0ar = [];
const smo33444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33444'] = smo33444;
smo33444.setAttribute('id', 'smo33444');
smo33444.addModifier(new VF.Dot(), 0);
const smo33445 = new VF.Annotation('fern');
smo33445.setAttribute('id', 'smo33445');
smo33445.setFont('Merriweather', 12, 'normal');
smo33445.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33444.addModifier(smo33445);
smo33445.addClass('lyric lyric-0');
const smo33446 = new VF.Annotation('dem');
smo33446.setAttribute('id', 'smo33446');
smo33446.setFont('Merriweather', 12, 'normal');
smo33446.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33444.addModifier(smo33446);
smo33446.addClass('lyric lyric-1');
smo33462v0ar.push(smo33444);
smo33462v0.addTickables(smo33462v0ar)
fmtsmo3346214.joinVoices([smo33462v0]);
const fmtsmo3481514 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo34815v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34815v0ar = [];
const smo34799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/3/n","f#/4/n"]}'))
noteHash['smo34799'] = smo34799;
smo34799.setAttribute('id', 'smo34799');
smo34799.addModifier(new VF.Dot(), 0);
smo34799.addModifier(new VF.Dot(), 1);
smo34815v0ar.push(smo34799);
smo34815v0.addTickables(smo34815v0ar)
fmtsmo3481514.joinVoices([smo34815v0]);
const fmtsmo3597314 = new VF.Formatter();
//
// voices and notes for stave 2 14
const smo35973v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35973v0ar = [];
const smo35952 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo35952'] = smo35952;
smo35952.setAttribute('id', 'smo35952');
smo35973v0ar.push(smo35952);
const smo35953 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo35953'] = smo35953;
smo35953.setAttribute('id', 'smo35953');
smo35973v0ar.push(smo35953);
const smo35954 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo35954'] = smo35954;
smo35954.setAttribute('id', 'smo35954');
smo35973v0ar.push(smo35954);
const smo35955 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo35955'] = smo35955;
smo35955.setAttribute('id', 'smo35955');
smo35973v0ar.push(smo35955);
smo35973v0.addTickables(smo35973v0ar)
fmtsmo3597314.joinVoices([smo35973v0]);
const smo35973v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35973v1ar = [];
const smo35956 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["dn/4/r"]}'))
noteHash['smo35956'] = smo35956;
smo35956.setAttribute('id', 'smo35956');
smo35956.addModifier(new VF.Dot(), 0);
smo35973v1ar.push(smo35956);
const smo35957 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo35957'] = smo35957;
smo35957.setAttribute('id', 'smo35957');
smo35957.addModifier(new VF.Dot(), 0);
smo35973v1ar.push(smo35957);
smo35973v1.addTickables(smo35973v1ar)
fmtsmo3597314.joinVoices([smo35973v1]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3346214.format([smo33462v0,smo34815v0,smo35973v0,smo35973v1], 144);
const stavesmo33462 = new VF.Stave(590, 844, 158);
stavesmo33462.setAttribute('id', 'stavesmo33462');
stavesmo33462.setBegBarType(VF.Barline.type.NONE);
stavesmo33462.setContext(context);
stavesmo33462.draw();
smo33462v0.draw(context, stavesmo33462);
const stavesmo34815 = new VF.Stave(590, 967, 158);
stavesmo34815.setAttribute('id', 'stavesmo34815');
stavesmo34815.setBegBarType(VF.Barline.type.NONE);
stavesmo34815.setContext(context);
stavesmo34815.draw();
smo34815v0.draw(context, stavesmo34815);
const stavesmo35973 = new VF.Stave(590, 1057, 158);
stavesmo35973.setAttribute('id', 'stavesmo35973');
stavesmo35973.setBegBarType(VF.Barline.type.NONE);
stavesmo35973.setContext(context);
stavesmo35973.draw();
smo35973v0.draw(context, stavesmo35973);
smo35973v1.draw(context, stavesmo35973);
const fmtsmo3349215 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo33492v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33492v0ar = [];
const smo33463 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33463'] = smo33463;
smo33463.setAttribute('id', 'smo33463');
const smo33464 = new VF.Annotation('-');
smo33464.setAttribute('id', 'smo33464');
smo33464.setFont('Merriweather', 12, 'normal');
smo33464.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33463.addModifier(smo33464);
smo33464.addClass('lyric lyric-0 lyric-hyphen');
smo33492v0ar.push(smo33463);
const smo33465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo33465'] = smo33465;
smo33465.setAttribute('id', 'smo33465');
const smo33466 = new VF.Annotation('er');
smo33466.setAttribute('id', 'smo33466');
smo33466.setFont('Merriweather', 12, 'normal');
smo33466.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33465.addModifier(smo33466);
smo33466.addClass('lyric lyric-0 lyric-hyphen');
const smo33467 = new VF.Annotation('tat');
smo33467.setAttribute('id', 'smo33467');
smo33467.setFont('Merriweather', 12, 'normal');
smo33467.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33465.addModifier(smo33467);
smo33467.addClass('lyric lyric-1');
smo33492v0ar.push(smo33465);
const smo33468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo33468'] = smo33468;
smo33468.setAttribute('id', 'smo33468');
const smo33469 = new VF.Annotation('kenn');
smo33469.setAttribute('id', 'smo33469');
smo33469.setFont('Merriweather', 12, 'normal');
smo33469.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33468.addModifier(smo33469);
smo33469.addClass('lyric lyric-0');
const smo33470 = new VF.Annotation('er');
smo33470.setAttribute('id', 'smo33470');
smo33470.setFont('Merriweather', 12, 'normal');
smo33470.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33468.addModifier(smo33470);
smo33470.addClass('lyric lyric-1');
smo33492v0ar.push(smo33468);
const smo33471 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo33471'] = smo33471;
smo33471.setAttribute('id', 'smo33471');
const smo33472 = new VF.Annotation('ich');
smo33472.setAttribute('id', 'smo33472');
smo33472.setFont('Merriweather', 12, 'normal');
smo33472.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33471.addModifier(smo33472);
smo33472.addClass('lyric lyric-0');
const smo33473 = new VF.Annotation('mir');
smo33473.setAttribute('id', 'smo33473');
smo33473.setFont('Merriweather', 12, 'normal');
smo33473.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33471.addModifier(smo33473);
smo33473.addClass('lyric lyric-1');
smo33492v0ar.push(smo33471);
const smo33474 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo33474'] = smo33474;
smo33474.setAttribute('id', 'smo33474');
const smo33475 = new VF.Annotation('ihn');
smo33475.setAttribute('id', 'smo33475');
smo33475.setFont('Merriweather', 12, 'normal');
smo33475.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33474.addModifier(smo33475);
smo33475.addClass('lyric lyric-0');
const smo33476 = new VF.Annotation('ge');
smo33476.setAttribute('id', 'smo33476');
smo33476.setFont('Merriweather', 12, 'normal');
smo33476.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33474.addModifier(smo33476);
smo33476.addClass('lyric lyric-1 lyric-hyphen');
smo33492v0ar.push(smo33474);
smo33492v0.addTickables(smo33492v0ar)
fmtsmo3349215.joinVoices([smo33492v0]);
const fmtsmo3483215 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo34832v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34832v0ar = [];
const smo34816 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/3/n","f#/4/n"]}'))
noteHash['smo34816'] = smo34816;
smo34816.setAttribute('id', 'smo34816');
smo34816.addModifier(new VF.Dot(), 0);
smo34816.addModifier(new VF.Dot(), 1);
smo34832v0ar.push(smo34816);
smo34832v0.addTickables(smo34832v0ar)
fmtsmo3483215.joinVoices([smo34832v0]);
const fmtsmo3599515 = new VF.Formatter();
//
// voices and notes for stave 2 15
const smo35995v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35995v0ar = [];
const smo35974 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo35974'] = smo35974;
smo35974.setAttribute('id', 'smo35974');
smo35995v0ar.push(smo35974);
const smo35975 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo35975'] = smo35975;
smo35975.setAttribute('id', 'smo35975');
smo35995v0ar.push(smo35975);
const smo35976 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo35976'] = smo35976;
smo35976.setAttribute('id', 'smo35976');
smo35995v0ar.push(smo35976);
const smo35977 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo35977'] = smo35977;
smo35977.setAttribute('id', 'smo35977');
smo35995v0ar.push(smo35977);
smo35995v0.addTickables(smo35995v0ar)
fmtsmo3599515.joinVoices([smo35995v0]);
const smo35995v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo35995v1ar = [];
const smo35978 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo35978'] = smo35978;
smo35978.setAttribute('id', 'smo35978');
smo35978.addModifier(new VF.Dot(), 0);
smo35995v1ar.push(smo35978);
const smo35979 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo35979'] = smo35979;
smo35979.setAttribute('id', 'smo35979');
smo35979.addModifier(new VF.Dot(), 0);
smo35995v1ar.push(smo35979);
smo35995v1.addTickables(smo35995v1ar)
fmtsmo3599515.joinVoices([smo35995v1]);
// create beam groups and tuplets for format grp smo36899 before formatting
const dirsmo42962 = smo33468.getStemDirection();
smo33468.setStemDirection(dirsmo42962);
smo33471.setStemDirection(dirsmo42962);
smo33474.setStemDirection(dirsmo42962);
const smo42962 = new VF.Beam([smo33468,smo33471,smo33474]);
 
// formatting measures in staff group smo36899
fmtsmo3349215.format([smo33492v0,smo34832v0,smo35995v0,smo35995v1], 265);
const stavesmo33492 = new VF.Stave(748, 844, 279);
stavesmo33492.setAttribute('id', 'stavesmo33492');
stavesmo33492.setBegBarType(VF.Barline.type.NONE);
stavesmo33492.setContext(context);
stavesmo33492.draw();
smo33492v0.draw(context, stavesmo33492);
smo42962.setContext(context);
smo42962.draw();
const stavesmo34832 = new VF.Stave(748, 967, 279);
stavesmo34832.setAttribute('id', 'stavesmo34832');
stavesmo34832.setBegBarType(VF.Barline.type.NONE);
stavesmo34832.setContext(context);
stavesmo34832.draw();
smo34832v0.draw(context, stavesmo34832);
const stavesmo35995 = new VF.Stave(748, 1057, 279);
stavesmo35995.setAttribute('id', 'stavesmo35995');
stavesmo35995.setBegBarType(VF.Barline.type.NONE);
stavesmo35995.setContext(context);
stavesmo35995.draw();
smo35995v0.draw(context, stavesmo35995);
smo35995v1.draw(context, stavesmo35995);
const fmtsmo3351116 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo33511v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33511v0ar = [];
const smo33493 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33493'] = smo33493;
smo33493.setAttribute('id', 'smo33493');
smo33493.addModifier(new VF.Dot(), 0);
const smo33494 = new VF.Annotation('schen');
smo33494.setAttribute('id', 'smo33494');
smo33494.setFont('Merriweather', 12, 'normal');
smo33494.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33493.addModifier(smo33494);
smo33494.addClass('lyric lyric-0');
const smo33495 = new VF.Annotation('stehn');
smo33495.setAttribute('id', 'smo33495');
smo33495.setFont('Merriweather', 12, 'normal');
smo33495.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33493.addModifier(smo33495);
smo33495.addClass('lyric lyric-1');
smo33511v0ar.push(smo33493);
smo33511v0.addTickables(smo33511v0ar)
fmtsmo3351116.joinVoices([smo33511v0]);
const fmtsmo3484916 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo34849v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34849v0ar = [];
const smo34833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
noteHash['smo34833'] = smo34833;
smo34833.setAttribute('id', 'smo34833');
smo34833.addModifier(new VF.Dot(), 0);
smo34833.addModifier(new VF.Dot(), 1);
smo34849v0ar.push(smo34833);
smo34849v0.addTickables(smo34849v0ar)
fmtsmo3484916.joinVoices([smo34849v0]);
const fmtsmo3602016 = new VF.Formatter();
//
// voices and notes for stave 2 16
const smo36020v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36020v0ar = [];
const smo35996 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35996'] = smo35996;
smo35996.setAttribute('id', 'smo35996');
smo36020v0ar.push(smo35996);
const smo35997 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35997'] = smo35997;
smo35997.setAttribute('id', 'smo35997');
smo36020v0ar.push(smo35997);
const smo35998 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35998'] = smo35998;
smo35998.setAttribute('id', 'smo35998');
smo36020v0ar.push(smo35998);
const smo35999 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo35999'] = smo35999;
smo35999.setAttribute('id', 'smo35999');
smo36020v0ar.push(smo35999);
smo36020v0.addTickables(smo36020v0ar)
fmtsmo3602016.joinVoices([smo36020v0]);
const smo36020v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36020v1ar = [];
const smo36000 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["eb/4/r"]}'))
noteHash['smo36000'] = smo36000;
smo36000.setAttribute('id', 'smo36000');
smo36020v1ar.push(smo36000);
const smo36001 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo36001'] = smo36001;
smo36001.setAttribute('id', 'smo36001');
smo36020v1ar.push(smo36001);
const smo36002 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo36002'] = smo36002;
smo36002.setAttribute('id', 'smo36002');
smo36020v1ar.push(smo36002);
const smo36003 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo36003'] = smo36003;
smo36003.setAttribute('id', 'smo36003');
smo36020v1ar.push(smo36003);
const smo36004 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo36004'] = smo36004;
smo36004.setAttribute('id', 'smo36004');
smo36020v1ar.push(smo36004);
smo36020v1.addTickables(smo36020v1ar)
fmtsmo3602016.joinVoices([smo36020v1]);
// create beam groups and tuplets for format grp smo36899 before formatting
const dirsmo42973 = smo36002.getStemDirection();
smo36002.setStemDirection(dirsmo42973);
smo36003.setStemDirection(dirsmo42973);
smo36004.setStemDirection(dirsmo42973);
const smo42973 = new VF.Beam([smo36002,smo36003,smo36004]);
 
// formatting measures in staff group smo36899
fmtsmo3351116.format([smo33511v0,smo34849v0,smo36020v0,smo36020v1], 170);
const stavesmo33511 = new VF.Stave(1027, 844, 184);
stavesmo33511.setAttribute('id', 'stavesmo33511');
stavesmo33511.setBegBarType(VF.Barline.type.NONE);
stavesmo33511.setContext(context);
stavesmo33511.draw();
smo33511v0.draw(context, stavesmo33511);
const stavesmo34849 = new VF.Stave(1027, 967, 184);
stavesmo34849.setAttribute('id', 'stavesmo34849');
stavesmo34849.setBegBarType(VF.Barline.type.NONE);
stavesmo34849.setContext(context);
stavesmo34849.draw();
smo34849v0.draw(context, stavesmo34849);
const stavesmo36020 = new VF.Stave(1027, 1057, 184);
stavesmo36020.setAttribute('id', 'stavesmo36020');
stavesmo36020.setBegBarType(VF.Barline.type.NONE);
stavesmo36020.setContext(context);
stavesmo36020.draw();
smo36020v0.draw(context, stavesmo36020);
smo36020v1.draw(context, stavesmo36020);
smo42973.setContext(context);
smo42973.draw();
const rightsmo36899stavesmo335112 = new VF.StaveConnector(stavesmo33511, stavesmo36020).setType(0);
rightsmo36899stavesmo335112.setContext(context).draw();
const fmtsmo3354117 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo33541v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33541v0ar = [];
const smo33512 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33512'] = smo33512;
smo33512.setAttribute('id', 'smo33512');
const smo33513 = new VF.Annotation('-');
smo33513.setAttribute('id', 'smo33513');
smo33513.setFont('Merriweather', 12, 'normal');
smo33513.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33512.addModifier(smo33513);
smo33513.addClass('lyric lyric-0 lyric-hyphen');
smo33541v0ar.push(smo33512);
const smo33514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo33514'] = smo33514;
smo33514.setAttribute('id', 'smo33514');
const smo33515 = new VF.Annotation('den');
smo33515.setAttribute('id', 'smo33515');
smo33515.setFont('Merriweather', 12, 'normal');
smo33515.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33514.addModifier(smo33515);
smo33515.addClass('lyric lyric-0');
const smo33516 = new VF.Annotation('er');
smo33516.setAttribute('id', 'smo33516');
smo33516.setFont('Merriweather', 12, 'normal');
smo33516.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33514.addModifier(smo33516);
smo33516.addClass('lyric lyric-1');
smo33541v0ar.push(smo33514);
const smo33517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo33517'] = smo33517;
smo33517.setAttribute('id', 'smo33517');
const smo33518 = new VF.Annotation('all\'');
smo33518.setAttribute('id', 'smo33518');
smo33518.setFont('Merriweather', 12, 'normal');
smo33518.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33517.addModifier(smo33518);
smo33518.addClass('lyric lyric-0');
const smo33519 = new VF.Annotation('splet');
smo33519.setAttribute('id', 'smo33519');
smo33519.setFont('Merriweather', 12, 'normal');
smo33519.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33517.addModifier(smo33519);
smo33519.addClass('lyric lyric-1');
smo33541v0ar.push(smo33517);
const smo33520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo33520'] = smo33520;
smo33520.setAttribute('id', 'smo33520');
const smo33521 = new VF.Annotation('sei');
smo33521.setAttribute('id', 'smo33521');
smo33521.setFont('Merriweather', 12, 'normal');
smo33521.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33520.addModifier(smo33521);
smo33521.addClass('lyric lyric-0 lyric-hyphen');
const smo33522 = new VF.Annotation('sei');
smo33522.setAttribute('id', 'smo33522');
smo33522.setFont('Merriweather', 12, 'normal');
smo33522.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33520.addModifier(smo33522);
smo33522.addClass('lyric lyric-1 lyric-hyphen');
smo33541v0ar.push(smo33520);
const smo33523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo33523'] = smo33523;
smo33523.setAttribute('id', 'smo33523');
const smo33524 = new VF.Annotation('ne');
smo33524.setAttribute('id', 'smo33524');
smo33524.setFont('Merriweather', 12, 'normal');
smo33524.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33523.addModifier(smo33524);
smo33524.addClass('lyric lyric-0');
const smo33525 = new VF.Annotation('ne');
smo33525.setAttribute('id', 'smo33525');
smo33525.setFont('Merriweather', 12, 'normal');
smo33525.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33523.addModifier(smo33525);
smo33525.addClass('lyric lyric-1');
smo33541v0ar.push(smo33523);
smo33541v0.addTickables(smo33541v0ar)
fmtsmo3354117.joinVoices([smo33541v0]);
const fmtsmo3486817 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo34868v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34868v0ar = [];
const smo34850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34850'] = smo34850;
smo34850.setAttribute('id', 'smo34850');
smo34850.addModifier(new VF.Dot(), 0);
smo34868v0ar.push(smo34850);
const smo34851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34851'] = smo34851;
smo34851.setAttribute('id', 'smo34851');
smo34868v0ar.push(smo34851);
const smo34852 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34852'] = smo34852;
smo34852.setAttribute('id', 'smo34852');
smo34868v0ar.push(smo34852);
smo34868v0.addTickables(smo34868v0ar)
fmtsmo3486817.joinVoices([smo34868v0]);
const fmtsmo3604117 = new VF.Formatter();
//
// voices and notes for stave 2 17
const smo36041v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36041v0ar = [];
const smo36021 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo36021'] = smo36021;
smo36021.setAttribute('id', 'smo36021');
smo36041v0ar.push(smo36021);
const smo36022 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo36022'] = smo36022;
smo36022.setAttribute('id', 'smo36022');
smo36041v0ar.push(smo36022);
const smo36023 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo36023'] = smo36023;
smo36023.setAttribute('id', 'smo36023');
smo36041v0ar.push(smo36023);
const smo36024 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo36024'] = smo36024;
smo36024.setAttribute('id', 'smo36024');
smo36041v0ar.push(smo36024);
smo36041v0.addTickables(smo36041v0ar)
fmtsmo3604117.joinVoices([smo36041v0]);
const smo36041v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36041v1ar = [];
const smo36025 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo36025'] = smo36025;
smo36025.setAttribute('id', 'smo36025');
smo36025.addModifier(new VF.Dot(), 0);
smo36041v1ar.push(smo36025);
smo36041v1.addTickables(smo36041v1ar)
fmtsmo3604117.joinVoices([smo36041v1]);
// create beam groups and tuplets for format grp smo36899 before formatting
const dirsmo42983 = smo33517.getStemDirection();
smo33517.setStemDirection(dirsmo42983);
smo33520.setStemDirection(dirsmo42983);
smo33523.setStemDirection(dirsmo42983);
const smo42983 = new VF.Beam([smo33517,smo33520,smo33523]);
 
// formatting measures in staff group smo36899
fmtsmo3354117.format([smo33541v0,smo34868v0,smo36041v0,smo36041v1], 245);
const stavesmo33541 = new VF.Stave(66, 1197, 319);
stavesmo33541.setAttribute('id', 'stavesmo33541');
stavesmo33541.setBegBarType(1);
stavesmo33541.addClef('treble');
const keysmo33541 = new VF.KeySignature('G');
keysmo33541.addToStave(stavesmo33541);
stavesmo33541.setContext(context);
stavesmo33541.draw();
smo33541v0.draw(context, stavesmo33541);
smo42983.setContext(context);
smo42983.draw();
const stavesmo34868 = new VF.Stave(66, 1309, 319);
stavesmo34868.setAttribute('id', 'stavesmo34868');
stavesmo34868.setBegBarType(1);
stavesmo34868.addClef('treble');
const keysmo34868 = new VF.KeySignature('G');
keysmo34868.addToStave(stavesmo34868);
stavesmo34868.setContext(context);
stavesmo34868.draw();
smo34868v0.draw(context, stavesmo34868);
const stavesmo36041 = new VF.Stave(66, 1449, 319);
stavesmo36041.setAttribute('id', 'stavesmo36041');
stavesmo36041.setBegBarType(1);
stavesmo36041.addClef('bass');
const keysmo36041 = new VF.KeySignature('G');
keysmo36041.addToStave(stavesmo36041);
stavesmo36041.setContext(context);
stavesmo36041.draw();
smo36041v0.draw(context, stavesmo36041);
smo36041v1.draw(context, stavesmo36041);
const leftsmo36899stavesmo335412 = new VF.StaveConnector(stavesmo33541, stavesmo36041).setType(1);
leftsmo36899stavesmo335412.setContext(context).draw();
const fmtsmo3356318 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo33563v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33563v0ar = [];
const smo33542 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo33542'] = smo33542;
smo33542.setAttribute('id', 'smo33542');
smo33542.addModifier(new VF.Dot(), 0);
const smo33543 = new VF.Annotation('Lie');
smo33543.setAttribute('id', 'smo33543');
smo33543.setFont('Merriweather', 12, 'normal');
smo33543.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33542.addModifier(smo33543);
smo33543.addClass('lyric lyric-0 lyric-hyphen');
const smo33544 = new VF.Annotation('Lie');
smo33544.setAttribute('id', 'smo33544');
smo33544.setFont('Merriweather', 12, 'normal');
smo33544.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33542.addModifier(smo33544);
smo33544.addClass('lyric lyric-1 lyric-hyphen');
smo33563v0ar.push(smo33542);
const smo33545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo33545'] = smo33545;
smo33545.setAttribute('id', 'smo33545');
smo33545.addModifier(new VF.Dot(), 0);
const smo33546 = new VF.Annotation('der');
smo33546.setAttribute('id', 'smo33546');
smo33546.setFont('Merriweather', 12, 'normal');
smo33546.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33545.addModifier(smo33546);
smo33546.addClass('lyric lyric-0');
const smo33547 = new VF.Annotation('der');
smo33547.setAttribute('id', 'smo33547');
smo33547.setFont('Merriweather', 12, 'normal');
smo33547.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33545.addModifier(smo33547);
smo33547.addClass('lyric lyric-1');
smo33563v0ar.push(smo33545);
smo33563v0.addTickables(smo33563v0ar)
fmtsmo3356318.joinVoices([smo33563v0]);
const fmtsmo3488618 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo34886v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34886v0ar = [];
const smo34869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34869'] = smo34869;
smo34869.setAttribute('id', 'smo34869');
smo34869.addModifier(new VF.Dot(), 0);
smo34886v0ar.push(smo34869);
const smo34870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n","f#/4/n"]}'))
noteHash['smo34870'] = smo34870;
smo34870.setAttribute('id', 'smo34870');
smo34870.addModifier(new VF.Dot(), 0);
smo34870.addModifier(new VF.Dot(), 1);
smo34886v0ar.push(smo34870);
smo34886v0.addTickables(smo34886v0ar)
fmtsmo3488618.joinVoices([smo34886v0]);
const fmtsmo3606118 = new VF.Formatter();
//
// voices and notes for stave 2 18
const smo36061v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36061v0ar = [];
const smo36042 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo36042'] = smo36042;
smo36042.setAttribute('id', 'smo36042');
smo36061v0ar.push(smo36042);
const smo36043 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo36043'] = smo36043;
smo36043.setAttribute('id', 'smo36043');
smo36061v0ar.push(smo36043);
const smo36044 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo36044'] = smo36044;
smo36044.setAttribute('id', 'smo36044');
smo36061v0ar.push(smo36044);
const smo36045 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo36045'] = smo36045;
smo36045.setAttribute('id', 'smo36045');
smo36061v0ar.push(smo36045);
smo36061v0.addTickables(smo36061v0ar)
fmtsmo3606118.joinVoices([smo36061v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
 
// formatting measures in staff group smo36899
fmtsmo3356318.format([smo33563v0,smo34886v0,smo36061v0], 130);
const stavesmo33563 = new VF.Stave(385, 1197, 144);
stavesmo33563.setAttribute('id', 'stavesmo33563');
stavesmo33563.setBegBarType(VF.Barline.type.NONE);
stavesmo33563.setContext(context);
stavesmo33563.draw();
smo33563v0.draw(context, stavesmo33563);
const stavesmo34886 = new VF.Stave(385, 1309, 144);
stavesmo34886.setAttribute('id', 'stavesmo34886');
stavesmo34886.setBegBarType(VF.Barline.type.NONE);
stavesmo34886.setContext(context);
stavesmo34886.draw();
smo34886v0.draw(context, stavesmo34886);
const stavesmo36061 = new VF.Stave(385, 1449, 144);
stavesmo36061.setAttribute('id', 'stavesmo36061');
stavesmo36061.setBegBarType(VF.Barline.type.NONE);
stavesmo36061.setContext(context);
stavesmo36061.draw();
smo36061v0.draw(context, stavesmo36061);
const fmtsmo3359319 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo33593v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33593v0ar = [];
const smo33564 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo33564'] = smo33564;
smo33564.setAttribute('id', 'smo33564');
const smo33565 = new VF.Annotation('-');
smo33565.setAttribute('id', 'smo33565');
smo33565.setFont('Merriweather', 12, 'normal');
smo33565.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33564.addModifier(smo33565);
smo33565.addClass('lyric lyric-0 lyric-hyphen');
smo33593v0ar.push(smo33564);
const smo33566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo33566'] = smo33566;
smo33566.setAttribute('id', 'smo33566');
const smo33567 = new VF.Annotation('sie');
smo33567.setAttribute('id', 'smo33567');
smo33567.setFont('Merriweather', 12, 'normal');
smo33567.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33566.addModifier(smo33567);
smo33567.addClass('lyric lyric-0');
const smo33568 = new VF.Annotation('doch');
smo33568.setAttribute('id', 'smo33568');
smo33568.setFont('Merriweather', 12, 'normal');
smo33568.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33566.addModifier(smo33568);
smo33568.addClass('lyric lyric-1');
smo33593v0ar.push(smo33566);
const smo33569 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo33569'] = smo33569;
smo33569.setAttribute('id', 'smo33569');
const smo33570 = new VF.Annotation('sind');
smo33570.setAttribute('id', 'smo33570');
smo33570.setFont('Merriweather', 12, 'normal');
smo33570.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33569.addModifier(smo33570);
smo33570.addClass('lyric lyric-0');
const smo33571 = new VF.Annotation('im');
smo33571.setAttribute('id', 'smo33571');
smo33571.setFont('Merriweather', 12, 'normal');
smo33571.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33569.addModifier(smo33571);
smo33571.addClass('lyric lyric-1 lyric-hyphen');
smo33593v0ar.push(smo33569);
const smo33572 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo33572'] = smo33572;
smo33572.setAttribute('id', 'smo33572');
const smo33573 = new VF.Annotation('ir');
smo33573.setAttribute('id', 'smo33573');
smo33573.setFont('Merriweather', 12, 'normal');
smo33573.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33572.addModifier(smo33573);
smo33573.addClass('lyric lyric-0');
const smo33574 = new VF.Annotation('mer');
smo33574.setAttribute('id', 'smo33574');
smo33574.setFont('Merriweather', 12, 'normal');
smo33574.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33572.addModifier(smo33574);
smo33574.addClass('lyric lyric-1');
smo33593v0ar.push(smo33572);
const smo33575 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo33575'] = smo33575;
smo33575.setAttribute('id', 'smo33575');
const smo33576 = new VF.Annotation('e');
smo33576.setAttribute('id', 'smo33576');
smo33576.setFont('Merriweather', 12, 'normal');
smo33576.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33575.addModifier(smo33576);
smo33576.addClass('lyric lyric-0 lyric-hyphen');
const smo33577 = new VF.Annotation('für');
smo33577.setAttribute('id', 'smo33577');
smo33577.setFont('Merriweather', 12, 'normal');
smo33577.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33575.addModifier(smo33577);
smo33577.addClass('lyric lyric-1');
smo33593v0ar.push(smo33575);
smo33593v0.addTickables(smo33593v0ar)
fmtsmo3359319.joinVoices([smo33593v0]);
const fmtsmo3490419 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo34904v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34904v0ar = [];
const smo34887 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34887'] = smo34887;
smo34887.setAttribute('id', 'smo34887');
smo34887.addModifier(new VF.Dot(), 0);
smo34904v0ar.push(smo34887);
const smo34888 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n","f#/4/n"]}'))
noteHash['smo34888'] = smo34888;
smo34888.setAttribute('id', 'smo34888');
smo34888.addModifier(new VF.Dot(), 0);
smo34888.addModifier(new VF.Dot(), 1);
smo34904v0ar.push(smo34888);
smo34904v0.addTickables(smo34904v0ar)
fmtsmo3490419.joinVoices([smo34904v0]);
const fmtsmo3608019 = new VF.Formatter();
//
// voices and notes for stave 2 19
const smo36080v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36080v0ar = [];
const smo36062 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo36062'] = smo36062;
smo36062.setAttribute('id', 'smo36062');
smo36080v0ar.push(smo36062);
const smo36063 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo36063'] = smo36063;
smo36063.setAttribute('id', 'smo36063');
smo36063.addModifier(new VF.Dot(), 0);
smo36080v0ar.push(smo36063);
const smo36064 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo36064'] = smo36064;
smo36064.setAttribute('id', 'smo36064');
smo36080v0ar.push(smo36064);
smo36080v0.addTickables(smo36080v0ar)
fmtsmo3608019.joinVoices([smo36080v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
const dirsmo42996 = smo33569.getStemDirection();
smo33569.setStemDirection(dirsmo42996);
smo33572.setStemDirection(dirsmo42996);
smo33575.setStemDirection(dirsmo42996);
const smo42996 = new VF.Beam([smo33569,smo33572,smo33575]);
 
// formatting measures in staff group smo36899
fmtsmo3359319.format([smo33593v0,smo34904v0,smo36080v0], 272);
const stavesmo33593 = new VF.Stave(529, 1197, 286);
stavesmo33593.setAttribute('id', 'stavesmo33593');
stavesmo33593.setBegBarType(VF.Barline.type.NONE);
stavesmo33593.setContext(context);
stavesmo33593.draw();
smo33593v0.draw(context, stavesmo33593);
smo42996.setContext(context);
smo42996.draw();
const stavesmo34904 = new VF.Stave(529, 1309, 286);
stavesmo34904.setAttribute('id', 'stavesmo34904');
stavesmo34904.setBegBarType(VF.Barline.type.NONE);
stavesmo34904.setContext(context);
stavesmo34904.draw();
smo34904v0.draw(context, stavesmo34904);
const stavesmo36080 = new VF.Stave(529, 1449, 286);
stavesmo36080.setAttribute('id', 'stavesmo36080');
stavesmo36080.setBegBarType(VF.Barline.type.NONE);
stavesmo36080.setContext(context);
stavesmo36080.draw();
smo36080v0.draw(context, stavesmo36080);
const fmtsmo3361220 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo33612v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33612v0ar = [];
const smo33594 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo33594'] = smo33594;
smo33594.setAttribute('id', 'smo33594');
smo33594.addModifier(new VF.Dot(), 0);
const smo33595 = new VF.Annotation('kannt');
smo33595.setAttribute('id', 'smo33595');
smo33595.setFont('Merriweather', 12, 'normal');
smo33595.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33594.addModifier(smo33595);
smo33595.addClass('lyric lyric-0');
const smo33596 = new VF.Annotation('mich');
smo33596.setAttribute('id', 'smo33596');
smo33596.setFont('Merriweather', 12, 'normal');
smo33596.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33594.addModifier(smo33596);
smo33596.addClass('lyric lyric-1');
smo33612v0ar.push(smo33594);
smo33612v0.addTickables(smo33612v0ar)
fmtsmo3361220.joinVoices([smo33612v0]);
const fmtsmo3492520 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo34925v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34925v0ar = [];
const smo34905 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo34905'] = smo34905;
smo34905.setAttribute('id', 'smo34905');
smo34925v0ar.push(smo34905);
const smo34906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34906'] = smo34906;
smo34906.setAttribute('id', 'smo34906');
smo34925v0ar.push(smo34906);
const smo34907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo34907'] = smo34907;
smo34907.setAttribute('id', 'smo34907');
smo34925v0ar.push(smo34907);
const smo34908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo34908'] = smo34908;
smo34908.setAttribute('id', 'smo34908');
smo34925v0ar.push(smo34908);
const smo34909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo34909'] = smo34909;
smo34909.setAttribute('id', 'smo34909');
smo34925v0ar.push(smo34909);
smo34925v0.addTickables(smo34925v0ar)
fmtsmo3492520.joinVoices([smo34925v0]);
const fmtsmo3610020 = new VF.Formatter();
//
// voices and notes for stave 2 20
const smo36100v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36100v0ar = [];
const smo36081 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo36081'] = smo36081;
smo36081.setAttribute('id', 'smo36081');
smo36100v0ar.push(smo36081);
const smo36082 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
noteHash['smo36082'] = smo36082;
smo36082.setAttribute('id', 'smo36082');
smo36100v0ar.push(smo36082);
const smo36083 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36083'] = smo36083;
smo36083.setAttribute('id', 'smo36083');
smo36100v0ar.push(smo36083);
const smo36084 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo36084'] = smo36084;
smo36084.setAttribute('id', 'smo36084');
smo36084.addModifier(new VF.Dot(), 0);
smo36100v0ar.push(smo36084);
smo36100v0.addTickables(smo36100v0ar)
fmtsmo3610020.joinVoices([smo36100v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
const dirsmo43005 = smo34907.getStemDirection();
smo34907.setStemDirection(dirsmo43005);
smo34908.setStemDirection(dirsmo43005);
smo34909.setStemDirection(dirsmo43005);
const smo43005 = new VF.Beam([smo34907,smo34908,smo34909]);
const dirsmo43008 = smo36081.getStemDirection();
smo36081.setStemDirection(dirsmo43008);
smo36082.setStemDirection(dirsmo43008);
smo36083.setStemDirection(dirsmo43008);
const smo43008 = new VF.Beam([smo36081,smo36082,smo36083]);
 
// formatting measures in staff group smo36899
fmtsmo3361220.format([smo33612v0,smo34925v0,smo36100v0], 205);
const stavesmo33612 = new VF.Stave(815, 1197, 219);
stavesmo33612.setAttribute('id', 'stavesmo33612');
stavesmo33612.setBegBarType(VF.Barline.type.NONE);
stavesmo33612.setContext(context);
stavesmo33612.draw();
smo33612v0.draw(context, stavesmo33612);
const stavesmo34925 = new VF.Stave(815, 1309, 219);
stavesmo34925.setAttribute('id', 'stavesmo34925');
stavesmo34925.setBegBarType(VF.Barline.type.NONE);
stavesmo34925.setContext(context);
stavesmo34925.draw();
smo34925v0.draw(context, stavesmo34925);
smo43005.setContext(context);
smo43005.draw();
const stavesmo36100 = new VF.Stave(815, 1449, 219);
stavesmo36100.setAttribute('id', 'stavesmo36100');
stavesmo36100.setBegBarType(VF.Barline.type.NONE);
stavesmo36100.setContext(context);
stavesmo36100.draw();
smo36100v0.draw(context, stavesmo36100);
smo43008.setContext(context);
smo43008.draw();
const fmtsmo3363321 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo33633v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo33633v0ar = [];
const smo33613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo33613'] = smo33613;
smo33613.setAttribute('id', 'smo33613');
smo33613.addModifier(new VF.Dot(), 0);
const smo33614 = new VF.Annotation('-');
smo33614.setAttribute('id', 'smo33614');
smo33614.setFont('Merriweather', 12, 'normal');
smo33614.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33613.addModifier(smo33614);
smo33614.addClass('lyric lyric-0 lyric-hyphen');
smo33633v0ar.push(smo33613);
const smo33615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo33615'] = smo33615;
smo33615.setAttribute('id', 'smo33615');
smo33615.addModifier(new VF.Dot(), 0);
const smo33616 = new VF.Annotation('Er');
smo33616.setAttribute('id', 'smo33616');
smo33616.setFont('Merriweather', 12, 'normal');
smo33616.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33615.addModifier(smo33616);
smo33616.addClass('lyric lyric-0');
const smo33617 = new VF.Annotation('Mein');
smo33617.setAttribute('id', 'smo33617');
smo33617.setFont('Merriweather', 12, 'normal');
smo33617.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33615.addModifier(smo33617);
smo33617.addClass('lyric lyric-1');
smo33633v0ar.push(smo33615);
smo33633v0.addTickables(smo33633v0ar)
fmtsmo3363321.joinVoices([smo33633v0]);
const fmtsmo3494421 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo34944v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo34944v0ar = [];
const smo34926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo34926'] = smo34926;
smo34926.setAttribute('id', 'smo34926');
smo34944v0ar.push(smo34926);
const smo34927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34927'] = smo34927;
smo34927.setAttribute('id', 'smo34927');
smo34944v0ar.push(smo34927);
const smo34928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34928'] = smo34928;
smo34928.setAttribute('id', 'smo34928');
smo34928.addModifier(new VF.Dot(), 0);
smo34944v0ar.push(smo34928);
smo34944v0.addTickables(smo34944v0ar)
fmtsmo3494421.joinVoices([smo34944v0]);
const fmtsmo3612121 = new VF.Formatter();
//
// voices and notes for stave 2 21
const smo36121v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo36121v0ar = [];
const smo36101 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo36101'] = smo36101;
smo36101.setAttribute('id', 'smo36101');
smo36121v0ar.push(smo36101);
const smo36102 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
noteHash['smo36102'] = smo36102;
smo36102.setAttribute('id', 'smo36102');
smo36121v0ar.push(smo36102);
const smo36103 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36103'] = smo36103;
smo36103.setAttribute('id', 'smo36103');
smo36121v0ar.push(smo36103);
const smo36104 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo36104'] = smo36104;
smo36104.setAttribute('id', 'smo36104');
smo36121v0ar.push(smo36104);
const smo36105 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36105'] = smo36105;
smo36105.setAttribute('id', 'smo36105');
smo36121v0ar.push(smo36105);
smo36121v0.addTickables(smo36121v0ar)
fmtsmo3612121.joinVoices([smo36121v0]);
// create beam groups and tuplets for format grp smo36899 before formatting
const dirsmo43015 = smo36101.getStemDirection();
smo36101.setStemDirection(dirsmo43015);
smo36102.setStemDirection(dirsmo43015);
smo36103.setStemDirection(dirsmo43015);
const smo43015 = new VF.Beam([smo36101,smo36102,smo36103]);
 
// formatting measures in staff group smo36899
fmtsmo3363321.format([smo33633v0,smo34944v0,smo36121v0], 166);
const stavesmo33633 = new VF.Stave(1034, 1197, 180);
stavesmo33633.setAttribute('id', 'stavesmo33633');
stavesmo33633.setBegBarType(VF.Barline.type.NONE);
stavesmo33633.setContext(context);
stavesmo33633.draw();
smo33633v0.draw(context, stavesmo33633);
const stavesmo34944 = new VF.Stave(1034, 1309, 180);
stavesmo34944.setAttribute('id', 'stavesmo34944');
stavesmo34944.setBegBarType(VF.Barline.type.NONE);
stavesmo34944.setContext(context);
stavesmo34944.draw();
smo34944v0.draw(context, stavesmo34944);
const stavesmo36121 = new VF.Stave(1034, 1449, 180);
stavesmo36121.setAttribute('id', 'stavesmo36121');
stavesmo36121.setBegBarType(VF.Barline.type.NONE);
stavesmo36121.setContext(context);
stavesmo36121.draw();
smo36121v0.draw(context, stavesmo36121);
smo43015.setContext(context);
smo43015.draw();
const rightsmo36899stavesmo336332 = new VF.StaveConnector(stavesmo33633, stavesmo36121).setType(0);
rightsmo36899stavesmo336332.setContext(context).draw();
const smo43816 = new VF.StaveTie({ first_note: smo33402, last_note: smo33421, first_indices: [0], last_indices: [0]});
smo43816.setContext(context).draw();
const smo43817 = new VF.StaveTie({ first_note: smo33444, last_note: smo33463, first_indices: [0], last_indices: [0]});
smo43817.setContext(context).draw();
const smo43818 = new VF.StaveTie({ first_note: smo33493, last_note: smo33493, first_indices: [0], last_indices: [0]});
smo43818.setContext(context).draw();
const smo43819 = new VF.StaveTie({ first_note: smo33545, last_note: smo33564, first_indices: [0], last_indices: [0]});
smo43819.setContext(context).draw();
const smo43820 = new VF.StaveTie({ first_note: smo33594, last_note: smo33613, first_indices: [0], last_indices: [0]});
smo43820.setContext(context).draw();
const smo43821 = new VF.StaveTie({ first_note: smo34694, last_note: smo34711, first_indices: [0,1], last_indices: [0,1]});
smo43821.setContext(context).draw();
const smo43822 = new VF.StaveTie({ first_note: smo34728, last_note: smo34745, first_indices: [0,1], last_indices: [0,1]});
smo43822.setContext(context).draw();
const smo43823 = new VF.StaveTie({ first_note: smo34660, last_note: null, first_indices: [0,1], last_indices: [0,1]});
smo43823.setContext(context).draw();
const smo43824 = new VF.StaveTie({ first_note: null, last_note: smo34677, first_indices: [0,1], last_indices: [0,1]});
smo43824.setContext(context).draw();
const smo43825 = new VF.StaveTie({ first_note: smo34625, last_note: smo34642, first_indices: [0], last_indices: [0]});
smo43825.setContext(context).draw();
const smo43826 = new VF.Curve(smo35978, smo35979, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo43826.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo33253').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo33273').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33274').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo33276').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33277').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo33279').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo33280').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo33282').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33283').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo33301').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo33302').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo33322').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo33323').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo33325').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33326').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo33328').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33329').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo33331').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33332').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo33350').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33351').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo33354').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo33372').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33373').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo33376').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo33394').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33395').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo33397').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo33398').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo33400').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo33401').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo33403').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33404').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33423').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo33427').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo33445').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo33446').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo33464').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo33466').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33467').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33469').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo33470').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo33472').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo33473').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo33475').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo33476').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo33494').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo33495').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo33513').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo33515').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33516').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo33518').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33519').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo33521').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33522').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo33524').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo33525').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo33543').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33544').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo33547').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo33565').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo33567').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33568').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo33570').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33571').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo33573').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo33574').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo33576').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo33577').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo33595').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33596').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo33614').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo33616').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo33617').setAttributeNS('', 'transform', 'translate(0 18)');
}
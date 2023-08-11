function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
//
// create the musical objects
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1483.6363636363635');
svg.setAttributeNS('', 'height', '1920');
svg.setAttributeNS('', 'viewBox', '0 0 1484 1920');
VF.setMusicFont("Bravura","Gonville","Custom");
const noteHash = {};
const voiceHash = {}
const fmtsmo601860 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo60186v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60186v0ar = [];
const smo60170 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60170'] = smo60170;
smo60170.setAttribute('id', 'smo60170');
smo60186v0ar.push(smo60170);
smo60186v0.addTickables(smo60186v0ar)
fmtsmo601860.joinVoices([smo60186v0]);
const fmtsmo612080 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo61208v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61208v0ar = [];
const smo61191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo61191'] = smo61191;
smo61191.setAttribute('id', 'smo61191');
smo61208v0ar.push(smo61191);
const smo61192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo61192'] = smo61192;
smo61192.setAttribute('id', 'smo61192');
smo61208v0ar.push(smo61192);
smo61208v0.addTickables(smo61208v0ar)
fmtsmo612080.joinVoices([smo61208v0]);
const fmtsmo622060 = new VF.Formatter();
//
// voices and notes for stave 2 0
const smo62206v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62206v0ar = [];
const smo62189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo62189'] = smo62189;
smo62189.setAttribute('id', 'smo62189');
smo62206v0ar.push(smo62189);
const smo62190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo62190'] = smo62190;
smo62190.setAttribute('id', 'smo62190');
smo62206v0ar.push(smo62190);
smo62206v0.addTickables(smo62206v0ar)
fmtsmo622060.joinVoices([smo62206v0]);
const fmtsmo631600 = new VF.Formatter();
//
// voices and notes for stave 3 0
const smo63160v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63160v0ar = [];
const smo63141 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63141'] = smo63141;
smo63141.setAttribute('id', 'smo63141');
smo63160v0ar.push(smo63141);
const smo63142 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63142'] = smo63142;
smo63142.setAttribute('id', 'smo63142');
smo63160v0ar.push(smo63142);
const smo63143 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63143'] = smo63143;
smo63143.setAttribute('id', 'smo63143');
smo63160v0ar.push(smo63143);
const smo63144 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo63144'] = smo63144;
smo63144.setAttribute('id', 'smo63144');
smo63160v0ar.push(smo63144);
smo63160v0.addTickables(smo63160v0ar)
fmtsmo631600.joinVoices([smo63160v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
 
// formatting measures in staff group smo64103
fmtsmo601860.format([smo60186v0,smo61208v0,smo62206v0,smo63160v0], 85);
const stavesmo60186 = new VF.Stave(55, 219, 303);
stavesmo60186.setAttribute('id', 'stavesmo60186');
stavesmo60186.setBegBarType(1);
stavesmo60186.setTempo(JSON.parse('{"duration":"2","dots":0,"bpm":72}'), -1 * 0);
stavesmo60186.addClef('treble');
stavesmo60186.addTimeSignature('4/4');
const keysmo60186 = new VF.KeySignature('F');
keysmo60186.addToStave(stavesmo60186);
stavesmo60186.setContext(context);
stavesmo60186.draw();
smo60186v0.draw(context, stavesmo60186);
const stavesmo61208 = new VF.Stave(55, 312, 303);
stavesmo61208.setAttribute('id', 'stavesmo61208');
stavesmo61208.setBegBarType(1);
stavesmo61208.addClef('treble');
stavesmo61208.addTimeSignature('4/4');
const keysmo61208 = new VF.KeySignature('F');
keysmo61208.addToStave(stavesmo61208);
stavesmo61208.setContext(context);
stavesmo61208.draw();
smo61208v0.draw(context, stavesmo61208);
const stavesmo62206 = new VF.Stave(55, 391, 303);
stavesmo62206.setAttribute('id', 'stavesmo62206');
stavesmo62206.setBegBarType(1);
stavesmo62206.addClef('treble');
stavesmo62206.addTimeSignature('4/4');
const keysmo62206 = new VF.KeySignature('F');
keysmo62206.addToStave(stavesmo62206);
stavesmo62206.setContext(context);
stavesmo62206.draw();
smo62206v0.draw(context, stavesmo62206);
const stavesmo63160 = new VF.Stave(55, 468, 303);
stavesmo63160.setAttribute('id', 'stavesmo63160');
stavesmo63160.setBegBarType(1);
stavesmo63160.addClef('bass');
stavesmo63160.addTimeSignature('4/4');
const keysmo63160 = new VF.KeySignature('F');
keysmo63160.addToStave(stavesmo63160);
stavesmo63160.setContext(context);
stavesmo63160.draw();
smo63160v0.draw(context, stavesmo63160);
const leftsmo64103stavesmo601863 = new VF.StaveConnector(stavesmo60186, stavesmo63160).setType(1);
leftsmo64103stavesmo601863.setContext(context).draw();
const fmtsmo602031 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo60203v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60203v0ar = [];
const smo60187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60187'] = smo60187;
smo60187.setAttribute('id', 'smo60187');
smo60203v0ar.push(smo60187);
smo60203v0.addTickables(smo60203v0ar)
fmtsmo602031.joinVoices([smo60203v0]);
const fmtsmo612271 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo61227v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61227v0ar = [];
const smo61209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo61209'] = smo61209;
smo61209.setAttribute('id', 'smo61209');
smo61227v0ar.push(smo61209);
const smo61210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo61210'] = smo61210;
smo61210.setAttribute('id', 'smo61210');
smo61227v0ar.push(smo61210);
const smo61211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo61211'] = smo61211;
smo61211.setAttribute('id', 'smo61211');
smo61227v0ar.push(smo61211);
smo61227v0.addTickables(smo61227v0ar)
fmtsmo612271.joinVoices([smo61227v0]);
const fmtsmo622241 = new VF.Formatter();
//
// voices and notes for stave 2 1
const smo62224v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62224v0ar = [];
const smo62207 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo62207'] = smo62207;
smo62207.setAttribute('id', 'smo62207');
smo62224v0ar.push(smo62207);
const smo62208 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo62208'] = smo62208;
smo62208.setAttribute('id', 'smo62208');
smo62224v0ar.push(smo62208);
smo62224v0.addTickables(smo62224v0ar)
fmtsmo622241.joinVoices([smo62224v0]);
const fmtsmo631801 = new VF.Formatter();
//
// voices and notes for stave 3 1
const smo63180v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63180v0ar = [];
const smo63161 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63161'] = smo63161;
smo63161.setAttribute('id', 'smo63161');
smo63180v0ar.push(smo63161);
const smo63162 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo63162'] = smo63162;
smo63162.setAttribute('id', 'smo63162');
smo63180v0ar.push(smo63162);
const smo63163 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63163'] = smo63163;
smo63163.setAttribute('id', 'smo63163');
smo63180v0ar.push(smo63163);
const smo63164 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo63164'] = smo63164;
smo63164.setAttribute('id', 'smo63164');
smo63180v0ar.push(smo63164);
smo63180v0.addTickables(smo63180v0ar)
fmtsmo631801.joinVoices([smo63180v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
 
// formatting measures in staff group smo64103
fmtsmo602031.format([smo60203v0,smo61227v0,smo62224v0,smo63180v0], 106);
const stavesmo60203 = new VF.Stave(358, 219, 120);
stavesmo60203.setAttribute('id', 'stavesmo60203');
stavesmo60203.setBegBarType(VF.Barline.type.NONE);
stavesmo60203.setContext(context);
stavesmo60203.draw();
smo60203v0.draw(context, stavesmo60203);
const stavesmo61227 = new VF.Stave(358, 312, 120);
stavesmo61227.setAttribute('id', 'stavesmo61227');
stavesmo61227.setBegBarType(VF.Barline.type.NONE);
stavesmo61227.setContext(context);
stavesmo61227.draw();
smo61227v0.draw(context, stavesmo61227);
const stavesmo62224 = new VF.Stave(358, 391, 120);
stavesmo62224.setAttribute('id', 'stavesmo62224');
stavesmo62224.setBegBarType(VF.Barline.type.NONE);
stavesmo62224.setContext(context);
stavesmo62224.draw();
smo62224v0.draw(context, stavesmo62224);
const stavesmo63180 = new VF.Stave(358, 468, 120);
stavesmo63180.setAttribute('id', 'stavesmo63180');
stavesmo63180.setBegBarType(VF.Barline.type.NONE);
stavesmo63180.setContext(context);
stavesmo63180.draw();
smo63180v0.draw(context, stavesmo63180);
const fmtsmo602202 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo60220v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60220v0ar = [];
const smo60204 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60204'] = smo60204;
smo60204.setAttribute('id', 'smo60204');
smo60220v0ar.push(smo60204);
smo60220v0.addTickables(smo60220v0ar)
fmtsmo602202.joinVoices([smo60220v0]);
const fmtsmo612462 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo61246v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61246v0ar = [];
const smo61228 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo61228'] = smo61228;
smo61228.setAttribute('id', 'smo61228');
smo61246v0ar.push(smo61228);
const smo61229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo61229'] = smo61229;
smo61229.setAttribute('id', 'smo61229');
const smo612290acc = new VF.Accidental('n');
smo61229.addModifier(smo612290acc, 0);
smo61246v0ar.push(smo61229);
const smo61230 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
noteHash['smo61230'] = smo61230;
smo61230.setAttribute('id', 'smo61230');
const smo612300acc = new VF.Accidental('#');
smo61230.addModifier(smo612300acc, 0);
smo61246v0ar.push(smo61230);
smo61246v0.addTickables(smo61246v0ar)
fmtsmo612462.joinVoices([smo61246v0]);
const fmtsmo622422 = new VF.Formatter();
//
// voices and notes for stave 2 2
const smo62242v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62242v0ar = [];
const smo62225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo62225'] = smo62225;
smo62225.setAttribute('id', 'smo62225');
smo62242v0ar.push(smo62225);
const smo62226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo62226'] = smo62226;
smo62226.setAttribute('id', 'smo62226');
smo62242v0ar.push(smo62226);
smo62242v0.addTickables(smo62242v0ar)
fmtsmo622422.joinVoices([smo62242v0]);
const fmtsmo632002 = new VF.Formatter();
//
// voices and notes for stave 3 2
const smo63200v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63200v0ar = [];
const smo63181 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63181'] = smo63181;
smo63181.setAttribute('id', 'smo63181');
smo63200v0ar.push(smo63181);
const smo63182 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo63182'] = smo63182;
smo63182.setAttribute('id', 'smo63182');
smo63200v0ar.push(smo63182);
const smo63183 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63183'] = smo63183;
smo63183.setAttribute('id', 'smo63183');
smo63200v0ar.push(smo63183);
const smo63184 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo63184'] = smo63184;
smo63184.setAttribute('id', 'smo63184');
smo63200v0ar.push(smo63184);
smo63200v0.addTickables(smo63200v0ar)
fmtsmo632002.joinVoices([smo63200v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
 
// formatting measures in staff group smo64103
fmtsmo602202.format([smo60220v0,smo61246v0,smo62242v0,smo63200v0], 127);
const stavesmo60220 = new VF.Stave(478, 219, 141);
stavesmo60220.setAttribute('id', 'stavesmo60220');
stavesmo60220.setBegBarType(VF.Barline.type.NONE);
stavesmo60220.setContext(context);
stavesmo60220.draw();
smo60220v0.draw(context, stavesmo60220);
const stavesmo61246 = new VF.Stave(478, 312, 141);
stavesmo61246.setAttribute('id', 'stavesmo61246');
stavesmo61246.setBegBarType(VF.Barline.type.NONE);
stavesmo61246.setContext(context);
stavesmo61246.draw();
smo61246v0.draw(context, stavesmo61246);
const stavesmo62242 = new VF.Stave(478, 391, 141);
stavesmo62242.setAttribute('id', 'stavesmo62242');
stavesmo62242.setBegBarType(VF.Barline.type.NONE);
stavesmo62242.setContext(context);
stavesmo62242.draw();
smo62242v0.draw(context, stavesmo62242);
const stavesmo63200 = new VF.Stave(478, 468, 141);
stavesmo63200.setAttribute('id', 'stavesmo63200');
stavesmo63200.setBegBarType(VF.Barline.type.NONE);
stavesmo63200.setContext(context);
stavesmo63200.draw();
smo63200v0.draw(context, stavesmo63200);
const fmtsmo602373 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo60237v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60237v0ar = [];
const smo60221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60221'] = smo60221;
smo60221.setAttribute('id', 'smo60221');
smo60237v0ar.push(smo60221);
smo60237v0.addTickables(smo60237v0ar)
fmtsmo602373.joinVoices([smo60237v0]);
const fmtsmo612643 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo61264v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61264v0ar = [];
const smo61247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo61247'] = smo61247;
smo61247.setAttribute('id', 'smo61247');
smo61264v0ar.push(smo61247);
const smo61248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo61248'] = smo61248;
smo61248.setAttribute('id', 'smo61248');
smo61264v0ar.push(smo61248);
smo61264v0.addTickables(smo61264v0ar)
fmtsmo612643.joinVoices([smo61264v0]);
const fmtsmo622603 = new VF.Formatter();
//
// voices and notes for stave 2 3
const smo62260v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62260v0ar = [];
const smo62243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo62243'] = smo62243;
smo62243.setAttribute('id', 'smo62243');
smo62243.addModifier(new VF.Dot(), 0);
smo62260v0ar.push(smo62243);
const smo62244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62244'] = smo62244;
smo62244.setAttribute('id', 'smo62244');
smo62260v0ar.push(smo62244);
smo62260v0.addTickables(smo62260v0ar)
fmtsmo622603.joinVoices([smo62260v0]);
const fmtsmo632203 = new VF.Formatter();
//
// voices and notes for stave 3 3
const smo63220v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63220v0ar = [];
const smo63201 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63201'] = smo63201;
smo63201.setAttribute('id', 'smo63201');
smo63220v0ar.push(smo63201);
const smo63202 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo63202'] = smo63202;
smo63202.setAttribute('id', 'smo63202');
smo63220v0ar.push(smo63202);
const smo63203 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63203'] = smo63203;
smo63203.setAttribute('id', 'smo63203');
smo63220v0ar.push(smo63203);
const smo63204 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo63204'] = smo63204;
smo63204.setAttribute('id', 'smo63204');
smo63220v0ar.push(smo63204);
smo63220v0.addTickables(smo63220v0ar)
fmtsmo632203.joinVoices([smo63220v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
 
// formatting measures in staff group smo64103
fmtsmo602373.format([smo60237v0,smo61264v0,smo62260v0,smo63220v0], 121);
const stavesmo60237 = new VF.Stave(619, 219, 135);
stavesmo60237.setAttribute('id', 'stavesmo60237');
stavesmo60237.setBegBarType(VF.Barline.type.NONE);
stavesmo60237.setContext(context);
stavesmo60237.draw();
smo60237v0.draw(context, stavesmo60237);
const stavesmo61264 = new VF.Stave(619, 312, 135);
stavesmo61264.setAttribute('id', 'stavesmo61264');
stavesmo61264.setBegBarType(VF.Barline.type.NONE);
stavesmo61264.setContext(context);
stavesmo61264.draw();
smo61264v0.draw(context, stavesmo61264);
const stavesmo62260 = new VF.Stave(619, 391, 135);
stavesmo62260.setAttribute('id', 'stavesmo62260');
stavesmo62260.setBegBarType(VF.Barline.type.NONE);
stavesmo62260.setContext(context);
stavesmo62260.draw();
smo62260v0.draw(context, stavesmo62260);
const stavesmo63220 = new VF.Stave(619, 468, 135);
stavesmo63220.setAttribute('id', 'stavesmo63220');
stavesmo63220.setBegBarType(VF.Barline.type.NONE);
stavesmo63220.setContext(context);
stavesmo63220.draw();
smo63220v0.draw(context, stavesmo63220);
const fmtsmo602544 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo60254v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60254v0ar = [];
const smo60238 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60238'] = smo60238;
smo60238.setAttribute('id', 'smo60238');
smo60254v0ar.push(smo60238);
smo60254v0.addTickables(smo60254v0ar)
fmtsmo602544.joinVoices([smo60254v0]);
const fmtsmo612824 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo61282v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61282v0ar = [];
const smo61265 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo61265'] = smo61265;
smo61265.setAttribute('id', 'smo61265');
smo61282v0ar.push(smo61265);
const smo61266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo61266'] = smo61266;
smo61266.setAttribute('id', 'smo61266');
smo61282v0ar.push(smo61266);
smo61282v0.addTickables(smo61282v0ar)
fmtsmo612824.joinVoices([smo61282v0]);
const fmtsmo622784 = new VF.Formatter();
//
// voices and notes for stave 2 4
const smo62278v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62278v0ar = [];
const smo62261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo62261'] = smo62261;
smo62261.setAttribute('id', 'smo62261');
smo62278v0ar.push(smo62261);
const smo62262 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo62262'] = smo62262;
smo62262.setAttribute('id', 'smo62262');
smo62278v0ar.push(smo62262);
smo62278v0.addTickables(smo62278v0ar)
fmtsmo622784.joinVoices([smo62278v0]);
const fmtsmo632404 = new VF.Formatter();
//
// voices and notes for stave 3 4
const smo63240v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63240v0ar = [];
const smo63221 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63221'] = smo63221;
smo63221.setAttribute('id', 'smo63221');
smo63240v0ar.push(smo63221);
const smo63222 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63222'] = smo63222;
smo63222.setAttribute('id', 'smo63222');
smo63240v0ar.push(smo63222);
const smo63223 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63223'] = smo63223;
smo63223.setAttribute('id', 'smo63223');
smo63240v0ar.push(smo63223);
const smo63224 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/3/n"]}'))
noteHash['smo63224'] = smo63224;
smo63224.setAttribute('id', 'smo63224');
const smo632240acc = new VF.Accidental('#');
smo63224.addModifier(smo632240acc, 0);
smo63240v0ar.push(smo63224);
smo63240v0.addTickables(smo63240v0ar)
fmtsmo632404.joinVoices([smo63240v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
 
// formatting measures in staff group smo64103
fmtsmo602544.format([smo60254v0,smo61282v0,smo62278v0,smo63240v0], 118);
const stavesmo60254 = new VF.Stave(754, 219, 132);
stavesmo60254.setAttribute('id', 'stavesmo60254');
stavesmo60254.setBegBarType(VF.Barline.type.NONE);
stavesmo60254.setContext(context);
stavesmo60254.draw();
smo60254v0.draw(context, stavesmo60254);
const stavesmo61282 = new VF.Stave(754, 312, 132);
stavesmo61282.setAttribute('id', 'stavesmo61282');
stavesmo61282.setBegBarType(VF.Barline.type.NONE);
stavesmo61282.setContext(context);
stavesmo61282.draw();
smo61282v0.draw(context, stavesmo61282);
const stavesmo62278 = new VF.Stave(754, 391, 132);
stavesmo62278.setAttribute('id', 'stavesmo62278');
stavesmo62278.setBegBarType(VF.Barline.type.NONE);
stavesmo62278.setContext(context);
stavesmo62278.draw();
smo62278v0.draw(context, stavesmo62278);
const stavesmo63240 = new VF.Stave(754, 468, 132);
stavesmo63240.setAttribute('id', 'stavesmo63240');
stavesmo63240.setBegBarType(VF.Barline.type.NONE);
stavesmo63240.setContext(context);
stavesmo63240.draw();
smo63240v0.draw(context, stavesmo63240);
const fmtsmo602715 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo60271v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60271v0ar = [];
const smo60255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60255'] = smo60255;
smo60255.setAttribute('id', 'smo60255');
smo60271v0ar.push(smo60255);
smo60271v0.addTickables(smo60271v0ar)
fmtsmo602715.joinVoices([smo60271v0]);
const fmtsmo613015 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo61301v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61301v0ar = [];
const smo61283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo61283'] = smo61283;
smo61283.setAttribute('id', 'smo61283');
smo61301v0ar.push(smo61283);
const smo61284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo61284'] = smo61284;
smo61284.setAttribute('id', 'smo61284');
smo61301v0ar.push(smo61284);
const smo61285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo61285'] = smo61285;
smo61285.setAttribute('id', 'smo61285');
smo61301v0ar.push(smo61285);
smo61301v0.addTickables(smo61301v0ar)
fmtsmo613015.joinVoices([smo61301v0]);
const fmtsmo622975 = new VF.Formatter();
//
// voices and notes for stave 2 5
const smo62297v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62297v0ar = [];
const smo62279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo62279'] = smo62279;
smo62279.setAttribute('id', 'smo62279');
smo62297v0ar.push(smo62279);
const smo62280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo62280'] = smo62280;
smo62280.setAttribute('id', 'smo62280');
smo62297v0ar.push(smo62280);
const smo62281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo62281'] = smo62281;
smo62281.setAttribute('id', 'smo62281');
smo62297v0ar.push(smo62281);
smo62297v0.addTickables(smo62297v0ar)
fmtsmo622975.joinVoices([smo62297v0]);
const fmtsmo632605 = new VF.Formatter();
//
// voices and notes for stave 3 5
const smo63260v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63260v0ar = [];
const smo63241 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63241'] = smo63241;
smo63241.setAttribute('id', 'smo63241');
smo63260v0ar.push(smo63241);
const smo63242 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63242'] = smo63242;
smo63242.setAttribute('id', 'smo63242');
smo63260v0ar.push(smo63242);
const smo63243 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63243'] = smo63243;
smo63243.setAttribute('id', 'smo63243');
smo63260v0ar.push(smo63243);
const smo63244 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo63244'] = smo63244;
smo63244.setAttribute('id', 'smo63244');
smo63260v0ar.push(smo63244);
smo63260v0.addTickables(smo63260v0ar)
fmtsmo632605.joinVoices([smo63260v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
 
// formatting measures in staff group smo64103
fmtsmo602715.format([smo60271v0,smo61301v0,smo62297v0,smo63260v0], 106);
const stavesmo60271 = new VF.Stave(886, 219, 120);
stavesmo60271.setAttribute('id', 'stavesmo60271');
stavesmo60271.setBegBarType(VF.Barline.type.NONE);
stavesmo60271.setContext(context);
stavesmo60271.draw();
smo60271v0.draw(context, stavesmo60271);
const stavesmo61301 = new VF.Stave(886, 312, 120);
stavesmo61301.setAttribute('id', 'stavesmo61301');
stavesmo61301.setBegBarType(VF.Barline.type.NONE);
stavesmo61301.setContext(context);
stavesmo61301.draw();
smo61301v0.draw(context, stavesmo61301);
const stavesmo62297 = new VF.Stave(886, 391, 120);
stavesmo62297.setAttribute('id', 'stavesmo62297');
stavesmo62297.setBegBarType(VF.Barline.type.NONE);
stavesmo62297.setContext(context);
stavesmo62297.draw();
smo62297v0.draw(context, stavesmo62297);
const stavesmo63260 = new VF.Stave(886, 468, 120);
stavesmo63260.setAttribute('id', 'stavesmo63260');
stavesmo63260.setBegBarType(VF.Barline.type.NONE);
stavesmo63260.setContext(context);
stavesmo63260.draw();
smo63260v0.draw(context, stavesmo63260);
const fmtsmo602886 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo60288v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60288v0ar = [];
const smo60272 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60272'] = smo60272;
smo60272.setAttribute('id', 'smo60272');
smo60288v0ar.push(smo60272);
smo60288v0.addTickables(smo60288v0ar)
fmtsmo602886.joinVoices([smo60288v0]);
const fmtsmo613246 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo61324v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61324v0ar = [];
const smo61302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo61302'] = smo61302;
smo61302.setAttribute('id', 'smo61302');
smo61324v0ar.push(smo61302);
const smo61303 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo61303'] = smo61303;
smo61303.setAttribute('id', 'smo61303');
smo61324v0ar.push(smo61303);
const smo61304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo61304'] = smo61304;
smo61304.setAttribute('id', 'smo61304');
smo61324v0ar.push(smo61304);
const smo61305 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["c#/4/n"]}'))
noteHash['smo61305'] = smo61305;
smo61305.setAttribute('id', 'smo61305');
const smo613050acc = new VF.Accidental('#');
smo61305.addModifier(smo613050acc, 0);
smo61324v0ar.push(smo61305);
const smo61306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo61306'] = smo61306;
smo61306.setAttribute('id', 'smo61306');
smo61324v0ar.push(smo61306);
const smo61307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo61307'] = smo61307;
smo61307.setAttribute('id', 'smo61307');
smo61324v0ar.push(smo61307);
const smo61308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo61308'] = smo61308;
smo61308.setAttribute('id', 'smo61308');
smo61324v0ar.push(smo61308);
smo61324v0.addTickables(smo61324v0ar)
fmtsmo613246.joinVoices([smo61324v0]);
const fmtsmo623176 = new VF.Formatter();
//
// voices and notes for stave 2 6
const smo62317v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62317v0ar = [];
const smo62298 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo62298'] = smo62298;
smo62298.setAttribute('id', 'smo62298');
smo62317v0ar.push(smo62298);
const smo62299 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo62299'] = smo62299;
smo62299.setAttribute('id', 'smo62299');
smo62317v0ar.push(smo62299);
const smo62300 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo62300'] = smo62300;
smo62300.setAttribute('id', 'smo62300');
smo62317v0ar.push(smo62300);
const smo62301 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo62301'] = smo62301;
smo62301.setAttribute('id', 'smo62301');
smo62317v0ar.push(smo62301);
smo62317v0.addTickables(smo62317v0ar)
fmtsmo623176.joinVoices([smo62317v0]);
const fmtsmo632806 = new VF.Formatter();
//
// voices and notes for stave 3 6
const smo63280v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63280v0ar = [];
const smo63261 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63261'] = smo63261;
smo63261.setAttribute('id', 'smo63261');
smo63280v0ar.push(smo63261);
const smo63262 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo63262'] = smo63262;
smo63262.setAttribute('id', 'smo63262');
smo63280v0ar.push(smo63262);
const smo63263 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63263'] = smo63263;
smo63263.setAttribute('id', 'smo63263');
smo63280v0ar.push(smo63263);
const smo63264 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo63264'] = smo63264;
smo63264.setAttribute('id', 'smo63264');
smo63280v0ar.push(smo63264);
smo63280v0.addTickables(smo63280v0ar)
fmtsmo632806.joinVoices([smo63280v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
const dirsmo70422 = smo61303.getStemDirection();
smo61303.setStemDirection(dirsmo70422);
smo61304.setStemDirection(dirsmo70422);
smo61305.setStemDirection(dirsmo70422);
smo61306.setStemDirection(dirsmo70422);
const smo70422 = new VF.Beam([smo61303,smo61304,smo61305,smo61306]);
 
// formatting measures in staff group smo64103
fmtsmo602886.format([smo60288v0,smo61324v0,smo62317v0,smo63280v0], 196);
const stavesmo60288 = new VF.Stave(1006, 219, 210);
stavesmo60288.setAttribute('id', 'stavesmo60288');
stavesmo60288.setBegBarType(VF.Barline.type.NONE);
stavesmo60288.setContext(context);
stavesmo60288.draw();
smo60288v0.draw(context, stavesmo60288);
const stavesmo61324 = new VF.Stave(1006, 312, 210);
stavesmo61324.setAttribute('id', 'stavesmo61324');
stavesmo61324.setBegBarType(VF.Barline.type.NONE);
stavesmo61324.setContext(context);
stavesmo61324.draw();
smo61324v0.draw(context, stavesmo61324);
smo70422.setContext(context);
smo70422.draw();
const stavesmo62317 = new VF.Stave(1006, 391, 210);
stavesmo62317.setAttribute('id', 'stavesmo62317');
stavesmo62317.setBegBarType(VF.Barline.type.NONE);
stavesmo62317.setContext(context);
stavesmo62317.draw();
smo62317v0.draw(context, stavesmo62317);
const stavesmo63280 = new VF.Stave(1006, 468, 210);
stavesmo63280.setAttribute('id', 'stavesmo63280');
stavesmo63280.setBegBarType(VF.Barline.type.NONE);
stavesmo63280.setContext(context);
stavesmo63280.draw();
smo63280v0.draw(context, stavesmo63280);
const fmtsmo603057 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo60305v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60305v0ar = [];
const smo60289 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60289'] = smo60289;
smo60289.setAttribute('id', 'smo60289');
smo60305v0ar.push(smo60289);
smo60305v0.addTickables(smo60305v0ar)
fmtsmo603057.joinVoices([smo60305v0]);
const fmtsmo613457 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo61345v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61345v0ar = [];
const smo61325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo61325'] = smo61325;
smo61325.setAttribute('id', 'smo61325');
smo61325.addModifier(new VF.Dot(), 0);
smo61345v0ar.push(smo61325);
const smo61326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo61326'] = smo61326;
smo61326.setAttribute('id', 'smo61326');
smo61345v0ar.push(smo61326);
const smo61327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo61327'] = smo61327;
smo61327.setAttribute('id', 'smo61327');
smo61345v0ar.push(smo61327);
const smo61328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo61328'] = smo61328;
smo61328.setAttribute('id', 'smo61328');
smo61345v0ar.push(smo61328);
const smo61329 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61329'] = smo61329;
smo61329.setAttribute('id', 'smo61329');
smo61345v0ar.push(smo61329);
smo61345v0.addTickables(smo61345v0ar)
fmtsmo613457.joinVoices([smo61345v0]);
const fmtsmo623367 = new VF.Formatter();
//
// voices and notes for stave 2 7
const smo62336v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62336v0ar = [];
const smo62318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo62318'] = smo62318;
smo62318.setAttribute('id', 'smo62318');
smo62336v0ar.push(smo62318);
const smo62319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo62319'] = smo62319;
smo62319.setAttribute('id', 'smo62319');
smo62336v0ar.push(smo62319);
const smo62320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62320'] = smo62320;
smo62320.setAttribute('id', 'smo62320');
smo62336v0ar.push(smo62320);
smo62336v0.addTickables(smo62336v0ar)
fmtsmo623367.joinVoices([smo62336v0]);
const fmtsmo632987 = new VF.Formatter();
//
// voices and notes for stave 3 7
const smo63298v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63298v0ar = [];
const smo63281 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo63281'] = smo63281;
smo63281.setAttribute('id', 'smo63281');
smo63298v0ar.push(smo63281);
const smo63282 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo63282'] = smo63282;
smo63282.setAttribute('id', 'smo63282');
smo63298v0ar.push(smo63282);
smo63298v0.addTickables(smo63298v0ar)
fmtsmo632987.joinVoices([smo63298v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
const dirsmo70431 = smo61326.getStemDirection();
smo61326.setStemDirection(dirsmo70431);
smo61327.setStemDirection(dirsmo70431);
const smo70431 = new VF.Beam([smo61326,smo61327]);
 
// formatting measures in staff group smo64103
fmtsmo603057.format([smo60305v0,smo61345v0,smo62336v0,smo63298v0], 147);
const stavesmo60305 = new VF.Stave(1216, 219, 161);
stavesmo60305.setAttribute('id', 'stavesmo60305');
stavesmo60305.setBegBarType(VF.Barline.type.NONE);
stavesmo60305.setContext(context);
stavesmo60305.draw();
smo60305v0.draw(context, stavesmo60305);
const stavesmo61345 = new VF.Stave(1216, 312, 161);
stavesmo61345.setAttribute('id', 'stavesmo61345');
stavesmo61345.setBegBarType(VF.Barline.type.NONE);
stavesmo61345.setContext(context);
stavesmo61345.draw();
smo61345v0.draw(context, stavesmo61345);
smo70431.setContext(context);
smo70431.draw();
const stavesmo62336 = new VF.Stave(1216, 391, 161);
stavesmo62336.setAttribute('id', 'stavesmo62336');
stavesmo62336.setBegBarType(VF.Barline.type.NONE);
stavesmo62336.setContext(context);
stavesmo62336.draw();
smo62336v0.draw(context, stavesmo62336);
const stavesmo63298 = new VF.Stave(1216, 468, 161);
stavesmo63298.setAttribute('id', 'stavesmo63298');
stavesmo63298.setBegBarType(VF.Barline.type.NONE);
stavesmo63298.setContext(context);
stavesmo63298.draw();
smo63298v0.draw(context, stavesmo63298);
const rightsmo64103stavesmo603053 = new VF.StaveConnector(stavesmo60305, stavesmo63298).setType(0);
rightsmo64103stavesmo603053.setContext(context).draw();
const fmtsmo603258 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo60325v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60325v0ar = [];
const smo60306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo60306'] = smo60306;
smo60306.setAttribute('id', 'smo60306');
const smo60307 = new VF.Annotation('Со');
smo60307.setAttribute('id', 'smo60307');
smo60307.setFont('Merriweather', 12.1, 'normal');
smo60307.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60306.addModifier(smo60307);
smo60307.addClass('lyric lyric-0 lyric-hyphen');
smo60325v0ar.push(smo60306);
const smo60308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo60308'] = smo60308;
smo60308.setAttribute('id', 'smo60308');
const smo60309 = new VF.Annotation('ло');
smo60309.setAttribute('id', 'smo60309');
smo60309.setFont('Merriweather', 12.1, 'normal');
smo60309.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60308.addModifier(smo60309);
smo60309.addClass('lyric lyric-0');
smo60325v0ar.push(smo60308);
smo60325v0.addTickables(smo60325v0ar)
fmtsmo603258.joinVoices([smo60325v0]);
const fmtsmo613658 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo61365v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61365v0ar = [];
const smo61346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61346'] = smo61346;
smo61346.setAttribute('id', 'smo61346');
smo61365v0ar.push(smo61346);
const smo61347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo61347'] = smo61347;
smo61347.setAttribute('id', 'smo61347');
smo61365v0ar.push(smo61347);
const smo61348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo61348'] = smo61348;
smo61348.setAttribute('id', 'smo61348');
smo61365v0ar.push(smo61348);
const smo61349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61349'] = smo61349;
smo61349.setAttribute('id', 'smo61349');
smo61365v0ar.push(smo61349);
smo61365v0.addTickables(smo61365v0ar)
fmtsmo613658.joinVoices([smo61365v0]);
const fmtsmo623568 = new VF.Formatter();
//
// voices and notes for stave 2 8
const smo62356v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62356v0ar = [];
const smo62337 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62337'] = smo62337;
smo62337.setAttribute('id', 'smo62337');
smo62356v0ar.push(smo62337);
const smo62338 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo62338'] = smo62338;
smo62338.setAttribute('id', 'smo62338');
smo62356v0ar.push(smo62338);
const smo62339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo62339'] = smo62339;
smo62339.setAttribute('id', 'smo62339');
smo62356v0ar.push(smo62339);
const smo62340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62340'] = smo62340;
smo62340.setAttribute('id', 'smo62340');
smo62356v0ar.push(smo62340);
smo62356v0.addTickables(smo62356v0ar)
fmtsmo623568.joinVoices([smo62356v0]);
const fmtsmo633188 = new VF.Formatter();
//
// voices and notes for stave 3 8
const smo63318v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63318v0ar = [];
const smo63299 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63299'] = smo63299;
smo63299.setAttribute('id', 'smo63299');
smo63318v0ar.push(smo63299);
const smo63300 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63300'] = smo63300;
smo63300.setAttribute('id', 'smo63300');
smo63318v0ar.push(smo63300);
const smo63301 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo63301'] = smo63301;
smo63301.setAttribute('id', 'smo63301');
smo63318v0ar.push(smo63301);
const smo63302 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63302'] = smo63302;
smo63302.setAttribute('id', 'smo63302');
smo63318v0ar.push(smo63302);
smo63318v0.addTickables(smo63318v0ar)
fmtsmo633188.joinVoices([smo63318v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
 
// formatting measures in staff group smo64103
fmtsmo603258.format([smo60325v0,smo61365v0,smo62356v0,smo63318v0], 161);
const stavesmo60325 = new VF.Stave(55, 598, 244);
stavesmo60325.setAttribute('id', 'stavesmo60325');
stavesmo60325.setBegBarType(4);
stavesmo60325.addClef('treble');
const keysmo60325 = new VF.KeySignature('F');
keysmo60325.addToStave(stavesmo60325);
stavesmo60325.setContext(context);
stavesmo60325.draw();
smo60325v0.draw(context, stavesmo60325);
const stavesmo61365 = new VF.Stave(55, 711, 244);
stavesmo61365.setAttribute('id', 'stavesmo61365');
stavesmo61365.setBegBarType(4);
stavesmo61365.addClef('treble');
const keysmo61365 = new VF.KeySignature('F');
keysmo61365.addToStave(stavesmo61365);
stavesmo61365.setContext(context);
stavesmo61365.draw();
smo61365v0.draw(context, stavesmo61365);
const stavesmo62356 = new VF.Stave(55, 794, 244);
stavesmo62356.setAttribute('id', 'stavesmo62356');
stavesmo62356.setBegBarType(4);
stavesmo62356.addClef('treble');
const keysmo62356 = new VF.KeySignature('F');
keysmo62356.addToStave(stavesmo62356);
stavesmo62356.setContext(context);
stavesmo62356.draw();
smo62356v0.draw(context, stavesmo62356);
const stavesmo63318 = new VF.Stave(55, 875, 244);
stavesmo63318.setAttribute('id', 'stavesmo63318');
stavesmo63318.setBegBarType(4);
stavesmo63318.addClef('bass');
const keysmo63318 = new VF.KeySignature('F');
keysmo63318.addToStave(stavesmo63318);
stavesmo63318.setContext(context);
stavesmo63318.draw();
smo63318v0.draw(context, stavesmo63318);
const leftsmo64103stavesmo603253 = new VF.StaveConnector(stavesmo60325, stavesmo63318).setType(1);
leftsmo64103stavesmo603253.setContext(context).draw();
const fmtsmo603479 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo60347v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60347v0ar = [];
const smo60326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo60326'] = smo60326;
smo60326.setAttribute('id', 'smo60326');
const smo60327 = new VF.Annotation('вей,');
smo60327.setAttribute('id', 'smo60327');
smo60327.setFont('Merriweather', 12.1, 'normal');
smo60327.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60326.addModifier(smo60327);
smo60327.addClass('lyric lyric-0');
smo60347v0ar.push(smo60326);
const smo60328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo60328'] = smo60328;
smo60328.setAttribute('id', 'smo60328');
const smo60329 = new VF.Annotation('мой');
smo60329.setAttribute('id', 'smo60329');
smo60329.setFont('Merriweather', 12.1, 'normal');
smo60329.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60328.addModifier(smo60329);
smo60329.addClass('lyric lyric-0');
smo60347v0ar.push(smo60328);
const smo60330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo60330'] = smo60330;
smo60330.setAttribute('id', 'smo60330');
const smo60331 = new VF.Annotation('-');
smo60331.setAttribute('id', 'smo60331');
smo60331.setFont('Merriweather', 12.1, 'normal');
smo60331.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60330.addModifier(smo60331);
smo60331.addClass('lyric lyric-0 lyric-hyphen');
smo60347v0ar.push(smo60330);
smo60347v0.addTickables(smo60347v0ar)
fmtsmo603479.joinVoices([smo60347v0]);
const fmtsmo613869 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo61386v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61386v0ar = [];
const smo61366 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61366'] = smo61366;
smo61366.setAttribute('id', 'smo61366');
smo61386v0ar.push(smo61366);
const smo61367 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo61367'] = smo61367;
smo61367.setAttribute('id', 'smo61367');
smo61386v0ar.push(smo61367);
const smo61369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61369'] = smo61369;
smo61369.setAttribute('id', 'smo61369');
smo61386v0ar.push(smo61369);
const smo61370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo61370'] = smo61370;
smo61370.setAttribute('id', 'smo61370');
smo61386v0ar.push(smo61370);
smo61386v0.addTickables(smo61386v0ar)
fmtsmo613869.joinVoices([smo61386v0]);
const fmtsmo623769 = new VF.Formatter();
//
// voices and notes for stave 2 9
const smo62376v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62376v0ar = [];
const smo62357 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62357'] = smo62357;
smo62357.setAttribute('id', 'smo62357');
smo62376v0ar.push(smo62357);
const smo62358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo62358'] = smo62358;
smo62358.setAttribute('id', 'smo62358');
smo62376v0ar.push(smo62358);
const smo62359 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62359'] = smo62359;
smo62359.setAttribute('id', 'smo62359');
smo62376v0ar.push(smo62359);
const smo62360 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo62360'] = smo62360;
smo62360.setAttribute('id', 'smo62360');
smo62376v0ar.push(smo62360);
smo62376v0.addTickables(smo62376v0ar)
fmtsmo623769.joinVoices([smo62376v0]);
const fmtsmo633389 = new VF.Formatter();
//
// voices and notes for stave 3 9
const smo63338v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63338v0ar = [];
const smo63319 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo63319'] = smo63319;
smo63319.setAttribute('id', 'smo63319');
smo63338v0ar.push(smo63319);
const smo63320 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63320'] = smo63320;
smo63320.setAttribute('id', 'smo63320');
smo63338v0ar.push(smo63320);
const smo63321 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo63321'] = smo63321;
smo63321.setAttribute('id', 'smo63321');
smo63338v0ar.push(smo63321);
const smo63322 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63322'] = smo63322;
smo63322.setAttribute('id', 'smo63322');
smo63338v0ar.push(smo63322);
smo63338v0.addTickables(smo63338v0ar)
fmtsmo633389.joinVoices([smo63338v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
 
// formatting measures in staff group smo64103
fmtsmo603479.format([smo60347v0,smo61386v0,smo62376v0,smo63338v0], 191);
const stavesmo60347 = new VF.Stave(299, 598, 205);
stavesmo60347.setAttribute('id', 'stavesmo60347');
stavesmo60347.setBegBarType(VF.Barline.type.NONE);
stavesmo60347.setContext(context);
stavesmo60347.draw();
smo60347v0.draw(context, stavesmo60347);
const stavesmo61386 = new VF.Stave(299, 711, 205);
stavesmo61386.setAttribute('id', 'stavesmo61386');
stavesmo61386.setBegBarType(VF.Barline.type.NONE);
stavesmo61386.setContext(context);
stavesmo61386.draw();
smo61386v0.draw(context, stavesmo61386);
const stavesmo62376 = new VF.Stave(299, 794, 205);
stavesmo62376.setAttribute('id', 'stavesmo62376');
stavesmo62376.setBegBarType(VF.Barline.type.NONE);
stavesmo62376.setContext(context);
stavesmo62376.draw();
smo62376v0.draw(context, stavesmo62376);
const stavesmo63338 = new VF.Stave(299, 875, 205);
stavesmo63338.setAttribute('id', 'stavesmo63338');
stavesmo63338.setBegBarType(VF.Barline.type.NONE);
stavesmo63338.setContext(context);
stavesmo63338.draw();
smo63338v0.draw(context, stavesmo63338);
const fmtsmo6036910 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo60369v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60369v0ar = [];
const smo60348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo60348'] = smo60348;
smo60348.setAttribute('id', 'smo60348');
const smo60349 = new VF.Annotation('Со');
smo60349.setAttribute('id', 'smo60349');
smo60349.setFont('Merriweather', 12.1, 'normal');
smo60349.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60348.addModifier(smo60349);
smo60349.addClass('lyric lyric-0 lyric-hyphen');
smo60369v0ar.push(smo60348);
const smo60350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo60350'] = smo60350;
smo60350.setAttribute('id', 'smo60350');
const smo603500acc = new VF.Accidental('n');
smo60350.addModifier(smo603500acc, 0);
const smo60351 = new VF.Annotation('ло');
smo60351.setAttribute('id', 'smo60351');
smo60351.setFont('Merriweather', 12.1, 'normal');
smo60351.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60350.addModifier(smo60351);
smo60351.addClass('lyric lyric-0 lyric-hyphen');
smo60369v0ar.push(smo60350);
const smo60352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
noteHash['smo60352'] = smo60352;
smo60352.setAttribute('id', 'smo60352');
const smo603520acc = new VF.Accidental('#');
smo60352.addModifier(smo603520acc, 0);
smo60369v0ar.push(smo60352);
smo60369v0.addTickables(smo60369v0ar)
fmtsmo6036910.joinVoices([smo60369v0]);
const fmtsmo6140610 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo61406v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61406v0ar = [];
const smo61387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61387'] = smo61387;
smo61387.setAttribute('id', 'smo61387');
smo61406v0ar.push(smo61387);
const smo61388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo61388'] = smo61388;
smo61388.setAttribute('id', 'smo61388');
smo61406v0ar.push(smo61388);
const smo61389 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61389'] = smo61389;
smo61389.setAttribute('id', 'smo61389');
smo61406v0ar.push(smo61389);
const smo61390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo61390'] = smo61390;
smo61390.setAttribute('id', 'smo61390');
smo61406v0ar.push(smo61390);
smo61406v0.addTickables(smo61406v0ar)
fmtsmo6140610.joinVoices([smo61406v0]);
const fmtsmo6239610 = new VF.Formatter();
//
// voices and notes for stave 2 10
const smo62396v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62396v0ar = [];
const smo62377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62377'] = smo62377;
smo62377.setAttribute('id', 'smo62377');
smo62396v0ar.push(smo62377);
const smo62378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo62378'] = smo62378;
smo62378.setAttribute('id', 'smo62378');
smo62396v0ar.push(smo62378);
const smo62379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62379'] = smo62379;
smo62379.setAttribute('id', 'smo62379');
smo62396v0ar.push(smo62379);
const smo62380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo62380'] = smo62380;
smo62380.setAttribute('id', 'smo62380');
smo62396v0ar.push(smo62380);
smo62396v0.addTickables(smo62396v0ar)
fmtsmo6239610.joinVoices([smo62396v0]);
const fmtsmo6335810 = new VF.Formatter();
//
// voices and notes for stave 3 10
const smo63358v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63358v0ar = [];
const smo63339 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo63339'] = smo63339;
smo63339.setAttribute('id', 'smo63339');
smo63358v0ar.push(smo63339);
const smo63340 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63340'] = smo63340;
smo63340.setAttribute('id', 'smo63340');
smo63358v0ar.push(smo63340);
const smo63341 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo63341'] = smo63341;
smo63341.setAttribute('id', 'smo63341');
smo63358v0ar.push(smo63341);
const smo63342 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63342'] = smo63342;
smo63342.setAttribute('id', 'smo63342');
smo63358v0ar.push(smo63342);
smo63358v0.addTickables(smo63358v0ar)
fmtsmo6335810.joinVoices([smo63358v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
 
// formatting measures in staff group smo64103
fmtsmo6036910.format([smo60369v0,smo61406v0,smo62396v0,smo63358v0], 154);
const stavesmo60369 = new VF.Stave(504, 598, 168);
stavesmo60369.setAttribute('id', 'stavesmo60369');
stavesmo60369.setBegBarType(VF.Barline.type.NONE);
stavesmo60369.setContext(context);
stavesmo60369.draw();
smo60369v0.draw(context, stavesmo60369);
const stavesmo61406 = new VF.Stave(504, 711, 168);
stavesmo61406.setAttribute('id', 'stavesmo61406');
stavesmo61406.setBegBarType(VF.Barline.type.NONE);
stavesmo61406.setContext(context);
stavesmo61406.draw();
smo61406v0.draw(context, stavesmo61406);
const stavesmo62396 = new VF.Stave(504, 794, 168);
stavesmo62396.setAttribute('id', 'stavesmo62396');
stavesmo62396.setBegBarType(VF.Barline.type.NONE);
stavesmo62396.setContext(context);
stavesmo62396.draw();
smo62396v0.draw(context, stavesmo62396);
const stavesmo63358 = new VF.Stave(504, 875, 168);
stavesmo63358.setAttribute('id', 'stavesmo63358');
stavesmo63358.setBegBarType(VF.Barline.type.NONE);
stavesmo63358.setContext(context);
stavesmo63358.draw();
smo63358v0.draw(context, stavesmo63358);
const fmtsmo6038811 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo60388v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60388v0ar = [];
const smo60370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo60370'] = smo60370;
smo60370.setAttribute('id', 'smo60370');
const smo60371 = new VF.Annotation('вей');
smo60371.setAttribute('id', 'smo60371');
smo60371.setFont('Merriweather', 12.1, 'normal');
smo60371.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60370.addModifier(smo60371);
smo60371.addClass('lyric lyric-0');
smo60388v0ar.push(smo60370);
const smo60372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60372'] = smo60372;
smo60372.setAttribute('id', 'smo60372');
smo60388v0ar.push(smo60372);
smo60388v0.addTickables(smo60388v0ar)
fmtsmo6038811.joinVoices([smo60388v0]);
const fmtsmo6142611 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo61426v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61426v0ar = [];
const smo61407 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61407'] = smo61407;
smo61407.setAttribute('id', 'smo61407');
smo61426v0ar.push(smo61407);
const smo61408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo61408'] = smo61408;
smo61408.setAttribute('id', 'smo61408');
smo61426v0ar.push(smo61408);
const smo61409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo61409'] = smo61409;
smo61409.setAttribute('id', 'smo61409');
smo61426v0ar.push(smo61409);
const smo61410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo61410'] = smo61410;
smo61410.setAttribute('id', 'smo61410');
smo61426v0ar.push(smo61410);
smo61426v0.addTickables(smo61426v0ar)
fmtsmo6142611.joinVoices([smo61426v0]);
const fmtsmo6241611 = new VF.Formatter();
//
// voices and notes for stave 2 11
const smo62416v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62416v0ar = [];
const smo62397 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62397'] = smo62397;
smo62397.setAttribute('id', 'smo62397');
smo62416v0ar.push(smo62397);
const smo62398 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo62398'] = smo62398;
smo62398.setAttribute('id', 'smo62398');
smo62416v0ar.push(smo62398);
const smo62399 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo62399'] = smo62399;
smo62399.setAttribute('id', 'smo62399');
smo62416v0ar.push(smo62399);
const smo62400 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo62400'] = smo62400;
smo62400.setAttribute('id', 'smo62400');
smo62416v0ar.push(smo62400);
smo62416v0.addTickables(smo62416v0ar)
fmtsmo6241611.joinVoices([smo62416v0]);
const fmtsmo6337611 = new VF.Formatter();
//
// voices and notes for stave 3 11
const smo63376v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63376v0ar = [];
const smo63359 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo63359'] = smo63359;
smo63359.setAttribute('id', 'smo63359');
smo63376v0ar.push(smo63359);
const smo63360 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63360'] = smo63360;
smo63360.setAttribute('id', 'smo63360');
smo63376v0ar.push(smo63360);
smo63376v0.addTickables(smo63376v0ar)
fmtsmo6337611.joinVoices([smo63376v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
 
// formatting measures in staff group smo64103
fmtsmo6038811.format([smo60388v0,smo61426v0,smo62416v0,smo63376v0], 147);
const stavesmo60388 = new VF.Stave(672, 598, 161);
stavesmo60388.setAttribute('id', 'stavesmo60388');
stavesmo60388.setBegBarType(VF.Barline.type.NONE);
stavesmo60388.setContext(context);
stavesmo60388.draw();
smo60388v0.draw(context, stavesmo60388);
const stavesmo61426 = new VF.Stave(672, 711, 161);
stavesmo61426.setAttribute('id', 'stavesmo61426');
stavesmo61426.setBegBarType(VF.Barline.type.NONE);
stavesmo61426.setContext(context);
stavesmo61426.draw();
smo61426v0.draw(context, stavesmo61426);
const stavesmo62416 = new VF.Stave(672, 794, 161);
stavesmo62416.setAttribute('id', 'stavesmo62416');
stavesmo62416.setBegBarType(VF.Barline.type.NONE);
stavesmo62416.setContext(context);
stavesmo62416.draw();
smo62416v0.draw(context, stavesmo62416);
const stavesmo63376 = new VF.Stave(672, 875, 161);
stavesmo63376.setAttribute('id', 'stavesmo63376');
stavesmo63376.setBegBarType(VF.Barline.type.NONE);
stavesmo63376.setContext(context);
stavesmo63376.draw();
smo63376v0.draw(context, stavesmo63376);
const fmtsmo6041012 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo60410v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60410v0ar = [];
const smo60389 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo60389'] = smo60389;
smo60389.setAttribute('id', 'smo60389');
const smo60390 = new VF.Annotation('го');
smo60390.setAttribute('id', 'smo60390');
smo60390.setFont('Merriweather', 12.1, 'normal');
smo60390.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60389.addModifier(smo60390);
smo60390.addClass('lyric lyric-0 lyric-hyphen');
smo60410v0ar.push(smo60389);
const smo60391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo60391'] = smo60391;
smo60391.setAttribute('id', 'smo60391');
const smo60392 = new VF.Annotation('пo');
smo60392.setAttribute('id', 'smo60392');
smo60392.setFont('Merriweather', 12.1, 'normal');
smo60392.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60391.addModifier(smo60392);
smo60392.addClass('lyric lyric-0');
smo60410v0ar.push(smo60391);
const smo60393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo60393'] = smo60393;
smo60393.setAttribute('id', 'smo60393');
const smo60394 = new VF.Annotation('-');
smo60394.setAttribute('id', 'smo60394');
smo60394.setFont('Merriweather', 12.1, 'normal');
smo60394.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60393.addModifier(smo60394);
smo60394.addClass('lyric lyric-0 lyric-hyphen');
smo60410v0ar.push(smo60393);
smo60410v0.addTickables(smo60410v0ar)
fmtsmo6041012.joinVoices([smo60410v0]);
const fmtsmo6144612 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo61446v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61446v0ar = [];
const smo61427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61427'] = smo61427;
smo61427.setAttribute('id', 'smo61427');
smo61446v0ar.push(smo61427);
const smo61428 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo61428'] = smo61428;
smo61428.setAttribute('id', 'smo61428');
smo61446v0ar.push(smo61428);
const smo61429 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61429'] = smo61429;
smo61429.setAttribute('id', 'smo61429');
smo61446v0ar.push(smo61429);
const smo61430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo61430'] = smo61430;
smo61430.setAttribute('id', 'smo61430');
smo61446v0ar.push(smo61430);
smo61446v0.addTickables(smo61446v0ar)
fmtsmo6144612.joinVoices([smo61446v0]);
const fmtsmo6243612 = new VF.Formatter();
//
// voices and notes for stave 2 12
const smo62436v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62436v0ar = [];
const smo62417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62417'] = smo62417;
smo62417.setAttribute('id', 'smo62417');
smo62436v0ar.push(smo62417);
const smo62418 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo62418'] = smo62418;
smo62418.setAttribute('id', 'smo62418');
smo62436v0ar.push(smo62418);
const smo62419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62419'] = smo62419;
smo62419.setAttribute('id', 'smo62419');
smo62436v0ar.push(smo62419);
const smo62420 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo62420'] = smo62420;
smo62420.setAttribute('id', 'smo62420');
smo62436v0ar.push(smo62420);
smo62436v0.addTickables(smo62436v0ar)
fmtsmo6243612.joinVoices([smo62436v0]);
const fmtsmo6339612 = new VF.Formatter();
//
// voices and notes for stave 3 12
const smo63396v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63396v0ar = [];
const smo63377 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo63377'] = smo63377;
smo63377.setAttribute('id', 'smo63377');
smo63396v0ar.push(smo63377);
const smo63378 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63378'] = smo63378;
smo63378.setAttribute('id', 'smo63378');
smo63396v0ar.push(smo63378);
const smo63379 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo63379'] = smo63379;
smo63379.setAttribute('id', 'smo63379');
smo63396v0ar.push(smo63379);
const smo63380 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63380'] = smo63380;
smo63380.setAttribute('id', 'smo63380');
smo63396v0ar.push(smo63380);
smo63396v0.addTickables(smo63396v0ar)
fmtsmo6339612.joinVoices([smo63396v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
 
// formatting measures in staff group smo64103
fmtsmo6041012.format([smo60410v0,smo61446v0,smo62436v0,smo63396v0], 144);
const stavesmo60410 = new VF.Stave(833, 598, 158);
stavesmo60410.setAttribute('id', 'stavesmo60410');
stavesmo60410.setBegBarType(VF.Barline.type.NONE);
stavesmo60410.setContext(context);
stavesmo60410.draw();
smo60410v0.draw(context, stavesmo60410);
const stavesmo61446 = new VF.Stave(833, 711, 158);
stavesmo61446.setAttribute('id', 'stavesmo61446');
stavesmo61446.setBegBarType(VF.Barline.type.NONE);
stavesmo61446.setContext(context);
stavesmo61446.draw();
smo61446v0.draw(context, stavesmo61446);
const stavesmo62436 = new VF.Stave(833, 794, 158);
stavesmo62436.setAttribute('id', 'stavesmo62436');
stavesmo62436.setBegBarType(VF.Barline.type.NONE);
stavesmo62436.setContext(context);
stavesmo62436.draw();
smo62436v0.draw(context, stavesmo62436);
const stavesmo63396 = new VF.Stave(833, 875, 158);
stavesmo63396.setAttribute('id', 'stavesmo63396');
stavesmo63396.setBegBarType(VF.Barline.type.NONE);
stavesmo63396.setContext(context);
stavesmo63396.draw();
smo63396v0.draw(context, stavesmo63396);
const fmtsmo6043213 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo60432v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60432v0ar = [];
const smo60411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo60411'] = smo60411;
smo60411.setAttribute('id', 'smo60411');
const smo60412 = new VF.Annotation('си');
smo60412.setAttribute('id', 'smo60412');
smo60412.setFont('Merriweather', 12.1, 'normal');
smo60412.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60411.addModifier(smo60412);
smo60412.addClass('lyric lyric-0');
smo60432v0ar.push(smo60411);
const smo60413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo60413'] = smo60413;
smo60413.setAttribute('id', 'smo60413');
const smo60414 = new VF.Annotation('ст');
smo60414.setAttribute('id', 'smo60414');
smo60414.setFont('Merriweather', 12.1, 'normal');
smo60414.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60413.addModifier(smo60414);
smo60414.addClass('lyric lyric-0 lyric-hyphen');
smo60432v0ar.push(smo60413);
const smo60415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo60415'] = smo60415;
smo60415.setAttribute('id', 'smo60415');
const smo60416 = new VF.Annotation('ый');
smo60416.setAttribute('id', 'smo60416');
smo60416.setFont('Merriweather', 12.1, 'normal');
smo60416.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60415.addModifier(smo60416);
smo60416.addClass('lyric lyric-0');
smo60432v0ar.push(smo60415);
smo60432v0.addTickables(smo60432v0ar)
fmtsmo6043213.joinVoices([smo60432v0]);
const fmtsmo6146613 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo61466v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61466v0ar = [];
const smo61447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61447'] = smo61447;
smo61447.setAttribute('id', 'smo61447');
smo61466v0ar.push(smo61447);
const smo61448 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo61448'] = smo61448;
smo61448.setAttribute('id', 'smo61448');
smo61466v0ar.push(smo61448);
const smo61449 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61449'] = smo61449;
smo61449.setAttribute('id', 'smo61449');
smo61466v0ar.push(smo61449);
const smo61450 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo61450'] = smo61450;
smo61450.setAttribute('id', 'smo61450');
smo61466v0ar.push(smo61450);
smo61466v0.addTickables(smo61466v0ar)
fmtsmo6146613.joinVoices([smo61466v0]);
const fmtsmo6245613 = new VF.Formatter();
//
// voices and notes for stave 2 13
const smo62456v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62456v0ar = [];
const smo62437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62437'] = smo62437;
smo62437.setAttribute('id', 'smo62437');
smo62456v0ar.push(smo62437);
const smo62438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo62438'] = smo62438;
smo62438.setAttribute('id', 'smo62438');
smo62456v0ar.push(smo62438);
const smo62439 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62439'] = smo62439;
smo62439.setAttribute('id', 'smo62439');
smo62456v0ar.push(smo62439);
const smo62440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo62440'] = smo62440;
smo62440.setAttribute('id', 'smo62440');
smo62456v0ar.push(smo62440);
smo62456v0.addTickables(smo62456v0ar)
fmtsmo6245613.joinVoices([smo62456v0]);
const fmtsmo6341413 = new VF.Formatter();
//
// voices and notes for stave 3 13
const smo63414v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63414v0ar = [];
const smo63397 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo63397'] = smo63397;
smo63397.setAttribute('id', 'smo63397');
smo63414v0ar.push(smo63397);
const smo63398 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
noteHash['smo63398'] = smo63398;
smo63398.setAttribute('id', 'smo63398');
smo63414v0ar.push(smo63398);
smo63414v0.addTickables(smo63414v0ar)
fmtsmo6341413.joinVoices([smo63414v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
 
// formatting measures in staff group smo64103
fmtsmo6043213.format([smo60432v0,smo61466v0,smo62456v0,smo63414v0], 184);
const stavesmo60432 = new VF.Stave(991, 598, 198);
stavesmo60432.setAttribute('id', 'stavesmo60432');
stavesmo60432.setBegBarType(VF.Barline.type.NONE);
stavesmo60432.setContext(context);
stavesmo60432.draw();
smo60432v0.draw(context, stavesmo60432);
const stavesmo61466 = new VF.Stave(991, 711, 198);
stavesmo61466.setAttribute('id', 'stavesmo61466');
stavesmo61466.setBegBarType(VF.Barline.type.NONE);
stavesmo61466.setContext(context);
stavesmo61466.draw();
smo61466v0.draw(context, stavesmo61466);
const stavesmo62456 = new VF.Stave(991, 794, 198);
stavesmo62456.setAttribute('id', 'stavesmo62456');
stavesmo62456.setBegBarType(VF.Barline.type.NONE);
stavesmo62456.setContext(context);
stavesmo62456.draw();
smo62456v0.draw(context, stavesmo62456);
const stavesmo63414 = new VF.Stave(991, 875, 198);
stavesmo63414.setAttribute('id', 'stavesmo63414');
stavesmo63414.setBegBarType(VF.Barline.type.NONE);
stavesmo63414.setContext(context);
stavesmo63414.draw();
smo63414v0.draw(context, stavesmo63414);
const fmtsmo6045814 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo60458v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60458v0ar = [];
const smo60433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo60433'] = smo60433;
smo60433.setAttribute('id', 'smo60433');
const smo60434 = new VF.Annotation('co');
smo60434.setAttribute('id', 'smo60434');
smo60434.setFont('Merriweather', 12.1, 'normal');
smo60434.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60433.addModifier(smo60434);
smo60434.addClass('lyric lyric-0');
smo60458v0ar.push(smo60433);
const smo60435 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo60435'] = smo60435;
smo60435.setAttribute('id', 'smo60435');
const smo60436 = new VF.Annotation('-');
smo60436.setAttribute('id', 'smo60436');
smo60436.setFont('Merriweather', 12.1, 'normal');
smo60436.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60435.addModifier(smo60436);
smo60436.addClass('lyric lyric-0 lyric-hyphen');
smo60458v0ar.push(smo60435);
const smo60437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo60437'] = smo60437;
smo60437.setAttribute('id', 'smo60437');
const smo60438 = new VF.Annotation('-');
smo60438.setAttribute('id', 'smo60438');
smo60438.setFont('Merriweather', 12.1, 'normal');
smo60438.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60437.addModifier(smo60438);
smo60438.addClass('lyric lyric-0 lyric-hyphen');
smo60458v0ar.push(smo60437);
const smo60439 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo60439'] = smo60439;
smo60439.setAttribute('id', 'smo60439');
const smo60440 = new VF.Annotation('по');
smo60440.setAttribute('id', 'smo60440');
smo60440.setFont('Merriweather', 12.1, 'normal');
smo60440.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60439.addModifier(smo60440);
smo60440.addClass('lyric lyric-0');
smo60458v0ar.push(smo60439);
const smo60441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo60441'] = smo60441;
smo60441.setAttribute('id', 'smo60441');
const smo60442 = new VF.Annotation('-');
smo60442.setAttribute('id', 'smo60442');
smo60442.setFont('Merriweather', 12.1, 'normal');
smo60442.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60441.addModifier(smo60442);
smo60442.addClass('lyric lyric-0 lyric-hyphen');
smo60458v0ar.push(smo60441);
smo60458v0.addTickables(smo60458v0ar)
fmtsmo6045814.joinVoices([smo60458v0]);
const fmtsmo6148614 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo61486v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61486v0ar = [];
const smo61467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61467'] = smo61467;
smo61467.setAttribute('id', 'smo61467');
smo61486v0ar.push(smo61467);
const smo61468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo61468'] = smo61468;
smo61468.setAttribute('id', 'smo61468');
smo61486v0ar.push(smo61468);
const smo61469 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61469'] = smo61469;
smo61469.setAttribute('id', 'smo61469');
smo61486v0ar.push(smo61469);
const smo61470 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo61470'] = smo61470;
smo61470.setAttribute('id', 'smo61470');
smo61486v0ar.push(smo61470);
smo61486v0.addTickables(smo61486v0ar)
fmtsmo6148614.joinVoices([smo61486v0]);
const fmtsmo6247614 = new VF.Formatter();
//
// voices and notes for stave 2 14
const smo62476v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62476v0ar = [];
const smo62457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62457'] = smo62457;
smo62457.setAttribute('id', 'smo62457');
smo62476v0ar.push(smo62457);
const smo62458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo62458'] = smo62458;
smo62458.setAttribute('id', 'smo62458');
smo62476v0ar.push(smo62458);
const smo62459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62459'] = smo62459;
smo62459.setAttribute('id', 'smo62459');
smo62476v0ar.push(smo62459);
const smo62460 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo62460'] = smo62460;
smo62460.setAttribute('id', 'smo62460');
smo62476v0ar.push(smo62460);
smo62476v0.addTickables(smo62476v0ar)
fmtsmo6247614.joinVoices([smo62476v0]);
const fmtsmo6343414 = new VF.Formatter();
//
// voices and notes for stave 3 14
const smo63434v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63434v0ar = [];
const smo63415 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo63415'] = smo63415;
smo63415.setAttribute('id', 'smo63415');
smo63434v0ar.push(smo63415);
const smo63416 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63416'] = smo63416;
smo63416.setAttribute('id', 'smo63416');
smo63434v0ar.push(smo63416);
const smo63417 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo63417'] = smo63417;
smo63417.setAttribute('id', 'smo63417');
smo63434v0ar.push(smo63417);
const smo63418 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63418'] = smo63418;
smo63418.setAttribute('id', 'smo63418');
smo63434v0ar.push(smo63418);
smo63434v0.addTickables(smo63434v0ar)
fmtsmo6343414.joinVoices([smo63434v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
const dirsmo70486 = smo60435.getStemDirection();
smo60435.setStemDirection(dirsmo70486);
smo60437.setStemDirection(dirsmo70486);
const smo70486 = new VF.Beam([smo60435,smo60437]);
 
// formatting measures in staff group smo64103
fmtsmo6045814.format([smo60458v0,smo61486v0,smo62476v0,smo63434v0], 169);
const stavesmo60458 = new VF.Stave(1189, 598, 183);
stavesmo60458.setAttribute('id', 'stavesmo60458');
stavesmo60458.setBegBarType(VF.Barline.type.NONE);
stavesmo60458.setContext(context);
stavesmo60458.draw();
smo60458v0.draw(context, stavesmo60458);
smo70486.setContext(context);
smo70486.draw();
const stavesmo61486 = new VF.Stave(1189, 711, 183);
stavesmo61486.setAttribute('id', 'stavesmo61486');
stavesmo61486.setBegBarType(VF.Barline.type.NONE);
stavesmo61486.setContext(context);
stavesmo61486.draw();
smo61486v0.draw(context, stavesmo61486);
const stavesmo62476 = new VF.Stave(1189, 794, 183);
stavesmo62476.setAttribute('id', 'stavesmo62476');
stavesmo62476.setBegBarType(VF.Barline.type.NONE);
stavesmo62476.setContext(context);
stavesmo62476.draw();
smo62476v0.draw(context, stavesmo62476);
const stavesmo63434 = new VF.Stave(1189, 875, 183);
stavesmo63434.setAttribute('id', 'stavesmo63434');
stavesmo63434.setBegBarType(VF.Barline.type.NONE);
stavesmo63434.setContext(context);
stavesmo63434.draw();
smo63434v0.draw(context, stavesmo63434);
const rightsmo64103stavesmo604583 = new VF.StaveConnector(stavesmo60458, stavesmo63434).setType(0);
rightsmo64103stavesmo604583.setContext(context).draw();
const fmtsmo6047715 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo60477v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60477v0ar = [];
const smo60459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo60459'] = smo60459;
smo60459.setAttribute('id', 'smo60459');
smo60459.addModifier(new VF.Dot(), 0);
const smo60460 = new VF.Annotation('вей');
smo60460.setAttribute('id', 'smo60460');
smo60460.setFont('Merriweather', 12.1, 'normal');
smo60460.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60459.addModifier(smo60460);
smo60460.addClass('lyric lyric-0');
smo60477v0ar.push(smo60459);
const smo60461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60461'] = smo60461;
smo60461.setAttribute('id', 'smo60461');
smo60477v0ar.push(smo60461);
smo60477v0.addTickables(smo60477v0ar)
fmtsmo6047715.joinVoices([smo60477v0]);
const fmtsmo6150615 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo61506v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61506v0ar = [];
const smo61487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61487'] = smo61487;
smo61487.setAttribute('id', 'smo61487');
smo61506v0ar.push(smo61487);
const smo61488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo61488'] = smo61488;
smo61488.setAttribute('id', 'smo61488');
smo61506v0ar.push(smo61488);
const smo61489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo61489'] = smo61489;
smo61489.setAttribute('id', 'smo61489');
smo61506v0ar.push(smo61489);
const smo61490 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo61490'] = smo61490;
smo61490.setAttribute('id', 'smo61490');
smo61506v0ar.push(smo61490);
smo61506v0.addTickables(smo61506v0ar)
fmtsmo6150615.joinVoices([smo61506v0]);
const fmtsmo6249615 = new VF.Formatter();
//
// voices and notes for stave 2 15
const smo62496v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62496v0ar = [];
const smo62477 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62477'] = smo62477;
smo62477.setAttribute('id', 'smo62477');
smo62496v0ar.push(smo62477);
const smo62478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo62478'] = smo62478;
smo62478.setAttribute('id', 'smo62478');
smo62496v0ar.push(smo62478);
const smo62479 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo62479'] = smo62479;
smo62479.setAttribute('id', 'smo62479');
smo62496v0ar.push(smo62479);
const smo62480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo62480'] = smo62480;
smo62480.setAttribute('id', 'smo62480');
smo62496v0ar.push(smo62480);
smo62496v0.addTickables(smo62496v0ar)
fmtsmo6249615.joinVoices([smo62496v0]);
const fmtsmo6345215 = new VF.Formatter();
//
// voices and notes for stave 3 15
const smo63452v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63452v0ar = [];
const smo63435 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo63435'] = smo63435;
smo63435.setAttribute('id', 'smo63435');
smo63435.addModifier(new VF.Dot(), 0);
smo63452v0ar.push(smo63435);
const smo63436 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63436'] = smo63436;
smo63436.setAttribute('id', 'smo63436');
smo63452v0ar.push(smo63436);
smo63452v0.addTickables(smo63452v0ar)
fmtsmo6345215.joinVoices([smo63452v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
 
// formatting measures in staff group smo64103
fmtsmo6047715.format([smo60477v0,smo61506v0,smo62496v0,smo63452v0], 226);
const stavesmo60477 = new VF.Stave(55, 1005, 300);
stavesmo60477.setAttribute('id', 'stavesmo60477');
stavesmo60477.setBegBarType(1);
stavesmo60477.addClef('treble');
const keysmo60477 = new VF.KeySignature('F');
keysmo60477.addToStave(stavesmo60477);
stavesmo60477.setContext(context);
stavesmo60477.draw();
smo60477v0.draw(context, stavesmo60477);
const stavesmo61506 = new VF.Stave(55, 1120, 300);
stavesmo61506.setAttribute('id', 'stavesmo61506');
stavesmo61506.setBegBarType(1);
stavesmo61506.addClef('treble');
const keysmo61506 = new VF.KeySignature('F');
keysmo61506.addToStave(stavesmo61506);
stavesmo61506.setContext(context);
stavesmo61506.draw();
smo61506v0.draw(context, stavesmo61506);
const stavesmo62496 = new VF.Stave(55, 1215, 300);
stavesmo62496.setAttribute('id', 'stavesmo62496');
stavesmo62496.setBegBarType(1);
stavesmo62496.addClef('treble');
const keysmo62496 = new VF.KeySignature('F');
keysmo62496.addToStave(stavesmo62496);
stavesmo62496.setContext(context);
stavesmo62496.draw();
smo62496v0.draw(context, stavesmo62496);
const stavesmo63452 = new VF.Stave(55, 1293, 300);
stavesmo63452.setAttribute('id', 'stavesmo63452');
stavesmo63452.setBegBarType(1);
stavesmo63452.addClef('bass');
const keysmo63452 = new VF.KeySignature('F');
keysmo63452.addToStave(stavesmo63452);
stavesmo63452.setContext(context);
stavesmo63452.draw();
smo63452v0.draw(context, stavesmo63452);
const leftsmo64103stavesmo604773 = new VF.StaveConnector(stavesmo60477, stavesmo63452).setType(1);
leftsmo64103stavesmo604773.setContext(context).draw();
const fmtsmo6049916 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo60499v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60499v0ar = [];
const smo60478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo60478'] = smo60478;
smo60478.setAttribute('id', 'smo60478');
const smo60479 = new VF.Annotation('Tы');
smo60479.setAttribute('id', 'smo60479');
smo60479.setFont('Merriweather', 12.1, 'normal');
smo60479.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60478.addModifier(smo60479);
smo60479.addClass('lyric lyric-0');
smo60499v0ar.push(smo60478);
const smo60480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo60480'] = smo60480;
smo60480.setAttribute('id', 'smo60480');
const smo604800acc = new VF.Accidental('n');
smo60480.addModifier(smo604800acc, 0);
const smo60481 = new VF.Annotation('ку');
smo60481.setAttribute('id', 'smo60481');
smo60481.setFont('Merriweather', 12.1, 'normal');
smo60481.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60480.addModifier(smo60481);
smo60481.addClass('lyric lyric-0');
smo60499v0ar.push(smo60480);
const smo60482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
noteHash['smo60482'] = smo60482;
smo60482.setAttribute('id', 'smo60482');
const smo604820acc = new VF.Accidental('#');
smo60482.addModifier(smo604820acc, 0);
const smo60483 = new VF.Annotation('-');
smo60483.setAttribute('id', 'smo60483');
smo60483.setFont('Merriweather', 12.1, 'normal');
smo60483.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60482.addModifier(smo60483);
smo60483.addClass('lyric lyric-0 lyric-hyphen');
smo60499v0ar.push(smo60482);
smo60499v0.addTickables(smo60499v0ar)
fmtsmo6049916.joinVoices([smo60499v0]);
const fmtsmo6152616 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo61526v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61526v0ar = [];
const smo61507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61507'] = smo61507;
smo61507.setAttribute('id', 'smo61507');
smo61526v0ar.push(smo61507);
const smo61508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo61508'] = smo61508;
smo61508.setAttribute('id', 'smo61508');
smo61526v0ar.push(smo61508);
const smo61509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61509'] = smo61509;
smo61509.setAttribute('id', 'smo61509');
smo61526v0ar.push(smo61509);
const smo61510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo61510'] = smo61510;
smo61510.setAttribute('id', 'smo61510');
smo61526v0ar.push(smo61510);
smo61526v0.addTickables(smo61526v0ar)
fmtsmo6152616.joinVoices([smo61526v0]);
const fmtsmo6251616 = new VF.Formatter();
//
// voices and notes for stave 2 16
const smo62516v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62516v0ar = [];
const smo62497 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62497'] = smo62497;
smo62497.setAttribute('id', 'smo62497');
smo62516v0ar.push(smo62497);
const smo62498 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
noteHash['smo62498'] = smo62498;
smo62498.setAttribute('id', 'smo62498');
const smo624980acc = new VF.Accidental('#');
smo62498.addModifier(smo624980acc, 0);
smo62516v0ar.push(smo62498);
const smo62499 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62499'] = smo62499;
smo62499.setAttribute('id', 'smo62499');
smo62516v0ar.push(smo62499);
const smo62500 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62500'] = smo62500;
smo62500.setAttribute('id', 'smo62500');
smo62516v0ar.push(smo62500);
smo62516v0.addTickables(smo62516v0ar)
fmtsmo6251616.joinVoices([smo62516v0]);
const fmtsmo6347016 = new VF.Formatter();
//
// voices and notes for stave 3 16
const smo63470v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63470v0ar = [];
const smo63453 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo63453'] = smo63453;
smo63453.setAttribute('id', 'smo63453');
smo63470v0ar.push(smo63453);
const smo63454 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo63454'] = smo63454;
smo63454.setAttribute('id', 'smo63454');
smo63470v0ar.push(smo63454);
smo63470v0.addTickables(smo63470v0ar)
fmtsmo6347016.joinVoices([smo63470v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
 
// formatting measures in staff group smo64103
fmtsmo6049916.format([smo60499v0,smo61526v0,smo62516v0,smo63470v0], 258);
const stavesmo60499 = new VF.Stave(355, 1005, 272);
stavesmo60499.setAttribute('id', 'stavesmo60499');
stavesmo60499.setBegBarType(VF.Barline.type.NONE);
stavesmo60499.setContext(context);
stavesmo60499.draw();
smo60499v0.draw(context, stavesmo60499);
const stavesmo61526 = new VF.Stave(355, 1120, 272);
stavesmo61526.setAttribute('id', 'stavesmo61526');
stavesmo61526.setBegBarType(VF.Barline.type.NONE);
stavesmo61526.setContext(context);
stavesmo61526.draw();
smo61526v0.draw(context, stavesmo61526);
const stavesmo62516 = new VF.Stave(355, 1215, 272);
stavesmo62516.setAttribute('id', 'stavesmo62516');
stavesmo62516.setBegBarType(VF.Barline.type.NONE);
stavesmo62516.setContext(context);
stavesmo62516.draw();
smo62516v0.draw(context, stavesmo62516);
const stavesmo63470 = new VF.Stave(355, 1293, 272);
stavesmo63470.setAttribute('id', 'stavesmo63470');
stavesmo63470.setBegBarType(VF.Barline.type.NONE);
stavesmo63470.setContext(context);
stavesmo63470.draw();
smo63470v0.draw(context, stavesmo63470);
const fmtsmo6052117 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo60521v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60521v0ar = [];
const smo60500 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo60500'] = smo60500;
smo60500.setAttribute('id', 'smo60500');
const smo60501 = new VF.Annotation('дa,');
smo60501.setAttribute('id', 'smo60501');
smo60501.setFont('Merriweather', 12.1, 'normal');
smo60501.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60500.addModifier(smo60501);
smo60501.addClass('lyric lyric-0');
smo60521v0ar.push(smo60500);
const smo60502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo60502'] = smo60502;
smo60502.setAttribute('id', 'smo60502');
const smo60503 = new VF.Annotation('ку');
smo60503.setAttribute('id', 'smo60503');
smo60503.setFont('Merriweather', 12.1, 'normal');
smo60503.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60502.addModifier(smo60503);
smo60503.addClass('lyric lyric-0');
smo60521v0ar.push(smo60502);
const smo60504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo60504'] = smo60504;
smo60504.setAttribute('id', 'smo60504');
const smo60505 = new VF.Annotation('-');
smo60505.setAttribute('id', 'smo60505');
smo60505.setFont('Merriweather', 12.1, 'normal');
smo60505.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60504.addModifier(smo60505);
smo60505.addClass('lyric lyric-0 lyric-hyphen');
smo60521v0ar.push(smo60504);
smo60521v0.addTickables(smo60521v0ar)
fmtsmo6052117.joinVoices([smo60521v0]);
const fmtsmo6154617 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo61546v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61546v0ar = [];
const smo61527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61527'] = smo61527;
smo61527.setAttribute('id', 'smo61527');
smo61546v0ar.push(smo61527);
const smo61528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo61528'] = smo61528;
smo61528.setAttribute('id', 'smo61528');
smo61546v0ar.push(smo61528);
const smo61529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo61529'] = smo61529;
smo61529.setAttribute('id', 'smo61529');
smo61546v0ar.push(smo61529);
const smo61530 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo61530'] = smo61530;
smo61530.setAttribute('id', 'smo61530');
smo61546v0ar.push(smo61530);
smo61546v0.addTickables(smo61546v0ar)
fmtsmo6154617.joinVoices([smo61546v0]);
const fmtsmo6253617 = new VF.Formatter();
//
// voices and notes for stave 2 17
const smo62536v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62536v0ar = [];
const smo62517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62517'] = smo62517;
smo62517.setAttribute('id', 'smo62517');
smo62536v0ar.push(smo62517);
const smo62518 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo62518'] = smo62518;
smo62518.setAttribute('id', 'smo62518');
smo62536v0ar.push(smo62518);
const smo62519 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo62519'] = smo62519;
smo62519.setAttribute('id', 'smo62519');
smo62536v0ar.push(smo62519);
const smo62520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo62520'] = smo62520;
smo62520.setAttribute('id', 'smo62520');
smo62536v0ar.push(smo62520);
smo62536v0.addTickables(smo62536v0ar)
fmtsmo6253617.joinVoices([smo62536v0]);
const fmtsmo6348917 = new VF.Formatter();
//
// voices and notes for stave 3 17
const smo63489v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63489v0ar = [];
const smo63471 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo63471'] = smo63471;
smo63471.setAttribute('id', 'smo63471');
smo63489v0ar.push(smo63471);
const smo63472 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo63472'] = smo63472;
smo63472.setAttribute('id', 'smo63472');
smo63489v0ar.push(smo63472);
const smo63473 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63473'] = smo63473;
smo63473.setAttribute('id', 'smo63473');
smo63489v0ar.push(smo63473);
smo63489v0.addTickables(smo63489v0ar)
fmtsmo6348917.joinVoices([smo63489v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
 
// formatting measures in staff group smo64103
fmtsmo6052117.format([smo60521v0,smo61546v0,smo62536v0,smo63489v0], 234);
const stavesmo60521 = new VF.Stave(627, 1005, 248);
stavesmo60521.setAttribute('id', 'stavesmo60521');
stavesmo60521.setBegBarType(VF.Barline.type.NONE);
stavesmo60521.setContext(context);
stavesmo60521.draw();
smo60521v0.draw(context, stavesmo60521);
const stavesmo61546 = new VF.Stave(627, 1120, 248);
stavesmo61546.setAttribute('id', 'stavesmo61546');
stavesmo61546.setBegBarType(VF.Barline.type.NONE);
stavesmo61546.setContext(context);
stavesmo61546.draw();
smo61546v0.draw(context, stavesmo61546);
const stavesmo62536 = new VF.Stave(627, 1215, 248);
stavesmo62536.setAttribute('id', 'stavesmo62536');
stavesmo62536.setBegBarType(VF.Barline.type.NONE);
stavesmo62536.setContext(context);
stavesmo62536.draw();
smo62536v0.draw(context, stavesmo62536);
const stavesmo63489 = new VF.Stave(627, 1293, 248);
stavesmo63489.setAttribute('id', 'stavesmo63489');
stavesmo63489.setBegBarType(VF.Barline.type.NONE);
stavesmo63489.setContext(context);
stavesmo63489.draw();
smo63489v0.draw(context, stavesmo63489);
const fmtsmo6054318 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo60543v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60543v0ar = [];
const smo60522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo60522'] = smo60522;
smo60522.setAttribute('id', 'smo60522');
const smo60523 = new VF.Annotation('да');
smo60523.setAttribute('id', 'smo60523');
smo60523.setFont('Merriweather', 12.1, 'normal');
smo60523.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60522.addModifier(smo60523);
smo60523.addClass('lyric lyric-0');
smo60543v0ar.push(smo60522);
const smo60524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo60524'] = smo60524;
smo60524.setAttribute('id', 'smo60524');
smo60543v0ar.push(smo60524);
const smo60525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo60525'] = smo60525;
smo60525.setAttribute('id', 'smo60525');
const smo60526 = new VF.Annotation('ле');
smo60526.setAttribute('id', 'smo60526');
smo60526.setFont('Merriweather', 12.1, 'normal');
smo60526.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60525.addModifier(smo60526);
smo60526.addClass('lyric lyric-0 lyric-hyphen');
smo60543v0ar.push(smo60525);
const smo60527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo60527'] = smo60527;
smo60527.setAttribute('id', 'smo60527');
smo60543v0ar.push(smo60527);
smo60543v0.addTickables(smo60543v0ar)
fmtsmo6054318.joinVoices([smo60543v0]);
const fmtsmo6156618 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo61566v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61566v0ar = [];
const smo61547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61547'] = smo61547;
smo61547.setAttribute('id', 'smo61547');
smo61566v0ar.push(smo61547);
const smo61548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo61548'] = smo61548;
smo61548.setAttribute('id', 'smo61548');
smo61566v0ar.push(smo61548);
const smo61549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61549'] = smo61549;
smo61549.setAttribute('id', 'smo61549');
smo61566v0ar.push(smo61549);
const smo61550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo61550'] = smo61550;
smo61550.setAttribute('id', 'smo61550');
smo61566v0ar.push(smo61550);
smo61566v0.addTickables(smo61566v0ar)
fmtsmo6156618.joinVoices([smo61566v0]);
const fmtsmo6255618 = new VF.Formatter();
//
// voices and notes for stave 2 18
const smo62556v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62556v0ar = [];
const smo62537 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62537'] = smo62537;
smo62537.setAttribute('id', 'smo62537');
smo62556v0ar.push(smo62537);
const smo62538 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo62538'] = smo62538;
smo62538.setAttribute('id', 'smo62538');
smo62556v0ar.push(smo62538);
const smo62539 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62539'] = smo62539;
smo62539.setAttribute('id', 'smo62539');
smo62556v0ar.push(smo62539);
const smo62540 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo62540'] = smo62540;
smo62540.setAttribute('id', 'smo62540');
smo62556v0ar.push(smo62540);
smo62556v0.addTickables(smo62556v0ar)
fmtsmo6255618.joinVoices([smo62556v0]);
const fmtsmo6350718 = new VF.Formatter();
//
// voices and notes for stave 3 18
const smo63507v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63507v0ar = [];
const smo63490 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo63490'] = smo63490;
smo63490.setAttribute('id', 'smo63490');
smo63507v0ar.push(smo63490);
const smo63491 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo63491'] = smo63491;
smo63491.setAttribute('id', 'smo63491');
smo63507v0ar.push(smo63491);
smo63507v0.addTickables(smo63507v0ar)
fmtsmo6350718.joinVoices([smo63507v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
 
// formatting measures in staff group smo64103
fmtsmo6054318.format([smo60543v0,smo61566v0,smo62556v0,smo63507v0], 228);
const stavesmo60543 = new VF.Stave(875, 1005, 242);
stavesmo60543.setAttribute('id', 'stavesmo60543');
stavesmo60543.setBegBarType(VF.Barline.type.NONE);
stavesmo60543.setContext(context);
stavesmo60543.draw();
smo60543v0.draw(context, stavesmo60543);
const stavesmo61566 = new VF.Stave(875, 1120, 242);
stavesmo61566.setAttribute('id', 'stavesmo61566');
stavesmo61566.setBegBarType(VF.Barline.type.NONE);
stavesmo61566.setContext(context);
stavesmo61566.draw();
smo61566v0.draw(context, stavesmo61566);
const stavesmo62556 = new VF.Stave(875, 1215, 242);
stavesmo62556.setAttribute('id', 'stavesmo62556');
stavesmo62556.setBegBarType(VF.Barline.type.NONE);
stavesmo62556.setContext(context);
stavesmo62556.draw();
smo62556v0.draw(context, stavesmo62556);
const stavesmo63507 = new VF.Stave(875, 1293, 242);
stavesmo63507.setAttribute('id', 'stavesmo63507');
stavesmo63507.setBegBarType(VF.Barline.type.NONE);
stavesmo63507.setContext(context);
stavesmo63507.draw();
smo63507v0.draw(context, stavesmo63507);
const fmtsmo6056419 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo60564v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60564v0ar = [];
const smo60544 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo60544'] = smo60544;
smo60544.setAttribute('id', 'smo60544');
const smo60545 = new VF.Annotation('тишь,');
smo60545.setAttribute('id', 'smo60545');
smo60545.setFont('Merriweather', 12.1, 'normal');
smo60545.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60544.addModifier(smo60545);
smo60545.addClass('lyric lyric-0');
smo60564v0ar.push(smo60544);
const smo60546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo60546'] = smo60546;
smo60546.setAttribute('id', 'smo60546');
const smo60547 = new VF.Annotation('-');
smo60547.setAttribute('id', 'smo60547');
smo60547.setFont('Merriweather', 12.1, 'normal');
smo60547.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60546.addModifier(smo60547);
smo60547.addClass('lyric lyric-0 lyric-hyphen');
smo60564v0ar.push(smo60546);
const smo60548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60548'] = smo60548;
smo60548.setAttribute('id', 'smo60548');
smo60564v0ar.push(smo60548);
smo60564v0.addTickables(smo60564v0ar)
fmtsmo6056419.joinVoices([smo60564v0]);
const fmtsmo6158619 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo61586v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61586v0ar = [];
const smo61567 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61567'] = smo61567;
smo61567.setAttribute('id', 'smo61567');
smo61586v0ar.push(smo61567);
const smo61568 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo61568'] = smo61568;
smo61568.setAttribute('id', 'smo61568');
smo61586v0ar.push(smo61568);
const smo61569 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo61569'] = smo61569;
smo61569.setAttribute('id', 'smo61569');
smo61586v0ar.push(smo61569);
const smo61570 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo61570'] = smo61570;
smo61570.setAttribute('id', 'smo61570');
smo61586v0ar.push(smo61570);
smo61586v0.addTickables(smo61586v0ar)
fmtsmo6158619.joinVoices([smo61586v0]);
const fmtsmo6257619 = new VF.Formatter();
//
// voices and notes for stave 2 19
const smo62576v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62576v0ar = [];
const smo62557 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62557'] = smo62557;
smo62557.setAttribute('id', 'smo62557');
smo62576v0ar.push(smo62557);
const smo62558 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo62558'] = smo62558;
smo62558.setAttribute('id', 'smo62558');
smo62576v0ar.push(smo62558);
const smo62559 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo62559'] = smo62559;
smo62559.setAttribute('id', 'smo62559');
smo62576v0ar.push(smo62559);
const smo62560 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo62560'] = smo62560;
smo62560.setAttribute('id', 'smo62560');
smo62576v0ar.push(smo62560);
smo62576v0.addTickables(smo62576v0ar)
fmtsmo6257619.joinVoices([smo62576v0]);
const fmtsmo6352619 = new VF.Formatter();
//
// voices and notes for stave 3 19
const smo63526v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63526v0ar = [];
const smo63508 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo63508'] = smo63508;
smo63508.setAttribute('id', 'smo63508');
smo63526v0ar.push(smo63508);
const smo63509 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63509'] = smo63509;
smo63509.setAttribute('id', 'smo63509');
smo63526v0ar.push(smo63509);
const smo63510 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo63510'] = smo63510;
smo63510.setAttribute('id', 'smo63510');
smo63526v0ar.push(smo63510);
smo63526v0.addTickables(smo63526v0ar)
fmtsmo6352619.joinVoices([smo63526v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
 
// formatting measures in staff group smo64103
fmtsmo6056419.format([smo60564v0,smo61586v0,smo62576v0,smo63526v0], 245);
const stavesmo60564 = new VF.Stave(1117, 1005, 259);
stavesmo60564.setAttribute('id', 'stavesmo60564');
stavesmo60564.setBegBarType(VF.Barline.type.NONE);
stavesmo60564.setContext(context);
stavesmo60564.draw();
smo60564v0.draw(context, stavesmo60564);
const stavesmo61586 = new VF.Stave(1117, 1120, 259);
stavesmo61586.setAttribute('id', 'stavesmo61586');
stavesmo61586.setBegBarType(VF.Barline.type.NONE);
stavesmo61586.setContext(context);
stavesmo61586.draw();
smo61586v0.draw(context, stavesmo61586);
const stavesmo62576 = new VF.Stave(1117, 1215, 259);
stavesmo62576.setAttribute('id', 'stavesmo62576');
stavesmo62576.setBegBarType(VF.Barline.type.NONE);
stavesmo62576.setContext(context);
stavesmo62576.draw();
smo62576v0.draw(context, stavesmo62576);
const stavesmo63526 = new VF.Stave(1117, 1293, 259);
stavesmo63526.setAttribute('id', 'stavesmo63526');
stavesmo63526.setBegBarType(VF.Barline.type.NONE);
stavesmo63526.setContext(context);
stavesmo63526.draw();
smo63526v0.draw(context, stavesmo63526);
const rightsmo64103stavesmo605643 = new VF.StaveConnector(stavesmo60564, stavesmo63526).setType(0);
rightsmo64103stavesmo605643.setContext(context).draw();
const fmtsmo6058920 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo60589v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60589v0ar = [];
const smo60565 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo60565'] = smo60565;
smo60565.setAttribute('id', 'smo60565');
const smo605650acc = new VF.Accidental('n');
smo60565.addModifier(smo605650acc, 0);
smo60565.addModifier(new VF.Dot(), 0);
const smo60566 = new VF.Annotation('где');
smo60566.setAttribute('id', 'smo60566');
smo60566.setFont('Merriweather', 12.1, 'normal');
smo60566.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60565.addModifier(smo60566);
smo60566.addClass('lyric lyric-0');
smo60589v0ar.push(smo60565);
const smo60567 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo60567'] = smo60567;
smo60567.setAttribute('id', 'smo60567');
const smo60568 = new VF.Annotation('-');
smo60568.setAttribute('id', 'smo60568');
smo60568.setFont('Merriweather', 12.1, 'normal');
smo60568.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60567.addModifier(smo60568);
smo60568.addClass('lyric lyric-0 lyric-hyphen');
smo60589v0ar.push(smo60567);
const smo60569 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo60569'] = smo60569;
smo60569.setAttribute('id', 'smo60569');
smo60589v0ar.push(smo60569);
const smo60570 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo60570'] = smo60570;
smo60570.setAttribute('id', 'smo60570');
const smo60571 = new VF.Annotation('вс');
smo60571.setAttribute('id', 'smo60571');
smo60571.setFont('Merriweather', 12.1, 'normal');
smo60571.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60570.addModifier(smo60571);
smo60571.addClass('lyric lyric-0 lyric-hyphen');
smo60589v0ar.push(smo60570);
const smo60572 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo60572'] = smo60572;
smo60572.setAttribute('id', 'smo60572');
const smo60573 = new VF.Annotation('ю');
smo60573.setAttribute('id', 'smo60573');
smo60573.setFont('Merriweather', 12.1, 'normal');
smo60573.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60572.addModifier(smo60573);
smo60573.addClass('lyric lyric-0');
smo60589v0ar.push(smo60572);
smo60589v0.addTickables(smo60589v0ar)
fmtsmo6058920.joinVoices([smo60589v0]);
const fmtsmo6160620 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo61606v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61606v0ar = [];
const smo61587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61587'] = smo61587;
smo61587.setAttribute('id', 'smo61587');
smo61606v0ar.push(smo61587);
const smo61588 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo61588'] = smo61588;
smo61588.setAttribute('id', 'smo61588');
smo61606v0ar.push(smo61588);
const smo61589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61589'] = smo61589;
smo61589.setAttribute('id', 'smo61589');
smo61606v0ar.push(smo61589);
const smo61590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
noteHash['smo61590'] = smo61590;
smo61590.setAttribute('id', 'smo61590');
const smo615900acc = new VF.Accidental('#');
smo61590.addModifier(smo615900acc, 0);
smo61606v0ar.push(smo61590);
smo61606v0.addTickables(smo61606v0ar)
fmtsmo6160620.joinVoices([smo61606v0]);
const fmtsmo6259620 = new VF.Formatter();
//
// voices and notes for stave 2 20
const smo62596v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62596v0ar = [];
const smo62577 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62577'] = smo62577;
smo62577.setAttribute('id', 'smo62577');
smo62596v0ar.push(smo62577);
const smo62578 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo62578'] = smo62578;
smo62578.setAttribute('id', 'smo62578');
smo62596v0ar.push(smo62578);
const smo62579 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62579'] = smo62579;
smo62579.setAttribute('id', 'smo62579');
smo62596v0ar.push(smo62579);
const smo62580 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo62580'] = smo62580;
smo62580.setAttribute('id', 'smo62580');
smo62596v0ar.push(smo62580);
smo62596v0.addTickables(smo62596v0ar)
fmtsmo6259620.joinVoices([smo62596v0]);
const fmtsmo6354620 = new VF.Formatter();
//
// voices and notes for stave 3 20
const smo63546v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63546v0ar = [];
const smo63527 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo63527'] = smo63527;
smo63527.setAttribute('id', 'smo63527');
smo63546v0ar.push(smo63527);
const smo63528 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63528'] = smo63528;
smo63528.setAttribute('id', 'smo63528');
smo63546v0ar.push(smo63528);
const smo63529 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo63529'] = smo63529;
smo63529.setAttribute('id', 'smo63529');
smo63546v0ar.push(smo63529);
const smo63530 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63530'] = smo63530;
smo63530.setAttribute('id', 'smo63530');
smo63546v0ar.push(smo63530);
smo63546v0.addTickables(smo63546v0ar)
fmtsmo6354620.joinVoices([smo63546v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
const dirsmo70552 = smo60567.getStemDirection();
smo60567.setStemDirection(dirsmo70552);
smo60569.setStemDirection(dirsmo70552);
const smo70552 = new VF.Beam([smo60567,smo60569]);
 
// formatting measures in staff group smo64103
fmtsmo6058920.format([smo60589v0,smo61606v0,smo62596v0,smo63546v0], 219);
const stavesmo60589 = new VF.Stave(55, 1423, 294);
stavesmo60589.setAttribute('id', 'stavesmo60589');
stavesmo60589.setBegBarType(1);
stavesmo60589.addClef('treble');
const keysmo60589 = new VF.KeySignature('F');
keysmo60589.addToStave(stavesmo60589);
stavesmo60589.setContext(context);
stavesmo60589.draw();
smo60589v0.draw(context, stavesmo60589);
smo70552.setContext(context);
smo70552.draw();
const stavesmo61606 = new VF.Stave(55, 1534, 294);
stavesmo61606.setAttribute('id', 'stavesmo61606');
stavesmo61606.setBegBarType(1);
stavesmo61606.addClef('treble');
const keysmo61606 = new VF.KeySignature('F');
keysmo61606.addToStave(stavesmo61606);
stavesmo61606.setContext(context);
stavesmo61606.draw();
smo61606v0.draw(context, stavesmo61606);
const stavesmo62596 = new VF.Stave(55, 1617, 294);
stavesmo62596.setAttribute('id', 'stavesmo62596');
stavesmo62596.setBegBarType(1);
stavesmo62596.addClef('treble');
const keysmo62596 = new VF.KeySignature('F');
keysmo62596.addToStave(stavesmo62596);
stavesmo62596.setContext(context);
stavesmo62596.draw();
smo62596v0.draw(context, stavesmo62596);
const stavesmo63546 = new VF.Stave(55, 1711, 294);
stavesmo63546.setAttribute('id', 'stavesmo63546');
stavesmo63546.setBegBarType(1);
stavesmo63546.addClef('bass');
const keysmo63546 = new VF.KeySignature('F');
keysmo63546.addToStave(stavesmo63546);
stavesmo63546.setContext(context);
stavesmo63546.draw();
smo63546v0.draw(context, stavesmo63546);
const leftsmo64103stavesmo605893 = new VF.StaveConnector(stavesmo60589, stavesmo63546).setType(1);
leftsmo64103stavesmo605893.setContext(context).draw();
const fmtsmo6061121 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo60611v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60611v0ar = [];
const smo60590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo60590'] = smo60590;
smo60590.setAttribute('id', 'smo60590');
const smo60591 = new VF.Annotation('ноч');
smo60591.setAttribute('id', 'smo60591');
smo60591.setFont('Merriweather', 12.1, 'normal');
smo60591.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60590.addModifier(smo60591);
smo60591.addClass('lyric lyric-0 lyric-hyphen');
smo60611v0ar.push(smo60590);
const smo60592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo60592'] = smo60592;
smo60592.setAttribute('id', 'smo60592');
const smo60593 = new VF.Annotation('ку');
smo60593.setAttribute('id', 'smo60593');
smo60593.setFont('Merriweather', 12.1, 'normal');
smo60593.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60592.addModifier(smo60593);
smo60593.addClass('lyric lyric-0');
smo60611v0ar.push(smo60592);
const smo60594 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo60594'] = smo60594;
smo60594.setAttribute('id', 'smo60594');
const smo60595 = new VF.Annotation('про');
smo60595.setAttribute('id', 'smo60595');
smo60595.setFont('Merriweather', 12.1, 'normal');
smo60595.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60594.addModifier(smo60595);
smo60595.addClass('lyric lyric-0');
smo60611v0ar.push(smo60594);
smo60611v0.addTickables(smo60611v0ar)
fmtsmo6061121.joinVoices([smo60611v0]);
const fmtsmo6162621 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo61626v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61626v0ar = [];
const smo61607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61607'] = smo61607;
smo61607.setAttribute('id', 'smo61607');
smo61626v0ar.push(smo61607);
const smo61608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo61608'] = smo61608;
smo61608.setAttribute('id', 'smo61608');
smo61626v0ar.push(smo61608);
const smo61609 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61609'] = smo61609;
smo61609.setAttribute('id', 'smo61609');
smo61626v0ar.push(smo61609);
const smo61610 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo61610'] = smo61610;
smo61610.setAttribute('id', 'smo61610');
smo61626v0ar.push(smo61610);
smo61626v0.addTickables(smo61626v0ar)
fmtsmo6162621.joinVoices([smo61626v0]);
const fmtsmo6261621 = new VF.Formatter();
//
// voices and notes for stave 2 21
const smo62616v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62616v0ar = [];
const smo62597 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62597'] = smo62597;
smo62597.setAttribute('id', 'smo62597');
smo62616v0ar.push(smo62597);
const smo62598 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo62598'] = smo62598;
smo62598.setAttribute('id', 'smo62598');
smo62616v0ar.push(smo62598);
const smo62599 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62599'] = smo62599;
smo62599.setAttribute('id', 'smo62599');
smo62616v0ar.push(smo62599);
const smo62600 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo62600'] = smo62600;
smo62600.setAttribute('id', 'smo62600');
smo62616v0ar.push(smo62600);
smo62616v0.addTickables(smo62616v0ar)
fmtsmo6261621.joinVoices([smo62616v0]);
const fmtsmo6356621 = new VF.Formatter();
//
// voices and notes for stave 3 21
const smo63566v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63566v0ar = [];
const smo63547 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo63547'] = smo63547;
smo63547.setAttribute('id', 'smo63547');
smo63566v0ar.push(smo63547);
const smo63548 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63548'] = smo63548;
smo63548.setAttribute('id', 'smo63548');
smo63566v0ar.push(smo63548);
const smo63549 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo63549'] = smo63549;
smo63549.setAttribute('id', 'smo63549');
smo63566v0ar.push(smo63549);
const smo63550 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63550'] = smo63550;
smo63550.setAttribute('id', 'smo63550');
smo63566v0ar.push(smo63550);
smo63566v0.addTickables(smo63566v0ar)
fmtsmo6356621.joinVoices([smo63566v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
 
// formatting measures in staff group smo64103
fmtsmo6061121.format([smo60611v0,smo61626v0,smo62616v0,smo63566v0], 198);
const stavesmo60611 = new VF.Stave(349, 1423, 212);
stavesmo60611.setAttribute('id', 'stavesmo60611');
stavesmo60611.setBegBarType(VF.Barline.type.NONE);
stavesmo60611.setContext(context);
stavesmo60611.draw();
smo60611v0.draw(context, stavesmo60611);
const stavesmo61626 = new VF.Stave(349, 1534, 212);
stavesmo61626.setAttribute('id', 'stavesmo61626');
stavesmo61626.setBegBarType(VF.Barline.type.NONE);
stavesmo61626.setContext(context);
stavesmo61626.draw();
smo61626v0.draw(context, stavesmo61626);
const stavesmo62616 = new VF.Stave(349, 1617, 212);
stavesmo62616.setAttribute('id', 'stavesmo62616');
stavesmo62616.setBegBarType(VF.Barline.type.NONE);
stavesmo62616.setContext(context);
stavesmo62616.draw();
smo62616v0.draw(context, stavesmo62616);
const stavesmo63566 = new VF.Stave(349, 1711, 212);
stavesmo63566.setAttribute('id', 'stavesmo63566');
stavesmo63566.setBegBarType(VF.Barline.type.NONE);
stavesmo63566.setContext(context);
stavesmo63566.draw();
smo63566v0.draw(context, stavesmo63566);
const fmtsmo6064122 = new VF.Formatter();
//
// voices and notes for stave 0 22
const smo60641v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60641v0ar = [];
const smo60612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo60612'] = smo60612;
smo60612.setAttribute('id', 'smo60612');
const smo60613 = new VF.Annotation('-');
smo60613.setAttribute('id', 'smo60613');
smo60613.setFont('Merriweather', 12.1, 'normal');
smo60613.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60612.addModifier(smo60613);
smo60613.addClass('lyric lyric-0 lyric-hyphen');
smo60641v0ar.push(smo60612);
const smo60614 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo60614'] = smo60614;
smo60614.setAttribute('id', 'smo60614');
const smo60615 = new VF.Annotation('-');
smo60615.setAttribute('id', 'smo60615');
smo60615.setFont('Merriweather', 12.1, 'normal');
smo60615.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60614.addModifier(smo60615);
smo60615.addClass('lyric lyric-0 lyric-hyphen');
smo60641v0ar.push(smo60614);
const smo60616 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo60616'] = smo60616;
smo60616.setAttribute('id', 'smo60616');
const smo60617 = new VF.Annotation('-');
smo60617.setAttribute('id', 'smo60617');
smo60617.setFont('Merriweather', 12.1, 'normal');
smo60617.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60616.addModifier(smo60617);
smo60617.addClass('lyric lyric-0 lyric-hyphen');
smo60641v0ar.push(smo60616);
const smo60618 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
noteHash['smo60618'] = smo60618;
smo60618.setAttribute('id', 'smo60618');
const smo606180acc = new VF.Accidental('#');
smo60618.addModifier(smo606180acc, 0);
const smo60619 = new VF.Annotation('-');
smo60619.setAttribute('id', 'smo60619');
smo60619.setFont('Merriweather', 12.1, 'normal');
smo60619.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60618.addModifier(smo60619);
smo60619.addClass('lyric lyric-0 lyric-hyphen');
smo60641v0ar.push(smo60618);
const smo60620 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo60620'] = smo60620;
smo60620.setAttribute('id', 'smo60620');
const smo60621 = new VF.Annotation('-');
smo60621.setAttribute('id', 'smo60621');
smo60621.setFont('Merriweather', 12.1, 'normal');
smo60621.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60620.addModifier(smo60621);
smo60621.addClass('lyric lyric-0 lyric-hyphen');
smo60641v0ar.push(smo60620);
const smo60622 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo60622'] = smo60622;
smo60622.setAttribute('id', 'smo60622');
const smo606220acc = new VF.Accidental('n');
smo60622.addModifier(smo606220acc, 0);
const smo60623 = new VF.Annotation('-');
smo60623.setAttribute('id', 'smo60623');
smo60623.setFont('Merriweather', 12.1, 'normal');
smo60623.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60622.addModifier(smo60623);
smo60623.addClass('lyric lyric-0 lyric-hyphen');
smo60641v0ar.push(smo60622);
const smo60624 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
noteHash['smo60624'] = smo60624;
smo60624.setAttribute('id', 'smo60624');
const smo606240acc = new VF.Accidental('#');
smo60624.addModifier(smo606240acc, 0);
const smo60625 = new VF.Annotation('по');
smo60625.setAttribute('id', 'smo60625');
smo60625.setFont('Merriweather', 12.1, 'normal');
smo60625.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60624.addModifier(smo60625);
smo60625.addClass('lyric lyric-0 lyric-hyphen');
smo60641v0ar.push(smo60624);
smo60641v0.addTickables(smo60641v0ar)
fmtsmo6064122.joinVoices([smo60641v0]);
const fmtsmo6164422 = new VF.Formatter();
//
// voices and notes for stave 1 22
const smo61644v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61644v0ar = [];
const smo61627 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61627'] = smo61627;
smo61627.setAttribute('id', 'smo61627');
smo61644v0ar.push(smo61627);
const smo61628 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
noteHash['smo61628'] = smo61628;
smo61628.setAttribute('id', 'smo61628');
const smo616280acc = new VF.Accidental('#');
smo61628.addModifier(smo616280acc, 0);
smo61628.addModifier(new VF.Dot(), 0);
smo61644v0ar.push(smo61628);
smo61644v0.addTickables(smo61644v0ar)
fmtsmo6164422.joinVoices([smo61644v0]);
const fmtsmo6263422 = new VF.Formatter();
//
// voices and notes for stave 2 22
const smo62634v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62634v0ar = [];
const smo62617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62617'] = smo62617;
smo62617.setAttribute('id', 'smo62617');
smo62634v0ar.push(smo62617);
const smo62618 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo62618'] = smo62618;
smo62618.setAttribute('id', 'smo62618');
smo62618.addModifier(new VF.Dot(), 0);
smo62634v0ar.push(smo62618);
smo62634v0.addTickables(smo62634v0ar)
fmtsmo6263422.joinVoices([smo62634v0]);
const fmtsmo6358322 = new VF.Formatter();
//
// voices and notes for stave 3 22
const smo63583v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63583v0ar = [];
const smo63567 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo63567'] = smo63567;
smo63567.setAttribute('id', 'smo63567');
smo63583v0ar.push(smo63567);
smo63583v0.addTickables(smo63583v0ar)
fmtsmo6358322.joinVoices([smo63583v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
const dirsmo70569 = smo60614.getStemDirection();
smo60614.setStemDirection(dirsmo70569);
smo60616.setStemDirection(dirsmo70569);
smo60618.setStemDirection(dirsmo70569);
smo60620.setStemDirection(dirsmo70569);
const smo70569 = new VF.Beam([smo60614,smo60616,smo60618,smo60620]);
 
// formatting measures in staff group smo64103
fmtsmo6064122.format([smo60641v0,smo61644v0,smo62634v0,smo63583v0], 255);
const stavesmo60641 = new VF.Stave(561, 1423, 269);
stavesmo60641.setAttribute('id', 'stavesmo60641');
stavesmo60641.setBegBarType(VF.Barline.type.NONE);
stavesmo60641.setContext(context);
stavesmo60641.draw();
smo60641v0.draw(context, stavesmo60641);
smo70569.setContext(context);
smo70569.draw();
const stavesmo61644 = new VF.Stave(561, 1534, 269);
stavesmo61644.setAttribute('id', 'stavesmo61644');
stavesmo61644.setBegBarType(VF.Barline.type.NONE);
stavesmo61644.setContext(context);
stavesmo61644.draw();
smo61644v0.draw(context, stavesmo61644);
const stavesmo62634 = new VF.Stave(561, 1617, 269);
stavesmo62634.setAttribute('id', 'stavesmo62634');
stavesmo62634.setBegBarType(VF.Barline.type.NONE);
stavesmo62634.setContext(context);
stavesmo62634.draw();
smo62634v0.draw(context, stavesmo62634);
const stavesmo63583 = new VF.Stave(561, 1711, 269);
stavesmo63583.setAttribute('id', 'stavesmo63583');
stavesmo63583.setBegBarType(VF.Barline.type.NONE);
stavesmo63583.setContext(context);
stavesmo63583.draw();
smo63583v0.draw(context, stavesmo63583);
const fmtsmo6066023 = new VF.Formatter();
//
// voices and notes for stave 0 23
const smo60660v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60660v0ar = [];
const smo60642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo60642'] = smo60642;
smo60642.setAttribute('id', 'smo60642');
smo60642.addModifier(new VF.Dot(), 0);
const smo60643 = new VF.Annotation('ешь');
smo60643.setAttribute('id', 'smo60643');
smo60643.setFont('Merriweather', 12.1, 'normal');
smo60643.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60642.addModifier(smo60643);
smo60643.addClass('lyric lyric-0');
smo60660v0ar.push(smo60642);
const smo60644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60644'] = smo60644;
smo60644.setAttribute('id', 'smo60644');
smo60660v0ar.push(smo60644);
smo60660v0.addTickables(smo60660v0ar)
fmtsmo6066023.joinVoices([smo60660v0]);
const fmtsmo6166223 = new VF.Formatter();
//
// voices and notes for stave 1 23
const smo61662v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61662v0ar = [];
const smo61645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo61645'] = smo61645;
smo61645.setAttribute('id', 'smo61645');
smo61645.addModifier(new VF.Dot(), 0);
smo61662v0ar.push(smo61645);
const smo61646 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61646'] = smo61646;
smo61646.setAttribute('id', 'smo61646');
smo61662v0ar.push(smo61646);
smo61662v0.addTickables(smo61662v0ar)
fmtsmo6166223.joinVoices([smo61662v0]);
const fmtsmo6265223 = new VF.Formatter();
//
// voices and notes for stave 2 23
const smo62652v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62652v0ar = [];
const smo62635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo62635'] = smo62635;
smo62635.setAttribute('id', 'smo62635');
smo62635.addModifier(new VF.Dot(), 0);
smo62652v0ar.push(smo62635);
const smo62636 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62636'] = smo62636;
smo62636.setAttribute('id', 'smo62636');
smo62652v0ar.push(smo62636);
smo62652v0.addTickables(smo62652v0ar)
fmtsmo6265223.joinVoices([smo62652v0]);
const fmtsmo6360123 = new VF.Formatter();
//
// voices and notes for stave 3 23
const smo63601v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63601v0ar = [];
const smo63584 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63584'] = smo63584;
smo63584.setAttribute('id', 'smo63584');
smo63584.addModifier(new VF.Dot(), 0);
smo63601v0ar.push(smo63584);
const smo63585 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63585'] = smo63585;
smo63585.setAttribute('id', 'smo63585');
smo63601v0ar.push(smo63585);
smo63601v0.addTickables(smo63601v0ar)
fmtsmo6360123.joinVoices([smo63601v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
 
// formatting measures in staff group smo64103
fmtsmo6066023.format([smo60660v0,smo61662v0,smo62652v0,smo63601v0], 88);
const stavesmo60660 = new VF.Stave(830, 1423, 102);
stavesmo60660.setAttribute('id', 'stavesmo60660');
stavesmo60660.setBegBarType(VF.Barline.type.NONE);
stavesmo60660.setContext(context);
stavesmo60660.draw();
smo60660v0.draw(context, stavesmo60660);
const stavesmo61662 = new VF.Stave(830, 1534, 102);
stavesmo61662.setAttribute('id', 'stavesmo61662');
stavesmo61662.setBegBarType(VF.Barline.type.NONE);
stavesmo61662.setContext(context);
stavesmo61662.draw();
smo61662v0.draw(context, stavesmo61662);
const stavesmo62652 = new VF.Stave(830, 1617, 102);
stavesmo62652.setAttribute('id', 'stavesmo62652');
stavesmo62652.setBegBarType(VF.Barline.type.NONE);
stavesmo62652.setContext(context);
stavesmo62652.draw();
smo62652v0.draw(context, stavesmo62652);
const stavesmo63601 = new VF.Stave(830, 1711, 102);
stavesmo63601.setAttribute('id', 'stavesmo63601');
stavesmo63601.setBegBarType(VF.Barline.type.NONE);
stavesmo63601.setContext(context);
stavesmo63601.draw();
smo63601v0.draw(context, stavesmo63601);
const fmtsmo6069024 = new VF.Formatter();
//
// voices and notes for stave 0 24
const smo60690v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60690v0ar = [];
const smo60661 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo60661'] = smo60661;
smo60661.setAttribute('id', 'smo60661');
const smo60662 = new VF.Annotation('Со');
smo60662.setAttribute('id', 'smo60662');
smo60662.setFont('Merriweather', 12.1, 'normal');
smo60662.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60661.addModifier(smo60662);
smo60662.addClass('lyric lyric-0');
smo60690v0ar.push(smo60661);
const smo60663 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo60663'] = smo60663;
smo60663.setAttribute('id', 'smo60663');
const smo60664 = new VF.Annotation('-');
smo60664.setAttribute('id', 'smo60664');
smo60664.setFont('Merriweather', 12.1, 'normal');
smo60664.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60663.addModifier(smo60664);
smo60664.addClass('lyric lyric-0 lyric-hyphen');
smo60690v0ar.push(smo60663);
const smo60665 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo60665'] = smo60665;
smo60665.setAttribute('id', 'smo60665');
const smo60666 = new VF.Annotation('-');
smo60666.setAttribute('id', 'smo60666');
smo60666.setFont('Merriweather', 12.1, 'normal');
smo60666.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60665.addModifier(smo60666);
smo60666.addClass('lyric lyric-0 lyric-hyphen');
smo60690v0ar.push(smo60665);
const smo60667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["d#/5/n"]}'))
noteHash['smo60667'] = smo60667;
smo60667.setAttribute('id', 'smo60667');
const smo606670acc = new VF.Accidental('#');
smo60667.addModifier(smo606670acc, 0);
const smo60668 = new VF.Annotation('-');
smo60668.setAttribute('id', 'smo60668');
smo60668.setFont('Merriweather', 12.1, 'normal');
smo60668.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60667.addModifier(smo60668);
smo60668.addClass('lyric lyric-0 lyric-hyphen');
smo60690v0ar.push(smo60667);
const smo60669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo60669'] = smo60669;
smo60669.setAttribute('id', 'smo60669');
const smo60670 = new VF.Annotation('-');
smo60670.setAttribute('id', 'smo60670');
smo60670.setFont('Merriweather', 12.1, 'normal');
smo60670.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60669.addModifier(smo60670);
smo60670.addClass('lyric lyric-0 lyric-hyphen');
smo60690v0ar.push(smo60669);
const smo60671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo60671'] = smo60671;
smo60671.setAttribute('id', 'smo60671');
const smo60672 = new VF.Annotation('лo');
smo60672.setAttribute('id', 'smo60672');
smo60672.setFont('Merriweather', 12.1, 'normal');
smo60672.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60671.addModifier(smo60672);
smo60672.addClass('lyric lyric-0');
smo60690v0ar.push(smo60671);
const smo60673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo60673'] = smo60673;
smo60673.setAttribute('id', 'smo60673');
const smo60674 = new VF.Annotation('-');
smo60674.setAttribute('id', 'smo60674');
smo60674.setFont('Merriweather', 12.1, 'normal');
smo60674.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60673.addModifier(smo60674);
smo60674.addClass('lyric lyric-0 lyric-hyphen');
smo60690v0ar.push(smo60673);
smo60690v0.addTickables(smo60690v0ar)
fmtsmo6069024.joinVoices([smo60690v0]);
const fmtsmo6168324 = new VF.Formatter();
//
// voices and notes for stave 1 24
const smo61683v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61683v0ar = [];
const smo61663 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61663'] = smo61663;
smo61663.setAttribute('id', 'smo61663');
smo61683v0ar.push(smo61663);
const smo61664 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo61664'] = smo61664;
smo61664.setAttribute('id', 'smo61664');
const smo61665 = new VF.Ornament('mordent_inverted');
smo61664.addModifier(smo61665, 0);
smo61683v0ar.push(smo61664);
const smo61666 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
noteHash['smo61666'] = smo61666;
smo61666.setAttribute('id', 'smo61666');
const smo616660acc = new VF.Accidental('#');
smo61666.addModifier(smo616660acc, 0);
smo61683v0ar.push(smo61666);
const smo61667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo61667'] = smo61667;
smo61667.setAttribute('id', 'smo61667');
smo61683v0ar.push(smo61667);
smo61683v0.addTickables(smo61683v0ar)
fmtsmo6168324.joinVoices([smo61683v0]);
const fmtsmo6266924 = new VF.Formatter();
//
// voices and notes for stave 2 24
const smo62669v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62669v0ar = [];
const smo62653 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo62653'] = smo62653;
smo62653.setAttribute('id', 'smo62653');
smo62669v0ar.push(smo62653);
smo62669v0.addTickables(smo62669v0ar)
fmtsmo6266924.joinVoices([smo62669v0]);
const fmtsmo6362124 = new VF.Formatter();
//
// voices and notes for stave 3 24
const smo63621v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63621v0ar = [];
const smo63602 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo63602'] = smo63602;
smo63602.setAttribute('id', 'smo63602');
smo63621v0ar.push(smo63602);
const smo63603 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63603'] = smo63603;
smo63603.setAttribute('id', 'smo63603');
smo63621v0ar.push(smo63603);
const smo63604 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo63604'] = smo63604;
smo63604.setAttribute('id', 'smo63604');
smo63621v0ar.push(smo63604);
const smo63605 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63605'] = smo63605;
smo63605.setAttribute('id', 'smo63605');
smo63621v0ar.push(smo63605);
smo63621v0.addTickables(smo63621v0ar)
fmtsmo6362124.joinVoices([smo63621v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
const dirsmo70586 = smo60663.getStemDirection();
smo60663.setStemDirection(dirsmo70586);
smo60665.setStemDirection(dirsmo70586);
smo60667.setStemDirection(dirsmo70586);
smo60669.setStemDirection(dirsmo70586);
const smo70586 = new VF.Beam([smo60663,smo60665,smo60667,smo60669]);
 
// formatting measures in staff group smo64103
fmtsmo6069024.format([smo60690v0,smo61683v0,smo62669v0,smo63621v0], 237);
const stavesmo60690 = new VF.Stave(932, 1423, 251);
stavesmo60690.setAttribute('id', 'stavesmo60690');
stavesmo60690.setBegBarType(VF.Barline.type.NONE);
stavesmo60690.setContext(context);
stavesmo60690.draw();
smo60690v0.draw(context, stavesmo60690);
smo70586.setContext(context);
smo70586.draw();
const stavesmo61683 = new VF.Stave(932, 1534, 251);
stavesmo61683.setAttribute('id', 'stavesmo61683');
stavesmo61683.setBegBarType(VF.Barline.type.NONE);
stavesmo61683.setContext(context);
stavesmo61683.draw();
smo61683v0.draw(context, stavesmo61683);
const stavesmo62669 = new VF.Stave(932, 1617, 251);
stavesmo62669.setAttribute('id', 'stavesmo62669');
stavesmo62669.setBegBarType(VF.Barline.type.NONE);
stavesmo62669.setContext(context);
stavesmo62669.draw();
smo62669v0.draw(context, stavesmo62669);
const stavesmo63621 = new VF.Stave(932, 1711, 251);
stavesmo63621.setAttribute('id', 'stavesmo63621');
stavesmo63621.setBegBarType(VF.Barline.type.NONE);
stavesmo63621.setContext(context);
stavesmo63621.draw();
smo63621v0.draw(context, stavesmo63621);
const fmtsmo6071025 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo60710v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60710v0ar = [];
const smo60691 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo60691'] = smo60691;
smo60691.setAttribute('id', 'smo60691');
const smo60692 = new VF.Annotation('вей');
smo60692.setAttribute('id', 'smo60692');
smo60692.setFont('Merriweather', 12.1, 'normal');
smo60692.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60691.addModifier(smo60692);
smo60692.addClass('lyric lyric-0');
smo60710v0ar.push(smo60691);
const smo60693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo60693'] = smo60693;
smo60693.setAttribute('id', 'smo60693');
const smo60694 = new VF.Annotation('мой');
smo60694.setAttribute('id', 'smo60694');
smo60694.setFont('Merriweather', 12.1, 'normal');
smo60694.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo60693.addModifier(smo60694);
smo60694.addClass('lyric lyric-0');
smo60710v0ar.push(smo60693);
smo60710v0.addTickables(smo60710v0ar)
fmtsmo6071025.joinVoices([smo60710v0]);
const fmtsmo6170425 = new VF.Formatter();
//
// voices and notes for stave 1 25
const smo61704v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo61704v0ar = [];
const smo61684 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo61684'] = smo61684;
smo61684.setAttribute('id', 'smo61684');
smo61704v0ar.push(smo61684);
const smo61685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo61685'] = smo61685;
smo61685.setAttribute('id', 'smo61685');
const smo61686 = new VF.Ornament('mordent_inverted');
smo61685.addModifier(smo61686, 0);
smo61704v0ar.push(smo61685);
const smo61687 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo61687'] = smo61687;
smo61687.setAttribute('id', 'smo61687');
smo61704v0ar.push(smo61687);
const smo61688 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo61688'] = smo61688;
smo61688.setAttribute('id', 'smo61688');
smo61704v0ar.push(smo61688);
smo61704v0.addTickables(smo61704v0ar)
fmtsmo6170425.joinVoices([smo61704v0]);
const fmtsmo6268625 = new VF.Formatter();
//
// voices and notes for stave 2 25
const smo62686v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62686v0ar = [];
const smo62670 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo62670'] = smo62670;
smo62670.setAttribute('id', 'smo62670');
smo62686v0ar.push(smo62670);
smo62686v0.addTickables(smo62686v0ar)
fmtsmo6268625.joinVoices([smo62686v0]);
const fmtsmo6363925 = new VF.Formatter();
//
// voices and notes for stave 3 25
const smo63639v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63639v0ar = [];
const smo63622 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo63622'] = smo63622;
smo63622.setAttribute('id', 'smo63622');
smo63639v0ar.push(smo63622);
const smo63623 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo63623'] = smo63623;
smo63623.setAttribute('id', 'smo63623');
smo63639v0ar.push(smo63623);
smo63639v0.addTickables(smo63639v0ar)
fmtsmo6363925.joinVoices([smo63639v0]);
// create beam groups and tuplets for format grp smo64103 before formatting
 
// formatting measures in staff group smo64103
fmtsmo6071025.format([smo60710v0,smo61704v0,smo62686v0,smo63639v0], 177);
const stavesmo60710 = new VF.Stave(1183, 1423, 191);
stavesmo60710.setAttribute('id', 'stavesmo60710');
stavesmo60710.setBegBarType(VF.Barline.type.NONE);
stavesmo60710.setContext(context);
stavesmo60710.draw();
smo60710v0.draw(context, stavesmo60710);
const stavesmo61704 = new VF.Stave(1183, 1534, 191);
stavesmo61704.setAttribute('id', 'stavesmo61704');
stavesmo61704.setBegBarType(VF.Barline.type.NONE);
stavesmo61704.setContext(context);
stavesmo61704.draw();
smo61704v0.draw(context, stavesmo61704);
const stavesmo62686 = new VF.Stave(1183, 1617, 191);
stavesmo62686.setAttribute('id', 'stavesmo62686');
stavesmo62686.setBegBarType(VF.Barline.type.NONE);
stavesmo62686.setContext(context);
stavesmo62686.draw();
smo62686v0.draw(context, stavesmo62686);
const stavesmo63639 = new VF.Stave(1183, 1711, 191);
stavesmo63639.setAttribute('id', 'stavesmo63639');
stavesmo63639.setBegBarType(VF.Barline.type.NONE);
stavesmo63639.setContext(context);
stavesmo63639.draw();
smo63639v0.draw(context, stavesmo63639);
const rightsmo64103stavesmo607103 = new VF.StaveConnector(stavesmo60710, stavesmo63639).setType(0);
rightsmo64103stavesmo607103.setContext(context).draw();
const smo71439 = new VF.Curve(smo60522, smo60524, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":45},{"x":0,"y":45}],"invert":false,"position":2,"position_end":1}'));
smo71439.setContext(context).draw();
const smo71440 = new VF.TextBracket({ start: smo60612, stop: smo60642, text: 'ritard', position: 1 });
smo71440.setLine(1).setContext(context).draw();
const smo71441 = new VF.StaveTie({ first_note: smo62653, last_note: smo62670, 
          firstNote: smo62653, lastNote: smo62670, first_indices: [0], last_indices: [0]});
smo71441.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo60307').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo60309').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo60327').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo60329').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo60331').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo60349').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo60371').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo60390').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo60392').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo60394').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo60412').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo60414').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo60416').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo60434').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo60436').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo60438').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo60440').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo60442').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo60460').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo60479').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo60483').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo60501').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo60503').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo60505').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo60523').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo60526').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo60545').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo60547').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo60566').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo60568').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo60571').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo60573').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo60591').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo60593').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo60595').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo60613').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo60615').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo60617').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo60621').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo60623').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo60625').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo60643').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo60662').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo60664').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo60666').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo60668').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo60670').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo60672').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo60674').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo60692').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo60694').setAttributeNS('', 'transform', 'translate(0 15)');
}
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
//
// create the musical objects
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1632');
svg.setAttributeNS('', 'height', '2112');
svg.setAttributeNS('', 'viewBox', '0 0 1989 2574');
VF.setMusicFont("Bravura","Gonville","Custom");
const noteHash = {};
const voiceHash = {}
const fmtsmo3610490 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo361049v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361049v0ar = [];
const smo361019 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
noteHash['smo361019'] = smo361019;
smo361019.setAttribute('id', 'smo361019');
smo361049v0ar.push(smo361019);
const smo361021 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/6/n"]}'))
noteHash['smo361021'] = smo361021;
smo361021.setAttribute('id', 'smo361021');
smo361049v0ar.push(smo361021);
const smo361022 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
noteHash['smo361022'] = smo361022;
smo361022.setAttribute('id', 'smo361022');
smo361049v0ar.push(smo361022);
const smo361023 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo361023'] = smo361023;
smo361023.setAttribute('id', 'smo361023');
smo361049v0ar.push(smo361023);
const smo361024 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo361024'] = smo361024;
smo361024.setAttribute('id', 'smo361024');
smo361049v0ar.push(smo361024);
const smo361025 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
noteHash['smo361025'] = smo361025;
smo361025.setAttribute('id', 'smo361025');
smo361049v0ar.push(smo361025);
const smo361026 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo361026'] = smo361026;
smo361026.setAttribute('id', 'smo361026');
smo361049v0ar.push(smo361026);
smo361049v0.addTickables(smo361049v0ar)
fmtsmo3610490.joinVoices([smo361049v0]);
const smo361049v1 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361049v1ar = [];
const smo361027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo361027'] = smo361027;
smo361027.setAttribute('id', 'smo361027');
smo361049v1ar.push(smo361027);
const smo361028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo361028'] = smo361028;
smo361028.setAttribute('id', 'smo361028');
smo361049v1ar.push(smo361028);
const smo361029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361029'] = smo361029;
smo361029.setAttribute('id', 'smo361029');
smo361049v1ar.push(smo361029);
const smo361030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo361030'] = smo361030;
smo361030.setAttribute('id', 'smo361030');
smo361049v1ar.push(smo361030);
const smo361031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo361031'] = smo361031;
smo361031.setAttribute('id', 'smo361031');
smo361049v1ar.push(smo361031);
const smo361032 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo361032'] = smo361032;
smo361032.setAttribute('id', 'smo361032');
smo361049v1ar.push(smo361032);
const smo361033 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo361033'] = smo361033;
smo361033.setAttribute('id', 'smo361033');
smo361049v1ar.push(smo361033);
smo361049v1.addTickables(smo361049v1ar)
fmtsmo3610490.joinVoices([smo361049v1]);
const fmtsmo3631880 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo363188v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363188v0ar = [];
const smo363172 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo363172'] = smo363172;
smo363172.setAttribute('id', 'smo363172');
smo363188v0ar.push(smo363172);
smo363188v0.addTickables(smo363188v0ar)
fmtsmo3631880.joinVoices([smo363188v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo385863 = smo361019.getStemDirection();
smo361019.setStemDirection(dirsmo385863);
smo361021.setStemDirection(dirsmo385863);
smo361022.setStemDirection(dirsmo385863);
smo361023.setStemDirection(dirsmo385863);
const smo385863 = new VF.Beam([smo361019,smo361021,smo361022,smo361023]);
const dirsmo385864 = smo361024.getStemDirection();
smo361024.setStemDirection(dirsmo385864);
smo361025.setStemDirection(dirsmo385864);
smo361026.setStemDirection(dirsmo385864);
const smo385864 = new VF.Beam([smo361024,smo361025,smo361026]);
const dirsmo385865 = smo361027.getStemDirection();
smo361027.setStemDirection(dirsmo385865);
smo361028.setStemDirection(dirsmo385865);
smo361029.setStemDirection(dirsmo385865);
smo361030.setStemDirection(dirsmo385865);
const smo385865 = new VF.Beam([smo361027,smo361028,smo361029,smo361030]);
const dirsmo385866 = smo361031.getStemDirection();
smo361031.setStemDirection(dirsmo385866);
smo361032.setStemDirection(dirsmo385866);
smo361033.setStemDirection(dirsmo385866);
const smo385866 = new VF.Beam([smo361031,smo361032,smo361033]);
 
// formatting measures in staff group smo365028
fmtsmo3610490.format([smo361049v0,smo361049v1,smo363188v0], 213);
const stavesmo361049 = new VF.Stave(73, 406, 295);
stavesmo361049.setAttribute('id', 'stavesmo361049');
stavesmo361049.setBegBarType(1);
stavesmo361049.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":72}'), -1 * 55);
stavesmo361049.addClef('treble');
stavesmo361049.addTimeSignature('2/4');
stavesmo361049.setContext(context);
stavesmo361049.draw();
smo361049v0.draw(context, stavesmo361049);
smo361049v1.draw(context, stavesmo361049);
smo385863.setContext(context);
smo385863.draw();
smo385864.setContext(context);
smo385864.draw();
smo385865.setContext(context);
smo385865.draw();
smo385866.setContext(context);
smo385866.draw();
const stavesmo363188 = new VF.Stave(73, 545, 295);
stavesmo363188.setAttribute('id', 'stavesmo363188');
stavesmo363188.setBegBarType(1);
stavesmo363188.addClef('bass');
stavesmo363188.addTimeSignature('2/4');
stavesmo363188.setContext(context);
stavesmo363188.draw();
smo363188v0.draw(context, stavesmo363188);
const leftsmo365028stavesmo3610491 = new VF.StaveConnector(stavesmo361049, stavesmo363188).setType(3);
leftsmo365028stavesmo3610491.setContext(context).draw();
const fmtsmo3610721 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo361072v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361072v0ar = [];
const smo361050 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo361050'] = smo361050;
smo361050.setAttribute('id', 'smo361050');
smo361072v0ar.push(smo361050);
const smo361051 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo361051'] = smo361051;
smo361051.setAttribute('id', 'smo361051');
smo361072v0ar.push(smo361051);
const smo361052 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361052'] = smo361052;
smo361052.setAttribute('id', 'smo361052');
smo361072v0ar.push(smo361052);
const smo361053 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo361053'] = smo361053;
smo361053.setAttribute('id', 'smo361053');
smo361072v0ar.push(smo361053);
const smo361054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo361054'] = smo361054;
smo361054.setAttribute('id', 'smo361054');
smo361072v0ar.push(smo361054);
const smo361055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo361055'] = smo361055;
smo361055.setAttribute('id', 'smo361055');
smo361072v0ar.push(smo361055);
const smo361056 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo361056'] = smo361056;
smo361056.setAttribute('id', 'smo361056');
smo361072v0ar.push(smo361056);
smo361072v0.addTickables(smo361072v0ar)
fmtsmo3610721.joinVoices([smo361072v0]);
const fmtsmo3632111 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo363211v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363211v0ar = [];
const smo363189 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo363189'] = smo363189;
smo363189.setAttribute('id', 'smo363189');
smo363211v0ar.push(smo363189);
const smo363190 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo363190'] = smo363190;
smo363190.setAttribute('id', 'smo363190');
smo363211v0ar.push(smo363190);
const smo363191 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo363191'] = smo363191;
smo363191.setAttribute('id', 'smo363191');
smo363211v0ar.push(smo363191);
const smo363192 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo363192'] = smo363192;
smo363192.setAttribute('id', 'smo363192');
smo363211v0ar.push(smo363192);
const smo363193 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo363193'] = smo363193;
smo363193.setAttribute('id', 'smo363193');
smo363211v0ar.push(smo363193);
const smo363194 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo363194'] = smo363194;
smo363194.setAttribute('id', 'smo363194');
smo363211v0ar.push(smo363194);
const smo363195 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo363195'] = smo363195;
smo363195.setAttribute('id', 'smo363195');
smo363211v0ar.push(smo363195);
smo363211v0.addTickables(smo363211v0ar)
fmtsmo3632111.joinVoices([smo363211v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo385871 = smo361050.getStemDirection();
smo361050.setStemDirection(dirsmo385871);
smo361051.setStemDirection(dirsmo385871);
smo361052.setStemDirection(dirsmo385871);
smo361053.setStemDirection(dirsmo385871);
const smo385871 = new VF.Beam([smo361050,smo361051,smo361052,smo361053]);
const dirsmo385872 = smo361054.getStemDirection();
smo361054.setStemDirection(dirsmo385872);
smo361055.setStemDirection(dirsmo385872);
smo361056.setStemDirection(dirsmo385872);
const smo385872 = new VF.Beam([smo361054,smo361055,smo361056]);
const dirsmo385875 = smo363189.getStemDirection();
smo363189.setStemDirection(dirsmo385875);
smo363190.setStemDirection(dirsmo385875);
smo363191.setStemDirection(dirsmo385875);
smo363192.setStemDirection(dirsmo385875);
const smo385875 = new VF.Beam([smo363189,smo363190,smo363191,smo363192]);
const dirsmo385876 = smo363193.getStemDirection();
smo363193.setStemDirection(dirsmo385876);
smo363194.setStemDirection(dirsmo385876);
smo363195.setStemDirection(dirsmo385876);
const smo385876 = new VF.Beam([smo363193,smo363194,smo363195]);
 
// formatting measures in staff group smo365028
fmtsmo3610721.format([smo361072v0,smo363211v0], 281);
const stavesmo361072 = new VF.Stave(368, 406, 295);
stavesmo361072.setAttribute('id', 'stavesmo361072');
stavesmo361072.setBegBarType(VF.Barline.type.NONE);
stavesmo361072.setContext(context);
stavesmo361072.draw();
smo361072v0.draw(context, stavesmo361072);
smo385871.setContext(context);
smo385871.draw();
smo385872.setContext(context);
smo385872.draw();
const stavesmo363211 = new VF.Stave(368, 545, 295);
stavesmo363211.setAttribute('id', 'stavesmo363211');
stavesmo363211.setBegBarType(VF.Barline.type.NONE);
stavesmo363211.setContext(context);
stavesmo363211.draw();
smo363211v0.draw(context, stavesmo363211);
smo385875.setContext(context);
smo385875.draw();
smo385876.setContext(context);
smo385876.draw();
const fmtsmo3610962 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo361096v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361096v0ar = [];
const smo361073 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo361073'] = smo361073;
smo361073.setAttribute('id', 'smo361073');
smo361096v0ar.push(smo361073);
const smo361074 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo361074'] = smo361074;
smo361074.setAttribute('id', 'smo361074');
smo361096v0ar.push(smo361074);
const smo361075 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo361075'] = smo361075;
smo361075.setAttribute('id', 'smo361075');
smo361096v0ar.push(smo361075);
const smo361076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo361076'] = smo361076;
smo361076.setAttribute('id', 'smo361076');
smo361096v0ar.push(smo361076);
const smo361077 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo361077'] = smo361077;
smo361077.setAttribute('id', 'smo361077');
smo361096v0ar.push(smo361077);
const smo361078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo361078'] = smo361078;
smo361078.setAttribute('id', 'smo361078');
smo361096v0ar.push(smo361078);
const smo361079 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo361079'] = smo361079;
smo361079.setAttribute('id', 'smo361079');
smo361096v0ar.push(smo361079);
const smo361080 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n"]}'))
noteHash['smo361080'] = smo361080;
smo361080.setAttribute('id', 'smo361080');
const smo3610800acc = new VF.Accidental('b');
smo361080.addModifier(smo3610800acc, 0);
smo361096v0ar.push(smo361080);
smo361096v0.addTickables(smo361096v0ar)
fmtsmo3610962.joinVoices([smo361096v0]);
const fmtsmo3632352 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo363235v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363235v0ar = [];
const smo363212 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo363212'] = smo363212;
smo363212.setAttribute('id', 'smo363212');
smo363235v0ar.push(smo363212);
const smo363213 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo363213'] = smo363213;
smo363213.setAttribute('id', 'smo363213');
smo363235v0ar.push(smo363213);
const smo363214 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo363214'] = smo363214;
smo363214.setAttribute('id', 'smo363214');
smo363235v0ar.push(smo363214);
const smo363215 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo363215'] = smo363215;
smo363215.setAttribute('id', 'smo363215');
smo363235v0ar.push(smo363215);
const smo363216 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo363216'] = smo363216;
smo363216.setAttribute('id', 'smo363216');
smo363235v0ar.push(smo363216);
const smo363217 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
noteHash['smo363217'] = smo363217;
smo363217.setAttribute('id', 'smo363217');
smo363235v0ar.push(smo363217);
const smo363218 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo363218'] = smo363218;
smo363218.setAttribute('id', 'smo363218');
smo363235v0ar.push(smo363218);
const smo363219 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/2/n"]}'))
noteHash['smo363219'] = smo363219;
smo363219.setAttribute('id', 'smo363219');
const smo3632190acc = new VF.Accidental('b');
smo363219.addModifier(smo3632190acc, 0);
smo363235v0ar.push(smo363219);
smo363235v0.addTickables(smo363235v0ar)
fmtsmo3632352.joinVoices([smo363235v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo385879 = smo361073.getStemDirection();
smo361073.setStemDirection(dirsmo385879);
smo361074.setStemDirection(dirsmo385879);
smo361075.setStemDirection(dirsmo385879);
smo361076.setStemDirection(dirsmo385879);
const smo385879 = new VF.Beam([smo361073,smo361074,smo361075,smo361076]);
const dirsmo385880 = smo361077.getStemDirection();
smo361077.setStemDirection(dirsmo385880);
smo361078.setStemDirection(dirsmo385880);
smo361079.setStemDirection(dirsmo385880);
smo361080.setStemDirection(dirsmo385880);
const smo385880 = new VF.Beam([smo361077,smo361078,smo361079,smo361080]);
const dirsmo385883 = smo363212.getStemDirection();
smo363212.setStemDirection(dirsmo385883);
smo363213.setStemDirection(dirsmo385883);
smo363214.setStemDirection(dirsmo385883);
smo363215.setStemDirection(dirsmo385883);
const smo385883 = new VF.Beam([smo363212,smo363213,smo363214,smo363215]);
const dirsmo385884 = smo363216.getStemDirection();
smo363216.setStemDirection(dirsmo385884);
smo363217.setStemDirection(dirsmo385884);
smo363218.setStemDirection(dirsmo385884);
smo363219.setStemDirection(dirsmo385884);
const smo385884 = new VF.Beam([smo363216,smo363217,smo363218,smo363219]);
 
// formatting measures in staff group smo365028
fmtsmo3610962.format([smo361096v0,smo363235v0], 281);
const stavesmo361096 = new VF.Stave(663, 406, 295);
stavesmo361096.setAttribute('id', 'stavesmo361096');
stavesmo361096.setBegBarType(VF.Barline.type.NONE);
stavesmo361096.setContext(context);
stavesmo361096.draw();
smo361096v0.draw(context, stavesmo361096);
smo385879.setContext(context);
smo385879.draw();
smo385880.setContext(context);
smo385880.draw();
const stavesmo363235 = new VF.Stave(663, 545, 295);
stavesmo363235.setAttribute('id', 'stavesmo363235');
stavesmo363235.setBegBarType(VF.Barline.type.NONE);
stavesmo363235.setContext(context);
stavesmo363235.draw();
smo363235v0.draw(context, stavesmo363235);
smo385883.setContext(context);
smo385883.draw();
smo385884.setContext(context);
smo385884.draw();
const fmtsmo3611163 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo361116v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361116v0ar = [];
const smo361097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo361097'] = smo361097;
smo361097.setAttribute('id', 'smo361097');
smo361116v0ar.push(smo361097);
const smo361098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bn/4/n","dn/5/n","gn/5/n"]}'))
noteHash['smo361098'] = smo361098;
smo361098.setAttribute('id', 'smo361098');
smo361116v0ar.push(smo361098);
const smo361099 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo361099'] = smo361099;
smo361099.setAttribute('id', 'smo361099');
smo361116v0ar.push(smo361099);
const smo361100 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo361100'] = smo361100;
smo361100.setAttribute('id', 'smo361100');
const smo3611000acc = new VF.Accidental('b');
smo361100.addModifier(smo3611000acc, 0);
smo361116v0ar.push(smo361100);
smo361116v0.addTickables(smo361116v0ar)
fmtsmo3611163.joinVoices([smo361116v0]);
const fmtsmo3632553 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo363255v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363255v0ar = [];
const smo363236 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo363236'] = smo363236;
smo363236.setAttribute('id', 'smo363236');
smo363255v0ar.push(smo363236);
const smo363237 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo363237'] = smo363237;
smo363237.setAttribute('id', 'smo363237');
smo363255v0ar.push(smo363237);
const smo363238 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/1/n","gn/2/n"]}'))
noteHash['smo363238'] = smo363238;
smo363238.setAttribute('id', 'smo363238');
smo363255v0ar.push(smo363238);
const smo363239 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
noteHash['smo363239'] = smo363239;
smo363239.setAttribute('id', 'smo363239');
smo363255v0ar.push(smo363239);
smo363255v0.addTickables(smo363255v0ar)
fmtsmo3632553.joinVoices([smo363255v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo385887 = smo361098.getStemDirection();
smo361098.setStemDirection(dirsmo385887);
smo361099.setStemDirection(dirsmo385887);
smo361100.setStemDirection(dirsmo385887);
const smo385887 = new VF.Beam([smo361098,smo361099,smo361100]);
const dirsmo385890 = smo363238.getStemDirection();
smo363238.setStemDirection(dirsmo385890);
smo363239.setStemDirection(dirsmo385890);
const smo385890 = new VF.Beam([smo363238,smo363239]);
 
// formatting measures in staff group smo365028
fmtsmo3611163.format([smo361116v0,smo363255v0], 281);
const stavesmo361116 = new VF.Stave(958, 406, 295);
stavesmo361116.setAttribute('id', 'stavesmo361116');
stavesmo361116.setBegBarType(VF.Barline.type.NONE);
stavesmo361116.setContext(context);
stavesmo361116.draw();
smo361116v0.draw(context, stavesmo361116);
smo385887.setContext(context);
smo385887.draw();
const stavesmo363255 = new VF.Stave(958, 545, 295);
stavesmo363255.setAttribute('id', 'stavesmo363255');
stavesmo363255.setBegBarType(VF.Barline.type.NONE);
stavesmo363255.setContext(context);
stavesmo363255.draw();
smo363255v0.draw(context, stavesmo363255);
smo385890.setContext(context);
smo385890.draw();
const fmtsmo3611394 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo361139v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361139v0ar = [];
const smo361117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo361117'] = smo361117;
smo361117.setAttribute('id', 'smo361117');
smo361139v0ar.push(smo361117);
const smo361119 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361119'] = smo361119;
smo361119.setAttribute('id', 'smo361119');
smo361139v0ar.push(smo361119);
const smo361120 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo361120'] = smo361120;
smo361120.setAttribute('id', 'smo361120');
smo361139v0ar.push(smo361120);
const smo361121 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361121'] = smo361121;
smo361121.setAttribute('id', 'smo361121');
smo361139v0ar.push(smo361121);
const smo361122 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo361122'] = smo361122;
smo361122.setAttribute('id', 'smo361122');
smo361139v0ar.push(smo361122);
const smo361123 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361123'] = smo361123;
smo361123.setAttribute('id', 'smo361123');
smo361139v0ar.push(smo361123);
smo361139v0.addTickables(smo361139v0ar)
fmtsmo3611394.joinVoices([smo361139v0]);
const fmtsmo3632754 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo363275v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363275v0ar = [];
const smo363256 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo363256'] = smo363256;
smo363256.setAttribute('id', 'smo363256');
smo363275v0ar.push(smo363256);
const smo363257 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo363257'] = smo363257;
smo363257.setAttribute('id', 'smo363257');
smo363275v0ar.push(smo363257);
const smo363258 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo363258'] = smo363258;
smo363258.setAttribute('id', 'smo363258');
smo363275v0ar.push(smo363258);
const smo363259 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
noteHash['smo363259'] = smo363259;
smo363259.setAttribute('id', 'smo363259');
const smo3632591acc = new VF.Accidental('b');
smo363259.addModifier(smo3632591acc, 1);
smo363275v0ar.push(smo363259);
smo363275v0.addTickables(smo363275v0ar)
fmtsmo3632754.joinVoices([smo363275v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo385893 = smo361117.getStemDirection();
smo361117.setStemDirection(dirsmo385893);
smo361119.setStemDirection(dirsmo385893);
smo361120.setStemDirection(dirsmo385893);
const smo385893 = new VF.Beam([smo361117,smo361119,smo361120]);
const dirsmo385894 = smo361121.getStemDirection();
smo361121.setStemDirection(dirsmo385894);
smo361122.setStemDirection(dirsmo385894);
smo361123.setStemDirection(dirsmo385894);
const smo385894 = new VF.Beam([smo361121,smo361122,smo361123]);
const dirsmo385896 = smo363256.getStemDirection();
smo363256.setStemDirection(dirsmo385896);
smo363257.setStemDirection(dirsmo385896);
const smo385896 = new VF.Beam([smo363256,smo363257]);
const dirsmo385897 = smo363258.getStemDirection();
smo363258.setStemDirection(dirsmo385897);
smo363259.setStemDirection(dirsmo385897);
const smo385897 = new VF.Beam([smo363258,smo363259]);
 
// formatting measures in staff group smo365028
fmtsmo3611394.format([smo361139v0,smo363275v0], 272);
const stavesmo361139 = new VF.Stave(1253, 406, 295);
stavesmo361139.setAttribute('id', 'stavesmo361139');
stavesmo361139.setBegBarType(4);
stavesmo361139.setContext(context);
stavesmo361139.draw();
smo361139v0.draw(context, stavesmo361139);
smo385893.setContext(context);
smo385893.draw();
smo385894.setContext(context);
smo385894.draw();
const stavesmo363275 = new VF.Stave(1253, 545, 295);
stavesmo363275.setAttribute('id', 'stavesmo363275');
stavesmo363275.setBegBarType(4);
stavesmo363275.setContext(context);
stavesmo363275.draw();
smo363275v0.draw(context, stavesmo363275);
smo385896.setContext(context);
smo385896.draw();
smo385897.setContext(context);
smo385897.draw();
const fmtsmo3611605 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo361160v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361160v0ar = [];
const smo361140 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361140'] = smo361140;
smo361140.setAttribute('id', 'smo361140');
smo361160v0ar.push(smo361140);
const smo361141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361141'] = smo361141;
smo361141.setAttribute('id', 'smo361141');
smo361160v0ar.push(smo361141);
const smo361142 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo361142'] = smo361142;
smo361142.setAttribute('id', 'smo361142');
smo361160v0ar.push(smo361142);
const smo361143 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo361143'] = smo361143;
smo361143.setAttribute('id', 'smo361143');
smo361160v0ar.push(smo361143);
const smo361144 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n","gb/5/n","eb/6/n"]}'))
noteHash['smo361144'] = smo361144;
smo361144.setAttribute('id', 'smo361144');
const smo3611440acc = new VF.Accidental('b');
smo361144.addModifier(smo3611440acc, 0);
const smo3611441acc = new VF.Accidental('b');
smo361144.addModifier(smo3611441acc, 1);
const smo3611442acc = new VF.Accidental('b');
smo361144.addModifier(smo3611442acc, 2);
smo361160v0ar.push(smo361144);
smo361160v0.addTickables(smo361160v0ar)
fmtsmo3611605.joinVoices([smo361160v0]);
const fmtsmo3632955 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo363295v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363295v0ar = [];
const smo363276 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo363276'] = smo363276;
smo363276.setAttribute('id', 'smo363276');
smo363295v0ar.push(smo363276);
const smo363277 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
noteHash['smo363277'] = smo363277;
smo363277.setAttribute('id', 'smo363277');
smo363295v0ar.push(smo363277);
const smo363278 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
noteHash['smo363278'] = smo363278;
smo363278.setAttribute('id', 'smo363278');
smo363295v0ar.push(smo363278);
const smo363279 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n"]}'))
noteHash['smo363279'] = smo363279;
smo363279.setAttribute('id', 'smo363279');
smo363295v0ar.push(smo363279);
smo363295v0.addTickables(smo363295v0ar)
fmtsmo3632955.joinVoices([smo363295v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo385899 = smo361141.getStemDirection();
smo361141.setStemDirection(dirsmo385899);
smo361142.setStemDirection(dirsmo385899);
smo361143.setStemDirection(dirsmo385899);
smo361144.setStemDirection(dirsmo385899);
const smo385899 = new VF.Beam([smo361141,smo361142,smo361143,smo361144]);
const dirsmo385902 = smo363276.getStemDirection();
smo363276.setStemDirection(dirsmo385902);
smo363277.setStemDirection(dirsmo385902);
const smo385902 = new VF.Beam([smo363276,smo363277]);
const dirsmo385903 = smo363278.getStemDirection();
smo363278.setStemDirection(dirsmo385903);
smo363279.setStemDirection(dirsmo385903);
const smo385903 = new VF.Beam([smo363278,smo363279]);
 
// formatting measures in staff group smo365028
fmtsmo3611605.format([smo361160v0,smo363295v0], 281);
const stavesmo361160 = new VF.Stave(1548, 406, 295);
stavesmo361160.setAttribute('id', 'stavesmo361160');
stavesmo361160.setBegBarType(VF.Barline.type.NONE);
stavesmo361160.setContext(context);
stavesmo361160.draw();
smo361160v0.draw(context, stavesmo361160);
smo385899.setContext(context);
smo385899.draw();
const stavesmo363295 = new VF.Stave(1548, 545, 295);
stavesmo363295.setAttribute('id', 'stavesmo363295');
stavesmo363295.setBegBarType(VF.Barline.type.NONE);
stavesmo363295.setContext(context);
stavesmo363295.draw();
smo363295v0.draw(context, stavesmo363295);
smo385902.setContext(context);
smo385902.draw();
smo385903.setContext(context);
smo385903.draw();
const rightsmo365028stavesmo3611601 = new VF.StaveConnector(stavesmo361160, stavesmo363295).setType(0);
rightsmo365028stavesmo3611601.setContext(context).draw();
const fmtsmo3611846 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo361184v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361184v0ar = [];
const smo361161 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo361161'] = smo361161;
smo361161.setAttribute('id', 'smo361161');
smo361184v0ar.push(smo361161);
const smo361163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo361163'] = smo361163;
smo361163.setAttribute('id', 'smo361163');
smo361184v0ar.push(smo361163);
const smo361164 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo361164'] = smo361164;
smo361164.setAttribute('id', 'smo361164');
smo361184v0ar.push(smo361164);
const smo361165 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo361165'] = smo361165;
smo361165.setAttribute('id', 'smo361165');
smo361184v0ar.push(smo361165);
const smo361166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo361166'] = smo361166;
smo361166.setAttribute('id', 'smo361166');
smo361184v0ar.push(smo361166);
const smo361167 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
noteHash['smo361167'] = smo361167;
smo361167.setAttribute('id', 'smo361167');
smo361184v0ar.push(smo361167);
const smo361168 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo361168'] = smo361168;
smo361168.setAttribute('id', 'smo361168');
smo361184v0ar.push(smo361168);
smo361184v0.addTickables(smo361184v0ar)
fmtsmo3611846.joinVoices([smo361184v0]);
const fmtsmo3633156 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo363315v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363315v0ar = [];
const smo363296 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo363296'] = smo363296;
smo363296.setAttribute('id', 'smo363296');
smo363315v0ar.push(smo363296);
const smo363297 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo363297'] = smo363297;
smo363297.setAttribute('id', 'smo363297');
smo363315v0ar.push(smo363297);
const smo363298 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo363298'] = smo363298;
smo363298.setAttribute('id', 'smo363298');
smo363315v0ar.push(smo363298);
const smo363299 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
noteHash['smo363299'] = smo363299;
smo363299.setAttribute('id', 'smo363299');
smo363315v0ar.push(smo363299);
smo363315v0.addTickables(smo363315v0ar)
fmtsmo3633156.joinVoices([smo363315v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo385914 = smo361161.getStemDirection();
smo361161.setStemDirection(dirsmo385914);
smo361163.setStemDirection(dirsmo385914);
smo361164.setStemDirection(dirsmo385914);
smo361165.setStemDirection(dirsmo385914);
const smo385914 = new VF.Beam([smo361161,smo361163,smo361164,smo361165]);
const dirsmo385915 = smo361166.getStemDirection();
smo361166.setStemDirection(dirsmo385915);
smo361167.setStemDirection(dirsmo385915);
smo361168.setStemDirection(dirsmo385915);
const smo385915 = new VF.Beam([smo361166,smo361167,smo361168]);
const dirsmo385918 = smo363296.getStemDirection();
smo363296.setStemDirection(dirsmo385918);
smo363297.setStemDirection(dirsmo385918);
const smo385918 = new VF.Beam([smo363296,smo363297]);
const dirsmo385919 = smo363298.getStemDirection();
smo363298.setStemDirection(dirsmo385919);
smo363299.setStemDirection(dirsmo385919);
const smo385919 = new VF.Beam([smo363298,smo363299]);
 
// formatting measures in staff group smo365028
fmtsmo3611846.format([smo361184v0,smo363315v0], 237);
const stavesmo361184 = new VF.Stave(73, 779, 295);
stavesmo361184.setAttribute('id', 'stavesmo361184');
stavesmo361184.setBegBarType(1);
stavesmo361184.addClef('treble');
stavesmo361184.setContext(context);
stavesmo361184.draw();
smo361184v0.draw(context, stavesmo361184);
smo385914.setContext(context);
smo385914.draw();
smo385915.setContext(context);
smo385915.draw();
const stavesmo363315 = new VF.Stave(73, 934, 295);
stavesmo363315.setAttribute('id', 'stavesmo363315');
stavesmo363315.setBegBarType(1);
stavesmo363315.addClef('bass');
stavesmo363315.setContext(context);
stavesmo363315.draw();
smo363315v0.draw(context, stavesmo363315);
smo385918.setContext(context);
smo385918.draw();
smo385919.setContext(context);
smo385919.draw();
const leftsmo365028stavesmo3611841 = new VF.StaveConnector(stavesmo361184, stavesmo363315).setType(3);
leftsmo365028stavesmo3611841.setContext(context).draw();
const fmtsmo3612047 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo361204v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361204v0ar = [];
const smo361185 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo361185'] = smo361185;
smo361185.setAttribute('id', 'smo361185');
smo361204v0ar.push(smo361185);
const smo361186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo361186'] = smo361186;
smo361186.setAttribute('id', 'smo361186');
smo361204v0ar.push(smo361186);
const smo361187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo361187'] = smo361187;
smo361187.setAttribute('id', 'smo361187');
smo361204v0ar.push(smo361187);
const smo361188 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo361188'] = smo361188;
smo361188.setAttribute('id', 'smo361188');
const smo3611880acc = new VF.Accidental('b');
smo361188.addModifier(smo3611880acc, 0);
smo361204v0ar.push(smo361188);
smo361204v0.addTickables(smo361204v0ar)
fmtsmo3612047.joinVoices([smo361204v0]);
const fmtsmo3633357 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo363335v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363335v0ar = [];
const smo363316 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo363316'] = smo363316;
smo363316.setAttribute('id', 'smo363316');
smo363335v0ar.push(smo363316);
const smo363317 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo363317'] = smo363317;
smo363317.setAttribute('id', 'smo363317');
smo363335v0ar.push(smo363317);
const smo363318 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo363318'] = smo363318;
smo363318.setAttribute('id', 'smo363318');
smo363335v0ar.push(smo363318);
const smo363319 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
noteHash['smo363319'] = smo363319;
smo363319.setAttribute('id', 'smo363319');
smo363335v0ar.push(smo363319);
smo363335v0.addTickables(smo363335v0ar)
fmtsmo3633357.joinVoices([smo363335v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo385922 = smo361186.getStemDirection();
smo361186.setStemDirection(dirsmo385922);
smo361187.setStemDirection(dirsmo385922);
smo361188.setStemDirection(dirsmo385922);
const smo385922 = new VF.Beam([smo361186,smo361187,smo361188]);
const dirsmo385925 = smo363316.getStemDirection();
smo363316.setStemDirection(dirsmo385925);
smo363317.setStemDirection(dirsmo385925);
const smo385925 = new VF.Beam([smo363316,smo363317]);
const dirsmo385926 = smo363318.getStemDirection();
smo363318.setStemDirection(dirsmo385926);
smo363319.setStemDirection(dirsmo385926);
const smo385926 = new VF.Beam([smo363318,smo363319]);
 
// formatting measures in staff group smo365028
fmtsmo3612047.format([smo361204v0,smo363335v0], 281);
const stavesmo361204 = new VF.Stave(368, 779, 295);
stavesmo361204.setAttribute('id', 'stavesmo361204');
stavesmo361204.setBegBarType(VF.Barline.type.NONE);
stavesmo361204.setContext(context);
stavesmo361204.draw();
smo361204v0.draw(context, stavesmo361204);
smo385922.setContext(context);
smo385922.draw();
const stavesmo363335 = new VF.Stave(368, 934, 295);
stavesmo363335.setAttribute('id', 'stavesmo363335');
stavesmo363335.setBegBarType(VF.Barline.type.NONE);
stavesmo363335.setContext(context);
stavesmo363335.draw();
smo363335v0.draw(context, stavesmo363335);
smo385925.setContext(context);
smo385925.draw();
smo385926.setContext(context);
smo385926.draw();
const fmtsmo3612278 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo361227v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361227v0ar = [];
const smo361205 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo361205'] = smo361205;
smo361205.setAttribute('id', 'smo361205');
smo361227v0ar.push(smo361205);
const smo361207 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361207'] = smo361207;
smo361207.setAttribute('id', 'smo361207');
smo361227v0ar.push(smo361207);
const smo361208 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo361208'] = smo361208;
smo361208.setAttribute('id', 'smo361208');
smo361227v0ar.push(smo361208);
const smo361209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361209'] = smo361209;
smo361209.setAttribute('id', 'smo361209');
smo361227v0ar.push(smo361209);
const smo361210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo361210'] = smo361210;
smo361210.setAttribute('id', 'smo361210');
smo361227v0ar.push(smo361210);
const smo361211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361211'] = smo361211;
smo361211.setAttribute('id', 'smo361211');
smo361227v0ar.push(smo361211);
smo361227v0.addTickables(smo361227v0ar)
fmtsmo3612278.joinVoices([smo361227v0]);
const fmtsmo3633558 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo363355v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363355v0ar = [];
const smo363336 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo363336'] = smo363336;
smo363336.setAttribute('id', 'smo363336');
smo363355v0ar.push(smo363336);
const smo363337 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo363337'] = smo363337;
smo363337.setAttribute('id', 'smo363337');
smo363355v0ar.push(smo363337);
const smo363338 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo363338'] = smo363338;
smo363338.setAttribute('id', 'smo363338');
smo363355v0ar.push(smo363338);
const smo363339 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
noteHash['smo363339'] = smo363339;
smo363339.setAttribute('id', 'smo363339');
const smo3633391acc = new VF.Accidental('b');
smo363339.addModifier(smo3633391acc, 1);
smo363355v0ar.push(smo363339);
smo363355v0.addTickables(smo363355v0ar)
fmtsmo3633558.joinVoices([smo363355v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo385929 = smo361205.getStemDirection();
smo361205.setStemDirection(dirsmo385929);
smo361207.setStemDirection(dirsmo385929);
smo361208.setStemDirection(dirsmo385929);
const smo385929 = new VF.Beam([smo361205,smo361207,smo361208]);
const dirsmo385930 = smo361209.getStemDirection();
smo361209.setStemDirection(dirsmo385930);
smo361210.setStemDirection(dirsmo385930);
smo361211.setStemDirection(dirsmo385930);
const smo385930 = new VF.Beam([smo361209,smo361210,smo361211]);
const dirsmo385933 = smo363336.getStemDirection();
smo363336.setStemDirection(dirsmo385933);
smo363337.setStemDirection(dirsmo385933);
const smo385933 = new VF.Beam([smo363336,smo363337]);
const dirsmo385934 = smo363338.getStemDirection();
smo363338.setStemDirection(dirsmo385934);
smo363339.setStemDirection(dirsmo385934);
const smo385934 = new VF.Beam([smo363338,smo363339]);
 
// formatting measures in staff group smo365028
fmtsmo3612278.format([smo361227v0,smo363355v0], 281);
const stavesmo361227 = new VF.Stave(663, 779, 295);
stavesmo361227.setAttribute('id', 'stavesmo361227');
stavesmo361227.setBegBarType(VF.Barline.type.NONE);
stavesmo361227.setContext(context);
stavesmo361227.draw();
smo361227v0.draw(context, stavesmo361227);
smo385929.setContext(context);
smo385929.draw();
smo385930.setContext(context);
smo385930.draw();
const stavesmo363355 = new VF.Stave(663, 934, 295);
stavesmo363355.setAttribute('id', 'stavesmo363355');
stavesmo363355.setBegBarType(VF.Barline.type.NONE);
stavesmo363355.setContext(context);
stavesmo363355.draw();
smo363355v0.draw(context, stavesmo363355);
smo385933.setContext(context);
smo385933.draw();
smo385934.setContext(context);
smo385934.draw();
const fmtsmo3612479 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo361247v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361247v0ar = [];
const smo361228 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361228'] = smo361228;
smo361228.setAttribute('id', 'smo361228');
smo361247v0ar.push(smo361228);
const smo361229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361229'] = smo361229;
smo361229.setAttribute('id', 'smo361229');
smo361247v0ar.push(smo361229);
const smo361230 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n","an/5/n"]}'))
noteHash['smo361230'] = smo361230;
smo361230.setAttribute('id', 'smo361230');
smo361247v0ar.push(smo361230);
const smo361231 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","cn/5/n","gn/5/n"]}'))
noteHash['smo361231'] = smo361231;
smo361231.setAttribute('id', 'smo361231');
smo361247v0ar.push(smo361231);
smo361247v0.addTickables(smo361247v0ar)
fmtsmo3612479.joinVoices([smo361247v0]);
const fmtsmo3633759 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo363375v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363375v0ar = [];
const smo363356 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo363356'] = smo363356;
smo363356.setAttribute('id', 'smo363356');
smo363375v0ar.push(smo363356);
const smo363357 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
noteHash['smo363357'] = smo363357;
smo363357.setAttribute('id', 'smo363357');
smo363375v0ar.push(smo363357);
const smo363358 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
noteHash['smo363358'] = smo363358;
smo363358.setAttribute('id', 'smo363358');
smo363375v0ar.push(smo363358);
const smo363359 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/2/n","eb/3/n"]}'))
noteHash['smo363359'] = smo363359;
smo363359.setAttribute('id', 'smo363359');
const smo3633590acc = new VF.Accidental('b');
smo363359.addModifier(smo3633590acc, 0);
const smo3633591acc = new VF.Accidental('b');
smo363359.addModifier(smo3633591acc, 1);
smo363375v0ar.push(smo363359);
smo363375v0.addTickables(smo363375v0ar)
fmtsmo3633759.joinVoices([smo363375v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo385937 = smo361229.getStemDirection();
smo361229.setStemDirection(dirsmo385937);
smo361230.setStemDirection(dirsmo385937);
smo361231.setStemDirection(dirsmo385937);
const smo385937 = new VF.Beam([smo361229,smo361230,smo361231]);
const dirsmo385940 = smo363356.getStemDirection();
smo363356.setStemDirection(dirsmo385940);
smo363357.setStemDirection(dirsmo385940);
const smo385940 = new VF.Beam([smo363356,smo363357]);
const dirsmo385941 = smo363358.getStemDirection();
smo363358.setStemDirection(dirsmo385941);
smo363359.setStemDirection(dirsmo385941);
const smo385941 = new VF.Beam([smo363358,smo363359]);
 
// formatting measures in staff group smo365028
fmtsmo3612479.format([smo361247v0,smo363375v0], 281);
const stavesmo361247 = new VF.Stave(958, 779, 295);
stavesmo361247.setAttribute('id', 'stavesmo361247');
stavesmo361247.setBegBarType(VF.Barline.type.NONE);
stavesmo361247.setContext(context);
stavesmo361247.draw();
smo361247v0.draw(context, stavesmo361247);
smo385937.setContext(context);
smo385937.draw();
const stavesmo363375 = new VF.Stave(958, 934, 295);
stavesmo363375.setAttribute('id', 'stavesmo363375');
stavesmo363375.setBegBarType(VF.Barline.type.NONE);
stavesmo363375.setContext(context);
stavesmo363375.draw();
smo363375v0.draw(context, stavesmo363375);
smo385940.setContext(context);
smo385940.draw();
smo385941.setContext(context);
smo385941.draw();
const fmtsmo36127210 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo361272v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361272v0ar = [];
const smo361248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","cn/5/n","gb/5/n"]}'))
noteHash['smo361248'] = smo361248;
smo361248.setAttribute('id', 'smo361248');
const smo3612480acc = new VF.Accidental('b');
smo361248.addModifier(smo3612480acc, 0);
const smo3612482acc = new VF.Accidental('b');
smo361248.addModifier(smo3612482acc, 2);
smo361272v0ar.push(smo361248);
const smo361250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","an/5/n"]}'))
noteHash['smo361250'] = smo361250;
smo361250.setAttribute('id', 'smo361250');
smo361272v0ar.push(smo361250);
const smo361251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo361251'] = smo361251;
smo361251.setAttribute('id', 'smo361251');
smo361272v0ar.push(smo361251);
const smo361252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo361252'] = smo361252;
smo361252.setAttribute('id', 'smo361252');
smo361272v0ar.push(smo361252);
const smo361253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo361253'] = smo361253;
smo361253.setAttribute('id', 'smo361253');
smo361272v0ar.push(smo361253);
const smo361254 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
noteHash['smo361254'] = smo361254;
smo361254.setAttribute('id', 'smo361254');
smo361272v0ar.push(smo361254);
const smo361255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo361255'] = smo361255;
smo361255.setAttribute('id', 'smo361255');
smo361272v0ar.push(smo361255);
const smo361256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","an/5/n"]}'))
noteHash['smo361256'] = smo361256;
smo361256.setAttribute('id', 'smo361256');
smo361272v0ar.push(smo361256);
smo361272v0.addTickables(smo361272v0ar)
fmtsmo36127210.joinVoices([smo361272v0]);
const fmtsmo36339510 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo363395v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363395v0ar = [];
const smo363376 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
noteHash['smo363376'] = smo363376;
smo363376.setAttribute('id', 'smo363376');
smo363395v0ar.push(smo363376);
const smo363377 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","gb/3/n","an/3/n","cn/4/n"]}'))
noteHash['smo363377'] = smo363377;
smo363377.setAttribute('id', 'smo363377');
const smo3633771acc = new VF.Accidental('b');
smo363377.addModifier(smo3633771acc, 1);
smo363395v0ar.push(smo363377);
const smo363378 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo363378'] = smo363378;
smo363378.setAttribute('id', 'smo363378');
smo363395v0ar.push(smo363378);
const smo363379 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","an/3/n","cn/4/n"]}'))
noteHash['smo363379'] = smo363379;
smo363379.setAttribute('id', 'smo363379');
smo363395v0ar.push(smo363379);
smo363395v0.addTickables(smo363395v0ar)
fmtsmo36339510.joinVoices([smo363395v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo385944 = smo361248.getStemDirection();
smo361248.setStemDirection(dirsmo385944);
smo361250.setStemDirection(dirsmo385944);
smo361251.setStemDirection(dirsmo385944);
smo361252.setStemDirection(dirsmo385944);
const smo385944 = new VF.Beam([smo361248,smo361250,smo361251,smo361252]);
const dirsmo385945 = smo361253.getStemDirection();
smo361253.setStemDirection(dirsmo385945);
smo361254.setStemDirection(dirsmo385945);
smo361255.setStemDirection(dirsmo385945);
smo361256.setStemDirection(dirsmo385945);
const smo385945 = new VF.Beam([smo361253,smo361254,smo361255,smo361256]);
const dirsmo385948 = smo363376.getStemDirection();
smo363376.setStemDirection(dirsmo385948);
smo363377.setStemDirection(dirsmo385948);
const smo385948 = new VF.Beam([smo363376,smo363377]);
const dirsmo385949 = smo363378.getStemDirection();
smo363378.setStemDirection(dirsmo385949);
smo363379.setStemDirection(dirsmo385949);
const smo385949 = new VF.Beam([smo363378,smo363379]);
 
// formatting measures in staff group smo365028
fmtsmo36127210.format([smo361272v0,smo363395v0], 281);
const stavesmo361272 = new VF.Stave(1253, 779, 295);
stavesmo361272.setAttribute('id', 'stavesmo361272');
stavesmo361272.setBegBarType(VF.Barline.type.NONE);
stavesmo361272.setContext(context);
stavesmo361272.draw();
smo361272v0.draw(context, stavesmo361272);
smo385944.setContext(context);
smo385944.draw();
smo385945.setContext(context);
smo385945.draw();
const stavesmo363395 = new VF.Stave(1253, 934, 295);
stavesmo363395.setAttribute('id', 'stavesmo363395');
stavesmo363395.setBegBarType(VF.Barline.type.NONE);
stavesmo363395.setContext(context);
stavesmo363395.draw();
smo363395v0.draw(context, stavesmo363395);
smo385948.setContext(context);
smo385948.draw();
smo385949.setContext(context);
smo385949.draw();
const fmtsmo36129211 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo361292v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361292v0ar = [];
const smo361273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo361273'] = smo361273;
smo361273.setAttribute('id', 'smo361273');
smo361292v0ar.push(smo361273);
const smo361274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo361274'] = smo361274;
smo361274.setAttribute('id', 'smo361274');
smo361292v0ar.push(smo361274);
const smo361275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo361275'] = smo361275;
smo361275.setAttribute('id', 'smo361275');
smo361292v0ar.push(smo361275);
const smo361276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo361276'] = smo361276;
smo361276.setAttribute('id', 'smo361276');
const smo3612760acc = new VF.Accidental('b');
smo361276.addModifier(smo3612760acc, 0);
smo361292v0ar.push(smo361276);
smo361292v0.addTickables(smo361292v0ar)
fmtsmo36129211.joinVoices([smo361292v0]);
const fmtsmo36341511 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo363415v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363415v0ar = [];
const smo363396 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
noteHash['smo363396'] = smo363396;
smo363396.setAttribute('id', 'smo363396');
smo363415v0ar.push(smo363396);
const smo363397 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo363397'] = smo363397;
smo363397.setAttribute('id', 'smo363397');
smo363415v0ar.push(smo363397);
const smo363398 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
noteHash['smo363398'] = smo363398;
smo363398.setAttribute('id', 'smo363398');
smo363415v0ar.push(smo363398);
const smo363399 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n","bn/3/n"]}'))
noteHash['smo363399'] = smo363399;
smo363399.setAttribute('id', 'smo363399');
smo363415v0ar.push(smo363399);
smo363415v0.addTickables(smo363415v0ar)
fmtsmo36341511.joinVoices([smo363415v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo385952 = smo361274.getStemDirection();
smo361274.setStemDirection(dirsmo385952);
smo361275.setStemDirection(dirsmo385952);
smo361276.setStemDirection(dirsmo385952);
const smo385952 = new VF.Beam([smo361274,smo361275,smo361276]);
const dirsmo385955 = smo363396.getStemDirection();
smo363396.setStemDirection(dirsmo385955);
smo363397.setStemDirection(dirsmo385955);
const smo385955 = new VF.Beam([smo363396,smo363397]);
const dirsmo385956 = smo363398.getStemDirection();
smo363398.setStemDirection(dirsmo385956);
smo363399.setStemDirection(dirsmo385956);
const smo385956 = new VF.Beam([smo363398,smo363399]);
 
// formatting measures in staff group smo365028
fmtsmo36129211.format([smo361292v0,smo363415v0], 281);
const stavesmo361292 = new VF.Stave(1548, 779, 295);
stavesmo361292.setAttribute('id', 'stavesmo361292');
stavesmo361292.setBegBarType(VF.Barline.type.NONE);
stavesmo361292.setContext(context);
stavesmo361292.draw();
smo361292v0.draw(context, stavesmo361292);
smo385952.setContext(context);
smo385952.draw();
const stavesmo363415 = new VF.Stave(1548, 934, 295);
stavesmo363415.setAttribute('id', 'stavesmo363415');
stavesmo363415.setBegBarType(VF.Barline.type.NONE);
stavesmo363415.setContext(context);
stavesmo363415.draw();
smo363415v0.draw(context, stavesmo363415);
smo385955.setContext(context);
smo385955.draw();
smo385956.setContext(context);
smo385956.draw();
const rightsmo365028stavesmo3612921 = new VF.StaveConnector(stavesmo361292, stavesmo363415).setType(0);
rightsmo365028stavesmo3612921.setContext(context).draw();
const fmtsmo36131512 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo361315v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361315v0ar = [];
const smo361293 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo361293'] = smo361293;
smo361293.setAttribute('id', 'smo361293');
smo361315v0ar.push(smo361293);
const smo361295 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361295'] = smo361295;
smo361295.setAttribute('id', 'smo361295');
smo361315v0ar.push(smo361295);
const smo361296 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo361296'] = smo361296;
smo361296.setAttribute('id', 'smo361296');
smo361315v0ar.push(smo361296);
const smo361297 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361297'] = smo361297;
smo361297.setAttribute('id', 'smo361297');
smo361315v0ar.push(smo361297);
const smo361298 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo361298'] = smo361298;
smo361298.setAttribute('id', 'smo361298');
smo361315v0ar.push(smo361298);
const smo361299 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361299'] = smo361299;
smo361299.setAttribute('id', 'smo361299');
smo361315v0ar.push(smo361299);
smo361315v0.addTickables(smo361315v0ar)
fmtsmo36131512.joinVoices([smo361315v0]);
const fmtsmo36343512 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo363435v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363435v0ar = [];
const smo363416 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo363416'] = smo363416;
smo363416.setAttribute('id', 'smo363416');
smo363435v0ar.push(smo363416);
const smo363417 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo363417'] = smo363417;
smo363417.setAttribute('id', 'smo363417');
smo363435v0ar.push(smo363417);
const smo363418 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo363418'] = smo363418;
smo363418.setAttribute('id', 'smo363418');
smo363435v0ar.push(smo363418);
const smo363419 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
noteHash['smo363419'] = smo363419;
smo363419.setAttribute('id', 'smo363419');
const smo3634191acc = new VF.Accidental('b');
smo363419.addModifier(smo3634191acc, 1);
smo363435v0ar.push(smo363419);
smo363435v0.addTickables(smo363435v0ar)
fmtsmo36343512.joinVoices([smo363435v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo385967 = smo361293.getStemDirection();
smo361293.setStemDirection(dirsmo385967);
smo361295.setStemDirection(dirsmo385967);
smo361296.setStemDirection(dirsmo385967);
const smo385967 = new VF.Beam([smo361293,smo361295,smo361296]);
const dirsmo385968 = smo361297.getStemDirection();
smo361297.setStemDirection(dirsmo385968);
smo361298.setStemDirection(dirsmo385968);
smo361299.setStemDirection(dirsmo385968);
const smo385968 = new VF.Beam([smo361297,smo361298,smo361299]);
const dirsmo385971 = smo363416.getStemDirection();
smo363416.setStemDirection(dirsmo385971);
smo363417.setStemDirection(dirsmo385971);
const smo385971 = new VF.Beam([smo363416,smo363417]);
const dirsmo385972 = smo363418.getStemDirection();
smo363418.setStemDirection(dirsmo385972);
smo363419.setStemDirection(dirsmo385972);
const smo385972 = new VF.Beam([smo363418,smo363419]);
 
// formatting measures in staff group smo365028
fmtsmo36131512.format([smo361315v0,smo363435v0], 237);
const stavesmo361315 = new VF.Stave(73, 1132, 295);
stavesmo361315.setAttribute('id', 'stavesmo361315');
stavesmo361315.setBegBarType(1);
stavesmo361315.addClef('treble');
stavesmo361315.setContext(context);
stavesmo361315.draw();
smo361315v0.draw(context, stavesmo361315);
smo385967.setContext(context);
smo385967.draw();
smo385968.setContext(context);
smo385968.draw();
const stavesmo363435 = new VF.Stave(73, 1287, 295);
stavesmo363435.setAttribute('id', 'stavesmo363435');
stavesmo363435.setBegBarType(1);
stavesmo363435.addClef('bass');
stavesmo363435.setContext(context);
stavesmo363435.draw();
smo363435v0.draw(context, stavesmo363435);
smo385971.setContext(context);
smo385971.draw();
smo385972.setContext(context);
smo385972.draw();
const leftsmo365028stavesmo3613151 = new VF.StaveConnector(stavesmo361315, stavesmo363435).setType(3);
leftsmo365028stavesmo3613151.setContext(context).draw();
const fmtsmo36133613 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo361336v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361336v0ar = [];
const smo361316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361316'] = smo361316;
smo361316.setAttribute('id', 'smo361316');
smo361336v0ar.push(smo361316);
const smo361317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361317'] = smo361317;
smo361317.setAttribute('id', 'smo361317');
smo361336v0ar.push(smo361317);
const smo361318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo361318'] = smo361318;
smo361318.setAttribute('id', 'smo361318');
smo361336v0ar.push(smo361318);
const smo361319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo361319'] = smo361319;
smo361319.setAttribute('id', 'smo361319');
smo361336v0ar.push(smo361319);
const smo361320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n","gb/5/n","eb/6/n"]}'))
noteHash['smo361320'] = smo361320;
smo361320.setAttribute('id', 'smo361320');
const smo3613200acc = new VF.Accidental('b');
smo361320.addModifier(smo3613200acc, 0);
const smo3613201acc = new VF.Accidental('b');
smo361320.addModifier(smo3613201acc, 1);
const smo3613202acc = new VF.Accidental('b');
smo361320.addModifier(smo3613202acc, 2);
smo361336v0ar.push(smo361320);
smo361336v0.addTickables(smo361336v0ar)
fmtsmo36133613.joinVoices([smo361336v0]);
const fmtsmo36345513 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo363455v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363455v0ar = [];
const smo363436 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo363436'] = smo363436;
smo363436.setAttribute('id', 'smo363436');
smo363455v0ar.push(smo363436);
const smo363437 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
noteHash['smo363437'] = smo363437;
smo363437.setAttribute('id', 'smo363437');
smo363455v0ar.push(smo363437);
const smo363438 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
noteHash['smo363438'] = smo363438;
smo363438.setAttribute('id', 'smo363438');
smo363455v0ar.push(smo363438);
const smo363439 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n"]}'))
noteHash['smo363439'] = smo363439;
smo363439.setAttribute('id', 'smo363439');
smo363455v0ar.push(smo363439);
smo363455v0.addTickables(smo363455v0ar)
fmtsmo36345513.joinVoices([smo363455v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo385975 = smo361317.getStemDirection();
smo361317.setStemDirection(dirsmo385975);
smo361318.setStemDirection(dirsmo385975);
smo361319.setStemDirection(dirsmo385975);
smo361320.setStemDirection(dirsmo385975);
const smo385975 = new VF.Beam([smo361317,smo361318,smo361319,smo361320]);
const dirsmo385978 = smo363436.getStemDirection();
smo363436.setStemDirection(dirsmo385978);
smo363437.setStemDirection(dirsmo385978);
const smo385978 = new VF.Beam([smo363436,smo363437]);
const dirsmo385979 = smo363438.getStemDirection();
smo363438.setStemDirection(dirsmo385979);
smo363439.setStemDirection(dirsmo385979);
const smo385979 = new VF.Beam([smo363438,smo363439]);
 
// formatting measures in staff group smo365028
fmtsmo36133613.format([smo361336v0,smo363455v0], 281);
const stavesmo361336 = new VF.Stave(368, 1132, 295);
stavesmo361336.setAttribute('id', 'stavesmo361336');
stavesmo361336.setBegBarType(VF.Barline.type.NONE);
stavesmo361336.setContext(context);
stavesmo361336.draw();
smo361336v0.draw(context, stavesmo361336);
smo385975.setContext(context);
smo385975.draw();
const stavesmo363455 = new VF.Stave(368, 1287, 295);
stavesmo363455.setAttribute('id', 'stavesmo363455');
stavesmo363455.setBegBarType(VF.Barline.type.NONE);
stavesmo363455.setContext(context);
stavesmo363455.draw();
smo363455v0.draw(context, stavesmo363455);
smo385978.setContext(context);
smo385978.draw();
smo385979.setContext(context);
smo385979.draw();
const fmtsmo36136014 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo361360v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361360v0ar = [];
const smo361337 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo361337'] = smo361337;
smo361337.setAttribute('id', 'smo361337');
smo361360v0ar.push(smo361337);
const smo361339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo361339'] = smo361339;
smo361339.setAttribute('id', 'smo361339');
smo361360v0ar.push(smo361339);
const smo361340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo361340'] = smo361340;
smo361340.setAttribute('id', 'smo361340');
smo361360v0ar.push(smo361340);
const smo361341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo361341'] = smo361341;
smo361341.setAttribute('id', 'smo361341');
smo361360v0ar.push(smo361341);
const smo361342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo361342'] = smo361342;
smo361342.setAttribute('id', 'smo361342');
smo361360v0ar.push(smo361342);
const smo361343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
noteHash['smo361343'] = smo361343;
smo361343.setAttribute('id', 'smo361343');
smo361360v0ar.push(smo361343);
const smo361344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo361344'] = smo361344;
smo361344.setAttribute('id', 'smo361344');
smo361360v0ar.push(smo361344);
smo361360v0.addTickables(smo361360v0ar)
fmtsmo36136014.joinVoices([smo361360v0]);
const fmtsmo36347514 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo363475v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363475v0ar = [];
const smo363456 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo363456'] = smo363456;
smo363456.setAttribute('id', 'smo363456');
smo363475v0ar.push(smo363456);
const smo363457 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo363457'] = smo363457;
smo363457.setAttribute('id', 'smo363457');
smo363475v0ar.push(smo363457);
const smo363458 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo363458'] = smo363458;
smo363458.setAttribute('id', 'smo363458');
smo363475v0ar.push(smo363458);
const smo363459 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
noteHash['smo363459'] = smo363459;
smo363459.setAttribute('id', 'smo363459');
smo363475v0ar.push(smo363459);
smo363475v0.addTickables(smo363475v0ar)
fmtsmo36347514.joinVoices([smo363475v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo385982 = smo361337.getStemDirection();
smo361337.setStemDirection(dirsmo385982);
smo361339.setStemDirection(dirsmo385982);
smo361340.setStemDirection(dirsmo385982);
smo361341.setStemDirection(dirsmo385982);
const smo385982 = new VF.Beam([smo361337,smo361339,smo361340,smo361341]);
const dirsmo385983 = smo361342.getStemDirection();
smo361342.setStemDirection(dirsmo385983);
smo361343.setStemDirection(dirsmo385983);
smo361344.setStemDirection(dirsmo385983);
const smo385983 = new VF.Beam([smo361342,smo361343,smo361344]);
const dirsmo385986 = smo363456.getStemDirection();
smo363456.setStemDirection(dirsmo385986);
smo363457.setStemDirection(dirsmo385986);
const smo385986 = new VF.Beam([smo363456,smo363457]);
const dirsmo385987 = smo363458.getStemDirection();
smo363458.setStemDirection(dirsmo385987);
smo363459.setStemDirection(dirsmo385987);
const smo385987 = new VF.Beam([smo363458,smo363459]);
 
// formatting measures in staff group smo365028
fmtsmo36136014.format([smo361360v0,smo363475v0], 281);
const stavesmo361360 = new VF.Stave(663, 1132, 295);
stavesmo361360.setAttribute('id', 'stavesmo361360');
stavesmo361360.setBegBarType(VF.Barline.type.NONE);
stavesmo361360.setContext(context);
stavesmo361360.draw();
smo361360v0.draw(context, stavesmo361360);
smo385982.setContext(context);
smo385982.draw();
smo385983.setContext(context);
smo385983.draw();
const stavesmo363475 = new VF.Stave(663, 1287, 295);
stavesmo363475.setAttribute('id', 'stavesmo363475');
stavesmo363475.setBegBarType(VF.Barline.type.NONE);
stavesmo363475.setContext(context);
stavesmo363475.draw();
smo363475v0.draw(context, stavesmo363475);
smo385986.setContext(context);
smo385986.draw();
smo385987.setContext(context);
smo385987.draw();
const fmtsmo36138015 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo361380v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361380v0ar = [];
const smo361361 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo361361'] = smo361361;
smo361361.setAttribute('id', 'smo361361');
smo361380v0ar.push(smo361361);
const smo361362 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo361362'] = smo361362;
smo361362.setAttribute('id', 'smo361362');
smo361380v0ar.push(smo361362);
const smo361363 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo361363'] = smo361363;
smo361363.setAttribute('id', 'smo361363');
smo361380v0ar.push(smo361363);
const smo361364 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
noteHash['smo361364'] = smo361364;
smo361364.setAttribute('id', 'smo361364');
smo361380v0ar.push(smo361364);
smo361380v0.addTickables(smo361380v0ar)
fmtsmo36138015.joinVoices([smo361380v0]);
const fmtsmo36349515 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo363495v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363495v0ar = [];
const smo363476 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo363476'] = smo363476;
smo363476.setAttribute('id', 'smo363476');
smo363495v0ar.push(smo363476);
const smo363477 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo363477'] = smo363477;
smo363477.setAttribute('id', 'smo363477');
smo363495v0ar.push(smo363477);
const smo363478 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo363478'] = smo363478;
smo363478.setAttribute('id', 'smo363478');
smo363495v0ar.push(smo363478);
const smo363479 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo363479'] = smo363479;
smo363479.setAttribute('id', 'smo363479');
smo363495v0ar.push(smo363479);
smo363495v0.addTickables(smo363495v0ar)
fmtsmo36349515.joinVoices([smo363495v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo385990 = smo361362.getStemDirection();
smo361362.setStemDirection(dirsmo385990);
smo361363.setStemDirection(dirsmo385990);
smo361364.setStemDirection(dirsmo385990);
const smo385990 = new VF.Beam([smo361362,smo361363,smo361364]);
const dirsmo385993 = smo363476.getStemDirection();
smo363476.setStemDirection(dirsmo385993);
smo363477.setStemDirection(dirsmo385993);
const smo385993 = new VF.Beam([smo363476,smo363477]);
 
// formatting measures in staff group smo365028
fmtsmo36138015.format([smo361380v0,smo363495v0], 281);
const stavesmo361380 = new VF.Stave(958, 1132, 295);
stavesmo361380.setAttribute('id', 'stavesmo361380');
stavesmo361380.setBegBarType(VF.Barline.type.NONE);
stavesmo361380.setContext(context);
stavesmo361380.draw();
smo361380v0.draw(context, stavesmo361380);
smo385990.setContext(context);
smo385990.draw();
const stavesmo363495 = new VF.Stave(958, 1287, 295);
stavesmo363495.setAttribute('id', 'stavesmo363495');
stavesmo363495.setBegBarType(VF.Barline.type.NONE);
stavesmo363495.setContext(context);
stavesmo363495.draw();
smo363495v0.draw(context, stavesmo363495);
smo385993.setContext(context);
smo385993.draw();
const fmtsmo36140416 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo361404v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361404v0ar = [];
const smo361381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo361381'] = smo361381;
smo361381.setAttribute('id', 'smo361381');
smo361404v0ar.push(smo361381);
const smo361382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo361382'] = smo361382;
smo361382.setAttribute('id', 'smo361382');
smo361404v0ar.push(smo361382);
const smo361383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
noteHash['smo361383'] = smo361383;
smo361383.setAttribute('id', 'smo361383');
smo361404v0ar.push(smo361383);
const smo361384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo361384'] = smo361384;
smo361384.setAttribute('id', 'smo361384');
smo361404v0ar.push(smo361384);
const smo361385 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo361385'] = smo361385;
smo361385.setAttribute('id', 'smo361385');
smo361404v0ar.push(smo361385);
const smo361386 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo361386'] = smo361386;
smo361386.setAttribute('id', 'smo361386');
smo361404v0ar.push(smo361386);
const smo361387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
noteHash['smo361387'] = smo361387;
smo361387.setAttribute('id', 'smo361387');
smo361404v0ar.push(smo361387);
const smo361388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo361388'] = smo361388;
smo361388.setAttribute('id', 'smo361388');
smo361404v0ar.push(smo361388);
smo361404v0.addTickables(smo361404v0ar)
fmtsmo36140416.joinVoices([smo361404v0]);
const fmtsmo36351516 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo363515v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363515v0ar = [];
const smo363496 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
noteHash['smo363496'] = smo363496;
smo363496.setAttribute('id', 'smo363496');
smo363515v0ar.push(smo363496);
const smo363497 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo363497'] = smo363497;
smo363497.setAttribute('id', 'smo363497');
smo363515v0ar.push(smo363497);
const smo363498 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
noteHash['smo363498'] = smo363498;
smo363498.setAttribute('id', 'smo363498');
const smo3634980acc = new VF.Accidental('b');
smo363498.addModifier(smo3634980acc, 0);
const smo3634981acc = new VF.Accidental('b');
smo363498.addModifier(smo3634981acc, 1);
smo363515v0ar.push(smo363498);
const smo363499 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo363499'] = smo363499;
smo363499.setAttribute('id', 'smo363499');
smo363515v0ar.push(smo363499);
smo363515v0.addTickables(smo363515v0ar)
fmtsmo36351516.joinVoices([smo363515v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo385996 = smo361381.getStemDirection();
smo361381.setStemDirection(dirsmo385996);
smo361382.setStemDirection(dirsmo385996);
smo361383.setStemDirection(dirsmo385996);
smo361384.setStemDirection(dirsmo385996);
const smo385996 = new VF.Beam([smo361381,smo361382,smo361383,smo361384]);
const dirsmo385997 = smo361385.getStemDirection();
smo361385.setStemDirection(dirsmo385997);
smo361386.setStemDirection(dirsmo385997);
smo361387.setStemDirection(dirsmo385997);
smo361388.setStemDirection(dirsmo385997);
const smo385997 = new VF.Beam([smo361385,smo361386,smo361387,smo361388]);
const dirsmo386000 = smo363496.getStemDirection();
smo363496.setStemDirection(dirsmo386000);
smo363497.setStemDirection(dirsmo386000);
const smo386000 = new VF.Beam([smo363496,smo363497]);
const dirsmo386001 = smo363498.getStemDirection();
smo363498.setStemDirection(dirsmo386001);
smo363499.setStemDirection(dirsmo386001);
const smo386001 = new VF.Beam([smo363498,smo363499]);
 
// formatting measures in staff group smo365028
fmtsmo36140416.format([smo361404v0,smo363515v0], 281);
const stavesmo361404 = new VF.Stave(1253, 1132, 295);
stavesmo361404.setAttribute('id', 'stavesmo361404');
stavesmo361404.setBegBarType(VF.Barline.type.NONE);
stavesmo361404.setContext(context);
stavesmo361404.draw();
smo361404v0.draw(context, stavesmo361404);
smo385996.setContext(context);
smo385996.draw();
smo385997.setContext(context);
smo385997.draw();
const stavesmo363515 = new VF.Stave(1253, 1287, 295);
stavesmo363515.setAttribute('id', 'stavesmo363515');
stavesmo363515.setBegBarType(VF.Barline.type.NONE);
stavesmo363515.setContext(context);
stavesmo363515.draw();
smo363515v0.draw(context, stavesmo363515);
smo386000.setContext(context);
smo386000.draw();
smo386001.setContext(context);
smo386001.draw();
const fmtsmo36142817 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo361428v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361428v0ar = [];
const smo361405 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo361405'] = smo361405;
smo361405.setAttribute('id', 'smo361405');
smo361428v0ar.push(smo361405);
const smo361406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo361406'] = smo361406;
smo361406.setAttribute('id', 'smo361406');
smo361428v0ar.push(smo361406);
const smo361407 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
noteHash['smo361407'] = smo361407;
smo361407.setAttribute('id', 'smo361407');
smo361428v0ar.push(smo361407);
const smo361408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo361408'] = smo361408;
smo361408.setAttribute('id', 'smo361408');
smo361428v0ar.push(smo361408);
const smo361409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
noteHash['smo361409'] = smo361409;
smo361409.setAttribute('id', 'smo361409');
smo361428v0ar.push(smo361409);
const smo361410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo361410'] = smo361410;
smo361410.setAttribute('id', 'smo361410');
smo361428v0ar.push(smo361410);
const smo361411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
noteHash['smo361411'] = smo361411;
smo361411.setAttribute('id', 'smo361411');
smo361428v0ar.push(smo361411);
const smo361412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo361412'] = smo361412;
smo361412.setAttribute('id', 'smo361412');
smo361428v0ar.push(smo361412);
smo361428v0.addTickables(smo361428v0ar)
fmtsmo36142817.joinVoices([smo361428v0]);
const fmtsmo36353517 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo363535v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363535v0ar = [];
const smo363516 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
noteHash['smo363516'] = smo363516;
smo363516.setAttribute('id', 'smo363516');
smo363535v0ar.push(smo363516);
const smo363517 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo363517'] = smo363517;
smo363517.setAttribute('id', 'smo363517');
smo363535v0ar.push(smo363517);
const smo363518 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/2/n","ab/3/n"]}'))
noteHash['smo363518'] = smo363518;
smo363518.setAttribute('id', 'smo363518');
const smo3635180acc = new VF.Accidental('b');
smo363518.addModifier(smo3635180acc, 0);
const smo3635181acc = new VF.Accidental('b');
smo363518.addModifier(smo3635181acc, 1);
smo363535v0ar.push(smo363518);
const smo363519 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo363519'] = smo363519;
smo363519.setAttribute('id', 'smo363519');
smo363535v0ar.push(smo363519);
smo363535v0.addTickables(smo363535v0ar)
fmtsmo36353517.joinVoices([smo363535v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386004 = smo361405.getStemDirection();
smo361405.setStemDirection(dirsmo386004);
smo361406.setStemDirection(dirsmo386004);
smo361407.setStemDirection(dirsmo386004);
smo361408.setStemDirection(dirsmo386004);
const smo386004 = new VF.Beam([smo361405,smo361406,smo361407,smo361408]);
const dirsmo386005 = smo361409.getStemDirection();
smo361409.setStemDirection(dirsmo386005);
smo361410.setStemDirection(dirsmo386005);
smo361411.setStemDirection(dirsmo386005);
smo361412.setStemDirection(dirsmo386005);
const smo386005 = new VF.Beam([smo361409,smo361410,smo361411,smo361412]);
const dirsmo386008 = smo363516.getStemDirection();
smo363516.setStemDirection(dirsmo386008);
smo363517.setStemDirection(dirsmo386008);
const smo386008 = new VF.Beam([smo363516,smo363517]);
const dirsmo386009 = smo363518.getStemDirection();
smo363518.setStemDirection(dirsmo386009);
smo363519.setStemDirection(dirsmo386009);
const smo386009 = new VF.Beam([smo363518,smo363519]);
 
// formatting measures in staff group smo365028
fmtsmo36142817.format([smo361428v0,smo363535v0], 281);
const stavesmo361428 = new VF.Stave(1548, 1132, 295);
stavesmo361428.setAttribute('id', 'stavesmo361428');
stavesmo361428.setBegBarType(VF.Barline.type.NONE);
stavesmo361428.setContext(context);
stavesmo361428.draw();
smo361428v0.draw(context, stavesmo361428);
smo386004.setContext(context);
smo386004.draw();
smo386005.setContext(context);
smo386005.draw();
const stavesmo363535 = new VF.Stave(1548, 1287, 295);
stavesmo363535.setAttribute('id', 'stavesmo363535');
stavesmo363535.setBegBarType(VF.Barline.type.NONE);
stavesmo363535.setContext(context);
stavesmo363535.draw();
smo363535v0.draw(context, stavesmo363535);
smo386008.setContext(context);
smo386008.draw();
smo386009.setContext(context);
smo386009.draw();
const rightsmo365028stavesmo3614281 = new VF.StaveConnector(stavesmo361428, stavesmo363535).setType(0);
rightsmo365028stavesmo3614281.setContext(context).draw();
const fmtsmo36145118 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo361451v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361451v0ar = [];
const smo361429 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo361429'] = smo361429;
smo361429.setAttribute('id', 'smo361429');
smo361451v0ar.push(smo361429);
const smo361430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo361430'] = smo361430;
smo361430.setAttribute('id', 'smo361430');
smo361451v0ar.push(smo361430);
const smo361431 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo361431'] = smo361431;
smo361431.setAttribute('id', 'smo361431');
smo361451v0ar.push(smo361431);
const smo361432 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo361432'] = smo361432;
smo361432.setAttribute('id', 'smo361432');
smo361451v0ar.push(smo361432);
const smo361433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
noteHash['smo361433'] = smo361433;
smo361433.setAttribute('id', 'smo361433');
smo361451v0ar.push(smo361433);
const smo361434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
noteHash['smo361434'] = smo361434;
smo361434.setAttribute('id', 'smo361434');
smo361451v0ar.push(smo361434);
const smo361435 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
noteHash['smo361435'] = smo361435;
smo361435.setAttribute('id', 'smo361435');
smo361451v0ar.push(smo361435);
smo361451v0.addTickables(smo361451v0ar)
fmtsmo36145118.joinVoices([smo361451v0]);
const fmtsmo36355518 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo363555v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363555v0ar = [];
const smo363536 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo363536'] = smo363536;
smo363536.setAttribute('id', 'smo363536');
smo363555v0ar.push(smo363536);
const smo363537 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo363537'] = smo363537;
smo363537.setAttribute('id', 'smo363537');
smo363555v0ar.push(smo363537);
const smo363538 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo363538'] = smo363538;
smo363538.setAttribute('id', 'smo363538');
smo363555v0ar.push(smo363538);
const smo363539 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
noteHash['smo363539'] = smo363539;
smo363539.setAttribute('id', 'smo363539');
smo363555v0ar.push(smo363539);
smo363555v0.addTickables(smo363555v0ar)
fmtsmo36355518.joinVoices([smo363555v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386020 = smo361429.getStemDirection();
smo361429.setStemDirection(dirsmo386020);
smo361430.setStemDirection(dirsmo386020);
smo361431.setStemDirection(dirsmo386020);
smo361432.setStemDirection(dirsmo386020);
const smo386020 = new VF.Beam([smo361429,smo361430,smo361431,smo361432]);
const dirsmo386021 = smo361433.getStemDirection();
smo361433.setStemDirection(dirsmo386021);
smo361434.setStemDirection(dirsmo386021);
smo361435.setStemDirection(dirsmo386021);
const smo386021 = new VF.Beam([smo361433,smo361434,smo361435]);
const dirsmo386024 = smo363536.getStemDirection();
smo363536.setStemDirection(dirsmo386024);
smo363537.setStemDirection(dirsmo386024);
const smo386024 = new VF.Beam([smo363536,smo363537]);
const dirsmo386025 = smo363538.getStemDirection();
smo363538.setStemDirection(dirsmo386025);
smo363539.setStemDirection(dirsmo386025);
const smo386025 = new VF.Beam([smo363538,smo363539]);
 
// formatting measures in staff group smo365028
fmtsmo36145118.format([smo361451v0,smo363555v0], 237);
const stavesmo361451 = new VF.Stave(73, 1481, 295);
stavesmo361451.setAttribute('id', 'stavesmo361451');
stavesmo361451.setBegBarType(1);
stavesmo361451.addClef('treble');
stavesmo361451.setContext(context);
stavesmo361451.draw();
smo361451v0.draw(context, stavesmo361451);
smo386020.setContext(context);
smo386020.draw();
smo386021.setContext(context);
smo386021.draw();
const stavesmo363555 = new VF.Stave(73, 1625, 295);
stavesmo363555.setAttribute('id', 'stavesmo363555');
stavesmo363555.setBegBarType(1);
stavesmo363555.addClef('bass');
stavesmo363555.setContext(context);
stavesmo363555.draw();
smo363555v0.draw(context, stavesmo363555);
smo386024.setContext(context);
smo386024.draw();
smo386025.setContext(context);
smo386025.draw();
const leftsmo365028stavesmo3614511 = new VF.StaveConnector(stavesmo361451, stavesmo363555).setType(3);
leftsmo365028stavesmo3614511.setContext(context).draw();
const fmtsmo36147219 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo361472v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361472v0ar = [];
const smo361452 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo361452'] = smo361452;
smo361452.setAttribute('id', 'smo361452');
smo361472v0ar.push(smo361452);
const smo361453 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo361453'] = smo361453;
smo361453.setAttribute('id', 'smo361453');
smo361472v0ar.push(smo361453);
const smo361454 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo361454'] = smo361454;
smo361454.setAttribute('id', 'smo361454');
smo361472v0ar.push(smo361454);
const smo361455 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo361455'] = smo361455;
smo361455.setAttribute('id', 'smo361455');
const smo3614550acc = new VF.Accidental('b');
smo361455.addModifier(smo3614550acc, 0);
smo361472v0ar.push(smo361455);
smo361472v0.addTickables(smo361472v0ar)
fmtsmo36147219.joinVoices([smo361472v0]);
const fmtsmo36357619 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo363576v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363576v0ar = [];
const smo363556 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo363556'] = smo363556;
smo363556.setAttribute('id', 'smo363556');
smo363576v0ar.push(smo363556);
const smo363557 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo363557'] = smo363557;
smo363557.setAttribute('id', 'smo363557');
smo363576v0ar.push(smo363557);
const smo363558 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
noteHash['smo363558'] = smo363558;
smo363558.setAttribute('id', 'smo363558');
smo363576v0ar.push(smo363558);
const smo363559 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n","bn/3/n"]}'))
noteHash['smo363559'] = smo363559;
smo363559.setAttribute('id', 'smo363559');
smo363576v0ar.push(smo363559);
smo363576v0.addTickables(smo363576v0ar)
fmtsmo36357619.joinVoices([smo363576v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386028 = smo361453.getStemDirection();
smo361453.setStemDirection(dirsmo386028);
smo361454.setStemDirection(dirsmo386028);
smo361455.setStemDirection(dirsmo386028);
const smo386028 = new VF.Beam([smo361453,smo361454,smo361455]);
const dirsmo386030 = smo363556.getStemDirection();
smo363556.setStemDirection(dirsmo386030);
smo363557.setStemDirection(dirsmo386030);
const smo386030 = new VF.Beam([smo363556,smo363557]);
const dirsmo386031 = smo363558.getStemDirection();
smo363558.setStemDirection(dirsmo386031);
smo363559.setStemDirection(dirsmo386031);
const smo386031 = new VF.Beam([smo363558,smo363559]);
 
// formatting measures in staff group smo365028
fmtsmo36147219.format([smo361472v0,smo363576v0], 277);
const stavesmo361472 = new VF.Stave(368, 1481, 295);
stavesmo361472.setAttribute('id', 'stavesmo361472');
stavesmo361472.setBegBarType(VF.Barline.type.NONE);
stavesmo361472.setEndBarType(5);
stavesmo361472.setContext(context);
stavesmo361472.draw();
smo361472v0.draw(context, stavesmo361472);
smo386028.setContext(context);
smo386028.draw();
const stavesmo363576 = new VF.Stave(368, 1625, 295);
stavesmo363576.setAttribute('id', 'stavesmo363576');
stavesmo363576.setBegBarType(VF.Barline.type.NONE);
stavesmo363576.setEndBarType(5);
stavesmo363576.setContext(context);
stavesmo363576.draw();
smo363576v0.draw(context, stavesmo363576);
smo386030.setContext(context);
smo386030.draw();
smo386031.setContext(context);
smo386031.draw();
const fmtsmo36149420 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo361494v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361494v0ar = [];
const smo361473 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo361473'] = smo361473;
smo361473.setAttribute('id', 'smo361473');
smo361494v0ar.push(smo361473);
const smo361474 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
noteHash['smo361474'] = smo361474;
smo361474.setAttribute('id', 'smo361474');
smo361494v0ar.push(smo361474);
const smo361475 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
noteHash['smo361475'] = smo361475;
smo361475.setAttribute('id', 'smo361475');
smo361494v0ar.push(smo361475);
const smo361476 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
noteHash['smo361476'] = smo361476;
smo361476.setAttribute('id', 'smo361476');
smo361494v0ar.push(smo361476);
const smo361477 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
noteHash['smo361477'] = smo361477;
smo361477.setAttribute('id', 'smo361477');
const smo3614770acc = new VF.Accidental('b');
smo361477.addModifier(smo3614770acc, 0);
const smo3614771acc = new VF.Accidental('b');
smo361477.addModifier(smo3614771acc, 1);
const smo3614772acc = new VF.Accidental('b');
smo361477.addModifier(smo3614772acc, 2);
smo361494v0ar.push(smo361477);
smo361494v0.addTickables(smo361494v0ar)
fmtsmo36149420.joinVoices([smo361494v0]);
const fmtsmo36359720 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo363597v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363597v0ar = [];
const smo363577 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo363577'] = smo363577;
smo363577.setAttribute('id', 'smo363577');
smo363597v0ar.push(smo363577);
const smo363578 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo363578'] = smo363578;
smo363578.setAttribute('id', 'smo363578');
smo363597v0ar.push(smo363578);
const smo363579 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
noteHash['smo363579'] = smo363579;
smo363579.setAttribute('id', 'smo363579');
smo363597v0ar.push(smo363579);
const smo363580 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo363580'] = smo363580;
smo363580.setAttribute('id', 'smo363580');
smo363597v0ar.push(smo363580);
smo363597v0.addTickables(smo363597v0ar)
fmtsmo36359720.joinVoices([smo363597v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386033 = smo361474.getStemDirection();
smo361474.setStemDirection(dirsmo386033);
smo361475.setStemDirection(dirsmo386033);
smo361476.setStemDirection(dirsmo386033);
smo361477.setStemDirection(dirsmo386033);
const smo386033 = new VF.Beam([smo361474,smo361475,smo361476,smo361477]);
const dirsmo386036 = smo363577.getStemDirection();
smo363577.setStemDirection(dirsmo386036);
smo363578.setStemDirection(dirsmo386036);
const smo386036 = new VF.Beam([smo363577,smo363578]);
 
// formatting measures in staff group smo365028
fmtsmo36149420.format([smo361494v0,smo363597v0], 281);
const stavesmo361494 = new VF.Stave(663, 1481, 295);
stavesmo361494.setAttribute('id', 'stavesmo361494');
stavesmo361494.setBegBarType(VF.Barline.type.NONE);
stavesmo361494.setContext(context);
stavesmo361494.draw();
smo361494v0.draw(context, stavesmo361494);
smo386033.setContext(context);
smo386033.draw();
const stavesmo363597 = new VF.Stave(663, 1625, 295);
stavesmo363597.setAttribute('id', 'stavesmo363597');
stavesmo363597.setBegBarType(VF.Barline.type.NONE);
stavesmo363597.setContext(context);
stavesmo363597.draw();
smo363597v0.draw(context, stavesmo363597);
smo386036.setContext(context);
smo386036.draw();
const fmtsmo36151721 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo361517v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361517v0ar = [];
const smo361495 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo361495'] = smo361495;
smo361495.setAttribute('id', 'smo361495');
smo361517v0ar.push(smo361495);
const smo361496 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
noteHash['smo361496'] = smo361496;
smo361496.setAttribute('id', 'smo361496');
smo361517v0ar.push(smo361496);
const smo361497 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo361497'] = smo361497;
smo361497.setAttribute('id', 'smo361497');
smo361517v0ar.push(smo361497);
const smo361498 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo361498'] = smo361498;
smo361498.setAttribute('id', 'smo361498');
smo361517v0ar.push(smo361498);
const smo361499 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
noteHash['smo361499'] = smo361499;
smo361499.setAttribute('id', 'smo361499');
smo361517v0ar.push(smo361499);
const smo361500 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
noteHash['smo361500'] = smo361500;
smo361500.setAttribute('id', 'smo361500');
smo361517v0ar.push(smo361500);
const smo361501 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
noteHash['smo361501'] = smo361501;
smo361501.setAttribute('id', 'smo361501');
const smo3615010acc = new VF.Accidental('b');
smo361501.addModifier(smo3615010acc, 0);
const smo3615011acc = new VF.Accidental('b');
smo361501.addModifier(smo3615011acc, 1);
const smo3615012acc = new VF.Accidental('b');
smo361501.addModifier(smo3615012acc, 2);
smo361517v0ar.push(smo361501);
smo361517v0.addTickables(smo361517v0ar)
fmtsmo36151721.joinVoices([smo361517v0]);
const fmtsmo36361721 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo363617v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363617v0ar = [];
const smo363598 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
noteHash['smo363598'] = smo363598;
smo363598.setAttribute('id', 'smo363598');
smo363617v0ar.push(smo363598);
const smo363599 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo363599'] = smo363599;
smo363599.setAttribute('id', 'smo363599');
smo363617v0ar.push(smo363599);
const smo363600 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo363600'] = smo363600;
smo363600.setAttribute('id', 'smo363600');
smo363617v0ar.push(smo363600);
const smo363601 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo363601'] = smo363601;
smo363601.setAttribute('id', 'smo363601');
smo363617v0ar.push(smo363601);
smo363617v0.addTickables(smo363617v0ar)
fmtsmo36361721.joinVoices([smo363617v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386039 = smo361495.getStemDirection();
smo361495.setStemDirection(dirsmo386039);
smo361496.setStemDirection(dirsmo386039);
smo361497.setStemDirection(dirsmo386039);
const smo386039 = new VF.Beam([smo361495,smo361496,smo361497]);
const dirsmo386040 = smo361498.getStemDirection();
smo361498.setStemDirection(dirsmo386040);
smo361499.setStemDirection(dirsmo386040);
smo361500.setStemDirection(dirsmo386040);
smo361501.setStemDirection(dirsmo386040);
const smo386040 = new VF.Beam([smo361498,smo361499,smo361500,smo361501]);
const dirsmo386042 = smo363598.getStemDirection();
smo363598.setStemDirection(dirsmo386042);
smo363599.setStemDirection(dirsmo386042);
const smo386042 = new VF.Beam([smo363598,smo363599]);
const dirsmo386043 = smo363600.getStemDirection();
smo363600.setStemDirection(dirsmo386043);
smo363601.setStemDirection(dirsmo386043);
const smo386043 = new VF.Beam([smo363600,smo363601]);
 
// formatting measures in staff group smo365028
fmtsmo36151721.format([smo361517v0,smo363617v0], 272);
const stavesmo361517 = new VF.Stave(958, 1481, 295);
stavesmo361517.setAttribute('id', 'stavesmo361517');
stavesmo361517.setBegBarType(4);
stavesmo361517.setContext(context);
stavesmo361517.draw();
smo361517v0.draw(context, stavesmo361517);
smo386039.setContext(context);
smo386039.draw();
smo386040.setContext(context);
smo386040.draw();
const stavesmo363617 = new VF.Stave(958, 1625, 295);
stavesmo363617.setAttribute('id', 'stavesmo363617');
stavesmo363617.setBegBarType(4);
stavesmo363617.setContext(context);
stavesmo363617.draw();
smo363617v0.draw(context, stavesmo363617);
smo386042.setContext(context);
smo386042.draw();
smo386043.setContext(context);
smo386043.draw();
const fmtsmo36154022 = new VF.Formatter();
//
// voices and notes for stave 0 22
const smo361540v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361540v0ar = [];
const smo361518 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo361518'] = smo361518;
smo361518.setAttribute('id', 'smo361518');
smo361540v0ar.push(smo361518);
const smo361519 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
noteHash['smo361519'] = smo361519;
smo361519.setAttribute('id', 'smo361519');
smo361540v0ar.push(smo361519);
const smo361520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo361520'] = smo361520;
smo361520.setAttribute('id', 'smo361520');
smo361540v0ar.push(smo361520);
const smo361521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo361521'] = smo361521;
smo361521.setAttribute('id', 'smo361521');
smo361540v0ar.push(smo361521);
const smo361522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo361522'] = smo361522;
smo361522.setAttribute('id', 'smo361522');
smo361540v0ar.push(smo361522);
const smo361523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361523'] = smo361523;
smo361523.setAttribute('id', 'smo361523');
smo361540v0ar.push(smo361523);
const smo361524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo361524'] = smo361524;
smo361524.setAttribute('id', 'smo361524');
smo361540v0ar.push(smo361524);
smo361540v0.addTickables(smo361540v0ar)
fmtsmo36154022.joinVoices([smo361540v0]);
const fmtsmo36363722 = new VF.Formatter();
//
// voices and notes for stave 1 22
const smo363637v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363637v0ar = [];
const smo363618 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo363618'] = smo363618;
smo363618.setAttribute('id', 'smo363618');
smo363637v0ar.push(smo363618);
const smo363619 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo363619'] = smo363619;
smo363619.setAttribute('id', 'smo363619');
smo363637v0ar.push(smo363619);
const smo363620 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo363620'] = smo363620;
smo363620.setAttribute('id', 'smo363620');
smo363637v0ar.push(smo363620);
const smo363621 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo363621'] = smo363621;
smo363621.setAttribute('id', 'smo363621');
smo363637v0ar.push(smo363621);
smo363637v0.addTickables(smo363637v0ar)
fmtsmo36363722.joinVoices([smo363637v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386045 = smo361518.getStemDirection();
smo361518.setStemDirection(dirsmo386045);
smo361519.setStemDirection(dirsmo386045);
smo361520.setStemDirection(dirsmo386045);
const smo386045 = new VF.Beam([smo361518,smo361519,smo361520]);
const dirsmo386046 = smo361521.getStemDirection();
smo361521.setStemDirection(dirsmo386046);
smo361522.setStemDirection(dirsmo386046);
smo361523.setStemDirection(dirsmo386046);
smo361524.setStemDirection(dirsmo386046);
const smo386046 = new VF.Beam([smo361521,smo361522,smo361523,smo361524]);
const dirsmo386049 = smo363618.getStemDirection();
smo363618.setStemDirection(dirsmo386049);
smo363619.setStemDirection(dirsmo386049);
const smo386049 = new VF.Beam([smo363618,smo363619]);
const dirsmo386050 = smo363620.getStemDirection();
smo363620.setStemDirection(dirsmo386050);
smo363621.setStemDirection(dirsmo386050);
const smo386050 = new VF.Beam([smo363620,smo363621]);
 
// formatting measures in staff group smo365028
fmtsmo36154022.format([smo361540v0,smo363637v0], 281);
const stavesmo361540 = new VF.Stave(1253, 1481, 295);
stavesmo361540.setAttribute('id', 'stavesmo361540');
stavesmo361540.setBegBarType(VF.Barline.type.NONE);
stavesmo361540.setContext(context);
stavesmo361540.draw();
smo361540v0.draw(context, stavesmo361540);
smo386045.setContext(context);
smo386045.draw();
smo386046.setContext(context);
smo386046.draw();
const stavesmo363637 = new VF.Stave(1253, 1625, 295);
stavesmo363637.setAttribute('id', 'stavesmo363637');
stavesmo363637.setBegBarType(VF.Barline.type.NONE);
stavesmo363637.setContext(context);
stavesmo363637.draw();
smo363637v0.draw(context, stavesmo363637);
smo386049.setContext(context);
smo386049.draw();
smo386050.setContext(context);
smo386050.draw();
const fmtsmo36156423 = new VF.Formatter();
//
// voices and notes for stave 0 23
const smo361564v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361564v0ar = [];
const smo361541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo361541'] = smo361541;
smo361541.setAttribute('id', 'smo361541');
smo361564v0ar.push(smo361541);
const smo361542 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo361542'] = smo361542;
smo361542.setAttribute('id', 'smo361542');
smo361564v0ar.push(smo361542);
const smo361543 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361543'] = smo361543;
smo361543.setAttribute('id', 'smo361543');
smo361564v0ar.push(smo361543);
const smo361544 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo361544'] = smo361544;
smo361544.setAttribute('id', 'smo361544');
smo361564v0ar.push(smo361544);
const smo361545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo361545'] = smo361545;
smo361545.setAttribute('id', 'smo361545');
smo361564v0ar.push(smo361545);
const smo361546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo361546'] = smo361546;
smo361546.setAttribute('id', 'smo361546');
smo361564v0ar.push(smo361546);
const smo361547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo361547'] = smo361547;
smo361547.setAttribute('id', 'smo361547');
smo361564v0ar.push(smo361547);
const smo361548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo361548'] = smo361548;
smo361548.setAttribute('id', 'smo361548');
smo361564v0ar.push(smo361548);
smo361564v0.addTickables(smo361564v0ar)
fmtsmo36156423.joinVoices([smo361564v0]);
const fmtsmo36365723 = new VF.Formatter();
//
// voices and notes for stave 1 23
const smo363657v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363657v0ar = [];
const smo363638 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
noteHash['smo363638'] = smo363638;
smo363638.setAttribute('id', 'smo363638');
smo363657v0ar.push(smo363638);
const smo363639 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo363639'] = smo363639;
smo363639.setAttribute('id', 'smo363639');
smo363657v0ar.push(smo363639);
const smo363640 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo363640'] = smo363640;
smo363640.setAttribute('id', 'smo363640');
smo363657v0ar.push(smo363640);
const smo363641 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo363641'] = smo363641;
smo363641.setAttribute('id', 'smo363641');
const smo3636410acc = new VF.Accidental('b');
smo363641.addModifier(smo3636410acc, 0);
smo363657v0ar.push(smo363641);
smo363657v0.addTickables(smo363657v0ar)
fmtsmo36365723.joinVoices([smo363657v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386053 = smo361541.getStemDirection();
smo361541.setStemDirection(dirsmo386053);
smo361542.setStemDirection(dirsmo386053);
smo361543.setStemDirection(dirsmo386053);
smo361544.setStemDirection(dirsmo386053);
const smo386053 = new VF.Beam([smo361541,smo361542,smo361543,smo361544]);
const dirsmo386054 = smo361545.getStemDirection();
smo361545.setStemDirection(dirsmo386054);
smo361546.setStemDirection(dirsmo386054);
smo361547.setStemDirection(dirsmo386054);
smo361548.setStemDirection(dirsmo386054);
const smo386054 = new VF.Beam([smo361545,smo361546,smo361547,smo361548]);
const dirsmo386057 = smo363638.getStemDirection();
smo363638.setStemDirection(dirsmo386057);
smo363639.setStemDirection(dirsmo386057);
const smo386057 = new VF.Beam([smo363638,smo363639]);
const dirsmo386058 = smo363640.getStemDirection();
smo363640.setStemDirection(dirsmo386058);
smo363641.setStemDirection(dirsmo386058);
const smo386058 = new VF.Beam([smo363640,smo363641]);
 
// formatting measures in staff group smo365028
fmtsmo36156423.format([smo361564v0,smo363657v0], 281);
const stavesmo361564 = new VF.Stave(1548, 1481, 295);
stavesmo361564.setAttribute('id', 'stavesmo361564');
stavesmo361564.setBegBarType(VF.Barline.type.NONE);
stavesmo361564.setContext(context);
stavesmo361564.draw();
smo361564v0.draw(context, stavesmo361564);
smo386053.setContext(context);
smo386053.draw();
smo386054.setContext(context);
smo386054.draw();
const stavesmo363657 = new VF.Stave(1548, 1625, 295);
stavesmo363657.setAttribute('id', 'stavesmo363657');
stavesmo363657.setBegBarType(VF.Barline.type.NONE);
stavesmo363657.setContext(context);
stavesmo363657.draw();
smo363657v0.draw(context, stavesmo363657);
smo386057.setContext(context);
smo386057.draw();
smo386058.setContext(context);
smo386058.draw();
const rightsmo365028stavesmo3615641 = new VF.StaveConnector(stavesmo361564, stavesmo363657).setType(0);
rightsmo365028stavesmo3615641.setContext(context).draw();
const fmtsmo36158824 = new VF.Formatter();
//
// voices and notes for stave 0 24
const smo361588v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361588v0ar = [];
const smo361565 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo361565'] = smo361565;
smo361565.setAttribute('id', 'smo361565');
smo361588v0ar.push(smo361565);
const smo361566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo361566'] = smo361566;
smo361566.setAttribute('id', 'smo361566');
smo361588v0ar.push(smo361566);
const smo361567 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo361567'] = smo361567;
smo361567.setAttribute('id', 'smo361567');
smo361588v0ar.push(smo361567);
const smo361568 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo361568'] = smo361568;
smo361568.setAttribute('id', 'smo361568');
smo361588v0ar.push(smo361568);
const smo361569 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo361569'] = smo361569;
smo361569.setAttribute('id', 'smo361569');
smo361588v0ar.push(smo361569);
const smo361570 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo361570'] = smo361570;
smo361570.setAttribute('id', 'smo361570');
smo361588v0ar.push(smo361570);
const smo361571 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo361571'] = smo361571;
smo361571.setAttribute('id', 'smo361571');
smo361588v0ar.push(smo361571);
const smo361572 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo361572'] = smo361572;
smo361572.setAttribute('id', 'smo361572');
smo361588v0ar.push(smo361572);
smo361588v0.addTickables(smo361588v0ar)
fmtsmo36158824.joinVoices([smo361588v0]);
const fmtsmo36367724 = new VF.Formatter();
//
// voices and notes for stave 1 24
const smo363677v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363677v0ar = [];
const smo363658 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo363658'] = smo363658;
smo363658.setAttribute('id', 'smo363658');
smo363677v0ar.push(smo363658);
const smo363659 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo363659'] = smo363659;
smo363659.setAttribute('id', 'smo363659');
smo363677v0ar.push(smo363659);
const smo363660 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo363660'] = smo363660;
smo363660.setAttribute('id', 'smo363660');
smo363677v0ar.push(smo363660);
const smo363661 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo363661'] = smo363661;
smo363661.setAttribute('id', 'smo363661');
smo363677v0ar.push(smo363661);
smo363677v0.addTickables(smo363677v0ar)
fmtsmo36367724.joinVoices([smo363677v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386069 = smo361565.getStemDirection();
smo361565.setStemDirection(dirsmo386069);
smo361566.setStemDirection(dirsmo386069);
smo361567.setStemDirection(dirsmo386069);
smo361568.setStemDirection(dirsmo386069);
const smo386069 = new VF.Beam([smo361565,smo361566,smo361567,smo361568]);
const dirsmo386070 = smo361569.getStemDirection();
smo361569.setStemDirection(dirsmo386070);
smo361570.setStemDirection(dirsmo386070);
smo361571.setStemDirection(dirsmo386070);
smo361572.setStemDirection(dirsmo386070);
const smo386070 = new VF.Beam([smo361569,smo361570,smo361571,smo361572]);
const dirsmo386073 = smo363658.getStemDirection();
smo363658.setStemDirection(dirsmo386073);
smo363659.setStemDirection(dirsmo386073);
const smo386073 = new VF.Beam([smo363658,smo363659]);
const dirsmo386074 = smo363660.getStemDirection();
smo363660.setStemDirection(dirsmo386074);
smo363661.setStemDirection(dirsmo386074);
const smo386074 = new VF.Beam([smo363660,smo363661]);
 
// formatting measures in staff group smo365028
fmtsmo36158824.format([smo361588v0,smo363677v0], 237);
const stavesmo361588 = new VF.Stave(73, 1828, 295);
stavesmo361588.setAttribute('id', 'stavesmo361588');
stavesmo361588.setBegBarType(1);
stavesmo361588.addClef('treble');
stavesmo361588.setContext(context);
stavesmo361588.draw();
smo361588v0.draw(context, stavesmo361588);
smo386069.setContext(context);
smo386069.draw();
smo386070.setContext(context);
smo386070.draw();
const stavesmo363677 = new VF.Stave(73, 1988, 295);
stavesmo363677.setAttribute('id', 'stavesmo363677');
stavesmo363677.setBegBarType(1);
stavesmo363677.addClef('bass');
stavesmo363677.setContext(context);
stavesmo363677.draw();
smo363677v0.draw(context, stavesmo363677);
smo386073.setContext(context);
smo386073.draw();
smo386074.setContext(context);
smo386074.draw();
const leftsmo365028stavesmo3615881 = new VF.StaveConnector(stavesmo361588, stavesmo363677).setType(3);
leftsmo365028stavesmo3615881.setContext(context).draw();
const fmtsmo36161125 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo361611v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361611v0ar = [];
const smo361589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo361589'] = smo361589;
smo361589.setAttribute('id', 'smo361589');
smo361611v0ar.push(smo361589);
const smo361590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
noteHash['smo361590'] = smo361590;
smo361590.setAttribute('id', 'smo361590');
smo361611v0ar.push(smo361590);
const smo361591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo361591'] = smo361591;
smo361591.setAttribute('id', 'smo361591');
smo361611v0ar.push(smo361591);
const smo361592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo361592'] = smo361592;
smo361592.setAttribute('id', 'smo361592');
smo361611v0ar.push(smo361592);
const smo361593 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
noteHash['smo361593'] = smo361593;
smo361593.setAttribute('id', 'smo361593');
smo361611v0ar.push(smo361593);
const smo361594 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
noteHash['smo361594'] = smo361594;
smo361594.setAttribute('id', 'smo361594');
smo361611v0ar.push(smo361594);
const smo361595 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
noteHash['smo361595'] = smo361595;
smo361595.setAttribute('id', 'smo361595');
const smo3615950acc = new VF.Accidental('b');
smo361595.addModifier(smo3615950acc, 0);
const smo3615951acc = new VF.Accidental('b');
smo361595.addModifier(smo3615951acc, 1);
const smo3615952acc = new VF.Accidental('b');
smo361595.addModifier(smo3615952acc, 2);
smo361611v0ar.push(smo361595);
smo361611v0.addTickables(smo361611v0ar)
fmtsmo36161125.joinVoices([smo361611v0]);
const fmtsmo36369725 = new VF.Formatter();
//
// voices and notes for stave 1 25
const smo363697v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363697v0ar = [];
const smo363678 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo363678'] = smo363678;
smo363678.setAttribute('id', 'smo363678');
smo363697v0ar.push(smo363678);
const smo363679 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo363679'] = smo363679;
smo363679.setAttribute('id', 'smo363679');
smo363697v0ar.push(smo363679);
const smo363680 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo363680'] = smo363680;
smo363680.setAttribute('id', 'smo363680');
smo363697v0ar.push(smo363680);
const smo363681 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo363681'] = smo363681;
smo363681.setAttribute('id', 'smo363681');
smo363697v0ar.push(smo363681);
smo363697v0.addTickables(smo363697v0ar)
fmtsmo36369725.joinVoices([smo363697v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386077 = smo361589.getStemDirection();
smo361589.setStemDirection(dirsmo386077);
smo361590.setStemDirection(dirsmo386077);
smo361591.setStemDirection(dirsmo386077);
const smo386077 = new VF.Beam([smo361589,smo361590,smo361591]);
const dirsmo386078 = smo361592.getStemDirection();
smo361592.setStemDirection(dirsmo386078);
smo361593.setStemDirection(dirsmo386078);
smo361594.setStemDirection(dirsmo386078);
smo361595.setStemDirection(dirsmo386078);
const smo386078 = new VF.Beam([smo361592,smo361593,smo361594,smo361595]);
const dirsmo386081 = smo363678.getStemDirection();
smo363678.setStemDirection(dirsmo386081);
smo363679.setStemDirection(dirsmo386081);
const smo386081 = new VF.Beam([smo363678,smo363679]);
const dirsmo386082 = smo363680.getStemDirection();
smo363680.setStemDirection(dirsmo386082);
smo363681.setStemDirection(dirsmo386082);
const smo386082 = new VF.Beam([smo363680,smo363681]);
 
// formatting measures in staff group smo365028
fmtsmo36161125.format([smo361611v0,smo363697v0], 281);
const stavesmo361611 = new VF.Stave(368, 1828, 295);
stavesmo361611.setAttribute('id', 'stavesmo361611');
stavesmo361611.setBegBarType(VF.Barline.type.NONE);
stavesmo361611.setContext(context);
stavesmo361611.draw();
smo361611v0.draw(context, stavesmo361611);
smo386077.setContext(context);
smo386077.draw();
smo386078.setContext(context);
smo386078.draw();
const stavesmo363697 = new VF.Stave(368, 1988, 295);
stavesmo363697.setAttribute('id', 'stavesmo363697');
stavesmo363697.setBegBarType(VF.Barline.type.NONE);
stavesmo363697.setContext(context);
stavesmo363697.draw();
smo363697v0.draw(context, stavesmo363697);
smo386081.setContext(context);
smo386081.draw();
smo386082.setContext(context);
smo386082.draw();
const fmtsmo36163426 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo361634v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361634v0ar = [];
const smo361612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo361612'] = smo361612;
smo361612.setAttribute('id', 'smo361612');
smo361634v0ar.push(smo361612);
const smo361613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
noteHash['smo361613'] = smo361613;
smo361613.setAttribute('id', 'smo361613');
smo361634v0ar.push(smo361613);
const smo361614 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo361614'] = smo361614;
smo361614.setAttribute('id', 'smo361614');
smo361634v0ar.push(smo361614);
const smo361615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo361615'] = smo361615;
smo361615.setAttribute('id', 'smo361615');
smo361634v0ar.push(smo361615);
const smo361616 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo361616'] = smo361616;
smo361616.setAttribute('id', 'smo361616');
smo361634v0ar.push(smo361616);
const smo361617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo361617'] = smo361617;
smo361617.setAttribute('id', 'smo361617');
smo361634v0ar.push(smo361617);
const smo361618 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
noteHash['smo361618'] = smo361618;
smo361618.setAttribute('id', 'smo361618');
const smo3616180acc = new VF.Accidental('b');
smo361618.addModifier(smo3616180acc, 0);
smo361634v0ar.push(smo361618);
smo361634v0.addTickables(smo361634v0ar)
fmtsmo36163426.joinVoices([smo361634v0]);
const fmtsmo36371726 = new VF.Formatter();
//
// voices and notes for stave 1 26
const smo363717v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363717v0ar = [];
const smo363698 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo363698'] = smo363698;
smo363698.setAttribute('id', 'smo363698');
smo363717v0ar.push(smo363698);
const smo363699 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo363699'] = smo363699;
smo363699.setAttribute('id', 'smo363699');
smo363717v0ar.push(smo363699);
const smo363700 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo363700'] = smo363700;
smo363700.setAttribute('id', 'smo363700');
smo363717v0ar.push(smo363700);
const smo363701 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n"]}'))
noteHash['smo363701'] = smo363701;
smo363701.setAttribute('id', 'smo363701');
const smo3637010acc = new VF.Accidental('b');
smo363701.addModifier(smo3637010acc, 0);
smo363717v0ar.push(smo363701);
smo363717v0.addTickables(smo363717v0ar)
fmtsmo36371726.joinVoices([smo363717v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386085 = smo361612.getStemDirection();
smo361612.setStemDirection(dirsmo386085);
smo361613.setStemDirection(dirsmo386085);
smo361614.setStemDirection(dirsmo386085);
const smo386085 = new VF.Beam([smo361612,smo361613,smo361614]);
const dirsmo386086 = smo361615.getStemDirection();
smo361615.setStemDirection(dirsmo386086);
smo361616.setStemDirection(dirsmo386086);
smo361617.setStemDirection(dirsmo386086);
smo361618.setStemDirection(dirsmo386086);
const smo386086 = new VF.Beam([smo361615,smo361616,smo361617,smo361618]);
const dirsmo386089 = smo363698.getStemDirection();
smo363698.setStemDirection(dirsmo386089);
smo363699.setStemDirection(dirsmo386089);
const smo386089 = new VF.Beam([smo363698,smo363699]);
const dirsmo386090 = smo363700.getStemDirection();
smo363700.setStemDirection(dirsmo386090);
smo363701.setStemDirection(dirsmo386090);
const smo386090 = new VF.Beam([smo363700,smo363701]);
 
// formatting measures in staff group smo365028
fmtsmo36163426.format([smo361634v0,smo363717v0], 281);
const stavesmo361634 = new VF.Stave(663, 1828, 295);
stavesmo361634.setAttribute('id', 'stavesmo361634');
stavesmo361634.setBegBarType(VF.Barline.type.NONE);
stavesmo361634.setContext(context);
stavesmo361634.draw();
smo361634v0.draw(context, stavesmo361634);
smo386085.setContext(context);
smo386085.draw();
smo386086.setContext(context);
smo386086.draw();
const stavesmo363717 = new VF.Stave(663, 1988, 295);
stavesmo363717.setAttribute('id', 'stavesmo363717');
stavesmo363717.setBegBarType(VF.Barline.type.NONE);
stavesmo363717.setContext(context);
stavesmo363717.draw();
smo363717v0.draw(context, stavesmo363717);
smo386089.setContext(context);
smo386089.draw();
smo386090.setContext(context);
smo386090.draw();
const fmtsmo36165727 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo361657v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361657v0ar = [];
const smo361635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","gn/5/n","bn/5/n"]}'))
noteHash['smo361635'] = smo361635;
smo361635.setAttribute('id', 'smo361635');
smo361657v0ar.push(smo361635);
const smo361636 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","gn/5/n","bn/5/n"]}'))
noteHash['smo361636'] = smo361636;
smo361636.setAttribute('id', 'smo361636');
smo361657v0ar.push(smo361636);
const smo361637 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","gb/5/n","bn/5/n"]}'))
noteHash['smo361637'] = smo361637;
smo361637.setAttribute('id', 'smo361637');
const smo3616371acc = new VF.Accidental('b');
smo361637.addModifier(smo3616371acc, 1);
smo361657v0ar.push(smo361637);
const smo361638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","gb/5/n","bn/5/n"]}'))
noteHash['smo361638'] = smo361638;
smo361638.setAttribute('id', 'smo361638');
smo361657v0ar.push(smo361638);
const smo361639 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo361639'] = smo361639;
smo361639.setAttribute('id', 'smo361639');
smo361657v0ar.push(smo361639);
const smo361640 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","gb/5/n"]}'))
noteHash['smo361640'] = smo361640;
smo361640.setAttribute('id', 'smo361640');
smo361657v0ar.push(smo361640);
const smo361641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo361641'] = smo361641;
smo361641.setAttribute('id', 'smo361641');
smo361657v0ar.push(smo361641);
smo361657v0.addTickables(smo361657v0ar)
fmtsmo36165727.joinVoices([smo361657v0]);
const fmtsmo36373727 = new VF.Formatter();
//
// voices and notes for stave 1 27
const smo363737v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363737v0ar = [];
const smo363718 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo363718'] = smo363718;
smo363718.setAttribute('id', 'smo363718');
smo363737v0ar.push(smo363718);
const smo363719 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n","dn/4/n"]}'))
noteHash['smo363719'] = smo363719;
smo363719.setAttribute('id', 'smo363719');
smo363737v0ar.push(smo363719);
const smo363720 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo363720'] = smo363720;
smo363720.setAttribute('id', 'smo363720');
smo363737v0ar.push(smo363720);
const smo363721 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","dn/4/n"]}'))
noteHash['smo363721'] = smo363721;
smo363721.setAttribute('id', 'smo363721');
smo363737v0ar.push(smo363721);
smo363737v0.addTickables(smo363737v0ar)
fmtsmo36373727.joinVoices([smo363737v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386093 = smo361635.getStemDirection();
smo361635.setStemDirection(dirsmo386093);
smo361636.setStemDirection(dirsmo386093);
smo361637.setStemDirection(dirsmo386093);
const smo386093 = new VF.Beam([smo361635,smo361636,smo361637]);
const dirsmo386094 = smo361638.getStemDirection();
smo361638.setStemDirection(dirsmo386094);
smo361639.setStemDirection(dirsmo386094);
smo361640.setStemDirection(dirsmo386094);
smo361641.setStemDirection(dirsmo386094);
const smo386094 = new VF.Beam([smo361638,smo361639,smo361640,smo361641]);
const dirsmo386097 = smo363718.getStemDirection();
smo363718.setStemDirection(dirsmo386097);
smo363719.setStemDirection(dirsmo386097);
const smo386097 = new VF.Beam([smo363718,smo363719]);
const dirsmo386098 = smo363720.getStemDirection();
smo363720.setStemDirection(dirsmo386098);
smo363721.setStemDirection(dirsmo386098);
const smo386098 = new VF.Beam([smo363720,smo363721]);
 
// formatting measures in staff group smo365028
fmtsmo36165727.format([smo361657v0,smo363737v0], 281);
const stavesmo361657 = new VF.Stave(958, 1828, 295);
stavesmo361657.setAttribute('id', 'stavesmo361657');
stavesmo361657.setBegBarType(VF.Barline.type.NONE);
stavesmo361657.setContext(context);
stavesmo361657.draw();
smo361657v0.draw(context, stavesmo361657);
smo386093.setContext(context);
smo386093.draw();
smo386094.setContext(context);
smo386094.draw();
const stavesmo363737 = new VF.Stave(958, 1988, 295);
stavesmo363737.setAttribute('id', 'stavesmo363737');
stavesmo363737.setBegBarType(VF.Barline.type.NONE);
stavesmo363737.setContext(context);
stavesmo363737.draw();
smo363737v0.draw(context, stavesmo363737);
smo386097.setContext(context);
smo386097.draw();
smo386098.setContext(context);
smo386098.draw();
const fmtsmo36167828 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo361678v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361678v0ar = [];
const smo361658 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","gn/5/n"]}'))
noteHash['smo361658'] = smo361658;
smo361658.setAttribute('id', 'smo361658');
smo361678v0ar.push(smo361658);
const smo361659 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","gn/5/n"]}'))
noteHash['smo361659'] = smo361659;
smo361659.setAttribute('id', 'smo361659');
smo361678v0ar.push(smo361659);
const smo361660 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
noteHash['smo361660'] = smo361660;
smo361660.setAttribute('id', 'smo361660');
smo361678v0ar.push(smo361660);
const smo361661 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
noteHash['smo361661'] = smo361661;
smo361661.setAttribute('id', 'smo361661');
smo361678v0ar.push(smo361661);
const smo361662 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
noteHash['smo361662'] = smo361662;
smo361662.setAttribute('id', 'smo361662');
const smo3616620acc = new VF.Accidental('b');
smo361662.addModifier(smo3616620acc, 0);
const smo3616621acc = new VF.Accidental('b');
smo361662.addModifier(smo3616621acc, 1);
const smo3616622acc = new VF.Accidental('b');
smo361662.addModifier(smo3616622acc, 2);
smo361678v0ar.push(smo361662);
smo361678v0.addTickables(smo361678v0ar)
fmtsmo36167828.joinVoices([smo361678v0]);
const fmtsmo36375728 = new VF.Formatter();
//
// voices and notes for stave 1 28
const smo363757v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363757v0ar = [];
const smo363738 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n","dn/4/n"]}'))
noteHash['smo363738'] = smo363738;
smo363738.setAttribute('id', 'smo363738');
smo363757v0ar.push(smo363738);
const smo363739 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo363739'] = smo363739;
smo363739.setAttribute('id', 'smo363739');
smo363757v0ar.push(smo363739);
const smo363740 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
noteHash['smo363740'] = smo363740;
smo363740.setAttribute('id', 'smo363740');
smo363757v0ar.push(smo363740);
const smo363741 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
noteHash['smo363741'] = smo363741;
smo363741.setAttribute('id', 'smo363741');
smo363757v0ar.push(smo363741);
smo363757v0.addTickables(smo363757v0ar)
fmtsmo36375728.joinVoices([smo363757v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386101 = smo361659.getStemDirection();
smo361659.setStemDirection(dirsmo386101);
smo361660.setStemDirection(dirsmo386101);
smo361661.setStemDirection(dirsmo386101);
smo361662.setStemDirection(dirsmo386101);
const smo386101 = new VF.Beam([smo361659,smo361660,smo361661,smo361662]);
const dirsmo386104 = smo363738.getStemDirection();
smo363738.setStemDirection(dirsmo386104);
smo363739.setStemDirection(dirsmo386104);
const smo386104 = new VF.Beam([smo363738,smo363739]);
const dirsmo386105 = smo363740.getStemDirection();
smo363740.setStemDirection(dirsmo386105);
smo363741.setStemDirection(dirsmo386105);
const smo386105 = new VF.Beam([smo363740,smo363741]);
 
// formatting measures in staff group smo365028
fmtsmo36167828.format([smo361678v0,smo363757v0], 281);
const stavesmo361678 = new VF.Stave(1253, 1828, 295);
stavesmo361678.setAttribute('id', 'stavesmo361678');
stavesmo361678.setBegBarType(VF.Barline.type.NONE);
stavesmo361678.setContext(context);
stavesmo361678.draw();
smo361678v0.draw(context, stavesmo361678);
smo386101.setContext(context);
smo386101.draw();
const stavesmo363757 = new VF.Stave(1253, 1988, 295);
stavesmo363757.setAttribute('id', 'stavesmo363757');
stavesmo363757.setBegBarType(VF.Barline.type.NONE);
stavesmo363757.setContext(context);
stavesmo363757.draw();
smo363757v0.draw(context, stavesmo363757);
smo386104.setContext(context);
smo386104.draw();
smo386105.setContext(context);
smo386105.draw();
const fmtsmo36170229 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo361702v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo361702v0ar = [];
const smo361679 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo361679'] = smo361679;
smo361679.setAttribute('id', 'smo361679');
smo361702v0ar.push(smo361679);
const smo361681 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
noteHash['smo361681'] = smo361681;
smo361681.setAttribute('id', 'smo361681');
smo361702v0ar.push(smo361681);
const smo361682 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo361682'] = smo361682;
smo361682.setAttribute('id', 'smo361682');
smo361702v0ar.push(smo361682);
const smo361683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
noteHash['smo361683'] = smo361683;
smo361683.setAttribute('id', 'smo361683');
smo361702v0ar.push(smo361683);
const smo361684 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
noteHash['smo361684'] = smo361684;
smo361684.setAttribute('id', 'smo361684');
smo361702v0ar.push(smo361684);
const smo361685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
noteHash['smo361685'] = smo361685;
smo361685.setAttribute('id', 'smo361685');
smo361702v0ar.push(smo361685);
const smo361686 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
noteHash['smo361686'] = smo361686;
smo361686.setAttribute('id', 'smo361686');
const smo3616860acc = new VF.Accidental('b');
smo361686.addModifier(smo3616860acc, 0);
const smo3616861acc = new VF.Accidental('b');
smo361686.addModifier(smo3616861acc, 1);
const smo3616862acc = new VF.Accidental('b');
smo361686.addModifier(smo3616862acc, 2);
smo361702v0ar.push(smo361686);
smo361702v0.addTickables(smo361702v0ar)
fmtsmo36170229.joinVoices([smo361702v0]);
const fmtsmo36377729 = new VF.Formatter();
//
// voices and notes for stave 1 29
const smo363777v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363777v0ar = [];
const smo363758 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
noteHash['smo363758'] = smo363758;
smo363758.setAttribute('id', 'smo363758');
smo363777v0ar.push(smo363758);
const smo363759 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo363759'] = smo363759;
smo363759.setAttribute('id', 'smo363759');
smo363777v0ar.push(smo363759);
const smo363760 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo363760'] = smo363760;
smo363760.setAttribute('id', 'smo363760');
smo363777v0ar.push(smo363760);
const smo363761 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo363761'] = smo363761;
smo363761.setAttribute('id', 'smo363761');
smo363777v0ar.push(smo363761);
smo363777v0.addTickables(smo363777v0ar)
fmtsmo36377729.joinVoices([smo363777v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386108 = smo361679.getStemDirection();
smo361679.setStemDirection(dirsmo386108);
smo361681.setStemDirection(dirsmo386108);
smo361682.setStemDirection(dirsmo386108);
const smo386108 = new VF.Beam([smo361679,smo361681,smo361682]);
const dirsmo386109 = smo361683.getStemDirection();
smo361683.setStemDirection(dirsmo386109);
smo361684.setStemDirection(dirsmo386109);
smo361685.setStemDirection(dirsmo386109);
smo361686.setStemDirection(dirsmo386109);
const smo386109 = new VF.Beam([smo361683,smo361684,smo361685,smo361686]);
const dirsmo386112 = smo363758.getStemDirection();
smo363758.setStemDirection(dirsmo386112);
smo363759.setStemDirection(dirsmo386112);
const smo386112 = new VF.Beam([smo363758,smo363759]);
const dirsmo386113 = smo363760.getStemDirection();
smo363760.setStemDirection(dirsmo386113);
smo363761.setStemDirection(dirsmo386113);
const smo386113 = new VF.Beam([smo363760,smo363761]);
 
// formatting measures in staff group smo365028
fmtsmo36170229.format([smo361702v0,smo363777v0], 281);
const stavesmo361702 = new VF.Stave(1548, 1828, 295);
stavesmo361702.setAttribute('id', 'stavesmo361702');
stavesmo361702.setBegBarType(VF.Barline.type.NONE);
stavesmo361702.setContext(context);
stavesmo361702.draw();
smo361702v0.draw(context, stavesmo361702);
smo386108.setContext(context);
smo386108.draw();
smo386109.setContext(context);
smo386109.draw();
const stavesmo363777 = new VF.Stave(1548, 1988, 295);
stavesmo363777.setAttribute('id', 'stavesmo363777');
stavesmo363777.setBegBarType(VF.Barline.type.NONE);
stavesmo363777.setContext(context);
stavesmo363777.draw();
smo363777v0.draw(context, stavesmo363777);
smo386112.setContext(context);
smo386112.draw();
smo386113.setContext(context);
smo386113.draw();
const rightsmo365028stavesmo3617021 = new VF.StaveConnector(stavesmo361702, stavesmo363777).setType(0);
rightsmo365028stavesmo3617021.setContext(context).draw();
const smo390068 = new VF.StaveHairpin({ first_note: smo361142, last_note: smo361142 });
smo390068.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo390068.setContext(context).setPosition(4).draw();
const smo390069 = new VF.StaveHairpin({ first_note: smo361187, last_note: smo361187 });
smo390069.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo390069.setContext(context).setPosition(4).draw();
const smo390070 = new VF.StaveHairpin({ first_note: smo361230, last_note: smo361230 });
smo390070.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo390070.setContext(context).setPosition(4).draw();
const smo390073 = new VF.StaveHairpin({ first_note: smo361318, last_note: smo361318 });
smo390073.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo390073.setContext(context).setPosition(4).draw();
const smo390074 = new VF.StaveHairpin({ first_note: smo361454, last_note: smo361454 });
smo390074.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo390074.setContext(context).setPosition(4).draw();
const smo390075 = new VF.StaveTie({ first_note: smo361053, last_note: smo361054, first_indices: [0], last_indices: [0]});
smo390075.setContext(context).draw();
const smo390076 = new VF.StaveTie({ first_note: smo361076, last_note: smo361077, first_indices: [0], last_indices: [0]});
smo390076.setContext(context).draw();
const smo390077 = new VF.StaveTie({ first_note: smo361123, last_note: smo361140, first_indices: [0], last_indices: [0]});
smo390077.setContext(context).draw();
const smo390078 = new VF.StaveTie({ first_note: smo361140, last_note: smo361141, first_indices: [0], last_indices: [0]});
smo390078.setContext(context).draw();
const smo390079 = new VF.StaveTie({ first_note: smo361165, last_note: smo361166, first_indices: [0,1,2], last_indices: [0,1,2]});
smo390079.setContext(context).draw();
const smo390080 = new VF.StaveTie({ first_note: smo361185, last_note: smo361186, first_indices: [0,1,2], last_indices: [0,1,2]});
smo390080.setContext(context).draw();
const smo390081 = new VF.StaveTie({ first_note: smo361211, last_note: smo361228, first_indices: [0], last_indices: [0]});
smo390081.setContext(context).draw();
const smo390082 = new VF.StaveTie({ first_note: smo361228, last_note: smo361229, first_indices: [0], last_indices: [0]});
smo390082.setContext(context).draw();
const smo390083 = new VF.StaveTie({ first_note: smo361252, last_note: smo361253, first_indices: [0,1], last_indices: [0,1]});
smo390083.setContext(context).draw();
const smo390084 = new VF.StaveTie({ first_note: smo361273, last_note: smo361274, first_indices: [0,1,2], last_indices: [0,1,2]});
smo390084.setContext(context).draw();
const smo390085 = new VF.StaveTie({ first_note: smo361299, last_note: smo361316, first_indices: [0], last_indices: [0]});
smo390085.setContext(context).draw();
const smo390086 = new VF.StaveTie({ first_note: smo361316, last_note: smo361317, first_indices: [0], last_indices: [0]});
smo390086.setContext(context).draw();
const smo390087 = new VF.StaveTie({ first_note: smo361341, last_note: smo361342, first_indices: [0,1,2], last_indices: [0,1,2]});
smo390087.setContext(context).draw();
const smo390088 = new VF.StaveTie({ first_note: smo361361, last_note: smo361362, first_indices: [0,1,2], last_indices: [0,1,2]});
smo390088.setContext(context).draw();
const smo390089 = new VF.StaveTie({ first_note: smo361384, last_note: smo361385, first_indices: [0,1], last_indices: [0,1]});
smo390089.setContext(context).draw();
const smo390090 = new VF.StaveTie({ first_note: smo361408, last_note: smo361409, first_indices: [0,1], last_indices: [0,1]});
smo390090.setContext(context).draw();
const smo390091 = new VF.StaveTie({ first_note: smo361432, last_note: smo361433, first_indices: [0,1,2], last_indices: [0,1,2]});
smo390091.setContext(context).draw();
const smo390092 = new VF.StaveTie({ first_note: smo361452, last_note: smo361453, first_indices: [0,1,2], last_indices: [0,1,2]});
smo390092.setContext(context).draw();
const smo390093 = new VF.StaveTie({ first_note: smo361473, last_note: smo361474, first_indices: [0,1,2], last_indices: [0,1,2]});
smo390093.setContext(context).draw();
const smo390094 = new VF.StaveTie({ first_note: smo361497, last_note: smo361498, first_indices: [0,1,2], last_indices: [0,1,2]});
smo390094.setContext(context).draw();
const smo390095 = new VF.StaveTie({ first_note: smo361520, last_note: smo361521, first_indices: [0,1,2], last_indices: [0,1,2]});
smo390095.setContext(context).draw();
const smo390096 = new VF.StaveTie({ first_note: smo361591, last_note: smo361592, first_indices: [0,1,2], last_indices: [0,1,2]});
smo390096.setContext(context).draw();
const smo390097 = new VF.StaveTie({ first_note: smo361614, last_note: smo361615, first_indices: [0,1,2], last_indices: [0,1,2]});
smo390097.setContext(context).draw();
const smo390098 = new VF.StaveTie({ first_note: smo361637, last_note: smo361638, first_indices: [0,1,2], last_indices: [0,1,2]});
smo390098.setContext(context).draw();
const smo390099 = new VF.StaveTie({ first_note: smo361658, last_note: smo361659, first_indices: [0,1], last_indices: [0,1]});
smo390099.setContext(context).draw();
const smo390100 = new VF.StaveTie({ first_note: smo361682, last_note: smo361683, first_indices: [0,1,2], last_indices: [0,1,2]});
smo390100.setContext(context).draw();
const smo390101 = new VF.StaveTie({ first_note: smo363192, last_note: smo363193, first_indices: [0], last_indices: [0]});
smo390101.setContext(context).draw();
const smo390102 = new VF.StaveTie({ first_note: smo363215, last_note: smo363216, first_indices: [0], last_indices: [0]});
smo390102.setContext(context).draw();
const smo361457smo361472 = new VF.Volta(5, '1', 368, 20);
smo361457smo361472.setContext(context).draw(stavesmo361472, -1 * 0);
const smo361478smo361494 = new VF.Volta(5, '2', 663, 20);
smo361478smo361494.setContext(context).draw(stavesmo361494, -1 * 0);
}
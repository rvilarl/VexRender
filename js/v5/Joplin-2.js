// @@ The Entertainer p 3/3  by Scott Joplin
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
const fmtsmo10170460 = new VF.Formatter();
//
// voices and notes for stave 0 60
const smo101704v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101704v0ar = [];
const smo101683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo101683.setAttribute('id', 'smo101683');
const smo1016830acc = new VF.Accidental('n');
smo101683.addModifier(smo1016830acc, 0);
smo101704v0ar.push(smo101683);
const smo101684 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["ab/5/n"]}'))
smo101684.setAttribute('id', 'smo101684');
const smo1016840acc = new VF.Accidental('b');
smo101684.addModifier(smo1016840acc, 0);
smo101704v0ar.push(smo101684);
const smo101685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo101685.setAttribute('id', 'smo101685');
const smo1016850acc = new VF.Accidental('n');
smo101685.addModifier(smo1016850acc, 0);
smo101704v0ar.push(smo101685);
const smo101686 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/6/n"]}'))
smo101686.setAttribute('id', 'smo101686');
const smo1016860acc = new VF.Accidental('n');
smo101686.addModifier(smo1016860acc, 0);
smo101704v0ar.push(smo101686);
const smo101687 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/6/n"]}'))
smo101687.setAttribute('id', 'smo101687');
smo101704v0ar.push(smo101687);
const smo101688 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/6/n"]}'))
smo101688.setAttribute('id', 'smo101688');
smo101704v0ar.push(smo101688);
const smo101689 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo101689.setAttribute('id', 'smo101689');
smo101704v0ar.push(smo101689);
const smo101690 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/6/n"]}'))
smo101690.setAttribute('id', 'smo101690');
smo101704v0ar.push(smo101690);
smo101704v0.addTickables(smo101704v0ar)
fmtsmo10170460.joinVoices([smo101704v0]);
const fmtsmo10445060 = new VF.Formatter();
//
// voices and notes for stave 1 60
const smo104450v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104450v0ar = [];
const smo104433 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo104433.setAttribute('id', 'smo104433');
const smo1044330acc = new VF.Accidental('n');
smo104433.addModifier(smo1044330acc, 0);
smo104450v0ar.push(smo104433);
const smo104434 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n","dn/4/n","en/4/n"]}'))
smo104434.setAttribute('id', 'smo104434');
const smo1044340acc = new VF.Accidental('n');
smo104434.addModifier(smo1044340acc, 0);
const smo1044342acc = new VF.Accidental('n');
smo104434.addModifier(smo1044342acc, 2);
smo104450v0ar.push(smo104434);
const smo104435 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["ab/3/n"]}'))
smo104435.setAttribute('id', 'smo104435');
const smo1044350acc = new VF.Accidental('b');
smo104435.addModifier(smo1044350acc, 0);
smo104450v0ar.push(smo104435);
const smo104436 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n","dn/4/n","en/4/n"]}'))
smo104436.setAttribute('id', 'smo104436');
smo104450v0ar.push(smo104436);
smo104450v0.addTickables(smo104450v0ar)
fmtsmo10445060.joinVoices([smo104450v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105898 = smo101683.getStemDirection();
smo101683.setStemDirection(dirsmo105898);
smo101684.setStemDirection(dirsmo105898);
smo101685.setStemDirection(dirsmo105898);
smo101686.setStemDirection(dirsmo105898);
const smo105898 = new VF.Beam([smo101683,smo101684,smo101685,smo101686]);
const dirsmo105899 = smo101687.getStemDirection();
smo101687.setStemDirection(dirsmo105899);
smo101688.setStemDirection(dirsmo105899);
smo101689.setStemDirection(dirsmo105899);
smo101690.setStemDirection(dirsmo105899);
const smo105899 = new VF.Beam([smo101687,smo101688,smo101689,smo101690]);
const dirsmo105902 = smo104433.getStemDirection();
smo104433.setStemDirection(dirsmo105902);
smo104434.setStemDirection(dirsmo105902);
const smo105902 = new VF.Beam([smo104433,smo104434]);
const dirsmo105903 = smo104435.getStemDirection();
smo104435.setStemDirection(dirsmo105903);
smo104436.setStemDirection(dirsmo105903);
const smo105903 = new VF.Beam([smo104435,smo104436]);
 
// formatting measures in staff group smo99711
fmtsmo10170460.format([smo101704v0,smo104450v0], 242);
const stavesmo101704 = new VF.Stave(73, 396, 328);
stavesmo101704.setAttribute('id', 'stavesmo101704');
stavesmo101704.setBegBarType(1);
stavesmo101704.addClef('treble');
const keysmo101704 = new VF.KeySignature('Bb');
keysmo101704.addToStave(stavesmo101704);
stavesmo101704.setContext(context);
stavesmo101704.draw();
smo101704v0.draw(context, stavesmo101704);
smo105898.setContext(context);
smo105898.draw();
smo105899.setContext(context);
smo105899.draw();
const stavesmo104450 = new VF.Stave(73, 556, 328);
stavesmo104450.setAttribute('id', 'stavesmo104450');
stavesmo104450.setBegBarType(1);
stavesmo104450.addClef('bass');
const keysmo104450 = new VF.KeySignature('Bb');
keysmo104450.addToStave(stavesmo104450);
stavesmo104450.setContext(context);
stavesmo104450.draw();
smo104450v0.draw(context, stavesmo104450);
smo105902.setContext(context);
smo105902.draw();
smo105903.setContext(context);
smo105903.draw();
const leftsmo99711stavesmo1017041 = new VF.StaveConnector(stavesmo101704, stavesmo104450).setType(3);
leftsmo99711stavesmo1017041.setContext(context).draw();
const fmtsmo10172061 = new VF.Formatter();
//
// voices and notes for stave 0 61
const smo101720v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101720v0ar = [];
const smo101705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo101705.setAttribute('id', 'smo101705');
smo101720v0ar.push(smo101705);
const smo101706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/5/n"]}'))
smo101706.setAttribute('id', 'smo101706');
smo101720v0ar.push(smo101706);
smo101720v0.addTickables(smo101720v0ar)
fmtsmo10172061.joinVoices([smo101720v0]);
const fmtsmo10446761 = new VF.Formatter();
//
// voices and notes for stave 1 61
const smo104467v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104467v0ar = [];
const smo104451 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo104451.setAttribute('id', 'smo104451');
const smo1044512acc = new VF.Accidental('n');
smo104451.addModifier(smo1044512acc, 2);
smo104467v0ar.push(smo104451);
const smo104452 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo104452.setAttribute('id', 'smo104452');
smo104467v0ar.push(smo104452);
const smo104453 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo104453.setAttribute('id', 'smo104453');
smo104467v0ar.push(smo104453);
smo104467v0.addTickables(smo104467v0ar)
fmtsmo10446761.joinVoices([smo104467v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105908 = smo104452.getStemDirection();
smo104452.setStemDirection(dirsmo105908);
smo104453.setStemDirection(dirsmo105908);
const smo105908 = new VF.Beam([smo104452,smo104453]);
 
// formatting measures in staff group smo99711
fmtsmo10172061.format([smo101720v0,smo104467v0], 274);
const stavesmo101720 = new VF.Stave(401, 396, 288);
stavesmo101720.setAttribute('id', 'stavesmo101720');
stavesmo101720.setBegBarType(VF.Barline.type.NONE);
stavesmo101720.setContext(context);
stavesmo101720.draw();
smo101720v0.draw(context, stavesmo101720);
const stavesmo104467 = new VF.Stave(401, 556, 288);
stavesmo104467.setAttribute('id', 'stavesmo104467');
stavesmo104467.setBegBarType(VF.Barline.type.NONE);
stavesmo104467.setContext(context);
stavesmo104467.draw();
smo104467v0.draw(context, stavesmo104467);
smo105908.setContext(context);
smo105908.draw();
const fmtsmo10173962 = new VF.Formatter();
//
// voices and notes for stave 0 62
const smo101739v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101739v0ar = [];
const smo101721 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n","an/5/n"]}'))
smo101721.setAttribute('id', 'smo101721');
smo101739v0ar.push(smo101721);
const smo101722 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["ab/5/n"]}'))
smo101722.setAttribute('id', 'smo101722');
const smo1017220acc = new VF.Accidental('b');
smo101722.addModifier(smo1017220acc, 0);
smo101739v0ar.push(smo101722);
const smo101723 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n","an/5/n"]}'))
smo101723.setAttribute('id', 'smo101723');
const smo1017231acc = new VF.Accidental('n');
smo101723.addModifier(smo1017231acc, 1);
smo101739v0ar.push(smo101723);
const smo101724 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n","an/5/n"]}'))
smo101724.setAttribute('id', 'smo101724');
smo101739v0ar.push(smo101724);
const smo101725 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n","an/5/n","cn/6/n"]}'))
smo101725.setAttribute('id', 'smo101725');
smo101739v0ar.push(smo101725);
smo101739v0.addTickables(smo101739v0ar)
fmtsmo10173962.joinVoices([smo101739v0]);
const fmtsmo10448562 = new VF.Formatter();
//
// voices and notes for stave 1 62
const smo104485v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104485v0ar = [];
const smo104468 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo104468.setAttribute('id', 'smo104468');
smo104485v0ar.push(smo104468);
const smo104469 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo104469.setAttribute('id', 'smo104469');
smo104485v0ar.push(smo104469);
const smo104470 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo104470.setAttribute('id', 'smo104470');
smo104485v0ar.push(smo104470);
const smo104471 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo104471.setAttribute('id', 'smo104471');
smo104485v0ar.push(smo104471);
smo104485v0.addTickables(smo104485v0ar)
fmtsmo10448562.joinVoices([smo104485v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105911 = smo101721.getStemDirection();
smo101721.setStemDirection(dirsmo105911);
smo101722.setStemDirection(dirsmo105911);
smo101723.setStemDirection(dirsmo105911);
const smo105911 = new VF.Beam([smo101721,smo101722,smo101723]);
const dirsmo105912 = smo101724.getStemDirection();
smo101724.setStemDirection(dirsmo105912);
smo101725.setStemDirection(dirsmo105912);
const smo105912 = new VF.Beam([smo101724,smo101725]);
const dirsmo105915 = smo104468.getStemDirection();
smo104468.setStemDirection(dirsmo105915);
smo104469.setStemDirection(dirsmo105915);
const smo105915 = new VF.Beam([smo104468,smo104469]);
const dirsmo105916 = smo104470.getStemDirection();
smo104470.setStemDirection(dirsmo105916);
smo104471.setStemDirection(dirsmo105916);
const smo105916 = new VF.Beam([smo104470,smo104471]);
 
// formatting measures in staff group smo99711
fmtsmo10173962.format([smo101739v0,smo104485v0], 274);
const stavesmo101739 = new VF.Stave(689, 396, 288);
stavesmo101739.setAttribute('id', 'stavesmo101739');
stavesmo101739.setBegBarType(VF.Barline.type.NONE);
stavesmo101739.setContext(context);
stavesmo101739.draw();
smo101739v0.draw(context, stavesmo101739);
smo105911.setContext(context);
smo105911.draw();
smo105912.setContext(context);
smo105912.draw();
const stavesmo104485 = new VF.Stave(689, 556, 288);
stavesmo104485.setAttribute('id', 'stavesmo104485');
stavesmo104485.setBegBarType(VF.Barline.type.NONE);
stavesmo104485.setContext(context);
stavesmo104485.draw();
smo104485v0.draw(context, stavesmo104485);
smo105915.setContext(context);
smo105915.draw();
smo105916.setContext(context);
smo105916.draw();
const fmtsmo10176063 = new VF.Formatter();
//
// voices and notes for stave 0 63
const smo101760v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101760v0ar = [];
const smo101740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n","bb/5/n","dn/6/n"]}'))
smo101740.setAttribute('id', 'smo101740');
smo101760v0ar.push(smo101740);
smo101760v0.addTickables(smo101760v0ar)
fmtsmo10176063.joinVoices([smo101760v0]);
const smo101760v1 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101760v1ar = [];
const smo101741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo101741.setAttribute('id', 'smo101741');
smo101741.setStyle({ fillStyle: "#115511" });
smo101760v1ar.push(smo101741);
const smo101742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo101742.setAttribute('id', 'smo101742');
smo101742.setStyle({ fillStyle: "#115511" });
smo101760v1ar.push(smo101742);
const smo101743 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo101743.setAttribute('id', 'smo101743');
smo101743.setStyle({ fillStyle: "#115511" });
smo101760v1ar.push(smo101743);
const smo101744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo101744.setAttribute('id', 'smo101744');
smo101744.setStyle({ fillStyle: "#115511" });
smo101760v1ar.push(smo101744);
const smo101745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101745.setAttribute('id', 'smo101745');
smo101745.setStyle({ fillStyle: "#115511" });
smo101760v1ar.push(smo101745);
const smo101746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo101746.setAttribute('id', 'smo101746');
smo101746.setStyle({ fillStyle: "#115511" });
smo101760v1ar.push(smo101746);
smo101760v1.addTickables(smo101760v1ar)
fmtsmo10176063.joinVoices([smo101760v1]);
const fmtsmo10450363 = new VF.Formatter();
//
// voices and notes for stave 1 63
const smo104503v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104503v0ar = [];
const smo104486 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n"]}'))
smo104486.setAttribute('id', 'smo104486');
smo104503v0ar.push(smo104486);
const smo104487 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","dn/4/n","fn/4/n"]}'))
smo104487.setAttribute('id', 'smo104487');
smo104503v0ar.push(smo104487);
const smo104488 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo104488.setAttribute('id', 'smo104488');
smo104503v0ar.push(smo104488);
const smo104489 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","dn/4/n","fn/4/n"]}'))
smo104489.setAttribute('id', 'smo104489');
smo104503v0ar.push(smo104489);
smo104503v0.addTickables(smo104503v0ar)
fmtsmo10450363.joinVoices([smo104503v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105919 = smo101742.getStemDirection();
smo101742.setStemDirection(dirsmo105919);
smo101743.setStemDirection(dirsmo105919);
const smo105919 = new VF.Beam([smo101742,smo101743]);
const dirsmo105920 = smo101744.getStemDirection();
smo101744.setStemDirection(dirsmo105920);
smo101745.setStemDirection(dirsmo105920);
smo101746.setStemDirection(dirsmo105920);
const smo105920 = new VF.Beam([smo101744,smo101745,smo101746]);
const dirsmo105923 = smo104486.getStemDirection();
smo104486.setStemDirection(dirsmo105923);
smo104487.setStemDirection(dirsmo105923);
const smo105923 = new VF.Beam([smo104486,smo104487]);
const dirsmo105924 = smo104488.getStemDirection();
smo104488.setStemDirection(dirsmo105924);
smo104489.setStemDirection(dirsmo105924);
const smo105924 = new VF.Beam([smo104488,smo104489]);
 
// formatting measures in staff group smo99711
fmtsmo10176063.format([smo101760v0,smo101760v1,smo104503v0], 274);
const stavesmo101760 = new VF.Stave(977, 396, 288);
stavesmo101760.setAttribute('id', 'stavesmo101760');
stavesmo101760.setBegBarType(VF.Barline.type.NONE);
stavesmo101760.setContext(context);
stavesmo101760.draw();
smo101760v0.draw(context, stavesmo101760);
smo101760v1.draw(context, stavesmo101760);
smo105919.setContext(context);
smo105919.draw();
smo105920.setContext(context);
smo105920.draw();
const stavesmo104503 = new VF.Stave(977, 556, 288);
stavesmo104503.setAttribute('id', 'stavesmo104503');
stavesmo104503.setBegBarType(VF.Barline.type.NONE);
stavesmo104503.setContext(context);
stavesmo104503.draw();
smo104503v0.draw(context, stavesmo104503);
smo105923.setContext(context);
smo105923.draw();
smo105924.setContext(context);
smo105924.draw();
const fmtsmo10177964 = new VF.Formatter();
//
// voices and notes for stave 0 64
const smo101779v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101779v0ar = [];
const smo101761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n"]}'))
smo101761.setAttribute('id', 'smo101761');
smo101779v0ar.push(smo101761);
const smo101762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo101762.setAttribute('id', 'smo101762');
const smo1017620acc = new VF.Accidental('n');
smo101762.addModifier(smo1017620acc, 0);
smo101779v0ar.push(smo101762);
const smo101763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n"]}'))
smo101763.setAttribute('id', 'smo101763');
smo101779v0ar.push(smo101763);
const smo101764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n"]}'))
smo101764.setAttribute('id', 'smo101764');
smo101779v0ar.push(smo101764);
const smo101765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","an/5/n"]}'))
smo101765.setAttribute('id', 'smo101765');
smo101779v0ar.push(smo101765);
smo101779v0.addTickables(smo101779v0ar)
fmtsmo10177964.joinVoices([smo101779v0]);
const fmtsmo10452164 = new VF.Formatter();
//
// voices and notes for stave 1 64
const smo104521v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104521v0ar = [];
const smo104504 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n"]}'))
smo104504.setAttribute('id', 'smo104504');
smo104521v0ar.push(smo104504);
const smo104505 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo104505.setAttribute('id', 'smo104505');
smo104521v0ar.push(smo104505);
const smo104506 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo104506.setAttribute('id', 'smo104506');
smo104521v0ar.push(smo104506);
const smo104507 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo104507.setAttribute('id', 'smo104507');
smo104521v0ar.push(smo104507);
smo104521v0.addTickables(smo104521v0ar)
fmtsmo10452164.joinVoices([smo104521v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105927 = smo101761.getStemDirection();
smo101761.setStemDirection(dirsmo105927);
smo101762.setStemDirection(dirsmo105927);
smo101763.setStemDirection(dirsmo105927);
const smo105927 = new VF.Beam([smo101761,smo101762,smo101763]);
const dirsmo105928 = smo101764.getStemDirection();
smo101764.setStemDirection(dirsmo105928);
smo101765.setStemDirection(dirsmo105928);
const smo105928 = new VF.Beam([smo101764,smo101765]);
const dirsmo105931 = smo104504.getStemDirection();
smo104504.setStemDirection(dirsmo105931);
smo104505.setStemDirection(dirsmo105931);
const smo105931 = new VF.Beam([smo104504,smo104505]);
const dirsmo105932 = smo104506.getStemDirection();
smo104506.setStemDirection(dirsmo105932);
smo104507.setStemDirection(dirsmo105932);
const smo105932 = new VF.Beam([smo104506,smo104507]);
 
// formatting measures in staff group smo99711
fmtsmo10177964.format([smo101779v0,smo104521v0], 274);
const stavesmo101779 = new VF.Stave(1265, 396, 288);
stavesmo101779.setAttribute('id', 'stavesmo101779');
stavesmo101779.setBegBarType(VF.Barline.type.NONE);
stavesmo101779.setContext(context);
stavesmo101779.draw();
smo101779v0.draw(context, stavesmo101779);
smo105927.setContext(context);
smo105927.draw();
smo105928.setContext(context);
smo105928.draw();
const stavesmo104521 = new VF.Stave(1265, 556, 288);
stavesmo104521.setAttribute('id', 'stavesmo104521');
stavesmo104521.setBegBarType(VF.Barline.type.NONE);
stavesmo104521.setContext(context);
stavesmo104521.draw();
smo104521v0.draw(context, stavesmo104521);
smo105931.setContext(context);
smo105931.draw();
smo105932.setContext(context);
smo105932.draw();
const fmtsmo10180265 = new VF.Formatter();
//
// voices and notes for stave 0 65
const smo101802v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101802v0ar = [];
const smo101780 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","gn/5/n","bb/5/n"]}'))
smo101780.setAttribute('id', 'smo101780');
smo101802v0ar.push(smo101780);
const smo101781 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n","gn/5/n","bb/5/n"]}'))
smo101781.setAttribute('id', 'smo101781');
smo101781.addModifier(new VF.Dot(), 0);
smo101781.addModifier(new VF.Dot(), 1);
smo101781.addModifier(new VF.Dot(), 2);
smo101802v0ar.push(smo101781);
const smo101782 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo101782.setAttribute('id', 'smo101782');
smo101802v0ar.push(smo101782);
smo101802v0.addTickables(smo101802v0ar)
fmtsmo10180265.joinVoices([smo101802v0]);
const smo101802v1 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101802v1ar = [];
const smo101783 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo101783.setAttribute('id', 'smo101783');
smo101783.setStyle({ fillStyle: "#115511" });
smo101802v1ar.push(smo101783);
const smo101784 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo101784.setAttribute('id', 'smo101784');
smo101784.setStyle({ fillStyle: "#115511" });
smo101802v1ar.push(smo101784);
const smo101785 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n"]}'))
smo101785.setAttribute('id', 'smo101785');
smo101785.setStyle({ fillStyle: "#115511" });
const smo1017850acc = new VF.Accidental('b');
smo101785.addModifier(smo1017850acc, 0);
smo101802v1ar.push(smo101785);
const smo101786 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo101786.setAttribute('id', 'smo101786');
smo101786.setStyle({ fillStyle: "#115511" });
const smo1017860acc = new VF.Accidental('n');
smo101786.addModifier(smo1017860acc, 0);
smo101802v1ar.push(smo101786);
const smo101787 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo101787.setAttribute('id', 'smo101787');
smo101787.setStyle({ fillStyle: "#115511" });
smo101802v1ar.push(smo101787);
const smo101788 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo101788.setAttribute('id', 'smo101788');
smo101788.setStyle({ fillStyle: "#115511" });
smo101802v1ar.push(smo101788);
smo101802v1.addTickables(smo101802v1ar)
fmtsmo10180265.joinVoices([smo101802v1]);
const fmtsmo10453965 = new VF.Formatter();
//
// voices and notes for stave 1 65
const smo104539v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104539v0ar = [];
const smo104522 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo104522.setAttribute('id', 'smo104522');
smo104539v0ar.push(smo104522);
const smo104523 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo104523.setAttribute('id', 'smo104523');
smo104539v0ar.push(smo104523);
const smo104524 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo104524.setAttribute('id', 'smo104524');
smo104539v0ar.push(smo104524);
const smo104525 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo104525.setAttribute('id', 'smo104525');
smo104539v0ar.push(smo104525);
smo104539v0.addTickables(smo104539v0ar)
fmtsmo10453965.joinVoices([smo104539v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105935 = smo101781.getStemDirection();
smo101781.setStemDirection(dirsmo105935);
smo101782.setStemDirection(dirsmo105935);
const smo105935 = new VF.Beam([smo101781,smo101782]);
const dirsmo105936 = smo101784.getStemDirection();
smo101784.setStemDirection(dirsmo105936);
smo101785.setStemDirection(dirsmo105936);
const smo105936 = new VF.Beam([smo101784,smo101785]);
const dirsmo105937 = smo101786.getStemDirection();
smo101786.setStemDirection(dirsmo105937);
smo101787.setStemDirection(dirsmo105937);
smo101788.setStemDirection(dirsmo105937);
const smo105937 = new VF.Beam([smo101786,smo101787,smo101788]);
const dirsmo105940 = smo104522.getStemDirection();
smo104522.setStemDirection(dirsmo105940);
smo104523.setStemDirection(dirsmo105940);
const smo105940 = new VF.Beam([smo104522,smo104523]);
const dirsmo105941 = smo104524.getStemDirection();
smo104524.setStemDirection(dirsmo105941);
smo104525.setStemDirection(dirsmo105941);
const smo105941 = new VF.Beam([smo104524,smo104525]);
 
// formatting measures in staff group smo99711
fmtsmo10180265.format([smo101802v0,smo101802v1,smo104539v0], 274);
const stavesmo101802 = new VF.Stave(1553, 396, 288);
stavesmo101802.setAttribute('id', 'stavesmo101802');
stavesmo101802.setBegBarType(VF.Barline.type.NONE);
stavesmo101802.setContext(context);
stavesmo101802.draw();
smo101802v0.draw(context, stavesmo101802);
smo101802v1.draw(context, stavesmo101802);
smo105935.setContext(context);
smo105935.draw();
smo105936.setContext(context);
smo105936.draw();
smo105937.setContext(context);
smo105937.draw();
const stavesmo104539 = new VF.Stave(1553, 556, 288);
stavesmo104539.setAttribute('id', 'stavesmo104539');
stavesmo104539.setBegBarType(VF.Barline.type.NONE);
stavesmo104539.setContext(context);
stavesmo104539.draw();
smo104539v0.draw(context, stavesmo104539);
smo105940.setContext(context);
smo105940.draw();
smo105941.setContext(context);
smo105941.draw();
const rightsmo99711stavesmo1018021 = new VF.StaveConnector(stavesmo101802, stavesmo104539).setType(0);
rightsmo99711stavesmo1018021.setContext(context).draw();
const fmtsmo10182266 = new VF.Formatter();
//
// voices and notes for stave 0 66
const smo101822v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101822v0ar = [];
const smo101803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo101803.setAttribute('id', 'smo101803');
smo101822v0ar.push(smo101803);
const smo101804 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo101804.setAttribute('id', 'smo101804');
smo101822v0ar.push(smo101804);
const smo101805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo101805.setAttribute('id', 'smo101805');
smo101822v0ar.push(smo101805);
const smo101806 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo101806.setAttribute('id', 'smo101806');
smo101822v0ar.push(smo101806);
const smo101807 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo101807.setAttribute('id', 'smo101807');
smo101822v0ar.push(smo101807);
const smo101808 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo101808.setAttribute('id', 'smo101808');
smo101822v0ar.push(smo101808);
smo101822v0.addTickables(smo101822v0ar)
fmtsmo10182266.joinVoices([smo101822v0]);
const fmtsmo10455766 = new VF.Formatter();
//
// voices and notes for stave 1 66
const smo104557v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104557v0ar = [];
const smo104540 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo104540.setAttribute('id', 'smo104540');
smo104557v0ar.push(smo104540);
const smo104541 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo104541.setAttribute('id', 'smo104541');
smo104557v0ar.push(smo104541);
const smo104542 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo104542.setAttribute('id', 'smo104542');
smo104557v0ar.push(smo104542);
const smo104543 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["ab/2/n","ab/3/n"]}'))
smo104543.setAttribute('id', 'smo104543');
const smo1045430acc = new VF.Accidental('b');
smo104543.addModifier(smo1045430acc, 0);
const smo1045431acc = new VF.Accidental('b');
smo104543.addModifier(smo1045431acc, 1);
smo104557v0ar.push(smo104543);
smo104557v0.addTickables(smo104557v0ar)
fmtsmo10455766.joinVoices([smo104557v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105953 = smo101803.getStemDirection();
smo101803.setStemDirection(dirsmo105953);
smo101804.setStemDirection(dirsmo105953);
smo101805.setStemDirection(dirsmo105953);
const smo105953 = new VF.Beam([smo101803,smo101804,smo101805]);
const dirsmo105954 = smo101806.getStemDirection();
smo101806.setStemDirection(dirsmo105954);
smo101807.setStemDirection(dirsmo105954);
smo101808.setStemDirection(dirsmo105954);
const smo105954 = new VF.Beam([smo101806,smo101807,smo101808]);
const dirsmo105957 = smo104540.getStemDirection();
smo104540.setStemDirection(dirsmo105957);
smo104541.setStemDirection(dirsmo105957);
const smo105957 = new VF.Beam([smo104540,smo104541]);
const dirsmo105958 = smo104542.getStemDirection();
smo104542.setStemDirection(dirsmo105958);
smo104543.setStemDirection(dirsmo105958);
const smo105958 = new VF.Beam([smo104542,smo104543]);
 
// formatting measures in staff group smo99711
fmtsmo10182266.format([smo101822v0,smo104557v0], 209);
const stavesmo101822 = new VF.Stave(73, 763, 295);
stavesmo101822.setAttribute('id', 'stavesmo101822');
stavesmo101822.setBegBarType(1);
stavesmo101822.addClef('treble');
const keysmo101822 = new VF.KeySignature('Bb');
keysmo101822.addToStave(stavesmo101822);
stavesmo101822.setContext(context);
stavesmo101822.draw();
smo101822v0.draw(context, stavesmo101822);
smo105953.setContext(context);
smo105953.draw();
smo105954.setContext(context);
smo105954.draw();
const stavesmo104557 = new VF.Stave(73, 934, 295);
stavesmo104557.setAttribute('id', 'stavesmo104557');
stavesmo104557.setBegBarType(1);
stavesmo104557.addClef('bass');
const keysmo104557 = new VF.KeySignature('Bb');
keysmo104557.addToStave(stavesmo104557);
stavesmo104557.setContext(context);
stavesmo104557.draw();
smo104557v0.draw(context, stavesmo104557);
smo105957.setContext(context);
smo105957.draw();
smo105958.setContext(context);
smo105958.draw();
const leftsmo99711stavesmo1018221 = new VF.StaveConnector(stavesmo101822, stavesmo104557).setType(3);
leftsmo99711stavesmo1018221.setContext(context).draw();
const fmtsmo10184067 = new VF.Formatter();
//
// voices and notes for stave 0 67
const smo101840v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101840v0ar = [];
const smo101823 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101823.setAttribute('id', 'smo101823');
smo101840v0ar.push(smo101823);
const smo101824 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["ab/4/n","bn/4/n","fn/5/n"]}'))
smo101824.setAttribute('id', 'smo101824');
const smo1018240acc = new VF.Accidental('b');
smo101824.addModifier(smo1018240acc, 0);
const smo1018241acc = new VF.Accidental('n');
smo101824.addModifier(smo1018241acc, 1);
smo101824.addModifier(new VF.Dot(), 0);
smo101824.addModifier(new VF.Dot(), 1);
smo101824.addModifier(new VF.Dot(), 2);
smo101840v0ar.push(smo101824);
const smo101826 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo101826.setAttribute('id', 'smo101826');
smo101840v0ar.push(smo101826);
smo101840v0.addTickables(smo101840v0ar)
fmtsmo10184067.joinVoices([smo101840v0]);
const fmtsmo10457667 = new VF.Formatter();
//
// voices and notes for stave 1 67
const smo104576v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104576v0ar = [];
const smo104558 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/2/n","an/3/n"]}'))
smo104558.setAttribute('id', 'smo104558');
smo104576v0ar.push(smo104558);
const smo104559 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo104559.setAttribute('id', 'smo104559');
smo104576v0ar.push(smo104559);
const smo104560 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/2/n","en/3/n"]}'))
smo104560.setAttribute('id', 'smo104560');
const smo1045600acc = new VF.Accidental('n');
smo104560.addModifier(smo1045600acc, 0);
const smo1045601acc = new VF.Accidental('n');
smo104560.addModifier(smo1045601acc, 1);
smo104576v0ar.push(smo104560);
const smo104561 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo104561.setAttribute('id', 'smo104561');
smo104576v0ar.push(smo104561);
const smo104562 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["db/2/n","db/3/n"]}'))
smo104562.setAttribute('id', 'smo104562');
const smo1045620acc = new VF.Accidental('b');
smo104562.addModifier(smo1045620acc, 0);
const smo1045621acc = new VF.Accidental('b');
smo104562.addModifier(smo1045621acc, 1);
smo104576v0ar.push(smo104562);
smo104576v0.addTickables(smo104576v0ar)
fmtsmo10457667.joinVoices([smo104576v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105961 = smo101824.getStemDirection();
smo101824.setStemDirection(dirsmo105961);
smo101826.setStemDirection(dirsmo105961);
const smo105961 = new VF.Beam([smo101824,smo101826]);
const dirsmo105964 = smo104558.getStemDirection();
smo104558.setStemDirection(dirsmo105964);
smo104559.setStemDirection(dirsmo105964);
smo104560.setStemDirection(dirsmo105964);
smo104561.setStemDirection(dirsmo105964);
const smo105964 = new VF.Beam([smo104558,smo104559,smo104560,smo104561]);
 
// formatting measures in staff group smo99711
fmtsmo10184067.format([smo101840v0,smo104576v0], 281);
const stavesmo101840 = new VF.Stave(368, 763, 295);
stavesmo101840.setAttribute('id', 'stavesmo101840');
stavesmo101840.setBegBarType(VF.Barline.type.NONE);
stavesmo101840.setContext(context);
stavesmo101840.draw();
smo101840v0.draw(context, stavesmo101840);
smo105961.setContext(context);
smo105961.draw();
const stavesmo104576 = new VF.Stave(368, 934, 295);
stavesmo104576.setAttribute('id', 'stavesmo104576');
stavesmo104576.setBegBarType(VF.Barline.type.NONE);
stavesmo104576.setContext(context);
stavesmo104576.draw();
smo104576v0.draw(context, stavesmo104576);
smo105964.setContext(context);
smo105964.draw();
const fmtsmo10186268 = new VF.Formatter();
//
// voices and notes for stave 0 68
const smo101862v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101862v0ar = [];
const smo101841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","cn/5/n","an/5/n"]}'))
smo101841.setAttribute('id', 'smo101841');
smo101862v0ar.push(smo101841);
const smo101843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo101843.setAttribute('id', 'smo101843');
smo101862v0ar.push(smo101843);
const smo101844 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n","gn/5/n"]}'))
smo101844.setAttribute('id', 'smo101844');
smo101862v0ar.push(smo101844);
const smo101845 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n","gn/5/n"]}'))
smo101845.setAttribute('id', 'smo101845');
smo101862v0ar.push(smo101845);
const smo101846 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101846.setAttribute('id', 'smo101846');
smo101862v0ar.push(smo101846);
const smo101847 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n","dn/5/n"]}'))
smo101847.setAttribute('id', 'smo101847');
smo101862v0ar.push(smo101847);
const smo101848 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo101848.setAttribute('id', 'smo101848');
const smo1018480acc = new VF.Accidental('n');
smo101848.addModifier(smo1018480acc, 0);
smo101862v0ar.push(smo101848);
smo101862v0.addTickables(smo101862v0ar)
fmtsmo10186268.joinVoices([smo101862v0]);
const fmtsmo10459468 = new VF.Formatter();
//
// voices and notes for stave 1 68
const smo104594v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104594v0ar = [];
const smo104577 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo104577.setAttribute('id', 'smo104577');
smo104594v0ar.push(smo104577);
const smo104578 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo104578.setAttribute('id', 'smo104578');
smo104594v0ar.push(smo104578);
const smo104579 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo104579.setAttribute('id', 'smo104579');
smo104594v0ar.push(smo104579);
const smo104580 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo104580.setAttribute('id', 'smo104580');
smo104594v0ar.push(smo104580);
smo104594v0.addTickables(smo104594v0ar)
fmtsmo10459468.joinVoices([smo104594v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105967 = smo101841.getStemDirection();
smo101841.setStemDirection(dirsmo105967);
smo101843.setStemDirection(dirsmo105967);
smo101844.setStemDirection(dirsmo105967);
const smo105967 = new VF.Beam([smo101841,smo101843,smo101844]);
const dirsmo105968 = smo101845.getStemDirection();
smo101845.setStemDirection(dirsmo105968);
smo101846.setStemDirection(dirsmo105968);
smo101847.setStemDirection(dirsmo105968);
smo101848.setStemDirection(dirsmo105968);
const smo105968 = new VF.Beam([smo101845,smo101846,smo101847,smo101848]);
const dirsmo105971 = smo104577.getStemDirection();
smo104577.setStemDirection(dirsmo105971);
smo104578.setStemDirection(dirsmo105971);
const smo105971 = new VF.Beam([smo104577,smo104578]);
const dirsmo105972 = smo104579.getStemDirection();
smo104579.setStemDirection(dirsmo105972);
smo104580.setStemDirection(dirsmo105972);
const smo105972 = new VF.Beam([smo104579,smo104580]);
 
// formatting measures in staff group smo99711
fmtsmo10186268.format([smo101862v0,smo104594v0], 281);
const stavesmo101862 = new VF.Stave(663, 763, 295);
stavesmo101862.setAttribute('id', 'stavesmo101862');
stavesmo101862.setBegBarType(VF.Barline.type.NONE);
stavesmo101862.setContext(context);
stavesmo101862.draw();
smo101862v0.draw(context, stavesmo101862);
smo105967.setContext(context);
smo105967.draw();
smo105968.setContext(context);
smo105968.draw();
const stavesmo104594 = new VF.Stave(663, 934, 295);
stavesmo104594.setAttribute('id', 'stavesmo104594');
stavesmo104594.setBegBarType(VF.Barline.type.NONE);
stavesmo104594.setContext(context);
stavesmo104594.draw();
smo104594v0.draw(context, stavesmo104594);
smo105971.setContext(context);
smo105971.draw();
smo105972.setContext(context);
smo105972.draw();
const fmtsmo10188469 = new VF.Formatter();
//
// voices and notes for stave 0 69
const smo101884v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101884v0ar = [];
const smo101863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","fn/5/n"]}'))
smo101863.setAttribute('id', 'smo101863');
smo101884v0ar.push(smo101863);
const smo101864 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo101864.setAttribute('id', 'smo101864');
const smo1018640acc = new VF.Accidental('n');
smo101864.addModifier(smo1018640acc, 0);
smo101884v0ar.push(smo101864);
const smo101865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101865.setAttribute('id', 'smo101865');
smo101884v0ar.push(smo101865);
const smo101866 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo101866.setAttribute('id', 'smo101866');
smo101884v0ar.push(smo101866);
const smo101867 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo101867.setAttribute('id', 'smo101867');
const smo1018670acc = new VF.Accidental('n');
smo101867.addModifier(smo1018670acc, 0);
smo101884v0ar.push(smo101867);
const smo101868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo101868.setAttribute('id', 'smo101868');
smo101884v0ar.push(smo101868);
const smo101869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo101869.setAttribute('id', 'smo101869');
smo101884v0ar.push(smo101869);
smo101884v0.addTickables(smo101884v0ar)
fmtsmo10188469.joinVoices([smo101884v0]);
const fmtsmo10461269 = new VF.Formatter();
//
// voices and notes for stave 1 69
const smo104612v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104612v0ar = [];
const smo104595 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo104595.setAttribute('id', 'smo104595');
smo104612v0ar.push(smo104595);
const smo104596 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo104596.setAttribute('id', 'smo104596');
smo104612v0ar.push(smo104596);
const smo104597 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo104597.setAttribute('id', 'smo104597');
smo104612v0ar.push(smo104597);
smo104612v0.addTickables(smo104612v0ar)
fmtsmo10461269.joinVoices([smo104612v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105975 = smo101863.getStemDirection();
smo101863.setStemDirection(dirsmo105975);
smo101864.setStemDirection(dirsmo105975);
smo101865.setStemDirection(dirsmo105975);
const smo105975 = new VF.Beam([smo101863,smo101864,smo101865]);
const dirsmo105976 = smo101866.getStemDirection();
smo101866.setStemDirection(dirsmo105976);
smo101867.setStemDirection(dirsmo105976);
smo101868.setStemDirection(dirsmo105976);
smo101869.setStemDirection(dirsmo105976);
const smo105976 = new VF.Beam([smo101866,smo101867,smo101868,smo101869]);
 
// formatting measures in staff group smo99711
fmtsmo10188469.format([smo101884v0,smo104612v0], 277);
const stavesmo101884 = new VF.Stave(958, 763, 295);
stavesmo101884.setAttribute('id', 'stavesmo101884');
stavesmo101884.setBegBarType(VF.Barline.type.NONE);
stavesmo101884.setEndBarType(5);
stavesmo101884.setContext(context);
stavesmo101884.draw();
smo101884v0.draw(context, stavesmo101884);
smo105975.setContext(context);
smo105975.draw();
smo105976.setContext(context);
smo105976.draw();
const stavesmo104612 = new VF.Stave(958, 934, 295);
stavesmo104612.setAttribute('id', 'stavesmo104612');
stavesmo104612.setBegBarType(VF.Barline.type.NONE);
stavesmo104612.setEndBarType(5);
stavesmo104612.setContext(context);
stavesmo104612.draw();
smo104612v0.draw(context, stavesmo104612);
const fmtsmo10190370 = new VF.Formatter();
//
// voices and notes for stave 0 70
const smo101903v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101903v0ar = [];
const smo101885 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","fn/5/n"]}'))
smo101885.setAttribute('id', 'smo101885');
smo101903v0ar.push(smo101885);
const smo101886 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo101886.setAttribute('id', 'smo101886');
smo101903v0ar.push(smo101886);
const smo101887 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n","an/5/n","cn/6/n","fn/6/n"]}'))
smo101887.setAttribute('id', 'smo101887');
smo101903v0ar.push(smo101887);
const smo101888 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo101888.setAttribute('id', 'smo101888');
smo101903v0ar.push(smo101888);
smo101903v0.addTickables(smo101903v0ar)
fmtsmo10190370.joinVoices([smo101903v0]);
const fmtsmo10463170 = new VF.Formatter();
//
// voices and notes for stave 1 70
const smo104631v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104631v0ar = [];
const smo104613 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo104613.setAttribute('id', 'smo104613');
smo104631v0ar.push(smo104613);
const smo104614 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo104614.setAttribute('id', 'smo104614');
smo104631v0ar.push(smo104614);
const smo104615 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/1/n","fn/2/n"]}'))
smo104615.setAttribute('id', 'smo104615');
smo104631v0ar.push(smo104615);
const smo104616 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo104616.setAttribute('id', 'smo104616');
smo104631v0ar.push(smo104616);
smo104631v0.addTickables(smo104631v0ar)
fmtsmo10463170.joinVoices([smo104631v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
 
// formatting measures in staff group smo99711
fmtsmo10190370.format([smo101903v0,smo104631v0], 281);
const stavesmo101903 = new VF.Stave(1253, 763, 295);
stavesmo101903.setAttribute('id', 'stavesmo101903');
stavesmo101903.setBegBarType(VF.Barline.type.NONE);
stavesmo101903.setContext(context);
stavesmo101903.draw();
smo101903v0.draw(context, stavesmo101903);
const stavesmo104631 = new VF.Stave(1253, 934, 295);
stavesmo104631.setAttribute('id', 'stavesmo104631');
stavesmo104631.setBegBarType(VF.Barline.type.NONE);
stavesmo104631.setContext(context);
stavesmo104631.draw();
smo104631v0.draw(context, stavesmo104631);
const fmtsmo10192471 = new VF.Formatter();
//
// voices and notes for stave 0 71
const smo101924v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101924v0ar = [];
const smo101904 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101904.setAttribute('id', 'smo101904');
smo101924v0ar.push(smo101904);
const smo101905 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo101905.setAttribute('id', 'smo101905');
smo101924v0ar.push(smo101905);
const smo101906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101906.setAttribute('id', 'smo101906');
smo101924v0ar.push(smo101906);
const smo101907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101907.setAttribute('id', 'smo101907');
smo101924v0ar.push(smo101907);
const smo101908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo101908.setAttribute('id', 'smo101908');
smo101924v0ar.push(smo101908);
const smo101909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101909.setAttribute('id', 'smo101909');
smo101924v0ar.push(smo101909);
const smo101910 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo101910.setAttribute('id', 'smo101910');
smo101924v0ar.push(smo101910);
smo101924v0.addTickables(smo101924v0ar)
fmtsmo10192471.joinVoices([smo101924v0]);
const fmtsmo10464971 = new VF.Formatter();
//
// voices and notes for stave 1 71
const smo104649v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104649v0ar = [];
const smo104632 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n","cn/4/n","fn/4/n"]}'))
smo104632.setAttribute('id', 'smo104632');
smo104649v0ar.push(smo104632);
const smo104633 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n","cn/4/n","fn/4/n"]}'))
smo104633.setAttribute('id', 'smo104633');
smo104649v0ar.push(smo104633);
const smo104634 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gb/3/n","an/3/n","cn/4/n","eb/4/n"]}'))
smo104634.setAttribute('id', 'smo104634');
const smo1046340acc = new VF.Accidental('b');
smo104634.addModifier(smo1046340acc, 0);
const smo1046343acc = new VF.Accidental('b');
smo104634.addModifier(smo1046343acc, 3);
smo104649v0ar.push(smo104634);
const smo104635 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gb/3/n","an/3/n","cn/4/n","eb/4/n"]}'))
smo104635.setAttribute('id', 'smo104635');
smo104649v0ar.push(smo104635);
smo104649v0.addTickables(smo104649v0ar)
fmtsmo10464971.joinVoices([smo104649v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105983 = smo101904.getStemDirection();
smo101904.setStemDirection(dirsmo105983);
smo101905.setStemDirection(dirsmo105983);
smo101906.setStemDirection(dirsmo105983);
const smo105983 = new VF.Beam([smo101904,smo101905,smo101906]);
const dirsmo105984 = smo101907.getStemDirection();
smo101907.setStemDirection(dirsmo105984);
smo101908.setStemDirection(dirsmo105984);
smo101909.setStemDirection(dirsmo105984);
smo101910.setStemDirection(dirsmo105984);
const smo105984 = new VF.Beam([smo101907,smo101908,smo101909,smo101910]);
const dirsmo105987 = smo104632.getStemDirection();
smo104632.setStemDirection(dirsmo105987);
smo104633.setStemDirection(dirsmo105987);
const smo105987 = new VF.Beam([smo104632,smo104633]);
const dirsmo105988 = smo104634.getStemDirection();
smo104634.setStemDirection(dirsmo105988);
smo104635.setStemDirection(dirsmo105988);
const smo105988 = new VF.Beam([smo104634,smo104635]);
 
// formatting measures in staff group smo99711
fmtsmo10192471.format([smo101924v0,smo104649v0], 248);
const stavesmo101924 = new VF.Stave(1548, 763, 295);
stavesmo101924.setAttribute('id', 'stavesmo101924');
stavesmo101924.setBegBarType(VF.Barline.type.NONE);
const keysmo101924 = new VF.KeySignature('C');
keysmo101924.cancelKey('Bb');
keysmo101924.addToStave(stavesmo101924);
stavesmo101924.setContext(context);
stavesmo101924.draw();
smo101924v0.draw(context, stavesmo101924);
smo105983.setContext(context);
smo105983.draw();
smo105984.setContext(context);
smo105984.draw();
const stavesmo104649 = new VF.Stave(1548, 934, 295);
stavesmo104649.setAttribute('id', 'stavesmo104649');
stavesmo104649.setBegBarType(VF.Barline.type.NONE);
const keysmo104649 = new VF.KeySignature('C');
keysmo104649.cancelKey('Bb');
keysmo104649.addToStave(stavesmo104649);
stavesmo104649.setContext(context);
stavesmo104649.draw();
smo104649v0.draw(context, stavesmo104649);
smo105987.setContext(context);
smo105987.draw();
smo105988.setContext(context);
smo105988.draw();
const rightsmo99711stavesmo1019241 = new VF.StaveConnector(stavesmo101924, stavesmo104649).setType(0);
rightsmo99711stavesmo1019241.setContext(context).draw();
const fmtsmo10194672 = new VF.Formatter();
//
// voices and notes for stave 0 72
const smo101946v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101946v0ar = [];
const smo101925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo101925.setAttribute('id', 'smo101925');
smo101946v0ar.push(smo101925);
const smo101926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101926.setAttribute('id', 'smo101926');
smo101946v0ar.push(smo101926);
const smo101927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo101927.setAttribute('id', 'smo101927');
smo101946v0ar.push(smo101927);
const smo101928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo101928.setAttribute('id', 'smo101928');
smo101946v0ar.push(smo101928);
const smo101929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo101929.setAttribute('id', 'smo101929');
smo101946v0ar.push(smo101929);
const smo101930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo101930.setAttribute('id', 'smo101930');
smo101946v0ar.push(smo101930);
const smo101931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101931.setAttribute('id', 'smo101931');
smo101946v0ar.push(smo101931);
const smo101932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo101932.setAttribute('id', 'smo101932');
smo101946v0ar.push(smo101932);
smo101946v0.addTickables(smo101946v0ar)
fmtsmo10194672.joinVoices([smo101946v0]);
const fmtsmo10466772 = new VF.Formatter();
//
// voices and notes for stave 1 72
const smo104667v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104667v0ar = [];
const smo104650 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo104650.setAttribute('id', 'smo104650');
smo104667v0ar.push(smo104650);
const smo104651 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo104651.setAttribute('id', 'smo104651');
smo104667v0ar.push(smo104651);
const smo104652 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo104652.setAttribute('id', 'smo104652');
smo104667v0ar.push(smo104652);
const smo104653 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo104653.setAttribute('id', 'smo104653');
smo104667v0ar.push(smo104653);
smo104667v0.addTickables(smo104667v0ar)
fmtsmo10466772.joinVoices([smo104667v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105999 = smo101925.getStemDirection();
smo101925.setStemDirection(dirsmo105999);
smo101926.setStemDirection(dirsmo105999);
smo101927.setStemDirection(dirsmo105999);
smo101928.setStemDirection(dirsmo105999);
const smo105999 = new VF.Beam([smo101925,smo101926,smo101927,smo101928]);
const dirsmo106000 = smo101929.getStemDirection();
smo101929.setStemDirection(dirsmo106000);
smo101930.setStemDirection(dirsmo106000);
smo101931.setStemDirection(dirsmo106000);
smo101932.setStemDirection(dirsmo106000);
const smo106000 = new VF.Beam([smo101929,smo101930,smo101931,smo101932]);
const dirsmo106003 = smo104650.getStemDirection();
smo104650.setStemDirection(dirsmo106003);
smo104651.setStemDirection(dirsmo106003);
const smo106003 = new VF.Beam([smo104650,smo104651]);
const dirsmo106004 = smo104652.getStemDirection();
smo104652.setStemDirection(dirsmo106004);
smo104653.setStemDirection(dirsmo106004);
const smo106004 = new VF.Beam([smo104652,smo104653]);
 
// formatting measures in staff group smo99711
fmtsmo10194672.format([smo101946v0,smo104667v0], 237);
const stavesmo101946 = new VF.Stave(73, 1147, 295);
stavesmo101946.setAttribute('id', 'stavesmo101946');
stavesmo101946.setBegBarType(1);
stavesmo101946.addClef('treble');
stavesmo101946.setContext(context);
stavesmo101946.draw();
smo101946v0.draw(context, stavesmo101946);
smo105999.setContext(context);
smo105999.draw();
smo106000.setContext(context);
smo106000.draw();
const stavesmo104667 = new VF.Stave(73, 1271, 295);
stavesmo104667.setAttribute('id', 'stavesmo104667');
stavesmo104667.setBegBarType(1);
stavesmo104667.addClef('bass');
stavesmo104667.setContext(context);
stavesmo104667.draw();
smo104667v0.draw(context, stavesmo104667);
smo106003.setContext(context);
smo106003.draw();
smo106004.setContext(context);
smo106004.draw();
const leftsmo99711stavesmo1019461 = new VF.StaveConnector(stavesmo101946, stavesmo104667).setType(3);
leftsmo99711stavesmo1019461.setContext(context).draw();
const fmtsmo10196573 = new VF.Formatter();
//
// voices and notes for stave 0 73
const smo101965v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101965v0ar = [];
const smo101947 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n","an/4/n"]}'))
smo101947.setAttribute('id', 'smo101947');
const smo1019470acc = new VF.Accidental('b');
smo101947.addModifier(smo1019470acc, 0);
smo101965v0ar.push(smo101947);
const smo101948 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","gb/5/n"]}'))
smo101948.setAttribute('id', 'smo101948');
const smo1019481acc = new VF.Accidental('b');
smo101948.addModifier(smo1019481acc, 1);
smo101965v0ar.push(smo101948);
const smo101949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","en/5/n"]}'))
smo101949.setAttribute('id', 'smo101949');
smo101965v0ar.push(smo101949);
const smo101950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","dn/5/n"]}'))
smo101950.setAttribute('id', 'smo101950');
smo101965v0ar.push(smo101950);
const smo101951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","cn/5/n"]}'))
smo101951.setAttribute('id', 'smo101951');
smo101965v0ar.push(smo101951);
smo101965v0.addTickables(smo101965v0ar)
fmtsmo10196573.joinVoices([smo101965v0]);
const fmtsmo10468573 = new VF.Formatter();
//
// voices and notes for stave 1 73
const smo104685v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104685v0ar = [];
const smo104668 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n","cn/4/n"]}'))
smo104668.setAttribute('id', 'smo104668');
smo104685v0ar.push(smo104668);
const smo104669 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n","an/3/n"]}'))
smo104669.setAttribute('id', 'smo104669');
smo104685v0ar.push(smo104669);
const smo104670 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo104670.setAttribute('id', 'smo104670');
smo104685v0ar.push(smo104670);
const smo104671 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo104671.setAttribute('id', 'smo104671');
smo104685v0ar.push(smo104671);
smo104685v0.addTickables(smo104685v0ar)
fmtsmo10468573.joinVoices([smo104685v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo106007 = smo101947.getStemDirection();
smo101947.setStemDirection(dirsmo106007);
smo101948.setStemDirection(dirsmo106007);
const smo106007 = new VF.Beam([smo101947,smo101948]);
const dirsmo106008 = smo101949.getStemDirection();
smo101949.setStemDirection(dirsmo106008);
smo101950.setStemDirection(dirsmo106008);
smo101951.setStemDirection(dirsmo106008);
const smo106008 = new VF.Beam([smo101949,smo101950,smo101951]);
const dirsmo106011 = smo104668.getStemDirection();
smo104668.setStemDirection(dirsmo106011);
smo104669.setStemDirection(dirsmo106011);
const smo106011 = new VF.Beam([smo104668,smo104669]);
const dirsmo106012 = smo104670.getStemDirection();
smo104670.setStemDirection(dirsmo106012);
smo104671.setStemDirection(dirsmo106012);
const smo106012 = new VF.Beam([smo104670,smo104671]);
 
// formatting measures in staff group smo99711
fmtsmo10196573.format([smo101965v0,smo104685v0], 281);
const stavesmo101965 = new VF.Stave(368, 1147, 295);
stavesmo101965.setAttribute('id', 'stavesmo101965');
stavesmo101965.setBegBarType(VF.Barline.type.NONE);
stavesmo101965.setContext(context);
stavesmo101965.draw();
smo101965v0.draw(context, stavesmo101965);
smo106007.setContext(context);
smo106007.draw();
smo106008.setContext(context);
smo106008.draw();
const stavesmo104685 = new VF.Stave(368, 1271, 295);
stavesmo104685.setAttribute('id', 'stavesmo104685');
stavesmo104685.setBegBarType(VF.Barline.type.NONE);
stavesmo104685.setContext(context);
stavesmo104685.draw();
smo104685v0.draw(context, stavesmo104685);
smo106011.setContext(context);
smo106011.draw();
smo106012.setContext(context);
smo106012.draw();
const fmtsmo10198274 = new VF.Formatter();
//
// voices and notes for stave 0 74
const smo101982v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101982v0ar = [];
const smo101966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","cn/5/n"]}'))
smo101966.setAttribute('id', 'smo101966');
smo101982v0ar.push(smo101966);
const smo101967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","gn/5/n","cn/6/n"]}'))
smo101967.setAttribute('id', 'smo101967');
smo101982v0ar.push(smo101967);
const smo101968 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo101968.setAttribute('id', 'smo101968');
smo101982v0ar.push(smo101968);
smo101982v0.addTickables(smo101982v0ar)
fmtsmo10198274.joinVoices([smo101982v0]);
const fmtsmo10470274 = new VF.Formatter();
//
// voices and notes for stave 1 74
const smo104702v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104702v0ar = [];
const smo104686 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo104686.setAttribute('id', 'smo104686');
smo104702v0ar.push(smo104686);
const smo104687 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo104687.setAttribute('id', 'smo104687');
smo104702v0ar.push(smo104687);
const smo104688 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo104688.setAttribute('id', 'smo104688');
smo104702v0ar.push(smo104688);
smo104702v0.addTickables(smo104702v0ar)
fmtsmo10470274.joinVoices([smo104702v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
 
// formatting measures in staff group smo99711
fmtsmo10198274.format([smo101982v0,smo104702v0], 281);
const stavesmo101982 = new VF.Stave(663, 1147, 295);
stavesmo101982.setAttribute('id', 'stavesmo101982');
stavesmo101982.setBegBarType(VF.Barline.type.NONE);
stavesmo101982.setContext(context);
stavesmo101982.draw();
smo101982v0.draw(context, stavesmo101982);
const stavesmo104702 = new VF.Stave(663, 1271, 295);
stavesmo104702.setAttribute('id', 'stavesmo104702');
stavesmo104702.setBegBarType(VF.Barline.type.NONE);
stavesmo104702.setContext(context);
stavesmo104702.draw();
smo104702v0.draw(context, stavesmo104702);
const fmtsmo10200275 = new VF.Formatter();
//
// voices and notes for stave 0 75
const smo102002v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102002v0ar = [];
const smo101983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo101983.setAttribute('id', 'smo101983');
smo102002v0ar.push(smo101983);
const smo101984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["db/4/n","en/4/n"]}'))
smo101984.setAttribute('id', 'smo101984');
const smo1019840acc = new VF.Accidental('b');
smo101984.addModifier(smo1019840acc, 0);
smo102002v0ar.push(smo101984);
const smo101985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo101985.setAttribute('id', 'smo101985');
const smo1019850acc = new VF.Accidental('n');
smo101985.addModifier(smo1019850acc, 0);
smo102002v0ar.push(smo101985);
const smo101986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo101986.setAttribute('id', 'smo101986');
smo102002v0ar.push(smo101986);
const smo101987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["db/4/n","en/4/n"]}'))
smo101987.setAttribute('id', 'smo101987');
const smo1019870acc = new VF.Accidental('b');
smo101987.addModifier(smo1019870acc, 0);
smo102002v0ar.push(smo101987);
const smo101988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo101988.setAttribute('id', 'smo101988');
const smo1019880acc = new VF.Accidental('n');
smo101988.addModifier(smo1019880acc, 0);
smo102002v0ar.push(smo101988);
smo102002v0.addTickables(smo102002v0ar)
fmtsmo10200275.joinVoices([smo102002v0]);
const fmtsmo10472075 = new VF.Formatter();
//
// voices and notes for stave 1 75
const smo104720v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104720v0ar = [];
const smo104703 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo104703.setAttribute('id', 'smo104703');
smo104720v0ar.push(smo104703);
const smo104704 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n"]}'))
smo104704.setAttribute('id', 'smo104704');
smo104720v0ar.push(smo104704);
const smo104705 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo104705.setAttribute('id', 'smo104705');
smo104720v0ar.push(smo104705);
const smo104706 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n"]}'))
smo104706.setAttribute('id', 'smo104706');
smo104720v0ar.push(smo104706);
smo104720v0.addTickables(smo104720v0ar)
fmtsmo10472075.joinVoices([smo104720v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo106019 = smo101983.getStemDirection();
smo101983.setStemDirection(dirsmo106019);
smo101984.setStemDirection(dirsmo106019);
smo101985.setStemDirection(dirsmo106019);
const smo106019 = new VF.Beam([smo101983,smo101984,smo101985]);
const dirsmo106020 = smo101986.getStemDirection();
smo101986.setStemDirection(dirsmo106020);
smo101987.setStemDirection(dirsmo106020);
smo101988.setStemDirection(dirsmo106020);
const smo106020 = new VF.Beam([smo101986,smo101987,smo101988]);
const dirsmo106022 = smo104703.getStemDirection();
smo104703.setStemDirection(dirsmo106022);
smo104704.setStemDirection(dirsmo106022);
const smo106022 = new VF.Beam([smo104703,smo104704]);
const dirsmo106023 = smo104705.getStemDirection();
smo104705.setStemDirection(dirsmo106023);
smo104706.setStemDirection(dirsmo106023);
const smo106023 = new VF.Beam([smo104705,smo104706]);
 
// formatting measures in staff group smo99711
fmtsmo10200275.format([smo102002v0,smo104720v0], 272);
const stavesmo102002 = new VF.Stave(958, 1147, 295);
stavesmo102002.setAttribute('id', 'stavesmo102002');
stavesmo102002.setBegBarType(4);
stavesmo102002.setContext(context);
stavesmo102002.draw();
smo102002v0.draw(context, stavesmo102002);
smo106019.setContext(context);
smo106019.draw();
smo106020.setContext(context);
smo106020.draw();
const stavesmo104720 = new VF.Stave(958, 1271, 295);
stavesmo104720.setAttribute('id', 'stavesmo104720');
stavesmo104720.setBegBarType(4);
stavesmo104720.setContext(context);
stavesmo104720.draw();
smo104720v0.draw(context, stavesmo104720);
smo106022.setContext(context);
smo106022.draw();
smo106023.setContext(context);
smo106023.draw();
const fmtsmo10202476 = new VF.Formatter();
//
// voices and notes for stave 0 76
const smo102024v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102024v0ar = [];
const smo102003 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo102003.setAttribute('id', 'smo102003');
smo102024v0ar.push(smo102003);
const smo102004 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo102004.setAttribute('id', 'smo102004');
smo102024v0ar.push(smo102004);
const smo102005 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","dn/5/n"]}'))
smo102005.setAttribute('id', 'smo102005');
smo102024v0ar.push(smo102005);
const smo102006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo102006.setAttribute('id', 'smo102006');
smo102024v0ar.push(smo102006);
const smo102007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102007.setAttribute('id', 'smo102007');
smo102024v0ar.push(smo102007);
const smo102008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo102008.setAttribute('id', 'smo102008');
smo102024v0ar.push(smo102008);
const smo102009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102009.setAttribute('id', 'smo102009');
smo102024v0ar.push(smo102009);
const smo102010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo102010.setAttribute('id', 'smo102010');
smo102024v0ar.push(smo102010);
smo102024v0.addTickables(smo102024v0ar)
fmtsmo10202476.joinVoices([smo102024v0]);
const fmtsmo10473876 = new VF.Formatter();
//
// voices and notes for stave 1 76
const smo104738v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104738v0ar = [];
const smo104721 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo104721.setAttribute('id', 'smo104721');
smo104738v0ar.push(smo104721);
const smo104722 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n"]}'))
smo104722.setAttribute('id', 'smo104722');
smo104738v0ar.push(smo104722);
const smo104723 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo104723.setAttribute('id', 'smo104723');
smo104738v0ar.push(smo104723);
const smo104724 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n"]}'))
smo104724.setAttribute('id', 'smo104724');
smo104738v0ar.push(smo104724);
smo104738v0.addTickables(smo104738v0ar)
fmtsmo10473876.joinVoices([smo104738v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo106025 = smo102004.getStemDirection();
smo102004.setStemDirection(dirsmo106025);
smo102005.setStemDirection(dirsmo106025);
smo102006.setStemDirection(dirsmo106025);
const smo106025 = new VF.Beam([smo102004,smo102005,smo102006]);
const dirsmo106026 = smo102007.getStemDirection();
smo102007.setStemDirection(dirsmo106026);
smo102008.setStemDirection(dirsmo106026);
smo102009.setStemDirection(dirsmo106026);
smo102010.setStemDirection(dirsmo106026);
const smo106026 = new VF.Beam([smo102007,smo102008,smo102009,smo102010]);
const dirsmo106029 = smo104721.getStemDirection();
smo104721.setStemDirection(dirsmo106029);
smo104722.setStemDirection(dirsmo106029);
const smo106029 = new VF.Beam([smo104721,smo104722]);
const dirsmo106030 = smo104723.getStemDirection();
smo104723.setStemDirection(dirsmo106030);
smo104724.setStemDirection(dirsmo106030);
const smo106030 = new VF.Beam([smo104723,smo104724]);
 
// formatting measures in staff group smo99711
fmtsmo10202476.format([smo102024v0,smo104738v0], 281);
const stavesmo102024 = new VF.Stave(1253, 1147, 295);
stavesmo102024.setAttribute('id', 'stavesmo102024');
stavesmo102024.setBegBarType(VF.Barline.type.NONE);
stavesmo102024.setContext(context);
stavesmo102024.draw();
smo102024v0.draw(context, stavesmo102024);
smo106025.setContext(context);
smo106025.draw();
smo106026.setContext(context);
smo106026.draw();
const stavesmo104738 = new VF.Stave(1253, 1271, 295);
stavesmo104738.setAttribute('id', 'stavesmo104738');
stavesmo104738.setBegBarType(VF.Barline.type.NONE);
stavesmo104738.setContext(context);
stavesmo104738.draw();
smo104738v0.draw(context, stavesmo104738);
smo106029.setContext(context);
smo106029.draw();
smo106030.setContext(context);
smo106030.draw();
const fmtsmo10204477 = new VF.Formatter();
//
// voices and notes for stave 0 77
const smo102044v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102044v0ar = [];
const smo102025 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo102025.setAttribute('id', 'smo102025');
smo102044v0ar.push(smo102025);
const smo102026 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n","gb/4/n"]}'))
smo102026.setAttribute('id', 'smo102026');
const smo1020260acc = new VF.Accidental('b');
smo102026.addModifier(smo1020260acc, 0);
const smo1020261acc = new VF.Accidental('b');
smo102026.addModifier(smo1020261acc, 1);
smo102044v0ar.push(smo102026);
const smo102027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo102027.setAttribute('id', 'smo102027');
const smo1020270acc = new VF.Accidental('n');
smo102027.addModifier(smo1020270acc, 0);
const smo1020271acc = new VF.Accidental('n');
smo102027.addModifier(smo1020271acc, 1);
smo102044v0ar.push(smo102027);
const smo102028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo102028.setAttribute('id', 'smo102028');
smo102044v0ar.push(smo102028);
const smo102029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n","gb/4/n"]}'))
smo102029.setAttribute('id', 'smo102029');
const smo1020290acc = new VF.Accidental('b');
smo102029.addModifier(smo1020290acc, 0);
const smo1020291acc = new VF.Accidental('b');
smo102029.addModifier(smo1020291acc, 1);
smo102044v0ar.push(smo102029);
const smo102030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo102030.setAttribute('id', 'smo102030');
const smo1020300acc = new VF.Accidental('n');
smo102030.addModifier(smo1020300acc, 0);
const smo1020301acc = new VF.Accidental('n');
smo102030.addModifier(smo1020301acc, 1);
smo102044v0ar.push(smo102030);
smo102044v0.addTickables(smo102044v0ar)
fmtsmo10204477.joinVoices([smo102044v0]);
const fmtsmo10475677 = new VF.Formatter();
//
// voices and notes for stave 1 77
const smo104756v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104756v0ar = [];
const smo104739 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo104739.setAttribute('id', 'smo104739');
smo104756v0ar.push(smo104739);
const smo104740 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo104740.setAttribute('id', 'smo104740');
smo104756v0ar.push(smo104740);
const smo104741 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo104741.setAttribute('id', 'smo104741');
smo104756v0ar.push(smo104741);
const smo104742 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo104742.setAttribute('id', 'smo104742');
smo104756v0ar.push(smo104742);
smo104756v0.addTickables(smo104756v0ar)
fmtsmo10475677.joinVoices([smo104756v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo106033 = smo102025.getStemDirection();
smo102025.setStemDirection(dirsmo106033);
smo102026.setStemDirection(dirsmo106033);
smo102027.setStemDirection(dirsmo106033);
const smo106033 = new VF.Beam([smo102025,smo102026,smo102027]);
const dirsmo106034 = smo102028.getStemDirection();
smo102028.setStemDirection(dirsmo106034);
smo102029.setStemDirection(dirsmo106034);
smo102030.setStemDirection(dirsmo106034);
const smo106034 = new VF.Beam([smo102028,smo102029,smo102030]);
const dirsmo106037 = smo104739.getStemDirection();
smo104739.setStemDirection(dirsmo106037);
smo104740.setStemDirection(dirsmo106037);
const smo106037 = new VF.Beam([smo104739,smo104740]);
const dirsmo106038 = smo104741.getStemDirection();
smo104741.setStemDirection(dirsmo106038);
smo104742.setStemDirection(dirsmo106038);
const smo106038 = new VF.Beam([smo104741,smo104742]);
 
// formatting measures in staff group smo99711
fmtsmo10204477.format([smo102044v0,smo104756v0], 281);
const stavesmo102044 = new VF.Stave(1548, 1147, 295);
stavesmo102044.setAttribute('id', 'stavesmo102044');
stavesmo102044.setBegBarType(VF.Barline.type.NONE);
stavesmo102044.setContext(context);
stavesmo102044.draw();
smo102044v0.draw(context, stavesmo102044);
smo106033.setContext(context);
smo106033.draw();
smo106034.setContext(context);
smo106034.draw();
const stavesmo104756 = new VF.Stave(1548, 1271, 295);
stavesmo104756.setAttribute('id', 'stavesmo104756');
stavesmo104756.setBegBarType(VF.Barline.type.NONE);
stavesmo104756.setContext(context);
stavesmo104756.draw();
smo104756v0.draw(context, stavesmo104756);
smo106037.setContext(context);
smo106037.draw();
smo106038.setContext(context);
smo106038.draw();
const rightsmo99711stavesmo1020441 = new VF.StaveConnector(stavesmo102044, stavesmo104756).setType(0);
rightsmo99711stavesmo1020441.setContext(context).draw();
const fmtsmo10206678 = new VF.Formatter();
//
// voices and notes for stave 0 78
const smo102066v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102066v0ar = [];
const smo102045 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo102045.setAttribute('id', 'smo102045');
smo102066v0ar.push(smo102045);
const smo102046 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102046.setAttribute('id', 'smo102046');
smo102066v0ar.push(smo102046);
const smo102047 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n"]}'))
smo102047.setAttribute('id', 'smo102047');
smo102066v0ar.push(smo102047);
const smo102048 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102048.setAttribute('id', 'smo102048');
smo102066v0ar.push(smo102048);
const smo102049 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo102049.setAttribute('id', 'smo102049');
smo102066v0ar.push(smo102049);
const smo102050 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo102050.setAttribute('id', 'smo102050');
smo102066v0ar.push(smo102050);
const smo102051 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo102051.setAttribute('id', 'smo102051');
smo102066v0ar.push(smo102051);
const smo102052 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102052.setAttribute('id', 'smo102052');
smo102066v0ar.push(smo102052);
smo102066v0.addTickables(smo102066v0ar)
fmtsmo10206678.joinVoices([smo102066v0]);
const fmtsmo10477478 = new VF.Formatter();
//
// voices and notes for stave 1 78
const smo104774v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104774v0ar = [];
const smo104757 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo104757.setAttribute('id', 'smo104757');
smo104774v0ar.push(smo104757);
const smo104758 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo104758.setAttribute('id', 'smo104758');
smo104774v0ar.push(smo104758);
const smo104759 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo104759.setAttribute('id', 'smo104759');
smo104774v0ar.push(smo104759);
const smo104760 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo104760.setAttribute('id', 'smo104760');
smo104774v0ar.push(smo104760);
smo104774v0.addTickables(smo104774v0ar)
fmtsmo10477478.joinVoices([smo104774v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo106049 = smo102046.getStemDirection();
smo102046.setStemDirection(dirsmo106049);
smo102047.setStemDirection(dirsmo106049);
smo102048.setStemDirection(dirsmo106049);
const smo106049 = new VF.Beam([smo102046,smo102047,smo102048]);
const dirsmo106050 = smo102049.getStemDirection();
smo102049.setStemDirection(dirsmo106050);
smo102050.setStemDirection(dirsmo106050);
smo102051.setStemDirection(dirsmo106050);
smo102052.setStemDirection(dirsmo106050);
const smo106050 = new VF.Beam([smo102049,smo102050,smo102051,smo102052]);
const dirsmo106053 = smo104757.getStemDirection();
smo104757.setStemDirection(dirsmo106053);
smo104758.setStemDirection(dirsmo106053);
const smo106053 = new VF.Beam([smo104757,smo104758]);
const dirsmo106054 = smo104759.getStemDirection();
smo104759.setStemDirection(dirsmo106054);
smo104760.setStemDirection(dirsmo106054);
const smo106054 = new VF.Beam([smo104759,smo104760]);
 
// formatting measures in staff group smo99711
fmtsmo10206678.format([smo102066v0,smo104774v0], 237);
const stavesmo102066 = new VF.Stave(73, 1444, 295);
stavesmo102066.setAttribute('id', 'stavesmo102066');
stavesmo102066.setBegBarType(1);
stavesmo102066.addClef('treble');
stavesmo102066.setContext(context);
stavesmo102066.draw();
smo102066v0.draw(context, stavesmo102066);
smo106049.setContext(context);
smo106049.draw();
smo106050.setContext(context);
smo106050.draw();
const stavesmo104774 = new VF.Stave(73, 1574, 295);
stavesmo104774.setAttribute('id', 'stavesmo104774');
stavesmo104774.setBegBarType(1);
stavesmo104774.addClef('bass');
stavesmo104774.setContext(context);
stavesmo104774.draw();
smo104774v0.draw(context, stavesmo104774);
smo106053.setContext(context);
smo106053.draw();
smo106054.setContext(context);
smo106054.draw();
const leftsmo99711stavesmo1020661 = new VF.StaveConnector(stavesmo102066, stavesmo104774).setType(3);
leftsmo99711stavesmo1020661.setContext(context).draw();
const fmtsmo10208679 = new VF.Formatter();
//
// voices and notes for stave 0 79
const smo102086v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102086v0ar = [];
const smo102067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n","dn/5/n"]}'))
smo102067.setAttribute('id', 'smo102067');
smo102086v0ar.push(smo102067);
const smo102068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n","db/5/n"]}'))
smo102068.setAttribute('id', 'smo102068');
const smo1020680acc = new VF.Accidental('b');
smo102068.addModifier(smo1020680acc, 0);
const smo1020681acc = new VF.Accidental('b');
smo102068.addModifier(smo1020681acc, 1);
smo102086v0ar.push(smo102068);
const smo102069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n","dn/5/n"]}'))
smo102069.setAttribute('id', 'smo102069');
const smo1020690acc = new VF.Accidental('n');
smo102069.addModifier(smo1020690acc, 0);
const smo1020691acc = new VF.Accidental('n');
smo102069.addModifier(smo1020691acc, 1);
smo102086v0ar.push(smo102069);
const smo102070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n","dn/5/n"]}'))
smo102070.setAttribute('id', 'smo102070');
smo102086v0ar.push(smo102070);
const smo102071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n","db/5/n"]}'))
smo102071.setAttribute('id', 'smo102071');
const smo1020710acc = new VF.Accidental('b');
smo102071.addModifier(smo1020710acc, 0);
const smo1020711acc = new VF.Accidental('b');
smo102071.addModifier(smo1020711acc, 1);
smo102086v0ar.push(smo102071);
const smo102072 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n","dn/5/n"]}'))
smo102072.setAttribute('id', 'smo102072');
const smo1020720acc = new VF.Accidental('n');
smo102072.addModifier(smo1020720acc, 0);
const smo1020721acc = new VF.Accidental('n');
smo102072.addModifier(smo1020721acc, 1);
smo102086v0ar.push(smo102072);
smo102086v0.addTickables(smo102086v0ar)
fmtsmo10208679.joinVoices([smo102086v0]);
const fmtsmo10479279 = new VF.Formatter();
//
// voices and notes for stave 1 79
const smo104792v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104792v0ar = [];
const smo104775 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo104775.setAttribute('id', 'smo104775');
smo104792v0ar.push(smo104775);
const smo104776 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo104776.setAttribute('id', 'smo104776');
smo104792v0ar.push(smo104776);
const smo104777 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n"]}'))
smo104777.setAttribute('id', 'smo104777');
smo104792v0ar.push(smo104777);
const smo104778 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo104778.setAttribute('id', 'smo104778');
smo104792v0ar.push(smo104778);
smo104792v0.addTickables(smo104792v0ar)
fmtsmo10479279.joinVoices([smo104792v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo106057 = smo102067.getStemDirection();
smo102067.setStemDirection(dirsmo106057);
smo102068.setStemDirection(dirsmo106057);
smo102069.setStemDirection(dirsmo106057);
const smo106057 = new VF.Beam([smo102067,smo102068,smo102069]);
const dirsmo106058 = smo102070.getStemDirection();
smo102070.setStemDirection(dirsmo106058);
smo102071.setStemDirection(dirsmo106058);
smo102072.setStemDirection(dirsmo106058);
const smo106058 = new VF.Beam([smo102070,smo102071,smo102072]);
const dirsmo106061 = smo104775.getStemDirection();
smo104775.setStemDirection(dirsmo106061);
smo104776.setStemDirection(dirsmo106061);
const smo106061 = new VF.Beam([smo104775,smo104776]);
const dirsmo106062 = smo104777.getStemDirection();
smo104777.setStemDirection(dirsmo106062);
smo104778.setStemDirection(dirsmo106062);
const smo106062 = new VF.Beam([smo104777,smo104778]);
 
// formatting measures in staff group smo99711
fmtsmo10208679.format([smo102086v0,smo104792v0], 281);
const stavesmo102086 = new VF.Stave(368, 1444, 295);
stavesmo102086.setAttribute('id', 'stavesmo102086');
stavesmo102086.setBegBarType(VF.Barline.type.NONE);
stavesmo102086.setContext(context);
stavesmo102086.draw();
smo102086v0.draw(context, stavesmo102086);
smo106057.setContext(context);
smo106057.draw();
smo106058.setContext(context);
smo106058.draw();
const stavesmo104792 = new VF.Stave(368, 1574, 295);
stavesmo104792.setAttribute('id', 'stavesmo104792');
stavesmo104792.setBegBarType(VF.Barline.type.NONE);
stavesmo104792.setContext(context);
stavesmo104792.draw();
smo104792v0.draw(context, stavesmo104792);
smo106061.setContext(context);
smo106061.draw();
smo106062.setContext(context);
smo106062.draw();
const fmtsmo10210880 = new VF.Formatter();
//
// voices and notes for stave 0 80
const smo102108v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102108v0ar = [];
const smo102087 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo102087.setAttribute('id', 'smo102087');
smo102108v0ar.push(smo102087);
const smo102088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo102088.setAttribute('id', 'smo102088');
smo102108v0ar.push(smo102088);
const smo102089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n","an/5/n"]}'))
smo102089.setAttribute('id', 'smo102089');
smo102108v0ar.push(smo102089);
const smo102090 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo102090.setAttribute('id', 'smo102090');
smo102108v0ar.push(smo102090);
const smo102091 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo102091.setAttribute('id', 'smo102091');
smo102108v0ar.push(smo102091);
const smo102092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo102092.setAttribute('id', 'smo102092');
smo102108v0ar.push(smo102092);
const smo102093 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo102093.setAttribute('id', 'smo102093');
smo102108v0ar.push(smo102093);
const smo102094 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo102094.setAttribute('id', 'smo102094');
smo102108v0ar.push(smo102094);
smo102108v0.addTickables(smo102108v0ar)
fmtsmo10210880.joinVoices([smo102108v0]);
const fmtsmo10481080 = new VF.Formatter();
//
// voices and notes for stave 1 80
const smo104810v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104810v0ar = [];
const smo104793 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo104793.setAttribute('id', 'smo104793');
smo104810v0ar.push(smo104793);
const smo104794 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo104794.setAttribute('id', 'smo104794');
smo104810v0ar.push(smo104794);
const smo104795 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo104795.setAttribute('id', 'smo104795');
smo104810v0ar.push(smo104795);
const smo104796 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo104796.setAttribute('id', 'smo104796');
smo104810v0ar.push(smo104796);
smo104810v0.addTickables(smo104810v0ar)
fmtsmo10481080.joinVoices([smo104810v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo106065 = smo102088.getStemDirection();
smo102088.setStemDirection(dirsmo106065);
smo102089.setStemDirection(dirsmo106065);
smo102090.setStemDirection(dirsmo106065);
const smo106065 = new VF.Beam([smo102088,smo102089,smo102090]);
const dirsmo106066 = smo102091.getStemDirection();
smo102091.setStemDirection(dirsmo106066);
smo102092.setStemDirection(dirsmo106066);
smo102093.setStemDirection(dirsmo106066);
smo102094.setStemDirection(dirsmo106066);
const smo106066 = new VF.Beam([smo102091,smo102092,smo102093,smo102094]);
const dirsmo106069 = smo104793.getStemDirection();
smo104793.setStemDirection(dirsmo106069);
smo104794.setStemDirection(dirsmo106069);
const smo106069 = new VF.Beam([smo104793,smo104794]);
const dirsmo106070 = smo104795.getStemDirection();
smo104795.setStemDirection(dirsmo106070);
smo104796.setStemDirection(dirsmo106070);
const smo106070 = new VF.Beam([smo104795,smo104796]);
 
// formatting measures in staff group smo99711
fmtsmo10210880.format([smo102108v0,smo104810v0], 281);
const stavesmo102108 = new VF.Stave(663, 1444, 295);
stavesmo102108.setAttribute('id', 'stavesmo102108');
stavesmo102108.setBegBarType(VF.Barline.type.NONE);
stavesmo102108.setContext(context);
stavesmo102108.draw();
smo102108v0.draw(context, stavesmo102108);
smo106065.setContext(context);
smo106065.draw();
smo106066.setContext(context);
smo106066.draw();
const stavesmo104810 = new VF.Stave(663, 1574, 295);
stavesmo104810.setAttribute('id', 'stavesmo104810');
stavesmo104810.setBegBarType(VF.Barline.type.NONE);
stavesmo104810.setContext(context);
stavesmo104810.draw();
smo104810v0.draw(context, stavesmo104810);
smo106069.setContext(context);
smo106069.draw();
smo106070.setContext(context);
smo106070.draw();
const fmtsmo10212681 = new VF.Formatter();
//
// voices and notes for stave 0 81
const smo102126v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102126v0ar = [];
const smo102109 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo102109.setAttribute('id', 'smo102109');
smo102126v0ar.push(smo102109);
const smo102110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo102110.setAttribute('id', 'smo102110');
smo102126v0ar.push(smo102110);
const smo102111 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo102111.setAttribute('id', 'smo102111');
smo102126v0ar.push(smo102111);
const smo102112 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","an/5/n"]}'))
smo102112.setAttribute('id', 'smo102112');
smo102126v0ar.push(smo102112);
smo102126v0.addTickables(smo102126v0ar)
fmtsmo10212681.joinVoices([smo102126v0]);
const fmtsmo10482781 = new VF.Formatter();
//
// voices and notes for stave 1 81
const smo104827v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104827v0ar = [];
const smo104811 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/3/n","gb/3/n","cn/4/n"]}'))
smo104811.setAttribute('id', 'smo104811');
const smo1048110acc = new VF.Accidental('b');
smo104811.addModifier(smo1048110acc, 0);
const smo1048111acc = new VF.Accidental('b');
smo104811.addModifier(smo1048111acc, 1);
smo104827v0ar.push(smo104811);
const smo104812 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["eb/3/n","gb/3/n","cn/4/n"]}'))
smo104812.setAttribute('id', 'smo104812');
smo104827v0ar.push(smo104812);
const smo104813 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/3/n","gb/3/n","cn/4/n"]}'))
smo104813.setAttribute('id', 'smo104813');
smo104827v0ar.push(smo104813);
smo104827v0.addTickables(smo104827v0ar)
fmtsmo10482781.joinVoices([smo104827v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo106073 = smo102109.getStemDirection();
smo102109.setStemDirection(dirsmo106073);
smo102110.setStemDirection(dirsmo106073);
const smo106073 = new VF.Beam([smo102109,smo102110]);
 
// formatting measures in staff group smo99711
fmtsmo10212681.format([smo102126v0,smo104827v0], 281);
const stavesmo102126 = new VF.Stave(958, 1444, 295);
stavesmo102126.setAttribute('id', 'stavesmo102126');
stavesmo102126.setBegBarType(VF.Barline.type.NONE);
stavesmo102126.setContext(context);
stavesmo102126.draw();
smo102126v0.draw(context, stavesmo102126);
smo106073.setContext(context);
smo106073.draw();
const stavesmo104827 = new VF.Stave(958, 1574, 295);
stavesmo104827.setAttribute('id', 'stavesmo104827');
stavesmo104827.setBegBarType(VF.Barline.type.NONE);
stavesmo104827.setContext(context);
stavesmo104827.draw();
smo104827v0.draw(context, stavesmo104827);
const fmtsmo10214582 = new VF.Formatter();
//
// voices and notes for stave 0 82
const smo102145v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102145v0ar = [];
const smo102127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","gn/5/n"]}'))
smo102127.setAttribute('id', 'smo102127');
smo102145v0ar.push(smo102127);
const smo102128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo102128.setAttribute('id', 'smo102128');
smo102145v0ar.push(smo102128);
const smo102129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo102129.setAttribute('id', 'smo102129');
smo102145v0ar.push(smo102129);
const smo102130 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo102130.setAttribute('id', 'smo102130');
smo102145v0ar.push(smo102130);
const smo102131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo102131.setAttribute('id', 'smo102131');
smo102145v0ar.push(smo102131);
smo102145v0.addTickables(smo102145v0ar)
fmtsmo10214582.joinVoices([smo102145v0]);
const fmtsmo10484482 = new VF.Formatter();
//
// voices and notes for stave 1 82
const smo104844v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104844v0ar = [];
const smo104828 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo104828.setAttribute('id', 'smo104828');
smo104844v0ar.push(smo104828);
const smo104829 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo104829.setAttribute('id', 'smo104829');
smo104844v0ar.push(smo104829);
const smo104830 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo104830.setAttribute('id', 'smo104830');
smo104844v0ar.push(smo104830);
smo104844v0.addTickables(smo104844v0ar)
fmtsmo10484482.joinVoices([smo104844v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo106078 = smo102127.getStemDirection();
smo102127.setStemDirection(dirsmo106078);
smo102128.setStemDirection(dirsmo106078);
smo102129.setStemDirection(dirsmo106078);
const smo106078 = new VF.Beam([smo102127,smo102128,smo102129]);
const dirsmo106079 = smo102130.getStemDirection();
smo102130.setStemDirection(dirsmo106079);
smo102131.setStemDirection(dirsmo106079);
const smo106079 = new VF.Beam([smo102130,smo102131]);
 
// formatting measures in staff group smo99711
fmtsmo10214582.format([smo102145v0,smo104844v0], 281);
const stavesmo102145 = new VF.Stave(1253, 1444, 295);
stavesmo102145.setAttribute('id', 'stavesmo102145');
stavesmo102145.setBegBarType(VF.Barline.type.NONE);
stavesmo102145.setContext(context);
stavesmo102145.draw();
smo102145v0.draw(context, stavesmo102145);
smo106078.setContext(context);
smo106078.draw();
smo106079.setContext(context);
smo106079.draw();
const stavesmo104844 = new VF.Stave(1253, 1574, 295);
stavesmo104844.setAttribute('id', 'stavesmo104844');
stavesmo104844.setBegBarType(VF.Barline.type.NONE);
stavesmo104844.setContext(context);
stavesmo104844.draw();
smo104844v0.draw(context, stavesmo104844);
const fmtsmo10216583 = new VF.Formatter();
//
// voices and notes for stave 0 83
const smo102165v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102165v0ar = [];
const smo102146 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo102146.setAttribute('id', 'smo102146');
smo102165v0ar.push(smo102146);
const smo102147 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["db/4/n","en/4/n"]}'))
smo102147.setAttribute('id', 'smo102147');
const smo1021470acc = new VF.Accidental('b');
smo102147.addModifier(smo1021470acc, 0);
smo102165v0ar.push(smo102147);
const smo102148 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo102148.setAttribute('id', 'smo102148');
const smo1021480acc = new VF.Accidental('n');
smo102148.addModifier(smo1021480acc, 0);
smo102165v0ar.push(smo102148);
const smo102149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo102149.setAttribute('id', 'smo102149');
smo102165v0ar.push(smo102149);
const smo102150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["db/4/n","en/4/n"]}'))
smo102150.setAttribute('id', 'smo102150');
const smo1021500acc = new VF.Accidental('b');
smo102150.addModifier(smo1021500acc, 0);
smo102165v0ar.push(smo102150);
const smo102151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo102151.setAttribute('id', 'smo102151');
const smo1021510acc = new VF.Accidental('n');
smo102151.addModifier(smo1021510acc, 0);
smo102165v0ar.push(smo102151);
smo102165v0.addTickables(smo102165v0ar)
fmtsmo10216583.joinVoices([smo102165v0]);
const fmtsmo10486283 = new VF.Formatter();
//
// voices and notes for stave 1 83
const smo104862v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104862v0ar = [];
const smo104845 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo104845.setAttribute('id', 'smo104845');
smo104862v0ar.push(smo104845);
const smo104846 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n"]}'))
smo104846.setAttribute('id', 'smo104846');
smo104862v0ar.push(smo104846);
const smo104847 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo104847.setAttribute('id', 'smo104847');
smo104862v0ar.push(smo104847);
const smo104848 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n"]}'))
smo104848.setAttribute('id', 'smo104848');
smo104862v0ar.push(smo104848);
smo104862v0.addTickables(smo104862v0ar)
fmtsmo10486283.joinVoices([smo104862v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo106084 = smo102146.getStemDirection();
smo102146.setStemDirection(dirsmo106084);
smo102147.setStemDirection(dirsmo106084);
smo102148.setStemDirection(dirsmo106084);
const smo106084 = new VF.Beam([smo102146,smo102147,smo102148]);
const dirsmo106085 = smo102149.getStemDirection();
smo102149.setStemDirection(dirsmo106085);
smo102150.setStemDirection(dirsmo106085);
smo102151.setStemDirection(dirsmo106085);
const smo106085 = new VF.Beam([smo102149,smo102150,smo102151]);
const dirsmo106088 = smo104845.getStemDirection();
smo104845.setStemDirection(dirsmo106088);
smo104846.setStemDirection(dirsmo106088);
const smo106088 = new VF.Beam([smo104845,smo104846]);
const dirsmo106089 = smo104847.getStemDirection();
smo104847.setStemDirection(dirsmo106089);
smo104848.setStemDirection(dirsmo106089);
const smo106089 = new VF.Beam([smo104847,smo104848]);
 
// formatting measures in staff group smo99711
fmtsmo10216583.format([smo102165v0,smo104862v0], 281);
const stavesmo102165 = new VF.Stave(1548, 1444, 295);
stavesmo102165.setAttribute('id', 'stavesmo102165');
stavesmo102165.setBegBarType(VF.Barline.type.NONE);
stavesmo102165.setContext(context);
stavesmo102165.draw();
smo102165v0.draw(context, stavesmo102165);
smo106084.setContext(context);
smo106084.draw();
smo106085.setContext(context);
smo106085.draw();
const stavesmo104862 = new VF.Stave(1548, 1574, 295);
stavesmo104862.setAttribute('id', 'stavesmo104862');
stavesmo104862.setBegBarType(VF.Barline.type.NONE);
stavesmo104862.setContext(context);
stavesmo104862.draw();
smo104862v0.draw(context, stavesmo104862);
smo106088.setContext(context);
smo106088.draw();
smo106089.setContext(context);
smo106089.draw();
const rightsmo99711stavesmo1021651 = new VF.StaveConnector(stavesmo102165, stavesmo104862).setType(0);
rightsmo99711stavesmo1021651.setContext(context).draw();
const fmtsmo10218784 = new VF.Formatter();
//
// voices and notes for stave 0 84
const smo102187v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102187v0ar = [];
const smo102166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo102166.setAttribute('id', 'smo102166');
smo102187v0ar.push(smo102166);
const smo102167 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo102167.setAttribute('id', 'smo102167');
smo102187v0ar.push(smo102167);
const smo102168 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","dn/5/n"]}'))
smo102168.setAttribute('id', 'smo102168');
smo102187v0ar.push(smo102168);
const smo102169 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo102169.setAttribute('id', 'smo102169');
smo102187v0ar.push(smo102169);
const smo102170 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102170.setAttribute('id', 'smo102170');
smo102187v0ar.push(smo102170);
const smo102171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo102171.setAttribute('id', 'smo102171');
smo102187v0ar.push(smo102171);
const smo102172 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102172.setAttribute('id', 'smo102172');
smo102187v0ar.push(smo102172);
const smo102173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo102173.setAttribute('id', 'smo102173');
smo102187v0ar.push(smo102173);
smo102187v0.addTickables(smo102187v0ar)
fmtsmo10218784.joinVoices([smo102187v0]);
const fmtsmo10488084 = new VF.Formatter();
//
// voices and notes for stave 1 84
const smo104880v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104880v0ar = [];
const smo104863 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo104863.setAttribute('id', 'smo104863');
smo104880v0ar.push(smo104863);
const smo104864 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n"]}'))
smo104864.setAttribute('id', 'smo104864');
smo104880v0ar.push(smo104864);
const smo104865 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo104865.setAttribute('id', 'smo104865');
smo104880v0ar.push(smo104865);
const smo104866 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","an/3/n"]}'))
smo104866.setAttribute('id', 'smo104866');
smo104880v0ar.push(smo104866);
smo104880v0.addTickables(smo104880v0ar)
fmtsmo10488084.joinVoices([smo104880v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo106100 = smo102167.getStemDirection();
smo102167.setStemDirection(dirsmo106100);
smo102168.setStemDirection(dirsmo106100);
smo102169.setStemDirection(dirsmo106100);
const smo106100 = new VF.Beam([smo102167,smo102168,smo102169]);
const dirsmo106101 = smo102170.getStemDirection();
smo102170.setStemDirection(dirsmo106101);
smo102171.setStemDirection(dirsmo106101);
smo102172.setStemDirection(dirsmo106101);
smo102173.setStemDirection(dirsmo106101);
const smo106101 = new VF.Beam([smo102170,smo102171,smo102172,smo102173]);
const dirsmo106104 = smo104863.getStemDirection();
smo104863.setStemDirection(dirsmo106104);
smo104864.setStemDirection(dirsmo106104);
const smo106104 = new VF.Beam([smo104863,smo104864]);
const dirsmo106105 = smo104865.getStemDirection();
smo104865.setStemDirection(dirsmo106105);
smo104866.setStemDirection(dirsmo106105);
const smo106105 = new VF.Beam([smo104865,smo104866]);
 
// formatting measures in staff group smo99711
fmtsmo10218784.format([smo102187v0,smo104880v0], 237);
const stavesmo102187 = new VF.Stave(73, 1777, 295);
stavesmo102187.setAttribute('id', 'stavesmo102187');
stavesmo102187.setBegBarType(1);
stavesmo102187.addClef('treble');
stavesmo102187.setContext(context);
stavesmo102187.draw();
smo102187v0.draw(context, stavesmo102187);
smo106100.setContext(context);
smo106100.draw();
smo106101.setContext(context);
smo106101.draw();
const stavesmo104880 = new VF.Stave(73, 1921, 295);
stavesmo104880.setAttribute('id', 'stavesmo104880');
stavesmo104880.setBegBarType(1);
stavesmo104880.addClef('bass');
stavesmo104880.setContext(context);
stavesmo104880.draw();
smo104880v0.draw(context, stavesmo104880);
smo106104.setContext(context);
smo106104.draw();
smo106105.setContext(context);
smo106105.draw();
const leftsmo99711stavesmo1021871 = new VF.StaveConnector(stavesmo102187, stavesmo104880).setType(3);
leftsmo99711stavesmo1021871.setContext(context).draw();
const fmtsmo10220785 = new VF.Formatter();
//
// voices and notes for stave 0 85
const smo102207v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102207v0ar = [];
const smo102188 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo102188.setAttribute('id', 'smo102188');
smo102207v0ar.push(smo102188);
const smo102189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n","gb/4/n"]}'))
smo102189.setAttribute('id', 'smo102189');
const smo1021890acc = new VF.Accidental('b');
smo102189.addModifier(smo1021890acc, 0);
const smo1021891acc = new VF.Accidental('b');
smo102189.addModifier(smo1021891acc, 1);
smo102207v0ar.push(smo102189);
const smo102190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo102190.setAttribute('id', 'smo102190');
const smo1021900acc = new VF.Accidental('n');
smo102190.addModifier(smo1021900acc, 0);
const smo1021901acc = new VF.Accidental('n');
smo102190.addModifier(smo1021901acc, 1);
smo102207v0ar.push(smo102190);
const smo102191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo102191.setAttribute('id', 'smo102191');
smo102207v0ar.push(smo102191);
const smo102192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n","gb/4/n"]}'))
smo102192.setAttribute('id', 'smo102192');
const smo1021920acc = new VF.Accidental('b');
smo102192.addModifier(smo1021920acc, 0);
const smo1021921acc = new VF.Accidental('b');
smo102192.addModifier(smo1021921acc, 1);
smo102207v0ar.push(smo102192);
const smo102193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo102193.setAttribute('id', 'smo102193');
const smo1021930acc = new VF.Accidental('n');
smo102193.addModifier(smo1021930acc, 0);
const smo1021931acc = new VF.Accidental('n');
smo102193.addModifier(smo1021931acc, 1);
smo102207v0ar.push(smo102193);
smo102207v0.addTickables(smo102207v0ar)
fmtsmo10220785.joinVoices([smo102207v0]);
const fmtsmo10489885 = new VF.Formatter();
//
// voices and notes for stave 1 85
const smo104898v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104898v0ar = [];
const smo104881 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo104881.setAttribute('id', 'smo104881');
smo104898v0ar.push(smo104881);
const smo104882 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo104882.setAttribute('id', 'smo104882');
smo104898v0ar.push(smo104882);
const smo104883 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo104883.setAttribute('id', 'smo104883');
smo104898v0ar.push(smo104883);
const smo104884 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo104884.setAttribute('id', 'smo104884');
smo104898v0ar.push(smo104884);
smo104898v0.addTickables(smo104898v0ar)
fmtsmo10489885.joinVoices([smo104898v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo106108 = smo102188.getStemDirection();
smo102188.setStemDirection(dirsmo106108);
smo102189.setStemDirection(dirsmo106108);
smo102190.setStemDirection(dirsmo106108);
const smo106108 = new VF.Beam([smo102188,smo102189,smo102190]);
const dirsmo106109 = smo102191.getStemDirection();
smo102191.setStemDirection(dirsmo106109);
smo102192.setStemDirection(dirsmo106109);
smo102193.setStemDirection(dirsmo106109);
const smo106109 = new VF.Beam([smo102191,smo102192,smo102193]);
const dirsmo106112 = smo104881.getStemDirection();
smo104881.setStemDirection(dirsmo106112);
smo104882.setStemDirection(dirsmo106112);
const smo106112 = new VF.Beam([smo104881,smo104882]);
const dirsmo106113 = smo104883.getStemDirection();
smo104883.setStemDirection(dirsmo106113);
smo104884.setStemDirection(dirsmo106113);
const smo106113 = new VF.Beam([smo104883,smo104884]);
 
// formatting measures in staff group smo99711
fmtsmo10220785.format([smo102207v0,smo104898v0], 281);
const stavesmo102207 = new VF.Stave(368, 1777, 295);
stavesmo102207.setAttribute('id', 'stavesmo102207');
stavesmo102207.setBegBarType(VF.Barline.type.NONE);
stavesmo102207.setContext(context);
stavesmo102207.draw();
smo102207v0.draw(context, stavesmo102207);
smo106108.setContext(context);
smo106108.draw();
smo106109.setContext(context);
smo106109.draw();
const stavesmo104898 = new VF.Stave(368, 1921, 295);
stavesmo104898.setAttribute('id', 'stavesmo104898');
stavesmo104898.setBegBarType(VF.Barline.type.NONE);
stavesmo104898.setContext(context);
stavesmo104898.draw();
smo104898v0.draw(context, stavesmo104898);
smo106112.setContext(context);
smo106112.draw();
smo106113.setContext(context);
smo106113.draw();
const fmtsmo10222986 = new VF.Formatter();
//
// voices and notes for stave 0 86
const smo102229v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102229v0ar = [];
const smo102208 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo102208.setAttribute('id', 'smo102208');
smo102229v0ar.push(smo102208);
const smo102209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102209.setAttribute('id', 'smo102209');
smo102229v0ar.push(smo102209);
const smo102210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n"]}'))
smo102210.setAttribute('id', 'smo102210');
smo102229v0ar.push(smo102210);
const smo102211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102211.setAttribute('id', 'smo102211');
smo102229v0ar.push(smo102211);
const smo102212 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo102212.setAttribute('id', 'smo102212');
smo102229v0ar.push(smo102212);
const smo102213 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo102213.setAttribute('id', 'smo102213');
smo102229v0ar.push(smo102213);
const smo102214 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo102214.setAttribute('id', 'smo102214');
smo102229v0ar.push(smo102214);
const smo102215 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102215.setAttribute('id', 'smo102215');
smo102229v0ar.push(smo102215);
smo102229v0.addTickables(smo102229v0ar)
fmtsmo10222986.joinVoices([smo102229v0]);
const fmtsmo10491686 = new VF.Formatter();
//
// voices and notes for stave 1 86
const smo104916v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104916v0ar = [];
const smo104899 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo104899.setAttribute('id', 'smo104899');
smo104916v0ar.push(smo104899);
const smo104900 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo104900.setAttribute('id', 'smo104900');
smo104916v0ar.push(smo104900);
const smo104901 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo104901.setAttribute('id', 'smo104901');
smo104916v0ar.push(smo104901);
const smo104902 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo104902.setAttribute('id', 'smo104902');
smo104916v0ar.push(smo104902);
smo104916v0.addTickables(smo104916v0ar)
fmtsmo10491686.joinVoices([smo104916v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo106116 = smo102209.getStemDirection();
smo102209.setStemDirection(dirsmo106116);
smo102210.setStemDirection(dirsmo106116);
smo102211.setStemDirection(dirsmo106116);
const smo106116 = new VF.Beam([smo102209,smo102210,smo102211]);
const dirsmo106117 = smo102212.getStemDirection();
smo102212.setStemDirection(dirsmo106117);
smo102213.setStemDirection(dirsmo106117);
smo102214.setStemDirection(dirsmo106117);
smo102215.setStemDirection(dirsmo106117);
const smo106117 = new VF.Beam([smo102212,smo102213,smo102214,smo102215]);
const dirsmo106120 = smo104899.getStemDirection();
smo104899.setStemDirection(dirsmo106120);
smo104900.setStemDirection(dirsmo106120);
const smo106120 = new VF.Beam([smo104899,smo104900]);
const dirsmo106121 = smo104901.getStemDirection();
smo104901.setStemDirection(dirsmo106121);
smo104902.setStemDirection(dirsmo106121);
const smo106121 = new VF.Beam([smo104901,smo104902]);
 
// formatting measures in staff group smo99711
fmtsmo10222986.format([smo102229v0,smo104916v0], 281);
const stavesmo102229 = new VF.Stave(663, 1777, 295);
stavesmo102229.setAttribute('id', 'stavesmo102229');
stavesmo102229.setBegBarType(VF.Barline.type.NONE);
stavesmo102229.setContext(context);
stavesmo102229.draw();
smo102229v0.draw(context, stavesmo102229);
smo106116.setContext(context);
smo106116.draw();
smo106117.setContext(context);
smo106117.draw();
const stavesmo104916 = new VF.Stave(663, 1921, 295);
stavesmo104916.setAttribute('id', 'stavesmo104916');
stavesmo104916.setBegBarType(VF.Barline.type.NONE);
stavesmo104916.setContext(context);
stavesmo104916.draw();
smo104916v0.draw(context, stavesmo104916);
smo106120.setContext(context);
smo106120.draw();
smo106121.setContext(context);
smo106121.draw();
const fmtsmo10225087 = new VF.Formatter();
//
// voices and notes for stave 0 87
const smo102250v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102250v0ar = [];
const smo102230 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo102230.setAttribute('id', 'smo102230');
smo102250v0ar.push(smo102230);
const smo102231 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["ab/4/n"]}'))
smo102231.setAttribute('id', 'smo102231');
const smo1022310acc = new VF.Accidental('b');
smo102231.addModifier(smo1022310acc, 0);
smo102250v0ar.push(smo102231);
const smo102232 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo102232.setAttribute('id', 'smo102232');
const smo1022320acc = new VF.Accidental('n');
smo102232.addModifier(smo1022320acc, 0);
smo102250v0ar.push(smo102232);
const smo102233 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","gn/5/n"]}'))
smo102233.setAttribute('id', 'smo102233');
smo102250v0ar.push(smo102233);
const smo102234 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","gn/5/n"]}'))
smo102234.setAttribute('id', 'smo102234');
smo102250v0ar.push(smo102234);
const smo102235 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","fn/5/n"]}'))
smo102235.setAttribute('id', 'smo102235');
smo102250v0ar.push(smo102235);
const smo102236 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","cn/5/n"]}'))
smo102236.setAttribute('id', 'smo102236');
smo102250v0ar.push(smo102236);
smo102250v0.addTickables(smo102250v0ar)
fmtsmo10225087.joinVoices([smo102250v0]);
const fmtsmo10493487 = new VF.Formatter();
//
// voices and notes for stave 1 87
const smo104934v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104934v0ar = [];
const smo104917 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo104917.setAttribute('id', 'smo104917');
smo104934v0ar.push(smo104917);
const smo104918 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo104918.setAttribute('id', 'smo104918');
smo104934v0ar.push(smo104918);
const smo104919 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/2/n","en/3/n"]}'))
smo104919.setAttribute('id', 'smo104919');
smo104934v0ar.push(smo104919);
const smo104920 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo104920.setAttribute('id', 'smo104920');
smo104934v0ar.push(smo104920);
smo104934v0.addTickables(smo104934v0ar)
fmtsmo10493487.joinVoices([smo104934v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo106124 = smo102230.getStemDirection();
smo102230.setStemDirection(dirsmo106124);
smo102231.setStemDirection(dirsmo106124);
smo102232.setStemDirection(dirsmo106124);
smo102233.setStemDirection(dirsmo106124);
const smo106124 = new VF.Beam([smo102230,smo102231,smo102232,smo102233]);
const dirsmo106125 = smo102234.getStemDirection();
smo102234.setStemDirection(dirsmo106125);
smo102235.setStemDirection(dirsmo106125);
smo102236.setStemDirection(dirsmo106125);
const smo106125 = new VF.Beam([smo102234,smo102235,smo102236]);
const dirsmo106128 = smo104917.getStemDirection();
smo104917.setStemDirection(dirsmo106128);
smo104918.setStemDirection(dirsmo106128);
const smo106128 = new VF.Beam([smo104917,smo104918]);
const dirsmo106129 = smo104919.getStemDirection();
smo104919.setStemDirection(dirsmo106129);
smo104920.setStemDirection(dirsmo106129);
const smo106129 = new VF.Beam([smo104919,smo104920]);
 
// formatting measures in staff group smo99711
fmtsmo10225087.format([smo102250v0,smo104934v0], 281);
const stavesmo102250 = new VF.Stave(958, 1777, 295);
stavesmo102250.setAttribute('id', 'stavesmo102250');
stavesmo102250.setBegBarType(VF.Barline.type.NONE);
stavesmo102250.setContext(context);
stavesmo102250.draw();
smo102250v0.draw(context, stavesmo102250);
smo106124.setContext(context);
smo106124.draw();
smo106125.setContext(context);
smo106125.draw();
const stavesmo104934 = new VF.Stave(958, 1921, 295);
stavesmo104934.setAttribute('id', 'stavesmo104934');
stavesmo104934.setBegBarType(VF.Barline.type.NONE);
stavesmo104934.setContext(context);
stavesmo104934.draw();
smo104934v0.draw(context, stavesmo104934);
smo106128.setContext(context);
smo106128.draw();
smo106129.setContext(context);
smo106129.draw();
const fmtsmo10227288 = new VF.Formatter();
//
// voices and notes for stave 0 88
const smo102272v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102272v0ar = [];
const smo102251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n"]}'))
smo102251.setAttribute('id', 'smo102251');
smo102272v0ar.push(smo102251);
const smo102252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/5/n"]}'))
smo102252.setAttribute('id', 'smo102252');
const smo1022520acc = new VF.Accidental('b');
smo102252.addModifier(smo1022520acc, 0);
smo102272v0ar.push(smo102252);
const smo102253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo102253.setAttribute('id', 'smo102253');
const smo1022530acc = new VF.Accidental('n');
smo102253.addModifier(smo1022530acc, 0);
smo102272v0ar.push(smo102253);
const smo102254 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo102254.setAttribute('id', 'smo102254');
smo102272v0ar.push(smo102254);
const smo102255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo102255.setAttribute('id', 'smo102255');
smo102272v0ar.push(smo102255);
const smo102256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/6/n"]}'))
smo102256.setAttribute('id', 'smo102256');
smo102272v0ar.push(smo102256);
const smo102257 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo102257.setAttribute('id', 'smo102257');
smo102272v0ar.push(smo102257);
const smo102258 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo102258.setAttribute('id', 'smo102258');
smo102272v0ar.push(smo102258);
smo102272v0.addTickables(smo102272v0ar)
fmtsmo10227288.joinVoices([smo102272v0]);
const fmtsmo10495288 = new VF.Formatter();
//
// voices and notes for stave 1 88
const smo104952v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104952v0ar = [];
const smo104935 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo104935.setAttribute('id', 'smo104935');
smo104952v0ar.push(smo104935);
const smo104936 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo104936.setAttribute('id', 'smo104936');
smo104952v0ar.push(smo104936);
const smo104937 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gb/3/n","cn/4/n","eb/4/n"]}'))
smo104937.setAttribute('id', 'smo104937');
const smo1049370acc = new VF.Accidental('b');
smo104937.addModifier(smo1049370acc, 0);
const smo1049372acc = new VF.Accidental('b');
smo104937.addModifier(smo1049372acc, 2);
smo104952v0ar.push(smo104937);
const smo104938 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo104938.setAttribute('id', 'smo104938');
const smo1049380acc = new VF.Accidental('n');
smo104938.addModifier(smo1049380acc, 0);
const smo1049382acc = new VF.Accidental('n');
smo104938.addModifier(smo1049382acc, 2);
smo104952v0ar.push(smo104938);
smo104952v0.addTickables(smo104952v0ar)
fmtsmo10495288.joinVoices([smo104952v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo106132 = smo102251.getStemDirection();
smo102251.setStemDirection(dirsmo106132);
smo102252.setStemDirection(dirsmo106132);
smo102253.setStemDirection(dirsmo106132);
smo102254.setStemDirection(dirsmo106132);
const smo106132 = new VF.Beam([smo102251,smo102252,smo102253,smo102254]);
const dirsmo106133 = smo102255.getStemDirection();
smo102255.setStemDirection(dirsmo106133);
smo102256.setStemDirection(dirsmo106133);
smo102257.setStemDirection(dirsmo106133);
smo102258.setStemDirection(dirsmo106133);
const smo106133 = new VF.Beam([smo102255,smo102256,smo102257,smo102258]);
const dirsmo106136 = smo104935.getStemDirection();
smo104935.setStemDirection(dirsmo106136);
smo104936.setStemDirection(dirsmo106136);
const smo106136 = new VF.Beam([smo104935,smo104936]);
const dirsmo106137 = smo104937.getStemDirection();
smo104937.setStemDirection(dirsmo106137);
smo104938.setStemDirection(dirsmo106137);
const smo106137 = new VF.Beam([smo104937,smo104938]);
 
// formatting measures in staff group smo99711
fmtsmo10227288.format([smo102272v0,smo104952v0], 281);
const stavesmo102272 = new VF.Stave(1253, 1777, 295);
stavesmo102272.setAttribute('id', 'stavesmo102272');
stavesmo102272.setBegBarType(VF.Barline.type.NONE);
stavesmo102272.setContext(context);
stavesmo102272.draw();
smo102272v0.draw(context, stavesmo102272);
smo106132.setContext(context);
smo106132.draw();
smo106133.setContext(context);
smo106133.draw();
const stavesmo104952 = new VF.Stave(1253, 1921, 295);
stavesmo104952.setAttribute('id', 'stavesmo104952');
stavesmo104952.setBegBarType(VF.Barline.type.NONE);
stavesmo104952.setContext(context);
stavesmo104952.draw();
smo104952v0.draw(context, stavesmo104952);
smo106136.setContext(context);
smo106136.draw();
smo106137.setContext(context);
smo106137.draw();
const fmtsmo10229189 = new VF.Formatter();
//
// voices and notes for stave 0 89
const smo102291v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102291v0ar = [];
const smo102273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n","cn/5/n"]}'))
smo102273.setAttribute('id', 'smo102273');
const smo1022730acc = new VF.Accidental('b');
smo102273.addModifier(smo1022730acc, 0);
smo102291v0ar.push(smo102273);
const smo102274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n","cn/5/n"]}'))
smo102274.setAttribute('id', 'smo102274');
smo102291v0ar.push(smo102274);
const smo102275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","bn/4/n","en/5/n"]}'))
smo102275.setAttribute('id', 'smo102275');
smo102291v0ar.push(smo102275);
const smo102276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","bn/4/n","dn/5/n"]}'))
smo102276.setAttribute('id', 'smo102276');
smo102291v0ar.push(smo102276);
const smo102277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n","cn/5/n"]}'))
smo102277.setAttribute('id', 'smo102277');
const smo1022771acc = new VF.Accidental('n');
smo102277.addModifier(smo1022771acc, 1);
smo102291v0ar.push(smo102277);
smo102291v0.addTickables(smo102291v0ar)
fmtsmo10229189.joinVoices([smo102291v0]);
const fmtsmo10497089 = new VF.Formatter();
//
// voices and notes for stave 1 89
const smo104970v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104970v0ar = [];
const smo104953 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/2/n","an/3/n"]}'))
smo104953.setAttribute('id', 'smo104953');
smo104970v0ar.push(smo104953);
const smo104954 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo104954.setAttribute('id', 'smo104954');
smo104970v0ar.push(smo104954);
const smo104955 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo104955.setAttribute('id', 'smo104955');
smo104970v0ar.push(smo104955);
const smo104956 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n","bn/3/n"]}'))
smo104956.setAttribute('id', 'smo104956');
smo104970v0ar.push(smo104956);
smo104970v0.addTickables(smo104970v0ar)
fmtsmo10497089.joinVoices([smo104970v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo106140 = smo102273.getStemDirection();
smo102273.setStemDirection(dirsmo106140);
smo102274.setStemDirection(dirsmo106140);
const smo106140 = new VF.Beam([smo102273,smo102274]);
const dirsmo106141 = smo102275.getStemDirection();
smo102275.setStemDirection(dirsmo106141);
smo102276.setStemDirection(dirsmo106141);
smo102277.setStemDirection(dirsmo106141);
const smo106141 = new VF.Beam([smo102275,smo102276,smo102277]);
const dirsmo106144 = smo104953.getStemDirection();
smo104953.setStemDirection(dirsmo106144);
smo104954.setStemDirection(dirsmo106144);
const smo106144 = new VF.Beam([smo104953,smo104954]);
const dirsmo106145 = smo104955.getStemDirection();
smo104955.setStemDirection(dirsmo106145);
smo104956.setStemDirection(dirsmo106145);
const smo106145 = new VF.Beam([smo104955,smo104956]);
 
// formatting measures in staff group smo99711
fmtsmo10229189.format([smo102291v0,smo104970v0], 281);
const stavesmo102291 = new VF.Stave(1548, 1777, 295);
stavesmo102291.setAttribute('id', 'stavesmo102291');
stavesmo102291.setBegBarType(VF.Barline.type.NONE);
stavesmo102291.setContext(context);
stavesmo102291.draw();
smo102291v0.draw(context, stavesmo102291);
smo106140.setContext(context);
smo106140.draw();
smo106141.setContext(context);
smo106141.draw();
const stavesmo104970 = new VF.Stave(1548, 1921, 295);
stavesmo104970.setAttribute('id', 'stavesmo104970');
stavesmo104970.setBegBarType(VF.Barline.type.NONE);
stavesmo104970.setContext(context);
stavesmo104970.draw();
smo104970v0.draw(context, stavesmo104970);
smo106144.setContext(context);
smo106144.draw();
smo106145.setContext(context);
smo106145.draw();
const rightsmo99711stavesmo1022911 = new VF.StaveConnector(stavesmo102291, stavesmo104970).setType(0);
rightsmo99711stavesmo1022911.setContext(context).draw();
const fmtsmo10231190 = new VF.Formatter();
//
// voices and notes for stave 0 90
const smo102311v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102311v0ar = [];
const smo102292 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n","cn/5/n"]}'))
smo102292.setAttribute('id', 'smo102292');
smo102311v0ar.push(smo102292);
const smo102293 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo102293.setAttribute('id', 'smo102293');
smo102311v0ar.push(smo102293);
const smo102294 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo102294.setAttribute('id', 'smo102294');
smo102311v0ar.push(smo102294);
const smo102295 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo102295.setAttribute('id', 'smo102295');
smo102311v0ar.push(smo102295);
const smo102296 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo102296.setAttribute('id', 'smo102296');
smo102311v0ar.push(smo102296);
smo102311v0.addTickables(smo102311v0ar)
fmtsmo10231190.joinVoices([smo102311v0]);
const fmtsmo10498890 = new VF.Formatter();
//
// voices and notes for stave 1 90
const smo104988v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104988v0ar = [];
const smo104971 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo104971.setAttribute('id', 'smo104971');
smo104988v0ar.push(smo104971);
const smo104972 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo104972.setAttribute('id', 'smo104972');
smo104988v0ar.push(smo104972);
const smo104973 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo104973.setAttribute('id', 'smo104973');
smo104988v0ar.push(smo104973);
smo104988v0.addTickables(smo104988v0ar)
fmtsmo10498890.joinVoices([smo104988v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo106152 = smo102292.getStemDirection();
smo102292.setStemDirection(dirsmo106152);
smo102293.setStemDirection(dirsmo106152);
smo102294.setStemDirection(dirsmo106152);
const smo106152 = new VF.Beam([smo102292,smo102293,smo102294]);
const dirsmo106153 = smo102295.getStemDirection();
smo102295.setStemDirection(dirsmo106153);
smo102296.setStemDirection(dirsmo106153);
const smo106153 = new VF.Beam([smo102295,smo102296]);
 
// formatting measures in staff group smo99711
fmtsmo10231190.format([smo102311v0,smo104988v0], 233);
const stavesmo102311 = new VF.Stave(73, 2089, 295);
stavesmo102311.setAttribute('id', 'stavesmo102311');
stavesmo102311.setBegBarType(1);
stavesmo102311.setEndBarType(5);
stavesmo102311.addClef('treble');
stavesmo102311.setContext(context);
stavesmo102311.draw();
smo102311v0.draw(context, stavesmo102311);
smo106152.setContext(context);
smo106152.draw();
smo106153.setContext(context);
smo106153.draw();
const stavesmo104988 = new VF.Stave(73, 2234, 295);
stavesmo104988.setAttribute('id', 'stavesmo104988');
stavesmo104988.setBegBarType(1);
stavesmo104988.setEndBarType(5);
stavesmo104988.addClef('bass');
stavesmo104988.setContext(context);
stavesmo104988.draw();
smo104988v0.draw(context, stavesmo104988);
const leftsmo99711stavesmo1023111 = new VF.StaveConnector(stavesmo102311, stavesmo104988).setType(3);
leftsmo99711stavesmo1023111.setContext(context).draw();
const fmtsmo10232991 = new VF.Formatter();
//
// voices and notes for stave 0 91
const smo102329v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102329v0ar = [];
const smo102312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n","cn/5/n"]}'))
smo102312.setAttribute('id', 'smo102312');
smo102329v0ar.push(smo102312);
const smo102313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","gn/5/n","cn/6/n"]}'))
smo102313.setAttribute('id', 'smo102313');
smo102329v0ar.push(smo102313);
const smo102314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo102314.setAttribute('id', 'smo102314');
smo102329v0ar.push(smo102314);
smo102329v0.addTickables(smo102329v0ar)
fmtsmo10232991.joinVoices([smo102329v0]);
const fmtsmo10500791 = new VF.Formatter();
//
// voices and notes for stave 1 91
const smo105007v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105007v0ar = [];
const smo104989 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo104989.setAttribute('id', 'smo104989');
smo105007v0ar.push(smo104989);
const smo104990 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo104990.setAttribute('id', 'smo104990');
smo105007v0ar.push(smo104990);
const smo104991 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo104991.setAttribute('id', 'smo104991');
smo105007v0ar.push(smo104991);
const smo104992 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo104992.setAttribute('id', 'smo104992');
smo105007v0ar.push(smo104992);
smo105007v0.addTickables(smo105007v0ar)
fmtsmo10500791.joinVoices([smo105007v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo106158 = smo104989.getStemDirection();
smo104989.setStemDirection(dirsmo106158);
smo104990.setStemDirection(dirsmo106158);
const smo106158 = new VF.Beam([smo104989,smo104990]);
 
// formatting measures in staff group smo99711
fmtsmo10232991.format([smo102329v0,smo105007v0], 281);
const stavesmo102329 = new VF.Stave(368, 2089, 295);
stavesmo102329.setAttribute('id', 'stavesmo102329');
stavesmo102329.setBegBarType(VF.Barline.type.NONE);
stavesmo102329.setContext(context);
stavesmo102329.draw();
smo102329v0.draw(context, stavesmo102329);
const stavesmo105007 = new VF.Stave(368, 2234, 295);
stavesmo105007.setAttribute('id', 'stavesmo105007');
stavesmo105007.setBegBarType(VF.Barline.type.NONE);
stavesmo105007.setEndBarType(3);
stavesmo105007.setContext(context);
stavesmo105007.draw();
smo105007v0.draw(context, stavesmo105007);
smo106158.setContext(context);
smo106158.draw();
// modifier from 0-67-0-0 to 0-67-0-0
const smo106955 = new VF.StaveHairpin({ first_note: smo101823, last_note: smo101823,
       firstNote: smo101823, lastNote: smo101823 });
smo106955.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -10,right_shift_px: 10 });
smo106955.setContext(context).setPosition(4).draw();
// modifier from 0-67-0-1 to 0-67-0-2
const smo106956 = new VF.StaveHairpin({ first_note: smo101824, last_note: smo101824,
       firstNote: smo101824, lastNote: smo101824 });
smo106956.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo106956.setContext(context).setPosition(4).draw();
// modifier from 0-60-0-3 to 0-60-0-4
const smo106957 = new VF.StaveTie({ first_note: smo101686, last_note: smo101687, 
          firstNote: smo101686, lastNote: smo101687, first_indices: [0], last_indices: [0]});
smo106957.setContext(context).draw();
// modifier from 0-62-0-2 to 0-62-0-3
const smo106958 = new VF.StaveTie({ first_note: smo101723, last_note: smo101724, 
          firstNote: smo101723, lastNote: smo101724, first_indices: [0,1], last_indices: [0,1]});
smo106958.setContext(context).draw();
// modifier from 0-64-0-2 to 0-64-0-3
const smo106959 = new VF.StaveTie({ first_note: smo101763, last_note: smo101764, 
          firstNote: smo101763, lastNote: smo101764, first_indices: [0,1], last_indices: [0,1]});
smo106959.setContext(context).draw();
// modifier from 0-65-0-0 to 0-65-0-1
const smo106960 = new VF.StaveTie({ first_note: smo101780, last_note: smo101781, 
          firstNote: smo101780, lastNote: smo101781, first_indices: [0,1,2], last_indices: [0,1,2]});
smo106960.setContext(context).draw();
// modifier from 0-66-0-2 to 0-66-0-3
const smo106961 = new VF.StaveTie({ first_note: smo101805, last_note: smo101806, 
          firstNote: smo101805, lastNote: smo101806, first_indices: [0], last_indices: [0]});
smo106961.setContext(context).draw();
// modifier from 0-68-0-2 to 0-68-0-3
const smo106962 = new VF.StaveTie({ first_note: smo101844, last_note: smo101845, 
          firstNote: smo101844, lastNote: smo101845, first_indices: [0,1], last_indices: [0,1]});
smo106962.setContext(context).draw();
// modifier from 0-71-0-2 to 0-71-0-3
const smo106963 = new VF.StaveTie({ first_note: smo101906, last_note: smo101907, 
          firstNote: smo101906, lastNote: smo101907, first_indices: [0], last_indices: [0]});
smo106963.setContext(context).draw();
// modifier from 0-72-0-3 to 0-72-0-4
const smo106964 = new VF.StaveTie({ first_note: smo101928, last_note: smo101929, 
          firstNote: smo101928, lastNote: smo101929, first_indices: [0], last_indices: [0]});
smo106964.setContext(context).draw();
// modifier from 0-73-0-4 to 0-74-0-0
const smo106965 = new VF.StaveTie({ first_note: smo101951, last_note: smo101966, 
          firstNote: smo101951, lastNote: smo101966, first_indices: [0,1], last_indices: [0,1]});
smo106965.setContext(context).draw();
// modifier from 0-75-0-2 to 0-75-0-3
const smo106966 = new VF.StaveTie({ first_note: smo101985, last_note: smo101986, 
          firstNote: smo101985, lastNote: smo101986, first_indices: [0,1], last_indices: [0,1]});
smo106966.setContext(context).draw();
// modifier from 0-77-0-2 to 0-77-0-3
const smo106967 = new VF.StaveTie({ first_note: smo102027, last_note: smo102028, 
          firstNote: smo102027, lastNote: smo102028, first_indices: [0,1], last_indices: [0,1]});
smo106967.setContext(context).draw();
// modifier from 0-79-0-2 to 0-79-0-3
const smo106968 = new VF.StaveTie({ first_note: smo102069, last_note: smo102070, 
          firstNote: smo102069, lastNote: smo102070, first_indices: [0,1], last_indices: [0,1]});
smo106968.setContext(context).draw();
// modifier from 0-83-0-2 to 0-83-0-3
const smo106969 = new VF.StaveTie({ first_note: smo102148, last_note: smo102149, 
          firstNote: smo102148, lastNote: smo102149, first_indices: [0,1], last_indices: [0,1]});
smo106969.setContext(context).draw();
// modifier from 0-85-0-2 to 0-85-0-3
const smo106970 = new VF.StaveTie({ first_note: smo102190, last_note: smo102191, 
          firstNote: smo102190, lastNote: smo102191, first_indices: [0,1], last_indices: [0,1]});
smo106970.setContext(context).draw();
// modifier from 0-87-0-3 to 0-87-0-4
const smo106971 = new VF.StaveTie({ first_note: smo102233, last_note: smo102234, 
          firstNote: smo102233, lastNote: smo102234, first_indices: [0,1], last_indices: [0,1]});
smo106971.setContext(context).draw();
// modifier from 0-88-0-3 to 0-88-0-4
const smo106972 = new VF.StaveTie({ first_note: smo102254, last_note: smo102255, 
          firstNote: smo102254, lastNote: smo102255, first_indices: [0], last_indices: [0]});
smo106972.setContext(context).draw();
// modifier from 0-89-0-4 to 0-90-0-0
const smo106973 = new VF.StaveTie({ first_note: smo102277, last_note: null, 
          firstNote: smo102277, lastNote: null, first_indices: [0,1,2], last_indices: [0,1,2]});
smo106973.setContext(context).draw();
// modifier from 0-89-0-4 to 0-90-0-0
const smo106974 = new VF.StaveTie({ first_note: null, last_note: smo102292, 
          firstNote: null, lastNote: smo102292, first_indices: [0,1,2], last_indices: [0,1,2]});
smo106974.setContext(context).draw();
const smo101871smo101884 = new VF.Volta(5, '1', 958, 20);
smo101871smo101884.setContext(context).draw(stavesmo101884, -1 * 0);
const smo101889smo101903 = new VF.Volta(5, '2', 1253, 20);
smo101889smo101903.setContext(context).draw(stavesmo101903, -1 * 0);
const smo102298smo102311 = new VF.Volta(5, '1', 73, 20);
smo102298smo102311.setContext(context).draw(stavesmo102311, -1 * 0);
const smo102315smo102329 = new VF.Volta(5, '2', 368, 20);
smo102315smo102329.setContext(context).draw(stavesmo102329, -1 * 0);
}
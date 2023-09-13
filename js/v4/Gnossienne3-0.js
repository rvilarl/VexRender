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
const fmtsmo779680 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo77968v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo77968v0ar = [];
const smo77916 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo77916.setAttribute('id', 'smo77916');
smo77968v0ar.push(smo77916);
const smo77918 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo77918.setAttribute('id', 'smo77918');
smo77968v0ar.push(smo77918);
const smo77919 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo77919.setAttribute('id', 'smo77919');
const smo779190acc = new VF.Accidental('#');
smo77919.addModifier(smo779190acc, 0);
smo77968v0ar.push(smo77919);
const smo77920 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo77920.setAttribute('id', 'smo77920');
smo77968v0ar.push(smo77920);
const smo77921 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo77921.setAttribute('id', 'smo77921');
const smo779210acc = new VF.Accidental('#');
smo77921.addModifier(smo779210acc, 0);
smo77968v0ar.push(smo77921);
const smo77922 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo77922.setAttribute('id', 'smo77922');
smo77968v0ar.push(smo77922);
const smo77923 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo77923.setAttribute('id', 'smo77923');
smo77968v0ar.push(smo77923);
const smo77924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo77924.setAttribute('id', 'smo77924');
smo77968v0ar.push(smo77924);
const smo77925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo77925.setAttribute('id', 'smo77925');
smo77968v0ar.push(smo77925);
const smo77926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo77926.setAttribute('id', 'smo77926');
smo77968v0ar.push(smo77926);
const smo77927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo77927.setAttribute('id', 'smo77927');
smo77968v0ar.push(smo77927);
const smo77928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo77928.setAttribute('id', 'smo77928');
smo77968v0ar.push(smo77928);
const smo77929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo77929.setAttribute('id', 'smo77929');
smo77968v0ar.push(smo77929);
const smo77930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo77930.setAttribute('id', 'smo77930');
smo77968v0ar.push(smo77930);
const smo77931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo77931.setAttribute('id', 'smo77931');
smo77968v0ar.push(smo77931);
const smo77932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo77932.setAttribute('id', 'smo77932');
smo77968v0ar.push(smo77932);
const smo77933 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo77933.setAttribute('id', 'smo77933');
smo77968v0ar.push(smo77933);
const smo77934 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo77934.setAttribute('id', 'smo77934');
smo77968v0ar.push(smo77934);
const smo77935 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo77935.setAttribute('id', 'smo77935');
smo77968v0ar.push(smo77935);
const smo77936 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo77936.setAttribute('id', 'smo77936');
smo77968v0ar.push(smo77936);
const smo77937 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo77937.setAttribute('id', 'smo77937');
smo77968v0ar.push(smo77937);
const smo77938 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo77938.setAttribute('id', 'smo77938');
smo77968v0ar.push(smo77938);
const smo77939 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo77939.setAttribute('id', 'smo77939');
smo77968v0ar.push(smo77939);
const smo77940 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo77940.setAttribute('id', 'smo77940');
smo77968v0ar.push(smo77940);
const smo77941 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo77941.setAttribute('id', 'smo77941');
smo77968v0ar.push(smo77941);
const smo77942 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo77942.setAttribute('id', 'smo77942');
smo77968v0ar.push(smo77942);
smo77968v0.addTickables(smo77968v0ar)
fmtsmo779680.joinVoices([smo77968v0]);
const smo77968v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo77968v1ar = [];
const smo77943 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo77943.setAttribute('id', 'smo77943');
smo77943.setStyle({ fillStyle: '#aaaaaa7f' });
smo77968v1ar.push(smo77943);
const smo77944 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo77944.setAttribute('id', 'smo77944');
smo77944.setStyle({ fillStyle: "#115511" });
smo77968v1ar.push(smo77944);
const smo77945 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo77945.setAttribute('id', 'smo77945');
smo77945.setStyle({ fillStyle: "#115511" });
smo77968v1ar.push(smo77945);
const smo77946 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo77946.setAttribute('id', 'smo77946');
smo77946.setStyle({ fillStyle: '#aaaaaa7f' });
smo77968v1ar.push(smo77946);
const smo77947 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo77947.setAttribute('id', 'smo77947');
smo77947.setStyle({ fillStyle: "#115511" });
smo77968v1ar.push(smo77947);
const smo77948 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo77948.setAttribute('id', 'smo77948');
smo77948.setStyle({ fillStyle: "#115511" });
smo77968v1ar.push(smo77948);
const smo77949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo77949.setAttribute('id', 'smo77949');
smo77949.setStyle({ fillStyle: '#aaaaaa7f' });
smo77968v1ar.push(smo77949);
const smo77950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo77950.setAttribute('id', 'smo77950');
smo77950.setStyle({ fillStyle: '#aaaaaa7f' });
smo77968v1ar.push(smo77950);
const smo77951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo77951.setAttribute('id', 'smo77951');
smo77951.setStyle({ fillStyle: "#115511" });
smo77968v1ar.push(smo77951);
const smo77952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo77952.setAttribute('id', 'smo77952');
smo77952.setStyle({ fillStyle: "#115511" });
smo77968v1ar.push(smo77952);
smo77968v1.addTickables(smo77968v1ar)
fmtsmo779680.joinVoices([smo77968v1]);
const fmtsmo784750 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo78475v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78475v0ar = [];
const smo78443 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78443.setAttribute('id', 'smo78443');
smo78475v0ar.push(smo78443);
const smo78444 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78444.setAttribute('id', 'smo78444');
smo78444.setStyle({ fillStyle: '#aaaaaa7f' });
smo78444.addModifier(new VF.Dot(), 0);
smo78475v0ar.push(smo78444);
const smo78445 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78445.setAttribute('id', 'smo78445');
smo78475v0ar.push(smo78445);
const smo78446 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78446.setAttribute('id', 'smo78446');
smo78446.setStyle({ fillStyle: '#aaaaaa7f' });
smo78446.addModifier(new VF.Dot(), 0);
smo78475v0ar.push(smo78446);
const smo78447 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78447.setAttribute('id', 'smo78447');
smo78475v0ar.push(smo78447);
const smo78448 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78448.setAttribute('id', 'smo78448');
smo78475v0ar.push(smo78448);
const smo78449 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78449.setAttribute('id', 'smo78449');
smo78475v0ar.push(smo78449);
const smo78450 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78450.setAttribute('id', 'smo78450');
smo78475v0ar.push(smo78450);
const smo78451 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78451.setAttribute('id', 'smo78451');
smo78475v0ar.push(smo78451);
const smo78452 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78452.setAttribute('id', 'smo78452');
smo78475v0ar.push(smo78452);
const smo78453 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78453.setAttribute('id', 'smo78453');
smo78475v0ar.push(smo78453);
const smo78454 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78454.setAttribute('id', 'smo78454');
smo78454.setStyle({ fillStyle: '#aaaaaa7f' });
smo78454.addModifier(new VF.Dot(), 0);
smo78475v0ar.push(smo78454);
smo78475v0.addTickables(smo78475v0ar)
fmtsmo784750.joinVoices([smo78475v0]);
const smo78475v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78475v1ar = [];
const smo78455 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo78455.setAttribute('id', 'smo78455');
smo78455.setStyle({ fillStyle: "#115511" });
smo78475v1ar.push(smo78455);
const smo78456 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo78456.setAttribute('id', 'smo78456');
smo78456.setStyle({ fillStyle: "#115511" });
smo78475v1ar.push(smo78456);
const smo78457 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo78457.setAttribute('id', 'smo78457');
smo78457.setStyle({ fillStyle: "#115511" });
smo78475v1ar.push(smo78457);
const smo78458 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo78458.setAttribute('id', 'smo78458');
smo78458.setStyle({ fillStyle: "#115511" });
smo78475v1ar.push(smo78458);
const smo78459 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo78459.setAttribute('id', 'smo78459');
smo78459.setStyle({ fillStyle: "#115511" });
smo78475v1ar.push(smo78459);
smo78475v1.addTickables(smo78475v1ar)
fmtsmo784750.joinVoices([smo78475v1]);
// create beam groups and tuplets for format grp smo78840 before formatting
const dirsmo80042 = smo77916.getStemDirection();
smo77916.setStemDirection(dirsmo80042);
smo77918.setStemDirection(dirsmo80042);
smo77919.setStemDirection(dirsmo80042);
smo77920.setStemDirection(dirsmo80042);
const smo80042 = new VF.Beam([smo77916,smo77918,smo77919,smo77920]);
const dirsmo80043 = smo77921.getStemDirection();
smo77921.setStemDirection(dirsmo80043);
smo77922.setStemDirection(dirsmo80043);
const smo80043 = new VF.Beam([smo77921,smo77922]);
const dirsmo80044 = smo77925.getStemDirection();
smo77925.setStemDirection(dirsmo80044);
smo77926.setStemDirection(dirsmo80044);
const smo80044 = new VF.Beam([smo77925,smo77926]);
const dirsmo80045 = smo77927.getStemDirection();
smo77927.setStemDirection(dirsmo80045);
smo77928.setStemDirection(dirsmo80045);
smo77929.setStemDirection(dirsmo80045);
smo77930.setStemDirection(dirsmo80045);
const smo80045 = new VF.Beam([smo77927,smo77928,smo77929,smo77930]);
const dirsmo80046 = smo77931.getStemDirection();
smo77931.setStemDirection(dirsmo80046);
smo77932.setStemDirection(dirsmo80046);
const smo80046 = new VF.Beam([smo77931,smo77932]);
const dirsmo80047 = smo77936.getStemDirection();
smo77936.setStemDirection(dirsmo80047);
smo77937.setStemDirection(dirsmo80047);
smo77938.setStemDirection(dirsmo80047);
smo77939.setStemDirection(dirsmo80047);
const smo80047 = new VF.Beam([smo77936,smo77937,smo77938,smo77939]);
const dirsmo80048 = smo77940.getStemDirection();
smo77940.setStemDirection(dirsmo80048);
smo77941.setStemDirection(dirsmo80048);
const smo80048 = new VF.Beam([smo77940,smo77941]);
 
// formatting measures in staff group smo78840
fmtsmo779680.format([smo77968v0,smo77968v1,smo78475v0,smo78475v1], 1094);
const stavesmo77968 = new VF.Stave(103, 187, 1174);
stavesmo77968.setAttribute('id', 'stavesmo77968');
stavesmo77968.setBegBarType(1);
stavesmo77968.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":60,"name":"Lent"}'), -1 * 35);
stavesmo77968.addClef('treble');
stavesmo77968.addTimeSignature('4/4');
stavesmo77968.setContext(context);
stavesmo77968.draw();
smo77968v0.draw(context, stavesmo77968);
smo77968v1.draw(context, stavesmo77968);
smo80042.setContext(context);
smo80042.draw();
smo80043.setContext(context);
smo80043.draw();
smo80044.setContext(context);
smo80044.draw();
smo80045.setContext(context);
smo80045.draw();
smo80046.setContext(context);
smo80046.draw();
smo80047.setContext(context);
smo80047.draw();
smo80048.setContext(context);
smo80048.draw();
const stavesmo78475 = new VF.Stave(103, 330, 1174);
stavesmo78475.setAttribute('id', 'stavesmo78475');
stavesmo78475.setBegBarType(1);
stavesmo78475.addClef('bass');
stavesmo78475.addTimeSignature('4/4');
stavesmo78475.setContext(context);
stavesmo78475.draw();
smo78475v0.draw(context, stavesmo78475);
smo78475v1.draw(context, stavesmo78475);
const leftsmo78840stavesmo779681 = new VF.StaveConnector(stavesmo77968, stavesmo78475).setType(3);
leftsmo78840stavesmo779681.setContext(context).draw();
const fmtsmo780131 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo78013v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78013v0ar = [];
const smo77969 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo77969.setAttribute('id', 'smo77969');
smo78013v0ar.push(smo77969);
const smo77970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo77970.setAttribute('id', 'smo77970');
smo78013v0ar.push(smo77970);
const smo77971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo77971.setAttribute('id', 'smo77971');
smo78013v0ar.push(smo77971);
const smo77972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo77972.setAttribute('id', 'smo77972');
const smo779720acc = new VF.Accidental('#');
smo77972.addModifier(smo779720acc, 0);
smo78013v0ar.push(smo77972);
const smo77973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo77973.setAttribute('id', 'smo77973');
smo78013v0ar.push(smo77973);
const smo77974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo77974.setAttribute('id', 'smo77974');
smo78013v0ar.push(smo77974);
const smo77975 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo77975.setAttribute('id', 'smo77975');
smo78013v0ar.push(smo77975);
const smo77976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo77976.setAttribute('id', 'smo77976');
smo78013v0ar.push(smo77976);
const smo77977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo77977.setAttribute('id', 'smo77977');
smo78013v0ar.push(smo77977);
const smo77978 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo77978.setAttribute('id', 'smo77978');
smo78013v0ar.push(smo77978);
const smo77979 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo77979.setAttribute('id', 'smo77979');
smo78013v0ar.push(smo77979);
const smo77980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
const smo77981 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["bn/4"],"slash":false}'))
smo77981.setAttribute('id', 'smo77981');
const ggrpsmo77980 = new VF.GraceNoteGroup([smo77981]);
ggrpsmo77980.beamNotes();
smo77980.addModifier(ggrpsmo77980, 0);
smo77980.setAttribute('id', 'smo77980');
const smo779800acc = new VF.Accidental('n');
smo77980.addModifier(smo779800acc, 0);
smo78013v0ar.push(smo77980);
const smo77982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo77982.setAttribute('id', 'smo77982');
smo78013v0ar.push(smo77982);
const smo77983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo77983.setAttribute('id', 'smo77983');
smo78013v0ar.push(smo77983);
const smo77984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo77984.setAttribute('id', 'smo77984');
smo78013v0ar.push(smo77984);
const smo77985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo77985.setAttribute('id', 'smo77985');
smo78013v0ar.push(smo77985);
const smo77986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo77986.setAttribute('id', 'smo77986');
smo78013v0ar.push(smo77986);
const smo77987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo77987.setAttribute('id', 'smo77987');
smo78013v0ar.push(smo77987);
const smo77988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo77988.setAttribute('id', 'smo77988');
smo78013v0ar.push(smo77988);
const smo77989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo77989.setAttribute('id', 'smo77989');
smo78013v0ar.push(smo77989);
const smo77990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo77990.setAttribute('id', 'smo77990');
smo78013v0ar.push(smo77990);
const smo77991 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
const smo77992 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["bn/4"],"slash":false}'))
smo77992.setAttribute('id', 'smo77992');
const ggrpsmo77991 = new VF.GraceNoteGroup([smo77992]);
ggrpsmo77991.beamNotes();
smo77991.addModifier(ggrpsmo77991, 0);
smo77991.setAttribute('id', 'smo77991');
smo78013v0ar.push(smo77991);
smo78013v0.addTickables(smo78013v0ar)
fmtsmo780131.joinVoices([smo78013v0]);
const smo78013v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78013v1ar = [];
const smo77993 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo77993.setAttribute('id', 'smo77993');
smo77993.setStyle({ fillStyle: '#aaaaaa7f' });
smo78013v1ar.push(smo77993);
const smo77994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo77994.setAttribute('id', 'smo77994');
smo77994.setStyle({ fillStyle: "#115511" });
smo78013v1ar.push(smo77994);
const smo77995 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo77995.setAttribute('id', 'smo77995');
smo77995.setStyle({ fillStyle: "#115511" });
smo78013v1ar.push(smo77995);
const smo77996 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2dddd","dots":4,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo77996.setAttribute('id', 'smo77996');
smo77996.setStyle({ fillStyle: '#aaaaaa7f' });
smo77996.addModifier(new VF.Dot(), 0);
smo77996.addModifier(new VF.Dot(), 0);
smo77996.addModifier(new VF.Dot(), 0);
smo77996.addModifier(new VF.Dot(), 0);
smo78013v1ar.push(smo77996);
const smo77997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo77997.setAttribute('id', 'smo77997');
smo77997.setStyle({ fillStyle: '#aaaaaa7f' });
smo78013v1ar.push(smo77997);
smo78013v1.addTickables(smo78013v1ar)
fmtsmo780131.joinVoices([smo78013v1]);
const fmtsmo785101 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo78510v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78510v0ar = [];
const smo78476 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78476.setAttribute('id', 'smo78476');
smo78510v0ar.push(smo78476);
const smo78477 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78477.setAttribute('id', 'smo78477');
smo78477.setStyle({ fillStyle: '#aaaaaa7f' });
smo78477.addModifier(new VF.Dot(), 0);
smo78510v0ar.push(smo78477);
const smo78478 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78478.setAttribute('id', 'smo78478');
smo78510v0ar.push(smo78478);
const smo78479 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78479.setAttribute('id', 'smo78479');
smo78510v0ar.push(smo78479);
const smo78480 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78480.setAttribute('id', 'smo78480');
smo78510v0ar.push(smo78480);
const smo78481 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78481.setAttribute('id', 'smo78481');
smo78510v0ar.push(smo78481);
const smo78482 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo78482.setAttribute('id', 'smo78482');
smo78510v0ar.push(smo78482);
const smo78483 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo78483.setAttribute('id', 'smo78483');
smo78510v0ar.push(smo78483);
const smo78484 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78484.setAttribute('id', 'smo78484');
smo78510v0ar.push(smo78484);
const smo78485 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/3/n","bn/3/n","en/4/n"]}'))
smo78485.setAttribute('id', 'smo78485');
const smo784850acc = new VF.Accidental('#');
smo78485.addModifier(smo784850acc, 0);
smo78510v0ar.push(smo78485);
const smo78486 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/3/n","bn/3/n","en/4/n"]}'))
smo78486.setAttribute('id', 'smo78486');
smo78510v0ar.push(smo78486);
const smo78487 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78487.setAttribute('id', 'smo78487');
smo78510v0ar.push(smo78487);
const smo78488 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo78488.setAttribute('id', 'smo78488');
smo78510v0ar.push(smo78488);
const smo78489 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo78489.setAttribute('id', 'smo78489');
smo78510v0ar.push(smo78489);
smo78510v0.addTickables(smo78510v0ar)
fmtsmo785101.joinVoices([smo78510v0]);
const smo78510v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78510v1ar = [];
const smo78490 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo78490.setAttribute('id', 'smo78490');
smo78490.setStyle({ fillStyle: "#115511" });
smo78510v1ar.push(smo78490);
const smo78491 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo78491.setAttribute('id', 'smo78491');
smo78491.setStyle({ fillStyle: "#115511" });
smo78510v1ar.push(smo78491);
const smo78492 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
smo78492.setAttribute('id', 'smo78492');
smo78492.setStyle({ fillStyle: "#115511" });
smo78510v1ar.push(smo78492);
const smo78493 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo78493.setAttribute('id', 'smo78493');
smo78493.setStyle({ fillStyle: "#115511" });
smo78510v1ar.push(smo78493);
const smo78494 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
smo78494.setAttribute('id', 'smo78494');
smo78494.setStyle({ fillStyle: "#115511" });
smo78510v1ar.push(smo78494);
smo78510v1.addTickables(smo78510v1ar)
fmtsmo785101.joinVoices([smo78510v1]);
// create beam groups and tuplets for format grp smo78840 before formatting
const dirsmo80063 = smo77970.getStemDirection();
smo77970.setStemDirection(dirsmo80063);
smo77971.setStemDirection(dirsmo80063);
const smo80063 = new VF.Beam([smo77970,smo77971]);
const dirsmo80064 = smo77972.getStemDirection();
smo77972.setStemDirection(dirsmo80064);
smo77973.setStemDirection(dirsmo80064);
smo77974.setStemDirection(dirsmo80064);
smo77975.setStemDirection(dirsmo80064);
const smo80064 = new VF.Beam([smo77972,smo77973,smo77974,smo77975]);
const dirsmo80065 = smo77976.getStemDirection();
smo77976.setStemDirection(dirsmo80065);
smo77977.setStemDirection(dirsmo80065);
const smo80065 = new VF.Beam([smo77976,smo77977]);
const dirsmo80066 = smo77982.getStemDirection();
smo77982.setStemDirection(dirsmo80066);
smo77983.setStemDirection(dirsmo80066);
const smo80066 = new VF.Beam([smo77982,smo77983]);
const dirsmo80067 = smo77984.getStemDirection();
smo77984.setStemDirection(dirsmo80067);
smo77985.setStemDirection(dirsmo80067);
const smo80067 = new VF.Beam([smo77984,smo77985]);
const dirsmo80068 = smo77987.getStemDirection();
smo77987.setStemDirection(dirsmo80068);
smo77988.setStemDirection(dirsmo80068);
const smo80068 = new VF.Beam([smo77987,smo77988]);
 
// formatting measures in staff group smo78840
fmtsmo780131.format([smo78013v0,smo78013v1,smo78510v0,smo78510v1], 1117);
const stavesmo78013 = new VF.Stave(103, 490, 1174);
stavesmo78013.setAttribute('id', 'stavesmo78013');
stavesmo78013.setBegBarType(1);
stavesmo78013.addClef('treble');
stavesmo78013.setContext(context);
stavesmo78013.draw();
smo78013v0.draw(context, stavesmo78013);
smo78013v1.draw(context, stavesmo78013);
smo80063.setContext(context);
smo80063.draw();
smo80064.setContext(context);
smo80064.draw();
smo80065.setContext(context);
smo80065.draw();
smo80066.setContext(context);
smo80066.draw();
smo80067.setContext(context);
smo80067.draw();
smo80068.setContext(context);
smo80068.draw();
const stavesmo78510 = new VF.Stave(103, 638, 1174);
stavesmo78510.setAttribute('id', 'stavesmo78510');
stavesmo78510.setBegBarType(1);
stavesmo78510.addClef('bass');
stavesmo78510.setContext(context);
stavesmo78510.draw();
smo78510v0.draw(context, stavesmo78510);
smo78510v1.draw(context, stavesmo78510);
const leftsmo78840stavesmo780131 = new VF.StaveConnector(stavesmo78013, stavesmo78510).setType(3);
leftsmo78840stavesmo780131.setContext(context).draw();
const fmtsmo780582 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo78058v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78058v0ar = [];
const smo78014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo78014.setAttribute('id', 'smo78014');
smo78058v0ar.push(smo78014);
const smo78015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo78015.setAttribute('id', 'smo78015');
smo78058v0ar.push(smo78015);
const smo78016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo78016.setAttribute('id', 'smo78016');
smo78058v0ar.push(smo78016);
const smo78017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo78017.setAttribute('id', 'smo78017');
smo78058v0ar.push(smo78017);
const smo78018 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo78018.setAttribute('id', 'smo78018');
smo78058v0ar.push(smo78018);
const smo78019 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo78019.setAttribute('id', 'smo78019');
smo78058v0ar.push(smo78019);
const smo78020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo78020.setAttribute('id', 'smo78020');
smo78058v0ar.push(smo78020);
const smo78021 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo78021.setAttribute('id', 'smo78021');
const smo780210acc = new VF.Accidental('#');
smo78021.addModifier(smo780210acc, 0);
smo78058v0ar.push(smo78021);
const smo78022 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo78022.setAttribute('id', 'smo78022');
smo78058v0ar.push(smo78022);
const smo78023 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo78023.setAttribute('id', 'smo78023');
smo78058v0ar.push(smo78023);
const smo78024 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo78024.setAttribute('id', 'smo78024');
smo78058v0ar.push(smo78024);
const smo78025 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo78025.setAttribute('id', 'smo78025');
smo78058v0ar.push(smo78025);
const smo78026 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo78026.setAttribute('id', 'smo78026');
smo78058v0ar.push(smo78026);
const smo78027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo78027.setAttribute('id', 'smo78027');
smo78058v0ar.push(smo78027);
const smo78028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo78028.setAttribute('id', 'smo78028');
smo78058v0ar.push(smo78028);
const smo78029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo78029.setAttribute('id', 'smo78029');
smo78058v0ar.push(smo78029);
const smo78030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo78030.setAttribute('id', 'smo78030');
smo78058v0ar.push(smo78030);
const smo78031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo78031.setAttribute('id', 'smo78031');
smo78058v0ar.push(smo78031);
const smo78032 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo78032.setAttribute('id', 'smo78032');
smo78058v0ar.push(smo78032);
const smo78033 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo78033.setAttribute('id', 'smo78033');
smo78058v0ar.push(smo78033);
const smo78034 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo78034.setAttribute('id', 'smo78034');
smo78058v0ar.push(smo78034);
const smo78035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo78035.setAttribute('id', 'smo78035');
smo78058v0ar.push(smo78035);
const smo78036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo78036.setAttribute('id', 'smo78036');
smo78058v0ar.push(smo78036);
const smo78037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo78037.setAttribute('id', 'smo78037');
smo78058v0ar.push(smo78037);
const smo78038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo78038.setAttribute('id', 'smo78038');
smo78058v0ar.push(smo78038);
const smo78039 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo78039.setAttribute('id', 'smo78039');
smo78058v0ar.push(smo78039);
const smo78040 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo78040.setAttribute('id', 'smo78040');
smo78058v0ar.push(smo78040);
const smo78041 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo78041.setAttribute('id', 'smo78041');
smo78058v0ar.push(smo78041);
const smo78042 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo78042.setAttribute('id', 'smo78042');
smo78058v0ar.push(smo78042);
smo78058v0.addTickables(smo78058v0ar)
fmtsmo780582.joinVoices([smo78058v0]);
const fmtsmo785422 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo78542v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78542v0ar = [];
const smo78511 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78511.setAttribute('id', 'smo78511');
smo78542v0ar.push(smo78511);
const smo78512 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo78512.setAttribute('id', 'smo78512');
smo78542v0ar.push(smo78512);
const smo78513 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo78513.setAttribute('id', 'smo78513');
smo78542v0ar.push(smo78513);
const smo78514 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78514.setAttribute('id', 'smo78514');
smo78542v0ar.push(smo78514);
const smo78515 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo78515.setAttribute('id', 'smo78515');
smo78542v0ar.push(smo78515);
const smo78516 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo78516.setAttribute('id', 'smo78516');
smo78542v0ar.push(smo78516);
const smo78517 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78517.setAttribute('id', 'smo78517');
smo78542v0ar.push(smo78517);
const smo78518 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo78518.setAttribute('id', 'smo78518');
smo78542v0ar.push(smo78518);
const smo78519 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo78519.setAttribute('id', 'smo78519');
smo78542v0ar.push(smo78519);
const smo78520 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78520.setAttribute('id', 'smo78520');
smo78542v0ar.push(smo78520);
const smo78521 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo78521.setAttribute('id', 'smo78521');
smo78542v0ar.push(smo78521);
const smo78522 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo78522.setAttribute('id', 'smo78522');
smo78542v0ar.push(smo78522);
smo78542v0.addTickables(smo78542v0ar)
fmtsmo785422.joinVoices([smo78542v0]);
const smo78542v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78542v1ar = [];
const smo78523 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
smo78523.setAttribute('id', 'smo78523');
smo78523.setStyle({ fillStyle: "#115511" });
smo78542v1ar.push(smo78523);
const smo78524 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
smo78524.setAttribute('id', 'smo78524');
smo78524.setStyle({ fillStyle: "#115511" });
smo78542v1ar.push(smo78524);
const smo78525 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
smo78525.setAttribute('id', 'smo78525');
smo78525.setStyle({ fillStyle: "#115511" });
smo78542v1ar.push(smo78525);
const smo78526 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/1/n"]}'))
smo78526.setAttribute('id', 'smo78526');
smo78526.setStyle({ fillStyle: "#115511" });
smo78542v1ar.push(smo78526);
smo78542v1.addTickables(smo78542v1ar)
fmtsmo785422.joinVoices([smo78542v1]);
// create beam groups and tuplets for format grp smo78840 before formatting
const dirsmo80084 = smo78015.getStemDirection();
smo78015.setStemDirection(dirsmo80084);
smo78016.setStemDirection(dirsmo80084);
const smo80084 = new VF.Beam([smo78015,smo78016]);
const dirsmo80085 = smo78017.getStemDirection();
smo78017.setStemDirection(dirsmo80085);
smo78018.setStemDirection(dirsmo80085);
smo78019.setStemDirection(dirsmo80085);
smo78020.setStemDirection(dirsmo80085);
const smo80085 = new VF.Beam([smo78017,smo78018,smo78019,smo78020]);
const dirsmo80086 = smo78021.getStemDirection();
smo78021.setStemDirection(dirsmo80086);
smo78022.setStemDirection(dirsmo80086);
smo78023.setStemDirection(dirsmo80086);
smo78024.setStemDirection(dirsmo80086);
const smo80086 = new VF.Beam([smo78021,smo78022,smo78023,smo78024]);
const dirsmo80087 = smo78025.getStemDirection();
smo78025.setStemDirection(dirsmo80087);
smo78026.setStemDirection(dirsmo80087);
smo78027.setStemDirection(dirsmo80087);
smo78028.setStemDirection(dirsmo80087);
const smo80087 = new VF.Beam([smo78025,smo78026,smo78027,smo78028]);
const dirsmo80088 = smo78029.getStemDirection();
smo78029.setStemDirection(dirsmo80088);
smo78030.setStemDirection(dirsmo80088);
smo78031.setStemDirection(dirsmo80088);
smo78032.setStemDirection(dirsmo80088);
const smo80088 = new VF.Beam([smo78029,smo78030,smo78031,smo78032]);
const dirsmo80089 = smo78033.getStemDirection();
smo78033.setStemDirection(dirsmo80089);
smo78034.setStemDirection(dirsmo80089);
smo78035.setStemDirection(dirsmo80089);
smo78036.setStemDirection(dirsmo80089);
const smo80089 = new VF.Beam([smo78033,smo78034,smo78035,smo78036]);
const dirsmo80090 = smo78037.getStemDirection();
smo78037.setStemDirection(dirsmo80090);
smo78038.setStemDirection(dirsmo80090);
smo78039.setStemDirection(dirsmo80090);
smo78040.setStemDirection(dirsmo80090);
const smo80090 = new VF.Beam([smo78037,smo78038,smo78039,smo78040]);
 
// formatting measures in staff group smo78840
fmtsmo780582.format([smo78058v0,smo78542v0,smo78542v1], 1117);
const stavesmo78058 = new VF.Stave(103, 768, 1173);
stavesmo78058.setAttribute('id', 'stavesmo78058');
stavesmo78058.setBegBarType(1);
stavesmo78058.addClef('treble');
stavesmo78058.setContext(context);
stavesmo78058.draw();
smo78058v0.draw(context, stavesmo78058);
smo80084.setContext(context);
smo80084.draw();
smo80085.setContext(context);
smo80085.draw();
smo80086.setContext(context);
smo80086.draw();
smo80087.setContext(context);
smo80087.draw();
smo80088.setContext(context);
smo80088.draw();
smo80089.setContext(context);
smo80089.draw();
smo80090.setContext(context);
smo80090.draw();
const stavesmo78542 = new VF.Stave(103, 896, 1173);
stavesmo78542.setAttribute('id', 'stavesmo78542');
stavesmo78542.setBegBarType(1);
stavesmo78542.addClef('bass');
stavesmo78542.setContext(context);
stavesmo78542.draw();
smo78542v0.draw(context, stavesmo78542);
smo78542v1.draw(context, stavesmo78542);
const leftsmo78840stavesmo780581 = new VF.StaveConnector(stavesmo78058, stavesmo78542).setType(3);
leftsmo78840stavesmo780581.setContext(context).draw();
const fmtsmo780943 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo78094v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78094v0ar = [];
const smo78059 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo78059.setAttribute('id', 'smo78059');
smo78094v0ar.push(smo78059);
const smo78060 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo78060.setAttribute('id', 'smo78060');
smo78094v0ar.push(smo78060);
const smo78061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo78061.setAttribute('id', 'smo78061');
smo78094v0ar.push(smo78061);
const smo78062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo78062.setAttribute('id', 'smo78062');
const smo780620acc = new VF.Accidental('#');
smo78062.addModifier(smo780620acc, 0);
smo78094v0ar.push(smo78062);
const smo78063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo78063.setAttribute('id', 'smo78063');
smo78094v0ar.push(smo78063);
const smo78064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo78064.setAttribute('id', 'smo78064');
const smo780640acc = new VF.Accidental('#');
smo78064.addModifier(smo780640acc, 0);
smo78094v0ar.push(smo78064);
const smo78065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo78065.setAttribute('id', 'smo78065');
smo78094v0ar.push(smo78065);
const smo78066 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo78066.setAttribute('id', 'smo78066');
smo78094v0ar.push(smo78066);
const smo78067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo78067.setAttribute('id', 'smo78067');
smo78094v0ar.push(smo78067);
const smo78068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo78068.setAttribute('id', 'smo78068');
smo78094v0ar.push(smo78068);
const smo78069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo78069.setAttribute('id', 'smo78069');
smo78094v0ar.push(smo78069);
const smo78070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo78070.setAttribute('id', 'smo78070');
smo78094v0ar.push(smo78070);
const smo78071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo78071.setAttribute('id', 'smo78071');
smo78094v0ar.push(smo78071);
const smo78072 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo78072.setAttribute('id', 'smo78072');
smo78094v0ar.push(smo78072);
const smo78073 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo78073.setAttribute('id', 'smo78073');
smo78094v0ar.push(smo78073);
const smo78074 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo78074.setAttribute('id', 'smo78074');
const smo780740acc = new VF.Accidental('#');
smo78074.addModifier(smo780740acc, 0);
smo78094v0ar.push(smo78074);
const smo78075 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo78075.setAttribute('id', 'smo78075');
smo78094v0ar.push(smo78075);
const smo78076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo78076.setAttribute('id', 'smo78076');
smo78094v0ar.push(smo78076);
const smo78077 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo78077.setAttribute('id', 'smo78077');
smo78094v0ar.push(smo78077);
const smo78078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo78078.setAttribute('id', 'smo78078');
smo78094v0ar.push(smo78078);
smo78094v0.addTickables(smo78094v0ar)
fmtsmo780943.joinVoices([smo78094v0]);
const fmtsmo785783 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo78578v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78578v0ar = [];
const smo78543 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78543.setAttribute('id', 'smo78543');
smo78578v0ar.push(smo78543);
const smo78544 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo78544.setAttribute('id', 'smo78544');
smo78578v0ar.push(smo78544);
const smo78545 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo78545.setAttribute('id', 'smo78545');
smo78578v0ar.push(smo78545);
const smo78546 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78546.setAttribute('id', 'smo78546');
smo78578v0ar.push(smo78546);
const smo78547 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78547.setAttribute('id', 'smo78547');
smo78578v0ar.push(smo78547);
const smo78548 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78548.setAttribute('id', 'smo78548');
smo78578v0ar.push(smo78548);
const smo78549 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78549.setAttribute('id', 'smo78549');
smo78578v0ar.push(smo78549);
const smo78550 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78550.setAttribute('id', 'smo78550');
smo78578v0ar.push(smo78550);
const smo78551 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78551.setAttribute('id', 'smo78551');
smo78578v0ar.push(smo78551);
const smo78552 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78552.setAttribute('id', 'smo78552');
smo78578v0ar.push(smo78552);
const smo78553 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo78553.setAttribute('id', 'smo78553');
const smo785530acc = new VF.Accidental('#');
smo78553.addModifier(smo785530acc, 0);
smo78578v0ar.push(smo78553);
const smo78554 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo78554.setAttribute('id', 'smo78554');
smo78578v0ar.push(smo78554);
const smo78555 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78555.setAttribute('id', 'smo78555');
smo78578v0ar.push(smo78555);
const smo78556 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo78556.setAttribute('id', 'smo78556');
smo78578v0ar.push(smo78556);
const smo78557 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo78557.setAttribute('id', 'smo78557');
smo78578v0ar.push(smo78557);
smo78578v0.addTickables(smo78578v0ar)
fmtsmo785783.joinVoices([smo78578v0]);
const smo78578v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78578v1ar = [];
const smo78558 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo78558.setAttribute('id', 'smo78558');
smo78558.setStyle({ fillStyle: "#115511" });
smo78578v1ar.push(smo78558);
const smo78559 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo78559.setAttribute('id', 'smo78559');
smo78559.setStyle({ fillStyle: "#115511" });
smo78578v1ar.push(smo78559);
const smo78560 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo78560.setAttribute('id', 'smo78560');
smo78560.setStyle({ fillStyle: "#115511" });
smo78578v1ar.push(smo78560);
const smo78561 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/1/n"]}'))
smo78561.setAttribute('id', 'smo78561');
smo78561.setStyle({ fillStyle: "#115511" });
smo78578v1ar.push(smo78561);
const smo78562 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/1/n"]}'))
smo78562.setAttribute('id', 'smo78562');
smo78562.setStyle({ fillStyle: "#115511" });
smo78578v1ar.push(smo78562);
smo78578v1.addTickables(smo78578v1ar)
fmtsmo785783.joinVoices([smo78578v1]);
// create beam groups and tuplets for format grp smo78840 before formatting
const dirsmo80104 = smo78060.getStemDirection();
smo78060.setStemDirection(dirsmo80104);
smo78061.setStemDirection(dirsmo80104);
smo78062.setStemDirection(dirsmo80104);
smo78063.setStemDirection(dirsmo80104);
const smo80104 = new VF.Beam([smo78060,smo78061,smo78062,smo78063]);
const dirsmo80105 = smo78064.getStemDirection();
smo78064.setStemDirection(dirsmo80105);
smo78065.setStemDirection(dirsmo80105);
const smo80105 = new VF.Beam([smo78064,smo78065]);
const dirsmo80106 = smo78068.getStemDirection();
smo78068.setStemDirection(dirsmo80106);
smo78069.setStemDirection(dirsmo80106);
const smo80106 = new VF.Beam([smo78068,smo78069]);
const dirsmo80107 = smo78070.getStemDirection();
smo78070.setStemDirection(dirsmo80107);
smo78071.setStemDirection(dirsmo80107);
smo78072.setStemDirection(dirsmo80107);
smo78073.setStemDirection(dirsmo80107);
const smo80107 = new VF.Beam([smo78070,smo78071,smo78072,smo78073]);
const dirsmo80108 = smo78074.getStemDirection();
smo78074.setStemDirection(dirsmo80108);
smo78075.setStemDirection(dirsmo80108);
const smo80108 = new VF.Beam([smo78074,smo78075]);
 
// formatting measures in staff group smo78840
fmtsmo780943.format([smo78094v0,smo78578v0,smo78578v1], 1117);
const stavesmo78094 = new VF.Stave(103, 1035, 1173);
stavesmo78094.setAttribute('id', 'stavesmo78094');
stavesmo78094.setBegBarType(1);
stavesmo78094.addClef('treble');
stavesmo78094.setContext(context);
stavesmo78094.draw();
smo78094v0.draw(context, stavesmo78094);
smo80104.setContext(context);
smo80104.draw();
smo80105.setContext(context);
smo80105.draw();
smo80106.setContext(context);
smo80106.draw();
smo80107.setContext(context);
smo80107.draw();
smo80108.setContext(context);
smo80108.draw();
const stavesmo78578 = new VF.Stave(103, 1164, 1173);
stavesmo78578.setAttribute('id', 'stavesmo78578');
stavesmo78578.setBegBarType(1);
stavesmo78578.addClef('bass');
stavesmo78578.setContext(context);
stavesmo78578.draw();
smo78578v0.draw(context, stavesmo78578);
smo78578v1.draw(context, stavesmo78578);
const leftsmo78840stavesmo780941 = new VF.StaveConnector(stavesmo78094, stavesmo78578).setType(3);
leftsmo78840stavesmo780941.setContext(context).draw();
const fmtsmo781384 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo78138v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78138v0ar = [];
const smo78095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo78095.setAttribute('id', 'smo78095');
smo78138v0ar.push(smo78095);
const smo78096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo78096.setAttribute('id', 'smo78096');
smo78138v0ar.push(smo78096);
const smo78097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo78097.setAttribute('id', 'smo78097');
const smo780970acc = new VF.Accidental('#');
smo78097.addModifier(smo780970acc, 0);
smo78138v0ar.push(smo78097);
const smo78098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo78098.setAttribute('id', 'smo78098');
smo78138v0ar.push(smo78098);
const smo78099 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo78099.setAttribute('id', 'smo78099');
const smo780990acc = new VF.Accidental('#');
smo78099.addModifier(smo780990acc, 0);
smo78138v0ar.push(smo78099);
const smo78100 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo78100.setAttribute('id', 'smo78100');
smo78138v0ar.push(smo78100);
const smo78101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo78101.setAttribute('id', 'smo78101');
smo78138v0ar.push(smo78101);
const smo78102 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo78102.setAttribute('id', 'smo78102');
smo78138v0ar.push(smo78102);
const smo78103 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo78103.setAttribute('id', 'smo78103');
smo78138v0ar.push(smo78103);
const smo78104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo78104.setAttribute('id', 'smo78104');
smo78138v0ar.push(smo78104);
const smo78105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo78105.setAttribute('id', 'smo78105');
smo78138v0ar.push(smo78105);
const smo78106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo78106.setAttribute('id', 'smo78106');
smo78138v0ar.push(smo78106);
const smo78107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo78107.setAttribute('id', 'smo78107');
smo78138v0ar.push(smo78107);
const smo78108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo78108.setAttribute('id', 'smo78108');
smo78138v0ar.push(smo78108);
const smo78109 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo78109.setAttribute('id', 'smo78109');
const smo781090acc = new VF.Accidental('#');
smo78109.addModifier(smo781090acc, 0);
smo78138v0ar.push(smo78109);
const smo78110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo78110.setAttribute('id', 'smo78110');
smo78138v0ar.push(smo78110);
const smo78111 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo78111.setAttribute('id', 'smo78111');
smo78138v0ar.push(smo78111);
const smo78112 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo78112.setAttribute('id', 'smo78112');
smo78138v0ar.push(smo78112);
const smo78113 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
const smo78114 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["f#/4"],"slash":false}'))
smo78114.setAttribute('id', 'smo78114');
const acc0smo78114 = new VF.Accidental('#');
smo78114.addModifier(acc0smo78114, 0)
const ggrpsmo78113 = new VF.GraceNoteGroup([smo78114]);
ggrpsmo78113.beamNotes();
smo78113.addModifier(ggrpsmo78113, 0);
smo78113.setAttribute('id', 'smo78113');
const smo781130acc = new VF.Accidental('n');
smo78113.addModifier(smo781130acc, 0);
smo78138v0ar.push(smo78113);
const smo78115 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo78115.setAttribute('id', 'smo78115');
smo78138v0ar.push(smo78115);
const smo78116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo78116.setAttribute('id', 'smo78116');
smo78138v0ar.push(smo78116);
const smo78117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo78117.setAttribute('id', 'smo78117');
smo78138v0ar.push(smo78117);
const smo78118 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo78118.setAttribute('id', 'smo78118');
const smo781180acc = new VF.Accidental('#');
smo78118.addModifier(smo781180acc, 0);
smo78138v0ar.push(smo78118);
const smo78119 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo78119.setAttribute('id', 'smo78119');
smo78138v0ar.push(smo78119);
const smo78120 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo78120.setAttribute('id', 'smo78120');
smo78138v0ar.push(smo78120);
const smo78121 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo78121.setAttribute('id', 'smo78121');
smo78138v0ar.push(smo78121);
const smo78122 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo78122.setAttribute('id', 'smo78122');
smo78138v0ar.push(smo78122);
smo78138v0.addTickables(smo78138v0ar)
fmtsmo781384.joinVoices([smo78138v0]);
const fmtsmo786144 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo78614v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78614v0ar = [];
const smo78579 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78579.setAttribute('id', 'smo78579');
smo78614v0ar.push(smo78579);
const smo78580 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78580.setAttribute('id', 'smo78580');
smo78614v0ar.push(smo78580);
const smo78581 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78581.setAttribute('id', 'smo78581');
smo78614v0ar.push(smo78581);
const smo78582 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78582.setAttribute('id', 'smo78582');
smo78614v0ar.push(smo78582);
const smo78583 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78583.setAttribute('id', 'smo78583');
smo78614v0ar.push(smo78583);
const smo78584 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78584.setAttribute('id', 'smo78584');
smo78614v0ar.push(smo78584);
const smo78585 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78585.setAttribute('id', 'smo78585');
smo78614v0ar.push(smo78585);
const smo78586 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo78586.setAttribute('id', 'smo78586');
const smo785860acc = new VF.Accidental('#');
smo78586.addModifier(smo785860acc, 0);
smo78614v0ar.push(smo78586);
const smo78587 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo78587.setAttribute('id', 'smo78587');
smo78614v0ar.push(smo78587);
const smo78588 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78588.setAttribute('id', 'smo78588');
smo78614v0ar.push(smo78588);
const smo78589 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","c#/4/n","f#/4/n"]}'))
smo78589.setAttribute('id', 'smo78589');
const smo785891acc = new VF.Accidental('#');
smo78589.addModifier(smo785891acc, 1);
const smo785892acc = new VF.Accidental('#');
smo78589.addModifier(smo785892acc, 2);
smo78614v0ar.push(smo78589);
const smo78590 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","c#/4/n","f#/4/n"]}'))
smo78590.setAttribute('id', 'smo78590');
smo78614v0ar.push(smo78590);
const smo78591 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78591.setAttribute('id', 'smo78591');
smo78614v0ar.push(smo78591);
const smo78592 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78592.setAttribute('id', 'smo78592');
smo78614v0ar.push(smo78592);
const smo78593 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78593.setAttribute('id', 'smo78593');
smo78614v0ar.push(smo78593);
smo78614v0.addTickables(smo78614v0ar)
fmtsmo786144.joinVoices([smo78614v0]);
const smo78614v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78614v1ar = [];
const smo78594 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo78594.setAttribute('id', 'smo78594');
smo78594.setStyle({ fillStyle: "#115511" });
smo78614v1ar.push(smo78594);
const smo78595 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo78595.setAttribute('id', 'smo78595');
smo78595.setStyle({ fillStyle: "#115511" });
smo78614v1ar.push(smo78595);
const smo78596 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/1/n"]}'))
smo78596.setAttribute('id', 'smo78596');
smo78596.setStyle({ fillStyle: "#115511" });
smo78614v1ar.push(smo78596);
const smo78597 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["f#/1/n"]}'))
smo78597.setAttribute('id', 'smo78597');
smo78597.setStyle({ fillStyle: "#115511" });
const smo785970acc = new VF.Accidental('#');
smo78597.addModifier(smo785970acc, 0);
smo78614v1ar.push(smo78597);
const smo78598 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo78598.setAttribute('id', 'smo78598');
smo78598.setStyle({ fillStyle: "#115511" });
smo78614v1ar.push(smo78598);
smo78614v1.addTickables(smo78614v1ar)
fmtsmo786144.joinVoices([smo78614v1]);
// create beam groups and tuplets for format grp smo78840 before formatting
const dirsmo80124 = smo78095.getStemDirection();
smo78095.setStemDirection(dirsmo80124);
smo78096.setStemDirection(dirsmo80124);
smo78097.setStemDirection(dirsmo80124);
smo78098.setStemDirection(dirsmo80124);
const smo80124 = new VF.Beam([smo78095,smo78096,smo78097,smo78098]);
const dirsmo80125 = smo78099.getStemDirection();
smo78099.setStemDirection(dirsmo80125);
smo78100.setStemDirection(dirsmo80125);
const smo80125 = new VF.Beam([smo78099,smo78100]);
const dirsmo80126 = smo78103.getStemDirection();
smo78103.setStemDirection(dirsmo80126);
smo78104.setStemDirection(dirsmo80126);
const smo80126 = new VF.Beam([smo78103,smo78104]);
const dirsmo80127 = smo78105.getStemDirection();
smo78105.setStemDirection(dirsmo80127);
smo78106.setStemDirection(dirsmo80127);
smo78107.setStemDirection(dirsmo80127);
smo78108.setStemDirection(dirsmo80127);
const smo80127 = new VF.Beam([smo78105,smo78106,smo78107,smo78108]);
const dirsmo80128 = smo78109.getStemDirection();
smo78109.setStemDirection(dirsmo80128);
smo78110.setStemDirection(dirsmo80128);
const smo80128 = new VF.Beam([smo78109,smo78110]);
const dirsmo80129 = smo78115.getStemDirection();
smo78115.setStemDirection(dirsmo80129);
smo78116.setStemDirection(dirsmo80129);
smo78117.setStemDirection(dirsmo80129);
smo78118.setStemDirection(dirsmo80129);
const smo80129 = new VF.Beam([smo78115,smo78116,smo78117,smo78118]);
const dirsmo80130 = smo78119.getStemDirection();
smo78119.setStemDirection(dirsmo80130);
smo78120.setStemDirection(dirsmo80130);
smo78121.setStemDirection(dirsmo80130);
smo78122.setStemDirection(dirsmo80130);
const smo80130 = new VF.Beam([smo78119,smo78120,smo78121,smo78122]);
 
// formatting measures in staff group smo78840
fmtsmo781384.format([smo78138v0,smo78614v0,smo78614v1], 1117);
const stavesmo78138 = new VF.Stave(103, 1298, 1174);
stavesmo78138.setAttribute('id', 'stavesmo78138');
stavesmo78138.setBegBarType(1);
stavesmo78138.addClef('treble');
stavesmo78138.setContext(context);
stavesmo78138.draw();
smo78138v0.draw(context, stavesmo78138);
smo80124.setContext(context);
smo80124.draw();
smo80125.setContext(context);
smo80125.draw();
smo80126.setContext(context);
smo80126.draw();
smo80127.setContext(context);
smo80127.draw();
smo80128.setContext(context);
smo80128.draw();
smo80129.setContext(context);
smo80129.draw();
smo80130.setContext(context);
smo80130.draw();
const stavesmo78614 = new VF.Stave(103, 1436, 1174);
stavesmo78614.setAttribute('id', 'stavesmo78614');
stavesmo78614.setBegBarType(1);
stavesmo78614.addClef('bass');
stavesmo78614.setContext(context);
stavesmo78614.draw();
smo78614v0.draw(context, stavesmo78614);
smo78614v1.draw(context, stavesmo78614);
const leftsmo78840stavesmo781381 = new VF.StaveConnector(stavesmo78138, stavesmo78614).setType(3);
leftsmo78840stavesmo781381.setContext(context).draw();
const fmtsmo781825 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo78182v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78182v0ar = [];
const smo78139 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo78139.setAttribute('id', 'smo78139');
smo78182v0ar.push(smo78139);
const smo78140 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo78140.setAttribute('id', 'smo78140');
const smo781400acc = new VF.Accidental('#');
smo78140.addModifier(smo781400acc, 0);
smo78182v0ar.push(smo78140);
const smo78141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo78141.setAttribute('id', 'smo78141');
smo78182v0ar.push(smo78141);
const smo78142 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo78142.setAttribute('id', 'smo78142');
const smo781420acc = new VF.Accidental('#');
smo78142.addModifier(smo781420acc, 0);
smo78182v0ar.push(smo78142);
const smo78143 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo78143.setAttribute('id', 'smo78143');
smo78182v0ar.push(smo78143);
const smo78144 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo78144.setAttribute('id', 'smo78144');
smo78182v0ar.push(smo78144);
const smo78145 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo78145.setAttribute('id', 'smo78145');
smo78182v0ar.push(smo78145);
const smo78146 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo78146.setAttribute('id', 'smo78146');
smo78182v0ar.push(smo78146);
const smo78147 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo78147.setAttribute('id', 'smo78147');
smo78182v0ar.push(smo78147);
const smo78148 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo78148.setAttribute('id', 'smo78148');
const smo781480acc = new VF.Accidental('#');
smo78148.addModifier(smo781480acc, 0);
smo78182v0ar.push(smo78148);
const smo78149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo78149.setAttribute('id', 'smo78149');
smo78182v0ar.push(smo78149);
const smo78150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo78150.setAttribute('id', 'smo78150');
smo78182v0ar.push(smo78150);
const smo78151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo78151.setAttribute('id', 'smo78151');
smo78182v0ar.push(smo78151);
const smo78152 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo78152.setAttribute('id', 'smo78152');
smo78182v0ar.push(smo78152);
const smo78153 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo78153.setAttribute('id', 'smo78153');
smo78182v0ar.push(smo78153);
const smo78154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo78154.setAttribute('id', 'smo78154');
smo78182v0ar.push(smo78154);
const smo78155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo78155.setAttribute('id', 'smo78155');
smo78182v0ar.push(smo78155);
const smo78156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo78156.setAttribute('id', 'smo78156');
smo78182v0ar.push(smo78156);
const smo78157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo78157.setAttribute('id', 'smo78157');
smo78182v0ar.push(smo78157);
const smo78158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo78158.setAttribute('id', 'smo78158');
smo78182v0ar.push(smo78158);
const smo78159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo78159.setAttribute('id', 'smo78159');
smo78182v0ar.push(smo78159);
const smo78160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo78160.setAttribute('id', 'smo78160');
smo78182v0ar.push(smo78160);
const smo78161 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo78161.setAttribute('id', 'smo78161');
smo78182v0ar.push(smo78161);
const smo78162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo78162.setAttribute('id', 'smo78162');
smo78182v0ar.push(smo78162);
const smo78163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo78163.setAttribute('id', 'smo78163');
smo78182v0ar.push(smo78163);
const smo78164 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo78164.setAttribute('id', 'smo78164');
smo78182v0ar.push(smo78164);
const smo78165 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo78165.setAttribute('id', 'smo78165');
smo78182v0ar.push(smo78165);
const smo78166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo78166.setAttribute('id', 'smo78166');
smo78182v0ar.push(smo78166);
smo78182v0.addTickables(smo78182v0ar)
fmtsmo781825.joinVoices([smo78182v0]);
const fmtsmo786465 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo78646v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78646v0ar = [];
const smo78615 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78615.setAttribute('id', 'smo78615');
smo78646v0ar.push(smo78615);
const smo78616 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78616.setAttribute('id', 'smo78616');
smo78646v0ar.push(smo78616);
const smo78617 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78617.setAttribute('id', 'smo78617');
smo78646v0ar.push(smo78617);
const smo78618 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78618.setAttribute('id', 'smo78618');
smo78646v0ar.push(smo78618);
const smo78619 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78619.setAttribute('id', 'smo78619');
smo78646v0ar.push(smo78619);
const smo78620 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78620.setAttribute('id', 'smo78620');
smo78646v0ar.push(smo78620);
const smo78621 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78621.setAttribute('id', 'smo78621');
smo78646v0ar.push(smo78621);
const smo78622 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78622.setAttribute('id', 'smo78622');
smo78646v0ar.push(smo78622);
const smo78623 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo78623.setAttribute('id', 'smo78623');
smo78646v0ar.push(smo78623);
const smo78624 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo78624.setAttribute('id', 'smo78624');
smo78646v0ar.push(smo78624);
const smo78625 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo78625.setAttribute('id', 'smo78625');
const smo786250acc = new VF.Accidental('#');
smo78625.addModifier(smo786250acc, 0);
smo78646v0ar.push(smo78625);
const smo78626 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo78626.setAttribute('id', 'smo78626');
smo78646v0ar.push(smo78626);
smo78646v0.addTickables(smo78646v0ar)
fmtsmo786465.joinVoices([smo78646v0]);
const smo78646v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78646v1ar = [];
const smo78627 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo78627.setAttribute('id', 'smo78627');
smo78627.setStyle({ fillStyle: "#115511" });
smo78646v1ar.push(smo78627);
const smo78628 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo78628.setAttribute('id', 'smo78628');
smo78628.setStyle({ fillStyle: "#115511" });
smo78646v1ar.push(smo78628);
const smo78629 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo78629.setAttribute('id', 'smo78629');
smo78629.setStyle({ fillStyle: "#115511" });
smo78646v1ar.push(smo78629);
const smo78630 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/1/n"]}'))
smo78630.setAttribute('id', 'smo78630');
smo78630.setStyle({ fillStyle: "#115511" });
smo78646v1ar.push(smo78630);
smo78646v1.addTickables(smo78646v1ar)
fmtsmo786465.joinVoices([smo78646v1]);
// create beam groups and tuplets for format grp smo78840 before formatting
const dirsmo80146 = smo78139.getStemDirection();
smo78139.setStemDirection(dirsmo80146);
smo78140.setStemDirection(dirsmo80146);
smo78141.setStemDirection(dirsmo80146);
smo78142.setStemDirection(dirsmo80146);
const smo80146 = new VF.Beam([smo78139,smo78140,smo78141,smo78142]);
const dirsmo80147 = smo78143.getStemDirection();
smo78143.setStemDirection(dirsmo80147);
smo78144.setStemDirection(dirsmo80147);
smo78145.setStemDirection(dirsmo80147);
smo78146.setStemDirection(dirsmo80147);
const smo80147 = new VF.Beam([smo78143,smo78144,smo78145,smo78146]);
const dirsmo80148 = smo78147.getStemDirection();
smo78147.setStemDirection(dirsmo80148);
smo78148.setStemDirection(dirsmo80148);
smo78149.setStemDirection(dirsmo80148);
smo78150.setStemDirection(dirsmo80148);
const smo80148 = new VF.Beam([smo78147,smo78148,smo78149,smo78150]);
const dirsmo80149 = smo78151.getStemDirection();
smo78151.setStemDirection(dirsmo80149);
smo78152.setStemDirection(dirsmo80149);
smo78153.setStemDirection(dirsmo80149);
smo78154.setStemDirection(dirsmo80149);
const smo80149 = new VF.Beam([smo78151,smo78152,smo78153,smo78154]);
const dirsmo80150 = smo78155.getStemDirection();
smo78155.setStemDirection(dirsmo80150);
smo78156.setStemDirection(dirsmo80150);
smo78157.setStemDirection(dirsmo80150);
smo78158.setStemDirection(dirsmo80150);
const smo80150 = new VF.Beam([smo78155,smo78156,smo78157,smo78158]);
const dirsmo80151 = smo78159.getStemDirection();
smo78159.setStemDirection(dirsmo80151);
smo78160.setStemDirection(dirsmo80151);
smo78161.setStemDirection(dirsmo80151);
smo78162.setStemDirection(dirsmo80151);
const smo80151 = new VF.Beam([smo78159,smo78160,smo78161,smo78162]);
const dirsmo80152 = smo78163.getStemDirection();
smo78163.setStemDirection(dirsmo80152);
smo78164.setStemDirection(dirsmo80152);
const smo80152 = new VF.Beam([smo78163,smo78164]);
 
// formatting measures in staff group smo78840
fmtsmo781825.format([smo78182v0,smo78646v0,smo78646v1], 1117);
const stavesmo78182 = new VF.Stave(103, 1621, 1174);
stavesmo78182.setAttribute('id', 'stavesmo78182');
stavesmo78182.setBegBarType(1);
stavesmo78182.addClef('treble');
stavesmo78182.setContext(context);
stavesmo78182.draw();
smo78182v0.draw(context, stavesmo78182);
smo80146.setContext(context);
smo80146.draw();
smo80147.setContext(context);
smo80147.draw();
smo80148.setContext(context);
smo80148.draw();
smo80149.setContext(context);
smo80149.draw();
smo80150.setContext(context);
smo80150.draw();
smo80151.setContext(context);
smo80151.draw();
smo80152.setContext(context);
smo80152.draw();
const stavesmo78646 = new VF.Stave(103, 1734, 1174);
stavesmo78646.setAttribute('id', 'stavesmo78646');
stavesmo78646.setBegBarType(1);
stavesmo78646.addClef('bass');
stavesmo78646.setContext(context);
stavesmo78646.draw();
smo78646v0.draw(context, stavesmo78646);
smo78646v1.draw(context, stavesmo78646);
const leftsmo78840stavesmo781821 = new VF.StaveConnector(stavesmo78182, stavesmo78646).setType(3);
leftsmo78840stavesmo781821.setContext(context).draw();
// modifier from 0-0-0-5 to 0-0-0-6
const smo80344 = new VF.StaveTie({ first_note: smo77922, last_note: smo77923, 
          firstNote: smo77922, lastNote: smo77923, first_indices: [0], last_indices: [0]});
smo80344.setContext(context).draw();
// modifier from 0-0-0-15 to 0-0-0-16
const smo80345 = new VF.StaveTie({ first_note: smo77932, last_note: smo77933, 
          firstNote: smo77932, lastNote: smo77933, first_indices: [0], last_indices: [0]});
smo80345.setContext(context).draw();
// modifier from 0-0-0-24 to 0-0-0-25
const smo80346 = new VF.StaveTie({ first_note: smo77941, last_note: smo77942, 
          firstNote: smo77941, lastNote: smo77942, first_indices: [0], last_indices: [0]});
smo80346.setContext(context).draw();
// modifier from 0-1-0-8 to 0-1-0-9
const smo80347 = new VF.StaveTie({ first_note: smo77977, last_note: smo77978, 
          firstNote: smo77977, lastNote: smo77978, first_indices: [0], last_indices: [0]});
smo80347.setContext(context).draw();
// modifier from 0-1-0-15 to 0-1-0-16
const smo80348 = new VF.StaveTie({ first_note: smo77985, last_note: smo77986, 
          firstNote: smo77985, lastNote: smo77986, first_indices: [0], last_indices: [0]});
smo80348.setContext(context).draw();
// modifier from 0-1-0-18 to 0-1-0-19
const smo80349 = new VF.StaveTie({ first_note: smo77988, last_note: smo77989, 
          firstNote: smo77988, lastNote: smo77989, first_indices: [0], last_indices: [0]});
smo80349.setContext(context).draw();
// modifier from 0-1-0-21 to 0-2-0-0
const smo80350 = new VF.StaveTie({ first_note: smo77991, last_note: null, 
          firstNote: smo77991, lastNote: null, first_indices: [0], last_indices: [0]});
smo80350.setContext(context).draw();
// modifier from 0-1-0-21 to 0-2-0-0
const smo80351 = new VF.StaveTie({ first_note: null, last_note: smo78014, 
          firstNote: null, lastNote: smo78014, first_indices: [0], last_indices: [0]});
smo80351.setContext(context).draw();
// modifier from 0-2-0-26 to 0-2-0-27
const smo80352 = new VF.StaveTie({ first_note: smo78040, last_note: smo78041, 
          firstNote: smo78040, lastNote: smo78041, first_indices: [0], last_indices: [0]});
smo80352.setContext(context).draw();
// modifier from 0-3-0-6 to 0-3-0-7
const smo80353 = new VF.StaveTie({ first_note: smo78065, last_note: smo78066, 
          firstNote: smo78065, lastNote: smo78066, first_indices: [0], last_indices: [0]});
smo80353.setContext(context).draw();
// modifier from 0-3-0-16 to 0-3-0-17
const smo80354 = new VF.StaveTie({ first_note: smo78075, last_note: smo78076, 
          firstNote: smo78075, lastNote: smo78076, first_indices: [0], last_indices: [0]});
smo80354.setContext(context).draw();
// modifier from 0-4-0-5 to 0-4-0-6
const smo80355 = new VF.StaveTie({ first_note: smo78100, last_note: smo78101, 
          firstNote: smo78100, lastNote: smo78101, first_indices: [0], last_indices: [0]});
smo80355.setContext(context).draw();
// modifier from 0-4-0-15 to 0-4-0-16
const smo80356 = new VF.StaveTie({ first_note: smo78110, last_note: smo78111, 
          firstNote: smo78110, lastNote: smo78111, first_indices: [0], last_indices: [0]});
smo80356.setContext(context).draw();
// modifier from 0-5-0-25 to 0-5-0-26
const smo80357 = new VF.StaveTie({ first_note: smo78164, last_note: smo78165, 
          firstNote: smo78164, lastNote: smo78165, first_indices: [0], last_indices: [0]});
smo80357.setContext(context).draw();
// modifier from 0-4-0-19 to 0-5-0-26
const smo80358 = new VF.Curve(smo78115, null, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":20,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":2,"position_end":1}'));
smo80358.setContext(context).draw();
// modifier from 0-4-0-19 to 0-5-0-26
const smo80359 = new VF.Curve(null, smo78165, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":20,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":2,"position_end":1}'));
smo80359.setContext(context).draw();
// modifier from 0-3-0-1 to 0-3-0-7
const smo80360 = new VF.Curve(smo78060, smo78066, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo80360.setContext(context).draw();
// modifier from 0-0-0-0 to 0-0-0-6
const smo80361 = new VF.Curve(smo77916, smo77923, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":67,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":1,"position_end":1}'));
smo80361.setContext(context).draw();
// modifier from 0-0-0-8 to 0-0-0-16
const smo80362 = new VF.Curve(smo77925, smo77933, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":35,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"position_end":2}'));
smo80362.setContext(context).draw();
// modifier from 0-0-0-19 to 0-0-0-25
const smo80363 = new VF.Curve(smo77936, smo77942, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":13,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"position_end":2}'));
smo80363.setContext(context).draw();
// modifier from 0-1-0-1 to 0-1-0-9
const smo80364 = new VF.Curve(smo77970, smo77978, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":16,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"position_end":2}'));
smo80364.setContext(context).draw();
// modifier from 0-2-0-1 to 0-2-0-27
const smo80365 = new VF.Curve(smo78015, smo78041, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":5,"cps":[{"x":0,"y":100},{"x":0,"y":80}],"invert":true,"position":1,"position_end":1}'));
smo80365.setContext(context).draw();
// modifier from 0-1-0-11 to 0-1-0-19
const smo80366 = new VF.Curve(smo77980, smo77989, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":5,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"position_end":2}'));
smo80366.setContext(context).draw();
// modifier from 0-3-0-9 to 0-3-0-17
const smo80367 = new VF.Curve(smo78068, smo78076, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":57},{"x":0,"y":45}],"invert":true,"position":1,"position_end":2}'));
smo80367.setContext(context).draw();
// modifier from 0-4-0-0 to 0-4-0-6
const smo80368 = new VF.Curve(smo78095, smo78101, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo80368.setContext(context).draw();
// modifier from 0-4-0-8 to 0-4-0-16
const smo80369 = new VF.Curve(smo78103, smo78111, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":15,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo80369.setContext(context).draw();
}
// @@ Well-Tempered Clavier p 1/5  by Bach
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = VexFlow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1632');
svg.setAttributeNS('', 'height', '2112');
svg.setAttributeNS('', 'viewBox', '0 0 1989 2574');
//
// create the musical objects
VF.setFonts("Bravura","Gonville","Custom");
const fmtsmo599360 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo59936v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59936v0ar = [];
const smo59908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59908.setAttribute('id', 'smo59908');
smo59936v0ar.push(smo59908);
const smo59910 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59910.setAttribute('id', 'smo59910');
smo59936v0ar.push(smo59910);
const smo59911 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo59911.setAttribute('id', 'smo59911');
smo59936v0ar.push(smo59911);
const smo59912 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo59912.setAttribute('id', 'smo59912');
smo59936v0ar.push(smo59912);
const smo59913 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59913.setAttribute('id', 'smo59913');
smo59936v0ar.push(smo59913);
const smo59914 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo59914.setAttribute('id', 'smo59914');
smo59936v0ar.push(smo59914);
const smo59915 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo59915.setAttribute('id', 'smo59915');
smo59936v0ar.push(smo59915);
const smo59916 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59916.setAttribute('id', 'smo59916');
smo59936v0ar.push(smo59916);
const smo59917 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59917.setAttribute('id', 'smo59917');
smo59936v0ar.push(smo59917);
const smo59918 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo59918.setAttribute('id', 'smo59918');
smo59936v0ar.push(smo59918);
const smo59919 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo59919.setAttribute('id', 'smo59919');
smo59936v0ar.push(smo59919);
const smo59920 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59920.setAttribute('id', 'smo59920');
smo59936v0ar.push(smo59920);
const smo59921 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo59921.setAttribute('id', 'smo59921');
smo59936v0ar.push(smo59921);
const smo59922 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo59922.setAttribute('id', 'smo59922');
smo59936v0ar.push(smo59922);
smo59936v0.addTickables(smo59936v0ar)
fmtsmo599360.joinVoices([smo59936v0]);
const fmtsmo653770 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo65377v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65377v0ar = [];
const smo65356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo65356.setAttribute('id', 'smo65356');
smo65377v0ar.push(smo65356);
const smo65357 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo65357.setAttribute('id', 'smo65357');
smo65357.addModifier(new VF.Dot(), 0);
smo65377v0ar.push(smo65357);
const smo65358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo65358.setAttribute('id', 'smo65358');
smo65377v0ar.push(smo65358);
const smo65359 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo65359.setAttribute('id', 'smo65359');
smo65377v0ar.push(smo65359);
const smo65360 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo65360.setAttribute('id', 'smo65360');
smo65360.addModifier(new VF.Dot(), 0);
smo65377v0ar.push(smo65360);
const smo65361 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo65361.setAttribute('id', 'smo65361');
smo65377v0ar.push(smo65361);
smo65377v0.addTickables(smo65377v0ar)
fmtsmo653770.joinVoices([smo65377v0]);
const smo65377v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65377v1ar = [];
const smo65362 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65362.setAttribute('id', 'smo65362');
smo65362.setStyle({ fillStyle: "#115511" });
smo65377v1ar.push(smo65362);
const smo65363 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65363.setAttribute('id', 'smo65363');
smo65363.setStyle({ fillStyle: "#115511" });
smo65377v1ar.push(smo65363);
smo65377v1.addTickables(smo65377v1ar)
fmtsmo653770.joinVoices([smo65377v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69295 = smo59910.getStemDirection();
smo59910.setStemDirection(dirsmo69295);
smo59911.setStemDirection(dirsmo69295);
const smo69295 = new VF.Beam([smo59910,smo59911]);
const dirsmo69296 = smo59912.getStemDirection();
smo59912.setStemDirection(dirsmo69296);
smo59913.setStemDirection(dirsmo69296);
smo59914.setStemDirection(dirsmo69296);
smo59915.setStemDirection(dirsmo69296);
const smo69296 = new VF.Beam([smo59912,smo59913,smo59914,smo59915]);
const dirsmo69297 = smo59917.getStemDirection();
smo59917.setStemDirection(dirsmo69297);
smo59918.setStemDirection(dirsmo69297);
const smo69297 = new VF.Beam([smo59917,smo59918]);
const dirsmo69298 = smo59919.getStemDirection();
smo59919.setStemDirection(dirsmo69298);
smo59920.setStemDirection(dirsmo69298);
smo59921.setStemDirection(dirsmo69298);
smo59922.setStemDirection(dirsmo69298);
const smo69298 = new VF.Beam([smo59919,smo59920,smo59921,smo59922]);
 
// formatting measures in staff group smo58712
fmtsmo599360.format([smo59936v0,smo65377v0,smo65377v1], 366);
const stavesmo59936 = new VF.Stave(90, 294, 438);
stavesmo59936.setAttribute('id', 'stavesmo59936');
stavesmo59936.setBegBarType(1);
stavesmo59936.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":112,"name":"Moderato"}'), -1 * 18);
stavesmo59936.addClef('treble');
stavesmo59936.addTimeSignature('4/4');
stavesmo59936.setContext(context);
stavesmo59936.draw();
smo59936v0.draw(context, stavesmo59936);
smo69295.setContext(context);
smo69295.draw();
smo69296.setContext(context);
smo69296.draw();
smo69297.setContext(context);
smo69297.draw();
smo69298.setContext(context);
smo69298.draw();
const stavesmo65377 = new VF.Stave(90, 498, 438);
stavesmo65377.setAttribute('id', 'stavesmo65377');
stavesmo65377.setBegBarType(1);
stavesmo65377.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":112,"name":"Moderato"}'), -1 * 18);
stavesmo65377.addClef('treble');
stavesmo65377.addTimeSignature('4/4');
stavesmo65377.setContext(context);
stavesmo65377.draw();
smo65377v0.draw(context, stavesmo65377);
smo65377v1.draw(context, stavesmo65377);
const leftsmo58712stavesmo599361 = new VF.StaveConnector(stavesmo59936, stavesmo65377).setType(3);
leftsmo58712stavesmo599361.setContext(context).draw();
const fmtsmo599641 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo59964v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59964v0ar = [];
const smo59937 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59937.setAttribute('id', 'smo59937');
smo59964v0ar.push(smo59937);
const smo59938 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo59938.setAttribute('id', 'smo59938');
smo59964v0ar.push(smo59938);
const smo59939 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo59939.setAttribute('id', 'smo59939');
smo59964v0ar.push(smo59939);
const smo59940 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo59940.setAttribute('id', 'smo59940');
smo59964v0ar.push(smo59940);
const smo59941 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo59941.setAttribute('id', 'smo59941');
smo59964v0ar.push(smo59941);
const smo59942 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo59942.setAttribute('id', 'smo59942');
smo59964v0ar.push(smo59942);
const smo59943 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo59943.setAttribute('id', 'smo59943');
smo59964v0ar.push(smo59943);
const smo59944 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59944.setAttribute('id', 'smo59944');
smo59964v0ar.push(smo59944);
const smo59945 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo59945.setAttribute('id', 'smo59945');
smo59964v0ar.push(smo59945);
const smo59946 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo59946.setAttribute('id', 'smo59946');
smo59964v0ar.push(smo59946);
const smo59947 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo59947.setAttribute('id', 'smo59947');
smo59964v0ar.push(smo59947);
const smo59948 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo59948.setAttribute('id', 'smo59948');
smo59964v0ar.push(smo59948);
const smo59949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo59949.setAttribute('id', 'smo59949');
smo59964v0ar.push(smo59949);
const smo59950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo59950.setAttribute('id', 'smo59950');
smo59964v0ar.push(smo59950);
smo59964v0.addTickables(smo59964v0ar)
fmtsmo599641.joinVoices([smo59964v0]);
const fmtsmo653991 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo65399v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65399v0ar = [];
const smo65378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["cn/7/r"]}'))
smo65378.setAttribute('id', 'smo65378');
smo65399v0ar.push(smo65378);
const smo65379 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo65379.setAttribute('id', 'smo65379');
smo65379.addModifier(new VF.Dot(), 0);
smo65399v0ar.push(smo65379);
const smo65380 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo65380.setAttribute('id', 'smo65380');
smo65399v0ar.push(smo65380);
const smo65381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["cn/7/r"]}'))
smo65381.setAttribute('id', 'smo65381');
smo65399v0ar.push(smo65381);
const smo65382 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo65382.setAttribute('id', 'smo65382');
smo65382.addModifier(new VF.Dot(), 0);
smo65399v0ar.push(smo65382);
const smo65383 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo65383.setAttribute('id', 'smo65383');
smo65399v0ar.push(smo65383);
smo65399v0.addTickables(smo65399v0ar)
fmtsmo653991.joinVoices([smo65399v0]);
const smo65399v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65399v1ar = [];
const smo65384 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65384.setAttribute('id', 'smo65384');
smo65384.setStyle({ fillStyle: "#115511" });
smo65399v1ar.push(smo65384);
const smo65385 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65385.setAttribute('id', 'smo65385');
smo65385.setStyle({ fillStyle: "#115511" });
smo65399v1ar.push(smo65385);
smo65399v1.addTickables(smo65399v1ar)
fmtsmo653991.joinVoices([smo65399v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69303 = smo59938.getStemDirection();
smo59938.setStemDirection(dirsmo69303);
smo59939.setStemDirection(dirsmo69303);
const smo69303 = new VF.Beam([smo59938,smo59939]);
const dirsmo69304 = smo59940.getStemDirection();
smo59940.setStemDirection(dirsmo69304);
smo59941.setStemDirection(dirsmo69304);
smo59942.setStemDirection(dirsmo69304);
smo59943.setStemDirection(dirsmo69304);
const smo69304 = new VF.Beam([smo59940,smo59941,smo59942,smo59943]);
const dirsmo69305 = smo59945.getStemDirection();
smo59945.setStemDirection(dirsmo69305);
smo59946.setStemDirection(dirsmo69305);
const smo69305 = new VF.Beam([smo59945,smo59946]);
const dirsmo69306 = smo59947.getStemDirection();
smo59947.setStemDirection(dirsmo69306);
smo59948.setStemDirection(dirsmo69306);
smo59949.setStemDirection(dirsmo69306);
smo59950.setStemDirection(dirsmo69306);
const smo69306 = new VF.Beam([smo59947,smo59948,smo59949,smo59950]);
 
// formatting measures in staff group smo58712
fmtsmo599641.format([smo59964v0,smo65399v0,smo65399v1], 404);
const stavesmo59964 = new VF.Stave(528, 294, 418);
stavesmo59964.setAttribute('id', 'stavesmo59964');
stavesmo59964.setBegBarType(VF.Barline.type.NONE);
stavesmo59964.setContext(context);
stavesmo59964.draw();
smo59964v0.draw(context, stavesmo59964);
smo69303.setContext(context);
smo69303.draw();
smo69304.setContext(context);
smo69304.draw();
smo69305.setContext(context);
smo69305.draw();
smo69306.setContext(context);
smo69306.draw();
const stavesmo65399 = new VF.Stave(528, 498, 418);
stavesmo65399.setAttribute('id', 'stavesmo65399');
stavesmo65399.setBegBarType(VF.Barline.type.NONE);
stavesmo65399.addClef('bass');
stavesmo65399.setContext(context);
stavesmo65399.draw();
smo65399v0.draw(context, stavesmo65399);
smo65399v1.draw(context, stavesmo65399);
const fmtsmo599962 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo59996v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59996v0ar = [];
const smo59965 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59965.setAttribute('id', 'smo59965');
smo59996v0ar.push(smo59965);
const smo59966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59966.setAttribute('id', 'smo59966');
smo59996v0ar.push(smo59966);
const smo59967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo59967.setAttribute('id', 'smo59967');
smo59996v0ar.push(smo59967);
const smo59968 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo59968.setAttribute('id', 'smo59968');
smo59996v0ar.push(smo59968);
const smo59969 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59969.setAttribute('id', 'smo59969');
smo59996v0ar.push(smo59969);
const smo59970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo59970.setAttribute('id', 'smo59970');
smo59996v0ar.push(smo59970);
const smo59971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo59971.setAttribute('id', 'smo59971');
smo59996v0ar.push(smo59971);
const smo59972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59972.setAttribute('id', 'smo59972');
smo59996v0ar.push(smo59972);
const smo59973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59973.setAttribute('id', 'smo59973');
smo59996v0ar.push(smo59973);
const smo59974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo59974.setAttribute('id', 'smo59974');
smo59996v0ar.push(smo59974);
const smo59975 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo59975.setAttribute('id', 'smo59975');
smo59996v0ar.push(smo59975);
const smo59976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59976.setAttribute('id', 'smo59976');
smo59996v0ar.push(smo59976);
const smo59977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo59977.setAttribute('id', 'smo59977');
smo59996v0ar.push(smo59977);
const smo59978 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo59978.setAttribute('id', 'smo59978');
smo59996v0ar.push(smo59978);
smo59996v0.addTickables(smo59996v0ar)
fmtsmo599962.joinVoices([smo59996v0]);
const smo59996v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59996v1ar = [];
const smo59979 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59979.setAttribute('id', 'smo59979');
smo59979.setStyle({ fillStyle: '#aaaaaa7f' });
smo59996v1ar.push(smo59979);
const smo59980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59980.setAttribute('id', 'smo59980');
smo59980.setStyle({ fillStyle: '#aaaaaa7f' });
smo59980.addModifier(new VF.Dot(), 0);
smo59980.addModifier(new VF.Dot(), 0);
smo59996v1ar.push(smo59980);
const smo59981 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59981.setAttribute('id', 'smo59981');
smo59981.setStyle({ fillStyle: '#aaaaaa7f' });
smo59996v1ar.push(smo59981);
const smo59982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59982.setAttribute('id', 'smo59982');
smo59982.setStyle({ fillStyle: '#aaaaaa7f' });
smo59982.addModifier(new VF.Dot(), 0);
smo59982.addModifier(new VF.Dot(), 0);
smo59996v1ar.push(smo59982);
smo59996v1.addTickables(smo59996v1ar)
fmtsmo599962.joinVoices([smo59996v1]);
const fmtsmo654212 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo65421v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65421v0ar = [];
const smo65400 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bb/6/r"]}'))
smo65400.setAttribute('id', 'smo65400');
smo65421v0ar.push(smo65400);
const smo65401 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo65401.setAttribute('id', 'smo65401');
smo65401.addModifier(new VF.Dot(), 0);
smo65421v0ar.push(smo65401);
const smo65402 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo65402.setAttribute('id', 'smo65402');
smo65421v0ar.push(smo65402);
const smo65403 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["cn/7/r"]}'))
smo65403.setAttribute('id', 'smo65403');
smo65421v0ar.push(smo65403);
const smo65404 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo65404.setAttribute('id', 'smo65404');
smo65404.addModifier(new VF.Dot(), 0);
smo65421v0ar.push(smo65404);
const smo65405 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo65405.setAttribute('id', 'smo65405');
smo65421v0ar.push(smo65405);
smo65421v0.addTickables(smo65421v0ar)
fmtsmo654212.joinVoices([smo65421v0]);
const smo65421v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65421v1ar = [];
const smo65406 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65406.setAttribute('id', 'smo65406');
smo65406.setStyle({ fillStyle: "#115511" });
smo65421v1ar.push(smo65406);
const smo65407 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65407.setAttribute('id', 'smo65407');
smo65407.setStyle({ fillStyle: "#115511" });
smo65421v1ar.push(smo65407);
smo65421v1.addTickables(smo65421v1ar)
fmtsmo654212.joinVoices([smo65421v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69311 = smo59966.getStemDirection();
smo59966.setStemDirection(dirsmo69311);
smo59967.setStemDirection(dirsmo69311);
const smo69311 = new VF.Beam([smo59966,smo59967]);
const dirsmo69312 = smo59968.getStemDirection();
smo59968.setStemDirection(dirsmo69312);
smo59969.setStemDirection(dirsmo69312);
smo59970.setStemDirection(dirsmo69312);
smo59971.setStemDirection(dirsmo69312);
const smo69312 = new VF.Beam([smo59968,smo59969,smo59970,smo59971]);
const dirsmo69313 = smo59973.getStemDirection();
smo59973.setStemDirection(dirsmo69313);
smo59974.setStemDirection(dirsmo69313);
const smo69313 = new VF.Beam([smo59973,smo59974]);
const dirsmo69314 = smo59975.getStemDirection();
smo59975.setStemDirection(dirsmo69314);
smo59976.setStemDirection(dirsmo69314);
smo59977.setStemDirection(dirsmo69314);
smo59978.setStemDirection(dirsmo69314);
const smo69314 = new VF.Beam([smo59975,smo59976,smo59977,smo59978]);
 
// formatting measures in staff group smo58712
fmtsmo599962.format([smo59996v0,smo59996v1,smo65421v0,smo65421v1], 403);
const stavesmo59996 = new VF.Stave(946, 294, 417);
stavesmo59996.setAttribute('id', 'stavesmo59996');
stavesmo59996.setBegBarType(VF.Barline.type.NONE);
stavesmo59996.setContext(context);
stavesmo59996.draw();
smo59996v0.draw(context, stavesmo59996);
smo59996v1.draw(context, stavesmo59996);
smo69311.setContext(context);
smo69311.draw();
smo69312.setContext(context);
smo69312.draw();
smo69313.setContext(context);
smo69313.draw();
smo69314.setContext(context);
smo69314.draw();
const stavesmo65421 = new VF.Stave(946, 498, 417);
stavesmo65421.setAttribute('id', 'stavesmo65421');
stavesmo65421.setBegBarType(VF.Barline.type.NONE);
stavesmo65421.setContext(context);
stavesmo65421.draw();
smo65421v0.draw(context, stavesmo65421);
smo65421v1.draw(context, stavesmo65421);
const fmtsmo600283 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo60028v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60028v0ar = [];
const smo59997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59997.setAttribute('id', 'smo59997');
smo60028v0ar.push(smo59997);
const smo59998 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59998.setAttribute('id', 'smo59998');
smo60028v0ar.push(smo59998);
const smo59999 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo59999.setAttribute('id', 'smo59999');
smo60028v0ar.push(smo59999);
const smo60000 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo60000.setAttribute('id', 'smo60000');
smo60028v0ar.push(smo60000);
const smo60001 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60001.setAttribute('id', 'smo60001');
smo60028v0ar.push(smo60001);
const smo60002 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60002.setAttribute('id', 'smo60002');
smo60028v0ar.push(smo60002);
const smo60003 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo60003.setAttribute('id', 'smo60003');
smo60028v0ar.push(smo60003);
const smo60004 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60004.setAttribute('id', 'smo60004');
smo60028v0ar.push(smo60004);
const smo60005 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60005.setAttribute('id', 'smo60005');
smo60028v0ar.push(smo60005);
const smo60006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60006.setAttribute('id', 'smo60006');
smo60028v0ar.push(smo60006);
const smo60007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo60007.setAttribute('id', 'smo60007');
smo60028v0ar.push(smo60007);
const smo60008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60008.setAttribute('id', 'smo60008');
smo60028v0ar.push(smo60008);
const smo60009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60009.setAttribute('id', 'smo60009');
smo60028v0ar.push(smo60009);
const smo60010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo60010.setAttribute('id', 'smo60010');
smo60028v0ar.push(smo60010);
smo60028v0.addTickables(smo60028v0ar)
fmtsmo600283.joinVoices([smo60028v0]);
const smo60028v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60028v1ar = [];
const smo60011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60011.setAttribute('id', 'smo60011');
smo60011.setStyle({ fillStyle: '#aaaaaa7f' });
smo60028v1ar.push(smo60011);
const smo60012 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60012.setAttribute('id', 'smo60012');
smo60012.setStyle({ fillStyle: '#aaaaaa7f' });
smo60012.addModifier(new VF.Dot(), 0);
smo60012.addModifier(new VF.Dot(), 0);
smo60028v1ar.push(smo60012);
const smo60013 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60013.setAttribute('id', 'smo60013');
smo60013.setStyle({ fillStyle: '#aaaaaa7f' });
smo60028v1ar.push(smo60013);
const smo60014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60014.setAttribute('id', 'smo60014');
smo60014.setStyle({ fillStyle: '#aaaaaa7f' });
smo60014.addModifier(new VF.Dot(), 0);
smo60014.addModifier(new VF.Dot(), 0);
smo60028v1ar.push(smo60014);
smo60028v1.addTickables(smo60028v1ar)
fmtsmo600283.joinVoices([smo60028v1]);
const fmtsmo654433 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo65443v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65443v0ar = [];
const smo65422 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo65422.setAttribute('id', 'smo65422');
smo65443v0ar.push(smo65422);
const smo65423 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo65423.setAttribute('id', 'smo65423');
smo65423.addModifier(new VF.Dot(), 0);
smo65443v0ar.push(smo65423);
const smo65424 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo65424.setAttribute('id', 'smo65424');
smo65443v0ar.push(smo65424);
const smo65425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo65425.setAttribute('id', 'smo65425');
smo65443v0ar.push(smo65425);
const smo65426 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo65426.setAttribute('id', 'smo65426');
smo65426.addModifier(new VF.Dot(), 0);
smo65443v0ar.push(smo65426);
const smo65427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo65427.setAttribute('id', 'smo65427');
smo65443v0ar.push(smo65427);
smo65443v0.addTickables(smo65443v0ar)
fmtsmo654433.joinVoices([smo65443v0]);
const smo65443v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65443v1ar = [];
const smo65428 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65428.setAttribute('id', 'smo65428');
smo65428.setStyle({ fillStyle: "#115511" });
smo65443v1ar.push(smo65428);
const smo65429 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65429.setAttribute('id', 'smo65429');
smo65429.setStyle({ fillStyle: "#115511" });
smo65443v1ar.push(smo65429);
smo65443v1.addTickables(smo65443v1ar)
fmtsmo654433.joinVoices([smo65443v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69319 = smo59998.getStemDirection();
smo59998.setStemDirection(dirsmo69319);
smo59999.setStemDirection(dirsmo69319);
const smo69319 = new VF.Beam([smo59998,smo59999]);
const dirsmo69320 = smo60000.getStemDirection();
smo60000.setStemDirection(dirsmo69320);
smo60001.setStemDirection(dirsmo69320);
smo60002.setStemDirection(dirsmo69320);
smo60003.setStemDirection(dirsmo69320);
const smo69320 = new VF.Beam([smo60000,smo60001,smo60002,smo60003]);
const dirsmo69321 = smo60005.getStemDirection();
smo60005.setStemDirection(dirsmo69321);
smo60006.setStemDirection(dirsmo69321);
const smo69321 = new VF.Beam([smo60005,smo60006]);
const dirsmo69322 = smo60007.getStemDirection();
smo60007.setStemDirection(dirsmo69322);
smo60008.setStemDirection(dirsmo69322);
smo60009.setStemDirection(dirsmo69322);
smo60010.setStemDirection(dirsmo69322);
const smo69322 = new VF.Beam([smo60007,smo60008,smo60009,smo60010]);
 
// formatting measures in staff group smo58712
fmtsmo600283.format([smo60028v0,smo60028v1,smo65443v0,smo65443v1], 431);
const stavesmo60028 = new VF.Stave(1363, 294, 445);
stavesmo60028.setAttribute('id', 'stavesmo60028');
stavesmo60028.setBegBarType(VF.Barline.type.NONE);
stavesmo60028.setContext(context);
stavesmo60028.draw();
smo60028v0.draw(context, stavesmo60028);
smo60028v1.draw(context, stavesmo60028);
smo69319.setContext(context);
smo69319.draw();
smo69320.setContext(context);
smo69320.draw();
smo69321.setContext(context);
smo69321.draw();
smo69322.setContext(context);
smo69322.draw();
const stavesmo65443 = new VF.Stave(1363, 498, 445);
stavesmo65443.setAttribute('id', 'stavesmo65443');
stavesmo65443.setBegBarType(VF.Barline.type.NONE);
stavesmo65443.addClef('treble');
stavesmo65443.setContext(context);
stavesmo65443.draw();
smo65443v0.draw(context, stavesmo65443);
smo65443v1.draw(context, stavesmo65443);
const rightsmo58712stavesmo600281 = new VF.StaveConnector(stavesmo60028, stavesmo65443).setType(0);
rightsmo58712stavesmo600281.setContext(context).draw();
const fmtsmo600604 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo60060v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60060v0ar = [];
const smo60029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60029.setAttribute('id', 'smo60029');
smo60060v0ar.push(smo60029);
const smo60030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60030.setAttribute('id', 'smo60030');
smo60060v0ar.push(smo60030);
const smo60031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo60031.setAttribute('id', 'smo60031');
smo60060v0ar.push(smo60031);
const smo60032 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo60032.setAttribute('id', 'smo60032');
smo60060v0ar.push(smo60032);
const smo60033 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60033.setAttribute('id', 'smo60033');
smo60060v0ar.push(smo60033);
const smo60034 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo60034.setAttribute('id', 'smo60034');
smo60060v0ar.push(smo60034);
const smo60035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo60035.setAttribute('id', 'smo60035');
smo60060v0ar.push(smo60035);
const smo60036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60036.setAttribute('id', 'smo60036');
smo60060v0ar.push(smo60036);
const smo60037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60037.setAttribute('id', 'smo60037');
smo60060v0ar.push(smo60037);
const smo60038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo60038.setAttribute('id', 'smo60038');
smo60060v0ar.push(smo60038);
const smo60039 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo60039.setAttribute('id', 'smo60039');
smo60060v0ar.push(smo60039);
const smo60040 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60040.setAttribute('id', 'smo60040');
smo60060v0ar.push(smo60040);
const smo60041 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo60041.setAttribute('id', 'smo60041');
smo60060v0ar.push(smo60041);
const smo60042 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo60042.setAttribute('id', 'smo60042');
smo60060v0ar.push(smo60042);
smo60060v0.addTickables(smo60060v0ar)
fmtsmo600604.joinVoices([smo60060v0]);
const smo60060v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60060v1ar = [];
const smo60043 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60043.setAttribute('id', 'smo60043');
smo60043.setStyle({ fillStyle: '#aaaaaa7f' });
smo60060v1ar.push(smo60043);
const smo60044 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60044.setAttribute('id', 'smo60044');
smo60044.setStyle({ fillStyle: '#aaaaaa7f' });
smo60044.addModifier(new VF.Dot(), 0);
smo60044.addModifier(new VF.Dot(), 0);
smo60060v1ar.push(smo60044);
const smo60045 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60045.setAttribute('id', 'smo60045');
smo60045.setStyle({ fillStyle: '#aaaaaa7f' });
smo60060v1ar.push(smo60045);
const smo60046 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60046.setAttribute('id', 'smo60046');
smo60046.setStyle({ fillStyle: '#aaaaaa7f' });
smo60046.addModifier(new VF.Dot(), 0);
smo60046.addModifier(new VF.Dot(), 0);
smo60060v1ar.push(smo60046);
smo60060v1.addTickables(smo60060v1ar)
fmtsmo600604.joinVoices([smo60060v1]);
const fmtsmo654654 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo65465v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65465v0ar = [];
const smo65444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo65444.setAttribute('id', 'smo65444');
smo65465v0ar.push(smo65444);
const smo65445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo65445.setAttribute('id', 'smo65445');
smo65445.addModifier(new VF.Dot(), 0);
smo65465v0ar.push(smo65445);
const smo65446 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo65446.setAttribute('id', 'smo65446');
smo65465v0ar.push(smo65446);
const smo65447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo65447.setAttribute('id', 'smo65447');
smo65465v0ar.push(smo65447);
const smo65448 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo65448.setAttribute('id', 'smo65448');
smo65448.addModifier(new VF.Dot(), 0);
smo65465v0ar.push(smo65448);
const smo65449 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo65449.setAttribute('id', 'smo65449');
smo65465v0ar.push(smo65449);
smo65465v0.addTickables(smo65465v0ar)
fmtsmo654654.joinVoices([smo65465v0]);
const smo65465v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65465v1ar = [];
const smo65450 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65450.setAttribute('id', 'smo65450');
smo65450.setStyle({ fillStyle: "#115511" });
smo65465v1ar.push(smo65450);
const smo65451 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65451.setAttribute('id', 'smo65451');
smo65451.setStyle({ fillStyle: "#115511" });
smo65465v1ar.push(smo65451);
smo65465v1.addTickables(smo65465v1ar)
fmtsmo654654.joinVoices([smo65465v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69335 = smo60030.getStemDirection();
smo60030.setStemDirection(dirsmo69335);
smo60031.setStemDirection(dirsmo69335);
const smo69335 = new VF.Beam([smo60030,smo60031]);
const dirsmo69336 = smo60032.getStemDirection();
smo60032.setStemDirection(dirsmo69336);
smo60033.setStemDirection(dirsmo69336);
smo60034.setStemDirection(dirsmo69336);
smo60035.setStemDirection(dirsmo69336);
const smo69336 = new VF.Beam([smo60032,smo60033,smo60034,smo60035]);
const dirsmo69337 = smo60037.getStemDirection();
smo60037.setStemDirection(dirsmo69337);
smo60038.setStemDirection(dirsmo69337);
const smo69337 = new VF.Beam([smo60037,smo60038]);
const dirsmo69338 = smo60039.getStemDirection();
smo60039.setStemDirection(dirsmo69338);
smo60040.setStemDirection(dirsmo69338);
smo60041.setStemDirection(dirsmo69338);
smo60042.setStemDirection(dirsmo69338);
const smo69338 = new VF.Beam([smo60039,smo60040,smo60041,smo60042]);
 
// formatting measures in staff group smo58712
fmtsmo600604.format([smo60060v0,smo60060v1,smo65465v0,smo65465v1], 396);
const stavesmo60060 = new VF.Stave(90, 692, 447);
stavesmo60060.setAttribute('id', 'stavesmo60060');
stavesmo60060.setBegBarType(1);
stavesmo60060.addClef('treble');
stavesmo60060.setContext(context);
stavesmo60060.draw();
smo60060v0.draw(context, stavesmo60060);
smo60060v1.draw(context, stavesmo60060);
smo69335.setContext(context);
smo69335.draw();
smo69336.setContext(context);
smo69336.draw();
smo69337.setContext(context);
smo69337.draw();
smo69338.setContext(context);
smo69338.draw();
const stavesmo65465 = new VF.Stave(90, 769, 447);
stavesmo65465.setAttribute('id', 'stavesmo65465');
stavesmo65465.setBegBarType(1);
stavesmo65465.addClef('treble');
stavesmo65465.setContext(context);
stavesmo65465.draw();
smo65465v0.draw(context, stavesmo65465);
smo65465v1.draw(context, stavesmo65465);
const leftsmo58712stavesmo600601 = new VF.StaveConnector(stavesmo60060, stavesmo65465).setType(3);
leftsmo58712stavesmo600601.setContext(context).draw();
const fmtsmo600925 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo60092v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60092v0ar = [];
const smo60061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60061.setAttribute('id', 'smo60061');
smo60092v0ar.push(smo60061);
const smo60062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60062.setAttribute('id', 'smo60062');
const smo600620acc = new VF.Accidental('#');
smo60062.addModifier(smo600620acc, 0);
smo60092v0ar.push(smo60062);
const smo60063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60063.setAttribute('id', 'smo60063');
smo60092v0ar.push(smo60063);
const smo60064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60064.setAttribute('id', 'smo60064');
smo60092v0ar.push(smo60064);
const smo60065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60065.setAttribute('id', 'smo60065');
smo60092v0ar.push(smo60065);
const smo60066 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60066.setAttribute('id', 'smo60066');
smo60092v0ar.push(smo60066);
const smo60067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60067.setAttribute('id', 'smo60067');
smo60092v0ar.push(smo60067);
const smo60068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60068.setAttribute('id', 'smo60068');
smo60092v0ar.push(smo60068);
const smo60069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60069.setAttribute('id', 'smo60069');
smo60092v0ar.push(smo60069);
const smo60070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60070.setAttribute('id', 'smo60070');
smo60092v0ar.push(smo60070);
const smo60071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60071.setAttribute('id', 'smo60071');
smo60092v0ar.push(smo60071);
const smo60072 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60072.setAttribute('id', 'smo60072');
smo60092v0ar.push(smo60072);
const smo60073 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60073.setAttribute('id', 'smo60073');
smo60092v0ar.push(smo60073);
const smo60074 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60074.setAttribute('id', 'smo60074');
smo60092v0ar.push(smo60074);
smo60092v0.addTickables(smo60092v0ar)
fmtsmo600925.joinVoices([smo60092v0]);
const smo60092v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60092v1ar = [];
const smo60075 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60075.setAttribute('id', 'smo60075');
smo60075.setStyle({ fillStyle: '#aaaaaa7f' });
smo60092v1ar.push(smo60075);
const smo60076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60076.setAttribute('id', 'smo60076');
smo60076.setStyle({ fillStyle: '#aaaaaa7f' });
smo60076.addModifier(new VF.Dot(), 0);
smo60076.addModifier(new VF.Dot(), 0);
smo60092v1ar.push(smo60076);
const smo60077 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60077.setAttribute('id', 'smo60077');
smo60077.setStyle({ fillStyle: '#aaaaaa7f' });
smo60092v1ar.push(smo60077);
const smo60078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60078.setAttribute('id', 'smo60078');
smo60078.setStyle({ fillStyle: '#aaaaaa7f' });
smo60078.addModifier(new VF.Dot(), 0);
smo60078.addModifier(new VF.Dot(), 0);
smo60092v1ar.push(smo60078);
smo60092v1.addTickables(smo60092v1ar)
fmtsmo600925.joinVoices([smo60092v1]);
const fmtsmo654875 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo65487v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65487v0ar = [];
const smo65466 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo65466.setAttribute('id', 'smo65466');
smo65487v0ar.push(smo65466);
const smo65467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo65467.setAttribute('id', 'smo65467');
smo65467.addModifier(new VF.Dot(), 0);
smo65487v0ar.push(smo65467);
const smo65468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo65468.setAttribute('id', 'smo65468');
smo65487v0ar.push(smo65468);
const smo65469 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo65469.setAttribute('id', 'smo65469');
smo65487v0ar.push(smo65469);
const smo65470 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo65470.setAttribute('id', 'smo65470');
smo65470.addModifier(new VF.Dot(), 0);
smo65487v0ar.push(smo65470);
const smo65471 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo65471.setAttribute('id', 'smo65471');
smo65487v0ar.push(smo65471);
smo65487v0.addTickables(smo65487v0ar)
fmtsmo654875.joinVoices([smo65487v0]);
const smo65487v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65487v1ar = [];
const smo65472 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65472.setAttribute('id', 'smo65472');
smo65472.setStyle({ fillStyle: "#115511" });
smo65487v1ar.push(smo65472);
const smo65473 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65473.setAttribute('id', 'smo65473');
smo65473.setStyle({ fillStyle: "#115511" });
smo65487v1ar.push(smo65473);
smo65487v1.addTickables(smo65487v1ar)
fmtsmo654875.joinVoices([smo65487v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69343 = smo60062.getStemDirection();
smo60062.setStemDirection(dirsmo69343);
smo60063.setStemDirection(dirsmo69343);
const smo69343 = new VF.Beam([smo60062,smo60063]);
const dirsmo69344 = smo60064.getStemDirection();
smo60064.setStemDirection(dirsmo69344);
smo60065.setStemDirection(dirsmo69344);
smo60066.setStemDirection(dirsmo69344);
smo60067.setStemDirection(dirsmo69344);
const smo69344 = new VF.Beam([smo60064,smo60065,smo60066,smo60067]);
const dirsmo69345 = smo60069.getStemDirection();
smo60069.setStemDirection(dirsmo69345);
smo60070.setStemDirection(dirsmo69345);
const smo69345 = new VF.Beam([smo60069,smo60070]);
const dirsmo69346 = smo60071.getStemDirection();
smo60071.setStemDirection(dirsmo69346);
smo60072.setStemDirection(dirsmo69346);
smo60073.setStemDirection(dirsmo69346);
smo60074.setStemDirection(dirsmo69346);
const smo69346 = new VF.Beam([smo60071,smo60072,smo60073,smo60074]);
 
// formatting measures in staff group smo58712
fmtsmo600925.format([smo60092v0,smo60092v1,smo65487v0,smo65487v1], 436);
const stavesmo60092 = new VF.Stave(537, 692, 450);
stavesmo60092.setAttribute('id', 'stavesmo60092');
stavesmo60092.setBegBarType(VF.Barline.type.NONE);
stavesmo60092.setContext(context);
stavesmo60092.draw();
smo60092v0.draw(context, stavesmo60092);
smo60092v1.draw(context, stavesmo60092);
smo69343.setContext(context);
smo69343.draw();
smo69344.setContext(context);
smo69344.draw();
smo69345.setContext(context);
smo69345.draw();
smo69346.setContext(context);
smo69346.draw();
const stavesmo65487 = new VF.Stave(537, 769, 450);
stavesmo65487.setAttribute('id', 'stavesmo65487');
stavesmo65487.setBegBarType(VF.Barline.type.NONE);
stavesmo65487.setContext(context);
stavesmo65487.draw();
smo65487v0.draw(context, stavesmo65487);
smo65487v1.draw(context, stavesmo65487);
const fmtsmo601246 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo60124v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60124v0ar = [];
const smo60093 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60093.setAttribute('id', 'smo60093');
smo60124v0ar.push(smo60093);
const smo60094 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60094.setAttribute('id', 'smo60094');
smo60124v0ar.push(smo60094);
const smo60095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60095.setAttribute('id', 'smo60095');
smo60124v0ar.push(smo60095);
const smo60096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo60096.setAttribute('id', 'smo60096');
smo60124v0ar.push(smo60096);
const smo60097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60097.setAttribute('id', 'smo60097');
smo60124v0ar.push(smo60097);
const smo60098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60098.setAttribute('id', 'smo60098');
smo60124v0ar.push(smo60098);
const smo60099 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo60099.setAttribute('id', 'smo60099');
smo60124v0ar.push(smo60099);
const smo60100 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60100.setAttribute('id', 'smo60100');
smo60124v0ar.push(smo60100);
const smo60101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60101.setAttribute('id', 'smo60101');
smo60124v0ar.push(smo60101);
const smo60102 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60102.setAttribute('id', 'smo60102');
smo60124v0ar.push(smo60102);
const smo60103 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo60103.setAttribute('id', 'smo60103');
smo60124v0ar.push(smo60103);
const smo60104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60104.setAttribute('id', 'smo60104');
smo60124v0ar.push(smo60104);
const smo60105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60105.setAttribute('id', 'smo60105');
smo60124v0ar.push(smo60105);
const smo60106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo60106.setAttribute('id', 'smo60106');
smo60124v0ar.push(smo60106);
smo60124v0.addTickables(smo60124v0ar)
fmtsmo601246.joinVoices([smo60124v0]);
const smo60124v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60124v1ar = [];
const smo60107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60107.setAttribute('id', 'smo60107');
smo60107.setStyle({ fillStyle: '#aaaaaa7f' });
smo60124v1ar.push(smo60107);
const smo60108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60108.setAttribute('id', 'smo60108');
smo60108.setStyle({ fillStyle: '#aaaaaa7f' });
smo60108.addModifier(new VF.Dot(), 0);
smo60108.addModifier(new VF.Dot(), 0);
smo60124v1ar.push(smo60108);
const smo60109 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60109.setAttribute('id', 'smo60109');
smo60109.setStyle({ fillStyle: '#aaaaaa7f' });
smo60124v1ar.push(smo60109);
const smo60110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60110.setAttribute('id', 'smo60110');
smo60110.setStyle({ fillStyle: '#aaaaaa7f' });
smo60110.addModifier(new VF.Dot(), 0);
smo60110.addModifier(new VF.Dot(), 0);
smo60124v1ar.push(smo60110);
smo60124v1.addTickables(smo60124v1ar)
fmtsmo601246.joinVoices([smo60124v1]);
const fmtsmo655096 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo65509v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65509v0ar = [];
const smo65488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo65488.setAttribute('id', 'smo65488');
smo65509v0ar.push(smo65488);
const smo65489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo65489.setAttribute('id', 'smo65489');
smo65489.addModifier(new VF.Dot(), 0);
smo65509v0ar.push(smo65489);
const smo65490 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo65490.setAttribute('id', 'smo65490');
smo65509v0ar.push(smo65490);
const smo65491 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo65491.setAttribute('id', 'smo65491');
smo65509v0ar.push(smo65491);
const smo65492 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo65492.setAttribute('id', 'smo65492');
smo65492.addModifier(new VF.Dot(), 0);
smo65509v0ar.push(smo65492);
const smo65493 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo65493.setAttribute('id', 'smo65493');
smo65509v0ar.push(smo65493);
smo65509v0.addTickables(smo65509v0ar)
fmtsmo655096.joinVoices([smo65509v0]);
const smo65509v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65509v1ar = [];
const smo65494 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65494.setAttribute('id', 'smo65494');
smo65494.setStyle({ fillStyle: "#115511" });
smo65509v1ar.push(smo65494);
const smo65495 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65495.setAttribute('id', 'smo65495');
smo65495.setStyle({ fillStyle: "#115511" });
smo65509v1ar.push(smo65495);
smo65509v1.addTickables(smo65509v1ar)
fmtsmo655096.joinVoices([smo65509v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69351 = smo60094.getStemDirection();
smo60094.setStemDirection(dirsmo69351);
smo60095.setStemDirection(dirsmo69351);
const smo69351 = new VF.Beam([smo60094,smo60095]);
const dirsmo69352 = smo60096.getStemDirection();
smo60096.setStemDirection(dirsmo69352);
smo60097.setStemDirection(dirsmo69352);
smo60098.setStemDirection(dirsmo69352);
smo60099.setStemDirection(dirsmo69352);
const smo69352 = new VF.Beam([smo60096,smo60097,smo60098,smo60099]);
const dirsmo69353 = smo60101.getStemDirection();
smo60101.setStemDirection(dirsmo69353);
smo60102.setStemDirection(dirsmo69353);
const smo69353 = new VF.Beam([smo60101,smo60102]);
const dirsmo69354 = smo60103.getStemDirection();
smo60103.setStemDirection(dirsmo69354);
smo60104.setStemDirection(dirsmo69354);
smo60105.setStemDirection(dirsmo69354);
smo60106.setStemDirection(dirsmo69354);
const smo69354 = new VF.Beam([smo60103,smo60104,smo60105,smo60106]);
 
// formatting measures in staff group smo58712
fmtsmo601246.format([smo60124v0,smo60124v1,smo65509v0,smo65509v1], 396);
const stavesmo60124 = new VF.Stave(987, 692, 410);
stavesmo60124.setAttribute('id', 'stavesmo60124');
stavesmo60124.setBegBarType(VF.Barline.type.NONE);
stavesmo60124.setContext(context);
stavesmo60124.draw();
smo60124v0.draw(context, stavesmo60124);
smo60124v1.draw(context, stavesmo60124);
smo69351.setContext(context);
smo69351.draw();
smo69352.setContext(context);
smo69352.draw();
smo69353.setContext(context);
smo69353.draw();
smo69354.setContext(context);
smo69354.draw();
const stavesmo65509 = new VF.Stave(987, 769, 410);
stavesmo65509.setAttribute('id', 'stavesmo65509');
stavesmo65509.setBegBarType(VF.Barline.type.NONE);
stavesmo65509.setContext(context);
stavesmo65509.draw();
smo65509v0.draw(context, stavesmo65509);
smo65509v1.draw(context, stavesmo65509);
const fmtsmo601567 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo60156v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60156v0ar = [];
const smo60125 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60125.setAttribute('id', 'smo60125');
smo60156v0ar.push(smo60125);
const smo60126 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60126.setAttribute('id', 'smo60126');
smo60156v0ar.push(smo60126);
const smo60127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60127.setAttribute('id', 'smo60127');
smo60156v0ar.push(smo60127);
const smo60128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60128.setAttribute('id', 'smo60128');
smo60156v0ar.push(smo60128);
const smo60129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60129.setAttribute('id', 'smo60129');
smo60156v0ar.push(smo60129);
const smo60130 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60130.setAttribute('id', 'smo60130');
smo60156v0ar.push(smo60130);
const smo60131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60131.setAttribute('id', 'smo60131');
smo60156v0ar.push(smo60131);
const smo60132 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60132.setAttribute('id', 'smo60132');
smo60156v0ar.push(smo60132);
const smo60133 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60133.setAttribute('id', 'smo60133');
smo60156v0ar.push(smo60133);
const smo60134 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60134.setAttribute('id', 'smo60134');
smo60156v0ar.push(smo60134);
const smo60135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60135.setAttribute('id', 'smo60135');
smo60156v0ar.push(smo60135);
const smo60136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60136.setAttribute('id', 'smo60136');
smo60156v0ar.push(smo60136);
const smo60137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60137.setAttribute('id', 'smo60137');
smo60156v0ar.push(smo60137);
const smo60138 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60138.setAttribute('id', 'smo60138');
smo60156v0ar.push(smo60138);
smo60156v0.addTickables(smo60156v0ar)
fmtsmo601567.joinVoices([smo60156v0]);
const smo60156v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60156v1ar = [];
const smo60139 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60139.setAttribute('id', 'smo60139');
smo60139.setStyle({ fillStyle: '#aaaaaa7f' });
smo60156v1ar.push(smo60139);
const smo60140 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60140.setAttribute('id', 'smo60140');
smo60140.setStyle({ fillStyle: '#aaaaaa7f' });
smo60140.addModifier(new VF.Dot(), 0);
smo60140.addModifier(new VF.Dot(), 0);
smo60156v1ar.push(smo60140);
const smo60141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60141.setAttribute('id', 'smo60141');
smo60141.setStyle({ fillStyle: '#aaaaaa7f' });
smo60156v1ar.push(smo60141);
const smo60142 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60142.setAttribute('id', 'smo60142');
smo60142.setStyle({ fillStyle: '#aaaaaa7f' });
smo60142.addModifier(new VF.Dot(), 0);
smo60142.addModifier(new VF.Dot(), 0);
smo60156v1ar.push(smo60142);
smo60156v1.addTickables(smo60156v1ar)
fmtsmo601567.joinVoices([smo60156v1]);
const fmtsmo655317 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo65531v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65531v0ar = [];
const smo65510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo65510.setAttribute('id', 'smo65510');
smo65531v0ar.push(smo65510);
const smo65511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65511.setAttribute('id', 'smo65511');
smo65511.addModifier(new VF.Dot(), 0);
smo65531v0ar.push(smo65511);
const smo65512 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65512.setAttribute('id', 'smo65512');
smo65531v0ar.push(smo65512);
const smo65513 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo65513.setAttribute('id', 'smo65513');
smo65531v0ar.push(smo65513);
const smo65514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65514.setAttribute('id', 'smo65514');
smo65514.addModifier(new VF.Dot(), 0);
smo65531v0ar.push(smo65514);
const smo65515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65515.setAttribute('id', 'smo65515');
smo65531v0ar.push(smo65515);
smo65531v0.addTickables(smo65531v0ar)
fmtsmo655317.joinVoices([smo65531v0]);
const smo65531v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65531v1ar = [];
const smo65516 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65516.setAttribute('id', 'smo65516');
smo65516.setStyle({ fillStyle: "#115511" });
smo65531v1ar.push(smo65516);
const smo65517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65517.setAttribute('id', 'smo65517');
smo65517.setStyle({ fillStyle: "#115511" });
smo65531v1ar.push(smo65517);
smo65531v1.addTickables(smo65531v1ar)
fmtsmo655317.joinVoices([smo65531v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69359 = smo60126.getStemDirection();
smo60126.setStemDirection(dirsmo69359);
smo60127.setStemDirection(dirsmo69359);
const smo69359 = new VF.Beam([smo60126,smo60127]);
const dirsmo69360 = smo60128.getStemDirection();
smo60128.setStemDirection(dirsmo69360);
smo60129.setStemDirection(dirsmo69360);
smo60130.setStemDirection(dirsmo69360);
smo60131.setStemDirection(dirsmo69360);
const smo69360 = new VF.Beam([smo60128,smo60129,smo60130,smo60131]);
const dirsmo69361 = smo60133.getStemDirection();
smo60133.setStemDirection(dirsmo69361);
smo60134.setStemDirection(dirsmo69361);
const smo69361 = new VF.Beam([smo60133,smo60134]);
const dirsmo69362 = smo60135.getStemDirection();
smo60135.setStemDirection(dirsmo69362);
smo60136.setStemDirection(dirsmo69362);
smo60137.setStemDirection(dirsmo69362);
smo60138.setStemDirection(dirsmo69362);
const smo69362 = new VF.Beam([smo60135,smo60136,smo60137,smo60138]);
 
// formatting measures in staff group smo58712
fmtsmo601567.format([smo60156v0,smo60156v1,smo65531v0,smo65531v1], 396);
const stavesmo60156 = new VF.Stave(1397, 692, 410);
stavesmo60156.setAttribute('id', 'stavesmo60156');
stavesmo60156.setBegBarType(VF.Barline.type.NONE);
stavesmo60156.setContext(context);
stavesmo60156.draw();
smo60156v0.draw(context, stavesmo60156);
smo60156v1.draw(context, stavesmo60156);
smo69359.setContext(context);
smo69359.draw();
smo69360.setContext(context);
smo69360.draw();
smo69361.setContext(context);
smo69361.draw();
smo69362.setContext(context);
smo69362.draw();
const stavesmo65531 = new VF.Stave(1397, 769, 410);
stavesmo65531.setAttribute('id', 'stavesmo65531');
stavesmo65531.setBegBarType(VF.Barline.type.NONE);
stavesmo65531.setContext(context);
stavesmo65531.draw();
smo65531v0.draw(context, stavesmo65531);
smo65531v1.draw(context, stavesmo65531);
const rightsmo58712stavesmo601561 = new VF.StaveConnector(stavesmo60156, stavesmo65531).setType(0);
rightsmo58712stavesmo601561.setContext(context).draw();
const fmtsmo601888 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo60188v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60188v0ar = [];
const smo60157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60157.setAttribute('id', 'smo60157');
smo60188v0ar.push(smo60157);
const smo60158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60158.setAttribute('id', 'smo60158');
smo60188v0ar.push(smo60158);
const smo60159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60159.setAttribute('id', 'smo60159');
smo60188v0ar.push(smo60159);
const smo60160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60160.setAttribute('id', 'smo60160');
smo60188v0ar.push(smo60160);
const smo60161 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60161.setAttribute('id', 'smo60161');
smo60188v0ar.push(smo60161);
const smo60162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60162.setAttribute('id', 'smo60162');
smo60188v0ar.push(smo60162);
const smo60163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60163.setAttribute('id', 'smo60163');
smo60188v0ar.push(smo60163);
const smo60164 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60164.setAttribute('id', 'smo60164');
smo60188v0ar.push(smo60164);
const smo60165 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60165.setAttribute('id', 'smo60165');
smo60188v0ar.push(smo60165);
const smo60166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60166.setAttribute('id', 'smo60166');
smo60188v0ar.push(smo60166);
const smo60167 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60167.setAttribute('id', 'smo60167');
smo60188v0ar.push(smo60167);
const smo60168 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60168.setAttribute('id', 'smo60168');
smo60188v0ar.push(smo60168);
const smo60169 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60169.setAttribute('id', 'smo60169');
smo60188v0ar.push(smo60169);
const smo60170 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60170.setAttribute('id', 'smo60170');
smo60188v0ar.push(smo60170);
smo60188v0.addTickables(smo60188v0ar)
fmtsmo601888.joinVoices([smo60188v0]);
const smo60188v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60188v1ar = [];
const smo60171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60171.setAttribute('id', 'smo60171');
smo60171.setStyle({ fillStyle: '#aaaaaa7f' });
smo60188v1ar.push(smo60171);
const smo60172 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60172.setAttribute('id', 'smo60172');
smo60172.setStyle({ fillStyle: '#aaaaaa7f' });
smo60172.addModifier(new VF.Dot(), 0);
smo60172.addModifier(new VF.Dot(), 0);
smo60188v1ar.push(smo60172);
const smo60173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60173.setAttribute('id', 'smo60173');
smo60173.setStyle({ fillStyle: '#aaaaaa7f' });
smo60188v1ar.push(smo60173);
const smo60174 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60174.setAttribute('id', 'smo60174');
smo60174.setStyle({ fillStyle: '#aaaaaa7f' });
smo60174.addModifier(new VF.Dot(), 0);
smo60174.addModifier(new VF.Dot(), 0);
smo60188v1ar.push(smo60174);
smo60188v1.addTickables(smo60188v1ar)
fmtsmo601888.joinVoices([smo60188v1]);
const fmtsmo655538 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo65553v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65553v0ar = [];
const smo65532 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo65532.setAttribute('id', 'smo65532');
smo65553v0ar.push(smo65532);
const smo65533 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65533.setAttribute('id', 'smo65533');
smo65533.addModifier(new VF.Dot(), 0);
smo65553v0ar.push(smo65533);
const smo65534 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65534.setAttribute('id', 'smo65534');
smo65553v0ar.push(smo65534);
const smo65535 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo65535.setAttribute('id', 'smo65535');
smo65553v0ar.push(smo65535);
const smo65536 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65536.setAttribute('id', 'smo65536');
smo65536.addModifier(new VF.Dot(), 0);
smo65553v0ar.push(smo65536);
const smo65537 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65537.setAttribute('id', 'smo65537');
smo65553v0ar.push(smo65537);
smo65553v0.addTickables(smo65553v0ar)
fmtsmo655538.joinVoices([smo65553v0]);
const smo65553v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65553v1ar = [];
const smo65538 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo65538.setAttribute('id', 'smo65538');
smo65538.setStyle({ fillStyle: "#115511" });
smo65553v1ar.push(smo65538);
const smo65539 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo65539.setAttribute('id', 'smo65539');
smo65539.setStyle({ fillStyle: "#115511" });
smo65553v1ar.push(smo65539);
smo65553v1.addTickables(smo65553v1ar)
fmtsmo655538.joinVoices([smo65553v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69375 = smo60158.getStemDirection();
smo60158.setStemDirection(dirsmo69375);
smo60159.setStemDirection(dirsmo69375);
const smo69375 = new VF.Beam([smo60158,smo60159]);
const dirsmo69376 = smo60160.getStemDirection();
smo60160.setStemDirection(dirsmo69376);
smo60161.setStemDirection(dirsmo69376);
smo60162.setStemDirection(dirsmo69376);
smo60163.setStemDirection(dirsmo69376);
const smo69376 = new VF.Beam([smo60160,smo60161,smo60162,smo60163]);
const dirsmo69377 = smo60165.getStemDirection();
smo60165.setStemDirection(dirsmo69377);
smo60166.setStemDirection(dirsmo69377);
const smo69377 = new VF.Beam([smo60165,smo60166]);
const dirsmo69378 = smo60167.getStemDirection();
smo60167.setStemDirection(dirsmo69378);
smo60168.setStemDirection(dirsmo69378);
smo60169.setStemDirection(dirsmo69378);
smo60170.setStemDirection(dirsmo69378);
const smo69378 = new VF.Beam([smo60167,smo60168,smo60169,smo60170]);
 
// formatting measures in staff group smo58712
fmtsmo601888.format([smo60188v0,smo60188v1,smo65553v0,smo65553v1], 377);
const stavesmo60188 = new VF.Stave(90, 923, 428);
stavesmo60188.setAttribute('id', 'stavesmo60188');
stavesmo60188.setBegBarType(1);
stavesmo60188.addClef('treble');
stavesmo60188.setContext(context);
stavesmo60188.draw();
smo60188v0.draw(context, stavesmo60188);
smo60188v1.draw(context, stavesmo60188);
smo69375.setContext(context);
smo69375.draw();
smo69376.setContext(context);
smo69376.draw();
smo69377.setContext(context);
smo69377.draw();
smo69378.setContext(context);
smo69378.draw();
const stavesmo65553 = new VF.Stave(90, 1102, 428);
stavesmo65553.setAttribute('id', 'stavesmo65553');
stavesmo65553.setBegBarType(1);
stavesmo65553.addClef('treble');
stavesmo65553.setContext(context);
stavesmo65553.draw();
smo65553v0.draw(context, stavesmo65553);
smo65553v1.draw(context, stavesmo65553);
const leftsmo58712stavesmo601881 = new VF.StaveConnector(stavesmo60188, stavesmo65553).setType(3);
leftsmo58712stavesmo601881.setContext(context).draw();
const fmtsmo602209 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo60220v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60220v0ar = [];
const smo60189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60189.setAttribute('id', 'smo60189');
smo60220v0ar.push(smo60189);
const smo60190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60190.setAttribute('id', 'smo60190');
smo60220v0ar.push(smo60190);
const smo60191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60191.setAttribute('id', 'smo60191');
const smo601910acc = new VF.Accidental('#');
smo60191.addModifier(smo601910acc, 0);
smo60220v0ar.push(smo60191);
const smo60192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60192.setAttribute('id', 'smo60192');
smo60220v0ar.push(smo60192);
const smo60193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60193.setAttribute('id', 'smo60193');
smo60220v0ar.push(smo60193);
const smo60194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60194.setAttribute('id', 'smo60194');
smo60220v0ar.push(smo60194);
const smo60195 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60195.setAttribute('id', 'smo60195');
smo60220v0ar.push(smo60195);
const smo60196 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60196.setAttribute('id', 'smo60196');
smo60220v0ar.push(smo60196);
const smo60197 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60197.setAttribute('id', 'smo60197');
smo60220v0ar.push(smo60197);
const smo60198 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60198.setAttribute('id', 'smo60198');
smo60220v0ar.push(smo60198);
const smo60199 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60199.setAttribute('id', 'smo60199');
smo60220v0ar.push(smo60199);
const smo60200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60200.setAttribute('id', 'smo60200');
smo60220v0ar.push(smo60200);
const smo60201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60201.setAttribute('id', 'smo60201');
smo60220v0ar.push(smo60201);
const smo60202 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60202.setAttribute('id', 'smo60202');
smo60220v0ar.push(smo60202);
smo60220v0.addTickables(smo60220v0ar)
fmtsmo602209.joinVoices([smo60220v0]);
const smo60220v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60220v1ar = [];
const smo60203 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60203.setAttribute('id', 'smo60203');
smo60203.setStyle({ fillStyle: '#aaaaaa7f' });
smo60220v1ar.push(smo60203);
const smo60204 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60204.setAttribute('id', 'smo60204');
smo60204.setStyle({ fillStyle: '#aaaaaa7f' });
smo60204.addModifier(new VF.Dot(), 0);
smo60204.addModifier(new VF.Dot(), 0);
smo60220v1ar.push(smo60204);
const smo60205 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60205.setAttribute('id', 'smo60205');
smo60205.setStyle({ fillStyle: '#aaaaaa7f' });
smo60220v1ar.push(smo60205);
const smo60206 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60206.setAttribute('id', 'smo60206');
smo60206.setStyle({ fillStyle: '#aaaaaa7f' });
smo60206.addModifier(new VF.Dot(), 0);
smo60206.addModifier(new VF.Dot(), 0);
smo60220v1ar.push(smo60206);
smo60220v1.addTickables(smo60220v1ar)
fmtsmo602209.joinVoices([smo60220v1]);
const fmtsmo655759 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo65575v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65575v0ar = [];
const smo65554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["en/6/r"]}'))
smo65554.setAttribute('id', 'smo65554');
smo65575v0ar.push(smo65554);
const smo65555 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo65555.setAttribute('id', 'smo65555');
smo65555.addModifier(new VF.Dot(), 0);
smo65575v0ar.push(smo65555);
const smo65556 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo65556.setAttribute('id', 'smo65556');
smo65575v0ar.push(smo65556);
const smo65557 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/6/r"]}'))
smo65557.setAttribute('id', 'smo65557');
smo65575v0ar.push(smo65557);
const smo65558 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo65558.setAttribute('id', 'smo65558');
smo65558.addModifier(new VF.Dot(), 0);
smo65575v0ar.push(smo65558);
const smo65559 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo65559.setAttribute('id', 'smo65559');
smo65575v0ar.push(smo65559);
smo65575v0.addTickables(smo65575v0ar)
fmtsmo655759.joinVoices([smo65575v0]);
const smo65575v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65575v1ar = [];
const smo65560 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65560.setAttribute('id', 'smo65560');
smo65560.setStyle({ fillStyle: "#115511" });
smo65575v1ar.push(smo65560);
const smo65561 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65561.setAttribute('id', 'smo65561');
smo65561.setStyle({ fillStyle: "#115511" });
smo65575v1ar.push(smo65561);
smo65575v1.addTickables(smo65575v1ar)
fmtsmo655759.joinVoices([smo65575v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69383 = smo60190.getStemDirection();
smo60190.setStemDirection(dirsmo69383);
smo60191.setStemDirection(dirsmo69383);
const smo69383 = new VF.Beam([smo60190,smo60191]);
const dirsmo69384 = smo60192.getStemDirection();
smo60192.setStemDirection(dirsmo69384);
smo60193.setStemDirection(dirsmo69384);
smo60194.setStemDirection(dirsmo69384);
smo60195.setStemDirection(dirsmo69384);
const smo69384 = new VF.Beam([smo60192,smo60193,smo60194,smo60195]);
const dirsmo69385 = smo60197.getStemDirection();
smo60197.setStemDirection(dirsmo69385);
smo60198.setStemDirection(dirsmo69385);
const smo69385 = new VF.Beam([smo60197,smo60198]);
const dirsmo69386 = smo60199.getStemDirection();
smo60199.setStemDirection(dirsmo69386);
smo60200.setStemDirection(dirsmo69386);
smo60201.setStemDirection(dirsmo69386);
smo60202.setStemDirection(dirsmo69386);
const smo69386 = new VF.Beam([smo60199,smo60200,smo60201,smo60202]);
 
// formatting measures in staff group smo58712
fmtsmo602209.format([smo60220v0,smo60220v1,smo65575v0,smo65575v1], 454);
const stavesmo60220 = new VF.Stave(518, 923, 468);
stavesmo60220.setAttribute('id', 'stavesmo60220');
stavesmo60220.setBegBarType(VF.Barline.type.NONE);
stavesmo60220.setContext(context);
stavesmo60220.draw();
smo60220v0.draw(context, stavesmo60220);
smo60220v1.draw(context, stavesmo60220);
smo69383.setContext(context);
smo69383.draw();
smo69384.setContext(context);
smo69384.draw();
smo69385.setContext(context);
smo69385.draw();
smo69386.setContext(context);
smo69386.draw();
const stavesmo65575 = new VF.Stave(518, 1102, 468);
stavesmo65575.setAttribute('id', 'stavesmo65575');
stavesmo65575.setBegBarType(VF.Barline.type.NONE);
stavesmo65575.addClef('bass');
stavesmo65575.setContext(context);
stavesmo65575.draw();
smo65575v0.draw(context, stavesmo65575);
smo65575v1.draw(context, stavesmo65575);
const fmtsmo6025210 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo60252v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60252v0ar = [];
const smo60221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60221.setAttribute('id', 'smo60221');
smo60252v0ar.push(smo60221);
const smo60222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60222.setAttribute('id', 'smo60222');
smo60252v0ar.push(smo60222);
const smo60223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60223.setAttribute('id', 'smo60223');
smo60252v0ar.push(smo60223);
const smo60224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60224.setAttribute('id', 'smo60224');
smo60252v0ar.push(smo60224);
const smo60225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60225.setAttribute('id', 'smo60225');
smo60252v0ar.push(smo60225);
const smo60226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60226.setAttribute('id', 'smo60226');
smo60252v0ar.push(smo60226);
const smo60227 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60227.setAttribute('id', 'smo60227');
smo60252v0ar.push(smo60227);
const smo60228 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60228.setAttribute('id', 'smo60228');
smo60252v0ar.push(smo60228);
const smo60229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60229.setAttribute('id', 'smo60229');
smo60252v0ar.push(smo60229);
const smo60230 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60230.setAttribute('id', 'smo60230');
smo60252v0ar.push(smo60230);
const smo60231 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60231.setAttribute('id', 'smo60231');
smo60252v0ar.push(smo60231);
const smo60232 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60232.setAttribute('id', 'smo60232');
smo60252v0ar.push(smo60232);
const smo60233 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60233.setAttribute('id', 'smo60233');
smo60252v0ar.push(smo60233);
const smo60234 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60234.setAttribute('id', 'smo60234');
smo60252v0ar.push(smo60234);
smo60252v0.addTickables(smo60252v0ar)
fmtsmo6025210.joinVoices([smo60252v0]);
const smo60252v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60252v1ar = [];
const smo60235 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60235.setAttribute('id', 'smo60235');
smo60235.setStyle({ fillStyle: '#aaaaaa7f' });
smo60252v1ar.push(smo60235);
const smo60236 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/3/r"]}'))
smo60236.setAttribute('id', 'smo60236');
smo60236.setStyle({ fillStyle: '#aaaaaa7f' });
smo60236.addModifier(new VF.Dot(), 0);
smo60236.addModifier(new VF.Dot(), 0);
smo60252v1ar.push(smo60236);
const smo60237 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60237.setAttribute('id', 'smo60237');
smo60237.setStyle({ fillStyle: '#aaaaaa7f' });
smo60252v1ar.push(smo60237);
const smo60238 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60238.setAttribute('id', 'smo60238');
smo60238.setStyle({ fillStyle: '#aaaaaa7f' });
smo60238.addModifier(new VF.Dot(), 0);
smo60238.addModifier(new VF.Dot(), 0);
smo60252v1ar.push(smo60238);
smo60252v1.addTickables(smo60252v1ar)
fmtsmo6025210.joinVoices([smo60252v1]);
const fmtsmo6559710 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo65597v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65597v0ar = [];
const smo65576 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/6/r"]}'))
smo65576.setAttribute('id', 'smo65576');
smo65597v0ar.push(smo65576);
const smo65577 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65577.setAttribute('id', 'smo65577');
smo65577.addModifier(new VF.Dot(), 0);
smo65597v0ar.push(smo65577);
const smo65578 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65578.setAttribute('id', 'smo65578');
smo65597v0ar.push(smo65578);
const smo65579 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/6/r"]}'))
smo65579.setAttribute('id', 'smo65579');
smo65597v0ar.push(smo65579);
const smo65580 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65580.setAttribute('id', 'smo65580');
smo65580.addModifier(new VF.Dot(), 0);
smo65597v0ar.push(smo65580);
const smo65581 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65581.setAttribute('id', 'smo65581');
smo65597v0ar.push(smo65581);
smo65597v0.addTickables(smo65597v0ar)
fmtsmo6559710.joinVoices([smo65597v0]);
const smo65597v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65597v1ar = [];
const smo65582 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65582.setAttribute('id', 'smo65582');
smo65582.setStyle({ fillStyle: "#115511" });
smo65597v1ar.push(smo65582);
const smo65583 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65583.setAttribute('id', 'smo65583');
smo65583.setStyle({ fillStyle: "#115511" });
smo65597v1ar.push(smo65583);
smo65597v1.addTickables(smo65597v1ar)
fmtsmo6559710.joinVoices([smo65597v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69391 = smo60222.getStemDirection();
smo60222.setStemDirection(dirsmo69391);
smo60223.setStemDirection(dirsmo69391);
const smo69391 = new VF.Beam([smo60222,smo60223]);
const dirsmo69392 = smo60224.getStemDirection();
smo60224.setStemDirection(dirsmo69392);
smo60225.setStemDirection(dirsmo69392);
smo60226.setStemDirection(dirsmo69392);
smo60227.setStemDirection(dirsmo69392);
const smo69392 = new VF.Beam([smo60224,smo60225,smo60226,smo60227]);
const dirsmo69393 = smo60229.getStemDirection();
smo60229.setStemDirection(dirsmo69393);
smo60230.setStemDirection(dirsmo69393);
const smo69393 = new VF.Beam([smo60229,smo60230]);
const dirsmo69394 = smo60231.getStemDirection();
smo60231.setStemDirection(dirsmo69394);
smo60232.setStemDirection(dirsmo69394);
smo60233.setStemDirection(dirsmo69394);
smo60234.setStemDirection(dirsmo69394);
const smo69394 = new VF.Beam([smo60231,smo60232,smo60233,smo60234]);
 
// formatting measures in staff group smo58712
fmtsmo6025210.format([smo60252v0,smo60252v1,smo65597v0,smo65597v1], 377);
const stavesmo60252 = new VF.Stave(986, 923, 391);
stavesmo60252.setAttribute('id', 'stavesmo60252');
stavesmo60252.setBegBarType(VF.Barline.type.NONE);
stavesmo60252.setContext(context);
stavesmo60252.draw();
smo60252v0.draw(context, stavesmo60252);
smo60252v1.draw(context, stavesmo60252);
smo69391.setContext(context);
smo69391.draw();
smo69392.setContext(context);
smo69392.draw();
smo69393.setContext(context);
smo69393.draw();
smo69394.setContext(context);
smo69394.draw();
const stavesmo65597 = new VF.Stave(986, 1102, 391);
stavesmo65597.setAttribute('id', 'stavesmo65597');
stavesmo65597.setBegBarType(VF.Barline.type.NONE);
stavesmo65597.setContext(context);
stavesmo65597.draw();
smo65597v0.draw(context, stavesmo65597);
smo65597v1.draw(context, stavesmo65597);
const fmtsmo6028411 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo60284v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60284v0ar = [];
const smo60253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60253.setAttribute('id', 'smo60253');
smo60284v0ar.push(smo60253);
const smo60254 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60254.setAttribute('id', 'smo60254');
smo60284v0ar.push(smo60254);
const smo60255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60255.setAttribute('id', 'smo60255');
smo60284v0ar.push(smo60255);
const smo60256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/5/n"]}'))
smo60256.setAttribute('id', 'smo60256');
const smo602560acc = new VF.Accidental('#');
smo60256.addModifier(smo602560acc, 0);
smo60284v0ar.push(smo60256);
const smo60257 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60257.setAttribute('id', 'smo60257');
smo60284v0ar.push(smo60257);
const smo60258 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60258.setAttribute('id', 'smo60258');
smo60284v0ar.push(smo60258);
const smo60259 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/5/n"]}'))
smo60259.setAttribute('id', 'smo60259');
smo60284v0ar.push(smo60259);
const smo60260 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60260.setAttribute('id', 'smo60260');
smo60284v0ar.push(smo60260);
const smo60261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60261.setAttribute('id', 'smo60261');
smo60284v0ar.push(smo60261);
const smo60262 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60262.setAttribute('id', 'smo60262');
smo60284v0ar.push(smo60262);
const smo60263 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/5/n"]}'))
smo60263.setAttribute('id', 'smo60263');
smo60284v0ar.push(smo60263);
const smo60264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60264.setAttribute('id', 'smo60264');
smo60284v0ar.push(smo60264);
const smo60265 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60265.setAttribute('id', 'smo60265');
smo60284v0ar.push(smo60265);
const smo60266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/5/n"]}'))
smo60266.setAttribute('id', 'smo60266');
smo60284v0ar.push(smo60266);
smo60284v0.addTickables(smo60284v0ar)
fmtsmo6028411.joinVoices([smo60284v0]);
const smo60284v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60284v1ar = [];
const smo60267 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60267.setAttribute('id', 'smo60267');
smo60267.setStyle({ fillStyle: '#aaaaaa7f' });
smo60284v1ar.push(smo60267);
const smo60268 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60268.setAttribute('id', 'smo60268');
smo60268.setStyle({ fillStyle: '#aaaaaa7f' });
smo60268.addModifier(new VF.Dot(), 0);
smo60268.addModifier(new VF.Dot(), 0);
smo60284v1ar.push(smo60268);
const smo60269 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60269.setAttribute('id', 'smo60269');
smo60269.setStyle({ fillStyle: '#aaaaaa7f' });
smo60284v1ar.push(smo60269);
const smo60270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60270.setAttribute('id', 'smo60270');
smo60270.setStyle({ fillStyle: '#aaaaaa7f' });
smo60270.addModifier(new VF.Dot(), 0);
smo60270.addModifier(new VF.Dot(), 0);
smo60284v1ar.push(smo60270);
smo60284v1.addTickables(smo60284v1ar)
fmtsmo6028411.joinVoices([smo60284v1]);
const fmtsmo6561911 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo65619v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65619v0ar = [];
const smo65598 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/6/r"]}'))
smo65598.setAttribute('id', 'smo65598');
smo65619v0ar.push(smo65598);
const smo65599 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/3/n"]}'))
smo65599.setAttribute('id', 'smo65599');
const smo655990acc = new VF.Accidental('#');
smo65599.addModifier(smo655990acc, 0);
smo65599.addModifier(new VF.Dot(), 0);
smo65619v0ar.push(smo65599);
const smo65600 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/3/n"]}'))
smo65600.setAttribute('id', 'smo65600');
smo65619v0ar.push(smo65600);
const smo65601 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/6/r"]}'))
smo65601.setAttribute('id', 'smo65601');
smo65619v0ar.push(smo65601);
const smo65602 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/3/n"]}'))
smo65602.setAttribute('id', 'smo65602');
smo65602.addModifier(new VF.Dot(), 0);
smo65619v0ar.push(smo65602);
const smo65603 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/3/n"]}'))
smo65603.setAttribute('id', 'smo65603');
smo65619v0ar.push(smo65603);
smo65619v0.addTickables(smo65619v0ar)
fmtsmo6561911.joinVoices([smo65619v0]);
const smo65619v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65619v1ar = [];
const smo65604 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65604.setAttribute('id', 'smo65604');
smo65604.setStyle({ fillStyle: "#115511" });
smo65619v1ar.push(smo65604);
const smo65605 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65605.setAttribute('id', 'smo65605');
smo65605.setStyle({ fillStyle: "#115511" });
smo65619v1ar.push(smo65605);
smo65619v1.addTickables(smo65619v1ar)
fmtsmo6561911.joinVoices([smo65619v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69399 = smo60254.getStemDirection();
smo60254.setStemDirection(dirsmo69399);
smo60255.setStemDirection(dirsmo69399);
const smo69399 = new VF.Beam([smo60254,smo60255]);
const dirsmo69400 = smo60256.getStemDirection();
smo60256.setStemDirection(dirsmo69400);
smo60257.setStemDirection(dirsmo69400);
smo60258.setStemDirection(dirsmo69400);
smo60259.setStemDirection(dirsmo69400);
const smo69400 = new VF.Beam([smo60256,smo60257,smo60258,smo60259]);
const dirsmo69401 = smo60261.getStemDirection();
smo60261.setStemDirection(dirsmo69401);
smo60262.setStemDirection(dirsmo69401);
const smo69401 = new VF.Beam([smo60261,smo60262]);
const dirsmo69402 = smo60263.getStemDirection();
smo60263.setStemDirection(dirsmo69402);
smo60264.setStemDirection(dirsmo69402);
smo60265.setStemDirection(dirsmo69402);
smo60266.setStemDirection(dirsmo69402);
const smo69402 = new VF.Beam([smo60263,smo60264,smo60265,smo60266]);
 
// formatting measures in staff group smo58712
fmtsmo6028411.format([smo60284v0,smo60284v1,smo65619v0,smo65619v1], 417);
const stavesmo60284 = new VF.Stave(1377, 923, 431);
stavesmo60284.setAttribute('id', 'stavesmo60284');
stavesmo60284.setBegBarType(VF.Barline.type.NONE);
stavesmo60284.setContext(context);
stavesmo60284.draw();
smo60284v0.draw(context, stavesmo60284);
smo60284v1.draw(context, stavesmo60284);
smo69399.setContext(context);
smo69399.draw();
smo69400.setContext(context);
smo69400.draw();
smo69401.setContext(context);
smo69401.draw();
smo69402.setContext(context);
smo69402.draw();
const stavesmo65619 = new VF.Stave(1377, 1102, 431);
stavesmo65619.setAttribute('id', 'stavesmo65619');
stavesmo65619.setBegBarType(VF.Barline.type.NONE);
stavesmo65619.setContext(context);
stavesmo65619.draw();
smo65619v0.draw(context, stavesmo65619);
smo65619v1.draw(context, stavesmo65619);
const rightsmo58712stavesmo602841 = new VF.StaveConnector(stavesmo60284, stavesmo65619).setType(0);
rightsmo58712stavesmo602841.setContext(context).draw();
const fmtsmo6031612 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo60316v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60316v0ar = [];
const smo60285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60285.setAttribute('id', 'smo60285');
smo60316v0ar.push(smo60285);
const smo60286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60286.setAttribute('id', 'smo60286');
smo60316v0ar.push(smo60286);
const smo60287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60287.setAttribute('id', 'smo60287');
smo60316v0ar.push(smo60287);
const smo60288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60288.setAttribute('id', 'smo60288');
smo60316v0ar.push(smo60288);
const smo60289 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60289.setAttribute('id', 'smo60289');
smo60316v0ar.push(smo60289);
const smo60290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60290.setAttribute('id', 'smo60290');
smo60316v0ar.push(smo60290);
const smo60291 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60291.setAttribute('id', 'smo60291');
smo60316v0ar.push(smo60291);
const smo60292 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60292.setAttribute('id', 'smo60292');
smo60316v0ar.push(smo60292);
const smo60293 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60293.setAttribute('id', 'smo60293');
smo60316v0ar.push(smo60293);
const smo60294 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60294.setAttribute('id', 'smo60294');
smo60316v0ar.push(smo60294);
const smo60295 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60295.setAttribute('id', 'smo60295');
smo60316v0ar.push(smo60295);
const smo60296 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60296.setAttribute('id', 'smo60296');
smo60316v0ar.push(smo60296);
const smo60297 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60297.setAttribute('id', 'smo60297');
smo60316v0ar.push(smo60297);
const smo60298 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60298.setAttribute('id', 'smo60298');
smo60316v0ar.push(smo60298);
smo60316v0.addTickables(smo60316v0ar)
fmtsmo6031612.joinVoices([smo60316v0]);
const smo60316v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60316v1ar = [];
const smo60299 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60299.setAttribute('id', 'smo60299');
smo60299.setStyle({ fillStyle: '#aaaaaa7f' });
smo60316v1ar.push(smo60299);
const smo60300 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60300.setAttribute('id', 'smo60300');
smo60300.setStyle({ fillStyle: '#aaaaaa7f' });
smo60300.addModifier(new VF.Dot(), 0);
smo60300.addModifier(new VF.Dot(), 0);
smo60316v1ar.push(smo60300);
const smo60301 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60301.setAttribute('id', 'smo60301');
smo60301.setStyle({ fillStyle: '#aaaaaa7f' });
smo60316v1ar.push(smo60301);
const smo60302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60302.setAttribute('id', 'smo60302');
smo60302.setStyle({ fillStyle: '#aaaaaa7f' });
smo60302.addModifier(new VF.Dot(), 0);
smo60302.addModifier(new VF.Dot(), 0);
smo60316v1ar.push(smo60302);
smo60316v1.addTickables(smo60316v1ar)
fmtsmo6031612.joinVoices([smo60316v1]);
const fmtsmo6564112 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo65641v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65641v0ar = [];
const smo65620 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/6/r"]}'))
smo65620.setAttribute('id', 'smo65620');
smo65641v0ar.push(smo65620);
const smo65621 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo65621.setAttribute('id', 'smo65621');
smo65621.addModifier(new VF.Dot(), 0);
smo65641v0ar.push(smo65621);
const smo65622 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo65622.setAttribute('id', 'smo65622');
smo65641v0ar.push(smo65622);
const smo65623 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/6/r"]}'))
smo65623.setAttribute('id', 'smo65623');
smo65641v0ar.push(smo65623);
const smo65624 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo65624.setAttribute('id', 'smo65624');
smo65624.addModifier(new VF.Dot(), 0);
smo65641v0ar.push(smo65624);
const smo65625 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo65625.setAttribute('id', 'smo65625');
smo65641v0ar.push(smo65625);
smo65641v0.addTickables(smo65641v0ar)
fmtsmo6564112.joinVoices([smo65641v0]);
const smo65641v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65641v1ar = [];
const smo65626 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65626.setAttribute('id', 'smo65626');
smo65626.setStyle({ fillStyle: "#115511" });
smo65641v1ar.push(smo65626);
const smo65627 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65627.setAttribute('id', 'smo65627');
smo65627.setStyle({ fillStyle: "#115511" });
smo65641v1ar.push(smo65627);
smo65641v1.addTickables(smo65641v1ar)
fmtsmo6564112.joinVoices([smo65641v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69415 = smo60286.getStemDirection();
smo60286.setStemDirection(dirsmo69415);
smo60287.setStemDirection(dirsmo69415);
const smo69415 = new VF.Beam([smo60286,smo60287]);
const dirsmo69416 = smo60288.getStemDirection();
smo60288.setStemDirection(dirsmo69416);
smo60289.setStemDirection(dirsmo69416);
smo60290.setStemDirection(dirsmo69416);
smo60291.setStemDirection(dirsmo69416);
const smo69416 = new VF.Beam([smo60288,smo60289,smo60290,smo60291]);
const dirsmo69417 = smo60293.getStemDirection();
smo60293.setStemDirection(dirsmo69417);
smo60294.setStemDirection(dirsmo69417);
const smo69417 = new VF.Beam([smo60293,smo60294]);
const dirsmo69418 = smo60295.getStemDirection();
smo60295.setStemDirection(dirsmo69418);
smo60296.setStemDirection(dirsmo69418);
smo60297.setStemDirection(dirsmo69418);
smo60298.setStemDirection(dirsmo69418);
const smo69418 = new VF.Beam([smo60295,smo60296,smo60297,smo60298]);
 
// formatting measures in staff group smo58712
fmtsmo6031612.format([smo60316v0,smo60316v1,smo65641v0,smo65641v1], 393);
const stavesmo60316 = new VF.Stave(90, 1266, 444);
stavesmo60316.setAttribute('id', 'stavesmo60316');
stavesmo60316.setBegBarType(1);
stavesmo60316.addClef('treble');
stavesmo60316.setContext(context);
stavesmo60316.draw();
smo60316v0.draw(context, stavesmo60316);
smo60316v1.draw(context, stavesmo60316);
smo69415.setContext(context);
smo69415.draw();
smo69416.setContext(context);
smo69416.draw();
smo69417.setContext(context);
smo69417.draw();
smo69418.setContext(context);
smo69418.draw();
const stavesmo65641 = new VF.Stave(90, 1440, 444);
stavesmo65641.setAttribute('id', 'stavesmo65641');
stavesmo65641.setBegBarType(1);
stavesmo65641.addClef('bass');
stavesmo65641.setContext(context);
stavesmo65641.draw();
smo65641v0.draw(context, stavesmo65641);
smo65641v1.draw(context, stavesmo65641);
const leftsmo58712stavesmo603161 = new VF.StaveConnector(stavesmo60316, stavesmo65641).setType(3);
leftsmo58712stavesmo603161.setContext(context).draw();
const fmtsmo6034813 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo60348v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60348v0ar = [];
const smo60317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60317.setAttribute('id', 'smo60317');
smo60348v0ar.push(smo60317);
const smo60318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60318.setAttribute('id', 'smo60318');
smo60348v0ar.push(smo60318);
const smo60319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60319.setAttribute('id', 'smo60319');
smo60348v0ar.push(smo60319);
const smo60320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60320.setAttribute('id', 'smo60320');
smo60348v0ar.push(smo60320);
const smo60321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60321.setAttribute('id', 'smo60321');
smo60348v0ar.push(smo60321);
const smo60322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60322.setAttribute('id', 'smo60322');
smo60348v0ar.push(smo60322);
const smo60323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60323.setAttribute('id', 'smo60323');
smo60348v0ar.push(smo60323);
const smo60324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60324.setAttribute('id', 'smo60324');
smo60348v0ar.push(smo60324);
const smo60325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60325.setAttribute('id', 'smo60325');
smo60348v0ar.push(smo60325);
const smo60326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60326.setAttribute('id', 'smo60326');
smo60348v0ar.push(smo60326);
const smo60327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60327.setAttribute('id', 'smo60327');
smo60348v0ar.push(smo60327);
const smo60328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60328.setAttribute('id', 'smo60328');
smo60348v0ar.push(smo60328);
const smo60329 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60329.setAttribute('id', 'smo60329');
smo60348v0ar.push(smo60329);
const smo60330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60330.setAttribute('id', 'smo60330');
smo60348v0ar.push(smo60330);
smo60348v0.addTickables(smo60348v0ar)
fmtsmo6034813.joinVoices([smo60348v0]);
const smo60348v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60348v1ar = [];
const smo60331 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60331.setAttribute('id', 'smo60331');
smo60331.setStyle({ fillStyle: '#aaaaaa7f' });
smo60348v1ar.push(smo60331);
const smo60332 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60332.setAttribute('id', 'smo60332');
smo60332.setStyle({ fillStyle: '#aaaaaa7f' });
smo60332.addModifier(new VF.Dot(), 0);
smo60332.addModifier(new VF.Dot(), 0);
smo60348v1ar.push(smo60332);
const smo60333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60333.setAttribute('id', 'smo60333');
smo60333.setStyle({ fillStyle: '#aaaaaa7f' });
smo60348v1ar.push(smo60333);
const smo60334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60334.setAttribute('id', 'smo60334');
smo60334.setStyle({ fillStyle: '#aaaaaa7f' });
smo60334.addModifier(new VF.Dot(), 0);
smo60334.addModifier(new VF.Dot(), 0);
smo60348v1ar.push(smo60334);
smo60348v1.addTickables(smo60348v1ar)
fmtsmo6034813.joinVoices([smo60348v1]);
const fmtsmo6566313 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo65663v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65663v0ar = [];
const smo65642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/6/r"]}'))
smo65642.setAttribute('id', 'smo65642');
smo65663v0ar.push(smo65642);
const smo65643 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["g#/3/n"]}'))
smo65643.setAttribute('id', 'smo65643');
const smo656430acc = new VF.Accidental('#');
smo65643.addModifier(smo656430acc, 0);
smo65643.addModifier(new VF.Dot(), 0);
smo65663v0ar.push(smo65643);
const smo65644 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["g#/3/n"]}'))
smo65644.setAttribute('id', 'smo65644');
smo65663v0ar.push(smo65644);
const smo65645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/6/r"]}'))
smo65645.setAttribute('id', 'smo65645');
smo65663v0ar.push(smo65645);
const smo65646 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["g#/3/n"]}'))
smo65646.setAttribute('id', 'smo65646');
smo65646.addModifier(new VF.Dot(), 0);
smo65663v0ar.push(smo65646);
const smo65647 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["g#/3/n"]}'))
smo65647.setAttribute('id', 'smo65647');
smo65663v0ar.push(smo65647);
smo65663v0.addTickables(smo65663v0ar)
fmtsmo6566313.joinVoices([smo65663v0]);
const smo65663v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65663v1ar = [];
const smo65648 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65648.setAttribute('id', 'smo65648');
smo65648.setStyle({ fillStyle: "#115511" });
smo65663v1ar.push(smo65648);
const smo65649 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65649.setAttribute('id', 'smo65649');
smo65649.setStyle({ fillStyle: "#115511" });
smo65663v1ar.push(smo65649);
smo65663v1.addTickables(smo65663v1ar)
fmtsmo6566313.joinVoices([smo65663v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69423 = smo60318.getStemDirection();
smo60318.setStemDirection(dirsmo69423);
smo60319.setStemDirection(dirsmo69423);
const smo69423 = new VF.Beam([smo60318,smo60319]);
const dirsmo69424 = smo60320.getStemDirection();
smo60320.setStemDirection(dirsmo69424);
smo60321.setStemDirection(dirsmo69424);
smo60322.setStemDirection(dirsmo69424);
smo60323.setStemDirection(dirsmo69424);
const smo69424 = new VF.Beam([smo60320,smo60321,smo60322,smo60323]);
const dirsmo69425 = smo60325.getStemDirection();
smo60325.setStemDirection(dirsmo69425);
smo60326.setStemDirection(dirsmo69425);
const smo69425 = new VF.Beam([smo60325,smo60326]);
const dirsmo69426 = smo60327.getStemDirection();
smo60327.setStemDirection(dirsmo69426);
smo60328.setStemDirection(dirsmo69426);
smo60329.setStemDirection(dirsmo69426);
smo60330.setStemDirection(dirsmo69426);
const smo69426 = new VF.Beam([smo60327,smo60328,smo60329,smo60330]);
 
// formatting measures in staff group smo58712
fmtsmo6034813.format([smo60348v0,smo60348v1,smo65663v0,smo65663v1], 412);
const stavesmo60348 = new VF.Stave(534, 1266, 426);
stavesmo60348.setAttribute('id', 'stavesmo60348');
stavesmo60348.setBegBarType(VF.Barline.type.NONE);
stavesmo60348.setContext(context);
stavesmo60348.draw();
smo60348v0.draw(context, stavesmo60348);
smo60348v1.draw(context, stavesmo60348);
smo69423.setContext(context);
smo69423.draw();
smo69424.setContext(context);
smo69424.draw();
smo69425.setContext(context);
smo69425.draw();
smo69426.setContext(context);
smo69426.draw();
const stavesmo65663 = new VF.Stave(534, 1440, 426);
stavesmo65663.setAttribute('id', 'stavesmo65663');
stavesmo65663.setBegBarType(VF.Barline.type.NONE);
stavesmo65663.setContext(context);
stavesmo65663.draw();
smo65663v0.draw(context, stavesmo65663);
smo65663v1.draw(context, stavesmo65663);
const fmtsmo6038014 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo60380v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60380v0ar = [];
const smo60349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60349.setAttribute('id', 'smo60349');
smo60380v0ar.push(smo60349);
const smo60350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60350.setAttribute('id', 'smo60350');
smo60380v0ar.push(smo60350);
const smo60351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60351.setAttribute('id', 'smo60351');
smo60380v0ar.push(smo60351);
const smo60352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60352.setAttribute('id', 'smo60352');
smo60380v0ar.push(smo60352);
const smo60353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60353.setAttribute('id', 'smo60353');
smo60380v0ar.push(smo60353);
const smo60354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60354.setAttribute('id', 'smo60354');
smo60380v0ar.push(smo60354);
const smo60355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60355.setAttribute('id', 'smo60355');
smo60380v0ar.push(smo60355);
const smo60356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60356.setAttribute('id', 'smo60356');
smo60380v0ar.push(smo60356);
const smo60357 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60357.setAttribute('id', 'smo60357');
smo60380v0ar.push(smo60357);
const smo60358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60358.setAttribute('id', 'smo60358');
smo60380v0ar.push(smo60358);
const smo60359 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60359.setAttribute('id', 'smo60359');
smo60380v0ar.push(smo60359);
const smo60360 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60360.setAttribute('id', 'smo60360');
smo60380v0ar.push(smo60360);
const smo60361 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60361.setAttribute('id', 'smo60361');
smo60380v0ar.push(smo60361);
const smo60362 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60362.setAttribute('id', 'smo60362');
smo60380v0ar.push(smo60362);
smo60380v0.addTickables(smo60380v0ar)
fmtsmo6038014.joinVoices([smo60380v0]);
const smo60380v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60380v1ar = [];
const smo60363 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60363.setAttribute('id', 'smo60363');
smo60363.setStyle({ fillStyle: '#aaaaaa7f' });
smo60380v1ar.push(smo60363);
const smo60364 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60364.setAttribute('id', 'smo60364');
smo60364.setStyle({ fillStyle: '#aaaaaa7f' });
smo60364.addModifier(new VF.Dot(), 0);
smo60364.addModifier(new VF.Dot(), 0);
smo60380v1ar.push(smo60364);
const smo60365 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60365.setAttribute('id', 'smo60365');
smo60365.setStyle({ fillStyle: '#aaaaaa7f' });
smo60380v1ar.push(smo60365);
const smo60366 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60366.setAttribute('id', 'smo60366');
smo60366.setStyle({ fillStyle: '#aaaaaa7f' });
smo60366.addModifier(new VF.Dot(), 0);
smo60366.addModifier(new VF.Dot(), 0);
smo60380v1ar.push(smo60366);
smo60380v1.addTickables(smo60380v1ar)
fmtsmo6038014.joinVoices([smo60380v1]);
const fmtsmo6568514 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo65685v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65685v0ar = [];
const smo65664 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/6/r"]}'))
smo65664.setAttribute('id', 'smo65664');
smo65685v0ar.push(smo65664);
const smo65665 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65665.setAttribute('id', 'smo65665');
smo65665.addModifier(new VF.Dot(), 0);
smo65685v0ar.push(smo65665);
const smo65666 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65666.setAttribute('id', 'smo65666');
smo65685v0ar.push(smo65666);
const smo65667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/6/r"]}'))
smo65667.setAttribute('id', 'smo65667');
smo65685v0ar.push(smo65667);
const smo65668 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65668.setAttribute('id', 'smo65668');
smo65668.addModifier(new VF.Dot(), 0);
smo65685v0ar.push(smo65668);
const smo65669 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65669.setAttribute('id', 'smo65669');
smo65685v0ar.push(smo65669);
smo65685v0.addTickables(smo65685v0ar)
fmtsmo6568514.joinVoices([smo65685v0]);
const smo65685v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65685v1ar = [];
const smo65670 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo65670.setAttribute('id', 'smo65670');
smo65670.setStyle({ fillStyle: "#115511" });
smo65685v1ar.push(smo65670);
const smo65671 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo65671.setAttribute('id', 'smo65671');
smo65671.setStyle({ fillStyle: "#115511" });
smo65685v1ar.push(smo65671);
smo65685v1.addTickables(smo65685v1ar)
fmtsmo6568514.joinVoices([smo65685v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69431 = smo60350.getStemDirection();
smo60350.setStemDirection(dirsmo69431);
smo60351.setStemDirection(dirsmo69431);
const smo69431 = new VF.Beam([smo60350,smo60351]);
const dirsmo69432 = smo60352.getStemDirection();
smo60352.setStemDirection(dirsmo69432);
smo60353.setStemDirection(dirsmo69432);
smo60354.setStemDirection(dirsmo69432);
smo60355.setStemDirection(dirsmo69432);
const smo69432 = new VF.Beam([smo60352,smo60353,smo60354,smo60355]);
const dirsmo69433 = smo60357.getStemDirection();
smo60357.setStemDirection(dirsmo69433);
smo60358.setStemDirection(dirsmo69433);
const smo69433 = new VF.Beam([smo60357,smo60358]);
const dirsmo69434 = smo60359.getStemDirection();
smo60359.setStemDirection(dirsmo69434);
smo60360.setStemDirection(dirsmo69434);
smo60361.setStemDirection(dirsmo69434);
smo60362.setStemDirection(dirsmo69434);
const smo69434 = new VF.Beam([smo60359,smo60360,smo60361,smo60362]);
 
// formatting measures in staff group smo58712
fmtsmo6038014.format([smo60380v0,smo60380v1,smo65685v0,smo65685v1], 392);
const stavesmo60380 = new VF.Stave(960, 1266, 406);
stavesmo60380.setAttribute('id', 'stavesmo60380');
stavesmo60380.setBegBarType(VF.Barline.type.NONE);
stavesmo60380.setContext(context);
stavesmo60380.draw();
smo60380v0.draw(context, stavesmo60380);
smo60380v1.draw(context, stavesmo60380);
smo69431.setContext(context);
smo69431.draw();
smo69432.setContext(context);
smo69432.draw();
smo69433.setContext(context);
smo69433.draw();
smo69434.setContext(context);
smo69434.draw();
const stavesmo65685 = new VF.Stave(960, 1440, 406);
stavesmo65685.setAttribute('id', 'stavesmo65685');
stavesmo65685.setBegBarType(VF.Barline.type.NONE);
stavesmo65685.setContext(context);
stavesmo65685.draw();
smo65685v0.draw(context, stavesmo65685);
smo65685v1.draw(context, stavesmo65685);
const fmtsmo6041215 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo60412v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60412v0ar = [];
const smo60381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60381.setAttribute('id', 'smo60381');
smo60412v0ar.push(smo60381);
const smo60382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo60382.setAttribute('id', 'smo60382');
smo60412v0ar.push(smo60382);
const smo60383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60383.setAttribute('id', 'smo60383');
smo60412v0ar.push(smo60383);
const smo60384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60384.setAttribute('id', 'smo60384');
smo60412v0ar.push(smo60384);
const smo60385 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo60385.setAttribute('id', 'smo60385');
smo60412v0ar.push(smo60385);
const smo60386 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60386.setAttribute('id', 'smo60386');
smo60412v0ar.push(smo60386);
const smo60387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60387.setAttribute('id', 'smo60387');
smo60412v0ar.push(smo60387);
const smo60388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60388.setAttribute('id', 'smo60388');
smo60412v0ar.push(smo60388);
const smo60389 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo60389.setAttribute('id', 'smo60389');
smo60412v0ar.push(smo60389);
const smo60390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60390.setAttribute('id', 'smo60390');
smo60412v0ar.push(smo60390);
const smo60391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60391.setAttribute('id', 'smo60391');
smo60412v0ar.push(smo60391);
const smo60392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo60392.setAttribute('id', 'smo60392');
smo60412v0ar.push(smo60392);
const smo60393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60393.setAttribute('id', 'smo60393');
smo60412v0ar.push(smo60393);
const smo60394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60394.setAttribute('id', 'smo60394');
smo60412v0ar.push(smo60394);
smo60412v0.addTickables(smo60412v0ar)
fmtsmo6041215.joinVoices([smo60412v0]);
const smo60412v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60412v1ar = [];
const smo60395 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60395.setAttribute('id', 'smo60395');
smo60395.setStyle({ fillStyle: '#aaaaaa7f' });
smo60412v1ar.push(smo60395);
const smo60396 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60396.setAttribute('id', 'smo60396');
smo60396.setStyle({ fillStyle: '#aaaaaa7f' });
smo60396.addModifier(new VF.Dot(), 0);
smo60396.addModifier(new VF.Dot(), 0);
smo60412v1ar.push(smo60396);
const smo60397 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60397.setAttribute('id', 'smo60397');
smo60397.setStyle({ fillStyle: '#aaaaaa7f' });
smo60412v1ar.push(smo60397);
const smo60398 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60398.setAttribute('id', 'smo60398');
smo60398.setStyle({ fillStyle: '#aaaaaa7f' });
smo60398.addModifier(new VF.Dot(), 0);
smo60398.addModifier(new VF.Dot(), 0);
smo60412v1ar.push(smo60398);
smo60412v1.addTickables(smo60412v1ar)
fmtsmo6041215.joinVoices([smo60412v1]);
const fmtsmo6570715 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo65707v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65707v0ar = [];
const smo65686 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo65686.setAttribute('id', 'smo65686');
smo65707v0ar.push(smo65686);
const smo65687 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65687.setAttribute('id', 'smo65687');
smo65687.addModifier(new VF.Dot(), 0);
smo65707v0ar.push(smo65687);
const smo65688 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65688.setAttribute('id', 'smo65688');
smo65707v0ar.push(smo65688);
const smo65689 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo65689.setAttribute('id', 'smo65689');
smo65707v0ar.push(smo65689);
const smo65690 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65690.setAttribute('id', 'smo65690');
smo65690.addModifier(new VF.Dot(), 0);
smo65707v0ar.push(smo65690);
const smo65691 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65691.setAttribute('id', 'smo65691');
smo65707v0ar.push(smo65691);
smo65707v0.addTickables(smo65707v0ar)
fmtsmo6570715.joinVoices([smo65707v0]);
const smo65707v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65707v1ar = [];
const smo65692 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo65692.setAttribute('id', 'smo65692');
smo65692.setStyle({ fillStyle: "#115511" });
smo65707v1ar.push(smo65692);
const smo65693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo65693.setAttribute('id', 'smo65693');
smo65693.setStyle({ fillStyle: "#115511" });
smo65707v1ar.push(smo65693);
smo65707v1.addTickables(smo65707v1ar)
fmtsmo6570715.joinVoices([smo65707v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69439 = smo60382.getStemDirection();
smo60382.setStemDirection(dirsmo69439);
smo60383.setStemDirection(dirsmo69439);
const smo69439 = new VF.Beam([smo60382,smo60383]);
const dirsmo69440 = smo60384.getStemDirection();
smo60384.setStemDirection(dirsmo69440);
smo60385.setStemDirection(dirsmo69440);
smo60386.setStemDirection(dirsmo69440);
smo60387.setStemDirection(dirsmo69440);
const smo69440 = new VF.Beam([smo60384,smo60385,smo60386,smo60387]);
const dirsmo69441 = smo60389.getStemDirection();
smo60389.setStemDirection(dirsmo69441);
smo60390.setStemDirection(dirsmo69441);
const smo69441 = new VF.Beam([smo60389,smo60390]);
const dirsmo69442 = smo60391.getStemDirection();
smo60391.setStemDirection(dirsmo69442);
smo60392.setStemDirection(dirsmo69442);
smo60393.setStemDirection(dirsmo69442);
smo60394.setStemDirection(dirsmo69442);
const smo69442 = new VF.Beam([smo60391,smo60392,smo60393,smo60394]);
 
// formatting measures in staff group smo58712
fmtsmo6041215.format([smo60412v0,smo60412v1,smo65707v0,smo65707v1], 429);
const stavesmo60412 = new VF.Stave(1366, 1266, 443);
stavesmo60412.setAttribute('id', 'stavesmo60412');
stavesmo60412.setBegBarType(VF.Barline.type.NONE);
stavesmo60412.setContext(context);
stavesmo60412.draw();
smo60412v0.draw(context, stavesmo60412);
smo60412v1.draw(context, stavesmo60412);
smo69439.setContext(context);
smo69439.draw();
smo69440.setContext(context);
smo69440.draw();
smo69441.setContext(context);
smo69441.draw();
smo69442.setContext(context);
smo69442.draw();
const stavesmo65707 = new VF.Stave(1366, 1440, 443);
stavesmo65707.setAttribute('id', 'stavesmo65707');
stavesmo65707.setBegBarType(VF.Barline.type.NONE);
stavesmo65707.addClef('treble');
stavesmo65707.setContext(context);
stavesmo65707.draw();
smo65707v0.draw(context, stavesmo65707);
smo65707v1.draw(context, stavesmo65707);
const rightsmo58712stavesmo604121 = new VF.StaveConnector(stavesmo60412, stavesmo65707).setType(0);
rightsmo58712stavesmo604121.setContext(context).draw();
const fmtsmo6044416 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo60444v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60444v0ar = [];
const smo60413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60413.setAttribute('id', 'smo60413');
smo60444v0ar.push(smo60413);
const smo60414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo60414.setAttribute('id', 'smo60414');
smo60444v0ar.push(smo60414);
const smo60415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60415.setAttribute('id', 'smo60415');
smo60444v0ar.push(smo60415);
const smo60416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60416.setAttribute('id', 'smo60416');
smo60444v0ar.push(smo60416);
const smo60417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo60417.setAttribute('id', 'smo60417');
smo60444v0ar.push(smo60417);
const smo60418 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60418.setAttribute('id', 'smo60418');
smo60444v0ar.push(smo60418);
const smo60419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60419.setAttribute('id', 'smo60419');
smo60444v0ar.push(smo60419);
const smo60420 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60420.setAttribute('id', 'smo60420');
smo60444v0ar.push(smo60420);
const smo60421 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo60421.setAttribute('id', 'smo60421');
smo60444v0ar.push(smo60421);
const smo60422 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60422.setAttribute('id', 'smo60422');
smo60444v0ar.push(smo60422);
const smo60423 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60423.setAttribute('id', 'smo60423');
smo60444v0ar.push(smo60423);
const smo60424 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo60424.setAttribute('id', 'smo60424');
smo60444v0ar.push(smo60424);
const smo60425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60425.setAttribute('id', 'smo60425');
smo60444v0ar.push(smo60425);
const smo60426 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60426.setAttribute('id', 'smo60426');
smo60444v0ar.push(smo60426);
smo60444v0.addTickables(smo60444v0ar)
fmtsmo6044416.joinVoices([smo60444v0]);
const smo60444v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60444v1ar = [];
const smo60427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60427.setAttribute('id', 'smo60427');
smo60427.setStyle({ fillStyle: '#aaaaaa7f' });
smo60444v1ar.push(smo60427);
const smo60428 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60428.setAttribute('id', 'smo60428');
smo60428.setStyle({ fillStyle: '#aaaaaa7f' });
smo60428.addModifier(new VF.Dot(), 0);
smo60428.addModifier(new VF.Dot(), 0);
smo60444v1ar.push(smo60428);
const smo60429 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60429.setAttribute('id', 'smo60429');
smo60429.setStyle({ fillStyle: '#aaaaaa7f' });
smo60444v1ar.push(smo60429);
const smo60430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60430.setAttribute('id', 'smo60430');
smo60430.setStyle({ fillStyle: '#aaaaaa7f' });
smo60430.addModifier(new VF.Dot(), 0);
smo60430.addModifier(new VF.Dot(), 0);
smo60444v1ar.push(smo60430);
smo60444v1.addTickables(smo60444v1ar)
fmtsmo6044416.joinVoices([smo60444v1]);
const fmtsmo6572916 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo65729v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65729v0ar = [];
const smo65708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo65708.setAttribute('id', 'smo65708');
smo65729v0ar.push(smo65708);
const smo65709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65709.setAttribute('id', 'smo65709');
smo65709.addModifier(new VF.Dot(), 0);
smo65729v0ar.push(smo65709);
const smo65710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65710.setAttribute('id', 'smo65710');
smo65729v0ar.push(smo65710);
const smo65711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo65711.setAttribute('id', 'smo65711');
smo65729v0ar.push(smo65711);
const smo65712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65712.setAttribute('id', 'smo65712');
smo65712.addModifier(new VF.Dot(), 0);
smo65729v0ar.push(smo65712);
const smo65713 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65713.setAttribute('id', 'smo65713');
smo65729v0ar.push(smo65713);
smo65729v0.addTickables(smo65729v0ar)
fmtsmo6572916.joinVoices([smo65729v0]);
const smo65729v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65729v1ar = [];
const smo65714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65714.setAttribute('id', 'smo65714');
smo65714.setStyle({ fillStyle: "#115511" });
smo65729v1ar.push(smo65714);
const smo65715 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65715.setAttribute('id', 'smo65715');
smo65715.setStyle({ fillStyle: "#115511" });
smo65729v1ar.push(smo65715);
smo65729v1.addTickables(smo65729v1ar)
fmtsmo6572916.joinVoices([smo65729v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69455 = smo60414.getStemDirection();
smo60414.setStemDirection(dirsmo69455);
smo60415.setStemDirection(dirsmo69455);
const smo69455 = new VF.Beam([smo60414,smo60415]);
const dirsmo69456 = smo60416.getStemDirection();
smo60416.setStemDirection(dirsmo69456);
smo60417.setStemDirection(dirsmo69456);
smo60418.setStemDirection(dirsmo69456);
smo60419.setStemDirection(dirsmo69456);
const smo69456 = new VF.Beam([smo60416,smo60417,smo60418,smo60419]);
const dirsmo69457 = smo60421.getStemDirection();
smo60421.setStemDirection(dirsmo69457);
smo60422.setStemDirection(dirsmo69457);
const smo69457 = new VF.Beam([smo60421,smo60422]);
const dirsmo69458 = smo60423.getStemDirection();
smo60423.setStemDirection(dirsmo69458);
smo60424.setStemDirection(dirsmo69458);
smo60425.setStemDirection(dirsmo69458);
smo60426.setStemDirection(dirsmo69458);
const smo69458 = new VF.Beam([smo60423,smo60424,smo60425,smo60426]);
 
// formatting measures in staff group smo58712
fmtsmo6044416.format([smo60444v0,smo60444v1,smo65729v0,smo65729v1], 397);
const stavesmo60444 = new VF.Stave(90, 1609, 448);
stavesmo60444.setAttribute('id', 'stavesmo60444');
stavesmo60444.setBegBarType(1);
stavesmo60444.addClef('treble');
stavesmo60444.setContext(context);
stavesmo60444.draw();
smo60444v0.draw(context, stavesmo60444);
smo60444v1.draw(context, stavesmo60444);
smo69455.setContext(context);
smo69455.draw();
smo69456.setContext(context);
smo69456.draw();
smo69457.setContext(context);
smo69457.draw();
smo69458.setContext(context);
smo69458.draw();
const stavesmo65729 = new VF.Stave(90, 1693, 448);
stavesmo65729.setAttribute('id', 'stavesmo65729');
stavesmo65729.setBegBarType(1);
stavesmo65729.addClef('treble');
stavesmo65729.setContext(context);
stavesmo65729.draw();
smo65729v0.draw(context, stavesmo65729);
smo65729v1.draw(context, stavesmo65729);
const leftsmo58712stavesmo604441 = new VF.StaveConnector(stavesmo60444, stavesmo65729).setType(3);
leftsmo58712stavesmo604441.setContext(context).draw();
const fmtsmo6047617 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo60476v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60476v0ar = [];
const smo60445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60445.setAttribute('id', 'smo60445');
smo60476v0ar.push(smo60445);
const smo60446 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60446.setAttribute('id', 'smo60446');
smo60476v0ar.push(smo60446);
const smo60447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","stemDirection":1,"autoStem":false,"keys":["bn/4/r"]}'))
smo60447.setAttribute('id', 'smo60447');
smo60476v0ar.push(smo60447);
const smo60448 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60448.setAttribute('id', 'smo60448');
smo60476v0ar.push(smo60448);
const smo60449 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60449.setAttribute('id', 'smo60449');
smo60476v0ar.push(smo60449);
const smo60450 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo60450.setAttribute('id', 'smo60450');
smo60476v0ar.push(smo60450);
const smo60451 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60451.setAttribute('id', 'smo60451');
smo60476v0ar.push(smo60451);
const smo60452 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60452.setAttribute('id', 'smo60452');
smo60476v0ar.push(smo60452);
const smo60453 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60453.setAttribute('id', 'smo60453');
smo60476v0ar.push(smo60453);
const smo60454 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo60454.setAttribute('id', 'smo60454');
smo60476v0ar.push(smo60454);
const smo60455 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60455.setAttribute('id', 'smo60455');
smo60476v0ar.push(smo60455);
const smo60456 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60456.setAttribute('id', 'smo60456');
smo60476v0ar.push(smo60456);
const smo60457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo60457.setAttribute('id', 'smo60457');
smo60476v0ar.push(smo60457);
const smo60458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60458.setAttribute('id', 'smo60458');
smo60476v0ar.push(smo60458);
smo60476v0.addTickables(smo60476v0ar)
fmtsmo6047617.joinVoices([smo60476v0]);
const smo60476v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60476v1ar = [];
const smo60459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60459.setAttribute('id', 'smo60459');
smo60459.setStyle({ fillStyle: '#aaaaaa7f' });
smo60476v1ar.push(smo60459);
const smo60460 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60460.setAttribute('id', 'smo60460');
smo60460.setStyle({ fillStyle: '#aaaaaa7f' });
smo60460.addModifier(new VF.Dot(), 0);
smo60460.addModifier(new VF.Dot(), 0);
smo60476v1ar.push(smo60460);
const smo60461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60461.setAttribute('id', 'smo60461');
smo60461.setStyle({ fillStyle: '#aaaaaa7f' });
smo60476v1ar.push(smo60461);
const smo60462 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60462.setAttribute('id', 'smo60462');
smo60462.setStyle({ fillStyle: '#aaaaaa7f' });
smo60462.addModifier(new VF.Dot(), 0);
smo60462.addModifier(new VF.Dot(), 0);
smo60476v1ar.push(smo60462);
smo60476v1.addTickables(smo60476v1ar)
fmtsmo6047617.joinVoices([smo60476v1]);
const fmtsmo6575117 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo65751v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65751v0ar = [];
const smo65730 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo65730.setAttribute('id', 'smo65730');
smo65751v0ar.push(smo65730);
const smo65731 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65731.setAttribute('id', 'smo65731');
smo65731.addModifier(new VF.Dot(), 0);
smo65751v0ar.push(smo65731);
const smo65732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65732.setAttribute('id', 'smo65732');
smo65751v0ar.push(smo65732);
const smo65733 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo65733.setAttribute('id', 'smo65733');
smo65751v0ar.push(smo65733);
const smo65734 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65734.setAttribute('id', 'smo65734');
smo65734.addModifier(new VF.Dot(), 0);
smo65751v0ar.push(smo65734);
const smo65735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65735.setAttribute('id', 'smo65735');
smo65751v0ar.push(smo65735);
smo65751v0.addTickables(smo65751v0ar)
fmtsmo6575117.joinVoices([smo65751v0]);
const smo65751v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65751v1ar = [];
const smo65736 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo65736.setAttribute('id', 'smo65736');
smo65736.setStyle({ fillStyle: "#115511" });
smo65751v1ar.push(smo65736);
const smo65737 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo65737.setAttribute('id', 'smo65737');
smo65737.setStyle({ fillStyle: "#115511" });
smo65751v1ar.push(smo65737);
smo65751v1.addTickables(smo65751v1ar)
fmtsmo6575117.joinVoices([smo65751v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69463 = smo60448.getStemDirection();
smo60448.setStemDirection(dirsmo69463);
smo60449.setStemDirection(dirsmo69463);
smo60450.setStemDirection(dirsmo69463);
smo60451.setStemDirection(dirsmo69463);
const smo69463 = new VF.Beam([smo60448,smo60449,smo60450,smo60451]);
const dirsmo69464 = smo60453.getStemDirection();
smo60453.setStemDirection(dirsmo69464);
smo60454.setStemDirection(dirsmo69464);
const smo69464 = new VF.Beam([smo60453,smo60454]);
const dirsmo69465 = smo60455.getStemDirection();
smo60455.setStemDirection(dirsmo69465);
smo60456.setStemDirection(dirsmo69465);
smo60457.setStemDirection(dirsmo69465);
smo60458.setStemDirection(dirsmo69465);
const smo69465 = new VF.Beam([smo60455,smo60456,smo60457,smo60458]);
 
// formatting measures in staff group smo58712
fmtsmo6047617.format([smo60476v0,smo60476v1,smo65751v0,smo65751v1], 397);
const stavesmo60476 = new VF.Stave(538, 1609, 411);
stavesmo60476.setAttribute('id', 'stavesmo60476');
stavesmo60476.setBegBarType(VF.Barline.type.NONE);
stavesmo60476.setContext(context);
stavesmo60476.draw();
smo60476v0.draw(context, stavesmo60476);
smo60476v1.draw(context, stavesmo60476);
smo69463.setContext(context);
smo69463.draw();
smo69464.setContext(context);
smo69464.draw();
smo69465.setContext(context);
smo69465.draw();
const stavesmo65751 = new VF.Stave(538, 1693, 411);
stavesmo65751.setAttribute('id', 'stavesmo65751');
stavesmo65751.setBegBarType(VF.Barline.type.NONE);
stavesmo65751.setContext(context);
stavesmo65751.draw();
smo65751v0.draw(context, stavesmo65751);
smo65751v1.draw(context, stavesmo65751);
const fmtsmo6050818 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo60508v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60508v0ar = [];
const smo60477 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60477.setAttribute('id', 'smo60477');
smo60508v0ar.push(smo60477);
const smo60478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60478.setAttribute('id', 'smo60478');
smo60508v0ar.push(smo60478);
const smo60479 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60479.setAttribute('id', 'smo60479');
smo60508v0ar.push(smo60479);
const smo60480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60480.setAttribute('id', 'smo60480');
smo60508v0ar.push(smo60480);
const smo60481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60481.setAttribute('id', 'smo60481');
smo60508v0ar.push(smo60481);
const smo60482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60482.setAttribute('id', 'smo60482');
smo60508v0ar.push(smo60482);
const smo60483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60483.setAttribute('id', 'smo60483');
smo60508v0ar.push(smo60483);
const smo60484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60484.setAttribute('id', 'smo60484');
smo60508v0ar.push(smo60484);
const smo60485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60485.setAttribute('id', 'smo60485');
smo60508v0ar.push(smo60485);
const smo60486 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60486.setAttribute('id', 'smo60486');
smo60508v0ar.push(smo60486);
const smo60487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60487.setAttribute('id', 'smo60487');
smo60508v0ar.push(smo60487);
const smo60488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60488.setAttribute('id', 'smo60488');
smo60508v0ar.push(smo60488);
const smo60489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60489.setAttribute('id', 'smo60489');
smo60508v0ar.push(smo60489);
const smo60490 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60490.setAttribute('id', 'smo60490');
smo60508v0ar.push(smo60490);
smo60508v0.addTickables(smo60508v0ar)
fmtsmo6050818.joinVoices([smo60508v0]);
const smo60508v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60508v1ar = [];
const smo60491 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60491.setAttribute('id', 'smo60491');
smo60491.setStyle({ fillStyle: '#aaaaaa7f' });
smo60508v1ar.push(smo60491);
const smo60492 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60492.setAttribute('id', 'smo60492');
smo60492.setStyle({ fillStyle: '#aaaaaa7f' });
smo60492.addModifier(new VF.Dot(), 0);
smo60492.addModifier(new VF.Dot(), 0);
smo60508v1ar.push(smo60492);
const smo60493 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60493.setAttribute('id', 'smo60493');
smo60493.setStyle({ fillStyle: '#aaaaaa7f' });
smo60508v1ar.push(smo60493);
const smo60494 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60494.setAttribute('id', 'smo60494');
smo60494.setStyle({ fillStyle: '#aaaaaa7f' });
smo60494.addModifier(new VF.Dot(), 0);
smo60494.addModifier(new VF.Dot(), 0);
smo60508v1ar.push(smo60494);
smo60508v1.addTickables(smo60508v1ar)
fmtsmo6050818.joinVoices([smo60508v1]);
const fmtsmo6577318 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo65773v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65773v0ar = [];
const smo65752 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo65752.setAttribute('id', 'smo65752');
smo65773v0ar.push(smo65752);
const smo65753 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo65753.setAttribute('id', 'smo65753');
smo65753.addModifier(new VF.Dot(), 0);
smo65773v0ar.push(smo65753);
const smo65754 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo65754.setAttribute('id', 'smo65754');
smo65773v0ar.push(smo65754);
const smo65755 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo65755.setAttribute('id', 'smo65755');
smo65773v0ar.push(smo65755);
const smo65756 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo65756.setAttribute('id', 'smo65756');
smo65756.addModifier(new VF.Dot(), 0);
smo65773v0ar.push(smo65756);
const smo65757 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo65757.setAttribute('id', 'smo65757');
smo65773v0ar.push(smo65757);
smo65773v0.addTickables(smo65773v0ar)
fmtsmo6577318.joinVoices([smo65773v0]);
const smo65773v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65773v1ar = [];
const smo65758 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65758.setAttribute('id', 'smo65758');
smo65758.setStyle({ fillStyle: "#115511" });
smo65773v1ar.push(smo65758);
const smo65759 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65759.setAttribute('id', 'smo65759');
smo65759.setStyle({ fillStyle: "#115511" });
smo65773v1ar.push(smo65759);
smo65773v1.addTickables(smo65773v1ar)
fmtsmo6577318.joinVoices([smo65773v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69470 = smo60478.getStemDirection();
smo60478.setStemDirection(dirsmo69470);
smo60479.setStemDirection(dirsmo69470);
const smo69470 = new VF.Beam([smo60478,smo60479]);
const dirsmo69471 = smo60480.getStemDirection();
smo60480.setStemDirection(dirsmo69471);
smo60481.setStemDirection(dirsmo69471);
smo60482.setStemDirection(dirsmo69471);
smo60483.setStemDirection(dirsmo69471);
const smo69471 = new VF.Beam([smo60480,smo60481,smo60482,smo60483]);
const dirsmo69472 = smo60485.getStemDirection();
smo60485.setStemDirection(dirsmo69472);
smo60486.setStemDirection(dirsmo69472);
const smo69472 = new VF.Beam([smo60485,smo60486]);
const dirsmo69473 = smo60487.getStemDirection();
smo60487.setStemDirection(dirsmo69473);
smo60488.setStemDirection(dirsmo69473);
smo60489.setStemDirection(dirsmo69473);
smo60490.setStemDirection(dirsmo69473);
const smo69473 = new VF.Beam([smo60487,smo60488,smo60489,smo60490]);
 
// formatting measures in staff group smo58712
fmtsmo6050818.format([smo60508v0,smo60508v1,smo65773v0,smo65773v1], 397);
const stavesmo60508 = new VF.Stave(949, 1609, 411);
stavesmo60508.setAttribute('id', 'stavesmo60508');
stavesmo60508.setBegBarType(VF.Barline.type.NONE);
stavesmo60508.setContext(context);
stavesmo60508.draw();
smo60508v0.draw(context, stavesmo60508);
smo60508v1.draw(context, stavesmo60508);
smo69470.setContext(context);
smo69470.draw();
smo69471.setContext(context);
smo69471.draw();
smo69472.setContext(context);
smo69472.draw();
smo69473.setContext(context);
smo69473.draw();
const stavesmo65773 = new VF.Stave(949, 1693, 411);
stavesmo65773.setAttribute('id', 'stavesmo65773');
stavesmo65773.setBegBarType(VF.Barline.type.NONE);
stavesmo65773.setContext(context);
stavesmo65773.draw();
smo65773v0.draw(context, stavesmo65773);
smo65773v1.draw(context, stavesmo65773);
const fmtsmo6054019 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo60540v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60540v0ar = [];
const smo60509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60509.setAttribute('id', 'smo60509');
smo60540v0ar.push(smo60509);
const smo60510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo60510.setAttribute('id', 'smo60510');
const smo605100acc = new VF.Accidental('b');
smo60510.addModifier(smo605100acc, 0);
smo60540v0ar.push(smo60510);
const smo60511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60511.setAttribute('id', 'smo60511');
smo60540v0ar.push(smo60511);
const smo60512 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60512.setAttribute('id', 'smo60512');
smo60540v0ar.push(smo60512);
const smo60513 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo60513.setAttribute('id', 'smo60513');
smo60540v0ar.push(smo60513);
const smo60514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60514.setAttribute('id', 'smo60514');
smo60540v0ar.push(smo60514);
const smo60515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60515.setAttribute('id', 'smo60515');
smo60540v0ar.push(smo60515);
const smo60516 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60516.setAttribute('id', 'smo60516');
smo60540v0ar.push(smo60516);
const smo60517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo60517.setAttribute('id', 'smo60517');
smo60540v0ar.push(smo60517);
const smo60518 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60518.setAttribute('id', 'smo60518');
smo60540v0ar.push(smo60518);
const smo60519 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60519.setAttribute('id', 'smo60519');
smo60540v0ar.push(smo60519);
const smo60520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo60520.setAttribute('id', 'smo60520');
smo60540v0ar.push(smo60520);
const smo60521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60521.setAttribute('id', 'smo60521');
smo60540v0ar.push(smo60521);
const smo60522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60522.setAttribute('id', 'smo60522');
smo60540v0ar.push(smo60522);
smo60540v0.addTickables(smo60540v0ar)
fmtsmo6054019.joinVoices([smo60540v0]);
const smo60540v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60540v1ar = [];
const smo60523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60523.setAttribute('id', 'smo60523');
smo60523.setStyle({ fillStyle: '#aaaaaa7f' });
smo60540v1ar.push(smo60523);
const smo60524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60524.setAttribute('id', 'smo60524');
smo60524.setStyle({ fillStyle: '#aaaaaa7f' });
smo60524.addModifier(new VF.Dot(), 0);
smo60524.addModifier(new VF.Dot(), 0);
smo60540v1ar.push(smo60524);
const smo60525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60525.setAttribute('id', 'smo60525');
smo60525.setStyle({ fillStyle: '#aaaaaa7f' });
smo60540v1ar.push(smo60525);
const smo60526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60526.setAttribute('id', 'smo60526');
smo60526.setStyle({ fillStyle: '#aaaaaa7f' });
smo60526.addModifier(new VF.Dot(), 0);
smo60526.addModifier(new VF.Dot(), 0);
smo60540v1ar.push(smo60526);
smo60540v1.addTickables(smo60540v1ar)
fmtsmo6054019.joinVoices([smo60540v1]);
const fmtsmo6579519 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo65795v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65795v0ar = [];
const smo65774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo65774.setAttribute('id', 'smo65774');
smo65795v0ar.push(smo65774);
const smo65775 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65775.setAttribute('id', 'smo65775');
smo65775.addModifier(new VF.Dot(), 0);
smo65795v0ar.push(smo65775);
const smo65776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65776.setAttribute('id', 'smo65776');
smo65795v0ar.push(smo65776);
const smo65777 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo65777.setAttribute('id', 'smo65777');
smo65795v0ar.push(smo65777);
const smo65778 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65778.setAttribute('id', 'smo65778');
smo65778.addModifier(new VF.Dot(), 0);
smo65795v0ar.push(smo65778);
const smo65779 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65779.setAttribute('id', 'smo65779');
smo65795v0ar.push(smo65779);
smo65795v0.addTickables(smo65795v0ar)
fmtsmo6579519.joinVoices([smo65795v0]);
const smo65795v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65795v1ar = [];
const smo65780 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65780.setAttribute('id', 'smo65780');
smo65780.setStyle({ fillStyle: "#115511" });
smo65795v1ar.push(smo65780);
const smo65781 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65781.setAttribute('id', 'smo65781');
smo65781.setStyle({ fillStyle: "#115511" });
smo65795v1ar.push(smo65781);
smo65795v1.addTickables(smo65795v1ar)
fmtsmo6579519.joinVoices([smo65795v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69478 = smo60510.getStemDirection();
smo60510.setStemDirection(dirsmo69478);
smo60511.setStemDirection(dirsmo69478);
const smo69478 = new VF.Beam([smo60510,smo60511]);
const dirsmo69479 = smo60512.getStemDirection();
smo60512.setStemDirection(dirsmo69479);
smo60513.setStemDirection(dirsmo69479);
smo60514.setStemDirection(dirsmo69479);
smo60515.setStemDirection(dirsmo69479);
const smo69479 = new VF.Beam([smo60512,smo60513,smo60514,smo60515]);
const dirsmo69480 = smo60517.getStemDirection();
smo60517.setStemDirection(dirsmo69480);
smo60518.setStemDirection(dirsmo69480);
const smo69480 = new VF.Beam([smo60517,smo60518]);
const dirsmo69481 = smo60519.getStemDirection();
smo60519.setStemDirection(dirsmo69481);
smo60520.setStemDirection(dirsmo69481);
smo60521.setStemDirection(dirsmo69481);
smo60522.setStemDirection(dirsmo69481);
const smo69481 = new VF.Beam([smo60519,smo60520,smo60521,smo60522]);
 
// formatting measures in staff group smo58712
fmtsmo6054019.format([smo60540v0,smo60540v1,smo65795v0,smo65795v1], 433);
const stavesmo60540 = new VF.Stave(1360, 1609, 447);
stavesmo60540.setAttribute('id', 'stavesmo60540');
stavesmo60540.setBegBarType(VF.Barline.type.NONE);
stavesmo60540.setContext(context);
stavesmo60540.draw();
smo60540v0.draw(context, stavesmo60540);
smo60540v1.draw(context, stavesmo60540);
smo69478.setContext(context);
smo69478.draw();
smo69479.setContext(context);
smo69479.draw();
smo69480.setContext(context);
smo69480.draw();
smo69481.setContext(context);
smo69481.draw();
const stavesmo65795 = new VF.Stave(1360, 1693, 447);
stavesmo65795.setAttribute('id', 'stavesmo65795');
stavesmo65795.setBegBarType(VF.Barline.type.NONE);
stavesmo65795.setContext(context);
stavesmo65795.draw();
smo65795v0.draw(context, stavesmo65795);
smo65795v1.draw(context, stavesmo65795);
const rightsmo58712stavesmo605401 = new VF.StaveConnector(stavesmo60540, stavesmo65795).setType(0);
rightsmo58712stavesmo605401.setContext(context).draw();
const fmtsmo6057220 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo60572v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60572v0ar = [];
const smo60541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60541.setAttribute('id', 'smo60541');
smo60572v0ar.push(smo60541);
const smo60542 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo60542.setAttribute('id', 'smo60542');
smo60572v0ar.push(smo60542);
const smo60543 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60543.setAttribute('id', 'smo60543');
smo60572v0ar.push(smo60543);
const smo60544 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60544.setAttribute('id', 'smo60544');
smo60572v0ar.push(smo60544);
const smo60545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo60545.setAttribute('id', 'smo60545');
smo60572v0ar.push(smo60545);
const smo60546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60546.setAttribute('id', 'smo60546');
smo60572v0ar.push(smo60546);
const smo60547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60547.setAttribute('id', 'smo60547');
smo60572v0ar.push(smo60547);
const smo60548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60548.setAttribute('id', 'smo60548');
smo60572v0ar.push(smo60548);
const smo60549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo60549.setAttribute('id', 'smo60549');
smo60572v0ar.push(smo60549);
const smo60550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60550.setAttribute('id', 'smo60550');
smo60572v0ar.push(smo60550);
const smo60551 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60551.setAttribute('id', 'smo60551');
smo60572v0ar.push(smo60551);
const smo60552 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo60552.setAttribute('id', 'smo60552');
smo60572v0ar.push(smo60552);
const smo60553 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60553.setAttribute('id', 'smo60553');
smo60572v0ar.push(smo60553);
const smo60554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60554.setAttribute('id', 'smo60554');
smo60572v0ar.push(smo60554);
smo60572v0.addTickables(smo60572v0ar)
fmtsmo6057220.joinVoices([smo60572v0]);
const smo60572v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60572v1ar = [];
const smo60555 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60555.setAttribute('id', 'smo60555');
smo60555.setStyle({ fillStyle: '#aaaaaa7f' });
smo60572v1ar.push(smo60555);
const smo60556 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60556.setAttribute('id', 'smo60556');
smo60556.setStyle({ fillStyle: '#aaaaaa7f' });
smo60556.addModifier(new VF.Dot(), 0);
smo60556.addModifier(new VF.Dot(), 0);
smo60572v1ar.push(smo60556);
const smo60557 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60557.setAttribute('id', 'smo60557');
smo60557.setStyle({ fillStyle: '#aaaaaa7f' });
smo60572v1ar.push(smo60557);
const smo60558 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60558.setAttribute('id', 'smo60558');
smo60558.setStyle({ fillStyle: '#aaaaaa7f' });
smo60558.addModifier(new VF.Dot(), 0);
smo60558.addModifier(new VF.Dot(), 0);
smo60572v1ar.push(smo60558);
smo60572v1.addTickables(smo60572v1ar)
fmtsmo6057220.joinVoices([smo60572v1]);
const fmtsmo6581720 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo65817v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65817v0ar = [];
const smo65796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo65796.setAttribute('id', 'smo65796');
smo65817v0ar.push(smo65796);
const smo65797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65797.setAttribute('id', 'smo65797');
smo65797.addModifier(new VF.Dot(), 0);
smo65817v0ar.push(smo65797);
const smo65798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65798.setAttribute('id', 'smo65798');
smo65817v0ar.push(smo65798);
const smo65799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo65799.setAttribute('id', 'smo65799');
smo65817v0ar.push(smo65799);
const smo65800 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65800.setAttribute('id', 'smo65800');
smo65800.addModifier(new VF.Dot(), 0);
smo65817v0ar.push(smo65800);
const smo65801 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65801.setAttribute('id', 'smo65801');
smo65817v0ar.push(smo65801);
smo65817v0.addTickables(smo65817v0ar)
fmtsmo6581720.joinVoices([smo65817v0]);
const smo65817v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65817v1ar = [];
const smo65802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/2/n"]}'))
smo65802.setAttribute('id', 'smo65802');
smo65802.setStyle({ fillStyle: "#115511" });
smo65817v1ar.push(smo65802);
const smo65803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/2/n"]}'))
smo65803.setAttribute('id', 'smo65803');
smo65803.setStyle({ fillStyle: "#115511" });
smo65817v1ar.push(smo65803);
smo65817v1.addTickables(smo65817v1ar)
fmtsmo6581720.joinVoices([smo65817v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69494 = smo60542.getStemDirection();
smo60542.setStemDirection(dirsmo69494);
smo60543.setStemDirection(dirsmo69494);
const smo69494 = new VF.Beam([smo60542,smo60543]);
const dirsmo69495 = smo60544.getStemDirection();
smo60544.setStemDirection(dirsmo69495);
smo60545.setStemDirection(dirsmo69495);
smo60546.setStemDirection(dirsmo69495);
smo60547.setStemDirection(dirsmo69495);
const smo69495 = new VF.Beam([smo60544,smo60545,smo60546,smo60547]);
const dirsmo69496 = smo60549.getStemDirection();
smo60549.setStemDirection(dirsmo69496);
smo60550.setStemDirection(dirsmo69496);
const smo69496 = new VF.Beam([smo60549,smo60550]);
const dirsmo69497 = smo60551.getStemDirection();
smo60551.setStemDirection(dirsmo69497);
smo60552.setStemDirection(dirsmo69497);
smo60553.setStemDirection(dirsmo69497);
smo60554.setStemDirection(dirsmo69497);
const smo69497 = new VF.Beam([smo60551,smo60552,smo60553,smo60554]);
 
// formatting measures in staff group smo58712
fmtsmo6057220.format([smo60572v0,smo60572v1,smo65817v0,smo65817v1], 378);
const stavesmo60572 = new VF.Stave(90, 1880, 429);
stavesmo60572.setAttribute('id', 'stavesmo60572');
stavesmo60572.setBegBarType(1);
stavesmo60572.addClef('treble');
stavesmo60572.setContext(context);
stavesmo60572.draw();
smo60572v0.draw(context, stavesmo60572);
smo60572v1.draw(context, stavesmo60572);
smo69494.setContext(context);
smo69494.draw();
smo69495.setContext(context);
smo69495.draw();
smo69496.setContext(context);
smo69496.draw();
smo69497.setContext(context);
smo69497.draw();
const stavesmo65817 = new VF.Stave(90, 2026, 429);
stavesmo65817.setAttribute('id', 'stavesmo65817');
stavesmo65817.setBegBarType(1);
stavesmo65817.addClef('treble');
stavesmo65817.setContext(context);
stavesmo65817.draw();
smo65817v0.draw(context, stavesmo65817);
smo65817v1.draw(context, stavesmo65817);
const leftsmo58712stavesmo605721 = new VF.StaveConnector(stavesmo60572, stavesmo65817).setType(3);
leftsmo58712stavesmo605721.setContext(context).draw();
const fmtsmo6060421 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo60604v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60604v0ar = [];
const smo60573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60573.setAttribute('id', 'smo60573');
smo60604v0ar.push(smo60573);
const smo60574 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo60574.setAttribute('id', 'smo60574');
smo60604v0ar.push(smo60574);
const smo60575 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60575.setAttribute('id', 'smo60575');
smo60604v0ar.push(smo60575);
const smo60576 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo60576.setAttribute('id', 'smo60576');
const smo605760acc = new VF.Accidental('b');
smo60576.addModifier(smo605760acc, 0);
smo60604v0ar.push(smo60576);
const smo60577 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo60577.setAttribute('id', 'smo60577');
smo60604v0ar.push(smo60577);
const smo60578 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60578.setAttribute('id', 'smo60578');
smo60604v0ar.push(smo60578);
const smo60579 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo60579.setAttribute('id', 'smo60579');
smo60604v0ar.push(smo60579);
const smo60580 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60580.setAttribute('id', 'smo60580');
smo60604v0ar.push(smo60580);
const smo60581 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo60581.setAttribute('id', 'smo60581');
smo60604v0ar.push(smo60581);
const smo60582 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60582.setAttribute('id', 'smo60582');
smo60604v0ar.push(smo60582);
const smo60583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo60583.setAttribute('id', 'smo60583');
smo60604v0ar.push(smo60583);
const smo60584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo60584.setAttribute('id', 'smo60584');
smo60604v0ar.push(smo60584);
const smo60585 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60585.setAttribute('id', 'smo60585');
smo60604v0ar.push(smo60585);
const smo60586 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo60586.setAttribute('id', 'smo60586');
smo60604v0ar.push(smo60586);
smo60604v0.addTickables(smo60604v0ar)
fmtsmo6060421.joinVoices([smo60604v0]);
const smo60604v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60604v1ar = [];
const smo60587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60587.setAttribute('id', 'smo60587');
smo60587.setStyle({ fillStyle: '#aaaaaa7f' });
smo60604v1ar.push(smo60587);
const smo60588 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60588.setAttribute('id', 'smo60588');
smo60588.setStyle({ fillStyle: '#aaaaaa7f' });
smo60588.addModifier(new VF.Dot(), 0);
smo60588.addModifier(new VF.Dot(), 0);
smo60604v1ar.push(smo60588);
const smo60589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60589.setAttribute('id', 'smo60589');
smo60589.setStyle({ fillStyle: '#aaaaaa7f' });
smo60604v1ar.push(smo60589);
const smo60590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60590.setAttribute('id', 'smo60590');
smo60590.setStyle({ fillStyle: '#aaaaaa7f' });
smo60590.addModifier(new VF.Dot(), 0);
smo60590.addModifier(new VF.Dot(), 0);
smo60604v1ar.push(smo60590);
smo60604v1.addTickables(smo60604v1ar)
fmtsmo6060421.joinVoices([smo60604v1]);
const fmtsmo6583921 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo65839v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65839v0ar = [];
const smo65818 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo65818.setAttribute('id', 'smo65818');
smo65839v0ar.push(smo65818);
const smo65819 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65819.setAttribute('id', 'smo65819');
smo65819.addModifier(new VF.Dot(), 0);
smo65839v0ar.push(smo65819);
const smo65820 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65820.setAttribute('id', 'smo65820');
smo65839v0ar.push(smo65820);
const smo65821 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo65821.setAttribute('id', 'smo65821');
smo65839v0ar.push(smo65821);
const smo65822 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"r","stemDirection":1,"autoStem":false,"keys":["dn/3/r"]}'))
smo65822.setAttribute('id', 'smo65822');
smo65822.addModifier(new VF.Dot(), 0);
smo65839v0ar.push(smo65822);
const smo65823 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65823.setAttribute('id', 'smo65823');
smo65839v0ar.push(smo65823);
smo65839v0.addTickables(smo65839v0ar)
fmtsmo6583921.joinVoices([smo65839v0]);
const smo65839v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65839v1ar = [];
const smo65824 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/2/n"]}'))
smo65824.setAttribute('id', 'smo65824');
smo65824.setStyle({ fillStyle: "#115511" });
const smo658240acc = new VF.Accidental('#');
smo65824.addModifier(smo658240acc, 0);
smo65839v1ar.push(smo65824);
const smo65825 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/2/n"]}'))
smo65825.setAttribute('id', 'smo65825');
smo65825.setStyle({ fillStyle: "#115511" });
smo65839v1ar.push(smo65825);
smo65839v1.addTickables(smo65839v1ar)
fmtsmo6583921.joinVoices([smo65839v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69502 = smo60574.getStemDirection();
smo60574.setStemDirection(dirsmo69502);
smo60575.setStemDirection(dirsmo69502);
const smo69502 = new VF.Beam([smo60574,smo60575]);
const dirsmo69503 = smo60576.getStemDirection();
smo60576.setStemDirection(dirsmo69503);
smo60577.setStemDirection(dirsmo69503);
smo60578.setStemDirection(dirsmo69503);
smo60579.setStemDirection(dirsmo69503);
const smo69503 = new VF.Beam([smo60576,smo60577,smo60578,smo60579]);
const dirsmo69504 = smo60581.getStemDirection();
smo60581.setStemDirection(dirsmo69504);
smo60582.setStemDirection(dirsmo69504);
const smo69504 = new VF.Beam([smo60581,smo60582]);
const dirsmo69505 = smo60583.getStemDirection();
smo60583.setStemDirection(dirsmo69505);
smo60584.setStemDirection(dirsmo69505);
smo60585.setStemDirection(dirsmo69505);
smo60586.setStemDirection(dirsmo69505);
const smo69505 = new VF.Beam([smo60583,smo60584,smo60585,smo60586]);
 
// formatting measures in staff group smo58712
fmtsmo6060421.format([smo60604v0,smo60604v1,smo65839v0,smo65839v1], 472);
const stavesmo60604 = new VF.Stave(519, 1880, 486);
stavesmo60604.setAttribute('id', 'stavesmo60604');
stavesmo60604.setBegBarType(VF.Barline.type.NONE);
stavesmo60604.setContext(context);
stavesmo60604.draw();
smo60604v0.draw(context, stavesmo60604);
smo60604v1.draw(context, stavesmo60604);
smo69502.setContext(context);
smo69502.draw();
smo69503.setContext(context);
smo69503.draw();
smo69504.setContext(context);
smo69504.draw();
smo69505.setContext(context);
smo69505.draw();
const stavesmo65839 = new VF.Stave(519, 2026, 486);
stavesmo65839.setAttribute('id', 'stavesmo65839');
stavesmo65839.setBegBarType(VF.Barline.type.NONE);
stavesmo65839.addClef('bass');
stavesmo65839.setContext(context);
stavesmo65839.draw();
smo65839v0.draw(context, stavesmo65839);
smo65839v1.draw(context, stavesmo65839);
const fmtsmo6063622 = new VF.Formatter();
//
// voices and notes for stave 0 22
const smo60636v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60636v0ar = [];
const smo60605 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60605.setAttribute('id', 'smo60605');
smo60636v0ar.push(smo60605);
const smo60606 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo60606.setAttribute('id', 'smo60606');
smo60636v0ar.push(smo60606);
const smo60607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60607.setAttribute('id', 'smo60607');
smo60636v0ar.push(smo60607);
const smo60608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60608.setAttribute('id', 'smo60608');
smo60636v0ar.push(smo60608);
const smo60609 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo60609.setAttribute('id', 'smo60609');
smo60636v0ar.push(smo60609);
const smo60610 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60610.setAttribute('id', 'smo60610');
smo60636v0ar.push(smo60610);
const smo60611 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60611.setAttribute('id', 'smo60611');
smo60636v0ar.push(smo60611);
const smo60612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60612.setAttribute('id', 'smo60612');
smo60636v0ar.push(smo60612);
const smo60613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo60613.setAttribute('id', 'smo60613');
smo60636v0ar.push(smo60613);
const smo60614 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60614.setAttribute('id', 'smo60614');
smo60636v0ar.push(smo60614);
const smo60615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60615.setAttribute('id', 'smo60615');
smo60636v0ar.push(smo60615);
const smo60616 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo60616.setAttribute('id', 'smo60616');
smo60636v0ar.push(smo60616);
const smo60617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60617.setAttribute('id', 'smo60617');
smo60636v0ar.push(smo60617);
const smo60618 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60618.setAttribute('id', 'smo60618');
smo60636v0ar.push(smo60618);
smo60636v0.addTickables(smo60636v0ar)
fmtsmo6063622.joinVoices([smo60636v0]);
const smo60636v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60636v1ar = [];
const smo60619 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60619.setAttribute('id', 'smo60619');
smo60619.setStyle({ fillStyle: '#aaaaaa7f' });
smo60636v1ar.push(smo60619);
const smo60620 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60620.setAttribute('id', 'smo60620');
smo60620.setStyle({ fillStyle: '#aaaaaa7f' });
smo60620.addModifier(new VF.Dot(), 0);
smo60620.addModifier(new VF.Dot(), 0);
smo60636v1ar.push(smo60620);
const smo60621 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60621.setAttribute('id', 'smo60621');
smo60621.setStyle({ fillStyle: '#aaaaaa7f' });
smo60636v1ar.push(smo60621);
const smo60622 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60622.setAttribute('id', 'smo60622');
smo60622.setStyle({ fillStyle: '#aaaaaa7f' });
smo60622.addModifier(new VF.Dot(), 0);
smo60622.addModifier(new VF.Dot(), 0);
smo60636v1ar.push(smo60622);
smo60636v1.addTickables(smo60636v1ar)
fmtsmo6063622.joinVoices([smo60636v1]);
const fmtsmo6586122 = new VF.Formatter();
//
// voices and notes for stave 1 22
const smo65861v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65861v0ar = [];
const smo65840 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo65840.setAttribute('id', 'smo65840');
smo65861v0ar.push(smo65840);
const smo65841 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65841.setAttribute('id', 'smo65841');
smo65841.addModifier(new VF.Dot(), 0);
smo65861v0ar.push(smo65841);
const smo65842 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65842.setAttribute('id', 'smo65842');
smo65861v0ar.push(smo65842);
const smo65843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo65843.setAttribute('id', 'smo65843');
smo65861v0ar.push(smo65843);
const smo65844 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65844.setAttribute('id', 'smo65844');
smo65844.addModifier(new VF.Dot(), 0);
smo65861v0ar.push(smo65844);
const smo65845 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65845.setAttribute('id', 'smo65845');
smo65861v0ar.push(smo65845);
smo65861v0.addTickables(smo65861v0ar)
fmtsmo6586122.joinVoices([smo65861v0]);
const smo65861v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65861v1ar = [];
const smo65846 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/2/n"]}'))
smo65846.setAttribute('id', 'smo65846');
smo65846.setStyle({ fillStyle: "#115511" });
const smo658460acc = new VF.Accidental('b');
smo65846.addModifier(smo658460acc, 0);
smo65861v1ar.push(smo65846);
const smo65847 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/2/n"]}'))
smo65847.setAttribute('id', 'smo65847');
smo65847.setStyle({ fillStyle: "#115511" });
smo65861v1ar.push(smo65847);
smo65861v1.addTickables(smo65861v1ar)
fmtsmo6586122.joinVoices([smo65861v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69510 = smo60606.getStemDirection();
smo60606.setStemDirection(dirsmo69510);
smo60607.setStemDirection(dirsmo69510);
const smo69510 = new VF.Beam([smo60606,smo60607]);
const dirsmo69511 = smo60608.getStemDirection();
smo60608.setStemDirection(dirsmo69511);
smo60609.setStemDirection(dirsmo69511);
smo60610.setStemDirection(dirsmo69511);
smo60611.setStemDirection(dirsmo69511);
const smo69511 = new VF.Beam([smo60608,smo60609,smo60610,smo60611]);
const dirsmo69512 = smo60613.getStemDirection();
smo60613.setStemDirection(dirsmo69512);
smo60614.setStemDirection(dirsmo69512);
const smo69512 = new VF.Beam([smo60613,smo60614]);
const dirsmo69513 = smo60615.getStemDirection();
smo60615.setStemDirection(dirsmo69513);
smo60616.setStemDirection(dirsmo69513);
smo60617.setStemDirection(dirsmo69513);
smo60618.setStemDirection(dirsmo69513);
const smo69513 = new VF.Beam([smo60615,smo60616,smo60617,smo60618]);
 
// formatting measures in staff group smo58712
fmtsmo6063622.format([smo60636v0,smo60636v1,smo65861v0,smo65861v1], 396);
const stavesmo60636 = new VF.Stave(1005, 1880, 410);
stavesmo60636.setAttribute('id', 'stavesmo60636');
stavesmo60636.setBegBarType(VF.Barline.type.NONE);
stavesmo60636.setContext(context);
stavesmo60636.draw();
smo60636v0.draw(context, stavesmo60636);
smo60636v1.draw(context, stavesmo60636);
smo69510.setContext(context);
smo69510.draw();
smo69511.setContext(context);
smo69511.draw();
smo69512.setContext(context);
smo69512.draw();
smo69513.setContext(context);
smo69513.draw();
const stavesmo65861 = new VF.Stave(1005, 2026, 410);
stavesmo65861.setAttribute('id', 'stavesmo65861');
stavesmo65861.setBegBarType(VF.Barline.type.NONE);
stavesmo65861.setContext(context);
stavesmo65861.draw();
smo65861v0.draw(context, stavesmo65861);
smo65861v1.draw(context, stavesmo65861);
const fmtsmo6066823 = new VF.Formatter();
//
// voices and notes for stave 0 23
const smo60668v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60668v0ar = [];
const smo60637 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60637.setAttribute('id', 'smo60637');
smo60668v0ar.push(smo60637);
const smo60638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60638.setAttribute('id', 'smo60638');
smo60668v0ar.push(smo60638);
const smo60639 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo60639.setAttribute('id', 'smo60639');
smo60668v0ar.push(smo60639);
const smo60640 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60640.setAttribute('id', 'smo60640');
smo60668v0ar.push(smo60640);
const smo60641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60641.setAttribute('id', 'smo60641');
smo60668v0ar.push(smo60641);
const smo60642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo60642.setAttribute('id', 'smo60642');
smo60668v0ar.push(smo60642);
const smo60643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60643.setAttribute('id', 'smo60643');
smo60668v0ar.push(smo60643);
const smo60644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60644.setAttribute('id', 'smo60644');
smo60668v0ar.push(smo60644);
const smo60645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60645.setAttribute('id', 'smo60645');
smo60668v0ar.push(smo60645);
const smo60646 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo60646.setAttribute('id', 'smo60646');
smo60668v0ar.push(smo60646);
const smo60647 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60647.setAttribute('id', 'smo60647');
smo60668v0ar.push(smo60647);
const smo60648 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo60648.setAttribute('id', 'smo60648');
smo60668v0ar.push(smo60648);
const smo60649 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo60649.setAttribute('id', 'smo60649');
smo60668v0ar.push(smo60649);
const smo60650 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60650.setAttribute('id', 'smo60650');
smo60668v0ar.push(smo60650);
smo60668v0.addTickables(smo60668v0ar)
fmtsmo6066823.joinVoices([smo60668v0]);
const smo60668v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60668v1ar = [];
const smo60651 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60651.setAttribute('id', 'smo60651');
smo60651.setStyle({ fillStyle: '#aaaaaa7f' });
smo60668v1ar.push(smo60651);
const smo60652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60652.setAttribute('id', 'smo60652');
smo60652.setStyle({ fillStyle: '#aaaaaa7f' });
smo60652.addModifier(new VF.Dot(), 0);
smo60652.addModifier(new VF.Dot(), 0);
smo60668v1ar.push(smo60652);
const smo60653 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60653.setAttribute('id', 'smo60653');
smo60653.setStyle({ fillStyle: '#aaaaaa7f' });
smo60668v1ar.push(smo60653);
const smo60654 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60654.setAttribute('id', 'smo60654');
smo60654.setStyle({ fillStyle: '#aaaaaa7f' });
smo60654.addModifier(new VF.Dot(), 0);
smo60654.addModifier(new VF.Dot(), 0);
smo60668v1ar.push(smo60654);
smo60668v1.addTickables(smo60668v1ar)
fmtsmo6066823.joinVoices([smo60668v1]);
const fmtsmo6588323 = new VF.Formatter();
//
// voices and notes for stave 1 23
const smo65883v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65883v0ar = [];
const smo65862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo65862.setAttribute('id', 'smo65862');
smo65883v0ar.push(smo65862);
const smo65863 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65863.setAttribute('id', 'smo65863');
smo65863.addModifier(new VF.Dot(), 0);
smo65883v0ar.push(smo65863);
const smo65864 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65864.setAttribute('id', 'smo65864');
smo65883v0ar.push(smo65864);
const smo65865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo65865.setAttribute('id', 'smo65865');
smo65883v0ar.push(smo65865);
const smo65866 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65866.setAttribute('id', 'smo65866');
smo65866.addModifier(new VF.Dot(), 0);
smo65883v0ar.push(smo65866);
const smo65867 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65867.setAttribute('id', 'smo65867');
smo65883v0ar.push(smo65867);
smo65883v0.addTickables(smo65883v0ar)
fmtsmo6588323.joinVoices([smo65883v0]);
const smo65883v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65883v1ar = [];
const smo65868 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo65868.setAttribute('id', 'smo65868');
smo65868.setStyle({ fillStyle: "#115511" });
smo65883v1ar.push(smo65868);
const smo65869 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo65869.setAttribute('id', 'smo65869');
smo65869.setStyle({ fillStyle: "#115511" });
smo65883v1ar.push(smo65869);
smo65883v1.addTickables(smo65883v1ar)
fmtsmo6588323.joinVoices([smo65883v1]);
// create beam groups and tuplets for format grp smo58712 before formatting
const dirsmo69518 = smo60638.getStemDirection();
smo60638.setStemDirection(dirsmo69518);
smo60639.setStemDirection(dirsmo69518);
const smo69518 = new VF.Beam([smo60638,smo60639]);
const dirsmo69519 = smo60640.getStemDirection();
smo60640.setStemDirection(dirsmo69519);
smo60641.setStemDirection(dirsmo69519);
smo60642.setStemDirection(dirsmo69519);
smo60643.setStemDirection(dirsmo69519);
const smo69519 = new VF.Beam([smo60640,smo60641,smo60642,smo60643]);
const dirsmo69520 = smo60645.getStemDirection();
smo60645.setStemDirection(dirsmo69520);
smo60646.setStemDirection(dirsmo69520);
const smo69520 = new VF.Beam([smo60645,smo60646]);
const dirsmo69521 = smo60647.getStemDirection();
smo60647.setStemDirection(dirsmo69521);
smo60648.setStemDirection(dirsmo69521);
smo60649.setStemDirection(dirsmo69521);
smo60650.setStemDirection(dirsmo69521);
const smo69521 = new VF.Beam([smo60647,smo60648,smo60649,smo60650]);
 
// formatting measures in staff group smo58712
fmtsmo6066823.format([smo60668v0,smo60668v1,smo65883v0,smo65883v1], 378);
const stavesmo60668 = new VF.Stave(1415, 1880, 392);
stavesmo60668.setAttribute('id', 'stavesmo60668');
stavesmo60668.setBegBarType(VF.Barline.type.NONE);
stavesmo60668.setContext(context);
stavesmo60668.draw();
smo60668v0.draw(context, stavesmo60668);
smo60668v1.draw(context, stavesmo60668);
smo69518.setContext(context);
smo69518.draw();
smo69519.setContext(context);
smo69519.draw();
smo69520.setContext(context);
smo69520.draw();
smo69521.setContext(context);
smo69521.draw();
const stavesmo65883 = new VF.Stave(1415, 2026, 392);
stavesmo65883.setAttribute('id', 'stavesmo65883');
stavesmo65883.setBegBarType(VF.Barline.type.NONE);
stavesmo65883.setContext(context);
stavesmo65883.draw();
smo65883v0.draw(context, stavesmo65883);
smo65883v1.draw(context, stavesmo65883);
const rightsmo58712stavesmo606681 = new VF.StaveConnector(stavesmo60668, stavesmo65883).setType(0);
rightsmo58712stavesmo606681.setContext(context).draw();
// modifier from 1-0-0-1 to 1-0-0-2
const smo71646 = new VF.StaveTie({ first_note: smo65357, last_note: smo65358, 
          firstNote: smo65357, lastNote: smo65358, first_indices: [0], last_indices: [0]});
smo71646.setContext(context).draw();
// modifier from 1-0-0-4 to 1-0-0-5
const smo71647 = new VF.StaveTie({ first_note: smo65360, last_note: smo65361, 
          firstNote: smo65360, lastNote: smo65361, first_indices: [0], last_indices: [0]});
smo71647.setContext(context).draw();
// modifier from 1-1-0-1 to 1-1-0-2
const smo71648 = new VF.StaveTie({ first_note: smo65379, last_note: smo65380, 
          firstNote: smo65379, lastNote: smo65380, first_indices: [0], last_indices: [0]});
smo71648.setContext(context).draw();
// modifier from 1-1-0-4 to 1-1-0-5
const smo71649 = new VF.StaveTie({ first_note: smo65382, last_note: smo65383, 
          firstNote: smo65382, lastNote: smo65383, first_indices: [0], last_indices: [0]});
smo71649.setContext(context).draw();
// modifier from 1-2-0-1 to 1-2-0-2
const smo71650 = new VF.StaveTie({ first_note: smo65401, last_note: smo65402, 
          firstNote: smo65401, lastNote: smo65402, first_indices: [0], last_indices: [0]});
smo71650.setContext(context).draw();
// modifier from 1-2-0-4 to 1-2-0-5
const smo71651 = new VF.StaveTie({ first_note: smo65404, last_note: smo65405, 
          firstNote: smo65404, lastNote: smo65405, first_indices: [0], last_indices: [0]});
smo71651.setContext(context).draw();
// modifier from 1-3-0-1 to 1-3-0-2
const smo71652 = new VF.StaveTie({ first_note: smo65423, last_note: smo65424, 
          firstNote: smo65423, lastNote: smo65424, first_indices: [0], last_indices: [0]});
smo71652.setContext(context).draw();
// modifier from 1-3-0-4 to 1-3-0-5
const smo71653 = new VF.StaveTie({ first_note: smo65426, last_note: smo65427, 
          firstNote: smo65426, lastNote: smo65427, first_indices: [0], last_indices: [0]});
smo71653.setContext(context).draw();
// modifier from 1-4-0-1 to 1-4-0-2
const smo71654 = new VF.StaveTie({ first_note: smo65445, last_note: smo65446, 
          firstNote: smo65445, lastNote: smo65446, first_indices: [0], last_indices: [0]});
smo71654.setContext(context).draw();
// modifier from 1-4-0-4 to 1-4-0-5
const smo71655 = new VF.StaveTie({ first_note: smo65448, last_note: smo65449, 
          firstNote: smo65448, lastNote: smo65449, first_indices: [0], last_indices: [0]});
smo71655.setContext(context).draw();
// modifier from 1-5-0-1 to 1-5-0-2
const smo71656 = new VF.StaveTie({ first_note: smo65467, last_note: smo65468, 
          firstNote: smo65467, lastNote: smo65468, first_indices: [0], last_indices: [0]});
smo71656.setContext(context).draw();
// modifier from 1-5-0-4 to 1-5-0-5
const smo71657 = new VF.StaveTie({ first_note: smo65470, last_note: smo65471, 
          firstNote: smo65470, lastNote: smo65471, first_indices: [0], last_indices: [0]});
smo71657.setContext(context).draw();
// modifier from 1-6-0-1 to 1-6-0-2
const smo71658 = new VF.StaveTie({ first_note: smo65489, last_note: smo65490, 
          firstNote: smo65489, lastNote: smo65490, first_indices: [0], last_indices: [0]});
smo71658.setContext(context).draw();
// modifier from 1-6-0-4 to 1-6-0-5
const smo71659 = new VF.StaveTie({ first_note: smo65492, last_note: smo65493, 
          firstNote: smo65492, lastNote: smo65493, first_indices: [0], last_indices: [0]});
smo71659.setContext(context).draw();
// modifier from 1-7-0-1 to 1-7-0-2
const smo71660 = new VF.StaveTie({ first_note: smo65511, last_note: smo65512, 
          firstNote: smo65511, lastNote: smo65512, first_indices: [0], last_indices: [0]});
smo71660.setContext(context).draw();
// modifier from 1-7-0-4 to 1-7-0-5
const smo71661 = new VF.StaveTie({ first_note: smo65514, last_note: smo65515, 
          firstNote: smo65514, lastNote: smo65515, first_indices: [0], last_indices: [0]});
smo71661.setContext(context).draw();
// modifier from 1-8-0-1 to 1-8-0-2
const smo71662 = new VF.StaveTie({ first_note: smo65533, last_note: smo65534, 
          firstNote: smo65533, lastNote: smo65534, first_indices: [0], last_indices: [0]});
smo71662.setContext(context).draw();
// modifier from 1-8-0-4 to 1-8-0-5
const smo71663 = new VF.StaveTie({ first_note: smo65536, last_note: smo65537, 
          firstNote: smo65536, lastNote: smo65537, first_indices: [0], last_indices: [0]});
smo71663.setContext(context).draw();
// modifier from 1-9-0-1 to 1-9-0-2
const smo71664 = new VF.StaveTie({ first_note: smo65555, last_note: smo65556, 
          firstNote: smo65555, lastNote: smo65556, first_indices: [0], last_indices: [0]});
smo71664.setContext(context).draw();
// modifier from 1-9-0-4 to 1-9-0-5
const smo71665 = new VF.StaveTie({ first_note: smo65558, last_note: smo65559, 
          firstNote: smo65558, lastNote: smo65559, first_indices: [0], last_indices: [0]});
smo71665.setContext(context).draw();
// modifier from 1-10-0-1 to 1-10-0-2
const smo71666 = new VF.StaveTie({ first_note: smo65577, last_note: smo65578, 
          firstNote: smo65577, lastNote: smo65578, first_indices: [0], last_indices: [0]});
smo71666.setContext(context).draw();
// modifier from 1-10-0-4 to 1-10-0-5
const smo71667 = new VF.StaveTie({ first_note: smo65580, last_note: smo65581, 
          firstNote: smo65580, lastNote: smo65581, first_indices: [0], last_indices: [0]});
smo71667.setContext(context).draw();
// modifier from 1-11-0-1 to 1-11-0-2
const smo71668 = new VF.StaveTie({ first_note: smo65599, last_note: smo65600, 
          firstNote: smo65599, lastNote: smo65600, first_indices: [0], last_indices: [0]});
smo71668.setContext(context).draw();
// modifier from 1-11-0-4 to 1-11-0-5
const smo71669 = new VF.StaveTie({ first_note: smo65602, last_note: smo65603, 
          firstNote: smo65602, lastNote: smo65603, first_indices: [0], last_indices: [0]});
smo71669.setContext(context).draw();
// modifier from 1-12-0-1 to 1-12-0-2
const smo71670 = new VF.StaveTie({ first_note: smo65621, last_note: smo65622, 
          firstNote: smo65621, lastNote: smo65622, first_indices: [0], last_indices: [0]});
smo71670.setContext(context).draw();
// modifier from 1-12-0-4 to 1-12-0-5
const smo71671 = new VF.StaveTie({ first_note: smo65624, last_note: smo65625, 
          firstNote: smo65624, lastNote: smo65625, first_indices: [0], last_indices: [0]});
smo71671.setContext(context).draw();
// modifier from 1-13-0-1 to 1-13-0-2
const smo71672 = new VF.StaveTie({ first_note: smo65643, last_note: smo65644, 
          firstNote: smo65643, lastNote: smo65644, first_indices: [0], last_indices: [0]});
smo71672.setContext(context).draw();
// modifier from 1-13-0-4 to 1-13-0-5
const smo71673 = new VF.StaveTie({ first_note: smo65646, last_note: smo65647, 
          firstNote: smo65646, lastNote: smo65647, first_indices: [0], last_indices: [0]});
smo71673.setContext(context).draw();
// modifier from 1-14-0-1 to 1-14-0-2
const smo71674 = new VF.StaveTie({ first_note: smo65665, last_note: smo65666, 
          firstNote: smo65665, lastNote: smo65666, first_indices: [0], last_indices: [0]});
smo71674.setContext(context).draw();
// modifier from 1-14-0-4 to 1-14-0-5
const smo71675 = new VF.StaveTie({ first_note: smo65668, last_note: smo65669, 
          firstNote: smo65668, lastNote: smo65669, first_indices: [0], last_indices: [0]});
smo71675.setContext(context).draw();
// modifier from 1-15-0-1 to 1-15-0-2
const smo71676 = new VF.StaveTie({ first_note: smo65687, last_note: smo65688, 
          firstNote: smo65687, lastNote: smo65688, first_indices: [0], last_indices: [0]});
smo71676.setContext(context).draw();
// modifier from 1-15-0-4 to 1-15-0-5
const smo71677 = new VF.StaveTie({ first_note: smo65690, last_note: smo65691, 
          firstNote: smo65690, lastNote: smo65691, first_indices: [0], last_indices: [0]});
smo71677.setContext(context).draw();
// modifier from 1-16-0-1 to 1-16-0-2
const smo71678 = new VF.StaveTie({ first_note: smo65709, last_note: smo65710, 
          firstNote: smo65709, lastNote: smo65710, first_indices: [0], last_indices: [0]});
smo71678.setContext(context).draw();
// modifier from 1-16-0-4 to 1-16-0-5
const smo71679 = new VF.StaveTie({ first_note: smo65712, last_note: smo65713, 
          firstNote: smo65712, lastNote: smo65713, first_indices: [0], last_indices: [0]});
smo71679.setContext(context).draw();
// modifier from 1-17-0-1 to 1-17-0-2
const smo71680 = new VF.StaveTie({ first_note: smo65731, last_note: smo65732, 
          firstNote: smo65731, lastNote: smo65732, first_indices: [0], last_indices: [0]});
smo71680.setContext(context).draw();
// modifier from 1-17-0-4 to 1-17-0-5
const smo71681 = new VF.StaveTie({ first_note: smo65734, last_note: smo65735, 
          firstNote: smo65734, lastNote: smo65735, first_indices: [0], last_indices: [0]});
smo71681.setContext(context).draw();
// modifier from 1-18-0-1 to 1-18-0-2
const smo71682 = new VF.StaveTie({ first_note: smo65753, last_note: smo65754, 
          firstNote: smo65753, lastNote: smo65754, first_indices: [0], last_indices: [0]});
smo71682.setContext(context).draw();
// modifier from 1-18-0-4 to 1-18-0-5
const smo71683 = new VF.StaveTie({ first_note: smo65756, last_note: smo65757, 
          firstNote: smo65756, lastNote: smo65757, first_indices: [0], last_indices: [0]});
smo71683.setContext(context).draw();
// modifier from 1-19-0-1 to 1-19-0-2
const smo71684 = new VF.StaveTie({ first_note: smo65775, last_note: smo65776, 
          firstNote: smo65775, lastNote: smo65776, first_indices: [0], last_indices: [0]});
smo71684.setContext(context).draw();
// modifier from 1-19-0-4 to 1-19-0-5
const smo71685 = new VF.StaveTie({ first_note: smo65778, last_note: smo65779, 
          firstNote: smo65778, lastNote: smo65779, first_indices: [0], last_indices: [0]});
smo71685.setContext(context).draw();
// modifier from 1-20-0-1 to 1-20-0-2
const smo71686 = new VF.StaveTie({ first_note: smo65797, last_note: smo65798, 
          firstNote: smo65797, lastNote: smo65798, first_indices: [0], last_indices: [0]});
smo71686.setContext(context).draw();
// modifier from 1-20-0-4 to 1-20-0-5
const smo71687 = new VF.StaveTie({ first_note: smo65800, last_note: smo65801, 
          firstNote: smo65800, lastNote: smo65801, first_indices: [0], last_indices: [0]});
smo71687.setContext(context).draw();
// modifier from 1-21-0-1 to 1-21-0-2
const smo71688 = new VF.StaveTie({ first_note: smo65819, last_note: smo65820, 
          firstNote: smo65819, lastNote: smo65820, first_indices: [0], last_indices: [0]});
smo71688.setContext(context).draw();
// modifier from 1-21-0-4 to 1-21-0-5
const smo71689 = new VF.StaveTie({ first_note: smo65822, last_note: smo65823, 
          firstNote: smo65822, lastNote: smo65823, first_indices: [0], last_indices: [0]});
smo71689.setContext(context).draw();
// modifier from 1-22-0-1 to 1-22-0-2
const smo71690 = new VF.StaveTie({ first_note: smo65841, last_note: smo65842, 
          firstNote: smo65841, lastNote: smo65842, first_indices: [0], last_indices: [0]});
smo71690.setContext(context).draw();
// modifier from 1-22-0-4 to 1-22-0-5
const smo71691 = new VF.StaveTie({ first_note: smo65844, last_note: smo65845, 
          firstNote: smo65844, lastNote: smo65845, first_indices: [0], last_indices: [0]});
smo71691.setContext(context).draw();
// modifier from 1-23-0-1 to 1-23-0-2
const smo71692 = new VF.StaveTie({ first_note: smo65863, last_note: smo65864, 
          firstNote: smo65863, lastNote: smo65864, first_indices: [0], last_indices: [0]});
smo71692.setContext(context).draw();
// modifier from 1-23-0-4 to 1-23-0-5
const smo71693 = new VF.StaveTie({ first_note: smo65866, last_note: smo65867, 
          firstNote: smo65866, lastNote: smo65867, first_indices: [0], last_indices: [0]});
smo71693.setContext(context).draw();
}
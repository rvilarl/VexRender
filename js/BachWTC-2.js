// @@ Well-Tempered Clavier p 3/5  by Bach
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
const fmtsmo6985546 = new VF.Formatter();
//
// voices and notes for stave 0 46
const smo69855v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69855v0ar = [];
const smo69816 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo69816.setAttribute('id', 'smo69816');
smo69855v0ar.push(smo69816);
const smo69817 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo69817.setAttribute('id', 'smo69817');
smo69855v0ar.push(smo69817);
const smo69818 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69818.setAttribute('id', 'smo69818');
smo69855v0ar.push(smo69818);
const smo69819 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69819.setAttribute('id', 'smo69819');
smo69855v0ar.push(smo69819);
const smo69820 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo69820.setAttribute('id', 'smo69820');
smo69855v0ar.push(smo69820);
const smo69821 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69821.setAttribute('id', 'smo69821');
smo69855v0ar.push(smo69821);
const smo69822 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69822.setAttribute('id', 'smo69822');
smo69855v0ar.push(smo69822);
const smo69823 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo69823.setAttribute('id', 'smo69823');
smo69855v0ar.push(smo69823);
const smo69824 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo69824.setAttribute('id', 'smo69824');
const smo698240acc = new VF.Accidental('#');
smo69824.addModifier(smo698240acc, 0);
smo69855v0ar.push(smo69824);
const smo69825 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo69825.setAttribute('id', 'smo69825');
smo69855v0ar.push(smo69825);
const smo69826 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69826.setAttribute('id', 'smo69826');
smo69855v0ar.push(smo69826);
const smo69827 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69827.setAttribute('id', 'smo69827');
smo69855v0ar.push(smo69827);
const smo69828 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69828.setAttribute('id', 'smo69828');
smo69855v0ar.push(smo69828);
const smo69829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69829.setAttribute('id', 'smo69829');
smo69855v0ar.push(smo69829);
smo69855v0.addTickables(smo69855v0ar)
fmtsmo6985546.joinVoices([smo69855v0]);
const smo69855v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69855v1ar = [];
const smo69830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69830.setAttribute('id', 'smo69830');
smo69830.setStyle({ fillStyle: "#115511" });
smo69855v1ar.push(smo69830);
const smo69831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69831.setAttribute('id', 'smo69831');
smo69831.setStyle({ fillStyle: "#115511" });
smo69855v1ar.push(smo69831);
const smo69832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69832.setAttribute('id', 'smo69832');
smo69832.setStyle({ fillStyle: "#115511" });
smo69855v1ar.push(smo69832);
const smo69833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo69833.setAttribute('id', 'smo69833');
smo69833.setStyle({ fillStyle: "#115511" });
const smo698330acc = new VF.Accidental('#');
smo69833.addModifier(smo698330acc, 0);
smo69855v1ar.push(smo69833);
const smo69834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo69834.setAttribute('id', 'smo69834');
smo69834.setStyle({ fillStyle: "#115511" });
const smo698340acc = new VF.Accidental('#');
smo69834.addModifier(smo698340acc, 0);
smo69855v1ar.push(smo69834);
const smo69835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69835.setAttribute('id', 'smo69835');
smo69835.setStyle({ fillStyle: "#115511" });
const smo698350acc = new VF.Accidental('n');
smo69835.addModifier(smo698350acc, 0);
smo69855v1ar.push(smo69835);
const smo69836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69836.setAttribute('id', 'smo69836');
smo69836.setStyle({ fillStyle: "#115511" });
smo69855v1ar.push(smo69836);
const smo69837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo69837.setAttribute('id', 'smo69837');
smo69837.setStyle({ fillStyle: "#115511" });
smo69855v1ar.push(smo69837);
const smo69838 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo69838.setAttribute('id', 'smo69838');
smo69838.setStyle({ fillStyle: "#115511" });
smo69855v1ar.push(smo69838);
const smo69839 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69839.setAttribute('id', 'smo69839');
smo69839.setStyle({ fillStyle: "#115511" });
smo69855v1ar.push(smo69839);
const smo69840 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo69840.setAttribute('id', 'smo69840');
smo69840.setStyle({ fillStyle: "#115511" });
smo69855v1ar.push(smo69840);
const smo69841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo69841.setAttribute('id', 'smo69841');
smo69841.setStyle({ fillStyle: "#115511" });
smo69855v1ar.push(smo69841);
smo69855v1.addTickables(smo69855v1ar)
fmtsmo6985546.joinVoices([smo69855v1]);
const fmtsmo7490846 = new VF.Formatter();
//
// voices and notes for stave 1 46
const smo74908v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74908v0ar = [];
const smo74880 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo74880.setAttribute('id', 'smo74880');
smo74908v0ar.push(smo74880);
const smo74881 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74881.setAttribute('id', 'smo74881');
smo74908v0ar.push(smo74881);
const smo74882 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo74882.setAttribute('id', 'smo74882');
const smo748820acc = new VF.Accidental('#');
smo74882.addModifier(smo748820acc, 0);
smo74908v0ar.push(smo74882);
const smo74883 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
smo74883.setAttribute('id', 'smo74883');
const smo748830acc = new VF.Accidental('#');
smo74883.addModifier(smo748830acc, 0);
smo74908v0ar.push(smo74883);
const smo74884 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74884.setAttribute('id', 'smo74884');
smo74884.addModifier(new VF.Dot(), 0);
smo74908v0ar.push(smo74884);
const smo74885 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo74885.setAttribute('id', 'smo74885');
smo74908v0ar.push(smo74885);
const smo74886 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74886.setAttribute('id', 'smo74886');
smo74908v0ar.push(smo74886);
const smo74887 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
smo74887.setAttribute('id', 'smo74887');
smo74908v0ar.push(smo74887);
const smo74888 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo74888.setAttribute('id', 'smo74888');
smo74908v0ar.push(smo74888);
smo74908v0.addTickables(smo74908v0ar)
fmtsmo7490846.joinVoices([smo74908v0]);
const smo74908v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74908v1ar = [];
const smo74889 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
smo74889.setAttribute('id', 'smo74889');
smo74889.setStyle({ fillStyle: "#115511" });
smo74908v1ar.push(smo74889);
const smo74890 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74890.setAttribute('id', 'smo74890');
smo74890.setStyle({ fillStyle: "#115511" });
smo74908v1ar.push(smo74890);
const smo74891 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74891.setAttribute('id', 'smo74891');
smo74891.setStyle({ fillStyle: "#115511" });
smo74908v1ar.push(smo74891);
const smo74892 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo74892.setAttribute('id', 'smo74892');
smo74892.setStyle({ fillStyle: "#115511" });
smo74908v1ar.push(smo74892);
const smo74893 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo74893.setAttribute('id', 'smo74893');
smo74893.setStyle({ fillStyle: "#115511" });
const smo748930acc = new VF.Accidental('n');
smo74893.addModifier(smo748930acc, 0);
smo74908v1ar.push(smo74893);
const smo74894 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74894.setAttribute('id', 'smo74894');
smo74894.setStyle({ fillStyle: "#115511" });
smo74908v1ar.push(smo74894);
smo74908v1.addTickables(smo74908v1ar)
fmtsmo7490846.joinVoices([smo74908v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78302 = smo69816.getStemDirection();
smo69816.setStemDirection(dirsmo78302);
smo69817.setStemDirection(dirsmo78302);
smo69818.setStemDirection(dirsmo78302);
const smo78302 = new VF.Beam([smo69816,smo69817,smo69818]);
const dirsmo78303 = smo69819.getStemDirection();
smo69819.setStemDirection(dirsmo78303);
smo69820.setStemDirection(dirsmo78303);
smo69821.setStemDirection(dirsmo78303);
smo69822.setStemDirection(dirsmo78303);
const smo78303 = new VF.Beam([smo69819,smo69820,smo69821,smo69822]);
const dirsmo78304 = smo69823.getStemDirection();
smo69823.setStemDirection(dirsmo78304);
smo69824.setStemDirection(dirsmo78304);
smo69825.setStemDirection(dirsmo78304);
smo69826.setStemDirection(dirsmo78304);
const smo78304 = new VF.Beam([smo69823,smo69824,smo69825,smo69826]);
const dirsmo78305 = smo69827.getStemDirection();
smo69827.setStemDirection(dirsmo78305);
smo69828.setStemDirection(dirsmo78305);
smo69829.setStemDirection(dirsmo78305);
const smo78305 = new VF.Beam([smo69827,smo69828,smo69829]);
const dirsmo78306 = smo69830.getStemDirection();
smo69830.setStemDirection(dirsmo78306);
smo69831.setStemDirection(dirsmo78306);
smo69832.setStemDirection(dirsmo78306);
smo69833.setStemDirection(dirsmo78306);
const smo78306 = new VF.Beam([smo69830,smo69831,smo69832,smo69833]);
const dirsmo78307 = smo69834.getStemDirection();
smo69834.setStemDirection(dirsmo78307);
smo69835.setStemDirection(dirsmo78307);
const smo78307 = new VF.Beam([smo69834,smo69835]);
const dirsmo78308 = smo69836.getStemDirection();
smo69836.setStemDirection(dirsmo78308);
smo69837.setStemDirection(dirsmo78308);
const smo78308 = new VF.Beam([smo69836,smo69837]);
const dirsmo78309 = smo69838.getStemDirection();
smo69838.setStemDirection(dirsmo78309);
smo69839.setStemDirection(dirsmo78309);
smo69840.setStemDirection(dirsmo78309);
smo69841.setStemDirection(dirsmo78309);
const smo78309 = new VF.Beam([smo69838,smo69839,smo69840,smo69841]);
const dirsmo78312 = smo74881.getStemDirection();
smo74881.setStemDirection(dirsmo78312);
smo74882.setStemDirection(dirsmo78312);
smo74883.setStemDirection(dirsmo78312);
const smo78312 = new VF.Beam([smo74881,smo74882,smo74883]);
const dirsmo78313 = smo74884.getStemDirection();
smo74884.setStemDirection(dirsmo78313);
smo74885.setStemDirection(dirsmo78313);
smo74886.setStemDirection(dirsmo78313);
const smo78313 = new VF.Beam([smo74884,smo74885,smo74886]);
const dirsmo78314 = smo74887.getStemDirection();
smo74887.setStemDirection(dirsmo78314);
smo74888.setStemDirection(dirsmo78314);
const smo78314 = new VF.Beam([smo74887,smo74888]);
const dirsmo78315 = smo74891.getStemDirection();
smo74891.setStemDirection(dirsmo78315);
smo74892.setStemDirection(dirsmo78315);
const smo78315 = new VF.Beam([smo74891,smo74892]);
 
// formatting measures in staff group smo67190
fmtsmo6985546.format([smo69855v0,smo69855v1,smo74908v0,smo74908v1], 518);
const stavesmo69855 = new VF.Stave(90, 304, 576);
stavesmo69855.setAttribute('id', 'stavesmo69855');
stavesmo69855.setBegBarType(1);
stavesmo69855.addClef('treble');
stavesmo69855.setContext(context);
stavesmo69855.draw();
smo69855v0.draw(context, stavesmo69855);
smo69855v1.draw(context, stavesmo69855);
smo78302.setContext(context);
smo78302.draw();
smo78303.setContext(context);
smo78303.draw();
smo78304.setContext(context);
smo78304.draw();
smo78305.setContext(context);
smo78305.draw();
smo78306.setContext(context);
smo78306.draw();
smo78307.setContext(context);
smo78307.draw();
smo78308.setContext(context);
smo78308.draw();
smo78309.setContext(context);
smo78309.draw();
const stavesmo74908 = new VF.Stave(90, 438, 576);
stavesmo74908.setAttribute('id', 'stavesmo74908');
stavesmo74908.setBegBarType(1);
stavesmo74908.addClef('bass');
stavesmo74908.setContext(context);
stavesmo74908.draw();
smo74908v0.draw(context, stavesmo74908);
smo74908v1.draw(context, stavesmo74908);
smo78312.setContext(context);
smo78312.draw();
smo78313.setContext(context);
smo78313.draw();
smo78314.setContext(context);
smo78314.draw();
smo78315.setContext(context);
smo78315.draw();
const leftsmo67190stavesmo698551 = new VF.StaveConnector(stavesmo69855, stavesmo74908).setType(3);
leftsmo67190stavesmo698551.setContext(context).draw();
const fmtsmo6989047 = new VF.Formatter();
//
// voices and notes for stave 0 47
const smo69890v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69890v0ar = [];
const smo69856 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo69856.setAttribute('id', 'smo69856');
smo69890v0ar.push(smo69856);
const smo69857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo69857.setAttribute('id', 'smo69857');
smo69890v0ar.push(smo69857);
const smo69858 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo69858.setAttribute('id', 'smo69858');
smo69890v0ar.push(smo69858);
const smo69859 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo69859.setAttribute('id', 'smo69859');
smo69890v0ar.push(smo69859);
const smo69860 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo69860.setAttribute('id', 'smo69860');
smo69890v0ar.push(smo69860);
const smo69861 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo69861.setAttribute('id', 'smo69861');
smo69890v0ar.push(smo69861);
const smo69862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69862.setAttribute('id', 'smo69862');
smo69890v0ar.push(smo69862);
const smo69863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69863.setAttribute('id', 'smo69863');
smo69863.addModifier(new VF.Dot(), 0);
const smo69864 = new VF.Ornament('mordent_inverted');
smo69863.addModifier(smo69864, 0);
smo69890v0ar.push(smo69863);
const smo69865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69865.setAttribute('id', 'smo69865');
smo69890v0ar.push(smo69865);
smo69890v0.addTickables(smo69890v0ar)
fmtsmo6989047.joinVoices([smo69890v0]);
const smo69890v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69890v1ar = [];
const smo69866 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69866.setAttribute('id', 'smo69866');
smo69866.setStyle({ fillStyle: "#115511" });
smo69890v1ar.push(smo69866);
const smo69867 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo69867.setAttribute('id', 'smo69867');
smo69867.setStyle({ fillStyle: "#115511" });
const smo698670acc = new VF.Accidental('#');
smo69867.addModifier(smo698670acc, 0);
smo69890v1ar.push(smo69867);
const smo69868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69868.setAttribute('id', 'smo69868');
smo69868.setStyle({ fillStyle: "#115511" });
smo69890v1ar.push(smo69868);
const smo69869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69869.setAttribute('id', 'smo69869');
smo69869.setStyle({ fillStyle: "#115511" });
smo69890v1ar.push(smo69869);
const smo69870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo69870.setAttribute('id', 'smo69870');
smo69870.setStyle({ fillStyle: "#115511" });
smo69890v1ar.push(smo69870);
const smo69871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo69871.setAttribute('id', 'smo69871');
smo69871.setStyle({ fillStyle: "#115511" });
const smo698710acc = new VF.Accidental('#');
smo69871.addModifier(smo698710acc, 0);
smo69890v1ar.push(smo69871);
const smo69872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo69872.setAttribute('id', 'smo69872');
smo69872.setStyle({ fillStyle: "#115511" });
smo69890v1ar.push(smo69872);
const smo69873 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69873.setAttribute('id', 'smo69873');
smo69873.setStyle({ fillStyle: "#115511" });
smo69890v1ar.push(smo69873);
const smo69874 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69874.setAttribute('id', 'smo69874');
smo69874.setStyle({ fillStyle: "#115511" });
smo69890v1ar.push(smo69874);
const smo69875 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
smo69875.setAttribute('id', 'smo69875');
smo69875.setStyle({ fillStyle: "#115511" });
smo69890v1ar.push(smo69875);
const smo69876 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["en/4/r"]}'))
smo69876.setAttribute('id', 'smo69876');
smo69876.setStyle({ fillStyle: "#115511" });
smo69890v1ar.push(smo69876);
smo69890v1.addTickables(smo69890v1ar)
fmtsmo6989047.joinVoices([smo69890v1]);
const fmtsmo7493847 = new VF.Formatter();
//
// voices and notes for stave 1 47
const smo74938v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74938v0ar = [];
const smo74909 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo74909.setAttribute('id', 'smo74909');
const smo749090acc = new VF.Accidental('#');
smo74909.addModifier(smo749090acc, 0);
smo74938v0ar.push(smo74909);
const smo74910 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo74910.setAttribute('id', 'smo74910');
smo74938v0ar.push(smo74910);
const smo74911 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo74911.setAttribute('id', 'smo74911');
smo74938v0ar.push(smo74911);
const smo74912 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo74912.setAttribute('id', 'smo74912');
smo74938v0ar.push(smo74912);
const smo74913 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo74913.setAttribute('id', 'smo74913');
smo74938v0ar.push(smo74913);
const smo74914 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74914.setAttribute('id', 'smo74914');
smo74938v0ar.push(smo74914);
const smo74915 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
smo74915.setAttribute('id', 'smo74915');
const smo749150acc = new VF.Accidental('#');
smo74915.addModifier(smo749150acc, 0);
smo74938v0ar.push(smo74915);
const smo74916 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74916.setAttribute('id', 'smo74916');
smo74938v0ar.push(smo74916);
const smo74917 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
smo74917.setAttribute('id', 'smo74917');
smo74938v0ar.push(smo74917);
smo74938v0.addTickables(smo74938v0ar)
fmtsmo7493847.joinVoices([smo74938v0]);
const smo74938v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74938v1ar = [];
const smo74918 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74918.setAttribute('id', 'smo74918');
smo74918.setStyle({ fillStyle: "#115511" });
smo74938v1ar.push(smo74918);
const smo74919 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74919.setAttribute('id', 'smo74919');
smo74919.setStyle({ fillStyle: "#115511" });
smo74938v1ar.push(smo74919);
const smo74920 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74920.setAttribute('id', 'smo74920');
smo74920.setStyle({ fillStyle: "#115511" });
smo74938v1ar.push(smo74920);
const smo74921 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo74921.setAttribute('id', 'smo74921');
smo74921.setStyle({ fillStyle: "#115511" });
const smo749210acc = new VF.Accidental('n');
smo74921.addModifier(smo749210acc, 0);
smo74938v1ar.push(smo74921);
const smo74922 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74922.setAttribute('id', 'smo74922');
smo74922.setStyle({ fillStyle: "#115511" });
smo74938v1ar.push(smo74922);
const smo74923 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74923.setAttribute('id', 'smo74923');
smo74923.setStyle({ fillStyle: "#115511" });
smo74938v1ar.push(smo74923);
const smo74924 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74924.setAttribute('id', 'smo74924');
smo74924.setStyle({ fillStyle: "#115511" });
smo74938v1ar.push(smo74924);
smo74938v1.addTickables(smo74938v1ar)
fmtsmo7493847.joinVoices([smo74938v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78318 = smo69856.getStemDirection();
smo69856.setStemDirection(dirsmo78318);
smo69857.setStemDirection(dirsmo78318);
smo69858.setStemDirection(dirsmo78318);
smo69859.setStemDirection(dirsmo78318);
const smo78318 = new VF.Beam([smo69856,smo69857,smo69858,smo69859]);
const dirsmo78319 = smo69860.getStemDirection();
smo69860.setStemDirection(dirsmo78319);
smo69861.setStemDirection(dirsmo78319);
smo69862.setStemDirection(dirsmo78319);
const smo78319 = new VF.Beam([smo69860,smo69861,smo69862]);
const dirsmo78320 = smo69863.getStemDirection();
smo69863.setStemDirection(dirsmo78320);
smo69865.setStemDirection(dirsmo78320);
const smo78320 = new VF.Beam([smo69863,smo69865]);
const dirsmo78321 = smo69866.getStemDirection();
smo69866.setStemDirection(dirsmo78321);
smo69867.setStemDirection(dirsmo78321);
smo69868.setStemDirection(dirsmo78321);
smo69869.setStemDirection(dirsmo78321);
const smo78321 = new VF.Beam([smo69866,smo69867,smo69868,smo69869]);
const dirsmo78322 = smo69870.getStemDirection();
smo69870.setStemDirection(dirsmo78322);
smo69871.setStemDirection(dirsmo78322);
smo69872.setStemDirection(dirsmo78322);
smo69873.setStemDirection(dirsmo78322);
const smo78322 = new VF.Beam([smo69870,smo69871,smo69872,smo69873]);
const dirsmo78325 = smo74909.getStemDirection();
smo74909.setStemDirection(dirsmo78325);
smo74910.setStemDirection(dirsmo78325);
const smo78325 = new VF.Beam([smo74909,smo74910]);
const dirsmo78326 = smo74911.getStemDirection();
smo74911.setStemDirection(dirsmo78326);
smo74912.setStemDirection(dirsmo78326);
smo74913.setStemDirection(dirsmo78326);
smo74914.setStemDirection(dirsmo78326);
const smo78326 = new VF.Beam([smo74911,smo74912,smo74913,smo74914]);
const dirsmo78327 = smo74920.getStemDirection();
smo74920.setStemDirection(dirsmo78327);
smo74921.setStemDirection(dirsmo78327);
const smo78327 = new VF.Beam([smo74920,smo74921]);
const dirsmo78328 = smo74922.getStemDirection();
smo74922.setStemDirection(dirsmo78328);
smo74923.setStemDirection(dirsmo78328);
const smo78328 = new VF.Beam([smo74922,smo74923]);
 
// formatting measures in staff group smo67190
fmtsmo6989047.format([smo69890v0,smo69890v1,smo74938v0,smo74938v1], 419);
const stavesmo69890 = new VF.Stave(666, 304, 433);
stavesmo69890.setAttribute('id', 'stavesmo69890');
stavesmo69890.setBegBarType(VF.Barline.type.NONE);
stavesmo69890.setContext(context);
stavesmo69890.draw();
smo69890v0.draw(context, stavesmo69890);
smo69890v1.draw(context, stavesmo69890);
smo78318.setContext(context);
smo78318.draw();
smo78319.setContext(context);
smo78319.draw();
smo78320.setContext(context);
smo78320.draw();
smo78321.setContext(context);
smo78321.draw();
smo78322.setContext(context);
smo78322.draw();
const stavesmo74938 = new VF.Stave(666, 438, 433);
stavesmo74938.setAttribute('id', 'stavesmo74938');
stavesmo74938.setBegBarType(VF.Barline.type.NONE);
stavesmo74938.setContext(context);
stavesmo74938.draw();
smo74938v0.draw(context, stavesmo74938);
smo74938v1.draw(context, stavesmo74938);
smo78325.setContext(context);
smo78325.draw();
smo78326.setContext(context);
smo78326.draw();
smo78327.setContext(context);
smo78327.draw();
smo78328.setContext(context);
smo78328.draw();
const fmtsmo6992048 = new VF.Formatter();
//
// voices and notes for stave 0 48
const smo69920v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69920v0ar = [];
const smo69891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69891.setAttribute('id', 'smo69891');
smo69920v0ar.push(smo69891);
const smo69892 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69892.setAttribute('id', 'smo69892');
smo69920v0ar.push(smo69892);
const smo69893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69893.setAttribute('id', 'smo69893');
smo69920v0ar.push(smo69893);
smo69920v0.addTickables(smo69920v0ar)
fmtsmo6992048.joinVoices([smo69920v0]);
const smo69920v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69920v1ar = [];
const smo69894 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/3/r"]}'))
smo69894.setAttribute('id', 'smo69894');
smo69894.setStyle({ fillStyle: "#115511" });
smo69920v1ar.push(smo69894);
const smo69895 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69895.setAttribute('id', 'smo69895');
smo69895.setStyle({ fillStyle: "#115511" });
smo69920v1ar.push(smo69895);
const smo69896 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo69896.setAttribute('id', 'smo69896');
smo69896.setStyle({ fillStyle: "#115511" });
smo69920v1ar.push(smo69896);
const smo69897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69897.setAttribute('id', 'smo69897');
smo69897.setStyle({ fillStyle: "#115511" });
smo69920v1ar.push(smo69897);
const smo69898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69898.setAttribute('id', 'smo69898');
smo69898.setStyle({ fillStyle: "#115511" });
smo69898.addModifier(new VF.Dot(), 0);
smo69920v1ar.push(smo69898);
const smo69899 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69899.setAttribute('id', 'smo69899');
smo69899.setStyle({ fillStyle: "#115511" });
smo69920v1ar.push(smo69899);
const smo69900 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69900.setAttribute('id', 'smo69900');
smo69900.setStyle({ fillStyle: "#115511" });
smo69920v1ar.push(smo69900);
const smo69901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69901.setAttribute('id', 'smo69901');
smo69901.setStyle({ fillStyle: "#115511" });
smo69920v1ar.push(smo69901);
const smo69902 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69902.setAttribute('id', 'smo69902');
smo69902.setStyle({ fillStyle: "#115511" });
smo69920v1ar.push(smo69902);
smo69920v1.addTickables(smo69920v1ar)
fmtsmo6992048.joinVoices([smo69920v1]);
const smo69920v2 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69920v2ar = [];
const smo69903 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69903.setAttribute('id', 'smo69903');
smo69903.setStyle({ fillStyle: '#aaaaaa7f' });
smo69903.addModifier(new VF.Dot(), 0);
smo69920v2ar.push(smo69903);
const smo69904 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69904.setAttribute('id', 'smo69904');
smo69904.setStyle({ fillStyle: "#115511" });
smo69904.addModifier(new VF.Dot(), 0);
smo69920v2ar.push(smo69904);
const smo69905 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo69905.setAttribute('id', 'smo69905');
smo69905.setStyle({ fillStyle: "#115511" });
smo69920v2ar.push(smo69905);
const smo69906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69906.setAttribute('id', 'smo69906');
smo69906.setStyle({ fillStyle: "#115511" });
smo69920v2ar.push(smo69906);
smo69920v2.addTickables(smo69920v2ar)
fmtsmo6992048.joinVoices([smo69920v2]);
const fmtsmo7496148 = new VF.Formatter();
//
// voices and notes for stave 1 48
const smo74961v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74961v0ar = [];
const smo74939 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74939.setAttribute('id', 'smo74939');
smo74961v0ar.push(smo74939);
const smo74940 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo74940.setAttribute('id', 'smo74940');
smo74961v0ar.push(smo74940);
const smo74941 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo74941.setAttribute('id', 'smo74941');
smo74961v0ar.push(smo74941);
const smo74942 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74942.setAttribute('id', 'smo74942');
smo74961v0ar.push(smo74942);
const smo74943 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo74943.setAttribute('id', 'smo74943');
smo74961v0ar.push(smo74943);
const smo74944 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo74944.setAttribute('id', 'smo74944');
smo74944.setStyle({ fillStyle: '#aaaaaa7f' });
smo74961v0ar.push(smo74944);
smo74961v0.addTickables(smo74961v0ar)
fmtsmo7496148.joinVoices([smo74961v0]);
const smo74961v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74961v1ar = [];
const smo74945 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo74945.setAttribute('id', 'smo74945');
smo74945.setStyle({ fillStyle: "#115511" });
smo74961v1ar.push(smo74945);
const smo74946 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo74946.setAttribute('id', 'smo74946');
smo74946.setStyle({ fillStyle: "#115511" });
smo74961v1ar.push(smo74946);
const smo74947 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo74947.setAttribute('id', 'smo74947');
smo74947.setStyle({ fillStyle: "#115511" });
smo74961v1ar.push(smo74947);
smo74961v1.addTickables(smo74961v1ar)
fmtsmo7496148.joinVoices([smo74961v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78331 = smo69895.getStemDirection();
smo69895.setStemDirection(dirsmo78331);
smo69896.setStemDirection(dirsmo78331);
smo69897.setStemDirection(dirsmo78331);
const smo78331 = new VF.Beam([smo69895,smo69896,smo69897]);
const dirsmo78332 = smo69898.getStemDirection();
smo69898.setStemDirection(dirsmo78332);
smo69899.setStemDirection(dirsmo78332);
smo69900.setStemDirection(dirsmo78332);
const smo78332 = new VF.Beam([smo69898,smo69899,smo69900]);
const dirsmo78333 = smo69901.getStemDirection();
smo69901.setStemDirection(dirsmo78333);
smo69902.setStemDirection(dirsmo78333);
const smo78333 = new VF.Beam([smo69901,smo69902]);
const dirsmo78334 = smo69904.getStemDirection();
smo69904.setStemDirection(dirsmo78334);
smo69905.setStemDirection(dirsmo78334);
smo69906.setStemDirection(dirsmo78334);
const smo78334 = new VF.Beam([smo69904,smo69905,smo69906]);
const dirsmo78337 = smo74941.getStemDirection();
smo74941.setStemDirection(dirsmo78337);
smo74942.setStemDirection(dirsmo78337);
const smo78337 = new VF.Beam([smo74941,smo74942]);
 
// formatting measures in staff group smo67190
fmtsmo6992048.format([smo69920v0,smo69920v1,smo69920v2,smo74961v0,smo74961v1], 332);
const stavesmo69920 = new VF.Stave(1099, 304, 346);
stavesmo69920.setAttribute('id', 'stavesmo69920');
stavesmo69920.setBegBarType(VF.Barline.type.NONE);
stavesmo69920.setContext(context);
stavesmo69920.draw();
smo69920v0.draw(context, stavesmo69920);
smo69920v1.draw(context, stavesmo69920);
smo69920v2.draw(context, stavesmo69920);
smo78331.setContext(context);
smo78331.draw();
smo78332.setContext(context);
smo78332.draw();
smo78333.setContext(context);
smo78333.draw();
smo78334.setContext(context);
smo78334.draw();
const stavesmo74961 = new VF.Stave(1099, 438, 346);
stavesmo74961.setAttribute('id', 'stavesmo74961');
stavesmo74961.setBegBarType(VF.Barline.type.NONE);
stavesmo74961.setContext(context);
stavesmo74961.draw();
smo74961v0.draw(context, stavesmo74961);
smo74961v1.draw(context, stavesmo74961);
smo78337.setContext(context);
smo78337.draw();
const fmtsmo6994949 = new VF.Formatter();
//
// voices and notes for stave 0 49
const smo69949v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69949v0ar = [];
const smo69921 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69921.setAttribute('id', 'smo69921');
smo69949v0ar.push(smo69921);
const smo69922 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69922.setAttribute('id', 'smo69922');
smo69949v0ar.push(smo69922);
const smo69923 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69923.setAttribute('id', 'smo69923');
smo69949v0ar.push(smo69923);
const smo69924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69924.setAttribute('id', 'smo69924');
smo69949v0ar.push(smo69924);
const smo69925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69925.setAttribute('id', 'smo69925');
smo69949v0ar.push(smo69925);
smo69949v0.addTickables(smo69949v0ar)
fmtsmo6994949.joinVoices([smo69949v0]);
const smo69949v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69949v1ar = [];
const smo69926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo69926.setAttribute('id', 'smo69926');
smo69926.setStyle({ fillStyle: "#115511" });
smo69949v1ar.push(smo69926);
const smo69927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69927.setAttribute('id', 'smo69927');
smo69927.setStyle({ fillStyle: "#115511" });
smo69949v1ar.push(smo69927);
const smo69928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69928.setAttribute('id', 'smo69928');
smo69928.setStyle({ fillStyle: "#115511" });
smo69949v1ar.push(smo69928);
const smo69929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69929.setAttribute('id', 'smo69929');
smo69929.setStyle({ fillStyle: "#115511" });
smo69949v1ar.push(smo69929);
const smo69930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69930.setAttribute('id', 'smo69930');
smo69930.setStyle({ fillStyle: "#115511" });
smo69949v1ar.push(smo69930);
const smo69931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69931.setAttribute('id', 'smo69931');
smo69931.setStyle({ fillStyle: "#115511" });
smo69949v1ar.push(smo69931);
const smo69932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69932.setAttribute('id', 'smo69932');
smo69932.setStyle({ fillStyle: "#115511" });
smo69949v1ar.push(smo69932);
const smo69933 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69933.setAttribute('id', 'smo69933');
smo69933.setStyle({ fillStyle: "#115511" });
smo69949v1ar.push(smo69933);
const smo69934 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo69934.setAttribute('id', 'smo69934');
smo69934.setStyle({ fillStyle: "#115511" });
const smo699340acc = new VF.Accidental('#');
smo69934.addModifier(smo699340acc, 0);
smo69949v1ar.push(smo69934);
const smo69935 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69935.setAttribute('id', 'smo69935');
smo69935.setStyle({ fillStyle: "#115511" });
smo69949v1ar.push(smo69935);
smo69949v1.addTickables(smo69949v1ar)
fmtsmo6994949.joinVoices([smo69949v1]);
const fmtsmo7499149 = new VF.Formatter();
//
// voices and notes for stave 1 49
const smo74991v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74991v0ar = [];
const smo74962 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo74962.setAttribute('id', 'smo74962');
smo74991v0ar.push(smo74962);
const smo74963 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo74963.setAttribute('id', 'smo74963');
smo74991v0ar.push(smo74963);
const smo74964 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo74964.setAttribute('id', 'smo74964');
smo74991v0ar.push(smo74964);
const smo74965 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo74965.setAttribute('id', 'smo74965');
smo74991v0ar.push(smo74965);
const smo74966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo74966.setAttribute('id', 'smo74966');
smo74991v0ar.push(smo74966);
const smo74967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo74967.setAttribute('id', 'smo74967');
smo74991v0ar.push(smo74967);
const smo74968 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo74968.setAttribute('id', 'smo74968');
smo74991v0ar.push(smo74968);
smo74991v0.addTickables(smo74991v0ar)
fmtsmo7499149.joinVoices([smo74991v0]);
const smo74991v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74991v1ar = [];
const smo74969 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo74969.setAttribute('id', 'smo74969');
smo74969.setStyle({ fillStyle: "#115511" });
smo74991v1ar.push(smo74969);
const smo74970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo74970.setAttribute('id', 'smo74970');
smo74970.setStyle({ fillStyle: "#115511" });
smo74991v1ar.push(smo74970);
const smo74971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo74971.setAttribute('id', 'smo74971');
smo74971.setStyle({ fillStyle: "#115511" });
smo74991v1ar.push(smo74971);
const smo74972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
smo74972.setAttribute('id', 'smo74972');
smo74972.setStyle({ fillStyle: "#115511" });
smo74991v1ar.push(smo74972);
const smo74973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo74973.setAttribute('id', 'smo74973');
smo74973.setStyle({ fillStyle: "#115511" });
smo74973.addModifier(new VF.Dot(), 0);
smo74991v1ar.push(smo74973);
const smo74974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74974.setAttribute('id', 'smo74974');
smo74974.setStyle({ fillStyle: "#115511" });
smo74991v1ar.push(smo74974);
const smo74975 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo74975.setAttribute('id', 'smo74975');
smo74975.setStyle({ fillStyle: "#115511" });
smo74991v1ar.push(smo74975);
const smo74976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
smo74976.setAttribute('id', 'smo74976');
smo74976.setStyle({ fillStyle: "#115511" });
smo74991v1ar.push(smo74976);
const smo74977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74977.setAttribute('id', 'smo74977');
smo74977.setStyle({ fillStyle: "#115511" });
smo74991v1ar.push(smo74977);
smo74991v1.addTickables(smo74991v1ar)
fmtsmo7499149.joinVoices([smo74991v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78340 = smo69923.getStemDirection();
smo69923.setStemDirection(dirsmo78340);
smo69924.setStemDirection(dirsmo78340);
smo69925.setStemDirection(dirsmo78340);
const smo78340 = new VF.Beam([smo69923,smo69924,smo69925]);
const dirsmo78341 = smo69926.getStemDirection();
smo69926.setStemDirection(dirsmo78341);
smo69927.setStemDirection(dirsmo78341);
const smo78341 = new VF.Beam([smo69926,smo69927]);
const dirsmo78342 = smo69928.getStemDirection();
smo69928.setStemDirection(dirsmo78342);
smo69929.setStemDirection(dirsmo78342);
smo69930.setStemDirection(dirsmo78342);
smo69931.setStemDirection(dirsmo78342);
const smo78342 = new VF.Beam([smo69928,smo69929,smo69930,smo69931]);
const dirsmo78343 = smo69932.getStemDirection();
smo69932.setStemDirection(dirsmo78343);
smo69933.setStemDirection(dirsmo78343);
smo69934.setStemDirection(dirsmo78343);
smo69935.setStemDirection(dirsmo78343);
const smo78343 = new VF.Beam([smo69932,smo69933,smo69934,smo69935]);
const dirsmo78346 = smo74962.getStemDirection();
smo74962.setStemDirection(dirsmo78346);
smo74963.setStemDirection(dirsmo78346);
const smo78346 = new VF.Beam([smo74962,smo74963]);
const dirsmo78347 = smo74964.getStemDirection();
smo74964.setStemDirection(dirsmo78347);
smo74965.setStemDirection(dirsmo78347);
const smo78347 = new VF.Beam([smo74964,smo74965]);
const dirsmo78348 = smo74966.getStemDirection();
smo74966.setStemDirection(dirsmo78348);
smo74967.setStemDirection(dirsmo78348);
const smo78348 = new VF.Beam([smo74966,smo74967]);
const dirsmo78349 = smo74970.getStemDirection();
smo74970.setStemDirection(dirsmo78349);
smo74971.setStemDirection(dirsmo78349);
smo74972.setStemDirection(dirsmo78349);
const smo78349 = new VF.Beam([smo74970,smo74971,smo74972]);
const dirsmo78350 = smo74973.getStemDirection();
smo74973.setStemDirection(dirsmo78350);
smo74974.setStemDirection(dirsmo78350);
smo74975.setStemDirection(dirsmo78350);
const smo78350 = new VF.Beam([smo74973,smo74974,smo74975]);
const dirsmo78351 = smo74976.getStemDirection();
smo74976.setStemDirection(dirsmo78351);
smo74977.setStemDirection(dirsmo78351);
const smo78351 = new VF.Beam([smo74976,smo74977]);
 
// formatting measures in staff group smo67190
fmtsmo6994949.format([smo69949v0,smo69949v1,smo74991v0,smo74991v1], 315);
const stavesmo69949 = new VF.Stave(1445, 304, 363);
stavesmo69949.setAttribute('id', 'stavesmo69949');
stavesmo69949.setBegBarType(VF.Barline.type.NONE);
stavesmo69949.setContext(context);
stavesmo69949.draw();
smo69949v0.draw(context, stavesmo69949);
smo69949v1.draw(context, stavesmo69949);
smo78340.setContext(context);
smo78340.draw();
smo78341.setContext(context);
smo78341.draw();
smo78342.setContext(context);
smo78342.draw();
smo78343.setContext(context);
smo78343.draw();
const stavesmo74991 = new VF.Stave(1445, 438, 363);
stavesmo74991.setAttribute('id', 'stavesmo74991');
stavesmo74991.setBegBarType(VF.Barline.type.NONE);
stavesmo74991.addClef('treble');
stavesmo74991.setContext(context);
stavesmo74991.draw();
smo74991v0.draw(context, stavesmo74991);
smo74991v1.draw(context, stavesmo74991);
smo78346.setContext(context);
smo78346.draw();
smo78347.setContext(context);
smo78347.draw();
smo78348.setContext(context);
smo78348.draw();
smo78349.setContext(context);
smo78349.draw();
smo78350.setContext(context);
smo78350.draw();
smo78351.setContext(context);
smo78351.draw();
const rightsmo67190stavesmo699491 = new VF.StaveConnector(stavesmo69949, stavesmo74991).setType(0);
rightsmo67190stavesmo699491.setContext(context).draw();
const fmtsmo6998150 = new VF.Formatter();
//
// voices and notes for stave 0 50
const smo69981v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69981v0ar = [];
const smo69950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo69950.setAttribute('id', 'smo69950');
smo69950.addModifier(new VF.Dot(), 0);
smo69981v0ar.push(smo69950);
const smo69951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo69951.setAttribute('id', 'smo69951');
smo69981v0ar.push(smo69951);
const smo69952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo69952.setAttribute('id', 'smo69952');
smo69981v0ar.push(smo69952);
const smo69953 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69953.setAttribute('id', 'smo69953');
smo69981v0ar.push(smo69953);
const smo69954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo69954.setAttribute('id', 'smo69954');
smo69981v0ar.push(smo69954);
const smo69955 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo69955.setAttribute('id', 'smo69955');
smo69981v0ar.push(smo69955);
const smo69956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo69956.setAttribute('id', 'smo69956');
smo69981v0ar.push(smo69956);
const smo69957 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo69957.setAttribute('id', 'smo69957');
smo69957.addModifier(new VF.Dot(), 0);
smo69981v0ar.push(smo69957);
const smo69958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo69958.setAttribute('id', 'smo69958');
smo69981v0ar.push(smo69958);
const smo69959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo69959.setAttribute('id', 'smo69959');
smo69981v0ar.push(smo69959);
smo69981v0.addTickables(smo69981v0ar)
fmtsmo6998150.joinVoices([smo69981v0]);
const smo69981v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69981v1ar = [];
const smo69960 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69960.setAttribute('id', 'smo69960');
smo69960.setStyle({ fillStyle: "#115511" });
smo69981v1ar.push(smo69960);
const smo69961 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo69961.setAttribute('id', 'smo69961');
smo69961.setStyle({ fillStyle: "#115511" });
const smo699610acc = new VF.Accidental('#');
smo69961.addModifier(smo699610acc, 0);
smo69981v1ar.push(smo69961);
const smo69962 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo69962.setAttribute('id', 'smo69962');
smo69962.setStyle({ fillStyle: "#115511" });
const smo699620acc = new VF.Accidental('#');
smo69962.addModifier(smo699620acc, 0);
smo69981v1ar.push(smo69962);
const smo69963 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69963.setAttribute('id', 'smo69963');
smo69963.setStyle({ fillStyle: "#115511" });
smo69981v1ar.push(smo69963);
const smo69964 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69964.setAttribute('id', 'smo69964');
smo69964.setStyle({ fillStyle: "#115511" });
smo69981v1ar.push(smo69964);
const smo69965 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69965.setAttribute('id', 'smo69965');
smo69965.setStyle({ fillStyle: "#115511" });
const smo699650acc = new VF.Accidental('n');
smo69965.addModifier(smo699650acc, 0);
smo69981v1ar.push(smo69965);
const smo69966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69966.setAttribute('id', 'smo69966');
smo69966.setStyle({ fillStyle: "#115511" });
smo69981v1ar.push(smo69966);
const smo69967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69967.setAttribute('id', 'smo69967');
smo69967.setStyle({ fillStyle: "#115511" });
smo69981v1ar.push(smo69967);
smo69981v1.addTickables(smo69981v1ar)
fmtsmo6998150.joinVoices([smo69981v1]);
const fmtsmo7502150 = new VF.Formatter();
//
// voices and notes for stave 1 50
const smo75021v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75021v0ar = [];
const smo74992 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo74992.setAttribute('id', 'smo74992');
smo75021v0ar.push(smo74992);
const smo74993 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74993.setAttribute('id', 'smo74993');
smo75021v0ar.push(smo74993);
const smo74994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo74994.setAttribute('id', 'smo74994');
smo75021v0ar.push(smo74994);
const smo74995 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo74995.setAttribute('id', 'smo74995');
smo75021v0ar.push(smo74995);
const smo74996 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo74996.setAttribute('id', 'smo74996');
smo75021v0ar.push(smo74996);
const smo74997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo74997.setAttribute('id', 'smo74997');
smo75021v0ar.push(smo74997);
smo75021v0.addTickables(smo75021v0ar)
fmtsmo7502150.joinVoices([smo75021v0]);
const smo75021v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75021v1ar = [];
const smo74998 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo74998.setAttribute('id', 'smo74998');
smo74998.setStyle({ fillStyle: "#115511" });
smo75021v1ar.push(smo74998);
const smo74999 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74999.setAttribute('id', 'smo74999');
smo74999.setStyle({ fillStyle: "#115511" });
smo75021v1ar.push(smo74999);
const smo75000 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo75000.setAttribute('id', 'smo75000');
smo75000.setStyle({ fillStyle: "#115511" });
smo75021v1ar.push(smo75000);
const smo75001 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo75001.setAttribute('id', 'smo75001');
smo75001.setStyle({ fillStyle: "#115511" });
smo75021v1ar.push(smo75001);
const smo75002 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo75002.setAttribute('id', 'smo75002');
smo75002.setStyle({ fillStyle: "#115511" });
smo75021v1ar.push(smo75002);
const smo75003 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo75003.setAttribute('id', 'smo75003');
smo75003.setStyle({ fillStyle: "#115511" });
smo75021v1ar.push(smo75003);
const smo75004 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
smo75004.setAttribute('id', 'smo75004');
smo75004.setStyle({ fillStyle: "#115511" });
smo75021v1ar.push(smo75004);
const smo75005 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["a#/2/n"]}'))
smo75005.setAttribute('id', 'smo75005');
smo75005.setStyle({ fillStyle: "#115511" });
const smo750050acc = new VF.Accidental('#');
smo75005.addModifier(smo750050acc, 0);
smo75021v1ar.push(smo75005);
const smo75006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo75006.setAttribute('id', 'smo75006');
smo75006.setStyle({ fillStyle: "#115511" });
const smo750060acc = new VF.Accidental('n');
smo75006.addModifier(smo750060acc, 0);
smo75021v1ar.push(smo75006);
const smo75007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo75007.setAttribute('id', 'smo75007');
smo75007.setStyle({ fillStyle: "#115511" });
smo75021v1ar.push(smo75007);
smo75021v1.addTickables(smo75021v1ar)
fmtsmo7502150.joinVoices([smo75021v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78370 = smo69950.getStemDirection();
smo69950.setStemDirection(dirsmo78370);
smo69951.setStemDirection(dirsmo78370);
smo69952.setStemDirection(dirsmo78370);
const smo78370 = new VF.Beam([smo69950,smo69951,smo69952]);
const dirsmo78371 = smo69953.getStemDirection();
smo69953.setStemDirection(dirsmo78371);
smo69954.setStemDirection(dirsmo78371);
const smo78371 = new VF.Beam([smo69953,smo69954]);
const dirsmo78372 = smo69955.getStemDirection();
smo69955.setStemDirection(dirsmo78372);
smo69956.setStemDirection(dirsmo78372);
const smo78372 = new VF.Beam([smo69955,smo69956]);
const dirsmo78373 = smo69957.getStemDirection();
smo69957.setStemDirection(dirsmo78373);
smo69958.setStemDirection(dirsmo78373);
smo69959.setStemDirection(dirsmo78373);
const smo78373 = new VF.Beam([smo69957,smo69958,smo69959]);
const dirsmo78374 = smo69960.getStemDirection();
smo69960.setStemDirection(dirsmo78374);
smo69961.setStemDirection(dirsmo78374);
const smo78374 = new VF.Beam([smo69960,smo69961]);
const dirsmo78375 = smo69962.getStemDirection();
smo69962.setStemDirection(dirsmo78375);
smo69963.setStemDirection(dirsmo78375);
const smo78375 = new VF.Beam([smo69962,smo69963]);
const dirsmo78376 = smo69964.getStemDirection();
smo69964.setStemDirection(dirsmo78376);
smo69965.setStemDirection(dirsmo78376);
smo69966.setStemDirection(dirsmo78376);
smo69967.setStemDirection(dirsmo78376);
const smo78376 = new VF.Beam([smo69964,smo69965,smo69966,smo69967]);
const dirsmo78379 = smo74992.getStemDirection();
smo74992.setStemDirection(dirsmo78379);
smo74993.setStemDirection(dirsmo78379);
const smo78379 = new VF.Beam([smo74992,smo74993]);
const dirsmo78380 = smo74998.getStemDirection();
smo74998.setStemDirection(dirsmo78380);
smo74999.setStemDirection(dirsmo78380);
const smo78380 = new VF.Beam([smo74998,smo74999]);
const dirsmo78381 = smo75000.getStemDirection();
smo75000.setStemDirection(dirsmo78381);
smo75001.setStemDirection(dirsmo78381);
smo75002.setStemDirection(dirsmo78381);
smo75003.setStemDirection(dirsmo78381);
const smo78381 = new VF.Beam([smo75000,smo75001,smo75002,smo75003]);
const dirsmo78382 = smo75004.getStemDirection();
smo75004.setStemDirection(dirsmo78382);
smo75005.setStemDirection(dirsmo78382);
smo75006.setStemDirection(dirsmo78382);
smo75007.setStemDirection(dirsmo78382);
const smo78382 = new VF.Beam([smo75004,smo75005,smo75006,smo75007]);
 
// formatting measures in staff group smo67190
fmtsmo6998150.format([smo69981v0,smo69981v1,smo75021v0,smo75021v1], 498);
const stavesmo69981 = new VF.Stave(90, 662, 556);
stavesmo69981.setAttribute('id', 'stavesmo69981');
stavesmo69981.setBegBarType(1);
stavesmo69981.addClef('treble');
stavesmo69981.setContext(context);
stavesmo69981.draw();
smo69981v0.draw(context, stavesmo69981);
smo69981v1.draw(context, stavesmo69981);
smo78370.setContext(context);
smo78370.draw();
smo78371.setContext(context);
smo78371.draw();
smo78372.setContext(context);
smo78372.draw();
smo78373.setContext(context);
smo78373.draw();
smo78374.setContext(context);
smo78374.draw();
smo78375.setContext(context);
smo78375.draw();
smo78376.setContext(context);
smo78376.draw();
const stavesmo75021 = new VF.Stave(90, 801, 556);
stavesmo75021.setAttribute('id', 'stavesmo75021');
stavesmo75021.setBegBarType(1);
stavesmo75021.addClef('treble');
stavesmo75021.setContext(context);
stavesmo75021.draw();
smo75021v0.draw(context, stavesmo75021);
smo75021v1.draw(context, stavesmo75021);
smo78379.setContext(context);
smo78379.draw();
smo78380.setContext(context);
smo78380.draw();
smo78381.setContext(context);
smo78381.draw();
smo78382.setContext(context);
smo78382.draw();
const leftsmo67190stavesmo699811 = new VF.StaveConnector(stavesmo69981, stavesmo75021).setType(3);
leftsmo67190stavesmo699811.setContext(context).draw();
const fmtsmo7001651 = new VF.Formatter();
//
// voices and notes for stave 0 51
const smo70016v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70016v0ar = [];
const smo69982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo69982.setAttribute('id', 'smo69982');
smo70016v0ar.push(smo69982);
const smo69983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo69983.setAttribute('id', 'smo69983');
smo70016v0ar.push(smo69983);
const smo69984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo69984.setAttribute('id', 'smo69984');
smo70016v0ar.push(smo69984);
const smo69985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo69985.setAttribute('id', 'smo69985');
smo70016v0ar.push(smo69985);
const smo69986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo69986.setAttribute('id', 'smo69986');
smo70016v0ar.push(smo69986);
const smo69987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo69987.setAttribute('id', 'smo69987');
smo70016v0ar.push(smo69987);
const smo69988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo69988.setAttribute('id', 'smo69988');
smo70016v0ar.push(smo69988);
const smo69989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo69989.setAttribute('id', 'smo69989');
smo70016v0ar.push(smo69989);
const smo69990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo69990.setAttribute('id', 'smo69990');
smo70016v0ar.push(smo69990);
const smo69991 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo69991.setAttribute('id', 'smo69991');
smo70016v0ar.push(smo69991);
smo70016v0.addTickables(smo70016v0ar)
fmtsmo7001651.joinVoices([smo70016v0]);
const smo70016v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70016v1ar = [];
const smo69992 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo69992.setAttribute('id', 'smo69992');
smo69992.setStyle({ fillStyle: "#115511" });
smo69992.addModifier(new VF.Dot(), 0);
smo70016v1ar.push(smo69992);
const smo69993 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo69993.setAttribute('id', 'smo69993');
smo69993.setStyle({ fillStyle: "#115511" });
smo70016v1ar.push(smo69993);
const smo69994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo69994.setAttribute('id', 'smo69994');
smo69994.setStyle({ fillStyle: "#115511" });
smo70016v1ar.push(smo69994);
const smo69995 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69995.setAttribute('id', 'smo69995');
smo69995.setStyle({ fillStyle: "#115511" });
smo70016v1ar.push(smo69995);
const smo69996 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo69996.setAttribute('id', 'smo69996');
smo69996.setStyle({ fillStyle: "#115511" });
smo70016v1ar.push(smo69996);
const smo69997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69997.setAttribute('id', 'smo69997');
smo69997.setStyle({ fillStyle: "#115511" });
smo70016v1ar.push(smo69997);
const smo69998 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo69998.setAttribute('id', 'smo69998');
smo69998.setStyle({ fillStyle: "#115511" });
smo70016v1ar.push(smo69998);
const smo69999 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo69999.setAttribute('id', 'smo69999');
smo69999.setStyle({ fillStyle: "#115511" });
smo70016v1ar.push(smo69999);
const smo70000 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo70000.setAttribute('id', 'smo70000');
smo70000.setStyle({ fillStyle: "#115511" });
smo70016v1ar.push(smo70000);
const smo70001 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo70001.setAttribute('id', 'smo70001');
smo70001.setStyle({ fillStyle: "#115511" });
smo70016v1ar.push(smo70001);
const smo70002 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo70002.setAttribute('id', 'smo70002');
smo70002.setStyle({ fillStyle: "#115511" });
smo70016v1ar.push(smo70002);
smo70016v1.addTickables(smo70016v1ar)
fmtsmo7001651.joinVoices([smo70016v1]);
const fmtsmo7505151 = new VF.Formatter();
//
// voices and notes for stave 1 51
const smo75051v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75051v0ar = [];
const smo75022 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/4/r"]}'))
smo75022.setAttribute('id', 'smo75022');
smo75051v0ar.push(smo75022);
const smo75023 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo75023.setAttribute('id', 'smo75023');
smo75051v0ar.push(smo75023);
const smo75024 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo75024.setAttribute('id', 'smo75024');
smo75051v0ar.push(smo75024);
const smo75025 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo75025.setAttribute('id', 'smo75025');
const smo750250acc = new VF.Accidental('#');
smo75025.addModifier(smo750250acc, 0);
smo75051v0ar.push(smo75025);
const smo75026 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo75026.setAttribute('id', 'smo75026');
smo75026.addModifier(new VF.Dot(), 0);
smo75051v0ar.push(smo75026);
const smo75027 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo75027.setAttribute('id', 'smo75027');
smo75051v0ar.push(smo75027);
const smo75028 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo75028.setAttribute('id', 'smo75028');
smo75051v0ar.push(smo75028);
const smo75029 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo75029.setAttribute('id', 'smo75029');
const smo750290acc = new VF.Accidental('n');
smo75029.addModifier(smo750290acc, 0);
smo75051v0ar.push(smo75029);
const smo75030 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo75030.setAttribute('id', 'smo75030');
smo75051v0ar.push(smo75030);
smo75051v0.addTickables(smo75051v0ar)
fmtsmo7505151.joinVoices([smo75051v0]);
const smo75051v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75051v1ar = [];
const smo75031 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo75031.setAttribute('id', 'smo75031');
smo75031.setStyle({ fillStyle: "#115511" });
smo75051v1ar.push(smo75031);
const smo75032 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo75032.setAttribute('id', 'smo75032');
smo75032.setStyle({ fillStyle: "#115511" });
const smo750320acc = new VF.Accidental('#');
smo75032.addModifier(smo750320acc, 0);
smo75051v1ar.push(smo75032);
const smo75033 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75033.setAttribute('id', 'smo75033');
smo75033.setStyle({ fillStyle: "#115511" });
smo75051v1ar.push(smo75033);
const smo75034 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo75034.setAttribute('id', 'smo75034');
smo75034.setStyle({ fillStyle: "#115511" });
smo75051v1ar.push(smo75034);
const smo75035 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo75035.setAttribute('id', 'smo75035');
smo75035.setStyle({ fillStyle: "#115511" });
smo75051v1ar.push(smo75035);
const smo75036 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo75036.setAttribute('id', 'smo75036');
smo75036.setStyle({ fillStyle: "#115511" });
smo75051v1ar.push(smo75036);
const smo75037 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo75037.setAttribute('id', 'smo75037');
smo75037.setStyle({ fillStyle: "#115511" });
const smo750370acc = new VF.Accidental('n');
smo75037.addModifier(smo750370acc, 0);
smo75051v1ar.push(smo75037);
smo75051v1.addTickables(smo75051v1ar)
fmtsmo7505151.joinVoices([smo75051v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78385 = smo69982.getStemDirection();
smo69982.setStemDirection(dirsmo78385);
smo69983.setStemDirection(dirsmo78385);
smo69984.setStemDirection(dirsmo78385);
smo69985.setStemDirection(dirsmo78385);
const smo78385 = new VF.Beam([smo69982,smo69983,smo69984,smo69985]);
const dirsmo78386 = smo69986.getStemDirection();
smo69986.setStemDirection(dirsmo78386);
smo69987.setStemDirection(dirsmo78386);
smo69988.setStemDirection(dirsmo78386);
smo69989.setStemDirection(dirsmo78386);
const smo78386 = new VF.Beam([smo69986,smo69987,smo69988,smo69989]);
const dirsmo78387 = smo69990.getStemDirection();
smo69990.setStemDirection(dirsmo78387);
smo69991.setStemDirection(dirsmo78387);
const smo78387 = new VF.Beam([smo69990,smo69991]);
const dirsmo78388 = smo69992.getStemDirection();
smo69992.setStemDirection(dirsmo78388);
smo69993.setStemDirection(dirsmo78388);
smo69994.setStemDirection(dirsmo78388);
smo69995.setStemDirection(dirsmo78388);
smo69996.setStemDirection(dirsmo78388);
const smo78388 = new VF.Beam([smo69992,smo69993,smo69994,smo69995,smo69996]);
const dirsmo78389 = smo69997.getStemDirection();
smo69997.setStemDirection(dirsmo78389);
smo69998.setStemDirection(dirsmo78389);
const smo78389 = new VF.Beam([smo69997,smo69998]);
const dirsmo78390 = smo69999.getStemDirection();
smo69999.setStemDirection(dirsmo78390);
smo70000.setStemDirection(dirsmo78390);
smo70001.setStemDirection(dirsmo78390);
smo70002.setStemDirection(dirsmo78390);
const smo78390 = new VF.Beam([smo69999,smo70000,smo70001,smo70002]);
const dirsmo78393 = smo75023.getStemDirection();
smo75023.setStemDirection(dirsmo78393);
smo75024.setStemDirection(dirsmo78393);
smo75025.setStemDirection(dirsmo78393);
const smo78393 = new VF.Beam([smo75023,smo75024,smo75025]);
const dirsmo78394 = smo75026.getStemDirection();
smo75026.setStemDirection(dirsmo78394);
smo75027.setStemDirection(dirsmo78394);
smo75028.setStemDirection(dirsmo78394);
const smo78394 = new VF.Beam([smo75026,smo75027,smo75028]);
const dirsmo78395 = smo75029.getStemDirection();
smo75029.setStemDirection(dirsmo78395);
smo75030.setStemDirection(dirsmo78395);
const smo78395 = new VF.Beam([smo75029,smo75030]);
const dirsmo78396 = smo75031.getStemDirection();
smo75031.setStemDirection(dirsmo78396);
smo75032.setStemDirection(dirsmo78396);
smo75033.setStemDirection(dirsmo78396);
smo75034.setStemDirection(dirsmo78396);
const smo78396 = new VF.Beam([smo75031,smo75032,smo75033,smo75034]);
const dirsmo78397 = smo75036.getStemDirection();
smo75036.setStemDirection(dirsmo78397);
smo75037.setStemDirection(dirsmo78397);
const smo78397 = new VF.Beam([smo75036,smo75037]);
 
// formatting measures in staff group smo67190
fmtsmo7001651.format([smo70016v0,smo70016v1,smo75051v0,smo75051v1], 515);
const stavesmo70016 = new VF.Stave(646, 662, 563);
stavesmo70016.setAttribute('id', 'stavesmo70016');
stavesmo70016.setBegBarType(VF.Barline.type.NONE);
stavesmo70016.setContext(context);
stavesmo70016.draw();
smo70016v0.draw(context, stavesmo70016);
smo70016v1.draw(context, stavesmo70016);
smo78385.setContext(context);
smo78385.draw();
smo78386.setContext(context);
smo78386.draw();
smo78387.setContext(context);
smo78387.draw();
smo78388.setContext(context);
smo78388.draw();
smo78389.setContext(context);
smo78389.draw();
smo78390.setContext(context);
smo78390.draw();
const stavesmo75051 = new VF.Stave(646, 801, 563);
stavesmo75051.setAttribute('id', 'stavesmo75051');
stavesmo75051.setBegBarType(VF.Barline.type.NONE);
stavesmo75051.addClef('bass');
stavesmo75051.setContext(context);
stavesmo75051.draw();
smo75051v0.draw(context, stavesmo75051);
smo75051v1.draw(context, stavesmo75051);
smo78393.setContext(context);
smo78393.draw();
smo78394.setContext(context);
smo78394.draw();
smo78395.setContext(context);
smo78395.draw();
smo78396.setContext(context);
smo78396.draw();
smo78397.setContext(context);
smo78397.draw();
const fmtsmo7005352 = new VF.Formatter();
//
// voices and notes for stave 0 52
const smo70053v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70053v0ar = [];
const smo70017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo70017.setAttribute('id', 'smo70017');
smo70053v0ar.push(smo70017);
const smo70018 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/5/n"]}'))
smo70018.setAttribute('id', 'smo70018');
const smo700180acc = new VF.Accidental('b');
smo70018.addModifier(smo700180acc, 0);
smo70053v0ar.push(smo70018);
const smo70019 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo70019.setAttribute('id', 'smo70019');
smo70053v0ar.push(smo70019);
const smo70020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo70020.setAttribute('id', 'smo70020');
smo70053v0ar.push(smo70020);
const smo70021 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo70021.setAttribute('id', 'smo70021');
smo70053v0ar.push(smo70021);
const smo70022 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo70022.setAttribute('id', 'smo70022');
smo70053v0ar.push(smo70022);
const smo70023 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo70023.setAttribute('id', 'smo70023');
smo70053v0ar.push(smo70023);
const smo70024 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo70024.setAttribute('id', 'smo70024');
smo70053v0ar.push(smo70024);
const smo70025 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo70025.setAttribute('id', 'smo70025');
smo70053v0ar.push(smo70025);
const smo70026 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo70026.setAttribute('id', 'smo70026');
smo70053v0ar.push(smo70026);
const smo70027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo70027.setAttribute('id', 'smo70027');
smo70053v0ar.push(smo70027);
const smo70028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo70028.setAttribute('id', 'smo70028');
const smo70029 = new VF.Ornament('mordent_inverted');
smo70028.addModifier(smo70029, 0);
smo70053v0ar.push(smo70028);
const smo70030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo70030.setAttribute('id', 'smo70030');
smo70053v0ar.push(smo70030);
const smo70031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo70031.setAttribute('id', 'smo70031');
smo70053v0ar.push(smo70031);
smo70053v0.addTickables(smo70053v0ar)
fmtsmo7005352.joinVoices([smo70053v0]);
const smo70053v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70053v1ar = [];
const smo70032 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo70032.setAttribute('id', 'smo70032');
smo70032.setStyle({ fillStyle: "#115511" });
smo70053v1ar.push(smo70032);
const smo70033 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo70033.setAttribute('id', 'smo70033');
smo70033.setStyle({ fillStyle: "#115511" });
smo70053v1ar.push(smo70033);
const smo70034 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo70034.setAttribute('id', 'smo70034');
smo70034.setStyle({ fillStyle: "#115511" });
const smo700340acc = new VF.Accidental('#');
smo70034.addModifier(smo700340acc, 0);
smo70053v1ar.push(smo70034);
const smo70035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo70035.setAttribute('id', 'smo70035');
smo70035.setStyle({ fillStyle: "#115511" });
smo70053v1ar.push(smo70035);
const smo70036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo70036.setAttribute('id', 'smo70036');
smo70036.setStyle({ fillStyle: "#115511" });
smo70053v1ar.push(smo70036);
const smo70037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo70037.setAttribute('id', 'smo70037');
smo70037.setStyle({ fillStyle: "#115511" });
smo70053v1ar.push(smo70037);
const smo70038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo70038.setAttribute('id', 'smo70038');
smo70038.setStyle({ fillStyle: "#115511" });
smo70053v1ar.push(smo70038);
const smo70039 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo70039.setAttribute('id', 'smo70039');
smo70039.setStyle({ fillStyle: "#115511" });
smo70053v1ar.push(smo70039);
smo70053v1.addTickables(smo70053v1ar)
fmtsmo7005352.joinVoices([smo70053v1]);
const fmtsmo7508552 = new VF.Formatter();
//
// voices and notes for stave 1 52
const smo75085v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75085v0ar = [];
const smo75052 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo75052.setAttribute('id', 'smo75052');
smo75085v0ar.push(smo75052);
const smo75053 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo75053.setAttribute('id', 'smo75053');
smo75085v0ar.push(smo75053);
const smo75054 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo75054.setAttribute('id', 'smo75054');
smo75085v0ar.push(smo75054);
const smo75055 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo75055.setAttribute('id', 'smo75055');
smo75085v0ar.push(smo75055);
const smo75056 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo75056.setAttribute('id', 'smo75056');
smo75085v0ar.push(smo75056);
const smo75057 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo75057.setAttribute('id', 'smo75057');
smo75085v0ar.push(smo75057);
const smo75058 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo75058.setAttribute('id', 'smo75058');
const smo750580acc = new VF.Accidental('#');
smo75058.addModifier(smo750580acc, 0);
smo75085v0ar.push(smo75058);
const smo75059 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["en/4/r"]}'))
smo75059.setAttribute('id', 'smo75059');
smo75085v0ar.push(smo75059);
const smo75060 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["en/4/r"]}'))
smo75060.setAttribute('id', 'smo75060');
smo75085v0ar.push(smo75060);
smo75085v0.addTickables(smo75085v0ar)
fmtsmo7508552.joinVoices([smo75085v0]);
const smo75085v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75085v1ar = [];
const smo75061 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75061.setAttribute('id', 'smo75061');
smo75061.setStyle({ fillStyle: "#115511" });
smo75061.addModifier(new VF.Dot(), 0);
smo75085v1ar.push(smo75061);
const smo75062 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo75062.setAttribute('id', 'smo75062');
smo75062.setStyle({ fillStyle: "#115511" });
smo75085v1ar.push(smo75062);
const smo75063 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75063.setAttribute('id', 'smo75063');
smo75063.setStyle({ fillStyle: "#115511" });
smo75085v1ar.push(smo75063);
const smo75064 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo75064.setAttribute('id', 'smo75064');
smo75064.setStyle({ fillStyle: "#115511" });
smo75085v1ar.push(smo75064);
const smo75065 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo75065.setAttribute('id', 'smo75065');
smo75065.setStyle({ fillStyle: "#115511" });
const smo750650acc = new VF.Accidental('b');
smo75065.addModifier(smo750650acc, 0);
smo75085v1ar.push(smo75065);
const smo75066 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo75066.setAttribute('id', 'smo75066');
smo75066.setStyle({ fillStyle: "#115511" });
smo75085v1ar.push(smo75066);
const smo75067 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo75067.setAttribute('id', 'smo75067');
smo75067.setStyle({ fillStyle: "#115511" });
smo75085v1ar.push(smo75067);
const smo75068 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo75068.setAttribute('id', 'smo75068');
smo75068.setStyle({ fillStyle: "#115511" });
smo75085v1ar.push(smo75068);
const smo75069 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo75069.setAttribute('id', 'smo75069');
smo75069.setStyle({ fillStyle: "#115511" });
smo75085v1ar.push(smo75069);
const smo75070 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo75070.setAttribute('id', 'smo75070');
smo75070.setStyle({ fillStyle: "#115511" });
smo75085v1ar.push(smo75070);
const smo75071 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75071.setAttribute('id', 'smo75071');
smo75071.setStyle({ fillStyle: "#115511" });
smo75085v1ar.push(smo75071);
smo75085v1.addTickables(smo75085v1ar)
fmtsmo7508552.joinVoices([smo75085v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78400 = smo70017.getStemDirection();
smo70017.setStemDirection(dirsmo78400);
smo70018.setStemDirection(dirsmo78400);
const smo78400 = new VF.Beam([smo70017,smo70018]);
const dirsmo78401 = smo70019.getStemDirection();
smo70019.setStemDirection(dirsmo78401);
smo70020.setStemDirection(dirsmo78401);
smo70021.setStemDirection(dirsmo78401);
const smo78401 = new VF.Beam([smo70019,smo70020,smo70021]);
const dirsmo78402 = smo70022.getStemDirection();
smo70022.setStemDirection(dirsmo78402);
smo70023.setStemDirection(dirsmo78402);
smo70024.setStemDirection(dirsmo78402);
smo70025.setStemDirection(dirsmo78402);
const smo78402 = new VF.Beam([smo70022,smo70023,smo70024,smo70025]);
const dirsmo78403 = smo70026.getStemDirection();
smo70026.setStemDirection(dirsmo78403);
smo70027.setStemDirection(dirsmo78403);
smo70028.setStemDirection(dirsmo78403);
smo70030.setStemDirection(dirsmo78403);
smo70031.setStemDirection(dirsmo78403);
const smo78403 = new VF.Beam([smo70026,smo70027,smo70028,smo70030,smo70031]);
const dirsmo78404 = smo70032.getStemDirection();
smo70032.setStemDirection(dirsmo78404);
smo70033.setStemDirection(dirsmo78404);
smo70034.setStemDirection(dirsmo78404);
smo70035.setStemDirection(dirsmo78404);
const smo78404 = new VF.Beam([smo70032,smo70033,smo70034,smo70035]);
const dirsmo78405 = smo70036.getStemDirection();
smo70036.setStemDirection(dirsmo78405);
smo70037.setStemDirection(dirsmo78405);
smo70038.setStemDirection(dirsmo78405);
smo70039.setStemDirection(dirsmo78405);
const smo78405 = new VF.Beam([smo70036,smo70037,smo70038,smo70039]);
const dirsmo78408 = smo75052.getStemDirection();
smo75052.setStemDirection(dirsmo78408);
smo75053.setStemDirection(dirsmo78408);
const smo78408 = new VF.Beam([smo75052,smo75053]);
const dirsmo78409 = smo75054.getStemDirection();
smo75054.setStemDirection(dirsmo78409);
smo75055.setStemDirection(dirsmo78409);
smo75056.setStemDirection(dirsmo78409);
smo75057.setStemDirection(dirsmo78409);
const smo78409 = new VF.Beam([smo75054,smo75055,smo75056,smo75057]);
const dirsmo78410 = smo75061.getStemDirection();
smo75061.setStemDirection(dirsmo78410);
smo75062.setStemDirection(dirsmo78410);
smo75063.setStemDirection(dirsmo78410);
smo75064.setStemDirection(dirsmo78410);
smo75065.setStemDirection(dirsmo78410);
const smo78410 = new VF.Beam([smo75061,smo75062,smo75063,smo75064,smo75065]);
const dirsmo78411 = smo75066.getStemDirection();
smo75066.setStemDirection(dirsmo78411);
smo75067.setStemDirection(dirsmo78411);
const smo78411 = new VF.Beam([smo75066,smo75067]);
const dirsmo78412 = smo75068.getStemDirection();
smo75068.setStemDirection(dirsmo78412);
smo75069.setStemDirection(dirsmo78412);
smo75070.setStemDirection(dirsmo78412);
smo75071.setStemDirection(dirsmo78412);
const smo78412 = new VF.Beam([smo75068,smo75069,smo75070,smo75071]);
 
// formatting measures in staff group smo67190
fmtsmo7005352.format([smo70053v0,smo70053v1,smo75085v0,smo75085v1], 585);
const stavesmo70053 = new VF.Stave(1209, 662, 599);
stavesmo70053.setAttribute('id', 'stavesmo70053');
stavesmo70053.setBegBarType(VF.Barline.type.NONE);
stavesmo70053.setContext(context);
stavesmo70053.draw();
smo70053v0.draw(context, stavesmo70053);
smo70053v1.draw(context, stavesmo70053);
smo78400.setContext(context);
smo78400.draw();
smo78401.setContext(context);
smo78401.draw();
smo78402.setContext(context);
smo78402.draw();
smo78403.setContext(context);
smo78403.draw();
smo78404.setContext(context);
smo78404.draw();
smo78405.setContext(context);
smo78405.draw();
const stavesmo75085 = new VF.Stave(1209, 801, 599);
stavesmo75085.setAttribute('id', 'stavesmo75085');
stavesmo75085.setBegBarType(VF.Barline.type.NONE);
stavesmo75085.setContext(context);
stavesmo75085.draw();
smo75085v0.draw(context, stavesmo75085);
smo75085v1.draw(context, stavesmo75085);
smo78408.setContext(context);
smo78408.draw();
smo78409.setContext(context);
smo78409.draw();
smo78410.setContext(context);
smo78410.draw();
smo78411.setContext(context);
smo78411.draw();
smo78412.setContext(context);
smo78412.draw();
const rightsmo67190stavesmo700531 = new VF.StaveConnector(stavesmo70053, stavesmo75085).setType(0);
rightsmo67190stavesmo700531.setContext(context).draw();
const fmtsmo7008553 = new VF.Formatter();
//
// voices and notes for stave 0 53
const smo70085v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70085v0ar = [];
const smo70054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo70054.setAttribute('id', 'smo70054');
smo70085v0ar.push(smo70054);
const smo70055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo70055.setAttribute('id', 'smo70055');
const smo700550acc = new VF.Accidental('#');
smo70055.addModifier(smo700550acc, 0);
smo70085v0ar.push(smo70055);
const smo70056 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo70056.setAttribute('id', 'smo70056');
smo70085v0ar.push(smo70056);
const smo70057 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo70057.setAttribute('id', 'smo70057');
smo70085v0ar.push(smo70057);
const smo70058 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo70058.setAttribute('id', 'smo70058');
smo70058.addModifier(new VF.Dot(), 0);
smo70085v0ar.push(smo70058);
const smo70059 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo70059.setAttribute('id', 'smo70059');
smo70085v0ar.push(smo70059);
const smo70060 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo70060.setAttribute('id', 'smo70060');
smo70085v0ar.push(smo70060);
const smo70061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/5/r"]}'))
smo70061.setAttribute('id', 'smo70061');
smo70085v0ar.push(smo70061);
const smo70062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/5/r"]}'))
smo70062.setAttribute('id', 'smo70062');
smo70085v0ar.push(smo70062);
smo70085v0.addTickables(smo70085v0ar)
fmtsmo7008553.joinVoices([smo70085v0]);
const smo70085v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70085v1ar = [];
const smo70063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo70063.setAttribute('id', 'smo70063');
smo70063.setStyle({ fillStyle: "#115511" });
smo70085v1ar.push(smo70063);
const smo70064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
smo70064.setAttribute('id', 'smo70064');
smo70064.setStyle({ fillStyle: "#115511" });
smo70085v1ar.push(smo70064);
const smo70065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
smo70065.setAttribute('id', 'smo70065');
smo70065.setStyle({ fillStyle: "#115511" });
smo70085v1ar.push(smo70065);
const smo70066 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo70066.setAttribute('id', 'smo70066');
smo70066.setStyle({ fillStyle: "#115511" });
smo70085v1ar.push(smo70066);
const smo70067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo70067.setAttribute('id', 'smo70067');
smo70067.setStyle({ fillStyle: "#115511" });
const smo700670acc = new VF.Accidental('#');
smo70067.addModifier(smo700670acc, 0);
smo70085v1ar.push(smo70067);
const smo70068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70068.setAttribute('id', 'smo70068');
smo70068.setStyle({ fillStyle: "#115511" });
smo70085v1ar.push(smo70068);
const smo70069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo70069.setAttribute('id', 'smo70069');
smo70069.setStyle({ fillStyle: "#115511" });
smo70069.addModifier(new VF.Dot(), 0);
smo70085v1ar.push(smo70069);
const smo70070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo70070.setAttribute('id', 'smo70070');
smo70070.setStyle({ fillStyle: "#115511" });
smo70085v1ar.push(smo70070);
const smo70071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo70071.setAttribute('id', 'smo70071');
smo70071.setStyle({ fillStyle: "#115511" });
smo70085v1ar.push(smo70071);
smo70085v1.addTickables(smo70085v1ar)
fmtsmo7008553.joinVoices([smo70085v1]);
const fmtsmo7511553 = new VF.Formatter();
//
// voices and notes for stave 1 53
const smo75115v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75115v0ar = [];
const smo75086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo75086.setAttribute('id', 'smo75086');
smo75115v0ar.push(smo75086);
const smo75087 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo75087.setAttribute('id', 'smo75087');
smo75115v0ar.push(smo75087);
const smo75088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo75088.setAttribute('id', 'smo75088');
smo75115v0ar.push(smo75088);
const smo75089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo75089.setAttribute('id', 'smo75089');
const smo750890acc = new VF.Accidental('#');
smo75089.addModifier(smo750890acc, 0);
smo75115v0ar.push(smo75089);
const smo75090 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo75090.setAttribute('id', 'smo75090');
smo75090.addModifier(new VF.Dot(), 0);
smo75115v0ar.push(smo75090);
const smo75091 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo75091.setAttribute('id', 'smo75091');
smo75115v0ar.push(smo75091);
const smo75092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo75092.setAttribute('id', 'smo75092');
smo75115v0ar.push(smo75092);
const smo75093 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo75093.setAttribute('id', 'smo75093');
const smo750930acc = new VF.Accidental('n');
smo75093.addModifier(smo750930acc, 0);
smo75115v0ar.push(smo75093);
const smo75094 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo75094.setAttribute('id', 'smo75094');
const smo750940acc = new VF.Accidental('#');
smo75094.addModifier(smo750940acc, 0);
smo75115v0ar.push(smo75094);
smo75115v0.addTickables(smo75115v0ar)
fmtsmo7511553.joinVoices([smo75115v0]);
const smo75115v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75115v1ar = [];
const smo75095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo75095.setAttribute('id', 'smo75095');
smo75095.setStyle({ fillStyle: "#115511" });
smo75115v1ar.push(smo75095);
const smo75096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo75096.setAttribute('id', 'smo75096');
smo75096.setStyle({ fillStyle: "#115511" });
smo75115v1ar.push(smo75096);
const smo75097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo75097.setAttribute('id', 'smo75097');
smo75097.setStyle({ fillStyle: "#115511" });
smo75115v1ar.push(smo75097);
const smo75098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo75098.setAttribute('id', 'smo75098');
smo75098.setStyle({ fillStyle: "#115511" });
smo75115v1ar.push(smo75098);
const smo75099 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75099.setAttribute('id', 'smo75099');
smo75099.setStyle({ fillStyle: "#115511" });
smo75115v1ar.push(smo75099);
const smo75100 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo75100.setAttribute('id', 'smo75100');
smo75100.setStyle({ fillStyle: "#115511" });
smo75115v1ar.push(smo75100);
const smo75101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo75101.setAttribute('id', 'smo75101');
smo75101.setStyle({ fillStyle: "#115511" });
smo75115v1ar.push(smo75101);
smo75115v1.addTickables(smo75115v1ar)
fmtsmo7511553.joinVoices([smo75115v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78427 = smo70054.getStemDirection();
smo70054.setStemDirection(dirsmo78427);
smo70055.setStemDirection(dirsmo78427);
smo70056.setStemDirection(dirsmo78427);
smo70057.setStemDirection(dirsmo78427);
const smo78427 = new VF.Beam([smo70054,smo70055,smo70056,smo70057]);
const dirsmo78428 = smo70058.getStemDirection();
smo70058.setStemDirection(dirsmo78428);
smo70059.setStemDirection(dirsmo78428);
const smo78428 = new VF.Beam([smo70058,smo70059]);
const dirsmo78429 = smo70067.getStemDirection();
smo70067.setStemDirection(dirsmo78429);
smo70068.setStemDirection(dirsmo78429);
const smo78429 = new VF.Beam([smo70067,smo70068]);
const dirsmo78430 = smo70069.getStemDirection();
smo70069.setStemDirection(dirsmo78430);
smo70070.setStemDirection(dirsmo78430);
smo70071.setStemDirection(dirsmo78430);
const smo78430 = new VF.Beam([smo70069,smo70070,smo70071]);
const dirsmo78433 = smo75087.getStemDirection();
smo75087.setStemDirection(dirsmo78433);
smo75088.setStemDirection(dirsmo78433);
smo75089.setStemDirection(dirsmo78433);
const smo78433 = new VF.Beam([smo75087,smo75088,smo75089]);
const dirsmo78434 = smo75090.getStemDirection();
smo75090.setStemDirection(dirsmo78434);
smo75091.setStemDirection(dirsmo78434);
smo75092.setStemDirection(dirsmo78434);
const smo78434 = new VF.Beam([smo75090,smo75091,smo75092]);
const dirsmo78435 = smo75093.getStemDirection();
smo75093.setStemDirection(dirsmo78435);
smo75094.setStemDirection(dirsmo78435);
const smo78435 = new VF.Beam([smo75093,smo75094]);
const dirsmo78436 = smo75095.getStemDirection();
smo75095.setStemDirection(dirsmo78436);
smo75096.setStemDirection(dirsmo78436);
smo75097.setStemDirection(dirsmo78436);
smo75098.setStemDirection(dirsmo78436);
smo75099.setStemDirection(dirsmo78436);
smo75100.setStemDirection(dirsmo78436);
const smo78436 = new VF.Beam([smo75095,smo75096,smo75097,smo75098,smo75099,smo75100]);
 
// formatting measures in staff group smo67190
fmtsmo7008553.format([smo70085v0,smo70085v1,smo75115v0,smo75115v1], 496);
const stavesmo70085 = new VF.Stave(90, 1010, 554);
stavesmo70085.setAttribute('id', 'stavesmo70085');
stavesmo70085.setBegBarType(1);
stavesmo70085.addClef('treble');
stavesmo70085.setContext(context);
stavesmo70085.draw();
smo70085v0.draw(context, stavesmo70085);
smo70085v1.draw(context, stavesmo70085);
smo78427.setContext(context);
smo78427.draw();
smo78428.setContext(context);
smo78428.draw();
smo78429.setContext(context);
smo78429.draw();
smo78430.setContext(context);
smo78430.draw();
const stavesmo75115 = new VF.Stave(90, 1107, 554);
stavesmo75115.setAttribute('id', 'stavesmo75115');
stavesmo75115.setBegBarType(1);
stavesmo75115.addClef('treble');
stavesmo75115.setContext(context);
stavesmo75115.draw();
smo75115v0.draw(context, stavesmo75115);
smo75115v1.draw(context, stavesmo75115);
smo78433.setContext(context);
smo78433.draw();
smo78434.setContext(context);
smo78434.draw();
smo78435.setContext(context);
smo78435.draw();
smo78436.setContext(context);
smo78436.draw();
const leftsmo67190stavesmo700851 = new VF.StaveConnector(stavesmo70085, stavesmo75115).setType(3);
leftsmo67190stavesmo700851.setContext(context).draw();
const fmtsmo7011254 = new VF.Formatter();
//
// voices and notes for stave 0 54
const smo70112v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70112v0ar = [];
const smo70086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo70086.setAttribute('id', 'smo70086');
smo70086.setStyle({ fillStyle: '#aaaaaa7f' });
smo70112v0ar.push(smo70086);
smo70112v0.addTickables(smo70112v0ar)
fmtsmo7011254.joinVoices([smo70112v0]);
const smo70112v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70112v1ar = [];
const smo70087 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70087.setAttribute('id', 'smo70087');
smo70087.setStyle({ fillStyle: "#115511" });
smo70112v1ar.push(smo70087);
const smo70088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo70088.setAttribute('id', 'smo70088');
smo70088.setStyle({ fillStyle: "#115511" });
smo70112v1ar.push(smo70088);
const smo70089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo70089.setAttribute('id', 'smo70089');
smo70089.setStyle({ fillStyle: "#115511" });
const smo700890acc = new VF.Accidental('#');
smo70089.addModifier(smo700890acc, 0);
smo70112v1ar.push(smo70089);
const smo70090 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo70090.setAttribute('id', 'smo70090');
smo70090.setStyle({ fillStyle: "#115511" });
smo70112v1ar.push(smo70090);
const smo70091 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo70091.setAttribute('id', 'smo70091');
smo70091.setStyle({ fillStyle: "#115511" });
smo70112v1ar.push(smo70091);
const smo70092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo70092.setAttribute('id', 'smo70092');
smo70092.setStyle({ fillStyle: "#115511" });
smo70112v1ar.push(smo70092);
const smo70093 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo70093.setAttribute('id', 'smo70093');
smo70093.setStyle({ fillStyle: "#115511" });
smo70112v1ar.push(smo70093);
const smo70094 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo70094.setAttribute('id', 'smo70094');
smo70094.setStyle({ fillStyle: "#115511" });
smo70112v1ar.push(smo70094);
const smo70095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70095.setAttribute('id', 'smo70095');
smo70095.setStyle({ fillStyle: "#115511" });
smo70112v1ar.push(smo70095);
const smo70096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo70096.setAttribute('id', 'smo70096');
smo70096.setStyle({ fillStyle: "#115511" });
smo70112v1ar.push(smo70096);
const smo70097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo70097.setAttribute('id', 'smo70097');
smo70097.setStyle({ fillStyle: "#115511" });
smo70112v1ar.push(smo70097);
const smo70098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo70098.setAttribute('id', 'smo70098');
smo70098.setStyle({ fillStyle: "#115511" });
smo70112v1ar.push(smo70098);
smo70112v1.addTickables(smo70112v1ar)
fmtsmo7011254.joinVoices([smo70112v1]);
const fmtsmo7514854 = new VF.Formatter();
//
// voices and notes for stave 1 54
const smo75148v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75148v0ar = [];
const smo75116 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo75116.setAttribute('id', 'smo75116');
smo75148v0ar.push(smo75116);
const smo75117 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo75117.setAttribute('id', 'smo75117');
smo75148v0ar.push(smo75117);
const smo75118 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo75118.setAttribute('id', 'smo75118');
smo75148v0ar.push(smo75118);
const smo75119 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo75119.setAttribute('id', 'smo75119');
smo75148v0ar.push(smo75119);
const smo75120 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
smo75120.setAttribute('id', 'smo75120');
smo75148v0ar.push(smo75120);
const smo75121 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo75121.setAttribute('id', 'smo75121');
smo75148v0ar.push(smo75121);
const smo75122 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo75122.setAttribute('id', 'smo75122');
smo75148v0ar.push(smo75122);
const smo75123 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/2/n"]}'))
smo75123.setAttribute('id', 'smo75123');
const smo751230acc = new VF.Accidental('#');
smo75123.addModifier(smo751230acc, 0);
smo75148v0ar.push(smo75123);
const smo75124 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/2/n"]}'))
smo75124.setAttribute('id', 'smo75124');
smo75148v0ar.push(smo75124);
const smo75125 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo75125.setAttribute('id', 'smo75125');
smo75148v0ar.push(smo75125);
const smo75126 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo75126.setAttribute('id', 'smo75126');
const smo751260acc = new VF.Accidental('#');
smo75126.addModifier(smo751260acc, 0);
smo75148v0ar.push(smo75126);
const smo75127 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75127.setAttribute('id', 'smo75127');
smo75148v0ar.push(smo75127);
smo75148v0.addTickables(smo75148v0ar)
fmtsmo7514854.joinVoices([smo75148v0]);
const smo75148v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75148v1ar = [];
const smo75128 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo75128.setAttribute('id', 'smo75128');
smo75128.setStyle({ fillStyle: "#115511" });
smo75148v1ar.push(smo75128);
const smo75129 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo75129.setAttribute('id', 'smo75129');
smo75129.setStyle({ fillStyle: "#115511" });
smo75148v1ar.push(smo75129);
const smo75130 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo75130.setAttribute('id', 'smo75130');
smo75130.setStyle({ fillStyle: "#115511" });
smo75148v1ar.push(smo75130);
const smo75131 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo75131.setAttribute('id', 'smo75131');
smo75131.setStyle({ fillStyle: "#115511" });
const smo751310acc = new VF.Accidental('#');
smo75131.addModifier(smo751310acc, 0);
smo75148v1ar.push(smo75131);
const smo75132 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo75132.setAttribute('id', 'smo75132');
smo75132.setStyle({ fillStyle: "#115511" });
smo75148v1ar.push(smo75132);
const smo75133 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo75133.setAttribute('id', 'smo75133');
smo75133.setStyle({ fillStyle: "#115511" });
smo75148v1ar.push(smo75133);
const smo75134 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo75134.setAttribute('id', 'smo75134');
smo75134.setStyle({ fillStyle: "#115511" });
smo75148v1ar.push(smo75134);
smo75148v1.addTickables(smo75148v1ar)
fmtsmo7514854.joinVoices([smo75148v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78439 = smo70087.getStemDirection();
smo70087.setStemDirection(dirsmo78439);
smo70088.setStemDirection(dirsmo78439);
smo70089.setStemDirection(dirsmo78439);
smo70090.setStemDirection(dirsmo78439);
const smo78439 = new VF.Beam([smo70087,smo70088,smo70089,smo70090]);
const dirsmo78440 = smo70091.getStemDirection();
smo70091.setStemDirection(dirsmo78440);
smo70092.setStemDirection(dirsmo78440);
smo70093.setStemDirection(dirsmo78440);
smo70094.setStemDirection(dirsmo78440);
const smo78440 = new VF.Beam([smo70091,smo70092,smo70093,smo70094]);
const dirsmo78441 = smo70095.getStemDirection();
smo70095.setStemDirection(dirsmo78441);
smo70096.setStemDirection(dirsmo78441);
smo70097.setStemDirection(dirsmo78441);
smo70098.setStemDirection(dirsmo78441);
const smo78441 = new VF.Beam([smo70095,smo70096,smo70097,smo70098]);
const dirsmo78444 = smo75116.getStemDirection();
smo75116.setStemDirection(dirsmo78444);
smo75117.setStemDirection(dirsmo78444);
smo75118.setStemDirection(dirsmo78444);
smo75119.setStemDirection(dirsmo78444);
const smo78444 = new VF.Beam([smo75116,smo75117,smo75118,smo75119]);
const dirsmo78445 = smo75120.getStemDirection();
smo75120.setStemDirection(dirsmo78445);
smo75121.setStemDirection(dirsmo78445);
smo75122.setStemDirection(dirsmo78445);
smo75123.setStemDirection(dirsmo78445);
const smo78445 = new VF.Beam([smo75120,smo75121,smo75122,smo75123]);
const dirsmo78446 = smo75124.getStemDirection();
smo75124.setStemDirection(dirsmo78446);
smo75125.setStemDirection(dirsmo78446);
smo75126.setStemDirection(dirsmo78446);
smo75127.setStemDirection(dirsmo78446);
const smo78446 = new VF.Beam([smo75124,smo75125,smo75126,smo75127]);
const dirsmo78447 = smo75128.getStemDirection();
smo75128.setStemDirection(dirsmo78447);
smo75129.setStemDirection(dirsmo78447);
const smo78447 = new VF.Beam([smo75128,smo75129]);
const dirsmo78448 = smo75130.getStemDirection();
smo75130.setStemDirection(dirsmo78448);
smo75131.setStemDirection(dirsmo78448);
smo75132.setStemDirection(dirsmo78448);
smo75133.setStemDirection(dirsmo78448);
const smo78448 = new VF.Beam([smo75130,smo75131,smo75132,smo75133]);
 
// formatting measures in staff group smo67190
fmtsmo7011254.format([smo70112v0,smo70112v1,smo75148v0,smo75148v1], 564);
const stavesmo70112 = new VF.Stave(644, 1010, 612);
stavesmo70112.setAttribute('id', 'stavesmo70112');
stavesmo70112.setBegBarType(VF.Barline.type.NONE);
stavesmo70112.setContext(context);
stavesmo70112.draw();
smo70112v0.draw(context, stavesmo70112);
smo70112v1.draw(context, stavesmo70112);
smo78439.setContext(context);
smo78439.draw();
smo78440.setContext(context);
smo78440.draw();
smo78441.setContext(context);
smo78441.draw();
const stavesmo75148 = new VF.Stave(644, 1107, 612);
stavesmo75148.setAttribute('id', 'stavesmo75148');
stavesmo75148.setBegBarType(VF.Barline.type.NONE);
stavesmo75148.addClef('bass');
stavesmo75148.setContext(context);
stavesmo75148.draw();
smo75148v0.draw(context, stavesmo75148);
smo75148v1.draw(context, stavesmo75148);
smo78444.setContext(context);
smo78444.draw();
smo78445.setContext(context);
smo78445.draw();
smo78446.setContext(context);
smo78446.draw();
smo78447.setContext(context);
smo78447.draw();
smo78448.setContext(context);
smo78448.draw();
const fmtsmo7014555 = new VF.Formatter();
//
// voices and notes for stave 0 55
const smo70145v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70145v0ar = [];
const smo70113 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo70113.setAttribute('id', 'smo70113');
smo70145v0ar.push(smo70113);
const smo70114 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo70114.setAttribute('id', 'smo70114');
smo70145v0ar.push(smo70114);
const smo70115 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo70115.setAttribute('id', 'smo70115');
smo70115.addModifier(new VF.Dot(), 0);
smo70145v0ar.push(smo70115);
const smo70116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo70116.setAttribute('id', 'smo70116');
smo70145v0ar.push(smo70116);
const smo70117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo70117.setAttribute('id', 'smo70117');
smo70145v0ar.push(smo70117);
const smo70118 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo70118.setAttribute('id', 'smo70118');
smo70145v0ar.push(smo70118);
const smo70119 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo70119.setAttribute('id', 'smo70119');
smo70145v0ar.push(smo70119);
const smo70120 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo70120.setAttribute('id', 'smo70120');
smo70145v0ar.push(smo70120);
const smo70121 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo70121.setAttribute('id', 'smo70121');
smo70145v0ar.push(smo70121);
smo70145v0.addTickables(smo70145v0ar)
fmtsmo7014555.joinVoices([smo70145v0]);
const smo70145v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70145v1ar = [];
const smo70122 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo70122.setAttribute('id', 'smo70122');
smo70122.setStyle({ fillStyle: "#115511" });
smo70145v1ar.push(smo70122);
const smo70123 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo70123.setAttribute('id', 'smo70123');
smo70123.setStyle({ fillStyle: "#115511" });
smo70145v1ar.push(smo70123);
const smo70124 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo70124.setAttribute('id', 'smo70124');
smo70124.setStyle({ fillStyle: "#115511" });
smo70145v1ar.push(smo70124);
const smo70125 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo70125.setAttribute('id', 'smo70125');
smo70125.setStyle({ fillStyle: "#115511" });
smo70145v1ar.push(smo70125);
const smo70126 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70126.setAttribute('id', 'smo70126');
smo70126.setStyle({ fillStyle: "#115511" });
smo70145v1ar.push(smo70126);
const smo70127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70127.setAttribute('id', 'smo70127');
smo70127.setStyle({ fillStyle: "#115511" });
smo70145v1ar.push(smo70127);
const smo70128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo70128.setAttribute('id', 'smo70128');
smo70128.setStyle({ fillStyle: "#115511" });
smo70145v1ar.push(smo70128);
const smo70129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70129.setAttribute('id', 'smo70129');
smo70129.setStyle({ fillStyle: "#115511" });
smo70145v1ar.push(smo70129);
const smo70130 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70130.setAttribute('id', 'smo70130');
smo70130.setStyle({ fillStyle: "#115511" });
smo70145v1ar.push(smo70130);
const smo70131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo70131.setAttribute('id', 'smo70131');
smo70131.setStyle({ fillStyle: "#115511" });
smo70145v1ar.push(smo70131);
smo70145v1.addTickables(smo70145v1ar)
fmtsmo7014555.joinVoices([smo70145v1]);
const fmtsmo7518055 = new VF.Formatter();
//
// voices and notes for stave 1 55
const smo75180v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75180v0ar = [];
const smo75149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo75149.setAttribute('id', 'smo75149');
smo75180v0ar.push(smo75149);
const smo75150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo75150.setAttribute('id', 'smo75150');
smo75180v0ar.push(smo75150);
const smo75151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo75151.setAttribute('id', 'smo75151');
smo75180v0ar.push(smo75151);
const smo75152 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo75152.setAttribute('id', 'smo75152');
smo75180v0ar.push(smo75152);
const smo75153 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo75153.setAttribute('id', 'smo75153');
smo75180v0ar.push(smo75153);
const smo75154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75154.setAttribute('id', 'smo75154');
smo75180v0ar.push(smo75154);
const smo75155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo75155.setAttribute('id', 'smo75155');
smo75180v0ar.push(smo75155);
const smo75156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo75156.setAttribute('id', 'smo75156');
smo75180v0ar.push(smo75156);
const smo75157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75157.setAttribute('id', 'smo75157');
smo75180v0ar.push(smo75157);
const smo75158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo75158.setAttribute('id', 'smo75158');
smo75180v0ar.push(smo75158);
const smo75159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo75159.setAttribute('id', 'smo75159');
smo75180v0ar.push(smo75159);
const smo75160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo75160.setAttribute('id', 'smo75160');
smo75180v0ar.push(smo75160);
smo75180v0.addTickables(smo75180v0ar)
fmtsmo7518055.joinVoices([smo75180v0]);
const smo75180v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75180v1ar = [];
const smo75161 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75161.setAttribute('id', 'smo75161');
smo75161.setStyle({ fillStyle: "#115511" });
smo75180v1ar.push(smo75161);
const smo75162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo75162.setAttribute('id', 'smo75162');
smo75162.setStyle({ fillStyle: "#115511" });
smo75180v1ar.push(smo75162);
const smo75163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75163.setAttribute('id', 'smo75163');
smo75163.setStyle({ fillStyle: "#115511" });
smo75180v1ar.push(smo75163);
const smo75164 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo75164.setAttribute('id', 'smo75164');
smo75164.setStyle({ fillStyle: "#115511" });
const smo751640acc = new VF.Accidental('#');
smo75164.addModifier(smo751640acc, 0);
smo75180v1ar.push(smo75164);
const smo75165 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo75165.setAttribute('id', 'smo75165');
smo75165.setStyle({ fillStyle: "#115511" });
smo75180v1ar.push(smo75165);
const smo75166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75166.setAttribute('id', 'smo75166');
smo75166.setStyle({ fillStyle: "#115511" });
smo75180v1ar.push(smo75166);
smo75180v1.addTickables(smo75180v1ar)
fmtsmo7518055.joinVoices([smo75180v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78451 = smo70113.getStemDirection();
smo70113.setStemDirection(dirsmo78451);
smo70114.setStemDirection(dirsmo78451);
const smo78451 = new VF.Beam([smo70113,smo70114]);
const dirsmo78452 = smo70115.getStemDirection();
smo70115.setStemDirection(dirsmo78452);
smo70116.setStemDirection(dirsmo78452);
smo70117.setStemDirection(dirsmo78452);
const smo78452 = new VF.Beam([smo70115,smo70116,smo70117]);
const dirsmo78453 = smo70118.getStemDirection();
smo70118.setStemDirection(dirsmo78453);
smo70119.setStemDirection(dirsmo78453);
smo70120.setStemDirection(dirsmo78453);
smo70121.setStemDirection(dirsmo78453);
const smo78453 = new VF.Beam([smo70118,smo70119,smo70120,smo70121]);
const dirsmo78454 = smo70124.getStemDirection();
smo70124.setStemDirection(dirsmo78454);
smo70125.setStemDirection(dirsmo78454);
smo70126.setStemDirection(dirsmo78454);
smo70127.setStemDirection(dirsmo78454);
const smo78454 = new VF.Beam([smo70124,smo70125,smo70126,smo70127]);
const dirsmo78455 = smo70128.getStemDirection();
smo70128.setStemDirection(dirsmo78455);
smo70129.setStemDirection(dirsmo78455);
smo70130.setStemDirection(dirsmo78455);
smo70131.setStemDirection(dirsmo78455);
const smo78455 = new VF.Beam([smo70128,smo70129,smo70130,smo70131]);
const dirsmo78458 = smo75149.getStemDirection();
smo75149.setStemDirection(dirsmo78458);
smo75150.setStemDirection(dirsmo78458);
smo75151.setStemDirection(dirsmo78458);
smo75152.setStemDirection(dirsmo78458);
const smo78458 = new VF.Beam([smo75149,smo75150,smo75151,smo75152]);
const dirsmo78459 = smo75153.getStemDirection();
smo75153.setStemDirection(dirsmo78459);
smo75154.setStemDirection(dirsmo78459);
smo75155.setStemDirection(dirsmo78459);
smo75156.setStemDirection(dirsmo78459);
const smo78459 = new VF.Beam([smo75153,smo75154,smo75155,smo75156]);
const dirsmo78460 = smo75157.getStemDirection();
smo75157.setStemDirection(dirsmo78460);
smo75158.setStemDirection(dirsmo78460);
smo75159.setStemDirection(dirsmo78460);
smo75160.setStemDirection(dirsmo78460);
const smo78460 = new VF.Beam([smo75157,smo75158,smo75159,smo75160]);
const dirsmo78461 = smo75161.getStemDirection();
smo75161.setStemDirection(dirsmo78461);
smo75162.setStemDirection(dirsmo78461);
smo75163.setStemDirection(dirsmo78461);
const smo78461 = new VF.Beam([smo75161,smo75162,smo75163]);
const dirsmo78462 = smo75164.getStemDirection();
smo75164.setStemDirection(dirsmo78462);
smo75165.setStemDirection(dirsmo78462);
const smo78462 = new VF.Beam([smo75164,smo75165]);
 
// formatting measures in staff group smo67190
fmtsmo7014555.format([smo70145v0,smo70145v1,smo75180v0,smo75180v1], 504);
const stavesmo70145 = new VF.Stave(1256, 1010, 552);
stavesmo70145.setAttribute('id', 'stavesmo70145');
stavesmo70145.setBegBarType(VF.Barline.type.NONE);
stavesmo70145.setContext(context);
stavesmo70145.draw();
smo70145v0.draw(context, stavesmo70145);
smo70145v1.draw(context, stavesmo70145);
smo78451.setContext(context);
smo78451.draw();
smo78452.setContext(context);
smo78452.draw();
smo78453.setContext(context);
smo78453.draw();
smo78454.setContext(context);
smo78454.draw();
smo78455.setContext(context);
smo78455.draw();
const stavesmo75180 = new VF.Stave(1256, 1107, 552);
stavesmo75180.setAttribute('id', 'stavesmo75180');
stavesmo75180.setBegBarType(VF.Barline.type.NONE);
stavesmo75180.addClef('treble');
stavesmo75180.setContext(context);
stavesmo75180.draw();
smo75180v0.draw(context, stavesmo75180);
smo75180v1.draw(context, stavesmo75180);
smo78458.setContext(context);
smo78458.draw();
smo78459.setContext(context);
smo78459.draw();
smo78460.setContext(context);
smo78460.draw();
smo78461.setContext(context);
smo78461.draw();
smo78462.setContext(context);
smo78462.draw();
const rightsmo67190stavesmo701451 = new VF.StaveConnector(stavesmo70145, stavesmo75180).setType(0);
rightsmo67190stavesmo701451.setContext(context).draw();
const fmtsmo7018256 = new VF.Formatter();
//
// voices and notes for stave 0 56
const smo70182v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70182v0ar = [];
const smo70146 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo70146.setAttribute('id', 'smo70146');
smo70182v0ar.push(smo70146);
const smo70147 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo70147.setAttribute('id', 'smo70147');
smo70182v0ar.push(smo70147);
const smo70148 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo70148.setAttribute('id', 'smo70148');
smo70182v0ar.push(smo70148);
const smo70149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo70149.setAttribute('id', 'smo70149');
smo70182v0ar.push(smo70149);
const smo70150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo70150.setAttribute('id', 'smo70150');
smo70182v0ar.push(smo70150);
const smo70151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo70151.setAttribute('id', 'smo70151');
smo70182v0ar.push(smo70151);
const smo70152 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo70152.setAttribute('id', 'smo70152');
smo70182v0ar.push(smo70152);
const smo70153 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo70153.setAttribute('id', 'smo70153');
smo70182v0ar.push(smo70153);
const smo70154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo70154.setAttribute('id', 'smo70154');
smo70182v0ar.push(smo70154);
const smo70155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo70155.setAttribute('id', 'smo70155');
smo70182v0ar.push(smo70155);
const smo70156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo70156.setAttribute('id', 'smo70156');
smo70182v0ar.push(smo70156);
const smo70157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo70157.setAttribute('id', 'smo70157');
smo70182v0ar.push(smo70157);
const smo70158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo70158.setAttribute('id', 'smo70158');
smo70182v0ar.push(smo70158);
const smo70159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo70159.setAttribute('id', 'smo70159');
smo70182v0ar.push(smo70159);
const smo70160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo70160.setAttribute('id', 'smo70160');
smo70182v0ar.push(smo70160);
const smo70161 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo70161.setAttribute('id', 'smo70161');
smo70182v0ar.push(smo70161);
smo70182v0.addTickables(smo70182v0ar)
fmtsmo7018256.joinVoices([smo70182v0]);
const smo70182v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70182v1ar = [];
const smo70162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70162.setAttribute('id', 'smo70162');
smo70162.setStyle({ fillStyle: "#115511" });
smo70182v1ar.push(smo70162);
const smo70163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70163.setAttribute('id', 'smo70163');
smo70163.setStyle({ fillStyle: "#115511" });
smo70182v1ar.push(smo70163);
const smo70164 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo70164.setAttribute('id', 'smo70164');
smo70164.setStyle({ fillStyle: "#115511" });
smo70182v1ar.push(smo70164);
const smo70165 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/4/n"]}'))
smo70165.setAttribute('id', 'smo70165');
smo70165.setStyle({ fillStyle: "#115511" });
const smo701650acc = new VF.Accidental('b');
smo70165.addModifier(smo701650acc, 0);
smo70182v1ar.push(smo70165);
const smo70166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo70166.setAttribute('id', 'smo70166');
smo70166.setStyle({ fillStyle: "#115511" });
smo70182v1ar.push(smo70166);
const smo70167 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo70167.setAttribute('id', 'smo70167');
smo70167.setStyle({ fillStyle: "#115511" });
smo70182v1ar.push(smo70167);
const smo70168 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70168.setAttribute('id', 'smo70168');
smo70168.setStyle({ fillStyle: "#115511" });
smo70182v1ar.push(smo70168);
smo70182v1.addTickables(smo70182v1ar)
fmtsmo7018256.joinVoices([smo70182v1]);
const fmtsmo7520956 = new VF.Formatter();
//
// voices and notes for stave 1 56
const smo75209v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75209v0ar = [];
const smo75181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo75181.setAttribute('id', 'smo75181');
smo75181.addModifier(new VF.Dot(), 0);
smo75209v0ar.push(smo75181);
const smo75182 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo75182.setAttribute('id', 'smo75182');
smo75209v0ar.push(smo75182);
const smo75183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo75183.setAttribute('id', 'smo75183');
smo75209v0ar.push(smo75183);
const smo75184 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo75184.setAttribute('id', 'smo75184');
smo75209v0ar.push(smo75184);
const smo75185 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo75185.setAttribute('id', 'smo75185');
smo75209v0ar.push(smo75185);
const smo75186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo75186.setAttribute('id', 'smo75186');
smo75209v0ar.push(smo75186);
const smo75187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo75187.setAttribute('id', 'smo75187');
smo75209v0ar.push(smo75187);
const smo75188 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo75188.setAttribute('id', 'smo75188');
smo75209v0ar.push(smo75188);
const smo75189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo75189.setAttribute('id', 'smo75189');
smo75209v0ar.push(smo75189);
const smo75190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo75190.setAttribute('id', 'smo75190');
smo75209v0ar.push(smo75190);
const smo75191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo75191.setAttribute('id', 'smo75191');
smo75209v0ar.push(smo75191);
smo75209v0.addTickables(smo75209v0ar)
fmtsmo7520956.joinVoices([smo75209v0]);
const smo75209v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75209v1ar = [];
const smo75192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75192.setAttribute('id', 'smo75192');
smo75192.setStyle({ fillStyle: "#115511" });
smo75209v1ar.push(smo75192);
const smo75193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo75193.setAttribute('id', 'smo75193');
smo75193.setStyle({ fillStyle: "#115511" });
smo75209v1ar.push(smo75193);
const smo75194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo75194.setAttribute('id', 'smo75194');
smo75194.setStyle({ fillStyle: "#115511" });
smo75209v1ar.push(smo75194);
const smo75195 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo75195.setAttribute('id', 'smo75195');
smo75195.setStyle({ fillStyle: "#115511" });
smo75209v1ar.push(smo75195);
smo75209v1.addTickables(smo75209v1ar)
fmtsmo7520956.joinVoices([smo75209v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78480 = smo70146.getStemDirection();
smo70146.setStemDirection(dirsmo78480);
smo70147.setStemDirection(dirsmo78480);
smo70148.setStemDirection(dirsmo78480);
smo70149.setStemDirection(dirsmo78480);
const smo78480 = new VF.Beam([smo70146,smo70147,smo70148,smo70149]);
const dirsmo78481 = smo70150.getStemDirection();
smo70150.setStemDirection(dirsmo78481);
smo70151.setStemDirection(dirsmo78481);
smo70152.setStemDirection(dirsmo78481);
smo70153.setStemDirection(dirsmo78481);
const smo78481 = new VF.Beam([smo70150,smo70151,smo70152,smo70153]);
const dirsmo78482 = smo70154.getStemDirection();
smo70154.setStemDirection(dirsmo78482);
smo70155.setStemDirection(dirsmo78482);
smo70156.setStemDirection(dirsmo78482);
smo70157.setStemDirection(dirsmo78482);
const smo78482 = new VF.Beam([smo70154,smo70155,smo70156,smo70157]);
const dirsmo78483 = smo70158.getStemDirection();
smo70158.setStemDirection(dirsmo78483);
smo70159.setStemDirection(dirsmo78483);
smo70160.setStemDirection(dirsmo78483);
smo70161.setStemDirection(dirsmo78483);
const smo78483 = new VF.Beam([smo70158,smo70159,smo70160,smo70161]);
const dirsmo78484 = smo70163.getStemDirection();
smo70163.setStemDirection(dirsmo78484);
smo70164.setStemDirection(dirsmo78484);
smo70165.setStemDirection(dirsmo78484);
const smo78484 = new VF.Beam([smo70163,smo70164,smo70165]);
const dirsmo78485 = smo70167.getStemDirection();
smo70167.setStemDirection(dirsmo78485);
smo70168.setStemDirection(dirsmo78485);
const smo78485 = new VF.Beam([smo70167,smo70168]);
const dirsmo78488 = smo75181.getStemDirection();
smo75181.setStemDirection(dirsmo78488);
smo75182.setStemDirection(dirsmo78488);
smo75183.setStemDirection(dirsmo78488);
const smo78488 = new VF.Beam([smo75181,smo75182,smo75183]);
const dirsmo78489 = smo75184.getStemDirection();
smo75184.setStemDirection(dirsmo78489);
smo75185.setStemDirection(dirsmo78489);
const smo78489 = new VF.Beam([smo75184,smo75185]);
const dirsmo78490 = smo75186.getStemDirection();
smo75186.setStemDirection(dirsmo78490);
smo75187.setStemDirection(dirsmo78490);
const smo78490 = new VF.Beam([smo75186,smo75187]);
const dirsmo78491 = smo75188.getStemDirection();
smo75188.setStemDirection(dirsmo78491);
smo75189.setStemDirection(dirsmo78491);
smo75190.setStemDirection(dirsmo78491);
smo75191.setStemDirection(dirsmo78491);
const smo78491 = new VF.Beam([smo75188,smo75189,smo75190,smo75191]);
const dirsmo78492 = smo75194.getStemDirection();
smo75194.setStemDirection(dirsmo78492);
smo75195.setStemDirection(dirsmo78492);
const smo78492 = new VF.Beam([smo75194,smo75195]);
 
// formatting measures in staff group smo67190
fmtsmo7018256.format([smo70182v0,smo70182v1,smo75209v0,smo75209v1], 435);
const stavesmo70182 = new VF.Stave(90, 1331, 493);
stavesmo70182.setAttribute('id', 'stavesmo70182');
stavesmo70182.setBegBarType(1);
stavesmo70182.addClef('treble');
stavesmo70182.setContext(context);
stavesmo70182.draw();
smo70182v0.draw(context, stavesmo70182);
smo70182v1.draw(context, stavesmo70182);
smo78480.setContext(context);
smo78480.draw();
smo78481.setContext(context);
smo78481.draw();
smo78482.setContext(context);
smo78482.draw();
smo78483.setContext(context);
smo78483.draw();
smo78484.setContext(context);
smo78484.draw();
smo78485.setContext(context);
smo78485.draw();
const stavesmo75209 = new VF.Stave(90, 1450, 493);
stavesmo75209.setAttribute('id', 'stavesmo75209');
stavesmo75209.setBegBarType(1);
stavesmo75209.addClef('treble');
stavesmo75209.setContext(context);
stavesmo75209.draw();
smo75209v0.draw(context, stavesmo75209);
smo75209v1.draw(context, stavesmo75209);
smo78488.setContext(context);
smo78488.draw();
smo78489.setContext(context);
smo78489.draw();
smo78490.setContext(context);
smo78490.draw();
smo78491.setContext(context);
smo78491.draw();
smo78492.setContext(context);
smo78492.draw();
const leftsmo67190stavesmo701821 = new VF.StaveConnector(stavesmo70182, stavesmo75209).setType(3);
leftsmo67190stavesmo701821.setContext(context).draw();
const fmtsmo7020757 = new VF.Formatter();
//
// voices and notes for stave 0 57
const smo70207v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70207v0ar = [];
const smo70183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo70183.setAttribute('id', 'smo70183');
smo70207v0ar.push(smo70183);
const smo70184 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo70184.setAttribute('id', 'smo70184');
smo70207v0ar.push(smo70184);
const smo70185 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo70185.setAttribute('id', 'smo70185');
smo70207v0ar.push(smo70185);
const smo70186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70186.setAttribute('id', 'smo70186');
smo70207v0ar.push(smo70186);
const smo70187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo70187.setAttribute('id', 'smo70187');
smo70207v0ar.push(smo70187);
const smo70188 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo70188.setAttribute('id', 'smo70188');
smo70207v0ar.push(smo70188);
smo70207v0.addTickables(smo70207v0ar)
fmtsmo7020757.joinVoices([smo70207v0]);
const smo70207v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70207v1ar = [];
const smo70189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70189.setAttribute('id', 'smo70189');
smo70189.setStyle({ fillStyle: "#115511" });
smo70189.addModifier(new VF.Dot(), 0);
smo70207v1ar.push(smo70189);
const smo70190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70190.setAttribute('id', 'smo70190');
smo70190.setStyle({ fillStyle: "#115511" });
smo70207v1ar.push(smo70190);
const smo70191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo70191.setAttribute('id', 'smo70191');
smo70191.setStyle({ fillStyle: "#115511" });
smo70207v1ar.push(smo70191);
const smo70192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo70192.setAttribute('id', 'smo70192');
smo70192.setStyle({ fillStyle: "#115511" });
smo70207v1ar.push(smo70192);
const smo70193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo70193.setAttribute('id', 'smo70193');
smo70193.setStyle({ fillStyle: "#115511" });
smo70207v1ar.push(smo70193);
smo70207v1.addTickables(smo70207v1ar)
fmtsmo7020757.joinVoices([smo70207v1]);
const fmtsmo7524357 = new VF.Formatter();
//
// voices and notes for stave 1 57
const smo75243v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75243v0ar = [];
const smo75210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo75210.setAttribute('id', 'smo75210');
smo75243v0ar.push(smo75210);
const smo75211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo75211.setAttribute('id', 'smo75211');
smo75243v0ar.push(smo75211);
const smo75212 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo75212.setAttribute('id', 'smo75212');
smo75243v0ar.push(smo75212);
const smo75213 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo75213.setAttribute('id', 'smo75213');
smo75243v0ar.push(smo75213);
const smo75214 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75214.setAttribute('id', 'smo75214');
smo75243v0ar.push(smo75214);
const smo75215 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75215.setAttribute('id', 'smo75215');
smo75243v0ar.push(smo75215);
smo75243v0.addTickables(smo75243v0ar)
fmtsmo7524357.joinVoices([smo75243v0]);
const smo75243v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75243v1ar = [];
const smo75216 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo75216.setAttribute('id', 'smo75216');
smo75216.setStyle({ fillStyle: "#115511" });
smo75243v1ar.push(smo75216);
const smo75217 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo75217.setAttribute('id', 'smo75217');
smo75217.setStyle({ fillStyle: "#115511" });
smo75243v1ar.push(smo75217);
const smo75218 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75218.setAttribute('id', 'smo75218');
smo75218.setStyle({ fillStyle: "#115511" });
smo75243v1ar.push(smo75218);
const smo75219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo75219.setAttribute('id', 'smo75219');
smo75219.setStyle({ fillStyle: "#115511" });
smo75243v1ar.push(smo75219);
const smo75220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo75220.setAttribute('id', 'smo75220');
smo75220.setStyle({ fillStyle: "#115511" });
smo75243v1ar.push(smo75220);
const smo75221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo75221.setAttribute('id', 'smo75221');
smo75221.setStyle({ fillStyle: "#115511" });
smo75243v1ar.push(smo75221);
const smo75222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo75222.setAttribute('id', 'smo75222');
smo75222.setStyle({ fillStyle: "#115511" });
smo75243v1ar.push(smo75222);
const smo75223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
smo75223.setAttribute('id', 'smo75223');
smo75223.setStyle({ fillStyle: "#115511" });
smo75243v1ar.push(smo75223);
const smo75224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo75224.setAttribute('id', 'smo75224');
smo75224.setStyle({ fillStyle: "#115511" });
smo75243v1ar.push(smo75224);
const smo75225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo75225.setAttribute('id', 'smo75225');
smo75225.setStyle({ fillStyle: "#115511" });
smo75243v1ar.push(smo75225);
const smo75226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo75226.setAttribute('id', 'smo75226');
smo75226.setStyle({ fillStyle: "#115511" });
smo75243v1ar.push(smo75226);
const smo75227 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo75227.setAttribute('id', 'smo75227');
smo75227.setStyle({ fillStyle: "#115511" });
smo75243v1ar.push(smo75227);
const smo75228 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75228.setAttribute('id', 'smo75228');
smo75228.setStyle({ fillStyle: "#115511" });
smo75243v1ar.push(smo75228);
const smo75229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo75229.setAttribute('id', 'smo75229');
smo75229.setStyle({ fillStyle: "#115511" });
smo75243v1ar.push(smo75229);
smo75243v1.addTickables(smo75243v1ar)
fmtsmo7524357.joinVoices([smo75243v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78495 = smo70184.getStemDirection();
smo70184.setStemDirection(dirsmo78495);
smo70185.setStemDirection(dirsmo78495);
const smo78495 = new VF.Beam([smo70184,smo70185]);
const dirsmo78496 = smo70191.getStemDirection();
smo70191.setStemDirection(dirsmo78496);
smo70192.setStemDirection(dirsmo78496);
const smo78496 = new VF.Beam([smo70191,smo70192]);
const dirsmo78499 = smo75211.getStemDirection();
smo75211.setStemDirection(dirsmo78499);
smo75212.setStemDirection(dirsmo78499);
const smo78499 = new VF.Beam([smo75211,smo75212]);
const dirsmo78500 = smo75213.getStemDirection();
smo75213.setStemDirection(dirsmo78500);
smo75214.setStemDirection(dirsmo78500);
const smo78500 = new VF.Beam([smo75213,smo75214]);
const dirsmo78501 = smo75216.getStemDirection();
smo75216.setStemDirection(dirsmo78501);
smo75217.setStemDirection(dirsmo78501);
smo75218.setStemDirection(dirsmo78501);
smo75219.setStemDirection(dirsmo78501);
const smo78501 = new VF.Beam([smo75216,smo75217,smo75218,smo75219]);
const dirsmo78502 = smo75220.getStemDirection();
smo75220.setStemDirection(dirsmo78502);
smo75221.setStemDirection(dirsmo78502);
smo75222.setStemDirection(dirsmo78502);
smo75223.setStemDirection(dirsmo78502);
const smo78502 = new VF.Beam([smo75220,smo75221,smo75222,smo75223]);
const dirsmo78503 = smo75224.getStemDirection();
smo75224.setStemDirection(dirsmo78503);
smo75225.setStemDirection(dirsmo78503);
smo75226.setStemDirection(dirsmo78503);
smo75227.setStemDirection(dirsmo78503);
const smo78503 = new VF.Beam([smo75224,smo75225,smo75226,smo75227]);
const dirsmo78504 = smo75228.getStemDirection();
smo75228.setStemDirection(dirsmo78504);
smo75229.setStemDirection(dirsmo78504);
const smo78504 = new VF.Beam([smo75228,smo75229]);
 
// formatting measures in staff group smo67190
fmtsmo7020757.format([smo70207v0,smo70207v1,smo75243v0,smo75243v1], 346);
const stavesmo70207 = new VF.Stave(583, 1331, 360);
stavesmo70207.setAttribute('id', 'stavesmo70207');
stavesmo70207.setBegBarType(VF.Barline.type.NONE);
stavesmo70207.setContext(context);
stavesmo70207.draw();
smo70207v0.draw(context, stavesmo70207);
smo70207v1.draw(context, stavesmo70207);
smo78495.setContext(context);
smo78495.draw();
smo78496.setContext(context);
smo78496.draw();
const stavesmo75243 = new VF.Stave(583, 1450, 360);
stavesmo75243.setAttribute('id', 'stavesmo75243');
stavesmo75243.setBegBarType(VF.Barline.type.NONE);
stavesmo75243.setContext(context);
stavesmo75243.draw();
smo75243v0.draw(context, stavesmo75243);
smo75243v1.draw(context, stavesmo75243);
smo78499.setContext(context);
smo78499.draw();
smo78500.setContext(context);
smo78500.draw();
smo78501.setContext(context);
smo78501.draw();
smo78502.setContext(context);
smo78502.draw();
smo78503.setContext(context);
smo78503.draw();
smo78504.setContext(context);
smo78504.draw();
const fmtsmo7023458 = new VF.Formatter();
//
// voices and notes for stave 0 58
const smo70234v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70234v0ar = [];
const smo70208 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo70208.setAttribute('id', 'smo70208');
smo70234v0ar.push(smo70208);
const smo70209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo70209.setAttribute('id', 'smo70209');
smo70234v0ar.push(smo70209);
const smo70210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/4/n"]}'))
smo70210.setAttribute('id', 'smo70210');
const smo702100acc = new VF.Accidental('b');
smo70210.addModifier(smo702100acc, 0);
smo70234v0ar.push(smo70210);
const smo70211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo70211.setAttribute('id', 'smo70211');
smo70234v0ar.push(smo70211);
const smo70212 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo70212.setAttribute('id', 'smo70212');
smo70234v0ar.push(smo70212);
const smo70213 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo70213.setAttribute('id', 'smo70213');
smo70234v0ar.push(smo70213);
smo70234v0.addTickables(smo70234v0ar)
fmtsmo7023458.joinVoices([smo70234v0]);
const smo70234v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70234v1ar = [];
const smo70214 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo70214.setAttribute('id', 'smo70214');
smo70214.setStyle({ fillStyle: "#115511" });
smo70234v1ar.push(smo70214);
const smo70215 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo70215.setAttribute('id', 'smo70215');
smo70215.setStyle({ fillStyle: "#115511" });
smo70234v1ar.push(smo70215);
const smo70216 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70216.setAttribute('id', 'smo70216');
smo70216.setStyle({ fillStyle: "#115511" });
smo70234v1ar.push(smo70216);
const smo70217 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70217.setAttribute('id', 'smo70217');
smo70217.setStyle({ fillStyle: "#115511" });
smo70234v1ar.push(smo70217);
const smo70218 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70218.setAttribute('id', 'smo70218');
smo70218.setStyle({ fillStyle: "#115511" });
smo70234v1ar.push(smo70218);
const smo70219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70219.setAttribute('id', 'smo70219');
smo70219.setStyle({ fillStyle: "#115511" });
smo70234v1ar.push(smo70219);
const smo70220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo70220.setAttribute('id', 'smo70220');
smo70220.setStyle({ fillStyle: "#115511" });
smo70234v1ar.push(smo70220);
smo70234v1.addTickables(smo70234v1ar)
fmtsmo7023458.joinVoices([smo70234v1]);
const fmtsmo7526758 = new VF.Formatter();
//
// voices and notes for stave 1 58
const smo75267v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75267v0ar = [];
const smo75244 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75244.setAttribute('id', 'smo75244');
smo75267v0ar.push(smo75244);
const smo75245 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo75245.setAttribute('id', 'smo75245');
smo75267v0ar.push(smo75245);
const smo75246 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo75246.setAttribute('id', 'smo75246');
smo75267v0ar.push(smo75246);
const smo75247 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo75247.setAttribute('id', 'smo75247');
smo75267v0ar.push(smo75247);
const smo75248 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo75248.setAttribute('id', 'smo75248');
smo75248.addModifier(new VF.Dot(), 0);
smo75267v0ar.push(smo75248);
const smo75249 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75249.setAttribute('id', 'smo75249');
smo75267v0ar.push(smo75249);
const smo75250 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo75250.setAttribute('id', 'smo75250');
smo75267v0ar.push(smo75250);
const smo75251 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo75251.setAttribute('id', 'smo75251');
smo75267v0ar.push(smo75251);
const smo75252 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo75252.setAttribute('id', 'smo75252');
smo75267v0ar.push(smo75252);
smo75267v0.addTickables(smo75267v0ar)
fmtsmo7526758.joinVoices([smo75267v0]);
const smo75267v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75267v1ar = [];
const smo75253 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo75253.setAttribute('id', 'smo75253');
smo75253.setStyle({ fillStyle: "#115511" });
smo75267v1ar.push(smo75253);
smo75267v1.addTickables(smo75267v1ar)
fmtsmo7526758.joinVoices([smo75267v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78507 = smo70209.getStemDirection();
smo70209.setStemDirection(dirsmo78507);
smo70210.setStemDirection(dirsmo78507);
const smo78507 = new VF.Beam([smo70209,smo70210]);
const dirsmo78508 = smo70217.getStemDirection();
smo70217.setStemDirection(dirsmo78508);
smo70218.setStemDirection(dirsmo78508);
const smo78508 = new VF.Beam([smo70217,smo70218]);
const dirsmo78509 = smo70219.getStemDirection();
smo70219.setStemDirection(dirsmo78509);
smo70220.setStemDirection(dirsmo78509);
const smo78509 = new VF.Beam([smo70219,smo70220]);
const dirsmo78512 = smo75244.getStemDirection();
smo75244.setStemDirection(dirsmo78512);
smo75245.setStemDirection(dirsmo78512);
smo75246.setStemDirection(dirsmo78512);
smo75247.setStemDirection(dirsmo78512);
const smo78512 = new VF.Beam([smo75244,smo75245,smo75246,smo75247]);
const dirsmo78513 = smo75248.getStemDirection();
smo75248.setStemDirection(dirsmo78513);
smo75249.setStemDirection(dirsmo78513);
smo75250.setStemDirection(dirsmo78513);
const smo78513 = new VF.Beam([smo75248,smo75249,smo75250]);
const dirsmo78514 = smo75251.getStemDirection();
smo75251.setStemDirection(dirsmo78514);
smo75252.setStemDirection(dirsmo78514);
const smo78514 = new VF.Beam([smo75251,smo75252]);
 
// formatting measures in staff group smo67190
fmtsmo7023458.format([smo70234v0,smo70234v1,smo75267v0,smo75267v1], 309);
const stavesmo70234 = new VF.Stave(943, 1331, 357);
stavesmo70234.setAttribute('id', 'stavesmo70234');
stavesmo70234.setBegBarType(VF.Barline.type.NONE);
stavesmo70234.setContext(context);
stavesmo70234.draw();
smo70234v0.draw(context, stavesmo70234);
smo70234v1.draw(context, stavesmo70234);
smo78507.setContext(context);
smo78507.draw();
smo78508.setContext(context);
smo78508.draw();
smo78509.setContext(context);
smo78509.draw();
const stavesmo75267 = new VF.Stave(943, 1450, 357);
stavesmo75267.setAttribute('id', 'stavesmo75267');
stavesmo75267.setBegBarType(VF.Barline.type.NONE);
stavesmo75267.addClef('bass');
stavesmo75267.setContext(context);
stavesmo75267.draw();
smo75267v0.draw(context, stavesmo75267);
smo75267v1.draw(context, stavesmo75267);
smo78512.setContext(context);
smo78512.draw();
smo78513.setContext(context);
smo78513.draw();
smo78514.setContext(context);
smo78514.draw();
const fmtsmo7027059 = new VF.Formatter();
//
// voices and notes for stave 0 59
const smo70270v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70270v0ar = [];
const smo70235 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo70235.setAttribute('id', 'smo70235');
smo70270v0ar.push(smo70235);
const smo70236 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo70236.setAttribute('id', 'smo70236');
smo70270v0ar.push(smo70236);
const smo70237 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo70237.setAttribute('id', 'smo70237');
smo70270v0ar.push(smo70237);
const smo70238 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo70238.setAttribute('id', 'smo70238');
smo70270v0ar.push(smo70238);
const smo70239 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo70239.setAttribute('id', 'smo70239');
smo70270v0ar.push(smo70239);
const smo70240 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo70240.setAttribute('id', 'smo70240');
smo70270v0ar.push(smo70240);
const smo70241 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo70241.setAttribute('id', 'smo70241');
smo70270v0ar.push(smo70241);
const smo70242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo70242.setAttribute('id', 'smo70242');
smo70270v0ar.push(smo70242);
const smo70243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo70243.setAttribute('id', 'smo70243');
smo70270v0ar.push(smo70243);
const smo70244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo70244.setAttribute('id', 'smo70244');
smo70270v0ar.push(smo70244);
const smo70245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo70245.setAttribute('id', 'smo70245');
smo70270v0ar.push(smo70245);
smo70270v0.addTickables(smo70270v0ar)
fmtsmo7027059.joinVoices([smo70270v0]);
const smo70270v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70270v1ar = [];
const smo70246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/4/n"]}'))
smo70246.setAttribute('id', 'smo70246');
smo70246.setStyle({ fillStyle: "#115511" });
const smo702460acc = new VF.Accidental('b');
smo70246.addModifier(smo702460acc, 0);
smo70246.addModifier(new VF.Dot(), 0);
smo70270v1ar.push(smo70246);
const smo70247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo70247.setAttribute('id', 'smo70247');
smo70247.setStyle({ fillStyle: "#115511" });
smo70270v1ar.push(smo70247);
const smo70248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/4/n"]}'))
smo70248.setAttribute('id', 'smo70248');
smo70248.setStyle({ fillStyle: "#115511" });
smo70270v1ar.push(smo70248);
const smo70249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo70249.setAttribute('id', 'smo70249');
smo70249.setStyle({ fillStyle: "#115511" });
smo70270v1ar.push(smo70249);
const smo70250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo70250.setAttribute('id', 'smo70250');
smo70250.setStyle({ fillStyle: "#115511" });
smo70270v1ar.push(smo70250);
const smo70251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70251.setAttribute('id', 'smo70251');
smo70251.setStyle({ fillStyle: "#115511" });
smo70270v1ar.push(smo70251);
const smo70252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo70252.setAttribute('id', 'smo70252');
smo70252.setStyle({ fillStyle: "#115511" });
smo70270v1ar.push(smo70252);
const smo70253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo70253.setAttribute('id', 'smo70253');
smo70253.setStyle({ fillStyle: "#115511" });
smo70270v1ar.push(smo70253);
const smo70254 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo70254.setAttribute('id', 'smo70254');
smo70254.setStyle({ fillStyle: "#115511" });
smo70270v1ar.push(smo70254);
const smo70255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo70255.setAttribute('id', 'smo70255');
smo70255.setStyle({ fillStyle: "#115511" });
smo70270v1ar.push(smo70255);
const smo70256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/4/n"]}'))
smo70256.setAttribute('id', 'smo70256');
smo70256.setStyle({ fillStyle: "#115511" });
smo70270v1ar.push(smo70256);
smo70270v1.addTickables(smo70270v1ar)
fmtsmo7027059.joinVoices([smo70270v1]);
const fmtsmo7529659 = new VF.Formatter();
//
// voices and notes for stave 1 59
const smo75296v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75296v0ar = [];
const smo75268 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo75268.setAttribute('id', 'smo75268');
smo75296v0ar.push(smo75268);
const smo75269 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75269.setAttribute('id', 'smo75269');
smo75296v0ar.push(smo75269);
const smo75270 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75270.setAttribute('id', 'smo75270');
smo75296v0ar.push(smo75270);
const smo75271 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo75271.setAttribute('id', 'smo75271');
smo75296v0ar.push(smo75271);
const smo75272 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75272.setAttribute('id', 'smo75272');
smo75296v0ar.push(smo75272);
const smo75273 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo75273.setAttribute('id', 'smo75273');
smo75296v0ar.push(smo75273);
const smo75274 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo75274.setAttribute('id', 'smo75274');
smo75296v0ar.push(smo75274);
const smo75275 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo75275.setAttribute('id', 'smo75275');
smo75296v0ar.push(smo75275);
const smo75276 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo75276.setAttribute('id', 'smo75276');
smo75296v0ar.push(smo75276);
const smo75277 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo75277.setAttribute('id', 'smo75277');
smo75296v0ar.push(smo75277);
const smo75278 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75278.setAttribute('id', 'smo75278');
smo75296v0ar.push(smo75278);
const smo75279 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo75279.setAttribute('id', 'smo75279');
smo75296v0ar.push(smo75279);
const smo75280 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo75280.setAttribute('id', 'smo75280');
const smo752800acc = new VF.Accidental('b');
smo75280.addModifier(smo752800acc, 0);
smo75296v0ar.push(smo75280);
const smo75281 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75281.setAttribute('id', 'smo75281');
smo75296v0ar.push(smo75281);
smo75296v0.addTickables(smo75296v0ar)
fmtsmo7529659.joinVoices([smo75296v0]);
const smo75296v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75296v1ar = [];
const smo75282 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo75282.setAttribute('id', 'smo75282');
smo75282.setStyle({ fillStyle: "#115511" });
smo75296v1ar.push(smo75282);
smo75296v1.addTickables(smo75296v1ar)
fmtsmo7529659.joinVoices([smo75296v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78517 = smo70235.getStemDirection();
smo70235.setStemDirection(dirsmo78517);
smo70236.setStemDirection(dirsmo78517);
const smo78517 = new VF.Beam([smo70235,smo70236]);
const dirsmo78518 = smo70238.getStemDirection();
smo70238.setStemDirection(dirsmo78518);
smo70239.setStemDirection(dirsmo78518);
smo70240.setStemDirection(dirsmo78518);
smo70241.setStemDirection(dirsmo78518);
const smo78518 = new VF.Beam([smo70238,smo70239,smo70240,smo70241]);
const dirsmo78519 = smo70242.getStemDirection();
smo70242.setStemDirection(dirsmo78519);
smo70243.setStemDirection(dirsmo78519);
smo70244.setStemDirection(dirsmo78519);
smo70245.setStemDirection(dirsmo78519);
const smo78519 = new VF.Beam([smo70242,smo70243,smo70244,smo70245]);
const dirsmo78520 = smo70246.getStemDirection();
smo70246.setStemDirection(dirsmo78520);
smo70247.setStemDirection(dirsmo78520);
smo70248.setStemDirection(dirsmo78520);
const smo78520 = new VF.Beam([smo70246,smo70247,smo70248]);
const dirsmo78521 = smo70249.getStemDirection();
smo70249.setStemDirection(dirsmo78521);
smo70250.setStemDirection(dirsmo78521);
const smo78521 = new VF.Beam([smo70249,smo70250]);
const dirsmo78522 = smo70251.getStemDirection();
smo70251.setStemDirection(dirsmo78522);
smo70252.setStemDirection(dirsmo78522);
const smo78522 = new VF.Beam([smo70251,smo70252]);
const dirsmo78523 = smo70253.getStemDirection();
smo70253.setStemDirection(dirsmo78523);
smo70254.setStemDirection(dirsmo78523);
smo70255.setStemDirection(dirsmo78523);
smo70256.setStemDirection(dirsmo78523);
const smo78523 = new VF.Beam([smo70253,smo70254,smo70255,smo70256]);
const dirsmo78526 = smo75268.getStemDirection();
smo75268.setStemDirection(dirsmo78526);
smo75269.setStemDirection(dirsmo78526);
const smo78526 = new VF.Beam([smo75268,smo75269]);
const dirsmo78527 = smo75270.getStemDirection();
smo75270.setStemDirection(dirsmo78527);
smo75271.setStemDirection(dirsmo78527);
smo75272.setStemDirection(dirsmo78527);
smo75273.setStemDirection(dirsmo78527);
const smo78527 = new VF.Beam([smo75270,smo75271,smo75272,smo75273]);
const dirsmo78528 = smo75274.getStemDirection();
smo75274.setStemDirection(dirsmo78528);
smo75275.setStemDirection(dirsmo78528);
smo75276.setStemDirection(dirsmo78528);
smo75277.setStemDirection(dirsmo78528);
const smo78528 = new VF.Beam([smo75274,smo75275,smo75276,smo75277]);
const dirsmo78529 = smo75278.getStemDirection();
smo75278.setStemDirection(dirsmo78529);
smo75279.setStemDirection(dirsmo78529);
smo75280.setStemDirection(dirsmo78529);
smo75281.setStemDirection(dirsmo78529);
const smo78529 = new VF.Beam([smo75278,smo75279,smo75280,smo75281]);
 
// formatting measures in staff group smo67190
fmtsmo7027059.format([smo70270v0,smo70270v1,smo75296v0,smo75296v1], 495);
const stavesmo70270 = new VF.Stave(1300, 1331, 509);
stavesmo70270.setAttribute('id', 'stavesmo70270');
stavesmo70270.setBegBarType(VF.Barline.type.NONE);
stavesmo70270.setContext(context);
stavesmo70270.draw();
smo70270v0.draw(context, stavesmo70270);
smo70270v1.draw(context, stavesmo70270);
smo78517.setContext(context);
smo78517.draw();
smo78518.setContext(context);
smo78518.draw();
smo78519.setContext(context);
smo78519.draw();
smo78520.setContext(context);
smo78520.draw();
smo78521.setContext(context);
smo78521.draw();
smo78522.setContext(context);
smo78522.draw();
smo78523.setContext(context);
smo78523.draw();
const stavesmo75296 = new VF.Stave(1300, 1450, 509);
stavesmo75296.setAttribute('id', 'stavesmo75296');
stavesmo75296.setBegBarType(VF.Barline.type.NONE);
stavesmo75296.setContext(context);
stavesmo75296.draw();
smo75296v0.draw(context, stavesmo75296);
smo75296v1.draw(context, stavesmo75296);
smo78526.setContext(context);
smo78526.draw();
smo78527.setContext(context);
smo78527.draw();
smo78528.setContext(context);
smo78528.draw();
smo78529.setContext(context);
smo78529.draw();
const rightsmo67190stavesmo702701 = new VF.StaveConnector(stavesmo70270, stavesmo75296).setType(0);
rightsmo67190stavesmo702701.setContext(context).draw();
const fmtsmo7030460 = new VF.Formatter();
//
// voices and notes for stave 0 60
const smo70304v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70304v0ar = [];
const smo70271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo70271.setAttribute('id', 'smo70271');
smo70304v0ar.push(smo70271);
const smo70272 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo70272.setAttribute('id', 'smo70272');
smo70304v0ar.push(smo70272);
const smo70273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70273.setAttribute('id', 'smo70273');
smo70304v0ar.push(smo70273);
const smo70274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo70274.setAttribute('id', 'smo70274');
smo70304v0ar.push(smo70274);
const smo70275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo70275.setAttribute('id', 'smo70275');
const smo702750acc = new VF.Accidental('n');
smo70275.addModifier(smo702750acc, 0);
smo70304v0ar.push(smo70275);
const smo70276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo70276.setAttribute('id', 'smo70276');
smo70304v0ar.push(smo70276);
const smo70277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo70277.setAttribute('id', 'smo70277');
smo70304v0ar.push(smo70277);
const smo70278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo70278.setAttribute('id', 'smo70278');
smo70304v0ar.push(smo70278);
const smo70279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo70279.setAttribute('id', 'smo70279');
smo70304v0ar.push(smo70279);
smo70304v0.addTickables(smo70304v0ar)
fmtsmo7030460.joinVoices([smo70304v0]);
const smo70304v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70304v1ar = [];
const smo70280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo70280.setAttribute('id', 'smo70280');
smo70280.setStyle({ fillStyle: "#115511" });
smo70304v1ar.push(smo70280);
const smo70281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/4/n"]}'))
smo70281.setAttribute('id', 'smo70281');
smo70281.setStyle({ fillStyle: "#115511" });
const smo702810acc = new VF.Accidental('b');
smo70281.addModifier(smo702810acc, 0);
smo70304v1ar.push(smo70281);
const smo70282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo70282.setAttribute('id', 'smo70282');
smo70282.setStyle({ fillStyle: "#115511" });
smo70304v1ar.push(smo70282);
const smo70283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70283.setAttribute('id', 'smo70283');
smo70283.setStyle({ fillStyle: "#115511" });
smo70304v1ar.push(smo70283);
const smo70284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70284.setAttribute('id', 'smo70284');
smo70284.setStyle({ fillStyle: "#115511" });
smo70304v1ar.push(smo70284);
const smo70285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70285.setAttribute('id', 'smo70285');
smo70285.setStyle({ fillStyle: "#115511" });
smo70304v1ar.push(smo70285);
const smo70286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70286.setAttribute('id', 'smo70286');
smo70286.setStyle({ fillStyle: "#115511" });
smo70304v1ar.push(smo70286);
const smo70287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo70287.setAttribute('id', 'smo70287');
smo70287.setStyle({ fillStyle: "#115511" });
smo70304v1ar.push(smo70287);
const smo70288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo70288.setAttribute('id', 'smo70288');
smo70288.setStyle({ fillStyle: "#115511" });
smo70304v1ar.push(smo70288);
const smo70289 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo70289.setAttribute('id', 'smo70289');
smo70289.setStyle({ fillStyle: "#115511" });
smo70289.addModifier(new VF.Dot(), 0);
smo70304v1ar.push(smo70289);
const smo70290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70290.setAttribute('id', 'smo70290');
smo70290.setStyle({ fillStyle: "#115511" });
smo70304v1ar.push(smo70290);
smo70304v1.addTickables(smo70304v1ar)
fmtsmo7030460.joinVoices([smo70304v1]);
const fmtsmo7532060 = new VF.Formatter();
//
// voices and notes for stave 1 60
const smo75320v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75320v0ar = [];
const smo75297 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo75297.setAttribute('id', 'smo75297');
smo75320v0ar.push(smo75297);
const smo75298 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo75298.setAttribute('id', 'smo75298');
smo75320v0ar.push(smo75298);
const smo75299 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo75299.setAttribute('id', 'smo75299');
smo75320v0ar.push(smo75299);
const smo75300 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75300.setAttribute('id', 'smo75300');
smo75320v0ar.push(smo75300);
const smo75301 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo75301.setAttribute('id', 'smo75301');
smo75320v0ar.push(smo75301);
const smo75302 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo75302.setAttribute('id', 'smo75302');
smo75320v0ar.push(smo75302);
const smo75303 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo75303.setAttribute('id', 'smo75303');
smo75320v0ar.push(smo75303);
const smo75304 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo75304.setAttribute('id', 'smo75304');
smo75320v0ar.push(smo75304);
const smo75305 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo75305.setAttribute('id', 'smo75305');
smo75320v0ar.push(smo75305);
smo75320v0.addTickables(smo75320v0ar)
fmtsmo7532060.joinVoices([smo75320v0]);
const smo75320v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75320v1ar = [];
const smo75306 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo75306.setAttribute('id', 'smo75306');
smo75306.setStyle({ fillStyle: "#115511" });
smo75320v1ar.push(smo75306);
smo75320v1.addTickables(smo75320v1ar)
fmtsmo7532060.joinVoices([smo75320v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78543 = smo70273.getStemDirection();
smo70273.setStemDirection(dirsmo78543);
smo70274.setStemDirection(dirsmo78543);
smo70275.setStemDirection(dirsmo78543);
smo70276.setStemDirection(dirsmo78543);
const smo78543 = new VF.Beam([smo70273,smo70274,smo70275,smo70276]);
const dirsmo78544 = smo70277.getStemDirection();
smo70277.setStemDirection(dirsmo78544);
smo70278.setStemDirection(dirsmo78544);
smo70279.setStemDirection(dirsmo78544);
const smo78544 = new VF.Beam([smo70277,smo70278,smo70279]);
const dirsmo78545 = smo70280.getStemDirection();
smo70280.setStemDirection(dirsmo78545);
smo70281.setStemDirection(dirsmo78545);
smo70282.setStemDirection(dirsmo78545);
smo70283.setStemDirection(dirsmo78545);
const smo78545 = new VF.Beam([smo70280,smo70281,smo70282,smo70283]);
const dirsmo78546 = smo70284.getStemDirection();
smo70284.setStemDirection(dirsmo78546);
smo70285.setStemDirection(dirsmo78546);
smo70286.setStemDirection(dirsmo78546);
smo70287.setStemDirection(dirsmo78546);
const smo78546 = new VF.Beam([smo70284,smo70285,smo70286,smo70287]);
const dirsmo78547 = smo70289.getStemDirection();
smo70289.setStemDirection(dirsmo78547);
smo70290.setStemDirection(dirsmo78547);
const smo78547 = new VF.Beam([smo70289,smo70290]);
const dirsmo78550 = smo75297.getStemDirection();
smo75297.setStemDirection(dirsmo78550);
smo75298.setStemDirection(dirsmo78550);
smo75299.setStemDirection(dirsmo78550);
smo75300.setStemDirection(dirsmo78550);
const smo78550 = new VF.Beam([smo75297,smo75298,smo75299,smo75300]);
const dirsmo78551 = smo75301.getStemDirection();
smo75301.setStemDirection(dirsmo78551);
smo75302.setStemDirection(dirsmo78551);
smo75303.setStemDirection(dirsmo78551);
smo75304.setStemDirection(dirsmo78551);
const smo78551 = new VF.Beam([smo75301,smo75302,smo75303,smo75304]);
 
// formatting measures in staff group smo67190
fmtsmo7030460.format([smo70304v0,smo70304v1,smo75320v0,smo75320v1], 521);
const stavesmo70304 = new VF.Stave(90, 1679, 579);
stavesmo70304.setAttribute('id', 'stavesmo70304');
stavesmo70304.setBegBarType(1);
stavesmo70304.addClef('treble');
stavesmo70304.setContext(context);
stavesmo70304.draw();
smo70304v0.draw(context, stavesmo70304);
smo70304v1.draw(context, stavesmo70304);
smo78543.setContext(context);
smo78543.draw();
smo78544.setContext(context);
smo78544.draw();
smo78545.setContext(context);
smo78545.draw();
smo78546.setContext(context);
smo78546.draw();
smo78547.setContext(context);
smo78547.draw();
const stavesmo75320 = new VF.Stave(90, 1808, 579);
stavesmo75320.setAttribute('id', 'stavesmo75320');
stavesmo75320.setBegBarType(1);
stavesmo75320.addClef('bass');
stavesmo75320.setContext(context);
stavesmo75320.draw();
smo75320v0.draw(context, stavesmo75320);
smo75320v1.draw(context, stavesmo75320);
smo78550.setContext(context);
smo78550.draw();
smo78551.setContext(context);
smo78551.draw();
const leftsmo67190stavesmo703041 = new VF.StaveConnector(stavesmo70304, stavesmo75320).setType(3);
leftsmo67190stavesmo703041.setContext(context).draw();
const fmtsmo7033361 = new VF.Formatter();
//
// voices and notes for stave 0 61
const smo70333v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70333v0ar = [];
const smo70305 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo70305.setAttribute('id', 'smo70305');
smo70333v0ar.push(smo70305);
const smo70306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo70306.setAttribute('id', 'smo70306');
smo70333v0ar.push(smo70306);
const smo70307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo70307.setAttribute('id', 'smo70307');
smo70333v0ar.push(smo70307);
const smo70308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo70308.setAttribute('id', 'smo70308');
smo70333v0ar.push(smo70308);
const smo70309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo70309.setAttribute('id', 'smo70309');
smo70333v0ar.push(smo70309);
const smo70310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo70310.setAttribute('id', 'smo70310');
smo70333v0ar.push(smo70310);
const smo70311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo70311.setAttribute('id', 'smo70311');
smo70311.addModifier(new VF.Dot(), 0);
smo70333v0ar.push(smo70311);
const smo70312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/5/n"]}'))
smo70312.setAttribute('id', 'smo70312');
smo70333v0ar.push(smo70312);
const smo70313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/6/n"]}'))
smo70313.setAttribute('id', 'smo70313');
const  smo80443 = new VF.Articulation('a@a').setPosition(3);
smo70313.addModifier(smo80443, 0);
smo70333v0ar.push(smo70313);
smo70333v0.addTickables(smo70333v0ar)
fmtsmo7033361.joinVoices([smo70333v0]);
const smo70333v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70333v1ar = [];
const smo70315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo70315.setAttribute('id', 'smo70315');
smo70315.setStyle({ fillStyle: "#115511" });
smo70333v1ar.push(smo70315);
const smo70316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo70316.setAttribute('id', 'smo70316');
smo70316.setStyle({ fillStyle: "#115511" });
smo70333v1ar.push(smo70316);
const smo70317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo70317.setAttribute('id', 'smo70317');
smo70317.setStyle({ fillStyle: "#115511" });
smo70333v1ar.push(smo70317);
const smo70318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo70318.setAttribute('id', 'smo70318');
smo70318.setStyle({ fillStyle: "#115511" });
smo70333v1ar.push(smo70318);
const smo70319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n","gn/5/n"]}'))
smo70319.setAttribute('id', 'smo70319');
smo70319.setStyle({ fillStyle: "#115511" });
smo70333v1ar.push(smo70319);
smo70333v1.addTickables(smo70333v1ar)
fmtsmo7033361.joinVoices([smo70333v1]);
const fmtsmo7533661 = new VF.Formatter();
//
// voices and notes for stave 1 61
const smo75336v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75336v0ar = [];
const smo75321 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo75321.setAttribute('id', 'smo75321');
smo75336v0ar.push(smo75321);
smo75336v0.addTickables(smo75336v0ar)
fmtsmo7533661.joinVoices([smo75336v0]);
const smo75336v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75336v1ar = [];
const smo75322 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo75322.setAttribute('id', 'smo75322');
smo75322.setStyle({ fillStyle: "#115511" });
smo75336v1ar.push(smo75322);
smo75336v1.addTickables(smo75336v1ar)
fmtsmo7533661.joinVoices([smo75336v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78554 = smo70305.getStemDirection();
smo70305.setStemDirection(dirsmo78554);
smo70306.setStemDirection(dirsmo78554);
smo70307.setStemDirection(dirsmo78554);
smo70308.setStemDirection(dirsmo78554);
smo70309.setStemDirection(dirsmo78554);
smo70310.setStemDirection(dirsmo78554);
const smo78554 = new VF.Beam([smo70305,smo70306,smo70307,smo70308,smo70309,smo70310]);
const dirsmo78555 = smo70311.getStemDirection();
smo70311.setStemDirection(dirsmo78555);
smo70312.setStemDirection(dirsmo78555);
const smo78555 = new VF.Beam([smo70311,smo70312]);
const dirsmo78556 = smo70317.getStemDirection();
smo70317.setStemDirection(dirsmo78556);
smo70318.setStemDirection(dirsmo78556);
const smo78556 = new VF.Beam([smo70317,smo70318]);
 
// formatting measures in staff group smo67190
fmtsmo7033361.format([smo70333v0,smo70333v1,smo75336v0,smo75336v1], 329);
const stavesmo70333 = new VF.Stave(669, 1679, 351);
stavesmo70333.setAttribute('id', 'stavesmo70333');
stavesmo70333.setBegBarType(VF.Barline.type.NONE);
stavesmo70333.setEndBarType(3);
stavesmo70333.setContext(context);
stavesmo70333.draw();
smo70333v0.draw(context, stavesmo70333);
smo70333v1.draw(context, stavesmo70333);
smo78554.setContext(context);
smo78554.draw();
smo78555.setContext(context);
smo78555.draw();
smo78556.setContext(context);
smo78556.draw();
const stavesmo75336 = new VF.Stave(669, 1808, 351);
stavesmo75336.setAttribute('id', 'stavesmo75336');
stavesmo75336.setBegBarType(VF.Barline.type.NONE);
stavesmo75336.setEndBarType(3);
stavesmo75336.setContext(context);
stavesmo75336.draw();
smo75336v0.draw(context, stavesmo75336);
smo75336v1.draw(context, stavesmo75336);
const fmtsmo7036362 = new VF.Formatter();
//
// voices and notes for stave 0 62
const smo70363v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70363v0ar = [];
const smo70334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo70334.setAttribute('id', 'smo70334');
smo70363v0ar.push(smo70334);
const smo70335 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo70335.setAttribute('id', 'smo70335');
smo70363v0ar.push(smo70335);
const smo70336 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo70336.setAttribute('id', 'smo70336');
smo70363v0ar.push(smo70336);
const smo70337 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo70337.setAttribute('id', 'smo70337');
smo70363v0ar.push(smo70337);
const smo70338 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo70338.setAttribute('id', 'smo70338');
smo70363v0ar.push(smo70338);
const smo70339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo70339.setAttribute('id', 'smo70339');
smo70363v0ar.push(smo70339);
const smo70340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo70340.setAttribute('id', 'smo70340');
smo70363v0ar.push(smo70340);
const smo70341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo70341.setAttribute('id', 'smo70341');
smo70363v0ar.push(smo70341);
const smo70342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo70342.setAttribute('id', 'smo70342');
smo70363v0ar.push(smo70342);
const smo70343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo70343.setAttribute('id', 'smo70343');
smo70363v0ar.push(smo70343);
const smo70344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo70344.setAttribute('id', 'smo70344');
smo70363v0ar.push(smo70344);
const smo70345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo70345.setAttribute('id', 'smo70345');
smo70363v0ar.push(smo70345);
const smo70346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo70346.setAttribute('id', 'smo70346');
smo70363v0ar.push(smo70346);
const smo70347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo70347.setAttribute('id', 'smo70347');
smo70363v0ar.push(smo70347);
const smo70348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo70348.setAttribute('id', 'smo70348');
smo70363v0ar.push(smo70348);
const smo70349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo70349.setAttribute('id', 'smo70349');
smo70363v0ar.push(smo70349);
smo70363v0.addTickables(smo70363v0ar)
fmtsmo7036362.joinVoices([smo70363v0]);
const fmtsmo7536662 = new VF.Formatter();
//
// voices and notes for stave 1 62
const smo75366v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75366v0ar = [];
const smo75337 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo75337.setAttribute('id', 'smo75337');
smo75366v0ar.push(smo75337);
const smo75338 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75338.setAttribute('id', 'smo75338');
smo75366v0ar.push(smo75338);
const smo75339 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo75339.setAttribute('id', 'smo75339');
smo75366v0ar.push(smo75339);
const smo75340 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75340.setAttribute('id', 'smo75340');
smo75366v0ar.push(smo75340);
const smo75341 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
smo75341.setAttribute('id', 'smo75341');
smo75366v0ar.push(smo75341);
const smo75342 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75342.setAttribute('id', 'smo75342');
smo75366v0ar.push(smo75342);
const smo75343 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo75343.setAttribute('id', 'smo75343');
smo75366v0ar.push(smo75343);
const smo75344 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75344.setAttribute('id', 'smo75344');
smo75366v0ar.push(smo75344);
const smo75345 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo75345.setAttribute('id', 'smo75345');
smo75366v0ar.push(smo75345);
const smo75346 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75346.setAttribute('id', 'smo75346');
smo75366v0ar.push(smo75346);
const smo75347 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo75347.setAttribute('id', 'smo75347');
smo75366v0ar.push(smo75347);
const smo75348 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75348.setAttribute('id', 'smo75348');
smo75366v0ar.push(smo75348);
const smo75349 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
smo75349.setAttribute('id', 'smo75349');
smo75366v0ar.push(smo75349);
const smo75350 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75350.setAttribute('id', 'smo75350');
smo75366v0ar.push(smo75350);
const smo75351 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo75351.setAttribute('id', 'smo75351');
smo75366v0ar.push(smo75351);
const smo75352 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75352.setAttribute('id', 'smo75352');
smo75366v0ar.push(smo75352);
smo75366v0.addTickables(smo75366v0ar)
fmtsmo7536662.joinVoices([smo75366v0]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78559 = smo70334.getStemDirection();
smo70334.setStemDirection(dirsmo78559);
smo70335.setStemDirection(dirsmo78559);
smo70336.setStemDirection(dirsmo78559);
smo70337.setStemDirection(dirsmo78559);
const smo78559 = new VF.Beam([smo70334,smo70335,smo70336,smo70337]);
const dirsmo78560 = smo70338.getStemDirection();
smo70338.setStemDirection(dirsmo78560);
smo70339.setStemDirection(dirsmo78560);
smo70340.setStemDirection(dirsmo78560);
smo70341.setStemDirection(dirsmo78560);
const smo78560 = new VF.Beam([smo70338,smo70339,smo70340,smo70341]);
const dirsmo78561 = smo70342.getStemDirection();
smo70342.setStemDirection(dirsmo78561);
smo70343.setStemDirection(dirsmo78561);
smo70344.setStemDirection(dirsmo78561);
smo70345.setStemDirection(dirsmo78561);
const smo78561 = new VF.Beam([smo70342,smo70343,smo70344,smo70345]);
const dirsmo78562 = smo70346.getStemDirection();
smo70346.setStemDirection(dirsmo78562);
smo70347.setStemDirection(dirsmo78562);
smo70348.setStemDirection(dirsmo78562);
smo70349.setStemDirection(dirsmo78562);
const smo78562 = new VF.Beam([smo70346,smo70347,smo70348,smo70349]);
const dirsmo78565 = smo75337.getStemDirection();
smo75337.setStemDirection(dirsmo78565);
smo75338.setStemDirection(dirsmo78565);
smo75339.setStemDirection(dirsmo78565);
smo75340.setStemDirection(dirsmo78565);
const smo78565 = new VF.Beam([smo75337,smo75338,smo75339,smo75340]);
const dirsmo78566 = smo75341.getStemDirection();
smo75341.setStemDirection(dirsmo78566);
smo75342.setStemDirection(dirsmo78566);
smo75343.setStemDirection(dirsmo78566);
smo75344.setStemDirection(dirsmo78566);
const smo78566 = new VF.Beam([smo75341,smo75342,smo75343,smo75344]);
const dirsmo78567 = smo75345.getStemDirection();
smo75345.setStemDirection(dirsmo78567);
smo75346.setStemDirection(dirsmo78567);
smo75347.setStemDirection(dirsmo78567);
smo75348.setStemDirection(dirsmo78567);
const smo78567 = new VF.Beam([smo75345,smo75346,smo75347,smo75348]);
const dirsmo78568 = smo75349.getStemDirection();
smo75349.setStemDirection(dirsmo78568);
smo75350.setStemDirection(dirsmo78568);
smo75351.setStemDirection(dirsmo78568);
smo75352.setStemDirection(dirsmo78568);
const smo78568 = new VF.Beam([smo75349,smo75350,smo75351,smo75352]);
 
// formatting measures in staff group smo67190
fmtsmo7036362.format([smo70363v0,smo75366v0], 335);
const stavesmo70363 = new VF.Stave(1020, 1679, 394);
stavesmo70363.setAttribute('id', 'stavesmo70363');
stavesmo70363.setBegBarType(VF.Barline.type.NONE);
stavesmo70363.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":144,"name":"Allegro Vivace"}'), -1 * 6);
const keysmo70363 = new VF.KeySignature('Eb');
keysmo70363.cancelKey('C');
keysmo70363.addToStave(stavesmo70363);
stavesmo70363.setContext(context);
stavesmo70363.draw();
smo70363v0.draw(context, stavesmo70363);
smo78559.setContext(context);
smo78559.draw();
smo78560.setContext(context);
smo78560.draw();
smo78561.setContext(context);
smo78561.draw();
smo78562.setContext(context);
smo78562.draw();
const stavesmo75366 = new VF.Stave(1020, 1808, 394);
stavesmo75366.setAttribute('id', 'stavesmo75366');
stavesmo75366.setBegBarType(VF.Barline.type.NONE);
const keysmo75366 = new VF.KeySignature('Eb');
keysmo75366.cancelKey('C');
keysmo75366.addToStave(stavesmo75366);
stavesmo75366.setContext(context);
stavesmo75366.draw();
smo75366v0.draw(context, stavesmo75366);
smo78565.setContext(context);
smo78565.draw();
smo78566.setContext(context);
smo78566.draw();
smo78567.setContext(context);
smo78567.draw();
smo78568.setContext(context);
smo78568.draw();
const fmtsmo7039363 = new VF.Formatter();
//
// voices and notes for stave 0 63
const smo70393v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70393v0ar = [];
const smo70364 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo70364.setAttribute('id', 'smo70364');
smo70393v0ar.push(smo70364);
const smo70365 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70365.setAttribute('id', 'smo70365');
smo70393v0ar.push(smo70365);
const smo70366 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo70366.setAttribute('id', 'smo70366');
const smo703660acc = new VF.Accidental('n');
smo70366.addModifier(smo703660acc, 0);
smo70393v0ar.push(smo70366);
const smo70367 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70367.setAttribute('id', 'smo70367');
smo70393v0ar.push(smo70367);
const smo70368 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo70368.setAttribute('id', 'smo70368');
smo70393v0ar.push(smo70368);
const smo70369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70369.setAttribute('id', 'smo70369');
smo70393v0ar.push(smo70369);
const smo70370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo70370.setAttribute('id', 'smo70370');
smo70393v0ar.push(smo70370);
const smo70371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70371.setAttribute('id', 'smo70371');
smo70393v0ar.push(smo70371);
const smo70372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo70372.setAttribute('id', 'smo70372');
smo70393v0ar.push(smo70372);
const smo70373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70373.setAttribute('id', 'smo70373');
smo70393v0ar.push(smo70373);
const smo70374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo70374.setAttribute('id', 'smo70374');
smo70393v0ar.push(smo70374);
const smo70375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70375.setAttribute('id', 'smo70375');
smo70393v0ar.push(smo70375);
const smo70376 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo70376.setAttribute('id', 'smo70376');
smo70393v0ar.push(smo70376);
const smo70377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70377.setAttribute('id', 'smo70377');
smo70393v0ar.push(smo70377);
const smo70378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo70378.setAttribute('id', 'smo70378');
smo70393v0ar.push(smo70378);
const smo70379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70379.setAttribute('id', 'smo70379');
smo70393v0ar.push(smo70379);
smo70393v0.addTickables(smo70393v0ar)
fmtsmo7039363.joinVoices([smo70393v0]);
const fmtsmo7539663 = new VF.Formatter();
//
// voices and notes for stave 1 63
const smo75396v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75396v0ar = [];
const smo75367 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo75367.setAttribute('id', 'smo75367');
smo75396v0ar.push(smo75367);
const smo75368 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo75368.setAttribute('id', 'smo75368');
smo75396v0ar.push(smo75368);
const smo75369 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75369.setAttribute('id', 'smo75369');
smo75396v0ar.push(smo75369);
const smo75370 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo75370.setAttribute('id', 'smo75370');
smo75396v0ar.push(smo75370);
const smo75371 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo75371.setAttribute('id', 'smo75371');
smo75396v0ar.push(smo75371);
const smo75372 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo75372.setAttribute('id', 'smo75372');
smo75396v0ar.push(smo75372);
const smo75373 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75373.setAttribute('id', 'smo75373');
smo75396v0ar.push(smo75373);
const smo75374 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo75374.setAttribute('id', 'smo75374');
smo75396v0ar.push(smo75374);
const smo75375 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo75375.setAttribute('id', 'smo75375');
smo75396v0ar.push(smo75375);
const smo75376 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo75376.setAttribute('id', 'smo75376');
smo75396v0ar.push(smo75376);
const smo75377 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75377.setAttribute('id', 'smo75377');
smo75396v0ar.push(smo75377);
const smo75378 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo75378.setAttribute('id', 'smo75378');
smo75396v0ar.push(smo75378);
const smo75379 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo75379.setAttribute('id', 'smo75379');
smo75396v0ar.push(smo75379);
const smo75380 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo75380.setAttribute('id', 'smo75380');
smo75396v0ar.push(smo75380);
const smo75381 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75381.setAttribute('id', 'smo75381');
smo75396v0ar.push(smo75381);
const smo75382 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo75382.setAttribute('id', 'smo75382');
smo75396v0ar.push(smo75382);
smo75396v0.addTickables(smo75396v0ar)
fmtsmo7539663.joinVoices([smo75396v0]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78571 = smo70364.getStemDirection();
smo70364.setStemDirection(dirsmo78571);
smo70365.setStemDirection(dirsmo78571);
smo70366.setStemDirection(dirsmo78571);
smo70367.setStemDirection(dirsmo78571);
const smo78571 = new VF.Beam([smo70364,smo70365,smo70366,smo70367]);
const dirsmo78572 = smo70368.getStemDirection();
smo70368.setStemDirection(dirsmo78572);
smo70369.setStemDirection(dirsmo78572);
smo70370.setStemDirection(dirsmo78572);
smo70371.setStemDirection(dirsmo78572);
const smo78572 = new VF.Beam([smo70368,smo70369,smo70370,smo70371]);
const dirsmo78573 = smo70372.getStemDirection();
smo70372.setStemDirection(dirsmo78573);
smo70373.setStemDirection(dirsmo78573);
smo70374.setStemDirection(dirsmo78573);
smo70375.setStemDirection(dirsmo78573);
const smo78573 = new VF.Beam([smo70372,smo70373,smo70374,smo70375]);
const dirsmo78574 = smo70376.getStemDirection();
smo70376.setStemDirection(dirsmo78574);
smo70377.setStemDirection(dirsmo78574);
smo70378.setStemDirection(dirsmo78574);
smo70379.setStemDirection(dirsmo78574);
const smo78574 = new VF.Beam([smo70376,smo70377,smo70378,smo70379]);
const dirsmo78577 = smo75367.getStemDirection();
smo75367.setStemDirection(dirsmo78577);
smo75368.setStemDirection(dirsmo78577);
smo75369.setStemDirection(dirsmo78577);
smo75370.setStemDirection(dirsmo78577);
const smo78577 = new VF.Beam([smo75367,smo75368,smo75369,smo75370]);
const dirsmo78578 = smo75371.getStemDirection();
smo75371.setStemDirection(dirsmo78578);
smo75372.setStemDirection(dirsmo78578);
smo75373.setStemDirection(dirsmo78578);
smo75374.setStemDirection(dirsmo78578);
const smo78578 = new VF.Beam([smo75371,smo75372,smo75373,smo75374]);
const dirsmo78579 = smo75375.getStemDirection();
smo75375.setStemDirection(dirsmo78579);
smo75376.setStemDirection(dirsmo78579);
smo75377.setStemDirection(dirsmo78579);
smo75378.setStemDirection(dirsmo78579);
const smo78579 = new VF.Beam([smo75375,smo75376,smo75377,smo75378]);
const dirsmo78580 = smo75379.getStemDirection();
smo75379.setStemDirection(dirsmo78580);
smo75380.setStemDirection(dirsmo78580);
smo75381.setStemDirection(dirsmo78580);
smo75382.setStemDirection(dirsmo78580);
const smo78580 = new VF.Beam([smo75379,smo75380,smo75381,smo75382]);
 
// formatting measures in staff group smo67190
fmtsmo7039363.format([smo70393v0,smo75396v0], 379);
const stavesmo70393 = new VF.Stave(1414, 1679, 393);
stavesmo70393.setAttribute('id', 'stavesmo70393');
stavesmo70393.setBegBarType(VF.Barline.type.NONE);
stavesmo70393.setContext(context);
stavesmo70393.draw();
smo70393v0.draw(context, stavesmo70393);
smo78571.setContext(context);
smo78571.draw();
smo78572.setContext(context);
smo78572.draw();
smo78573.setContext(context);
smo78573.draw();
smo78574.setContext(context);
smo78574.draw();
const stavesmo75396 = new VF.Stave(1414, 1808, 393);
stavesmo75396.setAttribute('id', 'stavesmo75396');
stavesmo75396.setBegBarType(VF.Barline.type.NONE);
stavesmo75396.setContext(context);
stavesmo75396.draw();
smo75396v0.draw(context, stavesmo75396);
smo78577.setContext(context);
smo78577.draw();
smo78578.setContext(context);
smo78578.draw();
smo78579.setContext(context);
smo78579.draw();
smo78580.setContext(context);
smo78580.draw();
const rightsmo67190stavesmo703931 = new VF.StaveConnector(stavesmo70393, stavesmo75396).setType(0);
rightsmo67190stavesmo703931.setContext(context).draw();
const fmtsmo7042364 = new VF.Formatter();
//
// voices and notes for stave 0 64
const smo70423v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70423v0ar = [];
const smo70394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo70394.setAttribute('id', 'smo70394');
const smo703940acc = new VF.Accidental('n');
smo70394.addModifier(smo703940acc, 0);
smo70423v0ar.push(smo70394);
const smo70395 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70395.setAttribute('id', 'smo70395');
smo70423v0ar.push(smo70395);
const smo70396 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo70396.setAttribute('id', 'smo70396');
smo70423v0ar.push(smo70396);
const smo70397 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70397.setAttribute('id', 'smo70397');
smo70423v0ar.push(smo70397);
const smo70398 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo70398.setAttribute('id', 'smo70398');
smo70423v0ar.push(smo70398);
const smo70399 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70399.setAttribute('id', 'smo70399');
smo70423v0ar.push(smo70399);
const smo70400 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo70400.setAttribute('id', 'smo70400');
smo70423v0ar.push(smo70400);
const smo70401 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70401.setAttribute('id', 'smo70401');
smo70423v0ar.push(smo70401);
const smo70402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo70402.setAttribute('id', 'smo70402');
smo70423v0ar.push(smo70402);
const smo70403 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70403.setAttribute('id', 'smo70403');
smo70423v0ar.push(smo70403);
const smo70404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo70404.setAttribute('id', 'smo70404');
smo70423v0ar.push(smo70404);
const smo70405 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70405.setAttribute('id', 'smo70405');
smo70423v0ar.push(smo70405);
const smo70406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo70406.setAttribute('id', 'smo70406');
smo70423v0ar.push(smo70406);
const smo70407 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70407.setAttribute('id', 'smo70407');
smo70423v0ar.push(smo70407);
const smo70408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo70408.setAttribute('id', 'smo70408');
smo70423v0ar.push(smo70408);
const smo70409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70409.setAttribute('id', 'smo70409');
smo70423v0ar.push(smo70409);
smo70423v0.addTickables(smo70423v0ar)
fmtsmo7042364.joinVoices([smo70423v0]);
const fmtsmo7542664 = new VF.Formatter();
//
// voices and notes for stave 1 64
const smo75426v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75426v0ar = [];
const smo75397 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo75397.setAttribute('id', 'smo75397');
smo75426v0ar.push(smo75397);
const smo75398 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo75398.setAttribute('id', 'smo75398');
smo75426v0ar.push(smo75398);
const smo75399 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75399.setAttribute('id', 'smo75399');
smo75426v0ar.push(smo75399);
const smo75400 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo75400.setAttribute('id', 'smo75400');
smo75426v0ar.push(smo75400);
const smo75401 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo75401.setAttribute('id', 'smo75401');
smo75426v0ar.push(smo75401);
const smo75402 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo75402.setAttribute('id', 'smo75402');
smo75426v0ar.push(smo75402);
const smo75403 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75403.setAttribute('id', 'smo75403');
smo75426v0ar.push(smo75403);
const smo75404 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo75404.setAttribute('id', 'smo75404');
smo75426v0ar.push(smo75404);
const smo75405 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo75405.setAttribute('id', 'smo75405');
smo75426v0ar.push(smo75405);
const smo75406 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo75406.setAttribute('id', 'smo75406');
smo75426v0ar.push(smo75406);
const smo75407 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75407.setAttribute('id', 'smo75407');
smo75426v0ar.push(smo75407);
const smo75408 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo75408.setAttribute('id', 'smo75408');
smo75426v0ar.push(smo75408);
const smo75409 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo75409.setAttribute('id', 'smo75409');
smo75426v0ar.push(smo75409);
const smo75410 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo75410.setAttribute('id', 'smo75410');
smo75426v0ar.push(smo75410);
const smo75411 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75411.setAttribute('id', 'smo75411');
smo75426v0ar.push(smo75411);
const smo75412 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo75412.setAttribute('id', 'smo75412');
smo75426v0ar.push(smo75412);
smo75426v0.addTickables(smo75426v0ar)
fmtsmo7542664.joinVoices([smo75426v0]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78595 = smo70394.getStemDirection();
smo70394.setStemDirection(dirsmo78595);
smo70395.setStemDirection(dirsmo78595);
smo70396.setStemDirection(dirsmo78595);
smo70397.setStemDirection(dirsmo78595);
const smo78595 = new VF.Beam([smo70394,smo70395,smo70396,smo70397]);
const dirsmo78596 = smo70398.getStemDirection();
smo70398.setStemDirection(dirsmo78596);
smo70399.setStemDirection(dirsmo78596);
smo70400.setStemDirection(dirsmo78596);
smo70401.setStemDirection(dirsmo78596);
const smo78596 = new VF.Beam([smo70398,smo70399,smo70400,smo70401]);
const dirsmo78597 = smo70402.getStemDirection();
smo70402.setStemDirection(dirsmo78597);
smo70403.setStemDirection(dirsmo78597);
smo70404.setStemDirection(dirsmo78597);
smo70405.setStemDirection(dirsmo78597);
const smo78597 = new VF.Beam([smo70402,smo70403,smo70404,smo70405]);
const dirsmo78598 = smo70406.getStemDirection();
smo70406.setStemDirection(dirsmo78598);
smo70407.setStemDirection(dirsmo78598);
smo70408.setStemDirection(dirsmo78598);
smo70409.setStemDirection(dirsmo78598);
const smo78598 = new VF.Beam([smo70406,smo70407,smo70408,smo70409]);
const dirsmo78601 = smo75397.getStemDirection();
smo75397.setStemDirection(dirsmo78601);
smo75398.setStemDirection(dirsmo78601);
smo75399.setStemDirection(dirsmo78601);
smo75400.setStemDirection(dirsmo78601);
const smo78601 = new VF.Beam([smo75397,smo75398,smo75399,smo75400]);
const dirsmo78602 = smo75401.getStemDirection();
smo75401.setStemDirection(dirsmo78602);
smo75402.setStemDirection(dirsmo78602);
smo75403.setStemDirection(dirsmo78602);
smo75404.setStemDirection(dirsmo78602);
const smo78602 = new VF.Beam([smo75401,smo75402,smo75403,smo75404]);
const dirsmo78603 = smo75405.getStemDirection();
smo75405.setStemDirection(dirsmo78603);
smo75406.setStemDirection(dirsmo78603);
smo75407.setStemDirection(dirsmo78603);
smo75408.setStemDirection(dirsmo78603);
const smo78603 = new VF.Beam([smo75405,smo75406,smo75407,smo75408]);
const dirsmo78604 = smo75409.getStemDirection();
smo75409.setStemDirection(dirsmo78604);
smo75410.setStemDirection(dirsmo78604);
smo75411.setStemDirection(dirsmo78604);
smo75412.setStemDirection(dirsmo78604);
const smo78604 = new VF.Beam([smo75409,smo75410,smo75411,smo75412]);
 
// formatting measures in staff group smo67190
fmtsmo7042364.format([smo70423v0,smo75426v0], 370);
const stavesmo70423 = new VF.Stave(90, 1962, 467);
stavesmo70423.setAttribute('id', 'stavesmo70423');
stavesmo70423.setBegBarType(1);
stavesmo70423.addClef('treble');
const keysmo70423 = new VF.KeySignature('Eb');
keysmo70423.addToStave(stavesmo70423);
stavesmo70423.setContext(context);
stavesmo70423.draw();
smo70423v0.draw(context, stavesmo70423);
smo78595.setContext(context);
smo78595.draw();
smo78596.setContext(context);
smo78596.draw();
smo78597.setContext(context);
smo78597.draw();
smo78598.setContext(context);
smo78598.draw();
const stavesmo75426 = new VF.Stave(90, 2051, 467);
stavesmo75426.setAttribute('id', 'stavesmo75426');
stavesmo75426.setBegBarType(1);
stavesmo75426.addClef('bass');
const keysmo75426 = new VF.KeySignature('Eb');
keysmo75426.addToStave(stavesmo75426);
stavesmo75426.setContext(context);
stavesmo75426.draw();
smo75426v0.draw(context, stavesmo75426);
smo78601.setContext(context);
smo78601.draw();
smo78602.setContext(context);
smo78602.draw();
smo78603.setContext(context);
smo78603.draw();
smo78604.setContext(context);
smo78604.draw();
const leftsmo67190stavesmo704231 = new VF.StaveConnector(stavesmo70423, stavesmo75426).setType(3);
leftsmo67190stavesmo704231.setContext(context).draw();
const fmtsmo7045365 = new VF.Formatter();
//
// voices and notes for stave 0 65
const smo70453v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70453v0ar = [];
const smo70424 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo70424.setAttribute('id', 'smo70424');
smo70453v0ar.push(smo70424);
const smo70425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70425.setAttribute('id', 'smo70425');
smo70453v0ar.push(smo70425);
const smo70426 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70426.setAttribute('id', 'smo70426');
smo70453v0ar.push(smo70426);
const smo70427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70427.setAttribute('id', 'smo70427');
smo70453v0ar.push(smo70427);
const smo70428 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo70428.setAttribute('id', 'smo70428');
smo70453v0ar.push(smo70428);
const smo70429 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70429.setAttribute('id', 'smo70429');
smo70453v0ar.push(smo70429);
const smo70430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70430.setAttribute('id', 'smo70430');
smo70453v0ar.push(smo70430);
const smo70431 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70431.setAttribute('id', 'smo70431');
smo70453v0ar.push(smo70431);
const smo70432 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo70432.setAttribute('id', 'smo70432');
smo70453v0ar.push(smo70432);
const smo70433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70433.setAttribute('id', 'smo70433');
smo70453v0ar.push(smo70433);
const smo70434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70434.setAttribute('id', 'smo70434');
smo70453v0ar.push(smo70434);
const smo70435 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70435.setAttribute('id', 'smo70435');
smo70453v0ar.push(smo70435);
const smo70436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo70436.setAttribute('id', 'smo70436');
smo70453v0ar.push(smo70436);
const smo70437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70437.setAttribute('id', 'smo70437');
smo70453v0ar.push(smo70437);
const smo70438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70438.setAttribute('id', 'smo70438');
smo70453v0ar.push(smo70438);
const smo70439 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70439.setAttribute('id', 'smo70439');
smo70453v0ar.push(smo70439);
smo70453v0.addTickables(smo70453v0ar)
fmtsmo7045365.joinVoices([smo70453v0]);
const fmtsmo7545665 = new VF.Formatter();
//
// voices and notes for stave 1 65
const smo75456v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75456v0ar = [];
const smo75427 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo75427.setAttribute('id', 'smo75427');
smo75456v0ar.push(smo75427);
const smo75428 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
smo75428.setAttribute('id', 'smo75428');
smo75456v0ar.push(smo75428);
const smo75429 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo75429.setAttribute('id', 'smo75429');
smo75456v0ar.push(smo75429);
const smo75430 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
smo75430.setAttribute('id', 'smo75430');
smo75456v0ar.push(smo75430);
const smo75431 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75431.setAttribute('id', 'smo75431');
smo75456v0ar.push(smo75431);
const smo75432 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
smo75432.setAttribute('id', 'smo75432');
smo75456v0ar.push(smo75432);
const smo75433 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo75433.setAttribute('id', 'smo75433');
smo75456v0ar.push(smo75433);
const smo75434 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
smo75434.setAttribute('id', 'smo75434');
smo75456v0ar.push(smo75434);
const smo75435 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo75435.setAttribute('id', 'smo75435');
smo75456v0ar.push(smo75435);
const smo75436 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
smo75436.setAttribute('id', 'smo75436');
smo75456v0ar.push(smo75436);
const smo75437 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo75437.setAttribute('id', 'smo75437');
smo75456v0ar.push(smo75437);
const smo75438 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
smo75438.setAttribute('id', 'smo75438');
smo75456v0ar.push(smo75438);
const smo75439 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75439.setAttribute('id', 'smo75439');
smo75456v0ar.push(smo75439);
const smo75440 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
smo75440.setAttribute('id', 'smo75440');
smo75456v0ar.push(smo75440);
const smo75441 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo75441.setAttribute('id', 'smo75441');
smo75456v0ar.push(smo75441);
const smo75442 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
smo75442.setAttribute('id', 'smo75442');
smo75456v0ar.push(smo75442);
smo75456v0.addTickables(smo75456v0ar)
fmtsmo7545665.joinVoices([smo75456v0]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78607 = smo70424.getStemDirection();
smo70424.setStemDirection(dirsmo78607);
smo70425.setStemDirection(dirsmo78607);
smo70426.setStemDirection(dirsmo78607);
smo70427.setStemDirection(dirsmo78607);
const smo78607 = new VF.Beam([smo70424,smo70425,smo70426,smo70427]);
const dirsmo78608 = smo70428.getStemDirection();
smo70428.setStemDirection(dirsmo78608);
smo70429.setStemDirection(dirsmo78608);
smo70430.setStemDirection(dirsmo78608);
smo70431.setStemDirection(dirsmo78608);
const smo78608 = new VF.Beam([smo70428,smo70429,smo70430,smo70431]);
const dirsmo78609 = smo70432.getStemDirection();
smo70432.setStemDirection(dirsmo78609);
smo70433.setStemDirection(dirsmo78609);
smo70434.setStemDirection(dirsmo78609);
smo70435.setStemDirection(dirsmo78609);
const smo78609 = new VF.Beam([smo70432,smo70433,smo70434,smo70435]);
const dirsmo78610 = smo70436.getStemDirection();
smo70436.setStemDirection(dirsmo78610);
smo70437.setStemDirection(dirsmo78610);
smo70438.setStemDirection(dirsmo78610);
smo70439.setStemDirection(dirsmo78610);
const smo78610 = new VF.Beam([smo70436,smo70437,smo70438,smo70439]);
const dirsmo78613 = smo75427.getStemDirection();
smo75427.setStemDirection(dirsmo78613);
smo75428.setStemDirection(dirsmo78613);
smo75429.setStemDirection(dirsmo78613);
smo75430.setStemDirection(dirsmo78613);
const smo78613 = new VF.Beam([smo75427,smo75428,smo75429,smo75430]);
const dirsmo78614 = smo75431.getStemDirection();
smo75431.setStemDirection(dirsmo78614);
smo75432.setStemDirection(dirsmo78614);
smo75433.setStemDirection(dirsmo78614);
smo75434.setStemDirection(dirsmo78614);
const smo78614 = new VF.Beam([smo75431,smo75432,smo75433,smo75434]);
const dirsmo78615 = smo75435.getStemDirection();
smo75435.setStemDirection(dirsmo78615);
smo75436.setStemDirection(dirsmo78615);
smo75437.setStemDirection(dirsmo78615);
smo75438.setStemDirection(dirsmo78615);
const smo78615 = new VF.Beam([smo75435,smo75436,smo75437,smo75438]);
const dirsmo78616 = smo75439.getStemDirection();
smo75439.setStemDirection(dirsmo78616);
smo75440.setStemDirection(dirsmo78616);
smo75441.setStemDirection(dirsmo78616);
smo75442.setStemDirection(dirsmo78616);
const smo78616 = new VF.Beam([smo75439,smo75440,smo75441,smo75442]);
 
// formatting measures in staff group smo67190
fmtsmo7045365.format([smo70453v0,smo75456v0], 345);
const stavesmo70453 = new VF.Stave(557, 1962, 359);
stavesmo70453.setAttribute('id', 'stavesmo70453');
stavesmo70453.setBegBarType(VF.Barline.type.NONE);
stavesmo70453.setContext(context);
stavesmo70453.draw();
smo70453v0.draw(context, stavesmo70453);
smo78607.setContext(context);
smo78607.draw();
smo78608.setContext(context);
smo78608.draw();
smo78609.setContext(context);
smo78609.draw();
smo78610.setContext(context);
smo78610.draw();
const stavesmo75456 = new VF.Stave(557, 2051, 359);
stavesmo75456.setAttribute('id', 'stavesmo75456');
stavesmo75456.setBegBarType(VF.Barline.type.NONE);
stavesmo75456.setContext(context);
stavesmo75456.draw();
smo75456v0.draw(context, stavesmo75456);
smo78613.setContext(context);
smo78613.draw();
smo78614.setContext(context);
smo78614.draw();
smo78615.setContext(context);
smo78615.draw();
smo78616.setContext(context);
smo78616.draw();
const fmtsmo7048366 = new VF.Formatter();
//
// voices and notes for stave 0 66
const smo70483v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70483v0ar = [];
const smo70454 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/5/n"]}'))
smo70454.setAttribute('id', 'smo70454');
smo70483v0ar.push(smo70454);
const smo70455 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo70455.setAttribute('id', 'smo70455');
smo70483v0ar.push(smo70455);
const smo70456 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70456.setAttribute('id', 'smo70456');
smo70483v0ar.push(smo70456);
const smo70457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo70457.setAttribute('id', 'smo70457');
smo70483v0ar.push(smo70457);
const smo70458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo70458.setAttribute('id', 'smo70458');
smo70483v0ar.push(smo70458);
const smo70459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo70459.setAttribute('id', 'smo70459');
smo70483v0ar.push(smo70459);
const smo70460 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70460.setAttribute('id', 'smo70460');
smo70483v0ar.push(smo70460);
const smo70461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo70461.setAttribute('id', 'smo70461');
smo70483v0ar.push(smo70461);
const smo70462 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/5/n"]}'))
smo70462.setAttribute('id', 'smo70462');
smo70483v0ar.push(smo70462);
const smo70463 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo70463.setAttribute('id', 'smo70463');
smo70483v0ar.push(smo70463);
const smo70464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70464.setAttribute('id', 'smo70464');
smo70483v0ar.push(smo70464);
const smo70465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo70465.setAttribute('id', 'smo70465');
smo70483v0ar.push(smo70465);
const smo70466 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo70466.setAttribute('id', 'smo70466');
smo70483v0ar.push(smo70466);
const smo70467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo70467.setAttribute('id', 'smo70467');
smo70483v0ar.push(smo70467);
const smo70468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70468.setAttribute('id', 'smo70468');
smo70483v0ar.push(smo70468);
const smo70469 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo70469.setAttribute('id', 'smo70469');
smo70483v0ar.push(smo70469);
smo70483v0.addTickables(smo70483v0ar)
fmtsmo7048366.joinVoices([smo70483v0]);
const fmtsmo7548666 = new VF.Formatter();
//
// voices and notes for stave 1 66
const smo75486v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75486v0ar = [];
const smo75457 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo75457.setAttribute('id', 'smo75457');
smo75486v0ar.push(smo75457);
const smo75458 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo75458.setAttribute('id', 'smo75458');
smo75486v0ar.push(smo75458);
const smo75459 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo75459.setAttribute('id', 'smo75459');
smo75486v0ar.push(smo75459);
const smo75460 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo75460.setAttribute('id', 'smo75460');
smo75486v0ar.push(smo75460);
const smo75461 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo75461.setAttribute('id', 'smo75461');
smo75486v0ar.push(smo75461);
const smo75462 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo75462.setAttribute('id', 'smo75462');
smo75486v0ar.push(smo75462);
const smo75463 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo75463.setAttribute('id', 'smo75463');
smo75486v0ar.push(smo75463);
const smo75464 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo75464.setAttribute('id', 'smo75464');
smo75486v0ar.push(smo75464);
const smo75465 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo75465.setAttribute('id', 'smo75465');
smo75486v0ar.push(smo75465);
const smo75466 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo75466.setAttribute('id', 'smo75466');
smo75486v0ar.push(smo75466);
const smo75467 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo75467.setAttribute('id', 'smo75467');
smo75486v0ar.push(smo75467);
const smo75468 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo75468.setAttribute('id', 'smo75468');
smo75486v0ar.push(smo75468);
const smo75469 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo75469.setAttribute('id', 'smo75469');
smo75486v0ar.push(smo75469);
const smo75470 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo75470.setAttribute('id', 'smo75470');
smo75486v0ar.push(smo75470);
const smo75471 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo75471.setAttribute('id', 'smo75471');
smo75486v0ar.push(smo75471);
const smo75472 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo75472.setAttribute('id', 'smo75472');
smo75486v0ar.push(smo75472);
smo75486v0.addTickables(smo75486v0ar)
fmtsmo7548666.joinVoices([smo75486v0]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78619 = smo70454.getStemDirection();
smo70454.setStemDirection(dirsmo78619);
smo70455.setStemDirection(dirsmo78619);
smo70456.setStemDirection(dirsmo78619);
smo70457.setStemDirection(dirsmo78619);
const smo78619 = new VF.Beam([smo70454,smo70455,smo70456,smo70457]);
const dirsmo78620 = smo70458.getStemDirection();
smo70458.setStemDirection(dirsmo78620);
smo70459.setStemDirection(dirsmo78620);
smo70460.setStemDirection(dirsmo78620);
smo70461.setStemDirection(dirsmo78620);
const smo78620 = new VF.Beam([smo70458,smo70459,smo70460,smo70461]);
const dirsmo78621 = smo70462.getStemDirection();
smo70462.setStemDirection(dirsmo78621);
smo70463.setStemDirection(dirsmo78621);
smo70464.setStemDirection(dirsmo78621);
smo70465.setStemDirection(dirsmo78621);
const smo78621 = new VF.Beam([smo70462,smo70463,smo70464,smo70465]);
const dirsmo78622 = smo70466.getStemDirection();
smo70466.setStemDirection(dirsmo78622);
smo70467.setStemDirection(dirsmo78622);
smo70468.setStemDirection(dirsmo78622);
smo70469.setStemDirection(dirsmo78622);
const smo78622 = new VF.Beam([smo70466,smo70467,smo70468,smo70469]);
const dirsmo78625 = smo75457.getStemDirection();
smo75457.setStemDirection(dirsmo78625);
smo75458.setStemDirection(dirsmo78625);
smo75459.setStemDirection(dirsmo78625);
smo75460.setStemDirection(dirsmo78625);
const smo78625 = new VF.Beam([smo75457,smo75458,smo75459,smo75460]);
const dirsmo78626 = smo75461.getStemDirection();
smo75461.setStemDirection(dirsmo78626);
smo75462.setStemDirection(dirsmo78626);
smo75463.setStemDirection(dirsmo78626);
smo75464.setStemDirection(dirsmo78626);
const smo78626 = new VF.Beam([smo75461,smo75462,smo75463,smo75464]);
const dirsmo78627 = smo75465.getStemDirection();
smo75465.setStemDirection(dirsmo78627);
smo75466.setStemDirection(dirsmo78627);
smo75467.setStemDirection(dirsmo78627);
smo75468.setStemDirection(dirsmo78627);
const smo78627 = new VF.Beam([smo75465,smo75466,smo75467,smo75468]);
const dirsmo78628 = smo75469.getStemDirection();
smo75469.setStemDirection(dirsmo78628);
smo75470.setStemDirection(dirsmo78628);
smo75471.setStemDirection(dirsmo78628);
smo75472.setStemDirection(dirsmo78628);
const smo78628 = new VF.Beam([smo75469,smo75470,smo75471,smo75472]);
 
// formatting measures in staff group smo67190
fmtsmo7048366.format([smo70483v0,smo75486v0], 345);
const stavesmo70483 = new VF.Stave(916, 1962, 359);
stavesmo70483.setAttribute('id', 'stavesmo70483');
stavesmo70483.setBegBarType(VF.Barline.type.NONE);
stavesmo70483.setContext(context);
stavesmo70483.draw();
smo70483v0.draw(context, stavesmo70483);
smo78619.setContext(context);
smo78619.draw();
smo78620.setContext(context);
smo78620.draw();
smo78621.setContext(context);
smo78621.draw();
smo78622.setContext(context);
smo78622.draw();
const stavesmo75486 = new VF.Stave(916, 2051, 359);
stavesmo75486.setAttribute('id', 'stavesmo75486');
stavesmo75486.setBegBarType(VF.Barline.type.NONE);
stavesmo75486.setContext(context);
stavesmo75486.draw();
smo75486v0.draw(context, stavesmo75486);
smo78625.setContext(context);
smo78625.draw();
smo78626.setContext(context);
smo78626.draw();
smo78627.setContext(context);
smo78627.draw();
smo78628.setContext(context);
smo78628.draw();
const fmtsmo7051367 = new VF.Formatter();
//
// voices and notes for stave 0 67
const smo70513v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70513v0ar = [];
const smo70484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo70484.setAttribute('id', 'smo70484');
smo70513v0ar.push(smo70484);
const smo70485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo70485.setAttribute('id', 'smo70485');
const smo704850acc = new VF.Accidental('#');
smo70485.addModifier(smo704850acc, 0);
smo70513v0ar.push(smo70485);
const smo70486 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo70486.setAttribute('id', 'smo70486');
const smo704860acc = new VF.Accidental('n');
smo70486.addModifier(smo704860acc, 0);
smo70513v0ar.push(smo70486);
const smo70487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo70487.setAttribute('id', 'smo70487');
smo70513v0ar.push(smo70487);
const smo70488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo70488.setAttribute('id', 'smo70488');
smo70513v0ar.push(smo70488);
const smo70489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo70489.setAttribute('id', 'smo70489');
smo70513v0ar.push(smo70489);
const smo70490 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo70490.setAttribute('id', 'smo70490');
smo70513v0ar.push(smo70490);
const smo70491 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo70491.setAttribute('id', 'smo70491');
smo70513v0ar.push(smo70491);
const smo70492 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo70492.setAttribute('id', 'smo70492');
smo70513v0ar.push(smo70492);
const smo70493 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo70493.setAttribute('id', 'smo70493');
smo70513v0ar.push(smo70493);
const smo70494 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo70494.setAttribute('id', 'smo70494');
smo70513v0ar.push(smo70494);
const smo70495 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo70495.setAttribute('id', 'smo70495');
smo70513v0ar.push(smo70495);
const smo70496 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo70496.setAttribute('id', 'smo70496');
smo70513v0ar.push(smo70496);
const smo70497 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo70497.setAttribute('id', 'smo70497');
smo70513v0ar.push(smo70497);
const smo70498 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo70498.setAttribute('id', 'smo70498');
smo70513v0ar.push(smo70498);
const smo70499 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo70499.setAttribute('id', 'smo70499');
smo70513v0ar.push(smo70499);
smo70513v0.addTickables(smo70513v0ar)
fmtsmo7051367.joinVoices([smo70513v0]);
const fmtsmo7551667 = new VF.Formatter();
//
// voices and notes for stave 1 67
const smo75516v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75516v0ar = [];
const smo75487 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo75487.setAttribute('id', 'smo75487');
smo75516v0ar.push(smo75487);
const smo75488 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo75488.setAttribute('id', 'smo75488');
const smo754880acc = new VF.Accidental('n');
smo75488.addModifier(smo754880acc, 0);
smo75516v0ar.push(smo75488);
const smo75489 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75489.setAttribute('id', 'smo75489');
smo75516v0ar.push(smo75489);
const smo75490 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo75490.setAttribute('id', 'smo75490');
smo75516v0ar.push(smo75490);
const smo75491 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo75491.setAttribute('id', 'smo75491');
const smo754910acc = new VF.Accidental('#');
smo75491.addModifier(smo754910acc, 0);
smo75516v0ar.push(smo75491);
const smo75492 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo75492.setAttribute('id', 'smo75492');
smo75516v0ar.push(smo75492);
const smo75493 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75493.setAttribute('id', 'smo75493');
smo75516v0ar.push(smo75493);
const smo75494 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo75494.setAttribute('id', 'smo75494');
smo75516v0ar.push(smo75494);
const smo75495 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo75495.setAttribute('id', 'smo75495');
smo75516v0ar.push(smo75495);
const smo75496 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo75496.setAttribute('id', 'smo75496');
smo75516v0ar.push(smo75496);
const smo75497 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75497.setAttribute('id', 'smo75497');
smo75516v0ar.push(smo75497);
const smo75498 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo75498.setAttribute('id', 'smo75498');
smo75516v0ar.push(smo75498);
const smo75499 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo75499.setAttribute('id', 'smo75499');
smo75516v0ar.push(smo75499);
const smo75500 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo75500.setAttribute('id', 'smo75500');
smo75516v0ar.push(smo75500);
const smo75501 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75501.setAttribute('id', 'smo75501');
smo75516v0ar.push(smo75501);
const smo75502 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo75502.setAttribute('id', 'smo75502');
smo75516v0ar.push(smo75502);
smo75516v0.addTickables(smo75516v0ar)
fmtsmo7551667.joinVoices([smo75516v0]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78631 = smo70484.getStemDirection();
smo70484.setStemDirection(dirsmo78631);
smo70485.setStemDirection(dirsmo78631);
smo70486.setStemDirection(dirsmo78631);
smo70487.setStemDirection(dirsmo78631);
const smo78631 = new VF.Beam([smo70484,smo70485,smo70486,smo70487]);
const dirsmo78632 = smo70488.getStemDirection();
smo70488.setStemDirection(dirsmo78632);
smo70489.setStemDirection(dirsmo78632);
smo70490.setStemDirection(dirsmo78632);
smo70491.setStemDirection(dirsmo78632);
const smo78632 = new VF.Beam([smo70488,smo70489,smo70490,smo70491]);
const dirsmo78633 = smo70492.getStemDirection();
smo70492.setStemDirection(dirsmo78633);
smo70493.setStemDirection(dirsmo78633);
smo70494.setStemDirection(dirsmo78633);
smo70495.setStemDirection(dirsmo78633);
const smo78633 = new VF.Beam([smo70492,smo70493,smo70494,smo70495]);
const dirsmo78634 = smo70496.getStemDirection();
smo70496.setStemDirection(dirsmo78634);
smo70497.setStemDirection(dirsmo78634);
smo70498.setStemDirection(dirsmo78634);
smo70499.setStemDirection(dirsmo78634);
const smo78634 = new VF.Beam([smo70496,smo70497,smo70498,smo70499]);
const dirsmo78637 = smo75487.getStemDirection();
smo75487.setStemDirection(dirsmo78637);
smo75488.setStemDirection(dirsmo78637);
smo75489.setStemDirection(dirsmo78637);
smo75490.setStemDirection(dirsmo78637);
const smo78637 = new VF.Beam([smo75487,smo75488,smo75489,smo75490]);
const dirsmo78638 = smo75491.getStemDirection();
smo75491.setStemDirection(dirsmo78638);
smo75492.setStemDirection(dirsmo78638);
smo75493.setStemDirection(dirsmo78638);
smo75494.setStemDirection(dirsmo78638);
const smo78638 = new VF.Beam([smo75491,smo75492,smo75493,smo75494]);
const dirsmo78639 = smo75495.getStemDirection();
smo75495.setStemDirection(dirsmo78639);
smo75496.setStemDirection(dirsmo78639);
smo75497.setStemDirection(dirsmo78639);
smo75498.setStemDirection(dirsmo78639);
const smo78639 = new VF.Beam([smo75495,smo75496,smo75497,smo75498]);
const dirsmo78640 = smo75499.getStemDirection();
smo75499.setStemDirection(dirsmo78640);
smo75500.setStemDirection(dirsmo78640);
smo75501.setStemDirection(dirsmo78640);
smo75502.setStemDirection(dirsmo78640);
const smo78640 = new VF.Beam([smo75499,smo75500,smo75501,smo75502]);
 
// formatting measures in staff group smo67190
fmtsmo7051367.format([smo70513v0,smo75516v0], 519);
const stavesmo70513 = new VF.Stave(1275, 1962, 533);
stavesmo70513.setAttribute('id', 'stavesmo70513');
stavesmo70513.setBegBarType(VF.Barline.type.NONE);
stavesmo70513.setContext(context);
stavesmo70513.draw();
smo70513v0.draw(context, stavesmo70513);
smo78631.setContext(context);
smo78631.draw();
smo78632.setContext(context);
smo78632.draw();
smo78633.setContext(context);
smo78633.draw();
smo78634.setContext(context);
smo78634.draw();
const stavesmo75516 = new VF.Stave(1275, 2051, 533);
stavesmo75516.setAttribute('id', 'stavesmo75516');
stavesmo75516.setBegBarType(VF.Barline.type.NONE);
stavesmo75516.setContext(context);
stavesmo75516.draw();
smo75516v0.draw(context, stavesmo75516);
smo78637.setContext(context);
smo78637.draw();
smo78638.setContext(context);
smo78638.draw();
smo78639.setContext(context);
smo78639.draw();
smo78640.setContext(context);
smo78640.draw();
const rightsmo67190stavesmo705131 = new VF.StaveConnector(stavesmo70513, stavesmo75516).setType(0);
rightsmo67190stavesmo705131.setContext(context).draw();
const fmtsmo7054368 = new VF.Formatter();
//
// voices and notes for stave 0 68
const smo70543v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70543v0ar = [];
const smo70514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo70514.setAttribute('id', 'smo70514');
smo70543v0ar.push(smo70514);
const smo70515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70515.setAttribute('id', 'smo70515');
smo70543v0ar.push(smo70515);
const smo70516 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo70516.setAttribute('id', 'smo70516');
const smo705160acc = new VF.Accidental('#');
smo70516.addModifier(smo705160acc, 0);
smo70543v0ar.push(smo70516);
const smo70517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70517.setAttribute('id', 'smo70517');
smo70543v0ar.push(smo70517);
const smo70518 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo70518.setAttribute('id', 'smo70518');
smo70543v0ar.push(smo70518);
const smo70519 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70519.setAttribute('id', 'smo70519');
smo70543v0ar.push(smo70519);
const smo70520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo70520.setAttribute('id', 'smo70520');
smo70543v0ar.push(smo70520);
const smo70521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70521.setAttribute('id', 'smo70521');
smo70543v0ar.push(smo70521);
const smo70522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo70522.setAttribute('id', 'smo70522');
smo70543v0ar.push(smo70522);
const smo70523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70523.setAttribute('id', 'smo70523');
smo70543v0ar.push(smo70523);
const smo70524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo70524.setAttribute('id', 'smo70524');
smo70543v0ar.push(smo70524);
const smo70525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70525.setAttribute('id', 'smo70525');
smo70543v0ar.push(smo70525);
const smo70526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo70526.setAttribute('id', 'smo70526');
smo70543v0ar.push(smo70526);
const smo70527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70527.setAttribute('id', 'smo70527');
smo70543v0ar.push(smo70527);
const smo70528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo70528.setAttribute('id', 'smo70528');
smo70543v0ar.push(smo70528);
const smo70529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo70529.setAttribute('id', 'smo70529');
smo70543v0ar.push(smo70529);
smo70543v0.addTickables(smo70543v0ar)
fmtsmo7054368.joinVoices([smo70543v0]);
const fmtsmo7554668 = new VF.Formatter();
//
// voices and notes for stave 1 68
const smo75546v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75546v0ar = [];
const smo75517 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/2/n"]}'))
smo75517.setAttribute('id', 'smo75517');
smo75546v0ar.push(smo75517);
const smo75518 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo75518.setAttribute('id', 'smo75518');
smo75546v0ar.push(smo75518);
const smo75519 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo75519.setAttribute('id', 'smo75519');
const smo755190acc = new VF.Accidental('n');
smo75519.addModifier(smo755190acc, 0);
smo75546v0ar.push(smo75519);
const smo75520 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo75520.setAttribute('id', 'smo75520');
smo75546v0ar.push(smo75520);
const smo75521 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75521.setAttribute('id', 'smo75521');
smo75546v0ar.push(smo75521);
const smo75522 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo75522.setAttribute('id', 'smo75522');
smo75546v0ar.push(smo75522);
const smo75523 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo75523.setAttribute('id', 'smo75523');
smo75546v0ar.push(smo75523);
const smo75524 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo75524.setAttribute('id', 'smo75524');
smo75546v0ar.push(smo75524);
const smo75525 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/2/n"]}'))
smo75525.setAttribute('id', 'smo75525');
smo75546v0ar.push(smo75525);
const smo75526 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo75526.setAttribute('id', 'smo75526');
smo75546v0ar.push(smo75526);
const smo75527 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo75527.setAttribute('id', 'smo75527');
smo75546v0ar.push(smo75527);
const smo75528 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo75528.setAttribute('id', 'smo75528');
smo75546v0ar.push(smo75528);
const smo75529 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75529.setAttribute('id', 'smo75529');
smo75546v0ar.push(smo75529);
const smo75530 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo75530.setAttribute('id', 'smo75530');
smo75546v0ar.push(smo75530);
const smo75531 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo75531.setAttribute('id', 'smo75531');
smo75546v0ar.push(smo75531);
const smo75532 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo75532.setAttribute('id', 'smo75532');
smo75546v0ar.push(smo75532);
smo75546v0.addTickables(smo75546v0ar)
fmtsmo7554668.joinVoices([smo75546v0]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78655 = smo70514.getStemDirection();
smo70514.setStemDirection(dirsmo78655);
smo70515.setStemDirection(dirsmo78655);
smo70516.setStemDirection(dirsmo78655);
smo70517.setStemDirection(dirsmo78655);
const smo78655 = new VF.Beam([smo70514,smo70515,smo70516,smo70517]);
const dirsmo78656 = smo70518.getStemDirection();
smo70518.setStemDirection(dirsmo78656);
smo70519.setStemDirection(dirsmo78656);
smo70520.setStemDirection(dirsmo78656);
smo70521.setStemDirection(dirsmo78656);
const smo78656 = new VF.Beam([smo70518,smo70519,smo70520,smo70521]);
const dirsmo78657 = smo70522.getStemDirection();
smo70522.setStemDirection(dirsmo78657);
smo70523.setStemDirection(dirsmo78657);
smo70524.setStemDirection(dirsmo78657);
smo70525.setStemDirection(dirsmo78657);
const smo78657 = new VF.Beam([smo70522,smo70523,smo70524,smo70525]);
const dirsmo78658 = smo70526.getStemDirection();
smo70526.setStemDirection(dirsmo78658);
smo70527.setStemDirection(dirsmo78658);
smo70528.setStemDirection(dirsmo78658);
smo70529.setStemDirection(dirsmo78658);
const smo78658 = new VF.Beam([smo70526,smo70527,smo70528,smo70529]);
const dirsmo78661 = smo75517.getStemDirection();
smo75517.setStemDirection(dirsmo78661);
smo75518.setStemDirection(dirsmo78661);
smo75519.setStemDirection(dirsmo78661);
smo75520.setStemDirection(dirsmo78661);
const smo78661 = new VF.Beam([smo75517,smo75518,smo75519,smo75520]);
const dirsmo78662 = smo75521.getStemDirection();
smo75521.setStemDirection(dirsmo78662);
smo75522.setStemDirection(dirsmo78662);
smo75523.setStemDirection(dirsmo78662);
smo75524.setStemDirection(dirsmo78662);
const smo78662 = new VF.Beam([smo75521,smo75522,smo75523,smo75524]);
const dirsmo78663 = smo75525.getStemDirection();
smo75525.setStemDirection(dirsmo78663);
smo75526.setStemDirection(dirsmo78663);
smo75527.setStemDirection(dirsmo78663);
smo75528.setStemDirection(dirsmo78663);
const smo78663 = new VF.Beam([smo75525,smo75526,smo75527,smo75528]);
const dirsmo78664 = smo75529.getStemDirection();
smo75529.setStemDirection(dirsmo78664);
smo75530.setStemDirection(dirsmo78664);
smo75531.setStemDirection(dirsmo78664);
smo75532.setStemDirection(dirsmo78664);
const smo78664 = new VF.Beam([smo75529,smo75530,smo75531,smo75532]);
 
// formatting measures in staff group smo67190
fmtsmo7054368.format([smo70543v0,smo75546v0], 409);
const stavesmo70543 = new VF.Stave(90, 2180, 506);
stavesmo70543.setAttribute('id', 'stavesmo70543');
stavesmo70543.setBegBarType(1);
stavesmo70543.addClef('treble');
const keysmo70543 = new VF.KeySignature('Eb');
keysmo70543.addToStave(stavesmo70543);
stavesmo70543.setContext(context);
stavesmo70543.draw();
smo70543v0.draw(context, stavesmo70543);
smo78655.setContext(context);
smo78655.draw();
smo78656.setContext(context);
smo78656.draw();
smo78657.setContext(context);
smo78657.draw();
smo78658.setContext(context);
smo78658.draw();
const stavesmo75546 = new VF.Stave(90, 2270, 506);
stavesmo75546.setAttribute('id', 'stavesmo75546');
stavesmo75546.setBegBarType(1);
stavesmo75546.addClef('bass');
const keysmo75546 = new VF.KeySignature('Eb');
keysmo75546.addToStave(stavesmo75546);
stavesmo75546.setContext(context);
stavesmo75546.draw();
smo75546v0.draw(context, stavesmo75546);
smo78661.setContext(context);
smo78661.draw();
smo78662.setContext(context);
smo78662.draw();
smo78663.setContext(context);
smo78663.draw();
smo78664.setContext(context);
smo78664.draw();
const leftsmo67190stavesmo705431 = new VF.StaveConnector(stavesmo70543, stavesmo75546).setType(3);
leftsmo67190stavesmo705431.setContext(context).draw();
const fmtsmo7057369 = new VF.Formatter();
//
// voices and notes for stave 0 69
const smo70573v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70573v0ar = [];
const smo70544 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo70544.setAttribute('id', 'smo70544');
smo70573v0ar.push(smo70544);
const smo70545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo70545.setAttribute('id', 'smo70545');
const smo705450acc = new VF.Accidental('n');
smo70545.addModifier(smo705450acc, 0);
smo70573v0ar.push(smo70545);
const smo70546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo70546.setAttribute('id', 'smo70546');
smo70573v0ar.push(smo70546);
const smo70547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo70547.setAttribute('id', 'smo70547');
smo70573v0ar.push(smo70547);
const smo70548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo70548.setAttribute('id', 'smo70548');
smo70573v0ar.push(smo70548);
const smo70549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo70549.setAttribute('id', 'smo70549');
smo70573v0ar.push(smo70549);
const smo70550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo70550.setAttribute('id', 'smo70550');
smo70573v0ar.push(smo70550);
const smo70551 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo70551.setAttribute('id', 'smo70551');
smo70573v0ar.push(smo70551);
const smo70552 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo70552.setAttribute('id', 'smo70552');
smo70573v0ar.push(smo70552);
const smo70553 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo70553.setAttribute('id', 'smo70553');
smo70573v0ar.push(smo70553);
const smo70554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo70554.setAttribute('id', 'smo70554');
smo70573v0ar.push(smo70554);
const smo70555 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo70555.setAttribute('id', 'smo70555');
smo70573v0ar.push(smo70555);
const smo70556 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo70556.setAttribute('id', 'smo70556');
smo70573v0ar.push(smo70556);
const smo70557 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo70557.setAttribute('id', 'smo70557');
smo70573v0ar.push(smo70557);
const smo70558 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo70558.setAttribute('id', 'smo70558');
smo70573v0ar.push(smo70558);
const smo70559 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo70559.setAttribute('id', 'smo70559');
smo70573v0ar.push(smo70559);
smo70573v0.addTickables(smo70573v0ar)
fmtsmo7057369.joinVoices([smo70573v0]);
const fmtsmo7557669 = new VF.Formatter();
//
// voices and notes for stave 1 69
const smo75576v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75576v0ar = [];
const smo75547 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/2/n"]}'))
smo75547.setAttribute('id', 'smo75547');
smo75576v0ar.push(smo75547);
const smo75548 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75548.setAttribute('id', 'smo75548');
smo75576v0ar.push(smo75548);
const smo75549 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo75549.setAttribute('id', 'smo75549');
smo75576v0ar.push(smo75549);
const smo75550 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75550.setAttribute('id', 'smo75550');
smo75576v0ar.push(smo75550);
const smo75551 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo75551.setAttribute('id', 'smo75551');
const smo755510acc = new VF.Accidental('n');
smo75551.addModifier(smo755510acc, 0);
smo75576v0ar.push(smo75551);
const smo75552 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75552.setAttribute('id', 'smo75552');
smo75576v0ar.push(smo75552);
const smo75553 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo75553.setAttribute('id', 'smo75553');
smo75576v0ar.push(smo75553);
const smo75554 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75554.setAttribute('id', 'smo75554');
smo75576v0ar.push(smo75554);
const smo75555 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/2/n"]}'))
smo75555.setAttribute('id', 'smo75555');
smo75576v0ar.push(smo75555);
const smo75556 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75556.setAttribute('id', 'smo75556');
smo75576v0ar.push(smo75556);
const smo75557 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo75557.setAttribute('id', 'smo75557');
smo75576v0ar.push(smo75557);
const smo75558 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75558.setAttribute('id', 'smo75558');
smo75576v0ar.push(smo75558);
const smo75559 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo75559.setAttribute('id', 'smo75559');
smo75576v0ar.push(smo75559);
const smo75560 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75560.setAttribute('id', 'smo75560');
smo75576v0ar.push(smo75560);
const smo75561 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo75561.setAttribute('id', 'smo75561');
smo75576v0ar.push(smo75561);
const smo75562 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75562.setAttribute('id', 'smo75562');
smo75576v0ar.push(smo75562);
smo75576v0.addTickables(smo75576v0ar)
fmtsmo7557669.joinVoices([smo75576v0]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78667 = smo70544.getStemDirection();
smo70544.setStemDirection(dirsmo78667);
smo70545.setStemDirection(dirsmo78667);
smo70546.setStemDirection(dirsmo78667);
smo70547.setStemDirection(dirsmo78667);
const smo78667 = new VF.Beam([smo70544,smo70545,smo70546,smo70547]);
const dirsmo78668 = smo70548.getStemDirection();
smo70548.setStemDirection(dirsmo78668);
smo70549.setStemDirection(dirsmo78668);
smo70550.setStemDirection(dirsmo78668);
smo70551.setStemDirection(dirsmo78668);
const smo78668 = new VF.Beam([smo70548,smo70549,smo70550,smo70551]);
const dirsmo78669 = smo70552.getStemDirection();
smo70552.setStemDirection(dirsmo78669);
smo70553.setStemDirection(dirsmo78669);
smo70554.setStemDirection(dirsmo78669);
smo70555.setStemDirection(dirsmo78669);
const smo78669 = new VF.Beam([smo70552,smo70553,smo70554,smo70555]);
const dirsmo78670 = smo70556.getStemDirection();
smo70556.setStemDirection(dirsmo78670);
smo70557.setStemDirection(dirsmo78670);
smo70558.setStemDirection(dirsmo78670);
smo70559.setStemDirection(dirsmo78670);
const smo78670 = new VF.Beam([smo70556,smo70557,smo70558,smo70559]);
const dirsmo78673 = smo75547.getStemDirection();
smo75547.setStemDirection(dirsmo78673);
smo75548.setStemDirection(dirsmo78673);
smo75549.setStemDirection(dirsmo78673);
smo75550.setStemDirection(dirsmo78673);
const smo78673 = new VF.Beam([smo75547,smo75548,smo75549,smo75550]);
const dirsmo78674 = smo75551.getStemDirection();
smo75551.setStemDirection(dirsmo78674);
smo75552.setStemDirection(dirsmo78674);
smo75553.setStemDirection(dirsmo78674);
smo75554.setStemDirection(dirsmo78674);
const smo78674 = new VF.Beam([smo75551,smo75552,smo75553,smo75554]);
const dirsmo78675 = smo75555.getStemDirection();
smo75555.setStemDirection(dirsmo78675);
smo75556.setStemDirection(dirsmo78675);
smo75557.setStemDirection(dirsmo78675);
smo75558.setStemDirection(dirsmo78675);
const smo78675 = new VF.Beam([smo75555,smo75556,smo75557,smo75558]);
const dirsmo78676 = smo75559.getStemDirection();
smo75559.setStemDirection(dirsmo78676);
smo75560.setStemDirection(dirsmo78676);
smo75561.setStemDirection(dirsmo78676);
smo75562.setStemDirection(dirsmo78676);
const smo78676 = new VF.Beam([smo75559,smo75560,smo75561,smo75562]);
 
// formatting measures in staff group smo67190
fmtsmo7057369.format([smo70573v0,smo75576v0], 440);
const stavesmo70573 = new VF.Stave(596, 2180, 454);
stavesmo70573.setAttribute('id', 'stavesmo70573');
stavesmo70573.setBegBarType(VF.Barline.type.NONE);
stavesmo70573.setContext(context);
stavesmo70573.draw();
smo70573v0.draw(context, stavesmo70573);
smo78667.setContext(context);
smo78667.draw();
smo78668.setContext(context);
smo78668.draw();
smo78669.setContext(context);
smo78669.draw();
smo78670.setContext(context);
smo78670.draw();
const stavesmo75576 = new VF.Stave(596, 2270, 454);
stavesmo75576.setAttribute('id', 'stavesmo75576');
stavesmo75576.setBegBarType(VF.Barline.type.NONE);
stavesmo75576.setContext(context);
stavesmo75576.draw();
smo75576v0.draw(context, stavesmo75576);
smo78673.setContext(context);
smo78673.draw();
smo78674.setContext(context);
smo78674.draw();
smo78675.setContext(context);
smo78675.draw();
smo78676.setContext(context);
smo78676.draw();
const fmtsmo7060370 = new VF.Formatter();
//
// voices and notes for stave 0 70
const smo70603v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70603v0ar = [];
const smo70574 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo70574.setAttribute('id', 'smo70574');
smo70603v0ar.push(smo70574);
const smo70575 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70575.setAttribute('id', 'smo70575');
smo70603v0ar.push(smo70575);
const smo70576 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo70576.setAttribute('id', 'smo70576');
const smo705760acc = new VF.Accidental('n');
smo70576.addModifier(smo705760acc, 0);
smo70603v0ar.push(smo70576);
const smo70577 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70577.setAttribute('id', 'smo70577');
smo70603v0ar.push(smo70577);
const smo70578 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo70578.setAttribute('id', 'smo70578');
smo70603v0ar.push(smo70578);
const smo70579 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70579.setAttribute('id', 'smo70579');
smo70603v0ar.push(smo70579);
const smo70580 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo70580.setAttribute('id', 'smo70580');
smo70603v0ar.push(smo70580);
const smo70581 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70581.setAttribute('id', 'smo70581');
smo70603v0ar.push(smo70581);
const smo70582 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo70582.setAttribute('id', 'smo70582');
smo70603v0ar.push(smo70582);
const smo70583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70583.setAttribute('id', 'smo70583');
smo70603v0ar.push(smo70583);
const smo70584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo70584.setAttribute('id', 'smo70584');
smo70603v0ar.push(smo70584);
const smo70585 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70585.setAttribute('id', 'smo70585');
smo70603v0ar.push(smo70585);
const smo70586 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo70586.setAttribute('id', 'smo70586');
smo70603v0ar.push(smo70586);
const smo70587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70587.setAttribute('id', 'smo70587');
smo70603v0ar.push(smo70587);
const smo70588 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo70588.setAttribute('id', 'smo70588');
smo70603v0ar.push(smo70588);
const smo70589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70589.setAttribute('id', 'smo70589');
smo70603v0ar.push(smo70589);
smo70603v0.addTickables(smo70603v0ar)
fmtsmo7060370.joinVoices([smo70603v0]);
const fmtsmo7560670 = new VF.Formatter();
//
// voices and notes for stave 1 70
const smo75606v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75606v0ar = [];
const smo75577 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/2/n"]}'))
smo75577.setAttribute('id', 'smo75577');
smo75606v0ar.push(smo75577);
const smo75578 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo75578.setAttribute('id', 'smo75578');
smo75606v0ar.push(smo75578);
const smo75579 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75579.setAttribute('id', 'smo75579');
smo75606v0ar.push(smo75579);
const smo75580 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo75580.setAttribute('id', 'smo75580');
smo75606v0ar.push(smo75580);
const smo75581 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo75581.setAttribute('id', 'smo75581');
smo75606v0ar.push(smo75581);
const smo75582 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo75582.setAttribute('id', 'smo75582');
smo75606v0ar.push(smo75582);
const smo75583 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75583.setAttribute('id', 'smo75583');
smo75606v0ar.push(smo75583);
const smo75584 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo75584.setAttribute('id', 'smo75584');
smo75606v0ar.push(smo75584);
const smo75585 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/2/n"]}'))
smo75585.setAttribute('id', 'smo75585');
smo75606v0ar.push(smo75585);
const smo75586 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo75586.setAttribute('id', 'smo75586');
smo75606v0ar.push(smo75586);
const smo75587 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75587.setAttribute('id', 'smo75587');
smo75606v0ar.push(smo75587);
const smo75588 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo75588.setAttribute('id', 'smo75588');
smo75606v0ar.push(smo75588);
const smo75589 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo75589.setAttribute('id', 'smo75589');
smo75606v0ar.push(smo75589);
const smo75590 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo75590.setAttribute('id', 'smo75590');
smo75606v0ar.push(smo75590);
const smo75591 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo75591.setAttribute('id', 'smo75591');
smo75606v0ar.push(smo75591);
const smo75592 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo75592.setAttribute('id', 'smo75592');
smo75606v0ar.push(smo75592);
smo75606v0.addTickables(smo75606v0ar)
fmtsmo7560670.joinVoices([smo75606v0]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78679 = smo70574.getStemDirection();
smo70574.setStemDirection(dirsmo78679);
smo70575.setStemDirection(dirsmo78679);
smo70576.setStemDirection(dirsmo78679);
smo70577.setStemDirection(dirsmo78679);
const smo78679 = new VF.Beam([smo70574,smo70575,smo70576,smo70577]);
const dirsmo78680 = smo70578.getStemDirection();
smo70578.setStemDirection(dirsmo78680);
smo70579.setStemDirection(dirsmo78680);
smo70580.setStemDirection(dirsmo78680);
smo70581.setStemDirection(dirsmo78680);
const smo78680 = new VF.Beam([smo70578,smo70579,smo70580,smo70581]);
const dirsmo78681 = smo70582.getStemDirection();
smo70582.setStemDirection(dirsmo78681);
smo70583.setStemDirection(dirsmo78681);
smo70584.setStemDirection(dirsmo78681);
smo70585.setStemDirection(dirsmo78681);
const smo78681 = new VF.Beam([smo70582,smo70583,smo70584,smo70585]);
const dirsmo78682 = smo70586.getStemDirection();
smo70586.setStemDirection(dirsmo78682);
smo70587.setStemDirection(dirsmo78682);
smo70588.setStemDirection(dirsmo78682);
smo70589.setStemDirection(dirsmo78682);
const smo78682 = new VF.Beam([smo70586,smo70587,smo70588,smo70589]);
const dirsmo78685 = smo75577.getStemDirection();
smo75577.setStemDirection(dirsmo78685);
smo75578.setStemDirection(dirsmo78685);
smo75579.setStemDirection(dirsmo78685);
smo75580.setStemDirection(dirsmo78685);
const smo78685 = new VF.Beam([smo75577,smo75578,smo75579,smo75580]);
const dirsmo78686 = smo75581.getStemDirection();
smo75581.setStemDirection(dirsmo78686);
smo75582.setStemDirection(dirsmo78686);
smo75583.setStemDirection(dirsmo78686);
smo75584.setStemDirection(dirsmo78686);
const smo78686 = new VF.Beam([smo75581,smo75582,smo75583,smo75584]);
const dirsmo78687 = smo75585.getStemDirection();
smo75585.setStemDirection(dirsmo78687);
smo75586.setStemDirection(dirsmo78687);
smo75587.setStemDirection(dirsmo78687);
smo75588.setStemDirection(dirsmo78687);
const smo78687 = new VF.Beam([smo75585,smo75586,smo75587,smo75588]);
const dirsmo78688 = smo75589.getStemDirection();
smo75589.setStemDirection(dirsmo78688);
smo75590.setStemDirection(dirsmo78688);
smo75591.setStemDirection(dirsmo78688);
smo75592.setStemDirection(dirsmo78688);
const smo78688 = new VF.Beam([smo75589,smo75590,smo75591,smo75592]);
 
// formatting measures in staff group smo67190
fmtsmo7060370.format([smo70603v0,smo75606v0], 386);
const stavesmo70603 = new VF.Stave(1050, 2180, 400);
stavesmo70603.setAttribute('id', 'stavesmo70603');
stavesmo70603.setBegBarType(VF.Barline.type.NONE);
stavesmo70603.setContext(context);
stavesmo70603.draw();
smo70603v0.draw(context, stavesmo70603);
smo78679.setContext(context);
smo78679.draw();
smo78680.setContext(context);
smo78680.draw();
smo78681.setContext(context);
smo78681.draw();
smo78682.setContext(context);
smo78682.draw();
const stavesmo75606 = new VF.Stave(1050, 2270, 400);
stavesmo75606.setAttribute('id', 'stavesmo75606');
stavesmo75606.setBegBarType(VF.Barline.type.NONE);
stavesmo75606.setContext(context);
stavesmo75606.draw();
smo75606v0.draw(context, stavesmo75606);
smo78685.setContext(context);
smo78685.draw();
smo78686.setContext(context);
smo78686.draw();
smo78687.setContext(context);
smo78687.draw();
smo78688.setContext(context);
smo78688.draw();
const fmtsmo7063371 = new VF.Formatter();
//
// voices and notes for stave 0 71
const smo70633v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo70633v0ar = [];
const smo70604 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/4/n"]}'))
smo70604.setAttribute('id', 'smo70604');
smo70633v0ar.push(smo70604);
const smo70605 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70605.setAttribute('id', 'smo70605');
smo70633v0ar.push(smo70605);
const smo70606 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo70606.setAttribute('id', 'smo70606');
smo70633v0ar.push(smo70606);
const smo70607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70607.setAttribute('id', 'smo70607');
smo70633v0ar.push(smo70607);
const smo70608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo70608.setAttribute('id', 'smo70608');
smo70633v0ar.push(smo70608);
const smo70609 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70609.setAttribute('id', 'smo70609');
smo70633v0ar.push(smo70609);
const smo70610 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo70610.setAttribute('id', 'smo70610');
smo70633v0ar.push(smo70610);
const smo70611 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70611.setAttribute('id', 'smo70611');
smo70633v0ar.push(smo70611);
const smo70612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/4/n"]}'))
smo70612.setAttribute('id', 'smo70612');
smo70633v0ar.push(smo70612);
const smo70613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70613.setAttribute('id', 'smo70613');
smo70633v0ar.push(smo70613);
const smo70614 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo70614.setAttribute('id', 'smo70614');
smo70633v0ar.push(smo70614);
const smo70615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70615.setAttribute('id', 'smo70615');
smo70633v0ar.push(smo70615);
const smo70616 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo70616.setAttribute('id', 'smo70616');
smo70633v0ar.push(smo70616);
const smo70617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70617.setAttribute('id', 'smo70617');
smo70633v0ar.push(smo70617);
const smo70618 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo70618.setAttribute('id', 'smo70618');
smo70633v0ar.push(smo70618);
const smo70619 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo70619.setAttribute('id', 'smo70619');
smo70633v0ar.push(smo70619);
smo70633v0.addTickables(smo70633v0ar)
fmtsmo7063371.joinVoices([smo70633v0]);
const fmtsmo7563671 = new VF.Formatter();
//
// voices and notes for stave 1 71
const smo75636v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75636v0ar = [];
const smo75607 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/2/n"]}'))
smo75607.setAttribute('id', 'smo75607');
smo75636v0ar.push(smo75607);
const smo75608 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo75608.setAttribute('id', 'smo75608');
smo75636v0ar.push(smo75608);
const smo75609 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo75609.setAttribute('id', 'smo75609');
smo75636v0ar.push(smo75609);
const smo75610 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo75610.setAttribute('id', 'smo75610');
smo75636v0ar.push(smo75610);
const smo75611 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo75611.setAttribute('id', 'smo75611');
smo75636v0ar.push(smo75611);
const smo75612 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo75612.setAttribute('id', 'smo75612');
smo75636v0ar.push(smo75612);
const smo75613 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo75613.setAttribute('id', 'smo75613');
smo75636v0ar.push(smo75613);
const smo75614 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo75614.setAttribute('id', 'smo75614');
smo75636v0ar.push(smo75614);
const smo75615 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/2/n"]}'))
smo75615.setAttribute('id', 'smo75615');
smo75636v0ar.push(smo75615);
const smo75616 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo75616.setAttribute('id', 'smo75616');
smo75636v0ar.push(smo75616);
const smo75617 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo75617.setAttribute('id', 'smo75617');
smo75636v0ar.push(smo75617);
const smo75618 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo75618.setAttribute('id', 'smo75618');
smo75636v0ar.push(smo75618);
const smo75619 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo75619.setAttribute('id', 'smo75619');
smo75636v0ar.push(smo75619);
const smo75620 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo75620.setAttribute('id', 'smo75620');
smo75636v0ar.push(smo75620);
const smo75621 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo75621.setAttribute('id', 'smo75621');
smo75636v0ar.push(smo75621);
const smo75622 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo75622.setAttribute('id', 'smo75622');
smo75636v0ar.push(smo75622);
smo75636v0.addTickables(smo75636v0ar)
fmtsmo7563671.joinVoices([smo75636v0]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78691 = smo70604.getStemDirection();
smo70604.setStemDirection(dirsmo78691);
smo70605.setStemDirection(dirsmo78691);
smo70606.setStemDirection(dirsmo78691);
smo70607.setStemDirection(dirsmo78691);
const smo78691 = new VF.Beam([smo70604,smo70605,smo70606,smo70607]);
const dirsmo78692 = smo70608.getStemDirection();
smo70608.setStemDirection(dirsmo78692);
smo70609.setStemDirection(dirsmo78692);
smo70610.setStemDirection(dirsmo78692);
smo70611.setStemDirection(dirsmo78692);
const smo78692 = new VF.Beam([smo70608,smo70609,smo70610,smo70611]);
const dirsmo78693 = smo70612.getStemDirection();
smo70612.setStemDirection(dirsmo78693);
smo70613.setStemDirection(dirsmo78693);
smo70614.setStemDirection(dirsmo78693);
smo70615.setStemDirection(dirsmo78693);
const smo78693 = new VF.Beam([smo70612,smo70613,smo70614,smo70615]);
const dirsmo78694 = smo70616.getStemDirection();
smo70616.setStemDirection(dirsmo78694);
smo70617.setStemDirection(dirsmo78694);
smo70618.setStemDirection(dirsmo78694);
smo70619.setStemDirection(dirsmo78694);
const smo78694 = new VF.Beam([smo70616,smo70617,smo70618,smo70619]);
const dirsmo78697 = smo75607.getStemDirection();
smo75607.setStemDirection(dirsmo78697);
smo75608.setStemDirection(dirsmo78697);
smo75609.setStemDirection(dirsmo78697);
smo75610.setStemDirection(dirsmo78697);
const smo78697 = new VF.Beam([smo75607,smo75608,smo75609,smo75610]);
const dirsmo78698 = smo75611.getStemDirection();
smo75611.setStemDirection(dirsmo78698);
smo75612.setStemDirection(dirsmo78698);
smo75613.setStemDirection(dirsmo78698);
smo75614.setStemDirection(dirsmo78698);
const smo78698 = new VF.Beam([smo75611,smo75612,smo75613,smo75614]);
const dirsmo78699 = smo75615.getStemDirection();
smo75615.setStemDirection(dirsmo78699);
smo75616.setStemDirection(dirsmo78699);
smo75617.setStemDirection(dirsmo78699);
smo75618.setStemDirection(dirsmo78699);
const smo78699 = new VF.Beam([smo75615,smo75616,smo75617,smo75618]);
const dirsmo78700 = smo75619.getStemDirection();
smo75619.setStemDirection(dirsmo78700);
smo75620.setStemDirection(dirsmo78700);
smo75621.setStemDirection(dirsmo78700);
smo75622.setStemDirection(dirsmo78700);
const smo78700 = new VF.Beam([smo75619,smo75620,smo75621,smo75622]);
 
// formatting measures in staff group smo67190
fmtsmo7063371.format([smo70633v0,smo75636v0], 342);
const stavesmo70633 = new VF.Stave(1450, 2180, 356);
stavesmo70633.setAttribute('id', 'stavesmo70633');
stavesmo70633.setBegBarType(VF.Barline.type.NONE);
stavesmo70633.setContext(context);
stavesmo70633.draw();
smo70633v0.draw(context, stavesmo70633);
smo78691.setContext(context);
smo78691.draw();
smo78692.setContext(context);
smo78692.draw();
smo78693.setContext(context);
smo78693.draw();
smo78694.setContext(context);
smo78694.draw();
const stavesmo75636 = new VF.Stave(1450, 2270, 356);
stavesmo75636.setAttribute('id', 'stavesmo75636');
stavesmo75636.setBegBarType(VF.Barline.type.NONE);
stavesmo75636.setContext(context);
stavesmo75636.draw();
smo75636v0.draw(context, stavesmo75636);
smo78697.setContext(context);
smo78697.draw();
smo78698.setContext(context);
smo78698.draw();
smo78699.setContext(context);
smo78699.draw();
smo78700.setContext(context);
smo78700.draw();
const rightsmo67190stavesmo706331 = new VF.StaveConnector(stavesmo70633, stavesmo75636).setType(0);
rightsmo67190stavesmo706331.setContext(context).draw();
// modifier from 0-46-1-7 to 0-46-1-8
const smo80486 = new VF.StaveTie({ first_note: smo69837, last_note: smo69838, 
          firstNote: smo69837, lastNote: smo69838, first_indices: [0], last_indices: [0]});
smo80486.setContext(context).draw();
// modifier from 0-47-0-3 to 0-47-0-4
const smo80487 = new VF.StaveTie({ first_note: smo69859, last_note: smo69860, 
          firstNote: smo69859, lastNote: smo69860, first_indices: [0], last_indices: [0]});
smo80487.setContext(context).draw();
// modifier from 0-49-1-1 to 0-49-1-2
const smo80488 = new VF.StaveTie({ first_note: smo69927, last_note: smo69928, 
          firstNote: smo69927, lastNote: smo69928, first_indices: [0], last_indices: [0]});
smo80488.setContext(context).draw();
// modifier from 0-49-1-9 to 0-50-1-0
const smo80489 = new VF.StaveTie({ first_note: smo69935, last_note: null, 
          firstNote: smo69935, lastNote: null, first_indices: [0], last_indices: [0]});
smo80489.setContext(context).draw();
// modifier from 0-49-1-9 to 0-50-1-0
const smo80490 = new VF.StaveTie({ first_note: null, last_note: smo69960, 
          firstNote: null, lastNote: smo69960, first_indices: [0], last_indices: [0]});
smo80490.setContext(context).draw();
// modifier from 0-50-1-3 to 0-50-1-4
const smo80491 = new VF.StaveTie({ first_note: smo69963, last_note: smo69964, 
          firstNote: smo69963, lastNote: smo69964, first_indices: [0], last_indices: [0]});
smo80491.setContext(context).draw();
// modifier from 0-51-0-3 to 0-51-0-4
const smo80492 = new VF.StaveTie({ first_note: smo69985, last_note: smo69986, 
          firstNote: smo69985, lastNote: smo69986, first_indices: [0], last_indices: [0]});
smo80492.setContext(context).draw();
// modifier from 0-51-1-6 to 0-51-1-7
const smo80493 = new VF.StaveTie({ first_note: smo69998, last_note: smo69999, 
          firstNote: smo69998, lastNote: smo69999, first_indices: [0], last_indices: [0]});
smo80493.setContext(context).draw();
// modifier from 0-54-1-3 to 0-54-1-4
const smo80494 = new VF.StaveTie({ first_note: smo70090, last_note: smo70091, 
          firstNote: smo70090, lastNote: smo70091, first_indices: [0], last_indices: [0]});
smo80494.setContext(context).draw();
// modifier from 0-55-0-8 to 0-56-0-0
const smo80495 = new VF.StaveTie({ first_note: smo70121, last_note: null, 
          firstNote: smo70121, lastNote: null, first_indices: [0], last_indices: [0]});
smo80495.setContext(context).draw();
// modifier from 0-55-0-8 to 0-56-0-0
const smo80496 = new VF.StaveTie({ first_note: null, last_note: smo70146, 
          firstNote: null, lastNote: smo70146, first_indices: [0], last_indices: [0]});
smo80496.setContext(context).draw();
// modifier from 0-55-1-1 to 0-55-1-2
const smo80497 = new VF.StaveTie({ first_note: smo70123, last_note: smo70124, 
          firstNote: smo70123, lastNote: smo70124, first_indices: [0], last_indices: [0]});
smo80497.setContext(context).draw();
// modifier from 0-56-1-0 to 0-56-1-1
const smo80498 = new VF.StaveTie({ first_note: smo70162, last_note: smo70163, 
          firstNote: smo70162, lastNote: smo70163, first_indices: [0], last_indices: [0]});
smo80498.setContext(context).draw();
// modifier from 0-57-1-1 to 0-57-1-2
const smo80499 = new VF.StaveTie({ first_note: smo70190, last_note: smo70191, 
          firstNote: smo70190, lastNote: smo70191, first_indices: [0], last_indices: [0]});
smo80499.setContext(context).draw();
// modifier from 0-59-0-2 to 0-59-0-3
const smo80500 = new VF.StaveTie({ first_note: smo70237, last_note: smo70238, 
          firstNote: smo70237, lastNote: smo70238, first_indices: [0], last_indices: [0]});
smo80500.setContext(context).draw();
// modifier from 0-60-0-8 to 0-61-0-0
const smo80501 = new VF.StaveTie({ first_note: smo70279, last_note: smo70305, 
          firstNote: smo70279, lastNote: smo70305, first_indices: [0], last_indices: [0]});
smo80501.setContext(context).draw();
// modifier from 0-60-1-8 to 0-60-1-9
const smo80502 = new VF.StaveTie({ first_note: smo70288, last_note: smo70289, 
          firstNote: smo70288, lastNote: smo70289, first_indices: [0], last_indices: [0]});
smo80502.setContext(context).draw();
// modifier from 0-58-1-2 to 0-58-1-3
const smo80503 = new VF.StaveTie({ first_note: smo70216, last_note: smo70217, 
          firstNote: smo70216, lastNote: smo70217, first_indices: [0], last_indices: [0]});
smo80503.setContext(context).draw();
// modifier from 1-49-0-3 to 1-49-0-4
const smo80504 = new VF.StaveTie({ first_note: smo74965, last_note: smo74966, 
          firstNote: smo74965, lastNote: smo74966, first_indices: [0], last_indices: [0]});
smo80504.setContext(context).draw();
// modifier from 1-57-0-2 to 1-57-0-3
const smo80505 = new VF.StaveTie({ first_note: smo75212, last_note: smo75213, 
          firstNote: smo75212, lastNote: smo75213, first_indices: [0], last_indices: [0]});
smo80505.setContext(context).draw();
// modifier from 1-57-0-5 to 1-58-0-0
const smo80506 = new VF.StaveTie({ first_note: smo75215, last_note: smo75244, 
          firstNote: smo75215, lastNote: smo75244, first_indices: [0], last_indices: [0]});
smo80506.setContext(context).draw();
}
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
const fmtsmo773140 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo77314v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo77314v0ar = [];
const smo77286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo77286.setAttribute('id', 'smo77286');
const  smo88872 = new VF.Articulation('a.').setPosition(4);
smo77286.addModifier(smo88872, 0);
smo77314v0ar.push(smo77286);
const smo77289 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo77289.setAttribute('id', 'smo77289');
const  smo88873 = new VF.Articulation('a.').setPosition(4);
smo77289.addModifier(smo88873, 0);
smo77314v0ar.push(smo77289);
const smo77291 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo77291.setAttribute('id', 'smo77291');
const  smo88874 = new VF.Articulation('a.').setPosition(4);
smo77291.addModifier(smo88874, 0);
smo77314v0ar.push(smo77291);
const smo77293 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo77293.setAttribute('id', 'smo77293');
const  smo88875 = new VF.Articulation('a.').setPosition(4);
smo77293.addModifier(smo88875, 0);
smo77314v0ar.push(smo77293);
const smo77295 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo77295.setAttribute('id', 'smo77295');
smo77314v0ar.push(smo77295);
const smo77296 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo77296.setAttribute('id', 'smo77296');
smo77296.addModifier(new VF.Dot(), 0);
smo77314v0ar.push(smo77296);
const smo77297 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo77297.setAttribute('id', 'smo77297');
smo77314v0ar.push(smo77297);
const smo77298 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo77298.setAttribute('id', 'smo77298');
smo77314v0ar.push(smo77298);
smo77314v0.addTickables(smo77314v0ar)
fmtsmo773140.joinVoices([smo77314v0]);
const fmtsmo781330 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo78133v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78133v0ar = [];
const smo78106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78106.setAttribute('id', 'smo78106');
const  smo88876 = new VF.Articulation('a.').setPosition(4);
smo78106.addModifier(smo88876, 0);
smo78133v0ar.push(smo78106);
const smo78108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78108.setAttribute('id', 'smo78108');
const  smo88877 = new VF.Articulation('a.').setPosition(4);
smo78108.addModifier(smo88877, 0);
smo78133v0ar.push(smo78108);
const smo78110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78110.setAttribute('id', 'smo78110');
const  smo88878 = new VF.Articulation('a.').setPosition(4);
smo78110.addModifier(smo88878, 0);
smo78133v0ar.push(smo78110);
const smo78112 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78112.setAttribute('id', 'smo78112');
const  smo88879 = new VF.Articulation('a.').setPosition(4);
smo78112.addModifier(smo88879, 0);
smo78133v0ar.push(smo78112);
const smo78114 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78114.setAttribute('id', 'smo78114');
smo78133v0ar.push(smo78114);
const smo78115 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78115.setAttribute('id', 'smo78115');
smo78133v0ar.push(smo78115);
const smo78116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78116.setAttribute('id', 'smo78116');
smo78133v0ar.push(smo78116);
const smo78117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78117.setAttribute('id', 'smo78117');
smo78133v0ar.push(smo78117);
smo78133v0.addTickables(smo78133v0ar)
fmtsmo781330.joinVoices([smo78133v0]);
const fmtsmo789440 = new VF.Formatter();
//
// voices and notes for stave 2 0
const smo78944v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78944v0ar = [];
const smo78917 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo78917.setAttribute('id', 'smo78917');
const  smo88880 = new VF.Articulation('a.').setPosition(4);
smo78917.addModifier(smo88880, 0);
smo78944v0ar.push(smo78917);
const smo78919 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo78919.setAttribute('id', 'smo78919');
const  smo88881 = new VF.Articulation('a.').setPosition(4);
smo78919.addModifier(smo88881, 0);
smo78944v0ar.push(smo78919);
const smo78921 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo78921.setAttribute('id', 'smo78921');
const  smo88882 = new VF.Articulation('a.').setPosition(4);
smo78921.addModifier(smo88882, 0);
smo78944v0ar.push(smo78921);
const smo78923 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo78923.setAttribute('id', 'smo78923');
const  smo88883 = new VF.Articulation('a.').setPosition(4);
smo78923.addModifier(smo88883, 0);
smo78944v0ar.push(smo78923);
const smo78925 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo78925.setAttribute('id', 'smo78925');
smo78944v0ar.push(smo78925);
const smo78926 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo78926.setAttribute('id', 'smo78926');
smo78944v0ar.push(smo78926);
const smo78927 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo78927.setAttribute('id', 'smo78927');
smo78944v0ar.push(smo78927);
const smo78928 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo78928.setAttribute('id', 'smo78928');
smo78944v0ar.push(smo78928);
smo78944v0.addTickables(smo78944v0ar)
fmtsmo789440.joinVoices([smo78944v0]);
const fmtsmo797440 = new VF.Formatter();
//
// voices and notes for stave 3 0
const smo79744v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo79744v0ar = [];
const smo79728 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo79728.setAttribute('id', 'smo79728');
smo79744v0ar.push(smo79728);
smo79744v0.addTickables(smo79744v0ar)
fmtsmo797440.joinVoices([smo79744v0]);
const fmtsmo806290 = new VF.Formatter();
//
// voices and notes for stave 4 0
const smo80629v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80629v0ar = [];
const smo80609 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo80609.setAttribute('id', 'smo80609');
smo80629v0ar.push(smo80609);
const smo80610 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/2/n"]}'))
smo80610.setAttribute('id', 'smo80610');
smo80629v0ar.push(smo80610);
const smo80611 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/2/n"]}'))
smo80611.setAttribute('id', 'smo80611');
smo80629v0ar.push(smo80611);
const smo80612 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/2/n"]}'))
smo80612.setAttribute('id', 'smo80612');
smo80629v0ar.push(smo80612);
const smo80613 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/2/n"]}'))
smo80613.setAttribute('id', 'smo80613');
smo80629v0ar.push(smo80613);
smo80629v0.addTickables(smo80629v0ar)
fmtsmo806290.joinVoices([smo80629v0]);
// create beam groups and tuplets for format grp smo81406 before formatting
const dirsmo87757 = smo77286.getStemDirection();
smo77286.setStemDirection(dirsmo87757);
smo77289.setStemDirection(dirsmo87757);
const smo87757 = new VF.Beam([smo77286,smo77289]);
const dirsmo87758 = smo77291.getStemDirection();
smo77291.setStemDirection(dirsmo87758);
smo77293.setStemDirection(dirsmo87758);
const smo87758 = new VF.Beam([smo77291,smo77293]);
const dirsmo87759 = smo77296.getStemDirection();
smo77296.setStemDirection(dirsmo87759);
smo77297.setStemDirection(dirsmo87759);
smo77298.setStemDirection(dirsmo87759);
const smo87759 = new VF.Beam([smo77296,smo77297,smo77298]);
const dirsmo87762 = smo78106.getStemDirection();
smo78106.setStemDirection(dirsmo87762);
smo78108.setStemDirection(dirsmo87762);
smo78110.setStemDirection(dirsmo87762);
smo78112.setStemDirection(dirsmo87762);
const smo87762 = new VF.Beam([smo78106,smo78108,smo78110,smo78112]);
const dirsmo87763 = smo78114.getStemDirection();
smo78114.setStemDirection(dirsmo87763);
smo78115.setStemDirection(dirsmo87763);
smo78116.setStemDirection(dirsmo87763);
smo78117.setStemDirection(dirsmo87763);
const smo87763 = new VF.Beam([smo78114,smo78115,smo78116,smo78117]);
const dirsmo87766 = smo78917.getStemDirection();
smo78917.setStemDirection(dirsmo87766);
smo78919.setStemDirection(dirsmo87766);
smo78921.setStemDirection(dirsmo87766);
smo78923.setStemDirection(dirsmo87766);
const smo87766 = new VF.Beam([smo78917,smo78919,smo78921,smo78923]);
const dirsmo87767 = smo78925.getStemDirection();
smo78925.setStemDirection(dirsmo87767);
smo78926.setStemDirection(dirsmo87767);
smo78927.setStemDirection(dirsmo87767);
smo78928.setStemDirection(dirsmo87767);
const smo87767 = new VF.Beam([smo78925,smo78926,smo78927,smo78928]);
const dirsmo87772 = smo80610.getStemDirection();
smo80610.setStemDirection(dirsmo87772);
smo80611.setStemDirection(dirsmo87772);
smo80612.setStemDirection(dirsmo87772);
smo80613.setStemDirection(dirsmo87772);
const smo87772 = new VF.Beam([smo80610,smo80611,smo80612,smo80613]);
 
// formatting measures in staff group smo81406
fmtsmo773140.format([smo77314v0,smo78133v0,smo78944v0,smo79744v0,smo80629v0], 290);
const stavesmo77314 = new VF.Stave(55, 255, 419);
stavesmo77314.setAttribute('id', 'stavesmo77314');
stavesmo77314.setBegBarType(1);
stavesmo77314.setTempo(JSON.parse('{"name":"Larghetto"}'), -1 * 0);
stavesmo77314.addClef('treble');
stavesmo77314.addTimeSignature('4/4');
const keysmo77314 = new VF.KeySignature('E');
keysmo77314.addToStave(stavesmo77314);
stavesmo77314.setContext(context);
stavesmo77314.draw();
smo77314v0.draw(context, stavesmo77314);
smo87757.setContext(context);
smo87757.draw();
smo87758.setContext(context);
smo87758.draw();
smo87759.setContext(context);
smo87759.draw();
const stavesmo78133 = new VF.Stave(55, 387, 419);
stavesmo78133.setAttribute('id', 'stavesmo78133');
stavesmo78133.setBegBarType(1);
stavesmo78133.addClef('treble');
stavesmo78133.addTimeSignature('4/4');
const keysmo78133 = new VF.KeySignature('E');
keysmo78133.addToStave(stavesmo78133);
stavesmo78133.setContext(context);
stavesmo78133.draw();
smo78133v0.draw(context, stavesmo78133);
smo87762.setContext(context);
smo87762.draw();
smo87763.setContext(context);
smo87763.draw();
const stavesmo78944 = new VF.Stave(55, 507, 419);
stavesmo78944.setAttribute('id', 'stavesmo78944');
stavesmo78944.setBegBarType(1);
stavesmo78944.addClef('alto');
stavesmo78944.addTimeSignature('4/4');
const keysmo78944 = new VF.KeySignature('E');
keysmo78944.addToStave(stavesmo78944);
stavesmo78944.setContext(context);
stavesmo78944.draw();
smo78944v0.draw(context, stavesmo78944);
smo87766.setContext(context);
smo87766.draw();
smo87767.setContext(context);
smo87767.draw();
const stavesmo79744 = new VF.Stave(55, 624, 419);
stavesmo79744.setAttribute('id', 'stavesmo79744');
stavesmo79744.setBegBarType(1);
stavesmo79744.addClef('treble');
stavesmo79744.addTimeSignature('4/4');
const keysmo79744 = new VF.KeySignature('E');
keysmo79744.addToStave(stavesmo79744);
stavesmo79744.setContext(context);
stavesmo79744.draw();
smo79744v0.draw(context, stavesmo79744);
const stavesmo80629 = new VF.Stave(55, 705, 419);
stavesmo80629.setAttribute('id', 'stavesmo80629');
stavesmo80629.setBegBarType(1);
stavesmo80629.addClef('bass');
stavesmo80629.addTimeSignature('4/4');
const keysmo80629 = new VF.KeySignature('E');
keysmo80629.addToStave(stavesmo80629);
stavesmo80629.setContext(context);
stavesmo80629.draw();
smo80629v0.draw(context, stavesmo80629);
smo87772.setContext(context);
smo87772.draw();
const leftsmo81406stavesmo773144 = new VF.StaveConnector(stavesmo77314, stavesmo80629).setType(4);
leftsmo81406stavesmo773144.setContext(context).draw();
const fmtsmo773381 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo77338v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo77338v0ar = [];
const smo77315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo77315.setAttribute('id', 'smo77315');
smo77338v0ar.push(smo77315);
const smo77316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo77316.setAttribute('id', 'smo77316');
smo77338v0ar.push(smo77316);
const smo77317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo77317.setAttribute('id', 'smo77317');
smo77338v0ar.push(smo77317);
const smo77318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo77318.setAttribute('id', 'smo77318');
smo77338v0ar.push(smo77318);
const smo77319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo77319.setAttribute('id', 'smo77319');
smo77338v0ar.push(smo77319);
const smo77320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo77320.setAttribute('id', 'smo77320');
smo77320.addModifier(new VF.Dot(), 0);
smo77338v0ar.push(smo77320);
const smo77321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo77321.setAttribute('id', 'smo77321');
smo77338v0ar.push(smo77321);
const smo77322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo77322.setAttribute('id', 'smo77322');
smo77338v0ar.push(smo77322);
smo77338v0.addTickables(smo77338v0ar)
fmtsmo773381.joinVoices([smo77338v0]);
const fmtsmo781571 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo78157v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78157v0ar = [];
const smo78134 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78134.setAttribute('id', 'smo78134');
smo78157v0ar.push(smo78134);
const smo78135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78135.setAttribute('id', 'smo78135');
smo78157v0ar.push(smo78135);
const smo78136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["d#/4/n"]}'))
smo78136.setAttribute('id', 'smo78136');
smo78157v0ar.push(smo78136);
const smo78137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["d#/4/n"]}'))
smo78137.setAttribute('id', 'smo78137');
smo78157v0ar.push(smo78137);
const smo78138 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["d#/4/n"]}'))
smo78138.setAttribute('id', 'smo78138');
smo78157v0ar.push(smo78138);
const smo78139 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["d#/4/n"]}'))
smo78139.setAttribute('id', 'smo78139');
smo78157v0ar.push(smo78139);
const smo78140 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["d#/4/n"]}'))
smo78140.setAttribute('id', 'smo78140');
smo78157v0ar.push(smo78140);
const smo78141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["d#/4/n"]}'))
smo78141.setAttribute('id', 'smo78141');
smo78157v0ar.push(smo78141);
smo78157v0.addTickables(smo78157v0ar)
fmtsmo781571.joinVoices([smo78157v0]);
const fmtsmo789681 = new VF.Formatter();
//
// voices and notes for stave 2 1
const smo78968v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78968v0ar = [];
const smo78945 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo78945.setAttribute('id', 'smo78945');
smo78968v0ar.push(smo78945);
const smo78946 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo78946.setAttribute('id', 'smo78946');
smo78968v0ar.push(smo78946);
const smo78947 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo78947.setAttribute('id', 'smo78947');
smo78968v0ar.push(smo78947);
const smo78948 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo78948.setAttribute('id', 'smo78948');
smo78968v0ar.push(smo78948);
const smo78949 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo78949.setAttribute('id', 'smo78949');
smo78968v0ar.push(smo78949);
const smo78950 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo78950.setAttribute('id', 'smo78950');
smo78968v0ar.push(smo78950);
const smo78951 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo78951.setAttribute('id', 'smo78951');
smo78968v0ar.push(smo78951);
const smo78952 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo78952.setAttribute('id', 'smo78952');
smo78968v0ar.push(smo78952);
smo78968v0.addTickables(smo78968v0ar)
fmtsmo789681.joinVoices([smo78968v0]);
const fmtsmo797611 = new VF.Formatter();
//
// voices and notes for stave 3 1
const smo79761v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo79761v0ar = [];
const smo79745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo79745.setAttribute('id', 'smo79745');
smo79761v0ar.push(smo79745);
smo79761v0.addTickables(smo79761v0ar)
fmtsmo797611.joinVoices([smo79761v0]);
const fmtsmo806511 = new VF.Formatter();
//
// voices and notes for stave 4 1
const smo80651v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80651v0ar = [];
const smo80630 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n"]}'))
smo80630.setAttribute('id', 'smo80630');
smo80651v0ar.push(smo80630);
const smo80631 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo80631.setAttribute('id', 'smo80631');
smo80651v0ar.push(smo80631);
const smo80632 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/2/n"]}'))
smo80632.setAttribute('id', 'smo80632');
smo80651v0ar.push(smo80632);
const smo80633 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/2/n"]}'))
smo80633.setAttribute('id', 'smo80633');
smo80651v0ar.push(smo80633);
const smo80634 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/2/n"]}'))
smo80634.setAttribute('id', 'smo80634');
smo80651v0ar.push(smo80634);
const smo80635 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/2/n"]}'))
smo80635.setAttribute('id', 'smo80635');
smo80651v0ar.push(smo80635);
smo80651v0.addTickables(smo80651v0ar)
fmtsmo806511.joinVoices([smo80651v0]);
// create beam groups and tuplets for format grp smo81406 before formatting
const dirsmo87775 = smo77315.getStemDirection();
smo77315.setStemDirection(dirsmo87775);
smo77316.setStemDirection(dirsmo87775);
const smo87775 = new VF.Beam([smo77315,smo77316]);
const dirsmo87776 = smo77317.getStemDirection();
smo77317.setStemDirection(dirsmo87776);
smo77318.setStemDirection(dirsmo87776);
const smo87776 = new VF.Beam([smo77317,smo77318]);
const dirsmo87777 = smo77320.getStemDirection();
smo77320.setStemDirection(dirsmo87777);
smo77321.setStemDirection(dirsmo87777);
smo77322.setStemDirection(dirsmo87777);
const smo87777 = new VF.Beam([smo77320,smo77321,smo77322]);
const dirsmo87780 = smo78134.getStemDirection();
smo78134.setStemDirection(dirsmo87780);
smo78135.setStemDirection(dirsmo87780);
smo78136.setStemDirection(dirsmo87780);
smo78137.setStemDirection(dirsmo87780);
const smo87780 = new VF.Beam([smo78134,smo78135,smo78136,smo78137]);
const dirsmo87781 = smo78138.getStemDirection();
smo78138.setStemDirection(dirsmo87781);
smo78139.setStemDirection(dirsmo87781);
smo78140.setStemDirection(dirsmo87781);
smo78141.setStemDirection(dirsmo87781);
const smo87781 = new VF.Beam([smo78138,smo78139,smo78140,smo78141]);
const dirsmo87784 = smo78945.getStemDirection();
smo78945.setStemDirection(dirsmo87784);
smo78946.setStemDirection(dirsmo87784);
smo78947.setStemDirection(dirsmo87784);
smo78948.setStemDirection(dirsmo87784);
const smo87784 = new VF.Beam([smo78945,smo78946,smo78947,smo78948]);
const dirsmo87785 = smo78949.getStemDirection();
smo78949.setStemDirection(dirsmo87785);
smo78950.setStemDirection(dirsmo87785);
smo78951.setStemDirection(dirsmo87785);
smo78952.setStemDirection(dirsmo87785);
const smo87785 = new VF.Beam([smo78949,smo78950,smo78951,smo78952]);
const dirsmo87790 = smo80632.getStemDirection();
smo80632.setStemDirection(dirsmo87790);
smo80633.setStemDirection(dirsmo87790);
smo80634.setStemDirection(dirsmo87790);
smo80635.setStemDirection(dirsmo87790);
const smo87790 = new VF.Beam([smo80632,smo80633,smo80634,smo80635]);
 
// formatting measures in staff group smo81406
fmtsmo773381.format([smo77338v0,smo78157v0,smo78968v0,smo79761v0,smo80651v0], 295);
const stavesmo77338 = new VF.Stave(474, 255, 309);
stavesmo77338.setAttribute('id', 'stavesmo77338');
stavesmo77338.setBegBarType(VF.Barline.type.NONE);
stavesmo77338.setContext(context);
stavesmo77338.draw();
smo77338v0.draw(context, stavesmo77338);
smo87775.setContext(context);
smo87775.draw();
smo87776.setContext(context);
smo87776.draw();
smo87777.setContext(context);
smo87777.draw();
const stavesmo78157 = new VF.Stave(474, 387, 309);
stavesmo78157.setAttribute('id', 'stavesmo78157');
stavesmo78157.setBegBarType(VF.Barline.type.NONE);
stavesmo78157.setContext(context);
stavesmo78157.draw();
smo78157v0.draw(context, stavesmo78157);
smo87780.setContext(context);
smo87780.draw();
smo87781.setContext(context);
smo87781.draw();
const stavesmo78968 = new VF.Stave(474, 507, 309);
stavesmo78968.setAttribute('id', 'stavesmo78968');
stavesmo78968.setBegBarType(VF.Barline.type.NONE);
stavesmo78968.setContext(context);
stavesmo78968.draw();
smo78968v0.draw(context, stavesmo78968);
smo87784.setContext(context);
smo87784.draw();
smo87785.setContext(context);
smo87785.draw();
const stavesmo79761 = new VF.Stave(474, 624, 309);
stavesmo79761.setAttribute('id', 'stavesmo79761');
stavesmo79761.setBegBarType(VF.Barline.type.NONE);
stavesmo79761.setContext(context);
stavesmo79761.draw();
smo79761v0.draw(context, stavesmo79761);
const stavesmo80651 = new VF.Stave(474, 705, 309);
stavesmo80651.setAttribute('id', 'stavesmo80651');
stavesmo80651.setBegBarType(VF.Barline.type.NONE);
stavesmo80651.setContext(context);
stavesmo80651.draw();
smo80651v0.draw(context, stavesmo80651);
smo87790.setContext(context);
smo87790.draw();
const fmtsmo773622 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo77362v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo77362v0ar = [];
const smo77339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo77339.setAttribute('id', 'smo77339');
smo77362v0ar.push(smo77339);
const smo77340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16d","dots":1,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo77340.setAttribute('id', 'smo77340');
smo77340.addModifier(new VF.Dot(), 0);
smo77362v0ar.push(smo77340);
const smo77341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","autoStem":true,"keys":["d#/4/n"]}'))
smo77341.setAttribute('id', 'smo77341');
smo77362v0ar.push(smo77341);
const smo77342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo77342.setAttribute('id', 'smo77342');
smo77362v0ar.push(smo77342);
const smo77343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo77343.setAttribute('id', 'smo77343');
smo77362v0ar.push(smo77343);
const smo77344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo77344.setAttribute('id', 'smo77344');
smo77362v0ar.push(smo77344);
const smo77345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo77345.setAttribute('id', 'smo77345');
smo77345.addModifier(new VF.Dot(), 0);
smo77362v0ar.push(smo77345);
const smo77346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo77346.setAttribute('id', 'smo77346');
smo77362v0ar.push(smo77346);
smo77362v0.addTickables(smo77362v0ar)
fmtsmo773622.joinVoices([smo77362v0]);
const fmtsmo781812 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo78181v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78181v0ar = [];
const smo78158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78158.setAttribute('id', 'smo78158');
smo78181v0ar.push(smo78158);
const smo78159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78159.setAttribute('id', 'smo78159');
smo78181v0ar.push(smo78159);
const smo78160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78160.setAttribute('id', 'smo78160');
smo78181v0ar.push(smo78160);
const smo78161 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78161.setAttribute('id', 'smo78161');
smo78181v0ar.push(smo78161);
const smo78162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78162.setAttribute('id', 'smo78162');
smo78181v0ar.push(smo78162);
const smo78163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78163.setAttribute('id', 'smo78163');
smo78181v0ar.push(smo78163);
const smo78164 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["d#/4/n"]}'))
smo78164.setAttribute('id', 'smo78164');
smo78181v0ar.push(smo78164);
const smo78165 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["d#/4/n"]}'))
smo78165.setAttribute('id', 'smo78165');
smo78181v0ar.push(smo78165);
smo78181v0.addTickables(smo78181v0ar)
fmtsmo781812.joinVoices([smo78181v0]);
const fmtsmo789922 = new VF.Formatter();
//
// voices and notes for stave 2 2
const smo78992v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78992v0ar = [];
const smo78969 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo78969.setAttribute('id', 'smo78969');
smo78992v0ar.push(smo78969);
const smo78970 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo78970.setAttribute('id', 'smo78970');
smo78992v0ar.push(smo78970);
const smo78971 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo78971.setAttribute('id', 'smo78971');
smo78992v0ar.push(smo78971);
const smo78972 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo78972.setAttribute('id', 'smo78972');
smo78992v0ar.push(smo78972);
const smo78973 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo78973.setAttribute('id', 'smo78973');
smo78992v0ar.push(smo78973);
const smo78974 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo78974.setAttribute('id', 'smo78974');
smo78992v0ar.push(smo78974);
const smo78975 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo78975.setAttribute('id', 'smo78975');
smo78992v0ar.push(smo78975);
const smo78976 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo78976.setAttribute('id', 'smo78976');
smo78992v0ar.push(smo78976);
smo78992v0.addTickables(smo78992v0ar)
fmtsmo789922.joinVoices([smo78992v0]);
const fmtsmo797782 = new VF.Formatter();
//
// voices and notes for stave 3 2
const smo79778v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo79778v0ar = [];
const smo79762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo79762.setAttribute('id', 'smo79762');
smo79778v0ar.push(smo79762);
smo79778v0.addTickables(smo79778v0ar)
fmtsmo797782.joinVoices([smo79778v0]);
const fmtsmo806752 = new VF.Formatter();
//
// voices and notes for stave 4 2
const smo80675v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80675v0ar = [];
const smo80652 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/2/n"]}'))
smo80652.setAttribute('id', 'smo80652');
smo80675v0ar.push(smo80652);
const smo80653 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/2/n"]}'))
smo80653.setAttribute('id', 'smo80653');
smo80675v0ar.push(smo80653);
const smo80654 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["c#/3/n"]}'))
smo80654.setAttribute('id', 'smo80654');
smo80675v0ar.push(smo80654);
const smo80655 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["c#/3/n"]}'))
smo80655.setAttribute('id', 'smo80655');
smo80675v0ar.push(smo80655);
const smo80656 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n"]}'))
smo80656.setAttribute('id', 'smo80656');
smo80675v0ar.push(smo80656);
const smo80657 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n"]}'))
smo80657.setAttribute('id', 'smo80657');
smo80675v0ar.push(smo80657);
const smo80658 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n"]}'))
smo80658.setAttribute('id', 'smo80658');
smo80675v0ar.push(smo80658);
const smo80659 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n"]}'))
smo80659.setAttribute('id', 'smo80659');
smo80675v0ar.push(smo80659);
smo80675v0.addTickables(smo80675v0ar)
fmtsmo806752.joinVoices([smo80675v0]);
// create beam groups and tuplets for format grp smo81406 before formatting
const dirsmo87793 = smo77339.getStemDirection();
smo77339.setStemDirection(dirsmo87793);
smo77340.setStemDirection(dirsmo87793);
smo77341.setStemDirection(dirsmo87793);
const smo87793 = new VF.Beam([smo77339,smo77340,smo77341]);
const dirsmo87794 = smo77342.getStemDirection();
smo77342.setStemDirection(dirsmo87794);
smo77343.setStemDirection(dirsmo87794);
const smo87794 = new VF.Beam([smo77342,smo77343]);
const dirsmo87795 = smo77345.getStemDirection();
smo77345.setStemDirection(dirsmo87795);
smo77346.setStemDirection(dirsmo87795);
const smo87795 = new VF.Beam([smo77345,smo77346]);
const dirsmo87798 = smo78158.getStemDirection();
smo78158.setStemDirection(dirsmo87798);
smo78159.setStemDirection(dirsmo87798);
smo78160.setStemDirection(dirsmo87798);
smo78161.setStemDirection(dirsmo87798);
const smo87798 = new VF.Beam([smo78158,smo78159,smo78160,smo78161]);
const dirsmo87799 = smo78162.getStemDirection();
smo78162.setStemDirection(dirsmo87799);
smo78163.setStemDirection(dirsmo87799);
smo78164.setStemDirection(dirsmo87799);
smo78165.setStemDirection(dirsmo87799);
const smo87799 = new VF.Beam([smo78162,smo78163,smo78164,smo78165]);
const dirsmo87802 = smo78969.getStemDirection();
smo78969.setStemDirection(dirsmo87802);
smo78970.setStemDirection(dirsmo87802);
smo78971.setStemDirection(dirsmo87802);
smo78972.setStemDirection(dirsmo87802);
const smo87802 = new VF.Beam([smo78969,smo78970,smo78971,smo78972]);
const dirsmo87803 = smo78973.getStemDirection();
smo78973.setStemDirection(dirsmo87803);
smo78974.setStemDirection(dirsmo87803);
smo78975.setStemDirection(dirsmo87803);
smo78976.setStemDirection(dirsmo87803);
const smo87803 = new VF.Beam([smo78973,smo78974,smo78975,smo78976]);
const dirsmo87808 = smo80652.getStemDirection();
smo80652.setStemDirection(dirsmo87808);
smo80653.setStemDirection(dirsmo87808);
smo80654.setStemDirection(dirsmo87808);
smo80655.setStemDirection(dirsmo87808);
const smo87808 = new VF.Beam([smo80652,smo80653,smo80654,smo80655]);
const dirsmo87809 = smo80656.getStemDirection();
smo80656.setStemDirection(dirsmo87809);
smo80657.setStemDirection(dirsmo87809);
smo80658.setStemDirection(dirsmo87809);
smo80659.setStemDirection(dirsmo87809);
const smo87809 = new VF.Beam([smo80656,smo80657,smo80658,smo80659]);
 
// formatting measures in staff group smo81406
fmtsmo773622.format([smo77362v0,smo78181v0,smo78992v0,smo79778v0,smo80675v0], 303);
const stavesmo77362 = new VF.Stave(783, 255, 317);
stavesmo77362.setAttribute('id', 'stavesmo77362');
stavesmo77362.setBegBarType(VF.Barline.type.NONE);
stavesmo77362.setContext(context);
stavesmo77362.draw();
smo77362v0.draw(context, stavesmo77362);
smo87793.setContext(context);
smo87793.draw();
smo87794.setContext(context);
smo87794.draw();
smo87795.setContext(context);
smo87795.draw();
const stavesmo78181 = new VF.Stave(783, 387, 317);
stavesmo78181.setAttribute('id', 'stavesmo78181');
stavesmo78181.setBegBarType(VF.Barline.type.NONE);
stavesmo78181.setContext(context);
stavesmo78181.draw();
smo78181v0.draw(context, stavesmo78181);
smo87798.setContext(context);
smo87798.draw();
smo87799.setContext(context);
smo87799.draw();
const stavesmo78992 = new VF.Stave(783, 507, 317);
stavesmo78992.setAttribute('id', 'stavesmo78992');
stavesmo78992.setBegBarType(VF.Barline.type.NONE);
stavesmo78992.setContext(context);
stavesmo78992.draw();
smo78992v0.draw(context, stavesmo78992);
smo87802.setContext(context);
smo87802.draw();
smo87803.setContext(context);
smo87803.draw();
const stavesmo79778 = new VF.Stave(783, 624, 317);
stavesmo79778.setAttribute('id', 'stavesmo79778');
stavesmo79778.setBegBarType(VF.Barline.type.NONE);
stavesmo79778.setContext(context);
stavesmo79778.draw();
smo79778v0.draw(context, stavesmo79778);
const stavesmo80675 = new VF.Stave(783, 705, 317);
stavesmo80675.setAttribute('id', 'stavesmo80675');
stavesmo80675.setBegBarType(VF.Barline.type.NONE);
stavesmo80675.setContext(context);
stavesmo80675.draw();
smo80675v0.draw(context, stavesmo80675);
smo87808.setContext(context);
smo87808.draw();
smo87809.setContext(context);
smo87809.draw();
const fmtsmo773833 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo77383v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo77383v0ar = [];
const smo77363 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo77363.setAttribute('id', 'smo77363');
smo77383v0ar.push(smo77363);
const smo77364 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo77364.setAttribute('id', 'smo77364');
smo77383v0ar.push(smo77364);
const smo77365 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo77365.setAttribute('id', 'smo77365');
smo77365.addModifier(new VF.Dot(), 0);
smo77383v0ar.push(smo77365);
const smo77366 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo77366.setAttribute('id', 'smo77366');
smo77383v0ar.push(smo77366);
const smo77367 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["g#/5/n"]}'))
smo77367.setAttribute('id', 'smo77367');
smo77383v0ar.push(smo77367);
smo77383v0.addTickables(smo77383v0ar)
fmtsmo773833.joinVoices([smo77383v0]);
const fmtsmo782023 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo78202v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78202v0ar = [];
const smo78182 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78182.setAttribute('id', 'smo78182');
smo78202v0ar.push(smo78182);
const smo78183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo78183.setAttribute('id', 'smo78183');
smo78202v0ar.push(smo78183);
const smo78184 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["g#/5/n"]}'))
smo78184.setAttribute('id', 'smo78184');
smo78184.addModifier(new VF.Dot(), 0);
smo78202v0ar.push(smo78184);
const smo78185 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo78185.setAttribute('id', 'smo78185');
smo78202v0ar.push(smo78185);
const smo78186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo78186.setAttribute('id', 'smo78186');
smo78202v0ar.push(smo78186);
smo78202v0.addTickables(smo78202v0ar)
fmtsmo782023.joinVoices([smo78202v0]);
const fmtsmo790133 = new VF.Formatter();
//
// voices and notes for stave 2 3
const smo79013v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo79013v0ar = [];
const smo78993 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["g#/3/n"]}'))
smo78993.setAttribute('id', 'smo78993');
smo79013v0ar.push(smo78993);
const smo78994 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["cn/4/r"]}'))
smo78994.setAttribute('id', 'smo78994');
smo79013v0ar.push(smo78994);
const smo78995 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78995.setAttribute('id', 'smo78995');
smo78995.addModifier(new VF.Dot(), 0);
smo79013v0ar.push(smo78995);
const smo78996 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo78996.setAttribute('id', 'smo78996');
smo79013v0ar.push(smo78996);
const smo78997 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo78997.setAttribute('id', 'smo78997');
smo79013v0ar.push(smo78997);
smo79013v0.addTickables(smo79013v0ar)
fmtsmo790133.joinVoices([smo79013v0]);
const fmtsmo798013 = new VF.Formatter();
//
// voices and notes for stave 3 3
const smo79801v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo79801v0ar = [];
const smo79779 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo79779.setAttribute('id', 'smo79779');
smo79779.addModifier(new VF.Dot(), 0);
const smo79780 = new VF.Annotation('Com');
smo79780.setAttribute('id', 'smo79780');
smo79780.setFont('Merriweather', 12, 'normal');
smo79780.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo79779.addModifier(smo79780);
smo79780.addClass('lyric lyric-0 lyric-hyphen');
smo79801v0ar.push(smo79779);
const smo79781 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo79781.setAttribute('id', 'smo79781');
const smo79782 = new VF.Annotation('fort');
smo79782.setAttribute('id', 'smo79782');
smo79782.setFont('Merriweather', 12, 'normal');
smo79782.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo79781.addModifier(smo79782);
smo79782.addClass('lyric lyric-0');
smo79801v0ar.push(smo79781);
const smo79783 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo79783.setAttribute('id', 'smo79783');
const smo79784 = new VF.Annotation('ye!');
smo79784.setAttribute('id', 'smo79784');
smo79784.setFont('Merriweather', 12, 'normal');
smo79784.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo79783.addModifier(smo79784);
smo79784.addClass('lyric lyric-0');
smo79801v0ar.push(smo79783);
const smo79785 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo79785.setAttribute('id', 'smo79785');
smo79801v0ar.push(smo79785);
smo79801v0.addTickables(smo79801v0ar)
fmtsmo798013.joinVoices([smo79801v0]);
const fmtsmo806943 = new VF.Formatter();
//
// voices and notes for stave 4 3
const smo80694v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80694v0ar = [];
const smo80676 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo80676.setAttribute('id', 'smo80676');
smo80694v0ar.push(smo80676);
const smo80677 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo80677.setAttribute('id', 'smo80677');
smo80694v0ar.push(smo80677);
const smo80678 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo80678.setAttribute('id', 'smo80678');
smo80694v0ar.push(smo80678);
smo80694v0.addTickables(smo80694v0ar)
fmtsmo806943.joinVoices([smo80694v0]);
// create beam groups and tuplets for format grp smo81406 before formatting
const dirsmo87812 = smo77365.getStemDirection();
smo77365.setStemDirection(dirsmo87812);
smo77366.setStemDirection(dirsmo87812);
const smo87812 = new VF.Beam([smo77365,smo77366]);
const dirsmo87815 = smo78184.getStemDirection();
smo78184.setStemDirection(dirsmo87815);
smo78185.setStemDirection(dirsmo87815);
const smo87815 = new VF.Beam([smo78184,smo78185]);
const dirsmo87818 = smo78995.getStemDirection();
smo78995.setStemDirection(dirsmo87818);
smo78996.setStemDirection(dirsmo87818);
const smo87818 = new VF.Beam([smo78995,smo78996]);
const dirsmo87821 = smo79779.getStemDirection();
smo79779.setStemDirection(dirsmo87821);
smo79781.setStemDirection(dirsmo87821);
const smo87821 = new VF.Beam([smo79779,smo79781]);
 
// formatting measures in staff group smo81406
fmtsmo773833.format([smo77383v0,smo78202v0,smo79013v0,smo79801v0,smo80694v0], 261);
const stavesmo77383 = new VF.Stave(1100, 255, 275);
stavesmo77383.setAttribute('id', 'stavesmo77383');
stavesmo77383.setBegBarType(VF.Barline.type.NONE);
stavesmo77383.setContext(context);
stavesmo77383.draw();
smo77383v0.draw(context, stavesmo77383);
smo87812.setContext(context);
smo87812.draw();
const stavesmo78202 = new VF.Stave(1100, 387, 275);
stavesmo78202.setAttribute('id', 'stavesmo78202');
stavesmo78202.setBegBarType(VF.Barline.type.NONE);
stavesmo78202.setContext(context);
stavesmo78202.draw();
smo78202v0.draw(context, stavesmo78202);
smo87815.setContext(context);
smo87815.draw();
const stavesmo79013 = new VF.Stave(1100, 507, 275);
stavesmo79013.setAttribute('id', 'stavesmo79013');
stavesmo79013.setBegBarType(VF.Barline.type.NONE);
stavesmo79013.setContext(context);
stavesmo79013.draw();
smo79013v0.draw(context, stavesmo79013);
smo87818.setContext(context);
smo87818.draw();
const stavesmo79801 = new VF.Stave(1100, 624, 275);
stavesmo79801.setAttribute('id', 'stavesmo79801');
stavesmo79801.setBegBarType(VF.Barline.type.NONE);
stavesmo79801.setContext(context);
stavesmo79801.draw();
smo79801v0.draw(context, stavesmo79801);
smo87821.setContext(context);
smo87821.draw();
const stavesmo80694 = new VF.Stave(1100, 705, 275);
stavesmo80694.setAttribute('id', 'stavesmo80694');
stavesmo80694.setBegBarType(VF.Barline.type.NONE);
stavesmo80694.setContext(context);
stavesmo80694.draw();
smo80694v0.draw(context, stavesmo80694);
const rightsmo81406stavesmo773834 = new VF.StaveConnector(stavesmo77383, stavesmo80694).setType(0);
rightsmo81406stavesmo773834.setContext(context).draw();
const fmtsmo774074 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo77407v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo77407v0ar = [];
const smo77384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo77384.setAttribute('id', 'smo77384');
smo77407v0ar.push(smo77384);
const smo77385 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo77385.setAttribute('id', 'smo77385');
smo77407v0ar.push(smo77385);
const smo77386 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo77386.setAttribute('id', 'smo77386');
smo77407v0ar.push(smo77386);
const smo77387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo77387.setAttribute('id', 'smo77387');
smo77407v0ar.push(smo77387);
const smo77388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo77388.setAttribute('id', 'smo77388');
smo77407v0ar.push(smo77388);
const smo77389 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo77389.setAttribute('id', 'smo77389');
smo77389.addModifier(new VF.Dot(), 0);
smo77407v0ar.push(smo77389);
const smo77390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo77390.setAttribute('id', 'smo77390');
smo77407v0ar.push(smo77390);
const smo77391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo77391.setAttribute('id', 'smo77391');
smo77407v0ar.push(smo77391);
smo77407v0.addTickables(smo77407v0ar)
fmtsmo774074.joinVoices([smo77407v0]);
const fmtsmo782264 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo78226v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78226v0ar = [];
const smo78203 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78203.setAttribute('id', 'smo78203');
smo78226v0ar.push(smo78203);
const smo78204 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78204.setAttribute('id', 'smo78204');
smo78226v0ar.push(smo78204);
const smo78205 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78205.setAttribute('id', 'smo78205');
smo78226v0ar.push(smo78205);
const smo78206 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78206.setAttribute('id', 'smo78206');
smo78226v0ar.push(smo78206);
const smo78207 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78207.setAttribute('id', 'smo78207');
smo78226v0ar.push(smo78207);
const smo78208 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78208.setAttribute('id', 'smo78208');
smo78226v0ar.push(smo78208);
const smo78209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78209.setAttribute('id', 'smo78209');
smo78226v0ar.push(smo78209);
const smo78210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78210.setAttribute('id', 'smo78210');
smo78226v0ar.push(smo78210);
smo78226v0.addTickables(smo78226v0ar)
fmtsmo782264.joinVoices([smo78226v0]);
const fmtsmo790374 = new VF.Formatter();
//
// voices and notes for stave 2 4
const smo79037v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo79037v0ar = [];
const smo79014 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo79014.setAttribute('id', 'smo79014');
smo79037v0ar.push(smo79014);
const smo79015 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo79015.setAttribute('id', 'smo79015');
smo79037v0ar.push(smo79015);
const smo79016 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo79016.setAttribute('id', 'smo79016');
smo79037v0ar.push(smo79016);
const smo79017 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo79017.setAttribute('id', 'smo79017');
smo79037v0ar.push(smo79017);
const smo79018 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo79018.setAttribute('id', 'smo79018');
smo79037v0ar.push(smo79018);
const smo79019 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo79019.setAttribute('id', 'smo79019');
smo79037v0ar.push(smo79019);
const smo79020 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo79020.setAttribute('id', 'smo79020');
smo79037v0ar.push(smo79020);
const smo79021 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo79021.setAttribute('id', 'smo79021');
smo79037v0ar.push(smo79021);
smo79037v0.addTickables(smo79037v0ar)
fmtsmo790374.joinVoices([smo79037v0]);
const fmtsmo798204 = new VF.Formatter();
//
// voices and notes for stave 3 4
const smo79820v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo79820v0ar = [];
const smo79802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo79802.setAttribute('id', 'smo79802');
smo79820v0ar.push(smo79802);
const smo79803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo79803.setAttribute('id', 'smo79803');
const smo79804 = new VF.Annotation('com');
smo79804.setAttribute('id', 'smo79804');
smo79804.setFont('Merriweather', 12, 'normal');
smo79804.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo79803.addModifier(smo79804);
smo79804.addClass('lyric lyric-0');
smo79820v0ar.push(smo79803);
smo79820v0.addTickables(smo79820v0ar)
fmtsmo798204.joinVoices([smo79820v0]);
const fmtsmo807184 = new VF.Formatter();
//
// voices and notes for stave 4 4
const smo80718v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80718v0ar = [];
const smo80695 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo80695.setAttribute('id', 'smo80695');
smo80718v0ar.push(smo80695);
const smo80696 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo80696.setAttribute('id', 'smo80696');
smo80718v0ar.push(smo80696);
const smo80697 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo80697.setAttribute('id', 'smo80697');
smo80718v0ar.push(smo80697);
const smo80698 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo80698.setAttribute('id', 'smo80698');
smo80718v0ar.push(smo80698);
const smo80699 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/3/n"]}'))
smo80699.setAttribute('id', 'smo80699');
smo80718v0ar.push(smo80699);
const smo80700 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/3/n"]}'))
smo80700.setAttribute('id', 'smo80700');
smo80718v0ar.push(smo80700);
const smo80701 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/3/n"]}'))
smo80701.setAttribute('id', 'smo80701');
smo80718v0ar.push(smo80701);
const smo80702 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/3/n"]}'))
smo80702.setAttribute('id', 'smo80702');
smo80718v0ar.push(smo80702);
smo80718v0.addTickables(smo80718v0ar)
fmtsmo807184.joinVoices([smo80718v0]);
// create beam groups and tuplets for format grp smo81406 before formatting
const dirsmo87845 = smo77384.getStemDirection();
smo77384.setStemDirection(dirsmo87845);
smo77385.setStemDirection(dirsmo87845);
const smo87845 = new VF.Beam([smo77384,smo77385]);
const dirsmo87846 = smo77386.getStemDirection();
smo77386.setStemDirection(dirsmo87846);
smo77387.setStemDirection(dirsmo87846);
const smo87846 = new VF.Beam([smo77386,smo77387]);
const dirsmo87847 = smo77389.getStemDirection();
smo77389.setStemDirection(dirsmo87847);
smo77390.setStemDirection(dirsmo87847);
smo77391.setStemDirection(dirsmo87847);
const smo87847 = new VF.Beam([smo77389,smo77390,smo77391]);
const dirsmo87850 = smo78203.getStemDirection();
smo78203.setStemDirection(dirsmo87850);
smo78204.setStemDirection(dirsmo87850);
smo78205.setStemDirection(dirsmo87850);
smo78206.setStemDirection(dirsmo87850);
const smo87850 = new VF.Beam([smo78203,smo78204,smo78205,smo78206]);
const dirsmo87851 = smo78207.getStemDirection();
smo78207.setStemDirection(dirsmo87851);
smo78208.setStemDirection(dirsmo87851);
smo78209.setStemDirection(dirsmo87851);
smo78210.setStemDirection(dirsmo87851);
const smo87851 = new VF.Beam([smo78207,smo78208,smo78209,smo78210]);
const dirsmo87854 = smo79014.getStemDirection();
smo79014.setStemDirection(dirsmo87854);
smo79015.setStemDirection(dirsmo87854);
smo79016.setStemDirection(dirsmo87854);
smo79017.setStemDirection(dirsmo87854);
const smo87854 = new VF.Beam([smo79014,smo79015,smo79016,smo79017]);
const dirsmo87855 = smo79018.getStemDirection();
smo79018.setStemDirection(dirsmo87855);
smo79019.setStemDirection(dirsmo87855);
smo79020.setStemDirection(dirsmo87855);
smo79021.setStemDirection(dirsmo87855);
const smo87855 = new VF.Beam([smo79018,smo79019,smo79020,smo79021]);
const dirsmo87860 = smo80695.getStemDirection();
smo80695.setStemDirection(dirsmo87860);
smo80696.setStemDirection(dirsmo87860);
smo80697.setStemDirection(dirsmo87860);
smo80698.setStemDirection(dirsmo87860);
const smo87860 = new VF.Beam([smo80695,smo80696,smo80697,smo80698]);
const dirsmo87861 = smo80699.getStemDirection();
smo80699.setStemDirection(dirsmo87861);
smo80700.setStemDirection(dirsmo87861);
smo80701.setStemDirection(dirsmo87861);
smo80702.setStemDirection(dirsmo87861);
const smo87861 = new VF.Beam([smo80699,smo80700,smo80701,smo80702]);
 
// formatting measures in staff group smo81406
fmtsmo774074.format([smo77407v0,smo78226v0,smo79037v0,smo79820v0,smo80718v0], 312);
const stavesmo77407 = new VF.Stave(55, 839, 421);
stavesmo77407.setAttribute('id', 'stavesmo77407');
stavesmo77407.setBegBarType(1);
stavesmo77407.addClef('treble');
const keysmo77407 = new VF.KeySignature('E');
keysmo77407.addToStave(stavesmo77407);
stavesmo77407.setContext(context);
stavesmo77407.draw();
smo77407v0.draw(context, stavesmo77407);
smo87845.setContext(context);
smo87845.draw();
smo87846.setContext(context);
smo87846.draw();
smo87847.setContext(context);
smo87847.draw();
const stavesmo78226 = new VF.Stave(55, 933, 421);
stavesmo78226.setAttribute('id', 'stavesmo78226');
stavesmo78226.setBegBarType(1);
stavesmo78226.addClef('treble');
const keysmo78226 = new VF.KeySignature('E');
keysmo78226.addToStave(stavesmo78226);
stavesmo78226.setContext(context);
stavesmo78226.draw();
smo78226v0.draw(context, stavesmo78226);
smo87850.setContext(context);
smo87850.draw();
smo87851.setContext(context);
smo87851.draw();
const stavesmo79037 = new VF.Stave(55, 1011, 421);
stavesmo79037.setAttribute('id', 'stavesmo79037');
stavesmo79037.setBegBarType(1);
stavesmo79037.addClef('alto');
const keysmo79037 = new VF.KeySignature('E');
keysmo79037.addToStave(stavesmo79037);
stavesmo79037.setContext(context);
stavesmo79037.draw();
smo79037v0.draw(context, stavesmo79037);
smo87854.setContext(context);
smo87854.draw();
smo87855.setContext(context);
smo87855.draw();
const stavesmo79820 = new VF.Stave(55, 1109, 421);
stavesmo79820.setAttribute('id', 'stavesmo79820');
stavesmo79820.setBegBarType(1);
stavesmo79820.addClef('treble');
const keysmo79820 = new VF.KeySignature('E');
keysmo79820.addToStave(stavesmo79820);
stavesmo79820.setContext(context);
stavesmo79820.draw();
smo79820v0.draw(context, stavesmo79820);
const stavesmo80718 = new VF.Stave(55, 1231, 421);
stavesmo80718.setAttribute('id', 'stavesmo80718');
stavesmo80718.setBegBarType(1);
stavesmo80718.addClef('bass');
const keysmo80718 = new VF.KeySignature('E');
keysmo80718.addToStave(stavesmo80718);
stavesmo80718.setContext(context);
stavesmo80718.draw();
smo80718v0.draw(context, stavesmo80718);
smo87860.setContext(context);
smo87860.draw();
smo87861.setContext(context);
smo87861.draw();
const leftsmo81406stavesmo774074 = new VF.StaveConnector(stavesmo77407, stavesmo80718).setType(4);
leftsmo81406stavesmo774074.setContext(context).draw();
const fmtsmo774315 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo77431v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo77431v0ar = [];
const smo77408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo77408.setAttribute('id', 'smo77408');
smo77431v0ar.push(smo77408);
const smo77409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo77409.setAttribute('id', 'smo77409');
smo77431v0ar.push(smo77409);
const smo77410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo77410.setAttribute('id', 'smo77410');
smo77431v0ar.push(smo77410);
const smo77411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo77411.setAttribute('id', 'smo77411');
smo77431v0ar.push(smo77411);
const smo77412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo77412.setAttribute('id', 'smo77412');
smo77431v0ar.push(smo77412);
const smo77413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo77413.setAttribute('id', 'smo77413');
smo77431v0ar.push(smo77413);
const smo77414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo77414.setAttribute('id', 'smo77414');
smo77431v0ar.push(smo77414);
const smo77415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo77415.setAttribute('id', 'smo77415');
smo77431v0ar.push(smo77415);
smo77431v0.addTickables(smo77431v0ar)
fmtsmo774315.joinVoices([smo77431v0]);
const fmtsmo782505 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo78250v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78250v0ar = [];
const smo78227 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78227.setAttribute('id', 'smo78227');
smo78250v0ar.push(smo78227);
const smo78228 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78228.setAttribute('id', 'smo78228');
smo78250v0ar.push(smo78228);
const smo78229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78229.setAttribute('id', 'smo78229');
smo78250v0ar.push(smo78229);
const smo78230 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78230.setAttribute('id', 'smo78230');
smo78250v0ar.push(smo78230);
const smo78231 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78231.setAttribute('id', 'smo78231');
smo78250v0ar.push(smo78231);
const smo78232 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78232.setAttribute('id', 'smo78232');
smo78250v0ar.push(smo78232);
const smo78233 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["d#/4/n"]}'))
smo78233.setAttribute('id', 'smo78233');
smo78250v0ar.push(smo78233);
const smo78234 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["d#/4/n"]}'))
smo78234.setAttribute('id', 'smo78234');
smo78250v0ar.push(smo78234);
smo78250v0.addTickables(smo78250v0ar)
fmtsmo782505.joinVoices([smo78250v0]);
const fmtsmo790615 = new VF.Formatter();
//
// voices and notes for stave 2 5
const smo79061v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo79061v0ar = [];
const smo79038 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo79038.setAttribute('id', 'smo79038');
smo79061v0ar.push(smo79038);
const smo79039 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo79039.setAttribute('id', 'smo79039');
smo79061v0ar.push(smo79039);
const smo79040 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo79040.setAttribute('id', 'smo79040');
smo79061v0ar.push(smo79040);
const smo79041 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo79041.setAttribute('id', 'smo79041');
smo79061v0ar.push(smo79041);
const smo79042 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo79042.setAttribute('id', 'smo79042');
smo79061v0ar.push(smo79042);
const smo79043 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo79043.setAttribute('id', 'smo79043');
smo79061v0ar.push(smo79043);
const smo79044 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo79044.setAttribute('id', 'smo79044');
smo79061v0ar.push(smo79044);
const smo79045 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo79045.setAttribute('id', 'smo79045');
smo79061v0ar.push(smo79045);
smo79061v0.addTickables(smo79061v0ar)
fmtsmo790615.joinVoices([smo79061v0]);
const fmtsmo798475 = new VF.Formatter();
//
// voices and notes for stave 3 5
const smo79847v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo79847v0ar = [];
const smo79821 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo79821.setAttribute('id', 'smo79821');
smo79821.addModifier(new VF.Dot(), 0);
const smo79822 = new VF.Annotation('-');
smo79822.setAttribute('id', 'smo79822');
smo79822.setFont('Merriweather', 12, 'normal');
smo79822.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo79821.addModifier(smo79822);
smo79822.addClass('lyric lyric-0 lyric-hyphen');
smo79847v0ar.push(smo79821);
const smo79823 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo79823.setAttribute('id', 'smo79823');
const smo79824 = new VF.Annotation('fort');
smo79824.setAttribute('id', 'smo79824');
smo79824.setFont('Merriweather', 12, 'normal');
smo79824.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo79823.addModifier(smo79824);
smo79824.addClass('lyric lyric-0');
smo79847v0ar.push(smo79823);
const smo79825 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["g#/5/n"]}'))
smo79825.setAttribute('id', 'smo79825');
smo79847v0ar.push(smo79825);
const smo79826 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo79826.setAttribute('id', 'smo79826');
const smo79827 = new VF.Annotation('ye');
smo79827.setAttribute('id', 'smo79827');
smo79827.setFont('Merriweather', 12, 'normal');
smo79827.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo79826.addModifier(smo79827);
smo79827.addClass('lyric lyric-0');
smo79847v0ar.push(smo79826);
const smo79828 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo79828.setAttribute('id', 'smo79828');
smo79828.addModifier(new VF.Dot(), 0);
const smo79829 = new VF.Annotation('-');
smo79829.setAttribute('id', 'smo79829');
smo79829.setFont('Merriweather', 12, 'normal');
smo79829.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo79828.addModifier(smo79829);
smo79829.addClass('lyric lyric-0 lyric-hyphen');
smo79847v0ar.push(smo79828);
const smo79830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo79830.setAttribute('id', 'smo79830');
const smo79831 = new VF.Annotation('my');
smo79831.setAttribute('id', 'smo79831');
smo79831.setFont('Merriweather', 12, 'normal');
smo79831.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo79830.addModifier(smo79831);
smo79831.addClass('lyric lyric-0');
smo79847v0ar.push(smo79830);
smo79847v0.addTickables(smo79847v0ar)
fmtsmo798475.joinVoices([smo79847v0]);
const fmtsmo807425 = new VF.Formatter();
//
// voices and notes for stave 4 5
const smo80742v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80742v0ar = [];
const smo80719 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80719.setAttribute('id', 'smo80719');
smo80742v0ar.push(smo80719);
const smo80720 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80720.setAttribute('id', 'smo80720');
smo80742v0ar.push(smo80720);
const smo80721 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80721.setAttribute('id', 'smo80721');
smo80742v0ar.push(smo80721);
const smo80722 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80722.setAttribute('id', 'smo80722');
smo80742v0ar.push(smo80722);
const smo80723 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80723.setAttribute('id', 'smo80723');
smo80742v0ar.push(smo80723);
const smo80724 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80724.setAttribute('id', 'smo80724');
smo80742v0ar.push(smo80724);
const smo80725 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n"]}'))
smo80725.setAttribute('id', 'smo80725');
smo80742v0ar.push(smo80725);
const smo80726 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n"]}'))
smo80726.setAttribute('id', 'smo80726');
smo80742v0ar.push(smo80726);
smo80742v0.addTickables(smo80742v0ar)
fmtsmo807425.joinVoices([smo80742v0]);
// create beam groups and tuplets for format grp smo81406 before formatting
const dirsmo87864 = smo77408.getStemDirection();
smo77408.setStemDirection(dirsmo87864);
smo77409.setStemDirection(dirsmo87864);
smo77410.setStemDirection(dirsmo87864);
smo77411.setStemDirection(dirsmo87864);
const smo87864 = new VF.Beam([smo77408,smo77409,smo77410,smo77411]);
const dirsmo87865 = smo77412.getStemDirection();
smo77412.setStemDirection(dirsmo87865);
smo77413.setStemDirection(dirsmo87865);
smo77414.setStemDirection(dirsmo87865);
smo77415.setStemDirection(dirsmo87865);
const smo87865 = new VF.Beam([smo77412,smo77413,smo77414,smo77415]);
const dirsmo87868 = smo78227.getStemDirection();
smo78227.setStemDirection(dirsmo87868);
smo78228.setStemDirection(dirsmo87868);
smo78229.setStemDirection(dirsmo87868);
smo78230.setStemDirection(dirsmo87868);
const smo87868 = new VF.Beam([smo78227,smo78228,smo78229,smo78230]);
const dirsmo87869 = smo78231.getStemDirection();
smo78231.setStemDirection(dirsmo87869);
smo78232.setStemDirection(dirsmo87869);
smo78233.setStemDirection(dirsmo87869);
smo78234.setStemDirection(dirsmo87869);
const smo87869 = new VF.Beam([smo78231,smo78232,smo78233,smo78234]);
const dirsmo87872 = smo79038.getStemDirection();
smo79038.setStemDirection(dirsmo87872);
smo79039.setStemDirection(dirsmo87872);
smo79040.setStemDirection(dirsmo87872);
smo79041.setStemDirection(dirsmo87872);
const smo87872 = new VF.Beam([smo79038,smo79039,smo79040,smo79041]);
const dirsmo87873 = smo79042.getStemDirection();
smo79042.setStemDirection(dirsmo87873);
smo79043.setStemDirection(dirsmo87873);
smo79044.setStemDirection(dirsmo87873);
smo79045.setStemDirection(dirsmo87873);
const smo87873 = new VF.Beam([smo79042,smo79043,smo79044,smo79045]);
const dirsmo87876 = smo79823.getStemDirection();
smo79823.setStemDirection(dirsmo87876);
smo79825.setStemDirection(dirsmo87876);
const smo87876 = new VF.Beam([smo79823,smo79825]);
const dirsmo87877 = smo79828.getStemDirection();
smo79828.setStemDirection(dirsmo87877);
smo79830.setStemDirection(dirsmo87877);
const smo87877 = new VF.Beam([smo79828,smo79830]);
const dirsmo87880 = smo80719.getStemDirection();
smo80719.setStemDirection(dirsmo87880);
smo80720.setStemDirection(dirsmo87880);
smo80721.setStemDirection(dirsmo87880);
smo80722.setStemDirection(dirsmo87880);
const smo87880 = new VF.Beam([smo80719,smo80720,smo80721,smo80722]);
const dirsmo87881 = smo80723.getStemDirection();
smo80723.setStemDirection(dirsmo87881);
smo80724.setStemDirection(dirsmo87881);
smo80725.setStemDirection(dirsmo87881);
smo80726.setStemDirection(dirsmo87881);
const smo87881 = new VF.Beam([smo80723,smo80724,smo80725,smo80726]);
 
// formatting measures in staff group smo81406
fmtsmo774315.format([smo77431v0,smo78250v0,smo79061v0,smo79847v0,smo80742v0], 364);
const stavesmo77431 = new VF.Stave(476, 839, 378);
stavesmo77431.setAttribute('id', 'stavesmo77431');
stavesmo77431.setBegBarType(VF.Barline.type.NONE);
stavesmo77431.setContext(context);
stavesmo77431.draw();
smo77431v0.draw(context, stavesmo77431);
smo87864.setContext(context);
smo87864.draw();
smo87865.setContext(context);
smo87865.draw();
const stavesmo78250 = new VF.Stave(476, 933, 378);
stavesmo78250.setAttribute('id', 'stavesmo78250');
stavesmo78250.setBegBarType(VF.Barline.type.NONE);
stavesmo78250.setContext(context);
stavesmo78250.draw();
smo78250v0.draw(context, stavesmo78250);
smo87868.setContext(context);
smo87868.draw();
smo87869.setContext(context);
smo87869.draw();
const stavesmo79061 = new VF.Stave(476, 1011, 378);
stavesmo79061.setAttribute('id', 'stavesmo79061');
stavesmo79061.setBegBarType(VF.Barline.type.NONE);
stavesmo79061.setContext(context);
stavesmo79061.draw();
smo79061v0.draw(context, stavesmo79061);
smo87872.setContext(context);
smo87872.draw();
smo87873.setContext(context);
smo87873.draw();
const stavesmo79847 = new VF.Stave(476, 1109, 378);
stavesmo79847.setAttribute('id', 'stavesmo79847');
stavesmo79847.setBegBarType(VF.Barline.type.NONE);
stavesmo79847.setContext(context);
stavesmo79847.draw();
smo79847v0.draw(context, stavesmo79847);
smo87876.setContext(context);
smo87876.draw();
smo87877.setContext(context);
smo87877.draw();
const stavesmo80742 = new VF.Stave(476, 1231, 378);
stavesmo80742.setAttribute('id', 'stavesmo80742');
stavesmo80742.setBegBarType(VF.Barline.type.NONE);
stavesmo80742.setContext(context);
stavesmo80742.draw();
smo80742v0.draw(context, stavesmo80742);
smo87880.setContext(context);
smo87880.draw();
smo87881.setContext(context);
smo87881.draw();
const fmtsmo774536 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo77453v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo77453v0ar = [];
const smo77432 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo77432.setAttribute('id', 'smo77432');
smo77432.addModifier(new VF.Dot(), 0);
smo77453v0ar.push(smo77432);
const smo77433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo77433.setAttribute('id', 'smo77433');
smo77453v0ar.push(smo77433);
const smo77434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo77434.setAttribute('id', 'smo77434');
smo77453v0ar.push(smo77434);
const smo77435 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["g#/5/n"]}'))
smo77435.setAttribute('id', 'smo77435');
smo77435.addModifier(new VF.Dot(), 0);
smo77453v0ar.push(smo77435);
const smo77436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo77436.setAttribute('id', 'smo77436');
smo77453v0ar.push(smo77436);
const smo77437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo77437.setAttribute('id', 'smo77437');
smo77453v0ar.push(smo77437);
smo77453v0.addTickables(smo77453v0ar)
fmtsmo774536.joinVoices([smo77453v0]);
const fmtsmo782726 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo78272v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78272v0ar = [];
const smo78251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo78251.setAttribute('id', 'smo78251');
smo78251.addModifier(new VF.Dot(), 0);
smo78272v0ar.push(smo78251);
const smo78252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo78252.setAttribute('id', 'smo78252');
smo78272v0ar.push(smo78252);
const smo78253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78253.setAttribute('id', 'smo78253');
smo78272v0ar.push(smo78253);
const smo78254 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo78254.setAttribute('id', 'smo78254');
smo78254.addModifier(new VF.Dot(), 0);
smo78272v0ar.push(smo78254);
const smo78255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo78255.setAttribute('id', 'smo78255');
smo78272v0ar.push(smo78255);
const smo78256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo78256.setAttribute('id', 'smo78256');
smo78272v0ar.push(smo78256);
smo78272v0.addTickables(smo78272v0ar)
fmtsmo782726.joinVoices([smo78272v0]);
const fmtsmo790836 = new VF.Formatter();
//
// voices and notes for stave 2 6
const smo79083v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo79083v0ar = [];
const smo79062 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79062.setAttribute('id', 'smo79062');
smo79062.addModifier(new VF.Dot(), 0);
smo79083v0ar.push(smo79062);
const smo79063 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo79063.setAttribute('id', 'smo79063');
smo79083v0ar.push(smo79063);
const smo79064 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo79064.setAttribute('id', 'smo79064');
smo79083v0ar.push(smo79064);
const smo79065 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79065.setAttribute('id', 'smo79065');
smo79065.addModifier(new VF.Dot(), 0);
smo79083v0ar.push(smo79065);
const smo79066 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo79066.setAttribute('id', 'smo79066');
smo79083v0ar.push(smo79066);
const smo79067 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo79067.setAttribute('id', 'smo79067');
smo79083v0ar.push(smo79067);
smo79083v0.addTickables(smo79083v0ar)
fmtsmo790836.joinVoices([smo79083v0]);
const fmtsmo798716 = new VF.Formatter();
//
// voices and notes for stave 3 6
const smo79871v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo79871v0ar = [];
const smo79848 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo79848.setAttribute('id', 'smo79848');
const smo79849 = new VF.Annotation('peo');
smo79849.setAttribute('id', 'smo79849');
smo79849.setFont('Merriweather', 12, 'normal');
smo79849.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo79848.addModifier(smo79849);
smo79849.addClass('lyric lyric-0');
smo79871v0ar.push(smo79848);
const smo79850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo79850.setAttribute('id', 'smo79850');
const smo79851 = new VF.Annotation('-');
smo79851.setAttribute('id', 'smo79851');
smo79851.setFont('Merriweather', 12, 'normal');
smo79851.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo79850.addModifier(smo79851);
smo79851.addClass('lyric lyric-0 lyric-hyphen');
smo79871v0ar.push(smo79850);
const smo79852 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79852.setAttribute('id', 'smo79852');
smo79871v0ar.push(smo79852);
const smo79853 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo79853.setAttribute('id', 'smo79853');
const smo79854 = new VF.Annotation('ple');
smo79854.setAttribute('id', 'smo79854');
smo79854.setFont('Merriweather', 12, 'normal');
smo79854.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo79853.addModifier(smo79854);
smo79854.addClass('lyric lyric-0');
smo79871v0ar.push(smo79853);
const smo79855 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo79855.setAttribute('id', 'smo79855');
smo79871v0ar.push(smo79855);
smo79871v0.addTickables(smo79871v0ar)
fmtsmo798716.joinVoices([smo79871v0]);
const fmtsmo807626 = new VF.Formatter();
//
// voices and notes for stave 4 6
const smo80762v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80762v0ar = [];
const smo80743 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo80743.setAttribute('id', 'smo80743');
smo80743.addModifier(new VF.Dot(), 0);
smo80762v0ar.push(smo80743);
const smo80744 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo80744.setAttribute('id', 'smo80744');
smo80762v0ar.push(smo80744);
const smo80745 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo80745.setAttribute('id', 'smo80745');
smo80762v0ar.push(smo80745);
const smo80746 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo80746.setAttribute('id', 'smo80746');
smo80762v0ar.push(smo80746);
smo80762v0.addTickables(smo80762v0ar)
fmtsmo807626.joinVoices([smo80762v0]);
// create beam groups and tuplets for format grp smo81406 before formatting
const dirsmo87884 = smo77432.getStemDirection();
smo77432.setStemDirection(dirsmo87884);
smo77433.setStemDirection(dirsmo87884);
const smo87884 = new VF.Beam([smo77432,smo77433]);
const dirsmo87885 = smo77435.getStemDirection();
smo77435.setStemDirection(dirsmo87885);
smo77436.setStemDirection(dirsmo87885);
const smo87885 = new VF.Beam([smo77435,smo77436]);
const dirsmo87888 = smo78251.getStemDirection();
smo78251.setStemDirection(dirsmo87888);
smo78252.setStemDirection(dirsmo87888);
const smo87888 = new VF.Beam([smo78251,smo78252]);
const dirsmo87889 = smo78254.getStemDirection();
smo78254.setStemDirection(dirsmo87889);
smo78255.setStemDirection(dirsmo87889);
const smo87889 = new VF.Beam([smo78254,smo78255]);
const dirsmo87892 = smo79062.getStemDirection();
smo79062.setStemDirection(dirsmo87892);
smo79063.setStemDirection(dirsmo87892);
const smo87892 = new VF.Beam([smo79062,smo79063]);
const dirsmo87893 = smo79065.getStemDirection();
smo79065.setStemDirection(dirsmo87893);
smo79066.setStemDirection(dirsmo87893);
const smo87893 = new VF.Beam([smo79065,smo79066]);
const dirsmo87896 = smo79848.getStemDirection();
smo79848.setStemDirection(dirsmo87896);
smo79850.setStemDirection(dirsmo87896);
smo79852.setStemDirection(dirsmo87896);
const smo87896 = new VF.Beam([smo79848,smo79850,smo79852]);
const dirsmo87899 = smo80743.getStemDirection();
smo80743.setStemDirection(dirsmo87899);
smo80744.setStemDirection(dirsmo87899);
const smo87899 = new VF.Beam([smo80743,smo80744]);
 
// formatting measures in staff group smo81406
fmtsmo774536.format([smo77453v0,smo78272v0,smo79083v0,smo79871v0,smo80762v0], 275);
const stavesmo77453 = new VF.Stave(854, 839, 289);
stavesmo77453.setAttribute('id', 'stavesmo77453');
stavesmo77453.setBegBarType(VF.Barline.type.NONE);
stavesmo77453.setContext(context);
stavesmo77453.draw();
smo77453v0.draw(context, stavesmo77453);
smo87884.setContext(context);
smo87884.draw();
smo87885.setContext(context);
smo87885.draw();
const stavesmo78272 = new VF.Stave(854, 933, 289);
stavesmo78272.setAttribute('id', 'stavesmo78272');
stavesmo78272.setBegBarType(VF.Barline.type.NONE);
stavesmo78272.setContext(context);
stavesmo78272.draw();
smo78272v0.draw(context, stavesmo78272);
smo87888.setContext(context);
smo87888.draw();
smo87889.setContext(context);
smo87889.draw();
const stavesmo79083 = new VF.Stave(854, 1011, 289);
stavesmo79083.setAttribute('id', 'stavesmo79083');
stavesmo79083.setBegBarType(VF.Barline.type.NONE);
stavesmo79083.setContext(context);
stavesmo79083.draw();
smo79083v0.draw(context, stavesmo79083);
smo87892.setContext(context);
smo87892.draw();
smo87893.setContext(context);
smo87893.draw();
const stavesmo79871 = new VF.Stave(854, 1109, 289);
stavesmo79871.setAttribute('id', 'stavesmo79871');
stavesmo79871.setBegBarType(VF.Barline.type.NONE);
stavesmo79871.setContext(context);
stavesmo79871.draw();
smo79871v0.draw(context, stavesmo79871);
smo87896.setContext(context);
smo87896.draw();
const stavesmo80762 = new VF.Stave(854, 1231, 289);
stavesmo80762.setAttribute('id', 'stavesmo80762');
stavesmo80762.setBegBarType(VF.Barline.type.NONE);
stavesmo80762.setContext(context);
stavesmo80762.draw();
smo80762v0.draw(context, stavesmo80762);
smo87899.setContext(context);
smo87899.draw();
const fmtsmo774707 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo77470v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo77470v0ar = [];
const smo77454 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo77454.setAttribute('id', 'smo77454');
smo77470v0ar.push(smo77454);
smo77470v0.addTickables(smo77470v0ar)
fmtsmo774707.joinVoices([smo77470v0]);
const fmtsmo782897 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo78289v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78289v0ar = [];
const smo78273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo78273.setAttribute('id', 'smo78273');
smo78289v0ar.push(smo78273);
smo78289v0.addTickables(smo78289v0ar)
fmtsmo782897.joinVoices([smo78289v0]);
const fmtsmo791007 = new VF.Formatter();
//
// voices and notes for stave 2 7
const smo79100v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo79100v0ar = [];
const smo79084 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["cn/4/r"]}'))
smo79084.setAttribute('id', 'smo79084');
smo79100v0ar.push(smo79084);
smo79100v0.addTickables(smo79100v0ar)
fmtsmo791007.joinVoices([smo79100v0]);
const fmtsmo798957 = new VF.Formatter();
//
// voices and notes for stave 3 7
const smo79895v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo79895v0ar = [];
const smo79872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo79872.setAttribute('id', 'smo79872');
const smo79873 = new VF.Annotation('Com');
smo79873.setAttribute('id', 'smo79873');
smo79873.setFont('Merriweather', 12, 'normal');
smo79873.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo79872.addModifier(smo79873);
smo79873.addClass('lyric lyric-0');
smo79895v0ar.push(smo79872);
const smo79874 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo79874.setAttribute('id', 'smo79874');
smo79874.addModifier(new VF.Dot(), 0);
const smo79875 = new VF.Annotation('-');
smo79875.setAttribute('id', 'smo79875');
smo79875.setFont('Merriweather', 12, 'normal');
smo79875.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo79874.addModifier(smo79875);
smo79875.addClass('lyric lyric-0 lyric-hyphen');
smo79895v0ar.push(smo79874);
const smo79876 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo79876.setAttribute('id', 'smo79876');
const smo79877 = new VF.Annotation('fort');
smo79877.setAttribute('id', 'smo79877');
smo79877.setFont('Merriweather', 12, 'normal');
smo79877.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo79876.addModifier(smo79877);
smo79877.addClass('lyric lyric-0');
smo79895v0ar.push(smo79876);
const smo79878 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo79878.setAttribute('id', 'smo79878');
const smo79879 = new VF.Annotation('ye,');
smo79879.setAttribute('id', 'smo79879');
smo79879.setFont('Merriweather', 12, 'normal');
smo79879.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo79878.addModifier(smo79879);
smo79879.addClass('lyric lyric-0');
smo79895v0ar.push(smo79878);
smo79895v0.addTickables(smo79895v0ar)
fmtsmo798957.joinVoices([smo79895v0]);
const fmtsmo807797 = new VF.Formatter();
//
// voices and notes for stave 4 7
const smo80779v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80779v0ar = [];
const smo80763 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo80763.setAttribute('id', 'smo80763');
smo80779v0ar.push(smo80763);
smo80779v0.addTickables(smo80779v0ar)
fmtsmo807797.joinVoices([smo80779v0]);
// create beam groups and tuplets for format grp smo81406 before formatting
const dirsmo87908 = smo79874.getStemDirection();
smo79874.setStemDirection(dirsmo87908);
smo79876.setStemDirection(dirsmo87908);
const smo87908 = new VF.Beam([smo79874,smo79876]);
 
// formatting measures in staff group smo81406
fmtsmo774707.format([smo77470v0,smo78289v0,smo79100v0,smo79895v0,smo80779v0], 218);
const stavesmo77470 = new VF.Stave(1143, 839, 232);
stavesmo77470.setAttribute('id', 'stavesmo77470');
stavesmo77470.setBegBarType(VF.Barline.type.NONE);
stavesmo77470.setContext(context);
stavesmo77470.draw();
smo77470v0.draw(context, stavesmo77470);
const stavesmo78289 = new VF.Stave(1143, 933, 232);
stavesmo78289.setAttribute('id', 'stavesmo78289');
stavesmo78289.setBegBarType(VF.Barline.type.NONE);
stavesmo78289.setContext(context);
stavesmo78289.draw();
smo78289v0.draw(context, stavesmo78289);
const stavesmo79100 = new VF.Stave(1143, 1011, 232);
stavesmo79100.setAttribute('id', 'stavesmo79100');
stavesmo79100.setBegBarType(VF.Barline.type.NONE);
stavesmo79100.setContext(context);
stavesmo79100.draw();
smo79100v0.draw(context, stavesmo79100);
const stavesmo79895 = new VF.Stave(1143, 1109, 232);
stavesmo79895.setAttribute('id', 'stavesmo79895');
stavesmo79895.setBegBarType(VF.Barline.type.NONE);
stavesmo79895.setContext(context);
stavesmo79895.draw();
smo79895v0.draw(context, stavesmo79895);
smo87908.setContext(context);
smo87908.draw();
const stavesmo80779 = new VF.Stave(1143, 1231, 232);
stavesmo80779.setAttribute('id', 'stavesmo80779');
stavesmo80779.setBegBarType(VF.Barline.type.NONE);
stavesmo80779.setContext(context);
stavesmo80779.draw();
smo80779v0.draw(context, stavesmo80779);
const rightsmo81406stavesmo774704 = new VF.StaveConnector(stavesmo77470, stavesmo80779).setType(0);
rightsmo81406stavesmo774704.setContext(context).draw();
// modifier from 0-0-0-0 to 0-0-0-3
const smo88964 = new VF.Curve(smo77286, smo77293, JSON.parse('{"thickness":2,"xShift":0,"yShift":25,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo88964.setContext(context).draw();
// modifier from 0-4-0-4 to 0-4-0-5
const smo88965 = new VF.Curve(smo77388, smo77389, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo88965.setContext(context).draw();
// modifier from 0-0-0-4 to 0-0-0-5
const smo88966 = new VF.Curve(smo77295, smo77296, JSON.parse('{"thickness":2,"xShift":0,"yShift":5,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo88966.setContext(context).draw();
// modifier from 0-1-0-4 to 0-1-0-5
const smo88967 = new VF.Curve(smo77319, smo77320, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo88967.setContext(context).draw();
// modifier from 1-0-0-0 to 1-0-0-3
const smo88968 = new VF.Curve(smo78106, smo78112, JSON.parse('{"thickness":2,"xShift":0,"yShift":20,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo88968.setContext(context).draw();
// modifier from 2-0-0-0 to 2-0-0-3
const smo88969 = new VF.Curve(smo78917, smo78923, JSON.parse('{"thickness":2,"xShift":0,"yShift":20,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo88969.setContext(context).draw();
// modifier from 3-7-0-0 to 3-7-0-1
const smo88970 = new VF.Curve(smo79872, smo79874, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo88970.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo79780').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo79784').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo79804').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo79822').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo79824').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo79829').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo79831').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo79849').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo79851').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo79854').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo79873').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo79875').setAttributeNS('', 'transform', 'translate(0 15)');
}
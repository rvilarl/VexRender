// @@ Comfort Ye, My People p 1/4 (Comfort Ye, my people (tenor)) by Handel
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = VexFlow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1421.487603305785');
svg.setAttributeNS('', 'height', '1839.5721925133685');
svg.setAttributeNS('', 'viewBox', '0 0 1484 1920');
//
// create the musical objects
VF.setFonts("Bravura","Academico");
const fmtsmo784770 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo78477v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78477v0ar = [];
const smo78449 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo78449.setAttribute('id', 'smo78449');
const  smo90045 = new VF.Articulation('a.').setPosition(4);
smo78449.addModifier(smo90045, 0);
smo78477v0ar.push(smo78449);
const smo78452 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo78452.setAttribute('id', 'smo78452');
const  smo90046 = new VF.Articulation('a.').setPosition(4);
smo78452.addModifier(smo90046, 0);
smo78477v0ar.push(smo78452);
const smo78454 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo78454.setAttribute('id', 'smo78454');
const  smo90047 = new VF.Articulation('a.').setPosition(4);
smo78454.addModifier(smo90047, 0);
smo78477v0ar.push(smo78454);
const smo78456 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo78456.setAttribute('id', 'smo78456');
const  smo90048 = new VF.Articulation('a.').setPosition(4);
smo78456.addModifier(smo90048, 0);
smo78477v0ar.push(smo78456);
const smo78458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo78458.setAttribute('id', 'smo78458');
smo78477v0ar.push(smo78458);
const smo78459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo78459.setAttribute('id', 'smo78459');
smo78459.addModifier(new VF.Dot(), 0);
smo78477v0ar.push(smo78459);
const smo78460 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo78460.setAttribute('id', 'smo78460');
smo78477v0ar.push(smo78460);
const smo78461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo78461.setAttribute('id', 'smo78461');
smo78477v0ar.push(smo78461);
smo78477v0.addTickables(smo78477v0ar)
fmtsmo784770.joinVoices([smo78477v0]);
const fmtsmo792960 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo79296v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo79296v0ar = [];
const smo79269 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79269.setAttribute('id', 'smo79269');
const  smo90049 = new VF.Articulation('a.').setPosition(4);
smo79269.addModifier(smo90049, 0);
smo79296v0ar.push(smo79269);
const smo79271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79271.setAttribute('id', 'smo79271');
const  smo90050 = new VF.Articulation('a.').setPosition(4);
smo79271.addModifier(smo90050, 0);
smo79296v0ar.push(smo79271);
const smo79273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79273.setAttribute('id', 'smo79273');
const  smo90051 = new VF.Articulation('a.').setPosition(4);
smo79273.addModifier(smo90051, 0);
smo79296v0ar.push(smo79273);
const smo79275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79275.setAttribute('id', 'smo79275');
const  smo90052 = new VF.Articulation('a.').setPosition(4);
smo79275.addModifier(smo90052, 0);
smo79296v0ar.push(smo79275);
const smo79277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79277.setAttribute('id', 'smo79277');
smo79296v0ar.push(smo79277);
const smo79278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79278.setAttribute('id', 'smo79278');
smo79296v0ar.push(smo79278);
const smo79279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79279.setAttribute('id', 'smo79279');
smo79296v0ar.push(smo79279);
const smo79280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79280.setAttribute('id', 'smo79280');
smo79296v0ar.push(smo79280);
smo79296v0.addTickables(smo79296v0ar)
fmtsmo792960.joinVoices([smo79296v0]);
const fmtsmo801070 = new VF.Formatter();
//
// voices and notes for stave 2 0
const smo80107v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80107v0ar = [];
const smo80080 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80080.setAttribute('id', 'smo80080');
const  smo90053 = new VF.Articulation('a.').setPosition(4);
smo80080.addModifier(smo90053, 0);
smo80107v0ar.push(smo80080);
const smo80082 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80082.setAttribute('id', 'smo80082');
const  smo90054 = new VF.Articulation('a.').setPosition(4);
smo80082.addModifier(smo90054, 0);
smo80107v0ar.push(smo80082);
const smo80084 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80084.setAttribute('id', 'smo80084');
const  smo90055 = new VF.Articulation('a.').setPosition(4);
smo80084.addModifier(smo90055, 0);
smo80107v0ar.push(smo80084);
const smo80086 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80086.setAttribute('id', 'smo80086');
const  smo90056 = new VF.Articulation('a.').setPosition(4);
smo80086.addModifier(smo90056, 0);
smo80107v0ar.push(smo80086);
const smo80088 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80088.setAttribute('id', 'smo80088');
smo80107v0ar.push(smo80088);
const smo80089 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80089.setAttribute('id', 'smo80089');
smo80107v0ar.push(smo80089);
const smo80090 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80090.setAttribute('id', 'smo80090');
smo80107v0ar.push(smo80090);
const smo80091 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80091.setAttribute('id', 'smo80091');
smo80107v0ar.push(smo80091);
smo80107v0.addTickables(smo80107v0ar)
fmtsmo801070.joinVoices([smo80107v0]);
const fmtsmo809070 = new VF.Formatter();
//
// voices and notes for stave 3 0
const smo80907v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80907v0ar = [];
const smo80891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo80891.setAttribute('id', 'smo80891');
smo80907v0ar.push(smo80891);
smo80907v0.addTickables(smo80907v0ar)
fmtsmo809070.joinVoices([smo80907v0]);
const fmtsmo817920 = new VF.Formatter();
//
// voices and notes for stave 4 0
const smo81792v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81792v0ar = [];
const smo81772 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo81772.setAttribute('id', 'smo81772');
smo81792v0ar.push(smo81772);
const smo81773 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/2/n"]}'))
smo81773.setAttribute('id', 'smo81773');
smo81792v0ar.push(smo81773);
const smo81774 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/2/n"]}'))
smo81774.setAttribute('id', 'smo81774');
smo81792v0ar.push(smo81774);
const smo81775 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/2/n"]}'))
smo81775.setAttribute('id', 'smo81775');
smo81792v0ar.push(smo81775);
const smo81776 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/2/n"]}'))
smo81776.setAttribute('id', 'smo81776');
smo81792v0ar.push(smo81776);
smo81792v0.addTickables(smo81792v0ar)
fmtsmo817920.joinVoices([smo81792v0]);
// create beam groups and tuplets for format grp smo82569 before formatting
const dirsmo88925 = smo78449.getStemDirection();
smo78449.setStemDirection(dirsmo88925);
smo78452.setStemDirection(dirsmo88925);
const smo88925 = new VF.Beam([smo78449,smo78452]);
const dirsmo88926 = smo78454.getStemDirection();
smo78454.setStemDirection(dirsmo88926);
smo78456.setStemDirection(dirsmo88926);
const smo88926 = new VF.Beam([smo78454,smo78456]);
const dirsmo88927 = smo78459.getStemDirection();
smo78459.setStemDirection(dirsmo88927);
smo78460.setStemDirection(dirsmo88927);
smo78461.setStemDirection(dirsmo88927);
const smo88927 = new VF.Beam([smo78459,smo78460,smo78461]);
const dirsmo88929 = smo79269.getStemDirection();
smo79269.setStemDirection(dirsmo88929);
smo79271.setStemDirection(dirsmo88929);
smo79273.setStemDirection(dirsmo88929);
smo79275.setStemDirection(dirsmo88929);
const smo88929 = new VF.Beam([smo79269,smo79271,smo79273,smo79275]);
const dirsmo88930 = smo79277.getStemDirection();
smo79277.setStemDirection(dirsmo88930);
smo79278.setStemDirection(dirsmo88930);
smo79279.setStemDirection(dirsmo88930);
smo79280.setStemDirection(dirsmo88930);
const smo88930 = new VF.Beam([smo79277,smo79278,smo79279,smo79280]);
const dirsmo88932 = smo80080.getStemDirection();
smo80080.setStemDirection(dirsmo88932);
smo80082.setStemDirection(dirsmo88932);
smo80084.setStemDirection(dirsmo88932);
smo80086.setStemDirection(dirsmo88932);
const smo88932 = new VF.Beam([smo80080,smo80082,smo80084,smo80086]);
const dirsmo88933 = smo80088.getStemDirection();
smo80088.setStemDirection(dirsmo88933);
smo80089.setStemDirection(dirsmo88933);
smo80090.setStemDirection(dirsmo88933);
smo80091.setStemDirection(dirsmo88933);
const smo88933 = new VF.Beam([smo80088,smo80089,smo80090,smo80091]);
const dirsmo88936 = smo81773.getStemDirection();
smo81773.setStemDirection(dirsmo88936);
smo81774.setStemDirection(dirsmo88936);
smo81775.setStemDirection(dirsmo88936);
smo81776.setStemDirection(dirsmo88936);
const smo88936 = new VF.Beam([smo81773,smo81774,smo81775,smo81776]);
 
// formatting measures in staff group smo82569
fmtsmo784770.format([smo78477v0,smo79296v0,smo80107v0,smo80907v0,smo81792v0], 287);
const stavesmo78477 = new VF.Stave(55, 255, 403);
stavesmo78477.setAttribute('id', 'stavesmo78477');
stavesmo78477.setBegBarType(1);
stavesmo78477.setTempo(JSON.parse('{"name":"Larghetto"}'), -1 * 0);
stavesmo78477.addClef('treble');
stavesmo78477.addTimeSignature('4/4');
const keysmo78477 = new VF.KeySignature('E');
keysmo78477.addToStave(stavesmo78477);
stavesmo78477.setContext(context);
stavesmo78477.draw();
smo78477v0.draw(context, stavesmo78477);
smo88925.setContext(context);
smo88925.draw();
smo88926.setContext(context);
smo88926.draw();
smo88927.setContext(context);
smo88927.draw();
const stavesmo79296 = new VF.Stave(55, 421, 403);
stavesmo79296.setAttribute('id', 'stavesmo79296');
stavesmo79296.setBegBarType(1);
stavesmo79296.setTempo(JSON.parse('{"name":"Larghetto"}'), -1 * 0);
stavesmo79296.addClef('treble');
stavesmo79296.addTimeSignature('4/4');
const keysmo79296 = new VF.KeySignature('E');
keysmo79296.addToStave(stavesmo79296);
stavesmo79296.setContext(context);
stavesmo79296.draw();
smo79296v0.draw(context, stavesmo79296);
smo88929.setContext(context);
smo88929.draw();
smo88930.setContext(context);
smo88930.draw();
const stavesmo80107 = new VF.Stave(55, 573, 403);
stavesmo80107.setAttribute('id', 'stavesmo80107');
stavesmo80107.setBegBarType(1);
stavesmo80107.setTempo(JSON.parse('{"name":"Larghetto"}'), -1 * 0);
stavesmo80107.addClef('alto');
stavesmo80107.addTimeSignature('4/4');
const keysmo80107 = new VF.KeySignature('E');
keysmo80107.addToStave(stavesmo80107);
stavesmo80107.setContext(context);
stavesmo80107.draw();
smo80107v0.draw(context, stavesmo80107);
smo88932.setContext(context);
smo88932.draw();
smo88933.setContext(context);
smo88933.draw();
const stavesmo80907 = new VF.Stave(55, 724, 403);
stavesmo80907.setAttribute('id', 'stavesmo80907');
stavesmo80907.setBegBarType(1);
stavesmo80907.setTempo(JSON.parse('{"name":"Larghetto"}'), -1 * 0);
stavesmo80907.addClef('treble');
stavesmo80907.addTimeSignature('4/4');
const keysmo80907 = new VF.KeySignature('E');
keysmo80907.addToStave(stavesmo80907);
stavesmo80907.setContext(context);
stavesmo80907.draw();
smo80907v0.draw(context, stavesmo80907);
const stavesmo81792 = new VF.Stave(55, 839, 403);
stavesmo81792.setAttribute('id', 'stavesmo81792');
stavesmo81792.setBegBarType(1);
stavesmo81792.setTempo(JSON.parse('{"name":"Larghetto"}'), -1 * 0);
stavesmo81792.addClef('bass');
stavesmo81792.addTimeSignature('4/4');
const keysmo81792 = new VF.KeySignature('E');
keysmo81792.addToStave(stavesmo81792);
stavesmo81792.setContext(context);
stavesmo81792.draw();
smo81792v0.draw(context, stavesmo81792);
smo88936.setContext(context);
smo88936.draw();
const leftsmo82569stavesmo784774 = new VF.StaveConnector(stavesmo78477, stavesmo81792).setType(4);
leftsmo82569stavesmo784774.setContext(context).draw();
const fmtsmo785011 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo78501v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78501v0ar = [];
const smo78478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo78478.setAttribute('id', 'smo78478');
smo78501v0ar.push(smo78478);
const smo78479 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo78479.setAttribute('id', 'smo78479');
smo78501v0ar.push(smo78479);
const smo78480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo78480.setAttribute('id', 'smo78480');
smo78501v0ar.push(smo78480);
const smo78481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo78481.setAttribute('id', 'smo78481');
smo78501v0ar.push(smo78481);
const smo78482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo78482.setAttribute('id', 'smo78482');
smo78501v0ar.push(smo78482);
const smo78483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo78483.setAttribute('id', 'smo78483');
smo78483.addModifier(new VF.Dot(), 0);
smo78501v0ar.push(smo78483);
const smo78484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo78484.setAttribute('id', 'smo78484');
smo78501v0ar.push(smo78484);
const smo78485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo78485.setAttribute('id', 'smo78485');
smo78501v0ar.push(smo78485);
smo78501v0.addTickables(smo78501v0ar)
fmtsmo785011.joinVoices([smo78501v0]);
const fmtsmo793201 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo79320v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo79320v0ar = [];
const smo79297 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79297.setAttribute('id', 'smo79297');
smo79320v0ar.push(smo79297);
const smo79298 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79298.setAttribute('id', 'smo79298');
smo79320v0ar.push(smo79298);
const smo79299 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["d#/4/n"]}'))
smo79299.setAttribute('id', 'smo79299');
smo79320v0ar.push(smo79299);
const smo79300 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["d#/4/n"]}'))
smo79300.setAttribute('id', 'smo79300');
smo79320v0ar.push(smo79300);
const smo79301 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["d#/4/n"]}'))
smo79301.setAttribute('id', 'smo79301');
smo79320v0ar.push(smo79301);
const smo79302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["d#/4/n"]}'))
smo79302.setAttribute('id', 'smo79302');
smo79320v0ar.push(smo79302);
const smo79303 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["d#/4/n"]}'))
smo79303.setAttribute('id', 'smo79303');
smo79320v0ar.push(smo79303);
const smo79304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["d#/4/n"]}'))
smo79304.setAttribute('id', 'smo79304');
smo79320v0ar.push(smo79304);
smo79320v0.addTickables(smo79320v0ar)
fmtsmo793201.joinVoices([smo79320v0]);
const fmtsmo801311 = new VF.Formatter();
//
// voices and notes for stave 2 1
const smo80131v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80131v0ar = [];
const smo80108 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80108.setAttribute('id', 'smo80108');
smo80131v0ar.push(smo80108);
const smo80109 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80109.setAttribute('id', 'smo80109');
smo80131v0ar.push(smo80109);
const smo80110 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80110.setAttribute('id', 'smo80110');
smo80131v0ar.push(smo80110);
const smo80111 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80111.setAttribute('id', 'smo80111');
smo80131v0ar.push(smo80111);
const smo80112 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo80112.setAttribute('id', 'smo80112');
smo80131v0ar.push(smo80112);
const smo80113 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo80113.setAttribute('id', 'smo80113');
smo80131v0ar.push(smo80113);
const smo80114 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo80114.setAttribute('id', 'smo80114');
smo80131v0ar.push(smo80114);
const smo80115 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo80115.setAttribute('id', 'smo80115');
smo80131v0ar.push(smo80115);
smo80131v0.addTickables(smo80131v0ar)
fmtsmo801311.joinVoices([smo80131v0]);
const fmtsmo809241 = new VF.Formatter();
//
// voices and notes for stave 3 1
const smo80924v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80924v0ar = [];
const smo80908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo80908.setAttribute('id', 'smo80908');
smo80924v0ar.push(smo80908);
smo80924v0.addTickables(smo80924v0ar)
fmtsmo809241.joinVoices([smo80924v0]);
const fmtsmo818141 = new VF.Formatter();
//
// voices and notes for stave 4 1
const smo81814v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81814v0ar = [];
const smo81793 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n"]}'))
smo81793.setAttribute('id', 'smo81793');
smo81814v0ar.push(smo81793);
const smo81794 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo81794.setAttribute('id', 'smo81794');
smo81814v0ar.push(smo81794);
const smo81795 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/2/n"]}'))
smo81795.setAttribute('id', 'smo81795');
smo81814v0ar.push(smo81795);
const smo81796 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/2/n"]}'))
smo81796.setAttribute('id', 'smo81796');
smo81814v0ar.push(smo81796);
const smo81797 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/2/n"]}'))
smo81797.setAttribute('id', 'smo81797');
smo81814v0ar.push(smo81797);
const smo81798 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/2/n"]}'))
smo81798.setAttribute('id', 'smo81798');
smo81814v0ar.push(smo81798);
smo81814v0.addTickables(smo81814v0ar)
fmtsmo818141.joinVoices([smo81814v0]);
// create beam groups and tuplets for format grp smo82569 before formatting
const dirsmo88943 = smo78478.getStemDirection();
smo78478.setStemDirection(dirsmo88943);
smo78479.setStemDirection(dirsmo88943);
const smo88943 = new VF.Beam([smo78478,smo78479]);
const dirsmo88944 = smo78480.getStemDirection();
smo78480.setStemDirection(dirsmo88944);
smo78481.setStemDirection(dirsmo88944);
const smo88944 = new VF.Beam([smo78480,smo78481]);
const dirsmo88945 = smo78483.getStemDirection();
smo78483.setStemDirection(dirsmo88945);
smo78484.setStemDirection(dirsmo88945);
smo78485.setStemDirection(dirsmo88945);
const smo88945 = new VF.Beam([smo78483,smo78484,smo78485]);
const dirsmo88947 = smo79297.getStemDirection();
smo79297.setStemDirection(dirsmo88947);
smo79298.setStemDirection(dirsmo88947);
smo79299.setStemDirection(dirsmo88947);
smo79300.setStemDirection(dirsmo88947);
const smo88947 = new VF.Beam([smo79297,smo79298,smo79299,smo79300]);
const dirsmo88948 = smo79301.getStemDirection();
smo79301.setStemDirection(dirsmo88948);
smo79302.setStemDirection(dirsmo88948);
smo79303.setStemDirection(dirsmo88948);
smo79304.setStemDirection(dirsmo88948);
const smo88948 = new VF.Beam([smo79301,smo79302,smo79303,smo79304]);
const dirsmo88950 = smo80108.getStemDirection();
smo80108.setStemDirection(dirsmo88950);
smo80109.setStemDirection(dirsmo88950);
smo80110.setStemDirection(dirsmo88950);
smo80111.setStemDirection(dirsmo88950);
const smo88950 = new VF.Beam([smo80108,smo80109,smo80110,smo80111]);
const dirsmo88951 = smo80112.getStemDirection();
smo80112.setStemDirection(dirsmo88951);
smo80113.setStemDirection(dirsmo88951);
smo80114.setStemDirection(dirsmo88951);
smo80115.setStemDirection(dirsmo88951);
const smo88951 = new VF.Beam([smo80112,smo80113,smo80114,smo80115]);
const dirsmo88954 = smo81795.getStemDirection();
smo81795.setStemDirection(dirsmo88954);
smo81796.setStemDirection(dirsmo88954);
smo81797.setStemDirection(dirsmo88954);
smo81798.setStemDirection(dirsmo88954);
const smo88954 = new VF.Beam([smo81795,smo81796,smo81797,smo81798]);
 
// formatting measures in staff group smo82569
fmtsmo785011.format([smo78501v0,smo79320v0,smo80131v0,smo80924v0,smo81814v0], 290);
const stavesmo78501 = new VF.Stave(458, 255, 304);
stavesmo78501.setAttribute('id', 'stavesmo78501');
stavesmo78501.setBegBarType(VF.Barline.type.NONE);
stavesmo78501.setContext(context);
stavesmo78501.draw();
smo78501v0.draw(context, stavesmo78501);
smo88943.setContext(context);
smo88943.draw();
smo88944.setContext(context);
smo88944.draw();
smo88945.setContext(context);
smo88945.draw();
const stavesmo79320 = new VF.Stave(458, 421, 304);
stavesmo79320.setAttribute('id', 'stavesmo79320');
stavesmo79320.setBegBarType(VF.Barline.type.NONE);
stavesmo79320.setContext(context);
stavesmo79320.draw();
smo79320v0.draw(context, stavesmo79320);
smo88947.setContext(context);
smo88947.draw();
smo88948.setContext(context);
smo88948.draw();
const stavesmo80131 = new VF.Stave(458, 573, 304);
stavesmo80131.setAttribute('id', 'stavesmo80131');
stavesmo80131.setBegBarType(VF.Barline.type.NONE);
stavesmo80131.setContext(context);
stavesmo80131.draw();
smo80131v0.draw(context, stavesmo80131);
smo88950.setContext(context);
smo88950.draw();
smo88951.setContext(context);
smo88951.draw();
const stavesmo80924 = new VF.Stave(458, 724, 304);
stavesmo80924.setAttribute('id', 'stavesmo80924');
stavesmo80924.setBegBarType(VF.Barline.type.NONE);
stavesmo80924.setContext(context);
stavesmo80924.draw();
smo80924v0.draw(context, stavesmo80924);
const stavesmo81814 = new VF.Stave(458, 839, 304);
stavesmo81814.setAttribute('id', 'stavesmo81814');
stavesmo81814.setBegBarType(VF.Barline.type.NONE);
stavesmo81814.setContext(context);
stavesmo81814.draw();
smo81814v0.draw(context, stavesmo81814);
smo88954.setContext(context);
smo88954.draw();
const fmtsmo785252 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo78525v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78525v0ar = [];
const smo78502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78502.setAttribute('id', 'smo78502');
smo78525v0ar.push(smo78502);
const smo78503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16d","dots":1,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78503.setAttribute('id', 'smo78503');
smo78503.addModifier(new VF.Dot(), 0);
smo78525v0ar.push(smo78503);
const smo78504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","autoStem":true,"keys":["d#/4/n"]}'))
smo78504.setAttribute('id', 'smo78504');
smo78525v0ar.push(smo78504);
const smo78505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78505.setAttribute('id', 'smo78505');
smo78525v0ar.push(smo78505);
const smo78506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo78506.setAttribute('id', 'smo78506');
smo78525v0ar.push(smo78506);
const smo78507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo78507.setAttribute('id', 'smo78507');
smo78525v0ar.push(smo78507);
const smo78508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo78508.setAttribute('id', 'smo78508');
smo78508.addModifier(new VF.Dot(), 0);
smo78525v0ar.push(smo78508);
const smo78509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78509.setAttribute('id', 'smo78509');
smo78525v0ar.push(smo78509);
smo78525v0.addTickables(smo78525v0ar)
fmtsmo785252.joinVoices([smo78525v0]);
const fmtsmo793442 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo79344v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo79344v0ar = [];
const smo79321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79321.setAttribute('id', 'smo79321');
smo79344v0ar.push(smo79321);
const smo79322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79322.setAttribute('id', 'smo79322');
smo79344v0ar.push(smo79322);
const smo79323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79323.setAttribute('id', 'smo79323');
smo79344v0ar.push(smo79323);
const smo79324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79324.setAttribute('id', 'smo79324');
smo79344v0ar.push(smo79324);
const smo79325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79325.setAttribute('id', 'smo79325');
smo79344v0ar.push(smo79325);
const smo79326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79326.setAttribute('id', 'smo79326');
smo79344v0ar.push(smo79326);
const smo79327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["d#/4/n"]}'))
smo79327.setAttribute('id', 'smo79327');
smo79344v0ar.push(smo79327);
const smo79328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["d#/4/n"]}'))
smo79328.setAttribute('id', 'smo79328');
smo79344v0ar.push(smo79328);
smo79344v0.addTickables(smo79344v0ar)
fmtsmo793442.joinVoices([smo79344v0]);
const fmtsmo801552 = new VF.Formatter();
//
// voices and notes for stave 2 2
const smo80155v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80155v0ar = [];
const smo80132 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80132.setAttribute('id', 'smo80132');
smo80155v0ar.push(smo80132);
const smo80133 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80133.setAttribute('id', 'smo80133');
smo80155v0ar.push(smo80133);
const smo80134 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo80134.setAttribute('id', 'smo80134');
smo80155v0ar.push(smo80134);
const smo80135 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo80135.setAttribute('id', 'smo80135');
smo80155v0ar.push(smo80135);
const smo80136 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80136.setAttribute('id', 'smo80136');
smo80155v0ar.push(smo80136);
const smo80137 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80137.setAttribute('id', 'smo80137');
smo80155v0ar.push(smo80137);
const smo80138 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo80138.setAttribute('id', 'smo80138');
smo80155v0ar.push(smo80138);
const smo80139 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo80139.setAttribute('id', 'smo80139');
smo80155v0ar.push(smo80139);
smo80155v0.addTickables(smo80155v0ar)
fmtsmo801552.joinVoices([smo80155v0]);
const fmtsmo809412 = new VF.Formatter();
//
// voices and notes for stave 3 2
const smo80941v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80941v0ar = [];
const smo80925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo80925.setAttribute('id', 'smo80925');
smo80941v0ar.push(smo80925);
smo80941v0.addTickables(smo80941v0ar)
fmtsmo809412.joinVoices([smo80941v0]);
const fmtsmo818382 = new VF.Formatter();
//
// voices and notes for stave 4 2
const smo81838v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81838v0ar = [];
const smo81815 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/2/n"]}'))
smo81815.setAttribute('id', 'smo81815');
smo81838v0ar.push(smo81815);
const smo81816 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/2/n"]}'))
smo81816.setAttribute('id', 'smo81816');
smo81838v0ar.push(smo81816);
const smo81817 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["c#/3/n"]}'))
smo81817.setAttribute('id', 'smo81817');
smo81838v0ar.push(smo81817);
const smo81818 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["c#/3/n"]}'))
smo81818.setAttribute('id', 'smo81818');
smo81838v0ar.push(smo81818);
const smo81819 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n"]}'))
smo81819.setAttribute('id', 'smo81819');
smo81838v0ar.push(smo81819);
const smo81820 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n"]}'))
smo81820.setAttribute('id', 'smo81820');
smo81838v0ar.push(smo81820);
const smo81821 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n"]}'))
smo81821.setAttribute('id', 'smo81821');
smo81838v0ar.push(smo81821);
const smo81822 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n"]}'))
smo81822.setAttribute('id', 'smo81822');
smo81838v0ar.push(smo81822);
smo81838v0.addTickables(smo81838v0ar)
fmtsmo818382.joinVoices([smo81838v0]);
// create beam groups and tuplets for format grp smo82569 before formatting
const dirsmo88961 = smo78502.getStemDirection();
smo78502.setStemDirection(dirsmo88961);
smo78503.setStemDirection(dirsmo88961);
smo78504.setStemDirection(dirsmo88961);
const smo88961 = new VF.Beam([smo78502,smo78503,smo78504]);
const dirsmo88962 = smo78505.getStemDirection();
smo78505.setStemDirection(dirsmo88962);
smo78506.setStemDirection(dirsmo88962);
const smo88962 = new VF.Beam([smo78505,smo78506]);
const dirsmo88963 = smo78508.getStemDirection();
smo78508.setStemDirection(dirsmo88963);
smo78509.setStemDirection(dirsmo88963);
const smo88963 = new VF.Beam([smo78508,smo78509]);
const dirsmo88965 = smo79321.getStemDirection();
smo79321.setStemDirection(dirsmo88965);
smo79322.setStemDirection(dirsmo88965);
smo79323.setStemDirection(dirsmo88965);
smo79324.setStemDirection(dirsmo88965);
const smo88965 = new VF.Beam([smo79321,smo79322,smo79323,smo79324]);
const dirsmo88966 = smo79325.getStemDirection();
smo79325.setStemDirection(dirsmo88966);
smo79326.setStemDirection(dirsmo88966);
smo79327.setStemDirection(dirsmo88966);
smo79328.setStemDirection(dirsmo88966);
const smo88966 = new VF.Beam([smo79325,smo79326,smo79327,smo79328]);
const dirsmo88968 = smo80132.getStemDirection();
smo80132.setStemDirection(dirsmo88968);
smo80133.setStemDirection(dirsmo88968);
smo80134.setStemDirection(dirsmo88968);
smo80135.setStemDirection(dirsmo88968);
const smo88968 = new VF.Beam([smo80132,smo80133,smo80134,smo80135]);
const dirsmo88969 = smo80136.getStemDirection();
smo80136.setStemDirection(dirsmo88969);
smo80137.setStemDirection(dirsmo88969);
smo80138.setStemDirection(dirsmo88969);
smo80139.setStemDirection(dirsmo88969);
const smo88969 = new VF.Beam([smo80136,smo80137,smo80138,smo80139]);
const dirsmo88972 = smo81815.getStemDirection();
smo81815.setStemDirection(dirsmo88972);
smo81816.setStemDirection(dirsmo88972);
smo81817.setStemDirection(dirsmo88972);
smo81818.setStemDirection(dirsmo88972);
const smo88972 = new VF.Beam([smo81815,smo81816,smo81817,smo81818]);
const dirsmo88973 = smo81819.getStemDirection();
smo81819.setStemDirection(dirsmo88973);
smo81820.setStemDirection(dirsmo88973);
smo81821.setStemDirection(dirsmo88973);
smo81822.setStemDirection(dirsmo88973);
const smo88973 = new VF.Beam([smo81819,smo81820,smo81821,smo81822]);
 
// formatting measures in staff group smo82569
fmtsmo785252.format([smo78525v0,smo79344v0,smo80155v0,smo80941v0,smo81838v0], 298);
const stavesmo78525 = new VF.Stave(762, 255, 312);
stavesmo78525.setAttribute('id', 'stavesmo78525');
stavesmo78525.setBegBarType(VF.Barline.type.NONE);
stavesmo78525.setContext(context);
stavesmo78525.draw();
smo78525v0.draw(context, stavesmo78525);
smo88961.setContext(context);
smo88961.draw();
smo88962.setContext(context);
smo88962.draw();
smo88963.setContext(context);
smo88963.draw();
const stavesmo79344 = new VF.Stave(762, 421, 312);
stavesmo79344.setAttribute('id', 'stavesmo79344');
stavesmo79344.setBegBarType(VF.Barline.type.NONE);
stavesmo79344.setContext(context);
stavesmo79344.draw();
smo79344v0.draw(context, stavesmo79344);
smo88965.setContext(context);
smo88965.draw();
smo88966.setContext(context);
smo88966.draw();
const stavesmo80155 = new VF.Stave(762, 573, 312);
stavesmo80155.setAttribute('id', 'stavesmo80155');
stavesmo80155.setBegBarType(VF.Barline.type.NONE);
stavesmo80155.setContext(context);
stavesmo80155.draw();
smo80155v0.draw(context, stavesmo80155);
smo88968.setContext(context);
smo88968.draw();
smo88969.setContext(context);
smo88969.draw();
const stavesmo80941 = new VF.Stave(762, 724, 312);
stavesmo80941.setAttribute('id', 'stavesmo80941');
stavesmo80941.setBegBarType(VF.Barline.type.NONE);
stavesmo80941.setContext(context);
stavesmo80941.draw();
smo80941v0.draw(context, stavesmo80941);
const stavesmo81838 = new VF.Stave(762, 839, 312);
stavesmo81838.setAttribute('id', 'stavesmo81838');
stavesmo81838.setBegBarType(VF.Barline.type.NONE);
stavesmo81838.setContext(context);
stavesmo81838.draw();
smo81838v0.draw(context, stavesmo81838);
smo88972.setContext(context);
smo88972.draw();
smo88973.setContext(context);
smo88973.draw();
const fmtsmo785463 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo78546v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78546v0ar = [];
const smo78526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo78526.setAttribute('id', 'smo78526');
smo78546v0ar.push(smo78526);
const smo78527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo78527.setAttribute('id', 'smo78527');
smo78546v0ar.push(smo78527);
const smo78528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo78528.setAttribute('id', 'smo78528');
smo78528.addModifier(new VF.Dot(), 0);
smo78546v0ar.push(smo78528);
const smo78529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo78529.setAttribute('id', 'smo78529');
smo78546v0ar.push(smo78529);
const smo78530 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["g#/5/n"]}'))
smo78530.setAttribute('id', 'smo78530');
smo78546v0ar.push(smo78530);
smo78546v0.addTickables(smo78546v0ar)
fmtsmo785463.joinVoices([smo78546v0]);
const fmtsmo793653 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo79365v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo79365v0ar = [];
const smo79345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79345.setAttribute('id', 'smo79345');
smo79365v0ar.push(smo79345);
const smo79346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo79346.setAttribute('id', 'smo79346');
smo79365v0ar.push(smo79346);
const smo79347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["g#/5/n"]}'))
smo79347.setAttribute('id', 'smo79347');
smo79347.addModifier(new VF.Dot(), 0);
smo79365v0ar.push(smo79347);
const smo79348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo79348.setAttribute('id', 'smo79348');
smo79365v0ar.push(smo79348);
const smo79349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo79349.setAttribute('id', 'smo79349');
smo79365v0ar.push(smo79349);
smo79365v0.addTickables(smo79365v0ar)
fmtsmo793653.joinVoices([smo79365v0]);
const fmtsmo801763 = new VF.Formatter();
//
// voices and notes for stave 2 3
const smo80176v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80176v0ar = [];
const smo80156 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["g#/3/n"]}'))
smo80156.setAttribute('id', 'smo80156');
smo80176v0ar.push(smo80156);
const smo80157 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["cn/4/r"]}'))
smo80157.setAttribute('id', 'smo80157');
smo80176v0ar.push(smo80157);
const smo80158 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo80158.setAttribute('id', 'smo80158');
smo80158.addModifier(new VF.Dot(), 0);
smo80176v0ar.push(smo80158);
const smo80159 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo80159.setAttribute('id', 'smo80159');
smo80176v0ar.push(smo80159);
const smo80160 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo80160.setAttribute('id', 'smo80160');
smo80176v0ar.push(smo80160);
smo80176v0.addTickables(smo80176v0ar)
fmtsmo801763.joinVoices([smo80176v0]);
const fmtsmo809643 = new VF.Formatter();
//
// voices and notes for stave 3 3
const smo80964v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80964v0ar = [];
const smo80942 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo80942.setAttribute('id', 'smo80942');
smo80942.addModifier(new VF.Dot(), 0);
const smo80943 = new VF.Annotation('Com');
smo80943.setAttribute('id', 'smo80943');
smo80943.setFont('Merriweather', 12, 'normal');
smo80943.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo80942.addModifier(smo80943);
smo80943.addClass('lyric lyric-0 lyric-hyphen');
smo80964v0ar.push(smo80942);
const smo80944 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo80944.setAttribute('id', 'smo80944');
const smo80945 = new VF.Annotation('fort');
smo80945.setAttribute('id', 'smo80945');
smo80945.setFont('Merriweather', 12, 'normal');
smo80945.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo80944.addModifier(smo80945);
smo80945.addClass('lyric lyric-0');
smo80964v0ar.push(smo80944);
const smo80946 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo80946.setAttribute('id', 'smo80946');
const smo80947 = new VF.Annotation('ye!');
smo80947.setAttribute('id', 'smo80947');
smo80947.setFont('Merriweather', 12, 'normal');
smo80947.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo80946.addModifier(smo80947);
smo80947.addClass('lyric lyric-0');
smo80964v0ar.push(smo80946);
const smo80948 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo80948.setAttribute('id', 'smo80948');
smo80964v0ar.push(smo80948);
smo80964v0.addTickables(smo80964v0ar)
fmtsmo809643.joinVoices([smo80964v0]);
const fmtsmo818573 = new VF.Formatter();
//
// voices and notes for stave 4 3
const smo81857v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81857v0ar = [];
const smo81839 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo81839.setAttribute('id', 'smo81839');
smo81857v0ar.push(smo81839);
const smo81840 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo81840.setAttribute('id', 'smo81840');
smo81857v0ar.push(smo81840);
const smo81841 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo81841.setAttribute('id', 'smo81841');
smo81857v0ar.push(smo81841);
smo81857v0.addTickables(smo81857v0ar)
fmtsmo818573.joinVoices([smo81857v0]);
// create beam groups and tuplets for format grp smo82569 before formatting
const dirsmo88980 = smo78528.getStemDirection();
smo78528.setStemDirection(dirsmo88980);
smo78529.setStemDirection(dirsmo88980);
const smo88980 = new VF.Beam([smo78528,smo78529]);
const dirsmo88982 = smo79347.getStemDirection();
smo79347.setStemDirection(dirsmo88982);
smo79348.setStemDirection(dirsmo88982);
const smo88982 = new VF.Beam([smo79347,smo79348]);
const dirsmo88984 = smo80158.getStemDirection();
smo80158.setStemDirection(dirsmo88984);
smo80159.setStemDirection(dirsmo88984);
const smo88984 = new VF.Beam([smo80158,smo80159]);
const dirsmo88986 = smo80942.getStemDirection();
smo80942.setStemDirection(dirsmo88986);
smo80944.setStemDirection(dirsmo88986);
const smo88986 = new VF.Beam([smo80942,smo80944]);
 
// formatting measures in staff group smo82569
fmtsmo785463.format([smo78546v0,smo79365v0,smo80176v0,smo80964v0,smo81857v0], 288);
const stavesmo78546 = new VF.Stave(1074, 255, 302);
stavesmo78546.setAttribute('id', 'stavesmo78546');
stavesmo78546.setBegBarType(VF.Barline.type.NONE);
stavesmo78546.setContext(context);
stavesmo78546.draw();
smo78546v0.draw(context, stavesmo78546);
smo88980.setContext(context);
smo88980.draw();
const stavesmo79365 = new VF.Stave(1074, 421, 302);
stavesmo79365.setAttribute('id', 'stavesmo79365');
stavesmo79365.setBegBarType(VF.Barline.type.NONE);
stavesmo79365.setContext(context);
stavesmo79365.draw();
smo79365v0.draw(context, stavesmo79365);
smo88982.setContext(context);
smo88982.draw();
const stavesmo80176 = new VF.Stave(1074, 573, 302);
stavesmo80176.setAttribute('id', 'stavesmo80176');
stavesmo80176.setBegBarType(VF.Barline.type.NONE);
stavesmo80176.setContext(context);
stavesmo80176.draw();
smo80176v0.draw(context, stavesmo80176);
smo88984.setContext(context);
smo88984.draw();
const stavesmo80964 = new VF.Stave(1074, 724, 302);
stavesmo80964.setAttribute('id', 'stavesmo80964');
stavesmo80964.setBegBarType(VF.Barline.type.NONE);
stavesmo80964.setContext(context);
stavesmo80964.draw();
smo80964v0.draw(context, stavesmo80964);
smo88986.setContext(context);
smo88986.draw();
const stavesmo81857 = new VF.Stave(1074, 839, 302);
stavesmo81857.setAttribute('id', 'stavesmo81857');
stavesmo81857.setBegBarType(VF.Barline.type.NONE);
stavesmo81857.setContext(context);
stavesmo81857.draw();
smo81857v0.draw(context, stavesmo81857);
const rightsmo82569stavesmo785464 = new VF.StaveConnector(stavesmo78546, stavesmo81857).setType(0);
rightsmo82569stavesmo785464.setContext(context).draw();
const fmtsmo785704 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo78570v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78570v0ar = [];
const smo78547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo78547.setAttribute('id', 'smo78547');
smo78570v0ar.push(smo78547);
const smo78548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo78548.setAttribute('id', 'smo78548');
smo78570v0ar.push(smo78548);
const smo78549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo78549.setAttribute('id', 'smo78549');
smo78570v0ar.push(smo78549);
const smo78550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo78550.setAttribute('id', 'smo78550');
smo78570v0ar.push(smo78550);
const smo78551 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo78551.setAttribute('id', 'smo78551');
smo78570v0ar.push(smo78551);
const smo78552 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo78552.setAttribute('id', 'smo78552');
smo78552.addModifier(new VF.Dot(), 0);
smo78570v0ar.push(smo78552);
const smo78553 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo78553.setAttribute('id', 'smo78553');
smo78570v0ar.push(smo78553);
const smo78554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo78554.setAttribute('id', 'smo78554');
smo78570v0ar.push(smo78554);
smo78570v0.addTickables(smo78570v0ar)
fmtsmo785704.joinVoices([smo78570v0]);
const fmtsmo793894 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo79389v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo79389v0ar = [];
const smo79366 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79366.setAttribute('id', 'smo79366');
smo79389v0ar.push(smo79366);
const smo79367 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79367.setAttribute('id', 'smo79367');
smo79389v0ar.push(smo79367);
const smo79368 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79368.setAttribute('id', 'smo79368');
smo79389v0ar.push(smo79368);
const smo79369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79369.setAttribute('id', 'smo79369');
smo79389v0ar.push(smo79369);
const smo79370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79370.setAttribute('id', 'smo79370');
smo79389v0ar.push(smo79370);
const smo79371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79371.setAttribute('id', 'smo79371');
smo79389v0ar.push(smo79371);
const smo79372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79372.setAttribute('id', 'smo79372');
smo79389v0ar.push(smo79372);
const smo79373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79373.setAttribute('id', 'smo79373');
smo79389v0ar.push(smo79373);
smo79389v0.addTickables(smo79389v0ar)
fmtsmo793894.joinVoices([smo79389v0]);
const fmtsmo802004 = new VF.Formatter();
//
// voices and notes for stave 2 4
const smo80200v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80200v0ar = [];
const smo80177 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80177.setAttribute('id', 'smo80177');
smo80200v0ar.push(smo80177);
const smo80178 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80178.setAttribute('id', 'smo80178');
smo80200v0ar.push(smo80178);
const smo80179 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80179.setAttribute('id', 'smo80179');
smo80200v0ar.push(smo80179);
const smo80180 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80180.setAttribute('id', 'smo80180');
smo80200v0ar.push(smo80180);
const smo80181 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80181.setAttribute('id', 'smo80181');
smo80200v0ar.push(smo80181);
const smo80182 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80182.setAttribute('id', 'smo80182');
smo80200v0ar.push(smo80182);
const smo80183 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80183.setAttribute('id', 'smo80183');
smo80200v0ar.push(smo80183);
const smo80184 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80184.setAttribute('id', 'smo80184');
smo80200v0ar.push(smo80184);
smo80200v0.addTickables(smo80200v0ar)
fmtsmo802004.joinVoices([smo80200v0]);
const fmtsmo809834 = new VF.Formatter();
//
// voices and notes for stave 3 4
const smo80983v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80983v0ar = [];
const smo80965 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo80965.setAttribute('id', 'smo80965');
smo80983v0ar.push(smo80965);
const smo80966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo80966.setAttribute('id', 'smo80966');
const smo80967 = new VF.Annotation('com');
smo80967.setAttribute('id', 'smo80967');
smo80967.setFont('Merriweather', 12, 'normal');
smo80967.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo80966.addModifier(smo80967);
smo80967.addClass('lyric lyric-0');
smo80983v0ar.push(smo80966);
smo80983v0.addTickables(smo80983v0ar)
fmtsmo809834.joinVoices([smo80983v0]);
const fmtsmo818814 = new VF.Formatter();
//
// voices and notes for stave 4 4
const smo81881v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81881v0ar = [];
const smo81858 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo81858.setAttribute('id', 'smo81858');
smo81881v0ar.push(smo81858);
const smo81859 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo81859.setAttribute('id', 'smo81859');
smo81881v0ar.push(smo81859);
const smo81860 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo81860.setAttribute('id', 'smo81860');
smo81881v0ar.push(smo81860);
const smo81861 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo81861.setAttribute('id', 'smo81861');
smo81881v0ar.push(smo81861);
const smo81862 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/3/n"]}'))
smo81862.setAttribute('id', 'smo81862');
smo81881v0ar.push(smo81862);
const smo81863 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/3/n"]}'))
smo81863.setAttribute('id', 'smo81863');
smo81881v0ar.push(smo81863);
const smo81864 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/3/n"]}'))
smo81864.setAttribute('id', 'smo81864');
smo81881v0ar.push(smo81864);
const smo81865 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/3/n"]}'))
smo81865.setAttribute('id', 'smo81865');
smo81881v0ar.push(smo81865);
smo81881v0.addTickables(smo81881v0ar)
fmtsmo818814.joinVoices([smo81881v0]);
// create beam groups and tuplets for format grp smo82569 before formatting
const dirsmo89013 = smo78547.getStemDirection();
smo78547.setStemDirection(dirsmo89013);
smo78548.setStemDirection(dirsmo89013);
const smo89013 = new VF.Beam([smo78547,smo78548]);
const dirsmo89014 = smo78549.getStemDirection();
smo78549.setStemDirection(dirsmo89014);
smo78550.setStemDirection(dirsmo89014);
const smo89014 = new VF.Beam([smo78549,smo78550]);
const dirsmo89015 = smo78552.getStemDirection();
smo78552.setStemDirection(dirsmo89015);
smo78553.setStemDirection(dirsmo89015);
smo78554.setStemDirection(dirsmo89015);
const smo89015 = new VF.Beam([smo78552,smo78553,smo78554]);
const dirsmo89017 = smo79366.getStemDirection();
smo79366.setStemDirection(dirsmo89017);
smo79367.setStemDirection(dirsmo89017);
smo79368.setStemDirection(dirsmo89017);
smo79369.setStemDirection(dirsmo89017);
const smo89017 = new VF.Beam([smo79366,smo79367,smo79368,smo79369]);
const dirsmo89018 = smo79370.getStemDirection();
smo79370.setStemDirection(dirsmo89018);
smo79371.setStemDirection(dirsmo89018);
smo79372.setStemDirection(dirsmo89018);
smo79373.setStemDirection(dirsmo89018);
const smo89018 = new VF.Beam([smo79370,smo79371,smo79372,smo79373]);
const dirsmo89020 = smo80177.getStemDirection();
smo80177.setStemDirection(dirsmo89020);
smo80178.setStemDirection(dirsmo89020);
smo80179.setStemDirection(dirsmo89020);
smo80180.setStemDirection(dirsmo89020);
const smo89020 = new VF.Beam([smo80177,smo80178,smo80179,smo80180]);
const dirsmo89021 = smo80181.getStemDirection();
smo80181.setStemDirection(dirsmo89021);
smo80182.setStemDirection(dirsmo89021);
smo80183.setStemDirection(dirsmo89021);
smo80184.setStemDirection(dirsmo89021);
const smo89021 = new VF.Beam([smo80181,smo80182,smo80183,smo80184]);
const dirsmo89024 = smo81858.getStemDirection();
smo81858.setStemDirection(dirsmo89024);
smo81859.setStemDirection(dirsmo89024);
smo81860.setStemDirection(dirsmo89024);
smo81861.setStemDirection(dirsmo89024);
const smo89024 = new VF.Beam([smo81858,smo81859,smo81860,smo81861]);
const dirsmo89025 = smo81862.getStemDirection();
smo81862.setStemDirection(dirsmo89025);
smo81863.setStemDirection(dirsmo89025);
smo81864.setStemDirection(dirsmo89025);
smo81865.setStemDirection(dirsmo89025);
const smo89025 = new VF.Beam([smo81862,smo81863,smo81864,smo81865]);
 
// formatting measures in staff group smo82569
fmtsmo785704.format([smo78570v0,smo79389v0,smo80200v0,smo80983v0,smo81881v0], 301);
const stavesmo78570 = new VF.Stave(55, 973, 396);
stavesmo78570.setAttribute('id', 'stavesmo78570');
stavesmo78570.setBegBarType(1);
stavesmo78570.addClef('treble');
const keysmo78570 = new VF.KeySignature('E');
keysmo78570.addToStave(stavesmo78570);
stavesmo78570.setContext(context);
stavesmo78570.draw();
smo78570v0.draw(context, stavesmo78570);
smo89013.setContext(context);
smo89013.draw();
smo89014.setContext(context);
smo89014.draw();
smo89015.setContext(context);
smo89015.draw();
const stavesmo79389 = new VF.Stave(55, 1067, 396);
stavesmo79389.setAttribute('id', 'stavesmo79389');
stavesmo79389.setBegBarType(1);
stavesmo79389.addClef('treble');
const keysmo79389 = new VF.KeySignature('E');
keysmo79389.addToStave(stavesmo79389);
stavesmo79389.setContext(context);
stavesmo79389.draw();
smo79389v0.draw(context, stavesmo79389);
smo89017.setContext(context);
smo89017.draw();
smo89018.setContext(context);
smo89018.draw();
const stavesmo80200 = new VF.Stave(55, 1145, 396);
stavesmo80200.setAttribute('id', 'stavesmo80200');
stavesmo80200.setBegBarType(1);
stavesmo80200.addClef('alto');
const keysmo80200 = new VF.KeySignature('E');
keysmo80200.addToStave(stavesmo80200);
stavesmo80200.setContext(context);
stavesmo80200.draw();
smo80200v0.draw(context, stavesmo80200);
smo89020.setContext(context);
smo89020.draw();
smo89021.setContext(context);
smo89021.draw();
const stavesmo80983 = new VF.Stave(55, 1243, 396);
stavesmo80983.setAttribute('id', 'stavesmo80983');
stavesmo80983.setBegBarType(1);
stavesmo80983.addClef('treble');
const keysmo80983 = new VF.KeySignature('E');
keysmo80983.addToStave(stavesmo80983);
stavesmo80983.setContext(context);
stavesmo80983.draw();
smo80983v0.draw(context, stavesmo80983);
const stavesmo81881 = new VF.Stave(55, 1365, 396);
stavesmo81881.setAttribute('id', 'stavesmo81881');
stavesmo81881.setBegBarType(1);
stavesmo81881.addClef('bass');
const keysmo81881 = new VF.KeySignature('E');
keysmo81881.addToStave(stavesmo81881);
stavesmo81881.setContext(context);
stavesmo81881.draw();
smo81881v0.draw(context, stavesmo81881);
smo89024.setContext(context);
smo89024.draw();
smo89025.setContext(context);
smo89025.draw();
const leftsmo82569stavesmo785704 = new VF.StaveConnector(stavesmo78570, stavesmo81881).setType(4);
leftsmo82569stavesmo785704.setContext(context).draw();
const fmtsmo785945 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo78594v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78594v0ar = [];
const smo78571 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo78571.setAttribute('id', 'smo78571');
smo78594v0ar.push(smo78571);
const smo78572 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo78572.setAttribute('id', 'smo78572');
smo78594v0ar.push(smo78572);
const smo78573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo78573.setAttribute('id', 'smo78573');
smo78594v0ar.push(smo78573);
const smo78574 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo78574.setAttribute('id', 'smo78574');
smo78594v0ar.push(smo78574);
const smo78575 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo78575.setAttribute('id', 'smo78575');
smo78594v0ar.push(smo78575);
const smo78576 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo78576.setAttribute('id', 'smo78576');
smo78594v0ar.push(smo78576);
const smo78577 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo78577.setAttribute('id', 'smo78577');
smo78594v0ar.push(smo78577);
const smo78578 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo78578.setAttribute('id', 'smo78578');
smo78594v0ar.push(smo78578);
smo78594v0.addTickables(smo78594v0ar)
fmtsmo785945.joinVoices([smo78594v0]);
const fmtsmo794135 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo79413v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo79413v0ar = [];
const smo79390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79390.setAttribute('id', 'smo79390');
smo79413v0ar.push(smo79390);
const smo79391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79391.setAttribute('id', 'smo79391');
smo79413v0ar.push(smo79391);
const smo79392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79392.setAttribute('id', 'smo79392');
smo79413v0ar.push(smo79392);
const smo79393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79393.setAttribute('id', 'smo79393');
smo79413v0ar.push(smo79393);
const smo79394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79394.setAttribute('id', 'smo79394');
smo79413v0ar.push(smo79394);
const smo79395 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79395.setAttribute('id', 'smo79395');
smo79413v0ar.push(smo79395);
const smo79396 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["d#/4/n"]}'))
smo79396.setAttribute('id', 'smo79396');
smo79413v0ar.push(smo79396);
const smo79397 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["d#/4/n"]}'))
smo79397.setAttribute('id', 'smo79397');
smo79413v0ar.push(smo79397);
smo79413v0.addTickables(smo79413v0ar)
fmtsmo794135.joinVoices([smo79413v0]);
const fmtsmo802245 = new VF.Formatter();
//
// voices and notes for stave 2 5
const smo80224v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80224v0ar = [];
const smo80201 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80201.setAttribute('id', 'smo80201');
smo80224v0ar.push(smo80201);
const smo80202 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80202.setAttribute('id', 'smo80202');
smo80224v0ar.push(smo80202);
const smo80203 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80203.setAttribute('id', 'smo80203');
smo80224v0ar.push(smo80203);
const smo80204 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80204.setAttribute('id', 'smo80204');
smo80224v0ar.push(smo80204);
const smo80205 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80205.setAttribute('id', 'smo80205');
smo80224v0ar.push(smo80205);
const smo80206 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80206.setAttribute('id', 'smo80206');
smo80224v0ar.push(smo80206);
const smo80207 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo80207.setAttribute('id', 'smo80207');
smo80224v0ar.push(smo80207);
const smo80208 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo80208.setAttribute('id', 'smo80208');
smo80224v0ar.push(smo80208);
smo80224v0.addTickables(smo80224v0ar)
fmtsmo802245.joinVoices([smo80224v0]);
const fmtsmo810105 = new VF.Formatter();
//
// voices and notes for stave 3 5
const smo81010v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81010v0ar = [];
const smo80984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo80984.setAttribute('id', 'smo80984');
smo80984.addModifier(new VF.Dot(), 0);
const smo80985 = new VF.Annotation('-');
smo80985.setAttribute('id', 'smo80985');
smo80985.setFont('Merriweather', 12, 'normal');
smo80985.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo80984.addModifier(smo80985);
smo80985.addClass('lyric lyric-0 lyric-hyphen');
smo81010v0ar.push(smo80984);
const smo80986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo80986.setAttribute('id', 'smo80986');
const smo80987 = new VF.Annotation('fort');
smo80987.setAttribute('id', 'smo80987');
smo80987.setFont('Merriweather', 12, 'normal');
smo80987.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo80986.addModifier(smo80987);
smo80987.addClass('lyric lyric-0');
smo81010v0ar.push(smo80986);
const smo80988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["g#/5/n"]}'))
smo80988.setAttribute('id', 'smo80988');
smo81010v0ar.push(smo80988);
const smo80989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo80989.setAttribute('id', 'smo80989');
const smo80990 = new VF.Annotation('ye');
smo80990.setAttribute('id', 'smo80990');
smo80990.setFont('Merriweather', 12, 'normal');
smo80990.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo80989.addModifier(smo80990);
smo80990.addClass('lyric lyric-0');
smo81010v0ar.push(smo80989);
const smo80991 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo80991.setAttribute('id', 'smo80991');
smo80991.addModifier(new VF.Dot(), 0);
const smo80992 = new VF.Annotation('-');
smo80992.setAttribute('id', 'smo80992');
smo80992.setFont('Merriweather', 12, 'normal');
smo80992.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo80991.addModifier(smo80992);
smo80992.addClass('lyric lyric-0 lyric-hyphen');
smo81010v0ar.push(smo80991);
const smo80993 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo80993.setAttribute('id', 'smo80993');
const smo80994 = new VF.Annotation('my');
smo80994.setAttribute('id', 'smo80994');
smo80994.setFont('Merriweather', 12, 'normal');
smo80994.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo80993.addModifier(smo80994);
smo80994.addClass('lyric lyric-0');
smo81010v0ar.push(smo80993);
smo81010v0.addTickables(smo81010v0ar)
fmtsmo810105.joinVoices([smo81010v0]);
const fmtsmo819055 = new VF.Formatter();
//
// voices and notes for stave 4 5
const smo81905v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81905v0ar = [];
const smo81882 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo81882.setAttribute('id', 'smo81882');
smo81905v0ar.push(smo81882);
const smo81883 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo81883.setAttribute('id', 'smo81883');
smo81905v0ar.push(smo81883);
const smo81884 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo81884.setAttribute('id', 'smo81884');
smo81905v0ar.push(smo81884);
const smo81885 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo81885.setAttribute('id', 'smo81885');
smo81905v0ar.push(smo81885);
const smo81886 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo81886.setAttribute('id', 'smo81886');
smo81905v0ar.push(smo81886);
const smo81887 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo81887.setAttribute('id', 'smo81887');
smo81905v0ar.push(smo81887);
const smo81888 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n"]}'))
smo81888.setAttribute('id', 'smo81888');
smo81905v0ar.push(smo81888);
const smo81889 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n"]}'))
smo81889.setAttribute('id', 'smo81889');
smo81905v0ar.push(smo81889);
smo81905v0.addTickables(smo81905v0ar)
fmtsmo819055.joinVoices([smo81905v0]);
// create beam groups and tuplets for format grp smo82569 before formatting
const dirsmo89032 = smo78571.getStemDirection();
smo78571.setStemDirection(dirsmo89032);
smo78572.setStemDirection(dirsmo89032);
smo78573.setStemDirection(dirsmo89032);
smo78574.setStemDirection(dirsmo89032);
const smo89032 = new VF.Beam([smo78571,smo78572,smo78573,smo78574]);
const dirsmo89033 = smo78575.getStemDirection();
smo78575.setStemDirection(dirsmo89033);
smo78576.setStemDirection(dirsmo89033);
smo78577.setStemDirection(dirsmo89033);
smo78578.setStemDirection(dirsmo89033);
const smo89033 = new VF.Beam([smo78575,smo78576,smo78577,smo78578]);
const dirsmo89035 = smo79390.getStemDirection();
smo79390.setStemDirection(dirsmo89035);
smo79391.setStemDirection(dirsmo89035);
smo79392.setStemDirection(dirsmo89035);
smo79393.setStemDirection(dirsmo89035);
const smo89035 = new VF.Beam([smo79390,smo79391,smo79392,smo79393]);
const dirsmo89036 = smo79394.getStemDirection();
smo79394.setStemDirection(dirsmo89036);
smo79395.setStemDirection(dirsmo89036);
smo79396.setStemDirection(dirsmo89036);
smo79397.setStemDirection(dirsmo89036);
const smo89036 = new VF.Beam([smo79394,smo79395,smo79396,smo79397]);
const dirsmo89038 = smo80201.getStemDirection();
smo80201.setStemDirection(dirsmo89038);
smo80202.setStemDirection(dirsmo89038);
smo80203.setStemDirection(dirsmo89038);
smo80204.setStemDirection(dirsmo89038);
const smo89038 = new VF.Beam([smo80201,smo80202,smo80203,smo80204]);
const dirsmo89039 = smo80205.getStemDirection();
smo80205.setStemDirection(dirsmo89039);
smo80206.setStemDirection(dirsmo89039);
smo80207.setStemDirection(dirsmo89039);
smo80208.setStemDirection(dirsmo89039);
const smo89039 = new VF.Beam([smo80205,smo80206,smo80207,smo80208]);
const dirsmo89041 = smo80986.getStemDirection();
smo80986.setStemDirection(dirsmo89041);
smo80988.setStemDirection(dirsmo89041);
const smo89041 = new VF.Beam([smo80986,smo80988]);
const dirsmo89042 = smo80991.getStemDirection();
smo80991.setStemDirection(dirsmo89042);
smo80993.setStemDirection(dirsmo89042);
const smo89042 = new VF.Beam([smo80991,smo80993]);
const dirsmo89044 = smo81882.getStemDirection();
smo81882.setStemDirection(dirsmo89044);
smo81883.setStemDirection(dirsmo89044);
smo81884.setStemDirection(dirsmo89044);
smo81885.setStemDirection(dirsmo89044);
const smo89044 = new VF.Beam([smo81882,smo81883,smo81884,smo81885]);
const dirsmo89045 = smo81886.getStemDirection();
smo81886.setStemDirection(dirsmo89045);
smo81887.setStemDirection(dirsmo89045);
smo81888.setStemDirection(dirsmo89045);
smo81889.setStemDirection(dirsmo89045);
const smo89045 = new VF.Beam([smo81886,smo81887,smo81888,smo81889]);
 
// formatting measures in staff group smo82569
fmtsmo785945.format([smo78594v0,smo79413v0,smo80224v0,smo81010v0,smo81905v0], 360);
const stavesmo78594 = new VF.Stave(451, 973, 374);
stavesmo78594.setAttribute('id', 'stavesmo78594');
stavesmo78594.setBegBarType(VF.Barline.type.NONE);
stavesmo78594.setContext(context);
stavesmo78594.draw();
smo78594v0.draw(context, stavesmo78594);
smo89032.setContext(context);
smo89032.draw();
smo89033.setContext(context);
smo89033.draw();
const stavesmo79413 = new VF.Stave(451, 1067, 374);
stavesmo79413.setAttribute('id', 'stavesmo79413');
stavesmo79413.setBegBarType(VF.Barline.type.NONE);
stavesmo79413.setContext(context);
stavesmo79413.draw();
smo79413v0.draw(context, stavesmo79413);
smo89035.setContext(context);
smo89035.draw();
smo89036.setContext(context);
smo89036.draw();
const stavesmo80224 = new VF.Stave(451, 1145, 374);
stavesmo80224.setAttribute('id', 'stavesmo80224');
stavesmo80224.setBegBarType(VF.Barline.type.NONE);
stavesmo80224.setContext(context);
stavesmo80224.draw();
smo80224v0.draw(context, stavesmo80224);
smo89038.setContext(context);
smo89038.draw();
smo89039.setContext(context);
smo89039.draw();
const stavesmo81010 = new VF.Stave(451, 1243, 374);
stavesmo81010.setAttribute('id', 'stavesmo81010');
stavesmo81010.setBegBarType(VF.Barline.type.NONE);
stavesmo81010.setContext(context);
stavesmo81010.draw();
smo81010v0.draw(context, stavesmo81010);
smo89041.setContext(context);
smo89041.draw();
smo89042.setContext(context);
smo89042.draw();
const stavesmo81905 = new VF.Stave(451, 1365, 374);
stavesmo81905.setAttribute('id', 'stavesmo81905');
stavesmo81905.setBegBarType(VF.Barline.type.NONE);
stavesmo81905.setContext(context);
stavesmo81905.draw();
smo81905v0.draw(context, stavesmo81905);
smo89044.setContext(context);
smo89044.draw();
smo89045.setContext(context);
smo89045.draw();
const fmtsmo786166 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo78616v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78616v0ar = [];
const smo78595 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo78595.setAttribute('id', 'smo78595');
smo78595.addModifier(new VF.Dot(), 0);
smo78616v0ar.push(smo78595);
const smo78596 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo78596.setAttribute('id', 'smo78596');
smo78616v0ar.push(smo78596);
const smo78597 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo78597.setAttribute('id', 'smo78597');
smo78616v0ar.push(smo78597);
const smo78598 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["g#/5/n"]}'))
smo78598.setAttribute('id', 'smo78598');
smo78598.addModifier(new VF.Dot(), 0);
smo78616v0ar.push(smo78598);
const smo78599 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo78599.setAttribute('id', 'smo78599');
smo78616v0ar.push(smo78599);
const smo78600 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo78600.setAttribute('id', 'smo78600');
smo78616v0ar.push(smo78600);
smo78616v0.addTickables(smo78616v0ar)
fmtsmo786166.joinVoices([smo78616v0]);
const fmtsmo794356 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo79435v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo79435v0ar = [];
const smo79414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo79414.setAttribute('id', 'smo79414');
smo79414.addModifier(new VF.Dot(), 0);
smo79435v0ar.push(smo79414);
const smo79415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo79415.setAttribute('id', 'smo79415');
smo79435v0ar.push(smo79415);
const smo79416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo79416.setAttribute('id', 'smo79416');
smo79435v0ar.push(smo79416);
const smo79417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo79417.setAttribute('id', 'smo79417');
smo79417.addModifier(new VF.Dot(), 0);
smo79435v0ar.push(smo79417);
const smo79418 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo79418.setAttribute('id', 'smo79418');
smo79435v0ar.push(smo79418);
const smo79419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo79419.setAttribute('id', 'smo79419');
smo79435v0ar.push(smo79419);
smo79435v0.addTickables(smo79435v0ar)
fmtsmo794356.joinVoices([smo79435v0]);
const fmtsmo802466 = new VF.Formatter();
//
// voices and notes for stave 2 6
const smo80246v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80246v0ar = [];
const smo80225 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo80225.setAttribute('id', 'smo80225');
smo80225.addModifier(new VF.Dot(), 0);
smo80246v0ar.push(smo80225);
const smo80226 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80226.setAttribute('id', 'smo80226');
smo80246v0ar.push(smo80226);
const smo80227 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo80227.setAttribute('id', 'smo80227');
smo80246v0ar.push(smo80227);
const smo80228 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo80228.setAttribute('id', 'smo80228');
smo80228.addModifier(new VF.Dot(), 0);
smo80246v0ar.push(smo80228);
const smo80229 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo80229.setAttribute('id', 'smo80229');
smo80246v0ar.push(smo80229);
const smo80230 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo80230.setAttribute('id', 'smo80230');
smo80246v0ar.push(smo80230);
smo80246v0.addTickables(smo80246v0ar)
fmtsmo802466.joinVoices([smo80246v0]);
const fmtsmo810346 = new VF.Formatter();
//
// voices and notes for stave 3 6
const smo81034v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81034v0ar = [];
const smo81011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo81011.setAttribute('id', 'smo81011');
const smo81012 = new VF.Annotation('peo');
smo81012.setAttribute('id', 'smo81012');
smo81012.setFont('Merriweather', 12, 'normal');
smo81012.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo81011.addModifier(smo81012);
smo81012.addClass('lyric lyric-0');
smo81034v0ar.push(smo81011);
const smo81013 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo81013.setAttribute('id', 'smo81013');
const smo81014 = new VF.Annotation('-');
smo81014.setAttribute('id', 'smo81014');
smo81014.setFont('Merriweather', 12, 'normal');
smo81014.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo81013.addModifier(smo81014);
smo81014.addClass('lyric lyric-0 lyric-hyphen');
smo81034v0ar.push(smo81013);
const smo81015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo81015.setAttribute('id', 'smo81015');
smo81034v0ar.push(smo81015);
const smo81016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo81016.setAttribute('id', 'smo81016');
const smo81017 = new VF.Annotation('ple');
smo81017.setAttribute('id', 'smo81017');
smo81017.setFont('Merriweather', 12, 'normal');
smo81017.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo81016.addModifier(smo81017);
smo81017.addClass('lyric lyric-0');
smo81034v0ar.push(smo81016);
const smo81018 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo81018.setAttribute('id', 'smo81018');
smo81034v0ar.push(smo81018);
smo81034v0.addTickables(smo81034v0ar)
fmtsmo810346.joinVoices([smo81034v0]);
const fmtsmo819256 = new VF.Formatter();
//
// voices and notes for stave 4 6
const smo81925v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81925v0ar = [];
const smo81906 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo81906.setAttribute('id', 'smo81906');
smo81906.addModifier(new VF.Dot(), 0);
smo81925v0ar.push(smo81906);
const smo81907 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo81907.setAttribute('id', 'smo81907');
smo81925v0ar.push(smo81907);
const smo81908 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo81908.setAttribute('id', 'smo81908');
smo81925v0ar.push(smo81908);
const smo81909 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo81909.setAttribute('id', 'smo81909');
smo81925v0ar.push(smo81909);
smo81925v0.addTickables(smo81925v0ar)
fmtsmo819256.joinVoices([smo81925v0]);
// create beam groups and tuplets for format grp smo82569 before formatting
const dirsmo89052 = smo78595.getStemDirection();
smo78595.setStemDirection(dirsmo89052);
smo78596.setStemDirection(dirsmo89052);
const smo89052 = new VF.Beam([smo78595,smo78596]);
const dirsmo89053 = smo78598.getStemDirection();
smo78598.setStemDirection(dirsmo89053);
smo78599.setStemDirection(dirsmo89053);
const smo89053 = new VF.Beam([smo78598,smo78599]);
const dirsmo89055 = smo79414.getStemDirection();
smo79414.setStemDirection(dirsmo89055);
smo79415.setStemDirection(dirsmo89055);
const smo89055 = new VF.Beam([smo79414,smo79415]);
const dirsmo89056 = smo79417.getStemDirection();
smo79417.setStemDirection(dirsmo89056);
smo79418.setStemDirection(dirsmo89056);
const smo89056 = new VF.Beam([smo79417,smo79418]);
const dirsmo89058 = smo80225.getStemDirection();
smo80225.setStemDirection(dirsmo89058);
smo80226.setStemDirection(dirsmo89058);
const smo89058 = new VF.Beam([smo80225,smo80226]);
const dirsmo89059 = smo80228.getStemDirection();
smo80228.setStemDirection(dirsmo89059);
smo80229.setStemDirection(dirsmo89059);
const smo89059 = new VF.Beam([smo80228,smo80229]);
const dirsmo89061 = smo81011.getStemDirection();
smo81011.setStemDirection(dirsmo89061);
smo81013.setStemDirection(dirsmo89061);
smo81015.setStemDirection(dirsmo89061);
const smo89061 = new VF.Beam([smo81011,smo81013,smo81015]);
const dirsmo89063 = smo81906.getStemDirection();
smo81906.setStemDirection(dirsmo89063);
smo81907.setStemDirection(dirsmo89063);
const smo89063 = new VF.Beam([smo81906,smo81907]);
 
// formatting measures in staff group smo82569
fmtsmo786166.format([smo78616v0,smo79435v0,smo80246v0,smo81034v0,smo81925v0], 279);
const stavesmo78616 = new VF.Stave(825, 973, 293);
stavesmo78616.setAttribute('id', 'stavesmo78616');
stavesmo78616.setBegBarType(VF.Barline.type.NONE);
stavesmo78616.setContext(context);
stavesmo78616.draw();
smo78616v0.draw(context, stavesmo78616);
smo89052.setContext(context);
smo89052.draw();
smo89053.setContext(context);
smo89053.draw();
const stavesmo79435 = new VF.Stave(825, 1067, 293);
stavesmo79435.setAttribute('id', 'stavesmo79435');
stavesmo79435.setBegBarType(VF.Barline.type.NONE);
stavesmo79435.setContext(context);
stavesmo79435.draw();
smo79435v0.draw(context, stavesmo79435);
smo89055.setContext(context);
smo89055.draw();
smo89056.setContext(context);
smo89056.draw();
const stavesmo80246 = new VF.Stave(825, 1145, 293);
stavesmo80246.setAttribute('id', 'stavesmo80246');
stavesmo80246.setBegBarType(VF.Barline.type.NONE);
stavesmo80246.setContext(context);
stavesmo80246.draw();
smo80246v0.draw(context, stavesmo80246);
smo89058.setContext(context);
smo89058.draw();
smo89059.setContext(context);
smo89059.draw();
const stavesmo81034 = new VF.Stave(825, 1243, 293);
stavesmo81034.setAttribute('id', 'stavesmo81034');
stavesmo81034.setBegBarType(VF.Barline.type.NONE);
stavesmo81034.setContext(context);
stavesmo81034.draw();
smo81034v0.draw(context, stavesmo81034);
smo89061.setContext(context);
smo89061.draw();
const stavesmo81925 = new VF.Stave(825, 1365, 293);
stavesmo81925.setAttribute('id', 'stavesmo81925');
stavesmo81925.setBegBarType(VF.Barline.type.NONE);
stavesmo81925.setContext(context);
stavesmo81925.draw();
smo81925v0.draw(context, stavesmo81925);
smo89063.setContext(context);
smo89063.draw();
const fmtsmo786337 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo78633v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78633v0ar = [];
const smo78617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo78617.setAttribute('id', 'smo78617');
smo78633v0ar.push(smo78617);
smo78633v0.addTickables(smo78633v0ar)
fmtsmo786337.joinVoices([smo78633v0]);
const fmtsmo794527 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo79452v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo79452v0ar = [];
const smo79436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo79436.setAttribute('id', 'smo79436');
smo79452v0ar.push(smo79436);
smo79452v0.addTickables(smo79452v0ar)
fmtsmo794527.joinVoices([smo79452v0]);
const fmtsmo802637 = new VF.Formatter();
//
// voices and notes for stave 2 7
const smo80263v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo80263v0ar = [];
const smo80247 = new VF.StaveNote(JSON.parse('{"clef":"alto","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["cn/4/r"]}'))
smo80247.setAttribute('id', 'smo80247');
smo80263v0ar.push(smo80247);
smo80263v0.addTickables(smo80263v0ar)
fmtsmo802637.joinVoices([smo80263v0]);
const fmtsmo810587 = new VF.Formatter();
//
// voices and notes for stave 3 7
const smo81058v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81058v0ar = [];
const smo81035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo81035.setAttribute('id', 'smo81035');
const smo81036 = new VF.Annotation('Com');
smo81036.setAttribute('id', 'smo81036');
smo81036.setFont('Merriweather', 12, 'normal');
smo81036.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo81035.addModifier(smo81036);
smo81036.addClass('lyric lyric-0');
smo81058v0ar.push(smo81035);
const smo81037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo81037.setAttribute('id', 'smo81037');
smo81037.addModifier(new VF.Dot(), 0);
const smo81038 = new VF.Annotation('-');
smo81038.setAttribute('id', 'smo81038');
smo81038.setFont('Merriweather', 12, 'normal');
smo81038.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo81037.addModifier(smo81038);
smo81038.addClass('lyric lyric-0 lyric-hyphen');
smo81058v0ar.push(smo81037);
const smo81039 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo81039.setAttribute('id', 'smo81039');
const smo81040 = new VF.Annotation('fort');
smo81040.setAttribute('id', 'smo81040');
smo81040.setFont('Merriweather', 12, 'normal');
smo81040.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo81039.addModifier(smo81040);
smo81040.addClass('lyric lyric-0');
smo81058v0ar.push(smo81039);
const smo81041 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo81041.setAttribute('id', 'smo81041');
const smo81042 = new VF.Annotation('ye,');
smo81042.setAttribute('id', 'smo81042');
smo81042.setFont('Merriweather', 12, 'normal');
smo81042.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo81041.addModifier(smo81042);
smo81042.addClass('lyric lyric-0');
smo81058v0ar.push(smo81041);
smo81058v0.addTickables(smo81058v0ar)
fmtsmo810587.joinVoices([smo81058v0]);
const fmtsmo819427 = new VF.Formatter();
//
// voices and notes for stave 4 7
const smo81942v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81942v0ar = [];
const smo81926 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo81926.setAttribute('id', 'smo81926');
smo81942v0ar.push(smo81926);
smo81942v0.addTickables(smo81942v0ar)
fmtsmo819427.joinVoices([smo81942v0]);
// create beam groups and tuplets for format grp smo82569 before formatting
const dirsmo89073 = smo81037.getStemDirection();
smo81037.setStemDirection(dirsmo89073);
smo81039.setStemDirection(dirsmo89073);
const smo89073 = new VF.Beam([smo81037,smo81039]);
 
// formatting measures in staff group smo82569
fmtsmo786337.format([smo78633v0,smo79452v0,smo80263v0,smo81058v0,smo81942v0], 241);
const stavesmo78633 = new VF.Stave(1118, 973, 255);
stavesmo78633.setAttribute('id', 'stavesmo78633');
stavesmo78633.setBegBarType(VF.Barline.type.NONE);
stavesmo78633.setContext(context);
stavesmo78633.draw();
smo78633v0.draw(context, stavesmo78633);
const stavesmo79452 = new VF.Stave(1118, 1067, 255);
stavesmo79452.setAttribute('id', 'stavesmo79452');
stavesmo79452.setBegBarType(VF.Barline.type.NONE);
stavesmo79452.setContext(context);
stavesmo79452.draw();
smo79452v0.draw(context, stavesmo79452);
const stavesmo80263 = new VF.Stave(1118, 1145, 255);
stavesmo80263.setAttribute('id', 'stavesmo80263');
stavesmo80263.setBegBarType(VF.Barline.type.NONE);
stavesmo80263.setContext(context);
stavesmo80263.draw();
smo80263v0.draw(context, stavesmo80263);
const stavesmo81058 = new VF.Stave(1118, 1243, 255);
stavesmo81058.setAttribute('id', 'stavesmo81058');
stavesmo81058.setBegBarType(VF.Barline.type.NONE);
stavesmo81058.setContext(context);
stavesmo81058.draw();
smo81058v0.draw(context, stavesmo81058);
smo89073.setContext(context);
smo89073.draw();
const stavesmo81942 = new VF.Stave(1118, 1365, 255);
stavesmo81942.setAttribute('id', 'stavesmo81942');
stavesmo81942.setBegBarType(VF.Barline.type.NONE);
stavesmo81942.setContext(context);
stavesmo81942.draw();
smo81942v0.draw(context, stavesmo81942);
const rightsmo82569stavesmo786334 = new VF.StaveConnector(stavesmo78633, stavesmo81942).setType(0);
rightsmo82569stavesmo786334.setContext(context).draw();
// modifier from 0-0-0-0 to 0-0-0-3
const smo90137 = new VF.Curve(smo78449, smo78456, JSON.parse('{"thickness":2,"xShift":0,"yShift":25,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo90137.setContext(context).draw();
// modifier from 0-4-0-4 to 0-4-0-5
const smo90138 = new VF.Curve(smo78551, smo78552, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo90138.setContext(context).draw();
// modifier from 0-0-0-4 to 0-0-0-5
const smo90139 = new VF.Curve(smo78458, smo78459, JSON.parse('{"thickness":2,"xShift":0,"yShift":5,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo90139.setContext(context).draw();
// modifier from 0-1-0-4 to 0-1-0-5
const smo90140 = new VF.Curve(smo78482, smo78483, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo90140.setContext(context).draw();
// modifier from 1-0-0-0 to 1-0-0-3
const smo90141 = new VF.Curve(smo79269, smo79275, JSON.parse('{"thickness":2,"xShift":0,"yShift":20,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo90141.setContext(context).draw();
// modifier from 2-0-0-0 to 2-0-0-3
const smo90142 = new VF.Curve(smo80080, smo80086, JSON.parse('{"thickness":2,"xShift":0,"yShift":20,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo90142.setContext(context).draw();
// modifier from 3-7-0-0 to 3-7-0-1
const smo90143 = new VF.Curve(smo81035, smo81037, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo90143.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo80943').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo80947').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo80967').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo80985').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo80987').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo80990').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo80992').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo80994').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo81012').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo81014').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo81036').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo81038').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo81040').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo81042').setAttributeNS('', 'transform', 'translate(0 20)');
}
// @@ Well-Tempered Clavier p 1/5  by Bach
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
const fmtsmo684140 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo68414v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68414v0ar = [];
const smo68386 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68386.setAttribute('id', 'smo68386');
smo68414v0ar.push(smo68386);
const smo68388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68388.setAttribute('id', 'smo68388');
smo68414v0ar.push(smo68388);
const smo68389 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo68389.setAttribute('id', 'smo68389');
smo68414v0ar.push(smo68389);
const smo68390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo68390.setAttribute('id', 'smo68390');
smo68414v0ar.push(smo68390);
const smo68391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68391.setAttribute('id', 'smo68391');
smo68414v0ar.push(smo68391);
const smo68392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo68392.setAttribute('id', 'smo68392');
smo68414v0ar.push(smo68392);
const smo68393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo68393.setAttribute('id', 'smo68393');
smo68414v0ar.push(smo68393);
const smo68394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68394.setAttribute('id', 'smo68394');
smo68414v0ar.push(smo68394);
const smo68395 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68395.setAttribute('id', 'smo68395');
smo68414v0ar.push(smo68395);
const smo68396 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo68396.setAttribute('id', 'smo68396');
smo68414v0ar.push(smo68396);
const smo68397 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo68397.setAttribute('id', 'smo68397');
smo68414v0ar.push(smo68397);
const smo68398 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68398.setAttribute('id', 'smo68398');
smo68414v0ar.push(smo68398);
const smo68399 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo68399.setAttribute('id', 'smo68399');
smo68414v0ar.push(smo68399);
const smo68400 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo68400.setAttribute('id', 'smo68400');
smo68414v0ar.push(smo68400);
smo68414v0.addTickables(smo68414v0ar)
fmtsmo684140.joinVoices([smo68414v0]);
const fmtsmo738550 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo73855v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73855v0ar = [];
const smo73834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo73834.setAttribute('id', 'smo73834');
smo73855v0ar.push(smo73834);
const smo73835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo73835.setAttribute('id', 'smo73835');
smo73835.addModifier(new VF.Dot(), 0);
smo73855v0ar.push(smo73835);
const smo73836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo73836.setAttribute('id', 'smo73836');
smo73855v0ar.push(smo73836);
const smo73837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo73837.setAttribute('id', 'smo73837');
smo73855v0ar.push(smo73837);
const smo73838 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo73838.setAttribute('id', 'smo73838');
smo73838.addModifier(new VF.Dot(), 0);
smo73855v0ar.push(smo73838);
const smo73839 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo73839.setAttribute('id', 'smo73839');
smo73855v0ar.push(smo73839);
smo73855v0.addTickables(smo73855v0ar)
fmtsmo738550.joinVoices([smo73855v0]);
const smo73855v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73855v1ar = [];
const smo73840 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo73840.setAttribute('id', 'smo73840');
smo73840.setStyle({ fillStyle: "#115511" });
smo73855v1ar.push(smo73840);
const smo73841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo73841.setAttribute('id', 'smo73841');
smo73841.setStyle({ fillStyle: "#115511" });
smo73855v1ar.push(smo73841);
smo73855v1.addTickables(smo73855v1ar)
fmtsmo738550.joinVoices([smo73855v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo77771 = smo68388.getStemDirection();
smo68388.setStemDirection(dirsmo77771);
smo68389.setStemDirection(dirsmo77771);
const smo77771 = new VF.Beam([smo68388,smo68389]);
const dirsmo77772 = smo68390.getStemDirection();
smo68390.setStemDirection(dirsmo77772);
smo68391.setStemDirection(dirsmo77772);
smo68392.setStemDirection(dirsmo77772);
smo68393.setStemDirection(dirsmo77772);
const smo77772 = new VF.Beam([smo68390,smo68391,smo68392,smo68393]);
const dirsmo77773 = smo68395.getStemDirection();
smo68395.setStemDirection(dirsmo77773);
smo68396.setStemDirection(dirsmo77773);
const smo77773 = new VF.Beam([smo68395,smo68396]);
const dirsmo77774 = smo68397.getStemDirection();
smo68397.setStemDirection(dirsmo77774);
smo68398.setStemDirection(dirsmo77774);
smo68399.setStemDirection(dirsmo77774);
smo68400.setStemDirection(dirsmo77774);
const smo77774 = new VF.Beam([smo68397,smo68398,smo68399,smo68400]);
 
// formatting measures in staff group smo67190
fmtsmo684140.format([smo68414v0,smo73855v0,smo73855v1], 507);
const stavesmo68414 = new VF.Stave(90, 294, 589);
stavesmo68414.setAttribute('id', 'stavesmo68414');
stavesmo68414.setBegBarType(1);
stavesmo68414.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":112,"name":"Moderato"}'), -1 * 18);
stavesmo68414.addClef('treble');
stavesmo68414.addTimeSignature('4/4');
stavesmo68414.setContext(context);
stavesmo68414.draw();
smo68414v0.draw(context, stavesmo68414);
smo77771.setContext(context);
smo77771.draw();
smo77772.setContext(context);
smo77772.draw();
smo77773.setContext(context);
smo77773.draw();
smo77774.setContext(context);
smo77774.draw();
const stavesmo73855 = new VF.Stave(90, 498, 589);
stavesmo73855.setAttribute('id', 'stavesmo73855');
stavesmo73855.setBegBarType(1);
stavesmo73855.addClef('treble');
stavesmo73855.addTimeSignature('4/4');
stavesmo73855.setContext(context);
stavesmo73855.draw();
smo73855v0.draw(context, stavesmo73855);
smo73855v1.draw(context, stavesmo73855);
const leftsmo67190stavesmo684141 = new VF.StaveConnector(stavesmo68414, stavesmo73855).setType(3);
leftsmo67190stavesmo684141.setContext(context).draw();
const fmtsmo684421 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo68442v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68442v0ar = [];
const smo68415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68415.setAttribute('id', 'smo68415');
smo68442v0ar.push(smo68415);
const smo68416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo68416.setAttribute('id', 'smo68416');
smo68442v0ar.push(smo68416);
const smo68417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo68417.setAttribute('id', 'smo68417');
smo68442v0ar.push(smo68417);
const smo68418 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo68418.setAttribute('id', 'smo68418');
smo68442v0ar.push(smo68418);
const smo68419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo68419.setAttribute('id', 'smo68419');
smo68442v0ar.push(smo68419);
const smo68420 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo68420.setAttribute('id', 'smo68420');
smo68442v0ar.push(smo68420);
const smo68421 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo68421.setAttribute('id', 'smo68421');
smo68442v0ar.push(smo68421);
const smo68422 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68422.setAttribute('id', 'smo68422');
smo68442v0ar.push(smo68422);
const smo68423 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo68423.setAttribute('id', 'smo68423');
smo68442v0ar.push(smo68423);
const smo68424 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo68424.setAttribute('id', 'smo68424');
smo68442v0ar.push(smo68424);
const smo68425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo68425.setAttribute('id', 'smo68425');
smo68442v0ar.push(smo68425);
const smo68426 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo68426.setAttribute('id', 'smo68426');
smo68442v0ar.push(smo68426);
const smo68427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo68427.setAttribute('id', 'smo68427');
smo68442v0ar.push(smo68427);
const smo68428 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo68428.setAttribute('id', 'smo68428');
smo68442v0ar.push(smo68428);
smo68442v0.addTickables(smo68442v0ar)
fmtsmo684421.joinVoices([smo68442v0]);
const fmtsmo738771 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo73877v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73877v0ar = [];
const smo73856 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["cn/7/r"]}'))
smo73856.setAttribute('id', 'smo73856');
smo73877v0ar.push(smo73856);
const smo73857 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo73857.setAttribute('id', 'smo73857');
smo73857.addModifier(new VF.Dot(), 0);
smo73877v0ar.push(smo73857);
const smo73858 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo73858.setAttribute('id', 'smo73858');
smo73877v0ar.push(smo73858);
const smo73859 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["cn/7/r"]}'))
smo73859.setAttribute('id', 'smo73859');
smo73877v0ar.push(smo73859);
const smo73860 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo73860.setAttribute('id', 'smo73860');
smo73860.addModifier(new VF.Dot(), 0);
smo73877v0ar.push(smo73860);
const smo73861 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo73861.setAttribute('id', 'smo73861');
smo73877v0ar.push(smo73861);
smo73877v0.addTickables(smo73877v0ar)
fmtsmo738771.joinVoices([smo73877v0]);
const smo73877v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73877v1ar = [];
const smo73862 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo73862.setAttribute('id', 'smo73862');
smo73862.setStyle({ fillStyle: "#115511" });
smo73877v1ar.push(smo73862);
const smo73863 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo73863.setAttribute('id', 'smo73863');
smo73863.setStyle({ fillStyle: "#115511" });
smo73877v1ar.push(smo73863);
smo73877v1.addTickables(smo73877v1ar)
fmtsmo738771.joinVoices([smo73877v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo77779 = smo68416.getStemDirection();
smo68416.setStemDirection(dirsmo77779);
smo68417.setStemDirection(dirsmo77779);
const smo77779 = new VF.Beam([smo68416,smo68417]);
const dirsmo77780 = smo68418.getStemDirection();
smo68418.setStemDirection(dirsmo77780);
smo68419.setStemDirection(dirsmo77780);
smo68420.setStemDirection(dirsmo77780);
smo68421.setStemDirection(dirsmo77780);
const smo77780 = new VF.Beam([smo68418,smo68419,smo68420,smo68421]);
const dirsmo77781 = smo68423.getStemDirection();
smo68423.setStemDirection(dirsmo77781);
smo68424.setStemDirection(dirsmo77781);
const smo77781 = new VF.Beam([smo68423,smo68424]);
const dirsmo77782 = smo68425.getStemDirection();
smo68425.setStemDirection(dirsmo77782);
smo68426.setStemDirection(dirsmo77782);
smo68427.setStemDirection(dirsmo77782);
smo68428.setStemDirection(dirsmo77782);
const smo77782 = new VF.Beam([smo68425,smo68426,smo68427,smo68428]);
 
// formatting measures in staff group smo67190
fmtsmo684421.format([smo68442v0,smo73877v0,smo73877v1], 518);
const stavesmo68442 = new VF.Stave(679, 294, 566);
stavesmo68442.setAttribute('id', 'stavesmo68442');
stavesmo68442.setBegBarType(VF.Barline.type.NONE);
stavesmo68442.setContext(context);
stavesmo68442.draw();
smo68442v0.draw(context, stavesmo68442);
smo77779.setContext(context);
smo77779.draw();
smo77780.setContext(context);
smo77780.draw();
smo77781.setContext(context);
smo77781.draw();
smo77782.setContext(context);
smo77782.draw();
const stavesmo73877 = new VF.Stave(679, 498, 566);
stavesmo73877.setAttribute('id', 'stavesmo73877');
stavesmo73877.setBegBarType(VF.Barline.type.NONE);
stavesmo73877.addClef('bass');
stavesmo73877.setContext(context);
stavesmo73877.draw();
smo73877v0.draw(context, stavesmo73877);
smo73877v1.draw(context, stavesmo73877);
const fmtsmo684742 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo68474v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68474v0ar = [];
const smo68443 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68443.setAttribute('id', 'smo68443');
smo68474v0ar.push(smo68443);
const smo68444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68444.setAttribute('id', 'smo68444');
smo68474v0ar.push(smo68444);
const smo68445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo68445.setAttribute('id', 'smo68445');
smo68474v0ar.push(smo68445);
const smo68446 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo68446.setAttribute('id', 'smo68446');
smo68474v0ar.push(smo68446);
const smo68447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68447.setAttribute('id', 'smo68447');
smo68474v0ar.push(smo68447);
const smo68448 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo68448.setAttribute('id', 'smo68448');
smo68474v0ar.push(smo68448);
const smo68449 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo68449.setAttribute('id', 'smo68449');
smo68474v0ar.push(smo68449);
const smo68450 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68450.setAttribute('id', 'smo68450');
smo68474v0ar.push(smo68450);
const smo68451 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68451.setAttribute('id', 'smo68451');
smo68474v0ar.push(smo68451);
const smo68452 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo68452.setAttribute('id', 'smo68452');
smo68474v0ar.push(smo68452);
const smo68453 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo68453.setAttribute('id', 'smo68453');
smo68474v0ar.push(smo68453);
const smo68454 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68454.setAttribute('id', 'smo68454');
smo68474v0ar.push(smo68454);
const smo68455 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo68455.setAttribute('id', 'smo68455');
smo68474v0ar.push(smo68455);
const smo68456 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo68456.setAttribute('id', 'smo68456');
smo68474v0ar.push(smo68456);
smo68474v0.addTickables(smo68474v0ar)
fmtsmo684742.joinVoices([smo68474v0]);
const smo68474v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68474v1ar = [];
const smo68457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68457.setAttribute('id', 'smo68457');
smo68457.setStyle({ fillStyle: '#aaaaaa7f' });
smo68474v1ar.push(smo68457);
const smo68458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68458.setAttribute('id', 'smo68458');
smo68458.setStyle({ fillStyle: '#aaaaaa7f' });
smo68458.addModifier(new VF.Dot(), 0);
smo68458.addModifier(new VF.Dot(), 0);
smo68474v1ar.push(smo68458);
const smo68459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68459.setAttribute('id', 'smo68459');
smo68459.setStyle({ fillStyle: '#aaaaaa7f' });
smo68474v1ar.push(smo68459);
const smo68460 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68460.setAttribute('id', 'smo68460');
smo68460.setStyle({ fillStyle: '#aaaaaa7f' });
smo68460.addModifier(new VF.Dot(), 0);
smo68460.addModifier(new VF.Dot(), 0);
smo68474v1ar.push(smo68460);
smo68474v1.addTickables(smo68474v1ar)
fmtsmo684742.joinVoices([smo68474v1]);
const fmtsmo738992 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo73899v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73899v0ar = [];
const smo73878 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bb/6/r"]}'))
smo73878.setAttribute('id', 'smo73878');
smo73899v0ar.push(smo73878);
const smo73879 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo73879.setAttribute('id', 'smo73879');
smo73879.addModifier(new VF.Dot(), 0);
smo73899v0ar.push(smo73879);
const smo73880 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo73880.setAttribute('id', 'smo73880');
smo73899v0ar.push(smo73880);
const smo73881 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["cn/7/r"]}'))
smo73881.setAttribute('id', 'smo73881');
smo73899v0ar.push(smo73881);
const smo73882 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo73882.setAttribute('id', 'smo73882');
smo73882.addModifier(new VF.Dot(), 0);
smo73899v0ar.push(smo73882);
const smo73883 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo73883.setAttribute('id', 'smo73883');
smo73899v0ar.push(smo73883);
smo73899v0.addTickables(smo73899v0ar)
fmtsmo738992.joinVoices([smo73899v0]);
const smo73899v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73899v1ar = [];
const smo73884 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo73884.setAttribute('id', 'smo73884');
smo73884.setStyle({ fillStyle: "#115511" });
smo73899v1ar.push(smo73884);
const smo73885 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo73885.setAttribute('id', 'smo73885');
smo73885.setStyle({ fillStyle: "#115511" });
smo73899v1ar.push(smo73885);
smo73899v1.addTickables(smo73899v1ar)
fmtsmo738992.joinVoices([smo73899v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo77787 = smo68444.getStemDirection();
smo68444.setStemDirection(dirsmo77787);
smo68445.setStemDirection(dirsmo77787);
const smo77787 = new VF.Beam([smo68444,smo68445]);
const dirsmo77788 = smo68446.getStemDirection();
smo68446.setStemDirection(dirsmo77788);
smo68447.setStemDirection(dirsmo77788);
smo68448.setStemDirection(dirsmo77788);
smo68449.setStemDirection(dirsmo77788);
const smo77788 = new VF.Beam([smo68446,smo68447,smo68448,smo68449]);
const dirsmo77789 = smo68451.getStemDirection();
smo68451.setStemDirection(dirsmo77789);
smo68452.setStemDirection(dirsmo77789);
const smo77789 = new VF.Beam([smo68451,smo68452]);
const dirsmo77790 = smo68453.getStemDirection();
smo68453.setStemDirection(dirsmo77790);
smo68454.setStemDirection(dirsmo77790);
smo68455.setStemDirection(dirsmo77790);
smo68456.setStemDirection(dirsmo77790);
const smo77790 = new VF.Beam([smo68453,smo68454,smo68455,smo68456]);
 
// formatting measures in staff group smo67190
fmtsmo684742.format([smo68474v0,smo68474v1,smo73899v0,smo73899v1], 548);
const stavesmo68474 = new VF.Stave(1245, 294, 562);
stavesmo68474.setAttribute('id', 'stavesmo68474');
stavesmo68474.setBegBarType(VF.Barline.type.NONE);
stavesmo68474.setContext(context);
stavesmo68474.draw();
smo68474v0.draw(context, stavesmo68474);
smo68474v1.draw(context, stavesmo68474);
smo77787.setContext(context);
smo77787.draw();
smo77788.setContext(context);
smo77788.draw();
smo77789.setContext(context);
smo77789.draw();
smo77790.setContext(context);
smo77790.draw();
const stavesmo73899 = new VF.Stave(1245, 498, 562);
stavesmo73899.setAttribute('id', 'stavesmo73899');
stavesmo73899.setBegBarType(VF.Barline.type.NONE);
stavesmo73899.setContext(context);
stavesmo73899.draw();
smo73899v0.draw(context, stavesmo73899);
smo73899v1.draw(context, stavesmo73899);
const rightsmo67190stavesmo684741 = new VF.StaveConnector(stavesmo68474, stavesmo73899).setType(0);
rightsmo67190stavesmo684741.setContext(context).draw();
const fmtsmo685063 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo68506v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68506v0ar = [];
const smo68475 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68475.setAttribute('id', 'smo68475');
smo68506v0ar.push(smo68475);
const smo68476 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68476.setAttribute('id', 'smo68476');
smo68506v0ar.push(smo68476);
const smo68477 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo68477.setAttribute('id', 'smo68477');
smo68506v0ar.push(smo68477);
const smo68478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo68478.setAttribute('id', 'smo68478');
smo68506v0ar.push(smo68478);
const smo68479 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68479.setAttribute('id', 'smo68479');
smo68506v0ar.push(smo68479);
const smo68480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo68480.setAttribute('id', 'smo68480');
smo68506v0ar.push(smo68480);
const smo68481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo68481.setAttribute('id', 'smo68481');
smo68506v0ar.push(smo68481);
const smo68482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68482.setAttribute('id', 'smo68482');
smo68506v0ar.push(smo68482);
const smo68483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68483.setAttribute('id', 'smo68483');
smo68506v0ar.push(smo68483);
const smo68484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo68484.setAttribute('id', 'smo68484');
smo68506v0ar.push(smo68484);
const smo68485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo68485.setAttribute('id', 'smo68485');
smo68506v0ar.push(smo68485);
const smo68486 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68486.setAttribute('id', 'smo68486');
smo68506v0ar.push(smo68486);
const smo68487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo68487.setAttribute('id', 'smo68487');
smo68506v0ar.push(smo68487);
const smo68488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo68488.setAttribute('id', 'smo68488');
smo68506v0ar.push(smo68488);
smo68506v0.addTickables(smo68506v0ar)
fmtsmo685063.joinVoices([smo68506v0]);
const smo68506v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68506v1ar = [];
const smo68489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68489.setAttribute('id', 'smo68489');
smo68489.setStyle({ fillStyle: '#aaaaaa7f' });
smo68506v1ar.push(smo68489);
const smo68490 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68490.setAttribute('id', 'smo68490');
smo68490.setStyle({ fillStyle: '#aaaaaa7f' });
smo68490.addModifier(new VF.Dot(), 0);
smo68490.addModifier(new VF.Dot(), 0);
smo68506v1ar.push(smo68490);
const smo68491 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68491.setAttribute('id', 'smo68491');
smo68491.setStyle({ fillStyle: '#aaaaaa7f' });
smo68506v1ar.push(smo68491);
const smo68492 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68492.setAttribute('id', 'smo68492');
smo68492.setStyle({ fillStyle: '#aaaaaa7f' });
smo68492.addModifier(new VF.Dot(), 0);
smo68492.addModifier(new VF.Dot(), 0);
smo68506v1ar.push(smo68492);
smo68506v1.addTickables(smo68506v1ar)
fmtsmo685063.joinVoices([smo68506v1]);
const fmtsmo739213 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo73921v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73921v0ar = [];
const smo73900 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo73900.setAttribute('id', 'smo73900');
smo73921v0ar.push(smo73900);
const smo73901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo73901.setAttribute('id', 'smo73901');
smo73901.addModifier(new VF.Dot(), 0);
smo73921v0ar.push(smo73901);
const smo73902 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo73902.setAttribute('id', 'smo73902');
smo73921v0ar.push(smo73902);
const smo73903 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo73903.setAttribute('id', 'smo73903');
smo73921v0ar.push(smo73903);
const smo73904 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo73904.setAttribute('id', 'smo73904');
smo73904.addModifier(new VF.Dot(), 0);
smo73921v0ar.push(smo73904);
const smo73905 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo73905.setAttribute('id', 'smo73905');
smo73921v0ar.push(smo73905);
smo73921v0.addTickables(smo73921v0ar)
fmtsmo739213.joinVoices([smo73921v0]);
const smo73921v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73921v1ar = [];
const smo73906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo73906.setAttribute('id', 'smo73906');
smo73906.setStyle({ fillStyle: "#115511" });
smo73921v1ar.push(smo73906);
const smo73907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo73907.setAttribute('id', 'smo73907');
smo73907.setStyle({ fillStyle: "#115511" });
smo73921v1ar.push(smo73907);
smo73921v1.addTickables(smo73921v1ar)
fmtsmo739213.joinVoices([smo73921v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo77803 = smo68476.getStemDirection();
smo68476.setStemDirection(dirsmo77803);
smo68477.setStemDirection(dirsmo77803);
const smo77803 = new VF.Beam([smo68476,smo68477]);
const dirsmo77804 = smo68478.getStemDirection();
smo68478.setStemDirection(dirsmo77804);
smo68479.setStemDirection(dirsmo77804);
smo68480.setStemDirection(dirsmo77804);
smo68481.setStemDirection(dirsmo77804);
const smo77804 = new VF.Beam([smo68478,smo68479,smo68480,smo68481]);
const dirsmo77805 = smo68483.getStemDirection();
smo68483.setStemDirection(dirsmo77805);
smo68484.setStemDirection(dirsmo77805);
const smo77805 = new VF.Beam([smo68483,smo68484]);
const dirsmo77806 = smo68485.getStemDirection();
smo68485.setStemDirection(dirsmo77806);
smo68486.setStemDirection(dirsmo77806);
smo68487.setStemDirection(dirsmo77806);
smo68488.setStemDirection(dirsmo77806);
const smo77806 = new VF.Beam([smo68485,smo68486,smo68487,smo68488]);
 
// formatting measures in staff group smo67190
fmtsmo685063.format([smo68506v0,smo68506v1,smo73921v0,smo73921v1], 527);
const stavesmo68506 = new VF.Stave(90, 692, 585);
stavesmo68506.setAttribute('id', 'stavesmo68506');
stavesmo68506.setBegBarType(1);
stavesmo68506.addClef('treble');
stavesmo68506.setContext(context);
stavesmo68506.draw();
smo68506v0.draw(context, stavesmo68506);
smo68506v1.draw(context, stavesmo68506);
smo77803.setContext(context);
smo77803.draw();
smo77804.setContext(context);
smo77804.draw();
smo77805.setContext(context);
smo77805.draw();
smo77806.setContext(context);
smo77806.draw();
const stavesmo73921 = new VF.Stave(90, 766, 585);
stavesmo73921.setAttribute('id', 'stavesmo73921');
stavesmo73921.setBegBarType(1);
stavesmo73921.addClef('treble');
stavesmo73921.setContext(context);
stavesmo73921.draw();
smo73921v0.draw(context, stavesmo73921);
smo73921v1.draw(context, stavesmo73921);
const leftsmo67190stavesmo685061 = new VF.StaveConnector(stavesmo68506, stavesmo73921).setType(3);
leftsmo67190stavesmo685061.setContext(context).draw();
const fmtsmo685384 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo68538v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68538v0ar = [];
const smo68507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68507.setAttribute('id', 'smo68507');
smo68538v0ar.push(smo68507);
const smo68508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo68508.setAttribute('id', 'smo68508');
smo68538v0ar.push(smo68508);
const smo68509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo68509.setAttribute('id', 'smo68509');
smo68538v0ar.push(smo68509);
const smo68510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo68510.setAttribute('id', 'smo68510');
smo68538v0ar.push(smo68510);
const smo68511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo68511.setAttribute('id', 'smo68511');
smo68538v0ar.push(smo68511);
const smo68512 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo68512.setAttribute('id', 'smo68512');
smo68538v0ar.push(smo68512);
const smo68513 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo68513.setAttribute('id', 'smo68513');
smo68538v0ar.push(smo68513);
const smo68514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68514.setAttribute('id', 'smo68514');
smo68538v0ar.push(smo68514);
const smo68515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo68515.setAttribute('id', 'smo68515');
smo68538v0ar.push(smo68515);
const smo68516 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo68516.setAttribute('id', 'smo68516');
smo68538v0ar.push(smo68516);
const smo68517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo68517.setAttribute('id', 'smo68517');
smo68538v0ar.push(smo68517);
const smo68518 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo68518.setAttribute('id', 'smo68518');
smo68538v0ar.push(smo68518);
const smo68519 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo68519.setAttribute('id', 'smo68519');
smo68538v0ar.push(smo68519);
const smo68520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo68520.setAttribute('id', 'smo68520');
smo68538v0ar.push(smo68520);
smo68538v0.addTickables(smo68538v0ar)
fmtsmo685384.joinVoices([smo68538v0]);
const smo68538v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68538v1ar = [];
const smo68521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68521.setAttribute('id', 'smo68521');
smo68521.setStyle({ fillStyle: '#aaaaaa7f' });
smo68538v1ar.push(smo68521);
const smo68522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68522.setAttribute('id', 'smo68522');
smo68522.setStyle({ fillStyle: '#aaaaaa7f' });
smo68522.addModifier(new VF.Dot(), 0);
smo68522.addModifier(new VF.Dot(), 0);
smo68538v1ar.push(smo68522);
const smo68523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68523.setAttribute('id', 'smo68523');
smo68523.setStyle({ fillStyle: '#aaaaaa7f' });
smo68538v1ar.push(smo68523);
const smo68524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68524.setAttribute('id', 'smo68524');
smo68524.setStyle({ fillStyle: '#aaaaaa7f' });
smo68524.addModifier(new VF.Dot(), 0);
smo68524.addModifier(new VF.Dot(), 0);
smo68538v1ar.push(smo68524);
smo68538v1.addTickables(smo68538v1ar)
fmtsmo685384.joinVoices([smo68538v1]);
const fmtsmo739434 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo73943v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73943v0ar = [];
const smo73922 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo73922.setAttribute('id', 'smo73922');
smo73943v0ar.push(smo73922);
const smo73923 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo73923.setAttribute('id', 'smo73923');
smo73923.addModifier(new VF.Dot(), 0);
smo73943v0ar.push(smo73923);
const smo73924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo73924.setAttribute('id', 'smo73924');
smo73943v0ar.push(smo73924);
const smo73925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo73925.setAttribute('id', 'smo73925');
smo73943v0ar.push(smo73925);
const smo73926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo73926.setAttribute('id', 'smo73926');
smo73926.addModifier(new VF.Dot(), 0);
smo73943v0ar.push(smo73926);
const smo73927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo73927.setAttribute('id', 'smo73927');
smo73943v0ar.push(smo73927);
smo73943v0.addTickables(smo73943v0ar)
fmtsmo739434.joinVoices([smo73943v0]);
const smo73943v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73943v1ar = [];
const smo73928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo73928.setAttribute('id', 'smo73928');
smo73928.setStyle({ fillStyle: "#115511" });
smo73943v1ar.push(smo73928);
const smo73929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo73929.setAttribute('id', 'smo73929');
smo73929.setStyle({ fillStyle: "#115511" });
smo73943v1ar.push(smo73929);
smo73943v1.addTickables(smo73943v1ar)
fmtsmo739434.joinVoices([smo73943v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo77811 = smo68508.getStemDirection();
smo68508.setStemDirection(dirsmo77811);
smo68509.setStemDirection(dirsmo77811);
const smo77811 = new VF.Beam([smo68508,smo68509]);
const dirsmo77812 = smo68510.getStemDirection();
smo68510.setStemDirection(dirsmo77812);
smo68511.setStemDirection(dirsmo77812);
smo68512.setStemDirection(dirsmo77812);
smo68513.setStemDirection(dirsmo77812);
const smo77812 = new VF.Beam([smo68510,smo68511,smo68512,smo68513]);
const dirsmo77813 = smo68515.getStemDirection();
smo68515.setStemDirection(dirsmo77813);
smo68516.setStemDirection(dirsmo77813);
const smo77813 = new VF.Beam([smo68515,smo68516]);
const dirsmo77814 = smo68517.getStemDirection();
smo68517.setStemDirection(dirsmo77814);
smo68518.setStemDirection(dirsmo77814);
smo68519.setStemDirection(dirsmo77814);
smo68520.setStemDirection(dirsmo77814);
const smo77814 = new VF.Beam([smo68517,smo68518,smo68519,smo68520]);
 
// formatting measures in staff group smo67190
fmtsmo685384.format([smo68538v0,smo68538v1,smo73943v0,smo73943v1], 527);
const stavesmo68538 = new VF.Stave(675, 692, 541);
stavesmo68538.setAttribute('id', 'stavesmo68538');
stavesmo68538.setBegBarType(VF.Barline.type.NONE);
stavesmo68538.setContext(context);
stavesmo68538.draw();
smo68538v0.draw(context, stavesmo68538);
smo68538v1.draw(context, stavesmo68538);
smo77811.setContext(context);
smo77811.draw();
smo77812.setContext(context);
smo77812.draw();
smo77813.setContext(context);
smo77813.draw();
smo77814.setContext(context);
smo77814.draw();
const stavesmo73943 = new VF.Stave(675, 766, 541);
stavesmo73943.setAttribute('id', 'stavesmo73943');
stavesmo73943.setBegBarType(VF.Barline.type.NONE);
stavesmo73943.setContext(context);
stavesmo73943.draw();
smo73943v0.draw(context, stavesmo73943);
smo73943v1.draw(context, stavesmo73943);
const fmtsmo685705 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo68570v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68570v0ar = [];
const smo68539 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68539.setAttribute('id', 'smo68539');
smo68570v0ar.push(smo68539);
const smo68540 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo68540.setAttribute('id', 'smo68540');
const smo685400acc = new VF.Accidental('#');
smo68540.addModifier(smo685400acc, 0);
smo68570v0ar.push(smo68540);
const smo68541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo68541.setAttribute('id', 'smo68541');
smo68570v0ar.push(smo68541);
const smo68542 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo68542.setAttribute('id', 'smo68542');
smo68570v0ar.push(smo68542);
const smo68543 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo68543.setAttribute('id', 'smo68543');
smo68570v0ar.push(smo68543);
const smo68544 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo68544.setAttribute('id', 'smo68544');
smo68570v0ar.push(smo68544);
const smo68545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo68545.setAttribute('id', 'smo68545');
smo68570v0ar.push(smo68545);
const smo68546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68546.setAttribute('id', 'smo68546');
smo68570v0ar.push(smo68546);
const smo68547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo68547.setAttribute('id', 'smo68547');
smo68570v0ar.push(smo68547);
const smo68548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo68548.setAttribute('id', 'smo68548');
smo68570v0ar.push(smo68548);
const smo68549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo68549.setAttribute('id', 'smo68549');
smo68570v0ar.push(smo68549);
const smo68550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo68550.setAttribute('id', 'smo68550');
smo68570v0ar.push(smo68550);
const smo68551 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo68551.setAttribute('id', 'smo68551');
smo68570v0ar.push(smo68551);
const smo68552 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo68552.setAttribute('id', 'smo68552');
smo68570v0ar.push(smo68552);
smo68570v0.addTickables(smo68570v0ar)
fmtsmo685705.joinVoices([smo68570v0]);
const smo68570v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68570v1ar = [];
const smo68553 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68553.setAttribute('id', 'smo68553');
smo68553.setStyle({ fillStyle: '#aaaaaa7f' });
smo68570v1ar.push(smo68553);
const smo68554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68554.setAttribute('id', 'smo68554');
smo68554.setStyle({ fillStyle: '#aaaaaa7f' });
smo68554.addModifier(new VF.Dot(), 0);
smo68554.addModifier(new VF.Dot(), 0);
smo68570v1ar.push(smo68554);
const smo68555 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68555.setAttribute('id', 'smo68555');
smo68555.setStyle({ fillStyle: '#aaaaaa7f' });
smo68570v1ar.push(smo68555);
const smo68556 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68556.setAttribute('id', 'smo68556');
smo68556.setStyle({ fillStyle: '#aaaaaa7f' });
smo68556.addModifier(new VF.Dot(), 0);
smo68556.addModifier(new VF.Dot(), 0);
smo68570v1ar.push(smo68556);
smo68570v1.addTickables(smo68570v1ar)
fmtsmo685705.joinVoices([smo68570v1]);
const fmtsmo739655 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo73965v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73965v0ar = [];
const smo73944 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo73944.setAttribute('id', 'smo73944');
smo73965v0ar.push(smo73944);
const smo73945 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo73945.setAttribute('id', 'smo73945');
smo73945.addModifier(new VF.Dot(), 0);
smo73965v0ar.push(smo73945);
const smo73946 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo73946.setAttribute('id', 'smo73946');
smo73965v0ar.push(smo73946);
const smo73947 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo73947.setAttribute('id', 'smo73947');
smo73965v0ar.push(smo73947);
const smo73948 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo73948.setAttribute('id', 'smo73948');
smo73948.addModifier(new VF.Dot(), 0);
smo73965v0ar.push(smo73948);
const smo73949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo73949.setAttribute('id', 'smo73949');
smo73965v0ar.push(smo73949);
smo73965v0.addTickables(smo73965v0ar)
fmtsmo739655.joinVoices([smo73965v0]);
const smo73965v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73965v1ar = [];
const smo73950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo73950.setAttribute('id', 'smo73950');
smo73950.setStyle({ fillStyle: "#115511" });
smo73965v1ar.push(smo73950);
const smo73951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo73951.setAttribute('id', 'smo73951');
smo73951.setStyle({ fillStyle: "#115511" });
smo73965v1ar.push(smo73951);
smo73965v1.addTickables(smo73965v1ar)
fmtsmo739655.joinVoices([smo73965v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo77819 = smo68540.getStemDirection();
smo68540.setStemDirection(dirsmo77819);
smo68541.setStemDirection(dirsmo77819);
const smo77819 = new VF.Beam([smo68540,smo68541]);
const dirsmo77820 = smo68542.getStemDirection();
smo68542.setStemDirection(dirsmo77820);
smo68543.setStemDirection(dirsmo77820);
smo68544.setStemDirection(dirsmo77820);
smo68545.setStemDirection(dirsmo77820);
const smo77820 = new VF.Beam([smo68542,smo68543,smo68544,smo68545]);
const dirsmo77821 = smo68547.getStemDirection();
smo68547.setStemDirection(dirsmo77821);
smo68548.setStemDirection(dirsmo77821);
const smo77821 = new VF.Beam([smo68547,smo68548]);
const dirsmo77822 = smo68549.getStemDirection();
smo68549.setStemDirection(dirsmo77822);
smo68550.setStemDirection(dirsmo77822);
smo68551.setStemDirection(dirsmo77822);
smo68552.setStemDirection(dirsmo77822);
const smo77822 = new VF.Beam([smo68549,smo68550,smo68551,smo68552]);
 
// formatting measures in staff group smo67190
fmtsmo685705.format([smo68570v0,smo68570v1,smo73965v0,smo73965v1], 577);
const stavesmo68570 = new VF.Stave(1216, 692, 591);
stavesmo68570.setAttribute('id', 'stavesmo68570');
stavesmo68570.setBegBarType(VF.Barline.type.NONE);
stavesmo68570.setContext(context);
stavesmo68570.draw();
smo68570v0.draw(context, stavesmo68570);
smo68570v1.draw(context, stavesmo68570);
smo77819.setContext(context);
smo77819.draw();
smo77820.setContext(context);
smo77820.draw();
smo77821.setContext(context);
smo77821.draw();
smo77822.setContext(context);
smo77822.draw();
const stavesmo73965 = new VF.Stave(1216, 766, 591);
stavesmo73965.setAttribute('id', 'stavesmo73965');
stavesmo73965.setBegBarType(VF.Barline.type.NONE);
stavesmo73965.setContext(context);
stavesmo73965.draw();
smo73965v0.draw(context, stavesmo73965);
smo73965v1.draw(context, stavesmo73965);
const rightsmo67190stavesmo685701 = new VF.StaveConnector(stavesmo68570, stavesmo73965).setType(0);
rightsmo67190stavesmo685701.setContext(context).draw();
const fmtsmo686026 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo68602v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68602v0ar = [];
const smo68571 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68571.setAttribute('id', 'smo68571');
smo68602v0ar.push(smo68571);
const smo68572 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68572.setAttribute('id', 'smo68572');
smo68602v0ar.push(smo68572);
const smo68573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo68573.setAttribute('id', 'smo68573');
smo68602v0ar.push(smo68573);
const smo68574 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo68574.setAttribute('id', 'smo68574');
smo68602v0ar.push(smo68574);
const smo68575 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68575.setAttribute('id', 'smo68575');
smo68602v0ar.push(smo68575);
const smo68576 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo68576.setAttribute('id', 'smo68576');
smo68602v0ar.push(smo68576);
const smo68577 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo68577.setAttribute('id', 'smo68577');
smo68602v0ar.push(smo68577);
const smo68578 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68578.setAttribute('id', 'smo68578');
smo68602v0ar.push(smo68578);
const smo68579 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68579.setAttribute('id', 'smo68579');
smo68602v0ar.push(smo68579);
const smo68580 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo68580.setAttribute('id', 'smo68580');
smo68602v0ar.push(smo68580);
const smo68581 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo68581.setAttribute('id', 'smo68581');
smo68602v0ar.push(smo68581);
const smo68582 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68582.setAttribute('id', 'smo68582');
smo68602v0ar.push(smo68582);
const smo68583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo68583.setAttribute('id', 'smo68583');
smo68602v0ar.push(smo68583);
const smo68584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo68584.setAttribute('id', 'smo68584');
smo68602v0ar.push(smo68584);
smo68602v0.addTickables(smo68602v0ar)
fmtsmo686026.joinVoices([smo68602v0]);
const smo68602v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68602v1ar = [];
const smo68585 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68585.setAttribute('id', 'smo68585');
smo68585.setStyle({ fillStyle: '#aaaaaa7f' });
smo68602v1ar.push(smo68585);
const smo68586 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68586.setAttribute('id', 'smo68586');
smo68586.setStyle({ fillStyle: '#aaaaaa7f' });
smo68586.addModifier(new VF.Dot(), 0);
smo68586.addModifier(new VF.Dot(), 0);
smo68602v1ar.push(smo68586);
const smo68587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68587.setAttribute('id', 'smo68587');
smo68587.setStyle({ fillStyle: '#aaaaaa7f' });
smo68602v1ar.push(smo68587);
const smo68588 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68588.setAttribute('id', 'smo68588');
smo68588.setStyle({ fillStyle: '#aaaaaa7f' });
smo68588.addModifier(new VF.Dot(), 0);
smo68588.addModifier(new VF.Dot(), 0);
smo68602v1ar.push(smo68588);
smo68602v1.addTickables(smo68602v1ar)
fmtsmo686026.joinVoices([smo68602v1]);
const fmtsmo739876 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo73987v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73987v0ar = [];
const smo73966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo73966.setAttribute('id', 'smo73966');
smo73987v0ar.push(smo73966);
const smo73967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo73967.setAttribute('id', 'smo73967');
smo73967.addModifier(new VF.Dot(), 0);
smo73987v0ar.push(smo73967);
const smo73968 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo73968.setAttribute('id', 'smo73968');
smo73987v0ar.push(smo73968);
const smo73969 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo73969.setAttribute('id', 'smo73969');
smo73987v0ar.push(smo73969);
const smo73970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo73970.setAttribute('id', 'smo73970');
smo73970.addModifier(new VF.Dot(), 0);
smo73987v0ar.push(smo73970);
const smo73971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo73971.setAttribute('id', 'smo73971');
smo73987v0ar.push(smo73971);
smo73987v0.addTickables(smo73987v0ar)
fmtsmo739876.joinVoices([smo73987v0]);
const smo73987v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73987v1ar = [];
const smo73972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo73972.setAttribute('id', 'smo73972');
smo73972.setStyle({ fillStyle: "#115511" });
smo73987v1ar.push(smo73972);
const smo73973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo73973.setAttribute('id', 'smo73973');
smo73973.setStyle({ fillStyle: "#115511" });
smo73987v1ar.push(smo73973);
smo73987v1.addTickables(smo73987v1ar)
fmtsmo739876.joinVoices([smo73987v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo77835 = smo68572.getStemDirection();
smo68572.setStemDirection(dirsmo77835);
smo68573.setStemDirection(dirsmo77835);
const smo77835 = new VF.Beam([smo68572,smo68573]);
const dirsmo77836 = smo68574.getStemDirection();
smo68574.setStemDirection(dirsmo77836);
smo68575.setStemDirection(dirsmo77836);
smo68576.setStemDirection(dirsmo77836);
smo68577.setStemDirection(dirsmo77836);
const smo77836 = new VF.Beam([smo68574,smo68575,smo68576,smo68577]);
const dirsmo77837 = smo68579.getStemDirection();
smo68579.setStemDirection(dirsmo77837);
smo68580.setStemDirection(dirsmo77837);
const smo77837 = new VF.Beam([smo68579,smo68580]);
const dirsmo77838 = smo68581.getStemDirection();
smo68581.setStemDirection(dirsmo77838);
smo68582.setStemDirection(dirsmo77838);
smo68583.setStemDirection(dirsmo77838);
smo68584.setStemDirection(dirsmo77838);
const smo77838 = new VF.Beam([smo68581,smo68582,smo68583,smo68584]);
 
// formatting measures in staff group smo67190
fmtsmo686026.format([smo68602v0,smo68602v1,smo73987v0,smo73987v1], 544);
const stavesmo68602 = new VF.Stave(90, 955, 602);
stavesmo68602.setAttribute('id', 'stavesmo68602');
stavesmo68602.setBegBarType(1);
stavesmo68602.addClef('treble');
stavesmo68602.setContext(context);
stavesmo68602.draw();
smo68602v0.draw(context, stavesmo68602);
smo68602v1.draw(context, stavesmo68602);
smo77835.setContext(context);
smo77835.draw();
smo77836.setContext(context);
smo77836.draw();
smo77837.setContext(context);
smo77837.draw();
smo77838.setContext(context);
smo77838.draw();
const stavesmo73987 = new VF.Stave(90, 1032, 602);
stavesmo73987.setAttribute('id', 'stavesmo73987');
stavesmo73987.setBegBarType(1);
stavesmo73987.addClef('treble');
stavesmo73987.setContext(context);
stavesmo73987.draw();
smo73987v0.draw(context, stavesmo73987);
smo73987v1.draw(context, stavesmo73987);
const leftsmo67190stavesmo686021 = new VF.StaveConnector(stavesmo68602, stavesmo73987).setType(3);
leftsmo67190stavesmo686021.setContext(context).draw();
const fmtsmo686347 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo68634v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68634v0ar = [];
const smo68603 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68603.setAttribute('id', 'smo68603');
smo68634v0ar.push(smo68603);
const smo68604 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo68604.setAttribute('id', 'smo68604');
smo68634v0ar.push(smo68604);
const smo68605 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68605.setAttribute('id', 'smo68605');
smo68634v0ar.push(smo68605);
const smo68606 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo68606.setAttribute('id', 'smo68606');
smo68634v0ar.push(smo68606);
const smo68607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo68607.setAttribute('id', 'smo68607');
smo68634v0ar.push(smo68607);
const smo68608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68608.setAttribute('id', 'smo68608');
smo68634v0ar.push(smo68608);
const smo68609 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo68609.setAttribute('id', 'smo68609');
smo68634v0ar.push(smo68609);
const smo68610 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68610.setAttribute('id', 'smo68610');
smo68634v0ar.push(smo68610);
const smo68611 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo68611.setAttribute('id', 'smo68611');
smo68634v0ar.push(smo68611);
const smo68612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68612.setAttribute('id', 'smo68612');
smo68634v0ar.push(smo68612);
const smo68613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo68613.setAttribute('id', 'smo68613');
smo68634v0ar.push(smo68613);
const smo68614 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo68614.setAttribute('id', 'smo68614');
smo68634v0ar.push(smo68614);
const smo68615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68615.setAttribute('id', 'smo68615');
smo68634v0ar.push(smo68615);
const smo68616 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo68616.setAttribute('id', 'smo68616');
smo68634v0ar.push(smo68616);
smo68634v0.addTickables(smo68634v0ar)
fmtsmo686347.joinVoices([smo68634v0]);
const smo68634v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68634v1ar = [];
const smo68617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68617.setAttribute('id', 'smo68617');
smo68617.setStyle({ fillStyle: '#aaaaaa7f' });
smo68634v1ar.push(smo68617);
const smo68618 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68618.setAttribute('id', 'smo68618');
smo68618.setStyle({ fillStyle: '#aaaaaa7f' });
smo68618.addModifier(new VF.Dot(), 0);
smo68618.addModifier(new VF.Dot(), 0);
smo68634v1ar.push(smo68618);
const smo68619 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68619.setAttribute('id', 'smo68619');
smo68619.setStyle({ fillStyle: '#aaaaaa7f' });
smo68634v1ar.push(smo68619);
const smo68620 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68620.setAttribute('id', 'smo68620');
smo68620.setStyle({ fillStyle: '#aaaaaa7f' });
smo68620.addModifier(new VF.Dot(), 0);
smo68620.addModifier(new VF.Dot(), 0);
smo68634v1ar.push(smo68620);
smo68634v1.addTickables(smo68634v1ar)
fmtsmo686347.joinVoices([smo68634v1]);
const fmtsmo740097 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo74009v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74009v0ar = [];
const smo73988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo73988.setAttribute('id', 'smo73988');
smo74009v0ar.push(smo73988);
const smo73989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo73989.setAttribute('id', 'smo73989');
smo73989.addModifier(new VF.Dot(), 0);
smo74009v0ar.push(smo73989);
const smo73990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo73990.setAttribute('id', 'smo73990');
smo74009v0ar.push(smo73990);
const smo73991 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo73991.setAttribute('id', 'smo73991');
smo74009v0ar.push(smo73991);
const smo73992 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo73992.setAttribute('id', 'smo73992');
smo73992.addModifier(new VF.Dot(), 0);
smo74009v0ar.push(smo73992);
const smo73993 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo73993.setAttribute('id', 'smo73993');
smo74009v0ar.push(smo73993);
smo74009v0.addTickables(smo74009v0ar)
fmtsmo740097.joinVoices([smo74009v0]);
const smo74009v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74009v1ar = [];
const smo73994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo73994.setAttribute('id', 'smo73994');
smo73994.setStyle({ fillStyle: "#115511" });
smo74009v1ar.push(smo73994);
const smo73995 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo73995.setAttribute('id', 'smo73995');
smo73995.setStyle({ fillStyle: "#115511" });
smo74009v1ar.push(smo73995);
smo74009v1.addTickables(smo74009v1ar)
fmtsmo740097.joinVoices([smo74009v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo77843 = smo68604.getStemDirection();
smo68604.setStemDirection(dirsmo77843);
smo68605.setStemDirection(dirsmo77843);
const smo77843 = new VF.Beam([smo68604,smo68605]);
const dirsmo77844 = smo68606.getStemDirection();
smo68606.setStemDirection(dirsmo77844);
smo68607.setStemDirection(dirsmo77844);
smo68608.setStemDirection(dirsmo77844);
smo68609.setStemDirection(dirsmo77844);
const smo77844 = new VF.Beam([smo68606,smo68607,smo68608,smo68609]);
const dirsmo77845 = smo68611.getStemDirection();
smo68611.setStemDirection(dirsmo77845);
smo68612.setStemDirection(dirsmo77845);
const smo77845 = new VF.Beam([smo68611,smo68612]);
const dirsmo77846 = smo68613.getStemDirection();
smo68613.setStemDirection(dirsmo77846);
smo68614.setStemDirection(dirsmo77846);
smo68615.setStemDirection(dirsmo77846);
smo68616.setStemDirection(dirsmo77846);
const smo77846 = new VF.Beam([smo68613,smo68614,smo68615,smo68616]);
 
// formatting measures in staff group smo67190
fmtsmo686347.format([smo68634v0,smo68634v1,smo74009v0,smo74009v1], 544);
const stavesmo68634 = new VF.Stave(692, 955, 558);
stavesmo68634.setAttribute('id', 'stavesmo68634');
stavesmo68634.setBegBarType(VF.Barline.type.NONE);
stavesmo68634.setContext(context);
stavesmo68634.draw();
smo68634v0.draw(context, stavesmo68634);
smo68634v1.draw(context, stavesmo68634);
smo77843.setContext(context);
smo77843.draw();
smo77844.setContext(context);
smo77844.draw();
smo77845.setContext(context);
smo77845.draw();
smo77846.setContext(context);
smo77846.draw();
const stavesmo74009 = new VF.Stave(692, 1032, 558);
stavesmo74009.setAttribute('id', 'stavesmo74009');
stavesmo74009.setBegBarType(VF.Barline.type.NONE);
stavesmo74009.setContext(context);
stavesmo74009.draw();
smo74009v0.draw(context, stavesmo74009);
smo74009v1.draw(context, stavesmo74009);
const fmtsmo686668 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo68666v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68666v0ar = [];
const smo68635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68635.setAttribute('id', 'smo68635');
smo68666v0ar.push(smo68635);
const smo68636 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo68636.setAttribute('id', 'smo68636');
smo68666v0ar.push(smo68636);
const smo68637 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68637.setAttribute('id', 'smo68637');
smo68666v0ar.push(smo68637);
const smo68638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo68638.setAttribute('id', 'smo68638');
smo68666v0ar.push(smo68638);
const smo68639 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo68639.setAttribute('id', 'smo68639');
smo68666v0ar.push(smo68639);
const smo68640 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68640.setAttribute('id', 'smo68640');
smo68666v0ar.push(smo68640);
const smo68641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo68641.setAttribute('id', 'smo68641');
smo68666v0ar.push(smo68641);
const smo68642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68642.setAttribute('id', 'smo68642');
smo68666v0ar.push(smo68642);
const smo68643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo68643.setAttribute('id', 'smo68643');
smo68666v0ar.push(smo68643);
const smo68644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68644.setAttribute('id', 'smo68644');
smo68666v0ar.push(smo68644);
const smo68645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo68645.setAttribute('id', 'smo68645');
smo68666v0ar.push(smo68645);
const smo68646 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo68646.setAttribute('id', 'smo68646');
smo68666v0ar.push(smo68646);
const smo68647 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68647.setAttribute('id', 'smo68647');
smo68666v0ar.push(smo68647);
const smo68648 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo68648.setAttribute('id', 'smo68648');
smo68666v0ar.push(smo68648);
smo68666v0.addTickables(smo68666v0ar)
fmtsmo686668.joinVoices([smo68666v0]);
const smo68666v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68666v1ar = [];
const smo68649 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68649.setAttribute('id', 'smo68649');
smo68649.setStyle({ fillStyle: '#aaaaaa7f' });
smo68666v1ar.push(smo68649);
const smo68650 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68650.setAttribute('id', 'smo68650');
smo68650.setStyle({ fillStyle: '#aaaaaa7f' });
smo68650.addModifier(new VF.Dot(), 0);
smo68650.addModifier(new VF.Dot(), 0);
smo68666v1ar.push(smo68650);
const smo68651 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68651.setAttribute('id', 'smo68651');
smo68651.setStyle({ fillStyle: '#aaaaaa7f' });
smo68666v1ar.push(smo68651);
const smo68652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68652.setAttribute('id', 'smo68652');
smo68652.setStyle({ fillStyle: '#aaaaaa7f' });
smo68652.addModifier(new VF.Dot(), 0);
smo68652.addModifier(new VF.Dot(), 0);
smo68666v1ar.push(smo68652);
smo68666v1.addTickables(smo68666v1ar)
fmtsmo686668.joinVoices([smo68666v1]);
const fmtsmo740318 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo74031v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74031v0ar = [];
const smo74010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo74010.setAttribute('id', 'smo74010');
smo74031v0ar.push(smo74010);
const smo74011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo74011.setAttribute('id', 'smo74011');
smo74011.addModifier(new VF.Dot(), 0);
smo74031v0ar.push(smo74011);
const smo74012 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo74012.setAttribute('id', 'smo74012');
smo74031v0ar.push(smo74012);
const smo74013 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo74013.setAttribute('id', 'smo74013');
smo74031v0ar.push(smo74013);
const smo74014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo74014.setAttribute('id', 'smo74014');
smo74014.addModifier(new VF.Dot(), 0);
smo74031v0ar.push(smo74014);
const smo74015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo74015.setAttribute('id', 'smo74015');
smo74031v0ar.push(smo74015);
smo74031v0.addTickables(smo74031v0ar)
fmtsmo740318.joinVoices([smo74031v0]);
const smo74031v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74031v1ar = [];
const smo74016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74016.setAttribute('id', 'smo74016');
smo74016.setStyle({ fillStyle: "#115511" });
smo74031v1ar.push(smo74016);
const smo74017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74017.setAttribute('id', 'smo74017');
smo74017.setStyle({ fillStyle: "#115511" });
smo74031v1ar.push(smo74017);
smo74031v1.addTickables(smo74031v1ar)
fmtsmo740318.joinVoices([smo74031v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo77851 = smo68636.getStemDirection();
smo68636.setStemDirection(dirsmo77851);
smo68637.setStemDirection(dirsmo77851);
const smo77851 = new VF.Beam([smo68636,smo68637]);
const dirsmo77852 = smo68638.getStemDirection();
smo68638.setStemDirection(dirsmo77852);
smo68639.setStemDirection(dirsmo77852);
smo68640.setStemDirection(dirsmo77852);
smo68641.setStemDirection(dirsmo77852);
const smo77852 = new VF.Beam([smo68638,smo68639,smo68640,smo68641]);
const dirsmo77853 = smo68643.getStemDirection();
smo68643.setStemDirection(dirsmo77853);
smo68644.setStemDirection(dirsmo77853);
const smo77853 = new VF.Beam([smo68643,smo68644]);
const dirsmo77854 = smo68645.getStemDirection();
smo68645.setStemDirection(dirsmo77854);
smo68646.setStemDirection(dirsmo77854);
smo68647.setStemDirection(dirsmo77854);
smo68648.setStemDirection(dirsmo77854);
const smo77854 = new VF.Beam([smo68645,smo68646,smo68647,smo68648]);
 
// formatting measures in staff group smo67190
fmtsmo686668.format([smo68666v0,smo68666v1,smo74031v0,smo74031v1], 544);
const stavesmo68666 = new VF.Stave(1250, 955, 558);
stavesmo68666.setAttribute('id', 'stavesmo68666');
stavesmo68666.setBegBarType(VF.Barline.type.NONE);
stavesmo68666.setContext(context);
stavesmo68666.draw();
smo68666v0.draw(context, stavesmo68666);
smo68666v1.draw(context, stavesmo68666);
smo77851.setContext(context);
smo77851.draw();
smo77852.setContext(context);
smo77852.draw();
smo77853.setContext(context);
smo77853.draw();
smo77854.setContext(context);
smo77854.draw();
const stavesmo74031 = new VF.Stave(1250, 1032, 558);
stavesmo74031.setAttribute('id', 'stavesmo74031');
stavesmo74031.setBegBarType(VF.Barline.type.NONE);
stavesmo74031.setContext(context);
stavesmo74031.draw();
smo74031v0.draw(context, stavesmo74031);
smo74031v1.draw(context, stavesmo74031);
const rightsmo67190stavesmo686661 = new VF.StaveConnector(stavesmo68666, stavesmo74031).setType(0);
rightsmo67190stavesmo686661.setContext(context).draw();
const fmtsmo686989 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo68698v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68698v0ar = [];
const smo68667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68667.setAttribute('id', 'smo68667');
smo68698v0ar.push(smo68667);
const smo68668 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo68668.setAttribute('id', 'smo68668');
smo68698v0ar.push(smo68668);
const smo68669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo68669.setAttribute('id', 'smo68669');
const smo686690acc = new VF.Accidental('#');
smo68669.addModifier(smo686690acc, 0);
smo68698v0ar.push(smo68669);
const smo68670 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo68670.setAttribute('id', 'smo68670');
smo68698v0ar.push(smo68670);
const smo68671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo68671.setAttribute('id', 'smo68671');
smo68698v0ar.push(smo68671);
const smo68672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo68672.setAttribute('id', 'smo68672');
smo68698v0ar.push(smo68672);
const smo68673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo68673.setAttribute('id', 'smo68673');
smo68698v0ar.push(smo68673);
const smo68674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68674.setAttribute('id', 'smo68674');
smo68698v0ar.push(smo68674);
const smo68675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo68675.setAttribute('id', 'smo68675');
smo68698v0ar.push(smo68675);
const smo68676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo68676.setAttribute('id', 'smo68676');
smo68698v0ar.push(smo68676);
const smo68677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo68677.setAttribute('id', 'smo68677');
smo68698v0ar.push(smo68677);
const smo68678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo68678.setAttribute('id', 'smo68678');
smo68698v0ar.push(smo68678);
const smo68679 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo68679.setAttribute('id', 'smo68679');
smo68698v0ar.push(smo68679);
const smo68680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo68680.setAttribute('id', 'smo68680');
smo68698v0ar.push(smo68680);
smo68698v0.addTickables(smo68698v0ar)
fmtsmo686989.joinVoices([smo68698v0]);
const smo68698v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68698v1ar = [];
const smo68681 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68681.setAttribute('id', 'smo68681');
smo68681.setStyle({ fillStyle: '#aaaaaa7f' });
smo68698v1ar.push(smo68681);
const smo68682 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68682.setAttribute('id', 'smo68682');
smo68682.setStyle({ fillStyle: '#aaaaaa7f' });
smo68682.addModifier(new VF.Dot(), 0);
smo68682.addModifier(new VF.Dot(), 0);
smo68698v1ar.push(smo68682);
const smo68683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68683.setAttribute('id', 'smo68683');
smo68683.setStyle({ fillStyle: '#aaaaaa7f' });
smo68698v1ar.push(smo68683);
const smo68684 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68684.setAttribute('id', 'smo68684');
smo68684.setStyle({ fillStyle: '#aaaaaa7f' });
smo68684.addModifier(new VF.Dot(), 0);
smo68684.addModifier(new VF.Dot(), 0);
smo68698v1ar.push(smo68684);
smo68698v1.addTickables(smo68698v1ar)
fmtsmo686989.joinVoices([smo68698v1]);
const fmtsmo740539 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo74053v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74053v0ar = [];
const smo74032 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["en/6/r"]}'))
smo74032.setAttribute('id', 'smo74032');
smo74053v0ar.push(smo74032);
const smo74033 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74033.setAttribute('id', 'smo74033');
smo74033.addModifier(new VF.Dot(), 0);
smo74053v0ar.push(smo74033);
const smo74034 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74034.setAttribute('id', 'smo74034');
smo74053v0ar.push(smo74034);
const smo74035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo74035.setAttribute('id', 'smo74035');
smo74053v0ar.push(smo74035);
const smo74036 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74036.setAttribute('id', 'smo74036');
smo74036.addModifier(new VF.Dot(), 0);
smo74053v0ar.push(smo74036);
const smo74037 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74037.setAttribute('id', 'smo74037');
smo74053v0ar.push(smo74037);
smo74053v0.addTickables(smo74053v0ar)
fmtsmo740539.joinVoices([smo74053v0]);
const smo74053v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74053v1ar = [];
const smo74038 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74038.setAttribute('id', 'smo74038');
smo74038.setStyle({ fillStyle: "#115511" });
smo74053v1ar.push(smo74038);
const smo74039 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74039.setAttribute('id', 'smo74039');
smo74039.setStyle({ fillStyle: "#115511" });
smo74053v1ar.push(smo74039);
smo74053v1.addTickables(smo74053v1ar)
fmtsmo740539.joinVoices([smo74053v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo77867 = smo68668.getStemDirection();
smo68668.setStemDirection(dirsmo77867);
smo68669.setStemDirection(dirsmo77867);
const smo77867 = new VF.Beam([smo68668,smo68669]);
const dirsmo77868 = smo68670.getStemDirection();
smo68670.setStemDirection(dirsmo77868);
smo68671.setStemDirection(dirsmo77868);
smo68672.setStemDirection(dirsmo77868);
smo68673.setStemDirection(dirsmo77868);
const smo77868 = new VF.Beam([smo68670,smo68671,smo68672,smo68673]);
const dirsmo77869 = smo68675.getStemDirection();
smo68675.setStemDirection(dirsmo77869);
smo68676.setStemDirection(dirsmo77869);
const smo77869 = new VF.Beam([smo68675,smo68676]);
const dirsmo77870 = smo68677.getStemDirection();
smo68677.setStemDirection(dirsmo77870);
smo68678.setStemDirection(dirsmo77870);
smo68679.setStemDirection(dirsmo77870);
smo68680.setStemDirection(dirsmo77870);
const smo77870 = new VF.Beam([smo68677,smo68678,smo68679,smo68680]);
 
// formatting measures in staff group smo67190
fmtsmo686989.format([smo68698v0,smo68698v1,smo74053v0,smo74053v1], 561);
const stavesmo68698 = new VF.Stave(90, 1191, 619);
stavesmo68698.setAttribute('id', 'stavesmo68698');
stavesmo68698.setBegBarType(1);
stavesmo68698.addClef('treble');
stavesmo68698.setContext(context);
stavesmo68698.draw();
smo68698v0.draw(context, stavesmo68698);
smo68698v1.draw(context, stavesmo68698);
smo77867.setContext(context);
smo77867.draw();
smo77868.setContext(context);
smo77868.draw();
smo77869.setContext(context);
smo77869.draw();
smo77870.setContext(context);
smo77870.draw();
const stavesmo74053 = new VF.Stave(90, 1370, 619);
stavesmo74053.setAttribute('id', 'stavesmo74053');
stavesmo74053.setBegBarType(1);
stavesmo74053.addClef('bass');
stavesmo74053.setContext(context);
stavesmo74053.draw();
smo74053v0.draw(context, stavesmo74053);
smo74053v1.draw(context, stavesmo74053);
const leftsmo67190stavesmo686981 = new VF.StaveConnector(stavesmo68698, stavesmo74053).setType(3);
leftsmo67190stavesmo686981.setContext(context).draw();
const fmtsmo6873010 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo68730v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68730v0ar = [];
const smo68699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68699.setAttribute('id', 'smo68699');
smo68730v0ar.push(smo68699);
const smo68700 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo68700.setAttribute('id', 'smo68700');
smo68730v0ar.push(smo68700);
const smo68701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68701.setAttribute('id', 'smo68701');
smo68730v0ar.push(smo68701);
const smo68702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo68702.setAttribute('id', 'smo68702');
smo68730v0ar.push(smo68702);
const smo68703 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo68703.setAttribute('id', 'smo68703');
smo68730v0ar.push(smo68703);
const smo68704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68704.setAttribute('id', 'smo68704');
smo68730v0ar.push(smo68704);
const smo68705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo68705.setAttribute('id', 'smo68705');
smo68730v0ar.push(smo68705);
const smo68706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68706.setAttribute('id', 'smo68706');
smo68730v0ar.push(smo68706);
const smo68707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo68707.setAttribute('id', 'smo68707');
smo68730v0ar.push(smo68707);
const smo68708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68708.setAttribute('id', 'smo68708');
smo68730v0ar.push(smo68708);
const smo68709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo68709.setAttribute('id', 'smo68709');
smo68730v0ar.push(smo68709);
const smo68710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo68710.setAttribute('id', 'smo68710');
smo68730v0ar.push(smo68710);
const smo68711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68711.setAttribute('id', 'smo68711');
smo68730v0ar.push(smo68711);
const smo68712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo68712.setAttribute('id', 'smo68712');
smo68730v0ar.push(smo68712);
smo68730v0.addTickables(smo68730v0ar)
fmtsmo6873010.joinVoices([smo68730v0]);
const smo68730v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68730v1ar = [];
const smo68713 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68713.setAttribute('id', 'smo68713');
smo68713.setStyle({ fillStyle: '#aaaaaa7f' });
smo68730v1ar.push(smo68713);
const smo68714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/3/r"]}'))
smo68714.setAttribute('id', 'smo68714');
smo68714.setStyle({ fillStyle: '#aaaaaa7f' });
smo68714.addModifier(new VF.Dot(), 0);
smo68714.addModifier(new VF.Dot(), 0);
smo68730v1ar.push(smo68714);
const smo68715 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68715.setAttribute('id', 'smo68715');
smo68715.setStyle({ fillStyle: '#aaaaaa7f' });
smo68730v1ar.push(smo68715);
const smo68716 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68716.setAttribute('id', 'smo68716');
smo68716.setStyle({ fillStyle: '#aaaaaa7f' });
smo68716.addModifier(new VF.Dot(), 0);
smo68716.addModifier(new VF.Dot(), 0);
smo68730v1ar.push(smo68716);
smo68730v1.addTickables(smo68730v1ar)
fmtsmo6873010.joinVoices([smo68730v1]);
const fmtsmo7407510 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo74075v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74075v0ar = [];
const smo74054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo74054.setAttribute('id', 'smo74054');
smo74075v0ar.push(smo74054);
const smo74055 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo74055.setAttribute('id', 'smo74055');
smo74055.addModifier(new VF.Dot(), 0);
smo74075v0ar.push(smo74055);
const smo74056 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo74056.setAttribute('id', 'smo74056');
smo74075v0ar.push(smo74056);
const smo74057 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo74057.setAttribute('id', 'smo74057');
smo74075v0ar.push(smo74057);
const smo74058 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo74058.setAttribute('id', 'smo74058');
smo74058.addModifier(new VF.Dot(), 0);
smo74075v0ar.push(smo74058);
const smo74059 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo74059.setAttribute('id', 'smo74059');
smo74075v0ar.push(smo74059);
smo74075v0.addTickables(smo74075v0ar)
fmtsmo7407510.joinVoices([smo74075v0]);
const smo74075v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74075v1ar = [];
const smo74060 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo74060.setAttribute('id', 'smo74060');
smo74060.setStyle({ fillStyle: "#115511" });
smo74075v1ar.push(smo74060);
const smo74061 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo74061.setAttribute('id', 'smo74061');
smo74061.setStyle({ fillStyle: "#115511" });
smo74075v1ar.push(smo74061);
smo74075v1.addTickables(smo74075v1ar)
fmtsmo7407510.joinVoices([smo74075v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo77875 = smo68700.getStemDirection();
smo68700.setStemDirection(dirsmo77875);
smo68701.setStemDirection(dirsmo77875);
const smo77875 = new VF.Beam([smo68700,smo68701]);
const dirsmo77876 = smo68702.getStemDirection();
smo68702.setStemDirection(dirsmo77876);
smo68703.setStemDirection(dirsmo77876);
smo68704.setStemDirection(dirsmo77876);
smo68705.setStemDirection(dirsmo77876);
const smo77876 = new VF.Beam([smo68702,smo68703,smo68704,smo68705]);
const dirsmo77877 = smo68707.getStemDirection();
smo68707.setStemDirection(dirsmo77877);
smo68708.setStemDirection(dirsmo77877);
const smo77877 = new VF.Beam([smo68707,smo68708]);
const dirsmo77878 = smo68709.getStemDirection();
smo68709.setStemDirection(dirsmo77878);
smo68710.setStemDirection(dirsmo77878);
smo68711.setStemDirection(dirsmo77878);
smo68712.setStemDirection(dirsmo77878);
const smo77878 = new VF.Beam([smo68709,smo68710,smo68711,smo68712]);
 
// formatting measures in staff group smo67190
fmtsmo6873010.format([smo68730v0,smo68730v1,smo74075v0,smo74075v1], 510);
const stavesmo68730 = new VF.Stave(709, 1191, 524);
stavesmo68730.setAttribute('id', 'stavesmo68730');
stavesmo68730.setBegBarType(VF.Barline.type.NONE);
stavesmo68730.setContext(context);
stavesmo68730.draw();
smo68730v0.draw(context, stavesmo68730);
smo68730v1.draw(context, stavesmo68730);
smo77875.setContext(context);
smo77875.draw();
smo77876.setContext(context);
smo77876.draw();
smo77877.setContext(context);
smo77877.draw();
smo77878.setContext(context);
smo77878.draw();
const stavesmo74075 = new VF.Stave(709, 1370, 524);
stavesmo74075.setAttribute('id', 'stavesmo74075');
stavesmo74075.setBegBarType(VF.Barline.type.NONE);
stavesmo74075.setContext(context);
stavesmo74075.draw();
smo74075v0.draw(context, stavesmo74075);
smo74075v1.draw(context, stavesmo74075);
const fmtsmo6876211 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo68762v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68762v0ar = [];
const smo68731 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68731.setAttribute('id', 'smo68731');
smo68762v0ar.push(smo68731);
const smo68732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo68732.setAttribute('id', 'smo68732');
smo68762v0ar.push(smo68732);
const smo68733 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68733.setAttribute('id', 'smo68733');
smo68762v0ar.push(smo68733);
const smo68734 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo68734.setAttribute('id', 'smo68734');
const smo687340acc = new VF.Accidental('#');
smo68734.addModifier(smo687340acc, 0);
smo68762v0ar.push(smo68734);
const smo68735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo68735.setAttribute('id', 'smo68735');
smo68762v0ar.push(smo68735);
const smo68736 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68736.setAttribute('id', 'smo68736');
smo68762v0ar.push(smo68736);
const smo68737 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo68737.setAttribute('id', 'smo68737');
smo68762v0ar.push(smo68737);
const smo68738 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68738.setAttribute('id', 'smo68738');
smo68762v0ar.push(smo68738);
const smo68739 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo68739.setAttribute('id', 'smo68739');
smo68762v0ar.push(smo68739);
const smo68740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68740.setAttribute('id', 'smo68740');
smo68762v0ar.push(smo68740);
const smo68741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo68741.setAttribute('id', 'smo68741');
smo68762v0ar.push(smo68741);
const smo68742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo68742.setAttribute('id', 'smo68742');
smo68762v0ar.push(smo68742);
const smo68743 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68743.setAttribute('id', 'smo68743');
smo68762v0ar.push(smo68743);
const smo68744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo68744.setAttribute('id', 'smo68744');
smo68762v0ar.push(smo68744);
smo68762v0.addTickables(smo68762v0ar)
fmtsmo6876211.joinVoices([smo68762v0]);
const smo68762v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68762v1ar = [];
const smo68745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68745.setAttribute('id', 'smo68745');
smo68745.setStyle({ fillStyle: '#aaaaaa7f' });
smo68762v1ar.push(smo68745);
const smo68746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68746.setAttribute('id', 'smo68746');
smo68746.setStyle({ fillStyle: '#aaaaaa7f' });
smo68746.addModifier(new VF.Dot(), 0);
smo68746.addModifier(new VF.Dot(), 0);
smo68762v1ar.push(smo68746);
const smo68747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68747.setAttribute('id', 'smo68747');
smo68747.setStyle({ fillStyle: '#aaaaaa7f' });
smo68762v1ar.push(smo68747);
const smo68748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68748.setAttribute('id', 'smo68748');
smo68748.setStyle({ fillStyle: '#aaaaaa7f' });
smo68748.addModifier(new VF.Dot(), 0);
smo68748.addModifier(new VF.Dot(), 0);
smo68762v1ar.push(smo68748);
smo68762v1.addTickables(smo68762v1ar)
fmtsmo6876211.joinVoices([smo68762v1]);
const fmtsmo7409711 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo74097v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74097v0ar = [];
const smo74076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo74076.setAttribute('id', 'smo74076');
smo74097v0ar.push(smo74076);
const smo74077 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/3/n"]}'))
smo74077.setAttribute('id', 'smo74077');
const smo740770acc = new VF.Accidental('#');
smo74077.addModifier(smo740770acc, 0);
smo74077.addModifier(new VF.Dot(), 0);
smo74097v0ar.push(smo74077);
const smo74078 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/3/n"]}'))
smo74078.setAttribute('id', 'smo74078');
smo74097v0ar.push(smo74078);
const smo74079 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo74079.setAttribute('id', 'smo74079');
smo74097v0ar.push(smo74079);
const smo74080 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/3/n"]}'))
smo74080.setAttribute('id', 'smo74080');
smo74080.addModifier(new VF.Dot(), 0);
smo74097v0ar.push(smo74080);
const smo74081 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/3/n"]}'))
smo74081.setAttribute('id', 'smo74081');
smo74097v0ar.push(smo74081);
smo74097v0.addTickables(smo74097v0ar)
fmtsmo7409711.joinVoices([smo74097v0]);
const smo74097v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74097v1ar = [];
const smo74082 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo74082.setAttribute('id', 'smo74082');
smo74082.setStyle({ fillStyle: "#115511" });
smo74097v1ar.push(smo74082);
const smo74083 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo74083.setAttribute('id', 'smo74083');
smo74083.setStyle({ fillStyle: "#115511" });
smo74097v1ar.push(smo74083);
smo74097v1.addTickables(smo74097v1ar)
fmtsmo7409711.joinVoices([smo74097v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo77883 = smo68732.getStemDirection();
smo68732.setStemDirection(dirsmo77883);
smo68733.setStemDirection(dirsmo77883);
const smo77883 = new VF.Beam([smo68732,smo68733]);
const dirsmo77884 = smo68734.getStemDirection();
smo68734.setStemDirection(dirsmo77884);
smo68735.setStemDirection(dirsmo77884);
smo68736.setStemDirection(dirsmo77884);
smo68737.setStemDirection(dirsmo77884);
const smo77884 = new VF.Beam([smo68734,smo68735,smo68736,smo68737]);
const dirsmo77885 = smo68739.getStemDirection();
smo68739.setStemDirection(dirsmo77885);
smo68740.setStemDirection(dirsmo77885);
const smo77885 = new VF.Beam([smo68739,smo68740]);
const dirsmo77886 = smo68741.getStemDirection();
smo68741.setStemDirection(dirsmo77886);
smo68742.setStemDirection(dirsmo77886);
smo68743.setStemDirection(dirsmo77886);
smo68744.setStemDirection(dirsmo77886);
const smo77886 = new VF.Beam([smo68741,smo68742,smo68743,smo68744]);
 
// formatting measures in staff group smo67190
fmtsmo6876211.format([smo68762v0,smo68762v1,smo74097v0,smo74097v1], 560);
const stavesmo68762 = new VF.Stave(1233, 1191, 574);
stavesmo68762.setAttribute('id', 'stavesmo68762');
stavesmo68762.setBegBarType(VF.Barline.type.NONE);
stavesmo68762.setContext(context);
stavesmo68762.draw();
smo68762v0.draw(context, stavesmo68762);
smo68762v1.draw(context, stavesmo68762);
smo77883.setContext(context);
smo77883.draw();
smo77884.setContext(context);
smo77884.draw();
smo77885.setContext(context);
smo77885.draw();
smo77886.setContext(context);
smo77886.draw();
const stavesmo74097 = new VF.Stave(1233, 1370, 574);
stavesmo74097.setAttribute('id', 'stavesmo74097');
stavesmo74097.setBegBarType(VF.Barline.type.NONE);
stavesmo74097.setContext(context);
stavesmo74097.draw();
smo74097v0.draw(context, stavesmo74097);
smo74097v1.draw(context, stavesmo74097);
const rightsmo67190stavesmo687621 = new VF.StaveConnector(stavesmo68762, stavesmo74097).setType(0);
rightsmo67190stavesmo687621.setContext(context).draw();
const fmtsmo6879412 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo68794v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68794v0ar = [];
const smo68763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68763.setAttribute('id', 'smo68763');
smo68794v0ar.push(smo68763);
const smo68764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo68764.setAttribute('id', 'smo68764');
smo68794v0ar.push(smo68764);
const smo68765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo68765.setAttribute('id', 'smo68765');
smo68794v0ar.push(smo68765);
const smo68766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo68766.setAttribute('id', 'smo68766');
smo68794v0ar.push(smo68766);
const smo68767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo68767.setAttribute('id', 'smo68767');
smo68794v0ar.push(smo68767);
const smo68768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo68768.setAttribute('id', 'smo68768');
smo68794v0ar.push(smo68768);
const smo68769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo68769.setAttribute('id', 'smo68769');
smo68794v0ar.push(smo68769);
const smo68770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68770.setAttribute('id', 'smo68770');
smo68794v0ar.push(smo68770);
const smo68771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo68771.setAttribute('id', 'smo68771');
smo68794v0ar.push(smo68771);
const smo68772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo68772.setAttribute('id', 'smo68772');
smo68794v0ar.push(smo68772);
const smo68773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo68773.setAttribute('id', 'smo68773');
smo68794v0ar.push(smo68773);
const smo68774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo68774.setAttribute('id', 'smo68774');
smo68794v0ar.push(smo68774);
const smo68775 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo68775.setAttribute('id', 'smo68775');
smo68794v0ar.push(smo68775);
const smo68776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo68776.setAttribute('id', 'smo68776');
smo68794v0ar.push(smo68776);
smo68794v0.addTickables(smo68794v0ar)
fmtsmo6879412.joinVoices([smo68794v0]);
const smo68794v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68794v1ar = [];
const smo68777 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68777.setAttribute('id', 'smo68777');
smo68777.setStyle({ fillStyle: '#aaaaaa7f' });
smo68794v1ar.push(smo68777);
const smo68778 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68778.setAttribute('id', 'smo68778');
smo68778.setStyle({ fillStyle: '#aaaaaa7f' });
smo68778.addModifier(new VF.Dot(), 0);
smo68778.addModifier(new VF.Dot(), 0);
smo68794v1ar.push(smo68778);
const smo68779 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68779.setAttribute('id', 'smo68779');
smo68779.setStyle({ fillStyle: '#aaaaaa7f' });
smo68794v1ar.push(smo68779);
const smo68780 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68780.setAttribute('id', 'smo68780');
smo68780.setStyle({ fillStyle: '#aaaaaa7f' });
smo68780.addModifier(new VF.Dot(), 0);
smo68780.addModifier(new VF.Dot(), 0);
smo68794v1ar.push(smo68780);
smo68794v1.addTickables(smo68794v1ar)
fmtsmo6879412.joinVoices([smo68794v1]);
const fmtsmo7411912 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo74119v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74119v0ar = [];
const smo74098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo74098.setAttribute('id', 'smo74098');
smo74119v0ar.push(smo74098);
const smo74099 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74099.setAttribute('id', 'smo74099');
smo74099.addModifier(new VF.Dot(), 0);
smo74119v0ar.push(smo74099);
const smo74100 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74100.setAttribute('id', 'smo74100');
smo74119v0ar.push(smo74100);
const smo74101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo74101.setAttribute('id', 'smo74101');
smo74119v0ar.push(smo74101);
const smo74102 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74102.setAttribute('id', 'smo74102');
smo74102.addModifier(new VF.Dot(), 0);
smo74119v0ar.push(smo74102);
const smo74103 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74103.setAttribute('id', 'smo74103');
smo74119v0ar.push(smo74103);
smo74119v0.addTickables(smo74119v0ar)
fmtsmo7411912.joinVoices([smo74119v0]);
const smo74119v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74119v1ar = [];
const smo74104 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo74104.setAttribute('id', 'smo74104');
smo74104.setStyle({ fillStyle: "#115511" });
smo74119v1ar.push(smo74104);
const smo74105 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo74105.setAttribute('id', 'smo74105');
smo74105.setStyle({ fillStyle: "#115511" });
smo74119v1ar.push(smo74105);
smo74119v1.addTickables(smo74119v1ar)
fmtsmo7411912.joinVoices([smo74119v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo77899 = smo68764.getStemDirection();
smo68764.setStemDirection(dirsmo77899);
smo68765.setStemDirection(dirsmo77899);
const smo77899 = new VF.Beam([smo68764,smo68765]);
const dirsmo77900 = smo68766.getStemDirection();
smo68766.setStemDirection(dirsmo77900);
smo68767.setStemDirection(dirsmo77900);
smo68768.setStemDirection(dirsmo77900);
smo68769.setStemDirection(dirsmo77900);
const smo77900 = new VF.Beam([smo68766,smo68767,smo68768,smo68769]);
const dirsmo77901 = smo68771.getStemDirection();
smo68771.setStemDirection(dirsmo77901);
smo68772.setStemDirection(dirsmo77901);
const smo77901 = new VF.Beam([smo68771,smo68772]);
const dirsmo77902 = smo68773.getStemDirection();
smo68773.setStemDirection(dirsmo77902);
smo68774.setStemDirection(dirsmo77902);
smo68775.setStemDirection(dirsmo77902);
smo68776.setStemDirection(dirsmo77902);
const smo77902 = new VF.Beam([smo68773,smo68774,smo68775,smo68776]);
 
// formatting measures in staff group smo67190
fmtsmo6879412.format([smo68794v0,smo68794v1,smo74119v0,smo74119v1], 536);
const stavesmo68794 = new VF.Stave(90, 1494, 594);
stavesmo68794.setAttribute('id', 'stavesmo68794');
stavesmo68794.setBegBarType(1);
stavesmo68794.addClef('treble');
stavesmo68794.setContext(context);
stavesmo68794.draw();
smo68794v0.draw(context, stavesmo68794);
smo68794v1.draw(context, stavesmo68794);
smo77899.setContext(context);
smo77899.draw();
smo77900.setContext(context);
smo77900.draw();
smo77901.setContext(context);
smo77901.draw();
smo77902.setContext(context);
smo77902.draw();
const stavesmo74119 = new VF.Stave(90, 1668, 594);
stavesmo74119.setAttribute('id', 'stavesmo74119');
stavesmo74119.setBegBarType(1);
stavesmo74119.addClef('bass');
stavesmo74119.setContext(context);
stavesmo74119.draw();
smo74119v0.draw(context, stavesmo74119);
smo74119v1.draw(context, stavesmo74119);
const leftsmo67190stavesmo687941 = new VF.StaveConnector(stavesmo68794, stavesmo74119).setType(3);
leftsmo67190stavesmo687941.setContext(context).draw();
const fmtsmo6882613 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo68826v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68826v0ar = [];
const smo68795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68795.setAttribute('id', 'smo68795');
smo68826v0ar.push(smo68795);
const smo68796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo68796.setAttribute('id', 'smo68796');
smo68826v0ar.push(smo68796);
const smo68797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo68797.setAttribute('id', 'smo68797');
smo68826v0ar.push(smo68797);
const smo68798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo68798.setAttribute('id', 'smo68798');
smo68826v0ar.push(smo68798);
const smo68799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo68799.setAttribute('id', 'smo68799');
smo68826v0ar.push(smo68799);
const smo68800 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo68800.setAttribute('id', 'smo68800');
smo68826v0ar.push(smo68800);
const smo68801 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo68801.setAttribute('id', 'smo68801');
smo68826v0ar.push(smo68801);
const smo68802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68802.setAttribute('id', 'smo68802');
smo68826v0ar.push(smo68802);
const smo68803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo68803.setAttribute('id', 'smo68803');
smo68826v0ar.push(smo68803);
const smo68804 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo68804.setAttribute('id', 'smo68804');
smo68826v0ar.push(smo68804);
const smo68805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo68805.setAttribute('id', 'smo68805');
smo68826v0ar.push(smo68805);
const smo68806 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo68806.setAttribute('id', 'smo68806');
smo68826v0ar.push(smo68806);
const smo68807 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo68807.setAttribute('id', 'smo68807');
smo68826v0ar.push(smo68807);
const smo68808 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo68808.setAttribute('id', 'smo68808');
smo68826v0ar.push(smo68808);
smo68826v0.addTickables(smo68826v0ar)
fmtsmo6882613.joinVoices([smo68826v0]);
const smo68826v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68826v1ar = [];
const smo68809 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68809.setAttribute('id', 'smo68809');
smo68809.setStyle({ fillStyle: '#aaaaaa7f' });
smo68826v1ar.push(smo68809);
const smo68810 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68810.setAttribute('id', 'smo68810');
smo68810.setStyle({ fillStyle: '#aaaaaa7f' });
smo68810.addModifier(new VF.Dot(), 0);
smo68810.addModifier(new VF.Dot(), 0);
smo68826v1ar.push(smo68810);
const smo68811 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68811.setAttribute('id', 'smo68811');
smo68811.setStyle({ fillStyle: '#aaaaaa7f' });
smo68826v1ar.push(smo68811);
const smo68812 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68812.setAttribute('id', 'smo68812');
smo68812.setStyle({ fillStyle: '#aaaaaa7f' });
smo68812.addModifier(new VF.Dot(), 0);
smo68812.addModifier(new VF.Dot(), 0);
smo68826v1ar.push(smo68812);
smo68826v1.addTickables(smo68826v1ar)
fmtsmo6882613.joinVoices([smo68826v1]);
const fmtsmo7414113 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo74141v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74141v0ar = [];
const smo74120 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo74120.setAttribute('id', 'smo74120');
smo74141v0ar.push(smo74120);
const smo74121 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
smo74121.setAttribute('id', 'smo74121');
const smo741210acc = new VF.Accidental('#');
smo74121.addModifier(smo741210acc, 0);
smo74121.addModifier(new VF.Dot(), 0);
smo74141v0ar.push(smo74121);
const smo74122 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
smo74122.setAttribute('id', 'smo74122');
smo74141v0ar.push(smo74122);
const smo74123 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo74123.setAttribute('id', 'smo74123');
smo74141v0ar.push(smo74123);
const smo74124 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
smo74124.setAttribute('id', 'smo74124');
smo74124.addModifier(new VF.Dot(), 0);
smo74141v0ar.push(smo74124);
const smo74125 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
smo74125.setAttribute('id', 'smo74125');
smo74141v0ar.push(smo74125);
smo74141v0.addTickables(smo74141v0ar)
fmtsmo7414113.joinVoices([smo74141v0]);
const smo74141v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74141v1ar = [];
const smo74126 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo74126.setAttribute('id', 'smo74126');
smo74126.setStyle({ fillStyle: "#115511" });
smo74141v1ar.push(smo74126);
const smo74127 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo74127.setAttribute('id', 'smo74127');
smo74127.setStyle({ fillStyle: "#115511" });
smo74141v1ar.push(smo74127);
smo74141v1.addTickables(smo74141v1ar)
fmtsmo7414113.joinVoices([smo74141v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo77907 = smo68796.getStemDirection();
smo68796.setStemDirection(dirsmo77907);
smo68797.setStemDirection(dirsmo77907);
const smo77907 = new VF.Beam([smo68796,smo68797]);
const dirsmo77908 = smo68798.getStemDirection();
smo68798.setStemDirection(dirsmo77908);
smo68799.setStemDirection(dirsmo77908);
smo68800.setStemDirection(dirsmo77908);
smo68801.setStemDirection(dirsmo77908);
const smo77908 = new VF.Beam([smo68798,smo68799,smo68800,smo68801]);
const dirsmo77909 = smo68803.getStemDirection();
smo68803.setStemDirection(dirsmo77909);
smo68804.setStemDirection(dirsmo77909);
const smo77909 = new VF.Beam([smo68803,smo68804]);
const dirsmo77910 = smo68805.getStemDirection();
smo68805.setStemDirection(dirsmo77910);
smo68806.setStemDirection(dirsmo77910);
smo68807.setStemDirection(dirsmo77910);
smo68808.setStemDirection(dirsmo77910);
const smo77910 = new VF.Beam([smo68805,smo68806,smo68807,smo68808]);
 
// formatting measures in staff group smo67190
fmtsmo6882613.format([smo68826v0,smo68826v1,smo74141v0,smo74141v1], 560);
const stavesmo68826 = new VF.Stave(684, 1494, 574);
stavesmo68826.setAttribute('id', 'stavesmo68826');
stavesmo68826.setBegBarType(VF.Barline.type.NONE);
stavesmo68826.setContext(context);
stavesmo68826.draw();
smo68826v0.draw(context, stavesmo68826);
smo68826v1.draw(context, stavesmo68826);
smo77907.setContext(context);
smo77907.draw();
smo77908.setContext(context);
smo77908.draw();
smo77909.setContext(context);
smo77909.draw();
smo77910.setContext(context);
smo77910.draw();
const stavesmo74141 = new VF.Stave(684, 1668, 574);
stavesmo74141.setAttribute('id', 'stavesmo74141');
stavesmo74141.setBegBarType(VF.Barline.type.NONE);
stavesmo74141.setContext(context);
stavesmo74141.draw();
smo74141v0.draw(context, stavesmo74141);
smo74141v1.draw(context, stavesmo74141);
const fmtsmo6885814 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo68858v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68858v0ar = [];
const smo68827 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68827.setAttribute('id', 'smo68827');
smo68858v0ar.push(smo68827);
const smo68828 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo68828.setAttribute('id', 'smo68828');
smo68858v0ar.push(smo68828);
const smo68829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68829.setAttribute('id', 'smo68829');
smo68858v0ar.push(smo68829);
const smo68830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo68830.setAttribute('id', 'smo68830');
smo68858v0ar.push(smo68830);
const smo68831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo68831.setAttribute('id', 'smo68831');
smo68858v0ar.push(smo68831);
const smo68832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68832.setAttribute('id', 'smo68832');
smo68858v0ar.push(smo68832);
const smo68833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo68833.setAttribute('id', 'smo68833');
smo68858v0ar.push(smo68833);
const smo68834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68834.setAttribute('id', 'smo68834');
smo68858v0ar.push(smo68834);
const smo68835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo68835.setAttribute('id', 'smo68835');
smo68858v0ar.push(smo68835);
const smo68836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68836.setAttribute('id', 'smo68836');
smo68858v0ar.push(smo68836);
const smo68837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo68837.setAttribute('id', 'smo68837');
smo68858v0ar.push(smo68837);
const smo68838 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo68838.setAttribute('id', 'smo68838');
smo68858v0ar.push(smo68838);
const smo68839 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68839.setAttribute('id', 'smo68839');
smo68858v0ar.push(smo68839);
const smo68840 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo68840.setAttribute('id', 'smo68840');
smo68858v0ar.push(smo68840);
smo68858v0.addTickables(smo68858v0ar)
fmtsmo6885814.joinVoices([smo68858v0]);
const smo68858v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68858v1ar = [];
const smo68841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68841.setAttribute('id', 'smo68841');
smo68841.setStyle({ fillStyle: '#aaaaaa7f' });
smo68858v1ar.push(smo68841);
const smo68842 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68842.setAttribute('id', 'smo68842');
smo68842.setStyle({ fillStyle: '#aaaaaa7f' });
smo68842.addModifier(new VF.Dot(), 0);
smo68842.addModifier(new VF.Dot(), 0);
smo68858v1ar.push(smo68842);
const smo68843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68843.setAttribute('id', 'smo68843');
smo68843.setStyle({ fillStyle: '#aaaaaa7f' });
smo68858v1ar.push(smo68843);
const smo68844 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68844.setAttribute('id', 'smo68844');
smo68844.setStyle({ fillStyle: '#aaaaaa7f' });
smo68844.addModifier(new VF.Dot(), 0);
smo68844.addModifier(new VF.Dot(), 0);
smo68858v1ar.push(smo68844);
smo68858v1.addTickables(smo68858v1ar)
fmtsmo6885814.joinVoices([smo68858v1]);
const fmtsmo7416314 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo74163v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74163v0ar = [];
const smo74142 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo74142.setAttribute('id', 'smo74142');
smo74163v0ar.push(smo74142);
const smo74143 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo74143.setAttribute('id', 'smo74143');
smo74143.addModifier(new VF.Dot(), 0);
smo74163v0ar.push(smo74143);
const smo74144 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo74144.setAttribute('id', 'smo74144');
smo74163v0ar.push(smo74144);
const smo74145 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo74145.setAttribute('id', 'smo74145');
smo74163v0ar.push(smo74145);
const smo74146 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo74146.setAttribute('id', 'smo74146');
smo74146.addModifier(new VF.Dot(), 0);
smo74163v0ar.push(smo74146);
const smo74147 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo74147.setAttribute('id', 'smo74147');
smo74163v0ar.push(smo74147);
smo74163v0.addTickables(smo74163v0ar)
fmtsmo7416314.joinVoices([smo74163v0]);
const smo74163v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74163v1ar = [];
const smo74148 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74148.setAttribute('id', 'smo74148');
smo74148.setStyle({ fillStyle: "#115511" });
smo74163v1ar.push(smo74148);
const smo74149 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74149.setAttribute('id', 'smo74149');
smo74149.setStyle({ fillStyle: "#115511" });
smo74163v1ar.push(smo74149);
smo74163v1.addTickables(smo74163v1ar)
fmtsmo7416314.joinVoices([smo74163v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo77915 = smo68828.getStemDirection();
smo68828.setStemDirection(dirsmo77915);
smo68829.setStemDirection(dirsmo77915);
const smo77915 = new VF.Beam([smo68828,smo68829]);
const dirsmo77916 = smo68830.getStemDirection();
smo68830.setStemDirection(dirsmo77916);
smo68831.setStemDirection(dirsmo77916);
smo68832.setStemDirection(dirsmo77916);
smo68833.setStemDirection(dirsmo77916);
const smo77916 = new VF.Beam([smo68830,smo68831,smo68832,smo68833]);
const dirsmo77917 = smo68835.getStemDirection();
smo68835.setStemDirection(dirsmo77917);
smo68836.setStemDirection(dirsmo77917);
const smo77917 = new VF.Beam([smo68835,smo68836]);
const dirsmo77918 = smo68837.getStemDirection();
smo68837.setStemDirection(dirsmo77918);
smo68838.setStemDirection(dirsmo77918);
smo68839.setStemDirection(dirsmo77918);
smo68840.setStemDirection(dirsmo77918);
const smo77918 = new VF.Beam([smo68837,smo68838,smo68839,smo68840]);
 
// formatting measures in staff group smo67190
fmtsmo6885814.format([smo68858v0,smo68858v1,smo74163v0,smo74163v1], 535);
const stavesmo68858 = new VF.Stave(1258, 1494, 549);
stavesmo68858.setAttribute('id', 'stavesmo68858');
stavesmo68858.setBegBarType(VF.Barline.type.NONE);
stavesmo68858.setContext(context);
stavesmo68858.draw();
smo68858v0.draw(context, stavesmo68858);
smo68858v1.draw(context, stavesmo68858);
smo77915.setContext(context);
smo77915.draw();
smo77916.setContext(context);
smo77916.draw();
smo77917.setContext(context);
smo77917.draw();
smo77918.setContext(context);
smo77918.draw();
const stavesmo74163 = new VF.Stave(1258, 1668, 549);
stavesmo74163.setAttribute('id', 'stavesmo74163');
stavesmo74163.setBegBarType(VF.Barline.type.NONE);
stavesmo74163.setContext(context);
stavesmo74163.draw();
smo74163v0.draw(context, stavesmo74163);
smo74163v1.draw(context, stavesmo74163);
const rightsmo67190stavesmo688581 = new VF.StaveConnector(stavesmo68858, stavesmo74163).setType(0);
rightsmo67190stavesmo688581.setContext(context).draw();
const fmtsmo6889015 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo68890v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68890v0ar = [];
const smo68859 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68859.setAttribute('id', 'smo68859');
smo68890v0ar.push(smo68859);
const smo68860 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo68860.setAttribute('id', 'smo68860');
smo68890v0ar.push(smo68860);
const smo68861 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo68861.setAttribute('id', 'smo68861');
smo68890v0ar.push(smo68861);
const smo68862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo68862.setAttribute('id', 'smo68862');
smo68890v0ar.push(smo68862);
const smo68863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo68863.setAttribute('id', 'smo68863');
smo68890v0ar.push(smo68863);
const smo68864 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo68864.setAttribute('id', 'smo68864');
smo68890v0ar.push(smo68864);
const smo68865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo68865.setAttribute('id', 'smo68865');
smo68890v0ar.push(smo68865);
const smo68866 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68866.setAttribute('id', 'smo68866');
smo68890v0ar.push(smo68866);
const smo68867 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo68867.setAttribute('id', 'smo68867');
smo68890v0ar.push(smo68867);
const smo68868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo68868.setAttribute('id', 'smo68868');
smo68890v0ar.push(smo68868);
const smo68869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo68869.setAttribute('id', 'smo68869');
smo68890v0ar.push(smo68869);
const smo68870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo68870.setAttribute('id', 'smo68870');
smo68890v0ar.push(smo68870);
const smo68871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo68871.setAttribute('id', 'smo68871');
smo68890v0ar.push(smo68871);
const smo68872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo68872.setAttribute('id', 'smo68872');
smo68890v0ar.push(smo68872);
smo68890v0.addTickables(smo68890v0ar)
fmtsmo6889015.joinVoices([smo68890v0]);
const smo68890v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68890v1ar = [];
const smo68873 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68873.setAttribute('id', 'smo68873');
smo68873.setStyle({ fillStyle: '#aaaaaa7f' });
smo68890v1ar.push(smo68873);
const smo68874 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68874.setAttribute('id', 'smo68874');
smo68874.setStyle({ fillStyle: '#aaaaaa7f' });
smo68874.addModifier(new VF.Dot(), 0);
smo68874.addModifier(new VF.Dot(), 0);
smo68890v1ar.push(smo68874);
const smo68875 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68875.setAttribute('id', 'smo68875');
smo68875.setStyle({ fillStyle: '#aaaaaa7f' });
smo68890v1ar.push(smo68875);
const smo68876 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68876.setAttribute('id', 'smo68876');
smo68876.setStyle({ fillStyle: '#aaaaaa7f' });
smo68876.addModifier(new VF.Dot(), 0);
smo68876.addModifier(new VF.Dot(), 0);
smo68890v1ar.push(smo68876);
smo68890v1.addTickables(smo68890v1ar)
fmtsmo6889015.joinVoices([smo68890v1]);
const fmtsmo7418515 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo74185v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74185v0ar = [];
const smo74164 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo74164.setAttribute('id', 'smo74164');
smo74185v0ar.push(smo74164);
const smo74165 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo74165.setAttribute('id', 'smo74165');
smo74165.addModifier(new VF.Dot(), 0);
smo74185v0ar.push(smo74165);
const smo74166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo74166.setAttribute('id', 'smo74166');
smo74185v0ar.push(smo74166);
const smo74167 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo74167.setAttribute('id', 'smo74167');
smo74185v0ar.push(smo74167);
const smo74168 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo74168.setAttribute('id', 'smo74168');
smo74168.addModifier(new VF.Dot(), 0);
smo74185v0ar.push(smo74168);
const smo74169 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo74169.setAttribute('id', 'smo74169');
smo74185v0ar.push(smo74169);
smo74185v0.addTickables(smo74185v0ar)
fmtsmo7418515.joinVoices([smo74185v0]);
const smo74185v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74185v1ar = [];
const smo74170 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74170.setAttribute('id', 'smo74170');
smo74170.setStyle({ fillStyle: "#115511" });
smo74185v1ar.push(smo74170);
const smo74171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74171.setAttribute('id', 'smo74171');
smo74171.setStyle({ fillStyle: "#115511" });
smo74185v1ar.push(smo74171);
smo74185v1.addTickables(smo74185v1ar)
fmtsmo7418515.joinVoices([smo74185v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo77931 = smo68860.getStemDirection();
smo68860.setStemDirection(dirsmo77931);
smo68861.setStemDirection(dirsmo77931);
const smo77931 = new VF.Beam([smo68860,smo68861]);
const dirsmo77932 = smo68862.getStemDirection();
smo68862.setStemDirection(dirsmo77932);
smo68863.setStemDirection(dirsmo77932);
smo68864.setStemDirection(dirsmo77932);
smo68865.setStemDirection(dirsmo77932);
const smo77932 = new VF.Beam([smo68862,smo68863,smo68864,smo68865]);
const dirsmo77933 = smo68867.getStemDirection();
smo68867.setStemDirection(dirsmo77933);
smo68868.setStemDirection(dirsmo77933);
const smo77933 = new VF.Beam([smo68867,smo68868]);
const dirsmo77934 = smo68869.getStemDirection();
smo68869.setStemDirection(dirsmo77934);
smo68870.setStemDirection(dirsmo77934);
smo68871.setStemDirection(dirsmo77934);
smo68872.setStemDirection(dirsmo77934);
const smo77934 = new VF.Beam([smo68869,smo68870,smo68871,smo68872]);
 
// formatting measures in staff group smo67190
fmtsmo6889015.format([smo68890v0,smo68890v1,smo74185v0,smo74185v1], 544);
const stavesmo68890 = new VF.Stave(90, 1778, 602);
stavesmo68890.setAttribute('id', 'stavesmo68890');
stavesmo68890.setBegBarType(1);
stavesmo68890.addClef('treble');
stavesmo68890.setContext(context);
stavesmo68890.draw();
smo68890v0.draw(context, stavesmo68890);
smo68890v1.draw(context, stavesmo68890);
smo77931.setContext(context);
smo77931.draw();
smo77932.setContext(context);
smo77932.draw();
smo77933.setContext(context);
smo77933.draw();
smo77934.setContext(context);
smo77934.draw();
const stavesmo74185 = new VF.Stave(90, 1862, 602);
stavesmo74185.setAttribute('id', 'stavesmo74185');
stavesmo74185.setBegBarType(1);
stavesmo74185.addClef('treble');
stavesmo74185.setContext(context);
stavesmo74185.draw();
smo74185v0.draw(context, stavesmo74185);
smo74185v1.draw(context, stavesmo74185);
const leftsmo67190stavesmo688901 = new VF.StaveConnector(stavesmo68890, stavesmo74185).setType(3);
leftsmo67190stavesmo688901.setContext(context).draw();
const fmtsmo6892216 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo68922v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68922v0ar = [];
const smo68891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68891.setAttribute('id', 'smo68891');
smo68922v0ar.push(smo68891);
const smo68892 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo68892.setAttribute('id', 'smo68892');
smo68922v0ar.push(smo68892);
const smo68893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo68893.setAttribute('id', 'smo68893');
smo68922v0ar.push(smo68893);
const smo68894 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo68894.setAttribute('id', 'smo68894');
smo68922v0ar.push(smo68894);
const smo68895 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo68895.setAttribute('id', 'smo68895');
smo68922v0ar.push(smo68895);
const smo68896 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo68896.setAttribute('id', 'smo68896');
smo68922v0ar.push(smo68896);
const smo68897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo68897.setAttribute('id', 'smo68897');
smo68922v0ar.push(smo68897);
const smo68898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68898.setAttribute('id', 'smo68898');
smo68922v0ar.push(smo68898);
const smo68899 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo68899.setAttribute('id', 'smo68899');
smo68922v0ar.push(smo68899);
const smo68900 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo68900.setAttribute('id', 'smo68900');
smo68922v0ar.push(smo68900);
const smo68901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo68901.setAttribute('id', 'smo68901');
smo68922v0ar.push(smo68901);
const smo68902 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo68902.setAttribute('id', 'smo68902');
smo68922v0ar.push(smo68902);
const smo68903 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo68903.setAttribute('id', 'smo68903');
smo68922v0ar.push(smo68903);
const smo68904 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo68904.setAttribute('id', 'smo68904');
smo68922v0ar.push(smo68904);
smo68922v0.addTickables(smo68922v0ar)
fmtsmo6892216.joinVoices([smo68922v0]);
const smo68922v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68922v1ar = [];
const smo68905 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68905.setAttribute('id', 'smo68905');
smo68905.setStyle({ fillStyle: '#aaaaaa7f' });
smo68922v1ar.push(smo68905);
const smo68906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68906.setAttribute('id', 'smo68906');
smo68906.setStyle({ fillStyle: '#aaaaaa7f' });
smo68906.addModifier(new VF.Dot(), 0);
smo68906.addModifier(new VF.Dot(), 0);
smo68922v1ar.push(smo68906);
const smo68907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68907.setAttribute('id', 'smo68907');
smo68907.setStyle({ fillStyle: '#aaaaaa7f' });
smo68922v1ar.push(smo68907);
const smo68908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68908.setAttribute('id', 'smo68908');
smo68908.setStyle({ fillStyle: '#aaaaaa7f' });
smo68908.addModifier(new VF.Dot(), 0);
smo68908.addModifier(new VF.Dot(), 0);
smo68922v1ar.push(smo68908);
smo68922v1.addTickables(smo68922v1ar)
fmtsmo6892216.joinVoices([smo68922v1]);
const fmtsmo7420716 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo74207v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74207v0ar = [];
const smo74186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo74186.setAttribute('id', 'smo74186');
smo74207v0ar.push(smo74186);
const smo74187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo74187.setAttribute('id', 'smo74187');
smo74187.addModifier(new VF.Dot(), 0);
smo74207v0ar.push(smo74187);
const smo74188 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo74188.setAttribute('id', 'smo74188');
smo74207v0ar.push(smo74188);
const smo74189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo74189.setAttribute('id', 'smo74189');
smo74207v0ar.push(smo74189);
const smo74190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo74190.setAttribute('id', 'smo74190');
smo74190.addModifier(new VF.Dot(), 0);
smo74207v0ar.push(smo74190);
const smo74191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo74191.setAttribute('id', 'smo74191');
smo74207v0ar.push(smo74191);
smo74207v0.addTickables(smo74207v0ar)
fmtsmo7420716.joinVoices([smo74207v0]);
const smo74207v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74207v1ar = [];
const smo74192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74192.setAttribute('id', 'smo74192');
smo74192.setStyle({ fillStyle: "#115511" });
smo74207v1ar.push(smo74192);
const smo74193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74193.setAttribute('id', 'smo74193');
smo74193.setStyle({ fillStyle: "#115511" });
smo74207v1ar.push(smo74193);
smo74207v1.addTickables(smo74207v1ar)
fmtsmo7420716.joinVoices([smo74207v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo77939 = smo68892.getStemDirection();
smo68892.setStemDirection(dirsmo77939);
smo68893.setStemDirection(dirsmo77939);
const smo77939 = new VF.Beam([smo68892,smo68893]);
const dirsmo77940 = smo68894.getStemDirection();
smo68894.setStemDirection(dirsmo77940);
smo68895.setStemDirection(dirsmo77940);
smo68896.setStemDirection(dirsmo77940);
smo68897.setStemDirection(dirsmo77940);
const smo77940 = new VF.Beam([smo68894,smo68895,smo68896,smo68897]);
const dirsmo77941 = smo68899.getStemDirection();
smo68899.setStemDirection(dirsmo77941);
smo68900.setStemDirection(dirsmo77941);
const smo77941 = new VF.Beam([smo68899,smo68900]);
const dirsmo77942 = smo68901.getStemDirection();
smo68901.setStemDirection(dirsmo77942);
smo68902.setStemDirection(dirsmo77942);
smo68903.setStemDirection(dirsmo77942);
smo68904.setStemDirection(dirsmo77942);
const smo77942 = new VF.Beam([smo68901,smo68902,smo68903,smo68904]);
 
// formatting measures in staff group smo67190
fmtsmo6892216.format([smo68922v0,smo68922v1,smo74207v0,smo74207v1], 544);
const stavesmo68922 = new VF.Stave(692, 1778, 558);
stavesmo68922.setAttribute('id', 'stavesmo68922');
stavesmo68922.setBegBarType(VF.Barline.type.NONE);
stavesmo68922.setContext(context);
stavesmo68922.draw();
smo68922v0.draw(context, stavesmo68922);
smo68922v1.draw(context, stavesmo68922);
smo77939.setContext(context);
smo77939.draw();
smo77940.setContext(context);
smo77940.draw();
smo77941.setContext(context);
smo77941.draw();
smo77942.setContext(context);
smo77942.draw();
const stavesmo74207 = new VF.Stave(692, 1862, 558);
stavesmo74207.setAttribute('id', 'stavesmo74207');
stavesmo74207.setBegBarType(VF.Barline.type.NONE);
stavesmo74207.setContext(context);
stavesmo74207.draw();
smo74207v0.draw(context, stavesmo74207);
smo74207v1.draw(context, stavesmo74207);
const fmtsmo6895417 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo68954v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68954v0ar = [];
const smo68923 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68923.setAttribute('id', 'smo68923');
smo68954v0ar.push(smo68923);
const smo68924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo68924.setAttribute('id', 'smo68924');
smo68954v0ar.push(smo68924);
const smo68925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","stem_direction":1,"auto_stem":false,"keys":["bn/4/r"]}'))
smo68925.setAttribute('id', 'smo68925');
smo68954v0ar.push(smo68925);
const smo68926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo68926.setAttribute('id', 'smo68926');
smo68954v0ar.push(smo68926);
const smo68927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo68927.setAttribute('id', 'smo68927');
smo68954v0ar.push(smo68927);
const smo68928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo68928.setAttribute('id', 'smo68928');
smo68954v0ar.push(smo68928);
const smo68929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo68929.setAttribute('id', 'smo68929');
smo68954v0ar.push(smo68929);
const smo68930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68930.setAttribute('id', 'smo68930');
smo68954v0ar.push(smo68930);
const smo68931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo68931.setAttribute('id', 'smo68931');
smo68954v0ar.push(smo68931);
const smo68932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo68932.setAttribute('id', 'smo68932');
smo68954v0ar.push(smo68932);
const smo68933 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo68933.setAttribute('id', 'smo68933');
smo68954v0ar.push(smo68933);
const smo68934 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo68934.setAttribute('id', 'smo68934');
smo68954v0ar.push(smo68934);
const smo68935 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo68935.setAttribute('id', 'smo68935');
smo68954v0ar.push(smo68935);
const smo68936 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo68936.setAttribute('id', 'smo68936');
smo68954v0ar.push(smo68936);
smo68954v0.addTickables(smo68954v0ar)
fmtsmo6895417.joinVoices([smo68954v0]);
const smo68954v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68954v1ar = [];
const smo68937 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68937.setAttribute('id', 'smo68937');
smo68937.setStyle({ fillStyle: '#aaaaaa7f' });
smo68954v1ar.push(smo68937);
const smo68938 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68938.setAttribute('id', 'smo68938');
smo68938.setStyle({ fillStyle: '#aaaaaa7f' });
smo68938.addModifier(new VF.Dot(), 0);
smo68938.addModifier(new VF.Dot(), 0);
smo68954v1ar.push(smo68938);
const smo68939 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68939.setAttribute('id', 'smo68939');
smo68939.setStyle({ fillStyle: '#aaaaaa7f' });
smo68954v1ar.push(smo68939);
const smo68940 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68940.setAttribute('id', 'smo68940');
smo68940.setStyle({ fillStyle: '#aaaaaa7f' });
smo68940.addModifier(new VF.Dot(), 0);
smo68940.addModifier(new VF.Dot(), 0);
smo68954v1ar.push(smo68940);
smo68954v1.addTickables(smo68954v1ar)
fmtsmo6895417.joinVoices([smo68954v1]);
const fmtsmo7422917 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo74229v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74229v0ar = [];
const smo74208 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo74208.setAttribute('id', 'smo74208');
smo74229v0ar.push(smo74208);
const smo74209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74209.setAttribute('id', 'smo74209');
smo74209.addModifier(new VF.Dot(), 0);
smo74229v0ar.push(smo74209);
const smo74210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74210.setAttribute('id', 'smo74210');
smo74229v0ar.push(smo74210);
const smo74211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo74211.setAttribute('id', 'smo74211');
smo74229v0ar.push(smo74211);
const smo74212 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74212.setAttribute('id', 'smo74212');
smo74212.addModifier(new VF.Dot(), 0);
smo74229v0ar.push(smo74212);
const smo74213 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74213.setAttribute('id', 'smo74213');
smo74229v0ar.push(smo74213);
smo74229v0.addTickables(smo74229v0ar)
fmtsmo7422917.joinVoices([smo74229v0]);
const smo74229v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74229v1ar = [];
const smo74214 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo74214.setAttribute('id', 'smo74214');
smo74214.setStyle({ fillStyle: "#115511" });
smo74229v1ar.push(smo74214);
const smo74215 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo74215.setAttribute('id', 'smo74215');
smo74215.setStyle({ fillStyle: "#115511" });
smo74229v1ar.push(smo74215);
smo74229v1.addTickables(smo74229v1ar)
fmtsmo7422917.joinVoices([smo74229v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo77947 = smo68926.getStemDirection();
smo68926.setStemDirection(dirsmo77947);
smo68927.setStemDirection(dirsmo77947);
smo68928.setStemDirection(dirsmo77947);
smo68929.setStemDirection(dirsmo77947);
const smo77947 = new VF.Beam([smo68926,smo68927,smo68928,smo68929]);
const dirsmo77948 = smo68931.getStemDirection();
smo68931.setStemDirection(dirsmo77948);
smo68932.setStemDirection(dirsmo77948);
const smo77948 = new VF.Beam([smo68931,smo68932]);
const dirsmo77949 = smo68933.getStemDirection();
smo68933.setStemDirection(dirsmo77949);
smo68934.setStemDirection(dirsmo77949);
smo68935.setStemDirection(dirsmo77949);
smo68936.setStemDirection(dirsmo77949);
const smo77949 = new VF.Beam([smo68933,smo68934,smo68935,smo68936]);
 
// formatting measures in staff group smo67190
fmtsmo6895417.format([smo68954v0,smo68954v1,smo74229v0,smo74229v1], 544);
const stavesmo68954 = new VF.Stave(1250, 1778, 558);
stavesmo68954.setAttribute('id', 'stavesmo68954');
stavesmo68954.setBegBarType(VF.Barline.type.NONE);
stavesmo68954.setContext(context);
stavesmo68954.draw();
smo68954v0.draw(context, stavesmo68954);
smo68954v1.draw(context, stavesmo68954);
smo77947.setContext(context);
smo77947.draw();
smo77948.setContext(context);
smo77948.draw();
smo77949.setContext(context);
smo77949.draw();
const stavesmo74229 = new VF.Stave(1250, 1862, 558);
stavesmo74229.setAttribute('id', 'stavesmo74229');
stavesmo74229.setBegBarType(VF.Barline.type.NONE);
stavesmo74229.setContext(context);
stavesmo74229.draw();
smo74229v0.draw(context, stavesmo74229);
smo74229v1.draw(context, stavesmo74229);
const rightsmo67190stavesmo689541 = new VF.StaveConnector(stavesmo68954, stavesmo74229).setType(0);
rightsmo67190stavesmo689541.setContext(context).draw();
const fmtsmo6898618 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo68986v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68986v0ar = [];
const smo68955 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68955.setAttribute('id', 'smo68955');
smo68986v0ar.push(smo68955);
const smo68956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo68956.setAttribute('id', 'smo68956');
smo68986v0ar.push(smo68956);
const smo68957 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo68957.setAttribute('id', 'smo68957');
smo68986v0ar.push(smo68957);
const smo68958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo68958.setAttribute('id', 'smo68958');
smo68986v0ar.push(smo68958);
const smo68959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo68959.setAttribute('id', 'smo68959');
smo68986v0ar.push(smo68959);
const smo68960 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo68960.setAttribute('id', 'smo68960');
smo68986v0ar.push(smo68960);
const smo68961 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo68961.setAttribute('id', 'smo68961');
smo68986v0ar.push(smo68961);
const smo68962 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68962.setAttribute('id', 'smo68962');
smo68986v0ar.push(smo68962);
const smo68963 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo68963.setAttribute('id', 'smo68963');
smo68986v0ar.push(smo68963);
const smo68964 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo68964.setAttribute('id', 'smo68964');
smo68986v0ar.push(smo68964);
const smo68965 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo68965.setAttribute('id', 'smo68965');
smo68986v0ar.push(smo68965);
const smo68966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo68966.setAttribute('id', 'smo68966');
smo68986v0ar.push(smo68966);
const smo68967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo68967.setAttribute('id', 'smo68967');
smo68986v0ar.push(smo68967);
const smo68968 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo68968.setAttribute('id', 'smo68968');
smo68986v0ar.push(smo68968);
smo68986v0.addTickables(smo68986v0ar)
fmtsmo6898618.joinVoices([smo68986v0]);
const smo68986v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68986v1ar = [];
const smo68969 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68969.setAttribute('id', 'smo68969');
smo68969.setStyle({ fillStyle: '#aaaaaa7f' });
smo68986v1ar.push(smo68969);
const smo68970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68970.setAttribute('id', 'smo68970');
smo68970.setStyle({ fillStyle: '#aaaaaa7f' });
smo68970.addModifier(new VF.Dot(), 0);
smo68970.addModifier(new VF.Dot(), 0);
smo68986v1ar.push(smo68970);
const smo68971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68971.setAttribute('id', 'smo68971');
smo68971.setStyle({ fillStyle: '#aaaaaa7f' });
smo68986v1ar.push(smo68971);
const smo68972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68972.setAttribute('id', 'smo68972');
smo68972.setStyle({ fillStyle: '#aaaaaa7f' });
smo68972.addModifier(new VF.Dot(), 0);
smo68972.addModifier(new VF.Dot(), 0);
smo68986v1ar.push(smo68972);
smo68986v1.addTickables(smo68986v1ar)
fmtsmo6898618.joinVoices([smo68986v1]);
const fmtsmo7425118 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo74251v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74251v0ar = [];
const smo74230 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo74230.setAttribute('id', 'smo74230');
smo74251v0ar.push(smo74230);
const smo74231 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74231.setAttribute('id', 'smo74231');
smo74231.addModifier(new VF.Dot(), 0);
smo74251v0ar.push(smo74231);
const smo74232 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74232.setAttribute('id', 'smo74232');
smo74251v0ar.push(smo74232);
const smo74233 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo74233.setAttribute('id', 'smo74233');
smo74251v0ar.push(smo74233);
const smo74234 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74234.setAttribute('id', 'smo74234');
smo74234.addModifier(new VF.Dot(), 0);
smo74251v0ar.push(smo74234);
const smo74235 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74235.setAttribute('id', 'smo74235');
smo74251v0ar.push(smo74235);
smo74251v0.addTickables(smo74251v0ar)
fmtsmo7425118.joinVoices([smo74251v0]);
const smo74251v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74251v1ar = [];
const smo74236 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo74236.setAttribute('id', 'smo74236');
smo74236.setStyle({ fillStyle: "#115511" });
smo74251v1ar.push(smo74236);
const smo74237 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo74237.setAttribute('id', 'smo74237');
smo74237.setStyle({ fillStyle: "#115511" });
smo74251v1ar.push(smo74237);
smo74251v1.addTickables(smo74251v1ar)
fmtsmo7425118.joinVoices([smo74251v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo77962 = smo68956.getStemDirection();
smo68956.setStemDirection(dirsmo77962);
smo68957.setStemDirection(dirsmo77962);
const smo77962 = new VF.Beam([smo68956,smo68957]);
const dirsmo77963 = smo68958.getStemDirection();
smo68958.setStemDirection(dirsmo77963);
smo68959.setStemDirection(dirsmo77963);
smo68960.setStemDirection(dirsmo77963);
smo68961.setStemDirection(dirsmo77963);
const smo77963 = new VF.Beam([smo68958,smo68959,smo68960,smo68961]);
const dirsmo77964 = smo68963.getStemDirection();
smo68963.setStemDirection(dirsmo77964);
smo68964.setStemDirection(dirsmo77964);
const smo77964 = new VF.Beam([smo68963,smo68964]);
const dirsmo77965 = smo68965.getStemDirection();
smo68965.setStemDirection(dirsmo77965);
smo68966.setStemDirection(dirsmo77965);
smo68967.setStemDirection(dirsmo77965);
smo68968.setStemDirection(dirsmo77965);
const smo77965 = new VF.Beam([smo68965,smo68966,smo68967,smo68968]);
 
// formatting measures in staff group smo67190
fmtsmo6898618.format([smo68986v0,smo68986v1,smo74251v0,smo74251v1], 529);
const stavesmo68986 = new VF.Stave(90, 2049, 587);
stavesmo68986.setAttribute('id', 'stavesmo68986');
stavesmo68986.setBegBarType(1);
stavesmo68986.addClef('treble');
stavesmo68986.setContext(context);
stavesmo68986.draw();
smo68986v0.draw(context, stavesmo68986);
smo68986v1.draw(context, stavesmo68986);
smo77962.setContext(context);
smo77962.draw();
smo77963.setContext(context);
smo77963.draw();
smo77964.setContext(context);
smo77964.draw();
smo77965.setContext(context);
smo77965.draw();
const stavesmo74251 = new VF.Stave(90, 2136, 587);
stavesmo74251.setAttribute('id', 'stavesmo74251');
stavesmo74251.setBegBarType(1);
stavesmo74251.addClef('treble');
stavesmo74251.setContext(context);
stavesmo74251.draw();
smo74251v0.draw(context, stavesmo74251);
smo74251v1.draw(context, stavesmo74251);
const leftsmo67190stavesmo689861 = new VF.StaveConnector(stavesmo68986, stavesmo74251).setType(3);
leftsmo67190stavesmo689861.setContext(context).draw();
const fmtsmo6901819 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo69018v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69018v0ar = [];
const smo68987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68987.setAttribute('id', 'smo68987');
smo69018v0ar.push(smo68987);
const smo68988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo68988.setAttribute('id', 'smo68988');
const smo689880acc = new VF.Accidental('b');
smo68988.addModifier(smo689880acc, 0);
smo69018v0ar.push(smo68988);
const smo68989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo68989.setAttribute('id', 'smo68989');
smo69018v0ar.push(smo68989);
const smo68990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo68990.setAttribute('id', 'smo68990');
smo69018v0ar.push(smo68990);
const smo68991 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo68991.setAttribute('id', 'smo68991');
smo69018v0ar.push(smo68991);
const smo68992 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo68992.setAttribute('id', 'smo68992');
smo69018v0ar.push(smo68992);
const smo68993 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo68993.setAttribute('id', 'smo68993');
smo69018v0ar.push(smo68993);
const smo68994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68994.setAttribute('id', 'smo68994');
smo69018v0ar.push(smo68994);
const smo68995 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo68995.setAttribute('id', 'smo68995');
smo69018v0ar.push(smo68995);
const smo68996 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo68996.setAttribute('id', 'smo68996');
smo69018v0ar.push(smo68996);
const smo68997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo68997.setAttribute('id', 'smo68997');
smo69018v0ar.push(smo68997);
const smo68998 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo68998.setAttribute('id', 'smo68998');
smo69018v0ar.push(smo68998);
const smo68999 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo68999.setAttribute('id', 'smo68999');
smo69018v0ar.push(smo68999);
const smo69000 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69000.setAttribute('id', 'smo69000');
smo69018v0ar.push(smo69000);
smo69018v0.addTickables(smo69018v0ar)
fmtsmo6901819.joinVoices([smo69018v0]);
const smo69018v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69018v1ar = [];
const smo69001 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69001.setAttribute('id', 'smo69001');
smo69001.setStyle({ fillStyle: '#aaaaaa7f' });
smo69018v1ar.push(smo69001);
const smo69002 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69002.setAttribute('id', 'smo69002');
smo69002.setStyle({ fillStyle: '#aaaaaa7f' });
smo69002.addModifier(new VF.Dot(), 0);
smo69002.addModifier(new VF.Dot(), 0);
smo69018v1ar.push(smo69002);
const smo69003 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69003.setAttribute('id', 'smo69003');
smo69003.setStyle({ fillStyle: '#aaaaaa7f' });
smo69018v1ar.push(smo69003);
const smo69004 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69004.setAttribute('id', 'smo69004');
smo69004.setStyle({ fillStyle: '#aaaaaa7f' });
smo69004.addModifier(new VF.Dot(), 0);
smo69004.addModifier(new VF.Dot(), 0);
smo69018v1ar.push(smo69004);
smo69018v1.addTickables(smo69018v1ar)
fmtsmo6901819.joinVoices([smo69018v1]);
const fmtsmo7427319 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo74273v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74273v0ar = [];
const smo74252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo74252.setAttribute('id', 'smo74252');
smo74273v0ar.push(smo74252);
const smo74253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo74253.setAttribute('id', 'smo74253');
smo74253.addModifier(new VF.Dot(), 0);
smo74273v0ar.push(smo74253);
const smo74254 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo74254.setAttribute('id', 'smo74254');
smo74273v0ar.push(smo74254);
const smo74255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo74255.setAttribute('id', 'smo74255');
smo74273v0ar.push(smo74255);
const smo74256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo74256.setAttribute('id', 'smo74256');
smo74256.addModifier(new VF.Dot(), 0);
smo74273v0ar.push(smo74256);
const smo74257 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo74257.setAttribute('id', 'smo74257');
smo74273v0ar.push(smo74257);
smo74273v0.addTickables(smo74273v0ar)
fmtsmo7427319.joinVoices([smo74273v0]);
const smo74273v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74273v1ar = [];
const smo74258 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo74258.setAttribute('id', 'smo74258');
smo74258.setStyle({ fillStyle: "#115511" });
smo74273v1ar.push(smo74258);
const smo74259 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo74259.setAttribute('id', 'smo74259');
smo74259.setStyle({ fillStyle: "#115511" });
smo74273v1ar.push(smo74259);
smo74273v1.addTickables(smo74273v1ar)
fmtsmo7427319.joinVoices([smo74273v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo77970 = smo68988.getStemDirection();
smo68988.setStemDirection(dirsmo77970);
smo68989.setStemDirection(dirsmo77970);
const smo77970 = new VF.Beam([smo68988,smo68989]);
const dirsmo77971 = smo68990.getStemDirection();
smo68990.setStemDirection(dirsmo77971);
smo68991.setStemDirection(dirsmo77971);
smo68992.setStemDirection(dirsmo77971);
smo68993.setStemDirection(dirsmo77971);
const smo77971 = new VF.Beam([smo68990,smo68991,smo68992,smo68993]);
const dirsmo77972 = smo68995.getStemDirection();
smo68995.setStemDirection(dirsmo77972);
smo68996.setStemDirection(dirsmo77972);
const smo77972 = new VF.Beam([smo68995,smo68996]);
const dirsmo77973 = smo68997.getStemDirection();
smo68997.setStemDirection(dirsmo77973);
smo68998.setStemDirection(dirsmo77973);
smo68999.setStemDirection(dirsmo77973);
smo69000.setStemDirection(dirsmo77973);
const smo77973 = new VF.Beam([smo68997,smo68998,smo68999,smo69000]);
 
// formatting measures in staff group smo67190
fmtsmo6901819.format([smo69018v0,smo69018v1,smo74273v0,smo74273v1], 575);
const stavesmo69018 = new VF.Stave(677, 2049, 589);
stavesmo69018.setAttribute('id', 'stavesmo69018');
stavesmo69018.setBegBarType(VF.Barline.type.NONE);
stavesmo69018.setContext(context);
stavesmo69018.draw();
smo69018v0.draw(context, stavesmo69018);
smo69018v1.draw(context, stavesmo69018);
smo77970.setContext(context);
smo77970.draw();
smo77971.setContext(context);
smo77971.draw();
smo77972.setContext(context);
smo77972.draw();
smo77973.setContext(context);
smo77973.draw();
const stavesmo74273 = new VF.Stave(677, 2136, 589);
stavesmo74273.setAttribute('id', 'stavesmo74273');
stavesmo74273.setBegBarType(VF.Barline.type.NONE);
stavesmo74273.setContext(context);
stavesmo74273.draw();
smo74273v0.draw(context, stavesmo74273);
smo74273v1.draw(context, stavesmo74273);
const fmtsmo6905020 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo69050v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69050v0ar = [];
const smo69019 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69019.setAttribute('id', 'smo69019');
smo69050v0ar.push(smo69019);
const smo69020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69020.setAttribute('id', 'smo69020');
smo69050v0ar.push(smo69020);
const smo69021 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69021.setAttribute('id', 'smo69021');
smo69050v0ar.push(smo69021);
const smo69022 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69022.setAttribute('id', 'smo69022');
smo69050v0ar.push(smo69022);
const smo69023 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69023.setAttribute('id', 'smo69023');
smo69050v0ar.push(smo69023);
const smo69024 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69024.setAttribute('id', 'smo69024');
smo69050v0ar.push(smo69024);
const smo69025 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69025.setAttribute('id', 'smo69025');
smo69050v0ar.push(smo69025);
const smo69026 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69026.setAttribute('id', 'smo69026');
smo69050v0ar.push(smo69026);
const smo69027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69027.setAttribute('id', 'smo69027');
smo69050v0ar.push(smo69027);
const smo69028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69028.setAttribute('id', 'smo69028');
smo69050v0ar.push(smo69028);
const smo69029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69029.setAttribute('id', 'smo69029');
smo69050v0ar.push(smo69029);
const smo69030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69030.setAttribute('id', 'smo69030');
smo69050v0ar.push(smo69030);
const smo69031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69031.setAttribute('id', 'smo69031');
smo69050v0ar.push(smo69031);
const smo69032 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69032.setAttribute('id', 'smo69032');
smo69050v0ar.push(smo69032);
smo69050v0.addTickables(smo69050v0ar)
fmtsmo6905020.joinVoices([smo69050v0]);
const smo69050v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69050v1ar = [];
const smo69033 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69033.setAttribute('id', 'smo69033');
smo69033.setStyle({ fillStyle: '#aaaaaa7f' });
smo69050v1ar.push(smo69033);
const smo69034 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69034.setAttribute('id', 'smo69034');
smo69034.setStyle({ fillStyle: '#aaaaaa7f' });
smo69034.addModifier(new VF.Dot(), 0);
smo69034.addModifier(new VF.Dot(), 0);
smo69050v1ar.push(smo69034);
const smo69035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69035.setAttribute('id', 'smo69035');
smo69035.setStyle({ fillStyle: '#aaaaaa7f' });
smo69050v1ar.push(smo69035);
const smo69036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69036.setAttribute('id', 'smo69036');
smo69036.setStyle({ fillStyle: '#aaaaaa7f' });
smo69036.addModifier(new VF.Dot(), 0);
smo69036.addModifier(new VF.Dot(), 0);
smo69050v1ar.push(smo69036);
smo69050v1.addTickables(smo69050v1ar)
fmtsmo6905020.joinVoices([smo69050v1]);
const fmtsmo7429520 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo74295v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74295v0ar = [];
const smo74274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo74274.setAttribute('id', 'smo74274');
smo74295v0ar.push(smo74274);
const smo74275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo74275.setAttribute('id', 'smo74275');
smo74275.addModifier(new VF.Dot(), 0);
smo74295v0ar.push(smo74275);
const smo74276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo74276.setAttribute('id', 'smo74276');
smo74295v0ar.push(smo74276);
const smo74277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo74277.setAttribute('id', 'smo74277');
smo74295v0ar.push(smo74277);
const smo74278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo74278.setAttribute('id', 'smo74278');
smo74278.addModifier(new VF.Dot(), 0);
smo74295v0ar.push(smo74278);
const smo74279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo74279.setAttribute('id', 'smo74279');
smo74295v0ar.push(smo74279);
smo74295v0.addTickables(smo74295v0ar)
fmtsmo7429520.joinVoices([smo74295v0]);
const smo74295v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74295v1ar = [];
const smo74280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n"]}'))
smo74280.setAttribute('id', 'smo74280');
smo74280.setStyle({ fillStyle: "#115511" });
smo74295v1ar.push(smo74280);
const smo74281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n"]}'))
smo74281.setAttribute('id', 'smo74281');
smo74281.setStyle({ fillStyle: "#115511" });
smo74295v1ar.push(smo74281);
smo74295v1.addTickables(smo74295v1ar)
fmtsmo7429520.joinVoices([smo74295v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo77978 = smo69020.getStemDirection();
smo69020.setStemDirection(dirsmo77978);
smo69021.setStemDirection(dirsmo77978);
const smo77978 = new VF.Beam([smo69020,smo69021]);
const dirsmo77979 = smo69022.getStemDirection();
smo69022.setStemDirection(dirsmo77979);
smo69023.setStemDirection(dirsmo77979);
smo69024.setStemDirection(dirsmo77979);
smo69025.setStemDirection(dirsmo77979);
const smo77979 = new VF.Beam([smo69022,smo69023,smo69024,smo69025]);
const dirsmo77980 = smo69027.getStemDirection();
smo69027.setStemDirection(dirsmo77980);
smo69028.setStemDirection(dirsmo77980);
const smo77980 = new VF.Beam([smo69027,smo69028]);
const dirsmo77981 = smo69029.getStemDirection();
smo69029.setStemDirection(dirsmo77981);
smo69030.setStemDirection(dirsmo77981);
smo69031.setStemDirection(dirsmo77981);
smo69032.setStemDirection(dirsmo77981);
const smo77981 = new VF.Beam([smo69029,smo69030,smo69031,smo69032]);
 
// formatting measures in staff group smo67190
fmtsmo6905020.format([smo69050v0,smo69050v1,smo74295v0,smo74295v1], 529);
const stavesmo69050 = new VF.Stave(1266, 2049, 543);
stavesmo69050.setAttribute('id', 'stavesmo69050');
stavesmo69050.setBegBarType(VF.Barline.type.NONE);
stavesmo69050.setContext(context);
stavesmo69050.draw();
smo69050v0.draw(context, stavesmo69050);
smo69050v1.draw(context, stavesmo69050);
smo77978.setContext(context);
smo77978.draw();
smo77979.setContext(context);
smo77979.draw();
smo77980.setContext(context);
smo77980.draw();
smo77981.setContext(context);
smo77981.draw();
const stavesmo74295 = new VF.Stave(1266, 2136, 543);
stavesmo74295.setAttribute('id', 'stavesmo74295');
stavesmo74295.setBegBarType(VF.Barline.type.NONE);
stavesmo74295.setContext(context);
stavesmo74295.draw();
smo74295v0.draw(context, stavesmo74295);
smo74295v1.draw(context, stavesmo74295);
const rightsmo67190stavesmo690501 = new VF.StaveConnector(stavesmo69050, stavesmo74295).setType(0);
rightsmo67190stavesmo690501.setContext(context).draw();
// modifier from 1-0-0-1 to 1-0-0-2
const smo80207 = new VF.StaveTie({ first_note: smo73835, last_note: smo73836, 
          firstNote: smo73835, lastNote: smo73836, first_indices: [0], last_indices: [0]});
smo80207.setContext(context).draw();
// modifier from 1-0-0-4 to 1-0-0-5
const smo80208 = new VF.StaveTie({ first_note: smo73838, last_note: smo73839, 
          firstNote: smo73838, lastNote: smo73839, first_indices: [0], last_indices: [0]});
smo80208.setContext(context).draw();
// modifier from 1-1-0-1 to 1-1-0-2
const smo80209 = new VF.StaveTie({ first_note: smo73857, last_note: smo73858, 
          firstNote: smo73857, lastNote: smo73858, first_indices: [0], last_indices: [0]});
smo80209.setContext(context).draw();
// modifier from 1-1-0-4 to 1-1-0-5
const smo80210 = new VF.StaveTie({ first_note: smo73860, last_note: smo73861, 
          firstNote: smo73860, lastNote: smo73861, first_indices: [0], last_indices: [0]});
smo80210.setContext(context).draw();
// modifier from 1-2-0-1 to 1-2-0-2
const smo80211 = new VF.StaveTie({ first_note: smo73879, last_note: smo73880, 
          firstNote: smo73879, lastNote: smo73880, first_indices: [0], last_indices: [0]});
smo80211.setContext(context).draw();
// modifier from 1-2-0-4 to 1-2-0-5
const smo80212 = new VF.StaveTie({ first_note: smo73882, last_note: smo73883, 
          firstNote: smo73882, lastNote: smo73883, first_indices: [0], last_indices: [0]});
smo80212.setContext(context).draw();
// modifier from 1-3-0-1 to 1-3-0-2
const smo80213 = new VF.StaveTie({ first_note: smo73901, last_note: smo73902, 
          firstNote: smo73901, lastNote: smo73902, first_indices: [0], last_indices: [0]});
smo80213.setContext(context).draw();
// modifier from 1-3-0-4 to 1-3-0-5
const smo80214 = new VF.StaveTie({ first_note: smo73904, last_note: smo73905, 
          firstNote: smo73904, lastNote: smo73905, first_indices: [0], last_indices: [0]});
smo80214.setContext(context).draw();
// modifier from 1-4-0-1 to 1-4-0-2
const smo80215 = new VF.StaveTie({ first_note: smo73923, last_note: smo73924, 
          firstNote: smo73923, lastNote: smo73924, first_indices: [0], last_indices: [0]});
smo80215.setContext(context).draw();
// modifier from 1-4-0-4 to 1-4-0-5
const smo80216 = new VF.StaveTie({ first_note: smo73926, last_note: smo73927, 
          firstNote: smo73926, lastNote: smo73927, first_indices: [0], last_indices: [0]});
smo80216.setContext(context).draw();
// modifier from 1-5-0-1 to 1-5-0-2
const smo80217 = new VF.StaveTie({ first_note: smo73945, last_note: smo73946, 
          firstNote: smo73945, lastNote: smo73946, first_indices: [0], last_indices: [0]});
smo80217.setContext(context).draw();
// modifier from 1-5-0-4 to 1-5-0-5
const smo80218 = new VF.StaveTie({ first_note: smo73948, last_note: smo73949, 
          firstNote: smo73948, lastNote: smo73949, first_indices: [0], last_indices: [0]});
smo80218.setContext(context).draw();
// modifier from 1-6-0-1 to 1-6-0-2
const smo80219 = new VF.StaveTie({ first_note: smo73967, last_note: smo73968, 
          firstNote: smo73967, lastNote: smo73968, first_indices: [0], last_indices: [0]});
smo80219.setContext(context).draw();
// modifier from 1-6-0-4 to 1-6-0-5
const smo80220 = new VF.StaveTie({ first_note: smo73970, last_note: smo73971, 
          firstNote: smo73970, lastNote: smo73971, first_indices: [0], last_indices: [0]});
smo80220.setContext(context).draw();
// modifier from 1-7-0-1 to 1-7-0-2
const smo80221 = new VF.StaveTie({ first_note: smo73989, last_note: smo73990, 
          firstNote: smo73989, lastNote: smo73990, first_indices: [0], last_indices: [0]});
smo80221.setContext(context).draw();
// modifier from 1-7-0-4 to 1-7-0-5
const smo80222 = new VF.StaveTie({ first_note: smo73992, last_note: smo73993, 
          firstNote: smo73992, lastNote: smo73993, first_indices: [0], last_indices: [0]});
smo80222.setContext(context).draw();
// modifier from 1-8-0-1 to 1-8-0-2
const smo80223 = new VF.StaveTie({ first_note: smo74011, last_note: smo74012, 
          firstNote: smo74011, lastNote: smo74012, first_indices: [0], last_indices: [0]});
smo80223.setContext(context).draw();
// modifier from 1-8-0-4 to 1-8-0-5
const smo80224 = new VF.StaveTie({ first_note: smo74014, last_note: smo74015, 
          firstNote: smo74014, lastNote: smo74015, first_indices: [0], last_indices: [0]});
smo80224.setContext(context).draw();
// modifier from 1-9-0-1 to 1-9-0-2
const smo80225 = new VF.StaveTie({ first_note: smo74033, last_note: smo74034, 
          firstNote: smo74033, lastNote: smo74034, first_indices: [0], last_indices: [0]});
smo80225.setContext(context).draw();
// modifier from 1-9-0-4 to 1-9-0-5
const smo80226 = new VF.StaveTie({ first_note: smo74036, last_note: smo74037, 
          firstNote: smo74036, lastNote: smo74037, first_indices: [0], last_indices: [0]});
smo80226.setContext(context).draw();
// modifier from 1-10-0-1 to 1-10-0-2
const smo80227 = new VF.StaveTie({ first_note: smo74055, last_note: smo74056, 
          firstNote: smo74055, lastNote: smo74056, first_indices: [0], last_indices: [0]});
smo80227.setContext(context).draw();
// modifier from 1-10-0-4 to 1-10-0-5
const smo80228 = new VF.StaveTie({ first_note: smo74058, last_note: smo74059, 
          firstNote: smo74058, lastNote: smo74059, first_indices: [0], last_indices: [0]});
smo80228.setContext(context).draw();
// modifier from 1-11-0-1 to 1-11-0-2
const smo80229 = new VF.StaveTie({ first_note: smo74077, last_note: smo74078, 
          firstNote: smo74077, lastNote: smo74078, first_indices: [0], last_indices: [0]});
smo80229.setContext(context).draw();
// modifier from 1-11-0-4 to 1-11-0-5
const smo80230 = new VF.StaveTie({ first_note: smo74080, last_note: smo74081, 
          firstNote: smo74080, lastNote: smo74081, first_indices: [0], last_indices: [0]});
smo80230.setContext(context).draw();
// modifier from 1-12-0-1 to 1-12-0-2
const smo80231 = new VF.StaveTie({ first_note: smo74099, last_note: smo74100, 
          firstNote: smo74099, lastNote: smo74100, first_indices: [0], last_indices: [0]});
smo80231.setContext(context).draw();
// modifier from 1-12-0-4 to 1-12-0-5
const smo80232 = new VF.StaveTie({ first_note: smo74102, last_note: smo74103, 
          firstNote: smo74102, lastNote: smo74103, first_indices: [0], last_indices: [0]});
smo80232.setContext(context).draw();
// modifier from 1-13-0-1 to 1-13-0-2
const smo80233 = new VF.StaveTie({ first_note: smo74121, last_note: smo74122, 
          firstNote: smo74121, lastNote: smo74122, first_indices: [0], last_indices: [0]});
smo80233.setContext(context).draw();
// modifier from 1-13-0-4 to 1-13-0-5
const smo80234 = new VF.StaveTie({ first_note: smo74124, last_note: smo74125, 
          firstNote: smo74124, lastNote: smo74125, first_indices: [0], last_indices: [0]});
smo80234.setContext(context).draw();
// modifier from 1-14-0-1 to 1-14-0-2
const smo80235 = new VF.StaveTie({ first_note: smo74143, last_note: smo74144, 
          firstNote: smo74143, lastNote: smo74144, first_indices: [0], last_indices: [0]});
smo80235.setContext(context).draw();
// modifier from 1-14-0-4 to 1-14-0-5
const smo80236 = new VF.StaveTie({ first_note: smo74146, last_note: smo74147, 
          firstNote: smo74146, lastNote: smo74147, first_indices: [0], last_indices: [0]});
smo80236.setContext(context).draw();
// modifier from 1-15-0-1 to 1-15-0-2
const smo80237 = new VF.StaveTie({ first_note: smo74165, last_note: smo74166, 
          firstNote: smo74165, lastNote: smo74166, first_indices: [0], last_indices: [0]});
smo80237.setContext(context).draw();
// modifier from 1-15-0-4 to 1-15-0-5
const smo80238 = new VF.StaveTie({ first_note: smo74168, last_note: smo74169, 
          firstNote: smo74168, lastNote: smo74169, first_indices: [0], last_indices: [0]});
smo80238.setContext(context).draw();
// modifier from 1-16-0-1 to 1-16-0-2
const smo80239 = new VF.StaveTie({ first_note: smo74187, last_note: smo74188, 
          firstNote: smo74187, lastNote: smo74188, first_indices: [0], last_indices: [0]});
smo80239.setContext(context).draw();
// modifier from 1-16-0-4 to 1-16-0-5
const smo80240 = new VF.StaveTie({ first_note: smo74190, last_note: smo74191, 
          firstNote: smo74190, lastNote: smo74191, first_indices: [0], last_indices: [0]});
smo80240.setContext(context).draw();
// modifier from 1-17-0-1 to 1-17-0-2
const smo80241 = new VF.StaveTie({ first_note: smo74209, last_note: smo74210, 
          firstNote: smo74209, lastNote: smo74210, first_indices: [0], last_indices: [0]});
smo80241.setContext(context).draw();
// modifier from 1-17-0-4 to 1-17-0-5
const smo80242 = new VF.StaveTie({ first_note: smo74212, last_note: smo74213, 
          firstNote: smo74212, lastNote: smo74213, first_indices: [0], last_indices: [0]});
smo80242.setContext(context).draw();
// modifier from 1-18-0-1 to 1-18-0-2
const smo80243 = new VF.StaveTie({ first_note: smo74231, last_note: smo74232, 
          firstNote: smo74231, lastNote: smo74232, first_indices: [0], last_indices: [0]});
smo80243.setContext(context).draw();
// modifier from 1-18-0-4 to 1-18-0-5
const smo80244 = new VF.StaveTie({ first_note: smo74234, last_note: smo74235, 
          firstNote: smo74234, lastNote: smo74235, first_indices: [0], last_indices: [0]});
smo80244.setContext(context).draw();
// modifier from 1-19-0-1 to 1-19-0-2
const smo80245 = new VF.StaveTie({ first_note: smo74253, last_note: smo74254, 
          firstNote: smo74253, lastNote: smo74254, first_indices: [0], last_indices: [0]});
smo80245.setContext(context).draw();
// modifier from 1-19-0-4 to 1-19-0-5
const smo80246 = new VF.StaveTie({ first_note: smo74256, last_note: smo74257, 
          firstNote: smo74256, lastNote: smo74257, first_indices: [0], last_indices: [0]});
smo80246.setContext(context).draw();
// modifier from 1-20-0-1 to 1-20-0-2
const smo80247 = new VF.StaveTie({ first_note: smo74275, last_note: smo74276, 
          firstNote: smo74275, lastNote: smo74276, first_indices: [0], last_indices: [0]});
smo80247.setContext(context).draw();
// modifier from 1-20-0-4 to 1-20-0-5
const smo80248 = new VF.StaveTie({ first_note: smo74278, last_note: smo74279, 
          firstNote: smo74278, lastNote: smo74279, first_indices: [0], last_indices: [0]});
smo80248.setContext(context).draw();
}
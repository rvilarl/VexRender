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
const fmtsmo36239160 = new VF.Formatter();
//
// voices and notes for stave 0 60
const smo362391v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362391v0ar = [];
const smo362368 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo362368'] = smo362368;
smo362368.setAttribute('id', 'smo362368');
const smo3623680acc = new VF.Accidental('n');
smo362368.addModifier(smo3623680acc, 0);
smo362391v0ar.push(smo362368);
const smo362369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/5/n"]}'))
noteHash['smo362369'] = smo362369;
smo362369.setAttribute('id', 'smo362369');
const smo3623690acc = new VF.Accidental('b');
smo362369.addModifier(smo3623690acc, 0);
smo362391v0ar.push(smo362369);
const smo362370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
noteHash['smo362370'] = smo362370;
smo362370.setAttribute('id', 'smo362370');
const smo3623700acc = new VF.Accidental('n');
smo362370.addModifier(smo3623700acc, 0);
smo362391v0ar.push(smo362370);
const smo362371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/6/n"]}'))
noteHash['smo362371'] = smo362371;
smo362371.setAttribute('id', 'smo362371');
const smo3623710acc = new VF.Accidental('n');
smo362371.addModifier(smo3623710acc, 0);
smo362391v0ar.push(smo362371);
const smo362372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/6/n"]}'))
noteHash['smo362372'] = smo362372;
smo362372.setAttribute('id', 'smo362372');
smo362391v0ar.push(smo362372);
const smo362373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
noteHash['smo362373'] = smo362373;
smo362373.setAttribute('id', 'smo362373');
smo362391v0ar.push(smo362373);
const smo362374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
noteHash['smo362374'] = smo362374;
smo362374.setAttribute('id', 'smo362374');
smo362391v0ar.push(smo362374);
const smo362375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
noteHash['smo362375'] = smo362375;
smo362375.setAttribute('id', 'smo362375');
smo362391v0ar.push(smo362375);
smo362391v0.addTickables(smo362391v0ar)
fmtsmo36239160.joinVoices([smo362391v0]);
const fmtsmo36439960 = new VF.Formatter();
//
// voices and notes for stave 1 60
const smo364399v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364399v0ar = [];
const smo364380 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo364380'] = smo364380;
smo364380.setAttribute('id', 'smo364380');
const smo3643800acc = new VF.Accidental('n');
smo364380.addModifier(smo3643800acc, 0);
smo364399v0ar.push(smo364380);
const smo364381 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n","dn/4/n","en/4/n"]}'))
noteHash['smo364381'] = smo364381;
smo364381.setAttribute('id', 'smo364381');
const smo3643810acc = new VF.Accidental('n');
smo364381.addModifier(smo3643810acc, 0);
const smo3643812acc = new VF.Accidental('n');
smo364381.addModifier(smo3643812acc, 2);
smo364399v0ar.push(smo364381);
const smo364382 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n"]}'))
noteHash['smo364382'] = smo364382;
smo364382.setAttribute('id', 'smo364382');
const smo3643820acc = new VF.Accidental('b');
smo364382.addModifier(smo3643820acc, 0);
smo364399v0ar.push(smo364382);
const smo364383 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n","dn/4/n","en/4/n"]}'))
noteHash['smo364383'] = smo364383;
smo364383.setAttribute('id', 'smo364383');
smo364399v0ar.push(smo364383);
smo364399v0.addTickables(smo364399v0ar)
fmtsmo36439960.joinVoices([smo364399v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386380 = smo362368.getStemDirection();
smo362368.setStemDirection(dirsmo386380);
smo362369.setStemDirection(dirsmo386380);
smo362370.setStemDirection(dirsmo386380);
smo362371.setStemDirection(dirsmo386380);
const smo386380 = new VF.Beam([smo362368,smo362369,smo362370,smo362371]);
const dirsmo386381 = smo362372.getStemDirection();
smo362372.setStemDirection(dirsmo386381);
smo362373.setStemDirection(dirsmo386381);
smo362374.setStemDirection(dirsmo386381);
smo362375.setStemDirection(dirsmo386381);
const smo386381 = new VF.Beam([smo362372,smo362373,smo362374,smo362375]);
const dirsmo386384 = smo364380.getStemDirection();
smo364380.setStemDirection(dirsmo386384);
smo364381.setStemDirection(dirsmo386384);
const smo386384 = new VF.Beam([smo364380,smo364381]);
const dirsmo386385 = smo364382.getStemDirection();
smo364382.setStemDirection(dirsmo386385);
smo364383.setStemDirection(dirsmo386385);
const smo386385 = new VF.Beam([smo364382,smo364383]);
 
// formatting measures in staff group smo365028
fmtsmo36239160.format([smo362391v0,smo364399v0], 242);
const stavesmo362391 = new VF.Stave(73, 396, 328);
stavesmo362391.setAttribute('id', 'stavesmo362391');
stavesmo362391.setBegBarType(1);
stavesmo362391.addClef('treble');
const keysmo362391 = new VF.KeySignature('Bb');
keysmo362391.addToStave(stavesmo362391);
stavesmo362391.setContext(context);
stavesmo362391.draw();
smo362391v0.draw(context, stavesmo362391);
smo386380.setContext(context);
smo386380.draw();
smo386381.setContext(context);
smo386381.draw();
const stavesmo364399 = new VF.Stave(73, 556, 328);
stavesmo364399.setAttribute('id', 'stavesmo364399');
stavesmo364399.setBegBarType(1);
stavesmo364399.addClef('bass');
const keysmo364399 = new VF.KeySignature('Bb');
keysmo364399.addToStave(stavesmo364399);
stavesmo364399.setContext(context);
stavesmo364399.draw();
smo364399v0.draw(context, stavesmo364399);
smo386384.setContext(context);
smo386384.draw();
smo386385.setContext(context);
smo386385.draw();
const leftsmo365028stavesmo3623911 = new VF.StaveConnector(stavesmo362391, stavesmo364399).setType(3);
leftsmo365028stavesmo3623911.setContext(context).draw();
const fmtsmo36240961 = new VF.Formatter();
//
// voices and notes for stave 0 61
const smo362409v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362409v0ar = [];
const smo362392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo362392'] = smo362392;
smo362392.setAttribute('id', 'smo362392');
smo362409v0ar.push(smo362392);
const smo362393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
noteHash['smo362393'] = smo362393;
smo362393.setAttribute('id', 'smo362393');
smo362409v0ar.push(smo362393);
smo362409v0.addTickables(smo362409v0ar)
fmtsmo36240961.joinVoices([smo362409v0]);
const fmtsmo36441861 = new VF.Formatter();
//
// voices and notes for stave 1 61
const smo364418v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364418v0ar = [];
const smo364400 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo364400'] = smo364400;
smo364400.setAttribute('id', 'smo364400');
const smo3644002acc = new VF.Accidental('n');
smo364400.addModifier(smo3644002acc, 2);
smo364418v0ar.push(smo364400);
const smo364401 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo364401'] = smo364401;
smo364401.setAttribute('id', 'smo364401');
smo364418v0ar.push(smo364401);
const smo364402 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo364402'] = smo364402;
smo364402.setAttribute('id', 'smo364402');
smo364418v0ar.push(smo364402);
smo364418v0.addTickables(smo364418v0ar)
fmtsmo36441861.joinVoices([smo364418v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386390 = smo364401.getStemDirection();
smo364401.setStemDirection(dirsmo386390);
smo364402.setStemDirection(dirsmo386390);
const smo386390 = new VF.Beam([smo364401,smo364402]);
 
// formatting measures in staff group smo365028
fmtsmo36240961.format([smo362409v0,smo364418v0], 274);
const stavesmo362409 = new VF.Stave(401, 396, 288);
stavesmo362409.setAttribute('id', 'stavesmo362409');
stavesmo362409.setBegBarType(VF.Barline.type.NONE);
stavesmo362409.setContext(context);
stavesmo362409.draw();
smo362409v0.draw(context, stavesmo362409);
const stavesmo364418 = new VF.Stave(401, 556, 288);
stavesmo364418.setAttribute('id', 'stavesmo364418');
stavesmo364418.setBegBarType(VF.Barline.type.NONE);
stavesmo364418.setContext(context);
stavesmo364418.draw();
smo364418v0.draw(context, stavesmo364418);
smo386390.setContext(context);
smo386390.draw();
const fmtsmo36243062 = new VF.Formatter();
//
// voices and notes for stave 0 62
const smo362430v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362430v0ar = [];
const smo362410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n"]}'))
noteHash['smo362410'] = smo362410;
smo362410.setAttribute('id', 'smo362410');
smo362430v0ar.push(smo362410);
const smo362411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/5/n"]}'))
noteHash['smo362411'] = smo362411;
smo362411.setAttribute('id', 'smo362411');
const smo3624110acc = new VF.Accidental('b');
smo362411.addModifier(smo3624110acc, 0);
smo362430v0ar.push(smo362411);
const smo362412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n"]}'))
noteHash['smo362412'] = smo362412;
smo362412.setAttribute('id', 'smo362412');
const smo3624121acc = new VF.Accidental('n');
smo362412.addModifier(smo3624121acc, 1);
smo362430v0ar.push(smo362412);
const smo362413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n"]}'))
noteHash['smo362413'] = smo362413;
smo362413.setAttribute('id', 'smo362413');
smo362430v0ar.push(smo362413);
const smo362414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n","cn/6/n"]}'))
noteHash['smo362414'] = smo362414;
smo362414.setAttribute('id', 'smo362414');
smo362430v0ar.push(smo362414);
smo362430v0.addTickables(smo362430v0ar)
fmtsmo36243062.joinVoices([smo362430v0]);
const fmtsmo36443862 = new VF.Formatter();
//
// voices and notes for stave 1 62
const smo364438v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364438v0ar = [];
const smo364419 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
noteHash['smo364419'] = smo364419;
smo364419.setAttribute('id', 'smo364419');
smo364438v0ar.push(smo364419);
const smo364420 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo364420'] = smo364420;
smo364420.setAttribute('id', 'smo364420');
smo364438v0ar.push(smo364420);
const smo364421 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo364421'] = smo364421;
smo364421.setAttribute('id', 'smo364421');
smo364438v0ar.push(smo364421);
const smo364422 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo364422'] = smo364422;
smo364422.setAttribute('id', 'smo364422');
smo364438v0ar.push(smo364422);
smo364438v0.addTickables(smo364438v0ar)
fmtsmo36443862.joinVoices([smo364438v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386393 = smo362410.getStemDirection();
smo362410.setStemDirection(dirsmo386393);
smo362411.setStemDirection(dirsmo386393);
smo362412.setStemDirection(dirsmo386393);
const smo386393 = new VF.Beam([smo362410,smo362411,smo362412]);
const dirsmo386394 = smo362413.getStemDirection();
smo362413.setStemDirection(dirsmo386394);
smo362414.setStemDirection(dirsmo386394);
const smo386394 = new VF.Beam([smo362413,smo362414]);
const dirsmo386397 = smo364419.getStemDirection();
smo364419.setStemDirection(dirsmo386397);
smo364420.setStemDirection(dirsmo386397);
const smo386397 = new VF.Beam([smo364419,smo364420]);
const dirsmo386398 = smo364421.getStemDirection();
smo364421.setStemDirection(dirsmo386398);
smo364422.setStemDirection(dirsmo386398);
const smo386398 = new VF.Beam([smo364421,smo364422]);
 
// formatting measures in staff group smo365028
fmtsmo36243062.format([smo362430v0,smo364438v0], 274);
const stavesmo362430 = new VF.Stave(689, 396, 288);
stavesmo362430.setAttribute('id', 'stavesmo362430');
stavesmo362430.setBegBarType(VF.Barline.type.NONE);
stavesmo362430.setContext(context);
stavesmo362430.draw();
smo362430v0.draw(context, stavesmo362430);
smo386393.setContext(context);
smo386393.draw();
smo386394.setContext(context);
smo386394.draw();
const stavesmo364438 = new VF.Stave(689, 556, 288);
stavesmo364438.setAttribute('id', 'stavesmo364438');
stavesmo364438.setBegBarType(VF.Barline.type.NONE);
stavesmo364438.setContext(context);
stavesmo364438.draw();
smo364438v0.draw(context, stavesmo364438);
smo386397.setContext(context);
smo386397.draw();
smo386398.setContext(context);
smo386398.draw();
const fmtsmo36245363 = new VF.Formatter();
//
// voices and notes for stave 0 63
const smo362453v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362453v0ar = [];
const smo362431 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","bb/5/n","dn/6/n"]}'))
noteHash['smo362431'] = smo362431;
smo362431.setAttribute('id', 'smo362431');
smo362453v0ar.push(smo362431);
smo362453v0.addTickables(smo362453v0ar)
fmtsmo36245363.joinVoices([smo362453v0]);
const smo362453v1 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362453v1ar = [];
const smo362432 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo362432'] = smo362432;
smo362432.setAttribute('id', 'smo362432');
smo362453v1ar.push(smo362432);
const smo362433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo362433'] = smo362433;
smo362433.setAttribute('id', 'smo362433');
smo362453v1ar.push(smo362433);
const smo362434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo362434'] = smo362434;
smo362434.setAttribute('id', 'smo362434');
smo362453v1ar.push(smo362434);
const smo362435 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo362435'] = smo362435;
smo362435.setAttribute('id', 'smo362435');
smo362453v1ar.push(smo362435);
const smo362436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo362436'] = smo362436;
smo362436.setAttribute('id', 'smo362436');
smo362453v1ar.push(smo362436);
const smo362437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo362437'] = smo362437;
smo362437.setAttribute('id', 'smo362437');
smo362453v1ar.push(smo362437);
smo362453v1.addTickables(smo362453v1ar)
fmtsmo36245363.joinVoices([smo362453v1]);
const fmtsmo36445863 = new VF.Formatter();
//
// voices and notes for stave 1 63
const smo364458v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364458v0ar = [];
const smo364439 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n"]}'))
noteHash['smo364439'] = smo364439;
smo364439.setAttribute('id', 'smo364439');
smo364458v0ar.push(smo364439);
const smo364440 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo364440'] = smo364440;
smo364440.setAttribute('id', 'smo364440');
smo364458v0ar.push(smo364440);
const smo364441 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo364441'] = smo364441;
smo364441.setAttribute('id', 'smo364441');
smo364458v0ar.push(smo364441);
const smo364442 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo364442'] = smo364442;
smo364442.setAttribute('id', 'smo364442');
smo364458v0ar.push(smo364442);
smo364458v0.addTickables(smo364458v0ar)
fmtsmo36445863.joinVoices([smo364458v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386401 = smo362433.getStemDirection();
smo362433.setStemDirection(dirsmo386401);
smo362434.setStemDirection(dirsmo386401);
const smo386401 = new VF.Beam([smo362433,smo362434]);
const dirsmo386402 = smo362435.getStemDirection();
smo362435.setStemDirection(dirsmo386402);
smo362436.setStemDirection(dirsmo386402);
smo362437.setStemDirection(dirsmo386402);
const smo386402 = new VF.Beam([smo362435,smo362436,smo362437]);
const dirsmo386405 = smo364439.getStemDirection();
smo364439.setStemDirection(dirsmo386405);
smo364440.setStemDirection(dirsmo386405);
const smo386405 = new VF.Beam([smo364439,smo364440]);
const dirsmo386406 = smo364441.getStemDirection();
smo364441.setStemDirection(dirsmo386406);
smo364442.setStemDirection(dirsmo386406);
const smo386406 = new VF.Beam([smo364441,smo364442]);
 
// formatting measures in staff group smo365028
fmtsmo36245363.format([smo362453v0,smo362453v1,smo364458v0], 274);
const stavesmo362453 = new VF.Stave(977, 396, 288);
stavesmo362453.setAttribute('id', 'stavesmo362453');
stavesmo362453.setBegBarType(VF.Barline.type.NONE);
stavesmo362453.setContext(context);
stavesmo362453.draw();
smo362453v0.draw(context, stavesmo362453);
smo362453v1.draw(context, stavesmo362453);
smo386401.setContext(context);
smo386401.draw();
smo386402.setContext(context);
smo386402.draw();
const stavesmo364458 = new VF.Stave(977, 556, 288);
stavesmo364458.setAttribute('id', 'stavesmo364458');
stavesmo364458.setBegBarType(VF.Barline.type.NONE);
stavesmo364458.setContext(context);
stavesmo364458.draw();
smo364458v0.draw(context, stavesmo364458);
smo386405.setContext(context);
smo386405.draw();
smo386406.setContext(context);
smo386406.draw();
const fmtsmo36247464 = new VF.Formatter();
//
// voices and notes for stave 0 64
const smo362474v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362474v0ar = [];
const smo362454 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n"]}'))
noteHash['smo362454'] = smo362454;
smo362454.setAttribute('id', 'smo362454');
smo362474v0ar.push(smo362454);
const smo362455 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo362455'] = smo362455;
smo362455.setAttribute('id', 'smo362455');
const smo3624550acc = new VF.Accidental('n');
smo362455.addModifier(smo3624550acc, 0);
smo362474v0ar.push(smo362455);
const smo362456 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n"]}'))
noteHash['smo362456'] = smo362456;
smo362456.setAttribute('id', 'smo362456');
smo362474v0ar.push(smo362456);
const smo362457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n"]}'))
noteHash['smo362457'] = smo362457;
smo362457.setAttribute('id', 'smo362457');
smo362474v0ar.push(smo362457);
const smo362458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","an/5/n"]}'))
noteHash['smo362458'] = smo362458;
smo362458.setAttribute('id', 'smo362458');
smo362474v0ar.push(smo362458);
smo362474v0.addTickables(smo362474v0ar)
fmtsmo36247464.joinVoices([smo362474v0]);
const fmtsmo36447864 = new VF.Formatter();
//
// voices and notes for stave 1 64
const smo364478v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364478v0ar = [];
const smo364459 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
noteHash['smo364459'] = smo364459;
smo364459.setAttribute('id', 'smo364459');
smo364478v0ar.push(smo364459);
const smo364460 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo364460'] = smo364460;
smo364460.setAttribute('id', 'smo364460');
smo364478v0ar.push(smo364460);
const smo364461 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo364461'] = smo364461;
smo364461.setAttribute('id', 'smo364461');
smo364478v0ar.push(smo364461);
const smo364462 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo364462'] = smo364462;
smo364462.setAttribute('id', 'smo364462');
smo364478v0ar.push(smo364462);
smo364478v0.addTickables(smo364478v0ar)
fmtsmo36447864.joinVoices([smo364478v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386409 = smo362454.getStemDirection();
smo362454.setStemDirection(dirsmo386409);
smo362455.setStemDirection(dirsmo386409);
smo362456.setStemDirection(dirsmo386409);
const smo386409 = new VF.Beam([smo362454,smo362455,smo362456]);
const dirsmo386410 = smo362457.getStemDirection();
smo362457.setStemDirection(dirsmo386410);
smo362458.setStemDirection(dirsmo386410);
const smo386410 = new VF.Beam([smo362457,smo362458]);
const dirsmo386413 = smo364459.getStemDirection();
smo364459.setStemDirection(dirsmo386413);
smo364460.setStemDirection(dirsmo386413);
const smo386413 = new VF.Beam([smo364459,smo364460]);
const dirsmo386414 = smo364461.getStemDirection();
smo364461.setStemDirection(dirsmo386414);
smo364462.setStemDirection(dirsmo386414);
const smo386414 = new VF.Beam([smo364461,smo364462]);
 
// formatting measures in staff group smo365028
fmtsmo36247464.format([smo362474v0,smo364478v0], 274);
const stavesmo362474 = new VF.Stave(1265, 396, 288);
stavesmo362474.setAttribute('id', 'stavesmo362474');
stavesmo362474.setBegBarType(VF.Barline.type.NONE);
stavesmo362474.setContext(context);
stavesmo362474.draw();
smo362474v0.draw(context, stavesmo362474);
smo386409.setContext(context);
smo386409.draw();
smo386410.setContext(context);
smo386410.draw();
const stavesmo364478 = new VF.Stave(1265, 556, 288);
stavesmo364478.setAttribute('id', 'stavesmo364478');
stavesmo364478.setBegBarType(VF.Barline.type.NONE);
stavesmo364478.setContext(context);
stavesmo364478.draw();
smo364478v0.draw(context, stavesmo364478);
smo386413.setContext(context);
smo386413.draw();
smo386414.setContext(context);
smo386414.draw();
const fmtsmo36249965 = new VF.Formatter();
//
// voices and notes for stave 0 65
const smo362499v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362499v0ar = [];
const smo362475 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","gn/5/n","bb/5/n"]}'))
noteHash['smo362475'] = smo362475;
smo362475.setAttribute('id', 'smo362475');
smo362499v0ar.push(smo362475);
const smo362476 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","gn/5/n","bb/5/n"]}'))
noteHash['smo362476'] = smo362476;
smo362476.setAttribute('id', 'smo362476');
smo362476.addModifier(new VF.Dot(), 0);
smo362476.addModifier(new VF.Dot(), 1);
smo362476.addModifier(new VF.Dot(), 2);
smo362499v0ar.push(smo362476);
const smo362477 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo362477'] = smo362477;
smo362477.setAttribute('id', 'smo362477');
smo362499v0ar.push(smo362477);
smo362499v0.addTickables(smo362499v0ar)
fmtsmo36249965.joinVoices([smo362499v0]);
const smo362499v1 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362499v1ar = [];
const smo362478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo362478'] = smo362478;
smo362478.setAttribute('id', 'smo362478');
smo362499v1ar.push(smo362478);
const smo362479 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo362479'] = smo362479;
smo362479.setAttribute('id', 'smo362479');
smo362499v1ar.push(smo362479);
const smo362480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n"]}'))
noteHash['smo362480'] = smo362480;
smo362480.setAttribute('id', 'smo362480');
const smo3624800acc = new VF.Accidental('b');
smo362480.addModifier(smo3624800acc, 0);
smo362499v1ar.push(smo362480);
const smo362481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo362481'] = smo362481;
smo362481.setAttribute('id', 'smo362481');
const smo3624810acc = new VF.Accidental('n');
smo362481.addModifier(smo3624810acc, 0);
smo362499v1ar.push(smo362481);
const smo362482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo362482'] = smo362482;
smo362482.setAttribute('id', 'smo362482');
smo362499v1ar.push(smo362482);
const smo362483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo362483'] = smo362483;
smo362483.setAttribute('id', 'smo362483');
smo362499v1ar.push(smo362483);
smo362499v1.addTickables(smo362499v1ar)
fmtsmo36249965.joinVoices([smo362499v1]);
const fmtsmo36449865 = new VF.Formatter();
//
// voices and notes for stave 1 65
const smo364498v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364498v0ar = [];
const smo364479 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo364479'] = smo364479;
smo364479.setAttribute('id', 'smo364479');
smo364498v0ar.push(smo364479);
const smo364480 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
noteHash['smo364480'] = smo364480;
smo364480.setAttribute('id', 'smo364480');
smo364498v0ar.push(smo364480);
const smo364481 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo364481'] = smo364481;
smo364481.setAttribute('id', 'smo364481');
smo364498v0ar.push(smo364481);
const smo364482 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
noteHash['smo364482'] = smo364482;
smo364482.setAttribute('id', 'smo364482');
smo364498v0ar.push(smo364482);
smo364498v0.addTickables(smo364498v0ar)
fmtsmo36449865.joinVoices([smo364498v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386417 = smo362476.getStemDirection();
smo362476.setStemDirection(dirsmo386417);
smo362477.setStemDirection(dirsmo386417);
const smo386417 = new VF.Beam([smo362476,smo362477]);
const dirsmo386418 = smo362479.getStemDirection();
smo362479.setStemDirection(dirsmo386418);
smo362480.setStemDirection(dirsmo386418);
const smo386418 = new VF.Beam([smo362479,smo362480]);
const dirsmo386419 = smo362481.getStemDirection();
smo362481.setStemDirection(dirsmo386419);
smo362482.setStemDirection(dirsmo386419);
smo362483.setStemDirection(dirsmo386419);
const smo386419 = new VF.Beam([smo362481,smo362482,smo362483]);
const dirsmo386422 = smo364479.getStemDirection();
smo364479.setStemDirection(dirsmo386422);
smo364480.setStemDirection(dirsmo386422);
const smo386422 = new VF.Beam([smo364479,smo364480]);
const dirsmo386423 = smo364481.getStemDirection();
smo364481.setStemDirection(dirsmo386423);
smo364482.setStemDirection(dirsmo386423);
const smo386423 = new VF.Beam([smo364481,smo364482]);
 
// formatting measures in staff group smo365028
fmtsmo36249965.format([smo362499v0,smo362499v1,smo364498v0], 274);
const stavesmo362499 = new VF.Stave(1553, 396, 288);
stavesmo362499.setAttribute('id', 'stavesmo362499');
stavesmo362499.setBegBarType(VF.Barline.type.NONE);
stavesmo362499.setContext(context);
stavesmo362499.draw();
smo362499v0.draw(context, stavesmo362499);
smo362499v1.draw(context, stavesmo362499);
smo386417.setContext(context);
smo386417.draw();
smo386418.setContext(context);
smo386418.draw();
smo386419.setContext(context);
smo386419.draw();
const stavesmo364498 = new VF.Stave(1553, 556, 288);
stavesmo364498.setAttribute('id', 'stavesmo364498');
stavesmo364498.setBegBarType(VF.Barline.type.NONE);
stavesmo364498.setContext(context);
stavesmo364498.draw();
smo364498v0.draw(context, stavesmo364498);
smo386422.setContext(context);
smo386422.draw();
smo386423.setContext(context);
smo386423.draw();
const rightsmo365028stavesmo3624991 = new VF.StaveConnector(stavesmo362499, stavesmo364498).setType(0);
rightsmo365028stavesmo3624991.setContext(context).draw();
const fmtsmo36252166 = new VF.Formatter();
//
// voices and notes for stave 0 66
const smo362521v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362521v0ar = [];
const smo362500 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo362500'] = smo362500;
smo362500.setAttribute('id', 'smo362500');
smo362521v0ar.push(smo362500);
const smo362501 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo362501'] = smo362501;
smo362501.setAttribute('id', 'smo362501');
smo362521v0ar.push(smo362501);
const smo362502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo362502'] = smo362502;
smo362502.setAttribute('id', 'smo362502');
smo362521v0ar.push(smo362502);
const smo362503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo362503'] = smo362503;
smo362503.setAttribute('id', 'smo362503');
smo362521v0ar.push(smo362503);
const smo362504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo362504'] = smo362504;
smo362504.setAttribute('id', 'smo362504');
smo362521v0ar.push(smo362504);
const smo362505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo362505'] = smo362505;
smo362505.setAttribute('id', 'smo362505');
smo362521v0ar.push(smo362505);
smo362521v0.addTickables(smo362521v0ar)
fmtsmo36252166.joinVoices([smo362521v0]);
const fmtsmo36451866 = new VF.Formatter();
//
// voices and notes for stave 1 66
const smo364518v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364518v0ar = [];
const smo364499 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
noteHash['smo364499'] = smo364499;
smo364499.setAttribute('id', 'smo364499');
smo364518v0ar.push(smo364499);
const smo364500 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
noteHash['smo364500'] = smo364500;
smo364500.setAttribute('id', 'smo364500');
smo364518v0ar.push(smo364500);
const smo364501 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo364501'] = smo364501;
smo364501.setAttribute('id', 'smo364501');
smo364518v0ar.push(smo364501);
const smo364502 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/2/n","ab/3/n"]}'))
noteHash['smo364502'] = smo364502;
smo364502.setAttribute('id', 'smo364502');
const smo3645020acc = new VF.Accidental('b');
smo364502.addModifier(smo3645020acc, 0);
const smo3645021acc = new VF.Accidental('b');
smo364502.addModifier(smo3645021acc, 1);
smo364518v0ar.push(smo364502);
smo364518v0.addTickables(smo364518v0ar)
fmtsmo36451866.joinVoices([smo364518v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386434 = smo362500.getStemDirection();
smo362500.setStemDirection(dirsmo386434);
smo362501.setStemDirection(dirsmo386434);
smo362502.setStemDirection(dirsmo386434);
const smo386434 = new VF.Beam([smo362500,smo362501,smo362502]);
const dirsmo386435 = smo362503.getStemDirection();
smo362503.setStemDirection(dirsmo386435);
smo362504.setStemDirection(dirsmo386435);
smo362505.setStemDirection(dirsmo386435);
const smo386435 = new VF.Beam([smo362503,smo362504,smo362505]);
const dirsmo386438 = smo364499.getStemDirection();
smo364499.setStemDirection(dirsmo386438);
smo364500.setStemDirection(dirsmo386438);
const smo386438 = new VF.Beam([smo364499,smo364500]);
const dirsmo386439 = smo364501.getStemDirection();
smo364501.setStemDirection(dirsmo386439);
smo364502.setStemDirection(dirsmo386439);
const smo386439 = new VF.Beam([smo364501,smo364502]);
 
// formatting measures in staff group smo365028
fmtsmo36252166.format([smo362521v0,smo364518v0], 209);
const stavesmo362521 = new VF.Stave(73, 763, 295);
stavesmo362521.setAttribute('id', 'stavesmo362521');
stavesmo362521.setBegBarType(1);
stavesmo362521.addClef('treble');
const keysmo362521 = new VF.KeySignature('Bb');
keysmo362521.addToStave(stavesmo362521);
stavesmo362521.setContext(context);
stavesmo362521.draw();
smo362521v0.draw(context, stavesmo362521);
smo386434.setContext(context);
smo386434.draw();
smo386435.setContext(context);
smo386435.draw();
const stavesmo364518 = new VF.Stave(73, 934, 295);
stavesmo364518.setAttribute('id', 'stavesmo364518');
stavesmo364518.setBegBarType(1);
stavesmo364518.addClef('bass');
const keysmo364518 = new VF.KeySignature('Bb');
keysmo364518.addToStave(stavesmo364518);
stavesmo364518.setContext(context);
stavesmo364518.draw();
smo364518v0.draw(context, stavesmo364518);
smo386438.setContext(context);
smo386438.draw();
smo386439.setContext(context);
smo386439.draw();
const leftsmo365028stavesmo3625211 = new VF.StaveConnector(stavesmo362521, stavesmo364518).setType(3);
leftsmo365028stavesmo3625211.setContext(context).draw();
const fmtsmo36254167 = new VF.Formatter();
//
// voices and notes for stave 0 67
const smo362541v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362541v0ar = [];
const smo362522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo362522'] = smo362522;
smo362522.setAttribute('id', 'smo362522');
smo362541v0ar.push(smo362522);
const smo362523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["ab/4/n","bn/4/n","fn/5/n"]}'))
noteHash['smo362523'] = smo362523;
smo362523.setAttribute('id', 'smo362523');
const smo3625230acc = new VF.Accidental('b');
smo362523.addModifier(smo3625230acc, 0);
const smo3625231acc = new VF.Accidental('n');
smo362523.addModifier(smo3625231acc, 1);
smo362523.addModifier(new VF.Dot(), 0);
smo362523.addModifier(new VF.Dot(), 1);
smo362523.addModifier(new VF.Dot(), 2);
smo362541v0ar.push(smo362523);
const smo362525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo362525'] = smo362525;
smo362525.setAttribute('id', 'smo362525');
smo362541v0ar.push(smo362525);
smo362541v0.addTickables(smo362541v0ar)
fmtsmo36254167.joinVoices([smo362541v0]);
const fmtsmo36453967 = new VF.Formatter();
//
// voices and notes for stave 1 67
const smo364539v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364539v0ar = [];
const smo364519 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
noteHash['smo364519'] = smo364519;
smo364519.setAttribute('id', 'smo364519');
smo364539v0ar.push(smo364519);
const smo364520 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo364520'] = smo364520;
smo364520.setAttribute('id', 'smo364520');
smo364539v0ar.push(smo364520);
const smo364521 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
noteHash['smo364521'] = smo364521;
smo364521.setAttribute('id', 'smo364521');
const smo3645210acc = new VF.Accidental('n');
smo364521.addModifier(smo3645210acc, 0);
const smo3645211acc = new VF.Accidental('n');
smo364521.addModifier(smo3645211acc, 1);
smo364539v0ar.push(smo364521);
const smo364522 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
noteHash['smo364522'] = smo364522;
smo364522.setAttribute('id', 'smo364522');
smo364539v0ar.push(smo364522);
const smo364523 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["db/2/n","db/3/n"]}'))
noteHash['smo364523'] = smo364523;
smo364523.setAttribute('id', 'smo364523');
const smo3645230acc = new VF.Accidental('b');
smo364523.addModifier(smo3645230acc, 0);
const smo3645231acc = new VF.Accidental('b');
smo364523.addModifier(smo3645231acc, 1);
smo364539v0ar.push(smo364523);
smo364539v0.addTickables(smo364539v0ar)
fmtsmo36453967.joinVoices([smo364539v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386442 = smo362523.getStemDirection();
smo362523.setStemDirection(dirsmo386442);
smo362525.setStemDirection(dirsmo386442);
const smo386442 = new VF.Beam([smo362523,smo362525]);
const dirsmo386445 = smo364519.getStemDirection();
smo364519.setStemDirection(dirsmo386445);
smo364520.setStemDirection(dirsmo386445);
smo364521.setStemDirection(dirsmo386445);
smo364522.setStemDirection(dirsmo386445);
const smo386445 = new VF.Beam([smo364519,smo364520,smo364521,smo364522]);
 
// formatting measures in staff group smo365028
fmtsmo36254167.format([smo362541v0,smo364539v0], 281);
const stavesmo362541 = new VF.Stave(368, 763, 295);
stavesmo362541.setAttribute('id', 'stavesmo362541');
stavesmo362541.setBegBarType(VF.Barline.type.NONE);
stavesmo362541.setContext(context);
stavesmo362541.draw();
smo362541v0.draw(context, stavesmo362541);
smo386442.setContext(context);
smo386442.draw();
const stavesmo364539 = new VF.Stave(368, 934, 295);
stavesmo364539.setAttribute('id', 'stavesmo364539');
stavesmo364539.setBegBarType(VF.Barline.type.NONE);
stavesmo364539.setContext(context);
stavesmo364539.draw();
smo364539v0.draw(context, stavesmo364539);
smo386445.setContext(context);
smo386445.draw();
const fmtsmo36256568 = new VF.Formatter();
//
// voices and notes for stave 0 68
const smo362565v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362565v0ar = [];
const smo362542 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n","an/5/n"]}'))
noteHash['smo362542'] = smo362542;
smo362542.setAttribute('id', 'smo362542');
smo362565v0ar.push(smo362542);
const smo362544 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo362544'] = smo362544;
smo362544.setAttribute('id', 'smo362544');
smo362565v0ar.push(smo362544);
const smo362545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","gn/5/n"]}'))
noteHash['smo362545'] = smo362545;
smo362545.setAttribute('id', 'smo362545');
smo362565v0ar.push(smo362545);
const smo362546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","gn/5/n"]}'))
noteHash['smo362546'] = smo362546;
smo362546.setAttribute('id', 'smo362546');
smo362565v0ar.push(smo362546);
const smo362547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo362547'] = smo362547;
smo362547.setAttribute('id', 'smo362547');
smo362565v0ar.push(smo362547);
const smo362548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","dn/5/n"]}'))
noteHash['smo362548'] = smo362548;
smo362548.setAttribute('id', 'smo362548');
smo362565v0ar.push(smo362548);
const smo362549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo362549'] = smo362549;
smo362549.setAttribute('id', 'smo362549');
const smo3625490acc = new VF.Accidental('n');
smo362549.addModifier(smo3625490acc, 0);
smo362565v0ar.push(smo362549);
smo362565v0.addTickables(smo362565v0ar)
fmtsmo36256568.joinVoices([smo362565v0]);
const fmtsmo36455968 = new VF.Formatter();
//
// voices and notes for stave 1 68
const smo364559v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364559v0ar = [];
const smo364540 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
noteHash['smo364540'] = smo364540;
smo364540.setAttribute('id', 'smo364540');
smo364559v0ar.push(smo364540);
const smo364541 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo364541'] = smo364541;
smo364541.setAttribute('id', 'smo364541');
smo364559v0ar.push(smo364541);
const smo364542 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
noteHash['smo364542'] = smo364542;
smo364542.setAttribute('id', 'smo364542');
smo364559v0ar.push(smo364542);
const smo364543 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
noteHash['smo364543'] = smo364543;
smo364543.setAttribute('id', 'smo364543');
smo364559v0ar.push(smo364543);
smo364559v0.addTickables(smo364559v0ar)
fmtsmo36455968.joinVoices([smo364559v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386448 = smo362542.getStemDirection();
smo362542.setStemDirection(dirsmo386448);
smo362544.setStemDirection(dirsmo386448);
smo362545.setStemDirection(dirsmo386448);
const smo386448 = new VF.Beam([smo362542,smo362544,smo362545]);
const dirsmo386449 = smo362546.getStemDirection();
smo362546.setStemDirection(dirsmo386449);
smo362547.setStemDirection(dirsmo386449);
smo362548.setStemDirection(dirsmo386449);
smo362549.setStemDirection(dirsmo386449);
const smo386449 = new VF.Beam([smo362546,smo362547,smo362548,smo362549]);
const dirsmo386452 = smo364540.getStemDirection();
smo364540.setStemDirection(dirsmo386452);
smo364541.setStemDirection(dirsmo386452);
const smo386452 = new VF.Beam([smo364540,smo364541]);
const dirsmo386453 = smo364542.getStemDirection();
smo364542.setStemDirection(dirsmo386453);
smo364543.setStemDirection(dirsmo386453);
const smo386453 = new VF.Beam([smo364542,smo364543]);
 
// formatting measures in staff group smo365028
fmtsmo36256568.format([smo362565v0,smo364559v0], 281);
const stavesmo362565 = new VF.Stave(663, 763, 295);
stavesmo362565.setAttribute('id', 'stavesmo362565');
stavesmo362565.setBegBarType(VF.Barline.type.NONE);
stavesmo362565.setContext(context);
stavesmo362565.draw();
smo362565v0.draw(context, stavesmo362565);
smo386448.setContext(context);
smo386448.draw();
smo386449.setContext(context);
smo386449.draw();
const stavesmo364559 = new VF.Stave(663, 934, 295);
stavesmo364559.setAttribute('id', 'stavesmo364559');
stavesmo364559.setBegBarType(VF.Barline.type.NONE);
stavesmo364559.setContext(context);
stavesmo364559.draw();
smo364559v0.draw(context, stavesmo364559);
smo386452.setContext(context);
smo386452.draw();
smo386453.setContext(context);
smo386453.draw();
const fmtsmo36258969 = new VF.Formatter();
//
// voices and notes for stave 0 69
const smo362589v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362589v0ar = [];
const smo362566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","fn/5/n"]}'))
noteHash['smo362566'] = smo362566;
smo362566.setAttribute('id', 'smo362566');
smo362589v0ar.push(smo362566);
const smo362567 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo362567'] = smo362567;
smo362567.setAttribute('id', 'smo362567');
const smo3625670acc = new VF.Accidental('n');
smo362567.addModifier(smo3625670acc, 0);
smo362589v0ar.push(smo362567);
const smo362568 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo362568'] = smo362568;
smo362568.setAttribute('id', 'smo362568');
smo362589v0ar.push(smo362568);
const smo362569 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo362569'] = smo362569;
smo362569.setAttribute('id', 'smo362569');
smo362589v0ar.push(smo362569);
const smo362570 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo362570'] = smo362570;
smo362570.setAttribute('id', 'smo362570');
const smo3625700acc = new VF.Accidental('n');
smo362570.addModifier(smo3625700acc, 0);
smo362589v0ar.push(smo362570);
const smo362571 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo362571'] = smo362571;
smo362571.setAttribute('id', 'smo362571');
smo362589v0ar.push(smo362571);
const smo362572 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo362572'] = smo362572;
smo362572.setAttribute('id', 'smo362572');
smo362589v0ar.push(smo362572);
smo362589v0.addTickables(smo362589v0ar)
fmtsmo36258969.joinVoices([smo362589v0]);
const fmtsmo36457969 = new VF.Formatter();
//
// voices and notes for stave 1 69
const smo364579v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364579v0ar = [];
const smo364560 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo364560'] = smo364560;
smo364560.setAttribute('id', 'smo364560');
smo364579v0ar.push(smo364560);
const smo364561 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo364561'] = smo364561;
smo364561.setAttribute('id', 'smo364561');
smo364579v0ar.push(smo364561);
const smo364562 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo364562'] = smo364562;
smo364562.setAttribute('id', 'smo364562');
smo364579v0ar.push(smo364562);
smo364579v0.addTickables(smo364579v0ar)
fmtsmo36457969.joinVoices([smo364579v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386456 = smo362566.getStemDirection();
smo362566.setStemDirection(dirsmo386456);
smo362567.setStemDirection(dirsmo386456);
smo362568.setStemDirection(dirsmo386456);
const smo386456 = new VF.Beam([smo362566,smo362567,smo362568]);
const dirsmo386457 = smo362569.getStemDirection();
smo362569.setStemDirection(dirsmo386457);
smo362570.setStemDirection(dirsmo386457);
smo362571.setStemDirection(dirsmo386457);
smo362572.setStemDirection(dirsmo386457);
const smo386457 = new VF.Beam([smo362569,smo362570,smo362571,smo362572]);
 
// formatting measures in staff group smo365028
fmtsmo36258969.format([smo362589v0,smo364579v0], 277);
const stavesmo362589 = new VF.Stave(958, 763, 295);
stavesmo362589.setAttribute('id', 'stavesmo362589');
stavesmo362589.setBegBarType(VF.Barline.type.NONE);
stavesmo362589.setEndBarType(5);
stavesmo362589.setContext(context);
stavesmo362589.draw();
smo362589v0.draw(context, stavesmo362589);
smo386456.setContext(context);
smo386456.draw();
smo386457.setContext(context);
smo386457.draw();
const stavesmo364579 = new VF.Stave(958, 934, 295);
stavesmo364579.setAttribute('id', 'stavesmo364579');
stavesmo364579.setBegBarType(VF.Barline.type.NONE);
stavesmo364579.setEndBarType(5);
stavesmo364579.setContext(context);
stavesmo364579.draw();
smo364579v0.draw(context, stavesmo364579);
const fmtsmo36261070 = new VF.Formatter();
//
// voices and notes for stave 0 70
const smo362610v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362610v0ar = [];
const smo362590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","fn/5/n"]}'))
noteHash['smo362590'] = smo362590;
smo362590.setAttribute('id', 'smo362590');
smo362610v0ar.push(smo362590);
const smo362591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo362591'] = smo362591;
smo362591.setAttribute('id', 'smo362591');
smo362610v0ar.push(smo362591);
const smo362592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n","cn/6/n","fn/6/n"]}'))
noteHash['smo362592'] = smo362592;
smo362592.setAttribute('id', 'smo362592');
smo362610v0ar.push(smo362592);
const smo362593 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo362593'] = smo362593;
smo362593.setAttribute('id', 'smo362593');
smo362610v0ar.push(smo362593);
smo362610v0.addTickables(smo362610v0ar)
fmtsmo36261070.joinVoices([smo362610v0]);
const fmtsmo36460070 = new VF.Formatter();
//
// voices and notes for stave 1 70
const smo364600v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364600v0ar = [];
const smo364580 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo364580'] = smo364580;
smo364580.setAttribute('id', 'smo364580');
smo364600v0ar.push(smo364580);
const smo364581 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo364581'] = smo364581;
smo364581.setAttribute('id', 'smo364581');
smo364600v0ar.push(smo364581);
const smo364582 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/1/n","fn/2/n"]}'))
noteHash['smo364582'] = smo364582;
smo364582.setAttribute('id', 'smo364582');
smo364600v0ar.push(smo364582);
const smo364583 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo364583'] = smo364583;
smo364583.setAttribute('id', 'smo364583');
smo364600v0ar.push(smo364583);
smo364600v0.addTickables(smo364600v0ar)
fmtsmo36460070.joinVoices([smo364600v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
 
// formatting measures in staff group smo365028
fmtsmo36261070.format([smo362610v0,smo364600v0], 281);
const stavesmo362610 = new VF.Stave(1253, 763, 295);
stavesmo362610.setAttribute('id', 'stavesmo362610');
stavesmo362610.setBegBarType(VF.Barline.type.NONE);
stavesmo362610.setContext(context);
stavesmo362610.draw();
smo362610v0.draw(context, stavesmo362610);
const stavesmo364600 = new VF.Stave(1253, 934, 295);
stavesmo364600.setAttribute('id', 'stavesmo364600');
stavesmo364600.setBegBarType(VF.Barline.type.NONE);
stavesmo364600.setContext(context);
stavesmo364600.draw();
smo364600v0.draw(context, stavesmo364600);
const fmtsmo36263371 = new VF.Formatter();
//
// voices and notes for stave 0 71
const smo362633v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362633v0ar = [];
const smo362611 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo362611'] = smo362611;
smo362611.setAttribute('id', 'smo362611');
smo362633v0ar.push(smo362611);
const smo362612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo362612'] = smo362612;
smo362612.setAttribute('id', 'smo362612');
smo362633v0ar.push(smo362612);
const smo362613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo362613'] = smo362613;
smo362613.setAttribute('id', 'smo362613');
smo362633v0ar.push(smo362613);
const smo362614 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo362614'] = smo362614;
smo362614.setAttribute('id', 'smo362614');
smo362633v0ar.push(smo362614);
const smo362615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo362615'] = smo362615;
smo362615.setAttribute('id', 'smo362615');
smo362633v0ar.push(smo362615);
const smo362616 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo362616'] = smo362616;
smo362616.setAttribute('id', 'smo362616');
smo362633v0ar.push(smo362616);
const smo362617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo362617'] = smo362617;
smo362617.setAttribute('id', 'smo362617');
smo362633v0ar.push(smo362617);
smo362633v0.addTickables(smo362633v0ar)
fmtsmo36263371.joinVoices([smo362633v0]);
const fmtsmo36462071 = new VF.Formatter();
//
// voices and notes for stave 1 71
const smo364620v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364620v0ar = [];
const smo364601 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo364601'] = smo364601;
smo364601.setAttribute('id', 'smo364601');
smo364620v0ar.push(smo364601);
const smo364602 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo364602'] = smo364602;
smo364602.setAttribute('id', 'smo364602');
smo364620v0ar.push(smo364602);
const smo364603 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","an/3/n","cn/4/n","eb/4/n"]}'))
noteHash['smo364603'] = smo364603;
smo364603.setAttribute('id', 'smo364603');
const smo3646030acc = new VF.Accidental('b');
smo364603.addModifier(smo3646030acc, 0);
const smo3646033acc = new VF.Accidental('b');
smo364603.addModifier(smo3646033acc, 3);
smo364620v0ar.push(smo364603);
const smo364604 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","an/3/n","cn/4/n","eb/4/n"]}'))
noteHash['smo364604'] = smo364604;
smo364604.setAttribute('id', 'smo364604');
smo364620v0ar.push(smo364604);
smo364620v0.addTickables(smo364620v0ar)
fmtsmo36462071.joinVoices([smo364620v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386464 = smo362611.getStemDirection();
smo362611.setStemDirection(dirsmo386464);
smo362612.setStemDirection(dirsmo386464);
smo362613.setStemDirection(dirsmo386464);
const smo386464 = new VF.Beam([smo362611,smo362612,smo362613]);
const dirsmo386465 = smo362614.getStemDirection();
smo362614.setStemDirection(dirsmo386465);
smo362615.setStemDirection(dirsmo386465);
smo362616.setStemDirection(dirsmo386465);
smo362617.setStemDirection(dirsmo386465);
const smo386465 = new VF.Beam([smo362614,smo362615,smo362616,smo362617]);
const dirsmo386468 = smo364601.getStemDirection();
smo364601.setStemDirection(dirsmo386468);
smo364602.setStemDirection(dirsmo386468);
const smo386468 = new VF.Beam([smo364601,smo364602]);
const dirsmo386469 = smo364603.getStemDirection();
smo364603.setStemDirection(dirsmo386469);
smo364604.setStemDirection(dirsmo386469);
const smo386469 = new VF.Beam([smo364603,smo364604]);
 
// formatting measures in staff group smo365028
fmtsmo36263371.format([smo362633v0,smo364620v0], 248);
const stavesmo362633 = new VF.Stave(1548, 763, 295);
stavesmo362633.setAttribute('id', 'stavesmo362633');
stavesmo362633.setBegBarType(VF.Barline.type.NONE);
const keysmo362633 = new VF.KeySignature('C');
keysmo362633.cancelKey('Bb');
keysmo362633.addToStave(stavesmo362633);
stavesmo362633.setContext(context);
stavesmo362633.draw();
smo362633v0.draw(context, stavesmo362633);
smo386464.setContext(context);
smo386464.draw();
smo386465.setContext(context);
smo386465.draw();
const stavesmo364620 = new VF.Stave(1548, 934, 295);
stavesmo364620.setAttribute('id', 'stavesmo364620');
stavesmo364620.setBegBarType(VF.Barline.type.NONE);
const keysmo364620 = new VF.KeySignature('C');
keysmo364620.cancelKey('Bb');
keysmo364620.addToStave(stavesmo364620);
stavesmo364620.setContext(context);
stavesmo364620.draw();
smo364620v0.draw(context, stavesmo364620);
smo386468.setContext(context);
smo386468.draw();
smo386469.setContext(context);
smo386469.draw();
const rightsmo365028stavesmo3626331 = new VF.StaveConnector(stavesmo362633, stavesmo364620).setType(0);
rightsmo365028stavesmo3626331.setContext(context).draw();
const fmtsmo36265772 = new VF.Formatter();
//
// voices and notes for stave 0 72
const smo362657v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362657v0ar = [];
const smo362634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo362634'] = smo362634;
smo362634.setAttribute('id', 'smo362634');
smo362657v0ar.push(smo362634);
const smo362635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo362635'] = smo362635;
smo362635.setAttribute('id', 'smo362635');
smo362657v0ar.push(smo362635);
const smo362636 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo362636'] = smo362636;
smo362636.setAttribute('id', 'smo362636');
smo362657v0ar.push(smo362636);
const smo362637 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo362637'] = smo362637;
smo362637.setAttribute('id', 'smo362637');
smo362657v0ar.push(smo362637);
const smo362638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo362638'] = smo362638;
smo362638.setAttribute('id', 'smo362638');
smo362657v0ar.push(smo362638);
const smo362639 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo362639'] = smo362639;
smo362639.setAttribute('id', 'smo362639');
smo362657v0ar.push(smo362639);
const smo362640 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo362640'] = smo362640;
smo362640.setAttribute('id', 'smo362640');
smo362657v0ar.push(smo362640);
const smo362641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo362641'] = smo362641;
smo362641.setAttribute('id', 'smo362641');
smo362657v0ar.push(smo362641);
smo362657v0.addTickables(smo362657v0ar)
fmtsmo36265772.joinVoices([smo362657v0]);
const fmtsmo36464072 = new VF.Formatter();
//
// voices and notes for stave 1 72
const smo364640v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364640v0ar = [];
const smo364621 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo364621'] = smo364621;
smo364621.setAttribute('id', 'smo364621');
smo364640v0ar.push(smo364621);
const smo364622 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo364622'] = smo364622;
smo364622.setAttribute('id', 'smo364622');
smo364640v0ar.push(smo364622);
const smo364623 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo364623'] = smo364623;
smo364623.setAttribute('id', 'smo364623');
smo364640v0ar.push(smo364623);
const smo364624 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo364624'] = smo364624;
smo364624.setAttribute('id', 'smo364624');
smo364640v0ar.push(smo364624);
smo364640v0.addTickables(smo364640v0ar)
fmtsmo36464072.joinVoices([smo364640v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386480 = smo362634.getStemDirection();
smo362634.setStemDirection(dirsmo386480);
smo362635.setStemDirection(dirsmo386480);
smo362636.setStemDirection(dirsmo386480);
smo362637.setStemDirection(dirsmo386480);
const smo386480 = new VF.Beam([smo362634,smo362635,smo362636,smo362637]);
const dirsmo386481 = smo362638.getStemDirection();
smo362638.setStemDirection(dirsmo386481);
smo362639.setStemDirection(dirsmo386481);
smo362640.setStemDirection(dirsmo386481);
smo362641.setStemDirection(dirsmo386481);
const smo386481 = new VF.Beam([smo362638,smo362639,smo362640,smo362641]);
const dirsmo386484 = smo364621.getStemDirection();
smo364621.setStemDirection(dirsmo386484);
smo364622.setStemDirection(dirsmo386484);
const smo386484 = new VF.Beam([smo364621,smo364622]);
const dirsmo386485 = smo364623.getStemDirection();
smo364623.setStemDirection(dirsmo386485);
smo364624.setStemDirection(dirsmo386485);
const smo386485 = new VF.Beam([smo364623,smo364624]);
 
// formatting measures in staff group smo365028
fmtsmo36265772.format([smo362657v0,smo364640v0], 237);
const stavesmo362657 = new VF.Stave(73, 1147, 295);
stavesmo362657.setAttribute('id', 'stavesmo362657');
stavesmo362657.setBegBarType(1);
stavesmo362657.addClef('treble');
stavesmo362657.setContext(context);
stavesmo362657.draw();
smo362657v0.draw(context, stavesmo362657);
smo386480.setContext(context);
smo386480.draw();
smo386481.setContext(context);
smo386481.draw();
const stavesmo364640 = new VF.Stave(73, 1271, 295);
stavesmo364640.setAttribute('id', 'stavesmo364640');
stavesmo364640.setBegBarType(1);
stavesmo364640.addClef('bass');
stavesmo364640.setContext(context);
stavesmo364640.draw();
smo364640v0.draw(context, stavesmo364640);
smo386484.setContext(context);
smo386484.draw();
smo386485.setContext(context);
smo386485.draw();
const leftsmo365028stavesmo3626571 = new VF.StaveConnector(stavesmo362657, stavesmo364640).setType(3);
leftsmo365028stavesmo3626571.setContext(context).draw();
const fmtsmo36267873 = new VF.Formatter();
//
// voices and notes for stave 0 73
const smo362678v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362678v0ar = [];
const smo362658 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","an/4/n"]}'))
noteHash['smo362658'] = smo362658;
smo362658.setAttribute('id', 'smo362658');
const smo3626580acc = new VF.Accidental('b');
smo362658.addModifier(smo3626580acc, 0);
smo362678v0ar.push(smo362658);
const smo362659 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","gb/5/n"]}'))
noteHash['smo362659'] = smo362659;
smo362659.setAttribute('id', 'smo362659');
const smo3626591acc = new VF.Accidental('b');
smo362659.addModifier(smo3626591acc, 1);
smo362678v0ar.push(smo362659);
const smo362660 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","en/5/n"]}'))
noteHash['smo362660'] = smo362660;
smo362660.setAttribute('id', 'smo362660');
smo362678v0ar.push(smo362660);
const smo362661 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n"]}'))
noteHash['smo362661'] = smo362661;
smo362661.setAttribute('id', 'smo362661');
smo362678v0ar.push(smo362661);
const smo362662 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
noteHash['smo362662'] = smo362662;
smo362662.setAttribute('id', 'smo362662');
smo362678v0ar.push(smo362662);
smo362678v0.addTickables(smo362678v0ar)
fmtsmo36267873.joinVoices([smo362678v0]);
const fmtsmo36466073 = new VF.Formatter();
//
// voices and notes for stave 1 73
const smo364660v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364660v0ar = [];
const smo364641 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","cn/4/n"]}'))
noteHash['smo364641'] = smo364641;
smo364641.setAttribute('id', 'smo364641');
smo364660v0ar.push(smo364641);
const smo364642 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","an/3/n"]}'))
noteHash['smo364642'] = smo364642;
smo364642.setAttribute('id', 'smo364642');
smo364660v0ar.push(smo364642);
const smo364643 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
noteHash['smo364643'] = smo364643;
smo364643.setAttribute('id', 'smo364643');
smo364660v0ar.push(smo364643);
const smo364644 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
noteHash['smo364644'] = smo364644;
smo364644.setAttribute('id', 'smo364644');
smo364660v0ar.push(smo364644);
smo364660v0.addTickables(smo364660v0ar)
fmtsmo36466073.joinVoices([smo364660v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386488 = smo362658.getStemDirection();
smo362658.setStemDirection(dirsmo386488);
smo362659.setStemDirection(dirsmo386488);
const smo386488 = new VF.Beam([smo362658,smo362659]);
const dirsmo386489 = smo362660.getStemDirection();
smo362660.setStemDirection(dirsmo386489);
smo362661.setStemDirection(dirsmo386489);
smo362662.setStemDirection(dirsmo386489);
const smo386489 = new VF.Beam([smo362660,smo362661,smo362662]);
const dirsmo386492 = smo364641.getStemDirection();
smo364641.setStemDirection(dirsmo386492);
smo364642.setStemDirection(dirsmo386492);
const smo386492 = new VF.Beam([smo364641,smo364642]);
const dirsmo386493 = smo364643.getStemDirection();
smo364643.setStemDirection(dirsmo386493);
smo364644.setStemDirection(dirsmo386493);
const smo386493 = new VF.Beam([smo364643,smo364644]);
 
// formatting measures in staff group smo365028
fmtsmo36267873.format([smo362678v0,smo364660v0], 281);
const stavesmo362678 = new VF.Stave(368, 1147, 295);
stavesmo362678.setAttribute('id', 'stavesmo362678');
stavesmo362678.setBegBarType(VF.Barline.type.NONE);
stavesmo362678.setContext(context);
stavesmo362678.draw();
smo362678v0.draw(context, stavesmo362678);
smo386488.setContext(context);
smo386488.draw();
smo386489.setContext(context);
smo386489.draw();
const stavesmo364660 = new VF.Stave(368, 1271, 295);
stavesmo364660.setAttribute('id', 'stavesmo364660');
stavesmo364660.setBegBarType(VF.Barline.type.NONE);
stavesmo364660.setContext(context);
stavesmo364660.draw();
smo364660v0.draw(context, stavesmo364660);
smo386492.setContext(context);
smo386492.draw();
smo386493.setContext(context);
smo386493.draw();
const fmtsmo36269774 = new VF.Formatter();
//
// voices and notes for stave 0 74
const smo362697v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362697v0ar = [];
const smo362679 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
noteHash['smo362679'] = smo362679;
smo362679.setAttribute('id', 'smo362679');
smo362697v0ar.push(smo362679);
const smo362680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","gn/5/n","cn/6/n"]}'))
noteHash['smo362680'] = smo362680;
smo362680.setAttribute('id', 'smo362680');
smo362697v0ar.push(smo362680);
const smo362681 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo362681'] = smo362681;
smo362681.setAttribute('id', 'smo362681');
smo362697v0ar.push(smo362681);
smo362697v0.addTickables(smo362697v0ar)
fmtsmo36269774.joinVoices([smo362697v0]);
const fmtsmo36467974 = new VF.Formatter();
//
// voices and notes for stave 1 74
const smo364679v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364679v0ar = [];
const smo364661 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
noteHash['smo364661'] = smo364661;
smo364661.setAttribute('id', 'smo364661');
smo364679v0ar.push(smo364661);
const smo364662 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
noteHash['smo364662'] = smo364662;
smo364662.setAttribute('id', 'smo364662');
smo364679v0ar.push(smo364662);
const smo364663 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo364663'] = smo364663;
smo364663.setAttribute('id', 'smo364663');
smo364679v0ar.push(smo364663);
smo364679v0.addTickables(smo364679v0ar)
fmtsmo36467974.joinVoices([smo364679v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
 
// formatting measures in staff group smo365028
fmtsmo36269774.format([smo362697v0,smo364679v0], 281);
const stavesmo362697 = new VF.Stave(663, 1147, 295);
stavesmo362697.setAttribute('id', 'stavesmo362697');
stavesmo362697.setBegBarType(VF.Barline.type.NONE);
stavesmo362697.setContext(context);
stavesmo362697.draw();
smo362697v0.draw(context, stavesmo362697);
const stavesmo364679 = new VF.Stave(663, 1271, 295);
stavesmo364679.setAttribute('id', 'stavesmo364679');
stavesmo364679.setBegBarType(VF.Barline.type.NONE);
stavesmo364679.setContext(context);
stavesmo364679.draw();
smo364679v0.draw(context, stavesmo364679);
const fmtsmo36271975 = new VF.Formatter();
//
// voices and notes for stave 0 75
const smo362719v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362719v0ar = [];
const smo362698 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
noteHash['smo362698'] = smo362698;
smo362698.setAttribute('id', 'smo362698');
smo362719v0ar.push(smo362698);
const smo362699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n","en/4/n"]}'))
noteHash['smo362699'] = smo362699;
smo362699.setAttribute('id', 'smo362699');
const smo3626990acc = new VF.Accidental('b');
smo362699.addModifier(smo3626990acc, 0);
smo362719v0ar.push(smo362699);
const smo362700 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
noteHash['smo362700'] = smo362700;
smo362700.setAttribute('id', 'smo362700');
const smo3627000acc = new VF.Accidental('n');
smo362700.addModifier(smo3627000acc, 0);
smo362719v0ar.push(smo362700);
const smo362701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
noteHash['smo362701'] = smo362701;
smo362701.setAttribute('id', 'smo362701');
smo362719v0ar.push(smo362701);
const smo362702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n","en/4/n"]}'))
noteHash['smo362702'] = smo362702;
smo362702.setAttribute('id', 'smo362702');
const smo3627020acc = new VF.Accidental('b');
smo362702.addModifier(smo3627020acc, 0);
smo362719v0ar.push(smo362702);
const smo362703 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
noteHash['smo362703'] = smo362703;
smo362703.setAttribute('id', 'smo362703');
const smo3627030acc = new VF.Accidental('n');
smo362703.addModifier(smo3627030acc, 0);
smo362719v0ar.push(smo362703);
smo362719v0.addTickables(smo362719v0ar)
fmtsmo36271975.joinVoices([smo362719v0]);
const fmtsmo36469975 = new VF.Formatter();
//
// voices and notes for stave 1 75
const smo364699v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364699v0ar = [];
const smo364680 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
noteHash['smo364680'] = smo364680;
smo364680.setAttribute('id', 'smo364680');
smo364699v0ar.push(smo364680);
const smo364681 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
noteHash['smo364681'] = smo364681;
smo364681.setAttribute('id', 'smo364681');
smo364699v0ar.push(smo364681);
const smo364682 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo364682'] = smo364682;
smo364682.setAttribute('id', 'smo364682');
smo364699v0ar.push(smo364682);
const smo364683 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
noteHash['smo364683'] = smo364683;
smo364683.setAttribute('id', 'smo364683');
smo364699v0ar.push(smo364683);
smo364699v0.addTickables(smo364699v0ar)
fmtsmo36469975.joinVoices([smo364699v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386500 = smo362698.getStemDirection();
smo362698.setStemDirection(dirsmo386500);
smo362699.setStemDirection(dirsmo386500);
smo362700.setStemDirection(dirsmo386500);
const smo386500 = new VF.Beam([smo362698,smo362699,smo362700]);
const dirsmo386501 = smo362701.getStemDirection();
smo362701.setStemDirection(dirsmo386501);
smo362702.setStemDirection(dirsmo386501);
smo362703.setStemDirection(dirsmo386501);
const smo386501 = new VF.Beam([smo362701,smo362702,smo362703]);
const dirsmo386503 = smo364680.getStemDirection();
smo364680.setStemDirection(dirsmo386503);
smo364681.setStemDirection(dirsmo386503);
const smo386503 = new VF.Beam([smo364680,smo364681]);
const dirsmo386504 = smo364682.getStemDirection();
smo364682.setStemDirection(dirsmo386504);
smo364683.setStemDirection(dirsmo386504);
const smo386504 = new VF.Beam([smo364682,smo364683]);
 
// formatting measures in staff group smo365028
fmtsmo36271975.format([smo362719v0,smo364699v0], 272);
const stavesmo362719 = new VF.Stave(958, 1147, 295);
stavesmo362719.setAttribute('id', 'stavesmo362719');
stavesmo362719.setBegBarType(4);
stavesmo362719.setContext(context);
stavesmo362719.draw();
smo362719v0.draw(context, stavesmo362719);
smo386500.setContext(context);
smo386500.draw();
smo386501.setContext(context);
smo386501.draw();
const stavesmo364699 = new VF.Stave(958, 1271, 295);
stavesmo364699.setAttribute('id', 'stavesmo364699');
stavesmo364699.setBegBarType(4);
stavesmo364699.setContext(context);
stavesmo364699.draw();
smo364699v0.draw(context, stavesmo364699);
smo386503.setContext(context);
smo386503.draw();
smo386504.setContext(context);
smo386504.draw();
const fmtsmo36274376 = new VF.Formatter();
//
// voices and notes for stave 0 76
const smo362743v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362743v0ar = [];
const smo362720 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo362720'] = smo362720;
smo362720.setAttribute('id', 'smo362720');
smo362743v0ar.push(smo362720);
const smo362721 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo362721'] = smo362721;
smo362721.setAttribute('id', 'smo362721');
smo362743v0ar.push(smo362721);
const smo362722 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n"]}'))
noteHash['smo362722'] = smo362722;
smo362722.setAttribute('id', 'smo362722');
smo362743v0ar.push(smo362722);
const smo362723 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo362723'] = smo362723;
smo362723.setAttribute('id', 'smo362723');
smo362743v0ar.push(smo362723);
const smo362724 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo362724'] = smo362724;
smo362724.setAttribute('id', 'smo362724');
smo362743v0ar.push(smo362724);
const smo362725 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo362725'] = smo362725;
smo362725.setAttribute('id', 'smo362725');
smo362743v0ar.push(smo362725);
const smo362726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo362726'] = smo362726;
smo362726.setAttribute('id', 'smo362726');
smo362743v0ar.push(smo362726);
const smo362727 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo362727'] = smo362727;
smo362727.setAttribute('id', 'smo362727');
smo362743v0ar.push(smo362727);
smo362743v0.addTickables(smo362743v0ar)
fmtsmo36274376.joinVoices([smo362743v0]);
const fmtsmo36471976 = new VF.Formatter();
//
// voices and notes for stave 1 76
const smo364719v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364719v0ar = [];
const smo364700 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
noteHash['smo364700'] = smo364700;
smo364700.setAttribute('id', 'smo364700');
smo364719v0ar.push(smo364700);
const smo364701 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
noteHash['smo364701'] = smo364701;
smo364701.setAttribute('id', 'smo364701');
smo364719v0ar.push(smo364701);
const smo364702 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo364702'] = smo364702;
smo364702.setAttribute('id', 'smo364702');
smo364719v0ar.push(smo364702);
const smo364703 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
noteHash['smo364703'] = smo364703;
smo364703.setAttribute('id', 'smo364703');
smo364719v0ar.push(smo364703);
smo364719v0.addTickables(smo364719v0ar)
fmtsmo36471976.joinVoices([smo364719v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386506 = smo362721.getStemDirection();
smo362721.setStemDirection(dirsmo386506);
smo362722.setStemDirection(dirsmo386506);
smo362723.setStemDirection(dirsmo386506);
const smo386506 = new VF.Beam([smo362721,smo362722,smo362723]);
const dirsmo386507 = smo362724.getStemDirection();
smo362724.setStemDirection(dirsmo386507);
smo362725.setStemDirection(dirsmo386507);
smo362726.setStemDirection(dirsmo386507);
smo362727.setStemDirection(dirsmo386507);
const smo386507 = new VF.Beam([smo362724,smo362725,smo362726,smo362727]);
const dirsmo386510 = smo364700.getStemDirection();
smo364700.setStemDirection(dirsmo386510);
smo364701.setStemDirection(dirsmo386510);
const smo386510 = new VF.Beam([smo364700,smo364701]);
const dirsmo386511 = smo364702.getStemDirection();
smo364702.setStemDirection(dirsmo386511);
smo364703.setStemDirection(dirsmo386511);
const smo386511 = new VF.Beam([smo364702,smo364703]);
 
// formatting measures in staff group smo365028
fmtsmo36274376.format([smo362743v0,smo364719v0], 281);
const stavesmo362743 = new VF.Stave(1253, 1147, 295);
stavesmo362743.setAttribute('id', 'stavesmo362743');
stavesmo362743.setBegBarType(VF.Barline.type.NONE);
stavesmo362743.setContext(context);
stavesmo362743.draw();
smo362743v0.draw(context, stavesmo362743);
smo386506.setContext(context);
smo386506.draw();
smo386507.setContext(context);
smo386507.draw();
const stavesmo364719 = new VF.Stave(1253, 1271, 295);
stavesmo364719.setAttribute('id', 'stavesmo364719');
stavesmo364719.setBegBarType(VF.Barline.type.NONE);
stavesmo364719.setContext(context);
stavesmo364719.draw();
smo364719v0.draw(context, stavesmo364719);
smo386510.setContext(context);
smo386510.draw();
smo386511.setContext(context);
smo386511.draw();
const fmtsmo36276577 = new VF.Formatter();
//
// voices and notes for stave 0 77
const smo362765v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362765v0ar = [];
const smo362744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo362744'] = smo362744;
smo362744.setAttribute('id', 'smo362744');
smo362765v0ar.push(smo362744);
const smo362745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n","gb/4/n"]}'))
noteHash['smo362745'] = smo362745;
smo362745.setAttribute('id', 'smo362745');
const smo3627450acc = new VF.Accidental('b');
smo362745.addModifier(smo3627450acc, 0);
const smo3627451acc = new VF.Accidental('b');
smo362745.addModifier(smo3627451acc, 1);
smo362765v0ar.push(smo362745);
const smo362746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo362746'] = smo362746;
smo362746.setAttribute('id', 'smo362746');
const smo3627460acc = new VF.Accidental('n');
smo362746.addModifier(smo3627460acc, 0);
const smo3627461acc = new VF.Accidental('n');
smo362746.addModifier(smo3627461acc, 1);
smo362765v0ar.push(smo362746);
const smo362747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo362747'] = smo362747;
smo362747.setAttribute('id', 'smo362747');
smo362765v0ar.push(smo362747);
const smo362748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n","gb/4/n"]}'))
noteHash['smo362748'] = smo362748;
smo362748.setAttribute('id', 'smo362748');
const smo3627480acc = new VF.Accidental('b');
smo362748.addModifier(smo3627480acc, 0);
const smo3627481acc = new VF.Accidental('b');
smo362748.addModifier(smo3627481acc, 1);
smo362765v0ar.push(smo362748);
const smo362749 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo362749'] = smo362749;
smo362749.setAttribute('id', 'smo362749');
const smo3627490acc = new VF.Accidental('n');
smo362749.addModifier(smo3627490acc, 0);
const smo3627491acc = new VF.Accidental('n');
smo362749.addModifier(smo3627491acc, 1);
smo362765v0ar.push(smo362749);
smo362765v0.addTickables(smo362765v0ar)
fmtsmo36276577.joinVoices([smo362765v0]);
const fmtsmo36473977 = new VF.Formatter();
//
// voices and notes for stave 1 77
const smo364739v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364739v0ar = [];
const smo364720 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo364720'] = smo364720;
smo364720.setAttribute('id', 'smo364720');
smo364739v0ar.push(smo364720);
const smo364721 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo364721'] = smo364721;
smo364721.setAttribute('id', 'smo364721');
smo364739v0ar.push(smo364721);
const smo364722 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo364722'] = smo364722;
smo364722.setAttribute('id', 'smo364722');
smo364739v0ar.push(smo364722);
const smo364723 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo364723'] = smo364723;
smo364723.setAttribute('id', 'smo364723');
smo364739v0ar.push(smo364723);
smo364739v0.addTickables(smo364739v0ar)
fmtsmo36473977.joinVoices([smo364739v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386514 = smo362744.getStemDirection();
smo362744.setStemDirection(dirsmo386514);
smo362745.setStemDirection(dirsmo386514);
smo362746.setStemDirection(dirsmo386514);
const smo386514 = new VF.Beam([smo362744,smo362745,smo362746]);
const dirsmo386515 = smo362747.getStemDirection();
smo362747.setStemDirection(dirsmo386515);
smo362748.setStemDirection(dirsmo386515);
smo362749.setStemDirection(dirsmo386515);
const smo386515 = new VF.Beam([smo362747,smo362748,smo362749]);
const dirsmo386518 = smo364720.getStemDirection();
smo364720.setStemDirection(dirsmo386518);
smo364721.setStemDirection(dirsmo386518);
const smo386518 = new VF.Beam([smo364720,smo364721]);
const dirsmo386519 = smo364722.getStemDirection();
smo364722.setStemDirection(dirsmo386519);
smo364723.setStemDirection(dirsmo386519);
const smo386519 = new VF.Beam([smo364722,smo364723]);
 
// formatting measures in staff group smo365028
fmtsmo36276577.format([smo362765v0,smo364739v0], 281);
const stavesmo362765 = new VF.Stave(1548, 1147, 295);
stavesmo362765.setAttribute('id', 'stavesmo362765');
stavesmo362765.setBegBarType(VF.Barline.type.NONE);
stavesmo362765.setContext(context);
stavesmo362765.draw();
smo362765v0.draw(context, stavesmo362765);
smo386514.setContext(context);
smo386514.draw();
smo386515.setContext(context);
smo386515.draw();
const stavesmo364739 = new VF.Stave(1548, 1271, 295);
stavesmo364739.setAttribute('id', 'stavesmo364739');
stavesmo364739.setBegBarType(VF.Barline.type.NONE);
stavesmo364739.setContext(context);
stavesmo364739.draw();
smo364739v0.draw(context, stavesmo364739);
smo386518.setContext(context);
smo386518.draw();
smo386519.setContext(context);
smo386519.draw();
const rightsmo365028stavesmo3627651 = new VF.StaveConnector(stavesmo362765, stavesmo364739).setType(0);
rightsmo365028stavesmo3627651.setContext(context).draw();
const fmtsmo36278978 = new VF.Formatter();
//
// voices and notes for stave 0 78
const smo362789v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362789v0ar = [];
const smo362766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo362766'] = smo362766;
smo362766.setAttribute('id', 'smo362766');
smo362789v0ar.push(smo362766);
const smo362767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo362767'] = smo362767;
smo362767.setAttribute('id', 'smo362767');
smo362789v0ar.push(smo362767);
const smo362768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n"]}'))
noteHash['smo362768'] = smo362768;
smo362768.setAttribute('id', 'smo362768');
smo362789v0ar.push(smo362768);
const smo362769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo362769'] = smo362769;
smo362769.setAttribute('id', 'smo362769');
smo362789v0ar.push(smo362769);
const smo362770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo362770'] = smo362770;
smo362770.setAttribute('id', 'smo362770');
smo362789v0ar.push(smo362770);
const smo362771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo362771'] = smo362771;
smo362771.setAttribute('id', 'smo362771');
smo362789v0ar.push(smo362771);
const smo362772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo362772'] = smo362772;
smo362772.setAttribute('id', 'smo362772');
smo362789v0ar.push(smo362772);
const smo362773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo362773'] = smo362773;
smo362773.setAttribute('id', 'smo362773');
smo362789v0ar.push(smo362773);
smo362789v0.addTickables(smo362789v0ar)
fmtsmo36278978.joinVoices([smo362789v0]);
const fmtsmo36475978 = new VF.Formatter();
//
// voices and notes for stave 1 78
const smo364759v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364759v0ar = [];
const smo364740 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo364740'] = smo364740;
smo364740.setAttribute('id', 'smo364740');
smo364759v0ar.push(smo364740);
const smo364741 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo364741'] = smo364741;
smo364741.setAttribute('id', 'smo364741');
smo364759v0ar.push(smo364741);
const smo364742 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo364742'] = smo364742;
smo364742.setAttribute('id', 'smo364742');
smo364759v0ar.push(smo364742);
const smo364743 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo364743'] = smo364743;
smo364743.setAttribute('id', 'smo364743');
smo364759v0ar.push(smo364743);
smo364759v0.addTickables(smo364759v0ar)
fmtsmo36475978.joinVoices([smo364759v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386530 = smo362767.getStemDirection();
smo362767.setStemDirection(dirsmo386530);
smo362768.setStemDirection(dirsmo386530);
smo362769.setStemDirection(dirsmo386530);
const smo386530 = new VF.Beam([smo362767,smo362768,smo362769]);
const dirsmo386531 = smo362770.getStemDirection();
smo362770.setStemDirection(dirsmo386531);
smo362771.setStemDirection(dirsmo386531);
smo362772.setStemDirection(dirsmo386531);
smo362773.setStemDirection(dirsmo386531);
const smo386531 = new VF.Beam([smo362770,smo362771,smo362772,smo362773]);
const dirsmo386534 = smo364740.getStemDirection();
smo364740.setStemDirection(dirsmo386534);
smo364741.setStemDirection(dirsmo386534);
const smo386534 = new VF.Beam([smo364740,smo364741]);
const dirsmo386535 = smo364742.getStemDirection();
smo364742.setStemDirection(dirsmo386535);
smo364743.setStemDirection(dirsmo386535);
const smo386535 = new VF.Beam([smo364742,smo364743]);
 
// formatting measures in staff group smo365028
fmtsmo36278978.format([smo362789v0,smo364759v0], 237);
const stavesmo362789 = new VF.Stave(73, 1444, 295);
stavesmo362789.setAttribute('id', 'stavesmo362789');
stavesmo362789.setBegBarType(1);
stavesmo362789.addClef('treble');
stavesmo362789.setContext(context);
stavesmo362789.draw();
smo362789v0.draw(context, stavesmo362789);
smo386530.setContext(context);
smo386530.draw();
smo386531.setContext(context);
smo386531.draw();
const stavesmo364759 = new VF.Stave(73, 1574, 295);
stavesmo364759.setAttribute('id', 'stavesmo364759');
stavesmo364759.setBegBarType(1);
stavesmo364759.addClef('bass');
stavesmo364759.setContext(context);
stavesmo364759.draw();
smo364759v0.draw(context, stavesmo364759);
smo386534.setContext(context);
smo386534.draw();
smo386535.setContext(context);
smo386535.draw();
const leftsmo365028stavesmo3627891 = new VF.StaveConnector(stavesmo362789, stavesmo364759).setType(3);
leftsmo365028stavesmo3627891.setContext(context).draw();
const fmtsmo36281179 = new VF.Formatter();
//
// voices and notes for stave 0 79
const smo362811v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362811v0ar = [];
const smo362790 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n"]}'))
noteHash['smo362790'] = smo362790;
smo362790.setAttribute('id', 'smo362790');
smo362811v0ar.push(smo362790);
const smo362791 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","db/5/n"]}'))
noteHash['smo362791'] = smo362791;
smo362791.setAttribute('id', 'smo362791');
const smo3627910acc = new VF.Accidental('b');
smo362791.addModifier(smo3627910acc, 0);
const smo3627911acc = new VF.Accidental('b');
smo362791.addModifier(smo3627911acc, 1);
smo362811v0ar.push(smo362791);
const smo362792 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n"]}'))
noteHash['smo362792'] = smo362792;
smo362792.setAttribute('id', 'smo362792');
const smo3627920acc = new VF.Accidental('n');
smo362792.addModifier(smo3627920acc, 0);
const smo3627921acc = new VF.Accidental('n');
smo362792.addModifier(smo3627921acc, 1);
smo362811v0ar.push(smo362792);
const smo362793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n"]}'))
noteHash['smo362793'] = smo362793;
smo362793.setAttribute('id', 'smo362793');
smo362811v0ar.push(smo362793);
const smo362794 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","db/5/n"]}'))
noteHash['smo362794'] = smo362794;
smo362794.setAttribute('id', 'smo362794');
const smo3627940acc = new VF.Accidental('b');
smo362794.addModifier(smo3627940acc, 0);
const smo3627941acc = new VF.Accidental('b');
smo362794.addModifier(smo3627941acc, 1);
smo362811v0ar.push(smo362794);
const smo362795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n"]}'))
noteHash['smo362795'] = smo362795;
smo362795.setAttribute('id', 'smo362795');
const smo3627950acc = new VF.Accidental('n');
smo362795.addModifier(smo3627950acc, 0);
const smo3627951acc = new VF.Accidental('n');
smo362795.addModifier(smo3627951acc, 1);
smo362811v0ar.push(smo362795);
smo362811v0.addTickables(smo362811v0ar)
fmtsmo36281179.joinVoices([smo362811v0]);
const fmtsmo36477979 = new VF.Formatter();
//
// voices and notes for stave 1 79
const smo364779v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364779v0ar = [];
const smo364760 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo364760'] = smo364760;
smo364760.setAttribute('id', 'smo364760');
smo364779v0ar.push(smo364760);
const smo364761 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
noteHash['smo364761'] = smo364761;
smo364761.setAttribute('id', 'smo364761');
smo364779v0ar.push(smo364761);
const smo364762 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
noteHash['smo364762'] = smo364762;
smo364762.setAttribute('id', 'smo364762');
smo364779v0ar.push(smo364762);
const smo364763 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
noteHash['smo364763'] = smo364763;
smo364763.setAttribute('id', 'smo364763');
smo364779v0ar.push(smo364763);
smo364779v0.addTickables(smo364779v0ar)
fmtsmo36477979.joinVoices([smo364779v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386538 = smo362790.getStemDirection();
smo362790.setStemDirection(dirsmo386538);
smo362791.setStemDirection(dirsmo386538);
smo362792.setStemDirection(dirsmo386538);
const smo386538 = new VF.Beam([smo362790,smo362791,smo362792]);
const dirsmo386539 = smo362793.getStemDirection();
smo362793.setStemDirection(dirsmo386539);
smo362794.setStemDirection(dirsmo386539);
smo362795.setStemDirection(dirsmo386539);
const smo386539 = new VF.Beam([smo362793,smo362794,smo362795]);
const dirsmo386542 = smo364760.getStemDirection();
smo364760.setStemDirection(dirsmo386542);
smo364761.setStemDirection(dirsmo386542);
const smo386542 = new VF.Beam([smo364760,smo364761]);
const dirsmo386543 = smo364762.getStemDirection();
smo364762.setStemDirection(dirsmo386543);
smo364763.setStemDirection(dirsmo386543);
const smo386543 = new VF.Beam([smo364762,smo364763]);
 
// formatting measures in staff group smo365028
fmtsmo36281179.format([smo362811v0,smo364779v0], 281);
const stavesmo362811 = new VF.Stave(368, 1444, 295);
stavesmo362811.setAttribute('id', 'stavesmo362811');
stavesmo362811.setBegBarType(VF.Barline.type.NONE);
stavesmo362811.setContext(context);
stavesmo362811.draw();
smo362811v0.draw(context, stavesmo362811);
smo386538.setContext(context);
smo386538.draw();
smo386539.setContext(context);
smo386539.draw();
const stavesmo364779 = new VF.Stave(368, 1574, 295);
stavesmo364779.setAttribute('id', 'stavesmo364779');
stavesmo364779.setBegBarType(VF.Barline.type.NONE);
stavesmo364779.setContext(context);
stavesmo364779.draw();
smo364779v0.draw(context, stavesmo364779);
smo386542.setContext(context);
smo386542.draw();
smo386543.setContext(context);
smo386543.draw();
const fmtsmo36283580 = new VF.Formatter();
//
// voices and notes for stave 0 80
const smo362835v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362835v0ar = [];
const smo362812 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo362812'] = smo362812;
smo362812.setAttribute('id', 'smo362812');
smo362835v0ar.push(smo362812);
const smo362813 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo362813'] = smo362813;
smo362813.setAttribute('id', 'smo362813');
smo362835v0ar.push(smo362813);
const smo362814 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","an/5/n"]}'))
noteHash['smo362814'] = smo362814;
smo362814.setAttribute('id', 'smo362814');
smo362835v0ar.push(smo362814);
const smo362815 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo362815'] = smo362815;
smo362815.setAttribute('id', 'smo362815');
smo362835v0ar.push(smo362815);
const smo362816 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo362816'] = smo362816;
smo362816.setAttribute('id', 'smo362816');
smo362835v0ar.push(smo362816);
const smo362817 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo362817'] = smo362817;
smo362817.setAttribute('id', 'smo362817');
smo362835v0ar.push(smo362817);
const smo362818 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo362818'] = smo362818;
smo362818.setAttribute('id', 'smo362818');
smo362835v0ar.push(smo362818);
const smo362819 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo362819'] = smo362819;
smo362819.setAttribute('id', 'smo362819');
smo362835v0ar.push(smo362819);
smo362835v0.addTickables(smo362835v0ar)
fmtsmo36283580.joinVoices([smo362835v0]);
const fmtsmo36479980 = new VF.Formatter();
//
// voices and notes for stave 1 80
const smo364799v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364799v0ar = [];
const smo364780 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo364780'] = smo364780;
smo364780.setAttribute('id', 'smo364780');
smo364799v0ar.push(smo364780);
const smo364781 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
noteHash['smo364781'] = smo364781;
smo364781.setAttribute('id', 'smo364781');
smo364799v0ar.push(smo364781);
const smo364782 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo364782'] = smo364782;
smo364782.setAttribute('id', 'smo364782');
smo364799v0ar.push(smo364782);
const smo364783 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
noteHash['smo364783'] = smo364783;
smo364783.setAttribute('id', 'smo364783');
smo364799v0ar.push(smo364783);
smo364799v0.addTickables(smo364799v0ar)
fmtsmo36479980.joinVoices([smo364799v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386546 = smo362813.getStemDirection();
smo362813.setStemDirection(dirsmo386546);
smo362814.setStemDirection(dirsmo386546);
smo362815.setStemDirection(dirsmo386546);
const smo386546 = new VF.Beam([smo362813,smo362814,smo362815]);
const dirsmo386547 = smo362816.getStemDirection();
smo362816.setStemDirection(dirsmo386547);
smo362817.setStemDirection(dirsmo386547);
smo362818.setStemDirection(dirsmo386547);
smo362819.setStemDirection(dirsmo386547);
const smo386547 = new VF.Beam([smo362816,smo362817,smo362818,smo362819]);
const dirsmo386550 = smo364780.getStemDirection();
smo364780.setStemDirection(dirsmo386550);
smo364781.setStemDirection(dirsmo386550);
const smo386550 = new VF.Beam([smo364780,smo364781]);
const dirsmo386551 = smo364782.getStemDirection();
smo364782.setStemDirection(dirsmo386551);
smo364783.setStemDirection(dirsmo386551);
const smo386551 = new VF.Beam([smo364782,smo364783]);
 
// formatting measures in staff group smo365028
fmtsmo36283580.format([smo362835v0,smo364799v0], 281);
const stavesmo362835 = new VF.Stave(663, 1444, 295);
stavesmo362835.setAttribute('id', 'stavesmo362835');
stavesmo362835.setBegBarType(VF.Barline.type.NONE);
stavesmo362835.setContext(context);
stavesmo362835.draw();
smo362835v0.draw(context, stavesmo362835);
smo386546.setContext(context);
smo386546.draw();
smo386547.setContext(context);
smo386547.draw();
const stavesmo364799 = new VF.Stave(663, 1574, 295);
stavesmo364799.setAttribute('id', 'stavesmo364799');
stavesmo364799.setBegBarType(VF.Barline.type.NONE);
stavesmo364799.setContext(context);
stavesmo364799.draw();
smo364799v0.draw(context, stavesmo364799);
smo386550.setContext(context);
smo386550.draw();
smo386551.setContext(context);
smo386551.draw();
const fmtsmo36285581 = new VF.Formatter();
//
// voices and notes for stave 0 81
const smo362855v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362855v0ar = [];
const smo362836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo362836'] = smo362836;
smo362836.setAttribute('id', 'smo362836');
smo362855v0ar.push(smo362836);
const smo362837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo362837'] = smo362837;
smo362837.setAttribute('id', 'smo362837');
smo362855v0ar.push(smo362837);
const smo362838 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
noteHash['smo362838'] = smo362838;
smo362838.setAttribute('id', 'smo362838');
smo362855v0ar.push(smo362838);
const smo362839 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","an/5/n"]}'))
noteHash['smo362839'] = smo362839;
smo362839.setAttribute('id', 'smo362839');
smo362855v0ar.push(smo362839);
smo362855v0.addTickables(smo362855v0ar)
fmtsmo36285581.joinVoices([smo362855v0]);
const fmtsmo36481881 = new VF.Formatter();
//
// voices and notes for stave 1 81
const smo364818v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364818v0ar = [];
const smo364800 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n","gb/3/n","cn/4/n"]}'))
noteHash['smo364800'] = smo364800;
smo364800.setAttribute('id', 'smo364800');
const smo3648000acc = new VF.Accidental('b');
smo364800.addModifier(smo3648000acc, 0);
const smo3648001acc = new VF.Accidental('b');
smo364800.addModifier(smo3648001acc, 1);
smo364818v0ar.push(smo364800);
const smo364801 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n","gb/3/n","cn/4/n"]}'))
noteHash['smo364801'] = smo364801;
smo364801.setAttribute('id', 'smo364801');
smo364818v0ar.push(smo364801);
const smo364802 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n","gb/3/n","cn/4/n"]}'))
noteHash['smo364802'] = smo364802;
smo364802.setAttribute('id', 'smo364802');
smo364818v0ar.push(smo364802);
smo364818v0.addTickables(smo364818v0ar)
fmtsmo36481881.joinVoices([smo364818v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386554 = smo362836.getStemDirection();
smo362836.setStemDirection(dirsmo386554);
smo362837.setStemDirection(dirsmo386554);
const smo386554 = new VF.Beam([smo362836,smo362837]);
 
// formatting measures in staff group smo365028
fmtsmo36285581.format([smo362855v0,smo364818v0], 281);
const stavesmo362855 = new VF.Stave(958, 1444, 295);
stavesmo362855.setAttribute('id', 'stavesmo362855');
stavesmo362855.setBegBarType(VF.Barline.type.NONE);
stavesmo362855.setContext(context);
stavesmo362855.draw();
smo362855v0.draw(context, stavesmo362855);
smo386554.setContext(context);
smo386554.draw();
const stavesmo364818 = new VF.Stave(958, 1574, 295);
stavesmo364818.setAttribute('id', 'stavesmo364818');
stavesmo364818.setBegBarType(VF.Barline.type.NONE);
stavesmo364818.setContext(context);
stavesmo364818.draw();
smo364818v0.draw(context, stavesmo364818);
const fmtsmo36287682 = new VF.Formatter();
//
// voices and notes for stave 0 82
const smo362876v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362876v0ar = [];
const smo362856 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","gn/5/n"]}'))
noteHash['smo362856'] = smo362856;
smo362856.setAttribute('id', 'smo362856');
smo362876v0ar.push(smo362856);
const smo362857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo362857'] = smo362857;
smo362857.setAttribute('id', 'smo362857');
smo362876v0ar.push(smo362857);
const smo362858 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo362858'] = smo362858;
smo362858.setAttribute('id', 'smo362858');
smo362876v0ar.push(smo362858);
const smo362859 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo362859'] = smo362859;
smo362859.setAttribute('id', 'smo362859');
smo362876v0ar.push(smo362859);
const smo362860 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo362860'] = smo362860;
smo362860.setAttribute('id', 'smo362860');
smo362876v0ar.push(smo362860);
smo362876v0.addTickables(smo362876v0ar)
fmtsmo36287682.joinVoices([smo362876v0]);
const fmtsmo36483782 = new VF.Formatter();
//
// voices and notes for stave 1 82
const smo364837v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364837v0ar = [];
const smo364819 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo364819'] = smo364819;
smo364819.setAttribute('id', 'smo364819');
smo364837v0ar.push(smo364819);
const smo364820 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo364820'] = smo364820;
smo364820.setAttribute('id', 'smo364820');
smo364837v0ar.push(smo364820);
const smo364821 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo364821'] = smo364821;
smo364821.setAttribute('id', 'smo364821');
smo364837v0ar.push(smo364821);
smo364837v0.addTickables(smo364837v0ar)
fmtsmo36483782.joinVoices([smo364837v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386559 = smo362856.getStemDirection();
smo362856.setStemDirection(dirsmo386559);
smo362857.setStemDirection(dirsmo386559);
smo362858.setStemDirection(dirsmo386559);
const smo386559 = new VF.Beam([smo362856,smo362857,smo362858]);
const dirsmo386560 = smo362859.getStemDirection();
smo362859.setStemDirection(dirsmo386560);
smo362860.setStemDirection(dirsmo386560);
const smo386560 = new VF.Beam([smo362859,smo362860]);
 
// formatting measures in staff group smo365028
fmtsmo36287682.format([smo362876v0,smo364837v0], 281);
const stavesmo362876 = new VF.Stave(1253, 1444, 295);
stavesmo362876.setAttribute('id', 'stavesmo362876');
stavesmo362876.setBegBarType(VF.Barline.type.NONE);
stavesmo362876.setContext(context);
stavesmo362876.draw();
smo362876v0.draw(context, stavesmo362876);
smo386559.setContext(context);
smo386559.draw();
smo386560.setContext(context);
smo386560.draw();
const stavesmo364837 = new VF.Stave(1253, 1574, 295);
stavesmo364837.setAttribute('id', 'stavesmo364837');
stavesmo364837.setBegBarType(VF.Barline.type.NONE);
stavesmo364837.setContext(context);
stavesmo364837.draw();
smo364837v0.draw(context, stavesmo364837);
const fmtsmo36289883 = new VF.Formatter();
//
// voices and notes for stave 0 83
const smo362898v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362898v0ar = [];
const smo362877 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
noteHash['smo362877'] = smo362877;
smo362877.setAttribute('id', 'smo362877');
smo362898v0ar.push(smo362877);
const smo362878 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n","en/4/n"]}'))
noteHash['smo362878'] = smo362878;
smo362878.setAttribute('id', 'smo362878');
const smo3628780acc = new VF.Accidental('b');
smo362878.addModifier(smo3628780acc, 0);
smo362898v0ar.push(smo362878);
const smo362879 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
noteHash['smo362879'] = smo362879;
smo362879.setAttribute('id', 'smo362879');
const smo3628790acc = new VF.Accidental('n');
smo362879.addModifier(smo3628790acc, 0);
smo362898v0ar.push(smo362879);
const smo362880 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
noteHash['smo362880'] = smo362880;
smo362880.setAttribute('id', 'smo362880');
smo362898v0ar.push(smo362880);
const smo362881 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n","en/4/n"]}'))
noteHash['smo362881'] = smo362881;
smo362881.setAttribute('id', 'smo362881');
const smo3628810acc = new VF.Accidental('b');
smo362881.addModifier(smo3628810acc, 0);
smo362898v0ar.push(smo362881);
const smo362882 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
noteHash['smo362882'] = smo362882;
smo362882.setAttribute('id', 'smo362882');
const smo3628820acc = new VF.Accidental('n');
smo362882.addModifier(smo3628820acc, 0);
smo362898v0ar.push(smo362882);
smo362898v0.addTickables(smo362898v0ar)
fmtsmo36289883.joinVoices([smo362898v0]);
const fmtsmo36485783 = new VF.Formatter();
//
// voices and notes for stave 1 83
const smo364857v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364857v0ar = [];
const smo364838 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
noteHash['smo364838'] = smo364838;
smo364838.setAttribute('id', 'smo364838');
smo364857v0ar.push(smo364838);
const smo364839 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
noteHash['smo364839'] = smo364839;
smo364839.setAttribute('id', 'smo364839');
smo364857v0ar.push(smo364839);
const smo364840 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo364840'] = smo364840;
smo364840.setAttribute('id', 'smo364840');
smo364857v0ar.push(smo364840);
const smo364841 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
noteHash['smo364841'] = smo364841;
smo364841.setAttribute('id', 'smo364841');
smo364857v0ar.push(smo364841);
smo364857v0.addTickables(smo364857v0ar)
fmtsmo36485783.joinVoices([smo364857v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386565 = smo362877.getStemDirection();
smo362877.setStemDirection(dirsmo386565);
smo362878.setStemDirection(dirsmo386565);
smo362879.setStemDirection(dirsmo386565);
const smo386565 = new VF.Beam([smo362877,smo362878,smo362879]);
const dirsmo386566 = smo362880.getStemDirection();
smo362880.setStemDirection(dirsmo386566);
smo362881.setStemDirection(dirsmo386566);
smo362882.setStemDirection(dirsmo386566);
const smo386566 = new VF.Beam([smo362880,smo362881,smo362882]);
const dirsmo386569 = smo364838.getStemDirection();
smo364838.setStemDirection(dirsmo386569);
smo364839.setStemDirection(dirsmo386569);
const smo386569 = new VF.Beam([smo364838,smo364839]);
const dirsmo386570 = smo364840.getStemDirection();
smo364840.setStemDirection(dirsmo386570);
smo364841.setStemDirection(dirsmo386570);
const smo386570 = new VF.Beam([smo364840,smo364841]);
 
// formatting measures in staff group smo365028
fmtsmo36289883.format([smo362898v0,smo364857v0], 281);
const stavesmo362898 = new VF.Stave(1548, 1444, 295);
stavesmo362898.setAttribute('id', 'stavesmo362898');
stavesmo362898.setBegBarType(VF.Barline.type.NONE);
stavesmo362898.setContext(context);
stavesmo362898.draw();
smo362898v0.draw(context, stavesmo362898);
smo386565.setContext(context);
smo386565.draw();
smo386566.setContext(context);
smo386566.draw();
const stavesmo364857 = new VF.Stave(1548, 1574, 295);
stavesmo364857.setAttribute('id', 'stavesmo364857');
stavesmo364857.setBegBarType(VF.Barline.type.NONE);
stavesmo364857.setContext(context);
stavesmo364857.draw();
smo364857v0.draw(context, stavesmo364857);
smo386569.setContext(context);
smo386569.draw();
smo386570.setContext(context);
smo386570.draw();
const rightsmo365028stavesmo3628981 = new VF.StaveConnector(stavesmo362898, stavesmo364857).setType(0);
rightsmo365028stavesmo3628981.setContext(context).draw();
const fmtsmo36292284 = new VF.Formatter();
//
// voices and notes for stave 0 84
const smo362922v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362922v0ar = [];
const smo362899 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo362899'] = smo362899;
smo362899.setAttribute('id', 'smo362899');
smo362922v0ar.push(smo362899);
const smo362900 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo362900'] = smo362900;
smo362900.setAttribute('id', 'smo362900');
smo362922v0ar.push(smo362900);
const smo362901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n"]}'))
noteHash['smo362901'] = smo362901;
smo362901.setAttribute('id', 'smo362901');
smo362922v0ar.push(smo362901);
const smo362902 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo362902'] = smo362902;
smo362902.setAttribute('id', 'smo362902');
smo362922v0ar.push(smo362902);
const smo362903 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo362903'] = smo362903;
smo362903.setAttribute('id', 'smo362903');
smo362922v0ar.push(smo362903);
const smo362904 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo362904'] = smo362904;
smo362904.setAttribute('id', 'smo362904');
smo362922v0ar.push(smo362904);
const smo362905 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo362905'] = smo362905;
smo362905.setAttribute('id', 'smo362905');
smo362922v0ar.push(smo362905);
const smo362906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo362906'] = smo362906;
smo362906.setAttribute('id', 'smo362906');
smo362922v0ar.push(smo362906);
smo362922v0.addTickables(smo362922v0ar)
fmtsmo36292284.joinVoices([smo362922v0]);
const fmtsmo36487784 = new VF.Formatter();
//
// voices and notes for stave 1 84
const smo364877v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364877v0ar = [];
const smo364858 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
noteHash['smo364858'] = smo364858;
smo364858.setAttribute('id', 'smo364858');
smo364877v0ar.push(smo364858);
const smo364859 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
noteHash['smo364859'] = smo364859;
smo364859.setAttribute('id', 'smo364859');
smo364877v0ar.push(smo364859);
const smo364860 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo364860'] = smo364860;
smo364860.setAttribute('id', 'smo364860');
smo364877v0ar.push(smo364860);
const smo364861 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
noteHash['smo364861'] = smo364861;
smo364861.setAttribute('id', 'smo364861');
smo364877v0ar.push(smo364861);
smo364877v0.addTickables(smo364877v0ar)
fmtsmo36487784.joinVoices([smo364877v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386581 = smo362900.getStemDirection();
smo362900.setStemDirection(dirsmo386581);
smo362901.setStemDirection(dirsmo386581);
smo362902.setStemDirection(dirsmo386581);
const smo386581 = new VF.Beam([smo362900,smo362901,smo362902]);
const dirsmo386582 = smo362903.getStemDirection();
smo362903.setStemDirection(dirsmo386582);
smo362904.setStemDirection(dirsmo386582);
smo362905.setStemDirection(dirsmo386582);
smo362906.setStemDirection(dirsmo386582);
const smo386582 = new VF.Beam([smo362903,smo362904,smo362905,smo362906]);
const dirsmo386585 = smo364858.getStemDirection();
smo364858.setStemDirection(dirsmo386585);
smo364859.setStemDirection(dirsmo386585);
const smo386585 = new VF.Beam([smo364858,smo364859]);
const dirsmo386586 = smo364860.getStemDirection();
smo364860.setStemDirection(dirsmo386586);
smo364861.setStemDirection(dirsmo386586);
const smo386586 = new VF.Beam([smo364860,smo364861]);
 
// formatting measures in staff group smo365028
fmtsmo36292284.format([smo362922v0,smo364877v0], 237);
const stavesmo362922 = new VF.Stave(73, 1777, 295);
stavesmo362922.setAttribute('id', 'stavesmo362922');
stavesmo362922.setBegBarType(1);
stavesmo362922.addClef('treble');
stavesmo362922.setContext(context);
stavesmo362922.draw();
smo362922v0.draw(context, stavesmo362922);
smo386581.setContext(context);
smo386581.draw();
smo386582.setContext(context);
smo386582.draw();
const stavesmo364877 = new VF.Stave(73, 1921, 295);
stavesmo364877.setAttribute('id', 'stavesmo364877');
stavesmo364877.setBegBarType(1);
stavesmo364877.addClef('bass');
stavesmo364877.setContext(context);
stavesmo364877.draw();
smo364877v0.draw(context, stavesmo364877);
smo386585.setContext(context);
smo386585.draw();
smo386586.setContext(context);
smo386586.draw();
const leftsmo365028stavesmo3629221 = new VF.StaveConnector(stavesmo362922, stavesmo364877).setType(3);
leftsmo365028stavesmo3629221.setContext(context).draw();
const fmtsmo36294485 = new VF.Formatter();
//
// voices and notes for stave 0 85
const smo362944v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362944v0ar = [];
const smo362923 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo362923'] = smo362923;
smo362923.setAttribute('id', 'smo362923');
smo362944v0ar.push(smo362923);
const smo362924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n","gb/4/n"]}'))
noteHash['smo362924'] = smo362924;
smo362924.setAttribute('id', 'smo362924');
const smo3629240acc = new VF.Accidental('b');
smo362924.addModifier(smo3629240acc, 0);
const smo3629241acc = new VF.Accidental('b');
smo362924.addModifier(smo3629241acc, 1);
smo362944v0ar.push(smo362924);
const smo362925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo362925'] = smo362925;
smo362925.setAttribute('id', 'smo362925');
const smo3629250acc = new VF.Accidental('n');
smo362925.addModifier(smo3629250acc, 0);
const smo3629251acc = new VF.Accidental('n');
smo362925.addModifier(smo3629251acc, 1);
smo362944v0ar.push(smo362925);
const smo362926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo362926'] = smo362926;
smo362926.setAttribute('id', 'smo362926');
smo362944v0ar.push(smo362926);
const smo362927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n","gb/4/n"]}'))
noteHash['smo362927'] = smo362927;
smo362927.setAttribute('id', 'smo362927');
const smo3629270acc = new VF.Accidental('b');
smo362927.addModifier(smo3629270acc, 0);
const smo3629271acc = new VF.Accidental('b');
smo362927.addModifier(smo3629271acc, 1);
smo362944v0ar.push(smo362927);
const smo362928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo362928'] = smo362928;
smo362928.setAttribute('id', 'smo362928');
const smo3629280acc = new VF.Accidental('n');
smo362928.addModifier(smo3629280acc, 0);
const smo3629281acc = new VF.Accidental('n');
smo362928.addModifier(smo3629281acc, 1);
smo362944v0ar.push(smo362928);
smo362944v0.addTickables(smo362944v0ar)
fmtsmo36294485.joinVoices([smo362944v0]);
const fmtsmo36489785 = new VF.Formatter();
//
// voices and notes for stave 1 85
const smo364897v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364897v0ar = [];
const smo364878 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo364878'] = smo364878;
smo364878.setAttribute('id', 'smo364878');
smo364897v0ar.push(smo364878);
const smo364879 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo364879'] = smo364879;
smo364879.setAttribute('id', 'smo364879');
smo364897v0ar.push(smo364879);
const smo364880 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo364880'] = smo364880;
smo364880.setAttribute('id', 'smo364880');
smo364897v0ar.push(smo364880);
const smo364881 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo364881'] = smo364881;
smo364881.setAttribute('id', 'smo364881');
smo364897v0ar.push(smo364881);
smo364897v0.addTickables(smo364897v0ar)
fmtsmo36489785.joinVoices([smo364897v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386589 = smo362923.getStemDirection();
smo362923.setStemDirection(dirsmo386589);
smo362924.setStemDirection(dirsmo386589);
smo362925.setStemDirection(dirsmo386589);
const smo386589 = new VF.Beam([smo362923,smo362924,smo362925]);
const dirsmo386590 = smo362926.getStemDirection();
smo362926.setStemDirection(dirsmo386590);
smo362927.setStemDirection(dirsmo386590);
smo362928.setStemDirection(dirsmo386590);
const smo386590 = new VF.Beam([smo362926,smo362927,smo362928]);
const dirsmo386593 = smo364878.getStemDirection();
smo364878.setStemDirection(dirsmo386593);
smo364879.setStemDirection(dirsmo386593);
const smo386593 = new VF.Beam([smo364878,smo364879]);
const dirsmo386594 = smo364880.getStemDirection();
smo364880.setStemDirection(dirsmo386594);
smo364881.setStemDirection(dirsmo386594);
const smo386594 = new VF.Beam([smo364880,smo364881]);
 
// formatting measures in staff group smo365028
fmtsmo36294485.format([smo362944v0,smo364897v0], 281);
const stavesmo362944 = new VF.Stave(368, 1777, 295);
stavesmo362944.setAttribute('id', 'stavesmo362944');
stavesmo362944.setBegBarType(VF.Barline.type.NONE);
stavesmo362944.setContext(context);
stavesmo362944.draw();
smo362944v0.draw(context, stavesmo362944);
smo386589.setContext(context);
smo386589.draw();
smo386590.setContext(context);
smo386590.draw();
const stavesmo364897 = new VF.Stave(368, 1921, 295);
stavesmo364897.setAttribute('id', 'stavesmo364897');
stavesmo364897.setBegBarType(VF.Barline.type.NONE);
stavesmo364897.setContext(context);
stavesmo364897.draw();
smo364897v0.draw(context, stavesmo364897);
smo386593.setContext(context);
smo386593.draw();
smo386594.setContext(context);
smo386594.draw();
const fmtsmo36296886 = new VF.Formatter();
//
// voices and notes for stave 0 86
const smo362968v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362968v0ar = [];
const smo362945 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo362945'] = smo362945;
smo362945.setAttribute('id', 'smo362945');
smo362968v0ar.push(smo362945);
const smo362946 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo362946'] = smo362946;
smo362946.setAttribute('id', 'smo362946');
smo362968v0ar.push(smo362946);
const smo362947 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n"]}'))
noteHash['smo362947'] = smo362947;
smo362947.setAttribute('id', 'smo362947');
smo362968v0ar.push(smo362947);
const smo362948 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo362948'] = smo362948;
smo362948.setAttribute('id', 'smo362948');
smo362968v0ar.push(smo362948);
const smo362949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo362949'] = smo362949;
smo362949.setAttribute('id', 'smo362949');
smo362968v0ar.push(smo362949);
const smo362950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo362950'] = smo362950;
smo362950.setAttribute('id', 'smo362950');
smo362968v0ar.push(smo362950);
const smo362951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo362951'] = smo362951;
smo362951.setAttribute('id', 'smo362951');
smo362968v0ar.push(smo362951);
const smo362952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo362952'] = smo362952;
smo362952.setAttribute('id', 'smo362952');
smo362968v0ar.push(smo362952);
smo362968v0.addTickables(smo362968v0ar)
fmtsmo36296886.joinVoices([smo362968v0]);
const fmtsmo36491786 = new VF.Formatter();
//
// voices and notes for stave 1 86
const smo364917v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364917v0ar = [];
const smo364898 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo364898'] = smo364898;
smo364898.setAttribute('id', 'smo364898');
smo364917v0ar.push(smo364898);
const smo364899 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo364899'] = smo364899;
smo364899.setAttribute('id', 'smo364899');
smo364917v0ar.push(smo364899);
const smo364900 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo364900'] = smo364900;
smo364900.setAttribute('id', 'smo364900');
smo364917v0ar.push(smo364900);
const smo364901 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
noteHash['smo364901'] = smo364901;
smo364901.setAttribute('id', 'smo364901');
smo364917v0ar.push(smo364901);
smo364917v0.addTickables(smo364917v0ar)
fmtsmo36491786.joinVoices([smo364917v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386597 = smo362946.getStemDirection();
smo362946.setStemDirection(dirsmo386597);
smo362947.setStemDirection(dirsmo386597);
smo362948.setStemDirection(dirsmo386597);
const smo386597 = new VF.Beam([smo362946,smo362947,smo362948]);
const dirsmo386598 = smo362949.getStemDirection();
smo362949.setStemDirection(dirsmo386598);
smo362950.setStemDirection(dirsmo386598);
smo362951.setStemDirection(dirsmo386598);
smo362952.setStemDirection(dirsmo386598);
const smo386598 = new VF.Beam([smo362949,smo362950,smo362951,smo362952]);
const dirsmo386601 = smo364898.getStemDirection();
smo364898.setStemDirection(dirsmo386601);
smo364899.setStemDirection(dirsmo386601);
const smo386601 = new VF.Beam([smo364898,smo364899]);
const dirsmo386602 = smo364900.getStemDirection();
smo364900.setStemDirection(dirsmo386602);
smo364901.setStemDirection(dirsmo386602);
const smo386602 = new VF.Beam([smo364900,smo364901]);
 
// formatting measures in staff group smo365028
fmtsmo36296886.format([smo362968v0,smo364917v0], 281);
const stavesmo362968 = new VF.Stave(663, 1777, 295);
stavesmo362968.setAttribute('id', 'stavesmo362968');
stavesmo362968.setBegBarType(VF.Barline.type.NONE);
stavesmo362968.setContext(context);
stavesmo362968.draw();
smo362968v0.draw(context, stavesmo362968);
smo386597.setContext(context);
smo386597.draw();
smo386598.setContext(context);
smo386598.draw();
const stavesmo364917 = new VF.Stave(663, 1921, 295);
stavesmo364917.setAttribute('id', 'stavesmo364917');
stavesmo364917.setBegBarType(VF.Barline.type.NONE);
stavesmo364917.setContext(context);
stavesmo364917.draw();
smo364917v0.draw(context, stavesmo364917);
smo386601.setContext(context);
smo386601.draw();
smo386602.setContext(context);
smo386602.draw();
const fmtsmo36299187 = new VF.Formatter();
//
// voices and notes for stave 0 87
const smo362991v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo362991v0ar = [];
const smo362969 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo362969'] = smo362969;
smo362969.setAttribute('id', 'smo362969');
smo362991v0ar.push(smo362969);
const smo362970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/4/n"]}'))
noteHash['smo362970'] = smo362970;
smo362970.setAttribute('id', 'smo362970');
const smo3629700acc = new VF.Accidental('b');
smo362970.addModifier(smo3629700acc, 0);
smo362991v0ar.push(smo362970);
const smo362971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo362971'] = smo362971;
smo362971.setAttribute('id', 'smo362971');
const smo3629710acc = new VF.Accidental('n');
smo362971.addModifier(smo3629710acc, 0);
smo362991v0ar.push(smo362971);
const smo362972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","gn/5/n"]}'))
noteHash['smo362972'] = smo362972;
smo362972.setAttribute('id', 'smo362972');
smo362991v0ar.push(smo362972);
const smo362973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","gn/5/n"]}'))
noteHash['smo362973'] = smo362973;
smo362973.setAttribute('id', 'smo362973');
smo362991v0ar.push(smo362973);
const smo362974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","fn/5/n"]}'))
noteHash['smo362974'] = smo362974;
smo362974.setAttribute('id', 'smo362974');
smo362991v0ar.push(smo362974);
const smo362975 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n"]}'))
noteHash['smo362975'] = smo362975;
smo362975.setAttribute('id', 'smo362975');
smo362991v0ar.push(smo362975);
smo362991v0.addTickables(smo362991v0ar)
fmtsmo36299187.joinVoices([smo362991v0]);
const fmtsmo36493787 = new VF.Formatter();
//
// voices and notes for stave 1 87
const smo364937v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364937v0ar = [];
const smo364918 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo364918'] = smo364918;
smo364918.setAttribute('id', 'smo364918');
smo364937v0ar.push(smo364918);
const smo364919 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
noteHash['smo364919'] = smo364919;
smo364919.setAttribute('id', 'smo364919');
smo364937v0ar.push(smo364919);
const smo364920 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
noteHash['smo364920'] = smo364920;
smo364920.setAttribute('id', 'smo364920');
smo364937v0ar.push(smo364920);
const smo364921 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
noteHash['smo364921'] = smo364921;
smo364921.setAttribute('id', 'smo364921');
smo364937v0ar.push(smo364921);
smo364937v0.addTickables(smo364937v0ar)
fmtsmo36493787.joinVoices([smo364937v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386605 = smo362969.getStemDirection();
smo362969.setStemDirection(dirsmo386605);
smo362970.setStemDirection(dirsmo386605);
smo362971.setStemDirection(dirsmo386605);
smo362972.setStemDirection(dirsmo386605);
const smo386605 = new VF.Beam([smo362969,smo362970,smo362971,smo362972]);
const dirsmo386606 = smo362973.getStemDirection();
smo362973.setStemDirection(dirsmo386606);
smo362974.setStemDirection(dirsmo386606);
smo362975.setStemDirection(dirsmo386606);
const smo386606 = new VF.Beam([smo362973,smo362974,smo362975]);
const dirsmo386609 = smo364918.getStemDirection();
smo364918.setStemDirection(dirsmo386609);
smo364919.setStemDirection(dirsmo386609);
const smo386609 = new VF.Beam([smo364918,smo364919]);
const dirsmo386610 = smo364920.getStemDirection();
smo364920.setStemDirection(dirsmo386610);
smo364921.setStemDirection(dirsmo386610);
const smo386610 = new VF.Beam([smo364920,smo364921]);
 
// formatting measures in staff group smo365028
fmtsmo36299187.format([smo362991v0,smo364937v0], 281);
const stavesmo362991 = new VF.Stave(958, 1777, 295);
stavesmo362991.setAttribute('id', 'stavesmo362991');
stavesmo362991.setBegBarType(VF.Barline.type.NONE);
stavesmo362991.setContext(context);
stavesmo362991.draw();
smo362991v0.draw(context, stavesmo362991);
smo386605.setContext(context);
smo386605.draw();
smo386606.setContext(context);
smo386606.draw();
const stavesmo364937 = new VF.Stave(958, 1921, 295);
stavesmo364937.setAttribute('id', 'stavesmo364937');
stavesmo364937.setBegBarType(VF.Barline.type.NONE);
stavesmo364937.setContext(context);
stavesmo364937.draw();
smo364937v0.draw(context, stavesmo364937);
smo386609.setContext(context);
smo386609.draw();
smo386610.setContext(context);
smo386610.draw();
const fmtsmo36301588 = new VF.Formatter();
//
// voices and notes for stave 0 88
const smo363015v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363015v0ar = [];
const smo362992 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n"]}'))
noteHash['smo362992'] = smo362992;
smo362992.setAttribute('id', 'smo362992');
smo363015v0ar.push(smo362992);
const smo362993 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
noteHash['smo362993'] = smo362993;
smo362993.setAttribute('id', 'smo362993');
const smo3629930acc = new VF.Accidental('b');
smo362993.addModifier(smo3629930acc, 0);
smo363015v0ar.push(smo362993);
const smo362994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo362994'] = smo362994;
smo362994.setAttribute('id', 'smo362994');
const smo3629940acc = new VF.Accidental('n');
smo362994.addModifier(smo3629940acc, 0);
smo363015v0ar.push(smo362994);
const smo362995 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo362995'] = smo362995;
smo362995.setAttribute('id', 'smo362995');
smo363015v0ar.push(smo362995);
const smo362996 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo362996'] = smo362996;
smo362996.setAttribute('id', 'smo362996');
smo363015v0ar.push(smo362996);
const smo362997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
noteHash['smo362997'] = smo362997;
smo362997.setAttribute('id', 'smo362997');
smo363015v0ar.push(smo362997);
const smo362998 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo362998'] = smo362998;
smo362998.setAttribute('id', 'smo362998');
smo363015v0ar.push(smo362998);
const smo362999 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo362999'] = smo362999;
smo362999.setAttribute('id', 'smo362999');
smo363015v0ar.push(smo362999);
smo363015v0.addTickables(smo363015v0ar)
fmtsmo36301588.joinVoices([smo363015v0]);
const fmtsmo36495788 = new VF.Formatter();
//
// voices and notes for stave 1 88
const smo364957v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364957v0ar = [];
const smo364938 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo364938'] = smo364938;
smo364938.setAttribute('id', 'smo364938');
smo364957v0ar.push(smo364938);
const smo364939 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo364939'] = smo364939;
smo364939.setAttribute('id', 'smo364939');
smo364957v0ar.push(smo364939);
const smo364940 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","cn/4/n","eb/4/n"]}'))
noteHash['smo364940'] = smo364940;
smo364940.setAttribute('id', 'smo364940');
const smo3649400acc = new VF.Accidental('b');
smo364940.addModifier(smo3649400acc, 0);
const smo3649402acc = new VF.Accidental('b');
smo364940.addModifier(smo3649402acc, 2);
smo364957v0ar.push(smo364940);
const smo364941 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo364941'] = smo364941;
smo364941.setAttribute('id', 'smo364941');
const smo3649410acc = new VF.Accidental('n');
smo364941.addModifier(smo3649410acc, 0);
const smo3649412acc = new VF.Accidental('n');
smo364941.addModifier(smo3649412acc, 2);
smo364957v0ar.push(smo364941);
smo364957v0.addTickables(smo364957v0ar)
fmtsmo36495788.joinVoices([smo364957v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386613 = smo362992.getStemDirection();
smo362992.setStemDirection(dirsmo386613);
smo362993.setStemDirection(dirsmo386613);
smo362994.setStemDirection(dirsmo386613);
smo362995.setStemDirection(dirsmo386613);
const smo386613 = new VF.Beam([smo362992,smo362993,smo362994,smo362995]);
const dirsmo386614 = smo362996.getStemDirection();
smo362996.setStemDirection(dirsmo386614);
smo362997.setStemDirection(dirsmo386614);
smo362998.setStemDirection(dirsmo386614);
smo362999.setStemDirection(dirsmo386614);
const smo386614 = new VF.Beam([smo362996,smo362997,smo362998,smo362999]);
const dirsmo386617 = smo364938.getStemDirection();
smo364938.setStemDirection(dirsmo386617);
smo364939.setStemDirection(dirsmo386617);
const smo386617 = new VF.Beam([smo364938,smo364939]);
const dirsmo386618 = smo364940.getStemDirection();
smo364940.setStemDirection(dirsmo386618);
smo364941.setStemDirection(dirsmo386618);
const smo386618 = new VF.Beam([smo364940,smo364941]);
 
// formatting measures in staff group smo365028
fmtsmo36301588.format([smo363015v0,smo364957v0], 281);
const stavesmo363015 = new VF.Stave(1253, 1777, 295);
stavesmo363015.setAttribute('id', 'stavesmo363015');
stavesmo363015.setBegBarType(VF.Barline.type.NONE);
stavesmo363015.setContext(context);
stavesmo363015.draw();
smo363015v0.draw(context, stavesmo363015);
smo386613.setContext(context);
smo386613.draw();
smo386614.setContext(context);
smo386614.draw();
const stavesmo364957 = new VF.Stave(1253, 1921, 295);
stavesmo364957.setAttribute('id', 'stavesmo364957');
stavesmo364957.setBegBarType(VF.Barline.type.NONE);
stavesmo364957.setContext(context);
stavesmo364957.draw();
smo364957v0.draw(context, stavesmo364957);
smo386617.setContext(context);
smo386617.draw();
smo386618.setContext(context);
smo386618.draw();
const fmtsmo36303689 = new VF.Formatter();
//
// voices and notes for stave 0 89
const smo363036v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363036v0ar = [];
const smo363016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","cn/5/n"]}'))
noteHash['smo363016'] = smo363016;
smo363016.setAttribute('id', 'smo363016');
const smo3630160acc = new VF.Accidental('b');
smo363016.addModifier(smo3630160acc, 0);
smo363036v0ar.push(smo363016);
const smo363017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","cn/5/n"]}'))
noteHash['smo363017'] = smo363017;
smo363017.setAttribute('id', 'smo363017');
smo363036v0ar.push(smo363017);
const smo363018 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","bn/4/n","en/5/n"]}'))
noteHash['smo363018'] = smo363018;
smo363018.setAttribute('id', 'smo363018');
smo363036v0ar.push(smo363018);
const smo363019 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","bn/4/n","dn/5/n"]}'))
noteHash['smo363019'] = smo363019;
smo363019.setAttribute('id', 'smo363019');
smo363036v0ar.push(smo363019);
const smo363020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n","cn/5/n"]}'))
noteHash['smo363020'] = smo363020;
smo363020.setAttribute('id', 'smo363020');
const smo3630201acc = new VF.Accidental('n');
smo363020.addModifier(smo3630201acc, 1);
smo363036v0ar.push(smo363020);
smo363036v0.addTickables(smo363036v0ar)
fmtsmo36303689.joinVoices([smo363036v0]);
const fmtsmo36497789 = new VF.Formatter();
//
// voices and notes for stave 1 89
const smo364977v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364977v0ar = [];
const smo364958 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
noteHash['smo364958'] = smo364958;
smo364958.setAttribute('id', 'smo364958');
smo364977v0ar.push(smo364958);
const smo364959 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
noteHash['smo364959'] = smo364959;
smo364959.setAttribute('id', 'smo364959');
smo364977v0ar.push(smo364959);
const smo364960 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo364960'] = smo364960;
smo364960.setAttribute('id', 'smo364960');
smo364977v0ar.push(smo364960);
const smo364961 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n","bn/3/n"]}'))
noteHash['smo364961'] = smo364961;
smo364961.setAttribute('id', 'smo364961');
smo364977v0ar.push(smo364961);
smo364977v0.addTickables(smo364977v0ar)
fmtsmo36497789.joinVoices([smo364977v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386621 = smo363016.getStemDirection();
smo363016.setStemDirection(dirsmo386621);
smo363017.setStemDirection(dirsmo386621);
const smo386621 = new VF.Beam([smo363016,smo363017]);
const dirsmo386622 = smo363018.getStemDirection();
smo363018.setStemDirection(dirsmo386622);
smo363019.setStemDirection(dirsmo386622);
smo363020.setStemDirection(dirsmo386622);
const smo386622 = new VF.Beam([smo363018,smo363019,smo363020]);
const dirsmo386625 = smo364958.getStemDirection();
smo364958.setStemDirection(dirsmo386625);
smo364959.setStemDirection(dirsmo386625);
const smo386625 = new VF.Beam([smo364958,smo364959]);
const dirsmo386626 = smo364960.getStemDirection();
smo364960.setStemDirection(dirsmo386626);
smo364961.setStemDirection(dirsmo386626);
const smo386626 = new VF.Beam([smo364960,smo364961]);
 
// formatting measures in staff group smo365028
fmtsmo36303689.format([smo363036v0,smo364977v0], 281);
const stavesmo363036 = new VF.Stave(1548, 1777, 295);
stavesmo363036.setAttribute('id', 'stavesmo363036');
stavesmo363036.setBegBarType(VF.Barline.type.NONE);
stavesmo363036.setContext(context);
stavesmo363036.draw();
smo363036v0.draw(context, stavesmo363036);
smo386621.setContext(context);
smo386621.draw();
smo386622.setContext(context);
smo386622.draw();
const stavesmo364977 = new VF.Stave(1548, 1921, 295);
stavesmo364977.setAttribute('id', 'stavesmo364977');
stavesmo364977.setBegBarType(VF.Barline.type.NONE);
stavesmo364977.setContext(context);
stavesmo364977.draw();
smo364977v0.draw(context, stavesmo364977);
smo386625.setContext(context);
smo386625.draw();
smo386626.setContext(context);
smo386626.draw();
const rightsmo365028stavesmo3630361 = new VF.StaveConnector(stavesmo363036, stavesmo364977).setType(0);
rightsmo365028stavesmo3630361.setContext(context).draw();
const fmtsmo36305890 = new VF.Formatter();
//
// voices and notes for stave 0 90
const smo363058v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363058v0ar = [];
const smo363037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n","cn/5/n"]}'))
noteHash['smo363037'] = smo363037;
smo363037.setAttribute('id', 'smo363037');
smo363058v0ar.push(smo363037);
const smo363038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo363038'] = smo363038;
smo363038.setAttribute('id', 'smo363038');
smo363058v0ar.push(smo363038);
const smo363039 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo363039'] = smo363039;
smo363039.setAttribute('id', 'smo363039');
smo363058v0ar.push(smo363039);
const smo363040 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo363040'] = smo363040;
smo363040.setAttribute('id', 'smo363040');
smo363058v0ar.push(smo363040);
const smo363041 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo363041'] = smo363041;
smo363041.setAttribute('id', 'smo363041');
smo363058v0ar.push(smo363041);
smo363058v0.addTickables(smo363058v0ar)
fmtsmo36305890.joinVoices([smo363058v0]);
const fmtsmo36499790 = new VF.Formatter();
//
// voices and notes for stave 1 90
const smo364997v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo364997v0ar = [];
const smo364978 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
noteHash['smo364978'] = smo364978;
smo364978.setAttribute('id', 'smo364978');
smo364997v0ar.push(smo364978);
const smo364979 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo364979'] = smo364979;
smo364979.setAttribute('id', 'smo364979');
smo364997v0ar.push(smo364979);
const smo364980 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo364980'] = smo364980;
smo364980.setAttribute('id', 'smo364980');
smo364997v0ar.push(smo364980);
smo364997v0.addTickables(smo364997v0ar)
fmtsmo36499790.joinVoices([smo364997v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386633 = smo363037.getStemDirection();
smo363037.setStemDirection(dirsmo386633);
smo363038.setStemDirection(dirsmo386633);
smo363039.setStemDirection(dirsmo386633);
const smo386633 = new VF.Beam([smo363037,smo363038,smo363039]);
const dirsmo386634 = smo363040.getStemDirection();
smo363040.setStemDirection(dirsmo386634);
smo363041.setStemDirection(dirsmo386634);
const smo386634 = new VF.Beam([smo363040,smo363041]);
 
// formatting measures in staff group smo365028
fmtsmo36305890.format([smo363058v0,smo364997v0], 233);
const stavesmo363058 = new VF.Stave(73, 2089, 295);
stavesmo363058.setAttribute('id', 'stavesmo363058');
stavesmo363058.setBegBarType(1);
stavesmo363058.setEndBarType(5);
stavesmo363058.addClef('treble');
stavesmo363058.setContext(context);
stavesmo363058.draw();
smo363058v0.draw(context, stavesmo363058);
smo386633.setContext(context);
smo386633.draw();
smo386634.setContext(context);
smo386634.draw();
const stavesmo364997 = new VF.Stave(73, 2234, 295);
stavesmo364997.setAttribute('id', 'stavesmo364997');
stavesmo364997.setBegBarType(1);
stavesmo364997.setEndBarType(5);
stavesmo364997.addClef('bass');
stavesmo364997.setContext(context);
stavesmo364997.draw();
smo364997v0.draw(context, stavesmo364997);
const leftsmo365028stavesmo3630581 = new VF.StaveConnector(stavesmo363058, stavesmo364997).setType(3);
leftsmo365028stavesmo3630581.setContext(context).draw();
const fmtsmo36307891 = new VF.Formatter();
//
// voices and notes for stave 0 91
const smo363078v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo363078v0ar = [];
const smo363059 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n","cn/5/n"]}'))
noteHash['smo363059'] = smo363059;
smo363059.setAttribute('id', 'smo363059');
smo363078v0ar.push(smo363059);
const smo363060 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","gn/5/n","cn/6/n"]}'))
noteHash['smo363060'] = smo363060;
smo363060.setAttribute('id', 'smo363060');
smo363078v0ar.push(smo363060);
const smo363061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo363061'] = smo363061;
smo363061.setAttribute('id', 'smo363061');
smo363078v0ar.push(smo363061);
smo363078v0.addTickables(smo363078v0ar)
fmtsmo36307891.joinVoices([smo363078v0]);
const fmtsmo36501891 = new VF.Formatter();
//
// voices and notes for stave 1 91
const smo365018v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo365018v0ar = [];
const smo364998 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
noteHash['smo364998'] = smo364998;
smo364998.setAttribute('id', 'smo364998');
smo365018v0ar.push(smo364998);
const smo364999 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
noteHash['smo364999'] = smo364999;
smo364999.setAttribute('id', 'smo364999');
smo365018v0ar.push(smo364999);
const smo365000 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
noteHash['smo365000'] = smo365000;
smo365000.setAttribute('id', 'smo365000');
smo365018v0ar.push(smo365000);
const smo365001 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo365001'] = smo365001;
smo365001.setAttribute('id', 'smo365001');
smo365018v0ar.push(smo365001);
smo365018v0.addTickables(smo365018v0ar)
fmtsmo36501891.joinVoices([smo365018v0]);
// create beam groups and tuplets for format grp smo365028 before formatting
const dirsmo386639 = smo364998.getStemDirection();
smo364998.setStemDirection(dirsmo386639);
smo364999.setStemDirection(dirsmo386639);
const smo386639 = new VF.Beam([smo364998,smo364999]);
 
// formatting measures in staff group smo365028
fmtsmo36307891.format([smo363078v0,smo365018v0], 281);
const stavesmo363078 = new VF.Stave(368, 2089, 295);
stavesmo363078.setAttribute('id', 'stavesmo363078');
stavesmo363078.setBegBarType(VF.Barline.type.NONE);
stavesmo363078.setContext(context);
stavesmo363078.draw();
smo363078v0.draw(context, stavesmo363078);
const stavesmo365018 = new VF.Stave(368, 2234, 295);
stavesmo365018.setAttribute('id', 'stavesmo365018');
stavesmo365018.setBegBarType(VF.Barline.type.NONE);
stavesmo365018.setEndBarType(3);
stavesmo365018.setContext(context);
stavesmo365018.draw();
smo365018v0.draw(context, stavesmo365018);
smo386639.setContext(context);
smo386639.draw();
const smo390376 = new VF.StaveHairpin({ first_note: smo362522, last_note: smo362522 });
smo390376.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -10,right_shift_px: 10 });
smo390376.setContext(context).setPosition(4).draw();
const smo390377 = new VF.StaveHairpin({ first_note: smo362523, last_note: smo362523 });
smo390377.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo390377.setContext(context).setPosition(4).draw();
const smo390378 = new VF.StaveTie({ first_note: smo362371, last_note: smo362372, first_indices: [0], last_indices: [0]});
smo390378.setContext(context).draw();
const smo390379 = new VF.StaveTie({ first_note: smo362412, last_note: smo362413, first_indices: [0,1], last_indices: [0,1]});
smo390379.setContext(context).draw();
const smo390380 = new VF.StaveTie({ first_note: smo362456, last_note: smo362457, first_indices: [0,1], last_indices: [0,1]});
smo390380.setContext(context).draw();
const smo390381 = new VF.StaveTie({ first_note: smo362475, last_note: smo362476, first_indices: [0,1,2], last_indices: [0,1,2]});
smo390381.setContext(context).draw();
const smo390382 = new VF.StaveTie({ first_note: smo362502, last_note: smo362503, first_indices: [0], last_indices: [0]});
smo390382.setContext(context).draw();
const smo390383 = new VF.StaveTie({ first_note: smo362545, last_note: smo362546, first_indices: [0,1], last_indices: [0,1]});
smo390383.setContext(context).draw();
const smo390384 = new VF.StaveTie({ first_note: smo362613, last_note: smo362614, first_indices: [0], last_indices: [0]});
smo390384.setContext(context).draw();
const smo390385 = new VF.StaveTie({ first_note: smo362637, last_note: smo362638, first_indices: [0], last_indices: [0]});
smo390385.setContext(context).draw();
const smo390386 = new VF.StaveTie({ first_note: smo362662, last_note: smo362679, first_indices: [0,1], last_indices: [0,1]});
smo390386.setContext(context).draw();
const smo390387 = new VF.StaveTie({ first_note: smo362700, last_note: smo362701, first_indices: [0,1], last_indices: [0,1]});
smo390387.setContext(context).draw();
const smo390388 = new VF.StaveTie({ first_note: smo362746, last_note: smo362747, first_indices: [0,1], last_indices: [0,1]});
smo390388.setContext(context).draw();
const smo390389 = new VF.StaveTie({ first_note: smo362792, last_note: smo362793, first_indices: [0,1], last_indices: [0,1]});
smo390389.setContext(context).draw();
const smo390390 = new VF.StaveTie({ first_note: smo362879, last_note: smo362880, first_indices: [0,1], last_indices: [0,1]});
smo390390.setContext(context).draw();
const smo390391 = new VF.StaveTie({ first_note: smo362925, last_note: smo362926, first_indices: [0,1], last_indices: [0,1]});
smo390391.setContext(context).draw();
const smo390392 = new VF.StaveTie({ first_note: smo362972, last_note: smo362973, first_indices: [0,1], last_indices: [0,1]});
smo390392.setContext(context).draw();
const smo390393 = new VF.StaveTie({ first_note: smo362995, last_note: smo362996, first_indices: [0], last_indices: [0]});
smo390393.setContext(context).draw();
const smo390394 = new VF.StaveTie({ first_note: smo363020, last_note: null, first_indices: [0,1,2], last_indices: [0,1,2]});
smo390394.setContext(context).draw();
const smo390395 = new VF.StaveTie({ first_note: null, last_note: smo363037, first_indices: [0,1,2], last_indices: [0,1,2]});
smo390395.setContext(context).draw();
const smo362574smo362589 = new VF.Volta(5, '1', 958, 20);
smo362574smo362589.setContext(context).draw(stavesmo362589, -1 * 0);
const smo362594smo362610 = new VF.Volta(5, '2', 1253, 20);
smo362594smo362610.setContext(context).draw(stavesmo362610, -1 * 0);
const smo363043smo363058 = new VF.Volta(5, '1', 73, 20);
smo363043smo363058.setContext(context).draw(stavesmo363058, -1 * 0);
const smo363062smo363078 = new VF.Volta(5, '2', 368, 20);
smo363062smo363078.setContext(context).draw(stavesmo363078, -1 * 0);
}
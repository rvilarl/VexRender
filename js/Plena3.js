function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
//
// create the musical objects
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1569.9999999999998');
svg.setAttributeNS('', 'height', '1212.8945249597423');
svg.setAttributeNS('', 'viewBox', '0 0 2574 1989');
VF.setMusicFont("Bravura","Gonville","Custom");
const noteHash = {};
const voiceHash = {}
const fmtsmo25710213 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo257102v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo257102v0ar = [];
const smo257078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo257078'] = smo257078;
smo257078.setAttribute('id', 'smo257078');
smo257102v0ar.push(smo257078);
const smo257079 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo257079'] = smo257079;
smo257079.setAttribute('id', 'smo257079');
smo257102v0ar.push(smo257079);
const smo257080 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo257080'] = smo257080;
smo257080.setAttribute('id', 'smo257080');
smo257102v0ar.push(smo257080);
const smo257081 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo257081'] = smo257081;
smo257081.setAttribute('id', 'smo257081');
smo257102v0ar.push(smo257081);
const smo257082 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo257082'] = smo257082;
smo257082.setAttribute('id', 'smo257082');
smo257102v0ar.push(smo257082);
const smo257083 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo257083'] = smo257083;
smo257083.setAttribute('id', 'smo257083');
smo257102v0ar.push(smo257083);
const smo257084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo257084'] = smo257084;
smo257084.setAttribute('id', 'smo257084');
smo257102v0ar.push(smo257084);
const smo257085 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo257085'] = smo257085;
smo257085.setAttribute('id', 'smo257085');
smo257102v0ar.push(smo257085);
const smo257086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo257086'] = smo257086;
smo257086.setAttribute('id', 'smo257086');
smo257102v0ar.push(smo257086);
smo257102v0.addTickables(smo257102v0ar)
fmtsmo25710213.joinVoices([smo257102v0]);
const fmtsmo25952913 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo259529v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo259529v0ar = [];
const smo259505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo259505'] = smo259505;
smo259505.setAttribute('id', 'smo259505');
smo259529v0ar.push(smo259505);
const smo259506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo259506'] = smo259506;
smo259506.setAttribute('id', 'smo259506');
smo259529v0ar.push(smo259506);
const smo259507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo259507'] = smo259507;
smo259507.setAttribute('id', 'smo259507');
smo259529v0ar.push(smo259507);
const smo259508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
noteHash['smo259508'] = smo259508;
smo259508.setAttribute('id', 'smo259508');
smo259529v0ar.push(smo259508);
const smo259509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo259509'] = smo259509;
smo259509.setAttribute('id', 'smo259509');
smo259529v0ar.push(smo259509);
const smo259510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo259510'] = smo259510;
smo259510.setAttribute('id', 'smo259510');
smo259529v0ar.push(smo259510);
const smo259511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo259511'] = smo259511;
smo259511.setAttribute('id', 'smo259511');
smo259529v0ar.push(smo259511);
const smo259512 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo259512'] = smo259512;
smo259512.setAttribute('id', 'smo259512');
smo259529v0ar.push(smo259512);
const smo259513 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo259513'] = smo259513;
smo259513.setAttribute('id', 'smo259513');
smo259529v0ar.push(smo259513);
smo259529v0.addTickables(smo259529v0ar)
fmtsmo25952913.joinVoices([smo259529v0]);
const fmtsmo26194713 = new VF.Formatter();
//
// voices and notes for stave 2 13
const smo261947v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo261947v0ar = [];
const smo261923 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo261923'] = smo261923;
smo261923.setAttribute('id', 'smo261923');
smo261947v0ar.push(smo261923);
const smo261924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo261924'] = smo261924;
smo261924.setAttribute('id', 'smo261924');
smo261947v0ar.push(smo261924);
const smo261925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo261925'] = smo261925;
smo261925.setAttribute('id', 'smo261925');
smo261947v0ar.push(smo261925);
const smo261926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo261926'] = smo261926;
smo261926.setAttribute('id', 'smo261926');
smo261947v0ar.push(smo261926);
const smo261927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo261927'] = smo261927;
smo261927.setAttribute('id', 'smo261927');
smo261947v0ar.push(smo261927);
const smo261928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo261928'] = smo261928;
smo261928.setAttribute('id', 'smo261928');
smo261947v0ar.push(smo261928);
const smo261929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo261929'] = smo261929;
smo261929.setAttribute('id', 'smo261929');
smo261947v0ar.push(smo261929);
const smo261930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo261930'] = smo261930;
smo261930.setAttribute('id', 'smo261930');
smo261947v0ar.push(smo261930);
const smo261931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo261931'] = smo261931;
smo261931.setAttribute('id', 'smo261931');
smo261947v0ar.push(smo261931);
smo261947v0.addTickables(smo261947v0ar)
fmtsmo26194713.joinVoices([smo261947v0]);
const fmtsmo26432113 = new VF.Formatter();
//
// voices and notes for stave 3 13
const smo264321v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo264321v0ar = [];
const smo264297 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo264297'] = smo264297;
smo264297.setAttribute('id', 'smo264297');
smo264321v0ar.push(smo264297);
const smo264298 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo264298'] = smo264298;
smo264298.setAttribute('id', 'smo264298');
smo264321v0ar.push(smo264298);
const smo264299 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo264299'] = smo264299;
smo264299.setAttribute('id', 'smo264299');
smo264321v0ar.push(smo264299);
const smo264300 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo264300'] = smo264300;
smo264300.setAttribute('id', 'smo264300');
smo264321v0ar.push(smo264300);
const smo264301 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo264301'] = smo264301;
smo264301.setAttribute('id', 'smo264301');
smo264321v0ar.push(smo264301);
const smo264302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo264302'] = smo264302;
smo264302.setAttribute('id', 'smo264302');
smo264321v0ar.push(smo264302);
const smo264303 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo264303'] = smo264303;
smo264303.setAttribute('id', 'smo264303');
smo264321v0ar.push(smo264303);
const smo264304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo264304'] = smo264304;
smo264304.setAttribute('id', 'smo264304');
smo264321v0ar.push(smo264304);
const smo264305 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo264305'] = smo264305;
smo264305.setAttribute('id', 'smo264305');
smo264321v0ar.push(smo264305);
smo264321v0.addTickables(smo264321v0ar)
fmtsmo26432113.joinVoices([smo264321v0]);
const fmtsmo26668113 = new VF.Formatter();
//
// voices and notes for stave 4 13
const smo266681v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266681v0ar = [];
const smo266662 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo266662'] = smo266662;
smo266662.setAttribute('id', 'smo266662');
const  smo372002 = new VF.Articulation('a.').setPosition(3);
smo266662.addModifier(smo372002, 0);
smo266681v0ar.push(smo266662);
const smo266664 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo266664'] = smo266664;
smo266664.setAttribute('id', 'smo266664');
smo266681v0ar.push(smo266664);
const smo266665 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo266665'] = smo266665;
smo266665.setAttribute('id', 'smo266665');
smo266681v0ar.push(smo266665);
smo266681v0.addTickables(smo266681v0ar)
fmtsmo26668113.joinVoices([smo266681v0]);
const fmtsmo26898113 = new VF.Formatter();
//
// voices and notes for stave 5 13
const smo268981v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo268981v0ar = [];
const smo268958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo268958'] = smo268958;
smo268958.setAttribute('id', 'smo268958');
smo268981v0ar.push(smo268958);
const smo268959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo268959'] = smo268959;
smo268959.setAttribute('id', 'smo268959');
smo268981v0ar.push(smo268959);
const smo268960 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo268960'] = smo268960;
smo268960.setAttribute('id', 'smo268960');
smo268981v0ar.push(smo268960);
const smo268961 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo268961'] = smo268961;
smo268961.setAttribute('id', 'smo268961');
smo268981v0ar.push(smo268961);
const smo268962 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo268962'] = smo268962;
smo268962.setAttribute('id', 'smo268962');
smo268981v0ar.push(smo268962);
const smo268963 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo268963'] = smo268963;
smo268963.setAttribute('id', 'smo268963');
smo268981v0ar.push(smo268963);
const smo268964 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo268964'] = smo268964;
smo268964.setAttribute('id', 'smo268964');
smo268981v0ar.push(smo268964);
const smo268965 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo268965'] = smo268965;
smo268965.setAttribute('id', 'smo268965');
smo268981v0ar.push(smo268965);
smo268981v0.addTickables(smo268981v0ar)
fmtsmo26898113.joinVoices([smo268981v0]);
const fmtsmo27138713 = new VF.Formatter();
//
// voices and notes for stave 6 13
const smo271387v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo271387v0ar = [];
const smo271364 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo271364'] = smo271364;
smo271364.setAttribute('id', 'smo271364');
smo271387v0ar.push(smo271364);
const smo271365 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo271365'] = smo271365;
smo271365.setAttribute('id', 'smo271365');
smo271387v0ar.push(smo271365);
const smo271366 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo271366'] = smo271366;
smo271366.setAttribute('id', 'smo271366');
smo271387v0ar.push(smo271366);
const smo271367 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo271367'] = smo271367;
smo271367.setAttribute('id', 'smo271367');
smo271387v0ar.push(smo271367);
const smo271368 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo271368'] = smo271368;
smo271368.setAttribute('id', 'smo271368');
smo271387v0ar.push(smo271368);
const smo271369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo271369'] = smo271369;
smo271369.setAttribute('id', 'smo271369');
smo271387v0ar.push(smo271369);
const smo271370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo271370'] = smo271370;
smo271370.setAttribute('id', 'smo271370');
smo271387v0ar.push(smo271370);
const smo271371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo271371'] = smo271371;
smo271371.setAttribute('id', 'smo271371');
smo271387v0ar.push(smo271371);
smo271387v0.addTickables(smo271387v0ar)
fmtsmo27138713.joinVoices([smo271387v0]);
const fmtsmo27373013 = new VF.Formatter();
//
// voices and notes for stave 7 13
const smo273730v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo273730v0ar = [];
const smo273714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo273714'] = smo273714;
smo273714.setAttribute('id', 'smo273714');
smo273730v0ar.push(smo273714);
smo273730v0.addTickables(smo273730v0ar)
fmtsmo27373013.joinVoices([smo273730v0]);
const fmtsmo27608013 = new VF.Formatter();
//
// voices and notes for stave 8 13
const smo276080v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo276080v0ar = [];
const smo276064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo276064'] = smo276064;
smo276064.setAttribute('id', 'smo276064');
smo276080v0ar.push(smo276064);
smo276080v0.addTickables(smo276080v0ar)
fmtsmo27608013.joinVoices([smo276080v0]);
const fmtsmo27848613 = new VF.Formatter();
//
// voices and notes for stave 9 13
const smo278486v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278486v0ar = [];
const smo278463 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo278463'] = smo278463;
smo278463.setAttribute('id', 'smo278463');
smo278486v0ar.push(smo278463);
const smo278464 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo278464'] = smo278464;
smo278464.setAttribute('id', 'smo278464');
smo278486v0ar.push(smo278464);
const smo278465 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo278465'] = smo278465;
smo278465.setAttribute('id', 'smo278465');
smo278486v0ar.push(smo278465);
const smo278466 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo278466'] = smo278466;
smo278466.setAttribute('id', 'smo278466');
smo278486v0ar.push(smo278466);
const smo278467 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo278467'] = smo278467;
smo278467.setAttribute('id', 'smo278467');
smo278486v0ar.push(smo278467);
const smo278468 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo278468'] = smo278468;
smo278468.setAttribute('id', 'smo278468');
smo278486v0ar.push(smo278468);
const smo278469 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo278469'] = smo278469;
smo278469.setAttribute('id', 'smo278469');
smo278486v0ar.push(smo278469);
const smo278470 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo278470'] = smo278470;
smo278470.setAttribute('id', 'smo278470');
smo278486v0ar.push(smo278470);
smo278486v0.addTickables(smo278486v0ar)
fmtsmo27848613.joinVoices([smo278486v0]);
const fmtsmo28085913 = new VF.Formatter();
//
// voices and notes for stave 10 13
const smo280859v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo280859v0ar = [];
const smo280836 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo280836'] = smo280836;
smo280836.setAttribute('id', 'smo280836');
smo280859v0ar.push(smo280836);
const smo280837 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo280837'] = smo280837;
smo280837.setAttribute('id', 'smo280837');
smo280859v0ar.push(smo280837);
const smo280838 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo280838'] = smo280838;
smo280838.setAttribute('id', 'smo280838');
smo280859v0ar.push(smo280838);
const smo280839 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo280839'] = smo280839;
smo280839.setAttribute('id', 'smo280839');
smo280859v0ar.push(smo280839);
const smo280840 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo280840'] = smo280840;
smo280840.setAttribute('id', 'smo280840');
smo280859v0ar.push(smo280840);
const smo280841 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo280841'] = smo280841;
smo280841.setAttribute('id', 'smo280841');
smo280859v0ar.push(smo280841);
const smo280842 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo280842'] = smo280842;
smo280842.setAttribute('id', 'smo280842');
smo280859v0ar.push(smo280842);
const smo280843 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo280843'] = smo280843;
smo280843.setAttribute('id', 'smo280843');
smo280859v0ar.push(smo280843);
smo280859v0.addTickables(smo280859v0ar)
fmtsmo28085913.joinVoices([smo280859v0]);
const fmtsmo28320513 = new VF.Formatter();
//
// voices and notes for stave 11 13
const smo283205v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo283205v0ar = [];
const smo283182 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo283182'] = smo283182;
smo283182.setAttribute('id', 'smo283182');
smo283205v0ar.push(smo283182);
const smo283183 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo283183'] = smo283183;
smo283183.setAttribute('id', 'smo283183');
smo283205v0ar.push(smo283183);
const smo283184 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo283184'] = smo283184;
smo283184.setAttribute('id', 'smo283184');
smo283205v0ar.push(smo283184);
const smo283185 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo283185'] = smo283185;
smo283185.setAttribute('id', 'smo283185');
smo283205v0ar.push(smo283185);
const smo283186 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo283186'] = smo283186;
smo283186.setAttribute('id', 'smo283186');
smo283205v0ar.push(smo283186);
const smo283187 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo283187'] = smo283187;
smo283187.setAttribute('id', 'smo283187');
smo283205v0ar.push(smo283187);
const smo283188 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo283188'] = smo283188;
smo283188.setAttribute('id', 'smo283188');
smo283205v0ar.push(smo283188);
const smo283189 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo283189'] = smo283189;
smo283189.setAttribute('id', 'smo283189');
smo283205v0ar.push(smo283189);
smo283205v0.addTickables(smo283205v0ar)
fmtsmo28320513.joinVoices([smo283205v0]);
const fmtsmo28554013 = new VF.Formatter();
//
// voices and notes for stave 12 13
const smo285540v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo285540v0ar = [];
const smo285521 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo285521'] = smo285521;
smo285521.setAttribute('id', 'smo285521');
const  smo372003 = new VF.Articulation('a.').setPosition(3);
smo285521.addModifier(smo372003, 0);
smo285540v0ar.push(smo285521);
const smo285523 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo285523'] = smo285523;
smo285523.setAttribute('id', 'smo285523');
smo285540v0ar.push(smo285523);
const smo285524 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n"]}'))
noteHash['smo285524'] = smo285524;
smo285524.setAttribute('id', 'smo285524');
smo285540v0ar.push(smo285524);
smo285540v0.addTickables(smo285540v0ar)
fmtsmo28554013.joinVoices([smo285540v0]);
const fmtsmo28786713 = new VF.Formatter();
//
// voices and notes for stave 13 13
const smo287867v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287867v0ar = [];
const smo287844 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo287844'] = smo287844;
smo287844.setAttribute('id', 'smo287844');
smo287867v0ar.push(smo287844);
const smo287845 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo287845'] = smo287845;
smo287845.setAttribute('id', 'smo287845');
smo287867v0ar.push(smo287845);
const smo287846 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo287846'] = smo287846;
smo287846.setAttribute('id', 'smo287846');
smo287867v0ar.push(smo287846);
const smo287847 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo287847'] = smo287847;
smo287847.setAttribute('id', 'smo287847');
smo287867v0ar.push(smo287847);
const smo287848 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo287848'] = smo287848;
smo287848.setAttribute('id', 'smo287848');
smo287867v0ar.push(smo287848);
const smo287849 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo287849'] = smo287849;
smo287849.setAttribute('id', 'smo287849');
smo287867v0ar.push(smo287849);
const smo287850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo287850'] = smo287850;
smo287850.setAttribute('id', 'smo287850');
smo287867v0ar.push(smo287850);
const smo287851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo287851'] = smo287851;
smo287851.setAttribute('id', 'smo287851');
smo287867v0ar.push(smo287851);
smo287867v0.addTickables(smo287867v0ar)
fmtsmo28786713.joinVoices([smo287867v0]);
const fmtsmo29030913 = new VF.Formatter();
//
// voices and notes for stave 14 13
const smo290309v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290309v0ar = [];
const smo290293 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo290293'] = smo290293;
smo290293.setAttribute('id', 'smo290293');
smo290309v0ar.push(smo290293);
smo290309v0.addTickables(smo290309v0ar)
fmtsmo29030913.joinVoices([smo290309v0]);
const fmtsmo29281813 = new VF.Formatter();
//
// voices and notes for stave 15 13
const smo292818v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo292818v0ar = [];
const smo292799 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo292799'] = smo292799;
smo292799.setAttribute('id', 'smo292799');
const  smo372004 = new VF.Articulation('a.').setPosition(3);
smo292799.addModifier(smo372004, 0);
smo292818v0ar.push(smo292799);
const smo292801 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo292801'] = smo292801;
smo292801.setAttribute('id', 'smo292801');
smo292818v0ar.push(smo292801);
const smo292802 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo292802'] = smo292802;
smo292802.setAttribute('id', 'smo292802');
smo292818v0ar.push(smo292802);
smo292818v0.addTickables(smo292818v0ar)
fmtsmo29281813.joinVoices([smo292818v0]);
const fmtsmo29526213 = new VF.Formatter();
//
// voices and notes for stave 16 13
const smo295262v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo295262v0ar = [];
const smo295236 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295236'] = smo295236;
smo295236.setAttribute('id', 'smo295236');
const smo2952360acc = new VF.Accidental('n');
smo295236.addModifier(smo2952360acc, 0);
smo295262v0ar.push(smo295236);
const smo295237 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295237'] = smo295237;
smo295237.setAttribute('id', 'smo295237');
smo295262v0ar.push(smo295237);
const smo295238 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295238'] = smo295238;
smo295238.setAttribute('id', 'smo295238');
smo295262v0ar.push(smo295238);
const smo295239 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295239'] = smo295239;
smo295239.setAttribute('id', 'smo295239');
smo295262v0ar.push(smo295239);
const smo295240 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295240'] = smo295240;
smo295240.setAttribute('id', 'smo295240');
smo295262v0ar.push(smo295240);
const smo295241 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295241'] = smo295241;
smo295241.setAttribute('id', 'smo295241');
smo295262v0ar.push(smo295241);
const smo295242 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo295242'] = smo295242;
smo295242.setAttribute('id', 'smo295242');
smo295262v0ar.push(smo295242);
const smo295243 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295243'] = smo295243;
smo295243.setAttribute('id', 'smo295243');
smo295262v0ar.push(smo295243);
const smo295244 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo295244'] = smo295244;
smo295244.setAttribute('id', 'smo295244');
smo295262v0ar.push(smo295244);
const smo295245 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295245'] = smo295245;
smo295245.setAttribute('id', 'smo295245');
smo295262v0ar.push(smo295245);
smo295262v0.addTickables(smo295262v0ar)
fmtsmo29526213.joinVoices([smo295262v0]);
// create beam groups and tuplets for format grp smo297611 before formatting
const dirsmo363779 = smo257078.getStemDirection();
smo257078.setStemDirection(dirsmo363779);
smo257079.setStemDirection(dirsmo363779);
smo257080.setStemDirection(dirsmo363779);
const smo363779 = new VF.Beam([smo257078,smo257079,smo257080]);
const dirsmo363780 = smo257081.getStemDirection();
smo257081.setStemDirection(dirsmo363780);
smo257082.setStemDirection(dirsmo363780);
const smo363780 = new VF.Beam([smo257081,smo257082]);
const dirsmo363781 = smo257084.getStemDirection();
smo257084.setStemDirection(dirsmo363781);
smo257085.setStemDirection(dirsmo363781);
const smo363781 = new VF.Beam([smo257084,smo257085]);
const dirsmo363784 = smo259505.getStemDirection();
smo259505.setStemDirection(dirsmo363784);
smo259506.setStemDirection(dirsmo363784);
smo259507.setStemDirection(dirsmo363784);
const smo363784 = new VF.Beam([smo259505,smo259506,smo259507]);
const dirsmo363785 = smo259508.getStemDirection();
smo259508.setStemDirection(dirsmo363785);
smo259509.setStemDirection(dirsmo363785);
const smo363785 = new VF.Beam([smo259508,smo259509]);
const dirsmo363786 = smo259511.getStemDirection();
smo259511.setStemDirection(dirsmo363786);
smo259512.setStemDirection(dirsmo363786);
const smo363786 = new VF.Beam([smo259511,smo259512]);
const dirsmo363789 = smo261923.getStemDirection();
smo261923.setStemDirection(dirsmo363789);
smo261924.setStemDirection(dirsmo363789);
smo261925.setStemDirection(dirsmo363789);
const smo363789 = new VF.Beam([smo261923,smo261924,smo261925]);
const dirsmo363790 = smo261926.getStemDirection();
smo261926.setStemDirection(dirsmo363790);
smo261927.setStemDirection(dirsmo363790);
const smo363790 = new VF.Beam([smo261926,smo261927]);
const dirsmo363791 = smo261929.getStemDirection();
smo261929.setStemDirection(dirsmo363791);
smo261930.setStemDirection(dirsmo363791);
const smo363791 = new VF.Beam([smo261929,smo261930]);
const dirsmo363794 = smo264297.getStemDirection();
smo264297.setStemDirection(dirsmo363794);
smo264298.setStemDirection(dirsmo363794);
smo264299.setStemDirection(dirsmo363794);
const smo363794 = new VF.Beam([smo264297,smo264298,smo264299]);
const dirsmo363795 = smo264300.getStemDirection();
smo264300.setStemDirection(dirsmo363795);
smo264301.setStemDirection(dirsmo363795);
const smo363795 = new VF.Beam([smo264300,smo264301]);
const dirsmo363796 = smo264303.getStemDirection();
smo264303.setStemDirection(dirsmo363796);
smo264304.setStemDirection(dirsmo363796);
const smo363796 = new VF.Beam([smo264303,smo264304]);
 
// formatting measures in staff group smo297611
fmtsmo25710213.format([smo257102v0,smo259529v0,smo261947v0,smo264321v0,smo266681v0], 352);
const stavesmo257102 = new VF.Stave(138, 183.2253035909339, 440);
stavesmo257102.setAttribute('id', 'stavesmo257102');
stavesmo257102.setBegBarType(1);
stavesmo257102.addClef('treble');
const keysmo257102 = new VF.KeySignature('D');
keysmo257102.addToStave(stavesmo257102);
stavesmo257102.setContext(context);
stavesmo257102.draw();
smo257102v0.draw(context, stavesmo257102);
smo363779.setContext(context);
smo363779.draw();
smo363780.setContext(context);
smo363780.draw();
smo363781.setContext(context);
smo363781.draw();
const stavesmo259529 = new VF.Stave(138, 288.2253035909339, 440);
stavesmo259529.setAttribute('id', 'stavesmo259529');
stavesmo259529.setBegBarType(1);
stavesmo259529.addClef('treble');
const keysmo259529 = new VF.KeySignature('D');
keysmo259529.addToStave(stavesmo259529);
stavesmo259529.setContext(context);
stavesmo259529.draw();
smo259529v0.draw(context, stavesmo259529);
smo363784.setContext(context);
smo363784.draw();
smo363785.setContext(context);
smo363785.draw();
smo363786.setContext(context);
smo363786.draw();
const stavesmo261947 = new VF.Stave(138, 379.2253035909339, 440);
stavesmo261947.setAttribute('id', 'stavesmo261947');
stavesmo261947.setBegBarType(1);
stavesmo261947.addClef('treble');
const keysmo261947 = new VF.KeySignature('G');
keysmo261947.addToStave(stavesmo261947);
stavesmo261947.setContext(context);
stavesmo261947.draw();
smo261947v0.draw(context, stavesmo261947);
smo363789.setContext(context);
smo363789.draw();
smo363790.setContext(context);
smo363790.draw();
smo363791.setContext(context);
smo363791.draw();
const stavesmo264321 = new VF.Stave(138, 479.2253035909339, 440);
stavesmo264321.setAttribute('id', 'stavesmo264321');
stavesmo264321.setBegBarType(1);
stavesmo264321.addClef('treble');
const keysmo264321 = new VF.KeySignature('G');
keysmo264321.addToStave(stavesmo264321);
stavesmo264321.setContext(context);
stavesmo264321.draw();
smo264321v0.draw(context, stavesmo264321);
smo363794.setContext(context);
smo363794.draw();
smo363795.setContext(context);
smo363795.draw();
smo363796.setContext(context);
smo363796.draw();
const stavesmo266681 = new VF.Stave(138, 549.2253035909339, 440);
stavesmo266681.setAttribute('id', 'stavesmo266681');
stavesmo266681.setBegBarType(1);
stavesmo266681.addClef('treble');
const keysmo266681 = new VF.KeySignature('D');
keysmo266681.addToStave(stavesmo266681);
stavesmo266681.setContext(context);
stavesmo266681.draw();
smo266681v0.draw(context, stavesmo266681);
// create beam groups and tuplets for format grp smo297613 before formatting
const dirsmo363801 = smo268959.getStemDirection();
smo268959.setStemDirection(dirsmo363801);
smo268960.setStemDirection(dirsmo363801);
const smo363801 = new VF.Beam([smo268959,smo268960]);
const dirsmo363802 = smo268962.getStemDirection();
smo268962.setStemDirection(dirsmo363802);
smo268963.setStemDirection(dirsmo363802);
smo268964.setStemDirection(dirsmo363802);
smo268965.setStemDirection(dirsmo363802);
const smo363802 = new VF.Beam([smo268962,smo268963,smo268964,smo268965]);
const dirsmo363805 = smo271365.getStemDirection();
smo271365.setStemDirection(dirsmo363805);
smo271366.setStemDirection(dirsmo363805);
const smo363805 = new VF.Beam([smo271365,smo271366]);
const dirsmo363806 = smo271368.getStemDirection();
smo271368.setStemDirection(dirsmo363806);
smo271369.setStemDirection(dirsmo363806);
smo271370.setStemDirection(dirsmo363806);
smo271371.setStemDirection(dirsmo363806);
const smo363806 = new VF.Beam([smo271368,smo271369,smo271370,smo271371]);
 
// formatting measures in staff group smo297613
fmtsmo26898113.format([smo268981v0,smo271387v0,smo273730v0,smo276080v0], 364);
const stavesmo268981 = new VF.Stave(138, 630.2253035909339, 440);
stavesmo268981.setAttribute('id', 'stavesmo268981');
stavesmo268981.setBegBarType(1);
stavesmo268981.addClef('treble');
const keysmo268981 = new VF.KeySignature('G');
keysmo268981.addToStave(stavesmo268981);
stavesmo268981.setContext(context);
stavesmo268981.draw();
smo268981v0.draw(context, stavesmo268981);
smo363801.setContext(context);
smo363801.draw();
smo363802.setContext(context);
smo363802.draw();
const stavesmo271387 = new VF.Stave(138, 700.2253035909339, 440);
stavesmo271387.setAttribute('id', 'stavesmo271387');
stavesmo271387.setBegBarType(1);
stavesmo271387.addClef('treble');
const keysmo271387 = new VF.KeySignature('G');
keysmo271387.addToStave(stavesmo271387);
stavesmo271387.setContext(context);
stavesmo271387.draw();
smo271387v0.draw(context, stavesmo271387);
smo363805.setContext(context);
smo363805.draw();
smo363806.setContext(context);
smo363806.draw();
const stavesmo273730 = new VF.Stave(138, 761.2253035909339, 440);
stavesmo273730.setAttribute('id', 'stavesmo273730');
stavesmo273730.setBegBarType(1);
stavesmo273730.addClef('treble');
const keysmo273730 = new VF.KeySignature('G');
keysmo273730.addToStave(stavesmo273730);
stavesmo273730.setContext(context);
stavesmo273730.draw();
smo273730v0.draw(context, stavesmo273730);
const stavesmo276080 = new VF.Stave(138, 831.2253035909339, 440);
stavesmo276080.setAttribute('id', 'stavesmo276080');
stavesmo276080.setBegBarType(1);
stavesmo276080.addClef('treble');
const keysmo276080 = new VF.KeySignature('G');
keysmo276080.addToStave(stavesmo276080);
stavesmo276080.setContext(context);
stavesmo276080.draw();
smo276080v0.draw(context, stavesmo276080);
// create beam groups and tuplets for format grp smo297615 before formatting
const dirsmo363813 = smo278464.getStemDirection();
smo278464.setStemDirection(dirsmo363813);
smo278465.setStemDirection(dirsmo363813);
const smo363813 = new VF.Beam([smo278464,smo278465]);
const dirsmo363814 = smo278467.getStemDirection();
smo278467.setStemDirection(dirsmo363814);
smo278468.setStemDirection(dirsmo363814);
smo278469.setStemDirection(dirsmo363814);
smo278470.setStemDirection(dirsmo363814);
const smo363814 = new VF.Beam([smo278467,smo278468,smo278469,smo278470]);
const dirsmo363817 = smo280837.getStemDirection();
smo280837.setStemDirection(dirsmo363817);
smo280838.setStemDirection(dirsmo363817);
const smo363817 = new VF.Beam([smo280837,smo280838]);
const dirsmo363818 = smo280840.getStemDirection();
smo280840.setStemDirection(dirsmo363818);
smo280841.setStemDirection(dirsmo363818);
smo280842.setStemDirection(dirsmo363818);
smo280843.setStemDirection(dirsmo363818);
const smo363818 = new VF.Beam([smo280840,smo280841,smo280842,smo280843]);
const dirsmo363821 = smo283183.getStemDirection();
smo283183.setStemDirection(dirsmo363821);
smo283184.setStemDirection(dirsmo363821);
const smo363821 = new VF.Beam([smo283183,smo283184]);
const dirsmo363822 = smo283186.getStemDirection();
smo283186.setStemDirection(dirsmo363822);
smo283187.setStemDirection(dirsmo363822);
smo283188.setStemDirection(dirsmo363822);
smo283189.setStemDirection(dirsmo363822);
const smo363822 = new VF.Beam([smo283186,smo283187,smo283188,smo283189]);
 
// formatting measures in staff group smo297615
fmtsmo27848613.format([smo278486v0,smo280859v0,smo283205v0,smo285540v0], 364);
const stavesmo278486 = new VF.Stave(138, 936.2253035909339, 440);
stavesmo278486.setAttribute('id', 'stavesmo278486');
stavesmo278486.setBegBarType(1);
stavesmo278486.addClef('bass');
const keysmo278486 = new VF.KeySignature('F');
keysmo278486.addToStave(stavesmo278486);
stavesmo278486.setContext(context);
stavesmo278486.draw();
smo278486v0.draw(context, stavesmo278486);
smo363813.setContext(context);
smo363813.draw();
smo363814.setContext(context);
smo363814.draw();
const stavesmo280859 = new VF.Stave(138, 1023.2253035909339, 440);
stavesmo280859.setAttribute('id', 'stavesmo280859');
stavesmo280859.setBegBarType(1);
stavesmo280859.addClef('bass');
const keysmo280859 = new VF.KeySignature('F');
keysmo280859.addToStave(stavesmo280859);
stavesmo280859.setContext(context);
stavesmo280859.draw();
smo280859v0.draw(context, stavesmo280859);
smo363817.setContext(context);
smo363817.draw();
smo363818.setContext(context);
smo363818.draw();
const stavesmo283205 = new VF.Stave(138, 1128.225303590934, 440);
stavesmo283205.setAttribute('id', 'stavesmo283205');
stavesmo283205.setBegBarType(1);
stavesmo283205.addClef('bass');
const keysmo283205 = new VF.KeySignature('F');
keysmo283205.addToStave(stavesmo283205);
stavesmo283205.setContext(context);
stavesmo283205.draw();
smo283205v0.draw(context, stavesmo283205);
smo363821.setContext(context);
smo363821.draw();
smo363822.setContext(context);
smo363822.draw();
const stavesmo285540 = new VF.Stave(138, 1213.225303590934, 440);
stavesmo285540.setAttribute('id', 'stavesmo285540');
stavesmo285540.setBegBarType(1);
stavesmo285540.addClef('bass');
const keysmo285540 = new VF.KeySignature('F');
keysmo285540.addToStave(stavesmo285540);
stavesmo285540.setContext(context);
stavesmo285540.draw();
smo285540v0.draw(context, stavesmo285540);
// create beam groups and tuplets for format grp smo290066 before formatting
const dirsmo363827 = smo287845.getStemDirection();
smo287845.setStemDirection(dirsmo363827);
smo287846.setStemDirection(dirsmo363827);
const smo363827 = new VF.Beam([smo287845,smo287846]);
const dirsmo363828 = smo287848.getStemDirection();
smo287848.setStemDirection(dirsmo363828);
smo287849.setStemDirection(dirsmo363828);
smo287850.setStemDirection(dirsmo363828);
smo287851.setStemDirection(dirsmo363828);
const smo363828 = new VF.Beam([smo287848,smo287849,smo287850,smo287851]);
 
// formatting measures in staff group smo290066
fmtsmo28786713.format([smo287867v0], 365);
const stavesmo287867 = new VF.Stave(138, 1290.225303590934, 440);
stavesmo287867.setAttribute('id', 'stavesmo287867');
stavesmo287867.setBegBarType(1);
stavesmo287867.addClef('treble');
const keysmo287867 = new VF.KeySignature('F');
keysmo287867.addToStave(stavesmo287867);
stavesmo287867.setContext(context);
stavesmo287867.draw();
smo287867v0.draw(context, stavesmo287867);
smo363827.setContext(context);
smo363827.draw();
smo363828.setContext(context);
smo363828.draw();
// create beam groups and tuplets for format grp smo292534 before formatting
 
// formatting measures in staff group smo292534
fmtsmo29030913.format([smo290309v0], 365);
const stavesmo290309 = new VF.Stave(138, 1373.225303590934, 440);
stavesmo290309.setAttribute('id', 'stavesmo290309');
stavesmo290309.setBegBarType(1);
stavesmo290309.addClef('treble');
const keysmo290309 = new VF.KeySignature('F');
keysmo290309.addToStave(stavesmo290309);
stavesmo290309.setContext(context);
stavesmo290309.draw();
smo290309v0.draw(context, stavesmo290309);
// create beam groups and tuplets for format grp smo294892 before formatting
 
// formatting measures in staff group smo294892
fmtsmo29281813.format([smo292818v0], 364);
const stavesmo292818 = new VF.Stave(138, 1478.225303590934, 440);
stavesmo292818.setAttribute('id', 'stavesmo292818');
stavesmo292818.setBegBarType(1);
stavesmo292818.addClef('bass');
const keysmo292818 = new VF.KeySignature('F');
keysmo292818.addToStave(stavesmo292818);
stavesmo292818.setContext(context);
stavesmo292818.draw();
smo292818v0.draw(context, stavesmo292818);
// create beam groups and tuplets for format grp smo297605 before formatting
const dirsmo363835 = smo295236.getStemDirection();
smo295236.setStemDirection(dirsmo363835);
smo295237.setStemDirection(dirsmo363835);
smo295238.setStemDirection(dirsmo363835);
smo295239.setStemDirection(dirsmo363835);
const smo363835 = new VF.Beam([smo295236,smo295237,smo295238,smo295239]);
const dirsmo363836 = smo295240.getStemDirection();
smo295240.setStemDirection(dirsmo363836);
smo295241.setStemDirection(dirsmo363836);
const smo363836 = new VF.Beam([smo295240,smo295241]);
const smo295246 = new VF.Tuplet([smo295237,smo295238,smo295239], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo297605
fmtsmo29526213.format([smo295262v0], 373);
const stavesmo295262 = new VF.Stave(138, 1555.225303590934, 440);
stavesmo295262.setAttribute('id', 'stavesmo295262');
stavesmo295262.setBegBarType(1);
stavesmo295262.addClef('percussion');
const keysmo295262 = new VF.KeySignature('F');
keysmo295262.addToStave(stavesmo295262);
stavesmo295262.setContext(context);
stavesmo295262.draw();
smo295262v0.draw(context, stavesmo295262);
smo363835.setContext(context);
smo363835.draw();
smo363836.setContext(context);
smo363836.draw();
smo295246.setContext(context).draw();
const leftsmo297605stavesmo25710216 = new VF.StaveConnector(stavesmo257102, stavesmo266681).setType(3);
leftsmo297605stavesmo25710216.setContext(context).draw();
const leftsmo297605stavesmo26898116 = new VF.StaveConnector(stavesmo268981, stavesmo276080).setType(3);
leftsmo297605stavesmo26898116.setContext(context).draw();
const leftsmo297605stavesmo27848616 = new VF.StaveConnector(stavesmo278486, stavesmo285540).setType(3);
leftsmo297605stavesmo27848616.setContext(context).draw();
const fmtsmo25712514 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo257125v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo257125v0ar = [];
const smo257103 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo257103'] = smo257103;
smo257103.setAttribute('id', 'smo257103');
smo257125v0ar.push(smo257103);
const smo257104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo257104'] = smo257104;
smo257104.setAttribute('id', 'smo257104');
const  smo372039 = new VF.Articulation('a.').setPosition(3);
smo257104.addModifier(smo372039, 0);
smo257125v0ar.push(smo257104);
const smo257106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo257106'] = smo257106;
smo257106.setAttribute('id', 'smo257106');
const  smo372040 = new VF.Articulation('a.').setPosition(3);
smo257106.addModifier(smo372040, 0);
smo257125v0ar.push(smo257106);
const smo257108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo257108'] = smo257108;
smo257108.setAttribute('id', 'smo257108');
const  smo372041 = new VF.Articulation('a.').setPosition(3);
smo257108.addModifier(smo372041, 0);
smo257125v0ar.push(smo257108);
smo257125v0.addTickables(smo257125v0ar)
fmtsmo25712514.joinVoices([smo257125v0]);
const fmtsmo25955214 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo259552v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo259552v0ar = [];
const smo259530 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo259530'] = smo259530;
smo259530.setAttribute('id', 'smo259530');
smo259552v0ar.push(smo259530);
const smo259531 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo259531'] = smo259531;
smo259531.setAttribute('id', 'smo259531');
const  smo372042 = new VF.Articulation('a.').setPosition(3);
smo259531.addModifier(smo372042, 0);
smo259552v0ar.push(smo259531);
const smo259533 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo259533'] = smo259533;
smo259533.setAttribute('id', 'smo259533');
const  smo372043 = new VF.Articulation('a.').setPosition(3);
smo259533.addModifier(smo372043, 0);
smo259552v0ar.push(smo259533);
const smo259535 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo259535'] = smo259535;
smo259535.setAttribute('id', 'smo259535');
const  smo372044 = new VF.Articulation('a.').setPosition(3);
smo259535.addModifier(smo372044, 0);
smo259552v0ar.push(smo259535);
smo259552v0.addTickables(smo259552v0ar)
fmtsmo25955214.joinVoices([smo259552v0]);
const fmtsmo26197014 = new VF.Formatter();
//
// voices and notes for stave 2 14
const smo261970v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo261970v0ar = [];
const smo261948 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo261948'] = smo261948;
smo261948.setAttribute('id', 'smo261948');
smo261970v0ar.push(smo261948);
const smo261949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo261949'] = smo261949;
smo261949.setAttribute('id', 'smo261949');
const  smo372045 = new VF.Articulation('a.').setPosition(3);
smo261949.addModifier(smo372045, 0);
smo261970v0ar.push(smo261949);
const smo261951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo261951'] = smo261951;
smo261951.setAttribute('id', 'smo261951');
const  smo372046 = new VF.Articulation('a.').setPosition(3);
smo261951.addModifier(smo372046, 0);
smo261970v0ar.push(smo261951);
const smo261953 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo261953'] = smo261953;
smo261953.setAttribute('id', 'smo261953');
const  smo372047 = new VF.Articulation('a.').setPosition(3);
smo261953.addModifier(smo372047, 0);
smo261970v0ar.push(smo261953);
smo261970v0.addTickables(smo261970v0ar)
fmtsmo26197014.joinVoices([smo261970v0]);
const fmtsmo26434414 = new VF.Formatter();
//
// voices and notes for stave 3 14
const smo264344v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo264344v0ar = [];
const smo264322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo264322'] = smo264322;
smo264322.setAttribute('id', 'smo264322');
smo264344v0ar.push(smo264322);
const smo264323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo264323'] = smo264323;
smo264323.setAttribute('id', 'smo264323');
const  smo372048 = new VF.Articulation('a.').setPosition(3);
smo264323.addModifier(smo372048, 0);
smo264344v0ar.push(smo264323);
const smo264325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo264325'] = smo264325;
smo264325.setAttribute('id', 'smo264325');
const  smo372049 = new VF.Articulation('a.').setPosition(3);
smo264325.addModifier(smo372049, 0);
smo264344v0ar.push(smo264325);
const smo264327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo264327'] = smo264327;
smo264327.setAttribute('id', 'smo264327');
const  smo372050 = new VF.Articulation('a.').setPosition(3);
smo264327.addModifier(smo372050, 0);
smo264344v0ar.push(smo264327);
smo264344v0.addTickables(smo264344v0ar)
fmtsmo26434414.joinVoices([smo264344v0]);
const fmtsmo26670114 = new VF.Formatter();
//
// voices and notes for stave 4 14
const smo266701v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266701v0ar = [];
const smo266682 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo266682'] = smo266682;
smo266682.setAttribute('id', 'smo266682');
smo266701v0ar.push(smo266682);
const smo266683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo266683'] = smo266683;
smo266683.setAttribute('id', 'smo266683');
smo266701v0ar.push(smo266683);
const smo266684 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo266684'] = smo266684;
smo266684.setAttribute('id', 'smo266684');
smo266701v0ar.push(smo266684);
const smo266685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo266685'] = smo266685;
smo266685.setAttribute('id', 'smo266685');
smo266701v0ar.push(smo266685);
smo266701v0.addTickables(smo266701v0ar)
fmtsmo26670114.joinVoices([smo266701v0]);
const fmtsmo26900314 = new VF.Formatter();
//
// voices and notes for stave 5 14
const smo269003v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269003v0ar = [];
const smo268982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo268982'] = smo268982;
smo268982.setAttribute('id', 'smo268982');
smo269003v0ar.push(smo268982);
const smo268983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo268983'] = smo268983;
smo268983.setAttribute('id', 'smo268983');
smo269003v0ar.push(smo268983);
const smo268984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo268984'] = smo268984;
smo268984.setAttribute('id', 'smo268984');
smo269003v0ar.push(smo268984);
const smo268985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo268985'] = smo268985;
smo268985.setAttribute('id', 'smo268985');
smo269003v0ar.push(smo268985);
const smo268986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo268986'] = smo268986;
smo268986.setAttribute('id', 'smo268986');
smo269003v0ar.push(smo268986);
const smo268987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo268987'] = smo268987;
smo268987.setAttribute('id', 'smo268987');
smo269003v0ar.push(smo268987);
smo269003v0.addTickables(smo269003v0ar)
fmtsmo26900314.joinVoices([smo269003v0]);
const fmtsmo27140914 = new VF.Formatter();
//
// voices and notes for stave 6 14
const smo271409v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo271409v0ar = [];
const smo271388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo271388'] = smo271388;
smo271388.setAttribute('id', 'smo271388');
smo271409v0ar.push(smo271388);
const smo271389 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo271389'] = smo271389;
smo271389.setAttribute('id', 'smo271389');
smo271409v0ar.push(smo271389);
const smo271390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo271390'] = smo271390;
smo271390.setAttribute('id', 'smo271390');
smo271409v0ar.push(smo271390);
const smo271391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo271391'] = smo271391;
smo271391.setAttribute('id', 'smo271391');
smo271409v0ar.push(smo271391);
const smo271392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo271392'] = smo271392;
smo271392.setAttribute('id', 'smo271392');
smo271409v0ar.push(smo271392);
const smo271393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo271393'] = smo271393;
smo271393.setAttribute('id', 'smo271393');
smo271409v0ar.push(smo271393);
smo271409v0.addTickables(smo271409v0ar)
fmtsmo27140914.joinVoices([smo271409v0]);
const fmtsmo27374714 = new VF.Formatter();
//
// voices and notes for stave 7 14
const smo273747v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo273747v0ar = [];
const smo273731 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo273731'] = smo273731;
smo273731.setAttribute('id', 'smo273731');
smo273747v0ar.push(smo273731);
smo273747v0.addTickables(smo273747v0ar)
fmtsmo27374714.joinVoices([smo273747v0]);
const fmtsmo27609714 = new VF.Formatter();
//
// voices and notes for stave 8 14
const smo276097v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo276097v0ar = [];
const smo276081 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo276081'] = smo276081;
smo276081.setAttribute('id', 'smo276081');
smo276097v0ar.push(smo276081);
smo276097v0.addTickables(smo276097v0ar)
fmtsmo27609714.joinVoices([smo276097v0]);
const fmtsmo27850814 = new VF.Formatter();
//
// voices and notes for stave 9 14
const smo278508v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278508v0ar = [];
const smo278487 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo278487'] = smo278487;
smo278487.setAttribute('id', 'smo278487');
smo278508v0ar.push(smo278487);
const smo278488 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo278488'] = smo278488;
smo278488.setAttribute('id', 'smo278488');
smo278508v0ar.push(smo278488);
const smo278489 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo278489'] = smo278489;
smo278489.setAttribute('id', 'smo278489');
smo278508v0ar.push(smo278489);
const smo278490 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo278490'] = smo278490;
smo278490.setAttribute('id', 'smo278490');
smo278508v0ar.push(smo278490);
const smo278491 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo278491'] = smo278491;
smo278491.setAttribute('id', 'smo278491');
smo278508v0ar.push(smo278491);
const smo278492 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo278492'] = smo278492;
smo278492.setAttribute('id', 'smo278492');
smo278508v0ar.push(smo278492);
smo278508v0.addTickables(smo278508v0ar)
fmtsmo27850814.joinVoices([smo278508v0]);
const fmtsmo28088114 = new VF.Formatter();
//
// voices and notes for stave 10 14
const smo280881v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo280881v0ar = [];
const smo280860 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo280860'] = smo280860;
smo280860.setAttribute('id', 'smo280860');
smo280881v0ar.push(smo280860);
const smo280861 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo280861'] = smo280861;
smo280861.setAttribute('id', 'smo280861');
smo280881v0ar.push(smo280861);
const smo280862 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo280862'] = smo280862;
smo280862.setAttribute('id', 'smo280862');
smo280881v0ar.push(smo280862);
const smo280863 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo280863'] = smo280863;
smo280863.setAttribute('id', 'smo280863');
smo280881v0ar.push(smo280863);
const smo280864 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo280864'] = smo280864;
smo280864.setAttribute('id', 'smo280864');
smo280881v0ar.push(smo280864);
const smo280865 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo280865'] = smo280865;
smo280865.setAttribute('id', 'smo280865');
smo280881v0ar.push(smo280865);
smo280881v0.addTickables(smo280881v0ar)
fmtsmo28088114.joinVoices([smo280881v0]);
const fmtsmo28322714 = new VF.Formatter();
//
// voices and notes for stave 11 14
const smo283227v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo283227v0ar = [];
const smo283206 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo283206'] = smo283206;
smo283206.setAttribute('id', 'smo283206');
smo283227v0ar.push(smo283206);
const smo283207 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo283207'] = smo283207;
smo283207.setAttribute('id', 'smo283207');
smo283227v0ar.push(smo283207);
const smo283208 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo283208'] = smo283208;
smo283208.setAttribute('id', 'smo283208');
smo283227v0ar.push(smo283208);
const smo283209 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo283209'] = smo283209;
smo283209.setAttribute('id', 'smo283209');
smo283227v0ar.push(smo283209);
const smo283210 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo283210'] = smo283210;
smo283210.setAttribute('id', 'smo283210');
smo283227v0ar.push(smo283210);
const smo283211 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo283211'] = smo283211;
smo283211.setAttribute('id', 'smo283211');
smo283227v0ar.push(smo283211);
smo283227v0.addTickables(smo283227v0ar)
fmtsmo28322714.joinVoices([smo283227v0]);
const fmtsmo28556014 = new VF.Formatter();
//
// voices and notes for stave 12 14
const smo285560v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo285560v0ar = [];
const smo285541 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo285541'] = smo285541;
smo285541.setAttribute('id', 'smo285541');
smo285560v0ar.push(smo285541);
const smo285542 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo285542'] = smo285542;
smo285542.setAttribute('id', 'smo285542');
smo285560v0ar.push(smo285542);
const smo285543 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo285543'] = smo285543;
smo285543.setAttribute('id', 'smo285543');
smo285560v0ar.push(smo285543);
const smo285544 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo285544'] = smo285544;
smo285544.setAttribute('id', 'smo285544');
smo285560v0ar.push(smo285544);
smo285560v0.addTickables(smo285560v0ar)
fmtsmo28556014.joinVoices([smo285560v0]);
const fmtsmo28788914 = new VF.Formatter();
//
// voices and notes for stave 13 14
const smo287889v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287889v0ar = [];
const smo287868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo287868'] = smo287868;
smo287868.setAttribute('id', 'smo287868');
smo287889v0ar.push(smo287868);
const smo287869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo287869'] = smo287869;
smo287869.setAttribute('id', 'smo287869');
smo287889v0ar.push(smo287869);
const smo287870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo287870'] = smo287870;
smo287870.setAttribute('id', 'smo287870');
smo287889v0ar.push(smo287870);
const smo287871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo287871'] = smo287871;
smo287871.setAttribute('id', 'smo287871');
smo287889v0ar.push(smo287871);
const smo287872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo287872'] = smo287872;
smo287872.setAttribute('id', 'smo287872');
smo287889v0ar.push(smo287872);
const smo287873 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo287873'] = smo287873;
smo287873.setAttribute('id', 'smo287873');
smo287889v0ar.push(smo287873);
smo287889v0.addTickables(smo287889v0ar)
fmtsmo28788914.joinVoices([smo287889v0]);
const fmtsmo29032614 = new VF.Formatter();
//
// voices and notes for stave 14 14
const smo290326v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290326v0ar = [];
const smo290310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo290310'] = smo290310;
smo290310.setAttribute('id', 'smo290310');
smo290326v0ar.push(smo290310);
smo290326v0.addTickables(smo290326v0ar)
fmtsmo29032614.joinVoices([smo290326v0]);
const fmtsmo29283814 = new VF.Formatter();
//
// voices and notes for stave 15 14
const smo292838v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo292838v0ar = [];
const smo292819 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo292819'] = smo292819;
smo292819.setAttribute('id', 'smo292819');
smo292838v0ar.push(smo292819);
const smo292820 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo292820'] = smo292820;
smo292820.setAttribute('id', 'smo292820');
smo292838v0ar.push(smo292820);
const smo292821 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo292821'] = smo292821;
smo292821.setAttribute('id', 'smo292821');
smo292838v0ar.push(smo292821);
const smo292822 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo292822'] = smo292822;
smo292822.setAttribute('id', 'smo292822');
smo292838v0ar.push(smo292822);
smo292838v0.addTickables(smo292838v0ar)
fmtsmo29283814.joinVoices([smo292838v0]);
const fmtsmo29528914 = new VF.Formatter();
//
// voices and notes for stave 16 14
const smo295289v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo295289v0ar = [];
const smo295263 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295263'] = smo295263;
smo295263.setAttribute('id', 'smo295263');
const smo2952630acc = new VF.Accidental('n');
smo295263.addModifier(smo2952630acc, 0);
smo295289v0ar.push(smo295263);
const smo295264 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295264'] = smo295264;
smo295264.setAttribute('id', 'smo295264');
smo295289v0ar.push(smo295264);
const smo295265 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295265'] = smo295265;
smo295265.setAttribute('id', 'smo295265');
smo295289v0ar.push(smo295265);
const smo295266 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295266'] = smo295266;
smo295266.setAttribute('id', 'smo295266');
smo295289v0ar.push(smo295266);
const smo295267 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295267'] = smo295267;
smo295267.setAttribute('id', 'smo295267');
smo295289v0ar.push(smo295267);
const smo295268 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295268'] = smo295268;
smo295268.setAttribute('id', 'smo295268');
smo295289v0ar.push(smo295268);
const smo295269 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo295269'] = smo295269;
smo295269.setAttribute('id', 'smo295269');
smo295289v0ar.push(smo295269);
const smo295270 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295270'] = smo295270;
smo295270.setAttribute('id', 'smo295270');
smo295289v0ar.push(smo295270);
const smo295271 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo295271'] = smo295271;
smo295271.setAttribute('id', 'smo295271');
smo295289v0ar.push(smo295271);
const smo295272 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295272'] = smo295272;
smo295272.setAttribute('id', 'smo295272');
smo295289v0ar.push(smo295272);
smo295289v0.addTickables(smo295289v0ar)
fmtsmo29528914.joinVoices([smo295289v0]);
// create beam groups and tuplets for format grp smo297611 before formatting
 
// formatting measures in staff group smo297611
fmtsmo25712514.format([smo257125v0,smo259552v0,smo261970v0,smo264344v0,smo266701v0], 323);
const stavesmo257125 = new VF.Stave(578, 183.2253035909339, 337);
stavesmo257125.setAttribute('id', 'stavesmo257125');
stavesmo257125.setBegBarType(VF.Barline.type.NONE);
stavesmo257125.setContext(context);
stavesmo257125.draw();
smo257125v0.draw(context, stavesmo257125);
const stavesmo259552 = new VF.Stave(578, 288.2253035909339, 337);
stavesmo259552.setAttribute('id', 'stavesmo259552');
stavesmo259552.setBegBarType(VF.Barline.type.NONE);
stavesmo259552.setContext(context);
stavesmo259552.draw();
smo259552v0.draw(context, stavesmo259552);
const stavesmo261970 = new VF.Stave(578, 379.2253035909339, 337);
stavesmo261970.setAttribute('id', 'stavesmo261970');
stavesmo261970.setBegBarType(VF.Barline.type.NONE);
stavesmo261970.setContext(context);
stavesmo261970.draw();
smo261970v0.draw(context, stavesmo261970);
const stavesmo264344 = new VF.Stave(578, 479.2253035909339, 337);
stavesmo264344.setAttribute('id', 'stavesmo264344');
stavesmo264344.setBegBarType(VF.Barline.type.NONE);
stavesmo264344.setContext(context);
stavesmo264344.draw();
smo264344v0.draw(context, stavesmo264344);
const stavesmo266701 = new VF.Stave(578, 549.2253035909339, 337);
stavesmo266701.setAttribute('id', 'stavesmo266701');
stavesmo266701.setBegBarType(VF.Barline.type.NONE);
stavesmo266701.setContext(context);
stavesmo266701.draw();
smo266701v0.draw(context, stavesmo266701);
// create beam groups and tuplets for format grp smo297613 before formatting
const dirsmo363849 = smo268983.getStemDirection();
smo268983.setStemDirection(dirsmo363849);
smo268984.setStemDirection(dirsmo363849);
const smo363849 = new VF.Beam([smo268983,smo268984]);
const dirsmo363850 = smo268985.getStemDirection();
smo268985.setStemDirection(dirsmo363850);
smo268986.setStemDirection(dirsmo363850);
const smo363850 = new VF.Beam([smo268985,smo268986]);
const dirsmo363853 = smo271389.getStemDirection();
smo271389.setStemDirection(dirsmo363853);
smo271390.setStemDirection(dirsmo363853);
const smo363853 = new VF.Beam([smo271389,smo271390]);
const dirsmo363854 = smo271391.getStemDirection();
smo271391.setStemDirection(dirsmo363854);
smo271392.setStemDirection(dirsmo363854);
const smo363854 = new VF.Beam([smo271391,smo271392]);
 
// formatting measures in staff group smo297613
fmtsmo26900314.format([smo269003v0,smo271409v0,smo273747v0,smo276097v0], 323);
const stavesmo269003 = new VF.Stave(578, 630.2253035909339, 337);
stavesmo269003.setAttribute('id', 'stavesmo269003');
stavesmo269003.setBegBarType(VF.Barline.type.NONE);
stavesmo269003.setContext(context);
stavesmo269003.draw();
smo269003v0.draw(context, stavesmo269003);
smo363849.setContext(context);
smo363849.draw();
smo363850.setContext(context);
smo363850.draw();
const stavesmo271409 = new VF.Stave(578, 700.2253035909339, 337);
stavesmo271409.setAttribute('id', 'stavesmo271409');
stavesmo271409.setBegBarType(VF.Barline.type.NONE);
stavesmo271409.setContext(context);
stavesmo271409.draw();
smo271409v0.draw(context, stavesmo271409);
smo363853.setContext(context);
smo363853.draw();
smo363854.setContext(context);
smo363854.draw();
const stavesmo273747 = new VF.Stave(578, 761.2253035909339, 337);
stavesmo273747.setAttribute('id', 'stavesmo273747');
stavesmo273747.setBegBarType(VF.Barline.type.NONE);
stavesmo273747.setContext(context);
stavesmo273747.draw();
smo273747v0.draw(context, stavesmo273747);
const stavesmo276097 = new VF.Stave(578, 831.2253035909339, 337);
stavesmo276097.setAttribute('id', 'stavesmo276097');
stavesmo276097.setBegBarType(VF.Barline.type.NONE);
stavesmo276097.setContext(context);
stavesmo276097.draw();
smo276097v0.draw(context, stavesmo276097);
// create beam groups and tuplets for format grp smo297615 before formatting
const dirsmo363861 = smo278488.getStemDirection();
smo278488.setStemDirection(dirsmo363861);
smo278489.setStemDirection(dirsmo363861);
const smo363861 = new VF.Beam([smo278488,smo278489]);
const dirsmo363862 = smo278490.getStemDirection();
smo278490.setStemDirection(dirsmo363862);
smo278491.setStemDirection(dirsmo363862);
const smo363862 = new VF.Beam([smo278490,smo278491]);
const dirsmo363865 = smo280861.getStemDirection();
smo280861.setStemDirection(dirsmo363865);
smo280862.setStemDirection(dirsmo363865);
const smo363865 = new VF.Beam([smo280861,smo280862]);
const dirsmo363866 = smo280863.getStemDirection();
smo280863.setStemDirection(dirsmo363866);
smo280864.setStemDirection(dirsmo363866);
const smo363866 = new VF.Beam([smo280863,smo280864]);
const dirsmo363869 = smo283207.getStemDirection();
smo283207.setStemDirection(dirsmo363869);
smo283208.setStemDirection(dirsmo363869);
const smo363869 = new VF.Beam([smo283207,smo283208]);
const dirsmo363870 = smo283209.getStemDirection();
smo283209.setStemDirection(dirsmo363870);
smo283210.setStemDirection(dirsmo363870);
const smo363870 = new VF.Beam([smo283209,smo283210]);
 
// formatting measures in staff group smo297615
fmtsmo27850814.format([smo278508v0,smo280881v0,smo283227v0,smo285560v0], 323);
const stavesmo278508 = new VF.Stave(578, 936.2253035909339, 337);
stavesmo278508.setAttribute('id', 'stavesmo278508');
stavesmo278508.setBegBarType(VF.Barline.type.NONE);
stavesmo278508.setContext(context);
stavesmo278508.draw();
smo278508v0.draw(context, stavesmo278508);
smo363861.setContext(context);
smo363861.draw();
smo363862.setContext(context);
smo363862.draw();
const stavesmo280881 = new VF.Stave(578, 1023.2253035909339, 337);
stavesmo280881.setAttribute('id', 'stavesmo280881');
stavesmo280881.setBegBarType(VF.Barline.type.NONE);
stavesmo280881.setContext(context);
stavesmo280881.draw();
smo280881v0.draw(context, stavesmo280881);
smo363865.setContext(context);
smo363865.draw();
smo363866.setContext(context);
smo363866.draw();
const stavesmo283227 = new VF.Stave(578, 1128.225303590934, 337);
stavesmo283227.setAttribute('id', 'stavesmo283227');
stavesmo283227.setBegBarType(VF.Barline.type.NONE);
stavesmo283227.setContext(context);
stavesmo283227.draw();
smo283227v0.draw(context, stavesmo283227);
smo363869.setContext(context);
smo363869.draw();
smo363870.setContext(context);
smo363870.draw();
const stavesmo285560 = new VF.Stave(578, 1213.225303590934, 337);
stavesmo285560.setAttribute('id', 'stavesmo285560');
stavesmo285560.setBegBarType(VF.Barline.type.NONE);
stavesmo285560.setContext(context);
stavesmo285560.draw();
smo285560v0.draw(context, stavesmo285560);
// create beam groups and tuplets for format grp smo290066 before formatting
const dirsmo363875 = smo287869.getStemDirection();
smo287869.setStemDirection(dirsmo363875);
smo287870.setStemDirection(dirsmo363875);
const smo363875 = new VF.Beam([smo287869,smo287870]);
const dirsmo363876 = smo287871.getStemDirection();
smo287871.setStemDirection(dirsmo363876);
smo287872.setStemDirection(dirsmo363876);
const smo363876 = new VF.Beam([smo287871,smo287872]);
 
// formatting measures in staff group smo290066
fmtsmo28788914.format([smo287889v0], 323);
const stavesmo287889 = new VF.Stave(578, 1290.225303590934, 337);
stavesmo287889.setAttribute('id', 'stavesmo287889');
stavesmo287889.setBegBarType(VF.Barline.type.NONE);
stavesmo287889.setContext(context);
stavesmo287889.draw();
smo287889v0.draw(context, stavesmo287889);
smo363875.setContext(context);
smo363875.draw();
smo363876.setContext(context);
smo363876.draw();
// create beam groups and tuplets for format grp smo292534 before formatting
 
// formatting measures in staff group smo292534
fmtsmo29032614.format([smo290326v0], 323);
const stavesmo290326 = new VF.Stave(578, 1373.225303590934, 337);
stavesmo290326.setAttribute('id', 'stavesmo290326');
stavesmo290326.setBegBarType(VF.Barline.type.NONE);
stavesmo290326.setContext(context);
stavesmo290326.draw();
smo290326v0.draw(context, stavesmo290326);
// create beam groups and tuplets for format grp smo294892 before formatting
 
// formatting measures in staff group smo294892
fmtsmo29283814.format([smo292838v0], 323);
const stavesmo292838 = new VF.Stave(578, 1478.225303590934, 337);
stavesmo292838.setAttribute('id', 'stavesmo292838');
stavesmo292838.setBegBarType(VF.Barline.type.NONE);
stavesmo292838.setContext(context);
stavesmo292838.draw();
smo292838v0.draw(context, stavesmo292838);
// create beam groups and tuplets for format grp smo297605 before formatting
const dirsmo363883 = smo295263.getStemDirection();
smo295263.setStemDirection(dirsmo363883);
smo295264.setStemDirection(dirsmo363883);
smo295265.setStemDirection(dirsmo363883);
smo295266.setStemDirection(dirsmo363883);
const smo363883 = new VF.Beam([smo295263,smo295264,smo295265,smo295266]);
const dirsmo363884 = smo295267.getStemDirection();
smo295267.setStemDirection(dirsmo363884);
smo295268.setStemDirection(dirsmo363884);
const smo363884 = new VF.Beam([smo295267,smo295268]);
const smo295273 = new VF.Tuplet([smo295264,smo295265,smo295266], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo297605
fmtsmo29528914.format([smo295289v0], 323);
const stavesmo295289 = new VF.Stave(578, 1555.225303590934, 337);
stavesmo295289.setAttribute('id', 'stavesmo295289');
stavesmo295289.setBegBarType(VF.Barline.type.NONE);
stavesmo295289.setContext(context);
stavesmo295289.draw();
smo295289v0.draw(context, stavesmo295289);
smo363883.setContext(context);
smo363883.draw();
smo363884.setContext(context);
smo363884.draw();
smo295273.setContext(context).draw();
const fmtsmo25715215 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo257152v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo257152v0ar = [];
const smo257126 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo257126'] = smo257126;
smo257126.setAttribute('id', 'smo257126');
smo257152v0ar.push(smo257126);
const smo257127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo257127'] = smo257127;
smo257127.setAttribute('id', 'smo257127');
smo257152v0ar.push(smo257127);
const smo257128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo257128'] = smo257128;
smo257128.setAttribute('id', 'smo257128');
smo257152v0ar.push(smo257128);
const smo257129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo257129'] = smo257129;
smo257129.setAttribute('id', 'smo257129');
smo257152v0ar.push(smo257129);
const smo257130 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo257130'] = smo257130;
smo257130.setAttribute('id', 'smo257130');
smo257152v0ar.push(smo257130);
const smo257131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo257131'] = smo257131;
smo257131.setAttribute('id', 'smo257131');
smo257152v0ar.push(smo257131);
const smo257132 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo257132'] = smo257132;
smo257132.setAttribute('id', 'smo257132');
smo257152v0ar.push(smo257132);
const smo257133 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo257133'] = smo257133;
smo257133.setAttribute('id', 'smo257133');
smo257152v0ar.push(smo257133);
const smo257134 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo257134'] = smo257134;
smo257134.setAttribute('id', 'smo257134');
smo257152v0ar.push(smo257134);
const smo257135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo257135'] = smo257135;
smo257135.setAttribute('id', 'smo257135');
smo257152v0ar.push(smo257135);
const smo257136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo257136'] = smo257136;
smo257136.setAttribute('id', 'smo257136');
smo257152v0ar.push(smo257136);
smo257152v0.addTickables(smo257152v0ar)
fmtsmo25715215.joinVoices([smo257152v0]);
const fmtsmo25957915 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo259579v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo259579v0ar = [];
const smo259553 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo259553'] = smo259553;
smo259553.setAttribute('id', 'smo259553');
smo259579v0ar.push(smo259553);
const smo259554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo259554'] = smo259554;
smo259554.setAttribute('id', 'smo259554');
smo259579v0ar.push(smo259554);
const smo259555 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo259555'] = smo259555;
smo259555.setAttribute('id', 'smo259555');
smo259579v0ar.push(smo259555);
const smo259556 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo259556'] = smo259556;
smo259556.setAttribute('id', 'smo259556');
smo259579v0ar.push(smo259556);
const smo259557 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo259557'] = smo259557;
smo259557.setAttribute('id', 'smo259557');
smo259579v0ar.push(smo259557);
const smo259558 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo259558'] = smo259558;
smo259558.setAttribute('id', 'smo259558');
smo259579v0ar.push(smo259558);
const smo259559 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo259559'] = smo259559;
smo259559.setAttribute('id', 'smo259559');
smo259579v0ar.push(smo259559);
const smo259560 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo259560'] = smo259560;
smo259560.setAttribute('id', 'smo259560');
smo259579v0ar.push(smo259560);
const smo259561 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo259561'] = smo259561;
smo259561.setAttribute('id', 'smo259561');
smo259579v0ar.push(smo259561);
const smo259562 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo259562'] = smo259562;
smo259562.setAttribute('id', 'smo259562');
smo259579v0ar.push(smo259562);
const smo259563 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo259563'] = smo259563;
smo259563.setAttribute('id', 'smo259563');
smo259579v0ar.push(smo259563);
smo259579v0.addTickables(smo259579v0ar)
fmtsmo25957915.joinVoices([smo259579v0]);
const fmtsmo26199515 = new VF.Formatter();
//
// voices and notes for stave 2 15
const smo261995v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo261995v0ar = [];
const smo261971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo261971'] = smo261971;
smo261971.setAttribute('id', 'smo261971');
smo261995v0ar.push(smo261971);
const smo261972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo261972'] = smo261972;
smo261972.setAttribute('id', 'smo261972');
smo261995v0ar.push(smo261972);
const smo261973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo261973'] = smo261973;
smo261973.setAttribute('id', 'smo261973');
smo261995v0ar.push(smo261973);
const smo261974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo261974'] = smo261974;
smo261974.setAttribute('id', 'smo261974');
smo261995v0ar.push(smo261974);
const smo261975 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo261975'] = smo261975;
smo261975.setAttribute('id', 'smo261975');
smo261995v0ar.push(smo261975);
const smo261976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo261976'] = smo261976;
smo261976.setAttribute('id', 'smo261976');
smo261995v0ar.push(smo261976);
const smo261977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo261977'] = smo261977;
smo261977.setAttribute('id', 'smo261977');
smo261995v0ar.push(smo261977);
const smo261978 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo261978'] = smo261978;
smo261978.setAttribute('id', 'smo261978');
smo261995v0ar.push(smo261978);
const smo261979 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo261979'] = smo261979;
smo261979.setAttribute('id', 'smo261979');
smo261995v0ar.push(smo261979);
smo261995v0.addTickables(smo261995v0ar)
fmtsmo26199515.joinVoices([smo261995v0]);
const fmtsmo26436915 = new VF.Formatter();
//
// voices and notes for stave 3 15
const smo264369v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo264369v0ar = [];
const smo264345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo264345'] = smo264345;
smo264345.setAttribute('id', 'smo264345');
smo264369v0ar.push(smo264345);
const smo264346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo264346'] = smo264346;
smo264346.setAttribute('id', 'smo264346');
smo264369v0ar.push(smo264346);
const smo264347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo264347'] = smo264347;
smo264347.setAttribute('id', 'smo264347');
smo264369v0ar.push(smo264347);
const smo264348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo264348'] = smo264348;
smo264348.setAttribute('id', 'smo264348');
smo264369v0ar.push(smo264348);
const smo264349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo264349'] = smo264349;
smo264349.setAttribute('id', 'smo264349');
smo264369v0ar.push(smo264349);
const smo264350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo264350'] = smo264350;
smo264350.setAttribute('id', 'smo264350');
smo264369v0ar.push(smo264350);
const smo264351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo264351'] = smo264351;
smo264351.setAttribute('id', 'smo264351');
smo264369v0ar.push(smo264351);
const smo264352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo264352'] = smo264352;
smo264352.setAttribute('id', 'smo264352');
smo264369v0ar.push(smo264352);
const smo264353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo264353'] = smo264353;
smo264353.setAttribute('id', 'smo264353');
smo264369v0ar.push(smo264353);
smo264369v0.addTickables(smo264369v0ar)
fmtsmo26436915.joinVoices([smo264369v0]);
const fmtsmo26672115 = new VF.Formatter();
//
// voices and notes for stave 4 15
const smo266721v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266721v0ar = [];
const smo266702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo266702'] = smo266702;
smo266702.setAttribute('id', 'smo266702');
const  smo372085 = new VF.Articulation('a.').setPosition(3);
smo266702.addModifier(smo372085, 0);
smo266721v0ar.push(smo266702);
const smo266704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo266704'] = smo266704;
smo266704.setAttribute('id', 'smo266704');
smo266721v0ar.push(smo266704);
const smo266705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo266705'] = smo266705;
smo266705.setAttribute('id', 'smo266705');
smo266721v0ar.push(smo266705);
smo266721v0.addTickables(smo266721v0ar)
fmtsmo26672115.joinVoices([smo266721v0]);
const fmtsmo26902715 = new VF.Formatter();
//
// voices and notes for stave 5 15
const smo269027v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269027v0ar = [];
const smo269004 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo269004'] = smo269004;
smo269004.setAttribute('id', 'smo269004');
smo269027v0ar.push(smo269004);
const smo269005 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo269005'] = smo269005;
smo269005.setAttribute('id', 'smo269005');
smo269027v0ar.push(smo269005);
const smo269006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo269006'] = smo269006;
smo269006.setAttribute('id', 'smo269006');
smo269027v0ar.push(smo269006);
const smo269007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo269007'] = smo269007;
smo269007.setAttribute('id', 'smo269007');
smo269027v0ar.push(smo269007);
const smo269008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo269008'] = smo269008;
smo269008.setAttribute('id', 'smo269008');
smo269027v0ar.push(smo269008);
const smo269009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo269009'] = smo269009;
smo269009.setAttribute('id', 'smo269009');
smo269027v0ar.push(smo269009);
const smo269010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo269010'] = smo269010;
smo269010.setAttribute('id', 'smo269010');
smo269027v0ar.push(smo269010);
const smo269011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo269011'] = smo269011;
smo269011.setAttribute('id', 'smo269011');
smo269027v0ar.push(smo269011);
smo269027v0.addTickables(smo269027v0ar)
fmtsmo26902715.joinVoices([smo269027v0]);
const fmtsmo27143315 = new VF.Formatter();
//
// voices and notes for stave 6 15
const smo271433v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo271433v0ar = [];
const smo271410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo271410'] = smo271410;
smo271410.setAttribute('id', 'smo271410');
smo271433v0ar.push(smo271410);
const smo271411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo271411'] = smo271411;
smo271411.setAttribute('id', 'smo271411');
smo271433v0ar.push(smo271411);
const smo271412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo271412'] = smo271412;
smo271412.setAttribute('id', 'smo271412');
smo271433v0ar.push(smo271412);
const smo271413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo271413'] = smo271413;
smo271413.setAttribute('id', 'smo271413');
smo271433v0ar.push(smo271413);
const smo271414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo271414'] = smo271414;
smo271414.setAttribute('id', 'smo271414');
smo271433v0ar.push(smo271414);
const smo271415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo271415'] = smo271415;
smo271415.setAttribute('id', 'smo271415');
smo271433v0ar.push(smo271415);
const smo271416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo271416'] = smo271416;
smo271416.setAttribute('id', 'smo271416');
smo271433v0ar.push(smo271416);
const smo271417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo271417'] = smo271417;
smo271417.setAttribute('id', 'smo271417');
smo271433v0ar.push(smo271417);
smo271433v0.addTickables(smo271433v0ar)
fmtsmo27143315.joinVoices([smo271433v0]);
const fmtsmo27376415 = new VF.Formatter();
//
// voices and notes for stave 7 15
const smo273764v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo273764v0ar = [];
const smo273748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo273748'] = smo273748;
smo273748.setAttribute('id', 'smo273748');
smo273764v0ar.push(smo273748);
smo273764v0.addTickables(smo273764v0ar)
fmtsmo27376415.joinVoices([smo273764v0]);
const fmtsmo27611415 = new VF.Formatter();
//
// voices and notes for stave 8 15
const smo276114v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo276114v0ar = [];
const smo276098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo276098'] = smo276098;
smo276098.setAttribute('id', 'smo276098');
smo276114v0ar.push(smo276098);
smo276114v0.addTickables(smo276114v0ar)
fmtsmo27611415.joinVoices([smo276114v0]);
const fmtsmo27853215 = new VF.Formatter();
//
// voices and notes for stave 9 15
const smo278532v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278532v0ar = [];
const smo278509 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo278509'] = smo278509;
smo278509.setAttribute('id', 'smo278509');
smo278532v0ar.push(smo278509);
const smo278510 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo278510'] = smo278510;
smo278510.setAttribute('id', 'smo278510');
smo278532v0ar.push(smo278510);
const smo278511 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo278511'] = smo278511;
smo278511.setAttribute('id', 'smo278511');
smo278532v0ar.push(smo278511);
const smo278512 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo278512'] = smo278512;
smo278512.setAttribute('id', 'smo278512');
smo278532v0ar.push(smo278512);
const smo278513 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo278513'] = smo278513;
smo278513.setAttribute('id', 'smo278513');
smo278532v0ar.push(smo278513);
const smo278514 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo278514'] = smo278514;
smo278514.setAttribute('id', 'smo278514');
smo278532v0ar.push(smo278514);
const smo278515 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo278515'] = smo278515;
smo278515.setAttribute('id', 'smo278515');
smo278532v0ar.push(smo278515);
const smo278516 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo278516'] = smo278516;
smo278516.setAttribute('id', 'smo278516');
smo278532v0ar.push(smo278516);
smo278532v0.addTickables(smo278532v0ar)
fmtsmo27853215.joinVoices([smo278532v0]);
const fmtsmo28090515 = new VF.Formatter();
//
// voices and notes for stave 10 15
const smo280905v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo280905v0ar = [];
const smo280882 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo280882'] = smo280882;
smo280882.setAttribute('id', 'smo280882');
smo280905v0ar.push(smo280882);
const smo280883 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo280883'] = smo280883;
smo280883.setAttribute('id', 'smo280883');
smo280905v0ar.push(smo280883);
const smo280884 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo280884'] = smo280884;
smo280884.setAttribute('id', 'smo280884');
smo280905v0ar.push(smo280884);
const smo280885 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo280885'] = smo280885;
smo280885.setAttribute('id', 'smo280885');
smo280905v0ar.push(smo280885);
const smo280886 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo280886'] = smo280886;
smo280886.setAttribute('id', 'smo280886');
smo280905v0ar.push(smo280886);
const smo280887 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo280887'] = smo280887;
smo280887.setAttribute('id', 'smo280887');
smo280905v0ar.push(smo280887);
const smo280888 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo280888'] = smo280888;
smo280888.setAttribute('id', 'smo280888');
smo280905v0ar.push(smo280888);
const smo280889 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo280889'] = smo280889;
smo280889.setAttribute('id', 'smo280889');
smo280905v0ar.push(smo280889);
smo280905v0.addTickables(smo280905v0ar)
fmtsmo28090515.joinVoices([smo280905v0]);
const fmtsmo28325115 = new VF.Formatter();
//
// voices and notes for stave 11 15
const smo283251v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo283251v0ar = [];
const smo283228 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo283228'] = smo283228;
smo283228.setAttribute('id', 'smo283228');
smo283251v0ar.push(smo283228);
const smo283229 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo283229'] = smo283229;
smo283229.setAttribute('id', 'smo283229');
smo283251v0ar.push(smo283229);
const smo283230 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo283230'] = smo283230;
smo283230.setAttribute('id', 'smo283230');
smo283251v0ar.push(smo283230);
const smo283231 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo283231'] = smo283231;
smo283231.setAttribute('id', 'smo283231');
smo283251v0ar.push(smo283231);
const smo283232 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo283232'] = smo283232;
smo283232.setAttribute('id', 'smo283232');
smo283251v0ar.push(smo283232);
const smo283233 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo283233'] = smo283233;
smo283233.setAttribute('id', 'smo283233');
smo283251v0ar.push(smo283233);
const smo283234 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo283234'] = smo283234;
smo283234.setAttribute('id', 'smo283234');
smo283251v0ar.push(smo283234);
const smo283235 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo283235'] = smo283235;
smo283235.setAttribute('id', 'smo283235');
smo283251v0ar.push(smo283235);
smo283251v0.addTickables(smo283251v0ar)
fmtsmo28325115.joinVoices([smo283251v0]);
const fmtsmo28558015 = new VF.Formatter();
//
// voices and notes for stave 12 15
const smo285580v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo285580v0ar = [];
const smo285561 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo285561'] = smo285561;
smo285561.setAttribute('id', 'smo285561');
const  smo372086 = new VF.Articulation('a.').setPosition(3);
smo285561.addModifier(smo372086, 0);
smo285580v0ar.push(smo285561);
const smo285563 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo285563'] = smo285563;
smo285563.setAttribute('id', 'smo285563');
smo285580v0ar.push(smo285563);
const smo285564 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n"]}'))
noteHash['smo285564'] = smo285564;
smo285564.setAttribute('id', 'smo285564');
smo285580v0ar.push(smo285564);
smo285580v0.addTickables(smo285580v0ar)
fmtsmo28558015.joinVoices([smo285580v0]);
const fmtsmo28791315 = new VF.Formatter();
//
// voices and notes for stave 13 15
const smo287913v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287913v0ar = [];
const smo287890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo287890'] = smo287890;
smo287890.setAttribute('id', 'smo287890');
smo287913v0ar.push(smo287890);
const smo287891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo287891'] = smo287891;
smo287891.setAttribute('id', 'smo287891');
smo287913v0ar.push(smo287891);
const smo287892 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo287892'] = smo287892;
smo287892.setAttribute('id', 'smo287892');
smo287913v0ar.push(smo287892);
const smo287893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo287893'] = smo287893;
smo287893.setAttribute('id', 'smo287893');
smo287913v0ar.push(smo287893);
const smo287894 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo287894'] = smo287894;
smo287894.setAttribute('id', 'smo287894');
smo287913v0ar.push(smo287894);
const smo287895 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo287895'] = smo287895;
smo287895.setAttribute('id', 'smo287895');
smo287913v0ar.push(smo287895);
const smo287896 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo287896'] = smo287896;
smo287896.setAttribute('id', 'smo287896');
smo287913v0ar.push(smo287896);
const smo287897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo287897'] = smo287897;
smo287897.setAttribute('id', 'smo287897');
smo287913v0ar.push(smo287897);
smo287913v0.addTickables(smo287913v0ar)
fmtsmo28791315.joinVoices([smo287913v0]);
const fmtsmo29034315 = new VF.Formatter();
//
// voices and notes for stave 14 15
const smo290343v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290343v0ar = [];
const smo290327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo290327'] = smo290327;
smo290327.setAttribute('id', 'smo290327');
smo290343v0ar.push(smo290327);
smo290343v0.addTickables(smo290343v0ar)
fmtsmo29034315.joinVoices([smo290343v0]);
const fmtsmo29285815 = new VF.Formatter();
//
// voices and notes for stave 15 15
const smo292858v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo292858v0ar = [];
const smo292839 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo292839'] = smo292839;
smo292839.setAttribute('id', 'smo292839');
const  smo372087 = new VF.Articulation('a.').setPosition(3);
smo292839.addModifier(smo372087, 0);
smo292858v0ar.push(smo292839);
const smo292841 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo292841'] = smo292841;
smo292841.setAttribute('id', 'smo292841');
smo292858v0ar.push(smo292841);
const smo292842 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo292842'] = smo292842;
smo292842.setAttribute('id', 'smo292842');
smo292858v0ar.push(smo292842);
smo292858v0.addTickables(smo292858v0ar)
fmtsmo29285815.joinVoices([smo292858v0]);
const fmtsmo29531615 = new VF.Formatter();
//
// voices and notes for stave 16 15
const smo295316v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo295316v0ar = [];
const smo295290 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295290'] = smo295290;
smo295290.setAttribute('id', 'smo295290');
const smo2952900acc = new VF.Accidental('n');
smo295290.addModifier(smo2952900acc, 0);
smo295316v0ar.push(smo295290);
const smo295291 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295291'] = smo295291;
smo295291.setAttribute('id', 'smo295291');
smo295316v0ar.push(smo295291);
const smo295292 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295292'] = smo295292;
smo295292.setAttribute('id', 'smo295292');
smo295316v0ar.push(smo295292);
const smo295293 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295293'] = smo295293;
smo295293.setAttribute('id', 'smo295293');
smo295316v0ar.push(smo295293);
const smo295294 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295294'] = smo295294;
smo295294.setAttribute('id', 'smo295294');
smo295316v0ar.push(smo295294);
const smo295295 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295295'] = smo295295;
smo295295.setAttribute('id', 'smo295295');
smo295316v0ar.push(smo295295);
const smo295296 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo295296'] = smo295296;
smo295296.setAttribute('id', 'smo295296');
smo295316v0ar.push(smo295296);
const smo295297 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295297'] = smo295297;
smo295297.setAttribute('id', 'smo295297');
smo295316v0ar.push(smo295297);
const smo295298 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo295298'] = smo295298;
smo295298.setAttribute('id', 'smo295298');
smo295316v0ar.push(smo295298);
const smo295299 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295299'] = smo295299;
smo295299.setAttribute('id', 'smo295299');
smo295316v0ar.push(smo295299);
smo295316v0.addTickables(smo295316v0ar)
fmtsmo29531615.joinVoices([smo295316v0]);
// create beam groups and tuplets for format grp smo297611 before formatting
const dirsmo363887 = smo257126.getStemDirection();
smo257126.setStemDirection(dirsmo363887);
smo257127.setStemDirection(dirsmo363887);
smo257128.setStemDirection(dirsmo363887);
const smo363887 = new VF.Beam([smo257126,smo257127,smo257128]);
const dirsmo363888 = smo257129.getStemDirection();
smo257129.setStemDirection(dirsmo363888);
smo257130.setStemDirection(dirsmo363888);
const smo363888 = new VF.Beam([smo257129,smo257130]);
const dirsmo363889 = smo257131.getStemDirection();
smo257131.setStemDirection(dirsmo363889);
smo257132.setStemDirection(dirsmo363889);
smo257133.setStemDirection(dirsmo363889);
const smo363889 = new VF.Beam([smo257131,smo257132,smo257133]);
const dirsmo363890 = smo257134.getStemDirection();
smo257134.setStemDirection(dirsmo363890);
smo257135.setStemDirection(dirsmo363890);
smo257136.setStemDirection(dirsmo363890);
const smo363890 = new VF.Beam([smo257134,smo257135,smo257136]);
const dirsmo363893 = smo259553.getStemDirection();
smo259553.setStemDirection(dirsmo363893);
smo259554.setStemDirection(dirsmo363893);
smo259555.setStemDirection(dirsmo363893);
const smo363893 = new VF.Beam([smo259553,smo259554,smo259555]);
const dirsmo363894 = smo259556.getStemDirection();
smo259556.setStemDirection(dirsmo363894);
smo259557.setStemDirection(dirsmo363894);
const smo363894 = new VF.Beam([smo259556,smo259557]);
const dirsmo363895 = smo259558.getStemDirection();
smo259558.setStemDirection(dirsmo363895);
smo259559.setStemDirection(dirsmo363895);
smo259560.setStemDirection(dirsmo363895);
const smo363895 = new VF.Beam([smo259558,smo259559,smo259560]);
const dirsmo363896 = smo259561.getStemDirection();
smo259561.setStemDirection(dirsmo363896);
smo259562.setStemDirection(dirsmo363896);
smo259563.setStemDirection(dirsmo363896);
const smo363896 = new VF.Beam([smo259561,smo259562,smo259563]);
const dirsmo363899 = smo261971.getStemDirection();
smo261971.setStemDirection(dirsmo363899);
smo261972.setStemDirection(dirsmo363899);
smo261973.setStemDirection(dirsmo363899);
const smo363899 = new VF.Beam([smo261971,smo261972,smo261973]);
const dirsmo363900 = smo261974.getStemDirection();
smo261974.setStemDirection(dirsmo363900);
smo261975.setStemDirection(dirsmo363900);
const smo363900 = new VF.Beam([smo261974,smo261975]);
const dirsmo363901 = smo261977.getStemDirection();
smo261977.setStemDirection(dirsmo363901);
smo261978.setStemDirection(dirsmo363901);
const smo363901 = new VF.Beam([smo261977,smo261978]);
const dirsmo363904 = smo264345.getStemDirection();
smo264345.setStemDirection(dirsmo363904);
smo264346.setStemDirection(dirsmo363904);
smo264347.setStemDirection(dirsmo363904);
const smo363904 = new VF.Beam([smo264345,smo264346,smo264347]);
const dirsmo363905 = smo264348.getStemDirection();
smo264348.setStemDirection(dirsmo363905);
smo264349.setStemDirection(dirsmo363905);
const smo363905 = new VF.Beam([smo264348,smo264349]);
const dirsmo363906 = smo264351.getStemDirection();
smo264351.setStemDirection(dirsmo363906);
smo264352.setStemDirection(dirsmo363906);
const smo363906 = new VF.Beam([smo264351,smo264352]);
 
// formatting measures in staff group smo297611
fmtsmo25715215.format([smo257152v0,smo259579v0,smo261995v0,smo264369v0,smo266721v0], 402);
const stavesmo257152 = new VF.Stave(915, 183.2253035909339, 416);
stavesmo257152.setAttribute('id', 'stavesmo257152');
stavesmo257152.setBegBarType(VF.Barline.type.NONE);
stavesmo257152.setContext(context);
stavesmo257152.draw();
smo257152v0.draw(context, stavesmo257152);
smo363887.setContext(context);
smo363887.draw();
smo363888.setContext(context);
smo363888.draw();
smo363889.setContext(context);
smo363889.draw();
smo363890.setContext(context);
smo363890.draw();
const stavesmo259579 = new VF.Stave(915, 288.2253035909339, 416);
stavesmo259579.setAttribute('id', 'stavesmo259579');
stavesmo259579.setBegBarType(VF.Barline.type.NONE);
stavesmo259579.setContext(context);
stavesmo259579.draw();
smo259579v0.draw(context, stavesmo259579);
smo363893.setContext(context);
smo363893.draw();
smo363894.setContext(context);
smo363894.draw();
smo363895.setContext(context);
smo363895.draw();
smo363896.setContext(context);
smo363896.draw();
const stavesmo261995 = new VF.Stave(915, 379.2253035909339, 416);
stavesmo261995.setAttribute('id', 'stavesmo261995');
stavesmo261995.setBegBarType(VF.Barline.type.NONE);
stavesmo261995.setContext(context);
stavesmo261995.draw();
smo261995v0.draw(context, stavesmo261995);
smo363899.setContext(context);
smo363899.draw();
smo363900.setContext(context);
smo363900.draw();
smo363901.setContext(context);
smo363901.draw();
const stavesmo264369 = new VF.Stave(915, 479.2253035909339, 416);
stavesmo264369.setAttribute('id', 'stavesmo264369');
stavesmo264369.setBegBarType(VF.Barline.type.NONE);
stavesmo264369.setContext(context);
stavesmo264369.draw();
smo264369v0.draw(context, stavesmo264369);
smo363904.setContext(context);
smo363904.draw();
smo363905.setContext(context);
smo363905.draw();
smo363906.setContext(context);
smo363906.draw();
const stavesmo266721 = new VF.Stave(915, 549.2253035909339, 416);
stavesmo266721.setAttribute('id', 'stavesmo266721');
stavesmo266721.setBegBarType(VF.Barline.type.NONE);
stavesmo266721.setContext(context);
stavesmo266721.draw();
smo266721v0.draw(context, stavesmo266721);
// create beam groups and tuplets for format grp smo297613 before formatting
const dirsmo363911 = smo269005.getStemDirection();
smo269005.setStemDirection(dirsmo363911);
smo269006.setStemDirection(dirsmo363911);
const smo363911 = new VF.Beam([smo269005,smo269006]);
const dirsmo363912 = smo269008.getStemDirection();
smo269008.setStemDirection(dirsmo363912);
smo269009.setStemDirection(dirsmo363912);
smo269010.setStemDirection(dirsmo363912);
smo269011.setStemDirection(dirsmo363912);
const smo363912 = new VF.Beam([smo269008,smo269009,smo269010,smo269011]);
const dirsmo363915 = smo271411.getStemDirection();
smo271411.setStemDirection(dirsmo363915);
smo271412.setStemDirection(dirsmo363915);
const smo363915 = new VF.Beam([smo271411,smo271412]);
const dirsmo363916 = smo271414.getStemDirection();
smo271414.setStemDirection(dirsmo363916);
smo271415.setStemDirection(dirsmo363916);
smo271416.setStemDirection(dirsmo363916);
smo271417.setStemDirection(dirsmo363916);
const smo363916 = new VF.Beam([smo271414,smo271415,smo271416,smo271417]);
 
// formatting measures in staff group smo297613
fmtsmo26902715.format([smo269027v0,smo271433v0,smo273764v0,smo276114v0], 402);
const stavesmo269027 = new VF.Stave(915, 630.2253035909339, 416);
stavesmo269027.setAttribute('id', 'stavesmo269027');
stavesmo269027.setBegBarType(VF.Barline.type.NONE);
stavesmo269027.setContext(context);
stavesmo269027.draw();
smo269027v0.draw(context, stavesmo269027);
smo363911.setContext(context);
smo363911.draw();
smo363912.setContext(context);
smo363912.draw();
const stavesmo271433 = new VF.Stave(915, 700.2253035909339, 416);
stavesmo271433.setAttribute('id', 'stavesmo271433');
stavesmo271433.setBegBarType(VF.Barline.type.NONE);
stavesmo271433.setContext(context);
stavesmo271433.draw();
smo271433v0.draw(context, stavesmo271433);
smo363915.setContext(context);
smo363915.draw();
smo363916.setContext(context);
smo363916.draw();
const stavesmo273764 = new VF.Stave(915, 761.2253035909339, 416);
stavesmo273764.setAttribute('id', 'stavesmo273764');
stavesmo273764.setBegBarType(VF.Barline.type.NONE);
stavesmo273764.setContext(context);
stavesmo273764.draw();
smo273764v0.draw(context, stavesmo273764);
const stavesmo276114 = new VF.Stave(915, 831.2253035909339, 416);
stavesmo276114.setAttribute('id', 'stavesmo276114');
stavesmo276114.setBegBarType(VF.Barline.type.NONE);
stavesmo276114.setContext(context);
stavesmo276114.draw();
smo276114v0.draw(context, stavesmo276114);
// create beam groups and tuplets for format grp smo297615 before formatting
const dirsmo363923 = smo278510.getStemDirection();
smo278510.setStemDirection(dirsmo363923);
smo278511.setStemDirection(dirsmo363923);
const smo363923 = new VF.Beam([smo278510,smo278511]);
const dirsmo363924 = smo278513.getStemDirection();
smo278513.setStemDirection(dirsmo363924);
smo278514.setStemDirection(dirsmo363924);
smo278515.setStemDirection(dirsmo363924);
smo278516.setStemDirection(dirsmo363924);
const smo363924 = new VF.Beam([smo278513,smo278514,smo278515,smo278516]);
const dirsmo363927 = smo280883.getStemDirection();
smo280883.setStemDirection(dirsmo363927);
smo280884.setStemDirection(dirsmo363927);
const smo363927 = new VF.Beam([smo280883,smo280884]);
const dirsmo363928 = smo280886.getStemDirection();
smo280886.setStemDirection(dirsmo363928);
smo280887.setStemDirection(dirsmo363928);
smo280888.setStemDirection(dirsmo363928);
smo280889.setStemDirection(dirsmo363928);
const smo363928 = new VF.Beam([smo280886,smo280887,smo280888,smo280889]);
const dirsmo363931 = smo283229.getStemDirection();
smo283229.setStemDirection(dirsmo363931);
smo283230.setStemDirection(dirsmo363931);
const smo363931 = new VF.Beam([smo283229,smo283230]);
const dirsmo363932 = smo283232.getStemDirection();
smo283232.setStemDirection(dirsmo363932);
smo283233.setStemDirection(dirsmo363932);
smo283234.setStemDirection(dirsmo363932);
smo283235.setStemDirection(dirsmo363932);
const smo363932 = new VF.Beam([smo283232,smo283233,smo283234,smo283235]);
 
// formatting measures in staff group smo297615
fmtsmo27853215.format([smo278532v0,smo280905v0,smo283251v0,smo285580v0], 402);
const stavesmo278532 = new VF.Stave(915, 936.2253035909339, 416);
stavesmo278532.setAttribute('id', 'stavesmo278532');
stavesmo278532.setBegBarType(VF.Barline.type.NONE);
stavesmo278532.setContext(context);
stavesmo278532.draw();
smo278532v0.draw(context, stavesmo278532);
smo363923.setContext(context);
smo363923.draw();
smo363924.setContext(context);
smo363924.draw();
const stavesmo280905 = new VF.Stave(915, 1023.2253035909339, 416);
stavesmo280905.setAttribute('id', 'stavesmo280905');
stavesmo280905.setBegBarType(VF.Barline.type.NONE);
stavesmo280905.setContext(context);
stavesmo280905.draw();
smo280905v0.draw(context, stavesmo280905);
smo363927.setContext(context);
smo363927.draw();
smo363928.setContext(context);
smo363928.draw();
const stavesmo283251 = new VF.Stave(915, 1128.225303590934, 416);
stavesmo283251.setAttribute('id', 'stavesmo283251');
stavesmo283251.setBegBarType(VF.Barline.type.NONE);
stavesmo283251.setContext(context);
stavesmo283251.draw();
smo283251v0.draw(context, stavesmo283251);
smo363931.setContext(context);
smo363931.draw();
smo363932.setContext(context);
smo363932.draw();
const stavesmo285580 = new VF.Stave(915, 1213.225303590934, 416);
stavesmo285580.setAttribute('id', 'stavesmo285580');
stavesmo285580.setBegBarType(VF.Barline.type.NONE);
stavesmo285580.setContext(context);
stavesmo285580.draw();
smo285580v0.draw(context, stavesmo285580);
// create beam groups and tuplets for format grp smo290066 before formatting
const dirsmo363937 = smo287891.getStemDirection();
smo287891.setStemDirection(dirsmo363937);
smo287892.setStemDirection(dirsmo363937);
const smo363937 = new VF.Beam([smo287891,smo287892]);
const dirsmo363938 = smo287894.getStemDirection();
smo287894.setStemDirection(dirsmo363938);
smo287895.setStemDirection(dirsmo363938);
smo287896.setStemDirection(dirsmo363938);
smo287897.setStemDirection(dirsmo363938);
const smo363938 = new VF.Beam([smo287894,smo287895,smo287896,smo287897]);
 
// formatting measures in staff group smo290066
fmtsmo28791315.format([smo287913v0], 402);
const stavesmo287913 = new VF.Stave(915, 1290.225303590934, 416);
stavesmo287913.setAttribute('id', 'stavesmo287913');
stavesmo287913.setBegBarType(VF.Barline.type.NONE);
stavesmo287913.setContext(context);
stavesmo287913.draw();
smo287913v0.draw(context, stavesmo287913);
smo363937.setContext(context);
smo363937.draw();
smo363938.setContext(context);
smo363938.draw();
// create beam groups and tuplets for format grp smo292534 before formatting
 
// formatting measures in staff group smo292534
fmtsmo29034315.format([smo290343v0], 402);
const stavesmo290343 = new VF.Stave(915, 1373.225303590934, 416);
stavesmo290343.setAttribute('id', 'stavesmo290343');
stavesmo290343.setBegBarType(VF.Barline.type.NONE);
stavesmo290343.setContext(context);
stavesmo290343.draw();
smo290343v0.draw(context, stavesmo290343);
// create beam groups and tuplets for format grp smo294892 before formatting
 
// formatting measures in staff group smo294892
fmtsmo29285815.format([smo292858v0], 402);
const stavesmo292858 = new VF.Stave(915, 1478.225303590934, 416);
stavesmo292858.setAttribute('id', 'stavesmo292858');
stavesmo292858.setBegBarType(VF.Barline.type.NONE);
stavesmo292858.setContext(context);
stavesmo292858.draw();
smo292858v0.draw(context, stavesmo292858);
// create beam groups and tuplets for format grp smo297605 before formatting
const dirsmo363945 = smo295290.getStemDirection();
smo295290.setStemDirection(dirsmo363945);
smo295291.setStemDirection(dirsmo363945);
smo295292.setStemDirection(dirsmo363945);
smo295293.setStemDirection(dirsmo363945);
const smo363945 = new VF.Beam([smo295290,smo295291,smo295292,smo295293]);
const dirsmo363946 = smo295294.getStemDirection();
smo295294.setStemDirection(dirsmo363946);
smo295295.setStemDirection(dirsmo363946);
const smo363946 = new VF.Beam([smo295294,smo295295]);
const smo295300 = new VF.Tuplet([smo295291,smo295292,smo295293], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo297605
fmtsmo29531615.format([smo295316v0], 402);
const stavesmo295316 = new VF.Stave(915, 1555.225303590934, 416);
stavesmo295316.setAttribute('id', 'stavesmo295316');
stavesmo295316.setBegBarType(VF.Barline.type.NONE);
stavesmo295316.setContext(context);
stavesmo295316.draw();
smo295316v0.draw(context, stavesmo295316);
smo363945.setContext(context);
smo363945.draw();
smo363946.setContext(context);
smo363946.draw();
smo295300.setContext(context).draw();
const fmtsmo25717316 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo257173v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo257173v0ar = [];
const smo257153 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo257153'] = smo257153;
smo257153.setAttribute('id', 'smo257153');
smo257173v0ar.push(smo257153);
const smo257154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo257154'] = smo257154;
smo257154.setAttribute('id', 'smo257154');
smo257173v0ar.push(smo257154);
const smo257155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo257155'] = smo257155;
smo257155.setAttribute('id', 'smo257155');
smo257173v0ar.push(smo257155);
const smo257156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo257156'] = smo257156;
smo257156.setAttribute('id', 'smo257156');
const smo2571560acc = new VF.Accidental('n');
smo257156.addModifier(smo2571560acc, 0);
smo257173v0ar.push(smo257156);
const smo257157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo257157'] = smo257157;
smo257157.setAttribute('id', 'smo257157');
smo257173v0ar.push(smo257157);
smo257173v0.addTickables(smo257173v0ar)
fmtsmo25717316.joinVoices([smo257173v0]);
const fmtsmo25960016 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo259600v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo259600v0ar = [];
const smo259580 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo259580'] = smo259580;
smo259580.setAttribute('id', 'smo259580');
smo259600v0ar.push(smo259580);
const smo259581 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo259581'] = smo259581;
smo259581.setAttribute('id', 'smo259581');
smo259600v0ar.push(smo259581);
const smo259582 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo259582'] = smo259582;
smo259582.setAttribute('id', 'smo259582');
smo259600v0ar.push(smo259582);
const smo259583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo259583'] = smo259583;
smo259583.setAttribute('id', 'smo259583');
const smo2595830acc = new VF.Accidental('n');
smo259583.addModifier(smo2595830acc, 0);
smo259600v0ar.push(smo259583);
const smo259584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo259584'] = smo259584;
smo259584.setAttribute('id', 'smo259584');
const smo2595840acc = new VF.Accidental('b');
smo259584.addModifier(smo2595840acc, 0);
smo259600v0ar.push(smo259584);
smo259600v0.addTickables(smo259600v0ar)
fmtsmo25960016.joinVoices([smo259600v0]);
const fmtsmo26201616 = new VF.Formatter();
//
// voices and notes for stave 2 16
const smo262016v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo262016v0ar = [];
const smo261996 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo261996'] = smo261996;
smo261996.setAttribute('id', 'smo261996');
smo262016v0ar.push(smo261996);
const smo261997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo261997'] = smo261997;
smo261997.setAttribute('id', 'smo261997');
smo262016v0ar.push(smo261997);
const smo261998 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo261998'] = smo261998;
smo261998.setAttribute('id', 'smo261998');
smo262016v0ar.push(smo261998);
const smo261999 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo261999'] = smo261999;
smo261999.setAttribute('id', 'smo261999');
const smo2619990acc = new VF.Accidental('n');
smo261999.addModifier(smo2619990acc, 0);
smo262016v0ar.push(smo261999);
const smo262000 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["ab/4/n"]}'))
noteHash['smo262000'] = smo262000;
smo262000.setAttribute('id', 'smo262000');
const smo2620000acc = new VF.Accidental('b');
smo262000.addModifier(smo2620000acc, 0);
smo262016v0ar.push(smo262000);
smo262016v0.addTickables(smo262016v0ar)
fmtsmo26201616.joinVoices([smo262016v0]);
const fmtsmo26439016 = new VF.Formatter();
//
// voices and notes for stave 3 16
const smo264390v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo264390v0ar = [];
const smo264370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo264370'] = smo264370;
smo264370.setAttribute('id', 'smo264370');
smo264390v0ar.push(smo264370);
const smo264371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo264371'] = smo264371;
smo264371.setAttribute('id', 'smo264371');
smo264390v0ar.push(smo264371);
const smo264372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo264372'] = smo264372;
smo264372.setAttribute('id', 'smo264372');
smo264390v0ar.push(smo264372);
const smo264373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo264373'] = smo264373;
smo264373.setAttribute('id', 'smo264373');
const smo2643730acc = new VF.Accidental('n');
smo264373.addModifier(smo2643730acc, 0);
smo264390v0ar.push(smo264373);
const smo264374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo264374'] = smo264374;
smo264374.setAttribute('id', 'smo264374');
const smo2643740acc = new VF.Accidental('#');
smo264374.addModifier(smo2643740acc, 0);
smo264390v0ar.push(smo264374);
smo264390v0.addTickables(smo264390v0ar)
fmtsmo26439016.joinVoices([smo264390v0]);
const fmtsmo26674116 = new VF.Formatter();
//
// voices and notes for stave 4 16
const smo266741v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo266741v0ar = [];
const smo266722 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo266722'] = smo266722;
smo266722.setAttribute('id', 'smo266722');
smo266741v0ar.push(smo266722);
const smo266723 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo266723'] = smo266723;
smo266723.setAttribute('id', 'smo266723');
smo266741v0ar.push(smo266723);
const smo266724 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo266724'] = smo266724;
smo266724.setAttribute('id', 'smo266724');
smo266741v0ar.push(smo266724);
const smo266725 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["a#/4/n"]}'))
noteHash['smo266725'] = smo266725;
smo266725.setAttribute('id', 'smo266725');
const smo2667250acc = new VF.Accidental('#');
smo266725.addModifier(smo2667250acc, 0);
smo266741v0ar.push(smo266725);
smo266741v0.addTickables(smo266741v0ar)
fmtsmo26674116.joinVoices([smo266741v0]);
const fmtsmo26904816 = new VF.Formatter();
//
// voices and notes for stave 5 16
const smo269048v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo269048v0ar = [];
const smo269028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo269028'] = smo269028;
smo269028.setAttribute('id', 'smo269028');
smo269048v0ar.push(smo269028);
const smo269029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo269029'] = smo269029;
smo269029.setAttribute('id', 'smo269029');
smo269048v0ar.push(smo269029);
const smo269030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo269030'] = smo269030;
smo269030.setAttribute('id', 'smo269030');
smo269048v0ar.push(smo269030);
const smo269031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo269031'] = smo269031;
smo269031.setAttribute('id', 'smo269031');
smo269048v0ar.push(smo269031);
const smo269032 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo269032'] = smo269032;
smo269032.setAttribute('id', 'smo269032');
smo269048v0ar.push(smo269032);
smo269048v0.addTickables(smo269048v0ar)
fmtsmo26904816.joinVoices([smo269048v0]);
const fmtsmo27145416 = new VF.Formatter();
//
// voices and notes for stave 6 16
const smo271454v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo271454v0ar = [];
const smo271434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo271434'] = smo271434;
smo271434.setAttribute('id', 'smo271434');
smo271454v0ar.push(smo271434);
const smo271435 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo271435'] = smo271435;
smo271435.setAttribute('id', 'smo271435');
smo271454v0ar.push(smo271435);
const smo271436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo271436'] = smo271436;
smo271436.setAttribute('id', 'smo271436');
smo271454v0ar.push(smo271436);
const smo271437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo271437'] = smo271437;
smo271437.setAttribute('id', 'smo271437');
const smo2714370acc = new VF.Accidental('b');
smo271437.addModifier(smo2714370acc, 0);
smo271454v0ar.push(smo271437);
const smo271438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n"]}'))
noteHash['smo271438'] = smo271438;
smo271438.setAttribute('id', 'smo271438');
const smo2714380acc = new VF.Accidental('b');
smo271438.addModifier(smo2714380acc, 0);
smo271454v0ar.push(smo271438);
smo271454v0.addTickables(smo271454v0ar)
fmtsmo27145416.joinVoices([smo271454v0]);
const fmtsmo27378116 = new VF.Formatter();
//
// voices and notes for stave 7 16
const smo273781v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo273781v0ar = [];
const smo273765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo273765'] = smo273765;
smo273765.setAttribute('id', 'smo273765');
smo273781v0ar.push(smo273765);
smo273781v0.addTickables(smo273781v0ar)
fmtsmo27378116.joinVoices([smo273781v0]);
const fmtsmo27613116 = new VF.Formatter();
//
// voices and notes for stave 8 16
const smo276131v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo276131v0ar = [];
const smo276115 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo276115'] = smo276115;
smo276115.setAttribute('id', 'smo276115');
smo276131v0ar.push(smo276115);
smo276131v0.addTickables(smo276131v0ar)
fmtsmo27613116.joinVoices([smo276131v0]);
const fmtsmo27855316 = new VF.Formatter();
//
// voices and notes for stave 9 16
const smo278553v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo278553v0ar = [];
const smo278533 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo278533'] = smo278533;
smo278533.setAttribute('id', 'smo278533');
smo278553v0ar.push(smo278533);
const smo278534 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo278534'] = smo278534;
smo278534.setAttribute('id', 'smo278534');
smo278553v0ar.push(smo278534);
const smo278535 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo278535'] = smo278535;
smo278535.setAttribute('id', 'smo278535');
smo278553v0ar.push(smo278535);
const smo278536 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n"]}'))
noteHash['smo278536'] = smo278536;
smo278536.setAttribute('id', 'smo278536');
const smo2785360acc = new VF.Accidental('b');
smo278536.addModifier(smo2785360acc, 0);
smo278553v0ar.push(smo278536);
const smo278537 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo278537'] = smo278537;
smo278537.setAttribute('id', 'smo278537');
smo278553v0ar.push(smo278537);
smo278553v0.addTickables(smo278553v0ar)
fmtsmo27855316.joinVoices([smo278553v0]);
const fmtsmo28092616 = new VF.Formatter();
//
// voices and notes for stave 10 16
const smo280926v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo280926v0ar = [];
const smo280906 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo280906'] = smo280906;
smo280906.setAttribute('id', 'smo280906');
smo280926v0ar.push(smo280906);
const smo280907 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo280907'] = smo280907;
smo280907.setAttribute('id', 'smo280907');
smo280926v0ar.push(smo280907);
const smo280908 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo280908'] = smo280908;
smo280908.setAttribute('id', 'smo280908');
smo280926v0ar.push(smo280908);
const smo280909 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo280909'] = smo280909;
smo280909.setAttribute('id', 'smo280909');
smo280926v0ar.push(smo280909);
const smo280910 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo280910'] = smo280910;
smo280910.setAttribute('id', 'smo280910');
smo280926v0ar.push(smo280910);
smo280926v0.addTickables(smo280926v0ar)
fmtsmo28092616.joinVoices([smo280926v0]);
const fmtsmo28327216 = new VF.Formatter();
//
// voices and notes for stave 11 16
const smo283272v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo283272v0ar = [];
const smo283252 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo283252'] = smo283252;
smo283252.setAttribute('id', 'smo283252');
smo283272v0ar.push(smo283252);
const smo283253 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo283253'] = smo283253;
smo283253.setAttribute('id', 'smo283253');
smo283272v0ar.push(smo283253);
const smo283254 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo283254'] = smo283254;
smo283254.setAttribute('id', 'smo283254');
smo283272v0ar.push(smo283254);
const smo283255 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n"]}'))
noteHash['smo283255'] = smo283255;
smo283255.setAttribute('id', 'smo283255');
const smo2832550acc = new VF.Accidental('b');
smo283255.addModifier(smo2832550acc, 0);
smo283272v0ar.push(smo283255);
const smo283256 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo283256'] = smo283256;
smo283256.setAttribute('id', 'smo283256');
const smo2832560acc = new VF.Accidental('n');
smo283256.addModifier(smo2832560acc, 0);
smo283272v0ar.push(smo283256);
smo283272v0.addTickables(smo283272v0ar)
fmtsmo28327216.joinVoices([smo283272v0]);
const fmtsmo28560016 = new VF.Formatter();
//
// voices and notes for stave 12 16
const smo285600v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo285600v0ar = [];
const smo285581 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo285581'] = smo285581;
smo285581.setAttribute('id', 'smo285581');
smo285600v0ar.push(smo285581);
const smo285582 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo285582'] = smo285582;
smo285582.setAttribute('id', 'smo285582');
smo285600v0ar.push(smo285582);
const smo285583 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n"]}'))
noteHash['smo285583'] = smo285583;
smo285583.setAttribute('id', 'smo285583');
smo285600v0ar.push(smo285583);
const smo285584 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/3/n"]}'))
noteHash['smo285584'] = smo285584;
smo285584.setAttribute('id', 'smo285584');
const smo2855840acc = new VF.Accidental('#');
smo285584.addModifier(smo2855840acc, 0);
smo285600v0ar.push(smo285584);
smo285600v0.addTickables(smo285600v0ar)
fmtsmo28560016.joinVoices([smo285600v0]);
const fmtsmo28793416 = new VF.Formatter();
//
// voices and notes for stave 13 16
const smo287934v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo287934v0ar = [];
const smo287914 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo287914'] = smo287914;
smo287914.setAttribute('id', 'smo287914');
smo287934v0ar.push(smo287914);
const smo287915 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo287915'] = smo287915;
smo287915.setAttribute('id', 'smo287915');
smo287934v0ar.push(smo287915);
const smo287916 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo287916'] = smo287916;
smo287916.setAttribute('id', 'smo287916');
smo287934v0ar.push(smo287916);
const smo287917 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo287917'] = smo287917;
smo287917.setAttribute('id', 'smo287917');
smo287934v0ar.push(smo287917);
const smo287918 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo287918'] = smo287918;
smo287918.setAttribute('id', 'smo287918');
smo287934v0ar.push(smo287918);
smo287934v0.addTickables(smo287934v0ar)
fmtsmo28793416.joinVoices([smo287934v0]);
const fmtsmo29036016 = new VF.Formatter();
//
// voices and notes for stave 14 16
const smo290360v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo290360v0ar = [];
const smo290344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo290344'] = smo290344;
smo290344.setAttribute('id', 'smo290344');
smo290360v0ar.push(smo290344);
smo290360v0.addTickables(smo290360v0ar)
fmtsmo29036016.joinVoices([smo290360v0]);
const fmtsmo29287816 = new VF.Formatter();
//
// voices and notes for stave 15 16
const smo292878v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo292878v0ar = [];
const smo292859 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo292859'] = smo292859;
smo292859.setAttribute('id', 'smo292859');
smo292878v0ar.push(smo292859);
const smo292860 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo292860'] = smo292860;
smo292860.setAttribute('id', 'smo292860');
smo292878v0ar.push(smo292860);
const smo292861 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo292861'] = smo292861;
smo292861.setAttribute('id', 'smo292861');
smo292878v0ar.push(smo292861);
const smo292862 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/4/n"]}'))
noteHash['smo292862'] = smo292862;
smo292862.setAttribute('id', 'smo292862');
const smo2928620acc = new VF.Accidental('#');
smo292862.addModifier(smo2928620acc, 0);
smo292878v0ar.push(smo292862);
smo292878v0.addTickables(smo292878v0ar)
fmtsmo29287816.joinVoices([smo292878v0]);
const fmtsmo29533716 = new VF.Formatter();
//
// voices and notes for stave 16 16
const smo295337v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo295337v0ar = [];
const smo295317 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo295317'] = smo295317;
smo295317.setAttribute('id', 'smo295317');
smo295337v0ar.push(smo295317);
const smo295318 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295318'] = smo295318;
smo295318.setAttribute('id', 'smo295318');
const smo2953180acc = new VF.Accidental('n');
smo295318.addModifier(smo2953180acc, 0);
smo295337v0ar.push(smo295318);
const smo295319 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295319'] = smo295319;
smo295319.setAttribute('id', 'smo295319');
smo295337v0ar.push(smo295319);
const smo295320 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295320'] = smo295320;
smo295320.setAttribute('id', 'smo295320');
smo295337v0ar.push(smo295320);
const smo295321 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295321'] = smo295321;
smo295321.setAttribute('id', 'smo295321');
smo295337v0ar.push(smo295321);
smo295337v0.addTickables(smo295337v0ar)
fmtsmo29533716.joinVoices([smo295337v0]);
// create beam groups and tuplets for format grp smo297611 before formatting
const dirsmo363949 = smo257153.getStemDirection();
smo257153.setStemDirection(dirsmo363949);
smo257154.setStemDirection(dirsmo363949);
const smo363949 = new VF.Beam([smo257153,smo257154]);
const dirsmo363951 = smo259580.getStemDirection();
smo259580.setStemDirection(dirsmo363951);
smo259581.setStemDirection(dirsmo363951);
const smo363951 = new VF.Beam([smo259580,smo259581]);
const dirsmo363953 = smo261996.getStemDirection();
smo261996.setStemDirection(dirsmo363953);
smo261997.setStemDirection(dirsmo363953);
const smo363953 = new VF.Beam([smo261996,smo261997]);
const dirsmo363955 = smo264370.getStemDirection();
smo264370.setStemDirection(dirsmo363955);
smo264371.setStemDirection(dirsmo363955);
const smo363955 = new VF.Beam([smo264370,smo264371]);
 
// formatting measures in staff group smo297611
fmtsmo25717316.format([smo257173v0,smo259600v0,smo262016v0,smo264390v0,smo266741v0], 140);
const stavesmo257173 = new VF.Stave(1331, 183.2253035909339, 155);
stavesmo257173.setAttribute('id', 'stavesmo257173');
stavesmo257173.setBegBarType(VF.Barline.type.NONE);
stavesmo257173.setEndBarType(2);
stavesmo257173.setContext(context);
stavesmo257173.draw();
smo257173v0.draw(context, stavesmo257173);
smo363949.setContext(context);
smo363949.draw();
const stavesmo259600 = new VF.Stave(1331, 288.2253035909339, 155);
stavesmo259600.setAttribute('id', 'stavesmo259600');
stavesmo259600.setBegBarType(VF.Barline.type.NONE);
stavesmo259600.setEndBarType(2);
stavesmo259600.setContext(context);
stavesmo259600.draw();
smo259600v0.draw(context, stavesmo259600);
smo363951.setContext(context);
smo363951.draw();
const stavesmo262016 = new VF.Stave(1331, 379.2253035909339, 155);
stavesmo262016.setAttribute('id', 'stavesmo262016');
stavesmo262016.setBegBarType(VF.Barline.type.NONE);
stavesmo262016.setEndBarType(2);
stavesmo262016.setContext(context);
stavesmo262016.draw();
smo262016v0.draw(context, stavesmo262016);
smo363953.setContext(context);
smo363953.draw();
const stavesmo264390 = new VF.Stave(1331, 479.2253035909339, 155);
stavesmo264390.setAttribute('id', 'stavesmo264390');
stavesmo264390.setBegBarType(VF.Barline.type.NONE);
stavesmo264390.setEndBarType(2);
stavesmo264390.setContext(context);
stavesmo264390.draw();
smo264390v0.draw(context, stavesmo264390);
smo363955.setContext(context);
smo363955.draw();
const stavesmo266741 = new VF.Stave(1331, 549.2253035909339, 155);
stavesmo266741.setAttribute('id', 'stavesmo266741');
stavesmo266741.setBegBarType(VF.Barline.type.NONE);
stavesmo266741.setEndBarType(2);
stavesmo266741.setContext(context);
stavesmo266741.draw();
smo266741v0.draw(context, stavesmo266741);
// create beam groups and tuplets for format grp smo297613 before formatting
const dirsmo363958 = smo269028.getStemDirection();
smo269028.setStemDirection(dirsmo363958);
smo269029.setStemDirection(dirsmo363958);
const smo363958 = new VF.Beam([smo269028,smo269029]);
const dirsmo363960 = smo271434.getStemDirection();
smo271434.setStemDirection(dirsmo363960);
smo271435.setStemDirection(dirsmo363960);
const smo363960 = new VF.Beam([smo271434,smo271435]);
 
// formatting measures in staff group smo297613
fmtsmo26904816.format([smo269048v0,smo271454v0,smo273781v0,smo276131v0], 140);
const stavesmo269048 = new VF.Stave(1331, 630.2253035909339, 155);
stavesmo269048.setAttribute('id', 'stavesmo269048');
stavesmo269048.setBegBarType(VF.Barline.type.NONE);
stavesmo269048.setEndBarType(2);
stavesmo269048.setContext(context);
stavesmo269048.draw();
smo269048v0.draw(context, stavesmo269048);
smo363958.setContext(context);
smo363958.draw();
const stavesmo271454 = new VF.Stave(1331, 700.2253035909339, 155);
stavesmo271454.setAttribute('id', 'stavesmo271454');
stavesmo271454.setBegBarType(VF.Barline.type.NONE);
stavesmo271454.setEndBarType(2);
stavesmo271454.setContext(context);
stavesmo271454.draw();
smo271454v0.draw(context, stavesmo271454);
smo363960.setContext(context);
smo363960.draw();
const stavesmo273781 = new VF.Stave(1331, 761.2253035909339, 155);
stavesmo273781.setAttribute('id', 'stavesmo273781');
stavesmo273781.setBegBarType(VF.Barline.type.NONE);
stavesmo273781.setEndBarType(2);
stavesmo273781.setContext(context);
stavesmo273781.draw();
smo273781v0.draw(context, stavesmo273781);
const stavesmo276131 = new VF.Stave(1331, 831.2253035909339, 155);
stavesmo276131.setAttribute('id', 'stavesmo276131');
stavesmo276131.setBegBarType(VF.Barline.type.NONE);
stavesmo276131.setEndBarType(2);
stavesmo276131.setContext(context);
stavesmo276131.draw();
smo276131v0.draw(context, stavesmo276131);
// create beam groups and tuplets for format grp smo297615 before formatting
const dirsmo363964 = smo278533.getStemDirection();
smo278533.setStemDirection(dirsmo363964);
smo278534.setStemDirection(dirsmo363964);
const smo363964 = new VF.Beam([smo278533,smo278534]);
const dirsmo363966 = smo280906.getStemDirection();
smo280906.setStemDirection(dirsmo363966);
smo280907.setStemDirection(dirsmo363966);
const smo363966 = new VF.Beam([smo280906,smo280907]);
const dirsmo363968 = smo283252.getStemDirection();
smo283252.setStemDirection(dirsmo363968);
smo283253.setStemDirection(dirsmo363968);
const smo363968 = new VF.Beam([smo283252,smo283253]);
 
// formatting measures in staff group smo297615
fmtsmo27855316.format([smo278553v0,smo280926v0,smo283272v0,smo285600v0], 140);
const stavesmo278553 = new VF.Stave(1331, 936.2253035909339, 155);
stavesmo278553.setAttribute('id', 'stavesmo278553');
stavesmo278553.setBegBarType(VF.Barline.type.NONE);
stavesmo278553.setEndBarType(2);
stavesmo278553.setContext(context);
stavesmo278553.draw();
smo278553v0.draw(context, stavesmo278553);
smo363964.setContext(context);
smo363964.draw();
const stavesmo280926 = new VF.Stave(1331, 1023.2253035909339, 155);
stavesmo280926.setAttribute('id', 'stavesmo280926');
stavesmo280926.setBegBarType(VF.Barline.type.NONE);
stavesmo280926.setEndBarType(2);
stavesmo280926.setContext(context);
stavesmo280926.draw();
smo280926v0.draw(context, stavesmo280926);
smo363966.setContext(context);
smo363966.draw();
const stavesmo283272 = new VF.Stave(1331, 1128.225303590934, 155);
stavesmo283272.setAttribute('id', 'stavesmo283272');
stavesmo283272.setBegBarType(VF.Barline.type.NONE);
stavesmo283272.setEndBarType(2);
stavesmo283272.setContext(context);
stavesmo283272.draw();
smo283272v0.draw(context, stavesmo283272);
smo363968.setContext(context);
smo363968.draw();
const stavesmo285600 = new VF.Stave(1331, 1213.225303590934, 155);
stavesmo285600.setAttribute('id', 'stavesmo285600');
stavesmo285600.setBegBarType(VF.Barline.type.NONE);
stavesmo285600.setEndBarType(2);
stavesmo285600.setContext(context);
stavesmo285600.draw();
smo285600v0.draw(context, stavesmo285600);
// create beam groups and tuplets for format grp smo290066 before formatting
const dirsmo363971 = smo287914.getStemDirection();
smo287914.setStemDirection(dirsmo363971);
smo287915.setStemDirection(dirsmo363971);
const smo363971 = new VF.Beam([smo287914,smo287915]);
 
// formatting measures in staff group smo290066
fmtsmo28793416.format([smo287934v0], 140);
const stavesmo287934 = new VF.Stave(1331, 1290.225303590934, 155);
stavesmo287934.setAttribute('id', 'stavesmo287934');
stavesmo287934.setBegBarType(VF.Barline.type.NONE);
stavesmo287934.setEndBarType(2);
stavesmo287934.setContext(context);
stavesmo287934.draw();
smo287934v0.draw(context, stavesmo287934);
smo363971.setContext(context);
smo363971.draw();
// create beam groups and tuplets for format grp smo292534 before formatting
 
// formatting measures in staff group smo292534
fmtsmo29036016.format([smo290360v0], 140);
const stavesmo290360 = new VF.Stave(1331, 1373.225303590934, 155);
stavesmo290360.setAttribute('id', 'stavesmo290360');
stavesmo290360.setBegBarType(VF.Barline.type.NONE);
stavesmo290360.setEndBarType(2);
stavesmo290360.setContext(context);
stavesmo290360.draw();
smo290360v0.draw(context, stavesmo290360);
// create beam groups and tuplets for format grp smo294892 before formatting
 
// formatting measures in staff group smo294892
fmtsmo29287816.format([smo292878v0], 140);
const stavesmo292878 = new VF.Stave(1331, 1478.225303590934, 155);
stavesmo292878.setAttribute('id', 'stavesmo292878');
stavesmo292878.setBegBarType(VF.Barline.type.NONE);
stavesmo292878.setEndBarType(2);
stavesmo292878.setContext(context);
stavesmo292878.draw();
smo292878v0.draw(context, stavesmo292878);
// create beam groups and tuplets for format grp smo297605 before formatting
 
// formatting measures in staff group smo297605
fmtsmo29533716.format([smo295337v0], 140);
const stavesmo295337 = new VF.Stave(1331, 1555.225303590934, 155);
stavesmo295337.setAttribute('id', 'stavesmo295337');
stavesmo295337.setBegBarType(VF.Barline.type.NONE);
stavesmo295337.setEndBarType(2);
stavesmo295337.setContext(context);
stavesmo295337.draw();
smo295337v0.draw(context, stavesmo295337);
const fmtsmo25719017 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo257190v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo257190v0ar = [];
const smo257174 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo257174'] = smo257174;
smo257174.setAttribute('id', 'smo257174');
smo257190v0ar.push(smo257174);
smo257190v0.addTickables(smo257190v0ar)
fmtsmo25719017.joinVoices([smo257190v0]);
const fmtsmo25961717 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo259617v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo259617v0ar = [];
const smo259601 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo259601'] = smo259601;
smo259601.setAttribute('id', 'smo259601');
smo259617v0ar.push(smo259601);
smo259617v0.addTickables(smo259617v0ar)
fmtsmo25961717.joinVoices([smo259617v0]);
const fmtsmo26203317 = new VF.Formatter();
//
// voices and notes for stave 2 17
const smo262033v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo262033v0ar = [];
const smo262017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo262017'] = smo262017;
smo262017.setAttribute('id', 'smo262017');
smo262033v0ar.push(smo262017);
smo262033v0.addTickables(smo262033v0ar)
fmtsmo26203317.joinVoices([smo262033v0]);
const fmtsmo26440717 = new VF.Formatter();
//
// voices and notes for stave 3 17
const smo264407v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo264407v0ar = [];
const smo264391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo264391'] = smo264391;
smo264391.setAttribute('id', 'smo264391');
smo264407v0ar.push(smo264391);
smo264407v0.addTickables(smo264407v0ar)
fmtsmo26440717.joinVoices([smo264407v0]);
const fmtsmo26675817 = new VF.Formatter();
//
// voices and notes for stave 4 17
const smo266758v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo266758v0ar = [];
const smo266742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo266742'] = smo266742;
smo266742.setAttribute('id', 'smo266742');
smo266758v0ar.push(smo266742);
smo266758v0.addTickables(smo266758v0ar)
fmtsmo26675817.joinVoices([smo266758v0]);
const fmtsmo26906517 = new VF.Formatter();
//
// voices and notes for stave 5 17
const smo269065v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo269065v0ar = [];
const smo269049 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo269049'] = smo269049;
smo269049.setAttribute('id', 'smo269049');
smo269065v0ar.push(smo269049);
smo269065v0.addTickables(smo269065v0ar)
fmtsmo26906517.joinVoices([smo269065v0]);
const fmtsmo27147117 = new VF.Formatter();
//
// voices and notes for stave 6 17
const smo271471v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo271471v0ar = [];
const smo271455 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo271455'] = smo271455;
smo271455.setAttribute('id', 'smo271455');
smo271471v0ar.push(smo271455);
smo271471v0.addTickables(smo271471v0ar)
fmtsmo27147117.joinVoices([smo271471v0]);
const fmtsmo27379817 = new VF.Formatter();
//
// voices and notes for stave 7 17
const smo273798v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo273798v0ar = [];
const smo273782 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo273782'] = smo273782;
smo273782.setAttribute('id', 'smo273782');
smo273798v0ar.push(smo273782);
smo273798v0.addTickables(smo273798v0ar)
fmtsmo27379817.joinVoices([smo273798v0]);
const fmtsmo27614817 = new VF.Formatter();
//
// voices and notes for stave 8 17
const smo276148v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo276148v0ar = [];
const smo276132 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo276132'] = smo276132;
smo276132.setAttribute('id', 'smo276132');
smo276148v0ar.push(smo276132);
smo276148v0.addTickables(smo276148v0ar)
fmtsmo27614817.joinVoices([smo276148v0]);
const fmtsmo27857017 = new VF.Formatter();
//
// voices and notes for stave 9 17
const smo278570v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo278570v0ar = [];
const smo278554 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo278554'] = smo278554;
smo278554.setAttribute('id', 'smo278554');
smo278570v0ar.push(smo278554);
smo278570v0.addTickables(smo278570v0ar)
fmtsmo27857017.joinVoices([smo278570v0]);
const fmtsmo28094317 = new VF.Formatter();
//
// voices and notes for stave 10 17
const smo280943v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo280943v0ar = [];
const smo280927 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo280927'] = smo280927;
smo280927.setAttribute('id', 'smo280927');
smo280943v0ar.push(smo280927);
smo280943v0.addTickables(smo280943v0ar)
fmtsmo28094317.joinVoices([smo280943v0]);
const fmtsmo28328917 = new VF.Formatter();
//
// voices and notes for stave 11 17
const smo283289v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo283289v0ar = [];
const smo283273 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo283273'] = smo283273;
smo283273.setAttribute('id', 'smo283273');
smo283289v0ar.push(smo283273);
smo283289v0.addTickables(smo283289v0ar)
fmtsmo28328917.joinVoices([smo283289v0]);
const fmtsmo28561717 = new VF.Formatter();
//
// voices and notes for stave 12 17
const smo285617v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo285617v0ar = [];
const smo285601 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo285601'] = smo285601;
smo285601.setAttribute('id', 'smo285601');
smo285617v0ar.push(smo285601);
smo285617v0.addTickables(smo285617v0ar)
fmtsmo28561717.joinVoices([smo285617v0]);
const fmtsmo28795117 = new VF.Formatter();
//
// voices and notes for stave 13 17
const smo287951v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo287951v0ar = [];
const smo287935 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo287935'] = smo287935;
smo287935.setAttribute('id', 'smo287935');
smo287951v0ar.push(smo287935);
smo287951v0.addTickables(smo287951v0ar)
fmtsmo28795117.joinVoices([smo287951v0]);
const fmtsmo29037717 = new VF.Formatter();
//
// voices and notes for stave 14 17
const smo290377v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo290377v0ar = [];
const smo290361 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo290361'] = smo290361;
smo290361.setAttribute('id', 'smo290361');
smo290377v0ar.push(smo290361);
smo290377v0.addTickables(smo290377v0ar)
fmtsmo29037717.joinVoices([smo290377v0]);
const fmtsmo29289717 = new VF.Formatter();
//
// voices and notes for stave 15 17
const smo292897v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo292897v0ar = [];
const smo292879 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo292879'] = smo292879;
smo292879.setAttribute('id', 'smo292879');
smo292897v0ar.push(smo292879);
const smo292880 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo292880'] = smo292880;
smo292880.setAttribute('id', 'smo292880');
smo292897v0ar.push(smo292880);
const smo292881 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo292881'] = smo292881;
smo292881.setAttribute('id', 'smo292881');
smo292897v0ar.push(smo292881);
smo292897v0.addTickables(smo292897v0ar)
fmtsmo29289717.joinVoices([smo292897v0]);
const fmtsmo29535717 = new VF.Formatter();
//
// voices and notes for stave 16 17
const smo295357v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo295357v0ar = [];
const smo295338 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295338'] = smo295338;
smo295338.setAttribute('id', 'smo295338');
const smo2953380acc = new VF.Accidental('n');
smo295338.addModifier(smo2953380acc, 0);
smo295357v0ar.push(smo295338);
const smo295339 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295339'] = smo295339;
smo295339.setAttribute('id', 'smo295339');
smo295357v0ar.push(smo295339);
const smo295340 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295340'] = smo295340;
smo295340.setAttribute('id', 'smo295340');
smo295357v0ar.push(smo295340);
const smo295341 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295341'] = smo295341;
smo295341.setAttribute('id', 'smo295341');
smo295357v0ar.push(smo295341);
smo295357v0.addTickables(smo295357v0ar)
fmtsmo29535717.joinVoices([smo295357v0]);
// create beam groups and tuplets for format grp smo297611 before formatting
 
// formatting measures in staff group smo297611
fmtsmo25719017.format([smo257190v0,smo259617v0,smo262033v0,smo264407v0,smo266758v0], 108);
const stavesmo257190 = new VF.Stave(1486, 183.2253035909339, 146);
stavesmo257190.setAttribute('id', 'stavesmo257190');
stavesmo257190.setBegBarType(VF.Barline.type.NONE);
stavesmo257190.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":256}'), -1 * 0);
stavesmo257190.addTimeSignature('2/2');
stavesmo257190.setContext(context);
stavesmo257190.draw();
smo257190v0.draw(context, stavesmo257190);
const stavesmo259617 = new VF.Stave(1486, 288.2253035909339, 146);
stavesmo259617.setAttribute('id', 'stavesmo259617');
stavesmo259617.setBegBarType(VF.Barline.type.NONE);
stavesmo259617.addTimeSignature('2/2');
stavesmo259617.setContext(context);
stavesmo259617.draw();
smo259617v0.draw(context, stavesmo259617);
const stavesmo262033 = new VF.Stave(1486, 379.2253035909339, 146);
stavesmo262033.setAttribute('id', 'stavesmo262033');
stavesmo262033.setBegBarType(VF.Barline.type.NONE);
stavesmo262033.addTimeSignature('2/2');
stavesmo262033.setContext(context);
stavesmo262033.draw();
smo262033v0.draw(context, stavesmo262033);
const stavesmo264407 = new VF.Stave(1486, 479.2253035909339, 146);
stavesmo264407.setAttribute('id', 'stavesmo264407');
stavesmo264407.setBegBarType(VF.Barline.type.NONE);
stavesmo264407.addTimeSignature('2/2');
stavesmo264407.setContext(context);
stavesmo264407.draw();
smo264407v0.draw(context, stavesmo264407);
const stavesmo266758 = new VF.Stave(1486, 549.2253035909339, 146);
stavesmo266758.setAttribute('id', 'stavesmo266758');
stavesmo266758.setBegBarType(VF.Barline.type.NONE);
stavesmo266758.addTimeSignature('2/2');
stavesmo266758.setContext(context);
stavesmo266758.draw();
smo266758v0.draw(context, stavesmo266758);
// create beam groups and tuplets for format grp smo297613 before formatting
 
// formatting measures in staff group smo297613
fmtsmo26906517.format([smo269065v0,smo271471v0,smo273798v0,smo276148v0], 108);
const stavesmo269065 = new VF.Stave(1486, 630.2253035909339, 146);
stavesmo269065.setAttribute('id', 'stavesmo269065');
stavesmo269065.setBegBarType(VF.Barline.type.NONE);
stavesmo269065.addTimeSignature('2/2');
stavesmo269065.setContext(context);
stavesmo269065.draw();
smo269065v0.draw(context, stavesmo269065);
const stavesmo271471 = new VF.Stave(1486, 700.2253035909339, 146);
stavesmo271471.setAttribute('id', 'stavesmo271471');
stavesmo271471.setBegBarType(VF.Barline.type.NONE);
stavesmo271471.addTimeSignature('2/2');
stavesmo271471.setContext(context);
stavesmo271471.draw();
smo271471v0.draw(context, stavesmo271471);
const stavesmo273798 = new VF.Stave(1486, 761.2253035909339, 146);
stavesmo273798.setAttribute('id', 'stavesmo273798');
stavesmo273798.setBegBarType(VF.Barline.type.NONE);
stavesmo273798.addTimeSignature('2/2');
stavesmo273798.setContext(context);
stavesmo273798.draw();
smo273798v0.draw(context, stavesmo273798);
const stavesmo276148 = new VF.Stave(1486, 831.2253035909339, 146);
stavesmo276148.setAttribute('id', 'stavesmo276148');
stavesmo276148.setBegBarType(VF.Barline.type.NONE);
stavesmo276148.addTimeSignature('2/2');
stavesmo276148.setContext(context);
stavesmo276148.draw();
smo276148v0.draw(context, stavesmo276148);
// create beam groups and tuplets for format grp smo297615 before formatting
 
// formatting measures in staff group smo297615
fmtsmo27857017.format([smo278570v0,smo280943v0,smo283289v0,smo285617v0], 108);
const stavesmo278570 = new VF.Stave(1486, 936.2253035909339, 146);
stavesmo278570.setAttribute('id', 'stavesmo278570');
stavesmo278570.setBegBarType(VF.Barline.type.NONE);
stavesmo278570.addTimeSignature('2/2');
stavesmo278570.setContext(context);
stavesmo278570.draw();
smo278570v0.draw(context, stavesmo278570);
const stavesmo280943 = new VF.Stave(1486, 1023.2253035909339, 146);
stavesmo280943.setAttribute('id', 'stavesmo280943');
stavesmo280943.setBegBarType(VF.Barline.type.NONE);
stavesmo280943.addTimeSignature('2/2');
stavesmo280943.setContext(context);
stavesmo280943.draw();
smo280943v0.draw(context, stavesmo280943);
const stavesmo283289 = new VF.Stave(1486, 1128.225303590934, 146);
stavesmo283289.setAttribute('id', 'stavesmo283289');
stavesmo283289.setBegBarType(VF.Barline.type.NONE);
stavesmo283289.addTimeSignature('2/2');
stavesmo283289.setContext(context);
stavesmo283289.draw();
smo283289v0.draw(context, stavesmo283289);
const stavesmo285617 = new VF.Stave(1486, 1213.225303590934, 146);
stavesmo285617.setAttribute('id', 'stavesmo285617');
stavesmo285617.setBegBarType(VF.Barline.type.NONE);
stavesmo285617.addTimeSignature('2/2');
stavesmo285617.setContext(context);
stavesmo285617.draw();
smo285617v0.draw(context, stavesmo285617);
// create beam groups and tuplets for format grp smo290066 before formatting
 
// formatting measures in staff group smo290066
fmtsmo28795117.format([smo287951v0], 108);
const stavesmo287951 = new VF.Stave(1486, 1290.225303590934, 146);
stavesmo287951.setAttribute('id', 'stavesmo287951');
stavesmo287951.setBegBarType(VF.Barline.type.NONE);
stavesmo287951.addTimeSignature('2/2');
stavesmo287951.setContext(context);
stavesmo287951.draw();
smo287951v0.draw(context, stavesmo287951);
// create beam groups and tuplets for format grp smo292534 before formatting
 
// formatting measures in staff group smo292534
fmtsmo29037717.format([smo290377v0], 108);
const stavesmo290377 = new VF.Stave(1486, 1373.225303590934, 146);
stavesmo290377.setAttribute('id', 'stavesmo290377');
stavesmo290377.setBegBarType(VF.Barline.type.NONE);
stavesmo290377.addTimeSignature('2/2');
stavesmo290377.setContext(context);
stavesmo290377.draw();
smo290377v0.draw(context, stavesmo290377);
// create beam groups and tuplets for format grp smo294892 before formatting
 
// formatting measures in staff group smo294892
fmtsmo29289717.format([smo292897v0], 108);
const stavesmo292897 = new VF.Stave(1486, 1478.225303590934, 146);
stavesmo292897.setAttribute('id', 'stavesmo292897');
stavesmo292897.setBegBarType(VF.Barline.type.NONE);
stavesmo292897.addTimeSignature('2/2');
stavesmo292897.setContext(context);
stavesmo292897.draw();
smo292897v0.draw(context, stavesmo292897);
// create beam groups and tuplets for format grp smo297605 before formatting
 
// formatting measures in staff group smo297605
fmtsmo29535717.format([smo295357v0], 108);
const stavesmo295357 = new VF.Stave(1486, 1555.225303590934, 146);
stavesmo295357.setAttribute('id', 'stavesmo295357');
stavesmo295357.setBegBarType(VF.Barline.type.NONE);
stavesmo295357.addTimeSignature('2/2');
stavesmo295357.setContext(context);
stavesmo295357.draw();
smo295357v0.draw(context, stavesmo295357);
const fmtsmo25720718 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo257207v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo257207v0ar = [];
const smo257191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo257191'] = smo257191;
smo257191.setAttribute('id', 'smo257191');
smo257207v0ar.push(smo257191);
smo257207v0.addTickables(smo257207v0ar)
fmtsmo25720718.joinVoices([smo257207v0]);
const fmtsmo25963418 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo259634v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo259634v0ar = [];
const smo259618 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo259618'] = smo259618;
smo259618.setAttribute('id', 'smo259618');
smo259634v0ar.push(smo259618);
smo259634v0.addTickables(smo259634v0ar)
fmtsmo25963418.joinVoices([smo259634v0]);
const fmtsmo26205018 = new VF.Formatter();
//
// voices and notes for stave 2 18
const smo262050v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo262050v0ar = [];
const smo262034 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo262034'] = smo262034;
smo262034.setAttribute('id', 'smo262034');
smo262050v0ar.push(smo262034);
smo262050v0.addTickables(smo262050v0ar)
fmtsmo26205018.joinVoices([smo262050v0]);
const fmtsmo26442418 = new VF.Formatter();
//
// voices and notes for stave 3 18
const smo264424v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo264424v0ar = [];
const smo264408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo264408'] = smo264408;
smo264408.setAttribute('id', 'smo264408');
smo264424v0ar.push(smo264408);
smo264424v0.addTickables(smo264424v0ar)
fmtsmo26442418.joinVoices([smo264424v0]);
const fmtsmo26677518 = new VF.Formatter();
//
// voices and notes for stave 4 18
const smo266775v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo266775v0ar = [];
const smo266759 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo266759'] = smo266759;
smo266759.setAttribute('id', 'smo266759');
smo266775v0ar.push(smo266759);
smo266775v0.addTickables(smo266775v0ar)
fmtsmo26677518.joinVoices([smo266775v0]);
const fmtsmo26908218 = new VF.Formatter();
//
// voices and notes for stave 5 18
const smo269082v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo269082v0ar = [];
const smo269066 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo269066'] = smo269066;
smo269066.setAttribute('id', 'smo269066');
smo269082v0ar.push(smo269066);
smo269082v0.addTickables(smo269082v0ar)
fmtsmo26908218.joinVoices([smo269082v0]);
const fmtsmo27148818 = new VF.Formatter();
//
// voices and notes for stave 6 18
const smo271488v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo271488v0ar = [];
const smo271472 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo271472'] = smo271472;
smo271472.setAttribute('id', 'smo271472');
smo271488v0ar.push(smo271472);
smo271488v0.addTickables(smo271488v0ar)
fmtsmo27148818.joinVoices([smo271488v0]);
const fmtsmo27381518 = new VF.Formatter();
//
// voices and notes for stave 7 18
const smo273815v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo273815v0ar = [];
const smo273799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo273799'] = smo273799;
smo273799.setAttribute('id', 'smo273799');
smo273815v0ar.push(smo273799);
smo273815v0.addTickables(smo273815v0ar)
fmtsmo27381518.joinVoices([smo273815v0]);
const fmtsmo27616518 = new VF.Formatter();
//
// voices and notes for stave 8 18
const smo276165v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo276165v0ar = [];
const smo276149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo276149'] = smo276149;
smo276149.setAttribute('id', 'smo276149');
smo276165v0ar.push(smo276149);
smo276165v0.addTickables(smo276165v0ar)
fmtsmo27616518.joinVoices([smo276165v0]);
const fmtsmo27858718 = new VF.Formatter();
//
// voices and notes for stave 9 18
const smo278587v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo278587v0ar = [];
const smo278571 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo278571'] = smo278571;
smo278571.setAttribute('id', 'smo278571');
smo278587v0ar.push(smo278571);
smo278587v0.addTickables(smo278587v0ar)
fmtsmo27858718.joinVoices([smo278587v0]);
const fmtsmo28096018 = new VF.Formatter();
//
// voices and notes for stave 10 18
const smo280960v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo280960v0ar = [];
const smo280944 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo280944'] = smo280944;
smo280944.setAttribute('id', 'smo280944');
smo280960v0ar.push(smo280944);
smo280960v0.addTickables(smo280960v0ar)
fmtsmo28096018.joinVoices([smo280960v0]);
const fmtsmo28330618 = new VF.Formatter();
//
// voices and notes for stave 11 18
const smo283306v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo283306v0ar = [];
const smo283290 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo283290'] = smo283290;
smo283290.setAttribute('id', 'smo283290');
smo283306v0ar.push(smo283290);
smo283306v0.addTickables(smo283306v0ar)
fmtsmo28330618.joinVoices([smo283306v0]);
const fmtsmo28563418 = new VF.Formatter();
//
// voices and notes for stave 12 18
const smo285634v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo285634v0ar = [];
const smo285618 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo285618'] = smo285618;
smo285618.setAttribute('id', 'smo285618');
smo285634v0ar.push(smo285618);
smo285634v0.addTickables(smo285634v0ar)
fmtsmo28563418.joinVoices([smo285634v0]);
const fmtsmo28796818 = new VF.Formatter();
//
// voices and notes for stave 13 18
const smo287968v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo287968v0ar = [];
const smo287952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo287952'] = smo287952;
smo287952.setAttribute('id', 'smo287952');
smo287968v0ar.push(smo287952);
smo287968v0.addTickables(smo287968v0ar)
fmtsmo28796818.joinVoices([smo287968v0]);
const fmtsmo29039418 = new VF.Formatter();
//
// voices and notes for stave 14 18
const smo290394v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo290394v0ar = [];
const smo290378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo290378'] = smo290378;
smo290378.setAttribute('id', 'smo290378');
smo290394v0ar.push(smo290378);
smo290394v0.addTickables(smo290394v0ar)
fmtsmo29039418.joinVoices([smo290394v0]);
const fmtsmo29291618 = new VF.Formatter();
//
// voices and notes for stave 15 18
const smo292916v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo292916v0ar = [];
const smo292898 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo292898'] = smo292898;
smo292898.setAttribute('id', 'smo292898');
smo292916v0ar.push(smo292898);
const smo292899 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo292899'] = smo292899;
smo292899.setAttribute('id', 'smo292899');
smo292916v0ar.push(smo292899);
const smo292900 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo292900'] = smo292900;
smo292900.setAttribute('id', 'smo292900');
smo292916v0ar.push(smo292900);
smo292916v0.addTickables(smo292916v0ar)
fmtsmo29291618.joinVoices([smo292916v0]);
const fmtsmo29537918 = new VF.Formatter();
//
// voices and notes for stave 16 18
const smo295379v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo295379v0ar = [];
const smo295358 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295358'] = smo295358;
smo295358.setAttribute('id', 'smo295358');
const smo2953580acc = new VF.Accidental('n');
smo295358.addModifier(smo2953580acc, 0);
smo295379v0ar.push(smo295358);
const smo295359 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295359'] = smo295359;
smo295359.setAttribute('id', 'smo295359');
smo295379v0ar.push(smo295359);
const smo295360 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo295360'] = smo295360;
smo295360.setAttribute('id', 'smo295360');
smo295379v0ar.push(smo295360);
const smo295361 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295361'] = smo295361;
smo295361.setAttribute('id', 'smo295361');
smo295379v0ar.push(smo295361);
const smo295362 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295362'] = smo295362;
smo295362.setAttribute('id', 'smo295362');
smo295379v0ar.push(smo295362);
const smo295363 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295363'] = smo295363;
smo295363.setAttribute('id', 'smo295363');
smo295379v0ar.push(smo295363);
smo295379v0.addTickables(smo295379v0ar)
fmtsmo29537918.joinVoices([smo295379v0]);
// create beam groups and tuplets for format grp smo297611 before formatting
 
// formatting measures in staff group smo297611
fmtsmo25720718.format([smo257207v0,smo259634v0,smo262050v0,smo264424v0,smo266775v0], 174);
const stavesmo257207 = new VF.Stave(1632, 183.2253035909339, 188);
stavesmo257207.setAttribute('id', 'stavesmo257207');
stavesmo257207.setBegBarType(VF.Barline.type.NONE);
stavesmo257207.setContext(context);
stavesmo257207.draw();
smo257207v0.draw(context, stavesmo257207);
const stavesmo259634 = new VF.Stave(1632, 288.2253035909339, 188);
stavesmo259634.setAttribute('id', 'stavesmo259634');
stavesmo259634.setBegBarType(VF.Barline.type.NONE);
stavesmo259634.setContext(context);
stavesmo259634.draw();
smo259634v0.draw(context, stavesmo259634);
const stavesmo262050 = new VF.Stave(1632, 379.2253035909339, 188);
stavesmo262050.setAttribute('id', 'stavesmo262050');
stavesmo262050.setBegBarType(VF.Barline.type.NONE);
stavesmo262050.setContext(context);
stavesmo262050.draw();
smo262050v0.draw(context, stavesmo262050);
const stavesmo264424 = new VF.Stave(1632, 479.2253035909339, 188);
stavesmo264424.setAttribute('id', 'stavesmo264424');
stavesmo264424.setBegBarType(VF.Barline.type.NONE);
stavesmo264424.setContext(context);
stavesmo264424.draw();
smo264424v0.draw(context, stavesmo264424);
const stavesmo266775 = new VF.Stave(1632, 549.2253035909339, 188);
stavesmo266775.setAttribute('id', 'stavesmo266775');
stavesmo266775.setBegBarType(VF.Barline.type.NONE);
stavesmo266775.setContext(context);
stavesmo266775.draw();
smo266775v0.draw(context, stavesmo266775);
// create beam groups and tuplets for format grp smo297613 before formatting
 
// formatting measures in staff group smo297613
fmtsmo26908218.format([smo269082v0,smo271488v0,smo273815v0,smo276165v0], 174);
const stavesmo269082 = new VF.Stave(1632, 630.2253035909339, 188);
stavesmo269082.setAttribute('id', 'stavesmo269082');
stavesmo269082.setBegBarType(VF.Barline.type.NONE);
stavesmo269082.setContext(context);
stavesmo269082.draw();
smo269082v0.draw(context, stavesmo269082);
const stavesmo271488 = new VF.Stave(1632, 700.2253035909339, 188);
stavesmo271488.setAttribute('id', 'stavesmo271488');
stavesmo271488.setBegBarType(VF.Barline.type.NONE);
stavesmo271488.setContext(context);
stavesmo271488.draw();
smo271488v0.draw(context, stavesmo271488);
const stavesmo273815 = new VF.Stave(1632, 761.2253035909339, 188);
stavesmo273815.setAttribute('id', 'stavesmo273815');
stavesmo273815.setBegBarType(VF.Barline.type.NONE);
stavesmo273815.setContext(context);
stavesmo273815.draw();
smo273815v0.draw(context, stavesmo273815);
const stavesmo276165 = new VF.Stave(1632, 831.2253035909339, 188);
stavesmo276165.setAttribute('id', 'stavesmo276165');
stavesmo276165.setBegBarType(VF.Barline.type.NONE);
stavesmo276165.setContext(context);
stavesmo276165.draw();
smo276165v0.draw(context, stavesmo276165);
// create beam groups and tuplets for format grp smo297615 before formatting
 
// formatting measures in staff group smo297615
fmtsmo27858718.format([smo278587v0,smo280960v0,smo283306v0,smo285634v0], 174);
const stavesmo278587 = new VF.Stave(1632, 936.2253035909339, 188);
stavesmo278587.setAttribute('id', 'stavesmo278587');
stavesmo278587.setBegBarType(VF.Barline.type.NONE);
stavesmo278587.setContext(context);
stavesmo278587.draw();
smo278587v0.draw(context, stavesmo278587);
const stavesmo280960 = new VF.Stave(1632, 1023.2253035909339, 188);
stavesmo280960.setAttribute('id', 'stavesmo280960');
stavesmo280960.setBegBarType(VF.Barline.type.NONE);
stavesmo280960.setContext(context);
stavesmo280960.draw();
smo280960v0.draw(context, stavesmo280960);
const stavesmo283306 = new VF.Stave(1632, 1128.225303590934, 188);
stavesmo283306.setAttribute('id', 'stavesmo283306');
stavesmo283306.setBegBarType(VF.Barline.type.NONE);
stavesmo283306.setContext(context);
stavesmo283306.draw();
smo283306v0.draw(context, stavesmo283306);
const stavesmo285634 = new VF.Stave(1632, 1213.225303590934, 188);
stavesmo285634.setAttribute('id', 'stavesmo285634');
stavesmo285634.setBegBarType(VF.Barline.type.NONE);
stavesmo285634.setContext(context);
stavesmo285634.draw();
smo285634v0.draw(context, stavesmo285634);
// create beam groups and tuplets for format grp smo290066 before formatting
 
// formatting measures in staff group smo290066
fmtsmo28796818.format([smo287968v0], 174);
const stavesmo287968 = new VF.Stave(1632, 1290.225303590934, 188);
stavesmo287968.setAttribute('id', 'stavesmo287968');
stavesmo287968.setBegBarType(VF.Barline.type.NONE);
stavesmo287968.setContext(context);
stavesmo287968.draw();
smo287968v0.draw(context, stavesmo287968);
// create beam groups and tuplets for format grp smo292534 before formatting
 
// formatting measures in staff group smo292534
fmtsmo29039418.format([smo290394v0], 174);
const stavesmo290394 = new VF.Stave(1632, 1373.225303590934, 188);
stavesmo290394.setAttribute('id', 'stavesmo290394');
stavesmo290394.setBegBarType(VF.Barline.type.NONE);
stavesmo290394.setContext(context);
stavesmo290394.draw();
smo290394v0.draw(context, stavesmo290394);
// create beam groups and tuplets for format grp smo294892 before formatting
 
// formatting measures in staff group smo294892
fmtsmo29291618.format([smo292916v0], 174);
const stavesmo292916 = new VF.Stave(1632, 1478.225303590934, 188);
stavesmo292916.setAttribute('id', 'stavesmo292916');
stavesmo292916.setBegBarType(VF.Barline.type.NONE);
stavesmo292916.setContext(context);
stavesmo292916.draw();
smo292916v0.draw(context, stavesmo292916);
// create beam groups and tuplets for format grp smo297605 before formatting
const dirsmo364042 = smo295358.getStemDirection();
smo295358.setStemDirection(dirsmo364042);
smo295359.setStemDirection(dirsmo364042);
const smo364042 = new VF.Beam([smo295358,smo295359]);
 
// formatting measures in staff group smo297605
fmtsmo29537918.format([smo295379v0], 174);
const stavesmo295379 = new VF.Stave(1632, 1555.225303590934, 188);
stavesmo295379.setAttribute('id', 'stavesmo295379');
stavesmo295379.setBegBarType(VF.Barline.type.NONE);
stavesmo295379.setContext(context);
stavesmo295379.draw();
smo295379v0.draw(context, stavesmo295379);
smo364042.setContext(context);
smo364042.draw();
const fmtsmo25722419 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo257224v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo257224v0ar = [];
const smo257208 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo257208'] = smo257208;
smo257208.setAttribute('id', 'smo257208');
smo257224v0ar.push(smo257208);
smo257224v0.addTickables(smo257224v0ar)
fmtsmo25722419.joinVoices([smo257224v0]);
const fmtsmo25965119 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo259651v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo259651v0ar = [];
const smo259635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo259635'] = smo259635;
smo259635.setAttribute('id', 'smo259635');
smo259651v0ar.push(smo259635);
smo259651v0.addTickables(smo259651v0ar)
fmtsmo25965119.joinVoices([smo259651v0]);
const fmtsmo26206719 = new VF.Formatter();
//
// voices and notes for stave 2 19
const smo262067v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo262067v0ar = [];
const smo262051 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo262051'] = smo262051;
smo262051.setAttribute('id', 'smo262051');
smo262067v0ar.push(smo262051);
smo262067v0.addTickables(smo262067v0ar)
fmtsmo26206719.joinVoices([smo262067v0]);
const fmtsmo26444119 = new VF.Formatter();
//
// voices and notes for stave 3 19
const smo264441v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo264441v0ar = [];
const smo264425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo264425'] = smo264425;
smo264425.setAttribute('id', 'smo264425');
smo264441v0ar.push(smo264425);
smo264441v0.addTickables(smo264441v0ar)
fmtsmo26444119.joinVoices([smo264441v0]);
const fmtsmo26679219 = new VF.Formatter();
//
// voices and notes for stave 4 19
const smo266792v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo266792v0ar = [];
const smo266776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo266776'] = smo266776;
smo266776.setAttribute('id', 'smo266776');
smo266792v0ar.push(smo266776);
smo266792v0.addTickables(smo266792v0ar)
fmtsmo26679219.joinVoices([smo266792v0]);
const fmtsmo26909919 = new VF.Formatter();
//
// voices and notes for stave 5 19
const smo269099v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo269099v0ar = [];
const smo269083 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo269083'] = smo269083;
smo269083.setAttribute('id', 'smo269083');
smo269099v0ar.push(smo269083);
smo269099v0.addTickables(smo269099v0ar)
fmtsmo26909919.joinVoices([smo269099v0]);
const fmtsmo27150519 = new VF.Formatter();
//
// voices and notes for stave 6 19
const smo271505v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo271505v0ar = [];
const smo271489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo271489'] = smo271489;
smo271489.setAttribute('id', 'smo271489');
smo271505v0ar.push(smo271489);
smo271505v0.addTickables(smo271505v0ar)
fmtsmo27150519.joinVoices([smo271505v0]);
const fmtsmo27383219 = new VF.Formatter();
//
// voices and notes for stave 7 19
const smo273832v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo273832v0ar = [];
const smo273816 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo273816'] = smo273816;
smo273816.setAttribute('id', 'smo273816');
smo273832v0ar.push(smo273816);
smo273832v0.addTickables(smo273832v0ar)
fmtsmo27383219.joinVoices([smo273832v0]);
const fmtsmo27618219 = new VF.Formatter();
//
// voices and notes for stave 8 19
const smo276182v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo276182v0ar = [];
const smo276166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo276166'] = smo276166;
smo276166.setAttribute('id', 'smo276166');
smo276182v0ar.push(smo276166);
smo276182v0.addTickables(smo276182v0ar)
fmtsmo27618219.joinVoices([smo276182v0]);
const fmtsmo27860419 = new VF.Formatter();
//
// voices and notes for stave 9 19
const smo278604v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo278604v0ar = [];
const smo278588 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo278588'] = smo278588;
smo278588.setAttribute('id', 'smo278588');
smo278604v0ar.push(smo278588);
smo278604v0.addTickables(smo278604v0ar)
fmtsmo27860419.joinVoices([smo278604v0]);
const fmtsmo28097719 = new VF.Formatter();
//
// voices and notes for stave 10 19
const smo280977v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo280977v0ar = [];
const smo280961 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo280961'] = smo280961;
smo280961.setAttribute('id', 'smo280961');
smo280977v0ar.push(smo280961);
smo280977v0.addTickables(smo280977v0ar)
fmtsmo28097719.joinVoices([smo280977v0]);
const fmtsmo28332319 = new VF.Formatter();
//
// voices and notes for stave 11 19
const smo283323v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo283323v0ar = [];
const smo283307 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo283307'] = smo283307;
smo283307.setAttribute('id', 'smo283307');
smo283323v0ar.push(smo283307);
smo283323v0.addTickables(smo283323v0ar)
fmtsmo28332319.joinVoices([smo283323v0]);
const fmtsmo28565119 = new VF.Formatter();
//
// voices and notes for stave 12 19
const smo285651v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo285651v0ar = [];
const smo285635 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo285635'] = smo285635;
smo285635.setAttribute('id', 'smo285635');
smo285651v0ar.push(smo285635);
smo285651v0.addTickables(smo285651v0ar)
fmtsmo28565119.joinVoices([smo285651v0]);
const fmtsmo28798519 = new VF.Formatter();
//
// voices and notes for stave 13 19
const smo287985v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo287985v0ar = [];
const smo287969 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo287969'] = smo287969;
smo287969.setAttribute('id', 'smo287969');
smo287985v0ar.push(smo287969);
smo287985v0.addTickables(smo287985v0ar)
fmtsmo28798519.joinVoices([smo287985v0]);
const fmtsmo29041119 = new VF.Formatter();
//
// voices and notes for stave 14 19
const smo290411v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo290411v0ar = [];
const smo290395 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo290395'] = smo290395;
smo290395.setAttribute('id', 'smo290395');
smo290411v0ar.push(smo290395);
smo290411v0.addTickables(smo290411v0ar)
fmtsmo29041119.joinVoices([smo290411v0]);
const fmtsmo29293519 = new VF.Formatter();
//
// voices and notes for stave 15 19
const smo292935v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo292935v0ar = [];
const smo292917 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo292917'] = smo292917;
smo292917.setAttribute('id', 'smo292917');
smo292935v0ar.push(smo292917);
const smo292918 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo292918'] = smo292918;
smo292918.setAttribute('id', 'smo292918');
smo292935v0ar.push(smo292918);
const smo292919 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo292919'] = smo292919;
smo292919.setAttribute('id', 'smo292919');
smo292935v0ar.push(smo292919);
smo292935v0.addTickables(smo292935v0ar)
fmtsmo29293519.joinVoices([smo292935v0]);
const fmtsmo29539919 = new VF.Formatter();
//
// voices and notes for stave 16 19
const smo295399v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo295399v0ar = [];
const smo295380 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295380'] = smo295380;
smo295380.setAttribute('id', 'smo295380');
const smo2953800acc = new VF.Accidental('n');
smo295380.addModifier(smo2953800acc, 0);
smo295399v0ar.push(smo295380);
const smo295381 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295381'] = smo295381;
smo295381.setAttribute('id', 'smo295381');
smo295399v0ar.push(smo295381);
const smo295382 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295382'] = smo295382;
smo295382.setAttribute('id', 'smo295382');
smo295399v0ar.push(smo295382);
const smo295383 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295383'] = smo295383;
smo295383.setAttribute('id', 'smo295383');
smo295399v0ar.push(smo295383);
smo295399v0.addTickables(smo295399v0ar)
fmtsmo29539919.joinVoices([smo295399v0]);
// create beam groups and tuplets for format grp smo297611 before formatting
 
// formatting measures in staff group smo297611
fmtsmo25722419.format([smo257224v0,smo259651v0,smo262067v0,smo264441v0,smo266792v0], 101);
const stavesmo257224 = new VF.Stave(1820, 183.2253035909339, 115);
stavesmo257224.setAttribute('id', 'stavesmo257224');
stavesmo257224.setBegBarType(VF.Barline.type.NONE);
stavesmo257224.setContext(context);
stavesmo257224.draw();
smo257224v0.draw(context, stavesmo257224);
const stavesmo259651 = new VF.Stave(1820, 288.2253035909339, 115);
stavesmo259651.setAttribute('id', 'stavesmo259651');
stavesmo259651.setBegBarType(VF.Barline.type.NONE);
stavesmo259651.setContext(context);
stavesmo259651.draw();
smo259651v0.draw(context, stavesmo259651);
const stavesmo262067 = new VF.Stave(1820, 379.2253035909339, 115);
stavesmo262067.setAttribute('id', 'stavesmo262067');
stavesmo262067.setBegBarType(VF.Barline.type.NONE);
stavesmo262067.setContext(context);
stavesmo262067.draw();
smo262067v0.draw(context, stavesmo262067);
const stavesmo264441 = new VF.Stave(1820, 479.2253035909339, 115);
stavesmo264441.setAttribute('id', 'stavesmo264441');
stavesmo264441.setBegBarType(VF.Barline.type.NONE);
stavesmo264441.setContext(context);
stavesmo264441.draw();
smo264441v0.draw(context, stavesmo264441);
const stavesmo266792 = new VF.Stave(1820, 549.2253035909339, 115);
stavesmo266792.setAttribute('id', 'stavesmo266792');
stavesmo266792.setBegBarType(VF.Barline.type.NONE);
stavesmo266792.setContext(context);
stavesmo266792.draw();
smo266792v0.draw(context, stavesmo266792);
// create beam groups and tuplets for format grp smo297613 before formatting
 
// formatting measures in staff group smo297613
fmtsmo26909919.format([smo269099v0,smo271505v0,smo273832v0,smo276182v0], 101);
const stavesmo269099 = new VF.Stave(1820, 630.2253035909339, 115);
stavesmo269099.setAttribute('id', 'stavesmo269099');
stavesmo269099.setBegBarType(VF.Barline.type.NONE);
stavesmo269099.setContext(context);
stavesmo269099.draw();
smo269099v0.draw(context, stavesmo269099);
const stavesmo271505 = new VF.Stave(1820, 700.2253035909339, 115);
stavesmo271505.setAttribute('id', 'stavesmo271505');
stavesmo271505.setBegBarType(VF.Barline.type.NONE);
stavesmo271505.setContext(context);
stavesmo271505.draw();
smo271505v0.draw(context, stavesmo271505);
const stavesmo273832 = new VF.Stave(1820, 761.2253035909339, 115);
stavesmo273832.setAttribute('id', 'stavesmo273832');
stavesmo273832.setBegBarType(VF.Barline.type.NONE);
stavesmo273832.setContext(context);
stavesmo273832.draw();
smo273832v0.draw(context, stavesmo273832);
const stavesmo276182 = new VF.Stave(1820, 831.2253035909339, 115);
stavesmo276182.setAttribute('id', 'stavesmo276182');
stavesmo276182.setBegBarType(VF.Barline.type.NONE);
stavesmo276182.setContext(context);
stavesmo276182.draw();
smo276182v0.draw(context, stavesmo276182);
// create beam groups and tuplets for format grp smo297615 before formatting
 
// formatting measures in staff group smo297615
fmtsmo27860419.format([smo278604v0,smo280977v0,smo283323v0,smo285651v0], 101);
const stavesmo278604 = new VF.Stave(1820, 936.2253035909339, 115);
stavesmo278604.setAttribute('id', 'stavesmo278604');
stavesmo278604.setBegBarType(VF.Barline.type.NONE);
stavesmo278604.setContext(context);
stavesmo278604.draw();
smo278604v0.draw(context, stavesmo278604);
const stavesmo280977 = new VF.Stave(1820, 1023.2253035909339, 115);
stavesmo280977.setAttribute('id', 'stavesmo280977');
stavesmo280977.setBegBarType(VF.Barline.type.NONE);
stavesmo280977.setContext(context);
stavesmo280977.draw();
smo280977v0.draw(context, stavesmo280977);
const stavesmo283323 = new VF.Stave(1820, 1128.225303590934, 115);
stavesmo283323.setAttribute('id', 'stavesmo283323');
stavesmo283323.setBegBarType(VF.Barline.type.NONE);
stavesmo283323.setContext(context);
stavesmo283323.draw();
smo283323v0.draw(context, stavesmo283323);
const stavesmo285651 = new VF.Stave(1820, 1213.225303590934, 115);
stavesmo285651.setAttribute('id', 'stavesmo285651');
stavesmo285651.setBegBarType(VF.Barline.type.NONE);
stavesmo285651.setContext(context);
stavesmo285651.draw();
smo285651v0.draw(context, stavesmo285651);
// create beam groups and tuplets for format grp smo290066 before formatting
 
// formatting measures in staff group smo290066
fmtsmo28798519.format([smo287985v0], 101);
const stavesmo287985 = new VF.Stave(1820, 1290.225303590934, 115);
stavesmo287985.setAttribute('id', 'stavesmo287985');
stavesmo287985.setBegBarType(VF.Barline.type.NONE);
stavesmo287985.setContext(context);
stavesmo287985.draw();
smo287985v0.draw(context, stavesmo287985);
// create beam groups and tuplets for format grp smo292534 before formatting
 
// formatting measures in staff group smo292534
fmtsmo29041119.format([smo290411v0], 101);
const stavesmo290411 = new VF.Stave(1820, 1373.225303590934, 115);
stavesmo290411.setAttribute('id', 'stavesmo290411');
stavesmo290411.setBegBarType(VF.Barline.type.NONE);
stavesmo290411.setContext(context);
stavesmo290411.draw();
smo290411v0.draw(context, stavesmo290411);
// create beam groups and tuplets for format grp smo294892 before formatting
 
// formatting measures in staff group smo294892
fmtsmo29293519.format([smo292935v0], 101);
const stavesmo292935 = new VF.Stave(1820, 1478.225303590934, 115);
stavesmo292935.setAttribute('id', 'stavesmo292935');
stavesmo292935.setBegBarType(VF.Barline.type.NONE);
stavesmo292935.setContext(context);
stavesmo292935.draw();
smo292935v0.draw(context, stavesmo292935);
// create beam groups and tuplets for format grp smo297605 before formatting
 
// formatting measures in staff group smo297605
fmtsmo29539919.format([smo295399v0], 101);
const stavesmo295399 = new VF.Stave(1820, 1555.225303590934, 115);
stavesmo295399.setAttribute('id', 'stavesmo295399');
stavesmo295399.setBegBarType(VF.Barline.type.NONE);
stavesmo295399.setContext(context);
stavesmo295399.draw();
smo295399v0.draw(context, stavesmo295399);
const fmtsmo25724120 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo257241v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo257241v0ar = [];
const smo257225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo257225'] = smo257225;
smo257225.setAttribute('id', 'smo257225');
smo257241v0ar.push(smo257225);
smo257241v0.addTickables(smo257241v0ar)
fmtsmo25724120.joinVoices([smo257241v0]);
const fmtsmo25966820 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo259668v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo259668v0ar = [];
const smo259652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo259652'] = smo259652;
smo259652.setAttribute('id', 'smo259652');
smo259668v0ar.push(smo259652);
smo259668v0.addTickables(smo259668v0ar)
fmtsmo25966820.joinVoices([smo259668v0]);
const fmtsmo26208420 = new VF.Formatter();
//
// voices and notes for stave 2 20
const smo262084v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo262084v0ar = [];
const smo262068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo262068'] = smo262068;
smo262068.setAttribute('id', 'smo262068');
smo262084v0ar.push(smo262068);
smo262084v0.addTickables(smo262084v0ar)
fmtsmo26208420.joinVoices([smo262084v0]);
const fmtsmo26445820 = new VF.Formatter();
//
// voices and notes for stave 3 20
const smo264458v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo264458v0ar = [];
const smo264442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo264442'] = smo264442;
smo264442.setAttribute('id', 'smo264442');
smo264458v0ar.push(smo264442);
smo264458v0.addTickables(smo264458v0ar)
fmtsmo26445820.joinVoices([smo264458v0]);
const fmtsmo26680920 = new VF.Formatter();
//
// voices and notes for stave 4 20
const smo266809v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo266809v0ar = [];
const smo266793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo266793'] = smo266793;
smo266793.setAttribute('id', 'smo266793');
smo266809v0ar.push(smo266793);
smo266809v0.addTickables(smo266809v0ar)
fmtsmo26680920.joinVoices([smo266809v0]);
const fmtsmo26911620 = new VF.Formatter();
//
// voices and notes for stave 5 20
const smo269116v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo269116v0ar = [];
const smo269100 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo269100'] = smo269100;
smo269100.setAttribute('id', 'smo269100');
smo269116v0ar.push(smo269100);
smo269116v0.addTickables(smo269116v0ar)
fmtsmo26911620.joinVoices([smo269116v0]);
const fmtsmo27152220 = new VF.Formatter();
//
// voices and notes for stave 6 20
const smo271522v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo271522v0ar = [];
const smo271506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo271506'] = smo271506;
smo271506.setAttribute('id', 'smo271506');
smo271522v0ar.push(smo271506);
smo271522v0.addTickables(smo271522v0ar)
fmtsmo27152220.joinVoices([smo271522v0]);
const fmtsmo27384920 = new VF.Formatter();
//
// voices and notes for stave 7 20
const smo273849v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo273849v0ar = [];
const smo273833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo273833'] = smo273833;
smo273833.setAttribute('id', 'smo273833');
smo273849v0ar.push(smo273833);
smo273849v0.addTickables(smo273849v0ar)
fmtsmo27384920.joinVoices([smo273849v0]);
const fmtsmo27619920 = new VF.Formatter();
//
// voices and notes for stave 8 20
const smo276199v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo276199v0ar = [];
const smo276183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo276183'] = smo276183;
smo276183.setAttribute('id', 'smo276183');
smo276199v0ar.push(smo276183);
smo276199v0.addTickables(smo276199v0ar)
fmtsmo27619920.joinVoices([smo276199v0]);
const fmtsmo27862120 = new VF.Formatter();
//
// voices and notes for stave 9 20
const smo278621v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo278621v0ar = [];
const smo278605 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo278605'] = smo278605;
smo278605.setAttribute('id', 'smo278605');
smo278621v0ar.push(smo278605);
smo278621v0.addTickables(smo278621v0ar)
fmtsmo27862120.joinVoices([smo278621v0]);
const fmtsmo28099420 = new VF.Formatter();
//
// voices and notes for stave 10 20
const smo280994v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo280994v0ar = [];
const smo280978 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo280978'] = smo280978;
smo280978.setAttribute('id', 'smo280978');
smo280994v0ar.push(smo280978);
smo280994v0.addTickables(smo280994v0ar)
fmtsmo28099420.joinVoices([smo280994v0]);
const fmtsmo28334020 = new VF.Formatter();
//
// voices and notes for stave 11 20
const smo283340v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo283340v0ar = [];
const smo283324 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo283324'] = smo283324;
smo283324.setAttribute('id', 'smo283324');
smo283340v0ar.push(smo283324);
smo283340v0.addTickables(smo283340v0ar)
fmtsmo28334020.joinVoices([smo283340v0]);
const fmtsmo28566820 = new VF.Formatter();
//
// voices and notes for stave 12 20
const smo285668v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo285668v0ar = [];
const smo285652 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo285652'] = smo285652;
smo285652.setAttribute('id', 'smo285652');
smo285668v0ar.push(smo285652);
smo285668v0.addTickables(smo285668v0ar)
fmtsmo28566820.joinVoices([smo285668v0]);
const fmtsmo28800220 = new VF.Formatter();
//
// voices and notes for stave 13 20
const smo288002v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo288002v0ar = [];
const smo287986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo287986'] = smo287986;
smo287986.setAttribute('id', 'smo287986');
smo288002v0ar.push(smo287986);
smo288002v0.addTickables(smo288002v0ar)
fmtsmo28800220.joinVoices([smo288002v0]);
const fmtsmo29042820 = new VF.Formatter();
//
// voices and notes for stave 14 20
const smo290428v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo290428v0ar = [];
const smo290412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo290412'] = smo290412;
smo290412.setAttribute('id', 'smo290412');
smo290428v0ar.push(smo290412);
smo290428v0.addTickables(smo290428v0ar)
fmtsmo29042820.joinVoices([smo290428v0]);
const fmtsmo29295420 = new VF.Formatter();
//
// voices and notes for stave 15 20
const smo292954v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo292954v0ar = [];
const smo292936 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo292936'] = smo292936;
smo292936.setAttribute('id', 'smo292936');
smo292954v0ar.push(smo292936);
const smo292937 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo292937'] = smo292937;
smo292937.setAttribute('id', 'smo292937');
smo292954v0ar.push(smo292937);
const smo292938 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo292938'] = smo292938;
smo292938.setAttribute('id', 'smo292938');
smo292954v0ar.push(smo292938);
smo292954v0.addTickables(smo292954v0ar)
fmtsmo29295420.joinVoices([smo292954v0]);
const fmtsmo29542120 = new VF.Formatter();
//
// voices and notes for stave 16 20
const smo295421v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo295421v0ar = [];
const smo295400 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295400'] = smo295400;
smo295400.setAttribute('id', 'smo295400');
const smo2954000acc = new VF.Accidental('n');
smo295400.addModifier(smo2954000acc, 0);
smo295421v0ar.push(smo295400);
const smo295401 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295401'] = smo295401;
smo295401.setAttribute('id', 'smo295401');
smo295421v0ar.push(smo295401);
const smo295402 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo295402'] = smo295402;
smo295402.setAttribute('id', 'smo295402');
smo295421v0ar.push(smo295402);
const smo295403 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295403'] = smo295403;
smo295403.setAttribute('id', 'smo295403');
smo295421v0ar.push(smo295403);
const smo295404 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295404'] = smo295404;
smo295404.setAttribute('id', 'smo295404');
smo295421v0ar.push(smo295404);
const smo295405 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295405'] = smo295405;
smo295405.setAttribute('id', 'smo295405');
smo295421v0ar.push(smo295405);
smo295421v0.addTickables(smo295421v0ar)
fmtsmo29542120.joinVoices([smo295421v0]);
// create beam groups and tuplets for format grp smo297611 before formatting
 
// formatting measures in staff group smo297611
fmtsmo25724120.format([smo257241v0,smo259668v0,smo262084v0,smo264458v0,smo266809v0], 166);
const stavesmo257241 = new VF.Stave(1935, 183.2253035909339, 181);
stavesmo257241.setAttribute('id', 'stavesmo257241');
stavesmo257241.setBegBarType(VF.Barline.type.NONE);
stavesmo257241.setEndBarType(2);
stavesmo257241.setContext(context);
stavesmo257241.draw();
smo257241v0.draw(context, stavesmo257241);
const stavesmo259668 = new VF.Stave(1935, 288.2253035909339, 181);
stavesmo259668.setAttribute('id', 'stavesmo259668');
stavesmo259668.setBegBarType(VF.Barline.type.NONE);
stavesmo259668.setEndBarType(2);
stavesmo259668.setContext(context);
stavesmo259668.draw();
smo259668v0.draw(context, stavesmo259668);
const stavesmo262084 = new VF.Stave(1935, 379.2253035909339, 181);
stavesmo262084.setAttribute('id', 'stavesmo262084');
stavesmo262084.setBegBarType(VF.Barline.type.NONE);
stavesmo262084.setEndBarType(2);
stavesmo262084.setContext(context);
stavesmo262084.draw();
smo262084v0.draw(context, stavesmo262084);
const stavesmo264458 = new VF.Stave(1935, 479.2253035909339, 181);
stavesmo264458.setAttribute('id', 'stavesmo264458');
stavesmo264458.setBegBarType(VF.Barline.type.NONE);
stavesmo264458.setEndBarType(2);
stavesmo264458.setContext(context);
stavesmo264458.draw();
smo264458v0.draw(context, stavesmo264458);
const stavesmo266809 = new VF.Stave(1935, 549.2253035909339, 181);
stavesmo266809.setAttribute('id', 'stavesmo266809');
stavesmo266809.setBegBarType(VF.Barline.type.NONE);
stavesmo266809.setEndBarType(2);
stavesmo266809.setContext(context);
stavesmo266809.draw();
smo266809v0.draw(context, stavesmo266809);
// create beam groups and tuplets for format grp smo297613 before formatting
 
// formatting measures in staff group smo297613
fmtsmo26911620.format([smo269116v0,smo271522v0,smo273849v0,smo276199v0], 166);
const stavesmo269116 = new VF.Stave(1935, 630.2253035909339, 181);
stavesmo269116.setAttribute('id', 'stavesmo269116');
stavesmo269116.setBegBarType(VF.Barline.type.NONE);
stavesmo269116.setEndBarType(2);
stavesmo269116.setContext(context);
stavesmo269116.draw();
smo269116v0.draw(context, stavesmo269116);
const stavesmo271522 = new VF.Stave(1935, 700.2253035909339, 181);
stavesmo271522.setAttribute('id', 'stavesmo271522');
stavesmo271522.setBegBarType(VF.Barline.type.NONE);
stavesmo271522.setEndBarType(2);
stavesmo271522.setContext(context);
stavesmo271522.draw();
smo271522v0.draw(context, stavesmo271522);
const stavesmo273849 = new VF.Stave(1935, 761.2253035909339, 181);
stavesmo273849.setAttribute('id', 'stavesmo273849');
stavesmo273849.setBegBarType(VF.Barline.type.NONE);
stavesmo273849.setEndBarType(2);
stavesmo273849.setContext(context);
stavesmo273849.draw();
smo273849v0.draw(context, stavesmo273849);
const stavesmo276199 = new VF.Stave(1935, 831.2253035909339, 181);
stavesmo276199.setAttribute('id', 'stavesmo276199');
stavesmo276199.setBegBarType(VF.Barline.type.NONE);
stavesmo276199.setEndBarType(2);
stavesmo276199.setContext(context);
stavesmo276199.draw();
smo276199v0.draw(context, stavesmo276199);
// create beam groups and tuplets for format grp smo297615 before formatting
 
// formatting measures in staff group smo297615
fmtsmo27862120.format([smo278621v0,smo280994v0,smo283340v0,smo285668v0], 166);
const stavesmo278621 = new VF.Stave(1935, 936.2253035909339, 181);
stavesmo278621.setAttribute('id', 'stavesmo278621');
stavesmo278621.setBegBarType(VF.Barline.type.NONE);
stavesmo278621.setEndBarType(2);
stavesmo278621.setContext(context);
stavesmo278621.draw();
smo278621v0.draw(context, stavesmo278621);
const stavesmo280994 = new VF.Stave(1935, 1023.2253035909339, 181);
stavesmo280994.setAttribute('id', 'stavesmo280994');
stavesmo280994.setBegBarType(VF.Barline.type.NONE);
stavesmo280994.setEndBarType(2);
stavesmo280994.setContext(context);
stavesmo280994.draw();
smo280994v0.draw(context, stavesmo280994);
const stavesmo283340 = new VF.Stave(1935, 1128.225303590934, 181);
stavesmo283340.setAttribute('id', 'stavesmo283340');
stavesmo283340.setBegBarType(VF.Barline.type.NONE);
stavesmo283340.setEndBarType(2);
stavesmo283340.setContext(context);
stavesmo283340.draw();
smo283340v0.draw(context, stavesmo283340);
const stavesmo285668 = new VF.Stave(1935, 1213.225303590934, 181);
stavesmo285668.setAttribute('id', 'stavesmo285668');
stavesmo285668.setBegBarType(VF.Barline.type.NONE);
stavesmo285668.setEndBarType(2);
stavesmo285668.setContext(context);
stavesmo285668.draw();
smo285668v0.draw(context, stavesmo285668);
// create beam groups and tuplets for format grp smo290066 before formatting
 
// formatting measures in staff group smo290066
fmtsmo28800220.format([smo288002v0], 166);
const stavesmo288002 = new VF.Stave(1935, 1290.225303590934, 181);
stavesmo288002.setAttribute('id', 'stavesmo288002');
stavesmo288002.setBegBarType(VF.Barline.type.NONE);
stavesmo288002.setEndBarType(2);
stavesmo288002.setContext(context);
stavesmo288002.draw();
smo288002v0.draw(context, stavesmo288002);
// create beam groups and tuplets for format grp smo292534 before formatting
 
// formatting measures in staff group smo292534
fmtsmo29042820.format([smo290428v0], 166);
const stavesmo290428 = new VF.Stave(1935, 1373.225303590934, 181);
stavesmo290428.setAttribute('id', 'stavesmo290428');
stavesmo290428.setBegBarType(VF.Barline.type.NONE);
stavesmo290428.setEndBarType(2);
stavesmo290428.setContext(context);
stavesmo290428.draw();
smo290428v0.draw(context, stavesmo290428);
// create beam groups and tuplets for format grp smo294892 before formatting
 
// formatting measures in staff group smo294892
fmtsmo29295420.format([smo292954v0], 166);
const stavesmo292954 = new VF.Stave(1935, 1478.225303590934, 181);
stavesmo292954.setAttribute('id', 'stavesmo292954');
stavesmo292954.setBegBarType(VF.Barline.type.NONE);
stavesmo292954.setEndBarType(2);
stavesmo292954.setContext(context);
stavesmo292954.draw();
smo292954v0.draw(context, stavesmo292954);
// create beam groups and tuplets for format grp smo297605 before formatting
const dirsmo364095 = smo295400.getStemDirection();
smo295400.setStemDirection(dirsmo364095);
smo295401.setStemDirection(dirsmo364095);
const smo364095 = new VF.Beam([smo295400,smo295401]);
 
// formatting measures in staff group smo297605
fmtsmo29542120.format([smo295421v0], 166);
const stavesmo295421 = new VF.Stave(1935, 1555.225303590934, 181);
stavesmo295421.setAttribute('id', 'stavesmo295421');
stavesmo295421.setBegBarType(VF.Barline.type.NONE);
stavesmo295421.setEndBarType(2);
stavesmo295421.setContext(context);
stavesmo295421.draw();
smo295421v0.draw(context, stavesmo295421);
smo364095.setContext(context);
smo364095.draw();
const fmtsmo25726321 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo257263v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo257263v0ar = [];
const smo257242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo257242'] = smo257242;
smo257242.setAttribute('id', 'smo257242');
smo257242.addModifier(new VF.Dot(), 0);
smo257263v0ar.push(smo257242);
const smo257244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo257244'] = smo257244;
smo257244.setAttribute('id', 'smo257244');
smo257263v0ar.push(smo257244);
const smo257245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo257245'] = smo257245;
smo257245.setAttribute('id', 'smo257245');
smo257263v0ar.push(smo257245);
const smo257246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo257246'] = smo257246;
smo257246.setAttribute('id', 'smo257246');
smo257263v0ar.push(smo257246);
smo257263v0.addTickables(smo257263v0ar)
fmtsmo25726321.joinVoices([smo257263v0]);
const fmtsmo25969021 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo259690v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo259690v0ar = [];
const smo259669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo259669'] = smo259669;
smo259669.setAttribute('id', 'smo259669');
smo259669.addModifier(new VF.Dot(), 0);
smo259690v0ar.push(smo259669);
const smo259671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo259671'] = smo259671;
smo259671.setAttribute('id', 'smo259671');
smo259690v0ar.push(smo259671);
const smo259672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo259672'] = smo259672;
smo259672.setAttribute('id', 'smo259672');
smo259690v0ar.push(smo259672);
const smo259673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo259673'] = smo259673;
smo259673.setAttribute('id', 'smo259673');
smo259690v0ar.push(smo259673);
smo259690v0.addTickables(smo259690v0ar)
fmtsmo25969021.joinVoices([smo259690v0]);
const fmtsmo26210621 = new VF.Formatter();
//
// voices and notes for stave 2 21
const smo262106v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo262106v0ar = [];
const smo262085 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo262085'] = smo262085;
smo262085.setAttribute('id', 'smo262085');
smo262085.addModifier(new VF.Dot(), 0);
smo262106v0ar.push(smo262085);
const smo262087 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo262087'] = smo262087;
smo262087.setAttribute('id', 'smo262087');
smo262106v0ar.push(smo262087);
const smo262088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo262088'] = smo262088;
smo262088.setAttribute('id', 'smo262088');
smo262106v0ar.push(smo262088);
const smo262089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo262089'] = smo262089;
smo262089.setAttribute('id', 'smo262089');
smo262106v0ar.push(smo262089);
smo262106v0.addTickables(smo262106v0ar)
fmtsmo26210621.joinVoices([smo262106v0]);
const fmtsmo26448021 = new VF.Formatter();
//
// voices and notes for stave 3 21
const smo264480v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo264480v0ar = [];
const smo264459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo264459'] = smo264459;
smo264459.setAttribute('id', 'smo264459');
smo264459.addModifier(new VF.Dot(), 0);
smo264480v0ar.push(smo264459);
const smo264461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo264461'] = smo264461;
smo264461.setAttribute('id', 'smo264461');
smo264480v0ar.push(smo264461);
const smo264462 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo264462'] = smo264462;
smo264462.setAttribute('id', 'smo264462');
smo264480v0ar.push(smo264462);
const smo264463 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo264463'] = smo264463;
smo264463.setAttribute('id', 'smo264463');
smo264480v0ar.push(smo264463);
smo264480v0.addTickables(smo264480v0ar)
fmtsmo26448021.joinVoices([smo264480v0]);
const fmtsmo26682721 = new VF.Formatter();
//
// voices and notes for stave 4 21
const smo266827v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo266827v0ar = [];
const smo266810 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo266810'] = smo266810;
smo266810.setAttribute('id', 'smo266810');
smo266827v0ar.push(smo266810);
smo266827v0.addTickables(smo266827v0ar)
fmtsmo26682721.joinVoices([smo266827v0]);
const fmtsmo26913621 = new VF.Formatter();
//
// voices and notes for stave 5 21
const smo269136v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo269136v0ar = [];
const smo269117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo269117'] = smo269117;
smo269117.setAttribute('id', 'smo269117');
smo269136v0ar.push(smo269117);
const smo269118 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo269118'] = smo269118;
smo269118.setAttribute('id', 'smo269118');
smo269136v0ar.push(smo269118);
const smo269119 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo269119'] = smo269119;
smo269119.setAttribute('id', 'smo269119');
smo269136v0ar.push(smo269119);
smo269136v0.addTickables(smo269136v0ar)
fmtsmo26913621.joinVoices([smo269136v0]);
const fmtsmo27154221 = new VF.Formatter();
//
// voices and notes for stave 6 21
const smo271542v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo271542v0ar = [];
const smo271523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo271523'] = smo271523;
smo271523.setAttribute('id', 'smo271523');
smo271542v0ar.push(smo271523);
const smo271524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo271524'] = smo271524;
smo271524.setAttribute('id', 'smo271524');
smo271542v0ar.push(smo271524);
const smo271525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo271525'] = smo271525;
smo271525.setAttribute('id', 'smo271525');
smo271542v0ar.push(smo271525);
smo271542v0.addTickables(smo271542v0ar)
fmtsmo27154221.joinVoices([smo271542v0]);
const fmtsmo27386921 = new VF.Formatter();
//
// voices and notes for stave 7 21
const smo273869v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo273869v0ar = [];
const smo273850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo273850'] = smo273850;
smo273850.setAttribute('id', 'smo273850');
smo273869v0ar.push(smo273850);
const smo273851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo273851'] = smo273851;
smo273851.setAttribute('id', 'smo273851');
smo273869v0ar.push(smo273851);
const smo273852 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo273852'] = smo273852;
smo273852.setAttribute('id', 'smo273852');
smo273869v0ar.push(smo273852);
smo273869v0.addTickables(smo273869v0ar)
fmtsmo27386921.joinVoices([smo273869v0]);
const fmtsmo27621921 = new VF.Formatter();
//
// voices and notes for stave 8 21
const smo276219v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo276219v0ar = [];
const smo276200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo276200'] = smo276200;
smo276200.setAttribute('id', 'smo276200');
smo276219v0ar.push(smo276200);
const smo276201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo276201'] = smo276201;
smo276201.setAttribute('id', 'smo276201');
smo276219v0ar.push(smo276201);
const smo276202 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo276202'] = smo276202;
smo276202.setAttribute('id', 'smo276202');
smo276219v0ar.push(smo276202);
smo276219v0.addTickables(smo276219v0ar)
fmtsmo27621921.joinVoices([smo276219v0]);
const fmtsmo27863921 = new VF.Formatter();
//
// voices and notes for stave 9 21
const smo278639v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo278639v0ar = [];
const smo278622 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo278622'] = smo278622;
smo278622.setAttribute('id', 'smo278622');
smo278639v0ar.push(smo278622);
smo278639v0.addTickables(smo278639v0ar)
fmtsmo27863921.joinVoices([smo278639v0]);
const fmtsmo28101221 = new VF.Formatter();
//
// voices and notes for stave 10 21
const smo281012v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo281012v0ar = [];
const smo280995 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo280995'] = smo280995;
smo280995.setAttribute('id', 'smo280995');
smo281012v0ar.push(smo280995);
smo281012v0.addTickables(smo281012v0ar)
fmtsmo28101221.joinVoices([smo281012v0]);
const fmtsmo28335821 = new VF.Formatter();
//
// voices and notes for stave 11 21
const smo283358v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo283358v0ar = [];
const smo283341 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo283341'] = smo283341;
smo283341.setAttribute('id', 'smo283341');
smo283358v0ar.push(smo283341);
smo283358v0.addTickables(smo283358v0ar)
fmtsmo28335821.joinVoices([smo283358v0]);
const fmtsmo28568621 = new VF.Formatter();
//
// voices and notes for stave 12 21
const smo285686v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo285686v0ar = [];
const smo285669 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo285669'] = smo285669;
smo285669.setAttribute('id', 'smo285669');
smo285686v0ar.push(smo285669);
smo285686v0.addTickables(smo285686v0ar)
fmtsmo28568621.joinVoices([smo285686v0]);
const fmtsmo28802321 = new VF.Formatter();
//
// voices and notes for stave 13 21
const smo288023v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo288023v0ar = [];
const smo288003 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo288003'] = smo288003;
smo288003.setAttribute('id', 'smo288003');
smo288023v0ar.push(smo288003);
const smo288004 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo288004'] = smo288004;
smo288004.setAttribute('id', 'smo288004');
smo288023v0ar.push(smo288004);
const smo288005 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo288005'] = smo288005;
smo288005.setAttribute('id', 'smo288005');
smo288023v0ar.push(smo288005);
const smo288006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo288006'] = smo288006;
smo288006.setAttribute('id', 'smo288006');
smo288023v0ar.push(smo288006);
smo288023v0.addTickables(smo288023v0ar)
fmtsmo28802321.joinVoices([smo288023v0]);
const fmtsmo29045121 = new VF.Formatter();
//
// voices and notes for stave 14 21
const smo290451v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo290451v0ar = [];
const smo290429 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo290429'] = smo290429;
smo290429.setAttribute('id', 'smo290429');
smo290451v0ar.push(smo290429);
const smo290430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo290430'] = smo290430;
smo290430.setAttribute('id', 'smo290430');
smo290451v0ar.push(smo290430);
const smo290431 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo290431'] = smo290431;
smo290431.setAttribute('id', 'smo290431');
smo290451v0ar.push(smo290431);
const smo290432 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo290432'] = smo290432;
smo290432.setAttribute('id', 'smo290432');
smo290451v0ar.push(smo290432);
const smo290433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo290433'] = smo290433;
smo290433.setAttribute('id', 'smo290433');
smo290451v0ar.push(smo290433);
const smo290434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo290434'] = smo290434;
smo290434.setAttribute('id', 'smo290434');
smo290451v0ar.push(smo290434);
smo290451v0.addTickables(smo290451v0ar)
fmtsmo29045121.joinVoices([smo290451v0]);
const fmtsmo29297421 = new VF.Formatter();
//
// voices and notes for stave 15 21
const smo292974v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo292974v0ar = [];
const smo292955 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo292955'] = smo292955;
smo292955.setAttribute('id', 'smo292955');
smo292974v0ar.push(smo292955);
const smo292956 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo292956'] = smo292956;
smo292956.setAttribute('id', 'smo292956');
smo292974v0ar.push(smo292956);
const smo292957 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo292957'] = smo292957;
smo292957.setAttribute('id', 'smo292957');
smo292974v0ar.push(smo292957);
smo292974v0.addTickables(smo292974v0ar)
fmtsmo29297421.joinVoices([smo292974v0]);
const fmtsmo29544221 = new VF.Formatter();
//
// voices and notes for stave 16 21
const smo295442v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo295442v0ar = [];
const smo295422 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295422'] = smo295422;
smo295422.setAttribute('id', 'smo295422');
const smo2954220acc = new VF.Accidental('n');
smo295422.addModifier(smo2954220acc, 0);
smo295442v0ar.push(smo295422);
const smo295423 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295423'] = smo295423;
smo295423.setAttribute('id', 'smo295423');
smo295442v0ar.push(smo295423);
const smo295424 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295424'] = smo295424;
smo295424.setAttribute('id', 'smo295424');
smo295442v0ar.push(smo295424);
const smo295425 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo295425'] = smo295425;
smo295425.setAttribute('id', 'smo295425');
smo295442v0ar.push(smo295425);
smo295442v0.addTickables(smo295442v0ar)
fmtsmo29544221.joinVoices([smo295442v0]);
// create beam groups and tuplets for format grp smo297611 before formatting
 
// formatting measures in staff group smo297611
fmtsmo25726321.format([smo257263v0,smo259690v0,smo262106v0,smo264480v0,smo266827v0], 157);
const stavesmo257263 = new VF.Stave(2116, 183.2253035909339, 180);
stavesmo257263.setAttribute('id', 'stavesmo257263');
stavesmo257263.setBegBarType(4);
stavesmo257263.setSection('B', 0);
stavesmo257263.setContext(context);
stavesmo257263.draw();
smo257263v0.draw(context, stavesmo257263);
const stavesmo259690 = new VF.Stave(2116, 288.2253035909339, 180);
stavesmo259690.setAttribute('id', 'stavesmo259690');
stavesmo259690.setBegBarType(4);
stavesmo259690.setContext(context);
stavesmo259690.draw();
smo259690v0.draw(context, stavesmo259690);
const stavesmo262106 = new VF.Stave(2116, 379.2253035909339, 180);
stavesmo262106.setAttribute('id', 'stavesmo262106');
stavesmo262106.setBegBarType(4);
stavesmo262106.setContext(context);
stavesmo262106.draw();
smo262106v0.draw(context, stavesmo262106);
const stavesmo264480 = new VF.Stave(2116, 479.2253035909339, 180);
stavesmo264480.setAttribute('id', 'stavesmo264480');
stavesmo264480.setBegBarType(4);
stavesmo264480.setContext(context);
stavesmo264480.draw();
smo264480v0.draw(context, stavesmo264480);
const stavesmo266827 = new VF.Stave(2116, 549.2253035909339, 180);
stavesmo266827.setAttribute('id', 'stavesmo266827');
stavesmo266827.setBegBarType(4);
stavesmo266827.setContext(context);
stavesmo266827.draw();
smo266827v0.draw(context, stavesmo266827);
// create beam groups and tuplets for format grp smo297613 before formatting
 
// formatting measures in staff group smo297613
fmtsmo26913621.format([smo269136v0,smo271542v0,smo273869v0,smo276219v0], 157);
const stavesmo269136 = new VF.Stave(2116, 630.2253035909339, 180);
stavesmo269136.setAttribute('id', 'stavesmo269136');
stavesmo269136.setBegBarType(4);
stavesmo269136.setContext(context);
stavesmo269136.draw();
smo269136v0.draw(context, stavesmo269136);
const stavesmo271542 = new VF.Stave(2116, 700.2253035909339, 180);
stavesmo271542.setAttribute('id', 'stavesmo271542');
stavesmo271542.setBegBarType(4);
stavesmo271542.setContext(context);
stavesmo271542.draw();
smo271542v0.draw(context, stavesmo271542);
const stavesmo273869 = new VF.Stave(2116, 761.2253035909339, 180);
stavesmo273869.setAttribute('id', 'stavesmo273869');
stavesmo273869.setBegBarType(4);
stavesmo273869.setContext(context);
stavesmo273869.draw();
smo273869v0.draw(context, stavesmo273869);
const stavesmo276219 = new VF.Stave(2116, 831.2253035909339, 180);
stavesmo276219.setAttribute('id', 'stavesmo276219');
stavesmo276219.setBegBarType(4);
stavesmo276219.setContext(context);
stavesmo276219.draw();
smo276219v0.draw(context, stavesmo276219);
// create beam groups and tuplets for format grp smo297615 before formatting
 
// formatting measures in staff group smo297615
fmtsmo27863921.format([smo278639v0,smo281012v0,smo283358v0,smo285686v0], 157);
const stavesmo278639 = new VF.Stave(2116, 936.2253035909339, 180);
stavesmo278639.setAttribute('id', 'stavesmo278639');
stavesmo278639.setBegBarType(4);
stavesmo278639.setContext(context);
stavesmo278639.draw();
smo278639v0.draw(context, stavesmo278639);
const stavesmo281012 = new VF.Stave(2116, 1023.2253035909339, 180);
stavesmo281012.setAttribute('id', 'stavesmo281012');
stavesmo281012.setBegBarType(4);
stavesmo281012.setContext(context);
stavesmo281012.draw();
smo281012v0.draw(context, stavesmo281012);
const stavesmo283358 = new VF.Stave(2116, 1128.225303590934, 180);
stavesmo283358.setAttribute('id', 'stavesmo283358');
stavesmo283358.setBegBarType(4);
stavesmo283358.setContext(context);
stavesmo283358.draw();
smo283358v0.draw(context, stavesmo283358);
const stavesmo285686 = new VF.Stave(2116, 1213.225303590934, 180);
stavesmo285686.setAttribute('id', 'stavesmo285686');
stavesmo285686.setBegBarType(4);
stavesmo285686.setContext(context);
stavesmo285686.draw();
smo285686v0.draw(context, stavesmo285686);
// create beam groups and tuplets for format grp smo290066 before formatting
 
// formatting measures in staff group smo290066
fmtsmo28802321.format([smo288023v0], 157);
const stavesmo288023 = new VF.Stave(2116, 1290.225303590934, 180);
stavesmo288023.setAttribute('id', 'stavesmo288023');
stavesmo288023.setBegBarType(4);
stavesmo288023.setContext(context);
stavesmo288023.draw();
smo288023v0.draw(context, stavesmo288023);
// create beam groups and tuplets for format grp smo292534 before formatting
const dirsmo364111 = smo290429.getStemDirection();
smo290429.setStemDirection(dirsmo364111);
smo290430.setStemDirection(dirsmo364111);
smo290431.setStemDirection(dirsmo364111);
smo290432.setStemDirection(dirsmo364111);
const smo364111 = new VF.Beam([smo290429,smo290430,smo290431,smo290432]);
 
// formatting measures in staff group smo292534
fmtsmo29045121.format([smo290451v0], 157);
const stavesmo290451 = new VF.Stave(2116, 1373.225303590934, 180);
stavesmo290451.setAttribute('id', 'stavesmo290451');
stavesmo290451.setBegBarType(4);
stavesmo290451.setContext(context);
stavesmo290451.draw();
smo290451v0.draw(context, stavesmo290451);
smo364111.setContext(context);
smo364111.draw();
// create beam groups and tuplets for format grp smo294892 before formatting
 
// formatting measures in staff group smo294892
fmtsmo29297421.format([smo292974v0], 157);
const stavesmo292974 = new VF.Stave(2116, 1478.225303590934, 180);
stavesmo292974.setAttribute('id', 'stavesmo292974');
stavesmo292974.setBegBarType(4);
stavesmo292974.setContext(context);
stavesmo292974.draw();
smo292974v0.draw(context, stavesmo292974);
// create beam groups and tuplets for format grp smo297605 before formatting
 
// formatting measures in staff group smo297605
fmtsmo29544221.format([smo295442v0], 157);
const stavesmo295442 = new VF.Stave(2116, 1555.225303590934, 180);
stavesmo295442.setAttribute('id', 'stavesmo295442');
stavesmo295442.setBegBarType(4);
stavesmo295442.setContext(context);
stavesmo295442.draw();
smo295442v0.draw(context, stavesmo295442);
const rightsmo297605stavesmo25726316 = new VF.StaveConnector(stavesmo257263, stavesmo266827).setType(0);
rightsmo297605stavesmo25726316.setContext(context).draw();
const rightsmo297605stavesmo26913616 = new VF.StaveConnector(stavesmo269136, stavesmo276219).setType(0);
rightsmo297605stavesmo26913616.setContext(context).draw();
const rightsmo297605stavesmo27863916 = new VF.StaveConnector(stavesmo278639, stavesmo285686).setType(0);
rightsmo297605stavesmo27863916.setContext(context).draw();
const smo372275 = new VF.StaveHairpin({ first_note: smo257174, last_note: smo257174,
       firstNote: smo257174, lastNote: smo257174 });
smo372275.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo372275.setContext(context).setPosition(4).draw();
const smo372276 = new VF.Curve(smo257132, smo257135, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo372276.setContext(context).draw();
const smo372277 = new VF.StaveTie({ first_note: smo257174, last_note: smo257191, 
          firstNote: smo257174, lastNote: smo257191, first_indices: [0], last_indices: [0]});
smo372277.setContext(context).draw();
const smo372278 = new VF.StaveTie({ first_note: smo257244, last_note: smo257245, 
          firstNote: smo257244, lastNote: smo257245, first_indices: [0], last_indices: [0]});
smo372278.setContext(context).draw();
const smo372279 = new VF.StaveHairpin({ first_note: smo259601, last_note: smo259601,
       firstNote: smo259601, lastNote: smo259601 });
smo372279.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo372279.setContext(context).setPosition(4).draw();
const smo372280 = new VF.Curve(smo259559, smo259562, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo372280.setContext(context).draw();
const smo372281 = new VF.StaveTie({ first_note: smo259601, last_note: smo259618, 
          firstNote: smo259601, lastNote: smo259618, first_indices: [0], last_indices: [0]});
smo372281.setContext(context).draw();
const smo372282 = new VF.StaveTie({ first_note: smo259671, last_note: smo259672, 
          firstNote: smo259671, lastNote: smo259672, first_indices: [0], last_indices: [0]});
smo372282.setContext(context).draw();
const smo372283 = new VF.StaveHairpin({ first_note: smo262017, last_note: smo262017,
       firstNote: smo262017, lastNote: smo262017 });
smo372283.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo372283.setContext(context).setPosition(4).draw();
const smo372284 = new VF.StaveTie({ first_note: smo262017, last_note: smo262034, 
          firstNote: smo262017, lastNote: smo262034, first_indices: [0], last_indices: [0]});
smo372284.setContext(context).draw();
const smo372285 = new VF.StaveTie({ first_note: smo262087, last_note: smo262088, 
          firstNote: smo262087, lastNote: smo262088, first_indices: [0], last_indices: [0]});
smo372285.setContext(context).draw();
const smo372286 = new VF.StaveHairpin({ first_note: smo264391, last_note: smo264391,
       firstNote: smo264391, lastNote: smo264391 });
smo372286.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo372286.setContext(context).setPosition(4).draw();
const smo372287 = new VF.StaveTie({ first_note: smo264391, last_note: smo264408, 
          firstNote: smo264391, lastNote: smo264408, first_indices: [0], last_indices: [0]});
smo372287.setContext(context).draw();
const smo372288 = new VF.StaveTie({ first_note: smo264461, last_note: smo264462, 
          firstNote: smo264461, lastNote: smo264462, first_indices: [0], last_indices: [0]});
smo372288.setContext(context).draw();
const smo372289 = new VF.StaveHairpin({ first_note: smo266742, last_note: smo266742,
       firstNote: smo266742, lastNote: smo266742 });
smo372289.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo372289.setContext(context).setPosition(4).draw();
const smo372290 = new VF.StaveTie({ first_note: smo266742, last_note: smo266759, 
          firstNote: smo266742, lastNote: smo266759, first_indices: [0], last_indices: [0]});
smo372290.setContext(context).draw();
const smo372291 = new VF.StaveHairpin({ first_note: smo269049, last_note: smo269049,
       firstNote: smo269049, lastNote: smo269049 });
smo372291.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo372291.setContext(context).setPosition(4).draw();
const smo372292 = new VF.StaveTie({ first_note: smo268984, last_note: smo268985, 
          firstNote: smo268984, lastNote: smo268985, first_indices: [0], last_indices: [0]});
smo372292.setContext(context).draw();
const smo372293 = new VF.StaveTie({ first_note: smo269049, last_note: smo269066, 
          firstNote: smo269049, lastNote: smo269066, first_indices: [0], last_indices: [0]});
smo372293.setContext(context).draw();
const smo372294 = new VF.StaveHairpin({ first_note: smo271455, last_note: smo271455,
       firstNote: smo271455, lastNote: smo271455 });
smo372294.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo372294.setContext(context).setPosition(4).draw();
const smo372295 = new VF.StaveTie({ first_note: smo271455, last_note: smo271472, 
          firstNote: smo271455, lastNote: smo271472, first_indices: [0], last_indices: [0]});
smo372295.setContext(context).draw();
const smo372296 = new VF.StaveHairpin({ first_note: smo278554, last_note: smo278554,
       firstNote: smo278554, lastNote: smo278554 });
smo372296.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo372296.setContext(context).setPosition(4).draw();
const smo372297 = new VF.StaveTie({ first_note: smo278489, last_note: smo278490, 
          firstNote: smo278489, lastNote: smo278490, first_indices: [0], last_indices: [0]});
smo372297.setContext(context).draw();
const smo372298 = new VF.StaveTie({ first_note: smo278554, last_note: smo278571, 
          firstNote: smo278554, lastNote: smo278571, first_indices: [0], last_indices: [0]});
smo372298.setContext(context).draw();
const smo372299 = new VF.StaveHairpin({ first_note: smo280927, last_note: smo280927,
       firstNote: smo280927, lastNote: smo280927 });
smo372299.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo372299.setContext(context).setPosition(4).draw();
const smo372300 = new VF.StaveTie({ first_note: smo280862, last_note: smo280863, 
          firstNote: smo280862, lastNote: smo280863, first_indices: [0], last_indices: [0]});
smo372300.setContext(context).draw();
const smo372301 = new VF.StaveTie({ first_note: smo280927, last_note: smo280944, 
          firstNote: smo280927, lastNote: smo280944, first_indices: [0], last_indices: [0]});
smo372301.setContext(context).draw();
const smo372302 = new VF.StaveHairpin({ first_note: smo283273, last_note: smo283273,
       firstNote: smo283273, lastNote: smo283273 });
smo372302.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo372302.setContext(context).setPosition(4).draw();
const smo372303 = new VF.StaveTie({ first_note: smo283208, last_note: smo283209, 
          firstNote: smo283208, lastNote: smo283209, first_indices: [0], last_indices: [0]});
smo372303.setContext(context).draw();
const smo372304 = new VF.StaveTie({ first_note: smo283273, last_note: smo283290, 
          firstNote: smo283273, lastNote: smo283290, first_indices: [0], last_indices: [0]});
smo372304.setContext(context).draw();
const smo372305 = new VF.StaveHairpin({ first_note: smo285601, last_note: smo285601,
       firstNote: smo285601, lastNote: smo285601 });
smo372305.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo372305.setContext(context).setPosition(4).draw();
const smo372306 = new VF.StaveTie({ first_note: smo285601, last_note: smo285618, 
          firstNote: smo285601, lastNote: smo285618, first_indices: [0], last_indices: [0]});
smo372306.setContext(context).draw();
const smo372307 = new VF.StaveTie({ first_note: smo287870, last_note: smo287871, 
          firstNote: smo287870, lastNote: smo287871, first_indices: [0], last_indices: [0]});
smo372307.setContext(context).draw();
const smo372308 = new VF.StaveTie({ first_note: smo290432, last_note: smo290433, 
          firstNote: smo290432, lastNote: smo290433, first_indices: [0], last_indices: [0]});
smo372308.setContext(context).draw();
}
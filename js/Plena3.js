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
const fmtsmo4807413 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo48074v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo48074v0ar = [];
const smo48050 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo48050'] = smo48050;
smo48050.setAttribute('id', 'smo48050');
smo48074v0ar.push(smo48050);
const smo48051 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo48051'] = smo48051;
smo48051.setAttribute('id', 'smo48051');
smo48074v0ar.push(smo48051);
const smo48052 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo48052'] = smo48052;
smo48052.setAttribute('id', 'smo48052');
smo48074v0ar.push(smo48052);
const smo48053 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo48053'] = smo48053;
smo48053.setAttribute('id', 'smo48053');
smo48074v0ar.push(smo48053);
const smo48054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo48054'] = smo48054;
smo48054.setAttribute('id', 'smo48054');
smo48074v0ar.push(smo48054);
const smo48055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo48055'] = smo48055;
smo48055.setAttribute('id', 'smo48055');
smo48074v0ar.push(smo48055);
const smo48056 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo48056'] = smo48056;
smo48056.setAttribute('id', 'smo48056');
smo48074v0ar.push(smo48056);
const smo48057 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo48057'] = smo48057;
smo48057.setAttribute('id', 'smo48057');
smo48074v0ar.push(smo48057);
const smo48058 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo48058'] = smo48058;
smo48058.setAttribute('id', 'smo48058');
smo48074v0ar.push(smo48058);
smo48074v0.addTickables(smo48074v0ar)
fmtsmo4807413.joinVoices([smo48074v0]);
const fmtsmo5050113 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo50501v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo50501v0ar = [];
const smo50477 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo50477'] = smo50477;
smo50477.setAttribute('id', 'smo50477');
smo50501v0ar.push(smo50477);
const smo50478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo50478'] = smo50478;
smo50478.setAttribute('id', 'smo50478');
smo50501v0ar.push(smo50478);
const smo50479 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo50479'] = smo50479;
smo50479.setAttribute('id', 'smo50479');
smo50501v0ar.push(smo50479);
const smo50480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
noteHash['smo50480'] = smo50480;
smo50480.setAttribute('id', 'smo50480');
smo50501v0ar.push(smo50480);
const smo50481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo50481'] = smo50481;
smo50481.setAttribute('id', 'smo50481');
smo50501v0ar.push(smo50481);
const smo50482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo50482'] = smo50482;
smo50482.setAttribute('id', 'smo50482');
smo50501v0ar.push(smo50482);
const smo50483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo50483'] = smo50483;
smo50483.setAttribute('id', 'smo50483');
smo50501v0ar.push(smo50483);
const smo50484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo50484'] = smo50484;
smo50484.setAttribute('id', 'smo50484');
smo50501v0ar.push(smo50484);
const smo50485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo50485'] = smo50485;
smo50485.setAttribute('id', 'smo50485');
smo50501v0ar.push(smo50485);
smo50501v0.addTickables(smo50501v0ar)
fmtsmo5050113.joinVoices([smo50501v0]);
const fmtsmo5291913 = new VF.Formatter();
//
// voices and notes for stave 2 13
const smo52919v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo52919v0ar = [];
const smo52895 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo52895'] = smo52895;
smo52895.setAttribute('id', 'smo52895');
smo52919v0ar.push(smo52895);
const smo52896 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo52896'] = smo52896;
smo52896.setAttribute('id', 'smo52896');
smo52919v0ar.push(smo52896);
const smo52897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo52897'] = smo52897;
smo52897.setAttribute('id', 'smo52897');
smo52919v0ar.push(smo52897);
const smo52898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo52898'] = smo52898;
smo52898.setAttribute('id', 'smo52898');
smo52919v0ar.push(smo52898);
const smo52899 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo52899'] = smo52899;
smo52899.setAttribute('id', 'smo52899');
smo52919v0ar.push(smo52899);
const smo52900 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo52900'] = smo52900;
smo52900.setAttribute('id', 'smo52900');
smo52919v0ar.push(smo52900);
const smo52901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo52901'] = smo52901;
smo52901.setAttribute('id', 'smo52901');
smo52919v0ar.push(smo52901);
const smo52902 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo52902'] = smo52902;
smo52902.setAttribute('id', 'smo52902');
smo52919v0ar.push(smo52902);
const smo52903 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo52903'] = smo52903;
smo52903.setAttribute('id', 'smo52903');
smo52919v0ar.push(smo52903);
smo52919v0.addTickables(smo52919v0ar)
fmtsmo5291913.joinVoices([smo52919v0]);
const fmtsmo5529313 = new VF.Formatter();
//
// voices and notes for stave 3 13
const smo55293v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo55293v0ar = [];
const smo55269 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo55269'] = smo55269;
smo55269.setAttribute('id', 'smo55269');
smo55293v0ar.push(smo55269);
const smo55270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo55270'] = smo55270;
smo55270.setAttribute('id', 'smo55270');
smo55293v0ar.push(smo55270);
const smo55271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo55271'] = smo55271;
smo55271.setAttribute('id', 'smo55271');
smo55293v0ar.push(smo55271);
const smo55272 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo55272'] = smo55272;
smo55272.setAttribute('id', 'smo55272');
smo55293v0ar.push(smo55272);
const smo55273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo55273'] = smo55273;
smo55273.setAttribute('id', 'smo55273');
smo55293v0ar.push(smo55273);
const smo55274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo55274'] = smo55274;
smo55274.setAttribute('id', 'smo55274');
smo55293v0ar.push(smo55274);
const smo55275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo55275'] = smo55275;
smo55275.setAttribute('id', 'smo55275');
smo55293v0ar.push(smo55275);
const smo55276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo55276'] = smo55276;
smo55276.setAttribute('id', 'smo55276');
smo55293v0ar.push(smo55276);
const smo55277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo55277'] = smo55277;
smo55277.setAttribute('id', 'smo55277');
smo55293v0ar.push(smo55277);
smo55293v0.addTickables(smo55293v0ar)
fmtsmo5529313.joinVoices([smo55293v0]);
const fmtsmo5765313 = new VF.Formatter();
//
// voices and notes for stave 4 13
const smo57653v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57653v0ar = [];
const smo57634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo57634'] = smo57634;
smo57634.setAttribute('id', 'smo57634');
const  smo162974 = new VF.Articulation('a.').setPosition(3);
smo57634.addModifier(smo162974, 0);
smo57653v0ar.push(smo57634);
const smo57636 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo57636'] = smo57636;
smo57636.setAttribute('id', 'smo57636');
smo57653v0ar.push(smo57636);
const smo57637 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo57637'] = smo57637;
smo57637.setAttribute('id', 'smo57637');
smo57653v0ar.push(smo57637);
smo57653v0.addTickables(smo57653v0ar)
fmtsmo5765313.joinVoices([smo57653v0]);
const fmtsmo5995313 = new VF.Formatter();
//
// voices and notes for stave 5 13
const smo59953v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59953v0ar = [];
const smo59930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59930'] = smo59930;
smo59930.setAttribute('id', 'smo59930');
smo59953v0ar.push(smo59930);
const smo59931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo59931'] = smo59931;
smo59931.setAttribute('id', 'smo59931');
smo59953v0ar.push(smo59931);
const smo59932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo59932'] = smo59932;
smo59932.setAttribute('id', 'smo59932');
smo59953v0ar.push(smo59932);
const smo59933 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo59933'] = smo59933;
smo59933.setAttribute('id', 'smo59933');
smo59953v0ar.push(smo59933);
const smo59934 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo59934'] = smo59934;
smo59934.setAttribute('id', 'smo59934');
smo59953v0ar.push(smo59934);
const smo59935 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo59935'] = smo59935;
smo59935.setAttribute('id', 'smo59935');
smo59953v0ar.push(smo59935);
const smo59936 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo59936'] = smo59936;
smo59936.setAttribute('id', 'smo59936');
smo59953v0ar.push(smo59936);
const smo59937 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo59937'] = smo59937;
smo59937.setAttribute('id', 'smo59937');
smo59953v0ar.push(smo59937);
smo59953v0.addTickables(smo59953v0ar)
fmtsmo5995313.joinVoices([smo59953v0]);
const fmtsmo6235913 = new VF.Formatter();
//
// voices and notes for stave 6 13
const smo62359v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62359v0ar = [];
const smo62336 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62336'] = smo62336;
smo62336.setAttribute('id', 'smo62336');
smo62359v0ar.push(smo62336);
const smo62337 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo62337'] = smo62337;
smo62337.setAttribute('id', 'smo62337');
smo62359v0ar.push(smo62337);
const smo62338 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo62338'] = smo62338;
smo62338.setAttribute('id', 'smo62338');
smo62359v0ar.push(smo62338);
const smo62339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo62339'] = smo62339;
smo62339.setAttribute('id', 'smo62339');
smo62359v0ar.push(smo62339);
const smo62340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo62340'] = smo62340;
smo62340.setAttribute('id', 'smo62340');
smo62359v0ar.push(smo62340);
const smo62341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo62341'] = smo62341;
smo62341.setAttribute('id', 'smo62341');
smo62359v0ar.push(smo62341);
const smo62342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo62342'] = smo62342;
smo62342.setAttribute('id', 'smo62342');
smo62359v0ar.push(smo62342);
const smo62343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo62343'] = smo62343;
smo62343.setAttribute('id', 'smo62343');
smo62359v0ar.push(smo62343);
smo62359v0.addTickables(smo62359v0ar)
fmtsmo6235913.joinVoices([smo62359v0]);
const fmtsmo6470213 = new VF.Formatter();
//
// voices and notes for stave 7 13
const smo64702v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64702v0ar = [];
const smo64686 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64686'] = smo64686;
smo64686.setAttribute('id', 'smo64686');
smo64702v0ar.push(smo64686);
smo64702v0.addTickables(smo64702v0ar)
fmtsmo6470213.joinVoices([smo64702v0]);
const fmtsmo6705213 = new VF.Formatter();
//
// voices and notes for stave 8 13
const smo67052v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67052v0ar = [];
const smo67036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo67036'] = smo67036;
smo67036.setAttribute('id', 'smo67036');
smo67052v0ar.push(smo67036);
smo67052v0.addTickables(smo67052v0ar)
fmtsmo6705213.joinVoices([smo67052v0]);
const fmtsmo6945813 = new VF.Formatter();
//
// voices and notes for stave 9 13
const smo69458v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69458v0ar = [];
const smo69435 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo69435'] = smo69435;
smo69435.setAttribute('id', 'smo69435');
smo69458v0ar.push(smo69435);
const smo69436 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo69436'] = smo69436;
smo69436.setAttribute('id', 'smo69436');
smo69458v0ar.push(smo69436);
const smo69437 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo69437'] = smo69437;
smo69437.setAttribute('id', 'smo69437');
smo69458v0ar.push(smo69437);
const smo69438 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo69438'] = smo69438;
smo69438.setAttribute('id', 'smo69438');
smo69458v0ar.push(smo69438);
const smo69439 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo69439'] = smo69439;
smo69439.setAttribute('id', 'smo69439');
smo69458v0ar.push(smo69439);
const smo69440 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo69440'] = smo69440;
smo69440.setAttribute('id', 'smo69440');
smo69458v0ar.push(smo69440);
const smo69441 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo69441'] = smo69441;
smo69441.setAttribute('id', 'smo69441');
smo69458v0ar.push(smo69441);
const smo69442 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo69442'] = smo69442;
smo69442.setAttribute('id', 'smo69442');
smo69458v0ar.push(smo69442);
smo69458v0.addTickables(smo69458v0ar)
fmtsmo6945813.joinVoices([smo69458v0]);
const fmtsmo7183113 = new VF.Formatter();
//
// voices and notes for stave 10 13
const smo71831v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo71831v0ar = [];
const smo71808 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo71808'] = smo71808;
smo71808.setAttribute('id', 'smo71808');
smo71831v0ar.push(smo71808);
const smo71809 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo71809'] = smo71809;
smo71809.setAttribute('id', 'smo71809');
smo71831v0ar.push(smo71809);
const smo71810 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo71810'] = smo71810;
smo71810.setAttribute('id', 'smo71810');
smo71831v0ar.push(smo71810);
const smo71811 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo71811'] = smo71811;
smo71811.setAttribute('id', 'smo71811');
smo71831v0ar.push(smo71811);
const smo71812 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo71812'] = smo71812;
smo71812.setAttribute('id', 'smo71812');
smo71831v0ar.push(smo71812);
const smo71813 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo71813'] = smo71813;
smo71813.setAttribute('id', 'smo71813');
smo71831v0ar.push(smo71813);
const smo71814 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo71814'] = smo71814;
smo71814.setAttribute('id', 'smo71814');
smo71831v0ar.push(smo71814);
const smo71815 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo71815'] = smo71815;
smo71815.setAttribute('id', 'smo71815');
smo71831v0ar.push(smo71815);
smo71831v0.addTickables(smo71831v0ar)
fmtsmo7183113.joinVoices([smo71831v0]);
const fmtsmo7417713 = new VF.Formatter();
//
// voices and notes for stave 11 13
const smo74177v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74177v0ar = [];
const smo74154 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo74154'] = smo74154;
smo74154.setAttribute('id', 'smo74154');
smo74177v0ar.push(smo74154);
const smo74155 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo74155'] = smo74155;
smo74155.setAttribute('id', 'smo74155');
smo74177v0ar.push(smo74155);
const smo74156 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo74156'] = smo74156;
smo74156.setAttribute('id', 'smo74156');
smo74177v0ar.push(smo74156);
const smo74157 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo74157'] = smo74157;
smo74157.setAttribute('id', 'smo74157');
smo74177v0ar.push(smo74157);
const smo74158 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo74158'] = smo74158;
smo74158.setAttribute('id', 'smo74158');
smo74177v0ar.push(smo74158);
const smo74159 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo74159'] = smo74159;
smo74159.setAttribute('id', 'smo74159');
smo74177v0ar.push(smo74159);
const smo74160 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo74160'] = smo74160;
smo74160.setAttribute('id', 'smo74160');
smo74177v0ar.push(smo74160);
const smo74161 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo74161'] = smo74161;
smo74161.setAttribute('id', 'smo74161');
smo74177v0ar.push(smo74161);
smo74177v0.addTickables(smo74177v0ar)
fmtsmo7417713.joinVoices([smo74177v0]);
const fmtsmo7651213 = new VF.Formatter();
//
// voices and notes for stave 12 13
const smo76512v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76512v0ar = [];
const smo76493 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo76493'] = smo76493;
smo76493.setAttribute('id', 'smo76493');
const  smo162975 = new VF.Articulation('a.').setPosition(3);
smo76493.addModifier(smo162975, 0);
smo76512v0ar.push(smo76493);
const smo76495 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo76495'] = smo76495;
smo76495.setAttribute('id', 'smo76495');
smo76512v0ar.push(smo76495);
const smo76496 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n"]}'))
noteHash['smo76496'] = smo76496;
smo76496.setAttribute('id', 'smo76496');
smo76512v0ar.push(smo76496);
smo76512v0.addTickables(smo76512v0ar)
fmtsmo7651213.joinVoices([smo76512v0]);
const fmtsmo7883913 = new VF.Formatter();
//
// voices and notes for stave 13 13
const smo78839v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78839v0ar = [];
const smo78816 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo78816'] = smo78816;
smo78816.setAttribute('id', 'smo78816');
smo78839v0ar.push(smo78816);
const smo78817 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo78817'] = smo78817;
smo78817.setAttribute('id', 'smo78817');
smo78839v0ar.push(smo78817);
const smo78818 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo78818'] = smo78818;
smo78818.setAttribute('id', 'smo78818');
smo78839v0ar.push(smo78818);
const smo78819 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo78819'] = smo78819;
smo78819.setAttribute('id', 'smo78819');
smo78839v0ar.push(smo78819);
const smo78820 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo78820'] = smo78820;
smo78820.setAttribute('id', 'smo78820');
smo78839v0ar.push(smo78820);
const smo78821 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo78821'] = smo78821;
smo78821.setAttribute('id', 'smo78821');
smo78839v0ar.push(smo78821);
const smo78822 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo78822'] = smo78822;
smo78822.setAttribute('id', 'smo78822');
smo78839v0ar.push(smo78822);
const smo78823 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo78823'] = smo78823;
smo78823.setAttribute('id', 'smo78823');
smo78839v0ar.push(smo78823);
smo78839v0.addTickables(smo78839v0ar)
fmtsmo7883913.joinVoices([smo78839v0]);
const fmtsmo8128113 = new VF.Formatter();
//
// voices and notes for stave 14 13
const smo81281v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81281v0ar = [];
const smo81265 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo81265'] = smo81265;
smo81265.setAttribute('id', 'smo81265');
smo81281v0ar.push(smo81265);
smo81281v0.addTickables(smo81281v0ar)
fmtsmo8128113.joinVoices([smo81281v0]);
const fmtsmo8379013 = new VF.Formatter();
//
// voices and notes for stave 15 13
const smo83790v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo83790v0ar = [];
const smo83771 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo83771'] = smo83771;
smo83771.setAttribute('id', 'smo83771');
const  smo162976 = new VF.Articulation('a.').setPosition(3);
smo83771.addModifier(smo162976, 0);
smo83790v0ar.push(smo83771);
const smo83773 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo83773'] = smo83773;
smo83773.setAttribute('id', 'smo83773');
smo83790v0ar.push(smo83773);
const smo83774 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo83774'] = smo83774;
smo83774.setAttribute('id', 'smo83774');
smo83790v0ar.push(smo83774);
smo83790v0.addTickables(smo83790v0ar)
fmtsmo8379013.joinVoices([smo83790v0]);
const fmtsmo8623413 = new VF.Formatter();
//
// voices and notes for stave 16 13
const smo86234v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo86234v0ar = [];
const smo86208 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86208'] = smo86208;
smo86208.setAttribute('id', 'smo86208');
const smo862080acc = new VF.Accidental('n');
smo86208.addModifier(smo862080acc, 0);
smo86234v0ar.push(smo86208);
const smo86209 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86209'] = smo86209;
smo86209.setAttribute('id', 'smo86209');
smo86234v0ar.push(smo86209);
const smo86210 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86210'] = smo86210;
smo86210.setAttribute('id', 'smo86210');
smo86234v0ar.push(smo86210);
const smo86211 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86211'] = smo86211;
smo86211.setAttribute('id', 'smo86211');
smo86234v0ar.push(smo86211);
const smo86212 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86212'] = smo86212;
smo86212.setAttribute('id', 'smo86212');
smo86234v0ar.push(smo86212);
const smo86213 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86213'] = smo86213;
smo86213.setAttribute('id', 'smo86213');
smo86234v0ar.push(smo86213);
const smo86214 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo86214'] = smo86214;
smo86214.setAttribute('id', 'smo86214');
smo86234v0ar.push(smo86214);
const smo86215 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86215'] = smo86215;
smo86215.setAttribute('id', 'smo86215');
smo86234v0ar.push(smo86215);
const smo86216 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo86216'] = smo86216;
smo86216.setAttribute('id', 'smo86216');
smo86234v0ar.push(smo86216);
const smo86217 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86217'] = smo86217;
smo86217.setAttribute('id', 'smo86217');
smo86234v0ar.push(smo86217);
smo86234v0.addTickables(smo86234v0ar)
fmtsmo8623413.joinVoices([smo86234v0]);
// create beam groups and tuplets for format grp smo88583 before formatting
const dirsmo154751 = smo48050.getStemDirection();
smo48050.setStemDirection(dirsmo154751);
smo48051.setStemDirection(dirsmo154751);
smo48052.setStemDirection(dirsmo154751);
const smo154751 = new VF.Beam([smo48050,smo48051,smo48052]);
const dirsmo154752 = smo48053.getStemDirection();
smo48053.setStemDirection(dirsmo154752);
smo48054.setStemDirection(dirsmo154752);
const smo154752 = new VF.Beam([smo48053,smo48054]);
const dirsmo154753 = smo48056.getStemDirection();
smo48056.setStemDirection(dirsmo154753);
smo48057.setStemDirection(dirsmo154753);
const smo154753 = new VF.Beam([smo48056,smo48057]);
const dirsmo154756 = smo50477.getStemDirection();
smo50477.setStemDirection(dirsmo154756);
smo50478.setStemDirection(dirsmo154756);
smo50479.setStemDirection(dirsmo154756);
const smo154756 = new VF.Beam([smo50477,smo50478,smo50479]);
const dirsmo154757 = smo50480.getStemDirection();
smo50480.setStemDirection(dirsmo154757);
smo50481.setStemDirection(dirsmo154757);
const smo154757 = new VF.Beam([smo50480,smo50481]);
const dirsmo154758 = smo50483.getStemDirection();
smo50483.setStemDirection(dirsmo154758);
smo50484.setStemDirection(dirsmo154758);
const smo154758 = new VF.Beam([smo50483,smo50484]);
const dirsmo154761 = smo52895.getStemDirection();
smo52895.setStemDirection(dirsmo154761);
smo52896.setStemDirection(dirsmo154761);
smo52897.setStemDirection(dirsmo154761);
const smo154761 = new VF.Beam([smo52895,smo52896,smo52897]);
const dirsmo154762 = smo52898.getStemDirection();
smo52898.setStemDirection(dirsmo154762);
smo52899.setStemDirection(dirsmo154762);
const smo154762 = new VF.Beam([smo52898,smo52899]);
const dirsmo154763 = smo52901.getStemDirection();
smo52901.setStemDirection(dirsmo154763);
smo52902.setStemDirection(dirsmo154763);
const smo154763 = new VF.Beam([smo52901,smo52902]);
const dirsmo154766 = smo55269.getStemDirection();
smo55269.setStemDirection(dirsmo154766);
smo55270.setStemDirection(dirsmo154766);
smo55271.setStemDirection(dirsmo154766);
const smo154766 = new VF.Beam([smo55269,smo55270,smo55271]);
const dirsmo154767 = smo55272.getStemDirection();
smo55272.setStemDirection(dirsmo154767);
smo55273.setStemDirection(dirsmo154767);
const smo154767 = new VF.Beam([smo55272,smo55273]);
const dirsmo154768 = smo55275.getStemDirection();
smo55275.setStemDirection(dirsmo154768);
smo55276.setStemDirection(dirsmo154768);
const smo154768 = new VF.Beam([smo55275,smo55276]);
 
// formatting measures in staff group smo88583
fmtsmo4807413.format([smo48074v0,smo50501v0,smo52919v0,smo55293v0,smo57653v0], 352);
const stavesmo48074 = new VF.Stave(138, 183.2253035909339, 440);
stavesmo48074.setAttribute('id', 'stavesmo48074');
stavesmo48074.setBegBarType(1);
stavesmo48074.addClef('treble');
const keysmo48074 = new VF.KeySignature('D');
keysmo48074.addToStave(stavesmo48074);
stavesmo48074.setContext(context);
stavesmo48074.draw();
smo48074v0.draw(context, stavesmo48074);
smo154751.setContext(context);
smo154751.draw();
smo154752.setContext(context);
smo154752.draw();
smo154753.setContext(context);
smo154753.draw();
const stavesmo50501 = new VF.Stave(138, 288.2253035909339, 440);
stavesmo50501.setAttribute('id', 'stavesmo50501');
stavesmo50501.setBegBarType(1);
stavesmo50501.addClef('treble');
const keysmo50501 = new VF.KeySignature('D');
keysmo50501.addToStave(stavesmo50501);
stavesmo50501.setContext(context);
stavesmo50501.draw();
smo50501v0.draw(context, stavesmo50501);
smo154756.setContext(context);
smo154756.draw();
smo154757.setContext(context);
smo154757.draw();
smo154758.setContext(context);
smo154758.draw();
const stavesmo52919 = new VF.Stave(138, 379.2253035909339, 440);
stavesmo52919.setAttribute('id', 'stavesmo52919');
stavesmo52919.setBegBarType(1);
stavesmo52919.addClef('treble');
const keysmo52919 = new VF.KeySignature('G');
keysmo52919.addToStave(stavesmo52919);
stavesmo52919.setContext(context);
stavesmo52919.draw();
smo52919v0.draw(context, stavesmo52919);
smo154761.setContext(context);
smo154761.draw();
smo154762.setContext(context);
smo154762.draw();
smo154763.setContext(context);
smo154763.draw();
const stavesmo55293 = new VF.Stave(138, 479.2253035909339, 440);
stavesmo55293.setAttribute('id', 'stavesmo55293');
stavesmo55293.setBegBarType(1);
stavesmo55293.addClef('treble');
const keysmo55293 = new VF.KeySignature('G');
keysmo55293.addToStave(stavesmo55293);
stavesmo55293.setContext(context);
stavesmo55293.draw();
smo55293v0.draw(context, stavesmo55293);
smo154766.setContext(context);
smo154766.draw();
smo154767.setContext(context);
smo154767.draw();
smo154768.setContext(context);
smo154768.draw();
const stavesmo57653 = new VF.Stave(138, 549.2253035909339, 440);
stavesmo57653.setAttribute('id', 'stavesmo57653');
stavesmo57653.setBegBarType(1);
stavesmo57653.addClef('treble');
const keysmo57653 = new VF.KeySignature('D');
keysmo57653.addToStave(stavesmo57653);
stavesmo57653.setContext(context);
stavesmo57653.draw();
smo57653v0.draw(context, stavesmo57653);
// create beam groups and tuplets for format grp smo88585 before formatting
const dirsmo154773 = smo59931.getStemDirection();
smo59931.setStemDirection(dirsmo154773);
smo59932.setStemDirection(dirsmo154773);
const smo154773 = new VF.Beam([smo59931,smo59932]);
const dirsmo154774 = smo59934.getStemDirection();
smo59934.setStemDirection(dirsmo154774);
smo59935.setStemDirection(dirsmo154774);
smo59936.setStemDirection(dirsmo154774);
smo59937.setStemDirection(dirsmo154774);
const smo154774 = new VF.Beam([smo59934,smo59935,smo59936,smo59937]);
const dirsmo154777 = smo62337.getStemDirection();
smo62337.setStemDirection(dirsmo154777);
smo62338.setStemDirection(dirsmo154777);
const smo154777 = new VF.Beam([smo62337,smo62338]);
const dirsmo154778 = smo62340.getStemDirection();
smo62340.setStemDirection(dirsmo154778);
smo62341.setStemDirection(dirsmo154778);
smo62342.setStemDirection(dirsmo154778);
smo62343.setStemDirection(dirsmo154778);
const smo154778 = new VF.Beam([smo62340,smo62341,smo62342,smo62343]);
 
// formatting measures in staff group smo88585
fmtsmo5995313.format([smo59953v0,smo62359v0,smo64702v0,smo67052v0], 364);
const stavesmo59953 = new VF.Stave(138, 630.2253035909339, 440);
stavesmo59953.setAttribute('id', 'stavesmo59953');
stavesmo59953.setBegBarType(1);
stavesmo59953.addClef('treble');
const keysmo59953 = new VF.KeySignature('G');
keysmo59953.addToStave(stavesmo59953);
stavesmo59953.setContext(context);
stavesmo59953.draw();
smo59953v0.draw(context, stavesmo59953);
smo154773.setContext(context);
smo154773.draw();
smo154774.setContext(context);
smo154774.draw();
const stavesmo62359 = new VF.Stave(138, 700.2253035909339, 440);
stavesmo62359.setAttribute('id', 'stavesmo62359');
stavesmo62359.setBegBarType(1);
stavesmo62359.addClef('treble');
const keysmo62359 = new VF.KeySignature('G');
keysmo62359.addToStave(stavesmo62359);
stavesmo62359.setContext(context);
stavesmo62359.draw();
smo62359v0.draw(context, stavesmo62359);
smo154777.setContext(context);
smo154777.draw();
smo154778.setContext(context);
smo154778.draw();
const stavesmo64702 = new VF.Stave(138, 761.2253035909339, 440);
stavesmo64702.setAttribute('id', 'stavesmo64702');
stavesmo64702.setBegBarType(1);
stavesmo64702.addClef('treble');
const keysmo64702 = new VF.KeySignature('G');
keysmo64702.addToStave(stavesmo64702);
stavesmo64702.setContext(context);
stavesmo64702.draw();
smo64702v0.draw(context, stavesmo64702);
const stavesmo67052 = new VF.Stave(138, 831.2253035909339, 440);
stavesmo67052.setAttribute('id', 'stavesmo67052');
stavesmo67052.setBegBarType(1);
stavesmo67052.addClef('treble');
const keysmo67052 = new VF.KeySignature('G');
keysmo67052.addToStave(stavesmo67052);
stavesmo67052.setContext(context);
stavesmo67052.draw();
smo67052v0.draw(context, stavesmo67052);
// create beam groups and tuplets for format grp smo88587 before formatting
const dirsmo154785 = smo69436.getStemDirection();
smo69436.setStemDirection(dirsmo154785);
smo69437.setStemDirection(dirsmo154785);
const smo154785 = new VF.Beam([smo69436,smo69437]);
const dirsmo154786 = smo69439.getStemDirection();
smo69439.setStemDirection(dirsmo154786);
smo69440.setStemDirection(dirsmo154786);
smo69441.setStemDirection(dirsmo154786);
smo69442.setStemDirection(dirsmo154786);
const smo154786 = new VF.Beam([smo69439,smo69440,smo69441,smo69442]);
const dirsmo154789 = smo71809.getStemDirection();
smo71809.setStemDirection(dirsmo154789);
smo71810.setStemDirection(dirsmo154789);
const smo154789 = new VF.Beam([smo71809,smo71810]);
const dirsmo154790 = smo71812.getStemDirection();
smo71812.setStemDirection(dirsmo154790);
smo71813.setStemDirection(dirsmo154790);
smo71814.setStemDirection(dirsmo154790);
smo71815.setStemDirection(dirsmo154790);
const smo154790 = new VF.Beam([smo71812,smo71813,smo71814,smo71815]);
const dirsmo154793 = smo74155.getStemDirection();
smo74155.setStemDirection(dirsmo154793);
smo74156.setStemDirection(dirsmo154793);
const smo154793 = new VF.Beam([smo74155,smo74156]);
const dirsmo154794 = smo74158.getStemDirection();
smo74158.setStemDirection(dirsmo154794);
smo74159.setStemDirection(dirsmo154794);
smo74160.setStemDirection(dirsmo154794);
smo74161.setStemDirection(dirsmo154794);
const smo154794 = new VF.Beam([smo74158,smo74159,smo74160,smo74161]);
 
// formatting measures in staff group smo88587
fmtsmo6945813.format([smo69458v0,smo71831v0,smo74177v0,smo76512v0], 364);
const stavesmo69458 = new VF.Stave(138, 936.2253035909339, 440);
stavesmo69458.setAttribute('id', 'stavesmo69458');
stavesmo69458.setBegBarType(1);
stavesmo69458.addClef('bass');
const keysmo69458 = new VF.KeySignature('F');
keysmo69458.addToStave(stavesmo69458);
stavesmo69458.setContext(context);
stavesmo69458.draw();
smo69458v0.draw(context, stavesmo69458);
smo154785.setContext(context);
smo154785.draw();
smo154786.setContext(context);
smo154786.draw();
const stavesmo71831 = new VF.Stave(138, 1023.2253035909339, 440);
stavesmo71831.setAttribute('id', 'stavesmo71831');
stavesmo71831.setBegBarType(1);
stavesmo71831.addClef('bass');
const keysmo71831 = new VF.KeySignature('F');
keysmo71831.addToStave(stavesmo71831);
stavesmo71831.setContext(context);
stavesmo71831.draw();
smo71831v0.draw(context, stavesmo71831);
smo154789.setContext(context);
smo154789.draw();
smo154790.setContext(context);
smo154790.draw();
const stavesmo74177 = new VF.Stave(138, 1128.225303590934, 440);
stavesmo74177.setAttribute('id', 'stavesmo74177');
stavesmo74177.setBegBarType(1);
stavesmo74177.addClef('bass');
const keysmo74177 = new VF.KeySignature('F');
keysmo74177.addToStave(stavesmo74177);
stavesmo74177.setContext(context);
stavesmo74177.draw();
smo74177v0.draw(context, stavesmo74177);
smo154793.setContext(context);
smo154793.draw();
smo154794.setContext(context);
smo154794.draw();
const stavesmo76512 = new VF.Stave(138, 1213.225303590934, 440);
stavesmo76512.setAttribute('id', 'stavesmo76512');
stavesmo76512.setBegBarType(1);
stavesmo76512.addClef('bass');
const keysmo76512 = new VF.KeySignature('F');
keysmo76512.addToStave(stavesmo76512);
stavesmo76512.setContext(context);
stavesmo76512.draw();
smo76512v0.draw(context, stavesmo76512);
// create beam groups and tuplets for format grp smo81038 before formatting
const dirsmo154799 = smo78817.getStemDirection();
smo78817.setStemDirection(dirsmo154799);
smo78818.setStemDirection(dirsmo154799);
const smo154799 = new VF.Beam([smo78817,smo78818]);
const dirsmo154800 = smo78820.getStemDirection();
smo78820.setStemDirection(dirsmo154800);
smo78821.setStemDirection(dirsmo154800);
smo78822.setStemDirection(dirsmo154800);
smo78823.setStemDirection(dirsmo154800);
const smo154800 = new VF.Beam([smo78820,smo78821,smo78822,smo78823]);
 
// formatting measures in staff group smo81038
fmtsmo7883913.format([smo78839v0], 365);
const stavesmo78839 = new VF.Stave(138, 1290.225303590934, 440);
stavesmo78839.setAttribute('id', 'stavesmo78839');
stavesmo78839.setBegBarType(1);
stavesmo78839.addClef('treble');
const keysmo78839 = new VF.KeySignature('F');
keysmo78839.addToStave(stavesmo78839);
stavesmo78839.setContext(context);
stavesmo78839.draw();
smo78839v0.draw(context, stavesmo78839);
smo154799.setContext(context);
smo154799.draw();
smo154800.setContext(context);
smo154800.draw();
// create beam groups and tuplets for format grp smo83506 before formatting
 
// formatting measures in staff group smo83506
fmtsmo8128113.format([smo81281v0], 365);
const stavesmo81281 = new VF.Stave(138, 1373.225303590934, 440);
stavesmo81281.setAttribute('id', 'stavesmo81281');
stavesmo81281.setBegBarType(1);
stavesmo81281.addClef('treble');
const keysmo81281 = new VF.KeySignature('F');
keysmo81281.addToStave(stavesmo81281);
stavesmo81281.setContext(context);
stavesmo81281.draw();
smo81281v0.draw(context, stavesmo81281);
// create beam groups and tuplets for format grp smo85864 before formatting
 
// formatting measures in staff group smo85864
fmtsmo8379013.format([smo83790v0], 364);
const stavesmo83790 = new VF.Stave(138, 1478.225303590934, 440);
stavesmo83790.setAttribute('id', 'stavesmo83790');
stavesmo83790.setBegBarType(1);
stavesmo83790.addClef('bass');
const keysmo83790 = new VF.KeySignature('F');
keysmo83790.addToStave(stavesmo83790);
stavesmo83790.setContext(context);
stavesmo83790.draw();
smo83790v0.draw(context, stavesmo83790);
// create beam groups and tuplets for format grp smo88577 before formatting
const dirsmo154807 = smo86208.getStemDirection();
smo86208.setStemDirection(dirsmo154807);
smo86209.setStemDirection(dirsmo154807);
smo86210.setStemDirection(dirsmo154807);
smo86211.setStemDirection(dirsmo154807);
const smo154807 = new VF.Beam([smo86208,smo86209,smo86210,smo86211]);
const dirsmo154808 = smo86212.getStemDirection();
smo86212.setStemDirection(dirsmo154808);
smo86213.setStemDirection(dirsmo154808);
const smo154808 = new VF.Beam([smo86212,smo86213]);
const smo86218 = new VF.Tuplet([smo86209,smo86210,smo86211], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo88577
fmtsmo8623413.format([smo86234v0], 373);
const stavesmo86234 = new VF.Stave(138, 1555.225303590934, 440);
stavesmo86234.setAttribute('id', 'stavesmo86234');
stavesmo86234.setBegBarType(1);
stavesmo86234.addClef('percussion');
const keysmo86234 = new VF.KeySignature('F');
keysmo86234.addToStave(stavesmo86234);
stavesmo86234.setContext(context);
stavesmo86234.draw();
smo86234v0.draw(context, stavesmo86234);
smo154807.setContext(context);
smo154807.draw();
smo154808.setContext(context);
smo154808.draw();
smo86218.setContext(context).draw();
const leftsmo88577stavesmo4807416 = new VF.StaveConnector(stavesmo48074, stavesmo57653).setType(3);
leftsmo88577stavesmo4807416.setContext(context).draw();
const leftsmo88577stavesmo5995316 = new VF.StaveConnector(stavesmo59953, stavesmo67052).setType(3);
leftsmo88577stavesmo5995316.setContext(context).draw();
const leftsmo88577stavesmo6945816 = new VF.StaveConnector(stavesmo69458, stavesmo76512).setType(3);
leftsmo88577stavesmo6945816.setContext(context).draw();
const fmtsmo4809714 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo48097v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo48097v0ar = [];
const smo48075 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo48075'] = smo48075;
smo48075.setAttribute('id', 'smo48075');
smo48097v0ar.push(smo48075);
const smo48076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo48076'] = smo48076;
smo48076.setAttribute('id', 'smo48076');
const  smo163011 = new VF.Articulation('a.').setPosition(3);
smo48076.addModifier(smo163011, 0);
smo48097v0ar.push(smo48076);
const smo48078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo48078'] = smo48078;
smo48078.setAttribute('id', 'smo48078');
const  smo163012 = new VF.Articulation('a.').setPosition(3);
smo48078.addModifier(smo163012, 0);
smo48097v0ar.push(smo48078);
const smo48080 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo48080'] = smo48080;
smo48080.setAttribute('id', 'smo48080');
const  smo163013 = new VF.Articulation('a.').setPosition(3);
smo48080.addModifier(smo163013, 0);
smo48097v0ar.push(smo48080);
smo48097v0.addTickables(smo48097v0ar)
fmtsmo4809714.joinVoices([smo48097v0]);
const fmtsmo5052414 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo50524v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo50524v0ar = [];
const smo50502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo50502'] = smo50502;
smo50502.setAttribute('id', 'smo50502');
smo50524v0ar.push(smo50502);
const smo50503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo50503'] = smo50503;
smo50503.setAttribute('id', 'smo50503');
const  smo163014 = new VF.Articulation('a.').setPosition(3);
smo50503.addModifier(smo163014, 0);
smo50524v0ar.push(smo50503);
const smo50505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo50505'] = smo50505;
smo50505.setAttribute('id', 'smo50505');
const  smo163015 = new VF.Articulation('a.').setPosition(3);
smo50505.addModifier(smo163015, 0);
smo50524v0ar.push(smo50505);
const smo50507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo50507'] = smo50507;
smo50507.setAttribute('id', 'smo50507');
const  smo163016 = new VF.Articulation('a.').setPosition(3);
smo50507.addModifier(smo163016, 0);
smo50524v0ar.push(smo50507);
smo50524v0.addTickables(smo50524v0ar)
fmtsmo5052414.joinVoices([smo50524v0]);
const fmtsmo5294214 = new VF.Formatter();
//
// voices and notes for stave 2 14
const smo52942v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo52942v0ar = [];
const smo52920 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo52920'] = smo52920;
smo52920.setAttribute('id', 'smo52920');
smo52942v0ar.push(smo52920);
const smo52921 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo52921'] = smo52921;
smo52921.setAttribute('id', 'smo52921');
const  smo163017 = new VF.Articulation('a.').setPosition(3);
smo52921.addModifier(smo163017, 0);
smo52942v0ar.push(smo52921);
const smo52923 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo52923'] = smo52923;
smo52923.setAttribute('id', 'smo52923');
const  smo163018 = new VF.Articulation('a.').setPosition(3);
smo52923.addModifier(smo163018, 0);
smo52942v0ar.push(smo52923);
const smo52925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo52925'] = smo52925;
smo52925.setAttribute('id', 'smo52925');
const  smo163019 = new VF.Articulation('a.').setPosition(3);
smo52925.addModifier(smo163019, 0);
smo52942v0ar.push(smo52925);
smo52942v0.addTickables(smo52942v0ar)
fmtsmo5294214.joinVoices([smo52942v0]);
const fmtsmo5531614 = new VF.Formatter();
//
// voices and notes for stave 3 14
const smo55316v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo55316v0ar = [];
const smo55294 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo55294'] = smo55294;
smo55294.setAttribute('id', 'smo55294');
smo55316v0ar.push(smo55294);
const smo55295 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo55295'] = smo55295;
smo55295.setAttribute('id', 'smo55295');
const  smo163020 = new VF.Articulation('a.').setPosition(3);
smo55295.addModifier(smo163020, 0);
smo55316v0ar.push(smo55295);
const smo55297 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo55297'] = smo55297;
smo55297.setAttribute('id', 'smo55297');
const  smo163021 = new VF.Articulation('a.').setPosition(3);
smo55297.addModifier(smo163021, 0);
smo55316v0ar.push(smo55297);
const smo55299 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo55299'] = smo55299;
smo55299.setAttribute('id', 'smo55299');
const  smo163022 = new VF.Articulation('a.').setPosition(3);
smo55299.addModifier(smo163022, 0);
smo55316v0ar.push(smo55299);
smo55316v0.addTickables(smo55316v0ar)
fmtsmo5531614.joinVoices([smo55316v0]);
const fmtsmo5767314 = new VF.Formatter();
//
// voices and notes for stave 4 14
const smo57673v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57673v0ar = [];
const smo57654 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo57654'] = smo57654;
smo57654.setAttribute('id', 'smo57654');
smo57673v0ar.push(smo57654);
const smo57655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo57655'] = smo57655;
smo57655.setAttribute('id', 'smo57655');
smo57673v0ar.push(smo57655);
const smo57656 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo57656'] = smo57656;
smo57656.setAttribute('id', 'smo57656');
smo57673v0ar.push(smo57656);
const smo57657 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo57657'] = smo57657;
smo57657.setAttribute('id', 'smo57657');
smo57673v0ar.push(smo57657);
smo57673v0.addTickables(smo57673v0ar)
fmtsmo5767314.joinVoices([smo57673v0]);
const fmtsmo5997514 = new VF.Formatter();
//
// voices and notes for stave 5 14
const smo59975v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59975v0ar = [];
const smo59954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo59954'] = smo59954;
smo59954.setAttribute('id', 'smo59954');
smo59975v0ar.push(smo59954);
const smo59955 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo59955'] = smo59955;
smo59955.setAttribute('id', 'smo59955');
smo59975v0ar.push(smo59955);
const smo59956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo59956'] = smo59956;
smo59956.setAttribute('id', 'smo59956');
smo59975v0ar.push(smo59956);
const smo59957 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo59957'] = smo59957;
smo59957.setAttribute('id', 'smo59957');
smo59975v0ar.push(smo59957);
const smo59958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo59958'] = smo59958;
smo59958.setAttribute('id', 'smo59958');
smo59975v0ar.push(smo59958);
const smo59959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo59959'] = smo59959;
smo59959.setAttribute('id', 'smo59959');
smo59975v0ar.push(smo59959);
smo59975v0.addTickables(smo59975v0ar)
fmtsmo5997514.joinVoices([smo59975v0]);
const fmtsmo6238114 = new VF.Formatter();
//
// voices and notes for stave 6 14
const smo62381v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62381v0ar = [];
const smo62360 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo62360'] = smo62360;
smo62360.setAttribute('id', 'smo62360');
smo62381v0ar.push(smo62360);
const smo62361 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo62361'] = smo62361;
smo62361.setAttribute('id', 'smo62361');
smo62381v0ar.push(smo62361);
const smo62362 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo62362'] = smo62362;
smo62362.setAttribute('id', 'smo62362');
smo62381v0ar.push(smo62362);
const smo62363 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo62363'] = smo62363;
smo62363.setAttribute('id', 'smo62363');
smo62381v0ar.push(smo62363);
const smo62364 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo62364'] = smo62364;
smo62364.setAttribute('id', 'smo62364');
smo62381v0ar.push(smo62364);
const smo62365 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo62365'] = smo62365;
smo62365.setAttribute('id', 'smo62365');
smo62381v0ar.push(smo62365);
smo62381v0.addTickables(smo62381v0ar)
fmtsmo6238114.joinVoices([smo62381v0]);
const fmtsmo6471914 = new VF.Formatter();
//
// voices and notes for stave 7 14
const smo64719v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64719v0ar = [];
const smo64703 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64703'] = smo64703;
smo64703.setAttribute('id', 'smo64703');
smo64719v0ar.push(smo64703);
smo64719v0.addTickables(smo64719v0ar)
fmtsmo6471914.joinVoices([smo64719v0]);
const fmtsmo6706914 = new VF.Formatter();
//
// voices and notes for stave 8 14
const smo67069v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67069v0ar = [];
const smo67053 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo67053'] = smo67053;
smo67053.setAttribute('id', 'smo67053');
smo67069v0ar.push(smo67053);
smo67069v0.addTickables(smo67069v0ar)
fmtsmo6706914.joinVoices([smo67069v0]);
const fmtsmo6948014 = new VF.Formatter();
//
// voices and notes for stave 9 14
const smo69480v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69480v0ar = [];
const smo69459 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo69459'] = smo69459;
smo69459.setAttribute('id', 'smo69459');
smo69480v0ar.push(smo69459);
const smo69460 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo69460'] = smo69460;
smo69460.setAttribute('id', 'smo69460');
smo69480v0ar.push(smo69460);
const smo69461 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo69461'] = smo69461;
smo69461.setAttribute('id', 'smo69461');
smo69480v0ar.push(smo69461);
const smo69462 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo69462'] = smo69462;
smo69462.setAttribute('id', 'smo69462');
smo69480v0ar.push(smo69462);
const smo69463 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo69463'] = smo69463;
smo69463.setAttribute('id', 'smo69463');
smo69480v0ar.push(smo69463);
const smo69464 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo69464'] = smo69464;
smo69464.setAttribute('id', 'smo69464');
smo69480v0ar.push(smo69464);
smo69480v0.addTickables(smo69480v0ar)
fmtsmo6948014.joinVoices([smo69480v0]);
const fmtsmo7185314 = new VF.Formatter();
//
// voices and notes for stave 10 14
const smo71853v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo71853v0ar = [];
const smo71832 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo71832'] = smo71832;
smo71832.setAttribute('id', 'smo71832');
smo71853v0ar.push(smo71832);
const smo71833 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo71833'] = smo71833;
smo71833.setAttribute('id', 'smo71833');
smo71853v0ar.push(smo71833);
const smo71834 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo71834'] = smo71834;
smo71834.setAttribute('id', 'smo71834');
smo71853v0ar.push(smo71834);
const smo71835 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo71835'] = smo71835;
smo71835.setAttribute('id', 'smo71835');
smo71853v0ar.push(smo71835);
const smo71836 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo71836'] = smo71836;
smo71836.setAttribute('id', 'smo71836');
smo71853v0ar.push(smo71836);
const smo71837 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo71837'] = smo71837;
smo71837.setAttribute('id', 'smo71837');
smo71853v0ar.push(smo71837);
smo71853v0.addTickables(smo71853v0ar)
fmtsmo7185314.joinVoices([smo71853v0]);
const fmtsmo7419914 = new VF.Formatter();
//
// voices and notes for stave 11 14
const smo74199v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74199v0ar = [];
const smo74178 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo74178'] = smo74178;
smo74178.setAttribute('id', 'smo74178');
smo74199v0ar.push(smo74178);
const smo74179 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo74179'] = smo74179;
smo74179.setAttribute('id', 'smo74179');
smo74199v0ar.push(smo74179);
const smo74180 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo74180'] = smo74180;
smo74180.setAttribute('id', 'smo74180');
smo74199v0ar.push(smo74180);
const smo74181 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo74181'] = smo74181;
smo74181.setAttribute('id', 'smo74181');
smo74199v0ar.push(smo74181);
const smo74182 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo74182'] = smo74182;
smo74182.setAttribute('id', 'smo74182');
smo74199v0ar.push(smo74182);
const smo74183 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo74183'] = smo74183;
smo74183.setAttribute('id', 'smo74183');
smo74199v0ar.push(smo74183);
smo74199v0.addTickables(smo74199v0ar)
fmtsmo7419914.joinVoices([smo74199v0]);
const fmtsmo7653214 = new VF.Formatter();
//
// voices and notes for stave 12 14
const smo76532v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76532v0ar = [];
const smo76513 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo76513'] = smo76513;
smo76513.setAttribute('id', 'smo76513');
smo76532v0ar.push(smo76513);
const smo76514 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo76514'] = smo76514;
smo76514.setAttribute('id', 'smo76514');
smo76532v0ar.push(smo76514);
const smo76515 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo76515'] = smo76515;
smo76515.setAttribute('id', 'smo76515');
smo76532v0ar.push(smo76515);
const smo76516 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo76516'] = smo76516;
smo76516.setAttribute('id', 'smo76516');
smo76532v0ar.push(smo76516);
smo76532v0.addTickables(smo76532v0ar)
fmtsmo7653214.joinVoices([smo76532v0]);
const fmtsmo7886114 = new VF.Formatter();
//
// voices and notes for stave 13 14
const smo78861v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78861v0ar = [];
const smo78840 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo78840'] = smo78840;
smo78840.setAttribute('id', 'smo78840');
smo78861v0ar.push(smo78840);
const smo78841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo78841'] = smo78841;
smo78841.setAttribute('id', 'smo78841');
smo78861v0ar.push(smo78841);
const smo78842 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo78842'] = smo78842;
smo78842.setAttribute('id', 'smo78842');
smo78861v0ar.push(smo78842);
const smo78843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo78843'] = smo78843;
smo78843.setAttribute('id', 'smo78843');
smo78861v0ar.push(smo78843);
const smo78844 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo78844'] = smo78844;
smo78844.setAttribute('id', 'smo78844');
smo78861v0ar.push(smo78844);
const smo78845 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo78845'] = smo78845;
smo78845.setAttribute('id', 'smo78845');
smo78861v0ar.push(smo78845);
smo78861v0.addTickables(smo78861v0ar)
fmtsmo7886114.joinVoices([smo78861v0]);
const fmtsmo8129814 = new VF.Formatter();
//
// voices and notes for stave 14 14
const smo81298v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81298v0ar = [];
const smo81282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo81282'] = smo81282;
smo81282.setAttribute('id', 'smo81282');
smo81298v0ar.push(smo81282);
smo81298v0.addTickables(smo81298v0ar)
fmtsmo8129814.joinVoices([smo81298v0]);
const fmtsmo8381014 = new VF.Formatter();
//
// voices and notes for stave 15 14
const smo83810v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo83810v0ar = [];
const smo83791 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo83791'] = smo83791;
smo83791.setAttribute('id', 'smo83791');
smo83810v0ar.push(smo83791);
const smo83792 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo83792'] = smo83792;
smo83792.setAttribute('id', 'smo83792');
smo83810v0ar.push(smo83792);
const smo83793 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo83793'] = smo83793;
smo83793.setAttribute('id', 'smo83793');
smo83810v0ar.push(smo83793);
const smo83794 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo83794'] = smo83794;
smo83794.setAttribute('id', 'smo83794');
smo83810v0ar.push(smo83794);
smo83810v0.addTickables(smo83810v0ar)
fmtsmo8381014.joinVoices([smo83810v0]);
const fmtsmo8626114 = new VF.Formatter();
//
// voices and notes for stave 16 14
const smo86261v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo86261v0ar = [];
const smo86235 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86235'] = smo86235;
smo86235.setAttribute('id', 'smo86235');
const smo862350acc = new VF.Accidental('n');
smo86235.addModifier(smo862350acc, 0);
smo86261v0ar.push(smo86235);
const smo86236 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86236'] = smo86236;
smo86236.setAttribute('id', 'smo86236');
smo86261v0ar.push(smo86236);
const smo86237 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86237'] = smo86237;
smo86237.setAttribute('id', 'smo86237');
smo86261v0ar.push(smo86237);
const smo86238 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86238'] = smo86238;
smo86238.setAttribute('id', 'smo86238');
smo86261v0ar.push(smo86238);
const smo86239 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86239'] = smo86239;
smo86239.setAttribute('id', 'smo86239');
smo86261v0ar.push(smo86239);
const smo86240 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86240'] = smo86240;
smo86240.setAttribute('id', 'smo86240');
smo86261v0ar.push(smo86240);
const smo86241 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo86241'] = smo86241;
smo86241.setAttribute('id', 'smo86241');
smo86261v0ar.push(smo86241);
const smo86242 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86242'] = smo86242;
smo86242.setAttribute('id', 'smo86242');
smo86261v0ar.push(smo86242);
const smo86243 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo86243'] = smo86243;
smo86243.setAttribute('id', 'smo86243');
smo86261v0ar.push(smo86243);
const smo86244 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86244'] = smo86244;
smo86244.setAttribute('id', 'smo86244');
smo86261v0ar.push(smo86244);
smo86261v0.addTickables(smo86261v0ar)
fmtsmo8626114.joinVoices([smo86261v0]);
// create beam groups and tuplets for format grp smo88583 before formatting
 
// formatting measures in staff group smo88583
fmtsmo4809714.format([smo48097v0,smo50524v0,smo52942v0,smo55316v0,smo57673v0], 323);
const stavesmo48097 = new VF.Stave(578, 183.2253035909339, 337);
stavesmo48097.setAttribute('id', 'stavesmo48097');
stavesmo48097.setBegBarType(VF.Barline.type.NONE);
stavesmo48097.setContext(context);
stavesmo48097.draw();
smo48097v0.draw(context, stavesmo48097);
const stavesmo50524 = new VF.Stave(578, 288.2253035909339, 337);
stavesmo50524.setAttribute('id', 'stavesmo50524');
stavesmo50524.setBegBarType(VF.Barline.type.NONE);
stavesmo50524.setContext(context);
stavesmo50524.draw();
smo50524v0.draw(context, stavesmo50524);
const stavesmo52942 = new VF.Stave(578, 379.2253035909339, 337);
stavesmo52942.setAttribute('id', 'stavesmo52942');
stavesmo52942.setBegBarType(VF.Barline.type.NONE);
stavesmo52942.setContext(context);
stavesmo52942.draw();
smo52942v0.draw(context, stavesmo52942);
const stavesmo55316 = new VF.Stave(578, 479.2253035909339, 337);
stavesmo55316.setAttribute('id', 'stavesmo55316');
stavesmo55316.setBegBarType(VF.Barline.type.NONE);
stavesmo55316.setContext(context);
stavesmo55316.draw();
smo55316v0.draw(context, stavesmo55316);
const stavesmo57673 = new VF.Stave(578, 549.2253035909339, 337);
stavesmo57673.setAttribute('id', 'stavesmo57673');
stavesmo57673.setBegBarType(VF.Barline.type.NONE);
stavesmo57673.setContext(context);
stavesmo57673.draw();
smo57673v0.draw(context, stavesmo57673);
// create beam groups and tuplets for format grp smo88585 before formatting
const dirsmo154821 = smo59955.getStemDirection();
smo59955.setStemDirection(dirsmo154821);
smo59956.setStemDirection(dirsmo154821);
const smo154821 = new VF.Beam([smo59955,smo59956]);
const dirsmo154822 = smo59957.getStemDirection();
smo59957.setStemDirection(dirsmo154822);
smo59958.setStemDirection(dirsmo154822);
const smo154822 = new VF.Beam([smo59957,smo59958]);
const dirsmo154825 = smo62361.getStemDirection();
smo62361.setStemDirection(dirsmo154825);
smo62362.setStemDirection(dirsmo154825);
const smo154825 = new VF.Beam([smo62361,smo62362]);
const dirsmo154826 = smo62363.getStemDirection();
smo62363.setStemDirection(dirsmo154826);
smo62364.setStemDirection(dirsmo154826);
const smo154826 = new VF.Beam([smo62363,smo62364]);
 
// formatting measures in staff group smo88585
fmtsmo5997514.format([smo59975v0,smo62381v0,smo64719v0,smo67069v0], 323);
const stavesmo59975 = new VF.Stave(578, 630.2253035909339, 337);
stavesmo59975.setAttribute('id', 'stavesmo59975');
stavesmo59975.setBegBarType(VF.Barline.type.NONE);
stavesmo59975.setContext(context);
stavesmo59975.draw();
smo59975v0.draw(context, stavesmo59975);
smo154821.setContext(context);
smo154821.draw();
smo154822.setContext(context);
smo154822.draw();
const stavesmo62381 = new VF.Stave(578, 700.2253035909339, 337);
stavesmo62381.setAttribute('id', 'stavesmo62381');
stavesmo62381.setBegBarType(VF.Barline.type.NONE);
stavesmo62381.setContext(context);
stavesmo62381.draw();
smo62381v0.draw(context, stavesmo62381);
smo154825.setContext(context);
smo154825.draw();
smo154826.setContext(context);
smo154826.draw();
const stavesmo64719 = new VF.Stave(578, 761.2253035909339, 337);
stavesmo64719.setAttribute('id', 'stavesmo64719');
stavesmo64719.setBegBarType(VF.Barline.type.NONE);
stavesmo64719.setContext(context);
stavesmo64719.draw();
smo64719v0.draw(context, stavesmo64719);
const stavesmo67069 = new VF.Stave(578, 831.2253035909339, 337);
stavesmo67069.setAttribute('id', 'stavesmo67069');
stavesmo67069.setBegBarType(VF.Barline.type.NONE);
stavesmo67069.setContext(context);
stavesmo67069.draw();
smo67069v0.draw(context, stavesmo67069);
// create beam groups and tuplets for format grp smo88587 before formatting
const dirsmo154833 = smo69460.getStemDirection();
smo69460.setStemDirection(dirsmo154833);
smo69461.setStemDirection(dirsmo154833);
const smo154833 = new VF.Beam([smo69460,smo69461]);
const dirsmo154834 = smo69462.getStemDirection();
smo69462.setStemDirection(dirsmo154834);
smo69463.setStemDirection(dirsmo154834);
const smo154834 = new VF.Beam([smo69462,smo69463]);
const dirsmo154837 = smo71833.getStemDirection();
smo71833.setStemDirection(dirsmo154837);
smo71834.setStemDirection(dirsmo154837);
const smo154837 = new VF.Beam([smo71833,smo71834]);
const dirsmo154838 = smo71835.getStemDirection();
smo71835.setStemDirection(dirsmo154838);
smo71836.setStemDirection(dirsmo154838);
const smo154838 = new VF.Beam([smo71835,smo71836]);
const dirsmo154841 = smo74179.getStemDirection();
smo74179.setStemDirection(dirsmo154841);
smo74180.setStemDirection(dirsmo154841);
const smo154841 = new VF.Beam([smo74179,smo74180]);
const dirsmo154842 = smo74181.getStemDirection();
smo74181.setStemDirection(dirsmo154842);
smo74182.setStemDirection(dirsmo154842);
const smo154842 = new VF.Beam([smo74181,smo74182]);
 
// formatting measures in staff group smo88587
fmtsmo6948014.format([smo69480v0,smo71853v0,smo74199v0,smo76532v0], 323);
const stavesmo69480 = new VF.Stave(578, 936.2253035909339, 337);
stavesmo69480.setAttribute('id', 'stavesmo69480');
stavesmo69480.setBegBarType(VF.Barline.type.NONE);
stavesmo69480.setContext(context);
stavesmo69480.draw();
smo69480v0.draw(context, stavesmo69480);
smo154833.setContext(context);
smo154833.draw();
smo154834.setContext(context);
smo154834.draw();
const stavesmo71853 = new VF.Stave(578, 1023.2253035909339, 337);
stavesmo71853.setAttribute('id', 'stavesmo71853');
stavesmo71853.setBegBarType(VF.Barline.type.NONE);
stavesmo71853.setContext(context);
stavesmo71853.draw();
smo71853v0.draw(context, stavesmo71853);
smo154837.setContext(context);
smo154837.draw();
smo154838.setContext(context);
smo154838.draw();
const stavesmo74199 = new VF.Stave(578, 1128.225303590934, 337);
stavesmo74199.setAttribute('id', 'stavesmo74199');
stavesmo74199.setBegBarType(VF.Barline.type.NONE);
stavesmo74199.setContext(context);
stavesmo74199.draw();
smo74199v0.draw(context, stavesmo74199);
smo154841.setContext(context);
smo154841.draw();
smo154842.setContext(context);
smo154842.draw();
const stavesmo76532 = new VF.Stave(578, 1213.225303590934, 337);
stavesmo76532.setAttribute('id', 'stavesmo76532');
stavesmo76532.setBegBarType(VF.Barline.type.NONE);
stavesmo76532.setContext(context);
stavesmo76532.draw();
smo76532v0.draw(context, stavesmo76532);
// create beam groups and tuplets for format grp smo81038 before formatting
const dirsmo154847 = smo78841.getStemDirection();
smo78841.setStemDirection(dirsmo154847);
smo78842.setStemDirection(dirsmo154847);
const smo154847 = new VF.Beam([smo78841,smo78842]);
const dirsmo154848 = smo78843.getStemDirection();
smo78843.setStemDirection(dirsmo154848);
smo78844.setStemDirection(dirsmo154848);
const smo154848 = new VF.Beam([smo78843,smo78844]);
 
// formatting measures in staff group smo81038
fmtsmo7886114.format([smo78861v0], 323);
const stavesmo78861 = new VF.Stave(578, 1290.225303590934, 337);
stavesmo78861.setAttribute('id', 'stavesmo78861');
stavesmo78861.setBegBarType(VF.Barline.type.NONE);
stavesmo78861.setContext(context);
stavesmo78861.draw();
smo78861v0.draw(context, stavesmo78861);
smo154847.setContext(context);
smo154847.draw();
smo154848.setContext(context);
smo154848.draw();
// create beam groups and tuplets for format grp smo83506 before formatting
 
// formatting measures in staff group smo83506
fmtsmo8129814.format([smo81298v0], 323);
const stavesmo81298 = new VF.Stave(578, 1373.225303590934, 337);
stavesmo81298.setAttribute('id', 'stavesmo81298');
stavesmo81298.setBegBarType(VF.Barline.type.NONE);
stavesmo81298.setContext(context);
stavesmo81298.draw();
smo81298v0.draw(context, stavesmo81298);
// create beam groups and tuplets for format grp smo85864 before formatting
 
// formatting measures in staff group smo85864
fmtsmo8381014.format([smo83810v0], 323);
const stavesmo83810 = new VF.Stave(578, 1478.225303590934, 337);
stavesmo83810.setAttribute('id', 'stavesmo83810');
stavesmo83810.setBegBarType(VF.Barline.type.NONE);
stavesmo83810.setContext(context);
stavesmo83810.draw();
smo83810v0.draw(context, stavesmo83810);
// create beam groups and tuplets for format grp smo88577 before formatting
const dirsmo154855 = smo86235.getStemDirection();
smo86235.setStemDirection(dirsmo154855);
smo86236.setStemDirection(dirsmo154855);
smo86237.setStemDirection(dirsmo154855);
smo86238.setStemDirection(dirsmo154855);
const smo154855 = new VF.Beam([smo86235,smo86236,smo86237,smo86238]);
const dirsmo154856 = smo86239.getStemDirection();
smo86239.setStemDirection(dirsmo154856);
smo86240.setStemDirection(dirsmo154856);
const smo154856 = new VF.Beam([smo86239,smo86240]);
const smo86245 = new VF.Tuplet([smo86236,smo86237,smo86238], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo88577
fmtsmo8626114.format([smo86261v0], 323);
const stavesmo86261 = new VF.Stave(578, 1555.225303590934, 337);
stavesmo86261.setAttribute('id', 'stavesmo86261');
stavesmo86261.setBegBarType(VF.Barline.type.NONE);
stavesmo86261.setContext(context);
stavesmo86261.draw();
smo86261v0.draw(context, stavesmo86261);
smo154855.setContext(context);
smo154855.draw();
smo154856.setContext(context);
smo154856.draw();
smo86245.setContext(context).draw();
const fmtsmo4812415 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo48124v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo48124v0ar = [];
const smo48098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo48098'] = smo48098;
smo48098.setAttribute('id', 'smo48098');
smo48124v0ar.push(smo48098);
const smo48099 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo48099'] = smo48099;
smo48099.setAttribute('id', 'smo48099');
smo48124v0ar.push(smo48099);
const smo48100 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo48100'] = smo48100;
smo48100.setAttribute('id', 'smo48100');
smo48124v0ar.push(smo48100);
const smo48101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo48101'] = smo48101;
smo48101.setAttribute('id', 'smo48101');
smo48124v0ar.push(smo48101);
const smo48102 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo48102'] = smo48102;
smo48102.setAttribute('id', 'smo48102');
smo48124v0ar.push(smo48102);
const smo48103 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo48103'] = smo48103;
smo48103.setAttribute('id', 'smo48103');
smo48124v0ar.push(smo48103);
const smo48104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo48104'] = smo48104;
smo48104.setAttribute('id', 'smo48104');
smo48124v0ar.push(smo48104);
const smo48105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo48105'] = smo48105;
smo48105.setAttribute('id', 'smo48105');
smo48124v0ar.push(smo48105);
const smo48106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo48106'] = smo48106;
smo48106.setAttribute('id', 'smo48106');
smo48124v0ar.push(smo48106);
const smo48107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo48107'] = smo48107;
smo48107.setAttribute('id', 'smo48107');
smo48124v0ar.push(smo48107);
const smo48108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo48108'] = smo48108;
smo48108.setAttribute('id', 'smo48108');
smo48124v0ar.push(smo48108);
smo48124v0.addTickables(smo48124v0ar)
fmtsmo4812415.joinVoices([smo48124v0]);
const fmtsmo5055115 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo50551v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo50551v0ar = [];
const smo50525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo50525'] = smo50525;
smo50525.setAttribute('id', 'smo50525');
smo50551v0ar.push(smo50525);
const smo50526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo50526'] = smo50526;
smo50526.setAttribute('id', 'smo50526');
smo50551v0ar.push(smo50526);
const smo50527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo50527'] = smo50527;
smo50527.setAttribute('id', 'smo50527');
smo50551v0ar.push(smo50527);
const smo50528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo50528'] = smo50528;
smo50528.setAttribute('id', 'smo50528');
smo50551v0ar.push(smo50528);
const smo50529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo50529'] = smo50529;
smo50529.setAttribute('id', 'smo50529');
smo50551v0ar.push(smo50529);
const smo50530 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo50530'] = smo50530;
smo50530.setAttribute('id', 'smo50530');
smo50551v0ar.push(smo50530);
const smo50531 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo50531'] = smo50531;
smo50531.setAttribute('id', 'smo50531');
smo50551v0ar.push(smo50531);
const smo50532 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo50532'] = smo50532;
smo50532.setAttribute('id', 'smo50532');
smo50551v0ar.push(smo50532);
const smo50533 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo50533'] = smo50533;
smo50533.setAttribute('id', 'smo50533');
smo50551v0ar.push(smo50533);
const smo50534 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo50534'] = smo50534;
smo50534.setAttribute('id', 'smo50534');
smo50551v0ar.push(smo50534);
const smo50535 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo50535'] = smo50535;
smo50535.setAttribute('id', 'smo50535');
smo50551v0ar.push(smo50535);
smo50551v0.addTickables(smo50551v0ar)
fmtsmo5055115.joinVoices([smo50551v0]);
const fmtsmo5296715 = new VF.Formatter();
//
// voices and notes for stave 2 15
const smo52967v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo52967v0ar = [];
const smo52943 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo52943'] = smo52943;
smo52943.setAttribute('id', 'smo52943');
smo52967v0ar.push(smo52943);
const smo52944 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo52944'] = smo52944;
smo52944.setAttribute('id', 'smo52944');
smo52967v0ar.push(smo52944);
const smo52945 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo52945'] = smo52945;
smo52945.setAttribute('id', 'smo52945');
smo52967v0ar.push(smo52945);
const smo52946 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo52946'] = smo52946;
smo52946.setAttribute('id', 'smo52946');
smo52967v0ar.push(smo52946);
const smo52947 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo52947'] = smo52947;
smo52947.setAttribute('id', 'smo52947');
smo52967v0ar.push(smo52947);
const smo52948 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo52948'] = smo52948;
smo52948.setAttribute('id', 'smo52948');
smo52967v0ar.push(smo52948);
const smo52949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo52949'] = smo52949;
smo52949.setAttribute('id', 'smo52949');
smo52967v0ar.push(smo52949);
const smo52950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo52950'] = smo52950;
smo52950.setAttribute('id', 'smo52950');
smo52967v0ar.push(smo52950);
const smo52951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo52951'] = smo52951;
smo52951.setAttribute('id', 'smo52951');
smo52967v0ar.push(smo52951);
smo52967v0.addTickables(smo52967v0ar)
fmtsmo5296715.joinVoices([smo52967v0]);
const fmtsmo5534115 = new VF.Formatter();
//
// voices and notes for stave 3 15
const smo55341v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo55341v0ar = [];
const smo55317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo55317'] = smo55317;
smo55317.setAttribute('id', 'smo55317');
smo55341v0ar.push(smo55317);
const smo55318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo55318'] = smo55318;
smo55318.setAttribute('id', 'smo55318');
smo55341v0ar.push(smo55318);
const smo55319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo55319'] = smo55319;
smo55319.setAttribute('id', 'smo55319');
smo55341v0ar.push(smo55319);
const smo55320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo55320'] = smo55320;
smo55320.setAttribute('id', 'smo55320');
smo55341v0ar.push(smo55320);
const smo55321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo55321'] = smo55321;
smo55321.setAttribute('id', 'smo55321');
smo55341v0ar.push(smo55321);
const smo55322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo55322'] = smo55322;
smo55322.setAttribute('id', 'smo55322');
smo55341v0ar.push(smo55322);
const smo55323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo55323'] = smo55323;
smo55323.setAttribute('id', 'smo55323');
smo55341v0ar.push(smo55323);
const smo55324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo55324'] = smo55324;
smo55324.setAttribute('id', 'smo55324');
smo55341v0ar.push(smo55324);
const smo55325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo55325'] = smo55325;
smo55325.setAttribute('id', 'smo55325');
smo55341v0ar.push(smo55325);
smo55341v0.addTickables(smo55341v0ar)
fmtsmo5534115.joinVoices([smo55341v0]);
const fmtsmo5769315 = new VF.Formatter();
//
// voices and notes for stave 4 15
const smo57693v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57693v0ar = [];
const smo57674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo57674'] = smo57674;
smo57674.setAttribute('id', 'smo57674');
const  smo163057 = new VF.Articulation('a.').setPosition(3);
smo57674.addModifier(smo163057, 0);
smo57693v0ar.push(smo57674);
const smo57676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo57676'] = smo57676;
smo57676.setAttribute('id', 'smo57676');
smo57693v0ar.push(smo57676);
const smo57677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo57677'] = smo57677;
smo57677.setAttribute('id', 'smo57677');
smo57693v0ar.push(smo57677);
smo57693v0.addTickables(smo57693v0ar)
fmtsmo5769315.joinVoices([smo57693v0]);
const fmtsmo5999915 = new VF.Formatter();
//
// voices and notes for stave 5 15
const smo59999v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59999v0ar = [];
const smo59976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59976'] = smo59976;
smo59976.setAttribute('id', 'smo59976');
smo59999v0ar.push(smo59976);
const smo59977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo59977'] = smo59977;
smo59977.setAttribute('id', 'smo59977');
smo59999v0ar.push(smo59977);
const smo59978 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo59978'] = smo59978;
smo59978.setAttribute('id', 'smo59978');
smo59999v0ar.push(smo59978);
const smo59979 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo59979'] = smo59979;
smo59979.setAttribute('id', 'smo59979');
smo59999v0ar.push(smo59979);
const smo59980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo59980'] = smo59980;
smo59980.setAttribute('id', 'smo59980');
smo59999v0ar.push(smo59980);
const smo59981 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo59981'] = smo59981;
smo59981.setAttribute('id', 'smo59981');
smo59999v0ar.push(smo59981);
const smo59982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo59982'] = smo59982;
smo59982.setAttribute('id', 'smo59982');
smo59999v0ar.push(smo59982);
const smo59983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo59983'] = smo59983;
smo59983.setAttribute('id', 'smo59983');
smo59999v0ar.push(smo59983);
smo59999v0.addTickables(smo59999v0ar)
fmtsmo5999915.joinVoices([smo59999v0]);
const fmtsmo6240515 = new VF.Formatter();
//
// voices and notes for stave 6 15
const smo62405v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62405v0ar = [];
const smo62382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62382'] = smo62382;
smo62382.setAttribute('id', 'smo62382');
smo62405v0ar.push(smo62382);
const smo62383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo62383'] = smo62383;
smo62383.setAttribute('id', 'smo62383');
smo62405v0ar.push(smo62383);
const smo62384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo62384'] = smo62384;
smo62384.setAttribute('id', 'smo62384');
smo62405v0ar.push(smo62384);
const smo62385 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo62385'] = smo62385;
smo62385.setAttribute('id', 'smo62385');
smo62405v0ar.push(smo62385);
const smo62386 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo62386'] = smo62386;
smo62386.setAttribute('id', 'smo62386');
smo62405v0ar.push(smo62386);
const smo62387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo62387'] = smo62387;
smo62387.setAttribute('id', 'smo62387');
smo62405v0ar.push(smo62387);
const smo62388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo62388'] = smo62388;
smo62388.setAttribute('id', 'smo62388');
smo62405v0ar.push(smo62388);
const smo62389 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo62389'] = smo62389;
smo62389.setAttribute('id', 'smo62389');
smo62405v0ar.push(smo62389);
smo62405v0.addTickables(smo62405v0ar)
fmtsmo6240515.joinVoices([smo62405v0]);
const fmtsmo6473615 = new VF.Formatter();
//
// voices and notes for stave 7 15
const smo64736v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64736v0ar = [];
const smo64720 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64720'] = smo64720;
smo64720.setAttribute('id', 'smo64720');
smo64736v0ar.push(smo64720);
smo64736v0.addTickables(smo64736v0ar)
fmtsmo6473615.joinVoices([smo64736v0]);
const fmtsmo6708615 = new VF.Formatter();
//
// voices and notes for stave 8 15
const smo67086v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67086v0ar = [];
const smo67070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo67070'] = smo67070;
smo67070.setAttribute('id', 'smo67070');
smo67086v0ar.push(smo67070);
smo67086v0.addTickables(smo67086v0ar)
fmtsmo6708615.joinVoices([smo67086v0]);
const fmtsmo6950415 = new VF.Formatter();
//
// voices and notes for stave 9 15
const smo69504v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69504v0ar = [];
const smo69481 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo69481'] = smo69481;
smo69481.setAttribute('id', 'smo69481');
smo69504v0ar.push(smo69481);
const smo69482 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo69482'] = smo69482;
smo69482.setAttribute('id', 'smo69482');
smo69504v0ar.push(smo69482);
const smo69483 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo69483'] = smo69483;
smo69483.setAttribute('id', 'smo69483');
smo69504v0ar.push(smo69483);
const smo69484 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo69484'] = smo69484;
smo69484.setAttribute('id', 'smo69484');
smo69504v0ar.push(smo69484);
const smo69485 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo69485'] = smo69485;
smo69485.setAttribute('id', 'smo69485');
smo69504v0ar.push(smo69485);
const smo69486 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo69486'] = smo69486;
smo69486.setAttribute('id', 'smo69486');
smo69504v0ar.push(smo69486);
const smo69487 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo69487'] = smo69487;
smo69487.setAttribute('id', 'smo69487');
smo69504v0ar.push(smo69487);
const smo69488 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo69488'] = smo69488;
smo69488.setAttribute('id', 'smo69488');
smo69504v0ar.push(smo69488);
smo69504v0.addTickables(smo69504v0ar)
fmtsmo6950415.joinVoices([smo69504v0]);
const fmtsmo7187715 = new VF.Formatter();
//
// voices and notes for stave 10 15
const smo71877v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo71877v0ar = [];
const smo71854 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo71854'] = smo71854;
smo71854.setAttribute('id', 'smo71854');
smo71877v0ar.push(smo71854);
const smo71855 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo71855'] = smo71855;
smo71855.setAttribute('id', 'smo71855');
smo71877v0ar.push(smo71855);
const smo71856 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo71856'] = smo71856;
smo71856.setAttribute('id', 'smo71856');
smo71877v0ar.push(smo71856);
const smo71857 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo71857'] = smo71857;
smo71857.setAttribute('id', 'smo71857');
smo71877v0ar.push(smo71857);
const smo71858 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo71858'] = smo71858;
smo71858.setAttribute('id', 'smo71858');
smo71877v0ar.push(smo71858);
const smo71859 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo71859'] = smo71859;
smo71859.setAttribute('id', 'smo71859');
smo71877v0ar.push(smo71859);
const smo71860 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo71860'] = smo71860;
smo71860.setAttribute('id', 'smo71860');
smo71877v0ar.push(smo71860);
const smo71861 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo71861'] = smo71861;
smo71861.setAttribute('id', 'smo71861');
smo71877v0ar.push(smo71861);
smo71877v0.addTickables(smo71877v0ar)
fmtsmo7187715.joinVoices([smo71877v0]);
const fmtsmo7422315 = new VF.Formatter();
//
// voices and notes for stave 11 15
const smo74223v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74223v0ar = [];
const smo74200 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo74200'] = smo74200;
smo74200.setAttribute('id', 'smo74200');
smo74223v0ar.push(smo74200);
const smo74201 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo74201'] = smo74201;
smo74201.setAttribute('id', 'smo74201');
smo74223v0ar.push(smo74201);
const smo74202 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo74202'] = smo74202;
smo74202.setAttribute('id', 'smo74202');
smo74223v0ar.push(smo74202);
const smo74203 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo74203'] = smo74203;
smo74203.setAttribute('id', 'smo74203');
smo74223v0ar.push(smo74203);
const smo74204 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo74204'] = smo74204;
smo74204.setAttribute('id', 'smo74204');
smo74223v0ar.push(smo74204);
const smo74205 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo74205'] = smo74205;
smo74205.setAttribute('id', 'smo74205');
smo74223v0ar.push(smo74205);
const smo74206 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo74206'] = smo74206;
smo74206.setAttribute('id', 'smo74206');
smo74223v0ar.push(smo74206);
const smo74207 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo74207'] = smo74207;
smo74207.setAttribute('id', 'smo74207');
smo74223v0ar.push(smo74207);
smo74223v0.addTickables(smo74223v0ar)
fmtsmo7422315.joinVoices([smo74223v0]);
const fmtsmo7655215 = new VF.Formatter();
//
// voices and notes for stave 12 15
const smo76552v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76552v0ar = [];
const smo76533 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo76533'] = smo76533;
smo76533.setAttribute('id', 'smo76533');
const  smo163058 = new VF.Articulation('a.').setPosition(3);
smo76533.addModifier(smo163058, 0);
smo76552v0ar.push(smo76533);
const smo76535 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo76535'] = smo76535;
smo76535.setAttribute('id', 'smo76535');
smo76552v0ar.push(smo76535);
const smo76536 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n"]}'))
noteHash['smo76536'] = smo76536;
smo76536.setAttribute('id', 'smo76536');
smo76552v0ar.push(smo76536);
smo76552v0.addTickables(smo76552v0ar)
fmtsmo7655215.joinVoices([smo76552v0]);
const fmtsmo7888515 = new VF.Formatter();
//
// voices and notes for stave 13 15
const smo78885v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78885v0ar = [];
const smo78862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo78862'] = smo78862;
smo78862.setAttribute('id', 'smo78862');
smo78885v0ar.push(smo78862);
const smo78863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo78863'] = smo78863;
smo78863.setAttribute('id', 'smo78863');
smo78885v0ar.push(smo78863);
const smo78864 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo78864'] = smo78864;
smo78864.setAttribute('id', 'smo78864');
smo78885v0ar.push(smo78864);
const smo78865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo78865'] = smo78865;
smo78865.setAttribute('id', 'smo78865');
smo78885v0ar.push(smo78865);
const smo78866 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo78866'] = smo78866;
smo78866.setAttribute('id', 'smo78866');
smo78885v0ar.push(smo78866);
const smo78867 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo78867'] = smo78867;
smo78867.setAttribute('id', 'smo78867');
smo78885v0ar.push(smo78867);
const smo78868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo78868'] = smo78868;
smo78868.setAttribute('id', 'smo78868');
smo78885v0ar.push(smo78868);
const smo78869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo78869'] = smo78869;
smo78869.setAttribute('id', 'smo78869');
smo78885v0ar.push(smo78869);
smo78885v0.addTickables(smo78885v0ar)
fmtsmo7888515.joinVoices([smo78885v0]);
const fmtsmo8131515 = new VF.Formatter();
//
// voices and notes for stave 14 15
const smo81315v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81315v0ar = [];
const smo81299 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo81299'] = smo81299;
smo81299.setAttribute('id', 'smo81299');
smo81315v0ar.push(smo81299);
smo81315v0.addTickables(smo81315v0ar)
fmtsmo8131515.joinVoices([smo81315v0]);
const fmtsmo8383015 = new VF.Formatter();
//
// voices and notes for stave 15 15
const smo83830v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo83830v0ar = [];
const smo83811 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo83811'] = smo83811;
smo83811.setAttribute('id', 'smo83811');
const  smo163059 = new VF.Articulation('a.').setPosition(3);
smo83811.addModifier(smo163059, 0);
smo83830v0ar.push(smo83811);
const smo83813 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo83813'] = smo83813;
smo83813.setAttribute('id', 'smo83813');
smo83830v0ar.push(smo83813);
const smo83814 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo83814'] = smo83814;
smo83814.setAttribute('id', 'smo83814');
smo83830v0ar.push(smo83814);
smo83830v0.addTickables(smo83830v0ar)
fmtsmo8383015.joinVoices([smo83830v0]);
const fmtsmo8628815 = new VF.Formatter();
//
// voices and notes for stave 16 15
const smo86288v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo86288v0ar = [];
const smo86262 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86262'] = smo86262;
smo86262.setAttribute('id', 'smo86262');
const smo862620acc = new VF.Accidental('n');
smo86262.addModifier(smo862620acc, 0);
smo86288v0ar.push(smo86262);
const smo86263 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86263'] = smo86263;
smo86263.setAttribute('id', 'smo86263');
smo86288v0ar.push(smo86263);
const smo86264 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86264'] = smo86264;
smo86264.setAttribute('id', 'smo86264');
smo86288v0ar.push(smo86264);
const smo86265 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86265'] = smo86265;
smo86265.setAttribute('id', 'smo86265');
smo86288v0ar.push(smo86265);
const smo86266 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86266'] = smo86266;
smo86266.setAttribute('id', 'smo86266');
smo86288v0ar.push(smo86266);
const smo86267 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86267'] = smo86267;
smo86267.setAttribute('id', 'smo86267');
smo86288v0ar.push(smo86267);
const smo86268 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo86268'] = smo86268;
smo86268.setAttribute('id', 'smo86268');
smo86288v0ar.push(smo86268);
const smo86269 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86269'] = smo86269;
smo86269.setAttribute('id', 'smo86269');
smo86288v0ar.push(smo86269);
const smo86270 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo86270'] = smo86270;
smo86270.setAttribute('id', 'smo86270');
smo86288v0ar.push(smo86270);
const smo86271 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86271'] = smo86271;
smo86271.setAttribute('id', 'smo86271');
smo86288v0ar.push(smo86271);
smo86288v0.addTickables(smo86288v0ar)
fmtsmo8628815.joinVoices([smo86288v0]);
// create beam groups and tuplets for format grp smo88583 before formatting
const dirsmo154859 = smo48098.getStemDirection();
smo48098.setStemDirection(dirsmo154859);
smo48099.setStemDirection(dirsmo154859);
smo48100.setStemDirection(dirsmo154859);
const smo154859 = new VF.Beam([smo48098,smo48099,smo48100]);
const dirsmo154860 = smo48101.getStemDirection();
smo48101.setStemDirection(dirsmo154860);
smo48102.setStemDirection(dirsmo154860);
const smo154860 = new VF.Beam([smo48101,smo48102]);
const dirsmo154861 = smo48103.getStemDirection();
smo48103.setStemDirection(dirsmo154861);
smo48104.setStemDirection(dirsmo154861);
smo48105.setStemDirection(dirsmo154861);
const smo154861 = new VF.Beam([smo48103,smo48104,smo48105]);
const dirsmo154862 = smo48106.getStemDirection();
smo48106.setStemDirection(dirsmo154862);
smo48107.setStemDirection(dirsmo154862);
smo48108.setStemDirection(dirsmo154862);
const smo154862 = new VF.Beam([smo48106,smo48107,smo48108]);
const dirsmo154865 = smo50525.getStemDirection();
smo50525.setStemDirection(dirsmo154865);
smo50526.setStemDirection(dirsmo154865);
smo50527.setStemDirection(dirsmo154865);
const smo154865 = new VF.Beam([smo50525,smo50526,smo50527]);
const dirsmo154866 = smo50528.getStemDirection();
smo50528.setStemDirection(dirsmo154866);
smo50529.setStemDirection(dirsmo154866);
const smo154866 = new VF.Beam([smo50528,smo50529]);
const dirsmo154867 = smo50530.getStemDirection();
smo50530.setStemDirection(dirsmo154867);
smo50531.setStemDirection(dirsmo154867);
smo50532.setStemDirection(dirsmo154867);
const smo154867 = new VF.Beam([smo50530,smo50531,smo50532]);
const dirsmo154868 = smo50533.getStemDirection();
smo50533.setStemDirection(dirsmo154868);
smo50534.setStemDirection(dirsmo154868);
smo50535.setStemDirection(dirsmo154868);
const smo154868 = new VF.Beam([smo50533,smo50534,smo50535]);
const dirsmo154871 = smo52943.getStemDirection();
smo52943.setStemDirection(dirsmo154871);
smo52944.setStemDirection(dirsmo154871);
smo52945.setStemDirection(dirsmo154871);
const smo154871 = new VF.Beam([smo52943,smo52944,smo52945]);
const dirsmo154872 = smo52946.getStemDirection();
smo52946.setStemDirection(dirsmo154872);
smo52947.setStemDirection(dirsmo154872);
const smo154872 = new VF.Beam([smo52946,smo52947]);
const dirsmo154873 = smo52949.getStemDirection();
smo52949.setStemDirection(dirsmo154873);
smo52950.setStemDirection(dirsmo154873);
const smo154873 = new VF.Beam([smo52949,smo52950]);
const dirsmo154876 = smo55317.getStemDirection();
smo55317.setStemDirection(dirsmo154876);
smo55318.setStemDirection(dirsmo154876);
smo55319.setStemDirection(dirsmo154876);
const smo154876 = new VF.Beam([smo55317,smo55318,smo55319]);
const dirsmo154877 = smo55320.getStemDirection();
smo55320.setStemDirection(dirsmo154877);
smo55321.setStemDirection(dirsmo154877);
const smo154877 = new VF.Beam([smo55320,smo55321]);
const dirsmo154878 = smo55323.getStemDirection();
smo55323.setStemDirection(dirsmo154878);
smo55324.setStemDirection(dirsmo154878);
const smo154878 = new VF.Beam([smo55323,smo55324]);
 
// formatting measures in staff group smo88583
fmtsmo4812415.format([smo48124v0,smo50551v0,smo52967v0,smo55341v0,smo57693v0], 402);
const stavesmo48124 = new VF.Stave(915, 183.2253035909339, 416);
stavesmo48124.setAttribute('id', 'stavesmo48124');
stavesmo48124.setBegBarType(VF.Barline.type.NONE);
stavesmo48124.setContext(context);
stavesmo48124.draw();
smo48124v0.draw(context, stavesmo48124);
smo154859.setContext(context);
smo154859.draw();
smo154860.setContext(context);
smo154860.draw();
smo154861.setContext(context);
smo154861.draw();
smo154862.setContext(context);
smo154862.draw();
const stavesmo50551 = new VF.Stave(915, 288.2253035909339, 416);
stavesmo50551.setAttribute('id', 'stavesmo50551');
stavesmo50551.setBegBarType(VF.Barline.type.NONE);
stavesmo50551.setContext(context);
stavesmo50551.draw();
smo50551v0.draw(context, stavesmo50551);
smo154865.setContext(context);
smo154865.draw();
smo154866.setContext(context);
smo154866.draw();
smo154867.setContext(context);
smo154867.draw();
smo154868.setContext(context);
smo154868.draw();
const stavesmo52967 = new VF.Stave(915, 379.2253035909339, 416);
stavesmo52967.setAttribute('id', 'stavesmo52967');
stavesmo52967.setBegBarType(VF.Barline.type.NONE);
stavesmo52967.setContext(context);
stavesmo52967.draw();
smo52967v0.draw(context, stavesmo52967);
smo154871.setContext(context);
smo154871.draw();
smo154872.setContext(context);
smo154872.draw();
smo154873.setContext(context);
smo154873.draw();
const stavesmo55341 = new VF.Stave(915, 479.2253035909339, 416);
stavesmo55341.setAttribute('id', 'stavesmo55341');
stavesmo55341.setBegBarType(VF.Barline.type.NONE);
stavesmo55341.setContext(context);
stavesmo55341.draw();
smo55341v0.draw(context, stavesmo55341);
smo154876.setContext(context);
smo154876.draw();
smo154877.setContext(context);
smo154877.draw();
smo154878.setContext(context);
smo154878.draw();
const stavesmo57693 = new VF.Stave(915, 549.2253035909339, 416);
stavesmo57693.setAttribute('id', 'stavesmo57693');
stavesmo57693.setBegBarType(VF.Barline.type.NONE);
stavesmo57693.setContext(context);
stavesmo57693.draw();
smo57693v0.draw(context, stavesmo57693);
// create beam groups and tuplets for format grp smo88585 before formatting
const dirsmo154883 = smo59977.getStemDirection();
smo59977.setStemDirection(dirsmo154883);
smo59978.setStemDirection(dirsmo154883);
const smo154883 = new VF.Beam([smo59977,smo59978]);
const dirsmo154884 = smo59980.getStemDirection();
smo59980.setStemDirection(dirsmo154884);
smo59981.setStemDirection(dirsmo154884);
smo59982.setStemDirection(dirsmo154884);
smo59983.setStemDirection(dirsmo154884);
const smo154884 = new VF.Beam([smo59980,smo59981,smo59982,smo59983]);
const dirsmo154887 = smo62383.getStemDirection();
smo62383.setStemDirection(dirsmo154887);
smo62384.setStemDirection(dirsmo154887);
const smo154887 = new VF.Beam([smo62383,smo62384]);
const dirsmo154888 = smo62386.getStemDirection();
smo62386.setStemDirection(dirsmo154888);
smo62387.setStemDirection(dirsmo154888);
smo62388.setStemDirection(dirsmo154888);
smo62389.setStemDirection(dirsmo154888);
const smo154888 = new VF.Beam([smo62386,smo62387,smo62388,smo62389]);
 
// formatting measures in staff group smo88585
fmtsmo5999915.format([smo59999v0,smo62405v0,smo64736v0,smo67086v0], 402);
const stavesmo59999 = new VF.Stave(915, 630.2253035909339, 416);
stavesmo59999.setAttribute('id', 'stavesmo59999');
stavesmo59999.setBegBarType(VF.Barline.type.NONE);
stavesmo59999.setContext(context);
stavesmo59999.draw();
smo59999v0.draw(context, stavesmo59999);
smo154883.setContext(context);
smo154883.draw();
smo154884.setContext(context);
smo154884.draw();
const stavesmo62405 = new VF.Stave(915, 700.2253035909339, 416);
stavesmo62405.setAttribute('id', 'stavesmo62405');
stavesmo62405.setBegBarType(VF.Barline.type.NONE);
stavesmo62405.setContext(context);
stavesmo62405.draw();
smo62405v0.draw(context, stavesmo62405);
smo154887.setContext(context);
smo154887.draw();
smo154888.setContext(context);
smo154888.draw();
const stavesmo64736 = new VF.Stave(915, 761.2253035909339, 416);
stavesmo64736.setAttribute('id', 'stavesmo64736');
stavesmo64736.setBegBarType(VF.Barline.type.NONE);
stavesmo64736.setContext(context);
stavesmo64736.draw();
smo64736v0.draw(context, stavesmo64736);
const stavesmo67086 = new VF.Stave(915, 831.2253035909339, 416);
stavesmo67086.setAttribute('id', 'stavesmo67086');
stavesmo67086.setBegBarType(VF.Barline.type.NONE);
stavesmo67086.setContext(context);
stavesmo67086.draw();
smo67086v0.draw(context, stavesmo67086);
// create beam groups and tuplets for format grp smo88587 before formatting
const dirsmo154895 = smo69482.getStemDirection();
smo69482.setStemDirection(dirsmo154895);
smo69483.setStemDirection(dirsmo154895);
const smo154895 = new VF.Beam([smo69482,smo69483]);
const dirsmo154896 = smo69485.getStemDirection();
smo69485.setStemDirection(dirsmo154896);
smo69486.setStemDirection(dirsmo154896);
smo69487.setStemDirection(dirsmo154896);
smo69488.setStemDirection(dirsmo154896);
const smo154896 = new VF.Beam([smo69485,smo69486,smo69487,smo69488]);
const dirsmo154899 = smo71855.getStemDirection();
smo71855.setStemDirection(dirsmo154899);
smo71856.setStemDirection(dirsmo154899);
const smo154899 = new VF.Beam([smo71855,smo71856]);
const dirsmo154900 = smo71858.getStemDirection();
smo71858.setStemDirection(dirsmo154900);
smo71859.setStemDirection(dirsmo154900);
smo71860.setStemDirection(dirsmo154900);
smo71861.setStemDirection(dirsmo154900);
const smo154900 = new VF.Beam([smo71858,smo71859,smo71860,smo71861]);
const dirsmo154903 = smo74201.getStemDirection();
smo74201.setStemDirection(dirsmo154903);
smo74202.setStemDirection(dirsmo154903);
const smo154903 = new VF.Beam([smo74201,smo74202]);
const dirsmo154904 = smo74204.getStemDirection();
smo74204.setStemDirection(dirsmo154904);
smo74205.setStemDirection(dirsmo154904);
smo74206.setStemDirection(dirsmo154904);
smo74207.setStemDirection(dirsmo154904);
const smo154904 = new VF.Beam([smo74204,smo74205,smo74206,smo74207]);
 
// formatting measures in staff group smo88587
fmtsmo6950415.format([smo69504v0,smo71877v0,smo74223v0,smo76552v0], 402);
const stavesmo69504 = new VF.Stave(915, 936.2253035909339, 416);
stavesmo69504.setAttribute('id', 'stavesmo69504');
stavesmo69504.setBegBarType(VF.Barline.type.NONE);
stavesmo69504.setContext(context);
stavesmo69504.draw();
smo69504v0.draw(context, stavesmo69504);
smo154895.setContext(context);
smo154895.draw();
smo154896.setContext(context);
smo154896.draw();
const stavesmo71877 = new VF.Stave(915, 1023.2253035909339, 416);
stavesmo71877.setAttribute('id', 'stavesmo71877');
stavesmo71877.setBegBarType(VF.Barline.type.NONE);
stavesmo71877.setContext(context);
stavesmo71877.draw();
smo71877v0.draw(context, stavesmo71877);
smo154899.setContext(context);
smo154899.draw();
smo154900.setContext(context);
smo154900.draw();
const stavesmo74223 = new VF.Stave(915, 1128.225303590934, 416);
stavesmo74223.setAttribute('id', 'stavesmo74223');
stavesmo74223.setBegBarType(VF.Barline.type.NONE);
stavesmo74223.setContext(context);
stavesmo74223.draw();
smo74223v0.draw(context, stavesmo74223);
smo154903.setContext(context);
smo154903.draw();
smo154904.setContext(context);
smo154904.draw();
const stavesmo76552 = new VF.Stave(915, 1213.225303590934, 416);
stavesmo76552.setAttribute('id', 'stavesmo76552');
stavesmo76552.setBegBarType(VF.Barline.type.NONE);
stavesmo76552.setContext(context);
stavesmo76552.draw();
smo76552v0.draw(context, stavesmo76552);
// create beam groups and tuplets for format grp smo81038 before formatting
const dirsmo154909 = smo78863.getStemDirection();
smo78863.setStemDirection(dirsmo154909);
smo78864.setStemDirection(dirsmo154909);
const smo154909 = new VF.Beam([smo78863,smo78864]);
const dirsmo154910 = smo78866.getStemDirection();
smo78866.setStemDirection(dirsmo154910);
smo78867.setStemDirection(dirsmo154910);
smo78868.setStemDirection(dirsmo154910);
smo78869.setStemDirection(dirsmo154910);
const smo154910 = new VF.Beam([smo78866,smo78867,smo78868,smo78869]);
 
// formatting measures in staff group smo81038
fmtsmo7888515.format([smo78885v0], 402);
const stavesmo78885 = new VF.Stave(915, 1290.225303590934, 416);
stavesmo78885.setAttribute('id', 'stavesmo78885');
stavesmo78885.setBegBarType(VF.Barline.type.NONE);
stavesmo78885.setContext(context);
stavesmo78885.draw();
smo78885v0.draw(context, stavesmo78885);
smo154909.setContext(context);
smo154909.draw();
smo154910.setContext(context);
smo154910.draw();
// create beam groups and tuplets for format grp smo83506 before formatting
 
// formatting measures in staff group smo83506
fmtsmo8131515.format([smo81315v0], 402);
const stavesmo81315 = new VF.Stave(915, 1373.225303590934, 416);
stavesmo81315.setAttribute('id', 'stavesmo81315');
stavesmo81315.setBegBarType(VF.Barline.type.NONE);
stavesmo81315.setContext(context);
stavesmo81315.draw();
smo81315v0.draw(context, stavesmo81315);
// create beam groups and tuplets for format grp smo85864 before formatting
 
// formatting measures in staff group smo85864
fmtsmo8383015.format([smo83830v0], 402);
const stavesmo83830 = new VF.Stave(915, 1478.225303590934, 416);
stavesmo83830.setAttribute('id', 'stavesmo83830');
stavesmo83830.setBegBarType(VF.Barline.type.NONE);
stavesmo83830.setContext(context);
stavesmo83830.draw();
smo83830v0.draw(context, stavesmo83830);
// create beam groups and tuplets for format grp smo88577 before formatting
const dirsmo154917 = smo86262.getStemDirection();
smo86262.setStemDirection(dirsmo154917);
smo86263.setStemDirection(dirsmo154917);
smo86264.setStemDirection(dirsmo154917);
smo86265.setStemDirection(dirsmo154917);
const smo154917 = new VF.Beam([smo86262,smo86263,smo86264,smo86265]);
const dirsmo154918 = smo86266.getStemDirection();
smo86266.setStemDirection(dirsmo154918);
smo86267.setStemDirection(dirsmo154918);
const smo154918 = new VF.Beam([smo86266,smo86267]);
const smo86272 = new VF.Tuplet([smo86263,smo86264,smo86265], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo88577
fmtsmo8628815.format([smo86288v0], 402);
const stavesmo86288 = new VF.Stave(915, 1555.225303590934, 416);
stavesmo86288.setAttribute('id', 'stavesmo86288');
stavesmo86288.setBegBarType(VF.Barline.type.NONE);
stavesmo86288.setContext(context);
stavesmo86288.draw();
smo86288v0.draw(context, stavesmo86288);
smo154917.setContext(context);
smo154917.draw();
smo154918.setContext(context);
smo154918.draw();
smo86272.setContext(context).draw();
const fmtsmo4814516 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo48145v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo48145v0ar = [];
const smo48125 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo48125'] = smo48125;
smo48125.setAttribute('id', 'smo48125');
smo48145v0ar.push(smo48125);
const smo48126 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo48126'] = smo48126;
smo48126.setAttribute('id', 'smo48126');
smo48145v0ar.push(smo48126);
const smo48127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo48127'] = smo48127;
smo48127.setAttribute('id', 'smo48127');
smo48145v0ar.push(smo48127);
const smo48128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo48128'] = smo48128;
smo48128.setAttribute('id', 'smo48128');
const smo481280acc = new VF.Accidental('n');
smo48128.addModifier(smo481280acc, 0);
smo48145v0ar.push(smo48128);
const smo48129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo48129'] = smo48129;
smo48129.setAttribute('id', 'smo48129');
smo48145v0ar.push(smo48129);
smo48145v0.addTickables(smo48145v0ar)
fmtsmo4814516.joinVoices([smo48145v0]);
const fmtsmo5057216 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo50572v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo50572v0ar = [];
const smo50552 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo50552'] = smo50552;
smo50552.setAttribute('id', 'smo50552');
smo50572v0ar.push(smo50552);
const smo50553 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo50553'] = smo50553;
smo50553.setAttribute('id', 'smo50553');
smo50572v0ar.push(smo50553);
const smo50554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo50554'] = smo50554;
smo50554.setAttribute('id', 'smo50554');
smo50572v0ar.push(smo50554);
const smo50555 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo50555'] = smo50555;
smo50555.setAttribute('id', 'smo50555');
const smo505550acc = new VF.Accidental('n');
smo50555.addModifier(smo505550acc, 0);
smo50572v0ar.push(smo50555);
const smo50556 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo50556'] = smo50556;
smo50556.setAttribute('id', 'smo50556');
const smo505560acc = new VF.Accidental('b');
smo50556.addModifier(smo505560acc, 0);
smo50572v0ar.push(smo50556);
smo50572v0.addTickables(smo50572v0ar)
fmtsmo5057216.joinVoices([smo50572v0]);
const fmtsmo5298816 = new VF.Formatter();
//
// voices and notes for stave 2 16
const smo52988v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo52988v0ar = [];
const smo52968 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo52968'] = smo52968;
smo52968.setAttribute('id', 'smo52968');
smo52988v0ar.push(smo52968);
const smo52969 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo52969'] = smo52969;
smo52969.setAttribute('id', 'smo52969');
smo52988v0ar.push(smo52969);
const smo52970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo52970'] = smo52970;
smo52970.setAttribute('id', 'smo52970');
smo52988v0ar.push(smo52970);
const smo52971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo52971'] = smo52971;
smo52971.setAttribute('id', 'smo52971');
const smo529710acc = new VF.Accidental('n');
smo52971.addModifier(smo529710acc, 0);
smo52988v0ar.push(smo52971);
const smo52972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["ab/4/n"]}'))
noteHash['smo52972'] = smo52972;
smo52972.setAttribute('id', 'smo52972');
const smo529720acc = new VF.Accidental('b');
smo52972.addModifier(smo529720acc, 0);
smo52988v0ar.push(smo52972);
smo52988v0.addTickables(smo52988v0ar)
fmtsmo5298816.joinVoices([smo52988v0]);
const fmtsmo5536216 = new VF.Formatter();
//
// voices and notes for stave 3 16
const smo55362v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo55362v0ar = [];
const smo55342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo55342'] = smo55342;
smo55342.setAttribute('id', 'smo55342');
smo55362v0ar.push(smo55342);
const smo55343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo55343'] = smo55343;
smo55343.setAttribute('id', 'smo55343');
smo55362v0ar.push(smo55343);
const smo55344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo55344'] = smo55344;
smo55344.setAttribute('id', 'smo55344');
smo55362v0ar.push(smo55344);
const smo55345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo55345'] = smo55345;
smo55345.setAttribute('id', 'smo55345');
const smo553450acc = new VF.Accidental('n');
smo55345.addModifier(smo553450acc, 0);
smo55362v0ar.push(smo55345);
const smo55346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo55346'] = smo55346;
smo55346.setAttribute('id', 'smo55346');
const smo553460acc = new VF.Accidental('#');
smo55346.addModifier(smo553460acc, 0);
smo55362v0ar.push(smo55346);
smo55362v0.addTickables(smo55362v0ar)
fmtsmo5536216.joinVoices([smo55362v0]);
const fmtsmo5771316 = new VF.Formatter();
//
// voices and notes for stave 4 16
const smo57713v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo57713v0ar = [];
const smo57694 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo57694'] = smo57694;
smo57694.setAttribute('id', 'smo57694');
smo57713v0ar.push(smo57694);
const smo57695 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo57695'] = smo57695;
smo57695.setAttribute('id', 'smo57695');
smo57713v0ar.push(smo57695);
const smo57696 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo57696'] = smo57696;
smo57696.setAttribute('id', 'smo57696');
smo57713v0ar.push(smo57696);
const smo57697 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["a#/4/n"]}'))
noteHash['smo57697'] = smo57697;
smo57697.setAttribute('id', 'smo57697');
const smo576970acc = new VF.Accidental('#');
smo57697.addModifier(smo576970acc, 0);
smo57713v0ar.push(smo57697);
smo57713v0.addTickables(smo57713v0ar)
fmtsmo5771316.joinVoices([smo57713v0]);
const fmtsmo6002016 = new VF.Formatter();
//
// voices and notes for stave 5 16
const smo60020v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60020v0ar = [];
const smo60000 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo60000'] = smo60000;
smo60000.setAttribute('id', 'smo60000');
smo60020v0ar.push(smo60000);
const smo60001 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo60001'] = smo60001;
smo60001.setAttribute('id', 'smo60001');
smo60020v0ar.push(smo60001);
const smo60002 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo60002'] = smo60002;
smo60002.setAttribute('id', 'smo60002');
smo60020v0ar.push(smo60002);
const smo60003 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo60003'] = smo60003;
smo60003.setAttribute('id', 'smo60003');
smo60020v0ar.push(smo60003);
const smo60004 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo60004'] = smo60004;
smo60004.setAttribute('id', 'smo60004');
smo60020v0ar.push(smo60004);
smo60020v0.addTickables(smo60020v0ar)
fmtsmo6002016.joinVoices([smo60020v0]);
const fmtsmo6242616 = new VF.Formatter();
//
// voices and notes for stave 6 16
const smo62426v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62426v0ar = [];
const smo62406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo62406'] = smo62406;
smo62406.setAttribute('id', 'smo62406');
smo62426v0ar.push(smo62406);
const smo62407 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo62407'] = smo62407;
smo62407.setAttribute('id', 'smo62407');
smo62426v0ar.push(smo62407);
const smo62408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo62408'] = smo62408;
smo62408.setAttribute('id', 'smo62408');
smo62426v0ar.push(smo62408);
const smo62409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo62409'] = smo62409;
smo62409.setAttribute('id', 'smo62409');
const smo624090acc = new VF.Accidental('b');
smo62409.addModifier(smo624090acc, 0);
smo62426v0ar.push(smo62409);
const smo62410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n"]}'))
noteHash['smo62410'] = smo62410;
smo62410.setAttribute('id', 'smo62410');
const smo624100acc = new VF.Accidental('b');
smo62410.addModifier(smo624100acc, 0);
smo62426v0ar.push(smo62410);
smo62426v0.addTickables(smo62426v0ar)
fmtsmo6242616.joinVoices([smo62426v0]);
const fmtsmo6475316 = new VF.Formatter();
//
// voices and notes for stave 7 16
const smo64753v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64753v0ar = [];
const smo64737 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64737'] = smo64737;
smo64737.setAttribute('id', 'smo64737');
smo64753v0ar.push(smo64737);
smo64753v0.addTickables(smo64753v0ar)
fmtsmo6475316.joinVoices([smo64753v0]);
const fmtsmo6710316 = new VF.Formatter();
//
// voices and notes for stave 8 16
const smo67103v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67103v0ar = [];
const smo67087 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo67087'] = smo67087;
smo67087.setAttribute('id', 'smo67087');
smo67103v0ar.push(smo67087);
smo67103v0.addTickables(smo67103v0ar)
fmtsmo6710316.joinVoices([smo67103v0]);
const fmtsmo6952516 = new VF.Formatter();
//
// voices and notes for stave 9 16
const smo69525v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69525v0ar = [];
const smo69505 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo69505'] = smo69505;
smo69505.setAttribute('id', 'smo69505');
smo69525v0ar.push(smo69505);
const smo69506 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo69506'] = smo69506;
smo69506.setAttribute('id', 'smo69506');
smo69525v0ar.push(smo69506);
const smo69507 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo69507'] = smo69507;
smo69507.setAttribute('id', 'smo69507');
smo69525v0ar.push(smo69507);
const smo69508 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n"]}'))
noteHash['smo69508'] = smo69508;
smo69508.setAttribute('id', 'smo69508');
const smo695080acc = new VF.Accidental('b');
smo69508.addModifier(smo695080acc, 0);
smo69525v0ar.push(smo69508);
const smo69509 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo69509'] = smo69509;
smo69509.setAttribute('id', 'smo69509');
smo69525v0ar.push(smo69509);
smo69525v0.addTickables(smo69525v0ar)
fmtsmo6952516.joinVoices([smo69525v0]);
const fmtsmo7189816 = new VF.Formatter();
//
// voices and notes for stave 10 16
const smo71898v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo71898v0ar = [];
const smo71878 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo71878'] = smo71878;
smo71878.setAttribute('id', 'smo71878');
smo71898v0ar.push(smo71878);
const smo71879 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo71879'] = smo71879;
smo71879.setAttribute('id', 'smo71879');
smo71898v0ar.push(smo71879);
const smo71880 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo71880'] = smo71880;
smo71880.setAttribute('id', 'smo71880');
smo71898v0ar.push(smo71880);
const smo71881 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo71881'] = smo71881;
smo71881.setAttribute('id', 'smo71881');
smo71898v0ar.push(smo71881);
const smo71882 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo71882'] = smo71882;
smo71882.setAttribute('id', 'smo71882');
smo71898v0ar.push(smo71882);
smo71898v0.addTickables(smo71898v0ar)
fmtsmo7189816.joinVoices([smo71898v0]);
const fmtsmo7424416 = new VF.Formatter();
//
// voices and notes for stave 11 16
const smo74244v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74244v0ar = [];
const smo74224 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo74224'] = smo74224;
smo74224.setAttribute('id', 'smo74224');
smo74244v0ar.push(smo74224);
const smo74225 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo74225'] = smo74225;
smo74225.setAttribute('id', 'smo74225');
smo74244v0ar.push(smo74225);
const smo74226 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo74226'] = smo74226;
smo74226.setAttribute('id', 'smo74226');
smo74244v0ar.push(smo74226);
const smo74227 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n"]}'))
noteHash['smo74227'] = smo74227;
smo74227.setAttribute('id', 'smo74227');
const smo742270acc = new VF.Accidental('b');
smo74227.addModifier(smo742270acc, 0);
smo74244v0ar.push(smo74227);
const smo74228 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo74228'] = smo74228;
smo74228.setAttribute('id', 'smo74228');
const smo742280acc = new VF.Accidental('n');
smo74228.addModifier(smo742280acc, 0);
smo74244v0ar.push(smo74228);
smo74244v0.addTickables(smo74244v0ar)
fmtsmo7424416.joinVoices([smo74244v0]);
const fmtsmo7657216 = new VF.Formatter();
//
// voices and notes for stave 12 16
const smo76572v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo76572v0ar = [];
const smo76553 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo76553'] = smo76553;
smo76553.setAttribute('id', 'smo76553');
smo76572v0ar.push(smo76553);
const smo76554 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo76554'] = smo76554;
smo76554.setAttribute('id', 'smo76554');
smo76572v0ar.push(smo76554);
const smo76555 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n"]}'))
noteHash['smo76555'] = smo76555;
smo76555.setAttribute('id', 'smo76555');
smo76572v0ar.push(smo76555);
const smo76556 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/3/n"]}'))
noteHash['smo76556'] = smo76556;
smo76556.setAttribute('id', 'smo76556');
const smo765560acc = new VF.Accidental('#');
smo76556.addModifier(smo765560acc, 0);
smo76572v0ar.push(smo76556);
smo76572v0.addTickables(smo76572v0ar)
fmtsmo7657216.joinVoices([smo76572v0]);
const fmtsmo7890616 = new VF.Formatter();
//
// voices and notes for stave 13 16
const smo78906v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo78906v0ar = [];
const smo78886 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo78886'] = smo78886;
smo78886.setAttribute('id', 'smo78886');
smo78906v0ar.push(smo78886);
const smo78887 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo78887'] = smo78887;
smo78887.setAttribute('id', 'smo78887');
smo78906v0ar.push(smo78887);
const smo78888 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo78888'] = smo78888;
smo78888.setAttribute('id', 'smo78888');
smo78906v0ar.push(smo78888);
const smo78889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo78889'] = smo78889;
smo78889.setAttribute('id', 'smo78889');
smo78906v0ar.push(smo78889);
const smo78890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo78890'] = smo78890;
smo78890.setAttribute('id', 'smo78890');
smo78906v0ar.push(smo78890);
smo78906v0.addTickables(smo78906v0ar)
fmtsmo7890616.joinVoices([smo78906v0]);
const fmtsmo8133216 = new VF.Formatter();
//
// voices and notes for stave 14 16
const smo81332v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo81332v0ar = [];
const smo81316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo81316'] = smo81316;
smo81316.setAttribute('id', 'smo81316');
smo81332v0ar.push(smo81316);
smo81332v0.addTickables(smo81332v0ar)
fmtsmo8133216.joinVoices([smo81332v0]);
const fmtsmo8385016 = new VF.Formatter();
//
// voices and notes for stave 15 16
const smo83850v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo83850v0ar = [];
const smo83831 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo83831'] = smo83831;
smo83831.setAttribute('id', 'smo83831');
smo83850v0ar.push(smo83831);
const smo83832 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo83832'] = smo83832;
smo83832.setAttribute('id', 'smo83832');
smo83850v0ar.push(smo83832);
const smo83833 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo83833'] = smo83833;
smo83833.setAttribute('id', 'smo83833');
smo83850v0ar.push(smo83833);
const smo83834 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/4/n"]}'))
noteHash['smo83834'] = smo83834;
smo83834.setAttribute('id', 'smo83834');
const smo838340acc = new VF.Accidental('#');
smo83834.addModifier(smo838340acc, 0);
smo83850v0ar.push(smo83834);
smo83850v0.addTickables(smo83850v0ar)
fmtsmo8385016.joinVoices([smo83850v0]);
const fmtsmo8630916 = new VF.Formatter();
//
// voices and notes for stave 16 16
const smo86309v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo86309v0ar = [];
const smo86289 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo86289'] = smo86289;
smo86289.setAttribute('id', 'smo86289');
smo86309v0ar.push(smo86289);
const smo86290 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86290'] = smo86290;
smo86290.setAttribute('id', 'smo86290');
const smo862900acc = new VF.Accidental('n');
smo86290.addModifier(smo862900acc, 0);
smo86309v0ar.push(smo86290);
const smo86291 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86291'] = smo86291;
smo86291.setAttribute('id', 'smo86291');
smo86309v0ar.push(smo86291);
const smo86292 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86292'] = smo86292;
smo86292.setAttribute('id', 'smo86292');
smo86309v0ar.push(smo86292);
const smo86293 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86293'] = smo86293;
smo86293.setAttribute('id', 'smo86293');
smo86309v0ar.push(smo86293);
smo86309v0.addTickables(smo86309v0ar)
fmtsmo8630916.joinVoices([smo86309v0]);
// create beam groups and tuplets for format grp smo88583 before formatting
const dirsmo154921 = smo48125.getStemDirection();
smo48125.setStemDirection(dirsmo154921);
smo48126.setStemDirection(dirsmo154921);
const smo154921 = new VF.Beam([smo48125,smo48126]);
const dirsmo154923 = smo50552.getStemDirection();
smo50552.setStemDirection(dirsmo154923);
smo50553.setStemDirection(dirsmo154923);
const smo154923 = new VF.Beam([smo50552,smo50553]);
const dirsmo154925 = smo52968.getStemDirection();
smo52968.setStemDirection(dirsmo154925);
smo52969.setStemDirection(dirsmo154925);
const smo154925 = new VF.Beam([smo52968,smo52969]);
const dirsmo154927 = smo55342.getStemDirection();
smo55342.setStemDirection(dirsmo154927);
smo55343.setStemDirection(dirsmo154927);
const smo154927 = new VF.Beam([smo55342,smo55343]);
 
// formatting measures in staff group smo88583
fmtsmo4814516.format([smo48145v0,smo50572v0,smo52988v0,smo55362v0,smo57713v0], 140);
const stavesmo48145 = new VF.Stave(1331, 183.2253035909339, 155);
stavesmo48145.setAttribute('id', 'stavesmo48145');
stavesmo48145.setBegBarType(VF.Barline.type.NONE);
stavesmo48145.setEndBarType(2);
stavesmo48145.setContext(context);
stavesmo48145.draw();
smo48145v0.draw(context, stavesmo48145);
smo154921.setContext(context);
smo154921.draw();
const stavesmo50572 = new VF.Stave(1331, 288.2253035909339, 155);
stavesmo50572.setAttribute('id', 'stavesmo50572');
stavesmo50572.setBegBarType(VF.Barline.type.NONE);
stavesmo50572.setEndBarType(2);
stavesmo50572.setContext(context);
stavesmo50572.draw();
smo50572v0.draw(context, stavesmo50572);
smo154923.setContext(context);
smo154923.draw();
const stavesmo52988 = new VF.Stave(1331, 379.2253035909339, 155);
stavesmo52988.setAttribute('id', 'stavesmo52988');
stavesmo52988.setBegBarType(VF.Barline.type.NONE);
stavesmo52988.setEndBarType(2);
stavesmo52988.setContext(context);
stavesmo52988.draw();
smo52988v0.draw(context, stavesmo52988);
smo154925.setContext(context);
smo154925.draw();
const stavesmo55362 = new VF.Stave(1331, 479.2253035909339, 155);
stavesmo55362.setAttribute('id', 'stavesmo55362');
stavesmo55362.setBegBarType(VF.Barline.type.NONE);
stavesmo55362.setEndBarType(2);
stavesmo55362.setContext(context);
stavesmo55362.draw();
smo55362v0.draw(context, stavesmo55362);
smo154927.setContext(context);
smo154927.draw();
const stavesmo57713 = new VF.Stave(1331, 549.2253035909339, 155);
stavesmo57713.setAttribute('id', 'stavesmo57713');
stavesmo57713.setBegBarType(VF.Barline.type.NONE);
stavesmo57713.setEndBarType(2);
stavesmo57713.setContext(context);
stavesmo57713.draw();
smo57713v0.draw(context, stavesmo57713);
// create beam groups and tuplets for format grp smo88585 before formatting
const dirsmo154930 = smo60000.getStemDirection();
smo60000.setStemDirection(dirsmo154930);
smo60001.setStemDirection(dirsmo154930);
const smo154930 = new VF.Beam([smo60000,smo60001]);
const dirsmo154932 = smo62406.getStemDirection();
smo62406.setStemDirection(dirsmo154932);
smo62407.setStemDirection(dirsmo154932);
const smo154932 = new VF.Beam([smo62406,smo62407]);
 
// formatting measures in staff group smo88585
fmtsmo6002016.format([smo60020v0,smo62426v0,smo64753v0,smo67103v0], 140);
const stavesmo60020 = new VF.Stave(1331, 630.2253035909339, 155);
stavesmo60020.setAttribute('id', 'stavesmo60020');
stavesmo60020.setBegBarType(VF.Barline.type.NONE);
stavesmo60020.setEndBarType(2);
stavesmo60020.setContext(context);
stavesmo60020.draw();
smo60020v0.draw(context, stavesmo60020);
smo154930.setContext(context);
smo154930.draw();
const stavesmo62426 = new VF.Stave(1331, 700.2253035909339, 155);
stavesmo62426.setAttribute('id', 'stavesmo62426');
stavesmo62426.setBegBarType(VF.Barline.type.NONE);
stavesmo62426.setEndBarType(2);
stavesmo62426.setContext(context);
stavesmo62426.draw();
smo62426v0.draw(context, stavesmo62426);
smo154932.setContext(context);
smo154932.draw();
const stavesmo64753 = new VF.Stave(1331, 761.2253035909339, 155);
stavesmo64753.setAttribute('id', 'stavesmo64753');
stavesmo64753.setBegBarType(VF.Barline.type.NONE);
stavesmo64753.setEndBarType(2);
stavesmo64753.setContext(context);
stavesmo64753.draw();
smo64753v0.draw(context, stavesmo64753);
const stavesmo67103 = new VF.Stave(1331, 831.2253035909339, 155);
stavesmo67103.setAttribute('id', 'stavesmo67103');
stavesmo67103.setBegBarType(VF.Barline.type.NONE);
stavesmo67103.setEndBarType(2);
stavesmo67103.setContext(context);
stavesmo67103.draw();
smo67103v0.draw(context, stavesmo67103);
// create beam groups and tuplets for format grp smo88587 before formatting
const dirsmo154936 = smo69505.getStemDirection();
smo69505.setStemDirection(dirsmo154936);
smo69506.setStemDirection(dirsmo154936);
const smo154936 = new VF.Beam([smo69505,smo69506]);
const dirsmo154938 = smo71878.getStemDirection();
smo71878.setStemDirection(dirsmo154938);
smo71879.setStemDirection(dirsmo154938);
const smo154938 = new VF.Beam([smo71878,smo71879]);
const dirsmo154940 = smo74224.getStemDirection();
smo74224.setStemDirection(dirsmo154940);
smo74225.setStemDirection(dirsmo154940);
const smo154940 = new VF.Beam([smo74224,smo74225]);
 
// formatting measures in staff group smo88587
fmtsmo6952516.format([smo69525v0,smo71898v0,smo74244v0,smo76572v0], 140);
const stavesmo69525 = new VF.Stave(1331, 936.2253035909339, 155);
stavesmo69525.setAttribute('id', 'stavesmo69525');
stavesmo69525.setBegBarType(VF.Barline.type.NONE);
stavesmo69525.setEndBarType(2);
stavesmo69525.setContext(context);
stavesmo69525.draw();
smo69525v0.draw(context, stavesmo69525);
smo154936.setContext(context);
smo154936.draw();
const stavesmo71898 = new VF.Stave(1331, 1023.2253035909339, 155);
stavesmo71898.setAttribute('id', 'stavesmo71898');
stavesmo71898.setBegBarType(VF.Barline.type.NONE);
stavesmo71898.setEndBarType(2);
stavesmo71898.setContext(context);
stavesmo71898.draw();
smo71898v0.draw(context, stavesmo71898);
smo154938.setContext(context);
smo154938.draw();
const stavesmo74244 = new VF.Stave(1331, 1128.225303590934, 155);
stavesmo74244.setAttribute('id', 'stavesmo74244');
stavesmo74244.setBegBarType(VF.Barline.type.NONE);
stavesmo74244.setEndBarType(2);
stavesmo74244.setContext(context);
stavesmo74244.draw();
smo74244v0.draw(context, stavesmo74244);
smo154940.setContext(context);
smo154940.draw();
const stavesmo76572 = new VF.Stave(1331, 1213.225303590934, 155);
stavesmo76572.setAttribute('id', 'stavesmo76572');
stavesmo76572.setBegBarType(VF.Barline.type.NONE);
stavesmo76572.setEndBarType(2);
stavesmo76572.setContext(context);
stavesmo76572.draw();
smo76572v0.draw(context, stavesmo76572);
// create beam groups and tuplets for format grp smo81038 before formatting
const dirsmo154943 = smo78886.getStemDirection();
smo78886.setStemDirection(dirsmo154943);
smo78887.setStemDirection(dirsmo154943);
const smo154943 = new VF.Beam([smo78886,smo78887]);
 
// formatting measures in staff group smo81038
fmtsmo7890616.format([smo78906v0], 140);
const stavesmo78906 = new VF.Stave(1331, 1290.225303590934, 155);
stavesmo78906.setAttribute('id', 'stavesmo78906');
stavesmo78906.setBegBarType(VF.Barline.type.NONE);
stavesmo78906.setEndBarType(2);
stavesmo78906.setContext(context);
stavesmo78906.draw();
smo78906v0.draw(context, stavesmo78906);
smo154943.setContext(context);
smo154943.draw();
// create beam groups and tuplets for format grp smo83506 before formatting
 
// formatting measures in staff group smo83506
fmtsmo8133216.format([smo81332v0], 140);
const stavesmo81332 = new VF.Stave(1331, 1373.225303590934, 155);
stavesmo81332.setAttribute('id', 'stavesmo81332');
stavesmo81332.setBegBarType(VF.Barline.type.NONE);
stavesmo81332.setEndBarType(2);
stavesmo81332.setContext(context);
stavesmo81332.draw();
smo81332v0.draw(context, stavesmo81332);
// create beam groups and tuplets for format grp smo85864 before formatting
 
// formatting measures in staff group smo85864
fmtsmo8385016.format([smo83850v0], 140);
const stavesmo83850 = new VF.Stave(1331, 1478.225303590934, 155);
stavesmo83850.setAttribute('id', 'stavesmo83850');
stavesmo83850.setBegBarType(VF.Barline.type.NONE);
stavesmo83850.setEndBarType(2);
stavesmo83850.setContext(context);
stavesmo83850.draw();
smo83850v0.draw(context, stavesmo83850);
// create beam groups and tuplets for format grp smo88577 before formatting
 
// formatting measures in staff group smo88577
fmtsmo8630916.format([smo86309v0], 140);
const stavesmo86309 = new VF.Stave(1331, 1555.225303590934, 155);
stavesmo86309.setAttribute('id', 'stavesmo86309');
stavesmo86309.setBegBarType(VF.Barline.type.NONE);
stavesmo86309.setEndBarType(2);
stavesmo86309.setContext(context);
stavesmo86309.draw();
smo86309v0.draw(context, stavesmo86309);
const fmtsmo4816217 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo48162v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo48162v0ar = [];
const smo48146 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo48146'] = smo48146;
smo48146.setAttribute('id', 'smo48146');
smo48162v0ar.push(smo48146);
smo48162v0.addTickables(smo48162v0ar)
fmtsmo4816217.joinVoices([smo48162v0]);
const fmtsmo5058917 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo50589v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo50589v0ar = [];
const smo50573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo50573'] = smo50573;
smo50573.setAttribute('id', 'smo50573');
smo50589v0ar.push(smo50573);
smo50589v0.addTickables(smo50589v0ar)
fmtsmo5058917.joinVoices([smo50589v0]);
const fmtsmo5300517 = new VF.Formatter();
//
// voices and notes for stave 2 17
const smo53005v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo53005v0ar = [];
const smo52989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo52989'] = smo52989;
smo52989.setAttribute('id', 'smo52989');
smo53005v0ar.push(smo52989);
smo53005v0.addTickables(smo53005v0ar)
fmtsmo5300517.joinVoices([smo53005v0]);
const fmtsmo5537917 = new VF.Formatter();
//
// voices and notes for stave 3 17
const smo55379v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo55379v0ar = [];
const smo55363 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo55363'] = smo55363;
smo55363.setAttribute('id', 'smo55363');
smo55379v0ar.push(smo55363);
smo55379v0.addTickables(smo55379v0ar)
fmtsmo5537917.joinVoices([smo55379v0]);
const fmtsmo5773017 = new VF.Formatter();
//
// voices and notes for stave 4 17
const smo57730v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo57730v0ar = [];
const smo57714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo57714'] = smo57714;
smo57714.setAttribute('id', 'smo57714');
smo57730v0ar.push(smo57714);
smo57730v0.addTickables(smo57730v0ar)
fmtsmo5773017.joinVoices([smo57730v0]);
const fmtsmo6003717 = new VF.Formatter();
//
// voices and notes for stave 5 17
const smo60037v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo60037v0ar = [];
const smo60021 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo60021'] = smo60021;
smo60021.setAttribute('id', 'smo60021');
smo60037v0ar.push(smo60021);
smo60037v0.addTickables(smo60037v0ar)
fmtsmo6003717.joinVoices([smo60037v0]);
const fmtsmo6244317 = new VF.Formatter();
//
// voices and notes for stave 6 17
const smo62443v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo62443v0ar = [];
const smo62427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo62427'] = smo62427;
smo62427.setAttribute('id', 'smo62427');
smo62443v0ar.push(smo62427);
smo62443v0.addTickables(smo62443v0ar)
fmtsmo6244317.joinVoices([smo62443v0]);
const fmtsmo6477017 = new VF.Formatter();
//
// voices and notes for stave 7 17
const smo64770v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo64770v0ar = [];
const smo64754 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64754'] = smo64754;
smo64754.setAttribute('id', 'smo64754');
smo64770v0ar.push(smo64754);
smo64770v0.addTickables(smo64770v0ar)
fmtsmo6477017.joinVoices([smo64770v0]);
const fmtsmo6712017 = new VF.Formatter();
//
// voices and notes for stave 8 17
const smo67120v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo67120v0ar = [];
const smo67104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo67104'] = smo67104;
smo67104.setAttribute('id', 'smo67104');
smo67120v0ar.push(smo67104);
smo67120v0.addTickables(smo67120v0ar)
fmtsmo6712017.joinVoices([smo67120v0]);
const fmtsmo6954217 = new VF.Formatter();
//
// voices and notes for stave 9 17
const smo69542v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo69542v0ar = [];
const smo69526 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo69526'] = smo69526;
smo69526.setAttribute('id', 'smo69526');
smo69542v0ar.push(smo69526);
smo69542v0.addTickables(smo69542v0ar)
fmtsmo6954217.joinVoices([smo69542v0]);
const fmtsmo7191517 = new VF.Formatter();
//
// voices and notes for stave 10 17
const smo71915v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo71915v0ar = [];
const smo71899 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo71899'] = smo71899;
smo71899.setAttribute('id', 'smo71899');
smo71915v0ar.push(smo71899);
smo71915v0.addTickables(smo71915v0ar)
fmtsmo7191517.joinVoices([smo71915v0]);
const fmtsmo7426117 = new VF.Formatter();
//
// voices and notes for stave 11 17
const smo74261v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo74261v0ar = [];
const smo74245 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo74245'] = smo74245;
smo74245.setAttribute('id', 'smo74245');
smo74261v0ar.push(smo74245);
smo74261v0.addTickables(smo74261v0ar)
fmtsmo7426117.joinVoices([smo74261v0]);
const fmtsmo7658917 = new VF.Formatter();
//
// voices and notes for stave 12 17
const smo76589v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo76589v0ar = [];
const smo76573 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo76573'] = smo76573;
smo76573.setAttribute('id', 'smo76573');
smo76589v0ar.push(smo76573);
smo76589v0.addTickables(smo76589v0ar)
fmtsmo7658917.joinVoices([smo76589v0]);
const fmtsmo7892317 = new VF.Formatter();
//
// voices and notes for stave 13 17
const smo78923v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo78923v0ar = [];
const smo78907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo78907'] = smo78907;
smo78907.setAttribute('id', 'smo78907');
smo78923v0ar.push(smo78907);
smo78923v0.addTickables(smo78923v0ar)
fmtsmo7892317.joinVoices([smo78923v0]);
const fmtsmo8134917 = new VF.Formatter();
//
// voices and notes for stave 14 17
const smo81349v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo81349v0ar = [];
const smo81333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo81333'] = smo81333;
smo81333.setAttribute('id', 'smo81333');
smo81349v0ar.push(smo81333);
smo81349v0.addTickables(smo81349v0ar)
fmtsmo8134917.joinVoices([smo81349v0]);
const fmtsmo8386917 = new VF.Formatter();
//
// voices and notes for stave 15 17
const smo83869v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo83869v0ar = [];
const smo83851 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo83851'] = smo83851;
smo83851.setAttribute('id', 'smo83851');
smo83869v0ar.push(smo83851);
const smo83852 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo83852'] = smo83852;
smo83852.setAttribute('id', 'smo83852');
smo83869v0ar.push(smo83852);
const smo83853 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo83853'] = smo83853;
smo83853.setAttribute('id', 'smo83853');
smo83869v0ar.push(smo83853);
smo83869v0.addTickables(smo83869v0ar)
fmtsmo8386917.joinVoices([smo83869v0]);
const fmtsmo8632917 = new VF.Formatter();
//
// voices and notes for stave 16 17
const smo86329v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo86329v0ar = [];
const smo86310 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86310'] = smo86310;
smo86310.setAttribute('id', 'smo86310');
const smo863100acc = new VF.Accidental('n');
smo86310.addModifier(smo863100acc, 0);
smo86329v0ar.push(smo86310);
const smo86311 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86311'] = smo86311;
smo86311.setAttribute('id', 'smo86311');
smo86329v0ar.push(smo86311);
const smo86312 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86312'] = smo86312;
smo86312.setAttribute('id', 'smo86312');
smo86329v0ar.push(smo86312);
const smo86313 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86313'] = smo86313;
smo86313.setAttribute('id', 'smo86313');
smo86329v0ar.push(smo86313);
smo86329v0.addTickables(smo86329v0ar)
fmtsmo8632917.joinVoices([smo86329v0]);
// create beam groups and tuplets for format grp smo88583 before formatting
 
// formatting measures in staff group smo88583
fmtsmo4816217.format([smo48162v0,smo50589v0,smo53005v0,smo55379v0,smo57730v0], 108);
const stavesmo48162 = new VF.Stave(1486, 183.2253035909339, 146);
stavesmo48162.setAttribute('id', 'stavesmo48162');
stavesmo48162.setBegBarType(VF.Barline.type.NONE);
stavesmo48162.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":256}'), -1 * 0);
stavesmo48162.addTimeSignature('2/2');
stavesmo48162.setContext(context);
stavesmo48162.draw();
smo48162v0.draw(context, stavesmo48162);
const stavesmo50589 = new VF.Stave(1486, 288.2253035909339, 146);
stavesmo50589.setAttribute('id', 'stavesmo50589');
stavesmo50589.setBegBarType(VF.Barline.type.NONE);
stavesmo50589.addTimeSignature('2/2');
stavesmo50589.setContext(context);
stavesmo50589.draw();
smo50589v0.draw(context, stavesmo50589);
const stavesmo53005 = new VF.Stave(1486, 379.2253035909339, 146);
stavesmo53005.setAttribute('id', 'stavesmo53005');
stavesmo53005.setBegBarType(VF.Barline.type.NONE);
stavesmo53005.addTimeSignature('2/2');
stavesmo53005.setContext(context);
stavesmo53005.draw();
smo53005v0.draw(context, stavesmo53005);
const stavesmo55379 = new VF.Stave(1486, 479.2253035909339, 146);
stavesmo55379.setAttribute('id', 'stavesmo55379');
stavesmo55379.setBegBarType(VF.Barline.type.NONE);
stavesmo55379.addTimeSignature('2/2');
stavesmo55379.setContext(context);
stavesmo55379.draw();
smo55379v0.draw(context, stavesmo55379);
const stavesmo57730 = new VF.Stave(1486, 549.2253035909339, 146);
stavesmo57730.setAttribute('id', 'stavesmo57730');
stavesmo57730.setBegBarType(VF.Barline.type.NONE);
stavesmo57730.addTimeSignature('2/2');
stavesmo57730.setContext(context);
stavesmo57730.draw();
smo57730v0.draw(context, stavesmo57730);
// create beam groups and tuplets for format grp smo88585 before formatting
 
// formatting measures in staff group smo88585
fmtsmo6003717.format([smo60037v0,smo62443v0,smo64770v0,smo67120v0], 108);
const stavesmo60037 = new VF.Stave(1486, 630.2253035909339, 146);
stavesmo60037.setAttribute('id', 'stavesmo60037');
stavesmo60037.setBegBarType(VF.Barline.type.NONE);
stavesmo60037.addTimeSignature('2/2');
stavesmo60037.setContext(context);
stavesmo60037.draw();
smo60037v0.draw(context, stavesmo60037);
const stavesmo62443 = new VF.Stave(1486, 700.2253035909339, 146);
stavesmo62443.setAttribute('id', 'stavesmo62443');
stavesmo62443.setBegBarType(VF.Barline.type.NONE);
stavesmo62443.addTimeSignature('2/2');
stavesmo62443.setContext(context);
stavesmo62443.draw();
smo62443v0.draw(context, stavesmo62443);
const stavesmo64770 = new VF.Stave(1486, 761.2253035909339, 146);
stavesmo64770.setAttribute('id', 'stavesmo64770');
stavesmo64770.setBegBarType(VF.Barline.type.NONE);
stavesmo64770.addTimeSignature('2/2');
stavesmo64770.setContext(context);
stavesmo64770.draw();
smo64770v0.draw(context, stavesmo64770);
const stavesmo67120 = new VF.Stave(1486, 831.2253035909339, 146);
stavesmo67120.setAttribute('id', 'stavesmo67120');
stavesmo67120.setBegBarType(VF.Barline.type.NONE);
stavesmo67120.addTimeSignature('2/2');
stavesmo67120.setContext(context);
stavesmo67120.draw();
smo67120v0.draw(context, stavesmo67120);
// create beam groups and tuplets for format grp smo88587 before formatting
 
// formatting measures in staff group smo88587
fmtsmo6954217.format([smo69542v0,smo71915v0,smo74261v0,smo76589v0], 108);
const stavesmo69542 = new VF.Stave(1486, 936.2253035909339, 146);
stavesmo69542.setAttribute('id', 'stavesmo69542');
stavesmo69542.setBegBarType(VF.Barline.type.NONE);
stavesmo69542.addTimeSignature('2/2');
stavesmo69542.setContext(context);
stavesmo69542.draw();
smo69542v0.draw(context, stavesmo69542);
const stavesmo71915 = new VF.Stave(1486, 1023.2253035909339, 146);
stavesmo71915.setAttribute('id', 'stavesmo71915');
stavesmo71915.setBegBarType(VF.Barline.type.NONE);
stavesmo71915.addTimeSignature('2/2');
stavesmo71915.setContext(context);
stavesmo71915.draw();
smo71915v0.draw(context, stavesmo71915);
const stavesmo74261 = new VF.Stave(1486, 1128.225303590934, 146);
stavesmo74261.setAttribute('id', 'stavesmo74261');
stavesmo74261.setBegBarType(VF.Barline.type.NONE);
stavesmo74261.addTimeSignature('2/2');
stavesmo74261.setContext(context);
stavesmo74261.draw();
smo74261v0.draw(context, stavesmo74261);
const stavesmo76589 = new VF.Stave(1486, 1213.225303590934, 146);
stavesmo76589.setAttribute('id', 'stavesmo76589');
stavesmo76589.setBegBarType(VF.Barline.type.NONE);
stavesmo76589.addTimeSignature('2/2');
stavesmo76589.setContext(context);
stavesmo76589.draw();
smo76589v0.draw(context, stavesmo76589);
// create beam groups and tuplets for format grp smo81038 before formatting
 
// formatting measures in staff group smo81038
fmtsmo7892317.format([smo78923v0], 108);
const stavesmo78923 = new VF.Stave(1486, 1290.225303590934, 146);
stavesmo78923.setAttribute('id', 'stavesmo78923');
stavesmo78923.setBegBarType(VF.Barline.type.NONE);
stavesmo78923.addTimeSignature('2/2');
stavesmo78923.setContext(context);
stavesmo78923.draw();
smo78923v0.draw(context, stavesmo78923);
// create beam groups and tuplets for format grp smo83506 before formatting
 
// formatting measures in staff group smo83506
fmtsmo8134917.format([smo81349v0], 108);
const stavesmo81349 = new VF.Stave(1486, 1373.225303590934, 146);
stavesmo81349.setAttribute('id', 'stavesmo81349');
stavesmo81349.setBegBarType(VF.Barline.type.NONE);
stavesmo81349.addTimeSignature('2/2');
stavesmo81349.setContext(context);
stavesmo81349.draw();
smo81349v0.draw(context, stavesmo81349);
// create beam groups and tuplets for format grp smo85864 before formatting
 
// formatting measures in staff group smo85864
fmtsmo8386917.format([smo83869v0], 108);
const stavesmo83869 = new VF.Stave(1486, 1478.225303590934, 146);
stavesmo83869.setAttribute('id', 'stavesmo83869');
stavesmo83869.setBegBarType(VF.Barline.type.NONE);
stavesmo83869.addTimeSignature('2/2');
stavesmo83869.setContext(context);
stavesmo83869.draw();
smo83869v0.draw(context, stavesmo83869);
// create beam groups and tuplets for format grp smo88577 before formatting
 
// formatting measures in staff group smo88577
fmtsmo8632917.format([smo86329v0], 108);
const stavesmo86329 = new VF.Stave(1486, 1555.225303590934, 146);
stavesmo86329.setAttribute('id', 'stavesmo86329');
stavesmo86329.setBegBarType(VF.Barline.type.NONE);
stavesmo86329.addTimeSignature('2/2');
stavesmo86329.setContext(context);
stavesmo86329.draw();
smo86329v0.draw(context, stavesmo86329);
const fmtsmo4817918 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo48179v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo48179v0ar = [];
const smo48163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo48163'] = smo48163;
smo48163.setAttribute('id', 'smo48163');
smo48179v0ar.push(smo48163);
smo48179v0.addTickables(smo48179v0ar)
fmtsmo4817918.joinVoices([smo48179v0]);
const fmtsmo5060618 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo50606v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo50606v0ar = [];
const smo50590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo50590'] = smo50590;
smo50590.setAttribute('id', 'smo50590');
smo50606v0ar.push(smo50590);
smo50606v0.addTickables(smo50606v0ar)
fmtsmo5060618.joinVoices([smo50606v0]);
const fmtsmo5302218 = new VF.Formatter();
//
// voices and notes for stave 2 18
const smo53022v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo53022v0ar = [];
const smo53006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo53006'] = smo53006;
smo53006.setAttribute('id', 'smo53006');
smo53022v0ar.push(smo53006);
smo53022v0.addTickables(smo53022v0ar)
fmtsmo5302218.joinVoices([smo53022v0]);
const fmtsmo5539618 = new VF.Formatter();
//
// voices and notes for stave 3 18
const smo55396v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo55396v0ar = [];
const smo55380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo55380'] = smo55380;
smo55380.setAttribute('id', 'smo55380');
smo55396v0ar.push(smo55380);
smo55396v0.addTickables(smo55396v0ar)
fmtsmo5539618.joinVoices([smo55396v0]);
const fmtsmo5774718 = new VF.Formatter();
//
// voices and notes for stave 4 18
const smo57747v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo57747v0ar = [];
const smo57731 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo57731'] = smo57731;
smo57731.setAttribute('id', 'smo57731');
smo57747v0ar.push(smo57731);
smo57747v0.addTickables(smo57747v0ar)
fmtsmo5774718.joinVoices([smo57747v0]);
const fmtsmo6005418 = new VF.Formatter();
//
// voices and notes for stave 5 18
const smo60054v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo60054v0ar = [];
const smo60038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo60038'] = smo60038;
smo60038.setAttribute('id', 'smo60038');
smo60054v0ar.push(smo60038);
smo60054v0.addTickables(smo60054v0ar)
fmtsmo6005418.joinVoices([smo60054v0]);
const fmtsmo6246018 = new VF.Formatter();
//
// voices and notes for stave 6 18
const smo62460v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo62460v0ar = [];
const smo62444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo62444'] = smo62444;
smo62444.setAttribute('id', 'smo62444');
smo62460v0ar.push(smo62444);
smo62460v0.addTickables(smo62460v0ar)
fmtsmo6246018.joinVoices([smo62460v0]);
const fmtsmo6478718 = new VF.Formatter();
//
// voices and notes for stave 7 18
const smo64787v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo64787v0ar = [];
const smo64771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64771'] = smo64771;
smo64771.setAttribute('id', 'smo64771');
smo64787v0ar.push(smo64771);
smo64787v0.addTickables(smo64787v0ar)
fmtsmo6478718.joinVoices([smo64787v0]);
const fmtsmo6713718 = new VF.Formatter();
//
// voices and notes for stave 8 18
const smo67137v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo67137v0ar = [];
const smo67121 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo67121'] = smo67121;
smo67121.setAttribute('id', 'smo67121');
smo67137v0ar.push(smo67121);
smo67137v0.addTickables(smo67137v0ar)
fmtsmo6713718.joinVoices([smo67137v0]);
const fmtsmo6955918 = new VF.Formatter();
//
// voices and notes for stave 9 18
const smo69559v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo69559v0ar = [];
const smo69543 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo69543'] = smo69543;
smo69543.setAttribute('id', 'smo69543');
smo69559v0ar.push(smo69543);
smo69559v0.addTickables(smo69559v0ar)
fmtsmo6955918.joinVoices([smo69559v0]);
const fmtsmo7193218 = new VF.Formatter();
//
// voices and notes for stave 10 18
const smo71932v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo71932v0ar = [];
const smo71916 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo71916'] = smo71916;
smo71916.setAttribute('id', 'smo71916');
smo71932v0ar.push(smo71916);
smo71932v0.addTickables(smo71932v0ar)
fmtsmo7193218.joinVoices([smo71932v0]);
const fmtsmo7427818 = new VF.Formatter();
//
// voices and notes for stave 11 18
const smo74278v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo74278v0ar = [];
const smo74262 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo74262'] = smo74262;
smo74262.setAttribute('id', 'smo74262');
smo74278v0ar.push(smo74262);
smo74278v0.addTickables(smo74278v0ar)
fmtsmo7427818.joinVoices([smo74278v0]);
const fmtsmo7660618 = new VF.Formatter();
//
// voices and notes for stave 12 18
const smo76606v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo76606v0ar = [];
const smo76590 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo76590'] = smo76590;
smo76590.setAttribute('id', 'smo76590');
smo76606v0ar.push(smo76590);
smo76606v0.addTickables(smo76606v0ar)
fmtsmo7660618.joinVoices([smo76606v0]);
const fmtsmo7894018 = new VF.Formatter();
//
// voices and notes for stave 13 18
const smo78940v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo78940v0ar = [];
const smo78924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo78924'] = smo78924;
smo78924.setAttribute('id', 'smo78924');
smo78940v0ar.push(smo78924);
smo78940v0.addTickables(smo78940v0ar)
fmtsmo7894018.joinVoices([smo78940v0]);
const fmtsmo8136618 = new VF.Formatter();
//
// voices and notes for stave 14 18
const smo81366v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo81366v0ar = [];
const smo81350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo81350'] = smo81350;
smo81350.setAttribute('id', 'smo81350');
smo81366v0ar.push(smo81350);
smo81366v0.addTickables(smo81366v0ar)
fmtsmo8136618.joinVoices([smo81366v0]);
const fmtsmo8388818 = new VF.Formatter();
//
// voices and notes for stave 15 18
const smo83888v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo83888v0ar = [];
const smo83870 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo83870'] = smo83870;
smo83870.setAttribute('id', 'smo83870');
smo83888v0ar.push(smo83870);
const smo83871 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo83871'] = smo83871;
smo83871.setAttribute('id', 'smo83871');
smo83888v0ar.push(smo83871);
const smo83872 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo83872'] = smo83872;
smo83872.setAttribute('id', 'smo83872');
smo83888v0ar.push(smo83872);
smo83888v0.addTickables(smo83888v0ar)
fmtsmo8388818.joinVoices([smo83888v0]);
const fmtsmo8635118 = new VF.Formatter();
//
// voices and notes for stave 16 18
const smo86351v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo86351v0ar = [];
const smo86330 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86330'] = smo86330;
smo86330.setAttribute('id', 'smo86330');
const smo863300acc = new VF.Accidental('n');
smo86330.addModifier(smo863300acc, 0);
smo86351v0ar.push(smo86330);
const smo86331 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86331'] = smo86331;
smo86331.setAttribute('id', 'smo86331');
smo86351v0ar.push(smo86331);
const smo86332 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo86332'] = smo86332;
smo86332.setAttribute('id', 'smo86332');
smo86351v0ar.push(smo86332);
const smo86333 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86333'] = smo86333;
smo86333.setAttribute('id', 'smo86333');
smo86351v0ar.push(smo86333);
const smo86334 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86334'] = smo86334;
smo86334.setAttribute('id', 'smo86334');
smo86351v0ar.push(smo86334);
const smo86335 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86335'] = smo86335;
smo86335.setAttribute('id', 'smo86335');
smo86351v0ar.push(smo86335);
smo86351v0.addTickables(smo86351v0ar)
fmtsmo8635118.joinVoices([smo86351v0]);
// create beam groups and tuplets for format grp smo88583 before formatting
 
// formatting measures in staff group smo88583
fmtsmo4817918.format([smo48179v0,smo50606v0,smo53022v0,smo55396v0,smo57747v0], 174);
const stavesmo48179 = new VF.Stave(1632, 183.2253035909339, 188);
stavesmo48179.setAttribute('id', 'stavesmo48179');
stavesmo48179.setBegBarType(VF.Barline.type.NONE);
stavesmo48179.setContext(context);
stavesmo48179.draw();
smo48179v0.draw(context, stavesmo48179);
const stavesmo50606 = new VF.Stave(1632, 288.2253035909339, 188);
stavesmo50606.setAttribute('id', 'stavesmo50606');
stavesmo50606.setBegBarType(VF.Barline.type.NONE);
stavesmo50606.setContext(context);
stavesmo50606.draw();
smo50606v0.draw(context, stavesmo50606);
const stavesmo53022 = new VF.Stave(1632, 379.2253035909339, 188);
stavesmo53022.setAttribute('id', 'stavesmo53022');
stavesmo53022.setBegBarType(VF.Barline.type.NONE);
stavesmo53022.setContext(context);
stavesmo53022.draw();
smo53022v0.draw(context, stavesmo53022);
const stavesmo55396 = new VF.Stave(1632, 479.2253035909339, 188);
stavesmo55396.setAttribute('id', 'stavesmo55396');
stavesmo55396.setBegBarType(VF.Barline.type.NONE);
stavesmo55396.setContext(context);
stavesmo55396.draw();
smo55396v0.draw(context, stavesmo55396);
const stavesmo57747 = new VF.Stave(1632, 549.2253035909339, 188);
stavesmo57747.setAttribute('id', 'stavesmo57747');
stavesmo57747.setBegBarType(VF.Barline.type.NONE);
stavesmo57747.setContext(context);
stavesmo57747.draw();
smo57747v0.draw(context, stavesmo57747);
// create beam groups and tuplets for format grp smo88585 before formatting
 
// formatting measures in staff group smo88585
fmtsmo6005418.format([smo60054v0,smo62460v0,smo64787v0,smo67137v0], 174);
const stavesmo60054 = new VF.Stave(1632, 630.2253035909339, 188);
stavesmo60054.setAttribute('id', 'stavesmo60054');
stavesmo60054.setBegBarType(VF.Barline.type.NONE);
stavesmo60054.setContext(context);
stavesmo60054.draw();
smo60054v0.draw(context, stavesmo60054);
const stavesmo62460 = new VF.Stave(1632, 700.2253035909339, 188);
stavesmo62460.setAttribute('id', 'stavesmo62460');
stavesmo62460.setBegBarType(VF.Barline.type.NONE);
stavesmo62460.setContext(context);
stavesmo62460.draw();
smo62460v0.draw(context, stavesmo62460);
const stavesmo64787 = new VF.Stave(1632, 761.2253035909339, 188);
stavesmo64787.setAttribute('id', 'stavesmo64787');
stavesmo64787.setBegBarType(VF.Barline.type.NONE);
stavesmo64787.setContext(context);
stavesmo64787.draw();
smo64787v0.draw(context, stavesmo64787);
const stavesmo67137 = new VF.Stave(1632, 831.2253035909339, 188);
stavesmo67137.setAttribute('id', 'stavesmo67137');
stavesmo67137.setBegBarType(VF.Barline.type.NONE);
stavesmo67137.setContext(context);
stavesmo67137.draw();
smo67137v0.draw(context, stavesmo67137);
// create beam groups and tuplets for format grp smo88587 before formatting
 
// formatting measures in staff group smo88587
fmtsmo6955918.format([smo69559v0,smo71932v0,smo74278v0,smo76606v0], 174);
const stavesmo69559 = new VF.Stave(1632, 936.2253035909339, 188);
stavesmo69559.setAttribute('id', 'stavesmo69559');
stavesmo69559.setBegBarType(VF.Barline.type.NONE);
stavesmo69559.setContext(context);
stavesmo69559.draw();
smo69559v0.draw(context, stavesmo69559);
const stavesmo71932 = new VF.Stave(1632, 1023.2253035909339, 188);
stavesmo71932.setAttribute('id', 'stavesmo71932');
stavesmo71932.setBegBarType(VF.Barline.type.NONE);
stavesmo71932.setContext(context);
stavesmo71932.draw();
smo71932v0.draw(context, stavesmo71932);
const stavesmo74278 = new VF.Stave(1632, 1128.225303590934, 188);
stavesmo74278.setAttribute('id', 'stavesmo74278');
stavesmo74278.setBegBarType(VF.Barline.type.NONE);
stavesmo74278.setContext(context);
stavesmo74278.draw();
smo74278v0.draw(context, stavesmo74278);
const stavesmo76606 = new VF.Stave(1632, 1213.225303590934, 188);
stavesmo76606.setAttribute('id', 'stavesmo76606');
stavesmo76606.setBegBarType(VF.Barline.type.NONE);
stavesmo76606.setContext(context);
stavesmo76606.draw();
smo76606v0.draw(context, stavesmo76606);
// create beam groups and tuplets for format grp smo81038 before formatting
 
// formatting measures in staff group smo81038
fmtsmo7894018.format([smo78940v0], 174);
const stavesmo78940 = new VF.Stave(1632, 1290.225303590934, 188);
stavesmo78940.setAttribute('id', 'stavesmo78940');
stavesmo78940.setBegBarType(VF.Barline.type.NONE);
stavesmo78940.setContext(context);
stavesmo78940.draw();
smo78940v0.draw(context, stavesmo78940);
// create beam groups and tuplets for format grp smo83506 before formatting
 
// formatting measures in staff group smo83506
fmtsmo8136618.format([smo81366v0], 174);
const stavesmo81366 = new VF.Stave(1632, 1373.225303590934, 188);
stavesmo81366.setAttribute('id', 'stavesmo81366');
stavesmo81366.setBegBarType(VF.Barline.type.NONE);
stavesmo81366.setContext(context);
stavesmo81366.draw();
smo81366v0.draw(context, stavesmo81366);
// create beam groups and tuplets for format grp smo85864 before formatting
 
// formatting measures in staff group smo85864
fmtsmo8388818.format([smo83888v0], 174);
const stavesmo83888 = new VF.Stave(1632, 1478.225303590934, 188);
stavesmo83888.setAttribute('id', 'stavesmo83888');
stavesmo83888.setBegBarType(VF.Barline.type.NONE);
stavesmo83888.setContext(context);
stavesmo83888.draw();
smo83888v0.draw(context, stavesmo83888);
// create beam groups and tuplets for format grp smo88577 before formatting
const dirsmo155014 = smo86330.getStemDirection();
smo86330.setStemDirection(dirsmo155014);
smo86331.setStemDirection(dirsmo155014);
const smo155014 = new VF.Beam([smo86330,smo86331]);
 
// formatting measures in staff group smo88577
fmtsmo8635118.format([smo86351v0], 174);
const stavesmo86351 = new VF.Stave(1632, 1555.225303590934, 188);
stavesmo86351.setAttribute('id', 'stavesmo86351');
stavesmo86351.setBegBarType(VF.Barline.type.NONE);
stavesmo86351.setContext(context);
stavesmo86351.draw();
smo86351v0.draw(context, stavesmo86351);
smo155014.setContext(context);
smo155014.draw();
const fmtsmo4819619 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo48196v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo48196v0ar = [];
const smo48180 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo48180'] = smo48180;
smo48180.setAttribute('id', 'smo48180');
smo48196v0ar.push(smo48180);
smo48196v0.addTickables(smo48196v0ar)
fmtsmo4819619.joinVoices([smo48196v0]);
const fmtsmo5062319 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo50623v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo50623v0ar = [];
const smo50607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo50607'] = smo50607;
smo50607.setAttribute('id', 'smo50607');
smo50623v0ar.push(smo50607);
smo50623v0.addTickables(smo50623v0ar)
fmtsmo5062319.joinVoices([smo50623v0]);
const fmtsmo5303919 = new VF.Formatter();
//
// voices and notes for stave 2 19
const smo53039v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo53039v0ar = [];
const smo53023 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo53023'] = smo53023;
smo53023.setAttribute('id', 'smo53023');
smo53039v0ar.push(smo53023);
smo53039v0.addTickables(smo53039v0ar)
fmtsmo5303919.joinVoices([smo53039v0]);
const fmtsmo5541319 = new VF.Formatter();
//
// voices and notes for stave 3 19
const smo55413v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo55413v0ar = [];
const smo55397 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo55397'] = smo55397;
smo55397.setAttribute('id', 'smo55397');
smo55413v0ar.push(smo55397);
smo55413v0.addTickables(smo55413v0ar)
fmtsmo5541319.joinVoices([smo55413v0]);
const fmtsmo5776419 = new VF.Formatter();
//
// voices and notes for stave 4 19
const smo57764v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo57764v0ar = [];
const smo57748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo57748'] = smo57748;
smo57748.setAttribute('id', 'smo57748');
smo57764v0ar.push(smo57748);
smo57764v0.addTickables(smo57764v0ar)
fmtsmo5776419.joinVoices([smo57764v0]);
const fmtsmo6007119 = new VF.Formatter();
//
// voices and notes for stave 5 19
const smo60071v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo60071v0ar = [];
const smo60055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60055'] = smo60055;
smo60055.setAttribute('id', 'smo60055');
smo60071v0ar.push(smo60055);
smo60071v0.addTickables(smo60071v0ar)
fmtsmo6007119.joinVoices([smo60071v0]);
const fmtsmo6247719 = new VF.Formatter();
//
// voices and notes for stave 6 19
const smo62477v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo62477v0ar = [];
const smo62461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62461'] = smo62461;
smo62461.setAttribute('id', 'smo62461');
smo62477v0ar.push(smo62461);
smo62477v0.addTickables(smo62477v0ar)
fmtsmo6247719.joinVoices([smo62477v0]);
const fmtsmo6480419 = new VF.Formatter();
//
// voices and notes for stave 7 19
const smo64804v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo64804v0ar = [];
const smo64788 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64788'] = smo64788;
smo64788.setAttribute('id', 'smo64788');
smo64804v0ar.push(smo64788);
smo64804v0.addTickables(smo64804v0ar)
fmtsmo6480419.joinVoices([smo64804v0]);
const fmtsmo6715419 = new VF.Formatter();
//
// voices and notes for stave 8 19
const smo67154v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo67154v0ar = [];
const smo67138 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo67138'] = smo67138;
smo67138.setAttribute('id', 'smo67138');
smo67154v0ar.push(smo67138);
smo67154v0.addTickables(smo67154v0ar)
fmtsmo6715419.joinVoices([smo67154v0]);
const fmtsmo6957619 = new VF.Formatter();
//
// voices and notes for stave 9 19
const smo69576v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo69576v0ar = [];
const smo69560 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo69560'] = smo69560;
smo69560.setAttribute('id', 'smo69560');
smo69576v0ar.push(smo69560);
smo69576v0.addTickables(smo69576v0ar)
fmtsmo6957619.joinVoices([smo69576v0]);
const fmtsmo7194919 = new VF.Formatter();
//
// voices and notes for stave 10 19
const smo71949v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo71949v0ar = [];
const smo71933 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo71933'] = smo71933;
smo71933.setAttribute('id', 'smo71933');
smo71949v0ar.push(smo71933);
smo71949v0.addTickables(smo71949v0ar)
fmtsmo7194919.joinVoices([smo71949v0]);
const fmtsmo7429519 = new VF.Formatter();
//
// voices and notes for stave 11 19
const smo74295v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo74295v0ar = [];
const smo74279 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo74279'] = smo74279;
smo74279.setAttribute('id', 'smo74279');
smo74295v0ar.push(smo74279);
smo74295v0.addTickables(smo74295v0ar)
fmtsmo7429519.joinVoices([smo74295v0]);
const fmtsmo7662319 = new VF.Formatter();
//
// voices and notes for stave 12 19
const smo76623v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo76623v0ar = [];
const smo76607 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo76607'] = smo76607;
smo76607.setAttribute('id', 'smo76607');
smo76623v0ar.push(smo76607);
smo76623v0.addTickables(smo76623v0ar)
fmtsmo7662319.joinVoices([smo76623v0]);
const fmtsmo7895719 = new VF.Formatter();
//
// voices and notes for stave 13 19
const smo78957v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo78957v0ar = [];
const smo78941 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo78941'] = smo78941;
smo78941.setAttribute('id', 'smo78941');
smo78957v0ar.push(smo78941);
smo78957v0.addTickables(smo78957v0ar)
fmtsmo7895719.joinVoices([smo78957v0]);
const fmtsmo8138319 = new VF.Formatter();
//
// voices and notes for stave 14 19
const smo81383v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo81383v0ar = [];
const smo81367 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo81367'] = smo81367;
smo81367.setAttribute('id', 'smo81367');
smo81383v0ar.push(smo81367);
smo81383v0.addTickables(smo81383v0ar)
fmtsmo8138319.joinVoices([smo81383v0]);
const fmtsmo8390719 = new VF.Formatter();
//
// voices and notes for stave 15 19
const smo83907v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo83907v0ar = [];
const smo83889 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo83889'] = smo83889;
smo83889.setAttribute('id', 'smo83889');
smo83907v0ar.push(smo83889);
const smo83890 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo83890'] = smo83890;
smo83890.setAttribute('id', 'smo83890');
smo83907v0ar.push(smo83890);
const smo83891 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo83891'] = smo83891;
smo83891.setAttribute('id', 'smo83891');
smo83907v0ar.push(smo83891);
smo83907v0.addTickables(smo83907v0ar)
fmtsmo8390719.joinVoices([smo83907v0]);
const fmtsmo8637119 = new VF.Formatter();
//
// voices and notes for stave 16 19
const smo86371v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo86371v0ar = [];
const smo86352 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86352'] = smo86352;
smo86352.setAttribute('id', 'smo86352');
const smo863520acc = new VF.Accidental('n');
smo86352.addModifier(smo863520acc, 0);
smo86371v0ar.push(smo86352);
const smo86353 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86353'] = smo86353;
smo86353.setAttribute('id', 'smo86353');
smo86371v0ar.push(smo86353);
const smo86354 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86354'] = smo86354;
smo86354.setAttribute('id', 'smo86354');
smo86371v0ar.push(smo86354);
const smo86355 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86355'] = smo86355;
smo86355.setAttribute('id', 'smo86355');
smo86371v0ar.push(smo86355);
smo86371v0.addTickables(smo86371v0ar)
fmtsmo8637119.joinVoices([smo86371v0]);
// create beam groups and tuplets for format grp smo88583 before formatting
 
// formatting measures in staff group smo88583
fmtsmo4819619.format([smo48196v0,smo50623v0,smo53039v0,smo55413v0,smo57764v0], 101);
const stavesmo48196 = new VF.Stave(1820, 183.2253035909339, 115);
stavesmo48196.setAttribute('id', 'stavesmo48196');
stavesmo48196.setBegBarType(VF.Barline.type.NONE);
stavesmo48196.setContext(context);
stavesmo48196.draw();
smo48196v0.draw(context, stavesmo48196);
const stavesmo50623 = new VF.Stave(1820, 288.2253035909339, 115);
stavesmo50623.setAttribute('id', 'stavesmo50623');
stavesmo50623.setBegBarType(VF.Barline.type.NONE);
stavesmo50623.setContext(context);
stavesmo50623.draw();
smo50623v0.draw(context, stavesmo50623);
const stavesmo53039 = new VF.Stave(1820, 379.2253035909339, 115);
stavesmo53039.setAttribute('id', 'stavesmo53039');
stavesmo53039.setBegBarType(VF.Barline.type.NONE);
stavesmo53039.setContext(context);
stavesmo53039.draw();
smo53039v0.draw(context, stavesmo53039);
const stavesmo55413 = new VF.Stave(1820, 479.2253035909339, 115);
stavesmo55413.setAttribute('id', 'stavesmo55413');
stavesmo55413.setBegBarType(VF.Barline.type.NONE);
stavesmo55413.setContext(context);
stavesmo55413.draw();
smo55413v0.draw(context, stavesmo55413);
const stavesmo57764 = new VF.Stave(1820, 549.2253035909339, 115);
stavesmo57764.setAttribute('id', 'stavesmo57764');
stavesmo57764.setBegBarType(VF.Barline.type.NONE);
stavesmo57764.setContext(context);
stavesmo57764.draw();
smo57764v0.draw(context, stavesmo57764);
// create beam groups and tuplets for format grp smo88585 before formatting
 
// formatting measures in staff group smo88585
fmtsmo6007119.format([smo60071v0,smo62477v0,smo64804v0,smo67154v0], 101);
const stavesmo60071 = new VF.Stave(1820, 630.2253035909339, 115);
stavesmo60071.setAttribute('id', 'stavesmo60071');
stavesmo60071.setBegBarType(VF.Barline.type.NONE);
stavesmo60071.setContext(context);
stavesmo60071.draw();
smo60071v0.draw(context, stavesmo60071);
const stavesmo62477 = new VF.Stave(1820, 700.2253035909339, 115);
stavesmo62477.setAttribute('id', 'stavesmo62477');
stavesmo62477.setBegBarType(VF.Barline.type.NONE);
stavesmo62477.setContext(context);
stavesmo62477.draw();
smo62477v0.draw(context, stavesmo62477);
const stavesmo64804 = new VF.Stave(1820, 761.2253035909339, 115);
stavesmo64804.setAttribute('id', 'stavesmo64804');
stavesmo64804.setBegBarType(VF.Barline.type.NONE);
stavesmo64804.setContext(context);
stavesmo64804.draw();
smo64804v0.draw(context, stavesmo64804);
const stavesmo67154 = new VF.Stave(1820, 831.2253035909339, 115);
stavesmo67154.setAttribute('id', 'stavesmo67154');
stavesmo67154.setBegBarType(VF.Barline.type.NONE);
stavesmo67154.setContext(context);
stavesmo67154.draw();
smo67154v0.draw(context, stavesmo67154);
// create beam groups and tuplets for format grp smo88587 before formatting
 
// formatting measures in staff group smo88587
fmtsmo6957619.format([smo69576v0,smo71949v0,smo74295v0,smo76623v0], 101);
const stavesmo69576 = new VF.Stave(1820, 936.2253035909339, 115);
stavesmo69576.setAttribute('id', 'stavesmo69576');
stavesmo69576.setBegBarType(VF.Barline.type.NONE);
stavesmo69576.setContext(context);
stavesmo69576.draw();
smo69576v0.draw(context, stavesmo69576);
const stavesmo71949 = new VF.Stave(1820, 1023.2253035909339, 115);
stavesmo71949.setAttribute('id', 'stavesmo71949');
stavesmo71949.setBegBarType(VF.Barline.type.NONE);
stavesmo71949.setContext(context);
stavesmo71949.draw();
smo71949v0.draw(context, stavesmo71949);
const stavesmo74295 = new VF.Stave(1820, 1128.225303590934, 115);
stavesmo74295.setAttribute('id', 'stavesmo74295');
stavesmo74295.setBegBarType(VF.Barline.type.NONE);
stavesmo74295.setContext(context);
stavesmo74295.draw();
smo74295v0.draw(context, stavesmo74295);
const stavesmo76623 = new VF.Stave(1820, 1213.225303590934, 115);
stavesmo76623.setAttribute('id', 'stavesmo76623');
stavesmo76623.setBegBarType(VF.Barline.type.NONE);
stavesmo76623.setContext(context);
stavesmo76623.draw();
smo76623v0.draw(context, stavesmo76623);
// create beam groups and tuplets for format grp smo81038 before formatting
 
// formatting measures in staff group smo81038
fmtsmo7895719.format([smo78957v0], 101);
const stavesmo78957 = new VF.Stave(1820, 1290.225303590934, 115);
stavesmo78957.setAttribute('id', 'stavesmo78957');
stavesmo78957.setBegBarType(VF.Barline.type.NONE);
stavesmo78957.setContext(context);
stavesmo78957.draw();
smo78957v0.draw(context, stavesmo78957);
// create beam groups and tuplets for format grp smo83506 before formatting
 
// formatting measures in staff group smo83506
fmtsmo8138319.format([smo81383v0], 101);
const stavesmo81383 = new VF.Stave(1820, 1373.225303590934, 115);
stavesmo81383.setAttribute('id', 'stavesmo81383');
stavesmo81383.setBegBarType(VF.Barline.type.NONE);
stavesmo81383.setContext(context);
stavesmo81383.draw();
smo81383v0.draw(context, stavesmo81383);
// create beam groups and tuplets for format grp smo85864 before formatting
 
// formatting measures in staff group smo85864
fmtsmo8390719.format([smo83907v0], 101);
const stavesmo83907 = new VF.Stave(1820, 1478.225303590934, 115);
stavesmo83907.setAttribute('id', 'stavesmo83907');
stavesmo83907.setBegBarType(VF.Barline.type.NONE);
stavesmo83907.setContext(context);
stavesmo83907.draw();
smo83907v0.draw(context, stavesmo83907);
// create beam groups and tuplets for format grp smo88577 before formatting
 
// formatting measures in staff group smo88577
fmtsmo8637119.format([smo86371v0], 101);
const stavesmo86371 = new VF.Stave(1820, 1555.225303590934, 115);
stavesmo86371.setAttribute('id', 'stavesmo86371');
stavesmo86371.setBegBarType(VF.Barline.type.NONE);
stavesmo86371.setContext(context);
stavesmo86371.draw();
smo86371v0.draw(context, stavesmo86371);
const fmtsmo4821320 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo48213v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo48213v0ar = [];
const smo48197 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo48197'] = smo48197;
smo48197.setAttribute('id', 'smo48197');
smo48213v0ar.push(smo48197);
smo48213v0.addTickables(smo48213v0ar)
fmtsmo4821320.joinVoices([smo48213v0]);
const fmtsmo5064020 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo50640v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo50640v0ar = [];
const smo50624 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo50624'] = smo50624;
smo50624.setAttribute('id', 'smo50624');
smo50640v0ar.push(smo50624);
smo50640v0.addTickables(smo50640v0ar)
fmtsmo5064020.joinVoices([smo50640v0]);
const fmtsmo5305620 = new VF.Formatter();
//
// voices and notes for stave 2 20
const smo53056v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo53056v0ar = [];
const smo53040 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo53040'] = smo53040;
smo53040.setAttribute('id', 'smo53040');
smo53056v0ar.push(smo53040);
smo53056v0.addTickables(smo53056v0ar)
fmtsmo5305620.joinVoices([smo53056v0]);
const fmtsmo5543020 = new VF.Formatter();
//
// voices and notes for stave 3 20
const smo55430v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo55430v0ar = [];
const smo55414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo55414'] = smo55414;
smo55414.setAttribute('id', 'smo55414');
smo55430v0ar.push(smo55414);
smo55430v0.addTickables(smo55430v0ar)
fmtsmo5543020.joinVoices([smo55430v0]);
const fmtsmo5778120 = new VF.Formatter();
//
// voices and notes for stave 4 20
const smo57781v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo57781v0ar = [];
const smo57765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo57765'] = smo57765;
smo57765.setAttribute('id', 'smo57765');
smo57781v0ar.push(smo57765);
smo57781v0.addTickables(smo57781v0ar)
fmtsmo5778120.joinVoices([smo57781v0]);
const fmtsmo6008820 = new VF.Formatter();
//
// voices and notes for stave 5 20
const smo60088v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo60088v0ar = [];
const smo60072 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60072'] = smo60072;
smo60072.setAttribute('id', 'smo60072');
smo60088v0ar.push(smo60072);
smo60088v0.addTickables(smo60088v0ar)
fmtsmo6008820.joinVoices([smo60088v0]);
const fmtsmo6249420 = new VF.Formatter();
//
// voices and notes for stave 6 20
const smo62494v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo62494v0ar = [];
const smo62478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62478'] = smo62478;
smo62478.setAttribute('id', 'smo62478');
smo62494v0ar.push(smo62478);
smo62494v0.addTickables(smo62494v0ar)
fmtsmo6249420.joinVoices([smo62494v0]);
const fmtsmo6482120 = new VF.Formatter();
//
// voices and notes for stave 7 20
const smo64821v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo64821v0ar = [];
const smo64805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64805'] = smo64805;
smo64805.setAttribute('id', 'smo64805');
smo64821v0ar.push(smo64805);
smo64821v0.addTickables(smo64821v0ar)
fmtsmo6482120.joinVoices([smo64821v0]);
const fmtsmo6717120 = new VF.Formatter();
//
// voices and notes for stave 8 20
const smo67171v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo67171v0ar = [];
const smo67155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo67155'] = smo67155;
smo67155.setAttribute('id', 'smo67155');
smo67171v0ar.push(smo67155);
smo67171v0.addTickables(smo67171v0ar)
fmtsmo6717120.joinVoices([smo67171v0]);
const fmtsmo6959320 = new VF.Formatter();
//
// voices and notes for stave 9 20
const smo69593v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo69593v0ar = [];
const smo69577 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo69577'] = smo69577;
smo69577.setAttribute('id', 'smo69577');
smo69593v0ar.push(smo69577);
smo69593v0.addTickables(smo69593v0ar)
fmtsmo6959320.joinVoices([smo69593v0]);
const fmtsmo7196620 = new VF.Formatter();
//
// voices and notes for stave 10 20
const smo71966v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo71966v0ar = [];
const smo71950 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo71950'] = smo71950;
smo71950.setAttribute('id', 'smo71950');
smo71966v0ar.push(smo71950);
smo71966v0.addTickables(smo71966v0ar)
fmtsmo7196620.joinVoices([smo71966v0]);
const fmtsmo7431220 = new VF.Formatter();
//
// voices and notes for stave 11 20
const smo74312v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo74312v0ar = [];
const smo74296 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo74296'] = smo74296;
smo74296.setAttribute('id', 'smo74296');
smo74312v0ar.push(smo74296);
smo74312v0.addTickables(smo74312v0ar)
fmtsmo7431220.joinVoices([smo74312v0]);
const fmtsmo7664020 = new VF.Formatter();
//
// voices and notes for stave 12 20
const smo76640v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo76640v0ar = [];
const smo76624 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo76624'] = smo76624;
smo76624.setAttribute('id', 'smo76624');
smo76640v0ar.push(smo76624);
smo76640v0.addTickables(smo76640v0ar)
fmtsmo7664020.joinVoices([smo76640v0]);
const fmtsmo7897420 = new VF.Formatter();
//
// voices and notes for stave 13 20
const smo78974v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo78974v0ar = [];
const smo78958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo78958'] = smo78958;
smo78958.setAttribute('id', 'smo78958');
smo78974v0ar.push(smo78958);
smo78974v0.addTickables(smo78974v0ar)
fmtsmo7897420.joinVoices([smo78974v0]);
const fmtsmo8140020 = new VF.Formatter();
//
// voices and notes for stave 14 20
const smo81400v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo81400v0ar = [];
const smo81384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo81384'] = smo81384;
smo81384.setAttribute('id', 'smo81384');
smo81400v0ar.push(smo81384);
smo81400v0.addTickables(smo81400v0ar)
fmtsmo8140020.joinVoices([smo81400v0]);
const fmtsmo8392620 = new VF.Formatter();
//
// voices and notes for stave 15 20
const smo83926v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo83926v0ar = [];
const smo83908 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo83908'] = smo83908;
smo83908.setAttribute('id', 'smo83908');
smo83926v0ar.push(smo83908);
const smo83909 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo83909'] = smo83909;
smo83909.setAttribute('id', 'smo83909');
smo83926v0ar.push(smo83909);
const smo83910 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo83910'] = smo83910;
smo83910.setAttribute('id', 'smo83910');
smo83926v0ar.push(smo83910);
smo83926v0.addTickables(smo83926v0ar)
fmtsmo8392620.joinVoices([smo83926v0]);
const fmtsmo8639320 = new VF.Formatter();
//
// voices and notes for stave 16 20
const smo86393v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo86393v0ar = [];
const smo86372 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86372'] = smo86372;
smo86372.setAttribute('id', 'smo86372');
const smo863720acc = new VF.Accidental('n');
smo86372.addModifier(smo863720acc, 0);
smo86393v0ar.push(smo86372);
const smo86373 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86373'] = smo86373;
smo86373.setAttribute('id', 'smo86373');
smo86393v0ar.push(smo86373);
const smo86374 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo86374'] = smo86374;
smo86374.setAttribute('id', 'smo86374');
smo86393v0ar.push(smo86374);
const smo86375 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86375'] = smo86375;
smo86375.setAttribute('id', 'smo86375');
smo86393v0ar.push(smo86375);
const smo86376 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86376'] = smo86376;
smo86376.setAttribute('id', 'smo86376');
smo86393v0ar.push(smo86376);
const smo86377 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86377'] = smo86377;
smo86377.setAttribute('id', 'smo86377');
smo86393v0ar.push(smo86377);
smo86393v0.addTickables(smo86393v0ar)
fmtsmo8639320.joinVoices([smo86393v0]);
// create beam groups and tuplets for format grp smo88583 before formatting
 
// formatting measures in staff group smo88583
fmtsmo4821320.format([smo48213v0,smo50640v0,smo53056v0,smo55430v0,smo57781v0], 166);
const stavesmo48213 = new VF.Stave(1935, 183.2253035909339, 181);
stavesmo48213.setAttribute('id', 'stavesmo48213');
stavesmo48213.setBegBarType(VF.Barline.type.NONE);
stavesmo48213.setEndBarType(2);
stavesmo48213.setContext(context);
stavesmo48213.draw();
smo48213v0.draw(context, stavesmo48213);
const stavesmo50640 = new VF.Stave(1935, 288.2253035909339, 181);
stavesmo50640.setAttribute('id', 'stavesmo50640');
stavesmo50640.setBegBarType(VF.Barline.type.NONE);
stavesmo50640.setEndBarType(2);
stavesmo50640.setContext(context);
stavesmo50640.draw();
smo50640v0.draw(context, stavesmo50640);
const stavesmo53056 = new VF.Stave(1935, 379.2253035909339, 181);
stavesmo53056.setAttribute('id', 'stavesmo53056');
stavesmo53056.setBegBarType(VF.Barline.type.NONE);
stavesmo53056.setEndBarType(2);
stavesmo53056.setContext(context);
stavesmo53056.draw();
smo53056v0.draw(context, stavesmo53056);
const stavesmo55430 = new VF.Stave(1935, 479.2253035909339, 181);
stavesmo55430.setAttribute('id', 'stavesmo55430');
stavesmo55430.setBegBarType(VF.Barline.type.NONE);
stavesmo55430.setEndBarType(2);
stavesmo55430.setContext(context);
stavesmo55430.draw();
smo55430v0.draw(context, stavesmo55430);
const stavesmo57781 = new VF.Stave(1935, 549.2253035909339, 181);
stavesmo57781.setAttribute('id', 'stavesmo57781');
stavesmo57781.setBegBarType(VF.Barline.type.NONE);
stavesmo57781.setEndBarType(2);
stavesmo57781.setContext(context);
stavesmo57781.draw();
smo57781v0.draw(context, stavesmo57781);
// create beam groups and tuplets for format grp smo88585 before formatting
 
// formatting measures in staff group smo88585
fmtsmo6008820.format([smo60088v0,smo62494v0,smo64821v0,smo67171v0], 166);
const stavesmo60088 = new VF.Stave(1935, 630.2253035909339, 181);
stavesmo60088.setAttribute('id', 'stavesmo60088');
stavesmo60088.setBegBarType(VF.Barline.type.NONE);
stavesmo60088.setEndBarType(2);
stavesmo60088.setContext(context);
stavesmo60088.draw();
smo60088v0.draw(context, stavesmo60088);
const stavesmo62494 = new VF.Stave(1935, 700.2253035909339, 181);
stavesmo62494.setAttribute('id', 'stavesmo62494');
stavesmo62494.setBegBarType(VF.Barline.type.NONE);
stavesmo62494.setEndBarType(2);
stavesmo62494.setContext(context);
stavesmo62494.draw();
smo62494v0.draw(context, stavesmo62494);
const stavesmo64821 = new VF.Stave(1935, 761.2253035909339, 181);
stavesmo64821.setAttribute('id', 'stavesmo64821');
stavesmo64821.setBegBarType(VF.Barline.type.NONE);
stavesmo64821.setEndBarType(2);
stavesmo64821.setContext(context);
stavesmo64821.draw();
smo64821v0.draw(context, stavesmo64821);
const stavesmo67171 = new VF.Stave(1935, 831.2253035909339, 181);
stavesmo67171.setAttribute('id', 'stavesmo67171');
stavesmo67171.setBegBarType(VF.Barline.type.NONE);
stavesmo67171.setEndBarType(2);
stavesmo67171.setContext(context);
stavesmo67171.draw();
smo67171v0.draw(context, stavesmo67171);
// create beam groups and tuplets for format grp smo88587 before formatting
 
// formatting measures in staff group smo88587
fmtsmo6959320.format([smo69593v0,smo71966v0,smo74312v0,smo76640v0], 166);
const stavesmo69593 = new VF.Stave(1935, 936.2253035909339, 181);
stavesmo69593.setAttribute('id', 'stavesmo69593');
stavesmo69593.setBegBarType(VF.Barline.type.NONE);
stavesmo69593.setEndBarType(2);
stavesmo69593.setContext(context);
stavesmo69593.draw();
smo69593v0.draw(context, stavesmo69593);
const stavesmo71966 = new VF.Stave(1935, 1023.2253035909339, 181);
stavesmo71966.setAttribute('id', 'stavesmo71966');
stavesmo71966.setBegBarType(VF.Barline.type.NONE);
stavesmo71966.setEndBarType(2);
stavesmo71966.setContext(context);
stavesmo71966.draw();
smo71966v0.draw(context, stavesmo71966);
const stavesmo74312 = new VF.Stave(1935, 1128.225303590934, 181);
stavesmo74312.setAttribute('id', 'stavesmo74312');
stavesmo74312.setBegBarType(VF.Barline.type.NONE);
stavesmo74312.setEndBarType(2);
stavesmo74312.setContext(context);
stavesmo74312.draw();
smo74312v0.draw(context, stavesmo74312);
const stavesmo76640 = new VF.Stave(1935, 1213.225303590934, 181);
stavesmo76640.setAttribute('id', 'stavesmo76640');
stavesmo76640.setBegBarType(VF.Barline.type.NONE);
stavesmo76640.setEndBarType(2);
stavesmo76640.setContext(context);
stavesmo76640.draw();
smo76640v0.draw(context, stavesmo76640);
// create beam groups and tuplets for format grp smo81038 before formatting
 
// formatting measures in staff group smo81038
fmtsmo7897420.format([smo78974v0], 166);
const stavesmo78974 = new VF.Stave(1935, 1290.225303590934, 181);
stavesmo78974.setAttribute('id', 'stavesmo78974');
stavesmo78974.setBegBarType(VF.Barline.type.NONE);
stavesmo78974.setEndBarType(2);
stavesmo78974.setContext(context);
stavesmo78974.draw();
smo78974v0.draw(context, stavesmo78974);
// create beam groups and tuplets for format grp smo83506 before formatting
 
// formatting measures in staff group smo83506
fmtsmo8140020.format([smo81400v0], 166);
const stavesmo81400 = new VF.Stave(1935, 1373.225303590934, 181);
stavesmo81400.setAttribute('id', 'stavesmo81400');
stavesmo81400.setBegBarType(VF.Barline.type.NONE);
stavesmo81400.setEndBarType(2);
stavesmo81400.setContext(context);
stavesmo81400.draw();
smo81400v0.draw(context, stavesmo81400);
// create beam groups and tuplets for format grp smo85864 before formatting
 
// formatting measures in staff group smo85864
fmtsmo8392620.format([smo83926v0], 166);
const stavesmo83926 = new VF.Stave(1935, 1478.225303590934, 181);
stavesmo83926.setAttribute('id', 'stavesmo83926');
stavesmo83926.setBegBarType(VF.Barline.type.NONE);
stavesmo83926.setEndBarType(2);
stavesmo83926.setContext(context);
stavesmo83926.draw();
smo83926v0.draw(context, stavesmo83926);
// create beam groups and tuplets for format grp smo88577 before formatting
const dirsmo155067 = smo86372.getStemDirection();
smo86372.setStemDirection(dirsmo155067);
smo86373.setStemDirection(dirsmo155067);
const smo155067 = new VF.Beam([smo86372,smo86373]);
 
// formatting measures in staff group smo88577
fmtsmo8639320.format([smo86393v0], 166);
const stavesmo86393 = new VF.Stave(1935, 1555.225303590934, 181);
stavesmo86393.setAttribute('id', 'stavesmo86393');
stavesmo86393.setBegBarType(VF.Barline.type.NONE);
stavesmo86393.setEndBarType(2);
stavesmo86393.setContext(context);
stavesmo86393.draw();
smo86393v0.draw(context, stavesmo86393);
smo155067.setContext(context);
smo155067.draw();
const fmtsmo4823521 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo48235v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo48235v0ar = [];
const smo48214 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo48214'] = smo48214;
smo48214.setAttribute('id', 'smo48214');
smo48214.addModifier(new VF.Dot(), 0);
smo48235v0ar.push(smo48214);
const smo48216 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo48216'] = smo48216;
smo48216.setAttribute('id', 'smo48216');
smo48235v0ar.push(smo48216);
const smo48217 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo48217'] = smo48217;
smo48217.setAttribute('id', 'smo48217');
smo48235v0ar.push(smo48217);
const smo48218 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo48218'] = smo48218;
smo48218.setAttribute('id', 'smo48218');
smo48235v0ar.push(smo48218);
smo48235v0.addTickables(smo48235v0ar)
fmtsmo4823521.joinVoices([smo48235v0]);
const fmtsmo5066221 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo50662v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo50662v0ar = [];
const smo50641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo50641'] = smo50641;
smo50641.setAttribute('id', 'smo50641');
smo50641.addModifier(new VF.Dot(), 0);
smo50662v0ar.push(smo50641);
const smo50643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo50643'] = smo50643;
smo50643.setAttribute('id', 'smo50643');
smo50662v0ar.push(smo50643);
const smo50644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo50644'] = smo50644;
smo50644.setAttribute('id', 'smo50644');
smo50662v0ar.push(smo50644);
const smo50645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo50645'] = smo50645;
smo50645.setAttribute('id', 'smo50645');
smo50662v0ar.push(smo50645);
smo50662v0.addTickables(smo50662v0ar)
fmtsmo5066221.joinVoices([smo50662v0]);
const fmtsmo5307821 = new VF.Formatter();
//
// voices and notes for stave 2 21
const smo53078v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo53078v0ar = [];
const smo53057 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo53057'] = smo53057;
smo53057.setAttribute('id', 'smo53057');
smo53057.addModifier(new VF.Dot(), 0);
smo53078v0ar.push(smo53057);
const smo53059 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo53059'] = smo53059;
smo53059.setAttribute('id', 'smo53059');
smo53078v0ar.push(smo53059);
const smo53060 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo53060'] = smo53060;
smo53060.setAttribute('id', 'smo53060');
smo53078v0ar.push(smo53060);
const smo53061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo53061'] = smo53061;
smo53061.setAttribute('id', 'smo53061');
smo53078v0ar.push(smo53061);
smo53078v0.addTickables(smo53078v0ar)
fmtsmo5307821.joinVoices([smo53078v0]);
const fmtsmo5545221 = new VF.Formatter();
//
// voices and notes for stave 3 21
const smo55452v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo55452v0ar = [];
const smo55431 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo55431'] = smo55431;
smo55431.setAttribute('id', 'smo55431');
smo55431.addModifier(new VF.Dot(), 0);
smo55452v0ar.push(smo55431);
const smo55433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo55433'] = smo55433;
smo55433.setAttribute('id', 'smo55433');
smo55452v0ar.push(smo55433);
const smo55434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo55434'] = smo55434;
smo55434.setAttribute('id', 'smo55434');
smo55452v0ar.push(smo55434);
const smo55435 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo55435'] = smo55435;
smo55435.setAttribute('id', 'smo55435');
smo55452v0ar.push(smo55435);
smo55452v0.addTickables(smo55452v0ar)
fmtsmo5545221.joinVoices([smo55452v0]);
const fmtsmo5779921 = new VF.Formatter();
//
// voices and notes for stave 4 21
const smo57799v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo57799v0ar = [];
const smo57782 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo57782'] = smo57782;
smo57782.setAttribute('id', 'smo57782');
smo57799v0ar.push(smo57782);
smo57799v0.addTickables(smo57799v0ar)
fmtsmo5779921.joinVoices([smo57799v0]);
const fmtsmo6010821 = new VF.Formatter();
//
// voices and notes for stave 5 21
const smo60108v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo60108v0ar = [];
const smo60089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60089'] = smo60089;
smo60089.setAttribute('id', 'smo60089');
smo60108v0ar.push(smo60089);
const smo60090 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo60090'] = smo60090;
smo60090.setAttribute('id', 'smo60090');
smo60108v0ar.push(smo60090);
const smo60091 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo60091'] = smo60091;
smo60091.setAttribute('id', 'smo60091');
smo60108v0ar.push(smo60091);
smo60108v0.addTickables(smo60108v0ar)
fmtsmo6010821.joinVoices([smo60108v0]);
const fmtsmo6251421 = new VF.Formatter();
//
// voices and notes for stave 6 21
const smo62514v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo62514v0ar = [];
const smo62495 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62495'] = smo62495;
smo62495.setAttribute('id', 'smo62495');
smo62514v0ar.push(smo62495);
const smo62496 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo62496'] = smo62496;
smo62496.setAttribute('id', 'smo62496');
smo62514v0ar.push(smo62496);
const smo62497 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo62497'] = smo62497;
smo62497.setAttribute('id', 'smo62497');
smo62514v0ar.push(smo62497);
smo62514v0.addTickables(smo62514v0ar)
fmtsmo6251421.joinVoices([smo62514v0]);
const fmtsmo6484121 = new VF.Formatter();
//
// voices and notes for stave 7 21
const smo64841v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo64841v0ar = [];
const smo64822 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64822'] = smo64822;
smo64822.setAttribute('id', 'smo64822');
smo64841v0ar.push(smo64822);
const smo64823 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64823'] = smo64823;
smo64823.setAttribute('id', 'smo64823');
smo64841v0ar.push(smo64823);
const smo64824 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo64824'] = smo64824;
smo64824.setAttribute('id', 'smo64824');
smo64841v0ar.push(smo64824);
smo64841v0.addTickables(smo64841v0ar)
fmtsmo6484121.joinVoices([smo64841v0]);
const fmtsmo6719121 = new VF.Formatter();
//
// voices and notes for stave 8 21
const smo67191v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo67191v0ar = [];
const smo67172 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo67172'] = smo67172;
smo67172.setAttribute('id', 'smo67172');
smo67191v0ar.push(smo67172);
const smo67173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo67173'] = smo67173;
smo67173.setAttribute('id', 'smo67173');
smo67191v0ar.push(smo67173);
const smo67174 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo67174'] = smo67174;
smo67174.setAttribute('id', 'smo67174');
smo67191v0ar.push(smo67174);
smo67191v0.addTickables(smo67191v0ar)
fmtsmo6719121.joinVoices([smo67191v0]);
const fmtsmo6961121 = new VF.Formatter();
//
// voices and notes for stave 9 21
const smo69611v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo69611v0ar = [];
const smo69594 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo69594'] = smo69594;
smo69594.setAttribute('id', 'smo69594');
smo69611v0ar.push(smo69594);
smo69611v0.addTickables(smo69611v0ar)
fmtsmo6961121.joinVoices([smo69611v0]);
const fmtsmo7198421 = new VF.Formatter();
//
// voices and notes for stave 10 21
const smo71984v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo71984v0ar = [];
const smo71967 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo71967'] = smo71967;
smo71967.setAttribute('id', 'smo71967');
smo71984v0ar.push(smo71967);
smo71984v0.addTickables(smo71984v0ar)
fmtsmo7198421.joinVoices([smo71984v0]);
const fmtsmo7433021 = new VF.Formatter();
//
// voices and notes for stave 11 21
const smo74330v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo74330v0ar = [];
const smo74313 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo74313'] = smo74313;
smo74313.setAttribute('id', 'smo74313');
smo74330v0ar.push(smo74313);
smo74330v0.addTickables(smo74330v0ar)
fmtsmo7433021.joinVoices([smo74330v0]);
const fmtsmo7665821 = new VF.Formatter();
//
// voices and notes for stave 12 21
const smo76658v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo76658v0ar = [];
const smo76641 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo76641'] = smo76641;
smo76641.setAttribute('id', 'smo76641');
smo76658v0ar.push(smo76641);
smo76658v0.addTickables(smo76658v0ar)
fmtsmo7665821.joinVoices([smo76658v0]);
const fmtsmo7899521 = new VF.Formatter();
//
// voices and notes for stave 13 21
const smo78995v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo78995v0ar = [];
const smo78975 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo78975'] = smo78975;
smo78975.setAttribute('id', 'smo78975');
smo78995v0ar.push(smo78975);
const smo78976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo78976'] = smo78976;
smo78976.setAttribute('id', 'smo78976');
smo78995v0ar.push(smo78976);
const smo78977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo78977'] = smo78977;
smo78977.setAttribute('id', 'smo78977');
smo78995v0ar.push(smo78977);
const smo78978 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo78978'] = smo78978;
smo78978.setAttribute('id', 'smo78978');
smo78995v0ar.push(smo78978);
smo78995v0.addTickables(smo78995v0ar)
fmtsmo7899521.joinVoices([smo78995v0]);
const fmtsmo8142321 = new VF.Formatter();
//
// voices and notes for stave 14 21
const smo81423v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo81423v0ar = [];
const smo81401 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo81401'] = smo81401;
smo81401.setAttribute('id', 'smo81401');
smo81423v0ar.push(smo81401);
const smo81402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo81402'] = smo81402;
smo81402.setAttribute('id', 'smo81402');
smo81423v0ar.push(smo81402);
const smo81403 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo81403'] = smo81403;
smo81403.setAttribute('id', 'smo81403');
smo81423v0ar.push(smo81403);
const smo81404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo81404'] = smo81404;
smo81404.setAttribute('id', 'smo81404');
smo81423v0ar.push(smo81404);
const smo81405 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo81405'] = smo81405;
smo81405.setAttribute('id', 'smo81405');
smo81423v0ar.push(smo81405);
const smo81406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo81406'] = smo81406;
smo81406.setAttribute('id', 'smo81406');
smo81423v0ar.push(smo81406);
smo81423v0.addTickables(smo81423v0ar)
fmtsmo8142321.joinVoices([smo81423v0]);
const fmtsmo8394621 = new VF.Formatter();
//
// voices and notes for stave 15 21
const smo83946v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo83946v0ar = [];
const smo83927 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo83927'] = smo83927;
smo83927.setAttribute('id', 'smo83927');
smo83946v0ar.push(smo83927);
const smo83928 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo83928'] = smo83928;
smo83928.setAttribute('id', 'smo83928');
smo83946v0ar.push(smo83928);
const smo83929 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo83929'] = smo83929;
smo83929.setAttribute('id', 'smo83929');
smo83946v0ar.push(smo83929);
smo83946v0.addTickables(smo83946v0ar)
fmtsmo8394621.joinVoices([smo83946v0]);
const fmtsmo8641421 = new VF.Formatter();
//
// voices and notes for stave 16 21
const smo86414v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":2}')).setMode(VF.Voice.Mode.SOFT);
const smo86414v0ar = [];
const smo86394 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86394'] = smo86394;
smo86394.setAttribute('id', 'smo86394');
const smo863940acc = new VF.Accidental('n');
smo86394.addModifier(smo863940acc, 0);
smo86414v0ar.push(smo86394);
const smo86395 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86395'] = smo86395;
smo86395.setAttribute('id', 'smo86395');
smo86414v0ar.push(smo86395);
const smo86396 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86396'] = smo86396;
smo86396.setAttribute('id', 'smo86396');
smo86414v0ar.push(smo86396);
const smo86397 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo86397'] = smo86397;
smo86397.setAttribute('id', 'smo86397');
smo86414v0ar.push(smo86397);
smo86414v0.addTickables(smo86414v0ar)
fmtsmo8641421.joinVoices([smo86414v0]);
// create beam groups and tuplets for format grp smo88583 before formatting
 
// formatting measures in staff group smo88583
fmtsmo4823521.format([smo48235v0,smo50662v0,smo53078v0,smo55452v0,smo57799v0], 157);
const stavesmo48235 = new VF.Stave(2116, 183.2253035909339, 180);
stavesmo48235.setAttribute('id', 'stavesmo48235');
stavesmo48235.setBegBarType(4);
stavesmo48235.setSection('B', 0);
stavesmo48235.setContext(context);
stavesmo48235.draw();
smo48235v0.draw(context, stavesmo48235);
const stavesmo50662 = new VF.Stave(2116, 288.2253035909339, 180);
stavesmo50662.setAttribute('id', 'stavesmo50662');
stavesmo50662.setBegBarType(4);
stavesmo50662.setContext(context);
stavesmo50662.draw();
smo50662v0.draw(context, stavesmo50662);
const stavesmo53078 = new VF.Stave(2116, 379.2253035909339, 180);
stavesmo53078.setAttribute('id', 'stavesmo53078');
stavesmo53078.setBegBarType(4);
stavesmo53078.setContext(context);
stavesmo53078.draw();
smo53078v0.draw(context, stavesmo53078);
const stavesmo55452 = new VF.Stave(2116, 479.2253035909339, 180);
stavesmo55452.setAttribute('id', 'stavesmo55452');
stavesmo55452.setBegBarType(4);
stavesmo55452.setContext(context);
stavesmo55452.draw();
smo55452v0.draw(context, stavesmo55452);
const stavesmo57799 = new VF.Stave(2116, 549.2253035909339, 180);
stavesmo57799.setAttribute('id', 'stavesmo57799');
stavesmo57799.setBegBarType(4);
stavesmo57799.setContext(context);
stavesmo57799.draw();
smo57799v0.draw(context, stavesmo57799);
// create beam groups and tuplets for format grp smo88585 before formatting
 
// formatting measures in staff group smo88585
fmtsmo6010821.format([smo60108v0,smo62514v0,smo64841v0,smo67191v0], 157);
const stavesmo60108 = new VF.Stave(2116, 630.2253035909339, 180);
stavesmo60108.setAttribute('id', 'stavesmo60108');
stavesmo60108.setBegBarType(4);
stavesmo60108.setContext(context);
stavesmo60108.draw();
smo60108v0.draw(context, stavesmo60108);
const stavesmo62514 = new VF.Stave(2116, 700.2253035909339, 180);
stavesmo62514.setAttribute('id', 'stavesmo62514');
stavesmo62514.setBegBarType(4);
stavesmo62514.setContext(context);
stavesmo62514.draw();
smo62514v0.draw(context, stavesmo62514);
const stavesmo64841 = new VF.Stave(2116, 761.2253035909339, 180);
stavesmo64841.setAttribute('id', 'stavesmo64841');
stavesmo64841.setBegBarType(4);
stavesmo64841.setContext(context);
stavesmo64841.draw();
smo64841v0.draw(context, stavesmo64841);
const stavesmo67191 = new VF.Stave(2116, 831.2253035909339, 180);
stavesmo67191.setAttribute('id', 'stavesmo67191');
stavesmo67191.setBegBarType(4);
stavesmo67191.setContext(context);
stavesmo67191.draw();
smo67191v0.draw(context, stavesmo67191);
// create beam groups and tuplets for format grp smo88587 before formatting
 
// formatting measures in staff group smo88587
fmtsmo6961121.format([smo69611v0,smo71984v0,smo74330v0,smo76658v0], 157);
const stavesmo69611 = new VF.Stave(2116, 936.2253035909339, 180);
stavesmo69611.setAttribute('id', 'stavesmo69611');
stavesmo69611.setBegBarType(4);
stavesmo69611.setContext(context);
stavesmo69611.draw();
smo69611v0.draw(context, stavesmo69611);
const stavesmo71984 = new VF.Stave(2116, 1023.2253035909339, 180);
stavesmo71984.setAttribute('id', 'stavesmo71984');
stavesmo71984.setBegBarType(4);
stavesmo71984.setContext(context);
stavesmo71984.draw();
smo71984v0.draw(context, stavesmo71984);
const stavesmo74330 = new VF.Stave(2116, 1128.225303590934, 180);
stavesmo74330.setAttribute('id', 'stavesmo74330');
stavesmo74330.setBegBarType(4);
stavesmo74330.setContext(context);
stavesmo74330.draw();
smo74330v0.draw(context, stavesmo74330);
const stavesmo76658 = new VF.Stave(2116, 1213.225303590934, 180);
stavesmo76658.setAttribute('id', 'stavesmo76658');
stavesmo76658.setBegBarType(4);
stavesmo76658.setContext(context);
stavesmo76658.draw();
smo76658v0.draw(context, stavesmo76658);
// create beam groups and tuplets for format grp smo81038 before formatting
 
// formatting measures in staff group smo81038
fmtsmo7899521.format([smo78995v0], 157);
const stavesmo78995 = new VF.Stave(2116, 1290.225303590934, 180);
stavesmo78995.setAttribute('id', 'stavesmo78995');
stavesmo78995.setBegBarType(4);
stavesmo78995.setContext(context);
stavesmo78995.draw();
smo78995v0.draw(context, stavesmo78995);
// create beam groups and tuplets for format grp smo83506 before formatting
const dirsmo155083 = smo81401.getStemDirection();
smo81401.setStemDirection(dirsmo155083);
smo81402.setStemDirection(dirsmo155083);
smo81403.setStemDirection(dirsmo155083);
smo81404.setStemDirection(dirsmo155083);
const smo155083 = new VF.Beam([smo81401,smo81402,smo81403,smo81404]);
 
// formatting measures in staff group smo83506
fmtsmo8142321.format([smo81423v0], 157);
const stavesmo81423 = new VF.Stave(2116, 1373.225303590934, 180);
stavesmo81423.setAttribute('id', 'stavesmo81423');
stavesmo81423.setBegBarType(4);
stavesmo81423.setContext(context);
stavesmo81423.draw();
smo81423v0.draw(context, stavesmo81423);
smo155083.setContext(context);
smo155083.draw();
// create beam groups and tuplets for format grp smo85864 before formatting
 
// formatting measures in staff group smo85864
fmtsmo8394621.format([smo83946v0], 157);
const stavesmo83946 = new VF.Stave(2116, 1478.225303590934, 180);
stavesmo83946.setAttribute('id', 'stavesmo83946');
stavesmo83946.setBegBarType(4);
stavesmo83946.setContext(context);
stavesmo83946.draw();
smo83946v0.draw(context, stavesmo83946);
// create beam groups and tuplets for format grp smo88577 before formatting
 
// formatting measures in staff group smo88577
fmtsmo8641421.format([smo86414v0], 157);
const stavesmo86414 = new VF.Stave(2116, 1555.225303590934, 180);
stavesmo86414.setAttribute('id', 'stavesmo86414');
stavesmo86414.setBegBarType(4);
stavesmo86414.setContext(context);
stavesmo86414.draw();
smo86414v0.draw(context, stavesmo86414);
const rightsmo88577stavesmo4823516 = new VF.StaveConnector(stavesmo48235, stavesmo57799).setType(0);
rightsmo88577stavesmo4823516.setContext(context).draw();
const rightsmo88577stavesmo6010816 = new VF.StaveConnector(stavesmo60108, stavesmo67191).setType(0);
rightsmo88577stavesmo6010816.setContext(context).draw();
const rightsmo88577stavesmo6961116 = new VF.StaveConnector(stavesmo69611, stavesmo76658).setType(0);
rightsmo88577stavesmo6961116.setContext(context).draw();
const smo163247 = new VF.StaveHairpin({ first_note: smo48146, last_note: smo48146 });
smo163247.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo163247.setContext(context).setPosition(4).draw();
const smo163248 = new VF.Curve(smo48104, smo48107, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo163248.setContext(context).draw();
const smo163249 = new VF.StaveTie({ first_note: smo48146, last_note: smo48163, first_indices: [0], last_indices: [0]});
smo163249.setContext(context).draw();
const smo163250 = new VF.StaveTie({ first_note: smo48216, last_note: smo48217, first_indices: [0], last_indices: [0]});
smo163250.setContext(context).draw();
const smo163251 = new VF.StaveHairpin({ first_note: smo50573, last_note: smo50573 });
smo163251.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo163251.setContext(context).setPosition(4).draw();
const smo163252 = new VF.Curve(smo50531, smo50534, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo163252.setContext(context).draw();
const smo163253 = new VF.StaveTie({ first_note: smo50573, last_note: smo50590, first_indices: [0], last_indices: [0]});
smo163253.setContext(context).draw();
const smo163254 = new VF.StaveTie({ first_note: smo50643, last_note: smo50644, first_indices: [0], last_indices: [0]});
smo163254.setContext(context).draw();
const smo163255 = new VF.StaveHairpin({ first_note: smo52989, last_note: smo52989 });
smo163255.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo163255.setContext(context).setPosition(4).draw();
const smo163256 = new VF.StaveTie({ first_note: smo52989, last_note: smo53006, first_indices: [0], last_indices: [0]});
smo163256.setContext(context).draw();
const smo163257 = new VF.StaveTie({ first_note: smo53059, last_note: smo53060, first_indices: [0], last_indices: [0]});
smo163257.setContext(context).draw();
const smo163258 = new VF.StaveHairpin({ first_note: smo55363, last_note: smo55363 });
smo163258.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo163258.setContext(context).setPosition(4).draw();
const smo163259 = new VF.StaveTie({ first_note: smo55363, last_note: smo55380, first_indices: [0], last_indices: [0]});
smo163259.setContext(context).draw();
const smo163260 = new VF.StaveTie({ first_note: smo55433, last_note: smo55434, first_indices: [0], last_indices: [0]});
smo163260.setContext(context).draw();
const smo163261 = new VF.StaveHairpin({ first_note: smo57714, last_note: smo57714 });
smo163261.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo163261.setContext(context).setPosition(4).draw();
const smo163262 = new VF.StaveTie({ first_note: smo57714, last_note: smo57731, first_indices: [0], last_indices: [0]});
smo163262.setContext(context).draw();
const smo163263 = new VF.StaveHairpin({ first_note: smo60021, last_note: smo60021 });
smo163263.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo163263.setContext(context).setPosition(4).draw();
const smo163264 = new VF.StaveTie({ first_note: smo59956, last_note: smo59957, first_indices: [0], last_indices: [0]});
smo163264.setContext(context).draw();
const smo163265 = new VF.StaveTie({ first_note: smo60021, last_note: smo60038, first_indices: [0], last_indices: [0]});
smo163265.setContext(context).draw();
const smo163266 = new VF.StaveHairpin({ first_note: smo62427, last_note: smo62427 });
smo163266.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo163266.setContext(context).setPosition(4).draw();
const smo163267 = new VF.StaveTie({ first_note: smo62427, last_note: smo62444, first_indices: [0], last_indices: [0]});
smo163267.setContext(context).draw();
const smo163268 = new VF.StaveHairpin({ first_note: smo69526, last_note: smo69526 });
smo163268.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo163268.setContext(context).setPosition(4).draw();
const smo163269 = new VF.StaveTie({ first_note: smo69461, last_note: smo69462, first_indices: [0], last_indices: [0]});
smo163269.setContext(context).draw();
const smo163270 = new VF.StaveTie({ first_note: smo69526, last_note: smo69543, first_indices: [0], last_indices: [0]});
smo163270.setContext(context).draw();
const smo163271 = new VF.StaveHairpin({ first_note: smo71899, last_note: smo71899 });
smo163271.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo163271.setContext(context).setPosition(4).draw();
const smo163272 = new VF.StaveTie({ first_note: smo71834, last_note: smo71835, first_indices: [0], last_indices: [0]});
smo163272.setContext(context).draw();
const smo163273 = new VF.StaveTie({ first_note: smo71899, last_note: smo71916, first_indices: [0], last_indices: [0]});
smo163273.setContext(context).draw();
const smo163274 = new VF.StaveHairpin({ first_note: smo74245, last_note: smo74245 });
smo163274.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo163274.setContext(context).setPosition(4).draw();
const smo163275 = new VF.StaveTie({ first_note: smo74180, last_note: smo74181, first_indices: [0], last_indices: [0]});
smo163275.setContext(context).draw();
const smo163276 = new VF.StaveTie({ first_note: smo74245, last_note: smo74262, first_indices: [0], last_indices: [0]});
smo163276.setContext(context).draw();
const smo163277 = new VF.StaveHairpin({ first_note: smo76573, last_note: smo76573 });
smo163277.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo163277.setContext(context).setPosition(4).draw();
const smo163278 = new VF.StaveTie({ first_note: smo76573, last_note: smo76590, first_indices: [0], last_indices: [0]});
smo163278.setContext(context).draw();
const smo163279 = new VF.StaveTie({ first_note: smo78842, last_note: smo78843, first_indices: [0], last_indices: [0]});
smo163279.setContext(context).draw();
const smo163280 = new VF.StaveTie({ first_note: smo81404, last_note: smo81405, first_indices: [0], last_indices: [0]});
smo163280.setContext(context).draw();
}
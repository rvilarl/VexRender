function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
//
// create the musical objects
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1348.7603305785124');
svg.setAttributeNS('', 'height', '1745.4545454545453');
svg.setAttributeNS('', 'viewBox', '0 0 1484 1920');
VF.setMusicFont("Leland","Bravura","Gonville","Custom");
const noteHash = {};
const voiceHash = {}
const fmtsmo503240 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo50324v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo50324v0ar = [];
const smo50272 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo50272'] = smo50272;
smo50272.setAttribute('id', 'smo50272');
smo50324v0ar.push(smo50272);
const smo50274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo50274'] = smo50274;
smo50274.setAttribute('id', 'smo50274');
smo50324v0ar.push(smo50274);
const smo50275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
noteHash['smo50275'] = smo50275;
smo50275.setAttribute('id', 'smo50275');
const smo502750acc = new VF.Accidental('#');
smo50275.addModifier(smo502750acc, 0);
smo50324v0ar.push(smo50275);
const smo50276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
noteHash['smo50276'] = smo50276;
smo50276.setAttribute('id', 'smo50276');
smo50324v0ar.push(smo50276);
const smo50277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
noteHash['smo50277'] = smo50277;
smo50277.setAttribute('id', 'smo50277');
const smo502770acc = new VF.Accidental('#');
smo50277.addModifier(smo502770acc, 0);
smo50324v0ar.push(smo50277);
const smo50278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
noteHash['smo50278'] = smo50278;
smo50278.setAttribute('id', 'smo50278');
smo50324v0ar.push(smo50278);
const smo50279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
noteHash['smo50279'] = smo50279;
smo50279.setAttribute('id', 'smo50279');
smo50324v0ar.push(smo50279);
const smo50280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo50280'] = smo50280;
smo50280.setAttribute('id', 'smo50280');
smo50324v0ar.push(smo50280);
const smo50281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo50281'] = smo50281;
smo50281.setAttribute('id', 'smo50281');
smo50324v0ar.push(smo50281);
const smo50282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo50282'] = smo50282;
smo50282.setAttribute('id', 'smo50282');
smo50324v0ar.push(smo50282);
const smo50283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
noteHash['smo50283'] = smo50283;
smo50283.setAttribute('id', 'smo50283');
smo50324v0ar.push(smo50283);
const smo50284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
noteHash['smo50284'] = smo50284;
smo50284.setAttribute('id', 'smo50284');
smo50324v0ar.push(smo50284);
const smo50285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo50285'] = smo50285;
smo50285.setAttribute('id', 'smo50285');
smo50324v0ar.push(smo50285);
const smo50286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo50286'] = smo50286;
smo50286.setAttribute('id', 'smo50286');
smo50324v0ar.push(smo50286);
const smo50287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo50287'] = smo50287;
smo50287.setAttribute('id', 'smo50287');
smo50324v0ar.push(smo50287);
const smo50288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo50288'] = smo50288;
smo50288.setAttribute('id', 'smo50288');
smo50324v0ar.push(smo50288);
const smo50289 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo50289'] = smo50289;
smo50289.setAttribute('id', 'smo50289');
smo50324v0ar.push(smo50289);
const smo50290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo50290'] = smo50290;
smo50290.setAttribute('id', 'smo50290');
smo50324v0ar.push(smo50290);
const smo50291 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo50291'] = smo50291;
smo50291.setAttribute('id', 'smo50291');
smo50324v0ar.push(smo50291);
const smo50292 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo50292'] = smo50292;
smo50292.setAttribute('id', 'smo50292');
smo50324v0ar.push(smo50292);
const smo50293 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo50293'] = smo50293;
smo50293.setAttribute('id', 'smo50293');
smo50324v0ar.push(smo50293);
const smo50294 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
noteHash['smo50294'] = smo50294;
smo50294.setAttribute('id', 'smo50294');
smo50324v0ar.push(smo50294);
const smo50295 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
noteHash['smo50295'] = smo50295;
smo50295.setAttribute('id', 'smo50295');
smo50324v0ar.push(smo50295);
const smo50296 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
noteHash['smo50296'] = smo50296;
smo50296.setAttribute('id', 'smo50296');
smo50324v0ar.push(smo50296);
const smo50297 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
noteHash['smo50297'] = smo50297;
smo50297.setAttribute('id', 'smo50297');
smo50324v0ar.push(smo50297);
const smo50298 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
noteHash['smo50298'] = smo50298;
smo50298.setAttribute('id', 'smo50298');
smo50324v0ar.push(smo50298);
smo50324v0.addTickables(smo50324v0ar)
fmtsmo503240.joinVoices([smo50324v0]);
const smo50324v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo50324v1ar = [];
const smo50299 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo50299'] = smo50299;
smo50299.setAttribute('id', 'smo50299');
smo50299.setStyle({ fillStyle: '#aaaaaa7f' });
smo50324v1ar.push(smo50299);
const smo50300 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
noteHash['smo50300'] = smo50300;
smo50300.setAttribute('id', 'smo50300');
smo50300.setStyle({ fillStyle: "#115511" });
smo50324v1ar.push(smo50300);
const smo50301 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
noteHash['smo50301'] = smo50301;
smo50301.setAttribute('id', 'smo50301');
smo50301.setStyle({ fillStyle: "#115511" });
smo50324v1ar.push(smo50301);
const smo50302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo50302'] = smo50302;
smo50302.setAttribute('id', 'smo50302');
smo50302.setStyle({ fillStyle: '#aaaaaa7f' });
smo50324v1ar.push(smo50302);
const smo50303 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
noteHash['smo50303'] = smo50303;
smo50303.setAttribute('id', 'smo50303');
smo50303.setStyle({ fillStyle: "#115511" });
smo50324v1ar.push(smo50303);
const smo50304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
noteHash['smo50304'] = smo50304;
smo50304.setAttribute('id', 'smo50304');
smo50304.setStyle({ fillStyle: "#115511" });
smo50324v1ar.push(smo50304);
const smo50305 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo50305'] = smo50305;
smo50305.setAttribute('id', 'smo50305');
smo50305.setStyle({ fillStyle: '#aaaaaa7f' });
smo50324v1ar.push(smo50305);
const smo50306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo50306'] = smo50306;
smo50306.setAttribute('id', 'smo50306');
smo50306.setStyle({ fillStyle: '#aaaaaa7f' });
smo50324v1ar.push(smo50306);
const smo50307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
noteHash['smo50307'] = smo50307;
smo50307.setAttribute('id', 'smo50307');
smo50307.setStyle({ fillStyle: "#115511" });
smo50324v1ar.push(smo50307);
const smo50308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
noteHash['smo50308'] = smo50308;
smo50308.setAttribute('id', 'smo50308');
smo50308.setStyle({ fillStyle: "#115511" });
smo50324v1ar.push(smo50308);
smo50324v1.addTickables(smo50324v1ar)
fmtsmo503240.joinVoices([smo50324v1]);
const fmtsmo508310 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo50831v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo50831v0ar = [];
const smo50799 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50799'] = smo50799;
smo50799.setAttribute('id', 'smo50799');
smo50831v0ar.push(smo50799);
const smo50800 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50800'] = smo50800;
smo50800.setAttribute('id', 'smo50800');
smo50800.setStyle({ fillStyle: '#aaaaaa7f' });
smo50800.addModifier(new VF.Dot(), 0);
smo50831v0ar.push(smo50800);
const smo50801 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50801'] = smo50801;
smo50801.setAttribute('id', 'smo50801');
smo50831v0ar.push(smo50801);
const smo50802 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50802'] = smo50802;
smo50802.setAttribute('id', 'smo50802');
smo50802.setStyle({ fillStyle: '#aaaaaa7f' });
smo50802.addModifier(new VF.Dot(), 0);
smo50831v0ar.push(smo50802);
const smo50803 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50803'] = smo50803;
smo50803.setAttribute('id', 'smo50803');
smo50831v0ar.push(smo50803);
const smo50804 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo50804'] = smo50804;
smo50804.setAttribute('id', 'smo50804');
smo50831v0ar.push(smo50804);
const smo50805 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo50805'] = smo50805;
smo50805.setAttribute('id', 'smo50805');
smo50831v0ar.push(smo50805);
const smo50806 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50806'] = smo50806;
smo50806.setAttribute('id', 'smo50806');
smo50831v0ar.push(smo50806);
const smo50807 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo50807'] = smo50807;
smo50807.setAttribute('id', 'smo50807');
smo50831v0ar.push(smo50807);
const smo50808 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo50808'] = smo50808;
smo50808.setAttribute('id', 'smo50808');
smo50831v0ar.push(smo50808);
const smo50809 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50809'] = smo50809;
smo50809.setAttribute('id', 'smo50809');
smo50831v0ar.push(smo50809);
const smo50810 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50810'] = smo50810;
smo50810.setAttribute('id', 'smo50810');
smo50810.setStyle({ fillStyle: '#aaaaaa7f' });
smo50810.addModifier(new VF.Dot(), 0);
smo50831v0ar.push(smo50810);
smo50831v0.addTickables(smo50831v0ar)
fmtsmo508310.joinVoices([smo50831v0]);
const smo50831v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo50831v1ar = [];
const smo50811 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo50811'] = smo50811;
smo50811.setAttribute('id', 'smo50811');
smo50811.setStyle({ fillStyle: "#115511" });
smo50831v1ar.push(smo50811);
const smo50812 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo50812'] = smo50812;
smo50812.setAttribute('id', 'smo50812');
smo50812.setStyle({ fillStyle: "#115511" });
smo50831v1ar.push(smo50812);
const smo50813 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo50813'] = smo50813;
smo50813.setAttribute('id', 'smo50813');
smo50813.setStyle({ fillStyle: "#115511" });
smo50831v1ar.push(smo50813);
const smo50814 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo50814'] = smo50814;
smo50814.setAttribute('id', 'smo50814');
smo50814.setStyle({ fillStyle: "#115511" });
smo50831v1ar.push(smo50814);
const smo50815 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo50815'] = smo50815;
smo50815.setAttribute('id', 'smo50815');
smo50815.setStyle({ fillStyle: "#115511" });
smo50831v1ar.push(smo50815);
smo50831v1.addTickables(smo50831v1ar)
fmtsmo508310.joinVoices([smo50831v1]);
// create beam groups and tuplets for format grp smo51196 before formatting
const dirsmo52398 = smo50272.getStemDirection();
smo50272.setStemDirection(dirsmo52398);
smo50274.setStemDirection(dirsmo52398);
smo50275.setStemDirection(dirsmo52398);
smo50276.setStemDirection(dirsmo52398);
const smo52398 = new VF.Beam([smo50272,smo50274,smo50275,smo50276]);
const dirsmo52399 = smo50277.getStemDirection();
smo50277.setStemDirection(dirsmo52399);
smo50278.setStemDirection(dirsmo52399);
const smo52399 = new VF.Beam([smo50277,smo50278]);
const dirsmo52400 = smo50281.getStemDirection();
smo50281.setStemDirection(dirsmo52400);
smo50282.setStemDirection(dirsmo52400);
const smo52400 = new VF.Beam([smo50281,smo50282]);
const dirsmo52401 = smo50283.getStemDirection();
smo50283.setStemDirection(dirsmo52401);
smo50284.setStemDirection(dirsmo52401);
smo50285.setStemDirection(dirsmo52401);
smo50286.setStemDirection(dirsmo52401);
const smo52401 = new VF.Beam([smo50283,smo50284,smo50285,smo50286]);
const dirsmo52402 = smo50287.getStemDirection();
smo50287.setStemDirection(dirsmo52402);
smo50288.setStemDirection(dirsmo52402);
const smo52402 = new VF.Beam([smo50287,smo50288]);
const dirsmo52403 = smo50292.getStemDirection();
smo50292.setStemDirection(dirsmo52403);
smo50293.setStemDirection(dirsmo52403);
smo50294.setStemDirection(dirsmo52403);
smo50295.setStemDirection(dirsmo52403);
const smo52403 = new VF.Beam([smo50292,smo50293,smo50294,smo50295]);
const dirsmo52404 = smo50296.getStemDirection();
smo50296.setStemDirection(dirsmo52404);
smo50297.setStemDirection(dirsmo52404);
const smo52404 = new VF.Beam([smo50296,smo50297]);
 
// formatting measures in staff group smo51196
fmtsmo503240.format([smo50324v0,smo50324v1,smo50831v0,smo50831v1], 1094);
const stavesmo50324 = new VF.Stave(103, 187, 1174);
stavesmo50324.setAttribute('id', 'stavesmo50324');
stavesmo50324.setBegBarType(1);
stavesmo50324.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":60,"name":"Lent"}'), -1 * 35);
stavesmo50324.addClef('treble');
stavesmo50324.addTimeSignature('4/4');
stavesmo50324.setContext(context);
stavesmo50324.draw();
smo50324v0.draw(context, stavesmo50324);
smo50324v1.draw(context, stavesmo50324);
smo52398.setContext(context);
smo52398.draw();
smo52399.setContext(context);
smo52399.draw();
smo52400.setContext(context);
smo52400.draw();
smo52401.setContext(context);
smo52401.draw();
smo52402.setContext(context);
smo52402.draw();
smo52403.setContext(context);
smo52403.draw();
smo52404.setContext(context);
smo52404.draw();
const stavesmo50831 = new VF.Stave(103, 330, 1174);
stavesmo50831.setAttribute('id', 'stavesmo50831');
stavesmo50831.setBegBarType(1);
stavesmo50831.addClef('bass');
stavesmo50831.addTimeSignature('4/4');
stavesmo50831.setContext(context);
stavesmo50831.draw();
smo50831v0.draw(context, stavesmo50831);
smo50831v1.draw(context, stavesmo50831);
const leftsmo51196stavesmo503241 = new VF.StaveConnector(stavesmo50324, stavesmo50831).setType(3);
leftsmo51196stavesmo503241.setContext(context).draw();
const fmtsmo503691 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo50369v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo50369v0ar = [];
const smo50325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo50325'] = smo50325;
smo50325.setAttribute('id', 'smo50325');
smo50369v0ar.push(smo50325);
const smo50326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo50326'] = smo50326;
smo50326.setAttribute('id', 'smo50326');
smo50369v0ar.push(smo50326);
const smo50327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo50327'] = smo50327;
smo50327.setAttribute('id', 'smo50327');
smo50369v0ar.push(smo50327);
const smo50328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
noteHash['smo50328'] = smo50328;
smo50328.setAttribute('id', 'smo50328');
const smo503280acc = new VF.Accidental('#');
smo50328.addModifier(smo503280acc, 0);
smo50369v0ar.push(smo50328);
const smo50329 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
noteHash['smo50329'] = smo50329;
smo50329.setAttribute('id', 'smo50329');
smo50369v0ar.push(smo50329);
const smo50330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo50330'] = smo50330;
smo50330.setAttribute('id', 'smo50330');
smo50369v0ar.push(smo50330);
const smo50331 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo50331'] = smo50331;
smo50331.setAttribute('id', 'smo50331');
smo50369v0ar.push(smo50331);
const smo50332 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo50332'] = smo50332;
smo50332.setAttribute('id', 'smo50332');
smo50369v0ar.push(smo50332);
const smo50333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo50333'] = smo50333;
smo50333.setAttribute('id', 'smo50333');
smo50369v0ar.push(smo50333);
const smo50334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo50334'] = smo50334;
smo50334.setAttribute('id', 'smo50334');
smo50369v0ar.push(smo50334);
const smo50335 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo50335'] = smo50335;
smo50335.setAttribute('id', 'smo50335');
smo50369v0ar.push(smo50335);
const smo50336 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
const smo50337 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["bn/4"],"slash":false}'))
smo50337.setAttribute('id', 'smo50337');
const ggrpsmo50336 = new VF.GraceNoteGroup([smo50337]);
ggrpsmo50336.beamNotes();
smo50336.addModifier(ggrpsmo50336, 0);
noteHash['smo50336'] = smo50336;
smo50336.setAttribute('id', 'smo50336');
const smo503360acc = new VF.Accidental('n');
smo50336.addModifier(smo503360acc, 0);
smo50369v0ar.push(smo50336);
const smo50338 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo50338'] = smo50338;
smo50338.setAttribute('id', 'smo50338');
smo50369v0ar.push(smo50338);
const smo50339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo50339'] = smo50339;
smo50339.setAttribute('id', 'smo50339');
smo50369v0ar.push(smo50339);
const smo50340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo50340'] = smo50340;
smo50340.setAttribute('id', 'smo50340');
smo50369v0ar.push(smo50340);
const smo50341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo50341'] = smo50341;
smo50341.setAttribute('id', 'smo50341');
smo50369v0ar.push(smo50341);
const smo50342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo50342'] = smo50342;
smo50342.setAttribute('id', 'smo50342');
smo50369v0ar.push(smo50342);
const smo50343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo50343'] = smo50343;
smo50343.setAttribute('id', 'smo50343');
smo50369v0ar.push(smo50343);
const smo50344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo50344'] = smo50344;
smo50344.setAttribute('id', 'smo50344');
smo50369v0ar.push(smo50344);
const smo50345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo50345'] = smo50345;
smo50345.setAttribute('id', 'smo50345');
smo50369v0ar.push(smo50345);
const smo50346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo50346'] = smo50346;
smo50346.setAttribute('id', 'smo50346');
smo50369v0ar.push(smo50346);
const smo50347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
const smo50348 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["bn/4"],"slash":false}'))
smo50348.setAttribute('id', 'smo50348');
const ggrpsmo50347 = new VF.GraceNoteGroup([smo50348]);
ggrpsmo50347.beamNotes();
smo50347.addModifier(ggrpsmo50347, 0);
noteHash['smo50347'] = smo50347;
smo50347.setAttribute('id', 'smo50347');
smo50369v0ar.push(smo50347);
smo50369v0.addTickables(smo50369v0ar)
fmtsmo503691.joinVoices([smo50369v0]);
const smo50369v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo50369v1ar = [];
const smo50349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo50349'] = smo50349;
smo50349.setAttribute('id', 'smo50349');
smo50349.setStyle({ fillStyle: '#aaaaaa7f' });
smo50369v1ar.push(smo50349);
const smo50350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
noteHash['smo50350'] = smo50350;
smo50350.setAttribute('id', 'smo50350');
smo50350.setStyle({ fillStyle: "#115511" });
smo50369v1ar.push(smo50350);
const smo50351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
noteHash['smo50351'] = smo50351;
smo50351.setAttribute('id', 'smo50351');
smo50351.setStyle({ fillStyle: "#115511" });
smo50369v1ar.push(smo50351);
const smo50352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2dddd","dots":4,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo50352'] = smo50352;
smo50352.setAttribute('id', 'smo50352');
smo50352.setStyle({ fillStyle: '#aaaaaa7f' });
smo50352.addModifier(new VF.Dot(), 0);
smo50352.addModifier(new VF.Dot(), 0);
smo50352.addModifier(new VF.Dot(), 0);
smo50352.addModifier(new VF.Dot(), 0);
smo50369v1ar.push(smo50352);
const smo50353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo50353'] = smo50353;
smo50353.setAttribute('id', 'smo50353');
smo50353.setStyle({ fillStyle: '#aaaaaa7f' });
smo50369v1ar.push(smo50353);
smo50369v1.addTickables(smo50369v1ar)
fmtsmo503691.joinVoices([smo50369v1]);
const fmtsmo508661 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo50866v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo50866v0ar = [];
const smo50832 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50832'] = smo50832;
smo50832.setAttribute('id', 'smo50832');
smo50866v0ar.push(smo50832);
const smo50833 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50833'] = smo50833;
smo50833.setAttribute('id', 'smo50833');
smo50833.setStyle({ fillStyle: '#aaaaaa7f' });
smo50833.addModifier(new VF.Dot(), 0);
smo50866v0ar.push(smo50833);
const smo50834 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50834'] = smo50834;
smo50834.setAttribute('id', 'smo50834');
smo50866v0ar.push(smo50834);
const smo50835 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo50835'] = smo50835;
smo50835.setAttribute('id', 'smo50835');
smo50866v0ar.push(smo50835);
const smo50836 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo50836'] = smo50836;
smo50836.setAttribute('id', 'smo50836');
smo50866v0ar.push(smo50836);
const smo50837 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50837'] = smo50837;
smo50837.setAttribute('id', 'smo50837');
smo50866v0ar.push(smo50837);
const smo50838 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo50838'] = smo50838;
smo50838.setAttribute('id', 'smo50838');
smo50866v0ar.push(smo50838);
const smo50839 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo50839'] = smo50839;
smo50839.setAttribute('id', 'smo50839');
smo50866v0ar.push(smo50839);
const smo50840 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50840'] = smo50840;
smo50840.setAttribute('id', 'smo50840');
smo50866v0ar.push(smo50840);
const smo50841 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo50841'] = smo50841;
smo50841.setAttribute('id', 'smo50841');
const smo508410acc = new VF.Accidental('#');
smo50841.addModifier(smo508410acc, 0);
smo50866v0ar.push(smo50841);
const smo50842 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo50842'] = smo50842;
smo50842.setAttribute('id', 'smo50842');
smo50866v0ar.push(smo50842);
const smo50843 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50843'] = smo50843;
smo50843.setAttribute('id', 'smo50843');
smo50866v0ar.push(smo50843);
const smo50844 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo50844'] = smo50844;
smo50844.setAttribute('id', 'smo50844');
smo50866v0ar.push(smo50844);
const smo50845 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo50845'] = smo50845;
smo50845.setAttribute('id', 'smo50845');
smo50866v0ar.push(smo50845);
smo50866v0.addTickables(smo50866v0ar)
fmtsmo508661.joinVoices([smo50866v0]);
const smo50866v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo50866v1ar = [];
const smo50846 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo50846'] = smo50846;
smo50846.setAttribute('id', 'smo50846');
smo50846.setStyle({ fillStyle: "#115511" });
smo50866v1ar.push(smo50846);
const smo50847 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo50847'] = smo50847;
smo50847.setAttribute('id', 'smo50847');
smo50847.setStyle({ fillStyle: "#115511" });
smo50866v1ar.push(smo50847);
const smo50848 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
noteHash['smo50848'] = smo50848;
smo50848.setAttribute('id', 'smo50848');
smo50848.setStyle({ fillStyle: "#115511" });
smo50866v1ar.push(smo50848);
const smo50849 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo50849'] = smo50849;
smo50849.setAttribute('id', 'smo50849');
smo50849.setStyle({ fillStyle: "#115511" });
smo50866v1ar.push(smo50849);
const smo50850 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
noteHash['smo50850'] = smo50850;
smo50850.setAttribute('id', 'smo50850');
smo50850.setStyle({ fillStyle: "#115511" });
smo50866v1ar.push(smo50850);
smo50866v1.addTickables(smo50866v1ar)
fmtsmo508661.joinVoices([smo50866v1]);
// create beam groups and tuplets for format grp smo51196 before formatting
const dirsmo52419 = smo50326.getStemDirection();
smo50326.setStemDirection(dirsmo52419);
smo50327.setStemDirection(dirsmo52419);
const smo52419 = new VF.Beam([smo50326,smo50327]);
const dirsmo52420 = smo50328.getStemDirection();
smo50328.setStemDirection(dirsmo52420);
smo50329.setStemDirection(dirsmo52420);
smo50330.setStemDirection(dirsmo52420);
smo50331.setStemDirection(dirsmo52420);
const smo52420 = new VF.Beam([smo50328,smo50329,smo50330,smo50331]);
const dirsmo52421 = smo50332.getStemDirection();
smo50332.setStemDirection(dirsmo52421);
smo50333.setStemDirection(dirsmo52421);
const smo52421 = new VF.Beam([smo50332,smo50333]);
const dirsmo52422 = smo50338.getStemDirection();
smo50338.setStemDirection(dirsmo52422);
smo50339.setStemDirection(dirsmo52422);
const smo52422 = new VF.Beam([smo50338,smo50339]);
const dirsmo52423 = smo50340.getStemDirection();
smo50340.setStemDirection(dirsmo52423);
smo50341.setStemDirection(dirsmo52423);
const smo52423 = new VF.Beam([smo50340,smo50341]);
const dirsmo52424 = smo50343.getStemDirection();
smo50343.setStemDirection(dirsmo52424);
smo50344.setStemDirection(dirsmo52424);
const smo52424 = new VF.Beam([smo50343,smo50344]);
 
// formatting measures in staff group smo51196
fmtsmo503691.format([smo50369v0,smo50369v1,smo50866v0,smo50866v1], 1117);
const stavesmo50369 = new VF.Stave(103, 490, 1174);
stavesmo50369.setAttribute('id', 'stavesmo50369');
stavesmo50369.setBegBarType(1);
stavesmo50369.addClef('treble');
stavesmo50369.setContext(context);
stavesmo50369.draw();
smo50369v0.draw(context, stavesmo50369);
smo50369v1.draw(context, stavesmo50369);
smo52419.setContext(context);
smo52419.draw();
smo52420.setContext(context);
smo52420.draw();
smo52421.setContext(context);
smo52421.draw();
smo52422.setContext(context);
smo52422.draw();
smo52423.setContext(context);
smo52423.draw();
smo52424.setContext(context);
smo52424.draw();
const stavesmo50866 = new VF.Stave(103, 638, 1174);
stavesmo50866.setAttribute('id', 'stavesmo50866');
stavesmo50866.setBegBarType(1);
stavesmo50866.addClef('bass');
stavesmo50866.setContext(context);
stavesmo50866.draw();
smo50866v0.draw(context, stavesmo50866);
smo50866v1.draw(context, stavesmo50866);
const leftsmo51196stavesmo503691 = new VF.StaveConnector(stavesmo50369, stavesmo50866).setType(3);
leftsmo51196stavesmo503691.setContext(context).draw();
const fmtsmo504142 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo50414v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo50414v0ar = [];
const smo50370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo50370'] = smo50370;
smo50370.setAttribute('id', 'smo50370');
smo50414v0ar.push(smo50370);
const smo50371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo50371'] = smo50371;
smo50371.setAttribute('id', 'smo50371');
smo50414v0ar.push(smo50371);
const smo50372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo50372'] = smo50372;
smo50372.setAttribute('id', 'smo50372');
smo50414v0ar.push(smo50372);
const smo50373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo50373'] = smo50373;
smo50373.setAttribute('id', 'smo50373');
smo50414v0ar.push(smo50373);
const smo50374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo50374'] = smo50374;
smo50374.setAttribute('id', 'smo50374');
smo50414v0ar.push(smo50374);
const smo50375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo50375'] = smo50375;
smo50375.setAttribute('id', 'smo50375');
smo50414v0ar.push(smo50375);
const smo50376 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo50376'] = smo50376;
smo50376.setAttribute('id', 'smo50376');
smo50414v0ar.push(smo50376);
const smo50377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
noteHash['smo50377'] = smo50377;
smo50377.setAttribute('id', 'smo50377');
const smo503770acc = new VF.Accidental('#');
smo50377.addModifier(smo503770acc, 0);
smo50414v0ar.push(smo50377);
const smo50378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo50378'] = smo50378;
smo50378.setAttribute('id', 'smo50378');
smo50414v0ar.push(smo50378);
const smo50379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo50379'] = smo50379;
smo50379.setAttribute('id', 'smo50379');
smo50414v0ar.push(smo50379);
const smo50380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo50380'] = smo50380;
smo50380.setAttribute('id', 'smo50380');
smo50414v0ar.push(smo50380);
const smo50381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo50381'] = smo50381;
smo50381.setAttribute('id', 'smo50381');
smo50414v0ar.push(smo50381);
const smo50382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo50382'] = smo50382;
smo50382.setAttribute('id', 'smo50382');
smo50414v0ar.push(smo50382);
const smo50383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/4/n"]}'))
noteHash['smo50383'] = smo50383;
smo50383.setAttribute('id', 'smo50383');
smo50414v0ar.push(smo50383);
const smo50384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo50384'] = smo50384;
smo50384.setAttribute('id', 'smo50384');
smo50414v0ar.push(smo50384);
const smo50385 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo50385'] = smo50385;
smo50385.setAttribute('id', 'smo50385');
smo50414v0ar.push(smo50385);
const smo50386 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo50386'] = smo50386;
smo50386.setAttribute('id', 'smo50386');
smo50414v0ar.push(smo50386);
const smo50387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo50387'] = smo50387;
smo50387.setAttribute('id', 'smo50387');
smo50414v0ar.push(smo50387);
const smo50388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo50388'] = smo50388;
smo50388.setAttribute('id', 'smo50388');
smo50414v0ar.push(smo50388);
const smo50389 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
noteHash['smo50389'] = smo50389;
smo50389.setAttribute('id', 'smo50389');
smo50414v0ar.push(smo50389);
const smo50390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo50390'] = smo50390;
smo50390.setAttribute('id', 'smo50390');
smo50414v0ar.push(smo50390);
const smo50391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo50391'] = smo50391;
smo50391.setAttribute('id', 'smo50391');
smo50414v0ar.push(smo50391);
const smo50392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo50392'] = smo50392;
smo50392.setAttribute('id', 'smo50392');
smo50414v0ar.push(smo50392);
const smo50393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo50393'] = smo50393;
smo50393.setAttribute('id', 'smo50393');
smo50414v0ar.push(smo50393);
const smo50394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo50394'] = smo50394;
smo50394.setAttribute('id', 'smo50394');
smo50414v0ar.push(smo50394);
const smo50395 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo50395'] = smo50395;
smo50395.setAttribute('id', 'smo50395');
smo50414v0ar.push(smo50395);
const smo50396 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo50396'] = smo50396;
smo50396.setAttribute('id', 'smo50396');
smo50414v0ar.push(smo50396);
const smo50397 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo50397'] = smo50397;
smo50397.setAttribute('id', 'smo50397');
smo50414v0ar.push(smo50397);
const smo50398 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo50398'] = smo50398;
smo50398.setAttribute('id', 'smo50398');
smo50414v0ar.push(smo50398);
smo50414v0.addTickables(smo50414v0ar)
fmtsmo504142.joinVoices([smo50414v0]);
const fmtsmo508982 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo50898v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo50898v0ar = [];
const smo50867 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50867'] = smo50867;
smo50867.setAttribute('id', 'smo50867');
smo50898v0ar.push(smo50867);
const smo50868 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo50868'] = smo50868;
smo50868.setAttribute('id', 'smo50868');
smo50898v0ar.push(smo50868);
const smo50869 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo50869'] = smo50869;
smo50869.setAttribute('id', 'smo50869');
smo50898v0ar.push(smo50869);
const smo50870 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50870'] = smo50870;
smo50870.setAttribute('id', 'smo50870');
smo50898v0ar.push(smo50870);
const smo50871 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo50871'] = smo50871;
smo50871.setAttribute('id', 'smo50871');
smo50898v0ar.push(smo50871);
const smo50872 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo50872'] = smo50872;
smo50872.setAttribute('id', 'smo50872');
smo50898v0ar.push(smo50872);
const smo50873 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50873'] = smo50873;
smo50873.setAttribute('id', 'smo50873');
smo50898v0ar.push(smo50873);
const smo50874 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo50874'] = smo50874;
smo50874.setAttribute('id', 'smo50874');
smo50898v0ar.push(smo50874);
const smo50875 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo50875'] = smo50875;
smo50875.setAttribute('id', 'smo50875');
smo50898v0ar.push(smo50875);
const smo50876 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50876'] = smo50876;
smo50876.setAttribute('id', 'smo50876');
smo50898v0ar.push(smo50876);
const smo50877 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo50877'] = smo50877;
smo50877.setAttribute('id', 'smo50877');
smo50898v0ar.push(smo50877);
const smo50878 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo50878'] = smo50878;
smo50878.setAttribute('id', 'smo50878');
smo50898v0ar.push(smo50878);
smo50898v0.addTickables(smo50898v0ar)
fmtsmo508982.joinVoices([smo50898v0]);
const smo50898v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo50898v1ar = [];
const smo50879 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
noteHash['smo50879'] = smo50879;
smo50879.setAttribute('id', 'smo50879');
smo50879.setStyle({ fillStyle: "#115511" });
smo50898v1ar.push(smo50879);
const smo50880 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
noteHash['smo50880'] = smo50880;
smo50880.setAttribute('id', 'smo50880');
smo50880.setStyle({ fillStyle: "#115511" });
smo50898v1ar.push(smo50880);
const smo50881 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
noteHash['smo50881'] = smo50881;
smo50881.setAttribute('id', 'smo50881');
smo50881.setStyle({ fillStyle: "#115511" });
smo50898v1ar.push(smo50881);
const smo50882 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/1/n"]}'))
noteHash['smo50882'] = smo50882;
smo50882.setAttribute('id', 'smo50882');
smo50882.setStyle({ fillStyle: "#115511" });
smo50898v1ar.push(smo50882);
smo50898v1.addTickables(smo50898v1ar)
fmtsmo508982.joinVoices([smo50898v1]);
// create beam groups and tuplets for format grp smo51196 before formatting
const dirsmo52440 = smo50371.getStemDirection();
smo50371.setStemDirection(dirsmo52440);
smo50372.setStemDirection(dirsmo52440);
const smo52440 = new VF.Beam([smo50371,smo50372]);
const dirsmo52441 = smo50373.getStemDirection();
smo50373.setStemDirection(dirsmo52441);
smo50374.setStemDirection(dirsmo52441);
smo50375.setStemDirection(dirsmo52441);
smo50376.setStemDirection(dirsmo52441);
const smo52441 = new VF.Beam([smo50373,smo50374,smo50375,smo50376]);
const dirsmo52442 = smo50377.getStemDirection();
smo50377.setStemDirection(dirsmo52442);
smo50378.setStemDirection(dirsmo52442);
smo50379.setStemDirection(dirsmo52442);
smo50380.setStemDirection(dirsmo52442);
const smo52442 = new VF.Beam([smo50377,smo50378,smo50379,smo50380]);
const dirsmo52443 = smo50381.getStemDirection();
smo50381.setStemDirection(dirsmo52443);
smo50382.setStemDirection(dirsmo52443);
smo50383.setStemDirection(dirsmo52443);
smo50384.setStemDirection(dirsmo52443);
const smo52443 = new VF.Beam([smo50381,smo50382,smo50383,smo50384]);
const dirsmo52444 = smo50385.getStemDirection();
smo50385.setStemDirection(dirsmo52444);
smo50386.setStemDirection(dirsmo52444);
smo50387.setStemDirection(dirsmo52444);
smo50388.setStemDirection(dirsmo52444);
const smo52444 = new VF.Beam([smo50385,smo50386,smo50387,smo50388]);
const dirsmo52445 = smo50389.getStemDirection();
smo50389.setStemDirection(dirsmo52445);
smo50390.setStemDirection(dirsmo52445);
smo50391.setStemDirection(dirsmo52445);
smo50392.setStemDirection(dirsmo52445);
const smo52445 = new VF.Beam([smo50389,smo50390,smo50391,smo50392]);
const dirsmo52446 = smo50393.getStemDirection();
smo50393.setStemDirection(dirsmo52446);
smo50394.setStemDirection(dirsmo52446);
smo50395.setStemDirection(dirsmo52446);
smo50396.setStemDirection(dirsmo52446);
const smo52446 = new VF.Beam([smo50393,smo50394,smo50395,smo50396]);
 
// formatting measures in staff group smo51196
fmtsmo504142.format([smo50414v0,smo50898v0,smo50898v1], 1117);
const stavesmo50414 = new VF.Stave(103, 768, 1173);
stavesmo50414.setAttribute('id', 'stavesmo50414');
stavesmo50414.setBegBarType(1);
stavesmo50414.addClef('treble');
stavesmo50414.setContext(context);
stavesmo50414.draw();
smo50414v0.draw(context, stavesmo50414);
smo52440.setContext(context);
smo52440.draw();
smo52441.setContext(context);
smo52441.draw();
smo52442.setContext(context);
smo52442.draw();
smo52443.setContext(context);
smo52443.draw();
smo52444.setContext(context);
smo52444.draw();
smo52445.setContext(context);
smo52445.draw();
smo52446.setContext(context);
smo52446.draw();
const stavesmo50898 = new VF.Stave(103, 896, 1173);
stavesmo50898.setAttribute('id', 'stavesmo50898');
stavesmo50898.setBegBarType(1);
stavesmo50898.addClef('bass');
stavesmo50898.setContext(context);
stavesmo50898.draw();
smo50898v0.draw(context, stavesmo50898);
smo50898v1.draw(context, stavesmo50898);
const leftsmo51196stavesmo504141 = new VF.StaveConnector(stavesmo50414, stavesmo50898).setType(3);
leftsmo51196stavesmo504141.setContext(context).draw();
const fmtsmo504503 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo50450v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo50450v0ar = [];
const smo50415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo50415'] = smo50415;
smo50415.setAttribute('id', 'smo50415');
smo50450v0ar.push(smo50415);
const smo50416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo50416'] = smo50416;
smo50416.setAttribute('id', 'smo50416');
smo50450v0ar.push(smo50416);
const smo50417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo50417'] = smo50417;
smo50417.setAttribute('id', 'smo50417');
smo50450v0ar.push(smo50417);
const smo50418 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo50418'] = smo50418;
smo50418.setAttribute('id', 'smo50418');
const smo504180acc = new VF.Accidental('#');
smo50418.addModifier(smo504180acc, 0);
smo50450v0ar.push(smo50418);
const smo50419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo50419'] = smo50419;
smo50419.setAttribute('id', 'smo50419');
smo50450v0ar.push(smo50419);
const smo50420 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo50420'] = smo50420;
smo50420.setAttribute('id', 'smo50420');
const smo504200acc = new VF.Accidental('#');
smo50420.addModifier(smo504200acc, 0);
smo50450v0ar.push(smo50420);
const smo50421 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo50421'] = smo50421;
smo50421.setAttribute('id', 'smo50421');
smo50450v0ar.push(smo50421);
const smo50422 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo50422'] = smo50422;
smo50422.setAttribute('id', 'smo50422');
smo50450v0ar.push(smo50422);
const smo50423 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo50423'] = smo50423;
smo50423.setAttribute('id', 'smo50423');
smo50450v0ar.push(smo50423);
const smo50424 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo50424'] = smo50424;
smo50424.setAttribute('id', 'smo50424');
smo50450v0ar.push(smo50424);
const smo50425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo50425'] = smo50425;
smo50425.setAttribute('id', 'smo50425');
smo50450v0ar.push(smo50425);
const smo50426 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo50426'] = smo50426;
smo50426.setAttribute('id', 'smo50426');
smo50450v0ar.push(smo50426);
const smo50427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo50427'] = smo50427;
smo50427.setAttribute('id', 'smo50427');
smo50450v0ar.push(smo50427);
const smo50428 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo50428'] = smo50428;
smo50428.setAttribute('id', 'smo50428');
smo50450v0ar.push(smo50428);
const smo50429 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo50429'] = smo50429;
smo50429.setAttribute('id', 'smo50429');
smo50450v0ar.push(smo50429);
const smo50430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo50430'] = smo50430;
smo50430.setAttribute('id', 'smo50430');
const smo504300acc = new VF.Accidental('#');
smo50430.addModifier(smo504300acc, 0);
smo50450v0ar.push(smo50430);
const smo50431 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo50431'] = smo50431;
smo50431.setAttribute('id', 'smo50431');
smo50450v0ar.push(smo50431);
const smo50432 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo50432'] = smo50432;
smo50432.setAttribute('id', 'smo50432');
smo50450v0ar.push(smo50432);
const smo50433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo50433'] = smo50433;
smo50433.setAttribute('id', 'smo50433');
smo50450v0ar.push(smo50433);
const smo50434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo50434'] = smo50434;
smo50434.setAttribute('id', 'smo50434');
smo50450v0ar.push(smo50434);
smo50450v0.addTickables(smo50450v0ar)
fmtsmo504503.joinVoices([smo50450v0]);
const fmtsmo509343 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo50934v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo50934v0ar = [];
const smo50899 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50899'] = smo50899;
smo50899.setAttribute('id', 'smo50899');
smo50934v0ar.push(smo50899);
const smo50900 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo50900'] = smo50900;
smo50900.setAttribute('id', 'smo50900');
smo50934v0ar.push(smo50900);
const smo50901 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo50901'] = smo50901;
smo50901.setAttribute('id', 'smo50901');
smo50934v0ar.push(smo50901);
const smo50902 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50902'] = smo50902;
smo50902.setAttribute('id', 'smo50902');
smo50934v0ar.push(smo50902);
const smo50903 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo50903'] = smo50903;
smo50903.setAttribute('id', 'smo50903');
smo50934v0ar.push(smo50903);
const smo50904 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo50904'] = smo50904;
smo50904.setAttribute('id', 'smo50904');
smo50934v0ar.push(smo50904);
const smo50905 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50905'] = smo50905;
smo50905.setAttribute('id', 'smo50905');
smo50934v0ar.push(smo50905);
const smo50906 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo50906'] = smo50906;
smo50906.setAttribute('id', 'smo50906');
smo50934v0ar.push(smo50906);
const smo50907 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo50907'] = smo50907;
smo50907.setAttribute('id', 'smo50907');
smo50934v0ar.push(smo50907);
const smo50908 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50908'] = smo50908;
smo50908.setAttribute('id', 'smo50908');
smo50934v0ar.push(smo50908);
const smo50909 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
noteHash['smo50909'] = smo50909;
smo50909.setAttribute('id', 'smo50909');
const smo509090acc = new VF.Accidental('#');
smo50909.addModifier(smo509090acc, 0);
smo50934v0ar.push(smo50909);
const smo50910 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
noteHash['smo50910'] = smo50910;
smo50910.setAttribute('id', 'smo50910');
smo50934v0ar.push(smo50910);
const smo50911 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50911'] = smo50911;
smo50911.setAttribute('id', 'smo50911');
smo50934v0ar.push(smo50911);
const smo50912 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
noteHash['smo50912'] = smo50912;
smo50912.setAttribute('id', 'smo50912');
smo50934v0ar.push(smo50912);
const smo50913 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
noteHash['smo50913'] = smo50913;
smo50913.setAttribute('id', 'smo50913');
smo50934v0ar.push(smo50913);
smo50934v0.addTickables(smo50934v0ar)
fmtsmo509343.joinVoices([smo50934v0]);
const smo50934v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo50934v1ar = [];
const smo50914 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo50914'] = smo50914;
smo50914.setAttribute('id', 'smo50914');
smo50914.setStyle({ fillStyle: "#115511" });
smo50934v1ar.push(smo50914);
const smo50915 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo50915'] = smo50915;
smo50915.setAttribute('id', 'smo50915');
smo50915.setStyle({ fillStyle: "#115511" });
smo50934v1ar.push(smo50915);
const smo50916 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo50916'] = smo50916;
smo50916.setAttribute('id', 'smo50916');
smo50916.setStyle({ fillStyle: "#115511" });
smo50934v1ar.push(smo50916);
const smo50917 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/1/n"]}'))
noteHash['smo50917'] = smo50917;
smo50917.setAttribute('id', 'smo50917');
smo50917.setStyle({ fillStyle: "#115511" });
smo50934v1ar.push(smo50917);
const smo50918 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/1/n"]}'))
noteHash['smo50918'] = smo50918;
smo50918.setAttribute('id', 'smo50918');
smo50918.setStyle({ fillStyle: "#115511" });
smo50934v1ar.push(smo50918);
smo50934v1.addTickables(smo50934v1ar)
fmtsmo509343.joinVoices([smo50934v1]);
// create beam groups and tuplets for format grp smo51196 before formatting
const dirsmo52460 = smo50416.getStemDirection();
smo50416.setStemDirection(dirsmo52460);
smo50417.setStemDirection(dirsmo52460);
smo50418.setStemDirection(dirsmo52460);
smo50419.setStemDirection(dirsmo52460);
const smo52460 = new VF.Beam([smo50416,smo50417,smo50418,smo50419]);
const dirsmo52461 = smo50420.getStemDirection();
smo50420.setStemDirection(dirsmo52461);
smo50421.setStemDirection(dirsmo52461);
const smo52461 = new VF.Beam([smo50420,smo50421]);
const dirsmo52462 = smo50424.getStemDirection();
smo50424.setStemDirection(dirsmo52462);
smo50425.setStemDirection(dirsmo52462);
const smo52462 = new VF.Beam([smo50424,smo50425]);
const dirsmo52463 = smo50426.getStemDirection();
smo50426.setStemDirection(dirsmo52463);
smo50427.setStemDirection(dirsmo52463);
smo50428.setStemDirection(dirsmo52463);
smo50429.setStemDirection(dirsmo52463);
const smo52463 = new VF.Beam([smo50426,smo50427,smo50428,smo50429]);
const dirsmo52464 = smo50430.getStemDirection();
smo50430.setStemDirection(dirsmo52464);
smo50431.setStemDirection(dirsmo52464);
const smo52464 = new VF.Beam([smo50430,smo50431]);
 
// formatting measures in staff group smo51196
fmtsmo504503.format([smo50450v0,smo50934v0,smo50934v1], 1117);
const stavesmo50450 = new VF.Stave(103, 1035, 1173);
stavesmo50450.setAttribute('id', 'stavesmo50450');
stavesmo50450.setBegBarType(1);
stavesmo50450.addClef('treble');
stavesmo50450.setContext(context);
stavesmo50450.draw();
smo50450v0.draw(context, stavesmo50450);
smo52460.setContext(context);
smo52460.draw();
smo52461.setContext(context);
smo52461.draw();
smo52462.setContext(context);
smo52462.draw();
smo52463.setContext(context);
smo52463.draw();
smo52464.setContext(context);
smo52464.draw();
const stavesmo50934 = new VF.Stave(103, 1164, 1173);
stavesmo50934.setAttribute('id', 'stavesmo50934');
stavesmo50934.setBegBarType(1);
stavesmo50934.addClef('bass');
stavesmo50934.setContext(context);
stavesmo50934.draw();
smo50934v0.draw(context, stavesmo50934);
smo50934v1.draw(context, stavesmo50934);
const leftsmo51196stavesmo504501 = new VF.StaveConnector(stavesmo50450, stavesmo50934).setType(3);
leftsmo51196stavesmo504501.setContext(context).draw();
const fmtsmo504944 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo50494v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo50494v0ar = [];
const smo50451 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo50451'] = smo50451;
smo50451.setAttribute('id', 'smo50451');
smo50494v0ar.push(smo50451);
const smo50452 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo50452'] = smo50452;
smo50452.setAttribute('id', 'smo50452');
smo50494v0ar.push(smo50452);
const smo50453 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo50453'] = smo50453;
smo50453.setAttribute('id', 'smo50453');
const smo504530acc = new VF.Accidental('#');
smo50453.addModifier(smo504530acc, 0);
smo50494v0ar.push(smo50453);
const smo50454 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo50454'] = smo50454;
smo50454.setAttribute('id', 'smo50454');
smo50494v0ar.push(smo50454);
const smo50455 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo50455'] = smo50455;
smo50455.setAttribute('id', 'smo50455');
const smo504550acc = new VF.Accidental('#');
smo50455.addModifier(smo504550acc, 0);
smo50494v0ar.push(smo50455);
const smo50456 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo50456'] = smo50456;
smo50456.setAttribute('id', 'smo50456');
smo50494v0ar.push(smo50456);
const smo50457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo50457'] = smo50457;
smo50457.setAttribute('id', 'smo50457');
smo50494v0ar.push(smo50457);
const smo50458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo50458'] = smo50458;
smo50458.setAttribute('id', 'smo50458');
smo50494v0ar.push(smo50458);
const smo50459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo50459'] = smo50459;
smo50459.setAttribute('id', 'smo50459');
smo50494v0ar.push(smo50459);
const smo50460 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo50460'] = smo50460;
smo50460.setAttribute('id', 'smo50460');
smo50494v0ar.push(smo50460);
const smo50461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo50461'] = smo50461;
smo50461.setAttribute('id', 'smo50461');
smo50494v0ar.push(smo50461);
const smo50462 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo50462'] = smo50462;
smo50462.setAttribute('id', 'smo50462');
smo50494v0ar.push(smo50462);
const smo50463 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo50463'] = smo50463;
smo50463.setAttribute('id', 'smo50463');
smo50494v0ar.push(smo50463);
const smo50464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo50464'] = smo50464;
smo50464.setAttribute('id', 'smo50464');
smo50494v0ar.push(smo50464);
const smo50465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo50465'] = smo50465;
smo50465.setAttribute('id', 'smo50465');
const smo504650acc = new VF.Accidental('#');
smo50465.addModifier(smo504650acc, 0);
smo50494v0ar.push(smo50465);
const smo50466 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo50466'] = smo50466;
smo50466.setAttribute('id', 'smo50466');
smo50494v0ar.push(smo50466);
const smo50467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo50467'] = smo50467;
smo50467.setAttribute('id', 'smo50467');
smo50494v0ar.push(smo50467);
const smo50468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo50468'] = smo50468;
smo50468.setAttribute('id', 'smo50468');
smo50494v0ar.push(smo50468);
const smo50469 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
const smo50470 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["f#/4"],"slash":false}'))
smo50470.setAttribute('id', 'smo50470');
const acc0smo50470 = new VF.Accidental('#');
smo50470.addModifier(acc0smo50470, 0)
const ggrpsmo50469 = new VF.GraceNoteGroup([smo50470]);
ggrpsmo50469.beamNotes();
smo50469.addModifier(ggrpsmo50469, 0);
noteHash['smo50469'] = smo50469;
smo50469.setAttribute('id', 'smo50469');
const smo504690acc = new VF.Accidental('n');
smo50469.addModifier(smo504690acc, 0);
smo50494v0ar.push(smo50469);
const smo50471 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo50471'] = smo50471;
smo50471.setAttribute('id', 'smo50471');
smo50494v0ar.push(smo50471);
const smo50472 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo50472'] = smo50472;
smo50472.setAttribute('id', 'smo50472');
smo50494v0ar.push(smo50472);
const smo50473 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo50473'] = smo50473;
smo50473.setAttribute('id', 'smo50473');
smo50494v0ar.push(smo50473);
const smo50474 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo50474'] = smo50474;
smo50474.setAttribute('id', 'smo50474');
const smo504740acc = new VF.Accidental('#');
smo50474.addModifier(smo504740acc, 0);
smo50494v0ar.push(smo50474);
const smo50475 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo50475'] = smo50475;
smo50475.setAttribute('id', 'smo50475');
smo50494v0ar.push(smo50475);
const smo50476 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo50476'] = smo50476;
smo50476.setAttribute('id', 'smo50476');
smo50494v0ar.push(smo50476);
const smo50477 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo50477'] = smo50477;
smo50477.setAttribute('id', 'smo50477');
smo50494v0ar.push(smo50477);
const smo50478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo50478'] = smo50478;
smo50478.setAttribute('id', 'smo50478');
smo50494v0ar.push(smo50478);
smo50494v0.addTickables(smo50494v0ar)
fmtsmo504944.joinVoices([smo50494v0]);
const fmtsmo509704 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo50970v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo50970v0ar = [];
const smo50935 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50935'] = smo50935;
smo50935.setAttribute('id', 'smo50935');
smo50970v0ar.push(smo50935);
const smo50936 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo50936'] = smo50936;
smo50936.setAttribute('id', 'smo50936');
smo50970v0ar.push(smo50936);
const smo50937 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo50937'] = smo50937;
smo50937.setAttribute('id', 'smo50937');
smo50970v0ar.push(smo50937);
const smo50938 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50938'] = smo50938;
smo50938.setAttribute('id', 'smo50938');
smo50970v0ar.push(smo50938);
const smo50939 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo50939'] = smo50939;
smo50939.setAttribute('id', 'smo50939');
smo50970v0ar.push(smo50939);
const smo50940 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo50940'] = smo50940;
smo50940.setAttribute('id', 'smo50940');
smo50970v0ar.push(smo50940);
const smo50941 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50941'] = smo50941;
smo50941.setAttribute('id', 'smo50941');
smo50970v0ar.push(smo50941);
const smo50942 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
noteHash['smo50942'] = smo50942;
smo50942.setAttribute('id', 'smo50942');
const smo509420acc = new VF.Accidental('#');
smo50942.addModifier(smo509420acc, 0);
smo50970v0ar.push(smo50942);
const smo50943 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
noteHash['smo50943'] = smo50943;
smo50943.setAttribute('id', 'smo50943');
smo50970v0ar.push(smo50943);
const smo50944 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50944'] = smo50944;
smo50944.setAttribute('id', 'smo50944');
smo50970v0ar.push(smo50944);
const smo50945 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","c#/4/n","f#/4/n"]}'))
noteHash['smo50945'] = smo50945;
smo50945.setAttribute('id', 'smo50945');
const smo509451acc = new VF.Accidental('#');
smo50945.addModifier(smo509451acc, 1);
const smo509452acc = new VF.Accidental('#');
smo50945.addModifier(smo509452acc, 2);
smo50970v0ar.push(smo50945);
const smo50946 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","c#/4/n","f#/4/n"]}'))
noteHash['smo50946'] = smo50946;
smo50946.setAttribute('id', 'smo50946');
smo50970v0ar.push(smo50946);
const smo50947 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50947'] = smo50947;
smo50947.setAttribute('id', 'smo50947');
smo50970v0ar.push(smo50947);
const smo50948 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo50948'] = smo50948;
smo50948.setAttribute('id', 'smo50948');
smo50970v0ar.push(smo50948);
const smo50949 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo50949'] = smo50949;
smo50949.setAttribute('id', 'smo50949');
smo50970v0ar.push(smo50949);
smo50970v0.addTickables(smo50970v0ar)
fmtsmo509704.joinVoices([smo50970v0]);
const smo50970v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo50970v1ar = [];
const smo50950 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo50950'] = smo50950;
smo50950.setAttribute('id', 'smo50950');
smo50950.setStyle({ fillStyle: "#115511" });
smo50970v1ar.push(smo50950);
const smo50951 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo50951'] = smo50951;
smo50951.setAttribute('id', 'smo50951');
smo50951.setStyle({ fillStyle: "#115511" });
smo50970v1ar.push(smo50951);
const smo50952 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/1/n"]}'))
noteHash['smo50952'] = smo50952;
smo50952.setAttribute('id', 'smo50952');
smo50952.setStyle({ fillStyle: "#115511" });
smo50970v1ar.push(smo50952);
const smo50953 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["f#/1/n"]}'))
noteHash['smo50953'] = smo50953;
smo50953.setAttribute('id', 'smo50953');
smo50953.setStyle({ fillStyle: "#115511" });
const smo509530acc = new VF.Accidental('#');
smo50953.addModifier(smo509530acc, 0);
smo50970v1ar.push(smo50953);
const smo50954 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo50954'] = smo50954;
smo50954.setAttribute('id', 'smo50954');
smo50954.setStyle({ fillStyle: "#115511" });
smo50970v1ar.push(smo50954);
smo50970v1.addTickables(smo50970v1ar)
fmtsmo509704.joinVoices([smo50970v1]);
// create beam groups and tuplets for format grp smo51196 before formatting
const dirsmo52480 = smo50451.getStemDirection();
smo50451.setStemDirection(dirsmo52480);
smo50452.setStemDirection(dirsmo52480);
smo50453.setStemDirection(dirsmo52480);
smo50454.setStemDirection(dirsmo52480);
const smo52480 = new VF.Beam([smo50451,smo50452,smo50453,smo50454]);
const dirsmo52481 = smo50455.getStemDirection();
smo50455.setStemDirection(dirsmo52481);
smo50456.setStemDirection(dirsmo52481);
const smo52481 = new VF.Beam([smo50455,smo50456]);
const dirsmo52482 = smo50459.getStemDirection();
smo50459.setStemDirection(dirsmo52482);
smo50460.setStemDirection(dirsmo52482);
const smo52482 = new VF.Beam([smo50459,smo50460]);
const dirsmo52483 = smo50461.getStemDirection();
smo50461.setStemDirection(dirsmo52483);
smo50462.setStemDirection(dirsmo52483);
smo50463.setStemDirection(dirsmo52483);
smo50464.setStemDirection(dirsmo52483);
const smo52483 = new VF.Beam([smo50461,smo50462,smo50463,smo50464]);
const dirsmo52484 = smo50465.getStemDirection();
smo50465.setStemDirection(dirsmo52484);
smo50466.setStemDirection(dirsmo52484);
const smo52484 = new VF.Beam([smo50465,smo50466]);
const dirsmo52485 = smo50471.getStemDirection();
smo50471.setStemDirection(dirsmo52485);
smo50472.setStemDirection(dirsmo52485);
smo50473.setStemDirection(dirsmo52485);
smo50474.setStemDirection(dirsmo52485);
const smo52485 = new VF.Beam([smo50471,smo50472,smo50473,smo50474]);
const dirsmo52486 = smo50475.getStemDirection();
smo50475.setStemDirection(dirsmo52486);
smo50476.setStemDirection(dirsmo52486);
smo50477.setStemDirection(dirsmo52486);
smo50478.setStemDirection(dirsmo52486);
const smo52486 = new VF.Beam([smo50475,smo50476,smo50477,smo50478]);
 
// formatting measures in staff group smo51196
fmtsmo504944.format([smo50494v0,smo50970v0,smo50970v1], 1117);
const stavesmo50494 = new VF.Stave(103, 1298, 1174);
stavesmo50494.setAttribute('id', 'stavesmo50494');
stavesmo50494.setBegBarType(1);
stavesmo50494.addClef('treble');
stavesmo50494.setContext(context);
stavesmo50494.draw();
smo50494v0.draw(context, stavesmo50494);
smo52480.setContext(context);
smo52480.draw();
smo52481.setContext(context);
smo52481.draw();
smo52482.setContext(context);
smo52482.draw();
smo52483.setContext(context);
smo52483.draw();
smo52484.setContext(context);
smo52484.draw();
smo52485.setContext(context);
smo52485.draw();
smo52486.setContext(context);
smo52486.draw();
const stavesmo50970 = new VF.Stave(103, 1436, 1174);
stavesmo50970.setAttribute('id', 'stavesmo50970');
stavesmo50970.setBegBarType(1);
stavesmo50970.addClef('bass');
stavesmo50970.setContext(context);
stavesmo50970.draw();
smo50970v0.draw(context, stavesmo50970);
smo50970v1.draw(context, stavesmo50970);
const leftsmo51196stavesmo504941 = new VF.StaveConnector(stavesmo50494, stavesmo50970).setType(3);
leftsmo51196stavesmo504941.setContext(context).draw();
const fmtsmo505385 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo50538v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo50538v0ar = [];
const smo50495 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo50495'] = smo50495;
smo50495.setAttribute('id', 'smo50495');
smo50538v0ar.push(smo50495);
const smo50496 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo50496'] = smo50496;
smo50496.setAttribute('id', 'smo50496');
const smo504960acc = new VF.Accidental('#');
smo50496.addModifier(smo504960acc, 0);
smo50538v0ar.push(smo50496);
const smo50497 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo50497'] = smo50497;
smo50497.setAttribute('id', 'smo50497');
smo50538v0ar.push(smo50497);
const smo50498 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo50498'] = smo50498;
smo50498.setAttribute('id', 'smo50498');
const smo504980acc = new VF.Accidental('#');
smo50498.addModifier(smo504980acc, 0);
smo50538v0ar.push(smo50498);
const smo50499 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo50499'] = smo50499;
smo50499.setAttribute('id', 'smo50499');
smo50538v0ar.push(smo50499);
const smo50500 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo50500'] = smo50500;
smo50500.setAttribute('id', 'smo50500');
smo50538v0ar.push(smo50500);
const smo50501 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo50501'] = smo50501;
smo50501.setAttribute('id', 'smo50501');
smo50538v0ar.push(smo50501);
const smo50502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo50502'] = smo50502;
smo50502.setAttribute('id', 'smo50502');
smo50538v0ar.push(smo50502);
const smo50503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo50503'] = smo50503;
smo50503.setAttribute('id', 'smo50503');
smo50538v0ar.push(smo50503);
const smo50504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo50504'] = smo50504;
smo50504.setAttribute('id', 'smo50504');
const smo505040acc = new VF.Accidental('#');
smo50504.addModifier(smo505040acc, 0);
smo50538v0ar.push(smo50504);
const smo50505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo50505'] = smo50505;
smo50505.setAttribute('id', 'smo50505');
smo50538v0ar.push(smo50505);
const smo50506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo50506'] = smo50506;
smo50506.setAttribute('id', 'smo50506');
smo50538v0ar.push(smo50506);
const smo50507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo50507'] = smo50507;
smo50507.setAttribute('id', 'smo50507');
smo50538v0ar.push(smo50507);
const smo50508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo50508'] = smo50508;
smo50508.setAttribute('id', 'smo50508');
smo50538v0ar.push(smo50508);
const smo50509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo50509'] = smo50509;
smo50509.setAttribute('id', 'smo50509');
smo50538v0ar.push(smo50509);
const smo50510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo50510'] = smo50510;
smo50510.setAttribute('id', 'smo50510');
smo50538v0ar.push(smo50510);
const smo50511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo50511'] = smo50511;
smo50511.setAttribute('id', 'smo50511');
smo50538v0ar.push(smo50511);
const smo50512 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo50512'] = smo50512;
smo50512.setAttribute('id', 'smo50512');
smo50538v0ar.push(smo50512);
const smo50513 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo50513'] = smo50513;
smo50513.setAttribute('id', 'smo50513');
smo50538v0ar.push(smo50513);
const smo50514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo50514'] = smo50514;
smo50514.setAttribute('id', 'smo50514');
smo50538v0ar.push(smo50514);
const smo50515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo50515'] = smo50515;
smo50515.setAttribute('id', 'smo50515');
smo50538v0ar.push(smo50515);
const smo50516 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo50516'] = smo50516;
smo50516.setAttribute('id', 'smo50516');
smo50538v0ar.push(smo50516);
const smo50517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo50517'] = smo50517;
smo50517.setAttribute('id', 'smo50517');
smo50538v0ar.push(smo50517);
const smo50518 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo50518'] = smo50518;
smo50518.setAttribute('id', 'smo50518');
smo50538v0ar.push(smo50518);
const smo50519 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo50519'] = smo50519;
smo50519.setAttribute('id', 'smo50519');
smo50538v0ar.push(smo50519);
const smo50520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo50520'] = smo50520;
smo50520.setAttribute('id', 'smo50520');
smo50538v0ar.push(smo50520);
const smo50521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo50521'] = smo50521;
smo50521.setAttribute('id', 'smo50521');
smo50538v0ar.push(smo50521);
const smo50522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo50522'] = smo50522;
smo50522.setAttribute('id', 'smo50522');
smo50538v0ar.push(smo50522);
smo50538v0.addTickables(smo50538v0ar)
fmtsmo505385.joinVoices([smo50538v0]);
const fmtsmo510025 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo51002v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo51002v0ar = [];
const smo50971 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50971'] = smo50971;
smo50971.setAttribute('id', 'smo50971');
smo51002v0ar.push(smo50971);
const smo50972 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo50972'] = smo50972;
smo50972.setAttribute('id', 'smo50972');
smo51002v0ar.push(smo50972);
const smo50973 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo50973'] = smo50973;
smo50973.setAttribute('id', 'smo50973');
smo51002v0ar.push(smo50973);
const smo50974 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50974'] = smo50974;
smo50974.setAttribute('id', 'smo50974');
smo51002v0ar.push(smo50974);
const smo50975 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo50975'] = smo50975;
smo50975.setAttribute('id', 'smo50975');
smo51002v0ar.push(smo50975);
const smo50976 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo50976'] = smo50976;
smo50976.setAttribute('id', 'smo50976');
smo51002v0ar.push(smo50976);
const smo50977 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50977'] = smo50977;
smo50977.setAttribute('id', 'smo50977');
smo51002v0ar.push(smo50977);
const smo50978 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo50978'] = smo50978;
smo50978.setAttribute('id', 'smo50978');
smo51002v0ar.push(smo50978);
const smo50979 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo50979'] = smo50979;
smo50979.setAttribute('id', 'smo50979');
smo51002v0ar.push(smo50979);
const smo50980 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo50980'] = smo50980;
smo50980.setAttribute('id', 'smo50980');
smo51002v0ar.push(smo50980);
const smo50981 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
noteHash['smo50981'] = smo50981;
smo50981.setAttribute('id', 'smo50981');
const smo509810acc = new VF.Accidental('#');
smo50981.addModifier(smo509810acc, 0);
smo51002v0ar.push(smo50981);
const smo50982 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
noteHash['smo50982'] = smo50982;
smo50982.setAttribute('id', 'smo50982');
smo51002v0ar.push(smo50982);
smo51002v0.addTickables(smo51002v0ar)
fmtsmo510025.joinVoices([smo51002v0]);
const smo51002v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo51002v1ar = [];
const smo50983 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo50983'] = smo50983;
smo50983.setAttribute('id', 'smo50983');
smo50983.setStyle({ fillStyle: "#115511" });
smo51002v1ar.push(smo50983);
const smo50984 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo50984'] = smo50984;
smo50984.setAttribute('id', 'smo50984');
smo50984.setStyle({ fillStyle: "#115511" });
smo51002v1ar.push(smo50984);
const smo50985 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo50985'] = smo50985;
smo50985.setAttribute('id', 'smo50985');
smo50985.setStyle({ fillStyle: "#115511" });
smo51002v1ar.push(smo50985);
const smo50986 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/1/n"]}'))
noteHash['smo50986'] = smo50986;
smo50986.setAttribute('id', 'smo50986');
smo50986.setStyle({ fillStyle: "#115511" });
smo51002v1ar.push(smo50986);
smo51002v1.addTickables(smo51002v1ar)
fmtsmo510025.joinVoices([smo51002v1]);
// create beam groups and tuplets for format grp smo51196 before formatting
const dirsmo52502 = smo50495.getStemDirection();
smo50495.setStemDirection(dirsmo52502);
smo50496.setStemDirection(dirsmo52502);
smo50497.setStemDirection(dirsmo52502);
smo50498.setStemDirection(dirsmo52502);
const smo52502 = new VF.Beam([smo50495,smo50496,smo50497,smo50498]);
const dirsmo52503 = smo50499.getStemDirection();
smo50499.setStemDirection(dirsmo52503);
smo50500.setStemDirection(dirsmo52503);
smo50501.setStemDirection(dirsmo52503);
smo50502.setStemDirection(dirsmo52503);
const smo52503 = new VF.Beam([smo50499,smo50500,smo50501,smo50502]);
const dirsmo52504 = smo50503.getStemDirection();
smo50503.setStemDirection(dirsmo52504);
smo50504.setStemDirection(dirsmo52504);
smo50505.setStemDirection(dirsmo52504);
smo50506.setStemDirection(dirsmo52504);
const smo52504 = new VF.Beam([smo50503,smo50504,smo50505,smo50506]);
const dirsmo52505 = smo50507.getStemDirection();
smo50507.setStemDirection(dirsmo52505);
smo50508.setStemDirection(dirsmo52505);
smo50509.setStemDirection(dirsmo52505);
smo50510.setStemDirection(dirsmo52505);
const smo52505 = new VF.Beam([smo50507,smo50508,smo50509,smo50510]);
const dirsmo52506 = smo50511.getStemDirection();
smo50511.setStemDirection(dirsmo52506);
smo50512.setStemDirection(dirsmo52506);
smo50513.setStemDirection(dirsmo52506);
smo50514.setStemDirection(dirsmo52506);
const smo52506 = new VF.Beam([smo50511,smo50512,smo50513,smo50514]);
const dirsmo52507 = smo50515.getStemDirection();
smo50515.setStemDirection(dirsmo52507);
smo50516.setStemDirection(dirsmo52507);
smo50517.setStemDirection(dirsmo52507);
smo50518.setStemDirection(dirsmo52507);
const smo52507 = new VF.Beam([smo50515,smo50516,smo50517,smo50518]);
const dirsmo52508 = smo50519.getStemDirection();
smo50519.setStemDirection(dirsmo52508);
smo50520.setStemDirection(dirsmo52508);
const smo52508 = new VF.Beam([smo50519,smo50520]);
 
// formatting measures in staff group smo51196
fmtsmo505385.format([smo50538v0,smo51002v0,smo51002v1], 1117);
const stavesmo50538 = new VF.Stave(103, 1621, 1174);
stavesmo50538.setAttribute('id', 'stavesmo50538');
stavesmo50538.setBegBarType(1);
stavesmo50538.addClef('treble');
stavesmo50538.setContext(context);
stavesmo50538.draw();
smo50538v0.draw(context, stavesmo50538);
smo52502.setContext(context);
smo52502.draw();
smo52503.setContext(context);
smo52503.draw();
smo52504.setContext(context);
smo52504.draw();
smo52505.setContext(context);
smo52505.draw();
smo52506.setContext(context);
smo52506.draw();
smo52507.setContext(context);
smo52507.draw();
smo52508.setContext(context);
smo52508.draw();
const stavesmo51002 = new VF.Stave(103, 1734, 1174);
stavesmo51002.setAttribute('id', 'stavesmo51002');
stavesmo51002.setBegBarType(1);
stavesmo51002.addClef('bass');
stavesmo51002.setContext(context);
stavesmo51002.draw();
smo51002v0.draw(context, stavesmo51002);
smo51002v1.draw(context, stavesmo51002);
const leftsmo51196stavesmo505381 = new VF.StaveConnector(stavesmo50538, stavesmo51002).setType(3);
leftsmo51196stavesmo505381.setContext(context).draw();
const smo52700 = new VF.StaveTie({ first_note: smo50333, last_note: smo50334, first_indices: [0], last_indices: [0]});
smo52700.setContext(context).draw();
const smo52701 = new VF.StaveTie({ first_note: smo50341, last_note: smo50342, first_indices: [0], last_indices: [0]});
smo52701.setContext(context).draw();
const smo52702 = new VF.StaveTie({ first_note: smo50344, last_note: smo50345, first_indices: [0], last_indices: [0]});
smo52702.setContext(context).draw();
const smo52703 = new VF.StaveTie({ first_note: smo50347, last_note: null, first_indices: [0], last_indices: [0]});
smo52703.setContext(context).draw();
const smo52704 = new VF.StaveTie({ first_note: null, last_note: smo50370, first_indices: [0], last_indices: [0]});
smo52704.setContext(context).draw();
const smo52705 = new VF.StaveTie({ first_note: smo50396, last_note: smo50397, first_indices: [0], last_indices: [0]});
smo52705.setContext(context).draw();
const smo52706 = new VF.StaveTie({ first_note: smo50421, last_note: smo50422, first_indices: [0], last_indices: [0]});
smo52706.setContext(context).draw();
const smo52707 = new VF.StaveTie({ first_note: smo50431, last_note: smo50432, first_indices: [0], last_indices: [0]});
smo52707.setContext(context).draw();
const smo52708 = new VF.StaveTie({ first_note: smo50456, last_note: smo50457, first_indices: [0], last_indices: [0]});
smo52708.setContext(context).draw();
const smo52709 = new VF.StaveTie({ first_note: smo50466, last_note: smo50467, first_indices: [0], last_indices: [0]});
smo52709.setContext(context).draw();
const smo52710 = new VF.StaveTie({ first_note: smo50520, last_note: smo50521, first_indices: [0], last_indices: [0]});
smo52710.setContext(context).draw();
const smo52711 = new VF.Curve(smo50471, null, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":20,"cps":[{"x":0,"y":30},{"x":0,"y":15}],"invert":false,"position":2,"position_end":1}'));
smo52711.setContext(context).draw();
const smo52712 = new VF.Curve(null, smo50521, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":20,"cps":[{"x":0,"y":30},{"x":0,"y":15}],"invert":false,"position":2,"position_end":1}'));
smo52712.setContext(context).draw();
const smo52713 = new VF.Curve(smo50416, smo50422, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo52713.setContext(context).draw();
const smo52714 = new VF.Curve(smo50326, smo50334, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":16,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"position_end":2}'));
smo52714.setContext(context).draw();
const smo52715 = new VF.Curve(smo50371, smo50397, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":5,"cps":[{"x":0,"y":100},{"x":0,"y":80}],"invert":true,"position":1,"position_end":1}'));
smo52715.setContext(context).draw();
const smo52716 = new VF.Curve(smo50336, smo50345, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":5,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"position_end":2}'));
smo52716.setContext(context).draw();
const smo52717 = new VF.Curve(smo50424, smo50432, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":57},{"x":0,"y":45}],"invert":true,"position":1,"position_end":2}'));
smo52717.setContext(context).draw();
const smo52718 = new VF.Curve(smo50451, smo50457, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo52718.setContext(context).draw();
const smo52719 = new VF.Curve(smo50459, smo50467, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":15,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo52719.setContext(context).draw();
}
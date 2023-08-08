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
const fmtsmo589010 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo58901v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58901v0ar = [];
const smo58873 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo58873'] = smo58873;
smo58873.setAttribute('id', 'smo58873');
smo58901v0ar.push(smo58873);
const smo58875 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo58875'] = smo58875;
smo58875.setAttribute('id', 'smo58875');
smo58901v0ar.push(smo58875);
const smo58876 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo58876'] = smo58876;
smo58876.setAttribute('id', 'smo58876');
smo58901v0ar.push(smo58876);
const smo58877 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo58877'] = smo58877;
smo58877.setAttribute('id', 'smo58877');
smo58901v0ar.push(smo58877);
const smo58878 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo58878'] = smo58878;
smo58878.setAttribute('id', 'smo58878');
smo58901v0ar.push(smo58878);
const smo58879 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo58879'] = smo58879;
smo58879.setAttribute('id', 'smo58879');
smo58901v0ar.push(smo58879);
const smo58880 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo58880'] = smo58880;
smo58880.setAttribute('id', 'smo58880');
smo58901v0ar.push(smo58880);
const smo58881 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo58881'] = smo58881;
smo58881.setAttribute('id', 'smo58881');
smo58901v0ar.push(smo58881);
const smo58882 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo58882'] = smo58882;
smo58882.setAttribute('id', 'smo58882');
smo58901v0ar.push(smo58882);
const smo58883 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo58883'] = smo58883;
smo58883.setAttribute('id', 'smo58883');
smo58901v0ar.push(smo58883);
const smo58884 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo58884'] = smo58884;
smo58884.setAttribute('id', 'smo58884');
smo58901v0ar.push(smo58884);
const smo58885 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo58885'] = smo58885;
smo58885.setAttribute('id', 'smo58885');
smo58901v0ar.push(smo58885);
const smo58886 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo58886'] = smo58886;
smo58886.setAttribute('id', 'smo58886');
smo58901v0ar.push(smo58886);
const smo58887 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo58887'] = smo58887;
smo58887.setAttribute('id', 'smo58887');
smo58901v0ar.push(smo58887);
smo58901v0.addTickables(smo58901v0ar)
fmtsmo589010.joinVoices([smo58901v0]);
const fmtsmo643420 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo64342v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64342v0ar = [];
const smo64321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64321'] = smo64321;
smo64321.setAttribute('id', 'smo64321');
smo64342v0ar.push(smo64321);
const smo64322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo64322'] = smo64322;
smo64322.setAttribute('id', 'smo64322');
smo64322.addModifier(new VF.Dot(), 0);
smo64342v0ar.push(smo64322);
const smo64323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo64323'] = smo64323;
smo64323.setAttribute('id', 'smo64323');
smo64342v0ar.push(smo64323);
const smo64324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64324'] = smo64324;
smo64324.setAttribute('id', 'smo64324');
smo64342v0ar.push(smo64324);
const smo64325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo64325'] = smo64325;
smo64325.setAttribute('id', 'smo64325');
smo64325.addModifier(new VF.Dot(), 0);
smo64342v0ar.push(smo64325);
const smo64326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo64326'] = smo64326;
smo64326.setAttribute('id', 'smo64326');
smo64342v0ar.push(smo64326);
smo64342v0.addTickables(smo64342v0ar)
fmtsmo643420.joinVoices([smo64342v0]);
const smo64342v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64342v1ar = [];
const smo64327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo64327'] = smo64327;
smo64327.setAttribute('id', 'smo64327');
smo64327.setStyle({ fillStyle: "#115511" });
smo64342v1ar.push(smo64327);
const smo64328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo64328'] = smo64328;
smo64328.setAttribute('id', 'smo64328');
smo64328.setStyle({ fillStyle: "#115511" });
smo64342v1ar.push(smo64328);
smo64342v1.addTickables(smo64342v1ar)
fmtsmo643420.joinVoices([smo64342v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68258 = smo58875.getStemDirection();
smo58875.setStemDirection(dirsmo68258);
smo58876.setStemDirection(dirsmo68258);
const smo68258 = new VF.Beam([smo58875,smo58876]);
const dirsmo68259 = smo58877.getStemDirection();
smo58877.setStemDirection(dirsmo68259);
smo58878.setStemDirection(dirsmo68259);
smo58879.setStemDirection(dirsmo68259);
smo58880.setStemDirection(dirsmo68259);
const smo68259 = new VF.Beam([smo58877,smo58878,smo58879,smo58880]);
const dirsmo68260 = smo58882.getStemDirection();
smo58882.setStemDirection(dirsmo68260);
smo58883.setStemDirection(dirsmo68260);
const smo68260 = new VF.Beam([smo58882,smo58883]);
const dirsmo68261 = smo58884.getStemDirection();
smo58884.setStemDirection(dirsmo68261);
smo58885.setStemDirection(dirsmo68261);
smo58886.setStemDirection(dirsmo68261);
smo58887.setStemDirection(dirsmo68261);
const smo68261 = new VF.Beam([smo58884,smo58885,smo58886,smo58887]);
 
// formatting measures in staff group smo57677
fmtsmo589010.format([smo58901v0,smo64342v0,smo64342v1], 507);
const stavesmo58901 = new VF.Stave(90, 294, 589);
stavesmo58901.setAttribute('id', 'stavesmo58901');
stavesmo58901.setBegBarType(1);
stavesmo58901.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":112,"name":"Moderato"}'), -1 * 18);
stavesmo58901.addClef('treble');
stavesmo58901.addTimeSignature('4/4');
stavesmo58901.setContext(context);
stavesmo58901.draw();
smo58901v0.draw(context, stavesmo58901);
smo68258.setContext(context);
smo68258.draw();
smo68259.setContext(context);
smo68259.draw();
smo68260.setContext(context);
smo68260.draw();
smo68261.setContext(context);
smo68261.draw();
const stavesmo64342 = new VF.Stave(90, 498, 589);
stavesmo64342.setAttribute('id', 'stavesmo64342');
stavesmo64342.setBegBarType(1);
stavesmo64342.addClef('treble');
stavesmo64342.addTimeSignature('4/4');
stavesmo64342.setContext(context);
stavesmo64342.draw();
smo64342v0.draw(context, stavesmo64342);
smo64342v1.draw(context, stavesmo64342);
const leftsmo57677stavesmo589011 = new VF.StaveConnector(stavesmo58901, stavesmo64342).setType(3);
leftsmo57677stavesmo589011.setContext(context).draw();
const fmtsmo589291 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo58929v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58929v0ar = [];
const smo58902 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo58902'] = smo58902;
smo58902.setAttribute('id', 'smo58902');
smo58929v0ar.push(smo58902);
const smo58903 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo58903'] = smo58903;
smo58903.setAttribute('id', 'smo58903');
smo58929v0ar.push(smo58903);
const smo58904 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo58904'] = smo58904;
smo58904.setAttribute('id', 'smo58904');
smo58929v0ar.push(smo58904);
const smo58905 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo58905'] = smo58905;
smo58905.setAttribute('id', 'smo58905');
smo58929v0ar.push(smo58905);
const smo58906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo58906'] = smo58906;
smo58906.setAttribute('id', 'smo58906');
smo58929v0ar.push(smo58906);
const smo58907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo58907'] = smo58907;
smo58907.setAttribute('id', 'smo58907');
smo58929v0ar.push(smo58907);
const smo58908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo58908'] = smo58908;
smo58908.setAttribute('id', 'smo58908');
smo58929v0ar.push(smo58908);
const smo58909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo58909'] = smo58909;
smo58909.setAttribute('id', 'smo58909');
smo58929v0ar.push(smo58909);
const smo58910 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo58910'] = smo58910;
smo58910.setAttribute('id', 'smo58910');
smo58929v0ar.push(smo58910);
const smo58911 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo58911'] = smo58911;
smo58911.setAttribute('id', 'smo58911');
smo58929v0ar.push(smo58911);
const smo58912 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo58912'] = smo58912;
smo58912.setAttribute('id', 'smo58912');
smo58929v0ar.push(smo58912);
const smo58913 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo58913'] = smo58913;
smo58913.setAttribute('id', 'smo58913');
smo58929v0ar.push(smo58913);
const smo58914 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo58914'] = smo58914;
smo58914.setAttribute('id', 'smo58914');
smo58929v0ar.push(smo58914);
const smo58915 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo58915'] = smo58915;
smo58915.setAttribute('id', 'smo58915');
smo58929v0ar.push(smo58915);
smo58929v0.addTickables(smo58929v0ar)
fmtsmo589291.joinVoices([smo58929v0]);
const fmtsmo643641 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo64364v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64364v0ar = [];
const smo64343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["cn/7/r"]}'))
noteHash['smo64343'] = smo64343;
smo64343.setAttribute('id', 'smo64343');
smo64364v0ar.push(smo64343);
const smo64344 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo64344'] = smo64344;
smo64344.setAttribute('id', 'smo64344');
smo64344.addModifier(new VF.Dot(), 0);
smo64364v0ar.push(smo64344);
const smo64345 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo64345'] = smo64345;
smo64345.setAttribute('id', 'smo64345');
smo64364v0ar.push(smo64345);
const smo64346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["cn/7/r"]}'))
noteHash['smo64346'] = smo64346;
smo64346.setAttribute('id', 'smo64346');
smo64364v0ar.push(smo64346);
const smo64347 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo64347'] = smo64347;
smo64347.setAttribute('id', 'smo64347');
smo64347.addModifier(new VF.Dot(), 0);
smo64364v0ar.push(smo64347);
const smo64348 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo64348'] = smo64348;
smo64348.setAttribute('id', 'smo64348');
smo64364v0ar.push(smo64348);
smo64364v0.addTickables(smo64364v0ar)
fmtsmo643641.joinVoices([smo64364v0]);
const smo64364v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64364v1ar = [];
const smo64349 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo64349'] = smo64349;
smo64349.setAttribute('id', 'smo64349');
smo64349.setStyle({ fillStyle: "#115511" });
smo64364v1ar.push(smo64349);
const smo64350 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo64350'] = smo64350;
smo64350.setAttribute('id', 'smo64350');
smo64350.setStyle({ fillStyle: "#115511" });
smo64364v1ar.push(smo64350);
smo64364v1.addTickables(smo64364v1ar)
fmtsmo643641.joinVoices([smo64364v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68266 = smo58903.getStemDirection();
smo58903.setStemDirection(dirsmo68266);
smo58904.setStemDirection(dirsmo68266);
const smo68266 = new VF.Beam([smo58903,smo58904]);
const dirsmo68267 = smo58905.getStemDirection();
smo58905.setStemDirection(dirsmo68267);
smo58906.setStemDirection(dirsmo68267);
smo58907.setStemDirection(dirsmo68267);
smo58908.setStemDirection(dirsmo68267);
const smo68267 = new VF.Beam([smo58905,smo58906,smo58907,smo58908]);
const dirsmo68268 = smo58910.getStemDirection();
smo58910.setStemDirection(dirsmo68268);
smo58911.setStemDirection(dirsmo68268);
const smo68268 = new VF.Beam([smo58910,smo58911]);
const dirsmo68269 = smo58912.getStemDirection();
smo58912.setStemDirection(dirsmo68269);
smo58913.setStemDirection(dirsmo68269);
smo58914.setStemDirection(dirsmo68269);
smo58915.setStemDirection(dirsmo68269);
const smo68269 = new VF.Beam([smo58912,smo58913,smo58914,smo58915]);
 
// formatting measures in staff group smo57677
fmtsmo589291.format([smo58929v0,smo64364v0,smo64364v1], 518);
const stavesmo58929 = new VF.Stave(679, 294, 566);
stavesmo58929.setAttribute('id', 'stavesmo58929');
stavesmo58929.setBegBarType(VF.Barline.type.NONE);
stavesmo58929.setContext(context);
stavesmo58929.draw();
smo58929v0.draw(context, stavesmo58929);
smo68266.setContext(context);
smo68266.draw();
smo68267.setContext(context);
smo68267.draw();
smo68268.setContext(context);
smo68268.draw();
smo68269.setContext(context);
smo68269.draw();
const stavesmo64364 = new VF.Stave(679, 498, 566);
stavesmo64364.setAttribute('id', 'stavesmo64364');
stavesmo64364.setBegBarType(VF.Barline.type.NONE);
stavesmo64364.addClef('bass');
stavesmo64364.setContext(context);
stavesmo64364.draw();
smo64364v0.draw(context, stavesmo64364);
smo64364v1.draw(context, stavesmo64364);
const fmtsmo589612 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo58961v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58961v0ar = [];
const smo58930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo58930'] = smo58930;
smo58930.setAttribute('id', 'smo58930');
smo58961v0ar.push(smo58930);
const smo58931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo58931'] = smo58931;
smo58931.setAttribute('id', 'smo58931');
smo58961v0ar.push(smo58931);
const smo58932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo58932'] = smo58932;
smo58932.setAttribute('id', 'smo58932');
smo58961v0ar.push(smo58932);
const smo58933 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo58933'] = smo58933;
smo58933.setAttribute('id', 'smo58933');
smo58961v0ar.push(smo58933);
const smo58934 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo58934'] = smo58934;
smo58934.setAttribute('id', 'smo58934');
smo58961v0ar.push(smo58934);
const smo58935 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo58935'] = smo58935;
smo58935.setAttribute('id', 'smo58935');
smo58961v0ar.push(smo58935);
const smo58936 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo58936'] = smo58936;
smo58936.setAttribute('id', 'smo58936');
smo58961v0ar.push(smo58936);
const smo58937 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo58937'] = smo58937;
smo58937.setAttribute('id', 'smo58937');
smo58961v0ar.push(smo58937);
const smo58938 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo58938'] = smo58938;
smo58938.setAttribute('id', 'smo58938');
smo58961v0ar.push(smo58938);
const smo58939 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo58939'] = smo58939;
smo58939.setAttribute('id', 'smo58939');
smo58961v0ar.push(smo58939);
const smo58940 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo58940'] = smo58940;
smo58940.setAttribute('id', 'smo58940');
smo58961v0ar.push(smo58940);
const smo58941 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo58941'] = smo58941;
smo58941.setAttribute('id', 'smo58941');
smo58961v0ar.push(smo58941);
const smo58942 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo58942'] = smo58942;
smo58942.setAttribute('id', 'smo58942');
smo58961v0ar.push(smo58942);
const smo58943 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo58943'] = smo58943;
smo58943.setAttribute('id', 'smo58943');
smo58961v0ar.push(smo58943);
smo58961v0.addTickables(smo58961v0ar)
fmtsmo589612.joinVoices([smo58961v0]);
const smo58961v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58961v1ar = [];
const smo58944 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo58944'] = smo58944;
smo58944.setAttribute('id', 'smo58944');
smo58944.setStyle({ fillStyle: '#aaaaaa7f' });
smo58961v1ar.push(smo58944);
const smo58945 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo58945'] = smo58945;
smo58945.setAttribute('id', 'smo58945');
smo58945.setStyle({ fillStyle: '#aaaaaa7f' });
smo58945.addModifier(new VF.Dot(), 0);
smo58945.addModifier(new VF.Dot(), 0);
smo58961v1ar.push(smo58945);
const smo58946 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo58946'] = smo58946;
smo58946.setAttribute('id', 'smo58946');
smo58946.setStyle({ fillStyle: '#aaaaaa7f' });
smo58961v1ar.push(smo58946);
const smo58947 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo58947'] = smo58947;
smo58947.setAttribute('id', 'smo58947');
smo58947.setStyle({ fillStyle: '#aaaaaa7f' });
smo58947.addModifier(new VF.Dot(), 0);
smo58947.addModifier(new VF.Dot(), 0);
smo58961v1ar.push(smo58947);
smo58961v1.addTickables(smo58961v1ar)
fmtsmo589612.joinVoices([smo58961v1]);
const fmtsmo643862 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo64386v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64386v0ar = [];
const smo64365 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bb/6/r"]}'))
noteHash['smo64365'] = smo64365;
smo64365.setAttribute('id', 'smo64365');
smo64386v0ar.push(smo64365);
const smo64366 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo64366'] = smo64366;
smo64366.setAttribute('id', 'smo64366');
smo64366.addModifier(new VF.Dot(), 0);
smo64386v0ar.push(smo64366);
const smo64367 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo64367'] = smo64367;
smo64367.setAttribute('id', 'smo64367');
smo64386v0ar.push(smo64367);
const smo64368 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["cn/7/r"]}'))
noteHash['smo64368'] = smo64368;
smo64368.setAttribute('id', 'smo64368');
smo64386v0ar.push(smo64368);
const smo64369 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo64369'] = smo64369;
smo64369.setAttribute('id', 'smo64369');
smo64369.addModifier(new VF.Dot(), 0);
smo64386v0ar.push(smo64369);
const smo64370 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo64370'] = smo64370;
smo64370.setAttribute('id', 'smo64370');
smo64386v0ar.push(smo64370);
smo64386v0.addTickables(smo64386v0ar)
fmtsmo643862.joinVoices([smo64386v0]);
const smo64386v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64386v1ar = [];
const smo64371 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo64371'] = smo64371;
smo64371.setAttribute('id', 'smo64371');
smo64371.setStyle({ fillStyle: "#115511" });
smo64386v1ar.push(smo64371);
const smo64372 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo64372'] = smo64372;
smo64372.setAttribute('id', 'smo64372');
smo64372.setStyle({ fillStyle: "#115511" });
smo64386v1ar.push(smo64372);
smo64386v1.addTickables(smo64386v1ar)
fmtsmo643862.joinVoices([smo64386v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68274 = smo58931.getStemDirection();
smo58931.setStemDirection(dirsmo68274);
smo58932.setStemDirection(dirsmo68274);
const smo68274 = new VF.Beam([smo58931,smo58932]);
const dirsmo68275 = smo58933.getStemDirection();
smo58933.setStemDirection(dirsmo68275);
smo58934.setStemDirection(dirsmo68275);
smo58935.setStemDirection(dirsmo68275);
smo58936.setStemDirection(dirsmo68275);
const smo68275 = new VF.Beam([smo58933,smo58934,smo58935,smo58936]);
const dirsmo68276 = smo58938.getStemDirection();
smo58938.setStemDirection(dirsmo68276);
smo58939.setStemDirection(dirsmo68276);
const smo68276 = new VF.Beam([smo58938,smo58939]);
const dirsmo68277 = smo58940.getStemDirection();
smo58940.setStemDirection(dirsmo68277);
smo58941.setStemDirection(dirsmo68277);
smo58942.setStemDirection(dirsmo68277);
smo58943.setStemDirection(dirsmo68277);
const smo68277 = new VF.Beam([smo58940,smo58941,smo58942,smo58943]);
 
// formatting measures in staff group smo57677
fmtsmo589612.format([smo58961v0,smo58961v1,smo64386v0,smo64386v1], 548);
const stavesmo58961 = new VF.Stave(1245, 294, 562);
stavesmo58961.setAttribute('id', 'stavesmo58961');
stavesmo58961.setBegBarType(VF.Barline.type.NONE);
stavesmo58961.setContext(context);
stavesmo58961.draw();
smo58961v0.draw(context, stavesmo58961);
smo58961v1.draw(context, stavesmo58961);
smo68274.setContext(context);
smo68274.draw();
smo68275.setContext(context);
smo68275.draw();
smo68276.setContext(context);
smo68276.draw();
smo68277.setContext(context);
smo68277.draw();
const stavesmo64386 = new VF.Stave(1245, 498, 562);
stavesmo64386.setAttribute('id', 'stavesmo64386');
stavesmo64386.setBegBarType(VF.Barline.type.NONE);
stavesmo64386.setContext(context);
stavesmo64386.draw();
smo64386v0.draw(context, stavesmo64386);
smo64386v1.draw(context, stavesmo64386);
const rightsmo57677stavesmo589611 = new VF.StaveConnector(stavesmo58961, stavesmo64386).setType(0);
rightsmo57677stavesmo589611.setContext(context).draw();
const fmtsmo589933 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo58993v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58993v0ar = [];
const smo58962 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo58962'] = smo58962;
smo58962.setAttribute('id', 'smo58962');
smo58993v0ar.push(smo58962);
const smo58963 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo58963'] = smo58963;
smo58963.setAttribute('id', 'smo58963');
smo58993v0ar.push(smo58963);
const smo58964 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo58964'] = smo58964;
smo58964.setAttribute('id', 'smo58964');
smo58993v0ar.push(smo58964);
const smo58965 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo58965'] = smo58965;
smo58965.setAttribute('id', 'smo58965');
smo58993v0ar.push(smo58965);
const smo58966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo58966'] = smo58966;
smo58966.setAttribute('id', 'smo58966');
smo58993v0ar.push(smo58966);
const smo58967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo58967'] = smo58967;
smo58967.setAttribute('id', 'smo58967');
smo58993v0ar.push(smo58967);
const smo58968 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo58968'] = smo58968;
smo58968.setAttribute('id', 'smo58968');
smo58993v0ar.push(smo58968);
const smo58969 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo58969'] = smo58969;
smo58969.setAttribute('id', 'smo58969');
smo58993v0ar.push(smo58969);
const smo58970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo58970'] = smo58970;
smo58970.setAttribute('id', 'smo58970');
smo58993v0ar.push(smo58970);
const smo58971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo58971'] = smo58971;
smo58971.setAttribute('id', 'smo58971');
smo58993v0ar.push(smo58971);
const smo58972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo58972'] = smo58972;
smo58972.setAttribute('id', 'smo58972');
smo58993v0ar.push(smo58972);
const smo58973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo58973'] = smo58973;
smo58973.setAttribute('id', 'smo58973');
smo58993v0ar.push(smo58973);
const smo58974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo58974'] = smo58974;
smo58974.setAttribute('id', 'smo58974');
smo58993v0ar.push(smo58974);
const smo58975 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo58975'] = smo58975;
smo58975.setAttribute('id', 'smo58975');
smo58993v0ar.push(smo58975);
smo58993v0.addTickables(smo58993v0ar)
fmtsmo589933.joinVoices([smo58993v0]);
const smo58993v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58993v1ar = [];
const smo58976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo58976'] = smo58976;
smo58976.setAttribute('id', 'smo58976');
smo58976.setStyle({ fillStyle: '#aaaaaa7f' });
smo58993v1ar.push(smo58976);
const smo58977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo58977'] = smo58977;
smo58977.setAttribute('id', 'smo58977');
smo58977.setStyle({ fillStyle: '#aaaaaa7f' });
smo58977.addModifier(new VF.Dot(), 0);
smo58977.addModifier(new VF.Dot(), 0);
smo58993v1ar.push(smo58977);
const smo58978 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo58978'] = smo58978;
smo58978.setAttribute('id', 'smo58978');
smo58978.setStyle({ fillStyle: '#aaaaaa7f' });
smo58993v1ar.push(smo58978);
const smo58979 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo58979'] = smo58979;
smo58979.setAttribute('id', 'smo58979');
smo58979.setStyle({ fillStyle: '#aaaaaa7f' });
smo58979.addModifier(new VF.Dot(), 0);
smo58979.addModifier(new VF.Dot(), 0);
smo58993v1ar.push(smo58979);
smo58993v1.addTickables(smo58993v1ar)
fmtsmo589933.joinVoices([smo58993v1]);
const fmtsmo644083 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo64408v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64408v0ar = [];
const smo64387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64387'] = smo64387;
smo64387.setAttribute('id', 'smo64387');
smo64408v0ar.push(smo64387);
const smo64388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo64388'] = smo64388;
smo64388.setAttribute('id', 'smo64388');
smo64388.addModifier(new VF.Dot(), 0);
smo64408v0ar.push(smo64388);
const smo64389 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo64389'] = smo64389;
smo64389.setAttribute('id', 'smo64389');
smo64408v0ar.push(smo64389);
const smo64390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64390'] = smo64390;
smo64390.setAttribute('id', 'smo64390');
smo64408v0ar.push(smo64390);
const smo64391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo64391'] = smo64391;
smo64391.setAttribute('id', 'smo64391');
smo64391.addModifier(new VF.Dot(), 0);
smo64408v0ar.push(smo64391);
const smo64392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo64392'] = smo64392;
smo64392.setAttribute('id', 'smo64392');
smo64408v0ar.push(smo64392);
smo64408v0.addTickables(smo64408v0ar)
fmtsmo644083.joinVoices([smo64408v0]);
const smo64408v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64408v1ar = [];
const smo64393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo64393'] = smo64393;
smo64393.setAttribute('id', 'smo64393');
smo64393.setStyle({ fillStyle: "#115511" });
smo64408v1ar.push(smo64393);
const smo64394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo64394'] = smo64394;
smo64394.setAttribute('id', 'smo64394');
smo64394.setStyle({ fillStyle: "#115511" });
smo64408v1ar.push(smo64394);
smo64408v1.addTickables(smo64408v1ar)
fmtsmo644083.joinVoices([smo64408v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68290 = smo58963.getStemDirection();
smo58963.setStemDirection(dirsmo68290);
smo58964.setStemDirection(dirsmo68290);
const smo68290 = new VF.Beam([smo58963,smo58964]);
const dirsmo68291 = smo58965.getStemDirection();
smo58965.setStemDirection(dirsmo68291);
smo58966.setStemDirection(dirsmo68291);
smo58967.setStemDirection(dirsmo68291);
smo58968.setStemDirection(dirsmo68291);
const smo68291 = new VF.Beam([smo58965,smo58966,smo58967,smo58968]);
const dirsmo68292 = smo58970.getStemDirection();
smo58970.setStemDirection(dirsmo68292);
smo58971.setStemDirection(dirsmo68292);
const smo68292 = new VF.Beam([smo58970,smo58971]);
const dirsmo68293 = smo58972.getStemDirection();
smo58972.setStemDirection(dirsmo68293);
smo58973.setStemDirection(dirsmo68293);
smo58974.setStemDirection(dirsmo68293);
smo58975.setStemDirection(dirsmo68293);
const smo68293 = new VF.Beam([smo58972,smo58973,smo58974,smo58975]);
 
// formatting measures in staff group smo57677
fmtsmo589933.format([smo58993v0,smo58993v1,smo64408v0,smo64408v1], 527);
const stavesmo58993 = new VF.Stave(90, 692, 585);
stavesmo58993.setAttribute('id', 'stavesmo58993');
stavesmo58993.setBegBarType(1);
stavesmo58993.addClef('treble');
stavesmo58993.setContext(context);
stavesmo58993.draw();
smo58993v0.draw(context, stavesmo58993);
smo58993v1.draw(context, stavesmo58993);
smo68290.setContext(context);
smo68290.draw();
smo68291.setContext(context);
smo68291.draw();
smo68292.setContext(context);
smo68292.draw();
smo68293.setContext(context);
smo68293.draw();
const stavesmo64408 = new VF.Stave(90, 766, 585);
stavesmo64408.setAttribute('id', 'stavesmo64408');
stavesmo64408.setBegBarType(1);
stavesmo64408.addClef('treble');
stavesmo64408.setContext(context);
stavesmo64408.draw();
smo64408v0.draw(context, stavesmo64408);
smo64408v1.draw(context, stavesmo64408);
const leftsmo57677stavesmo589931 = new VF.StaveConnector(stavesmo58993, stavesmo64408).setType(3);
leftsmo57677stavesmo589931.setContext(context).draw();
const fmtsmo590254 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo59025v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59025v0ar = [];
const smo58994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo58994'] = smo58994;
smo58994.setAttribute('id', 'smo58994');
smo59025v0ar.push(smo58994);
const smo58995 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo58995'] = smo58995;
smo58995.setAttribute('id', 'smo58995');
smo59025v0ar.push(smo58995);
const smo58996 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo58996'] = smo58996;
smo58996.setAttribute('id', 'smo58996');
smo59025v0ar.push(smo58996);
const smo58997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo58997'] = smo58997;
smo58997.setAttribute('id', 'smo58997');
smo59025v0ar.push(smo58997);
const smo58998 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo58998'] = smo58998;
smo58998.setAttribute('id', 'smo58998');
smo59025v0ar.push(smo58998);
const smo58999 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo58999'] = smo58999;
smo58999.setAttribute('id', 'smo58999');
smo59025v0ar.push(smo58999);
const smo59000 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo59000'] = smo59000;
smo59000.setAttribute('id', 'smo59000');
smo59025v0ar.push(smo59000);
const smo59001 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59001'] = smo59001;
smo59001.setAttribute('id', 'smo59001');
smo59025v0ar.push(smo59001);
const smo59002 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo59002'] = smo59002;
smo59002.setAttribute('id', 'smo59002');
smo59025v0ar.push(smo59002);
const smo59003 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo59003'] = smo59003;
smo59003.setAttribute('id', 'smo59003');
smo59025v0ar.push(smo59003);
const smo59004 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo59004'] = smo59004;
smo59004.setAttribute('id', 'smo59004');
smo59025v0ar.push(smo59004);
const smo59005 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo59005'] = smo59005;
smo59005.setAttribute('id', 'smo59005');
smo59025v0ar.push(smo59005);
const smo59006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo59006'] = smo59006;
smo59006.setAttribute('id', 'smo59006');
smo59025v0ar.push(smo59006);
const smo59007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo59007'] = smo59007;
smo59007.setAttribute('id', 'smo59007');
smo59025v0ar.push(smo59007);
smo59025v0.addTickables(smo59025v0ar)
fmtsmo590254.joinVoices([smo59025v0]);
const smo59025v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59025v1ar = [];
const smo59008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59008'] = smo59008;
smo59008.setAttribute('id', 'smo59008');
smo59008.setStyle({ fillStyle: '#aaaaaa7f' });
smo59025v1ar.push(smo59008);
const smo59009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59009'] = smo59009;
smo59009.setAttribute('id', 'smo59009');
smo59009.setStyle({ fillStyle: '#aaaaaa7f' });
smo59009.addModifier(new VF.Dot(), 0);
smo59009.addModifier(new VF.Dot(), 0);
smo59025v1ar.push(smo59009);
const smo59010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59010'] = smo59010;
smo59010.setAttribute('id', 'smo59010');
smo59010.setStyle({ fillStyle: '#aaaaaa7f' });
smo59025v1ar.push(smo59010);
const smo59011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59011'] = smo59011;
smo59011.setAttribute('id', 'smo59011');
smo59011.setStyle({ fillStyle: '#aaaaaa7f' });
smo59011.addModifier(new VF.Dot(), 0);
smo59011.addModifier(new VF.Dot(), 0);
smo59025v1ar.push(smo59011);
smo59025v1.addTickables(smo59025v1ar)
fmtsmo590254.joinVoices([smo59025v1]);
const fmtsmo644304 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo64430v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64430v0ar = [];
const smo64409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64409'] = smo64409;
smo64409.setAttribute('id', 'smo64409');
smo64430v0ar.push(smo64409);
const smo64410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo64410'] = smo64410;
smo64410.setAttribute('id', 'smo64410');
smo64410.addModifier(new VF.Dot(), 0);
smo64430v0ar.push(smo64410);
const smo64411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo64411'] = smo64411;
smo64411.setAttribute('id', 'smo64411');
smo64430v0ar.push(smo64411);
const smo64412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64412'] = smo64412;
smo64412.setAttribute('id', 'smo64412');
smo64430v0ar.push(smo64412);
const smo64413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo64413'] = smo64413;
smo64413.setAttribute('id', 'smo64413');
smo64413.addModifier(new VF.Dot(), 0);
smo64430v0ar.push(smo64413);
const smo64414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo64414'] = smo64414;
smo64414.setAttribute('id', 'smo64414');
smo64430v0ar.push(smo64414);
smo64430v0.addTickables(smo64430v0ar)
fmtsmo644304.joinVoices([smo64430v0]);
const smo64430v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64430v1ar = [];
const smo64415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo64415'] = smo64415;
smo64415.setAttribute('id', 'smo64415');
smo64415.setStyle({ fillStyle: "#115511" });
smo64430v1ar.push(smo64415);
const smo64416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo64416'] = smo64416;
smo64416.setAttribute('id', 'smo64416');
smo64416.setStyle({ fillStyle: "#115511" });
smo64430v1ar.push(smo64416);
smo64430v1.addTickables(smo64430v1ar)
fmtsmo644304.joinVoices([smo64430v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68298 = smo58995.getStemDirection();
smo58995.setStemDirection(dirsmo68298);
smo58996.setStemDirection(dirsmo68298);
const smo68298 = new VF.Beam([smo58995,smo58996]);
const dirsmo68299 = smo58997.getStemDirection();
smo58997.setStemDirection(dirsmo68299);
smo58998.setStemDirection(dirsmo68299);
smo58999.setStemDirection(dirsmo68299);
smo59000.setStemDirection(dirsmo68299);
const smo68299 = new VF.Beam([smo58997,smo58998,smo58999,smo59000]);
const dirsmo68300 = smo59002.getStemDirection();
smo59002.setStemDirection(dirsmo68300);
smo59003.setStemDirection(dirsmo68300);
const smo68300 = new VF.Beam([smo59002,smo59003]);
const dirsmo68301 = smo59004.getStemDirection();
smo59004.setStemDirection(dirsmo68301);
smo59005.setStemDirection(dirsmo68301);
smo59006.setStemDirection(dirsmo68301);
smo59007.setStemDirection(dirsmo68301);
const smo68301 = new VF.Beam([smo59004,smo59005,smo59006,smo59007]);
 
// formatting measures in staff group smo57677
fmtsmo590254.format([smo59025v0,smo59025v1,smo64430v0,smo64430v1], 527);
const stavesmo59025 = new VF.Stave(675, 692, 541);
stavesmo59025.setAttribute('id', 'stavesmo59025');
stavesmo59025.setBegBarType(VF.Barline.type.NONE);
stavesmo59025.setContext(context);
stavesmo59025.draw();
smo59025v0.draw(context, stavesmo59025);
smo59025v1.draw(context, stavesmo59025);
smo68298.setContext(context);
smo68298.draw();
smo68299.setContext(context);
smo68299.draw();
smo68300.setContext(context);
smo68300.draw();
smo68301.setContext(context);
smo68301.draw();
const stavesmo64430 = new VF.Stave(675, 766, 541);
stavesmo64430.setAttribute('id', 'stavesmo64430');
stavesmo64430.setBegBarType(VF.Barline.type.NONE);
stavesmo64430.setContext(context);
stavesmo64430.draw();
smo64430v0.draw(context, stavesmo64430);
smo64430v1.draw(context, stavesmo64430);
const fmtsmo590575 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo59057v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59057v0ar = [];
const smo59026 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59026'] = smo59026;
smo59026.setAttribute('id', 'smo59026');
smo59057v0ar.push(smo59026);
const smo59027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo59027'] = smo59027;
smo59027.setAttribute('id', 'smo59027');
const smo590270acc = new VF.Accidental('#');
smo59027.addModifier(smo590270acc, 0);
smo59057v0ar.push(smo59027);
const smo59028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo59028'] = smo59028;
smo59028.setAttribute('id', 'smo59028');
smo59057v0ar.push(smo59028);
const smo59029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo59029'] = smo59029;
smo59029.setAttribute('id', 'smo59029');
smo59057v0ar.push(smo59029);
const smo59030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo59030'] = smo59030;
smo59030.setAttribute('id', 'smo59030');
smo59057v0ar.push(smo59030);
const smo59031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo59031'] = smo59031;
smo59031.setAttribute('id', 'smo59031');
smo59057v0ar.push(smo59031);
const smo59032 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo59032'] = smo59032;
smo59032.setAttribute('id', 'smo59032');
smo59057v0ar.push(smo59032);
const smo59033 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59033'] = smo59033;
smo59033.setAttribute('id', 'smo59033');
smo59057v0ar.push(smo59033);
const smo59034 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo59034'] = smo59034;
smo59034.setAttribute('id', 'smo59034');
smo59057v0ar.push(smo59034);
const smo59035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo59035'] = smo59035;
smo59035.setAttribute('id', 'smo59035');
smo59057v0ar.push(smo59035);
const smo59036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo59036'] = smo59036;
smo59036.setAttribute('id', 'smo59036');
smo59057v0ar.push(smo59036);
const smo59037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo59037'] = smo59037;
smo59037.setAttribute('id', 'smo59037');
smo59057v0ar.push(smo59037);
const smo59038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo59038'] = smo59038;
smo59038.setAttribute('id', 'smo59038');
smo59057v0ar.push(smo59038);
const smo59039 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo59039'] = smo59039;
smo59039.setAttribute('id', 'smo59039');
smo59057v0ar.push(smo59039);
smo59057v0.addTickables(smo59057v0ar)
fmtsmo590575.joinVoices([smo59057v0]);
const smo59057v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59057v1ar = [];
const smo59040 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59040'] = smo59040;
smo59040.setAttribute('id', 'smo59040');
smo59040.setStyle({ fillStyle: '#aaaaaa7f' });
smo59057v1ar.push(smo59040);
const smo59041 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59041'] = smo59041;
smo59041.setAttribute('id', 'smo59041');
smo59041.setStyle({ fillStyle: '#aaaaaa7f' });
smo59041.addModifier(new VF.Dot(), 0);
smo59041.addModifier(new VF.Dot(), 0);
smo59057v1ar.push(smo59041);
const smo59042 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59042'] = smo59042;
smo59042.setAttribute('id', 'smo59042');
smo59042.setStyle({ fillStyle: '#aaaaaa7f' });
smo59057v1ar.push(smo59042);
const smo59043 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59043'] = smo59043;
smo59043.setAttribute('id', 'smo59043');
smo59043.setStyle({ fillStyle: '#aaaaaa7f' });
smo59043.addModifier(new VF.Dot(), 0);
smo59043.addModifier(new VF.Dot(), 0);
smo59057v1ar.push(smo59043);
smo59057v1.addTickables(smo59057v1ar)
fmtsmo590575.joinVoices([smo59057v1]);
const fmtsmo644525 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo64452v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64452v0ar = [];
const smo64431 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64431'] = smo64431;
smo64431.setAttribute('id', 'smo64431');
smo64452v0ar.push(smo64431);
const smo64432 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo64432'] = smo64432;
smo64432.setAttribute('id', 'smo64432');
smo64432.addModifier(new VF.Dot(), 0);
smo64452v0ar.push(smo64432);
const smo64433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo64433'] = smo64433;
smo64433.setAttribute('id', 'smo64433');
smo64452v0ar.push(smo64433);
const smo64434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64434'] = smo64434;
smo64434.setAttribute('id', 'smo64434');
smo64452v0ar.push(smo64434);
const smo64435 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo64435'] = smo64435;
smo64435.setAttribute('id', 'smo64435');
smo64435.addModifier(new VF.Dot(), 0);
smo64452v0ar.push(smo64435);
const smo64436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo64436'] = smo64436;
smo64436.setAttribute('id', 'smo64436');
smo64452v0ar.push(smo64436);
smo64452v0.addTickables(smo64452v0ar)
fmtsmo644525.joinVoices([smo64452v0]);
const smo64452v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64452v1ar = [];
const smo64437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo64437'] = smo64437;
smo64437.setAttribute('id', 'smo64437');
smo64437.setStyle({ fillStyle: "#115511" });
smo64452v1ar.push(smo64437);
const smo64438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo64438'] = smo64438;
smo64438.setAttribute('id', 'smo64438');
smo64438.setStyle({ fillStyle: "#115511" });
smo64452v1ar.push(smo64438);
smo64452v1.addTickables(smo64452v1ar)
fmtsmo644525.joinVoices([smo64452v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68306 = smo59027.getStemDirection();
smo59027.setStemDirection(dirsmo68306);
smo59028.setStemDirection(dirsmo68306);
const smo68306 = new VF.Beam([smo59027,smo59028]);
const dirsmo68307 = smo59029.getStemDirection();
smo59029.setStemDirection(dirsmo68307);
smo59030.setStemDirection(dirsmo68307);
smo59031.setStemDirection(dirsmo68307);
smo59032.setStemDirection(dirsmo68307);
const smo68307 = new VF.Beam([smo59029,smo59030,smo59031,smo59032]);
const dirsmo68308 = smo59034.getStemDirection();
smo59034.setStemDirection(dirsmo68308);
smo59035.setStemDirection(dirsmo68308);
const smo68308 = new VF.Beam([smo59034,smo59035]);
const dirsmo68309 = smo59036.getStemDirection();
smo59036.setStemDirection(dirsmo68309);
smo59037.setStemDirection(dirsmo68309);
smo59038.setStemDirection(dirsmo68309);
smo59039.setStemDirection(dirsmo68309);
const smo68309 = new VF.Beam([smo59036,smo59037,smo59038,smo59039]);
 
// formatting measures in staff group smo57677
fmtsmo590575.format([smo59057v0,smo59057v1,smo64452v0,smo64452v1], 577);
const stavesmo59057 = new VF.Stave(1216, 692, 591);
stavesmo59057.setAttribute('id', 'stavesmo59057');
stavesmo59057.setBegBarType(VF.Barline.type.NONE);
stavesmo59057.setContext(context);
stavesmo59057.draw();
smo59057v0.draw(context, stavesmo59057);
smo59057v1.draw(context, stavesmo59057);
smo68306.setContext(context);
smo68306.draw();
smo68307.setContext(context);
smo68307.draw();
smo68308.setContext(context);
smo68308.draw();
smo68309.setContext(context);
smo68309.draw();
const stavesmo64452 = new VF.Stave(1216, 766, 591);
stavesmo64452.setAttribute('id', 'stavesmo64452');
stavesmo64452.setBegBarType(VF.Barline.type.NONE);
stavesmo64452.setContext(context);
stavesmo64452.draw();
smo64452v0.draw(context, stavesmo64452);
smo64452v1.draw(context, stavesmo64452);
const rightsmo57677stavesmo590571 = new VF.StaveConnector(stavesmo59057, stavesmo64452).setType(0);
rightsmo57677stavesmo590571.setContext(context).draw();
const fmtsmo590896 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo59089v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59089v0ar = [];
const smo59058 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59058'] = smo59058;
smo59058.setAttribute('id', 'smo59058');
smo59089v0ar.push(smo59058);
const smo59059 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo59059'] = smo59059;
smo59059.setAttribute('id', 'smo59059');
smo59089v0ar.push(smo59059);
const smo59060 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo59060'] = smo59060;
smo59060.setAttribute('id', 'smo59060');
smo59089v0ar.push(smo59060);
const smo59061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo59061'] = smo59061;
smo59061.setAttribute('id', 'smo59061');
smo59089v0ar.push(smo59061);
const smo59062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo59062'] = smo59062;
smo59062.setAttribute('id', 'smo59062');
smo59089v0ar.push(smo59062);
const smo59063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo59063'] = smo59063;
smo59063.setAttribute('id', 'smo59063');
smo59089v0ar.push(smo59063);
const smo59064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo59064'] = smo59064;
smo59064.setAttribute('id', 'smo59064');
smo59089v0ar.push(smo59064);
const smo59065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59065'] = smo59065;
smo59065.setAttribute('id', 'smo59065');
smo59089v0ar.push(smo59065);
const smo59066 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo59066'] = smo59066;
smo59066.setAttribute('id', 'smo59066');
smo59089v0ar.push(smo59066);
const smo59067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo59067'] = smo59067;
smo59067.setAttribute('id', 'smo59067');
smo59089v0ar.push(smo59067);
const smo59068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo59068'] = smo59068;
smo59068.setAttribute('id', 'smo59068');
smo59089v0ar.push(smo59068);
const smo59069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo59069'] = smo59069;
smo59069.setAttribute('id', 'smo59069');
smo59089v0ar.push(smo59069);
const smo59070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo59070'] = smo59070;
smo59070.setAttribute('id', 'smo59070');
smo59089v0ar.push(smo59070);
const smo59071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo59071'] = smo59071;
smo59071.setAttribute('id', 'smo59071');
smo59089v0ar.push(smo59071);
smo59089v0.addTickables(smo59089v0ar)
fmtsmo590896.joinVoices([smo59089v0]);
const smo59089v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59089v1ar = [];
const smo59072 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59072'] = smo59072;
smo59072.setAttribute('id', 'smo59072');
smo59072.setStyle({ fillStyle: '#aaaaaa7f' });
smo59089v1ar.push(smo59072);
const smo59073 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59073'] = smo59073;
smo59073.setAttribute('id', 'smo59073');
smo59073.setStyle({ fillStyle: '#aaaaaa7f' });
smo59073.addModifier(new VF.Dot(), 0);
smo59073.addModifier(new VF.Dot(), 0);
smo59089v1ar.push(smo59073);
const smo59074 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59074'] = smo59074;
smo59074.setAttribute('id', 'smo59074');
smo59074.setStyle({ fillStyle: '#aaaaaa7f' });
smo59089v1ar.push(smo59074);
const smo59075 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59075'] = smo59075;
smo59075.setAttribute('id', 'smo59075');
smo59075.setStyle({ fillStyle: '#aaaaaa7f' });
smo59075.addModifier(new VF.Dot(), 0);
smo59075.addModifier(new VF.Dot(), 0);
smo59089v1ar.push(smo59075);
smo59089v1.addTickables(smo59089v1ar)
fmtsmo590896.joinVoices([smo59089v1]);
const fmtsmo644746 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo64474v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64474v0ar = [];
const smo64453 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64453'] = smo64453;
smo64453.setAttribute('id', 'smo64453');
smo64474v0ar.push(smo64453);
const smo64454 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo64454'] = smo64454;
smo64454.setAttribute('id', 'smo64454');
smo64454.addModifier(new VF.Dot(), 0);
smo64474v0ar.push(smo64454);
const smo64455 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo64455'] = smo64455;
smo64455.setAttribute('id', 'smo64455');
smo64474v0ar.push(smo64455);
const smo64456 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64456'] = smo64456;
smo64456.setAttribute('id', 'smo64456');
smo64474v0ar.push(smo64456);
const smo64457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo64457'] = smo64457;
smo64457.setAttribute('id', 'smo64457');
smo64457.addModifier(new VF.Dot(), 0);
smo64474v0ar.push(smo64457);
const smo64458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo64458'] = smo64458;
smo64458.setAttribute('id', 'smo64458');
smo64474v0ar.push(smo64458);
smo64474v0.addTickables(smo64474v0ar)
fmtsmo644746.joinVoices([smo64474v0]);
const smo64474v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64474v1ar = [];
const smo64459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo64459'] = smo64459;
smo64459.setAttribute('id', 'smo64459');
smo64459.setStyle({ fillStyle: "#115511" });
smo64474v1ar.push(smo64459);
const smo64460 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo64460'] = smo64460;
smo64460.setAttribute('id', 'smo64460');
smo64460.setStyle({ fillStyle: "#115511" });
smo64474v1ar.push(smo64460);
smo64474v1.addTickables(smo64474v1ar)
fmtsmo644746.joinVoices([smo64474v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68322 = smo59059.getStemDirection();
smo59059.setStemDirection(dirsmo68322);
smo59060.setStemDirection(dirsmo68322);
const smo68322 = new VF.Beam([smo59059,smo59060]);
const dirsmo68323 = smo59061.getStemDirection();
smo59061.setStemDirection(dirsmo68323);
smo59062.setStemDirection(dirsmo68323);
smo59063.setStemDirection(dirsmo68323);
smo59064.setStemDirection(dirsmo68323);
const smo68323 = new VF.Beam([smo59061,smo59062,smo59063,smo59064]);
const dirsmo68324 = smo59066.getStemDirection();
smo59066.setStemDirection(dirsmo68324);
smo59067.setStemDirection(dirsmo68324);
const smo68324 = new VF.Beam([smo59066,smo59067]);
const dirsmo68325 = smo59068.getStemDirection();
smo59068.setStemDirection(dirsmo68325);
smo59069.setStemDirection(dirsmo68325);
smo59070.setStemDirection(dirsmo68325);
smo59071.setStemDirection(dirsmo68325);
const smo68325 = new VF.Beam([smo59068,smo59069,smo59070,smo59071]);
 
// formatting measures in staff group smo57677
fmtsmo590896.format([smo59089v0,smo59089v1,smo64474v0,smo64474v1], 544);
const stavesmo59089 = new VF.Stave(90, 955, 602);
stavesmo59089.setAttribute('id', 'stavesmo59089');
stavesmo59089.setBegBarType(1);
stavesmo59089.addClef('treble');
stavesmo59089.setContext(context);
stavesmo59089.draw();
smo59089v0.draw(context, stavesmo59089);
smo59089v1.draw(context, stavesmo59089);
smo68322.setContext(context);
smo68322.draw();
smo68323.setContext(context);
smo68323.draw();
smo68324.setContext(context);
smo68324.draw();
smo68325.setContext(context);
smo68325.draw();
const stavesmo64474 = new VF.Stave(90, 1032, 602);
stavesmo64474.setAttribute('id', 'stavesmo64474');
stavesmo64474.setBegBarType(1);
stavesmo64474.addClef('treble');
stavesmo64474.setContext(context);
stavesmo64474.draw();
smo64474v0.draw(context, stavesmo64474);
smo64474v1.draw(context, stavesmo64474);
const leftsmo57677stavesmo590891 = new VF.StaveConnector(stavesmo59089, stavesmo64474).setType(3);
leftsmo57677stavesmo590891.setContext(context).draw();
const fmtsmo591217 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo59121v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59121v0ar = [];
const smo59090 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59090'] = smo59090;
smo59090.setAttribute('id', 'smo59090');
smo59121v0ar.push(smo59090);
const smo59091 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo59091'] = smo59091;
smo59091.setAttribute('id', 'smo59091');
smo59121v0ar.push(smo59091);
const smo59092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo59092'] = smo59092;
smo59092.setAttribute('id', 'smo59092');
smo59121v0ar.push(smo59092);
const smo59093 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo59093'] = smo59093;
smo59093.setAttribute('id', 'smo59093');
smo59121v0ar.push(smo59093);
const smo59094 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo59094'] = smo59094;
smo59094.setAttribute('id', 'smo59094');
smo59121v0ar.push(smo59094);
const smo59095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo59095'] = smo59095;
smo59095.setAttribute('id', 'smo59095');
smo59121v0ar.push(smo59095);
const smo59096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo59096'] = smo59096;
smo59096.setAttribute('id', 'smo59096');
smo59121v0ar.push(smo59096);
const smo59097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59097'] = smo59097;
smo59097.setAttribute('id', 'smo59097');
smo59121v0ar.push(smo59097);
const smo59098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo59098'] = smo59098;
smo59098.setAttribute('id', 'smo59098');
smo59121v0ar.push(smo59098);
const smo59099 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo59099'] = smo59099;
smo59099.setAttribute('id', 'smo59099');
smo59121v0ar.push(smo59099);
const smo59100 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo59100'] = smo59100;
smo59100.setAttribute('id', 'smo59100');
smo59121v0ar.push(smo59100);
const smo59101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo59101'] = smo59101;
smo59101.setAttribute('id', 'smo59101');
smo59121v0ar.push(smo59101);
const smo59102 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo59102'] = smo59102;
smo59102.setAttribute('id', 'smo59102');
smo59121v0ar.push(smo59102);
const smo59103 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo59103'] = smo59103;
smo59103.setAttribute('id', 'smo59103');
smo59121v0ar.push(smo59103);
smo59121v0.addTickables(smo59121v0ar)
fmtsmo591217.joinVoices([smo59121v0]);
const smo59121v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59121v1ar = [];
const smo59104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59104'] = smo59104;
smo59104.setAttribute('id', 'smo59104');
smo59104.setStyle({ fillStyle: '#aaaaaa7f' });
smo59121v1ar.push(smo59104);
const smo59105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59105'] = smo59105;
smo59105.setAttribute('id', 'smo59105');
smo59105.setStyle({ fillStyle: '#aaaaaa7f' });
smo59105.addModifier(new VF.Dot(), 0);
smo59105.addModifier(new VF.Dot(), 0);
smo59121v1ar.push(smo59105);
const smo59106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59106'] = smo59106;
smo59106.setAttribute('id', 'smo59106');
smo59106.setStyle({ fillStyle: '#aaaaaa7f' });
smo59121v1ar.push(smo59106);
const smo59107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59107'] = smo59107;
smo59107.setAttribute('id', 'smo59107');
smo59107.setStyle({ fillStyle: '#aaaaaa7f' });
smo59107.addModifier(new VF.Dot(), 0);
smo59107.addModifier(new VF.Dot(), 0);
smo59121v1ar.push(smo59107);
smo59121v1.addTickables(smo59121v1ar)
fmtsmo591217.joinVoices([smo59121v1]);
const fmtsmo644967 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo64496v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64496v0ar = [];
const smo64475 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64475'] = smo64475;
smo64475.setAttribute('id', 'smo64475');
smo64496v0ar.push(smo64475);
const smo64476 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo64476'] = smo64476;
smo64476.setAttribute('id', 'smo64476');
smo64476.addModifier(new VF.Dot(), 0);
smo64496v0ar.push(smo64476);
const smo64477 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo64477'] = smo64477;
smo64477.setAttribute('id', 'smo64477');
smo64496v0ar.push(smo64477);
const smo64478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64478'] = smo64478;
smo64478.setAttribute('id', 'smo64478');
smo64496v0ar.push(smo64478);
const smo64479 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo64479'] = smo64479;
smo64479.setAttribute('id', 'smo64479');
smo64479.addModifier(new VF.Dot(), 0);
smo64496v0ar.push(smo64479);
const smo64480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo64480'] = smo64480;
smo64480.setAttribute('id', 'smo64480');
smo64496v0ar.push(smo64480);
smo64496v0.addTickables(smo64496v0ar)
fmtsmo644967.joinVoices([smo64496v0]);
const smo64496v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64496v1ar = [];
const smo64481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo64481'] = smo64481;
smo64481.setAttribute('id', 'smo64481');
smo64481.setStyle({ fillStyle: "#115511" });
smo64496v1ar.push(smo64481);
const smo64482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo64482'] = smo64482;
smo64482.setAttribute('id', 'smo64482');
smo64482.setStyle({ fillStyle: "#115511" });
smo64496v1ar.push(smo64482);
smo64496v1.addTickables(smo64496v1ar)
fmtsmo644967.joinVoices([smo64496v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68330 = smo59091.getStemDirection();
smo59091.setStemDirection(dirsmo68330);
smo59092.setStemDirection(dirsmo68330);
const smo68330 = new VF.Beam([smo59091,smo59092]);
const dirsmo68331 = smo59093.getStemDirection();
smo59093.setStemDirection(dirsmo68331);
smo59094.setStemDirection(dirsmo68331);
smo59095.setStemDirection(dirsmo68331);
smo59096.setStemDirection(dirsmo68331);
const smo68331 = new VF.Beam([smo59093,smo59094,smo59095,smo59096]);
const dirsmo68332 = smo59098.getStemDirection();
smo59098.setStemDirection(dirsmo68332);
smo59099.setStemDirection(dirsmo68332);
const smo68332 = new VF.Beam([smo59098,smo59099]);
const dirsmo68333 = smo59100.getStemDirection();
smo59100.setStemDirection(dirsmo68333);
smo59101.setStemDirection(dirsmo68333);
smo59102.setStemDirection(dirsmo68333);
smo59103.setStemDirection(dirsmo68333);
const smo68333 = new VF.Beam([smo59100,smo59101,smo59102,smo59103]);
 
// formatting measures in staff group smo57677
fmtsmo591217.format([smo59121v0,smo59121v1,smo64496v0,smo64496v1], 544);
const stavesmo59121 = new VF.Stave(692, 955, 558);
stavesmo59121.setAttribute('id', 'stavesmo59121');
stavesmo59121.setBegBarType(VF.Barline.type.NONE);
stavesmo59121.setContext(context);
stavesmo59121.draw();
smo59121v0.draw(context, stavesmo59121);
smo59121v1.draw(context, stavesmo59121);
smo68330.setContext(context);
smo68330.draw();
smo68331.setContext(context);
smo68331.draw();
smo68332.setContext(context);
smo68332.draw();
smo68333.setContext(context);
smo68333.draw();
const stavesmo64496 = new VF.Stave(692, 1032, 558);
stavesmo64496.setAttribute('id', 'stavesmo64496');
stavesmo64496.setBegBarType(VF.Barline.type.NONE);
stavesmo64496.setContext(context);
stavesmo64496.draw();
smo64496v0.draw(context, stavesmo64496);
smo64496v1.draw(context, stavesmo64496);
const fmtsmo591538 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo59153v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59153v0ar = [];
const smo59122 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59122'] = smo59122;
smo59122.setAttribute('id', 'smo59122');
smo59153v0ar.push(smo59122);
const smo59123 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo59123'] = smo59123;
smo59123.setAttribute('id', 'smo59123');
smo59153v0ar.push(smo59123);
const smo59124 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo59124'] = smo59124;
smo59124.setAttribute('id', 'smo59124');
smo59153v0ar.push(smo59124);
const smo59125 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo59125'] = smo59125;
smo59125.setAttribute('id', 'smo59125');
smo59153v0ar.push(smo59125);
const smo59126 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo59126'] = smo59126;
smo59126.setAttribute('id', 'smo59126');
smo59153v0ar.push(smo59126);
const smo59127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo59127'] = smo59127;
smo59127.setAttribute('id', 'smo59127');
smo59153v0ar.push(smo59127);
const smo59128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo59128'] = smo59128;
smo59128.setAttribute('id', 'smo59128');
smo59153v0ar.push(smo59128);
const smo59129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59129'] = smo59129;
smo59129.setAttribute('id', 'smo59129');
smo59153v0ar.push(smo59129);
const smo59130 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo59130'] = smo59130;
smo59130.setAttribute('id', 'smo59130');
smo59153v0ar.push(smo59130);
const smo59131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo59131'] = smo59131;
smo59131.setAttribute('id', 'smo59131');
smo59153v0ar.push(smo59131);
const smo59132 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo59132'] = smo59132;
smo59132.setAttribute('id', 'smo59132');
smo59153v0ar.push(smo59132);
const smo59133 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo59133'] = smo59133;
smo59133.setAttribute('id', 'smo59133');
smo59153v0ar.push(smo59133);
const smo59134 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo59134'] = smo59134;
smo59134.setAttribute('id', 'smo59134');
smo59153v0ar.push(smo59134);
const smo59135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo59135'] = smo59135;
smo59135.setAttribute('id', 'smo59135');
smo59153v0ar.push(smo59135);
smo59153v0.addTickables(smo59153v0ar)
fmtsmo591538.joinVoices([smo59153v0]);
const smo59153v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59153v1ar = [];
const smo59136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59136'] = smo59136;
smo59136.setAttribute('id', 'smo59136');
smo59136.setStyle({ fillStyle: '#aaaaaa7f' });
smo59153v1ar.push(smo59136);
const smo59137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59137'] = smo59137;
smo59137.setAttribute('id', 'smo59137');
smo59137.setStyle({ fillStyle: '#aaaaaa7f' });
smo59137.addModifier(new VF.Dot(), 0);
smo59137.addModifier(new VF.Dot(), 0);
smo59153v1ar.push(smo59137);
const smo59138 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59138'] = smo59138;
smo59138.setAttribute('id', 'smo59138');
smo59138.setStyle({ fillStyle: '#aaaaaa7f' });
smo59153v1ar.push(smo59138);
const smo59139 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59139'] = smo59139;
smo59139.setAttribute('id', 'smo59139');
smo59139.setStyle({ fillStyle: '#aaaaaa7f' });
smo59139.addModifier(new VF.Dot(), 0);
smo59139.addModifier(new VF.Dot(), 0);
smo59153v1ar.push(smo59139);
smo59153v1.addTickables(smo59153v1ar)
fmtsmo591538.joinVoices([smo59153v1]);
const fmtsmo645188 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo64518v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64518v0ar = [];
const smo64497 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64497'] = smo64497;
smo64497.setAttribute('id', 'smo64497');
smo64518v0ar.push(smo64497);
const smo64498 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo64498'] = smo64498;
smo64498.setAttribute('id', 'smo64498');
smo64498.addModifier(new VF.Dot(), 0);
smo64518v0ar.push(smo64498);
const smo64499 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo64499'] = smo64499;
smo64499.setAttribute('id', 'smo64499');
smo64518v0ar.push(smo64499);
const smo64500 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64500'] = smo64500;
smo64500.setAttribute('id', 'smo64500');
smo64518v0ar.push(smo64500);
const smo64501 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo64501'] = smo64501;
smo64501.setAttribute('id', 'smo64501');
smo64501.addModifier(new VF.Dot(), 0);
smo64518v0ar.push(smo64501);
const smo64502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo64502'] = smo64502;
smo64502.setAttribute('id', 'smo64502');
smo64518v0ar.push(smo64502);
smo64518v0.addTickables(smo64518v0ar)
fmtsmo645188.joinVoices([smo64518v0]);
const smo64518v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64518v1ar = [];
const smo64503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo64503'] = smo64503;
smo64503.setAttribute('id', 'smo64503');
smo64503.setStyle({ fillStyle: "#115511" });
smo64518v1ar.push(smo64503);
const smo64504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo64504'] = smo64504;
smo64504.setAttribute('id', 'smo64504');
smo64504.setStyle({ fillStyle: "#115511" });
smo64518v1ar.push(smo64504);
smo64518v1.addTickables(smo64518v1ar)
fmtsmo645188.joinVoices([smo64518v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68338 = smo59123.getStemDirection();
smo59123.setStemDirection(dirsmo68338);
smo59124.setStemDirection(dirsmo68338);
const smo68338 = new VF.Beam([smo59123,smo59124]);
const dirsmo68339 = smo59125.getStemDirection();
smo59125.setStemDirection(dirsmo68339);
smo59126.setStemDirection(dirsmo68339);
smo59127.setStemDirection(dirsmo68339);
smo59128.setStemDirection(dirsmo68339);
const smo68339 = new VF.Beam([smo59125,smo59126,smo59127,smo59128]);
const dirsmo68340 = smo59130.getStemDirection();
smo59130.setStemDirection(dirsmo68340);
smo59131.setStemDirection(dirsmo68340);
const smo68340 = new VF.Beam([smo59130,smo59131]);
const dirsmo68341 = smo59132.getStemDirection();
smo59132.setStemDirection(dirsmo68341);
smo59133.setStemDirection(dirsmo68341);
smo59134.setStemDirection(dirsmo68341);
smo59135.setStemDirection(dirsmo68341);
const smo68341 = new VF.Beam([smo59132,smo59133,smo59134,smo59135]);
 
// formatting measures in staff group smo57677
fmtsmo591538.format([smo59153v0,smo59153v1,smo64518v0,smo64518v1], 544);
const stavesmo59153 = new VF.Stave(1250, 955, 558);
stavesmo59153.setAttribute('id', 'stavesmo59153');
stavesmo59153.setBegBarType(VF.Barline.type.NONE);
stavesmo59153.setContext(context);
stavesmo59153.draw();
smo59153v0.draw(context, stavesmo59153);
smo59153v1.draw(context, stavesmo59153);
smo68338.setContext(context);
smo68338.draw();
smo68339.setContext(context);
smo68339.draw();
smo68340.setContext(context);
smo68340.draw();
smo68341.setContext(context);
smo68341.draw();
const stavesmo64518 = new VF.Stave(1250, 1032, 558);
stavesmo64518.setAttribute('id', 'stavesmo64518');
stavesmo64518.setBegBarType(VF.Barline.type.NONE);
stavesmo64518.setContext(context);
stavesmo64518.draw();
smo64518v0.draw(context, stavesmo64518);
smo64518v1.draw(context, stavesmo64518);
const rightsmo57677stavesmo591531 = new VF.StaveConnector(stavesmo59153, stavesmo64518).setType(0);
rightsmo57677stavesmo591531.setContext(context).draw();
const fmtsmo591859 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo59185v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59185v0ar = [];
const smo59154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59154'] = smo59154;
smo59154.setAttribute('id', 'smo59154');
smo59185v0ar.push(smo59154);
const smo59155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo59155'] = smo59155;
smo59155.setAttribute('id', 'smo59155');
smo59185v0ar.push(smo59155);
const smo59156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo59156'] = smo59156;
smo59156.setAttribute('id', 'smo59156');
const smo591560acc = new VF.Accidental('#');
smo59156.addModifier(smo591560acc, 0);
smo59185v0ar.push(smo59156);
const smo59157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo59157'] = smo59157;
smo59157.setAttribute('id', 'smo59157');
smo59185v0ar.push(smo59157);
const smo59158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo59158'] = smo59158;
smo59158.setAttribute('id', 'smo59158');
smo59185v0ar.push(smo59158);
const smo59159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo59159'] = smo59159;
smo59159.setAttribute('id', 'smo59159');
smo59185v0ar.push(smo59159);
const smo59160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo59160'] = smo59160;
smo59160.setAttribute('id', 'smo59160');
smo59185v0ar.push(smo59160);
const smo59161 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59161'] = smo59161;
smo59161.setAttribute('id', 'smo59161');
smo59185v0ar.push(smo59161);
const smo59162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo59162'] = smo59162;
smo59162.setAttribute('id', 'smo59162');
smo59185v0ar.push(smo59162);
const smo59163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo59163'] = smo59163;
smo59163.setAttribute('id', 'smo59163');
smo59185v0ar.push(smo59163);
const smo59164 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo59164'] = smo59164;
smo59164.setAttribute('id', 'smo59164');
smo59185v0ar.push(smo59164);
const smo59165 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo59165'] = smo59165;
smo59165.setAttribute('id', 'smo59165');
smo59185v0ar.push(smo59165);
const smo59166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo59166'] = smo59166;
smo59166.setAttribute('id', 'smo59166');
smo59185v0ar.push(smo59166);
const smo59167 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo59167'] = smo59167;
smo59167.setAttribute('id', 'smo59167');
smo59185v0ar.push(smo59167);
smo59185v0.addTickables(smo59185v0ar)
fmtsmo591859.joinVoices([smo59185v0]);
const smo59185v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59185v1ar = [];
const smo59168 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59168'] = smo59168;
smo59168.setAttribute('id', 'smo59168');
smo59168.setStyle({ fillStyle: '#aaaaaa7f' });
smo59185v1ar.push(smo59168);
const smo59169 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59169'] = smo59169;
smo59169.setAttribute('id', 'smo59169');
smo59169.setStyle({ fillStyle: '#aaaaaa7f' });
smo59169.addModifier(new VF.Dot(), 0);
smo59169.addModifier(new VF.Dot(), 0);
smo59185v1ar.push(smo59169);
const smo59170 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59170'] = smo59170;
smo59170.setAttribute('id', 'smo59170');
smo59170.setStyle({ fillStyle: '#aaaaaa7f' });
smo59185v1ar.push(smo59170);
const smo59171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59171'] = smo59171;
smo59171.setAttribute('id', 'smo59171');
smo59171.setStyle({ fillStyle: '#aaaaaa7f' });
smo59171.addModifier(new VF.Dot(), 0);
smo59171.addModifier(new VF.Dot(), 0);
smo59185v1ar.push(smo59171);
smo59185v1.addTickables(smo59185v1ar)
fmtsmo591859.joinVoices([smo59185v1]);
const fmtsmo645409 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo64540v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64540v0ar = [];
const smo64519 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["en/6/r"]}'))
noteHash['smo64519'] = smo64519;
smo64519.setAttribute('id', 'smo64519');
smo64540v0ar.push(smo64519);
const smo64520 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo64520'] = smo64520;
smo64520.setAttribute('id', 'smo64520');
smo64520.addModifier(new VF.Dot(), 0);
smo64540v0ar.push(smo64520);
const smo64521 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo64521'] = smo64521;
smo64521.setAttribute('id', 'smo64521');
smo64540v0ar.push(smo64521);
const smo64522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
noteHash['smo64522'] = smo64522;
smo64522.setAttribute('id', 'smo64522');
smo64540v0ar.push(smo64522);
const smo64523 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo64523'] = smo64523;
smo64523.setAttribute('id', 'smo64523');
smo64523.addModifier(new VF.Dot(), 0);
smo64540v0ar.push(smo64523);
const smo64524 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo64524'] = smo64524;
smo64524.setAttribute('id', 'smo64524');
smo64540v0ar.push(smo64524);
smo64540v0.addTickables(smo64540v0ar)
fmtsmo645409.joinVoices([smo64540v0]);
const smo64540v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64540v1ar = [];
const smo64525 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo64525'] = smo64525;
smo64525.setAttribute('id', 'smo64525');
smo64525.setStyle({ fillStyle: "#115511" });
smo64540v1ar.push(smo64525);
const smo64526 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo64526'] = smo64526;
smo64526.setAttribute('id', 'smo64526');
smo64526.setStyle({ fillStyle: "#115511" });
smo64540v1ar.push(smo64526);
smo64540v1.addTickables(smo64540v1ar)
fmtsmo645409.joinVoices([smo64540v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68354 = smo59155.getStemDirection();
smo59155.setStemDirection(dirsmo68354);
smo59156.setStemDirection(dirsmo68354);
const smo68354 = new VF.Beam([smo59155,smo59156]);
const dirsmo68355 = smo59157.getStemDirection();
smo59157.setStemDirection(dirsmo68355);
smo59158.setStemDirection(dirsmo68355);
smo59159.setStemDirection(dirsmo68355);
smo59160.setStemDirection(dirsmo68355);
const smo68355 = new VF.Beam([smo59157,smo59158,smo59159,smo59160]);
const dirsmo68356 = smo59162.getStemDirection();
smo59162.setStemDirection(dirsmo68356);
smo59163.setStemDirection(dirsmo68356);
const smo68356 = new VF.Beam([smo59162,smo59163]);
const dirsmo68357 = smo59164.getStemDirection();
smo59164.setStemDirection(dirsmo68357);
smo59165.setStemDirection(dirsmo68357);
smo59166.setStemDirection(dirsmo68357);
smo59167.setStemDirection(dirsmo68357);
const smo68357 = new VF.Beam([smo59164,smo59165,smo59166,smo59167]);
 
// formatting measures in staff group smo57677
fmtsmo591859.format([smo59185v0,smo59185v1,smo64540v0,smo64540v1], 561);
const stavesmo59185 = new VF.Stave(90, 1191, 619);
stavesmo59185.setAttribute('id', 'stavesmo59185');
stavesmo59185.setBegBarType(1);
stavesmo59185.addClef('treble');
stavesmo59185.setContext(context);
stavesmo59185.draw();
smo59185v0.draw(context, stavesmo59185);
smo59185v1.draw(context, stavesmo59185);
smo68354.setContext(context);
smo68354.draw();
smo68355.setContext(context);
smo68355.draw();
smo68356.setContext(context);
smo68356.draw();
smo68357.setContext(context);
smo68357.draw();
const stavesmo64540 = new VF.Stave(90, 1370, 619);
stavesmo64540.setAttribute('id', 'stavesmo64540');
stavesmo64540.setBegBarType(1);
stavesmo64540.addClef('bass');
stavesmo64540.setContext(context);
stavesmo64540.draw();
smo64540v0.draw(context, stavesmo64540);
smo64540v1.draw(context, stavesmo64540);
const leftsmo57677stavesmo591851 = new VF.StaveConnector(stavesmo59185, stavesmo64540).setType(3);
leftsmo57677stavesmo591851.setContext(context).draw();
const fmtsmo5921710 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo59217v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59217v0ar = [];
const smo59186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59186'] = smo59186;
smo59186.setAttribute('id', 'smo59186');
smo59217v0ar.push(smo59186);
const smo59187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo59187'] = smo59187;
smo59187.setAttribute('id', 'smo59187');
smo59217v0ar.push(smo59187);
const smo59188 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo59188'] = smo59188;
smo59188.setAttribute('id', 'smo59188');
smo59217v0ar.push(smo59188);
const smo59189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo59189'] = smo59189;
smo59189.setAttribute('id', 'smo59189');
smo59217v0ar.push(smo59189);
const smo59190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo59190'] = smo59190;
smo59190.setAttribute('id', 'smo59190');
smo59217v0ar.push(smo59190);
const smo59191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo59191'] = smo59191;
smo59191.setAttribute('id', 'smo59191');
smo59217v0ar.push(smo59191);
const smo59192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo59192'] = smo59192;
smo59192.setAttribute('id', 'smo59192');
smo59217v0ar.push(smo59192);
const smo59193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59193'] = smo59193;
smo59193.setAttribute('id', 'smo59193');
smo59217v0ar.push(smo59193);
const smo59194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo59194'] = smo59194;
smo59194.setAttribute('id', 'smo59194');
smo59217v0ar.push(smo59194);
const smo59195 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo59195'] = smo59195;
smo59195.setAttribute('id', 'smo59195');
smo59217v0ar.push(smo59195);
const smo59196 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo59196'] = smo59196;
smo59196.setAttribute('id', 'smo59196');
smo59217v0ar.push(smo59196);
const smo59197 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo59197'] = smo59197;
smo59197.setAttribute('id', 'smo59197');
smo59217v0ar.push(smo59197);
const smo59198 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo59198'] = smo59198;
smo59198.setAttribute('id', 'smo59198');
smo59217v0ar.push(smo59198);
const smo59199 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo59199'] = smo59199;
smo59199.setAttribute('id', 'smo59199');
smo59217v0ar.push(smo59199);
smo59217v0.addTickables(smo59217v0ar)
fmtsmo5921710.joinVoices([smo59217v0]);
const smo59217v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59217v1ar = [];
const smo59200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59200'] = smo59200;
smo59200.setAttribute('id', 'smo59200');
smo59200.setStyle({ fillStyle: '#aaaaaa7f' });
smo59217v1ar.push(smo59200);
const smo59201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/3/r"]}'))
noteHash['smo59201'] = smo59201;
smo59201.setAttribute('id', 'smo59201');
smo59201.setStyle({ fillStyle: '#aaaaaa7f' });
smo59201.addModifier(new VF.Dot(), 0);
smo59201.addModifier(new VF.Dot(), 0);
smo59217v1ar.push(smo59201);
const smo59202 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59202'] = smo59202;
smo59202.setAttribute('id', 'smo59202');
smo59202.setStyle({ fillStyle: '#aaaaaa7f' });
smo59217v1ar.push(smo59202);
const smo59203 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59203'] = smo59203;
smo59203.setAttribute('id', 'smo59203');
smo59203.setStyle({ fillStyle: '#aaaaaa7f' });
smo59203.addModifier(new VF.Dot(), 0);
smo59203.addModifier(new VF.Dot(), 0);
smo59217v1ar.push(smo59203);
smo59217v1.addTickables(smo59217v1ar)
fmtsmo5921710.joinVoices([smo59217v1]);
const fmtsmo6456210 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo64562v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64562v0ar = [];
const smo64541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
noteHash['smo64541'] = smo64541;
smo64541.setAttribute('id', 'smo64541');
smo64562v0ar.push(smo64541);
const smo64542 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo64542'] = smo64542;
smo64542.setAttribute('id', 'smo64542');
smo64542.addModifier(new VF.Dot(), 0);
smo64562v0ar.push(smo64542);
const smo64543 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo64543'] = smo64543;
smo64543.setAttribute('id', 'smo64543');
smo64562v0ar.push(smo64543);
const smo64544 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
noteHash['smo64544'] = smo64544;
smo64544.setAttribute('id', 'smo64544');
smo64562v0ar.push(smo64544);
const smo64545 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo64545'] = smo64545;
smo64545.setAttribute('id', 'smo64545');
smo64545.addModifier(new VF.Dot(), 0);
smo64562v0ar.push(smo64545);
const smo64546 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo64546'] = smo64546;
smo64546.setAttribute('id', 'smo64546');
smo64562v0ar.push(smo64546);
smo64562v0.addTickables(smo64562v0ar)
fmtsmo6456210.joinVoices([smo64562v0]);
const smo64562v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64562v1ar = [];
const smo64547 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo64547'] = smo64547;
smo64547.setAttribute('id', 'smo64547');
smo64547.setStyle({ fillStyle: "#115511" });
smo64562v1ar.push(smo64547);
const smo64548 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo64548'] = smo64548;
smo64548.setAttribute('id', 'smo64548');
smo64548.setStyle({ fillStyle: "#115511" });
smo64562v1ar.push(smo64548);
smo64562v1.addTickables(smo64562v1ar)
fmtsmo6456210.joinVoices([smo64562v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68362 = smo59187.getStemDirection();
smo59187.setStemDirection(dirsmo68362);
smo59188.setStemDirection(dirsmo68362);
const smo68362 = new VF.Beam([smo59187,smo59188]);
const dirsmo68363 = smo59189.getStemDirection();
smo59189.setStemDirection(dirsmo68363);
smo59190.setStemDirection(dirsmo68363);
smo59191.setStemDirection(dirsmo68363);
smo59192.setStemDirection(dirsmo68363);
const smo68363 = new VF.Beam([smo59189,smo59190,smo59191,smo59192]);
const dirsmo68364 = smo59194.getStemDirection();
smo59194.setStemDirection(dirsmo68364);
smo59195.setStemDirection(dirsmo68364);
const smo68364 = new VF.Beam([smo59194,smo59195]);
const dirsmo68365 = smo59196.getStemDirection();
smo59196.setStemDirection(dirsmo68365);
smo59197.setStemDirection(dirsmo68365);
smo59198.setStemDirection(dirsmo68365);
smo59199.setStemDirection(dirsmo68365);
const smo68365 = new VF.Beam([smo59196,smo59197,smo59198,smo59199]);
 
// formatting measures in staff group smo57677
fmtsmo5921710.format([smo59217v0,smo59217v1,smo64562v0,smo64562v1], 510);
const stavesmo59217 = new VF.Stave(709, 1191, 524);
stavesmo59217.setAttribute('id', 'stavesmo59217');
stavesmo59217.setBegBarType(VF.Barline.type.NONE);
stavesmo59217.setContext(context);
stavesmo59217.draw();
smo59217v0.draw(context, stavesmo59217);
smo59217v1.draw(context, stavesmo59217);
smo68362.setContext(context);
smo68362.draw();
smo68363.setContext(context);
smo68363.draw();
smo68364.setContext(context);
smo68364.draw();
smo68365.setContext(context);
smo68365.draw();
const stavesmo64562 = new VF.Stave(709, 1370, 524);
stavesmo64562.setAttribute('id', 'stavesmo64562');
stavesmo64562.setBegBarType(VF.Barline.type.NONE);
stavesmo64562.setContext(context);
stavesmo64562.draw();
smo64562v0.draw(context, stavesmo64562);
smo64562v1.draw(context, stavesmo64562);
const fmtsmo5924911 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo59249v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59249v0ar = [];
const smo59218 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59218'] = smo59218;
smo59218.setAttribute('id', 'smo59218');
smo59249v0ar.push(smo59218);
const smo59219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo59219'] = smo59219;
smo59219.setAttribute('id', 'smo59219');
smo59249v0ar.push(smo59219);
const smo59220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo59220'] = smo59220;
smo59220.setAttribute('id', 'smo59220');
smo59249v0ar.push(smo59220);
const smo59221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo59221'] = smo59221;
smo59221.setAttribute('id', 'smo59221');
const smo592210acc = new VF.Accidental('#');
smo59221.addModifier(smo592210acc, 0);
smo59249v0ar.push(smo59221);
const smo59222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo59222'] = smo59222;
smo59222.setAttribute('id', 'smo59222');
smo59249v0ar.push(smo59222);
const smo59223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo59223'] = smo59223;
smo59223.setAttribute('id', 'smo59223');
smo59249v0ar.push(smo59223);
const smo59224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo59224'] = smo59224;
smo59224.setAttribute('id', 'smo59224');
smo59249v0ar.push(smo59224);
const smo59225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59225'] = smo59225;
smo59225.setAttribute('id', 'smo59225');
smo59249v0ar.push(smo59225);
const smo59226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo59226'] = smo59226;
smo59226.setAttribute('id', 'smo59226');
smo59249v0ar.push(smo59226);
const smo59227 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo59227'] = smo59227;
smo59227.setAttribute('id', 'smo59227');
smo59249v0ar.push(smo59227);
const smo59228 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo59228'] = smo59228;
smo59228.setAttribute('id', 'smo59228');
smo59249v0ar.push(smo59228);
const smo59229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo59229'] = smo59229;
smo59229.setAttribute('id', 'smo59229');
smo59249v0ar.push(smo59229);
const smo59230 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo59230'] = smo59230;
smo59230.setAttribute('id', 'smo59230');
smo59249v0ar.push(smo59230);
const smo59231 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo59231'] = smo59231;
smo59231.setAttribute('id', 'smo59231');
smo59249v0ar.push(smo59231);
smo59249v0.addTickables(smo59249v0ar)
fmtsmo5924911.joinVoices([smo59249v0]);
const smo59249v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59249v1ar = [];
const smo59232 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59232'] = smo59232;
smo59232.setAttribute('id', 'smo59232');
smo59232.setStyle({ fillStyle: '#aaaaaa7f' });
smo59249v1ar.push(smo59232);
const smo59233 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59233'] = smo59233;
smo59233.setAttribute('id', 'smo59233');
smo59233.setStyle({ fillStyle: '#aaaaaa7f' });
smo59233.addModifier(new VF.Dot(), 0);
smo59233.addModifier(new VF.Dot(), 0);
smo59249v1ar.push(smo59233);
const smo59234 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59234'] = smo59234;
smo59234.setAttribute('id', 'smo59234');
smo59234.setStyle({ fillStyle: '#aaaaaa7f' });
smo59249v1ar.push(smo59234);
const smo59235 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59235'] = smo59235;
smo59235.setAttribute('id', 'smo59235');
smo59235.setStyle({ fillStyle: '#aaaaaa7f' });
smo59235.addModifier(new VF.Dot(), 0);
smo59235.addModifier(new VF.Dot(), 0);
smo59249v1ar.push(smo59235);
smo59249v1.addTickables(smo59249v1ar)
fmtsmo5924911.joinVoices([smo59249v1]);
const fmtsmo6458411 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo64584v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64584v0ar = [];
const smo64563 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
noteHash['smo64563'] = smo64563;
smo64563.setAttribute('id', 'smo64563');
smo64584v0ar.push(smo64563);
const smo64564 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/3/n"]}'))
noteHash['smo64564'] = smo64564;
smo64564.setAttribute('id', 'smo64564');
const smo645640acc = new VF.Accidental('#');
smo64564.addModifier(smo645640acc, 0);
smo64564.addModifier(new VF.Dot(), 0);
smo64584v0ar.push(smo64564);
const smo64565 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/3/n"]}'))
noteHash['smo64565'] = smo64565;
smo64565.setAttribute('id', 'smo64565');
smo64584v0ar.push(smo64565);
const smo64566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
noteHash['smo64566'] = smo64566;
smo64566.setAttribute('id', 'smo64566');
smo64584v0ar.push(smo64566);
const smo64567 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/3/n"]}'))
noteHash['smo64567'] = smo64567;
smo64567.setAttribute('id', 'smo64567');
smo64567.addModifier(new VF.Dot(), 0);
smo64584v0ar.push(smo64567);
const smo64568 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/3/n"]}'))
noteHash['smo64568'] = smo64568;
smo64568.setAttribute('id', 'smo64568');
smo64584v0ar.push(smo64568);
smo64584v0.addTickables(smo64584v0ar)
fmtsmo6458411.joinVoices([smo64584v0]);
const smo64584v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64584v1ar = [];
const smo64569 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo64569'] = smo64569;
smo64569.setAttribute('id', 'smo64569');
smo64569.setStyle({ fillStyle: "#115511" });
smo64584v1ar.push(smo64569);
const smo64570 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo64570'] = smo64570;
smo64570.setAttribute('id', 'smo64570');
smo64570.setStyle({ fillStyle: "#115511" });
smo64584v1ar.push(smo64570);
smo64584v1.addTickables(smo64584v1ar)
fmtsmo6458411.joinVoices([smo64584v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68370 = smo59219.getStemDirection();
smo59219.setStemDirection(dirsmo68370);
smo59220.setStemDirection(dirsmo68370);
const smo68370 = new VF.Beam([smo59219,smo59220]);
const dirsmo68371 = smo59221.getStemDirection();
smo59221.setStemDirection(dirsmo68371);
smo59222.setStemDirection(dirsmo68371);
smo59223.setStemDirection(dirsmo68371);
smo59224.setStemDirection(dirsmo68371);
const smo68371 = new VF.Beam([smo59221,smo59222,smo59223,smo59224]);
const dirsmo68372 = smo59226.getStemDirection();
smo59226.setStemDirection(dirsmo68372);
smo59227.setStemDirection(dirsmo68372);
const smo68372 = new VF.Beam([smo59226,smo59227]);
const dirsmo68373 = smo59228.getStemDirection();
smo59228.setStemDirection(dirsmo68373);
smo59229.setStemDirection(dirsmo68373);
smo59230.setStemDirection(dirsmo68373);
smo59231.setStemDirection(dirsmo68373);
const smo68373 = new VF.Beam([smo59228,smo59229,smo59230,smo59231]);
 
// formatting measures in staff group smo57677
fmtsmo5924911.format([smo59249v0,smo59249v1,smo64584v0,smo64584v1], 560);
const stavesmo59249 = new VF.Stave(1233, 1191, 574);
stavesmo59249.setAttribute('id', 'stavesmo59249');
stavesmo59249.setBegBarType(VF.Barline.type.NONE);
stavesmo59249.setContext(context);
stavesmo59249.draw();
smo59249v0.draw(context, stavesmo59249);
smo59249v1.draw(context, stavesmo59249);
smo68370.setContext(context);
smo68370.draw();
smo68371.setContext(context);
smo68371.draw();
smo68372.setContext(context);
smo68372.draw();
smo68373.setContext(context);
smo68373.draw();
const stavesmo64584 = new VF.Stave(1233, 1370, 574);
stavesmo64584.setAttribute('id', 'stavesmo64584');
stavesmo64584.setBegBarType(VF.Barline.type.NONE);
stavesmo64584.setContext(context);
stavesmo64584.draw();
smo64584v0.draw(context, stavesmo64584);
smo64584v1.draw(context, stavesmo64584);
const rightsmo57677stavesmo592491 = new VF.StaveConnector(stavesmo59249, stavesmo64584).setType(0);
rightsmo57677stavesmo592491.setContext(context).draw();
const fmtsmo5928112 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo59281v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59281v0ar = [];
const smo59250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59250'] = smo59250;
smo59250.setAttribute('id', 'smo59250');
smo59281v0ar.push(smo59250);
const smo59251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo59251'] = smo59251;
smo59251.setAttribute('id', 'smo59251');
smo59281v0ar.push(smo59251);
const smo59252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo59252'] = smo59252;
smo59252.setAttribute('id', 'smo59252');
smo59281v0ar.push(smo59252);
const smo59253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo59253'] = smo59253;
smo59253.setAttribute('id', 'smo59253');
smo59281v0ar.push(smo59253);
const smo59254 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo59254'] = smo59254;
smo59254.setAttribute('id', 'smo59254');
smo59281v0ar.push(smo59254);
const smo59255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo59255'] = smo59255;
smo59255.setAttribute('id', 'smo59255');
smo59281v0ar.push(smo59255);
const smo59256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo59256'] = smo59256;
smo59256.setAttribute('id', 'smo59256');
smo59281v0ar.push(smo59256);
const smo59257 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59257'] = smo59257;
smo59257.setAttribute('id', 'smo59257');
smo59281v0ar.push(smo59257);
const smo59258 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo59258'] = smo59258;
smo59258.setAttribute('id', 'smo59258');
smo59281v0ar.push(smo59258);
const smo59259 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo59259'] = smo59259;
smo59259.setAttribute('id', 'smo59259');
smo59281v0ar.push(smo59259);
const smo59260 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo59260'] = smo59260;
smo59260.setAttribute('id', 'smo59260');
smo59281v0ar.push(smo59260);
const smo59261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo59261'] = smo59261;
smo59261.setAttribute('id', 'smo59261');
smo59281v0ar.push(smo59261);
const smo59262 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo59262'] = smo59262;
smo59262.setAttribute('id', 'smo59262');
smo59281v0ar.push(smo59262);
const smo59263 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo59263'] = smo59263;
smo59263.setAttribute('id', 'smo59263');
smo59281v0ar.push(smo59263);
smo59281v0.addTickables(smo59281v0ar)
fmtsmo5928112.joinVoices([smo59281v0]);
const smo59281v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59281v1ar = [];
const smo59264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59264'] = smo59264;
smo59264.setAttribute('id', 'smo59264');
smo59264.setStyle({ fillStyle: '#aaaaaa7f' });
smo59281v1ar.push(smo59264);
const smo59265 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59265'] = smo59265;
smo59265.setAttribute('id', 'smo59265');
smo59265.setStyle({ fillStyle: '#aaaaaa7f' });
smo59265.addModifier(new VF.Dot(), 0);
smo59265.addModifier(new VF.Dot(), 0);
smo59281v1ar.push(smo59265);
const smo59266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59266'] = smo59266;
smo59266.setAttribute('id', 'smo59266');
smo59266.setStyle({ fillStyle: '#aaaaaa7f' });
smo59281v1ar.push(smo59266);
const smo59267 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59267'] = smo59267;
smo59267.setAttribute('id', 'smo59267');
smo59267.setStyle({ fillStyle: '#aaaaaa7f' });
smo59267.addModifier(new VF.Dot(), 0);
smo59267.addModifier(new VF.Dot(), 0);
smo59281v1ar.push(smo59267);
smo59281v1.addTickables(smo59281v1ar)
fmtsmo5928112.joinVoices([smo59281v1]);
const fmtsmo6460612 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo64606v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64606v0ar = [];
const smo64585 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
noteHash['smo64585'] = smo64585;
smo64585.setAttribute('id', 'smo64585');
smo64606v0ar.push(smo64585);
const smo64586 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo64586'] = smo64586;
smo64586.setAttribute('id', 'smo64586');
smo64586.addModifier(new VF.Dot(), 0);
smo64606v0ar.push(smo64586);
const smo64587 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo64587'] = smo64587;
smo64587.setAttribute('id', 'smo64587');
smo64606v0ar.push(smo64587);
const smo64588 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
noteHash['smo64588'] = smo64588;
smo64588.setAttribute('id', 'smo64588');
smo64606v0ar.push(smo64588);
const smo64589 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo64589'] = smo64589;
smo64589.setAttribute('id', 'smo64589');
smo64589.addModifier(new VF.Dot(), 0);
smo64606v0ar.push(smo64589);
const smo64590 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo64590'] = smo64590;
smo64590.setAttribute('id', 'smo64590');
smo64606v0ar.push(smo64590);
smo64606v0.addTickables(smo64606v0ar)
fmtsmo6460612.joinVoices([smo64606v0]);
const smo64606v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64606v1ar = [];
const smo64591 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo64591'] = smo64591;
smo64591.setAttribute('id', 'smo64591');
smo64591.setStyle({ fillStyle: "#115511" });
smo64606v1ar.push(smo64591);
const smo64592 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo64592'] = smo64592;
smo64592.setAttribute('id', 'smo64592');
smo64592.setStyle({ fillStyle: "#115511" });
smo64606v1ar.push(smo64592);
smo64606v1.addTickables(smo64606v1ar)
fmtsmo6460612.joinVoices([smo64606v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68386 = smo59251.getStemDirection();
smo59251.setStemDirection(dirsmo68386);
smo59252.setStemDirection(dirsmo68386);
const smo68386 = new VF.Beam([smo59251,smo59252]);
const dirsmo68387 = smo59253.getStemDirection();
smo59253.setStemDirection(dirsmo68387);
smo59254.setStemDirection(dirsmo68387);
smo59255.setStemDirection(dirsmo68387);
smo59256.setStemDirection(dirsmo68387);
const smo68387 = new VF.Beam([smo59253,smo59254,smo59255,smo59256]);
const dirsmo68388 = smo59258.getStemDirection();
smo59258.setStemDirection(dirsmo68388);
smo59259.setStemDirection(dirsmo68388);
const smo68388 = new VF.Beam([smo59258,smo59259]);
const dirsmo68389 = smo59260.getStemDirection();
smo59260.setStemDirection(dirsmo68389);
smo59261.setStemDirection(dirsmo68389);
smo59262.setStemDirection(dirsmo68389);
smo59263.setStemDirection(dirsmo68389);
const smo68389 = new VF.Beam([smo59260,smo59261,smo59262,smo59263]);
 
// formatting measures in staff group smo57677
fmtsmo5928112.format([smo59281v0,smo59281v1,smo64606v0,smo64606v1], 536);
const stavesmo59281 = new VF.Stave(90, 1494, 594);
stavesmo59281.setAttribute('id', 'stavesmo59281');
stavesmo59281.setBegBarType(1);
stavesmo59281.addClef('treble');
stavesmo59281.setContext(context);
stavesmo59281.draw();
smo59281v0.draw(context, stavesmo59281);
smo59281v1.draw(context, stavesmo59281);
smo68386.setContext(context);
smo68386.draw();
smo68387.setContext(context);
smo68387.draw();
smo68388.setContext(context);
smo68388.draw();
smo68389.setContext(context);
smo68389.draw();
const stavesmo64606 = new VF.Stave(90, 1668, 594);
stavesmo64606.setAttribute('id', 'stavesmo64606');
stavesmo64606.setBegBarType(1);
stavesmo64606.addClef('bass');
stavesmo64606.setContext(context);
stavesmo64606.draw();
smo64606v0.draw(context, stavesmo64606);
smo64606v1.draw(context, stavesmo64606);
const leftsmo57677stavesmo592811 = new VF.StaveConnector(stavesmo59281, stavesmo64606).setType(3);
leftsmo57677stavesmo592811.setContext(context).draw();
const fmtsmo5931313 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo59313v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59313v0ar = [];
const smo59282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59282'] = smo59282;
smo59282.setAttribute('id', 'smo59282');
smo59313v0ar.push(smo59282);
const smo59283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo59283'] = smo59283;
smo59283.setAttribute('id', 'smo59283');
smo59313v0ar.push(smo59283);
const smo59284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo59284'] = smo59284;
smo59284.setAttribute('id', 'smo59284');
smo59313v0ar.push(smo59284);
const smo59285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo59285'] = smo59285;
smo59285.setAttribute('id', 'smo59285');
smo59313v0ar.push(smo59285);
const smo59286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo59286'] = smo59286;
smo59286.setAttribute('id', 'smo59286');
smo59313v0ar.push(smo59286);
const smo59287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo59287'] = smo59287;
smo59287.setAttribute('id', 'smo59287');
smo59313v0ar.push(smo59287);
const smo59288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo59288'] = smo59288;
smo59288.setAttribute('id', 'smo59288');
smo59313v0ar.push(smo59288);
const smo59289 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59289'] = smo59289;
smo59289.setAttribute('id', 'smo59289');
smo59313v0ar.push(smo59289);
const smo59290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo59290'] = smo59290;
smo59290.setAttribute('id', 'smo59290');
smo59313v0ar.push(smo59290);
const smo59291 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo59291'] = smo59291;
smo59291.setAttribute('id', 'smo59291');
smo59313v0ar.push(smo59291);
const smo59292 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo59292'] = smo59292;
smo59292.setAttribute('id', 'smo59292');
smo59313v0ar.push(smo59292);
const smo59293 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo59293'] = smo59293;
smo59293.setAttribute('id', 'smo59293');
smo59313v0ar.push(smo59293);
const smo59294 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo59294'] = smo59294;
smo59294.setAttribute('id', 'smo59294');
smo59313v0ar.push(smo59294);
const smo59295 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo59295'] = smo59295;
smo59295.setAttribute('id', 'smo59295');
smo59313v0ar.push(smo59295);
smo59313v0.addTickables(smo59313v0ar)
fmtsmo5931313.joinVoices([smo59313v0]);
const smo59313v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59313v1ar = [];
const smo59296 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59296'] = smo59296;
smo59296.setAttribute('id', 'smo59296');
smo59296.setStyle({ fillStyle: '#aaaaaa7f' });
smo59313v1ar.push(smo59296);
const smo59297 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59297'] = smo59297;
smo59297.setAttribute('id', 'smo59297');
smo59297.setStyle({ fillStyle: '#aaaaaa7f' });
smo59297.addModifier(new VF.Dot(), 0);
smo59297.addModifier(new VF.Dot(), 0);
smo59313v1ar.push(smo59297);
const smo59298 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59298'] = smo59298;
smo59298.setAttribute('id', 'smo59298');
smo59298.setStyle({ fillStyle: '#aaaaaa7f' });
smo59313v1ar.push(smo59298);
const smo59299 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59299'] = smo59299;
smo59299.setAttribute('id', 'smo59299');
smo59299.setStyle({ fillStyle: '#aaaaaa7f' });
smo59299.addModifier(new VF.Dot(), 0);
smo59299.addModifier(new VF.Dot(), 0);
smo59313v1ar.push(smo59299);
smo59313v1.addTickables(smo59313v1ar)
fmtsmo5931313.joinVoices([smo59313v1]);
const fmtsmo6462813 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo64628v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64628v0ar = [];
const smo64607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
noteHash['smo64607'] = smo64607;
smo64607.setAttribute('id', 'smo64607');
smo64628v0ar.push(smo64607);
const smo64608 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
noteHash['smo64608'] = smo64608;
smo64608.setAttribute('id', 'smo64608');
const smo646080acc = new VF.Accidental('#');
smo64608.addModifier(smo646080acc, 0);
smo64608.addModifier(new VF.Dot(), 0);
smo64628v0ar.push(smo64608);
const smo64609 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
noteHash['smo64609'] = smo64609;
smo64609.setAttribute('id', 'smo64609');
smo64628v0ar.push(smo64609);
const smo64610 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
noteHash['smo64610'] = smo64610;
smo64610.setAttribute('id', 'smo64610');
smo64628v0ar.push(smo64610);
const smo64611 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
noteHash['smo64611'] = smo64611;
smo64611.setAttribute('id', 'smo64611');
smo64611.addModifier(new VF.Dot(), 0);
smo64628v0ar.push(smo64611);
const smo64612 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
noteHash['smo64612'] = smo64612;
smo64612.setAttribute('id', 'smo64612');
smo64628v0ar.push(smo64612);
smo64628v0.addTickables(smo64628v0ar)
fmtsmo6462813.joinVoices([smo64628v0]);
const smo64628v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64628v1ar = [];
const smo64613 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo64613'] = smo64613;
smo64613.setAttribute('id', 'smo64613');
smo64613.setStyle({ fillStyle: "#115511" });
smo64628v1ar.push(smo64613);
const smo64614 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo64614'] = smo64614;
smo64614.setAttribute('id', 'smo64614');
smo64614.setStyle({ fillStyle: "#115511" });
smo64628v1ar.push(smo64614);
smo64628v1.addTickables(smo64628v1ar)
fmtsmo6462813.joinVoices([smo64628v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68394 = smo59283.getStemDirection();
smo59283.setStemDirection(dirsmo68394);
smo59284.setStemDirection(dirsmo68394);
const smo68394 = new VF.Beam([smo59283,smo59284]);
const dirsmo68395 = smo59285.getStemDirection();
smo59285.setStemDirection(dirsmo68395);
smo59286.setStemDirection(dirsmo68395);
smo59287.setStemDirection(dirsmo68395);
smo59288.setStemDirection(dirsmo68395);
const smo68395 = new VF.Beam([smo59285,smo59286,smo59287,smo59288]);
const dirsmo68396 = smo59290.getStemDirection();
smo59290.setStemDirection(dirsmo68396);
smo59291.setStemDirection(dirsmo68396);
const smo68396 = new VF.Beam([smo59290,smo59291]);
const dirsmo68397 = smo59292.getStemDirection();
smo59292.setStemDirection(dirsmo68397);
smo59293.setStemDirection(dirsmo68397);
smo59294.setStemDirection(dirsmo68397);
smo59295.setStemDirection(dirsmo68397);
const smo68397 = new VF.Beam([smo59292,smo59293,smo59294,smo59295]);
 
// formatting measures in staff group smo57677
fmtsmo5931313.format([smo59313v0,smo59313v1,smo64628v0,smo64628v1], 560);
const stavesmo59313 = new VF.Stave(684, 1494, 574);
stavesmo59313.setAttribute('id', 'stavesmo59313');
stavesmo59313.setBegBarType(VF.Barline.type.NONE);
stavesmo59313.setContext(context);
stavesmo59313.draw();
smo59313v0.draw(context, stavesmo59313);
smo59313v1.draw(context, stavesmo59313);
smo68394.setContext(context);
smo68394.draw();
smo68395.setContext(context);
smo68395.draw();
smo68396.setContext(context);
smo68396.draw();
smo68397.setContext(context);
smo68397.draw();
const stavesmo64628 = new VF.Stave(684, 1668, 574);
stavesmo64628.setAttribute('id', 'stavesmo64628');
stavesmo64628.setBegBarType(VF.Barline.type.NONE);
stavesmo64628.setContext(context);
stavesmo64628.draw();
smo64628v0.draw(context, stavesmo64628);
smo64628v1.draw(context, stavesmo64628);
const fmtsmo5934514 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo59345v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59345v0ar = [];
const smo59314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59314'] = smo59314;
smo59314.setAttribute('id', 'smo59314');
smo59345v0ar.push(smo59314);
const smo59315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo59315'] = smo59315;
smo59315.setAttribute('id', 'smo59315');
smo59345v0ar.push(smo59315);
const smo59316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo59316'] = smo59316;
smo59316.setAttribute('id', 'smo59316');
smo59345v0ar.push(smo59316);
const smo59317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo59317'] = smo59317;
smo59317.setAttribute('id', 'smo59317');
smo59345v0ar.push(smo59317);
const smo59318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo59318'] = smo59318;
smo59318.setAttribute('id', 'smo59318');
smo59345v0ar.push(smo59318);
const smo59319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo59319'] = smo59319;
smo59319.setAttribute('id', 'smo59319');
smo59345v0ar.push(smo59319);
const smo59320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo59320'] = smo59320;
smo59320.setAttribute('id', 'smo59320');
smo59345v0ar.push(smo59320);
const smo59321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59321'] = smo59321;
smo59321.setAttribute('id', 'smo59321');
smo59345v0ar.push(smo59321);
const smo59322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo59322'] = smo59322;
smo59322.setAttribute('id', 'smo59322');
smo59345v0ar.push(smo59322);
const smo59323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo59323'] = smo59323;
smo59323.setAttribute('id', 'smo59323');
smo59345v0ar.push(smo59323);
const smo59324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo59324'] = smo59324;
smo59324.setAttribute('id', 'smo59324');
smo59345v0ar.push(smo59324);
const smo59325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo59325'] = smo59325;
smo59325.setAttribute('id', 'smo59325');
smo59345v0ar.push(smo59325);
const smo59326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo59326'] = smo59326;
smo59326.setAttribute('id', 'smo59326');
smo59345v0ar.push(smo59326);
const smo59327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo59327'] = smo59327;
smo59327.setAttribute('id', 'smo59327');
smo59345v0ar.push(smo59327);
smo59345v0.addTickables(smo59345v0ar)
fmtsmo5934514.joinVoices([smo59345v0]);
const smo59345v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59345v1ar = [];
const smo59328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59328'] = smo59328;
smo59328.setAttribute('id', 'smo59328');
smo59328.setStyle({ fillStyle: '#aaaaaa7f' });
smo59345v1ar.push(smo59328);
const smo59329 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59329'] = smo59329;
smo59329.setAttribute('id', 'smo59329');
smo59329.setStyle({ fillStyle: '#aaaaaa7f' });
smo59329.addModifier(new VF.Dot(), 0);
smo59329.addModifier(new VF.Dot(), 0);
smo59345v1ar.push(smo59329);
const smo59330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59330'] = smo59330;
smo59330.setAttribute('id', 'smo59330');
smo59330.setStyle({ fillStyle: '#aaaaaa7f' });
smo59345v1ar.push(smo59330);
const smo59331 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59331'] = smo59331;
smo59331.setAttribute('id', 'smo59331');
smo59331.setStyle({ fillStyle: '#aaaaaa7f' });
smo59331.addModifier(new VF.Dot(), 0);
smo59331.addModifier(new VF.Dot(), 0);
smo59345v1ar.push(smo59331);
smo59345v1.addTickables(smo59345v1ar)
fmtsmo5934514.joinVoices([smo59345v1]);
const fmtsmo6465014 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo64650v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64650v0ar = [];
const smo64629 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
noteHash['smo64629'] = smo64629;
smo64629.setAttribute('id', 'smo64629');
smo64650v0ar.push(smo64629);
const smo64630 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo64630'] = smo64630;
smo64630.setAttribute('id', 'smo64630');
smo64630.addModifier(new VF.Dot(), 0);
smo64650v0ar.push(smo64630);
const smo64631 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo64631'] = smo64631;
smo64631.setAttribute('id', 'smo64631');
smo64650v0ar.push(smo64631);
const smo64632 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
noteHash['smo64632'] = smo64632;
smo64632.setAttribute('id', 'smo64632');
smo64650v0ar.push(smo64632);
const smo64633 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo64633'] = smo64633;
smo64633.setAttribute('id', 'smo64633');
smo64633.addModifier(new VF.Dot(), 0);
smo64650v0ar.push(smo64633);
const smo64634 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo64634'] = smo64634;
smo64634.setAttribute('id', 'smo64634');
smo64650v0ar.push(smo64634);
smo64650v0.addTickables(smo64650v0ar)
fmtsmo6465014.joinVoices([smo64650v0]);
const smo64650v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64650v1ar = [];
const smo64635 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo64635'] = smo64635;
smo64635.setAttribute('id', 'smo64635');
smo64635.setStyle({ fillStyle: "#115511" });
smo64650v1ar.push(smo64635);
const smo64636 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo64636'] = smo64636;
smo64636.setAttribute('id', 'smo64636');
smo64636.setStyle({ fillStyle: "#115511" });
smo64650v1ar.push(smo64636);
smo64650v1.addTickables(smo64650v1ar)
fmtsmo6465014.joinVoices([smo64650v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68402 = smo59315.getStemDirection();
smo59315.setStemDirection(dirsmo68402);
smo59316.setStemDirection(dirsmo68402);
const smo68402 = new VF.Beam([smo59315,smo59316]);
const dirsmo68403 = smo59317.getStemDirection();
smo59317.setStemDirection(dirsmo68403);
smo59318.setStemDirection(dirsmo68403);
smo59319.setStemDirection(dirsmo68403);
smo59320.setStemDirection(dirsmo68403);
const smo68403 = new VF.Beam([smo59317,smo59318,smo59319,smo59320]);
const dirsmo68404 = smo59322.getStemDirection();
smo59322.setStemDirection(dirsmo68404);
smo59323.setStemDirection(dirsmo68404);
const smo68404 = new VF.Beam([smo59322,smo59323]);
const dirsmo68405 = smo59324.getStemDirection();
smo59324.setStemDirection(dirsmo68405);
smo59325.setStemDirection(dirsmo68405);
smo59326.setStemDirection(dirsmo68405);
smo59327.setStemDirection(dirsmo68405);
const smo68405 = new VF.Beam([smo59324,smo59325,smo59326,smo59327]);
 
// formatting measures in staff group smo57677
fmtsmo5934514.format([smo59345v0,smo59345v1,smo64650v0,smo64650v1], 535);
const stavesmo59345 = new VF.Stave(1258, 1494, 549);
stavesmo59345.setAttribute('id', 'stavesmo59345');
stavesmo59345.setBegBarType(VF.Barline.type.NONE);
stavesmo59345.setContext(context);
stavesmo59345.draw();
smo59345v0.draw(context, stavesmo59345);
smo59345v1.draw(context, stavesmo59345);
smo68402.setContext(context);
smo68402.draw();
smo68403.setContext(context);
smo68403.draw();
smo68404.setContext(context);
smo68404.draw();
smo68405.setContext(context);
smo68405.draw();
const stavesmo64650 = new VF.Stave(1258, 1668, 549);
stavesmo64650.setAttribute('id', 'stavesmo64650');
stavesmo64650.setBegBarType(VF.Barline.type.NONE);
stavesmo64650.setContext(context);
stavesmo64650.draw();
smo64650v0.draw(context, stavesmo64650);
smo64650v1.draw(context, stavesmo64650);
const rightsmo57677stavesmo593451 = new VF.StaveConnector(stavesmo59345, stavesmo64650).setType(0);
rightsmo57677stavesmo593451.setContext(context).draw();
const fmtsmo5937715 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo59377v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59377v0ar = [];
const smo59346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59346'] = smo59346;
smo59346.setAttribute('id', 'smo59346');
smo59377v0ar.push(smo59346);
const smo59347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo59347'] = smo59347;
smo59347.setAttribute('id', 'smo59347');
smo59377v0ar.push(smo59347);
const smo59348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo59348'] = smo59348;
smo59348.setAttribute('id', 'smo59348');
smo59377v0ar.push(smo59348);
const smo59349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo59349'] = smo59349;
smo59349.setAttribute('id', 'smo59349');
smo59377v0ar.push(smo59349);
const smo59350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo59350'] = smo59350;
smo59350.setAttribute('id', 'smo59350');
smo59377v0ar.push(smo59350);
const smo59351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo59351'] = smo59351;
smo59351.setAttribute('id', 'smo59351');
smo59377v0ar.push(smo59351);
const smo59352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo59352'] = smo59352;
smo59352.setAttribute('id', 'smo59352');
smo59377v0ar.push(smo59352);
const smo59353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59353'] = smo59353;
smo59353.setAttribute('id', 'smo59353');
smo59377v0ar.push(smo59353);
const smo59354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo59354'] = smo59354;
smo59354.setAttribute('id', 'smo59354');
smo59377v0ar.push(smo59354);
const smo59355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo59355'] = smo59355;
smo59355.setAttribute('id', 'smo59355');
smo59377v0ar.push(smo59355);
const smo59356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo59356'] = smo59356;
smo59356.setAttribute('id', 'smo59356');
smo59377v0ar.push(smo59356);
const smo59357 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo59357'] = smo59357;
smo59357.setAttribute('id', 'smo59357');
smo59377v0ar.push(smo59357);
const smo59358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo59358'] = smo59358;
smo59358.setAttribute('id', 'smo59358');
smo59377v0ar.push(smo59358);
const smo59359 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo59359'] = smo59359;
smo59359.setAttribute('id', 'smo59359');
smo59377v0ar.push(smo59359);
smo59377v0.addTickables(smo59377v0ar)
fmtsmo5937715.joinVoices([smo59377v0]);
const smo59377v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59377v1ar = [];
const smo59360 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59360'] = smo59360;
smo59360.setAttribute('id', 'smo59360');
smo59360.setStyle({ fillStyle: '#aaaaaa7f' });
smo59377v1ar.push(smo59360);
const smo59361 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59361'] = smo59361;
smo59361.setAttribute('id', 'smo59361');
smo59361.setStyle({ fillStyle: '#aaaaaa7f' });
smo59361.addModifier(new VF.Dot(), 0);
smo59361.addModifier(new VF.Dot(), 0);
smo59377v1ar.push(smo59361);
const smo59362 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59362'] = smo59362;
smo59362.setAttribute('id', 'smo59362');
smo59362.setStyle({ fillStyle: '#aaaaaa7f' });
smo59377v1ar.push(smo59362);
const smo59363 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59363'] = smo59363;
smo59363.setAttribute('id', 'smo59363');
smo59363.setStyle({ fillStyle: '#aaaaaa7f' });
smo59363.addModifier(new VF.Dot(), 0);
smo59363.addModifier(new VF.Dot(), 0);
smo59377v1ar.push(smo59363);
smo59377v1.addTickables(smo59377v1ar)
fmtsmo5937715.joinVoices([smo59377v1]);
const fmtsmo6467215 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo64672v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64672v0ar = [];
const smo64651 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64651'] = smo64651;
smo64651.setAttribute('id', 'smo64651');
smo64672v0ar.push(smo64651);
const smo64652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo64652'] = smo64652;
smo64652.setAttribute('id', 'smo64652');
smo64652.addModifier(new VF.Dot(), 0);
smo64672v0ar.push(smo64652);
const smo64653 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo64653'] = smo64653;
smo64653.setAttribute('id', 'smo64653');
smo64672v0ar.push(smo64653);
const smo64654 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64654'] = smo64654;
smo64654.setAttribute('id', 'smo64654');
smo64672v0ar.push(smo64654);
const smo64655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo64655'] = smo64655;
smo64655.setAttribute('id', 'smo64655');
smo64655.addModifier(new VF.Dot(), 0);
smo64672v0ar.push(smo64655);
const smo64656 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo64656'] = smo64656;
smo64656.setAttribute('id', 'smo64656');
smo64672v0ar.push(smo64656);
smo64672v0.addTickables(smo64672v0ar)
fmtsmo6467215.joinVoices([smo64672v0]);
const smo64672v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64672v1ar = [];
const smo64657 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo64657'] = smo64657;
smo64657.setAttribute('id', 'smo64657');
smo64657.setStyle({ fillStyle: "#115511" });
smo64672v1ar.push(smo64657);
const smo64658 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo64658'] = smo64658;
smo64658.setAttribute('id', 'smo64658');
smo64658.setStyle({ fillStyle: "#115511" });
smo64672v1ar.push(smo64658);
smo64672v1.addTickables(smo64672v1ar)
fmtsmo6467215.joinVoices([smo64672v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68418 = smo59347.getStemDirection();
smo59347.setStemDirection(dirsmo68418);
smo59348.setStemDirection(dirsmo68418);
const smo68418 = new VF.Beam([smo59347,smo59348]);
const dirsmo68419 = smo59349.getStemDirection();
smo59349.setStemDirection(dirsmo68419);
smo59350.setStemDirection(dirsmo68419);
smo59351.setStemDirection(dirsmo68419);
smo59352.setStemDirection(dirsmo68419);
const smo68419 = new VF.Beam([smo59349,smo59350,smo59351,smo59352]);
const dirsmo68420 = smo59354.getStemDirection();
smo59354.setStemDirection(dirsmo68420);
smo59355.setStemDirection(dirsmo68420);
const smo68420 = new VF.Beam([smo59354,smo59355]);
const dirsmo68421 = smo59356.getStemDirection();
smo59356.setStemDirection(dirsmo68421);
smo59357.setStemDirection(dirsmo68421);
smo59358.setStemDirection(dirsmo68421);
smo59359.setStemDirection(dirsmo68421);
const smo68421 = new VF.Beam([smo59356,smo59357,smo59358,smo59359]);
 
// formatting measures in staff group smo57677
fmtsmo5937715.format([smo59377v0,smo59377v1,smo64672v0,smo64672v1], 544);
const stavesmo59377 = new VF.Stave(90, 1778, 602);
stavesmo59377.setAttribute('id', 'stavesmo59377');
stavesmo59377.setBegBarType(1);
stavesmo59377.addClef('treble');
stavesmo59377.setContext(context);
stavesmo59377.draw();
smo59377v0.draw(context, stavesmo59377);
smo59377v1.draw(context, stavesmo59377);
smo68418.setContext(context);
smo68418.draw();
smo68419.setContext(context);
smo68419.draw();
smo68420.setContext(context);
smo68420.draw();
smo68421.setContext(context);
smo68421.draw();
const stavesmo64672 = new VF.Stave(90, 1862, 602);
stavesmo64672.setAttribute('id', 'stavesmo64672');
stavesmo64672.setBegBarType(1);
stavesmo64672.addClef('treble');
stavesmo64672.setContext(context);
stavesmo64672.draw();
smo64672v0.draw(context, stavesmo64672);
smo64672v1.draw(context, stavesmo64672);
const leftsmo57677stavesmo593771 = new VF.StaveConnector(stavesmo59377, stavesmo64672).setType(3);
leftsmo57677stavesmo593771.setContext(context).draw();
const fmtsmo5940916 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo59409v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59409v0ar = [];
const smo59378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59378'] = smo59378;
smo59378.setAttribute('id', 'smo59378');
smo59409v0ar.push(smo59378);
const smo59379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo59379'] = smo59379;
smo59379.setAttribute('id', 'smo59379');
smo59409v0ar.push(smo59379);
const smo59380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo59380'] = smo59380;
smo59380.setAttribute('id', 'smo59380');
smo59409v0ar.push(smo59380);
const smo59381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo59381'] = smo59381;
smo59381.setAttribute('id', 'smo59381');
smo59409v0ar.push(smo59381);
const smo59382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo59382'] = smo59382;
smo59382.setAttribute('id', 'smo59382');
smo59409v0ar.push(smo59382);
const smo59383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo59383'] = smo59383;
smo59383.setAttribute('id', 'smo59383');
smo59409v0ar.push(smo59383);
const smo59384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo59384'] = smo59384;
smo59384.setAttribute('id', 'smo59384');
smo59409v0ar.push(smo59384);
const smo59385 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59385'] = smo59385;
smo59385.setAttribute('id', 'smo59385');
smo59409v0ar.push(smo59385);
const smo59386 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo59386'] = smo59386;
smo59386.setAttribute('id', 'smo59386');
smo59409v0ar.push(smo59386);
const smo59387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo59387'] = smo59387;
smo59387.setAttribute('id', 'smo59387');
smo59409v0ar.push(smo59387);
const smo59388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo59388'] = smo59388;
smo59388.setAttribute('id', 'smo59388');
smo59409v0ar.push(smo59388);
const smo59389 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo59389'] = smo59389;
smo59389.setAttribute('id', 'smo59389');
smo59409v0ar.push(smo59389);
const smo59390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo59390'] = smo59390;
smo59390.setAttribute('id', 'smo59390');
smo59409v0ar.push(smo59390);
const smo59391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo59391'] = smo59391;
smo59391.setAttribute('id', 'smo59391');
smo59409v0ar.push(smo59391);
smo59409v0.addTickables(smo59409v0ar)
fmtsmo5940916.joinVoices([smo59409v0]);
const smo59409v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59409v1ar = [];
const smo59392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59392'] = smo59392;
smo59392.setAttribute('id', 'smo59392');
smo59392.setStyle({ fillStyle: '#aaaaaa7f' });
smo59409v1ar.push(smo59392);
const smo59393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59393'] = smo59393;
smo59393.setAttribute('id', 'smo59393');
smo59393.setStyle({ fillStyle: '#aaaaaa7f' });
smo59393.addModifier(new VF.Dot(), 0);
smo59393.addModifier(new VF.Dot(), 0);
smo59409v1ar.push(smo59393);
const smo59394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59394'] = smo59394;
smo59394.setAttribute('id', 'smo59394');
smo59394.setStyle({ fillStyle: '#aaaaaa7f' });
smo59409v1ar.push(smo59394);
const smo59395 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59395'] = smo59395;
smo59395.setAttribute('id', 'smo59395');
smo59395.setStyle({ fillStyle: '#aaaaaa7f' });
smo59395.addModifier(new VF.Dot(), 0);
smo59395.addModifier(new VF.Dot(), 0);
smo59409v1ar.push(smo59395);
smo59409v1.addTickables(smo59409v1ar)
fmtsmo5940916.joinVoices([smo59409v1]);
const fmtsmo6469416 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo64694v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64694v0ar = [];
const smo64673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64673'] = smo64673;
smo64673.setAttribute('id', 'smo64673');
smo64694v0ar.push(smo64673);
const smo64674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo64674'] = smo64674;
smo64674.setAttribute('id', 'smo64674');
smo64674.addModifier(new VF.Dot(), 0);
smo64694v0ar.push(smo64674);
const smo64675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo64675'] = smo64675;
smo64675.setAttribute('id', 'smo64675');
smo64694v0ar.push(smo64675);
const smo64676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64676'] = smo64676;
smo64676.setAttribute('id', 'smo64676');
smo64694v0ar.push(smo64676);
const smo64677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo64677'] = smo64677;
smo64677.setAttribute('id', 'smo64677');
smo64677.addModifier(new VF.Dot(), 0);
smo64694v0ar.push(smo64677);
const smo64678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo64678'] = smo64678;
smo64678.setAttribute('id', 'smo64678');
smo64694v0ar.push(smo64678);
smo64694v0.addTickables(smo64694v0ar)
fmtsmo6469416.joinVoices([smo64694v0]);
const smo64694v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64694v1ar = [];
const smo64679 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo64679'] = smo64679;
smo64679.setAttribute('id', 'smo64679');
smo64679.setStyle({ fillStyle: "#115511" });
smo64694v1ar.push(smo64679);
const smo64680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo64680'] = smo64680;
smo64680.setAttribute('id', 'smo64680');
smo64680.setStyle({ fillStyle: "#115511" });
smo64694v1ar.push(smo64680);
smo64694v1.addTickables(smo64694v1ar)
fmtsmo6469416.joinVoices([smo64694v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68426 = smo59379.getStemDirection();
smo59379.setStemDirection(dirsmo68426);
smo59380.setStemDirection(dirsmo68426);
const smo68426 = new VF.Beam([smo59379,smo59380]);
const dirsmo68427 = smo59381.getStemDirection();
smo59381.setStemDirection(dirsmo68427);
smo59382.setStemDirection(dirsmo68427);
smo59383.setStemDirection(dirsmo68427);
smo59384.setStemDirection(dirsmo68427);
const smo68427 = new VF.Beam([smo59381,smo59382,smo59383,smo59384]);
const dirsmo68428 = smo59386.getStemDirection();
smo59386.setStemDirection(dirsmo68428);
smo59387.setStemDirection(dirsmo68428);
const smo68428 = new VF.Beam([smo59386,smo59387]);
const dirsmo68429 = smo59388.getStemDirection();
smo59388.setStemDirection(dirsmo68429);
smo59389.setStemDirection(dirsmo68429);
smo59390.setStemDirection(dirsmo68429);
smo59391.setStemDirection(dirsmo68429);
const smo68429 = new VF.Beam([smo59388,smo59389,smo59390,smo59391]);
 
// formatting measures in staff group smo57677
fmtsmo5940916.format([smo59409v0,smo59409v1,smo64694v0,smo64694v1], 544);
const stavesmo59409 = new VF.Stave(692, 1778, 558);
stavesmo59409.setAttribute('id', 'stavesmo59409');
stavesmo59409.setBegBarType(VF.Barline.type.NONE);
stavesmo59409.setContext(context);
stavesmo59409.draw();
smo59409v0.draw(context, stavesmo59409);
smo59409v1.draw(context, stavesmo59409);
smo68426.setContext(context);
smo68426.draw();
smo68427.setContext(context);
smo68427.draw();
smo68428.setContext(context);
smo68428.draw();
smo68429.setContext(context);
smo68429.draw();
const stavesmo64694 = new VF.Stave(692, 1862, 558);
stavesmo64694.setAttribute('id', 'stavesmo64694');
stavesmo64694.setBegBarType(VF.Barline.type.NONE);
stavesmo64694.setContext(context);
stavesmo64694.draw();
smo64694v0.draw(context, stavesmo64694);
smo64694v1.draw(context, stavesmo64694);
const fmtsmo5944117 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo59441v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59441v0ar = [];
const smo59410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59410'] = smo59410;
smo59410.setAttribute('id', 'smo59410');
smo59441v0ar.push(smo59410);
const smo59411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo59411'] = smo59411;
smo59411.setAttribute('id', 'smo59411');
smo59441v0ar.push(smo59411);
const smo59412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","stem_direction":1,"auto_stem":false,"keys":["bn/4/r"]}'))
noteHash['smo59412'] = smo59412;
smo59412.setAttribute('id', 'smo59412');
smo59441v0ar.push(smo59412);
const smo59413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo59413'] = smo59413;
smo59413.setAttribute('id', 'smo59413');
smo59441v0ar.push(smo59413);
const smo59414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo59414'] = smo59414;
smo59414.setAttribute('id', 'smo59414');
smo59441v0ar.push(smo59414);
const smo59415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo59415'] = smo59415;
smo59415.setAttribute('id', 'smo59415');
smo59441v0ar.push(smo59415);
const smo59416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo59416'] = smo59416;
smo59416.setAttribute('id', 'smo59416');
smo59441v0ar.push(smo59416);
const smo59417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59417'] = smo59417;
smo59417.setAttribute('id', 'smo59417');
smo59441v0ar.push(smo59417);
const smo59418 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo59418'] = smo59418;
smo59418.setAttribute('id', 'smo59418');
smo59441v0ar.push(smo59418);
const smo59419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo59419'] = smo59419;
smo59419.setAttribute('id', 'smo59419');
smo59441v0ar.push(smo59419);
const smo59420 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo59420'] = smo59420;
smo59420.setAttribute('id', 'smo59420');
smo59441v0ar.push(smo59420);
const smo59421 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo59421'] = smo59421;
smo59421.setAttribute('id', 'smo59421');
smo59441v0ar.push(smo59421);
const smo59422 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
noteHash['smo59422'] = smo59422;
smo59422.setAttribute('id', 'smo59422');
smo59441v0ar.push(smo59422);
const smo59423 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
noteHash['smo59423'] = smo59423;
smo59423.setAttribute('id', 'smo59423');
smo59441v0ar.push(smo59423);
smo59441v0.addTickables(smo59441v0ar)
fmtsmo5944117.joinVoices([smo59441v0]);
const smo59441v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59441v1ar = [];
const smo59424 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59424'] = smo59424;
smo59424.setAttribute('id', 'smo59424');
smo59424.setStyle({ fillStyle: '#aaaaaa7f' });
smo59441v1ar.push(smo59424);
const smo59425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59425'] = smo59425;
smo59425.setAttribute('id', 'smo59425');
smo59425.setStyle({ fillStyle: '#aaaaaa7f' });
smo59425.addModifier(new VF.Dot(), 0);
smo59425.addModifier(new VF.Dot(), 0);
smo59441v1ar.push(smo59425);
const smo59426 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59426'] = smo59426;
smo59426.setAttribute('id', 'smo59426');
smo59426.setStyle({ fillStyle: '#aaaaaa7f' });
smo59441v1ar.push(smo59426);
const smo59427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59427'] = smo59427;
smo59427.setAttribute('id', 'smo59427');
smo59427.setStyle({ fillStyle: '#aaaaaa7f' });
smo59427.addModifier(new VF.Dot(), 0);
smo59427.addModifier(new VF.Dot(), 0);
smo59441v1ar.push(smo59427);
smo59441v1.addTickables(smo59441v1ar)
fmtsmo5944117.joinVoices([smo59441v1]);
const fmtsmo6471617 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo64716v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64716v0ar = [];
const smo64695 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64695'] = smo64695;
smo64695.setAttribute('id', 'smo64695');
smo64716v0ar.push(smo64695);
const smo64696 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo64696'] = smo64696;
smo64696.setAttribute('id', 'smo64696');
smo64696.addModifier(new VF.Dot(), 0);
smo64716v0ar.push(smo64696);
const smo64697 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo64697'] = smo64697;
smo64697.setAttribute('id', 'smo64697');
smo64716v0ar.push(smo64697);
const smo64698 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64698'] = smo64698;
smo64698.setAttribute('id', 'smo64698');
smo64716v0ar.push(smo64698);
const smo64699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo64699'] = smo64699;
smo64699.setAttribute('id', 'smo64699');
smo64699.addModifier(new VF.Dot(), 0);
smo64716v0ar.push(smo64699);
const smo64700 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo64700'] = smo64700;
smo64700.setAttribute('id', 'smo64700');
smo64716v0ar.push(smo64700);
smo64716v0.addTickables(smo64716v0ar)
fmtsmo6471617.joinVoices([smo64716v0]);
const smo64716v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64716v1ar = [];
const smo64701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo64701'] = smo64701;
smo64701.setAttribute('id', 'smo64701');
smo64701.setStyle({ fillStyle: "#115511" });
smo64716v1ar.push(smo64701);
const smo64702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo64702'] = smo64702;
smo64702.setAttribute('id', 'smo64702');
smo64702.setStyle({ fillStyle: "#115511" });
smo64716v1ar.push(smo64702);
smo64716v1.addTickables(smo64716v1ar)
fmtsmo6471617.joinVoices([smo64716v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68434 = smo59413.getStemDirection();
smo59413.setStemDirection(dirsmo68434);
smo59414.setStemDirection(dirsmo68434);
smo59415.setStemDirection(dirsmo68434);
smo59416.setStemDirection(dirsmo68434);
const smo68434 = new VF.Beam([smo59413,smo59414,smo59415,smo59416]);
const dirsmo68435 = smo59418.getStemDirection();
smo59418.setStemDirection(dirsmo68435);
smo59419.setStemDirection(dirsmo68435);
const smo68435 = new VF.Beam([smo59418,smo59419]);
const dirsmo68436 = smo59420.getStemDirection();
smo59420.setStemDirection(dirsmo68436);
smo59421.setStemDirection(dirsmo68436);
smo59422.setStemDirection(dirsmo68436);
smo59423.setStemDirection(dirsmo68436);
const smo68436 = new VF.Beam([smo59420,smo59421,smo59422,smo59423]);
 
// formatting measures in staff group smo57677
fmtsmo5944117.format([smo59441v0,smo59441v1,smo64716v0,smo64716v1], 544);
const stavesmo59441 = new VF.Stave(1250, 1778, 558);
stavesmo59441.setAttribute('id', 'stavesmo59441');
stavesmo59441.setBegBarType(VF.Barline.type.NONE);
stavesmo59441.setContext(context);
stavesmo59441.draw();
smo59441v0.draw(context, stavesmo59441);
smo59441v1.draw(context, stavesmo59441);
smo68434.setContext(context);
smo68434.draw();
smo68435.setContext(context);
smo68435.draw();
smo68436.setContext(context);
smo68436.draw();
const stavesmo64716 = new VF.Stave(1250, 1862, 558);
stavesmo64716.setAttribute('id', 'stavesmo64716');
stavesmo64716.setBegBarType(VF.Barline.type.NONE);
stavesmo64716.setContext(context);
stavesmo64716.draw();
smo64716v0.draw(context, stavesmo64716);
smo64716v1.draw(context, stavesmo64716);
const rightsmo57677stavesmo594411 = new VF.StaveConnector(stavesmo59441, stavesmo64716).setType(0);
rightsmo57677stavesmo594411.setContext(context).draw();
const fmtsmo5947318 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo59473v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59473v0ar = [];
const smo59442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59442'] = smo59442;
smo59442.setAttribute('id', 'smo59442');
smo59473v0ar.push(smo59442);
const smo59443 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo59443'] = smo59443;
smo59443.setAttribute('id', 'smo59443');
smo59473v0ar.push(smo59443);
const smo59444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo59444'] = smo59444;
smo59444.setAttribute('id', 'smo59444');
smo59473v0ar.push(smo59444);
const smo59445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo59445'] = smo59445;
smo59445.setAttribute('id', 'smo59445');
smo59473v0ar.push(smo59445);
const smo59446 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo59446'] = smo59446;
smo59446.setAttribute('id', 'smo59446');
smo59473v0ar.push(smo59446);
const smo59447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo59447'] = smo59447;
smo59447.setAttribute('id', 'smo59447');
smo59473v0ar.push(smo59447);
const smo59448 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo59448'] = smo59448;
smo59448.setAttribute('id', 'smo59448');
smo59473v0ar.push(smo59448);
const smo59449 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59449'] = smo59449;
smo59449.setAttribute('id', 'smo59449');
smo59473v0ar.push(smo59449);
const smo59450 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo59450'] = smo59450;
smo59450.setAttribute('id', 'smo59450');
smo59473v0ar.push(smo59450);
const smo59451 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo59451'] = smo59451;
smo59451.setAttribute('id', 'smo59451');
smo59473v0ar.push(smo59451);
const smo59452 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo59452'] = smo59452;
smo59452.setAttribute('id', 'smo59452');
smo59473v0ar.push(smo59452);
const smo59453 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo59453'] = smo59453;
smo59453.setAttribute('id', 'smo59453');
smo59473v0ar.push(smo59453);
const smo59454 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo59454'] = smo59454;
smo59454.setAttribute('id', 'smo59454');
smo59473v0ar.push(smo59454);
const smo59455 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo59455'] = smo59455;
smo59455.setAttribute('id', 'smo59455');
smo59473v0ar.push(smo59455);
smo59473v0.addTickables(smo59473v0ar)
fmtsmo5947318.joinVoices([smo59473v0]);
const smo59473v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59473v1ar = [];
const smo59456 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59456'] = smo59456;
smo59456.setAttribute('id', 'smo59456');
smo59456.setStyle({ fillStyle: '#aaaaaa7f' });
smo59473v1ar.push(smo59456);
const smo59457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59457'] = smo59457;
smo59457.setAttribute('id', 'smo59457');
smo59457.setStyle({ fillStyle: '#aaaaaa7f' });
smo59457.addModifier(new VF.Dot(), 0);
smo59457.addModifier(new VF.Dot(), 0);
smo59473v1ar.push(smo59457);
const smo59458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59458'] = smo59458;
smo59458.setAttribute('id', 'smo59458');
smo59458.setStyle({ fillStyle: '#aaaaaa7f' });
smo59473v1ar.push(smo59458);
const smo59459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59459'] = smo59459;
smo59459.setAttribute('id', 'smo59459');
smo59459.setStyle({ fillStyle: '#aaaaaa7f' });
smo59459.addModifier(new VF.Dot(), 0);
smo59459.addModifier(new VF.Dot(), 0);
smo59473v1ar.push(smo59459);
smo59473v1.addTickables(smo59473v1ar)
fmtsmo5947318.joinVoices([smo59473v1]);
const fmtsmo6473818 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo64738v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64738v0ar = [];
const smo64717 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64717'] = smo64717;
smo64717.setAttribute('id', 'smo64717');
smo64738v0ar.push(smo64717);
const smo64718 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo64718'] = smo64718;
smo64718.setAttribute('id', 'smo64718');
smo64718.addModifier(new VF.Dot(), 0);
smo64738v0ar.push(smo64718);
const smo64719 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo64719'] = smo64719;
smo64719.setAttribute('id', 'smo64719');
smo64738v0ar.push(smo64719);
const smo64720 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64720'] = smo64720;
smo64720.setAttribute('id', 'smo64720');
smo64738v0ar.push(smo64720);
const smo64721 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo64721'] = smo64721;
smo64721.setAttribute('id', 'smo64721');
smo64721.addModifier(new VF.Dot(), 0);
smo64738v0ar.push(smo64721);
const smo64722 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
noteHash['smo64722'] = smo64722;
smo64722.setAttribute('id', 'smo64722');
smo64738v0ar.push(smo64722);
smo64738v0.addTickables(smo64738v0ar)
fmtsmo6473818.joinVoices([smo64738v0]);
const smo64738v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64738v1ar = [];
const smo64723 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo64723'] = smo64723;
smo64723.setAttribute('id', 'smo64723');
smo64723.setStyle({ fillStyle: "#115511" });
smo64738v1ar.push(smo64723);
const smo64724 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo64724'] = smo64724;
smo64724.setAttribute('id', 'smo64724');
smo64724.setStyle({ fillStyle: "#115511" });
smo64738v1ar.push(smo64724);
smo64738v1.addTickables(smo64738v1ar)
fmtsmo6473818.joinVoices([smo64738v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68449 = smo59443.getStemDirection();
smo59443.setStemDirection(dirsmo68449);
smo59444.setStemDirection(dirsmo68449);
const smo68449 = new VF.Beam([smo59443,smo59444]);
const dirsmo68450 = smo59445.getStemDirection();
smo59445.setStemDirection(dirsmo68450);
smo59446.setStemDirection(dirsmo68450);
smo59447.setStemDirection(dirsmo68450);
smo59448.setStemDirection(dirsmo68450);
const smo68450 = new VF.Beam([smo59445,smo59446,smo59447,smo59448]);
const dirsmo68451 = smo59450.getStemDirection();
smo59450.setStemDirection(dirsmo68451);
smo59451.setStemDirection(dirsmo68451);
const smo68451 = new VF.Beam([smo59450,smo59451]);
const dirsmo68452 = smo59452.getStemDirection();
smo59452.setStemDirection(dirsmo68452);
smo59453.setStemDirection(dirsmo68452);
smo59454.setStemDirection(dirsmo68452);
smo59455.setStemDirection(dirsmo68452);
const smo68452 = new VF.Beam([smo59452,smo59453,smo59454,smo59455]);
 
// formatting measures in staff group smo57677
fmtsmo5947318.format([smo59473v0,smo59473v1,smo64738v0,smo64738v1], 529);
const stavesmo59473 = new VF.Stave(90, 2049, 587);
stavesmo59473.setAttribute('id', 'stavesmo59473');
stavesmo59473.setBegBarType(1);
stavesmo59473.addClef('treble');
stavesmo59473.setContext(context);
stavesmo59473.draw();
smo59473v0.draw(context, stavesmo59473);
smo59473v1.draw(context, stavesmo59473);
smo68449.setContext(context);
smo68449.draw();
smo68450.setContext(context);
smo68450.draw();
smo68451.setContext(context);
smo68451.draw();
smo68452.setContext(context);
smo68452.draw();
const stavesmo64738 = new VF.Stave(90, 2136, 587);
stavesmo64738.setAttribute('id', 'stavesmo64738');
stavesmo64738.setBegBarType(1);
stavesmo64738.addClef('treble');
stavesmo64738.setContext(context);
stavesmo64738.draw();
smo64738v0.draw(context, stavesmo64738);
smo64738v1.draw(context, stavesmo64738);
const leftsmo57677stavesmo594731 = new VF.StaveConnector(stavesmo59473, stavesmo64738).setType(3);
leftsmo57677stavesmo594731.setContext(context).draw();
const fmtsmo5950519 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo59505v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59505v0ar = [];
const smo59474 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59474'] = smo59474;
smo59474.setAttribute('id', 'smo59474');
smo59505v0ar.push(smo59474);
const smo59475 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo59475'] = smo59475;
smo59475.setAttribute('id', 'smo59475');
const smo594750acc = new VF.Accidental('b');
smo59475.addModifier(smo594750acc, 0);
smo59505v0ar.push(smo59475);
const smo59476 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo59476'] = smo59476;
smo59476.setAttribute('id', 'smo59476');
smo59505v0ar.push(smo59476);
const smo59477 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo59477'] = smo59477;
smo59477.setAttribute('id', 'smo59477');
smo59505v0ar.push(smo59477);
const smo59478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo59478'] = smo59478;
smo59478.setAttribute('id', 'smo59478');
smo59505v0ar.push(smo59478);
const smo59479 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo59479'] = smo59479;
smo59479.setAttribute('id', 'smo59479');
smo59505v0ar.push(smo59479);
const smo59480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo59480'] = smo59480;
smo59480.setAttribute('id', 'smo59480');
smo59505v0ar.push(smo59480);
const smo59481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59481'] = smo59481;
smo59481.setAttribute('id', 'smo59481');
smo59505v0ar.push(smo59481);
const smo59482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo59482'] = smo59482;
smo59482.setAttribute('id', 'smo59482');
smo59505v0ar.push(smo59482);
const smo59483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo59483'] = smo59483;
smo59483.setAttribute('id', 'smo59483');
smo59505v0ar.push(smo59483);
const smo59484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo59484'] = smo59484;
smo59484.setAttribute('id', 'smo59484');
smo59505v0ar.push(smo59484);
const smo59485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
noteHash['smo59485'] = smo59485;
smo59485.setAttribute('id', 'smo59485');
smo59505v0ar.push(smo59485);
const smo59486 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo59486'] = smo59486;
smo59486.setAttribute('id', 'smo59486');
smo59505v0ar.push(smo59486);
const smo59487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo59487'] = smo59487;
smo59487.setAttribute('id', 'smo59487');
smo59505v0ar.push(smo59487);
smo59505v0.addTickables(smo59505v0ar)
fmtsmo5950519.joinVoices([smo59505v0]);
const smo59505v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59505v1ar = [];
const smo59488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59488'] = smo59488;
smo59488.setAttribute('id', 'smo59488');
smo59488.setStyle({ fillStyle: '#aaaaaa7f' });
smo59505v1ar.push(smo59488);
const smo59489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59489'] = smo59489;
smo59489.setAttribute('id', 'smo59489');
smo59489.setStyle({ fillStyle: '#aaaaaa7f' });
smo59489.addModifier(new VF.Dot(), 0);
smo59489.addModifier(new VF.Dot(), 0);
smo59505v1ar.push(smo59489);
const smo59490 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59490'] = smo59490;
smo59490.setAttribute('id', 'smo59490');
smo59490.setStyle({ fillStyle: '#aaaaaa7f' });
smo59505v1ar.push(smo59490);
const smo59491 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59491'] = smo59491;
smo59491.setAttribute('id', 'smo59491');
smo59491.setStyle({ fillStyle: '#aaaaaa7f' });
smo59491.addModifier(new VF.Dot(), 0);
smo59491.addModifier(new VF.Dot(), 0);
smo59505v1ar.push(smo59491);
smo59505v1.addTickables(smo59505v1ar)
fmtsmo5950519.joinVoices([smo59505v1]);
const fmtsmo6476019 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo64760v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64760v0ar = [];
const smo64739 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64739'] = smo64739;
smo64739.setAttribute('id', 'smo64739');
smo64760v0ar.push(smo64739);
const smo64740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo64740'] = smo64740;
smo64740.setAttribute('id', 'smo64740');
smo64740.addModifier(new VF.Dot(), 0);
smo64760v0ar.push(smo64740);
const smo64741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo64741'] = smo64741;
smo64741.setAttribute('id', 'smo64741');
smo64760v0ar.push(smo64741);
const smo64742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64742'] = smo64742;
smo64742.setAttribute('id', 'smo64742');
smo64760v0ar.push(smo64742);
const smo64743 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo64743'] = smo64743;
smo64743.setAttribute('id', 'smo64743');
smo64743.addModifier(new VF.Dot(), 0);
smo64760v0ar.push(smo64743);
const smo64744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
noteHash['smo64744'] = smo64744;
smo64744.setAttribute('id', 'smo64744');
smo64760v0ar.push(smo64744);
smo64760v0.addTickables(smo64760v0ar)
fmtsmo6476019.joinVoices([smo64760v0]);
const smo64760v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64760v1ar = [];
const smo64745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo64745'] = smo64745;
smo64745.setAttribute('id', 'smo64745');
smo64745.setStyle({ fillStyle: "#115511" });
smo64760v1ar.push(smo64745);
const smo64746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
noteHash['smo64746'] = smo64746;
smo64746.setAttribute('id', 'smo64746');
smo64746.setStyle({ fillStyle: "#115511" });
smo64760v1ar.push(smo64746);
smo64760v1.addTickables(smo64760v1ar)
fmtsmo6476019.joinVoices([smo64760v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68457 = smo59475.getStemDirection();
smo59475.setStemDirection(dirsmo68457);
smo59476.setStemDirection(dirsmo68457);
const smo68457 = new VF.Beam([smo59475,smo59476]);
const dirsmo68458 = smo59477.getStemDirection();
smo59477.setStemDirection(dirsmo68458);
smo59478.setStemDirection(dirsmo68458);
smo59479.setStemDirection(dirsmo68458);
smo59480.setStemDirection(dirsmo68458);
const smo68458 = new VF.Beam([smo59477,smo59478,smo59479,smo59480]);
const dirsmo68459 = smo59482.getStemDirection();
smo59482.setStemDirection(dirsmo68459);
smo59483.setStemDirection(dirsmo68459);
const smo68459 = new VF.Beam([smo59482,smo59483]);
const dirsmo68460 = smo59484.getStemDirection();
smo59484.setStemDirection(dirsmo68460);
smo59485.setStemDirection(dirsmo68460);
smo59486.setStemDirection(dirsmo68460);
smo59487.setStemDirection(dirsmo68460);
const smo68460 = new VF.Beam([smo59484,smo59485,smo59486,smo59487]);
 
// formatting measures in staff group smo57677
fmtsmo5950519.format([smo59505v0,smo59505v1,smo64760v0,smo64760v1], 575);
const stavesmo59505 = new VF.Stave(677, 2049, 589);
stavesmo59505.setAttribute('id', 'stavesmo59505');
stavesmo59505.setBegBarType(VF.Barline.type.NONE);
stavesmo59505.setContext(context);
stavesmo59505.draw();
smo59505v0.draw(context, stavesmo59505);
smo59505v1.draw(context, stavesmo59505);
smo68457.setContext(context);
smo68457.draw();
smo68458.setContext(context);
smo68458.draw();
smo68459.setContext(context);
smo68459.draw();
smo68460.setContext(context);
smo68460.draw();
const stavesmo64760 = new VF.Stave(677, 2136, 589);
stavesmo64760.setAttribute('id', 'stavesmo64760');
stavesmo64760.setBegBarType(VF.Barline.type.NONE);
stavesmo64760.setContext(context);
stavesmo64760.draw();
smo64760v0.draw(context, stavesmo64760);
smo64760v1.draw(context, stavesmo64760);
const fmtsmo5953720 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo59537v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59537v0ar = [];
const smo59506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59506'] = smo59506;
smo59506.setAttribute('id', 'smo59506');
smo59537v0ar.push(smo59506);
const smo59507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo59507'] = smo59507;
smo59507.setAttribute('id', 'smo59507');
smo59537v0ar.push(smo59507);
const smo59508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo59508'] = smo59508;
smo59508.setAttribute('id', 'smo59508');
smo59537v0ar.push(smo59508);
const smo59509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo59509'] = smo59509;
smo59509.setAttribute('id', 'smo59509');
smo59537v0ar.push(smo59509);
const smo59510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo59510'] = smo59510;
smo59510.setAttribute('id', 'smo59510');
smo59537v0ar.push(smo59510);
const smo59511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo59511'] = smo59511;
smo59511.setAttribute('id', 'smo59511');
smo59537v0ar.push(smo59511);
const smo59512 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo59512'] = smo59512;
smo59512.setAttribute('id', 'smo59512');
smo59537v0ar.push(smo59512);
const smo59513 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59513'] = smo59513;
smo59513.setAttribute('id', 'smo59513');
smo59537v0ar.push(smo59513);
const smo59514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo59514'] = smo59514;
smo59514.setAttribute('id', 'smo59514');
smo59537v0ar.push(smo59514);
const smo59515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo59515'] = smo59515;
smo59515.setAttribute('id', 'smo59515');
smo59537v0ar.push(smo59515);
const smo59516 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo59516'] = smo59516;
smo59516.setAttribute('id', 'smo59516');
smo59537v0ar.push(smo59516);
const smo59517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
noteHash['smo59517'] = smo59517;
smo59517.setAttribute('id', 'smo59517');
smo59537v0ar.push(smo59517);
const smo59518 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
noteHash['smo59518'] = smo59518;
smo59518.setAttribute('id', 'smo59518');
smo59537v0ar.push(smo59518);
const smo59519 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo59519'] = smo59519;
smo59519.setAttribute('id', 'smo59519');
smo59537v0ar.push(smo59519);
smo59537v0.addTickables(smo59537v0ar)
fmtsmo5953720.joinVoices([smo59537v0]);
const smo59537v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59537v1ar = [];
const smo59520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59520'] = smo59520;
smo59520.setAttribute('id', 'smo59520');
smo59520.setStyle({ fillStyle: '#aaaaaa7f' });
smo59537v1ar.push(smo59520);
const smo59521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59521'] = smo59521;
smo59521.setAttribute('id', 'smo59521');
smo59521.setStyle({ fillStyle: '#aaaaaa7f' });
smo59521.addModifier(new VF.Dot(), 0);
smo59521.addModifier(new VF.Dot(), 0);
smo59537v1ar.push(smo59521);
const smo59522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59522'] = smo59522;
smo59522.setAttribute('id', 'smo59522');
smo59522.setStyle({ fillStyle: '#aaaaaa7f' });
smo59537v1ar.push(smo59522);
const smo59523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo59523'] = smo59523;
smo59523.setAttribute('id', 'smo59523');
smo59523.setStyle({ fillStyle: '#aaaaaa7f' });
smo59523.addModifier(new VF.Dot(), 0);
smo59523.addModifier(new VF.Dot(), 0);
smo59537v1ar.push(smo59523);
smo59537v1.addTickables(smo59537v1ar)
fmtsmo5953720.joinVoices([smo59537v1]);
const fmtsmo6478220 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo64782v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64782v0ar = [];
const smo64761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64761'] = smo64761;
smo64761.setAttribute('id', 'smo64761');
smo64782v0ar.push(smo64761);
const smo64762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo64762'] = smo64762;
smo64762.setAttribute('id', 'smo64762');
smo64762.addModifier(new VF.Dot(), 0);
smo64782v0ar.push(smo64762);
const smo64763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo64763'] = smo64763;
smo64763.setAttribute('id', 'smo64763');
smo64782v0ar.push(smo64763);
const smo64764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo64764'] = smo64764;
smo64764.setAttribute('id', 'smo64764');
smo64782v0ar.push(smo64764);
const smo64765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo64765'] = smo64765;
smo64765.setAttribute('id', 'smo64765');
smo64765.addModifier(new VF.Dot(), 0);
smo64782v0ar.push(smo64765);
const smo64766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
noteHash['smo64766'] = smo64766;
smo64766.setAttribute('id', 'smo64766');
smo64782v0ar.push(smo64766);
smo64782v0.addTickables(smo64782v0ar)
fmtsmo6478220.joinVoices([smo64782v0]);
const smo64782v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64782v1ar = [];
const smo64767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n"]}'))
noteHash['smo64767'] = smo64767;
smo64767.setAttribute('id', 'smo64767');
smo64767.setStyle({ fillStyle: "#115511" });
smo64782v1ar.push(smo64767);
const smo64768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n"]}'))
noteHash['smo64768'] = smo64768;
smo64768.setAttribute('id', 'smo64768');
smo64768.setStyle({ fillStyle: "#115511" });
smo64782v1ar.push(smo64768);
smo64782v1.addTickables(smo64782v1ar)
fmtsmo6478220.joinVoices([smo64782v1]);
// create beam groups and tuplets for format grp smo57677 before formatting
const dirsmo68465 = smo59507.getStemDirection();
smo59507.setStemDirection(dirsmo68465);
smo59508.setStemDirection(dirsmo68465);
const smo68465 = new VF.Beam([smo59507,smo59508]);
const dirsmo68466 = smo59509.getStemDirection();
smo59509.setStemDirection(dirsmo68466);
smo59510.setStemDirection(dirsmo68466);
smo59511.setStemDirection(dirsmo68466);
smo59512.setStemDirection(dirsmo68466);
const smo68466 = new VF.Beam([smo59509,smo59510,smo59511,smo59512]);
const dirsmo68467 = smo59514.getStemDirection();
smo59514.setStemDirection(dirsmo68467);
smo59515.setStemDirection(dirsmo68467);
const smo68467 = new VF.Beam([smo59514,smo59515]);
const dirsmo68468 = smo59516.getStemDirection();
smo59516.setStemDirection(dirsmo68468);
smo59517.setStemDirection(dirsmo68468);
smo59518.setStemDirection(dirsmo68468);
smo59519.setStemDirection(dirsmo68468);
const smo68468 = new VF.Beam([smo59516,smo59517,smo59518,smo59519]);
 
// formatting measures in staff group smo57677
fmtsmo5953720.format([smo59537v0,smo59537v1,smo64782v0,smo64782v1], 529);
const stavesmo59537 = new VF.Stave(1266, 2049, 543);
stavesmo59537.setAttribute('id', 'stavesmo59537');
stavesmo59537.setBegBarType(VF.Barline.type.NONE);
stavesmo59537.setContext(context);
stavesmo59537.draw();
smo59537v0.draw(context, stavesmo59537);
smo59537v1.draw(context, stavesmo59537);
smo68465.setContext(context);
smo68465.draw();
smo68466.setContext(context);
smo68466.draw();
smo68467.setContext(context);
smo68467.draw();
smo68468.setContext(context);
smo68468.draw();
const stavesmo64782 = new VF.Stave(1266, 2136, 543);
stavesmo64782.setAttribute('id', 'stavesmo64782');
stavesmo64782.setBegBarType(VF.Barline.type.NONE);
stavesmo64782.setContext(context);
stavesmo64782.draw();
smo64782v0.draw(context, stavesmo64782);
smo64782v1.draw(context, stavesmo64782);
const rightsmo57677stavesmo595371 = new VF.StaveConnector(stavesmo59537, stavesmo64782).setType(0);
rightsmo57677stavesmo595371.setContext(context).draw();
const smo70694 = new VF.StaveTie({ first_note: smo64344, last_note: smo64345, first_indices: [0], last_indices: [0]});
smo70694.setContext(context).draw();
const smo70695 = new VF.StaveTie({ first_note: smo64347, last_note: smo64348, first_indices: [0], last_indices: [0]});
smo70695.setContext(context).draw();
const smo70696 = new VF.StaveTie({ first_note: smo64366, last_note: smo64367, first_indices: [0], last_indices: [0]});
smo70696.setContext(context).draw();
const smo70697 = new VF.StaveTie({ first_note: smo64369, last_note: smo64370, first_indices: [0], last_indices: [0]});
smo70697.setContext(context).draw();
const smo70698 = new VF.StaveTie({ first_note: smo64388, last_note: smo64389, first_indices: [0], last_indices: [0]});
smo70698.setContext(context).draw();
const smo70699 = new VF.StaveTie({ first_note: smo64391, last_note: smo64392, first_indices: [0], last_indices: [0]});
smo70699.setContext(context).draw();
const smo70700 = new VF.StaveTie({ first_note: smo64410, last_note: smo64411, first_indices: [0], last_indices: [0]});
smo70700.setContext(context).draw();
const smo70701 = new VF.StaveTie({ first_note: smo64413, last_note: smo64414, first_indices: [0], last_indices: [0]});
smo70701.setContext(context).draw();
const smo70702 = new VF.StaveTie({ first_note: smo64432, last_note: smo64433, first_indices: [0], last_indices: [0]});
smo70702.setContext(context).draw();
const smo70703 = new VF.StaveTie({ first_note: smo64435, last_note: smo64436, first_indices: [0], last_indices: [0]});
smo70703.setContext(context).draw();
const smo70704 = new VF.StaveTie({ first_note: smo64454, last_note: smo64455, first_indices: [0], last_indices: [0]});
smo70704.setContext(context).draw();
const smo70705 = new VF.StaveTie({ first_note: smo64457, last_note: smo64458, first_indices: [0], last_indices: [0]});
smo70705.setContext(context).draw();
const smo70706 = new VF.StaveTie({ first_note: smo64476, last_note: smo64477, first_indices: [0], last_indices: [0]});
smo70706.setContext(context).draw();
const smo70707 = new VF.StaveTie({ first_note: smo64479, last_note: smo64480, first_indices: [0], last_indices: [0]});
smo70707.setContext(context).draw();
const smo70708 = new VF.StaveTie({ first_note: smo64498, last_note: smo64499, first_indices: [0], last_indices: [0]});
smo70708.setContext(context).draw();
const smo70709 = new VF.StaveTie({ first_note: smo64501, last_note: smo64502, first_indices: [0], last_indices: [0]});
smo70709.setContext(context).draw();
const smo70710 = new VF.StaveTie({ first_note: smo64520, last_note: smo64521, first_indices: [0], last_indices: [0]});
smo70710.setContext(context).draw();
const smo70711 = new VF.StaveTie({ first_note: smo64523, last_note: smo64524, first_indices: [0], last_indices: [0]});
smo70711.setContext(context).draw();
const smo70712 = new VF.StaveTie({ first_note: smo64542, last_note: smo64543, first_indices: [0], last_indices: [0]});
smo70712.setContext(context).draw();
const smo70713 = new VF.StaveTie({ first_note: smo64545, last_note: smo64546, first_indices: [0], last_indices: [0]});
smo70713.setContext(context).draw();
const smo70714 = new VF.StaveTie({ first_note: smo64564, last_note: smo64565, first_indices: [0], last_indices: [0]});
smo70714.setContext(context).draw();
const smo70715 = new VF.StaveTie({ first_note: smo64567, last_note: smo64568, first_indices: [0], last_indices: [0]});
smo70715.setContext(context).draw();
const smo70716 = new VF.StaveTie({ first_note: smo64586, last_note: smo64587, first_indices: [0], last_indices: [0]});
smo70716.setContext(context).draw();
const smo70717 = new VF.StaveTie({ first_note: smo64589, last_note: smo64590, first_indices: [0], last_indices: [0]});
smo70717.setContext(context).draw();
const smo70718 = new VF.StaveTie({ first_note: smo64608, last_note: smo64609, first_indices: [0], last_indices: [0]});
smo70718.setContext(context).draw();
const smo70719 = new VF.StaveTie({ first_note: smo64611, last_note: smo64612, first_indices: [0], last_indices: [0]});
smo70719.setContext(context).draw();
const smo70720 = new VF.StaveTie({ first_note: smo64630, last_note: smo64631, first_indices: [0], last_indices: [0]});
smo70720.setContext(context).draw();
const smo70721 = new VF.StaveTie({ first_note: smo64633, last_note: smo64634, first_indices: [0], last_indices: [0]});
smo70721.setContext(context).draw();
const smo70722 = new VF.StaveTie({ first_note: smo64652, last_note: smo64653, first_indices: [0], last_indices: [0]});
smo70722.setContext(context).draw();
const smo70723 = new VF.StaveTie({ first_note: smo64655, last_note: smo64656, first_indices: [0], last_indices: [0]});
smo70723.setContext(context).draw();
const smo70724 = new VF.StaveTie({ first_note: smo64674, last_note: smo64675, first_indices: [0], last_indices: [0]});
smo70724.setContext(context).draw();
const smo70725 = new VF.StaveTie({ first_note: smo64677, last_note: smo64678, first_indices: [0], last_indices: [0]});
smo70725.setContext(context).draw();
const smo70726 = new VF.StaveTie({ first_note: smo64696, last_note: smo64697, first_indices: [0], last_indices: [0]});
smo70726.setContext(context).draw();
const smo70727 = new VF.StaveTie({ first_note: smo64699, last_note: smo64700, first_indices: [0], last_indices: [0]});
smo70727.setContext(context).draw();
const smo70728 = new VF.StaveTie({ first_note: smo64718, last_note: smo64719, first_indices: [0], last_indices: [0]});
smo70728.setContext(context).draw();
const smo70729 = new VF.StaveTie({ first_note: smo64721, last_note: smo64722, first_indices: [0], last_indices: [0]});
smo70729.setContext(context).draw();
const smo70730 = new VF.StaveTie({ first_note: smo64740, last_note: smo64741, first_indices: [0], last_indices: [0]});
smo70730.setContext(context).draw();
const smo70731 = new VF.StaveTie({ first_note: smo64743, last_note: smo64744, first_indices: [0], last_indices: [0]});
smo70731.setContext(context).draw();
const smo70732 = new VF.StaveTie({ first_note: smo64762, last_note: smo64763, first_indices: [0], last_indices: [0]});
smo70732.setContext(context).draw();
const smo70733 = new VF.StaveTie({ first_note: smo64765, last_note: smo64766, first_indices: [0], last_indices: [0]});
smo70733.setContext(context).draw();
}
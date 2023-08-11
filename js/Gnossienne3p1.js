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
const fmtsmo328750 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo32875v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo32875v0ar = [];
const smo32823 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo32823'] = smo32823;
smo32823.setAttribute('id', 'smo32823');
smo32875v0ar.push(smo32823);
const smo32825 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo32825'] = smo32825;
smo32825.setAttribute('id', 'smo32825');
smo32875v0ar.push(smo32825);
const smo32826 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
noteHash['smo32826'] = smo32826;
smo32826.setAttribute('id', 'smo32826');
const smo328260acc = new VF.Accidental('#');
smo32826.addModifier(smo328260acc, 0);
smo32875v0ar.push(smo32826);
const smo32827 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
noteHash['smo32827'] = smo32827;
smo32827.setAttribute('id', 'smo32827');
smo32875v0ar.push(smo32827);
const smo32828 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
noteHash['smo32828'] = smo32828;
smo32828.setAttribute('id', 'smo32828');
const smo328280acc = new VF.Accidental('#');
smo32828.addModifier(smo328280acc, 0);
smo32875v0ar.push(smo32828);
const smo32829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
noteHash['smo32829'] = smo32829;
smo32829.setAttribute('id', 'smo32829');
smo32875v0ar.push(smo32829);
const smo32830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
noteHash['smo32830'] = smo32830;
smo32830.setAttribute('id', 'smo32830');
smo32875v0ar.push(smo32830);
const smo32831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo32831'] = smo32831;
smo32831.setAttribute('id', 'smo32831');
smo32875v0ar.push(smo32831);
const smo32832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo32832'] = smo32832;
smo32832.setAttribute('id', 'smo32832');
smo32875v0ar.push(smo32832);
const smo32833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo32833'] = smo32833;
smo32833.setAttribute('id', 'smo32833');
smo32875v0ar.push(smo32833);
const smo32834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
noteHash['smo32834'] = smo32834;
smo32834.setAttribute('id', 'smo32834');
smo32875v0ar.push(smo32834);
const smo32835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
noteHash['smo32835'] = smo32835;
smo32835.setAttribute('id', 'smo32835');
smo32875v0ar.push(smo32835);
const smo32836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo32836'] = smo32836;
smo32836.setAttribute('id', 'smo32836');
smo32875v0ar.push(smo32836);
const smo32837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo32837'] = smo32837;
smo32837.setAttribute('id', 'smo32837');
smo32875v0ar.push(smo32837);
const smo32838 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo32838'] = smo32838;
smo32838.setAttribute('id', 'smo32838');
smo32875v0ar.push(smo32838);
const smo32839 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo32839'] = smo32839;
smo32839.setAttribute('id', 'smo32839');
smo32875v0ar.push(smo32839);
const smo32840 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo32840'] = smo32840;
smo32840.setAttribute('id', 'smo32840');
smo32875v0ar.push(smo32840);
const smo32841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo32841'] = smo32841;
smo32841.setAttribute('id', 'smo32841');
smo32875v0ar.push(smo32841);
const smo32842 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo32842'] = smo32842;
smo32842.setAttribute('id', 'smo32842');
smo32875v0ar.push(smo32842);
const smo32843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo32843'] = smo32843;
smo32843.setAttribute('id', 'smo32843');
smo32875v0ar.push(smo32843);
const smo32844 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo32844'] = smo32844;
smo32844.setAttribute('id', 'smo32844');
smo32875v0ar.push(smo32844);
const smo32845 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
noteHash['smo32845'] = smo32845;
smo32845.setAttribute('id', 'smo32845');
smo32875v0ar.push(smo32845);
const smo32846 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
noteHash['smo32846'] = smo32846;
smo32846.setAttribute('id', 'smo32846');
smo32875v0ar.push(smo32846);
const smo32847 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
noteHash['smo32847'] = smo32847;
smo32847.setAttribute('id', 'smo32847');
smo32875v0ar.push(smo32847);
const smo32848 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
noteHash['smo32848'] = smo32848;
smo32848.setAttribute('id', 'smo32848');
smo32875v0ar.push(smo32848);
const smo32849 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
noteHash['smo32849'] = smo32849;
smo32849.setAttribute('id', 'smo32849');
smo32875v0ar.push(smo32849);
smo32875v0.addTickables(smo32875v0ar)
fmtsmo328750.joinVoices([smo32875v0]);
const smo32875v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo32875v1ar = [];
const smo32850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo32850'] = smo32850;
smo32850.setAttribute('id', 'smo32850');
smo32850.setStyle({ fillStyle: '#aaaaaa7f' });
smo32875v1ar.push(smo32850);
const smo32851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
noteHash['smo32851'] = smo32851;
smo32851.setAttribute('id', 'smo32851');
smo32851.setStyle({ fillStyle: "#115511" });
smo32875v1ar.push(smo32851);
const smo32852 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
noteHash['smo32852'] = smo32852;
smo32852.setAttribute('id', 'smo32852');
smo32852.setStyle({ fillStyle: "#115511" });
smo32875v1ar.push(smo32852);
const smo32853 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo32853'] = smo32853;
smo32853.setAttribute('id', 'smo32853');
smo32853.setStyle({ fillStyle: '#aaaaaa7f' });
smo32875v1ar.push(smo32853);
const smo32854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
noteHash['smo32854'] = smo32854;
smo32854.setAttribute('id', 'smo32854');
smo32854.setStyle({ fillStyle: "#115511" });
smo32875v1ar.push(smo32854);
const smo32855 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
noteHash['smo32855'] = smo32855;
smo32855.setAttribute('id', 'smo32855');
smo32855.setStyle({ fillStyle: "#115511" });
smo32875v1ar.push(smo32855);
const smo32856 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo32856'] = smo32856;
smo32856.setAttribute('id', 'smo32856');
smo32856.setStyle({ fillStyle: '#aaaaaa7f' });
smo32875v1ar.push(smo32856);
const smo32857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo32857'] = smo32857;
smo32857.setAttribute('id', 'smo32857');
smo32857.setStyle({ fillStyle: '#aaaaaa7f' });
smo32875v1ar.push(smo32857);
const smo32858 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
noteHash['smo32858'] = smo32858;
smo32858.setAttribute('id', 'smo32858');
smo32858.setStyle({ fillStyle: "#115511" });
smo32875v1ar.push(smo32858);
const smo32859 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
noteHash['smo32859'] = smo32859;
smo32859.setAttribute('id', 'smo32859');
smo32859.setStyle({ fillStyle: "#115511" });
smo32875v1ar.push(smo32859);
smo32875v1.addTickables(smo32875v1ar)
fmtsmo328750.joinVoices([smo32875v1]);
const fmtsmo333830 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo33383v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33383v0ar = [];
const smo33351 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33351'] = smo33351;
smo33351.setAttribute('id', 'smo33351');
smo33383v0ar.push(smo33351);
const smo33352 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33352'] = smo33352;
smo33352.setAttribute('id', 'smo33352');
smo33352.setStyle({ fillStyle: '#aaaaaa7f' });
smo33352.addModifier(new VF.Dot(), 0);
smo33383v0ar.push(smo33352);
const smo33353 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33353'] = smo33353;
smo33353.setAttribute('id', 'smo33353');
smo33383v0ar.push(smo33353);
const smo33354 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33354'] = smo33354;
smo33354.setAttribute('id', 'smo33354');
smo33354.setStyle({ fillStyle: '#aaaaaa7f' });
smo33354.addModifier(new VF.Dot(), 0);
smo33383v0ar.push(smo33354);
const smo33355 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33355'] = smo33355;
smo33355.setAttribute('id', 'smo33355');
smo33383v0ar.push(smo33355);
const smo33356 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33356'] = smo33356;
smo33356.setAttribute('id', 'smo33356');
smo33383v0ar.push(smo33356);
const smo33357 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33357'] = smo33357;
smo33357.setAttribute('id', 'smo33357');
smo33383v0ar.push(smo33357);
const smo33358 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33358'] = smo33358;
smo33358.setAttribute('id', 'smo33358');
smo33383v0ar.push(smo33358);
const smo33359 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33359'] = smo33359;
smo33359.setAttribute('id', 'smo33359');
smo33383v0ar.push(smo33359);
const smo33360 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33360'] = smo33360;
smo33360.setAttribute('id', 'smo33360');
smo33383v0ar.push(smo33360);
const smo33361 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33361'] = smo33361;
smo33361.setAttribute('id', 'smo33361');
smo33383v0ar.push(smo33361);
const smo33362 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33362'] = smo33362;
smo33362.setAttribute('id', 'smo33362');
smo33362.setStyle({ fillStyle: '#aaaaaa7f' });
smo33362.addModifier(new VF.Dot(), 0);
smo33383v0ar.push(smo33362);
smo33383v0.addTickables(smo33383v0ar)
fmtsmo333830.joinVoices([smo33383v0]);
const smo33383v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33383v1ar = [];
const smo33363 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo33363'] = smo33363;
smo33363.setAttribute('id', 'smo33363');
smo33363.setStyle({ fillStyle: "#115511" });
smo33383v1ar.push(smo33363);
const smo33364 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo33364'] = smo33364;
smo33364.setAttribute('id', 'smo33364');
smo33364.setStyle({ fillStyle: "#115511" });
smo33383v1ar.push(smo33364);
const smo33365 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo33365'] = smo33365;
smo33365.setAttribute('id', 'smo33365');
smo33365.setStyle({ fillStyle: "#115511" });
smo33383v1ar.push(smo33365);
const smo33366 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo33366'] = smo33366;
smo33366.setAttribute('id', 'smo33366');
smo33366.setStyle({ fillStyle: "#115511" });
smo33383v1ar.push(smo33366);
const smo33367 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo33367'] = smo33367;
smo33367.setAttribute('id', 'smo33367');
smo33367.setStyle({ fillStyle: "#115511" });
smo33383v1ar.push(smo33367);
smo33383v1.addTickables(smo33383v1ar)
fmtsmo333830.joinVoices([smo33383v1]);
// create beam groups and tuplets for format grp smo33748 before formatting
const dirsmo34951 = smo32823.getStemDirection();
smo32823.setStemDirection(dirsmo34951);
smo32825.setStemDirection(dirsmo34951);
smo32826.setStemDirection(dirsmo34951);
smo32827.setStemDirection(dirsmo34951);
const smo34951 = new VF.Beam([smo32823,smo32825,smo32826,smo32827]);
const dirsmo34952 = smo32828.getStemDirection();
smo32828.setStemDirection(dirsmo34952);
smo32829.setStemDirection(dirsmo34952);
const smo34952 = new VF.Beam([smo32828,smo32829]);
const dirsmo34953 = smo32832.getStemDirection();
smo32832.setStemDirection(dirsmo34953);
smo32833.setStemDirection(dirsmo34953);
const smo34953 = new VF.Beam([smo32832,smo32833]);
const dirsmo34954 = smo32834.getStemDirection();
smo32834.setStemDirection(dirsmo34954);
smo32835.setStemDirection(dirsmo34954);
smo32836.setStemDirection(dirsmo34954);
smo32837.setStemDirection(dirsmo34954);
const smo34954 = new VF.Beam([smo32834,smo32835,smo32836,smo32837]);
const dirsmo34955 = smo32838.getStemDirection();
smo32838.setStemDirection(dirsmo34955);
smo32839.setStemDirection(dirsmo34955);
const smo34955 = new VF.Beam([smo32838,smo32839]);
const dirsmo34956 = smo32843.getStemDirection();
smo32843.setStemDirection(dirsmo34956);
smo32844.setStemDirection(dirsmo34956);
smo32845.setStemDirection(dirsmo34956);
smo32846.setStemDirection(dirsmo34956);
const smo34956 = new VF.Beam([smo32843,smo32844,smo32845,smo32846]);
const dirsmo34957 = smo32847.getStemDirection();
smo32847.setStemDirection(dirsmo34957);
smo32848.setStemDirection(dirsmo34957);
const smo34957 = new VF.Beam([smo32847,smo32848]);
 
// formatting measures in staff group smo33748
fmtsmo328750.format([smo32875v0,smo32875v1,smo33383v0,smo33383v1], 1094);
const stavesmo32875 = new VF.Stave(103, 187, 1174);
stavesmo32875.setAttribute('id', 'stavesmo32875');
stavesmo32875.setBegBarType(1);
stavesmo32875.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":60,"name":"Lent"}'), -1 * 35);
stavesmo32875.addClef('treble');
stavesmo32875.addTimeSignature('4/4');
stavesmo32875.setContext(context);
stavesmo32875.draw();
smo32875v0.draw(context, stavesmo32875);
smo32875v1.draw(context, stavesmo32875);
smo34951.setContext(context);
smo34951.draw();
smo34952.setContext(context);
smo34952.draw();
smo34953.setContext(context);
smo34953.draw();
smo34954.setContext(context);
smo34954.draw();
smo34955.setContext(context);
smo34955.draw();
smo34956.setContext(context);
smo34956.draw();
smo34957.setContext(context);
smo34957.draw();
const stavesmo33383 = new VF.Stave(103, 330, 1174);
stavesmo33383.setAttribute('id', 'stavesmo33383');
stavesmo33383.setBegBarType(1);
stavesmo33383.addClef('bass');
stavesmo33383.addTimeSignature('4/4');
stavesmo33383.setContext(context);
stavesmo33383.draw();
smo33383v0.draw(context, stavesmo33383);
smo33383v1.draw(context, stavesmo33383);
const leftsmo33748stavesmo328751 = new VF.StaveConnector(stavesmo32875, stavesmo33383).setType(3);
leftsmo33748stavesmo328751.setContext(context).draw();
const fmtsmo329201 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo32920v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo32920v0ar = [];
const smo32876 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo32876'] = smo32876;
smo32876.setAttribute('id', 'smo32876');
smo32920v0ar.push(smo32876);
const smo32877 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo32877'] = smo32877;
smo32877.setAttribute('id', 'smo32877');
smo32920v0ar.push(smo32877);
const smo32878 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo32878'] = smo32878;
smo32878.setAttribute('id', 'smo32878');
smo32920v0ar.push(smo32878);
const smo32879 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
noteHash['smo32879'] = smo32879;
smo32879.setAttribute('id', 'smo32879');
const smo328790acc = new VF.Accidental('#');
smo32879.addModifier(smo328790acc, 0);
smo32920v0ar.push(smo32879);
const smo32880 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
noteHash['smo32880'] = smo32880;
smo32880.setAttribute('id', 'smo32880');
smo32920v0ar.push(smo32880);
const smo32881 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo32881'] = smo32881;
smo32881.setAttribute('id', 'smo32881');
smo32920v0ar.push(smo32881);
const smo32882 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo32882'] = smo32882;
smo32882.setAttribute('id', 'smo32882');
smo32920v0ar.push(smo32882);
const smo32883 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo32883'] = smo32883;
smo32883.setAttribute('id', 'smo32883');
smo32920v0ar.push(smo32883);
const smo32884 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo32884'] = smo32884;
smo32884.setAttribute('id', 'smo32884');
smo32920v0ar.push(smo32884);
const smo32885 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo32885'] = smo32885;
smo32885.setAttribute('id', 'smo32885');
smo32920v0ar.push(smo32885);
const smo32886 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo32886'] = smo32886;
smo32886.setAttribute('id', 'smo32886');
smo32920v0ar.push(smo32886);
const smo32887 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
const smo32888 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["bn/4"],"slash":false}'))
smo32888.setAttribute('id', 'smo32888');
const ggrpsmo32887 = new VF.GraceNoteGroup([smo32888]);
ggrpsmo32887.beamNotes();
smo32887.addModifier(ggrpsmo32887, 0);
noteHash['smo32887'] = smo32887;
smo32887.setAttribute('id', 'smo32887');
const smo328870acc = new VF.Accidental('n');
smo32887.addModifier(smo328870acc, 0);
smo32920v0ar.push(smo32887);
const smo32889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo32889'] = smo32889;
smo32889.setAttribute('id', 'smo32889');
smo32920v0ar.push(smo32889);
const smo32890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo32890'] = smo32890;
smo32890.setAttribute('id', 'smo32890');
smo32920v0ar.push(smo32890);
const smo32891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo32891'] = smo32891;
smo32891.setAttribute('id', 'smo32891');
smo32920v0ar.push(smo32891);
const smo32892 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo32892'] = smo32892;
smo32892.setAttribute('id', 'smo32892');
smo32920v0ar.push(smo32892);
const smo32893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo32893'] = smo32893;
smo32893.setAttribute('id', 'smo32893');
smo32920v0ar.push(smo32893);
const smo32894 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo32894'] = smo32894;
smo32894.setAttribute('id', 'smo32894');
smo32920v0ar.push(smo32894);
const smo32895 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo32895'] = smo32895;
smo32895.setAttribute('id', 'smo32895');
smo32920v0ar.push(smo32895);
const smo32896 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo32896'] = smo32896;
smo32896.setAttribute('id', 'smo32896');
smo32920v0ar.push(smo32896);
const smo32897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo32897'] = smo32897;
smo32897.setAttribute('id', 'smo32897');
smo32920v0ar.push(smo32897);
const smo32898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
const smo32899 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["bn/4"],"slash":false}'))
smo32899.setAttribute('id', 'smo32899');
const ggrpsmo32898 = new VF.GraceNoteGroup([smo32899]);
ggrpsmo32898.beamNotes();
smo32898.addModifier(ggrpsmo32898, 0);
noteHash['smo32898'] = smo32898;
smo32898.setAttribute('id', 'smo32898');
smo32920v0ar.push(smo32898);
smo32920v0.addTickables(smo32920v0ar)
fmtsmo329201.joinVoices([smo32920v0]);
const smo32920v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo32920v1ar = [];
const smo32900 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo32900'] = smo32900;
smo32900.setAttribute('id', 'smo32900');
smo32900.setStyle({ fillStyle: '#aaaaaa7f' });
smo32920v1ar.push(smo32900);
const smo32901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
noteHash['smo32901'] = smo32901;
smo32901.setAttribute('id', 'smo32901');
smo32901.setStyle({ fillStyle: "#115511" });
smo32920v1ar.push(smo32901);
const smo32902 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
noteHash['smo32902'] = smo32902;
smo32902.setAttribute('id', 'smo32902');
smo32902.setStyle({ fillStyle: "#115511" });
smo32920v1ar.push(smo32902);
const smo32903 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2dddd","dots":4,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo32903'] = smo32903;
smo32903.setAttribute('id', 'smo32903');
smo32903.setStyle({ fillStyle: '#aaaaaa7f' });
smo32903.addModifier(new VF.Dot(), 0);
smo32903.addModifier(new VF.Dot(), 0);
smo32903.addModifier(new VF.Dot(), 0);
smo32903.addModifier(new VF.Dot(), 0);
smo32920v1ar.push(smo32903);
const smo32904 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo32904'] = smo32904;
smo32904.setAttribute('id', 'smo32904');
smo32904.setStyle({ fillStyle: '#aaaaaa7f' });
smo32920v1ar.push(smo32904);
smo32920v1.addTickables(smo32920v1ar)
fmtsmo329201.joinVoices([smo32920v1]);
const fmtsmo334181 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo33418v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33418v0ar = [];
const smo33384 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33384'] = smo33384;
smo33384.setAttribute('id', 'smo33384');
smo33418v0ar.push(smo33384);
const smo33385 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33385'] = smo33385;
smo33385.setAttribute('id', 'smo33385');
smo33385.setStyle({ fillStyle: '#aaaaaa7f' });
smo33385.addModifier(new VF.Dot(), 0);
smo33418v0ar.push(smo33385);
const smo33386 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33386'] = smo33386;
smo33386.setAttribute('id', 'smo33386');
smo33418v0ar.push(smo33386);
const smo33387 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33387'] = smo33387;
smo33387.setAttribute('id', 'smo33387');
smo33418v0ar.push(smo33387);
const smo33388 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33388'] = smo33388;
smo33388.setAttribute('id', 'smo33388');
smo33418v0ar.push(smo33388);
const smo33389 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33389'] = smo33389;
smo33389.setAttribute('id', 'smo33389');
smo33418v0ar.push(smo33389);
const smo33390 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo33390'] = smo33390;
smo33390.setAttribute('id', 'smo33390');
smo33418v0ar.push(smo33390);
const smo33391 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo33391'] = smo33391;
smo33391.setAttribute('id', 'smo33391');
smo33418v0ar.push(smo33391);
const smo33392 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33392'] = smo33392;
smo33392.setAttribute('id', 'smo33392');
smo33418v0ar.push(smo33392);
const smo33393 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33393'] = smo33393;
smo33393.setAttribute('id', 'smo33393');
const smo333930acc = new VF.Accidental('#');
smo33393.addModifier(smo333930acc, 0);
smo33418v0ar.push(smo33393);
const smo33394 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33394'] = smo33394;
smo33394.setAttribute('id', 'smo33394');
smo33418v0ar.push(smo33394);
const smo33395 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33395'] = smo33395;
smo33395.setAttribute('id', 'smo33395');
smo33418v0ar.push(smo33395);
const smo33396 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo33396'] = smo33396;
smo33396.setAttribute('id', 'smo33396');
smo33418v0ar.push(smo33396);
const smo33397 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo33397'] = smo33397;
smo33397.setAttribute('id', 'smo33397');
smo33418v0ar.push(smo33397);
smo33418v0.addTickables(smo33418v0ar)
fmtsmo334181.joinVoices([smo33418v0]);
const smo33418v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33418v1ar = [];
const smo33398 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo33398'] = smo33398;
smo33398.setAttribute('id', 'smo33398');
smo33398.setStyle({ fillStyle: "#115511" });
smo33418v1ar.push(smo33398);
const smo33399 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo33399'] = smo33399;
smo33399.setAttribute('id', 'smo33399');
smo33399.setStyle({ fillStyle: "#115511" });
smo33418v1ar.push(smo33399);
const smo33400 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
noteHash['smo33400'] = smo33400;
smo33400.setAttribute('id', 'smo33400');
smo33400.setStyle({ fillStyle: "#115511" });
smo33418v1ar.push(smo33400);
const smo33401 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo33401'] = smo33401;
smo33401.setAttribute('id', 'smo33401');
smo33401.setStyle({ fillStyle: "#115511" });
smo33418v1ar.push(smo33401);
const smo33402 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
noteHash['smo33402'] = smo33402;
smo33402.setAttribute('id', 'smo33402');
smo33402.setStyle({ fillStyle: "#115511" });
smo33418v1ar.push(smo33402);
smo33418v1.addTickables(smo33418v1ar)
fmtsmo334181.joinVoices([smo33418v1]);
// create beam groups and tuplets for format grp smo33748 before formatting
const dirsmo34972 = smo32877.getStemDirection();
smo32877.setStemDirection(dirsmo34972);
smo32878.setStemDirection(dirsmo34972);
const smo34972 = new VF.Beam([smo32877,smo32878]);
const dirsmo34973 = smo32879.getStemDirection();
smo32879.setStemDirection(dirsmo34973);
smo32880.setStemDirection(dirsmo34973);
smo32881.setStemDirection(dirsmo34973);
smo32882.setStemDirection(dirsmo34973);
const smo34973 = new VF.Beam([smo32879,smo32880,smo32881,smo32882]);
const dirsmo34974 = smo32883.getStemDirection();
smo32883.setStemDirection(dirsmo34974);
smo32884.setStemDirection(dirsmo34974);
const smo34974 = new VF.Beam([smo32883,smo32884]);
const dirsmo34975 = smo32889.getStemDirection();
smo32889.setStemDirection(dirsmo34975);
smo32890.setStemDirection(dirsmo34975);
const smo34975 = new VF.Beam([smo32889,smo32890]);
const dirsmo34976 = smo32891.getStemDirection();
smo32891.setStemDirection(dirsmo34976);
smo32892.setStemDirection(dirsmo34976);
const smo34976 = new VF.Beam([smo32891,smo32892]);
const dirsmo34977 = smo32894.getStemDirection();
smo32894.setStemDirection(dirsmo34977);
smo32895.setStemDirection(dirsmo34977);
const smo34977 = new VF.Beam([smo32894,smo32895]);
 
// formatting measures in staff group smo33748
fmtsmo329201.format([smo32920v0,smo32920v1,smo33418v0,smo33418v1], 1117);
const stavesmo32920 = new VF.Stave(103, 490, 1174);
stavesmo32920.setAttribute('id', 'stavesmo32920');
stavesmo32920.setBegBarType(1);
stavesmo32920.addClef('treble');
stavesmo32920.setContext(context);
stavesmo32920.draw();
smo32920v0.draw(context, stavesmo32920);
smo32920v1.draw(context, stavesmo32920);
smo34972.setContext(context);
smo34972.draw();
smo34973.setContext(context);
smo34973.draw();
smo34974.setContext(context);
smo34974.draw();
smo34975.setContext(context);
smo34975.draw();
smo34976.setContext(context);
smo34976.draw();
smo34977.setContext(context);
smo34977.draw();
const stavesmo33418 = new VF.Stave(103, 638, 1174);
stavesmo33418.setAttribute('id', 'stavesmo33418');
stavesmo33418.setBegBarType(1);
stavesmo33418.addClef('bass');
stavesmo33418.setContext(context);
stavesmo33418.draw();
smo33418v0.draw(context, stavesmo33418);
smo33418v1.draw(context, stavesmo33418);
const leftsmo33748stavesmo329201 = new VF.StaveConnector(stavesmo32920, stavesmo33418).setType(3);
leftsmo33748stavesmo329201.setContext(context).draw();
const fmtsmo329652 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo32965v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo32965v0ar = [];
const smo32921 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo32921'] = smo32921;
smo32921.setAttribute('id', 'smo32921');
smo32965v0ar.push(smo32921);
const smo32922 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo32922'] = smo32922;
smo32922.setAttribute('id', 'smo32922');
smo32965v0ar.push(smo32922);
const smo32923 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo32923'] = smo32923;
smo32923.setAttribute('id', 'smo32923');
smo32965v0ar.push(smo32923);
const smo32924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo32924'] = smo32924;
smo32924.setAttribute('id', 'smo32924');
smo32965v0ar.push(smo32924);
const smo32925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo32925'] = smo32925;
smo32925.setAttribute('id', 'smo32925');
smo32965v0ar.push(smo32925);
const smo32926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo32926'] = smo32926;
smo32926.setAttribute('id', 'smo32926');
smo32965v0ar.push(smo32926);
const smo32927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo32927'] = smo32927;
smo32927.setAttribute('id', 'smo32927');
smo32965v0ar.push(smo32927);
const smo32928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
noteHash['smo32928'] = smo32928;
smo32928.setAttribute('id', 'smo32928');
const smo329280acc = new VF.Accidental('#');
smo32928.addModifier(smo329280acc, 0);
smo32965v0ar.push(smo32928);
const smo32929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo32929'] = smo32929;
smo32929.setAttribute('id', 'smo32929');
smo32965v0ar.push(smo32929);
const smo32930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo32930'] = smo32930;
smo32930.setAttribute('id', 'smo32930');
smo32965v0ar.push(smo32930);
const smo32931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo32931'] = smo32931;
smo32931.setAttribute('id', 'smo32931');
smo32965v0ar.push(smo32931);
const smo32932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo32932'] = smo32932;
smo32932.setAttribute('id', 'smo32932');
smo32965v0ar.push(smo32932);
const smo32933 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo32933'] = smo32933;
smo32933.setAttribute('id', 'smo32933');
smo32965v0ar.push(smo32933);
const smo32934 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/4/n"]}'))
noteHash['smo32934'] = smo32934;
smo32934.setAttribute('id', 'smo32934');
smo32965v0ar.push(smo32934);
const smo32935 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo32935'] = smo32935;
smo32935.setAttribute('id', 'smo32935');
smo32965v0ar.push(smo32935);
const smo32936 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo32936'] = smo32936;
smo32936.setAttribute('id', 'smo32936');
smo32965v0ar.push(smo32936);
const smo32937 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo32937'] = smo32937;
smo32937.setAttribute('id', 'smo32937');
smo32965v0ar.push(smo32937);
const smo32938 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo32938'] = smo32938;
smo32938.setAttribute('id', 'smo32938');
smo32965v0ar.push(smo32938);
const smo32939 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo32939'] = smo32939;
smo32939.setAttribute('id', 'smo32939');
smo32965v0ar.push(smo32939);
const smo32940 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
noteHash['smo32940'] = smo32940;
smo32940.setAttribute('id', 'smo32940');
smo32965v0ar.push(smo32940);
const smo32941 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo32941'] = smo32941;
smo32941.setAttribute('id', 'smo32941');
smo32965v0ar.push(smo32941);
const smo32942 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo32942'] = smo32942;
smo32942.setAttribute('id', 'smo32942');
smo32965v0ar.push(smo32942);
const smo32943 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo32943'] = smo32943;
smo32943.setAttribute('id', 'smo32943');
smo32965v0ar.push(smo32943);
const smo32944 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo32944'] = smo32944;
smo32944.setAttribute('id', 'smo32944');
smo32965v0ar.push(smo32944);
const smo32945 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo32945'] = smo32945;
smo32945.setAttribute('id', 'smo32945');
smo32965v0ar.push(smo32945);
const smo32946 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo32946'] = smo32946;
smo32946.setAttribute('id', 'smo32946');
smo32965v0ar.push(smo32946);
const smo32947 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo32947'] = smo32947;
smo32947.setAttribute('id', 'smo32947');
smo32965v0ar.push(smo32947);
const smo32948 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo32948'] = smo32948;
smo32948.setAttribute('id', 'smo32948');
smo32965v0ar.push(smo32948);
const smo32949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo32949'] = smo32949;
smo32949.setAttribute('id', 'smo32949');
smo32965v0ar.push(smo32949);
smo32965v0.addTickables(smo32965v0ar)
fmtsmo329652.joinVoices([smo32965v0]);
const fmtsmo334502 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo33450v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33450v0ar = [];
const smo33419 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33419'] = smo33419;
smo33419.setAttribute('id', 'smo33419');
smo33450v0ar.push(smo33419);
const smo33420 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo33420'] = smo33420;
smo33420.setAttribute('id', 'smo33420');
smo33450v0ar.push(smo33420);
const smo33421 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo33421'] = smo33421;
smo33421.setAttribute('id', 'smo33421');
smo33450v0ar.push(smo33421);
const smo33422 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33422'] = smo33422;
smo33422.setAttribute('id', 'smo33422');
smo33450v0ar.push(smo33422);
const smo33423 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo33423'] = smo33423;
smo33423.setAttribute('id', 'smo33423');
smo33450v0ar.push(smo33423);
const smo33424 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo33424'] = smo33424;
smo33424.setAttribute('id', 'smo33424');
smo33450v0ar.push(smo33424);
const smo33425 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33425'] = smo33425;
smo33425.setAttribute('id', 'smo33425');
smo33450v0ar.push(smo33425);
const smo33426 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo33426'] = smo33426;
smo33426.setAttribute('id', 'smo33426');
smo33450v0ar.push(smo33426);
const smo33427 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo33427'] = smo33427;
smo33427.setAttribute('id', 'smo33427');
smo33450v0ar.push(smo33427);
const smo33428 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33428'] = smo33428;
smo33428.setAttribute('id', 'smo33428');
smo33450v0ar.push(smo33428);
const smo33429 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo33429'] = smo33429;
smo33429.setAttribute('id', 'smo33429');
smo33450v0ar.push(smo33429);
const smo33430 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo33430'] = smo33430;
smo33430.setAttribute('id', 'smo33430');
smo33450v0ar.push(smo33430);
smo33450v0.addTickables(smo33450v0ar)
fmtsmo334502.joinVoices([smo33450v0]);
const smo33450v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33450v1ar = [];
const smo33431 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
noteHash['smo33431'] = smo33431;
smo33431.setAttribute('id', 'smo33431');
smo33431.setStyle({ fillStyle: "#115511" });
smo33450v1ar.push(smo33431);
const smo33432 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
noteHash['smo33432'] = smo33432;
smo33432.setAttribute('id', 'smo33432');
smo33432.setStyle({ fillStyle: "#115511" });
smo33450v1ar.push(smo33432);
const smo33433 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
noteHash['smo33433'] = smo33433;
smo33433.setAttribute('id', 'smo33433');
smo33433.setStyle({ fillStyle: "#115511" });
smo33450v1ar.push(smo33433);
const smo33434 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/1/n"]}'))
noteHash['smo33434'] = smo33434;
smo33434.setAttribute('id', 'smo33434');
smo33434.setStyle({ fillStyle: "#115511" });
smo33450v1ar.push(smo33434);
smo33450v1.addTickables(smo33450v1ar)
fmtsmo334502.joinVoices([smo33450v1]);
// create beam groups and tuplets for format grp smo33748 before formatting
const dirsmo34993 = smo32922.getStemDirection();
smo32922.setStemDirection(dirsmo34993);
smo32923.setStemDirection(dirsmo34993);
const smo34993 = new VF.Beam([smo32922,smo32923]);
const dirsmo34994 = smo32924.getStemDirection();
smo32924.setStemDirection(dirsmo34994);
smo32925.setStemDirection(dirsmo34994);
smo32926.setStemDirection(dirsmo34994);
smo32927.setStemDirection(dirsmo34994);
const smo34994 = new VF.Beam([smo32924,smo32925,smo32926,smo32927]);
const dirsmo34995 = smo32928.getStemDirection();
smo32928.setStemDirection(dirsmo34995);
smo32929.setStemDirection(dirsmo34995);
smo32930.setStemDirection(dirsmo34995);
smo32931.setStemDirection(dirsmo34995);
const smo34995 = new VF.Beam([smo32928,smo32929,smo32930,smo32931]);
const dirsmo34996 = smo32932.getStemDirection();
smo32932.setStemDirection(dirsmo34996);
smo32933.setStemDirection(dirsmo34996);
smo32934.setStemDirection(dirsmo34996);
smo32935.setStemDirection(dirsmo34996);
const smo34996 = new VF.Beam([smo32932,smo32933,smo32934,smo32935]);
const dirsmo34997 = smo32936.getStemDirection();
smo32936.setStemDirection(dirsmo34997);
smo32937.setStemDirection(dirsmo34997);
smo32938.setStemDirection(dirsmo34997);
smo32939.setStemDirection(dirsmo34997);
const smo34997 = new VF.Beam([smo32936,smo32937,smo32938,smo32939]);
const dirsmo34998 = smo32940.getStemDirection();
smo32940.setStemDirection(dirsmo34998);
smo32941.setStemDirection(dirsmo34998);
smo32942.setStemDirection(dirsmo34998);
smo32943.setStemDirection(dirsmo34998);
const smo34998 = new VF.Beam([smo32940,smo32941,smo32942,smo32943]);
const dirsmo34999 = smo32944.getStemDirection();
smo32944.setStemDirection(dirsmo34999);
smo32945.setStemDirection(dirsmo34999);
smo32946.setStemDirection(dirsmo34999);
smo32947.setStemDirection(dirsmo34999);
const smo34999 = new VF.Beam([smo32944,smo32945,smo32946,smo32947]);
 
// formatting measures in staff group smo33748
fmtsmo329652.format([smo32965v0,smo33450v0,smo33450v1], 1117);
const stavesmo32965 = new VF.Stave(103, 768, 1173);
stavesmo32965.setAttribute('id', 'stavesmo32965');
stavesmo32965.setBegBarType(1);
stavesmo32965.addClef('treble');
stavesmo32965.setContext(context);
stavesmo32965.draw();
smo32965v0.draw(context, stavesmo32965);
smo34993.setContext(context);
smo34993.draw();
smo34994.setContext(context);
smo34994.draw();
smo34995.setContext(context);
smo34995.draw();
smo34996.setContext(context);
smo34996.draw();
smo34997.setContext(context);
smo34997.draw();
smo34998.setContext(context);
smo34998.draw();
smo34999.setContext(context);
smo34999.draw();
const stavesmo33450 = new VF.Stave(103, 896, 1173);
stavesmo33450.setAttribute('id', 'stavesmo33450');
stavesmo33450.setBegBarType(1);
stavesmo33450.addClef('bass');
stavesmo33450.setContext(context);
stavesmo33450.draw();
smo33450v0.draw(context, stavesmo33450);
smo33450v1.draw(context, stavesmo33450);
const leftsmo33748stavesmo329651 = new VF.StaveConnector(stavesmo32965, stavesmo33450).setType(3);
leftsmo33748stavesmo329651.setContext(context).draw();
const fmtsmo330013 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo33001v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33001v0ar = [];
const smo32966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo32966'] = smo32966;
smo32966.setAttribute('id', 'smo32966');
smo33001v0ar.push(smo32966);
const smo32967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo32967'] = smo32967;
smo32967.setAttribute('id', 'smo32967');
smo33001v0ar.push(smo32967);
const smo32968 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo32968'] = smo32968;
smo32968.setAttribute('id', 'smo32968');
smo33001v0ar.push(smo32968);
const smo32969 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo32969'] = smo32969;
smo32969.setAttribute('id', 'smo32969');
const smo329690acc = new VF.Accidental('#');
smo32969.addModifier(smo329690acc, 0);
smo33001v0ar.push(smo32969);
const smo32970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo32970'] = smo32970;
smo32970.setAttribute('id', 'smo32970');
smo33001v0ar.push(smo32970);
const smo32971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo32971'] = smo32971;
smo32971.setAttribute('id', 'smo32971');
const smo329710acc = new VF.Accidental('#');
smo32971.addModifier(smo329710acc, 0);
smo33001v0ar.push(smo32971);
const smo32972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo32972'] = smo32972;
smo32972.setAttribute('id', 'smo32972');
smo33001v0ar.push(smo32972);
const smo32973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo32973'] = smo32973;
smo32973.setAttribute('id', 'smo32973');
smo33001v0ar.push(smo32973);
const smo32974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo32974'] = smo32974;
smo32974.setAttribute('id', 'smo32974');
smo33001v0ar.push(smo32974);
const smo32975 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo32975'] = smo32975;
smo32975.setAttribute('id', 'smo32975');
smo33001v0ar.push(smo32975);
const smo32976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo32976'] = smo32976;
smo32976.setAttribute('id', 'smo32976');
smo33001v0ar.push(smo32976);
const smo32977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo32977'] = smo32977;
smo32977.setAttribute('id', 'smo32977');
smo33001v0ar.push(smo32977);
const smo32978 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo32978'] = smo32978;
smo32978.setAttribute('id', 'smo32978');
smo33001v0ar.push(smo32978);
const smo32979 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo32979'] = smo32979;
smo32979.setAttribute('id', 'smo32979');
smo33001v0ar.push(smo32979);
const smo32980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo32980'] = smo32980;
smo32980.setAttribute('id', 'smo32980');
smo33001v0ar.push(smo32980);
const smo32981 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo32981'] = smo32981;
smo32981.setAttribute('id', 'smo32981');
const smo329810acc = new VF.Accidental('#');
smo32981.addModifier(smo329810acc, 0);
smo33001v0ar.push(smo32981);
const smo32982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo32982'] = smo32982;
smo32982.setAttribute('id', 'smo32982');
smo33001v0ar.push(smo32982);
const smo32983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo32983'] = smo32983;
smo32983.setAttribute('id', 'smo32983');
smo33001v0ar.push(smo32983);
const smo32984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo32984'] = smo32984;
smo32984.setAttribute('id', 'smo32984');
smo33001v0ar.push(smo32984);
const smo32985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo32985'] = smo32985;
smo32985.setAttribute('id', 'smo32985');
smo33001v0ar.push(smo32985);
smo33001v0.addTickables(smo33001v0ar)
fmtsmo330013.joinVoices([smo33001v0]);
const fmtsmo334863 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo33486v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33486v0ar = [];
const smo33451 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33451'] = smo33451;
smo33451.setAttribute('id', 'smo33451');
smo33486v0ar.push(smo33451);
const smo33452 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo33452'] = smo33452;
smo33452.setAttribute('id', 'smo33452');
smo33486v0ar.push(smo33452);
const smo33453 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo33453'] = smo33453;
smo33453.setAttribute('id', 'smo33453');
smo33486v0ar.push(smo33453);
const smo33454 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33454'] = smo33454;
smo33454.setAttribute('id', 'smo33454');
smo33486v0ar.push(smo33454);
const smo33455 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33455'] = smo33455;
smo33455.setAttribute('id', 'smo33455');
smo33486v0ar.push(smo33455);
const smo33456 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33456'] = smo33456;
smo33456.setAttribute('id', 'smo33456');
smo33486v0ar.push(smo33456);
const smo33457 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33457'] = smo33457;
smo33457.setAttribute('id', 'smo33457');
smo33486v0ar.push(smo33457);
const smo33458 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33458'] = smo33458;
smo33458.setAttribute('id', 'smo33458');
smo33486v0ar.push(smo33458);
const smo33459 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33459'] = smo33459;
smo33459.setAttribute('id', 'smo33459');
smo33486v0ar.push(smo33459);
const smo33460 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33460'] = smo33460;
smo33460.setAttribute('id', 'smo33460');
smo33486v0ar.push(smo33460);
const smo33461 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
noteHash['smo33461'] = smo33461;
smo33461.setAttribute('id', 'smo33461');
const smo334610acc = new VF.Accidental('#');
smo33461.addModifier(smo334610acc, 0);
smo33486v0ar.push(smo33461);
const smo33462 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
noteHash['smo33462'] = smo33462;
smo33462.setAttribute('id', 'smo33462');
smo33486v0ar.push(smo33462);
const smo33463 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33463'] = smo33463;
smo33463.setAttribute('id', 'smo33463');
smo33486v0ar.push(smo33463);
const smo33464 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
noteHash['smo33464'] = smo33464;
smo33464.setAttribute('id', 'smo33464');
smo33486v0ar.push(smo33464);
const smo33465 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
noteHash['smo33465'] = smo33465;
smo33465.setAttribute('id', 'smo33465');
smo33486v0ar.push(smo33465);
smo33486v0.addTickables(smo33486v0ar)
fmtsmo334863.joinVoices([smo33486v0]);
const smo33486v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33486v1ar = [];
const smo33466 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo33466'] = smo33466;
smo33466.setAttribute('id', 'smo33466');
smo33466.setStyle({ fillStyle: "#115511" });
smo33486v1ar.push(smo33466);
const smo33467 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo33467'] = smo33467;
smo33467.setAttribute('id', 'smo33467');
smo33467.setStyle({ fillStyle: "#115511" });
smo33486v1ar.push(smo33467);
const smo33468 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo33468'] = smo33468;
smo33468.setAttribute('id', 'smo33468');
smo33468.setStyle({ fillStyle: "#115511" });
smo33486v1ar.push(smo33468);
const smo33469 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/1/n"]}'))
noteHash['smo33469'] = smo33469;
smo33469.setAttribute('id', 'smo33469');
smo33469.setStyle({ fillStyle: "#115511" });
smo33486v1ar.push(smo33469);
const smo33470 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/1/n"]}'))
noteHash['smo33470'] = smo33470;
smo33470.setAttribute('id', 'smo33470');
smo33470.setStyle({ fillStyle: "#115511" });
smo33486v1ar.push(smo33470);
smo33486v1.addTickables(smo33486v1ar)
fmtsmo334863.joinVoices([smo33486v1]);
// create beam groups and tuplets for format grp smo33748 before formatting
const dirsmo35013 = smo32967.getStemDirection();
smo32967.setStemDirection(dirsmo35013);
smo32968.setStemDirection(dirsmo35013);
smo32969.setStemDirection(dirsmo35013);
smo32970.setStemDirection(dirsmo35013);
const smo35013 = new VF.Beam([smo32967,smo32968,smo32969,smo32970]);
const dirsmo35014 = smo32971.getStemDirection();
smo32971.setStemDirection(dirsmo35014);
smo32972.setStemDirection(dirsmo35014);
const smo35014 = new VF.Beam([smo32971,smo32972]);
const dirsmo35015 = smo32975.getStemDirection();
smo32975.setStemDirection(dirsmo35015);
smo32976.setStemDirection(dirsmo35015);
const smo35015 = new VF.Beam([smo32975,smo32976]);
const dirsmo35016 = smo32977.getStemDirection();
smo32977.setStemDirection(dirsmo35016);
smo32978.setStemDirection(dirsmo35016);
smo32979.setStemDirection(dirsmo35016);
smo32980.setStemDirection(dirsmo35016);
const smo35016 = new VF.Beam([smo32977,smo32978,smo32979,smo32980]);
const dirsmo35017 = smo32981.getStemDirection();
smo32981.setStemDirection(dirsmo35017);
smo32982.setStemDirection(dirsmo35017);
const smo35017 = new VF.Beam([smo32981,smo32982]);
 
// formatting measures in staff group smo33748
fmtsmo330013.format([smo33001v0,smo33486v0,smo33486v1], 1117);
const stavesmo33001 = new VF.Stave(103, 1035, 1173);
stavesmo33001.setAttribute('id', 'stavesmo33001');
stavesmo33001.setBegBarType(1);
stavesmo33001.addClef('treble');
stavesmo33001.setContext(context);
stavesmo33001.draw();
smo33001v0.draw(context, stavesmo33001);
smo35013.setContext(context);
smo35013.draw();
smo35014.setContext(context);
smo35014.draw();
smo35015.setContext(context);
smo35015.draw();
smo35016.setContext(context);
smo35016.draw();
smo35017.setContext(context);
smo35017.draw();
const stavesmo33486 = new VF.Stave(103, 1164, 1173);
stavesmo33486.setAttribute('id', 'stavesmo33486');
stavesmo33486.setBegBarType(1);
stavesmo33486.addClef('bass');
stavesmo33486.setContext(context);
stavesmo33486.draw();
smo33486v0.draw(context, stavesmo33486);
smo33486v1.draw(context, stavesmo33486);
const leftsmo33748stavesmo330011 = new VF.StaveConnector(stavesmo33001, stavesmo33486).setType(3);
leftsmo33748stavesmo330011.setContext(context).draw();
const fmtsmo330454 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo33045v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33045v0ar = [];
const smo33002 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo33002'] = smo33002;
smo33002.setAttribute('id', 'smo33002');
smo33045v0ar.push(smo33002);
const smo33003 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo33003'] = smo33003;
smo33003.setAttribute('id', 'smo33003');
smo33045v0ar.push(smo33003);
const smo33004 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo33004'] = smo33004;
smo33004.setAttribute('id', 'smo33004');
const smo330040acc = new VF.Accidental('#');
smo33004.addModifier(smo330040acc, 0);
smo33045v0ar.push(smo33004);
const smo33005 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo33005'] = smo33005;
smo33005.setAttribute('id', 'smo33005');
smo33045v0ar.push(smo33005);
const smo33006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo33006'] = smo33006;
smo33006.setAttribute('id', 'smo33006');
const smo330060acc = new VF.Accidental('#');
smo33006.addModifier(smo330060acc, 0);
smo33045v0ar.push(smo33006);
const smo33007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo33007'] = smo33007;
smo33007.setAttribute('id', 'smo33007');
smo33045v0ar.push(smo33007);
const smo33008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo33008'] = smo33008;
smo33008.setAttribute('id', 'smo33008');
smo33045v0ar.push(smo33008);
const smo33009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33009'] = smo33009;
smo33009.setAttribute('id', 'smo33009');
smo33045v0ar.push(smo33009);
const smo33010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo33010'] = smo33010;
smo33010.setAttribute('id', 'smo33010');
smo33045v0ar.push(smo33010);
const smo33011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo33011'] = smo33011;
smo33011.setAttribute('id', 'smo33011');
smo33045v0ar.push(smo33011);
const smo33012 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo33012'] = smo33012;
smo33012.setAttribute('id', 'smo33012');
smo33045v0ar.push(smo33012);
const smo33013 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo33013'] = smo33013;
smo33013.setAttribute('id', 'smo33013');
smo33045v0ar.push(smo33013);
const smo33014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo33014'] = smo33014;
smo33014.setAttribute('id', 'smo33014');
smo33045v0ar.push(smo33014);
const smo33015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo33015'] = smo33015;
smo33015.setAttribute('id', 'smo33015');
smo33045v0ar.push(smo33015);
const smo33016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo33016'] = smo33016;
smo33016.setAttribute('id', 'smo33016');
const smo330160acc = new VF.Accidental('#');
smo33016.addModifier(smo330160acc, 0);
smo33045v0ar.push(smo33016);
const smo33017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo33017'] = smo33017;
smo33017.setAttribute('id', 'smo33017');
smo33045v0ar.push(smo33017);
const smo33018 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo33018'] = smo33018;
smo33018.setAttribute('id', 'smo33018');
smo33045v0ar.push(smo33018);
const smo33019 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33019'] = smo33019;
smo33019.setAttribute('id', 'smo33019');
smo33045v0ar.push(smo33019);
const smo33020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
const smo33021 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["f#/4"],"slash":false}'))
smo33021.setAttribute('id', 'smo33021');
const acc0smo33021 = new VF.Accidental('#');
smo33021.addModifier(acc0smo33021, 0)
const ggrpsmo33020 = new VF.GraceNoteGroup([smo33021]);
ggrpsmo33020.beamNotes();
smo33020.addModifier(ggrpsmo33020, 0);
noteHash['smo33020'] = smo33020;
smo33020.setAttribute('id', 'smo33020');
const smo330200acc = new VF.Accidental('n');
smo33020.addModifier(smo330200acc, 0);
smo33045v0ar.push(smo33020);
const smo33022 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo33022'] = smo33022;
smo33022.setAttribute('id', 'smo33022');
smo33045v0ar.push(smo33022);
const smo33023 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo33023'] = smo33023;
smo33023.setAttribute('id', 'smo33023');
smo33045v0ar.push(smo33023);
const smo33024 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo33024'] = smo33024;
smo33024.setAttribute('id', 'smo33024');
smo33045v0ar.push(smo33024);
const smo33025 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo33025'] = smo33025;
smo33025.setAttribute('id', 'smo33025');
const smo330250acc = new VF.Accidental('#');
smo33025.addModifier(smo330250acc, 0);
smo33045v0ar.push(smo33025);
const smo33026 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo33026'] = smo33026;
smo33026.setAttribute('id', 'smo33026');
smo33045v0ar.push(smo33026);
const smo33027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo33027'] = smo33027;
smo33027.setAttribute('id', 'smo33027');
smo33045v0ar.push(smo33027);
const smo33028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo33028'] = smo33028;
smo33028.setAttribute('id', 'smo33028');
smo33045v0ar.push(smo33028);
const smo33029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo33029'] = smo33029;
smo33029.setAttribute('id', 'smo33029');
smo33045v0ar.push(smo33029);
smo33045v0.addTickables(smo33045v0ar)
fmtsmo330454.joinVoices([smo33045v0]);
const fmtsmo335224 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo33522v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33522v0ar = [];
const smo33487 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33487'] = smo33487;
smo33487.setAttribute('id', 'smo33487');
smo33522v0ar.push(smo33487);
const smo33488 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33488'] = smo33488;
smo33488.setAttribute('id', 'smo33488');
smo33522v0ar.push(smo33488);
const smo33489 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33489'] = smo33489;
smo33489.setAttribute('id', 'smo33489');
smo33522v0ar.push(smo33489);
const smo33490 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33490'] = smo33490;
smo33490.setAttribute('id', 'smo33490');
smo33522v0ar.push(smo33490);
const smo33491 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33491'] = smo33491;
smo33491.setAttribute('id', 'smo33491');
smo33522v0ar.push(smo33491);
const smo33492 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33492'] = smo33492;
smo33492.setAttribute('id', 'smo33492');
smo33522v0ar.push(smo33492);
const smo33493 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33493'] = smo33493;
smo33493.setAttribute('id', 'smo33493');
smo33522v0ar.push(smo33493);
const smo33494 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
noteHash['smo33494'] = smo33494;
smo33494.setAttribute('id', 'smo33494');
const smo334940acc = new VF.Accidental('#');
smo33494.addModifier(smo334940acc, 0);
smo33522v0ar.push(smo33494);
const smo33495 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
noteHash['smo33495'] = smo33495;
smo33495.setAttribute('id', 'smo33495');
smo33522v0ar.push(smo33495);
const smo33496 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33496'] = smo33496;
smo33496.setAttribute('id', 'smo33496');
smo33522v0ar.push(smo33496);
const smo33497 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","c#/4/n","f#/4/n"]}'))
noteHash['smo33497'] = smo33497;
smo33497.setAttribute('id', 'smo33497');
const smo334971acc = new VF.Accidental('#');
smo33497.addModifier(smo334971acc, 1);
const smo334972acc = new VF.Accidental('#');
smo33497.addModifier(smo334972acc, 2);
smo33522v0ar.push(smo33497);
const smo33498 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","c#/4/n","f#/4/n"]}'))
noteHash['smo33498'] = smo33498;
smo33498.setAttribute('id', 'smo33498');
smo33522v0ar.push(smo33498);
const smo33499 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33499'] = smo33499;
smo33499.setAttribute('id', 'smo33499');
smo33522v0ar.push(smo33499);
const smo33500 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33500'] = smo33500;
smo33500.setAttribute('id', 'smo33500');
smo33522v0ar.push(smo33500);
const smo33501 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33501'] = smo33501;
smo33501.setAttribute('id', 'smo33501');
smo33522v0ar.push(smo33501);
smo33522v0.addTickables(smo33522v0ar)
fmtsmo335224.joinVoices([smo33522v0]);
const smo33522v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33522v1ar = [];
const smo33502 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo33502'] = smo33502;
smo33502.setAttribute('id', 'smo33502');
smo33502.setStyle({ fillStyle: "#115511" });
smo33522v1ar.push(smo33502);
const smo33503 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo33503'] = smo33503;
smo33503.setAttribute('id', 'smo33503');
smo33503.setStyle({ fillStyle: "#115511" });
smo33522v1ar.push(smo33503);
const smo33504 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/1/n"]}'))
noteHash['smo33504'] = smo33504;
smo33504.setAttribute('id', 'smo33504');
smo33504.setStyle({ fillStyle: "#115511" });
smo33522v1ar.push(smo33504);
const smo33505 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["f#/1/n"]}'))
noteHash['smo33505'] = smo33505;
smo33505.setAttribute('id', 'smo33505');
smo33505.setStyle({ fillStyle: "#115511" });
const smo335050acc = new VF.Accidental('#');
smo33505.addModifier(smo335050acc, 0);
smo33522v1ar.push(smo33505);
const smo33506 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo33506'] = smo33506;
smo33506.setAttribute('id', 'smo33506');
smo33506.setStyle({ fillStyle: "#115511" });
smo33522v1ar.push(smo33506);
smo33522v1.addTickables(smo33522v1ar)
fmtsmo335224.joinVoices([smo33522v1]);
// create beam groups and tuplets for format grp smo33748 before formatting
const dirsmo35033 = smo33002.getStemDirection();
smo33002.setStemDirection(dirsmo35033);
smo33003.setStemDirection(dirsmo35033);
smo33004.setStemDirection(dirsmo35033);
smo33005.setStemDirection(dirsmo35033);
const smo35033 = new VF.Beam([smo33002,smo33003,smo33004,smo33005]);
const dirsmo35034 = smo33006.getStemDirection();
smo33006.setStemDirection(dirsmo35034);
smo33007.setStemDirection(dirsmo35034);
const smo35034 = new VF.Beam([smo33006,smo33007]);
const dirsmo35035 = smo33010.getStemDirection();
smo33010.setStemDirection(dirsmo35035);
smo33011.setStemDirection(dirsmo35035);
const smo35035 = new VF.Beam([smo33010,smo33011]);
const dirsmo35036 = smo33012.getStemDirection();
smo33012.setStemDirection(dirsmo35036);
smo33013.setStemDirection(dirsmo35036);
smo33014.setStemDirection(dirsmo35036);
smo33015.setStemDirection(dirsmo35036);
const smo35036 = new VF.Beam([smo33012,smo33013,smo33014,smo33015]);
const dirsmo35037 = smo33016.getStemDirection();
smo33016.setStemDirection(dirsmo35037);
smo33017.setStemDirection(dirsmo35037);
const smo35037 = new VF.Beam([smo33016,smo33017]);
const dirsmo35038 = smo33022.getStemDirection();
smo33022.setStemDirection(dirsmo35038);
smo33023.setStemDirection(dirsmo35038);
smo33024.setStemDirection(dirsmo35038);
smo33025.setStemDirection(dirsmo35038);
const smo35038 = new VF.Beam([smo33022,smo33023,smo33024,smo33025]);
const dirsmo35039 = smo33026.getStemDirection();
smo33026.setStemDirection(dirsmo35039);
smo33027.setStemDirection(dirsmo35039);
smo33028.setStemDirection(dirsmo35039);
smo33029.setStemDirection(dirsmo35039);
const smo35039 = new VF.Beam([smo33026,smo33027,smo33028,smo33029]);
 
// formatting measures in staff group smo33748
fmtsmo330454.format([smo33045v0,smo33522v0,smo33522v1], 1117);
const stavesmo33045 = new VF.Stave(103, 1298, 1174);
stavesmo33045.setAttribute('id', 'stavesmo33045');
stavesmo33045.setBegBarType(1);
stavesmo33045.addClef('treble');
stavesmo33045.setContext(context);
stavesmo33045.draw();
smo33045v0.draw(context, stavesmo33045);
smo35033.setContext(context);
smo35033.draw();
smo35034.setContext(context);
smo35034.draw();
smo35035.setContext(context);
smo35035.draw();
smo35036.setContext(context);
smo35036.draw();
smo35037.setContext(context);
smo35037.draw();
smo35038.setContext(context);
smo35038.draw();
smo35039.setContext(context);
smo35039.draw();
const stavesmo33522 = new VF.Stave(103, 1436, 1174);
stavesmo33522.setAttribute('id', 'stavesmo33522');
stavesmo33522.setBegBarType(1);
stavesmo33522.addClef('bass');
stavesmo33522.setContext(context);
stavesmo33522.draw();
smo33522v0.draw(context, stavesmo33522);
smo33522v1.draw(context, stavesmo33522);
const leftsmo33748stavesmo330451 = new VF.StaveConnector(stavesmo33045, stavesmo33522).setType(3);
leftsmo33748stavesmo330451.setContext(context).draw();
const fmtsmo330895 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo33089v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33089v0ar = [];
const smo33046 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo33046'] = smo33046;
smo33046.setAttribute('id', 'smo33046');
smo33089v0ar.push(smo33046);
const smo33047 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo33047'] = smo33047;
smo33047.setAttribute('id', 'smo33047');
const smo330470acc = new VF.Accidental('#');
smo33047.addModifier(smo330470acc, 0);
smo33089v0ar.push(smo33047);
const smo33048 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo33048'] = smo33048;
smo33048.setAttribute('id', 'smo33048');
smo33089v0ar.push(smo33048);
const smo33049 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo33049'] = smo33049;
smo33049.setAttribute('id', 'smo33049');
const smo330490acc = new VF.Accidental('#');
smo33049.addModifier(smo330490acc, 0);
smo33089v0ar.push(smo33049);
const smo33050 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo33050'] = smo33050;
smo33050.setAttribute('id', 'smo33050');
smo33089v0ar.push(smo33050);
const smo33051 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo33051'] = smo33051;
smo33051.setAttribute('id', 'smo33051');
smo33089v0ar.push(smo33051);
const smo33052 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo33052'] = smo33052;
smo33052.setAttribute('id', 'smo33052');
smo33089v0ar.push(smo33052);
const smo33053 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo33053'] = smo33053;
smo33053.setAttribute('id', 'smo33053');
smo33089v0ar.push(smo33053);
const smo33054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo33054'] = smo33054;
smo33054.setAttribute('id', 'smo33054');
smo33089v0ar.push(smo33054);
const smo33055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo33055'] = smo33055;
smo33055.setAttribute('id', 'smo33055');
const smo330550acc = new VF.Accidental('#');
smo33055.addModifier(smo330550acc, 0);
smo33089v0ar.push(smo33055);
const smo33056 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo33056'] = smo33056;
smo33056.setAttribute('id', 'smo33056');
smo33089v0ar.push(smo33056);
const smo33057 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo33057'] = smo33057;
smo33057.setAttribute('id', 'smo33057');
smo33089v0ar.push(smo33057);
const smo33058 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo33058'] = smo33058;
smo33058.setAttribute('id', 'smo33058');
smo33089v0ar.push(smo33058);
const smo33059 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo33059'] = smo33059;
smo33059.setAttribute('id', 'smo33059');
smo33089v0ar.push(smo33059);
const smo33060 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo33060'] = smo33060;
smo33060.setAttribute('id', 'smo33060');
smo33089v0ar.push(smo33060);
const smo33061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo33061'] = smo33061;
smo33061.setAttribute('id', 'smo33061');
smo33089v0ar.push(smo33061);
const smo33062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo33062'] = smo33062;
smo33062.setAttribute('id', 'smo33062');
smo33089v0ar.push(smo33062);
const smo33063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo33063'] = smo33063;
smo33063.setAttribute('id', 'smo33063');
smo33089v0ar.push(smo33063);
const smo33064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo33064'] = smo33064;
smo33064.setAttribute('id', 'smo33064');
smo33089v0ar.push(smo33064);
const smo33065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo33065'] = smo33065;
smo33065.setAttribute('id', 'smo33065');
smo33089v0ar.push(smo33065);
const smo33066 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo33066'] = smo33066;
smo33066.setAttribute('id', 'smo33066');
smo33089v0ar.push(smo33066);
const smo33067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo33067'] = smo33067;
smo33067.setAttribute('id', 'smo33067');
smo33089v0ar.push(smo33067);
const smo33068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo33068'] = smo33068;
smo33068.setAttribute('id', 'smo33068');
smo33089v0ar.push(smo33068);
const smo33069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo33069'] = smo33069;
smo33069.setAttribute('id', 'smo33069');
smo33089v0ar.push(smo33069);
const smo33070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo33070'] = smo33070;
smo33070.setAttribute('id', 'smo33070');
smo33089v0ar.push(smo33070);
const smo33071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo33071'] = smo33071;
smo33071.setAttribute('id', 'smo33071');
smo33089v0ar.push(smo33071);
const smo33072 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo33072'] = smo33072;
smo33072.setAttribute('id', 'smo33072');
smo33089v0ar.push(smo33072);
const smo33073 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33073'] = smo33073;
smo33073.setAttribute('id', 'smo33073');
smo33089v0ar.push(smo33073);
smo33089v0.addTickables(smo33089v0ar)
fmtsmo330895.joinVoices([smo33089v0]);
const fmtsmo335545 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo33554v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33554v0ar = [];
const smo33523 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33523'] = smo33523;
smo33523.setAttribute('id', 'smo33523');
smo33554v0ar.push(smo33523);
const smo33524 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33524'] = smo33524;
smo33524.setAttribute('id', 'smo33524');
smo33554v0ar.push(smo33524);
const smo33525 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33525'] = smo33525;
smo33525.setAttribute('id', 'smo33525');
smo33554v0ar.push(smo33525);
const smo33526 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33526'] = smo33526;
smo33526.setAttribute('id', 'smo33526');
smo33554v0ar.push(smo33526);
const smo33527 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33527'] = smo33527;
smo33527.setAttribute('id', 'smo33527');
smo33554v0ar.push(smo33527);
const smo33528 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33528'] = smo33528;
smo33528.setAttribute('id', 'smo33528');
smo33554v0ar.push(smo33528);
const smo33529 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33529'] = smo33529;
smo33529.setAttribute('id', 'smo33529');
smo33554v0ar.push(smo33529);
const smo33530 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33530'] = smo33530;
smo33530.setAttribute('id', 'smo33530');
smo33554v0ar.push(smo33530);
const smo33531 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33531'] = smo33531;
smo33531.setAttribute('id', 'smo33531');
smo33554v0ar.push(smo33531);
const smo33532 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33532'] = smo33532;
smo33532.setAttribute('id', 'smo33532');
smo33554v0ar.push(smo33532);
const smo33533 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
noteHash['smo33533'] = smo33533;
smo33533.setAttribute('id', 'smo33533');
const smo335330acc = new VF.Accidental('#');
smo33533.addModifier(smo335330acc, 0);
smo33554v0ar.push(smo33533);
const smo33534 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
noteHash['smo33534'] = smo33534;
smo33534.setAttribute('id', 'smo33534');
smo33554v0ar.push(smo33534);
smo33554v0.addTickables(smo33554v0ar)
fmtsmo335545.joinVoices([smo33554v0]);
const smo33554v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33554v1ar = [];
const smo33535 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo33535'] = smo33535;
smo33535.setAttribute('id', 'smo33535');
smo33535.setStyle({ fillStyle: "#115511" });
smo33554v1ar.push(smo33535);
const smo33536 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo33536'] = smo33536;
smo33536.setAttribute('id', 'smo33536');
smo33536.setStyle({ fillStyle: "#115511" });
smo33554v1ar.push(smo33536);
const smo33537 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo33537'] = smo33537;
smo33537.setAttribute('id', 'smo33537');
smo33537.setStyle({ fillStyle: "#115511" });
smo33554v1ar.push(smo33537);
const smo33538 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/1/n"]}'))
noteHash['smo33538'] = smo33538;
smo33538.setAttribute('id', 'smo33538');
smo33538.setStyle({ fillStyle: "#115511" });
smo33554v1ar.push(smo33538);
smo33554v1.addTickables(smo33554v1ar)
fmtsmo335545.joinVoices([smo33554v1]);
// create beam groups and tuplets for format grp smo33748 before formatting
const dirsmo35055 = smo33046.getStemDirection();
smo33046.setStemDirection(dirsmo35055);
smo33047.setStemDirection(dirsmo35055);
smo33048.setStemDirection(dirsmo35055);
smo33049.setStemDirection(dirsmo35055);
const smo35055 = new VF.Beam([smo33046,smo33047,smo33048,smo33049]);
const dirsmo35056 = smo33050.getStemDirection();
smo33050.setStemDirection(dirsmo35056);
smo33051.setStemDirection(dirsmo35056);
smo33052.setStemDirection(dirsmo35056);
smo33053.setStemDirection(dirsmo35056);
const smo35056 = new VF.Beam([smo33050,smo33051,smo33052,smo33053]);
const dirsmo35057 = smo33054.getStemDirection();
smo33054.setStemDirection(dirsmo35057);
smo33055.setStemDirection(dirsmo35057);
smo33056.setStemDirection(dirsmo35057);
smo33057.setStemDirection(dirsmo35057);
const smo35057 = new VF.Beam([smo33054,smo33055,smo33056,smo33057]);
const dirsmo35058 = smo33058.getStemDirection();
smo33058.setStemDirection(dirsmo35058);
smo33059.setStemDirection(dirsmo35058);
smo33060.setStemDirection(dirsmo35058);
smo33061.setStemDirection(dirsmo35058);
const smo35058 = new VF.Beam([smo33058,smo33059,smo33060,smo33061]);
const dirsmo35059 = smo33062.getStemDirection();
smo33062.setStemDirection(dirsmo35059);
smo33063.setStemDirection(dirsmo35059);
smo33064.setStemDirection(dirsmo35059);
smo33065.setStemDirection(dirsmo35059);
const smo35059 = new VF.Beam([smo33062,smo33063,smo33064,smo33065]);
const dirsmo35060 = smo33066.getStemDirection();
smo33066.setStemDirection(dirsmo35060);
smo33067.setStemDirection(dirsmo35060);
smo33068.setStemDirection(dirsmo35060);
smo33069.setStemDirection(dirsmo35060);
const smo35060 = new VF.Beam([smo33066,smo33067,smo33068,smo33069]);
const dirsmo35061 = smo33070.getStemDirection();
smo33070.setStemDirection(dirsmo35061);
smo33071.setStemDirection(dirsmo35061);
const smo35061 = new VF.Beam([smo33070,smo33071]);
 
// formatting measures in staff group smo33748
fmtsmo330895.format([smo33089v0,smo33554v0,smo33554v1], 1117);
const stavesmo33089 = new VF.Stave(103, 1621, 1174);
stavesmo33089.setAttribute('id', 'stavesmo33089');
stavesmo33089.setBegBarType(1);
stavesmo33089.addClef('treble');
stavesmo33089.setContext(context);
stavesmo33089.draw();
smo33089v0.draw(context, stavesmo33089);
smo35055.setContext(context);
smo35055.draw();
smo35056.setContext(context);
smo35056.draw();
smo35057.setContext(context);
smo35057.draw();
smo35058.setContext(context);
smo35058.draw();
smo35059.setContext(context);
smo35059.draw();
smo35060.setContext(context);
smo35060.draw();
smo35061.setContext(context);
smo35061.draw();
const stavesmo33554 = new VF.Stave(103, 1734, 1174);
stavesmo33554.setAttribute('id', 'stavesmo33554');
stavesmo33554.setBegBarType(1);
stavesmo33554.addClef('bass');
stavesmo33554.setContext(context);
stavesmo33554.draw();
smo33554v0.draw(context, stavesmo33554);
smo33554v1.draw(context, stavesmo33554);
const leftsmo33748stavesmo330891 = new VF.StaveConnector(stavesmo33089, stavesmo33554).setType(3);
leftsmo33748stavesmo330891.setContext(context).draw();
const smo35253 = new VF.StaveTie({ first_note: smo32884, last_note: smo32885, 
          firstNote: smo32884, lastNote: smo32885, first_indices: [0], last_indices: [0]});
smo35253.setContext(context).draw();
const smo35254 = new VF.StaveTie({ first_note: smo32892, last_note: smo32893, 
          firstNote: smo32892, lastNote: smo32893, first_indices: [0], last_indices: [0]});
smo35254.setContext(context).draw();
const smo35255 = new VF.StaveTie({ first_note: smo32895, last_note: smo32896, 
          firstNote: smo32895, lastNote: smo32896, first_indices: [0], last_indices: [0]});
smo35255.setContext(context).draw();
const smo35256 = new VF.StaveTie({ first_note: smo32898, last_note: null, 
          firstNote: smo32898, lastNote: null, first_indices: [0], last_indices: [0]});
smo35256.setContext(context).draw();
const smo35257 = new VF.StaveTie({ first_note: null, last_note: smo32921, 
          firstNote: null, lastNote: smo32921, first_indices: [0], last_indices: [0]});
smo35257.setContext(context).draw();
const smo35258 = new VF.StaveTie({ first_note: smo32947, last_note: smo32948, 
          firstNote: smo32947, lastNote: smo32948, first_indices: [0], last_indices: [0]});
smo35258.setContext(context).draw();
const smo35259 = new VF.StaveTie({ first_note: smo32972, last_note: smo32973, 
          firstNote: smo32972, lastNote: smo32973, first_indices: [0], last_indices: [0]});
smo35259.setContext(context).draw();
const smo35260 = new VF.StaveTie({ first_note: smo32982, last_note: smo32983, 
          firstNote: smo32982, lastNote: smo32983, first_indices: [0], last_indices: [0]});
smo35260.setContext(context).draw();
const smo35261 = new VF.StaveTie({ first_note: smo33007, last_note: smo33008, 
          firstNote: smo33007, lastNote: smo33008, first_indices: [0], last_indices: [0]});
smo35261.setContext(context).draw();
const smo35262 = new VF.StaveTie({ first_note: smo33017, last_note: smo33018, 
          firstNote: smo33017, lastNote: smo33018, first_indices: [0], last_indices: [0]});
smo35262.setContext(context).draw();
const smo35263 = new VF.StaveTie({ first_note: smo33071, last_note: smo33072, 
          firstNote: smo33071, lastNote: smo33072, first_indices: [0], last_indices: [0]});
smo35263.setContext(context).draw();
const smo35264 = new VF.Curve(smo33022, null, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":20,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":2,"position_end":1}'));
smo35264.setContext(context).draw();
const smo35265 = new VF.Curve(null, smo33072, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":20,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":2,"position_end":1}'));
smo35265.setContext(context).draw();
const smo35266 = new VF.Curve(smo32967, smo32973, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo35266.setContext(context).draw();
const smo35267 = new VF.Curve(smo32877, smo32885, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":16,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"position_end":2}'));
smo35267.setContext(context).draw();
const smo35268 = new VF.Curve(smo32922, smo32948, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":5,"cps":[{"x":0,"y":100},{"x":0,"y":80}],"invert":true,"position":1,"position_end":1}'));
smo35268.setContext(context).draw();
const smo35269 = new VF.Curve(smo32887, smo32896, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":5,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"position_end":2}'));
smo35269.setContext(context).draw();
const smo35270 = new VF.Curve(smo32975, smo32983, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":57},{"x":0,"y":45}],"invert":true,"position":1,"position_end":2}'));
smo35270.setContext(context).draw();
const smo35271 = new VF.Curve(smo33002, smo33008, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo35271.setContext(context).draw();
const smo35272 = new VF.Curve(smo33010, smo33018, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":15,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo35272.setContext(context).draw();
}
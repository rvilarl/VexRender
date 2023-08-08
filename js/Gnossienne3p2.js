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
const fmtsmo331306 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo33130v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33130v0ar = [];
const smo33090 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33090'] = smo33090;
smo33090.setAttribute('id', 'smo33090');
smo33130v0ar.push(smo33090);
const smo33091 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo33091'] = smo33091;
smo33091.setAttribute('id', 'smo33091');
smo33130v0ar.push(smo33091);
const smo33092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo33092'] = smo33092;
smo33092.setAttribute('id', 'smo33092');
const smo330920acc = new VF.Accidental('#');
smo33092.addModifier(smo330920acc, 0);
smo33130v0ar.push(smo33092);
const smo33093 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo33093'] = smo33093;
smo33093.setAttribute('id', 'smo33093');
smo33130v0ar.push(smo33093);
const smo33094 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo33094'] = smo33094;
smo33094.setAttribute('id', 'smo33094');
const smo330940acc = new VF.Accidental('#');
smo33094.addModifier(smo330940acc, 0);
smo33130v0ar.push(smo33094);
const smo33095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo33095'] = smo33095;
smo33095.setAttribute('id', 'smo33095');
smo33130v0ar.push(smo33095);
const smo33096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo33096'] = smo33096;
smo33096.setAttribute('id', 'smo33096');
const smo330960acc = new VF.Accidental('#');
smo33096.addModifier(smo330960acc, 0);
smo33130v0ar.push(smo33096);
const smo33097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo33097'] = smo33097;
smo33097.setAttribute('id', 'smo33097');
smo33130v0ar.push(smo33097);
const smo33098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo33098'] = smo33098;
smo33098.setAttribute('id', 'smo33098');
smo33130v0ar.push(smo33098);
const smo33099 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo33099'] = smo33099;
smo33099.setAttribute('id', 'smo33099');
smo33130v0ar.push(smo33099);
const smo33100 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo33100'] = smo33100;
smo33100.setAttribute('id', 'smo33100');
smo33130v0ar.push(smo33100);
const smo33101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo33101'] = smo33101;
smo33101.setAttribute('id', 'smo33101');
smo33130v0ar.push(smo33101);
const smo33102 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo33102'] = smo33102;
smo33102.setAttribute('id', 'smo33102');
smo33130v0ar.push(smo33102);
const smo33103 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo33103'] = smo33103;
smo33103.setAttribute('id', 'smo33103');
smo33130v0ar.push(smo33103);
const smo33104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo33104'] = smo33104;
smo33104.setAttribute('id', 'smo33104');
smo33130v0ar.push(smo33104);
const smo33105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo33105'] = smo33105;
smo33105.setAttribute('id', 'smo33105');
smo33130v0ar.push(smo33105);
const smo33106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo33106'] = smo33106;
smo33106.setAttribute('id', 'smo33106');
smo33130v0ar.push(smo33106);
const smo33107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo33107'] = smo33107;
smo33107.setAttribute('id', 'smo33107');
smo33130v0ar.push(smo33107);
const smo33108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo33108'] = smo33108;
smo33108.setAttribute('id', 'smo33108');
smo33130v0ar.push(smo33108);
const smo33109 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo33109'] = smo33109;
smo33109.setAttribute('id', 'smo33109');
smo33130v0ar.push(smo33109);
const smo33110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo33110'] = smo33110;
smo33110.setAttribute('id', 'smo33110');
smo33130v0ar.push(smo33110);
const smo33111 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo33111'] = smo33111;
smo33111.setAttribute('id', 'smo33111');
smo33130v0ar.push(smo33111);
const smo33112 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo33112'] = smo33112;
smo33112.setAttribute('id', 'smo33112');
smo33130v0ar.push(smo33112);
const smo33113 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo33113'] = smo33113;
smo33113.setAttribute('id', 'smo33113');
smo33130v0ar.push(smo33113);
const smo33114 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo33114'] = smo33114;
smo33114.setAttribute('id', 'smo33114');
smo33130v0ar.push(smo33114);
smo33130v0.addTickables(smo33130v0ar)
fmtsmo331306.joinVoices([smo33130v0]);
const fmtsmo335866 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo33586v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33586v0ar = [];
const smo33555 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33555'] = smo33555;
smo33555.setAttribute('id', 'smo33555');
smo33586v0ar.push(smo33555);
const smo33556 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
noteHash['smo33556'] = smo33556;
smo33556.setAttribute('id', 'smo33556');
const smo335560acc = new VF.Accidental('#');
smo33556.addModifier(smo335560acc, 0);
smo33586v0ar.push(smo33556);
const smo33557 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
noteHash['smo33557'] = smo33557;
smo33557.setAttribute('id', 'smo33557');
smo33586v0ar.push(smo33557);
const smo33558 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33558'] = smo33558;
smo33558.setAttribute('id', 'smo33558');
smo33586v0ar.push(smo33558);
const smo33559 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33559'] = smo33559;
smo33559.setAttribute('id', 'smo33559');
smo33586v0ar.push(smo33559);
const smo33560 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33560'] = smo33560;
smo33560.setAttribute('id', 'smo33560');
smo33586v0ar.push(smo33560);
const smo33561 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33561'] = smo33561;
smo33561.setAttribute('id', 'smo33561');
smo33586v0ar.push(smo33561);
const smo33562 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33562'] = smo33562;
smo33562.setAttribute('id', 'smo33562');
smo33586v0ar.push(smo33562);
const smo33563 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33563'] = smo33563;
smo33563.setAttribute('id', 'smo33563');
smo33586v0ar.push(smo33563);
const smo33564 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33564'] = smo33564;
smo33564.setAttribute('id', 'smo33564');
smo33586v0ar.push(smo33564);
const smo33565 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33565'] = smo33565;
smo33565.setAttribute('id', 'smo33565');
smo33586v0ar.push(smo33565);
const smo33566 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33566'] = smo33566;
smo33566.setAttribute('id', 'smo33566');
smo33586v0ar.push(smo33566);
smo33586v0.addTickables(smo33586v0ar)
fmtsmo335866.joinVoices([smo33586v0]);
const smo33586v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33586v1ar = [];
const smo33567 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/1/n"]}'))
noteHash['smo33567'] = smo33567;
smo33567.setAttribute('id', 'smo33567');
smo33567.setStyle({ fillStyle: "#115511" });
smo33586v1ar.push(smo33567);
const smo33568 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo33568'] = smo33568;
smo33568.setAttribute('id', 'smo33568');
smo33568.setStyle({ fillStyle: "#115511" });
smo33586v1ar.push(smo33568);
const smo33569 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo33569'] = smo33569;
smo33569.setAttribute('id', 'smo33569');
smo33569.setStyle({ fillStyle: "#115511" });
smo33586v1ar.push(smo33569);
const smo33570 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo33570'] = smo33570;
smo33570.setAttribute('id', 'smo33570');
smo33570.setStyle({ fillStyle: "#115511" });
smo33586v1ar.push(smo33570);
smo33586v1.addTickables(smo33586v1ar)
fmtsmo335866.joinVoices([smo33586v1]);
// create beam groups and tuplets for format grp smo33748 before formatting
const dirsmo35076 = smo33091.getStemDirection();
smo33091.setStemDirection(dirsmo35076);
smo33092.setStemDirection(dirsmo35076);
smo33093.setStemDirection(dirsmo35076);
smo33094.setStemDirection(dirsmo35076);
const smo35076 = new VF.Beam([smo33091,smo33092,smo33093,smo33094]);
const dirsmo35077 = smo33095.getStemDirection();
smo33095.setStemDirection(dirsmo35077);
smo33096.setStemDirection(dirsmo35077);
smo33097.setStemDirection(dirsmo35077);
smo33098.setStemDirection(dirsmo35077);
const smo35077 = new VF.Beam([smo33095,smo33096,smo33097,smo33098]);
const dirsmo35078 = smo33099.getStemDirection();
smo33099.setStemDirection(dirsmo35078);
smo33100.setStemDirection(dirsmo35078);
smo33101.setStemDirection(dirsmo35078);
smo33102.setStemDirection(dirsmo35078);
const smo35078 = new VF.Beam([smo33099,smo33100,smo33101,smo33102]);
const dirsmo35079 = smo33103.getStemDirection();
smo33103.setStemDirection(dirsmo35079);
smo33104.setStemDirection(dirsmo35079);
smo33105.setStemDirection(dirsmo35079);
smo33106.setStemDirection(dirsmo35079);
const smo35079 = new VF.Beam([smo33103,smo33104,smo33105,smo33106]);
const dirsmo35080 = smo33107.getStemDirection();
smo33107.setStemDirection(dirsmo35080);
smo33108.setStemDirection(dirsmo35080);
smo33109.setStemDirection(dirsmo35080);
smo33110.setStemDirection(dirsmo35080);
const smo35080 = new VF.Beam([smo33107,smo33108,smo33109,smo33110]);
const dirsmo35081 = smo33111.getStemDirection();
smo33111.setStemDirection(dirsmo35081);
smo33112.setStemDirection(dirsmo35081);
smo33113.setStemDirection(dirsmo35081);
smo33114.setStemDirection(dirsmo35081);
const smo35081 = new VF.Beam([smo33111,smo33112,smo33113,smo33114]);
 
// formatting measures in staff group smo33748
fmtsmo331306.format([smo33130v0,smo33586v0,smo33586v1], 1118);
const stavesmo33130 = new VF.Stave(103, 173.00000000000023, 1174);
stavesmo33130.setAttribute('id', 'stavesmo33130');
stavesmo33130.setBegBarType(1);
stavesmo33130.addClef('treble');
stavesmo33130.setContext(context);
stavesmo33130.draw();
smo33130v0.draw(context, stavesmo33130);
smo35076.setContext(context);
smo35076.draw();
smo35077.setContext(context);
smo35077.draw();
smo35078.setContext(context);
smo35078.draw();
smo35079.setContext(context);
smo35079.draw();
smo35080.setContext(context);
smo35080.draw();
smo35081.setContext(context);
smo35081.draw();
const stavesmo33586 = new VF.Stave(103, 286.0000000000002, 1174);
stavesmo33586.setAttribute('id', 'stavesmo33586');
stavesmo33586.setBegBarType(1);
stavesmo33586.addClef('bass');
stavesmo33586.setContext(context);
stavesmo33586.draw();
smo33586v0.draw(context, stavesmo33586);
smo33586v1.draw(context, stavesmo33586);
const leftsmo33748stavesmo331301 = new VF.StaveConnector(stavesmo33130, stavesmo33586).setType(3);
leftsmo33748stavesmo331301.setContext(context).draw();
const fmtsmo331667 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo33166v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33166v0ar = [];
const smo33131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
noteHash['smo33131'] = smo33131;
smo33131.setAttribute('id', 'smo33131');
smo33166v0ar.push(smo33131);
const smo33132 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo33132'] = smo33132;
smo33132.setAttribute('id', 'smo33132');
const smo331320acc = new VF.Accidental('#');
smo33132.addModifier(smo331320acc, 0);
smo33166v0ar.push(smo33132);
const smo33133 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo33133'] = smo33133;
smo33133.setAttribute('id', 'smo33133');
smo33166v0ar.push(smo33133);
const smo33134 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
noteHash['smo33134'] = smo33134;
smo33134.setAttribute('id', 'smo33134');
const smo331340acc = new VF.Accidental('#');
smo33134.addModifier(smo331340acc, 0);
smo33166v0ar.push(smo33134);
const smo33135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo33135'] = smo33135;
smo33135.setAttribute('id', 'smo33135');
smo33166v0ar.push(smo33135);
const smo33136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo33136'] = smo33136;
smo33136.setAttribute('id', 'smo33136');
const smo331360acc = new VF.Accidental('#');
smo33136.addModifier(smo331360acc, 0);
smo33166v0ar.push(smo33136);
const smo33137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo33137'] = smo33137;
smo33137.setAttribute('id', 'smo33137');
smo33166v0ar.push(smo33137);
const smo33138 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo33138'] = smo33138;
smo33138.setAttribute('id', 'smo33138');
smo33166v0ar.push(smo33138);
const smo33139 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo33139'] = smo33139;
smo33139.setAttribute('id', 'smo33139');
smo33166v0ar.push(smo33139);
const smo33140 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo33140'] = smo33140;
smo33140.setAttribute('id', 'smo33140');
smo33166v0ar.push(smo33140);
const smo33141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo33141'] = smo33141;
smo33141.setAttribute('id', 'smo33141');
smo33166v0ar.push(smo33141);
const smo33142 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33142'] = smo33142;
smo33142.setAttribute('id', 'smo33142');
smo33166v0ar.push(smo33142);
const smo33143 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
const smo33144 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["f#/4"],"slash":false}'))
smo33144.setAttribute('id', 'smo33144');
const acc0smo33144 = new VF.Accidental('#');
smo33144.addModifier(acc0smo33144, 0)
const ggrpsmo33143 = new VF.GraceNoteGroup([smo33144]);
ggrpsmo33143.beamNotes();
smo33143.addModifier(ggrpsmo33143, 0);
noteHash['smo33143'] = smo33143;
smo33143.setAttribute('id', 'smo33143');
const smo331430acc = new VF.Accidental('n');
smo33143.addModifier(smo331430acc, 0);
smo33166v0ar.push(smo33143);
const smo33145 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo33145'] = smo33145;
smo33145.setAttribute('id', 'smo33145');
smo33166v0ar.push(smo33145);
const smo33146 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33146'] = smo33146;
smo33146.setAttribute('id', 'smo33146');
smo33166v0ar.push(smo33146);
const smo33147 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["ab/4/n"]}'))
const smo33148 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["cn/5"],"slash":false}'))
smo33148.setAttribute('id', 'smo33148');
const ggrpsmo33147 = new VF.GraceNoteGroup([smo33148]);
ggrpsmo33147.beamNotes();
smo33147.addModifier(ggrpsmo33147, 0);
noteHash['smo33147'] = smo33147;
smo33147.setAttribute('id', 'smo33147');
const smo331470acc = new VF.Accidental('b');
smo33147.addModifier(smo331470acc, 0);
smo33166v0ar.push(smo33147);
const smo33149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
noteHash['smo33149'] = smo33149;
smo33149.setAttribute('id', 'smo33149');
smo33166v0ar.push(smo33149);
const smo33150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33150'] = smo33150;
smo33150.setAttribute('id', 'smo33150');
smo33166v0ar.push(smo33150);
smo33166v0.addTickables(smo33166v0ar)
fmtsmo331667.joinVoices([smo33166v0]);
const fmtsmo336267 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo33626v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33626v0ar = [];
const smo33587 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33587'] = smo33587;
smo33587.setAttribute('id', 'smo33587');
smo33626v0ar.push(smo33587);
const smo33588 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33588'] = smo33588;
smo33588.setAttribute('id', 'smo33588');
smo33626v0ar.push(smo33588);
const smo33589 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33589'] = smo33589;
smo33589.setAttribute('id', 'smo33589');
smo33626v0ar.push(smo33589);
const smo33590 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33590'] = smo33590;
smo33590.setAttribute('id', 'smo33590');
smo33626v0ar.push(smo33590);
const smo33591 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
noteHash['smo33591'] = smo33591;
smo33591.setAttribute('id', 'smo33591');
const smo335910acc = new VF.Accidental('#');
smo33591.addModifier(smo335910acc, 0);
smo33626v0ar.push(smo33591);
const smo33592 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
noteHash['smo33592'] = smo33592;
smo33592.setAttribute('id', 'smo33592');
smo33626v0ar.push(smo33592);
const smo33593 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33593'] = smo33593;
smo33593.setAttribute('id', 'smo33593');
smo33626v0ar.push(smo33593);
const smo33594 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo33594'] = smo33594;
smo33594.setAttribute('id', 'smo33594');
smo33626v0ar.push(smo33594);
const smo33595 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo33595'] = smo33595;
smo33595.setAttribute('id', 'smo33595');
smo33626v0ar.push(smo33595);
const smo33596 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33596'] = smo33596;
smo33596.setAttribute('id', 'smo33596');
smo33626v0ar.push(smo33596);
const smo33597 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo33597'] = smo33597;
smo33597.setAttribute('id', 'smo33597');
smo33626v0ar.push(smo33597);
const smo33598 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo33598'] = smo33598;
smo33598.setAttribute('id', 'smo33598');
smo33626v0ar.push(smo33598);
const smo33599 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33599'] = smo33599;
smo33599.setAttribute('id', 'smo33599');
smo33626v0ar.push(smo33599);
const smo33600 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo33600'] = smo33600;
smo33600.setAttribute('id', 'smo33600');
const smo336000acc = new VF.Accidental('b');
smo33600.addModifier(smo336000acc, 0);
smo33626v0ar.push(smo33600);
const smo33601 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo33601'] = smo33601;
smo33601.setAttribute('id', 'smo33601');
smo33626v0ar.push(smo33601);
const smo33602 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33602'] = smo33602;
smo33602.setAttribute('id', 'smo33602');
smo33626v0ar.push(smo33602);
const smo33603 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo33603'] = smo33603;
smo33603.setAttribute('id', 'smo33603');
smo33626v0ar.push(smo33603);
const smo33604 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo33604'] = smo33604;
smo33604.setAttribute('id', 'smo33604');
smo33626v0ar.push(smo33604);
smo33626v0.addTickables(smo33626v0ar)
fmtsmo336267.joinVoices([smo33626v0]);
const smo33626v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33626v1ar = [];
const smo33605 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo33605'] = smo33605;
smo33605.setAttribute('id', 'smo33605');
smo33605.setStyle({ fillStyle: "#115511" });
smo33626v1ar.push(smo33605);
const smo33606 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/1/n"]}'))
noteHash['smo33606'] = smo33606;
smo33606.setAttribute('id', 'smo33606');
smo33606.setStyle({ fillStyle: "#115511" });
smo33626v1ar.push(smo33606);
const smo33607 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/1/n"]}'))
noteHash['smo33607'] = smo33607;
smo33607.setAttribute('id', 'smo33607');
smo33607.setStyle({ fillStyle: "#115511" });
smo33626v1ar.push(smo33607);
const smo33608 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo33608'] = smo33608;
smo33608.setAttribute('id', 'smo33608');
smo33608.setStyle({ fillStyle: "#115511" });
smo33626v1ar.push(smo33608);
const smo33609 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
noteHash['smo33609'] = smo33609;
smo33609.setAttribute('id', 'smo33609');
smo33609.setStyle({ fillStyle: "#115511" });
smo33626v1ar.push(smo33609);
const smo33610 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
noteHash['smo33610'] = smo33610;
smo33610.setAttribute('id', 'smo33610');
smo33610.setStyle({ fillStyle: "#115511" });
smo33626v1ar.push(smo33610);
smo33626v1.addTickables(smo33626v1ar)
fmtsmo336267.joinVoices([smo33626v1]);
// create beam groups and tuplets for format grp smo33748 before formatting
const dirsmo35094 = smo33131.getStemDirection();
smo33131.setStemDirection(dirsmo35094);
smo33132.setStemDirection(dirsmo35094);
smo33133.setStemDirection(dirsmo35094);
smo33134.setStemDirection(dirsmo35094);
const smo35094 = new VF.Beam([smo33131,smo33132,smo33133,smo33134]);
const dirsmo35095 = smo33135.getStemDirection();
smo33135.setStemDirection(dirsmo35095);
smo33136.setStemDirection(dirsmo35095);
smo33137.setStemDirection(dirsmo35095);
smo33138.setStemDirection(dirsmo35095);
const smo35095 = new VF.Beam([smo33135,smo33136,smo33137,smo33138]);
const dirsmo35096 = smo33139.getStemDirection();
smo33139.setStemDirection(dirsmo35096);
smo33140.setStemDirection(dirsmo35096);
const smo35096 = new VF.Beam([smo33139,smo33140]);
 
// formatting measures in staff group smo33748
fmtsmo331667.format([smo33166v0,smo33626v0,smo33626v1], 1118);
const stavesmo33166 = new VF.Stave(103, 455.0000000000002, 1174);
stavesmo33166.setAttribute('id', 'stavesmo33166');
stavesmo33166.setBegBarType(1);
stavesmo33166.addClef('treble');
stavesmo33166.setContext(context);
stavesmo33166.draw();
smo33166v0.draw(context, stavesmo33166);
smo35094.setContext(context);
smo35094.draw();
smo35095.setContext(context);
smo35095.draw();
smo35096.setContext(context);
smo35096.draw();
const stavesmo33626 = new VF.Stave(103, 573.0000000000002, 1174);
stavesmo33626.setAttribute('id', 'stavesmo33626');
stavesmo33626.setBegBarType(1);
stavesmo33626.addClef('bass');
stavesmo33626.setContext(context);
stavesmo33626.draw();
smo33626v0.draw(context, stavesmo33626);
smo33626v1.draw(context, stavesmo33626);
const leftsmo33748stavesmo331661 = new VF.StaveConnector(stavesmo33166, stavesmo33626).setType(3);
leftsmo33748stavesmo331661.setContext(context).draw();
const fmtsmo332068 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo33206v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33206v0ar = [];
const smo33167 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/4/n"]}'))
noteHash['smo33167'] = smo33167;
smo33167.setAttribute('id', 'smo33167');
const smo331670acc = new VF.Accidental('b');
smo33167.addModifier(smo331670acc, 0);
smo33206v0ar.push(smo33167);
const smo33168 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo33168'] = smo33168;
smo33168.setAttribute('id', 'smo33168');
smo33206v0ar.push(smo33168);
const smo33169 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo33169'] = smo33169;
smo33169.setAttribute('id', 'smo33169');
smo33206v0ar.push(smo33169);
const smo33170 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/5/n"]}'))
noteHash['smo33170'] = smo33170;
smo33170.setAttribute('id', 'smo33170');
const smo331700acc = new VF.Accidental('b');
smo33170.addModifier(smo331700acc, 0);
smo33206v0ar.push(smo33170);
const smo33171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo33171'] = smo33171;
smo33171.setAttribute('id', 'smo33171');
smo33206v0ar.push(smo33171);
const smo33172 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo33172'] = smo33172;
smo33172.setAttribute('id', 'smo33172');
smo33206v0ar.push(smo33172);
const smo33173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo33173'] = smo33173;
smo33173.setAttribute('id', 'smo33173');
smo33206v0ar.push(smo33173);
const smo33174 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/4/n"]}'))
noteHash['smo33174'] = smo33174;
smo33174.setAttribute('id', 'smo33174');
smo33206v0ar.push(smo33174);
const smo33175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo33175'] = smo33175;
smo33175.setAttribute('id', 'smo33175');
smo33206v0ar.push(smo33175);
const smo33176 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo33176'] = smo33176;
smo33176.setAttribute('id', 'smo33176');
smo33206v0ar.push(smo33176);
const smo33177 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo33177'] = smo33177;
smo33177.setAttribute('id', 'smo33177');
smo33206v0ar.push(smo33177);
const smo33178 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33178'] = smo33178;
smo33178.setAttribute('id', 'smo33178');
smo33206v0ar.push(smo33178);
const smo33179 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
const smo33180 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["bn/4"],"slash":false}'))
smo33180.setAttribute('id', 'smo33180');
const ggrpsmo33179 = new VF.GraceNoteGroup([smo33180]);
ggrpsmo33179.beamNotes();
smo33179.addModifier(ggrpsmo33179, 0);
noteHash['smo33179'] = smo33179;
smo33179.setAttribute('id', 'smo33179');
smo33206v0ar.push(smo33179);
const smo33181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo33181'] = smo33181;
smo33181.setAttribute('id', 'smo33181');
smo33206v0ar.push(smo33181);
const smo33182 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33182'] = smo33182;
smo33182.setAttribute('id', 'smo33182');
smo33206v0ar.push(smo33182);
const smo33183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/4/n"]}'))
noteHash['smo33183'] = smo33183;
smo33183.setAttribute('id', 'smo33183');
smo33206v0ar.push(smo33183);
const smo33184 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo33184'] = smo33184;
smo33184.setAttribute('id', 'smo33184');
smo33206v0ar.push(smo33184);
const smo33185 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo33185'] = smo33185;
smo33185.setAttribute('id', 'smo33185');
smo33206v0ar.push(smo33185);
const smo33186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/5/n"]}'))
noteHash['smo33186'] = smo33186;
smo33186.setAttribute('id', 'smo33186');
smo33206v0ar.push(smo33186);
const smo33187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo33187'] = smo33187;
smo33187.setAttribute('id', 'smo33187');
smo33206v0ar.push(smo33187);
const smo33188 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo33188'] = smo33188;
smo33188.setAttribute('id', 'smo33188');
smo33206v0ar.push(smo33188);
const smo33189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo33189'] = smo33189;
smo33189.setAttribute('id', 'smo33189');
smo33206v0ar.push(smo33189);
const smo33190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/4/n"]}'))
noteHash['smo33190'] = smo33190;
smo33190.setAttribute('id', 'smo33190');
smo33206v0ar.push(smo33190);
smo33206v0.addTickables(smo33206v0ar)
fmtsmo332068.joinVoices([smo33206v0]);
const fmtsmo336628 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo33662v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33662v0ar = [];
const smo33627 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33627'] = smo33627;
smo33627.setAttribute('id', 'smo33627');
smo33662v0ar.push(smo33627);
const smo33628 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo33628'] = smo33628;
smo33628.setAttribute('id', 'smo33628');
const smo336280acc = new VF.Accidental('b');
smo33628.addModifier(smo336280acc, 0);
smo33662v0ar.push(smo33628);
const smo33629 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo33629'] = smo33629;
smo33629.setAttribute('id', 'smo33629');
smo33662v0ar.push(smo33629);
const smo33630 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33630'] = smo33630;
smo33630.setAttribute('id', 'smo33630');
smo33662v0ar.push(smo33630);
const smo33631 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo33631'] = smo33631;
smo33631.setAttribute('id', 'smo33631');
smo33662v0ar.push(smo33631);
const smo33632 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo33632'] = smo33632;
smo33632.setAttribute('id', 'smo33632');
smo33662v0ar.push(smo33632);
const smo33633 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33633'] = smo33633;
smo33633.setAttribute('id', 'smo33633');
smo33662v0ar.push(smo33633);
const smo33634 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo33634'] = smo33634;
smo33634.setAttribute('id', 'smo33634');
const smo336340acc = new VF.Accidental('n');
smo33634.addModifier(smo336340acc, 0);
smo33662v0ar.push(smo33634);
const smo33635 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo33635'] = smo33635;
smo33635.setAttribute('id', 'smo33635');
smo33662v0ar.push(smo33635);
const smo33636 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33636'] = smo33636;
smo33636.setAttribute('id', 'smo33636');
smo33662v0ar.push(smo33636);
const smo33637 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo33637'] = smo33637;
smo33637.setAttribute('id', 'smo33637');
smo33662v0ar.push(smo33637);
const smo33638 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo33638'] = smo33638;
smo33638.setAttribute('id', 'smo33638');
smo33662v0ar.push(smo33638);
const smo33639 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33639'] = smo33639;
smo33639.setAttribute('id', 'smo33639');
smo33662v0ar.push(smo33639);
const smo33640 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo33640'] = smo33640;
smo33640.setAttribute('id', 'smo33640');
const smo336400acc = new VF.Accidental('b');
smo33640.addModifier(smo336400acc, 0);
smo33662v0ar.push(smo33640);
const smo33641 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo33641'] = smo33641;
smo33641.setAttribute('id', 'smo33641');
smo33662v0ar.push(smo33641);
smo33662v0.addTickables(smo33662v0ar)
fmtsmo336628.joinVoices([smo33662v0]);
const smo33662v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33662v1ar = [];
const smo33642 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
noteHash['smo33642'] = smo33642;
smo33642.setAttribute('id', 'smo33642');
smo33642.setStyle({ fillStyle: "#115511" });
smo33662v1ar.push(smo33642);
const smo33643 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
noteHash['smo33643'] = smo33643;
smo33643.setAttribute('id', 'smo33643');
smo33643.setStyle({ fillStyle: "#115511" });
smo33662v1ar.push(smo33643);
const smo33644 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
noteHash['smo33644'] = smo33644;
smo33644.setAttribute('id', 'smo33644');
smo33644.setStyle({ fillStyle: "#115511" });
smo33662v1ar.push(smo33644);
const smo33645 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
noteHash['smo33645'] = smo33645;
smo33645.setAttribute('id', 'smo33645');
smo33645.setStyle({ fillStyle: "#115511" });
smo33662v1ar.push(smo33645);
const smo33646 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
noteHash['smo33646'] = smo33646;
smo33646.setAttribute('id', 'smo33646');
smo33646.setStyle({ fillStyle: "#115511" });
smo33662v1ar.push(smo33646);
smo33662v1.addTickables(smo33662v1ar)
fmtsmo336628.joinVoices([smo33662v1]);
// create beam groups and tuplets for format grp smo33748 before formatting
const dirsmo35110 = smo33167.getStemDirection();
smo33167.setStemDirection(dirsmo35110);
smo33168.setStemDirection(dirsmo35110);
smo33169.setStemDirection(dirsmo35110);
smo33170.setStemDirection(dirsmo35110);
const smo35110 = new VF.Beam([smo33167,smo33168,smo33169,smo33170]);
const dirsmo35111 = smo33171.getStemDirection();
smo33171.setStemDirection(dirsmo35111);
smo33172.setStemDirection(dirsmo35111);
smo33173.setStemDirection(dirsmo35111);
smo33174.setStemDirection(dirsmo35111);
const smo35111 = new VF.Beam([smo33171,smo33172,smo33173,smo33174]);
const dirsmo35112 = smo33175.getStemDirection();
smo33175.setStemDirection(dirsmo35112);
smo33176.setStemDirection(dirsmo35112);
const smo35112 = new VF.Beam([smo33175,smo33176]);
const dirsmo35113 = smo33183.getStemDirection();
smo33183.setStemDirection(dirsmo35113);
smo33184.setStemDirection(dirsmo35113);
smo33185.setStemDirection(dirsmo35113);
smo33186.setStemDirection(dirsmo35113);
const smo35113 = new VF.Beam([smo33183,smo33184,smo33185,smo33186]);
const dirsmo35114 = smo33187.getStemDirection();
smo33187.setStemDirection(dirsmo35114);
smo33188.setStemDirection(dirsmo35114);
smo33189.setStemDirection(dirsmo35114);
smo33190.setStemDirection(dirsmo35114);
const smo35114 = new VF.Beam([smo33187,smo33188,smo33189,smo33190]);
 
// formatting measures in staff group smo33748
fmtsmo332068.format([smo33206v0,smo33662v0,smo33662v1], 1117);
const stavesmo33206 = new VF.Stave(103, 713.0000000000002, 1174);
stavesmo33206.setAttribute('id', 'stavesmo33206');
stavesmo33206.setBegBarType(1);
stavesmo33206.addClef('treble');
stavesmo33206.setContext(context);
stavesmo33206.draw();
smo33206v0.draw(context, stavesmo33206);
smo35110.setContext(context);
smo35110.draw();
smo35111.setContext(context);
smo35111.draw();
smo35112.setContext(context);
smo35112.draw();
smo35113.setContext(context);
smo35113.draw();
smo35114.setContext(context);
smo35114.draw();
const stavesmo33662 = new VF.Stave(103, 836.0000000000002, 1174);
stavesmo33662.setAttribute('id', 'stavesmo33662');
stavesmo33662.setBegBarType(1);
stavesmo33662.addClef('bass');
stavesmo33662.setContext(context);
stavesmo33662.draw();
smo33662v0.draw(context, stavesmo33662);
smo33662v1.draw(context, stavesmo33662);
const leftsmo33748stavesmo332061 = new VF.StaveConnector(stavesmo33206, stavesmo33662).setType(3);
leftsmo33748stavesmo332061.setContext(context).draw();
const fmtsmo332559 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo33255v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33255v0ar = [];
const smo33207 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo33207'] = smo33207;
smo33207.setAttribute('id', 'smo33207');
smo33255v0ar.push(smo33207);
const smo33208 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo33208'] = smo33208;
smo33208.setAttribute('id', 'smo33208');
smo33255v0ar.push(smo33208);
const smo33209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo33209'] = smo33209;
smo33209.setAttribute('id', 'smo33209');
smo33255v0ar.push(smo33209);
const smo33210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33210'] = smo33210;
smo33210.setAttribute('id', 'smo33210');
smo33255v0ar.push(smo33210);
const smo33211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
const smo33212 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["bn/4"],"slash":false}'))
smo33212.setAttribute('id', 'smo33212');
const ggrpsmo33211 = new VF.GraceNoteGroup([smo33212]);
ggrpsmo33211.beamNotes();
smo33211.addModifier(ggrpsmo33211, 0);
noteHash['smo33211'] = smo33211;
smo33211.setAttribute('id', 'smo33211');
smo33255v0ar.push(smo33211);
const smo33213 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo33213'] = smo33213;
smo33213.setAttribute('id', 'smo33213');
smo33255v0ar.push(smo33213);
const smo33214 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo33214'] = smo33214;
smo33214.setAttribute('id', 'smo33214');
smo33255v0ar.push(smo33214);
const smo33215 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
noteHash['smo33215'] = smo33215;
smo33215.setAttribute('id', 'smo33215');
const smo332150acc = new VF.Accidental('#');
smo33215.addModifier(smo332150acc, 0);
smo33255v0ar.push(smo33215);
const smo33216 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
noteHash['smo33216'] = smo33216;
smo33216.setAttribute('id', 'smo33216');
smo33255v0ar.push(smo33216);
const smo33217 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
noteHash['smo33217'] = smo33217;
smo33217.setAttribute('id', 'smo33217');
const smo332170acc = new VF.Accidental('#');
smo33217.addModifier(smo332170acc, 0);
smo33255v0ar.push(smo33217);
const smo33218 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
noteHash['smo33218'] = smo33218;
smo33218.setAttribute('id', 'smo33218');
smo33255v0ar.push(smo33218);
const smo33219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
noteHash['smo33219'] = smo33219;
smo33219.setAttribute('id', 'smo33219');
smo33255v0ar.push(smo33219);
const smo33220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33220'] = smo33220;
smo33220.setAttribute('id', 'smo33220');
smo33255v0ar.push(smo33220);
const smo33221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo33221'] = smo33221;
smo33221.setAttribute('id', 'smo33221');
smo33255v0ar.push(smo33221);
const smo33222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo33222'] = smo33222;
smo33222.setAttribute('id', 'smo33222');
smo33255v0ar.push(smo33222);
const smo33223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
noteHash['smo33223'] = smo33223;
smo33223.setAttribute('id', 'smo33223');
smo33255v0ar.push(smo33223);
const smo33224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
noteHash['smo33224'] = smo33224;
smo33224.setAttribute('id', 'smo33224');
smo33255v0ar.push(smo33224);
const smo33225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo33225'] = smo33225;
smo33225.setAttribute('id', 'smo33225');
smo33255v0ar.push(smo33225);
const smo33226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo33226'] = smo33226;
smo33226.setAttribute('id', 'smo33226');
smo33255v0ar.push(smo33226);
const smo33227 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo33227'] = smo33227;
smo33227.setAttribute('id', 'smo33227');
smo33255v0ar.push(smo33227);
const smo33228 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo33228'] = smo33228;
smo33228.setAttribute('id', 'smo33228');
smo33255v0ar.push(smo33228);
const smo33229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo33229'] = smo33229;
smo33229.setAttribute('id', 'smo33229');
smo33255v0ar.push(smo33229);
const smo33230 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33230'] = smo33230;
smo33230.setAttribute('id', 'smo33230');
smo33255v0ar.push(smo33230);
const smo33231 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33231'] = smo33231;
smo33231.setAttribute('id', 'smo33231');
smo33255v0ar.push(smo33231);
smo33255v0.addTickables(smo33255v0ar)
fmtsmo332559.joinVoices([smo33255v0]);
const smo33255v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33255v1ar = [];
const smo33232 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33232'] = smo33232;
smo33232.setAttribute('id', 'smo33232');
smo33232.setStyle({ fillStyle: '#aaaaaa7f' });
smo33255v1ar.push(smo33232);
const smo33233 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33233'] = smo33233;
smo33233.setAttribute('id', 'smo33233');
smo33233.setStyle({ fillStyle: '#aaaaaa7f' });
smo33255v1ar.push(smo33233);
const smo33234 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
noteHash['smo33234'] = smo33234;
smo33234.setAttribute('id', 'smo33234');
smo33234.setStyle({ fillStyle: "#115511" });
smo33255v1ar.push(smo33234);
const smo33235 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
noteHash['smo33235'] = smo33235;
smo33235.setAttribute('id', 'smo33235');
smo33235.setStyle({ fillStyle: "#115511" });
smo33255v1ar.push(smo33235);
const smo33236 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33236'] = smo33236;
smo33236.setAttribute('id', 'smo33236');
smo33236.setStyle({ fillStyle: '#aaaaaa7f' });
smo33255v1ar.push(smo33236);
const smo33237 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
noteHash['smo33237'] = smo33237;
smo33237.setAttribute('id', 'smo33237');
smo33237.setStyle({ fillStyle: "#115511" });
smo33255v1ar.push(smo33237);
const smo33238 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
noteHash['smo33238'] = smo33238;
smo33238.setAttribute('id', 'smo33238');
smo33238.setStyle({ fillStyle: "#115511" });
smo33255v1ar.push(smo33238);
const smo33239 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33239'] = smo33239;
smo33239.setAttribute('id', 'smo33239');
smo33239.setStyle({ fillStyle: "#115511" });
smo33255v1ar.push(smo33239);
smo33255v1.addTickables(smo33255v1ar)
fmtsmo332559.joinVoices([smo33255v1]);
const fmtsmo337009 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo33700v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33700v0ar = [];
const smo33663 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33663'] = smo33663;
smo33663.setAttribute('id', 'smo33663');
smo33700v0ar.push(smo33663);
const smo33664 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo33664'] = smo33664;
smo33664.setAttribute('id', 'smo33664');
const smo336640acc = new VF.Accidental('b');
smo33664.addModifier(smo336640acc, 0);
smo33700v0ar.push(smo33664);
const smo33665 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
noteHash['smo33665'] = smo33665;
smo33665.setAttribute('id', 'smo33665');
smo33700v0ar.push(smo33665);
const smo33666 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33666'] = smo33666;
smo33666.setAttribute('id', 'smo33666');
smo33700v0ar.push(smo33666);
const smo33667 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo33667'] = smo33667;
smo33667.setAttribute('id', 'smo33667');
const smo336670acc = new VF.Accidental('n');
smo33667.addModifier(smo336670acc, 0);
smo33700v0ar.push(smo33667);
const smo33668 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
noteHash['smo33668'] = smo33668;
smo33668.setAttribute('id', 'smo33668');
smo33700v0ar.push(smo33668);
const smo33669 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33669'] = smo33669;
smo33669.setAttribute('id', 'smo33669');
smo33700v0ar.push(smo33669);
const smo33670 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33670'] = smo33670;
smo33670.setAttribute('id', 'smo33670');
smo33670.setStyle({ fillStyle: '#aaaaaa7f' });
smo33670.addModifier(new VF.Dot(), 0);
smo33700v0ar.push(smo33670);
const smo33671 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33671'] = smo33671;
smo33671.setAttribute('id', 'smo33671');
smo33700v0ar.push(smo33671);
const smo33672 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33672'] = smo33672;
smo33672.setAttribute('id', 'smo33672');
smo33672.setStyle({ fillStyle: '#aaaaaa7f' });
smo33672.addModifier(new VF.Dot(), 0);
smo33700v0ar.push(smo33672);
const smo33673 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33673'] = smo33673;
smo33673.setAttribute('id', 'smo33673');
smo33700v0ar.push(smo33673);
const smo33674 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33674'] = smo33674;
smo33674.setAttribute('id', 'smo33674');
smo33700v0ar.push(smo33674);
const smo33675 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33675'] = smo33675;
smo33675.setAttribute('id', 'smo33675');
smo33700v0ar.push(smo33675);
const smo33676 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33676'] = smo33676;
smo33676.setAttribute('id', 'smo33676');
smo33700v0ar.push(smo33676);
const smo33677 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33677'] = smo33677;
smo33677.setAttribute('id', 'smo33677');
smo33700v0ar.push(smo33677);
const smo33678 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33678'] = smo33678;
smo33678.setAttribute('id', 'smo33678');
smo33700v0ar.push(smo33678);
smo33700v0.addTickables(smo33700v0ar)
fmtsmo337009.joinVoices([smo33700v0]);
const smo33700v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33700v1ar = [];
const smo33679 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
noteHash['smo33679'] = smo33679;
smo33679.setAttribute('id', 'smo33679');
smo33679.setStyle({ fillStyle: "#115511" });
smo33700v1ar.push(smo33679);
const smo33680 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
noteHash['smo33680'] = smo33680;
smo33680.setAttribute('id', 'smo33680');
smo33680.setStyle({ fillStyle: "#115511" });
smo33700v1ar.push(smo33680);
const smo33681 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo33681'] = smo33681;
smo33681.setAttribute('id', 'smo33681');
smo33681.setStyle({ fillStyle: "#115511" });
smo33700v1ar.push(smo33681);
const smo33682 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo33682'] = smo33682;
smo33682.setAttribute('id', 'smo33682');
smo33682.setStyle({ fillStyle: "#115511" });
smo33700v1ar.push(smo33682);
const smo33683 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo33683'] = smo33683;
smo33683.setAttribute('id', 'smo33683');
smo33683.setStyle({ fillStyle: "#115511" });
smo33700v1ar.push(smo33683);
const smo33684 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo33684'] = smo33684;
smo33684.setAttribute('id', 'smo33684');
smo33684.setStyle({ fillStyle: "#115511" });
smo33700v1ar.push(smo33684);
smo33700v1.addTickables(smo33700v1ar)
fmtsmo337009.joinVoices([smo33700v1]);
// create beam groups and tuplets for format grp smo33748 before formatting
const dirsmo35129 = smo33207.getStemDirection();
smo33207.setStemDirection(dirsmo35129);
smo33208.setStemDirection(dirsmo35129);
const smo35129 = new VF.Beam([smo33207,smo33208]);
const dirsmo35130 = smo33213.getStemDirection();
smo33213.setStemDirection(dirsmo35130);
smo33214.setStemDirection(dirsmo35130);
smo33215.setStemDirection(dirsmo35130);
smo33216.setStemDirection(dirsmo35130);
const smo35130 = new VF.Beam([smo33213,smo33214,smo33215,smo33216]);
const dirsmo35131 = smo33217.getStemDirection();
smo33217.setStemDirection(dirsmo35131);
smo33218.setStemDirection(dirsmo35131);
const smo35131 = new VF.Beam([smo33217,smo33218]);
const dirsmo35132 = smo33221.getStemDirection();
smo33221.setStemDirection(dirsmo35132);
smo33222.setStemDirection(dirsmo35132);
const smo35132 = new VF.Beam([smo33221,smo33222]);
const dirsmo35133 = smo33223.getStemDirection();
smo33223.setStemDirection(dirsmo35133);
smo33224.setStemDirection(dirsmo35133);
smo33225.setStemDirection(dirsmo35133);
smo33226.setStemDirection(dirsmo35133);
const smo35133 = new VF.Beam([smo33223,smo33224,smo33225,smo33226]);
const dirsmo35134 = smo33227.getStemDirection();
smo33227.setStemDirection(dirsmo35134);
smo33228.setStemDirection(dirsmo35134);
const smo35134 = new VF.Beam([smo33227,smo33228]);
 
// formatting measures in staff group smo33748
fmtsmo332559.format([smo33255v0,smo33255v1,smo33700v0,smo33700v1], 1117);
const stavesmo33255 = new VF.Stave(103, 1000.0000000000002, 1174);
stavesmo33255.setAttribute('id', 'stavesmo33255');
stavesmo33255.setBegBarType(1);
stavesmo33255.addClef('treble');
stavesmo33255.setContext(context);
stavesmo33255.draw();
smo33255v0.draw(context, stavesmo33255);
smo33255v1.draw(context, stavesmo33255);
smo35129.setContext(context);
smo35129.draw();
smo35130.setContext(context);
smo35130.draw();
smo35131.setContext(context);
smo35131.draw();
smo35132.setContext(context);
smo35132.draw();
smo35133.setContext(context);
smo35133.draw();
smo35134.setContext(context);
smo35134.draw();
const stavesmo33700 = new VF.Stave(103, 1149.0000000000002, 1174);
stavesmo33700.setAttribute('id', 'stavesmo33700');
stavesmo33700.setBegBarType(1);
stavesmo33700.addClef('bass');
stavesmo33700.setContext(context);
stavesmo33700.draw();
smo33700v0.draw(context, stavesmo33700);
smo33700v1.draw(context, stavesmo33700);
const leftsmo33748stavesmo332551 = new VF.StaveConnector(stavesmo33255, stavesmo33700).setType(3);
leftsmo33748stavesmo332551.setContext(context).draw();
const fmtsmo3330310 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo33303v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33303v0ar = [];
const smo33256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo33256'] = smo33256;
smo33256.setAttribute('id', 'smo33256');
smo33303v0ar.push(smo33256);
const smo33257 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo33257'] = smo33257;
smo33257.setAttribute('id', 'smo33257');
smo33303v0ar.push(smo33257);
const smo33258 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
noteHash['smo33258'] = smo33258;
smo33258.setAttribute('id', 'smo33258');
const smo332580acc = new VF.Accidental('#');
smo33258.addModifier(smo332580acc, 0);
smo33303v0ar.push(smo33258);
const smo33259 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
noteHash['smo33259'] = smo33259;
smo33259.setAttribute('id', 'smo33259');
smo33303v0ar.push(smo33259);
const smo33260 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
noteHash['smo33260'] = smo33260;
smo33260.setAttribute('id', 'smo33260');
const smo332600acc = new VF.Accidental('#');
smo33260.addModifier(smo332600acc, 0);
smo33303v0ar.push(smo33260);
const smo33261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
noteHash['smo33261'] = smo33261;
smo33261.setAttribute('id', 'smo33261');
smo33303v0ar.push(smo33261);
const smo33262 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
noteHash['smo33262'] = smo33262;
smo33262.setAttribute('id', 'smo33262');
smo33303v0ar.push(smo33262);
const smo33263 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33263'] = smo33263;
smo33263.setAttribute('id', 'smo33263');
smo33303v0ar.push(smo33263);
const smo33264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo33264'] = smo33264;
smo33264.setAttribute('id', 'smo33264');
smo33303v0ar.push(smo33264);
const smo33265 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo33265'] = smo33265;
smo33265.setAttribute('id', 'smo33265');
smo33303v0ar.push(smo33265);
const smo33266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
noteHash['smo33266'] = smo33266;
smo33266.setAttribute('id', 'smo33266');
smo33303v0ar.push(smo33266);
const smo33267 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
noteHash['smo33267'] = smo33267;
smo33267.setAttribute('id', 'smo33267');
smo33303v0ar.push(smo33267);
const smo33268 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo33268'] = smo33268;
smo33268.setAttribute('id', 'smo33268');
smo33303v0ar.push(smo33268);
const smo33269 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo33269'] = smo33269;
smo33269.setAttribute('id', 'smo33269');
smo33303v0ar.push(smo33269);
const smo33270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo33270'] = smo33270;
smo33270.setAttribute('id', 'smo33270');
smo33303v0ar.push(smo33270);
const smo33271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo33271'] = smo33271;
smo33271.setAttribute('id', 'smo33271');
smo33303v0ar.push(smo33271);
const smo33272 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo33272'] = smo33272;
smo33272.setAttribute('id', 'smo33272');
smo33303v0ar.push(smo33272);
const smo33273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33273'] = smo33273;
smo33273.setAttribute('id', 'smo33273');
smo33303v0ar.push(smo33273);
const smo33274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo33274'] = smo33274;
smo33274.setAttribute('id', 'smo33274');
smo33303v0ar.push(smo33274);
const smo33275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo33275'] = smo33275;
smo33275.setAttribute('id', 'smo33275');
smo33303v0ar.push(smo33275);
const smo33276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo33276'] = smo33276;
smo33276.setAttribute('id', 'smo33276');
smo33303v0ar.push(smo33276);
const smo33277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo33277'] = smo33277;
smo33277.setAttribute('id', 'smo33277');
smo33303v0ar.push(smo33277);
const smo33278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo33278'] = smo33278;
smo33278.setAttribute('id', 'smo33278');
smo33303v0ar.push(smo33278);
const smo33279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33279'] = smo33279;
smo33279.setAttribute('id', 'smo33279');
smo33303v0ar.push(smo33279);
const smo33280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33280'] = smo33280;
smo33280.setAttribute('id', 'smo33280');
smo33303v0ar.push(smo33280);
smo33303v0.addTickables(smo33303v0ar)
fmtsmo3330310.joinVoices([smo33303v0]);
const smo33303v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33303v1ar = [];
const smo33281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33281'] = smo33281;
smo33281.setAttribute('id', 'smo33281');
smo33281.setStyle({ fillStyle: '#aaaaaa7f' });
smo33303v1ar.push(smo33281);
const smo33282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
noteHash['smo33282'] = smo33282;
smo33282.setAttribute('id', 'smo33282');
smo33282.setStyle({ fillStyle: "#115511" });
smo33303v1ar.push(smo33282);
const smo33283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
noteHash['smo33283'] = smo33283;
smo33283.setAttribute('id', 'smo33283');
smo33283.setStyle({ fillStyle: "#115511" });
smo33303v1ar.push(smo33283);
const smo33284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33284'] = smo33284;
smo33284.setAttribute('id', 'smo33284');
smo33284.setStyle({ fillStyle: '#aaaaaa7f' });
smo33303v1ar.push(smo33284);
const smo33285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
noteHash['smo33285'] = smo33285;
smo33285.setAttribute('id', 'smo33285');
smo33285.setStyle({ fillStyle: "#115511" });
smo33303v1ar.push(smo33285);
const smo33286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
noteHash['smo33286'] = smo33286;
smo33286.setAttribute('id', 'smo33286');
smo33286.setStyle({ fillStyle: "#115511" });
smo33303v1ar.push(smo33286);
const smo33287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33287'] = smo33287;
smo33287.setAttribute('id', 'smo33287');
smo33287.setStyle({ fillStyle: "#115511" });
smo33287.addModifier(new VF.Dot(), 0);
smo33303v1ar.push(smo33287);
smo33303v1.addTickables(smo33303v1ar)
fmtsmo3330310.joinVoices([smo33303v1]);
const fmtsmo3373410 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo33734v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33734v0ar = [];
const smo33701 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33701'] = smo33701;
smo33701.setAttribute('id', 'smo33701');
smo33734v0ar.push(smo33701);
const smo33702 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33702'] = smo33702;
smo33702.setAttribute('id', 'smo33702');
smo33702.setStyle({ fillStyle: '#aaaaaa7f' });
smo33702.addModifier(new VF.Dot(), 0);
smo33734v0ar.push(smo33702);
const smo33703 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33703'] = smo33703;
smo33703.setAttribute('id', 'smo33703');
smo33734v0ar.push(smo33703);
const smo33704 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33704'] = smo33704;
smo33704.setAttribute('id', 'smo33704');
smo33704.setStyle({ fillStyle: '#aaaaaa7f' });
smo33704.addModifier(new VF.Dot(), 0);
smo33734v0ar.push(smo33704);
const smo33705 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33705'] = smo33705;
smo33705.setAttribute('id', 'smo33705');
smo33734v0ar.push(smo33705);
const smo33706 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33706'] = smo33706;
smo33706.setAttribute('id', 'smo33706');
smo33734v0ar.push(smo33706);
const smo33707 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
noteHash['smo33707'] = smo33707;
smo33707.setAttribute('id', 'smo33707');
smo33734v0ar.push(smo33707);
const smo33708 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33708'] = smo33708;
smo33708.setAttribute('id', 'smo33708');
smo33734v0ar.push(smo33708);
const smo33709 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo33709'] = smo33709;
smo33709.setAttribute('id', 'smo33709');
smo33734v0ar.push(smo33709);
const smo33710 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo33710'] = smo33710;
smo33710.setAttribute('id', 'smo33710');
smo33734v0ar.push(smo33710);
const smo33711 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo33711'] = smo33711;
smo33711.setAttribute('id', 'smo33711');
smo33734v0ar.push(smo33711);
const smo33712 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo33712'] = smo33712;
smo33712.setAttribute('id', 'smo33712');
smo33734v0ar.push(smo33712);
const smo33713 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
noteHash['smo33713'] = smo33713;
smo33713.setAttribute('id', 'smo33713');
smo33734v0ar.push(smo33713);
smo33734v0.addTickables(smo33734v0ar)
fmtsmo3373410.joinVoices([smo33734v0]);
const smo33734v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33734v1ar = [];
const smo33714 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo33714'] = smo33714;
smo33714.setAttribute('id', 'smo33714');
smo33714.setStyle({ fillStyle: "#115511" });
smo33734v1ar.push(smo33714);
const smo33715 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo33715'] = smo33715;
smo33715.setAttribute('id', 'smo33715');
smo33715.setStyle({ fillStyle: "#115511" });
smo33734v1ar.push(smo33715);
const smo33716 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
noteHash['smo33716'] = smo33716;
smo33716.setAttribute('id', 'smo33716');
smo33716.setStyle({ fillStyle: "#115511" });
smo33734v1ar.push(smo33716);
const smo33717 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/1/n"]}'))
noteHash['smo33717'] = smo33717;
smo33717.setAttribute('id', 'smo33717');
smo33717.setStyle({ fillStyle: "#115511" });
smo33734v1ar.push(smo33717);
const smo33718 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo33718'] = smo33718;
smo33718.setAttribute('id', 'smo33718');
smo33718.setStyle({ fillStyle: "#115511" });
smo33734v1ar.push(smo33718);
smo33734v1.addTickables(smo33734v1ar)
fmtsmo3373410.joinVoices([smo33734v1]);
// create beam groups and tuplets for format grp smo33748 before formatting
const dirsmo35148 = smo33256.getStemDirection();
smo33256.setStemDirection(dirsmo35148);
smo33257.setStemDirection(dirsmo35148);
smo33258.setStemDirection(dirsmo35148);
smo33259.setStemDirection(dirsmo35148);
const smo35148 = new VF.Beam([smo33256,smo33257,smo33258,smo33259]);
const dirsmo35149 = smo33260.getStemDirection();
smo33260.setStemDirection(dirsmo35149);
smo33261.setStemDirection(dirsmo35149);
const smo35149 = new VF.Beam([smo33260,smo33261]);
const dirsmo35150 = smo33264.getStemDirection();
smo33264.setStemDirection(dirsmo35150);
smo33265.setStemDirection(dirsmo35150);
const smo35150 = new VF.Beam([smo33264,smo33265]);
const dirsmo35151 = smo33266.getStemDirection();
smo33266.setStemDirection(dirsmo35151);
smo33267.setStemDirection(dirsmo35151);
smo33268.setStemDirection(dirsmo35151);
smo33269.setStemDirection(dirsmo35151);
const smo35151 = new VF.Beam([smo33266,smo33267,smo33268,smo33269]);
const dirsmo35152 = smo33270.getStemDirection();
smo33270.setStemDirection(dirsmo35152);
smo33271.setStemDirection(dirsmo35152);
const smo35152 = new VF.Beam([smo33270,smo33271]);
const dirsmo35153 = smo33274.getStemDirection();
smo33274.setStemDirection(dirsmo35153);
smo33275.setStemDirection(dirsmo35153);
const smo35153 = new VF.Beam([smo33274,smo33275]);
const dirsmo35154 = smo33276.getStemDirection();
smo33276.setStemDirection(dirsmo35154);
smo33277.setStemDirection(dirsmo35154);
const smo35154 = new VF.Beam([smo33276,smo33277]);
 
// formatting measures in staff group smo33748
fmtsmo3330310.format([smo33303v0,smo33303v1,smo33734v0,smo33734v1], 958);
const stavesmo33303 = new VF.Stave(103, 1323.0000000000002, 1022);
stavesmo33303.setAttribute('id', 'stavesmo33303');
stavesmo33303.setBegBarType(1);
stavesmo33303.setEndBarType(3);
stavesmo33303.addClef('treble');
stavesmo33303.setContext(context);
stavesmo33303.draw();
smo33303v0.draw(context, stavesmo33303);
smo33303v1.draw(context, stavesmo33303);
smo35148.setContext(context);
smo35148.draw();
smo35149.setContext(context);
smo35149.draw();
smo35150.setContext(context);
smo35150.draw();
smo35151.setContext(context);
smo35151.draw();
smo35152.setContext(context);
smo35152.draw();
smo35153.setContext(context);
smo35153.draw();
smo35154.setContext(context);
smo35154.draw();
const stavesmo33734 = new VF.Stave(103, 1466.0000000000002, 1022);
stavesmo33734.setAttribute('id', 'stavesmo33734');
stavesmo33734.setBegBarType(1);
stavesmo33734.setEndBarType(3);
stavesmo33734.addClef('bass');
stavesmo33734.setContext(context);
stavesmo33734.draw();
smo33734v0.draw(context, stavesmo33734);
smo33734v1.draw(context, stavesmo33734);
const leftsmo33748stavesmo333031 = new VF.StaveConnector(stavesmo33303, stavesmo33734).setType(3);
leftsmo33748stavesmo333031.setContext(context).draw();
const smo35247 = new VF.StaveTie({ first_note: smo33140, last_note: smo33141, first_indices: [0], last_indices: [0]});
smo35247.setContext(context).draw();
const smo35248 = new VF.StaveTie({ first_note: smo33143, last_note: smo33145, first_indices: [0], last_indices: [0]});
smo35248.setContext(context).draw();
const smo35249 = new VF.StaveTie({ first_note: smo33147, last_note: smo33149, first_indices: [0], last_indices: [0]});
smo35249.setContext(context).draw();
const smo35250 = new VF.StaveTie({ first_note: smo33176, last_note: smo33177, first_indices: [0], last_indices: [0]});
smo35250.setContext(context).draw();
const smo35251 = new VF.StaveTie({ first_note: smo33179, last_note: smo33181, first_indices: [0], last_indices: [0]});
smo35251.setContext(context).draw();
const smo35252 = new VF.StaveTie({ first_note: smo33208, last_note: smo33209, first_indices: [0], last_indices: [0]});
smo35252.setContext(context).draw();
const smo35253 = new VF.StaveTie({ first_note: smo33218, last_note: smo33219, first_indices: [0], last_indices: [0]});
smo35253.setContext(context).draw();
const smo35254 = new VF.StaveTie({ first_note: smo33228, last_note: smo33229, first_indices: [0], last_indices: [0]});
smo35254.setContext(context).draw();
const smo35255 = new VF.StaveTie({ first_note: smo33261, last_note: smo33262, first_indices: [0], last_indices: [0]});
smo35255.setContext(context).draw();
const smo35256 = new VF.StaveTie({ first_note: smo33271, last_note: smo33272, first_indices: [0], last_indices: [0]});
smo35256.setContext(context).draw();
const smo35257 = new VF.StaveTie({ first_note: smo33277, last_note: smo33278, first_indices: [0], last_indices: [0]});
smo35257.setContext(context).draw();
const smo35258 = new VF.Curve(smo33167, smo33177, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":45},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo35258.setContext(context).draw();
const smo35259 = new VF.Curve(smo33183, null, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"position_end":1}'));
smo35259.setContext(context).draw();
const smo35260 = new VF.Curve(null, smo33209, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"position_end":1}'));
smo35260.setContext(context).draw();
const smo35261 = new VF.Curve(smo33213, smo33219, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":20,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"position_end":2}'));
smo35261.setContext(context).draw();
const smo35262 = new VF.Curve(smo33221, smo33229, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":13,"cps":[{"x":0,"y":30},{"x":0,"y":30}],"invert":true,"position":2,"position_end":2}'));
smo35262.setContext(context).draw();
const smo35263 = new VF.Curve(smo33131, smo33141, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":20,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":2,"position_end":1}'));
smo35263.setContext(context).draw();
const smo35264 = new VF.Curve(smo33091, smo33114, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":20,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"position_end":2}'));
smo35264.setContext(context).draw();
}
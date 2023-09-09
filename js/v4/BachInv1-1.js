// @@ Invention No. 1 p 2/3  by JS Bach
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1590.1531536000011');
svg.setAttributeNS('', 'height', '2057.8452576000013');
svg.setAttributeNS('', 'viewBox', '0 0 1360 1760');
//
// create the musical objects
VF.setMusicFont("Gonville","Bravura","Custom");
const fmtsmo6907810 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo69078v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69078v0ar = [];
const smo69055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo69055.setAttribute('id', 'smo69055');
smo69078v0ar.push(smo69055);
const smo69056 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
smo69056.setAttribute('id', 'smo69056');
const smo690560acc = new VF.Accidental('#');
smo69056.addModifier(smo690560acc, 0);
smo69078v0ar.push(smo69056);
const smo69057 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo69057.setAttribute('id', 'smo69057');
smo69078v0ar.push(smo69057);
const smo69058 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo69058.setAttribute('id', 'smo69058');
smo69078v0ar.push(smo69058);
const smo69059 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo69059.setAttribute('id', 'smo69059');
smo69078v0ar.push(smo69059);
const smo69060 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69060.setAttribute('id', 'smo69060');
smo69078v0ar.push(smo69060);
const smo69061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69061.setAttribute('id', 'smo69061');
smo69078v0ar.push(smo69061);
const smo69062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo69062.setAttribute('id', 'smo69062');
smo69078v0ar.push(smo69062);
smo69078v0.addTickables(smo69078v0ar)
fmtsmo6907810.joinVoices([smo69078v0]);
const fmtsmo6969510 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo69695v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69695v0ar = [];
const smo69664 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo69664.setAttribute('id', 'smo69664');
smo69695v0ar.push(smo69664);
const smo69665 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo69665.setAttribute('id', 'smo69665');
const smo696650acc = new VF.Accidental('b');
smo69665.addModifier(smo696650acc, 0);
smo69695v0ar.push(smo69665);
const smo69666 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo69666.setAttribute('id', 'smo69666');
smo69695v0ar.push(smo69666);
const smo69667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo69667.setAttribute('id', 'smo69667');
smo69695v0ar.push(smo69667);
const smo69668 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo69668.setAttribute('id', 'smo69668');
smo69695v0ar.push(smo69668);
const smo69669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo69669.setAttribute('id', 'smo69669');
smo69695v0ar.push(smo69669);
const smo69670 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo69670.setAttribute('id', 'smo69670');
smo69695v0ar.push(smo69670);
const smo69671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo69671.setAttribute('id', 'smo69671');
smo69695v0ar.push(smo69671);
const smo69672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo69672.setAttribute('id', 'smo69672');
smo69695v0ar.push(smo69672);
const smo69673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo69673.setAttribute('id', 'smo69673');
smo69695v0ar.push(smo69673);
const smo69674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo69674.setAttribute('id', 'smo69674');
smo69695v0ar.push(smo69674);
const smo69675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo69675.setAttribute('id', 'smo69675');
smo69695v0ar.push(smo69675);
const smo69676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo69676.setAttribute('id', 'smo69676');
smo69695v0ar.push(smo69676);
const smo69677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo69677.setAttribute('id', 'smo69677');
smo69695v0ar.push(smo69677);
const smo69678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo69678.setAttribute('id', 'smo69678');
smo69695v0ar.push(smo69678);
const smo69679 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo69679.setAttribute('id', 'smo69679');
smo69695v0ar.push(smo69679);
smo69695v0.addTickables(smo69695v0ar)
fmtsmo6969510.joinVoices([smo69695v0]);
// create beam groups and tuplets for format grp smo70002 before formatting
const dirsmo71927 = smo69055.getStemDirection();
smo69055.setStemDirection(dirsmo71927);
smo69056.setStemDirection(dirsmo71927);
smo69057.setStemDirection(dirsmo71927);
smo69058.setStemDirection(dirsmo71927);
const smo71927 = new VF.Beam([smo69055,smo69056,smo69057,smo69058]);
const dirsmo71928 = smo69059.getStemDirection();
smo69059.setStemDirection(dirsmo71928);
smo69060.setStemDirection(dirsmo71928);
smo69061.setStemDirection(dirsmo71928);
smo69062.setStemDirection(dirsmo71928);
const smo71928 = new VF.Beam([smo69059,smo69060,smo69061,smo69062]);
const dirsmo71931 = smo69664.getStemDirection();
smo69664.setStemDirection(dirsmo71931);
smo69665.setStemDirection(dirsmo71931);
smo69666.setStemDirection(dirsmo71931);
smo69667.setStemDirection(dirsmo71931);
const smo71931 = new VF.Beam([smo69664,smo69665,smo69666,smo69667]);
const dirsmo71932 = smo69668.getStemDirection();
smo69668.setStemDirection(dirsmo71932);
smo69669.setStemDirection(dirsmo71932);
smo69670.setStemDirection(dirsmo71932);
smo69671.setStemDirection(dirsmo71932);
const smo71932 = new VF.Beam([smo69668,smo69669,smo69670,smo69671]);
const dirsmo71933 = smo69672.getStemDirection();
smo69672.setStemDirection(dirsmo71933);
smo69673.setStemDirection(dirsmo71933);
smo69674.setStemDirection(dirsmo71933);
smo69675.setStemDirection(dirsmo71933);
const smo71933 = new VF.Beam([smo69672,smo69673,smo69674,smo69675]);
const dirsmo71934 = smo69676.getStemDirection();
smo69676.setStemDirection(dirsmo71934);
smo69677.setStemDirection(dirsmo71934);
smo69678.setStemDirection(dirsmo71934);
smo69679.setStemDirection(dirsmo71934);
const smo71934 = new VF.Beam([smo69676,smo69677,smo69678,smo69679]);
 
// formatting measures in staff group smo70002
fmtsmo6907810.format([smo69078v0,smo69695v0], 571);
const stavesmo69078 = new VF.Stave(50, 220.00000000000023, 627);
stavesmo69078.setAttribute('id', 'stavesmo69078');
stavesmo69078.setBegBarType(1);
stavesmo69078.addClef('treble');
stavesmo69078.setContext(context);
stavesmo69078.draw();
smo69078v0.draw(context, stavesmo69078);
smo71927.setContext(context);
smo71927.draw();
smo71928.setContext(context);
smo71928.draw();
const stavesmo69695 = new VF.Stave(50, 323.0000000000002, 627);
stavesmo69695.setAttribute('id', 'stavesmo69695');
stavesmo69695.setBegBarType(1);
stavesmo69695.addClef('treble');
stavesmo69695.setContext(context);
stavesmo69695.draw();
smo69695v0.draw(context, stavesmo69695);
smo71931.setContext(context);
smo71931.draw();
smo71932.setContext(context);
smo71932.draw();
smo71933.setContext(context);
smo71933.draw();
smo71934.setContext(context);
smo71934.draw();
const leftsmo70002stavesmo690781 = new VF.StaveConnector(stavesmo69078, stavesmo69695).setType(3);
leftsmo70002stavesmo690781.setContext(context).draw();
const fmtsmo6910111 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo69101v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69101v0ar = [];
const smo69079 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo69079.setAttribute('id', 'smo69079');
smo69101v0ar.push(smo69079);
const smo69080 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo69080.setAttribute('id', 'smo69080');
const smo690800acc = new VF.Accidental('#');
smo69080.addModifier(smo690800acc, 0);
smo69101v0ar.push(smo69080);
const smo69081 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo69081.setAttribute('id', 'smo69081');
const smo690810acc = new VF.Accidental('#');
smo69081.addModifier(smo690810acc, 0);
smo69101v0ar.push(smo69081);
const smo69082 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69082.setAttribute('id', 'smo69082');
smo69101v0ar.push(smo69082);
const smo69083 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69083.setAttribute('id', 'smo69083');
smo69101v0ar.push(smo69083);
const smo69084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo69084.setAttribute('id', 'smo69084');
smo69101v0ar.push(smo69084);
const smo69085 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo69085.setAttribute('id', 'smo69085');
smo69101v0ar.push(smo69085);
smo69101v0.addTickables(smo69101v0ar)
fmtsmo6910111.joinVoices([smo69101v0]);
const fmtsmo6972711 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo69727v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69727v0ar = [];
const smo69696 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo69696.setAttribute('id', 'smo69696');
smo69727v0ar.push(smo69696);
const smo69697 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo69697.setAttribute('id', 'smo69697');
smo69727v0ar.push(smo69697);
const smo69698 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo69698.setAttribute('id', 'smo69698');
smo69727v0ar.push(smo69698);
const smo69699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo69699.setAttribute('id', 'smo69699');
smo69727v0ar.push(smo69699);
const smo69700 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo69700.setAttribute('id', 'smo69700');
smo69727v0ar.push(smo69700);
const smo69701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo69701.setAttribute('id', 'smo69701');
smo69727v0ar.push(smo69701);
const smo69702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo69702.setAttribute('id', 'smo69702');
smo69727v0ar.push(smo69702);
const smo69703 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo69703.setAttribute('id', 'smo69703');
smo69727v0ar.push(smo69703);
const smo69704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo69704.setAttribute('id', 'smo69704');
smo69727v0ar.push(smo69704);
const smo69705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo69705.setAttribute('id', 'smo69705');
smo69727v0ar.push(smo69705);
const smo69706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo69706.setAttribute('id', 'smo69706');
smo69727v0ar.push(smo69706);
const smo69707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo69707.setAttribute('id', 'smo69707');
smo69727v0ar.push(smo69707);
const smo69708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/3/n"]}'))
smo69708.setAttribute('id', 'smo69708');
const smo697080acc = new VF.Accidental('#');
smo69708.addModifier(smo697080acc, 0);
smo69727v0ar.push(smo69708);
const smo69709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo69709.setAttribute('id', 'smo69709');
smo69727v0ar.push(smo69709);
const smo69710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo69710.setAttribute('id', 'smo69710');
smo69727v0ar.push(smo69710);
const smo69711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo69711.setAttribute('id', 'smo69711');
smo69727v0ar.push(smo69711);
smo69727v0.addTickables(smo69727v0ar)
fmtsmo6972711.joinVoices([smo69727v0]);
// create beam groups and tuplets for format grp smo70002 before formatting
const dirsmo71937 = smo69079.getStemDirection();
smo69079.setStemDirection(dirsmo71937);
smo69080.setStemDirection(dirsmo71937);
smo69081.setStemDirection(dirsmo71937);
smo69082.setStemDirection(dirsmo71937);
const smo71937 = new VF.Beam([smo69079,smo69080,smo69081,smo69082]);
const dirsmo71938 = smo69083.getStemDirection();
smo69083.setStemDirection(dirsmo71938);
smo69084.setStemDirection(dirsmo71938);
const smo71938 = new VF.Beam([smo69083,smo69084]);
const dirsmo71941 = smo69696.getStemDirection();
smo69696.setStemDirection(dirsmo71941);
smo69697.setStemDirection(dirsmo71941);
smo69698.setStemDirection(dirsmo71941);
smo69699.setStemDirection(dirsmo71941);
const smo71941 = new VF.Beam([smo69696,smo69697,smo69698,smo69699]);
const dirsmo71942 = smo69700.getStemDirection();
smo69700.setStemDirection(dirsmo71942);
smo69701.setStemDirection(dirsmo71942);
smo69702.setStemDirection(dirsmo71942);
smo69703.setStemDirection(dirsmo71942);
const smo71942 = new VF.Beam([smo69700,smo69701,smo69702,smo69703]);
const dirsmo71943 = smo69704.getStemDirection();
smo69704.setStemDirection(dirsmo71943);
smo69705.setStemDirection(dirsmo71943);
smo69706.setStemDirection(dirsmo71943);
smo69707.setStemDirection(dirsmo71943);
const smo71943 = new VF.Beam([smo69704,smo69705,smo69706,smo69707]);
const dirsmo71944 = smo69708.getStemDirection();
smo69708.setStemDirection(dirsmo71944);
smo69709.setStemDirection(dirsmo71944);
smo69710.setStemDirection(dirsmo71944);
smo69711.setStemDirection(dirsmo71944);
const smo71944 = new VF.Beam([smo69708,smo69709,smo69710,smo69711]);
 
// formatting measures in staff group smo70002
fmtsmo6910111.format([smo69101v0,smo69727v0], 568);
const stavesmo69101 = new VF.Stave(677, 220.00000000000023, 582);
stavesmo69101.setAttribute('id', 'stavesmo69101');
stavesmo69101.setBegBarType(VF.Barline.type.NONE);
stavesmo69101.setContext(context);
stavesmo69101.draw();
smo69101v0.draw(context, stavesmo69101);
smo71937.setContext(context);
smo71937.draw();
smo71938.setContext(context);
smo71938.draw();
const stavesmo69727 = new VF.Stave(677, 323.0000000000002, 582);
stavesmo69727.setAttribute('id', 'stavesmo69727');
stavesmo69727.setBegBarType(VF.Barline.type.NONE);
stavesmo69727.setContext(context);
stavesmo69727.draw();
smo69727v0.draw(context, stavesmo69727);
smo71941.setContext(context);
smo71941.draw();
smo71942.setContext(context);
smo71942.draw();
smo71943.setContext(context);
smo71943.draw();
smo71944.setContext(context);
smo71944.draw();
const rightsmo70002stavesmo691011 = new VF.StaveConnector(stavesmo69101, stavesmo69727).setType(0);
rightsmo70002stavesmo691011.setContext(context).draw();
const fmtsmo6913312 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo69133v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69133v0ar = [];
const smo69102 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo69102.setAttribute('id', 'smo69102');
smo69133v0ar.push(smo69102);
const smo69103 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo69103.setAttribute('id', 'smo69103');
smo69133v0ar.push(smo69103);
const smo69104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo69104.setAttribute('id', 'smo69104');
const smo691040acc = new VF.Accidental('#');
smo69104.addModifier(smo691040acc, 0);
smo69133v0ar.push(smo69104);
const smo69105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo69105.setAttribute('id', 'smo69105');
const smo691050acc = new VF.Accidental('#');
smo69105.addModifier(smo691050acc, 0);
smo69133v0ar.push(smo69105);
const smo69106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo69106.setAttribute('id', 'smo69106');
smo69133v0ar.push(smo69106);
const smo69107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo69107.setAttribute('id', 'smo69107');
smo69133v0ar.push(smo69107);
const smo69108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo69108.setAttribute('id', 'smo69108');
smo69133v0ar.push(smo69108);
const smo69109 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo69109.setAttribute('id', 'smo69109');
smo69133v0ar.push(smo69109);
const smo69110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo69110.setAttribute('id', 'smo69110');
smo69133v0ar.push(smo69110);
const smo69111 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo69111.setAttribute('id', 'smo69111');
smo69133v0ar.push(smo69111);
const smo69112 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo69112.setAttribute('id', 'smo69112');
smo69133v0ar.push(smo69112);
const smo69113 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo69113.setAttribute('id', 'smo69113');
smo69133v0ar.push(smo69113);
const smo69114 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo69114.setAttribute('id', 'smo69114');
smo69133v0ar.push(smo69114);
const smo69115 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo69115.setAttribute('id', 'smo69115');
smo69133v0ar.push(smo69115);
const smo69116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo69116.setAttribute('id', 'smo69116');
smo69133v0ar.push(smo69116);
const smo69117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo69117.setAttribute('id', 'smo69117');
smo69133v0ar.push(smo69117);
smo69133v0.addTickables(smo69133v0ar)
fmtsmo6913312.joinVoices([smo69133v0]);
const fmtsmo6975612 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo69756v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69756v0ar = [];
const smo69728 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo69728.setAttribute('id', 'smo69728');
smo69756v0ar.push(smo69728);
const smo69729 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo69729.setAttribute('id', 'smo69729');
smo69756v0ar.push(smo69729);
const smo69730 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo69730.setAttribute('id', 'smo69730');
smo69730.addModifier(new VF.Dot(), 0);
const smo69731 = new VF.Ornament('mordent_inverted');
smo69730.addModifier(smo69731, 0);
smo69756v0ar.push(smo69730);
const smo69732 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo69732.setAttribute('id', 'smo69732');
smo69756v0ar.push(smo69732);
const smo69733 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo69733.setAttribute('id', 'smo69733');
smo69756v0ar.push(smo69733);
const smo69734 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo69734.setAttribute('id', 'smo69734');
smo69756v0ar.push(smo69734);
const smo69735 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo69735.setAttribute('id', 'smo69735');
smo69756v0ar.push(smo69735);
const smo69736 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo69736.setAttribute('id', 'smo69736');
const smo697360acc = new VF.Accidental('n');
smo697360acc.setAsCautionary();
smo69736.addModifier(smo697360acc, 0);
smo69756v0ar.push(smo69736);
const smo69737 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
smo69737.setAttribute('id', 'smo69737');
const smo697370acc = new VF.Accidental('#');
smo69737.addModifier(smo697370acc, 0);
smo69756v0ar.push(smo69737);
const smo69738 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo69738.setAttribute('id', 'smo69738');
smo69756v0ar.push(smo69738);
const smo69739 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/3/n"]}'))
smo69739.setAttribute('id', 'smo69739');
const smo697390acc = new VF.Accidental('#');
smo69739.addModifier(smo697390acc, 0);
smo69756v0ar.push(smo69739);
const smo69740 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo69740.setAttribute('id', 'smo69740');
smo69756v0ar.push(smo69740);
smo69756v0.addTickables(smo69756v0ar)
fmtsmo6975612.joinVoices([smo69756v0]);
// create beam groups and tuplets for format grp smo70002 before formatting
const dirsmo71959 = smo69102.getStemDirection();
smo69102.setStemDirection(dirsmo71959);
smo69103.setStemDirection(dirsmo71959);
smo69104.setStemDirection(dirsmo71959);
smo69105.setStemDirection(dirsmo71959);
const smo71959 = new VF.Beam([smo69102,smo69103,smo69104,smo69105]);
const dirsmo71960 = smo69106.getStemDirection();
smo69106.setStemDirection(dirsmo71960);
smo69107.setStemDirection(dirsmo71960);
smo69108.setStemDirection(dirsmo71960);
smo69109.setStemDirection(dirsmo71960);
const smo71960 = new VF.Beam([smo69106,smo69107,smo69108,smo69109]);
const dirsmo71961 = smo69110.getStemDirection();
smo69110.setStemDirection(dirsmo71961);
smo69111.setStemDirection(dirsmo71961);
smo69112.setStemDirection(dirsmo71961);
smo69113.setStemDirection(dirsmo71961);
const smo71961 = new VF.Beam([smo69110,smo69111,smo69112,smo69113]);
const dirsmo71962 = smo69114.getStemDirection();
smo69114.setStemDirection(dirsmo71962);
smo69115.setStemDirection(dirsmo71962);
smo69116.setStemDirection(dirsmo71962);
smo69117.setStemDirection(dirsmo71962);
const smo71962 = new VF.Beam([smo69114,smo69115,smo69116,smo69117]);
const dirsmo71965 = smo69728.getStemDirection();
smo69728.setStemDirection(dirsmo71965);
smo69729.setStemDirection(dirsmo71965);
const smo71965 = new VF.Beam([smo69728,smo69729]);
const dirsmo71966 = smo69730.getStemDirection();
smo69730.setStemDirection(dirsmo71966);
smo69732.setStemDirection(dirsmo71966);
const smo71966 = new VF.Beam([smo69730,smo69732]);
const dirsmo71967 = smo69733.getStemDirection();
smo69733.setStemDirection(dirsmo71967);
smo69734.setStemDirection(dirsmo71967);
smo69735.setStemDirection(dirsmo71967);
smo69736.setStemDirection(dirsmo71967);
const smo71967 = new VF.Beam([smo69733,smo69734,smo69735,smo69736]);
const dirsmo71968 = smo69737.getStemDirection();
smo69737.setStemDirection(dirsmo71968);
smo69738.setStemDirection(dirsmo71968);
smo69739.setStemDirection(dirsmo71968);
smo69740.setStemDirection(dirsmo71968);
const smo71968 = new VF.Beam([smo69737,smo69738,smo69739,smo69740]);
 
// formatting measures in staff group smo70002
fmtsmo6913312.format([smo69133v0,smo69756v0], 623);
const stavesmo69133 = new VF.Stave(50, 483.0000000000002, 678);
stavesmo69133.setAttribute('id', 'stavesmo69133');
stavesmo69133.setBegBarType(1);
stavesmo69133.addClef('treble');
stavesmo69133.setContext(context);
stavesmo69133.draw();
smo69133v0.draw(context, stavesmo69133);
smo71959.setContext(context);
smo71959.draw();
smo71960.setContext(context);
smo71960.draw();
smo71961.setContext(context);
smo71961.draw();
smo71962.setContext(context);
smo71962.draw();
const stavesmo69756 = new VF.Stave(50, 627.0000000000002, 678);
stavesmo69756.setAttribute('id', 'stavesmo69756');
stavesmo69756.setBegBarType(1);
stavesmo69756.addClef('bass');
stavesmo69756.setContext(context);
stavesmo69756.draw();
smo69756v0.draw(context, stavesmo69756);
smo71965.setContext(context);
smo71965.draw();
smo71966.setContext(context);
smo71966.draw();
smo71967.setContext(context);
smo71967.draw();
smo71968.setContext(context);
smo71968.draw();
const leftsmo70002stavesmo691331 = new VF.StaveConnector(stavesmo69133, stavesmo69756).setType(3);
leftsmo70002stavesmo691331.setContext(context).draw();
const fmtsmo6916513 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo69165v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69165v0ar = [];
const smo69134 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo69134.setAttribute('id', 'smo69134');
smo69165v0ar.push(smo69134);
const smo69135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo69135.setAttribute('id', 'smo69135');
smo69165v0ar.push(smo69135);
const smo69136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/5/n"]}'))
smo69136.setAttribute('id', 'smo69136');
const smo691360acc = new VF.Accidental('#');
smo69136.addModifier(smo691360acc, 0);
smo69165v0ar.push(smo69136);
const smo69137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
smo69137.setAttribute('id', 'smo69137');
smo69165v0ar.push(smo69137);
const smo69138 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo69138.setAttribute('id', 'smo69138');
smo69165v0ar.push(smo69138);
const smo69139 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo69139.setAttribute('id', 'smo69139');
smo69165v0ar.push(smo69139);
const smo69140 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo69140.setAttribute('id', 'smo69140');
smo69165v0ar.push(smo69140);
const smo69141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo69141.setAttribute('id', 'smo69141');
smo69165v0ar.push(smo69141);
const smo69142 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo69142.setAttribute('id', 'smo69142');
const smo691420acc = new VF.Accidental('#');
smo69142.addModifier(smo691420acc, 0);
smo69165v0ar.push(smo69142);
const smo69143 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo69143.setAttribute('id', 'smo69143');
smo69165v0ar.push(smo69143);
const smo69144 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo69144.setAttribute('id', 'smo69144');
smo69165v0ar.push(smo69144);
const smo69145 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo69145.setAttribute('id', 'smo69145');
smo69165v0ar.push(smo69145);
const smo69146 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo69146.setAttribute('id', 'smo69146');
const smo69147 = new VF.Ornament('mordent');
smo69146.addModifier(smo69147, 0);
smo69165v0ar.push(smo69146);
const smo69148 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo69148.setAttribute('id', 'smo69148');
smo69165v0ar.push(smo69148);
const smo69149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo69149.setAttribute('id', 'smo69149');
smo69165v0ar.push(smo69149);
smo69165v0.addTickables(smo69165v0ar)
fmtsmo6916513.joinVoices([smo69165v0]);
const fmtsmo6978413 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo69784v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69784v0ar = [];
const smo69757 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo69757.setAttribute('id', 'smo69757');
smo69784v0ar.push(smo69757);
const smo69758 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo69758.setAttribute('id', 'smo69758');
smo69784v0ar.push(smo69758);
const smo69759 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo69759.setAttribute('id', 'smo69759');
smo69784v0ar.push(smo69759);
const smo69760 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo69760.setAttribute('id', 'smo69760');
smo69784v0ar.push(smo69760);
const smo69761 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo69761.setAttribute('id', 'smo69761');
smo69784v0ar.push(smo69761);
const smo69762 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo69762.setAttribute('id', 'smo69762');
smo69784v0ar.push(smo69762);
const smo69763 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo69763.setAttribute('id', 'smo69763');
smo69784v0ar.push(smo69763);
const smo69764 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo69764.setAttribute('id', 'smo69764');
smo69784v0ar.push(smo69764);
const smo69765 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo69765.setAttribute('id', 'smo69765');
smo69784v0ar.push(smo69765);
const smo69766 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo69766.setAttribute('id', 'smo69766');
smo69784v0ar.push(smo69766);
const smo69767 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo69767.setAttribute('id', 'smo69767');
smo69784v0ar.push(smo69767);
const smo69768 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo69768.setAttribute('id', 'smo69768');
smo69784v0ar.push(smo69768);
smo69784v0.addTickables(smo69784v0ar)
fmtsmo6978413.joinVoices([smo69784v0]);
// create beam groups and tuplets for format grp smo70002 before formatting
const dirsmo71971 = smo69134.getStemDirection();
smo69134.setStemDirection(dirsmo71971);
smo69135.setStemDirection(dirsmo71971);
smo69136.setStemDirection(dirsmo71971);
smo69137.setStemDirection(dirsmo71971);
const smo71971 = new VF.Beam([smo69134,smo69135,smo69136,smo69137]);
const dirsmo71972 = smo69138.getStemDirection();
smo69138.setStemDirection(dirsmo71972);
smo69139.setStemDirection(dirsmo71972);
smo69140.setStemDirection(dirsmo71972);
smo69141.setStemDirection(dirsmo71972);
const smo71972 = new VF.Beam([smo69138,smo69139,smo69140,smo69141]);
const dirsmo71973 = smo69142.getStemDirection();
smo69142.setStemDirection(dirsmo71973);
smo69143.setStemDirection(dirsmo71973);
smo69144.setStemDirection(dirsmo71973);
smo69145.setStemDirection(dirsmo71973);
const smo71973 = new VF.Beam([smo69142,smo69143,smo69144,smo69145]);
const dirsmo71974 = smo69146.getStemDirection();
smo69146.setStemDirection(dirsmo71974);
smo69148.setStemDirection(dirsmo71974);
smo69149.setStemDirection(dirsmo71974);
const smo71974 = new VF.Beam([smo69146,smo69148,smo69149]);
const dirsmo71977 = smo69757.getStemDirection();
smo69757.setStemDirection(dirsmo71977);
smo69758.setStemDirection(dirsmo71977);
smo69759.setStemDirection(dirsmo71977);
smo69760.setStemDirection(dirsmo71977);
const smo71977 = new VF.Beam([smo69757,smo69758,smo69759,smo69760]);
const dirsmo71978 = smo69761.getStemDirection();
smo69761.setStemDirection(dirsmo71978);
smo69762.setStemDirection(dirsmo71978);
smo69763.setStemDirection(dirsmo71978);
smo69764.setStemDirection(dirsmo71978);
const smo71978 = new VF.Beam([smo69761,smo69762,smo69763,smo69764]);
const dirsmo71979 = smo69765.getStemDirection();
smo69765.setStemDirection(dirsmo71979);
smo69766.setStemDirection(dirsmo71979);
const smo71979 = new VF.Beam([smo69765,smo69766]);
const dirsmo71980 = smo69767.getStemDirection();
smo69767.setStemDirection(dirsmo71980);
smo69768.setStemDirection(dirsmo71980);
const smo71980 = new VF.Beam([smo69767,smo69768]);
 
// formatting measures in staff group smo70002
fmtsmo6916513.format([smo69165v0,smo69784v0], 518);
const stavesmo69165 = new VF.Stave(728, 483.0000000000002, 532);
stavesmo69165.setAttribute('id', 'stavesmo69165');
stavesmo69165.setBegBarType(VF.Barline.type.NONE);
stavesmo69165.setContext(context);
stavesmo69165.draw();
smo69165v0.draw(context, stavesmo69165);
smo71971.setContext(context);
smo71971.draw();
smo71972.setContext(context);
smo71972.draw();
smo71973.setContext(context);
smo71973.draw();
smo71974.setContext(context);
smo71974.draw();
const stavesmo69784 = new VF.Stave(728, 627.0000000000002, 532);
stavesmo69784.setAttribute('id', 'stavesmo69784');
stavesmo69784.setBegBarType(VF.Barline.type.NONE);
stavesmo69784.setContext(context);
stavesmo69784.draw();
smo69784v0.draw(context, stavesmo69784);
smo71977.setContext(context);
smo71977.draw();
smo71978.setContext(context);
smo71978.draw();
smo71979.setContext(context);
smo71979.draw();
smo71980.setContext(context);
smo71980.draw();
const rightsmo70002stavesmo691651 = new VF.StaveConnector(stavesmo69165, stavesmo69784).setType(0);
rightsmo70002stavesmo691651.setContext(context).draw();
const fmtsmo6919114 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo69191v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69191v0ar = [];
const smo69166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo69166.setAttribute('id', 'smo69166');
const  smo72211 = new VF.Articulation('a.').setPosition(4);
smo69166.addModifier(smo72211, 0);
smo69191v0ar.push(smo69166);
const smo69168 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo69168.setAttribute('id', 'smo69168');
smo69191v0ar.push(smo69168);
const smo69169 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo69169.setAttribute('id', 'smo69169');
smo69191v0ar.push(smo69169);
const smo69170 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo69170.setAttribute('id', 'smo69170');
smo69191v0ar.push(smo69170);
const smo69171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo69171.setAttribute('id', 'smo69171');
smo69191v0ar.push(smo69171);
const smo69172 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo69172.setAttribute('id', 'smo69172');
smo69191v0ar.push(smo69172);
const smo69173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo69173.setAttribute('id', 'smo69173');
smo69191v0ar.push(smo69173);
const smo69174 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo69174.setAttribute('id', 'smo69174');
smo69191v0ar.push(smo69174);
const smo69175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo69175.setAttribute('id', 'smo69175');
smo69191v0ar.push(smo69175);
smo69191v0.addTickables(smo69191v0ar)
fmtsmo6919114.joinVoices([smo69191v0]);
const fmtsmo6981114 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo69811v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69811v0ar = [];
const smo69785 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo69785.setAttribute('id', 'smo69785');
smo69811v0ar.push(smo69785);
const smo69786 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo69786.setAttribute('id', 'smo69786');
smo69811v0ar.push(smo69786);
const smo69787 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["cn/4/r"]}'))
smo69787.setAttribute('id', 'smo69787');
smo69811v0ar.push(smo69787);
const smo69788 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["en/4/r"]}'))
smo69788.setAttribute('id', 'smo69788');
smo69811v0ar.push(smo69788);
const smo69789 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo69789.setAttribute('id', 'smo69789');
smo69811v0ar.push(smo69789);
const smo69790 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo69790.setAttribute('id', 'smo69790');
smo69811v0ar.push(smo69790);
const smo69791 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo69791.setAttribute('id', 'smo69791');
smo69811v0ar.push(smo69791);
const smo69792 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo69792.setAttribute('id', 'smo69792');
smo69811v0ar.push(smo69792);
const smo69793 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo69793.setAttribute('id', 'smo69793');
smo69811v0ar.push(smo69793);
const smo69794 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["c#/4/n"]}'))
smo69794.setAttribute('id', 'smo69794');
const smo697940acc = new VF.Accidental('#');
smo69794.addModifier(smo697940acc, 0);
smo69811v0ar.push(smo69794);
const smo69795 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo69795.setAttribute('id', 'smo69795');
smo69811v0ar.push(smo69795);
smo69811v0.addTickables(smo69811v0ar)
fmtsmo6981114.joinVoices([smo69811v0]);
// create beam groups and tuplets for format grp smo70002 before formatting
const dirsmo71992 = smo69166.getStemDirection();
smo69166.setStemDirection(dirsmo71992);
smo69168.setStemDirection(dirsmo71992);
smo69169.setStemDirection(dirsmo71992);
smo69170.setStemDirection(dirsmo71992);
const smo71992 = new VF.Beam([smo69166,smo69168,smo69169,smo69170]);
const dirsmo71993 = smo69171.getStemDirection();
smo69171.setStemDirection(dirsmo71993);
smo69172.setStemDirection(dirsmo71993);
smo69173.setStemDirection(dirsmo71993);
smo69174.setStemDirection(dirsmo71993);
const smo71993 = new VF.Beam([smo69171,smo69172,smo69173,smo69174]);
const dirsmo71996 = smo69785.getStemDirection();
smo69785.setStemDirection(dirsmo71996);
smo69786.setStemDirection(dirsmo71996);
const smo71996 = new VF.Beam([smo69785,smo69786]);
const dirsmo71997 = smo69789.getStemDirection();
smo69789.setStemDirection(dirsmo71997);
smo69790.setStemDirection(dirsmo71997);
smo69791.setStemDirection(dirsmo71997);
const smo71997 = new VF.Beam([smo69789,smo69790,smo69791]);
const dirsmo71998 = smo69792.getStemDirection();
smo69792.setStemDirection(dirsmo71998);
smo69793.setStemDirection(dirsmo71998);
smo69794.setStemDirection(dirsmo71998);
smo69795.setStemDirection(dirsmo71998);
const smo71998 = new VF.Beam([smo69792,smo69793,smo69794,smo69795]);
 
// formatting measures in staff group smo70002
fmtsmo6919114.format([smo69191v0,smo69811v0], 568);
const stavesmo69191 = new VF.Stave(50, 793.0000000000002, 624);
stavesmo69191.setAttribute('id', 'stavesmo69191');
stavesmo69191.setBegBarType(1);
stavesmo69191.addClef('treble');
stavesmo69191.setContext(context);
stavesmo69191.draw();
smo69191v0.draw(context, stavesmo69191);
smo71992.setContext(context);
smo71992.draw();
smo71993.setContext(context);
smo71993.draw();
const stavesmo69811 = new VF.Stave(50, 927.0000000000002, 624);
stavesmo69811.setAttribute('id', 'stavesmo69811');
stavesmo69811.setBegBarType(1);
stavesmo69811.addClef('bass');
stavesmo69811.setContext(context);
stavesmo69811.draw();
smo69811v0.draw(context, stavesmo69811);
smo71996.setContext(context);
smo71996.draw();
smo71997.setContext(context);
smo71997.draw();
smo71998.setContext(context);
smo71998.draw();
const leftsmo70002stavesmo691911 = new VF.StaveConnector(stavesmo69191, stavesmo69811).setType(3);
leftsmo70002stavesmo691911.setContext(context).draw();
const fmtsmo6921615 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo69216v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69216v0ar = [];
const smo69192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo69192.setAttribute('id', 'smo69192');
smo69216v0ar.push(smo69192);
const smo69193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo69193.setAttribute('id', 'smo69193');
smo69216v0ar.push(smo69193);
const smo69194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo69194.setAttribute('id', 'smo69194');
smo69216v0ar.push(smo69194);
const smo69195 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo69195.setAttribute('id', 'smo69195');
smo69216v0ar.push(smo69195);
const smo69196 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/5/n"]}'))
smo69196.setAttribute('id', 'smo69196');
smo69216v0ar.push(smo69196);
const smo69197 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo69197.setAttribute('id', 'smo69197');
smo69216v0ar.push(smo69197);
const smo69198 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo69198.setAttribute('id', 'smo69198');
smo69216v0ar.push(smo69198);
const smo69199 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo69199.setAttribute('id', 'smo69199');
smo69216v0ar.push(smo69199);
const smo69200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo69200.setAttribute('id', 'smo69200');
smo69216v0ar.push(smo69200);
smo69216v0.addTickables(smo69216v0ar)
fmtsmo6921615.joinVoices([smo69216v0]);
const fmtsmo6983615 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo69836v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69836v0ar = [];
const smo69812 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo69812.setAttribute('id', 'smo69812');
smo69836v0ar.push(smo69812);
const smo69813 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo69813.setAttribute('id', 'smo69813');
smo69836v0ar.push(smo69813);
const smo69814 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo69814.setAttribute('id', 'smo69814');
smo69836v0ar.push(smo69814);
const smo69815 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo69815.setAttribute('id', 'smo69815');
smo69836v0ar.push(smo69815);
const smo69816 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo69816.setAttribute('id', 'smo69816');
smo69836v0ar.push(smo69816);
const smo69817 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo69817.setAttribute('id', 'smo69817');
smo69836v0ar.push(smo69817);
const smo69818 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo69818.setAttribute('id', 'smo69818');
smo69836v0ar.push(smo69818);
const smo69819 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo69819.setAttribute('id', 'smo69819');
smo69836v0ar.push(smo69819);
const smo69820 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo69820.setAttribute('id', 'smo69820');
smo69836v0ar.push(smo69820);
smo69836v0.addTickables(smo69836v0ar)
fmtsmo6983615.joinVoices([smo69836v0]);
// create beam groups and tuplets for format grp smo70002 before formatting
const dirsmo72001 = smo69192.getStemDirection();
smo69192.setStemDirection(dirsmo72001);
smo69193.setStemDirection(dirsmo72001);
smo69194.setStemDirection(dirsmo72001);
smo69195.setStemDirection(dirsmo72001);
const smo72001 = new VF.Beam([smo69192,smo69193,smo69194,smo69195]);
const dirsmo72002 = smo69196.getStemDirection();
smo69196.setStemDirection(dirsmo72002);
smo69197.setStemDirection(dirsmo72002);
smo69198.setStemDirection(dirsmo72002);
smo69199.setStemDirection(dirsmo72002);
const smo72002 = new VF.Beam([smo69196,smo69197,smo69198,smo69199]);
const dirsmo72005 = smo69813.getStemDirection();
smo69813.setStemDirection(dirsmo72005);
smo69814.setStemDirection(dirsmo72005);
smo69815.setStemDirection(dirsmo72005);
smo69816.setStemDirection(dirsmo72005);
const smo72005 = new VF.Beam([smo69813,smo69814,smo69815,smo69816]);
const dirsmo72006 = smo69817.getStemDirection();
smo69817.setStemDirection(dirsmo72006);
smo69818.setStemDirection(dirsmo72006);
smo69819.setStemDirection(dirsmo72006);
smo69820.setStemDirection(dirsmo72006);
const smo72006 = new VF.Beam([smo69817,smo69818,smo69819,smo69820]);
 
// formatting measures in staff group smo70002
fmtsmo6921615.format([smo69216v0,smo69836v0], 572);
const stavesmo69216 = new VF.Stave(674, 793.0000000000002, 586);
stavesmo69216.setAttribute('id', 'stavesmo69216');
stavesmo69216.setBegBarType(VF.Barline.type.NONE);
stavesmo69216.setContext(context);
stavesmo69216.draw();
smo69216v0.draw(context, stavesmo69216);
smo72001.setContext(context);
smo72001.draw();
smo72002.setContext(context);
smo72002.draw();
const stavesmo69836 = new VF.Stave(674, 927.0000000000002, 586);
stavesmo69836.setAttribute('id', 'stavesmo69836');
stavesmo69836.setBegBarType(VF.Barline.type.NONE);
stavesmo69836.setContext(context);
stavesmo69836.draw();
smo69836v0.draw(context, stavesmo69836);
smo72005.setContext(context);
smo72005.draw();
smo72006.setContext(context);
smo72006.draw();
const rightsmo70002stavesmo692161 = new VF.StaveConnector(stavesmo69216, stavesmo69836).setType(0);
rightsmo70002stavesmo692161.setContext(context).draw();
const fmtsmo6924216 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo69242v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69242v0ar = [];
const smo69217 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo69217.setAttribute('id', 'smo69217');
const  smo72220 = new VF.Articulation('a.').setPosition(3);
smo69217.addModifier(smo72220, 0);
smo69242v0ar.push(smo69217);
const smo69219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo69219.setAttribute('id', 'smo69219');
smo69242v0ar.push(smo69219);
const smo69220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo69220.setAttribute('id', 'smo69220');
smo69242v0ar.push(smo69220);
const smo69221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo69221.setAttribute('id', 'smo69221');
smo69242v0ar.push(smo69221);
const smo69222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo69222.setAttribute('id', 'smo69222');
smo69242v0ar.push(smo69222);
const smo69223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo69223.setAttribute('id', 'smo69223');
smo69242v0ar.push(smo69223);
const smo69224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo69224.setAttribute('id', 'smo69224');
smo69242v0ar.push(smo69224);
const smo69225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo69225.setAttribute('id', 'smo69225');
smo69242v0ar.push(smo69225);
const smo69226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo69226.setAttribute('id', 'smo69226');
smo69242v0ar.push(smo69226);
smo69242v0.addTickables(smo69242v0ar)
fmtsmo6924216.joinVoices([smo69242v0]);
const fmtsmo6986116 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo69861v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69861v0ar = [];
const smo69837 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo69837.setAttribute('id', 'smo69837');
smo69861v0ar.push(smo69837);
const smo69838 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo69838.setAttribute('id', 'smo69838');
smo69861v0ar.push(smo69838);
const smo69839 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo69839.setAttribute('id', 'smo69839');
smo69861v0ar.push(smo69839);
const smo69840 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo69840.setAttribute('id', 'smo69840');
smo69861v0ar.push(smo69840);
const smo69841 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo69841.setAttribute('id', 'smo69841');
smo69861v0ar.push(smo69841);
const smo69842 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo69842.setAttribute('id', 'smo69842');
smo69861v0ar.push(smo69842);
const smo69843 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo69843.setAttribute('id', 'smo69843');
smo69861v0ar.push(smo69843);
const smo69844 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo69844.setAttribute('id', 'smo69844');
smo69861v0ar.push(smo69844);
const smo69845 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo69845.setAttribute('id', 'smo69845');
smo69861v0ar.push(smo69845);
smo69861v0.addTickables(smo69861v0ar)
fmtsmo6986116.joinVoices([smo69861v0]);
// create beam groups and tuplets for format grp smo70002 before formatting
const dirsmo72017 = smo69217.getStemDirection();
smo69217.setStemDirection(dirsmo72017);
smo69219.setStemDirection(dirsmo72017);
smo69220.setStemDirection(dirsmo72017);
smo69221.setStemDirection(dirsmo72017);
const smo72017 = new VF.Beam([smo69217,smo69219,smo69220,smo69221]);
const dirsmo72018 = smo69222.getStemDirection();
smo69222.setStemDirection(dirsmo72018);
smo69223.setStemDirection(dirsmo72018);
smo69224.setStemDirection(dirsmo72018);
smo69225.setStemDirection(dirsmo72018);
const smo72018 = new VF.Beam([smo69222,smo69223,smo69224,smo69225]);
const dirsmo72021 = smo69838.getStemDirection();
smo69838.setStemDirection(dirsmo72021);
smo69839.setStemDirection(dirsmo72021);
smo69840.setStemDirection(dirsmo72021);
smo69841.setStemDirection(dirsmo72021);
const smo72021 = new VF.Beam([smo69838,smo69839,smo69840,smo69841]);
const dirsmo72022 = smo69842.getStemDirection();
smo69842.setStemDirection(dirsmo72022);
smo69843.setStemDirection(dirsmo72022);
smo69844.setStemDirection(dirsmo72022);
smo69845.setStemDirection(dirsmo72022);
const smo72022 = new VF.Beam([smo69842,smo69843,smo69844,smo69845]);
 
// formatting measures in staff group smo70002
fmtsmo6924216.format([smo69242v0,smo69861v0], 561);
const stavesmo69242 = new VF.Stave(50, 1058.0000000000002, 616);
stavesmo69242.setAttribute('id', 'stavesmo69242');
stavesmo69242.setBegBarType(1);
stavesmo69242.addClef('treble');
stavesmo69242.setContext(context);
stavesmo69242.draw();
smo69242v0.draw(context, stavesmo69242);
smo72017.setContext(context);
smo72017.draw();
smo72018.setContext(context);
smo72018.draw();
const stavesmo69861 = new VF.Stave(50, 1177.0000000000002, 616);
stavesmo69861.setAttribute('id', 'stavesmo69861');
stavesmo69861.setBegBarType(1);
stavesmo69861.addClef('bass');
stavesmo69861.setContext(context);
stavesmo69861.draw();
smo69861v0.draw(context, stavesmo69861);
smo72021.setContext(context);
smo72021.draw();
smo72022.setContext(context);
smo72022.draw();
const leftsmo70002stavesmo692421 = new VF.StaveConnector(stavesmo69242, stavesmo69861).setType(3);
leftsmo70002stavesmo692421.setContext(context).draw();
const fmtsmo6926717 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo69267v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69267v0ar = [];
const smo69243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo69243.setAttribute('id', 'smo69243');
smo69267v0ar.push(smo69243);
const smo69244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo69244.setAttribute('id', 'smo69244');
smo69267v0ar.push(smo69244);
const smo69245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo69245.setAttribute('id', 'smo69245');
smo69267v0ar.push(smo69245);
const smo69246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo69246.setAttribute('id', 'smo69246');
smo69267v0ar.push(smo69246);
const smo69247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo69247.setAttribute('id', 'smo69247');
smo69267v0ar.push(smo69247);
const smo69248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo69248.setAttribute('id', 'smo69248');
smo69267v0ar.push(smo69248);
const smo69249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo69249.setAttribute('id', 'smo69249');
smo69267v0ar.push(smo69249);
const smo69250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo69250.setAttribute('id', 'smo69250');
smo69267v0ar.push(smo69250);
const smo69251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo69251.setAttribute('id', 'smo69251');
smo69267v0ar.push(smo69251);
smo69267v0.addTickables(smo69267v0ar)
fmtsmo6926717.joinVoices([smo69267v0]);
const fmtsmo6988617 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo69886v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69886v0ar = [];
const smo69862 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo69862.setAttribute('id', 'smo69862');
smo69886v0ar.push(smo69862);
const smo69863 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo69863.setAttribute('id', 'smo69863');
smo69886v0ar.push(smo69863);
const smo69864 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo69864.setAttribute('id', 'smo69864');
smo69886v0ar.push(smo69864);
const smo69865 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo69865.setAttribute('id', 'smo69865');
smo69886v0ar.push(smo69865);
const smo69866 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo69866.setAttribute('id', 'smo69866');
const smo698660acc = new VF.Accidental('b');
smo69866.addModifier(smo698660acc, 0);
smo69886v0ar.push(smo69866);
const smo69867 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo69867.setAttribute('id', 'smo69867');
smo69886v0ar.push(smo69867);
const smo69868 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo69868.setAttribute('id', 'smo69868');
smo69886v0ar.push(smo69868);
const smo69869 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo69869.setAttribute('id', 'smo69869');
smo69886v0ar.push(smo69869);
const smo69870 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo69870.setAttribute('id', 'smo69870');
smo69886v0ar.push(smo69870);
smo69886v0.addTickables(smo69886v0ar)
fmtsmo6988617.joinVoices([smo69886v0]);
// create beam groups and tuplets for format grp smo70002 before formatting
const dirsmo72025 = smo69243.getStemDirection();
smo69243.setStemDirection(dirsmo72025);
smo69244.setStemDirection(dirsmo72025);
smo69245.setStemDirection(dirsmo72025);
smo69246.setStemDirection(dirsmo72025);
const smo72025 = new VF.Beam([smo69243,smo69244,smo69245,smo69246]);
const dirsmo72026 = smo69247.getStemDirection();
smo69247.setStemDirection(dirsmo72026);
smo69248.setStemDirection(dirsmo72026);
smo69249.setStemDirection(dirsmo72026);
smo69250.setStemDirection(dirsmo72026);
const smo72026 = new VF.Beam([smo69247,smo69248,smo69249,smo69250]);
const dirsmo72029 = smo69863.getStemDirection();
smo69863.setStemDirection(dirsmo72029);
smo69864.setStemDirection(dirsmo72029);
smo69865.setStemDirection(dirsmo72029);
smo69866.setStemDirection(dirsmo72029);
const smo72029 = new VF.Beam([smo69863,smo69864,smo69865,smo69866]);
const dirsmo72030 = smo69867.getStemDirection();
smo69867.setStemDirection(dirsmo72030);
smo69868.setStemDirection(dirsmo72030);
smo69869.setStemDirection(dirsmo72030);
smo69870.setStemDirection(dirsmo72030);
const smo72030 = new VF.Beam([smo69867,smo69868,smo69869,smo69870]);
 
// formatting measures in staff group smo70002
fmtsmo6926717.format([smo69267v0,smo69886v0], 579);
const stavesmo69267 = new VF.Stave(666, 1058.0000000000002, 593);
stavesmo69267.setAttribute('id', 'stavesmo69267');
stavesmo69267.setBegBarType(VF.Barline.type.NONE);
stavesmo69267.setContext(context);
stavesmo69267.draw();
smo69267v0.draw(context, stavesmo69267);
smo72025.setContext(context);
smo72025.draw();
smo72026.setContext(context);
smo72026.draw();
const stavesmo69886 = new VF.Stave(666, 1177.0000000000002, 593);
stavesmo69886.setAttribute('id', 'stavesmo69886');
stavesmo69886.setBegBarType(VF.Barline.type.NONE);
stavesmo69886.setContext(context);
stavesmo69886.draw();
smo69886v0.draw(context, stavesmo69886);
smo72029.setContext(context);
smo72029.draw();
smo72030.setContext(context);
smo72030.draw();
const rightsmo70002stavesmo692671 = new VF.StaveConnector(stavesmo69267, stavesmo69886).setType(0);
rightsmo70002stavesmo692671.setContext(context).draw();
const fmtsmo6930018 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo69300v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69300v0ar = [];
const smo69268 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo69268.setAttribute('id', 'smo69268');
const  smo72229 = new VF.Articulation('a.').setPosition(3);
smo69268.addModifier(smo72229, 0);
smo69300v0ar.push(smo69268);
const smo69270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo69270.setAttribute('id', 'smo69270');
smo69300v0ar.push(smo69270);
const smo69271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo69271.setAttribute('id', 'smo69271');
smo69300v0ar.push(smo69271);
const smo69272 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo69272.setAttribute('id', 'smo69272');
smo69300v0ar.push(smo69272);
const smo69273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo69273.setAttribute('id', 'smo69273');
smo69300v0ar.push(smo69273);
const smo69274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo69274.setAttribute('id', 'smo69274');
smo69300v0ar.push(smo69274);
const smo69275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo69275.setAttribute('id', 'smo69275');
smo69300v0ar.push(smo69275);
const smo69276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo69276.setAttribute('id', 'smo69276');
smo69300v0ar.push(smo69276);
const smo69277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo69277.setAttribute('id', 'smo69277');
smo69300v0ar.push(smo69277);
const smo69278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo69278.setAttribute('id', 'smo69278');
smo69300v0ar.push(smo69278);
const smo69279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo69279.setAttribute('id', 'smo69279');
smo69300v0ar.push(smo69279);
const smo69280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo69280.setAttribute('id', 'smo69280');
smo69300v0ar.push(smo69280);
const smo69281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo69281.setAttribute('id', 'smo69281');
smo69300v0ar.push(smo69281);
const smo69282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo69282.setAttribute('id', 'smo69282');
smo69300v0ar.push(smo69282);
const smo69283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo69283.setAttribute('id', 'smo69283');
smo69300v0ar.push(smo69283);
const smo69284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo69284.setAttribute('id', 'smo69284');
smo69300v0ar.push(smo69284);
smo69300v0.addTickables(smo69300v0ar)
fmtsmo6930018.joinVoices([smo69300v0]);
const fmtsmo6991018 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo69910v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69910v0ar = [];
const smo69887 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo69887.setAttribute('id', 'smo69887');
smo69910v0ar.push(smo69887);
const smo69888 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo69888.setAttribute('id', 'smo69888');
const smo698880acc = new VF.Accidental('b');
smo69888.addModifier(smo698880acc, 0);
smo69910v0ar.push(smo69888);
const smo69889 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo69889.setAttribute('id', 'smo69889');
smo69910v0ar.push(smo69889);
const smo69890 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo69890.setAttribute('id', 'smo69890');
smo69910v0ar.push(smo69890);
const smo69891 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo69891.setAttribute('id', 'smo69891');
smo69910v0ar.push(smo69891);
const smo69892 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo69892.setAttribute('id', 'smo69892');
smo69910v0ar.push(smo69892);
const smo69893 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo69893.setAttribute('id', 'smo69893');
smo69910v0ar.push(smo69893);
const smo69894 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo69894.setAttribute('id', 'smo69894');
smo69910v0ar.push(smo69894);
smo69910v0.addTickables(smo69910v0ar)
fmtsmo6991018.joinVoices([smo69910v0]);
// create beam groups and tuplets for format grp smo70002 before formatting
const dirsmo72043 = smo69268.getStemDirection();
smo69268.setStemDirection(dirsmo72043);
smo69270.setStemDirection(dirsmo72043);
smo69271.setStemDirection(dirsmo72043);
smo69272.setStemDirection(dirsmo72043);
const smo72043 = new VF.Beam([smo69268,smo69270,smo69271,smo69272]);
const dirsmo72044 = smo69273.getStemDirection();
smo69273.setStemDirection(dirsmo72044);
smo69274.setStemDirection(dirsmo72044);
smo69275.setStemDirection(dirsmo72044);
smo69276.setStemDirection(dirsmo72044);
const smo72044 = new VF.Beam([smo69273,smo69274,smo69275,smo69276]);
const dirsmo72045 = smo69277.getStemDirection();
smo69277.setStemDirection(dirsmo72045);
smo69278.setStemDirection(dirsmo72045);
smo69279.setStemDirection(dirsmo72045);
smo69280.setStemDirection(dirsmo72045);
const smo72045 = new VF.Beam([smo69277,smo69278,smo69279,smo69280]);
const dirsmo72046 = smo69281.getStemDirection();
smo69281.setStemDirection(dirsmo72046);
smo69282.setStemDirection(dirsmo72046);
smo69283.setStemDirection(dirsmo72046);
smo69284.setStemDirection(dirsmo72046);
const smo72046 = new VF.Beam([smo69281,smo69282,smo69283,smo69284]);
const dirsmo72049 = smo69887.getStemDirection();
smo69887.setStemDirection(dirsmo72049);
smo69888.setStemDirection(dirsmo72049);
smo69889.setStemDirection(dirsmo72049);
smo69890.setStemDirection(dirsmo72049);
const smo72049 = new VF.Beam([smo69887,smo69888,smo69889,smo69890]);
const dirsmo72050 = smo69891.getStemDirection();
smo69891.setStemDirection(dirsmo72050);
smo69892.setStemDirection(dirsmo72050);
smo69893.setStemDirection(dirsmo72050);
smo69894.setStemDirection(dirsmo72050);
const smo72050 = new VF.Beam([smo69891,smo69892,smo69893,smo69894]);
 
// formatting measures in staff group smo70002
fmtsmo6930018.format([smo69300v0,smo69910v0], 395);
const stavesmo69300 = new VF.Stave(50, 1318.0000000000002, 451);
stavesmo69300.setAttribute('id', 'stavesmo69300');
stavesmo69300.setBegBarType(1);
stavesmo69300.addClef('treble');
stavesmo69300.setContext(context);
stavesmo69300.draw();
smo69300v0.draw(context, stavesmo69300);
smo72043.setContext(context);
smo72043.draw();
smo72044.setContext(context);
smo72044.draw();
smo72045.setContext(context);
smo72045.draw();
smo72046.setContext(context);
smo72046.draw();
const stavesmo69910 = new VF.Stave(50, 1452.0000000000002, 451);
stavesmo69910.setAttribute('id', 'stavesmo69910');
stavesmo69910.setBegBarType(1);
stavesmo69910.addClef('bass');
stavesmo69910.setContext(context);
stavesmo69910.draw();
smo69910v0.draw(context, stavesmo69910);
smo72049.setContext(context);
smo72049.draw();
smo72050.setContext(context);
smo72050.draw();
const leftsmo70002stavesmo693001 = new VF.StaveConnector(stavesmo69300, stavesmo69910).setType(3);
leftsmo70002stavesmo693001.setContext(context).draw();
const fmtsmo6932919 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo69329v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69329v0ar = [];
const smo69301 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo69301.setAttribute('id', 'smo69301');
smo69329v0ar.push(smo69301);
const smo69302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo69302.setAttribute('id', 'smo69302');
smo69329v0ar.push(smo69302);
const smo69303 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo69303.setAttribute('id', 'smo69303');
smo69329v0ar.push(smo69303);
const smo69304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
smo69304.setAttribute('id', 'smo69304');
smo69329v0ar.push(smo69304);
const smo69305 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
smo69305.setAttribute('id', 'smo69305');
smo69329v0ar.push(smo69305);
const smo69306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo69306.setAttribute('id', 'smo69306');
smo69329v0ar.push(smo69306);
const smo69307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
smo69307.setAttribute('id', 'smo69307');
smo69329v0ar.push(smo69307);
const smo69308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo69308.setAttribute('id', 'smo69308');
smo69329v0ar.push(smo69308);
const smo69309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
smo69309.setAttribute('id', 'smo69309');
smo69329v0ar.push(smo69309);
const smo69310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo69310.setAttribute('id', 'smo69310');
smo69329v0ar.push(smo69310);
const smo69311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo69311.setAttribute('id', 'smo69311');
smo69329v0ar.push(smo69311);
const smo69312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo69312.setAttribute('id', 'smo69312');
smo69329v0ar.push(smo69312);
const smo69313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo69313.setAttribute('id', 'smo69313');
smo69329v0ar.push(smo69313);
smo69329v0.addTickables(smo69329v0ar)
fmtsmo6932919.joinVoices([smo69329v0]);
const fmtsmo6993819 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo69938v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69938v0ar = [];
const smo69911 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo69911.setAttribute('id', 'smo69911');
smo69938v0ar.push(smo69911);
const smo69912 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo69912.setAttribute('id', 'smo69912');
smo69938v0ar.push(smo69912);
const smo69913 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo69913.setAttribute('id', 'smo69913');
smo69938v0ar.push(smo69913);
const smo69914 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo69914.setAttribute('id', 'smo69914');
smo69938v0ar.push(smo69914);
const smo69915 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo69915.setAttribute('id', 'smo69915');
smo69938v0ar.push(smo69915);
const smo69916 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo69916.setAttribute('id', 'smo69916');
smo69938v0ar.push(smo69916);
const smo69917 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo69917.setAttribute('id', 'smo69917');
smo69938v0ar.push(smo69917);
const smo69918 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo69918.setAttribute('id', 'smo69918');
smo69938v0ar.push(smo69918);
const smo69919 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo69919.setAttribute('id', 'smo69919');
smo69938v0ar.push(smo69919);
const smo69920 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo69920.setAttribute('id', 'smo69920');
smo69938v0ar.push(smo69920);
const smo69921 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo69921.setAttribute('id', 'smo69921');
smo69938v0ar.push(smo69921);
const smo69922 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo69922.setAttribute('id', 'smo69922');
smo69938v0ar.push(smo69922);
smo69938v0.addTickables(smo69938v0ar)
fmtsmo6993819.joinVoices([smo69938v0]);
// create beam groups and tuplets for format grp smo70002 before formatting
const dirsmo72053 = smo69301.getStemDirection();
smo69301.setStemDirection(dirsmo72053);
smo69302.setStemDirection(dirsmo72053);
smo69303.setStemDirection(dirsmo72053);
smo69304.setStemDirection(dirsmo72053);
const smo72053 = new VF.Beam([smo69301,smo69302,smo69303,smo69304]);
const dirsmo72054 = smo69305.getStemDirection();
smo69305.setStemDirection(dirsmo72054);
smo69306.setStemDirection(dirsmo72054);
smo69307.setStemDirection(dirsmo72054);
smo69308.setStemDirection(dirsmo72054);
const smo72054 = new VF.Beam([smo69305,smo69306,smo69307,smo69308]);
const dirsmo72055 = smo69309.getStemDirection();
smo69309.setStemDirection(dirsmo72055);
smo69310.setStemDirection(dirsmo72055);
const smo72055 = new VF.Beam([smo69309,smo69310]);
const dirsmo72056 = smo69311.getStemDirection();
smo69311.setStemDirection(dirsmo72056);
smo69312.setStemDirection(dirsmo72056);
smo69313.setStemDirection(dirsmo72056);
const smo72056 = new VF.Beam([smo69311,smo69312,smo69313]);
const dirsmo72059 = smo69911.getStemDirection();
smo69911.setStemDirection(dirsmo72059);
smo69912.setStemDirection(dirsmo72059);
const smo72059 = new VF.Beam([smo69911,smo69912]);
const dirsmo72060 = smo69913.getStemDirection();
smo69913.setStemDirection(dirsmo72060);
smo69914.setStemDirection(dirsmo72060);
const smo72060 = new VF.Beam([smo69913,smo69914]);
const dirsmo72061 = smo69915.getStemDirection();
smo69915.setStemDirection(dirsmo72061);
smo69916.setStemDirection(dirsmo72061);
smo69917.setStemDirection(dirsmo72061);
smo69918.setStemDirection(dirsmo72061);
const smo72061 = new VF.Beam([smo69915,smo69916,smo69917,smo69918]);
const dirsmo72062 = smo69919.getStemDirection();
smo69919.setStemDirection(dirsmo72062);
smo69920.setStemDirection(dirsmo72062);
smo69921.setStemDirection(dirsmo72062);
smo69922.setStemDirection(dirsmo72062);
const smo72062 = new VF.Beam([smo69919,smo69920,smo69921,smo69922]);
 
// formatting measures in staff group smo70002
fmtsmo6932919.format([smo69329v0,smo69938v0], 368);
const stavesmo69329 = new VF.Stave(501, 1318.0000000000002, 382);
stavesmo69329.setAttribute('id', 'stavesmo69329');
stavesmo69329.setBegBarType(VF.Barline.type.NONE);
stavesmo69329.setContext(context);
stavesmo69329.draw();
smo69329v0.draw(context, stavesmo69329);
smo72053.setContext(context);
smo72053.draw();
smo72054.setContext(context);
smo72054.draw();
smo72055.setContext(context);
smo72055.draw();
smo72056.setContext(context);
smo72056.draw();
const stavesmo69938 = new VF.Stave(501, 1452.0000000000002, 382);
stavesmo69938.setAttribute('id', 'stavesmo69938');
stavesmo69938.setBegBarType(VF.Barline.type.NONE);
stavesmo69938.setContext(context);
stavesmo69938.draw();
smo69938v0.draw(context, stavesmo69938);
smo72059.setContext(context);
smo72059.draw();
smo72060.setContext(context);
smo72060.draw();
smo72061.setContext(context);
smo72061.draw();
smo72062.setContext(context);
smo72062.draw();
const fmtsmo6936120 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo69361v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69361v0ar = [];
const smo69330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo69330.setAttribute('id', 'smo69330');
smo69361v0ar.push(smo69330);
const smo69331 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo69331.setAttribute('id', 'smo69331');
smo69361v0ar.push(smo69331);
const smo69332 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo69332.setAttribute('id', 'smo69332');
smo69361v0ar.push(smo69332);
const smo69333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo69333.setAttribute('id', 'smo69333');
smo69361v0ar.push(smo69333);
const smo69334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo69334.setAttribute('id', 'smo69334');
smo69361v0ar.push(smo69334);
const smo69335 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo69335.setAttribute('id', 'smo69335');
smo69361v0ar.push(smo69335);
const smo69336 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo69336.setAttribute('id', 'smo69336');
smo69361v0ar.push(smo69336);
const smo69337 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo69337.setAttribute('id', 'smo69337');
smo69361v0ar.push(smo69337);
const smo69338 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo69338.setAttribute('id', 'smo69338');
smo69361v0ar.push(smo69338);
const smo69339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo69339.setAttribute('id', 'smo69339');
smo69361v0ar.push(smo69339);
const smo69340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo69340.setAttribute('id', 'smo69340');
smo69361v0ar.push(smo69340);
const smo69341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo69341.setAttribute('id', 'smo69341');
smo69361v0ar.push(smo69341);
const smo69342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo69342.setAttribute('id', 'smo69342');
smo69361v0ar.push(smo69342);
const smo69343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo69343.setAttribute('id', 'smo69343');
smo69361v0ar.push(smo69343);
const smo69344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo69344.setAttribute('id', 'smo69344');
smo69361v0ar.push(smo69344);
const smo69345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
smo69345.setAttribute('id', 'smo69345');
smo69361v0ar.push(smo69345);
smo69361v0.addTickables(smo69361v0ar)
fmtsmo6936120.joinVoices([smo69361v0]);
const fmtsmo6996620 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo69966v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69966v0ar = [];
const smo69939 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo69939.setAttribute('id', 'smo69939');
smo69966v0ar.push(smo69939);
const smo69940 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo69940.setAttribute('id', 'smo69940');
smo69966v0ar.push(smo69940);
const smo69941 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo69941.setAttribute('id', 'smo69941');
smo69966v0ar.push(smo69941);
const smo69942 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo69942.setAttribute('id', 'smo69942');
smo69966v0ar.push(smo69942);
const smo69943 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo69943.setAttribute('id', 'smo69943');
smo69966v0ar.push(smo69943);
const smo69944 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo69944.setAttribute('id', 'smo69944');
smo69966v0ar.push(smo69944);
const smo69945 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo69945.setAttribute('id', 'smo69945');
smo69966v0ar.push(smo69945);
const smo69946 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo69946.setAttribute('id', 'smo69946');
smo69966v0ar.push(smo69946);
const smo69947 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo69947.setAttribute('id', 'smo69947');
const  smo72238 = new VF.Articulation('a.').setPosition(3);
smo69947.addModifier(smo72238, 0);
smo69966v0ar.push(smo69947);
const smo69949 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo69949.setAttribute('id', 'smo69949');
const  smo72239 = new VF.Articulation('a.').setPosition(3);
smo69949.addModifier(smo72239, 0);
smo69966v0ar.push(smo69949);
smo69966v0.addTickables(smo69966v0ar)
fmtsmo6996620.joinVoices([smo69966v0]);
// create beam groups and tuplets for format grp smo70002 before formatting
const dirsmo72065 = smo69330.getStemDirection();
smo69330.setStemDirection(dirsmo72065);
smo69331.setStemDirection(dirsmo72065);
smo69332.setStemDirection(dirsmo72065);
smo69333.setStemDirection(dirsmo72065);
const smo72065 = new VF.Beam([smo69330,smo69331,smo69332,smo69333]);
const dirsmo72066 = smo69334.getStemDirection();
smo69334.setStemDirection(dirsmo72066);
smo69335.setStemDirection(dirsmo72066);
smo69336.setStemDirection(dirsmo72066);
smo69337.setStemDirection(dirsmo72066);
const smo72066 = new VF.Beam([smo69334,smo69335,smo69336,smo69337]);
const dirsmo72067 = smo69338.getStemDirection();
smo69338.setStemDirection(dirsmo72067);
smo69339.setStemDirection(dirsmo72067);
smo69340.setStemDirection(dirsmo72067);
smo69341.setStemDirection(dirsmo72067);
const smo72067 = new VF.Beam([smo69338,smo69339,smo69340,smo69341]);
const dirsmo72068 = smo69342.getStemDirection();
smo69342.setStemDirection(dirsmo72068);
smo69343.setStemDirection(dirsmo72068);
smo69344.setStemDirection(dirsmo72068);
smo69345.setStemDirection(dirsmo72068);
const smo72068 = new VF.Beam([smo69342,smo69343,smo69344,smo69345]);
const dirsmo72071 = smo69939.getStemDirection();
smo69939.setStemDirection(dirsmo72071);
smo69940.setStemDirection(dirsmo72071);
const smo72071 = new VF.Beam([smo69939,smo69940]);
const dirsmo72072 = smo69941.getStemDirection();
smo69941.setStemDirection(dirsmo72072);
smo69942.setStemDirection(dirsmo72072);
const smo72072 = new VF.Beam([smo69941,smo69942]);
const dirsmo72073 = smo69943.getStemDirection();
smo69943.setStemDirection(dirsmo72073);
smo69944.setStemDirection(dirsmo72073);
smo69945.setStemDirection(dirsmo72073);
smo69946.setStemDirection(dirsmo72073);
const smo72073 = new VF.Beam([smo69943,smo69944,smo69945,smo69946]);
const dirsmo72074 = smo69947.getStemDirection();
smo69947.setStemDirection(dirsmo72074);
smo69949.setStemDirection(dirsmo72074);
const smo72074 = new VF.Beam([smo69947,smo69949]);
 
// formatting measures in staff group smo70002
fmtsmo6936120.format([smo69361v0,smo69966v0], 363);
const stavesmo69361 = new VF.Stave(883, 1318.0000000000002, 377);
stavesmo69361.setAttribute('id', 'stavesmo69361');
stavesmo69361.setBegBarType(VF.Barline.type.NONE);
stavesmo69361.setContext(context);
stavesmo69361.draw();
smo69361v0.draw(context, stavesmo69361);
smo72065.setContext(context);
smo72065.draw();
smo72066.setContext(context);
smo72066.draw();
smo72067.setContext(context);
smo72067.draw();
smo72068.setContext(context);
smo72068.draw();
const stavesmo69966 = new VF.Stave(883, 1452.0000000000002, 377);
stavesmo69966.setAttribute('id', 'stavesmo69966');
stavesmo69966.setBegBarType(VF.Barline.type.NONE);
stavesmo69966.setContext(context);
stavesmo69966.draw();
smo69966v0.draw(context, stavesmo69966);
smo72071.setContext(context);
smo72071.draw();
smo72072.setContext(context);
smo72072.draw();
smo72073.setContext(context);
smo72073.draw();
smo72074.setContext(context);
smo72074.draw();
const rightsmo70002stavesmo693611 = new VF.StaveConnector(stavesmo69361, stavesmo69966).setType(0);
rightsmo70002stavesmo693611.setContext(context).draw();
// modifier from 0-10-0-1 to 0-10-0-4
const smo72244 = new VF.Curve(smo69056, smo69059, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":1,"position_end":2}'));
smo72244.setContext(context).draw();
// modifier from 0-10-0-5 to 0-11-0-0
const smo72245 = new VF.Curve(smo69060, smo69079, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo72245.setContext(context).draw();
// modifier from 0-11-0-1 to 0-11-0-6
const smo72246 = new VF.Curve(smo69080, smo69085, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo72246.setContext(context).draw();
// modifier from 0-15-0-8 to 0-16-0-0
const smo72247 = new VF.Curve(smo69200, null, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"position_end":1}'));
smo72247.setContext(context).draw();
// modifier from 0-15-0-8 to 0-16-0-0
const smo72248 = new VF.Curve(null, smo69217, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"position_end":1}'));
smo72248.setContext(context).draw();
// modifier from 0-17-0-8 to 0-18-0-0
const smo72249 = new VF.Curve(smo69251, null, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"position_end":1}'));
smo72249.setContext(context).draw();
// modifier from 0-17-0-8 to 0-18-0-0
const smo72250 = new VF.Curve(null, smo69268, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"position_end":1}'));
smo72250.setContext(context).draw();
// modifier from 0-16-0-8 to 0-17-0-0
const smo72251 = new VF.Curve(smo69226, smo69243, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo72251.setContext(context).draw();
// modifier from 1-15-0-0 to 1-15-0-1
const smo72252 = new VF.Curve(smo69812, smo69813, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo72252.setContext(context).draw();
// modifier from 1-16-0-0 to 1-16-0-1
const smo72253 = new VF.Curve(smo69837, smo69838, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo72253.setContext(context).draw();
// modifier from 1-17-0-0 to 1-17-0-1
const smo72254 = new VF.Curve(smo69862, smo69863, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo72254.setContext(context).draw();
// modifier from 1-18-0-1 to 1-18-0-4
const smo72255 = new VF.Curve(smo69888, smo69891, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo72255.setContext(context).draw();
// modifier from 1-18-0-5 to 1-19-0-0
const smo72256 = new VF.Curve(smo69892, smo69911, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo72256.setContext(context).draw();
}